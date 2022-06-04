goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__38081 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38082 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38082);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__38083 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38084 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38084);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38083);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38081);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__38088 = arguments.length;
switch (G__38088) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__38089 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__38092_38112 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__38093_38113 = null;
var count__38094_38114 = (0);
var i__38095_38115 = (0);
while(true){
if((i__38095_38115 < count__38094_38114)){
var vec__38105_38116 = chunk__38093_38113.cljs$core$IIndexed$_nth$arity$2(null,i__38095_38115);
var container_38117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105_38116,(0),null);
var comp_38118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105_38116,(1),null);
reagent.dom.re_render_component(comp_38118,container_38117);


var G__38119 = seq__38092_38112;
var G__38120 = chunk__38093_38113;
var G__38121 = count__38094_38114;
var G__38122 = (i__38095_38115 + (1));
seq__38092_38112 = G__38119;
chunk__38093_38113 = G__38120;
count__38094_38114 = G__38121;
i__38095_38115 = G__38122;
continue;
} else {
var temp__5804__auto___38123 = cljs.core.seq(seq__38092_38112);
if(temp__5804__auto___38123){
var seq__38092_38124__$1 = temp__5804__auto___38123;
if(cljs.core.chunked_seq_QMARK_(seq__38092_38124__$1)){
var c__5565__auto___38125 = cljs.core.chunk_first(seq__38092_38124__$1);
var G__38126 = cljs.core.chunk_rest(seq__38092_38124__$1);
var G__38127 = c__5565__auto___38125;
var G__38128 = cljs.core.count(c__5565__auto___38125);
var G__38129 = (0);
seq__38092_38112 = G__38126;
chunk__38093_38113 = G__38127;
count__38094_38114 = G__38128;
i__38095_38115 = G__38129;
continue;
} else {
var vec__38108_38130 = cljs.core.first(seq__38092_38124__$1);
var container_38131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38108_38130,(0),null);
var comp_38132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38108_38130,(1),null);
reagent.dom.re_render_component(comp_38132,container_38131);


var G__38133 = cljs.core.next(seq__38092_38124__$1);
var G__38134 = null;
var G__38135 = (0);
var G__38136 = (0);
seq__38092_38112 = G__38133;
chunk__38093_38113 = G__38134;
count__38094_38114 = G__38135;
i__38095_38115 = G__38136;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
