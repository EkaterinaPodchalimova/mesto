/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i,a){var u=t.name,c=t.link,s=t.likes;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=u,this._link=c,this._likesNumber=s.length,this._likesOwner=s,this._template=n,this._handleCardClick=r,this._handelTrashClick=o,this._user=i,this._handleButtonClickLike=a}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".element").cloneNode(!0)}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_deleteTrash",value:function(){this._user!==this._ownerId&&(this._trash.remove(),this._trash=null)}},{key:"_setUserLike",value:function(){var t=this;this._likesOwner.some((function(e){return e._id===t._user}))&&this._like.classList.add("element__like_active")}},{key:"_setLike",value:function(){var t=this;this._like.classList.toggle("element__like_active"),this._handleButtonClickLike(this._like.classList.contains("element__like_active"),this._id,(function(e){t._likes.textContent=e}))}},{key:"_setEventListeners",value:function(){var t=this;this._like.addEventListener("click",(function(){return t._setLike()})),this._trash.addEventListener("click",(function(){t._handelTrashClick(t._id,(function(){return t._deleteCard()}))})),this._photo.addEventListener("click",(function(){return t._handleCardClick({link:t._link,name:t._name})}))}},{key:"getId",value:function(t,e){this._id=t,this._ownerId=e}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".element__like"),this._photo=this._element.querySelector(".element__photo"),this._trash=this._element.querySelector(".element__trash"),this._likes=this._element.querySelector(".element__like-number"),this._photo.src=this._link,this._photo.alt="Изображение ".concat(this._name),this._element.querySelector(".element__text").textContent=this._name,this._likes.textContent=this._likesNumber,this._setEventListeners(),this._deleteTrash(),this._setUserLike(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".avatar-block"),a=document.querySelector(".popup__container_type_edit-user"),u=a.querySelector(".popup__input_value_name"),c=a.querySelector(".popup__input_value_about");function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_showInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));e.textContent="",t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this.permittedSubmitButton()}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0,this._buttonElement.style.cursor="default"}},{key:"permittedSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0),this._buttonElement.style.cursor="pointer"}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=document.querySelector(e),this._close=this._element.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._close.addEventListener("click",(function(){return t.close()})),this._element.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}},{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=v(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function v(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function m(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._photo=e._element.querySelector(".popup__card-photo"),e._place=e._element.querySelector(".popup__card-place"),e}return e=a,(n=[{key:"open",value:function(t){var e=t.link,n=t.name;this._photo.src=e,this._photo.alt="Изображение ".concat(n),this._place.textContent=n,d(b(a.prototype),"open",this).call(this)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(h);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=S(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function S(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function L(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,r,o,i,a=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(o);if(i){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return L(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=a.call(this,t))._form=r._element.querySelector(n.formSelector),r._handleButtonClick=e,r}return e=u,(r=[{key:"setEventListeners",value:function(){var t=this;E(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleButtonClick(t._getInputValues())}))}},{key:"close",value:function(){E(j(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t=this;return this._formInputValues={},this._form.querySelectorAll(".popup__input").forEach((function(e){t._formInputValues[e.name]=e.value})),this._formInputValues}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=T(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function T(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function B(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,r,o,i,a=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(o);if(i){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return B(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this,t))._form=e._element.querySelector(n.formSelector),e}return e=u,(r=[{key:"submitAgree",value:function(t){this._deleteServer=t}},{key:"setEventListeners",value:function(){var t=this;I(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._deleteServer()}))}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(e)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t,e){var n=this;this._items=t,this._renderer=e,this._items.forEach((function(t){n._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D=function(){function t(e){var n=e.name,r=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"getUserId",value:function(){return this._id}},{key:"editAvatar",value:function(t){this._avatar.src=t}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.id;this._name.textContent=e,this._about.textContent=n,this._id=r}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var G=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:"".concat(this._authorization)}}).then((function(e){return t._getStatus(e)}))}},{key:"getUserInformation",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:"".concat(this._authorization)}}).then((function(e){return t._getStatus(e)}))}},{key:"setUserInformation",value:function(t){var e=this,n=t.name,r=t.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(n),about:"".concat(r)})}).then((function(t){return e._getStatus(t)}))}},{key:"postNewCard",value:function(t){var e=this,n=t.name,r=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(n),link:"".concat(r)})}).then((function(t){return e._getStatus(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"}}).then((function(t){return e._getStatus(t)}))}},{key:"addLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"}}).then((function(t){return e._getStatus(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"}}).then((function(t){return e._getStatus(t)}))}},{key:"editAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return e._getStatus(t)}))}},{key:"_getStatus",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function J(){J=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=g(a,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function f(){}function h(){}function p(){}var y={};u(y,o,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(S([])));v&&v!==e&&n.call(v,o)&&(y=v);var _=p.prototype=f.prototype=Object.create(y);function m(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==F(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function g(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,u(_,"constructor",p),u(p,"constructor",h),h.displayName=u(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},m(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(_),u(_,a,"Generator"),u(_,o,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}function H(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function M(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){H(i,r,o,a,u,"next",t)}function u(t){H(i,r,o,a,u,"throw",t)}a(void 0)}))}}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var $=new D({name:".profile__name",about:".profile__job",avatar:".avatar"}),K=[],Q=new z(".elements"),W=new l(n,document.forms.edit),X=new l(n,document.forms.add),Z=new l(n,document.forms.avatar),tt=new G({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-47",headers:{authorization:"74bc18a1-28e6-48d3-a590-75a477f90392","Content-Type":"application/json"}});Promise.all([tt.getUserInformation(),tt.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo({name:o.name,about:o.about,id:o._id}),$.editAvatar(o.avatar),i.forEach((function(t){K.unshift({name:t.name,link:t.link,likes:t.likes,id:t._id,owner:t.owner._id})})),Q.renderItems(K,(function(t){Q.addItem(nt(t))}))})).catch((function(t){console.log(t)}));var et=function(){var t=M(J().mark((function t(e){var n;return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.link,t.next=3,tt.editAvatar(n).then((function(t){$.editAvatar(t.avatar),ht.close()})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),nt=function(t){var n=t.name,r=t.link,o=t.likes,i=t.id,a=t.owner,u=new e({name:n,link:r,likes:o},"#element-template",rt,ot,$.getUserId(),it);return u.getId(i,a),u.generateCard()},rt=function(t){var e=t.name,n=t.link;ft.open({link:n,name:e})},ot=function(t,e){dt.open(),dt.submitAgree((function(){tt.deleteCard(t).then((function(){e(),dt.close()})).catch((function(t){console.log(t)}))}))},it=function(){var t=M(J().mark((function t(e,n,r){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return t.next=3,tt.addLike(n).then((function(t){r(t.likes.length)})).catch((function(t){console.log(t)}));case 3:t.next=7;break;case 5:return t.next=7,tt.deleteLike(n).then((function(t){r(t.likes.length)})).catch((function(t){console.log(t)}));case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),at=function(){var t=M(J().mark((function t(e){var n,r;return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,r=e.about,t.next=3,tt.setUserInformation({name:n,about:r}).then((function(t){$.setUserInfo({name:n,about:r,id:t._id}),st.close()})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ut=function(){var t=M(J().mark((function t(e){var n,r;return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,r=e.link,t.next=3,tt.postNewCard({name:n,link:r}).then((function(t){Q.addItem(nt({name:n,link:r,likes:[],id:t._id,owner:t.owner._id})),lt.close()})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ct=function(t,e){e.resetValidation(),t.open()},st=new C(".popup_type_edit-user",at);st.setEventListeners();var lt=new C(".popup_type_add-card",ut);lt.setEventListeners();var ft=new g(".popup_type_card");ft.setEventListeners();var ht=new C(".popup_type_edit-avatar",et);ht.setEventListeners();var pt,yt,dt=new U(".popup_type_delete-card");dt.setEventListeners(),yt=(pt=n).formSelector,function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}}(pt,["formSelector"]),Array.from(document.querySelectorAll(yt)).forEach((function(t){new l(n,t).enableValidation()})),r.addEventListener("click",(function(){var t=$.getUserInfo(),e=t.name,n=t.about;ct(st,W),W.permittedSubmitButton(),u.value=e,c.value=n})),o.addEventListener("click",(function(){ct(lt,X)})),i.addEventListener("click",(function(){ct(ht,Z)}))})();