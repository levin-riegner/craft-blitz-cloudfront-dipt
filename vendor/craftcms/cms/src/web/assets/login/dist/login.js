!function(){var t={881:function(){},84:function(t,e,r){var n=r(881);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,r(673).Z)("81d37080",n,!0,{})},673:function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},s=0;s<e.length;s++){var i=e[s],o=i[0],a={id:t+":"+s,css:i[1],media:i[2],sourceMap:i[3]};n[o]?n[o].parts.push(a):r.push(n[o]={id:o,parts:[a]})}return r}r.d(e,{Z:function(){return f}});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=s&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,d=!1,l=function(){},p=null,h="data-vue-ssr-id",c="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,r,s){d=r,p=s||{};var o=n(t,e);return m(o),function(e){for(var r=[],s=0;s<o.length;s++){var a=o[s];(u=i[a.id]).refs--,r.push(u)}for(e?m(o=n(t,e)):o=[],s=0;s<r.length;s++){var u;if(0===(u=r[s]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete i[u.id]}}}}function m(t){for(var e=0;e<t.length;e++){var r=t[e],n=i[r.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](r.parts[s]);for(;s<r.parts.length;s++)n.parts.push(g(r.parts[s]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var o=[];for(s=0;s<r.parts.length;s++)o.push(g(r.parts[s]));i[r.id]={id:r.id,refs:1,parts:o}}}}function v(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function g(t){var e,r,n=document.querySelector("style["+h+'~="'+t.id+'"]');if(n){if(d)return l;n.parentNode.removeChild(n)}if(c){var s=u++;n=a||(a=v()),e=$.bind(null,n,s,!1),r=$.bind(null,n,s,!0)}else n=v(),e=I.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var w,b=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function $(t,e,r,n){var s=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,s);else{var i=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function I(t,e){var r=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),p.ssrId&&t.setAttribute(h,e.id),s&&(r+="\n/*# sourceURL="+s.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t,e,n;r(84),t=jQuery,e=Garnish.Base.extend({$form:null,$loginNameInput:null,$passwordInput:null,$rememberMeCheckbox:null,$forgotPasswordLink:null,$rememberPasswordLink:null,$submitBtn:null,$errors:null,submitBtn:null,forgotPassword:!1,validateOnInput:!1,init:function(){var e=this;this.$form=t("#login-form"),this.$loginNameInput=t("#loginName"),this.$passwordInput=t("#password"),this.$rememberMeCheckbox=t("#rememberMe"),this.$forgotPasswordLink=t("#forgot-password"),this.$rememberPasswordLink=t("#remember-password"),this.$submitBtn=t("#submit"),this.$errors=t("#login-errors"),this.submitBtn=new Garnish.MultiFunctionBtn(this.$submitBtn,{changeButtonText:!0}),new Craft.PasswordInput(this.$passwordInput,{onToggleInput:function(t){e.removeListener(e.$passwordInput,"input"),e.$passwordInput=t,e.addListener(e.$passwordInput,"input","onInput")}}),this.addListener(this.$loginNameInput,"input","onInput"),this.addListener(this.$passwordInput,"input","onInput"),this.addListener(this.$forgotPasswordLink,"click","onSwitchForm"),this.addListener(this.$rememberPasswordLink,"click","onSwitchForm"),this.addListener(this.$form,"submit","onSubmit"),Garnish.isMobileBrowser()||(this.$loginNameInput.val()?this.$passwordInput.focus():this.$loginNameInput.focus())},validate:function(){var t=this.$loginNameInput.val();if(0===t.length)return window.useEmailAsUsername?Craft.t("app","Invalid email."):Craft.t("app","Invalid username or email.");if(window.useEmailAsUsername&&!t.match(".+@.+..+"))return Craft.t("app","Invalid email.");if(!this.forgotPassword){var e=this.$passwordInput.val().length;if(e<window.minPasswordLength)return Craft.t("yii","{attribute} should contain at least {min, number} {min, plural, one{character} other{characters}}.",{attribute:Craft.t("app","Password"),min:window.minPasswordLength});if(e>window.maxPasswordLength)return Craft.t("yii","{attribute} should contain at most {max, number} {max, plural, one{character} other{characters}}.",{attribute:Craft.t("app","Password"),max:window.maxPasswordLength})}return!0},onInput:function(t){this.validateOnInput&&!0===this.validate()&&this.clearErrors()},onSubmit:function(t){t.preventDefault();var e=this.validate();if(!0!==e)return this.showError(e),void(this.validateOnInput=!0);this.submitBtn.busyEvent(),this.clearErrors(),this.forgotPassword?this.submitForgotPassword():this.submitLogin()},submitForgotPassword:function(){var t=this,e={loginName:this.$loginNameInput.val()};Craft.sendActionRequest("POST","users/send-password-reset-email",{data:e}).then((function(t){new n})).catch((function(e){var r=e.response;t.showError(r.data.message)})).finally((function(){t.submitBtn.successEvent(),t.submitBtn.updateMessages(Craft.t("app","Reset Password"))}))},submitLogin:function(){var t=this,e={loginName:this.$loginNameInput.val(),password:this.$passwordInput.val(),rememberMe:this.$rememberMeCheckbox.prop("checked")?"y":""};return Craft.sendActionRequest("POST","users/login",{data:e}).then((function(e){t.submitBtn.successEvent(),window.location.href=e.data.returnUrl})).catch((function(e){var r=e.response;Garnish.shake(t.$form,"left"),t.onSubmitResponse(),t.showError(r.data.message)})),!1},onSubmitResponse:function(){this.submitBtn.failureEvent()},showError:function(e){this.clearErrors(),t('<p style="display: none;">'+e+"</p>").appendTo(this.$errors).velocity("fadeIn")},clearErrors:function(){this.$errors.empty()},onSwitchForm:function(t){Garnish.isMobileBrowser()||this.$loginNameInput.trigger("focus"),this.clearErrors(),this.forgotPassword=!this.forgotPassword,this.$form.toggleClass("reset-password",this.forgotPassword),this.submitBtn.updateMessages(Craft.t("app",this.forgotPassword?"Reset Password":"Sign in"))}}),n=Garnish.Modal.extend({init:function(){var e=t('<div class="modal fitted email-sent"><div class="body">'+Craft.t("app","Check your email for instructions to reset your password.")+"</div></div>").appendTo(Garnish.$bod);this.base(e)},hide:function(){}}),new e}()}();
//# sourceMappingURL=login.js.map