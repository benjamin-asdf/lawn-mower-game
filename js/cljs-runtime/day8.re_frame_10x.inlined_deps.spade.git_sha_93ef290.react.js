goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context = module$node_modules$react$index.createContext(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.Provider !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.Provider = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context.Provider;
}
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.provided_container = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$provided_container(){
var or__5043__auto__ = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context._currentValue2;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context._currentValue;
}
});
(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_ = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.__GT_AlternateStyleContainer(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.provided_container,day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_));
/**
 * Uses the provided IStyleContainer to render the styles of the children
 * elements. This is a reagent-style React component, meant to wrap whatever
 * part of your app needs to have its styled rendered elsewhere (often the
 * root of the app), eg:
 * 
 *   [with-style-container container
 *    [your-view]]
 * 
 * Note that behavior in the presence of a reactively changing `container` is
 * undefined. You should expect to declare one container per render.
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_style_container(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35298 = arguments.length;
var i__5767__auto___35299 = (0);
while(true){
if((i__5767__auto___35299 < len__5766__auto___35298)){
args__5772__auto__.push((arguments[i__5767__auto___35299]));

var G__35300 = (i__5767__auto___35299 + (1));
i__5767__auto___35299 = G__35300;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container.cljs$core$IFn$_invoke$arity$variadic = (function (container,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),container], null)], null),children);
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container.cljs$lang$applyTo = (function (seq35255){
var G__35256 = cljs.core.first(seq35255);
var seq35255__$1 = cljs.core.next(seq35255);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35256,seq35255__$1);
}));

/**
 * A convenience for rendering Spade styles into an alternate dom target.
 * The first argument may either be an actual DOM element, or a function which
 * returns one.
 * 
 * See `with-style-container`, which this uses under the hood.
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35301 = arguments.length;
var i__5767__auto___35302 = (0);
while(true){
if((i__5767__auto___35302 < len__5766__auto___35301)){
args__5772__auto__.push((arguments[i__5767__auto___35302]));

var G__35303 = (i__5767__auto___35302 + (1));
i__5767__auto___35302 = G__35303;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom.cljs$core$IFn$_invoke$arity$variadic = (function (get_dom_target,_children){
var container = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$1(get_dom_target);
return (function() { 
var day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render__delegate = function (_,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container,container], null),children);
};
var day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render = function (_,var_args){
var children = null;
if (arguments.length > 1) {
var G__35304__i = 0, G__35304__a = new Array(arguments.length -  1);
while (G__35304__i < G__35304__a.length) {G__35304__a[G__35304__i] = arguments[G__35304__i + 1]; ++G__35304__i;}
  children = new cljs.core.IndexedSeq(G__35304__a,0,null);
} 
return day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render__delegate.call(this,_,children);};
day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render.cljs$lang$maxFixedArity = 1;
day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render.cljs$lang$applyTo = (function (arglist__35305){
var _ = cljs.core.first(arglist__35305);
var children = cljs.core.rest(arglist__35305);
return day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render__delegate(_,children);
});
day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render__delegate;
return day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render;
})()
;
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom.cljs$lang$applyTo = (function (seq35276){
var G__35278 = cljs.core.first(seq35276);
var seq35276__$1 = cljs.core.next(seq35276);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35278,seq35276__$1);
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.js.map
