/*! a11y-dialog 5.2.0 — © Edenspiekermann */
!function(t){"use strict";function i(t,i){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.container=t,this.dialog=t.querySelector('dialog, [role="dialog"], [role="alertdialog"]'),this.role=this.dialog.getAttribute("role")||"dialog",this.useDialog="show"in document.createElement("dialog")&&"DIALOG"===this.dialog.nodeName,this._listeners={},this.create(i)}function e(t){return Array.prototype.slice.call(t)}function n(t,i){return e((i||document).querySelectorAll(t))}function o(t){return NodeList.prototype.isPrototypeOf(t)?e(t):Element.prototype.isPrototypeOf(t)?[t]:"string"==typeof t?n(t):void 0}function s(t){var i=r(t),e=t.querySelector("[autofocus]")||i[0];e&&e.focus()}function r(t){return n(c.join(","),t).filter(function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)})}function h(t,i){var e=r(t),n=e.indexOf(document.activeElement);i.shiftKey&&0===n?(e[e.length-1].focus(),i.preventDefault()):i.shiftKey||n!==e.length-1||(e[0].focus(),i.preventDefault())}function a(t){var i=e(t.parentNode.childNodes),n=i.filter(function(t){return 1===t.nodeType});return n.splice(n.indexOf(t),1),n}var d,c=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'];i.prototype.create=function(t){return this._targets=this._targets||o(t)||a(this.container),this.shown=this.dialog.hasAttribute("open"),this.dialog.setAttribute("role",this.role),this.useDialog?this.container.setAttribute("data-a11y-dialog-native",""):this.shown?this.container.removeAttribute("aria-hidden"):this.container.setAttribute("aria-hidden",!0),this._openers=n('[data-a11y-dialog-show="'+this.container.id+'"]'),this._openers.forEach(function(t){t.addEventListener("click",this._show)}.bind(this)),this._closers=n("[data-a11y-dialog-hide]",this.container).concat(n('[data-a11y-dialog-hide="'+this.container.id+'"]')),this._closers.forEach(function(t){t.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},i.prototype.show=function(t){return this.shown?this:(this.shown=!0,d=document.activeElement,this.useDialog?this.dialog.showModal(t instanceof Event?void 0:t):(this.dialog.setAttribute("open",""),this.container.removeAttribute("aria-hidden"),this._targets.forEach(function(t){t.setAttribute("aria-hidden","true")})),s(this.dialog),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",t),this)},i.prototype.hide=function(t){return this.shown?(this.shown=!1,this.useDialog?this.dialog.close(t instanceof Event?void 0:t):(this.dialog.removeAttribute("open"),this.container.setAttribute("aria-hidden","true"),this._targets.forEach(function(t){t.removeAttribute("aria-hidden")})),d&&d.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",t),this):this},i.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(t){t.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(t){t.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},i.prototype.on=function(t,i){return void 0===this._listeners[t]&&(this._listeners[t]=[]),this._listeners[t].push(i),this},i.prototype.off=function(t,i){var e=this._listeners[t].indexOf(i);return e>-1&&this._listeners[t].splice(e,1),this},i.prototype._fire=function(t,i){(this._listeners[t]||[]).forEach(function(t){t(this.container,i)}.bind(this))},i.prototype._bindKeypress=function(t){this.shown&&27===t.which&&"alertdialog"!==this.role&&(t.preventDefault(),this.hide()),this.shown&&9===t.which&&h(this.dialog,t)},i.prototype._maintainFocus=function(t){this.shown&&!this.container.contains(t.target)&&s(this.dialog)},"undefined"!=typeof module&&void 0!==module.exports?module.exports=i:"function"==typeof define&&define.amd?define("A11yDialog",[],function(){return i}):"object"==typeof t&&(t.A11yDialog=i)}("undefined"!=typeof global?global:window);

!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var o={};t(o),e.bodyScrollLock=o}}(this,function(exports){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var l=!1;if("undefined"!=typeof window){var e={get passive(){l=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}var d="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),c=[],u=!1,a=-1,s=void 0,v=void 0,f=function(t){return c.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})},m=function(e){var t=e||window.event;return!!f(t.target)||(1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1))},o=function(){setTimeout(function(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)})};exports.disableBodyScroll=function(i,e){if(d){if(!i)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(i&&!c.some(function(e){return e.targetElement===i})){var t={targetElement:i,options:e||{}};c=[].concat(r(c),[t]),i.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},i.ontouchmove=function(e){var t,o,n,r;1===e.targetTouches.length&&(o=i,r=(t=e).targetTouches[0].clientY-a,!f(t.target)&&(o&&0===o.scrollTop&&0<r?m(t):(n=o)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&r<0?m(t):t.stopPropagation()))},u||(document.addEventListener("touchmove",m,l?{passive:!1}:void 0),u=!0)}}else{n=e,setTimeout(function(){if(void 0===v){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(v=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")});var o={targetElement:i,options:e||{}};c=[].concat(r(c),[o])}var n},exports.clearAllBodyScrollLocks=function(){d?(c.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),u&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0),u=!1),c=[],a=-1):(o(),c=[])},exports.enableBodyScroll=function(t){if(d){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,c=c.filter(function(e){return e.targetElement!==t}),u&&0===c.length&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0),u=!1)}else 1===c.length&&c[0].targetElement===t?(o(),c=[]):c=c.filter(function(e){return e.targetElement!==t})}});
