(()=>{var t={5378:()=>{var t,e,r,n,o,c,i,u,a,s;function l(t,e){t.disabled=!0,t.classList.add(e)}document.querySelector(".contact-us__form").querySelector(".btn-submit").addEventListener("submit",(function(t){t.preventDefault()})),t={formSelector:".contact-us__form",inputSelector:".contact-us__input-field",submitButtonSelector:".btn-submit",inactiveButtonClass:"button_inactive",inputErrorClass:"input_invalid",errorClass:"input-error_active"},s=document.querySelector(t.formSelector),e=s,r=t.inputSelector,n=t.submitButtonSelector,o=t.inactiveButtonClass,c=t.inputErrorClass,i=t.errorClass,u=Array.from(e.querySelectorAll(r)),l(a=e.querySelector(n),o),u.forEach((function(t){t.addEventListener("input",(function(){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r),o.classList.remove(n),o.textContent=""}(e,t,c,i):function(t,e,r,n,o){var c=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n),c.textContent=r,c.classList.add(o)}(e,t,t.validationMessage,c,i),function(t){return t.some((function(t){return!t.validity.valid}))}(u)?l(a,o):function(t,e){t.disabled=!1,t.classList.remove(e)}(a,o)}))}))},7853:()=>{var t=document.querySelector(".burger-menu-btn"),e=document.querySelector(".burger-menu__content"),r=document.querySelector(".burger-menu"),n=document.querySelector(".page");t.addEventListener("click",(function(){r.classList.toggle("hidden"),e.classList.toggle("active"),n.classList.add("no-scroll")})),r.addEventListener("click",(function(t){var o;t.target.closest(".burger-menu__content")||(o=e,r.classList.add("hidden"),o.classList.remove("active"),n.classList.remove("no-scroll"))}))},9963:()=>{function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var r,n=document.querySelectorAll(".header__theme-menu-button");function o(t){document.body.className="page",document.body.classList.add("theme_".concat(t)),localStorage.setItem("theme",t)}n.forEach((function(e){e.addEventListener("click",(function(){n.forEach((function(t){t.classList.remove("header__theme-menu-button_active"),t.removeAttribute("disabled")})),t(e.classList).includes("header__theme-menu-button_type_light")?o("light"):t(e.classList).includes("header__theme-menu-button_type_dark")?o("dark"):o("auto"),e.classList.add("header__theme-menu-button_active"),e.setAttribute("disabled",!0)}))})),(r=localStorage.getItem("theme"))&&(o(r),n.forEach((function(t){t.classList.remove("header__theme-menu-button_active"),t.removeAttribute("disabled")})),document.querySelector(".header__theme-menu-button_type_".concat(r)).classList.add("header__theme-menu-button_active"),document.querySelector(".header__theme-menu-button_type_".concat(r)).setAttribute("disabled",!0))},695:(t,e,r)=>{"use strict";t.exports=r.p+"49f7dfb8578eed5d9fc5.jpg"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.m=t,r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";r(9963),r(7853);var t=[{name:"Паста Болоньезе из перепелинного фарша",link:new URL(r(695),r.b),text:["Отварите спагетти в подсоленной воде до состояния аль денте.","На сковороде разогрейте масло для жарки, добавьте мелко нарезанный лук и обжарьте до прозрачности. Добавьте фарш, посолите и жарьте, разбивая куски мяса, в течение 15 минут. Туда же добавьте протёртые томаты, чёрный молотый перец, раздавленный чеснок и разорванный базилик. Влейте воду и готовьте на медленном огне 10 минут, периодически помешивая. Бланшируйте помидоры, нарежьте их кубиками, выложите к фаршу.","Выложите спагетти на тарелку, сверху положите соус и посыпьте тёртым пармезаном."]}];function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function o(t){var r=function(t){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}var c=document.querySelector(".popup__busket").querySelector(".popup__busket-list"),i=document.querySelector("#popup_cost"),u=document.querySelector("#cart_num");function a(t){return Number(t.replace(/ /g,""))}function s(t){return new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(t)}var l=function(){return t=function t(){var e,r,n;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),e=this,n=void 0,(r=o(r="products"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this.products=[]},(e=[{key:"count",get:function(){var t=0;return this.products.forEach((function(e){t+=e.quantity})),t}},{key:"addProduct",value:function(t){"grape"===t.type&&(t.cutting?t.name=t.name+" черенок":t.name=t.name+" саженец"),this.products.some((function(e){return e.name===t.name}))||this.products.push(t)}},{key:"increaseCountOfProduct",value:function(t){return t.quantity++,t.quantity}},{key:"reduceCountOfproduct",value:function(t){if(t.quantity>1)return t.quantity--,t.quantity}},{key:"removeProduct",value:function(t){this.products.splice(this.products.indexOf(t),1)}},{key:"cost",get:function(){return this.products.map((function(t){return t.cutting?a(t.priceCutting)*t.quantity:a(t.priceVine)*t.quantity})).reduce((function(t,e){return t+e}),0)}}])&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r}(),d=new l;function p(){c.innerHTML=null;var t=JSON.parse(localStorage.getItem("cart"));if(d.products=t.products,0===d.products.length){var e=document.createElement("li");e.classList.add("popup__busket-list-item"),e.textContent="Ваша корзина пока пуста.",c.appendChild(e)}var r=d.products.map((function(t){var e=document.createElement("li");e.classList.add("popup__busket-list-item");var r=document.createElement("div");r.classList.add("popup__product-wrap");var n=document.createElement("div");n.classList.add("popup__product-wrap");var o=document.createElement("img");o.classList.add("busket-item-img"),o.setAttribute("src",t.imageSrc);var c=document.createElement("h3");c.classList.add("busket-item-title"),c.innerHTML=t.name;var i=document.createElement("div");i.classList.add("popup__product-price");var l;l=t.cutting?a(t.priceCutting)*t.quantity:a(t.priceVine)*t.quantity,i.innerHTML=s(l);var m=document.createElement("div");m.classList.add("popup__product-wrap"),m.classList.add("popup__product-big_wrap");var f=document.createElement("div");f.classList.add("popup__product-wrap"),f.classList.add("busket-item-counter");var y=document.createElement("button");y.classList.add("busket-item-count_btn"),y.classList.add("busket-item-count_minus"),y.setAttribute("type","button"),y.innerHTML="–";var v=document.createElement("input");v.classList.add("busket-item-count_input"),v.setAttribute("type","text"),v.setAttribute("value",t.quantity);var _=document.createElement("button");_.classList.add("busket-item-count_btn"),_.classList.add("busket-item-count_plus"),_.setAttribute("type","button"),_.innerHTML="+",_.addEventListener("click",(function(){var e=d.increaseCountOfProduct(t);v.value=e,u.textContent=d.count,localStorage.setItem("cart",JSON.stringify(d)),p()})),y.addEventListener("click",(function(){var e=d.reduceCountOfproduct(t);v.value=e,u.textContent=d.count,localStorage.setItem("cart",JSON.stringify(d)),p()}));var b=document.createElement("button");return b.classList.add("popup__busket-item-delete"),b.innerHTML="✖",b.addEventListener("click",(function(){d.removeProduct(t),localStorage.setItem("cart",JSON.stringify(d)),u.textContent=d.count,p()})),r.appendChild(o),r.appendChild(c),f.appendChild(y),f.appendChild(v),f.appendChild(_),n.appendChild(i),n.appendChild(b),m.appendChild(f),m.appendChild(n),e.appendChild(r),e.appendChild(m),e}));document.querySelector(".popup__busket_clear-btn").addEventListener("click",(function(){d.products.forEach((function(t){d.products.splice(t)})),localStorage.setItem("cart",JSON.stringify(d)),u.textContent=d.count,p()})),r.forEach((function(t){c.appendChild(t)})),i.value=s(d.cost)}var m,f=document.querySelectorAll(".popup"),y=document.querySelector(".recipes__list"),v=document.querySelector("#recipe-template").content,_=document.querySelector(".popup__description"),b=document.querySelector("#popup__paragraph-template").content,g=document.querySelector(".popup_type_image"),S=g.querySelector(".popup__image"),h=document.querySelector(".popup__title"),L=document.querySelector(".page"),q=document.querySelector(".popup__busket"),E=document.querySelector("#cart_num"),C=new l;null!==localStorage.getItem("cart")&&void 0!==localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify(C));try{m=JSON.parse(localStorage.getItem("cart"))||[]}catch(t){console.error("Ошибка парсинга JSON:",t),localStorage.setItem("cart",JSON.stringify(C)),m=[]}function k(t,e){t.classList.add("popup_is-opened"),e.classList.add("no-scroll"),document.addEventListener("keydown",A)}function w(t,e){t.classList.remove("popup_is-opened"),e.classList.remove("no-scroll"),document.removeEventListener("keydown",A)}C.products=m.products,E.textContent=C.count,document.querySelector(".busket").addEventListener("click",(function(){k(q,L),p()}));var x=function(t){t.target.classList.contains("popup_is-opened")&&w(t.target,L)};function A(t){"Escape"===t.key&&w(document.querySelector(".popup_is-opened"),L)}function O(t){var e=b.querySelector(".popup__paragraph").cloneNode(!0);return e.textContent=t,e}t.forEach((function(t){y.append(function(t,e,r){var n=v.querySelector(".recipe").cloneNode(!0);n.querySelector(".recipe__img").src=e,n.querySelector(".recipe__img").alt=t,n.querySelector(".recipe__title").textContent=t,n.querySelector(".recipe__description").textContent=r;var o=r;return n.addEventListener("click",(function(t){var e,r;r=o,!0===(e=t).target.classList.contains("recipe__title")?(recipe=e.target.closest(".recipe"),S.alt=recipe.querySelector(".recipe__img").alt,S.src=recipe.querySelector(".recipe__img").src,h.textContent=recipe.querySelector(".recipe__title").textContent,_.innerHTML="",r.forEach((function(t){_.append(O(t))})),k(g,L)):(S.alt=e.target.querySelector(".recipe__img").alt,S.src=e.target.querySelector(".recipe__img").src,h.textContent=e.target.querySelector(".recipe__title").textContent,_.innerHTML="",r.forEach((function(t){_.append(O(t))})),k(g,L))})),n}(t.name,t.link,t.text))})),f.forEach((function(t){t.querySelector(".popup__close").addEventListener("click",(function(){return w(t,L)})),t.addEventListener("mousedown",x)})),r(5378)})()})();