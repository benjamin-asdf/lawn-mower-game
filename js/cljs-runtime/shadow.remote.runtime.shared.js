goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__47198,res){
var map__47199 = p__47198;
var map__47199__$1 = cljs.core.__destructure_map(map__47199);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47199__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47199__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__47202 = res;
var G__47202__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47202,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__47202);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47202__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__47202__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__47276 = arguments.length;
switch (G__47276) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__47277,msg,handlers,timeout_after_ms){
var map__47279 = p__47277;
var map__47279__$1 = cljs.core.__destructure_map(map__47279);
var runtime = map__47279__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47279__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47501 = arguments.length;
var i__5767__auto___47502 = (0);
while(true){
if((i__5767__auto___47502 < len__5766__auto___47501)){
args__5772__auto__.push((arguments[i__5767__auto___47502]));

var G__47503 = (i__5767__auto___47502 + (1));
i__5767__auto___47502 = G__47503;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47294,ev,args){
var map__47296 = p__47294;
var map__47296__$1 = cljs.core.__destructure_map(map__47296);
var runtime = map__47296__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47296__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47297 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47300 = null;
var count__47301 = (0);
var i__47302 = (0);
while(true){
if((i__47302 < count__47301)){
var ext = chunk__47300.cljs$core$IIndexed$_nth$arity$2(null,i__47302);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47515 = seq__47297;
var G__47516 = chunk__47300;
var G__47518 = count__47301;
var G__47520 = (i__47302 + (1));
seq__47297 = G__47515;
chunk__47300 = G__47516;
count__47301 = G__47518;
i__47302 = G__47520;
continue;
} else {
var G__47523 = seq__47297;
var G__47524 = chunk__47300;
var G__47525 = count__47301;
var G__47526 = (i__47302 + (1));
seq__47297 = G__47523;
chunk__47300 = G__47524;
count__47301 = G__47525;
i__47302 = G__47526;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47297);
if(temp__5804__auto__){
var seq__47297__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47297__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47297__$1);
var G__47533 = cljs.core.chunk_rest(seq__47297__$1);
var G__47534 = c__5565__auto__;
var G__47535 = cljs.core.count(c__5565__auto__);
var G__47536 = (0);
seq__47297 = G__47533;
chunk__47300 = G__47534;
count__47301 = G__47535;
i__47302 = G__47536;
continue;
} else {
var ext = cljs.core.first(seq__47297__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47543 = cljs.core.next(seq__47297__$1);
var G__47544 = null;
var G__47545 = (0);
var G__47546 = (0);
seq__47297 = G__47543;
chunk__47300 = G__47544;
count__47301 = G__47545;
i__47302 = G__47546;
continue;
} else {
var G__47547 = cljs.core.next(seq__47297__$1);
var G__47548 = null;
var G__47549 = (0);
var G__47550 = (0);
seq__47297 = G__47547;
chunk__47300 = G__47548;
count__47301 = G__47549;
i__47302 = G__47550;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq47283){
var G__47284 = cljs.core.first(seq47283);
var seq47283__$1 = cljs.core.next(seq47283);
var G__47285 = cljs.core.first(seq47283__$1);
var seq47283__$2 = cljs.core.next(seq47283__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47284,G__47285,seq47283__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__47316,p__47317){
var map__47318 = p__47316;
var map__47318__$1 = cljs.core.__destructure_map(map__47318);
var runtime = map__47318__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47318__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47319 = p__47317;
var map__47319__$1 = cljs.core.__destructure_map(map__47319);
var msg = map__47319__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47319__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__47323 = cljs.core.deref(state_ref);
var map__47323__$1 = cljs.core.__destructure_map(map__47323);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47323__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47323__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__47324){
var map__47325 = p__47324;
var map__47325__$1 = cljs.core.__destructure_map(map__47325);
var runtime = map__47325__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__47326,msg){
var map__47327 = p__47326;
var map__47327__$1 = cljs.core.__destructure_map(map__47327);
var runtime = map__47327__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47327__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__47361,key,p__47362){
var map__47364 = p__47361;
var map__47364__$1 = cljs.core.__destructure_map(map__47364);
var state = map__47364__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47364__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__47365 = p__47362;
var map__47365__$1 = cljs.core.__destructure_map(map__47365);
var spec = map__47365__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47365__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__47370,key,spec){
var map__47371 = p__47370;
var map__47371__$1 = cljs.core.__destructure_map(map__47371);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47371__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__47372_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__47372_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__47373_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__47373_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__47374_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__47374_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__47375_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__47375_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__47376_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__47376_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__47378,key){
var map__47379 = p__47378;
var map__47379__$1 = cljs.core.__destructure_map(map__47379);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47379__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__47392,msg){
var map__47394 = p__47392;
var map__47394__$1 = cljs.core.__destructure_map(map__47394);
var runtime = map__47394__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__47399,p__47400){
var map__47401 = p__47399;
var map__47401__$1 = cljs.core.__destructure_map(map__47401);
var runtime = map__47401__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47401__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47402 = p__47400;
var map__47402__$1 = cljs.core.__destructure_map(map__47402);
var msg = map__47402__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47402__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47402__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__47408 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47410 = null;
var count__47411 = (0);
var i__47412 = (0);
while(true){
if((i__47412 < count__47411)){
var map__47425 = chunk__47410.cljs$core$IIndexed$_nth$arity$2(null,i__47412);
var map__47425__$1 = cljs.core.__destructure_map(map__47425);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47425__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47578 = seq__47408;
var G__47579 = chunk__47410;
var G__47580 = count__47411;
var G__47581 = (i__47412 + (1));
seq__47408 = G__47578;
chunk__47410 = G__47579;
count__47411 = G__47580;
i__47412 = G__47581;
continue;
} else {
var G__47582 = seq__47408;
var G__47583 = chunk__47410;
var G__47584 = count__47411;
var G__47585 = (i__47412 + (1));
seq__47408 = G__47582;
chunk__47410 = G__47583;
count__47411 = G__47584;
i__47412 = G__47585;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47408);
if(temp__5804__auto__){
var seq__47408__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47408__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47408__$1);
var G__47587 = cljs.core.chunk_rest(seq__47408__$1);
var G__47588 = c__5565__auto__;
var G__47589 = cljs.core.count(c__5565__auto__);
var G__47590 = (0);
seq__47408 = G__47587;
chunk__47410 = G__47588;
count__47411 = G__47589;
i__47412 = G__47590;
continue;
} else {
var map__47467 = cljs.core.first(seq__47408__$1);
var map__47467__$1 = cljs.core.__destructure_map(map__47467);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47467__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47591 = cljs.core.next(seq__47408__$1);
var G__47592 = null;
var G__47593 = (0);
var G__47594 = (0);
seq__47408 = G__47591;
chunk__47410 = G__47592;
count__47411 = G__47593;
i__47412 = G__47594;
continue;
} else {
var G__47595 = cljs.core.next(seq__47408__$1);
var G__47596 = null;
var G__47597 = (0);
var G__47598 = (0);
seq__47408 = G__47595;
chunk__47410 = G__47596;
count__47411 = G__47597;
i__47412 = G__47598;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
