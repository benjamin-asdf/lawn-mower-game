goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35936){
var map__35937 = p__35936;
var map__35937__$1 = cljs.core.__destructure_map(map__35937);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5043__auto__ = child_of;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__35938_35965 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__35939_35966 = null;
var count__35940_35967 = (0);
var i__35941_35968 = (0);
while(true){
if((i__35941_35968 < count__35940_35967)){
var vec__35952_35969 = chunk__35939_35966.cljs$core$IIndexed$_nth$arity$2(null,i__35941_35968);
var k_35970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35952_35969,(0),null);
var cb_35971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35952_35969,(1),null);
try{var G__35956_35972 = cljs.core.deref(re_frame.trace.traces);
(cb_35971.cljs$core$IFn$_invoke$arity$1 ? cb_35971.cljs$core$IFn$_invoke$arity$1(G__35956_35972) : cb_35971.call(null,G__35956_35972));
}catch (e35955){var e_35973 = e35955;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35970,"while storing",cljs.core.deref(re_frame.trace.traces),e_35973], 0));
}

var G__35974 = seq__35938_35965;
var G__35975 = chunk__35939_35966;
var G__35976 = count__35940_35967;
var G__35977 = (i__35941_35968 + (1));
seq__35938_35965 = G__35974;
chunk__35939_35966 = G__35975;
count__35940_35967 = G__35976;
i__35941_35968 = G__35977;
continue;
} else {
var temp__5804__auto___35978 = cljs.core.seq(seq__35938_35965);
if(temp__5804__auto___35978){
var seq__35938_35979__$1 = temp__5804__auto___35978;
if(cljs.core.chunked_seq_QMARK_(seq__35938_35979__$1)){
var c__5565__auto___35980 = cljs.core.chunk_first(seq__35938_35979__$1);
var G__35981 = cljs.core.chunk_rest(seq__35938_35979__$1);
var G__35982 = c__5565__auto___35980;
var G__35983 = cljs.core.count(c__5565__auto___35980);
var G__35984 = (0);
seq__35938_35965 = G__35981;
chunk__35939_35966 = G__35982;
count__35940_35967 = G__35983;
i__35941_35968 = G__35984;
continue;
} else {
var vec__35957_35985 = cljs.core.first(seq__35938_35979__$1);
var k_35986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957_35985,(0),null);
var cb_35987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957_35985,(1),null);
try{var G__35961_35988 = cljs.core.deref(re_frame.trace.traces);
(cb_35987.cljs$core$IFn$_invoke$arity$1 ? cb_35987.cljs$core$IFn$_invoke$arity$1(G__35961_35988) : cb_35987.call(null,G__35961_35988));
}catch (e35960){var e_35989 = e35960;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35986,"while storing",cljs.core.deref(re_frame.trace.traces),e_35989], 0));
}

var G__35990 = cljs.core.next(seq__35938_35979__$1);
var G__35991 = null;
var G__35992 = (0);
var G__35993 = (0);
seq__35938_35965 = G__35990;
chunk__35939_35966 = G__35991;
count__35940_35967 = G__35992;
i__35941_35968 = G__35993;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
