(()=>{var n={904:(n,e,t)=>{"use strict";t.d(e,{c:()=>C});var o=t(648),r=t.n(o),a=t(312),i=t.n(a),c=t(536),s=t.n(c),l=new URL(t(496),t.b),A=new URL(t(912),t.b),p=new URL(t(660),t.b),u=i()(r()),d=s()(l),f=s()(A),m=s()(p);u.push([n.id,`@font-face {\n    font-family: Ringift;\n    src: url(${d});\n}\n\n@font-face {\n    font-family: Cormorant-Italic;\n    src: url(${f});\n}\n\n:root {\n    --black-transparent: rgba(25,25,25,0.95);\n}\n\nbody {\n    height: 100vh;\n    background-image: url(${m});\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-top: 32px;\n    padding-bottom: 32px;\n\n    display: grid;\n    grid-template: 128px 1fr / 50%;\n    justify-content: center;\n    gap: 16px;\n}\n\nheader {\n    color: white;\n    background-color: var(--black-transparent);\n    display: grid;\n    grid-template-rows: 80px 48px;\n}\n\nheader > h1 {\n    font: 4rem Ringift, Helvetica, sans-serif;\n    align-self: center;\n    text-align: center;\n    margin: 0;\n}\n\nnav {\n    align-self: stretch;\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n}\n\nnav > button {\n    flex: 1;\n    font: 1rem Roboto, Helvetica, sans-serif;\n    color: white;\n    border: none;\n    background-color: rgba(0,0,0,0);\n}\n\nnav > button:active {\n    background-color: rgba(150,150,150,0.2);\n}\n\n#content {\n    color: white;\n    background-color: var(--black-transparent);\n}\n\n.home {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.home > * {\n    margin-right: 10%;\n    margin-left: 10%;\n}\n\n.slogan-container {\n    position: relative;\n    margin-top: 32px;\n}\n\n.slogan-container > img {\n    width: 100%;\n}\n\n.slogan-container > h3 {\n    position: absolute;\n    width: 100%;\n    margin: 0;\n    top: 38%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font: 4rem Cormorant-Italic, Helvetica, sans-serif;\n    text-shadow: 1px 1px 2px black;\n}\n\n.home > p {\n    font: 1.3rem Roboto, Helvetica, sans-serif;\n}\n\n.home > p > a {\n    font-style: italic;\n    color: white;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,oBAAoB;IACpB,4CAA+B;AACnC;;AAEA;IACI,6BAA6B;IAC7B,4CAAwC;AAC5C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,yDAAgD;IAChD,4BAA4B;IAC5B,qBAAqB;IACrB,iBAAiB;IACjB,oBAAoB;;IAEpB,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,0CAA0C;IAC1C,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,yCAAyC;IACzC,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,OAAO;IACP,wCAAwC;IACxC,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kDAAkD;IAClD,8BAA8B;AAClC;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB",sourcesContent:["@font-face {\n    font-family: Ringift;\n    src: url('./fonts/Ringift.ttf');\n}\n\n@font-face {\n    font-family: Cormorant-Italic;\n    src: url('./fonts/Cormorant-Italic.ttf');\n}\n\n:root {\n    --black-transparent: rgba(25,25,25,0.95);\n}\n\nbody {\n    height: 100vh;\n    background-image: url('./images/restaurant.jpg');\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-top: 32px;\n    padding-bottom: 32px;\n\n    display: grid;\n    grid-template: 128px 1fr / 50%;\n    justify-content: center;\n    gap: 16px;\n}\n\nheader {\n    color: white;\n    background-color: var(--black-transparent);\n    display: grid;\n    grid-template-rows: 80px 48px;\n}\n\nheader > h1 {\n    font: 4rem Ringift, Helvetica, sans-serif;\n    align-self: center;\n    text-align: center;\n    margin: 0;\n}\n\nnav {\n    align-self: stretch;\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n}\n\nnav > button {\n    flex: 1;\n    font: 1rem Roboto, Helvetica, sans-serif;\n    color: white;\n    border: none;\n    background-color: rgba(0,0,0,0);\n}\n\nnav > button:active {\n    background-color: rgba(150,150,150,0.2);\n}\n\n#content {\n    color: white;\n    background-color: var(--black-transparent);\n}\n\n.home {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.home > * {\n    margin-right: 10%;\n    margin-left: 10%;\n}\n\n.slogan-container {\n    position: relative;\n    margin-top: 32px;\n}\n\n.slogan-container > img {\n    width: 100%;\n}\n\n.slogan-container > h3 {\n    position: absolute;\n    width: 100%;\n    margin: 0;\n    top: 38%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font: 4rem Cormorant-Italic, Helvetica, sans-serif;\n    text-shadow: 1px 1px 2px black;\n}\n\n.home > p {\n    font: 1.3rem Roboto, Helvetica, sans-serif;\n}\n\n.home > p > a {\n    font-style: italic;\n    color: white;\n}"],sourceRoot:""}]);const C=u},312:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var A=[].concat(n[l]);o&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),r&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=r):A[4]="".concat(r)),e.push(A))}},e}},536:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},648:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},606:n=>{n.exports=[["Burrata","creamy mozarella","olive oil","tomatoes","24zl"],["Bruschetta","crunchy bread","tomatoes","olive oil","basil","16zl"],["Focaccia","pizza dough","oregano","sauce","20zl"]]},48:n=>{n.exports=[["Tiramisu","mascarpone","sponge cake","cacao","16zl"],["Creme brulee","18zl"],["Ice cream","16zl"]]},488:n=>{n.exports=[["Spaghetti Bolognese","tomato sauce","meat","basil","25zl"],["Carbonara","cheese sauce","bacon","parmesan","28zl"],["Seafood","spice sauce","seafood","basil","36zl"]]},128:n=>{n.exports=[["Margherita","tomato sauce","mozarella","oregano","28zl"],["Cappriciosa","tomato sauce","mozarella","oregano","ham","muschrooms","onion","34zl"],["Spinacia","alfredo sauce","spinach","dried tomato","35zl"],[""]]},596:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],A=a[l]||0,p="".concat(l," ").concat(A);a[l]=A+1;var u=t(p),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(d);else{var f=r(d,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var A=t(a[l]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}a=s}}},176:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},808:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},912:(n,e,t)=>{"use strict";n.exports=t.p+"7e549ebb24d7c7022095.ttf"},496:(n,e,t)=>{"use strict";n.exports=t.p+"1acfad8cadadccb6dd79.ttf"},660:(n,e,t)=>{"use strict";n.exports=t.p+"45f31b1d441baf7074ec.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(596),e=t.n(n),o=t(520),r=t.n(o),a=t(176),i=t.n(a),c=t(120),s=t.n(c),l=t(808),A=t.n(l),p=t(936),u=t.n(p),d=t(904),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=A(),e()(d.c,f),d.c&&d.c.locals&&d.c.locals;const m=t.p+"8cdc1fa453a373c87c0f.jpg",C={displayContent:n=>{const e=document.createElement("div"),t=document.createElement("img"),o=document.createElement("h3"),r=document.createElement("p"),a=document.createElement("p"),i=document.createElement("a"),c=document.createElement("p"),s=document.createElement("p");e.classList.add("slogan-container"),t.src=m,o.textContent="Unique Italian taste",r.textContent="We invite you to try our most delicious italian meals in our restaurant in heart of Poznan",a.textContent="Check out our ",i.textContent="menu",c.textContent="Book table: +48 999 999 999",s.textContent="We are open everyday 12PM - 10PM",i.href="./menu.html",a.appendChild(i),e.appendChild(t),e.appendChild(o),n.appendChild(e),n.appendChild(r),n.appendChild(a),n.appendChild(c),n.appendChild(s),n.classList.add("home")}},g=C;t(606),t(128),t(488),t(48);const h=(()=>{const n=document.createElement("div");return n.classList.add("menu-container"),{displayContent:e=>{e.appendChild((()=>{const n=document.createElement("button"),e=document.createElement("button"),t=document.createElement("button"),o=document.createElement("button");n.textContent="Appetizers",e.textContent="Pizza",t.textContent="Pasta",o.textContent="Desserts";const r=document.createElement("div");return r.classList.add("tabs-container"),r.appendChild(n),r.appendChild(e),r.appendChild(t),r.appendChild(o),r})()),e.appendChild(n)}}})(),b=n=>{},v=n=>{};function I(n){for(;n.firstChild;)n.removeChild(n.lastChild)}const y=document.querySelector(".home-button"),B=document.querySelector(".menu-button"),x=document.querySelector(".about-button"),k=document.querySelector(".contact-button"),E=document.querySelector("#content");g.displayContent(E),y.addEventListener("click",(()=>{I(E),g.displayContent(E)})),B.addEventListener("click",(()=>{I(E),h.displayContent(E)})),x.addEventListener("click",(()=>{I(E),b(E)})),k.addEventListener("click",(()=>{I(E),v(E)}))})()})();
//# sourceMappingURL=main.js.map