"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=o(function(O,s){
var t=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-pow/dist');function y(e,r,n){return t(r)||t(n)||t(e)||r<=0||n<=0||e<0||e>1?NaN:n/N(1-e,1/r)}s.exports=y
});var q=o(function(R,c){
var x=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-pow/dist');function d(e,r){var n;if(u(e)||u(r)||e<=0||r<=0)return x(NaN);return n=1/e,f;function f(i){return u(i)||i<0||i>1?NaN:r/w(1-i,n)}}c.exports=d
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=a(),F=q();m(v,"factory",F);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
