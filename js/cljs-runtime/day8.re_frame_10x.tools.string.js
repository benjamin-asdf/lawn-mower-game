goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5772__auto__ = [];
var len__5766__auto___41886 = arguments.length;
var i__5767__auto___41887 = (0);
while(true){
if((i__5767__auto___41887 < len__5766__auto___41886)){
args__5772__auto__.push((arguments[i__5767__auto___41887]));

var G__41889 = (i__5767__auto___41887 + (1));
i__5767__auto___41887 = G__41889;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__41863){
var vec__41864 = p__41863;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41864,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5043__auto__ = plural;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq41856){
var G__41857 = cljs.core.first(seq41856);
var seq41856__$1 = cljs.core.next(seq41856);
var G__41858 = cljs.core.first(seq41856__$1);
var seq41856__$2 = cljs.core.next(seq41856__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41857,G__41858,seq41856__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___41894 = arguments.length;
var i__5767__auto___41898 = (0);
while(true){
if((i__5767__auto___41898 < len__5766__auto___41894)){
args__5772__auto__.push((arguments[i__5767__auto___41898]));

var G__41899 = (i__5767__auto___41898 + (1));
i__5767__auto___41898 = G__41899;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__41870){
var vec__41871 = p__41870;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41871,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5043__auto__ = plural;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq41867){
var G__41868 = cljs.core.first(seq41867);
var seq41867__$1 = cljs.core.next(seq41867);
var G__41869 = cljs.core.first(seq41867__$1);
var seq41867__$2 = cljs.core.next(seq41867__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41868,G__41869,seq41867__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
