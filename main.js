!function(e){var n={};function t(l){if(n[l])return n[l].exports;var i=n[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(l,i,function(n){return e[n]}.bind(null,i));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function l(){const e=document.createElement("ul");["home","menu","about"].forEach(n=>e.appendChild(u("li",null,null,n)));const n=document.createElement("nav");n.appendChild(e),r.appendChild(n)}function i(){const e=document.createElement("footer"),n=u("p",null,["golden"],"Developed with ♥ by Ginner Zapata");e.appendChild(n),r.appendChild(e)}t.r(n),t.d(n,"createHtmlElement",(function(){return u})),t.d(n,"$content",(function(){return r}));const o=[{name:"Pan canilla",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"20$"},{name:"Pan sobado",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"20$"},{name:"Pan Andino",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"20$"}];const r=document.getElementById("content");function u(e,n,t,l){const i=document.createElement(e);return n&&(i.id=n),t&&t.forEach(e=>i.classList.add(e)),l&&(i.innerText=l),i}function a(){r.innerHTML="",l(),function(){const e=document.createElement("main"),n=u("p",null,["cursive","golden"],"Bienvenidos"),t=u("h1",null,["white"],"La panaderia"),l=document.createElement("hr"),i=u("p",null,["text-center","white"],"El placer de comer con las manos. Bien tierruo!"),o=u("button",null,null,"Ver el menu");e.appendChild(n),e.appendChild(t),e.appendChild(l),e.appendChild(i),e.appendChild(o),r.appendChild(e)}(),i()}function d(){r.innerHTML="",l(),function(){const e=document.createElement("main");e.classList.add("main");const n=u("p",null,["cursive","golden"],"Bienvenidos"),t=u("h1",null,["gray"],"Menu"),l=document.createElement("hr");e.appendChild(n),e.appendChild(t),e.appendChild(l),o.forEach(n=>{const t=u("div",null,["menu-item"],null),l=u("h2",null,["golden"],n.name),i=u("p",null,["gray"],n.description),o=u("h2",null,["golden"],n.price),r=u("hr",null,["menu-hr"],null);t.appendChild(l),t.appendChild(i),t.appendChild(o),t.appendChild(r),e.appendChild(t)}),r.appendChild(e)}(),i()}function c(){r.innerHTML="",l(),function(){const e=document.createElement("main");e.classList.add("main");const n=u("p",null,["cursive","golden"],"Bienvenidos"),t=u("h1",null,["gray"],"Nosotros"),l=document.createElement("hr"),i=u("p",null,["menu-item"],"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod");e.appendChild(n),e.appendChild(t),e.appendChild(l),e.appendChild(i),r.appendChild(e)}(),i()}a(),document.addEventListener("click",e=>{const n=e.target.innerText;"HOME"===n&&a(),"MENU"!==n&&"VER EL MENU"!==n||d(),"ABOUT"===n&&c()})}]);