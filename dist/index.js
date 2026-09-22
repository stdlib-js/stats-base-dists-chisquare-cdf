"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var u=t(function(x,a){
var n=require('@stdlib/stats-base-dists-gamma-cdf/dist');function f(e,r){return n(e,r/2,.5)}a.exports=f
});var i=t(function(d,c){
var y=require('@stdlib/stats-base-dists-gamma-cdf/dist').factory;function m(e){return y(e/2,.5)}c.exports=m
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=u(),v=i();q(o,"factory",v);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
