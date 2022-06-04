goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__47762,p__47763){
var map__47765 = p__47762;
var map__47765__$1 = cljs.core.__destructure_map(map__47765);
var svc = map__47765__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47765__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47765__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47765__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47766 = p__47763;
var map__47766__$1 = cljs.core.__destructure_map(map__47766);
var msg = map__47766__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47766__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47766__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47766__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47766__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__47772,p__47773){
var map__47774 = p__47772;
var map__47774__$1 = cljs.core.__destructure_map(map__47774);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47774__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__47775 = p__47773;
var map__47775__$1 = cljs.core.__destructure_map(map__47775);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47775__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__47776,p__47777){
var map__47778 = p__47776;
var map__47778__$1 = cljs.core.__destructure_map(map__47778);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47778__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47779 = p__47777;
var map__47779__$1 = cljs.core.__destructure_map(map__47779);
var msg = map__47779__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47779__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__47784,tid){
var map__47785 = p__47784;
var map__47785__$1 = cljs.core.__destructure_map(map__47785);
var svc = map__47785__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47785__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__47793 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__47794 = null;
var count__47795 = (0);
var i__47796 = (0);
while(true){
if((i__47796 < count__47795)){
var vec__47805 = chunk__47794.cljs$core$IIndexed$_nth$arity$2(null,i__47796);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47805,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47805,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47817 = seq__47793;
var G__47818 = chunk__47794;
var G__47819 = count__47795;
var G__47820 = (i__47796 + (1));
seq__47793 = G__47817;
chunk__47794 = G__47818;
count__47795 = G__47819;
i__47796 = G__47820;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47793);
if(temp__5804__auto__){
var seq__47793__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47793__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47793__$1);
var G__47821 = cljs.core.chunk_rest(seq__47793__$1);
var G__47822 = c__5565__auto__;
var G__47823 = cljs.core.count(c__5565__auto__);
var G__47824 = (0);
seq__47793 = G__47821;
chunk__47794 = G__47822;
count__47795 = G__47823;
i__47796 = G__47824;
continue;
} else {
var vec__47809 = cljs.core.first(seq__47793__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47809,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47809,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47825 = cljs.core.next(seq__47793__$1);
var G__47826 = null;
var G__47827 = (0);
var G__47828 = (0);
seq__47793 = G__47825;
chunk__47794 = G__47826;
count__47795 = G__47827;
i__47796 = G__47828;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__47787_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__47787_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__47788_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__47788_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__47790_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__47790_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__47792_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__47792_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__47815){
var map__47816 = p__47815;
var map__47816__$1 = cljs.core.__destructure_map(map__47816);
var svc = map__47816__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47816__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
