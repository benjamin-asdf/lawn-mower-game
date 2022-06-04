goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32878 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32879 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32879);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___33003 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___33003)){
var new_db_33004 = temp__5804__auto___33003;
var fexpr__32883_33005 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32883_33005.cljs$core$IFn$_invoke$arity$1 ? fexpr__32883_33005.cljs$core$IFn$_invoke$arity$1(new_db_33004) : fexpr__32883_33005.call(null,new_db_33004));
} else {
}

var seq__32884 = cljs.core.seq(effects_without_db);
var chunk__32885 = null;
var count__32886 = (0);
var i__32887 = (0);
while(true){
if((i__32887 < count__32886)){
var vec__32905 = chunk__32885.cljs$core$IIndexed$_nth$arity$2(null,i__32887);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32905,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32905,(1),null);
var temp__5802__auto___33006 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33006)){
var effect_fn_33007 = temp__5802__auto___33006;
(effect_fn_33007.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33007.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33007.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33008 = seq__32884;
var G__33009 = chunk__32885;
var G__33010 = count__32886;
var G__33011 = (i__32887 + (1));
seq__32884 = G__33008;
chunk__32885 = G__33009;
count__32886 = G__33010;
i__32887 = G__33011;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32884);
if(temp__5804__auto__){
var seq__32884__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32884__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32884__$1);
var G__33012 = cljs.core.chunk_rest(seq__32884__$1);
var G__33013 = c__5565__auto__;
var G__33014 = cljs.core.count(c__5565__auto__);
var G__33015 = (0);
seq__32884 = G__33012;
chunk__32885 = G__33013;
count__32886 = G__33014;
i__32887 = G__33015;
continue;
} else {
var vec__32912 = cljs.core.first(seq__32884__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32912,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32912,(1),null);
var temp__5802__auto___33016 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33016)){
var effect_fn_33017 = temp__5802__auto___33016;
(effect_fn_33017.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33017.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33017.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33018 = cljs.core.next(seq__32884__$1);
var G__33019 = null;
var G__33020 = (0);
var G__33021 = (0);
seq__32884 = G__33018;
chunk__32885 = G__33019;
count__32886 = G__33020;
i__32887 = G__33021;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__32600__auto___33022 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__32601__auto___33023 = (end__32600__auto___33022 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32601__auto___33023,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__32600__auto___33022);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32878);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___33024 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___33024)){
var new_db_33025 = temp__5804__auto___33024;
var fexpr__32915_33026 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32915_33026.cljs$core$IFn$_invoke$arity$1 ? fexpr__32915_33026.cljs$core$IFn$_invoke$arity$1(new_db_33025) : fexpr__32915_33026.call(null,new_db_33025));
} else {
}

var seq__32916 = cljs.core.seq(effects_without_db);
var chunk__32917 = null;
var count__32918 = (0);
var i__32919 = (0);
while(true){
if((i__32919 < count__32918)){
var vec__32934 = chunk__32917.cljs$core$IIndexed$_nth$arity$2(null,i__32919);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32934,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32934,(1),null);
var temp__5802__auto___33027 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33027)){
var effect_fn_33028 = temp__5802__auto___33027;
(effect_fn_33028.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33028.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33028.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33029 = seq__32916;
var G__33030 = chunk__32917;
var G__33031 = count__32918;
var G__33032 = (i__32919 + (1));
seq__32916 = G__33029;
chunk__32917 = G__33030;
count__32918 = G__33031;
i__32919 = G__33032;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32916);
if(temp__5804__auto__){
var seq__32916__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32916__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32916__$1);
var G__33033 = cljs.core.chunk_rest(seq__32916__$1);
var G__33034 = c__5565__auto__;
var G__33035 = cljs.core.count(c__5565__auto__);
var G__33036 = (0);
seq__32916 = G__33033;
chunk__32917 = G__33034;
count__32918 = G__33035;
i__32919 = G__33036;
continue;
} else {
var vec__32938 = cljs.core.first(seq__32916__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32938,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32938,(1),null);
var temp__5802__auto___33037 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33037)){
var effect_fn_33038 = temp__5802__auto___33037;
(effect_fn_33038.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33038.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33038.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33039 = cljs.core.next(seq__32916__$1);
var G__33040 = null;
var G__33041 = (0);
var G__33042 = (0);
seq__32916 = G__33039;
chunk__32917 = G__33040;
count__32918 = G__33041;
i__32919 = G__33042;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__32946){
var map__32947 = p__32946;
var map__32947__$1 = cljs.core.__destructure_map(map__32947);
var effect = map__32947__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32947__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32947__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__32965 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32966 = null;
var count__32967 = (0);
var i__32968 = (0);
while(true){
if((i__32968 < count__32967)){
var effect = chunk__32966.cljs$core$IIndexed$_nth$arity$2(null,i__32968);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__33043 = seq__32965;
var G__33044 = chunk__32966;
var G__33045 = count__32967;
var G__33046 = (i__32968 + (1));
seq__32965 = G__33043;
chunk__32966 = G__33044;
count__32967 = G__33045;
i__32968 = G__33046;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32965);
if(temp__5804__auto__){
var seq__32965__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32965__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32965__$1);
var G__33047 = cljs.core.chunk_rest(seq__32965__$1);
var G__33048 = c__5565__auto__;
var G__33049 = cljs.core.count(c__5565__auto__);
var G__33050 = (0);
seq__32965 = G__33047;
chunk__32966 = G__33048;
count__32967 = G__33049;
i__32968 = G__33050;
continue;
} else {
var effect = cljs.core.first(seq__32965__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__33051 = cljs.core.next(seq__32965__$1);
var G__33052 = null;
var G__33053 = (0);
var G__33054 = (0);
seq__32965 = G__33051;
chunk__32966 = G__33052;
count__32967 = G__33053;
i__32968 = G__33054;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32976 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32977 = null;
var count__32978 = (0);
var i__32979 = (0);
while(true){
if((i__32979 < count__32978)){
var vec__32989 = chunk__32977.cljs$core$IIndexed$_nth$arity$2(null,i__32979);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___33055 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33055)){
var effect_fn_33056 = temp__5802__auto___33055;
(effect_fn_33056.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33056.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33056.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__33057 = seq__32976;
var G__33058 = chunk__32977;
var G__33059 = count__32978;
var G__33060 = (i__32979 + (1));
seq__32976 = G__33057;
chunk__32977 = G__33058;
count__32978 = G__33059;
i__32979 = G__33060;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32976);
if(temp__5804__auto__){
var seq__32976__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32976__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32976__$1);
var G__33061 = cljs.core.chunk_rest(seq__32976__$1);
var G__33062 = c__5565__auto__;
var G__33063 = cljs.core.count(c__5565__auto__);
var G__33064 = (0);
seq__32976 = G__33061;
chunk__32977 = G__33062;
count__32978 = G__33063;
i__32979 = G__33064;
continue;
} else {
var vec__32992 = cljs.core.first(seq__32976__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32992,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32992,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___33065 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33065)){
var effect_fn_33066 = temp__5802__auto___33065;
(effect_fn_33066.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33066.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33066.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__33067 = cljs.core.next(seq__32976__$1);
var G__33068 = null;
var G__33069 = (0);
var G__33070 = (0);
seq__32976 = G__33067;
chunk__32977 = G__33068;
count__32978 = G__33069;
i__32979 = G__33070;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32995 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32996 = null;
var count__32997 = (0);
var i__32998 = (0);
while(true){
if((i__32998 < count__32997)){
var event = chunk__32996.cljs$core$IIndexed$_nth$arity$2(null,i__32998);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__33071 = seq__32995;
var G__33072 = chunk__32996;
var G__33073 = count__32997;
var G__33074 = (i__32998 + (1));
seq__32995 = G__33071;
chunk__32996 = G__33072;
count__32997 = G__33073;
i__32998 = G__33074;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32995);
if(temp__5804__auto__){
var seq__32995__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32995__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32995__$1);
var G__33075 = cljs.core.chunk_rest(seq__32995__$1);
var G__33076 = c__5565__auto__;
var G__33077 = cljs.core.count(c__5565__auto__);
var G__33078 = (0);
seq__32995 = G__33075;
chunk__32996 = G__33076;
count__32997 = G__33077;
i__32998 = G__33078;
continue;
} else {
var event = cljs.core.first(seq__32995__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__33079 = cljs.core.next(seq__32995__$1);
var G__33080 = null;
var G__33081 = (0);
var G__33082 = (0);
seq__32995 = G__33079;
chunk__32996 = G__33080;
count__32997 = G__33081;
i__32998 = G__33082;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32999 = cljs.core.seq(value);
var chunk__33000 = null;
var count__33001 = (0);
var i__33002 = (0);
while(true){
if((i__33002 < count__33001)){
var event = chunk__33000.cljs$core$IIndexed$_nth$arity$2(null,i__33002);
clear_event(event);


var G__33083 = seq__32999;
var G__33084 = chunk__33000;
var G__33085 = count__33001;
var G__33086 = (i__33002 + (1));
seq__32999 = G__33083;
chunk__33000 = G__33084;
count__33001 = G__33085;
i__33002 = G__33086;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32999);
if(temp__5804__auto__){
var seq__32999__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32999__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32999__$1);
var G__33087 = cljs.core.chunk_rest(seq__32999__$1);
var G__33088 = c__5565__auto__;
var G__33089 = cljs.core.count(c__5565__auto__);
var G__33090 = (0);
seq__32999 = G__33087;
chunk__33000 = G__33088;
count__33001 = G__33089;
i__33002 = G__33090;
continue;
} else {
var event = cljs.core.first(seq__32999__$1);
clear_event(event);


var G__33091 = cljs.core.next(seq__32999__$1);
var G__33092 = null;
var G__33093 = (0);
var G__33094 = (0);
seq__32999 = G__33091;
chunk__33000 = G__33092;
count__33001 = G__33093;
i__33002 = G__33094;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
