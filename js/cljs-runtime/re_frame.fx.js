goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__36262 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36263 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36263);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___36367 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___36367)){
var new_db_36368 = temp__5804__auto___36367;
var fexpr__36264_36369 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36264_36369.cljs$core$IFn$_invoke$arity$1 ? fexpr__36264_36369.cljs$core$IFn$_invoke$arity$1(new_db_36368) : fexpr__36264_36369.call(null,new_db_36368));
} else {
}

var seq__36265 = cljs.core.seq(effects_without_db);
var chunk__36266 = null;
var count__36267 = (0);
var i__36268 = (0);
while(true){
if((i__36268 < count__36267)){
var vec__36278 = chunk__36266.cljs$core$IIndexed$_nth$arity$2(null,i__36268);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(1),null);
var temp__5802__auto___36370 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36370)){
var effect_fn_36371 = temp__5802__auto___36370;
(effect_fn_36371.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36371.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36371.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36372 = seq__36265;
var G__36373 = chunk__36266;
var G__36374 = count__36267;
var G__36375 = (i__36268 + (1));
seq__36265 = G__36372;
chunk__36266 = G__36373;
count__36267 = G__36374;
i__36268 = G__36375;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36265);
if(temp__5804__auto__){
var seq__36265__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36265__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36265__$1);
var G__36376 = cljs.core.chunk_rest(seq__36265__$1);
var G__36377 = c__5565__auto__;
var G__36378 = cljs.core.count(c__5565__auto__);
var G__36379 = (0);
seq__36265 = G__36376;
chunk__36266 = G__36377;
count__36267 = G__36378;
i__36268 = G__36379;
continue;
} else {
var vec__36283 = cljs.core.first(seq__36265__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36283,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36283,(1),null);
var temp__5802__auto___36382 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36382)){
var effect_fn_36383 = temp__5802__auto___36382;
(effect_fn_36383.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36383.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36383.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36384 = cljs.core.next(seq__36265__$1);
var G__36385 = null;
var G__36386 = (0);
var G__36387 = (0);
seq__36265 = G__36384;
chunk__36266 = G__36385;
count__36267 = G__36386;
i__36268 = G__36387;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35916__auto___36388 = re_frame.interop.now();
var duration__35917__auto___36389 = (end__35916__auto___36388 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35917__auto___36389,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35916__auto___36388);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36262);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___36390 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___36390)){
var new_db_36391 = temp__5804__auto___36390;
var fexpr__36288_36392 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36288_36392.cljs$core$IFn$_invoke$arity$1 ? fexpr__36288_36392.cljs$core$IFn$_invoke$arity$1(new_db_36391) : fexpr__36288_36392.call(null,new_db_36391));
} else {
}

var seq__36290 = cljs.core.seq(effects_without_db);
var chunk__36291 = null;
var count__36292 = (0);
var i__36293 = (0);
while(true){
if((i__36293 < count__36292)){
var vec__36300 = chunk__36291.cljs$core$IIndexed$_nth$arity$2(null,i__36293);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36300,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36300,(1),null);
var temp__5802__auto___36393 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36393)){
var effect_fn_36394 = temp__5802__auto___36393;
(effect_fn_36394.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36394.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36394.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36395 = seq__36290;
var G__36396 = chunk__36291;
var G__36397 = count__36292;
var G__36398 = (i__36293 + (1));
seq__36290 = G__36395;
chunk__36291 = G__36396;
count__36292 = G__36397;
i__36293 = G__36398;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36290);
if(temp__5804__auto__){
var seq__36290__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36290__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36290__$1);
var G__36399 = cljs.core.chunk_rest(seq__36290__$1);
var G__36400 = c__5565__auto__;
var G__36401 = cljs.core.count(c__5565__auto__);
var G__36402 = (0);
seq__36290 = G__36399;
chunk__36291 = G__36400;
count__36292 = G__36401;
i__36293 = G__36402;
continue;
} else {
var vec__36306 = cljs.core.first(seq__36290__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36306,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36306,(1),null);
var temp__5802__auto___36403 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36403)){
var effect_fn_36404 = temp__5802__auto___36403;
(effect_fn_36404.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36404.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36404.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36405 = cljs.core.next(seq__36290__$1);
var G__36406 = null;
var G__36407 = (0);
var G__36408 = (0);
seq__36290 = G__36405;
chunk__36291 = G__36406;
count__36292 = G__36407;
i__36293 = G__36408;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__36309){
var map__36310 = p__36309;
var map__36310__$1 = cljs.core.__destructure_map(map__36310);
var effect = map__36310__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36310__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36310__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__36314 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36315 = null;
var count__36316 = (0);
var i__36317 = (0);
while(true){
if((i__36317 < count__36316)){
var effect = chunk__36315.cljs$core$IIndexed$_nth$arity$2(null,i__36317);
re_frame.fx.dispatch_later(effect);


var G__36410 = seq__36314;
var G__36411 = chunk__36315;
var G__36412 = count__36316;
var G__36413 = (i__36317 + (1));
seq__36314 = G__36410;
chunk__36315 = G__36411;
count__36316 = G__36412;
i__36317 = G__36413;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36314);
if(temp__5804__auto__){
var seq__36314__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36314__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36314__$1);
var G__36414 = cljs.core.chunk_rest(seq__36314__$1);
var G__36415 = c__5565__auto__;
var G__36416 = cljs.core.count(c__5565__auto__);
var G__36417 = (0);
seq__36314 = G__36414;
chunk__36315 = G__36415;
count__36316 = G__36416;
i__36317 = G__36417;
continue;
} else {
var effect = cljs.core.first(seq__36314__$1);
re_frame.fx.dispatch_later(effect);


var G__36418 = cljs.core.next(seq__36314__$1);
var G__36419 = null;
var G__36420 = (0);
var G__36421 = (0);
seq__36314 = G__36418;
chunk__36315 = G__36419;
count__36316 = G__36420;
i__36317 = G__36421;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__36319 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36320 = null;
var count__36321 = (0);
var i__36322 = (0);
while(true){
if((i__36322 < count__36321)){
var vec__36332 = chunk__36320.cljs$core$IIndexed$_nth$arity$2(null,i__36322);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36332,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36332,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___36422 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36422)){
var effect_fn_36423 = temp__5802__auto___36422;
(effect_fn_36423.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36423.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36423.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36424 = seq__36319;
var G__36425 = chunk__36320;
var G__36426 = count__36321;
var G__36427 = (i__36322 + (1));
seq__36319 = G__36424;
chunk__36320 = G__36425;
count__36321 = G__36426;
i__36322 = G__36427;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36319);
if(temp__5804__auto__){
var seq__36319__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36319__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36319__$1);
var G__36428 = cljs.core.chunk_rest(seq__36319__$1);
var G__36429 = c__5565__auto__;
var G__36430 = cljs.core.count(c__5565__auto__);
var G__36431 = (0);
seq__36319 = G__36428;
chunk__36320 = G__36429;
count__36321 = G__36430;
i__36322 = G__36431;
continue;
} else {
var vec__36337 = cljs.core.first(seq__36319__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36337,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36337,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___36432 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36432)){
var effect_fn_36433 = temp__5802__auto___36432;
(effect_fn_36433.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36433.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36433.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36434 = cljs.core.next(seq__36319__$1);
var G__36435 = null;
var G__36436 = (0);
var G__36437 = (0);
seq__36319 = G__36434;
chunk__36320 = G__36435;
count__36321 = G__36436;
i__36322 = G__36437;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__36342 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36343 = null;
var count__36344 = (0);
var i__36345 = (0);
while(true){
if((i__36345 < count__36344)){
var event = chunk__36343.cljs$core$IIndexed$_nth$arity$2(null,i__36345);
re_frame.router.dispatch(event);


var G__36438 = seq__36342;
var G__36439 = chunk__36343;
var G__36440 = count__36344;
var G__36441 = (i__36345 + (1));
seq__36342 = G__36438;
chunk__36343 = G__36439;
count__36344 = G__36440;
i__36345 = G__36441;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36342);
if(temp__5804__auto__){
var seq__36342__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36342__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36342__$1);
var G__36442 = cljs.core.chunk_rest(seq__36342__$1);
var G__36443 = c__5565__auto__;
var G__36444 = cljs.core.count(c__5565__auto__);
var G__36445 = (0);
seq__36342 = G__36442;
chunk__36343 = G__36443;
count__36344 = G__36444;
i__36345 = G__36445;
continue;
} else {
var event = cljs.core.first(seq__36342__$1);
re_frame.router.dispatch(event);


var G__36446 = cljs.core.next(seq__36342__$1);
var G__36447 = null;
var G__36448 = (0);
var G__36449 = (0);
seq__36342 = G__36446;
chunk__36343 = G__36447;
count__36344 = G__36448;
i__36345 = G__36449;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__36349 = cljs.core.seq(value);
var chunk__36350 = null;
var count__36351 = (0);
var i__36352 = (0);
while(true){
if((i__36352 < count__36351)){
var event = chunk__36350.cljs$core$IIndexed$_nth$arity$2(null,i__36352);
clear_event(event);


var G__36450 = seq__36349;
var G__36451 = chunk__36350;
var G__36452 = count__36351;
var G__36453 = (i__36352 + (1));
seq__36349 = G__36450;
chunk__36350 = G__36451;
count__36351 = G__36452;
i__36352 = G__36453;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36349);
if(temp__5804__auto__){
var seq__36349__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36349__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36349__$1);
var G__36454 = cljs.core.chunk_rest(seq__36349__$1);
var G__36455 = c__5565__auto__;
var G__36456 = cljs.core.count(c__5565__auto__);
var G__36457 = (0);
seq__36349 = G__36454;
chunk__36350 = G__36455;
count__36351 = G__36456;
i__36352 = G__36457;
continue;
} else {
var event = cljs.core.first(seq__36349__$1);
clear_event(event);


var G__36458 = cljs.core.next(seq__36349__$1);
var G__36459 = null;
var G__36460 = (0);
var G__36461 = (0);
seq__36349 = G__36458;
chunk__36350 = G__36459;
count__36351 = G__36460;
i__36352 = G__36461;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
