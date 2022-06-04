goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___48268 = arguments.length;
var i__5767__auto___48269 = (0);
while(true){
if((i__5767__auto___48269 < len__5766__auto___48268)){
args__5772__auto__.push((arguments[i__5767__auto___48269]));

var G__48270 = (i__5767__auto___48269 + (1));
i__5767__auto___48269 = G__48270;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47988){
var G__47989 = cljs.core.first(seq47988);
var seq47988__$1 = cljs.core.next(seq47988);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47989,seq47988__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47990 = cljs.core.seq(sources);
var chunk__47991 = null;
var count__47992 = (0);
var i__47993 = (0);
while(true){
if((i__47993 < count__47992)){
var map__47998 = chunk__47991.cljs$core$IIndexed$_nth$arity$2(null,i__47993);
var map__47998__$1 = cljs.core.__destructure_map(map__47998);
var src = map__47998__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47998__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47998__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47998__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47998__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47999){var e_48271 = e47999;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48271);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48271.message)].join('')));
}

var G__48272 = seq__47990;
var G__48273 = chunk__47991;
var G__48274 = count__47992;
var G__48275 = (i__47993 + (1));
seq__47990 = G__48272;
chunk__47991 = G__48273;
count__47992 = G__48274;
i__47993 = G__48275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47990);
if(temp__5804__auto__){
var seq__47990__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47990__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47990__$1);
var G__48276 = cljs.core.chunk_rest(seq__47990__$1);
var G__48277 = c__5565__auto__;
var G__48278 = cljs.core.count(c__5565__auto__);
var G__48279 = (0);
seq__47990 = G__48276;
chunk__47991 = G__48277;
count__47992 = G__48278;
i__47993 = G__48279;
continue;
} else {
var map__48000 = cljs.core.first(seq__47990__$1);
var map__48000__$1 = cljs.core.__destructure_map(map__48000);
var src = map__48000__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48000__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48000__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48000__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48000__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48001){var e_48280 = e48001;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48280);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48280.message)].join('')));
}

var G__48281 = cljs.core.next(seq__47990__$1);
var G__48282 = null;
var G__48283 = (0);
var G__48284 = (0);
seq__47990 = G__48281;
chunk__47991 = G__48282;
count__47992 = G__48283;
i__47993 = G__48284;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__48002 = cljs.core.seq(js_requires);
var chunk__48003 = null;
var count__48004 = (0);
var i__48005 = (0);
while(true){
if((i__48005 < count__48004)){
var js_ns = chunk__48003.cljs$core$IIndexed$_nth$arity$2(null,i__48005);
var require_str_48285 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48285);


var G__48286 = seq__48002;
var G__48287 = chunk__48003;
var G__48288 = count__48004;
var G__48289 = (i__48005 + (1));
seq__48002 = G__48286;
chunk__48003 = G__48287;
count__48004 = G__48288;
i__48005 = G__48289;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48002);
if(temp__5804__auto__){
var seq__48002__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48002__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__48002__$1);
var G__48290 = cljs.core.chunk_rest(seq__48002__$1);
var G__48291 = c__5565__auto__;
var G__48292 = cljs.core.count(c__5565__auto__);
var G__48293 = (0);
seq__48002 = G__48290;
chunk__48003 = G__48291;
count__48004 = G__48292;
i__48005 = G__48293;
continue;
} else {
var js_ns = cljs.core.first(seq__48002__$1);
var require_str_48294 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48294);


var G__48295 = cljs.core.next(seq__48002__$1);
var G__48296 = null;
var G__48297 = (0);
var G__48298 = (0);
seq__48002 = G__48295;
chunk__48003 = G__48296;
count__48004 = G__48297;
i__48005 = G__48298;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__48007){
var map__48008 = p__48007;
var map__48008__$1 = cljs.core.__destructure_map(map__48008);
var msg = map__48008__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48008__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48008__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48009(s__48010){
return (new cljs.core.LazySeq(null,(function (){
var s__48010__$1 = s__48010;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48010__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__48015 = cljs.core.first(xs__6360__auto__);
var map__48015__$1 = cljs.core.__destructure_map(map__48015);
var src = map__48015__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48015__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48015__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__48010__$1,map__48015,map__48015__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48008,map__48008__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48009_$_iter__48011(s__48012){
return (new cljs.core.LazySeq(null,((function (s__48010__$1,map__48015,map__48015__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48008,map__48008__$1,msg,info,reload_info){
return (function (){
var s__48012__$1 = s__48012;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__48012__$1);
if(temp__5804__auto____$1){
var s__48012__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48012__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__48012__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__48014 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__48013 = (0);
while(true){
if((i__48013 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__48013);
cljs.core.chunk_append(b__48014,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48299 = (i__48013 + (1));
i__48013 = G__48299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48014),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48009_$_iter__48011(cljs.core.chunk_rest(s__48012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48014),null);
}
} else {
var warning = cljs.core.first(s__48012__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48009_$_iter__48011(cljs.core.rest(s__48012__$2)));
}
} else {
return null;
}
break;
}
});})(s__48010__$1,map__48015,map__48015__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48008,map__48008__$1,msg,info,reload_info))
,null,null));
});})(s__48010__$1,map__48015,map__48015__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48008,map__48008__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48009(cljs.core.rest(s__48010__$1)));
} else {
var G__48300 = cljs.core.rest(s__48010__$1);
s__48010__$1 = G__48300;
continue;
}
} else {
var G__48301 = cljs.core.rest(s__48010__$1);
s__48010__$1 = G__48301;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__48016_48302 = cljs.core.seq(warnings);
var chunk__48017_48303 = null;
var count__48018_48304 = (0);
var i__48019_48305 = (0);
while(true){
if((i__48019_48305 < count__48018_48304)){
var map__48022_48306 = chunk__48017_48303.cljs$core$IIndexed$_nth$arity$2(null,i__48019_48305);
var map__48022_48307__$1 = cljs.core.__destructure_map(map__48022_48306);
var w_48308 = map__48022_48307__$1;
var msg_48309__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48022_48307__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48022_48307__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48022_48307__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48022_48307__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48312)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48310),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48311),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48309__$1)].join(''));


var G__48313 = seq__48016_48302;
var G__48314 = chunk__48017_48303;
var G__48315 = count__48018_48304;
var G__48316 = (i__48019_48305 + (1));
seq__48016_48302 = G__48313;
chunk__48017_48303 = G__48314;
count__48018_48304 = G__48315;
i__48019_48305 = G__48316;
continue;
} else {
var temp__5804__auto___48317 = cljs.core.seq(seq__48016_48302);
if(temp__5804__auto___48317){
var seq__48016_48318__$1 = temp__5804__auto___48317;
if(cljs.core.chunked_seq_QMARK_(seq__48016_48318__$1)){
var c__5565__auto___48319 = cljs.core.chunk_first(seq__48016_48318__$1);
var G__48320 = cljs.core.chunk_rest(seq__48016_48318__$1);
var G__48321 = c__5565__auto___48319;
var G__48322 = cljs.core.count(c__5565__auto___48319);
var G__48323 = (0);
seq__48016_48302 = G__48320;
chunk__48017_48303 = G__48321;
count__48018_48304 = G__48322;
i__48019_48305 = G__48323;
continue;
} else {
var map__48023_48324 = cljs.core.first(seq__48016_48318__$1);
var map__48023_48325__$1 = cljs.core.__destructure_map(map__48023_48324);
var w_48326 = map__48023_48325__$1;
var msg_48327__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023_48325__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023_48325__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023_48325__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023_48325__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48330)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48328),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48329),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48327__$1)].join(''));


var G__48331 = cljs.core.next(seq__48016_48318__$1);
var G__48332 = null;
var G__48333 = (0);
var G__48334 = (0);
seq__48016_48302 = G__48331;
chunk__48017_48303 = G__48332;
count__48018_48304 = G__48333;
i__48019_48305 = G__48334;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__48006_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48006_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48024){
var map__48025 = p__48024;
var map__48025__$1 = cljs.core.__destructure_map(map__48025);
var msg = map__48025__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__48026 = cljs.core.seq(updates);
var chunk__48028 = null;
var count__48029 = (0);
var i__48030 = (0);
while(true){
if((i__48030 < count__48029)){
var path = chunk__48028.cljs$core$IIndexed$_nth$arity$2(null,i__48030);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48140_48335 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48144_48336 = null;
var count__48145_48337 = (0);
var i__48146_48338 = (0);
while(true){
if((i__48146_48338 < count__48145_48337)){
var node_48339 = chunk__48144_48336.cljs$core$IIndexed$_nth$arity$2(null,i__48146_48338);
if(cljs.core.not(node_48339.shadow$old)){
var path_match_48340 = shadow.cljs.devtools.client.browser.match_paths(node_48339.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48340)){
var new_link_48341 = (function (){var G__48172 = node_48339.cloneNode(true);
G__48172.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48340),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48172;
})();
(node_48339.shadow$old = true);

(new_link_48341.onload = ((function (seq__48140_48335,chunk__48144_48336,count__48145_48337,i__48146_48338,seq__48026,chunk__48028,count__48029,i__48030,new_link_48341,path_match_48340,node_48339,path,map__48025,map__48025__$1,msg,updates,reload_info){
return (function (e){
var seq__48173_48342 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48175_48343 = null;
var count__48176_48344 = (0);
var i__48177_48345 = (0);
while(true){
if((i__48177_48345 < count__48176_48344)){
var map__48181_48346 = chunk__48175_48343.cljs$core$IIndexed$_nth$arity$2(null,i__48177_48345);
var map__48181_48347__$1 = cljs.core.__destructure_map(map__48181_48346);
var task_48348 = map__48181_48347__$1;
var fn_str_48349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181_48347__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181_48347__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48351 = goog.getObjectByName(fn_str_48349,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48350)].join(''));

(fn_obj_48351.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48351.cljs$core$IFn$_invoke$arity$2(path,new_link_48341) : fn_obj_48351.call(null,path,new_link_48341));


var G__48352 = seq__48173_48342;
var G__48353 = chunk__48175_48343;
var G__48354 = count__48176_48344;
var G__48355 = (i__48177_48345 + (1));
seq__48173_48342 = G__48352;
chunk__48175_48343 = G__48353;
count__48176_48344 = G__48354;
i__48177_48345 = G__48355;
continue;
} else {
var temp__5804__auto___48356 = cljs.core.seq(seq__48173_48342);
if(temp__5804__auto___48356){
var seq__48173_48357__$1 = temp__5804__auto___48356;
if(cljs.core.chunked_seq_QMARK_(seq__48173_48357__$1)){
var c__5565__auto___48358 = cljs.core.chunk_first(seq__48173_48357__$1);
var G__48359 = cljs.core.chunk_rest(seq__48173_48357__$1);
var G__48360 = c__5565__auto___48358;
var G__48361 = cljs.core.count(c__5565__auto___48358);
var G__48362 = (0);
seq__48173_48342 = G__48359;
chunk__48175_48343 = G__48360;
count__48176_48344 = G__48361;
i__48177_48345 = G__48362;
continue;
} else {
var map__48182_48363 = cljs.core.first(seq__48173_48357__$1);
var map__48182_48364__$1 = cljs.core.__destructure_map(map__48182_48363);
var task_48365 = map__48182_48364__$1;
var fn_str_48366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48182_48364__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48182_48364__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48368 = goog.getObjectByName(fn_str_48366,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48367)].join(''));

(fn_obj_48368.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48368.cljs$core$IFn$_invoke$arity$2(path,new_link_48341) : fn_obj_48368.call(null,path,new_link_48341));


var G__48369 = cljs.core.next(seq__48173_48357__$1);
var G__48370 = null;
var G__48371 = (0);
var G__48372 = (0);
seq__48173_48342 = G__48369;
chunk__48175_48343 = G__48370;
count__48176_48344 = G__48371;
i__48177_48345 = G__48372;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48339);
});})(seq__48140_48335,chunk__48144_48336,count__48145_48337,i__48146_48338,seq__48026,chunk__48028,count__48029,i__48030,new_link_48341,path_match_48340,node_48339,path,map__48025,map__48025__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48340], 0));

goog.dom.insertSiblingAfter(new_link_48341,node_48339);


var G__48373 = seq__48140_48335;
var G__48374 = chunk__48144_48336;
var G__48375 = count__48145_48337;
var G__48376 = (i__48146_48338 + (1));
seq__48140_48335 = G__48373;
chunk__48144_48336 = G__48374;
count__48145_48337 = G__48375;
i__48146_48338 = G__48376;
continue;
} else {
var G__48377 = seq__48140_48335;
var G__48378 = chunk__48144_48336;
var G__48379 = count__48145_48337;
var G__48380 = (i__48146_48338 + (1));
seq__48140_48335 = G__48377;
chunk__48144_48336 = G__48378;
count__48145_48337 = G__48379;
i__48146_48338 = G__48380;
continue;
}
} else {
var G__48381 = seq__48140_48335;
var G__48382 = chunk__48144_48336;
var G__48383 = count__48145_48337;
var G__48384 = (i__48146_48338 + (1));
seq__48140_48335 = G__48381;
chunk__48144_48336 = G__48382;
count__48145_48337 = G__48383;
i__48146_48338 = G__48384;
continue;
}
} else {
var temp__5804__auto___48385 = cljs.core.seq(seq__48140_48335);
if(temp__5804__auto___48385){
var seq__48140_48386__$1 = temp__5804__auto___48385;
if(cljs.core.chunked_seq_QMARK_(seq__48140_48386__$1)){
var c__5565__auto___48387 = cljs.core.chunk_first(seq__48140_48386__$1);
var G__48388 = cljs.core.chunk_rest(seq__48140_48386__$1);
var G__48389 = c__5565__auto___48387;
var G__48390 = cljs.core.count(c__5565__auto___48387);
var G__48391 = (0);
seq__48140_48335 = G__48388;
chunk__48144_48336 = G__48389;
count__48145_48337 = G__48390;
i__48146_48338 = G__48391;
continue;
} else {
var node_48392 = cljs.core.first(seq__48140_48386__$1);
if(cljs.core.not(node_48392.shadow$old)){
var path_match_48393 = shadow.cljs.devtools.client.browser.match_paths(node_48392.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48393)){
var new_link_48394 = (function (){var G__48183 = node_48392.cloneNode(true);
G__48183.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48393),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48183;
})();
(node_48392.shadow$old = true);

(new_link_48394.onload = ((function (seq__48140_48335,chunk__48144_48336,count__48145_48337,i__48146_48338,seq__48026,chunk__48028,count__48029,i__48030,new_link_48394,path_match_48393,node_48392,seq__48140_48386__$1,temp__5804__auto___48385,path,map__48025,map__48025__$1,msg,updates,reload_info){
return (function (e){
var seq__48184_48395 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48186_48396 = null;
var count__48187_48397 = (0);
var i__48188_48398 = (0);
while(true){
if((i__48188_48398 < count__48187_48397)){
var map__48192_48399 = chunk__48186_48396.cljs$core$IIndexed$_nth$arity$2(null,i__48188_48398);
var map__48192_48400__$1 = cljs.core.__destructure_map(map__48192_48399);
var task_48401 = map__48192_48400__$1;
var fn_str_48402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48192_48400__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48192_48400__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48404 = goog.getObjectByName(fn_str_48402,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48403)].join(''));

(fn_obj_48404.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48404.cljs$core$IFn$_invoke$arity$2(path,new_link_48394) : fn_obj_48404.call(null,path,new_link_48394));


var G__48405 = seq__48184_48395;
var G__48406 = chunk__48186_48396;
var G__48407 = count__48187_48397;
var G__48408 = (i__48188_48398 + (1));
seq__48184_48395 = G__48405;
chunk__48186_48396 = G__48406;
count__48187_48397 = G__48407;
i__48188_48398 = G__48408;
continue;
} else {
var temp__5804__auto___48409__$1 = cljs.core.seq(seq__48184_48395);
if(temp__5804__auto___48409__$1){
var seq__48184_48410__$1 = temp__5804__auto___48409__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48184_48410__$1)){
var c__5565__auto___48411 = cljs.core.chunk_first(seq__48184_48410__$1);
var G__48412 = cljs.core.chunk_rest(seq__48184_48410__$1);
var G__48413 = c__5565__auto___48411;
var G__48414 = cljs.core.count(c__5565__auto___48411);
var G__48415 = (0);
seq__48184_48395 = G__48412;
chunk__48186_48396 = G__48413;
count__48187_48397 = G__48414;
i__48188_48398 = G__48415;
continue;
} else {
var map__48193_48416 = cljs.core.first(seq__48184_48410__$1);
var map__48193_48417__$1 = cljs.core.__destructure_map(map__48193_48416);
var task_48418 = map__48193_48417__$1;
var fn_str_48419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48193_48417__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48193_48417__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48421 = goog.getObjectByName(fn_str_48419,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48420)].join(''));

(fn_obj_48421.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48421.cljs$core$IFn$_invoke$arity$2(path,new_link_48394) : fn_obj_48421.call(null,path,new_link_48394));


var G__48422 = cljs.core.next(seq__48184_48410__$1);
var G__48423 = null;
var G__48424 = (0);
var G__48425 = (0);
seq__48184_48395 = G__48422;
chunk__48186_48396 = G__48423;
count__48187_48397 = G__48424;
i__48188_48398 = G__48425;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48392);
});})(seq__48140_48335,chunk__48144_48336,count__48145_48337,i__48146_48338,seq__48026,chunk__48028,count__48029,i__48030,new_link_48394,path_match_48393,node_48392,seq__48140_48386__$1,temp__5804__auto___48385,path,map__48025,map__48025__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48393], 0));

goog.dom.insertSiblingAfter(new_link_48394,node_48392);


var G__48426 = cljs.core.next(seq__48140_48386__$1);
var G__48427 = null;
var G__48428 = (0);
var G__48429 = (0);
seq__48140_48335 = G__48426;
chunk__48144_48336 = G__48427;
count__48145_48337 = G__48428;
i__48146_48338 = G__48429;
continue;
} else {
var G__48430 = cljs.core.next(seq__48140_48386__$1);
var G__48431 = null;
var G__48432 = (0);
var G__48433 = (0);
seq__48140_48335 = G__48430;
chunk__48144_48336 = G__48431;
count__48145_48337 = G__48432;
i__48146_48338 = G__48433;
continue;
}
} else {
var G__48434 = cljs.core.next(seq__48140_48386__$1);
var G__48435 = null;
var G__48436 = (0);
var G__48437 = (0);
seq__48140_48335 = G__48434;
chunk__48144_48336 = G__48435;
count__48145_48337 = G__48436;
i__48146_48338 = G__48437;
continue;
}
}
} else {
}
}
break;
}


var G__48438 = seq__48026;
var G__48439 = chunk__48028;
var G__48440 = count__48029;
var G__48441 = (i__48030 + (1));
seq__48026 = G__48438;
chunk__48028 = G__48439;
count__48029 = G__48440;
i__48030 = G__48441;
continue;
} else {
var G__48442 = seq__48026;
var G__48443 = chunk__48028;
var G__48444 = count__48029;
var G__48445 = (i__48030 + (1));
seq__48026 = G__48442;
chunk__48028 = G__48443;
count__48029 = G__48444;
i__48030 = G__48445;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48026);
if(temp__5804__auto__){
var seq__48026__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48026__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__48026__$1);
var G__48446 = cljs.core.chunk_rest(seq__48026__$1);
var G__48447 = c__5565__auto__;
var G__48448 = cljs.core.count(c__5565__auto__);
var G__48449 = (0);
seq__48026 = G__48446;
chunk__48028 = G__48447;
count__48029 = G__48448;
i__48030 = G__48449;
continue;
} else {
var path = cljs.core.first(seq__48026__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48194_48450 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48198_48451 = null;
var count__48199_48452 = (0);
var i__48200_48453 = (0);
while(true){
if((i__48200_48453 < count__48199_48452)){
var node_48454 = chunk__48198_48451.cljs$core$IIndexed$_nth$arity$2(null,i__48200_48453);
if(cljs.core.not(node_48454.shadow$old)){
var path_match_48455 = shadow.cljs.devtools.client.browser.match_paths(node_48454.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48455)){
var new_link_48456 = (function (){var G__48226 = node_48454.cloneNode(true);
G__48226.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48455),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48226;
})();
(node_48454.shadow$old = true);

(new_link_48456.onload = ((function (seq__48194_48450,chunk__48198_48451,count__48199_48452,i__48200_48453,seq__48026,chunk__48028,count__48029,i__48030,new_link_48456,path_match_48455,node_48454,path,seq__48026__$1,temp__5804__auto__,map__48025,map__48025__$1,msg,updates,reload_info){
return (function (e){
var seq__48227_48457 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48229_48458 = null;
var count__48230_48459 = (0);
var i__48231_48460 = (0);
while(true){
if((i__48231_48460 < count__48230_48459)){
var map__48235_48461 = chunk__48229_48458.cljs$core$IIndexed$_nth$arity$2(null,i__48231_48460);
var map__48235_48462__$1 = cljs.core.__destructure_map(map__48235_48461);
var task_48463 = map__48235_48462__$1;
var fn_str_48464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235_48462__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235_48462__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48466 = goog.getObjectByName(fn_str_48464,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48465)].join(''));

(fn_obj_48466.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48466.cljs$core$IFn$_invoke$arity$2(path,new_link_48456) : fn_obj_48466.call(null,path,new_link_48456));


var G__48467 = seq__48227_48457;
var G__48468 = chunk__48229_48458;
var G__48469 = count__48230_48459;
var G__48470 = (i__48231_48460 + (1));
seq__48227_48457 = G__48467;
chunk__48229_48458 = G__48468;
count__48230_48459 = G__48469;
i__48231_48460 = G__48470;
continue;
} else {
var temp__5804__auto___48471__$1 = cljs.core.seq(seq__48227_48457);
if(temp__5804__auto___48471__$1){
var seq__48227_48472__$1 = temp__5804__auto___48471__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48227_48472__$1)){
var c__5565__auto___48473 = cljs.core.chunk_first(seq__48227_48472__$1);
var G__48474 = cljs.core.chunk_rest(seq__48227_48472__$1);
var G__48475 = c__5565__auto___48473;
var G__48476 = cljs.core.count(c__5565__auto___48473);
var G__48477 = (0);
seq__48227_48457 = G__48474;
chunk__48229_48458 = G__48475;
count__48230_48459 = G__48476;
i__48231_48460 = G__48477;
continue;
} else {
var map__48236_48478 = cljs.core.first(seq__48227_48472__$1);
var map__48236_48479__$1 = cljs.core.__destructure_map(map__48236_48478);
var task_48480 = map__48236_48479__$1;
var fn_str_48481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48236_48479__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48236_48479__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48483 = goog.getObjectByName(fn_str_48481,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48482)].join(''));

(fn_obj_48483.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48483.cljs$core$IFn$_invoke$arity$2(path,new_link_48456) : fn_obj_48483.call(null,path,new_link_48456));


var G__48484 = cljs.core.next(seq__48227_48472__$1);
var G__48485 = null;
var G__48486 = (0);
var G__48487 = (0);
seq__48227_48457 = G__48484;
chunk__48229_48458 = G__48485;
count__48230_48459 = G__48486;
i__48231_48460 = G__48487;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48454);
});})(seq__48194_48450,chunk__48198_48451,count__48199_48452,i__48200_48453,seq__48026,chunk__48028,count__48029,i__48030,new_link_48456,path_match_48455,node_48454,path,seq__48026__$1,temp__5804__auto__,map__48025,map__48025__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48455], 0));

goog.dom.insertSiblingAfter(new_link_48456,node_48454);


var G__48488 = seq__48194_48450;
var G__48489 = chunk__48198_48451;
var G__48490 = count__48199_48452;
var G__48491 = (i__48200_48453 + (1));
seq__48194_48450 = G__48488;
chunk__48198_48451 = G__48489;
count__48199_48452 = G__48490;
i__48200_48453 = G__48491;
continue;
} else {
var G__48492 = seq__48194_48450;
var G__48493 = chunk__48198_48451;
var G__48494 = count__48199_48452;
var G__48495 = (i__48200_48453 + (1));
seq__48194_48450 = G__48492;
chunk__48198_48451 = G__48493;
count__48199_48452 = G__48494;
i__48200_48453 = G__48495;
continue;
}
} else {
var G__48496 = seq__48194_48450;
var G__48497 = chunk__48198_48451;
var G__48498 = count__48199_48452;
var G__48499 = (i__48200_48453 + (1));
seq__48194_48450 = G__48496;
chunk__48198_48451 = G__48497;
count__48199_48452 = G__48498;
i__48200_48453 = G__48499;
continue;
}
} else {
var temp__5804__auto___48500__$1 = cljs.core.seq(seq__48194_48450);
if(temp__5804__auto___48500__$1){
var seq__48194_48501__$1 = temp__5804__auto___48500__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48194_48501__$1)){
var c__5565__auto___48502 = cljs.core.chunk_first(seq__48194_48501__$1);
var G__48503 = cljs.core.chunk_rest(seq__48194_48501__$1);
var G__48504 = c__5565__auto___48502;
var G__48505 = cljs.core.count(c__5565__auto___48502);
var G__48506 = (0);
seq__48194_48450 = G__48503;
chunk__48198_48451 = G__48504;
count__48199_48452 = G__48505;
i__48200_48453 = G__48506;
continue;
} else {
var node_48507 = cljs.core.first(seq__48194_48501__$1);
if(cljs.core.not(node_48507.shadow$old)){
var path_match_48508 = shadow.cljs.devtools.client.browser.match_paths(node_48507.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48508)){
var new_link_48509 = (function (){var G__48237 = node_48507.cloneNode(true);
G__48237.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48508),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48237;
})();
(node_48507.shadow$old = true);

(new_link_48509.onload = ((function (seq__48194_48450,chunk__48198_48451,count__48199_48452,i__48200_48453,seq__48026,chunk__48028,count__48029,i__48030,new_link_48509,path_match_48508,node_48507,seq__48194_48501__$1,temp__5804__auto___48500__$1,path,seq__48026__$1,temp__5804__auto__,map__48025,map__48025__$1,msg,updates,reload_info){
return (function (e){
var seq__48238_48510 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48240_48511 = null;
var count__48241_48512 = (0);
var i__48242_48513 = (0);
while(true){
if((i__48242_48513 < count__48241_48512)){
var map__48246_48514 = chunk__48240_48511.cljs$core$IIndexed$_nth$arity$2(null,i__48242_48513);
var map__48246_48515__$1 = cljs.core.__destructure_map(map__48246_48514);
var task_48516 = map__48246_48515__$1;
var fn_str_48517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48246_48515__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48246_48515__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48519 = goog.getObjectByName(fn_str_48517,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48518)].join(''));

(fn_obj_48519.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48519.cljs$core$IFn$_invoke$arity$2(path,new_link_48509) : fn_obj_48519.call(null,path,new_link_48509));


var G__48520 = seq__48238_48510;
var G__48521 = chunk__48240_48511;
var G__48522 = count__48241_48512;
var G__48523 = (i__48242_48513 + (1));
seq__48238_48510 = G__48520;
chunk__48240_48511 = G__48521;
count__48241_48512 = G__48522;
i__48242_48513 = G__48523;
continue;
} else {
var temp__5804__auto___48524__$2 = cljs.core.seq(seq__48238_48510);
if(temp__5804__auto___48524__$2){
var seq__48238_48525__$1 = temp__5804__auto___48524__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48238_48525__$1)){
var c__5565__auto___48526 = cljs.core.chunk_first(seq__48238_48525__$1);
var G__48527 = cljs.core.chunk_rest(seq__48238_48525__$1);
var G__48528 = c__5565__auto___48526;
var G__48529 = cljs.core.count(c__5565__auto___48526);
var G__48530 = (0);
seq__48238_48510 = G__48527;
chunk__48240_48511 = G__48528;
count__48241_48512 = G__48529;
i__48242_48513 = G__48530;
continue;
} else {
var map__48247_48531 = cljs.core.first(seq__48238_48525__$1);
var map__48247_48532__$1 = cljs.core.__destructure_map(map__48247_48531);
var task_48533 = map__48247_48532__$1;
var fn_str_48534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48247_48532__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48247_48532__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48536 = goog.getObjectByName(fn_str_48534,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48535)].join(''));

(fn_obj_48536.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48536.cljs$core$IFn$_invoke$arity$2(path,new_link_48509) : fn_obj_48536.call(null,path,new_link_48509));


var G__48537 = cljs.core.next(seq__48238_48525__$1);
var G__48538 = null;
var G__48539 = (0);
var G__48540 = (0);
seq__48238_48510 = G__48537;
chunk__48240_48511 = G__48538;
count__48241_48512 = G__48539;
i__48242_48513 = G__48540;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48507);
});})(seq__48194_48450,chunk__48198_48451,count__48199_48452,i__48200_48453,seq__48026,chunk__48028,count__48029,i__48030,new_link_48509,path_match_48508,node_48507,seq__48194_48501__$1,temp__5804__auto___48500__$1,path,seq__48026__$1,temp__5804__auto__,map__48025,map__48025__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48508], 0));

goog.dom.insertSiblingAfter(new_link_48509,node_48507);


var G__48541 = cljs.core.next(seq__48194_48501__$1);
var G__48542 = null;
var G__48543 = (0);
var G__48544 = (0);
seq__48194_48450 = G__48541;
chunk__48198_48451 = G__48542;
count__48199_48452 = G__48543;
i__48200_48453 = G__48544;
continue;
} else {
var G__48545 = cljs.core.next(seq__48194_48501__$1);
var G__48546 = null;
var G__48547 = (0);
var G__48548 = (0);
seq__48194_48450 = G__48545;
chunk__48198_48451 = G__48546;
count__48199_48452 = G__48547;
i__48200_48453 = G__48548;
continue;
}
} else {
var G__48549 = cljs.core.next(seq__48194_48501__$1);
var G__48550 = null;
var G__48551 = (0);
var G__48552 = (0);
seq__48194_48450 = G__48549;
chunk__48198_48451 = G__48550;
count__48199_48452 = G__48551;
i__48200_48453 = G__48552;
continue;
}
}
} else {
}
}
break;
}


var G__48553 = cljs.core.next(seq__48026__$1);
var G__48554 = null;
var G__48555 = (0);
var G__48556 = (0);
seq__48026 = G__48553;
chunk__48028 = G__48554;
count__48029 = G__48555;
i__48030 = G__48556;
continue;
} else {
var G__48557 = cljs.core.next(seq__48026__$1);
var G__48558 = null;
var G__48559 = (0);
var G__48560 = (0);
seq__48026 = G__48557;
chunk__48028 = G__48558;
count__48029 = G__48559;
i__48030 = G__48560;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48248){
var map__48249 = p__48248;
var map__48249__$1 = cljs.core.__destructure_map(map__48249);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48249__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48250){
var map__48251 = p__48250;
var map__48251__$1 = cljs.core.__destructure_map(map__48251);
var _ = map__48251__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48251__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48252,done,error){
var map__48253 = p__48252;
var map__48253__$1 = cljs.core.__destructure_map(map__48253);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48253__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48254,done,error){
var map__48255 = p__48254;
var map__48255__$1 = cljs.core.__destructure_map(map__48255);
var msg = map__48255__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48255__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48255__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48255__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48256){
var map__48257 = p__48256;
var map__48257__$1 = cljs.core.__destructure_map(map__48257);
var src = map__48257__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48257__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48258 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48258) : done.call(null,G__48258));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48259){
var map__48260 = p__48259;
var map__48260__$1 = cljs.core.__destructure_map(map__48260);
var msg__$1 = map__48260__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48260__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48261){var ex = e48261;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48262){
var map__48263 = p__48262;
var map__48263__$1 = cljs.core.__destructure_map(map__48263);
var env = map__48263__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48263__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48264){
var map__48265 = p__48264;
var map__48265__$1 = cljs.core.__destructure_map(map__48265);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48265__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48265__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48266){
var map__48267 = p__48266;
var map__48267__$1 = cljs.core.__destructure_map(map__48267);
var svc = map__48267__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48267__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
