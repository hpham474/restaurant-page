(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>C});var a=n(601),r=n.n(a),i=n(314),o=n.n(i),c=n(417),d=n.n(c),s=new URL(n(573),n.b),u=new URL(n(149),n.b),l=new URL(n(329),n.b),m=o()(r()),p=d()(s),h=d()(u),f=d()(l);m.push([e.id,`@font-face {\n    font-family: "rich eating";\n    src: url(${p}) format(woff2),\n        url(${h}) format(woff);\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: "rich eating", sans-serif;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    background-image: url(${f});\n    background-position: center top;\n    background-size: cover;\n}\n\nnav {\n    padding-top: 1rem;\n    display: grid;\n    grid-template-columns: 10rem 10rem 10rem;\n    justify-content: center;\n    gap: 10rem;\n\n    background-color: #1e293b;\n}\n\nbutton {\n    padding: 1rem 0;\n\n    font-size: 1.5rem;\n    border-style: solid;\n    border-bottom: none;\n\n    background-color: #64748b;\n}\n\n#content {\n    max-width: 50rem;\n    margin: 5rem auto;\n    padding: 5rem;\n    background-color: #1e293b;\n    align-self: center;\n\n\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n\n    border-radius: 3rem;\n}\n\n.name {\n    padding: 2rem 2rem;\n\n    background-color: #64748b;\n\n    border-radius: 3rem;\n}\n\n.subsection {\n    margin: 0 10rem;\n    padding: 2rem 3rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    background-color: #64748b;\n\n    border-radius: 3rem;\n}\n\nh1 {\n    text-align: center;\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\np {\n    font-size: 1rem;\n}\n\n.menu-item p {\n    text-align: left;\n}\n\n.contact p {\n    text-align: left;\n    margin-left: 3rem;\n}\n\n.credits {\n    text-align: center;\n    padding: .5rem 2rem;\n}\n\na {\n    text-decoration: none;\n}\n\n.subsection:nth-child(3) > p,\n.subsection:nth-child(4) > p  {\n    text-align: center;\n}`,""]);const C=m},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);a&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var m=n(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=r(p,a);a.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}o.push(l)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var d=a(e,r),s=0;s<i.length;s++){var u=n(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=d}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},329:(e,t,n)=>{e.exports=n.p+"fb72aa01c08afedaefde.jpg"},149:(e,t,n)=>{e.exports=n.p+"e90ec8fdf51e3019971b.woff"},573:(e,t,n)=>{e.exports=n.p+"656e214fa596ca100766.woff2"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(){const e=document.createElement("div"),t=document.createElement("h1");return t.textContent="A Very Awesome Restaurant",e.classList.add("name"),e.appendChild(t),e}function t(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("p");return t.textContent="About",n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus \n        modi eius delectus dolorem quaerat, tenetur ipsam aspernatur laborum \n        suscipit rerum quae doloremque amet corrupti totam facilis molestias \n        natus, possimus qui quasi unde necessitatibus autem consectetur \n        maiores esse. Corrupti sint ad aperiam. Vel, accusamus voluptates esse \n        nostrum architecto ea nisi officia.",e.classList.add("subsection"),e.appendChild(t),e.appendChild(n),e}function a(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("p");return t.textContent="Hours",n.innerHTML="Sunday: 8:00am - 10:00pm<br>\n        Monday: 8:00am - 8:00pm<br>\n        Tuesday: 8:00am - 8:00pm<br>\n        Wednesday: 8:00am - 8:00pm<br>\n        Thursday: 8:00am - 8:00pm<br>\n        Friday: 8:00am - 10:00pm<br>\n        Saturday: 8:00am - 10:00pm",e.classList.add("subsection"),e.appendChild(t),e.appendChild(n),e}function r(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("p");return t.textContent="Location",n.textContent="1234 Locate Drive, Locationville, Location",e.classList.add("subsection"),e.appendChild(t),e.appendChild(n),e}function i(){const e=document.createElement("div"),t=document.createElement("p");return e.classList.add("subsection"),e.classList.add("credits"),t.innerHTML='<a href="https://www.freepik.com/free-photo/abstract-blur-restaurant-coffee-shop-cafe_1135843.htm#query=restaurant%20blur&position=15&from_view=keyword&track=ais_user&uuid=83e5dae8-7f7f-4e91-8f86-42e6ebe0a29f">Image by mrsiraphol</a> on Freepik',e.appendChild(t),e}var o=n(72),c=n.n(o),d=n(825),s=n.n(d),u=n(659),l=n.n(u),m=n(56),p=n.n(m),h=n(540),f=n.n(h),C=n(113),b=n.n(C),g=n(208),v={};v.styleTagTransform=b(),v.setAttributes=p(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=f(),c()(g.A,v),g.A&&g.A.locals&&g.A.locals;const E=document.querySelector(".home"),x=document.querySelector(".menu"),y=document.querySelector(".contact"),L=document.getElementById("content");E.addEventListener("click",(()=>{L.innerHTML="",L.appendChild(e()),L.appendChild(t()),L.appendChild(a()),L.appendChild(r()),L.appendChild(i())})),x.addEventListener("click",(()=>{L.innerHTML="",L.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");return t.textContent="Menu",e.classList.add("name"),e.appendChild(t),e}()),L.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("div"),a=document.createElement("h3"),r=document.createElement("p"),i=document.createElement("div"),o=document.createElement("h3"),c=document.createElement("p");return e.classList.add("subsection"),n.classList.add("menu-item"),i.classList.add("menu-item"),t.textContent="Beverages",a.textContent="Sweet Tea - $3.00",r.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis \n        magnam dolor ab ratione repellendus accusantium suscipit beatae \n        obcaecati delectus!",o.textContent="Soda - $2.75",c.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis \n        magnam dolor ab ratione repellendus accusantium suscipit beatae \n        obcaecati delectus!",n.appendChild(a),n.appendChild(r),i.appendChild(o),i.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(i),e}()),L.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("div"),a=document.createElement("h3"),r=document.createElement("p"),i=document.createElement("div"),o=document.createElement("h3"),c=document.createElement("p");return e.classList.add("subsection"),n.classList.add("menu-item"),i.classList.add("menu-item"),t.textContent="Sides",a.textContent="French Fries - $5.50",r.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis \n        magnam dolor ab ratione repellendus accusantium suscipit beatae \n        obcaecati delectus!",o.textContent="Tater Tots - $6.00",c.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis \n        magnam dolor ab ratione repellendus accusantium suscipit beatae \n        obcaecati delectus!",n.appendChild(a),n.appendChild(r),i.appendChild(o),i.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(i),e}()),L.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("div"),a=document.createElement("h3"),r=document.createElement("p"),i=document.createElement("div"),o=document.createElement("h3"),c=document.createElement("p"),d=document.createElement("div"),s=document.createElement("h3"),u=document.createElement("p");return e.classList.add("subsection"),n.classList.add("menu-item"),i.classList.add("menu-item"),d.classList.add("menu-item"),t.textContent="Main Items",a.textContent="Hamburger - $12.50",r.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis \n        magnam dolor ab ratione repellendus accusantium suscipit beatae \n        obcaecati delectus!",o.textContent="Cheeseburger- $13.00",c.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis \n        magnam dolor ab ratione repellendus accusantium suscipit beatae \n        obcaecati delectus!",s.textContent="Chicken Sandwich - $12.00",u.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis \n        magnam dolor ab ratione repellendus accusantium suscipit beatae \n        obcaecati delectus!",n.appendChild(a),n.appendChild(r),i.appendChild(o),i.appendChild(c),d.appendChild(s),d.appendChild(u),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(d),e}())})),y.addEventListener("click",(()=>{L.innerHTML="",L.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");return t.textContent="Contact Us",e.classList.add("name"),e.appendChild(t),e}()),L.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("div"),a=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p");return e.classList.add("subsection"),n.classList.add("contact"),t.textContent="James Michael",a.textContent="Head Chef",r.textContent="012-345-6789",i.textContent="ChefJamesMichael@email.com",n.appendChild(a),n.appendChild(r),n.appendChild(i),e.appendChild(t),e.appendChild(n),e}()),L.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("div"),a=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p");return e.classList.add("subsection"),n.classList.add("contact"),t.textContent="Robert John",a.textContent="Owner",r.textContent="123-456-7890",i.textContent="OwnerRobertJohn@email.com",n.appendChild(a),n.appendChild(r),n.appendChild(i),e.appendChild(t),e.appendChild(n),e}()),L.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("div"),a=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p");return e.classList.add("subsection"),n.classList.add("contact"),t.textContent="Mary Patricia",a.textContent="Manager",r.textContent="234-567-8901",i.textContent="ManagerMaryPatricia@email.com",n.appendChild(a),n.appendChild(r),n.appendChild(i),e.appendChild(t),e.appendChild(n),e}())})),L.appendChild(e()),L.appendChild(t()),L.appendChild(a()),L.appendChild(r()),L.appendChild(i())})()})();