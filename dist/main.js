(()=>{"use strict";var e,n,t,r,o,a,c,i,s,u,p,l,d,f,v={904:(e,n,t)=>{t.d(n,{c:()=>d});var r=t(500),o=t.n(r),a=t(312),c=t.n(a),i=t(536),s=t.n(i),u=new URL(t(660),t.b),p=c()(o()),l=s()(u);p.push([e.id,`\n:root {\n    --black-transparent: rgba(25,25,25,0.95);\n}\n\nbody {\n    height: 100vh;\n    background-image: url(${l});\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-top: 32px;\n    padding-bottom: 32px;\n\n    display: grid;\n    grid-template: 64px 1fr / 50%;\n    justify-content: center;\n    gap: 16px;\n}\n\nheader {\n    background-color: var(--black-transparent);\n}\n\nnav {\n    height: 100%;\n    margin-top: auto;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n}\n\nnav > button {\n    flex: 1;\n}\n\n#content {\n    color: white;\n    background-color: var(--black-transparent);\n}`,""]);const d=p},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},536:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var v=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:v,references:1})}c.push(l)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var p=t(a[u]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},176:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},660:(e,n,t)=>{e.exports=t.p+"45f31b1d441baf7074ec.jpg"}},h={};function g(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return v[e](t,t.exports,g),t.exports}g.m=v,g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var t in n)g.o(n,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var n=g.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,g.nc=void 0,e=g(596),n=g.n(e),t=g(520),r=g.n(t),o=g(176),a=g.n(o),c=g(120),i=g.n(c),s=g(808),u=g.n(s),p=g(936),l=g.n(p),d=g(904),(f={}).styleTagTransform=l(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(d.c,f),d.c&&d.c.locals&&d.c.locals,console.log("Here we go!")})();