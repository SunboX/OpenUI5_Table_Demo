/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";function h(i,l){var g=i.toString(16);if(l){while(l>g.length){g="0"+g}}return g}var r=/[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,a=/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,H={"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;"};var f=function(g){var E=H[g];if(!E){if(a.test(g)){E="&#xfffd;"}else{E="&#x"+h(g.charCodeAt(0))+";"}H[g]=E}return E};q.sap.encodeHTML=function(S){return S.replace(r,f)};q.sap.encodeXML=function(S){return S.replace(r,f)};q.sap.escapeHTML=function(S){return S.replace(r,f)};var b=/[\x00-\x2b\x2d\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,j={};var J=function(g){var E=j[g];if(!E){var i=g.charCodeAt(0);if(i<256){E="\\x"+h(i,2)}else{E="\\u"+h(i,4)}j[g]=E}return E};q.sap.encodeJS=function(S){return S.replace(b,J)};q.sap.escapeJS=function(S){return S.replace(b,J)};var c=/[\x00-\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,u={};var U=function(g){var E=u[g];if(!E){var i=g.charCodeAt(0);if(i<128){E="%"+h(i,2)}else if(i<2048){E="%"+h((i>>6)|192,2)+"%"+h((i&63)|128,2)}else{E="%"+h((i>>12)|224,2)+"%"+h(((i>>6)&63)|128,2)+"%"+h((i&63)|128,2)}u[g]=E}return E};q.sap.encodeURL=function(S){return S.replace(c,U)};q.sap.encodeURLParameters=function(p){if(!p){return""}var g=[];q.each(p,function(n,v){if(q.type(v)==="string"){v=q.sap.encodeURL(v)}g.push(q.sap.encodeURL(n)+"="+v)});return g.join("&")};var d=/[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xff\u2028\u2029][0-9A-Fa-f]?/g;var C=function(g){var i=g.charCodeAt(0);if(g.length==1){return"\\"+h(i)}else{return"\\"+h(i)+" "+g.substr(1)}};q.sap.encodeCSS=function(S){return S.replace(d,C)};function W(p,g,i,k){if(p){this.protocol=p.toUpperCase()}if(g){this.host=g.toUpperCase()}this.port=i;this.path=k}var w=[];q.sap.clearUrlWhitelist=function(){w.splice(0,w.length)};q.sap.addUrlWhitelist=function(p,g,i,k){var E=new W(p,g,i,k);var I=w.length;w[I]=E};q.sap.removeUrlWhitelist=function(i){w.splice(i,1)};q.sap.getUrlWhitelist=function(){return w.slice()};q.sap.validateUrl=function(g){var k=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#:]*)(?::([0-9]+))?)?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(g);if(!k){return k}var p=k[1],l=k[2],P=k[3],m=k[4],Q=k[5],n=k[6];var o=/[\x00-\x24\x26-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\x7d\x7f-\uffff]/;var t=/[\x00-\x24\x26-\x29\x2b\x2c\x3a-\x3e\x5b-\x5e\x60\x7b-\x7d\x7f-\uffff]/;var v=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;if(p){p=p.toUpperCase();if(w.length<=0){if(!/^(https?|ftp)/i.test(p)){return false}}}if(l){l=l.toUpperCase()}if(m){if(p==="MAILTO"){var x=v.test(m);if(!x){return false}}else{var y=m.split("/");for(var i=0;i<y.length;i++){var x=o.test(y[i]);if(x){return false}}}}if(Q){var y=Q.split("&");for(var i=0;i<y.length;i++){var z=y[i].search("=");if(z!=-1){var A=y[i].substring(0,z);var B=y[i].substring(z+1);var D=o.test(A);var E=o.test(B);if(D||E){return false}}}}if(n){if(t.test(n)){return false}}if(w.length>0){var F=false;for(var i=0;i<w.length;i++){if(!p||!w[i].protocol||p==w[i].protocol){var O=false;if(l&&w[i].host&&/^\*/.test(w[i].host)){var G=w[i].host.slice(1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");var I=RegExp(G+"$");if(I.test(l)){O=true}}else if(!l||!w[i].host||l==w[i].host){O=true}if(O){if((!l&&!P)||!w[i].port||P==w[i].port){if(w[i].path&&/\*$/.test(w[i].path)){var K=w[i].path.slice(0,-1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");var I=RegExp("^"+K);if(I.test(m)){F=true}}else if(!w[i].path||m==w[i].path){F=true}}}}if(F){break}}if(!F){return false}}return true};q.sap._sanitizeHTML=function(g,o){return s(g,o||{uriRewriter:function(i){if(q.sap.validateUrl(i)){return i}}})};q.sap._setHTMLSanitizer=function(s){s=s||e};function e(g,o){if(!window.html||!window.html.sanitize){q.sap.require("sap.ui.thirdparty.caja-html-sanitizer");}var t=o.tagPolicy||window.html.makeTagPolicy(o.uriRewriter,o.tokenPolicy);return window.html.sanitizeWithPolicy(g,t)}var s=e;return q},false);
