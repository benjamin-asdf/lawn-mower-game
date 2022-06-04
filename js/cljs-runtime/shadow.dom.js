goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46299 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46299(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46300 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46300(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45641 = coll;
var G__45642 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45641,G__45642) : shadow.dom.lazy_native_coll_seq.call(null,G__45641,G__45642));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45678 = arguments.length;
switch (G__45678) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45690 = arguments.length;
switch (G__45690) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45697 = arguments.length;
switch (G__45697) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45700 = arguments.length;
switch (G__45700) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45714 = arguments.length;
switch (G__45714) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45726 = arguments.length;
switch (G__45726) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45737){if((e45737 instanceof Object)){
var e = e45737;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45737;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45740 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45741 = null;
var count__45742 = (0);
var i__45743 = (0);
while(true){
if((i__45743 < count__45742)){
var el = chunk__45741.cljs$core$IIndexed$_nth$arity$2(null,i__45743);
var handler_46307__$1 = ((function (seq__45740,chunk__45741,count__45742,i__45743,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45740,chunk__45741,count__45742,i__45743,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46307__$1);


var G__46308 = seq__45740;
var G__46309 = chunk__45741;
var G__46310 = count__45742;
var G__46311 = (i__45743 + (1));
seq__45740 = G__46308;
chunk__45741 = G__46309;
count__45742 = G__46310;
i__45743 = G__46311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45740);
if(temp__5804__auto__){
var seq__45740__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45740__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45740__$1);
var G__46312 = cljs.core.chunk_rest(seq__45740__$1);
var G__46313 = c__5565__auto__;
var G__46314 = cljs.core.count(c__5565__auto__);
var G__46315 = (0);
seq__45740 = G__46312;
chunk__45741 = G__46313;
count__45742 = G__46314;
i__45743 = G__46315;
continue;
} else {
var el = cljs.core.first(seq__45740__$1);
var handler_46316__$1 = ((function (seq__45740,chunk__45741,count__45742,i__45743,el,seq__45740__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45740,chunk__45741,count__45742,i__45743,el,seq__45740__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46316__$1);


var G__46317 = cljs.core.next(seq__45740__$1);
var G__46318 = null;
var G__46319 = (0);
var G__46320 = (0);
seq__45740 = G__46317;
chunk__45741 = G__46318;
count__45742 = G__46319;
i__45743 = G__46320;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45768 = arguments.length;
switch (G__45768) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45770 = cljs.core.seq(events);
var chunk__45771 = null;
var count__45772 = (0);
var i__45773 = (0);
while(true){
if((i__45773 < count__45772)){
var vec__45787 = chunk__45771.cljs$core$IIndexed$_nth$arity$2(null,i__45773);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46322 = seq__45770;
var G__46323 = chunk__45771;
var G__46324 = count__45772;
var G__46325 = (i__45773 + (1));
seq__45770 = G__46322;
chunk__45771 = G__46323;
count__45772 = G__46324;
i__45773 = G__46325;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45770);
if(temp__5804__auto__){
var seq__45770__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45770__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45770__$1);
var G__46326 = cljs.core.chunk_rest(seq__45770__$1);
var G__46327 = c__5565__auto__;
var G__46328 = cljs.core.count(c__5565__auto__);
var G__46329 = (0);
seq__45770 = G__46326;
chunk__45771 = G__46327;
count__45772 = G__46328;
i__45773 = G__46329;
continue;
} else {
var vec__45796 = cljs.core.first(seq__45770__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45796,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46330 = cljs.core.next(seq__45770__$1);
var G__46331 = null;
var G__46332 = (0);
var G__46333 = (0);
seq__45770 = G__46330;
chunk__45771 = G__46331;
count__45772 = G__46332;
i__45773 = G__46333;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45802 = cljs.core.seq(styles);
var chunk__45804 = null;
var count__45805 = (0);
var i__45806 = (0);
while(true){
if((i__45806 < count__45805)){
var vec__45821 = chunk__45804.cljs$core$IIndexed$_nth$arity$2(null,i__45806);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45821,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46334 = seq__45802;
var G__46335 = chunk__45804;
var G__46336 = count__45805;
var G__46337 = (i__45806 + (1));
seq__45802 = G__46334;
chunk__45804 = G__46335;
count__45805 = G__46336;
i__45806 = G__46337;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45802);
if(temp__5804__auto__){
var seq__45802__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45802__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45802__$1);
var G__46338 = cljs.core.chunk_rest(seq__45802__$1);
var G__46339 = c__5565__auto__;
var G__46340 = cljs.core.count(c__5565__auto__);
var G__46341 = (0);
seq__45802 = G__46338;
chunk__45804 = G__46339;
count__45805 = G__46340;
i__45806 = G__46341;
continue;
} else {
var vec__45834 = cljs.core.first(seq__45802__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45834,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45834,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46342 = cljs.core.next(seq__45802__$1);
var G__46343 = null;
var G__46344 = (0);
var G__46345 = (0);
seq__45802 = G__46342;
chunk__45804 = G__46343;
count__45805 = G__46344;
i__45806 = G__46345;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45841_46346 = key;
var G__45841_46347__$1 = (((G__45841_46346 instanceof cljs.core.Keyword))?G__45841_46346.fqn:null);
switch (G__45841_46347__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46349 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_46349,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_46349,"aria-");
}
})())){
el.setAttribute(ks_46349,value);
} else {
(el[ks_46349] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45865){
var map__45866 = p__45865;
var map__45866__$1 = cljs.core.__destructure_map(map__45866);
var props = map__45866__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45866__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45867 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45867,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45867,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45867,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45871 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45871,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45871;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45880 = arguments.length;
switch (G__45880) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45881){
var vec__45882 = p__45881;
var seq__45883 = cljs.core.seq(vec__45882);
var first__45884 = cljs.core.first(seq__45883);
var seq__45883__$1 = cljs.core.next(seq__45883);
var nn = first__45884;
var first__45884__$1 = cljs.core.first(seq__45883__$1);
var seq__45883__$2 = cljs.core.next(seq__45883__$1);
var np = first__45884__$1;
var nc = seq__45883__$2;
var node = vec__45882;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45901 = nn;
var G__45902 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45901,G__45902) : create_fn.call(null,G__45901,G__45902));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45906 = nn;
var G__45907 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45906,G__45907) : create_fn.call(null,G__45906,G__45907));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45920 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45920,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45920,(1),null);
var seq__45923_46352 = cljs.core.seq(node_children);
var chunk__45924_46353 = null;
var count__45925_46354 = (0);
var i__45926_46355 = (0);
while(true){
if((i__45926_46355 < count__45925_46354)){
var child_struct_46357 = chunk__45924_46353.cljs$core$IIndexed$_nth$arity$2(null,i__45926_46355);
var children_46358 = shadow.dom.dom_node(child_struct_46357);
if(cljs.core.seq_QMARK_(children_46358)){
var seq__45948_46359 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46358));
var chunk__45950_46360 = null;
var count__45951_46361 = (0);
var i__45952_46362 = (0);
while(true){
if((i__45952_46362 < count__45951_46361)){
var child_46363 = chunk__45950_46360.cljs$core$IIndexed$_nth$arity$2(null,i__45952_46362);
if(cljs.core.truth_(child_46363)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46363);


var G__46364 = seq__45948_46359;
var G__46365 = chunk__45950_46360;
var G__46366 = count__45951_46361;
var G__46367 = (i__45952_46362 + (1));
seq__45948_46359 = G__46364;
chunk__45950_46360 = G__46365;
count__45951_46361 = G__46366;
i__45952_46362 = G__46367;
continue;
} else {
var G__46368 = seq__45948_46359;
var G__46369 = chunk__45950_46360;
var G__46370 = count__45951_46361;
var G__46371 = (i__45952_46362 + (1));
seq__45948_46359 = G__46368;
chunk__45950_46360 = G__46369;
count__45951_46361 = G__46370;
i__45952_46362 = G__46371;
continue;
}
} else {
var temp__5804__auto___46372 = cljs.core.seq(seq__45948_46359);
if(temp__5804__auto___46372){
var seq__45948_46373__$1 = temp__5804__auto___46372;
if(cljs.core.chunked_seq_QMARK_(seq__45948_46373__$1)){
var c__5565__auto___46374 = cljs.core.chunk_first(seq__45948_46373__$1);
var G__46375 = cljs.core.chunk_rest(seq__45948_46373__$1);
var G__46376 = c__5565__auto___46374;
var G__46377 = cljs.core.count(c__5565__auto___46374);
var G__46378 = (0);
seq__45948_46359 = G__46375;
chunk__45950_46360 = G__46376;
count__45951_46361 = G__46377;
i__45952_46362 = G__46378;
continue;
} else {
var child_46379 = cljs.core.first(seq__45948_46373__$1);
if(cljs.core.truth_(child_46379)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46379);


var G__46380 = cljs.core.next(seq__45948_46373__$1);
var G__46381 = null;
var G__46382 = (0);
var G__46383 = (0);
seq__45948_46359 = G__46380;
chunk__45950_46360 = G__46381;
count__45951_46361 = G__46382;
i__45952_46362 = G__46383;
continue;
} else {
var G__46384 = cljs.core.next(seq__45948_46373__$1);
var G__46385 = null;
var G__46386 = (0);
var G__46387 = (0);
seq__45948_46359 = G__46384;
chunk__45950_46360 = G__46385;
count__45951_46361 = G__46386;
i__45952_46362 = G__46387;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46358);
}


var G__46388 = seq__45923_46352;
var G__46389 = chunk__45924_46353;
var G__46390 = count__45925_46354;
var G__46391 = (i__45926_46355 + (1));
seq__45923_46352 = G__46388;
chunk__45924_46353 = G__46389;
count__45925_46354 = G__46390;
i__45926_46355 = G__46391;
continue;
} else {
var temp__5804__auto___46392 = cljs.core.seq(seq__45923_46352);
if(temp__5804__auto___46392){
var seq__45923_46393__$1 = temp__5804__auto___46392;
if(cljs.core.chunked_seq_QMARK_(seq__45923_46393__$1)){
var c__5565__auto___46394 = cljs.core.chunk_first(seq__45923_46393__$1);
var G__46395 = cljs.core.chunk_rest(seq__45923_46393__$1);
var G__46396 = c__5565__auto___46394;
var G__46397 = cljs.core.count(c__5565__auto___46394);
var G__46398 = (0);
seq__45923_46352 = G__46395;
chunk__45924_46353 = G__46396;
count__45925_46354 = G__46397;
i__45926_46355 = G__46398;
continue;
} else {
var child_struct_46399 = cljs.core.first(seq__45923_46393__$1);
var children_46400 = shadow.dom.dom_node(child_struct_46399);
if(cljs.core.seq_QMARK_(children_46400)){
var seq__45967_46401 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46400));
var chunk__45969_46402 = null;
var count__45970_46403 = (0);
var i__45971_46404 = (0);
while(true){
if((i__45971_46404 < count__45970_46403)){
var child_46405 = chunk__45969_46402.cljs$core$IIndexed$_nth$arity$2(null,i__45971_46404);
if(cljs.core.truth_(child_46405)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46405);


var G__46406 = seq__45967_46401;
var G__46407 = chunk__45969_46402;
var G__46408 = count__45970_46403;
var G__46409 = (i__45971_46404 + (1));
seq__45967_46401 = G__46406;
chunk__45969_46402 = G__46407;
count__45970_46403 = G__46408;
i__45971_46404 = G__46409;
continue;
} else {
var G__46410 = seq__45967_46401;
var G__46411 = chunk__45969_46402;
var G__46412 = count__45970_46403;
var G__46413 = (i__45971_46404 + (1));
seq__45967_46401 = G__46410;
chunk__45969_46402 = G__46411;
count__45970_46403 = G__46412;
i__45971_46404 = G__46413;
continue;
}
} else {
var temp__5804__auto___46414__$1 = cljs.core.seq(seq__45967_46401);
if(temp__5804__auto___46414__$1){
var seq__45967_46415__$1 = temp__5804__auto___46414__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45967_46415__$1)){
var c__5565__auto___46416 = cljs.core.chunk_first(seq__45967_46415__$1);
var G__46417 = cljs.core.chunk_rest(seq__45967_46415__$1);
var G__46418 = c__5565__auto___46416;
var G__46419 = cljs.core.count(c__5565__auto___46416);
var G__46420 = (0);
seq__45967_46401 = G__46417;
chunk__45969_46402 = G__46418;
count__45970_46403 = G__46419;
i__45971_46404 = G__46420;
continue;
} else {
var child_46421 = cljs.core.first(seq__45967_46415__$1);
if(cljs.core.truth_(child_46421)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46421);


var G__46422 = cljs.core.next(seq__45967_46415__$1);
var G__46423 = null;
var G__46424 = (0);
var G__46425 = (0);
seq__45967_46401 = G__46422;
chunk__45969_46402 = G__46423;
count__45970_46403 = G__46424;
i__45971_46404 = G__46425;
continue;
} else {
var G__46426 = cljs.core.next(seq__45967_46415__$1);
var G__46427 = null;
var G__46428 = (0);
var G__46429 = (0);
seq__45967_46401 = G__46426;
chunk__45969_46402 = G__46427;
count__45970_46403 = G__46428;
i__45971_46404 = G__46429;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46400);
}


var G__46430 = cljs.core.next(seq__45923_46393__$1);
var G__46431 = null;
var G__46432 = (0);
var G__46433 = (0);
seq__45923_46352 = G__46430;
chunk__45924_46353 = G__46431;
count__45925_46354 = G__46432;
i__45926_46355 = G__46433;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46020 = cljs.core.seq(node);
var chunk__46021 = null;
var count__46022 = (0);
var i__46023 = (0);
while(true){
if((i__46023 < count__46022)){
var n = chunk__46021.cljs$core$IIndexed$_nth$arity$2(null,i__46023);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46436 = seq__46020;
var G__46437 = chunk__46021;
var G__46438 = count__46022;
var G__46439 = (i__46023 + (1));
seq__46020 = G__46436;
chunk__46021 = G__46437;
count__46022 = G__46438;
i__46023 = G__46439;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46020);
if(temp__5804__auto__){
var seq__46020__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46020__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46020__$1);
var G__46441 = cljs.core.chunk_rest(seq__46020__$1);
var G__46442 = c__5565__auto__;
var G__46443 = cljs.core.count(c__5565__auto__);
var G__46444 = (0);
seq__46020 = G__46441;
chunk__46021 = G__46442;
count__46022 = G__46443;
i__46023 = G__46444;
continue;
} else {
var n = cljs.core.first(seq__46020__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46445 = cljs.core.next(seq__46020__$1);
var G__46446 = null;
var G__46447 = (0);
var G__46448 = (0);
seq__46020 = G__46445;
chunk__46021 = G__46446;
count__46022 = G__46447;
i__46023 = G__46448;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46052 = arguments.length;
switch (G__46052) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46054 = arguments.length;
switch (G__46054) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46057 = arguments.length;
switch (G__46057) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46452 = arguments.length;
var i__5767__auto___46453 = (0);
while(true){
if((i__5767__auto___46453 < len__5766__auto___46452)){
args__5772__auto__.push((arguments[i__5767__auto___46453]));

var G__46454 = (i__5767__auto___46453 + (1));
i__5767__auto___46453 = G__46454;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46081_46455 = cljs.core.seq(nodes);
var chunk__46082_46456 = null;
var count__46083_46457 = (0);
var i__46084_46458 = (0);
while(true){
if((i__46084_46458 < count__46083_46457)){
var node_46459 = chunk__46082_46456.cljs$core$IIndexed$_nth$arity$2(null,i__46084_46458);
fragment.appendChild(shadow.dom._to_dom(node_46459));


var G__46460 = seq__46081_46455;
var G__46461 = chunk__46082_46456;
var G__46462 = count__46083_46457;
var G__46463 = (i__46084_46458 + (1));
seq__46081_46455 = G__46460;
chunk__46082_46456 = G__46461;
count__46083_46457 = G__46462;
i__46084_46458 = G__46463;
continue;
} else {
var temp__5804__auto___46464 = cljs.core.seq(seq__46081_46455);
if(temp__5804__auto___46464){
var seq__46081_46465__$1 = temp__5804__auto___46464;
if(cljs.core.chunked_seq_QMARK_(seq__46081_46465__$1)){
var c__5565__auto___46466 = cljs.core.chunk_first(seq__46081_46465__$1);
var G__46467 = cljs.core.chunk_rest(seq__46081_46465__$1);
var G__46468 = c__5565__auto___46466;
var G__46469 = cljs.core.count(c__5565__auto___46466);
var G__46470 = (0);
seq__46081_46455 = G__46467;
chunk__46082_46456 = G__46468;
count__46083_46457 = G__46469;
i__46084_46458 = G__46470;
continue;
} else {
var node_46471 = cljs.core.first(seq__46081_46465__$1);
fragment.appendChild(shadow.dom._to_dom(node_46471));


var G__46472 = cljs.core.next(seq__46081_46465__$1);
var G__46473 = null;
var G__46474 = (0);
var G__46475 = (0);
seq__46081_46455 = G__46472;
chunk__46082_46456 = G__46473;
count__46083_46457 = G__46474;
i__46084_46458 = G__46475;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46074){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46074));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46100_46477 = cljs.core.seq(scripts);
var chunk__46101_46478 = null;
var count__46102_46479 = (0);
var i__46103_46480 = (0);
while(true){
if((i__46103_46480 < count__46102_46479)){
var vec__46116_46481 = chunk__46101_46478.cljs$core$IIndexed$_nth$arity$2(null,i__46103_46480);
var script_tag_46482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46116_46481,(0),null);
var script_body_46483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46116_46481,(1),null);
eval(script_body_46483);


var G__46484 = seq__46100_46477;
var G__46485 = chunk__46101_46478;
var G__46486 = count__46102_46479;
var G__46487 = (i__46103_46480 + (1));
seq__46100_46477 = G__46484;
chunk__46101_46478 = G__46485;
count__46102_46479 = G__46486;
i__46103_46480 = G__46487;
continue;
} else {
var temp__5804__auto___46488 = cljs.core.seq(seq__46100_46477);
if(temp__5804__auto___46488){
var seq__46100_46489__$1 = temp__5804__auto___46488;
if(cljs.core.chunked_seq_QMARK_(seq__46100_46489__$1)){
var c__5565__auto___46490 = cljs.core.chunk_first(seq__46100_46489__$1);
var G__46491 = cljs.core.chunk_rest(seq__46100_46489__$1);
var G__46492 = c__5565__auto___46490;
var G__46493 = cljs.core.count(c__5565__auto___46490);
var G__46494 = (0);
seq__46100_46477 = G__46491;
chunk__46101_46478 = G__46492;
count__46102_46479 = G__46493;
i__46103_46480 = G__46494;
continue;
} else {
var vec__46120_46495 = cljs.core.first(seq__46100_46489__$1);
var script_tag_46496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46120_46495,(0),null);
var script_body_46497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46120_46495,(1),null);
eval(script_body_46497);


var G__46498 = cljs.core.next(seq__46100_46489__$1);
var G__46499 = null;
var G__46500 = (0);
var G__46501 = (0);
seq__46100_46477 = G__46498;
chunk__46101_46478 = G__46499;
count__46102_46479 = G__46500;
i__46103_46480 = G__46501;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46124){
var vec__46126 = p__46124;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46126,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46126,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46138 = arguments.length;
switch (G__46138) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46158 = cljs.core.seq(style_keys);
var chunk__46159 = null;
var count__46160 = (0);
var i__46161 = (0);
while(true){
if((i__46161 < count__46160)){
var it = chunk__46159.cljs$core$IIndexed$_nth$arity$2(null,i__46161);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46506 = seq__46158;
var G__46507 = chunk__46159;
var G__46508 = count__46160;
var G__46509 = (i__46161 + (1));
seq__46158 = G__46506;
chunk__46159 = G__46507;
count__46160 = G__46508;
i__46161 = G__46509;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46158);
if(temp__5804__auto__){
var seq__46158__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46158__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46158__$1);
var G__46510 = cljs.core.chunk_rest(seq__46158__$1);
var G__46511 = c__5565__auto__;
var G__46512 = cljs.core.count(c__5565__auto__);
var G__46513 = (0);
seq__46158 = G__46510;
chunk__46159 = G__46511;
count__46160 = G__46512;
i__46161 = G__46513;
continue;
} else {
var it = cljs.core.first(seq__46158__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46514 = cljs.core.next(seq__46158__$1);
var G__46515 = null;
var G__46516 = (0);
var G__46517 = (0);
seq__46158 = G__46514;
chunk__46159 = G__46515;
count__46160 = G__46516;
i__46161 = G__46517;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k46170,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__46182 = k46170;
var G__46182__$1 = (((G__46182 instanceof cljs.core.Keyword))?G__46182.fqn:null);
switch (G__46182__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46170,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__46185){
var vec__46188 = p__46185;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46188,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46188,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46169){
var self__ = this;
var G__46169__$1 = this;
return (new cljs.core.RecordIter((0),G__46169__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46171,other46172){
var self__ = this;
var this46171__$1 = this;
return (((!((other46172 == null)))) && ((((this46171__$1.constructor === other46172.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46171__$1.x,other46172.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46171__$1.y,other46172.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46171__$1.__extmap,other46172.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k46170){
var self__ = this;
var this__5347__auto____$1 = this;
var G__46200 = k46170;
var G__46200__$1 = (((G__46200 instanceof cljs.core.Keyword))?G__46200.fqn:null);
switch (G__46200__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46170);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__46169){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__46201 = cljs.core.keyword_identical_QMARK_;
var expr__46202 = k__5349__auto__;
if(cljs.core.truth_((pred__46201.cljs$core$IFn$_invoke$arity$2 ? pred__46201.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46202) : pred__46201.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46202)))){
return (new shadow.dom.Coordinate(G__46169,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46201.cljs$core$IFn$_invoke$arity$2 ? pred__46201.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46202) : pred__46201.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46202)))){
return (new shadow.dom.Coordinate(self__.x,G__46169,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__46169),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__46169){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46169,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46175){
var extmap__5382__auto__ = (function (){var G__46204 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46175,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46175)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46204);
} else {
return G__46204;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46175),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46175),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k46206,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__46210 = k46206;
var G__46210__$1 = (((G__46210 instanceof cljs.core.Keyword))?G__46210.fqn:null);
switch (G__46210__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46206,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__46211){
var vec__46212 = p__46211;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46212,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46212,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46205){
var self__ = this;
var G__46205__$1 = this;
return (new cljs.core.RecordIter((0),G__46205__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46207,other46208){
var self__ = this;
var this46207__$1 = this;
return (((!((other46208 == null)))) && ((((this46207__$1.constructor === other46208.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46207__$1.w,other46208.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46207__$1.h,other46208.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46207__$1.__extmap,other46208.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k46206){
var self__ = this;
var this__5347__auto____$1 = this;
var G__46215 = k46206;
var G__46215__$1 = (((G__46215 instanceof cljs.core.Keyword))?G__46215.fqn:null);
switch (G__46215__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46206);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__46205){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__46216 = cljs.core.keyword_identical_QMARK_;
var expr__46217 = k__5349__auto__;
if(cljs.core.truth_((pred__46216.cljs$core$IFn$_invoke$arity$2 ? pred__46216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46217) : pred__46216.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46217)))){
return (new shadow.dom.Size(G__46205,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46216.cljs$core$IFn$_invoke$arity$2 ? pred__46216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46217) : pred__46216.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46217)))){
return (new shadow.dom.Size(self__.w,G__46205,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__46205),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__46205){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46205,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46209){
var extmap__5382__auto__ = (function (){var G__46219 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46209,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46209)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46219);
} else {
return G__46219;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46209),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46209),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__46542 = (i + (1));
var G__46543 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46542;
ret = G__46543;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46224){
var vec__46225 = p__46224;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46225,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46229 = arguments.length;
switch (G__46229) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46545 = ps;
var G__46546 = (i + (1));
el__$1 = G__46545;
i = G__46546;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46230 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46230,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46230,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46230,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46233_46550 = cljs.core.seq(props);
var chunk__46234_46551 = null;
var count__46235_46552 = (0);
var i__46236_46553 = (0);
while(true){
if((i__46236_46553 < count__46235_46552)){
var vec__46243_46554 = chunk__46234_46551.cljs$core$IIndexed$_nth$arity$2(null,i__46236_46553);
var k_46555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46243_46554,(0),null);
var v_46556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46243_46554,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_46555);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46555),v_46556);


var G__46557 = seq__46233_46550;
var G__46558 = chunk__46234_46551;
var G__46559 = count__46235_46552;
var G__46560 = (i__46236_46553 + (1));
seq__46233_46550 = G__46557;
chunk__46234_46551 = G__46558;
count__46235_46552 = G__46559;
i__46236_46553 = G__46560;
continue;
} else {
var temp__5804__auto___46561 = cljs.core.seq(seq__46233_46550);
if(temp__5804__auto___46561){
var seq__46233_46562__$1 = temp__5804__auto___46561;
if(cljs.core.chunked_seq_QMARK_(seq__46233_46562__$1)){
var c__5565__auto___46563 = cljs.core.chunk_first(seq__46233_46562__$1);
var G__46564 = cljs.core.chunk_rest(seq__46233_46562__$1);
var G__46565 = c__5565__auto___46563;
var G__46566 = cljs.core.count(c__5565__auto___46563);
var G__46567 = (0);
seq__46233_46550 = G__46564;
chunk__46234_46551 = G__46565;
count__46235_46552 = G__46566;
i__46236_46553 = G__46567;
continue;
} else {
var vec__46246_46568 = cljs.core.first(seq__46233_46562__$1);
var k_46569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46246_46568,(0),null);
var v_46570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46246_46568,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_46569);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46569),v_46570);


var G__46571 = cljs.core.next(seq__46233_46562__$1);
var G__46572 = null;
var G__46573 = (0);
var G__46574 = (0);
seq__46233_46550 = G__46571;
chunk__46234_46551 = G__46572;
count__46235_46552 = G__46573;
i__46236_46553 = G__46574;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46250 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46250,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46250,(1),null);
var seq__46253_46578 = cljs.core.seq(node_children);
var chunk__46255_46579 = null;
var count__46256_46580 = (0);
var i__46257_46581 = (0);
while(true){
if((i__46257_46581 < count__46256_46580)){
var child_struct_46582 = chunk__46255_46579.cljs$core$IIndexed$_nth$arity$2(null,i__46257_46581);
if((!((child_struct_46582 == null)))){
if(typeof child_struct_46582 === 'string'){
var text_46583 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46583),child_struct_46582].join(''));
} else {
var children_46584 = shadow.dom.svg_node(child_struct_46582);
if(cljs.core.seq_QMARK_(children_46584)){
var seq__46271_46585 = cljs.core.seq(children_46584);
var chunk__46273_46586 = null;
var count__46274_46587 = (0);
var i__46275_46588 = (0);
while(true){
if((i__46275_46588 < count__46274_46587)){
var child_46589 = chunk__46273_46586.cljs$core$IIndexed$_nth$arity$2(null,i__46275_46588);
if(cljs.core.truth_(child_46589)){
node.appendChild(child_46589);


var G__46590 = seq__46271_46585;
var G__46591 = chunk__46273_46586;
var G__46592 = count__46274_46587;
var G__46593 = (i__46275_46588 + (1));
seq__46271_46585 = G__46590;
chunk__46273_46586 = G__46591;
count__46274_46587 = G__46592;
i__46275_46588 = G__46593;
continue;
} else {
var G__46594 = seq__46271_46585;
var G__46595 = chunk__46273_46586;
var G__46596 = count__46274_46587;
var G__46597 = (i__46275_46588 + (1));
seq__46271_46585 = G__46594;
chunk__46273_46586 = G__46595;
count__46274_46587 = G__46596;
i__46275_46588 = G__46597;
continue;
}
} else {
var temp__5804__auto___46598 = cljs.core.seq(seq__46271_46585);
if(temp__5804__auto___46598){
var seq__46271_46599__$1 = temp__5804__auto___46598;
if(cljs.core.chunked_seq_QMARK_(seq__46271_46599__$1)){
var c__5565__auto___46600 = cljs.core.chunk_first(seq__46271_46599__$1);
var G__46601 = cljs.core.chunk_rest(seq__46271_46599__$1);
var G__46602 = c__5565__auto___46600;
var G__46603 = cljs.core.count(c__5565__auto___46600);
var G__46604 = (0);
seq__46271_46585 = G__46601;
chunk__46273_46586 = G__46602;
count__46274_46587 = G__46603;
i__46275_46588 = G__46604;
continue;
} else {
var child_46605 = cljs.core.first(seq__46271_46599__$1);
if(cljs.core.truth_(child_46605)){
node.appendChild(child_46605);


var G__46606 = cljs.core.next(seq__46271_46599__$1);
var G__46607 = null;
var G__46608 = (0);
var G__46609 = (0);
seq__46271_46585 = G__46606;
chunk__46273_46586 = G__46607;
count__46274_46587 = G__46608;
i__46275_46588 = G__46609;
continue;
} else {
var G__46610 = cljs.core.next(seq__46271_46599__$1);
var G__46611 = null;
var G__46612 = (0);
var G__46613 = (0);
seq__46271_46585 = G__46610;
chunk__46273_46586 = G__46611;
count__46274_46587 = G__46612;
i__46275_46588 = G__46613;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46584);
}
}


var G__46614 = seq__46253_46578;
var G__46615 = chunk__46255_46579;
var G__46616 = count__46256_46580;
var G__46617 = (i__46257_46581 + (1));
seq__46253_46578 = G__46614;
chunk__46255_46579 = G__46615;
count__46256_46580 = G__46616;
i__46257_46581 = G__46617;
continue;
} else {
var G__46618 = seq__46253_46578;
var G__46619 = chunk__46255_46579;
var G__46620 = count__46256_46580;
var G__46621 = (i__46257_46581 + (1));
seq__46253_46578 = G__46618;
chunk__46255_46579 = G__46619;
count__46256_46580 = G__46620;
i__46257_46581 = G__46621;
continue;
}
} else {
var temp__5804__auto___46622 = cljs.core.seq(seq__46253_46578);
if(temp__5804__auto___46622){
var seq__46253_46623__$1 = temp__5804__auto___46622;
if(cljs.core.chunked_seq_QMARK_(seq__46253_46623__$1)){
var c__5565__auto___46625 = cljs.core.chunk_first(seq__46253_46623__$1);
var G__46626 = cljs.core.chunk_rest(seq__46253_46623__$1);
var G__46627 = c__5565__auto___46625;
var G__46628 = cljs.core.count(c__5565__auto___46625);
var G__46629 = (0);
seq__46253_46578 = G__46626;
chunk__46255_46579 = G__46627;
count__46256_46580 = G__46628;
i__46257_46581 = G__46629;
continue;
} else {
var child_struct_46630 = cljs.core.first(seq__46253_46623__$1);
if((!((child_struct_46630 == null)))){
if(typeof child_struct_46630 === 'string'){
var text_46632 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46632),child_struct_46630].join(''));
} else {
var children_46633 = shadow.dom.svg_node(child_struct_46630);
if(cljs.core.seq_QMARK_(children_46633)){
var seq__46277_46637 = cljs.core.seq(children_46633);
var chunk__46279_46638 = null;
var count__46280_46639 = (0);
var i__46281_46640 = (0);
while(true){
if((i__46281_46640 < count__46280_46639)){
var child_46641 = chunk__46279_46638.cljs$core$IIndexed$_nth$arity$2(null,i__46281_46640);
if(cljs.core.truth_(child_46641)){
node.appendChild(child_46641);


var G__46642 = seq__46277_46637;
var G__46643 = chunk__46279_46638;
var G__46644 = count__46280_46639;
var G__46645 = (i__46281_46640 + (1));
seq__46277_46637 = G__46642;
chunk__46279_46638 = G__46643;
count__46280_46639 = G__46644;
i__46281_46640 = G__46645;
continue;
} else {
var G__46646 = seq__46277_46637;
var G__46647 = chunk__46279_46638;
var G__46648 = count__46280_46639;
var G__46649 = (i__46281_46640 + (1));
seq__46277_46637 = G__46646;
chunk__46279_46638 = G__46647;
count__46280_46639 = G__46648;
i__46281_46640 = G__46649;
continue;
}
} else {
var temp__5804__auto___46650__$1 = cljs.core.seq(seq__46277_46637);
if(temp__5804__auto___46650__$1){
var seq__46277_46651__$1 = temp__5804__auto___46650__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46277_46651__$1)){
var c__5565__auto___46652 = cljs.core.chunk_first(seq__46277_46651__$1);
var G__46653 = cljs.core.chunk_rest(seq__46277_46651__$1);
var G__46654 = c__5565__auto___46652;
var G__46655 = cljs.core.count(c__5565__auto___46652);
var G__46656 = (0);
seq__46277_46637 = G__46653;
chunk__46279_46638 = G__46654;
count__46280_46639 = G__46655;
i__46281_46640 = G__46656;
continue;
} else {
var child_46657 = cljs.core.first(seq__46277_46651__$1);
if(cljs.core.truth_(child_46657)){
node.appendChild(child_46657);


var G__46658 = cljs.core.next(seq__46277_46651__$1);
var G__46659 = null;
var G__46660 = (0);
var G__46661 = (0);
seq__46277_46637 = G__46658;
chunk__46279_46638 = G__46659;
count__46280_46639 = G__46660;
i__46281_46640 = G__46661;
continue;
} else {
var G__46662 = cljs.core.next(seq__46277_46651__$1);
var G__46663 = null;
var G__46664 = (0);
var G__46665 = (0);
seq__46277_46637 = G__46662;
chunk__46279_46638 = G__46663;
count__46280_46639 = G__46664;
i__46281_46640 = G__46665;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46633);
}
}


var G__46666 = cljs.core.next(seq__46253_46623__$1);
var G__46667 = null;
var G__46668 = (0);
var G__46669 = (0);
seq__46253_46578 = G__46666;
chunk__46255_46579 = G__46667;
count__46256_46580 = G__46668;
i__46257_46581 = G__46669;
continue;
} else {
var G__46670 = cljs.core.next(seq__46253_46623__$1);
var G__46671 = null;
var G__46672 = (0);
var G__46673 = (0);
seq__46253_46578 = G__46670;
chunk__46255_46579 = G__46671;
count__46256_46580 = G__46672;
i__46257_46581 = G__46673;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46674 = arguments.length;
var i__5767__auto___46675 = (0);
while(true){
if((i__5767__auto___46675 < len__5766__auto___46674)){
args__5772__auto__.push((arguments[i__5767__auto___46675]));

var G__46676 = (i__5767__auto___46675 + (1));
i__5767__auto___46675 = G__46676;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46283){
var G__46284 = cljs.core.first(seq46283);
var seq46283__$1 = cljs.core.next(seq46283);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46284,seq46283__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46286 = arguments.length;
switch (G__46286) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__44027__auto___46678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_46291){
var state_val_46292 = (state_46291[(1)]);
if((state_val_46292 === (1))){
var state_46291__$1 = state_46291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46291__$1,(2),once_or_cleanup);
} else {
if((state_val_46292 === (2))){
var inst_46288 = (state_46291[(2)]);
var inst_46289 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46291__$1 = (function (){var statearr_46293 = state_46291;
(statearr_46293[(7)] = inst_46288);

return statearr_46293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46291__$1,inst_46289);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43957__auto__ = null;
var shadow$dom$state_machine__43957__auto____0 = (function (){
var statearr_46294 = [null,null,null,null,null,null,null,null];
(statearr_46294[(0)] = shadow$dom$state_machine__43957__auto__);

(statearr_46294[(1)] = (1));

return statearr_46294;
});
var shadow$dom$state_machine__43957__auto____1 = (function (state_46291){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_46291);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e46295){var ex__43960__auto__ = e46295;
var statearr_46296_46681 = state_46291;
(statearr_46296_46681[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_46291[(4)]))){
var statearr_46297_46682 = state_46291;
(statearr_46297_46682[(1)] = cljs.core.first((state_46291[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46683 = state_46291;
state_46291 = G__46683;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
shadow$dom$state_machine__43957__auto__ = function(state_46291){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43957__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43957__auto____1.call(this,state_46291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43957__auto____0;
shadow$dom$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43957__auto____1;
return shadow$dom$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_46298 = f__44028__auto__();
(statearr_46298[(6)] = c__44027__auto___46678);

return statearr_46298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
