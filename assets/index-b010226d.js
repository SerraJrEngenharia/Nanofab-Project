function Um(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function jm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var No={},Bm={get exports(){return No},set exports(e){No=e}},ua={},N={},Hm={get exports(){return N},set exports(e){N=e}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ii=Symbol.for("react.element"),Vm=Symbol.for("react.portal"),Jm=Symbol.for("react.fragment"),Gm=Symbol.for("react.strict_mode"),Wm=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),Km=Symbol.for("react.forward_ref"),Zm=Symbol.for("react.suspense"),Xm=Symbol.for("react.memo"),qm=Symbol.for("react.lazy"),Wu=Symbol.iterator;function eh(e){return e===null||typeof e!="object"?null:(e=Wu&&e[Wu]||e["@@iterator"],typeof e=="function"?e:null)}var Gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wc=Object.assign,Qc={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=Qc,this.updater=n||Gc}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yc(){}Yc.prototype=Ir.prototype;function js(e,t,n){this.props=e,this.context=t,this.refs=Qc,this.updater=n||Gc}var Bs=js.prototype=new Yc;Bs.constructor=js;Wc(Bs,Ir.prototype);Bs.isPureReactComponent=!0;var Qu=Array.isArray,Kc=Object.prototype.hasOwnProperty,Hs={current:null},Zc={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Kc.call(t,r)&&!Zc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ii,type:e,key:o,ref:a,props:i,_owner:Hs.current}}function th(e,t){return{$$typeof:Ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ii}function nh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yu=/\/+/g;function Va(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nh(""+e.key):t.toString(36)}function vo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ii:case Vm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Va(a,0):r,Qu(i)?(n="",e!=null&&(n=e.replace(Yu,"$&/")+"/"),vo(i,t,n,"",function(d){return d})):i!=null&&(Vs(i)&&(i=th(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Yu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Qu(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Va(o,l);a+=vo(o,t,n,s,i)}else if(s=eh(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Va(o,l++),a+=vo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ji(e,t,n){if(e==null)return e;var r=[],i=0;return vo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function rh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},xo={transition:null},ih={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:xo,ReactCurrentOwner:Hs};re.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!Vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Ir;re.Fragment=Jm;re.Profiler=Wm;re.PureComponent=js;re.StrictMode=Gm;re.Suspense=Zm;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ih;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wc({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Hs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Kc.call(t,s)&&!Zc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ii,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:Ym,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qm,_context:e},e.Consumer=e};re.createElement=Xc;re.createFactory=function(e){var t=Xc.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:Km,render:e}};re.isValidElement=Vs;re.lazy=function(e){return{$$typeof:qm,_payload:{_status:-1,_result:e},_init:rh}};re.memo=function(e,t){return{$$typeof:Xm,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=xo.transition;xo.transition={};try{e()}finally{xo.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return rt.current.useCallback(e,t)};re.useContext=function(e){return rt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};re.useEffect=function(e,t){return rt.current.useEffect(e,t)};re.useId=function(){return rt.current.useId()};re.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return rt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};re.useRef=function(e){return rt.current.useRef(e)};re.useState=function(e){return rt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return rt.current.useTransition()};re.version="18.2.0";(function(e){e.exports=re})(Hm);const tt=jm(N),zl=Um({__proto__:null,default:tt},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh=N,ah=Symbol.for("react.element"),lh=Symbol.for("react.fragment"),sh=Object.prototype.hasOwnProperty,uh=oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dh={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)sh.call(t,r)&&!dh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ah,type:e,key:o,ref:a,props:i,_owner:uh.current}}ua.Fragment=lh;ua.jsx=qc;ua.jsxs=qc;(function(e){e.exports=ua})(Bm);const f=No.jsx,b=No.jsxs;var Fl={},_l={},ch={get exports(){return _l},set exports(e){_l=e}},gt={},Ul={},fh={get exports(){return Ul},set exports(e){Ul=e}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,J){var j=T.length;T.push(J);e:for(;0<j;){var ae=j-1>>>1,I=T[ae];if(0<i(I,J))T[ae]=J,T[j]=I,j=ae;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var J=T[0],j=T.pop();if(j!==J){T[0]=j;e:for(var ae=0,I=T.length,_=I>>>1;ae<_;){var F=2*(ae+1)-1,Q=T[F],k=F+1,te=T[k];if(0>i(Q,j))k<I&&0>i(te,Q)?(T[ae]=te,T[k]=j,ae=k):(T[ae]=Q,T[F]=j,ae=F);else if(k<I&&0>i(te,j))T[ae]=te,T[k]=j,ae=k;else break e}}return J}function i(T,J){var j=T.sortIndex-J.sortIndex;return j!==0?j:T.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],d=[],h=1,p=null,x=3,C=!1,E=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var J=n(d);J!==null;){if(J.callback===null)r(d);else if(J.startTime<=T)r(d),J.sortIndex=J.expirationTime,t(s,J);else break;J=n(d)}}function S(T){if(w=!1,g(T),!E)if(n(s)!==null)E=!0,ct(R);else{var J=n(d);J!==null&&Ve(S,J.startTime-T)}}function R(T,J){E=!1,w&&(w=!1,m(O),O=-1),C=!0;var j=x;try{for(g(J),p=n(s);p!==null&&(!(p.expirationTime>J)||T&&!xe());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,x=p.priorityLevel;var I=ae(p.expirationTime<=J);J=e.unstable_now(),typeof I=="function"?p.callback=I:p===n(s)&&r(s),g(J)}else r(s);p=n(s)}if(p!==null)var _=!0;else{var F=n(d);F!==null&&Ve(S,F.startTime-J),_=!1}return _}finally{p=null,x=j,C=!1}}var L=!1,M=null,O=-1,ee=5,V=-1;function xe(){return!(e.unstable_now()-V<ee)}function ye(){if(M!==null){var T=e.unstable_now();V=T;var J=!0;try{J=M(!0,T)}finally{J?we():(L=!1,M=null)}}else L=!1}var we;if(typeof c=="function")we=function(){c(ye)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,he=be.port2;be.port1.onmessage=ye,we=function(){he.postMessage(null)}}else we=function(){v(ye,0)};function ct(T){M=T,L||(L=!0,we())}function Ve(T,J){O=v(function(){T(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){E||C||(E=!0,ct(R))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var j=x;x=J;try{return T()}finally{x=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,J){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var j=x;x=T;try{return J()}finally{x=j}},e.unstable_scheduleCallback=function(T,J,j){var ae=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ae+j:ae):j=ae,T){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=j+I,T={id:h++,callback:J,priorityLevel:T,startTime:j,expirationTime:I,sortIndex:-1},j>ae?(T.sortIndex=j,t(d,T),n(s)===null&&T===n(d)&&(w?(m(O),O=-1):w=!0,Ve(S,j-ae))):(T.sortIndex=I,t(s,T),E||C||(E=!0,ct(R))),T},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(T){var J=x;return function(){var j=x;x=J;try{return T.apply(this,arguments)}finally{x=j}}}})(ef);(function(e){e.exports=ef})(fh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=N,ht=Ul;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nf=new Set,gi={};function Xn(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(gi[e]=t,e=0;e<t.length;e++)nf.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,ph=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ku={},Zu={};function mh(e){return jl.call(Zu,e)?!0:jl.call(Ku,e)?!1:ph.test(e)?Zu[e]=!0:(Ku[e]=!0,!1)}function hh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gh(e,t,n,r){if(t===null||typeof t>"u"||hh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Js=/[\-:]([a-z])/g;function Gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Js,Gs);Qe[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Js,Gs);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Js,Gs);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ws(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gh(t,n,i,r)&&(n=null),r||i===null?mh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),ir=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),Qs=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),rf=Symbol.for("react.provider"),of=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),af=Symbol.for("react.offscreen"),Xu=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,Ja;function ti(e){if(Ja===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ja=t&&t[1]||""}return`
`+Ja+e}var Ga=!1;function Wa(e,t){if(!e||Ga)return"";Ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function vh(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=Wa(e.type,!1),e;case 11:return e=Wa(e.type.render,!1),e;case 1:return e=Wa(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case or:return"Fragment";case ir:return"Portal";case Bl:return"Profiler";case Qs:return"StrictMode";case Hl:return"Suspense";case Vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case of:return(e.displayName||"Context")+".Consumer";case rf:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ks:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case fn:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function xh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===Qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yh(e){var t=lf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wi(e){e._valueTracker||(e._valueTracker=yh(e))}function sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gl(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uf(e,t){t=t.checked,t!=null&&Ws(e,"checked",t,!1)}function Wl(e,t){uf(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ed(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||Mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function td(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(ni(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function df(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,ff=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wh=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){wh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function pf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function mf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sh=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zl(e,t){if(t){if(Sh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ql=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var es=null,wr=null,Sr=null;function rd(e){if(e=_i(e)){if(typeof es!="function")throw Error(D(280));var t=e.stateNode;t&&(t=ma(t),es(e.stateNode,e.type,t))}}function hf(e){wr?Sr?Sr.push(e):Sr=[e]:wr=e}function gf(){if(wr){var e=wr,t=Sr;if(Sr=wr=null,rd(e),t)for(e=0;e<t.length;e++)rd(t[e])}}function vf(e,t){return e(t)}function xf(){}var Qa=!1;function yf(e,t,n){if(Qa)return e(t,n);Qa=!0;try{return vf(e,t,n)}finally{Qa=!1,(wr!==null||Sr!==null)&&(xf(),gf())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var ts=!1;if(nn)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{ts=!1}function kh(e,t,n,r,i,o,a,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var ai=!1,To=null,Io=!1,ns=null,Eh={onError:function(e){ai=!0,To=e}};function Ch(e,t,n,r,i,o,a,l,s){ai=!1,To=null,kh.apply(Eh,arguments)}function Ah(e,t,n,r,i,o,a,l,s){if(Ch.apply(this,arguments),ai){if(ai){var d=To;ai=!1,To=null}else throw Error(D(198));Io||(Io=!0,ns=d)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function id(e){if(qn(e)!==e)throw Error(D(188))}function $h(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return id(i),e;if(o===r)return id(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Sf(e){return e=$h(e),e!==null?kf(e):null}function kf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kf(e);if(t!==null)return t;e=e.sibling}return null}var Ef=ht.unstable_scheduleCallback,od=ht.unstable_cancelCallback,Rh=ht.unstable_shouldYield,bh=ht.unstable_requestPaint,Oe=ht.unstable_now,Ph=ht.unstable_getCurrentPriorityLevel,Xs=ht.unstable_ImmediatePriority,Cf=ht.unstable_UserBlockingPriority,zo=ht.unstable_NormalPriority,Dh=ht.unstable_LowPriority,Af=ht.unstable_IdlePriority,da=null,Vt=null;function Oh(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(da,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Mh,Lh=Math.log,Nh=Math.LN2;function Mh(e){return e>>>=0,e===0?32:31-(Lh(e)/Nh|0)|0}var Yi=64,Ki=4194304;function ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ri(l):(o&=a,o!==0&&(r=ri(o)))}else a=n&~i,a!==0?r=ri(a):o!==0&&(r=ri(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Th(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ih(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Nt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Th(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $f(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function Ya(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function zh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function Rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bf,eu,Pf,Df,Of,is=!1,Zi=[],xn=null,yn=null,wn=null,yi=new Map,wi=new Map,mn=[],Fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ad(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function Gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=_i(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _h(e,t,n,r,i){switch(t){case"focusin":return xn=Gr(xn,e,t,n,r,i),!0;case"dragenter":return yn=Gr(yn,e,t,n,r,i),!0;case"mouseover":return wn=Gr(wn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,Gr(yi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wi.set(o,Gr(wi.get(o)||null,e,t,n,r,i)),!0}return!1}function Lf(e){var t=_n(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=wf(n),t!==null){e.blockedOn=t,Of(e.priority,function(){Pf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=os(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ql=r,n.target.dispatchEvent(r),ql=null}else return t=_i(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function ld(e,t,n){yo(e)&&n.delete(t)}function Uh(){is=!1,xn!==null&&yo(xn)&&(xn=null),yn!==null&&yo(yn)&&(yn=null),wn!==null&&yo(wn)&&(wn=null),yi.forEach(ld),wi.forEach(ld)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,is||(is=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,Uh)))}function Si(e){function t(i){return Wr(i,e)}if(0<Zi.length){Wr(Zi[0],e);for(var n=1;n<Zi.length;n++){var r=Zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&Wr(xn,e),yn!==null&&Wr(yn,e),wn!==null&&Wr(wn,e),yi.forEach(t),wi.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&mn.shift()}var kr=sn.ReactCurrentBatchConfig,_o=!0;function jh(e,t,n,r){var i=ce,o=kr.transition;kr.transition=null;try{ce=1,tu(e,t,n,r)}finally{ce=i,kr.transition=o}}function Bh(e,t,n,r){var i=ce,o=kr.transition;kr.transition=null;try{ce=4,tu(e,t,n,r)}finally{ce=i,kr.transition=o}}function tu(e,t,n,r){if(_o){var i=os(e,t,n,r);if(i===null)ol(e,t,r,Uo,n),ad(e,r);else if(_h(i,e,t,n,r))r.stopPropagation();else if(ad(e,r),t&4&&-1<Fh.indexOf(e)){for(;i!==null;){var o=_i(i);if(o!==null&&bf(o),o=os(e,t,n,r),o===null&&ol(e,t,r,Uo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var Uo=null;function os(e,t,n,r){if(Uo=null,e=Zs(r),e=_n(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uo=e,null}function Nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ph()){case Xs:return 1;case Cf:return 4;case zo:case Dh:return 16;case Af:return 536870912;default:return 16}default:return 16}}var gn=null,nu=null,wo=null;function Mf(){if(wo)return wo;var e,t=nu,n=t.length,r,i="value"in gn?gn.value:gn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return wo=i.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function sd(){return!1}function vt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xi:sd,this.isPropagationStopped=sd,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=vt(zr),Fi=$e({},zr,{view:0,detail:0}),Hh=vt(Fi),Ka,Za,Qr,ca=$e({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(Ka=e.screenX-Qr.screenX,Za=e.screenY-Qr.screenY):Za=Ka=0,Qr=e),Ka)},movementY:function(e){return"movementY"in e?e.movementY:Za}}),ud=vt(ca),Vh=$e({},ca,{dataTransfer:0}),Jh=vt(Vh),Gh=$e({},Fi,{relatedTarget:0}),Xa=vt(Gh),Wh=$e({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qh=vt(Wh),Yh=$e({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kh=vt(Yh),Zh=$e({},zr,{data:0}),dd=vt(Zh),Xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eg[e])?!!t[e]:!1}function iu(){return tg}var ng=$e({},Fi,{key:function(e){if(e.key){var t=Xh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rg=vt(ng),ig=$e({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cd=vt(ig),og=$e({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),ag=vt(og),lg=$e({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sg=vt(lg),ug=$e({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dg=vt(ug),cg=[9,13,27,32],ou=nn&&"CompositionEvent"in window,li=null;nn&&"documentMode"in document&&(li=document.documentMode);var fg=nn&&"TextEvent"in window&&!li,Tf=nn&&(!ou||li&&8<li&&11>=li),fd=String.fromCharCode(32),pd=!1;function If(e,t){switch(e){case"keyup":return cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function pg(e,t){switch(e){case"compositionend":return zf(t);case"keypress":return t.which!==32?null:(pd=!0,fd);case"textInput":return e=t.data,e===fd&&pd?null:e;default:return null}}function mg(e,t){if(ar)return e==="compositionend"||!ou&&If(e,t)?(e=Mf(),wo=nu=gn=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tf&&t.locale!=="ko"?null:t.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hg[e.type]:t==="textarea"}function Ff(e,t,n,r){hf(r),t=jo(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,ki=null;function gg(e){Yf(e,0)}function fa(e){var t=ur(e);if(sf(t))return e}function vg(e,t){if(e==="change")return t}var _f=!1;if(nn){var qa;if(nn){var el="oninput"in document;if(!el){var hd=document.createElement("div");hd.setAttribute("oninput","return;"),el=typeof hd.oninput=="function"}qa=el}else qa=!1;_f=qa&&(!document.documentMode||9<document.documentMode)}function gd(){si&&(si.detachEvent("onpropertychange",Uf),ki=si=null)}function Uf(e){if(e.propertyName==="value"&&fa(ki)){var t=[];Ff(t,ki,e,Zs(e)),yf(gg,t)}}function xg(e,t,n){e==="focusin"?(gd(),si=t,ki=n,si.attachEvent("onpropertychange",Uf)):e==="focusout"&&gd()}function yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fa(ki)}function wg(e,t){if(e==="click")return fa(t)}function Sg(e,t){if(e==="input"||e==="change")return fa(t)}function kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:kg;function Ei(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xd(e,t){var n=vd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vd(n)}}function jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eg(e){var t=Bf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jf(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xd(n,o);var a=xd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cg=nn&&"documentMode"in document&&11>=document.documentMode,lr=null,as=null,ui=null,ls=!1;function yd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ls||lr==null||lr!==Mo(r)||(r=lr,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Ei(ui,r)||(ui=r,r=jo(as,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},tl={},Hf={};nn&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function pa(e){if(tl[e])return tl[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hf)return tl[e]=t[n];return e}var Vf=pa("animationend"),Jf=pa("animationiteration"),Gf=pa("animationstart"),Wf=pa("transitionend"),Qf=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){Qf.set(e,t),Xn(t,[e])}for(var nl=0;nl<wd.length;nl++){var rl=wd[nl],Ag=rl.toLowerCase(),$g=rl[0].toUpperCase()+rl.slice(1);Dn(Ag,"on"+$g)}Dn(Vf,"onAnimationEnd");Dn(Jf,"onAnimationIteration");Dn(Gf,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Wf,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Sd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ah(r,t,void 0,e),e.currentTarget=null}function Yf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Sd(i,l,d),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,d=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Sd(i,l,d),o=s}}}if(Io)throw e=ns,Io=!1,ns=null,e}function ge(e,t){var n=t[fs];n===void 0&&(n=t[fs]=new Set);var r=e+"__bubble";n.has(r)||(Kf(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),Kf(n,e,r,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function Ci(e){if(!e[eo]){e[eo]=!0,nf.forEach(function(n){n!=="selectionchange"&&(Rg.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eo]||(t[eo]=!0,il("selectionchange",!1,t))}}function Kf(e,t,n,r){switch(Nf(t)){case 1:var i=jh;break;case 4:i=Bh;break;default:i=tu}n=i.bind(null,t,n,e),i=void 0,!ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=_n(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}yf(function(){var d=o,h=Zs(n),p=[];e:{var x=Qf.get(e);if(x!==void 0){var C=ru,E=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":C=rg;break;case"focusin":E="focus",C=Xa;break;case"focusout":E="blur",C=Xa;break;case"beforeblur":case"afterblur":C=Xa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=ag;break;case Vf:case Jf:case Gf:C=Qh;break;case Wf:C=sg;break;case"scroll":C=Hh;break;case"wheel":C=dg;break;case"copy":case"cut":case"paste":C=Kh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=cd}var w=(t&4)!==0,v=!w&&e==="scroll",m=w?x!==null?x+"Capture":null:x;w=[];for(var c=d,g;c!==null;){g=c;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=xi(c,m),S!=null&&w.push(Ai(c,S,g)))),v)break;c=c.return}0<w.length&&(x=new C(x,E,null,n,h),p.push({event:x,listeners:w}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",x&&n!==ql&&(E=n.relatedTarget||n.fromElement)&&(_n(E)||E[rn]))break e;if((C||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,C?(E=n.relatedTarget||n.toElement,C=d,E=E?_n(E):null,E!==null&&(v=qn(E),E!==v||E.tag!==5&&E.tag!==6)&&(E=null)):(C=null,E=d),C!==E)){if(w=ud,S="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=cd,S="onPointerLeave",m="onPointerEnter",c="pointer"),v=C==null?x:ur(C),g=E==null?x:ur(E),x=new w(S,c+"leave",C,n,h),x.target=v,x.relatedTarget=g,S=null,_n(h)===d&&(w=new w(m,c+"enter",E,n,h),w.target=g,w.relatedTarget=v,S=w),v=S,C&&E)t:{for(w=C,m=E,c=0,g=w;g;g=nr(g))c++;for(g=0,S=m;S;S=nr(S))g++;for(;0<c-g;)w=nr(w),c--;for(;0<g-c;)m=nr(m),g--;for(;c--;){if(w===m||m!==null&&w===m.alternate)break t;w=nr(w),m=nr(m)}w=null}else w=null;C!==null&&kd(p,x,C,w,!1),E!==null&&v!==null&&kd(p,v,E,w,!0)}}e:{if(x=d?ur(d):window,C=x.nodeName&&x.nodeName.toLowerCase(),C==="select"||C==="input"&&x.type==="file")var R=vg;else if(md(x))if(_f)R=Sg;else{R=yg;var L=xg}else(C=x.nodeName)&&C.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(R=wg);if(R&&(R=R(e,d))){Ff(p,R,n,h);break e}L&&L(e,x,d),e==="focusout"&&(L=x._wrapperState)&&L.controlled&&x.type==="number"&&Ql(x,"number",x.value)}switch(L=d?ur(d):window,e){case"focusin":(md(L)||L.contentEditable==="true")&&(lr=L,as=d,ui=null);break;case"focusout":ui=as=lr=null;break;case"mousedown":ls=!0;break;case"contextmenu":case"mouseup":case"dragend":ls=!1,yd(p,n,h);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":yd(p,n,h)}var M;if(ou)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ar?If(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Tf&&n.locale!=="ko"&&(ar||O!=="onCompositionStart"?O==="onCompositionEnd"&&ar&&(M=Mf()):(gn=h,nu="value"in gn?gn.value:gn.textContent,ar=!0)),L=jo(d,O),0<L.length&&(O=new dd(O,e,null,n,h),p.push({event:O,listeners:L}),M?O.data=M:(M=zf(n),M!==null&&(O.data=M)))),(M=fg?pg(e,n):mg(e,n))&&(d=jo(d,"onBeforeInput"),0<d.length&&(h=new dd("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=M))}Yf(p,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xi(e,n),o!=null&&r.unshift(Ai(e,o,i)),o=xi(e,t),o!=null&&r.push(Ai(e,o,i))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,i?(s=xi(n,o),s!=null&&a.unshift(Ai(n,s,l))):i||(s=xi(n,o),s!=null&&a.push(Ai(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var bg=/\r\n?/g,Pg=/\u0000|\uFFFD/g;function Ed(e){return(typeof e=="string"?e:""+e).replace(bg,`
`).replace(Pg,"")}function to(e,t,n){if(t=Ed(t),Ed(e)!==t&&n)throw Error(D(425))}function Bo(){}var ss=null,us=null;function ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,Cd=typeof Promise=="function"?Promise:void 0,Og=typeof queueMicrotask=="function"?queueMicrotask:typeof Cd<"u"?function(e){return Cd.resolve(null).then(e).catch(Lg)}:cs;function Lg(e){setTimeout(function(){throw e})}function al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Fr,$i="__reactProps$"+Fr,rn="__reactContainer$"+Fr,fs="__reactEvents$"+Fr,Ng="__reactListeners$"+Fr,Mg="__reactHandles$"+Fr;function _n(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ad(e);e!==null;){if(n=e[Ht])return n;e=Ad(e)}return t}e=n,n=e.parentNode}return null}function _i(e){return e=e[Ht]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function ma(e){return e[$i]||null}var ps=[],dr=-1;function On(e){return{current:e}}function ve(e){0>dr||(e.current=ps[dr],ps[dr]=null,dr--)}function me(e,t){dr++,ps[dr]=e.current,e.current=t}var Pn={},qe=On(Pn),st=On(!1),Jn=Pn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function Ho(){ve(st),ve(qe)}function $d(e,t,n){if(qe.current!==Pn)throw Error(D(168));me(qe,t),me(st,n)}function Zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,xh(e)||"Unknown",i));return $e({},n,r)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Jn=qe.current,me(qe,e),me(st,st.current),!0}function Rd(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Zf(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,ve(st),ve(qe),me(qe,e)):ve(st),me(st,n)}var Zt=null,ha=!1,ll=!1;function Xf(e){Zt===null?Zt=[e]:Zt.push(e)}function Tg(e){ha=!0,Xf(e)}function Ln(){if(!ll&&Zt!==null){ll=!0;var e=0,t=ce;try{var n=Zt;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zt=null,ha=!1}catch(i){throw Zt!==null&&(Zt=Zt.slice(e+1)),Ef(Xs,Ln),i}finally{ce=t,ll=!1}}return null}var cr=[],fr=0,Jo=null,Go=0,yt=[],wt=0,Gn=null,Xt=1,qt="";function zn(e,t){cr[fr++]=Go,cr[fr++]=Jo,Jo=e,Go=t}function qf(e,t,n){yt[wt++]=Xt,yt[wt++]=qt,yt[wt++]=Gn,Gn=e;var r=Xt;e=qt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var o=32-Nt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Xt=1<<32-Nt(t)+i|n<<i|r,qt=o+e}else Xt=1<<o|n<<i|r,qt=e}function lu(e){e.return!==null&&(zn(e,1),qf(e,1,0))}function su(e){for(;e===Jo;)Jo=cr[--fr],cr[fr]=null,Go=cr[--fr],cr[fr]=null;for(;e===Gn;)Gn=yt[--wt],yt[wt]=null,qt=yt[--wt],yt[wt]=null,Xt=yt[--wt],yt[wt]=null}var mt=null,pt=null,ke=!1,Ot=null;function ep(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mt=e,pt=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gn!==null?{id:Xt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,mt=e,pt=null,!0):!1;default:return!1}}function ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hs(e){if(ke){var t=pt;if(t){var n=t;if(!bd(e,t)){if(ms(e))throw Error(D(418));t=Sn(n.nextSibling);var r=mt;t&&bd(e,t)?ep(r,n):(e.flags=e.flags&-4097|2,ke=!1,mt=e)}}else{if(ms(e))throw Error(D(418));e.flags=e.flags&-4097|2,ke=!1,mt=e}}}function Pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function no(e){if(e!==mt)return!1;if(!ke)return Pd(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ds(e.type,e.memoizedProps)),t&&(t=pt)){if(ms(e))throw tp(),Error(D(418));for(;t;)ep(e,t),t=Sn(t.nextSibling)}if(Pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=mt?Sn(e.stateNode.nextSibling):null;return!0}function tp(){for(var e=pt;e;)e=Sn(e.nextSibling)}function br(){pt=mt=null,ke=!1}function uu(e){Ot===null?Ot=[e]:Ot.push(e)}var Ig=sn.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Wo=On(null),Qo=null,pr=null,du=null;function cu(){du=pr=Qo=null}function fu(e){var t=Wo.current;ve(Wo),e._currentValue=t}function gs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){Qo=e,du=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(du!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(Qo===null)throw Error(D(308));pr=e,Qo.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Un=null;function pu(e){Un===null?Un=[e]:Un.push(e)}function np(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,on(e,n)}return i=r.interleaved,i===null?(t.next=t,pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,on(e,n)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}function Dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yo(e,t,n,r){var i=e.updateQueue;pn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,d=s.next;s.next=null,a===null?o=d:a.next=d,a=s;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=s))}if(o!==null){var p=i.baseState;a=0,h=d=s=null,l=o;do{var x=l.lane,C=l.eventTime;if((r&x)===x){h!==null&&(h=h.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=e,w=l;switch(x=t,C=n,w.tag){case 1:if(E=w.payload,typeof E=="function"){p=E.call(C,p,x);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=w.payload,x=typeof E=="function"?E.call(C,p,x):E,x==null)break e;p=$e({},p,x);break e;case 2:pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[l]:x.push(l))}else C={eventTime:C,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=C,s=p):h=h.next=C,a|=x;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;x=l,l=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(1);if(h===null&&(s=p),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qn|=a,e.lanes=a,e.memoizedState=p}}function Od(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var ip=new tf.Component().refs;function vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Cn(e),o=en(r,i);o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Mt(t,e,i,r),ko(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Cn(e),o=en(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Mt(t,e,i,r),ko(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Cn(e),i=en(n,r);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,r),t!==null&&(Mt(t,e,r,n),ko(t,e,r))}};function Ld(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(i,o):!0}function op(e,t,n){var r=!1,i=Pn,o=t.contextType;return typeof o=="object"&&o!==null?o=Et(o):(i=ut(t)?Jn:qe.current,r=t.contextTypes,o=(r=r!=null)?Rr(e,i):Pn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Nd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function xs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ip,mu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Et(o):(o=ut(t)?Jn:qe.current,i.context=Rr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(vs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ga.enqueueReplaceState(i,i.state,null),Yo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===ip&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function ro(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Md(e){var t=e._init;return t(e._payload)}function ap(e){function t(m,c){if(e){var g=m.deletions;g===null?(m.deletions=[c],m.flags|=16):g.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=An(m,c),m.index=0,m.sibling=null,m}function o(m,c,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<c?(m.flags|=2,c):g):(m.flags|=2,c)):(m.flags|=1048576,c)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,g,S){return c===null||c.tag!==6?(c=ml(g,m.mode,S),c.return=m,c):(c=i(c,g),c.return=m,c)}function s(m,c,g,S){var R=g.type;return R===or?h(m,c,g.props.children,S,g.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fn&&Md(R)===c.type)?(S=i(c,g.props),S.ref=Yr(m,c,g),S.return=m,S):(S=bo(g.type,g.key,g.props,null,m.mode,S),S.ref=Yr(m,c,g),S.return=m,S)}function d(m,c,g,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=hl(g,m.mode,S),c.return=m,c):(c=i(c,g.children||[]),c.return=m,c)}function h(m,c,g,S,R){return c===null||c.tag!==7?(c=Vn(g,m.mode,S,R),c.return=m,c):(c=i(c,g),c.return=m,c)}function p(m,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ml(""+c,m.mode,g),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Gi:return g=bo(c.type,c.key,c.props,null,m.mode,g),g.ref=Yr(m,null,c),g.return=m,g;case ir:return c=hl(c,m.mode,g),c.return=m,c;case fn:var S=c._init;return p(m,S(c._payload),g)}if(ni(c)||Vr(c))return c=Vn(c,m.mode,g,null),c.return=m,c;ro(m,c)}return null}function x(m,c,g,S){var R=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:l(m,c,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gi:return g.key===R?s(m,c,g,S):null;case ir:return g.key===R?d(m,c,g,S):null;case fn:return R=g._init,x(m,c,R(g._payload),S)}if(ni(g)||Vr(g))return R!==null?null:h(m,c,g,S,null);ro(m,g)}return null}function C(m,c,g,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,l(c,m,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gi:return m=m.get(S.key===null?g:S.key)||null,s(c,m,S,R);case ir:return m=m.get(S.key===null?g:S.key)||null,d(c,m,S,R);case fn:var L=S._init;return C(m,c,g,L(S._payload),R)}if(ni(S)||Vr(S))return m=m.get(g)||null,h(c,m,S,R,null);ro(c,S)}return null}function E(m,c,g,S){for(var R=null,L=null,M=c,O=c=0,ee=null;M!==null&&O<g.length;O++){M.index>O?(ee=M,M=null):ee=M.sibling;var V=x(m,M,g[O],S);if(V===null){M===null&&(M=ee);break}e&&M&&V.alternate===null&&t(m,M),c=o(V,c,O),L===null?R=V:L.sibling=V,L=V,M=ee}if(O===g.length)return n(m,M),ke&&zn(m,O),R;if(M===null){for(;O<g.length;O++)M=p(m,g[O],S),M!==null&&(c=o(M,c,O),L===null?R=M:L.sibling=M,L=M);return ke&&zn(m,O),R}for(M=r(m,M);O<g.length;O++)ee=C(M,m,O,g[O],S),ee!==null&&(e&&ee.alternate!==null&&M.delete(ee.key===null?O:ee.key),c=o(ee,c,O),L===null?R=ee:L.sibling=ee,L=ee);return e&&M.forEach(function(xe){return t(m,xe)}),ke&&zn(m,O),R}function w(m,c,g,S){var R=Vr(g);if(typeof R!="function")throw Error(D(150));if(g=R.call(g),g==null)throw Error(D(151));for(var L=R=null,M=c,O=c=0,ee=null,V=g.next();M!==null&&!V.done;O++,V=g.next()){M.index>O?(ee=M,M=null):ee=M.sibling;var xe=x(m,M,V.value,S);if(xe===null){M===null&&(M=ee);break}e&&M&&xe.alternate===null&&t(m,M),c=o(xe,c,O),L===null?R=xe:L.sibling=xe,L=xe,M=ee}if(V.done)return n(m,M),ke&&zn(m,O),R;if(M===null){for(;!V.done;O++,V=g.next())V=p(m,V.value,S),V!==null&&(c=o(V,c,O),L===null?R=V:L.sibling=V,L=V);return ke&&zn(m,O),R}for(M=r(m,M);!V.done;O++,V=g.next())V=C(M,m,O,V.value,S),V!==null&&(e&&V.alternate!==null&&M.delete(V.key===null?O:V.key),c=o(V,c,O),L===null?R=V:L.sibling=V,L=V);return e&&M.forEach(function(ye){return t(m,ye)}),ke&&zn(m,O),R}function v(m,c,g,S){if(typeof g=="object"&&g!==null&&g.type===or&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Gi:e:{for(var R=g.key,L=c;L!==null;){if(L.key===R){if(R=g.type,R===or){if(L.tag===7){n(m,L.sibling),c=i(L,g.props.children),c.return=m,m=c;break e}}else if(L.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fn&&Md(R)===L.type){n(m,L.sibling),c=i(L,g.props),c.ref=Yr(m,L,g),c.return=m,m=c;break e}n(m,L);break}else t(m,L);L=L.sibling}g.type===or?(c=Vn(g.props.children,m.mode,S,g.key),c.return=m,m=c):(S=bo(g.type,g.key,g.props,null,m.mode,S),S.ref=Yr(m,c,g),S.return=m,m=S)}return a(m);case ir:e:{for(L=g.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(m,c.sibling),c=i(c,g.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=hl(g,m.mode,S),c.return=m,m=c}return a(m);case fn:return L=g._init,v(m,c,L(g._payload),S)}if(ni(g))return E(m,c,g,S);if(Vr(g))return w(m,c,g,S);ro(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(n(m,c.sibling),c=i(c,g),c.return=m,m=c):(n(m,c),c=ml(g,m.mode,S),c.return=m,m=c),a(m)):n(m,c)}return v}var Pr=ap(!0),lp=ap(!1),Ui={},Jt=On(Ui),Ri=On(Ui),bi=On(Ui);function jn(e){if(e===Ui)throw Error(D(174));return e}function hu(e,t){switch(me(bi,t),me(Ri,e),me(Jt,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}ve(Jt),me(Jt,t)}function Dr(){ve(Jt),ve(Ri),ve(bi)}function sp(e){jn(bi.current);var t=jn(Jt.current),n=Kl(t,e.type);t!==n&&(me(Ri,e),me(Jt,n))}function gu(e){Ri.current===e&&(ve(Jt),ve(Ri))}var Ce=On(0);function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sl=[];function vu(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var Eo=sn.ReactCurrentDispatcher,ul=sn.ReactCurrentBatchConfig,Wn=0,Ae=null,ze=null,je=null,Zo=!1,di=!1,Pi=0,zg=0;function Ke(){throw Error(D(321))}function xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function yu(e,t,n,r,i,o){if(Wn=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?jg:Bg,e=n(r,i),di){o=0;do{if(di=!1,Pi=0,25<=o)throw Error(D(301));o+=1,je=ze=null,t.updateQueue=null,Eo.current=Hg,e=n(r,i)}while(di)}if(Eo.current=Xo,t=ze!==null&&ze.next!==null,Wn=0,je=ze=Ae=null,Zo=!1,t)throw Error(D(300));return e}function wu(){var e=Pi!==0;return Pi=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ae.memoizedState=je=e:je=je.next=e,je}function Ct(){if(ze===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=je===null?Ae.memoizedState:je.next;if(t!==null)je=t,ze=e;else{if(e===null)throw Error(D(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},je===null?Ae.memoizedState=je=e:je=je.next=e}return je}function Di(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,d=o;do{var h=d.lane;if((Wn&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,Ae.lanes|=h,Qn|=h}d=d.next}while(d!==null&&d!==o);s===null?a=r:s.next=l,Tt(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,Qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Tt(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function up(){}function dp(e,t){var n=Ae,r=Ct(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,lt=!0),r=r.queue,Su(pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Oi(9,fp.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(D(349));Wn&30||cp(n,t,i)}return i}function cp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fp(e,t,n,r){t.value=n,t.getSnapshot=r,mp(t)&&hp(e)}function pp(e,t,n){return n(function(){mp(t)&&hp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function hp(e){var t=on(e,1);t!==null&&Mt(t,e,1,-1)}function Td(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=Ug.bind(null,Ae,e),[t.memoizedState,e]}function Oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gp(){return Ct().memoizedState}function Co(e,t,n,r){var i=jt();Ae.flags|=e,i.memoizedState=Oi(1|t,n,void 0,r===void 0?null:r)}function va(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(ze!==null){var a=ze.memoizedState;if(o=a.destroy,r!==null&&xu(r,a.deps)){i.memoizedState=Oi(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Oi(1|t,n,o,r)}function Id(e,t){return Co(8390656,8,e,t)}function Su(e,t){return va(2048,8,e,t)}function vp(e,t){return va(4,2,e,t)}function xp(e,t){return va(4,4,e,t)}function yp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wp(e,t,n){return n=n!=null?n.concat([e]):null,va(4,4,yp.bind(null,t,e),n)}function ku(){}function Sp(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kp(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ep(e,t,n){return Wn&21?(Tt(n,t)||(n=$f(),Ae.lanes|=n,Qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function Fg(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=ul.transition;ul.transition={};try{e(!1),t()}finally{ce=n,ul.transition=r}}function Cp(){return Ct().memoizedState}function _g(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ap(e))$p(t,n);else if(n=np(e,t,n,r),n!==null){var i=nt();Mt(n,e,r,i),Rp(n,t,r)}}function Ug(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ap(e))$p(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Tt(l,a)){var s=t.interleaved;s===null?(i.next=i,pu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=np(e,t,i,r),n!==null&&(i=nt(),Mt(n,e,r,i),Rp(n,t,r))}}function Ap(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function $p(e,t){di=Zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}var Xo={readContext:Et,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},jg={readContext:Et,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Id,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Co(4194308,4,yp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){return Co(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_g.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:Td,useDebugValue:ku,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=Td(!1),t=e[0];return e=Fg.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=jt();if(ke){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Be===null)throw Error(D(349));Wn&30||cp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Id(pp.bind(null,r,o,e),[e]),r.flags|=2048,Oi(9,fp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=jt(),t=Be.identifierPrefix;if(ke){var n=qt,r=Xt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bg={readContext:Et,useCallback:Sp,useContext:Et,useEffect:Su,useImperativeHandle:wp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:kp,useReducer:dl,useRef:gp,useState:function(){return dl(Di)},useDebugValue:ku,useDeferredValue:function(e){var t=Ct();return Ep(t,ze.memoizedState,e)},useTransition:function(){var e=dl(Di)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:dp,useId:Cp,unstable_isNewReconciler:!1},Hg={readContext:Et,useCallback:Sp,useContext:Et,useEffect:Su,useImperativeHandle:wp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:kp,useReducer:cl,useRef:gp,useState:function(){return cl(Di)},useDebugValue:ku,useDeferredValue:function(e){var t=Ct();return ze===null?t.memoizedState=e:Ep(t,ze.memoizedState,e)},useTransition:function(){var e=cl(Di)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:dp,useId:Cp,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=vh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ys(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vg=typeof WeakMap=="function"?WeakMap:Map;function bp(e,t,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ea||(ea=!0,Ps=r),ys(e,t)},n}function Pp(e,t,n){n=en(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ys(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ys(e,t),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function zd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=i0.bind(null,e,t,n),t.then(e,e))}function Fd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _d(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=en(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var Jg=sn.ReactCurrentOwner,lt=!1;function et(e,t,n,r){t.child=e===null?lp(t,null,n,r):Pr(t,e.child,n,r)}function Ud(e,t,n,r,i){n=n.render;var o=t.ref;return Er(t,i),r=yu(e,t,n,r,o,i),n=wu(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(ke&&n&&lu(t),t.flags|=1,et(e,t,r,i),t.child)}function jd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Du(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Dp(e,t,o,r,i)):(e=bo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(a,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=An(o,r),e.ref=t.ref,e.return=t,t.child=e}function Dp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ei(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,an(e,t,i)}return ws(e,t,n,r,i)}function Op(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(hr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(hr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(hr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(hr,ft),ft|=r;return et(e,t,i,n),t.child}function Lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ws(e,t,n,r,i){var o=ut(n)?Jn:qe.current;return o=Rr(t,o),Er(t,i),n=yu(e,t,n,r,o,i),r=wu(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(ke&&r&&lu(t),t.flags|=1,et(e,t,n,i),t.child)}function Bd(e,t,n,r,i){if(ut(n)){var o=!0;Vo(t)}else o=!1;if(Er(t,i),t.stateNode===null)Ao(e,t),op(t,n,r),xs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Et(d):(d=ut(n)?Jn:qe.current,d=Rr(t,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==d)&&Nd(t,a,r,d),pn=!1;var x=t.memoizedState;a.state=x,Yo(t,r,a,i),s=t.memoizedState,l!==r||x!==s||st.current||pn?(typeof h=="function"&&(vs(t,n,h,r),s=t.memoizedState),(l=pn||Ld(t,n,l,r,x,s,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,rp(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Pt(t.type,l),a.props=d,p=t.pendingProps,x=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Et(s):(s=ut(n)?Jn:qe.current,s=Rr(t,s));var C=n.getDerivedStateFromProps;(h=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||x!==s)&&Nd(t,a,r,s),pn=!1,x=t.memoizedState,a.state=x,Yo(t,r,a,i);var E=t.memoizedState;l!==p||x!==E||st.current||pn?(typeof C=="function"&&(vs(t,n,C,r),E=t.memoizedState),(d=pn||Ld(t,n,d,r,x,E,s)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,E,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,E,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),a.props=r,a.state=E,a.context=s,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Ss(e,t,n,r,o,i)}function Ss(e,t,n,r,i,o){Lp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Rd(t,n,!1),an(e,t,o);r=t.stateNode,Jg.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Pr(t,e.child,null,o),t.child=Pr(t,null,l,o)):et(e,t,l,o),t.memoizedState=r.state,i&&Rd(t,n,!0),t.child}function Np(e){var t=e.stateNode;t.pendingContext?$d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$d(e,t.context,!1),hu(e,t.containerInfo)}function Hd(e,t,n,r,i){return br(),uu(i),t.flags|=256,et(e,t,n,r),t.child}var ks={dehydrated:null,treeContext:null,retryLane:0};function Es(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Ce,i&1),e===null)return hs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=wa(a,r,0,null),e=Vn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Es(n),t.memoizedState=ks,e):Eu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Gg(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=An(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=An(l,o):(o=Vn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Es(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ks,r}return o=e.child,e=o.sibling,r=An(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eu(e,t){return t=wa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function io(e,t,n,r){return r!==null&&uu(r),Pr(t,e.child,null,n),e=Eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gg(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(D(422))),io(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=wa({mode:"visible",children:r.children},i,0,null),o=Vn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Pr(t,e.child,null,a),t.child.memoizedState=Es(a),t.memoizedState=ks,o);if(!(t.mode&1))return io(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(D(419)),r=fl(o,r,void 0),io(e,t,a,r)}if(l=(a&e.childLanes)!==0,lt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,on(e,i),Mt(r,e,i,-1))}return Pu(),r=fl(Error(D(421))),io(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=o0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=Sn(i.nextSibling),mt=t,ke=!0,Ot=null,e!==null&&(yt[wt++]=Xt,yt[wt++]=qt,yt[wt++]=Gn,Xt=e.id,qt=e.overflow,Gn=t),t=Eu(t,r.children),t.flags|=4096,t)}function Vd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gs(e.return,t,n)}function pl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Tp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vd(e,n,t);else if(e.tag===19)Vd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pl(t,!0,n,null,o);break;case"together":pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wg(e,t,n){switch(t.tag){case 3:Np(t),br();break;case 5:sp(t);break;case 1:ut(t.type)&&Vo(t);break;case 4:hu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(Wo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Mp(e,t,n):(me(Ce,Ce.current&1),e=an(e,t,n),e!==null?e.sibling:null);me(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Op(e,t,n)}return an(e,t,n)}var Ip,Cs,zp,Fp;Ip=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cs=function(){};zp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jn(Jt.current);var o=null;switch(n){case"input":i=Gl(e,i),r=Gl(e,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=Yl(e,i),r=Yl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}Zl(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(gi.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(gi.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&ge("scroll",e),o||l===s||(o=[])):(o=o||[]).push(d,s))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Fp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kr(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qg(e,t,n){var r=t.pendingProps;switch(su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ut(t.type)&&Ho(),Ze(t),null;case 3:return r=t.stateNode,Dr(),ve(st),ve(qe),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(no(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ot!==null&&(Ls(Ot),Ot=null))),Cs(e,t),Ze(t),null;case 5:gu(t);var i=jn(bi.current);if(n=t.type,e!==null&&t.stateNode!=null)zp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ze(t),null}if(e=jn(Jt.current),no(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ht]=t,r[$i]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)ge(ii[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":qu(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":td(r,o),ge("invalid",r)}Zl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&to(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&to(r.textContent,l,e),i=["children",""+l]):gi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":Wi(r),ed(r,o,!0);break;case"textarea":Wi(r),nd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ht]=t,e[$i]=r,Ip(e,t,!1,!1),t.stateNode=e;e:{switch(a=Xl(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)ge(ii[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":qu(e,r),i=Gl(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),ge("invalid",e);break;case"textarea":td(e,r),i=Yl(e,r),ge("invalid",e);break;default:i=r}Zl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?mf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ff(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vi(e,s):typeof s=="number"&&vi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&Ws(e,o,s,a))}switch(n){case"input":Wi(e),ed(e,r,!1);break;case"textarea":Wi(e),nd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?yr(e,!!r.multiple,o,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Fp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=jn(bi.current),jn(Jt.current),no(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(o=r.nodeValue!==n)&&(e=mt,e!==null))switch(e.tag){case 3:to(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&pt!==null&&t.mode&1&&!(t.flags&128))tp(),br(),t.flags|=98560,o=!1;else if(o=no(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Ht]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else Ot!==null&&(Ls(Ot),Ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Fe===0&&(Fe=3):Pu())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Dr(),Cs(e,t),e===null&&Ci(t.stateNode.containerInfo),Ze(t),null;case 10:return fu(t.type._context),Ze(t),null;case 17:return ut(t.type)&&Ho(),Ze(t),null;case 19:if(ve(Ce),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Kr(o,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ko(e),a!==null){for(t.flags|=128,Kr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>Lr&&(t.flags|=128,r=!0,Kr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ko(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ke)return Ze(t),null}else 2*Oe()-o.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,Kr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Ce.current,me(Ce,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Yg(e,t){switch(su(t),t.tag){case 1:return ut(t.type)&&Ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),ve(st),ve(qe),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(ve(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ce),null;case 4:return Dr(),null;case 10:return fu(t.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var oo=!1,Xe=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,U=null;function mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function As(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Jd=!1;function Zg(e,t){if(ss=_o,e=Bf(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,d=0,h=0,p=e,x=null;t:for(;;){for(var C;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(C=p.firstChild)!==null;)x=p,p=C;for(;;){if(p===e)break t;if(x===n&&++d===i&&(l=a),x===o&&++h===r&&(s=a),(C=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=C}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(us={focusedElem:e,selectionRange:n},_o=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var w=E.memoizedProps,v=E.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Pt(t.type,w),v);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(S){Re(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return E=Jd,Jd=!1,E}function ci(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&As(t,n,o)}i=i.next}while(i!==r)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $s(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _p(e){var t=e.alternate;t!==null&&(e.alternate=null,_p(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[$i],delete t[fs],delete t[Ng],delete t[Mg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Up(e){return e.tag===5||e.tag===3||e.tag===4}function Gd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Rs(e,t,n),e=e.sibling;e!==null;)Rs(e,t,n),e=e.sibling}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}var Ge=null,Dt=!1;function cn(e,t,n){for(n=n.child;n!==null;)jp(e,t,n),n=n.sibling}function jp(e,t,n){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(da,n)}catch{}switch(n.tag){case 5:Xe||mr(n,t);case 6:var r=Ge,i=Dt;Ge=null,cn(e,t,n),Ge=r,Dt=i,Ge!==null&&(Dt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Dt?(e=Ge,n=n.stateNode,e.nodeType===8?al(e.parentNode,n):e.nodeType===1&&al(e,n),Si(e)):al(Ge,n.stateNode));break;case 4:r=Ge,i=Dt,Ge=n.stateNode.containerInfo,Dt=!0,cn(e,t,n),Ge=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&As(n,t,a),i=i.next}while(i!==r)}cn(e,t,n);break;case 1:if(!Xe&&(mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,t,l)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,cn(e,t,n),Xe=r):cn(e,t,n);break;default:cn(e,t,n)}}function Wd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kg),t.forEach(function(r){var i=a0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Dt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Dt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Dt=!0;break e}l=l.return}if(Ge===null)throw Error(D(160));jp(o,a,i),Ge=null,Dt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){Re(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),_t(e),r&4){try{ci(3,e,e.return),xa(3,e)}catch(w){Re(e,e.return,w)}try{ci(5,e,e.return)}catch(w){Re(e,e.return,w)}}break;case 1:bt(t,e),_t(e),r&512&&n!==null&&mr(n,n.return);break;case 5:if(bt(t,e),_t(e),r&512&&n!==null&&mr(n,n.return),e.flags&32){var i=e.stateNode;try{vi(i,"")}catch(w){Re(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&uf(i,o),Xl(l,a);var d=Xl(l,o);for(a=0;a<s.length;a+=2){var h=s[a],p=s[a+1];h==="style"?mf(i,p):h==="dangerouslySetInnerHTML"?ff(i,p):h==="children"?vi(i,p):Ws(i,h,p,d)}switch(l){case"input":Wl(i,o);break;case"textarea":df(i,o);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var C=o.value;C!=null?yr(i,!!o.multiple,C,!1):x!==!!o.multiple&&(o.defaultValue!=null?yr(i,!!o.multiple,o.defaultValue,!0):yr(i,!!o.multiple,o.multiple?[]:"",!1))}i[$i]=o}catch(w){Re(e,e.return,w)}}break;case 6:if(bt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Re(e,e.return,w)}}break;case 3:if(bt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(w){Re(e,e.return,w)}break;case 4:bt(t,e),_t(e);break;case 13:bt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($u=Oe())),r&4&&Wd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(d=Xe)||h,bt(t,e),Xe=d):bt(t,e),_t(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(U=e,h=e.child;h!==null;){for(p=U=h;U!==null;){switch(x=U,C=x.child,x.tag){case 0:case 11:case 14:case 15:ci(4,x,x.return);break;case 1:mr(x,x.return);var E=x.stateNode;if(typeof E.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(w){Re(r,n,w)}}break;case 5:mr(x,x.return);break;case 22:if(x.memoizedState!==null){Yd(p);continue}}C!==null?(C.return=x,U=C):Yd(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=pf("display",a))}catch(w){Re(e,e.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){Re(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(t,e),_t(e),r&4&&Wd(e);break;case 21:break;default:bt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Up(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vi(i,""),r.flags&=-33);var o=Gd(e);bs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Gd(e);Rs(e,l,a);break;default:throw Error(D(161))}}catch(s){Re(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xg(e,t,n){U=e,Hp(e)}function Hp(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||oo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Xe;l=oo;var d=Xe;if(oo=a,(Xe=s)&&!d)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?Kd(i):s!==null?(s.return=a,U=s):Kd(i);for(;o!==null;)U=o,Hp(o),o=o.sibling;U=i,oo=l,Xe=d}Qd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Qd(e)}}function Qd(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Od(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Od(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Si(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Xe||t.flags&512&&$s(t)}catch(x){Re(t,t.return,x)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Yd(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Kd(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xa(4,t)}catch(s){Re(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Re(t,i,s)}}var o=t.return;try{$s(t)}catch(s){Re(t,o,s)}break;case 5:var a=t.return;try{$s(t)}catch(s){Re(t,a,s)}}}catch(s){Re(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var qg=Math.ceil,qo=sn.ReactCurrentDispatcher,Cu=sn.ReactCurrentOwner,kt=sn.ReactCurrentBatchConfig,se=0,Be=null,Ne=null,We=0,ft=0,hr=On(0),Fe=0,Li=null,Qn=0,ya=0,Au=0,fi=null,at=null,$u=0,Lr=1/0,Yt=null,ea=!1,Ps=null,En=null,ao=!1,vn=null,ta=0,pi=0,Ds=null,$o=-1,Ro=0;function nt(){return se&6?Oe():$o!==-1?$o:$o=Oe()}function Cn(e){return e.mode&1?se&2&&We!==0?We&-We:Ig.transition!==null?(Ro===0&&(Ro=$f()),Ro):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Nf(e.type)),e):1}function Mt(e,t,n,r){if(50<pi)throw pi=0,Ds=null,Error(D(185));zi(e,n,r),(!(se&2)||e!==Be)&&(e===Be&&(!(se&2)&&(ya|=n),Fe===4&&hn(e,We)),dt(e,r),n===1&&se===0&&!(t.mode&1)&&(Lr=Oe()+500,ha&&Ln()))}function dt(e,t){var n=e.callbackNode;Ih(e,t);var r=Fo(e,e===Be?We:0);if(r===0)n!==null&&od(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&od(n),t===1)e.tag===0?Tg(Zd.bind(null,e)):Xf(Zd.bind(null,e)),Og(function(){!(se&6)&&Ln()}),n=null;else{switch(Rf(r)){case 1:n=Xs;break;case 4:n=Cf;break;case 16:n=zo;break;case 536870912:n=Af;break;default:n=zo}n=Zp(n,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vp(e,t){if($o=-1,Ro=0,se&6)throw Error(D(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=Fo(e,e===Be?We:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=na(e,r);else{t=r;var i=se;se|=2;var o=Gp();(Be!==e||We!==t)&&(Yt=null,Lr=Oe()+500,Hn(e,t));do try{n0();break}catch(l){Jp(e,l)}while(1);cu(),qo.current=o,se=i,Ne!==null?t=0:(Be=null,We=0,t=Fe)}if(t!==0){if(t===2&&(i=rs(e),i!==0&&(r=i,t=Os(e,i))),t===1)throw n=Li,Hn(e,0),hn(e,r),dt(e,Oe()),n;if(t===6)hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!e0(i)&&(t=na(e,r),t===2&&(o=rs(e),o!==0&&(r=o,t=Os(e,o))),t===1))throw n=Li,Hn(e,0),hn(e,r),dt(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Fn(e,at,Yt);break;case 3:if(hn(e,r),(r&130023424)===r&&(t=$u+500-Oe(),10<t)){if(Fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cs(Fn.bind(null,e,at,Yt),t);break}Fn(e,at,Yt);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Nt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qg(r/1960))-r,10<r){e.timeoutHandle=cs(Fn.bind(null,e,at,Yt),r);break}Fn(e,at,Yt);break;case 5:Fn(e,at,Yt);break;default:throw Error(D(329))}}}return dt(e,Oe()),e.callbackNode===n?Vp.bind(null,e):null}function Os(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=na(e,t),e!==2&&(t=at,at=n,t!==null&&Ls(t)),e}function Ls(e){at===null?at=e:at.push.apply(at,e)}function e0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Au,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Zd(e){if(se&6)throw Error(D(327));Cr();var t=Fo(e,0);if(!(t&1))return dt(e,Oe()),null;var n=na(e,t);if(e.tag!==0&&n===2){var r=rs(e);r!==0&&(t=r,n=Os(e,r))}if(n===1)throw n=Li,Hn(e,0),hn(e,t),dt(e,Oe()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,at,Yt),dt(e,Oe()),null}function Ru(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Lr=Oe()+500,ha&&Ln())}}function Yn(e){vn!==null&&vn.tag===0&&!(se&6)&&Cr();var t=se;se|=1;var n=kt.transition,r=ce;try{if(kt.transition=null,ce=1,e)return e()}finally{ce=r,kt.transition=n,se=t,!(se&6)&&Ln()}}function bu(){ft=hr.current,ve(hr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dg(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:Dr(),ve(st),ve(qe),vu();break;case 5:gu(r);break;case 4:Dr();break;case 13:ve(Ce);break;case 19:ve(Ce);break;case 10:fu(r.type._context);break;case 22:case 23:bu()}n=n.return}if(Be=e,Ne=e=An(e.current,null),We=ft=t,Fe=0,Li=null,Au=ya=Qn=0,at=fi=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Un=null}return e}function Jp(e,t){do{var n=Ne;try{if(cu(),Eo.current=Xo,Zo){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zo=!1}if(Wn=0,je=ze=Ae=null,di=!1,Pi=0,Cu.current=null,n===null||n.return===null){Fe=1,Li=t,Ne=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=We,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var C=Fd(a);if(C!==null){C.flags&=-257,_d(C,a,l,o,t),C.mode&1&&zd(o,d,t),t=C,s=d;var E=t.updateQueue;if(E===null){var w=new Set;w.add(s),t.updateQueue=w}else E.add(s);break e}else{if(!(t&1)){zd(o,d,t),Pu();break e}s=Error(D(426))}}else if(ke&&l.mode&1){var v=Fd(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),_d(v,a,l,o,t),uu(Or(s,l));break e}}o=s=Or(s,l),Fe!==4&&(Fe=2),fi===null?fi=[o]:fi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=bp(o,s,t);Dd(o,m);break e;case 1:l=s;var c=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(En===null||!En.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Pp(o,l,t);Dd(o,S);break e}}o=o.return}while(o!==null)}Qp(n)}catch(R){t=R,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function Gp(){var e=qo.current;return qo.current=Xo,e===null?Xo:e}function Pu(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Be===null||!(Qn&268435455)&&!(ya&268435455)||hn(Be,We)}function na(e,t){var n=se;se|=2;var r=Gp();(Be!==e||We!==t)&&(Yt=null,Hn(e,t));do try{t0();break}catch(i){Jp(e,i)}while(1);if(cu(),se=n,qo.current=r,Ne!==null)throw Error(D(261));return Be=null,We=0,Fe}function t0(){for(;Ne!==null;)Wp(Ne)}function n0(){for(;Ne!==null&&!Rh();)Wp(Ne)}function Wp(e){var t=Kp(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Qp(e):Ne=t,Cu.current=null}function Qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yg(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Ne=null;return}}else if(n=Qg(n,t,ft),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Fe===0&&(Fe=5)}function Fn(e,t,n){var r=ce,i=kt.transition;try{kt.transition=null,ce=1,r0(e,t,n,r)}finally{kt.transition=i,ce=r}return null}function r0(e,t,n,r){do Cr();while(vn!==null);if(se&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zh(e,o),e===Be&&(Ne=Be=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ao||(ao=!0,Zp(zo,function(){return Cr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kt.transition,kt.transition=null;var a=ce;ce=1;var l=se;se|=4,Cu.current=null,Zg(e,n),Bp(n,e),Eg(us),_o=!!ss,us=ss=null,e.current=n,Xg(n),bh(),se=l,ce=a,kt.transition=o}else e.current=n;if(ao&&(ao=!1,vn=e,ta=i),o=e.pendingLanes,o===0&&(En=null),Oh(n.stateNode),dt(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ea)throw ea=!1,e=Ps,Ps=null,e;return ta&1&&e.tag!==0&&Cr(),o=e.pendingLanes,o&1?e===Ds?pi++:(pi=0,Ds=e):pi=0,Ln(),null}function Cr(){if(vn!==null){var e=Rf(ta),t=kt.transition,n=ce;try{if(kt.transition=null,ce=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,ta=0,se&6)throw Error(D(331));var i=se;for(se|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(U=d;U!==null;){var h=U;switch(h.tag){case 0:case 11:case 15:ci(8,h,o)}var p=h.child;if(p!==null)p.return=h,U=p;else for(;U!==null;){h=U;var x=h.sibling,C=h.return;if(_p(h),h===d){U=null;break}if(x!==null){x.return=C,U=x;break}U=C}}}var E=o.alternate;if(E!==null){var w=E.child;if(w!==null){E.child=null;do{var v=w.sibling;w.sibling=null,w=v}while(w!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ci(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,U=m;break e}U=o.return}}var c=e.current;for(U=c;U!==null;){a=U;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,U=g;else e:for(a=c;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xa(9,l)}}catch(R){Re(l,l.return,R)}if(l===a){U=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,U=S;break e}U=l.return}}if(se=i,Ln(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(da,e)}catch{}r=!0}return r}finally{ce=n,kt.transition=t}}return!1}function Xd(e,t,n){t=Or(n,t),t=bp(e,t,1),e=kn(e,t,1),t=nt(),e!==null&&(zi(e,1,t),dt(e,t))}function Re(e,t,n){if(e.tag===3)Xd(e,e,n);else for(;t!==null;){if(t.tag===3){Xd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=Or(n,e),e=Pp(t,e,1),t=kn(t,e,1),e=nt(),t!==null&&(zi(t,1,e),dt(t,e));break}}t=t.return}}function i0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(We&n)===n&&(Fe===4||Fe===3&&(We&130023424)===We&&500>Oe()-$u?Hn(e,0):Au|=n),dt(e,t)}function Yp(e,t){t===0&&(e.mode&1?(t=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):t=1);var n=nt();e=on(e,t),e!==null&&(zi(e,t,n),dt(e,n))}function o0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yp(e,n)}function a0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Yp(e,n)}var Kp;Kp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,Wg(e,t,n);lt=!!(e.flags&131072)}else lt=!1,ke&&t.flags&1048576&&qf(t,Go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var i=Rr(t,qe.current);Er(t,n),i=yu(null,t,r,e,i,n);var o=wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,Vo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mu(t),i.updater=ga,t.stateNode=i,i._reactInternals=t,xs(t,r,e,n),t=Ss(null,t,r,!0,o,n)):(t.tag=0,ke&&o&&lu(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=s0(r),e=Pt(r,e),i){case 0:t=ws(null,t,r,e,n);break e;case 1:t=Bd(null,t,r,e,n);break e;case 11:t=Ud(null,t,r,e,n);break e;case 14:t=jd(null,t,r,Pt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),ws(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Bd(e,t,r,i,n);case 3:e:{if(Np(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,rp(e,t),Yo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Or(Error(D(423)),t),t=Hd(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(D(424)),t),t=Hd(e,t,r,n,i);break e}else for(pt=Sn(t.stateNode.containerInfo.firstChild),mt=t,ke=!0,Ot=null,n=lp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=an(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return sp(t),e===null&&hs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ds(r,i)?a=null:o!==null&&ds(r,o)&&(t.flags|=32),Lp(e,t),et(e,t,a,n),t.child;case 6:return e===null&&hs(t),null;case 13:return Mp(e,t,n);case 4:return hu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Ud(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,me(Wo,r._currentValue),r._currentValue=a,o!==null)if(Tt(o.value,a)){if(o.children===i.children&&!st.current){t=an(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=en(-1,n&-n),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),gs(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(D(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),gs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Er(t,n),i=Et(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Pt(r,t.pendingProps),i=Pt(r.type,i),jd(e,t,r,i,n);case 15:return Dp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Ao(e,t),t.tag=1,ut(r)?(e=!0,Vo(t)):e=!1,Er(t,n),op(t,r,i),xs(t,r,i,n),Ss(null,t,r,!0,e,n);case 19:return Tp(e,t,n);case 22:return Op(e,t,n)}throw Error(D(156,t.tag))};function Zp(e,t){return Ef(e,t)}function l0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new l0(e,t,n,r)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s0(e){if(typeof e=="function")return Du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Ks)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Du(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case or:return Vn(n.children,i,o,t);case Qs:a=8,i|=8;break;case Bl:return e=St(12,n,t,i|2),e.elementType=Bl,e.lanes=o,e;case Hl:return e=St(13,n,t,i),e.elementType=Hl,e.lanes=o,e;case Vl:return e=St(19,n,t,i),e.elementType=Vl,e.lanes=o,e;case af:return wa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rf:a=10;break e;case of:a=9;break e;case Ys:a=11;break e;case Ks:a=14;break e;case fn:a=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=St(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vn(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function wa(e,t,n,r){return e=St(22,e,r,t),e.elementType=af,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ya(0),this.expirationTimes=Ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ya(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ou(e,t,n,r,i,o,a,l,s){return e=new u0(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(o),e}function d0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xp(e){if(!e)return Pn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ut(n))return Zf(e,n,t)}return t}function qp(e,t,n,r,i,o,a,l,s){return e=Ou(n,r,!0,e,i,o,a,l,s),e.context=Xp(null),n=e.current,r=nt(),i=Cn(n),o=en(r,i),o.callback=t??null,kn(n,o,i),e.current.lanes=i,zi(e,i,r),dt(e,r),e}function Sa(e,t,n,r){var i=t.current,o=nt(),a=Cn(i);return n=Xp(n),t.context===null?t.context=n:t.pendingContext=n,t=en(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(i,t,a),e!==null&&(Mt(e,i,a,o),ko(e,i,a)),a}function ra(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lu(e,t){qd(e,t),(e=e.alternate)&&qd(e,t)}function c0(){return null}var em=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nu(e){this._internalRoot=e}ka.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Sa(e,t,null,null)};ka.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){Sa(null,e,null,null)}),t[rn]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=Df();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&Lf(e)}};function Mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function f0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=ra(a);o.call(d)}}var a=qp(t,r,e,0,null,!1,!1,"",ec);return e._reactRootContainer=a,e[rn]=a.current,Ci(e.nodeType===8?e.parentNode:e),Yn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=ra(s);l.call(d)}}var s=Ou(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=s,e[rn]=s.current,Ci(e.nodeType===8?e.parentNode:e),Yn(function(){Sa(t,s,n,r)}),s}function Ca(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=ra(a);l.call(s)}}Sa(t,a,e,i)}else a=f0(n,t,e,i,r);return ra(a)}bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ri(t.pendingLanes);n!==0&&(qs(t,n|1),dt(t,Oe()),!(se&6)&&(Lr=Oe()+500,Ln()))}break;case 13:Yn(function(){var r=on(e,1);if(r!==null){var i=nt();Mt(r,e,1,i)}}),Lu(e,1)}};eu=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=nt();Mt(t,e,134217728,n)}Lu(e,134217728)}};Pf=function(e){if(e.tag===13){var t=Cn(e),n=on(e,t);if(n!==null){var r=nt();Mt(n,e,t,r)}Lu(e,t)}};Df=function(){return ce};Of=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};es=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ma(r);if(!i)throw Error(D(90));sf(r),Wl(r,i)}}}break;case"textarea":df(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};vf=Ru;xf=Yn;var p0={usingClientEntryPoint:!1,Events:[_i,ur,ma,hf,gf,Ru]},Zr={findFiberByHostInstance:_n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},m0={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sf(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||c0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{da=lo.inject(m0),Vt=lo}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(t))throw Error(D(200));return d0(e,t,null,n)};gt.createRoot=function(e,t){if(!Mu(e))throw Error(D(299));var n=!1,r="",i=em;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ou(e,1,!1,null,null,n,!1,r,i),e[rn]=t.current,Ci(e.nodeType===8?e.parentNode:e),new Nu(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Sf(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Yn(e)};gt.hydrate=function(e,t,n){if(!Ea(t))throw Error(D(200));return Ca(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!Mu(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=em;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=qp(t,null,e,1,n??null,i,!1,o,a),e[rn]=t.current,Ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ka(t)};gt.render=function(e,t,n){if(!Ea(t))throw Error(D(200));return Ca(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(D(40));return e._reactRootContainer?(Yn(function(){Ca(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};gt.unstable_batchedUpdates=Ru;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ea(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Ca(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=gt})(ch);var tc=_l;Fl.createRoot=tc.createRoot,Fl.hydrateRoot=tc.hydrateRoot;var Ni={},h0={get exports(){return Ni},set exports(e){Ni=e}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,Tu=He?Symbol.for("react.element"):60103,Iu=He?Symbol.for("react.portal"):60106,Aa=He?Symbol.for("react.fragment"):60107,$a=He?Symbol.for("react.strict_mode"):60108,Ra=He?Symbol.for("react.profiler"):60114,ba=He?Symbol.for("react.provider"):60109,Pa=He?Symbol.for("react.context"):60110,zu=He?Symbol.for("react.async_mode"):60111,Da=He?Symbol.for("react.concurrent_mode"):60111,Oa=He?Symbol.for("react.forward_ref"):60112,La=He?Symbol.for("react.suspense"):60113,g0=He?Symbol.for("react.suspense_list"):60120,Na=He?Symbol.for("react.memo"):60115,Ma=He?Symbol.for("react.lazy"):60116,v0=He?Symbol.for("react.block"):60121,x0=He?Symbol.for("react.fundamental"):60117,y0=He?Symbol.for("react.responder"):60118,w0=He?Symbol.for("react.scope"):60119;function xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Tu:switch(e=e.type,e){case zu:case Da:case Aa:case Ra:case $a:case La:return e;default:switch(e=e&&e.$$typeof,e){case Pa:case Oa:case Ma:case Na:case ba:return e;default:return t}}case Iu:return t}}}function tm(e){return xt(e)===Da}fe.AsyncMode=zu;fe.ConcurrentMode=Da;fe.ContextConsumer=Pa;fe.ContextProvider=ba;fe.Element=Tu;fe.ForwardRef=Oa;fe.Fragment=Aa;fe.Lazy=Ma;fe.Memo=Na;fe.Portal=Iu;fe.Profiler=Ra;fe.StrictMode=$a;fe.Suspense=La;fe.isAsyncMode=function(e){return tm(e)||xt(e)===zu};fe.isConcurrentMode=tm;fe.isContextConsumer=function(e){return xt(e)===Pa};fe.isContextProvider=function(e){return xt(e)===ba};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tu};fe.isForwardRef=function(e){return xt(e)===Oa};fe.isFragment=function(e){return xt(e)===Aa};fe.isLazy=function(e){return xt(e)===Ma};fe.isMemo=function(e){return xt(e)===Na};fe.isPortal=function(e){return xt(e)===Iu};fe.isProfiler=function(e){return xt(e)===Ra};fe.isStrictMode=function(e){return xt(e)===$a};fe.isSuspense=function(e){return xt(e)===La};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Aa||e===Da||e===Ra||e===$a||e===La||e===g0||typeof e=="object"&&e!==null&&(e.$$typeof===Ma||e.$$typeof===Na||e.$$typeof===ba||e.$$typeof===Pa||e.$$typeof===Oa||e.$$typeof===x0||e.$$typeof===y0||e.$$typeof===w0||e.$$typeof===v0)};fe.typeOf=xt;(function(e){e.exports=fe})(h0);function S0(e){function t(I,_,F,Q,k){for(var te=0,z=0,Se=0,ue=0,ie,Z,Pe=0,_e=0,ne,De=ne=ie=0,le=0,Me=0,dn=0,Te=0,It=F.length,zt=It-1,ot,W="",Ee="",Ur="",er="",Ft;le<It;){if(Z=F.charCodeAt(le),le===zt&&z+ue+Se+te!==0&&(z!==0&&(Z=z===47?10:47),ue=Se=te=0,It++,zt++),z+ue+Se+te===0){if(le===zt&&(0<Me&&(W=W.replace(x,"")),0<W.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:W+=F.charAt(le)}Z=59}switch(Z){case 123:for(W=W.trim(),ie=W.charCodeAt(0),ne=1,Te=++le;le<It;){switch(Z=F.charCodeAt(le)){case 123:ne++;break;case 125:ne--;break;case 47:switch(Z=F.charCodeAt(le+1)){case 42:case 47:e:{for(De=le+1;De<zt;++De)switch(F.charCodeAt(De)){case 47:if(Z===42&&F.charCodeAt(De-1)===42&&le+2!==De){le=De+1;break e}break;case 10:if(Z===47){le=De+1;break e}}le=De}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;le++<zt&&F.charCodeAt(le)!==Z;);}if(ne===0)break;le++}switch(ne=F.substring(Te,le),ie===0&&(ie=(W=W.replace(p,"").trim()).charCodeAt(0)),ie){case 64:switch(0<Me&&(W=W.replace(x,"")),Z=W.charCodeAt(1),Z){case 100:case 109:case 115:case 45:Me=_;break;default:Me=ct}if(ne=t(_,Me,ne,Z,k+1),Te=ne.length,0<T&&(Me=n(ct,W,dn),Ft=l(3,ne,Me,_,we,ye,Te,Z,k,Q),W=Me.join(""),Ft!==void 0&&(Te=(ne=Ft.trim()).length)===0&&(Z=0,ne="")),0<Te)switch(Z){case 115:W=W.replace(L,a);case 100:case 109:case 45:ne=W+"{"+ne+"}";break;case 107:W=W.replace(c,"$1 $2"),ne=W+"{"+ne+"}",ne=he===1||he===2&&o("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=W+ne,Q===112&&(ne=(Ee+=ne,""))}else ne="";break;default:ne=t(_,n(_,W,dn),ne,Q,k+1)}Ur+=ne,ne=dn=Me=De=ie=0,W="",Z=F.charCodeAt(++le);break;case 125:case 59:if(W=(0<Me?W.replace(x,""):W).trim(),1<(Te=W.length))switch(De===0&&(ie=W.charCodeAt(0),ie===45||96<ie&&123>ie)&&(Te=(W=W.replace(" ",":")).length),0<T&&(Ft=l(1,W,_,I,we,ye,Ee.length,Q,k,Q))!==void 0&&(Te=(W=Ft.trim()).length)===0&&(W="\0\0"),ie=W.charCodeAt(0),Z=W.charCodeAt(1),ie){case 0:break;case 64:if(Z===105||Z===99){er+=W+F.charAt(le);break}default:W.charCodeAt(Te-1)!==58&&(Ee+=i(W,ie,Z,W.charCodeAt(2)))}dn=Me=De=ie=0,W="",Z=F.charCodeAt(++le)}}switch(Z){case 13:case 10:z===47?z=0:1+ie===0&&Q!==107&&0<W.length&&(Me=1,W+="\0"),0<T*j&&l(0,W,_,I,we,ye,Ee.length,Q,k,Q),ye=1,we++;break;case 59:case 125:if(z+ue+Se+te===0){ye++;break}default:switch(ye++,ot=F.charAt(le),Z){case 9:case 32:if(ue+te+z===0)switch(Pe){case 44:case 58:case 9:case 32:ot="";break;default:Z!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ue+z+te===0&&(Me=dn=1,ot="\f"+ot);break;case 108:if(ue+z+te+be===0&&0<De)switch(le-De){case 2:Pe===112&&F.charCodeAt(le-3)===58&&(be=Pe);case 8:_e===111&&(be=_e)}break;case 58:ue+z+te===0&&(De=le);break;case 44:z+Se+ue+te===0&&(Me=1,ot+="\r");break;case 34:case 39:z===0&&(ue=ue===Z?0:ue===0?Z:ue);break;case 91:ue+z+Se===0&&te++;break;case 93:ue+z+Se===0&&te--;break;case 41:ue+z+te===0&&Se--;break;case 40:if(ue+z+te===0){if(ie===0)switch(2*Pe+3*_e){case 533:break;default:ie=1}Se++}break;case 64:z+Se+ue+te+De+ne===0&&(ne=1);break;case 42:case 47:if(!(0<ue+te+Se))switch(z){case 0:switch(2*Z+3*F.charCodeAt(le+1)){case 235:z=47;break;case 220:Te=le,z=42}break;case 42:Z===47&&Pe===42&&Te+2!==le&&(F.charCodeAt(Te+2)===33&&(Ee+=F.substring(Te,le+1)),ot="",z=0)}}z===0&&(W+=ot)}_e=Pe,Pe=Z,le++}if(Te=Ee.length,0<Te){if(Me=_,0<T&&(Ft=l(2,Ee,Me,I,we,ye,Te,Q,k,Q),Ft!==void 0&&(Ee=Ft).length===0))return er+Ee+Ur;if(Ee=Me.join(",")+"{"+Ee+"}",he*be!==0){switch(he!==2||o(Ee,2)||(be=0),be){case 111:Ee=Ee.replace(S,":-moz-$1")+Ee;break;case 112:Ee=Ee.replace(g,"::-webkit-input-$1")+Ee.replace(g,"::-moz-$1")+Ee.replace(g,":-ms-input-$1")+Ee}be=0}}return er+Ee+Ur}function n(I,_,F){var Q=_.trim().split(v);_=Q;var k=Q.length,te=I.length;switch(te){case 0:case 1:var z=0;for(I=te===0?"":I[0]+" ";z<k;++z)_[z]=r(I,_[z],F).trim();break;default:var Se=z=0;for(_=[];z<k;++z)for(var ue=0;ue<te;++ue)_[Se++]=r(I[ue]+" ",Q[z],F).trim()}return _}function r(I,_,F){var Q=_.charCodeAt(0);switch(33>Q&&(Q=(_=_.trim()).charCodeAt(0)),Q){case 38:return _.replace(m,"$1"+I.trim());case 58:return I.trim()+_.replace(m,"$1"+I.trim());default:if(0<1*F&&0<_.indexOf("\f"))return _.replace(m,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+_}function i(I,_,F,Q){var k=I+";",te=2*_+3*F+4*Q;if(te===944){I=k.indexOf(":",9)+1;var z=k.substring(I,k.length-1).trim();return z=k.substring(0,I).trim()+z+";",he===1||he===2&&o(z,1)?"-webkit-"+z+z:z}if(he===0||he===2&&!o(k,1))return k;switch(te){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(xe,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return z=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+z+"-webkit-"+k+"-ms-flex-pack"+z+k;case 1005:return E.test(k)?k.replace(C,":-webkit-")+k.replace(C,":-moz-")+k:k;case 1e3:switch(z=k.substring(13).trim(),_=z.indexOf("-")+1,z.charCodeAt(0)+z.charCodeAt(_)){case 226:z=k.replace(R,"tb");break;case 232:z=k.replace(R,"tb-rl");break;case 220:z=k.replace(R,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+z+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(_=(k=I).length-10,z=(k.charCodeAt(_)===33?k.substring(0,_):k).substring(I.indexOf(":",7)+1).trim(),te=z.charCodeAt(0)+(z.charCodeAt(7)|0)){case 203:if(111>z.charCodeAt(8))break;case 115:k=k.replace(z,"-webkit-"+z)+";"+k;break;case 207:case 102:k=k.replace(z,"-webkit-"+(102<te?"inline-":"")+"box")+";"+k.replace(z,"-webkit-"+z)+";"+k.replace(z,"-ms-"+z+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return z=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+z+"-ms-flex-"+z+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(O,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(O,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(V.test(I)===!0)return(z=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?i(I.replace("stretch","fill-available"),_,F,Q).replace(":fill-available",":stretch"):k.replace(z,"-webkit-"+z)+k.replace(z,"-moz-"+z.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,F+Q===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+k}return k}function o(I,_){var F=I.indexOf(_===1?":":"{"),Q=I.substring(0,_!==3?F:10);return F=I.substring(F+1,I.length-1),J(_!==2?Q:Q.replace(ee,"$1"),F,_)}function a(I,_){var F=i(_,_.charCodeAt(0),_.charCodeAt(1),_.charCodeAt(2));return F!==_+";"?F.replace(M," or ($1)").substring(4):"("+_+")"}function l(I,_,F,Q,k,te,z,Se,ue,ie){for(var Z=0,Pe=_,_e;Z<T;++Z)switch(_e=Ve[Z].call(h,I,Pe,F,Q,k,te,z,Se,ue,ie)){case void 0:case!1:case!0:case null:break;default:Pe=_e}if(Pe!==_)return Pe}function s(I){switch(I){case void 0:case null:T=Ve.length=0;break;default:if(typeof I=="function")Ve[T++]=I;else if(typeof I=="object")for(var _=0,F=I.length;_<F;++_)s(I[_]);else j=!!I|0}return s}function d(I){return I=I.prefix,I!==void 0&&(J=null,I?typeof I!="function"?he=1:(he=2,J=I):he=0),d}function h(I,_){var F=I;if(33>F.charCodeAt(0)&&(F=F.trim()),ae=F,F=[ae],0<T){var Q=l(-1,_,F,F,we,ye,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(_=Q)}var k=t(ct,F,_,0,0);return 0<T&&(Q=l(-2,k,F,F,we,ye,k.length,0,0,0),Q!==void 0&&(k=Q)),ae="",be=0,ye=we=1,k}var p=/^\0+/g,x=/[\0\r\f]/g,C=/: */g,E=/zoo|gra/,w=/([,: ])(transform)/g,v=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,S=/:(read-only)/g,R=/[svh]\w+-[tblr]{2}/,L=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,O=/-self|flex-/g,ee=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,xe=/([^-])(image-set\()/,ye=1,we=1,be=0,he=1,ct=[],Ve=[],T=0,J=null,j=0,ae="";return h.use=s,h.set=d,e!==void 0&&d(e),h}var k0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function E0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var C0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,nc=E0(function(e){return C0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Fu=Ni,A0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_u={};_u[Fu.ForwardRef]=R0;_u[Fu.Memo]=nm;function rc(e){return Fu.isMemo(e)?nm:_u[e.$$typeof]||A0}var b0=Object.defineProperty,P0=Object.getOwnPropertyNames,ic=Object.getOwnPropertySymbols,D0=Object.getOwnPropertyDescriptor,O0=Object.getPrototypeOf,oc=Object.prototype;function rm(e,t,n){if(typeof t!="string"){if(oc){var r=O0(t);r&&r!==oc&&rm(e,r,n)}var i=P0(t);ic&&(i=i.concat(ic(t)));for(var o=rc(e),a=rc(t),l=0;l<i.length;++l){var s=i[l];if(!$0[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var d=D0(t,s);try{b0(e,s,d)}catch{}}}}return e}var L0=rm;function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ac=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ns=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ni.typeOf(e)},ia=Object.freeze([]),$n=Object.freeze({});function Nr(e){return typeof e=="function"}function lc(e){return e.displayName||e.name||"Component"}function Uu(e){return e&&typeof e.styledComponentId=="string"}var Mr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ju=typeof window<"u"&&"HTMLElement"in window,N0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),M0={};function Kn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var T0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Kn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),d=0,h=r.length;d<h;d++)this.tag.insertRule(s,r[d])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Po=new Map,oa=new Map,mi=1,so=function(e){if(Po.has(e))return Po.get(e);for(;oa.has(mi);)mi++;var t=mi++;return Po.set(e,t),oa.set(t,e),t},I0=function(e){return oa.get(e)},z0=function(e,t){t>=mi&&(mi=t+1),Po.set(e,t),oa.set(t,e)},F0="style["+Mr+'][data-styled-version="5.3.9"]',_0=new RegExp("^"+Mr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),U0=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},j0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(_0);if(l){var s=0|parseInt(l[1],10),d=l[2];s!==0&&(z0(d,s),U0(e,d,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},B0=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},im=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,d=s.length;d>=0;d--){var h=s[d];if(h&&h.nodeType===1&&h.hasAttribute(Mr))return h}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Mr,"active"),r.setAttribute("data-styled-version","5.3.9");var a=B0();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},H0=function(){function e(n){var r=this.element=im(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}Kn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),V0=function(){function e(n){var r=this.element=im(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),J0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),sc=ju,G0={isServer:!ju,useCSSOMInjection:!N0},aa=function(){function e(n,r,i){n===void 0&&(n=$n),r===void 0&&(r={}),this.options=Lt({},G0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ju&&sc&&(sc=!1,function(o){for(var a=document.querySelectorAll(F0),l=0,s=a.length;l<s;l++){var d=a[l];d&&d.getAttribute(Mr)!=="active"&&(j0(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return so(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Lt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new J0(a):o?new H0(a):new V0(a),new T0(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(so(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(so(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(so(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=I0(a);if(l!==void 0){var s=n.names.get(l),d=r.getGroup(a);if(s&&d&&s.size){var h=Mr+".g"+a+'[id="'+l+'"]',p="";s!==void 0&&s.forEach(function(x){x.length>0&&(p+=x+",")}),o+=""+d+h+'{content:"'+p+`"}/*!sc*/
`}}}return o}(this)},e}(),W0=/(a)(d)/gi,uc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ms(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=uc(t%52)+n;return(uc(t%52)+n).replace(W0,"$1-$2")}var gr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},om=function(e){return gr(5381,e)};function am(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Nr(n)&&!Uu(n))return!1}return!0}var Q0=om("5.3.9"),Y0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&am(t),this.componentId=n,this.baseHash=gr(Q0,n),this.baseStyle=r,aa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Zn(this.rules,t,n,r).join(""),l=Ms(gr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,h=gr(this.baseHash,r.hash),p="",x=0;x<d;x++){var C=this.rules[x];if(typeof C=="string")p+=C;else if(C){var E=Zn(C,t,n,r),w=Array.isArray(E)?E.join(""):E;h=gr(h,w+x),p+=w}}if(p){var v=Ms(h>>>0);if(!n.hasNameForId(i,v)){var m=r(p,"."+v,void 0,i);n.insertRules(i,v,m)}o.push(v)}}return o.join(" ")},e}(),K0=/^\s*\/\/.*$/gm,Z0=[":","[",".","#"];function X0(e){var t,n,r,i,o=e===void 0?$n:e,a=o.options,l=a===void 0?$n:a,s=o.plugins,d=s===void 0?ia:s,h=new S0(l),p=[],x=function(w){function v(m){if(m)try{w(m+"}")}catch{}}return function(m,c,g,S,R,L,M,O,ee,V){switch(m){case 1:if(ee===0&&c.charCodeAt(0)===64)return w(c+";"),"";break;case 2:if(O===0)return c+"/*|*/";break;case 3:switch(O){case 102:case 112:return w(g[0]+c),"";default:return c+(V===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(v)}}}(function(w){p.push(w)}),C=function(w,v,m){return v===0&&Z0.indexOf(m[n.length])!==-1||m.match(i)?w:"."+t};function E(w,v,m,c){c===void 0&&(c="&");var g=w.replace(K0,""),S=v&&m?m+" "+v+" { "+g+" }":g;return t=c,n=v,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(m||!v?"":v,S)}return h.use([].concat(d,[function(w,v,m){w===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,C))},x,function(w){if(w===-2){var v=p;return p=[],v}}])),E.hash=d.length?d.reduce(function(w,v){return v.name||Kn(15),gr(w,v.name)},5381).toString():"",E}var lm=tt.createContext();lm.Consumer;var sm=tt.createContext(),q0=(sm.Consumer,new aa),Ts=X0();function um(){return N.useContext(lm)||q0}function dm(){return N.useContext(sm)||Ts}var e1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ts);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Kn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ts),this.name+t.hash},e}(),t1=/([A-Z])/,n1=/([A-Z])/g,r1=/^ms-/,i1=function(e){return"-"+e.toLowerCase()};function dc(e){return t1.test(e)?e.replace(n1,i1).replace(r1,"-ms-"):e}var cc=function(e){return e==null||e===!1||e===""};function Zn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Zn(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(cc(e))return"";if(Uu(e))return"."+e.styledComponentId;if(Nr(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var s=e(t);return Zn(s,t,n,r)}var d;return e instanceof e1?n?(e.inject(n,r),e.getName(r)):e:Ns(e)?function h(p,x){var C,E,w=[];for(var v in p)p.hasOwnProperty(v)&&!cc(p[v])&&(Array.isArray(p[v])&&p[v].isCss||Nr(p[v])?w.push(dc(v)+":",p[v],";"):Ns(p[v])?w.push.apply(w,h(p[v],v)):w.push(dc(v)+": "+(C=v,(E=p[v])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||C in k0?String(E).trim():E+"px")+";"));return x?[x+" {"].concat(w,["}"]):w}(e):e.toString()}var fc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function cm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Nr(e)||Ns(e)?fc(Zn(ac(ia,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:fc(Zn(ac(e,n)))}var fm=function(e,t,n){return n===void 0&&(n=$n),e.theme!==n.theme&&e.theme||t||n.theme},o1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,a1=/(^-|-$)/g;function gl(e){return e.replace(o1,"-").replace(a1,"")}var pm=function(e){return Ms(om(e)>>>0)};function uo(e){return typeof e=="string"&&!0}var Is=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},l1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function s1(e,t,n){var r=e[n];Is(t)&&Is(r)?mm(r,t):e[n]=t}function mm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Is(a))for(var l in a)l1(l)&&s1(e,a[l],l)}return e}var Mi=tt.createContext();Mi.Consumer;function u1(e){var t=N.useContext(Mi),n=N.useMemo(function(){return function(r,i){if(!r)return Kn(14);if(Nr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Kn(8):i?Lt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?tt.createElement(Mi.Provider,{value:n},e.children):null}var vl={};function hm(e,t,n){var r=Uu(e),i=!uo(e),o=t.attrs,a=o===void 0?ia:o,l=t.componentId,s=l===void 0?function(c,g){var S=typeof c!="string"?"sc":gl(c);vl[S]=(vl[S]||0)+1;var R=S+"-"+pm("5.3.9"+S+vl[S]);return g?g+"-"+R:R}(t.displayName,t.parentComponentId):l,d=t.displayName,h=d===void 0?function(c){return uo(c)?"styled."+c:"Styled("+lc(c)+")"}(e):d,p=t.displayName&&t.componentId?gl(t.displayName)+"-"+t.componentId:t.componentId||s,x=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,C=t.shouldForwardProp;r&&e.shouldForwardProp&&(C=t.shouldForwardProp?function(c,g,S){return e.shouldForwardProp(c,g,S)&&t.shouldForwardProp(c,g,S)}:e.shouldForwardProp);var E,w=new Y0(n,p,r?e.componentStyle:void 0),v=w.isStatic&&a.length===0,m=function(c,g){return function(S,R,L,M){var O=S.attrs,ee=S.componentStyle,V=S.defaultProps,xe=S.foldedComponentIds,ye=S.shouldForwardProp,we=S.styledComponentId,be=S.target,he=function(Q,k,te){Q===void 0&&(Q=$n);var z=Lt({},k,{theme:Q}),Se={};return te.forEach(function(ue){var ie,Z,Pe,_e=ue;for(ie in Nr(_e)&&(_e=_e(z)),_e)z[ie]=Se[ie]=ie==="className"?(Z=Se[ie],Pe=_e[ie],Z&&Pe?Z+" "+Pe:Z||Pe):_e[ie]}),[z,Se]}(fm(R,N.useContext(Mi),V)||$n,R,O),ct=he[0],Ve=he[1],T=function(Q,k,te,z){var Se=um(),ue=dm(),ie=k?Q.generateAndInjectStyles($n,Se,ue):Q.generateAndInjectStyles(te,Se,ue);return ie}(ee,M,ct),J=L,j=Ve.$as||R.$as||Ve.as||R.as||be,ae=uo(j),I=Ve!==R?Lt({},R,{},Ve):R,_={};for(var F in I)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?_.as=I[F]:(ye?ye(F,nc,j):!ae||nc(F))&&(_[F]=I[F]));return R.style&&Ve.style!==R.style&&(_.style=Lt({},R.style,{},Ve.style)),_.className=Array.prototype.concat(xe,we,T!==we?T:null,R.className,Ve.className).filter(Boolean).join(" "),_.ref=J,N.createElement(j,_)}(E,c,g,v)};return m.displayName=h,(E=tt.forwardRef(m)).attrs=x,E.componentStyle=w,E.displayName=h,E.shouldForwardProp=C,E.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ia,E.styledComponentId=p,E.target=r?e.target:e,E.withComponent=function(c){var g=t.componentId,S=function(L,M){if(L==null)return{};var O,ee,V={},xe=Object.keys(L);for(ee=0;ee<xe.length;ee++)O=xe[ee],M.indexOf(O)>=0||(V[O]=L[O]);return V}(t,["componentId"]),R=g&&g+"-"+(uo(c)?c:gl(lc(c)));return hm(c,Lt({},S,{attrs:x,componentId:R}),n)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?mm({},e.defaultProps,c):c}}),Object.defineProperty(E,"toString",{value:function(){return"."+E.styledComponentId}}),i&&L0(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var zs=function(e){return function t(n,r,i){if(i===void 0&&(i=$n),!Ni.isValidElementType(r))return Kn(1,String(r));var o=function(){return n(r,i,cm.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Lt({},i,{},a))},o.attrs=function(a){return t(n,r,Lt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(hm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){zs[e]=zs(e)});var d1=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=am(n),aa.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(Zn(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&aa.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function c1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=cm.apply(void 0,[e].concat(n)),o="sc-global-"+pm(JSON.stringify(i)),a=new d1(i,o);function l(d){var h=um(),p=dm(),x=N.useContext(Mi),C=N.useRef(h.allocateGSInstance(o)).current;return h.server&&s(C,d,h,x,p),N.useLayoutEffect(function(){if(!h.server)return s(C,d,h,x,p),function(){return a.removeStyles(C,h)}},[C,d,h,x,p]),null}function s(d,h,p,x,C){if(a.isStatic)a.renderStyles(d,M0,p,C);else{var E=Lt({},h,{theme:fm(h,x,l.defaultProps)});a.renderStyles(d,E,p,C)}}return tt.memo(l)}const y=zs,f1={title:"main",fonts:{extrasmall:16,small:18,medium:20,large:26,extralarge:36},colors:{primary:{light:"#f08",normal:"#2EB2B7",dark:"#01fe87"},secondary:{light:"#E08952",normal:"#FF8233",dark:"#AD561F"},auxiliary:{success:{normal:"#34C759",dark:"#45B661"},attention:{normal:"#FFEB3B",dark:"#CCB700"},error:{normal:"#D92626",dark:"#981B1B"}},foreground:"#D9D9D9",middleground:"#f5f5f5",background:"#292E2E",text:{title:"#000",content:"#626262",highlight:"#FFF",TitleSubArticles:"#114676"}}},p1=N.createContext({}),m1=({children:e})=>{const[t,n]=N.useState(f1);return f(p1.Provider,{value:{theme:t},children:f(u1,{theme:t,children:e})})};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}var Le;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Le||(Le={}));const pc="popstate";function h1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Ti("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ln(i)}return v1(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function g1(){return Math.random().toString(36).substr(2,8)}function mc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ti(e,t,n,r){return n===void 0&&(n=null),oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?un(t):t,{state:n,key:t&&t.key||r||g1()})}function ln(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Le.Pop,s=null,d=h();d==null&&(d=0,a.replaceState(oe({},a.state,{idx:d}),""));function h(){return(a.state||{idx:null}).idx}function p(){l=Le.Pop;let v=h(),m=v==null?null:v-d;d=v,s&&s({action:l,location:w.location,delta:m})}function x(v,m){l=Le.Push;let c=Ti(w.location,v,m);n&&n(c,v),d=h()+1;let g=mc(c,d),S=w.createHref(c);try{a.pushState(g,"",S)}catch{i.location.assign(S)}o&&s&&s({action:l,location:w.location,delta:1})}function C(v,m){l=Le.Replace;let c=Ti(w.location,v,m);n&&n(c,v),d=h();let g=mc(c,d),S=w.createHref(c);a.replaceState(g,"",S),o&&s&&s({action:l,location:w.location,delta:0})}function E(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof v=="string"?v:ln(v);return q(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let w={get action(){return l},get location(){return e(i,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(pc,p),s=v,()=>{i.removeEventListener(pc,p),s=null}},createHref(v){return t(i,v)},createURL:E,encodeLocation(v){let m=E(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:C,go(v){return a.go(v)}};return w}var Ie;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ie||(Ie={}));const x1=new Set(["lazy","caseSensitive","path","id","index","children"]);function y1(e){return e.index===!0}function gm(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(q(i.index!==!0||!i.children,"Cannot specify children on an index route"),q(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),y1(i)){let s=oe({},i,{hasErrorBoundary:t(i),id:l});return r[l]=s,s}else{let s=oe({},i,{id:l,hasErrorBoundary:t(i),children:void 0});return r[l]=s,i.children&&(s.children=gm(i.children,t,a,r)),s}})}function vr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?un(t):t,i=ji(r.pathname||"/",n);if(i==null)return null;let o=vm(e);w1(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=P1(o[l],L1(i));return a}function vm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let d=tn([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),vm(o.children,t,h,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:R1(d,o.index),routesMeta:h})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of xm(o.path))i(o,a,s)}),t}function xm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=xm(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function w1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:b1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S1=/^:\w+$/,k1=3,E1=2,C1=1,A1=10,$1=-2,hc=e=>e==="*";function R1(e,t){let n=e.split("/"),r=n.length;return n.some(hc)&&(r+=$1),t&&(r+=E1),n.filter(i=>!hc(i)).reduce((i,o)=>i+(S1.test(o)?k1:o===""?C1:A1),r)}function b1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function P1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",h=D1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},d);if(!h)return null;Object.assign(r,h.params);let p=l.route;o.push({params:r,pathname:tn([i,h.pathname]),pathnameBase:I1(tn([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=tn([i,h.pathnameBase]))}return o}function D1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=O1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,h,p)=>{if(h==="*"){let x=l[p]||"";a=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}return d[h]=N1(l[p]||"",h),d},{}),pathname:o,pathnameBase:a,pattern:e}}function O1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function L1(e){try{return decodeURI(e)}catch(t){return Tr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function N1(e,t){try{return decodeURIComponent(e)}catch(n){return Tr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ji(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function M1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?un(e):e;return{pathname:n?n.startsWith("/")?n:T1(n,t):t,search:z1(r),hash:F1(i)}}function T1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ta(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=un(e):(i=oe({},e),q(!i.pathname||!i.pathname.includes("?"),xl("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),xl("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),xl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let p=t.length-1;if(a.startsWith("..")){let x=a.split("/");for(;x[0]==="..";)x.shift(),p-=1;i.pathname=x.join("/")}l=p>=0?t[p]:"/"}let s=M1(i,l),d=a&&a!=="/"&&a.endsWith("/"),h=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(d||h)&&(s.pathname+="/"),s}const tn=e=>e.join("/").replace(/\/\/+/g,"/"),I1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),z1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,F1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Hu{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ym(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wm=["post","put","patch","delete"],_1=new Set(wm),U1=["get",...wm],j1=new Set(U1),B1=new Set([301,302,303,307,308]),H1=new Set([307,308]),yl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},V1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},gc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",J1=!km,G1=e=>!!e.hasErrorBoundary;function W1(e){q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||G1,n={},r=gm(e.routes,t,void 0,n),i,o=oe({v7_normalizeFormMethod:!1},e.future),a=null,l=new Set,s=null,d=null,h=null,p=e.hydrationData!=null,x=vr(r,e.history.location,e.basename),C=null;if(x==null){let A=Bt(404,{pathname:e.history.location.pathname}),{matches:$,route:P}=Ec(r);x=$,C={[P.id]:A}}let E=!x.some(A=>A.route.lazy)&&(!x.some(A=>A.route.loader)||e.hydrationData!=null),w,v={historyAction:e.history.action,location:e.history.location,matches:x,initialized:E,navigation:yl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},m=Le.Pop,c=!1,g,S=!1,R=!1,L=[],M=[],O=new Map,ee=0,V=-1,xe=new Map,ye=new Set,we=new Map,be=new Map,he=new Map,ct=!1;function Ve(){return a=e.history.listen(A=>{let{action:$,location:P,delta:B}=A;if(ct){ct=!1;return}Tr(he.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=ot({currentLocation:v.location,nextLocation:P,historyAction:$});if(H&&B!=null){ct=!0,e.history.go(B*-1),zt(H,{state:"blocked",location:P,proceed(){zt(H,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),e.history.go(B)},reset(){It(H),j({blockers:new Map(w.state.blockers)})}});return}return F($,P)}),v.initialized||F(Le.Pop,v.location),w}function T(){a&&a(),l.clear(),g&&g.abort(),v.fetchers.forEach((A,$)=>ne($)),v.blockers.forEach((A,$)=>It($))}function J(A){return l.add(A),()=>l.delete(A)}function j(A){v=oe({},v,A),l.forEach($=>$(v))}function ae(A,$){var P,B;let H=v.actionData!=null&&v.navigation.formMethod!=null&&Kt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((P=A.state)==null?void 0:P._isRedirect)!==!0,Y;$.actionData?Object.keys($.actionData).length>0?Y=$.actionData:Y=null:H?Y=v.actionData:Y=null;let K=$.loaderData?kc(v.loaderData,$.loaderData,$.matches||[],$.errors):v.loaderData;for(let[G]of he)It(G);let X=c===!0||v.navigation.formMethod!=null&&Kt(v.navigation.formMethod)&&((B=A.state)==null?void 0:B._isRedirect)!==!0;i&&(r=i,i=void 0),j(oe({},$,{actionData:Y,loaderData:K,historyAction:m,location:A,initialized:!0,navigation:yl,revalidation:"idle",restoreScrollPosition:er(A,$.matches||v.matches),preventScrollReset:X,blockers:new Map(v.blockers)})),S||m===Le.Pop||(m===Le.Push?e.history.push(A,A.state):m===Le.Replace&&e.history.replace(A,A.state)),m=Le.Pop,c=!1,S=!1,R=!1,L=[],M=[]}async function I(A,$){if(typeof A=="number"){e.history.go(A);return}let{path:P,submission:B,error:H}=vc(A,o,$),Y=v.location,K=Ti(v.location,P,$&&$.state);K=oe({},K,e.history.encodeLocation(K));let X=$&&$.replace!=null?$.replace:void 0,G=Le.Push;X===!0?G=Le.Replace:X===!1||B!=null&&Kt(B.formMethod)&&B.formAction===v.location.pathname+v.location.search&&(G=Le.Replace);let pe=$&&"preventScrollReset"in $?$.preventScrollReset===!0:void 0,de=ot({currentLocation:Y,nextLocation:K,historyAction:G});if(de){zt(de,{state:"blocked",location:K,proceed(){zt(de,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),I(A,$)},reset(){It(de),j({blockers:new Map(v.blockers)})}});return}return await F(G,K,{submission:B,pendingError:H,preventScrollReset:pe,replace:$&&$.replace})}function _(){if(Pe(),j({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){F(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}F(m||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function F(A,$,P){g&&g.abort(),g=null,m=A,S=(P&&P.startUninterruptedRevalidation)===!0,Ur(v.location,v.matches),c=(P&&P.preventScrollReset)===!0;let B=i||r,H=P&&P.overrideNavigation,Y=vr(B,$,e.basename);if(!Y){let Ue=Bt(404,{pathname:$.pathname}),{matches:Je,route:$t}=Ec(B);W(),ae($,{matches:Je,loaderData:{},errors:{[$t.id]:Ue}});return}if(X1(v.location,$)&&!(P&&P.submission&&Kt(P.submission.formMethod))){ae($,{matches:Y});return}g=new AbortController;let K=qr(e.history,$,g.signal,P&&P.submission),X,G;if(P&&P.pendingError)G={[xr(Y).route.id]:P.pendingError};else if(P&&P.submission&&Kt(P.submission.formMethod)){let Ue=await Q(K,$,P.submission,Y,{replace:P.replace});if(Ue.shortCircuited)return;X=Ue.pendingActionData,G=Ue.pendingActionError,H=oe({state:"loading",location:$},P.submission),K=new Request(K.url,{signal:K.signal})}let{shortCircuited:pe,loaderData:de,errors:At}=await k(K,$,Y,H,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,X,G);pe||(g=null,ae($,oe({matches:Y},X?{actionData:X}:{},{loaderData:de,errors:At})))}async function Q(A,$,P,B,H){Pe();let Y=oe({state:"submitting",location:$},P);j({navigation:Y});let K,X=Fs(B,$);if(!X.route.action&&!X.route.lazy)K={type:Ie.error,error:Bt(405,{method:A.method,pathname:$.pathname,routeId:X.route.id})};else if(K=await Xr("action",A,X,B,n,t,w.basename),A.signal.aborted)return{shortCircuited:!0};if(Ar(K)){let G;return H&&H.replace!=null?G=H.replace:G=K.location===v.location.pathname+v.location.search,await ie(v,K,{submission:P,replace:G}),{shortCircuited:!0}}if(hi(K)){let G=xr(B,X.route.id);return(H&&H.replace)!==!0&&(m=Le.Push),{pendingActionData:{},pendingActionError:{[G.route.id]:K.error}}}if(Bn(K))throw Bt(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:K.data}}}async function k(A,$,P,B,H,Y,K,X,G){let pe=B;pe||(pe=oe({state:"loading",location:$,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},H));let de=H||Y?H||Y:pe.formMethod&&pe.formAction&&pe.formData&&pe.formEncType?{formMethod:pe.formMethod,formAction:pe.formAction,formData:pe.formData,formEncType:pe.formEncType}:void 0,At=i||r,[Ue,Je]=xc(e.history,v,P,de,$,R,L,M,we,At,e.basename,X,G);if(W(Ye=>!(P&&P.some(Rt=>Rt.route.id===Ye))||Ue&&Ue.some(Rt=>Rt.route.id===Ye)),Ue.length===0&&Je.length===0)return ae($,oe({matches:P,loaderData:{},errors:G||null},X?{actionData:X}:{})),{shortCircuited:!0};if(!S){Je.forEach(Rt=>{let Nn=v.fetchers.get(Rt.key),Hr={state:"loading",data:Nn&&Nn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Rt.key,Hr)});let Ye=X||v.actionData;j(oe({navigation:pe},Ye?Object.keys(Ye).length===0?{actionData:null}:{actionData:Ye}:{},Je.length>0?{fetchers:new Map(v.fetchers)}:{}))}V=++ee,Je.forEach(Ye=>O.set(Ye.key,g));let{results:$t,loaderResults:jr,fetcherResults:Ua}=await Z(v.matches,P,Ue,Je,A);if(A.signal.aborted)return{shortCircuited:!0};Je.forEach(Ye=>O.delete(Ye.key));let Br=Cc($t);if(Br)return await ie(v,Br,{replace:K}),{shortCircuited:!0};let{loaderData:tr,errors:ja}=Sc(v,P,Ue,jr,G,Je,Ua,be);be.forEach((Ye,Rt)=>{Ye.subscribe(Nn=>{(Nn||Ye.done)&&be.delete(Rt)})}),Me();let Ba=dn(V);return oe({loaderData:tr,errors:ja},Ba||Je.length>0?{fetchers:new Map(v.fetchers)}:{})}function te(A){return v.fetchers.get(A)||V1}function z(A,$,P,B){if(J1)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");O.has(A)&&De(A);let Y=vr(i||r,P,e.basename);if(!Y){_e(A,$,Bt(404,{pathname:P}));return}let{path:K,submission:X}=vc(P,o,B,!0),G=Fs(Y,K);if(c=(B&&B.preventScrollReset)===!0,X&&Kt(X.formMethod)){Se(A,$,K,G,Y,X);return}we.set(A,{routeId:$,path:K}),ue(A,$,K,G,Y,X)}async function Se(A,$,P,B,H,Y){if(Pe(),we.delete(A),!B.route.action&&!B.route.lazy){let Qt=Bt(405,{method:Y.formMethod,pathname:P,routeId:$});_e(A,$,Qt);return}let K=v.fetchers.get(A),X=oe({state:"submitting"},Y,{data:K&&K.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(A,X),j({fetchers:new Map(v.fetchers)});let G=new AbortController,pe=qr(e.history,P,G.signal,Y);O.set(A,G);let de=await Xr("action",pe,B,H,n,t,w.basename);if(pe.signal.aborted){O.get(A)===G&&O.delete(A);return}if(Ar(de)){O.delete(A),ye.add(A);let Qt=oe({state:"loading"},Y,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(A,Qt),j({fetchers:new Map(v.fetchers)}),ie(v,de,{submission:Y,isFetchActionRedirect:!0})}if(hi(de)){_e(A,$,de.error);return}if(Bn(de))throw Bt(400,{type:"defer-action"});let At=v.navigation.location||v.location,Ue=qr(e.history,At,G.signal),Je=i||r,$t=v.navigation.state!=="idle"?vr(Je,v.navigation.location,e.basename):v.matches;q($t,"Didn't find any matches after fetcher action");let jr=++ee;xe.set(A,jr);let Ua=oe({state:"loading",data:de.data},Y,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(A,Ua);let[Br,tr]=xc(e.history,v,$t,Y,At,R,L,M,we,Je,e.basename,{[B.route.id]:de.data},void 0);tr.filter(Qt=>Qt.key!==A).forEach(Qt=>{let Ha=Qt.key,Gu=v.fetchers.get(Ha),_m={state:"loading",data:Gu&&Gu.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Ha,_m),O.set(Ha,G)}),j({fetchers:new Map(v.fetchers)});let{results:ja,loaderResults:Ba,fetcherResults:Ye}=await Z(v.matches,$t,Br,tr,Ue);if(G.signal.aborted)return;xe.delete(A),O.delete(A),tr.forEach(Qt=>O.delete(Qt.key));let Rt=Cc(ja);if(Rt)return ie(v,Rt);let{loaderData:Nn,errors:Hr}=Sc(v,v.matches,Br,Ba,void 0,tr,Ye,be),zm={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(A,zm);let Fm=dn(jr);v.navigation.state==="loading"&&jr>V?(q(m,"Expected pending action"),g&&g.abort(),ae(v.navigation.location,{matches:$t,loaderData:Nn,errors:Hr,fetchers:new Map(v.fetchers)})):(j(oe({errors:Hr,loaderData:kc(v.loaderData,Nn,$t,Hr)},Fm?{fetchers:new Map(v.fetchers)}:{})),R=!1)}async function ue(A,$,P,B,H,Y){let K=v.fetchers.get(A),X=oe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Y,{data:K&&K.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(A,X),j({fetchers:new Map(v.fetchers)});let G=new AbortController,pe=qr(e.history,P,G.signal);O.set(A,G);let de=await Xr("loader",pe,B,H,n,t,w.basename);if(Bn(de)&&(de=await $m(de,pe.signal,!0)||de),O.get(A)===G&&O.delete(A),pe.signal.aborted)return;if(Ar(de)){await ie(v,de);return}if(hi(de)){let Ue=xr(v.matches,$);v.fetchers.delete(A),j({fetchers:new Map(v.fetchers),errors:{[Ue.route.id]:de.error}});return}q(!Bn(de),"Unhandled fetcher deferred data");let At={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(A,At),j({fetchers:new Map(v.fetchers)})}async function ie(A,$,P){var B;let{submission:H,replace:Y,isFetchActionRedirect:K}=P===void 0?{}:P;$.revalidate&&(R=!0);let X=Ti(A.location,$.location,oe({_isRedirect:!0},K?{_isFetchActionRedirect:!0}:{}));if(q(X,"Expected a location on the redirect navigation"),Sm.test($.location)&&km&&typeof((B=window)==null?void 0:B.location)<"u"){let Je=e.history.createURL($.location),$t=ji(Je.pathname,e.basename||"/")==null;if(window.location.origin!==Je.origin||$t){Y?window.location.replace($.location):window.location.assign($.location);return}}g=null;let G=Y===!0?Le.Replace:Le.Push,{formMethod:pe,formAction:de,formEncType:At,formData:Ue}=A.navigation;!H&&pe&&de&&Ue&&At&&(H={formMethod:pe,formAction:de,formEncType:At,formData:Ue}),H1.has($.status)&&H&&Kt(H.formMethod)?await F(G,X,{submission:oe({},H,{formAction:$.location}),preventScrollReset:c}):K?await F(G,X,{overrideNavigation:{state:"loading",location:X,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:H,preventScrollReset:c}):await F(G,X,{overrideNavigation:{state:"loading",location:X,formMethod:H?H.formMethod:void 0,formAction:H?H.formAction:void 0,formEncType:H?H.formEncType:void 0,formData:H?H.formData:void 0},preventScrollReset:c})}async function Z(A,$,P,B,H){let Y=await Promise.all([...P.map(G=>Xr("loader",H,G,$,n,t,w.basename)),...B.map(G=>G.matches&&G.match?Xr("loader",qr(e.history,G.path,H.signal),G.match,G.matches,n,t,w.basename):{type:Ie.error,error:Bt(404,{pathname:G.path})})]),K=Y.slice(0,P.length),X=Y.slice(P.length);return await Promise.all([Ac(A,P,K,H.signal,!1,v.loaderData),Ac(A,B.map(G=>G.match),X,H.signal,!0)]),{results:Y,loaderResults:K,fetcherResults:X}}function Pe(){R=!0,L.push(...W()),we.forEach((A,$)=>{O.has($)&&(M.push($),De($))})}function _e(A,$,P){let B=xr(v.matches,$);ne(A),j({errors:{[B.route.id]:P},fetchers:new Map(v.fetchers)})}function ne(A){O.has(A)&&De(A),we.delete(A),xe.delete(A),ye.delete(A),v.fetchers.delete(A)}function De(A){let $=O.get(A);q($,"Expected fetch controller: "+A),$.abort(),O.delete(A)}function le(A){for(let $ of A){let B={state:"idle",data:te($).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set($,B)}}function Me(){let A=[];for(let $ of ye){let P=v.fetchers.get($);q(P,"Expected fetcher: "+$),P.state==="loading"&&(ye.delete($),A.push($))}le(A)}function dn(A){let $=[];for(let[P,B]of xe)if(B<A){let H=v.fetchers.get(P);q(H,"Expected fetcher: "+P),H.state==="loading"&&(De(P),xe.delete(P),$.push(P))}return le($),$.length>0}function Te(A,$){let P=v.blockers.get(A)||gc;return he.get(A)!==$&&he.set(A,$),P}function It(A){v.blockers.delete(A),he.delete(A)}function zt(A,$){let P=v.blockers.get(A)||gc;q(P.state==="unblocked"&&$.state==="blocked"||P.state==="blocked"&&$.state==="blocked"||P.state==="blocked"&&$.state==="proceeding"||P.state==="blocked"&&$.state==="unblocked"||P.state==="proceeding"&&$.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+$.state),v.blockers.set(A,$),j({blockers:new Map(v.blockers)})}function ot(A){let{currentLocation:$,nextLocation:P,historyAction:B}=A;if(he.size===0)return;he.size>1&&Tr(!1,"A router only supports one blocker at a time");let H=Array.from(he.entries()),[Y,K]=H[H.length-1],X=v.blockers.get(Y);if(!(X&&X.state==="proceeding")&&K({currentLocation:$,nextLocation:P,historyAction:B}))return Y}function W(A){let $=[];return be.forEach((P,B)=>{(!A||A(B))&&(P.cancel(),$.push(B),be.delete(B))}),$}function Ee(A,$,P){if(s=A,h=$,d=P||(B=>B.key),!p&&v.navigation===yl){p=!0;let B=er(v.location,v.matches);B!=null&&j({restoreScrollPosition:B})}return()=>{s=null,h=null,d=null}}function Ur(A,$){if(s&&d&&h){let P=$.map(H=>$c(H,v.loaderData)),B=d(A,P)||A.key;s[B]=h()}}function er(A,$){if(s&&d&&h){let P=$.map(Y=>$c(Y,v.loaderData)),B=d(A,P)||A.key,H=s[B];if(typeof H=="number")return H}return null}function Ft(A){i=A}return w={get basename(){return e.basename},get state(){return v},get routes(){return r},initialize:Ve,subscribe:J,enableScrollRestoration:Ee,navigate:I,fetch:z,revalidate:_,createHref:A=>e.history.createHref(A),encodeLocation:A=>e.history.encodeLocation(A),getFetcher:te,deleteFetcher:ne,dispose:T,getBlocker:Te,deleteBlocker:It,_internalFetchControllers:O,_internalActiveDeferreds:be,_internalSetRoutes:Ft},w}function Q1(e){return e!=null&&"formData"in e}function vc(e,t,n,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:ln(e);if(!n||!Q1(n))return{path:i};if(n.formMethod&&!tv(n.formMethod))return{path:i,error:Bt(405,{method:n.formMethod})};let o;if(n.formData){let s=n.formMethod||"get";if(o={formMethod:t.v7_normalizeFormMethod?s.toUpperCase():s.toLowerCase(),formAction:Am(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Kt(o.formMethod))return{path:i,submission:o}}let a=un(i),l=Cm(n.formData);return r&&a.search&&Rm(a.search)&&l.append("index",""),a.search="?"+l,{path:ln(a),submission:o}}function Y1(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function xc(e,t,n,r,i,o,a,l,s,d,h,p,x){let C=x?Object.values(x)[0]:p?Object.values(p)[0]:void 0,E=e.createURL(t.location),w=e.createURL(i),v=o||E.toString()===w.toString()||E.search!==w.search,m=x?Object.keys(x)[0]:void 0,g=Y1(n,m).filter((R,L)=>{if(R.route.lazy)return!0;if(R.route.loader==null)return!1;if(K1(t.loaderData,t.matches[L],R)||a.some(ee=>ee===R.route.id))return!0;let M=t.matches[L],O=R;return yc(R,oe({currentUrl:E,currentParams:M.params,nextUrl:w,nextParams:O.params},r,{actionResult:C,defaultShouldRevalidate:v||Em(M,O)}))}),S=[];return s.forEach((R,L)=>{if(!n.some(V=>V.route.id===R.routeId))return;let M=vr(d,R.path,h);if(!M){S.push(oe({key:L},R,{matches:null,match:null}));return}let O=Fs(M,R.path);if(l.includes(L)){S.push(oe({key:L,matches:M,match:O},R));return}yc(O,oe({currentUrl:E,currentParams:t.matches[t.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:C,defaultShouldRevalidate:v}))&&S.push(oe({key:L,matches:M,match:O},R))}),[g,S]}function K1(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Em(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function yc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function wc(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];q(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";Tr(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!x1.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(oe({},i)),lazy:void 0})}async function Xr(e,t,n,r,i,o,a,l,s,d){a===void 0&&(a="/"),l===void 0&&(l=!1),s===void 0&&(s=!1);let h,p,x,C=v=>{let m,c=new Promise((g,S)=>m=S);return x=()=>m(),t.signal.addEventListener("abort",x),Promise.race([v({request:t,params:n.params,context:d}),c])};try{let v=n.route[e];if(n.route.lazy)if(v)p=(await Promise.all([C(v),wc(n.route,o,i)]))[0];else if(await wc(n.route,o,i),v=n.route[e],v)p=await C(v);else{if(e==="action")throw Bt(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:Ie.data,data:void 0}}else q(v,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),p=await C(v);q(p!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(v){h=Ie.error,p=v}finally{x&&t.signal.removeEventListener("abort",x)}if(ev(p)){let v=p.status;if(B1.has(v)){let g=p.headers.get("Location");if(q(g,"Redirects returned/thrown from loaders/actions must have a Location header"),Sm.test(g)){if(!l){let S=new URL(t.url),R=g.startsWith("//")?new URL(S.protocol+g):new URL(g),L=ji(R.pathname,a)!=null;R.origin===S.origin&&L&&(g=R.pathname+R.search+R.hash)}}else{let S=r.slice(0,r.indexOf(n)+1),R=Ta(S).map(M=>M.pathnameBase),L=Bu(g,R,new URL(t.url).pathname);if(q(ln(L),"Unable to resolve redirect location: "+g),a){let M=L.pathname;L.pathname=M==="/"?a:tn([a,M])}g=ln(L)}if(l)throw p.headers.set("Location",g),p;return{type:Ie.redirect,status:v,location:g,revalidate:p.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:h||Ie.data,response:p};let m,c=p.headers.get("Content-Type");return c&&/\bapplication\/json\b/.test(c)?m=await p.json():m=await p.text(),h===Ie.error?{type:h,error:new Hu(v,p.statusText,m),headers:p.headers}:{type:Ie.data,data:m,statusCode:p.status,headers:p.headers}}if(h===Ie.error)return{type:h,error:p};if(q1(p)){var E,w;return{type:Ie.deferred,deferredData:p,statusCode:(E=p.init)==null?void 0:E.status,headers:((w=p.init)==null?void 0:w.headers)&&new Headers(p.init.headers)}}return{type:Ie.data,data:p}}function qr(e,t,n,r){let i=e.createURL(Am(t)).toString(),o={signal:n};if(r&&Kt(r.formMethod)){let{formMethod:a,formEncType:l,formData:s}=r;o.method=a.toUpperCase(),o.body=l==="application/x-www-form-urlencoded"?Cm(s):s}return new Request(i,o)}function Cm(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function Z1(e,t,n,r,i){let o={},a=null,l,s=!1,d={};return n.forEach((h,p)=>{let x=t[p].route.id;if(q(!Ar(h),"Cannot handle redirect results in processLoaderData"),hi(h)){let C=xr(e,x),E=h.error;r&&(E=Object.values(r)[0],r=void 0),a=a||{},a[C.route.id]==null&&(a[C.route.id]=E),o[x]=void 0,s||(s=!0,l=ym(h.error)?h.error.status:500),h.headers&&(d[x]=h.headers)}else Bn(h)?(i.set(x,h.deferredData),o[x]=h.deferredData.data):o[x]=h.data,h.statusCode!=null&&h.statusCode!==200&&!s&&(l=h.statusCode),h.headers&&(d[x]=h.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:d}}function Sc(e,t,n,r,i,o,a,l){let{loaderData:s,errors:d}=Z1(t,n,r,i,l);for(let h=0;h<o.length;h++){let{key:p,match:x}=o[h];q(a!==void 0&&a[h]!==void 0,"Did not find corresponding fetcher result");let C=a[h];if(hi(C)){let E=xr(e.matches,x==null?void 0:x.route.id);d&&d[E.route.id]||(d=oe({},d,{[E.route.id]:C.error})),e.fetchers.delete(p)}else if(Ar(C))q(!1,"Unhandled fetcher revalidation redirect");else if(Bn(C))q(!1,"Unhandled fetcher deferred data");else{let E={state:"idle",data:C.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(p,E)}}return{loaderData:s,errors:d}}function kc(e,t,n,r){let i=oe({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function xr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Ec(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Bt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Hu(e||500,a,new Error(l),!0)}function Cc(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ar(n))return n}}function Am(e){let t=typeof e=="string"?un(e):e;return ln(oe({},t,{hash:""}))}function X1(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Bn(e){return e.type===Ie.deferred}function hi(e){return e.type===Ie.error}function Ar(e){return(e&&e.type)===Ie.redirect}function q1(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function ev(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function tv(e){return j1.has(e.toLowerCase())}function Kt(e){return _1.has(e.toLowerCase())}async function Ac(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let d=e.find(p=>p.route.id===s.route.id),h=d!=null&&!Em(d,s)&&(o&&o[s.route.id])!==void 0;Bn(l)&&(i||h)&&await $m(l,r,i).then(p=>{p&&(n[a]=p||n[a])})}}async function $m(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ie.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Ie.error,error:i}}return{type:Ie.data,data:e.deferredData.data}}}function Rm(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function $c(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Fs(e,t){let n=typeof t=="string"?un(t).search:t.search;if(e[e.length-1].route.index&&Rm(n||""))return e[e.length-1];let r=Ta(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const rv=typeof Object.is=="function"?Object.is:nv,{useState:iv,useEffect:ov,useLayoutEffect:av,useDebugValue:lv}=zl;function sv(e,t,n){const r=t(),[{inst:i},o]=iv({inst:{value:r,getSnapshot:t}});return av(()=>{i.value=r,i.getSnapshot=t,wl(i)&&o({inst:i})},[e,r,t]),ov(()=>(wl(i)&&o({inst:i}),e(()=>{wl(i)&&o({inst:i})})),[e]),lv(r),r}function wl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!rv(n,r)}catch{return!0}}function uv(e,t,n){return t()}const dv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cv=!dv,fv=cv?uv:sv,pv="useSyncExternalStore"in zl?(e=>e.useSyncExternalStore)(zl):fv,Vu=N.createContext(null),Ju=N.createContext(null),Bi=N.createContext(null),Ia=N.createContext(null),_r=N.createContext({outlet:null,matches:[]}),bm=N.createContext(null);function _s(){return _s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_s.apply(this,arguments)}function mv(e,t){let{relative:n}=t===void 0?{}:t;Hi()||q(!1);let{basename:r,navigator:i}=N.useContext(Bi),{hash:o,pathname:a,search:l}=Dm(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:tn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Hi(){return N.useContext(Ia)!=null}function za(){return Hi()||q(!1),N.useContext(Ia).location}function Pm(){Hi()||q(!1);let{basename:e,navigator:t}=N.useContext(Bi),{matches:n}=N.useContext(_r),{pathname:r}=za(),i=JSON.stringify(Ta(n).map(l=>l.pathnameBase)),o=N.useRef(!1);return N.useEffect(()=>{o.current=!0}),N.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=Bu(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:tn([e,d.pathname])),(s.replace?t.replace:t.push)(d,s.state,s)},[e,t,i,r])}function Dm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=N.useContext(_r),{pathname:i}=za(),o=JSON.stringify(Ta(r).map(a=>a.pathnameBase));return N.useMemo(()=>Bu(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function hv(e,t){Hi()||q(!1);let{navigator:n}=N.useContext(Bi),r=N.useContext(Ju),{matches:i}=N.useContext(_r),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=za(),d;if(t){var h;let w=typeof t=="string"?un(t):t;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||q(!1),d=w}else d=s;let p=d.pathname||"/",x=l==="/"?p:p.slice(l.length)||"/",C=vr(e,{pathname:x}),E=yv(C&&C.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:tn([l,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:tn([l,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&E?N.createElement(Ia.Provider,{value:{location:_s({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Le.Pop}},E):E}function gv(){let e=Ev(),t=ym(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,o)}class vv extends N.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?N.createElement(_r.Provider,{value:this.props.routeContext},N.createElement(bm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xv(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(Vu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(_r.Provider,{value:t},r)}function yv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||q(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,d=null;n&&(a.route.ErrorBoundary?d=N.createElement(a.route.ErrorBoundary,null):a.route.errorElement?d=a.route.errorElement:d=N.createElement(gv,null));let h=t.concat(r.slice(0,l+1)),p=()=>{let x=o;return s?x=d:a.route.Component?x=N.createElement(a.route.Component,null):a.route.element&&(x=a.route.element),N.createElement(xv,{match:a,routeContext:{outlet:o,matches:h},children:x})};return n&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?N.createElement(vv,{location:n.location,component:d,error:s,children:p(),routeContext:{outlet:null,matches:h}}):p()},null)}var Rc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Rc||(Rc={}));var la;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(la||(la={}));function wv(e){let t=N.useContext(Ju);return t||q(!1),t}function Sv(e){let t=N.useContext(_r);return t||q(!1),t}function kv(e){let t=Sv(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function Ev(){var e;let t=N.useContext(bm),n=wv(la.UseRouteError),r=kv(la.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Cv(e){let{fallbackElement:t,router:n}=e,r=N.useCallback(()=>n.state,[n]),i=pv(n.subscribe,r,r),o=N.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,d,h)=>n.navigate(s,{state:d,preventScrollReset:h==null?void 0:h.preventScrollReset}),replace:(s,d,h)=>n.navigate(s,{replace:!0,state:d,preventScrollReset:h==null?void 0:h.preventScrollReset})}),[n]),a=n.basename||"/",l=N.useMemo(()=>({router:n,navigator:o,static:!1,basename:a}),[n,o,a]);return N.createElement(N.Fragment,null,N.createElement(Vu.Provider,{value:l},N.createElement(Ju.Provider,{value:i},N.createElement($v,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?N.createElement(Rv,null):t))),null)}function Av(e){q(!1)}function $v(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Le.Pop,navigator:o,static:a=!1}=e;Hi()&&q(!1);let l=t.replace(/^\/*/,"/"),s=N.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=un(r));let{pathname:d="/",search:h="",hash:p="",state:x=null,key:C="default"}=r,E=N.useMemo(()=>{let w=ji(d,l);return w==null?null:{location:{pathname:w,search:h,hash:p,state:x,key:C},navigationType:i}},[l,d,h,p,x,C,i]);return E==null?null:N.createElement(Bi.Provider,{value:s},N.createElement(Ia.Provider,{children:n,value:E}))}function Rv(e){let{children:t,location:n}=e,r=N.useContext(Vu),i=r&&!t?r.router.routes:Us(t);return hv(i,n)}var bc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(bc||(bc={}));new Promise(()=>{});function Us(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let o=[...t,i];if(r.type===N.Fragment){n.push.apply(n,Us(r.props.children,o));return}r.type!==Av&&q(!1),!r.props.index||!r.props.children||q(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Us(r.props.children,o)),n.push(a)}),n}function bv(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}function Pv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Dv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ov(e,t){return e.button===0&&(!t||t==="_self")&&!Dv(e)}const Lv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Nv(e,t){return W1({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:h1({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Mv(),routes:e,detectErrorBoundary:bv}).initialize()}function Mv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=sa({},t,{errors:Tv(t.errors)})),t}function Tv(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Hu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const Iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Om=N.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:d,preventScrollReset:h}=t,p=Pv(t,Lv),{basename:x}=N.useContext(Bi),C,E=!1;if(typeof d=="string"&&zv.test(d)&&(C=d,Iv)){let c=new URL(window.location.href),g=d.startsWith("//")?new URL(c.protocol+d):new URL(d),S=ji(g.pathname,x);g.origin===c.origin&&S!=null?d=S+g.search+g.hash:E=!0}let w=mv(d,{relative:i}),v=Fv(d,{replace:a,state:l,target:s,preventScrollReset:h,relative:i});function m(c){r&&r(c),c.defaultPrevented||v(c)}return N.createElement("a",sa({},p,{href:C||w,onClick:E||o?r:m,ref:n,target:s}))});var Pc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Pc||(Pc={}));var Dc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dc||(Dc={}));function Fv(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Pm(),s=za(),d=Dm(e,{relative:a});return N.useCallback(h=>{if(Ov(h,n)){h.preventDefault();let p=r!==void 0?r:ln(s)===ln(d);l(e,{replace:p,state:i,preventScrollReset:o,relative:a})}},[s,l,d,r,i,n,e,o,a])}const _v=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Uv="/Nanofab-Project/assets/microscopio-02614e2c.svg",jv="/Nanofab-Project/assets/mol-3565b3ed.svg",u={mobile:"390px",largeMobile:"391px",tablet:"819px",notebook:"1023px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Bv=y.div`
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
  
`,Hv=y.div`
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

`,Vv=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;y.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({theme:e})=>e.colors.foreground};
  padding-right: 25px;
`;const Jv=y.img`
  padding-left: 15px;
  width: 150px;

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 400px;
  }
`,Gv="/Nanofab-Project/assets/nanofab-c5546f6e.png",Wv="/Nanofab-Project/assets/background-1f899db0.svg",Qv=y.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${Wv});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`,Yv=y.div`
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
`,Kv=y.img`
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
`,Zv=y.img`
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
    width: 500px;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,Xv=y.img`
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
`,qv=y.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ex=y.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,tx=y.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,nx="/Nanofab-Project/assets/logo-uerj-a13c7853.png",rx="/Nanofab-Project/assets/nanofab-lab-8dc5e917.png",ix="/Nanofab-Project/assets/LogoPPGEM-white-fd88f51e.png",ox=({})=>f(Qv,{children:b(Yv,{children:[f(qv,{children:f(Xv,{src:nx})}),f(ex,{children:f(Zv,{src:rx})}),f(tx,{children:f(Kv,{src:ix})})]})}),ax=y.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 1299px) {    
    display: none;
  }
`,lx=y.a`
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
`,sx=y(Om)`
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
`,ux=({name:e,url:t})=>f(lx,{children:f(sx,{to:t,children:e})}),dx=({urls:e})=>f(ax,{children:e.map(t=>f(ux,{name:t.name,url:t.url},e.indexOf(t)))}),cx=y.nav`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 1300px) {    
        display: none;
    }
`,rr=y(Om)`
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
`,fx=y.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,px=y.nav`
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
`;var Lm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Oc=tt.createContext&&tt.createContext(Lm),Rn=globalThis&&globalThis.__assign||function(){return Rn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Rn.apply(this,arguments)},mx=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Nm(e){return e&&e.map(function(t,n){return tt.createElement(t.tag,Rn({key:n},t.attr),Nm(t.child))})}function Vi(e){return function(t){return tt.createElement(hx,Rn({attr:Rn({},e.attr)},t),Nm(e.child))}}function hx(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=mx(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),tt.createElement("svg",Rn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:Rn(Rn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&tt.createElement("title",null,o),e.children)};return Oc!==void 0?tt.createElement(Oc.Consumer,null,function(n){return t(n)}):t(Lm)}function gx(e){return Vi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(e)}function vx(e){return Vi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(e)}function xx(e){return Vi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"}},{tag:"path",attr:{d:"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"}}]})(e)}const yx=()=>{const[e,t]=N.useState(!1);return b(cx,{children:[f(fx,{onClick:()=>t(!e),children:e?f(gx,{size:40}):f(vx,{size:40})}),e?b(px,{children:[f(rr,{to:"/",onClick:()=>t(!1),children:"Home"}),f(rr,{to:"/equipe",onClick:()=>t(!1),children:"Equipe"}),f(rr,{to:"/andamento",onClick:()=>t(!1),children:"Andamento"}),f(rr,{to:"/submissao_projetos",onClick:()=>t(!1),children:"Submissão de Projetos"}),f(rr,{to:"/publicacoes",onClick:()=>t(!1),children:"Publicações"}),f(rr,{to:"/parcerias",onClick:()=>t(!1),children:"Parcerias"})]}):null]})},wx=y.div`
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
`,Sx=y.span`
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
`,kx=y(xx)`
  font-size: 38px;

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {     
   font-size: 48px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: 60px;   
  }
`,Ex=({})=>{const e=Pm();return b(wx,{onClick:()=>e("/Login"),children:[f(Sx,{children:"Entrar"}),f(kx,{})]})},Gt=({})=>b(Bv,{children:[b(Hv,{children:[f(yx,{}),f(Jv,{src:Gv}),b(Vv,{children:[f(dx,{urls:[{name:"Home",url:"/"},{name:"Equipe",url:"/equipe"},{name:"Andamento",url:"/andamento"},{name:"Submissão de Projetos",url:"/submissao_projetos"},{name:"Publicações",url:"/publicacoes"},{name:"Parcerias",url:"/parcerias"}]}),f(Ex,{})]})]}),f(ox,{})]}),Cx=y.div`
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
`,Ax=y.div`
  width: 85%;
  height: 2px;
  background: ${({theme:e})=>e.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${u.mobile}) {    
    width: 50%;
  }
`,$x=y.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${u.mobile}) {    
    flex-direction: column;
  }
`,Lc=y.span`
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
`,Sl=y.h3`
  text-align: center;
`,kl=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6%;
  text-align: center;
`,El=y.span`
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
`,Rx=y.div`
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
`,bx=y.div`
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
`,Wt=({})=>b(Cx,{children:[f(Rx,{children:b(bx,{children:[b(kl,{children:[f(Sl,{children:"Endereço"}),f(El,{children:"Rua São Franscisco Xavier - 3107f - Maracanã, Rio de Janeiro"})]}),b(kl,{children:[f(Sl,{children:"Email"}),f(El,{children:"adsad@gmail.com"})]}),b(kl,{children:[f(Sl,{children:"Funcionamento"}),f(El,{children:"Segunda a sexta Xhrs às Yhrs"})]})]})}),f(Ax,{}),b($x,{children:[f(Lc,{children:"Ⓒ Serra Jr. Engenharia 2022"}),f(Lc,{children:"Todos os direitos reservados"})]})]}),Px=y.div`
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

`,Dx=y.div`
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
`,Ox=y.span`
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
`,Lx=y.div`
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
`,Nx=y.img`
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
`,Mx="/Nanofab-Project/assets/chemistry-7542d245.png",Tx=({})=>f(Lx,{children:f(Nx,{src:Mx})}),Ix=y.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6%;

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    padding-top: 0px;
  }
`,zx=y.span`
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
`,Fx=({title:e})=>f(Ix,{children:f(zx,{children:e})}),_x=({descriptions:e})=>b(Px,{children:[f(Tx,{}),f(Fx,{title:"Sobre o NANOFAB"}),f(Dx,{children:e.map(t=>f(Ox,{children:t.text},e.indexOf(t)))})]}),Ux=y.div`
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
`,jx=y.div`
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
`,Bx=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;
  margin-top: 5%;
`,Hx=y.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`,Vx=y.span`
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
`,Jx=y.span`
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
`,Gx=({image:e,title:t,text:n})=>b(jx,{children:[f(Bx,{children:f(Hx,{src:e,alt:t})}),f(Jx,{children:t}),f(Vx,{children:n})]}),Wx=({cards:e})=>f(Ux,{children:e.map(t=>f(Gx,{image:t.image,title:t.title,text:t.text},e.indexOf(t)))}),Qx=({})=>b(_v,{children:[f(Gt,{}),f(_x,{descriptions:[{text:"O Laboratório Multiusuário de Nanofabricação e Caracterização de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduação em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisição de um microscópio eletrônico de alta resolução do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existência de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperação. Nesse contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. Além disso, o NANOFAB atenderá demandas na área de nanofabricação com a aquisição de um microscópio FIB (Focused Ion Beam), a partir de recursos aprovados no Edital FAPERJ 2015, Grandes Equipamentos."},{text:"O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. O microscópio FIB também permitirá a preparação de amostras para microscopia eletrônica de transmissão."},{text:"O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geração de hidrogênio, revestimentos de aços e compósitos."}]}),f(Wx,{cards:[{image:jv,title:"Coordenação e Comitê Gestor",text:"O NANOFAB é coordenado pelo prof. Norberto Mangiavacchi (UERJ) e tem como vice-coordenador o prof. Eduardo de Albuquerque Brocchi (PUC-Rio). O Comitê Gestor do NANOFAB é composto por três membros, eleitos a cada dois anos. Para o Biênio 2016-2018, o Comitê Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET) e Rogério Navarro Correia de Siqueira (PUC-Rio)."},{image:Uv,title:"Unidades e Programas Envolvidos / Projetos de Pesquisa",text:"Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química da UERJ) e Instituto de Física da UERJ."}]}),f(Wt,{})]}),Yx=y.div`
  width: 100%;
`,Kx=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`,Zx=y.div`

`,Xx=y.img`
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
`,qx=y.span`
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
`,ey=y.div`
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
`,ty=y.span`
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
`,ny=y.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #d5d4d4;
`,ry=y.div`
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
`,iy=y.div`
    width: 40%;
    margin: 10px;

    @media screen and (max-width: ${u.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${u.largeMobile}) {    
        width: 70%;
    }
`,oy=y.button`    
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
`,ay=y.div`
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
    
`,Cl=y.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    flex: 1
`,Al=y.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`,ly=y.span`
    font-size: ${({theme:e})=>e.fonts.small}px;
    color: ${({theme:e})=>e.colors.text.title};
    text-align: left;
`,$l=y.span`

`;function Mm(e){return Vi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 14l-4-4h8z"}}]}]})(e)}function Tm(e){return Vi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10l4 4H8z"}}]}]})(e)}const sy=({name:e,unit:t,bond:n,titration:r})=>{const[i,o]=N.useState(!1);return b(iy,{children:[b(oy,{onClick:()=>o(!i),isVisible:i,children:[f(ly,{children:e}),i?f(Tm,{size:20}):f(Mm,{size:20})]}),i?b(ay,{isVisible:i,children:[b(Cl,{children:[f(Al,{children:"PPG/IES"}),f($l,{children:t})]}),b(Cl,{children:[f(Al,{children:"Vínculo"}),f($l,{children:n})]}),b(Cl,{children:[f(Al,{children:"Titulação"}),f($l,{children:r})]})]}):null]})},uy=({title:e,persons:t})=>b(ey,{children:[f(ny,{children:f(ty,{children:e})}),f(ry,{children:t.map(n=>f(sy,{name:n.name,bond:n.bond,titration:n.titration,unit:n.unit},t.indexOf(n)))})]}),dy="/Nanofab-Project/assets/team-2f83bf5a.png",cy=({list:e})=>b(Kx,{children:[f(Zx,{children:f(Xx,{src:dy})}),f(qx,{children:"Equipe"}),e.map(t=>f(uy,{title:t.personFunction,persons:t.persons},e.indexOf(t)))]}),fy=({})=>b(Yx,{children:[f(Gt,{}),f(cy,{list:[{personFunction:"Comitê Gestor",persons:[{name:"José Brant de Campos",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE "},{name:"Noberto Mangiavacchi",unit:"UERJ",bond:"Permanente",titration:"Doutor"},{name:"Hector Reynaldo Meneses",unit:"CEFET-RJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rogério Navarro Correia de Siqueira",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Suzana Bottega Peripolli",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]},{personFunction:"Equipe NANOFAB",persons:[{name:"Maybi Fálker Sampaio",unit:"NANOFAB/UERJ",bond:"Bolsista QUALITEC/UERJ",titration:"Doutor"},{name:"Kellen Venâncio dos Santos",unit:"NANOFAB/UERJ",bond:"Bolsista TCT/FAPERJ",titration:"Engenheira"},{name:"Camila Alves Pelicarto Silva",unit:"NANOFAB/UERJ",bond:"Bolsista PROATEC/UERJ",titration:"Engenheira"}]},{personFunction:"Comitê de Usuários",persons:[{name:"Lilian Pantoja Sosman",unit:"IF - PPGF/UERJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Ivana Lourenço de Mello Ferreira",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilia Garcia Diniz",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José Ricardo Muniz Ferreira",unit:"Empresa R-CRio",bond:"Sócio",titration:"Doutor"}]},{personFunction:"Pesquisador",persons:[{name:"Eduardo de Albuquerque Brocchi",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 1C, CNE"},{name:"José Guilherme Santos Silva",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1B, CNE"},{name:"Luciano Rodrigues Ornelas de Lima",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1D, CNE"},{name:"Marcos Antonio da Silva Costa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Nakédia Maysa Freitas Carvalho",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE"},{name:"Francisco José Moura",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rodrigo Fernandes Magalhães de Souza",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eric Cardona Romani",unit:"SENAI",bond:"Permanente",titration:"Doutor"},{name:"Jorge Luis do Amaral",unit:"PPG-EL/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilza Sampaio Aguilar",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Daniel José Naid Mansur Chalhub",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José da Rocha Miranda Pontes",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Ana Maria Furtado de Sousa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Jaqueline Dias Senra",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Juliana Fonseca de Lima",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Herman Lima Pessoa",unit:"CBPF",bond:"Permanente",titration:"Doutor"},{name:"Letícia Aguilera dos Santos",unit:"IPRJ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Cecilia Vilani",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Celio Albano da Costa",unit:"UFRJ",bond:"Permanente",titration:"Doutor"},{name:"José Luis Lopes da Silveira",unit:"UFRJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eduardo Sousa Lima",unit:"IME",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eustáquio de Souza Baêta Junior",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]}]}),f(Wt,{})]}),py=y.div`
  width: 100%;
`,my=y.div`
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
`,hy=y.h1`
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
`,gy=y.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
`,vy=y.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`,xy=y.div`
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
`,Nc=y.button`
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
`,yy=y.div`
  width: 50%;
  margin-bottom: 3%;
  margin-right: 50%;
`,wy=y.h2`
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
`,Sy=y.select`
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

`;y.option`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
`;const ky=y.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  width: 100%;
`,Ey=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
`,Cy=y.div`
    width: 100%;
    display: flex;
    background-color: #D5D4D4;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`,Ay=y.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin: 5px;
    font-weight: bold;

    margin-left: 10px;
`,$y=y.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
`,Ry=y.span`
    text-align: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ${({status:e})=>{if(e==="Aprovado")return"background-color: rgba(48, 212, 111, 0.7);";if(e==="Solicitado")return"background-color: rgba(255, 204, 92, 0.7);";if(e==="Cancelado")return"background-color: rgba(255, 111, 105, 0.7);"}}
`,Rl=y.span`
    margin: 10px;
`,by=({name:e,institution:t,startDate:n,endDate:r,samples:i,situation:o})=>b(Ey,{children:[f(Cy,{children:b(Ay,{children:[e," - ",t]})}),b($y,{children:[b(Rl,{children:["Data de Solicitação: ",n]}),b(Rl,{children:["Data Final: ",r||"Não informado"]}),b(Rl,{children:["Quantidade de Amostras: ",i]})]}),f(Ry,{status:o,children:o})]}),Py=({list:e})=>{const[t,n]=N.useState(0),[r,i]=N.useState(9),[o,a]=N.useState("Todos");N.useState(Array);const l=()=>{t===9?(n(t),i(r)):(n(t+9),i(r+9))},s=()=>{t===0?(n(0),i(9)):(n(t-9),i(r-9))},d=e.slice(t,r).filter(p=>o==="Todos"?!0:p.situation===o).map(p=>f(by,{name:p.name,institution:p.institution,startDate:p.startDate,endDate:p.endDate,samples:p.samples,situation:p.situation},e.indexOf(p)));function h(p){p.target.value==="Todos"?a("Todos"):p.target.value==="Aprovado"?a("Aprovado"):p.target.value==="Agendado"?a("Agendado"):p.target.value==="Solicitado"?a("Solicitado"):p.target.value==="Antigos"&&a("Antigos")}return b(gy,{children:[b(yy,{children:[f(wy,{children:"Filtro"}),f(ky,{children:b(Sy,{onChange:p=>h(p),children:[f("option",{value:"Todos",children:"Todos"}),f("option",{value:"Aprovado",children:"Aprovado"}),f("option",{value:"Agendado",children:"Agendado"}),f("option",{value:"Solicitado",children:"Solicitado"}),f("option",{value:"Antigos",children:"Antigos"})]})})]}),f(vy,{children:d}),b(xy,{children:[f(Nc,{onClick:s,children:"Anterior"}),f(Nc,{onClick:l,children:"Próxima"})]})]})},Dy=({})=>b(my,{children:[f(hy,{children:"Lista de Solitações"}),f(Py,{list:[{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Cancelado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Antigos"}]})]}),Oy=({})=>b(py,{children:[f(Gt,{}),f(Dy,{}),f(Wt,{})]}),Ly=y.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`,Ny=y.div`
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
`,My=y.div`
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
`,Ty=y.img`
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
 
`;y.h1` // Submissão de Projeto
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
`;const Iy=y.div`
  width: 100%;
  padding: 5%;
  padding-left: 3.5%;
  padding-bottom: 0;

`,ei=y.h2` // Orientador, Tipos, Outros, etc.
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
`,Fa=y.input`
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
`;y.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
    `;const co=y.input`
    height: 15px;
    width: 15px;
`,fo=y.label`
  margin-left: 5px;
  font-family: "Maven Pro";
  `,po=y.div`
  display: flex;
  
  flex-direction: row;
  margin: 5px;
  `,bl=y.div`
  margin-bottom: 3%;
  margin-top: 3%;
  `,zy=y(Fa)`

`,Fy=y(Fa)`

`,_y=y(Fa)`

`,_a=y.div`
    margin-bottom: 3%;
`;y(_a)`

`;y(_a)`

`;y(_a)`

`;const Uy=y.div`
    width: 100%;
    margin-bottom: 3%;

`,Pl=y.h2` // Orientador, Tipos, Outros, etc.
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
`,jy=y.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
`,Mc=y.section`
    width: 30%;
`,Tc=y.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
`,Ic=y.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,zc=y.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,By=y.input`
    width: 90%;
    height: 40px;
    background-color: #E8E8E8;
    border-radius: 20px;
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
`,Hy=y.div`
  margin-bottom: 3%;
`,Vy=y.input`
    width: 90%;
    height: 30px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 5px;
    font-family: 'Maven Pro';
    
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
`,Jy=({})=>b(Uy,{children:[b(jy,{children:[b(Mc,{children:[f(Pl,{children:"Tipo de Análise"}),b(Tc,{children:[f(Ic,{type:"radio",id:"quantitativa",name:"analysisType",value:"Quantitativa",color:"red"}),f(zc,{htmlFor:"quantitativa",children:"Quantitativa"})]}),b(Tc,{children:[f(Ic,{type:"radio",id:"qualitativa",name:"analysisType",value:"Qualitativa"}),f(zc,{htmlFor:"qualitativa",children:"Qualitativa"})]})]}),b(Mc,{children:[f(Pl,{children:"Qntd. de Amostras"}),f(By,{type:"number",min:"0"})]})]}),b(Hy,{children:[f(Pl,{children:"Técnicas de Medida e Condições de Varredura:"}),f(Vy,{placeholder:"Se souber, descreva as técnicas de medida e as condições de carredura."})]})]}),Gy=({formData:e,setFormData:t})=>b(Iy,{children:[f(Jy,{}),b(_a,{children:[f(ei,{children:"Orientador:"}),f(Fa,{type:"text",name:"orientador",value:e.orientador,onChange:n=>t({orientador:n.target.value,outros:e.outros}),placeholder:"(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"})]}),f(ei,{children:"Tipos:"}),b(po,{children:[f(co,{type:"checkbox",value:"1"}),f(fo,{children:"Microscopia de Varredura de Alta Resolução (MEV-FEG)"})]}),b(po,{children:[f(co,{type:"checkbox",value:"1"}),f(fo,{children:"Microscopia por Feixe de Íons Focalizado"})]}),b(po,{children:[f(co,{type:"checkbox",value:"1"}),f(fo,{children:"Textura"})]}),b(po,{children:[f(co,{type:"checkbox",value:"1"}),f(fo,{children:"Difração de Raios-x"})]}),b(bl,{children:[f(ei,{children:"Outros:"}),f(zy,{type:"text",name:"outros",value:e.outros,onChange:n=>t({orientador:e.orientador,outros:n.target.value}),placeholder:"Informar nome."})]}),b(bl,{children:[f(ei,{children:"Detectores:"}),f(Fy,{placeholder:"[TEMP] Informar detectores."})]}),b(bl,{children:[f(ei,{children:"Projeto Científico e Descrição das Amostras:"}),f(_y,{placeholder:"[TEMP] Informar Projeto Científico e Descrição das Amostras:."})]})]}),Wy=y.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,Qy=y.div`
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
    `,Fc=y.button`
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

    `,Yy=({})=>f(Wy,{children:b(Qy,{children:[f(Fc,{children:"Apagar"}),f(Fc,{type:"submit",children:"Enviar"})]})}),Ky=y.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5%;
    padding-left: 0.9%;
    padding-top: 0;
`,_c=y.div`
    width: 45%;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    
`,Uc=y.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
`,Ut=y.input`
    width: 90%;
    height: 40px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 5px;
    margin-bottom: 10px;
    padding-left: 5%;
    
    `,Zy=({})=>b(Ky,{children:[b(_c,{children:[f(Uc,{children:"Identificação da(s) Amostra(s):"}),f(Ut,{type:"text",name:"sample_01"}),f(Ut,{type:"text",name:"sample_02"}),f(Ut,{type:"text",name:"sample_03"}),f(Ut,{type:"text",name:"sample_04"}),f(Ut,{type:"text",name:"sample_05"})]}),b(_c,{children:[f(Uc,{children:"Composição Química:"}),f(Ut,{type:"text",name:"composition_01"}),f(Ut,{type:"text",name:"composition_02"}),f(Ut,{type:"text",name:"composition_03"}),f(Ut,{type:"text",name:"composition_04"}),f(Ut,{type:"text",name:"composition_05"})]})]}),Xy=y.div`
  width: 100%;
  padding: 5%;
  padding-left: 3.5%;
  padding-top: 0;

`,Dl=y.h2` // Orientador, Tipos, Outros, etc.
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
`,qy=y.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
`,ew=y.h4`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;  
`,tw=y.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
`,jc=y.section`
    width: 45%;
`,Mn=y.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
`,Tn=y.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,In=y.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,nw=y.select`
    width: 90%;
    height: 40px;
    background-color: #E8E8E8;
    border-radius: 20px;
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
`,rw=y.option`

`,iw=y.div`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ow=({})=>b(Xy,{children:[b(tw,{children:[b(jc,{children:[f(Dl,{children:"Retornar a(s) amostra(s) analisada(s)?"}),b(Mn,{children:[f(Tn,{type:"radio",id:"retorna_sim",name:"analysisType",value:"retorna_sim",color:"red"}),f(In,{htmlFor:"retorna_sim",children:"Sim"})]}),b(Mn,{children:[f(Tn,{type:"radio",id:"retorna_nao",name:"analysisType",value:"retorna_nao",color:"red"}),f(In,{htmlFor:"retorna_nao",children:"Não"})]})]}),b(jc,{children:[f(Dl,{children:"Nível de prioridade desejada:"}),f(nw,{children:["Urgente","Alta","Médio","Baixo"].map(t=>f(rw,{value:t,children:t}))})]})]}),b(iw,{children:[f(Dl,{children:"Informe as condições de segurança quanto ao manuseio do material."}),f(ew,{children:"Caso a quantidade de amostras passe o número proposto, avisar antes de envia-las"}),b(qy,{children:[b(Mn,{children:[f(Tn,{type:"radio",id:"inflamavel",name:"securityConditions",value:"inflamavel"}),f(In,{htmlFor:"inflamavel",children:"Inflamável"})]}),b(Mn,{children:[f(Tn,{type:"radio",id:"toxico",name:"securityConditions",value:"toxico"}),f(In,{htmlFor:"toxico",children:"Tóxico"})]}),b(Mn,{children:[f(Tn,{type:"radio",id:"hidroscopico",name:"securityConditions",value:"hidroscopico"}),f(In,{htmlFor:"hidroscopico",children:"Hidroscópico"})]}),b(Mn,{children:[f(Tn,{type:"radio",id:"radioativo",name:"securityConditions",value:"radioativo"}),f(In,{htmlFor:"radioativo",children:"Radioativo"})]}),b(Mn,{children:[f(Tn,{type:"radio",id:"corrosivo",name:"securityConditions",value:"corrosivo"}),f(In,{htmlFor:"corrosivo",children:"Corrosivo"})]})]})]})]}),aw="/Nanofab-Project/assets/search-1143e4ec.png",lw=({})=>{const[e,t]=N.useState({orientador:"",outros:""}),n=i=>{i.preventDefault(),console.log(e),r()};function r(){localStorage.setItem("formData",JSON.stringify(e))}return N.useEffect(()=>{const i=JSON.parse(localStorage.getItem("formData")||"{}");i!="{}"&&t(i)},[]),b(Ny,{children:[f(My,{children:f(Ty,{src:aw})}),b("form",{onSubmit:n,children:[f(Gy,{formData:e,setFormData:t}),f(Zy,{formData:e,setFormData:t}),f(ow,{formData:e,setFormData:t}),f(Yy,{formData:e,setFormData:t})]})]})},sw=({})=>b(Ly,{children:[f(Gt,{}),f(lw,{}),f(Wt,{})]}),uw=y.div`
  width: 100%;
`,dw=y.div`
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
`,cw="/Nanofab-Project/assets/publications2-b4db6c33.svg",fw=y.div`
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
`,pw=y.div`
  /* width: 30%; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 70px; */
`,mw=y.div`
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
`,hw=y.img`
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
`,gw=({url:e})=>f(mw,{children:f(hw,{src:e})}),vw=y.div``,xw=y.span`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,yw=({title:e})=>f(vw,{children:f(xw,{children:e})}),Im=({title:e,image:t})=>f(fw,{children:b(pw,{children:[f(gw,{url:t}),f(yw,{title:e})]})}),ww=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 50px;
`,Sw=y.div`
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
`,kw=y.button`    
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
`,Ew=y.div`
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
`;y.div`
    width: 50%;
    text-align: justify;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`;const Cw=y.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${u.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
        min-height: 70px;
    }

`;y.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`;const Aw=y.span`
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
`,$w=y.span`
    text-align: justify;

    @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
    }
    @media screen and (min-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
    }
`,Rw=({year:e,descriptions:t})=>{const[n,r]=N.useState(!1);return b(Sw,{children:[b(kw,{onClick:()=>r(!n),isVisible:n,children:[f(Aw,{children:e}),n?f(Tm,{size:20}):f(Mm,{size:20})]}),n?f(Ew,{isVisible:n,children:t.map(i=>f(Cw,{children:f($w,{children:i.description})}))}):null]})},bw=({list:e})=>f(ww,{children:e.map(t=>f(Rw,{year:t.year,descriptions:t.descriptions},e.indexOf(t)))}),Pw=({})=>b(uw,{children:[f(Gt,{}),f(Im,{title:"Publicações",image:cw}),f(dw,{children:f(bw,{list:[{year:"2022",descriptions:[{description:"SILVA, ADRIEL M.; SOUZA, RODRIGO F.M.; AGUILERA, LETÍCIA S.; de Campos, José B.; BROCCHI, EDUARDO A. Upgrade of titanium content in a vanadiferous titanomagnetite waste: Design of a roast-leach route based on thermodynamics simulations. MINERALS ENGINEERING. , v.179, p.107460 - , 2022."},{description:"LIMA, EDUARDO DE SOUSA; GALL, CAMILA CATALANO; ALVES, MANUEL FELLIPE R.P.; DE CAMPOS, JOSÉ BRANT; CAMPOS, TIAGO MOREIRA BASTOS; SANTOS, CLAUDINEI DOS Development and characterization of alumina-toughened zirconia (ATZ) ceramic composites doped with a beneficiated rare-earth oxide extracted from natural ore. Journal of Materials Research and Technology-JMR&T. , v.16, p.451 - 460, 2022."}]},{year:"2021",descriptions:[{description:"MARÍN CASTAÑO, ELIANA PAOLA; CAMPOS, JOSÉ BRANT DE; SOLÓRZANO-NARANJO, IVAN GUILLERMO; BROCCHI, EDUARDO DE ALBUQUERQUE Characterization of Ternary CuNiCo Metallic Nanoparticles Produced by Hydrogen Reduction.Materials. , v.14, p.6006 - , 2021."},{description:"SAMPAIO, M.F.; MARINHO, P.R.B.; CABRUJA, E.; LOZANO, M.; LIMA JÚNIOR, H.P.; de Campos, J.B. SU- 8 processing improvement and simulating studies for a Micromegas detector fabrication.Journal of Instrumentation. , v.16, p.P08022 - P02038, 2021."},{description:"HORTA, MARLA KAROLYNE DOS SANTOS; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; WESTIN, CECÍLIA BUZATTO; NAVARRO DA ROCHA, DANIEL; CAMPOS, JOSÉ BRANT < i > In vitro</> evaluation of natural hydroxyapatite from Osteoglossum bicirrhosum fish scales for biomedical application.International Journal of Applied Ceramic Technology. , v.18, p.1930 - 1937, 2021."},{description:"MOTA, RAFAEL OLIVEIRA DA; DÓREA, MÁRCIA DE MELO; AGUILERA, LETÍCIA DOS SANTOS; ROMANI, ERIC CARDONA; COSTA, HECTOR REYNALDO MENESES; CAMPOS, JOSÉ BRANT DE AVANÇOS RECENTES NA UTILIZAÇÃO DO GRAFENO COMO ADITIVO EM POLÍMEROS / RECENT ADVANCES IN THE USE OF GRAPHENE AS AN ADDITIVE IN POLYMERS. Brazilian Journal of Development. , v.7, p.32743 - 32752, 2021."},{description:"RIBEIRO, SUZANA BARRETO NORONHA; DA VEIGA JUNIOR, VALDIR FLORÊNCIO; DE CAMPOS, JOSÉ BRANT; DOS SANTOS, JHEISON LOPES; LOPES, IAGO JOSÉ VITRAL REZENDE; DA ROCHA, DANIEL NAVARRO; DA SILVA, MARCELO HENRIQUE PRADO Influences of biosilica content from Amazonian freshwater sponge on calcium phosphates.Journal of the Australian Ceramic Society. , v.57, p.55 - 65, 2021"},{description:"Machado, Marcelo Vitor Ferreira; DE CAMPOS, JOSÉ BRANT; AGUILAR, MARILZA SAMPAIO; Ramos, Vitor Santos Mechanical and Microstructural Characterizations on Commercial and Synthesized by the Sol- Gel Method Using Chicken Egg Shells as Precursor Hydroxyapatite.South Florida Journal of Development. , v.2, p.1365 - 1374, 2021."}]},{year:"2020",descriptions:[{description:"BARROS, S. D.; DUARTE, J. P. P.; ROCHA, L. D. S.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S.; MEDEIOS, M. E.; de Campos, José B.; COSTA, M. E. H. M.; LACHTER, E. R.; SENRA, J. D.; MALTA, L. F. B. Cyclodextrin-Stabilized Palladium Nanoparticles on Ceria: Invertigation of Support Interactions and Pivotal Promotion in the Suzuki-Miyaura Reaction. ChemistrySelect. , v.5, p.7227 - 7235, 2020."},{description:"MELLO, NATHALLI M.; REGO, ARTUR S. C.; BROCCHI, EDUARDO A.; CAMPOS, JOSÉ B. DE; MOURA, FRANCISCO J.; SOUZA, RODRIGO F. M. Effect of an Alumina Supported Palladium Catalyst on the Magnesium Sulfate Decomposition Kinetics. MATERIALS RESEARCH. , v.23, p.1 - 9, 2020."},{description:"CARNEIRO, MATEUS R. D.; FREITAS, BRUNO C.; DE BARROS, IURI B.; de Campos, José B.; BASTOS, IVAN N.; COSTA, HECTOR R. M. Evaluation of adhesion of epoxy resin sealant to improve the corrosion resistance of thermal sprayed coatings. APPLIED ADHESION SCIENCE. , v.8, p.7 - 21, 2020."},{description:"HORTA, M. K. S.; Moura F.J.; AGUILAR, M. S.; WESTIN, C. B.; de Campos, J.B.; PERIPOLLI, S. B.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S. Nanostructured Hydroxyapatite from Hen's Eggshells Using Sucrose as a Template. Materials Research-Ibero-american Journal of Materials. , v.23, p.1 - 9, 2020."}]},{year:"2019",descriptions:[{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; SANTOS, JHEISON LOPES DOS; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; BARBOSA, RAFAEL MAZA; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Bioactivity of strontium-monetite coatings for biomedical applications. CERAMICS INTERNATIONAL. , v.45, p.7568 - 7579, 2019."},{description:"SILVA, LORENNA; NEVES, VINÍCIUS; RAMOS, VITOR; SILVA, RAPHAEL; CAMPOS, JOSÉ; SILVA, ALEXSANDRO; MALTA, LUIZ; SENRA, JAQUELINE Layered Double Hydroxides as Bifunctional Catalysts for the Aryl Borylation under Ligand-Free Conditions. Catalysts. , v.9, p.302 - 314, 2019."},{description:"GALVÃO, RHAUANE ALMEIDA; SANTA-CRUZ, LARISSA AGOSTINHO DE; BARRETO, PALOMA BANTIM; HORTA, MARLA KAROLYNE DOS SANTOS; ANDRADE, ANTONIO MARCOS HELGUEIRA DE; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; PERIPOLLI, SUZANA BOTTEGA; CAMPOS, JOSÉ BRANT DE; ARRUDA, ISABEL RENATA DE SOUZA; MACHADO, GIOVANNA Electrochemical single-step obtention and characterization of a biomimetic TiO <sub>2</sub> -HA NTs covered by chitosan. JOURNAL OF MATERIALS RESEARCH. , v.34, p.1 - 11, 2019."},{description:"SOUZA, RODRIGO; QUEIROZ, CARLOS; BRANT, JOSÉ; BROCCHI, EDUARDO Pyrometallurgical processing of a low copper content concentrate based on a thermodynamic assessment. MINERALS ENGINEERING. , v.130, p.156 - 164, 2019."},{description:"HORTA, MARLA; AGUILAR, MARILZA; MOURA, FRANCISCO; CAMPOS, JOSÉ; RAMOS, VITOR; QUIZUNDA, ADILSON Synthesis and characterization of green nanohydroxyapatite from hen eggshell by precipitation method. MATERIALS TODAY: PROCEEDINGS. , v.14, p.716 - 721, 2019"}]},{year:"2018",descriptions:[{description:"FERREIRA, J. R. M.; Louro, Luis Henrique Leme; COSTA, A. M.; MARCAL, R. L. S. B.; ROCHA, D. N.; BARBOSA, R. M.; de Campos, José B.; PRADO, M. H. Zinc-doped Calcium Phosphate Coating on Titanium Surface Using Ostrich Eggshell as a Ca2+ Ions Source. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."},{description:"AGUILERA, L. S.; de Campos, J.B.; de Biasi, R.S.; Figueiredo, A.B.H.S. Use of the Drag Method to Study the Magnetic Behavior of Mn-Zn Ferrite Nanoparticles. The International Journal of Engineering and Science. , v.7, p.57 - 61, 2018."},{description:"BIASI, RONALDO SERGIO DE; MELO, GABRIEL BURLANDY MOTA DE; FIGUEIREDO, ANDRÉ BEN-HUR DA SILVA; CAMARENA, MARIELLA ALZAMORA; CAMPOS, JOSÉ BRANT DE Properties of manganese ferrite-paraffin composites. Journal of Materials Research and Technology-JMR&T. , v.8, p.309 - 313, 2018."},{description:"AGUILERA, L. S.; MARCAL, R. L. S. B.; de Campos, J.B.; PRADO, M. H.; Figueiredo, A.B.H.S.MAGNETIC FILTER PRODUCED BY ZnFe2O4 NANOPARTICLES USING FREEZE CASTING. Journal of Materials Research and Technology-JMR&T. , v.7, p.350 - 355, 2018. "},{description:"ROCHA, DANIEL NAVARRO DA; SILVA, MARCELO H. PRADO DA; CAMPOS, JOSÉ BRANT DE; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; CRUZ, LEILA ROSA Kinetics of conversion of brushite coatings to hydroxyapatite in alkaline solution. Journal of Materials Research and Technology-JMR&T. , v.7, p.479 - 486, 2018."},{description:"Cabral, R.F.; de Campos, J.B.; SILVA, C. E. V.; FONSECA, G. M.; LIMA, W. N.; LIMA, E. Formação da fase YNbO4 na sinterização do compósito Alumina-YAG com Nb2O5. CADERNOS UNIFOA (IMPRESSO). , v.36, p.29 - 35, 2018."},{description:"Cabral, R.F.; PRADO DA SILVA, M.H.; Lima, E.S.; de Campos, J.B.; MAGNAGO, ROBERTO DE OLIVEIRA Evaluation of Hardness and the Fracture Toughness of Composite Biphasic Alumina-YAG. MATERIALS SCIENCE FORUM (ONLINE). , v.912, p.82 - 86, 2018."},{description:"SALEIRO, GISELE TEIXEIRA; GONÇALVES, DANILO CORREA; COSTA, CÉLIO ALBANO DA; CAMPOS, JOSÉ BRANT DE; LIMA, EDUARDO DE SOUSA COMPORTAMENTO MECÂNICO DO SIC ADITIVADO COM Al2O3 E Y2O3 PRODUZIDOS PELA SÍNTESE POR COMBUSTÃO AUTOSSUSTENTÁVEL À ALTA TEMPERATURA. TECNOLOGIA EM METALURGIA, MATERIAIS E MINERAÇÃO. , v.15, p.96 - 102, 2018."},{description:"MENDONCA, F.; COSTA, A. M.; de Campos, J.B.; MARCAL, R. L. S. B.; ROCHA, D. N.; PRADO, M. H. Bioactivity Assessment of Ag-HA. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."}]},{year:"2017",descriptions:[{description:"GONÇALVES, DANILO CORRÊA; SALEIRO, GISELE TEIXEIRA; MATIAS, PHILIPE CARDOSO; GOMES, ALAELSON VIEIRA; RAMOS, VITOR; CAMPOS, JOSÉ BRANT BRANT DE; MELO, FRANCISCO CRISTOVÃO LOURENÇO DE; LIMA, EDUARDO SOUSA Microstructural Characterization and Influence of Ceramography Method on the Microhardness of Sintering Agents Added Silicon Carbide. Materials Research-Ibero-american Journal of Materials"},{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Mg substituted apatite coating from alkali conversion of acidic calcium phosphate. Materials Science & Engineering C-Materials for Biological Applications. , v.70, p.408 - 417, 2017."},{description:"ROMANI, E. C.; LARRUDE, D. G.; NACHEZ, L.; VILANI, C.; de CAMPOS, J. B.; PERIPOLLI, S. B.; FREIRE, F. L.Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS. , v.65, p.1 - 9, 2017."},{description:"SANTOS, J. L.; MARÇAL, R. L. S. B.; JESUS, P. R. R.; GOMES, A. V.; LIMA, E. P.; MONTEIRO, S. N.; de CAMPOS, J. B.; LOURO, L. H. L.Effect of LiF as Sintering Agent on the Densification and Phase Formation in Al2O3-4 Wt Pct Nb2O5 Ceramic Compound. METALLURGICAL AND MATERIALS TRANSACTIONS A-PHYSICAL METALLURGY AND MATERIALS SCIENCE. , v.48, p.4432 - 4440, 2017."}]}]})}),f(Wt,{})]}),Dw=y.div`
  width: 100%;

`,Ow=y.div`
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
`,Lw=y.div`
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



`,Nw=y.span`
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
`,Mw=y.div`
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
`,Tw=y.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,Iw=y.img`
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
`,zw=({image:e,altText:t})=>f(Tw,{children:f(Iw,{src:e,alt:t})}),Do="/Nanofab-Project/assets/cbpf-812298b6.jpg",Oo="/Nanofab-Project/assets/faperj-aefe040c.svg",Lo="/Nanofab-Project/assets/finep-072bfec0.svg",Ol="/Nanofab-Project/assets/logoUFF-bce55271.png",Ll="/Nanofab-Project/assets/ime-85233a07.jpg",Nl="/Nanofab-Project/assets/pucrj-7995f7c6.jpg",Ml="/Nanofab-Project/assets/UFRJ-ae0dd01b.jpg",Tl="/Nanofab-Project/assets/cefet-fb822b95.png",Il="/Nanofab-Project/assets/SerraJr-fd37bf50.svg",Fw=({})=>{const e=[{image:Do,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Oo,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Lo,altText:"FINEP - Agência Brasileira de Inovação"},{image:Ol,altText:"UFF - Universidade Federal Fluminense"},{image:Ll,altText:"IME - Instituto Militar de Engenharia"},{image:Ml,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:Nl,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Tl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:Il,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Do,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Oo,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Lo,altText:"FINEP - Agência Brasileira de Inovação"},{image:Ol,altText:"UFF - Universidade Federal Fluminense"},{image:Ll,altText:"IME - Instituto Militar de Engenharia"},{image:Ml,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:Nl,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Tl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:Il,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Do,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Oo,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Lo,altText:"FINEP - Agência Brasileira de Inovação"},{image:Ol,altText:"UFF - Universidade Federal Fluminense"},{image:Ll,altText:"IME - Instituto Militar de Engenharia"},{image:Ml,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:Nl,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Tl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:Il,altText:"Serra Jr. - Serra Júnior Engenharia"}];return b(Lw,{children:[f(Nw,{children:"Parceiros"}),f(Mw,{children:e.map(t=>f(zw,{image:t.image,altText:t.altText},e.indexOf(t)))})]})},_w=y.div`
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
`,Uw=y.div`
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
`,jw=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${u.mobile}) {
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    margin-bottom: 5%;
  }
`,Bw=y.div`
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
`,Hw=y.span`
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
`,Vw=y.span`
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
`,Jw=y.img`
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
`;y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px;
    width: 200px; */
`;const Gw=({image:e,title:t,paragraph:n})=>f(_w,{children:b(Uw,{children:[f(jw,{children:f(Jw,{src:e,alt:t})}),b(Bw,{children:[f(Hw,{children:t}),f(Vw,{children:n})]})]})}),Ww="/Nanofab-Project/assets/handshake-903e6074.png",Qw=({})=>{const e=[{image:Do,title:"Centro Brasileiro de Pesquisas Físicas - CBPF",paragraph:"O NANOFAB desenvolve parceria científica e tecnológica com o CBPF na área de Instrumentação Científica, com o desenvolvimento de dispositivos multiplicadores e elétrons (GEM-Gas Electron Multiplier) e detectores bidimensionais de raios-x a gás."},{image:Oo,title:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro",paragraph:"O NANOFAB recebe apoio da FAPERJ em projetos de infraestrutura e pesquisa como o PENSA-RIO e através de projetos em colaboração com os pesquisadores"},{image:Lo,title:"FINEP - Agência Brasileira de Inovação",paragraph:"O NANOFAB participa de editais da FINEP em projetos estruturantes como o Grande Laboratórios Multiusuários e Ações Transversais."}];return b(Dw,{children:[f(Gt,{}),f(Im,{title:"Parcerias",image:Ww}),f(Ow,{children:e.map(t=>f(Gw,{image:t.image,title:t.title,paragraph:t.paragraph},e.indexOf(t)))}),f(Fw,{}),f(Wt,{})]})},Yw=y.div`
  width: 100%;
`,Kw=y.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,Zw=y.span`
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.highlight};
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.auxiliary.error.dark};
  border-radius: 20px;
`,Xw=({})=>b(Yw,{children:[f(Gt,{}),f(Kw,{children:f(Zw,{children:"Aconteceu um problema, tente novamente mais tarde"})}),f(Wt,{})]}),qw=y.div`
`,eS=y.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;y.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const tS=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 40%;
  height: 400px;
  background-color: #d9d9d9aa;
  border-radius: 30px;
  margin: 3%;
  margin-top: 5%;
  padding: 2%;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;
`,nS=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,rS=y.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,Bc=y.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,Hc=y.input`
  width: 50%;
  height: 30px;
  background-color: #e8e8e8;
  border-radius: 10px;
  border: 0px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    /* padding-left: 20px; */
    color: #5086b699;
    opacity: 1; /* Firefox */
    /* padding: 5px; */
  }
`,Vc=y.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,iS=y.button`
  background-color: #5086b6;
  border: 0px;
  padding: 2%;
  padding-left: 10%;
  padding-right: 10%;
  color: white;
  border-radius: 10px;

  :hover {
    color: #5086b6;
    background-color: #fff;
    border: 1px solid #5086b6;
    transition: 0.5s;
    cursor: pointer;
  }
`,oS=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-beetween;
  margin-bottom: 20px;
  padding-left: 20px;
  width: 60%;
`,Jc=y.a`
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 5px;

  :hover {
    color: #5086b6;
    text-decoration: underline;
    transition: 0.5s;
    cursor: pointer;
  }
`,aS=({})=>b(tS,{children:[f(rS,{children:"Entrar"}),b(nS,{children:[b(Vc,{children:[f(Bc,{children:"Email ou Nome de Usuário:"}),f(Hc,{placeholder:"Digite seu Email"})]}),b(Vc,{children:[f(Bc,{children:"Senha:"}),f(Hc,{type:"password",placeholder:"Digite sua senha"})]}),b(oS,{children:[f(Jc,{href:"/Nanofab-Project/login/createAccount",children:"Não tem conta? Crie uma!"}),f(Jc,{href:"/Nanofab-Project/login/RedefinePassword",children:"Esqueci minha senha"})]})]}),f(iS,{children:"Entrar"})]}),lS=({})=>b(qw,{children:[f(Gt,{}),f(eS,{children:f(aS,{})}),f(Wt,{})]}),sS=y.div`
`,uS=y.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;y.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const dS=({})=>b(sS,{children:[f(Gt,{}),f(uS,{}),f(Wt,{})]}),cS=y.div`
`,fS=y.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;y.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const pS=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 40%;
  background-color: #d9d9d9aa;
  border-radius: 30px;
  margin: 3%;
  margin-top: 5%;
  padding: 2%;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;
`,mS=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,hS=y.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,mo=y.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,ho=y.input`
  width: 50%;
  height: 30px;
  background-color: #e8e8e8;
  border-radius: 10px;
  border: 0px;
  padding: 10px;
  margin-bottom: 10px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    /* padding-left: 20px; */
    color: #5086b699;
    opacity: 1; /* Firefox */
    /* padding: 5px; */
  }
`,go=y.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,gS=y.button`
  background-color: #5086b6;
  border: 0px;
  padding: 2%;
  padding-left: 10%;
  padding-right: 10%;
  color: white;
  border-radius: 10px;

  :hover {
    color: #5086b6;
    background-color: #fff;
    border: 1px solid #5086b6;
    transition: 0.5s;
    cursor: pointer;
  }
`;y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-beetween;
`;y.a`
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-left: 10px;
  margin-right: 10px;

  :hover {
    color: #5086b6;
    text-decoration: underline;
    transition: 0.5s;
    cursor: pointer;
  }
`;const vS=({})=>b(pS,{children:[f(hS,{children:"Redefinição de Senha"}),b(mS,{children:[b(go,{children:[f(mo,{children:"Usuário:"}),f(ho,{placeholder:"Digite seu usuário"})]}),b(go,{children:[f(mo,{children:"Email:"}),f(ho,{placeholder:"Digite seu email"})]}),b(go,{children:[f(mo,{children:"Nova Senha:"}),f(ho,{type:"password",placeholder:"Digite sua senha"})]}),b(go,{children:[f(mo,{children:"Confime a Nova Senha:"}),f(ho,{type:"password",placeholder:"Digite sua senha"})]})]}),f(gS,{children:"Redefinir"})]}),xS=({})=>b(cS,{children:[f(Gt,{}),f(fS,{children:f(vS,{})}),f(Wt,{})]}),yS="/Nanofab-Project/assets/background2-7f5efefe.svg",wS=y.div`
  background-image: url(${yS});
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
`,SS=Nv([{path:"/",element:f(Qx,{})},{path:"/equipe",element:f(fy,{})},{path:"/andamento",element:f(Oy,{})},{path:"/submissao_projetos",element:f(sw,{})},{path:"/publicacoes",element:f(Pw,{})},{path:"/parcerias",element:f(Qw,{})},{path:"/login",element:f(lS,{})},{path:"/login/createAccount",element:f(dS,{})},{path:"/login/RedefinePassword",element:f(xS,{})},{path:"*",element:f(Xw,{})}],{basename:"/Nanofab-Project"}),kS=({})=>f(wS,{children:f(Cv,{router:SS})}),ES=c1`
  body {
    *:focus {
        outline: none;
    }

    margin: 0;
    padding: 0;

    h1, h2, h3, h4, span, option, select, input, label{
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
`;function CS(){return b(m1,{children:[f(ES,{}),f(kS,{})]})}Fl.createRoot(document.getElementById("root")).render(f(tt.StrictMode,{children:f(CS,{})}));
