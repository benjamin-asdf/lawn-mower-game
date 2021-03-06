(ns
    benjamin.lawnmower.core
    (:require
     [reagent.dom :as rdom]
     [re-frame.core :as rf]
     [goog.events.KeyCodes :as keycodes]
     [goog.events :as gev])
    (:import [goog.events KeyHandler]))

(def lawn-dimensions [3 3])
(def lawn-px 10)

(defn
  visit-pieces
  [{:game/keys [player] :as db}]
  (let [[y x] player]
    (update-in
     db
     [:game/lawn y x :lawn-piece/visited?]
     (constantly true))))

(defn
  win?
  [{:game/keys [lawn]}]
  (->>
   lawn
   (sequence
    (comp
     cat
     (remove :lawn-piece/visited?)))
   seq
   not))

(defn make-lawn
  [[y x]]
  (into
   []
   (for
       [y (range y)]
       (into
        []
        (for
            [x (range x)]
            {:lawn-piece/pos [y x]
             :lawn-piece/visited? false})))))

(def init-db
  (visit-pieces
   {:game/lawn (make-lawn lawn-dimensions)
    :game/won? false
    :game/player [0 0]}))

(rf/reg-event-db
  :initialize-db
  (fn [_ _]
    init-db))

(defn win-screen []
  [:h1
   {:style {:color "red"}}
   "You mowned the lawn!"
   [:div
    {:style {:width "15rem" :height "15rem"}}
    [:img
     {:src
      "https://clipartmag.com/images/lawn-mower-cartoon-pictures-7.jpg"}]]])

(defn player-ui [pos]
  [:img
   {:src "https://clipartmag.com/images/lawn-mower-cartoon-pictures-7.jpg"
    :key pos
    ;; :style
    ;; {:height lawn-px :width lawn-px}
    }])

(defn
  piece-of-lawn
  [{:lawn-piece/keys [pos visited?]}
   player]
  (if
      (= pos player)
      (player-ui pos)
      [:div
       {:key pos
        :style {:background (if
                                visited?
                                "yellowgreen"
                                "green")}}]))


(defn lawn-grid [lawn player]
  (doall
   (map
    (fn [row]
      (doall (map #(piece-of-lawn % player) row)))
    lawn)))

(defonce click-listener (atom nil))
(defn mount-click []
  (let [listener
        (fn [ev]
          (rf/dispatch
           [::click [(.-clientX ev)
                     (.-clientY ev)]]))]
    (js/document.addEventListener "click" listener)
    (reset! click-listener listener)))

(defn
  unmount
  []
  (js/document.removeEventListener
   "click"
   @click-listener))

(comment
  (seq
   (sequence
    (comp
     cat
     (filter :visited?))
    (make-lawn [1 1])))

  (piece-of-lawn
   (ffirst (make-lawn [1 1])) [0 0])
  (lawn-grid (make-lawn [3 3]) [0 0]))

(rf/reg-sub :game/lawn :game/lawn)
(rf/reg-sub :game/won? :game/won?)
(rf/reg-sub :game/player :game/player)

(defn
  button
  [txt evt]
  [:div
   {:style {:background "yellow"}
    :on-click (fn
                []
                (rf/dispatch
                 [:player/mv evt]))}
   [:button txt]])

(defn game []
  (let [lawn @(rf/subscribe [:game/lawn])
        player @(rf/subscribe [:game/player])
        won? @(rf/subscribe [:game/won?])]
    (println won?)
    (if
        won?
        [win-screen]
        [:h1 "Mow the lawn"
         [:div
          {:style
           {:width "12rem"
            :height "12rem"
            :display :grid
            :grid-template-rows (str "repeat(3, " 3 "rem)")
            :grid-template-columns (str "repeat(3, " 3 "rem)")
            :grid-auto-flow :column}}
          (lawn-grid lawn player)]
         [button "up" :up]
         [button "down" :down]
         [button "left" :left]
         [button "right" :right]])))

(defn capture-key
  "Given a `keycode`, execute function `f` "
  [keycode-map]
  (let [key-handler (KeyHandler. js/document)
        press-fn (fn [key-press]
                   (js/console.log (prn-str key-press))
                   (when-let [f (get keycode-map (.. key-press -keyCode))]
                     (f)))]
    (gev/listen key-handler
                "key"
                ;; (-> KeyHandler .-EventType .-KEY)
                press-fn)))

;; start is called by init and after code reloading finishes

(defn ^:dev/after-load start []
  ;; (mount-click)
  ;; (gev/)
  (capture-key
   {keycodes/J
    (fn []
      (rf/dispatch [:player/mv :down]))
    keycodes/DOWN
    (fn []
      (rf/dispatch [:player/mv :down]))
    keycodes/UP
    (fn []
      (rf/dispatch [:player/mv :up]))
    keycodes/K
    (fn []
      (rf/dispatch [:player/mv :up]))
    keycodes/H
    (fn []
      (rf/dispatch [:player/mv :left]))
    keycodes/L
    (fn []
      (rf/dispatch [:player/mv :right]))
    keycodes/LEFT
    (fn []
      (rf/dispatch [:player/mv :left]))
    keycodes/RIGHT
    (fn []
      (rf/dispatch [:player/mv :right]))})
  (rdom/render
   [game]
   (.getElementById js/document "lawnmovergame")))


(def wrap-player-on-board
  (rf/enrich
   (fn [{:game/keys [lawn player] :as db} _]
     (let [max-y (dec (count (first lawn)))
           max-x (dec (count lawn))
           [player-x player-y] player]
       (assoc
        db
        :game/player
        [(cond
           (< max-x player-x) 0
           (< player-x 0) max-x
           :else player-x)
         (cond
           (< max-y player-y) 0
           (< player-y 0) max-y
           (< max-x player-x) (min max-y (inc player-y))
           :else player-y)])))))

(def set-pieces-visited
  (rf/enrich
   (fn [db _]
     (visit-pieces db))))

(def set-win?
  (rf/enrich
   (fn [db _]
     (println "set win?" (win? db))
     (assoc db :game/won? (win? db)))))

(rf/reg-event-db
 :player/mv
 [set-pieces-visited wrap-player-on-board set-win?]
 (fn [db [_ direction]]
   (let [mv
         (fn [[x y]]
           (case direction
             :left [(dec x) y] :right [(inc x) y]
             :down [x (inc y)] :up [x (dec y)]))]
     (update db :game/player mv))))

(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (rf/dispatch-sync [:initialize-db])
  (js/console.log "start")
  (start))


; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (unmount)
  (js/console.log "stop"))

(comment
  (require '[re-frame.db])
  (win? @re-frame.db/app-db)

  (rf/dispatch-sync [:initialize-db])
  (rf/dispatch-sync [:player/mv :down])
  (do (rf/dispatch-sync [:player/mv :left])
      (:game/player @re-frame.db/app-db))
  (do (rf/dispatch-sync [:player/mv :down])
      @re-frame.db/app-db)
  (do (rf/dispatch-sync [:player/mv :left])
      @re-frame.db/app-db)

  (reset! re-frame.db/app-db init-db)
  )

;; win screen
;; move by click
