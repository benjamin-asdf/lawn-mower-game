goog.provide('benjamin.lawnmower.core');
benjamin.lawnmower.core.lawn_dimensions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null);
benjamin.lawnmower.core.mower_link = "https://i.imgur.com/4SfnQ1I.jpeg";
benjamin.lawnmower.core.visit_pieces = (function benjamin$lawnmower$core$visit_pieces(p__46986){
var map__46987 = p__46986;
var map__46987__$1 = cljs.core.__destructure_map(map__46987);
var db = map__46987__$1;
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46987__$1,new cljs.core.Keyword("game","player","game/player",-100824090));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["visit-pieces",player], 0));

var vec__46988 = player;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46988,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46988,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","lawn","game/lawn",510179719),y,x,new cljs.core.Keyword("lawn-piece","visited?","lawn-piece/visited?",-1371452684)], null),cljs.core.constantly(true));
});
benjamin.lawnmower.core.make_lawn = (function benjamin$lawnmower$core$make_lawn(p__46991){
var vec__46992 = p__46991;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46992,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46992,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5520__auto__ = (function benjamin$lawnmower$core$make_lawn_$_iter__46995(s__46996){
return (new cljs.core.LazySeq(null,(function (){
var s__46996__$1 = s__46996;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46996__$1);
if(temp__5804__auto__){
var s__46996__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46996__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__46996__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__46998 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__46997 = (0);
while(true){
if((i__46997 < size__5519__auto__)){
var y__$1 = cljs.core._nth(c__5518__auto__,i__46997);
cljs.core.chunk_append(b__46998,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5520__auto__ = ((function (i__46997,y__$1,c__5518__auto__,size__5519__auto__,b__46998,s__46996__$2,temp__5804__auto__,vec__46992,y,x){
return (function benjamin$lawnmower$core$make_lawn_$_iter__46995_$_iter__46999(s__47000){
return (new cljs.core.LazySeq(null,((function (i__46997,y__$1,c__5518__auto__,size__5519__auto__,b__46998,s__46996__$2,temp__5804__auto__,vec__46992,y,x){
return (function (){
var s__47000__$1 = s__47000;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__47000__$1);
if(temp__5804__auto____$1){
var s__47000__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47000__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__47000__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__47002 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__47001 = (0);
while(true){
if((i__47001 < size__5519__auto____$1)){
var x__$1 = cljs.core._nth(c__5518__auto____$1,i__47001);
cljs.core.chunk_append(b__47002,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lawn-piece","pos","lawn-piece/pos",1639811871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y__$1,x__$1], null),new cljs.core.Keyword("lawn-piece","visited?","lawn-piece/visited?",-1371452684),false], null));

var G__47024 = (i__47001 + (1));
i__47001 = G__47024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47002),benjamin$lawnmower$core$make_lawn_$_iter__46995_$_iter__46999(cljs.core.chunk_rest(s__47000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47002),null);
}
} else {
var x__$1 = cljs.core.first(s__47000__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lawn-piece","pos","lawn-piece/pos",1639811871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y__$1,x__$1], null),new cljs.core.Keyword("lawn-piece","visited?","lawn-piece/visited?",-1371452684),false], null),benjamin$lawnmower$core$make_lawn_$_iter__46995_$_iter__46999(cljs.core.rest(s__47000__$2)));
}
} else {
return null;
}
break;
}
});})(i__46997,y__$1,c__5518__auto__,size__5519__auto__,b__46998,s__46996__$2,temp__5804__auto__,vec__46992,y,x))
,null,null));
});})(i__46997,y__$1,c__5518__auto__,size__5519__auto__,b__46998,s__46996__$2,temp__5804__auto__,vec__46992,y,x))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(x));
})()));

var G__47025 = (i__46997 + (1));
i__46997 = G__47025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46998),benjamin$lawnmower$core$make_lawn_$_iter__46995(cljs.core.chunk_rest(s__46996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46998),null);
}
} else {
var y__$1 = cljs.core.first(s__46996__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5520__auto__ = ((function (y__$1,s__46996__$2,temp__5804__auto__,vec__46992,y,x){
return (function benjamin$lawnmower$core$make_lawn_$_iter__46995_$_iter__47003(s__47004){
return (new cljs.core.LazySeq(null,(function (){
var s__47004__$1 = s__47004;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__47004__$1);
if(temp__5804__auto____$1){
var s__47004__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47004__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47004__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47006 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47005 = (0);
while(true){
if((i__47005 < size__5519__auto__)){
var x__$1 = cljs.core._nth(c__5518__auto__,i__47005);
cljs.core.chunk_append(b__47006,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lawn-piece","pos","lawn-piece/pos",1639811871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y__$1,x__$1], null),new cljs.core.Keyword("lawn-piece","visited?","lawn-piece/visited?",-1371452684),false], null));

var G__47026 = (i__47005 + (1));
i__47005 = G__47026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47006),benjamin$lawnmower$core$make_lawn_$_iter__46995_$_iter__47003(cljs.core.chunk_rest(s__47004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47006),null);
}
} else {
var x__$1 = cljs.core.first(s__47004__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lawn-piece","pos","lawn-piece/pos",1639811871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y__$1,x__$1], null),new cljs.core.Keyword("lawn-piece","visited?","lawn-piece/visited?",-1371452684),false], null),benjamin$lawnmower$core$make_lawn_$_iter__46995_$_iter__47003(cljs.core.rest(s__47004__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(y__$1,s__46996__$2,temp__5804__auto__,vec__46992,y,x))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(x));
})()),benjamin$lawnmower$core$make_lawn_$_iter__46995(cljs.core.rest(s__46996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(y));
})());
});
benjamin.lawnmower.core.init_db = benjamin.lawnmower.core.visit_pieces(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("game","lawn","game/lawn",510179719),benjamin.lawnmower.core.make_lawn(benjamin.lawnmower.core.lawn_dimensions),new cljs.core.Keyword("game","player","game/player",-100824090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return benjamin.lawnmower.core.init_db;
}));
benjamin.lawnmower.core.player_ui = (function benjamin$lawnmower$core$player_ui(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),benjamin.lawnmower.core.mower_link,new cljs.core.Keyword(null,"alt","alt",-3214426),"foo",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null)], null);
});
benjamin.lawnmower.core.piece_of_lawn = (function benjamin$lawnmower$core$piece_of_lawn(p__47007,player){
var map__47008 = p__47007;
var map__47008__$1 = cljs.core.__destructure_map(map__47008);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47008__$1,new cljs.core.Keyword("lawn-piece","pos","lawn-piece/pos",1639811871));
var visited_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47008__$1,new cljs.core.Keyword("lawn-piece","visited?","lawn-piece/visited?",-1371452684));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,player)){
return benjamin.lawnmower.core.player_ui();
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),pos,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(visited_QMARK_)?"yellowgreen":"green")], null)], null)], null);
}
});
benjamin.lawnmower.core.lawn_grid = (function benjamin$lawnmower$core$lawn_grid(lawn,player){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47009_SHARP_){
return benjamin.lawnmower.core.piece_of_lawn(p1__47009_SHARP_,player);
}),row));
}),lawn));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game","lawn","game/lawn",510179719),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("game","lawn","game/lawn",510179719)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game","player","game/player",-100824090),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("game","player","game/player",-100824090)], 0));
benjamin.lawnmower.core.game = (function benjamin$lawnmower$core$game(){
var lawn = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","lawn","game/lawn",510179719)], null)));
var player = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","player","game/player",-100824090)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Mawn the lawn",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"repeat(3, 100px)",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat(3, 100px)",new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),benjamin.lawnmower.core.lawn_grid(lawn,player)], null)], null);
});
/**
 * Given a `keycode`, execute function `f` 
 */
benjamin.lawnmower.core.capture_key = (function benjamin$lawnmower$core$capture_key(keycode_map){
var key_handler = (new goog.events.KeyHandler(document));
var press_fn = (function (key_press){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keycode_map,key_press.keyCode);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
return goog.events.listen(key_handler,goog.events.KeyHandler.EventType.KEY,press_fn);
});
benjamin.lawnmower.core.start = (function benjamin$lawnmower$core$start(){
benjamin.lawnmower.core.capture_key(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.J,(function (){
console.log("hi1");

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","mv","player/mv",492503940),new cljs.core.Keyword(null,"down","down",1565245570)], null));
}),goog.events.KeyCodes.DOWN,(function (){
console.log("hi1");

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","mv","player/mv",492503940),new cljs.core.Keyword(null,"down","down",1565245570)], null));
}),goog.events.KeyCodes.UP,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","mv","player/mv",492503940),new cljs.core.Keyword(null,"up","up",-269712113)], null));
}),goog.events.KeyCodes.K,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","mv","player/mv",492503940),new cljs.core.Keyword(null,"up","up",-269712113)], null));
}),goog.events.KeyCodes.H,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","mv","player/mv",492503940),new cljs.core.Keyword(null,"left","left",-399115937)], null));
}),goog.events.KeyCodes.L,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","mv","player/mv",492503940),new cljs.core.Keyword(null,"right","right",-452581833)], null));
}),goog.events.KeyCodes.LEFT,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","mv","player/mv",492503940),new cljs.core.Keyword(null,"left","left",-399115937)], null));
}),goog.events.KeyCodes.RIGHT,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","mv","player/mv",492503940),new cljs.core.Keyword(null,"right","right",-452581833)], null));
})]));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [benjamin.lawnmower.core.game], null),document.getElementById("lawnmovergame"));
});
benjamin.lawnmower.core.init = (function benjamin$lawnmower$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

console.log("start");

return benjamin.lawnmower.core.start();
});
benjamin.lawnmower.core.stop = (function benjamin$lawnmower$core$stop(){
return console.log("stop");
});
benjamin.lawnmower.core.wrap_player_on_board = re_frame.core.enrich((function (p__47010,_){
var map__47011 = p__47010;
var map__47011__$1 = cljs.core.__destructure_map(map__47011);
var db = map__47011__$1;
var lawn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011__$1,new cljs.core.Keyword("game","lawn","game/lawn",510179719));
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011__$1,new cljs.core.Keyword("game","player","game/player",-100824090));
var max_y = (cljs.core.count(cljs.core.first(lawn)) - (1));
var max_x = (cljs.core.count(lawn) - (1));
var vec__47012 = player;
var player_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47012,(0),null);
var player_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47012,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wrap: ",player], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("game","player","game/player",-100824090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((max_x < player_x))?(0):(((player_x < (0)))?max_x:player_x
)),(((max_y < player_y))?(0):(((player_y < (0)))?max_y:player_y
))], null));
}));
benjamin.lawnmower.core.set_pieces_visited = re_frame.core.enrich((function (db,_){
return benjamin.lawnmower.core.visit_pieces(db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("player","mv","player/mv",492503940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [benjamin.lawnmower.core.set_pieces_visited,benjamin.lawnmower.core.wrap_player_on_board], null),(function (db,p__47015){
var vec__47016 = p__47015;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47016,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47016,(1),null);
var mv = (function (p__47019){
var vec__47020 = p__47019;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47020,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47020,(1),null);
var G__47023 = direction;
var G__47023__$1 = (((G__47023 instanceof cljs.core.Keyword))?G__47023.fqn:null);
switch (G__47023__$1) {
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null);

break;
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47023__$1)].join('')));

}
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("game","player","game/player",-100824090),mv);
}));

//# sourceMappingURL=benjamin.lawnmower.core.js.map
