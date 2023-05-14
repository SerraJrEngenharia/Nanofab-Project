function Vg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Jg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hi={},Gg={get exports(){return Hi},set exports(e){Hi=e}},Ha={},b={},Wg={get exports(){return b},set exports(e){b=e}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),Qg=Symbol.for("react.portal"),qg=Symbol.for("react.fragment"),Kg=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),Xg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),e0=Symbol.for("react.forward_ref"),t0=Symbol.for("react.suspense"),n0=Symbol.for("react.memo"),r0=Symbol.for("react.lazy"),Xc=Symbol.iterator;function i0(e){return e===null||typeof e!="object"?null:(e=Xc&&e[Xc]||e["@@iterator"],typeof e=="function"?e:null)}var Op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,Np={};function ri(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Op}ri.prototype.isReactComponent={};ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lp(){}Lp.prototype=ri.prototype;function Fu(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Op}var Uu=Fu.prototype=new Lp;Uu.constructor=Fu;Tp(Uu,ri.prototype);Uu.isPureReactComponent=!0;var Zc=Array.isArray,Dp=Object.prototype.hasOwnProperty,ju={current:null},Ip={key:!0,ref:!0,__self:!0,__source:!0};function Mp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Dp.call(t,r)&&!Ip.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fo,type:e,key:o,ref:a,props:i,_owner:ju.current}}function o0(e,t){return{$$typeof:fo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bu(e){return typeof e=="object"&&e!==null&&e.$$typeof===fo}function a0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ed=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?a0(""+e.key):t.toString(36)}function Wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fo:case Qg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Tl(a,0):r,Zc(i)?(n="",e!=null&&(n=e.replace(ed,"$&/")+"/"),Wo(i,t,n,"",function(u){return u})):i!=null&&(Bu(i)&&(i=o0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ed,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Zc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Tl(o,l);a+=Wo(o,t,n,s,i)}else if(s=i0(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Tl(o,l++),a+=Wo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Co(e,t,n){if(e==null)return e;var r=[],i=0;return Wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function l0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},Qo={transition:null},s0={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:Qo,ReactCurrentOwner:ju};ae.Children={map:Co,forEach:function(e,t,n){Co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Co(e,function(){t++}),t},toArray:function(e){return Co(e,function(t){return t})||[]},only:function(e){if(!Bu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=ri;ae.Fragment=qg;ae.Profiler=Yg;ae.PureComponent=Fu;ae.StrictMode=Kg;ae.Suspense=t0;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Dp.call(t,s)&&!Ip.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fo,type:e.type,key:i,ref:o,props:r,_owner:a}};ae.createContext=function(e){return e={$$typeof:Zg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xg,_context:e},e.Consumer=e};ae.createElement=Mp;ae.createFactory=function(e){var t=Mp.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:e0,render:e}};ae.isValidElement=Bu;ae.lazy=function(e){return{$$typeof:r0,_payload:{_status:-1,_result:e},_init:l0}};ae.memo=function(e,t){return{$$typeof:n0,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Qo.transition;Qo.transition={};try{e()}finally{Qo.transition=t}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(e,t){return st.current.useCallback(e,t)};ae.useContext=function(e){return st.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return st.current.useDeferredValue(e)};ae.useEffect=function(e,t){return st.current.useEffect(e,t)};ae.useId=function(){return st.current.useId()};ae.useImperativeHandle=function(e,t,n){return st.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return st.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return st.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return st.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return st.current.useReducer(e,t,n)};ae.useRef=function(e){return st.current.useRef(e)};ae.useState=function(e){return st.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return st.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return st.current.useTransition()};ae.version="18.2.0";(function(e){e.exports=ae})(Wg);const te=Jg(b),bs=Vg({__proto__:null,default:te},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=b,c0=Symbol.for("react.element"),d0=Symbol.for("react.fragment"),f0=Object.prototype.hasOwnProperty,p0=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h0={key:!0,ref:!0,__self:!0,__source:!0};function _p(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)f0.call(t,r)&&!h0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:c0,type:e,key:o,ref:a,props:i,_owner:p0.current}}Ha.Fragment=d0;Ha.jsx=_p;Ha.jsxs=_p;(function(e){e.exports=Ha})(Gg);const td=Hi.Fragment,d=Hi.jsx,$=Hi.jsxs;var Rs={},$s={},m0={get exports(){return $s},set exports(e){$s=e}},St={},Ps={},g0={get exports(){return Ps},set exports(e){Ps=e}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,W){var H=M.length;M.push(W);e:for(;0<H;){var fe=H-1>>>1,_=M[fe];if(0<i(_,W))M[fe]=W,M[H]=_,H=fe;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var W=M[0],H=M.pop();if(H!==W){M[0]=H;e:for(var fe=0,_=M.length,j=_>>>1;fe<j;){var F=2*(fe+1)-1,K=M[F],A=F+1,re=M[A];if(0>i(K,H))A<_&&0>i(re,K)?(M[fe]=re,M[A]=H,fe=A):(M[fe]=K,M[F]=H,fe=F);else if(A<_&&0>i(re,H))M[fe]=re,M[A]=H,fe=A;else break e}}return W}function i(M,W){var H=M.sortIndex-W.sortIndex;return H!==0?H:M.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,m=null,v=3,w=!1,x=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=M)r(u),W.sortIndex=W.expirationTime,t(s,W);else break;W=n(u)}}function C(M){if(E=!1,y(M),!x)if(n(s)!==null)x=!0,Se(k);else{var W=n(u);W!==null&&Ee(C,W.startTime-M)}}function k(M,W){x=!1,E&&(E=!1,h(T),T=-1),w=!0;var H=v;try{for(y(W),m=n(s);m!==null&&(!(m.expirationTime>W)||M&&!ge());){var fe=m.callback;if(typeof fe=="function"){m.callback=null,v=m.priorityLevel;var _=fe(m.expirationTime<=W);W=e.unstable_now(),typeof _=="function"?m.callback=_:m===n(s)&&r(s),y(W)}else r(s);m=n(s)}if(m!==null)var j=!0;else{var F=n(u);F!==null&&Ee(C,F.startTime-W),j=!1}return j}finally{m=null,v=H,w=!1}}var N=!1,D=null,T=-1,U=5,J=-1;function ge(){return!(e.unstable_now()-J<U)}function ie(){if(D!==null){var M=e.unstable_now();J=M;var W=!0;try{W=D(!0,M)}finally{W?ue():(N=!1,D=null)}}else N=!1}var ue;if(typeof p=="function")ue=function(){p(ie)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,de=le.port2;le.port1.onmessage=ie,ue=function(){de.postMessage(null)}}else ue=function(){g(ie,0)};function Se(M){D=M,N||(N=!0,ue())}function Ee(M,W){T=g(function(){M(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,Se(k))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(M){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var H=v;v=W;try{return M()}finally{v=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,W){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var H=v;v=M;try{return W()}finally{v=H}},e.unstable_scheduleCallback=function(M,W,H){var fe=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?fe+H:fe):H=fe,M){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=H+_,M={id:f++,callback:W,priorityLevel:M,startTime:H,expirationTime:_,sortIndex:-1},H>fe?(M.sortIndex=H,t(u,M),n(s)===null&&M===n(u)&&(E?(h(T),T=-1):E=!0,Ee(C,H-fe))):(M.sortIndex=_,t(s,M),x||w||(x=!0,Se(k))),M},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(M){var W=v;return function(){var H=v;v=W;try{return M.apply(this,arguments)}finally{v=H}}}})(zp);(function(e){e.exports=zp})(g0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=b,wt=Ps;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Up=new Set,Vi={};function yr(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(Vi[e]=t,e=0;e<t.length;e++)Up.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=Object.prototype.hasOwnProperty,y0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},rd={};function v0(e){return Os.call(rd,e)?!0:Os.call(nd,e)?!1:y0.test(e)?rd[e]=!0:(nd[e]=!0,!1)}function x0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w0(e,t,n,r){if(t===null||typeof t>"u"||x0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ut(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hu=/[\-:]([a-z])/g;function Vu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hu,Vu);et[t]=new ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hu,Vu);et[t]=new ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hu,Vu);et[t]=new ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new ut(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ju(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w0(t,n,i,r)&&(n=null),r||i===null?v0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gn=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Ts=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),Wu=Symbol.for("react.forward_ref"),Ns=Symbol.for("react.suspense"),Ls=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),Hp=Symbol.for("react.offscreen"),id=Symbol.iterator;function pi(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,Nl;function Ai(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var Ll=!1;function Dl(e,t){if(!e||Ll)return"";Ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ai(e):""}function S0(e){switch(e.tag){case 5:return Ai(e.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function Ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ar:return"Fragment";case kr:return"Portal";case Ts:return"Profiler";case Gu:return"StrictMode";case Ns:return"Suspense";case Ls:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bp:return(e.displayName||"Context")+".Consumer";case jp:return(e._context.displayName||"Context")+".Provider";case Wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qu:return t=e.displayName||null,t!==null?t:Ds(e.type)||"Memo";case On:t=e._payload,e=e._init;try{return Ds(e(t))}catch{}}return null}function E0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ds(t);case 8:return t===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function C0(e){var t=Vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ao(e){e._valueTracker||(e._valueTracker=C0(e))}function Jp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Is(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function od(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gp(e,t){t=t.checked,t!=null&&Ju(e,"checked",t,!1)}function Ms(e,t){Gp(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_s(e,t.type,n):t.hasOwnProperty("defaultValue")&&_s(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ad(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _s(e,t,n){(t!=="number"||fa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bi=Array.isArray;function Fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ld(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(bi(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function Wp(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bo,qp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(e){k0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oi[t]=Oi[e]})});function Kp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Oi.hasOwnProperty(e)&&Oi[e]?(""+t).trim():t+"px"}function Yp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var A0=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function js(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bs=null;function qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Ur=null,jr=null;function ud(e){if(e=mo(e)){if(typeof Hs!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Qa(t),Hs(e.stateNode,e.type,t))}}function Xp(e){Ur?jr?jr.push(e):jr=[e]:Ur=e}function Zp(){if(Ur){var e=Ur,t=jr;if(jr=Ur=null,ud(e),t)for(e=0;e<t.length;e++)ud(t[e])}}function eh(e,t){return e(t)}function th(){}var Il=!1;function nh(e,t,n){if(Il)return e(t,n);Il=!0;try{return eh(e,t,n)}finally{Il=!1,(Ur!==null||jr!==null)&&(th(),Zp())}}function Gi(e,t){var n=e.stateNode;if(n===null)return null;var r=Qa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Vs=!1;if(dn)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{Vs=!1}function b0(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Ti=!1,pa=null,ha=!1,Js=null,R0={onError:function(e){Ti=!0,pa=e}};function $0(e,t,n,r,i,o,a,l,s){Ti=!1,pa=null,b0.apply(R0,arguments)}function P0(e,t,n,r,i,o,a,l,s){if($0.apply(this,arguments),Ti){if(Ti){var u=pa;Ti=!1,pa=null}else throw Error(I(198));ha||(ha=!0,Js=u)}}function vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cd(e){if(vr(e)!==e)throw Error(I(188))}function O0(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cd(i),e;if(o===r)return cd(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function ih(e){return e=O0(e),e!==null?oh(e):null}function oh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oh(e);if(t!==null)return t;e=e.sibling}return null}var ah=wt.unstable_scheduleCallback,dd=wt.unstable_cancelCallback,T0=wt.unstable_shouldYield,N0=wt.unstable_requestPaint,_e=wt.unstable_now,L0=wt.unstable_getCurrentPriorityLevel,Ku=wt.unstable_ImmediatePriority,lh=wt.unstable_UserBlockingPriority,ma=wt.unstable_NormalPriority,D0=wt.unstable_LowPriority,sh=wt.unstable_IdlePriority,Va=null,Zt=null;function I0(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Va,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:z0,M0=Math.log,_0=Math.LN2;function z0(e){return e>>>=0,e===0?32:31-(M0(e)/_0|0)|0}var Ro=64,$o=4194304;function Ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ri(l):(o&=a,o!==0&&(r=Ri(o)))}else a=n&~i,a!==0?r=Ri(a):o!==0&&(r=Ri(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bt(t),i=1<<n,r|=e[n],t&=~i;return r}function F0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Bt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=F0(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uh(){var e=Ro;return Ro<<=1,!(Ro&4194240)&&(Ro=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function j0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Yu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dh,Xu,fh,ph,hh,Ws=!1,Po=[],_n=null,zn=null,Fn=null,Wi=new Map,Qi=new Map,Nn=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function mi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=mo(t),t!==null&&Xu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function H0(e,t,n,r,i){switch(t){case"focusin":return _n=mi(_n,e,t,n,r,i),!0;case"dragenter":return zn=mi(zn,e,t,n,r,i),!0;case"mouseover":return Fn=mi(Fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wi.set(o,mi(Wi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qi.set(o,mi(Qi.get(o)||null,e,t,n,r,i)),!0}return!1}function mh(e){var t=rr(e.target);if(t!==null){var n=vr(t);if(n!==null){if(t=n.tag,t===13){if(t=rh(n),t!==null){e.blockedOn=t,hh(e.priority,function(){fh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bs=r,n.target.dispatchEvent(r),Bs=null}else return t=mo(n),t!==null&&Xu(t),e.blockedOn=n,!1;t.shift()}return!0}function pd(e,t,n){qo(e)&&n.delete(t)}function V0(){Ws=!1,_n!==null&&qo(_n)&&(_n=null),zn!==null&&qo(zn)&&(zn=null),Fn!==null&&qo(Fn)&&(Fn=null),Wi.forEach(pd),Qi.forEach(pd)}function gi(e,t){e.blockedOn===t&&(e.blockedOn=null,Ws||(Ws=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,V0)))}function qi(e){function t(i){return gi(i,e)}if(0<Po.length){gi(Po[0],e);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&gi(_n,e),zn!==null&&gi(zn,e),Fn!==null&&gi(Fn,e),Wi.forEach(t),Qi.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)mh(n),n.blockedOn===null&&Nn.shift()}var Br=gn.ReactCurrentBatchConfig,ya=!0;function J0(e,t,n,r){var i=xe,o=Br.transition;Br.transition=null;try{xe=1,Zu(e,t,n,r)}finally{xe=i,Br.transition=o}}function G0(e,t,n,r){var i=xe,o=Br.transition;Br.transition=null;try{xe=4,Zu(e,t,n,r)}finally{xe=i,Br.transition=o}}function Zu(e,t,n,r){if(ya){var i=Qs(e,t,n,r);if(i===null)Gl(e,t,r,va,n),fd(e,r);else if(H0(i,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<B0.indexOf(e)){for(;i!==null;){var o=mo(i);if(o!==null&&dh(o),o=Qs(e,t,n,r),o===null&&Gl(e,t,r,va,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Gl(e,t,r,null,n)}}var va=null;function Qs(e,t,n,r){if(va=null,e=qu(r),e=rr(e),e!==null)if(t=vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return va=e,null}function gh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L0()){case Ku:return 1;case lh:return 4;case ma:case D0:return 16;case sh:return 536870912;default:return 16}default:return 16}}var Dn=null,ec=null,Ko=null;function yh(){if(Ko)return Ko;var e,t=ec,n=t.length,r,i="value"in Dn?Dn.value:Dn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ko=i.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function hd(){return!1}function Et(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oo:hd,this.isPropagationStopped=hd,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=Et(ii),ho=Le({},ii,{view:0,detail:0}),W0=Et(ho),_l,zl,yi,Ja=Le({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yi&&(yi&&e.type==="mousemove"?(_l=e.screenX-yi.screenX,zl=e.screenY-yi.screenY):zl=_l=0,yi=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),md=Et(Ja),Q0=Le({},Ja,{dataTransfer:0}),q0=Et(Q0),K0=Le({},ho,{relatedTarget:0}),Fl=Et(K0),Y0=Le({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=Et(Y0),Z0=Le({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),e1=Et(Z0),t1=Le({},ii,{data:0}),gd=Et(t1),n1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i1[e])?!!t[e]:!1}function nc(){return o1}var a1=Le({},ho,{key:function(e){if(e.key){var t=n1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l1=Et(a1),s1=Le({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=Et(s1),u1=Le({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),c1=Et(u1),d1=Le({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),f1=Et(d1),p1=Le({},Ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h1=Et(p1),m1=[9,13,27,32],rc=dn&&"CompositionEvent"in window,Ni=null;dn&&"documentMode"in document&&(Ni=document.documentMode);var g1=dn&&"TextEvent"in window&&!Ni,vh=dn&&(!rc||Ni&&8<Ni&&11>=Ni),vd=String.fromCharCode(32),xd=!1;function xh(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function y1(e,t){switch(e){case"compositionend":return wh(t);case"keypress":return t.which!==32?null:(xd=!0,vd);case"textInput":return e=t.data,e===vd&&xd?null:e;default:return null}}function v1(e,t){if(br)return e==="compositionend"||!rc&&xh(e,t)?(e=yh(),Ko=ec=Dn=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vh&&t.locale!=="ko"?null:t.data;default:return null}}var x1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!x1[e.type]:t==="textarea"}function Sh(e,t,n,r){Xp(r),t=xa(t,"onChange"),0<t.length&&(n=new tc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Li=null,Ki=null;function w1(e){Nh(e,0)}function Ga(e){var t=Pr(e);if(Jp(t))return e}function S1(e,t){if(e==="change")return t}var Eh=!1;if(dn){var Ul;if(dn){var jl="oninput"in document;if(!jl){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),jl=typeof Sd.oninput=="function"}Ul=jl}else Ul=!1;Eh=Ul&&(!document.documentMode||9<document.documentMode)}function Ed(){Li&&(Li.detachEvent("onpropertychange",Ch),Ki=Li=null)}function Ch(e){if(e.propertyName==="value"&&Ga(Ki)){var t=[];Sh(t,Ki,e,qu(e)),nh(w1,t)}}function E1(e,t,n){e==="focusin"?(Ed(),Li=t,Ki=n,Li.attachEvent("onpropertychange",Ch)):e==="focusout"&&Ed()}function C1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ga(Ki)}function k1(e,t){if(e==="click")return Ga(t)}function A1(e,t){if(e==="input"||e==="change")return Ga(t)}function b1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:b1;function Yi(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Os.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,t){var n=Cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function kh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ah(){for(var e=window,t=fa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fa(e.document)}return t}function ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R1(e){var t=Ah(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kh(n.ownerDocument.documentElement,n)){if(r!==null&&ic(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kd(n,o);var a=kd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $1=dn&&"documentMode"in document&&11>=document.documentMode,Rr=null,qs=null,Di=null,Ks=!1;function Ad(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ks||Rr==null||Rr!==fa(r)||(r=Rr,"selectionStart"in r&&ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Yi(Di,r)||(Di=r,r=xa(qs,"onSelect"),0<r.length&&(t=new tc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $r={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Bl={},bh={};dn&&(bh=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Wa(e){if(Bl[e])return Bl[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bh)return Bl[e]=t[n];return e}var Rh=Wa("animationend"),$h=Wa("animationiteration"),Ph=Wa("animationstart"),Oh=Wa("transitionend"),Th=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Th.set(e,t),yr(t,[e])}for(var Hl=0;Hl<bd.length;Hl++){var Vl=bd[Hl],P1=Vl.toLowerCase(),O1=Vl[0].toUpperCase()+Vl.slice(1);Kn(P1,"on"+O1)}Kn(Rh,"onAnimationEnd");Kn($h,"onAnimationIteration");Kn(Ph,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Oh,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T1=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function Rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,P0(r,t,void 0,e),e.currentTarget=null}function Nh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Rd(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Rd(i,l,u),o=s}}}if(ha)throw e=Js,ha=!1,Js=null,e}function be(e,t){var n=t[tu];n===void 0&&(n=t[tu]=new Set);var r=e+"__bubble";n.has(r)||(Lh(t,e,2,!1),n.add(r))}function Jl(e,t,n){var r=0;t&&(r|=4),Lh(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function Xi(e){if(!e[No]){e[No]=!0,Up.forEach(function(n){n!=="selectionchange"&&(T1.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,Jl("selectionchange",!1,t))}}function Lh(e,t,n,r){switch(gh(t)){case 1:var i=J0;break;case 4:i=G0;break;default:i=Zu}n=i.bind(null,t,n,e),i=void 0,!Vs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Gl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=rr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}nh(function(){var u=o,f=qu(n),m=[];e:{var v=Th.get(e);if(v!==void 0){var w=tc,x=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":w=l1;break;case"focusin":x="focus",w=Fl;break;case"focusout":x="blur",w=Fl;break;case"beforeblur":case"afterblur":w=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=c1;break;case Rh:case $h:case Ph:w=X0;break;case Oh:w=f1;break;case"scroll":w=W0;break;case"wheel":w=h1;break;case"copy":case"cut":case"paste":w=e1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=yd}var E=(t&4)!==0,g=!E&&e==="scroll",h=E?v!==null?v+"Capture":null:v;E=[];for(var p=u,y;p!==null;){y=p;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,h!==null&&(C=Gi(p,h),C!=null&&E.push(Zi(p,C,y)))),g)break;p=p.return}0<E.length&&(v=new w(v,x,null,n,f),m.push({event:v,listeners:E}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",v&&n!==Bs&&(x=n.relatedTarget||n.fromElement)&&(rr(x)||x[fn]))break e;if((w||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?rr(x):null,x!==null&&(g=vr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(E=md,C="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(E=yd,C="onPointerLeave",h="onPointerEnter",p="pointer"),g=w==null?v:Pr(w),y=x==null?v:Pr(x),v=new E(C,p+"leave",w,n,f),v.target=g,v.relatedTarget=y,C=null,rr(f)===u&&(E=new E(h,p+"enter",x,n,f),E.target=y,E.relatedTarget=g,C=E),g=C,w&&x)t:{for(E=w,h=x,p=0,y=E;y;y=Sr(y))p++;for(y=0,C=h;C;C=Sr(C))y++;for(;0<p-y;)E=Sr(E),p--;for(;0<y-p;)h=Sr(h),y--;for(;p--;){if(E===h||h!==null&&E===h.alternate)break t;E=Sr(E),h=Sr(h)}E=null}else E=null;w!==null&&$d(m,v,w,E,!1),x!==null&&g!==null&&$d(m,g,x,E,!0)}}e:{if(v=u?Pr(u):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var k=S1;else if(wd(v))if(Eh)k=A1;else{k=C1;var N=E1}else(w=v.nodeName)&&w.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=k1);if(k&&(k=k(e,u))){Sh(m,k,n,f);break e}N&&N(e,v,u),e==="focusout"&&(N=v._wrapperState)&&N.controlled&&v.type==="number"&&_s(v,"number",v.value)}switch(N=u?Pr(u):window,e){case"focusin":(wd(N)||N.contentEditable==="true")&&(Rr=N,qs=u,Di=null);break;case"focusout":Di=qs=Rr=null;break;case"mousedown":Ks=!0;break;case"contextmenu":case"mouseup":case"dragend":Ks=!1,Ad(m,n,f);break;case"selectionchange":if($1)break;case"keydown":case"keyup":Ad(m,n,f)}var D;if(rc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else br?xh(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(vh&&n.locale!=="ko"&&(br||T!=="onCompositionStart"?T==="onCompositionEnd"&&br&&(D=yh()):(Dn=f,ec="value"in Dn?Dn.value:Dn.textContent,br=!0)),N=xa(u,T),0<N.length&&(T=new gd(T,e,null,n,f),m.push({event:T,listeners:N}),D?T.data=D:(D=wh(n),D!==null&&(T.data=D)))),(D=g1?y1(e,n):v1(e,n))&&(u=xa(u,"onBeforeInput"),0<u.length&&(f=new gd("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=D))}Nh(m,t)})}function Zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gi(e,n),o!=null&&r.unshift(Zi(e,o,i)),o=Gi(e,t),o!=null&&r.push(Zi(e,o,i))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $d(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Gi(n,o),s!=null&&a.unshift(Zi(n,s,l))):i||(s=Gi(n,o),s!=null&&a.push(Zi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var N1=/\r\n?/g,L1=/\u0000|\uFFFD/g;function Pd(e){return(typeof e=="string"?e:""+e).replace(N1,`
`).replace(L1,"")}function Lo(e,t,n){if(t=Pd(t),Pd(e)!==t&&n)throw Error(I(425))}function wa(){}var Ys=null,Xs=null;function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,D1=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,I1=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(e){return Od.resolve(null).then(e).catch(M1)}:eu;function M1(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(t)}function Un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var oi=Math.random().toString(36).slice(2),Yt="__reactFiber$"+oi,eo="__reactProps$"+oi,fn="__reactContainer$"+oi,tu="__reactEvents$"+oi,_1="__reactListeners$"+oi,z1="__reactHandles$"+oi;function rr(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Td(e);e!==null;){if(n=e[Yt])return n;e=Td(e)}return t}e=n,n=e.parentNode}return null}function mo(e){return e=e[Yt]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Qa(e){return e[eo]||null}var nu=[],Or=-1;function Yn(e){return{current:e}}function Re(e){0>Or||(e.current=nu[Or],nu[Or]=null,Or--)}function Ae(e,t){Or++,nu[Or]=e.current,e.current=t}var Qn={},ot=Yn(Qn),ht=Yn(!1),ur=Qn;function Wr(e,t){var n=e.type.contextTypes;if(!n)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function mt(e){return e=e.childContextTypes,e!=null}function Sa(){Re(ht),Re(ot)}function Nd(e,t,n){if(ot.current!==Qn)throw Error(I(168));Ae(ot,t),Ae(ht,n)}function Dh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,E0(e)||"Unknown",i));return Le({},n,r)}function Ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,ur=ot.current,Ae(ot,e),Ae(ht,ht.current),!0}function Ld(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Dh(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,Re(ht),Re(ot),Ae(ot,e)):Re(ht),Ae(ht,n)}var on=null,qa=!1,Ql=!1;function Ih(e){on===null?on=[e]:on.push(e)}function F1(e){qa=!0,Ih(e)}function Xn(){if(!Ql&&on!==null){Ql=!0;var e=0,t=xe;try{var n=on;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,qa=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),ah(Ku,Xn),i}finally{xe=t,Ql=!1}}return null}var Tr=[],Nr=0,Ca=null,ka=0,At=[],bt=0,cr=null,an=1,ln="";function er(e,t){Tr[Nr++]=ka,Tr[Nr++]=Ca,Ca=e,ka=t}function Mh(e,t,n){At[bt++]=an,At[bt++]=ln,At[bt++]=cr,cr=e;var r=an;e=ln;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var o=32-Bt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,an=1<<32-Bt(t)+i|n<<i|r,ln=o+e}else an=1<<o|n<<i|r,ln=e}function oc(e){e.return!==null&&(er(e,1),Mh(e,1,0))}function ac(e){for(;e===Ca;)Ca=Tr[--Nr],Tr[Nr]=null,ka=Tr[--Nr],Tr[Nr]=null;for(;e===cr;)cr=At[--bt],At[bt]=null,ln=At[--bt],At[bt]=null,an=At[--bt],At[bt]=null}var xt=null,vt=null,Pe=!1,Ut=null;function _h(e,t){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,vt=Un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:an,overflow:ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,vt=null,!0):!1;default:return!1}}function ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function iu(e){if(Pe){var t=vt;if(t){var n=t;if(!Dd(e,t)){if(ru(e))throw Error(I(418));t=Un(n.nextSibling);var r=xt;t&&Dd(e,t)?_h(r,n):(e.flags=e.flags&-4097|2,Pe=!1,xt=e)}}else{if(ru(e))throw Error(I(418));e.flags=e.flags&-4097|2,Pe=!1,xt=e}}}function Id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Do(e){if(e!==xt)return!1;if(!Pe)return Id(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zs(e.type,e.memoizedProps)),t&&(t=vt)){if(ru(e))throw zh(),Error(I(418));for(;t;)_h(e,t),t=Un(t.nextSibling)}if(Id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=Un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=xt?Un(e.stateNode.nextSibling):null;return!0}function zh(){for(var e=vt;e;)e=Un(e.nextSibling)}function Qr(){vt=xt=null,Pe=!1}function lc(e){Ut===null?Ut=[e]:Ut.push(e)}var U1=gn.ReactCurrentBatchConfig;function zt(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Aa=Yn(null),ba=null,Lr=null,sc=null;function uc(){sc=Lr=ba=null}function cc(e){var t=Aa.current;Re(Aa),e._currentValue=t}function ou(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hr(e,t){ba=e,sc=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(sc!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(ba===null)throw Error(I(308));Lr=e,ba.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var ir=null;function dc(e){ir===null?ir=[e]:ir.push(e)}function Fh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,dc(t)):(n.next=i.next,i.next=n),t.interleaved=n,pn(e,r)}function pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tn=!1;function fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,pn(e,n)}return i=r.interleaved,i===null?(t.next=t,dc(r)):(t.next=i.next,i.next=t),r.interleaved=t,pn(e,n)}function Xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yu(e,n)}}function Md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ra(e,t,n,r){var i=e.updateQueue;Tn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;a=0,f=u=s=null,l=o;do{var v=l.lane,w=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,E=l;switch(v=t,w=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){m=x.call(w,m,v);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,v=typeof x=="function"?x.call(w,m,v):x,v==null)break e;m=Le({},m,v);break e;case 2:Tn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else w={eventTime:w,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=w,s=m):f=f.next=w,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(f===null&&(s=m),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fr|=a,e.lanes=a,e.memoizedState=m}}function _d(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var jh=new Fp.Component().refs;function au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ka={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=Hn(e),o=sn(r,i);o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,i),t!==null&&(Ht(t,e,i,r),Xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=Hn(e),o=sn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,i),t!==null&&(Ht(t,e,i,r),Xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=Hn(e),i=sn(n,r);i.tag=2,t!=null&&(i.callback=t),t=jn(e,i,r),t!==null&&(Ht(t,e,r,n),Xo(t,e,r))}};function zd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,o):!0}function Bh(e,t,n){var r=!1,i=Qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Pt(o):(i=mt(t)?ur:ot.current,r=t.contextTypes,o=(r=r!=null)?Wr(e,i):Qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ka,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ka.enqueueReplaceState(t,t.state,null)}function lu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=jh,fc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Pt(o):(o=mt(t)?ur:ot.current,i.context=Wr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(au(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ka.enqueueReplaceState(i,i.state,null),Ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===jh&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ud(e){var t=e._init;return t(e._payload)}function Hh(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Vn(h,p),h.index=0,h.sibling=null,h}function o(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,y,C){return p===null||p.tag!==6?(p=ts(y,h.mode,C),p.return=h,p):(p=i(p,y),p.return=h,p)}function s(h,p,y,C){var k=y.type;return k===Ar?f(h,p,y.props.children,C,y.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===On&&Ud(k)===p.type)?(C=i(p,y.props),C.ref=vi(h,p,y),C.return=h,C):(C=ia(y.type,y.key,y.props,null,h.mode,C),C.ref=vi(h,p,y),C.return=h,C)}function u(h,p,y,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ns(y,h.mode,C),p.return=h,p):(p=i(p,y.children||[]),p.return=h,p)}function f(h,p,y,C,k){return p===null||p.tag!==7?(p=sr(y,h.mode,C,k),p.return=h,p):(p=i(p,y),p.return=h,p)}function m(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ts(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ko:return y=ia(p.type,p.key,p.props,null,h.mode,y),y.ref=vi(h,null,p),y.return=h,y;case kr:return p=ns(p,h.mode,y),p.return=h,p;case On:var C=p._init;return m(h,C(p._payload),y)}if(bi(p)||pi(p))return p=sr(p,h.mode,y,null),p.return=h,p;Io(h,p)}return null}function v(h,p,y,C){var k=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:l(h,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:return y.key===k?s(h,p,y,C):null;case kr:return y.key===k?u(h,p,y,C):null;case On:return k=y._init,v(h,p,k(y._payload),C)}if(bi(y)||pi(y))return k!==null?null:f(h,p,y,C,null);Io(h,y)}return null}function w(h,p,y,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(y)||null,l(p,h,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ko:return h=h.get(C.key===null?y:C.key)||null,s(p,h,C,k);case kr:return h=h.get(C.key===null?y:C.key)||null,u(p,h,C,k);case On:var N=C._init;return w(h,p,y,N(C._payload),k)}if(bi(C)||pi(C))return h=h.get(y)||null,f(p,h,C,k,null);Io(p,C)}return null}function x(h,p,y,C){for(var k=null,N=null,D=p,T=p=0,U=null;D!==null&&T<y.length;T++){D.index>T?(U=D,D=null):U=D.sibling;var J=v(h,D,y[T],C);if(J===null){D===null&&(D=U);break}e&&D&&J.alternate===null&&t(h,D),p=o(J,p,T),N===null?k=J:N.sibling=J,N=J,D=U}if(T===y.length)return n(h,D),Pe&&er(h,T),k;if(D===null){for(;T<y.length;T++)D=m(h,y[T],C),D!==null&&(p=o(D,p,T),N===null?k=D:N.sibling=D,N=D);return Pe&&er(h,T),k}for(D=r(h,D);T<y.length;T++)U=w(D,h,T,y[T],C),U!==null&&(e&&U.alternate!==null&&D.delete(U.key===null?T:U.key),p=o(U,p,T),N===null?k=U:N.sibling=U,N=U);return e&&D.forEach(function(ge){return t(h,ge)}),Pe&&er(h,T),k}function E(h,p,y,C){var k=pi(y);if(typeof k!="function")throw Error(I(150));if(y=k.call(y),y==null)throw Error(I(151));for(var N=k=null,D=p,T=p=0,U=null,J=y.next();D!==null&&!J.done;T++,J=y.next()){D.index>T?(U=D,D=null):U=D.sibling;var ge=v(h,D,J.value,C);if(ge===null){D===null&&(D=U);break}e&&D&&ge.alternate===null&&t(h,D),p=o(ge,p,T),N===null?k=ge:N.sibling=ge,N=ge,D=U}if(J.done)return n(h,D),Pe&&er(h,T),k;if(D===null){for(;!J.done;T++,J=y.next())J=m(h,J.value,C),J!==null&&(p=o(J,p,T),N===null?k=J:N.sibling=J,N=J);return Pe&&er(h,T),k}for(D=r(h,D);!J.done;T++,J=y.next())J=w(D,h,T,J.value,C),J!==null&&(e&&J.alternate!==null&&D.delete(J.key===null?T:J.key),p=o(J,p,T),N===null?k=J:N.sibling=J,N=J);return e&&D.forEach(function(ie){return t(h,ie)}),Pe&&er(h,T),k}function g(h,p,y,C){if(typeof y=="object"&&y!==null&&y.type===Ar&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:e:{for(var k=y.key,N=p;N!==null;){if(N.key===k){if(k=y.type,k===Ar){if(N.tag===7){n(h,N.sibling),p=i(N,y.props.children),p.return=h,h=p;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===On&&Ud(k)===N.type){n(h,N.sibling),p=i(N,y.props),p.ref=vi(h,N,y),p.return=h,h=p;break e}n(h,N);break}else t(h,N);N=N.sibling}y.type===Ar?(p=sr(y.props.children,h.mode,C,y.key),p.return=h,h=p):(C=ia(y.type,y.key,y.props,null,h.mode,C),C.ref=vi(h,p,y),C.return=h,h=C)}return a(h);case kr:e:{for(N=y.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(h,p.sibling),p=i(p,y.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ns(y,h.mode,C),p.return=h,h=p}return a(h);case On:return N=y._init,g(h,p,N(y._payload),C)}if(bi(y))return x(h,p,y,C);if(pi(y))return E(h,p,y,C);Io(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,y),p.return=h,h=p):(n(h,p),p=ts(y,h.mode,C),p.return=h,h=p),a(h)):n(h,p)}return g}var qr=Hh(!0),Vh=Hh(!1),go={},en=Yn(go),to=Yn(go),no=Yn(go);function or(e){if(e===go)throw Error(I(174));return e}function pc(e,t){switch(Ae(no,t),Ae(to,e),Ae(en,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fs(t,e)}Re(en),Ae(en,t)}function Kr(){Re(en),Re(to),Re(no)}function Jh(e){or(no.current);var t=or(en.current),n=Fs(t,e.type);t!==n&&(Ae(to,e),Ae(en,n))}function hc(e){to.current===e&&(Re(en),Re(to))}var Te=Yn(0);function $a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function mc(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var Zo=gn.ReactCurrentDispatcher,Kl=gn.ReactCurrentBatchConfig,dr=0,Ne=null,He=null,Qe=null,Pa=!1,Ii=!1,ro=0,j1=0;function nt(){throw Error(I(321))}function gc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function yc(e,t,n,r,i,o){if(dr=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zo.current=e===null||e.memoizedState===null?J1:G1,e=n(r,i),Ii){o=0;do{if(Ii=!1,ro=0,25<=o)throw Error(I(301));o+=1,Qe=He=null,t.updateQueue=null,Zo.current=W1,e=n(r,i)}while(Ii)}if(Zo.current=Oa,t=He!==null&&He.next!==null,dr=0,Qe=He=Ne=null,Pa=!1,t)throw Error(I(300));return e}function vc(){var e=ro!==0;return ro=0,e}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ne.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ot(){if(He===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Qe===null?Ne.memoizedState:Qe.next;if(t!==null)Qe=t,He=e;else{if(e===null)throw Error(I(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Qe===null?Ne.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function io(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=Ot(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var f=u.lane;if((dr&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=m,a=r):s=s.next=m,Ne.lanes|=f,fr|=f}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Vt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ne.lanes|=o,fr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=Ot(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Vt(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gh(){}function Wh(e,t){var n=Ne,r=Ot(),i=t(),o=!Vt(r.memoizedState,i);if(o&&(r.memoizedState=i,ft=!0),r=r.queue,xc(Kh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,oo(9,qh.bind(null,n,r,i,t),void 0,null),qe===null)throw Error(I(349));dr&30||Qh(n,t,i)}return i}function Qh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qh(e,t,n,r){t.value=n,t.getSnapshot=r,Yh(t)&&Xh(e)}function Kh(e,t,n){return n(function(){Yh(t)&&Xh(e)})}function Yh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function Xh(e){var t=pn(e,1);t!==null&&Ht(t,e,1,-1)}function jd(e){var t=qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=V1.bind(null,Ne,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zh(){return Ot().memoizedState}function ea(e,t,n,r){var i=qt();Ne.flags|=e,i.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function Ya(e,t,n,r){var i=Ot();r=r===void 0?null:r;var o=void 0;if(He!==null){var a=He.memoizedState;if(o=a.destroy,r!==null&&gc(r,a.deps)){i.memoizedState=oo(t,n,o,r);return}}Ne.flags|=e,i.memoizedState=oo(1|t,n,o,r)}function Bd(e,t){return ea(8390656,8,e,t)}function xc(e,t){return Ya(2048,8,e,t)}function em(e,t){return Ya(4,2,e,t)}function tm(e,t){return Ya(4,4,e,t)}function nm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rm(e,t,n){return n=n!=null?n.concat([e]):null,Ya(4,4,nm.bind(null,t,e),n)}function wc(){}function im(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function om(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function am(e,t,n){return dr&21?(Vt(n,t)||(n=uh(),Ne.lanes|=n,fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function B1(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=Kl.transition;Kl.transition={};try{e(!1),t()}finally{xe=n,Kl.transition=r}}function lm(){return Ot().memoizedState}function H1(e,t,n){var r=Hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sm(e))um(t,n);else if(n=Fh(e,t,n,r),n!==null){var i=lt();Ht(n,e,r,i),cm(n,t,r)}}function V1(e,t,n){var r=Hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sm(e))um(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Vt(l,a)){var s=t.interleaved;s===null?(i.next=i,dc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Fh(e,t,i,r),n!==null&&(i=lt(),Ht(n,e,r,i),cm(n,t,r))}}function sm(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function um(e,t){Ii=Pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yu(e,n)}}var Oa={readContext:Pt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},J1={readContext:Pt,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Bd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ea(4194308,4,nm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=H1.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:jd,useDebugValue:wc,useDeferredValue:function(e){return qt().memoizedState=e},useTransition:function(){var e=jd(!1),t=e[0];return e=B1.bind(null,e[1]),qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=qt();if(Pe){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),qe===null)throw Error(I(349));dr&30||Qh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bd(Kh.bind(null,r,o,e),[e]),r.flags|=2048,oo(9,qh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qt(),t=qe.identifierPrefix;if(Pe){var n=ln,r=an;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ro++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=j1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G1={readContext:Pt,useCallback:im,useContext:Pt,useEffect:xc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:om,useReducer:Yl,useRef:Zh,useState:function(){return Yl(io)},useDebugValue:wc,useDeferredValue:function(e){var t=Ot();return am(t,He.memoizedState,e)},useTransition:function(){var e=Yl(io)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Gh,useSyncExternalStore:Wh,useId:lm,unstable_isNewReconciler:!1},W1={readContext:Pt,useCallback:im,useContext:Pt,useEffect:xc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:om,useReducer:Xl,useRef:Zh,useState:function(){return Xl(io)},useDebugValue:wc,useDeferredValue:function(e){var t=Ot();return He===null?t.memoizedState=e:am(t,He.memoizedState,e)},useTransition:function(){var e=Xl(io)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Gh,useSyncExternalStore:Wh,useId:lm,unstable_isNewReconciler:!1};function Yr(e,t){try{var n="",r=t;do n+=S0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function su(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function dm(e,t,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,vu=r),su(e,t)},n}function fm(e,t,n){n=sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){su(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){su(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Q1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sy.bind(null,e,t,n),t.then(e,e))}function Vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sn(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var q1=gn.ReactCurrentOwner,ft=!1;function at(e,t,n,r){t.child=e===null?Vh(t,null,n,r):qr(t,e.child,n,r)}function Gd(e,t,n,r,i){n=n.render;var o=t.ref;return Hr(t,i),r=yc(e,t,n,r,o,i),n=vc(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(Pe&&n&&oc(t),t.flags|=1,at(e,t,r,i),t.child)}function Wd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,pm(e,t,o,r,i)):(e=ia(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(a,r)&&e.ref===t.ref)return hn(e,t,i)}return t.flags|=1,e=Vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function pm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yi(o,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,hn(e,t,i)}return uu(e,t,n,r,i)}function hm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Ir,yt),yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(Ir,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ae(Ir,yt),yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ae(Ir,yt),yt|=r;return at(e,t,i,n),t.child}function mm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function uu(e,t,n,r,i){var o=mt(n)?ur:ot.current;return o=Wr(t,o),Hr(t,i),n=yc(e,t,n,r,o,i),r=vc(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(Pe&&r&&oc(t),t.flags|=1,at(e,t,n,i),t.child)}function Qd(e,t,n,r,i){if(mt(n)){var o=!0;Ea(t)}else o=!1;if(Hr(t,i),t.stateNode===null)ta(e,t),Bh(t,n,r),lu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=mt(n)?ur:ot.current,u=Wr(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Fd(t,a,r,u),Tn=!1;var v=t.memoizedState;a.state=v,Ra(t,r,a,i),s=t.memoizedState,l!==r||v!==s||ht.current||Tn?(typeof f=="function"&&(au(t,n,f,r),s=t.memoizedState),(l=Tn||zd(t,n,l,r,v,s,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Uh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:zt(t.type,l),a.props=u,m=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Pt(s):(s=mt(n)?ur:ot.current,s=Wr(t,s));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||v!==s)&&Fd(t,a,r,s),Tn=!1,v=t.memoizedState,a.state=v,Ra(t,r,a,i);var x=t.memoizedState;l!==m||v!==x||ht.current||Tn?(typeof w=="function"&&(au(t,n,w,r),x=t.memoizedState),(u=Tn||zd(t,n,u,r,v,x,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return cu(e,t,n,r,o,i)}function cu(e,t,n,r,i,o){mm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ld(t,n,!1),hn(e,t,o);r=t.stateNode,q1.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=qr(t,e.child,null,o),t.child=qr(t,null,l,o)):at(e,t,l,o),t.memoizedState=r.state,i&&Ld(t,n,!0),t.child}function gm(e){var t=e.stateNode;t.pendingContext?Nd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nd(e,t.context,!1),pc(e,t.containerInfo)}function qd(e,t,n,r,i){return Qr(),lc(i),t.flags|=256,at(e,t,n,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(e){return{baseLanes:e,cachePool:null,transitions:null}}function ym(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ae(Te,i&1),e===null)return iu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=el(a,r,0,null),e=sr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fu(n),t.memoizedState=du,e):Sc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return K1(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Vn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Vn(l,o):(o=sr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?fu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=du,r}return o=e.child,e=o.sibling,r=Vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sc(e,t){return t=el({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&lc(r),qr(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(I(422))),Mo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=el({mode:"visible",children:r.children},i,0,null),o=sr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&qr(t,e.child,null,a),t.child.memoizedState=fu(a),t.memoizedState=du,o);if(!(t.mode&1))return Mo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(I(419)),r=Zl(o,r,void 0),Mo(e,t,a,r)}if(l=(a&e.childLanes)!==0,ft||l){if(r=qe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pn(e,i),Ht(r,e,i,-1))}return Rc(),r=Zl(Error(I(421))),Mo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=uy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=Un(i.nextSibling),xt=t,Pe=!0,Ut=null,e!==null&&(At[bt++]=an,At[bt++]=ln,At[bt++]=cr,an=e.id,ln=e.overflow,cr=t),t=Sc(t,r.children),t.flags|=4096,t)}function Kd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ou(e.return,t,n)}function es(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kd(e,n,t);else if(e.tag===19)Kd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ae(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$a(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),es(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$a(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}es(t,!0,n,null,o);break;case"together":es(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ta(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Y1(e,t,n){switch(t.tag){case 3:gm(t),Qr();break;case 5:Jh(t);break;case 1:mt(t.type)&&Ea(t);break;case 4:pc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ae(Aa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?ym(e,t,n):(Ae(Te,Te.current&1),e=hn(e,t,n),e!==null?e.sibling:null);Ae(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,hm(e,t,n)}return hn(e,t,n)}var xm,pu,wm,Sm;xm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pu=function(){};wm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,or(en.current);var o=null;switch(n){case"input":i=Is(e,i),r=Is(e,r),o=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),o=[];break;case"textarea":i=zs(e,i),r=zs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wa)}Us(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&be("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Sm=function(e,t,n,r){n!==r&&(t.flags|=4)};function xi(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function X1(e,t,n){var r=t.pendingProps;switch(ac(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return mt(t.type)&&Sa(),rt(t),null;case 3:return r=t.stateNode,Kr(),Re(ht),Re(ot),mc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Do(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ut!==null&&(Su(Ut),Ut=null))),pu(e,t),rt(t),null;case 5:hc(t);var i=or(no.current);if(n=t.type,e!==null&&t.stateNode!=null)wm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return rt(t),null}if(e=or(en.current),Do(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yt]=t,r[eo]=o,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<$i.length;i++)be($i[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":od(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":ld(r,o),be("invalid",r)}Us(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Lo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Lo(r.textContent,l,e),i=["children",""+l]):Vi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&be("scroll",r)}switch(n){case"input":Ao(r),ad(r,o,!0);break;case"textarea":Ao(r),sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yt]=t,e[eo]=r,xm(e,t,!1,!1),t.stateNode=e;e:{switch(a=js(n,r),n){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<$i.length;i++)be($i[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":od(e,r),i=Is(e,r),be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),be("invalid",e);break;case"textarea":ld(e,r),i=zs(e,r),be("invalid",e);break;default:i=r}Us(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Yp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&qp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ji(e,s):typeof s=="number"&&Ji(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&be("scroll",e):s!=null&&Ju(e,o,s,a))}switch(n){case"input":Ao(e),ad(e,r,!1);break;case"textarea":Ao(e),sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Sm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=or(no.current),or(en.current),Do(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(o=r.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return rt(t),null;case 13:if(Re(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&vt!==null&&t.mode&1&&!(t.flags&128))zh(),Qr(),t.flags|=98560,o=!1;else if(o=Do(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Yt]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),o=!1}else Ut!==null&&(Su(Ut),Ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Ve===0&&(Ve=3):Rc())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return Kr(),pu(e,t),e===null&&Xi(t.stateNode.containerInfo),rt(t),null;case 10:return cc(t.type._context),rt(t),null;case 17:return mt(t.type)&&Sa(),rt(t),null;case 19:if(Re(Te),o=t.memoizedState,o===null)return rt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)xi(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=$a(e),a!==null){for(t.flags|=128,xi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ae(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&_e()>Xr&&(t.flags|=128,r=!0,xi(o,!1),t.lanes=4194304)}else{if(!r)if(e=$a(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Pe)return rt(t),null}else 2*_e()-o.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,r=!0,xi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,n=Te.current,Ae(Te,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return bc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?yt&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function Z1(e,t){switch(ac(t),t.tag){case 1:return mt(t.type)&&Sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),Re(ht),Re(ot),mc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hc(t),null;case 13:if(Re(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(Te),null;case 4:return Kr(),null;case 10:return cc(t.type._context),null;case 22:case 23:return bc(),null;case 24:return null;default:return null}}var _o=!1,it=!1,ey=typeof WeakSet=="function"?WeakSet:Set,B=null;function Dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function hu(e,t,n){try{n()}catch(r){De(e,t,r)}}var Yd=!1;function ty(e,t){if(Ys=ya,e=Ah(),ic(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,m=e,v=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==o||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(w=m.firstChild)!==null;)v=m,m=w;for(;;){if(m===e)break t;if(v===n&&++u===i&&(l=a),v===o&&++f===r&&(s=a),(w=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xs={focusedElem:e,selectionRange:n},ya=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,g=x.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?E:zt(t.type,E),g);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(C){De(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return x=Yd,Yd=!1,x}function Mi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hu(t,n,o)}i=i.next}while(i!==r)}}function Xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Em(e){var t=e.alternate;t!==null&&(e.alternate=null,Em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[eo],delete t[tu],delete t[_1],delete t[z1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cm(e){return e.tag===5||e.tag===3||e.tag===4}function Xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wa));else if(r!==4&&(e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}var Xe=null,Ft=!1;function wn(e,t,n){for(n=n.child;n!==null;)km(e,t,n),n=n.sibling}function km(e,t,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Va,n)}catch{}switch(n.tag){case 5:it||Dr(n,t);case 6:var r=Xe,i=Ft;Xe=null,wn(e,t,n),Xe=r,Ft=i,Xe!==null&&(Ft?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Ft?(e=Xe,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),qi(e)):Wl(Xe,n.stateNode));break;case 4:r=Xe,i=Ft,Xe=n.stateNode.containerInfo,Ft=!0,wn(e,t,n),Xe=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&hu(n,t,a),i=i.next}while(i!==r)}wn(e,t,n);break;case 1:if(!it&&(Dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,t,l)}wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,wn(e,t,n),it=r):wn(e,t,n);break;default:wn(e,t,n)}}function Zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ey),t.forEach(function(r){var i=cy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,Ft=!1;break e;case 3:Xe=l.stateNode.containerInfo,Ft=!0;break e;case 4:Xe=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Xe===null)throw Error(I(160));km(o,a,i),Xe=null,Ft=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Am(t,e),t=t.sibling}function Am(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Qt(e),r&4){try{Mi(3,e,e.return),Xa(3,e)}catch(E){De(e,e.return,E)}try{Mi(5,e,e.return)}catch(E){De(e,e.return,E)}}break;case 1:Mt(t,e),Qt(e),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(Mt(t,e),Qt(e),r&512&&n!==null&&Dr(n,n.return),e.flags&32){var i=e.stateNode;try{Ji(i,"")}catch(E){De(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Gp(i,o),js(l,a);var u=js(l,o);for(a=0;a<s.length;a+=2){var f=s[a],m=s[a+1];f==="style"?Yp(i,m):f==="dangerouslySetInnerHTML"?qp(i,m):f==="children"?Ji(i,m):Ju(i,f,m,u)}switch(l){case"input":Ms(i,o);break;case"textarea":Wp(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Fr(i,!!o.multiple,w,!1):v!==!!o.multiple&&(o.defaultValue!=null?Fr(i,!!o.multiple,o.defaultValue,!0):Fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[eo]=o}catch(E){De(e,e.return,E)}}break;case 6:if(Mt(t,e),Qt(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(E){De(e,e.return,E)}}break;case 3:if(Mt(t,e),Qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(t.containerInfo)}catch(E){De(e,e.return,E)}break;case 4:Mt(t,e),Qt(e);break;case 13:Mt(t,e),Qt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(kc=_e())),r&4&&Zd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||f,Mt(t,e),it=u):Mt(t,e),Qt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(B=e,f=e.child;f!==null;){for(m=B=f;B!==null;){switch(v=B,w=v.child,v.tag){case 0:case 11:case 14:case 15:Mi(4,v,v.return);break;case 1:Dr(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(E){De(r,n,E)}}break;case 5:Dr(v,v.return);break;case 22:if(v.memoizedState!==null){tf(m);continue}}w!==null?(w.return=v,B=w):tf(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Kp("display",a))}catch(E){De(e,e.return,E)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(E){De(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Mt(t,e),Qt(e),r&4&&Zd(e);break;case 21:break;default:Mt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cm(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ji(i,""),r.flags&=-33);var o=Xd(e);yu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Xd(e);gu(e,l,a);break;default:throw Error(I(161))}}catch(s){De(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ny(e,t,n){B=e,bm(e)}function bm(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||_o;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=_o;var u=it;if(_o=a,(it=s)&&!u)for(B=i;B!==null;)a=B,s=a.child,a.tag===22&&a.memoizedState!==null?nf(i):s!==null?(s.return=a,B=s):nf(i);for(;o!==null;)B=o,bm(o),o=o.sibling;B=i,_o=l,it=u}ef(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):ef(e)}}function ef(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||Xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_d(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_d(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&qi(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}it||t.flags&512&&mu(t)}catch(v){De(t,t.return,v)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function tf(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function nf(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xa(4,t)}catch(s){De(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){De(t,i,s)}}var o=t.return;try{mu(t)}catch(s){De(t,o,s)}break;case 5:var a=t.return;try{mu(t)}catch(s){De(t,a,s)}}}catch(s){De(t,t.return,s)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var ry=Math.ceil,Ta=gn.ReactCurrentDispatcher,Ec=gn.ReactCurrentOwner,$t=gn.ReactCurrentBatchConfig,me=0,qe=null,Fe=null,Ze=0,yt=0,Ir=Yn(0),Ve=0,ao=null,fr=0,Za=0,Cc=0,_i=null,dt=null,kc=0,Xr=1/0,nn=null,Na=!1,vu=null,Bn=null,zo=!1,In=null,La=0,zi=0,xu=null,na=-1,ra=0;function lt(){return me&6?_e():na!==-1?na:na=_e()}function Hn(e){return e.mode&1?me&2&&Ze!==0?Ze&-Ze:U1.transition!==null?(ra===0&&(ra=uh()),ra):(e=xe,e!==0||(e=window.event,e=e===void 0?16:gh(e.type)),e):1}function Ht(e,t,n,r){if(50<zi)throw zi=0,xu=null,Error(I(185));po(e,n,r),(!(me&2)||e!==qe)&&(e===qe&&(!(me&2)&&(Za|=n),Ve===4&&Ln(e,Ze)),gt(e,r),n===1&&me===0&&!(t.mode&1)&&(Xr=_e()+500,qa&&Xn()))}function gt(e,t){var n=e.callbackNode;U0(e,t);var r=ga(e,e===qe?Ze:0);if(r===0)n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dd(n),t===1)e.tag===0?F1(rf.bind(null,e)):Ih(rf.bind(null,e)),I1(function(){!(me&6)&&Xn()}),n=null;else{switch(ch(r)){case 1:n=Ku;break;case 4:n=lh;break;case 16:n=ma;break;case 536870912:n=sh;break;default:n=ma}n=Dm(n,Rm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rm(e,t){if(na=-1,ra=0,me&6)throw Error(I(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var r=ga(e,e===qe?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Da(e,r);else{t=r;var i=me;me|=2;var o=Pm();(qe!==e||Ze!==t)&&(nn=null,Xr=_e()+500,lr(e,t));do try{ay();break}catch(l){$m(e,l)}while(1);uc(),Ta.current=o,me=i,Fe!==null?t=0:(qe=null,Ze=0,t=Ve)}if(t!==0){if(t===2&&(i=Gs(e),i!==0&&(r=i,t=wu(e,i))),t===1)throw n=ao,lr(e,0),Ln(e,r),gt(e,_e()),n;if(t===6)Ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!iy(i)&&(t=Da(e,r),t===2&&(o=Gs(e),o!==0&&(r=o,t=wu(e,o))),t===1))throw n=ao,lr(e,0),Ln(e,r),gt(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:tr(e,dt,nn);break;case 3:if(Ln(e,r),(r&130023424)===r&&(t=kc+500-_e(),10<t)){if(ga(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=eu(tr.bind(null,e,dt,nn),t);break}tr(e,dt,nn);break;case 4:if(Ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Bt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ry(r/1960))-r,10<r){e.timeoutHandle=eu(tr.bind(null,e,dt,nn),r);break}tr(e,dt,nn);break;case 5:tr(e,dt,nn);break;default:throw Error(I(329))}}}return gt(e,_e()),e.callbackNode===n?Rm.bind(null,e):null}function wu(e,t){var n=_i;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=Da(e,t),e!==2&&(t=dt,dt=n,t!==null&&Su(t)),e}function Su(e){dt===null?dt=e:dt.push.apply(dt,e)}function iy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~Cc,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;e[n]=-1,t&=~r}}function rf(e){if(me&6)throw Error(I(327));Vr();var t=ga(e,0);if(!(t&1))return gt(e,_e()),null;var n=Da(e,t);if(e.tag!==0&&n===2){var r=Gs(e);r!==0&&(t=r,n=wu(e,r))}if(n===1)throw n=ao,lr(e,0),Ln(e,t),gt(e,_e()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,dt,nn),gt(e,_e()),null}function Ac(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Xr=_e()+500,qa&&Xn())}}function pr(e){In!==null&&In.tag===0&&!(me&6)&&Vr();var t=me;me|=1;var n=$t.transition,r=xe;try{if($t.transition=null,xe=1,e)return e()}finally{xe=r,$t.transition=n,me=t,!(me&6)&&Xn()}}function bc(){yt=Ir.current,Re(Ir)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D1(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(ac(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sa();break;case 3:Kr(),Re(ht),Re(ot),mc();break;case 5:hc(r);break;case 4:Kr();break;case 13:Re(Te);break;case 19:Re(Te);break;case 10:cc(r.type._context);break;case 22:case 23:bc()}n=n.return}if(qe=e,Fe=e=Vn(e.current,null),Ze=yt=t,Ve=0,ao=null,Cc=Za=fr=0,dt=_i=null,ir!==null){for(t=0;t<ir.length;t++)if(n=ir[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ir=null}return e}function $m(e,t){do{var n=Fe;try{if(uc(),Zo.current=Oa,Pa){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pa=!1}if(dr=0,Qe=He=Ne=null,Ii=!1,ro=0,Ec.current=null,n===null||n.return===null){Ve=1,ao=t,Fe=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Vd(a);if(w!==null){w.flags&=-257,Jd(w,a,l,o,t),w.mode&1&&Hd(o,u,t),t=w,s=u;var x=t.updateQueue;if(x===null){var E=new Set;E.add(s),t.updateQueue=E}else x.add(s);break e}else{if(!(t&1)){Hd(o,u,t),Rc();break e}s=Error(I(426))}}else if(Pe&&l.mode&1){var g=Vd(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Jd(g,a,l,o,t),lc(Yr(s,l));break e}}o=s=Yr(s,l),Ve!==4&&(Ve=2),_i===null?_i=[o]:_i.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=dm(o,s,t);Md(o,h);break e;case 1:l=s;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Bn===null||!Bn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=fm(o,l,t);Md(o,C);break e}}o=o.return}while(o!==null)}Tm(n)}catch(k){t=k,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function Pm(){var e=Ta.current;return Ta.current=Oa,e===null?Oa:e}function Rc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),qe===null||!(fr&268435455)&&!(Za&268435455)||Ln(qe,Ze)}function Da(e,t){var n=me;me|=2;var r=Pm();(qe!==e||Ze!==t)&&(nn=null,lr(e,t));do try{oy();break}catch(i){$m(e,i)}while(1);if(uc(),me=n,Ta.current=r,Fe!==null)throw Error(I(261));return qe=null,Ze=0,Ve}function oy(){for(;Fe!==null;)Om(Fe)}function ay(){for(;Fe!==null&&!T0();)Om(Fe)}function Om(e){var t=Lm(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?Tm(e):Fe=t,Ec.current=null}function Tm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Z1(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Fe=null;return}}else if(n=X1(n,t,yt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Ve===0&&(Ve=5)}function tr(e,t,n){var r=xe,i=$t.transition;try{$t.transition=null,xe=1,ly(e,t,n,r)}finally{$t.transition=i,xe=r}return null}function ly(e,t,n,r){do Vr();while(In!==null);if(me&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(j0(e,o),e===qe&&(Fe=qe=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,Dm(ma,function(){return Vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$t.transition,$t.transition=null;var a=xe;xe=1;var l=me;me|=4,Ec.current=null,ty(e,n),Am(n,e),R1(Xs),ya=!!Ys,Xs=Ys=null,e.current=n,ny(n),N0(),me=l,xe=a,$t.transition=o}else e.current=n;if(zo&&(zo=!1,In=e,La=i),o=e.pendingLanes,o===0&&(Bn=null),I0(n.stateNode),gt(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=vu,vu=null,e;return La&1&&e.tag!==0&&Vr(),o=e.pendingLanes,o&1?e===xu?zi++:(zi=0,xu=e):zi=0,Xn(),null}function Vr(){if(In!==null){var e=ch(La),t=$t.transition,n=xe;try{if($t.transition=null,xe=16>e?16:e,In===null)var r=!1;else{if(e=In,In=null,La=0,me&6)throw Error(I(331));var i=me;for(me|=4,B=e.current;B!==null;){var o=B,a=o.child;if(B.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(B=u;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Mi(8,f,o)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var v=f.sibling,w=f.return;if(Em(f),f===u){B=null;break}if(v!==null){v.return=w,B=v;break}B=w}}}var x=o.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}B=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,B=a;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,B=h;break e}B=o.return}}var p=e.current;for(B=p;B!==null;){a=B;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,B=y;else e:for(a=p;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xa(9,l)}}catch(k){De(l,l.return,k)}if(l===a){B=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,B=C;break e}B=l.return}}if(me=i,Xn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Va,e)}catch{}r=!0}return r}finally{xe=n,$t.transition=t}}return!1}function of(e,t,n){t=Yr(n,t),t=dm(e,t,1),e=jn(e,t,1),t=lt(),e!==null&&(po(e,1,t),gt(e,t))}function De(e,t,n){if(e.tag===3)of(e,e,n);else for(;t!==null;){if(t.tag===3){of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Yr(n,e),e=fm(t,e,1),t=jn(t,e,1),e=lt(),t!==null&&(po(t,1,e),gt(t,e));break}}t=t.return}}function sy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(Ze&n)===n&&(Ve===4||Ve===3&&(Ze&130023424)===Ze&&500>_e()-kc?lr(e,0):Cc|=n),gt(e,t)}function Nm(e,t){t===0&&(e.mode&1?(t=$o,$o<<=1,!($o&130023424)&&($o=4194304)):t=1);var n=lt();e=pn(e,t),e!==null&&(po(e,t,n),gt(e,n))}function uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nm(e,n)}function cy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Nm(e,n)}var Lm;Lm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,Y1(e,t,n);ft=!!(e.flags&131072)}else ft=!1,Pe&&t.flags&1048576&&Mh(t,ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ta(e,t),e=t.pendingProps;var i=Wr(t,ot.current);Hr(t,n),i=yc(null,t,r,e,i,n);var o=vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(o=!0,Ea(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fc(t),i.updater=Ka,t.stateNode=i,i._reactInternals=t,lu(t,r,e,n),t=cu(null,t,r,!0,o,n)):(t.tag=0,Pe&&o&&oc(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ta(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=fy(r),e=zt(r,e),i){case 0:t=uu(null,t,r,e,n);break e;case 1:t=Qd(null,t,r,e,n);break e;case 11:t=Gd(null,t,r,e,n);break e;case 14:t=Wd(null,t,r,zt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),uu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Qd(e,t,r,i,n);case 3:e:{if(gm(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Uh(e,t),Ra(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yr(Error(I(423)),t),t=qd(e,t,r,n,i);break e}else if(r!==i){i=Yr(Error(I(424)),t),t=qd(e,t,r,n,i);break e}else for(vt=Un(t.stateNode.containerInfo.firstChild),xt=t,Pe=!0,Ut=null,n=Vh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){t=hn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return Jh(t),e===null&&iu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Zs(r,i)?a=null:o!==null&&Zs(r,o)&&(t.flags|=32),mm(e,t),at(e,t,a,n),t.child;case 6:return e===null&&iu(t),null;case 13:return ym(e,t,n);case 4:return pc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qr(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Gd(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ae(Aa,r._currentValue),r._currentValue=a,o!==null)if(Vt(o.value,a)){if(o.children===i.children&&!ht.current){t=hn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=sn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ou(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(I(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ou(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Hr(t,n),i=Pt(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=zt(r,t.pendingProps),i=zt(r.type,i),Wd(e,t,r,i,n);case 15:return pm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),ta(e,t),t.tag=1,mt(r)?(e=!0,Ea(t)):e=!1,Hr(t,n),Bh(t,r,i),lu(t,r,i,n),cu(null,t,r,!0,e,n);case 19:return vm(e,t,n);case 22:return hm(e,t,n)}throw Error(I(156,t.tag))};function Dm(e,t){return ah(e,t)}function dy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,r){return new dy(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fy(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wu)return 11;if(e===Qu)return 14}return 2}function Vn(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ia(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")$c(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ar:return sr(n.children,i,o,t);case Gu:a=8,i|=8;break;case Ts:return e=Rt(12,n,t,i|2),e.elementType=Ts,e.lanes=o,e;case Ns:return e=Rt(13,n,t,i),e.elementType=Ns,e.lanes=o,e;case Ls:return e=Rt(19,n,t,i),e.elementType=Ls,e.lanes=o,e;case Hp:return el(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jp:a=10;break e;case Bp:a=9;break e;case Wu:a=11;break e;case Qu:a=14;break e;case On:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sr(e,t,n,r){return e=Rt(7,e,r,t),e.lanes=n,e}function el(e,t,n,r){return e=Rt(22,e,r,t),e.elementType=Hp,e.lanes=n,e.stateNode={isHidden:!1},e}function ts(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function ns(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function py(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pc(e,t,n,r,i,o,a,l,s){return e=new py(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(o),e}function hy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Im(e){if(!e)return Qn;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(mt(n))return Dh(e,n,t)}return t}function Mm(e,t,n,r,i,o,a,l,s){return e=Pc(n,r,!0,e,i,o,a,l,s),e.context=Im(null),n=e.current,r=lt(),i=Hn(n),o=sn(r,i),o.callback=t??null,jn(n,o,i),e.current.lanes=i,po(e,i,r),gt(e,r),e}function tl(e,t,n,r){var i=t.current,o=lt(),a=Hn(i);return n=Im(n),t.context===null?t.context=n:t.pendingContext=n,t=sn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(i,t,a),e!==null&&(Ht(e,i,a,o),Xo(e,i,a)),a}function Ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oc(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function my(){return null}var _m=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tc(e){this._internalRoot=e}nl.prototype.render=Tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));tl(e,t,null,null)};nl.prototype.unmount=Tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pr(function(){tl(null,e,null,null)}),t[fn]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ph();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&mh(e)}};function Nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lf(){}function gy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ia(a);o.call(u)}}var a=Mm(t,r,e,0,null,!1,!1,"",lf);return e._reactRootContainer=a,e[fn]=a.current,Xi(e.nodeType===8?e.parentNode:e),pr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ia(s);l.call(u)}}var s=Pc(e,0,!1,null,null,!1,!1,"",lf);return e._reactRootContainer=s,e[fn]=s.current,Xi(e.nodeType===8?e.parentNode:e),pr(function(){tl(t,s,n,r)}),s}function il(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ia(a);l.call(s)}}tl(t,a,e,i)}else a=gy(n,t,e,i,r);return Ia(a)}dh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ri(t.pendingLanes);n!==0&&(Yu(t,n|1),gt(t,_e()),!(me&6)&&(Xr=_e()+500,Xn()))}break;case 13:pr(function(){var r=pn(e,1);if(r!==null){var i=lt();Ht(r,e,1,i)}}),Oc(e,1)}};Xu=function(e){if(e.tag===13){var t=pn(e,134217728);if(t!==null){var n=lt();Ht(t,e,134217728,n)}Oc(e,134217728)}};fh=function(e){if(e.tag===13){var t=Hn(e),n=pn(e,t);if(n!==null){var r=lt();Ht(n,e,t,r)}Oc(e,t)}};ph=function(){return xe};hh=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};Hs=function(e,t,n){switch(t){case"input":if(Ms(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qa(r);if(!i)throw Error(I(90));Jp(r),Ms(r,i)}}}break;case"textarea":Wp(e,n);break;case"select":t=n.value,t!=null&&Fr(e,!!n.multiple,t,!1)}};eh=Ac;th=pr;var yy={usingClientEntryPoint:!1,Events:[mo,Pr,Qa,Xp,Zp,Ac]},wi={findFiberByHostInstance:rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vy={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ih(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||my,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{Va=Fo.inject(vy),Zt=Fo}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(t))throw Error(I(200));return hy(e,t,null,n)};St.createRoot=function(e,t){if(!Nc(e))throw Error(I(299));var n=!1,r="",i=_m;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pc(e,1,!1,null,null,n,!1,r,i),e[fn]=t.current,Xi(e.nodeType===8?e.parentNode:e),new Tc(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=ih(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return pr(e)};St.hydrate=function(e,t,n){if(!rl(t))throw Error(I(200));return il(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!Nc(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=_m;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Mm(t,null,e,1,n??null,i,!1,o,a),e[fn]=t.current,Xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new nl(t)};St.render=function(e,t,n){if(!rl(t))throw Error(I(200));return il(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!rl(e))throw Error(I(40));return e._reactRootContainer?(pr(function(){il(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};St.unstable_batchedUpdates=Ac;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rl(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return il(e,t,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=St})(m0);var sf=$s;Rs.createRoot=sf.createRoot,Rs.hydrateRoot=sf.hydrateRoot;var lo={},xy={get exports(){return lo},set exports(e){lo=e}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=typeof Symbol=="function"&&Symbol.for,Lc=Ke?Symbol.for("react.element"):60103,Dc=Ke?Symbol.for("react.portal"):60106,ol=Ke?Symbol.for("react.fragment"):60107,al=Ke?Symbol.for("react.strict_mode"):60108,ll=Ke?Symbol.for("react.profiler"):60114,sl=Ke?Symbol.for("react.provider"):60109,ul=Ke?Symbol.for("react.context"):60110,Ic=Ke?Symbol.for("react.async_mode"):60111,cl=Ke?Symbol.for("react.concurrent_mode"):60111,dl=Ke?Symbol.for("react.forward_ref"):60112,fl=Ke?Symbol.for("react.suspense"):60113,wy=Ke?Symbol.for("react.suspense_list"):60120,pl=Ke?Symbol.for("react.memo"):60115,hl=Ke?Symbol.for("react.lazy"):60116,Sy=Ke?Symbol.for("react.block"):60121,Ey=Ke?Symbol.for("react.fundamental"):60117,Cy=Ke?Symbol.for("react.responder"):60118,ky=Ke?Symbol.for("react.scope"):60119;function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Lc:switch(e=e.type,e){case Ic:case cl:case ol:case ll:case al:case fl:return e;default:switch(e=e&&e.$$typeof,e){case ul:case dl:case hl:case pl:case sl:return e;default:return t}}case Dc:return t}}}function zm(e){return Ct(e)===cl}we.AsyncMode=Ic;we.ConcurrentMode=cl;we.ContextConsumer=ul;we.ContextProvider=sl;we.Element=Lc;we.ForwardRef=dl;we.Fragment=ol;we.Lazy=hl;we.Memo=pl;we.Portal=Dc;we.Profiler=ll;we.StrictMode=al;we.Suspense=fl;we.isAsyncMode=function(e){return zm(e)||Ct(e)===Ic};we.isConcurrentMode=zm;we.isContextConsumer=function(e){return Ct(e)===ul};we.isContextProvider=function(e){return Ct(e)===sl};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lc};we.isForwardRef=function(e){return Ct(e)===dl};we.isFragment=function(e){return Ct(e)===ol};we.isLazy=function(e){return Ct(e)===hl};we.isMemo=function(e){return Ct(e)===pl};we.isPortal=function(e){return Ct(e)===Dc};we.isProfiler=function(e){return Ct(e)===ll};we.isStrictMode=function(e){return Ct(e)===al};we.isSuspense=function(e){return Ct(e)===fl};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ol||e===cl||e===ll||e===al||e===fl||e===wy||typeof e=="object"&&e!==null&&(e.$$typeof===hl||e.$$typeof===pl||e.$$typeof===sl||e.$$typeof===ul||e.$$typeof===dl||e.$$typeof===Ey||e.$$typeof===Cy||e.$$typeof===ky||e.$$typeof===Sy)};we.typeOf=Ct;(function(e){e.exports=we})(xy);function Ay(e){function t(_,j,F,K,A){for(var re=0,z=0,$e=0,ye=0,se,Z,Ie=0,Ge=0,oe,Me=oe=se=0,pe=0,Ue=0,xn=0,je=0,Jt=F.length,Gt=Jt-1,ct,q="",Oe="",ui="",xr="",Wt;pe<Jt;){if(Z=F.charCodeAt(pe),pe===Gt&&z+ye+$e+re!==0&&(z!==0&&(Z=z===47?10:47),ye=$e=re=0,Jt++,Gt++),z+ye+$e+re===0){if(pe===Gt&&(0<Ue&&(q=q.replace(v,"")),0<q.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:q+=F.charAt(pe)}Z=59}switch(Z){case 123:for(q=q.trim(),se=q.charCodeAt(0),oe=1,je=++pe;pe<Jt;){switch(Z=F.charCodeAt(pe)){case 123:oe++;break;case 125:oe--;break;case 47:switch(Z=F.charCodeAt(pe+1)){case 42:case 47:e:{for(Me=pe+1;Me<Gt;++Me)switch(F.charCodeAt(Me)){case 47:if(Z===42&&F.charCodeAt(Me-1)===42&&pe+2!==Me){pe=Me+1;break e}break;case 10:if(Z===47){pe=Me+1;break e}}pe=Me}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;pe++<Gt&&F.charCodeAt(pe)!==Z;);}if(oe===0)break;pe++}switch(oe=F.substring(je,pe),se===0&&(se=(q=q.replace(m,"").trim()).charCodeAt(0)),se){case 64:switch(0<Ue&&(q=q.replace(v,"")),Z=q.charCodeAt(1),Z){case 100:case 109:case 115:case 45:Ue=j;break;default:Ue=Se}if(oe=t(j,Ue,oe,Z,A+1),je=oe.length,0<M&&(Ue=n(Se,q,xn),Wt=l(3,oe,Ue,j,ue,ie,je,Z,A,K),q=Ue.join(""),Wt!==void 0&&(je=(oe=Wt.trim()).length)===0&&(Z=0,oe="")),0<je)switch(Z){case 115:q=q.replace(N,a);case 100:case 109:case 45:oe=q+"{"+oe+"}";break;case 107:q=q.replace(p,"$1 $2"),oe=q+"{"+oe+"}",oe=de===1||de===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=q+oe,K===112&&(oe=(Oe+=oe,""))}else oe="";break;default:oe=t(j,n(j,q,xn),oe,K,A+1)}ui+=oe,oe=xn=Ue=Me=se=0,q="",Z=F.charCodeAt(++pe);break;case 125:case 59:if(q=(0<Ue?q.replace(v,""):q).trim(),1<(je=q.length))switch(Me===0&&(se=q.charCodeAt(0),se===45||96<se&&123>se)&&(je=(q=q.replace(" ",":")).length),0<M&&(Wt=l(1,q,j,_,ue,ie,Oe.length,K,A,K))!==void 0&&(je=(q=Wt.trim()).length)===0&&(q="\0\0"),se=q.charCodeAt(0),Z=q.charCodeAt(1),se){case 0:break;case 64:if(Z===105||Z===99){xr+=q+F.charAt(pe);break}default:q.charCodeAt(je-1)!==58&&(Oe+=i(q,se,Z,q.charCodeAt(2)))}xn=Ue=Me=se=0,q="",Z=F.charCodeAt(++pe)}}switch(Z){case 13:case 10:z===47?z=0:1+se===0&&K!==107&&0<q.length&&(Ue=1,q+="\0"),0<M*H&&l(0,q,j,_,ue,ie,Oe.length,K,A,K),ie=1,ue++;break;case 59:case 125:if(z+ye+$e+re===0){ie++;break}default:switch(ie++,ct=F.charAt(pe),Z){case 9:case 32:if(ye+re+z===0)switch(Ie){case 44:case 58:case 9:case 32:ct="";break;default:Z!==32&&(ct=" ")}break;case 0:ct="\\0";break;case 12:ct="\\f";break;case 11:ct="\\v";break;case 38:ye+z+re===0&&(Ue=xn=1,ct="\f"+ct);break;case 108:if(ye+z+re+le===0&&0<Me)switch(pe-Me){case 2:Ie===112&&F.charCodeAt(pe-3)===58&&(le=Ie);case 8:Ge===111&&(le=Ge)}break;case 58:ye+z+re===0&&(Me=pe);break;case 44:z+$e+ye+re===0&&(Ue=1,ct+="\r");break;case 34:case 39:z===0&&(ye=ye===Z?0:ye===0?Z:ye);break;case 91:ye+z+$e===0&&re++;break;case 93:ye+z+$e===0&&re--;break;case 41:ye+z+re===0&&$e--;break;case 40:if(ye+z+re===0){if(se===0)switch(2*Ie+3*Ge){case 533:break;default:se=1}$e++}break;case 64:z+$e+ye+re+Me+oe===0&&(oe=1);break;case 42:case 47:if(!(0<ye+re+$e))switch(z){case 0:switch(2*Z+3*F.charCodeAt(pe+1)){case 235:z=47;break;case 220:je=pe,z=42}break;case 42:Z===47&&Ie===42&&je+2!==pe&&(F.charCodeAt(je+2)===33&&(Oe+=F.substring(je,pe+1)),ct="",z=0)}}z===0&&(q+=ct)}Ge=Ie,Ie=Z,pe++}if(je=Oe.length,0<je){if(Ue=j,0<M&&(Wt=l(2,Oe,Ue,_,ue,ie,je,K,A,K),Wt!==void 0&&(Oe=Wt).length===0))return xr+Oe+ui;if(Oe=Ue.join(",")+"{"+Oe+"}",de*le!==0){switch(de!==2||o(Oe,2)||(le=0),le){case 111:Oe=Oe.replace(C,":-moz-$1")+Oe;break;case 112:Oe=Oe.replace(y,"::-webkit-input-$1")+Oe.replace(y,"::-moz-$1")+Oe.replace(y,":-ms-input-$1")+Oe}le=0}}return xr+Oe+ui}function n(_,j,F){var K=j.trim().split(g);j=K;var A=K.length,re=_.length;switch(re){case 0:case 1:var z=0;for(_=re===0?"":_[0]+" ";z<A;++z)j[z]=r(_,j[z],F).trim();break;default:var $e=z=0;for(j=[];z<A;++z)for(var ye=0;ye<re;++ye)j[$e++]=r(_[ye]+" ",K[z],F).trim()}return j}function r(_,j,F){var K=j.charCodeAt(0);switch(33>K&&(K=(j=j.trim()).charCodeAt(0)),K){case 38:return j.replace(h,"$1"+_.trim());case 58:return _.trim()+j.replace(h,"$1"+_.trim());default:if(0<1*F&&0<j.indexOf("\f"))return j.replace(h,(_.charCodeAt(0)===58?"":"$1")+_.trim())}return _+j}function i(_,j,F,K){var A=_+";",re=2*j+3*F+4*K;if(re===944){_=A.indexOf(":",9)+1;var z=A.substring(_,A.length-1).trim();return z=A.substring(0,_).trim()+z+";",de===1||de===2&&o(z,1)?"-webkit-"+z+z:z}if(de===0||de===2&&!o(A,1))return A;switch(re){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(ge,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return z=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+z+"-webkit-"+A+"-ms-flex-pack"+z+A;case 1005:return x.test(A)?A.replace(w,":-webkit-")+A.replace(w,":-moz-")+A:A;case 1e3:switch(z=A.substring(13).trim(),j=z.indexOf("-")+1,z.charCodeAt(0)+z.charCodeAt(j)){case 226:z=A.replace(k,"tb");break;case 232:z=A.replace(k,"tb-rl");break;case 220:z=A.replace(k,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+z+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(j=(A=_).length-10,z=(A.charCodeAt(j)===33?A.substring(0,j):A).substring(_.indexOf(":",7)+1).trim(),re=z.charCodeAt(0)+(z.charCodeAt(7)|0)){case 203:if(111>z.charCodeAt(8))break;case 115:A=A.replace(z,"-webkit-"+z)+";"+A;break;case 207:case 102:A=A.replace(z,"-webkit-"+(102<re?"inline-":"")+"box")+";"+A.replace(z,"-webkit-"+z)+";"+A.replace(z,"-ms-"+z+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return z=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+z+"-ms-flex-"+z+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(T,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(T,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(J.test(_)===!0)return(z=_.substring(_.indexOf(":")+1)).charCodeAt(0)===115?i(_.replace("stretch","fill-available"),j,F,K).replace(":fill-available",":stretch"):A.replace(z,"-webkit-"+z)+A.replace(z,"-moz-"+z.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,F+K===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+A}return A}function o(_,j){var F=_.indexOf(j===1?":":"{"),K=_.substring(0,j!==3?F:10);return F=_.substring(F+1,_.length-1),W(j!==2?K:K.replace(U,"$1"),F,j)}function a(_,j){var F=i(j,j.charCodeAt(0),j.charCodeAt(1),j.charCodeAt(2));return F!==j+";"?F.replace(D," or ($1)").substring(4):"("+j+")"}function l(_,j,F,K,A,re,z,$e,ye,se){for(var Z=0,Ie=j,Ge;Z<M;++Z)switch(Ge=Ee[Z].call(f,_,Ie,F,K,A,re,z,$e,ye,se)){case void 0:case!1:case!0:case null:break;default:Ie=Ge}if(Ie!==j)return Ie}function s(_){switch(_){case void 0:case null:M=Ee.length=0;break;default:if(typeof _=="function")Ee[M++]=_;else if(typeof _=="object")for(var j=0,F=_.length;j<F;++j)s(_[j]);else H=!!_|0}return s}function u(_){return _=_.prefix,_!==void 0&&(W=null,_?typeof _!="function"?de=1:(de=2,W=_):de=0),u}function f(_,j){var F=_;if(33>F.charCodeAt(0)&&(F=F.trim()),fe=F,F=[fe],0<M){var K=l(-1,j,F,F,ue,ie,0,0,0,0);K!==void 0&&typeof K=="string"&&(j=K)}var A=t(Se,F,j,0,0);return 0<M&&(K=l(-2,A,F,F,ue,ie,A.length,0,0,0),K!==void 0&&(A=K)),fe="",le=0,ie=ue=1,A}var m=/^\0+/g,v=/[\0\r\f]/g,w=/: */g,x=/zoo|gra/,E=/([,: ])(transform)/g,g=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,C=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,T=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,J=/stretch|:\s*\w+\-(?:conte|avail)/,ge=/([^-])(image-set\()/,ie=1,ue=1,le=0,de=1,Se=[],Ee=[],M=0,W=null,H=0,fe="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var by={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ry(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var $y=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,uf=Ry(function(e){return $y.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Mc=lo,Py={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ty={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_c={};_c[Mc.ForwardRef]=Ty;_c[Mc.Memo]=Fm;function cf(e){return Mc.isMemo(e)?Fm:_c[e.$$typeof]||Py}var Ny=Object.defineProperty,Ly=Object.getOwnPropertyNames,df=Object.getOwnPropertySymbols,Dy=Object.getOwnPropertyDescriptor,Iy=Object.getPrototypeOf,ff=Object.prototype;function Um(e,t,n){if(typeof t!="string"){if(ff){var r=Iy(t);r&&r!==ff&&Um(e,r,n)}var i=Ly(t);df&&(i=i.concat(df(t)));for(var o=cf(e),a=cf(t),l=0;l<i.length;++l){var s=i[l];if(!Oy[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var u=Dy(t,s);try{Ny(e,s,u)}catch{}}}}return e}var My=Um;function jt(){return(jt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var pf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Eu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!lo.typeOf(e)},Ma=Object.freeze([]),Jn=Object.freeze({});function Zr(e){return typeof e=="function"}function hf(e){return e.displayName||e.name||"Component"}function zc(e){return e&&typeof e.styledComponentId=="string"}var ei=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Fc=typeof window<"u"&&"HTMLElement"in window,_y=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),zy={};function hr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Fy=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&hr(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),oa=new Map,_a=new Map,Fi=1,Uo=function(e){if(oa.has(e))return oa.get(e);for(;_a.has(Fi);)Fi++;var t=Fi++;return oa.set(e,t),_a.set(t,e),t},Uy=function(e){return _a.get(e)},jy=function(e,t){t>=Fi&&(Fi=t+1),oa.set(e,t),_a.set(t,e)},By="style["+ei+'][data-styled-version="5.3.9"]',Hy=new RegExp("^"+ei+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Vy=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Jy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(Hy);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(jy(u,s),Vy(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},Gy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},jm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(ei))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ei,"active"),r.setAttribute("data-styled-version","5.3.9");var a=Gy();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Wy=function(){function e(n){var r=this.element=jm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}hr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Qy=function(){function e(n){var r=this.element=jm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),qy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),mf=Fc,Ky={isServer:!Fc,useCSSOMInjection:!_y},za=function(){function e(n,r,i){n===void 0&&(n=Jn),r===void 0&&(r={}),this.options=jt({},Ky,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Fc&&mf&&(mf=!1,function(o){for(var a=document.querySelectorAll(By),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(ei)!=="active"&&(Jy(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Uo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(jt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new qy(a):o?new Wy(a):new Qy(a),new Fy(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Uo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Uo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Uo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=Uy(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var f=ei+".g"+a+'[id="'+l+'"]',m="";s!==void 0&&s.forEach(function(v){v.length>0&&(m+=v+",")}),o+=""+u+f+'{content:"'+m+`"}/*!sc*/
`}}}return o}(this)},e}(),Yy=/(a)(d)/gi,gf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=gf(t%52)+n;return(gf(t%52)+n).replace(Yy,"$1-$2")}var Mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Bm=function(e){return Mr(5381,e)};function Hm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zr(n)&&!zc(n))return!1}return!0}var Xy=Bm("5.3.9"),Zy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hm(t),this.componentId=n,this.baseHash=Mr(Xy,n),this.baseStyle=r,za.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=mr(this.rules,t,n,r).join(""),l=Cu(Mr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,f=Mr(this.baseHash,r.hash),m="",v=0;v<u;v++){var w=this.rules[v];if(typeof w=="string")m+=w;else if(w){var x=mr(w,t,n,r),E=Array.isArray(x)?x.join(""):x;f=Mr(f,E+v),m+=E}}if(m){var g=Cu(f>>>0);if(!n.hasNameForId(i,g)){var h=r(m,"."+g,void 0,i);n.insertRules(i,g,h)}o.push(g)}}return o.join(" ")},e}(),ev=/^\s*\/\/.*$/gm,tv=[":","[",".","#"];function nv(e){var t,n,r,i,o=e===void 0?Jn:e,a=o.options,l=a===void 0?Jn:a,s=o.plugins,u=s===void 0?Ma:s,f=new Ay(l),m=[],v=function(E){function g(h){if(h)try{E(h+"}")}catch{}}return function(h,p,y,C,k,N,D,T,U,J){switch(h){case 1:if(U===0&&p.charCodeAt(0)===64)return E(p+";"),"";break;case 2:if(T===0)return p+"/*|*/";break;case 3:switch(T){case 102:case 112:return E(y[0]+p),"";default:return p+(J===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(g)}}}(function(E){m.push(E)}),w=function(E,g,h){return g===0&&tv.indexOf(h[n.length])!==-1||h.match(i)?E:"."+t};function x(E,g,h,p){p===void 0&&(p="&");var y=E.replace(ev,""),C=g&&h?h+" "+g+" { "+y+" }":y;return t=p,n=g,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(h||!g?"":g,C)}return f.use([].concat(u,[function(E,g,h){E===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,w))},v,function(E){if(E===-2){var g=m;return m=[],g}}])),x.hash=u.length?u.reduce(function(E,g){return g.name||hr(15),Mr(E,g.name)},5381).toString():"",x}var Vm=te.createContext();Vm.Consumer;var Jm=te.createContext(),rv=(Jm.Consumer,new za),ku=nv();function Gm(){return b.useContext(Vm)||rv}function Wm(){return b.useContext(Jm)||ku}var iv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ku);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return hr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ku),this.name+t.hash},e}(),ov=/([A-Z])/,av=/([A-Z])/g,lv=/^ms-/,sv=function(e){return"-"+e.toLowerCase()};function yf(e){return ov.test(e)?e.replace(av,sv).replace(lv,"-ms-"):e}var vf=function(e){return e==null||e===!1||e===""};function mr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=mr(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(vf(e))return"";if(zc(e))return"."+e.styledComponentId;if(Zr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return mr(s,t,n,r)}var u;return e instanceof iv?n?(e.inject(n,r),e.getName(r)):e:Eu(e)?function f(m,v){var w,x,E=[];for(var g in m)m.hasOwnProperty(g)&&!vf(m[g])&&(Array.isArray(m[g])&&m[g].isCss||Zr(m[g])?E.push(yf(g)+":",m[g],";"):Eu(m[g])?E.push.apply(E,f(m[g],g)):E.push(yf(g)+": "+(w=g,(x=m[g])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||w in by?String(x).trim():x+"px")+";"));return v?[v+" {"].concat(E,["}"]):E}(e):e.toString()}var xf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Qm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Zr(e)||Eu(e)?xf(mr(pf(Ma,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:xf(mr(pf(e,n)))}var qm=function(e,t,n){return n===void 0&&(n=Jn),e.theme!==n.theme&&e.theme||t||n.theme},uv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cv=/(^-|-$)/g;function rs(e){return e.replace(uv,"-").replace(cv,"")}var Km=function(e){return Cu(Bm(e)>>>0)};function jo(e){return typeof e=="string"&&!0}var Au=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},dv=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function fv(e,t,n){var r=e[n];Au(t)&&Au(r)?Ym(r,t):e[n]=t}function Ym(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Au(a))for(var l in a)dv(l)&&fv(e,a[l],l)}return e}var so=te.createContext();so.Consumer;function pv(e){var t=b.useContext(so),n=b.useMemo(function(){return function(r,i){if(!r)return hr(14);if(Zr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?hr(8):i?jt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?te.createElement(so.Provider,{value:n},e.children):null}var is={};function Xm(e,t,n){var r=zc(e),i=!jo(e),o=t.attrs,a=o===void 0?Ma:o,l=t.componentId,s=l===void 0?function(p,y){var C=typeof p!="string"?"sc":rs(p);is[C]=(is[C]||0)+1;var k=C+"-"+Km("5.3.9"+C+is[C]);return y?y+"-"+k:k}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(p){return jo(p)?"styled."+p:"Styled("+hf(p)+")"}(e):u,m=t.displayName&&t.componentId?rs(t.displayName)+"-"+t.componentId:t.componentId||s,v=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(p,y,C){return e.shouldForwardProp(p,y,C)&&t.shouldForwardProp(p,y,C)}:e.shouldForwardProp);var x,E=new Zy(n,m,r?e.componentStyle:void 0),g=E.isStatic&&a.length===0,h=function(p,y){return function(C,k,N,D){var T=C.attrs,U=C.componentStyle,J=C.defaultProps,ge=C.foldedComponentIds,ie=C.shouldForwardProp,ue=C.styledComponentId,le=C.target,de=function(K,A,re){K===void 0&&(K=Jn);var z=jt({},A,{theme:K}),$e={};return re.forEach(function(ye){var se,Z,Ie,Ge=ye;for(se in Zr(Ge)&&(Ge=Ge(z)),Ge)z[se]=$e[se]=se==="className"?(Z=$e[se],Ie=Ge[se],Z&&Ie?Z+" "+Ie:Z||Ie):Ge[se]}),[z,$e]}(qm(k,b.useContext(so),J)||Jn,k,T),Se=de[0],Ee=de[1],M=function(K,A,re,z){var $e=Gm(),ye=Wm(),se=A?K.generateAndInjectStyles(Jn,$e,ye):K.generateAndInjectStyles(re,$e,ye);return se}(U,D,Se),W=N,H=Ee.$as||k.$as||Ee.as||k.as||le,fe=jo(H),_=Ee!==k?jt({},k,{},Ee):k,j={};for(var F in _)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?j.as=_[F]:(ie?ie(F,uf,H):!fe||uf(F))&&(j[F]=_[F]));return k.style&&Ee.style!==k.style&&(j.style=jt({},k.style,{},Ee.style)),j.className=Array.prototype.concat(ge,ue,M!==ue?M:null,k.className,Ee.className).filter(Boolean).join(" "),j.ref=W,b.createElement(H,j)}(x,p,y,g)};return h.displayName=f,(x=te.forwardRef(h)).attrs=v,x.componentStyle=E,x.displayName=f,x.shouldForwardProp=w,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ma,x.styledComponentId=m,x.target=r?e.target:e,x.withComponent=function(p){var y=t.componentId,C=function(N,D){if(N==null)return{};var T,U,J={},ge=Object.keys(N);for(U=0;U<ge.length;U++)T=ge[U],D.indexOf(T)>=0||(J[T]=N[T]);return J}(t,["componentId"]),k=y&&y+"-"+(jo(p)?p:rs(hf(p)));return Xm(p,jt({},C,{attrs:v,componentId:k}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Ym({},e.defaultProps,p):p}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),i&&My(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var bu=function(e){return function t(n,r,i){if(i===void 0&&(i=Jn),!lo.isValidElementType(r))return hr(1,String(r));var o=function(){return n(r,i,Qm.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,jt({},i,{},a))},o.attrs=function(a){return t(n,r,jt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Xm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){bu[e]=bu(e)});var hv=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Hm(n),za.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(mr(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&za.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function mv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Qm.apply(void 0,[e].concat(n)),o="sc-global-"+Km(JSON.stringify(i)),a=new hv(i,o);function l(u){var f=Gm(),m=Wm(),v=b.useContext(so),w=b.useRef(f.allocateGSInstance(o)).current;return f.server&&s(w,u,f,v,m),b.useLayoutEffect(function(){if(!f.server)return s(w,u,f,v,m),function(){return a.removeStyles(w,f)}},[w,u,f,v,m]),null}function s(u,f,m,v,w){if(a.isStatic)a.renderStyles(u,zy,m,w);else{var x=jt({},f,{theme:qm(f,v,l.defaultProps)});a.renderStyles(u,x,m,w)}}return te.memo(l)}const S=bu,gv={title:"main",fonts:{extrasmall:16,small:18,medium:20,large:26,extralarge:36},colors:{primary:{light:"#f08",normal:"#2EB2B7",dark:"#01fe87"},secondary:{light:"#E08952",normal:"#FF8233",dark:"#AD561F"},auxiliary:{success:{normal:"#34C759",dark:"#45B661"},attention:{normal:"#FFEB3B",dark:"#CCB700"},error:{normal:"#D92626",dark:"#981B1B"}},foreground:"#D9D9D9",middleground:"#f5f5f5",background:"#292E2E",text:{title:"#000",content:"#626262",highlight:"#FFF",TitleSubArticles:"#114676"}}},yv=b.createContext({}),vv=({children:e})=>{const[t,n]=b.useState(gv);return d(yv.Provider,{value:{theme:t},children:d(pv,{theme:t,children:e})})};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}var ze;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ze||(ze={}));const wf="popstate";function xv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return uo("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mn(i)}return Sv(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ti(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wv(){return Math.random().toString(36).substr(2,8)}function Sf(e,t){return{usr:e.state,key:e.key,idx:t}}function uo(e,t,n,r){return n===void 0&&(n=null),ce({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||r||wv()})}function mn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Sv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=ze.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(ce({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function m(){l=ze.Pop;let g=f(),h=g==null?null:g-u;u=g,s&&s({action:l,location:E.location,delta:h})}function v(g,h){l=ze.Push;let p=uo(E.location,g,h);n&&n(p,g),u=f()+1;let y=Sf(p,u),C=E.createHref(p);try{a.pushState(y,"",C)}catch{i.location.assign(C)}o&&s&&s({action:l,location:E.location,delta:1})}function w(g,h){l=ze.Replace;let p=uo(E.location,g,h);n&&n(p,g),u=f();let y=Sf(p,u),C=E.createHref(p);a.replaceState(y,"",C),o&&s&&s({action:l,location:E.location,delta:0})}function x(g){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof g=="string"?g:mn(g);return ne(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let E={get action(){return l},get location(){return e(i,a)},listen(g){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(wf,m),s=g,()=>{i.removeEventListener(wf,m),s=null}},createHref(g){return t(i,g)},createURL:x,encodeLocation(g){let h=x(g);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:v,replace:w,go(g){return a.go(g)}};return E}var Be;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Be||(Be={}));const Ev=new Set(["lazy","caseSensitive","path","id","index","children"]);function Cv(e){return e.index===!0}function Zm(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(ne(i.index!==!0||!i.children,"Cannot specify children on an index route"),ne(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Cv(i)){let s=ce({},i,{hasErrorBoundary:t(i),id:l});return r[l]=s,s}else{let s=ce({},i,{id:l,hasErrorBoundary:t(i),children:void 0});return r[l]=s,i.children&&(s.children=Zm(i.children,t,a,r)),s}})}function _r(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?yn(t):t,i=yo(r.pathname||"/",n);if(i==null)return null;let o=eg(e);kv(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=Lv(o[l],Mv(i));return a}function eg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(ne(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=un([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),eg(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Tv(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of tg(o.path))i(o,a,s)}),t}function tg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=tg(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function kv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Nv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Av=/^:\w+$/,bv=3,Rv=2,$v=1,Pv=10,Ov=-2,Ef=e=>e==="*";function Tv(e,t){let n=e.split("/"),r=n.length;return n.some(Ef)&&(r+=Ov),t&&(r+=Rv),n.filter(i=>!Ef(i)).reduce((i,o)=>i+(Av.test(o)?bv:o===""?$v:Pv),r)}function Nv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Lv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Dv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let m=l.route;o.push({params:r,pathname:un([i,f.pathname]),pathnameBase:Uv(un([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=un([i,f.pathnameBase]))}return o}function Dv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Iv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,m)=>{if(f==="*"){let v=l[m]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return u[f]=_v(l[m]||"",f),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Iv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ti(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Mv(e){try{return decodeURI(e)}catch(t){return ti(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _v(e,t){try{return decodeURIComponent(e)}catch(n){return ti(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function yo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function zv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?yn(e):e;return{pathname:n?n.startsWith("/")?n:Fv(n,t):t,search:jv(r),hash:Bv(i)}}function Fv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function os(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ml(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Uc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=yn(e):(i=ce({},e),ne(!i.pathname||!i.pathname.includes("?"),os("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),os("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),os("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let m=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),m-=1;i.pathname=v.join("/")}l=m>=0?t[m]:"/"}let s=zv(i,l),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const un=e=>e.join("/").replace(/\/\/+/g,"/"),Uv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class jc{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ng(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const rg=["post","put","patch","delete"],Hv=new Set(rg),Vv=["get",...rg],Jv=new Set(Vv),Gv=new Set([301,302,303,307,308]),Wv=new Set([307,308]),as={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Qv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Cf={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ig=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,og=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qv=!og,Kv=e=>!!e.hasErrorBoundary;function Yv(e){ne(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||Kv,n={},r=Zm(e.routes,t,void 0,n),i,o=ce({v7_normalizeFormMethod:!1},e.future),a=null,l=new Set,s=null,u=null,f=null,m=e.hydrationData!=null,v=_r(r,e.history.location,e.basename),w=null;if(v==null){let R=Kt(404,{pathname:e.history.location.pathname}),{matches:P,route:L}=Of(r);v=P,w={[L.id]:R}}let x=!v.some(R=>R.route.lazy)&&(!v.some(R=>R.route.loader)||e.hydrationData!=null),E,g={historyAction:e.history.action,location:e.history.location,matches:v,initialized:x,navigation:as,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},h=ze.Pop,p=!1,y,C=!1,k=!1,N=[],D=[],T=new Map,U=0,J=-1,ge=new Map,ie=new Set,ue=new Map,le=new Map,de=new Map,Se=!1;function Ee(){return a=e.history.listen(R=>{let{action:P,location:L,delta:V}=R;if(Se){Se=!1;return}ti(de.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=ct({currentLocation:g.location,nextLocation:L,historyAction:P});if(G&&V!=null){Se=!0,e.history.go(V*-1),Gt(G,{state:"blocked",location:L,proceed(){Gt(G,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),e.history.go(V)},reset(){Jt(G),H({blockers:new Map(E.state.blockers)})}});return}return F(P,L)}),g.initialized||F(ze.Pop,g.location),E}function M(){a&&a(),l.clear(),y&&y.abort(),g.fetchers.forEach((R,P)=>oe(P)),g.blockers.forEach((R,P)=>Jt(P))}function W(R){return l.add(R),()=>l.delete(R)}function H(R){g=ce({},g,R),l.forEach(P=>P(g))}function fe(R,P){var L,V;let G=g.actionData!=null&&g.navigation.formMethod!=null&&rn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((L=R.state)==null?void 0:L._isRedirect)!==!0,Y;P.actionData?Object.keys(P.actionData).length>0?Y=P.actionData:Y=null:G?Y=g.actionData:Y=null;let X=P.loaderData?Pf(g.loaderData,P.loaderData,P.matches||[],P.errors):g.loaderData;for(let[Q]of de)Jt(Q);let ee=p===!0||g.navigation.formMethod!=null&&rn(g.navigation.formMethod)&&((V=R.state)==null?void 0:V._isRedirect)!==!0;i&&(r=i,i=void 0),H(ce({},P,{actionData:Y,loaderData:X,historyAction:h,location:R,initialized:!0,navigation:as,revalidation:"idle",restoreScrollPosition:xr(R,P.matches||g.matches),preventScrollReset:ee,blockers:new Map(g.blockers)})),C||h===ze.Pop||(h===ze.Push?e.history.push(R,R.state):h===ze.Replace&&e.history.replace(R,R.state)),h=ze.Pop,p=!1,C=!1,k=!1,N=[],D=[]}async function _(R,P){if(typeof R=="number"){e.history.go(R);return}let{path:L,submission:V,error:G}=kf(R,o,P),Y=g.location,X=uo(g.location,L,P&&P.state);X=ce({},X,e.history.encodeLocation(X));let ee=P&&P.replace!=null?P.replace:void 0,Q=ze.Push;ee===!0?Q=ze.Replace:ee===!1||V!=null&&rn(V.formMethod)&&V.formAction===g.location.pathname+g.location.search&&(Q=ze.Replace);let Ce=P&&"preventScrollReset"in P?P.preventScrollReset===!0:void 0,ve=ct({currentLocation:Y,nextLocation:X,historyAction:Q});if(ve){Gt(ve,{state:"blocked",location:X,proceed(){Gt(ve,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),_(R,P)},reset(){Jt(ve),H({blockers:new Map(g.blockers)})}});return}return await F(Q,X,{submission:V,pendingError:G,preventScrollReset:Ce,replace:P&&P.replace})}function j(){if(Ie(),H({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){F(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}F(h||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function F(R,P,L){y&&y.abort(),y=null,h=R,C=(L&&L.startUninterruptedRevalidation)===!0,ui(g.location,g.matches),p=(L&&L.preventScrollReset)===!0;let V=i||r,G=L&&L.overrideNavigation,Y=_r(V,P,e.basename);if(!Y){let We=Kt(404,{pathname:P.pathname}),{matches:Ye,route:Dt}=Of(V);q(),fe(P,{matches:Ye,loaderData:{},errors:{[Dt.id]:We}});return}if(nx(g.location,P)&&!(L&&L.submission&&rn(L.submission.formMethod))){fe(P,{matches:Y});return}y=new AbortController;let X=Ei(e.history,P,y.signal,L&&L.submission),ee,Q;if(L&&L.pendingError)Q={[zr(Y).route.id]:L.pendingError};else if(L&&L.submission&&rn(L.submission.formMethod)){let We=await K(X,P,L.submission,Y,{replace:L.replace});if(We.shortCircuited)return;ee=We.pendingActionData,Q=We.pendingActionError,G=ce({state:"loading",location:P},L.submission),X=new Request(X.url,{signal:X.signal})}let{shortCircuited:Ce,loaderData:ve,errors:Lt}=await A(X,P,Y,G,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,ee,Q);Ce||(y=null,fe(P,ce({matches:Y},ee?{actionData:ee}:{},{loaderData:ve,errors:Lt})))}async function K(R,P,L,V,G){Ie();let Y=ce({state:"submitting",location:P},L);H({navigation:Y});let X,ee=Ru(V,P);if(!ee.route.action&&!ee.route.lazy)X={type:Be.error,error:Kt(405,{method:R.method,pathname:P.pathname,routeId:ee.route.id})};else if(X=await Si("action",R,ee,V,n,t,E.basename),R.signal.aborted)return{shortCircuited:!0};if(Jr(X)){let Q;return G&&G.replace!=null?Q=G.replace:Q=X.location===g.location.pathname+g.location.search,await se(g,X,{submission:L,replace:Q}),{shortCircuited:!0}}if(Ui(X)){let Q=zr(V,ee.route.id);return(G&&G.replace)!==!0&&(h=ze.Push),{pendingActionData:{},pendingActionError:{[Q.route.id]:X.error}}}if(ar(X))throw Kt(400,{type:"defer-action"});return{pendingActionData:{[ee.route.id]:X.data}}}async function A(R,P,L,V,G,Y,X,ee,Q){let Ce=V;Ce||(Ce=ce({state:"loading",location:P,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},G));let ve=G||Y?G||Y:Ce.formMethod&&Ce.formAction&&Ce.formData&&Ce.formEncType?{formMethod:Ce.formMethod,formAction:Ce.formAction,formData:Ce.formData,formEncType:Ce.formEncType}:void 0,Lt=i||r,[We,Ye]=Af(e.history,g,L,ve,P,k,N,D,ue,Lt,e.basename,ee,Q);if(q(tt=>!(L&&L.some(It=>It.route.id===tt))||We&&We.some(It=>It.route.id===tt)),We.length===0&&Ye.length===0)return fe(P,ce({matches:L,loaderData:{},errors:Q||null},ee?{actionData:ee}:{})),{shortCircuited:!0};if(!C){Ye.forEach(It=>{let Zn=g.fetchers.get(It.key),fi={state:"loading",data:Zn&&Zn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(It.key,fi)});let tt=ee||g.actionData;H(ce({navigation:Ce},tt?Object.keys(tt).length===0?{actionData:null}:{actionData:tt}:{},Ye.length>0?{fetchers:new Map(g.fetchers)}:{}))}J=++U,Ye.forEach(tt=>T.set(tt.key,y));let{results:Dt,loaderResults:ci,fetcherResults:Rl}=await Z(g.matches,L,We,Ye,R);if(R.signal.aborted)return{shortCircuited:!0};Ye.forEach(tt=>T.delete(tt.key));let di=Tf(Dt);if(di)return await se(g,di,{replace:X}),{shortCircuited:!0};let{loaderData:wr,errors:$l}=$f(g,L,We,ci,Q,Ye,Rl,le);le.forEach((tt,It)=>{tt.subscribe(Zn=>{(Zn||tt.done)&&le.delete(It)})}),Ue();let Pl=xn(J);return ce({loaderData:wr,errors:$l},Pl||Ye.length>0?{fetchers:new Map(g.fetchers)}:{})}function re(R){return g.fetchers.get(R)||Qv}function z(R,P,L,V){if(qv)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");T.has(R)&&Me(R);let Y=_r(i||r,L,e.basename);if(!Y){Ge(R,P,Kt(404,{pathname:L}));return}let{path:X,submission:ee}=kf(L,o,V,!0),Q=Ru(Y,X);if(p=(V&&V.preventScrollReset)===!0,ee&&rn(ee.formMethod)){$e(R,P,X,Q,Y,ee);return}ue.set(R,{routeId:P,path:X}),ye(R,P,X,Q,Y,ee)}async function $e(R,P,L,V,G,Y){if(Ie(),ue.delete(R),!V.route.action&&!V.route.lazy){let tn=Kt(405,{method:Y.formMethod,pathname:L,routeId:P});Ge(R,P,tn);return}let X=g.fetchers.get(R),ee=ce({state:"submitting"},Y,{data:X&&X.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(R,ee),H({fetchers:new Map(g.fetchers)});let Q=new AbortController,Ce=Ei(e.history,L,Q.signal,Y);T.set(R,Q);let ve=await Si("action",Ce,V,G,n,t,E.basename);if(Ce.signal.aborted){T.get(R)===Q&&T.delete(R);return}if(Jr(ve)){T.delete(R),ie.add(R);let tn=ce({state:"loading"},Y,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(R,tn),H({fetchers:new Map(g.fetchers)}),se(g,ve,{submission:Y,isFetchActionRedirect:!0})}if(Ui(ve)){Ge(R,P,ve.error);return}if(ar(ve))throw Kt(400,{type:"defer-action"});let Lt=g.navigation.location||g.location,We=Ei(e.history,Lt,Q.signal),Ye=i||r,Dt=g.navigation.state!=="idle"?_r(Ye,g.navigation.location,e.basename):g.matches;ne(Dt,"Didn't find any matches after fetcher action");let ci=++U;ge.set(R,ci);let Rl=ce({state:"loading",data:ve.data},Y,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(R,Rl);let[di,wr]=Af(e.history,g,Dt,Y,Lt,k,N,D,ue,Ye,e.basename,{[V.route.id]:ve.data},void 0);wr.filter(tn=>tn.key!==R).forEach(tn=>{let Ol=tn.key,Yc=g.fetchers.get(Ol),Hg={state:"loading",data:Yc&&Yc.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Ol,Hg),T.set(Ol,Q)}),H({fetchers:new Map(g.fetchers)});let{results:$l,loaderResults:Pl,fetcherResults:tt}=await Z(g.matches,Dt,di,wr,We);if(Q.signal.aborted)return;ge.delete(R),T.delete(R),wr.forEach(tn=>T.delete(tn.key));let It=Tf($l);if(It)return se(g,It);let{loaderData:Zn,errors:fi}=$f(g,g.matches,di,Pl,void 0,wr,tt,le),jg={state:"idle",data:ve.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(R,jg);let Bg=xn(ci);g.navigation.state==="loading"&&ci>J?(ne(h,"Expected pending action"),y&&y.abort(),fe(g.navigation.location,{matches:Dt,loaderData:Zn,errors:fi,fetchers:new Map(g.fetchers)})):(H(ce({errors:fi,loaderData:Pf(g.loaderData,Zn,Dt,fi)},Bg?{fetchers:new Map(g.fetchers)}:{})),k=!1)}async function ye(R,P,L,V,G,Y){let X=g.fetchers.get(R),ee=ce({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Y,{data:X&&X.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(R,ee),H({fetchers:new Map(g.fetchers)});let Q=new AbortController,Ce=Ei(e.history,L,Q.signal);T.set(R,Q);let ve=await Si("loader",Ce,V,G,n,t,E.basename);if(ar(ve)&&(ve=await ug(ve,Ce.signal,!0)||ve),T.get(R)===Q&&T.delete(R),Ce.signal.aborted)return;if(Jr(ve)){await se(g,ve);return}if(Ui(ve)){let We=zr(g.matches,P);g.fetchers.delete(R),H({fetchers:new Map(g.fetchers),errors:{[We.route.id]:ve.error}});return}ne(!ar(ve),"Unhandled fetcher deferred data");let Lt={state:"idle",data:ve.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(R,Lt),H({fetchers:new Map(g.fetchers)})}async function se(R,P,L){var V;let{submission:G,replace:Y,isFetchActionRedirect:X}=L===void 0?{}:L;P.revalidate&&(k=!0);let ee=uo(R.location,P.location,ce({_isRedirect:!0},X?{_isFetchActionRedirect:!0}:{}));if(ne(ee,"Expected a location on the redirect navigation"),ig.test(P.location)&&og&&typeof((V=window)==null?void 0:V.location)<"u"){let Ye=e.history.createURL(P.location),Dt=yo(Ye.pathname,e.basename||"/")==null;if(window.location.origin!==Ye.origin||Dt){Y?window.location.replace(P.location):window.location.assign(P.location);return}}y=null;let Q=Y===!0?ze.Replace:ze.Push,{formMethod:Ce,formAction:ve,formEncType:Lt,formData:We}=R.navigation;!G&&Ce&&ve&&We&&Lt&&(G={formMethod:Ce,formAction:ve,formEncType:Lt,formData:We}),Wv.has(P.status)&&G&&rn(G.formMethod)?await F(Q,ee,{submission:ce({},G,{formAction:P.location}),preventScrollReset:p}):X?await F(Q,ee,{overrideNavigation:{state:"loading",location:ee,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:G,preventScrollReset:p}):await F(Q,ee,{overrideNavigation:{state:"loading",location:ee,formMethod:G?G.formMethod:void 0,formAction:G?G.formAction:void 0,formEncType:G?G.formEncType:void 0,formData:G?G.formData:void 0},preventScrollReset:p})}async function Z(R,P,L,V,G){let Y=await Promise.all([...L.map(Q=>Si("loader",G,Q,P,n,t,E.basename)),...V.map(Q=>Q.matches&&Q.match?Si("loader",Ei(e.history,Q.path,G.signal),Q.match,Q.matches,n,t,E.basename):{type:Be.error,error:Kt(404,{pathname:Q.path})})]),X=Y.slice(0,L.length),ee=Y.slice(L.length);return await Promise.all([Nf(R,L,X,G.signal,!1,g.loaderData),Nf(R,V.map(Q=>Q.match),ee,G.signal,!0)]),{results:Y,loaderResults:X,fetcherResults:ee}}function Ie(){k=!0,N.push(...q()),ue.forEach((R,P)=>{T.has(P)&&(D.push(P),Me(P))})}function Ge(R,P,L){let V=zr(g.matches,P);oe(R),H({errors:{[V.route.id]:L},fetchers:new Map(g.fetchers)})}function oe(R){T.has(R)&&Me(R),ue.delete(R),ge.delete(R),ie.delete(R),g.fetchers.delete(R)}function Me(R){let P=T.get(R);ne(P,"Expected fetch controller: "+R),P.abort(),T.delete(R)}function pe(R){for(let P of R){let V={state:"idle",data:re(P).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(P,V)}}function Ue(){let R=[];for(let P of ie){let L=g.fetchers.get(P);ne(L,"Expected fetcher: "+P),L.state==="loading"&&(ie.delete(P),R.push(P))}pe(R)}function xn(R){let P=[];for(let[L,V]of ge)if(V<R){let G=g.fetchers.get(L);ne(G,"Expected fetcher: "+L),G.state==="loading"&&(Me(L),ge.delete(L),P.push(L))}return pe(P),P.length>0}function je(R,P){let L=g.blockers.get(R)||Cf;return de.get(R)!==P&&de.set(R,P),L}function Jt(R){g.blockers.delete(R),de.delete(R)}function Gt(R,P){let L=g.blockers.get(R)||Cf;ne(L.state==="unblocked"&&P.state==="blocked"||L.state==="blocked"&&P.state==="blocked"||L.state==="blocked"&&P.state==="proceeding"||L.state==="blocked"&&P.state==="unblocked"||L.state==="proceeding"&&P.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+P.state),g.blockers.set(R,P),H({blockers:new Map(g.blockers)})}function ct(R){let{currentLocation:P,nextLocation:L,historyAction:V}=R;if(de.size===0)return;de.size>1&&ti(!1,"A router only supports one blocker at a time");let G=Array.from(de.entries()),[Y,X]=G[G.length-1],ee=g.blockers.get(Y);if(!(ee&&ee.state==="proceeding")&&X({currentLocation:P,nextLocation:L,historyAction:V}))return Y}function q(R){let P=[];return le.forEach((L,V)=>{(!R||R(V))&&(L.cancel(),P.push(V),le.delete(V))}),P}function Oe(R,P,L){if(s=R,f=P,u=L||(V=>V.key),!m&&g.navigation===as){m=!0;let V=xr(g.location,g.matches);V!=null&&H({restoreScrollPosition:V})}return()=>{s=null,f=null,u=null}}function ui(R,P){if(s&&u&&f){let L=P.map(G=>Lf(G,g.loaderData)),V=u(R,L)||R.key;s[V]=f()}}function xr(R,P){if(s&&u&&f){let L=P.map(Y=>Lf(Y,g.loaderData)),V=u(R,L)||R.key,G=s[V];if(typeof G=="number")return G}return null}function Wt(R){i=R}return E={get basename(){return e.basename},get state(){return g},get routes(){return r},initialize:Ee,subscribe:W,enableScrollRestoration:Oe,navigate:_,fetch:z,revalidate:j,createHref:R=>e.history.createHref(R),encodeLocation:R=>e.history.encodeLocation(R),getFetcher:re,deleteFetcher:oe,dispose:M,getBlocker:je,deleteBlocker:Jt,_internalFetchControllers:T,_internalActiveDeferreds:le,_internalSetRoutes:Wt},E}function Xv(e){return e!=null&&"formData"in e}function kf(e,t,n,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:mn(e);if(!n||!Xv(n))return{path:i};if(n.formMethod&&!ox(n.formMethod))return{path:i,error:Kt(405,{method:n.formMethod})};let o;if(n.formData){let s=n.formMethod||"get";if(o={formMethod:t.v7_normalizeFormMethod?s.toUpperCase():s.toLowerCase(),formAction:sg(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},rn(o.formMethod))return{path:i,submission:o}}let a=yn(i),l=lg(n.formData);return r&&a.search&&cg(a.search)&&l.append("index",""),a.search="?"+l,{path:mn(a),submission:o}}function Zv(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Af(e,t,n,r,i,o,a,l,s,u,f,m,v){let w=v?Object.values(v)[0]:m?Object.values(m)[0]:void 0,x=e.createURL(t.location),E=e.createURL(i),g=o||x.toString()===E.toString()||x.search!==E.search,h=v?Object.keys(v)[0]:void 0,y=Zv(n,h).filter((k,N)=>{if(k.route.lazy)return!0;if(k.route.loader==null)return!1;if(ex(t.loaderData,t.matches[N],k)||a.some(U=>U===k.route.id))return!0;let D=t.matches[N],T=k;return bf(k,ce({currentUrl:x,currentParams:D.params,nextUrl:E,nextParams:T.params},r,{actionResult:w,defaultShouldRevalidate:g||ag(D,T)}))}),C=[];return s.forEach((k,N)=>{if(!n.some(J=>J.route.id===k.routeId))return;let D=_r(u,k.path,f);if(!D){C.push(ce({key:N},k,{matches:null,match:null}));return}let T=Ru(D,k.path);if(l.includes(N)){C.push(ce({key:N,matches:D,match:T},k));return}bf(T,ce({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:g}))&&C.push(ce({key:N,matches:D,match:T},k))}),[y,C]}function ex(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function ag(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function bf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Rf(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];ne(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";ti(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!Ev.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(ce({},i)),lazy:void 0})}async function Si(e,t,n,r,i,o,a,l,s,u){a===void 0&&(a="/"),l===void 0&&(l=!1),s===void 0&&(s=!1);let f,m,v,w=g=>{let h,p=new Promise((y,C)=>h=C);return v=()=>h(),t.signal.addEventListener("abort",v),Promise.race([g({request:t,params:n.params,context:u}),p])};try{let g=n.route[e];if(n.route.lazy)if(g)m=(await Promise.all([w(g),Rf(n.route,o,i)]))[0];else if(await Rf(n.route,o,i),g=n.route[e],g)m=await w(g);else{if(e==="action")throw Kt(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:Be.data,data:void 0}}else ne(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),m=await w(g);ne(m!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){f=Be.error,m=g}finally{v&&t.signal.removeEventListener("abort",v)}if(ix(m)){let g=m.status;if(Gv.has(g)){let y=m.headers.get("Location");if(ne(y,"Redirects returned/thrown from loaders/actions must have a Location header"),ig.test(y)){if(!l){let C=new URL(t.url),k=y.startsWith("//")?new URL(C.protocol+y):new URL(y),N=yo(k.pathname,a)!=null;k.origin===C.origin&&N&&(y=k.pathname+k.search+k.hash)}}else{let C=r.slice(0,r.indexOf(n)+1),k=ml(C).map(D=>D.pathnameBase),N=Uc(y,k,new URL(t.url).pathname);if(ne(mn(N),"Unable to resolve redirect location: "+y),a){let D=N.pathname;N.pathname=D==="/"?a:un([a,D])}y=mn(N)}if(l)throw m.headers.set("Location",y),m;return{type:Be.redirect,status:g,location:y,revalidate:m.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:f||Be.data,response:m};let h,p=m.headers.get("Content-Type");return p&&/\bapplication\/json\b/.test(p)?h=await m.json():h=await m.text(),f===Be.error?{type:f,error:new jc(g,m.statusText,h),headers:m.headers}:{type:Be.data,data:h,statusCode:m.status,headers:m.headers}}if(f===Be.error)return{type:f,error:m};if(rx(m)){var x,E;return{type:Be.deferred,deferredData:m,statusCode:(x=m.init)==null?void 0:x.status,headers:((E=m.init)==null?void 0:E.headers)&&new Headers(m.init.headers)}}return{type:Be.data,data:m}}function Ei(e,t,n,r){let i=e.createURL(sg(t)).toString(),o={signal:n};if(r&&rn(r.formMethod)){let{formMethod:a,formEncType:l,formData:s}=r;o.method=a.toUpperCase(),o.body=l==="application/x-www-form-urlencoded"?lg(s):s}return new Request(i,o)}function lg(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function tx(e,t,n,r,i){let o={},a=null,l,s=!1,u={};return n.forEach((f,m)=>{let v=t[m].route.id;if(ne(!Jr(f),"Cannot handle redirect results in processLoaderData"),Ui(f)){let w=zr(e,v),x=f.error;r&&(x=Object.values(r)[0],r=void 0),a=a||{},a[w.route.id]==null&&(a[w.route.id]=x),o[v]=void 0,s||(s=!0,l=ng(f.error)?f.error.status:500),f.headers&&(u[v]=f.headers)}else ar(f)?(i.set(v,f.deferredData),o[v]=f.deferredData.data):o[v]=f.data,f.statusCode!=null&&f.statusCode!==200&&!s&&(l=f.statusCode),f.headers&&(u[v]=f.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:u}}function $f(e,t,n,r,i,o,a,l){let{loaderData:s,errors:u}=tx(t,n,r,i,l);for(let f=0;f<o.length;f++){let{key:m,match:v}=o[f];ne(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let w=a[f];if(Ui(w)){let x=zr(e.matches,v==null?void 0:v.route.id);u&&u[x.route.id]||(u=ce({},u,{[x.route.id]:w.error})),e.fetchers.delete(m)}else if(Jr(w))ne(!1,"Unhandled fetcher revalidation redirect");else if(ar(w))ne(!1,"Unhandled fetcher deferred data");else{let x={state:"idle",data:w.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(m,x)}}return{loaderData:s,errors:u}}function Pf(e,t,n,r){let i=ce({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function zr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Of(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Kt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new jc(e||500,a,new Error(l),!0)}function Tf(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Jr(n))return n}}function sg(e){let t=typeof e=="string"?yn(e):e;return mn(ce({},t,{hash:""}))}function nx(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function ar(e){return e.type===Be.deferred}function Ui(e){return e.type===Be.error}function Jr(e){return(e&&e.type)===Be.redirect}function rx(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function ix(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function ox(e){return Jv.has(e.toLowerCase())}function rn(e){return Hv.has(e.toLowerCase())}async function Nf(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let u=e.find(m=>m.route.id===s.route.id),f=u!=null&&!ag(u,s)&&(o&&o[s.route.id])!==void 0;ar(l)&&(i||f)&&await ug(l,r,i).then(m=>{m&&(n[a]=m||n[a])})}}async function ug(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Be.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Be.error,error:i}}return{type:Be.data,data:e.deferredData.data}}}function cg(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Lf(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Ru(e,t){let n=typeof t=="string"?yn(t).search:t.search;if(e[e.length-1].route.index&&cg(n||""))return e[e.length-1];let r=ml(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ax(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const lx=typeof Object.is=="function"?Object.is:ax,{useState:sx,useEffect:ux,useLayoutEffect:cx,useDebugValue:dx}=bs;function fx(e,t,n){const r=t(),[{inst:i},o]=sx({inst:{value:r,getSnapshot:t}});return cx(()=>{i.value=r,i.getSnapshot=t,ls(i)&&o({inst:i})},[e,r,t]),ux(()=>(ls(i)&&o({inst:i}),e(()=>{ls(i)&&o({inst:i})})),[e]),dx(r),r}function ls(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!lx(n,r)}catch{return!0}}function px(e,t,n){return t()}const hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mx=!hx,gx=mx?px:fx,yx="useSyncExternalStore"in bs?(e=>e.useSyncExternalStore)(bs):gx,Bc=b.createContext(null),Hc=b.createContext(null),vo=b.createContext(null),gl=b.createContext(null),ai=b.createContext({outlet:null,matches:[]}),dg=b.createContext(null);function $u(){return $u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$u.apply(this,arguments)}function vx(e,t){let{relative:n}=t===void 0?{}:t;xo()||ne(!1);let{basename:r,navigator:i}=b.useContext(vo),{hash:o,pathname:a,search:l}=fg(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:un([r,a])),i.createHref({pathname:s,search:l,hash:o})}function xo(){return b.useContext(gl)!=null}function yl(){return xo()||ne(!1),b.useContext(gl).location}function wo(){xo()||ne(!1);let{basename:e,navigator:t}=b.useContext(vo),{matches:n}=b.useContext(ai),{pathname:r}=yl(),i=JSON.stringify(ml(n).map(l=>l.pathnameBase)),o=b.useRef(!1);return b.useEffect(()=>{o.current=!0}),b.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let u=Uc(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:un([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function fg(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(ai),{pathname:i}=yl(),o=JSON.stringify(ml(r).map(a=>a.pathnameBase));return b.useMemo(()=>Uc(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function xx(e,t){xo()||ne(!1);let{navigator:n}=b.useContext(vo),r=b.useContext(Hc),{matches:i}=b.useContext(ai),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=yl(),u;if(t){var f;let E=typeof t=="string"?yn(t):t;l==="/"||(f=E.pathname)!=null&&f.startsWith(l)||ne(!1),u=E}else u=s;let m=u.pathname||"/",v=l==="/"?m:m.slice(l.length)||"/",w=_r(e,{pathname:v}),x=Cx(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:un([l,n.encodeLocation?n.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:un([l,n.encodeLocation?n.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,r||void 0);return t&&x?b.createElement(gl.Provider,{value:{location:$u({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ze.Pop}},x):x}function wx(){let e=Rx(),t=ng(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}class Sx extends b.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(ai.Provider,{value:this.props.routeContext},b.createElement(dg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ex(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Bc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(ai.Provider,{value:t},r)}function Cx(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||ne(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,u=null;n&&(a.route.ErrorBoundary?u=b.createElement(a.route.ErrorBoundary,null):a.route.errorElement?u=a.route.errorElement:u=b.createElement(wx,null));let f=t.concat(r.slice(0,l+1)),m=()=>{let v=o;return s?v=u:a.route.Component?v=b.createElement(a.route.Component,null):a.route.element&&(v=a.route.element),b.createElement(Ex,{match:a,routeContext:{outlet:o,matches:f},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?b.createElement(Sx,{location:n.location,component:u,error:s,children:m(),routeContext:{outlet:null,matches:f}}):m()},null)}var Df;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Df||(Df={}));var Fa;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Fa||(Fa={}));function kx(e){let t=b.useContext(Hc);return t||ne(!1),t}function Ax(e){let t=b.useContext(ai);return t||ne(!1),t}function bx(e){let t=Ax(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function Rx(){var e;let t=b.useContext(dg),n=kx(Fa.UseRouteError),r=bx(Fa.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function $x(e){let{fallbackElement:t,router:n}=e,r=b.useCallback(()=>n.state,[n]),i=yx(n.subscribe,r,r),o=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,u,f)=>n.navigate(s,{state:u,preventScrollReset:f==null?void 0:f.preventScrollReset}),replace:(s,u,f)=>n.navigate(s,{replace:!0,state:u,preventScrollReset:f==null?void 0:f.preventScrollReset})}),[n]),a=n.basename||"/",l=b.useMemo(()=>({router:n,navigator:o,static:!1,basename:a}),[n,o,a]);return b.createElement(b.Fragment,null,b.createElement(Bc.Provider,{value:l},b.createElement(Hc.Provider,{value:i},b.createElement(Ox,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?b.createElement(Tx,null):t))),null)}function Px(e){ne(!1)}function Ox(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ze.Pop,navigator:o,static:a=!1}=e;xo()&&ne(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=yn(r));let{pathname:u="/",search:f="",hash:m="",state:v=null,key:w="default"}=r,x=b.useMemo(()=>{let E=yo(u,l);return E==null?null:{location:{pathname:E,search:f,hash:m,state:v,key:w},navigationType:i}},[l,u,f,m,v,w,i]);return x==null?null:b.createElement(vo.Provider,{value:s},b.createElement(gl.Provider,{children:n,value:x}))}function Tx(e){let{children:t,location:n}=e,r=b.useContext(Bc),i=r&&!t?r.router.routes:Pu(t);return xx(i,n)}var If;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(If||(If={}));new Promise(()=>{});function Pu(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Pu(r.props.children,o));return}r.type!==Px&&ne(!1),!r.props.index||!r.props.children||ne(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Pu(r.props.children,o)),n.push(a)}),n}function Nx(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ua.apply(this,arguments)}function Lx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Dx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ix(e,t){return e.button===0&&(!t||t==="_self")&&!Dx(e)}const Mx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function _x(e,t){return Yv({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:xv({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||zx(),routes:e,detectErrorBoundary:Nx}).initialize()}function zx(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ua({},t,{errors:Fx(t.errors)})),t}function Fx(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new jc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const Ux=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bx=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:f}=t,m=Lx(t,Mx),{basename:v}=b.useContext(vo),w,x=!1;if(typeof u=="string"&&jx.test(u)&&(w=u,Ux)){let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),C=yo(y.pathname,v);y.origin===p.origin&&C!=null?u=C+y.search+y.hash:x=!0}let E=vx(u,{relative:i}),g=Hx(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:i});function h(p){r&&r(p),p.defaultPrevented||g(p)}return b.createElement("a",Ua({},m,{href:w||E,onClick:x||o?r:h,ref:n,target:s}))});var Mf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Mf||(Mf={}));var _f;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_f||(_f={}));function Hx(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=wo(),s=yl(),u=fg(e,{relative:a});return b.useCallback(f=>{if(Ix(f,n)){f.preventDefault();let m=r!==void 0?r:mn(s)===mn(u);l(e,{replace:m,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}const Vx=S.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Jx="/Nanofab-Project/assets/microscopio-02614e2c.svg",Gx="/Nanofab-Project/assets/mol-3565b3ed.svg",c={mobile:"390px",largeMobile:"391px",tablet:"819px",notebook:"1023px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Wx=S.div`
  width: 100%;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  background-color: #F8F8F8;
  
  overflow: hidden;

  @media screen and (max-width: ${c.mobile}) {    
    width: 100%;
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    /* width: 80%; */
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {     
    /* 4k */
  }
  
`,Qx=S.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  height: 10vh;

`;S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;S.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({theme:e})=>e.colors.foreground};
  padding-right: 25px;
`;const qx=S.img`
  width: 150px;
  cursor: pointer;

  @media screen and (max-width: ${c.mobile}) {    
    width: 110px;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    width: 400px;
  }
`,Kx="/Nanofab-Project/assets/nanofab-c5546f6e.png",Yx="/Nanofab-Project/assets/background-1f899db0.svg",Xx=S.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${Yx});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`,Zx=S.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${c.mobile}) {
    flex-direction: column;
  }

  @media screen and (min-width: 390px) and (max-width: ${c.largeMobile}) {
    flex-direction: column;
  }
  
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px ) {
    flex-direction: row;
  }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    width: 60%;
  }
`,ew=S.img`
  width: 20%;

  @media screen and (max-width: ${c.mobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 390px) and (max-width: ${c.largeMobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${c.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${c.largeNotebook}) and (max-width: ${c.desktop}) {
    width: 400px;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${c.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,tw=S.img`
  width: 20%;

  @media screen and (max-width: ${c.mobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 390px) and (max-width: ${c.largeMobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${c.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${c.largeNotebook}) and (max-width: ${c.desktop}) {
    width: 500px;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${c.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,nw=S.img`
  width: 30%;
  margin-left: 17%;

  @media screen and (max-width: ${c.mobile}) {
    width: 80%;
  }

  @media screen and (min-width: 390px) and (max-width: ${c.largeMobile}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: ${c.tablet}) {
    width: 35%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
    width: 40%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    width: 30%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${c.largeNotebook}) and (max-width: ${c.desktop}) {
    width: 25%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    width: 35%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${c.extraLargeDesktop}) {
    width: 35%;
  }

  border-radius: 10px;
`,rw=S.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,iw=S.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ow=S.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,aw="/Nanofab-Project/assets/logo-uerj-a13c7853.png",lw="/Nanofab-Project/assets/nanofab-lab-8dc5e917.png",sw="/Nanofab-Project/assets/LogoPPGEM-white-fd88f51e.png",uw=({})=>d(Xx,{children:$(Zx,{children:[d(rw,{children:d(nw,{src:aw})}),d(iw,{children:d(tw,{src:lw})}),d(ow,{children:d(ew,{src:sw})})]})});var pg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zf=te.createContext&&te.createContext(pg),Gn=globalThis&&globalThis.__assign||function(){return Gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gn.apply(this,arguments)},cw=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function hg(e){return e&&e.map(function(t,n){return te.createElement(t.tag,Gn({key:n},t.attr),hg(t.child))})}function li(e){return function(t){return te.createElement(dw,Gn({attr:Gn({},e.attr)},t),hg(e.child))}}function dw(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=cw(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),te.createElement("svg",Gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:Gn(Gn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&te.createElement("title",null,o),e.children)};return zf!==void 0?te.createElement(zf.Consumer,null,function(n){return t(n)}):t(pg)}function fw(e){return li({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(e)}function pw(e){return li({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"}}]})(e)}function hw(e){return li({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(e)}function mw(e){return li({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"}},{tag:"path",attr:{d:"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"}}]})(e)}const gw=S.nav`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    /* @media screen and (min-width: 1300px) {    
        display: none;
    } */
`,Sn=S(Bx)`
    font-weight: 300;
    font-size: var(--medium);
    margin: 20px 15px;
    cursor: pointer;
    text-decoration: none;
    color: var(--white);
    font-family: 'Maven Pro';

    @media screen and (max-width: ${c.tablet}) {
        margin: 15px 7px;   
        font-size: var(--small);
    }

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,yw=S.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,vw=S.nav`
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
`,xw=S(hw)`
    font-size: 40px;

    @media screen and (max-width: ${c.tablet}) {    
        font-size: 30px;
    }

`,ww=S(fw)`
    font-size: 40px;

    @media screen and (max-width: ${c.tablet}) {    
        font-size: 30px;
    }
`,Sw=()=>{const[e,t]=b.useState(!1);return $(gw,{children:[d(yw,{onClick:()=>t(!e),children:e?d(ww,{}):d(xw,{})}),e?$(vw,{children:[d(Sn,{to:"/",onClick:()=>t(!1),children:"Home"}),d(Sn,{to:"/equipamentos_infraestrutura",onClick:()=>t(!1),children:"Equipamentos e Infraestrutura"}),d(Sn,{to:"/programas_especiais",onClick:()=>t(!1),children:"Programas Especiais"}),d(Sn,{to:"/equipe",onClick:()=>t(!1),children:"Equipe"}),d(Sn,{to:"/andamento",onClick:()=>t(!1),children:"Andamento"}),d(Sn,{to:"/submissao_projetos",onClick:()=>t(!1),children:"Submissão de Projetos"}),d(Sn,{to:"/publicacoes",onClick:()=>t(!1),children:"Publicações"}),d(Sn,{to:"/parcerias",onClick:()=>t(!1),children:"Parcerias"})]}):null]})},Ew=S.div`
  height: 100%;
`;function mg(e,t){return function(){return e.apply(t,arguments)}}const{toString:gg}=Object.prototype,{getPrototypeOf:Vc}=Object,Jc=(e=>t=>{const n=gg.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vn=e=>(e=e.toLowerCase(),t=>Jc(t)===e),vl=e=>t=>typeof t===e,{isArray:si}=Array,co=vl("undefined");function Cw(e){return e!==null&&!co(e)&&e.constructor!==null&&!co(e.constructor)&&qn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const yg=vn("ArrayBuffer");function kw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&yg(e.buffer),t}const Aw=vl("string"),qn=vl("function"),vg=vl("number"),Gc=e=>e!==null&&typeof e=="object",bw=e=>e===!0||e===!1,aa=e=>{if(Jc(e)!=="object")return!1;const t=Vc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rw=vn("Date"),$w=vn("File"),Pw=vn("Blob"),Ow=vn("FileList"),Tw=e=>Gc(e)&&qn(e.pipe),Nw=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||gg.call(e)===t||qn(e.toString)&&e.toString()===t)},Lw=vn("URLSearchParams"),Dw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function So(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),si(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function xg(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const wg=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Sg=e=>!co(e)&&e!==wg;function Ou(){const{caseless:e}=Sg(this)&&this||{},t={},n=(r,i)=>{const o=e&&xg(t,i)||i;aa(t[o])&&aa(r)?t[o]=Ou(t[o],r):aa(r)?t[o]=Ou({},r):si(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&So(arguments[r],n);return t}const Iw=(e,t,n,{allOwnKeys:r}={})=>(So(t,(i,o)=>{n&&qn(i)?e[o]=mg(i,n):e[o]=i},{allOwnKeys:r}),e),Mw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_w=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},zw=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Vc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Fw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Uw=e=>{if(!e)return null;if(si(e))return e;let t=e.length;if(!vg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},jw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Vc(Uint8Array)),Bw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Hw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Vw=vn("HTMLFormElement"),Jw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Ff=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Gw=vn("RegExp"),Eg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};So(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},Ww=e=>{Eg(e,(t,n)=>{if(qn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(qn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Qw=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return si(e)?r(e):r(String(e).split(t)),n},qw=()=>{},Kw=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ss="abcdefghijklmnopqrstuvwxyz",Uf="0123456789",Cg={DIGIT:Uf,ALPHA:ss,ALPHA_DIGIT:ss+ss.toUpperCase()+Uf},Yw=(e=16,t=Cg.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Xw(e){return!!(e&&qn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Zw=e=>{const t=new Array(10),n=(r,i)=>{if(Gc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=si(r)?[]:{};return So(r,(a,l)=>{const s=n(a,i+1);!co(s)&&(o[l]=s)}),t[i]=void 0,o}}return r};return n(e,0)},O={isArray:si,isArrayBuffer:yg,isBuffer:Cw,isFormData:Nw,isArrayBufferView:kw,isString:Aw,isNumber:vg,isBoolean:bw,isObject:Gc,isPlainObject:aa,isUndefined:co,isDate:Rw,isFile:$w,isBlob:Pw,isRegExp:Gw,isFunction:qn,isStream:Tw,isURLSearchParams:Lw,isTypedArray:jw,isFileList:Ow,forEach:So,merge:Ou,extend:Iw,trim:Dw,stripBOM:Mw,inherits:_w,toFlatObject:zw,kindOf:Jc,kindOfTest:vn,endsWith:Fw,toArray:Uw,forEachEntry:Bw,matchAll:Hw,isHTMLForm:Vw,hasOwnProperty:Ff,hasOwnProp:Ff,reduceDescriptors:Eg,freezeMethods:Ww,toObjectSet:Qw,toCamelCase:Jw,noop:qw,toFiniteNumber:Kw,findKey:xg,global:wg,isContextDefined:Sg,ALPHABET:Cg,generateString:Yw,isSpecCompliantForm:Xw,toJSONObject:Zw};function he(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}O.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const kg=he.prototype,Ag={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ag[e]={value:e}});Object.defineProperties(he,Ag);Object.defineProperty(kg,"isAxiosError",{value:!0});he.from=(e,t,n,r,i,o)=>{const a=Object.create(kg);return O.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),he.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const eS=null;function Tu(e){return O.isPlainObject(e)||O.isArray(e)}function bg(e){return O.endsWith(e,"[]")?e.slice(0,-2):e}function jf(e,t,n){return e?e.concat(t).map(function(i,o){return i=bg(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function tS(e){return O.isArray(e)&&!e.some(Tu)}const nS=O.toFlatObject(O,{},null,function(t){return/^is[A-Z]/.test(t)});function xl(e,t,n){if(!O.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=O.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,g){return!O.isUndefined(g[E])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(t);if(!O.isFunction(i))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(O.isDate(x))return x.toISOString();if(!s&&O.isBlob(x))throw new he("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(x)||O.isTypedArray(x)?s&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function f(x,E,g){let h=x;if(x&&!g&&typeof x=="object"){if(O.endsWith(E,"{}"))E=r?E:E.slice(0,-2),x=JSON.stringify(x);else if(O.isArray(x)&&tS(x)||(O.isFileList(x)||O.endsWith(E,"[]"))&&(h=O.toArray(x)))return E=bg(E),h.forEach(function(y,C){!(O.isUndefined(y)||y===null)&&t.append(a===!0?jf([E],C,o):a===null?E:E+"[]",u(y))}),!1}return Tu(x)?!0:(t.append(jf(g,E,o),u(x)),!1)}const m=[],v=Object.assign(nS,{defaultVisitor:f,convertValue:u,isVisitable:Tu});function w(x,E){if(!O.isUndefined(x)){if(m.indexOf(x)!==-1)throw Error("Circular reference detected in "+E.join("."));m.push(x),O.forEach(x,function(h,p){(!(O.isUndefined(h)||h===null)&&i.call(t,h,O.isString(p)?p.trim():p,E,v))===!0&&w(h,E?E.concat(p):[p])}),m.pop()}}if(!O.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Bf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Wc(e,t){this._pairs=[],e&&xl(e,this,t)}const Rg=Wc.prototype;Rg.append=function(t,n){this._pairs.push([t,n])};Rg.toString=function(t){const n=t?function(r){return t.call(this,r,Bf)}:Bf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function rS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $g(e,t,n){if(!t)return e;const r=n&&n.encode||rS,i=n&&n.serialize;let o;if(i?o=i(t,n):o=O.isURLSearchParams(t)?t.toString():new Wc(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class iS{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){O.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Hf=iS,Pg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oS=typeof URLSearchParams<"u"?URLSearchParams:Wc,aS=typeof FormData<"u"?FormData:null,lS=typeof Blob<"u"?Blob:null,sS=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),uS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Xt={isBrowser:!0,classes:{URLSearchParams:oS,FormData:aS,Blob:lS},isStandardBrowserEnv:sS,isStandardBrowserWebWorkerEnv:uS,protocols:["http","https","file","blob","url","data"]};function cS(e,t){return xl(e,new Xt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Xt.isNode&&O.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function dS(e){return O.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fS(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Og(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),s=o>=n.length;return a=!a&&O.isArray(i)?i.length:a,s?(O.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!O.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&O.isArray(i[a])&&(i[a]=fS(i[a])),!l)}if(O.isFormData(e)&&O.isFunction(e.entries)){const n={};return O.forEachEntry(e,(r,i)=>{t(dS(r),i,n,0)}),n}return null}const pS={"Content-Type":void 0};function hS(e,t,n){if(O.isString(e))try{return(t||JSON.parse)(e),O.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const wl={transitional:Pg,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=O.isObject(t);if(o&&O.isHTMLForm(t)&&(t=new FormData(t)),O.isFormData(t))return i&&i?JSON.stringify(Og(t)):t;if(O.isArrayBuffer(t)||O.isBuffer(t)||O.isStream(t)||O.isFile(t)||O.isBlob(t))return t;if(O.isArrayBufferView(t))return t.buffer;if(O.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cS(t,this.formSerializer).toString();if((l=O.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return xl(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),hS(t)):t}],transformResponse:[function(t){const n=this.transitional||wl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&O.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?he.from(l,he.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xt.classes.FormData,Blob:Xt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};O.forEach(["delete","get","head"],function(t){wl.headers[t]={}});O.forEach(["post","put","patch"],function(t){wl.headers[t]=O.merge(pS)});const Qc=wl,mS=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gS=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&mS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Vf=Symbol("internals");function Ci(e){return e&&String(e).trim().toLowerCase()}function la(e){return e===!1||e==null?e:O.isArray(e)?e.map(la):String(e)}function yS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function vS(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function us(e,t,n,r,i){if(O.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!O.isString(t)){if(O.isString(r))return t.indexOf(r)!==-1;if(O.isRegExp(r))return r.test(t)}}function xS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function wS(e,t){const n=O.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Sl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,s,u){const f=Ci(s);if(!f)throw new Error("header name must be a non-empty string");const m=O.findKey(i,f);(!m||i[m]===void 0||u===!0||u===void 0&&i[m]!==!1)&&(i[m||s]=la(l))}const a=(l,s)=>O.forEach(l,(u,f)=>o(u,f,s));return O.isPlainObject(t)||t instanceof this.constructor?a(t,n):O.isString(t)&&(t=t.trim())&&!vS(t)?a(gS(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Ci(t),t){const r=O.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return yS(i);if(O.isFunction(n))return n.call(this,i,r);if(O.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ci(t),t){const r=O.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||us(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=Ci(a),a){const l=O.findKey(r,a);l&&(!n||us(r,r[l],l,n))&&(delete r[l],i=!0)}}return O.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||us(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return O.forEach(this,(i,o)=>{const a=O.findKey(r,o);if(a){n[a]=la(i),delete n[o];return}const l=t?xS(o):String(o).trim();l!==o&&delete n[o],n[l]=la(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return O.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&O.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Vf]=this[Vf]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=Ci(a);r[l]||(wS(i,a),r[l]=!0)}return O.isArray(t)?t.forEach(o):o(t),this}}Sl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.freezeMethods(Sl.prototype);O.freezeMethods(Sl);const cn=Sl;function cs(e,t){const n=this||Qc,r=t||n,i=cn.from(r.headers);let o=r.data;return O.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Tg(e){return!!(e&&e.__CANCEL__)}function Eo(e,t,n){he.call(this,e??"canceled",he.ERR_CANCELED,t,n),this.name="CanceledError"}O.inherits(Eo,he,{__CANCEL__:!0});function SS(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new he("Request failed with status code "+n.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ES=Xt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,l){const s=[];s.push(n+"="+encodeURIComponent(r)),O.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),O.isString(o)&&s.push("path="+o),O.isString(a)&&s.push("domain="+a),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function CS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kS(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ng(e,t){return e&&!CS(t)?kS(e,t):t}const AS=Xt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=O.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function bS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function RS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),f=r[o];a||(a=u),n[i]=s,r[i]=u;let m=o,v=0;for(;m!==i;)v+=n[m++],m=m%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const w=f&&u-f;return w?Math.round(v*1e3/w):void 0}}function Jf(e,t){let n=0;const r=RS(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,s=r(l),u=o<=a;n=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-o)/s:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const $S=typeof XMLHttpRequest<"u",PS=$S&&function(e){return new Promise(function(n,r){let i=e.data;const o=cn.from(e.headers).normalize(),a=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}O.isFormData(i)&&(Xt.isStandardBrowserEnv||Xt.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+x))}const f=Ng(e.baseURL,e.url);u.open(e.method.toUpperCase(),$g(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function m(){if(!u)return;const w=cn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};SS(function(h){n(h),s()},function(h){r(h),s()},E),u=null}if("onloadend"in u?u.onloadend=m:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(m)},u.onabort=function(){u&&(r(new he("Request aborted",he.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new he("Network Error",he.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Pg;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new he(x,E.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,e,u)),u=null},Xt.isStandardBrowserEnv){const w=(e.withCredentials||AS(f))&&e.xsrfCookieName&&ES.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&O.forEach(o.toJSON(),function(x,E){u.setRequestHeader(E,x)}),O.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Jf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Jf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{u&&(r(!w||w.type?new Eo(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const v=bS(f);if(v&&Xt.protocols.indexOf(v)===-1){r(new he("Unsupported protocol "+v+":",he.ERR_BAD_REQUEST,e));return}u.send(i||null)})},sa={http:eS,xhr:PS};O.forEach(sa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const OS={getAdapter:e=>{e=O.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=O.isString(n)?sa[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new he(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(O.hasOwnProp(sa,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!O.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:sa};function ds(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Eo(null,e)}function Gf(e){return ds(e),e.headers=cn.from(e.headers),e.data=cs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),OS.getAdapter(e.adapter||Qc.adapter)(e).then(function(r){return ds(e),r.data=cs.call(e,e.transformResponse,r),r.headers=cn.from(r.headers),r},function(r){return Tg(r)||(ds(e),r&&r.response&&(r.response.data=cs.call(e,e.transformResponse,r.response),r.response.headers=cn.from(r.response.headers))),Promise.reject(r)})}const Wf=e=>e instanceof cn?e.toJSON():e;function ni(e,t){t=t||{};const n={};function r(u,f,m){return O.isPlainObject(u)&&O.isPlainObject(f)?O.merge.call({caseless:m},u,f):O.isPlainObject(f)?O.merge({},f):O.isArray(f)?f.slice():f}function i(u,f,m){if(O.isUndefined(f)){if(!O.isUndefined(u))return r(void 0,u,m)}else return r(u,f,m)}function o(u,f){if(!O.isUndefined(f))return r(void 0,f)}function a(u,f){if(O.isUndefined(f)){if(!O.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,m){if(m in t)return r(u,f);if(m in e)return r(void 0,u)}const s={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,f)=>i(Wf(u),Wf(f),!0)};return O.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const m=s[f]||i,v=m(e[f],t[f],f);O.isUndefined(v)&&m!==l||(n[f]=v)}),n}const Lg="1.3.4",qc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{qc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Qf={};qc.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Lg+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new he(i(a," has been removed"+(n?" in "+n:"")),he.ERR_DEPRECATED);return n&&!Qf[a]&&(Qf[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function TS(e,t,n){if(typeof e!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],s=l===void 0||a(l,o,e);if(s!==!0)throw new he("option "+o+" must be "+s,he.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new he("Unknown option "+o,he.ERR_BAD_OPTION)}}const Nu={assertOptions:TS,validators:qc},En=Nu.validators;class ja{constructor(t){this.defaults=t,this.interceptors={request:new Hf,response:new Hf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ni(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Nu.assertOptions(r,{silentJSONParsing:En.transitional(En.boolean),forcedJSONParsing:En.transitional(En.boolean),clarifyTimeoutError:En.transitional(En.boolean)},!1),i!==void 0&&Nu.assertOptions(i,{encode:En.function,serialize:En.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&O.merge(o.common,o[n.method]),a&&O.forEach(["delete","get","head","post","put","patch","common"],x=>{delete o[x]}),n.headers=cn.concat(a,o);const l=[];let s=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(n)===!1||(s=s&&E.synchronous,l.unshift(E.fulfilled,E.rejected))});const u=[];this.interceptors.response.forEach(function(E){u.push(E.fulfilled,E.rejected)});let f,m=0,v;if(!s){const x=[Gf.bind(this),void 0];for(x.unshift.apply(x,l),x.push.apply(x,u),v=x.length,f=Promise.resolve(n);m<v;)f=f.then(x[m++],x[m++]);return f}v=l.length;let w=n;for(m=0;m<v;){const x=l[m++],E=l[m++];try{w=x(w)}catch(g){E.call(this,g);break}}try{f=Gf.call(this,w)}catch(x){return Promise.reject(x)}for(m=0,v=u.length;m<v;)f=f.then(u[m++],u[m++]);return f}getUri(t){t=ni(this.defaults,t);const n=Ng(t.baseURL,t.url);return $g(n,t.params,t.paramsSerializer)}}O.forEach(["delete","get","head","options"],function(t){ja.prototype[t]=function(n,r){return this.request(ni(r||{},{method:t,url:n,data:(r||{}).data}))}});O.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(ni(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}ja.prototype[t]=n(),ja.prototype[t+"Form"]=n(!0)});const ua=ja;class Kc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new Eo(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Kc(function(i){t=i}),cancel:t}}}const NS=Kc;function LS(e){return function(n){return e.apply(null,n)}}function DS(e){return O.isObject(e)&&e.isAxiosError===!0}const Lu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lu).forEach(([e,t])=>{Lu[t]=e});const IS=Lu;function Dg(e){const t=new ua(e),n=mg(ua.prototype.request,t);return O.extend(n,ua.prototype,t,{allOwnKeys:!0}),O.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Dg(ni(e,i))},n}const Je=Dg(Qc);Je.Axios=ua;Je.CanceledError=Eo;Je.CancelToken=NS;Je.isCancel=Tg;Je.VERSION=Lg;Je.toFormData=xl;Je.AxiosError=he;Je.Cancel=Je.CanceledError;Je.all=function(t){return Promise.all(t)};Je.spread=LS;Je.isAxiosError=DS;Je.mergeConfig=ni;Je.AxiosHeaders=cn;Je.formToJSON=e=>Og(O.isHTMLForm(e)?new FormData(e):e);Je.HttpStatusCode=IS;Je.default=Je;const MS=Je,ca=MS.create({baseURL:"http://localhost:5000"}),_S=async(e,t)=>await ca.post("/login",{email:e,password:t}),El=b.createContext({}),zS=({children:e})=>{const[t,n]=b.useState({CodUser:null,Name:"",Email:""});b.useEffect(()=>{const o=localStorage.getItem("user"),a=localStorage.getItem("token");o&&a&&(n(JSON.parse(o)),ca.defaults.headers.Authorization=`Bearer ${a}`)},[]);const r=async(o,a)=>{const l=await _S(o,a);localStorage.setItem("user",JSON.stringify(l.data.user)),localStorage.setItem("token",l.data.token),ca.defaults.headers.Authorization=`Bearer ${l.data.token}`,n(l.data.user)},i=()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),localStorage.removeItem("userResult"),ca.defaults.headers.Authorization=null,n({CodUser:null,Name:"",Email:""})};return d(El.Provider,{value:{authenticated:t.CodUser!==null,user:t,login:r,logout:i},children:e})},FS=S.div`
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
`,US=S.span`
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-right: 10px;

  @media screen and (max-width: ${c.largeDesktop}) {     
   font-size: 16px;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,jS=S(mw)`
  font-size: 38px;

  @media screen and (max-width: ${c.largeDesktop}) {     
   font-size: 28px;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {     
   font-size: 48px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}){    
    font-size: 60px;   
  }
`,BS=({})=>{const e=wo();return $(FS,{onClick:()=>e("/Login"),children:[d(US,{children:"Entrar"}),d(jS,{})]})},HS=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  height: 100%;
`,VS=S.span`
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-right: 20px;
  color: #000;

  @media screen and (max-width: ${c.largeDesktop}) {     
   font-size: 16px;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,JS=S.div`
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
`,GS=S.span`
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-right: 10px;

  @media screen and (max-width: ${c.largeDesktop}) {     
   font-size: 16px;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,WS=S(pw)`
  font-size: 38px;

  @media screen and (max-width: ${c.largeDesktop}) {     
   font-size: 28px;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {     
   font-size: 48px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}){    
    font-size: 60px;   
  }
`;function Ig(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ig(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Mn(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ig(e))&&(r&&(r+=" "),r+=t);return r}const ji=e=>typeof e=="number"&&!isNaN(e),gr=e=>typeof e=="string",pt=e=>typeof e=="function",da=e=>gr(e)||pt(e)?e:null,fs=e=>b.isValidElement(e)||gr(e)||pt(e)||ji(e);function QS(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Cl(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:l,position:s,preventExitTransition:u,done:f,nodeRef:m,isIn:v}=a;const w=r?`${t}--${s}`:t,x=r?`${n}--${s}`:n,E=b.useRef(0);return b.useLayoutEffect(()=>{const g=m.current,h=w.split(" "),p=y=>{y.target===m.current&&(g.dispatchEvent(new Event("d")),g.removeEventListener("animationend",p),g.removeEventListener("animationcancel",p),E.current===0&&y.type!=="animationcancel"&&g.classList.remove(...h))};g.classList.add(...h),g.addEventListener("animationend",p),g.addEventListener("animationcancel",p)},[]),b.useEffect(()=>{const g=m.current,h=()=>{g.removeEventListener("animationend",h),i?QS(g,f,o):f()};v||(u?h():(E.current=1,g.className+=` ${x}`,g.addEventListener("animationend",h)))},[v]),te.createElement(te.Fragment,null,l)}}function qf(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const kt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Bo=e=>{let{theme:t,type:n,...r}=e;return te.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},ps={info:function(e){return te.createElement(Bo,{...e},te.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return te.createElement(Bo,{...e},te.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return te.createElement(Bo,{...e},te.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return te.createElement(Bo,{...e},te.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return te.createElement("div",{className:"Toastify__spinner"})}};function qS(e){const[,t]=b.useReducer(w=>w+1,0),[n,r]=b.useState([]),i=b.useRef(null),o=b.useRef(new Map).current,a=w=>n.indexOf(w)!==-1,l=b.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:w=>o.get(w)}).current;function s(w){let{containerId:x}=w;const{limit:E}=l.props;!E||x&&l.containerId!==x||(l.count-=l.queue.length,l.queue=[])}function u(w){r(x=>w==null?[]:x.filter(E=>E!==w))}function f(){const{toastContent:w,toastProps:x,staleId:E}=l.queue.shift();v(w,x,E)}function m(w,x){let{delay:E,staleId:g,...h}=x;if(!fs(w)||function(ie){return!i.current||l.props.enableMultiContainer&&ie.containerId!==l.props.containerId||o.has(ie.toastId)&&ie.updateId==null}(h))return;const{toastId:p,updateId:y,data:C}=h,{props:k}=l,N=()=>u(p),D=y==null;D&&l.count++;const T={...k,style:k.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(h).filter(ie=>{let[ue,le]=ie;return le!=null})),toastId:p,updateId:y,data:C,closeToast:N,isIn:!1,className:da(h.className||k.toastClassName),bodyClassName:da(h.bodyClassName||k.bodyClassName),progressClassName:da(h.progressClassName||k.progressClassName),autoClose:!h.isLoading&&(U=h.autoClose,J=k.autoClose,U===!1||ji(U)&&U>0?U:J),deleteToast(){const ie=qf(o.get(p),"removed");o.delete(p),kt.emit(4,ie);const ue=l.queue.length;if(l.count=p==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),ue>0){const le=p==null?l.props.limit:1;if(ue===1||le===1)l.displayedToast++,f();else{const de=le>ue?ue:le;l.displayedToast=de;for(let Se=0;Se<de;Se++)f()}}else t()}};var U,J;T.iconOut=function(ie){let{theme:ue,type:le,isLoading:de,icon:Se}=ie,Ee=null;const M={theme:ue,type:le};return Se===!1||(pt(Se)?Ee=Se(M):b.isValidElement(Se)?Ee=b.cloneElement(Se,M):gr(Se)||ji(Se)?Ee=Se:de?Ee=ps.spinner():(W=>W in ps)(le)&&(Ee=ps[le](M))),Ee}(T),pt(h.onOpen)&&(T.onOpen=h.onOpen),pt(h.onClose)&&(T.onClose=h.onClose),T.closeButton=k.closeButton,h.closeButton===!1||fs(h.closeButton)?T.closeButton=h.closeButton:h.closeButton===!0&&(T.closeButton=!fs(k.closeButton)||k.closeButton);let ge=w;b.isValidElement(w)&&!gr(w.type)?ge=b.cloneElement(w,{closeToast:N,toastProps:T,data:C}):pt(w)&&(ge=w({closeToast:N,toastProps:T,data:C})),k.limit&&k.limit>0&&l.count>k.limit&&D?l.queue.push({toastContent:ge,toastProps:T,staleId:g}):ji(E)?setTimeout(()=>{v(ge,T,g)},E):v(ge,T,g)}function v(w,x,E){const{toastId:g}=x;E&&o.delete(E);const h={content:w,props:x};o.set(g,h),r(p=>[...p,g].filter(y=>y!==E)),kt.emit(4,qf(h,h.props.updateId==null?"added":"updated"))}return b.useEffect(()=>(l.containerId=e.containerId,kt.cancelEmit(3).on(0,m).on(1,w=>i.current&&u(w)).on(5,s).emit(2,l),()=>{o.clear(),kt.emit(3,l)}),[]),b.useEffect(()=>{l.props=e,l.isToastActive=a,l.displayedToast=n.length}),{getToastToRender:function(w){const x=new Map,E=Array.from(o.values());return e.newestOnTop&&E.reverse(),E.forEach(g=>{const{position:h}=g.props;x.has(h)||x.set(h,[]),x.get(h).push(g)}),Array.from(x,g=>w(g[0],g[1]))},containerRef:i,isToastActive:a}}function Kf(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Yf(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function KS(e){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=b.useRef(e),{autoClose:s,pauseOnHover:u,closeToast:f,onClick:m,closeOnClick:v}=e;function w(C){if(e.draggable){C.nativeEvent.type==="touchstart"&&C.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",h),document.addEventListener("mouseup",p),document.addEventListener("touchmove",h),document.addEventListener("touchend",p);const k=o.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=k.getBoundingClientRect(),k.style.transition="",a.x=Kf(C.nativeEvent),a.y=Yf(C.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=k.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=k.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function x(C){if(a.boundingRect){const{top:k,bottom:N,left:D,right:T}=a.boundingRect;C.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=D&&a.x<=T&&a.y>=k&&a.y<=N?g():E()}}function E(){n(!0)}function g(){n(!1)}function h(C){const k=o.current;a.canDrag&&k&&(a.didMove=!0,t&&g(),a.x=Kf(C),a.y=Yf(C),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),k.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,k.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function p(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",p);const C=o.current;if(a.canDrag&&a.didMove&&C){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return i(!0),void e.closeToast();C.style.transition="transform 0.2s, opacity 0.2s",C.style.transform=`translate${e.draggableDirection}(0)`,C.style.opacity="1"}}b.useEffect(()=>{l.current=e}),b.useEffect(()=>(o.current&&o.current.addEventListener("d",E,{once:!0}),pt(e.onOpen)&&e.onOpen(b.isValidElement(e.children)&&e.children.props),()=>{const C=l.current;pt(C.onClose)&&C.onClose(b.isValidElement(C.children)&&C.children.props)}),[]),b.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||g(),window.addEventListener("focus",E),window.addEventListener("blur",g)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",g))}),[e.pauseOnFocusLoss]);const y={onMouseDown:w,onTouchStart:w,onMouseUp:x,onTouchEnd:x};return s&&u&&(y.onMouseEnter=g,y.onMouseLeave=E),v&&(y.onClick=C=>{m&&m(C),a.canCloseOnClick&&f()}),{playToast:E,pauseToast:g,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:y}}function Mg(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return te.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},te.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},te.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function YS(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:a,style:l,controlledProgress:s,progress:u,rtl:f,isIn:m,theme:v}=e;const w=o||s&&u===0,x={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:w?0:1};s&&(x.transform=`scaleX(${u})`);const E=Mn("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${v}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),g=pt(a)?a({rtl:f,type:i,defaultClassName:E}):Mn(E,a);return te.createElement("div",{role:"progressbar","aria-hidden":w?"true":"false","aria-label":"notification timer",className:g,style:x,[s&&u>=1?"onTransitionEnd":"onAnimationEnd"]:s&&u<1?null:()=>{m&&r()}})}const XS=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=KS(e),{closeButton:o,children:a,autoClose:l,onClick:s,type:u,hideProgressBar:f,closeToast:m,transition:v,position:w,className:x,style:E,bodyClassName:g,bodyStyle:h,progressClassName:p,progressStyle:y,updateId:C,role:k,progress:N,rtl:D,toastId:T,deleteToast:U,isIn:J,isLoading:ge,iconOut:ie,closeOnClick:ue,theme:le}=e,de=Mn("Toastify__toast",`Toastify__toast-theme--${le}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":D},{"Toastify__toast--close-on-click":ue}),Se=pt(x)?x({rtl:D,position:w,type:u,defaultClassName:de}):Mn(de,x),Ee=!!N||!l,M={closeToast:m,type:u,theme:le};let W=null;return o===!1||(W=pt(o)?o(M):b.isValidElement(o)?b.cloneElement(o,M):Mg(M)),te.createElement(v,{isIn:J,done:U,position:w,preventExitTransition:n,nodeRef:r},te.createElement("div",{id:T,onClick:s,className:Se,...i,style:E,ref:r},te.createElement("div",{...J&&{role:k},className:pt(g)?g({type:u}):Mn("Toastify__toast-body",g),style:h},ie!=null&&te.createElement("div",{className:Mn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ge})},ie),te.createElement("div",null,a)),W,te.createElement(YS,{...C&&!Ee?{key:`pb-${C}`}:{},rtl:D,theme:le,delay:l,isRunning:t,isIn:J,closeToast:m,hide:f,type:u,style:y,className:p,controlledProgress:Ee,progress:N||0})))},kl=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},ZS=Cl(kl("bounce",!0));Cl(kl("slide",!0));Cl(kl("zoom"));Cl(kl("flip"));const Du=b.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=qS(e),{className:o,style:a,rtl:l,containerId:s}=e;function u(f){const m=Mn("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":l});return pt(o)?o({position:f,rtl:l,defaultClassName:m}):Mn(m,da(o))}return b.useEffect(()=>{t&&(t.current=r.current)},[]),te.createElement("div",{ref:r,className:"Toastify",id:s},n((f,m)=>{const v=m.length?{...a}:{...a,pointerEvents:"none"};return te.createElement("div",{className:u(f),style:v,key:`container-${f}`},m.map((w,x)=>{let{content:E,props:g}=w;return te.createElement(XS,{...g,isIn:i(g.toastId),style:{...g.style,"--nth":x+1,"--len":m.length},key:`toast-${g.key}`},E)}))}))});Du.displayName="ToastContainer",Du.defaultProps={position:"top-right",transition:ZS,autoClose:5e3,closeButton:Mg,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let hs,nr=new Map,Pi=[],eE=1;function _g(){return""+eE++}function tE(e){return e&&(gr(e.toastId)||ji(e.toastId))?e.toastId:_g()}function Bi(e,t){return nr.size>0?kt.emit(0,e,t):Pi.push({content:e,options:t}),t.toastId}function Ba(e,t){return{...t,type:t&&t.type||e,toastId:tE(t)}}function Ho(e){return(t,n)=>Bi(t,Ba(e,n))}function ke(e,t){return Bi(e,Ba("default",t))}ke.loading=(e,t)=>Bi(e,Ba("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),ke.promise=function(e,t,n){let r,{pending:i,error:o,success:a}=t;i&&(r=gr(i)?ke.loading(i,n):ke.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(f,m,v)=>{if(m==null)return void ke.dismiss(r);const w={type:f,...l,...n,data:v},x=gr(m)?{render:m}:m;return r?ke.update(r,{...w,...x}):ke(x.render,{...w,...x}),v},u=pt(e)?e():e;return u.then(f=>s("success",a,f)).catch(f=>s("error",o,f)),u},ke.success=Ho("success"),ke.info=Ho("info"),ke.error=Ho("error"),ke.warning=Ho("warning"),ke.warn=ke.warning,ke.dark=(e,t)=>Bi(e,Ba("default",{theme:"dark",...t})),ke.dismiss=e=>{nr.size>0?kt.emit(1,e):Pi=Pi.filter(t=>e!=null&&t.options.toastId!==e)},ke.clearWaitingQueue=function(e){return e===void 0&&(e={}),kt.emit(5,e)},ke.isActive=e=>{let t=!1;return nr.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},ke.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const a=nr.get(o||hs);return a&&a.getToast(r)}(e,t);if(n){const{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:_g()};o.toastId!==e&&(o.staleId=e);const a=o.render||i;delete o.render,Bi(a,o)}},0)},ke.done=e=>{ke.update(e,{progress:1})},ke.onChange=e=>(kt.on(4,e),()=>{kt.off(4,e)}),ke.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ke.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},kt.on(2,e=>{hs=e.containerId||e,nr.set(hs,e),Pi.forEach(t=>{kt.emit(0,t.content,t.options)}),Pi=[]}).on(3,e=>{nr.delete(e.containerId||e),nr.size===0&&kt.off(0).off(1).off(5)});const nE=({user:e})=>{const{logout:t}=b.useContext(El),n=wo(),r=async()=>{try{await t(),n("/")}catch{ke.error("Erro, tente novamente.")}};return $(HS,{children:[$(VS,{children:["Olá, ",e.Name]}),$(JS,{onClick:()=>r(),children:[d(GS,{children:"Sair"}),d(WS,{})]})]})},rE=({})=>{const{user:e,authenticated:t}=b.useContext(El);return d(Ew,{children:t?d(nE,{user:e}):d(BS,{})})},Tt=({})=>{const e=wo();return $(Wx,{children:[$(Qx,{children:[d(Sw,{}),d(qx,{src:Kx,onClick:()=>e("/")}),d(rE,{})]}),d(uw,{})]})},iE=S.div`
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

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,oE=S.div`
  width: 85%;
  height: 2px;
  background: ${({theme:e})=>e.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${c.mobile}) {    
    width: 50%;
  }
`,aE=S.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${c.mobile}) {    
    flex-direction: column;
  }
`,Xf=S.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  text-align: center;
  color: ${({theme:e})=>e.colors.text.content};

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,ms=S.h3`
  text-align: center;
`,gs=S.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6%;
  text-align: center;
`,ys=S.span`
  /* display: flex;
  flex-direction: row; */
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.content};
  width: 100%;
  text-align: center;
  
  @media screen and (max-width: ${c.mobile}){
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
  
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,lE=S.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1%;
  margin-top: 1%;

  @media screen and (max-width: ${c.mobile}) {    
    width: 100%;
    margin-bottom: 3%;
    justify-content: center;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {      
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
`,sE=S.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;

  @media screen and (max-width: ${c.mobile}) {
    flex-direction: column;
    align-items: center;
  }
  
  @media screen and (min-width: 390px) and (max-width: ${c.largeMobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {      
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  } 

  @media screen and (min-width: 700px) and (max-width: 900px) {      
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,Nt=({})=>$(iE,{children:[d(lE,{children:$(sE,{children:[$(gs,{children:[d(ms,{children:"Endereço"}),d(ys,{children:"Rua Fonseca Teles 121, São Cristóvão, Rio de Janeiro, CEP: 20.940-903"})]}),$(gs,{children:[d(ms,{children:"Email"}),d(ys,{children:"nanofabuerj@gmail.com"})]}),$(gs,{children:[d(ms,{children:"Funcionamento"}),d(ys,{children:"Segunda a sexta Xhrs às Yhrs"})]})]})}),d(oE,{}),$(aE,{children:[d(Xf,{children:"Ⓒ Serra Jr. Engenharia 2022"}),d(Xf,{children:"Todos os direitos reservados"})]})]}),uE=S.div`
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

  @media screen and (max-width: ${c.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%;
    }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {    
      display: flex;
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;
      padding: 10px;
      margin-top: 15%;
  }
  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {    
      display: flex;
      width: 85%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 12%;
      margin-bottom: 5%;
      padding: 10px;
  }
  @media screen and (min-width: ${c.extraLargeDesktop}) {    
      padding: 60px;
  }

`,cE=S.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${c.mobile}) {    
      width: 100%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {    
      width: 90%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {    
      width: 90%;
      padding: 10px 10px;
  }
`,dE=S.span`
  margin: 10px 20px 5px 20px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  text-align: justify;

  /* @media screen and (max-width: ${c.mobile}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {    
    text-align: justify;
  } */

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
    
  }
`,fE=S.div`
  position: absolute;
  top: -70px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${c.mobile}) {
    top: -5px;
    left: -5px;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  }
`,pE=S.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${c.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
`,hE="/Nanofab-Project/assets/chemistry-7542d245.png",mE=({})=>d(fE,{children:d(pE,{src:hE})}),gE=S.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6%;

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {    
    padding-top: 0px;
  }
`,yE=S.span`
  font-weight: bold;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${c.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,vE=({title:e})=>d(gE,{children:d(yE,{children:e})}),xE=({descriptions:e})=>$(uE,{children:[d(mE,{}),d(vE,{title:"Sobre o NANOFAB"}),d(cE,{children:e.map(t=>d(dE,{children:t.text},e.indexOf(t)))})]}),wE=S.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    @media screen and (max-width: ${c.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 10%;
    }
    @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {    
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
    @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {   
        display: flex;
        width: 85%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
        margin-top: 2%;
  }

    @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
        width: 90%;
    }
`,SE=S.div`
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

  @media screen and (max-width: ${c.mobile}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {   
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    text-align: left;
  }

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {   
    padding: 1%;
  }
`,EE=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;
  margin-top: 5%;
`,CE=S.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`,kE=S.span`
  margin: 10px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  padding: 20px;
  text-align: justify;

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${c.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,AE=S.span`
  margin: 20px;
  font-weight: bold;
  line-height: 30px;
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;
  margin-top: 90px;

  @media screen and (max-width: ${c.mobile}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {   
    margin-bottom: 0px;
    margin: 10px;
    margin-top: 100px;
  }
  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
  }
`,bE=({image:e,title:t,text:n})=>$(SE,{children:[d(EE,{children:d(CE,{src:e,alt:t})}),d(AE,{children:t}),d(kE,{children:n})]}),RE=({cards:e})=>d(wE,{children:e.map(t=>d(bE,{image:t.image,title:t.title,text:t.text},e.indexOf(t)))}),$E=({})=>$(Vx,{children:[d(Tt,{}),d(xE,{descriptions:[{text:"O Laboratório Multiusuário de Nanofabricaçao e Caracterizaçao de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduaçao em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisiçao de um microscópio eletrônico de alta resoluçao do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existencia de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperaçao. Neste contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. "},{text:"Além disso, o NANOFAB atende demandas na área de micro e nanofabricaçao com o oferecimento de uma infraestrutura de sala limpa para fabricação de microdispositivos e deposição de Grafeno por deposição de vapor químico (Chemical Vapor Deposition). Esta sala limpa possui uma área especial para a manipulação e preparação de nanomateriais."},{text:"O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. Além disso, possui equipamentos para preparação de amostras para microscopia eletrônica de transmissão (MET)."},{text:"O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geraçăo de hidrogęnio, revestimentos de aços e compósitos."}]}),d(RE,{cards:[{image:Gx,title:"Coordenação e Comitê Gestor",text:"O NANOFAB é coordenado pelo prof. José Brant de Campos (UERJ) e tem como vice-coordenador o prof. Norberto Mangiavacchi (UERJ). O Comitę Gestor do NANOFAB, é composto por quatro membros eleitos a cada dois anos. Para o Bienio 2023-2025, o Comite Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET), Rogério Navarro Correia de Siqueira (PUC-Rio) e pela profa. Suzana Bottega Peripolli (UERJ)."},{image:Jx,title:"Unidades e Programas Envolvidos / Projetos de Pesquisa",text:"Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química  e Engenharia Química) e o Instituto de Física da UERJ. O NANOFAB é um laboratório pertencente ao PROGEMULTI/UERJ (Programa de Gestão de Laboratórios e Equipamentos Multiusuários) da UERJ. Dentro das parcerias externas de pesquisa e institucionais, o NANOFAB desenvolve trabalhos com o sistema SENAI, CBPF, PUC-Rio, CEFET, UFRJ e UFF e coopera com universidades e centros de pesquisa no exterior, como o Centro de Microeletrônica de Barcelona (CNM), na Espanha e a Universidade de Louvain (UCLouvain), na Bélgica."}]}),d(Nt,{})]}),PE=S.div`
  width: 100%;
`,OE=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`,TE=S.div`

`,NE=S.img`
  height: 120px;
  @media screen and (max-width: ${c.mobile}) {
    height: 80px;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    height: 100px;
  }

  @media screen and (min-width: 700px) and (max-width: 821px) {
    height: 100px;
  }
`,LE=S.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  margin-bottom: 20px;

  @media screen and (max-width: ${c.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
`,DE=S.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    border-radius: 40px;
    
    @media screen and (max-width: ${c.mobile}) {
        width: 90%;
    }  
    
    @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
        width: 90%;
    }
`,IE=S.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (max-width: ${c.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${c.tablet}) and (max-width: 1025px) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${c.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,ME=S.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #d5d4d4;
`,_E=S.div`
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
`,zE=S.div`
    width: 40%;
    margin: 10px;

    @media screen and (max-width: ${c.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${c.largeMobile}) {    
        width: 70%;
    }
`,FE=S.button`    
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
`,UE=S.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;
    flex-wrap: wrap;

    @media screen and (max-width: ${c.mobile}) {   
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
    
`,vs=S.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    flex: 1
`,xs=S.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`,jE=S.span`
    font-size: ${({theme:e})=>e.fonts.small}px;
    color: ${({theme:e})=>e.colors.text.title};
    text-align: left;
`,ws=S.span`

`;function zg(e){return li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 14l-4-4h8z"}}]}]})(e)}function Fg(e){return li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10l4 4H8z"}}]}]})(e)}const BE=({name:e,unit:t,bond:n,titration:r})=>{const[i,o]=b.useState(!1);return $(zE,{children:[$(FE,{onClick:()=>o(!i),isVisible:i,children:[d(jE,{children:e}),i?d(Fg,{size:20}):d(zg,{size:20})]}),i?$(UE,{isVisible:i,children:[$(vs,{children:[d(xs,{children:"PPG/IES"}),d(ws,{children:t})]}),$(vs,{children:[d(xs,{children:"Vínculo"}),d(ws,{children:n})]}),$(vs,{children:[d(xs,{children:"Titulação"}),d(ws,{children:r})]})]}):null]})},HE=({title:e,persons:t})=>$(DE,{children:[d(ME,{children:d(IE,{children:e})}),d(_E,{children:t.map(n=>d(BE,{name:n.name,bond:n.bond,titration:n.titration,unit:n.unit},t.indexOf(n)))})]}),VE="/Nanofab-Project/assets/team-2f83bf5a.png",JE=({list:e})=>$(OE,{children:[d(TE,{children:d(NE,{src:VE})}),d(LE,{children:"Equipe"}),e.map(t=>d(HE,{title:t.personFunction,persons:t.persons},e.indexOf(t)))]}),GE=({})=>$(PE,{children:[d(Tt,{}),d(JE,{list:[{personFunction:"Comitê Gestor",persons:[{name:"José Brant de Campos",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE "},{name:"Noberto Mangiavacchi",unit:"UERJ",bond:"Permanente",titration:"Doutor"},{name:"Hector Reynaldo Meneses",unit:"CEFET-RJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rogério Navarro Correia de Siqueira",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Suzana Bottega Peripolli",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]},{personFunction:"Equipe NANOFAB",persons:[{name:"Maybi Fálker Sampaio",unit:"NANOFAB/UERJ",bond:"Bolsista QUALITEC/UERJ",titration:"Doutor"},{name:"Kellen Venâncio dos Santos",unit:"NANOFAB/UERJ",bond:"Bolsista TCT/FAPERJ",titration:"Engenheira"},{name:"Camila Alves Pelicarto Silva",unit:"NANOFAB/UERJ",bond:"Bolsista PROATEC/UERJ",titration:"Engenheira"}]},{personFunction:"Comitê de Usuários",persons:[{name:"Lilian Pantoja Sosman",unit:"IF - PPGF/UERJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Ivana Lourenço de Mello Ferreira",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilia Garcia Diniz",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José Ricardo Muniz Ferreira",unit:"Empresa R-CRio",bond:"Sócio",titration:"Doutor"}]},{personFunction:"Pesquisador",persons:[{name:"Eduardo de Albuquerque Brocchi",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 1C, CNE"},{name:"José Guilherme Santos Silva",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1B, CNE"},{name:"Luciano Rodrigues Ornelas de Lima",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1D, CNE"},{name:"Marcos Antonio da Silva Costa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Nakédia Maysa Freitas Carvalho",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE"},{name:"Francisco José Moura",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rodrigo Fernandes Magalhães de Souza",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eric Cardona Romani",unit:"SENAI",bond:"Permanente",titration:"Doutor"},{name:"Jorge Luis do Amaral",unit:"PPG-EL/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilza Sampaio Aguilar",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Daniel José Naid Mansur Chalhub",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José da Rocha Miranda Pontes",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Ana Maria Furtado de Sousa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Jaqueline Dias Senra",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Juliana Fonseca de Lima",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Herman Lima Pessoa",unit:"CBPF",bond:"Permanente",titration:"Doutor"},{name:"Letícia Aguilera dos Santos",unit:"IPRJ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Cecilia Vilani",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Celio Albano da Costa",unit:"UFRJ",bond:"Permanente",titration:"Doutor"},{name:"José Luis Lopes da Silveira",unit:"UFRJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eduardo Sousa Lima",unit:"IME",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eustáquio de Souza Baêta Junior",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]}]}),d(Nt,{})]}),WE=S.div`
  width: 100%;
`,QE=S.div`
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
`,qE=S.h1`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;


  @media screen and (min-width: ${c.desktop}) and (max-width: ${c.largeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*3.5}px;
  }
`,KE=S.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
`,YE=S.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`,XE=S.div`
  margin-top: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;

  @media screen and (max-width: ${c.mobile}) {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    width: 100%;
    margin-top: 20px;
  }
`,Zf=S.button`
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

   @media screen and (max-width: ${c.mobile}) {
     width: 50%;
   }

   @media screen and (min-width: 390px) and (max-width: ${c.largeMobile}) {
     width: 50%;
   }

   @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
     width: 50%;
   }

   @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
     width: 50%;
   }

   @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
     width: 60%;
   }

   @media screen and (min-width: ${c.extraLargeDesktop}) {
     width: 30%;
     font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
   }
   @media screen and (min-width: ${c.desktop}) and (max-width: ${c.largeDesktop}) {
     width: 30%;
     font-size: ${({theme:e})=>e.fonts.extralarge}px;
   }
`,ZE=S.div`
  width: 50%;
  margin-bottom: 3%;
  margin-right: 50%;
`,e2=S.h2`
  font-size: ${({theme:e})=>e.fonts.large}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

   @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
     font-size: ${({theme:e})=>e.fonts.large}px;
   }

   @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
     font-size: ${({theme:e})=>e.fonts.extralarge}px;
   }

   @media screen and (min-width: ${c.desktop}) and (max-width: ${c.largeDesktop}) {
     font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
   }

   @media screen and (min-width: ${c.extraLargeDesktop}) {
     font-size: ${({theme:e})=>e.fonts.extralarge*2.5}px;
   }
`,t2=S.select`
  width: 25%;
  border-radius: 10px;
  margin-right: 20px;
  padding: 0.5%;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fonts.small}px;

  @media screen and (max-width: ${c.mobile}) {
    width: 100%;
    margin-right: 6px;
  }

  @media screen and (min-width: 390px) and (max-width: ${c.largeMobile}) {
    width: 100%;
    margin-right: 5px;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    width: 100%;
    margin-right: 6px;
  }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
    width: 100%;
    margin-right: 10px;
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    width: 100%;
    margin-right: 10px;
  }

  @media screen and (min-width: ${c.desktop}) and (max-width: ${c.largeDesktop}) {
    width: 30%;
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    width: 35%;
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
`;S.option`
  font-size: ${({theme:e})=>e.fonts.large}px;
`;const n2=S.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  width: 100%;
`,r2=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  
  
`,i2=S.div`
    width: 100%;
    display: flex;
    background-color: #D5D4D4;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


`,o2=S.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin: 5px;
    font-weight: bold;
    margin-left: 10px;

    @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
      }
      @media screen and (min-width: ${c.extraLargeDesktop}){    
        
      }
      
`,a2=S.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    
`,l2=S.span`
    text-align: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ${({status:e})=>{if(e==="Aprovado")return"background-color: rgba(48, 212, 111, 0.7);";if(e==="Solicitado")return"background-color: rgba(255, 204, 92, 0.7);";if(e==="Cancelado")return"background-color: rgba(255, 111, 105, 0.7);"}}
`,Ss=S.span`
    margin: 10px;
`,s2=({name:e,institution:t,startDate:n,endDate:r,samples:i,situation:o})=>$(r2,{children:[d(i2,{children:$(o2,{children:[e," - ",t]})}),$(a2,{children:[$(Ss,{children:["Data de Solicitação: ",n]}),$(Ss,{children:["Data Final: ",r||"Não informado"]}),$(Ss,{children:["Quantidade de Amostras: ",i]})]}),d(l2,{status:o,children:o})]}),u2=({list:e})=>{const[t,n]=b.useState(0),[r,i]=b.useState(9),[o,a]=b.useState("Todos");b.useState([]);const[l,s]=b.useState([]);b.useEffect(()=>{const w=[];e.forEach(x=>{(o==="Todos"||x.situation===o)&&w.push(x)}),s(w)},[e,o]);const u=()=>{t===9?(n(t),i(r)):(n(t+9),i(r+9))},f=()=>{t===0?(n(0),i(9)):(n(t-9),i(r-9))},m=l.slice(t,r).map(w=>d(s2,{name:w.name,institution:w.institution,startDate:w.startDate,endDate:w.endDate,samples:w.samples,situation:w.situation},e.indexOf(w)));function v(w){w.target.value==="Todos"?a("Todos"):w.target.value==="Solicitado"?a("Solicitado"):w.target.value==="Agendado"?a("Agendado"):w.target.value==="Finalizado"?a("Finalizado"):w.target.value==="Antigos"&&a("Antigos")}return $(KE,{children:[$(ZE,{children:[d(e2,{children:"Filtro"}),d(n2,{children:$(t2,{onChange:w=>v(w),children:[d("option",{value:"Todos",children:"Todos"}),d("option",{value:"Solicitado",children:"Solicitado"}),d("option",{value:"Agendado",children:"Agendado"}),d("option",{value:"Finalizado",children:"Finalizado"}),d("option",{value:"Antigos",children:"Antigos"})]})})]}),d(YE,{children:m}),$(XE,{children:[d(Zf,{onClick:f,children:"Anterior"}),d(Zf,{onClick:u,children:"Próxima"})]})]})},c2=({})=>$(QE,{children:[d(qE,{children:"Lista de Solitações"}),d(u2,{list:[{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Finalizado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Antigos"}]})]}),d2=({})=>$(WE,{children:[d(Tt,{}),d(c2,{}),d(Nt,{})]}),f2=S.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`,p2=S.div`
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

  @media screen and (max-width: ${c.mobile}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }
`,h2=S.div`
  position: absolute;
  top: -50px;
  right: -50px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${c.mobile}) {
    right: calc(100vw / 3);
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    right: calc(100vw / 3);
  }
  /*
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  } */
`,m2=S.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${c.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
 
`;S.h1` // Submissão de Projeto
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;

  @media screen and (max-width: ${c.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }
`;const g2=S.div`
  width: 100%;
  padding: 2%;
  padding-left: 0%;
  padding-right: 0%;
  padding-bottom: 0;

`,ki=S.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${c.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,Al=S.input`
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
    
    @media screen and (max-width: ${c.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`;S.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
    `;const Cn=S.input`
    height: 15px;
    width: 15px;
`,kn=S.label`
  margin-left: 5px;
  font-family: "Maven Pro";
  `,An=S.div`
  display: flex;
  
  flex-direction: row;
  margin: 5px;
  `,Es=S.div`
  margin-bottom: 3%;
  margin-top: 3%;
  `,y2=S(Al)`

`,v2=S(Al)`

`,x2=S(Al)`

`,bl=S.div`
    margin-bottom: 3%;
`;S(bl)`

`;S(bl)`

`;S(bl)`

`;const w2=({formData:e,setFormData:t})=>{const n=r=>{switch(console.log(r),r){case"microscopia_eletronica":t({...e,microscopia_eletronica:!e.microscopia_eletronica});break;case"amostras_met":t({...e,amostras_met:!e.amostras_met});break;case"grafeno_cvd":t({...e,grafeno_cvd:!e.grafeno_cvd});break;case"microsoldadora":t({...e,microsoldadora:!e.microsoldadora});break;case"microdurometro":t({...e,microdurometro:!e.microdurometro});break;case"estereoscopio":t({...e,estereoscopio:!e.estereoscopio});break;case"nanomat":t({...e,nanomat:!e.nanomat});break;case"microfab":t({...e,microfab:!e.microfab});break;default:console.log("Caso fora do switch-case")}};return $(g2,{children:[$(bl,{children:[d(ki,{children:"Orientador:"}),d(Al,{type:"text",name:"orientador",value:e.orientador,onChange:r=>t({...e,orientador:r.target.value}),placeholder:"(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"})]}),d(ki,{children:"Tipos:"}),$(An,{children:[d(Cn,{type:"checkbox",value:"1",checked:e.microscopia_eletronica,onChange:()=>n("microscopia_eletronica")}),d(kn,{children:"Microscopia Eletrônica de Varredura"})]}),$(An,{children:[d(Cn,{type:"checkbox",value:"amostras_met",checked:e.amostras_met,onChange:()=>n("amostras_met")}),d(kn,{children:"Preparação de Amostras para MET"})]}),$(An,{children:[d(Cn,{type:"checkbox",value:"nanomat",checked:e.nanomat,onChange:()=>n("nanomat")}),d(kn,{children:"Sala Limpa: preparação de Nanomateriais"})]}),$(An,{children:[d(Cn,{type:"checkbox",value:"microfab",checked:e.microfab,onChange:()=>n("microfab")}),d(kn,{children:"Sala Limpa: microfabricação"})]}),$(An,{children:[d(Cn,{type:"checkbox",value:"grafeno_cvd",checked:e.grafeno_cvd,onChange:()=>n("grafeno_cvd")}),d(kn,{children:"Sala Limpa: Deposição de Grafeno por CVD"})]}),$(An,{children:[d(Cn,{type:"checkbox",value:"microsoldadora",checked:e.microsoldadora,onChange:()=>n("microsoldadora")}),d(kn,{children:"Microsoldadora"})]}),$(An,{children:[d(Cn,{type:"checkbox",value:"microdurometro",checked:e.microdurometro,onChange:()=>n("microdurometro")}),d(kn,{children:"Microdurômetro"})]}),$(An,{children:[d(Cn,{type:"checkbox",value:"estereoscopio",checked:e.estereoscopio,onChange:()=>n("estereoscopio")}),d(kn,{children:"Estereoscópio"})]}),$(Es,{children:[d(ki,{children:"Outros:"}),d(y2,{type:"text",name:"outros",value:e.outros,onChange:r=>t({...e,outros:r.target.value}),placeholder:"Informar nome."})]}),$(Es,{children:[d(ki,{children:"Detectores:"}),d(v2,{type:"text",name:"outros",value:e.detectores,onChange:r=>t({...e,detectores:r.target.value}),placeholder:"[TEMP] Informar detectores."})]}),$(Es,{children:[d(ki,{children:"Projeto Científico e Descrição das Amostras:"}),d(x2,{type:"text",name:"outros",value:e.projeto_descricao_amostras,onChange:r=>t({...e,projeto_descricao_amostras:r.target.value}),placeholder:"[TEMP] Informar Projeto Científico e Descrição das Amostras:."})]})]})},S2=S.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,E2=S.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
    
    @media screen and (max-width: ${c.mobile}) {    
        width: 80%;
        margin-bottom: 5%;
    }
    @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {   
        width: 80%;
        margin-bottom: 5%;
    }
    `,ep=S.button`
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

    @media screen and (max-width: ${c.mobile}) {    
        width: 40%;
        height: 5vh;
    }

    @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {   
        width: 40%;
    }

    `,C2=({})=>d(S2,{children:$(E2,{children:[d(ep,{children:"Apagar"}),d(ep,{type:"submit",children:"Enviar"})]})}),k2=S.div`
    width: 100%;
    margin-bottom: 3%;

`,Cs=S.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${c.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,A2=S.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
`,tp=S.section`
    width: 30%;
`,np=S.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    margin: 3%;
    margin-left: 0px;
`,rp=S.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,ip=S.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,b2=S.input`
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
    
    @media screen and (max-width: ${c.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,R2=S.div`
  margin-bottom: 3%;
`,$2=S.input`
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
    
    @media screen and (max-width: ${c.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,P2=({formData:e,setFormData:t})=>$(k2,{children:[$(A2,{children:[$(tp,{children:[d(Cs,{children:"Tipo de Análise"}),$(np,{children:[d(rp,{type:"radio",id:"quantitativa",name:"analysisType",color:"red",value:"quantitativa",checked:e.analise_quantitativa,onChange:()=>{e.analise_quantitativa!==e.analise_qualitativa&&t({...e,analise_quantitativa:!e.analise_quantitativa,analise_qualitativa:!e.analise_qualitativa}),e.analise_quantitativa===e.analise_qualitativa&&t({...e,analise_quantitativa:!0,analise_qualitativa:!1})}}),d(ip,{htmlFor:"quantitativa",children:"Quantitativa"})]}),$(np,{children:[d(rp,{type:"radio",id:"qualitativa",name:"analysisType",value:"Qualitativa",onChange:()=>{e.analise_quantitativa!==e.analise_qualitativa&&t({...e,analise_quantitativa:!e.analise_quantitativa,analise_qualitativa:!e.analise_qualitativa}),e.analise_quantitativa===e.analise_qualitativa&&t({...e,analise_quantitativa:!1,analise_qualitativa:!0})}}),d(ip,{htmlFor:"qualitativa",children:"Qualitativa"})]})]}),$(tp,{children:[$(Cs,{children:["Qntd. de Amostras - Máximo ",Iu]}),d(b2,{type:"number",min:"1",max:Iu,value:e.quantidade_amostras,onChange:n=>t({...e,quantidade_amostras:parseInt(n.target.value)})})]})]}),$(R2,{children:[d(Cs,{children:"Técnicas de Medida e Condições de Varredura:"}),d($2,{type:"text",name:"tecnicas_condicoes",value:e.tecnicas_condicoes,onChange:n=>t({...e,tecnicas_condicoes:n.target.value}),placeholder:"Se souber, descreva as técnicas de medida e as condições de carredura."})]})]}),O2=S.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
    margin-bottom: 3%;
`,op=S.div`
    width: 45%;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    
`,ap=S.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
`,lp=S.input`
    width: 90%;
    height: 40px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    margin-bottom: 10px;
    
    `,T2=({formData:e,setFormData:t})=>{const n=(r,i,o)=>{const a=e.amostras;o==="composicaoAmostra"?a[r]={identificacao_amostra:a[r].identificacao_amostra,composicao_quimica:i}:a[r]={identificacao_amostra:i,composicao_quimica:a[r].composicao_quimica},t({...e,amostras:a})};return $(O2,{children:[$(op,{children:[d(ap,{children:"Identificação da(s) Amostra(s):"}),d(td,{children:Array.from({length:e.quantidade_amostras},(r,i)=>d(lp,{type:"text",onChange:o=>n(i,o.target.value,"identificacaoAmostra"),name:"chemicalIdentification"},i))})]}),$(op,{children:[d(ap,{children:"Composição Química:"}),d(td,{children:Array.from({length:e.quantidade_amostras},(r,i)=>d(lp,{type:"text",onChange:o=>n(i,o.target.value,"composicaoAmostra"),name:"chemicalComposition"},i))})]})]})},N2=S.div`
  width: 100%;
  padding: 5%;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0;

`,ks=S.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${c.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,L2=S.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
`,D2=S.h4`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;  
`,I2=S.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3%;
`,sp=S.section`
    width: 45%;
`,bn=S.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    margin: 3%;
    margin-left: 0px;
`,Rn=S.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,$n=S.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,M2=S.select`
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
    
    @media screen and (max-width: ${c.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,up=S.option`

`,_2=S.div`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,z2=S.p`
  color: #5086B6;
`;S.select`
  
`;const F2=({formData:e,setFormData:t})=>{const n=["Urgente","Alta","Média","Baixa"],r=b.useRef(null),i=()=>r.current.value;return $(N2,{children:[$(I2,{children:[$(sp,{children:[d(ks,{children:"Retornar a(s) amostra(s) analisada(s)?"}),$(bn,{children:[d(Rn,{type:"radio",id:"retorna_sim",name:"analysisType",value:"retorna_sim",color:"red",checked:e.retornar_amostra!=null?e.retornar_amostra:!1,onChange:()=>t({...e,retornar_amostra:!0})}),d($n,{htmlFor:"retorna_sim",children:"Sim"})]}),$(bn,{children:[d(Rn,{type:"radio",id:"retorna_nao",name:"analysisType",value:"retorna_nao",color:"red",checked:e.retornar_amostra!=null?!e.retornar_amostra:!1,onChange:()=>t({...e,retornar_amostra:!1})}),d($n,{htmlFor:"retorna_nao",children:"Não"})]})]}),$(sp,{children:[d(ks,{children:"Nível de prioridade desejada:"}),$(M2,{id:"priority_selector",name:"priority_selector",ref:r,onChange:()=>{t({...e,nivel_prioridade:i()})},children:[d(up,{value:" ",selected:!0,disabled:!0,children:"Selecione uma prioridade"}),n.map(o=>d(up,{value:o,children:o}))]})]})]}),$(_2,{children:[d(ks,{children:"Informe as condições de segurança quanto ao manuseio do material."}),d(D2,{children:"Caso a quantidade de amostras passe o número proposto, avisar antes de envia-las"}),$(L2,{children:[$(bn,{children:[d(Rn,{type:"radio",id:"inflamavel",name:"securityConditions",value:"inflamavel",onClick:()=>t({...e,condicao_seguranca:"inflamavel"})}),d($n,{htmlFor:"inflamavel",children:"Inflamável"})]}),$(bn,{children:[d(Rn,{type:"radio",id:"toxico",name:"securityConditions",value:"toxico",onClick:()=>t({...e,condicao_seguranca:"toxico"})}),d($n,{htmlFor:"toxico",children:"Tóxico"})]}),$(bn,{children:[d(Rn,{type:"radio",id:"hidroscopico",name:"securityConditions",value:"hidroscopico",onClick:()=>t({...e,condicao_seguranca:"hidroscopico"})}),d($n,{htmlFor:"hidroscopico",children:"Hidroscópico"})]}),$(bn,{children:[d(Rn,{type:"radio",id:"radioativo",name:"securityConditions",value:"radioativo",onClick:()=>t({...e,condicao_seguranca:"radioativo"})}),d($n,{htmlFor:"radioativo",children:"Radioativo"})]}),$(bn,{children:[d(Rn,{type:"radio",id:"corrosivo",name:"securityConditions",value:"corrosivo",onClick:()=>t({...e,condicao_seguranca:"corrosivo"})}),d($n,{htmlFor:"corrosivo",children:"Corrosivo"})]}),$(bn,{children:[d(Rn,{type:"radio",id:"corrosivo",name:"securityConditions",value:"corrosivo",onClick:()=>t({...e,condicao_seguranca:"outros"})}),d($n,{htmlFor:"corrosivo",children:"Outros"})]})]}),d(z2,{children:"(*) Caso não saiba as condições de segurança quanto ao manuseio, não é necessário selecionar os campos."})]})]})},U2="/Nanofab-Project/assets/search-1143e4ec.png",Iu=200,j2=({})=>{b.useState(1);const[e,t]=b.useState({analise_qualitativa:!1,analise_quantitativa:!1,quantidade_amostras:1,tecnicas_condicoes:"",orientador:"",microscopia_eletronica:!1,amostras_met:!1,nanomat:!1,microfab:!1,grafeno_cvd:!1,microsoldadora:!1,microdurometro:!1,estereoscopio:!1,outros:"",detectores:"",projeto_descricao_amostras:"",amostras:Array(Iu).fill({}),nivel_prioridade:"",condicao_seguranca:""}),n=r=>{r.preventDefault(),console.log(e)};return b.useEffect(()=>{},[]),$(p2,{children:[d(h2,{children:d(m2,{src:U2})}),$("form",{onSubmit:n,children:[d(P2,{formData:e,setFormData:t}),d(w2,{formData:e,setFormData:t}),d(T2,{formData:e,setFormData:t}),d(F2,{formData:e,setFormData:t}),d(C2,{formData:e,setFormData:t})]})]})},B2=({})=>$(f2,{children:[d(Tt,{}),d(j2,{}),d(Nt,{})]}),H2=S.div`
  width: 100%;
`,V2=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${c.mobile}) {
    margin-top: 7%;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    margin-top: 6%;
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    margin-top: 5%;
  }

  @media screen and (min-width: ${c.desktop}) and (max-width: ${c.largeDesktop}) {
    margin-top: 2%;
  }
`,J2="/Nanofab-Project/assets/publications2-b4db6c33.svg",G2=S.div`
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    margin-bottom: 2%;
  }
`,W2=S.div`
  /* width: 30%; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 70px; */
`,Q2=S.div`
  height: 10vh;
  padding: 35px;

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    margin-bottom: 5%;
  }
  
  @media screen and (min-width: ${c.desktop}) and (max-width: ${c.largeDesktop}) {
    margin-bottom: 10%;
    padding: 0;
  }

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {    
    padding: 0;
    margin: 0;
  }
`,q2=S.img`
  height: 150px;
  width: 150px;

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {
    height: 180px;
    width: 180px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    height: 250px;
    width: 250px;
  }
`,K2=({url:e})=>d(Q2,{children:d(q2,{src:e})}),Y2=S.div``,X2=S.span`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,Z2=({title:e})=>d(Y2,{children:d(X2,{children:e})}),Ug=({title:e,image:t})=>d(G2,{children:$(W2,{children:[d(K2,{url:t}),d(Z2,{title:e})]})}),eC=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 50px;
`,tC=S.div`
    width: 40%;
    margin-bottom: 10px;

    @media screen and (max-width: ${c.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${c.largeMobile}) {    
        width: 70%;
    }

    @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
        margin-bottom: 20px;
    }
`,nC=S.button`    
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
`,rC=S.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;

    @media screen and (max-width: ${c.mobile}) {   
        justify-content: space-between;
    }
    @media screen and (min-width: ${c.extraLargeDesktop}) {    
        padding: 30px;
    }
`;S.div`
    width: 50%;
    text-align: justify;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`;const iC=S.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${c.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {    
        min-height: 70px;
    }

`;S.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`;const oC=S.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    text-align: left;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #AE0806;

    @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge}px;
    }
    @media screen and (min-width: ${c.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.7}px;
    }
`,aC=S.span`
    text-align: justify;

    @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
    }
    @media screen and (min-width: ${c.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
    }
`,lC=({year:e,descriptions:t})=>{const[n,r]=b.useState(!1);return $(tC,{children:[$(nC,{onClick:()=>r(!n),isVisible:n,children:[d(oC,{children:e}),n?d(Fg,{size:20}):d(zg,{size:20})]}),n?d(rC,{isVisible:n,children:t.map(i=>d(iC,{children:d(aC,{children:i.description})}))}):null]})},sC=({list:e})=>d(eC,{children:e.map(t=>d(lC,{year:t.year,descriptions:t.descriptions},e.indexOf(t)))}),uC=({})=>$(H2,{children:[d(Tt,{}),d(Ug,{title:"Publicações",image:J2}),d(V2,{children:d(sC,{list:[{year:"2022",descriptions:[{description:"SILVA, ADRIEL M.; SOUZA, RODRIGO F.M.; AGUILERA, LETÍCIA S.; de Campos, José B.; BROCCHI, EDUARDO A. Upgrade of titanium content in a vanadiferous titanomagnetite waste: Design of a roast-leach route based on thermodynamics simulations. MINERALS ENGINEERING. , v.179, p.107460 - , 2022."},{description:"LIMA, EDUARDO DE SOUSA; GALL, CAMILA CATALANO; ALVES, MANUEL FELLIPE R.P.; DE CAMPOS, JOSÉ BRANT; CAMPOS, TIAGO MOREIRA BASTOS; SANTOS, CLAUDINEI DOS Development and characterization of alumina-toughened zirconia (ATZ) ceramic composites doped with a beneficiated rare-earth oxide extracted from natural ore. Journal of Materials Research and Technology-JMR&T. , v.16, p.451 - 460, 2022."}]},{year:"2021",descriptions:[{description:"MARÍN CASTAÑO, ELIANA PAOLA; CAMPOS, JOSÉ BRANT DE; SOLÓRZANO-NARANJO, IVAN GUILLERMO; BROCCHI, EDUARDO DE ALBUQUERQUE Characterization of Ternary CuNiCo Metallic Nanoparticles Produced by Hydrogen Reduction.Materials. , v.14, p.6006 - , 2021."},{description:"SAMPAIO, M.F.; MARINHO, P.R.B.; CABRUJA, E.; LOZANO, M.; LIMA JÚNIOR, H.P.; de Campos, J.B. SU- 8 processing improvement and simulating studies for a Micromegas detector fabrication.Journal of Instrumentation. , v.16, p.P08022 - P02038, 2021."},{description:"HORTA, MARLA KAROLYNE DOS SANTOS; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; WESTIN, CECÍLIA BUZATTO; NAVARRO DA ROCHA, DANIEL; CAMPOS, JOSÉ BRANT < i > In vitro</> evaluation of natural hydroxyapatite from Osteoglossum bicirrhosum fish scales for biomedical application.International Journal of Applied Ceramic Technology. , v.18, p.1930 - 1937, 2021."},{description:"MOTA, RAFAEL OLIVEIRA DA; DÓREA, MÁRCIA DE MELO; AGUILERA, LETÍCIA DOS SANTOS; ROMANI, ERIC CARDONA; COSTA, HECTOR REYNALDO MENESES; CAMPOS, JOSÉ BRANT DE AVANÇOS RECENTES NA UTILIZAÇÃO DO GRAFENO COMO ADITIVO EM POLÍMEROS / RECENT ADVANCES IN THE USE OF GRAPHENE AS AN ADDITIVE IN POLYMERS. Brazilian Journal of Development. , v.7, p.32743 - 32752, 2021."},{description:"RIBEIRO, SUZANA BARRETO NORONHA; DA VEIGA JUNIOR, VALDIR FLORÊNCIO; DE CAMPOS, JOSÉ BRANT; DOS SANTOS, JHEISON LOPES; LOPES, IAGO JOSÉ VITRAL REZENDE; DA ROCHA, DANIEL NAVARRO; DA SILVA, MARCELO HENRIQUE PRADO Influences of biosilica content from Amazonian freshwater sponge on calcium phosphates.Journal of the Australian Ceramic Society. , v.57, p.55 - 65, 2021"},{description:"Machado, Marcelo Vitor Ferreira; DE CAMPOS, JOSÉ BRANT; AGUILAR, MARILZA SAMPAIO; Ramos, Vitor Santos Mechanical and Microstructural Characterizations on Commercial and Synthesized by the Sol- Gel Method Using Chicken Egg Shells as Precursor Hydroxyapatite.South Florida Journal of Development. , v.2, p.1365 - 1374, 2021."}]},{year:"2020",descriptions:[{description:"BARROS, S. D.; DUARTE, J. P. P.; ROCHA, L. D. S.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S.; MEDEIOS, M. E.; de Campos, José B.; COSTA, M. E. H. M.; LACHTER, E. R.; SENRA, J. D.; MALTA, L. F. B. Cyclodextrin-Stabilized Palladium Nanoparticles on Ceria: Invertigation of Support Interactions and Pivotal Promotion in the Suzuki-Miyaura Reaction. ChemistrySelect. , v.5, p.7227 - 7235, 2020."},{description:"MELLO, NATHALLI M.; REGO, ARTUR S. C.; BROCCHI, EDUARDO A.; CAMPOS, JOSÉ B. DE; MOURA, FRANCISCO J.; SOUZA, RODRIGO F. M. Effect of an Alumina Supported Palladium Catalyst on the Magnesium Sulfate Decomposition Kinetics. MATERIALS RESEARCH. , v.23, p.1 - 9, 2020."},{description:"CARNEIRO, MATEUS R. D.; FREITAS, BRUNO C.; DE BARROS, IURI B.; de Campos, José B.; BASTOS, IVAN N.; COSTA, HECTOR R. M. Evaluation of adhesion of epoxy resin sealant to improve the corrosion resistance of thermal sprayed coatings. APPLIED ADHESION SCIENCE. , v.8, p.7 - 21, 2020."},{description:"HORTA, M. K. S.; Moura F.J.; AGUILAR, M. S.; WESTIN, C. B.; de Campos, J.B.; PERIPOLLI, S. B.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S. Nanostructured Hydroxyapatite from Hen's Eggshells Using Sucrose as a Template. Materials Research-Ibero-american Journal of Materials. , v.23, p.1 - 9, 2020."}]},{year:"2019",descriptions:[{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; SANTOS, JHEISON LOPES DOS; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; BARBOSA, RAFAEL MAZA; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Bioactivity of strontium-monetite coatings for biomedical applications. CERAMICS INTERNATIONAL. , v.45, p.7568 - 7579, 2019."},{description:"SILVA, LORENNA; NEVES, VINÍCIUS; RAMOS, VITOR; SILVA, RAPHAEL; CAMPOS, JOSÉ; SILVA, ALEXSANDRO; MALTA, LUIZ; SENRA, JAQUELINE Layered Double Hydroxides as Bifunctional Catalysts for the Aryl Borylation under Ligand-Free Conditions. Catalysts. , v.9, p.302 - 314, 2019."},{description:"GALVÃO, RHAUANE ALMEIDA; SANTA-CRUZ, LARISSA AGOSTINHO DE; BARRETO, PALOMA BANTIM; HORTA, MARLA KAROLYNE DOS SANTOS; ANDRADE, ANTONIO MARCOS HELGUEIRA DE; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; PERIPOLLI, SUZANA BOTTEGA; CAMPOS, JOSÉ BRANT DE; ARRUDA, ISABEL RENATA DE SOUZA; MACHADO, GIOVANNA Electrochemical single-step obtention and characterization of a biomimetic TiO <sub>2</sub> -HA NTs covered by chitosan. JOURNAL OF MATERIALS RESEARCH. , v.34, p.1 - 11, 2019."},{description:"SOUZA, RODRIGO; QUEIROZ, CARLOS; BRANT, JOSÉ; BROCCHI, EDUARDO Pyrometallurgical processing of a low copper content concentrate based on a thermodynamic assessment. MINERALS ENGINEERING. , v.130, p.156 - 164, 2019."},{description:"HORTA, MARLA; AGUILAR, MARILZA; MOURA, FRANCISCO; CAMPOS, JOSÉ; RAMOS, VITOR; QUIZUNDA, ADILSON Synthesis and characterization of green nanohydroxyapatite from hen eggshell by precipitation method. MATERIALS TODAY: PROCEEDINGS. , v.14, p.716 - 721, 2019"}]},{year:"2018",descriptions:[{description:"FERREIRA, J. R. M.; Louro, Luis Henrique Leme; COSTA, A. M.; MARCAL, R. L. S. B.; ROCHA, D. N.; BARBOSA, R. M.; de Campos, José B.; PRADO, M. H. Zinc-doped Calcium Phosphate Coating on Titanium Surface Using Ostrich Eggshell as a Ca2+ Ions Source. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."},{description:"AGUILERA, L. S.; de Campos, J.B.; de Biasi, R.S.; Figueiredo, A.B.H.S. Use of the Drag Method to Study the Magnetic Behavior of Mn-Zn Ferrite Nanoparticles. The International Journal of Engineering and Science. , v.7, p.57 - 61, 2018."},{description:"BIASI, RONALDO SERGIO DE; MELO, GABRIEL BURLANDY MOTA DE; FIGUEIREDO, ANDRÉ BEN-HUR DA SILVA; CAMARENA, MARIELLA ALZAMORA; CAMPOS, JOSÉ BRANT DE Properties of manganese ferrite-paraffin composites. Journal of Materials Research and Technology-JMR&T. , v.8, p.309 - 313, 2018."},{description:"AGUILERA, L. S.; MARCAL, R. L. S. B.; de Campos, J.B.; PRADO, M. H.; Figueiredo, A.B.H.S.MAGNETIC FILTER PRODUCED BY ZnFe2O4 NANOPARTICLES USING FREEZE CASTING. Journal of Materials Research and Technology-JMR&T. , v.7, p.350 - 355, 2018. "},{description:"ROCHA, DANIEL NAVARRO DA; SILVA, MARCELO H. PRADO DA; CAMPOS, JOSÉ BRANT DE; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; CRUZ, LEILA ROSA Kinetics of conversion of brushite coatings to hydroxyapatite in alkaline solution. Journal of Materials Research and Technology-JMR&T. , v.7, p.479 - 486, 2018."},{description:"Cabral, R.F.; de Campos, J.B.; SILVA, C. E. V.; FONSECA, G. M.; LIMA, W. N.; LIMA, E. Formação da fase YNbO4 na sinterização do compósito Alumina-YAG com Nb2O5. CADERNOS UNIFOA (IMPRESSO). , v.36, p.29 - 35, 2018."},{description:"Cabral, R.F.; PRADO DA SILVA, M.H.; Lima, E.S.; de Campos, J.B.; MAGNAGO, ROBERTO DE OLIVEIRA Evaluation of Hardness and the Fracture Toughness of Composite Biphasic Alumina-YAG. MATERIALS SCIENCE FORUM (ONLINE). , v.912, p.82 - 86, 2018."},{description:"SALEIRO, GISELE TEIXEIRA; GONÇALVES, DANILO CORREA; COSTA, CÉLIO ALBANO DA; CAMPOS, JOSÉ BRANT DE; LIMA, EDUARDO DE SOUSA COMPORTAMENTO MECÂNICO DO SIC ADITIVADO COM Al2O3 E Y2O3 PRODUZIDOS PELA SÍNTESE POR COMBUSTÃO AUTOSSUSTENTÁVEL À ALTA TEMPERATURA. TECNOLOGIA EM METALURGIA, MATERIAIS E MINERAÇÃO. , v.15, p.96 - 102, 2018."},{description:"MENDONCA, F.; COSTA, A. M.; de Campos, J.B.; MARCAL, R. L. S. B.; ROCHA, D. N.; PRADO, M. H. Bioactivity Assessment of Ag-HA. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."}]},{year:"2017",descriptions:[{description:"GONÇALVES, DANILO CORRÊA; SALEIRO, GISELE TEIXEIRA; MATIAS, PHILIPE CARDOSO; GOMES, ALAELSON VIEIRA; RAMOS, VITOR; CAMPOS, JOSÉ BRANT BRANT DE; MELO, FRANCISCO CRISTOVÃO LOURENÇO DE; LIMA, EDUARDO SOUSA Microstructural Characterization and Influence of Ceramography Method on the Microhardness of Sintering Agents Added Silicon Carbide. Materials Research-Ibero-american Journal of Materials"},{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Mg substituted apatite coating from alkali conversion of acidic calcium phosphate. Materials Science & Engineering C-Materials for Biological Applications. , v.70, p.408 - 417, 2017."},{description:"ROMANI, E. C.; LARRUDE, D. G.; NACHEZ, L.; VILANI, C.; de CAMPOS, J. B.; PERIPOLLI, S. B.; FREIRE, F. L.Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS. , v.65, p.1 - 9, 2017."},{description:"SANTOS, J. L.; MARÇAL, R. L. S. B.; JESUS, P. R. R.; GOMES, A. V.; LIMA, E. P.; MONTEIRO, S. N.; de CAMPOS, J. B.; LOURO, L. H. L.Effect of LiF as Sintering Agent on the Densification and Phase Formation in Al2O3-4 Wt Pct Nb2O5 Ceramic Compound. METALLURGICAL AND MATERIALS TRANSACTIONS A-PHYSICAL METALLURGY AND MATERIALS SCIENCE. , v.48, p.4432 - 4440, 2017."}]}]})}),d(Nt,{})]}),cC=S.div`
  width: 100%;

`,dC=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: ${c.mobile}) {    
    margin-top: 10%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    margin-top: 8%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {    
    margin-top: 7%;   
  }


  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
    margin-top: 7%;
    margin-bottom: 5%;
  }

  @media screen and (min-width: ${c.largeNotebook}) and (max-width: ${c.desktop}) {    
    margin-top: 4%;
    margin-bottom: 5%;
  }
`,fC=S.div`
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
    @media screen and (max-width: ${c.largeDesktop}){
        height: 16%;
    }
    @media screen and (max-width: ${c.tablet}){
        height: 17%;
    }
    @media screen and (min-width: ${c.extraLargeDesktop}) {
	    height: 17%;
    }

    @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${c.largeNotebook}) and (max-width: ${c.desktop}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
        margin-top: 5%; 
    }



`,pC=S.span`
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.content};
  text-align: center;
  margin: 10px;

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,hC=S.div`
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
`,mC=S.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,gC=S.img`
  width: 120px;
  /* height: 150px; */
  margin: 0 40px;
  transition: 0.5s;
  overflow: hidden;
  aspect-ratio: 1;
  object-fit: contain;
  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }

  @media screen and (max-width: ${c.largeMobile}) {
    width: 150px;
    /* height: 120px; */
  }
  @media screen and (max-width: ${c.mobile}) {
    width: 120px;
    /* height: 120px; */
  }
  @media screen and (min-width: ${c.desktop}) {
    width: 180px;
  }
  @media screen and (min-width: ${c.largeDesktop}) {
    width: 240px;
    /* height: 210px; */
  }
  @media screen and (min-width: ${c.extraLargeDesktop}) {
    width: 300px;
    /* height: 300px; */
  }
  @media screen and (max-width: ${c.notebook}) {
    width: 120px;
  }
`,yC=({image:e,altText:t})=>d(mC,{children:d(gC,{src:e,alt:t})}),Mu="/Nanofab-Project/assets/cbpf-812298b6.jpg",_u="/Nanofab-Project/assets/faperj-aefe040c.svg",zu="/Nanofab-Project/assets/finep-072bfec0.svg",cp="/Nanofab-Project/assets/logoUFF-bce55271.png",dp="/Nanofab-Project/assets/ime-85233a07.jpg",fp="/Nanofab-Project/assets/pucrj-1b28efc4.png",pp="/Nanofab-Project/assets/UFRJ-ae0dd01b.jpg",hp="/Nanofab-Project/assets/cefet-fb822b95.png",mp="/Nanofab-Project/assets/cnpq-866ab360.png",gp="/Nanofab-Project/assets/capes-eb011932.png",yp="/Nanofab-Project/assets/SerraJr-fd37bf50.svg",vp="/Nanofab-Project/assets/senai-dbac4d57.png",vC=({})=>{const e=[{image:gp,altText:"CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior"},{image:Mu,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:vp,altText:"SENAI - Serviço Nacional de Aprendizagem Industrial"},{image:_u,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:zu,altText:"FINEP - Agência Brasileira de Inovação"},{image:cp,altText:"UFF - Universidade Federal Fluminense"},{image:dp,altText:"IME - Instituto Militar de Engenharia"},{image:pp,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:fp,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:hp,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:yp,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:mp,altText:"CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico"},{image:gp,altText:"CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior"},{image:Mu,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:vp,altText:"SENAI - Serviço Nacional de Aprendizagem Industrial"},{image:_u,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:zu,altText:"FINEP - Agência Brasileira de Inovação"},{image:cp,altText:"UFF - Universidade Federal Fluminense"},{image:dp,altText:"IME - Instituto Militar de Engenharia"},{image:pp,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:fp,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:hp,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:yp,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:mp,altText:"CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico"}];return $(fC,{children:[d(pC,{children:"Parceiros"}),d(hC,{children:e.map(t=>d(yC,{image:t.image,altText:t.altText},e.indexOf(t)))})]})},xC=S.div`
  width: 100%;
  /*height: 300px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  margin-top: 5%;
  margin-bottom: 5%;
  align-self: center;

  /* @media screen and (max-width: ${c.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%; */
  @media screen and (max-width: ${c.mobile}) {
    margin-top: 10%;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media screen and (min-width: 720px) and (max-width: 770px) {
  }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${c.largeNotebook}) and (max-width: ${c.desktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${c.desktop}) and (max-width: ${c.largeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    max-width: 2500px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    max-width: 3000px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`,wC=S.div`
  width: 70%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(217, 217, 217, 0.9);
  border-radius: 150px;
  justify-content: space-around;

  @media screen and (max-width: ${c.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 20%; */
    padding-top: 5%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4%;
    padding-bottom: 15%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    border-radius: 60px;
    padding: 5%;
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    border-radius: 70px;
  }

  @media screen and (min-width: ${c.largeNotebook}) and (max-width: ${c.desktop}) {
  }

  @media screen and (min-width: ${c.desktop}) and (max-width: ${c.largeDesktop}) {
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    border-radius: 100px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {
    border-radius: 200px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    border-radius: 300px;
    width: 80%;
  }
`,SC=S.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${c.mobile}) {
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    margin-bottom: 5%;
  }
`,EC=S.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${c.mobile}) {
    width: 95%;
    padding-bottom: 20%;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    width: 95%;
  }

  @media screen and (min-width: ${c.tablet}) and (max-width: ${c.notebook}) {
    width: 100%;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    width: 80%;
  }
`,CC=S.span`
  font-weight: bold;
  color: #ae0806;
  text-align: center;
  font-size: 30px;
  margin-bottom: 3%;

  @media screen and (max-width: ${c.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    font-size: 23px;
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${c.notebook}) and (max-width: ${c.largeNotebook}) {
    font-size: 23px;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    font-size: 40px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
`,kC=S.span`
  color: black;
  text-align: center;
  font-size: 18px;
  width: 80%;

  @media screen and (max-width: ${c.mobile}) {
    font-size: 16px;
    width: 100%;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {
    width: 100%;
    font-size: 20px;
  }

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    font-size: 24px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,AC=S.img`
  width: 150px;
  height: 150px;
  border: 1px solid #ae0806;
  border-radius: 150px;
  padding: 20%;
  object-fit: scale-down;
  overflow: visible;
  background-color: white;

  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  @media screen and (min-width: ${c.extraLargeDesktop}) {
    width: 250px;
    height: 250px;
    border-radius: 200px;
  }
`;S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px;
    width: 200px; */
`;const bC=({image:e,title:t,paragraph:n})=>d(xC,{children:$(wC,{children:[d(SC,{children:d(AC,{src:e,alt:t})}),$(EC,{children:[d(CC,{children:t}),d(kC,{children:n})]})]})}),RC="/Nanofab-Project/assets/handshake-903e6074.png",$C=({})=>{const e=[{image:Mu,title:"Centro Brasileiro de Pesquisas Físicas - CBPF",paragraph:"O NANOFAB desenvolve parceria científica e tecnológica com o CBPF na área de Instrumentação Científica, com o desenvolvimento de dispositivos multiplicadores e elétrons (GEM-Gas Electron Multiplier) e detectores bidimensionais de raios-x a gás."},{image:_u,title:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro",paragraph:"O NANOFAB recebe apoio da FAPERJ em projetos de infraestrutura e pesquisa como o PENSA-RIO e através de projetos em colaboração com os pesquisadores"},{image:zu,title:"FINEP - Agência Brasileira de Inovação",paragraph:"O NANOFAB participa de editais da FINEP em projetos estruturantes como o Grande Laboratórios Multiusuários e Ações Transversais."}];return $(cC,{children:[d(Tt,{}),d(Ug,{title:"Parcerias",image:RC}),d(dC,{children:e.map(t=>d(bC,{image:t.image,title:t.title,paragraph:t.paragraph},e.indexOf(t)))}),d(vC,{}),d(Nt,{})]})},PC=S.div`
  width: 100%;
`,OC=S.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,TC=S.span`
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.highlight};
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.auxiliary.error.dark};
  border-radius: 20px;
`,NC=({})=>$(PC,{children:[d(Tt,{}),d(OC,{children:d(TC,{children:"Aconteceu um problema, tente novamente mais tarde"})}),d(Nt,{})]}),LC=S.div`
`,DC=S.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;S.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const IC=S.div`
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

  @media screen and (max-width: ${c.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {    
    width: 100%;
  }
`,MC=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,_C=S.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,xp=S.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,wp=S.input`
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
`,Sp=S.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,zC=S.button`
  background-color: #5086b6;
  border: 0px;
  padding: 2%;
  padding-left: 10%;
  padding-right: 10%;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #5086b6;

  :hover {
    color: #5086b6;
    background-color: #fff;
    border: 1px solid #5086b6;
    transition: 0.5s;
    cursor: pointer;
  }
`,FC=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-beetween;
  margin-bottom: 20px;
  padding-left: 20px;
  width: 60%;
`,Ep=S.a`
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
`,UC=({formLogin:e,setFormLogin:t})=>{const{login:n}=b.useContext(El),r=wo(),i=async()=>{if(e.email,e.senha)try{await n(e.email,e.senha),r("/")}catch{ke.error("Erro, tente novamente.")}else ke.error("Preencha todos os campos de texto!")};return $(IC,{children:[d(_C,{children:"Entrar"}),$(MC,{children:[$(Sp,{children:[d(xp,{children:"Email ou Nome de Usuário:"}),d(wp,{placeholder:"Digite seu Email",onChange:o=>t({...e,email:o.target.value})})]}),$(Sp,{children:[d(xp,{children:"Senha:"}),d(wp,{type:"password",placeholder:"Digite sua senha",onChange:o=>t({...e,senha:o.target.value})})]}),$(FC,{children:[d(Ep,{href:"/Nanofab-Project/login/create_Account",children:"Não tem conta? Crie uma!"}),d(Ep,{href:"/Nanofab-Project/login/Redefine_Password",children:"Esqueci minha senha"})]})]}),d(zC,{onClick:()=>i(),children:"Entrar"})]})},jC=({})=>{const[e,t]=b.useState({email:"",senha:""});return $(LC,{children:[d(Tt,{}),d(DC,{children:d(UC,{formLogin:e,setFormLogin:t})}),d(Nt,{})]})},BC=S.div`
`,HC=S.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;S.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const VC=S.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 50%;
    background-color: #D9D9D9aa;
    border-radius: 30px;
    margin: 3%;
    margin-top: 5%;
    padding: 2%;

    background: rgba(217, 217, 217, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 35px;
`,JC=S.h1`
color: ${({theme:e})=>e.colors.text.title};
`,_t=S.span`
    text-align: left;
    width: 50%;
    margin-bottom: 1%;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};
    font-weight: bolder;
`,Pn=S.input`
    
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
    
`,Er=S.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,Cp=S.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Cr=S.div`
  width: 45%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,As=S.div`
  width: 30%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,GC=S.button`
    background-color: #5086B6;
    border: 0px;
    padding: 2%;
    padding-left: 10%;
    padding-right: 10%;
    color: white;
    border-radius: 10px;
    margin-bottom: 10px;
    border: 1px solid #5086B6;

    :hover{
            color: #5086B6; 
            background-color: #fff;
            border: 1px solid #5086B6;
            transition: 0.5s;
            cursor: pointer;
            /* transform: scale(1.05); */
        }
`,kp=S.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
`,Ap=S.select`
  width: 100%;
  height: 50px;
  background-color: #e8e8e8;
  border-radius: 10px;
  border: 0px;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fonts.small}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  //
  // padding: 10px;
  // margin-bottom: 10px;
`,bp=S.div`
  width: 100%;
`,Rp=S.div`
  display: flex;
  justify-content: start;
  align-items: center;
`,$p=S.input`
  border: 1px solid #e8e8e8;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`,Pp=S.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,WC=({})=>{const[e,t]=b.useState("");b.useState("");const[n,r]=b.useState(""),[i,o]=b.useState(""),[a,l]=b.useState(""),[s,u]=b.useState("");b.useState("");const[f,m]=b.useState(""),[v,w]=b.useState(""),[x,E]=b.useState(""),[g,h]=b.useState(""),[p,y]=b.useState(Array),[C,k]=b.useState(!1);b.useEffect(()=>{console.log(p),console.log(C)},[p,C]);const N=()=>{D()},D=()=>v!==x?(alert("Suas senhas são diferentes. Tente novamente."),w(""),E(""),!1):(k(!0),!0);function T(U){(U.target.value===""||U.target.value===""||U.target.value===""||U.target.value===""||U.target.value==="")&&h("")}return $(VC,{children:[d(JC,{children:"Registrar-se"}),$(Er,{children:[$(Cr,{children:[d(_t,{children:"Instituição:"}),d(bp,{children:d(kp,{children:$(Ap,{onChange:U=>T(U),children:[d("option",{value:""}),d("option",{value:""}),d("option",{value:""})]})})})]}),$(Cr,{children:[d(_t,{children:"Tipo:"}),$(Rp,{children:[d($p,{type:"radio",id:"publica",name:"institutionType",value:"Publica"}),d(Pp,{children:"Pública"})]}),$(Rp,{children:[d($p,{type:"radio",id:"privada",name:"institutionType",value:"Privada"}),d(Pp,{children:"Privada"})]})]})]}),$(Er,{children:[$(Cr,{children:[d(_t,{children:"Departamento:"}),d(Pn,{placeholder:"Entre com a departamento",onChange:U=>{r(U.target.value)}})]}),$(Cr,{children:[d(_t,{children:"Outros:"}),d(Pn,{placeholder:"Outros",onChange:U=>{o(U.target.value)}})]})]}),d(Er,{children:$(Cp,{children:[d(_t,{children:"Nome:"}),d(Pn,{placeholder:"Digite seu nome",onChange:U=>{t(U.target.value)}})]})}),$(Er,{children:[$(As,{children:[d(_t,{children:"Telefone:"}),d(Pn,{placeholder:"Digite seu telefone",onChange:U=>{l(U.target.value)}})]}),$(As,{children:[d(_t,{children:"Ramal:"}),d(Pn,{placeholder:"Digite seu ramal",onChange:U=>{u(U.target.value)}})]}),$(As,{children:[d(_t,{children:"Função:"}),d(bp,{children:d(kp,{children:$(Ap,{onChange:U=>T(U),children:[d("option",{value:""}),d("option",{value:""}),d("option",{value:""})]})})})]})]}),d(Er,{children:$(Cp,{children:[d(_t,{children:"Usuário:"}),d(Pn,{placeholder:"Digite seu usuário",onChange:U=>{m(U.target.value)}})]})}),$(Er,{children:[$(Cr,{children:[d(_t,{children:"Senha:"}),d(Pn,{type:"password",placeholder:"Entre com sua senha aqui",onChange:U=>{w(U.target.value)}})]}),$(Cr,{children:[d(_t,{children:"Confirme sua senha:"}),d(Pn,{type:"password",placeholder:"Confirme sua senha aqui",onChange:U=>{E(U.target.value)}})]})]}),d(GC,{onClick:N,children:"Registrar"})]})},QC=({})=>$(BC,{children:[d(Tt,{}),d(HC,{children:d(WC,{})}),d(Nt,{})]}),qC=S.div`
`,KC=S.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;S.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const YC=S.div`
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
`,XC=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,ZC=S.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,Vo=S.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,Jo=S.input`
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
`,Go=S.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,ek=S.button`
  background-color: #5086b6;
  border: 0px;
  padding: 2%;
  padding-left: 10%;
  padding-right: 10%;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #5086b6;

  :hover {
    color: #5086b6;
    background-color: #fff;
    border: 1px solid #5086b6;
    transition: 0.5s;
    cursor: pointer;
  }
`;S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-beetween;
`;S.a`
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
`;const tk=({})=>$(YC,{children:[d(ZC,{children:"Redefinição de Senha"}),$(XC,{children:[$(Go,{children:[d(Vo,{children:"Usuário:"}),d(Jo,{placeholder:"Digite seu usuário"})]}),$(Go,{children:[d(Vo,{children:"Email:"}),d(Jo,{placeholder:"Digite seu email"})]}),$(Go,{children:[d(Vo,{children:"Nova Senha:"}),d(Jo,{type:"password",placeholder:"Digite sua senha"})]}),$(Go,{children:[d(Vo,{children:"Confime a Nova Senha:"}),d(Jo,{type:"password",placeholder:"Digite sua senha"})]})]}),d(ek,{children:"Redefinir"})]}),nk=({})=>$(qC,{children:[d(Tt,{}),d(KC,{children:d(tk,{})}),d(Nt,{})]}),rk=S.div`
  
`,ik=({})=>$(rk,{children:[d(Tt,{}),d(Nt,{})]}),ok=S.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,ak=S.div`
    width: 70%;
    margin-top: 3%;
    border-radius: 70px;
    min-height: 50vh;
    margin-bottom: 3%;

    background-color: rgb(217, 217, 217, 0.9);
`;S.section`
    /* min-height: 50vh; */
    width: 100%;
`;S.img`
    width: 100%;
    border-radius: 70px;
`;const lk=({})=>$(ok,{children:[d(Tt,{}),d(ak,{}),d(Nt,{})]}),sk="/Nanofab-Project/assets/background2-7f5efefe.svg",uk=S.div`
  background-image: url(${sk});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  @media screen and (max-width: ${c.mobile}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${c.largeMobile}) and (max-width: ${c.tablet}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${c.tablet}) and (max-width: 1919px) {    
    background-size: 100% 1800px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${c.largeDesktop}) and (max-width: ${c.extraLargeDesktop}) {    
    background-size: 100% 2800px;
    background-repeat: repeat;
  }
`,ck=_x([{path:"/",element:d($E,{})},{path:"/equipe",element:d(GE,{})},{path:"/andamento",element:d(d2,{})},{path:"/submissao_projetos",element:d(B2,{})},{path:"/publicacoes",element:d(uC,{})},{path:"/parcerias",element:d($C,{})},{path:"/login",element:d(jC,{})},{path:"/login/create_Account",element:d(QC,{})},{path:"/login/Redefine_Password",element:d(nk,{})},{path:"/equipamentos_infraestrutura",element:d(lk,{})},{path:"/programas_especiais",element:d(ik,{})},{path:"*",element:d(NC,{})}],{basename:"/Nanofab-Project"}),dk=({})=>d(uk,{children:d(zS,{children:d($x,{router:ck})})});const fk=mv`
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
`;function pk(){return $(vv,{children:[d(fk,{}),d(Du,{autoClose:2e3}),d(dk,{})]})}Rs.createRoot(document.getElementById("root")).render(d(te.StrictMode,{children:d(pk,{})}));
