function $m(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Do={},Dm={get exports(){return Do},set exports(e){Do=e}},oa={},L={},Om={get exports(){return L},set exports(e){L=e}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li=Symbol.for("react.element"),bm=Symbol.for("react.portal"),Lm=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),Im=Symbol.for("react.context"),zm=Symbol.for("react.forward_ref"),Fm=Symbol.for("react.suspense"),_m=Symbol.for("react.memo"),Um=Symbol.for("react.lazy"),ju=Symbol.iterator;function jm(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var Nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Tc={};function Lr(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||Nc}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ic(){}Ic.prototype=Lr.prototype;function Ts(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||Nc}var Is=Ts.prototype=new Ic;Is.constructor=Ts;Mc(Is,Lr.prototype);Is.isPureReactComponent=!0;var Bu=Array.isArray,zc=Object.prototype.hasOwnProperty,zs={current:null},Fc={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)zc.call(t,r)&&!Fc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Li,type:e,key:o,ref:a,props:i,_owner:zs.current}}function Bm(e,t){return{$$typeof:Li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Li}function Hm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hu=/\/+/g;function Ua(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hm(""+e.key):t.toString(36)}function po(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Li:case bm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ua(a,0):r,Bu(i)?(n="",e!=null&&(n=e.replace(Hu,"$&/")+"/"),po(i,t,n,"",function(d){return d})):i!=null&&(Fs(i)&&(i=Bm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Hu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Bu(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Ua(o,l);a+=po(o,t,n,s,i)}else if(s=jm(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Ua(o,l++),a+=po(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ji(e,t,n){if(e==null)return e;var r=[],i=0;return po(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Vm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},mo={transition:null},Jm={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:mo,ReactCurrentOwner:zs};re.Children={map:ji,forEach:function(e,t,n){ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ji(e,function(){t++}),t},toArray:function(e){return ji(e,function(t){return t})||[]},only:function(e){if(!Fs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Lr;re.Fragment=Lm;re.Profiler=Mm;re.PureComponent=Ts;re.StrictMode=Nm;re.Suspense=Fm;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jm;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mc({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=zs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)zc.call(t,s)&&!Fc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Li,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:Im,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tm,_context:e},e.Consumer=e};re.createElement=_c;re.createFactory=function(e){var t=_c.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:zm,render:e}};re.isValidElement=Fs;re.lazy=function(e){return{$$typeof:Um,_payload:{_status:-1,_result:e},_init:Vm}};re.memo=function(e,t){return{$$typeof:_m,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=mo.transition;mo.transition={};try{e()}finally{mo.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return rt.current.useCallback(e,t)};re.useContext=function(e){return rt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};re.useEffect=function(e,t){return rt.current.useEffect(e,t)};re.useId=function(){return rt.current.useId()};re.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return rt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};re.useRef=function(e){return rt.current.useRef(e)};re.useState=function(e){return rt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return rt.current.useTransition()};re.version="18.2.0";(function(e){e.exports=re})(Om);const tt=Pm(L),bl=$m({__proto__:null,default:tt},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm=L,Wm=Symbol.for("react.element"),Qm=Symbol.for("react.fragment"),Ym=Object.prototype.hasOwnProperty,Km=Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zm={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ym.call(t,r)&&!Zm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Wm,type:e,key:o,ref:a,props:i,_owner:Km.current}}oa.Fragment=Qm;oa.jsx=Uc;oa.jsxs=Uc;(function(e){e.exports=oa})(Dm);const v=Do.jsx,F=Do.jsxs;var Ll={},Nl={},Xm={get exports(){return Nl},set exports(e){Nl=e}},gt={},Ml={},qm={get exports(){return Ml},set exports(e){Ml=e}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,J){var j=M.length;M.push(J);e:for(;0<j;){var ae=j-1>>>1,T=M[ae];if(0<i(T,J))M[ae]=J,M[j]=T,j=ae;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var J=M[0],j=M.pop();if(j!==J){M[0]=j;e:for(var ae=0,T=M.length,_=T>>>1;ae<_;){var z=2*(ae+1)-1,Q=M[z],E=z+1,te=M[E];if(0>i(Q,j))E<T&&0>i(te,Q)?(M[ae]=te,M[E]=j,ae=E):(M[ae]=Q,M[z]=j,ae=z);else if(E<T&&0>i(te,j))M[ae]=te,M[E]=j,ae=E;else break e}}return J}function i(M,J){var j=M.sortIndex-J.sortIndex;return j!==0?j:M.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],d=[],m=1,f=null,y=3,C=!1,k=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(M){for(var J=n(d);J!==null;){if(J.callback===null)r(d);else if(J.startTime<=M)r(d),J.sortIndex=J.expirationTime,t(s,J);else break;J=n(d)}}function S(M){if(w=!1,h(M),!k)if(n(s)!==null)k=!0,ct($);else{var J=n(d);J!==null&&Ve(S,J.startTime-M)}}function $(M,J){k=!1,w&&(w=!1,p(O),O=-1),C=!0;var j=y;try{for(h(J),f=n(s);f!==null&&(!(f.expirationTime>J)||M&&!ye());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,y=f.priorityLevel;var T=ae(f.expirationTime<=J);J=e.unstable_now(),typeof T=="function"?f.callback=T:f===n(s)&&r(s),h(J)}else r(s);f=n(s)}if(f!==null)var _=!0;else{var z=n(d);z!==null&&Ve(S,z.startTime-J),_=!1}return _}finally{f=null,y=j,C=!1}}var b=!1,N=null,O=-1,ee=5,V=-1;function ye(){return!(e.unstable_now()-V<ee)}function xe(){if(N!==null){var M=e.unstable_now();V=M;var J=!0;try{J=N(!0,M)}finally{J?we():(b=!1,N=null)}}else b=!1}var we;if(typeof c=="function")we=function(){c(xe)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,he=Pe.port2;Pe.port1.onmessage=xe,we=function(){he.postMessage(null)}}else we=function(){g(xe,0)};function ct(M){N=M,b||(b=!0,we())}function Ve(M,J){O=g(function(){M(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){k||C||(k=!0,ct($))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(M){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var j=y;y=J;try{return M()}finally{y=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,J){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=y;y=M;try{return J()}finally{y=j}},e.unstable_scheduleCallback=function(M,J,j){var ae=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ae+j:ae):j=ae,M){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=j+T,M={id:m++,callback:J,priorityLevel:M,startTime:j,expirationTime:T,sortIndex:-1},j>ae?(M.sortIndex=j,t(d,M),n(s)===null&&M===n(d)&&(w?(p(O),O=-1):w=!0,Ve(S,j-ae))):(M.sortIndex=T,t(s,M),k||C||(k=!0,ct($))),M},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(M){var J=y;return function(){var j=y;y=J;try{return M.apply(this,arguments)}finally{y=j}}}})(jc);(function(e){e.exports=jc})(qm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc=L,ht=Ml;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hc=new Set,fi={};function Qn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(fi[e]=t,e=0;e<t.length;e++)Hc.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,eh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vu={},Ju={};function th(e){return Tl.call(Ju,e)?!0:Tl.call(Vu,e)?!1:eh.test(e)?Ju[e]=!0:(Vu[e]=!0,!1)}function nh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rh(e,t,n,r){if(t===null||typeof t>"u"||nh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var _s=/[\-:]([a-z])/g;function Us(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_s,Us);Qe[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_s,Us);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_s,Us);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function js(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rh(t,n,i,r)&&(n=null),r||i===null?th(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=Bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bi=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Bs=Symbol.for("react.strict_mode"),Il=Symbol.for("react.profiler"),Vc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),Hs=Symbol.for("react.forward_ref"),zl=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),Vs=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),Gu=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,ja;function Zr(e){if(ja===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ja=t&&t[1]||""}return`
`+ja+e}var Ba=!1;function Ha(e,t){if(!e||Ba)return"";Ba=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ba=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function ih(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=Ha(e.type,!1),e;case 11:return e=Ha(e.type.render,!1),e;case 1:return e=Ha(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case Il:return"Profiler";case Bs:return"StrictMode";case zl:return"Suspense";case Fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jc:return(e.displayName||"Context")+".Consumer";case Vc:return(e._context.displayName||"Context")+".Provider";case Hs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vs:return t=e.displayName||null,t!==null?t:_l(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return _l(e(t))}catch{}}return null}function oh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(t);case 8:return t===Bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ah(e){var t=Wc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hi(e){e._valueTracker||(e._valueTracker=ah(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yc(e,t){t=t.checked,t!=null&&js(e,"checked",t,!1)}function jl(e,t){Yc(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Xr(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function Kc(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ku(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vi,Xc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lh=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){lh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ti[t]=ti[e]})});function qc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ti.hasOwnProperty(e)&&ti[e]?(""+t).trim():t+"px"}function ef(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sh=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,t){if(t){if(sh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,gr=null,vr=null;function Zu(e){if(e=Ti(e)){if(typeof Ql!="function")throw Error(D(280));var t=e.stateNode;t&&(t=da(t),Ql(e.stateNode,e.type,t))}}function tf(e){gr?vr?vr.push(e):vr=[e]:gr=e}function nf(){if(gr){var e=gr,t=vr;if(vr=gr=null,Zu(e),t)for(e=0;e<t.length;e++)Zu(t[e])}}function rf(e,t){return e(t)}function of(){}var Va=!1;function af(e,t,n){if(Va)return e(t,n);Va=!0;try{return rf(e,t,n)}finally{Va=!1,(gr!==null||vr!==null)&&(of(),nf())}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var r=da(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Yl=!1;if(qt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Yl=!1}function uh(e,t,n,r,i,o,a,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var ni=!1,bo=null,Lo=!1,Kl=null,dh={onError:function(e){ni=!0,bo=e}};function ch(e,t,n,r,i,o,a,l,s){ni=!1,bo=null,uh.apply(dh,arguments)}function fh(e,t,n,r,i,o,a,l,s){if(ch.apply(this,arguments),ni){if(ni){var d=bo;ni=!1,bo=null}else throw Error(D(198));Lo||(Lo=!0,Kl=d)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xu(e){if(Yn(e)!==e)throw Error(D(188))}function ph(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Xu(i),e;if(o===r)return Xu(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function sf(e){return e=ph(e),e!==null?uf(e):null}function uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uf(e);if(t!==null)return t;e=e.sibling}return null}var df=ht.unstable_scheduleCallback,qu=ht.unstable_cancelCallback,mh=ht.unstable_shouldYield,hh=ht.unstable_requestPaint,be=ht.unstable_now,gh=ht.unstable_getCurrentPriorityLevel,Gs=ht.unstable_ImmediatePriority,cf=ht.unstable_UserBlockingPriority,No=ht.unstable_NormalPriority,vh=ht.unstable_LowPriority,ff=ht.unstable_IdlePriority,aa=null,Ht=null;function yh(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(aa,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Sh,xh=Math.log,wh=Math.LN2;function Sh(e){return e>>>=0,e===0?32:31-(xh(e)/wh|0)|0}var Ji=64,Gi=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=qr(l):(o&=a,o!==0&&(r=qr(o)))}else a=n&~i,a!==0?r=qr(a):o!==0&&(r=qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Eh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Nt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Eh(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pf(){var e=Ji;return Ji<<=1,!(Ji&4194240)&&(Ji=64),e}function Ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function Ch(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ws(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function mf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hf,Qs,gf,vf,yf,Xl=!1,Wi=[],hn=null,gn=null,vn=null,hi=new Map,gi=new Map,cn=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ed(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function Br(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ti(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rh(e,t,n,r,i){switch(t){case"focusin":return hn=Br(hn,e,t,n,r,i),!0;case"dragenter":return gn=Br(gn,e,t,n,r,i),!0;case"mouseover":return vn=Br(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return hi.set(o,Br(hi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,gi.set(o,Br(gi.get(o)||null,e,t,n,r,i)),!0}return!1}function xf(e){var t=Tn(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=lf(n),t!==null){e.blockedOn=t,yf(e.priority,function(){gf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wl=r,n.target.dispatchEvent(r),Wl=null}else return t=Ti(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function td(e,t,n){ho(e)&&n.delete(t)}function $h(){Xl=!1,hn!==null&&ho(hn)&&(hn=null),gn!==null&&ho(gn)&&(gn=null),vn!==null&&ho(vn)&&(vn=null),hi.forEach(td),gi.forEach(td)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xl||(Xl=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,$h)))}function vi(e){function t(i){return Hr(i,e)}if(0<Wi.length){Hr(Wi[0],e);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&Hr(hn,e),gn!==null&&Hr(gn,e),vn!==null&&Hr(vn,e),hi.forEach(t),gi.forEach(t),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)xf(n),n.blockedOn===null&&cn.shift()}var yr=on.ReactCurrentBatchConfig,To=!0;function Ph(e,t,n,r){var i=ce,o=yr.transition;yr.transition=null;try{ce=1,Ys(e,t,n,r)}finally{ce=i,yr.transition=o}}function Dh(e,t,n,r){var i=ce,o=yr.transition;yr.transition=null;try{ce=4,Ys(e,t,n,r)}finally{ce=i,yr.transition=o}}function Ys(e,t,n,r){if(To){var i=ql(e,t,n,r);if(i===null)tl(e,t,r,Io,n),ed(e,r);else if(Rh(i,e,t,n,r))r.stopPropagation();else if(ed(e,r),t&4&&-1<Ah.indexOf(e)){for(;i!==null;){var o=Ti(i);if(o!==null&&hf(o),o=ql(e,t,n,r),o===null&&tl(e,t,r,Io,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else tl(e,t,r,null,n)}}var Io=null;function ql(e,t,n,r){if(Io=null,e=Js(r),e=Tn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Io=e,null}function wf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gh()){case Gs:return 1;case cf:return 4;case No:case vh:return 16;case ff:return 536870912;default:return 16}default:return 16}}var pn=null,Ks=null,go=null;function Sf(){if(go)return go;var e,t=Ks,n=t.length,r,i="value"in pn?pn.value:pn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return go=i.slice(e,1<r?1-r:void 0)}function vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function nd(){return!1}function vt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Qi:nd,this.isPropagationStopped=nd,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=vt(Nr),Mi=Re({},Nr,{view:0,detail:0}),Oh=vt(Mi),Ga,Wa,Vr,la=Re({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Ga=e.screenX-Vr.screenX,Wa=e.screenY-Vr.screenY):Wa=Ga=0,Vr=e),Ga)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),rd=vt(la),bh=Re({},la,{dataTransfer:0}),Lh=vt(bh),Nh=Re({},Mi,{relatedTarget:0}),Qa=vt(Nh),Mh=Re({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Th=vt(Mh),Ih=Re({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zh=vt(Ih),Fh=Re({},Nr,{data:0}),id=vt(Fh),_h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jh[e])?!!t[e]:!1}function Xs(){return Bh}var Hh=Re({},Mi,{key:function(e){if(e.key){var t=_h[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vh=vt(Hh),Jh=Re({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=vt(Jh),Gh=Re({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),Wh=vt(Gh),Qh=Re({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yh=vt(Qh),Kh=Re({},la,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zh=vt(Kh),Xh=[9,13,27,32],qs=qt&&"CompositionEvent"in window,ri=null;qt&&"documentMode"in document&&(ri=document.documentMode);var qh=qt&&"TextEvent"in window&&!ri,Ef=qt&&(!qs||ri&&8<ri&&11>=ri),ad=String.fromCharCode(32),ld=!1;function kf(e,t){switch(e){case"keyup":return Xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function eg(e,t){switch(e){case"compositionend":return Cf(t);case"keypress":return t.which!==32?null:(ld=!0,ad);case"textInput":return e=t.data,e===ad&&ld?null:e;default:return null}}function tg(e,t){if(nr)return e==="compositionend"||!qs&&kf(e,t)?(e=Sf(),go=Ks=pn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ef&&t.locale!=="ko"?null:t.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ng[e.type]:t==="textarea"}function Af(e,t,n,r){tf(r),t=zo(t,"onChange"),0<t.length&&(n=new Zs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,yi=null;function rg(e){If(e,0)}function sa(e){var t=or(e);if(Qc(t))return e}function ig(e,t){if(e==="change")return t}var Rf=!1;if(qt){var Ya;if(qt){var Ka="oninput"in document;if(!Ka){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),Ka=typeof ud.oninput=="function"}Ya=Ka}else Ya=!1;Rf=Ya&&(!document.documentMode||9<document.documentMode)}function dd(){ii&&(ii.detachEvent("onpropertychange",$f),yi=ii=null)}function $f(e){if(e.propertyName==="value"&&sa(yi)){var t=[];Af(t,yi,e,Js(e)),af(rg,t)}}function og(e,t,n){e==="focusin"?(dd(),ii=t,yi=n,ii.attachEvent("onpropertychange",$f)):e==="focusout"&&dd()}function ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sa(yi)}function lg(e,t){if(e==="click")return sa(t)}function sg(e,t){if(e==="input"||e==="change")return sa(t)}function ug(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:ug;function xi(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tl.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fd(e,t){var n=cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cd(n)}}function Pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Df(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dg(e){var t=Df(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pf(n.ownerDocument.documentElement,n)){if(r!==null&&eu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=fd(n,o);var a=fd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cg=qt&&"documentMode"in document&&11>=document.documentMode,rr=null,es=null,oi=null,ts=!1;function pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ts||rr==null||rr!==Oo(r)||(r=rr,"selectionStart"in r&&eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&xi(oi,r)||(oi=r,r=zo(es,"onSelect"),0<r.length&&(t=new Zs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},Za={},Of={};qt&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function ua(e){if(Za[e])return Za[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Of)return Za[e]=t[n];return e}var bf=ua("animationend"),Lf=ua("animationiteration"),Nf=ua("animationstart"),Mf=ua("transitionend"),Tf=new Map,md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){Tf.set(e,t),Qn(t,[e])}for(var Xa=0;Xa<md.length;Xa++){var qa=md[Xa],fg=qa.toLowerCase(),pg=qa[0].toUpperCase()+qa.slice(1);$n(fg,"on"+pg)}$n(bf,"onAnimationEnd");$n(Lf,"onAnimationIteration");$n(Nf,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Mf,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function hd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fh(r,t,void 0,e),e.currentTarget=null}function If(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;hd(i,l,d),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,d=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;hd(i,l,d),o=s}}}if(Lo)throw e=Kl,Lo=!1,Kl=null,e}function ge(e,t){var n=t[as];n===void 0&&(n=t[as]=new Set);var r=e+"__bubble";n.has(r)||(zf(t,e,2,!1),n.add(r))}function el(e,t,n){var r=0;t&&(r|=4),zf(n,e,r,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[Ki]){e[Ki]=!0,Hc.forEach(function(n){n!=="selectionchange"&&(mg.has(n)||el(n,!1,e),el(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,el("selectionchange",!1,t))}}function zf(e,t,n,r){switch(wf(t)){case 1:var i=Ph;break;case 4:i=Dh;break;default:i=Ys}n=i.bind(null,t,n,e),i=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function tl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Tn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}af(function(){var d=o,m=Js(n),f=[];e:{var y=Tf.get(e);if(y!==void 0){var C=Zs,k=e;switch(e){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":C=Vh;break;case"focusin":k="focus",C=Qa;break;case"focusout":k="blur",C=Qa;break;case"beforeblur":case"afterblur":C=Qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Wh;break;case bf:case Lf:case Nf:C=Th;break;case Mf:C=Yh;break;case"scroll":C=Oh;break;case"wheel":C=Zh;break;case"copy":case"cut":case"paste":C=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=od}var w=(t&4)!==0,g=!w&&e==="scroll",p=w?y!==null?y+"Capture":null:y;w=[];for(var c=d,h;c!==null;){h=c;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,p!==null&&(S=mi(c,p),S!=null&&w.push(Si(c,S,h)))),g)break;c=c.return}0<w.length&&(y=new C(y,k,null,n,m),f.push({event:y,listeners:w}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",y&&n!==Wl&&(k=n.relatedTarget||n.fromElement)&&(Tn(k)||k[en]))break e;if((C||y)&&(y=m.window===m?m:(y=m.ownerDocument)?y.defaultView||y.parentWindow:window,C?(k=n.relatedTarget||n.toElement,C=d,k=k?Tn(k):null,k!==null&&(g=Yn(k),k!==g||k.tag!==5&&k.tag!==6)&&(k=null)):(C=null,k=d),C!==k)){if(w=rd,S="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=od,S="onPointerLeave",p="onPointerEnter",c="pointer"),g=C==null?y:or(C),h=k==null?y:or(k),y=new w(S,c+"leave",C,n,m),y.target=g,y.relatedTarget=h,S=null,Tn(m)===d&&(w=new w(p,c+"enter",k,n,m),w.target=h,w.relatedTarget=g,S=w),g=S,C&&k)t:{for(w=C,p=k,c=0,h=w;h;h=Xn(h))c++;for(h=0,S=p;S;S=Xn(S))h++;for(;0<c-h;)w=Xn(w),c--;for(;0<h-c;)p=Xn(p),h--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break t;w=Xn(w),p=Xn(p)}w=null}else w=null;C!==null&&gd(f,y,C,w,!1),k!==null&&g!==null&&gd(f,g,k,w,!0)}}e:{if(y=d?or(d):window,C=y.nodeName&&y.nodeName.toLowerCase(),C==="select"||C==="input"&&y.type==="file")var $=ig;else if(sd(y))if(Rf)$=sg;else{$=ag;var b=og}else(C=y.nodeName)&&C.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&($=lg);if($&&($=$(e,d))){Af(f,$,n,m);break e}b&&b(e,y,d),e==="focusout"&&(b=y._wrapperState)&&b.controlled&&y.type==="number"&&Bl(y,"number",y.value)}switch(b=d?or(d):window,e){case"focusin":(sd(b)||b.contentEditable==="true")&&(rr=b,es=d,oi=null);break;case"focusout":oi=es=rr=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,pd(f,n,m);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":pd(f,n,m)}var N;if(qs)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else nr?kf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Ef&&n.locale!=="ko"&&(nr||O!=="onCompositionStart"?O==="onCompositionEnd"&&nr&&(N=Sf()):(pn=m,Ks="value"in pn?pn.value:pn.textContent,nr=!0)),b=zo(d,O),0<b.length&&(O=new id(O,e,null,n,m),f.push({event:O,listeners:b}),N?O.data=N:(N=Cf(n),N!==null&&(O.data=N)))),(N=qh?eg(e,n):tg(e,n))&&(d=zo(d,"onBeforeInput"),0<d.length&&(m=new id("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:d}),m.data=N))}If(f,t)})}function Si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=mi(e,n),o!=null&&r.unshift(Si(e,o,i)),o=mi(e,t),o!=null&&r.push(Si(e,o,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,i?(s=mi(n,o),s!=null&&a.unshift(Si(n,s,l))):i||(s=mi(n,o),s!=null&&a.push(Si(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var hg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function vd(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(gg,"")}function Zi(e,t,n){if(t=vd(t),vd(e)!==t&&n)throw Error(D(425))}function Fo(){}var ns=null,rs=null;function is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,yg=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(e){return yd.resolve(null).then(e).catch(xg)}:os;function xg(e){setTimeout(function(){throw e})}function nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Mr,Ei="__reactProps$"+Mr,en="__reactContainer$"+Mr,as="__reactEvents$"+Mr,wg="__reactListeners$"+Mr,Sg="__reactHandles$"+Mr;function Tn(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xd(e);e!==null;){if(n=e[Bt])return n;e=xd(e)}return t}e=n,n=e.parentNode}return null}function Ti(e){return e=e[Bt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function da(e){return e[Ei]||null}var ls=[],ar=-1;function Pn(e){return{current:e}}function ve(e){0>ar||(e.current=ls[ar],ls[ar]=null,ar--)}function me(e,t){ar++,ls[ar]=e.current,e.current=t}var Rn={},qe=Pn(Rn),st=Pn(!1),jn=Rn;function kr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function _o(){ve(st),ve(qe)}function wd(e,t,n){if(qe.current!==Rn)throw Error(D(168));me(qe,t),me(st,n)}function Ff(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,oh(e)||"Unknown",i));return Re({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,jn=qe.current,me(qe,e),me(st,st.current),!0}function Sd(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Ff(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,ve(st),ve(qe),me(qe,e)):ve(st),me(st,n)}var Qt=null,ca=!1,rl=!1;function _f(e){Qt===null?Qt=[e]:Qt.push(e)}function Eg(e){ca=!0,_f(e)}function Dn(){if(!rl&&Qt!==null){rl=!0;var e=0,t=ce;try{var n=Qt;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,ca=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),df(Gs,Dn),i}finally{ce=t,rl=!1}}return null}var lr=[],sr=0,jo=null,Bo=0,xt=[],wt=0,Bn=null,Yt=1,Kt="";function Nn(e,t){lr[sr++]=Bo,lr[sr++]=jo,jo=e,Bo=t}function Uf(e,t,n){xt[wt++]=Yt,xt[wt++]=Kt,xt[wt++]=Bn,Bn=e;var r=Yt;e=Kt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var o=32-Nt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Yt=1<<32-Nt(t)+i|n<<i|r,Kt=o+e}else Yt=1<<o|n<<i|r,Kt=e}function tu(e){e.return!==null&&(Nn(e,1),Uf(e,1,0))}function nu(e){for(;e===jo;)jo=lr[--sr],lr[sr]=null,Bo=lr[--sr],lr[sr]=null;for(;e===Bn;)Bn=xt[--wt],xt[wt]=null,Kt=xt[--wt],xt[wt]=null,Yt=xt[--wt],xt[wt]=null}var mt=null,pt=null,Ee=!1,bt=null;function jf(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ed(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mt=e,pt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Yt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,mt=e,pt=null,!0):!1;default:return!1}}function ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function us(e){if(Ee){var t=pt;if(t){var n=t;if(!Ed(e,t)){if(ss(e))throw Error(D(418));t=yn(n.nextSibling);var r=mt;t&&Ed(e,t)?jf(r,n):(e.flags=e.flags&-4097|2,Ee=!1,mt=e)}}else{if(ss(e))throw Error(D(418));e.flags=e.flags&-4097|2,Ee=!1,mt=e}}}function kd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function Xi(e){if(e!==mt)return!1;if(!Ee)return kd(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!is(e.type,e.memoizedProps)),t&&(t=pt)){if(ss(e))throw Bf(),Error(D(418));for(;t;)jf(e,t),t=yn(t.nextSibling)}if(kd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=mt?yn(e.stateNode.nextSibling):null;return!0}function Bf(){for(var e=pt;e;)e=yn(e.nextSibling)}function Cr(){pt=mt=null,Ee=!1}function ru(e){bt===null?bt=[e]:bt.push(e)}var kg=on.ReactCurrentBatchConfig;function Dt(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ho=Pn(null),Vo=null,ur=null,iu=null;function ou(){iu=ur=Vo=null}function au(e){var t=Ho.current;ve(Ho),e._currentValue=t}function ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Vo=e,iu=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(iu!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Vo===null)throw Error(D(308));ur=e,Vo.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var In=null;function lu(e){In===null?In=[e]:In.push(e)}function Hf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lu(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,lu(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}function Cd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jo(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,d=s.next;s.next=null,a===null?o=d:a.next=d,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,m=d=s=null,l=o;do{var y=l.lane,C=l.eventTime;if((r&y)===y){m!==null&&(m=m.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,w=l;switch(y=t,C=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){f=k.call(C,f,y);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,y=typeof k=="function"?k.call(C,f,y):k,y==null)break e;f=Re({},f,y);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else C={eventTime:C,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=C,s=f):m=m.next=C,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(m===null&&(s=f),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Vn|=a,e.lanes=a,e.memoizedState=f}}function Ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var Jf=new Bc.Component().refs;function cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fa={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Sn(e),o=Zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Mt(t,e,i,r),yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Sn(e),o=Zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Mt(t,e,i,r),yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Sn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Mt(t,e,r,n),yo(t,e,r))}};function Rd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!xi(n,r)||!xi(i,o):!0}function Gf(e,t,n){var r=!1,i=Rn,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=ut(t)?jn:qe.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):Rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $d(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fa.enqueueReplaceState(t,t.state,null)}function fs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jf,su(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=ut(t)?jn:qe.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(cs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fa.enqueueReplaceState(i,i.state,null),Jo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Jf&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function qi(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pd(e){var t=e._init;return t(e._payload)}function Wf(e){function t(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=En(p,c),p.index=0,p.sibling=null,p}function o(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,h,S){return c===null||c.tag!==6?(c=dl(h,p.mode,S),c.return=p,c):(c=i(c,h),c.return=p,c)}function s(p,c,h,S){var $=h.type;return $===tr?m(p,c,h.props.children,S,h.key):c!==null&&(c.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===un&&Pd($)===c.type)?(S=i(c,h.props),S.ref=Jr(p,c,h),S.return=p,S):(S=Co(h.type,h.key,h.props,null,p.mode,S),S.ref=Jr(p,c,h),S.return=p,S)}function d(p,c,h,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=cl(h,p.mode,S),c.return=p,c):(c=i(c,h.children||[]),c.return=p,c)}function m(p,c,h,S,$){return c===null||c.tag!==7?(c=Un(h,p.mode,S,$),c.return=p,c):(c=i(c,h),c.return=p,c)}function f(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=dl(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Bi:return h=Co(c.type,c.key,c.props,null,p.mode,h),h.ref=Jr(p,null,c),h.return=p,h;case er:return c=cl(c,p.mode,h),c.return=p,c;case un:var S=c._init;return f(p,S(c._payload),h)}if(Xr(c)||Ur(c))return c=Un(c,p.mode,h,null),c.return=p,c;qi(p,c)}return null}function y(p,c,h,S){var $=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return $!==null?null:l(p,c,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Bi:return h.key===$?s(p,c,h,S):null;case er:return h.key===$?d(p,c,h,S):null;case un:return $=h._init,y(p,c,$(h._payload),S)}if(Xr(h)||Ur(h))return $!==null?null:m(p,c,h,S,null);qi(p,h)}return null}function C(p,c,h,S,$){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(h)||null,l(c,p,""+S,$);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Bi:return p=p.get(S.key===null?h:S.key)||null,s(c,p,S,$);case er:return p=p.get(S.key===null?h:S.key)||null,d(c,p,S,$);case un:var b=S._init;return C(p,c,h,b(S._payload),$)}if(Xr(S)||Ur(S))return p=p.get(h)||null,m(c,p,S,$,null);qi(c,S)}return null}function k(p,c,h,S){for(var $=null,b=null,N=c,O=c=0,ee=null;N!==null&&O<h.length;O++){N.index>O?(ee=N,N=null):ee=N.sibling;var V=y(p,N,h[O],S);if(V===null){N===null&&(N=ee);break}e&&N&&V.alternate===null&&t(p,N),c=o(V,c,O),b===null?$=V:b.sibling=V,b=V,N=ee}if(O===h.length)return n(p,N),Ee&&Nn(p,O),$;if(N===null){for(;O<h.length;O++)N=f(p,h[O],S),N!==null&&(c=o(N,c,O),b===null?$=N:b.sibling=N,b=N);return Ee&&Nn(p,O),$}for(N=r(p,N);O<h.length;O++)ee=C(N,p,O,h[O],S),ee!==null&&(e&&ee.alternate!==null&&N.delete(ee.key===null?O:ee.key),c=o(ee,c,O),b===null?$=ee:b.sibling=ee,b=ee);return e&&N.forEach(function(ye){return t(p,ye)}),Ee&&Nn(p,O),$}function w(p,c,h,S){var $=Ur(h);if(typeof $!="function")throw Error(D(150));if(h=$.call(h),h==null)throw Error(D(151));for(var b=$=null,N=c,O=c=0,ee=null,V=h.next();N!==null&&!V.done;O++,V=h.next()){N.index>O?(ee=N,N=null):ee=N.sibling;var ye=y(p,N,V.value,S);if(ye===null){N===null&&(N=ee);break}e&&N&&ye.alternate===null&&t(p,N),c=o(ye,c,O),b===null?$=ye:b.sibling=ye,b=ye,N=ee}if(V.done)return n(p,N),Ee&&Nn(p,O),$;if(N===null){for(;!V.done;O++,V=h.next())V=f(p,V.value,S),V!==null&&(c=o(V,c,O),b===null?$=V:b.sibling=V,b=V);return Ee&&Nn(p,O),$}for(N=r(p,N);!V.done;O++,V=h.next())V=C(N,p,O,V.value,S),V!==null&&(e&&V.alternate!==null&&N.delete(V.key===null?O:V.key),c=o(V,c,O),b===null?$=V:b.sibling=V,b=V);return e&&N.forEach(function(xe){return t(p,xe)}),Ee&&Nn(p,O),$}function g(p,c,h,S){if(typeof h=="object"&&h!==null&&h.type===tr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Bi:e:{for(var $=h.key,b=c;b!==null;){if(b.key===$){if($=h.type,$===tr){if(b.tag===7){n(p,b.sibling),c=i(b,h.props.children),c.return=p,p=c;break e}}else if(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===un&&Pd($)===b.type){n(p,b.sibling),c=i(b,h.props),c.ref=Jr(p,b,h),c.return=p,p=c;break e}n(p,b);break}else t(p,b);b=b.sibling}h.type===tr?(c=Un(h.props.children,p.mode,S,h.key),c.return=p,p=c):(S=Co(h.type,h.key,h.props,null,p.mode,S),S.ref=Jr(p,c,h),S.return=p,p=S)}return a(p);case er:e:{for(b=h.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(p,c.sibling),c=i(c,h.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=cl(h,p.mode,S),c.return=p,p=c}return a(p);case un:return b=h._init,g(p,c,b(h._payload),S)}if(Xr(h))return k(p,c,h,S);if(Ur(h))return w(p,c,h,S);qi(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,h),c.return=p,p=c):(n(p,c),c=dl(h,p.mode,S),c.return=p,p=c),a(p)):n(p,c)}return g}var Ar=Wf(!0),Qf=Wf(!1),Ii={},Vt=Pn(Ii),ki=Pn(Ii),Ci=Pn(Ii);function zn(e){if(e===Ii)throw Error(D(174));return e}function uu(e,t){switch(me(Ci,t),me(ki,e),me(Vt,Ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}ve(Vt),me(Vt,t)}function Rr(){ve(Vt),ve(ki),ve(Ci)}function Yf(e){zn(Ci.current);var t=zn(Vt.current),n=Vl(t,e.type);t!==n&&(me(ki,e),me(Vt,n))}function du(e){ki.current===e&&(ve(Vt),ve(ki))}var Ce=Pn(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function cu(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var xo=on.ReactCurrentDispatcher,ol=on.ReactCurrentBatchConfig,Hn=0,Ae=null,ze=null,je=null,Wo=!1,ai=!1,Ai=0,Cg=0;function Ke(){throw Error(D(321))}function fu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function pu(e,t,n,r,i,o){if(Hn=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?Pg:Dg,e=n(r,i),ai){o=0;do{if(ai=!1,Ai=0,25<=o)throw Error(D(301));o+=1,je=ze=null,t.updateQueue=null,xo.current=Og,e=n(r,i)}while(ai)}if(xo.current=Qo,t=ze!==null&&ze.next!==null,Hn=0,je=ze=Ae=null,Wo=!1,t)throw Error(D(300));return e}function mu(){var e=Ai!==0;return Ai=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ae.memoizedState=je=e:je=je.next=e,je}function Ct(){if(ze===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=je===null?Ae.memoizedState:je.next;if(t!==null)je=t,ze=e;else{if(e===null)throw Error(D(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},je===null?Ae.memoizedState=je=e:je=je.next=e}return je}function Ri(e,t){return typeof t=="function"?t(e):t}function al(e){var t=Ct(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,d=o;do{var m=d.lane;if((Hn&m)===m)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Ae.lanes|=m,Vn|=m}d=d.next}while(d!==null&&d!==o);s===null?a=r:s.next=l,Tt(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,Vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ll(e){var t=Ct(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Tt(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Kf(){}function Zf(e,t){var n=Ae,r=Ct(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,lt=!0),r=r.queue,hu(ep.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,$i(9,qf.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(D(349));Hn&30||Xf(n,t,i)}return i}function Xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qf(e,t,n,r){t.value=n,t.getSnapshot=r,tp(t)&&np(e)}function ep(e,t,n){return n(function(){tp(t)&&np(e)})}function tp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function np(e){var t=tn(e,1);t!==null&&Mt(t,e,1,-1)}function Dd(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},t.queue=e,e=e.dispatch=$g.bind(null,Ae,e),[t.memoizedState,e]}function $i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rp(){return Ct().memoizedState}function wo(e,t,n,r){var i=Ut();Ae.flags|=e,i.memoizedState=$i(1|t,n,void 0,r===void 0?null:r)}function pa(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(ze!==null){var a=ze.memoizedState;if(o=a.destroy,r!==null&&fu(r,a.deps)){i.memoizedState=$i(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=$i(1|t,n,o,r)}function Od(e,t){return wo(8390656,8,e,t)}function hu(e,t){return pa(2048,8,e,t)}function ip(e,t){return pa(4,2,e,t)}function op(e,t){return pa(4,4,e,t)}function ap(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lp(e,t,n){return n=n!=null?n.concat([e]):null,pa(4,4,ap.bind(null,t,e),n)}function gu(){}function sp(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function up(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dp(e,t,n){return Hn&21?(Tt(n,t)||(n=pf(),Ae.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function Ag(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{ce=n,ol.transition=r}}function cp(){return Ct().memoizedState}function Rg(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fp(e))pp(t,n);else if(n=Hf(e,t,n,r),n!==null){var i=nt();Mt(n,e,r,i),mp(n,t,r)}}function $g(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fp(e))pp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Tt(l,a)){var s=t.interleaved;s===null?(i.next=i,lu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Hf(e,t,i,r),n!==null&&(i=nt(),Mt(n,e,r,i),mp(n,t,r))}}function fp(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function pp(e,t){ai=Wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}var Qo={readContext:kt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Pg={readContext:kt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Od,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,ap.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rg.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Dd,useDebugValue:gu,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Dd(!1),t=e[0];return e=Ag.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Ut();if(Ee){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Be===null)throw Error(D(349));Hn&30||Xf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Od(ep.bind(null,r,o,e),[e]),r.flags|=2048,$i(9,qf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Be.identifierPrefix;if(Ee){var n=Kt,r=Yt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dg={readContext:kt,useCallback:sp,useContext:kt,useEffect:hu,useImperativeHandle:lp,useInsertionEffect:ip,useLayoutEffect:op,useMemo:up,useReducer:al,useRef:rp,useState:function(){return al(Ri)},useDebugValue:gu,useDeferredValue:function(e){var t=Ct();return dp(t,ze.memoizedState,e)},useTransition:function(){var e=al(Ri)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Kf,useSyncExternalStore:Zf,useId:cp,unstable_isNewReconciler:!1},Og={readContext:kt,useCallback:sp,useContext:kt,useEffect:hu,useImperativeHandle:lp,useInsertionEffect:ip,useLayoutEffect:op,useMemo:up,useReducer:ll,useRef:rp,useState:function(){return ll(Ri)},useDebugValue:gu,useDeferredValue:function(e){var t=Ct();return ze===null?t.memoizedState=e:dp(t,ze.memoizedState,e)},useTransition:function(){var e=ll(Ri)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Kf,useSyncExternalStore:Zf,useId:cp,unstable_isNewReconciler:!1};function $r(e,t){try{var n="",r=t;do n+=ih(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ps(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bg=typeof WeakMap=="function"?WeakMap:Map;function hp(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,ks=r),ps(e,t)},n}function gp(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ps(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ps(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function bd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jg.bind(null,e,t,n),t.then(e,e))}function Ld(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var Lg=on.ReactCurrentOwner,lt=!1;function et(e,t,n,r){t.child=e===null?Qf(t,null,n,r):Ar(t,e.child,n,r)}function Md(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=pu(e,t,n,r,o,i),n=mu(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&n&&tu(t),t.flags|=1,et(e,t,r,i),t.child)}function Td(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Cu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vp(e,t,o,r,i)):(e=Co(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(a,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=En(o,r),e.ref=t.ref,e.return=t,t.child=e}function vp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xi(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,nn(e,t,i)}return ms(e,t,n,r,i)}function yp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(cr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(cr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(cr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(cr,ft),ft|=r;return et(e,t,i,n),t.child}function xp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,n,r,i){var o=ut(n)?jn:qe.current;return o=kr(t,o),xr(t,i),n=pu(e,t,n,r,o,i),r=mu(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&r&&tu(t),t.flags|=1,et(e,t,n,i),t.child)}function Id(e,t,n,r,i){if(ut(n)){var o=!0;Uo(t)}else o=!1;if(xr(t,i),t.stateNode===null)So(e,t),Gf(t,n,r),fs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=kt(d):(d=ut(n)?jn:qe.current,d=kr(t,d));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==d)&&$d(t,a,r,d),dn=!1;var y=t.memoizedState;a.state=y,Jo(t,r,a,i),s=t.memoizedState,l!==r||y!==s||st.current||dn?(typeof m=="function"&&(cs(t,n,m,r),s=t.memoizedState),(l=dn||Rd(t,n,l,r,y,s,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Vf(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Dt(t.type,l),a.props=d,f=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=kt(s):(s=ut(n)?jn:qe.current,s=kr(t,s));var C=n.getDerivedStateFromProps;(m=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||y!==s)&&$d(t,a,r,s),dn=!1,y=t.memoizedState,a.state=y,Jo(t,r,a,i);var k=t.memoizedState;l!==f||y!==k||st.current||dn?(typeof C=="function"&&(cs(t,n,C,r),k=t.memoizedState),(d=dn||Rd(t,n,d,r,y,k,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=s,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return hs(e,t,n,r,o,i)}function hs(e,t,n,r,i,o){xp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Sd(t,n,!1),nn(e,t,o);r=t.stateNode,Lg.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ar(t,e.child,null,o),t.child=Ar(t,null,l,o)):et(e,t,l,o),t.memoizedState=r.state,i&&Sd(t,n,!0),t.child}function wp(e){var t=e.stateNode;t.pendingContext?wd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wd(e,t.context,!1),uu(e,t.containerInfo)}function zd(e,t,n,r,i){return Cr(),ru(i),t.flags|=256,et(e,t,n,r),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sp(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Ce,i&1),e===null)return us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ga(a,r,0,null),e=Un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=vs(n),t.memoizedState=gs,e):vu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ng(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=En(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=En(l,o):(o=Un(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?vs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=gs,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vu(e,t){return t=ga({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&ru(r),Ar(t,e.child,null,n),e=vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ng(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=sl(Error(D(422))),eo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ga({mode:"visible",children:r.children},i,0,null),o=Un(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ar(t,e.child,null,a),t.child.memoizedState=vs(a),t.memoizedState=gs,o);if(!(t.mode&1))return eo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(D(419)),r=sl(o,r,void 0),eo(e,t,a,r)}if(l=(a&e.childLanes)!==0,lt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),Mt(r,e,i,-1))}return ku(),r=sl(Error(D(421))),eo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Gg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=yn(i.nextSibling),mt=t,Ee=!0,bt=null,e!==null&&(xt[wt++]=Yt,xt[wt++]=Kt,xt[wt++]=Bn,Yt=e.id,Kt=e.overflow,Bn=t),t=vu(t,r.children),t.flags|=4096,t)}function Fd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ds(e.return,t,n)}function ul(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ep(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fd(e,n,t);else if(e.tag===19)Fd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,o);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mg(e,t,n){switch(t.tag){case 3:wp(t),Cr();break;case 5:Yf(t);break;case 1:ut(t.type)&&Uo(t);break;case 4:uu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(Ho,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Sp(e,t,n):(me(Ce,Ce.current&1),e=nn(e,t,n),e!==null?e.sibling:null);me(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ep(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,yp(e,t,n)}return nn(e,t,n)}var kp,ys,Cp,Ap;kp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ys=function(){};Cp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn(Vt.current);var o=null;switch(n){case"input":i=Ul(e,i),r=Ul(e,r),o=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fo)}Jl(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(fi.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(fi.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&ge("scroll",e),o||l===s||(o=[])):(o=o||[]).push(d,s))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Ap=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tg(e,t,n){var r=t.pendingProps;switch(nu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ut(t.type)&&_o(),Ze(t),null;case 3:return r=t.stateNode,Rr(),ve(st),ve(qe),cu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(Rs(bt),bt=null))),ys(e,t),Ze(t),null;case 5:du(t);var i=zn(Ci.current);if(n=t.type,e!==null&&t.stateNode!=null)Cp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ze(t),null}if(e=zn(Vt.current),Xi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Bt]=t,r[Ei]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)ge(ei[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Wu(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Yu(r,o),ge("invalid",r)}Jl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),i=["children",""+l]):fi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":Hi(r),Qu(r,o,!0);break;case"textarea":Hi(r),Ku(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Bt]=t,e[Ei]=r,kp(e,t,!1,!1),t.stateNode=e;e:{switch(a=Gl(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)ge(ei[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Wu(e,r),i=Ul(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Yu(e,r),i=Hl(e,r),ge("invalid",e);break;default:i=r}Jl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ef(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Xc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&pi(e,s):typeof s=="number"&&pi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&js(e,o,s,a))}switch(n){case"input":Hi(e),Qu(e,r,!1);break;case"textarea":Hi(e),Ku(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Ap(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=zn(Ci.current),zn(Vt.current),Xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(o=r.nodeValue!==n)&&(e=mt,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&pt!==null&&t.mode&1&&!(t.flags&128))Bf(),Cr(),t.flags|=98560,o=!1;else if(o=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Bt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else bt!==null&&(Rs(bt),bt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Fe===0&&(Fe=3):ku())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Rr(),ys(e,t),e===null&&wi(t.stateNode.containerInfo),Ze(t),null;case 10:return au(t.type._context),Ze(t),null;case 17:return ut(t.type)&&_o(),Ze(t),null;case 19:if(ve(Ce),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Gr(o,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Go(e),a!==null){for(t.flags|=128,Gr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>Pr&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Go(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ee)return Ze(t),null}else 2*be()-o.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,n=Ce.current,me(Ce,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Eu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Ig(e,t){switch(nu(t),t.tag){case 1:return ut(t.type)&&_o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),ve(st),ve(qe),cu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return du(t),null;case 13:if(ve(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ce),null;case 4:return Rr(),null;case 10:return au(t.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var to=!1,Xe=!1,zg=typeof WeakSet=="function"?WeakSet:Set,U=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function xs(e,t,n){try{n()}catch(r){$e(e,t,r)}}var _d=!1;function Fg(e,t){if(ns=To,e=Df(),eu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,d=0,m=0,f=e,y=null;t:for(;;){for(var C;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(C=f.firstChild)!==null;)y=f,f=C;for(;;){if(f===e)break t;if(y===n&&++d===i&&(l=a),y===o&&++m===r&&(s=a),(C=f.nextSibling)!==null)break;f=y,y=f.parentNode}f=C}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(rs={focusedElem:e,selectionRange:n},To=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,g=k.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Dt(t.type,w),g);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(S){$e(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return k=_d,_d=!1,k}function li(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xs(t,n,o)}i=i.next}while(i!==r)}}function ma(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ws(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rp(e){var t=e.alternate;t!==null&&(e.alternate=null,Rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[Ei],delete t[as],delete t[wg],delete t[Sg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $p(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}var Ge=null,Ot=!1;function sn(e,t,n){for(n=n.child;n!==null;)Pp(e,t,n),n=n.sibling}function Pp(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(aa,n)}catch{}switch(n.tag){case 5:Xe||dr(n,t);case 6:var r=Ge,i=Ot;Ge=null,sn(e,t,n),Ge=r,Ot=i,Ge!==null&&(Ot?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Ot?(e=Ge,n=n.stateNode,e.nodeType===8?nl(e.parentNode,n):e.nodeType===1&&nl(e,n),vi(e)):nl(Ge,n.stateNode));break;case 4:r=Ge,i=Ot,Ge=n.stateNode.containerInfo,Ot=!0,sn(e,t,n),Ge=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xs(n,t,a),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!Xe&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$e(n,t,l)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,sn(e,t,n),Xe=r):sn(e,t,n);break;default:sn(e,t,n)}}function jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zg),t.forEach(function(r){var i=Wg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Ot=!1;break e;case 3:Ge=l.stateNode.containerInfo,Ot=!0;break e;case 4:Ge=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(Ge===null)throw Error(D(160));Pp(o,a,i),Ge=null,Ot=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){$e(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dp(t,e),t=t.sibling}function Dp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),_t(e),r&4){try{li(3,e,e.return),ma(3,e)}catch(w){$e(e,e.return,w)}try{li(5,e,e.return)}catch(w){$e(e,e.return,w)}}break;case 1:Pt(t,e),_t(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(Pt(t,e),_t(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(w){$e(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Yc(i,o),Gl(l,a);var d=Gl(l,o);for(a=0;a<s.length;a+=2){var m=s[a],f=s[a+1];m==="style"?ef(i,f):m==="dangerouslySetInnerHTML"?Xc(i,f):m==="children"?pi(i,f):js(i,m,f,d)}switch(l){case"input":jl(i,o);break;case"textarea":Kc(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var C=o.value;C!=null?hr(i,!!o.multiple,C,!1):y!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ei]=o}catch(w){$e(e,e.return,w)}}break;case 6:if(Pt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){$e(e,e.return,w)}}break;case 3:if(Pt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(w){$e(e,e.return,w)}break;case 4:Pt(t,e),_t(e);break;case 13:Pt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(wu=be())),r&4&&jd(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(d=Xe)||m,Pt(t,e),Xe=d):Pt(t,e),_t(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(U=e,m=e.child;m!==null;){for(f=U=m;U!==null;){switch(y=U,C=y.child,y.tag){case 0:case 11:case 14:case 15:li(4,y,y.return);break;case 1:dr(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){$e(r,n,w)}}break;case 5:dr(y,y.return);break;case 22:if(y.memoizedState!==null){Hd(f);continue}}C!==null?(C.return=y,U=C):Hd(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=qc("display",a))}catch(w){$e(e,e.return,w)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(w){$e(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pt(t,e),_t(e),r&4&&jd(e);break;case 21:break;default:Pt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($p(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pi(i,""),r.flags&=-33);var o=Ud(e);Es(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ud(e);Ss(e,l,a);break;default:throw Error(D(161))}}catch(s){$e(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _g(e,t,n){U=e,Op(e)}function Op(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||to;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Xe;l=to;var d=Xe;if(to=a,(Xe=s)&&!d)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?Vd(i):s!==null?(s.return=a,U=s):Vd(i);for(;o!==null;)U=o,Op(o),o=o.sibling;U=i,to=l,Xe=d}Bd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Bd(e)}}function Bd(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||ma(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ad(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ad(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&vi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Xe||t.flags&512&&ws(t)}catch(y){$e(t,t.return,y)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Hd(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Vd(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ma(4,t)}catch(s){$e(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){$e(t,i,s)}}var o=t.return;try{ws(t)}catch(s){$e(t,o,s)}break;case 5:var a=t.return;try{ws(t)}catch(s){$e(t,a,s)}}}catch(s){$e(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var Ug=Math.ceil,Yo=on.ReactCurrentDispatcher,yu=on.ReactCurrentOwner,Et=on.ReactCurrentBatchConfig,se=0,Be=null,Ne=null,We=0,ft=0,cr=Pn(0),Fe=0,Pi=null,Vn=0,ha=0,xu=0,si=null,at=null,wu=0,Pr=1/0,Gt=null,Ko=!1,ks=null,wn=null,no=!1,mn=null,Zo=0,ui=0,Cs=null,Eo=-1,ko=0;function nt(){return se&6?be():Eo!==-1?Eo:Eo=be()}function Sn(e){return e.mode&1?se&2&&We!==0?We&-We:kg.transition!==null?(ko===0&&(ko=pf()),ko):(e=ce,e!==0||(e=window.event,e=e===void 0?16:wf(e.type)),e):1}function Mt(e,t,n,r){if(50<ui)throw ui=0,Cs=null,Error(D(185));Ni(e,n,r),(!(se&2)||e!==Be)&&(e===Be&&(!(se&2)&&(ha|=n),Fe===4&&fn(e,We)),dt(e,r),n===1&&se===0&&!(t.mode&1)&&(Pr=be()+500,ca&&Dn()))}function dt(e,t){var n=e.callbackNode;kh(e,t);var r=Mo(e,e===Be?We:0);if(r===0)n!==null&&qu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qu(n),t===1)e.tag===0?Eg(Jd.bind(null,e)):_f(Jd.bind(null,e)),yg(function(){!(se&6)&&Dn()}),n=null;else{switch(mf(r)){case 1:n=Gs;break;case 4:n=cf;break;case 16:n=No;break;case 536870912:n=ff;break;default:n=No}n=Fp(n,bp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bp(e,t){if(Eo=-1,ko=0,se&6)throw Error(D(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Mo(e,e===Be?We:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xo(e,r);else{t=r;var i=se;se|=2;var o=Np();(Be!==e||We!==t)&&(Gt=null,Pr=be()+500,_n(e,t));do try{Hg();break}catch(l){Lp(e,l)}while(1);ou(),Yo.current=o,se=i,Ne!==null?t=0:(Be=null,We=0,t=Fe)}if(t!==0){if(t===2&&(i=Zl(e),i!==0&&(r=i,t=As(e,i))),t===1)throw n=Pi,_n(e,0),fn(e,r),dt(e,be()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!jg(i)&&(t=Xo(e,r),t===2&&(o=Zl(e),o!==0&&(r=o,t=As(e,o))),t===1))throw n=Pi,_n(e,0),fn(e,r),dt(e,be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Mn(e,at,Gt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=wu+500-be(),10<t)){if(Mo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=os(Mn.bind(null,e,at,Gt),t);break}Mn(e,at,Gt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Nt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ug(r/1960))-r,10<r){e.timeoutHandle=os(Mn.bind(null,e,at,Gt),r);break}Mn(e,at,Gt);break;case 5:Mn(e,at,Gt);break;default:throw Error(D(329))}}}return dt(e,be()),e.callbackNode===n?bp.bind(null,e):null}function As(e,t){var n=si;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=Xo(e,t),e!==2&&(t=at,at=n,t!==null&&Rs(t)),e}function Rs(e){at===null?at=e:at.push.apply(at,e)}function jg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~xu,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Jd(e){if(se&6)throw Error(D(327));wr();var t=Mo(e,0);if(!(t&1))return dt(e,be()),null;var n=Xo(e,t);if(e.tag!==0&&n===2){var r=Zl(e);r!==0&&(t=r,n=As(e,r))}if(n===1)throw n=Pi,_n(e,0),fn(e,t),dt(e,be()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,at,Gt),dt(e,be()),null}function Su(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Pr=be()+500,ca&&Dn())}}function Jn(e){mn!==null&&mn.tag===0&&!(se&6)&&wr();var t=se;se|=1;var n=Et.transition,r=ce;try{if(Et.transition=null,ce=1,e)return e()}finally{ce=r,Et.transition=n,se=t,!(se&6)&&Dn()}}function Eu(){ft=cr.current,ve(cr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vg(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(nu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_o();break;case 3:Rr(),ve(st),ve(qe),cu();break;case 5:du(r);break;case 4:Rr();break;case 13:ve(Ce);break;case 19:ve(Ce);break;case 10:au(r.type._context);break;case 22:case 23:Eu()}n=n.return}if(Be=e,Ne=e=En(e.current,null),We=ft=t,Fe=0,Pi=null,xu=ha=Vn=0,at=si=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}In=null}return e}function Lp(e,t){do{var n=Ne;try{if(ou(),xo.current=Qo,Wo){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wo=!1}if(Hn=0,je=ze=Ae=null,ai=!1,Ai=0,yu.current=null,n===null||n.return===null){Fe=1,Pi=t,Ne=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=We,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var y=m.alternate;y?(m.updateQueue=y.updateQueue,m.memoizedState=y.memoizedState,m.lanes=y.lanes):(m.updateQueue=null,m.memoizedState=null)}var C=Ld(a);if(C!==null){C.flags&=-257,Nd(C,a,l,o,t),C.mode&1&&bd(o,d,t),t=C,s=d;var k=t.updateQueue;if(k===null){var w=new Set;w.add(s),t.updateQueue=w}else k.add(s);break e}else{if(!(t&1)){bd(o,d,t),ku();break e}s=Error(D(426))}}else if(Ee&&l.mode&1){var g=Ld(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Nd(g,a,l,o,t),ru($r(s,l));break e}}o=s=$r(s,l),Fe!==4&&(Fe=2),si===null?si=[o]:si.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=hp(o,s,t);Cd(o,p);break e;case 1:l=s;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wn===null||!wn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=gp(o,l,t);Cd(o,S);break e}}o=o.return}while(o!==null)}Tp(n)}catch($){t=$,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function Np(){var e=Yo.current;return Yo.current=Qo,e===null?Qo:e}function ku(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Be===null||!(Vn&268435455)&&!(ha&268435455)||fn(Be,We)}function Xo(e,t){var n=se;se|=2;var r=Np();(Be!==e||We!==t)&&(Gt=null,_n(e,t));do try{Bg();break}catch(i){Lp(e,i)}while(1);if(ou(),se=n,Yo.current=r,Ne!==null)throw Error(D(261));return Be=null,We=0,Fe}function Bg(){for(;Ne!==null;)Mp(Ne)}function Hg(){for(;Ne!==null&&!mh();)Mp(Ne)}function Mp(e){var t=zp(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Tp(e):Ne=t,yu.current=null}function Tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ig(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Ne=null;return}}else if(n=Tg(n,t,ft),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Fe===0&&(Fe=5)}function Mn(e,t,n){var r=ce,i=Et.transition;try{Et.transition=null,ce=1,Vg(e,t,n,r)}finally{Et.transition=i,ce=r}return null}function Vg(e,t,n,r){do wr();while(mn!==null);if(se&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ch(e,o),e===Be&&(Ne=Be=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,Fp(No,function(){return wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Et.transition,Et.transition=null;var a=ce;ce=1;var l=se;se|=4,yu.current=null,Fg(e,n),Dp(n,e),dg(rs),To=!!ns,rs=ns=null,e.current=n,_g(n),hh(),se=l,ce=a,Et.transition=o}else e.current=n;if(no&&(no=!1,mn=e,Zo=i),o=e.pendingLanes,o===0&&(wn=null),yh(n.stateNode),dt(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ko)throw Ko=!1,e=ks,ks=null,e;return Zo&1&&e.tag!==0&&wr(),o=e.pendingLanes,o&1?e===Cs?ui++:(ui=0,Cs=e):ui=0,Dn(),null}function wr(){if(mn!==null){var e=mf(Zo),t=Et.transition,n=ce;try{if(Et.transition=null,ce=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,Zo=0,se&6)throw Error(D(331));var i=se;for(se|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(U=d;U!==null;){var m=U;switch(m.tag){case 0:case 11:case 15:li(8,m,o)}var f=m.child;if(f!==null)f.return=m,U=f;else for(;U!==null;){m=U;var y=m.sibling,C=m.return;if(Rp(m),m===d){U=null;break}if(y!==null){y.return=C,U=y;break}U=C}}}var k=o.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var g=w.sibling;w.sibling=null,w=g}while(w!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:li(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,U=p;break e}U=o.return}}var c=e.current;for(U=c;U!==null;){a=U;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,U=h;else e:for(a=c;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ma(9,l)}}catch($){$e(l,l.return,$)}if(l===a){U=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,U=S;break e}U=l.return}}if(se=i,Dn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(aa,e)}catch{}r=!0}return r}finally{ce=n,Et.transition=t}}return!1}function Gd(e,t,n){t=$r(n,t),t=hp(e,t,1),e=xn(e,t,1),t=nt(),e!==null&&(Ni(e,1,t),dt(e,t))}function $e(e,t,n){if(e.tag===3)Gd(e,e,n);else for(;t!==null;){if(t.tag===3){Gd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=$r(n,e),e=gp(t,e,1),t=xn(t,e,1),e=nt(),t!==null&&(Ni(t,1,e),dt(t,e));break}}t=t.return}}function Jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(We&n)===n&&(Fe===4||Fe===3&&(We&130023424)===We&&500>be()-wu?_n(e,0):xu|=n),dt(e,t)}function Ip(e,t){t===0&&(e.mode&1?(t=Gi,Gi<<=1,!(Gi&130023424)&&(Gi=4194304)):t=1);var n=nt();e=tn(e,t),e!==null&&(Ni(e,t,n),dt(e,n))}function Gg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ip(e,n)}function Wg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Ip(e,n)}var zp;zp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,Mg(e,t,n);lt=!!(e.flags&131072)}else lt=!1,Ee&&t.flags&1048576&&Uf(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var i=kr(t,qe.current);xr(t,n),i=pu(null,t,r,e,i,n);var o=mu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,Uo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,su(t),i.updater=fa,t.stateNode=i,i._reactInternals=t,fs(t,r,e,n),t=hs(null,t,r,!0,o,n)):(t.tag=0,Ee&&o&&tu(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yg(r),e=Dt(r,e),i){case 0:t=ms(null,t,r,e,n);break e;case 1:t=Id(null,t,r,e,n);break e;case 11:t=Md(null,t,r,e,n);break e;case 14:t=Td(null,t,r,Dt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),ms(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Id(e,t,r,i,n);case 3:e:{if(wp(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vf(e,t),Jo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=$r(Error(D(423)),t),t=zd(e,t,r,n,i);break e}else if(r!==i){i=$r(Error(D(424)),t),t=zd(e,t,r,n,i);break e}else for(pt=yn(t.stateNode.containerInfo.firstChild),mt=t,Ee=!0,bt=null,n=Qf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===i){t=nn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Yf(t),e===null&&us(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,is(r,i)?a=null:o!==null&&is(r,o)&&(t.flags|=32),xp(e,t),et(e,t,a,n),t.child;case 6:return e===null&&us(t),null;case 13:return Sp(e,t,n);case 4:return uu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Md(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,me(Ho,r._currentValue),r._currentValue=a,o!==null)if(Tt(o.value,a)){if(o.children===i.children&&!st.current){t=nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Zt(-1,n&-n),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?s.next=s:(s.next=m.next,m.next=s),d.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ds(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(D(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ds(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=kt(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Dt(r,t.pendingProps),i=Dt(r.type,i),Td(e,t,r,i,n);case 15:return vp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),So(e,t),t.tag=1,ut(r)?(e=!0,Uo(t)):e=!1,xr(t,n),Gf(t,r,i),fs(t,r,i,n),hs(null,t,r,!0,e,n);case 19:return Ep(e,t,n);case 22:return yp(e,t,n)}throw Error(D(156,t.tag))};function Fp(e,t){return df(e,t)}function Qg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Qg(e,t,n,r)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yg(e){if(typeof e=="function")return Cu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hs)return 11;if(e===Vs)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Cu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case tr:return Un(n.children,i,o,t);case Bs:a=8,i|=8;break;case Il:return e=St(12,n,t,i|2),e.elementType=Il,e.lanes=o,e;case zl:return e=St(13,n,t,i),e.elementType=zl,e.lanes=o,e;case Fl:return e=St(19,n,t,i),e.elementType=Fl,e.lanes=o,e;case Gc:return ga(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vc:a=10;break e;case Jc:a=9;break e;case Hs:a=11;break e;case Vs:a=14;break e;case un:a=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=St(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Un(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function ga(e,t,n,r){return e=St(22,e,r,t),e.elementType=Gc,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function cl(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ja(0),this.expirationTimes=Ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,i,o,a,l,s){return e=new Kg(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(o),e}function Zg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _p(e){if(!e)return Rn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ut(n))return Ff(e,n,t)}return t}function Up(e,t,n,r,i,o,a,l,s){return e=Au(n,r,!0,e,i,o,a,l,s),e.context=_p(null),n=e.current,r=nt(),i=Sn(n),o=Zt(r,i),o.callback=t??null,xn(n,o,i),e.current.lanes=i,Ni(e,i,r),dt(e,r),e}function va(e,t,n,r){var i=t.current,o=nt(),a=Sn(i);return n=_p(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,a),e!==null&&(Mt(e,i,a,o),yo(e,i,a)),a}function qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ru(e,t){Wd(e,t),(e=e.alternate)&&Wd(e,t)}function Xg(){return null}var jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function $u(e){this._internalRoot=e}ya.prototype.render=$u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));va(e,t,null,null)};ya.prototype.unmount=$u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){va(null,e,null,null)}),t[en]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&xf(e)}};function Pu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function qg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=qo(a);o.call(d)}}var a=Up(t,r,e,0,null,!1,!1,"",Qd);return e._reactRootContainer=a,e[en]=a.current,wi(e.nodeType===8?e.parentNode:e),Jn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=qo(s);l.call(d)}}var s=Au(e,0,!1,null,null,!1,!1,"",Qd);return e._reactRootContainer=s,e[en]=s.current,wi(e.nodeType===8?e.parentNode:e),Jn(function(){va(t,s,n,r)}),s}function wa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=qo(a);l.call(s)}}va(t,a,e,i)}else a=qg(n,t,e,i,r);return qo(a)}hf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(Ws(t,n|1),dt(t,be()),!(se&6)&&(Pr=be()+500,Dn()))}break;case 13:Jn(function(){var r=tn(e,1);if(r!==null){var i=nt();Mt(r,e,1,i)}}),Ru(e,1)}};Qs=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=nt();Mt(t,e,134217728,n)}Ru(e,134217728)}};gf=function(e){if(e.tag===13){var t=Sn(e),n=tn(e,t);if(n!==null){var r=nt();Mt(n,e,t,r)}Ru(e,t)}};vf=function(){return ce};yf=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Ql=function(e,t,n){switch(t){case"input":if(jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=da(r);if(!i)throw Error(D(90));Qc(r),jl(r,i)}}}break;case"textarea":Kc(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};rf=Su;of=Jn;var e0={usingClientEntryPoint:!1,Events:[Ti,or,da,tf,nf,Su]},Wr={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},t0={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sf(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Xg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{aa=ro.inject(t0),Ht=ro}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pu(t))throw Error(D(200));return Zg(e,t,null,n)};gt.createRoot=function(e,t){if(!Pu(e))throw Error(D(299));var n=!1,r="",i=jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Au(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,wi(e.nodeType===8?e.parentNode:e),new $u(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=sf(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Jn(e)};gt.hydrate=function(e,t,n){if(!xa(t))throw Error(D(200));return wa(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!Pu(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=jp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Up(t,null,e,1,n??null,i,!1,o,a),e[en]=t.current,wi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ya(t)};gt.render=function(e,t,n){if(!xa(t))throw Error(D(200));return wa(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!xa(e))throw Error(D(40));return e._reactRootContainer?(Jn(function(){wa(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};gt.unstable_batchedUpdates=Su;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xa(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return wa(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=gt})(Xm);var Yd=Nl;Ll.createRoot=Yd.createRoot,Ll.hydrateRoot=Yd.hydrateRoot;var Di={},n0={get exports(){return Di},set exports(e){Di=e}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,Du=He?Symbol.for("react.element"):60103,Ou=He?Symbol.for("react.portal"):60106,Sa=He?Symbol.for("react.fragment"):60107,Ea=He?Symbol.for("react.strict_mode"):60108,ka=He?Symbol.for("react.profiler"):60114,Ca=He?Symbol.for("react.provider"):60109,Aa=He?Symbol.for("react.context"):60110,bu=He?Symbol.for("react.async_mode"):60111,Ra=He?Symbol.for("react.concurrent_mode"):60111,$a=He?Symbol.for("react.forward_ref"):60112,Pa=He?Symbol.for("react.suspense"):60113,r0=He?Symbol.for("react.suspense_list"):60120,Da=He?Symbol.for("react.memo"):60115,Oa=He?Symbol.for("react.lazy"):60116,i0=He?Symbol.for("react.block"):60121,o0=He?Symbol.for("react.fundamental"):60117,a0=He?Symbol.for("react.responder"):60118,l0=He?Symbol.for("react.scope"):60119;function yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Du:switch(e=e.type,e){case bu:case Ra:case Sa:case ka:case Ea:case Pa:return e;default:switch(e=e&&e.$$typeof,e){case Aa:case $a:case Oa:case Da:case Ca:return e;default:return t}}case Ou:return t}}}function Bp(e){return yt(e)===Ra}fe.AsyncMode=bu;fe.ConcurrentMode=Ra;fe.ContextConsumer=Aa;fe.ContextProvider=Ca;fe.Element=Du;fe.ForwardRef=$a;fe.Fragment=Sa;fe.Lazy=Oa;fe.Memo=Da;fe.Portal=Ou;fe.Profiler=ka;fe.StrictMode=Ea;fe.Suspense=Pa;fe.isAsyncMode=function(e){return Bp(e)||yt(e)===bu};fe.isConcurrentMode=Bp;fe.isContextConsumer=function(e){return yt(e)===Aa};fe.isContextProvider=function(e){return yt(e)===Ca};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Du};fe.isForwardRef=function(e){return yt(e)===$a};fe.isFragment=function(e){return yt(e)===Sa};fe.isLazy=function(e){return yt(e)===Oa};fe.isMemo=function(e){return yt(e)===Da};fe.isPortal=function(e){return yt(e)===Ou};fe.isProfiler=function(e){return yt(e)===ka};fe.isStrictMode=function(e){return yt(e)===Ea};fe.isSuspense=function(e){return yt(e)===Pa};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Sa||e===Ra||e===ka||e===Ea||e===Pa||e===r0||typeof e=="object"&&e!==null&&(e.$$typeof===Oa||e.$$typeof===Da||e.$$typeof===Ca||e.$$typeof===Aa||e.$$typeof===$a||e.$$typeof===o0||e.$$typeof===a0||e.$$typeof===l0||e.$$typeof===i0)};fe.typeOf=yt;(function(e){e.exports=fe})(n0);function s0(e){function t(T,_,z,Q,E){for(var te=0,I=0,Se=0,ue=0,ie,Z,De=0,_e=0,ne,Oe=ne=ie=0,le=0,Me=0,ln=0,Te=0,It=z.length,zt=It-1,ot,W="",ke="",Ir="",Kn="",Ft;le<It;){if(Z=z.charCodeAt(le),le===zt&&I+ue+Se+te!==0&&(I!==0&&(Z=I===47?10:47),ue=Se=te=0,It++,zt++),I+ue+Se+te===0){if(le===zt&&(0<Me&&(W=W.replace(y,"")),0<W.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:W+=z.charAt(le)}Z=59}switch(Z){case 123:for(W=W.trim(),ie=W.charCodeAt(0),ne=1,Te=++le;le<It;){switch(Z=z.charCodeAt(le)){case 123:ne++;break;case 125:ne--;break;case 47:switch(Z=z.charCodeAt(le+1)){case 42:case 47:e:{for(Oe=le+1;Oe<zt;++Oe)switch(z.charCodeAt(Oe)){case 47:if(Z===42&&z.charCodeAt(Oe-1)===42&&le+2!==Oe){le=Oe+1;break e}break;case 10:if(Z===47){le=Oe+1;break e}}le=Oe}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;le++<zt&&z.charCodeAt(le)!==Z;);}if(ne===0)break;le++}switch(ne=z.substring(Te,le),ie===0&&(ie=(W=W.replace(f,"").trim()).charCodeAt(0)),ie){case 64:switch(0<Me&&(W=W.replace(y,"")),Z=W.charCodeAt(1),Z){case 100:case 109:case 115:case 45:Me=_;break;default:Me=ct}if(ne=t(_,Me,ne,Z,E+1),Te=ne.length,0<M&&(Me=n(ct,W,ln),Ft=l(3,ne,Me,_,we,xe,Te,Z,E,Q),W=Me.join(""),Ft!==void 0&&(Te=(ne=Ft.trim()).length)===0&&(Z=0,ne="")),0<Te)switch(Z){case 115:W=W.replace(b,a);case 100:case 109:case 45:ne=W+"{"+ne+"}";break;case 107:W=W.replace(c,"$1 $2"),ne=W+"{"+ne+"}",ne=he===1||he===2&&o("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=W+ne,Q===112&&(ne=(ke+=ne,""))}else ne="";break;default:ne=t(_,n(_,W,ln),ne,Q,E+1)}Ir+=ne,ne=ln=Me=Oe=ie=0,W="",Z=z.charCodeAt(++le);break;case 125:case 59:if(W=(0<Me?W.replace(y,""):W).trim(),1<(Te=W.length))switch(Oe===0&&(ie=W.charCodeAt(0),ie===45||96<ie&&123>ie)&&(Te=(W=W.replace(" ",":")).length),0<M&&(Ft=l(1,W,_,T,we,xe,ke.length,Q,E,Q))!==void 0&&(Te=(W=Ft.trim()).length)===0&&(W="\0\0"),ie=W.charCodeAt(0),Z=W.charCodeAt(1),ie){case 0:break;case 64:if(Z===105||Z===99){Kn+=W+z.charAt(le);break}default:W.charCodeAt(Te-1)!==58&&(ke+=i(W,ie,Z,W.charCodeAt(2)))}ln=Me=Oe=ie=0,W="",Z=z.charCodeAt(++le)}}switch(Z){case 13:case 10:I===47?I=0:1+ie===0&&Q!==107&&0<W.length&&(Me=1,W+="\0"),0<M*j&&l(0,W,_,T,we,xe,ke.length,Q,E,Q),xe=1,we++;break;case 59:case 125:if(I+ue+Se+te===0){xe++;break}default:switch(xe++,ot=z.charAt(le),Z){case 9:case 32:if(ue+te+I===0)switch(De){case 44:case 58:case 9:case 32:ot="";break;default:Z!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ue+I+te===0&&(Me=ln=1,ot="\f"+ot);break;case 108:if(ue+I+te+Pe===0&&0<Oe)switch(le-Oe){case 2:De===112&&z.charCodeAt(le-3)===58&&(Pe=De);case 8:_e===111&&(Pe=_e)}break;case 58:ue+I+te===0&&(Oe=le);break;case 44:I+Se+ue+te===0&&(Me=1,ot+="\r");break;case 34:case 39:I===0&&(ue=ue===Z?0:ue===0?Z:ue);break;case 91:ue+I+Se===0&&te++;break;case 93:ue+I+Se===0&&te--;break;case 41:ue+I+te===0&&Se--;break;case 40:if(ue+I+te===0){if(ie===0)switch(2*De+3*_e){case 533:break;default:ie=1}Se++}break;case 64:I+Se+ue+te+Oe+ne===0&&(ne=1);break;case 42:case 47:if(!(0<ue+te+Se))switch(I){case 0:switch(2*Z+3*z.charCodeAt(le+1)){case 235:I=47;break;case 220:Te=le,I=42}break;case 42:Z===47&&De===42&&Te+2!==le&&(z.charCodeAt(Te+2)===33&&(ke+=z.substring(Te,le+1)),ot="",I=0)}}I===0&&(W+=ot)}_e=De,De=Z,le++}if(Te=ke.length,0<Te){if(Me=_,0<M&&(Ft=l(2,ke,Me,T,we,xe,Te,Q,E,Q),Ft!==void 0&&(ke=Ft).length===0))return Kn+ke+Ir;if(ke=Me.join(",")+"{"+ke+"}",he*Pe!==0){switch(he!==2||o(ke,2)||(Pe=0),Pe){case 111:ke=ke.replace(S,":-moz-$1")+ke;break;case 112:ke=ke.replace(h,"::-webkit-input-$1")+ke.replace(h,"::-moz-$1")+ke.replace(h,":-ms-input-$1")+ke}Pe=0}}return Kn+ke+Ir}function n(T,_,z){var Q=_.trim().split(g);_=Q;var E=Q.length,te=T.length;switch(te){case 0:case 1:var I=0;for(T=te===0?"":T[0]+" ";I<E;++I)_[I]=r(T,_[I],z).trim();break;default:var Se=I=0;for(_=[];I<E;++I)for(var ue=0;ue<te;++ue)_[Se++]=r(T[ue]+" ",Q[I],z).trim()}return _}function r(T,_,z){var Q=_.charCodeAt(0);switch(33>Q&&(Q=(_=_.trim()).charCodeAt(0)),Q){case 38:return _.replace(p,"$1"+T.trim());case 58:return T.trim()+_.replace(p,"$1"+T.trim());default:if(0<1*z&&0<_.indexOf("\f"))return _.replace(p,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+_}function i(T,_,z,Q){var E=T+";",te=2*_+3*z+4*Q;if(te===944){T=E.indexOf(":",9)+1;var I=E.substring(T,E.length-1).trim();return I=E.substring(0,T).trim()+I+";",he===1||he===2&&o(I,1)?"-webkit-"+I+I:I}if(he===0||he===2&&!o(E,1))return E;switch(te){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(ye,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return I=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+E+"-ms-flex-pack"+I+E;case 1005:return k.test(E)?E.replace(C,":-webkit-")+E.replace(C,":-moz-")+E:E;case 1e3:switch(I=E.substring(13).trim(),_=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(_)){case 226:I=E.replace($,"tb");break;case 232:I=E.replace($,"tb-rl");break;case 220:I=E.replace($,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+I+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(_=(E=T).length-10,I=(E.charCodeAt(_)===33?E.substring(0,_):E).substring(T.indexOf(":",7)+1).trim(),te=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:E=E.replace(I,"-webkit-"+I)+";"+E;break;case 207:case 102:E=E.replace(I,"-webkit-"+(102<te?"inline-":"")+"box")+";"+E.replace(I,"-webkit-"+I)+";"+E.replace(I,"-ms-"+I+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return I=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+I+"-ms-flex-"+I+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(O,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(O,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(V.test(T)===!0)return(I=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?i(T.replace("stretch","fill-available"),_,z,Q).replace(":fill-available",":stretch"):E.replace(I,"-webkit-"+I)+E.replace(I,"-moz-"+I.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,z+Q===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+E}return E}function o(T,_){var z=T.indexOf(_===1?":":"{"),Q=T.substring(0,_!==3?z:10);return z=T.substring(z+1,T.length-1),J(_!==2?Q:Q.replace(ee,"$1"),z,_)}function a(T,_){var z=i(_,_.charCodeAt(0),_.charCodeAt(1),_.charCodeAt(2));return z!==_+";"?z.replace(N," or ($1)").substring(4):"("+_+")"}function l(T,_,z,Q,E,te,I,Se,ue,ie){for(var Z=0,De=_,_e;Z<M;++Z)switch(_e=Ve[Z].call(m,T,De,z,Q,E,te,I,Se,ue,ie)){case void 0:case!1:case!0:case null:break;default:De=_e}if(De!==_)return De}function s(T){switch(T){case void 0:case null:M=Ve.length=0;break;default:if(typeof T=="function")Ve[M++]=T;else if(typeof T=="object")for(var _=0,z=T.length;_<z;++_)s(T[_]);else j=!!T|0}return s}function d(T){return T=T.prefix,T!==void 0&&(J=null,T?typeof T!="function"?he=1:(he=2,J=T):he=0),d}function m(T,_){var z=T;if(33>z.charCodeAt(0)&&(z=z.trim()),ae=z,z=[ae],0<M){var Q=l(-1,_,z,z,we,xe,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(_=Q)}var E=t(ct,z,_,0,0);return 0<M&&(Q=l(-2,E,z,z,we,xe,E.length,0,0,0),Q!==void 0&&(E=Q)),ae="",Pe=0,xe=we=1,E}var f=/^\0+/g,y=/[\0\r\f]/g,C=/: */g,k=/zoo|gra/,w=/([,: ])(transform)/g,g=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,S=/:(read-only)/g,$=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,O=/-self|flex-/g,ee=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,ye=/([^-])(image-set\()/,xe=1,we=1,Pe=0,he=1,ct=[],Ve=[],M=0,J=null,j=0,ae="";return m.use=s,m.set=d,e!==void 0&&d(e),m}var u0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function d0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var c0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Kd=d0(function(e){return c0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Lu=Di,f0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nu={};Nu[Lu.ForwardRef]=m0;Nu[Lu.Memo]=Hp;function Zd(e){return Lu.isMemo(e)?Hp:Nu[e.$$typeof]||f0}var h0=Object.defineProperty,g0=Object.getOwnPropertyNames,Xd=Object.getOwnPropertySymbols,v0=Object.getOwnPropertyDescriptor,y0=Object.getPrototypeOf,qd=Object.prototype;function Vp(e,t,n){if(typeof t!="string"){if(qd){var r=y0(t);r&&r!==qd&&Vp(e,r,n)}var i=g0(t);Xd&&(i=i.concat(Xd(t)));for(var o=Zd(e),a=Zd(t),l=0;l<i.length;++l){var s=i[l];if(!p0[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var d=v0(t,s);try{h0(e,s,d)}catch{}}}}return e}var x0=Vp;function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ec=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},$s=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Di.typeOf(e)},ea=Object.freeze([]),kn=Object.freeze({});function Dr(e){return typeof e=="function"}function tc(e){return e.displayName||e.name||"Component"}function Mu(e){return e&&typeof e.styledComponentId=="string"}var Or=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Tu=typeof window<"u"&&"HTMLElement"in window,w0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),S0={};function Gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var E0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Gn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),d=0,m=r.length;d<m;d++)this.tag.insertRule(s,r[d])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Ao=new Map,ta=new Map,di=1,io=function(e){if(Ao.has(e))return Ao.get(e);for(;ta.has(di);)di++;var t=di++;return Ao.set(e,t),ta.set(t,e),t},k0=function(e){return ta.get(e)},C0=function(e,t){t>=di&&(di=t+1),Ao.set(e,t),ta.set(t,e)},A0="style["+Or+'][data-styled-version="5.3.9"]',R0=new RegExp("^"+Or+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$0=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},P0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(R0);if(l){var s=0|parseInt(l[1],10),d=l[2];s!==0&&(C0(d,s),$0(e,d,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},D0=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Jp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,d=s.length;d>=0;d--){var m=s[d];if(m&&m.nodeType===1&&m.hasAttribute(Or))return m}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Or,"active"),r.setAttribute("data-styled-version","5.3.9");var a=D0();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},O0=function(){function e(n){var r=this.element=Jp(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}Gn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),b0=function(){function e(n){var r=this.element=Jp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),L0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),nc=Tu,N0={isServer:!Tu,useCSSOMInjection:!w0},na=function(){function e(n,r,i){n===void 0&&(n=kn),r===void 0&&(r={}),this.options=Lt({},N0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Tu&&nc&&(nc=!1,function(o){for(var a=document.querySelectorAll(A0),l=0,s=a.length;l<s;l++){var d=a[l];d&&d.getAttribute(Or)!=="active"&&(P0(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return io(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Lt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new L0(a):o?new O0(a):new b0(a),new E0(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(io(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(io(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(io(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=k0(a);if(l!==void 0){var s=n.names.get(l),d=r.getGroup(a);if(s&&d&&s.size){var m=Or+".g"+a+'[id="'+l+'"]',f="";s!==void 0&&s.forEach(function(y){y.length>0&&(f+=y+",")}),o+=""+d+m+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),M0=/(a)(d)/gi,rc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ps(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rc(t%52)+n;return(rc(t%52)+n).replace(M0,"$1-$2")}var fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gp=function(e){return fr(5381,e)};function Wp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dr(n)&&!Mu(n))return!1}return!0}var T0=Gp("5.3.9"),I0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Wp(t),this.componentId=n,this.baseHash=fr(T0,n),this.baseStyle=r,na.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Wn(this.rules,t,n,r).join(""),l=Ps(fr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,m=fr(this.baseHash,r.hash),f="",y=0;y<d;y++){var C=this.rules[y];if(typeof C=="string")f+=C;else if(C){var k=Wn(C,t,n,r),w=Array.isArray(k)?k.join(""):k;m=fr(m,w+y),f+=w}}if(f){var g=Ps(m>>>0);if(!n.hasNameForId(i,g)){var p=r(f,"."+g,void 0,i);n.insertRules(i,g,p)}o.push(g)}}return o.join(" ")},e}(),z0=/^\s*\/\/.*$/gm,F0=[":","[",".","#"];function _0(e){var t,n,r,i,o=e===void 0?kn:e,a=o.options,l=a===void 0?kn:a,s=o.plugins,d=s===void 0?ea:s,m=new s0(l),f=[],y=function(w){function g(p){if(p)try{w(p+"}")}catch{}}return function(p,c,h,S,$,b,N,O,ee,V){switch(p){case 1:if(ee===0&&c.charCodeAt(0)===64)return w(c+";"),"";break;case 2:if(O===0)return c+"/*|*/";break;case 3:switch(O){case 102:case 112:return w(h[0]+c),"";default:return c+(V===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(g)}}}(function(w){f.push(w)}),C=function(w,g,p){return g===0&&F0.indexOf(p[n.length])!==-1||p.match(i)?w:"."+t};function k(w,g,p,c){c===void 0&&(c="&");var h=w.replace(z0,""),S=g&&p?p+" "+g+" { "+h+" }":h;return t=c,n=g,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),m(p||!g?"":g,S)}return m.use([].concat(d,[function(w,g,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,C))},y,function(w){if(w===-2){var g=f;return f=[],g}}])),k.hash=d.length?d.reduce(function(w,g){return g.name||Gn(15),fr(w,g.name)},5381).toString():"",k}var Qp=tt.createContext();Qp.Consumer;var Yp=tt.createContext(),U0=(Yp.Consumer,new na),Ds=_0();function Kp(){return L.useContext(Qp)||U0}function Zp(){return L.useContext(Yp)||Ds}var j0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ds);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Gn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ds),this.name+t.hash},e}(),B0=/([A-Z])/,H0=/([A-Z])/g,V0=/^ms-/,J0=function(e){return"-"+e.toLowerCase()};function ic(e){return B0.test(e)?e.replace(H0,J0).replace(V0,"-ms-"):e}var oc=function(e){return e==null||e===!1||e===""};function Wn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Wn(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(oc(e))return"";if(Mu(e))return"."+e.styledComponentId;if(Dr(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var s=e(t);return Wn(s,t,n,r)}var d;return e instanceof j0?n?(e.inject(n,r),e.getName(r)):e:$s(e)?function m(f,y){var C,k,w=[];for(var g in f)f.hasOwnProperty(g)&&!oc(f[g])&&(Array.isArray(f[g])&&f[g].isCss||Dr(f[g])?w.push(ic(g)+":",f[g],";"):$s(f[g])?w.push.apply(w,m(f[g],g)):w.push(ic(g)+": "+(C=g,(k=f[g])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||C in u0?String(k).trim():k+"px")+";"));return y?[y+" {"].concat(w,["}"]):w}(e):e.toString()}var ac=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Xp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Dr(e)||$s(e)?ac(Wn(ec(ea,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ac(Wn(ec(e,n)))}var qp=function(e,t,n){return n===void 0&&(n=kn),e.theme!==n.theme&&e.theme||t||n.theme},G0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,W0=/(^-|-$)/g;function fl(e){return e.replace(G0,"-").replace(W0,"")}var em=function(e){return Ps(Gp(e)>>>0)};function oo(e){return typeof e=="string"&&!0}var Os=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Q0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Y0(e,t,n){var r=e[n];Os(t)&&Os(r)?tm(r,t):e[n]=t}function tm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Os(a))for(var l in a)Q0(l)&&Y0(e,a[l],l)}return e}var Oi=tt.createContext();Oi.Consumer;function K0(e){var t=L.useContext(Oi),n=L.useMemo(function(){return function(r,i){if(!r)return Gn(14);if(Dr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Gn(8):i?Lt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?tt.createElement(Oi.Provider,{value:n},e.children):null}var pl={};function nm(e,t,n){var r=Mu(e),i=!oo(e),o=t.attrs,a=o===void 0?ea:o,l=t.componentId,s=l===void 0?function(c,h){var S=typeof c!="string"?"sc":fl(c);pl[S]=(pl[S]||0)+1;var $=S+"-"+em("5.3.9"+S+pl[S]);return h?h+"-"+$:$}(t.displayName,t.parentComponentId):l,d=t.displayName,m=d===void 0?function(c){return oo(c)?"styled."+c:"Styled("+tc(c)+")"}(e):d,f=t.displayName&&t.componentId?fl(t.displayName)+"-"+t.componentId:t.componentId||s,y=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,C=t.shouldForwardProp;r&&e.shouldForwardProp&&(C=t.shouldForwardProp?function(c,h,S){return e.shouldForwardProp(c,h,S)&&t.shouldForwardProp(c,h,S)}:e.shouldForwardProp);var k,w=new I0(n,f,r?e.componentStyle:void 0),g=w.isStatic&&a.length===0,p=function(c,h){return function(S,$,b,N){var O=S.attrs,ee=S.componentStyle,V=S.defaultProps,ye=S.foldedComponentIds,xe=S.shouldForwardProp,we=S.styledComponentId,Pe=S.target,he=function(Q,E,te){Q===void 0&&(Q=kn);var I=Lt({},E,{theme:Q}),Se={};return te.forEach(function(ue){var ie,Z,De,_e=ue;for(ie in Dr(_e)&&(_e=_e(I)),_e)I[ie]=Se[ie]=ie==="className"?(Z=Se[ie],De=_e[ie],Z&&De?Z+" "+De:Z||De):_e[ie]}),[I,Se]}(qp($,L.useContext(Oi),V)||kn,$,O),ct=he[0],Ve=he[1],M=function(Q,E,te,I){var Se=Kp(),ue=Zp(),ie=E?Q.generateAndInjectStyles(kn,Se,ue):Q.generateAndInjectStyles(te,Se,ue);return ie}(ee,N,ct),J=b,j=Ve.$as||$.$as||Ve.as||$.as||Pe,ae=oo(j),T=Ve!==$?Lt({},$,{},Ve):$,_={};for(var z in T)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?_.as=T[z]:(xe?xe(z,Kd,j):!ae||Kd(z))&&(_[z]=T[z]));return $.style&&Ve.style!==$.style&&(_.style=Lt({},$.style,{},Ve.style)),_.className=Array.prototype.concat(ye,we,M!==we?M:null,$.className,Ve.className).filter(Boolean).join(" "),_.ref=J,L.createElement(j,_)}(k,c,h,g)};return p.displayName=m,(k=tt.forwardRef(p)).attrs=y,k.componentStyle=w,k.displayName=m,k.shouldForwardProp=C,k.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ea,k.styledComponentId=f,k.target=r?e.target:e,k.withComponent=function(c){var h=t.componentId,S=function(b,N){if(b==null)return{};var O,ee,V={},ye=Object.keys(b);for(ee=0;ee<ye.length;ee++)O=ye[ee],N.indexOf(O)>=0||(V[O]=b[O]);return V}(t,["componentId"]),$=h&&h+"-"+(oo(c)?c:fl(tc(c)));return nm(c,Lt({},S,{attrs:y,componentId:$}),n)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?tm({},e.defaultProps,c):c}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),i&&x0(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var bs=function(e){return function t(n,r,i){if(i===void 0&&(i=kn),!Di.isValidElementType(r))return Gn(1,String(r));var o=function(){return n(r,i,Xp.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Lt({},i,{},a))},o.attrs=function(a){return t(n,r,Lt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(nm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){bs[e]=bs(e)});var Z0=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Wp(n),na.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(Wn(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&na.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function X0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Xp.apply(void 0,[e].concat(n)),o="sc-global-"+em(JSON.stringify(i)),a=new Z0(i,o);function l(d){var m=Kp(),f=Zp(),y=L.useContext(Oi),C=L.useRef(m.allocateGSInstance(o)).current;return m.server&&s(C,d,m,y,f),L.useLayoutEffect(function(){if(!m.server)return s(C,d,m,y,f),function(){return a.removeStyles(C,m)}},[C,d,m,y,f]),null}function s(d,m,f,y,C){if(a.isStatic)a.renderStyles(d,S0,f,C);else{var k=Lt({},m,{theme:qp(m,y,l.defaultProps)});a.renderStyles(d,k,f,C)}}return tt.memo(l)}const x=bs,q0={title:"main",fonts:{extrasmall:16,small:18,medium:20,large:26,extralarge:36},colors:{primary:{light:"#f08",normal:"#2EB2B7",dark:"#01fe87"},secondary:{light:"#E08952",normal:"#FF8233",dark:"#AD561F"},auxiliary:{success:{normal:"#34C759",dark:"#45B661"},attention:{normal:"#FFEB3B",dark:"#CCB700"},error:{normal:"#D92626",dark:"#981B1B"}},foreground:"#D9D9D9",middleground:"#f5f5f5",background:"#292E2E",text:{title:"#000",content:"#626262",highlight:"#FFF",TitleSubArticles:"#114676"}}},e1=L.createContext({}),t1=({children:e})=>{const[t,n]=L.useState(q0);return v(e1.Provider,{value:{theme:t},children:v(K0,{theme:t,children:e})})};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}var Le;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Le||(Le={}));const lc="popstate";function n1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return bi("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rn(i)}return i1(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function br(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function r1(){return Math.random().toString(36).substr(2,8)}function sc(e,t){return{usr:e.state,key:e.key,idx:t}}function bi(e,t,n,r){return n===void 0&&(n=null),oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?an(t):t,{state:n,key:t&&t.key||r||r1()})}function rn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function an(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function i1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Le.Pop,s=null,d=m();d==null&&(d=0,a.replaceState(oe({},a.state,{idx:d}),""));function m(){return(a.state||{idx:null}).idx}function f(){l=Le.Pop;let g=m(),p=g==null?null:g-d;d=g,s&&s({action:l,location:w.location,delta:p})}function y(g,p){l=Le.Push;let c=bi(w.location,g,p);n&&n(c,g),d=m()+1;let h=sc(c,d),S=w.createHref(c);try{a.pushState(h,"",S)}catch{i.location.assign(S)}o&&s&&s({action:l,location:w.location,delta:1})}function C(g,p){l=Le.Replace;let c=bi(w.location,g,p);n&&n(c,g),d=m();let h=sc(c,d),S=w.createHref(c);a.replaceState(h,"",S),o&&s&&s({action:l,location:w.location,delta:0})}function k(g){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof g=="string"?g:rn(g);return q(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let w={get action(){return l},get location(){return e(i,a)},listen(g){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(lc,f),s=g,()=>{i.removeEventListener(lc,f),s=null}},createHref(g){return t(i,g)},createURL:k,encodeLocation(g){let p=k(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:C,go(g){return a.go(g)}};return w}var Ie;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ie||(Ie={}));const o1=new Set(["lazy","caseSensitive","path","id","index","children"]);function a1(e){return e.index===!0}function rm(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(q(i.index!==!0||!i.children,"Cannot specify children on an index route"),q(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),a1(i)){let s=oe({},i,{hasErrorBoundary:t(i),id:l});return r[l]=s,s}else{let s=oe({},i,{id:l,hasErrorBoundary:t(i),children:void 0});return r[l]=s,i.children&&(s.children=rm(i.children,t,a,r)),s}})}function pr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?an(t):t,i=zi(r.pathname||"/",n);if(i==null)return null;let o=im(e);l1(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=g1(o[l],x1(i));return a}function im(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let d=Xt([r,s.relativePath]),m=n.concat(s);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),im(o.children,t,m,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:m1(d,o.index),routesMeta:m})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of om(o.path))i(o,a,s)}),t}function om(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=om(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function l1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:h1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const s1=/^:\w+$/,u1=3,d1=2,c1=1,f1=10,p1=-2,uc=e=>e==="*";function m1(e,t){let n=e.split("/"),r=n.length;return n.some(uc)&&(r+=p1),t&&(r+=d1),n.filter(i=>!uc(i)).reduce((i,o)=>i+(s1.test(o)?u1:o===""?c1:f1),r)}function h1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function g1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",m=v1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},d);if(!m)return null;Object.assign(r,m.params);let f=l.route;o.push({params:r,pathname:Xt([i,m.pathname]),pathnameBase:k1(Xt([i,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(i=Xt([i,m.pathnameBase]))}return o}function v1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=y1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,m,f)=>{if(m==="*"){let y=l[f]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return d[m]=w1(l[f]||"",m),d},{}),pathname:o,pathnameBase:a,pattern:e}}function y1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),br(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function x1(e){try{return decodeURI(e)}catch(t){return br(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function w1(e,t){try{return decodeURIComponent(e)}catch(n){return br(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function zi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function S1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?an(e):e;return{pathname:n?n.startsWith("/")?n:E1(n,t):t,search:C1(r),hash:A1(i)}}function E1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ba(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Iu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=an(e):(i=oe({},e),q(!i.pathname||!i.pathname.includes("?"),ml("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),ml("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),ml("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),f-=1;i.pathname=y.join("/")}l=f>=0?t[f]:"/"}let s=S1(i,l),d=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(d||m)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),k1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,A1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class zu{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function am(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lm=["post","put","patch","delete"],R1=new Set(lm),$1=["get",...lm],P1=new Set($1),D1=new Set([301,302,303,307,308]),O1=new Set([307,308]),hl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},b1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},dc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L1=!um,N1=e=>!!e.hasErrorBoundary;function M1(e){q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||N1,n={},r=rm(e.routes,t,void 0,n),i,o=oe({v7_normalizeFormMethod:!1},e.future),a=null,l=new Set,s=null,d=null,m=null,f=e.hydrationData!=null,y=pr(r,e.history.location,e.basename),C=null;if(y==null){let A=jt(404,{pathname:e.history.location.pathname}),{matches:R,route:P}=vc(r);y=R,C={[P.id]:A}}let k=!y.some(A=>A.route.lazy)&&(!y.some(A=>A.route.loader)||e.hydrationData!=null),w,g={historyAction:e.history.action,location:e.history.location,matches:y,initialized:k,navigation:hl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},p=Le.Pop,c=!1,h,S=!1,$=!1,b=[],N=[],O=new Map,ee=0,V=-1,ye=new Map,xe=new Set,we=new Map,Pe=new Map,he=new Map,ct=!1;function Ve(){return a=e.history.listen(A=>{let{action:R,location:P,delta:B}=A;if(ct){ct=!1;return}br(he.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=ot({currentLocation:g.location,nextLocation:P,historyAction:R});if(H&&B!=null){ct=!0,e.history.go(B*-1),zt(H,{state:"blocked",location:P,proceed(){zt(H,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),e.history.go(B)},reset(){It(H),j({blockers:new Map(w.state.blockers)})}});return}return z(R,P)}),g.initialized||z(Le.Pop,g.location),w}function M(){a&&a(),l.clear(),h&&h.abort(),g.fetchers.forEach((A,R)=>ne(R)),g.blockers.forEach((A,R)=>It(R))}function J(A){return l.add(A),()=>l.delete(A)}function j(A){g=oe({},g,A),l.forEach(R=>R(g))}function ae(A,R){var P,B;let H=g.actionData!=null&&g.navigation.formMethod!=null&&Wt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((P=A.state)==null?void 0:P._isRedirect)!==!0,Y;R.actionData?Object.keys(R.actionData).length>0?Y=R.actionData:Y=null:H?Y=g.actionData:Y=null;let K=R.loaderData?gc(g.loaderData,R.loaderData,R.matches||[],R.errors):g.loaderData;for(let[G]of he)It(G);let X=c===!0||g.navigation.formMethod!=null&&Wt(g.navigation.formMethod)&&((B=A.state)==null?void 0:B._isRedirect)!==!0;i&&(r=i,i=void 0),j(oe({},R,{actionData:Y,loaderData:K,historyAction:p,location:A,initialized:!0,navigation:hl,revalidation:"idle",restoreScrollPosition:Kn(A,R.matches||g.matches),preventScrollReset:X,blockers:new Map(g.blockers)})),S||p===Le.Pop||(p===Le.Push?e.history.push(A,A.state):p===Le.Replace&&e.history.replace(A,A.state)),p=Le.Pop,c=!1,S=!1,$=!1,b=[],N=[]}async function T(A,R){if(typeof A=="number"){e.history.go(A);return}let{path:P,submission:B,error:H}=cc(A,o,R),Y=g.location,K=bi(g.location,P,R&&R.state);K=oe({},K,e.history.encodeLocation(K));let X=R&&R.replace!=null?R.replace:void 0,G=Le.Push;X===!0?G=Le.Replace:X===!1||B!=null&&Wt(B.formMethod)&&B.formAction===g.location.pathname+g.location.search&&(G=Le.Replace);let pe=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,de=ot({currentLocation:Y,nextLocation:K,historyAction:G});if(de){zt(de,{state:"blocked",location:K,proceed(){zt(de,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),T(A,R)},reset(){It(de),j({blockers:new Map(g.blockers)})}});return}return await z(G,K,{submission:B,pendingError:H,preventScrollReset:pe,replace:R&&R.replace})}function _(){if(De(),j({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){z(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}z(p||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function z(A,R,P){h&&h.abort(),h=null,p=A,S=(P&&P.startUninterruptedRevalidation)===!0,Ir(g.location,g.matches),c=(P&&P.preventScrollReset)===!0;let B=i||r,H=P&&P.overrideNavigation,Y=pr(B,R,e.basename);if(!Y){let Ue=jt(404,{pathname:R.pathname}),{matches:Je,route:Rt}=vc(B);W(),ae(R,{matches:Je,loaderData:{},errors:{[Rt.id]:Ue}});return}if(_1(g.location,R)&&!(P&&P.submission&&Wt(P.submission.formMethod))){ae(R,{matches:Y});return}h=new AbortController;let K=Yr(e.history,R,h.signal,P&&P.submission),X,G;if(P&&P.pendingError)G={[mr(Y).route.id]:P.pendingError};else if(P&&P.submission&&Wt(P.submission.formMethod)){let Ue=await Q(K,R,P.submission,Y,{replace:P.replace});if(Ue.shortCircuited)return;X=Ue.pendingActionData,G=Ue.pendingActionError,H=oe({state:"loading",location:R},P.submission),K=new Request(K.url,{signal:K.signal})}let{shortCircuited:pe,loaderData:de,errors:At}=await E(K,R,Y,H,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,X,G);pe||(h=null,ae(R,oe({matches:Y},X?{actionData:X}:{},{loaderData:de,errors:At})))}async function Q(A,R,P,B,H){De();let Y=oe({state:"submitting",location:R},P);j({navigation:Y});let K,X=Ls(B,R);if(!X.route.action&&!X.route.lazy)K={type:Ie.error,error:jt(405,{method:A.method,pathname:R.pathname,routeId:X.route.id})};else if(K=await Qr("action",A,X,B,n,t,w.basename),A.signal.aborted)return{shortCircuited:!0};if(Sr(K)){let G;return H&&H.replace!=null?G=H.replace:G=K.location===g.location.pathname+g.location.search,await ie(g,K,{submission:P,replace:G}),{shortCircuited:!0}}if(ci(K)){let G=mr(B,X.route.id);return(H&&H.replace)!==!0&&(p=Le.Push),{pendingActionData:{},pendingActionError:{[G.route.id]:K.error}}}if(Fn(K))throw jt(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:K.data}}}async function E(A,R,P,B,H,Y,K,X,G){let pe=B;pe||(pe=oe({state:"loading",location:R,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},H));let de=H||Y?H||Y:pe.formMethod&&pe.formAction&&pe.formData&&pe.formEncType?{formMethod:pe.formMethod,formAction:pe.formAction,formData:pe.formData,formEncType:pe.formEncType}:void 0,At=i||r,[Ue,Je]=fc(e.history,g,P,de,R,$,b,N,we,At,e.basename,X,G);if(W(Ye=>!(P&&P.some($t=>$t.route.id===Ye))||Ue&&Ue.some($t=>$t.route.id===Ye)),Ue.length===0&&Je.length===0)return ae(R,oe({matches:P,loaderData:{},errors:G||null},X?{actionData:X}:{})),{shortCircuited:!0};if(!S){Je.forEach($t=>{let Ln=g.fetchers.get($t.key),_r={state:"loading",data:Ln&&Ln.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set($t.key,_r)});let Ye=X||g.actionData;j(oe({navigation:pe},Ye?Object.keys(Ye).length===0?{actionData:null}:{actionData:Ye}:{},Je.length>0?{fetchers:new Map(g.fetchers)}:{}))}V=++ee,Je.forEach(Ye=>O.set(Ye.key,h));let{results:Rt,loaderResults:zr,fetcherResults:Ia}=await Z(g.matches,P,Ue,Je,A);if(A.signal.aborted)return{shortCircuited:!0};Je.forEach(Ye=>O.delete(Ye.key));let Fr=yc(Rt);if(Fr)return await ie(g,Fr,{replace:K}),{shortCircuited:!0};let{loaderData:Zn,errors:za}=hc(g,P,Ue,zr,G,Je,Ia,Pe);Pe.forEach((Ye,$t)=>{Ye.subscribe(Ln=>{(Ln||Ye.done)&&Pe.delete($t)})}),Me();let Fa=ln(V);return oe({loaderData:Zn,errors:za},Fa||Je.length>0?{fetchers:new Map(g.fetchers)}:{})}function te(A){return g.fetchers.get(A)||b1}function I(A,R,P,B){if(L1)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");O.has(A)&&Oe(A);let Y=pr(i||r,P,e.basename);if(!Y){_e(A,R,jt(404,{pathname:P}));return}let{path:K,submission:X}=cc(P,o,B,!0),G=Ls(Y,K);if(c=(B&&B.preventScrollReset)===!0,X&&Wt(X.formMethod)){Se(A,R,K,G,Y,X);return}we.set(A,{routeId:R,path:K}),ue(A,R,K,G,Y,X)}async function Se(A,R,P,B,H,Y){if(De(),we.delete(A),!B.route.action&&!B.route.lazy){let Jt=jt(405,{method:Y.formMethod,pathname:P,routeId:R});_e(A,R,Jt);return}let K=g.fetchers.get(A),X=oe({state:"submitting"},Y,{data:K&&K.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(A,X),j({fetchers:new Map(g.fetchers)});let G=new AbortController,pe=Yr(e.history,P,G.signal,Y);O.set(A,G);let de=await Qr("action",pe,B,H,n,t,w.basename);if(pe.signal.aborted){O.get(A)===G&&O.delete(A);return}if(Sr(de)){O.delete(A),xe.add(A);let Jt=oe({state:"loading"},Y,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(A,Jt),j({fetchers:new Map(g.fetchers)}),ie(g,de,{submission:Y,isFetchActionRedirect:!0})}if(ci(de)){_e(A,R,de.error);return}if(Fn(de))throw jt(400,{type:"defer-action"});let At=g.navigation.location||g.location,Ue=Yr(e.history,At,G.signal),Je=i||r,Rt=g.navigation.state!=="idle"?pr(Je,g.navigation.location,e.basename):g.matches;q(Rt,"Didn't find any matches after fetcher action");let zr=++ee;ye.set(A,zr);let Ia=oe({state:"loading",data:de.data},Y,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(A,Ia);let[Fr,Zn]=fc(e.history,g,Rt,Y,At,$,b,N,we,Je,e.basename,{[B.route.id]:de.data},void 0);Zn.filter(Jt=>Jt.key!==A).forEach(Jt=>{let _a=Jt.key,Uu=g.fetchers.get(_a),Rm={state:"loading",data:Uu&&Uu.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(_a,Rm),O.set(_a,G)}),j({fetchers:new Map(g.fetchers)});let{results:za,loaderResults:Fa,fetcherResults:Ye}=await Z(g.matches,Rt,Fr,Zn,Ue);if(G.signal.aborted)return;ye.delete(A),O.delete(A),Zn.forEach(Jt=>O.delete(Jt.key));let $t=yc(za);if($t)return ie(g,$t);let{loaderData:Ln,errors:_r}=hc(g,g.matches,Fr,Fa,void 0,Zn,Ye,Pe),Cm={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(A,Cm);let Am=ln(zr);g.navigation.state==="loading"&&zr>V?(q(p,"Expected pending action"),h&&h.abort(),ae(g.navigation.location,{matches:Rt,loaderData:Ln,errors:_r,fetchers:new Map(g.fetchers)})):(j(oe({errors:_r,loaderData:gc(g.loaderData,Ln,Rt,_r)},Am?{fetchers:new Map(g.fetchers)}:{})),$=!1)}async function ue(A,R,P,B,H,Y){let K=g.fetchers.get(A),X=oe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Y,{data:K&&K.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(A,X),j({fetchers:new Map(g.fetchers)});let G=new AbortController,pe=Yr(e.history,P,G.signal);O.set(A,G);let de=await Qr("loader",pe,B,H,n,t,w.basename);if(Fn(de)&&(de=await pm(de,pe.signal,!0)||de),O.get(A)===G&&O.delete(A),pe.signal.aborted)return;if(Sr(de)){await ie(g,de);return}if(ci(de)){let Ue=mr(g.matches,R);g.fetchers.delete(A),j({fetchers:new Map(g.fetchers),errors:{[Ue.route.id]:de.error}});return}q(!Fn(de),"Unhandled fetcher deferred data");let At={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(A,At),j({fetchers:new Map(g.fetchers)})}async function ie(A,R,P){var B;let{submission:H,replace:Y,isFetchActionRedirect:K}=P===void 0?{}:P;R.revalidate&&($=!0);let X=bi(A.location,R.location,oe({_isRedirect:!0},K?{_isFetchActionRedirect:!0}:{}));if(q(X,"Expected a location on the redirect navigation"),sm.test(R.location)&&um&&typeof((B=window)==null?void 0:B.location)<"u"){let Je=e.history.createURL(R.location),Rt=zi(Je.pathname,e.basename||"/")==null;if(window.location.origin!==Je.origin||Rt){Y?window.location.replace(R.location):window.location.assign(R.location);return}}h=null;let G=Y===!0?Le.Replace:Le.Push,{formMethod:pe,formAction:de,formEncType:At,formData:Ue}=A.navigation;!H&&pe&&de&&Ue&&At&&(H={formMethod:pe,formAction:de,formEncType:At,formData:Ue}),O1.has(R.status)&&H&&Wt(H.formMethod)?await z(G,X,{submission:oe({},H,{formAction:R.location}),preventScrollReset:c}):K?await z(G,X,{overrideNavigation:{state:"loading",location:X,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:H,preventScrollReset:c}):await z(G,X,{overrideNavigation:{state:"loading",location:X,formMethod:H?H.formMethod:void 0,formAction:H?H.formAction:void 0,formEncType:H?H.formEncType:void 0,formData:H?H.formData:void 0},preventScrollReset:c})}async function Z(A,R,P,B,H){let Y=await Promise.all([...P.map(G=>Qr("loader",H,G,R,n,t,w.basename)),...B.map(G=>G.matches&&G.match?Qr("loader",Yr(e.history,G.path,H.signal),G.match,G.matches,n,t,w.basename):{type:Ie.error,error:jt(404,{pathname:G.path})})]),K=Y.slice(0,P.length),X=Y.slice(P.length);return await Promise.all([xc(A,P,K,H.signal,!1,g.loaderData),xc(A,B.map(G=>G.match),X,H.signal,!0)]),{results:Y,loaderResults:K,fetcherResults:X}}function De(){$=!0,b.push(...W()),we.forEach((A,R)=>{O.has(R)&&(N.push(R),Oe(R))})}function _e(A,R,P){let B=mr(g.matches,R);ne(A),j({errors:{[B.route.id]:P},fetchers:new Map(g.fetchers)})}function ne(A){O.has(A)&&Oe(A),we.delete(A),ye.delete(A),xe.delete(A),g.fetchers.delete(A)}function Oe(A){let R=O.get(A);q(R,"Expected fetch controller: "+A),R.abort(),O.delete(A)}function le(A){for(let R of A){let B={state:"idle",data:te(R).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(R,B)}}function Me(){let A=[];for(let R of xe){let P=g.fetchers.get(R);q(P,"Expected fetcher: "+R),P.state==="loading"&&(xe.delete(R),A.push(R))}le(A)}function ln(A){let R=[];for(let[P,B]of ye)if(B<A){let H=g.fetchers.get(P);q(H,"Expected fetcher: "+P),H.state==="loading"&&(Oe(P),ye.delete(P),R.push(P))}return le(R),R.length>0}function Te(A,R){let P=g.blockers.get(A)||dc;return he.get(A)!==R&&he.set(A,R),P}function It(A){g.blockers.delete(A),he.delete(A)}function zt(A,R){let P=g.blockers.get(A)||dc;q(P.state==="unblocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="proceeding"||P.state==="blocked"&&R.state==="unblocked"||P.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+R.state),g.blockers.set(A,R),j({blockers:new Map(g.blockers)})}function ot(A){let{currentLocation:R,nextLocation:P,historyAction:B}=A;if(he.size===0)return;he.size>1&&br(!1,"A router only supports one blocker at a time");let H=Array.from(he.entries()),[Y,K]=H[H.length-1],X=g.blockers.get(Y);if(!(X&&X.state==="proceeding")&&K({currentLocation:R,nextLocation:P,historyAction:B}))return Y}function W(A){let R=[];return Pe.forEach((P,B)=>{(!A||A(B))&&(P.cancel(),R.push(B),Pe.delete(B))}),R}function ke(A,R,P){if(s=A,m=R,d=P||(B=>B.key),!f&&g.navigation===hl){f=!0;let B=Kn(g.location,g.matches);B!=null&&j({restoreScrollPosition:B})}return()=>{s=null,m=null,d=null}}function Ir(A,R){if(s&&d&&m){let P=R.map(H=>wc(H,g.loaderData)),B=d(A,P)||A.key;s[B]=m()}}function Kn(A,R){if(s&&d&&m){let P=R.map(Y=>wc(Y,g.loaderData)),B=d(A,P)||A.key,H=s[B];if(typeof H=="number")return H}return null}function Ft(A){i=A}return w={get basename(){return e.basename},get state(){return g},get routes(){return r},initialize:Ve,subscribe:J,enableScrollRestoration:ke,navigate:T,fetch:I,revalidate:_,createHref:A=>e.history.createHref(A),encodeLocation:A=>e.history.encodeLocation(A),getFetcher:te,deleteFetcher:ne,dispose:M,getBlocker:Te,deleteBlocker:It,_internalFetchControllers:O,_internalActiveDeferreds:Pe,_internalSetRoutes:Ft},w}function T1(e){return e!=null&&"formData"in e}function cc(e,t,n,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:rn(e);if(!n||!T1(n))return{path:i};if(n.formMethod&&!B1(n.formMethod))return{path:i,error:jt(405,{method:n.formMethod})};let o;if(n.formData){let s=n.formMethod||"get";if(o={formMethod:t.v7_normalizeFormMethod?s.toUpperCase():s.toLowerCase(),formAction:fm(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Wt(o.formMethod))return{path:i,submission:o}}let a=an(i),l=cm(n.formData);return r&&a.search&&mm(a.search)&&l.append("index",""),a.search="?"+l,{path:rn(a),submission:o}}function I1(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function fc(e,t,n,r,i,o,a,l,s,d,m,f,y){let C=y?Object.values(y)[0]:f?Object.values(f)[0]:void 0,k=e.createURL(t.location),w=e.createURL(i),g=o||k.toString()===w.toString()||k.search!==w.search,p=y?Object.keys(y)[0]:void 0,h=I1(n,p).filter(($,b)=>{if($.route.lazy)return!0;if($.route.loader==null)return!1;if(z1(t.loaderData,t.matches[b],$)||a.some(ee=>ee===$.route.id))return!0;let N=t.matches[b],O=$;return pc($,oe({currentUrl:k,currentParams:N.params,nextUrl:w,nextParams:O.params},r,{actionResult:C,defaultShouldRevalidate:g||dm(N,O)}))}),S=[];return s.forEach(($,b)=>{if(!n.some(V=>V.route.id===$.routeId))return;let N=pr(d,$.path,m);if(!N){S.push(oe({key:b},$,{matches:null,match:null}));return}let O=Ls(N,$.path);if(l.includes(b)){S.push(oe({key:b,matches:N,match:O},$));return}pc(O,oe({currentUrl:k,currentParams:t.matches[t.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:C,defaultShouldRevalidate:g}))&&S.push(oe({key:b,matches:N,match:O},$))}),[h,S]}function z1(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function dm(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function pc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function mc(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];q(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";br(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!o1.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(oe({},i)),lazy:void 0})}async function Qr(e,t,n,r,i,o,a,l,s,d){a===void 0&&(a="/"),l===void 0&&(l=!1),s===void 0&&(s=!1);let m,f,y,C=g=>{let p,c=new Promise((h,S)=>p=S);return y=()=>p(),t.signal.addEventListener("abort",y),Promise.race([g({request:t,params:n.params,context:d}),c])};try{let g=n.route[e];if(n.route.lazy)if(g)f=(await Promise.all([C(g),mc(n.route,o,i)]))[0];else if(await mc(n.route,o,i),g=n.route[e],g)f=await C(g);else{if(e==="action")throw jt(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:Ie.data,data:void 0}}else q(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),f=await C(g);q(f!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){m=Ie.error,f=g}finally{y&&t.signal.removeEventListener("abort",y)}if(j1(f)){let g=f.status;if(D1.has(g)){let h=f.headers.get("Location");if(q(h,"Redirects returned/thrown from loaders/actions must have a Location header"),sm.test(h)){if(!l){let S=new URL(t.url),$=h.startsWith("//")?new URL(S.protocol+h):new URL(h),b=zi($.pathname,a)!=null;$.origin===S.origin&&b&&(h=$.pathname+$.search+$.hash)}}else{let S=r.slice(0,r.indexOf(n)+1),$=ba(S).map(N=>N.pathnameBase),b=Iu(h,$,new URL(t.url).pathname);if(q(rn(b),"Unable to resolve redirect location: "+h),a){let N=b.pathname;b.pathname=N==="/"?a:Xt([a,N])}h=rn(b)}if(l)throw f.headers.set("Location",h),f;return{type:Ie.redirect,status:g,location:h,revalidate:f.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:m||Ie.data,response:f};let p,c=f.headers.get("Content-Type");return c&&/\bapplication\/json\b/.test(c)?p=await f.json():p=await f.text(),m===Ie.error?{type:m,error:new zu(g,f.statusText,p),headers:f.headers}:{type:Ie.data,data:p,statusCode:f.status,headers:f.headers}}if(m===Ie.error)return{type:m,error:f};if(U1(f)){var k,w;return{type:Ie.deferred,deferredData:f,statusCode:(k=f.init)==null?void 0:k.status,headers:((w=f.init)==null?void 0:w.headers)&&new Headers(f.init.headers)}}return{type:Ie.data,data:f}}function Yr(e,t,n,r){let i=e.createURL(fm(t)).toString(),o={signal:n};if(r&&Wt(r.formMethod)){let{formMethod:a,formEncType:l,formData:s}=r;o.method=a.toUpperCase(),o.body=l==="application/x-www-form-urlencoded"?cm(s):s}return new Request(i,o)}function cm(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function F1(e,t,n,r,i){let o={},a=null,l,s=!1,d={};return n.forEach((m,f)=>{let y=t[f].route.id;if(q(!Sr(m),"Cannot handle redirect results in processLoaderData"),ci(m)){let C=mr(e,y),k=m.error;r&&(k=Object.values(r)[0],r=void 0),a=a||{},a[C.route.id]==null&&(a[C.route.id]=k),o[y]=void 0,s||(s=!0,l=am(m.error)?m.error.status:500),m.headers&&(d[y]=m.headers)}else Fn(m)?(i.set(y,m.deferredData),o[y]=m.deferredData.data):o[y]=m.data,m.statusCode!=null&&m.statusCode!==200&&!s&&(l=m.statusCode),m.headers&&(d[y]=m.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:d}}function hc(e,t,n,r,i,o,a,l){let{loaderData:s,errors:d}=F1(t,n,r,i,l);for(let m=0;m<o.length;m++){let{key:f,match:y}=o[m];q(a!==void 0&&a[m]!==void 0,"Did not find corresponding fetcher result");let C=a[m];if(ci(C)){let k=mr(e.matches,y==null?void 0:y.route.id);d&&d[k.route.id]||(d=oe({},d,{[k.route.id]:C.error})),e.fetchers.delete(f)}else if(Sr(C))q(!1,"Unhandled fetcher revalidation redirect");else if(Fn(C))q(!1,"Unhandled fetcher deferred data");else{let k={state:"idle",data:C.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(f,k)}}return{loaderData:s,errors:d}}function gc(e,t,n,r){let i=oe({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function mr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function vc(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function jt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new zu(e||500,a,new Error(l),!0)}function yc(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Sr(n))return n}}function fm(e){let t=typeof e=="string"?an(e):e;return rn(oe({},t,{hash:""}))}function _1(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Fn(e){return e.type===Ie.deferred}function ci(e){return e.type===Ie.error}function Sr(e){return(e&&e.type)===Ie.redirect}function U1(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function j1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function B1(e){return P1.has(e.toLowerCase())}function Wt(e){return R1.has(e.toLowerCase())}async function xc(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let d=e.find(f=>f.route.id===s.route.id),m=d!=null&&!dm(d,s)&&(o&&o[s.route.id])!==void 0;Fn(l)&&(i||m)&&await pm(l,r,i).then(f=>{f&&(n[a]=f||n[a])})}}async function pm(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ie.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Ie.error,error:i}}return{type:Ie.data,data:e.deferredData.data}}}function mm(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function wc(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Ls(e,t){let n=typeof t=="string"?an(t).search:t.search;if(e[e.length-1].route.index&&mm(n||""))return e[e.length-1];let r=ba(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function H1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const V1=typeof Object.is=="function"?Object.is:H1,{useState:J1,useEffect:G1,useLayoutEffect:W1,useDebugValue:Q1}=bl;function Y1(e,t,n){const r=t(),[{inst:i},o]=J1({inst:{value:r,getSnapshot:t}});return W1(()=>{i.value=r,i.getSnapshot=t,gl(i)&&o({inst:i})},[e,r,t]),G1(()=>(gl(i)&&o({inst:i}),e(()=>{gl(i)&&o({inst:i})})),[e]),Q1(r),r}function gl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!V1(n,r)}catch{return!0}}function K1(e,t,n){return t()}const Z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X1=!Z1,q1=X1?K1:Y1,ev="useSyncExternalStore"in bl?(e=>e.useSyncExternalStore)(bl):q1,Fu=L.createContext(null),_u=L.createContext(null),Fi=L.createContext(null),La=L.createContext(null),Tr=L.createContext({outlet:null,matches:[]}),hm=L.createContext(null);function Ns(){return Ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ns.apply(this,arguments)}function tv(e,t){let{relative:n}=t===void 0?{}:t;_i()||q(!1);let{basename:r,navigator:i}=L.useContext(Fi),{hash:o,pathname:a,search:l}=vm(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Xt([r,a])),i.createHref({pathname:s,search:l,hash:o})}function _i(){return L.useContext(La)!=null}function Na(){return _i()||q(!1),L.useContext(La).location}function gm(){_i()||q(!1);let{basename:e,navigator:t}=L.useContext(Fi),{matches:n}=L.useContext(Tr),{pathname:r}=Na(),i=JSON.stringify(ba(n).map(l=>l.pathnameBase)),o=L.useRef(!1);return L.useEffect(()=>{o.current=!0}),L.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=Iu(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:Xt([e,d.pathname])),(s.replace?t.replace:t.push)(d,s.state,s)},[e,t,i,r])}function vm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=L.useContext(Tr),{pathname:i}=Na(),o=JSON.stringify(ba(r).map(a=>a.pathnameBase));return L.useMemo(()=>Iu(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function nv(e,t){_i()||q(!1);let{navigator:n}=L.useContext(Fi),r=L.useContext(_u),{matches:i}=L.useContext(Tr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Na(),d;if(t){var m;let w=typeof t=="string"?an(t):t;l==="/"||(m=w.pathname)!=null&&m.startsWith(l)||q(!1),d=w}else d=s;let f=d.pathname||"/",y=l==="/"?f:f.slice(l.length)||"/",C=pr(e,{pathname:y}),k=av(C&&C.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Xt([l,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Xt([l,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&k?L.createElement(La.Provider,{value:{location:Ns({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Le.Pop}},k):k}function rv(){let e=dv(),t=am(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:i},n):null,o)}class iv extends L.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?L.createElement(Tr.Provider,{value:this.props.routeContext},L.createElement(hm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ov(e){let{routeContext:t,match:n,children:r}=e,i=L.useContext(Fu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Tr.Provider,{value:t},r)}function av(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||q(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,d=null;n&&(a.route.ErrorBoundary?d=L.createElement(a.route.ErrorBoundary,null):a.route.errorElement?d=a.route.errorElement:d=L.createElement(rv,null));let m=t.concat(r.slice(0,l+1)),f=()=>{let y=o;return s?y=d:a.route.Component?y=L.createElement(a.route.Component,null):a.route.element&&(y=a.route.element),L.createElement(ov,{match:a,routeContext:{outlet:o,matches:m},children:y})};return n&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?L.createElement(iv,{location:n.location,component:d,error:s,children:f(),routeContext:{outlet:null,matches:m}}):f()},null)}var Sc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Sc||(Sc={}));var ra;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ra||(ra={}));function lv(e){let t=L.useContext(_u);return t||q(!1),t}function sv(e){let t=L.useContext(Tr);return t||q(!1),t}function uv(e){let t=sv(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function dv(){var e;let t=L.useContext(hm),n=lv(ra.UseRouteError),r=uv(ra.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function cv(e){let{fallbackElement:t,router:n}=e,r=L.useCallback(()=>n.state,[n]),i=ev(n.subscribe,r,r),o=L.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,d,m)=>n.navigate(s,{state:d,preventScrollReset:m==null?void 0:m.preventScrollReset}),replace:(s,d,m)=>n.navigate(s,{replace:!0,state:d,preventScrollReset:m==null?void 0:m.preventScrollReset})}),[n]),a=n.basename||"/",l=L.useMemo(()=>({router:n,navigator:o,static:!1,basename:a}),[n,o,a]);return L.createElement(L.Fragment,null,L.createElement(Fu.Provider,{value:l},L.createElement(_u.Provider,{value:i},L.createElement(pv,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?L.createElement(mv,null):t))),null)}function fv(e){q(!1)}function pv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Le.Pop,navigator:o,static:a=!1}=e;_i()&&q(!1);let l=t.replace(/^\/*/,"/"),s=L.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=an(r));let{pathname:d="/",search:m="",hash:f="",state:y=null,key:C="default"}=r,k=L.useMemo(()=>{let w=zi(d,l);return w==null?null:{location:{pathname:w,search:m,hash:f,state:y,key:C},navigationType:i}},[l,d,m,f,y,C,i]);return k==null?null:L.createElement(Fi.Provider,{value:s},L.createElement(La.Provider,{children:n,value:k}))}function mv(e){let{children:t,location:n}=e,r=L.useContext(Fu),i=r&&!t?r.router.routes:Ms(t);return nv(i,n)}var Ec;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Ec||(Ec={}));new Promise(()=>{});function Ms(e,t){t===void 0&&(t=[]);let n=[];return L.Children.forEach(e,(r,i)=>{if(!L.isValidElement(r))return;let o=[...t,i];if(r.type===L.Fragment){n.push.apply(n,Ms(r.props.children,o));return}r.type!==fv&&q(!1),!r.props.index||!r.props.children||q(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ms(r.props.children,o)),n.push(a)}),n}function hv(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ia.apply(this,arguments)}function gv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yv(e,t){return e.button===0&&(!t||t==="_self")&&!vv(e)}const xv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function wv(e,t){return M1({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:n1({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Sv(),routes:e,detectErrorBoundary:hv}).initialize()}function Sv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ia({},t,{errors:Ev(t.errors)})),t}function Ev(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new zu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ym=L.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:d,preventScrollReset:m}=t,f=gv(t,xv),{basename:y}=L.useContext(Fi),C,k=!1;if(typeof d=="string"&&Cv.test(d)&&(C=d,kv)){let c=new URL(window.location.href),h=d.startsWith("//")?new URL(c.protocol+d):new URL(d),S=zi(h.pathname,y);h.origin===c.origin&&S!=null?d=S+h.search+h.hash:k=!0}let w=tv(d,{relative:i}),g=Av(d,{replace:a,state:l,target:s,preventScrollReset:m,relative:i});function p(c){r&&r(c),c.defaultPrevented||g(c)}return L.createElement("a",ia({},f,{href:C||w,onClick:k||o?r:p,ref:n,target:s}))});var kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(kc||(kc={}));var Cc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cc||(Cc={}));function Av(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=gm(),s=Na(),d=vm(e,{relative:a});return L.useCallback(m=>{if(yv(m,n)){m.preventDefault();let f=r!==void 0?r:rn(s)===rn(d);l(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[s,l,d,r,i,n,e,o,a])}const Rv=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,$v="/Nanofab-Project/assets/microscopio-02614e2c.svg",Pv="/Nanofab-Project/assets/mol-3565b3ed.svg",u={mobile:"390px",largeMobile:"391px",tablet:"819px",notebook:"1023px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Dv=x.div`
  width: 100%;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  background-color: #F8F8F8;
  
  overflow: hidden;

  @media screen and (max-width: ${u.mobile}) {    
    width: 100%;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    /* width: 80%; */
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {     
    /* 4k */
  }
  
`,Ov=x.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    height: 10vh;
  }
  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {    
    height: 10vh;
  }
  @media screen and (min-width: ${u.desktop}) and (max-width: ${u.largeDesktop}) {  
    height: 10vh;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {  
    height: 10vh;
  }

`,bv=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;x.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({theme:e})=>e.colors.foreground};
  padding-right: 25px;
`;const Lv=x.img`
  padding-left: 15px;
  width: 150px;

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 400px;
  }
`,Nv="/Nanofab-Project/assets/nanofab-c5546f6e.png",Mv="/Nanofab-Project/assets/background-1f899db0.svg",Tv=x.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${Mv});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`,Iv=x.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${u.mobile}) {
    flex-direction: column;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    flex-direction: column;
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 60%;
  }
`,Ac=x.img`
  width: 20%;

  @media screen and (max-width: ${u.mobile}) {
    width: 250px;
    margin-top: 15px;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${u.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {
    width: 400px;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,zv=x.img`
  width: 30%;
  margin-left: 17%;

  @media screen and (max-width: ${u.mobile}) {
    width: 80%;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: ${u.tablet}) {
    width: 35%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
    width: 40%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    width: 30%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {
    width: 25%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 35%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}) {
    width: 35%;
  }

  border-radius: 10px;
`,Fv=x.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,_v=x.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Uv=x.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,jv="/Nanofab-Project/assets/logo-uerj-a13c7853.png",Bv="/Nanofab-Project/assets/nanofab-lab-8dc5e917.png",Hv="/Nanofab-Project/assets/LogoPPGEM-white-fd88f51e.png",Vv=({})=>v(Tv,{children:F(Iv,{children:[v(Fv,{children:v(zv,{src:jv})}),v(_v,{children:v(Ac,{src:Bv})}),v(Uv,{children:v(Ac,{src:Hv})})]})}),Jv=x.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 1299px) {    
    display: none;
  }
`,Gv=x.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  text-align: center;
  padding: 10px;
  transition: all 0.2s linear;

  &:hover {
    background-color: #e6e6e6;
    /* border-radius: 15px; */
  }
`,Wv=x(ym)`
  font-family: "Maven Pro";
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.title};
  
    // @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {    
    // 
    // }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,Qv=({name:e,url:t})=>v(Gv,{children:v(Wv,{to:t,children:e})}),Yv=({urls:e})=>v(Jv,{children:e.map(t=>v(Qv,{name:t.name,url:t.url},e.indexOf(t)))}),Kv=x.nav`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 1300px) {    
        display: none;
    }
`,qn=x(ym)`
    font-weight: 300;
    font-size: var(--medium);
    margin: 20px 15px;
    cursor: pointer;
    text-decoration: none;
    color: var(--white);
    font-family: 'Maven Pro';

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,Zv=x.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,Xv=x.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0px;
    transition: 0.2s;
    z-index: 10;
    padding: 15px;
    
    border: 1px solid #c2c2c2;
    background: #f2f2f2;
    border-radius: 0px 15px 15px 0px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(0px);
`;var xm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rc=tt.createContext&&tt.createContext(xm),Cn=globalThis&&globalThis.__assign||function(){return Cn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cn.apply(this,arguments)},qv=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function wm(e){return e&&e.map(function(t,n){return tt.createElement(t.tag,Cn({key:n},t.attr),wm(t.child))})}function Ui(e){return function(t){return tt.createElement(ey,Cn({attr:Cn({},e.attr)},t),wm(e.child))}}function ey(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=qv(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),tt.createElement("svg",Cn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:Cn(Cn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&tt.createElement("title",null,o),e.children)};return Rc!==void 0?tt.createElement(Rc.Consumer,null,function(n){return t(n)}):t(xm)}function ty(e){return Ui({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(e)}function ny(e){return Ui({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(e)}function ry(e){return Ui({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"}},{tag:"path",attr:{d:"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"}}]})(e)}const iy=()=>{const[e,t]=L.useState(!1);return F(Kv,{children:[v(Zv,{onClick:()=>t(!e),children:e?v(ty,{size:40}):v(ny,{size:40})}),e?F(Xv,{children:[v(qn,{to:"/",onClick:()=>t(!1),children:"Home"}),v(qn,{to:"/equipe",onClick:()=>t(!1),children:"Equipe"}),v(qn,{to:"/andamento",onClick:()=>t(!1),children:"Andamento"}),v(qn,{to:"/submissao_projetos",onClick:()=>t(!1),children:"Submissão de Projetos"}),v(qn,{to:"/publicacoes",onClick:()=>t(!1),children:"Publicações"}),v(qn,{to:"/parcerias",onClick:()=>t(!1),children:"Parcerias"})]}):null]})},oy=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b11211;
  background-color: #f8f8f8;
  
  cursor: pointer;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    color: #fff;
    background-color: #b11211;
    transition: 0.2s;
  }

  @media screen and (max-width: 1300px) {    
    background-color: #f8f8f8;
    color: #000
  }
`,ay=x.span`
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-right: 10px;

  @media screen and (max-width: 1300px) {    
    display: none;
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,ly=x(ry)`
  font-size: 38px;

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {     
   font-size: 48px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: 60px;   
  }
`,sy=({})=>{const e=gm();return F(oy,{onClick:()=>e("/Login"),children:[v(ay,{children:"Entrar"}),v(ly,{})]})},On=({})=>F(Dv,{children:[F(Ov,{children:[v(iy,{}),v(Lv,{src:Nv}),F(bv,{children:[v(Yv,{urls:[{name:"Home",url:"/"},{name:"Equipe",url:"/equipe"},{name:"Andamento",url:"/andamento"},{name:"Submissão de Projetos",url:"/submissao_projetos"},{name:"Publicações",url:"/publicacoes"},{name:"Parcerias",url:"/parcerias"}]}),v(sy,{})]})]}),v(Vv,{})]}),uy=x.div`
  display: flex;
  justify-content: bottom;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.middleground};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 15px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,dy=x.div`
  width: 85%;
  height: 2px;
  background: ${({theme:e})=>e.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${u.mobile}) {    
    width: 50%;
  }
`,cy=x.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${u.mobile}) {    
    flex-direction: column;
  }
`,$c=x.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  text-align: center;
  color: ${({theme:e})=>e.colors.text.content};

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,vl=x.h3`
  text-align: center;
`,yl=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6%;
  text-align: center;
`,xl=x.span`
  /* display: flex;
  flex-direction: row; */
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.content};
  width: 100%;
  text-align: center;
  
  @media screen and (max-width: ${u.mobile}){
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
  
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,fy=x.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1%;
  margin-top: 1%;

  @media screen and (max-width: ${u.mobile}) {    
    width: 100%;
    margin-bottom: 3%;
    justify-content: center;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {      
    width: 100%;
    margin-bottom: 3%;
    justify-content: flex-end;
  } 
  
  @media screen and (min-width: 700px) and (max-width: 900px) {      
    width: 83%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
    margin-top: 1%;
  }
`,py=x.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;

  @media screen and (max-width: ${u.mobile}) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {      
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  } 

  @media screen and (min-width: 700px) and (max-width: 900px) {      
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,bn=({})=>F(uy,{children:[v(fy,{children:F(py,{children:[F(yl,{children:[v(vl,{children:"Endereço"}),v(xl,{children:"Rua São Franscisco Xavier - 3107f - Maracanã, Rio de Janeiro"})]}),F(yl,{children:[v(vl,{children:"Email"}),v(xl,{children:"adsad@gmail.com"})]}),F(yl,{children:[v(vl,{children:"Funcionamento"}),v(xl,{children:"Segunda a sexta Xhrs às Yhrs"})]})]})}),v(dy,{}),F(cy,{children:[v($c,{children:"Ⓒ Serra Jr. Engenharia 2022"}),v($c,{children:"Todos os direitos reservados"})]})]}),my=x.div`
  position: relative;
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 20px;

  @media screen and (max-width: ${u.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%;
    }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
      display: flex;
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;
      padding: 10px;
      margin-top: 15%;
  }
  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {    
      display: flex;
      width: 85%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 12%;
      margin-bottom: 5%;
      padding: 10px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}) {    
      padding: 60px;
  }

`,hy=x.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${u.mobile}) {    
      width: 100%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
      width: 90%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {    
      width: 90%;
      padding: 10px 10px;
  }
`,gy=x.span`
  margin: 10px 20px 5px 20px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  text-align: justify;

  /* @media screen and (max-width: ${u.mobile}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {    
    text-align: justify;
  } */

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
    
  }
`,vy=x.div`
  position: absolute;
  top: -70px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${u.mobile}) {
    top: -5px;
    left: -5px;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  }
`,yy=x.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${u.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
`,xy="/Nanofab-Project/assets/chemistry-7542d245.png",wy=({})=>v(vy,{children:v(yy,{src:xy})}),Sy=x.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6%;

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    padding-top: 0px;
  }
`,Ey=x.span`
  font-weight: bold;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,ky=({title:e})=>v(Sy,{children:v(Ey,{children:e})}),Cy=({descriptions:e})=>F(my,{children:[v(wy,{}),v(ky,{title:"Sobre o NANOFAB"}),v(hy,{children:e.map(t=>v(gy,{children:t.text},e.indexOf(t)))})]}),Ay=x.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    @media screen and (max-width: ${u.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 10%;
    }
    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
        display: flex;
        width: 80%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 10%;
        margin-top: 10%;
    }
    @media screen and (min-width: 720px) and (max-width: 770px) {    
        display: flex;
        width: 85%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
        margin-top: 0%;
    }
    @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {   
        display: flex;
        width: 85%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
        margin-top: 2%;
  }

    @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
        width: 90%;
    }
`,Ry=x.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;
  margin-top: 80px;
  text-align: justify;
  overflow: visible;
  margin-bottom: 5%;
  position: relative;

  @media screen and (max-width: ${u.mobile}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {   
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    text-align: left;
  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {   
    padding: 1%;
  }
`,$y=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;
  margin-top: 5%;
`,Py=x.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`,Dy=x.span`
  margin: 10px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  padding: 20px;
  text-align: justify;

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,Oy=x.span`
  margin: 20px;
  font-weight: bold;
  line-height: 30px;
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;
  margin-top: 90px;

  @media screen and (max-width: ${u.mobile}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {   
    margin-bottom: 0px;
    margin: 10px;
    margin-top: 100px;
  }
  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
  }
`,by=({image:e,title:t,text:n})=>F(Ry,{children:[v($y,{children:v(Py,{src:e,alt:t})}),v(Oy,{children:t}),v(Dy,{children:n})]}),Ly=({cards:e})=>v(Ay,{children:e.map(t=>v(by,{image:t.image,title:t.title,text:t.text},e.indexOf(t)))}),Ny=({})=>F(Rv,{children:[v(On,{}),v(Cy,{descriptions:[{text:"O Laboratório Multiusuário de Nanofabricação e Caracterização de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduação em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisição de um microscópio eletrônico de alta resolução do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existência de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperação. Nesse contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. Além disso, o NANOFAB atenderá demandas na área de nanofabricação com a aquisição de um microscópio FIB (Focused Ion Beam), a partir de recursos aprovados no Edital FAPERJ 2015, Grandes Equipamentos."},{text:"O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. O microscópio FIB também permitirá a preparação de amostras para microscopia eletrônica de transmissão."},{text:"O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geração de hidrogênio, revestimentos de aços e compósitos."}]}),v(Ly,{cards:[{image:Pv,title:"Coordenação e Comitê Gestor",text:"O NANOFAB é coordenado pelo prof. Norberto Mangiavacchi (UERJ) e tem como vice-coordenador o prof. Eduardo de Albuquerque Brocchi (PUC-Rio). O Comitê Gestor do NANOFAB é composto por três membros, eleitos a cada dois anos. Para o Biênio 2016-2018, o Comitê Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET) e Rogério Navarro Correia de Siqueira (PUC-Rio)."},{image:$v,title:"Unidades e Programas Envolvidos / Projetos de Pesquisa",text:"Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química da UERJ) e Instituto de Física da UERJ."}]}),v(bn,{})]}),My=x.div`
  width: 100%;
`,Ty=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`,Iy=x.div`

`,zy=x.img`
  height: 120px;
  @media screen and (max-width: ${u.mobile}) {
    height: 80px;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    height: 100px;
  }

  @media screen and (min-width: 700px) and (max-width: 821px) {
    height: 100px;
  }
`,Fy=x.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  margin-bottom: 20px;

  @media screen and (max-width: ${u.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
`,_y=x.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    border-radius: 40px;
    
    @media screen and (max-width: ${u.mobile}) {
        width: 90%;
    }  
    
    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
        width: 90%;
    }
`,Uy=x.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (max-width: ${u.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${u.tablet}) and (max-width: 1025px) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,jy=x.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #d5d4d4;
`,By=x.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(217, 217, 217, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);

    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

    padding-top: 20px;
    padding-bottom: 20px;
`,Hy=x.div`
    width: 40%;
    margin: 10px;

    @media screen and (max-width: ${u.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${u.largeMobile}) {    
        width: 70%;
    }
`,Vy=x.button`    
    width: 100%;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #c2c2c2;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    ${({isVisible:e})=>e?`border-bottom-left-radius: 0px;
         border-bottom-right-radius: 0px;
        
        // -webkit-animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    // animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        
        // @-webkit-keyframes fade-in {
        //     0% {
        //         opacity: 0;
        //         max-height: 0px;
        //     }
        //     100% {
        //         opacity: 1;
        //         max-height: 400px;
        //     }
        //   }
        //   @keyframes fade-in {
        //     0% {
        //         opacity: 0;
        //         max-height: 0px;
        //     }
        //     100% {
        //         opacity: 1;
        //         max-height: 400px;
        //     }
        //   }
        `:null}
`,Jy=x.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;
    flex-wrap: wrap;

    @media screen and (max-width: ${u.mobile}) {   
        justify-content: space-between;
    }


    /* ${({isVisible:e})=>e?`
        -webkit-animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        
        @-webkit-keyframes fade-in {
            0% {
                opacity: 0;
                max-height: 0px;
            }
            100% {
                opacity: 1;
                max-height: 400px;
            }
          }
          @keyframes fade-in {
            0% {
                opacity: 0;
                max-height: 0px;
            }
            100% {
                opacity: 1;
                max-height: 400px;
            }
          }
        
        `:null} */
    
`,wl=x.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    flex: 1
`,Sl=x.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`,Gy=x.span`
    font-size: ${({theme:e})=>e.fonts.small}px;
    color: ${({theme:e})=>e.colors.text.title};
    text-align: left;
`,El=x.span`

`;function Sm(e){return Ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 14l-4-4h8z"}}]}]})(e)}function Em(e){return Ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10l4 4H8z"}}]}]})(e)}const Wy=({name:e,unit:t,bond:n,titration:r})=>{const[i,o]=L.useState(!1);return F(Hy,{children:[F(Vy,{onClick:()=>o(!i),isVisible:i,children:[v(Gy,{children:e}),i?v(Em,{size:20}):v(Sm,{size:20})]}),i?F(Jy,{isVisible:i,children:[F(wl,{children:[v(Sl,{children:"PPG/IES"}),v(El,{children:t})]}),F(wl,{children:[v(Sl,{children:"Vínculo"}),v(El,{children:n})]}),F(wl,{children:[v(Sl,{children:"Titulação"}),v(El,{children:r})]})]}):null]})},Qy=({title:e,persons:t})=>F(_y,{children:[v(jy,{children:v(Uy,{children:e})}),v(By,{children:t.map(n=>v(Wy,{name:n.name,bond:n.bond,titration:n.titration,unit:n.unit},t.indexOf(n)))})]}),Yy="/Nanofab-Project/assets/team-2f83bf5a.png",Ky=({list:e})=>F(Ty,{children:[v(Iy,{children:v(zy,{src:Yy})}),v(Fy,{children:"Equipe"}),e.map(t=>v(Qy,{title:t.personFunction,persons:t.persons},e.indexOf(t)))]}),Zy=({})=>F(My,{children:[v(On,{}),v(Ky,{list:[{personFunction:"Comitê Gestor",persons:[{name:"José Brant de Campos",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE "},{name:"Noberto Mangiavacchi",unit:"UERJ",bond:"Permanente",titration:"Doutor"},{name:"Hector Reynaldo Meneses",unit:"CEFET-RJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rogério Navarro Correia de Siqueira",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Suzana Bottega Peripolli",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]},{personFunction:"Equipe NANOFAB",persons:[{name:"Maybi Fálker Sampaio",unit:"NANOFAB/UERJ",bond:"Bolsista QUALITEC/UERJ",titration:"Doutor"},{name:"Kellen Venâncio dos Santos",unit:"NANOFAB/UERJ",bond:"Bolsista TCT/FAPERJ",titration:"Engenheira"},{name:"Camila Alves Pelicarto Silva",unit:"NANOFAB/UERJ",bond:"Bolsista PROATEC/UERJ",titration:"Engenheira"}]},{personFunction:"Comitê de Usuários",persons:[{name:"Lilian Pantoja Sosman",unit:"IF - PPGF/UERJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Ivana Lourenço de Mello Ferreira",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilia Garcia Diniz",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José Ricardo Muniz Ferreira",unit:"Empresa R-CRio",bond:"Sócio",titration:"Doutor"}]},{personFunction:"Pesquisador",persons:[{name:"Eduardo de Albuquerque Brocchi",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 1C, CNE"},{name:"José Guilherme Santos Silva",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1B, CNE"},{name:"Luciano Rodrigues Ornelas de Lima",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1D, CNE"},{name:"Marcos Antonio da Silva Costa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Nakédia Maysa Freitas Carvalho",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE"},{name:"Francisco José Moura",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rodrigo Fernandes Magalhães de Souza",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eric Cardona Romani",unit:"SENAI",bond:"Permanente",titration:"Doutor"},{name:"Jorge Luis do Amaral",unit:"PPG-EL/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilza Sampaio Aguilar",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Daniel José Naid Mansur Chalhub",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José da Rocha Miranda Pontes",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Ana Maria Furtado de Sousa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Jaqueline Dias Senra",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Juliana Fonseca de Lima",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Herman Lima Pessoa",unit:"CBPF",bond:"Permanente",titration:"Doutor"},{name:"Letícia Aguilera dos Santos",unit:"IPRJ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Cecilia Vilani",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Celio Albano da Costa",unit:"UFRJ",bond:"Permanente",titration:"Doutor"},{name:"José Luis Lopes da Silveira",unit:"UFRJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eduardo Sousa Lima",unit:"IME",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eustáquio de Souza Baêta Junior",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]}]}),v(bn,{})]}),Xy=x.div`
  width: 100%;
`,qy=x.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #d9d9d9aa;
  border-radius: 30px;
  margin: 3%;
  margin-top: 5%;
  padding: 2%;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;
`,ex=x.h1`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;


  @media screen and (min-width: ${u.desktop}) and (max-width: ${u.largeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*3.5}px;
  }
`,tx=x.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
`,nx=x.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`,rx=x.div`
  margin-top: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;

  @media screen and (max-width: ${u.mobile}) {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 100%;
    margin-top: 20px;
  }
`,Pc=x.button`
  width: 10%;
  padding: 0.5%;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  margin: 1%;
  font-size: ${({theme:e})=>e.fonts.small}px;
  cursor: pointer;

  :hover {
    background-color: #d5d4d4;
    transition: 0.5s;
  }

  // @media screen and (max-width: ${u.mobile}) {
  //   width: 50%;
  // }

  // @media screen and (min-width: 390px) and (max-width: ${u.largeMobile}) {
  //   width: 50%;
  // }

  // @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
  //   width: 50%;
  // }

  // @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
  //   width: 50%;
  // }

  // @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
  //   width: 60%;
  // }

  // @media screen and (min-width: ${u.extraLargeDesktop}) {
  //   width: 30%;
  //   font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  // }
  // @media screen and (min-width: ${u.desktop}) and (max-width: ${u.largeDesktop}) {
  //   width: 30%;
  //   font-size: ${({theme:e})=>e.fonts.extralarge}px;
  // }
`,ix=x.div`
  width: 50%;
  margin-bottom: 3%;
  margin-right: 50%;
`,ox=x.h2`
  font-size: ${({theme:e})=>e.fonts.large}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  // @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
  //   font-size: ${({theme:e})=>e.fonts.large}px;
  // }

  // @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
  //   font-size: ${({theme:e})=>e.fonts.extralarge}px;
  // }

  // @media screen and (min-width: ${u.desktop}) and (max-width: ${u.largeDesktop}) {
  //   font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  // }

  // @media screen and (min-width: ${u.extraLargeDesktop}) {
  //   font-size: ${({theme:e})=>e.fonts.extralarge*2.5}px;
  // }
`,ax=x.select`
  width: 25%;
  border-radius: 10px;
  margin-right: 20px;
  padding: 0.5%;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fonts.small}px;

  // @media screen and (max-width: ${u.mobile}) {
  //   width: 100%;
  //   margin-right: 6px;
  // }

  // @media screen and (min-width: 390px) and (max-width: ${u.largeMobile}) {
  //   width: 100%;
  //   margin-right: 5px;
  // }

  // @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
  //   width: 100%;
  //   margin-right: 6px;
  // }

  // @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
  //   width: 100%;
  //   margin-right: 10px;
  // }

  // @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
  //   width: 100%;
  //   margin-right: 10px;
  // }
  // @media screen and (min-width: ${u.extraLargeDesktop}) {
  //   width: 30%;
  //   font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  // }
  
  // @media screen and (min-width: ${u.desktop}) and (max-width: ${u.largeDesktop}) {
  //   width: 30%;
  //   font-size: ${({theme:e})=>e.fonts.extralarge}px;
  // }

`;x.option`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
`;const lx=x.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  width: 100%;
`,sx=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
`,ux=x.div`
    width: 100%;
    display: flex;
    background-color: #D5D4D4;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`,dx=x.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin: 5px;
    font-weight: bold;

    margin-left: 10px;
`,cx=x.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
`,fx=x.span`
    text-align: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ${({status:e})=>{if(e==="Aprovado")return"background-color: rgba(48, 212, 111, 0.7);";if(e==="Solicitado")return"background-color: rgba(255, 204, 92, 0.7);";if(e==="Cancelado")return"background-color: rgba(255, 111, 105, 0.7);"}}
`,kl=x.span`
    margin: 10px;
`,px=({name:e,institution:t,startDate:n,endDate:r,samples:i,situation:o})=>F(sx,{children:[v(ux,{children:F(dx,{children:[e," - ",t]})}),F(cx,{children:[F(kl,{children:["Data de Solicitação: ",n]}),F(kl,{children:["Data Final: ",r||"Não informado"]}),F(kl,{children:["Quantidade de Amostras: ",i]})]}),v(fx,{status:o,children:o})]}),mx=({list:e})=>{const[t,n]=L.useState(0),[r,i]=L.useState(9),[o,a]=L.useState("Todos");L.useState(Array);const l=()=>{t===9?(n(t),i(r)):(n(t+9),i(r+9))},s=()=>{t===0?(n(0),i(9)):(n(t-9),i(r-9))},d=e.slice(t,r).filter(f=>o==="Todos"?!0:f.situation===o).map(f=>v(px,{name:f.name,institution:f.institution,startDate:f.startDate,endDate:f.endDate,samples:f.samples,situation:f.situation},e.indexOf(f)));function m(f){f.target.value==="Todos"?a("Todos"):f.target.value==="Aprovado"?a("Aprovado"):f.target.value==="Agendado"?a("Agendado"):f.target.value==="Solicitado"?a("Solicitado"):f.target.value==="Antigos"&&a("Antigos")}return F(tx,{children:[F(ix,{children:[v(ox,{children:"Filtro"}),v(lx,{children:F(ax,{onChange:f=>m(f),children:[v("option",{value:"Todos",children:"Todos"}),v("option",{value:"Aprovado",children:"Aprovado"}),v("option",{value:"Agendado",children:"Agendado"}),v("option",{value:"Solicitado",children:"Solicitado"}),v("option",{value:"Antigos",children:"Antigos"})]})})]}),v(nx,{children:d}),F(rx,{children:[v(Pc,{onClick:s,children:"Anterior"}),v(Pc,{onClick:l,children:"Próxima"})]})]})},hx=({})=>F(qy,{children:[v(ex,{children:"Lista de Solitações"}),v(mx,{list:[{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Cancelado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Antigos"}]})]}),gx=({})=>F(Xy,{children:[v(On,{}),v(hx,{}),v(bn,{})]}),vx=x.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`,yx=x.div`
  width: 85%;
  background-color: #D9D9D9aa;
  border-radius: 30px;
  margin: 3%;
  margin-top: 5%;
  padding: 2%;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;

  @media screen and (max-width: ${u.mobile}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }
`,xx=x.div`
  position: absolute;
  top: -50px;
  right: -50px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${u.mobile}) {
    right: calc(100vw / 3);
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    right: calc(100vw / 3);
  }
  /*
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  } */
`,wx=x.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${u.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
 
`;x.h1` // Submissão de Projeto
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;

  @media screen and (max-width: ${u.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }
`;const Sx=x.div`
  width: 100%;
  padding: 5%;
  padding-left: 3.5%;

`,Kr=x.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${u.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,Ma=x.input`
    width: 90%;
    height: 30px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 5px;
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      padding-left: 20px;
      color: #5086B699;
      opacity: 1; /* Firefox */
    }
    
    @media screen and (max-width: ${u.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`;x.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
    `;const ao=x.input`
    height: 15px;
    width: 15px;
`,lo=x.label`
  margin-left: 5px;
  font-family: "Maven Pro";
  `,so=x.div`
  display: flex;
  
  flex-direction: row;
  margin: 5px;
  `,Cl=x.div`
  margin-bottom: 3%;
  `,Ex=x(Ma)`

`,kx=x(Ma)`

`,Cx=x(Ma)`

`,Ta=x.div`
    margin-bottom: 3%;
`;x(Ta)`

`;x(Ta)`

`;x(Ta)`

`;const Ax=({formData:e,setFormData:t})=>F(Sx,{children:[F(Ta,{children:[v(Kr,{children:"Orientador:"}),v(Ma,{type:"text",name:"orientador",value:e.orientador,onChange:n=>t({orientador:n.target.value,outros:e.outros}),placeholder:"(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"})]}),v(Kr,{children:"Tipos:"}),F(so,{children:[v(ao,{type:"checkbox",value:"1"}),v(lo,{children:"Microscopia de Varredura de Alta Resolução (MEV-FEG)"})]}),F(so,{children:[v(ao,{type:"checkbox",value:"1"}),v(lo,{children:"Microscopia por Feixe de Íons Focalizado"})]}),F(so,{children:[v(ao,{type:"checkbox",value:"1"}),v(lo,{children:"Textura"})]}),F(so,{children:[v(ao,{type:"checkbox",value:"1"}),v(lo,{children:"Difração de Raios-x"})]}),F(Cl,{children:[v(Kr,{children:"Outros:"}),v(Ex,{type:"text",name:"outros",value:e.outros,onChange:n=>t({orientador:e.orientador,outros:n.target.value}),placeholder:"Informar nome."})]}),F(Cl,{children:[v(Kr,{children:"Detectores:"}),v(kx,{placeholder:"[TEMP] Informar detectores."})]}),F(Cl,{children:[v(Kr,{children:"Projeto Científico e Descrição das Amostras:"}),v(Cx,{placeholder:"[TEMP] Informar Projeto Científico e Descrição das Amostras:."})]})]}),Rx=x.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,$x=x.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
    
    @media screen and (max-width: ${u.mobile}) {    
        width: 80%;
        margin-bottom: 5%;
    }
    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {   
        width: 80%;
        margin-bottom: 5%;
    }
    `,Dc=x.button`
    background-color: #5086B6;
    border: 0px;
    border-radius: 20px;
    width: 35%;
    height: 4vh;
    
    color: white;
    font-weight: bold;
    font-family: "Maven Pro";
    
    :first-child {// Selects first button for a specific transition to red text
        background-color: #aa0000;// red
        :hover{
            color: #aa0000; 
            background-color: #fff;
            border: 1px solid #aa0000;
            transition: 0.5s;
            cursor: pointer;
        }
    }
    :nth-child(2){ // Selects second button for a specific transition to blue text
       :hover{
            color: #5086B6; // blue
            background-color: #fff;
            border: 1px solid #5086B6;
            transition: 0.5s;
            cursor: pointer;
        }
    }

    @media screen and (max-width: ${u.mobile}) {    
        width: 40%;
        height: 5vh;
    }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {   
        width: 40%;
    }

    `,Px=({})=>v(Rx,{children:F($x,{children:[v(Dc,{children:"Apagar"}),v(Dc,{type:"submit",children:"Enviar"})]})}),Dx="/Nanofab-Project/assets/search-1143e4ec.png",Ox=({})=>{const[e,t]=L.useState({orientador:"",outros:""}),n=i=>{i.preventDefault(),console.log(e),r()};function r(){localStorage.setItem("formData",JSON.stringify(e))}return L.useEffect(()=>{const i=JSON.parse(localStorage.getItem("formData")||"{}");i!="{}"&&t(i)},[]),F(yx,{children:[v(xx,{children:v(wx,{src:Dx})}),F("form",{onSubmit:n,children:[v(Ax,{formData:e,setFormData:t}),v(Px,{formData:e,setFormData:t})]})]})},bx=({})=>F(vx,{children:[v(On,{}),v(Ox,{}),v(bn,{})]}),Lx=x.div`
  width: 100%;
`,Nx=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${u.mobile}) {
    margin-top: 7%;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    margin-top: 6%;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    margin-top: 5%;
  }

  @media screen and (min-width: ${u.desktop}) and (max-width: ${u.largeDesktop}) {
    margin-top: 2%;
  }
`,Mx="/Nanofab-Project/assets/publications2-b4db6c33.svg",Tx=x.div`
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    margin-bottom: 2%;
  }
`,Ix=x.div`
  /* width: 30%; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 70px; */
`,zx=x.div`
  height: 10vh;
  padding: 35px;

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    margin-bottom: 5%;
  }
  
  @media screen and (min-width: ${u.desktop}) and (max-width: ${u.largeDesktop}) {
    margin-bottom: 10%;
    padding: 0;
  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    padding: 0;
    margin: 0;
  }
`,Fx=x.img`
  height: 150px;
  width: 150px;

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    height: 180px;
    width: 180px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    height: 250px;
    width: 250px;
  }
`,_x=({url:e})=>v(zx,{children:v(Fx,{src:e})}),Ux=x.div``,jx=x.span`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,Bx=({title:e})=>v(Ux,{children:v(jx,{children:e})}),km=({title:e,image:t})=>v(Tx,{children:F(Ix,{children:[v(_x,{url:t}),v(Bx,{title:e})]})}),Hx=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 50px;
`,Vx=x.div`
    width: 40%;
    margin-bottom: 10px;

    @media screen and (max-width: ${u.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${u.largeMobile}) {    
        width: 70%;
    }

    @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
        margin-bottom: 20px;
    }
`,Jx=x.button`    
    width: 100%;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #c2c2c2;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    ${({isVisible:e})=>e?`border-bottom-left-radius: 0px;
         border-bottom-right-radius: 0px;
        
        -webkit-animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        
        @-webkit-keyframes fade-in {
            0% {
                opacity: 0;
                max-height: 0px;
            }
            100% {
                opacity: 1;
                max-height: 400px;
            }
          }
          @keyframes fade-in {
            0% {
                opacity: 0;
                max-height: 0px;
            }
            100% {
                opacity: 1;
                max-height: 400px;
            }
          }
        `:null}
`,Gx=x.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;

    @media screen and (max-width: ${u.mobile}) {   
        justify-content: space-between;
    }
    @media screen and (min-width: ${u.extraLargeDesktop}) {    
        padding: 30px;
    }
`;x.div`
    width: 50%;
    text-align: justify;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`;const Wx=x.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${u.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
        min-height: 70px;
    }

`;x.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`;const Qx=x.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    text-align: left;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #AE0806;

    @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge}px;
    }
    @media screen and (min-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.7}px;
    }
`,Yx=x.span`
    text-align: justify;

    @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
    }
    @media screen and (min-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
    }
`,Kx=({year:e,descriptions:t})=>{const[n,r]=L.useState(!1);return F(Vx,{children:[F(Jx,{onClick:()=>r(!n),isVisible:n,children:[v(Qx,{children:e}),n?v(Em,{size:20}):v(Sm,{size:20})]}),n?v(Gx,{isVisible:n,children:t.map(i=>v(Wx,{children:v(Yx,{children:i.description})}))}):null]})},Zx=({list:e})=>v(Hx,{children:e.map(t=>v(Kx,{year:t.year,descriptions:t.descriptions},e.indexOf(t)))}),Xx=({})=>F(Lx,{children:[v(On,{}),v(km,{title:"Publicações",image:Mx}),v(Nx,{children:v(Zx,{list:[{year:"2022",descriptions:[{description:"SILVA, ADRIEL M.; SOUZA, RODRIGO F.M.; AGUILERA, LETÍCIA S.; de Campos, José B.; BROCCHI, EDUARDO A. Upgrade of titanium content in a vanadiferous titanomagnetite waste: Design of a roast-leach route based on thermodynamics simulations. MINERALS ENGINEERING. , v.179, p.107460 - , 2022."},{description:"LIMA, EDUARDO DE SOUSA; GALL, CAMILA CATALANO; ALVES, MANUEL FELLIPE R.P.; DE CAMPOS, JOSÉ BRANT; CAMPOS, TIAGO MOREIRA BASTOS; SANTOS, CLAUDINEI DOS Development and characterization of alumina-toughened zirconia (ATZ) ceramic composites doped with a beneficiated rare-earth oxide extracted from natural ore. Journal of Materials Research and Technology-JMR&T. , v.16, p.451 - 460, 2022."}]},{year:"2021",descriptions:[{description:"MARÍN CASTAÑO, ELIANA PAOLA; CAMPOS, JOSÉ BRANT DE; SOLÓRZANO-NARANJO, IVAN GUILLERMO; BROCCHI, EDUARDO DE ALBUQUERQUE Characterization of Ternary CuNiCo Metallic Nanoparticles Produced by Hydrogen Reduction.Materials. , v.14, p.6006 - , 2021."},{description:"SAMPAIO, M.F.; MARINHO, P.R.B.; CABRUJA, E.; LOZANO, M.; LIMA JÚNIOR, H.P.; de Campos, J.B. SU- 8 processing improvement and simulating studies for a Micromegas detector fabrication.Journal of Instrumentation. , v.16, p.P08022 - P02038, 2021."},{description:"HORTA, MARLA KAROLYNE DOS SANTOS; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; WESTIN, CECÍLIA BUZATTO; NAVARRO DA ROCHA, DANIEL; CAMPOS, JOSÉ BRANT < i > In vitro</> evaluation of natural hydroxyapatite from Osteoglossum bicirrhosum fish scales for biomedical application.International Journal of Applied Ceramic Technology. , v.18, p.1930 - 1937, 2021."},{description:"MOTA, RAFAEL OLIVEIRA DA; DÓREA, MÁRCIA DE MELO; AGUILERA, LETÍCIA DOS SANTOS; ROMANI, ERIC CARDONA; COSTA, HECTOR REYNALDO MENESES; CAMPOS, JOSÉ BRANT DE AVANÇOS RECENTES NA UTILIZAÇÃO DO GRAFENO COMO ADITIVO EM POLÍMEROS / RECENT ADVANCES IN THE USE OF GRAPHENE AS AN ADDITIVE IN POLYMERS. Brazilian Journal of Development. , v.7, p.32743 - 32752, 2021."},{description:"RIBEIRO, SUZANA BARRETO NORONHA; DA VEIGA JUNIOR, VALDIR FLORÊNCIO; DE CAMPOS, JOSÉ BRANT; DOS SANTOS, JHEISON LOPES; LOPES, IAGO JOSÉ VITRAL REZENDE; DA ROCHA, DANIEL NAVARRO; DA SILVA, MARCELO HENRIQUE PRADO Influences of biosilica content from Amazonian freshwater sponge on calcium phosphates.Journal of the Australian Ceramic Society. , v.57, p.55 - 65, 2021"},{description:"Machado, Marcelo Vitor Ferreira; DE CAMPOS, JOSÉ BRANT; AGUILAR, MARILZA SAMPAIO; Ramos, Vitor Santos Mechanical and Microstructural Characterizations on Commercial and Synthesized by the Sol- Gel Method Using Chicken Egg Shells as Precursor Hydroxyapatite.South Florida Journal of Development. , v.2, p.1365 - 1374, 2021."}]},{year:"2020",descriptions:[{description:"BARROS, S. D.; DUARTE, J. P. P.; ROCHA, L. D. S.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S.; MEDEIOS, M. E.; de Campos, José B.; COSTA, M. E. H. M.; LACHTER, E. R.; SENRA, J. D.; MALTA, L. F. B. Cyclodextrin-Stabilized Palladium Nanoparticles on Ceria: Invertigation of Support Interactions and Pivotal Promotion in the Suzuki-Miyaura Reaction. ChemistrySelect. , v.5, p.7227 - 7235, 2020."},{description:"MELLO, NATHALLI M.; REGO, ARTUR S. C.; BROCCHI, EDUARDO A.; CAMPOS, JOSÉ B. DE; MOURA, FRANCISCO J.; SOUZA, RODRIGO F. M. Effect of an Alumina Supported Palladium Catalyst on the Magnesium Sulfate Decomposition Kinetics. MATERIALS RESEARCH. , v.23, p.1 - 9, 2020."},{description:"CARNEIRO, MATEUS R. D.; FREITAS, BRUNO C.; DE BARROS, IURI B.; de Campos, José B.; BASTOS, IVAN N.; COSTA, HECTOR R. M. Evaluation of adhesion of epoxy resin sealant to improve the corrosion resistance of thermal sprayed coatings. APPLIED ADHESION SCIENCE. , v.8, p.7 - 21, 2020."},{description:"HORTA, M. K. S.; Moura F.J.; AGUILAR, M. S.; WESTIN, C. B.; de Campos, J.B.; PERIPOLLI, S. B.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S. Nanostructured Hydroxyapatite from Hen's Eggshells Using Sucrose as a Template. Materials Research-Ibero-american Journal of Materials. , v.23, p.1 - 9, 2020."}]},{year:"2019",descriptions:[{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; SANTOS, JHEISON LOPES DOS; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; BARBOSA, RAFAEL MAZA; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Bioactivity of strontium-monetite coatings for biomedical applications. CERAMICS INTERNATIONAL. , v.45, p.7568 - 7579, 2019."},{description:"SILVA, LORENNA; NEVES, VINÍCIUS; RAMOS, VITOR; SILVA, RAPHAEL; CAMPOS, JOSÉ; SILVA, ALEXSANDRO; MALTA, LUIZ; SENRA, JAQUELINE Layered Double Hydroxides as Bifunctional Catalysts for the Aryl Borylation under Ligand-Free Conditions. Catalysts. , v.9, p.302 - 314, 2019."},{description:"GALVÃO, RHAUANE ALMEIDA; SANTA-CRUZ, LARISSA AGOSTINHO DE; BARRETO, PALOMA BANTIM; HORTA, MARLA KAROLYNE DOS SANTOS; ANDRADE, ANTONIO MARCOS HELGUEIRA DE; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; PERIPOLLI, SUZANA BOTTEGA; CAMPOS, JOSÉ BRANT DE; ARRUDA, ISABEL RENATA DE SOUZA; MACHADO, GIOVANNA Electrochemical single-step obtention and characterization of a biomimetic TiO <sub>2</sub> -HA NTs covered by chitosan. JOURNAL OF MATERIALS RESEARCH. , v.34, p.1 - 11, 2019."},{description:"SOUZA, RODRIGO; QUEIROZ, CARLOS; BRANT, JOSÉ; BROCCHI, EDUARDO Pyrometallurgical processing of a low copper content concentrate based on a thermodynamic assessment. MINERALS ENGINEERING. , v.130, p.156 - 164, 2019."},{description:"HORTA, MARLA; AGUILAR, MARILZA; MOURA, FRANCISCO; CAMPOS, JOSÉ; RAMOS, VITOR; QUIZUNDA, ADILSON Synthesis and characterization of green nanohydroxyapatite from hen eggshell by precipitation method. MATERIALS TODAY: PROCEEDINGS. , v.14, p.716 - 721, 2019"}]},{year:"2018",descriptions:[{description:"FERREIRA, J. R. M.; Louro, Luis Henrique Leme; COSTA, A. M.; MARCAL, R. L. S. B.; ROCHA, D. N.; BARBOSA, R. M.; de Campos, José B.; PRADO, M. H. Zinc-doped Calcium Phosphate Coating on Titanium Surface Using Ostrich Eggshell as a Ca2+ Ions Source. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."},{description:"AGUILERA, L. S.; de Campos, J.B.; de Biasi, R.S.; Figueiredo, A.B.H.S. Use of the Drag Method to Study the Magnetic Behavior of Mn-Zn Ferrite Nanoparticles. The International Journal of Engineering and Science. , v.7, p.57 - 61, 2018."},{description:"BIASI, RONALDO SERGIO DE; MELO, GABRIEL BURLANDY MOTA DE; FIGUEIREDO, ANDRÉ BEN-HUR DA SILVA; CAMARENA, MARIELLA ALZAMORA; CAMPOS, JOSÉ BRANT DE Properties of manganese ferrite-paraffin composites. Journal of Materials Research and Technology-JMR&T. , v.8, p.309 - 313, 2018."},{description:"AGUILERA, L. S.; MARCAL, R. L. S. B.; de Campos, J.B.; PRADO, M. H.; Figueiredo, A.B.H.S.MAGNETIC FILTER PRODUCED BY ZnFe2O4 NANOPARTICLES USING FREEZE CASTING. Journal of Materials Research and Technology-JMR&T. , v.7, p.350 - 355, 2018. "},{description:"ROCHA, DANIEL NAVARRO DA; SILVA, MARCELO H. PRADO DA; CAMPOS, JOSÉ BRANT DE; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; CRUZ, LEILA ROSA Kinetics of conversion of brushite coatings to hydroxyapatite in alkaline solution. Journal of Materials Research and Technology-JMR&T. , v.7, p.479 - 486, 2018."},{description:"Cabral, R.F.; de Campos, J.B.; SILVA, C. E. V.; FONSECA, G. M.; LIMA, W. N.; LIMA, E. Formação da fase YNbO4 na sinterização do compósito Alumina-YAG com Nb2O5. CADERNOS UNIFOA (IMPRESSO). , v.36, p.29 - 35, 2018."},{description:"Cabral, R.F.; PRADO DA SILVA, M.H.; Lima, E.S.; de Campos, J.B.; MAGNAGO, ROBERTO DE OLIVEIRA Evaluation of Hardness and the Fracture Toughness of Composite Biphasic Alumina-YAG. MATERIALS SCIENCE FORUM (ONLINE). , v.912, p.82 - 86, 2018."},{description:"SALEIRO, GISELE TEIXEIRA; GONÇALVES, DANILO CORREA; COSTA, CÉLIO ALBANO DA; CAMPOS, JOSÉ BRANT DE; LIMA, EDUARDO DE SOUSA COMPORTAMENTO MECÂNICO DO SIC ADITIVADO COM Al2O3 E Y2O3 PRODUZIDOS PELA SÍNTESE POR COMBUSTÃO AUTOSSUSTENTÁVEL À ALTA TEMPERATURA. TECNOLOGIA EM METALURGIA, MATERIAIS E MINERAÇÃO. , v.15, p.96 - 102, 2018."},{description:"MENDONCA, F.; COSTA, A. M.; de Campos, J.B.; MARCAL, R. L. S. B.; ROCHA, D. N.; PRADO, M. H. Bioactivity Assessment of Ag-HA. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."}]},{year:"2017",descriptions:[{description:"GONÇALVES, DANILO CORRÊA; SALEIRO, GISELE TEIXEIRA; MATIAS, PHILIPE CARDOSO; GOMES, ALAELSON VIEIRA; RAMOS, VITOR; CAMPOS, JOSÉ BRANT BRANT DE; MELO, FRANCISCO CRISTOVÃO LOURENÇO DE; LIMA, EDUARDO SOUSA Microstructural Characterization and Influence of Ceramography Method on the Microhardness of Sintering Agents Added Silicon Carbide. Materials Research-Ibero-american Journal of Materials"},{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Mg substituted apatite coating from alkali conversion of acidic calcium phosphate. Materials Science & Engineering C-Materials for Biological Applications. , v.70, p.408 - 417, 2017."},{description:"ROMANI, E. C.; LARRUDE, D. G.; NACHEZ, L.; VILANI, C.; de CAMPOS, J. B.; PERIPOLLI, S. B.; FREIRE, F. L.Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS. , v.65, p.1 - 9, 2017."},{description:"SANTOS, J. L.; MARÇAL, R. L. S. B.; JESUS, P. R. R.; GOMES, A. V.; LIMA, E. P.; MONTEIRO, S. N.; de CAMPOS, J. B.; LOURO, L. H. L.Effect of LiF as Sintering Agent on the Densification and Phase Formation in Al2O3-4 Wt Pct Nb2O5 Ceramic Compound. METALLURGICAL AND MATERIALS TRANSACTIONS A-PHYSICAL METALLURGY AND MATERIALS SCIENCE. , v.48, p.4432 - 4440, 2017."}]}]})}),v(bn,{})]}),qx=x.div`
  width: 100%;

`,ew=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: ${u.mobile}) {    
    margin-top: 10%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    margin-top: 8%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {    
    margin-top: 7%;   
  }


  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    margin-top: 7%;
    margin-bottom: 5%;
  }

  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {    
    margin-top: 4%;
    margin-bottom: 5%;
  }
`,tw=x.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	overflow: hidden;
	position: relative;
	width: 100%;
    height: 21vh;
    background: #fff;
    -webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    padding-bottom: 10px;
    @media screen and (max-width: ${u.largeDesktop}){
        height: 16%;
    }
    @media screen and (max-width: ${u.tablet}){
        height: 17%;
    }
    @media screen and (min-width: ${u.extraLargeDesktop}) {
	    height: 17%;
    }

    @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
        margin-top: 5%; 
    }



`,nw=x.span`
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.content};
  text-align: center;
  margin: 10px;

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,rw=x.div`
    -webkit-animation: logo-scroll 40s linear infinite;
	animation: logo-scroll 40s linear infinite;
	display: flex;
	margin: 0;
    @-webkit-keyframes logo-scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
        }
    }
    @keyframes logo-scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
        }
    }
`,iw=x.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,ow=x.img`
    width: 120px;
    /* height: 150px; */
	margin: 0 40px;
	transition: 0.5s;
	overflow: hidden;
    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }

    @media screen and (max-width: ${u.largeMobile}) {
	    width: 150px;
        /* height: 120px; */
    }
    @media screen and (max-width: ${u.mobile}){
        width: 120px;
        /* height: 120px; */
    }
    @media screen and (min-width: ${u.desktop}) {
	    width: 180px;
    }
    @media screen and (min-width: ${u.largeDesktop}) {
	    width: 240px;
        /* height: 210px; */
    }
    @media screen and (min-width: ${u.extraLargeDesktop}) {
	    width: 300px;
        /* height: 300px; */
    }
    @media screen and (max-width: ${u.notebook}){
        width: 120px;
    }
`,aw=({image:e,altText:t})=>v(iw,{children:v(ow,{src:e,alt:t})}),Ro="/Nanofab-Project/assets/cbpf-812298b6.jpg",$o="/Nanofab-Project/assets/faperj-aefe040c.svg",Po="/Nanofab-Project/assets/finep-072bfec0.svg",Al="/Nanofab-Project/assets/logoUFF-bce55271.png",Rl="/Nanofab-Project/assets/ime-85233a07.jpg",$l="/Nanofab-Project/assets/pucrj-7995f7c6.jpg",Pl="/Nanofab-Project/assets/UFRJ-ae0dd01b.jpg",Dl="/Nanofab-Project/assets/cefet-fb822b95.png",Ol="/Nanofab-Project/assets/SerraJr-fd37bf50.svg",lw=({})=>{const e=[{image:Ro,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:$o,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Po,altText:"FINEP - Agência Brasileira de Inovação"},{image:Al,altText:"UFF - Universidade Federal Fluminense"},{image:Rl,altText:"IME - Instituto Militar de Engenharia"},{image:Pl,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:$l,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Dl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:Ol,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Ro,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:$o,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Po,altText:"FINEP - Agência Brasileira de Inovação"},{image:Al,altText:"UFF - Universidade Federal Fluminense"},{image:Rl,altText:"IME - Instituto Militar de Engenharia"},{image:Pl,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:$l,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Dl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:Ol,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Ro,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:$o,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Po,altText:"FINEP - Agência Brasileira de Inovação"},{image:Al,altText:"UFF - Universidade Federal Fluminense"},{image:Rl,altText:"IME - Instituto Militar de Engenharia"},{image:Pl,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:$l,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Dl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:Ol,altText:"Serra Jr. - Serra Júnior Engenharia"}];return F(tw,{children:[v(nw,{children:"Parceiros"}),v(rw,{children:e.map(t=>v(aw,{image:t.image,altText:t.altText},e.indexOf(t)))})]})},sw=x.div`
  width: 100%;
  /*height: 300px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  margin-top: 5%;
  margin-bottom: 5%;
  align-self: center;

  /* @media screen and (max-width: ${u.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%; */
  @media screen and (max-width: ${u.mobile}) {
    margin-top: 10%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media screen and (min-width: 720px) and (max-width: 770px) {
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${u.desktop}) and (max-width: ${u.largeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    max-width: 2500px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    max-width: 3000px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`,uw=x.div`
  width: 70%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(217, 217, 217, 0.9);
  border-radius: 150px;
  justify-content: space-around;

  @media screen and (max-width: ${u.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 20%; */
    padding-top: 5%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4%;
    padding-bottom: 15%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    border-radius: 60px;
    padding: 5%;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    border-radius: 70px;
  }

  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {
  }

  @media screen and (min-width: ${u.desktop}) and (max-width: ${u.largeDesktop}) {
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    border-radius: 100px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    border-radius: 200px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    border-radius: 300px;
    width: 80%;
  }
`,dw=x.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${u.mobile}) {
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    margin-bottom: 5%;
  }
`,cw=x.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${u.mobile}) {
    width: 95%;
    padding-bottom: 20%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 95%;
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
    width: 100%;
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 80%;
  }
`,fw=x.span`
  font-weight: bold;
  color: #ae0806;
  text-align: center;
  font-size: 30px;
  margin-bottom: 3%;

  @media screen and (max-width: ${u.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    font-size: 23px;
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    font-size: 23px;
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    font-size: 40px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
`,pw=x.span`
  color: black;
  text-align: center;
  font-size: 18px;
  width: 80%;

  @media screen and (max-width: ${u.mobile}) {
    font-size: 16px;
    width: 100%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 100%;
    font-size: 20px;
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    font-size: 24px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,mw=x.img`
  width: 150px;
  height: 150px;
  border: 1px solid #ae0806;
  border-radius: 150px;
  padding: 20%;
  object-fit: scale-down;
  overflow: visible;
  background-color: white;

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    width: 250px;
    height: 250px;
    border-radius: 200px;
  }
`;x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px;
    width: 200px; */
`;const hw=({image:e,title:t,paragraph:n})=>v(sw,{children:F(uw,{children:[v(dw,{children:v(mw,{src:e,alt:t})}),F(cw,{children:[v(fw,{children:t}),v(pw,{children:n})]})]})}),gw="/Nanofab-Project/assets/handshake-903e6074.png",vw=({})=>{const e=[{image:Ro,title:"Centro Brasileiro de Pesquisas Físicas - CBPF",paragraph:"O NANOFAB desenvolve parceria científica e tecnológica com o CBPF na área de Instrumentação Científica, com o desenvolvimento de dispositivos multiplicadores e elétrons (GEM-Gas Electron Multiplier) e detectores bidimensionais de raios-x a gás."},{image:$o,title:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro",paragraph:"O NANOFAB recebe apoio da FAPERJ em projetos de infraestrutura e pesquisa como o PENSA-RIO e através de projetos em colaboração com os pesquisadores"},{image:Po,title:"FINEP - Agência Brasileira de Inovação",paragraph:"O NANOFAB participa de editais da FINEP em projetos estruturantes como o Grande Laboratórios Multiusuários e Ações Transversais."}];return F(qx,{children:[v(On,{}),v(km,{title:"Parcerias",image:gw}),v(ew,{children:e.map(t=>v(hw,{image:t.image,title:t.title,paragraph:t.paragraph},e.indexOf(t)))}),v(lw,{}),v(bn,{})]})},yw=x.div`
  width: 100%;
`,xw=x.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,ww=x.span`
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.highlight};
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.auxiliary.error.dark};
  border-radius: 20px;
`,Sw=({})=>F(yw,{children:[v(On,{}),v(xw,{children:v(ww,{children:"Aconteceu um problema, tente novamente mais tarde"})}),v(bn,{})]}),Ew=x.div`
`,kw=x.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    margin-bottom: 3%;
`,Cw=x.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`,Aw=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 40%;
    height: 500px;
    background-color: #D9D9D9aa;
    border-radius: 30px;
    margin: 3%;
    margin-top: 5%;
    padding: 2%;

    background: rgba(217, 217, 217, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 35px;
`,Rw=x.h1`
color: ${({theme:e})=>e.colors.text.title};
`,uo=x.span`
    text-align: left;
    width: 50%;
    margin-bottom: 1%;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};
    font-weight: bolder;
`,co=x.input`
    width: 50%;
    height: 30px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 10px;
    margin-bottom: 10px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      /* padding-left: 20px; */
      color: #5086B699;
      opacity: 1; /* Firefox */
      /* padding: 5px; */
    }
    
`,fo=x.div`
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
 `,$w=x.button`
    background-color: #5086B6;
    border: 0px;
    padding: 2%;
    padding-left: 10%;
    padding-right: 10%;
    color: white;
    border-radius: 10px;

    :hover{
            color: #5086B6; 
            background-color: #fff;
            border: 1px solid #5086B6;
            transition: 0.5s;
            cursor: pointer;
        }
`,Pw=({})=>F(Aw,{children:[v(Rw,{children:"Registrar-se"}),F(fo,{children:[v(uo,{children:"Nome de Usuário:"}),v(co,{placeholder:"Digite seu Nome"})]}),F(fo,{children:[v(uo,{children:"Email:"}),v(co,{placeholder:"Digite seu Email"})]}),F(fo,{children:[v(uo,{children:"Senha:"}),v(co,{type:"password",placeholder:"Digite sua senha"})]}),F(fo,{children:[v(uo,{children:"Confirmar senha:"}),v(co,{type:"password",placeholder:"Confirme sua senha"})]}),v($w,{children:"Registrar"})]}),Dw=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    width: 40%;
    height: 400px;
    background-color: #D9D9D9aa;
    border-radius: 30px;
    margin: 3%;
    margin-top: 5%;
    padding: 2%;

    background: rgba(217, 217, 217, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 35px;
`,Ow=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 70%;
`,bw=x.h1`
color: ${({theme:e})=>e.colors.text.title};
`,Oc=x.span`
    text-align: left;
    width: 50%;
    margin-bottom: 1%;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};
    font-weight: bolder;
`,bc=x.input`
    width: 50%;
    height: 30px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 10px;
    margin-bottom: 10px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      /* padding-left: 20px; */
      color: #5086B699;
      opacity: 1; /* Firefox */
      /* padding: 5px; */
    }
    
`,Lc=x.div`
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
 `,Lw=x.button`
    background-color: #5086B6;
    border: 0px;
    padding: 2%;
    padding-left: 10%;
    padding-right: 10%;
    color: white;
    border-radius: 10px;

    :hover{
            color: #5086B6; 
            background-color: #fff;
            border: 1px solid #5086B6;
            transition: 0.5s;
            cursor: pointer;
        }
`,Nw=({})=>F(Dw,{children:[v(bw,{children:"Entrar"}),F(Ow,{children:[F(Lc,{children:[v(Oc,{children:"Email ou Nome de Usuário:"}),v(bc,{placeholder:"Digite seu Email"})]}),F(Lc,{children:[v(Oc,{children:"Senha:"}),v(bc,{type:"password",placeholder:"Digite sua senha"})]})]}),v(Lw,{children:"Entrar"})]}),Mw=({})=>F(Ew,{children:[v(On,{}),F(kw,{children:[v(Pw,{}),v(Cw,{}),v(Nw,{})]}),v(bn,{})]}),Tw="/Nanofab-Project/assets/background2-7f5efefe.svg",Iw=x.div`
  background-image: url(${Tw});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  @media screen and (max-width: ${u.mobile}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${u.tablet}) and (max-width: 1919px) {    
    background-size: 100% 1800px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
    background-size: 100% 2800px;
    background-repeat: repeat;
  }
`,zw=wv([{path:"/",element:v(Ny,{})},{path:"/equipe",element:v(Zy,{})},{path:"/andamento",element:v(gx,{})},{path:"/submissao_projetos",element:v(bx,{})},{path:"/publicacoes",element:v(Xx,{})},{path:"/parcerias",element:v(vw,{})},{path:"/login",element:v(Mw,{})},{path:"*",element:v(Sw,{})}],{basename:"/Nanofab-Project"}),Fw=({})=>v(Iw,{children:v(cv,{router:zw})}),_w=X0`
  body {
    *:focus {
        outline: none;
    }

    margin: 0;
    padding: 0;

    h1, h2, h3, h4, span, option, select{
      font-family: "Maven Pro";
    }

    :root{
      --extra-small: 16px;
      --small: 24px;
      --medium: 56px;
      --large: 76px;
      --extra-large: 96px;
    }

    a{
      text-decoration: none;
    }
  }
`;function Uw(){return F(t1,{children:[v(_w,{}),v(Fw,{})]})}Ll.createRoot(document.getElementById("root")).render(v(tt.StrictMode,{children:v(Uw,{})}));
