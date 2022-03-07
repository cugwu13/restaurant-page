(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    --bg-color: rgb(255, 230, 234);\n    --secondary-color: #ba1818;\n    --nav-bg-color: #ffffff;\n    --input-outline-color: rgb(160, 160, 160);\n    --default-font: 'Mukta', 'sans-serif';\n}\n\nbody {\n    background-color: var(--bg-color);\n    height: 100vh;\n}\n\n.content {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 75px 5fr 2fr; \n}\n\n.nav {\n    background-color: var(--nav-bg-color);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 14px;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.nav > ul {\n    display: flex;\n    justify-content: end;\n    gap: 50px;\n}\n\nul {\n    list-style: none;\n    font-family: var(--default-font);\n    font-size: 1.6rem;\n    font-weight: bold;\n}\n\n.nav > ul > li:hover {\n    text-decoration: underline;\n}\n\n.underline {\n    color: var(--secondary-color);\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    align-items: center;\n    gap: 6px;\n}\n\n.home-title {\n    font-family: 'Lobster', 'sans-serif';\n    font-size: 4rem;\n}\n\n.nav-logo, .home-logo {\n    border-radius: 50%;\n    height: auto;\n}\n\n.nav-logo {\n    width: 50px;\n}\n\n.home-logo {\n    width: 250px;\n}\n\n.home-footer {\n    font-family: var(--default-font);\n    font-size: 1.2rem;\n    font-weight: 400;\n    padding: 30px;\n    text-align: center;\n    justify-self: center;\n    width: 75%;\n}\n\n.items-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-auto-rows: minmax(250px, 350px);\n    gap: 16px;\n    padding: 30px 60px;\n}\n\n.item {\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 2px 2px 2px lightgray;\n    font-family: var(--default-font);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding: 16px;\n    transition: .2s;\n}\n\n.item > p {\n    font-size: .8rem;\n    text-align: center;\n}\n\n.item:hover {\n    transform: scale(1.04);\n}\n\n.food-img {\n    width: 200px;\n    height: auto;\n}\n\n.contact-form {\n    background-color: white;\n    border-radius: 14px;\n    box-shadow: 2px 2px 2px lightgray;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    gap: 14px;\n    font-family: var(--default-font);\n    padding: 20px 40px;\n    margin: 20px 0;\n}\n\n.contact-form > div {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    gap: 10px;\n}\n\n.contact-form > h2 {\n    justify-self: center;\n    margin-bottom: 20px;\n}\n\ninput, textarea {\n    padding: 4px;\n    font-family: var(--default-font);\n    border: 1px solid var(--input-outline-color);\n    border-radius: 6px;\n}\n\ntextarea {\n    resize: none;\n}\n\nlabel {\n    color: rgb(85, 85, 85);\n    justify-self: end;\n    align-self: start;\n}\n\n.submit {\n    background-color:rgb(130, 199, 255);\n    border: none;\n    border-radius: 14px;\n    color: white;\n    font-weight: bold;\n    justify-self: center;\n    padding: 10px 30px;\n    transition: .2s;\n}\n\n.submit:hover {\n    filter: brightness(85%);\n}\n\n.contact-footer {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n    justify-content: center;\n    align-items: center;\n    font-family: var(--default-font);\n}\n\n.info {\n    line-height: 1.4rem;\n    text-align: center;\n}\n\n.icons {\n    display: flex;\n    gap: 12px;\n}\n\n.fa {\n    color: var(--secondary-color);\n    font-size: 30px;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},143:(e,n,t)=>{e.exports=t.p+"94aac26634cfe3f1244c.jpg"},572:(e,n,t)=>{e.exports=t.p+"02ac22816f4ecb1fa7d8.png"},926:(e,n,t)=>{e.exports=t.p+"783ce88758885a467d86.jpg"},730:(e,n,t)=>{e.exports=t.p+"71c3b87096e65a436329.jpg"},530:(e,n,t)=>{e.exports=t.p+"4777e3a1c4cabbecb2ca.jpg"},902:(e,n,t)=>{e.exports=t.p+"4b9b7d3a1b0110af837e.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(572);class g{constructor(){this.content=document.querySelector(".content")}logo(e){const n=new Image;return n.src=h,n.classList.add(e),n}main(){const e=document.createElement("div");e.classList.add("main"),e.append((()=>{const e=document.createElement("h1");return e.classList.add("home-title"),e.innerText="Good Eats",e})(),this.logo("home-logo")),this.content.appendChild(e)}footer(){const e=document.createElement("p");e.classList.add("home-footer"),e.innerText="Good Eats is a meal prep service based in the Whooville area.                                     We value commuity and fresh food, so that's why we want                                     YOU to choose US as your go-to meal prep service!!",this.content.appendChild(e)}}const v=()=>{const e=new g;e.main(),e.footer()};var x=t(143),b=t(926),y=t(730),w=t(530),E=t(902);class T{constructor(){this.content=document.querySelector(".content")}createFoodImg(e){const n=new Image;return n.src=e,n.classList.add("food-img"),n}items(){const e=(e,n,t)=>{const o=document.createElement("div"),r=document.createElement("h3"),a=document.createElement("p");return r.innerText=e,a.innerText=n,o.classList.add("item"),o.append(r,this.createFoodImg(t),a),o},n=document.createElement("div");n.classList.add("items-container"),n.appendChild(e("Grilled Chicken Thighs","Grilled chicken thighs                                                     served with corn on the cob and baby potatoes",x)),n.appendChild(e("Pasta Salad","Lemon herb pasta salad with chickpeas,                                                     cherry tomatoes, and diced avocado",b)),n.appendChild(e("Shrimp Fried Rice","Wok-tossed fried rice with shrimp,                                                      eggs, and vegetables",y)),n.appendChild(e("Turkey Spaghetti","Spaghetti and turkey meat sauce                                                     sprinkled with fresh parmesan",w)),n.appendChild(e("Turkey Tacos","Flour tortilla tacos filled with ground turkey,                                                     shredded cheese, and lettuce with side servings of rice                                                     and refried beans",E)),this.content.appendChild(n)}}class L{constructor(){this.content=document.querySelector(".content")}get contactForm(){const e=(e,n,t,o=null,r=null)=>{const a=document.createElement("div"),i=document.createElement(e),c=document.createElement("label");return i.name=n,i.id=n,i.setAttribute("autocomplete","off"),o&&i.setAttribute("rows",o),r&&i.setAttribute("cols",r),c.setAttribute("for",n),c.innerText=t,a.append(c,i),a},n=document.createElement("form"),t=document.createElement("h2"),o=document.createElement("button");o.innerText="Submit",o.classList.add("submit"),t.innerText="Questions?",n.classList.add("contact-form"),n.append(t,e("input","name","Name"),e("textarea","response","Response",8,25),o),this.content.appendChild(n)}get contactFooter(){const e=document.createElement("div");e.classList.add("contact-footer"),e.append((()=>{const e=document.createElement("div"),n=document.createElement("p"),t=document.createElement("p"),o=document.createElement("p");return e.classList.add("info"),n.innerText="123-456-7890",t.innerText="123 Nostreet Ln, Whoville, TX",o.innerText="M - Su: 7AM - 5PM",e.append(n,t,o),e})(),(()=>{const e=document.createElement("div"),n=document.createElement("i"),t=document.createElement("i"),o=document.createElement("i");return e.classList.add("icons"),n.classList.add("fa","fa-facebook-square"),t.classList.add("fa","fa-instagram"),o.classList.add("fa","fa-twitter"),e.append(n,t,o),e})()),this.content.append(e)}}const S=e=>{const n=document.querySelectorAll(".nav li");return{underline:()=>{const t=(()=>{for(let t of n)if(t.innerText==e)return t})();(()=>{for(let e of n)e.classList.remove("underline")})(),t.classList.add("underline")}}};(new class{constructor(){this.content=document.querySelector(".content")}logo(e){const n=new Image;return n.src=h,n.classList.add(e),n}navbar(){const e=document.createElement("div"),n=document.createElement("ul");((e,n)=>{["home","menu","contact"].forEach((e=>{const t=document.createElement("li");t.innerText=e.toUpperCase(),n.appendChild(t)}))})(0,n),e.append(this.logo("nav-logo"),n),e.classList.add("nav"),this.content.appendChild(e),S("HOME").underline()}}).navbar(),v(),(()=>{const e=()=>{const e=document.querySelector(".content"),n=document.querySelectorAll(".content > *:nth-child(n + 2)");for(let t of n)e.removeChild(t)};document.querySelectorAll(".nav li").forEach((n=>n.addEventListener("click",(()=>{const t=S(n.innerText);(n=>{"MENU"==n.innerText?(e(),(new T).items()):"HOME"==n.innerText?(e(),v()):(e(),(()=>{const e=new L;e.contactForm,e.contactFooter})())})(n),t.underline()}))))})()})()})();