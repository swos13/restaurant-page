(()=>{"use strict";var n={904:(n,e,t)=>{t.d(e,{c:()=>d});var r=t(648),o=t.n(r),a=t(312),c=t.n(a),i=t(536),s=t.n(i),u=new URL(t(660),t.b),p=c()(o()),l=s()(u);p.push([n.id,`\n:root {\n    --black-transparent: rgba(25,25,25,0.95);\n}\n\nbody {\n    height: 100vh;\n    background-image: url(${l});\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-top: 32px;\n    padding-bottom: 32px;\n\n    display: grid;\n    grid-template: 128px 1fr / 50%;\n    justify-content: center;\n    gap: 16px;\n}\n\nheader {\n    color: white;\n    background-color: var(--black-transparent);\n    display: grid;\n    grid-template-rows: repeat(2, 64px);\n}\n\nheader > h1 {\n    font: 2rem Roboto, Helvetica, sans-serif;\n    align-self: center;\n    text-align: center;\n    margin: 0;\n}\n\nnav {\n    align-self: stretch;\n    \n    display: flex;\n    justify-content: center;\n    gap: 16px;\n}\n\nnav > button {\n    flex: 1;\n    font: 1.2rem Roboto, Helvetica, sans-serif;\n    color: white;\n    border: none;\n    background-color: rgba(0,0,0,0);\n}\n\nnav > button:active {\n    background-color: rgba(150,150,150,0.2);\n}\n\n#content {\n    color: white;\n    background-color: var(--black-transparent);\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:";AACA;IACI,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,yDAAgD;IAChD,4BAA4B;IAC5B,qBAAqB;IACrB,iBAAiB;IACjB,oBAAoB;;IAEpB,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,0CAA0C;IAC1C,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,wCAAwC;IACxC,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,mBAAmB;;IAEnB,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,OAAO;IACP,0CAA0C;IAC1C,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,0CAA0C;AAC9C",sourcesContent:["\n:root {\n    --black-transparent: rgba(25,25,25,0.95);\n}\n\nbody {\n    height: 100vh;\n    background-image: url('./images/restaurant.jpg');\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-top: 32px;\n    padding-bottom: 32px;\n\n    display: grid;\n    grid-template: 128px 1fr / 50%;\n    justify-content: center;\n    gap: 16px;\n}\n\nheader {\n    color: white;\n    background-color: var(--black-transparent);\n    display: grid;\n    grid-template-rows: repeat(2, 64px);\n}\n\nheader > h1 {\n    font: 2rem Roboto, Helvetica, sans-serif;\n    align-self: center;\n    text-align: center;\n    margin: 0;\n}\n\nnav {\n    align-self: stretch;\n    \n    display: flex;\n    justify-content: center;\n    gap: 16px;\n}\n\nnav > button {\n    flex: 1;\n    font: 1.2rem Roboto, Helvetica, sans-serif;\n    color: white;\n    border: none;\n    background-color: rgba(0,0,0,0);\n}\n\nnav > button:active {\n    background-color: rgba(150,150,150,0.2);\n}\n\n#content {\n    color: white;\n    background-color: var(--black-transparent);\n}"],sourceRoot:""}]);const d=p},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},536:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},648:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],u=r.base?s[0]+r.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=t(l),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(A);else{var f=o(A,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),u=0;u<a.length;u++){var p=t(a[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},660:(n,e,t)=>{n.exports=t.p+"45f31b1d441baf7074ec.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),o=t.n(r),a=t(176),c=t.n(a),i=t(120),s=t.n(i),u=t(808),p=t.n(u),l=t(936),d=t.n(l),A=t(904),f={};f.styleTagTransform=d(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(A.c,f),A.c&&A.c.locals&&A.c.locals;(n=>{const e=document.createElement("h3"),t=document.createElement("p"),r=document.createElement("p"),o=document.createElement("a"),a=document.createElement("p"),c=document.createElement("p");e.textContent="Unique Italian taste",t.textContent="We invite you to try our most delicious italian meals in our restaurant in heart of Poznan",r.textContent="Check out our ",o.textContent="menu",a.textContent="Book table: +48 999 999 999",c.textContent="We are open everyday 12PM - 10PM",o.href="./menu.html",r.appendChild(o),n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(a),n.appendChild(c)})(document.querySelector("#content"))})()})();
//# sourceMappingURL=main.js.map