(()=>{var e={5378:()=>{var e,t,r,n,c,o,i,u,a,l;function s(e,t){e.disabled=!0,e.classList.add(t)}document.querySelector(".contact-us__form").querySelector(".btn-submit").addEventListener("submit",(function(e){e.preventDefault()})),e={formSelector:".contact-us__form",inputSelector:".contact-us__input-field",submitButtonSelector:".btn-submit",inactiveButtonClass:"button_inactive",inputErrorClass:"input_invalid",errorClass:"input-error_active"},l=document.querySelector(e.formSelector),t=l,r=e.inputSelector,n=e.submitButtonSelector,c=e.inactiveButtonClass,o=e.inputErrorClass,i=e.errorClass,u=Array.from(t.querySelectorAll(r)),s(a=t.querySelector(n),c),u.forEach((function(e){e.addEventListener("input",(function(){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?function(e,t,r,n){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r),c.classList.remove(n),c.textContent=""}(t,e,o,i):function(e,t,r,n,c){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n),o.textContent=r,o.classList.add(c)}(t,e,e.validationMessage,o,i),function(e){return e.some((function(e){return!e.validity.valid}))}(u)?s(a,c):function(e,t){e.disabled=!1,e.classList.remove(t)}(a,c)}))}))},7853:()=>{var e=document.querySelector(".burger-menu-btn"),t=document.querySelector(".burger-menu__content"),r=document.querySelector(".burger-menu"),n=document.querySelector(".page");e.addEventListener("click",(function(){r.classList.toggle("hidden"),t.classList.toggle("active"),n.classList.add("no-scroll")})),r.addEventListener("click",(function(e){var c;e.target.closest(".burger-menu__content")||(c=t,r.classList.add("hidden"),c.classList.remove("active"),n.classList.remove("no-scroll"))}))},9963:()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var r,n=document.querySelectorAll(".header__theme-menu-button");function c(e){document.body.className="page",document.body.classList.add("theme_".concat(e)),localStorage.setItem("theme",e)}n.forEach((function(t){t.addEventListener("click",(function(){n.forEach((function(e){e.classList.remove("header__theme-menu-button_active"),e.removeAttribute("disabled")})),e(t.classList).includes("header__theme-menu-button_type_light")?c("light"):e(t.classList).includes("header__theme-menu-button_type_dark")?c("dark"):c("auto"),t.classList.add("header__theme-menu-button_active"),t.setAttribute("disabled",!0)}))})),(r=localStorage.getItem("theme"))&&(c(r),n.forEach((function(e){e.classList.remove("header__theme-menu-button_active"),e.removeAttribute("disabled")})),document.querySelector(".header__theme-menu-button_type_".concat(r)).classList.add("header__theme-menu-button_active"),document.querySelector(".header__theme-menu-button_type_".concat(r)).setAttribute("disabled",!0))},695:(e,t,r)=>{"use strict";e.exports=r.p+"49f7dfb8578eed5d9fc5.jpg"}},t={};function r(n){var c=t[n];if(void 0!==c)return c.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var c=n.length-1;c>-1&&(!e||!/^http(s?):/.test(e));)e=n[c--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";r(9963),r(7853);var e=[{name:"Паста Болоньезе из перепелинного фарша",link:new URL(r(695),r.b),text:["Отварите спагетти в подсоленной воде до состояния аль денте.","На сковороде разогрейте масло для жарки, добавьте мелко нарезанный лук и обжарьте до прозрачности. Добавьте фарш, посолите и жарьте, разбивая куски мяса, в течение 15 минут. Туда же добавьте протёртые томаты, чёрный молотый перец, раздавленный чеснок и разорванный базилик. Влейте воду и готовьте на медленном огне 10 минут, периодически помешивая. Бланшируйте помидоры, нарежьте их кубиками, выложите к фаршу.","Выложите спагетти на тарелку, сверху положите соус и посыпьте тёртым пармезаном."]}];function t(e,t){e.querySelector(".price-wrapper-cutting").removeChild(e.querySelector(".busket-item-cutting-counter")),t.classList.remove("invisible")}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function o(e){var t=function(e){if("object"!=n(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:t+""}var i=document.querySelector(".popup__busket").querySelector(".popup__busket-list"),u=document.querySelector("#popup_cost"),a=document.querySelector("#cart_num");function l(e){return Number(e.replace(/ /g,""))}function s(e){return new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(e)}var d=function(){return e=function e(){var t,r,n;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),t=this,n=void 0,(r=o(r="products"))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,this.products=[]},(t=[{key:"count",get:function(){var e=0;return this.products.forEach((function(t){e+=t.quantity})),e}},{key:"addProduct",value:function(e){"grape"===e.type&&(e.cutting?e.name=e.name+" черенок":e.name=e.name+" саженец"),this.products.some((function(t){return t.name===e.name}))||this.products.push(e)}},{key:"increaseCountOfProduct",value:function(e){return e.quantity++,e.quantity}},{key:"reduceCountOfproduct",value:function(e){if(e.quantity>1)return e.quantity--,e.quantity}},{key:"removeProduct",value:function(e){this.products.splice(this.products.indexOf(e),1)}},{key:"cost",get:function(){return this.products.map((function(e){return e.cutting?l(e.priceCutting)*e.quantity:l(e.priceVine)*e.quantity})).reduce((function(e,t){return e+t}),0)}}])&&c(e.prototype,t),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}(),p=new d;function m(){i.innerHTML=null;var e=JSON.parse(localStorage.getItem("cart"));if(p.products=e.products,0===p.products.length){var r=document.createElement("li");r.classList.add("popup__busket-list-item"),r.textContent="Ваша корзина пока пуста.",i.appendChild(r)}var n=p.products.map((function(e){var r=document.createElement("li");r.classList.add("popup__busket-list-item");var n=document.createElement("div");n.classList.add("popup__product-wrap");var c=document.createElement("div");c.classList.add("popup__product-wrap");var o=document.createElement("img");o.classList.add("busket-item-img"),o.setAttribute("src",e.imageSrc);var i=document.createElement("h3");i.classList.add("busket-item-title"),i.innerHTML=e.name;var u=document.createElement("div");u.classList.add("popup__product-price");var d;d=e.cutting?l(e.priceCutting)*e.quantity:l(e.priceVine)*e.quantity,u.innerHTML=s(d);var y=document.createElement("div");y.classList.add("popup__product-wrap"),y.classList.add("popup__product-big_wrap");var _=document.createElement("div");_.classList.add("popup__product-wrap"),_.classList.add("busket-item-cutting-counter");var f=document.createElement("button");f.classList.add("busket-item-count_btn"),f.classList.add("busket-item-count_minus"),f.setAttribute("type","button"),f.innerHTML="–";var v=document.createElement("input");v.classList.add("busket-item-count_input"),v.setAttribute("type","text"),v.readOnly=!0,v.setAttribute("value",e.quantity);var S=document.createElement("button");S.classList.add("busket-item-count_btn"),S.classList.add("busket-item-count_plus"),S.setAttribute("type","button"),S.innerHTML="+",S.addEventListener("click",(function(){var t,r=p.increaseCountOfProduct(e);v.value=r,a.textContent=p.count,localStorage.setItem("cart",JSON.stringify(p)),m(),"grape"===e.type&&e.cutting?(t=e.name.split(" черенок").splice(0,1).toString(),document.querySelectorAll(".card").forEach((function(e){e.querySelector(".card__title").textContent===t&&(e.querySelector(".card__count-input-cutting").value=r)}))):"grape"!==e.type||e.cutting?"product"===e.type&&document.querySelectorAll(".card").forEach((function(t){t.querySelector(".card__title").textContent===e.name&&(t.querySelector(".card__count-input-cutting").value=r)})):(t=e.name.split(" саженец").splice(0,1).toString(),document.querySelectorAll(".card").forEach((function(e){e.querySelector(".card__title").textContent===t&&(e.querySelector(".card__count-input-vine").value=r)})))})),f.addEventListener("click",(function(){var t,r=p.reduceCountOfproduct(e);v.value=r,a.textContent=p.count,localStorage.setItem("cart",JSON.stringify(p)),m(),"grape"===e.type&&e.cutting?(t=e.name.split(" черенок").splice(0,1).toString(),document.querySelectorAll(".card").forEach((function(e){e.querySelector(".card__title").textContent===t&&(e.querySelector(".card__count-input-cutting").value=r)}))):"grape"!==e.type||e.cutting?"product"===e.type&&document.querySelectorAll(".card").forEach((function(t){t.querySelector(".card__title").textContent===e.name&&(t.querySelector(".card__count-input-cutting").value=r)})):(t=e.name.split(" саженец").splice(0,1).toString(),document.querySelectorAll(".card").forEach((function(e){e.querySelector(".card__title").textContent===t&&(e.querySelector(".card__count-input-vine").value=r)})))}));var g=document.createElement("button");return g.classList.add("popup__busket-item-delete"),g.innerHTML="✖",g.addEventListener("click",(function(){var r;p.removeProduct(e),localStorage.setItem("cart",JSON.stringify(p)),a.textContent=p.count,m(),"grape"===e.type&&e.cutting?(r=e.name.split(" черенок").splice(0,1).toString(),document.querySelectorAll(".card").forEach((function(e){e.querySelector(".card__title").textContent===r&&t(e,e.querySelector(".btn__busket_price-cutting"))}))):"grape"!==e.type||e.cutting?"product"===e.type&&document.querySelectorAll(".card").forEach((function(r){r.querySelector(".card__title").textContent===e.name&&t(r,r.querySelector(".btn__busket_price-cutting"))})):(r=e.name.split(" саженец").splice(0,1).toString(),document.querySelectorAll(".card").forEach((function(e){var t,n;e.querySelector(".card__title").textContent===r&&(t=e,n=e.querySelector(".btn__busket_price-vine"),t.querySelector(".price-wrapper-vine").removeChild(t.querySelector(".busket-item-vine-counter")),n.classList.remove("invisible"))})))})),n.appendChild(o),n.appendChild(i),_.appendChild(f),_.appendChild(v),_.appendChild(S),c.appendChild(u),c.appendChild(g),y.appendChild(_),y.appendChild(c),r.appendChild(n),r.appendChild(y),r}));n.forEach((function(e){i.appendChild(e)})),u.value=s(p.cost)}var y=document.querySelectorAll(".popup"),_=document.querySelector(".recipes__list"),f=document.querySelector("#recipe-template").content,v=document.querySelector(".popup__description"),S=document.querySelector("#popup__paragraph-template").content,g=document.querySelector(".popup_type_image"),b=g.querySelector(".popup__image"),h=document.querySelector(".popup__title"),q=document.querySelector(".page"),L=document.querySelector(".popup__busket"),C=document.querySelector("#cart_num"),E=new d;null!==localStorage.getItem("cart")&&void 0!==localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify(E));var k=[];try{k=JSON.parse(localStorage.getItem("cart"))||[]}catch(e){console.error("Ошибка парсинга JSON:",e),localStorage.setItem("cart",JSON.stringify(E)),k.products=[]}function w(e,t){e.classList.add("popup_is-opened"),t.classList.add("no-scroll"),document.addEventListener("keydown",O)}function x(e,t){e.classList.remove("popup_is-opened"),t.classList.remove("no-scroll"),document.removeEventListener("keydown",O)}E.products=k.products,C.textContent=E.count,document.querySelector(".busket").addEventListener("click",(function(){w(L,q),m()}));var A=function(e){e.target.classList.contains("popup_is-opened")&&x(e.target,q)};function O(e){"Escape"===e.key&&x(document.querySelector(".popup_is-opened"),q)}function I(e){var t=S.querySelector(".popup__paragraph").cloneNode(!0);return t.textContent=e,t}e.forEach((function(e){_.append(function(e,t,r){var n=f.querySelector(".recipe").cloneNode(!0);n.querySelector(".recipe__img").src=t,n.querySelector(".recipe__img").alt=e,n.querySelector(".recipe__title").textContent=e,n.querySelector(".recipe__description").textContent=r;var c=r;return n.addEventListener("click",(function(e){var t,r;r=c,!0===(t=e).target.classList.contains("recipe__title")?(recipe=t.target.closest(".recipe"),b.alt=recipe.querySelector(".recipe__img").alt,b.src=recipe.querySelector(".recipe__img").src,h.textContent=recipe.querySelector(".recipe__title").textContent,v.innerHTML="",r.forEach((function(e){v.append(I(e))})),w(g,q)):(b.alt=t.target.querySelector(".recipe__img").alt,b.src=t.target.querySelector(".recipe__img").src,h.textContent=t.target.querySelector(".recipe__title").textContent,v.innerHTML="",r.forEach((function(e){v.append(I(e))})),w(g,q))})),n}(e.name,e.link,e.text))})),y.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return x(e,q)})),e.addEventListener("mousedown",A)})),r(5378)})()})();