parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BwH1":[function(require,module,exports) {
!function(e,t,n,o){"use strict";var a=[];function s(e){var t=/fade/i.test(e),n=/pop/i.test(e);return{animate:t||n,pop:n,fade:t}}Foundation.libs.reveal={name:"reveal",version:"5.5.3",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",multiple_opened:!1,bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},on_ajax_error:e.noop,bg:e(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(t,n,o){e.extend(!0,this.settings,n,o),this.bindings(n,o)},events:function(e){var t=this,o=t.S;return o(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(e){if(e.preventDefault(),!t.locked){var n=o(this),a=n.data(t.data_attr("reveal-ajax")),s=n.data(t.data_attr("reveal-replace-content"));if(t.locked=!0,void 0===a)t.open.call(t,n);else{var i=!0===a?n.attr("href"):a;t.open.call(t,n,{url:i},{replaceContentSel:s})}}}),o(n).on("click.fndtn.reveal",this.close_targets(),function(e){if(e.preventDefault(),!t.locked){var n=o("["+t.attr_name()+"].open").data(t.attr_name(!0)+"-init")||t.settings,a=o(e.target)[0]===o("."+n.bg_class)[0];if(a){if(!n.close_on_background_click)return;e.stopPropagation()}t.locked=!0,t.close.call(t,a?o("["+t.attr_name()+"].open:not(.toback)"):o(this).closest("["+t.attr_name()+"]"))}}),o("["+t.attr_name()+"]",this.scope).length>0?o(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):o(this.scope).on("open.fndtn.reveal","["+t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.close_video),!0},key_up_on:function(e){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var n=t.S("["+t.attr_name()+"].open"),o=n.data(t.attr_name(!0)+"-init")||t.settings;o&&27===e.which&&o.close_on_esc&&!t.locked&&t.close.call(t,n)}),!0},key_up_off:function(e){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(n,o){var s,i=this;n?void 0!==n.selector?s=i.S("#"+n.data(i.data_attr("reveal-id"))).first():(s=i.S(this.scope),o=n):s=i.S(this.scope);var r=s.data(i.attr_name(!0)+"-init");if(r=r||this.settings,s.hasClass("open")&&void 0!==n&&n.attr("data-reveal-id")==s.attr("id"))return i.close(s);if(!s.hasClass("open")){var l=i.S("["+i.attr_name()+"].open");void 0===s.data("css-top")&&s.data("css-top",parseInt(s.css("top"),10)).data("offset",this.cache_offset(s)),s.attr("tabindex","0").attr("aria-hidden","false"),this.key_up_on(s),s.on("open.fndtn.reveal",function(e){e.namespace}),s.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),l.length<1&&this.toggle_bg(s,!0),"string"==typeof o&&(o={url:o});var d=function(){l.length>0&&(r.multiple_opened?i.to_back(l):i.hide(l,r.css.close)),r.multiple_opened&&a.push(s),i.show(s,r.css.open)};if(void 0!==o&&o.url){var c=void 0!==o.success?o.success:null;e.extend(o,{success:function(t,n,o){if(e.isFunction(c)){var a=c(t,n,o);"string"==typeof a&&(t=a)}"undefined"!=typeof options&&void 0!==options.replaceContentSel?s.find(options.replaceContentSel).html(t):s.html(t),i.S(s).foundation("section","reflow"),i.S(s).children().foundation(),d()}}),r.on_ajax_error!==e.noop&&e.extend(o,{error:r.on_ajax_error}),e.ajax(o)}else d()}i.S(t).trigger("resize")},close:function(t){t=t&&t.length?t:this.S(this.scope);var n=this.S("["+this.attr_name()+"].open"),o=t.data(this.attr_name(!0)+"-init")||this.settings,s=this;if(n.length>0)if(t.removeAttr("tabindex","0").attr("aria-hidden","true"),this.locked=!0,this.key_up_off(t),t.trigger("close.fndtn.reveal"),(o.multiple_opened&&1===n.length||!o.multiple_opened||t.length>1)&&(s.toggle_bg(t,!1),s.to_front(t)),o.multiple_opened){var i=t.is(":not(.toback)");s.hide(t,o.css.close,o),i?a.pop():a=e.grep(a,function(e){var n=e[0]===t[0];return n&&s.to_front(t),!n}),a.length>0&&s.to_front(a[a.length-1])}else s.hide(n,o.css.close,o)},close_targets:function(){var e="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+this.settings.bg_class:e},toggle_bg:function(t,n){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=e("<div />",{class:this.settings.bg_class}).appendTo("body").hide());var o=this.settings.bg.filter(":visible").length>0;n!=o&&((null==n?o:!n)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(n,o){if(o){var a=(c=n.data(this.attr_name(!0)+"-init")||this.settings).root_element,i=this;if(0===n.parent(a).length){var r=n.wrap('<div style="display: none;" />').parent();n.on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(r),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo(a)}var l=s(c.animation);if(l.animate||(this.locked=!1),l.pop){o.top=e(t).scrollTop()-n.data("offset")+"px";var d={top:e(t).scrollTop()+n.data("css-top")+"px",opacity:1};return setTimeout(function(){return n.css(o).animate(d,c.animation_speed,"linear",function(){i.locked=!1,n.trigger("opened.fndtn.reveal")}).addClass("open")},c.animation_speed/2)}if(o.top=e(t).scrollTop()+n.data("css-top")+"px",l.fade){d={opacity:1};return setTimeout(function(){return n.css(o).animate(d,c.animation_speed,"linear",function(){i.locked=!1,n.trigger("opened.fndtn.reveal")}).addClass("open")},c.animation_speed/2)}return n.css(o).show().css({opacity:1}).addClass("open").trigger("opened.fndtn.reveal")}var c;return s((c=this.settings).animation).fade?n.fadeIn(c.animation_speed/2):(this.locked=!1,n.show())},to_back:function(e){e.addClass("toback")},to_front:function(e){e.removeClass("toback")},hide:function(n,o){if(o){var a=n.data(this.attr_name(!0)+"-init"),i=this,r=s((a=a||this.settings).animation);if(r.animate||(this.locked=!1),r.pop){var l={top:-e(t).scrollTop()-n.data("offset")+"px",opacity:0};return setTimeout(function(){return n.animate(l,a.animation_speed,"linear",function(){i.locked=!1,n.css(o).trigger("closed.fndtn.reveal")}).removeClass("open")},a.animation_speed/2)}if(r.fade){l={opacity:0};return setTimeout(function(){return n.animate(l,a.animation_speed,"linear",function(){i.locked=!1,n.css(o).trigger("closed.fndtn.reveal")}).removeClass("open")},a.animation_speed/2)}return n.hide().css(o).removeClass("open").trigger("closed.fndtn.reveal")}return s((a=this.settings).animation).fade?n.fadeOut(a.animation_speed/2):n.hide()},close_video:function(t){var n=e(".flex-video",t.target),o=e("iframe",n);o.length>0&&(o.attr("data-src",o[0].src),o.attr("src",o.attr("src")),n.hide())},open_video:function(t){var n=e(".flex-video",t.target),o=n.find("iframe");if(o.length>0){if("string"==typeof o.attr("data-src"))o[0].src=o.attr("data-src");else{var a=o[0].src;o[0].src=void 0,o[0].src=a}n.show()}},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},cache_offset:function(e){var t=e.show().height()+parseInt(e.css("top"),10)+e.scrollY;return e.hide(),t},off:function(){e(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document);
},{}]},{},["BwH1"], null)
//# sourceMappingURL=/foundation.reveal.99ad1a79.js.map