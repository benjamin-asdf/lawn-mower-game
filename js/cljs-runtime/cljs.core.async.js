goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44089 = arguments.length;
switch (G__44089) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44092 = (function (f,blockable,meta44093){
this.f = f;
this.blockable = blockable;
this.meta44093 = meta44093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44094,meta44093__$1){
var self__ = this;
var _44094__$1 = this;
return (new cljs.core.async.t_cljs$core$async44092(self__.f,self__.blockable,meta44093__$1));
}));

(cljs.core.async.t_cljs$core$async44092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44094){
var self__ = this;
var _44094__$1 = this;
return self__.meta44093;
}));

(cljs.core.async.t_cljs$core$async44092.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44093","meta44093",-344585701,null)], null);
}));

(cljs.core.async.t_cljs$core$async44092.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44092");

(cljs.core.async.t_cljs$core$async44092.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44092");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44092.
 */
cljs.core.async.__GT_t_cljs$core$async44092 = (function cljs$core$async$__GT_t_cljs$core$async44092(f__$1,blockable__$1,meta44093){
return (new cljs.core.async.t_cljs$core$async44092(f__$1,blockable__$1,meta44093));
});

}

return (new cljs.core.async.t_cljs$core$async44092(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44128 = arguments.length;
switch (G__44128) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44140 = arguments.length;
switch (G__44140) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44143 = arguments.length;
switch (G__44143) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45584 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45584) : fn1.call(null,val_45584));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45584) : fn1.call(null,val_45584));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44154 = arguments.length;
switch (G__44154) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___45587 = n;
var x_45588 = (0);
while(true){
if((x_45588 < n__5633__auto___45587)){
(a[x_45588] = x_45588);

var G__45589 = (x_45588 + (1));
x_45588 = G__45589;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44162 = (function (flag,meta44163){
this.flag = flag;
this.meta44163 = meta44163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44164,meta44163__$1){
var self__ = this;
var _44164__$1 = this;
return (new cljs.core.async.t_cljs$core$async44162(self__.flag,meta44163__$1));
}));

(cljs.core.async.t_cljs$core$async44162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44164){
var self__ = this;
var _44164__$1 = this;
return self__.meta44163;
}));

(cljs.core.async.t_cljs$core$async44162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44163","meta44163",1995457404,null)], null);
}));

(cljs.core.async.t_cljs$core$async44162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44162");

(cljs.core.async.t_cljs$core$async44162.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44162.
 */
cljs.core.async.__GT_t_cljs$core$async44162 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44162(flag__$1,meta44163){
return (new cljs.core.async.t_cljs$core$async44162(flag__$1,meta44163));
});

}

return (new cljs.core.async.t_cljs$core$async44162(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44169 = (function (flag,cb,meta44170){
this.flag = flag;
this.cb = cb;
this.meta44170 = meta44170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44171,meta44170__$1){
var self__ = this;
var _44171__$1 = this;
return (new cljs.core.async.t_cljs$core$async44169(self__.flag,self__.cb,meta44170__$1));
}));

(cljs.core.async.t_cljs$core$async44169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44171){
var self__ = this;
var _44171__$1 = this;
return self__.meta44170;
}));

(cljs.core.async.t_cljs$core$async44169.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44170","meta44170",1715743961,null)], null);
}));

(cljs.core.async.t_cljs$core$async44169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44169");

(cljs.core.async.t_cljs$core$async44169.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44169.
 */
cljs.core.async.__GT_t_cljs$core$async44169 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44169(flag__$1,cb__$1,meta44170){
return (new cljs.core.async.t_cljs$core$async44169(flag__$1,cb__$1,meta44170));
});

}

return (new cljs.core.async.t_cljs$core$async44169(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44172_SHARP_){
var G__44174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44172_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44174) : fret.call(null,G__44174));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44173_SHARP_){
var G__44175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44173_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44175) : fret.call(null,G__44175));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45598 = (i + (1));
i = G__45598;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45603 = arguments.length;
var i__5767__auto___45604 = (0);
while(true){
if((i__5767__auto___45604 < len__5766__auto___45603)){
args__5772__auto__.push((arguments[i__5767__auto___45604]));

var G__45605 = (i__5767__auto___45604 + (1));
i__5767__auto___45604 = G__45605;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44178){
var map__44179 = p__44178;
var map__44179__$1 = cljs.core.__destructure_map(map__44179);
var opts = map__44179__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44176){
var G__44177 = cljs.core.first(seq44176);
var seq44176__$1 = cljs.core.next(seq44176);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44177,seq44176__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44181 = arguments.length;
switch (G__44181) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44027__auto___45607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44205){
var state_val_44206 = (state_44205[(1)]);
if((state_val_44206 === (7))){
var inst_44201 = (state_44205[(2)]);
var state_44205__$1 = state_44205;
var statearr_44207_45608 = state_44205__$1;
(statearr_44207_45608[(2)] = inst_44201);

(statearr_44207_45608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (1))){
var state_44205__$1 = state_44205;
var statearr_44208_45609 = state_44205__$1;
(statearr_44208_45609[(2)] = null);

(statearr_44208_45609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (4))){
var inst_44184 = (state_44205[(7)]);
var inst_44184__$1 = (state_44205[(2)]);
var inst_44185 = (inst_44184__$1 == null);
var state_44205__$1 = (function (){var statearr_44209 = state_44205;
(statearr_44209[(7)] = inst_44184__$1);

return statearr_44209;
})();
if(cljs.core.truth_(inst_44185)){
var statearr_44210_45610 = state_44205__$1;
(statearr_44210_45610[(1)] = (5));

} else {
var statearr_44211_45611 = state_44205__$1;
(statearr_44211_45611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (13))){
var state_44205__$1 = state_44205;
var statearr_44212_45612 = state_44205__$1;
(statearr_44212_45612[(2)] = null);

(statearr_44212_45612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (6))){
var inst_44184 = (state_44205[(7)]);
var state_44205__$1 = state_44205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44205__$1,(11),to,inst_44184);
} else {
if((state_val_44206 === (3))){
var inst_44203 = (state_44205[(2)]);
var state_44205__$1 = state_44205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44205__$1,inst_44203);
} else {
if((state_val_44206 === (12))){
var state_44205__$1 = state_44205;
var statearr_44213_45613 = state_44205__$1;
(statearr_44213_45613[(2)] = null);

(statearr_44213_45613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (2))){
var state_44205__$1 = state_44205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44205__$1,(4),from);
} else {
if((state_val_44206 === (11))){
var inst_44194 = (state_44205[(2)]);
var state_44205__$1 = state_44205;
if(cljs.core.truth_(inst_44194)){
var statearr_44214_45614 = state_44205__$1;
(statearr_44214_45614[(1)] = (12));

} else {
var statearr_44215_45615 = state_44205__$1;
(statearr_44215_45615[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (9))){
var state_44205__$1 = state_44205;
var statearr_44216_45616 = state_44205__$1;
(statearr_44216_45616[(2)] = null);

(statearr_44216_45616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (5))){
var state_44205__$1 = state_44205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44217_45617 = state_44205__$1;
(statearr_44217_45617[(1)] = (8));

} else {
var statearr_44218_45618 = state_44205__$1;
(statearr_44218_45618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (14))){
var inst_44199 = (state_44205[(2)]);
var state_44205__$1 = state_44205;
var statearr_44219_45619 = state_44205__$1;
(statearr_44219_45619[(2)] = inst_44199);

(statearr_44219_45619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (10))){
var inst_44191 = (state_44205[(2)]);
var state_44205__$1 = state_44205;
var statearr_44220_45620 = state_44205__$1;
(statearr_44220_45620[(2)] = inst_44191);

(statearr_44220_45620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44206 === (8))){
var inst_44188 = cljs.core.async.close_BANG_(to);
var state_44205__$1 = state_44205;
var statearr_44221_45621 = state_44205__$1;
(statearr_44221_45621[(2)] = inst_44188);

(statearr_44221_45621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_44222 = [null,null,null,null,null,null,null,null];
(statearr_44222[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_44222[(1)] = (1));

return statearr_44222;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_44205){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44205);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44223){var ex__43960__auto__ = e44223;
var statearr_44224_45622 = state_44205;
(statearr_44224_45622[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44205[(4)]))){
var statearr_44225_45623 = state_44205;
(statearr_44225_45623[(1)] = cljs.core.first((state_44205[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45624 = state_44205;
state_44205 = G__45624;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_44205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_44205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44226 = f__44028__auto__();
(statearr_44226[(6)] = c__44027__auto___45607);

return statearr_44226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__44227){
var vec__44228 = p__44227;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44228,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44228,(1),null);
var job = vec__44228;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44027__auto___45625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44235){
var state_val_44236 = (state_44235[(1)]);
if((state_val_44236 === (1))){
var state_44235__$1 = state_44235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44235__$1,(2),res,v);
} else {
if((state_val_44236 === (2))){
var inst_44232 = (state_44235[(2)]);
var inst_44233 = cljs.core.async.close_BANG_(res);
var state_44235__$1 = (function (){var statearr_44237 = state_44235;
(statearr_44237[(7)] = inst_44232);

return statearr_44237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44235__$1,inst_44233);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0 = (function (){
var statearr_44238 = [null,null,null,null,null,null,null,null];
(statearr_44238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__);

(statearr_44238[(1)] = (1));

return statearr_44238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1 = (function (state_44235){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44235);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44239){var ex__43960__auto__ = e44239;
var statearr_44240_45626 = state_44235;
(statearr_44240_45626[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44235[(4)]))){
var statearr_44241_45627 = state_44235;
(statearr_44241_45627[(1)] = cljs.core.first((state_44235[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45628 = state_44235;
state_44235 = G__45628;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = function(state_44235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1.call(this,state_44235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44242 = f__44028__auto__();
(statearr_44242[(6)] = c__44027__auto___45625);

return statearr_44242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44243){
var vec__44244 = p__44243;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44244,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44244,(1),null);
var job = vec__44244;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___45629 = n;
var __45630 = (0);
while(true){
if((__45630 < n__5633__auto___45629)){
var G__44247_45631 = type;
var G__44247_45632__$1 = (((G__44247_45631 instanceof cljs.core.Keyword))?G__44247_45631.fqn:null);
switch (G__44247_45632__$1) {
case "compute":
var c__44027__auto___45634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45630,c__44027__auto___45634,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async){
return (function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = ((function (__45630,c__44027__auto___45634,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async){
return (function (state_44260){
var state_val_44261 = (state_44260[(1)]);
if((state_val_44261 === (1))){
var state_44260__$1 = state_44260;
var statearr_44262_45635 = state_44260__$1;
(statearr_44262_45635[(2)] = null);

(statearr_44262_45635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (2))){
var state_44260__$1 = state_44260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44260__$1,(4),jobs);
} else {
if((state_val_44261 === (3))){
var inst_44258 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44260__$1,inst_44258);
} else {
if((state_val_44261 === (4))){
var inst_44250 = (state_44260[(2)]);
var inst_44251 = process__$1(inst_44250);
var state_44260__$1 = state_44260;
if(cljs.core.truth_(inst_44251)){
var statearr_44263_45636 = state_44260__$1;
(statearr_44263_45636[(1)] = (5));

} else {
var statearr_44264_45637 = state_44260__$1;
(statearr_44264_45637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (5))){
var state_44260__$1 = state_44260;
var statearr_44265_45638 = state_44260__$1;
(statearr_44265_45638[(2)] = null);

(statearr_44265_45638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (6))){
var state_44260__$1 = state_44260;
var statearr_44266_45639 = state_44260__$1;
(statearr_44266_45639[(2)] = null);

(statearr_44266_45639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (7))){
var inst_44256 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
var statearr_44267_45640 = state_44260__$1;
(statearr_44267_45640[(2)] = inst_44256);

(statearr_44267_45640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45630,c__44027__auto___45634,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async))
;
return ((function (__45630,switch__43956__auto__,c__44027__auto___45634,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0 = (function (){
var statearr_44268 = [null,null,null,null,null,null,null];
(statearr_44268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__);

(statearr_44268[(1)] = (1));

return statearr_44268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1 = (function (state_44260){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44260);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44269){var ex__43960__auto__ = e44269;
var statearr_44270_45643 = state_44260;
(statearr_44270_45643[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44260[(4)]))){
var statearr_44271_45644 = state_44260;
(statearr_44271_45644[(1)] = cljs.core.first((state_44260[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45645 = state_44260;
state_44260 = G__45645;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = function(state_44260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1.call(this,state_44260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__;
})()
;})(__45630,switch__43956__auto__,c__44027__auto___45634,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async))
})();
var state__44029__auto__ = (function (){var statearr_44272 = f__44028__auto__();
(statearr_44272[(6)] = c__44027__auto___45634);

return statearr_44272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
});})(__45630,c__44027__auto___45634,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async))
);


break;
case "async":
var c__44027__auto___45646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45630,c__44027__auto___45646,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async){
return (function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = ((function (__45630,c__44027__auto___45646,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async){
return (function (state_44285){
var state_val_44286 = (state_44285[(1)]);
if((state_val_44286 === (1))){
var state_44285__$1 = state_44285;
var statearr_44287_45647 = state_44285__$1;
(statearr_44287_45647[(2)] = null);

(statearr_44287_45647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44286 === (2))){
var state_44285__$1 = state_44285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44285__$1,(4),jobs);
} else {
if((state_val_44286 === (3))){
var inst_44283 = (state_44285[(2)]);
var state_44285__$1 = state_44285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44285__$1,inst_44283);
} else {
if((state_val_44286 === (4))){
var inst_44275 = (state_44285[(2)]);
var inst_44276 = async(inst_44275);
var state_44285__$1 = state_44285;
if(cljs.core.truth_(inst_44276)){
var statearr_44288_45648 = state_44285__$1;
(statearr_44288_45648[(1)] = (5));

} else {
var statearr_44289_45649 = state_44285__$1;
(statearr_44289_45649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44286 === (5))){
var state_44285__$1 = state_44285;
var statearr_44290_45650 = state_44285__$1;
(statearr_44290_45650[(2)] = null);

(statearr_44290_45650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44286 === (6))){
var state_44285__$1 = state_44285;
var statearr_44291_45651 = state_44285__$1;
(statearr_44291_45651[(2)] = null);

(statearr_44291_45651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44286 === (7))){
var inst_44281 = (state_44285[(2)]);
var state_44285__$1 = state_44285;
var statearr_44292_45652 = state_44285__$1;
(statearr_44292_45652[(2)] = inst_44281);

(statearr_44292_45652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45630,c__44027__auto___45646,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async))
;
return ((function (__45630,switch__43956__auto__,c__44027__auto___45646,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0 = (function (){
var statearr_44293 = [null,null,null,null,null,null,null];
(statearr_44293[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__);

(statearr_44293[(1)] = (1));

return statearr_44293;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1 = (function (state_44285){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44285);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44294){var ex__43960__auto__ = e44294;
var statearr_44295_45653 = state_44285;
(statearr_44295_45653[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44285[(4)]))){
var statearr_44296_45654 = state_44285;
(statearr_44296_45654[(1)] = cljs.core.first((state_44285[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45655 = state_44285;
state_44285 = G__45655;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = function(state_44285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1.call(this,state_44285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__;
})()
;})(__45630,switch__43956__auto__,c__44027__auto___45646,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async))
})();
var state__44029__auto__ = (function (){var statearr_44297 = f__44028__auto__();
(statearr_44297[(6)] = c__44027__auto___45646);

return statearr_44297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
});})(__45630,c__44027__auto___45646,G__44247_45631,G__44247_45632__$1,n__5633__auto___45629,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44247_45632__$1)].join('')));

}

var G__45656 = (__45630 + (1));
__45630 = G__45656;
continue;
} else {
}
break;
}

var c__44027__auto___45657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44319){
var state_val_44320 = (state_44319[(1)]);
if((state_val_44320 === (7))){
var inst_44315 = (state_44319[(2)]);
var state_44319__$1 = state_44319;
var statearr_44321_45658 = state_44319__$1;
(statearr_44321_45658[(2)] = inst_44315);

(statearr_44321_45658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44320 === (1))){
var state_44319__$1 = state_44319;
var statearr_44322_45659 = state_44319__$1;
(statearr_44322_45659[(2)] = null);

(statearr_44322_45659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44320 === (4))){
var inst_44300 = (state_44319[(7)]);
var inst_44300__$1 = (state_44319[(2)]);
var inst_44301 = (inst_44300__$1 == null);
var state_44319__$1 = (function (){var statearr_44323 = state_44319;
(statearr_44323[(7)] = inst_44300__$1);

return statearr_44323;
})();
if(cljs.core.truth_(inst_44301)){
var statearr_44324_45660 = state_44319__$1;
(statearr_44324_45660[(1)] = (5));

} else {
var statearr_44325_45661 = state_44319__$1;
(statearr_44325_45661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44320 === (6))){
var inst_44300 = (state_44319[(7)]);
var inst_44305 = (state_44319[(8)]);
var inst_44305__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44307 = [inst_44300,inst_44305__$1];
var inst_44308 = (new cljs.core.PersistentVector(null,2,(5),inst_44306,inst_44307,null));
var state_44319__$1 = (function (){var statearr_44326 = state_44319;
(statearr_44326[(8)] = inst_44305__$1);

return statearr_44326;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44319__$1,(8),jobs,inst_44308);
} else {
if((state_val_44320 === (3))){
var inst_44317 = (state_44319[(2)]);
var state_44319__$1 = state_44319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44319__$1,inst_44317);
} else {
if((state_val_44320 === (2))){
var state_44319__$1 = state_44319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44319__$1,(4),from);
} else {
if((state_val_44320 === (9))){
var inst_44312 = (state_44319[(2)]);
var state_44319__$1 = (function (){var statearr_44327 = state_44319;
(statearr_44327[(9)] = inst_44312);

return statearr_44327;
})();
var statearr_44328_45662 = state_44319__$1;
(statearr_44328_45662[(2)] = null);

(statearr_44328_45662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44320 === (5))){
var inst_44303 = cljs.core.async.close_BANG_(jobs);
var state_44319__$1 = state_44319;
var statearr_44329_45663 = state_44319__$1;
(statearr_44329_45663[(2)] = inst_44303);

(statearr_44329_45663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44320 === (8))){
var inst_44305 = (state_44319[(8)]);
var inst_44310 = (state_44319[(2)]);
var state_44319__$1 = (function (){var statearr_44330 = state_44319;
(statearr_44330[(10)] = inst_44310);

return statearr_44330;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44319__$1,(9),results,inst_44305);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0 = (function (){
var statearr_44331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__);

(statearr_44331[(1)] = (1));

return statearr_44331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1 = (function (state_44319){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44319);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44332){var ex__43960__auto__ = e44332;
var statearr_44333_45664 = state_44319;
(statearr_44333_45664[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44319[(4)]))){
var statearr_44334_45665 = state_44319;
(statearr_44334_45665[(1)] = cljs.core.first((state_44319[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45667 = state_44319;
state_44319 = G__45667;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = function(state_44319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1.call(this,state_44319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44335 = f__44028__auto__();
(statearr_44335[(6)] = c__44027__auto___45657);

return statearr_44335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


var c__44027__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44373){
var state_val_44374 = (state_44373[(1)]);
if((state_val_44374 === (7))){
var inst_44369 = (state_44373[(2)]);
var state_44373__$1 = state_44373;
var statearr_44375_45668 = state_44373__$1;
(statearr_44375_45668[(2)] = inst_44369);

(statearr_44375_45668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (20))){
var state_44373__$1 = state_44373;
var statearr_44376_45669 = state_44373__$1;
(statearr_44376_45669[(2)] = null);

(statearr_44376_45669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (1))){
var state_44373__$1 = state_44373;
var statearr_44377_45670 = state_44373__$1;
(statearr_44377_45670[(2)] = null);

(statearr_44377_45670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (4))){
var inst_44338 = (state_44373[(7)]);
var inst_44338__$1 = (state_44373[(2)]);
var inst_44339 = (inst_44338__$1 == null);
var state_44373__$1 = (function (){var statearr_44378 = state_44373;
(statearr_44378[(7)] = inst_44338__$1);

return statearr_44378;
})();
if(cljs.core.truth_(inst_44339)){
var statearr_44379_45671 = state_44373__$1;
(statearr_44379_45671[(1)] = (5));

} else {
var statearr_44380_45672 = state_44373__$1;
(statearr_44380_45672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (15))){
var inst_44351 = (state_44373[(8)]);
var state_44373__$1 = state_44373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44373__$1,(18),to,inst_44351);
} else {
if((state_val_44374 === (21))){
var inst_44364 = (state_44373[(2)]);
var state_44373__$1 = state_44373;
var statearr_44381_45673 = state_44373__$1;
(statearr_44381_45673[(2)] = inst_44364);

(statearr_44381_45673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (13))){
var inst_44366 = (state_44373[(2)]);
var state_44373__$1 = (function (){var statearr_44382 = state_44373;
(statearr_44382[(9)] = inst_44366);

return statearr_44382;
})();
var statearr_44383_45674 = state_44373__$1;
(statearr_44383_45674[(2)] = null);

(statearr_44383_45674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (6))){
var inst_44338 = (state_44373[(7)]);
var state_44373__$1 = state_44373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44373__$1,(11),inst_44338);
} else {
if((state_val_44374 === (17))){
var inst_44359 = (state_44373[(2)]);
var state_44373__$1 = state_44373;
if(cljs.core.truth_(inst_44359)){
var statearr_44384_45676 = state_44373__$1;
(statearr_44384_45676[(1)] = (19));

} else {
var statearr_44385_45677 = state_44373__$1;
(statearr_44385_45677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (3))){
var inst_44371 = (state_44373[(2)]);
var state_44373__$1 = state_44373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44373__$1,inst_44371);
} else {
if((state_val_44374 === (12))){
var inst_44348 = (state_44373[(10)]);
var state_44373__$1 = state_44373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44373__$1,(14),inst_44348);
} else {
if((state_val_44374 === (2))){
var state_44373__$1 = state_44373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44373__$1,(4),results);
} else {
if((state_val_44374 === (19))){
var state_44373__$1 = state_44373;
var statearr_44386_45679 = state_44373__$1;
(statearr_44386_45679[(2)] = null);

(statearr_44386_45679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (11))){
var inst_44348 = (state_44373[(2)]);
var state_44373__$1 = (function (){var statearr_44387 = state_44373;
(statearr_44387[(10)] = inst_44348);

return statearr_44387;
})();
var statearr_44388_45680 = state_44373__$1;
(statearr_44388_45680[(2)] = null);

(statearr_44388_45680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (9))){
var state_44373__$1 = state_44373;
var statearr_44389_45681 = state_44373__$1;
(statearr_44389_45681[(2)] = null);

(statearr_44389_45681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (5))){
var state_44373__$1 = state_44373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44390_45682 = state_44373__$1;
(statearr_44390_45682[(1)] = (8));

} else {
var statearr_44391_45683 = state_44373__$1;
(statearr_44391_45683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (14))){
var inst_44351 = (state_44373[(8)]);
var inst_44353 = (state_44373[(11)]);
var inst_44351__$1 = (state_44373[(2)]);
var inst_44352 = (inst_44351__$1 == null);
var inst_44353__$1 = cljs.core.not(inst_44352);
var state_44373__$1 = (function (){var statearr_44392 = state_44373;
(statearr_44392[(8)] = inst_44351__$1);

(statearr_44392[(11)] = inst_44353__$1);

return statearr_44392;
})();
if(inst_44353__$1){
var statearr_44393_45684 = state_44373__$1;
(statearr_44393_45684[(1)] = (15));

} else {
var statearr_44394_45685 = state_44373__$1;
(statearr_44394_45685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (16))){
var inst_44353 = (state_44373[(11)]);
var state_44373__$1 = state_44373;
var statearr_44395_45686 = state_44373__$1;
(statearr_44395_45686[(2)] = inst_44353);

(statearr_44395_45686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (10))){
var inst_44345 = (state_44373[(2)]);
var state_44373__$1 = state_44373;
var statearr_44396_45687 = state_44373__$1;
(statearr_44396_45687[(2)] = inst_44345);

(statearr_44396_45687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (18))){
var inst_44356 = (state_44373[(2)]);
var state_44373__$1 = state_44373;
var statearr_44397_45689 = state_44373__$1;
(statearr_44397_45689[(2)] = inst_44356);

(statearr_44397_45689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44374 === (8))){
var inst_44342 = cljs.core.async.close_BANG_(to);
var state_44373__$1 = state_44373;
var statearr_44398_45691 = state_44373__$1;
(statearr_44398_45691[(2)] = inst_44342);

(statearr_44398_45691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0 = (function (){
var statearr_44399 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__);

(statearr_44399[(1)] = (1));

return statearr_44399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1 = (function (state_44373){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44373);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44400){var ex__43960__auto__ = e44400;
var statearr_44401_45692 = state_44373;
(statearr_44401_45692[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44373[(4)]))){
var statearr_44402_45693 = state_44373;
(statearr_44402_45693[(1)] = cljs.core.first((state_44373[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45694 = state_44373;
state_44373 = G__45694;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__ = function(state_44373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1.call(this,state_44373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44403 = f__44028__auto__();
(statearr_44403[(6)] = c__44027__auto__);

return statearr_44403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));

return c__44027__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44405 = arguments.length;
switch (G__44405) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44407 = arguments.length;
switch (G__44407) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44409 = arguments.length;
switch (G__44409) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44027__auto___45702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44435){
var state_val_44436 = (state_44435[(1)]);
if((state_val_44436 === (7))){
var inst_44431 = (state_44435[(2)]);
var state_44435__$1 = state_44435;
var statearr_44437_45703 = state_44435__$1;
(statearr_44437_45703[(2)] = inst_44431);

(statearr_44437_45703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (1))){
var state_44435__$1 = state_44435;
var statearr_44438_45704 = state_44435__$1;
(statearr_44438_45704[(2)] = null);

(statearr_44438_45704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (4))){
var inst_44412 = (state_44435[(7)]);
var inst_44412__$1 = (state_44435[(2)]);
var inst_44413 = (inst_44412__$1 == null);
var state_44435__$1 = (function (){var statearr_44439 = state_44435;
(statearr_44439[(7)] = inst_44412__$1);

return statearr_44439;
})();
if(cljs.core.truth_(inst_44413)){
var statearr_44440_45705 = state_44435__$1;
(statearr_44440_45705[(1)] = (5));

} else {
var statearr_44441_45706 = state_44435__$1;
(statearr_44441_45706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (13))){
var state_44435__$1 = state_44435;
var statearr_44442_45707 = state_44435__$1;
(statearr_44442_45707[(2)] = null);

(statearr_44442_45707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (6))){
var inst_44412 = (state_44435[(7)]);
var inst_44418 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44412) : p.call(null,inst_44412));
var state_44435__$1 = state_44435;
if(cljs.core.truth_(inst_44418)){
var statearr_44443_45708 = state_44435__$1;
(statearr_44443_45708[(1)] = (9));

} else {
var statearr_44444_45709 = state_44435__$1;
(statearr_44444_45709[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (3))){
var inst_44433 = (state_44435[(2)]);
var state_44435__$1 = state_44435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44435__$1,inst_44433);
} else {
if((state_val_44436 === (12))){
var state_44435__$1 = state_44435;
var statearr_44445_45710 = state_44435__$1;
(statearr_44445_45710[(2)] = null);

(statearr_44445_45710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (2))){
var state_44435__$1 = state_44435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44435__$1,(4),ch);
} else {
if((state_val_44436 === (11))){
var inst_44412 = (state_44435[(7)]);
var inst_44422 = (state_44435[(2)]);
var state_44435__$1 = state_44435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44435__$1,(8),inst_44422,inst_44412);
} else {
if((state_val_44436 === (9))){
var state_44435__$1 = state_44435;
var statearr_44446_45711 = state_44435__$1;
(statearr_44446_45711[(2)] = tc);

(statearr_44446_45711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (5))){
var inst_44415 = cljs.core.async.close_BANG_(tc);
var inst_44416 = cljs.core.async.close_BANG_(fc);
var state_44435__$1 = (function (){var statearr_44447 = state_44435;
(statearr_44447[(8)] = inst_44415);

return statearr_44447;
})();
var statearr_44448_45713 = state_44435__$1;
(statearr_44448_45713[(2)] = inst_44416);

(statearr_44448_45713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (14))){
var inst_44429 = (state_44435[(2)]);
var state_44435__$1 = state_44435;
var statearr_44449_45715 = state_44435__$1;
(statearr_44449_45715[(2)] = inst_44429);

(statearr_44449_45715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (10))){
var state_44435__$1 = state_44435;
var statearr_44450_45716 = state_44435__$1;
(statearr_44450_45716[(2)] = fc);

(statearr_44450_45716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (8))){
var inst_44424 = (state_44435[(2)]);
var state_44435__$1 = state_44435;
if(cljs.core.truth_(inst_44424)){
var statearr_44451_45717 = state_44435__$1;
(statearr_44451_45717[(1)] = (12));

} else {
var statearr_44452_45718 = state_44435__$1;
(statearr_44452_45718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_44453 = [null,null,null,null,null,null,null,null,null];
(statearr_44453[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_44453[(1)] = (1));

return statearr_44453;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_44435){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44435);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44454){var ex__43960__auto__ = e44454;
var statearr_44455_45719 = state_44435;
(statearr_44455_45719[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44435[(4)]))){
var statearr_44456_45720 = state_44435;
(statearr_44456_45720[(1)] = cljs.core.first((state_44435[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45721 = state_44435;
state_44435 = G__45721;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_44435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_44435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44457 = f__44028__auto__();
(statearr_44457[(6)] = c__44027__auto___45702);

return statearr_44457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44027__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44479){
var state_val_44480 = (state_44479[(1)]);
if((state_val_44480 === (7))){
var inst_44475 = (state_44479[(2)]);
var state_44479__$1 = state_44479;
var statearr_44481_45722 = state_44479__$1;
(statearr_44481_45722[(2)] = inst_44475);

(statearr_44481_45722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (1))){
var inst_44458 = init;
var inst_44459 = inst_44458;
var state_44479__$1 = (function (){var statearr_44482 = state_44479;
(statearr_44482[(7)] = inst_44459);

return statearr_44482;
})();
var statearr_44483_45723 = state_44479__$1;
(statearr_44483_45723[(2)] = null);

(statearr_44483_45723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (4))){
var inst_44462 = (state_44479[(8)]);
var inst_44462__$1 = (state_44479[(2)]);
var inst_44463 = (inst_44462__$1 == null);
var state_44479__$1 = (function (){var statearr_44484 = state_44479;
(statearr_44484[(8)] = inst_44462__$1);

return statearr_44484;
})();
if(cljs.core.truth_(inst_44463)){
var statearr_44485_45725 = state_44479__$1;
(statearr_44485_45725[(1)] = (5));

} else {
var statearr_44486_45727 = state_44479__$1;
(statearr_44486_45727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (6))){
var inst_44459 = (state_44479[(7)]);
var inst_44466 = (state_44479[(9)]);
var inst_44462 = (state_44479[(8)]);
var inst_44466__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44459,inst_44462) : f.call(null,inst_44459,inst_44462));
var inst_44467 = cljs.core.reduced_QMARK_(inst_44466__$1);
var state_44479__$1 = (function (){var statearr_44487 = state_44479;
(statearr_44487[(9)] = inst_44466__$1);

return statearr_44487;
})();
if(inst_44467){
var statearr_44488_45728 = state_44479__$1;
(statearr_44488_45728[(1)] = (8));

} else {
var statearr_44489_45729 = state_44479__$1;
(statearr_44489_45729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (3))){
var inst_44477 = (state_44479[(2)]);
var state_44479__$1 = state_44479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44479__$1,inst_44477);
} else {
if((state_val_44480 === (2))){
var state_44479__$1 = state_44479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44479__$1,(4),ch);
} else {
if((state_val_44480 === (9))){
var inst_44466 = (state_44479[(9)]);
var inst_44459 = inst_44466;
var state_44479__$1 = (function (){var statearr_44490 = state_44479;
(statearr_44490[(7)] = inst_44459);

return statearr_44490;
})();
var statearr_44491_45730 = state_44479__$1;
(statearr_44491_45730[(2)] = null);

(statearr_44491_45730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (5))){
var inst_44459 = (state_44479[(7)]);
var state_44479__$1 = state_44479;
var statearr_44492_45731 = state_44479__$1;
(statearr_44492_45731[(2)] = inst_44459);

(statearr_44492_45731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (10))){
var inst_44473 = (state_44479[(2)]);
var state_44479__$1 = state_44479;
var statearr_44493_45732 = state_44479__$1;
(statearr_44493_45732[(2)] = inst_44473);

(statearr_44493_45732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (8))){
var inst_44466 = (state_44479[(9)]);
var inst_44469 = cljs.core.deref(inst_44466);
var state_44479__$1 = state_44479;
var statearr_44494_45733 = state_44479__$1;
(statearr_44494_45733[(2)] = inst_44469);

(statearr_44494_45733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43957__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43957__auto____0 = (function (){
var statearr_44495 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44495[(0)] = cljs$core$async$reduce_$_state_machine__43957__auto__);

(statearr_44495[(1)] = (1));

return statearr_44495;
});
var cljs$core$async$reduce_$_state_machine__43957__auto____1 = (function (state_44479){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44479);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44496){var ex__43960__auto__ = e44496;
var statearr_44497_45734 = state_44479;
(statearr_44497_45734[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44479[(4)]))){
var statearr_44498_45735 = state_44479;
(statearr_44498_45735[(1)] = cljs.core.first((state_44479[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45736 = state_44479;
state_44479 = G__45736;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43957__auto__ = function(state_44479){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43957__auto____1.call(this,state_44479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43957__auto____0;
cljs$core$async$reduce_$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43957__auto____1;
return cljs$core$async$reduce_$_state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44499 = f__44028__auto__();
(statearr_44499[(6)] = c__44027__auto__);

return statearr_44499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));

return c__44027__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44027__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44505){
var state_val_44506 = (state_44505[(1)]);
if((state_val_44506 === (1))){
var inst_44500 = cljs.core.async.reduce(f__$1,init,ch);
var state_44505__$1 = state_44505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44505__$1,(2),inst_44500);
} else {
if((state_val_44506 === (2))){
var inst_44502 = (state_44505[(2)]);
var inst_44503 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44502) : f__$1.call(null,inst_44502));
var state_44505__$1 = state_44505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44505__$1,inst_44503);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43957__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43957__auto____0 = (function (){
var statearr_44507 = [null,null,null,null,null,null,null];
(statearr_44507[(0)] = cljs$core$async$transduce_$_state_machine__43957__auto__);

(statearr_44507[(1)] = (1));

return statearr_44507;
});
var cljs$core$async$transduce_$_state_machine__43957__auto____1 = (function (state_44505){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44505);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44508){var ex__43960__auto__ = e44508;
var statearr_44509_45738 = state_44505;
(statearr_44509_45738[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44505[(4)]))){
var statearr_44510_45739 = state_44505;
(statearr_44510_45739[(1)] = cljs.core.first((state_44505[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45744 = state_44505;
state_44505 = G__45744;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43957__auto__ = function(state_44505){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43957__auto____1.call(this,state_44505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43957__auto____0;
cljs$core$async$transduce_$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43957__auto____1;
return cljs$core$async$transduce_$_state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44511 = f__44028__auto__();
(statearr_44511[(6)] = c__44027__auto__);

return statearr_44511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));

return c__44027__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44513 = arguments.length;
switch (G__44513) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44027__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44538){
var state_val_44539 = (state_44538[(1)]);
if((state_val_44539 === (7))){
var inst_44520 = (state_44538[(2)]);
var state_44538__$1 = state_44538;
var statearr_44540_45746 = state_44538__$1;
(statearr_44540_45746[(2)] = inst_44520);

(statearr_44540_45746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (1))){
var inst_44514 = cljs.core.seq(coll);
var inst_44515 = inst_44514;
var state_44538__$1 = (function (){var statearr_44541 = state_44538;
(statearr_44541[(7)] = inst_44515);

return statearr_44541;
})();
var statearr_44542_45747 = state_44538__$1;
(statearr_44542_45747[(2)] = null);

(statearr_44542_45747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (4))){
var inst_44515 = (state_44538[(7)]);
var inst_44518 = cljs.core.first(inst_44515);
var state_44538__$1 = state_44538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44538__$1,(7),ch,inst_44518);
} else {
if((state_val_44539 === (13))){
var inst_44532 = (state_44538[(2)]);
var state_44538__$1 = state_44538;
var statearr_44543_45748 = state_44538__$1;
(statearr_44543_45748[(2)] = inst_44532);

(statearr_44543_45748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (6))){
var inst_44523 = (state_44538[(2)]);
var state_44538__$1 = state_44538;
if(cljs.core.truth_(inst_44523)){
var statearr_44544_45749 = state_44538__$1;
(statearr_44544_45749[(1)] = (8));

} else {
var statearr_44545_45750 = state_44538__$1;
(statearr_44545_45750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (3))){
var inst_44536 = (state_44538[(2)]);
var state_44538__$1 = state_44538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44538__$1,inst_44536);
} else {
if((state_val_44539 === (12))){
var state_44538__$1 = state_44538;
var statearr_44546_45751 = state_44538__$1;
(statearr_44546_45751[(2)] = null);

(statearr_44546_45751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (2))){
var inst_44515 = (state_44538[(7)]);
var state_44538__$1 = state_44538;
if(cljs.core.truth_(inst_44515)){
var statearr_44547_45752 = state_44538__$1;
(statearr_44547_45752[(1)] = (4));

} else {
var statearr_44548_45753 = state_44538__$1;
(statearr_44548_45753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (11))){
var inst_44529 = cljs.core.async.close_BANG_(ch);
var state_44538__$1 = state_44538;
var statearr_44549_45754 = state_44538__$1;
(statearr_44549_45754[(2)] = inst_44529);

(statearr_44549_45754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (9))){
var state_44538__$1 = state_44538;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44550_45755 = state_44538__$1;
(statearr_44550_45755[(1)] = (11));

} else {
var statearr_44551_45756 = state_44538__$1;
(statearr_44551_45756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (5))){
var inst_44515 = (state_44538[(7)]);
var state_44538__$1 = state_44538;
var statearr_44552_45757 = state_44538__$1;
(statearr_44552_45757[(2)] = inst_44515);

(statearr_44552_45757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (10))){
var inst_44534 = (state_44538[(2)]);
var state_44538__$1 = state_44538;
var statearr_44553_45758 = state_44538__$1;
(statearr_44553_45758[(2)] = inst_44534);

(statearr_44553_45758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44539 === (8))){
var inst_44515 = (state_44538[(7)]);
var inst_44525 = cljs.core.next(inst_44515);
var inst_44515__$1 = inst_44525;
var state_44538__$1 = (function (){var statearr_44554 = state_44538;
(statearr_44554[(7)] = inst_44515__$1);

return statearr_44554;
})();
var statearr_44555_45759 = state_44538__$1;
(statearr_44555_45759[(2)] = null);

(statearr_44555_45759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_44556 = [null,null,null,null,null,null,null,null];
(statearr_44556[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_44556[(1)] = (1));

return statearr_44556;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_44538){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44538);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44557){var ex__43960__auto__ = e44557;
var statearr_44558_45760 = state_44538;
(statearr_44558_45760[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44538[(4)]))){
var statearr_44559_45761 = state_44538;
(statearr_44559_45761[(1)] = cljs.core.first((state_44538[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45762 = state_44538;
state_44538 = G__45762;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_44538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_44538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44560 = f__44028__auto__();
(statearr_44560[(6)] = c__44027__auto__);

return statearr_44560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));

return c__44027__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44562 = arguments.length;
switch (G__44562) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45764 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45764(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45766 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45766(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45767 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45767(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45769 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45769(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44563 = (function (ch,cs,meta44564){
this.ch = ch;
this.cs = cs;
this.meta44564 = meta44564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44565,meta44564__$1){
var self__ = this;
var _44565__$1 = this;
return (new cljs.core.async.t_cljs$core$async44563(self__.ch,self__.cs,meta44564__$1));
}));

(cljs.core.async.t_cljs$core$async44563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44565){
var self__ = this;
var _44565__$1 = this;
return self__.meta44564;
}));

(cljs.core.async.t_cljs$core$async44563.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44563.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44563.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44563.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44563.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44564","meta44564",1829501504,null)], null);
}));

(cljs.core.async.t_cljs$core$async44563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44563");

(cljs.core.async.t_cljs$core$async44563.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44563.
 */
cljs.core.async.__GT_t_cljs$core$async44563 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44563(ch__$1,cs__$1,meta44564){
return (new cljs.core.async.t_cljs$core$async44563(ch__$1,cs__$1,meta44564));
});

}

return (new cljs.core.async.t_cljs$core$async44563(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44027__auto___45777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44698){
var state_val_44699 = (state_44698[(1)]);
if((state_val_44699 === (7))){
var inst_44694 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
var statearr_44700_45778 = state_44698__$1;
(statearr_44700_45778[(2)] = inst_44694);

(statearr_44700_45778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (20))){
var inst_44599 = (state_44698[(7)]);
var inst_44611 = cljs.core.first(inst_44599);
var inst_44612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44611,(0),null);
var inst_44613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44611,(1),null);
var state_44698__$1 = (function (){var statearr_44701 = state_44698;
(statearr_44701[(8)] = inst_44612);

return statearr_44701;
})();
if(cljs.core.truth_(inst_44613)){
var statearr_44702_45779 = state_44698__$1;
(statearr_44702_45779[(1)] = (22));

} else {
var statearr_44703_45780 = state_44698__$1;
(statearr_44703_45780[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (27))){
var inst_44568 = (state_44698[(9)]);
var inst_44648 = (state_44698[(10)]);
var inst_44641 = (state_44698[(11)]);
var inst_44643 = (state_44698[(12)]);
var inst_44648__$1 = cljs.core._nth(inst_44641,inst_44643);
var inst_44649 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44648__$1,inst_44568,done);
var state_44698__$1 = (function (){var statearr_44704 = state_44698;
(statearr_44704[(10)] = inst_44648__$1);

return statearr_44704;
})();
if(cljs.core.truth_(inst_44649)){
var statearr_44705_45784 = state_44698__$1;
(statearr_44705_45784[(1)] = (30));

} else {
var statearr_44706_45785 = state_44698__$1;
(statearr_44706_45785[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (1))){
var state_44698__$1 = state_44698;
var statearr_44707_45786 = state_44698__$1;
(statearr_44707_45786[(2)] = null);

(statearr_44707_45786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (24))){
var inst_44599 = (state_44698[(7)]);
var inst_44618 = (state_44698[(2)]);
var inst_44619 = cljs.core.next(inst_44599);
var inst_44577 = inst_44619;
var inst_44578 = null;
var inst_44579 = (0);
var inst_44580 = (0);
var state_44698__$1 = (function (){var statearr_44708 = state_44698;
(statearr_44708[(13)] = inst_44577);

(statearr_44708[(14)] = inst_44580);

(statearr_44708[(15)] = inst_44618);

(statearr_44708[(16)] = inst_44578);

(statearr_44708[(17)] = inst_44579);

return statearr_44708;
})();
var statearr_44709_45790 = state_44698__$1;
(statearr_44709_45790[(2)] = null);

(statearr_44709_45790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (39))){
var state_44698__$1 = state_44698;
var statearr_44713_45791 = state_44698__$1;
(statearr_44713_45791[(2)] = null);

(statearr_44713_45791[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (4))){
var inst_44568 = (state_44698[(9)]);
var inst_44568__$1 = (state_44698[(2)]);
var inst_44569 = (inst_44568__$1 == null);
var state_44698__$1 = (function (){var statearr_44714 = state_44698;
(statearr_44714[(9)] = inst_44568__$1);

return statearr_44714;
})();
if(cljs.core.truth_(inst_44569)){
var statearr_44715_45792 = state_44698__$1;
(statearr_44715_45792[(1)] = (5));

} else {
var statearr_44716_45793 = state_44698__$1;
(statearr_44716_45793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (15))){
var inst_44577 = (state_44698[(13)]);
var inst_44580 = (state_44698[(14)]);
var inst_44578 = (state_44698[(16)]);
var inst_44579 = (state_44698[(17)]);
var inst_44595 = (state_44698[(2)]);
var inst_44596 = (inst_44580 + (1));
var tmp44710 = inst_44577;
var tmp44711 = inst_44578;
var tmp44712 = inst_44579;
var inst_44577__$1 = tmp44710;
var inst_44578__$1 = tmp44711;
var inst_44579__$1 = tmp44712;
var inst_44580__$1 = inst_44596;
var state_44698__$1 = (function (){var statearr_44717 = state_44698;
(statearr_44717[(13)] = inst_44577__$1);

(statearr_44717[(14)] = inst_44580__$1);

(statearr_44717[(16)] = inst_44578__$1);

(statearr_44717[(17)] = inst_44579__$1);

(statearr_44717[(18)] = inst_44595);

return statearr_44717;
})();
var statearr_44718_45794 = state_44698__$1;
(statearr_44718_45794[(2)] = null);

(statearr_44718_45794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (21))){
var inst_44622 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
var statearr_44722_45795 = state_44698__$1;
(statearr_44722_45795[(2)] = inst_44622);

(statearr_44722_45795[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (31))){
var inst_44648 = (state_44698[(10)]);
var inst_44652 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44648);
var state_44698__$1 = state_44698;
var statearr_44723_45799 = state_44698__$1;
(statearr_44723_45799[(2)] = inst_44652);

(statearr_44723_45799[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (32))){
var inst_44642 = (state_44698[(19)]);
var inst_44641 = (state_44698[(11)]);
var inst_44640 = (state_44698[(20)]);
var inst_44643 = (state_44698[(12)]);
var inst_44654 = (state_44698[(2)]);
var inst_44655 = (inst_44643 + (1));
var tmp44719 = inst_44642;
var tmp44720 = inst_44641;
var tmp44721 = inst_44640;
var inst_44640__$1 = tmp44721;
var inst_44641__$1 = tmp44720;
var inst_44642__$1 = tmp44719;
var inst_44643__$1 = inst_44655;
var state_44698__$1 = (function (){var statearr_44724 = state_44698;
(statearr_44724[(19)] = inst_44642__$1);

(statearr_44724[(11)] = inst_44641__$1);

(statearr_44724[(20)] = inst_44640__$1);

(statearr_44724[(12)] = inst_44643__$1);

(statearr_44724[(21)] = inst_44654);

return statearr_44724;
})();
var statearr_44725_45800 = state_44698__$1;
(statearr_44725_45800[(2)] = null);

(statearr_44725_45800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (40))){
var inst_44667 = (state_44698[(22)]);
var inst_44671 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44667);
var state_44698__$1 = state_44698;
var statearr_44726_45801 = state_44698__$1;
(statearr_44726_45801[(2)] = inst_44671);

(statearr_44726_45801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (33))){
var inst_44658 = (state_44698[(23)]);
var inst_44660 = cljs.core.chunked_seq_QMARK_(inst_44658);
var state_44698__$1 = state_44698;
if(inst_44660){
var statearr_44727_45803 = state_44698__$1;
(statearr_44727_45803[(1)] = (36));

} else {
var statearr_44728_45807 = state_44698__$1;
(statearr_44728_45807[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (13))){
var inst_44589 = (state_44698[(24)]);
var inst_44592 = cljs.core.async.close_BANG_(inst_44589);
var state_44698__$1 = state_44698;
var statearr_44729_45808 = state_44698__$1;
(statearr_44729_45808[(2)] = inst_44592);

(statearr_44729_45808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (22))){
var inst_44612 = (state_44698[(8)]);
var inst_44615 = cljs.core.async.close_BANG_(inst_44612);
var state_44698__$1 = state_44698;
var statearr_44730_45812 = state_44698__$1;
(statearr_44730_45812[(2)] = inst_44615);

(statearr_44730_45812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (36))){
var inst_44658 = (state_44698[(23)]);
var inst_44662 = cljs.core.chunk_first(inst_44658);
var inst_44663 = cljs.core.chunk_rest(inst_44658);
var inst_44664 = cljs.core.count(inst_44662);
var inst_44640 = inst_44663;
var inst_44641 = inst_44662;
var inst_44642 = inst_44664;
var inst_44643 = (0);
var state_44698__$1 = (function (){var statearr_44731 = state_44698;
(statearr_44731[(19)] = inst_44642);

(statearr_44731[(11)] = inst_44641);

(statearr_44731[(20)] = inst_44640);

(statearr_44731[(12)] = inst_44643);

return statearr_44731;
})();
var statearr_44732_45813 = state_44698__$1;
(statearr_44732_45813[(2)] = null);

(statearr_44732_45813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (41))){
var inst_44658 = (state_44698[(23)]);
var inst_44673 = (state_44698[(2)]);
var inst_44674 = cljs.core.next(inst_44658);
var inst_44640 = inst_44674;
var inst_44641 = null;
var inst_44642 = (0);
var inst_44643 = (0);
var state_44698__$1 = (function (){var statearr_44733 = state_44698;
(statearr_44733[(19)] = inst_44642);

(statearr_44733[(25)] = inst_44673);

(statearr_44733[(11)] = inst_44641);

(statearr_44733[(20)] = inst_44640);

(statearr_44733[(12)] = inst_44643);

return statearr_44733;
})();
var statearr_44734_45814 = state_44698__$1;
(statearr_44734_45814[(2)] = null);

(statearr_44734_45814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (43))){
var state_44698__$1 = state_44698;
var statearr_44735_45818 = state_44698__$1;
(statearr_44735_45818[(2)] = null);

(statearr_44735_45818[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (29))){
var inst_44682 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
var statearr_44736_45819 = state_44698__$1;
(statearr_44736_45819[(2)] = inst_44682);

(statearr_44736_45819[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (44))){
var inst_44691 = (state_44698[(2)]);
var state_44698__$1 = (function (){var statearr_44737 = state_44698;
(statearr_44737[(26)] = inst_44691);

return statearr_44737;
})();
var statearr_44738_45820 = state_44698__$1;
(statearr_44738_45820[(2)] = null);

(statearr_44738_45820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (6))){
var inst_44632 = (state_44698[(27)]);
var inst_44631 = cljs.core.deref(cs);
var inst_44632__$1 = cljs.core.keys(inst_44631);
var inst_44633 = cljs.core.count(inst_44632__$1);
var inst_44634 = cljs.core.reset_BANG_(dctr,inst_44633);
var inst_44639 = cljs.core.seq(inst_44632__$1);
var inst_44640 = inst_44639;
var inst_44641 = null;
var inst_44642 = (0);
var inst_44643 = (0);
var state_44698__$1 = (function (){var statearr_44739 = state_44698;
(statearr_44739[(19)] = inst_44642);

(statearr_44739[(28)] = inst_44634);

(statearr_44739[(11)] = inst_44641);

(statearr_44739[(20)] = inst_44640);

(statearr_44739[(12)] = inst_44643);

(statearr_44739[(27)] = inst_44632__$1);

return statearr_44739;
})();
var statearr_44740_45824 = state_44698__$1;
(statearr_44740_45824[(2)] = null);

(statearr_44740_45824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (28))){
var inst_44658 = (state_44698[(23)]);
var inst_44640 = (state_44698[(20)]);
var inst_44658__$1 = cljs.core.seq(inst_44640);
var state_44698__$1 = (function (){var statearr_44741 = state_44698;
(statearr_44741[(23)] = inst_44658__$1);

return statearr_44741;
})();
if(inst_44658__$1){
var statearr_44742_45825 = state_44698__$1;
(statearr_44742_45825[(1)] = (33));

} else {
var statearr_44743_45826 = state_44698__$1;
(statearr_44743_45826[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (25))){
var inst_44642 = (state_44698[(19)]);
var inst_44643 = (state_44698[(12)]);
var inst_44645 = (inst_44643 < inst_44642);
var inst_44646 = inst_44645;
var state_44698__$1 = state_44698;
if(cljs.core.truth_(inst_44646)){
var statearr_44744_45827 = state_44698__$1;
(statearr_44744_45827[(1)] = (27));

} else {
var statearr_44745_45828 = state_44698__$1;
(statearr_44745_45828[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (34))){
var state_44698__$1 = state_44698;
var statearr_44746_45829 = state_44698__$1;
(statearr_44746_45829[(2)] = null);

(statearr_44746_45829[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (17))){
var state_44698__$1 = state_44698;
var statearr_44747_45830 = state_44698__$1;
(statearr_44747_45830[(2)] = null);

(statearr_44747_45830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (3))){
var inst_44696 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44698__$1,inst_44696);
} else {
if((state_val_44699 === (12))){
var inst_44627 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
var statearr_44748_45831 = state_44698__$1;
(statearr_44748_45831[(2)] = inst_44627);

(statearr_44748_45831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (2))){
var state_44698__$1 = state_44698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44698__$1,(4),ch);
} else {
if((state_val_44699 === (23))){
var state_44698__$1 = state_44698;
var statearr_44749_45832 = state_44698__$1;
(statearr_44749_45832[(2)] = null);

(statearr_44749_45832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (35))){
var inst_44680 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
var statearr_44750_45833 = state_44698__$1;
(statearr_44750_45833[(2)] = inst_44680);

(statearr_44750_45833[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (19))){
var inst_44599 = (state_44698[(7)]);
var inst_44603 = cljs.core.chunk_first(inst_44599);
var inst_44604 = cljs.core.chunk_rest(inst_44599);
var inst_44605 = cljs.core.count(inst_44603);
var inst_44577 = inst_44604;
var inst_44578 = inst_44603;
var inst_44579 = inst_44605;
var inst_44580 = (0);
var state_44698__$1 = (function (){var statearr_44751 = state_44698;
(statearr_44751[(13)] = inst_44577);

(statearr_44751[(14)] = inst_44580);

(statearr_44751[(16)] = inst_44578);

(statearr_44751[(17)] = inst_44579);

return statearr_44751;
})();
var statearr_44752_45837 = state_44698__$1;
(statearr_44752_45837[(2)] = null);

(statearr_44752_45837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (11))){
var inst_44599 = (state_44698[(7)]);
var inst_44577 = (state_44698[(13)]);
var inst_44599__$1 = cljs.core.seq(inst_44577);
var state_44698__$1 = (function (){var statearr_44753 = state_44698;
(statearr_44753[(7)] = inst_44599__$1);

return statearr_44753;
})();
if(inst_44599__$1){
var statearr_44754_45838 = state_44698__$1;
(statearr_44754_45838[(1)] = (16));

} else {
var statearr_44755_45839 = state_44698__$1;
(statearr_44755_45839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (9))){
var inst_44629 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
var statearr_44756_45840 = state_44698__$1;
(statearr_44756_45840[(2)] = inst_44629);

(statearr_44756_45840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (5))){
var inst_44575 = cljs.core.deref(cs);
var inst_44576 = cljs.core.seq(inst_44575);
var inst_44577 = inst_44576;
var inst_44578 = null;
var inst_44579 = (0);
var inst_44580 = (0);
var state_44698__$1 = (function (){var statearr_44757 = state_44698;
(statearr_44757[(13)] = inst_44577);

(statearr_44757[(14)] = inst_44580);

(statearr_44757[(16)] = inst_44578);

(statearr_44757[(17)] = inst_44579);

return statearr_44757;
})();
var statearr_44758_45842 = state_44698__$1;
(statearr_44758_45842[(2)] = null);

(statearr_44758_45842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (14))){
var state_44698__$1 = state_44698;
var statearr_44759_45843 = state_44698__$1;
(statearr_44759_45843[(2)] = null);

(statearr_44759_45843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (45))){
var inst_44688 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
var statearr_44760_45844 = state_44698__$1;
(statearr_44760_45844[(2)] = inst_44688);

(statearr_44760_45844[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (26))){
var inst_44632 = (state_44698[(27)]);
var inst_44684 = (state_44698[(2)]);
var inst_44685 = cljs.core.seq(inst_44632);
var state_44698__$1 = (function (){var statearr_44761 = state_44698;
(statearr_44761[(29)] = inst_44684);

return statearr_44761;
})();
if(inst_44685){
var statearr_44762_45845 = state_44698__$1;
(statearr_44762_45845[(1)] = (42));

} else {
var statearr_44763_45846 = state_44698__$1;
(statearr_44763_45846[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (16))){
var inst_44599 = (state_44698[(7)]);
var inst_44601 = cljs.core.chunked_seq_QMARK_(inst_44599);
var state_44698__$1 = state_44698;
if(inst_44601){
var statearr_44764_45847 = state_44698__$1;
(statearr_44764_45847[(1)] = (19));

} else {
var statearr_44765_45848 = state_44698__$1;
(statearr_44765_45848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (38))){
var inst_44677 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
var statearr_44766_45849 = state_44698__$1;
(statearr_44766_45849[(2)] = inst_44677);

(statearr_44766_45849[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (30))){
var state_44698__$1 = state_44698;
var statearr_44767_45850 = state_44698__$1;
(statearr_44767_45850[(2)] = null);

(statearr_44767_45850[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (10))){
var inst_44580 = (state_44698[(14)]);
var inst_44578 = (state_44698[(16)]);
var inst_44588 = cljs.core._nth(inst_44578,inst_44580);
var inst_44589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44588,(0),null);
var inst_44590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44588,(1),null);
var state_44698__$1 = (function (){var statearr_44768 = state_44698;
(statearr_44768[(24)] = inst_44589);

return statearr_44768;
})();
if(cljs.core.truth_(inst_44590)){
var statearr_44769_45851 = state_44698__$1;
(statearr_44769_45851[(1)] = (13));

} else {
var statearr_44770_45852 = state_44698__$1;
(statearr_44770_45852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (18))){
var inst_44625 = (state_44698[(2)]);
var state_44698__$1 = state_44698;
var statearr_44771_45853 = state_44698__$1;
(statearr_44771_45853[(2)] = inst_44625);

(statearr_44771_45853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (42))){
var state_44698__$1 = state_44698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44698__$1,(45),dchan);
} else {
if((state_val_44699 === (37))){
var inst_44568 = (state_44698[(9)]);
var inst_44658 = (state_44698[(23)]);
var inst_44667 = (state_44698[(22)]);
var inst_44667__$1 = cljs.core.first(inst_44658);
var inst_44668 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44667__$1,inst_44568,done);
var state_44698__$1 = (function (){var statearr_44772 = state_44698;
(statearr_44772[(22)] = inst_44667__$1);

return statearr_44772;
})();
if(cljs.core.truth_(inst_44668)){
var statearr_44773_45854 = state_44698__$1;
(statearr_44773_45854[(1)] = (39));

} else {
var statearr_44774_45855 = state_44698__$1;
(statearr_44774_45855[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44699 === (8))){
var inst_44580 = (state_44698[(14)]);
var inst_44579 = (state_44698[(17)]);
var inst_44582 = (inst_44580 < inst_44579);
var inst_44583 = inst_44582;
var state_44698__$1 = state_44698;
if(cljs.core.truth_(inst_44583)){
var statearr_44775_45856 = state_44698__$1;
(statearr_44775_45856[(1)] = (10));

} else {
var statearr_44776_45857 = state_44698__$1;
(statearr_44776_45857[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43957__auto__ = null;
var cljs$core$async$mult_$_state_machine__43957__auto____0 = (function (){
var statearr_44777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44777[(0)] = cljs$core$async$mult_$_state_machine__43957__auto__);

(statearr_44777[(1)] = (1));

return statearr_44777;
});
var cljs$core$async$mult_$_state_machine__43957__auto____1 = (function (state_44698){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44698);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44778){var ex__43960__auto__ = e44778;
var statearr_44779_45858 = state_44698;
(statearr_44779_45858[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44698[(4)]))){
var statearr_44780_45859 = state_44698;
(statearr_44780_45859[(1)] = cljs.core.first((state_44698[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45860 = state_44698;
state_44698 = G__45860;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43957__auto__ = function(state_44698){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43957__auto____1.call(this,state_44698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43957__auto____0;
cljs$core$async$mult_$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43957__auto____1;
return cljs$core$async$mult_$_state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44781 = f__44028__auto__();
(statearr_44781[(6)] = c__44027__auto___45777);

return statearr_44781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44783 = arguments.length;
switch (G__44783) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_45862 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_45862(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45863 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_45863(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45864 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45864(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45870 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_45870(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45872 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45872(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45873 = arguments.length;
var i__5767__auto___45874 = (0);
while(true){
if((i__5767__auto___45874 < len__5766__auto___45873)){
args__5772__auto__.push((arguments[i__5767__auto___45874]));

var G__45875 = (i__5767__auto___45874 + (1));
i__5767__auto___45874 = G__45875;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44788){
var map__44789 = p__44788;
var map__44789__$1 = cljs.core.__destructure_map(map__44789);
var opts = map__44789__$1;
var statearr_44790_45876 = state;
(statearr_44790_45876[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44791_45877 = state;
(statearr_44791_45877[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_44792_45878 = state;
(statearr_44792_45878[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44784){
var G__44785 = cljs.core.first(seq44784);
var seq44784__$1 = cljs.core.next(seq44784);
var G__44786 = cljs.core.first(seq44784__$1);
var seq44784__$2 = cljs.core.next(seq44784__$1);
var G__44787 = cljs.core.first(seq44784__$2);
var seq44784__$3 = cljs.core.next(seq44784__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44785,G__44786,G__44787,seq44784__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44793 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44794){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44794 = meta44794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44795,meta44794__$1){
var self__ = this;
var _44795__$1 = this;
return (new cljs.core.async.t_cljs$core$async44793(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44794__$1));
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44795){
var self__ = this;
var _44795__$1 = this;
return self__.meta44794;
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44794","meta44794",-398853776,null)], null);
}));

(cljs.core.async.t_cljs$core$async44793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44793");

(cljs.core.async.t_cljs$core$async44793.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44793.
 */
cljs.core.async.__GT_t_cljs$core$async44793 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44793(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44794){
return (new cljs.core.async.t_cljs$core$async44793(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44794));
});

}

return (new cljs.core.async.t_cljs$core$async44793(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44027__auto___45885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44863){
var state_val_44864 = (state_44863[(1)]);
if((state_val_44864 === (7))){
var inst_44823 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
if(cljs.core.truth_(inst_44823)){
var statearr_44865_45886 = state_44863__$1;
(statearr_44865_45886[(1)] = (8));

} else {
var statearr_44866_45887 = state_44863__$1;
(statearr_44866_45887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (20))){
var inst_44816 = (state_44863[(7)]);
var state_44863__$1 = state_44863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44863__$1,(23),out,inst_44816);
} else {
if((state_val_44864 === (1))){
var inst_44799 = calc_state();
var inst_44800 = cljs.core.__destructure_map(inst_44799);
var inst_44801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44800,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44800,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44800,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44804 = inst_44799;
var state_44863__$1 = (function (){var statearr_44867 = state_44863;
(statearr_44867[(8)] = inst_44804);

(statearr_44867[(9)] = inst_44802);

(statearr_44867[(10)] = inst_44801);

(statearr_44867[(11)] = inst_44803);

return statearr_44867;
})();
var statearr_44868_45888 = state_44863__$1;
(statearr_44868_45888[(2)] = null);

(statearr_44868_45888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (24))){
var inst_44807 = (state_44863[(12)]);
var inst_44804 = inst_44807;
var state_44863__$1 = (function (){var statearr_44869 = state_44863;
(statearr_44869[(8)] = inst_44804);

return statearr_44869;
})();
var statearr_44870_45889 = state_44863__$1;
(statearr_44870_45889[(2)] = null);

(statearr_44870_45889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (4))){
var inst_44818 = (state_44863[(13)]);
var inst_44816 = (state_44863[(7)]);
var inst_44815 = (state_44863[(2)]);
var inst_44816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44815,(0),null);
var inst_44817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44815,(1),null);
var inst_44818__$1 = (inst_44816__$1 == null);
var state_44863__$1 = (function (){var statearr_44871 = state_44863;
(statearr_44871[(13)] = inst_44818__$1);

(statearr_44871[(7)] = inst_44816__$1);

(statearr_44871[(14)] = inst_44817);

return statearr_44871;
})();
if(cljs.core.truth_(inst_44818__$1)){
var statearr_44872_45890 = state_44863__$1;
(statearr_44872_45890[(1)] = (5));

} else {
var statearr_44873_45891 = state_44863__$1;
(statearr_44873_45891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (15))){
var inst_44808 = (state_44863[(15)]);
var inst_44837 = (state_44863[(16)]);
var inst_44837__$1 = cljs.core.empty_QMARK_(inst_44808);
var state_44863__$1 = (function (){var statearr_44874 = state_44863;
(statearr_44874[(16)] = inst_44837__$1);

return statearr_44874;
})();
if(inst_44837__$1){
var statearr_44875_45892 = state_44863__$1;
(statearr_44875_45892[(1)] = (17));

} else {
var statearr_44876_45893 = state_44863__$1;
(statearr_44876_45893[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (21))){
var inst_44807 = (state_44863[(12)]);
var inst_44804 = inst_44807;
var state_44863__$1 = (function (){var statearr_44877 = state_44863;
(statearr_44877[(8)] = inst_44804);

return statearr_44877;
})();
var statearr_44878_45894 = state_44863__$1;
(statearr_44878_45894[(2)] = null);

(statearr_44878_45894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (13))){
var inst_44830 = (state_44863[(2)]);
var inst_44831 = calc_state();
var inst_44804 = inst_44831;
var state_44863__$1 = (function (){var statearr_44879 = state_44863;
(statearr_44879[(8)] = inst_44804);

(statearr_44879[(17)] = inst_44830);

return statearr_44879;
})();
var statearr_44880_45895 = state_44863__$1;
(statearr_44880_45895[(2)] = null);

(statearr_44880_45895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (22))){
var inst_44857 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
var statearr_44881_45896 = state_44863__$1;
(statearr_44881_45896[(2)] = inst_44857);

(statearr_44881_45896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (6))){
var inst_44817 = (state_44863[(14)]);
var inst_44821 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44817,change);
var state_44863__$1 = state_44863;
var statearr_44882_45897 = state_44863__$1;
(statearr_44882_45897[(2)] = inst_44821);

(statearr_44882_45897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (25))){
var state_44863__$1 = state_44863;
var statearr_44883_45898 = state_44863__$1;
(statearr_44883_45898[(2)] = null);

(statearr_44883_45898[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (17))){
var inst_44809 = (state_44863[(18)]);
var inst_44817 = (state_44863[(14)]);
var inst_44839 = (inst_44809.cljs$core$IFn$_invoke$arity$1 ? inst_44809.cljs$core$IFn$_invoke$arity$1(inst_44817) : inst_44809.call(null,inst_44817));
var inst_44840 = cljs.core.not(inst_44839);
var state_44863__$1 = state_44863;
var statearr_44884_45899 = state_44863__$1;
(statearr_44884_45899[(2)] = inst_44840);

(statearr_44884_45899[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (3))){
var inst_44861 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44863__$1,inst_44861);
} else {
if((state_val_44864 === (12))){
var state_44863__$1 = state_44863;
var statearr_44885_45900 = state_44863__$1;
(statearr_44885_45900[(2)] = null);

(statearr_44885_45900[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (2))){
var inst_44807 = (state_44863[(12)]);
var inst_44804 = (state_44863[(8)]);
var inst_44807__$1 = cljs.core.__destructure_map(inst_44804);
var inst_44808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44807__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44807__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44807__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44863__$1 = (function (){var statearr_44886 = state_44863;
(statearr_44886[(15)] = inst_44808);

(statearr_44886[(12)] = inst_44807__$1);

(statearr_44886[(18)] = inst_44809);

return statearr_44886;
})();
return cljs.core.async.ioc_alts_BANG_(state_44863__$1,(4),inst_44810);
} else {
if((state_val_44864 === (23))){
var inst_44848 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
if(cljs.core.truth_(inst_44848)){
var statearr_44887_45903 = state_44863__$1;
(statearr_44887_45903[(1)] = (24));

} else {
var statearr_44888_45904 = state_44863__$1;
(statearr_44888_45904[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (19))){
var inst_44843 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
var statearr_44889_45905 = state_44863__$1;
(statearr_44889_45905[(2)] = inst_44843);

(statearr_44889_45905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (11))){
var inst_44817 = (state_44863[(14)]);
var inst_44827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44817);
var state_44863__$1 = state_44863;
var statearr_44890_45908 = state_44863__$1;
(statearr_44890_45908[(2)] = inst_44827);

(statearr_44890_45908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (9))){
var inst_44808 = (state_44863[(15)]);
var inst_44834 = (state_44863[(19)]);
var inst_44817 = (state_44863[(14)]);
var inst_44834__$1 = (inst_44808.cljs$core$IFn$_invoke$arity$1 ? inst_44808.cljs$core$IFn$_invoke$arity$1(inst_44817) : inst_44808.call(null,inst_44817));
var state_44863__$1 = (function (){var statearr_44891 = state_44863;
(statearr_44891[(19)] = inst_44834__$1);

return statearr_44891;
})();
if(cljs.core.truth_(inst_44834__$1)){
var statearr_44892_45909 = state_44863__$1;
(statearr_44892_45909[(1)] = (14));

} else {
var statearr_44893_45910 = state_44863__$1;
(statearr_44893_45910[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (5))){
var inst_44818 = (state_44863[(13)]);
var state_44863__$1 = state_44863;
var statearr_44894_45911 = state_44863__$1;
(statearr_44894_45911[(2)] = inst_44818);

(statearr_44894_45911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (14))){
var inst_44834 = (state_44863[(19)]);
var state_44863__$1 = state_44863;
var statearr_44895_45912 = state_44863__$1;
(statearr_44895_45912[(2)] = inst_44834);

(statearr_44895_45912[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (26))){
var inst_44853 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
var statearr_44896_45913 = state_44863__$1;
(statearr_44896_45913[(2)] = inst_44853);

(statearr_44896_45913[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (16))){
var inst_44845 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
if(cljs.core.truth_(inst_44845)){
var statearr_44897_45914 = state_44863__$1;
(statearr_44897_45914[(1)] = (20));

} else {
var statearr_44898_45915 = state_44863__$1;
(statearr_44898_45915[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (10))){
var inst_44859 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
var statearr_44899_45916 = state_44863__$1;
(statearr_44899_45916[(2)] = inst_44859);

(statearr_44899_45916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (18))){
var inst_44837 = (state_44863[(16)]);
var state_44863__$1 = state_44863;
var statearr_44900_45917 = state_44863__$1;
(statearr_44900_45917[(2)] = inst_44837);

(statearr_44900_45917[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (8))){
var inst_44816 = (state_44863[(7)]);
var inst_44825 = (inst_44816 == null);
var state_44863__$1 = state_44863;
if(cljs.core.truth_(inst_44825)){
var statearr_44901_45918 = state_44863__$1;
(statearr_44901_45918[(1)] = (11));

} else {
var statearr_44902_45919 = state_44863__$1;
(statearr_44902_45919[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43957__auto__ = null;
var cljs$core$async$mix_$_state_machine__43957__auto____0 = (function (){
var statearr_44903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44903[(0)] = cljs$core$async$mix_$_state_machine__43957__auto__);

(statearr_44903[(1)] = (1));

return statearr_44903;
});
var cljs$core$async$mix_$_state_machine__43957__auto____1 = (function (state_44863){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44863);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e44904){var ex__43960__auto__ = e44904;
var statearr_44905_45927 = state_44863;
(statearr_44905_45927[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44863[(4)]))){
var statearr_44906_45928 = state_44863;
(statearr_44906_45928[(1)] = cljs.core.first((state_44863[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45929 = state_44863;
state_44863 = G__45929;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43957__auto__ = function(state_44863){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43957__auto____1.call(this,state_44863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43957__auto____0;
cljs$core$async$mix_$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43957__auto____1;
return cljs$core$async$mix_$_state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_44907 = f__44028__auto__();
(statearr_44907[(6)] = c__44027__auto___45885);

return statearr_44907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_45936 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_45936(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45937 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_45937(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45938 = (function() {
var G__45939 = null;
var G__45939__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__45939__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__45939 = function(p,v){
switch(arguments.length){
case 1:
return G__45939__1.call(this,p);
case 2:
return G__45939__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45939.cljs$core$IFn$_invoke$arity$1 = G__45939__1;
G__45939.cljs$core$IFn$_invoke$arity$2 = G__45939__2;
return G__45939;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44909 = arguments.length;
switch (G__44909) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45938(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45938(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44912 = arguments.length;
switch (G__44912) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44910_SHARP_){
if(cljs.core.truth_((p1__44910_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44910_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44910_SHARP_.call(null,topic)))){
return p1__44910_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44910_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44913 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44914){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44914 = meta44914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44915,meta44914__$1){
var self__ = this;
var _44915__$1 = this;
return (new cljs.core.async.t_cljs$core$async44913(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44914__$1));
}));

(cljs.core.async.t_cljs$core$async44913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44915){
var self__ = this;
var _44915__$1 = this;
return self__.meta44914;
}));

(cljs.core.async.t_cljs$core$async44913.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44913.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44913.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44913.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44913.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44913.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44913.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44914","meta44914",1582672779,null)], null);
}));

(cljs.core.async.t_cljs$core$async44913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44913");

(cljs.core.async.t_cljs$core$async44913.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44913.
 */
cljs.core.async.__GT_t_cljs$core$async44913 = (function cljs$core$async$__GT_t_cljs$core$async44913(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44914){
return (new cljs.core.async.t_cljs$core$async44913(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44914));
});

}

return (new cljs.core.async.t_cljs$core$async44913(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44027__auto___45954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_44987){
var state_val_44988 = (state_44987[(1)]);
if((state_val_44988 === (7))){
var inst_44983 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_44989_45955 = state_44987__$1;
(statearr_44989_45955[(2)] = inst_44983);

(statearr_44989_45955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (20))){
var state_44987__$1 = state_44987;
var statearr_44990_45956 = state_44987__$1;
(statearr_44990_45956[(2)] = null);

(statearr_44990_45956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (1))){
var state_44987__$1 = state_44987;
var statearr_44991_45957 = state_44987__$1;
(statearr_44991_45957[(2)] = null);

(statearr_44991_45957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (24))){
var inst_44966 = (state_44987[(7)]);
var inst_44975 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44966);
var state_44987__$1 = state_44987;
var statearr_44992_45958 = state_44987__$1;
(statearr_44992_45958[(2)] = inst_44975);

(statearr_44992_45958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (4))){
var inst_44918 = (state_44987[(8)]);
var inst_44918__$1 = (state_44987[(2)]);
var inst_44919 = (inst_44918__$1 == null);
var state_44987__$1 = (function (){var statearr_44993 = state_44987;
(statearr_44993[(8)] = inst_44918__$1);

return statearr_44993;
})();
if(cljs.core.truth_(inst_44919)){
var statearr_44994_45959 = state_44987__$1;
(statearr_44994_45959[(1)] = (5));

} else {
var statearr_44995_45960 = state_44987__$1;
(statearr_44995_45960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (15))){
var inst_44960 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_44996_45961 = state_44987__$1;
(statearr_44996_45961[(2)] = inst_44960);

(statearr_44996_45961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (21))){
var inst_44980 = (state_44987[(2)]);
var state_44987__$1 = (function (){var statearr_44997 = state_44987;
(statearr_44997[(9)] = inst_44980);

return statearr_44997;
})();
var statearr_44998_45962 = state_44987__$1;
(statearr_44998_45962[(2)] = null);

(statearr_44998_45962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (13))){
var inst_44942 = (state_44987[(10)]);
var inst_44944 = cljs.core.chunked_seq_QMARK_(inst_44942);
var state_44987__$1 = state_44987;
if(inst_44944){
var statearr_44999_45963 = state_44987__$1;
(statearr_44999_45963[(1)] = (16));

} else {
var statearr_45000_45964 = state_44987__$1;
(statearr_45000_45964[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (22))){
var inst_44972 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
if(cljs.core.truth_(inst_44972)){
var statearr_45001_45965 = state_44987__$1;
(statearr_45001_45965[(1)] = (23));

} else {
var statearr_45002_45966 = state_44987__$1;
(statearr_45002_45966[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (6))){
var inst_44968 = (state_44987[(11)]);
var inst_44966 = (state_44987[(7)]);
var inst_44918 = (state_44987[(8)]);
var inst_44966__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44918) : topic_fn.call(null,inst_44918));
var inst_44967 = cljs.core.deref(mults);
var inst_44968__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44967,inst_44966__$1);
var state_44987__$1 = (function (){var statearr_45003 = state_44987;
(statearr_45003[(11)] = inst_44968__$1);

(statearr_45003[(7)] = inst_44966__$1);

return statearr_45003;
})();
if(cljs.core.truth_(inst_44968__$1)){
var statearr_45004_45973 = state_44987__$1;
(statearr_45004_45973[(1)] = (19));

} else {
var statearr_45005_45974 = state_44987__$1;
(statearr_45005_45974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (25))){
var inst_44977 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_45006_45975 = state_44987__$1;
(statearr_45006_45975[(2)] = inst_44977);

(statearr_45006_45975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (17))){
var inst_44942 = (state_44987[(10)]);
var inst_44951 = cljs.core.first(inst_44942);
var inst_44952 = cljs.core.async.muxch_STAR_(inst_44951);
var inst_44953 = cljs.core.async.close_BANG_(inst_44952);
var inst_44954 = cljs.core.next(inst_44942);
var inst_44928 = inst_44954;
var inst_44929 = null;
var inst_44930 = (0);
var inst_44931 = (0);
var state_44987__$1 = (function (){var statearr_45007 = state_44987;
(statearr_45007[(12)] = inst_44930);

(statearr_45007[(13)] = inst_44928);

(statearr_45007[(14)] = inst_44953);

(statearr_45007[(15)] = inst_44931);

(statearr_45007[(16)] = inst_44929);

return statearr_45007;
})();
var statearr_45008_45976 = state_44987__$1;
(statearr_45008_45976[(2)] = null);

(statearr_45008_45976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (3))){
var inst_44985 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44987__$1,inst_44985);
} else {
if((state_val_44988 === (12))){
var inst_44962 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_45009_45977 = state_44987__$1;
(statearr_45009_45977[(2)] = inst_44962);

(statearr_45009_45977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (2))){
var state_44987__$1 = state_44987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44987__$1,(4),ch);
} else {
if((state_val_44988 === (23))){
var state_44987__$1 = state_44987;
var statearr_45010_45978 = state_44987__$1;
(statearr_45010_45978[(2)] = null);

(statearr_45010_45978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (19))){
var inst_44968 = (state_44987[(11)]);
var inst_44918 = (state_44987[(8)]);
var inst_44970 = cljs.core.async.muxch_STAR_(inst_44968);
var state_44987__$1 = state_44987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44987__$1,(22),inst_44970,inst_44918);
} else {
if((state_val_44988 === (11))){
var inst_44928 = (state_44987[(13)]);
var inst_44942 = (state_44987[(10)]);
var inst_44942__$1 = cljs.core.seq(inst_44928);
var state_44987__$1 = (function (){var statearr_45011 = state_44987;
(statearr_45011[(10)] = inst_44942__$1);

return statearr_45011;
})();
if(inst_44942__$1){
var statearr_45012_45979 = state_44987__$1;
(statearr_45012_45979[(1)] = (13));

} else {
var statearr_45013_45980 = state_44987__$1;
(statearr_45013_45980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (9))){
var inst_44964 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_45014_45981 = state_44987__$1;
(statearr_45014_45981[(2)] = inst_44964);

(statearr_45014_45981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (5))){
var inst_44925 = cljs.core.deref(mults);
var inst_44926 = cljs.core.vals(inst_44925);
var inst_44927 = cljs.core.seq(inst_44926);
var inst_44928 = inst_44927;
var inst_44929 = null;
var inst_44930 = (0);
var inst_44931 = (0);
var state_44987__$1 = (function (){var statearr_45015 = state_44987;
(statearr_45015[(12)] = inst_44930);

(statearr_45015[(13)] = inst_44928);

(statearr_45015[(15)] = inst_44931);

(statearr_45015[(16)] = inst_44929);

return statearr_45015;
})();
var statearr_45016_45982 = state_44987__$1;
(statearr_45016_45982[(2)] = null);

(statearr_45016_45982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (14))){
var state_44987__$1 = state_44987;
var statearr_45020_45983 = state_44987__$1;
(statearr_45020_45983[(2)] = null);

(statearr_45020_45983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (16))){
var inst_44942 = (state_44987[(10)]);
var inst_44946 = cljs.core.chunk_first(inst_44942);
var inst_44947 = cljs.core.chunk_rest(inst_44942);
var inst_44948 = cljs.core.count(inst_44946);
var inst_44928 = inst_44947;
var inst_44929 = inst_44946;
var inst_44930 = inst_44948;
var inst_44931 = (0);
var state_44987__$1 = (function (){var statearr_45021 = state_44987;
(statearr_45021[(12)] = inst_44930);

(statearr_45021[(13)] = inst_44928);

(statearr_45021[(15)] = inst_44931);

(statearr_45021[(16)] = inst_44929);

return statearr_45021;
})();
var statearr_45022_45984 = state_44987__$1;
(statearr_45022_45984[(2)] = null);

(statearr_45022_45984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (10))){
var inst_44930 = (state_44987[(12)]);
var inst_44928 = (state_44987[(13)]);
var inst_44931 = (state_44987[(15)]);
var inst_44929 = (state_44987[(16)]);
var inst_44936 = cljs.core._nth(inst_44929,inst_44931);
var inst_44937 = cljs.core.async.muxch_STAR_(inst_44936);
var inst_44938 = cljs.core.async.close_BANG_(inst_44937);
var inst_44939 = (inst_44931 + (1));
var tmp45017 = inst_44930;
var tmp45018 = inst_44928;
var tmp45019 = inst_44929;
var inst_44928__$1 = tmp45018;
var inst_44929__$1 = tmp45019;
var inst_44930__$1 = tmp45017;
var inst_44931__$1 = inst_44939;
var state_44987__$1 = (function (){var statearr_45023 = state_44987;
(statearr_45023[(12)] = inst_44930__$1);

(statearr_45023[(17)] = inst_44938);

(statearr_45023[(13)] = inst_44928__$1);

(statearr_45023[(15)] = inst_44931__$1);

(statearr_45023[(16)] = inst_44929__$1);

return statearr_45023;
})();
var statearr_45024_45985 = state_44987__$1;
(statearr_45024_45985[(2)] = null);

(statearr_45024_45985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (18))){
var inst_44957 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_45025_45986 = state_44987__$1;
(statearr_45025_45986[(2)] = inst_44957);

(statearr_45025_45986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44988 === (8))){
var inst_44930 = (state_44987[(12)]);
var inst_44931 = (state_44987[(15)]);
var inst_44933 = (inst_44931 < inst_44930);
var inst_44934 = inst_44933;
var state_44987__$1 = state_44987;
if(cljs.core.truth_(inst_44934)){
var statearr_45026_45987 = state_44987__$1;
(statearr_45026_45987[(1)] = (10));

} else {
var statearr_45027_45988 = state_44987__$1;
(statearr_45027_45988[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_45028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45028[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_45028[(1)] = (1));

return statearr_45028;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_44987){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_44987);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e45029){var ex__43960__auto__ = e45029;
var statearr_45030_45989 = state_44987;
(statearr_45030_45989[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_44987[(4)]))){
var statearr_45031_45990 = state_44987;
(statearr_45031_45990[(1)] = cljs.core.first((state_44987[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45991 = state_44987;
state_44987 = G__45991;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_44987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_44987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_45032 = f__44028__auto__();
(statearr_45032[(6)] = c__44027__auto___45954);

return statearr_45032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45034 = arguments.length;
switch (G__45034) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45036 = arguments.length;
switch (G__45036) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45038 = arguments.length;
switch (G__45038) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__44027__auto___45995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_45081){
var state_val_45082 = (state_45081[(1)]);
if((state_val_45082 === (7))){
var state_45081__$1 = state_45081;
var statearr_45083_45996 = state_45081__$1;
(statearr_45083_45996[(2)] = null);

(statearr_45083_45996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (1))){
var state_45081__$1 = state_45081;
var statearr_45084_45997 = state_45081__$1;
(statearr_45084_45997[(2)] = null);

(statearr_45084_45997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (4))){
var inst_45041 = (state_45081[(7)]);
var inst_45042 = (state_45081[(8)]);
var inst_45044 = (inst_45042 < inst_45041);
var state_45081__$1 = state_45081;
if(cljs.core.truth_(inst_45044)){
var statearr_45085_45998 = state_45081__$1;
(statearr_45085_45998[(1)] = (6));

} else {
var statearr_45086_45999 = state_45081__$1;
(statearr_45086_45999[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (15))){
var inst_45067 = (state_45081[(9)]);
var inst_45072 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45067);
var state_45081__$1 = state_45081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45081__$1,(17),out,inst_45072);
} else {
if((state_val_45082 === (13))){
var inst_45067 = (state_45081[(9)]);
var inst_45067__$1 = (state_45081[(2)]);
var inst_45068 = cljs.core.some(cljs.core.nil_QMARK_,inst_45067__$1);
var state_45081__$1 = (function (){var statearr_45087 = state_45081;
(statearr_45087[(9)] = inst_45067__$1);

return statearr_45087;
})();
if(cljs.core.truth_(inst_45068)){
var statearr_45088_46000 = state_45081__$1;
(statearr_45088_46000[(1)] = (14));

} else {
var statearr_45089_46001 = state_45081__$1;
(statearr_45089_46001[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (6))){
var state_45081__$1 = state_45081;
var statearr_45090_46002 = state_45081__$1;
(statearr_45090_46002[(2)] = null);

(statearr_45090_46002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (17))){
var inst_45074 = (state_45081[(2)]);
var state_45081__$1 = (function (){var statearr_45092 = state_45081;
(statearr_45092[(10)] = inst_45074);

return statearr_45092;
})();
var statearr_45093_46003 = state_45081__$1;
(statearr_45093_46003[(2)] = null);

(statearr_45093_46003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (3))){
var inst_45079 = (state_45081[(2)]);
var state_45081__$1 = state_45081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45081__$1,inst_45079);
} else {
if((state_val_45082 === (12))){
var _ = (function (){var statearr_45094 = state_45081;
(statearr_45094[(4)] = cljs.core.rest((state_45081[(4)])));

return statearr_45094;
})();
var state_45081__$1 = state_45081;
var ex45091 = (state_45081__$1[(2)]);
var statearr_45095_46005 = state_45081__$1;
(statearr_45095_46005[(5)] = ex45091);


if((ex45091 instanceof Object)){
var statearr_45096_46006 = state_45081__$1;
(statearr_45096_46006[(1)] = (11));

(statearr_45096_46006[(5)] = null);

} else {
throw ex45091;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (2))){
var inst_45040 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45041 = cnt;
var inst_45042 = (0);
var state_45081__$1 = (function (){var statearr_45097 = state_45081;
(statearr_45097[(11)] = inst_45040);

(statearr_45097[(7)] = inst_45041);

(statearr_45097[(8)] = inst_45042);

return statearr_45097;
})();
var statearr_45098_46007 = state_45081__$1;
(statearr_45098_46007[(2)] = null);

(statearr_45098_46007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (11))){
var inst_45046 = (state_45081[(2)]);
var inst_45047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45081__$1 = (function (){var statearr_45099 = state_45081;
(statearr_45099[(12)] = inst_45046);

return statearr_45099;
})();
var statearr_45100_46008 = state_45081__$1;
(statearr_45100_46008[(2)] = inst_45047);

(statearr_45100_46008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (9))){
var inst_45042 = (state_45081[(8)]);
var _ = (function (){var statearr_45101 = state_45081;
(statearr_45101[(4)] = cljs.core.cons((12),(state_45081[(4)])));

return statearr_45101;
})();
var inst_45053 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45042) : chs__$1.call(null,inst_45042));
var inst_45054 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45042) : done.call(null,inst_45042));
var inst_45055 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45053,inst_45054);
var ___$1 = (function (){var statearr_45102 = state_45081;
(statearr_45102[(4)] = cljs.core.rest((state_45081[(4)])));

return statearr_45102;
})();
var state_45081__$1 = state_45081;
var statearr_45103_46009 = state_45081__$1;
(statearr_45103_46009[(2)] = inst_45055);

(statearr_45103_46009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (5))){
var inst_45065 = (state_45081[(2)]);
var state_45081__$1 = (function (){var statearr_45104 = state_45081;
(statearr_45104[(13)] = inst_45065);

return statearr_45104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45081__$1,(13),dchan);
} else {
if((state_val_45082 === (14))){
var inst_45070 = cljs.core.async.close_BANG_(out);
var state_45081__$1 = state_45081;
var statearr_45105_46010 = state_45081__$1;
(statearr_45105_46010[(2)] = inst_45070);

(statearr_45105_46010[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (16))){
var inst_45077 = (state_45081[(2)]);
var state_45081__$1 = state_45081;
var statearr_45106_46011 = state_45081__$1;
(statearr_45106_46011[(2)] = inst_45077);

(statearr_45106_46011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (10))){
var inst_45042 = (state_45081[(8)]);
var inst_45058 = (state_45081[(2)]);
var inst_45059 = (inst_45042 + (1));
var inst_45042__$1 = inst_45059;
var state_45081__$1 = (function (){var statearr_45107 = state_45081;
(statearr_45107[(14)] = inst_45058);

(statearr_45107[(8)] = inst_45042__$1);

return statearr_45107;
})();
var statearr_45108_46012 = state_45081__$1;
(statearr_45108_46012[(2)] = null);

(statearr_45108_46012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45082 === (8))){
var inst_45063 = (state_45081[(2)]);
var state_45081__$1 = state_45081;
var statearr_45109_46013 = state_45081__$1;
(statearr_45109_46013[(2)] = inst_45063);

(statearr_45109_46013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_45110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45110[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_45110[(1)] = (1));

return statearr_45110;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_45081){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_45081);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e45111){var ex__43960__auto__ = e45111;
var statearr_45112_46014 = state_45081;
(statearr_45112_46014[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_45081[(4)]))){
var statearr_45113_46015 = state_45081;
(statearr_45113_46015[(1)] = cljs.core.first((state_45081[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46016 = state_45081;
state_45081 = G__46016;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_45081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_45081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_45114 = f__44028__auto__();
(statearr_45114[(6)] = c__44027__auto___45995);

return statearr_45114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45117 = arguments.length;
switch (G__45117) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44027__auto___46018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_45149){
var state_val_45150 = (state_45149[(1)]);
if((state_val_45150 === (7))){
var inst_45129 = (state_45149[(7)]);
var inst_45128 = (state_45149[(8)]);
var inst_45128__$1 = (state_45149[(2)]);
var inst_45129__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45128__$1,(0),null);
var inst_45130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45128__$1,(1),null);
var inst_45131 = (inst_45129__$1 == null);
var state_45149__$1 = (function (){var statearr_45151 = state_45149;
(statearr_45151[(9)] = inst_45130);

(statearr_45151[(7)] = inst_45129__$1);

(statearr_45151[(8)] = inst_45128__$1);

return statearr_45151;
})();
if(cljs.core.truth_(inst_45131)){
var statearr_45152_46019 = state_45149__$1;
(statearr_45152_46019[(1)] = (8));

} else {
var statearr_45153_46024 = state_45149__$1;
(statearr_45153_46024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (1))){
var inst_45118 = cljs.core.vec(chs);
var inst_45119 = inst_45118;
var state_45149__$1 = (function (){var statearr_45154 = state_45149;
(statearr_45154[(10)] = inst_45119);

return statearr_45154;
})();
var statearr_45155_46025 = state_45149__$1;
(statearr_45155_46025[(2)] = null);

(statearr_45155_46025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (4))){
var inst_45119 = (state_45149[(10)]);
var state_45149__$1 = state_45149;
return cljs.core.async.ioc_alts_BANG_(state_45149__$1,(7),inst_45119);
} else {
if((state_val_45150 === (6))){
var inst_45145 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
var statearr_45156_46026 = state_45149__$1;
(statearr_45156_46026[(2)] = inst_45145);

(statearr_45156_46026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (3))){
var inst_45147 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45149__$1,inst_45147);
} else {
if((state_val_45150 === (2))){
var inst_45119 = (state_45149[(10)]);
var inst_45121 = cljs.core.count(inst_45119);
var inst_45122 = (inst_45121 > (0));
var state_45149__$1 = state_45149;
if(cljs.core.truth_(inst_45122)){
var statearr_45158_46027 = state_45149__$1;
(statearr_45158_46027[(1)] = (4));

} else {
var statearr_45159_46028 = state_45149__$1;
(statearr_45159_46028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (11))){
var inst_45119 = (state_45149[(10)]);
var inst_45138 = (state_45149[(2)]);
var tmp45157 = inst_45119;
var inst_45119__$1 = tmp45157;
var state_45149__$1 = (function (){var statearr_45160 = state_45149;
(statearr_45160[(11)] = inst_45138);

(statearr_45160[(10)] = inst_45119__$1);

return statearr_45160;
})();
var statearr_45161_46029 = state_45149__$1;
(statearr_45161_46029[(2)] = null);

(statearr_45161_46029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (9))){
var inst_45129 = (state_45149[(7)]);
var state_45149__$1 = state_45149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45149__$1,(11),out,inst_45129);
} else {
if((state_val_45150 === (5))){
var inst_45143 = cljs.core.async.close_BANG_(out);
var state_45149__$1 = state_45149;
var statearr_45162_46030 = state_45149__$1;
(statearr_45162_46030[(2)] = inst_45143);

(statearr_45162_46030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (10))){
var inst_45141 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
var statearr_45163_46031 = state_45149__$1;
(statearr_45163_46031[(2)] = inst_45141);

(statearr_45163_46031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (8))){
var inst_45130 = (state_45149[(9)]);
var inst_45129 = (state_45149[(7)]);
var inst_45119 = (state_45149[(10)]);
var inst_45128 = (state_45149[(8)]);
var inst_45133 = (function (){var cs = inst_45119;
var vec__45124 = inst_45128;
var v = inst_45129;
var c = inst_45130;
return (function (p1__45115_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45115_SHARP_);
});
})();
var inst_45134 = cljs.core.filterv(inst_45133,inst_45119);
var inst_45119__$1 = inst_45134;
var state_45149__$1 = (function (){var statearr_45164 = state_45149;
(statearr_45164[(10)] = inst_45119__$1);

return statearr_45164;
})();
var statearr_45165_46032 = state_45149__$1;
(statearr_45165_46032[(2)] = null);

(statearr_45165_46032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_45166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45166[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_45166[(1)] = (1));

return statearr_45166;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_45149){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_45149);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e45167){var ex__43960__auto__ = e45167;
var statearr_45168_46033 = state_45149;
(statearr_45168_46033[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_45149[(4)]))){
var statearr_45169_46034 = state_45149;
(statearr_45169_46034[(1)] = cljs.core.first((state_45149[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46035 = state_45149;
state_45149 = G__46035;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_45149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_45149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_45170 = f__44028__auto__();
(statearr_45170[(6)] = c__44027__auto___46018);

return statearr_45170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45172 = arguments.length;
switch (G__45172) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44027__auto___46037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_45196){
var state_val_45197 = (state_45196[(1)]);
if((state_val_45197 === (7))){
var inst_45178 = (state_45196[(7)]);
var inst_45178__$1 = (state_45196[(2)]);
var inst_45179 = (inst_45178__$1 == null);
var inst_45180 = cljs.core.not(inst_45179);
var state_45196__$1 = (function (){var statearr_45198 = state_45196;
(statearr_45198[(7)] = inst_45178__$1);

return statearr_45198;
})();
if(inst_45180){
var statearr_45199_46038 = state_45196__$1;
(statearr_45199_46038[(1)] = (8));

} else {
var statearr_45200_46039 = state_45196__$1;
(statearr_45200_46039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (1))){
var inst_45173 = (0);
var state_45196__$1 = (function (){var statearr_45201 = state_45196;
(statearr_45201[(8)] = inst_45173);

return statearr_45201;
})();
var statearr_45202_46040 = state_45196__$1;
(statearr_45202_46040[(2)] = null);

(statearr_45202_46040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (4))){
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45196__$1,(7),ch);
} else {
if((state_val_45197 === (6))){
var inst_45191 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
var statearr_45203_46041 = state_45196__$1;
(statearr_45203_46041[(2)] = inst_45191);

(statearr_45203_46041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (3))){
var inst_45193 = (state_45196[(2)]);
var inst_45194 = cljs.core.async.close_BANG_(out);
var state_45196__$1 = (function (){var statearr_45204 = state_45196;
(statearr_45204[(9)] = inst_45193);

return statearr_45204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45196__$1,inst_45194);
} else {
if((state_val_45197 === (2))){
var inst_45173 = (state_45196[(8)]);
var inst_45175 = (inst_45173 < n);
var state_45196__$1 = state_45196;
if(cljs.core.truth_(inst_45175)){
var statearr_45205_46042 = state_45196__$1;
(statearr_45205_46042[(1)] = (4));

} else {
var statearr_45206_46043 = state_45196__$1;
(statearr_45206_46043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (11))){
var inst_45173 = (state_45196[(8)]);
var inst_45183 = (state_45196[(2)]);
var inst_45184 = (inst_45173 + (1));
var inst_45173__$1 = inst_45184;
var state_45196__$1 = (function (){var statearr_45207 = state_45196;
(statearr_45207[(8)] = inst_45173__$1);

(statearr_45207[(10)] = inst_45183);

return statearr_45207;
})();
var statearr_45208_46044 = state_45196__$1;
(statearr_45208_46044[(2)] = null);

(statearr_45208_46044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (9))){
var state_45196__$1 = state_45196;
var statearr_45209_46045 = state_45196__$1;
(statearr_45209_46045[(2)] = null);

(statearr_45209_46045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (5))){
var state_45196__$1 = state_45196;
var statearr_45210_46046 = state_45196__$1;
(statearr_45210_46046[(2)] = null);

(statearr_45210_46046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (10))){
var inst_45188 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
var statearr_45211_46047 = state_45196__$1;
(statearr_45211_46047[(2)] = inst_45188);

(statearr_45211_46047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (8))){
var inst_45178 = (state_45196[(7)]);
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45196__$1,(11),out,inst_45178);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_45212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45212[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_45212[(1)] = (1));

return statearr_45212;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_45196){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_45196);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e45213){var ex__43960__auto__ = e45213;
var statearr_45214_46048 = state_45196;
(statearr_45214_46048[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_45196[(4)]))){
var statearr_45215_46049 = state_45196;
(statearr_45215_46049[(1)] = cljs.core.first((state_45196[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46050 = state_45196;
state_45196 = G__46050;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_45196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_45196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_45216 = f__44028__auto__();
(statearr_45216[(6)] = c__44027__auto___46037);

return statearr_45216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45218 = (function (f,ch,meta45219){
this.f = f;
this.ch = ch;
this.meta45219 = meta45219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45220,meta45219__$1){
var self__ = this;
var _45220__$1 = this;
return (new cljs.core.async.t_cljs$core$async45218(self__.f,self__.ch,meta45219__$1));
}));

(cljs.core.async.t_cljs$core$async45218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45220){
var self__ = this;
var _45220__$1 = this;
return self__.meta45219;
}));

(cljs.core.async.t_cljs$core$async45218.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45218.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45218.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45221 = (function (f,ch,meta45219,_,fn1,meta45222){
this.f = f;
this.ch = ch;
this.meta45219 = meta45219;
this._ = _;
this.fn1 = fn1;
this.meta45222 = meta45222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45223,meta45222__$1){
var self__ = this;
var _45223__$1 = this;
return (new cljs.core.async.t_cljs$core$async45221(self__.f,self__.ch,self__.meta45219,self__._,self__.fn1,meta45222__$1));
}));

(cljs.core.async.t_cljs$core$async45221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45223){
var self__ = this;
var _45223__$1 = this;
return self__.meta45222;
}));

(cljs.core.async.t_cljs$core$async45221.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45221.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45217_SHARP_){
var G__45224 = (((p1__45217_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45217_SHARP_) : self__.f.call(null,p1__45217_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45224) : f1.call(null,G__45224));
});
}));

(cljs.core.async.t_cljs$core$async45221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45219","meta45219",200492595,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45218","cljs.core.async/t_cljs$core$async45218",328946706,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45222","meta45222",968959751,null)], null);
}));

(cljs.core.async.t_cljs$core$async45221.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45221");

(cljs.core.async.t_cljs$core$async45221.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45221");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45221.
 */
cljs.core.async.__GT_t_cljs$core$async45221 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45221(f__$1,ch__$1,meta45219__$1,___$2,fn1__$1,meta45222){
return (new cljs.core.async.t_cljs$core$async45221(f__$1,ch__$1,meta45219__$1,___$2,fn1__$1,meta45222));
});

}

return (new cljs.core.async.t_cljs$core$async45221(self__.f,self__.ch,self__.meta45219,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45225 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45225) : self__.f.call(null,G__45225));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45218.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45219","meta45219",200492595,null)], null);
}));

(cljs.core.async.t_cljs$core$async45218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45218");

(cljs.core.async.t_cljs$core$async45218.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45218.
 */
cljs.core.async.__GT_t_cljs$core$async45218 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45218(f__$1,ch__$1,meta45219){
return (new cljs.core.async.t_cljs$core$async45218(f__$1,ch__$1,meta45219));
});

}

return (new cljs.core.async.t_cljs$core$async45218(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45226 = (function (f,ch,meta45227){
this.f = f;
this.ch = ch;
this.meta45227 = meta45227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45228,meta45227__$1){
var self__ = this;
var _45228__$1 = this;
return (new cljs.core.async.t_cljs$core$async45226(self__.f,self__.ch,meta45227__$1));
}));

(cljs.core.async.t_cljs$core$async45226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45228){
var self__ = this;
var _45228__$1 = this;
return self__.meta45227;
}));

(cljs.core.async.t_cljs$core$async45226.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45226.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45226.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45227","meta45227",-437043684,null)], null);
}));

(cljs.core.async.t_cljs$core$async45226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45226");

(cljs.core.async.t_cljs$core$async45226.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45226.
 */
cljs.core.async.__GT_t_cljs$core$async45226 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45226(f__$1,ch__$1,meta45227){
return (new cljs.core.async.t_cljs$core$async45226(f__$1,ch__$1,meta45227));
});

}

return (new cljs.core.async.t_cljs$core$async45226(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45229 = (function (p,ch,meta45230){
this.p = p;
this.ch = ch;
this.meta45230 = meta45230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45231,meta45230__$1){
var self__ = this;
var _45231__$1 = this;
return (new cljs.core.async.t_cljs$core$async45229(self__.p,self__.ch,meta45230__$1));
}));

(cljs.core.async.t_cljs$core$async45229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45231){
var self__ = this;
var _45231__$1 = this;
return self__.meta45230;
}));

(cljs.core.async.t_cljs$core$async45229.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45229.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45229.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45230","meta45230",-699928734,null)], null);
}));

(cljs.core.async.t_cljs$core$async45229.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45229");

(cljs.core.async.t_cljs$core$async45229.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45229");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45229.
 */
cljs.core.async.__GT_t_cljs$core$async45229 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45229(p__$1,ch__$1,meta45230){
return (new cljs.core.async.t_cljs$core$async45229(p__$1,ch__$1,meta45230));
});

}

return (new cljs.core.async.t_cljs$core$async45229(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45233 = arguments.length;
switch (G__45233) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44027__auto___46058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_45254){
var state_val_45255 = (state_45254[(1)]);
if((state_val_45255 === (7))){
var inst_45250 = (state_45254[(2)]);
var state_45254__$1 = state_45254;
var statearr_45256_46059 = state_45254__$1;
(statearr_45256_46059[(2)] = inst_45250);

(statearr_45256_46059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (1))){
var state_45254__$1 = state_45254;
var statearr_45257_46060 = state_45254__$1;
(statearr_45257_46060[(2)] = null);

(statearr_45257_46060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (4))){
var inst_45236 = (state_45254[(7)]);
var inst_45236__$1 = (state_45254[(2)]);
var inst_45237 = (inst_45236__$1 == null);
var state_45254__$1 = (function (){var statearr_45258 = state_45254;
(statearr_45258[(7)] = inst_45236__$1);

return statearr_45258;
})();
if(cljs.core.truth_(inst_45237)){
var statearr_45259_46061 = state_45254__$1;
(statearr_45259_46061[(1)] = (5));

} else {
var statearr_45260_46062 = state_45254__$1;
(statearr_45260_46062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (6))){
var inst_45236 = (state_45254[(7)]);
var inst_45241 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45236) : p.call(null,inst_45236));
var state_45254__$1 = state_45254;
if(cljs.core.truth_(inst_45241)){
var statearr_45261_46063 = state_45254__$1;
(statearr_45261_46063[(1)] = (8));

} else {
var statearr_45262_46064 = state_45254__$1;
(statearr_45262_46064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (3))){
var inst_45252 = (state_45254[(2)]);
var state_45254__$1 = state_45254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45254__$1,inst_45252);
} else {
if((state_val_45255 === (2))){
var state_45254__$1 = state_45254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45254__$1,(4),ch);
} else {
if((state_val_45255 === (11))){
var inst_45244 = (state_45254[(2)]);
var state_45254__$1 = state_45254;
var statearr_45263_46065 = state_45254__$1;
(statearr_45263_46065[(2)] = inst_45244);

(statearr_45263_46065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (9))){
var state_45254__$1 = state_45254;
var statearr_45264_46066 = state_45254__$1;
(statearr_45264_46066[(2)] = null);

(statearr_45264_46066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (5))){
var inst_45239 = cljs.core.async.close_BANG_(out);
var state_45254__$1 = state_45254;
var statearr_45265_46067 = state_45254__$1;
(statearr_45265_46067[(2)] = inst_45239);

(statearr_45265_46067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (10))){
var inst_45247 = (state_45254[(2)]);
var state_45254__$1 = (function (){var statearr_45266 = state_45254;
(statearr_45266[(8)] = inst_45247);

return statearr_45266;
})();
var statearr_45267_46068 = state_45254__$1;
(statearr_45267_46068[(2)] = null);

(statearr_45267_46068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (8))){
var inst_45236 = (state_45254[(7)]);
var state_45254__$1 = state_45254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45254__$1,(11),out,inst_45236);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_45268 = [null,null,null,null,null,null,null,null,null];
(statearr_45268[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_45268[(1)] = (1));

return statearr_45268;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_45254){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_45254);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e45269){var ex__43960__auto__ = e45269;
var statearr_45270_46069 = state_45254;
(statearr_45270_46069[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_45254[(4)]))){
var statearr_45271_46070 = state_45254;
(statearr_45271_46070[(1)] = cljs.core.first((state_45254[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46071 = state_45254;
state_45254 = G__46071;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_45254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_45254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_45272 = f__44028__auto__();
(statearr_45272[(6)] = c__44027__auto___46058);

return statearr_45272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45274 = arguments.length;
switch (G__45274) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44027__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_45336){
var state_val_45337 = (state_45336[(1)]);
if((state_val_45337 === (7))){
var inst_45332 = (state_45336[(2)]);
var state_45336__$1 = state_45336;
var statearr_45338_46073 = state_45336__$1;
(statearr_45338_46073[(2)] = inst_45332);

(statearr_45338_46073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (20))){
var inst_45302 = (state_45336[(7)]);
var inst_45313 = (state_45336[(2)]);
var inst_45314 = cljs.core.next(inst_45302);
var inst_45288 = inst_45314;
var inst_45289 = null;
var inst_45290 = (0);
var inst_45291 = (0);
var state_45336__$1 = (function (){var statearr_45339 = state_45336;
(statearr_45339[(8)] = inst_45313);

(statearr_45339[(9)] = inst_45288);

(statearr_45339[(10)] = inst_45289);

(statearr_45339[(11)] = inst_45291);

(statearr_45339[(12)] = inst_45290);

return statearr_45339;
})();
var statearr_45340_46075 = state_45336__$1;
(statearr_45340_46075[(2)] = null);

(statearr_45340_46075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (1))){
var state_45336__$1 = state_45336;
var statearr_45341_46076 = state_45336__$1;
(statearr_45341_46076[(2)] = null);

(statearr_45341_46076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (4))){
var inst_45277 = (state_45336[(13)]);
var inst_45277__$1 = (state_45336[(2)]);
var inst_45278 = (inst_45277__$1 == null);
var state_45336__$1 = (function (){var statearr_45342 = state_45336;
(statearr_45342[(13)] = inst_45277__$1);

return statearr_45342;
})();
if(cljs.core.truth_(inst_45278)){
var statearr_45343_46077 = state_45336__$1;
(statearr_45343_46077[(1)] = (5));

} else {
var statearr_45344_46078 = state_45336__$1;
(statearr_45344_46078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (15))){
var state_45336__$1 = state_45336;
var statearr_45348_46079 = state_45336__$1;
(statearr_45348_46079[(2)] = null);

(statearr_45348_46079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (21))){
var state_45336__$1 = state_45336;
var statearr_45349_46080 = state_45336__$1;
(statearr_45349_46080[(2)] = null);

(statearr_45349_46080[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (13))){
var inst_45288 = (state_45336[(9)]);
var inst_45289 = (state_45336[(10)]);
var inst_45291 = (state_45336[(11)]);
var inst_45290 = (state_45336[(12)]);
var inst_45298 = (state_45336[(2)]);
var inst_45299 = (inst_45291 + (1));
var tmp45345 = inst_45288;
var tmp45346 = inst_45289;
var tmp45347 = inst_45290;
var inst_45288__$1 = tmp45345;
var inst_45289__$1 = tmp45346;
var inst_45290__$1 = tmp45347;
var inst_45291__$1 = inst_45299;
var state_45336__$1 = (function (){var statearr_45350 = state_45336;
(statearr_45350[(9)] = inst_45288__$1);

(statearr_45350[(14)] = inst_45298);

(statearr_45350[(10)] = inst_45289__$1);

(statearr_45350[(11)] = inst_45291__$1);

(statearr_45350[(12)] = inst_45290__$1);

return statearr_45350;
})();
var statearr_45351_46085 = state_45336__$1;
(statearr_45351_46085[(2)] = null);

(statearr_45351_46085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (22))){
var state_45336__$1 = state_45336;
var statearr_45352_46086 = state_45336__$1;
(statearr_45352_46086[(2)] = null);

(statearr_45352_46086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (6))){
var inst_45277 = (state_45336[(13)]);
var inst_45286 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45277) : f.call(null,inst_45277));
var inst_45287 = cljs.core.seq(inst_45286);
var inst_45288 = inst_45287;
var inst_45289 = null;
var inst_45290 = (0);
var inst_45291 = (0);
var state_45336__$1 = (function (){var statearr_45353 = state_45336;
(statearr_45353[(9)] = inst_45288);

(statearr_45353[(10)] = inst_45289);

(statearr_45353[(11)] = inst_45291);

(statearr_45353[(12)] = inst_45290);

return statearr_45353;
})();
var statearr_45354_46087 = state_45336__$1;
(statearr_45354_46087[(2)] = null);

(statearr_45354_46087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (17))){
var inst_45302 = (state_45336[(7)]);
var inst_45306 = cljs.core.chunk_first(inst_45302);
var inst_45307 = cljs.core.chunk_rest(inst_45302);
var inst_45308 = cljs.core.count(inst_45306);
var inst_45288 = inst_45307;
var inst_45289 = inst_45306;
var inst_45290 = inst_45308;
var inst_45291 = (0);
var state_45336__$1 = (function (){var statearr_45355 = state_45336;
(statearr_45355[(9)] = inst_45288);

(statearr_45355[(10)] = inst_45289);

(statearr_45355[(11)] = inst_45291);

(statearr_45355[(12)] = inst_45290);

return statearr_45355;
})();
var statearr_45356_46088 = state_45336__$1;
(statearr_45356_46088[(2)] = null);

(statearr_45356_46088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (3))){
var inst_45334 = (state_45336[(2)]);
var state_45336__$1 = state_45336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45336__$1,inst_45334);
} else {
if((state_val_45337 === (12))){
var inst_45322 = (state_45336[(2)]);
var state_45336__$1 = state_45336;
var statearr_45357_46089 = state_45336__$1;
(statearr_45357_46089[(2)] = inst_45322);

(statearr_45357_46089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (2))){
var state_45336__$1 = state_45336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45336__$1,(4),in$);
} else {
if((state_val_45337 === (23))){
var inst_45330 = (state_45336[(2)]);
var state_45336__$1 = state_45336;
var statearr_45358_46090 = state_45336__$1;
(statearr_45358_46090[(2)] = inst_45330);

(statearr_45358_46090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (19))){
var inst_45317 = (state_45336[(2)]);
var state_45336__$1 = state_45336;
var statearr_45359_46091 = state_45336__$1;
(statearr_45359_46091[(2)] = inst_45317);

(statearr_45359_46091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (11))){
var inst_45288 = (state_45336[(9)]);
var inst_45302 = (state_45336[(7)]);
var inst_45302__$1 = cljs.core.seq(inst_45288);
var state_45336__$1 = (function (){var statearr_45360 = state_45336;
(statearr_45360[(7)] = inst_45302__$1);

return statearr_45360;
})();
if(inst_45302__$1){
var statearr_45361_46092 = state_45336__$1;
(statearr_45361_46092[(1)] = (14));

} else {
var statearr_45362_46093 = state_45336__$1;
(statearr_45362_46093[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (9))){
var inst_45324 = (state_45336[(2)]);
var inst_45325 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45336__$1 = (function (){var statearr_45363 = state_45336;
(statearr_45363[(15)] = inst_45324);

return statearr_45363;
})();
if(cljs.core.truth_(inst_45325)){
var statearr_45364_46094 = state_45336__$1;
(statearr_45364_46094[(1)] = (21));

} else {
var statearr_45365_46095 = state_45336__$1;
(statearr_45365_46095[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (5))){
var inst_45280 = cljs.core.async.close_BANG_(out);
var state_45336__$1 = state_45336;
var statearr_45366_46096 = state_45336__$1;
(statearr_45366_46096[(2)] = inst_45280);

(statearr_45366_46096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (14))){
var inst_45302 = (state_45336[(7)]);
var inst_45304 = cljs.core.chunked_seq_QMARK_(inst_45302);
var state_45336__$1 = state_45336;
if(inst_45304){
var statearr_45367_46097 = state_45336__$1;
(statearr_45367_46097[(1)] = (17));

} else {
var statearr_45368_46098 = state_45336__$1;
(statearr_45368_46098[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (16))){
var inst_45320 = (state_45336[(2)]);
var state_45336__$1 = state_45336;
var statearr_45369_46099 = state_45336__$1;
(statearr_45369_46099[(2)] = inst_45320);

(statearr_45369_46099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45337 === (10))){
var inst_45289 = (state_45336[(10)]);
var inst_45291 = (state_45336[(11)]);
var inst_45296 = cljs.core._nth(inst_45289,inst_45291);
var state_45336__$1 = state_45336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45336__$1,(13),out,inst_45296);
} else {
if((state_val_45337 === (18))){
var inst_45302 = (state_45336[(7)]);
var inst_45311 = cljs.core.first(inst_45302);
var state_45336__$1 = state_45336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45336__$1,(20),out,inst_45311);
} else {
if((state_val_45337 === (8))){
var inst_45291 = (state_45336[(11)]);
var inst_45290 = (state_45336[(12)]);
var inst_45293 = (inst_45291 < inst_45290);
var inst_45294 = inst_45293;
var state_45336__$1 = state_45336;
if(cljs.core.truth_(inst_45294)){
var statearr_45370_46107 = state_45336__$1;
(statearr_45370_46107[(1)] = (10));

} else {
var statearr_45371_46108 = state_45336__$1;
(statearr_45371_46108[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43957__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43957__auto____0 = (function (){
var statearr_45372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45372[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43957__auto__);

(statearr_45372[(1)] = (1));

return statearr_45372;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43957__auto____1 = (function (state_45336){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_45336);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e45373){var ex__43960__auto__ = e45373;
var statearr_45374_46109 = state_45336;
(statearr_45374_46109[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_45336[(4)]))){
var statearr_45375_46113 = state_45336;
(statearr_45375_46113[(1)] = cljs.core.first((state_45336[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46114 = state_45336;
state_45336 = G__46114;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43957__auto__ = function(state_45336){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43957__auto____1.call(this,state_45336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43957__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43957__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_45376 = f__44028__auto__();
(statearr_45376[(6)] = c__44027__auto__);

return statearr_45376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));

return c__44027__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45378 = arguments.length;
switch (G__45378) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45380 = arguments.length;
switch (G__45380) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45382 = arguments.length;
switch (G__45382) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44027__auto___46125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_45406){
var state_val_45407 = (state_45406[(1)]);
if((state_val_45407 === (7))){
var inst_45401 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45408_46129 = state_45406__$1;
(statearr_45408_46129[(2)] = inst_45401);

(statearr_45408_46129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (1))){
var inst_45383 = null;
var state_45406__$1 = (function (){var statearr_45409 = state_45406;
(statearr_45409[(7)] = inst_45383);

return statearr_45409;
})();
var statearr_45410_46130 = state_45406__$1;
(statearr_45410_46130[(2)] = null);

(statearr_45410_46130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (4))){
var inst_45386 = (state_45406[(8)]);
var inst_45386__$1 = (state_45406[(2)]);
var inst_45387 = (inst_45386__$1 == null);
var inst_45388 = cljs.core.not(inst_45387);
var state_45406__$1 = (function (){var statearr_45411 = state_45406;
(statearr_45411[(8)] = inst_45386__$1);

return statearr_45411;
})();
if(inst_45388){
var statearr_45412_46131 = state_45406__$1;
(statearr_45412_46131[(1)] = (5));

} else {
var statearr_45413_46132 = state_45406__$1;
(statearr_45413_46132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (6))){
var state_45406__$1 = state_45406;
var statearr_45414_46133 = state_45406__$1;
(statearr_45414_46133[(2)] = null);

(statearr_45414_46133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (3))){
var inst_45403 = (state_45406[(2)]);
var inst_45404 = cljs.core.async.close_BANG_(out);
var state_45406__$1 = (function (){var statearr_45415 = state_45406;
(statearr_45415[(9)] = inst_45403);

return statearr_45415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45406__$1,inst_45404);
} else {
if((state_val_45407 === (2))){
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45406__$1,(4),ch);
} else {
if((state_val_45407 === (11))){
var inst_45386 = (state_45406[(8)]);
var inst_45395 = (state_45406[(2)]);
var inst_45383 = inst_45386;
var state_45406__$1 = (function (){var statearr_45416 = state_45406;
(statearr_45416[(7)] = inst_45383);

(statearr_45416[(10)] = inst_45395);

return statearr_45416;
})();
var statearr_45417_46134 = state_45406__$1;
(statearr_45417_46134[(2)] = null);

(statearr_45417_46134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (9))){
var inst_45386 = (state_45406[(8)]);
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45406__$1,(11),out,inst_45386);
} else {
if((state_val_45407 === (5))){
var inst_45386 = (state_45406[(8)]);
var inst_45383 = (state_45406[(7)]);
var inst_45390 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45386,inst_45383);
var state_45406__$1 = state_45406;
if(inst_45390){
var statearr_45419_46136 = state_45406__$1;
(statearr_45419_46136[(1)] = (8));

} else {
var statearr_45420_46137 = state_45406__$1;
(statearr_45420_46137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (10))){
var inst_45398 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45421_46139 = state_45406__$1;
(statearr_45421_46139[(2)] = inst_45398);

(statearr_45421_46139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (8))){
var inst_45383 = (state_45406[(7)]);
var tmp45418 = inst_45383;
var inst_45383__$1 = tmp45418;
var state_45406__$1 = (function (){var statearr_45422 = state_45406;
(statearr_45422[(7)] = inst_45383__$1);

return statearr_45422;
})();
var statearr_45423_46140 = state_45406__$1;
(statearr_45423_46140[(2)] = null);

(statearr_45423_46140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_45424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45424[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_45424[(1)] = (1));

return statearr_45424;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_45406){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_45406);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e45425){var ex__43960__auto__ = e45425;
var statearr_45426_46141 = state_45406;
(statearr_45426_46141[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_45406[(4)]))){
var statearr_45427_46142 = state_45406;
(statearr_45427_46142[(1)] = cljs.core.first((state_45406[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46143 = state_45406;
state_45406 = G__46143;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_45406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_45406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_45428 = f__44028__auto__();
(statearr_45428[(6)] = c__44027__auto___46125);

return statearr_45428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45430 = arguments.length;
switch (G__45430) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44027__auto___46145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_45468){
var state_val_45469 = (state_45468[(1)]);
if((state_val_45469 === (7))){
var inst_45464 = (state_45468[(2)]);
var state_45468__$1 = state_45468;
var statearr_45470_46146 = state_45468__$1;
(statearr_45470_46146[(2)] = inst_45464);

(statearr_45470_46146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (1))){
var inst_45431 = (new Array(n));
var inst_45432 = inst_45431;
var inst_45433 = (0);
var state_45468__$1 = (function (){var statearr_45471 = state_45468;
(statearr_45471[(7)] = inst_45432);

(statearr_45471[(8)] = inst_45433);

return statearr_45471;
})();
var statearr_45472_46147 = state_45468__$1;
(statearr_45472_46147[(2)] = null);

(statearr_45472_46147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (4))){
var inst_45436 = (state_45468[(9)]);
var inst_45436__$1 = (state_45468[(2)]);
var inst_45437 = (inst_45436__$1 == null);
var inst_45438 = cljs.core.not(inst_45437);
var state_45468__$1 = (function (){var statearr_45473 = state_45468;
(statearr_45473[(9)] = inst_45436__$1);

return statearr_45473;
})();
if(inst_45438){
var statearr_45474_46148 = state_45468__$1;
(statearr_45474_46148[(1)] = (5));

} else {
var statearr_45475_46149 = state_45468__$1;
(statearr_45475_46149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (15))){
var inst_45458 = (state_45468[(2)]);
var state_45468__$1 = state_45468;
var statearr_45476_46150 = state_45468__$1;
(statearr_45476_46150[(2)] = inst_45458);

(statearr_45476_46150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (13))){
var state_45468__$1 = state_45468;
var statearr_45477_46151 = state_45468__$1;
(statearr_45477_46151[(2)] = null);

(statearr_45477_46151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (6))){
var inst_45433 = (state_45468[(8)]);
var inst_45454 = (inst_45433 > (0));
var state_45468__$1 = state_45468;
if(cljs.core.truth_(inst_45454)){
var statearr_45478_46152 = state_45468__$1;
(statearr_45478_46152[(1)] = (12));

} else {
var statearr_45479_46153 = state_45468__$1;
(statearr_45479_46153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (3))){
var inst_45466 = (state_45468[(2)]);
var state_45468__$1 = state_45468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45468__$1,inst_45466);
} else {
if((state_val_45469 === (12))){
var inst_45432 = (state_45468[(7)]);
var inst_45456 = cljs.core.vec(inst_45432);
var state_45468__$1 = state_45468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45468__$1,(15),out,inst_45456);
} else {
if((state_val_45469 === (2))){
var state_45468__$1 = state_45468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45468__$1,(4),ch);
} else {
if((state_val_45469 === (11))){
var inst_45448 = (state_45468[(2)]);
var inst_45449 = (new Array(n));
var inst_45432 = inst_45449;
var inst_45433 = (0);
var state_45468__$1 = (function (){var statearr_45480 = state_45468;
(statearr_45480[(7)] = inst_45432);

(statearr_45480[(8)] = inst_45433);

(statearr_45480[(10)] = inst_45448);

return statearr_45480;
})();
var statearr_45481_46154 = state_45468__$1;
(statearr_45481_46154[(2)] = null);

(statearr_45481_46154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (9))){
var inst_45432 = (state_45468[(7)]);
var inst_45446 = cljs.core.vec(inst_45432);
var state_45468__$1 = state_45468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45468__$1,(11),out,inst_45446);
} else {
if((state_val_45469 === (5))){
var inst_45432 = (state_45468[(7)]);
var inst_45433 = (state_45468[(8)]);
var inst_45441 = (state_45468[(11)]);
var inst_45436 = (state_45468[(9)]);
var inst_45440 = (inst_45432[inst_45433] = inst_45436);
var inst_45441__$1 = (inst_45433 + (1));
var inst_45442 = (inst_45441__$1 < n);
var state_45468__$1 = (function (){var statearr_45482 = state_45468;
(statearr_45482[(12)] = inst_45440);

(statearr_45482[(11)] = inst_45441__$1);

return statearr_45482;
})();
if(cljs.core.truth_(inst_45442)){
var statearr_45483_46155 = state_45468__$1;
(statearr_45483_46155[(1)] = (8));

} else {
var statearr_45484_46156 = state_45468__$1;
(statearr_45484_46156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (14))){
var inst_45461 = (state_45468[(2)]);
var inst_45462 = cljs.core.async.close_BANG_(out);
var state_45468__$1 = (function (){var statearr_45486 = state_45468;
(statearr_45486[(13)] = inst_45461);

return statearr_45486;
})();
var statearr_45487_46157 = state_45468__$1;
(statearr_45487_46157[(2)] = inst_45462);

(statearr_45487_46157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (10))){
var inst_45452 = (state_45468[(2)]);
var state_45468__$1 = state_45468;
var statearr_45488_46162 = state_45468__$1;
(statearr_45488_46162[(2)] = inst_45452);

(statearr_45488_46162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45469 === (8))){
var inst_45432 = (state_45468[(7)]);
var inst_45441 = (state_45468[(11)]);
var tmp45485 = inst_45432;
var inst_45432__$1 = tmp45485;
var inst_45433 = inst_45441;
var state_45468__$1 = (function (){var statearr_45489 = state_45468;
(statearr_45489[(7)] = inst_45432__$1);

(statearr_45489[(8)] = inst_45433);

return statearr_45489;
})();
var statearr_45490_46163 = state_45468__$1;
(statearr_45490_46163[(2)] = null);

(statearr_45490_46163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_45491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45491[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_45491[(1)] = (1));

return statearr_45491;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_45468){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_45468);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e45492){var ex__43960__auto__ = e45492;
var statearr_45493_46164 = state_45468;
(statearr_45493_46164[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_45468[(4)]))){
var statearr_45494_46165 = state_45468;
(statearr_45494_46165[(1)] = cljs.core.first((state_45468[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46166 = state_45468;
state_45468 = G__46166;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_45468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_45468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_45495 = f__44028__auto__();
(statearr_45495[(6)] = c__44027__auto___46145);

return statearr_45495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45497 = arguments.length;
switch (G__45497) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44027__auto___46168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44028__auto__ = (function (){var switch__43956__auto__ = (function (state_45542){
var state_val_45543 = (state_45542[(1)]);
if((state_val_45543 === (7))){
var inst_45538 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45544_46173 = state_45542__$1;
(statearr_45544_46173[(2)] = inst_45538);

(statearr_45544_46173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (1))){
var inst_45498 = [];
var inst_45499 = inst_45498;
var inst_45500 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45542__$1 = (function (){var statearr_45545 = state_45542;
(statearr_45545[(7)] = inst_45500);

(statearr_45545[(8)] = inst_45499);

return statearr_45545;
})();
var statearr_45546_46174 = state_45542__$1;
(statearr_45546_46174[(2)] = null);

(statearr_45546_46174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (4))){
var inst_45503 = (state_45542[(9)]);
var inst_45503__$1 = (state_45542[(2)]);
var inst_45504 = (inst_45503__$1 == null);
var inst_45505 = cljs.core.not(inst_45504);
var state_45542__$1 = (function (){var statearr_45547 = state_45542;
(statearr_45547[(9)] = inst_45503__$1);

return statearr_45547;
})();
if(inst_45505){
var statearr_45548_46176 = state_45542__$1;
(statearr_45548_46176[(1)] = (5));

} else {
var statearr_45549_46177 = state_45542__$1;
(statearr_45549_46177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (15))){
var inst_45499 = (state_45542[(8)]);
var inst_45530 = cljs.core.vec(inst_45499);
var state_45542__$1 = state_45542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45542__$1,(18),out,inst_45530);
} else {
if((state_val_45543 === (13))){
var inst_45525 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45550_46178 = state_45542__$1;
(statearr_45550_46178[(2)] = inst_45525);

(statearr_45550_46178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (6))){
var inst_45499 = (state_45542[(8)]);
var inst_45527 = inst_45499.length;
var inst_45528 = (inst_45527 > (0));
var state_45542__$1 = state_45542;
if(cljs.core.truth_(inst_45528)){
var statearr_45551_46179 = state_45542__$1;
(statearr_45551_46179[(1)] = (15));

} else {
var statearr_45552_46180 = state_45542__$1;
(statearr_45552_46180[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (17))){
var inst_45535 = (state_45542[(2)]);
var inst_45536 = cljs.core.async.close_BANG_(out);
var state_45542__$1 = (function (){var statearr_45553 = state_45542;
(statearr_45553[(10)] = inst_45535);

return statearr_45553;
})();
var statearr_45554_46181 = state_45542__$1;
(statearr_45554_46181[(2)] = inst_45536);

(statearr_45554_46181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (3))){
var inst_45540 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45542__$1,inst_45540);
} else {
if((state_val_45543 === (12))){
var inst_45499 = (state_45542[(8)]);
var inst_45518 = cljs.core.vec(inst_45499);
var state_45542__$1 = state_45542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45542__$1,(14),out,inst_45518);
} else {
if((state_val_45543 === (2))){
var state_45542__$1 = state_45542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45542__$1,(4),ch);
} else {
if((state_val_45543 === (11))){
var inst_45507 = (state_45542[(11)]);
var inst_45503 = (state_45542[(9)]);
var inst_45499 = (state_45542[(8)]);
var inst_45515 = inst_45499.push(inst_45503);
var tmp45555 = inst_45499;
var inst_45499__$1 = tmp45555;
var inst_45500 = inst_45507;
var state_45542__$1 = (function (){var statearr_45556 = state_45542;
(statearr_45556[(7)] = inst_45500);

(statearr_45556[(8)] = inst_45499__$1);

(statearr_45556[(12)] = inst_45515);

return statearr_45556;
})();
var statearr_45557_46183 = state_45542__$1;
(statearr_45557_46183[(2)] = null);

(statearr_45557_46183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (9))){
var inst_45500 = (state_45542[(7)]);
var inst_45511 = cljs.core.keyword_identical_QMARK_(inst_45500,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45542__$1 = state_45542;
var statearr_45558_46184 = state_45542__$1;
(statearr_45558_46184[(2)] = inst_45511);

(statearr_45558_46184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (5))){
var inst_45507 = (state_45542[(11)]);
var inst_45503 = (state_45542[(9)]);
var inst_45500 = (state_45542[(7)]);
var inst_45508 = (state_45542[(13)]);
var inst_45507__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45503) : f.call(null,inst_45503));
var inst_45508__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45507__$1,inst_45500);
var state_45542__$1 = (function (){var statearr_45559 = state_45542;
(statearr_45559[(11)] = inst_45507__$1);

(statearr_45559[(13)] = inst_45508__$1);

return statearr_45559;
})();
if(inst_45508__$1){
var statearr_45560_46186 = state_45542__$1;
(statearr_45560_46186[(1)] = (8));

} else {
var statearr_45561_46187 = state_45542__$1;
(statearr_45561_46187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (14))){
var inst_45507 = (state_45542[(11)]);
var inst_45503 = (state_45542[(9)]);
var inst_45520 = (state_45542[(2)]);
var inst_45521 = [];
var inst_45522 = inst_45521.push(inst_45503);
var inst_45499 = inst_45521;
var inst_45500 = inst_45507;
var state_45542__$1 = (function (){var statearr_45562 = state_45542;
(statearr_45562[(7)] = inst_45500);

(statearr_45562[(8)] = inst_45499);

(statearr_45562[(14)] = inst_45522);

(statearr_45562[(15)] = inst_45520);

return statearr_45562;
})();
var statearr_45563_46191 = state_45542__$1;
(statearr_45563_46191[(2)] = null);

(statearr_45563_46191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (16))){
var state_45542__$1 = state_45542;
var statearr_45564_46192 = state_45542__$1;
(statearr_45564_46192[(2)] = null);

(statearr_45564_46192[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (10))){
var inst_45513 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
if(cljs.core.truth_(inst_45513)){
var statearr_45565_46193 = state_45542__$1;
(statearr_45565_46193[(1)] = (11));

} else {
var statearr_45566_46194 = state_45542__$1;
(statearr_45566_46194[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (18))){
var inst_45532 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45567_46195 = state_45542__$1;
(statearr_45567_46195[(2)] = inst_45532);

(statearr_45567_46195[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (8))){
var inst_45508 = (state_45542[(13)]);
var state_45542__$1 = state_45542;
var statearr_45568_46196 = state_45542__$1;
(statearr_45568_46196[(2)] = inst_45508);

(statearr_45568_46196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43957__auto__ = null;
var cljs$core$async$state_machine__43957__auto____0 = (function (){
var statearr_45569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45569[(0)] = cljs$core$async$state_machine__43957__auto__);

(statearr_45569[(1)] = (1));

return statearr_45569;
});
var cljs$core$async$state_machine__43957__auto____1 = (function (state_45542){
while(true){
var ret_value__43958__auto__ = (function (){try{while(true){
var result__43959__auto__ = switch__43956__auto__(state_45542);
if(cljs.core.keyword_identical_QMARK_(result__43959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43959__auto__;
}
break;
}
}catch (e45570){var ex__43960__auto__ = e45570;
var statearr_45571_46197 = state_45542;
(statearr_45571_46197[(2)] = ex__43960__auto__);


if(cljs.core.seq((state_45542[(4)]))){
var statearr_45572_46198 = state_45542;
(statearr_45572_46198[(1)] = cljs.core.first((state_45542[(4)])));

} else {
throw ex__43960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46199 = state_45542;
state_45542 = G__46199;
continue;
} else {
return ret_value__43958__auto__;
}
break;
}
});
cljs$core$async$state_machine__43957__auto__ = function(state_45542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43957__auto____1.call(this,state_45542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43957__auto____0;
cljs$core$async$state_machine__43957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43957__auto____1;
return cljs$core$async$state_machine__43957__auto__;
})()
})();
var state__44029__auto__ = (function (){var statearr_45573 = f__44028__auto__();
(statearr_45573[(6)] = c__44027__auto___46168);

return statearr_45573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44029__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
