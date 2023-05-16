function tw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ov(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ia={},nw={get exports(){return ia},set exports(e){ia=e}},Fl={},E={},rw={get exports(){return E},set exports(e){E=e}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),iw=Symbol.for("react.portal"),ow=Symbol.for("react.fragment"),aw=Symbol.for("react.strict_mode"),sw=Symbol.for("react.profiler"),lw=Symbol.for("react.provider"),uw=Symbol.for("react.context"),cw=Symbol.for("react.forward_ref"),dw=Symbol.for("react.suspense"),fw=Symbol.for("react.memo"),pw=Symbol.for("react.lazy"),ph=Symbol.iterator;function hw(e){return e===null||typeof e!="object"?null:(e=ph&&e[ph]||e["@@iterator"],typeof e=="function"?e:null)}var Tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pv=Object.assign,$v={};function lo(e,t,n){this.props=e,this.context=t,this.refs=$v,this.updater=n||Tv}lo.prototype.isReactComponent={};lo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lv(){}Lv.prototype=lo.prototype;function Uf(e,t,n){this.props=e,this.context=t,this.refs=$v,this.updater=n||Tv}var Bf=Uf.prototype=new Lv;Bf.constructor=Uf;Pv(Bf,lo.prototype);Bf.isPureReactComponent=!0;var hh=Array.isArray,Mv=Object.prototype.hasOwnProperty,Hf={current:null},Nv={key:!0,ref:!0,__self:!0,__source:!0};function Fv(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Mv.call(t,r)&&!Nv.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Pa,type:e,key:o,ref:a,props:i,_owner:Hf.current}}function mw(e,t){return{$$typeof:Pa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pa}function gw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mh=/\/+/g;function Lu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gw(""+e.key):t.toString(36)}function Rs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Pa:case iw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Lu(a,0):r,hh(i)?(n="",e!=null&&(n=e.replace(mh,"$&/")+"/"),Rs(i,t,n,"",function(u){return u})):i!=null&&(Vf(i)&&(i=mw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(mh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",hh(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Lu(o,s);a+=Rs(o,t,n,l,i)}else if(l=hw(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Lu(o,s++),a+=Rs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Va(e,t,n){if(e==null)return e;var r=[],i=0;return Rs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function vw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ct={current:null},Os={transition:null},yw={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:Os,ReactCurrentOwner:Hf};Se.Children={map:Va,forEach:function(e,t,n){Va(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Va(e,function(){t++}),t},toArray:function(e){return Va(e,function(t){return t})||[]},only:function(e){if(!Vf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Se.Component=lo;Se.Fragment=ow;Se.Profiler=sw;Se.PureComponent=Uf;Se.StrictMode=aw;Se.Suspense=dw;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yw;Se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pv({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Hf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Mv.call(t,l)&&!Nv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Pa,type:e.type,key:i,ref:o,props:r,_owner:a}};Se.createContext=function(e){return e={$$typeof:uw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lw,_context:e},e.Consumer=e};Se.createElement=Fv;Se.createFactory=function(e){var t=Fv.bind(null,e);return t.type=e,t};Se.createRef=function(){return{current:null}};Se.forwardRef=function(e){return{$$typeof:cw,render:e}};Se.isValidElement=Vf;Se.lazy=function(e){return{$$typeof:pw,_payload:{_status:-1,_result:e},_init:vw}};Se.memo=function(e,t){return{$$typeof:fw,type:e,compare:t===void 0?null:t}};Se.startTransition=function(e){var t=Os.transition;Os.transition={};try{e()}finally{Os.transition=t}};Se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Se.useCallback=function(e,t){return Ct.current.useCallback(e,t)};Se.useContext=function(e){return Ct.current.useContext(e)};Se.useDebugValue=function(){};Se.useDeferredValue=function(e){return Ct.current.useDeferredValue(e)};Se.useEffect=function(e,t){return Ct.current.useEffect(e,t)};Se.useId=function(){return Ct.current.useId()};Se.useImperativeHandle=function(e,t,n){return Ct.current.useImperativeHandle(e,t,n)};Se.useInsertionEffect=function(e,t){return Ct.current.useInsertionEffect(e,t)};Se.useLayoutEffect=function(e,t){return Ct.current.useLayoutEffect(e,t)};Se.useMemo=function(e,t){return Ct.current.useMemo(e,t)};Se.useReducer=function(e,t,n){return Ct.current.useReducer(e,t,n)};Se.useRef=function(e){return Ct.current.useRef(e)};Se.useState=function(e){return Ct.current.useState(e)};Se.useSyncExternalStore=function(e,t,n){return Ct.current.useSyncExternalStore(e,t,n)};Se.useTransition=function(){return Ct.current.useTransition()};Se.version="18.2.0";(function(e){e.exports=Se})(rw);const X=Ov(E),Gc=tw({__proto__:null,default:X},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xw=E,ww=Symbol.for("react.element"),Sw=Symbol.for("react.fragment"),bw=Object.prototype.hasOwnProperty,Ew=xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cw={key:!0,ref:!0,__self:!0,__source:!0};function Iv(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)bw.call(t,r)&&!Cw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ww,type:e,key:o,ref:a,props:i,_owner:Ew.current}}Fl.Fragment=Sw;Fl.jsx=Iv;Fl.jsxs=Iv;(function(e){e.exports=Fl})(nw);const gh=ia.Fragment,S=ia.jsx,z=ia.jsxs;var qc={},Ks={},kw={get exports(){return Ks},set exports(e){Ks=e}},Ht={},Jc={},Aw={get exports(){return Jc},set exports(e){Jc=e}},Dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,K){var G=I.length;I.push(K);e:for(;0<G;){var oe=G-1>>>1,B=I[oe];if(0<i(B,K))I[oe]=K,I[G]=B,G=oe;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var K=I[0],G=I.pop();if(G!==K){I[0]=G;e:for(var oe=0,B=I.length,q=B>>>1;oe<q;){var Y=2*(oe+1)-1,ie=I[Y],M=Y+1,me=I[M];if(0>i(ie,G))M<B&&0>i(me,ie)?(I[oe]=me,I[M]=G,oe=M):(I[oe]=ie,I[Y]=G,oe=Y);else if(M<B&&0>i(me,G))I[oe]=me,I[M]=G,oe=M;else break e}}return K}function i(I,K){var G=I.sortIndex-K.sortIndex;return G!==0?G:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,f=3,w=!1,v=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=I)r(u),K.sortIndex=K.expirationTime,t(l,K);else break;K=n(u)}}function b(I){if(g=!1,x(I),!v)if(n(l)!==null)v=!0,F(C);else{var K=n(u);K!==null&&V(b,K.startTime-I)}}function C(I,K){v=!1,g&&(g=!1,p(P),P=-1),w=!0;var G=f;try{for(x(K),d=n(l);d!==null&&(!(d.expirationTime>K)||I&&!Q());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,f=d.priorityLevel;var B=oe(d.expirationTime<=K);K=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(l)&&r(l),x(K)}else r(l);d=n(l)}if(d!==null)var q=!0;else{var Y=n(u);Y!==null&&V(b,Y.startTime-K),q=!1}return q}finally{d=null,f=G,w=!1}}var k=!1,R=null,P=-1,H=5,D=-1;function Q(){return!(e.unstable_now()-D<H)}function O(){if(R!==null){var I=e.unstable_now();D=I;var K=!0;try{K=R(!0,I)}finally{K?T():(k=!1,R=null)}}else k=!1}var T;if(typeof h=="function")T=function(){h(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,N=L.port2;L.port1.onmessage=O,T=function(){N.postMessage(null)}}else T=function(){m(O,0)};function F(I){R=I,k||(k=!0,T())}function V(I,K){P=m(function(){I(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,F(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var G=f;f=K;try{return I()}finally{f=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=f;f=I;try{return K()}finally{f=G}},e.unstable_scheduleCallback=function(I,K,G){var oe=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?oe+G:oe):G=oe,I){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=G+B,I={id:c++,callback:K,priorityLevel:I,startTime:G,expirationTime:B,sortIndex:-1},G>oe?(I.sortIndex=G,t(u,I),n(l)===null&&I===n(u)&&(g?(p(P),P=-1):g=!0,V(b,G-oe))):(I.sortIndex=B,t(l,I),v||w||(v=!0,F(C))),I},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(I){var K=f;return function(){var G=f;f=K;try{return I.apply(this,arguments)}finally{f=G}}}})(Dv);(function(e){e.exports=Dv})(Aw);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=E,Bt=Jc;function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zv=new Set,oa={};function ui(e,t){qi(e,t),qi(e+"Capture",t)}function qi(e,t){for(oa[e]=t,e=0;e<t.length;e++)zv.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,Rw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vh={},yh={};function Ow(e){return Qc.call(yh,e)?!0:Qc.call(vh,e)?!1:Rw.test(e)?yh[e]=!0:(vh[e]=!0,!1)}function Tw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pw(e,t,n,r){if(t===null||typeof t>"u"||Tw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function kt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){gt[e]=new kt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];gt[t]=new kt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){gt[e]=new kt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){gt[e]=new kt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){gt[e]=new kt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){gt[e]=new kt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){gt[e]=new kt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){gt[e]=new kt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){gt[e]=new kt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function Gf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wf,Gf);gt[t]=new kt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wf,Gf);gt[t]=new kt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wf,Gf);gt[t]=new kt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){gt[e]=new kt(e,1,!1,e.toLowerCase(),null,!1,!1)});gt.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){gt[e]=new kt(e,1,!1,e.toLowerCase(),null,!0,!0)});function qf(e,t,n,r){var i=gt.hasOwnProperty(t)?gt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pw(t,n,i,r)&&(n=null),r||i===null?Ow(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),Jf=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Kc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),Xf=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),xh=Symbol.iterator;function So(e){return e===null||typeof e!="object"?null:(e=xh&&e[xh]||e["@@iterator"],typeof e=="function"?e:null)}var qe=Object.assign,Mu;function No(e){if(Mu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mu=t&&t[1]||""}return`
`+Mu+e}var Nu=!1;function Fu(e,t){if(!e||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?No(e):""}function $w(e){switch(e.tag){case 5:return No(e.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return e=Fu(e.type,!1),e;case 11:return e=Fu(e.type.render,!1),e;case 1:return e=Fu(e.type,!0),e;default:return""}}function Zc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Si:return"Fragment";case wi:return"Portal";case Xc:return"Profiler";case Jf:return"StrictMode";case Kc:return"Suspense";case Yc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uv:return(e.displayName||"Context")+".Consumer";case jv:return(e._context.displayName||"Context")+".Provider";case Qf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xf:return t=e.displayName||null,t!==null?t:Zc(e.type)||"Memo";case dr:t=e._payload,e=e._init;try{return Zc(e(t))}catch{}}return null}function Lw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zc(t);case 8:return t===Jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mw(e){var t=Hv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ga(e){e._valueTracker||(e._valueTracker=Mw(e))}function Vv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ed(e,t){var n=t.checked;return qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wv(e,t){t=t.checked,t!=null&&qf(e,"checked",t,!1)}function td(e,t){Wv(e,t);var n=Pr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nd(e,t.type,n):t.hasOwnProperty("defaultValue")&&nd(e,t.type,Pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nd(e,t,n){(t!=="number"||Ys(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fo=Array.isArray;function _i(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(J(91));return qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(J(92));if(Fo(n)){if(1<n.length)throw Error(J(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pr(n)}}function Gv(e,t){var n=Pr(t.value),r=Pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Eh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qa,Jv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function aa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nw=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(e){Nw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jo[t]=jo[e]})});function Qv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jo.hasOwnProperty(e)&&jo[e]?(""+t).trim():t+"px"}function Xv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fw=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(e,t){if(t){if(Fw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(J(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(J(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(J(61))}if(t.style!=null&&typeof t.style!="object")throw Error(J(62))}}function ad(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=null;function Kf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ld=null,zi=null,ji=null;function Ch(e){if(e=Ma(e)){if(typeof ld!="function")throw Error(J(280));var t=e.stateNode;t&&(t=jl(t),ld(e.stateNode,e.type,t))}}function Kv(e){zi?ji?ji.push(e):ji=[e]:zi=e}function Yv(){if(zi){var e=zi,t=ji;if(ji=zi=null,Ch(e),t)for(e=0;e<t.length;e++)Ch(t[e])}}function Zv(e,t){return e(t)}function e0(){}var Iu=!1;function t0(e,t,n){if(Iu)return e(t,n);Iu=!0;try{return Zv(e,t,n)}finally{Iu=!1,(zi!==null||ji!==null)&&(e0(),Yv())}}function sa(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var ud=!1;if(Vn)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){ud=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{ud=!1}function Iw(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Uo=!1,Zs=null,el=!1,cd=null,Dw={onError:function(e){Uo=!0,Zs=e}};function _w(e,t,n,r,i,o,a,s,l){Uo=!1,Zs=null,Iw.apply(Dw,arguments)}function zw(e,t,n,r,i,o,a,s,l){if(_w.apply(this,arguments),Uo){if(Uo){var u=Zs;Uo=!1,Zs=null}else throw Error(J(198));el||(el=!0,cd=u)}}function ci(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function n0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kh(e){if(ci(e)!==e)throw Error(J(188))}function jw(e){var t=e.alternate;if(!t){if(t=ci(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return kh(i),e;if(o===r)return kh(i),t;o=o.sibling}throw Error(J(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(J(189))}}if(n.alternate!==r)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function r0(e){return e=jw(e),e!==null?i0(e):null}function i0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=i0(e);if(t!==null)return t;e=e.sibling}return null}var o0=Bt.unstable_scheduleCallback,Ah=Bt.unstable_cancelCallback,Uw=Bt.unstable_shouldYield,Bw=Bt.unstable_requestPaint,Ke=Bt.unstable_now,Hw=Bt.unstable_getCurrentPriorityLevel,Yf=Bt.unstable_ImmediatePriority,a0=Bt.unstable_UserBlockingPriority,tl=Bt.unstable_NormalPriority,Vw=Bt.unstable_LowPriority,s0=Bt.unstable_IdlePriority,Il=null,On=null;function Ww(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Il,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Jw,Gw=Math.log,qw=Math.LN2;function Jw(e){return e>>>=0,e===0?32:31-(Gw(e)/qw|0)|0}var Ja=64,Qa=4194304;function Io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Io(s):(o&=a,o!==0&&(r=Io(o)))}else a=n&~i,a!==0?r=Io(a):o!==0&&(r=Io(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yn(t),i=1<<n,r|=e[n],t&=~i;return r}function Qw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-yn(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Qw(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function dd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function l0(){var e=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),e}function Du(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $a(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yn(t),e[t]=n}function Kw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Oe=0;function u0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var c0,ep,d0,f0,p0,fd=!1,Xa=[],wr=null,Sr=null,br=null,la=new Map,ua=new Map,hr=[],Yw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rh(e,t){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":la.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(t.pointerId)}}function Eo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ma(t),t!==null&&ep(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zw(e,t,n,r,i){switch(t){case"focusin":return wr=Eo(wr,e,t,n,r,i),!0;case"dragenter":return Sr=Eo(Sr,e,t,n,r,i),!0;case"mouseover":return br=Eo(br,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return la.set(o,Eo(la.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ua.set(o,Eo(ua.get(o)||null,e,t,n,r,i)),!0}return!1}function h0(e){var t=Hr(e.target);if(t!==null){var n=ci(t);if(n!==null){if(t=n.tag,t===13){if(t=n0(n),t!==null){e.blockedOn=t,p0(e.priority,function(){d0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sd=r,n.target.dispatchEvent(r),sd=null}else return t=Ma(n),t!==null&&ep(t),e.blockedOn=n,!1;t.shift()}return!0}function Oh(e,t,n){Ts(e)&&n.delete(t)}function eS(){fd=!1,wr!==null&&Ts(wr)&&(wr=null),Sr!==null&&Ts(Sr)&&(Sr=null),br!==null&&Ts(br)&&(br=null),la.forEach(Oh),ua.forEach(Oh)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,fd||(fd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,eS)))}function ca(e){function t(i){return Co(i,e)}if(0<Xa.length){Co(Xa[0],e);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wr!==null&&Co(wr,e),Sr!==null&&Co(Sr,e),br!==null&&Co(br,e),la.forEach(t),ua.forEach(t),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&hr.shift()}var Ui=Xn.ReactCurrentBatchConfig,rl=!0;function tS(e,t,n,r){var i=Oe,o=Ui.transition;Ui.transition=null;try{Oe=1,tp(e,t,n,r)}finally{Oe=i,Ui.transition=o}}function nS(e,t,n,r){var i=Oe,o=Ui.transition;Ui.transition=null;try{Oe=4,tp(e,t,n,r)}finally{Oe=i,Ui.transition=o}}function tp(e,t,n,r){if(rl){var i=pd(e,t,n,r);if(i===null)qu(e,t,r,il,n),Rh(e,r);else if(Zw(i,e,t,n,r))r.stopPropagation();else if(Rh(e,r),t&4&&-1<Yw.indexOf(e)){for(;i!==null;){var o=Ma(i);if(o!==null&&c0(o),o=pd(e,t,n,r),o===null&&qu(e,t,r,il,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qu(e,t,r,null,n)}}var il=null;function pd(e,t,n,r){if(il=null,e=Kf(r),e=Hr(e),e!==null)if(t=ci(e),t===null)e=null;else if(n=t.tag,n===13){if(e=n0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return il=e,null}function m0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hw()){case Yf:return 1;case a0:return 4;case tl:case Vw:return 16;case s0:return 536870912;default:return 16}default:return 16}}var gr=null,np=null,Ps=null;function g0(){if(Ps)return Ps;var e,t=np,n=t.length,r,i="value"in gr?gr.value:gr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ps=i.slice(e,1<r?1-r:void 0)}function $s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ka(){return!0}function Th(){return!1}function Vt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ka:Th,this.isPropagationStopped=Th,this}return qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),t}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=Vt(uo),La=qe({},uo,{view:0,detail:0}),rS=Vt(La),_u,zu,ko,Dl=qe({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ko&&(ko&&e.type==="mousemove"?(_u=e.screenX-ko.screenX,zu=e.screenY-ko.screenY):zu=_u=0,ko=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:zu}}),Ph=Vt(Dl),iS=qe({},Dl,{dataTransfer:0}),oS=Vt(iS),aS=qe({},La,{relatedTarget:0}),ju=Vt(aS),sS=qe({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=Vt(sS),uS=qe({},uo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cS=Vt(uS),dS=qe({},uo,{data:0}),$h=Vt(dS),fS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hS[e])?!!t[e]:!1}function ip(){return mS}var gS=qe({},La,{key:function(e){if(e.key){var t=fS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(e){return e.type==="keypress"?$s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vS=Vt(gS),yS=qe({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=Vt(yS),xS=qe({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),wS=Vt(xS),SS=qe({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Vt(SS),ES=qe({},Dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Vt(ES),kS=[9,13,27,32],op=Vn&&"CompositionEvent"in window,Bo=null;Vn&&"documentMode"in document&&(Bo=document.documentMode);var AS=Vn&&"TextEvent"in window&&!Bo,v0=Vn&&(!op||Bo&&8<Bo&&11>=Bo),Mh=String.fromCharCode(32),Nh=!1;function y0(e,t){switch(e){case"keyup":return kS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bi=!1;function RS(e,t){switch(e){case"compositionend":return x0(t);case"keypress":return t.which!==32?null:(Nh=!0,Mh);case"textInput":return e=t.data,e===Mh&&Nh?null:e;default:return null}}function OS(e,t){if(bi)return e==="compositionend"||!op&&y0(e,t)?(e=g0(),Ps=np=gr=null,bi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return v0&&t.locale!=="ko"?null:t.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!TS[e.type]:t==="textarea"}function w0(e,t,n,r){Kv(r),t=ol(t,"onChange"),0<t.length&&(n=new rp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ho=null,da=null;function PS(e){$0(e,0)}function _l(e){var t=ki(e);if(Vv(t))return e}function $S(e,t){if(e==="change")return t}var S0=!1;if(Vn){var Uu;if(Vn){var Bu="oninput"in document;if(!Bu){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),Bu=typeof Ih.oninput=="function"}Uu=Bu}else Uu=!1;S0=Uu&&(!document.documentMode||9<document.documentMode)}function Dh(){Ho&&(Ho.detachEvent("onpropertychange",b0),da=Ho=null)}function b0(e){if(e.propertyName==="value"&&_l(da)){var t=[];w0(t,da,e,Kf(e)),t0(PS,t)}}function LS(e,t,n){e==="focusin"?(Dh(),Ho=t,da=n,Ho.attachEvent("onpropertychange",b0)):e==="focusout"&&Dh()}function MS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(da)}function NS(e,t){if(e==="click")return _l(t)}function FS(e,t){if(e==="input"||e==="change")return _l(t)}function IS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Sn=typeof Object.is=="function"?Object.is:IS;function fa(e,t){if(Sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qc.call(t,i)||!Sn(e[i],t[i]))return!1}return!0}function _h(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zh(e,t){var n=_h(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_h(n)}}function E0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?E0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function C0(){for(var e=window,t=Ys();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ys(e.document)}return t}function ap(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function DS(e){var t=C0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&E0(n.ownerDocument.documentElement,n)){if(r!==null&&ap(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zh(n,o);var a=zh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _S=Vn&&"documentMode"in document&&11>=document.documentMode,Ei=null,hd=null,Vo=null,md=!1;function jh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||Ei==null||Ei!==Ys(r)||(r=Ei,"selectionStart"in r&&ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&fa(Vo,r)||(Vo=r,r=ol(hd,"onSelect"),0<r.length&&(t=new rp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ei)))}function Ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ci={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Hu={},k0={};Vn&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function zl(e){if(Hu[e])return Hu[e];if(!Ci[e])return e;var t=Ci[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in k0)return Hu[e]=t[n];return e}var A0=zl("animationend"),R0=zl("animationiteration"),O0=zl("animationstart"),T0=zl("transitionend"),P0=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){P0.set(e,t),ui(t,[e])}for(var Vu=0;Vu<Uh.length;Vu++){var Wu=Uh[Vu],zS=Wu.toLowerCase(),jS=Wu[0].toUpperCase()+Wu.slice(1);Mr(zS,"on"+jS)}Mr(A0,"onAnimationEnd");Mr(R0,"onAnimationIteration");Mr(O0,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(T0,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Bh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zw(r,t,void 0,e),e.currentTarget=null}function $0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Bh(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Bh(i,s,u),o=l}}}if(el)throw e=cd,el=!1,cd=null,e}function Fe(e,t){var n=t[wd];n===void 0&&(n=t[wd]=new Set);var r=e+"__bubble";n.has(r)||(L0(t,e,2,!1),n.add(r))}function Gu(e,t,n){var r=0;t&&(r|=4),L0(n,e,r,t)}var Za="_reactListening"+Math.random().toString(36).slice(2);function pa(e){if(!e[Za]){e[Za]=!0,zv.forEach(function(n){n!=="selectionchange"&&(US.has(n)||Gu(n,!1,e),Gu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Za]||(t[Za]=!0,Gu("selectionchange",!1,t))}}function L0(e,t,n,r){switch(m0(t)){case 1:var i=tS;break;case 4:i=nS;break;default:i=tp}n=i.bind(null,t,n,e),i=void 0,!ud||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Hr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}t0(function(){var u=o,c=Kf(n),d=[];e:{var f=P0.get(e);if(f!==void 0){var w=rp,v=e;switch(e){case"keypress":if($s(n)===0)break e;case"keydown":case"keyup":w=vS;break;case"focusin":v="focus",w=ju;break;case"focusout":v="blur",w=ju;break;case"beforeblur":case"afterblur":w=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wS;break;case A0:case R0:case O0:w=lS;break;case T0:w=bS;break;case"scroll":w=rS;break;case"wheel":w=CS;break;case"copy":case"cut":case"paste":w=cS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Lh}var g=(t&4)!==0,m=!g&&e==="scroll",p=g?f!==null?f+"Capture":null:f;g=[];for(var h=u,x;h!==null;){x=h;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,p!==null&&(b=sa(h,p),b!=null&&g.push(ha(h,b,x)))),m)break;h=h.return}0<g.length&&(f=new w(f,v,null,n,c),d.push({event:f,listeners:g}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==sd&&(v=n.relatedTarget||n.fromElement)&&(Hr(v)||v[Wn]))break e;if((w||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?Hr(v):null,v!==null&&(m=ci(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(g=Ph,b="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(g=Lh,b="onPointerLeave",p="onPointerEnter",h="pointer"),m=w==null?f:ki(w),x=v==null?f:ki(v),f=new g(b,h+"leave",w,n,c),f.target=m,f.relatedTarget=x,b=null,Hr(c)===u&&(g=new g(p,h+"enter",v,n,c),g.target=x,g.relatedTarget=m,b=g),m=b,w&&v)t:{for(g=w,p=v,h=0,x=g;x;x=hi(x))h++;for(x=0,b=p;b;b=hi(b))x++;for(;0<h-x;)g=hi(g),h--;for(;0<x-h;)p=hi(p),x--;for(;h--;){if(g===p||p!==null&&g===p.alternate)break t;g=hi(g),p=hi(p)}g=null}else g=null;w!==null&&Hh(d,f,w,g,!1),v!==null&&m!==null&&Hh(d,m,v,g,!0)}}e:{if(f=u?ki(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var C=$S;else if(Fh(f))if(S0)C=FS;else{C=MS;var k=LS}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=NS);if(C&&(C=C(e,u))){w0(d,C,n,c);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&nd(f,"number",f.value)}switch(k=u?ki(u):window,e){case"focusin":(Fh(k)||k.contentEditable==="true")&&(Ei=k,hd=u,Vo=null);break;case"focusout":Vo=hd=Ei=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,jh(d,n,c);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":jh(d,n,c)}var R;if(op)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else bi?y0(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(v0&&n.locale!=="ko"&&(bi||P!=="onCompositionStart"?P==="onCompositionEnd"&&bi&&(R=g0()):(gr=c,np="value"in gr?gr.value:gr.textContent,bi=!0)),k=ol(u,P),0<k.length&&(P=new $h(P,e,null,n,c),d.push({event:P,listeners:k}),R?P.data=R:(R=x0(n),R!==null&&(P.data=R)))),(R=AS?RS(e,n):OS(e,n))&&(u=ol(u,"onBeforeInput"),0<u.length&&(c=new $h("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}$0(d,t)})}function ha(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ol(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=sa(e,n),o!=null&&r.unshift(ha(e,o,i)),o=sa(e,t),o!=null&&r.push(ha(e,o,i))),e=e.return}return r}function hi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=sa(n,o),l!=null&&a.unshift(ha(n,l,s))):i||(l=sa(n,o),l!=null&&a.push(ha(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var BS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function Vh(e){return(typeof e=="string"?e:""+e).replace(BS,`
`).replace(HS,"")}function es(e,t,n){if(t=Vh(t),Vh(e)!==t&&n)throw Error(J(425))}function al(){}var gd=null,vd=null;function yd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xd=typeof setTimeout=="function"?setTimeout:void 0,VS=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(e){return Wh.resolve(null).then(e).catch(GS)}:xd;function GS(e){setTimeout(function(){throw e})}function Ju(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ca(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ca(t)}function Er(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var co=Math.random().toString(36).slice(2),An="__reactFiber$"+co,ma="__reactProps$"+co,Wn="__reactContainer$"+co,wd="__reactEvents$"+co,qS="__reactListeners$"+co,JS="__reactHandles$"+co;function Hr(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wn]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gh(e);e!==null;){if(n=e[An])return n;e=Gh(e)}return t}e=n,n=e.parentNode}return null}function Ma(e){return e=e[An]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(J(33))}function jl(e){return e[ma]||null}var Sd=[],Ai=-1;function Nr(e){return{current:e}}function Ie(e){0>Ai||(e.current=Sd[Ai],Sd[Ai]=null,Ai--)}function Ne(e,t){Ai++,Sd[Ai]=e.current,e.current=t}var $r={},St=Nr($r),Tt=Nr(!1),Zr=$r;function Ji(e,t){var n=e.type.contextTypes;if(!n)return $r;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function sl(){Ie(Tt),Ie(St)}function qh(e,t,n){if(St.current!==$r)throw Error(J(168));Ne(St,t),Ne(Tt,n)}function M0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(J(108,Lw(e)||"Unknown",i));return qe({},n,r)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$r,Zr=St.current,Ne(St,e),Ne(Tt,Tt.current),!0}function Jh(e,t,n){var r=e.stateNode;if(!r)throw Error(J(169));n?(e=M0(e,t,Zr),r.__reactInternalMemoizedMergedChildContext=e,Ie(Tt),Ie(St),Ne(St,e)):Ie(Tt),Ne(Tt,n)}var In=null,Ul=!1,Qu=!1;function N0(e){In===null?In=[e]:In.push(e)}function QS(e){Ul=!0,N0(e)}function Fr(){if(!Qu&&In!==null){Qu=!0;var e=0,t=Oe;try{var n=In;for(Oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}In=null,Ul=!1}catch(i){throw In!==null&&(In=In.slice(e+1)),o0(Yf,Fr),i}finally{Oe=t,Qu=!1}}return null}var Ri=[],Oi=0,ul=null,cl=0,Qt=[],Xt=0,ei=null,Dn=1,_n="";function _r(e,t){Ri[Oi++]=cl,Ri[Oi++]=ul,ul=e,cl=t}function F0(e,t,n){Qt[Xt++]=Dn,Qt[Xt++]=_n,Qt[Xt++]=ei,ei=e;var r=Dn;e=_n;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var o=32-yn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Dn=1<<32-yn(t)+i|n<<i|r,_n=o+e}else Dn=1<<o|n<<i|r,_n=e}function sp(e){e.return!==null&&(_r(e,1),F0(e,1,0))}function lp(e){for(;e===ul;)ul=Ri[--Oi],Ri[Oi]=null,cl=Ri[--Oi],Ri[Oi]=null;for(;e===ei;)ei=Qt[--Xt],Qt[Xt]=null,_n=Qt[--Xt],Qt[Xt]=null,Dn=Qt[--Xt],Qt[Xt]=null}var Ut=null,_t=null,_e=!1,gn=null;function I0(e,t){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,_t=Er(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ei!==null?{id:Dn,overflow:_n}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,_t=null,!0):!1;default:return!1}}function bd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ed(e){if(_e){var t=_t;if(t){var n=t;if(!Qh(e,t)){if(bd(e))throw Error(J(418));t=Er(n.nextSibling);var r=Ut;t&&Qh(e,t)?I0(r,n):(e.flags=e.flags&-4097|2,_e=!1,Ut=e)}}else{if(bd(e))throw Error(J(418));e.flags=e.flags&-4097|2,_e=!1,Ut=e}}}function Xh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function ts(e){if(e!==Ut)return!1;if(!_e)return Xh(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yd(e.type,e.memoizedProps)),t&&(t=_t)){if(bd(e))throw D0(),Error(J(418));for(;t;)I0(e,t),t=Er(t.nextSibling)}if(Xh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_t=Er(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=Ut?Er(e.stateNode.nextSibling):null;return!0}function D0(){for(var e=_t;e;)e=Er(e.nextSibling)}function Qi(){_t=Ut=null,_e=!1}function up(e){gn===null?gn=[e]:gn.push(e)}var XS=Xn.ReactCurrentBatchConfig;function pn(e,t){if(e&&e.defaultProps){t=qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var dl=Nr(null),fl=null,Ti=null,cp=null;function dp(){cp=Ti=fl=null}function fp(e){var t=dl.current;Ie(dl),e._currentValue=t}function Cd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bi(e,t){fl=e,cp=Ti=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Rt=!0),e.firstContext=null)}function en(e){var t=e._currentValue;if(cp!==e)if(e={context:e,memoizedValue:t,next:null},Ti===null){if(fl===null)throw Error(J(308));Ti=e,fl.dependencies={lanes:0,firstContext:e}}else Ti=Ti.next=e;return t}var Vr=null;function pp(e){Vr===null?Vr=[e]:Vr.push(e)}function _0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pp(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fr=!1;function hp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gn(e,n)}return i=r.interleaved,i===null?(t.next=t,pp(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gn(e,n)}function Ls(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zf(e,n)}}function Kh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pl(e,t,n,r){var i=e.updateQueue;fr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,c=u=l=null,s=o;do{var f=s.lane,w=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,g=s;switch(f=t,w=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(w,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,f=typeof v=="function"?v.call(w,d,f):v,f==null)break e;d=qe({},d,f);break e;case 2:fr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else w={eventTime:w,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=w,l=d):c=c.next=w,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ni|=a,e.lanes=a,e.memoizedState=d}}function Yh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(J(191,i));i.call(r)}}}var j0=new _v.Component().refs;function kd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bl={isMounted:function(e){return(e=e._reactInternals)?ci(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Et(),i=Ar(e),o=Un(r,i);o.payload=t,n!=null&&(o.callback=n),t=Cr(e,o,i),t!==null&&(xn(t,e,i,r),Ls(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Et(),i=Ar(e),o=Un(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Cr(e,o,i),t!==null&&(xn(t,e,i,r),Ls(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),r=Ar(e),i=Un(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cr(e,i,r),t!==null&&(xn(t,e,r,n),Ls(t,e,r))}};function Zh(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!fa(n,r)||!fa(i,o):!0}function U0(e,t,n){var r=!1,i=$r,o=t.contextType;return typeof o=="object"&&o!==null?o=en(o):(i=Pt(t)?Zr:St.current,r=t.contextTypes,o=(r=r!=null)?Ji(e,i):$r),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function em(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bl.enqueueReplaceState(t,t.state,null)}function Ad(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=j0,hp(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=en(o):(o=Pt(t)?Zr:St.current,i.context=Ji(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(kd(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bl.enqueueReplaceState(i,i.state,null),pl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ao(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var r=n.stateNode}if(!r)throw Error(J(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===j0&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tm(e){var t=e._init;return t(e._payload)}function B0(e){function t(p,h){if(e){var x=p.deletions;x===null?(p.deletions=[h],p.flags|=16):x.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Rr(p,h),p.index=0,p.sibling=null,p}function o(p,h,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<h?(p.flags|=2,h):x):(p.flags|=2,h)):(p.flags|=1048576,h)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,h,x,b){return h===null||h.tag!==6?(h=nc(x,p.mode,b),h.return=p,h):(h=i(h,x),h.return=p,h)}function l(p,h,x,b){var C=x.type;return C===Si?c(p,h,x.props.children,b,x.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dr&&tm(C)===h.type)?(b=i(h,x.props),b.ref=Ao(p,h,x),b.return=p,b):(b=_s(x.type,x.key,x.props,null,p.mode,b),b.ref=Ao(p,h,x),b.return=p,b)}function u(p,h,x,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=rc(x,p.mode,b),h.return=p,h):(h=i(h,x.children||[]),h.return=p,h)}function c(p,h,x,b,C){return h===null||h.tag!==7?(h=Kr(x,p.mode,b,C),h.return=p,h):(h=i(h,x),h.return=p,h)}function d(p,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=nc(""+h,p.mode,x),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Wa:return x=_s(h.type,h.key,h.props,null,p.mode,x),x.ref=Ao(p,null,h),x.return=p,x;case wi:return h=rc(h,p.mode,x),h.return=p,h;case dr:var b=h._init;return d(p,b(h._payload),x)}if(Fo(h)||So(h))return h=Kr(h,p.mode,x,null),h.return=p,h;ns(p,h)}return null}function f(p,h,x,b){var C=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:s(p,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:return x.key===C?l(p,h,x,b):null;case wi:return x.key===C?u(p,h,x,b):null;case dr:return C=x._init,f(p,h,C(x._payload),b)}if(Fo(x)||So(x))return C!==null?null:c(p,h,x,b,null);ns(p,x)}return null}function w(p,h,x,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(x)||null,s(h,p,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Wa:return p=p.get(b.key===null?x:b.key)||null,l(h,p,b,C);case wi:return p=p.get(b.key===null?x:b.key)||null,u(h,p,b,C);case dr:var k=b._init;return w(p,h,x,k(b._payload),C)}if(Fo(b)||So(b))return p=p.get(x)||null,c(h,p,b,C,null);ns(h,b)}return null}function v(p,h,x,b){for(var C=null,k=null,R=h,P=h=0,H=null;R!==null&&P<x.length;P++){R.index>P?(H=R,R=null):H=R.sibling;var D=f(p,R,x[P],b);if(D===null){R===null&&(R=H);break}e&&R&&D.alternate===null&&t(p,R),h=o(D,h,P),k===null?C=D:k.sibling=D,k=D,R=H}if(P===x.length)return n(p,R),_e&&_r(p,P),C;if(R===null){for(;P<x.length;P++)R=d(p,x[P],b),R!==null&&(h=o(R,h,P),k===null?C=R:k.sibling=R,k=R);return _e&&_r(p,P),C}for(R=r(p,R);P<x.length;P++)H=w(R,p,P,x[P],b),H!==null&&(e&&H.alternate!==null&&R.delete(H.key===null?P:H.key),h=o(H,h,P),k===null?C=H:k.sibling=H,k=H);return e&&R.forEach(function(Q){return t(p,Q)}),_e&&_r(p,P),C}function g(p,h,x,b){var C=So(x);if(typeof C!="function")throw Error(J(150));if(x=C.call(x),x==null)throw Error(J(151));for(var k=C=null,R=h,P=h=0,H=null,D=x.next();R!==null&&!D.done;P++,D=x.next()){R.index>P?(H=R,R=null):H=R.sibling;var Q=f(p,R,D.value,b);if(Q===null){R===null&&(R=H);break}e&&R&&Q.alternate===null&&t(p,R),h=o(Q,h,P),k===null?C=Q:k.sibling=Q,k=Q,R=H}if(D.done)return n(p,R),_e&&_r(p,P),C;if(R===null){for(;!D.done;P++,D=x.next())D=d(p,D.value,b),D!==null&&(h=o(D,h,P),k===null?C=D:k.sibling=D,k=D);return _e&&_r(p,P),C}for(R=r(p,R);!D.done;P++,D=x.next())D=w(R,p,P,D.value,b),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?P:D.key),h=o(D,h,P),k===null?C=D:k.sibling=D,k=D);return e&&R.forEach(function(O){return t(p,O)}),_e&&_r(p,P),C}function m(p,h,x,b){if(typeof x=="object"&&x!==null&&x.type===Si&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:e:{for(var C=x.key,k=h;k!==null;){if(k.key===C){if(C=x.type,C===Si){if(k.tag===7){n(p,k.sibling),h=i(k,x.props.children),h.return=p,p=h;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dr&&tm(C)===k.type){n(p,k.sibling),h=i(k,x.props),h.ref=Ao(p,k,x),h.return=p,p=h;break e}n(p,k);break}else t(p,k);k=k.sibling}x.type===Si?(h=Kr(x.props.children,p.mode,b,x.key),h.return=p,p=h):(b=_s(x.type,x.key,x.props,null,p.mode,b),b.ref=Ao(p,h,x),b.return=p,p=b)}return a(p);case wi:e:{for(k=x.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(p,h.sibling),h=i(h,x.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=rc(x,p.mode,b),h.return=p,p=h}return a(p);case dr:return k=x._init,m(p,h,k(x._payload),b)}if(Fo(x))return v(p,h,x,b);if(So(x))return g(p,h,x,b);ns(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,x),h.return=p,p=h):(n(p,h),h=nc(x,p.mode,b),h.return=p,p=h),a(p)):n(p,h)}return m}var Xi=B0(!0),H0=B0(!1),Na={},Tn=Nr(Na),ga=Nr(Na),va=Nr(Na);function Wr(e){if(e===Na)throw Error(J(174));return e}function mp(e,t){switch(Ne(va,t),Ne(ga,e),Ne(Tn,Na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:id(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=id(t,e)}Ie(Tn),Ne(Tn,t)}function Ki(){Ie(Tn),Ie(ga),Ie(va)}function V0(e){Wr(va.current);var t=Wr(Tn.current),n=id(t,e.type);t!==n&&(Ne(ga,e),Ne(Tn,n))}function gp(e){ga.current===e&&(Ie(Tn),Ie(ga))}var Ve=Nr(0);function hl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xu=[];function vp(){for(var e=0;e<Xu.length;e++)Xu[e]._workInProgressVersionPrimary=null;Xu.length=0}var Ms=Xn.ReactCurrentDispatcher,Ku=Xn.ReactCurrentBatchConfig,ti=0,Ge=null,it=null,ut=null,ml=!1,Wo=!1,ya=0,KS=0;function yt(){throw Error(J(321))}function yp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sn(e[n],t[n]))return!1;return!0}function xp(e,t,n,r,i,o){if(ti=o,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ms.current=e===null||e.memoizedState===null?tb:nb,e=n(r,i),Wo){o=0;do{if(Wo=!1,ya=0,25<=o)throw Error(J(301));o+=1,ut=it=null,t.updateQueue=null,Ms.current=rb,e=n(r,i)}while(Wo)}if(Ms.current=gl,t=it!==null&&it.next!==null,ti=0,ut=it=Ge=null,ml=!1,t)throw Error(J(300));return e}function wp(){var e=ya!==0;return ya=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ge.memoizedState=ut=e:ut=ut.next=e,ut}function tn(){if(it===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var t=ut===null?Ge.memoizedState:ut.next;if(t!==null)ut=t,it=e;else{if(e===null)throw Error(J(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ut===null?Ge.memoizedState=ut=e:ut=ut.next=e}return ut}function xa(e,t){return typeof t=="function"?t(e):t}function Yu(e){var t=tn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=it,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((ti&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,Ge.lanes|=c,ni|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Sn(r,t.memoizedState)||(Rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ge.lanes|=o,ni|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zu(e){var t=tn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Sn(o,t.memoizedState)||(Rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function W0(){}function G0(e,t){var n=Ge,r=tn(),i=t(),o=!Sn(r.memoizedState,i);if(o&&(r.memoizedState=i,Rt=!0),r=r.queue,Sp(Q0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,wa(9,J0.bind(null,n,r,i,t),void 0,null),ct===null)throw Error(J(349));ti&30||q0(n,t,i)}return i}function q0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function J0(e,t,n,r){t.value=n,t.getSnapshot=r,X0(t)&&K0(e)}function Q0(e,t,n){return n(function(){X0(t)&&K0(e)})}function X0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sn(e,n)}catch{return!0}}function K0(e){var t=Gn(e,1);t!==null&&xn(t,e,1,-1)}function nm(e){var t=Cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=eb.bind(null,Ge,e),[t.memoizedState,e]}function wa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Y0(){return tn().memoizedState}function Ns(e,t,n,r){var i=Cn();Ge.flags|=e,i.memoizedState=wa(1|t,n,void 0,r===void 0?null:r)}function Hl(e,t,n,r){var i=tn();r=r===void 0?null:r;var o=void 0;if(it!==null){var a=it.memoizedState;if(o=a.destroy,r!==null&&yp(r,a.deps)){i.memoizedState=wa(t,n,o,r);return}}Ge.flags|=e,i.memoizedState=wa(1|t,n,o,r)}function rm(e,t){return Ns(8390656,8,e,t)}function Sp(e,t){return Hl(2048,8,e,t)}function Z0(e,t){return Hl(4,2,e,t)}function ey(e,t){return Hl(4,4,e,t)}function ty(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ny(e,t,n){return n=n!=null?n.concat([e]):null,Hl(4,4,ty.bind(null,t,e),n)}function bp(){}function ry(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function iy(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oy(e,t,n){return ti&21?(Sn(n,t)||(n=l0(),Ge.lanes|=n,ni|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Rt=!0),e.memoizedState=n)}function YS(e,t){var n=Oe;Oe=n!==0&&4>n?n:4,e(!0);var r=Ku.transition;Ku.transition={};try{e(!1),t()}finally{Oe=n,Ku.transition=r}}function ay(){return tn().memoizedState}function ZS(e,t,n){var r=Ar(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sy(e))ly(t,n);else if(n=_0(e,t,n,r),n!==null){var i=Et();xn(n,e,r,i),uy(n,t,r)}}function eb(e,t,n){var r=Ar(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sy(e))ly(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Sn(s,a)){var l=t.interleaved;l===null?(i.next=i,pp(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=_0(e,t,i,r),n!==null&&(i=Et(),xn(n,e,r,i),uy(n,t,r))}}function sy(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function ly(e,t){Wo=ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zf(e,n)}}var gl={readContext:en,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},tb={readContext:en,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:rm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ns(4194308,4,ty.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ns(4,2,e,t)},useMemo:function(e,t){var n=Cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Cn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ZS.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:nm,useDebugValue:bp,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=nm(!1),t=e[0];return e=YS.bind(null,e[1]),Cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=Cn();if(_e){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),ct===null)throw Error(J(349));ti&30||q0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,rm(Q0.bind(null,r,o,e),[e]),r.flags|=2048,wa(9,J0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Cn(),t=ct.identifierPrefix;if(_e){var n=_n,r=Dn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ya++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=KS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nb={readContext:en,useCallback:ry,useContext:en,useEffect:Sp,useImperativeHandle:ny,useInsertionEffect:Z0,useLayoutEffect:ey,useMemo:iy,useReducer:Yu,useRef:Y0,useState:function(){return Yu(xa)},useDebugValue:bp,useDeferredValue:function(e){var t=tn();return oy(t,it.memoizedState,e)},useTransition:function(){var e=Yu(xa)[0],t=tn().memoizedState;return[e,t]},useMutableSource:W0,useSyncExternalStore:G0,useId:ay,unstable_isNewReconciler:!1},rb={readContext:en,useCallback:ry,useContext:en,useEffect:Sp,useImperativeHandle:ny,useInsertionEffect:Z0,useLayoutEffect:ey,useMemo:iy,useReducer:Zu,useRef:Y0,useState:function(){return Zu(xa)},useDebugValue:bp,useDeferredValue:function(e){var t=tn();return it===null?t.memoizedState=e:oy(t,it.memoizedState,e)},useTransition:function(){var e=Zu(xa)[0],t=tn().memoizedState;return[e,t]},useMutableSource:W0,useSyncExternalStore:G0,useId:ay,unstable_isNewReconciler:!1};function Yi(e,t){try{var n="",r=t;do n+=$w(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ec(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ib=typeof WeakMap=="function"?WeakMap:Map;function cy(e,t,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,Dd=r),Rd(e,t)},n}function dy(e,t,n){n=Un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Rd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Rd(e,t),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function im(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ib;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yb.bind(null,e,t,n),t.then(e,e))}function om(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function am(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Un(-1,1),t.tag=2,Cr(n,t,1))),n.lanes|=1),e)}var ob=Xn.ReactCurrentOwner,Rt=!1;function bt(e,t,n,r){t.child=e===null?H0(t,null,n,r):Xi(t,e.child,n,r)}function sm(e,t,n,r,i){n=n.render;var o=t.ref;return Bi(t,i),r=xp(e,t,n,r,o,i),n=wp(),e!==null&&!Rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(_e&&n&&sp(t),t.flags|=1,bt(e,t,r,i),t.child)}function lm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Pp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fy(e,t,o,r,i)):(e=_s(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(a,r)&&e.ref===t.ref)return qn(e,t,i)}return t.flags|=1,e=Rr(o,r),e.ref=t.ref,e.return=t,t.child=e}function fy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(fa(o,r)&&e.ref===t.ref)if(Rt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Rt=!0);else return t.lanes=e.lanes,qn(e,t,i)}return Od(e,t,n,r,i)}function py(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne($i,Dt),Dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne($i,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ne($i,Dt),Dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ne($i,Dt),Dt|=r;return bt(e,t,i,n),t.child}function hy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Od(e,t,n,r,i){var o=Pt(n)?Zr:St.current;return o=Ji(t,o),Bi(t,i),n=xp(e,t,n,r,o,i),r=wp(),e!==null&&!Rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(_e&&r&&sp(t),t.flags|=1,bt(e,t,n,i),t.child)}function um(e,t,n,r,i){if(Pt(n)){var o=!0;ll(t)}else o=!1;if(Bi(t,i),t.stateNode===null)Fs(e,t),U0(t,n,r),Ad(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=en(u):(u=Pt(n)?Zr:St.current,u=Ji(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&em(t,a,r,u),fr=!1;var f=t.memoizedState;a.state=f,pl(t,r,a,i),l=t.memoizedState,s!==r||f!==l||Tt.current||fr?(typeof c=="function"&&(kd(t,n,c,r),l=t.memoizedState),(s=fr||Zh(t,n,s,r,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,z0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:pn(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=en(l):(l=Pt(n)?Zr:St.current,l=Ji(t,l));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==l)&&em(t,a,r,l),fr=!1,f=t.memoizedState,a.state=f,pl(t,r,a,i);var v=t.memoizedState;s!==d||f!==v||Tt.current||fr?(typeof w=="function"&&(kd(t,n,w,r),v=t.memoizedState),(u=fr||Zh(t,n,u,r,f,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Td(e,t,n,r,o,i)}function Td(e,t,n,r,i,o){hy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Jh(t,n,!1),qn(e,t,o);r=t.stateNode,ob.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Xi(t,e.child,null,o),t.child=Xi(t,null,s,o)):bt(e,t,s,o),t.memoizedState=r.state,i&&Jh(t,n,!0),t.child}function my(e){var t=e.stateNode;t.pendingContext?qh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qh(e,t.context,!1),mp(e,t.containerInfo)}function cm(e,t,n,r,i){return Qi(),up(i),t.flags|=256,bt(e,t,n,r),t.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function $d(e){return{baseLanes:e,cachePool:null,transitions:null}}function gy(e,t,n){var r=t.pendingProps,i=Ve.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ne(Ve,i&1),e===null)return Ed(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Gl(a,r,0,null),e=Kr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$d(n),t.memoizedState=Pd,e):Ep(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ab(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Rr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Rr(s,o):(o=Kr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?$d(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Pd,r}return o=e.child,e=o.sibling,r=Rr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ep(e,t){return t=Gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&up(r),Xi(t,e.child,null,n),e=Ep(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ab(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ec(Error(J(422))),rs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Gl({mode:"visible",children:r.children},i,0,null),o=Kr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Xi(t,e.child,null,a),t.child.memoizedState=$d(a),t.memoizedState=Pd,o);if(!(t.mode&1))return rs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(J(419)),r=ec(o,r,void 0),rs(e,t,a,r)}if(s=(a&e.childLanes)!==0,Rt||s){if(r=ct,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gn(e,i),xn(r,e,i,-1))}return Tp(),r=ec(Error(J(421))),rs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xb.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_t=Er(i.nextSibling),Ut=t,_e=!0,gn=null,e!==null&&(Qt[Xt++]=Dn,Qt[Xt++]=_n,Qt[Xt++]=ei,Dn=e.id,_n=e.overflow,ei=t),t=Ep(t,r.children),t.flags|=4096,t)}function dm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cd(e.return,t,n)}function tc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bt(e,t,r.children,n),r=Ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dm(e,n,t);else if(e.tag===19)dm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ne(Ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&hl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&hl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tc(t,!0,n,null,o);break;case"together":tc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ni|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Rr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sb(e,t,n){switch(t.tag){case 3:my(t),Qi();break;case 5:V0(t);break;case 1:Pt(t.type)&&ll(t);break;case 4:mp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ne(dl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Ve,Ve.current&1),t.flags|=128,null):n&t.child.childLanes?gy(e,t,n):(Ne(Ve,Ve.current&1),e=qn(e,t,n),e!==null?e.sibling:null);Ne(Ve,Ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(Ve,Ve.current),r)break;return null;case 22:case 23:return t.lanes=0,py(e,t,n)}return qn(e,t,n)}var yy,Ld,xy,wy;yy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ld=function(){};xy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wr(Tn.current);var o=null;switch(n){case"input":i=ed(e,i),r=ed(e,r),o=[];break;case"select":i=qe({},i,{value:void 0}),r=qe({},r,{value:void 0}),o=[];break;case"textarea":i=rd(e,i),r=rd(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}od(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Fe("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};wy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ro(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lb(e,t,n){var r=t.pendingProps;switch(lp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(t),null;case 1:return Pt(t.type)&&sl(),xt(t),null;case 3:return r=t.stateNode,Ki(),Ie(Tt),Ie(St),vp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gn!==null&&(jd(gn),gn=null))),Ld(e,t),xt(t),null;case 5:gp(t);var i=Wr(va.current);if(n=t.type,e!==null&&t.stateNode!=null)xy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(J(166));return xt(t),null}if(e=Wr(Tn.current),ts(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[An]=t,r[ma]=o,e=(t.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<Do.length;i++)Fe(Do[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":wh(r,o),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fe("invalid",r);break;case"textarea":bh(r,o),Fe("invalid",r)}od(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&es(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&es(r.textContent,s,e),i=["children",""+s]):oa.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Fe("scroll",r)}switch(n){case"input":Ga(r),Sh(r,o,!0);break;case"textarea":Ga(r),Eh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=al)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[An]=t,e[ma]=r,yy(e,t,!1,!1),t.stateNode=e;e:{switch(a=ad(n,r),n){case"dialog":Fe("cancel",e),Fe("close",e),i=r;break;case"iframe":case"object":case"embed":Fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Do.length;i++)Fe(Do[i],e);i=r;break;case"source":Fe("error",e),i=r;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),i=r;break;case"details":Fe("toggle",e),i=r;break;case"input":wh(e,r),i=ed(e,r),Fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=qe({},r,{value:void 0}),Fe("invalid",e);break;case"textarea":bh(e,r),i=rd(e,r),Fe("invalid",e);break;default:i=r}od(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Xv(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jv(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(e,l):typeof l=="number"&&aa(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(oa.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Fe("scroll",e):l!=null&&qf(e,o,l,a))}switch(n){case"input":Ga(e),Sh(e,r,!1);break;case"textarea":Ga(e),Eh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?_i(e,!!r.multiple,o,!1):r.defaultValue!=null&&_i(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xt(t),null;case 6:if(e&&t.stateNode!=null)wy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(J(166));if(n=Wr(va.current),Wr(Tn.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[An]=t,(o=r.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return xt(t),null;case 13:if(Ie(Ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&_t!==null&&t.mode&1&&!(t.flags&128))D0(),Qi(),t.flags|=98560,o=!1;else if(o=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(J(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(J(317));o[An]=t}else Qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xt(t),o=!1}else gn!==null&&(jd(gn),gn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ve.current&1?ot===0&&(ot=3):Tp())),t.updateQueue!==null&&(t.flags|=4),xt(t),null);case 4:return Ki(),Ld(e,t),e===null&&pa(t.stateNode.containerInfo),xt(t),null;case 10:return fp(t.type._context),xt(t),null;case 17:return Pt(t.type)&&sl(),xt(t),null;case 19:if(Ie(Ve),o=t.memoizedState,o===null)return xt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ro(o,!1);else{if(ot!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=hl(e),a!==null){for(t.flags|=128,Ro(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ne(Ve,Ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ke()>Zi&&(t.flags|=128,r=!0,Ro(o,!1),t.lanes=4194304)}else{if(!r)if(e=hl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return xt(t),null}else 2*Ke()-o.renderingStartTime>Zi&&n!==1073741824&&(t.flags|=128,r=!0,Ro(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ke(),t.sibling=null,n=Ve.current,Ne(Ve,r?n&1|2:n&1),t):(xt(t),null);case 22:case 23:return Op(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Dt&1073741824&&(xt(t),t.subtreeFlags&6&&(t.flags|=8192)):xt(t),null;case 24:return null;case 25:return null}throw Error(J(156,t.tag))}function ub(e,t){switch(lp(t),t.tag){case 1:return Pt(t.type)&&sl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(),Ie(Tt),Ie(St),vp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gp(t),null;case 13:if(Ie(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Ve),null;case 4:return Ki(),null;case 10:return fp(t.type._context),null;case 22:case 23:return Op(),null;case 24:return null;default:return null}}var is=!1,wt=!1,cb=typeof WeakSet=="function"?WeakSet:Set,te=null;function Pi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(e,t,r)}else n.current=null}function Md(e,t,n){try{n()}catch(r){Je(e,t,r)}}var fm=!1;function db(e,t){if(gd=rl,e=C0(),ap(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(w=d.firstChild)!==null;)f=d,d=w;for(;;){if(d===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++c===r&&(l=a),(w=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=w}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:e,selectionRange:n},rl=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,m=v.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?g:pn(t.type,g),m);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(b){Je(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return v=fm,fm=!1,v}function Go(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Md(t,n,o)}i=i.next}while(i!==r)}}function Vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sy(e){var t=e.alternate;t!==null&&(e.alternate=null,Sy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[ma],delete t[wd],delete t[qS],delete t[JS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function by(e){return e.tag===5||e.tag===3||e.tag===4}function pm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||by(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(Fd(e,t,n),e=e.sibling;e!==null;)Fd(e,t,n),e=e.sibling}function Id(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Id(e,t,n),e=e.sibling;e!==null;)Id(e,t,n),e=e.sibling}var pt=null,hn=!1;function tr(e,t,n){for(n=n.child;n!==null;)Ey(e,t,n),n=n.sibling}function Ey(e,t,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:wt||Pi(n,t);case 6:var r=pt,i=hn;pt=null,tr(e,t,n),pt=r,hn=i,pt!==null&&(hn?(e=pt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(hn?(e=pt,n=n.stateNode,e.nodeType===8?Ju(e.parentNode,n):e.nodeType===1&&Ju(e,n),ca(e)):Ju(pt,n.stateNode));break;case 4:r=pt,i=hn,pt=n.stateNode.containerInfo,hn=!0,tr(e,t,n),pt=r,hn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Md(n,t,a),i=i.next}while(i!==r)}tr(e,t,n);break;case 1:if(!wt&&(Pi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Je(n,t,s)}tr(e,t,n);break;case 21:tr(e,t,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,tr(e,t,n),wt=r):tr(e,t,n);break;default:tr(e,t,n)}}function hm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cb),t.forEach(function(r){var i=wb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:pt=s.stateNode,hn=!1;break e;case 3:pt=s.stateNode.containerInfo,hn=!0;break e;case 4:pt=s.stateNode.containerInfo,hn=!0;break e}s=s.return}if(pt===null)throw Error(J(160));Ey(o,a,i),pt=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cy(t,e),t=t.sibling}function Cy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),En(e),r&4){try{Go(3,e,e.return),Vl(3,e)}catch(g){Je(e,e.return,g)}try{Go(5,e,e.return)}catch(g){Je(e,e.return,g)}}break;case 1:cn(t,e),En(e),r&512&&n!==null&&Pi(n,n.return);break;case 5:if(cn(t,e),En(e),r&512&&n!==null&&Pi(n,n.return),e.flags&32){var i=e.stateNode;try{aa(i,"")}catch(g){Je(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Wv(i,o),ad(s,a);var u=ad(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?Xv(i,d):c==="dangerouslySetInnerHTML"?Jv(i,d):c==="children"?aa(i,d):qf(i,c,d,u)}switch(s){case"input":td(i,o);break;case"textarea":Gv(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?_i(i,!!o.multiple,w,!1):f!==!!o.multiple&&(o.defaultValue!=null?_i(i,!!o.multiple,o.defaultValue,!0):_i(i,!!o.multiple,o.multiple?[]:"",!1))}i[ma]=o}catch(g){Je(e,e.return,g)}}break;case 6:if(cn(t,e),En(e),r&4){if(e.stateNode===null)throw Error(J(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Je(e,e.return,g)}}break;case 3:if(cn(t,e),En(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(t.containerInfo)}catch(g){Je(e,e.return,g)}break;case 4:cn(t,e),En(e);break;case 13:cn(t,e),En(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ap=Ke())),r&4&&hm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(wt=(u=wt)||c,cn(t,e),wt=u):cn(t,e),En(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(te=e,c=e.child;c!==null;){for(d=te=c;te!==null;){switch(f=te,w=f.child,f.tag){case 0:case 11:case 14:case 15:Go(4,f,f.return);break;case 1:Pi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){Je(r,n,g)}}break;case 5:Pi(f,f.return);break;case 22:if(f.memoizedState!==null){gm(d);continue}}w!==null?(w.return=f,te=w):gm(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Qv("display",a))}catch(g){Je(e,e.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Je(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:cn(t,e),En(e),r&4&&hm(e);break;case 21:break;default:cn(t,e),En(e)}}function En(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(by(n)){var r=n;break e}n=n.return}throw Error(J(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(aa(i,""),r.flags&=-33);var o=pm(e);Id(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=pm(e);Fd(e,s,a);break;default:throw Error(J(161))}}catch(l){Je(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fb(e,t,n){te=e,ky(e)}function ky(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var i=te,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||is;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||wt;s=is;var u=wt;if(is=a,(wt=l)&&!u)for(te=i;te!==null;)a=te,l=a.child,a.tag===22&&a.memoizedState!==null?vm(i):l!==null?(l.return=a,te=l):vm(i);for(;o!==null;)te=o,ky(o),o=o.sibling;te=i,is=s,wt=u}mm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,te=o):mm(e)}}function mm(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:wt||Vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Yh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ca(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}wt||t.flags&512&&Nd(t)}catch(f){Je(t,t.return,f)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function gm(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function vm(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vl(4,t)}catch(l){Je(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Je(t,i,l)}}var o=t.return;try{Nd(t)}catch(l){Je(t,o,l)}break;case 5:var a=t.return;try{Nd(t)}catch(l){Je(t,a,l)}}}catch(l){Je(t,t.return,l)}if(t===e){te=null;break}var s=t.sibling;if(s!==null){s.return=t.return,te=s;break}te=t.return}}var pb=Math.ceil,vl=Xn.ReactCurrentDispatcher,Cp=Xn.ReactCurrentOwner,Yt=Xn.ReactCurrentBatchConfig,ke=0,ct=null,nt=null,ht=0,Dt=0,$i=Nr(0),ot=0,Sa=null,ni=0,Wl=0,kp=0,qo=null,At=null,Ap=0,Zi=1/0,Nn=null,yl=!1,Dd=null,kr=null,os=!1,vr=null,xl=0,Jo=0,_d=null,Is=-1,Ds=0;function Et(){return ke&6?Ke():Is!==-1?Is:Is=Ke()}function Ar(e){return e.mode&1?ke&2&&ht!==0?ht&-ht:XS.transition!==null?(Ds===0&&(Ds=l0()),Ds):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:m0(e.type)),e):1}function xn(e,t,n,r){if(50<Jo)throw Jo=0,_d=null,Error(J(185));$a(e,n,r),(!(ke&2)||e!==ct)&&(e===ct&&(!(ke&2)&&(Wl|=n),ot===4&&mr(e,ht)),$t(e,r),n===1&&ke===0&&!(t.mode&1)&&(Zi=Ke()+500,Ul&&Fr()))}function $t(e,t){var n=e.callbackNode;Xw(e,t);var r=nl(e,e===ct?ht:0);if(r===0)n!==null&&Ah(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ah(n),t===1)e.tag===0?QS(ym.bind(null,e)):N0(ym.bind(null,e)),WS(function(){!(ke&6)&&Fr()}),n=null;else{switch(u0(r)){case 1:n=Yf;break;case 4:n=a0;break;case 16:n=tl;break;case 536870912:n=s0;break;default:n=tl}n=My(n,Ay.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ay(e,t){if(Is=-1,Ds=0,ke&6)throw Error(J(327));var n=e.callbackNode;if(Hi()&&e.callbackNode!==n)return null;var r=nl(e,e===ct?ht:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wl(e,r);else{t=r;var i=ke;ke|=2;var o=Oy();(ct!==e||ht!==t)&&(Nn=null,Zi=Ke()+500,Xr(e,t));do try{gb();break}catch(s){Ry(e,s)}while(1);dp(),vl.current=o,ke=i,nt!==null?t=0:(ct=null,ht=0,t=ot)}if(t!==0){if(t===2&&(i=dd(e),i!==0&&(r=i,t=zd(e,i))),t===1)throw n=Sa,Xr(e,0),mr(e,r),$t(e,Ke()),n;if(t===6)mr(e,r);else{if(i=e.current.alternate,!(r&30)&&!hb(i)&&(t=wl(e,r),t===2&&(o=dd(e),o!==0&&(r=o,t=zd(e,o))),t===1))throw n=Sa,Xr(e,0),mr(e,r),$t(e,Ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(J(345));case 2:zr(e,At,Nn);break;case 3:if(mr(e,r),(r&130023424)===r&&(t=Ap+500-Ke(),10<t)){if(nl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xd(zr.bind(null,e,At,Nn),t);break}zr(e,At,Nn);break;case 4:if(mr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-yn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pb(r/1960))-r,10<r){e.timeoutHandle=xd(zr.bind(null,e,At,Nn),r);break}zr(e,At,Nn);break;case 5:zr(e,At,Nn);break;default:throw Error(J(329))}}}return $t(e,Ke()),e.callbackNode===n?Ay.bind(null,e):null}function zd(e,t){var n=qo;return e.current.memoizedState.isDehydrated&&(Xr(e,t).flags|=256),e=wl(e,t),e!==2&&(t=At,At=n,t!==null&&jd(t)),e}function jd(e){At===null?At=e:At.push.apply(At,e)}function hb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Sn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t){for(t&=~kp,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yn(t),r=1<<n;e[n]=-1,t&=~r}}function ym(e){if(ke&6)throw Error(J(327));Hi();var t=nl(e,0);if(!(t&1))return $t(e,Ke()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=dd(e);r!==0&&(t=r,n=zd(e,r))}if(n===1)throw n=Sa,Xr(e,0),mr(e,t),$t(e,Ke()),n;if(n===6)throw Error(J(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,At,Nn),$t(e,Ke()),null}function Rp(e,t){var n=ke;ke|=1;try{return e(t)}finally{ke=n,ke===0&&(Zi=Ke()+500,Ul&&Fr())}}function ri(e){vr!==null&&vr.tag===0&&!(ke&6)&&Hi();var t=ke;ke|=1;var n=Yt.transition,r=Oe;try{if(Yt.transition=null,Oe=1,e)return e()}finally{Oe=r,Yt.transition=n,ke=t,!(ke&6)&&Fr()}}function Op(){Dt=$i.current,Ie($i)}function Xr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,VS(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(lp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:Ki(),Ie(Tt),Ie(St),vp();break;case 5:gp(r);break;case 4:Ki();break;case 13:Ie(Ve);break;case 19:Ie(Ve);break;case 10:fp(r.type._context);break;case 22:case 23:Op()}n=n.return}if(ct=e,nt=e=Rr(e.current,null),ht=Dt=t,ot=0,Sa=null,kp=Wl=ni=0,At=qo=null,Vr!==null){for(t=0;t<Vr.length;t++)if(n=Vr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Vr=null}return e}function Ry(e,t){do{var n=nt;try{if(dp(),Ms.current=gl,ml){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ml=!1}if(ti=0,ut=it=Ge=null,Wo=!1,ya=0,Cp.current=null,n===null||n.return===null){ot=1,Sa=t,nt=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=ht,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=om(a);if(w!==null){w.flags&=-257,am(w,a,s,o,t),w.mode&1&&im(o,u,t),t=w,l=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(l),t.updateQueue=g}else v.add(l);break e}else{if(!(t&1)){im(o,u,t),Tp();break e}l=Error(J(426))}}else if(_e&&s.mode&1){var m=om(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),am(m,a,s,o,t),up(Yi(l,s));break e}}o=l=Yi(l,s),ot!==4&&(ot=2),qo===null?qo=[o]:qo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=cy(o,l,t);Kh(o,p);break e;case 1:s=l;var h=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(kr===null||!kr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=dy(o,s,t);Kh(o,b);break e}}o=o.return}while(o!==null)}Py(n)}catch(C){t=C,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(1)}function Oy(){var e=vl.current;return vl.current=gl,e===null?gl:e}function Tp(){(ot===0||ot===3||ot===2)&&(ot=4),ct===null||!(ni&268435455)&&!(Wl&268435455)||mr(ct,ht)}function wl(e,t){var n=ke;ke|=2;var r=Oy();(ct!==e||ht!==t)&&(Nn=null,Xr(e,t));do try{mb();break}catch(i){Ry(e,i)}while(1);if(dp(),ke=n,vl.current=r,nt!==null)throw Error(J(261));return ct=null,ht=0,ot}function mb(){for(;nt!==null;)Ty(nt)}function gb(){for(;nt!==null&&!Uw();)Ty(nt)}function Ty(e){var t=Ly(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?Py(e):nt=t,Cp.current=null}function Py(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ub(n,t),n!==null){n.flags&=32767,nt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ot=6,nt=null;return}}else if(n=lb(n,t,Dt),n!==null){nt=n;return}if(t=t.sibling,t!==null){nt=t;return}nt=t=e}while(t!==null);ot===0&&(ot=5)}function zr(e,t,n){var r=Oe,i=Yt.transition;try{Yt.transition=null,Oe=1,vb(e,t,n,r)}finally{Yt.transition=i,Oe=r}return null}function vb(e,t,n,r){do Hi();while(vr!==null);if(ke&6)throw Error(J(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(J(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kw(e,o),e===ct&&(nt=ct=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,My(tl,function(){return Hi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Yt.transition,Yt.transition=null;var a=Oe;Oe=1;var s=ke;ke|=4,Cp.current=null,db(e,n),Cy(n,e),DS(vd),rl=!!gd,vd=gd=null,e.current=n,fb(n),Bw(),ke=s,Oe=a,Yt.transition=o}else e.current=n;if(os&&(os=!1,vr=e,xl=i),o=e.pendingLanes,o===0&&(kr=null),Ww(n.stateNode),$t(e,Ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yl)throw yl=!1,e=Dd,Dd=null,e;return xl&1&&e.tag!==0&&Hi(),o=e.pendingLanes,o&1?e===_d?Jo++:(Jo=0,_d=e):Jo=0,Fr(),null}function Hi(){if(vr!==null){var e=u0(xl),t=Yt.transition,n=Oe;try{if(Yt.transition=null,Oe=16>e?16:e,vr===null)var r=!1;else{if(e=vr,vr=null,xl=0,ke&6)throw Error(J(331));var i=ke;for(ke|=4,te=e.current;te!==null;){var o=te,a=o.child;if(te.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(te=u;te!==null;){var c=te;switch(c.tag){case 0:case 11:case 15:Go(8,c,o)}var d=c.child;if(d!==null)d.return=c,te=d;else for(;te!==null;){c=te;var f=c.sibling,w=c.return;if(Sy(c),c===u){te=null;break}if(f!==null){f.return=w,te=f;break}te=w}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}te=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,te=a;else e:for(;te!==null;){if(o=te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Go(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,te=p;break e}te=o.return}}var h=e.current;for(te=h;te!==null;){a=te;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,te=x;else e:for(a=h;te!==null;){if(s=te,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Vl(9,s)}}catch(C){Je(s,s.return,C)}if(s===a){te=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,te=b;break e}te=s.return}}if(ke=i,Fr(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Il,e)}catch{}r=!0}return r}finally{Oe=n,Yt.transition=t}}return!1}function xm(e,t,n){t=Yi(n,t),t=cy(e,t,1),e=Cr(e,t,1),t=Et(),e!==null&&($a(e,1,t),$t(e,t))}function Je(e,t,n){if(e.tag===3)xm(e,e,n);else for(;t!==null;){if(t.tag===3){xm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){e=Yi(n,e),e=dy(t,e,1),t=Cr(t,e,1),e=Et(),t!==null&&($a(t,1,e),$t(t,e));break}}t=t.return}}function yb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Et(),e.pingedLanes|=e.suspendedLanes&n,ct===e&&(ht&n)===n&&(ot===4||ot===3&&(ht&130023424)===ht&&500>Ke()-Ap?Xr(e,0):kp|=n),$t(e,t)}function $y(e,t){t===0&&(e.mode&1?(t=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):t=1);var n=Et();e=Gn(e,t),e!==null&&($a(e,t,n),$t(e,n))}function xb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$y(e,n)}function wb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(J(314))}r!==null&&r.delete(t),$y(e,n)}var Ly;Ly=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)Rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Rt=!1,sb(e,t,n);Rt=!!(e.flags&131072)}else Rt=!1,_e&&t.flags&1048576&&F0(t,cl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fs(e,t),e=t.pendingProps;var i=Ji(t,St.current);Bi(t,n),i=xp(null,t,r,e,i,n);var o=wp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(o=!0,ll(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hp(t),i.updater=Bl,t.stateNode=i,i._reactInternals=t,Ad(t,r,e,n),t=Td(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&sp(t),bt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bb(r),e=pn(r,e),i){case 0:t=Od(null,t,r,e,n);break e;case 1:t=um(null,t,r,e,n);break e;case 11:t=sm(null,t,r,e,n);break e;case 14:t=lm(null,t,r,pn(r.type,e),n);break e}throw Error(J(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pn(r,i),Od(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pn(r,i),um(e,t,r,i,n);case 3:e:{if(my(t),e===null)throw Error(J(387));r=t.pendingProps,o=t.memoizedState,i=o.element,z0(e,t),pl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yi(Error(J(423)),t),t=cm(e,t,r,n,i);break e}else if(r!==i){i=Yi(Error(J(424)),t),t=cm(e,t,r,n,i);break e}else for(_t=Er(t.stateNode.containerInfo.firstChild),Ut=t,_e=!0,gn=null,n=H0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){t=qn(e,t,n);break e}bt(e,t,r,n)}t=t.child}return t;case 5:return V0(t),e===null&&Ed(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,yd(r,i)?a=null:o!==null&&yd(r,o)&&(t.flags|=32),hy(e,t),bt(e,t,a,n),t.child;case 6:return e===null&&Ed(t),null;case 13:return gy(e,t,n);case 4:return mp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xi(t,null,r,n):bt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pn(r,i),sm(e,t,r,i,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ne(dl,r._currentValue),r._currentValue=a,o!==null)if(Sn(o.value,a)){if(o.children===i.children&&!Tt.current){t=qn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Un(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cd(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(J(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Cd(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}bt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Bi(t,n),i=en(i),r=r(i),t.flags|=1,bt(e,t,r,n),t.child;case 14:return r=t.type,i=pn(r,t.pendingProps),i=pn(r.type,i),lm(e,t,r,i,n);case 15:return fy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pn(r,i),Fs(e,t),t.tag=1,Pt(r)?(e=!0,ll(t)):e=!1,Bi(t,n),U0(t,r,i),Ad(t,r,i,n),Td(null,t,r,!0,e,n);case 19:return vy(e,t,n);case 22:return py(e,t,n)}throw Error(J(156,t.tag))};function My(e,t){return o0(e,t)}function Sb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(e,t,n,r){return new Sb(e,t,n,r)}function Pp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bb(e){if(typeof e=="function")return Pp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qf)return 11;if(e===Xf)return 14}return 2}function Rr(e,t){var n=e.alternate;return n===null?(n=Kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _s(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Pp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Si:return Kr(n.children,i,o,t);case Jf:a=8,i|=8;break;case Xc:return e=Kt(12,n,t,i|2),e.elementType=Xc,e.lanes=o,e;case Kc:return e=Kt(13,n,t,i),e.elementType=Kc,e.lanes=o,e;case Yc:return e=Kt(19,n,t,i),e.elementType=Yc,e.lanes=o,e;case Bv:return Gl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jv:a=10;break e;case Uv:a=9;break e;case Qf:a=11;break e;case Xf:a=14;break e;case dr:a=16,r=null;break e}throw Error(J(130,e==null?e:typeof e,""))}return t=Kt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Kr(e,t,n,r){return e=Kt(7,e,r,t),e.lanes=n,e}function Gl(e,t,n,r){return e=Kt(22,e,r,t),e.elementType=Bv,e.lanes=n,e.stateNode={isHidden:!1},e}function nc(e,t,n){return e=Kt(6,e,null,t),e.lanes=n,e}function rc(e,t,n){return t=Kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $p(e,t,n,r,i,o,a,s,l){return e=new Eb(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Kt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(o),e}function Cb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ny(e){if(!e)return $r;e=e._reactInternals;e:{if(ci(e)!==e||e.tag!==1)throw Error(J(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(J(171))}if(e.tag===1){var n=e.type;if(Pt(n))return M0(e,n,t)}return t}function Fy(e,t,n,r,i,o,a,s,l){return e=$p(n,r,!0,e,i,o,a,s,l),e.context=Ny(null),n=e.current,r=Et(),i=Ar(n),o=Un(r,i),o.callback=t??null,Cr(n,o,i),e.current.lanes=i,$a(e,i,r),$t(e,r),e}function ql(e,t,n,r){var i=t.current,o=Et(),a=Ar(i);return n=Ny(n),t.context===null?t.context=n:t.pendingContext=n,t=Un(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cr(i,t,a),e!==null&&(xn(e,i,a,o),Ls(e,i,a)),a}function Sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lp(e,t){wm(e,t),(e=e.alternate)&&wm(e,t)}function kb(){return null}var Iy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mp(e){this._internalRoot=e}Jl.prototype.render=Mp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));ql(e,t,null,null)};Jl.prototype.unmount=Mp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ri(function(){ql(null,e,null,null)}),t[Wn]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=f0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hr.length&&t!==0&&t<hr[n].priority;n++);hr.splice(n,0,e),n===0&&h0(e)}};function Np(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sm(){}function Ab(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Sl(a);o.call(u)}}var a=Fy(t,r,e,0,null,!1,!1,"",Sm);return e._reactRootContainer=a,e[Wn]=a.current,pa(e.nodeType===8?e.parentNode:e),ri(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Sl(l);s.call(u)}}var l=$p(e,0,!1,null,null,!1,!1,"",Sm);return e._reactRootContainer=l,e[Wn]=l.current,pa(e.nodeType===8?e.parentNode:e),ri(function(){ql(t,l,n,r)}),l}function Xl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Sl(a);s.call(l)}}ql(t,a,e,i)}else a=Ab(n,t,e,i,r);return Sl(a)}c0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Io(t.pendingLanes);n!==0&&(Zf(t,n|1),$t(t,Ke()),!(ke&6)&&(Zi=Ke()+500,Fr()))}break;case 13:ri(function(){var r=Gn(e,1);if(r!==null){var i=Et();xn(r,e,1,i)}}),Lp(e,1)}};ep=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=Et();xn(t,e,134217728,n)}Lp(e,134217728)}};d0=function(e){if(e.tag===13){var t=Ar(e),n=Gn(e,t);if(n!==null){var r=Et();xn(n,e,t,r)}Lp(e,t)}};f0=function(){return Oe};p0=function(e,t){var n=Oe;try{return Oe=e,t()}finally{Oe=n}};ld=function(e,t,n){switch(t){case"input":if(td(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jl(r);if(!i)throw Error(J(90));Vv(r),td(r,i)}}}break;case"textarea":Gv(e,n);break;case"select":t=n.value,t!=null&&_i(e,!!n.multiple,t,!1)}};Zv=Rp;e0=ri;var Rb={usingClientEntryPoint:!1,Events:[Ma,ki,jl,Kv,Yv,Rp]},Oo={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ob={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=r0(e),e===null?null:e.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||kb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{Il=as.inject(Ob),On=as}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rb;Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(t))throw Error(J(200));return Cb(e,t,null,n)};Ht.createRoot=function(e,t){if(!Np(e))throw Error(J(299));var n=!1,r="",i=Iy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$p(e,1,!1,null,null,n,!1,r,i),e[Wn]=t.current,pa(e.nodeType===8?e.parentNode:e),new Mp(t)};Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=r0(t),e=e===null?null:e.stateNode,e};Ht.flushSync=function(e){return ri(e)};Ht.hydrate=function(e,t,n){if(!Ql(t))throw Error(J(200));return Xl(null,e,t,!0,n)};Ht.hydrateRoot=function(e,t,n){if(!Np(e))throw Error(J(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Iy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Fy(t,null,e,1,n??null,i,!1,o,a),e[Wn]=t.current,pa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Jl(t)};Ht.render=function(e,t,n){if(!Ql(t))throw Error(J(200));return Xl(null,e,t,!1,n)};Ht.unmountComponentAtNode=function(e){if(!Ql(e))throw Error(J(40));return e._reactRootContainer?(ri(function(){Xl(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1};Ht.unstable_batchedUpdates=Rp;Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ql(n))throw Error(J(200));if(e==null||e._reactInternals===void 0)throw Error(J(38));return Xl(e,t,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ht})(kw);const Tb=Ov(Ks);var bm=Ks;qc.createRoot=bm.createRoot,qc.hydrateRoot=bm.hydrateRoot;var ii={},Pb={get exports(){return ii},set exports(e){ii=e}},Te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dt=typeof Symbol=="function"&&Symbol.for,Fp=dt?Symbol.for("react.element"):60103,Ip=dt?Symbol.for("react.portal"):60106,Kl=dt?Symbol.for("react.fragment"):60107,Yl=dt?Symbol.for("react.strict_mode"):60108,Zl=dt?Symbol.for("react.profiler"):60114,eu=dt?Symbol.for("react.provider"):60109,tu=dt?Symbol.for("react.context"):60110,Dp=dt?Symbol.for("react.async_mode"):60111,nu=dt?Symbol.for("react.concurrent_mode"):60111,ru=dt?Symbol.for("react.forward_ref"):60112,iu=dt?Symbol.for("react.suspense"):60113,$b=dt?Symbol.for("react.suspense_list"):60120,ou=dt?Symbol.for("react.memo"):60115,au=dt?Symbol.for("react.lazy"):60116,Lb=dt?Symbol.for("react.block"):60121,Mb=dt?Symbol.for("react.fundamental"):60117,Nb=dt?Symbol.for("react.responder"):60118,Fb=dt?Symbol.for("react.scope"):60119;function Wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fp:switch(e=e.type,e){case Dp:case nu:case Kl:case Zl:case Yl:case iu:return e;default:switch(e=e&&e.$$typeof,e){case tu:case ru:case au:case ou:case eu:return e;default:return t}}case Ip:return t}}}function Dy(e){return Wt(e)===nu}Te.AsyncMode=Dp;Te.ConcurrentMode=nu;Te.ContextConsumer=tu;Te.ContextProvider=eu;Te.Element=Fp;Te.ForwardRef=ru;Te.Fragment=Kl;Te.Lazy=au;Te.Memo=ou;Te.Portal=Ip;Te.Profiler=Zl;Te.StrictMode=Yl;Te.Suspense=iu;Te.isAsyncMode=function(e){return Dy(e)||Wt(e)===Dp};Te.isConcurrentMode=Dy;Te.isContextConsumer=function(e){return Wt(e)===tu};Te.isContextProvider=function(e){return Wt(e)===eu};Te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fp};Te.isForwardRef=function(e){return Wt(e)===ru};Te.isFragment=function(e){return Wt(e)===Kl};Te.isLazy=function(e){return Wt(e)===au};Te.isMemo=function(e){return Wt(e)===ou};Te.isPortal=function(e){return Wt(e)===Ip};Te.isProfiler=function(e){return Wt(e)===Zl};Te.isStrictMode=function(e){return Wt(e)===Yl};Te.isSuspense=function(e){return Wt(e)===iu};Te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Kl||e===nu||e===Zl||e===Yl||e===iu||e===$b||typeof e=="object"&&e!==null&&(e.$$typeof===au||e.$$typeof===ou||e.$$typeof===eu||e.$$typeof===tu||e.$$typeof===ru||e.$$typeof===Mb||e.$$typeof===Nb||e.$$typeof===Fb||e.$$typeof===Lb)};Te.typeOf=Wt;(function(e){e.exports=Te})(Pb);function Ib(e){function t(B,q,Y,ie,M){for(var me=0,Z=0,Le=0,be=0,he,ue,De=0,Ye=0,fe,je=fe=he=0,ye=0,Ue=0,Be=0,xe=0,$e=Y.length,Qe=$e-1,Ze,se="",He="",vo="",fi="",bn;ye<$e;){if(ue=Y.charCodeAt(ye),ye===Qe&&Z+be+Le+me!==0&&(Z!==0&&(ue=Z===47?10:47),be=Le=me=0,$e++,Qe++),Z+be+Le+me===0){if(ye===Qe&&(0<Ue&&(se=se.replace(f,"")),0<se.trim().length)){switch(ue){case 32:case 9:case 59:case 13:case 10:break;default:se+=Y.charAt(ye)}ue=59}switch(ue){case 123:for(se=se.trim(),he=se.charCodeAt(0),fe=1,xe=++ye;ye<$e;){switch(ue=Y.charCodeAt(ye)){case 123:fe++;break;case 125:fe--;break;case 47:switch(ue=Y.charCodeAt(ye+1)){case 42:case 47:e:{for(je=ye+1;je<Qe;++je)switch(Y.charCodeAt(je)){case 47:if(ue===42&&Y.charCodeAt(je-1)===42&&ye+2!==je){ye=je+1;break e}break;case 10:if(ue===47){ye=je+1;break e}}ye=je}}break;case 91:ue++;case 40:ue++;case 34:case 39:for(;ye++<Qe&&Y.charCodeAt(ye)!==ue;);}if(fe===0)break;ye++}switch(fe=Y.substring(xe,ye),he===0&&(he=(se=se.replace(d,"").trim()).charCodeAt(0)),he){case 64:switch(0<Ue&&(se=se.replace(f,"")),ue=se.charCodeAt(1),ue){case 100:case 109:case 115:case 45:Ue=q;break;default:Ue=F}if(fe=t(q,Ue,fe,ue,M+1),xe=fe.length,0<I&&(Ue=n(F,se,Be),bn=s(3,fe,Ue,q,T,O,xe,ue,M,ie),se=Ue.join(""),bn!==void 0&&(xe=(fe=bn.trim()).length)===0&&(ue=0,fe="")),0<xe)switch(ue){case 115:se=se.replace(k,a);case 100:case 109:case 45:fe=se+"{"+fe+"}";break;case 107:se=se.replace(h,"$1 $2"),fe=se+"{"+fe+"}",fe=N===1||N===2&&o("@"+fe,3)?"@-webkit-"+fe+"@"+fe:"@"+fe;break;default:fe=se+fe,ie===112&&(fe=(He+=fe,""))}else fe="";break;default:fe=t(q,n(q,se,Be),fe,ie,M+1)}vo+=fe,fe=Be=Ue=je=he=0,se="",ue=Y.charCodeAt(++ye);break;case 125:case 59:if(se=(0<Ue?se.replace(f,""):se).trim(),1<(xe=se.length))switch(je===0&&(he=se.charCodeAt(0),he===45||96<he&&123>he)&&(xe=(se=se.replace(" ",":")).length),0<I&&(bn=s(1,se,q,B,T,O,He.length,ie,M,ie))!==void 0&&(xe=(se=bn.trim()).length)===0&&(se="\0\0"),he=se.charCodeAt(0),ue=se.charCodeAt(1),he){case 0:break;case 64:if(ue===105||ue===99){fi+=se+Y.charAt(ye);break}default:se.charCodeAt(xe-1)!==58&&(He+=i(se,he,ue,se.charCodeAt(2)))}Be=Ue=je=he=0,se="",ue=Y.charCodeAt(++ye)}}switch(ue){case 13:case 10:Z===47?Z=0:1+he===0&&ie!==107&&0<se.length&&(Ue=1,se+="\0"),0<I*G&&s(0,se,q,B,T,O,He.length,ie,M,ie),O=1,T++;break;case 59:case 125:if(Z+be+Le+me===0){O++;break}default:switch(O++,Ze=Y.charAt(ye),ue){case 9:case 32:if(be+me+Z===0)switch(De){case 44:case 58:case 9:case 32:Ze="";break;default:ue!==32&&(Ze=" ")}break;case 0:Ze="\\0";break;case 12:Ze="\\f";break;case 11:Ze="\\v";break;case 38:be+Z+me===0&&(Ue=Be=1,Ze="\f"+Ze);break;case 108:if(be+Z+me+L===0&&0<je)switch(ye-je){case 2:De===112&&Y.charCodeAt(ye-3)===58&&(L=De);case 8:Ye===111&&(L=Ye)}break;case 58:be+Z+me===0&&(je=ye);break;case 44:Z+Le+be+me===0&&(Ue=1,Ze+="\r");break;case 34:case 39:Z===0&&(be=be===ue?0:be===0?ue:be);break;case 91:be+Z+Le===0&&me++;break;case 93:be+Z+Le===0&&me--;break;case 41:be+Z+me===0&&Le--;break;case 40:if(be+Z+me===0){if(he===0)switch(2*De+3*Ye){case 533:break;default:he=1}Le++}break;case 64:Z+Le+be+me+je+fe===0&&(fe=1);break;case 42:case 47:if(!(0<be+me+Le))switch(Z){case 0:switch(2*ue+3*Y.charCodeAt(ye+1)){case 235:Z=47;break;case 220:xe=ye,Z=42}break;case 42:ue===47&&De===42&&xe+2!==ye&&(Y.charCodeAt(xe+2)===33&&(He+=Y.substring(xe,ye+1)),Ze="",Z=0)}}Z===0&&(se+=Ze)}Ye=De,De=ue,ye++}if(xe=He.length,0<xe){if(Ue=q,0<I&&(bn=s(2,He,Ue,B,T,O,xe,ie,M,ie),bn!==void 0&&(He=bn).length===0))return fi+He+vo;if(He=Ue.join(",")+"{"+He+"}",N*L!==0){switch(N!==2||o(He,2)||(L=0),L){case 111:He=He.replace(b,":-moz-$1")+He;break;case 112:He=He.replace(x,"::-webkit-input-$1")+He.replace(x,"::-moz-$1")+He.replace(x,":-ms-input-$1")+He}L=0}}return fi+He+vo}function n(B,q,Y){var ie=q.trim().split(m);q=ie;var M=ie.length,me=B.length;switch(me){case 0:case 1:var Z=0;for(B=me===0?"":B[0]+" ";Z<M;++Z)q[Z]=r(B,q[Z],Y).trim();break;default:var Le=Z=0;for(q=[];Z<M;++Z)for(var be=0;be<me;++be)q[Le++]=r(B[be]+" ",ie[Z],Y).trim()}return q}function r(B,q,Y){var ie=q.charCodeAt(0);switch(33>ie&&(ie=(q=q.trim()).charCodeAt(0)),ie){case 38:return q.replace(p,"$1"+B.trim());case 58:return B.trim()+q.replace(p,"$1"+B.trim());default:if(0<1*Y&&0<q.indexOf("\f"))return q.replace(p,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+q}function i(B,q,Y,ie){var M=B+";",me=2*q+3*Y+4*ie;if(me===944){B=M.indexOf(":",9)+1;var Z=M.substring(B,M.length-1).trim();return Z=M.substring(0,B).trim()+Z+";",N===1||N===2&&o(Z,1)?"-webkit-"+Z+Z:Z}if(N===0||N===2&&!o(M,1))return M;switch(me){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(Q,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return Z=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Z+"-webkit-"+M+"-ms-flex-pack"+Z+M;case 1005:return v.test(M)?M.replace(w,":-webkit-")+M.replace(w,":-moz-")+M:M;case 1e3:switch(Z=M.substring(13).trim(),q=Z.indexOf("-")+1,Z.charCodeAt(0)+Z.charCodeAt(q)){case 226:Z=M.replace(C,"tb");break;case 232:Z=M.replace(C,"tb-rl");break;case 220:Z=M.replace(C,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+Z+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(q=(M=B).length-10,Z=(M.charCodeAt(q)===33?M.substring(0,q):M).substring(B.indexOf(":",7)+1).trim(),me=Z.charCodeAt(0)+(Z.charCodeAt(7)|0)){case 203:if(111>Z.charCodeAt(8))break;case 115:M=M.replace(Z,"-webkit-"+Z)+";"+M;break;case 207:case 102:M=M.replace(Z,"-webkit-"+(102<me?"inline-":"")+"box")+";"+M.replace(Z,"-webkit-"+Z)+";"+M.replace(Z,"-ms-"+Z+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return Z=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+Z+"-ms-flex-"+Z+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(P,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(P,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(D.test(B)===!0)return(Z=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?i(B.replace("stretch","fill-available"),q,Y,ie).replace(":fill-available",":stretch"):M.replace(Z,"-webkit-"+Z)+M.replace(Z,"-moz-"+Z.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,Y+ie===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+M}return M}function o(B,q){var Y=B.indexOf(q===1?":":"{"),ie=B.substring(0,q!==3?Y:10);return Y=B.substring(Y+1,B.length-1),K(q!==2?ie:ie.replace(H,"$1"),Y,q)}function a(B,q){var Y=i(q,q.charCodeAt(0),q.charCodeAt(1),q.charCodeAt(2));return Y!==q+";"?Y.replace(R," or ($1)").substring(4):"("+q+")"}function s(B,q,Y,ie,M,me,Z,Le,be,he){for(var ue=0,De=q,Ye;ue<I;++ue)switch(Ye=V[ue].call(c,B,De,Y,ie,M,me,Z,Le,be,he)){case void 0:case!1:case!0:case null:break;default:De=Ye}if(De!==q)return De}function l(B){switch(B){case void 0:case null:I=V.length=0;break;default:if(typeof B=="function")V[I++]=B;else if(typeof B=="object")for(var q=0,Y=B.length;q<Y;++q)l(B[q]);else G=!!B|0}return l}function u(B){return B=B.prefix,B!==void 0&&(K=null,B?typeof B!="function"?N=1:(N=2,K=B):N=0),u}function c(B,q){var Y=B;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),oe=Y,Y=[oe],0<I){var ie=s(-1,q,Y,Y,T,O,0,0,0,0);ie!==void 0&&typeof ie=="string"&&(q=ie)}var M=t(F,Y,q,0,0);return 0<I&&(ie=s(-2,M,Y,Y,T,O,M.length,0,0,0),ie!==void 0&&(M=ie)),oe="",L=0,O=T=1,M}var d=/^\0+/g,f=/[\0\r\f]/g,w=/: */g,v=/zoo|gra/,g=/([,: ])(transform)/g,m=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,b=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,P=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,O=1,T=1,L=0,N=1,F=[],V=[],I=0,K=null,G=0,oe="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var _y={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Db(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var _b=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Em=Db(function(e){return _b.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),_p=ii,zb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ub={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zp={};zp[_p.ForwardRef]=Ub;zp[_p.Memo]=zy;function Cm(e){return _p.isMemo(e)?zy:zp[e.$$typeof]||zb}var Bb=Object.defineProperty,Hb=Object.getOwnPropertyNames,km=Object.getOwnPropertySymbols,Vb=Object.getOwnPropertyDescriptor,Wb=Object.getPrototypeOf,Am=Object.prototype;function jy(e,t,n){if(typeof t!="string"){if(Am){var r=Wb(t);r&&r!==Am&&jy(e,r,n)}var i=Hb(t);km&&(i=i.concat(km(t)));for(var o=Cm(e),a=Cm(t),s=0;s<i.length;++s){var l=i[s];if(!jb[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var u=Vb(t,l);try{Bb(e,l,u)}catch{}}}}return e}var Gb=jy;function vn(){return(vn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Rm=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ud=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ii.typeOf(e)},bl=Object.freeze([]),Or=Object.freeze({});function eo(e){return typeof e=="function"}function Om(e){return e.displayName||e.name||"Component"}function jp(e){return e&&typeof e.styledComponentId=="string"}var to=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Up=typeof window<"u"&&"HTMLElement"in window,qb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Jb={};function oi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Qb=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&oi(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),zs=new Map,El=new Map,Qo=1,ss=function(e){if(zs.has(e))return zs.get(e);for(;El.has(Qo);)Qo++;var t=Qo++;return zs.set(e,t),El.set(t,e),t},Xb=function(e){return El.get(e)},Kb=function(e,t){t>=Qo&&(Qo=t+1),zs.set(e,t),El.set(t,e)},Yb="style["+to+'][data-styled-version="5.3.9"]',Zb=new RegExp("^"+to+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),eE=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},tE=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(Zb);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(Kb(u,l),eE(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},nE=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Uy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(to))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(to,"active"),r.setAttribute("data-styled-version","5.3.9");var a=nE();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},rE=function(){function e(n){var r=this.element=Uy(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}oi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),iE=function(){function e(n){var r=this.element=Uy(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),oE=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Tm=Up,aE={isServer:!Up,useCSSOMInjection:!qb},Cl=function(){function e(n,r,i){n===void 0&&(n=Or),r===void 0&&(r={}),this.options=vn({},aE,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Up&&Tm&&(Tm=!1,function(o){for(var a=document.querySelectorAll(Yb),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(to)!=="active"&&(tE(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return ss(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(vn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new oE(a):o?new rE(a):new iE(a),new Qb(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ss(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ss(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ss(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=Xb(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var c=to+".g"+a+'[id="'+s+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),sE=/(a)(d)/gi,Pm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Pm(t%52)+n;return(Pm(t%52)+n).replace(sE,"$1-$2")}var Li=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},By=function(e){return Li(5381,e)};function Hy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(eo(n)&&!jp(n))return!1}return!0}var lE=By("5.3.9"),uE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hy(t),this.componentId=n,this.baseHash=Li(lE,n),this.baseStyle=r,Cl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=ai(this.rules,t,n,r).join(""),s=Bd(Li(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,c=Li(this.baseHash,r.hash),d="",f=0;f<u;f++){var w=this.rules[f];if(typeof w=="string")d+=w;else if(w){var v=ai(w,t,n,r),g=Array.isArray(v)?v.join(""):v;c=Li(c,g+f),d+=g}}if(d){var m=Bd(c>>>0);if(!n.hasNameForId(i,m)){var p=r(d,"."+m,void 0,i);n.insertRules(i,m,p)}o.push(m)}}return o.join(" ")},e}(),cE=/^\s*\/\/.*$/gm,dE=[":","[",".","#"];function fE(e){var t,n,r,i,o=e===void 0?Or:e,a=o.options,s=a===void 0?Or:a,l=o.plugins,u=l===void 0?bl:l,c=new Ib(s),d=[],f=function(g){function m(p){if(p)try{g(p+"}")}catch{}}return function(p,h,x,b,C,k,R,P,H,D){switch(p){case 1:if(H===0&&h.charCodeAt(0)===64)return g(h+";"),"";break;case 2:if(P===0)return h+"/*|*/";break;case 3:switch(P){case 102:case 112:return g(x[0]+h),"";default:return h+(D===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(m)}}}(function(g){d.push(g)}),w=function(g,m,p){return m===0&&dE.indexOf(p[n.length])!==-1||p.match(i)?g:"."+t};function v(g,m,p,h){h===void 0&&(h="&");var x=g.replace(cE,""),b=m&&p?p+" "+m+" { "+x+" }":x;return t=h,n=m,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!m?"":m,b)}return c.use([].concat(u,[function(g,m,p){g===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,w))},f,function(g){if(g===-2){var m=d;return d=[],m}}])),v.hash=u.length?u.reduce(function(g,m){return m.name||oi(15),Li(g,m.name)},5381).toString():"",v}var Vy=X.createContext();Vy.Consumer;var Wy=X.createContext(),pE=(Wy.Consumer,new Cl),Hd=fE();function Gy(){return E.useContext(Vy)||pE}function qy(){return E.useContext(Wy)||Hd}var hE=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Hd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return oi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Hd),this.name+t.hash},e}(),mE=/([A-Z])/,gE=/([A-Z])/g,vE=/^ms-/,yE=function(e){return"-"+e.toLowerCase()};function $m(e){return mE.test(e)?e.replace(gE,yE).replace(vE,"-ms-"):e}var Lm=function(e){return e==null||e===!1||e===""};function ai(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=ai(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Lm(e))return"";if(jp(e))return"."+e.styledComponentId;if(eo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return ai(l,t,n,r)}var u;return e instanceof hE?n?(e.inject(n,r),e.getName(r)):e:Ud(e)?function c(d,f){var w,v,g=[];for(var m in d)d.hasOwnProperty(m)&&!Lm(d[m])&&(Array.isArray(d[m])&&d[m].isCss||eo(d[m])?g.push($m(m)+":",d[m],";"):Ud(d[m])?g.push.apply(g,c(d[m],m)):g.push($m(m)+": "+(w=m,(v=d[m])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||w in _y?String(v).trim():v+"px")+";"));return f?[f+" {"].concat(g,["}"]):g}(e):e.toString()}var Mm=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Jy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return eo(e)||Ud(e)?Mm(ai(Rm(bl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Mm(ai(Rm(e,n)))}var Qy=function(e,t,n){return n===void 0&&(n=Or),e.theme!==n.theme&&e.theme||t||n.theme},xE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wE=/(^-|-$)/g;function ic(e){return e.replace(xE,"-").replace(wE,"")}var Xy=function(e){return Bd(By(e)>>>0)};function ls(e){return typeof e=="string"&&!0}var Vd=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},SE=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function bE(e,t,n){var r=e[n];Vd(t)&&Vd(r)?Ky(r,t):e[n]=t}function Ky(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Vd(a))for(var s in a)SE(s)&&bE(e,a[s],s)}return e}var ba=X.createContext();ba.Consumer;function EE(e){var t=E.useContext(ba),n=E.useMemo(function(){return function(r,i){if(!r)return oi(14);if(eo(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?oi(8):i?vn({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?X.createElement(ba.Provider,{value:n},e.children):null}var oc={};function Yy(e,t,n){var r=jp(e),i=!ls(e),o=t.attrs,a=o===void 0?bl:o,s=t.componentId,l=s===void 0?function(h,x){var b=typeof h!="string"?"sc":ic(h);oc[b]=(oc[b]||0)+1;var C=b+"-"+Xy("5.3.9"+b+oc[b]);return x?x+"-"+C:C}(t.displayName,t.parentComponentId):s,u=t.displayName,c=u===void 0?function(h){return ls(h)?"styled."+h:"Styled("+Om(h)+")"}(e):u,d=t.displayName&&t.componentId?ic(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(h,x,b){return e.shouldForwardProp(h,x,b)&&t.shouldForwardProp(h,x,b)}:e.shouldForwardProp);var v,g=new uE(n,d,r?e.componentStyle:void 0),m=g.isStatic&&a.length===0,p=function(h,x){return function(b,C,k,R){var P=b.attrs,H=b.componentStyle,D=b.defaultProps,Q=b.foldedComponentIds,O=b.shouldForwardProp,T=b.styledComponentId,L=b.target,N=function(ie,M,me){ie===void 0&&(ie=Or);var Z=vn({},M,{theme:ie}),Le={};return me.forEach(function(be){var he,ue,De,Ye=be;for(he in eo(Ye)&&(Ye=Ye(Z)),Ye)Z[he]=Le[he]=he==="className"?(ue=Le[he],De=Ye[he],ue&&De?ue+" "+De:ue||De):Ye[he]}),[Z,Le]}(Qy(C,E.useContext(ba),D)||Or,C,P),F=N[0],V=N[1],I=function(ie,M,me,Z){var Le=Gy(),be=qy(),he=M?ie.generateAndInjectStyles(Or,Le,be):ie.generateAndInjectStyles(me,Le,be);return he}(H,R,F),K=k,G=V.$as||C.$as||V.as||C.as||L,oe=ls(G),B=V!==C?vn({},C,{},V):C,q={};for(var Y in B)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?q.as=B[Y]:(O?O(Y,Em,G):!oe||Em(Y))&&(q[Y]=B[Y]));return C.style&&V.style!==C.style&&(q.style=vn({},C.style,{},V.style)),q.className=Array.prototype.concat(Q,T,I!==T?I:null,C.className,V.className).filter(Boolean).join(" "),q.ref=K,E.createElement(G,q)}(v,h,x,m)};return p.displayName=c,(v=X.forwardRef(p)).attrs=f,v.componentStyle=g,v.displayName=c,v.shouldForwardProp=w,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):bl,v.styledComponentId=d,v.target=r?e.target:e,v.withComponent=function(h){var x=t.componentId,b=function(k,R){if(k==null)return{};var P,H,D={},Q=Object.keys(k);for(H=0;H<Q.length;H++)P=Q[H],R.indexOf(P)>=0||(D[P]=k[P]);return D}(t,["componentId"]),C=x&&x+"-"+(ls(h)?h:ic(Om(h)));return Yy(h,vn({},b,{attrs:f,componentId:C}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?Ky({},e.defaultProps,h):h}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&Gb(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Wd=function(e){return function t(n,r,i){if(i===void 0&&(i=Or),!ii.isValidElementType(r))return oi(1,String(r));var o=function(){return n(r,i,Jy.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,vn({},i,{},a))},o.attrs=function(a){return t(n,r,vn({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Yy,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Wd[e]=Wd(e)});var CE=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Hy(n),Cl.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(ai(this.rules,r,i,o).join(""),""),s=this.componentId+n;i.insertRules(s,s,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Cl.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function kE(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Jy.apply(void 0,[e].concat(n)),o="sc-global-"+Xy(JSON.stringify(i)),a=new CE(i,o);function s(u){var c=Gy(),d=qy(),f=E.useContext(ba),w=E.useRef(c.allocateGSInstance(o)).current;return c.server&&l(w,u,c,f,d),E.useLayoutEffect(function(){if(!c.server)return l(w,u,c,f,d),function(){return a.removeStyles(w,c)}},[w,u,c,f,d]),null}function l(u,c,d,f,w){if(a.isStatic)a.renderStyles(u,Jb,d,w);else{var v=vn({},c,{theme:Qy(c,f,s.defaultProps)});a.renderStyles(u,v,d,w)}}return X.memo(s)}const A=Wd,AE={title:"main",fonts:{extrasmall:16,small:18,medium:20,large:26,extralarge:36},colors:{primary:{light:"#f08",normal:"#2EB2B7",dark:"#01fe87"},secondary:{light:"#E08952",normal:"#FF8233",dark:"#AD561F"},auxiliary:{success:{normal:"#34C759",dark:"#45B661"},attention:{normal:"#FFEB3B",dark:"#CCB700"},error:{normal:"#D92626",dark:"#981B1B"}},foreground:"#D9D9D9",middleground:"#f5f5f5",background:"#292E2E",text:{title:"#000",content:"#626262",highlight:"#FFF",TitleSubArticles:"#114676"}}},RE=E.createContext({}),OE=({children:e})=>{const[t,n]=E.useState(AE);return S(RE.Provider,{value:{theme:t},children:S(EE,{theme:t,children:e})})};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}var et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(et||(et={}));const Nm="popstate";function TE(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Ea("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jn(i)}return $E(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function no(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function PE(){return Math.random().toString(36).substr(2,8)}function Fm(e,t){return{usr:e.state,key:e.key,idx:t}}function Ea(e,t,n,r){return n===void 0&&(n=null),Ee({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||r||PE()})}function Jn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $E(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=et.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Ee({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){s=et.Pop;let m=c(),p=m==null?null:m-u;u=m,l&&l({action:s,location:g.location,delta:p})}function f(m,p){s=et.Push;let h=Ea(g.location,m,p);n&&n(h,m),u=c()+1;let x=Fm(h,u),b=g.createHref(h);try{a.pushState(x,"",b)}catch{i.location.assign(b)}o&&l&&l({action:s,location:g.location,delta:1})}function w(m,p){s=et.Replace;let h=Ea(g.location,m,p);n&&n(h,m),u=c();let x=Fm(h,u),b=g.createHref(h);a.replaceState(x,"",b),o&&l&&l({action:s,location:g.location,delta:0})}function v(m){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof m=="string"?m:Jn(m);return ge(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let g={get action(){return s},get location(){return e(i,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Nm,d),l=m,()=>{i.removeEventListener(Nm,d),l=null}},createHref(m){return t(i,m)},createURL:v,encodeLocation(m){let p=v(m);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:w,go(m){return a.go(m)}};return g}var rt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rt||(rt={}));const LE=new Set(["lazy","caseSensitive","path","id","index","children"]);function ME(e){return e.index===!0}function Zy(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],s=typeof i.id=="string"?i.id:a.join("-");if(ge(i.index!==!0||!i.children,"Cannot specify children on an index route"),ge(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),ME(i)){let l=Ee({},i,{hasErrorBoundary:t(i),id:s});return r[s]=l,l}else{let l=Ee({},i,{id:s,hasErrorBoundary:t(i),children:void 0});return r[s]=l,i.children&&(l.children=Zy(i.children,t,a,r)),l}})}function Mi(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Kn(t):t,i=Fa(r.pathname||"/",n);if(i==null)return null;let o=e1(e);NE(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=HE(o[s],GE(i));return a}function e1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Bn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),e1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:UE(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of t1(o.path))i(o,a,l)}),t}function t1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=t1(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function NE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:BE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const FE=/^:\w+$/,IE=3,DE=2,_E=1,zE=10,jE=-2,Im=e=>e==="*";function UE(e,t){let n=e.split("/"),r=n.length;return n.some(Im)&&(r+=jE),t&&(r+=DE),n.filter(i=>!Im(i)).reduce((i,o)=>i+(FE.test(o)?IE:o===""?_E:zE),r)}function BE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function HE(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=VE({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;o.push({params:r,pathname:Bn([i,c.pathname]),pathnameBase:XE(Bn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Bn([i,c.pathnameBase]))}return o}function VE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=WE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=s[d]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=qE(s[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function WE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),no(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function GE(e){try{return decodeURI(e)}catch(t){return no(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qE(e,t){try{return decodeURIComponent(e)}catch(n){return no(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Fa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function JE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Kn(e):e;return{pathname:n?n.startsWith("/")?n:QE(n,t):t,search:KE(r),hash:YE(i)}}function QE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ac(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function su(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Kn(e):(i=Ee({},e),ge(!i.pathname||!i.pathname.includes("?"),ac("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),ac("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),ac("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let d=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}s=d>=0?t[d]:"/"}let l=JE(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),XE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),KE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,YE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Hp{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function n1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const r1=["post","put","patch","delete"],ZE=new Set(r1),eC=["get",...r1],tC=new Set(eC),nC=new Set([301,302,303,307,308]),rC=new Set([307,308]),sc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},iC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Dm={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},i1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,o1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oC=!o1,aC=e=>!!e.hasErrorBoundary;function sC(e){ge(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||aC,n={},r=Zy(e.routes,t,void 0,n),i,o=Ee({v7_normalizeFormMethod:!1},e.future),a=null,s=new Set,l=null,u=null,c=null,d=e.hydrationData!=null,f=Mi(r,e.history.location,e.basename),w=null;if(f==null){let _=kn(404,{pathname:e.history.location.pathname}),{matches:j,route:W}=Vm(r);f=j,w={[W.id]:_}}let v=!f.some(_=>_.route.lazy)&&(!f.some(_=>_.route.loader)||e.hydrationData!=null),g,m={historyAction:e.history.action,location:e.history.location,matches:f,initialized:v,navigation:sc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},p=et.Pop,h=!1,x,b=!1,C=!1,k=[],R=[],P=new Map,H=0,D=-1,Q=new Map,O=new Set,T=new Map,L=new Map,N=new Map,F=!1;function V(){return a=e.history.listen(_=>{let{action:j,location:W,delta:ne}=_;if(F){F=!1;return}no(N.size===0||ne!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let re=Ze({currentLocation:m.location,nextLocation:W,historyAction:j});if(re&&ne!=null){F=!0,e.history.go(ne*-1),Qe(re,{state:"blocked",location:W,proceed(){Qe(re,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),e.history.go(ne)},reset(){$e(re),G({blockers:new Map(g.state.blockers)})}});return}return Y(j,W)}),m.initialized||Y(et.Pop,m.location),g}function I(){a&&a(),s.clear(),x&&x.abort(),m.fetchers.forEach((_,j)=>fe(j)),m.blockers.forEach((_,j)=>$e(j))}function K(_){return s.add(_),()=>s.delete(_)}function G(_){m=Ee({},m,_),s.forEach(j=>j(m))}function oe(_,j){var W,ne;let re=m.actionData!=null&&m.navigation.formMethod!=null&&Fn(m.navigation.formMethod)&&m.navigation.state==="loading"&&((W=_.state)==null?void 0:W._isRedirect)!==!0,ce;j.actionData?Object.keys(j.actionData).length>0?ce=j.actionData:ce=null:re?ce=m.actionData:ce=null;let de=j.loaderData?Hm(m.loaderData,j.loaderData,j.matches||[],j.errors):m.loaderData;for(let[ae]of N)$e(ae);let pe=h===!0||m.navigation.formMethod!=null&&Fn(m.navigation.formMethod)&&((ne=_.state)==null?void 0:ne._isRedirect)!==!0;i&&(r=i,i=void 0),G(Ee({},j,{actionData:ce,loaderData:de,historyAction:p,location:_,initialized:!0,navigation:sc,revalidation:"idle",restoreScrollPosition:fi(_,j.matches||m.matches),preventScrollReset:pe,blockers:new Map(m.blockers)})),b||p===et.Pop||(p===et.Push?e.history.push(_,_.state):p===et.Replace&&e.history.replace(_,_.state)),p=et.Pop,h=!1,b=!1,C=!1,k=[],R=[]}async function B(_,j){if(typeof _=="number"){e.history.go(_);return}let{path:W,submission:ne,error:re}=_m(_,o,j),ce=m.location,de=Ea(m.location,W,j&&j.state);de=Ee({},de,e.history.encodeLocation(de));let pe=j&&j.replace!=null?j.replace:void 0,ae=et.Push;pe===!0?ae=et.Replace:pe===!1||ne!=null&&Fn(ne.formMethod)&&ne.formAction===m.location.pathname+m.location.search&&(ae=et.Replace);let Me=j&&"preventScrollReset"in j?j.preventScrollReset===!0:void 0,Ae=Ze({currentLocation:ce,nextLocation:de,historyAction:ae});if(Ae){Qe(Ae,{state:"blocked",location:de,proceed(){Qe(Ae,{state:"proceeding",proceed:void 0,reset:void 0,location:de}),B(_,j)},reset(){$e(Ae),G({blockers:new Map(m.blockers)})}});return}return await Y(ae,de,{submission:ne,pendingError:re,preventScrollReset:Me,replace:j&&j.replace})}function q(){if(De(),G({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){Y(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}Y(p||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function Y(_,j,W){x&&x.abort(),x=null,p=_,b=(W&&W.startUninterruptedRevalidation)===!0,vo(m.location,m.matches),h=(W&&W.preventScrollReset)===!0;let ne=i||r,re=W&&W.overrideNavigation,ce=Mi(ne,j,e.basename);if(!ce){let lt=kn(404,{pathname:j.pathname}),{matches:ft,route:ln}=Vm(ne);se(),oe(j,{matches:ft,loaderData:{},errors:{[ln.id]:lt}});return}if(fC(m.location,j)&&!(W&&W.submission&&Fn(W.submission.formMethod))){oe(j,{matches:ce});return}x=new AbortController;let de=Po(e.history,j,x.signal,W&&W.submission),pe,ae;if(W&&W.pendingError)ae={[Ni(ce).route.id]:W.pendingError};else if(W&&W.submission&&Fn(W.submission.formMethod)){let lt=await ie(de,j,W.submission,ce,{replace:W.replace});if(lt.shortCircuited)return;pe=lt.pendingActionData,ae=lt.pendingActionError,re=Ee({state:"loading",location:j},W.submission),de=new Request(de.url,{signal:de.signal})}let{shortCircuited:Me,loaderData:Ae,errors:sn}=await M(de,j,ce,re,W&&W.submission,W&&W.fetcherSubmission,W&&W.replace,pe,ae);Me||(x=null,oe(j,Ee({matches:ce},pe?{actionData:pe}:{},{loaderData:Ae,errors:sn})))}async function ie(_,j,W,ne,re){De();let ce=Ee({state:"submitting",location:j},W);G({navigation:ce});let de,pe=Gd(ne,j);if(!pe.route.action&&!pe.route.lazy)de={type:rt.error,error:kn(405,{method:_.method,pathname:j.pathname,routeId:pe.route.id})};else if(de=await To("action",_,pe,ne,n,t,g.basename),_.signal.aborted)return{shortCircuited:!0};if(Vi(de)){let ae;return re&&re.replace!=null?ae=re.replace:ae=de.location===m.location.pathname+m.location.search,await he(m,de,{submission:W,replace:ae}),{shortCircuited:!0}}if(Xo(de)){let ae=Ni(ne,pe.route.id);return(re&&re.replace)!==!0&&(p=et.Push),{pendingActionData:{},pendingActionError:{[ae.route.id]:de.error}}}if(Gr(de))throw kn(400,{type:"defer-action"});return{pendingActionData:{[pe.route.id]:de.data}}}async function M(_,j,W,ne,re,ce,de,pe,ae){let Me=ne;Me||(Me=Ee({state:"loading",location:j,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},re));let Ae=re||ce?re||ce:Me.formMethod&&Me.formAction&&Me.formData&&Me.formEncType?{formMethod:Me.formMethod,formAction:Me.formAction,formData:Me.formData,formEncType:Me.formEncType}:void 0,sn=i||r,[lt,ft]=zm(e.history,m,W,Ae,j,C,k,R,T,sn,e.basename,pe,ae);if(se(vt=>!(W&&W.some(un=>un.route.id===vt))||lt&&lt.some(un=>un.route.id===vt)),lt.length===0&&ft.length===0)return oe(j,Ee({matches:W,loaderData:{},errors:ae||null},pe?{actionData:pe}:{})),{shortCircuited:!0};if(!b){ft.forEach(un=>{let Ir=m.fetchers.get(un.key),wo={state:"loading",data:Ir&&Ir.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(un.key,wo)});let vt=pe||m.actionData;G(Ee({navigation:Me},vt?Object.keys(vt).length===0?{actionData:null}:{actionData:vt}:{},ft.length>0?{fetchers:new Map(m.fetchers)}:{}))}D=++H,ft.forEach(vt=>P.set(vt.key,x));let{results:ln,loaderResults:yo,fetcherResults:Ou}=await ue(m.matches,W,lt,ft,_);if(_.signal.aborted)return{shortCircuited:!0};ft.forEach(vt=>P.delete(vt.key));let xo=Wm(ln);if(xo)return await he(m,xo,{replace:de}),{shortCircuited:!0};let{loaderData:pi,errors:Tu}=Bm(m,W,lt,yo,ae,ft,Ou,L);L.forEach((vt,un)=>{vt.subscribe(Ir=>{(Ir||vt.done)&&L.delete(un)})}),Ue();let Pu=Be(D);return Ee({loaderData:pi,errors:Tu},Pu||ft.length>0?{fetchers:new Map(m.fetchers)}:{})}function me(_){return m.fetchers.get(_)||iC}function Z(_,j,W,ne){if(oC)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");P.has(_)&&je(_);let ce=Mi(i||r,W,e.basename);if(!ce){Ye(_,j,kn(404,{pathname:W}));return}let{path:de,submission:pe}=_m(W,o,ne,!0),ae=Gd(ce,de);if(h=(ne&&ne.preventScrollReset)===!0,pe&&Fn(pe.formMethod)){Le(_,j,de,ae,ce,pe);return}T.set(_,{routeId:j,path:de}),be(_,j,de,ae,ce,pe)}async function Le(_,j,W,ne,re,ce){if(De(),T.delete(_),!ne.route.action&&!ne.route.lazy){let $n=kn(405,{method:ce.formMethod,pathname:W,routeId:j});Ye(_,j,$n);return}let de=m.fetchers.get(_),pe=Ee({state:"submitting"},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(_,pe),G({fetchers:new Map(m.fetchers)});let ae=new AbortController,Me=Po(e.history,W,ae.signal,ce);P.set(_,ae);let Ae=await To("action",Me,ne,re,n,t,g.basename);if(Me.signal.aborted){P.get(_)===ae&&P.delete(_);return}if(Vi(Ae)){P.delete(_),O.add(_);let $n=Ee({state:"loading"},ce,{data:void 0," _hasFetcherDoneAnything ":!0});return m.fetchers.set(_,$n),G({fetchers:new Map(m.fetchers)}),he(m,Ae,{submission:ce,isFetchActionRedirect:!0})}if(Xo(Ae)){Ye(_,j,Ae.error);return}if(Gr(Ae))throw kn(400,{type:"defer-action"});let sn=m.navigation.location||m.location,lt=Po(e.history,sn,ae.signal),ft=i||r,ln=m.navigation.state!=="idle"?Mi(ft,m.navigation.location,e.basename):m.matches;ge(ln,"Didn't find any matches after fetcher action");let yo=++H;Q.set(_,yo);let Ou=Ee({state:"loading",data:Ae.data},ce,{" _hasFetcherDoneAnything ":!0});m.fetchers.set(_,Ou);let[xo,pi]=zm(e.history,m,ln,ce,sn,C,k,R,T,ft,e.basename,{[ne.route.id]:Ae.data},void 0);pi.filter($n=>$n.key!==_).forEach($n=>{let $u=$n.key,fh=m.fetchers.get($u),ew={state:"loading",data:fh&&fh.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set($u,ew),P.set($u,ae)}),G({fetchers:new Map(m.fetchers)});let{results:Tu,loaderResults:Pu,fetcherResults:vt}=await ue(m.matches,ln,xo,pi,lt);if(ae.signal.aborted)return;Q.delete(_),P.delete(_),pi.forEach($n=>P.delete($n.key));let un=Wm(Tu);if(un)return he(m,un);let{loaderData:Ir,errors:wo}=Bm(m,m.matches,xo,Pu,void 0,pi,vt,L),Yx={state:"idle",data:Ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(_,Yx);let Zx=Be(yo);m.navigation.state==="loading"&&yo>D?(ge(p,"Expected pending action"),x&&x.abort(),oe(m.navigation.location,{matches:ln,loaderData:Ir,errors:wo,fetchers:new Map(m.fetchers)})):(G(Ee({errors:wo,loaderData:Hm(m.loaderData,Ir,ln,wo)},Zx?{fetchers:new Map(m.fetchers)}:{})),C=!1)}async function be(_,j,W,ne,re,ce){let de=m.fetchers.get(_),pe=Ee({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(_,pe),G({fetchers:new Map(m.fetchers)});let ae=new AbortController,Me=Po(e.history,W,ae.signal);P.set(_,ae);let Ae=await To("loader",Me,ne,re,n,t,g.basename);if(Gr(Ae)&&(Ae=await u1(Ae,Me.signal,!0)||Ae),P.get(_)===ae&&P.delete(_),Me.signal.aborted)return;if(Vi(Ae)){await he(m,Ae);return}if(Xo(Ae)){let lt=Ni(m.matches,j);m.fetchers.delete(_),G({fetchers:new Map(m.fetchers),errors:{[lt.route.id]:Ae.error}});return}ge(!Gr(Ae),"Unhandled fetcher deferred data");let sn={state:"idle",data:Ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(_,sn),G({fetchers:new Map(m.fetchers)})}async function he(_,j,W){var ne;let{submission:re,replace:ce,isFetchActionRedirect:de}=W===void 0?{}:W;j.revalidate&&(C=!0);let pe=Ea(_.location,j.location,Ee({_isRedirect:!0},de?{_isFetchActionRedirect:!0}:{}));if(ge(pe,"Expected a location on the redirect navigation"),i1.test(j.location)&&o1&&typeof((ne=window)==null?void 0:ne.location)<"u"){let ft=e.history.createURL(j.location),ln=Fa(ft.pathname,e.basename||"/")==null;if(window.location.origin!==ft.origin||ln){ce?window.location.replace(j.location):window.location.assign(j.location);return}}x=null;let ae=ce===!0?et.Replace:et.Push,{formMethod:Me,formAction:Ae,formEncType:sn,formData:lt}=_.navigation;!re&&Me&&Ae&&lt&&sn&&(re={formMethod:Me,formAction:Ae,formEncType:sn,formData:lt}),rC.has(j.status)&&re&&Fn(re.formMethod)?await Y(ae,pe,{submission:Ee({},re,{formAction:j.location}),preventScrollReset:h}):de?await Y(ae,pe,{overrideNavigation:{state:"loading",location:pe,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:re,preventScrollReset:h}):await Y(ae,pe,{overrideNavigation:{state:"loading",location:pe,formMethod:re?re.formMethod:void 0,formAction:re?re.formAction:void 0,formEncType:re?re.formEncType:void 0,formData:re?re.formData:void 0},preventScrollReset:h})}async function ue(_,j,W,ne,re){let ce=await Promise.all([...W.map(ae=>To("loader",re,ae,j,n,t,g.basename)),...ne.map(ae=>ae.matches&&ae.match?To("loader",Po(e.history,ae.path,re.signal),ae.match,ae.matches,n,t,g.basename):{type:rt.error,error:kn(404,{pathname:ae.path})})]),de=ce.slice(0,W.length),pe=ce.slice(W.length);return await Promise.all([Gm(_,W,de,re.signal,!1,m.loaderData),Gm(_,ne.map(ae=>ae.match),pe,re.signal,!0)]),{results:ce,loaderResults:de,fetcherResults:pe}}function De(){C=!0,k.push(...se()),T.forEach((_,j)=>{P.has(j)&&(R.push(j),je(j))})}function Ye(_,j,W){let ne=Ni(m.matches,j);fe(_),G({errors:{[ne.route.id]:W},fetchers:new Map(m.fetchers)})}function fe(_){P.has(_)&&je(_),T.delete(_),Q.delete(_),O.delete(_),m.fetchers.delete(_)}function je(_){let j=P.get(_);ge(j,"Expected fetch controller: "+_),j.abort(),P.delete(_)}function ye(_){for(let j of _){let ne={state:"idle",data:me(j).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(j,ne)}}function Ue(){let _=[];for(let j of O){let W=m.fetchers.get(j);ge(W,"Expected fetcher: "+j),W.state==="loading"&&(O.delete(j),_.push(j))}ye(_)}function Be(_){let j=[];for(let[W,ne]of Q)if(ne<_){let re=m.fetchers.get(W);ge(re,"Expected fetcher: "+W),re.state==="loading"&&(je(W),Q.delete(W),j.push(W))}return ye(j),j.length>0}function xe(_,j){let W=m.blockers.get(_)||Dm;return N.get(_)!==j&&N.set(_,j),W}function $e(_){m.blockers.delete(_),N.delete(_)}function Qe(_,j){let W=m.blockers.get(_)||Dm;ge(W.state==="unblocked"&&j.state==="blocked"||W.state==="blocked"&&j.state==="blocked"||W.state==="blocked"&&j.state==="proceeding"||W.state==="blocked"&&j.state==="unblocked"||W.state==="proceeding"&&j.state==="unblocked","Invalid blocker state transition: "+W.state+" -> "+j.state),m.blockers.set(_,j),G({blockers:new Map(m.blockers)})}function Ze(_){let{currentLocation:j,nextLocation:W,historyAction:ne}=_;if(N.size===0)return;N.size>1&&no(!1,"A router only supports one blocker at a time");let re=Array.from(N.entries()),[ce,de]=re[re.length-1],pe=m.blockers.get(ce);if(!(pe&&pe.state==="proceeding")&&de({currentLocation:j,nextLocation:W,historyAction:ne}))return ce}function se(_){let j=[];return L.forEach((W,ne)=>{(!_||_(ne))&&(W.cancel(),j.push(ne),L.delete(ne))}),j}function He(_,j,W){if(l=_,c=j,u=W||(ne=>ne.key),!d&&m.navigation===sc){d=!0;let ne=fi(m.location,m.matches);ne!=null&&G({restoreScrollPosition:ne})}return()=>{l=null,c=null,u=null}}function vo(_,j){if(l&&u&&c){let W=j.map(re=>qm(re,m.loaderData)),ne=u(_,W)||_.key;l[ne]=c()}}function fi(_,j){if(l&&u&&c){let W=j.map(ce=>qm(ce,m.loaderData)),ne=u(_,W)||_.key,re=l[ne];if(typeof re=="number")return re}return null}function bn(_){i=_}return g={get basename(){return e.basename},get state(){return m},get routes(){return r},initialize:V,subscribe:K,enableScrollRestoration:He,navigate:B,fetch:Z,revalidate:q,createHref:_=>e.history.createHref(_),encodeLocation:_=>e.history.encodeLocation(_),getFetcher:me,deleteFetcher:fe,dispose:I,getBlocker:xe,deleteBlocker:$e,_internalFetchControllers:P,_internalActiveDeferreds:L,_internalSetRoutes:bn},g}function lC(e){return e!=null&&"formData"in e}function _m(e,t,n,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:Jn(e);if(!n||!lC(n))return{path:i};if(n.formMethod&&!mC(n.formMethod))return{path:i,error:kn(405,{method:n.formMethod})};let o;if(n.formData){let l=n.formMethod||"get";if(o={formMethod:t.v7_normalizeFormMethod?l.toUpperCase():l.toLowerCase(),formAction:l1(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Fn(o.formMethod))return{path:i,submission:o}}let a=Kn(i),s=s1(n.formData);return r&&a.search&&c1(a.search)&&s.append("index",""),a.search="?"+s,{path:Jn(a),submission:o}}function uC(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function zm(e,t,n,r,i,o,a,s,l,u,c,d,f){let w=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,v=e.createURL(t.location),g=e.createURL(i),m=o||v.toString()===g.toString()||v.search!==g.search,p=f?Object.keys(f)[0]:void 0,x=uC(n,p).filter((C,k)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(cC(t.loaderData,t.matches[k],C)||a.some(H=>H===C.route.id))return!0;let R=t.matches[k],P=C;return jm(C,Ee({currentUrl:v,currentParams:R.params,nextUrl:g,nextParams:P.params},r,{actionResult:w,defaultShouldRevalidate:m||a1(R,P)}))}),b=[];return l.forEach((C,k)=>{if(!n.some(D=>D.route.id===C.routeId))return;let R=Mi(u,C.path,c);if(!R){b.push(Ee({key:k},C,{matches:null,match:null}));return}let P=Gd(R,C.path);if(s.includes(k)){b.push(Ee({key:k,matches:R,match:P},C));return}jm(P,Ee({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:m}))&&b.push(Ee({key:k,matches:R,match:P},C))}),[x,b]}function cC(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function a1(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function jm(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Um(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];ge(i,"No route found in manifest");let o={};for(let a in r){let l=i[a]!==void 0&&a!=="hasErrorBoundary";no(!l,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!LE.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(Ee({},i)),lazy:void 0})}async function To(e,t,n,r,i,o,a,s,l,u){a===void 0&&(a="/"),s===void 0&&(s=!1),l===void 0&&(l=!1);let c,d,f,w=m=>{let p,h=new Promise((x,b)=>p=b);return f=()=>p(),t.signal.addEventListener("abort",f),Promise.race([m({request:t,params:n.params,context:u}),h])};try{let m=n.route[e];if(n.route.lazy)if(m)d=(await Promise.all([w(m),Um(n.route,o,i)]))[0];else if(await Um(n.route,o,i),m=n.route[e],m)d=await w(m);else{if(e==="action")throw kn(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:rt.data,data:void 0}}else ge(m,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),d=await w(m);ge(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(m){c=rt.error,d=m}finally{f&&t.signal.removeEventListener("abort",f)}if(hC(d)){let m=d.status;if(nC.has(m)){let x=d.headers.get("Location");if(ge(x,"Redirects returned/thrown from loaders/actions must have a Location header"),i1.test(x)){if(!s){let b=new URL(t.url),C=x.startsWith("//")?new URL(b.protocol+x):new URL(x),k=Fa(C.pathname,a)!=null;C.origin===b.origin&&k&&(x=C.pathname+C.search+C.hash)}}else{let b=r.slice(0,r.indexOf(n)+1),C=su(b).map(R=>R.pathnameBase),k=Bp(x,C,new URL(t.url).pathname);if(ge(Jn(k),"Unable to resolve redirect location: "+x),a){let R=k.pathname;k.pathname=R==="/"?a:Bn([a,R])}x=Jn(k)}if(s)throw d.headers.set("Location",x),d;return{type:rt.redirect,status:m,location:x,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:c||rt.data,response:d};let p,h=d.headers.get("Content-Type");return h&&/\bapplication\/json\b/.test(h)?p=await d.json():p=await d.text(),c===rt.error?{type:c,error:new Hp(m,d.statusText,p),headers:d.headers}:{type:rt.data,data:p,statusCode:d.status,headers:d.headers}}if(c===rt.error)return{type:c,error:d};if(pC(d)){var v,g;return{type:rt.deferred,deferredData:d,statusCode:(v=d.init)==null?void 0:v.status,headers:((g=d.init)==null?void 0:g.headers)&&new Headers(d.init.headers)}}return{type:rt.data,data:d}}function Po(e,t,n,r){let i=e.createURL(l1(t)).toString(),o={signal:n};if(r&&Fn(r.formMethod)){let{formMethod:a,formEncType:s,formData:l}=r;o.method=a.toUpperCase(),o.body=s==="application/x-www-form-urlencoded"?s1(l):l}return new Request(i,o)}function s1(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function dC(e,t,n,r,i){let o={},a=null,s,l=!1,u={};return n.forEach((c,d)=>{let f=t[d].route.id;if(ge(!Vi(c),"Cannot handle redirect results in processLoaderData"),Xo(c)){let w=Ni(e,f),v=c.error;r&&(v=Object.values(r)[0],r=void 0),a=a||{},a[w.route.id]==null&&(a[w.route.id]=v),o[f]=void 0,l||(l=!0,s=n1(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Gr(c)?(i.set(f,c.deferredData),o[f]=c.deferredData.data):o[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(s=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:s||200,loaderHeaders:u}}function Bm(e,t,n,r,i,o,a,s){let{loaderData:l,errors:u}=dC(t,n,r,i,s);for(let c=0;c<o.length;c++){let{key:d,match:f}=o[c];ge(a!==void 0&&a[c]!==void 0,"Did not find corresponding fetcher result");let w=a[c];if(Xo(w)){let v=Ni(e.matches,f==null?void 0:f.route.id);u&&u[v.route.id]||(u=Ee({},u,{[v.route.id]:w.error})),e.fetchers.delete(d)}else if(Vi(w))ge(!1,"Unhandled fetcher revalidation redirect");else if(Gr(w))ge(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:w.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(d,v)}}return{loaderData:l,errors:u}}function Hm(e,t,n,r){let i=Ee({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function Ni(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Vm(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function kn(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(s="defer() is not supported in actions")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Hp(e||500,a,new Error(s),!0)}function Wm(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Vi(n))return n}}function l1(e){let t=typeof e=="string"?Kn(e):e;return Jn(Ee({},t,{hash:""}))}function fC(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Gr(e){return e.type===rt.deferred}function Xo(e){return e.type===rt.error}function Vi(e){return(e&&e.type)===rt.redirect}function pC(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function hC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function mC(e){return tC.has(e.toLowerCase())}function Fn(e){return ZE.has(e.toLowerCase())}async function Gm(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let s=n[a],l=t[a];if(!l)continue;let u=e.find(d=>d.route.id===l.route.id),c=u!=null&&!a1(u,l)&&(o&&o[l.route.id])!==void 0;Gr(s)&&(i||c)&&await u1(s,r,i).then(d=>{d&&(n[a]=d||n[a])})}}async function u1(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:rt.data,data:e.deferredData.unwrappedData}}catch(i){return{type:rt.error,error:i}}return{type:rt.data,data:e.deferredData.data}}}function c1(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function qm(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Gd(e,t){let n=typeof t=="string"?Kn(t).search:t.search;if(e[e.length-1].route.index&&c1(n||""))return e[e.length-1];let r=su(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const vC=typeof Object.is=="function"?Object.is:gC,{useState:yC,useEffect:xC,useLayoutEffect:wC,useDebugValue:SC}=Gc;function bC(e,t,n){const r=t(),[{inst:i},o]=yC({inst:{value:r,getSnapshot:t}});return wC(()=>{i.value=r,i.getSnapshot=t,lc(i)&&o({inst:i})},[e,r,t]),xC(()=>(lc(i)&&o({inst:i}),e(()=>{lc(i)&&o({inst:i})})),[e]),SC(r),r}function lc(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!vC(n,r)}catch{return!0}}function EC(e,t,n){return t()}const CC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kC=!CC,AC=kC?EC:bC,RC="useSyncExternalStore"in Gc?(e=>e.useSyncExternalStore)(Gc):AC,Vp=E.createContext(null),Wp=E.createContext(null),Ia=E.createContext(null),lu=E.createContext(null),fo=E.createContext({outlet:null,matches:[]}),d1=E.createContext(null);function qd(){return qd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qd.apply(this,arguments)}function OC(e,t){let{relative:n}=t===void 0?{}:t;Da()||ge(!1);let{basename:r,navigator:i}=E.useContext(Ia),{hash:o,pathname:a,search:s}=f1(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Bn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Da(){return E.useContext(lu)!=null}function uu(){return Da()||ge(!1),E.useContext(lu).location}function po(){Da()||ge(!1);let{basename:e,navigator:t}=E.useContext(Ia),{matches:n}=E.useContext(fo),{pathname:r}=uu(),i=JSON.stringify(su(n).map(s=>s.pathnameBase)),o=E.useRef(!1);return E.useEffect(()=>{o.current=!0}),E.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let u=Bp(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Bn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function f1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(fo),{pathname:i}=uu(),o=JSON.stringify(su(r).map(a=>a.pathnameBase));return E.useMemo(()=>Bp(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function TC(e,t){Da()||ge(!1);let{navigator:n}=E.useContext(Ia),r=E.useContext(Wp),{matches:i}=E.useContext(fo),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=uu(),u;if(t){var c;let g=typeof t=="string"?Kn(t):t;s==="/"||(c=g.pathname)!=null&&c.startsWith(s)||ge(!1),u=g}else u=l;let d=u.pathname||"/",f=s==="/"?d:d.slice(s.length)||"/",w=Mi(e,{pathname:f}),v=MC(w&&w.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:Bn([s,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?s:Bn([s,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,r||void 0);return t&&v?E.createElement(lu.Provider,{value:{location:qd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:et.Pop}},v):v}function PC(){let e=DC(),t=n1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}class $C extends E.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(fo.Provider,{value:this.props.routeContext},E.createElement(d1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LC(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Vp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(fo.Provider,{value:t},r)}function MC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||ge(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,u=null;n&&(a.route.ErrorBoundary?u=E.createElement(a.route.ErrorBoundary,null):a.route.errorElement?u=a.route.errorElement:u=E.createElement(PC,null));let c=t.concat(r.slice(0,s+1)),d=()=>{let f=o;return l?f=u:a.route.Component?f=E.createElement(a.route.Component,null):a.route.element&&(f=a.route.element),E.createElement(LC,{match:a,routeContext:{outlet:o,matches:c},children:f})};return n&&(a.route.ErrorBoundary||a.route.errorElement||s===0)?E.createElement($C,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Jm;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Jm||(Jm={}));var kl;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(kl||(kl={}));function NC(e){let t=E.useContext(Wp);return t||ge(!1),t}function FC(e){let t=E.useContext(fo);return t||ge(!1),t}function IC(e){let t=FC(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function DC(){var e;let t=E.useContext(d1),n=NC(kl.UseRouteError),r=IC(kl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function _C(e){let{fallbackElement:t,router:n}=e,r=E.useCallback(()=>n.state,[n]),i=RC(n.subscribe,r,r),o=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,c)=>n.navigate(l,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(l,u,c)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),a=n.basename||"/",s=E.useMemo(()=>({router:n,navigator:o,static:!1,basename:a}),[n,o,a]);return E.createElement(E.Fragment,null,E.createElement(Vp.Provider,{value:s},E.createElement(Wp.Provider,{value:i},E.createElement(jC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?E.createElement(UC,null):t))),null)}function zC(e){ge(!1)}function jC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=et.Pop,navigator:o,static:a=!1}=e;Da()&&ge(!1);let s=t.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Kn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:w="default"}=r,v=E.useMemo(()=>{let g=Fa(u,s);return g==null?null:{location:{pathname:g,search:c,hash:d,state:f,key:w},navigationType:i}},[s,u,c,d,f,w,i]);return v==null?null:E.createElement(Ia.Provider,{value:l},E.createElement(lu.Provider,{children:n,value:v}))}function UC(e){let{children:t,location:n}=e,r=E.useContext(Vp),i=r&&!t?r.router.routes:Jd(t);return TC(i,n)}var Qm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Qm||(Qm={}));new Promise(()=>{});function Jd(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Jd(r.props.children,o));return}r.type!==zC&&ge(!1),!r.props.index||!r.props.children||ge(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Jd(r.props.children,o)),n.push(a)}),n}function BC(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Al.apply(this,arguments)}function HC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function VC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function WC(e,t){return e.button===0&&(!t||t==="_self")&&!VC(e)}const GC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function qC(e,t){return sC({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:TE({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||JC(),routes:e,detectErrorBoundary:BC}).initialize()}function JC(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Al({},t,{errors:QC(t.errors)})),t}function QC(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Hp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const XC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,YC=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,d=HC(t,GC),{basename:f}=E.useContext(Ia),w,v=!1;if(typeof u=="string"&&KC.test(u)&&(w=u,XC)){let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),b=Fa(x.pathname,f);x.origin===h.origin&&b!=null?u=b+x.search+x.hash:v=!0}let g=OC(u,{relative:i}),m=ZC(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||m(h)}return E.createElement("a",Al({},d,{href:w||g,onClick:v||o?r:p,ref:n,target:l}))});var Xm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Xm||(Xm={}));var Km;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));function ZC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=po(),l=uu(),u=f1(e,{relative:a});return E.useCallback(c=>{if(WC(c,n)){c.preventDefault();let d=r!==void 0?r:Jn(l)===Jn(u);s(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}const ek=A.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,tk="/Nanofab-Project/assets/microscopio-02614e2c.svg",nk="/Nanofab-Project/assets/mol-3565b3ed.svg",y={mobile:"390px",largeMobile:"391px",tablet:"819px",notebook:"1023px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},rk=A.div`
  width: 100%;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  background-color: #F8F8F8;
  
  overflow: hidden;

  @media screen and (max-width: ${y.mobile}) {    
    width: 100%;
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    /* width: 80%; */
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {     
    /* 4k */
  }
  
`,ik=A.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  height: 10vh;

`;A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;A.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({theme:e})=>e.colors.foreground};
  padding-right: 25px;
`;const ok=A.img`
  width: 150px;
  cursor: pointer;

  @media screen and (max-width: ${y.mobile}) {    
    width: 110px;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    width: 400px;
  }
`,ak="/Nanofab-Project/assets/nanofab-c5546f6e.png",sk="/Nanofab-Project/assets/background-1f899db0.svg",lk=A.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${sk});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`,uk=A.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${y.mobile}) {
    flex-direction: column;
  }

  @media screen and (min-width: 390px) and (max-width: ${y.largeMobile}) {
    flex-direction: column;
  }
  
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px ) {
    flex-direction: row;
  }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    width: 60%;
  }
`,ck=A.img`
  width: 20%;

  @media screen and (max-width: ${y.mobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 390px) and (max-width: ${y.largeMobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${y.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${y.largeNotebook}) and (max-width: ${y.desktop}) {
    width: 400px;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${y.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,dk=A.img`
  width: 20%;

  @media screen and (max-width: ${y.mobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 390px) and (max-width: ${y.largeMobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${y.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${y.largeNotebook}) and (max-width: ${y.desktop}) {
    width: 500px;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${y.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,fk=A.img`
  width: 30%;
  margin-left: 17%;

  @media screen and (max-width: ${y.mobile}) {
    width: 80%;
  }

  @media screen and (min-width: 390px) and (max-width: ${y.largeMobile}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: ${y.tablet}) {
    width: 35%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
    width: 40%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    width: 30%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${y.largeNotebook}) and (max-width: ${y.desktop}) {
    width: 25%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    width: 35%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${y.extraLargeDesktop}) {
    width: 35%;
  }

  border-radius: 10px;
`,pk=A.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,hk=A.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,mk=A.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,gk="/Nanofab-Project/assets/logo-uerj-a13c7853.png",vk="/Nanofab-Project/assets/nanofab-lab-8dc5e917.png",yk="/Nanofab-Project/assets/LogoPPGEM-white-fd88f51e.png",xk=({})=>S(lk,{children:z(uk,{children:[S(pk,{children:S(fk,{src:gk})}),S(hk,{children:S(dk,{src:vk})}),S(mk,{children:S(ck,{src:yk})})]})});var p1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ym=X.createContext&&X.createContext(p1),Tr=globalThis&&globalThis.__assign||function(){return Tr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tr.apply(this,arguments)},wk=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function h1(e){return e&&e.map(function(t,n){return X.createElement(t.tag,Tr({key:n},t.attr),h1(t.child))})}function ho(e){return function(t){return X.createElement(Sk,Tr({attr:Tr({},e.attr)},t),h1(e.child))}}function Sk(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=wk(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),X.createElement("svg",Tr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Tr(Tr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&X.createElement("title",null,o),e.children)};return Ym!==void 0?X.createElement(Ym.Consumer,null,function(n){return t(n)}):t(p1)}function bk(e){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(e)}function Ek(e){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"}}]})(e)}function Ck(e){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(e)}function kk(e){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"}},{tag:"path",attr:{d:"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"}}]})(e)}const Ak=A.nav`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    /* @media screen and (min-width: 1300px) {    
        display: none;
    } */
`,nr=A(YC)`
    font-weight: 300;
    font-size: var(--medium);
    margin: 20px 15px;
    cursor: pointer;
    text-decoration: none;
    color: var(--white);
    font-family: 'Maven Pro';

    @media screen and (max-width: ${y.tablet}) {
        margin: 15px 7px;   
        font-size: var(--small);
    }

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,Rk=A.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,Ok=A.nav`
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
`,Tk=A(Ck)`
    font-size: 40px;

    @media screen and (max-width: ${y.tablet}) {    
        font-size: 30px;
    }

`,Pk=A(bk)`
    font-size: 40px;

    @media screen and (max-width: ${y.tablet}) {    
        font-size: 30px;
    }
`,$k=()=>{const[e,t]=E.useState(!1);return z(Ak,{children:[S(Rk,{onClick:()=>t(!e),children:e?S(Pk,{}):S(Tk,{})}),e?z(Ok,{children:[S(nr,{to:"/",onClick:()=>t(!1),children:"Home"}),S(nr,{to:"/equipamentos_infraestrutura",onClick:()=>t(!1),children:"Equipamentos e Infraestrutura"}),S(nr,{to:"/programas_especiais",onClick:()=>t(!1),children:"Programas Especiais"}),S(nr,{to:"/equipe",onClick:()=>t(!1),children:"Equipe"}),S(nr,{to:"/andamento",onClick:()=>t(!1),children:"Andamento"}),S(nr,{to:"/submissao_projetos",onClick:()=>t(!1),children:"Submissão de Projetos"}),S(nr,{to:"/publicacoes",onClick:()=>t(!1),children:"Publicações"}),S(nr,{to:"/parcerias",onClick:()=>t(!1),children:"Parcerias"})]}):null]})},Lk=A.div`
  height: 100%;
`;function m1(e,t){return function(){return e.apply(t,arguments)}}const{toString:g1}=Object.prototype,{getPrototypeOf:Gp}=Object,qp=(e=>t=>{const n=g1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Yn=e=>(e=e.toLowerCase(),t=>qp(t)===e),cu=e=>t=>typeof t===e,{isArray:mo}=Array,Ca=cu("undefined");function Mk(e){return e!==null&&!Ca(e)&&e.constructor!==null&&!Ca(e.constructor)&&Lr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const v1=Yn("ArrayBuffer");function Nk(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&v1(e.buffer),t}const Fk=cu("string"),Lr=cu("function"),y1=cu("number"),Jp=e=>e!==null&&typeof e=="object",Ik=e=>e===!0||e===!1,js=e=>{if(qp(e)!=="object")return!1;const t=Gp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Dk=Yn("Date"),_k=Yn("File"),zk=Yn("Blob"),jk=Yn("FileList"),Uk=e=>Jp(e)&&Lr(e.pipe),Bk=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||g1.call(e)===t||Lr(e.toString)&&e.toString()===t)},Hk=Yn("URLSearchParams"),Vk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _a(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),mo(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function x1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const w1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),S1=e=>!Ca(e)&&e!==w1;function Qd(){const{caseless:e}=S1(this)&&this||{},t={},n=(r,i)=>{const o=e&&x1(t,i)||i;js(t[o])&&js(r)?t[o]=Qd(t[o],r):js(r)?t[o]=Qd({},r):mo(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&_a(arguments[r],n);return t}const Wk=(e,t,n,{allOwnKeys:r}={})=>(_a(t,(i,o)=>{n&&Lr(i)?e[o]=m1(i,n):e[o]=i},{allOwnKeys:r}),e),Gk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),qk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Jk=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Gp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Qk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Xk=e=>{if(!e)return null;if(mo(e))return e;let t=e.length;if(!y1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Kk=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Gp(Uint8Array)),Yk=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Zk=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},e2=Yn("HTMLFormElement"),t2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Zm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),n2=Yn("RegExp"),b1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_a(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},r2=e=>{b1(e,(t,n)=>{if(Lr(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Lr(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},i2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return mo(e)?r(e):r(String(e).split(t)),n},o2=()=>{},a2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),uc="abcdefghijklmnopqrstuvwxyz",eg="0123456789",E1={DIGIT:eg,ALPHA:uc,ALPHA_DIGIT:uc+uc.toUpperCase()+eg},s2=(e=16,t=E1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function l2(e){return!!(e&&Lr(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const u2=e=>{const t=new Array(10),n=(r,i)=>{if(Jp(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=mo(r)?[]:{};return _a(r,(a,s)=>{const l=n(a,i+1);!Ca(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},U={isArray:mo,isArrayBuffer:v1,isBuffer:Mk,isFormData:Bk,isArrayBufferView:Nk,isString:Fk,isNumber:y1,isBoolean:Ik,isObject:Jp,isPlainObject:js,isUndefined:Ca,isDate:Dk,isFile:_k,isBlob:zk,isRegExp:n2,isFunction:Lr,isStream:Uk,isURLSearchParams:Hk,isTypedArray:Kk,isFileList:jk,forEach:_a,merge:Qd,extend:Wk,trim:Vk,stripBOM:Gk,inherits:qk,toFlatObject:Jk,kindOf:qp,kindOfTest:Yn,endsWith:Qk,toArray:Xk,forEachEntry:Yk,matchAll:Zk,isHTMLForm:e2,hasOwnProperty:Zm,hasOwnProp:Zm,reduceDescriptors:b1,freezeMethods:r2,toObjectSet:i2,toCamelCase:t2,noop:o2,toFiniteNumber:a2,findKey:x1,global:w1,isContextDefined:S1,ALPHABET:E1,generateString:s2,isSpecCompliantForm:l2,toJSONObject:u2};function Ce(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}U.inherits(Ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const C1=Ce.prototype,k1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{k1[e]={value:e}});Object.defineProperties(Ce,k1);Object.defineProperty(C1,"isAxiosError",{value:!0});Ce.from=(e,t,n,r,i,o)=>{const a=Object.create(C1);return U.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),Ce.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const c2=null;function Xd(e){return U.isPlainObject(e)||U.isArray(e)}function A1(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function tg(e,t,n){return e?e.concat(t).map(function(i,o){return i=A1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function d2(e){return U.isArray(e)&&!e.some(Xd)}const f2=U.toFlatObject(U,{},null,function(t){return/^is[A-Z]/.test(t)});function du(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,m){return!U.isUndefined(m[g])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(U.isDate(v))return v.toISOString();if(!l&&U.isBlob(v))throw new Ce("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(v)||U.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,g,m){let p=v;if(v&&!m&&typeof v=="object"){if(U.endsWith(g,"{}"))g=r?g:g.slice(0,-2),v=JSON.stringify(v);else if(U.isArray(v)&&d2(v)||(U.isFileList(v)||U.endsWith(g,"[]"))&&(p=U.toArray(v)))return g=A1(g),p.forEach(function(x,b){!(U.isUndefined(x)||x===null)&&t.append(a===!0?tg([g],b,o):a===null?g:g+"[]",u(x))}),!1}return Xd(v)?!0:(t.append(tg(m,g,o),u(v)),!1)}const d=[],f=Object.assign(f2,{defaultVisitor:c,convertValue:u,isVisitable:Xd});function w(v,g){if(!U.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+g.join("."));d.push(v),U.forEach(v,function(p,h){(!(U.isUndefined(p)||p===null)&&i.call(t,p,U.isString(h)?h.trim():h,g,f))===!0&&w(p,g?g.concat(h):[h])}),d.pop()}}if(!U.isObject(e))throw new TypeError("data must be an object");return w(e),t}function ng(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Qp(e,t){this._pairs=[],e&&du(e,this,t)}const R1=Qp.prototype;R1.append=function(t,n){this._pairs.push([t,n])};R1.toString=function(t){const n=t?function(r){return t.call(this,r,ng)}:ng;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function p2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function O1(e,t,n){if(!t)return e;const r=n&&n.encode||p2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=U.isURLSearchParams(t)?t.toString():new Qp(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class h2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){U.forEach(this.handlers,function(r){r!==null&&t(r)})}}const rg=h2,T1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},m2=typeof URLSearchParams<"u"?URLSearchParams:Qp,g2=typeof FormData<"u"?FormData:null,v2=typeof Blob<"u"?Blob:null,y2=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),x2=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Rn={isBrowser:!0,classes:{URLSearchParams:m2,FormData:g2,Blob:v2},isStandardBrowserEnv:y2,isStandardBrowserWebWorkerEnv:x2,protocols:["http","https","file","blob","url","data"]};function w2(e,t){return du(e,new Rn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Rn.isNode&&U.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function S2(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function b2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function P1(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&U.isArray(i)?i.length:a,l?(U.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!U.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&U.isArray(i[a])&&(i[a]=b2(i[a])),!s)}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,(r,i)=>{t(S2(r),i,n,0)}),n}return null}const E2={"Content-Type":void 0};function C2(e,t,n){if(U.isString(e))try{return(t||JSON.parse)(e),U.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const fu={transitional:T1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=U.isObject(t);if(o&&U.isHTMLForm(t)&&(t=new FormData(t)),U.isFormData(t))return i&&i?JSON.stringify(P1(t)):t;if(U.isArrayBuffer(t)||U.isBuffer(t)||U.isStream(t)||U.isFile(t)||U.isBlob(t))return t;if(U.isArrayBufferView(t))return t.buffer;if(U.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return w2(t,this.formSerializer).toString();if((s=U.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return du(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),C2(t)):t}],transformResponse:[function(t){const n=this.transitional||fu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&U.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Ce.from(s,Ce.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rn.classes.FormData,Blob:Rn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],function(t){fu.headers[t]={}});U.forEach(["post","put","patch"],function(t){fu.headers[t]=U.merge(E2)});const Xp=fu,k2=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),A2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&k2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ig=Symbol("internals");function $o(e){return e&&String(e).trim().toLowerCase()}function Us(e){return e===!1||e==null?e:U.isArray(e)?e.map(Us):String(e)}function R2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function O2(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function cc(e,t,n,r,i){if(U.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!U.isString(t)){if(U.isString(r))return t.indexOf(r)!==-1;if(U.isRegExp(r))return r.test(t)}}function T2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function P2(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class pu{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const c=$o(l);if(!c)throw new Error("header name must be a non-empty string");const d=U.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=Us(s))}const a=(s,l)=>U.forEach(s,(u,c)=>o(u,c,l));return U.isPlainObject(t)||t instanceof this.constructor?a(t,n):U.isString(t)&&(t=t.trim())&&!O2(t)?a(A2(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=$o(t),t){const r=U.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return R2(i);if(U.isFunction(n))return n.call(this,i,r);if(U.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=$o(t),t){const r=U.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||cc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=$o(a),a){const s=U.findKey(r,a);s&&(!n||cc(r,r[s],s,n))&&(delete r[s],i=!0)}}return U.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||cc(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return U.forEach(this,(i,o)=>{const a=U.findKey(r,o);if(a){n[a]=Us(i),delete n[o];return}const s=t?T2(o):String(o).trim();s!==o&&delete n[o],n[s]=Us(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return U.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&U.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[ig]=this[ig]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=$o(a);r[s]||(P2(i,a),r[s]=!0)}return U.isArray(t)?t.forEach(o):o(t),this}}pu.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.freezeMethods(pu.prototype);U.freezeMethods(pu);const Hn=pu;function dc(e,t){const n=this||Xp,r=t||n,i=Hn.from(r.headers);let o=r.data;return U.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function $1(e){return!!(e&&e.__CANCEL__)}function za(e,t,n){Ce.call(this,e??"canceled",Ce.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(za,Ce,{__CANCEL__:!0});function $2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Ce("Request failed with status code "+n.status,[Ce.ERR_BAD_REQUEST,Ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const L2=Rn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),U.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),U.isString(o)&&l.push("path="+o),U.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function M2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function N2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function L1(e,t){return e&&!M2(t)?N2(e,t):t}const F2=Rn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=U.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function I2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function D2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];a||(a=u),n[i]=l,r[i]=u;let d=o,f=0;for(;d!==i;)f+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const w=c&&u-c;return w?Math.round(f*1e3/w):void 0}}function og(e,t){let n=0;const r=D2(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const _2=typeof XMLHttpRequest<"u",z2=_2&&function(e){return new Promise(function(n,r){let i=e.data;const o=Hn.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}U.isFormData(i)&&(Rn.isStandardBrowserEnv||Rn.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+v))}const c=L1(e.baseURL,e.url);u.open(e.method.toUpperCase(),O1(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function d(){if(!u)return;const w=Hn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),g={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};$2(function(p){n(p),l()},function(p){r(p),l()},g),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new Ce("Request aborted",Ce.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new Ce("Network Error",Ce.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||T1;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new Ce(v,g.clarifyTimeoutError?Ce.ETIMEDOUT:Ce.ECONNABORTED,e,u)),u=null},Rn.isStandardBrowserEnv){const w=(e.withCredentials||F2(c))&&e.xsrfCookieName&&L2.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&U.forEach(o.toJSON(),function(v,g){u.setRequestHeader(g,v)}),U.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",og(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",og(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=w=>{u&&(r(!w||w.type?new za(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=I2(c);if(f&&Rn.protocols.indexOf(f)===-1){r(new Ce("Unsupported protocol "+f+":",Ce.ERR_BAD_REQUEST,e));return}u.send(i||null)})},Bs={http:c2,xhr:z2};U.forEach(Bs,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const j2={getAdapter:e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=U.isString(n)?Bs[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Ce(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(U.hasOwnProp(Bs,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!U.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Bs};function fc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new za(null,e)}function ag(e){return fc(e),e.headers=Hn.from(e.headers),e.data=dc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),j2.getAdapter(e.adapter||Xp.adapter)(e).then(function(r){return fc(e),r.data=dc.call(e,e.transformResponse,r),r.headers=Hn.from(r.headers),r},function(r){return $1(r)||(fc(e),r&&r.response&&(r.response.data=dc.call(e,e.transformResponse,r.response),r.response.headers=Hn.from(r.response.headers))),Promise.reject(r)})}const sg=e=>e instanceof Hn?e.toJSON():e;function ro(e,t){t=t||{};const n={};function r(u,c,d){return U.isPlainObject(u)&&U.isPlainObject(c)?U.merge.call({caseless:d},u,c):U.isPlainObject(c)?U.merge({},c):U.isArray(c)?c.slice():c}function i(u,c,d){if(U.isUndefined(c)){if(!U.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function o(u,c){if(!U.isUndefined(c))return r(void 0,c)}function a(u,c){if(U.isUndefined(c)){if(!U.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>i(sg(u),sg(c),!0)};return U.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const d=l[c]||i,f=d(e[c],t[c],c);U.isUndefined(f)&&d!==s||(n[c]=f)}),n}const M1="1.3.4",Kp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Kp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const lg={};Kp.transitional=function(t,n,r){function i(o,a){return"[Axios v"+M1+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new Ce(i(a," has been removed"+(n?" in "+n:"")),Ce.ERR_DEPRECATED);return n&&!lg[a]&&(lg[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function U2(e,t,n){if(typeof e!="object")throw new Ce("options must be an object",Ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new Ce("option "+o+" must be "+l,Ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ce("Unknown option "+o,Ce.ERR_BAD_OPTION)}}const Kd={assertOptions:U2,validators:Kp},rr=Kd.validators;class Rl{constructor(t){this.defaults=t,this.interceptors={request:new rg,response:new rg}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ro(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Kd.assertOptions(r,{silentJSONParsing:rr.transitional(rr.boolean),forcedJSONParsing:rr.transitional(rr.boolean),clarifyTimeoutError:rr.transitional(rr.boolean)},!1),i!==void 0&&Kd.assertOptions(i,{encode:rr.function,serialize:rr.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&U.merge(o.common,o[n.method]),a&&U.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Hn.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,s.unshift(g.fulfilled,g.rejected))});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let c,d=0,f;if(!l){const v=[ag.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,u),f=v.length,c=Promise.resolve(n);d<f;)c=c.then(v[d++],v[d++]);return c}f=s.length;let w=n;for(d=0;d<f;){const v=s[d++],g=s[d++];try{w=v(w)}catch(m){g.call(this,m);break}}try{c=ag.call(this,w)}catch(v){return Promise.reject(v)}for(d=0,f=u.length;d<f;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=ro(this.defaults,t);const n=L1(t.baseURL,t.url);return O1(n,t.params,t.paramsSerializer)}}U.forEach(["delete","get","head","options"],function(t){Rl.prototype[t]=function(n,r){return this.request(ro(r||{},{method:t,url:n,data:(r||{}).data}))}});U.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(ro(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Rl.prototype[t]=n(),Rl.prototype[t+"Form"]=n(!0)});const Hs=Rl;class Yp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new za(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Yp(function(i){t=i}),cancel:t}}}const B2=Yp;function H2(e){return function(n){return e.apply(null,n)}}function V2(e){return U.isObject(e)&&e.isAxiosError===!0}const Yd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Yd).forEach(([e,t])=>{Yd[t]=e});const W2=Yd;function N1(e){const t=new Hs(e),n=m1(Hs.prototype.request,t);return U.extend(n,Hs.prototype,t,{allOwnKeys:!0}),U.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return N1(ro(e,i))},n}const at=N1(Xp);at.Axios=Hs;at.CanceledError=za;at.CancelToken=B2;at.isCancel=$1;at.VERSION=M1;at.toFormData=du;at.AxiosError=Ce;at.Cancel=at.CanceledError;at.all=function(t){return Promise.all(t)};at.spread=H2;at.isAxiosError=V2;at.mergeConfig=ro;at.AxiosHeaders=Hn;at.formToJSON=e=>P1(U.isHTMLForm(e)?new FormData(e):e);at.HttpStatusCode=W2;at.default=at;const G2=at,Ko=G2.create({baseURL:"http://localhost:5000"}),q2=async e=>{let t="/user";const{nome:n,publica:r,inst:i,telefone:o,ramal:a,funcao:s,email:l,departamento:u,usuario:c,senha1:d,outro:f}=e;return await Ko.post(t,{name:n,instituteType:r?"pública":"privado",institute:i,phone:o,phoneBranch:a,role:s,email:l,department:u,username:c,password:d,others:f})},J2=async(e,t)=>await Ko.post("/login",{email:e,password:t}),hu=E.createContext({}),Q2=({children:e})=>{const[t,n]=E.useState({CodUser:null,Name:"",Email:""});E.useEffect(()=>{const o=localStorage.getItem("user"),a=localStorage.getItem("token");o&&a&&(n(JSON.parse(o)),Ko.defaults.headers.Authorization=`Bearer ${a}`)},[]);const r=async(o,a)=>{const s=await J2(o,a);localStorage.setItem("user",JSON.stringify(s.data.user)),localStorage.setItem("token",s.data.token),Ko.defaults.headers.Authorization=`Bearer ${s.data.token}`,n(s.data.user)},i=()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),localStorage.removeItem("userResult"),Ko.defaults.headers.Authorization=null,n({CodUser:null,Name:"",Email:""})};return S(hu.Provider,{value:{authenticated:t.CodUser!==null,user:t,login:r,logout:i},children:e})},X2=A.div`
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
`,K2=A.span`
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-right: 10px;

  @media screen and (max-width: ${y.largeDesktop}) {     
   font-size: 16px;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,Y2=A(kk)`
  font-size: 38px;

  @media screen and (max-width: ${y.largeDesktop}) {     
   font-size: 28px;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {     
   font-size: 48px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}){    
    font-size: 60px;   
  }
`,Z2=({})=>{const e=po();return z(X2,{onClick:()=>e("/login"),children:[S(K2,{children:"Entrar"}),S(Y2,{})]})},eA=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  height: 100%;
`,tA=A.span`
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-right: 20px;
  color: #000;

  @media screen and (max-width: ${y.largeDesktop}) {     
   font-size: 16px;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,nA=A.div`
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
`,rA=A.span`
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-right: 10px;

  @media screen and (max-width: ${y.largeDesktop}) {     
   font-size: 16px;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,iA=A(Ek)`
  font-size: 38px;

  @media screen and (max-width: ${y.largeDesktop}) {     
   font-size: 28px;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {     
   font-size: 48px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}){    
    font-size: 60px;   
  }
`;function F1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=F1(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function yr(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=F1(e))&&(r&&(r+=" "),r+=t);return r}const Yo=e=>typeof e=="number"&&!isNaN(e),si=e=>typeof e=="string",Ot=e=>typeof e=="function",Vs=e=>si(e)||Ot(e)?e:null,pc=e=>E.isValidElement(e)||si(e)||Ot(e)||Yo(e);function oA(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function mu(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:s,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f}=a;const w=r?`${t}--${l}`:t,v=r?`${n}--${l}`:n,g=E.useRef(0);return E.useLayoutEffect(()=>{const m=d.current,p=w.split(" "),h=x=>{x.target===d.current&&(m.dispatchEvent(new Event("d")),m.removeEventListener("animationend",h),m.removeEventListener("animationcancel",h),g.current===0&&x.type!=="animationcancel"&&m.classList.remove(...p))};m.classList.add(...p),m.addEventListener("animationend",h),m.addEventListener("animationcancel",h)},[]),E.useEffect(()=>{const m=d.current,p=()=>{m.removeEventListener("animationend",p),i?oA(m,c,o):c()};f||(u?p():(g.current=1,m.className+=` ${v}`,m.addEventListener("animationend",p)))},[f]),X.createElement(X.Fragment,null,s)}}function ug(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const Jt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},us=e=>{let{theme:t,type:n,...r}=e;return X.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},hc={info:function(e){return X.createElement(us,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return X.createElement(us,{...e},X.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return X.createElement(us,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return X.createElement(us,{...e},X.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return X.createElement("div",{className:"Toastify__spinner"})}};function aA(e){const[,t]=E.useReducer(w=>w+1,0),[n,r]=E.useState([]),i=E.useRef(null),o=E.useRef(new Map).current,a=w=>n.indexOf(w)!==-1,s=E.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:w=>o.get(w)}).current;function l(w){let{containerId:v}=w;const{limit:g}=s.props;!g||v&&s.containerId!==v||(s.count-=s.queue.length,s.queue=[])}function u(w){r(v=>w==null?[]:v.filter(g=>g!==w))}function c(){const{toastContent:w,toastProps:v,staleId:g}=s.queue.shift();f(w,v,g)}function d(w,v){let{delay:g,staleId:m,...p}=v;if(!pc(w)||function(O){return!i.current||s.props.enableMultiContainer&&O.containerId!==s.props.containerId||o.has(O.toastId)&&O.updateId==null}(p))return;const{toastId:h,updateId:x,data:b}=p,{props:C}=s,k=()=>u(h),R=x==null;R&&s.count++;const P={...C,style:C.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(p).filter(O=>{let[T,L]=O;return L!=null})),toastId:h,updateId:x,data:b,closeToast:k,isIn:!1,className:Vs(p.className||C.toastClassName),bodyClassName:Vs(p.bodyClassName||C.bodyClassName),progressClassName:Vs(p.progressClassName||C.progressClassName),autoClose:!p.isLoading&&(H=p.autoClose,D=C.autoClose,H===!1||Yo(H)&&H>0?H:D),deleteToast(){const O=ug(o.get(h),"removed");o.delete(h),Jt.emit(4,O);const T=s.queue.length;if(s.count=h==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),T>0){const L=h==null?s.props.limit:1;if(T===1||L===1)s.displayedToast++,c();else{const N=L>T?T:L;s.displayedToast=N;for(let F=0;F<N;F++)c()}}else t()}};var H,D;P.iconOut=function(O){let{theme:T,type:L,isLoading:N,icon:F}=O,V=null;const I={theme:T,type:L};return F===!1||(Ot(F)?V=F(I):E.isValidElement(F)?V=E.cloneElement(F,I):si(F)||Yo(F)?V=F:N?V=hc.spinner():(K=>K in hc)(L)&&(V=hc[L](I))),V}(P),Ot(p.onOpen)&&(P.onOpen=p.onOpen),Ot(p.onClose)&&(P.onClose=p.onClose),P.closeButton=C.closeButton,p.closeButton===!1||pc(p.closeButton)?P.closeButton=p.closeButton:p.closeButton===!0&&(P.closeButton=!pc(C.closeButton)||C.closeButton);let Q=w;E.isValidElement(w)&&!si(w.type)?Q=E.cloneElement(w,{closeToast:k,toastProps:P,data:b}):Ot(w)&&(Q=w({closeToast:k,toastProps:P,data:b})),C.limit&&C.limit>0&&s.count>C.limit&&R?s.queue.push({toastContent:Q,toastProps:P,staleId:m}):Yo(g)?setTimeout(()=>{f(Q,P,m)},g):f(Q,P,m)}function f(w,v,g){const{toastId:m}=v;g&&o.delete(g);const p={content:w,props:v};o.set(m,p),r(h=>[...h,m].filter(x=>x!==g)),Jt.emit(4,ug(p,p.props.updateId==null?"added":"updated"))}return E.useEffect(()=>(s.containerId=e.containerId,Jt.cancelEmit(3).on(0,d).on(1,w=>i.current&&u(w)).on(5,l).emit(2,s),()=>{o.clear(),Jt.emit(3,s)}),[]),E.useEffect(()=>{s.props=e,s.isToastActive=a,s.displayedToast=n.length}),{getToastToRender:function(w){const v=new Map,g=Array.from(o.values());return e.newestOnTop&&g.reverse(),g.forEach(m=>{const{position:p}=m.props;v.has(p)||v.set(p,[]),v.get(p).push(m)}),Array.from(v,m=>w(m[0],m[1]))},containerRef:i,isToastActive:a}}function cg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function dg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function sA(e){const[t,n]=E.useState(!1),[r,i]=E.useState(!1),o=E.useRef(null),a=E.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=E.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=e;function w(b){if(e.draggable){b.nativeEvent.type==="touchstart"&&b.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",p),document.addEventListener("mouseup",h),document.addEventListener("touchmove",p),document.addEventListener("touchend",h);const C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=C.getBoundingClientRect(),C.style.transition="",a.x=cg(b.nativeEvent),a.y=dg(b.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(b){if(a.boundingRect){const{top:C,bottom:k,left:R,right:P}=a.boundingRect;b.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=R&&a.x<=P&&a.y>=C&&a.y<=k?m():g()}}function g(){n(!0)}function m(){n(!1)}function p(b){const C=o.current;a.canDrag&&C&&(a.didMove=!0,t&&m(),a.x=cg(b),a.y=dg(b),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),C.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,C.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function h(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",h);const b=o.current;if(a.canDrag&&a.didMove&&b){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return i(!0),void e.closeToast();b.style.transition="transform 0.2s, opacity 0.2s",b.style.transform=`translate${e.draggableDirection}(0)`,b.style.opacity="1"}}E.useEffect(()=>{s.current=e}),E.useEffect(()=>(o.current&&o.current.addEventListener("d",g,{once:!0}),Ot(e.onOpen)&&e.onOpen(E.isValidElement(e.children)&&e.children.props),()=>{const b=s.current;Ot(b.onClose)&&b.onClose(E.isValidElement(b.children)&&b.children.props)}),[]),E.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||m(),window.addEventListener("focus",g),window.addEventListener("blur",m)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",m))}),[e.pauseOnFocusLoss]);const x={onMouseDown:w,onTouchStart:w,onMouseUp:v,onTouchEnd:v};return l&&u&&(x.onMouseEnter=m,x.onMouseLeave=g),f&&(x.onClick=b=>{d&&d(b),a.canCloseOnClick&&c()}),{playToast:g,pauseToast:m,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:x}}function I1(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return X.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},X.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},X.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function lA(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:a,style:s,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:f}=e;const w=o||l&&u===0,v={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:w?0:1};l&&(v.transform=`scaleX(${u})`);const g=yr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),m=Ot(a)?a({rtl:c,type:i,defaultClassName:g}):yr(g,a);return X.createElement("div",{role:"progressbar","aria-hidden":w?"true":"false","aria-label":"notification timer",className:m,style:v,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}})}const uA=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=sA(e),{closeButton:o,children:a,autoClose:s,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:f,position:w,className:v,style:g,bodyClassName:m,bodyStyle:p,progressClassName:h,progressStyle:x,updateId:b,role:C,progress:k,rtl:R,toastId:P,deleteToast:H,isIn:D,isLoading:Q,iconOut:O,closeOnClick:T,theme:L}=e,N=yr("Toastify__toast",`Toastify__toast-theme--${L}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":T}),F=Ot(v)?v({rtl:R,position:w,type:u,defaultClassName:N}):yr(N,v),V=!!k||!s,I={closeToast:d,type:u,theme:L};let K=null;return o===!1||(K=Ot(o)?o(I):E.isValidElement(o)?E.cloneElement(o,I):I1(I)),X.createElement(f,{isIn:D,done:H,position:w,preventExitTransition:n,nodeRef:r},X.createElement("div",{id:P,onClick:l,className:F,...i,style:g,ref:r},X.createElement("div",{...D&&{role:C},className:Ot(m)?m({type:u}):yr("Toastify__toast-body",m),style:p},O!=null&&X.createElement("div",{className:yr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Q})},O),X.createElement("div",null,a)),K,X.createElement(lA,{...b&&!V?{key:`pb-${b}`}:{},rtl:R,theme:L,delay:s,isRunning:t,isIn:D,closeToast:d,hide:c,type:u,style:x,className:h,controlledProgress:V,progress:k||0})))},gu=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},cA=mu(gu("bounce",!0));mu(gu("slide",!0));mu(gu("zoom"));mu(gu("flip"));const Zd=E.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=aA(e),{className:o,style:a,rtl:s,containerId:l}=e;function u(c){const d=yr("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":s});return Ot(o)?o({position:c,rtl:s,defaultClassName:d}):yr(d,Vs(o))}return E.useEffect(()=>{t&&(t.current=r.current)},[]),X.createElement("div",{ref:r,className:"Toastify",id:l},n((c,d)=>{const f=d.length?{...a}:{...a,pointerEvents:"none"};return X.createElement("div",{className:u(c),style:f,key:`container-${c}`},d.map((w,v)=>{let{content:g,props:m}=w;return X.createElement(uA,{...m,isIn:i(m.toastId),style:{...m.style,"--nth":v+1,"--len":d.length},key:`toast-${m.key}`},g)}))}))});Zd.displayName="ToastContainer",Zd.defaultProps={position:"top-right",transition:cA,autoClose:5e3,closeButton:I1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let mc,jr=new Map,_o=[],dA=1;function D1(){return""+dA++}function fA(e){return e&&(si(e.toastId)||Yo(e.toastId))?e.toastId:D1()}function Zo(e,t){return jr.size>0?Jt.emit(0,e,t):_o.push({content:e,options:t}),t.toastId}function Ol(e,t){return{...t,type:t&&t.type||e,toastId:fA(t)}}function cs(e){return(t,n)=>Zo(t,Ol(e,n))}function Re(e,t){return Zo(e,Ol("default",t))}Re.loading=(e,t)=>Zo(e,Ol("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Re.promise=function(e,t,n){let r,{pending:i,error:o,success:a}=t;i&&(r=si(i)?Re.loading(i,n):Re.loading(i.render,{...n,...i}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null)return void Re.dismiss(r);const w={type:c,...s,...n,data:f},v=si(d)?{render:d}:d;return r?Re.update(r,{...w,...v}):Re(v.render,{...w,...v}),f},u=Ot(e)?e():e;return u.then(c=>l("success",a,c)).catch(c=>l("error",o,c)),u},Re.success=cs("success"),Re.info=cs("info"),Re.error=cs("error"),Re.warning=cs("warning"),Re.warn=Re.warning,Re.dark=(e,t)=>Zo(e,Ol("default",{theme:"dark",...t})),Re.dismiss=e=>{jr.size>0?Jt.emit(1,e):_o=_o.filter(t=>e!=null&&t.options.toastId!==e)},Re.clearWaitingQueue=function(e){return e===void 0&&(e={}),Jt.emit(5,e)},Re.isActive=e=>{let t=!1;return jr.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},Re.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const a=jr.get(o||mc);return a&&a.getToast(r)}(e,t);if(n){const{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:D1()};o.toastId!==e&&(o.staleId=e);const a=o.render||i;delete o.render,Zo(a,o)}},0)},Re.done=e=>{Re.update(e,{progress:1})},Re.onChange=e=>(Jt.on(4,e),()=>{Jt.off(4,e)}),Re.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Re.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Jt.on(2,e=>{mc=e.containerId||e,jr.set(mc,e),_o.forEach(t=>{Jt.emit(0,t.content,t.options)}),_o=[]}).on(3,e=>{jr.delete(e.containerId||e),jr.size===0&&Jt.off(0).off(1).off(5)});const pA=({user:e})=>{const{logout:t}=E.useContext(hu),n=po(),r=async()=>{try{await t(),n("/")}catch{Re.error("Erro, tente novamente.")}};return z(eA,{children:[z(tA,{children:["Olá, ",e.Name]}),z(nA,{onClick:()=>r(),children:[S(rA,{children:"Sair"}),S(iA,{})]})]})},hA=({})=>{const{user:e,authenticated:t}=E.useContext(hu);return S(Lk,{children:t?S(pA,{user:e}):S(Z2,{})})},on=({})=>{const e=po();return z(rk,{children:[z(ik,{children:[S($k,{}),S(ok,{src:ak,onClick:()=>e("/")}),S(hA,{})]}),S(xk,{})]})},mA=A.div`
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

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,gA=A.div`
  width: 85%;
  height: 2px;
  background: ${({theme:e})=>e.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${y.mobile}) {    
    width: 50%;
  }
`,vA=A.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${y.mobile}) {    
    flex-direction: column;
  }
`,fg=A.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  text-align: center;
  color: ${({theme:e})=>e.colors.text.content};

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,gc=A.h3`
  text-align: center;
`,vc=A.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6%;
  text-align: center;
`,yc=A.span`
  /* display: flex;
  flex-direction: row; */
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.content};
  width: 100%;
  text-align: center;
  
  @media screen and (max-width: ${y.mobile}){
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
  
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,yA=A.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1%;
  margin-top: 1%;

  @media screen and (max-width: ${y.mobile}) {    
    width: 100%;
    margin-bottom: 3%;
    justify-content: center;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {      
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
`,xA=A.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;

  @media screen and (max-width: ${y.mobile}) {
    flex-direction: column;
    align-items: center;
  }
  
  @media screen and (min-width: 390px) and (max-width: ${y.largeMobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {      
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  } 

  @media screen and (min-width: 700px) and (max-width: 900px) {      
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,an=({})=>z(mA,{children:[S(yA,{children:z(xA,{children:[z(vc,{children:[S(gc,{children:"Endereço"}),S(yc,{children:"Rua Fonseca Teles 121, São Cristóvão, Rio de Janeiro, CEP: 20.940-903"})]}),z(vc,{children:[S(gc,{children:"Email"}),S(yc,{children:"nanofabuerj@gmail.com"})]}),z(vc,{children:[S(gc,{children:"Funcionamento"}),S(yc,{children:"Segunda a sexta Xhrs às Yhrs"})]})]})}),S(gA,{}),z(vA,{children:[S(fg,{children:"Ⓒ Serra Jr. Engenharia 2022"}),S(fg,{children:"Todos os direitos reservados"})]})]}),wA=A.div`
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

  @media screen and (max-width: ${y.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%;
    }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {    
      display: flex;
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;
      padding: 10px;
      margin-top: 15%;
  }
  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {    
      display: flex;
      width: 85%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 12%;
      margin-bottom: 5%;
      padding: 10px;
  }
  @media screen and (min-width: ${y.extraLargeDesktop}) {    
      padding: 60px;
  }

`,SA=A.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${y.mobile}) {    
      width: 100%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {    
      width: 90%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {    
      width: 90%;
      padding: 10px 10px;
  }
`,bA=A.span`
  margin: 10px 20px 5px 20px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  text-align: justify;

  /* @media screen and (max-width: ${y.mobile}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {    
    text-align: justify;
  } */

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
    
  }
`,EA=A.div`
  position: absolute;
  top: -70px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${y.mobile}) {
    top: -5px;
    left: -5px;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  }
`,CA=A.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${y.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
`,kA="/Nanofab-Project/assets/chemistry-7542d245.png",AA=({})=>S(EA,{children:S(CA,{src:kA})}),RA=A.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6%;

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {    
    padding-top: 0px;
  }
`,OA=A.span`
  font-weight: bold;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${y.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,TA=({title:e})=>S(RA,{children:S(OA,{children:e})}),PA=({descriptions:e})=>z(wA,{children:[S(AA,{}),S(TA,{title:"Sobre o NANOFAB"}),S(SA,{children:e.map(t=>S(bA,{children:t.text},e.indexOf(t)))})]}),$A=A.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    @media screen and (max-width: ${y.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 10%;
    }
    @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {    
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
    @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {   
        display: flex;
        width: 85%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
        margin-top: 2%;
  }

    @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
        width: 90%;
    }
`,LA=A.div`
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

  @media screen and (max-width: ${y.mobile}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {   
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    text-align: left;
  }

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {   
    padding: 1%;
  }
`,MA=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;
  margin-top: 5%;
`,NA=A.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`,FA=A.span`
  margin: 10px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  padding: 20px;
  text-align: justify;

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${y.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,IA=A.span`
  margin: 20px;
  font-weight: bold;
  line-height: 30px;
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;
  margin-top: 90px;

  @media screen and (max-width: ${y.mobile}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {   
    margin-bottom: 0px;
    margin: 10px;
    margin-top: 100px;
  }
  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
  }
`,DA=({image:e,title:t,text:n})=>z(LA,{children:[S(MA,{children:S(NA,{src:e,alt:t})}),S(IA,{children:t}),S(FA,{children:n})]}),_A=({cards:e})=>S($A,{children:e.map(t=>S(DA,{image:t.image,title:t.title,text:t.text},e.indexOf(t)))}),zA=({})=>z(ek,{children:[S(on,{}),S(PA,{descriptions:[{text:"O Laboratório Multiusuário de Nanofabricaçao e Caracterizaçao de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduaçao em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisiçao de um microscópio eletrônico de alta resoluçao do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existencia de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperaçao. Neste contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. "},{text:"Além disso, o NANOFAB atende demandas na área de micro e nanofabricaçao com o oferecimento de uma infraestrutura de sala limpa para fabricação de microdispositivos e deposição de Grafeno por deposição de vapor químico (Chemical Vapor Deposition). Esta sala limpa possui uma área especial para a manipulação e preparação de nanomateriais."},{text:"O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. Além disso, possui equipamentos para preparação de amostras para microscopia eletrônica de transmissão (MET)."},{text:"O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geraçăo de hidrogęnio, revestimentos de aços e compósitos."}]}),S(_A,{cards:[{image:nk,title:"Coordenação e Comitê Gestor",text:"O NANOFAB é coordenado pelo prof. José Brant de Campos (UERJ) e tem como vice-coordenador o prof. Norberto Mangiavacchi (UERJ). O Comitę Gestor do NANOFAB, é composto por quatro membros eleitos a cada dois anos. Para o Bienio 2023-2025, o Comite Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET), Rogério Navarro Correia de Siqueira (PUC-Rio) e pela profa. Suzana Bottega Peripolli (UERJ)."},{image:tk,title:"Unidades e Programas Envolvidos / Projetos de Pesquisa",text:"Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química  e Engenharia Química) e o Instituto de Física da UERJ. O NANOFAB é um laboratório pertencente ao PROGEMULTI/UERJ (Programa de Gestão de Laboratórios e Equipamentos Multiusuários) da UERJ. Dentro das parcerias externas de pesquisa e institucionais, o NANOFAB desenvolve trabalhos com o sistema SENAI, CBPF, PUC-Rio, CEFET, UFRJ e UFF e coopera com universidades e centros de pesquisa no exterior, como o Centro de Microeletrônica de Barcelona (CNM), na Espanha e a Universidade de Louvain (UCLouvain), na Bélgica."}]}),S(an,{})]}),jA=A.div`
  width: 100%;
`,UA=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`,BA=A.div`

`,HA=A.img`
  height: 120px;
  @media screen and (max-width: ${y.mobile}) {
    height: 80px;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    height: 100px;
  }

  @media screen and (min-width: 700px) and (max-width: 821px) {
    height: 100px;
  }
`,VA=A.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  margin-bottom: 20px;

  @media screen and (max-width: ${y.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
`,WA=A.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    border-radius: 40px;
    
    @media screen and (max-width: ${y.mobile}) {
        width: 90%;
    }  
    
    @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
        width: 90%;
    }
`,GA=A.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (max-width: ${y.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${y.tablet}) and (max-width: 1025px) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${y.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,qA=A.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #d5d4d4;
`,JA=A.div`
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
`,QA=A.div`
    width: 40%;
    margin: 10px;

    @media screen and (max-width: ${y.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${y.largeMobile}) {    
        width: 70%;
    }
`,XA=A.button`    
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
`,KA=A.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;
    flex-wrap: wrap;

    @media screen and (max-width: ${y.mobile}) {   
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
    
`,xc=A.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    flex: 1
`,wc=A.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`,YA=A.span`
    font-size: ${({theme:e})=>e.fonts.small}px;
    color: ${({theme:e})=>e.colors.text.title};
    text-align: left;
`,Sc=A.span`

`;function _1(e){return ho({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 14l-4-4h8z"}}]}]})(e)}function z1(e){return ho({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10l4 4H8z"}}]}]})(e)}const ZA=({name:e,unit:t,bond:n,titration:r})=>{const[i,o]=E.useState(!1);return z(QA,{children:[z(XA,{onClick:()=>o(!i),isVisible:i,children:[S(YA,{children:e}),i?S(z1,{size:20}):S(_1,{size:20})]}),i?z(KA,{isVisible:i,children:[z(xc,{children:[S(wc,{children:"PPG/IES"}),S(Sc,{children:t})]}),z(xc,{children:[S(wc,{children:"Vínculo"}),S(Sc,{children:n})]}),z(xc,{children:[S(wc,{children:"Titulação"}),S(Sc,{children:r})]})]}):null]})},eR=({title:e,persons:t})=>z(WA,{children:[S(qA,{children:S(GA,{children:e})}),S(JA,{children:t.map(n=>S(ZA,{name:n.name,bond:n.bond,titration:n.titration,unit:n.unit},t.indexOf(n)))})]}),tR="/Nanofab-Project/assets/team-2f83bf5a.png",nR=({list:e})=>z(UA,{children:[S(BA,{children:S(HA,{src:tR})}),S(VA,{children:"Equipe"}),e.map(t=>S(eR,{title:t.personFunction,persons:t.persons},e.indexOf(t)))]}),rR=({})=>z(jA,{children:[S(on,{}),S(nR,{list:[{personFunction:"Comitê Gestor",persons:[{name:"José Brant de Campos",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE "},{name:"Noberto Mangiavacchi",unit:"UERJ",bond:"Permanente",titration:"Doutor"},{name:"Hector Reynaldo Meneses",unit:"CEFET-RJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rogério Navarro Correia de Siqueira",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Suzana Bottega Peripolli",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]},{personFunction:"Equipe NANOFAB",persons:[{name:"Maybi Fálker Sampaio",unit:"NANOFAB/UERJ",bond:"Bolsista QUALITEC/UERJ",titration:"Doutor"},{name:"Kellen Venâncio dos Santos",unit:"NANOFAB/UERJ",bond:"Bolsista TCT/FAPERJ",titration:"Engenheira"},{name:"Camila Alves Pelicarto Silva",unit:"NANOFAB/UERJ",bond:"Bolsista PROATEC/UERJ",titration:"Engenheira"}]},{personFunction:"Comitê de Usuários",persons:[{name:"Lilian Pantoja Sosman",unit:"IF - PPGF/UERJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Ivana Lourenço de Mello Ferreira",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilia Garcia Diniz",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José Ricardo Muniz Ferreira",unit:"Empresa R-CRio",bond:"Sócio",titration:"Doutor"}]},{personFunction:"Pesquisador",persons:[{name:"Eduardo de Albuquerque Brocchi",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 1C, CNE"},{name:"José Guilherme Santos Silva",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1B, CNE"},{name:"Luciano Rodrigues Ornelas de Lima",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1D, CNE"},{name:"Marcos Antonio da Silva Costa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Nakédia Maysa Freitas Carvalho",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE"},{name:"Francisco José Moura",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rodrigo Fernandes Magalhães de Souza",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eric Cardona Romani",unit:"SENAI",bond:"Permanente",titration:"Doutor"},{name:"Jorge Luis do Amaral",unit:"PPG-EL/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilza Sampaio Aguilar",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Daniel José Naid Mansur Chalhub",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José da Rocha Miranda Pontes",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Ana Maria Furtado de Sousa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Jaqueline Dias Senra",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Juliana Fonseca de Lima",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Herman Lima Pessoa",unit:"CBPF",bond:"Permanente",titration:"Doutor"},{name:"Letícia Aguilera dos Santos",unit:"IPRJ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Cecilia Vilani",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Celio Albano da Costa",unit:"UFRJ",bond:"Permanente",titration:"Doutor"},{name:"José Luis Lopes da Silveira",unit:"UFRJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eduardo Sousa Lima",unit:"IME",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eustáquio de Souza Baêta Junior",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]}]}),S(an,{})]}),iR=A.div`
  width: 100%;
`,oR=A.div`
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
`,aR=A.h1`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;


  @media screen and (min-width: ${y.desktop}) and (max-width: ${y.largeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*3.5}px;
  }
`,sR=A.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
`,lR=A.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`,uR=A.div`
  margin-top: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;

  @media screen and (max-width: ${y.mobile}) {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    width: 100%;
    margin-top: 20px;
  }
`,pg=A.button`
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

   @media screen and (max-width: ${y.mobile}) {
     width: 50%;
   }

   @media screen and (min-width: 390px) and (max-width: ${y.largeMobile}) {
     width: 50%;
   }

   @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
     width: 50%;
   }

   @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
     width: 50%;
   }

   @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
     width: 60%;
   }

   @media screen and (min-width: ${y.extraLargeDesktop}) {
     width: 30%;
     font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
   }
   @media screen and (min-width: ${y.desktop}) and (max-width: ${y.largeDesktop}) {
     width: 30%;
     font-size: ${({theme:e})=>e.fonts.extralarge}px;
   }
`,cR=A.div`
  width: 50%;
  margin-bottom: 3%;
  margin-right: 50%;
`,dR=A.h2`
  font-size: ${({theme:e})=>e.fonts.large}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

   @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
     font-size: ${({theme:e})=>e.fonts.large}px;
   }

   @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
     font-size: ${({theme:e})=>e.fonts.extralarge}px;
   }

   @media screen and (min-width: ${y.desktop}) and (max-width: ${y.largeDesktop}) {
     font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
   }

   @media screen and (min-width: ${y.extraLargeDesktop}) {
     font-size: ${({theme:e})=>e.fonts.extralarge*2.5}px;
   }
`,fR=A.select`
  width: 25%;
  border-radius: 10px;
  margin-right: 20px;
  padding: 0.5%;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fonts.small}px;

  @media screen and (max-width: ${y.mobile}) {
    width: 100%;
    margin-right: 6px;
  }

  @media screen and (min-width: 390px) and (max-width: ${y.largeMobile}) {
    width: 100%;
    margin-right: 5px;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    width: 100%;
    margin-right: 6px;
  }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
    width: 100%;
    margin-right: 10px;
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    width: 100%;
    margin-right: 10px;
  }

  @media screen and (min-width: ${y.desktop}) and (max-width: ${y.largeDesktop}) {
    width: 30%;
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    width: 35%;
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
`;A.option`
  font-size: ${({theme:e})=>e.fonts.large}px;
`;const pR=A.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  width: 100%;
`,hR=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  
  
`,mR=A.div`
    width: 100%;
    display: flex;
    background-color: #D5D4D4;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


`,gR=A.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin: 5px;
    font-weight: bold;
    margin-left: 10px;

    @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
      }
      @media screen and (min-width: ${y.extraLargeDesktop}){    
        
      }
      
`,vR=A.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    
`,yR=A.span`
    text-align: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ${({status:e})=>{if(e==="Aprovado")return"background-color: rgba(48, 212, 111, 0.7);";if(e==="Solicitado")return"background-color: rgba(255, 204, 92, 0.7);";if(e==="Cancelado")return"background-color: rgba(255, 111, 105, 0.7);"}}
`,bc=A.span`
    margin: 10px;
`,xR=({name:e,institution:t,startDate:n,endDate:r,samples:i,situation:o})=>z(hR,{children:[S(mR,{children:z(gR,{children:[e," - ",t]})}),z(vR,{children:[z(bc,{children:["Data de Solicitação: ",n]}),z(bc,{children:["Data Final: ",r||"Não informado"]}),z(bc,{children:["Quantidade de Amostras: ",i]})]}),S(yR,{status:o,children:o})]}),wR=({list:e})=>{const[t,n]=E.useState(0),[r,i]=E.useState(9),[o,a]=E.useState("Todos");E.useState([]);const[s,l]=E.useState([]);E.useEffect(()=>{const w=[];e.forEach(v=>{(o==="Todos"||v.situation===o)&&w.push(v)}),l(w)},[e,o]);const u=()=>{t===9?(n(t),i(r)):(n(t+9),i(r+9))},c=()=>{t===0?(n(0),i(9)):(n(t-9),i(r-9))},d=s.slice(t,r).map(w=>S(xR,{name:w.name,institution:w.institution,startDate:w.startDate,endDate:w.endDate,samples:w.samples,situation:w.situation},e.indexOf(w)));function f(w){w.target.value==="Todos"?a("Todos"):w.target.value==="Solicitado"?a("Solicitado"):w.target.value==="Agendado"?a("Agendado"):w.target.value==="Finalizado"?a("Finalizado"):w.target.value==="Antigos"&&a("Antigos")}return z(sR,{children:[z(cR,{children:[S(dR,{children:"Filtro"}),S(pR,{children:z(fR,{onChange:w=>f(w),children:[S("option",{value:"Todos",children:"Todos"}),S("option",{value:"Solicitado",children:"Solicitado"}),S("option",{value:"Agendado",children:"Agendado"}),S("option",{value:"Finalizado",children:"Finalizado"}),S("option",{value:"Antigos",children:"Antigos"})]})})]}),S(lR,{children:d}),z(uR,{children:[S(pg,{onClick:c,children:"Anterior"}),S(pg,{onClick:u,children:"Próxima"})]})]})},SR=({})=>z(oR,{children:[S(aR,{children:"Lista de Solitações"}),S(wR,{list:[{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Finalizado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Antigos"}]})]}),bR=({})=>z(iR,{children:[S(on,{}),S(SR,{}),S(an,{})]}),ER=A.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`,CR=A.div`
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

  @media screen and (max-width: ${y.mobile}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }
`,kR=A.div`
  position: absolute;
  top: -50px;
  right: -50px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${y.mobile}) {
    right: calc(100vw / 3);
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    right: calc(100vw / 3);
  }
  /*
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  } */
`,AR=A.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${y.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
 
`;A.h1` // Submissão de Projeto
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;

  @media screen and (max-width: ${y.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }
`;const RR=A.div`
  width: 100%;
  padding: 2%;
  padding-left: 0%;
  padding-right: 0%;
  padding-bottom: 0;

`,Lo=A.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${y.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,vu=A.input`
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
    
    @media screen and (max-width: ${y.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`;A.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
    `;const ir=A.input`
    height: 15px;
    width: 15px;
`,or=A.label`
  margin-left: 5px;
  font-family: "Maven Pro";
  `,ar=A.div`
  display: flex;
  
  flex-direction: row;
  margin: 5px;
  `,Ec=A.div`
  margin-bottom: 3%;
  margin-top: 3%;
  `,OR=A(vu)`

`,TR=A(vu)`

`,PR=A(vu)`

`,yu=A.div`
    margin-bottom: 3%;
`;A(yu)`

`;A(yu)`

`;A(yu)`

`;const $R=({formData:e,setFormData:t})=>{const n=r=>{switch(console.log(r),r){case"microscopia_eletronica":t({...e,microscopia_eletronica:!e.microscopia_eletronica});break;case"amostras_met":t({...e,amostras_met:!e.amostras_met});break;case"grafeno_cvd":t({...e,grafeno_cvd:!e.grafeno_cvd});break;case"microsoldadora":t({...e,microsoldadora:!e.microsoldadora});break;case"microdurometro":t({...e,microdurometro:!e.microdurometro});break;case"estereoscopio":t({...e,estereoscopio:!e.estereoscopio});break;case"nanomat":t({...e,nanomat:!e.nanomat});break;case"microfab":t({...e,microfab:!e.microfab});break;default:console.log("Caso fora do switch-case")}};return z(RR,{children:[z(yu,{children:[S(Lo,{children:"Orientador:"}),S(vu,{type:"text",name:"orientador",value:e.orientador,onChange:r=>t({...e,orientador:r.target.value}),placeholder:"(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"})]}),S(Lo,{children:"Tipos:"}),z(ar,{children:[S(ir,{type:"checkbox",value:"1",checked:e.microscopia_eletronica,onChange:()=>n("microscopia_eletronica")}),S(or,{children:"Microscopia Eletrônica de Varredura"})]}),z(ar,{children:[S(ir,{type:"checkbox",value:"amostras_met",checked:e.amostras_met,onChange:()=>n("amostras_met")}),S(or,{children:"Preparação de Amostras para MET"})]}),z(ar,{children:[S(ir,{type:"checkbox",value:"nanomat",checked:e.nanomat,onChange:()=>n("nanomat")}),S(or,{children:"Sala Limpa: preparação de Nanomateriais"})]}),z(ar,{children:[S(ir,{type:"checkbox",value:"microfab",checked:e.microfab,onChange:()=>n("microfab")}),S(or,{children:"Sala Limpa: microfabricação"})]}),z(ar,{children:[S(ir,{type:"checkbox",value:"grafeno_cvd",checked:e.grafeno_cvd,onChange:()=>n("grafeno_cvd")}),S(or,{children:"Sala Limpa: Deposição de Grafeno por CVD"})]}),z(ar,{children:[S(ir,{type:"checkbox",value:"microsoldadora",checked:e.microsoldadora,onChange:()=>n("microsoldadora")}),S(or,{children:"Microsoldadora"})]}),z(ar,{children:[S(ir,{type:"checkbox",value:"microdurometro",checked:e.microdurometro,onChange:()=>n("microdurometro")}),S(or,{children:"Microdurômetro"})]}),z(ar,{children:[S(ir,{type:"checkbox",value:"estereoscopio",checked:e.estereoscopio,onChange:()=>n("estereoscopio")}),S(or,{children:"Estereoscópio"})]}),z(Ec,{children:[S(Lo,{children:"Outros:"}),S(OR,{type:"text",name:"outros",value:e.outros,onChange:r=>t({...e,outros:r.target.value}),placeholder:"Informar nome."})]}),z(Ec,{children:[S(Lo,{children:"Detectores:"}),S(TR,{type:"text",name:"outros",value:e.detectores,onChange:r=>t({...e,detectores:r.target.value}),placeholder:"[TEMP] Informar detectores."})]}),z(Ec,{children:[S(Lo,{children:"Projeto Científico e Descrição das Amostras:"}),S(PR,{type:"text",name:"outros",value:e.projeto_descricao_amostras,onChange:r=>t({...e,projeto_descricao_amostras:r.target.value}),placeholder:"[TEMP] Informar Projeto Científico e Descrição das Amostras:."})]})]})},LR=A.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,MR=A.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
    
    @media screen and (max-width: ${y.mobile}) {    
        width: 80%;
        margin-bottom: 5%;
    }
    @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {   
        width: 80%;
        margin-bottom: 5%;
    }
    `,hg=A.button`
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

    @media screen and (max-width: ${y.mobile}) {    
        width: 40%;
        height: 5vh;
    }

    @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {   
        width: 40%;
    }

    `,NR=({})=>S(LR,{children:z(MR,{children:[S(hg,{children:"Apagar"}),S(hg,{type:"submit",children:"Enviar"})]})}),FR=A.div`
    width: 100%;
    margin-bottom: 3%;

`,Cc=A.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${y.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,IR=A.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
`,mg=A.section`
    width: 30%;
`,gg=A.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    margin: 3%;
    margin-left: 0px;
`,vg=A.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,yg=A.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,DR=A.input`
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
    
    @media screen and (max-width: ${y.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,_R=A.div`
  margin-bottom: 3%;
`,zR=A.input`
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
    
    @media screen and (max-width: ${y.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,jR=({formData:e,setFormData:t})=>z(FR,{children:[z(IR,{children:[z(mg,{children:[S(Cc,{children:"Tipo de Análise"}),z(gg,{children:[S(vg,{type:"radio",id:"quantitativa",name:"analysisType",color:"red",value:"quantitativa",checked:e.analise_quantitativa,onChange:()=>{e.analise_quantitativa!==e.analise_qualitativa&&t({...e,analise_quantitativa:!e.analise_quantitativa,analise_qualitativa:!e.analise_qualitativa}),e.analise_quantitativa===e.analise_qualitativa&&t({...e,analise_quantitativa:!0,analise_qualitativa:!1})}}),S(yg,{htmlFor:"quantitativa",children:"Quantitativa"})]}),z(gg,{children:[S(vg,{type:"radio",id:"qualitativa",name:"analysisType",value:"Qualitativa",onChange:()=>{e.analise_quantitativa!==e.analise_qualitativa&&t({...e,analise_quantitativa:!e.analise_quantitativa,analise_qualitativa:!e.analise_qualitativa}),e.analise_quantitativa===e.analise_qualitativa&&t({...e,analise_quantitativa:!1,analise_qualitativa:!0})}}),S(yg,{htmlFor:"qualitativa",children:"Qualitativa"})]})]}),z(mg,{children:[z(Cc,{children:["Qntd. de Amostras - Máximo ",ef]}),S(DR,{type:"number",min:"1",max:ef,value:e.quantidade_amostras,onChange:n=>t({...e,quantidade_amostras:parseInt(n.target.value)})})]})]}),z(_R,{children:[S(Cc,{children:"Técnicas de Medida e Condições de Varredura:"}),S(zR,{type:"text",name:"tecnicas_condicoes",value:e.tecnicas_condicoes,onChange:n=>t({...e,tecnicas_condicoes:n.target.value}),placeholder:"Se souber, descreva as técnicas de medida e as condições de carredura."})]})]}),UR=A.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
    margin-bottom: 3%;
`,xg=A.div`
    width: 45%;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    
`,wg=A.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
`,Sg=A.input`
    width: 90%;
    height: 40px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    margin-bottom: 10px;
    
    `,BR=({formData:e,setFormData:t})=>{const n=(r,i,o)=>{const a=e.amostras;o==="composicaoAmostra"?a[r]={identificacao_amostra:a[r].identificacao_amostra,composicao_quimica:i}:a[r]={identificacao_amostra:i,composicao_quimica:a[r].composicao_quimica},t({...e,amostras:a})};return z(UR,{children:[z(xg,{children:[S(wg,{children:"Identificação da(s) Amostra(s):"}),S(gh,{children:Array.from({length:e.quantidade_amostras},(r,i)=>S(Sg,{type:"text",onChange:o=>n(i,o.target.value,"identificacaoAmostra"),name:"chemicalIdentification"},i))})]}),z(xg,{children:[S(wg,{children:"Composição Química:"}),S(gh,{children:Array.from({length:e.quantidade_amostras},(r,i)=>S(Sg,{type:"text",onChange:o=>n(i,o.target.value,"composicaoAmostra"),name:"chemicalComposition"},i))})]})]})},HR=A.div`
  width: 100%;
  padding: 5%;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0;

`,kc=A.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${y.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,VR=A.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
`,WR=A.h4`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;  
`,GR=A.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3%;
`,bg=A.section`
    width: 45%;
`,sr=A.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    margin: 3%;
    margin-left: 0px;
`,lr=A.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,ur=A.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,qR=A.select`
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
    
    @media screen and (max-width: ${y.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,Eg=A.option`

`,JR=A.div`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,QR=A.p`
  color: #5086B6;
`;A.select`
  
`;const XR=({formData:e,setFormData:t})=>{const n=["Urgente","Alta","Média","Baixa"],r=E.useRef(null),i=()=>r.current.value;return z(HR,{children:[z(GR,{children:[z(bg,{children:[S(kc,{children:"Retornar a(s) amostra(s) analisada(s)?"}),z(sr,{children:[S(lr,{type:"radio",id:"retorna_sim",name:"analysisType",value:"retorna_sim",color:"red",checked:e.retornar_amostra!=null?e.retornar_amostra:!1,onChange:()=>t({...e,retornar_amostra:!0})}),S(ur,{htmlFor:"retorna_sim",children:"Sim"})]}),z(sr,{children:[S(lr,{type:"radio",id:"retorna_nao",name:"analysisType",value:"retorna_nao",color:"red",checked:e.retornar_amostra!=null?!e.retornar_amostra:!1,onChange:()=>t({...e,retornar_amostra:!1})}),S(ur,{htmlFor:"retorna_nao",children:"Não"})]})]}),z(bg,{children:[S(kc,{children:"Nível de prioridade desejada:"}),z(qR,{id:"priority_selector",name:"priority_selector",ref:r,onChange:()=>{t({...e,nivel_prioridade:i()})},children:[S(Eg,{value:" ",selected:!0,disabled:!0,children:"Selecione uma prioridade"}),n.map(o=>S(Eg,{value:o,children:o}))]})]})]}),z(JR,{children:[S(kc,{children:"Informe as condições de segurança quanto ao manuseio do material."}),S(WR,{children:"Caso a quantidade de amostras passe o número proposto, avisar antes de envia-las"}),z(VR,{children:[z(sr,{children:[S(lr,{type:"radio",id:"inflamavel",name:"securityConditions",value:"inflamavel",onClick:()=>t({...e,condicao_seguranca:"inflamavel"})}),S(ur,{htmlFor:"inflamavel",children:"Inflamável"})]}),z(sr,{children:[S(lr,{type:"radio",id:"toxico",name:"securityConditions",value:"toxico",onClick:()=>t({...e,condicao_seguranca:"toxico"})}),S(ur,{htmlFor:"toxico",children:"Tóxico"})]}),z(sr,{children:[S(lr,{type:"radio",id:"hidroscopico",name:"securityConditions",value:"hidroscopico",onClick:()=>t({...e,condicao_seguranca:"hidroscopico"})}),S(ur,{htmlFor:"hidroscopico",children:"Hidroscópico"})]}),z(sr,{children:[S(lr,{type:"radio",id:"radioativo",name:"securityConditions",value:"radioativo",onClick:()=>t({...e,condicao_seguranca:"radioativo"})}),S(ur,{htmlFor:"radioativo",children:"Radioativo"})]}),z(sr,{children:[S(lr,{type:"radio",id:"corrosivo",name:"securityConditions",value:"corrosivo",onClick:()=>t({...e,condicao_seguranca:"corrosivo"})}),S(ur,{htmlFor:"corrosivo",children:"Corrosivo"})]}),z(sr,{children:[S(lr,{type:"radio",id:"corrosivo",name:"securityConditions",value:"corrosivo",onClick:()=>t({...e,condicao_seguranca:"outros"})}),S(ur,{htmlFor:"corrosivo",children:"Outros"})]})]}),S(QR,{children:"(*) Caso não saiba as condições de segurança quanto ao manuseio, não é necessário selecionar os campos."})]})]})},KR="/Nanofab-Project/assets/search-1143e4ec.png",ef=200,YR=({})=>{E.useState(1);const[e,t]=E.useState({analise_qualitativa:!1,analise_quantitativa:!1,quantidade_amostras:1,tecnicas_condicoes:"",orientador:"",microscopia_eletronica:!1,amostras_met:!1,nanomat:!1,microfab:!1,grafeno_cvd:!1,microsoldadora:!1,microdurometro:!1,estereoscopio:!1,outros:"",detectores:"",projeto_descricao_amostras:"",amostras:Array(ef).fill({}),nivel_prioridade:"",condicao_seguranca:""}),n=r=>{r.preventDefault(),console.log(e)};return E.useEffect(()=>{},[]),z(CR,{children:[S(kR,{children:S(AR,{src:KR})}),z("form",{onSubmit:n,children:[S(jR,{formData:e,setFormData:t}),S($R,{formData:e,setFormData:t}),S(BR,{formData:e,setFormData:t}),S(XR,{formData:e,setFormData:t}),S(NR,{formData:e,setFormData:t})]})]})},ZR=({})=>z(ER,{children:[S(on,{}),S(YR,{}),S(an,{})]}),eO=A.div`
  width: 100%;
`,tO=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${y.mobile}) {
    margin-top: 7%;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    margin-top: 6%;
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    margin-top: 5%;
  }

  @media screen and (min-width: ${y.desktop}) and (max-width: ${y.largeDesktop}) {
    margin-top: 2%;
  }
`,nO="/Nanofab-Project/assets/publications2-b4db6c33.svg",rO=A.div`
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    margin-bottom: 2%;
  }
`,iO=A.div`
  /* width: 30%; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 70px; */
`,oO=A.div`
  height: 10vh;
  padding: 35px;

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    margin-bottom: 5%;
  }
  
  @media screen and (min-width: ${y.desktop}) and (max-width: ${y.largeDesktop}) {
    margin-bottom: 10%;
    padding: 0;
  }

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {    
    padding: 0;
    margin: 0;
  }
`,aO=A.img`
  height: 150px;
  width: 150px;

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {
    height: 180px;
    width: 180px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    height: 250px;
    width: 250px;
  }
`,sO=({url:e})=>S(oO,{children:S(aO,{src:e})}),lO=A.div``,uO=A.span`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,cO=({title:e})=>S(lO,{children:S(uO,{children:e})}),j1=({title:e,image:t})=>S(rO,{children:z(iO,{children:[S(sO,{url:t}),S(cO,{title:e})]})}),dO=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 50px;
`,fO=A.div`
    width: 40%;
    margin-bottom: 10px;

    @media screen and (max-width: ${y.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${y.largeMobile}) {    
        width: 70%;
    }

    @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
        margin-bottom: 20px;
    }
`,pO=A.button`    
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
`,hO=A.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;

    @media screen and (max-width: ${y.mobile}) {   
        justify-content: space-between;
    }
    @media screen and (min-width: ${y.extraLargeDesktop}) {    
        padding: 30px;
    }
`;A.div`
    width: 50%;
    text-align: justify;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`;const mO=A.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${y.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {    
        min-height: 70px;
    }

`;A.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`;const gO=A.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    text-align: left;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #AE0806;

    @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge}px;
    }
    @media screen and (min-width: ${y.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.7}px;
    }
`,vO=A.span`
    text-align: justify;

    @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
    }
    @media screen and (min-width: ${y.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
    }
`,yO=({year:e,descriptions:t})=>{const[n,r]=E.useState(!1);return z(fO,{children:[z(pO,{onClick:()=>r(!n),isVisible:n,children:[S(gO,{children:e}),n?S(z1,{size:20}):S(_1,{size:20})]}),n?S(hO,{isVisible:n,children:t.map(i=>S(mO,{children:S(vO,{children:i.description})}))}):null]})},xO=({list:e})=>S(dO,{children:e.map(t=>S(yO,{year:t.year,descriptions:t.descriptions},e.indexOf(t)))}),wO=({})=>z(eO,{children:[S(on,{}),S(j1,{title:"Publicações",image:nO}),S(tO,{children:S(xO,{list:[{year:"2022",descriptions:[{description:"SILVA, ADRIEL M.; SOUZA, RODRIGO F.M.; AGUILERA, LETÍCIA S.; de Campos, José B.; BROCCHI, EDUARDO A. Upgrade of titanium content in a vanadiferous titanomagnetite waste: Design of a roast-leach route based on thermodynamics simulations. MINERALS ENGINEERING. , v.179, p.107460 - , 2022."},{description:"LIMA, EDUARDO DE SOUSA; GALL, CAMILA CATALANO; ALVES, MANUEL FELLIPE R.P.; DE CAMPOS, JOSÉ BRANT; CAMPOS, TIAGO MOREIRA BASTOS; SANTOS, CLAUDINEI DOS Development and characterization of alumina-toughened zirconia (ATZ) ceramic composites doped with a beneficiated rare-earth oxide extracted from natural ore. Journal of Materials Research and Technology-JMR&T. , v.16, p.451 - 460, 2022."}]},{year:"2021",descriptions:[{description:"MARÍN CASTAÑO, ELIANA PAOLA; CAMPOS, JOSÉ BRANT DE; SOLÓRZANO-NARANJO, IVAN GUILLERMO; BROCCHI, EDUARDO DE ALBUQUERQUE Characterization of Ternary CuNiCo Metallic Nanoparticles Produced by Hydrogen Reduction.Materials. , v.14, p.6006 - , 2021."},{description:"SAMPAIO, M.F.; MARINHO, P.R.B.; CABRUJA, E.; LOZANO, M.; LIMA JÚNIOR, H.P.; de Campos, J.B. SU- 8 processing improvement and simulating studies for a Micromegas detector fabrication.Journal of Instrumentation. , v.16, p.P08022 - P02038, 2021."},{description:"HORTA, MARLA KAROLYNE DOS SANTOS; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; WESTIN, CECÍLIA BUZATTO; NAVARRO DA ROCHA, DANIEL; CAMPOS, JOSÉ BRANT < i > In vitro</> evaluation of natural hydroxyapatite from Osteoglossum bicirrhosum fish scales for biomedical application.International Journal of Applied Ceramic Technology. , v.18, p.1930 - 1937, 2021."},{description:"MOTA, RAFAEL OLIVEIRA DA; DÓREA, MÁRCIA DE MELO; AGUILERA, LETÍCIA DOS SANTOS; ROMANI, ERIC CARDONA; COSTA, HECTOR REYNALDO MENESES; CAMPOS, JOSÉ BRANT DE AVANÇOS RECENTES NA UTILIZAÇÃO DO GRAFENO COMO ADITIVO EM POLÍMEROS / RECENT ADVANCES IN THE USE OF GRAPHENE AS AN ADDITIVE IN POLYMERS. Brazilian Journal of Development. , v.7, p.32743 - 32752, 2021."},{description:"RIBEIRO, SUZANA BARRETO NORONHA; DA VEIGA JUNIOR, VALDIR FLORÊNCIO; DE CAMPOS, JOSÉ BRANT; DOS SANTOS, JHEISON LOPES; LOPES, IAGO JOSÉ VITRAL REZENDE; DA ROCHA, DANIEL NAVARRO; DA SILVA, MARCELO HENRIQUE PRADO Influences of biosilica content from Amazonian freshwater sponge on calcium phosphates.Journal of the Australian Ceramic Society. , v.57, p.55 - 65, 2021"},{description:"Machado, Marcelo Vitor Ferreira; DE CAMPOS, JOSÉ BRANT; AGUILAR, MARILZA SAMPAIO; Ramos, Vitor Santos Mechanical and Microstructural Characterizations on Commercial and Synthesized by the Sol- Gel Method Using Chicken Egg Shells as Precursor Hydroxyapatite.South Florida Journal of Development. , v.2, p.1365 - 1374, 2021."}]},{year:"2020",descriptions:[{description:"BARROS, S. D.; DUARTE, J. P. P.; ROCHA, L. D. S.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S.; MEDEIOS, M. E.; de Campos, José B.; COSTA, M. E. H. M.; LACHTER, E. R.; SENRA, J. D.; MALTA, L. F. B. Cyclodextrin-Stabilized Palladium Nanoparticles on Ceria: Invertigation of Support Interactions and Pivotal Promotion in the Suzuki-Miyaura Reaction. ChemistrySelect. , v.5, p.7227 - 7235, 2020."},{description:"MELLO, NATHALLI M.; REGO, ARTUR S. C.; BROCCHI, EDUARDO A.; CAMPOS, JOSÉ B. DE; MOURA, FRANCISCO J.; SOUZA, RODRIGO F. M. Effect of an Alumina Supported Palladium Catalyst on the Magnesium Sulfate Decomposition Kinetics. MATERIALS RESEARCH. , v.23, p.1 - 9, 2020."},{description:"CARNEIRO, MATEUS R. D.; FREITAS, BRUNO C.; DE BARROS, IURI B.; de Campos, José B.; BASTOS, IVAN N.; COSTA, HECTOR R. M. Evaluation of adhesion of epoxy resin sealant to improve the corrosion resistance of thermal sprayed coatings. APPLIED ADHESION SCIENCE. , v.8, p.7 - 21, 2020."},{description:"HORTA, M. K. S.; Moura F.J.; AGUILAR, M. S.; WESTIN, C. B.; de Campos, J.B.; PERIPOLLI, S. B.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S. Nanostructured Hydroxyapatite from Hen's Eggshells Using Sucrose as a Template. Materials Research-Ibero-american Journal of Materials. , v.23, p.1 - 9, 2020."}]},{year:"2019",descriptions:[{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; SANTOS, JHEISON LOPES DOS; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; BARBOSA, RAFAEL MAZA; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Bioactivity of strontium-monetite coatings for biomedical applications. CERAMICS INTERNATIONAL. , v.45, p.7568 - 7579, 2019."},{description:"SILVA, LORENNA; NEVES, VINÍCIUS; RAMOS, VITOR; SILVA, RAPHAEL; CAMPOS, JOSÉ; SILVA, ALEXSANDRO; MALTA, LUIZ; SENRA, JAQUELINE Layered Double Hydroxides as Bifunctional Catalysts for the Aryl Borylation under Ligand-Free Conditions. Catalysts. , v.9, p.302 - 314, 2019."},{description:"GALVÃO, RHAUANE ALMEIDA; SANTA-CRUZ, LARISSA AGOSTINHO DE; BARRETO, PALOMA BANTIM; HORTA, MARLA KAROLYNE DOS SANTOS; ANDRADE, ANTONIO MARCOS HELGUEIRA DE; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; PERIPOLLI, SUZANA BOTTEGA; CAMPOS, JOSÉ BRANT DE; ARRUDA, ISABEL RENATA DE SOUZA; MACHADO, GIOVANNA Electrochemical single-step obtention and characterization of a biomimetic TiO <sub>2</sub> -HA NTs covered by chitosan. JOURNAL OF MATERIALS RESEARCH. , v.34, p.1 - 11, 2019."},{description:"SOUZA, RODRIGO; QUEIROZ, CARLOS; BRANT, JOSÉ; BROCCHI, EDUARDO Pyrometallurgical processing of a low copper content concentrate based on a thermodynamic assessment. MINERALS ENGINEERING. , v.130, p.156 - 164, 2019."},{description:"HORTA, MARLA; AGUILAR, MARILZA; MOURA, FRANCISCO; CAMPOS, JOSÉ; RAMOS, VITOR; QUIZUNDA, ADILSON Synthesis and characterization of green nanohydroxyapatite from hen eggshell by precipitation method. MATERIALS TODAY: PROCEEDINGS. , v.14, p.716 - 721, 2019"}]},{year:"2018",descriptions:[{description:"FERREIRA, J. R. M.; Louro, Luis Henrique Leme; COSTA, A. M.; MARCAL, R. L. S. B.; ROCHA, D. N.; BARBOSA, R. M.; de Campos, José B.; PRADO, M. H. Zinc-doped Calcium Phosphate Coating on Titanium Surface Using Ostrich Eggshell as a Ca2+ Ions Source. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."},{description:"AGUILERA, L. S.; de Campos, J.B.; de Biasi, R.S.; Figueiredo, A.B.H.S. Use of the Drag Method to Study the Magnetic Behavior of Mn-Zn Ferrite Nanoparticles. The International Journal of Engineering and Science. , v.7, p.57 - 61, 2018."},{description:"BIASI, RONALDO SERGIO DE; MELO, GABRIEL BURLANDY MOTA DE; FIGUEIREDO, ANDRÉ BEN-HUR DA SILVA; CAMARENA, MARIELLA ALZAMORA; CAMPOS, JOSÉ BRANT DE Properties of manganese ferrite-paraffin composites. Journal of Materials Research and Technology-JMR&T. , v.8, p.309 - 313, 2018."},{description:"AGUILERA, L. S.; MARCAL, R. L. S. B.; de Campos, J.B.; PRADO, M. H.; Figueiredo, A.B.H.S.MAGNETIC FILTER PRODUCED BY ZnFe2O4 NANOPARTICLES USING FREEZE CASTING. Journal of Materials Research and Technology-JMR&T. , v.7, p.350 - 355, 2018. "},{description:"ROCHA, DANIEL NAVARRO DA; SILVA, MARCELO H. PRADO DA; CAMPOS, JOSÉ BRANT DE; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; CRUZ, LEILA ROSA Kinetics of conversion of brushite coatings to hydroxyapatite in alkaline solution. Journal of Materials Research and Technology-JMR&T. , v.7, p.479 - 486, 2018."},{description:"Cabral, R.F.; de Campos, J.B.; SILVA, C. E. V.; FONSECA, G. M.; LIMA, W. N.; LIMA, E. Formação da fase YNbO4 na sinterização do compósito Alumina-YAG com Nb2O5. CADERNOS UNIFOA (IMPRESSO). , v.36, p.29 - 35, 2018."},{description:"Cabral, R.F.; PRADO DA SILVA, M.H.; Lima, E.S.; de Campos, J.B.; MAGNAGO, ROBERTO DE OLIVEIRA Evaluation of Hardness and the Fracture Toughness of Composite Biphasic Alumina-YAG. MATERIALS SCIENCE FORUM (ONLINE). , v.912, p.82 - 86, 2018."},{description:"SALEIRO, GISELE TEIXEIRA; GONÇALVES, DANILO CORREA; COSTA, CÉLIO ALBANO DA; CAMPOS, JOSÉ BRANT DE; LIMA, EDUARDO DE SOUSA COMPORTAMENTO MECÂNICO DO SIC ADITIVADO COM Al2O3 E Y2O3 PRODUZIDOS PELA SÍNTESE POR COMBUSTÃO AUTOSSUSTENTÁVEL À ALTA TEMPERATURA. TECNOLOGIA EM METALURGIA, MATERIAIS E MINERAÇÃO. , v.15, p.96 - 102, 2018."},{description:"MENDONCA, F.; COSTA, A. M.; de Campos, J.B.; MARCAL, R. L. S. B.; ROCHA, D. N.; PRADO, M. H. Bioactivity Assessment of Ag-HA. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."}]},{year:"2017",descriptions:[{description:"GONÇALVES, DANILO CORRÊA; SALEIRO, GISELE TEIXEIRA; MATIAS, PHILIPE CARDOSO; GOMES, ALAELSON VIEIRA; RAMOS, VITOR; CAMPOS, JOSÉ BRANT BRANT DE; MELO, FRANCISCO CRISTOVÃO LOURENÇO DE; LIMA, EDUARDO SOUSA Microstructural Characterization and Influence of Ceramography Method on the Microhardness of Sintering Agents Added Silicon Carbide. Materials Research-Ibero-american Journal of Materials"},{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Mg substituted apatite coating from alkali conversion of acidic calcium phosphate. Materials Science & Engineering C-Materials for Biological Applications. , v.70, p.408 - 417, 2017."},{description:"ROMANI, E. C.; LARRUDE, D. G.; NACHEZ, L.; VILANI, C.; de CAMPOS, J. B.; PERIPOLLI, S. B.; FREIRE, F. L.Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS. , v.65, p.1 - 9, 2017."},{description:"SANTOS, J. L.; MARÇAL, R. L. S. B.; JESUS, P. R. R.; GOMES, A. V.; LIMA, E. P.; MONTEIRO, S. N.; de CAMPOS, J. B.; LOURO, L. H. L.Effect of LiF as Sintering Agent on the Densification and Phase Formation in Al2O3-4 Wt Pct Nb2O5 Ceramic Compound. METALLURGICAL AND MATERIALS TRANSACTIONS A-PHYSICAL METALLURGY AND MATERIALS SCIENCE. , v.48, p.4432 - 4440, 2017."}]}]})}),S(an,{})]}),SO=A.div`
  width: 100%;

`,bO=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: ${y.mobile}) {    
    margin-top: 10%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    margin-top: 8%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {    
    margin-top: 7%;   
  }


  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
    margin-top: 7%;
    margin-bottom: 5%;
  }

  @media screen and (min-width: ${y.largeNotebook}) and (max-width: ${y.desktop}) {    
    margin-top: 4%;
    margin-bottom: 5%;
  }
`,EO=A.div`
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
    @media screen and (max-width: ${y.largeDesktop}){
        height: 16%;
    }
    @media screen and (max-width: ${y.tablet}){
        height: 17%;
    }
    @media screen and (min-width: ${y.extraLargeDesktop}) {
	    height: 17%;
    }

    @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${y.largeNotebook}) and (max-width: ${y.desktop}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
        margin-top: 5%; 
    }



`,CO=A.span`
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.content};
  text-align: center;
  margin: 10px;

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,kO=A.div`
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
`,AO=A.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,RO=A.img`
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

  @media screen and (max-width: ${y.largeMobile}) {
    width: 150px;
    /* height: 120px; */
  }
  @media screen and (max-width: ${y.mobile}) {
    width: 120px;
    /* height: 120px; */
  }
  @media screen and (min-width: ${y.desktop}) {
    width: 180px;
  }
  @media screen and (min-width: ${y.largeDesktop}) {
    width: 240px;
    /* height: 210px; */
  }
  @media screen and (min-width: ${y.extraLargeDesktop}) {
    width: 300px;
    /* height: 300px; */
  }
  @media screen and (max-width: ${y.notebook}) {
    width: 120px;
  }
`,OO=({image:e,altText:t})=>S(AO,{children:S(RO,{src:e,alt:t})}),tf="/Nanofab-Project/assets/cbpf-812298b6.jpg",nf="/Nanofab-Project/assets/faperj-aefe040c.svg",rf="/Nanofab-Project/assets/finep-072bfec0.svg",Cg="/Nanofab-Project/assets/logoUFF-bce55271.png",kg="/Nanofab-Project/assets/ime-85233a07.jpg",Ag="/Nanofab-Project/assets/pucrj-1b28efc4.png",Rg="/Nanofab-Project/assets/UFRJ-ae0dd01b.jpg",Og="/Nanofab-Project/assets/cefet-fb822b95.png",Tg="/Nanofab-Project/assets/cnpq-866ab360.png",Pg="/Nanofab-Project/assets/capes-eb011932.png",$g="/Nanofab-Project/assets/SerraJr-fd37bf50.svg",Lg="/Nanofab-Project/assets/senai-dbac4d57.png",TO=({})=>{const e=[{image:Pg,altText:"CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior"},{image:tf,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Lg,altText:"SENAI - Serviço Nacional de Aprendizagem Industrial"},{image:nf,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:rf,altText:"FINEP - Agência Brasileira de Inovação"},{image:Cg,altText:"UFF - Universidade Federal Fluminense"},{image:kg,altText:"IME - Instituto Militar de Engenharia"},{image:Rg,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:Ag,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Og,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:$g,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Tg,altText:"CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico"},{image:Pg,altText:"CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior"},{image:tf,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Lg,altText:"SENAI - Serviço Nacional de Aprendizagem Industrial"},{image:nf,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:rf,altText:"FINEP - Agência Brasileira de Inovação"},{image:Cg,altText:"UFF - Universidade Federal Fluminense"},{image:kg,altText:"IME - Instituto Militar de Engenharia"},{image:Rg,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:Ag,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Og,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:$g,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Tg,altText:"CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico"}];return z(EO,{children:[S(CO,{children:"Parceiros"}),S(kO,{children:e.map(t=>S(OO,{image:t.image,altText:t.altText},e.indexOf(t)))})]})},PO=A.div`
  width: 100%;
  /*height: 300px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  margin-top: 5%;
  margin-bottom: 5%;
  align-self: center;

  /* @media screen and (max-width: ${y.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%; */
  @media screen and (max-width: ${y.mobile}) {
    margin-top: 10%;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media screen and (min-width: 720px) and (max-width: 770px) {
  }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${y.largeNotebook}) and (max-width: ${y.desktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${y.desktop}) and (max-width: ${y.largeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    max-width: 2500px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    max-width: 3000px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`,$O=A.div`
  width: 70%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(217, 217, 217, 0.9);
  border-radius: 150px;
  justify-content: space-around;

  @media screen and (max-width: ${y.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 20%; */
    padding-top: 5%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4%;
    padding-bottom: 15%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    border-radius: 60px;
    padding: 5%;
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    border-radius: 70px;
  }

  @media screen and (min-width: ${y.largeNotebook}) and (max-width: ${y.desktop}) {
  }

  @media screen and (min-width: ${y.desktop}) and (max-width: ${y.largeDesktop}) {
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    border-radius: 100px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {
    border-radius: 200px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    border-radius: 300px;
    width: 80%;
  }
`,LO=A.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${y.mobile}) {
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    margin-bottom: 5%;
  }
`,MO=A.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${y.mobile}) {
    width: 95%;
    padding-bottom: 20%;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    width: 95%;
  }

  @media screen and (min-width: ${y.tablet}) and (max-width: ${y.notebook}) {
    width: 100%;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    width: 80%;
  }
`,NO=A.span`
  font-weight: bold;
  color: #ae0806;
  text-align: center;
  font-size: 30px;
  margin-bottom: 3%;

  @media screen and (max-width: ${y.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    font-size: 23px;
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${y.notebook}) and (max-width: ${y.largeNotebook}) {
    font-size: 23px;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    font-size: 40px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
`,FO=A.span`
  color: black;
  text-align: center;
  font-size: 18px;
  width: 80%;

  @media screen and (max-width: ${y.mobile}) {
    font-size: 16px;
    width: 100%;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {
    width: 100%;
    font-size: 20px;
  }

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    font-size: 24px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,IO=A.img`
  width: 150px;
  height: 150px;
  border: 1px solid #ae0806;
  border-radius: 150px;
  padding: 20%;
  object-fit: scale-down;
  overflow: visible;
  background-color: white;

  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  @media screen and (min-width: ${y.extraLargeDesktop}) {
    width: 250px;
    height: 250px;
    border-radius: 200px;
  }
`;A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px;
    width: 200px; */
`;const DO=({image:e,title:t,paragraph:n})=>S(PO,{children:z($O,{children:[S(LO,{children:S(IO,{src:e,alt:t})}),z(MO,{children:[S(NO,{children:t}),S(FO,{children:n})]})]})}),_O="/Nanofab-Project/assets/handshake-903e6074.png",zO=({})=>{const e=[{image:tf,title:"Centro Brasileiro de Pesquisas Físicas - CBPF",paragraph:"O NANOFAB desenvolve parceria científica e tecnológica com o CBPF na área de Instrumentação Científica, com o desenvolvimento de dispositivos multiplicadores e elétrons (GEM-Gas Electron Multiplier) e detectores bidimensionais de raios-x a gás."},{image:nf,title:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro",paragraph:"O NANOFAB recebe apoio da FAPERJ em projetos de infraestrutura e pesquisa como o PENSA-RIO e através de projetos em colaboração com os pesquisadores"},{image:rf,title:"FINEP - Agência Brasileira de Inovação",paragraph:"O NANOFAB participa de editais da FINEP em projetos estruturantes como o Grande Laboratórios Multiusuários e Ações Transversais."}];return z(SO,{children:[S(on,{}),S(j1,{title:"Parcerias",image:_O}),S(bO,{children:e.map(t=>S(DO,{image:t.image,title:t.title,paragraph:t.paragraph},e.indexOf(t)))}),S(TO,{}),S(an,{})]})},jO=A.div`
  width: 100%;
`,UO=A.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,BO=A.span`
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.highlight};
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.auxiliary.error.dark};
  border-radius: 20px;
`,HO=({})=>z(jO,{children:[S(on,{}),S(UO,{children:S(BO,{children:"Aconteceu um problema, tente novamente mais tarde"})}),S(an,{})]}),VO=A.div`
`,WO=A.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;A.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const GO=A.div`
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

  @media screen and (max-width: ${y.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {    
    width: 100%;
  }
`,qO=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,JO=A.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,Mg=A.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,Ng=A.input`
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
`,Fg=A.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,QO=A.button`
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
`,XO=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-beetween;
  margin-bottom: 20px;
  padding-left: 20px;
  width: 60%;
`,Ig=A.a`
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
`,KO=({formLogin:e,setFormLogin:t})=>{const{login:n}=E.useContext(hu),r=po(),i=async()=>{if(e.email,e.senha)try{await n(e.email,e.senha),r("/")}catch{Re.error("Erro, tente novamente.")}else Re.error("Preencha todos os campos de texto!")};return z(GO,{children:[S(JO,{children:"Entrar"}),z(qO,{children:[z(Fg,{children:[S(Mg,{children:"Email ou Nome de Usuário:"}),S(Ng,{placeholder:"Digite seu Email",onChange:o=>t({...e,email:o.target.value})})]}),z(Fg,{children:[S(Mg,{children:"Senha:"}),S(Ng,{type:"password",placeholder:"Digite sua senha",onChange:o=>t({...e,senha:o.target.value})})]}),z(XO,{children:[S(Ig,{onClick:()=>r("/criar_conta"),children:"Não tem conta? Crie uma!"}),S(Ig,{onClick:()=>r("/redefinir_senha"),children:"Esqueci minha senha"})]})]}),S(QO,{onClick:()=>i(),children:"Entrar"})]})},YO=({})=>{const[e,t]=E.useState({email:"",senha:""});return z(VO,{children:[S(on,{}),S(WO,{children:S(KO,{formLogin:e,setFormLogin:t})}),S(an,{})]})},ZO=A.div`
`,eT=A.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;A.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const tT=A.div`
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
`,nT=A.h1`
color: ${({theme:e})=>e.colors.text.title};
`,Gt=A.span`
    text-align: left;
    width: 50%;
    margin-bottom: 1%;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};
    font-weight: bolder;
`,dn=A.input`
    
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
    
`,Dr=A.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,Ac=A.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,mi=A.div`
  width: 45%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Rc=A.div`
  width: 30%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,rT=A.button`
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
`;A.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
`;A.select`
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
`;A.div`
  width: 100%;
`;const Dg=A.div`
  display: flex;
  justify-content: start;
  align-items: center;
`,_g=A.input`
  border: 1px solid #e8e8e8;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`,zg=A.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,iT=({})=>{const[e,t]=E.useState(""),[n,r]=E.useState(!1),[i,o]=E.useState(!1),[a,s]=E.useState(""),[l,u]=E.useState(""),[c,d]=E.useState(""),[f,w]=E.useState(""),[v,g]=E.useState(""),[m,p]=E.useState(""),[h,x]=E.useState(""),[b,C]=E.useState(""),[k,R]=E.useState(""),[P,H]=E.useState(""),[D,Q]=E.useState(!1),O=po(),T=()=>{L()&&N()},L=()=>k!=P?(Re.warn("Suas senhas são diferentes. Tente novamente."),R(""),H(""),Q(!1),!1):(Q(!0),!0),N=async()=>{if(D){const F={nome:e,publica:i,privada:n,inst:a,telefone:v,ramal:m,funcao:h,email:l,departamento:c,usuario:b,senha1:k,outro:f};if(e&&(i||n)&&a&&v&&m&&h&&l&&c&&b&&k&&f)try{await q2(F),O("/login")}catch{Re.error("Ocorreu um erro tente novamente")}else Re.warning("Preencha todos os campos de texto")}};return z(tT,{children:[S(nT,{children:"Registrar-se"}),z(Dr,{children:[z(mi,{children:[S(Gt,{children:"Instituição:"}),S(dn,{placeholder:"Entre com a Instituição",value:a,onChange:F=>{s(F.target.value)}})]}),z(mi,{children:[S(Gt,{children:"Tipo:"}),z(Dg,{children:[S(_g,{type:"radio",id:"publica",name:"institutionType",value:"Publica",onChange:()=>{i!==n&&(r(!n),o(!i)),i==n&&(r(!1),o(!0))}}),S(zg,{children:"Pública"})]}),z(Dg,{children:[S(_g,{type:"radio",id:"privada",name:"institutionType",value:"Privada",onChange:()=>{n!==i&&(r(!n),o(!i)),n==i&&(r(!0),o(!1))}}),S(zg,{children:"Privada"})]})]})]}),z(Dr,{children:[z(mi,{children:[S(Gt,{children:"Departamento:"}),S(dn,{placeholder:"Entre com a departamento",value:c,onChange:F=>{d(F.target.value)}})]}),z(mi,{children:[S(Gt,{children:"Outros:"}),S(dn,{placeholder:"Outros",value:f,onChange:F=>{w(F.target.value)}})]})]}),S(Dr,{children:z(Ac,{children:[S(Gt,{children:"Nome:"}),S(dn,{placeholder:"Digite seu nome",value:e,onChange:F=>{t(F.target.value)}})]})}),S(Dr,{children:z(Ac,{children:[S(Gt,{children:"Email:"}),S(dn,{placeholder:"Digite seu email",value:l,onChange:F=>{u(F.target.value)}})]})}),z(Dr,{children:[z(Rc,{children:[S(Gt,{children:"Telefone:"}),S(dn,{placeholder:"Digite seu telefone","data-mask":"telefone",value:v,onChange:F=>{g(F.target.value)}})]}),z(Rc,{children:[S(Gt,{children:"Ramal:"}),S(dn,{placeholder:"Digite seu ramal",value:m,onChange:F=>{p(F.target.value)}})]}),z(Rc,{children:[S(Gt,{children:"Função:"}),S(dn,{placeholder:"Digite sua função",value:h,onChange:F=>{x(F.target.value)}})]})]}),S(Dr,{children:z(Ac,{children:[S(Gt,{children:"Usuário:"}),S(dn,{placeholder:"Digite seu usuário",value:b,onChange:F=>{C(F.target.value)}})]})}),z(Dr,{children:[z(mi,{children:[S(Gt,{children:"Senha:"}),S(dn,{type:"password",placeholder:"Entre com sua senha aqui",value:k,onChange:F=>{R(F.target.value)}})]}),z(mi,{children:[S(Gt,{children:"Confirme sua senha:"}),S(dn,{type:"password",placeholder:"Confirme sua senha aqui",value:P,onChange:F=>{H(F.target.value)}})]})]}),S(rT,{onClick:T,children:"Registrar"})]})},oT=({})=>z(ZO,{children:[S(on,{}),S(eT,{children:S(iT,{})}),S(an,{})]}),aT=A.div`
`,sT=A.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;A.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const lT=A.div`
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
`,uT=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,cT=A.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,ds=A.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,fs=A.input`
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
`,ps=A.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,dT=A.button`
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
`;A.div`
  display: flex;
  flex-direction: row;
  justify-content: space-beetween;
`;A.a`
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
`;const fT=({})=>z(lT,{children:[S(cT,{children:"Redefinição de Senha"}),z(uT,{children:[z(ps,{children:[S(ds,{children:"Usuário:"}),S(fs,{placeholder:"Digite seu usuário"})]}),z(ps,{children:[S(ds,{children:"Email:"}),S(fs,{placeholder:"Digite seu email"})]}),z(ps,{children:[S(ds,{children:"Nova Senha:"}),S(fs,{type:"password",placeholder:"Digite sua senha"})]}),z(ps,{children:[S(ds,{children:"Confime a Nova Senha:"}),S(fs,{type:"password",placeholder:"Digite sua senha"})]})]}),S(dT,{children:"Redefinir"})]}),pT=({})=>z(aT,{children:[S(on,{}),S(sT,{children:S(fT,{})}),S(an,{})]}),hT=A.div`
  
`,mT=({})=>z(hT,{children:[S(on,{}),S(an,{})]}),gT=A.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,vT=A.div`
    width: 70%;
    margin-top: 3%;
    border-radius: 70px;
    min-height: 50vh;
    margin-bottom: 3%;

    background-color: rgb(217, 217, 217, 0.9);
`,hs=A.section`
    /* min-height: 50vh; */
    width: 100%;
`,ms=A.img`
    width: 100%;
    border-radius: 70px;
`;function Lt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ze(e){return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ze(e)}function yT(e,t){if(ze(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ze(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function U1(e){var t=yT(e,"string");return ze(t)==="symbol"?t:String(t)}function jg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,U1(r.key),r)}}function Mt(e,t,n){return t&&jg(e.prototype,t),n&&jg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function of(e,t){return of=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},of(e,t)}function Zn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&of(e,t)}function Tl(e){return Tl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tl(e)}function xT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function le(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wT(e,t){if(t&&(ze(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return le(e)}function er(e){var t=xT();return function(){var r=Tl(e),i;if(t){var o=Tl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return wT(this,i)}}var af={},ST={get exports(){return af},set exports(e){af=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(ST);const Pn=af;function nn(){return nn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nn.apply(this,arguments)}function sf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[];return X.Children.forEach(e,function(r){r==null&&!t.keepEmpty||(Array.isArray(r)?n=n.concat(sf(r)):ii.isFragment(r)&&r.props?n=n.concat(sf(r.props.children,t)):n.push(r))}),n}var lf={},bT=function(t){};function ET(e,t){}function CT(e,t){}function kT(){lf={}}function B1(e,t,n){!t&&!lf[n]&&(e(!1,n),lf[n]=!0)}function Zt(e,t){B1(ET,e,t)}function AT(e,t){B1(CT,e,t)}Zt.preMessage=bT;Zt.resetWarned=kT;Zt.noteOnce=AT;function ee(e,t,n){return t=U1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ug(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ug(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ug(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H1(e,t,n){var r=E.useRef({});return(!("value"in r.current)||n(r.current.condition,t))&&(r.current.value=e(),r.current.condition=t),r.current.value}function RT(e,t){typeof e=="function"?e(t):ze(e)==="object"&&e&&"current"in e&&(e.current=t)}function OT(e){var t,n,r=ii.isMemo(e)?e.type.type:e.type;return!(typeof r=="function"&&!((t=r.prototype)!==null&&t!==void 0&&t.render)||typeof e=="function"&&!((n=e.prototype)!==null&&n!==void 0&&n.render))}function TT(e){return e instanceof HTMLElement||e instanceof SVGElement}function PT(e){return TT(e)?e:e instanceof X.Component?Tb.findDOMNode(e):null}var V1=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),uf=typeof window<"u"&&typeof document<"u"&&window.document===document,Pl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),$T=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Pl):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),LT=2;function MT(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function a(){$T(o)}function s(){var l=Date.now();if(n){if(l-i<LT)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=l}return s}var NT=20,FT=["top","right","bottom","left","width","height","size","weight"],IT=typeof MutationObserver<"u",DT=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=MT(this.refresh.bind(this),NT)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!uf||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),IT?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!uf||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=FT.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),W1=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},io=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Pl},G1=xu(0,0,0,0);function $l(e){return parseFloat(e)||0}function Bg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+$l(o)},0)}function _T(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=$l(a)}return n}function zT(e){var t=e.getBBox();return xu(0,0,t.width,t.height)}function jT(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return G1;var r=io(e).getComputedStyle(e),i=_T(r),o=i.left+i.right,a=i.top+i.bottom,s=$l(r.width),l=$l(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=Bg(r,"left","right")+o),Math.round(l+a)!==n&&(l-=Bg(r,"top","bottom")+a)),!BT(e)){var u=Math.round(s+o)-t,c=Math.round(l+a)-n;Math.abs(u)!==1&&(s-=u),Math.abs(c)!==1&&(l-=c)}return xu(i.left,i.top,s,l)}var UT=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof io(e).SVGGraphicsElement}:function(e){return e instanceof io(e).SVGElement&&typeof e.getBBox=="function"}}();function BT(e){return e===io(e).document.documentElement}function HT(e){return uf?UT(e)?zT(e):jT(e):G1}function VT(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return W1(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function xu(e,t,n,r){return{x:e,y:t,width:n,height:r}}var WT=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=xu(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=HT(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),GT=function(){function e(t,n){var r=VT(n);W1(this,{target:t,contentRect:r})}return e}(),qT=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new V1,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof io(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new WT(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof io(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new GT(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),q1=typeof WeakMap<"u"?new WeakMap:new V1,J1=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=DT.getInstance(),r=new qT(t,n,this);q1.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){J1.prototype[e]=function(){var t;return(t=q1.get(this))[e].apply(t,arguments)}});var JT=function(){return typeof Pl.ResizeObserver<"u"?Pl.ResizeObserver:J1}();function cf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function QT(e){if(Array.isArray(e))return cf(e)}function Q1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zp(e,t){if(e){if(typeof e=="string")return cf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cf(e,t)}}function XT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(e){return QT(e)||Q1(e)||Zp(e)||XT()}function eh(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}function KT(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function li(e,t){if(e==null)return{};var n=KT(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function YT(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function i(o,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=r.has(o);if(Zt(!l,"Warning: There may be circular references"),l)return!1;if(o===a)return!0;if(n&&s>1)return!1;r.add(o);var u=s+1;if(Array.isArray(o)){if(!Array.isArray(a)||o.length!==a.length)return!1;for(var c=0;c<o.length;c++)if(!i(o[c],a[c],u))return!1;return!0}if(o&&a&&ze(o)==="object"&&ze(a)==="object"){var d=Object.keys(o);return d.length!==Object.keys(a).length?!1:d.every(function(f){return i(o[f],a[f],u)})}return!1}return i(e,t)}var ZT=function(){function e(t){Lt(this,e),ee(this,"instanceId",void 0),ee(this,"cache",new Map),this.instanceId=t}return Mt(e,[{key:"get",value:function(n){return this.cache.get(n.join("%"))||null}},{key:"update",value:function(n,r){var i=n.join("%"),o=this.cache.get(i),a=r(o);a===null?this.cache.delete(i):this.cache.set(i,a)}}]),e}(),df="data-token-hash",Wi="data-css-hash",Fi="__cssinjs_instance__";function eP(){var e=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){var t=document.body.querySelectorAll("style[".concat(Wi,"]"))||[],n=document.head.firstChild;Array.from(t).forEach(function(i){i[Fi]=i[Fi]||e,i[Fi]===e&&document.head.insertBefore(i,n)});var r={};Array.from(document.querySelectorAll("style[".concat(Wi,"]"))).forEach(function(i){var o=i.getAttribute(Wi);if(r[o]){if(i[Fi]===e){var a;(a=i.parentNode)===null||a===void 0||a.removeChild(i)}}else r[o]=!0})}return new ZT(e)}var tP=E.createContext({hashPriority:"low",cache:eP(),defaultCache:!0});const th=tP;function di(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function nP(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var Hg="data-rc-order",rP="rc-util-key",ff=new Map;function X1(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mark;return t?t.startsWith("data-")?t:"data-".concat(t):rP}function wu(e){if(e.attachTo)return e.attachTo;var t=document.querySelector("head");return t||document.body}function iP(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function K1(e){return Array.from((ff.get(e)||e).children).filter(function(t){return t.tagName==="STYLE"})}function Y1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!di())return null;var n=t.csp,r=t.prepend,i=document.createElement("style");i.setAttribute(Hg,iP(r)),n!=null&&n.nonce&&(i.nonce=n==null?void 0:n.nonce),i.innerHTML=e;var o=wu(t),a=o.firstChild;if(r){if(r==="queue"){var s=K1(o).filter(function(l){return["prepend","prependQueue"].includes(l.getAttribute(Hg))});if(s.length)return o.insertBefore(i,s[s.length-1].nextSibling),i}o.insertBefore(i,a)}else o.appendChild(i);return i}function Z1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=wu(t);return K1(n).find(function(r){return r.getAttribute(X1(t))===e})}function ex(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Z1(e,t);if(n){var r=wu(t);r.removeChild(n)}}function oP(e,t){var n=ff.get(e);if(!n||!nP(document,n)){var r=Y1("",t),i=r.parentNode;ff.set(e,i),e.removeChild(r)}}function Ll(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=wu(n);oP(r,n);var i=Z1(t,n);if(i){var o,a;if((o=n.csp)!==null&&o!==void 0&&o.nonce&&i.nonce!==((a=n.csp)===null||a===void 0?void 0:a.nonce)){var s;i.nonce=(s=n.csp)===null||s===void 0?void 0:s.nonce}return i.innerHTML!==e&&(i.innerHTML=e),i}var l=Y1(e,n);return l.setAttribute(X1(n),t),l}function Ml(e){var t="";return Object.keys(e).forEach(function(n){var r=e[n];t+=n,r&&ze(r)==="object"?t+=Ml(r):t+=r}),t}function aP(e,t){return eh("".concat(t,"_").concat(Ml(e)))}var ea="layer-".concat(Date.now(),"-").concat(Math.random()).replace(/\./g,""),tx="903px";function sP(e,t){if(di()){var n;Ll(e,ea);var r=document.createElement("div");r.style.position="fixed",r.style.left="0",r.style.top="0",t==null||t(r),document.body.appendChild(r);var i=getComputedStyle(r).width===tx;return(n=r.parentNode)===null||n===void 0||n.removeChild(r),ex(ea),i}return!1}var Oc=void 0;function lP(){return Oc===void 0&&(Oc=sP("@layer ".concat(ea," { .").concat(ea," { width: ").concat(tx,"!important; } }"),function(e){e.className=ea})),Oc}function nx(e){if(Array.isArray(e))return e}function uP(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function rx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function We(e,t){return nx(e)||uP(e,t)||Zp(e,t)||rx()}function ix(e,t,n,r){var i=E.useContext(th),o=i.cache,a=[e].concat(ve(t));return E.useMemo(function(){o.update(a,function(s){var l=s||[],u=We(l,2),c=u[0],d=c===void 0?0:c,f=u[1],w=f,v=w||n();return[d+1,v]})},[a.join("_")]),E.useEffect(function(){return function(){o.update(a,function(s){var l=s||[],u=We(l,2),c=u[0],d=c===void 0?0:c,f=u[1],w=d-1;return w===0?(r==null||r(f,!1),null):[d-1,f]})}},a),o.get(a)[1]}var cP={},dP="css",Br=new Map;function fP(e){Br.set(e,(Br.get(e)||0)+1)}function pP(e,t){if(typeof document<"u"){var n=document.querySelectorAll("style[".concat(df,'="').concat(e,'"]'));n.forEach(function(r){if(r[Fi]===t){var i;(i=r.parentNode)===null||i===void 0||i.removeChild(r)}})}}function hP(e,t){Br.set(e,(Br.get(e)||0)-1);var n=Array.from(Br.keys()),r=n.filter(function(i){var o=Br.get(i)||0;return o<=0});r.length<n.length&&r.forEach(function(i){pP(i,t),Br.delete(i)})}function mP(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=E.useContext(th),i=r.cache.instanceId,o=n.salt,a=o===void 0?"":o,s=n.override,l=s===void 0?cP:s,u=n.formatToken,c=E.useMemo(function(){return Object.assign.apply(Object,[{}].concat(ve(t)))},[t]),d=E.useMemo(function(){return Ml(c)},[c]),f=E.useMemo(function(){return Ml(l)},[l]),w=ix("token",[a,e.id,d,f],function(){var v=e.getDerivativeToken(c),g=$($({},v),l);u&&(g=u(g));var m=aP(g,a);g._tokenKey=m,fP(m);var p="".concat(dP,"-").concat(eh(m));return g._hashId=p,[g,p]},function(v){hP(v[0]._tokenKey,i)});return w}var ox="comm",ax="rule",sx="decl",gP="@import",vP="@keyframes",yP="@layer",xP=Math.abs,nh=String.fromCharCode;function lx(e){return e.trim()}function Ws(e,t,n){return e.replace(t,n)}function wP(e,t){return e.indexOf(t)}function ka(e,t){return e.charCodeAt(t)|0}function Aa(e,t,n){return e.slice(t,n)}function pr(e){return e.length}function ux(e){return e.length}function gs(e,t){return t.push(e),e}var Su=1,oo=1,cx=0,rn=0,tt=0,go="";function rh(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Su,column:oo,length:a,return:""}}function SP(){return tt}function bP(){return tt=rn>0?ka(go,--rn):0,oo--,tt===10&&(oo=1,Su--),tt}function wn(){return tt=rn<cx?ka(go,rn++):0,oo++,tt===10&&(oo=1,Su++),tt}function Yr(){return ka(go,rn)}function Gs(){return rn}function bu(e,t){return Aa(go,e,t)}function pf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function EP(e){return Su=oo=1,cx=pr(go=e),rn=0,[]}function CP(e){return go="",e}function Tc(e){return lx(bu(rn-1,hf(e===91?e+2:e===40?e+1:e)))}function kP(e){for(;(tt=Yr())&&tt<33;)wn();return pf(e)>2||pf(tt)>3?"":" "}function AP(e,t){for(;--t&&wn()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return bu(e,Gs()+(t<6&&Yr()==32&&wn()==32))}function hf(e){for(;wn();)switch(tt){case e:return rn;case 34:case 39:e!==34&&e!==39&&hf(tt);break;case 40:e===41&&hf(e);break;case 92:wn();break}return rn}function RP(e,t){for(;wn()&&e+tt!==47+10;)if(e+tt===42+42&&Yr()===47)break;return"/*"+bu(t,rn-1)+"*"+nh(e===47?e:wn())}function OP(e){for(;!pf(Yr());)wn();return bu(e,rn)}function TP(e){return CP(qs("",null,null,null,[""],e=EP(e),0,[0],e))}function qs(e,t,n,r,i,o,a,s,l){for(var u=0,c=0,d=a,f=0,w=0,v=0,g=1,m=1,p=1,h=0,x="",b=i,C=o,k=r,R=x;m;)switch(v=h,h=wn()){case 40:if(v!=108&&ka(R,d-1)==58){wP(R+=Ws(Tc(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:R+=Tc(h);break;case 9:case 10:case 13:case 32:R+=kP(v);break;case 92:R+=AP(Gs()-1,7);continue;case 47:switch(Yr()){case 42:case 47:gs(PP(RP(wn(),Gs()),t,n),l);break;default:R+="/"}break;case 123*g:s[u++]=pr(R)*p;case 125*g:case 59:case 0:switch(h){case 0:case 125:m=0;case 59+c:p==-1&&(R=Ws(R,/\f/g,"")),w>0&&pr(R)-d&&gs(w>32?Wg(R+";",r,n,d-1):Wg(Ws(R," ","")+";",r,n,d-2),l);break;case 59:R+=";";default:if(gs(k=Vg(R,t,n,u,c,i,s,x,b=[],C=[],d),o),h===123)if(c===0)qs(R,t,k,k,b,o,d,s,C);else switch(f===99&&ka(R,3)===110?100:f){case 100:case 108:case 109:case 115:qs(e,k,k,r&&gs(Vg(e,k,k,0,0,i,s,x,i,b=[],d),C),i,C,d,s,r?b:C);break;default:qs(R,k,k,k,[""],C,0,s,C)}}u=c=w=0,g=p=1,x=R="",d=a;break;case 58:d=1+pr(R),w=v;default:if(g<1){if(h==123)--g;else if(h==125&&g++==0&&bP()==125)continue}switch(R+=nh(h),h*g){case 38:p=c>0?1:(R+="\f",-1);break;case 44:s[u++]=(pr(R)-1)*p,p=1;break;case 64:Yr()===45&&(R+=Tc(wn())),f=Yr(),c=d=pr(x=R+=OP(Gs())),h++;break;case 45:v===45&&pr(R)==2&&(g=0)}}return o}function Vg(e,t,n,r,i,o,a,s,l,u,c){for(var d=i-1,f=i===0?o:[""],w=ux(f),v=0,g=0,m=0;v<r;++v)for(var p=0,h=Aa(e,d+1,d=xP(g=a[v])),x=e;p<w;++p)(x=lx(g>0?f[p]+" "+h:Ws(h,/&\f/g,f[p])))&&(l[m++]=x);return rh(e,t,n,i===0?ax:s,l,u,c)}function PP(e,t,n){return rh(e,t,n,ox,nh(SP()),Aa(e,2,-2),0)}function Wg(e,t,n,r){return rh(e,t,n,sx,Aa(e,0,r),Aa(e,r+1,-1),r)}function mf(e,t){for(var n="",r=ux(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function $P(e,t,n,r){switch(e.type){case yP:if(e.children.length)break;case gP:case sx:return e.return=e.return||e.value;case ox:return"";case vP:return e.return=e.value+"{"+mf(e.children,r)+"}";case ax:e.value=e.props.join(",")}return pr(n=mf(e.children,r))?e.return=e.value+"{"+n+"}":""}var Gg=di(),LP="_skip_check_",dx="_multi_value_";function qg(e){var t=mf(TP(e),$P);return t.replace(/\{%%%\:[^;];}/g,";")}function MP(e){return ze(e)==="object"&&e&&(LP in e||dx in e)}function NP(e,t,n){if(!t)return e;var r=".".concat(t),i=n==="low"?":where(".concat(r,")"):r,o=e.split(",").map(function(a){var s,l=a.trim().split(/\s+/),u=l[0]||"",c=((s=u.match(/^\w+/))===null||s===void 0?void 0:s[0])||"";return u="".concat(c).concat(i).concat(u.slice(c.length)),[u].concat(ve(l.slice(1))).join(" ")});return o.join(",")}var FP=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},i=r.root,o=r.injectHash,a=r.parentSelectors,s=n.hashId,l=n.layer;n.path;var u=n.hashPriority,c=n.transformers,d=c===void 0?[]:c;n.linters;var f="",w={};function v(x){var b=x.getName(s);if(!w[b]){var C=e(x.style,n,{root:!1,parentSelectors:a}),k=We(C,1),R=k[0];w[b]="@keyframes ".concat(x.getName(s)).concat(R)}}function g(x){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return x.forEach(function(C){Array.isArray(C)?g(C,b):C&&b.push(C)}),b}var m=g(Array.isArray(t)?t:[t]);if(m.forEach(function(x){var b=typeof x=="string"&&!i?{}:x;if(typeof b=="string")f+="".concat(b,`
`);else if(b._keyframe)v(b);else{var C=d.reduce(function(k,R){var P;return(R==null||(P=R.visit)===null||P===void 0?void 0:P.call(R,k))||k},b);Object.keys(C).forEach(function(k){var R=C[k];if(ze(R)==="object"&&R&&(k!=="animationName"||!R._keyframe)&&!MP(R)){var P=!1,H=k.trim(),D=!1;(i||o)&&s?H.startsWith("@")?P=!0:H=NP(k,s,u):i&&!s&&(H==="&"||H==="")&&(H="",D=!0);var Q=e(R,n,{root:D,injectHash:P,parentSelectors:[].concat(ve(a),[H])}),O=We(Q,2),T=O[0],L=O[1];w=$($({},w),L),f+="".concat(H).concat(T)}else{let I=function(K,G){var oe=K.replace(/[A-Z]/g,function(q){return"-".concat(q.toLowerCase())}),B=G;!_y[K]&&typeof B=="number"&&B!==0&&(B="".concat(B,"px")),K==="animationName"&&G!==null&&G!==void 0&&G._keyframe&&(v(G),B=G.getName(s)),f+="".concat(oe,":").concat(B,";")};var V=I,N,F=(N=R==null?void 0:R.value)!==null&&N!==void 0?N:R;ze(R)==="object"&&R!==null&&R!==void 0&&R[dx]&&Array.isArray(F)?F.forEach(function(K){I(k,K)}):I(k,F)}})}}),!i)f="{".concat(f,"}");else if(l&&lP()){var p=l.split(","),h=p[p.length-1].trim();f="@layer ".concat(h," {").concat(f,"}"),p.length>1&&(f="@layer ".concat(l,"{%%%:%}").concat(f))}return[f,w]};function IP(e,t){return eh("".concat(e.join("%")).concat(t))}function DP(){return null}function gf(e,t){var n=e.token,r=e.path,i=e.hashId,o=e.layer,a=e.nonce,s=E.useContext(th),l=s.autoClear;s.mock;var u=s.defaultCache,c=s.hashPriority,d=s.container,f=s.ssrInline,w=s.transformers,v=s.linters,g=s.cache,m=n._tokenKey,p=[m].concat(ve(r)),h=Gg,x=ix("style",p,function(){var P=t(),H=FP(P,{hashId:i,hashPriority:c,layer:o,path:r.join("-"),transformers:w,linters:v}),D=We(H,2),Q=D[0],O=D[1],T=qg(Q),L=IP(p,T);if(h){var N={mark:Wi,prepend:"queue",attachTo:d},F=typeof a=="function"?a():a;F&&(N.csp={nonce:F});var V=Ll(T,L,N);V[Fi]=g.instanceId,V.setAttribute(df,m),Object.keys(O).forEach(function(I){Ll(qg(O[I]),"_effect-".concat(I),N)})}return[T,m,L]},function(P,H){var D=We(P,3),Q=D[2];(H||l)&&Gg&&ex(Q,{mark:Wi})}),b=We(x,3),C=b[0],k=b[1],R=b[2];return function(P){var H;if(!f||h||!u)H=E.createElement(DP,null);else{var D;H=E.createElement("style",nn({},(D={},ee(D,df,k),ee(D,Wi,R),D),{dangerouslySetInnerHTML:{__html:C}}))}return E.createElement(E.Fragment,null,H,P)}}function _P(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var ih=function(){function e(){Lt(this,e),ee(this,"cache",void 0),ee(this,"keys",void 0),ee(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return Mt(e,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(n){var r,i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a={map:this.cache};return n.forEach(function(s){if(!a)a=void 0;else{var l,u;a=(l=a)===null||l===void 0||(u=l.map)===null||u===void 0?void 0:u.get(s)}}),(r=a)!==null&&r!==void 0&&r.value&&o&&(a.value[1]=this.cacheCallTimes++),(i=a)===null||i===void 0?void 0:i.value}},{key:"get",value:function(n){var r;return(r=this.internalGet(n,!0))===null||r===void 0?void 0:r[0]}},{key:"has",value:function(n){return!!this.internalGet(n)}},{key:"set",value:function(n,r){var i=this;if(!this.has(n)){if(this.size()+1>e.MAX_CACHE_SIZE+e.MAX_CACHE_OFFSET){var o=this.keys.reduce(function(u,c){var d=We(u,2),f=d[1];return i.internalGet(c)[1]<f?[c,i.internalGet(c)[1]]:u},[this.keys[0],this.cacheCallTimes]),a=We(o,1),s=a[0];this.delete(s)}this.keys.push(n)}var l=this.cache;n.forEach(function(u,c){if(c===n.length-1)l.set(u,{value:[r,i.cacheCallTimes++]});else{var d=l.get(u);d?d.map||(d.map=new Map):l.set(u,{map:new Map}),l=l.get(u).map}})}},{key:"deleteByPath",value:function(n,r){var i=n.get(r[0]);if(r.length===1){var o;return i.map?n.set(r[0],{map:i.map}):n.delete(r[0]),(o=i.value)===null||o===void 0?void 0:o[0]}var a=this.deleteByPath(i.map,r.slice(1));return(!i.map||i.map.size===0)&&!i.value&&n.delete(r[0]),a}},{key:"delete",value:function(n){if(this.has(n))return this.keys=this.keys.filter(function(r){return!_P(r,n)}),this.deleteByPath(this.cache,n)}}]),e}();ee(ih,"MAX_CACHE_SIZE",20);ee(ih,"MAX_CACHE_OFFSET",5);var Jg=0,zP=function(){function e(t){Lt(this,e),ee(this,"derivatives",void 0),ee(this,"id",void 0),this.derivatives=Array.isArray(t)?t:[t],this.id=Jg,t.length===0&&(t.length>0,void 0),Jg+=1}return Mt(e,[{key:"getDerivativeToken",value:function(n){return this.derivatives.reduce(function(r,i){return i(n,r)},void 0)}}]),e}(),Pc=new ih;function fx(e){var t=Array.isArray(e)?e:[e];return Pc.has(t)||Pc.set(t,new zP(t)),Pc.get(t)}function gi(e){return e.notSplit=!0,e}gi(["borderTop","borderBottom"]),gi(["borderTop"]),gi(["borderBottom"]),gi(["borderLeft","borderRight"]),gi(["borderLeft"]),gi(["borderRight"]);var jP=E.createContext({});const UP=jP;var qr="RC_FORM_INTERNAL_HOOKS",Pe=function(){Zt(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},ao=E.createContext({getFieldValue:Pe,getFieldsValue:Pe,getFieldError:Pe,getFieldWarning:Pe,getFieldsError:Pe,isFieldsTouched:Pe,isFieldTouched:Pe,isFieldValidating:Pe,isFieldsValidating:Pe,resetFields:Pe,setFields:Pe,setFieldValue:Pe,setFieldsValue:Pe,validateFields:Pe,submit:Pe,getInternalHooks:function(){return Pe(),{dispatch:Pe,initEntityValue:Pe,registerField:Pe,useSubscribe:Pe,setInitialValues:Pe,destroyForm:Pe,setCallbacks:Pe,registerWatch:Pe,getFields:Pe,setValidateMessages:Pe,setPreserve:Pe,getInitialValue:Pe}}}),vf=E.createContext(null);function yf(e){return e==null?[]:Array.isArray(e)?e:[e]}function BP(e){return e&&!!e._init}function Qn(){Qn=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(O,T,L){O[T]=L.value},i=typeof Symbol=="function"?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(O,T,L){return Object.defineProperty(O,T,{value:L,enumerable:!0,configurable:!0,writable:!0}),O[T]}try{l({},"")}catch{l=function(L,N,F){return L[N]=F}}function u(O,T,L,N){var F=T&&T.prototype instanceof f?T:f,V=Object.create(F.prototype),I=new H(N||[]);return r(V,"_invoke",{value:C(O,L,I)}),V}function c(O,T,L){try{return{type:"normal",arg:O.call(T,L)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var d={};function f(){}function w(){}function v(){}var g={};l(g,o,function(){return this});var m=Object.getPrototypeOf,p=m&&m(m(D([])));p&&p!==t&&n.call(p,o)&&(g=p);var h=v.prototype=f.prototype=Object.create(g);function x(O){["next","throw","return"].forEach(function(T){l(O,T,function(L){return this._invoke(T,L)})})}function b(O,T){function L(F,V,I,K){var G=c(O[F],O,V);if(G.type!=="throw"){var oe=G.arg,B=oe.value;return B&&ze(B)=="object"&&n.call(B,"__await")?T.resolve(B.__await).then(function(q){L("next",q,I,K)},function(q){L("throw",q,I,K)}):T.resolve(B).then(function(q){oe.value=q,I(oe)},function(q){return L("throw",q,I,K)})}K(G.arg)}var N;r(this,"_invoke",{value:function(V,I){function K(){return new T(function(G,oe){L(V,I,G,oe)})}return N=N?N.then(K,K):K()}})}function C(O,T,L){var N="suspendedStart";return function(F,V){if(N==="executing")throw new Error("Generator is already running");if(N==="completed"){if(F==="throw")throw V;return Q()}for(L.method=F,L.arg=V;;){var I=L.delegate;if(I){var K=k(I,L);if(K){if(K===d)continue;return K}}if(L.method==="next")L.sent=L._sent=L.arg;else if(L.method==="throw"){if(N==="suspendedStart")throw N="completed",L.arg;L.dispatchException(L.arg)}else L.method==="return"&&L.abrupt("return",L.arg);N="executing";var G=c(O,T,L);if(G.type==="normal"){if(N=L.done?"completed":"suspendedYield",G.arg===d)continue;return{value:G.arg,done:L.done}}G.type==="throw"&&(N="completed",L.method="throw",L.arg=G.arg)}}}function k(O,T){var L=T.method,N=O.iterator[L];if(N===void 0)return T.delegate=null,L==="throw"&&O.iterator.return&&(T.method="return",T.arg=void 0,k(O,T),T.method==="throw")||L!=="return"&&(T.method="throw",T.arg=new TypeError("The iterator does not provide a '"+L+"' method")),d;var F=c(N,O.iterator,T.arg);if(F.type==="throw")return T.method="throw",T.arg=F.arg,T.delegate=null,d;var V=F.arg;return V?V.done?(T[O.resultName]=V.value,T.next=O.nextLoc,T.method!=="return"&&(T.method="next",T.arg=void 0),T.delegate=null,d):V:(T.method="throw",T.arg=new TypeError("iterator result is not an object"),T.delegate=null,d)}function R(O){var T={tryLoc:O[0]};1 in O&&(T.catchLoc=O[1]),2 in O&&(T.finallyLoc=O[2],T.afterLoc=O[3]),this.tryEntries.push(T)}function P(O){var T=O.completion||{};T.type="normal",delete T.arg,O.completion=T}function H(O){this.tryEntries=[{tryLoc:"root"}],O.forEach(R,this),this.reset(!0)}function D(O){if(O){var T=O[o];if(T)return T.call(O);if(typeof O.next=="function")return O;if(!isNaN(O.length)){var L=-1,N=function F(){for(;++L<O.length;)if(n.call(O,L))return F.value=O[L],F.done=!1,F;return F.value=void 0,F.done=!0,F};return N.next=N}}return{next:Q}}function Q(){return{value:void 0,done:!0}}return w.prototype=v,r(h,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:w,configurable:!0}),w.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(O){var T=typeof O=="function"&&O.constructor;return!!T&&(T===w||(T.displayName||T.name)==="GeneratorFunction")},e.mark=function(O){return Object.setPrototypeOf?Object.setPrototypeOf(O,v):(O.__proto__=v,l(O,s,"GeneratorFunction")),O.prototype=Object.create(h),O},e.awrap=function(O){return{__await:O}},x(b.prototype),l(b.prototype,a,function(){return this}),e.AsyncIterator=b,e.async=function(O,T,L,N,F){F===void 0&&(F=Promise);var V=new b(u(O,T,L,N),F);return e.isGeneratorFunction(T)?V:V.next().then(function(I){return I.done?I.value:V.next()})},x(h),l(h,s,"Generator"),l(h,o,function(){return this}),l(h,"toString",function(){return"[object Generator]"}),e.keys=function(O){var T=Object(O),L=[];for(var N in T)L.push(N);return L.reverse(),function F(){for(;L.length;){var V=L.pop();if(V in T)return F.value=V,F.done=!1,F}return F.done=!0,F}},e.values=D,H.prototype={constructor:H,reset:function(T){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!T)for(var L in this)L.charAt(0)==="t"&&n.call(this,L)&&!isNaN(+L.slice(1))&&(this[L]=void 0)},stop:function(){this.done=!0;var T=this.tryEntries[0].completion;if(T.type==="throw")throw T.arg;return this.rval},dispatchException:function(T){if(this.done)throw T;var L=this;function N(oe,B){return I.type="throw",I.arg=T,L.next=oe,B&&(L.method="next",L.arg=void 0),!!B}for(var F=this.tryEntries.length-1;F>=0;--F){var V=this.tryEntries[F],I=V.completion;if(V.tryLoc==="root")return N("end");if(V.tryLoc<=this.prev){var K=n.call(V,"catchLoc"),G=n.call(V,"finallyLoc");if(K&&G){if(this.prev<V.catchLoc)return N(V.catchLoc,!0);if(this.prev<V.finallyLoc)return N(V.finallyLoc)}else if(K){if(this.prev<V.catchLoc)return N(V.catchLoc,!0)}else{if(!G)throw new Error("try statement without catch or finally");if(this.prev<V.finallyLoc)return N(V.finallyLoc)}}}},abrupt:function(T,L){for(var N=this.tryEntries.length-1;N>=0;--N){var F=this.tryEntries[N];if(F.tryLoc<=this.prev&&n.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var V=F;break}}V&&(T==="break"||T==="continue")&&V.tryLoc<=L&&L<=V.finallyLoc&&(V=null);var I=V?V.completion:{};return I.type=T,I.arg=L,V?(this.method="next",this.next=V.finallyLoc,d):this.complete(I)},complete:function(T,L){if(T.type==="throw")throw T.arg;return T.type==="break"||T.type==="continue"?this.next=T.arg:T.type==="return"?(this.rval=this.arg=T.arg,this.method="return",this.next="end"):T.type==="normal"&&L&&(this.next=L),d},finish:function(T){for(var L=this.tryEntries.length-1;L>=0;--L){var N=this.tryEntries[L];if(N.finallyLoc===T)return this.complete(N.completion,N.afterLoc),P(N),d}},catch:function(T){for(var L=this.tryEntries.length-1;L>=0;--L){var N=this.tryEntries[L];if(N.tryLoc===T){var F=N.completion;if(F.type==="throw"){var V=F.arg;P(N)}return V}}throw new Error("illegal catch attempt")},delegateYield:function(T,L,N){return this.delegate={iterator:D(T),resultName:L,nextLoc:N},this.method==="next"&&(this.arg=void 0),d}},e}function Qg(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(u){n(u);return}s.done?t(l):Promise.resolve(l).then(r,i)}function Eu(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(l){Qg(o,r,i,a,s,"next",l)}function s(l){Qg(o,r,i,a,s,"throw",l)}a(void 0)})}}function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jr.apply(this,arguments)}function HP(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ra(e,t)}function xf(e){return xf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},xf(e)}function Ra(e,t){return Ra=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ra(e,t)}function VP(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Js(e,t,n){return VP()?Js=Reflect.construct.bind():Js=function(i,o,a){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(i,s),u=new l;return a&&Ra(u,a.prototype),u},Js.apply(null,arguments)}function WP(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function wf(e){var t=typeof Map=="function"?new Map:void 0;return wf=function(r){if(r===null||!WP(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return Js(r,arguments,xf(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Ra(i,r)},wf(e)}var GP=/%[sdj%]/g,qP=function(){};typeof process<"u"&&process.env;function Sf(e){if(!e||!e.length)return null;var t={};return e.forEach(function(n){var r=n.field;t[r]=t[r]||[],t[r].push(n)}),t}function zt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=0,o=n.length;if(typeof e=="function")return e.apply(null,n);if(typeof e=="string"){var a=e.replace(GP,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(n[i++]);case"%d":return Number(n[i++]);case"%j":try{return JSON.stringify(n[i++])}catch{return"[Circular]"}break;default:return s}});return a}return e}function JP(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function st(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||JP(t)&&typeof e=="string"&&!e)}function QP(e,t,n){var r=[],i=0,o=e.length;function a(s){r.push.apply(r,s||[]),i++,i===o&&n(r)}e.forEach(function(s){t(s,a)})}function Xg(e,t,n){var r=0,i=e.length;function o(a){if(a&&a.length){n(a);return}var s=r;r=r+1,s<i?t(e[s],o):n([])}o([])}function XP(e){var t=[];return Object.keys(e).forEach(function(n){t.push.apply(t,e[n]||[])}),t}var Kg=function(e){HP(t,e);function t(n,r){var i;return i=e.call(this,"Async Validation Error")||this,i.errors=n,i.fields=r,i}return t}(wf(Error));function KP(e,t,n,r,i){if(t.first){var o=new Promise(function(f,w){var v=function(p){return r(p),p.length?w(new Kg(p,Sf(p))):f(i)},g=XP(e);Xg(g,n,v)});return o.catch(function(f){return f}),o}var a=t.firstFields===!0?Object.keys(e):t.firstFields||[],s=Object.keys(e),l=s.length,u=0,c=[],d=new Promise(function(f,w){var v=function(m){if(c.push.apply(c,m),u++,u===l)return r(c),c.length?w(new Kg(c,Sf(c))):f(i)};s.length||(r(c),f(i)),s.forEach(function(g){var m=e[g];a.indexOf(g)!==-1?Xg(m,n,v):QP(m,n,v)})});return d.catch(function(f){return f}),d}function YP(e){return!!(e&&e.message!==void 0)}function ZP(e,t){for(var n=e,r=0;r<t.length;r++){if(n==null)return n;n=n[t[r]]}return n}function Yg(e,t){return function(n){var r;return e.fullFields?r=ZP(t,e.fullFields):r=t[n.field||e.fullField],YP(n)?(n.field=n.field||e.fullField,n.fieldValue=r,n):{message:typeof n=="function"?n():n,fieldValue:r,field:n.field||e.fullField}}}function Zg(e,t){if(t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];typeof r=="object"&&typeof e[n]=="object"?e[n]=Jr({},e[n],r):e[n]=r}}return e}var px=function(t,n,r,i,o,a){t.required&&(!r.hasOwnProperty(t.field)||st(n,a||t.type))&&i.push(zt(o.messages.required,t.fullField))},e$=function(t,n,r,i,o){(/^\s+$/.test(n)||n==="")&&i.push(zt(o.messages.whitespace,t.fullField))},vs,t$=function(){if(vs)return vs;var e="[a-fA-F\\d:]",t=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+n+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+n+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+n+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+n+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+n+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+n+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+n+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+n+"$)|(?:^"+i+"$)"),a=new RegExp("^"+n+"$"),s=new RegExp("^"+i+"$"),l=function(b){return b&&b.exact?o:new RegExp("(?:"+t(b)+n+t(b)+")|(?:"+t(b)+i+t(b)+")","g")};l.v4=function(x){return x&&x.exact?a:new RegExp(""+t(x)+n+t(x),"g")},l.v6=function(x){return x&&x.exact?s:new RegExp(""+t(x)+i+t(x),"g")};var u="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",d=l.v4().source,f=l.v6().source,w="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",v="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",g="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",m="(?::\\d{2,5})?",p='(?:[/?#][^\\s"]*)?',h="(?:"+u+"|www\\.)"+c+"(?:localhost|"+d+"|"+f+"|"+w+v+g+")"+m+p;return vs=new RegExp("(?:^"+h+"$)","i"),vs},ev={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},zo={integer:function(t){return zo.number(t)&&parseInt(t,10)===t},float:function(t){return zo.number(t)&&!zo.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return typeof t=="object"&&!zo.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(ev.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(t$())},hex:function(t){return typeof t=="string"&&!!t.match(ev.hex)}},n$=function(t,n,r,i,o){if(t.required&&n===void 0){px(t,n,r,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=t.type;a.indexOf(s)>-1?zo[s](n)||i.push(zt(o.messages.types[s],t.fullField,t.type)):s&&typeof n!==t.type&&i.push(zt(o.messages.types[s],t.fullField,t.type))},r$=function(t,n,r,i,o){var a=typeof t.len=="number",s=typeof t.min=="number",l=typeof t.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=n,d=null,f=typeof n=="number",w=typeof n=="string",v=Array.isArray(n);if(f?d="number":w?d="string":v&&(d="array"),!d)return!1;v&&(c=n.length),w&&(c=n.replace(u,"_").length),a?c!==t.len&&i.push(zt(o.messages[d].len,t.fullField,t.len)):s&&!l&&c<t.min?i.push(zt(o.messages[d].min,t.fullField,t.min)):l&&!s&&c>t.max?i.push(zt(o.messages[d].max,t.fullField,t.max)):s&&l&&(c<t.min||c>t.max)&&i.push(zt(o.messages[d].range,t.fullField,t.min,t.max))},vi="enum",i$=function(t,n,r,i,o){t[vi]=Array.isArray(t[vi])?t[vi]:[],t[vi].indexOf(n)===-1&&i.push(zt(o.messages[vi],t.fullField,t[vi].join(", ")))},o$=function(t,n,r,i,o){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(n)||i.push(zt(o.messages.pattern.mismatch,t.fullField,n,t.pattern));else if(typeof t.pattern=="string"){var a=new RegExp(t.pattern);a.test(n)||i.push(zt(o.messages.pattern.mismatch,t.fullField,n,t.pattern))}}},we={required:px,whitespace:e$,type:n$,range:r$,enum:i$,pattern:o$},a$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n,"string")&&!t.required)return r();we.required(t,n,i,a,o,"string"),st(n,"string")||(we.type(t,n,i,a,o),we.range(t,n,i,a,o),we.pattern(t,n,i,a,o),t.whitespace===!0&&we.whitespace(t,n,i,a,o))}r(a)},s$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n)&&!t.required)return r();we.required(t,n,i,a,o),n!==void 0&&we.type(t,n,i,a,o)}r(a)},l$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(n===""&&(n=void 0),st(n)&&!t.required)return r();we.required(t,n,i,a,o),n!==void 0&&(we.type(t,n,i,a,o),we.range(t,n,i,a,o))}r(a)},u$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n)&&!t.required)return r();we.required(t,n,i,a,o),n!==void 0&&we.type(t,n,i,a,o)}r(a)},c$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n)&&!t.required)return r();we.required(t,n,i,a,o),st(n)||we.type(t,n,i,a,o)}r(a)},d$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n)&&!t.required)return r();we.required(t,n,i,a,o),n!==void 0&&(we.type(t,n,i,a,o),we.range(t,n,i,a,o))}r(a)},f$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n)&&!t.required)return r();we.required(t,n,i,a,o),n!==void 0&&(we.type(t,n,i,a,o),we.range(t,n,i,a,o))}r(a)},p$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(n==null&&!t.required)return r();we.required(t,n,i,a,o,"array"),n!=null&&(we.type(t,n,i,a,o),we.range(t,n,i,a,o))}r(a)},h$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n)&&!t.required)return r();we.required(t,n,i,a,o),n!==void 0&&we.type(t,n,i,a,o)}r(a)},m$="enum",g$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n)&&!t.required)return r();we.required(t,n,i,a,o),n!==void 0&&we[m$](t,n,i,a,o)}r(a)},v$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n,"string")&&!t.required)return r();we.required(t,n,i,a,o),st(n,"string")||we.pattern(t,n,i,a,o)}r(a)},y$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n,"date")&&!t.required)return r();if(we.required(t,n,i,a,o),!st(n,"date")){var l;n instanceof Date?l=n:l=new Date(n),we.type(t,l,i,a,o),l&&we.range(t,l.getTime(),i,a,o)}}r(a)},x$=function(t,n,r,i,o){var a=[],s=Array.isArray(n)?"array":typeof n;we.required(t,n,i,a,o,s),r(a)},$c=function(t,n,r,i,o){var a=t.type,s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(st(n,a)&&!t.required)return r();we.required(t,n,i,s,o,a),st(n,a)||we.type(t,n,i,s,o)}r(s)},w$=function(t,n,r,i,o){var a=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(st(n)&&!t.required)return r();we.required(t,n,i,a,o)}r(a)},ta={string:a$,method:s$,number:l$,boolean:u$,regexp:c$,integer:d$,float:f$,array:p$,object:h$,enum:g$,pattern:v$,date:y$,url:$c,hex:$c,email:$c,required:x$,any:w$};function bf(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var Ef=bf(),ja=function(){function e(n){this.rules=null,this._messages=Ef,this.define(n)}var t=e.prototype;return t.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(o){var a=r[o];i.rules[o]=Array.isArray(a)?a:[a]})},t.messages=function(r){return r&&(this._messages=Zg(bf(),r)),this._messages},t.validate=function(r,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=r,l=i,u=o;if(typeof l=="function"&&(u=l,l={}),!this.rules||Object.keys(this.rules).length===0)return u&&u(null,s),Promise.resolve(s);function c(g){var m=[],p={};function h(b){if(Array.isArray(b)){var C;m=(C=m).concat.apply(C,b)}else m.push(b)}for(var x=0;x<g.length;x++)h(g[x]);m.length?(p=Sf(m),u(m,p)):u(null,s)}if(l.messages){var d=this.messages();d===Ef&&(d=bf()),Zg(d,l.messages),l.messages=d}else l.messages=this.messages();var f={},w=l.keys||Object.keys(this.rules);w.forEach(function(g){var m=a.rules[g],p=s[g];m.forEach(function(h){var x=h;typeof x.transform=="function"&&(s===r&&(s=Jr({},s)),p=s[g]=x.transform(p)),typeof x=="function"?x={validator:x}:x=Jr({},x),x.validator=a.getValidationMethod(x),x.validator&&(x.field=g,x.fullField=x.fullField||g,x.type=a.getType(x),f[g]=f[g]||[],f[g].push({rule:x,value:p,source:s,field:g}))})});var v={};return KP(f,l,function(g,m){var p=g.rule,h=(p.type==="object"||p.type==="array")&&(typeof p.fields=="object"||typeof p.defaultField=="object");h=h&&(p.required||!p.required&&g.value),p.field=g.field;function x(k,R){return Jr({},R,{fullField:p.fullField+"."+k,fullFields:p.fullFields?[].concat(p.fullFields,[k]):[k]})}function b(k){k===void 0&&(k=[]);var R=Array.isArray(k)?k:[k];!l.suppressWarning&&R.length&&e.warning("async-validator:",R),R.length&&p.message!==void 0&&(R=[].concat(p.message));var P=R.map(Yg(p,s));if(l.first&&P.length)return v[p.field]=1,m(P);if(!h)m(P);else{if(p.required&&!g.value)return p.message!==void 0?P=[].concat(p.message).map(Yg(p,s)):l.error&&(P=[l.error(p,zt(l.messages.required,p.field))]),m(P);var H={};p.defaultField&&Object.keys(g.value).map(function(O){H[O]=p.defaultField}),H=Jr({},H,g.rule.fields);var D={};Object.keys(H).forEach(function(O){var T=H[O],L=Array.isArray(T)?T:[T];D[O]=L.map(x.bind(null,O))});var Q=new e(D);Q.messages(l.messages),g.rule.options&&(g.rule.options.messages=l.messages,g.rule.options.error=l.error),Q.validate(g.value,g.rule.options||l,function(O){var T=[];P&&P.length&&T.push.apply(T,P),O&&O.length&&T.push.apply(T,O),m(T.length?T:null)})}}var C;if(p.asyncValidator)C=p.asyncValidator(p,g.value,b,g.source,l);else if(p.validator){try{C=p.validator(p,g.value,b,g.source,l)}catch(k){console.error==null||console.error(k),l.suppressValidatorError||setTimeout(function(){throw k},0),b(k.message)}C===!0?b():C===!1?b(typeof p.message=="function"?p.message(p.fullField||p.field):p.message||(p.fullField||p.field)+" fails"):C instanceof Array?b(C):C instanceof Error&&b(C.message)}C&&C.then&&C.then(function(){return b()},function(k){return b(k)})},function(g){c(g)},s)},t.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!ta.hasOwnProperty(r.type))throw new Error(zt("Unknown rule type %s",r.type));return r.type||"string"},t.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?ta.required:ta[this.getType(r)]||void 0},e}();ja.register=function(t,n){if(typeof n!="function")throw new Error("Cannot register a validator by type, validator is not a function");ta[t]=n};ja.warning=qP;ja.messages=Ef;ja.validators=ta;var Nt="'${name}' is not a valid ${type}",hx={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:Nt,method:Nt,array:Nt,object:Nt,number:Nt,date:Nt,boolean:Nt,integer:Nt,float:Nt,regexp:Nt,email:Nt,url:Nt,hex:Nt},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}};function zn(e,t){for(var n=e,r=0;r<t.length;r+=1){if(n==null)return;n=n[t[r]]}return n}function S$(e){return nx(e)||Q1(e)||Zp(e)||rx()}function mx(e,t,n,r){if(!t.length)return n;var i=S$(t),o=i[0],a=i.slice(1),s;return!e&&typeof o=="number"?s=[]:Array.isArray(e)?s=ve(e):s=$({},e),r&&n===void 0&&a.length===1?delete s[o][a[0]]:s[o]=mx(s[o],a,n,r),s}function cr(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.length&&r&&n===void 0&&!zn(e,t.slice(0,-1))?e:mx(e,t,n,r)}function Cu(e){return Array.isArray(e)?E$(e):ze(e)==="object"&&e!==null?b$(e):e}function b$(e){if(Object.getPrototypeOf(e)===Object.prototype){var t={};for(var n in e)t[n]=Cu(e[n]);return t}return e}function E$(e){return e.map(function(t){return Cu(t)})}function Xe(e){return yf(e)}function tv(e,t){var n={};return t.forEach(function(r){var i=zn(e,r);n=cr(n,r,i)}),n}function na(e,t){return e&&e.some(function(n){return vx(n,t)})}function nv(e){return ze(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function gx(e,t){var n=Array.isArray(e)?ve(e):$({},e);return t&&Object.keys(t).forEach(function(r){var i=n[r],o=t[r],a=nv(i)&&nv(o);n[r]=a?gx(i,o||{}):Cu(o)}),n}function ra(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce(function(i,o){return gx(i,o)},e)}function vx(e,t){return!e||!t||e.length!==t.length?!1:e.every(function(n,r){return t[r]===n})}function C$(e,t){if(e===t)return!0;if(!e&&t||e&&!t||!e||!t||ze(e)!=="object"||ze(t)!=="object")return!1;var n=Object.keys(e),r=Object.keys(t),i=new Set([].concat(n,r));return ve(i).every(function(o){var a=e[o],s=t[o];return typeof a=="function"&&typeof s=="function"?!0:a===s})}function k$(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&ze(t.target)==="object"&&e in t.target?t.target[e]:t}function rv(e,t,n){var r=e.length;if(t<0||t>=r||n<0||n>=r)return e;var i=e[t],o=t-n;return o>0?[].concat(ve(e.slice(0,n)),[i],ve(e.slice(n,t)),ve(e.slice(t+1,r))):o<0?[].concat(ve(e.slice(0,t)),ve(e.slice(t+1,n+1)),[i],ve(e.slice(n+1,r))):e}var iv=ja;function A$(e,t){return e.replace(/\$\{\w+\}/g,function(n){var r=n.slice(2,-1);return t[r]})}var ov="CODE_LOGIC_ERROR";function Cf(e,t,n,r,i){return kf.apply(this,arguments)}function kf(){return kf=Eu(Qn().mark(function e(t,n,r,i,o){var a,s,l,u,c,d,f,w,v;return Qn().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return a=$({},r),delete a.ruleIndex,iv.warning=function(){},a.validator&&(s=a.validator,a.validator=function(){try{return s.apply(void 0,arguments)}catch(p){return console.error(p),Promise.reject(ov)}}),l=null,a&&a.type==="array"&&a.defaultField&&(l=a.defaultField,delete a.defaultField),u=new iv(ee({},t,[a])),c=ra({},hx,i.validateMessages),u.messages(c),d=[],m.prev=10,m.next=13,Promise.resolve(u.validate(ee({},t,n),$({},i)));case 13:m.next=18;break;case 15:m.prev=15,m.t0=m.catch(10),m.t0.errors&&(d=m.t0.errors.map(function(p,h){var x=p.message,b=x===ov?c.default:x;return E.isValidElement(b)?E.cloneElement(b,{key:"error_".concat(h)}):b}));case 18:if(!(!d.length&&l)){m.next=23;break}return m.next=21,Promise.all(n.map(function(p,h){return Cf("".concat(t,".").concat(h),p,l,i,o)}));case 21:return f=m.sent,m.abrupt("return",f.reduce(function(p,h){return[].concat(ve(p),ve(h))},[]));case 23:return w=$($({},r),{},{name:t,enum:(r.enum||[]).join(", ")},o),v=d.map(function(p){return typeof p=="string"?A$(p,w):p}),m.abrupt("return",v);case 26:case"end":return m.stop()}},e,null,[[10,15]])})),kf.apply(this,arguments)}function R$(e,t,n,r,i,o){var a=e.join("."),s=n.map(function(c,d){var f=c.validator,w=$($({},c),{},{ruleIndex:d});return f&&(w.validator=function(v,g,m){var p=!1,h=function(){for(var C=arguments.length,k=new Array(C),R=0;R<C;R++)k[R]=arguments[R];Promise.resolve().then(function(){Zt(!p,"Your validator function has already return a promise. `callback` will be ignored."),p||m.apply(void 0,k)})},x=f(v,g,h);p=x&&typeof x.then=="function"&&typeof x.catch=="function",Zt(p,"`callback` is deprecated. Please return a promise instead."),p&&x.then(function(){m()}).catch(function(b){m(b||" ")})}),w}).sort(function(c,d){var f=c.warningOnly,w=c.ruleIndex,v=d.warningOnly,g=d.ruleIndex;return!!f==!!v?w-g:f?1:-1}),l;if(i===!0)l=new Promise(function(){var c=Eu(Qn().mark(function d(f,w){var v,g,m;return Qn().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:v=0;case 1:if(!(v<s.length)){h.next=12;break}return g=s[v],h.next=5,Cf(a,t,g,r,o);case 5:if(m=h.sent,!m.length){h.next=9;break}return w([{errors:m,rule:g}]),h.abrupt("return");case 9:v+=1,h.next=1;break;case 12:f([]);case 13:case"end":return h.stop()}},d)}));return function(d,f){return c.apply(this,arguments)}}());else{var u=s.map(function(c){return Cf(a,t,c,r,o).then(function(d){return{errors:d,rule:c}})});l=(i?T$(u):O$(u)).then(function(c){return Promise.reject(c)})}return l.catch(function(c){return c}),l}function O$(e){return Af.apply(this,arguments)}function Af(){return Af=Eu(Qn().mark(function e(t){return Qn().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.all(t).then(function(i){var o,a=(o=[]).concat.apply(o,ve(i));return a}));case 1:case"end":return r.stop()}},e)})),Af.apply(this,arguments)}function T$(e){return Rf.apply(this,arguments)}function Rf(){return Rf=Eu(Qn().mark(function e(t){var n;return Qn().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=0,i.abrupt("return",new Promise(function(o){t.forEach(function(a){a.then(function(s){s.errors.length&&o([s]),n+=1,n===t.length&&o([])})})}));case 2:case"end":return i.stop()}},e)})),Rf.apply(this,arguments)}var P$=["name"],qt=[];function av(e,t,n,r,i,o){return typeof e=="function"?e(t,n,"source"in o?{source:o.source}:{}):r!==i}var oh=function(e){Zn(n,e);var t=er(n);function n(r){var i;if(Lt(this,n),i=t.call(this,r),i.state={resetCount:0},i.cancelRegisterFunc=null,i.mounted=!1,i.touched=!1,i.dirty=!1,i.validatePromise=void 0,i.prevValidating=void 0,i.errors=qt,i.warnings=qt,i.cancelRegister=function(){var l=i.props,u=l.preserve,c=l.isListField,d=l.name;i.cancelRegisterFunc&&i.cancelRegisterFunc(c,u,Xe(d)),i.cancelRegisterFunc=null},i.getNamePath=function(){var l=i.props,u=l.name,c=l.fieldContext,d=c.prefixName,f=d===void 0?[]:d;return u!==void 0?[].concat(ve(f),ve(u)):[]},i.getRules=function(){var l=i.props,u=l.rules,c=u===void 0?[]:u,d=l.fieldContext;return c.map(function(f){return typeof f=="function"?f(d):f})},i.refresh=function(){i.mounted&&i.setState(function(l){var u=l.resetCount;return{resetCount:u+1}})},i.triggerMetaEvent=function(l){var u=i.props.onMetaChange;u==null||u($($({},i.getMeta()),{},{destroy:l}))},i.onStoreChange=function(l,u,c){var d=i.props,f=d.shouldUpdate,w=d.dependencies,v=w===void 0?[]:w,g=d.onReset,m=c.store,p=i.getNamePath(),h=i.getValue(l),x=i.getValue(m),b=u&&na(u,p);switch(c.type==="valueUpdate"&&c.source==="external"&&h!==x&&(i.touched=!0,i.dirty=!0,i.validatePromise=null,i.errors=qt,i.warnings=qt,i.triggerMetaEvent()),c.type){case"reset":if(!u||b){i.touched=!1,i.dirty=!1,i.validatePromise=void 0,i.errors=qt,i.warnings=qt,i.triggerMetaEvent(),g==null||g(),i.refresh();return}break;case"remove":{if(f){i.reRender();return}break}case"setField":{if(b){var C=c.data;"touched"in C&&(i.touched=C.touched),"validating"in C&&!("originRCField"in C)&&(i.validatePromise=C.validating?Promise.resolve([]):null),"errors"in C&&(i.errors=C.errors||qt),"warnings"in C&&(i.warnings=C.warnings||qt),i.dirty=!0,i.triggerMetaEvent(),i.reRender();return}if(f&&!p.length&&av(f,l,m,h,x,c)){i.reRender();return}break}case"dependenciesUpdate":{var k=v.map(Xe);if(k.some(function(R){return na(c.relatedFields,R)})){i.reRender();return}break}default:if(b||(!v.length||p.length||f)&&av(f,l,m,h,x,c)){i.reRender();return}break}f===!0&&i.reRender()},i.validateRules=function(l){var u=i.getNamePath(),c=i.getValue(),d=l||{},f=d.triggerName,w=d.validateOnly,v=w===void 0?!1:w,g=Promise.resolve().then(function(){if(!i.mounted)return[];var m=i.props,p=m.validateFirst,h=p===void 0?!1:p,x=m.messageVariables,b=i.getRules();f&&(b=b.filter(function(k){return k}).filter(function(k){var R=k.validateTrigger;if(!R)return!0;var P=yf(R);return P.includes(f)}));var C=R$(u,c,b,l,h,x);return C.catch(function(k){return k}).then(function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:qt;if(i.validatePromise===g){var R;i.validatePromise=null;var P=[],H=[];(R=k.forEach)===null||R===void 0||R.call(k,function(D){var Q=D.rule.warningOnly,O=D.errors,T=O===void 0?qt:O;Q?H.push.apply(H,ve(T)):P.push.apply(P,ve(T))}),i.errors=P,i.warnings=H,i.triggerMetaEvent(),i.reRender()}}),C});return v||(i.validatePromise=g,i.dirty=!0,i.errors=qt,i.warnings=qt,i.triggerMetaEvent(),i.reRender()),g},i.isFieldValidating=function(){return!!i.validatePromise},i.isFieldTouched=function(){return i.touched},i.isFieldDirty=function(){if(i.dirty||i.props.initialValue!==void 0)return!0;var l=i.props.fieldContext,u=l.getInternalHooks(qr),c=u.getInitialValue;return c(i.getNamePath())!==void 0},i.getErrors=function(){return i.errors},i.getWarnings=function(){return i.warnings},i.isListField=function(){return i.props.isListField},i.isList=function(){return i.props.isList},i.isPreserve=function(){return i.props.preserve},i.getMeta=function(){i.prevValidating=i.isFieldValidating();var l={touched:i.isFieldTouched(),validating:i.prevValidating,errors:i.errors,warnings:i.warnings,name:i.getNamePath(),validated:i.validatePromise===null};return l},i.getOnlyChild=function(l){if(typeof l=="function"){var u=i.getMeta();return $($({},i.getOnlyChild(l(i.getControlled(),u,i.props.fieldContext))),{},{isFunction:!0})}var c=sf(l);return c.length!==1||!E.isValidElement(c[0])?{child:c,isFunction:!1}:{child:c[0],isFunction:!1}},i.getValue=function(l){var u=i.props.fieldContext.getFieldsValue,c=i.getNamePath();return zn(l||u(!0),c)},i.getControlled=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=i.props,c=u.trigger,d=u.validateTrigger,f=u.getValueFromEvent,w=u.normalize,v=u.valuePropName,g=u.getValueProps,m=u.fieldContext,p=d!==void 0?d:m.validateTrigger,h=i.getNamePath(),x=m.getInternalHooks,b=m.getFieldsValue,C=x(qr),k=C.dispatch,R=i.getValue(),P=g||function(O){return ee({},v,O)},H=l[c],D=$($({},l),P(R));D[c]=function(){i.touched=!0,i.dirty=!0,i.triggerMetaEvent();for(var O,T=arguments.length,L=new Array(T),N=0;N<T;N++)L[N]=arguments[N];f?O=f.apply(void 0,L):O=k$.apply(void 0,[v].concat(L)),w&&(O=w(O,R,b(!0))),k({type:"updateValue",namePath:h,value:O}),H&&H.apply(void 0,L)};var Q=yf(p||[]);return Q.forEach(function(O){var T=D[O];D[O]=function(){T&&T.apply(void 0,arguments);var L=i.props.rules;L&&L.length&&k({type:"validateField",namePath:h,triggerName:O})}}),D},r.fieldContext){var o=r.fieldContext.getInternalHooks,a=o(qr),s=a.initEntityValue;s(le(i))}return i}return Mt(n,[{key:"componentDidMount",value:function(){var i=this.props,o=i.shouldUpdate,a=i.fieldContext;if(this.mounted=!0,a){var s=a.getInternalHooks,l=s(qr),u=l.registerField;this.cancelRegisterFunc=u(this)}o===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var i=this.state.resetCount,o=this.props.children,a=this.getOnlyChild(o),s=a.child,l=a.isFunction,u;return l?u=s:E.isValidElement(s)?u=E.cloneElement(s,this.getControlled(s.props)):(Zt(!s,"`children` of Field is not validate ReactElement."),u=s),E.createElement(E.Fragment,{key:i},u)}}]),n}(E.Component);oh.contextType=ao;oh.defaultProps={trigger:"onChange",valuePropName:"value"};function yx(e){var t=e.name,n=li(e,P$),r=E.useContext(ao),i=E.useContext(vf),o=t!==void 0?Xe(t):void 0,a="keep";return n.isListField||(a="_".concat((o||[]).join("_"))),E.createElement(oh,nn({key:a,name:o,isListField:!!i},n,{fieldContext:r}))}var $$=function(t){var n=t.name,r=t.initialValue,i=t.children,o=t.rules,a=t.validateTrigger,s=t.isListField,l=E.useContext(ao),u=E.useContext(vf),c=E.useRef({keys:[],id:0}),d=c.current,f=E.useMemo(function(){var m=Xe(l.prefixName)||[];return[].concat(ve(m),ve(Xe(n)))},[l.prefixName,n]),w=E.useMemo(function(){return $($({},l),{},{prefixName:f})},[l,f]),v=E.useMemo(function(){return{getKey:function(p){var h=f.length,x=p[h];return[d.keys[x],p.slice(h+1)]}}},[f]);if(typeof i!="function")return Zt(!1,"Form.List only accepts function as children."),null;var g=function(p,h,x){var b=x.source;return b==="internal"?!1:p!==h};return E.createElement(vf.Provider,{value:v},E.createElement(ao.Provider,{value:w},E.createElement(yx,{name:[],shouldUpdate:g,rules:o,validateTrigger:a,initialValue:r,isList:!0,isListField:s??!!u},function(m,p){var h=m.value,x=h===void 0?[]:h,b=m.onChange,C=l.getFieldValue,k=function(){var D=C(f||[]);return D||[]},R={add:function(D,Q){var O=k();Q>=0&&Q<=O.length?(d.keys=[].concat(ve(d.keys.slice(0,Q)),[d.id],ve(d.keys.slice(Q))),b([].concat(ve(O.slice(0,Q)),[D],ve(O.slice(Q))))):(d.keys=[].concat(ve(d.keys),[d.id]),b([].concat(ve(O),[D]))),d.id+=1},remove:function(D){var Q=k(),O=new Set(Array.isArray(D)?D:[D]);O.size<=0||(d.keys=d.keys.filter(function(T,L){return!O.has(L)}),b(Q.filter(function(T,L){return!O.has(L)})))},move:function(D,Q){if(D!==Q){var O=k();D<0||D>=O.length||Q<0||Q>=O.length||(d.keys=rv(d.keys,D,Q),b(rv(O,D,Q)))}}},P=x||[];return Array.isArray(P)||(P=[]),i(P.map(function(H,D){var Q=d.keys[D];return Q===void 0&&(d.keys[D]=d.id,Q=d.keys[D],d.id+=1),{name:D,key:Q,isListField:!0}}),R,p)})))};function L$(e){var t=!1,n=e.length,r=[];return e.length?new Promise(function(i,o){e.forEach(function(a,s){a.catch(function(l){return t=!0,l}).then(function(l){n-=1,r[s]=l,!(n>0)&&(t&&o(r),i(r))})})}):Promise.resolve([])}var xx="__@field_split__";function Lc(e){return e.map(function(t){return"".concat(ze(t),":").concat(t)}).join(xx)}var yi=function(){function e(){Lt(this,e),this.kvs=new Map}return Mt(e,[{key:"set",value:function(n,r){this.kvs.set(Lc(n),r)}},{key:"get",value:function(n){return this.kvs.get(Lc(n))}},{key:"update",value:function(n,r){var i=this.get(n),o=r(i);o?this.set(n,o):this.delete(n)}},{key:"delete",value:function(n){this.kvs.delete(Lc(n))}},{key:"map",value:function(n){return ve(this.kvs.entries()).map(function(r){var i=We(r,2),o=i[0],a=i[1],s=o.split(xx);return n({key:s.map(function(l){var u=l.match(/^([^:]*):(.*)$/),c=We(u,3),d=c[1],f=c[2];return d==="number"?Number(f):f}),value:a})})}},{key:"toJSON",value:function(){var n={};return this.map(function(r){var i=r.key,o=r.value;return n[i.join(".")]=o,null}),n}}]),e}(),M$=["name"],N$=Mt(function e(t){var n=this;Lt(this,e),this.formHooked=!1,this.forceRootUpdate=void 0,this.subscribable=!0,this.store={},this.fieldEntities=[],this.initialValues={},this.callbacks={},this.validateMessages=null,this.preserve=null,this.lastValidatePromise=null,this.getForm=function(){return{getFieldValue:n.getFieldValue,getFieldsValue:n.getFieldsValue,getFieldError:n.getFieldError,getFieldWarning:n.getFieldWarning,getFieldsError:n.getFieldsError,isFieldsTouched:n.isFieldsTouched,isFieldTouched:n.isFieldTouched,isFieldValidating:n.isFieldValidating,isFieldsValidating:n.isFieldsValidating,resetFields:n.resetFields,setFields:n.setFields,setFieldValue:n.setFieldValue,setFieldsValue:n.setFieldsValue,validateFields:n.validateFields,submit:n.submit,_init:!0,getInternalHooks:n.getInternalHooks}},this.getInternalHooks=function(r){return r===qr?(n.formHooked=!0,{dispatch:n.dispatch,initEntityValue:n.initEntityValue,registerField:n.registerField,useSubscribe:n.useSubscribe,setInitialValues:n.setInitialValues,destroyForm:n.destroyForm,setCallbacks:n.setCallbacks,setValidateMessages:n.setValidateMessages,getFields:n.getFields,setPreserve:n.setPreserve,getInitialValue:n.getInitialValue,registerWatch:n.registerWatch}):(Zt(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)},this.useSubscribe=function(r){n.subscribable=r},this.prevWithoutPreserves=null,this.setInitialValues=function(r,i){if(n.initialValues=r||{},i){var o,a=ra({},r,n.store);(o=n.prevWithoutPreserves)===null||o===void 0||o.map(function(s){var l=s.key;a=cr(a,l,zn(r,l))}),n.prevWithoutPreserves=null,n.updateStore(a)}},this.destroyForm=function(){var r=new yi;n.getFieldEntities(!0).forEach(function(i){n.isMergedPreserve(i.isPreserve())||r.set(i.getNamePath(),!0)}),n.prevWithoutPreserves=r},this.getInitialValue=function(r){var i=zn(n.initialValues,r);return r.length?Cu(i):i},this.setCallbacks=function(r){n.callbacks=r},this.setValidateMessages=function(r){n.validateMessages=r},this.setPreserve=function(r){n.preserve=r},this.watchList=[],this.registerWatch=function(r){return n.watchList.push(r),function(){n.watchList=n.watchList.filter(function(i){return i!==r})}},this.notifyWatch=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(n.watchList.length){var i=n.getFieldsValue(),o=n.getFieldsValue(!0);n.watchList.forEach(function(a){a(i,o,r)})}},this.timeoutId=null,this.warningUnhooked=function(){},this.updateStore=function(r){n.store=r},this.getFieldEntities=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return r?n.fieldEntities.filter(function(i){return i.getNamePath().length}):n.fieldEntities},this.getFieldsMap=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=new yi;return n.getFieldEntities(r).forEach(function(o){var a=o.getNamePath();i.set(a,o)}),i},this.getFieldEntitiesForNamePathList=function(r){if(!r)return n.getFieldEntities(!0);var i=n.getFieldsMap(!0);return r.map(function(o){var a=Xe(o);return i.get(a)||{INVALIDATE_NAME_PATH:Xe(o)}})},this.getFieldsValue=function(r,i){if(n.warningUnhooked(),r===!0&&!i)return n.store;var o=n.getFieldEntitiesForNamePathList(Array.isArray(r)?r:null),a=[];return o.forEach(function(s){var l,u="INVALIDATE_NAME_PATH"in s?s.INVALIDATE_NAME_PATH:s.getNamePath();if(!(!r&&(!((l=s.isListField)===null||l===void 0)&&l.call(s))))if(!i)a.push(u);else{var c="getMeta"in s?s.getMeta():null;i(c)&&a.push(u)}}),tv(n.store,a.map(Xe))},this.getFieldValue=function(r){n.warningUnhooked();var i=Xe(r);return zn(n.store,i)},this.getFieldsError=function(r){n.warningUnhooked();var i=n.getFieldEntitiesForNamePathList(r);return i.map(function(o,a){return o&&!("INVALIDATE_NAME_PATH"in o)?{name:o.getNamePath(),errors:o.getErrors(),warnings:o.getWarnings()}:{name:Xe(r[a]),errors:[],warnings:[]}})},this.getFieldError=function(r){n.warningUnhooked();var i=Xe(r),o=n.getFieldsError([i])[0];return o.errors},this.getFieldWarning=function(r){n.warningUnhooked();var i=Xe(r),o=n.getFieldsError([i])[0];return o.warnings},this.isFieldsTouched=function(){n.warningUnhooked();for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i[0],s=i[1],l,u=!1;i.length===0?l=null:i.length===1?Array.isArray(a)?(l=a.map(Xe),u=!1):(l=null,u=a):(l=a.map(Xe),u=s);var c=n.getFieldEntities(!0),d=function(m){return m.isFieldTouched()};if(!l)return u?c.every(d):c.some(d);var f=new yi;l.forEach(function(g){f.set(g,[])}),c.forEach(function(g){var m=g.getNamePath();l.forEach(function(p){p.every(function(h,x){return m[x]===h})&&f.update(p,function(h){return[].concat(ve(h),[g])})})});var w=function(m){return m.some(d)},v=f.map(function(g){var m=g.value;return m});return u?v.every(w):v.some(w)},this.isFieldTouched=function(r){return n.warningUnhooked(),n.isFieldsTouched([r])},this.isFieldsValidating=function(r){n.warningUnhooked();var i=n.getFieldEntities();if(!r)return i.some(function(a){return a.isFieldValidating()});var o=r.map(Xe);return i.some(function(a){var s=a.getNamePath();return na(o,s)&&a.isFieldValidating()})},this.isFieldValidating=function(r){return n.warningUnhooked(),n.isFieldsValidating([r])},this.resetWithFieldInitialValue=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=new yi,o=n.getFieldEntities(!0);o.forEach(function(l){var u=l.props.initialValue,c=l.getNamePath();if(u!==void 0){var d=i.get(c)||new Set;d.add({entity:l,value:u}),i.set(c,d)}});var a=function(u){u.forEach(function(c){var d=c.props.initialValue;if(d!==void 0){var f=c.getNamePath(),w=n.getInitialValue(f);if(w!==void 0)Zt(!1,"Form already set 'initialValues' with path '".concat(f.join("."),"'. Field can not overwrite it."));else{var v=i.get(f);if(v&&v.size>1)Zt(!1,"Multiple Field with path '".concat(f.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(v){var g=n.getFieldValue(f);(!r.skipExist||g===void 0)&&n.updateStore(cr(n.store,f,ve(v)[0].value))}}}})},s;r.entities?s=r.entities:r.namePathList?(s=[],r.namePathList.forEach(function(l){var u=i.get(l);if(u){var c;(c=s).push.apply(c,ve(ve(u).map(function(d){return d.entity})))}})):s=o,a(s)},this.resetFields=function(r){n.warningUnhooked();var i=n.store;if(!r){n.updateStore(ra({},n.initialValues)),n.resetWithFieldInitialValue(),n.notifyObservers(i,null,{type:"reset"}),n.notifyWatch();return}var o=r.map(Xe);o.forEach(function(a){var s=n.getInitialValue(a);n.updateStore(cr(n.store,a,s))}),n.resetWithFieldInitialValue({namePathList:o}),n.notifyObservers(i,o,{type:"reset"}),n.notifyWatch(o)},this.setFields=function(r){n.warningUnhooked();var i=n.store,o=[];r.forEach(function(a){var s=a.name,l=li(a,M$),u=Xe(s);o.push(u),"value"in l&&n.updateStore(cr(n.store,u,l.value)),n.notifyObservers(i,[u],{type:"setField",data:a})}),n.notifyWatch(o)},this.getFields=function(){var r=n.getFieldEntities(!0),i=r.map(function(o){var a=o.getNamePath(),s=o.getMeta(),l=$($({},s),{},{name:a,value:n.getFieldValue(a)});return Object.defineProperty(l,"originRCField",{value:!0}),l});return i},this.initEntityValue=function(r){var i=r.props.initialValue;if(i!==void 0){var o=r.getNamePath(),a=zn(n.store,o);a===void 0&&n.updateStore(cr(n.store,o,i))}},this.isMergedPreserve=function(r){var i=r!==void 0?r:n.preserve;return i??!0},this.registerField=function(r){n.fieldEntities.push(r);var i=r.getNamePath();if(n.notifyWatch([i]),r.props.initialValue!==void 0){var o=n.store;n.resetWithFieldInitialValue({entities:[r],skipExist:!0}),n.notifyObservers(o,[r.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(a,s){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(n.fieldEntities=n.fieldEntities.filter(function(d){return d!==r}),!n.isMergedPreserve(s)&&(!a||l.length>1)){var u=a?void 0:n.getInitialValue(i);if(i.length&&n.getFieldValue(i)!==u&&n.fieldEntities.every(function(d){return!vx(d.getNamePath(),i)})){var c=n.store;n.updateStore(cr(c,i,u,!0)),n.notifyObservers(c,[i],{type:"remove"}),n.triggerDependenciesUpdate(c,i)}}n.notifyWatch([i])}},this.dispatch=function(r){switch(r.type){case"updateValue":{var i=r.namePath,o=r.value;n.updateValue(i,o);break}case"validateField":{var a=r.namePath,s=r.triggerName;n.validateFields([a],{triggerName:s});break}}},this.notifyObservers=function(r,i,o){if(n.subscribable){var a=$($({},o),{},{store:n.getFieldsValue(!0)});n.getFieldEntities().forEach(function(s){var l=s.onStoreChange;l(r,i,a)})}else n.forceRootUpdate()},this.triggerDependenciesUpdate=function(r,i){var o=n.getDependencyChildrenFields(i);return o.length&&n.validateFields(o),n.notifyObservers(r,o,{type:"dependenciesUpdate",relatedFields:[i].concat(ve(o))}),o},this.updateValue=function(r,i){var o=Xe(r),a=n.store;n.updateStore(cr(n.store,o,i)),n.notifyObservers(a,[o],{type:"valueUpdate",source:"internal"}),n.notifyWatch([o]);var s=n.triggerDependenciesUpdate(a,o),l=n.callbacks.onValuesChange;if(l){var u=tv(n.store,[o]);l(u,n.getFieldsValue())}n.triggerOnFieldsChange([o].concat(ve(s)))},this.setFieldsValue=function(r){n.warningUnhooked();var i=n.store;if(r){var o=ra(n.store,r);n.updateStore(o)}n.notifyObservers(i,null,{type:"valueUpdate",source:"external"}),n.notifyWatch()},this.setFieldValue=function(r,i){n.setFields([{name:r,value:i}])},this.getDependencyChildrenFields=function(r){var i=new Set,o=[],a=new yi;n.getFieldEntities().forEach(function(l){var u=l.props.dependencies;(u||[]).forEach(function(c){var d=Xe(c);a.update(d,function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return f.add(l),f})})});var s=function l(u){var c=a.get(u)||new Set;c.forEach(function(d){if(!i.has(d)){i.add(d);var f=d.getNamePath();d.isFieldDirty()&&f.length&&(o.push(f),l(f))}})};return s(r),o},this.triggerOnFieldsChange=function(r,i){var o=n.callbacks.onFieldsChange;if(o){var a=n.getFields();if(i){var s=new yi;i.forEach(function(u){var c=u.name,d=u.errors;s.set(c,d)}),a.forEach(function(u){u.errors=s.get(u.name)||u.errors})}var l=a.filter(function(u){var c=u.name;return na(r,c)});o(l,a)}},this.validateFields=function(r,i){n.warningUnhooked();var o,a;Array.isArray(r)||typeof r=="string"||typeof i=="string"?(o=r,a=i):a=r;var s=!!o,l=s?o.map(Xe):[],u=[];n.getFieldEntities(!0).forEach(function(f){var w;if(s||l.push(f.getNamePath()),!((w=a)===null||w===void 0)&&w.recursive&&s){var v=f.getNamePath();v.every(function(p,h){return o[h]===p||o[h]===void 0})&&l.push(v)}if(!(!f.props.rules||!f.props.rules.length)){var g=f.getNamePath();if(!s||na(l,g)){var m=f.validateRules($({validateMessages:$($({},hx),n.validateMessages)},a));u.push(m.then(function(){return{name:g,errors:[],warnings:[]}}).catch(function(p){var h,x=[],b=[];return(h=p.forEach)===null||h===void 0||h.call(p,function(C){var k=C.rule.warningOnly,R=C.errors;k?b.push.apply(b,ve(R)):x.push.apply(x,ve(R))}),x.length?Promise.reject({name:g,errors:x,warnings:b}):{name:g,errors:x,warnings:b}}))}}});var c=L$(u);n.lastValidatePromise=c,c.catch(function(f){return f}).then(function(f){var w=f.map(function(v){var g=v.name;return g});n.notifyObservers(n.store,w,{type:"validateFinish"}),n.triggerOnFieldsChange(w,f)});var d=c.then(function(){return n.lastValidatePromise===c?Promise.resolve(n.getFieldsValue(l)):Promise.reject([])}).catch(function(f){var w=f.filter(function(v){return v&&v.errors.length});return Promise.reject({values:n.getFieldsValue(l),errorFields:w,outOfDate:n.lastValidatePromise!==c})});return d.catch(function(f){return f}),n.triggerOnFieldsChange(l),d},this.submit=function(){n.warningUnhooked(),n.validateFields().then(function(r){var i=n.callbacks.onFinish;if(i)try{i(r)}catch(o){console.error(o)}}).catch(function(r){var i=n.callbacks.onFinishFailed;i&&i(r)})},this.forceRootUpdate=t});function wx(e){var t=E.useRef(),n=E.useState({}),r=We(n,2),i=r[1];if(!t.current)if(e)t.current=e;else{var o=function(){i({})},a=new N$(o);t.current=a.getForm()}return[t.current]}var Of=E.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),Sx=function(t){var n=t.validateMessages,r=t.onFormChange,i=t.onFormFinish,o=t.children,a=E.useContext(Of),s=E.useRef({});return E.createElement(Of.Provider,{value:$($({},a),{},{validateMessages:$($({},a.validateMessages),n),triggerFormChange:function(u,c){r&&r(u,{changedFields:c,forms:s.current}),a.triggerFormChange(u,c)},triggerFormFinish:function(u,c){i&&i(u,{values:c,forms:s.current}),a.triggerFormFinish(u,c)},registerForm:function(u,c){u&&(s.current=$($({},s.current),{},ee({},u,c))),a.registerForm(u,c)},unregisterForm:function(u){var c=$({},s.current);delete c[u],s.current=c,a.unregisterForm(u)}})},o)},F$=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],I$=function(t,n){var r=t.name,i=t.initialValues,o=t.fields,a=t.form,s=t.preserve,l=t.children,u=t.component,c=u===void 0?"form":u,d=t.validateMessages,f=t.validateTrigger,w=f===void 0?"onChange":f,v=t.onValuesChange,g=t.onFieldsChange,m=t.onFinish,p=t.onFinishFailed,h=li(t,F$),x=E.useContext(Of),b=wx(a),C=We(b,1),k=C[0],R=k.getInternalHooks(qr),P=R.useSubscribe,H=R.setInitialValues,D=R.setCallbacks,Q=R.setValidateMessages,O=R.setPreserve,T=R.destroyForm;E.useImperativeHandle(n,function(){return k}),E.useEffect(function(){return x.registerForm(r,k),function(){x.unregisterForm(r)}},[x,k,r]),Q($($({},x.validateMessages),d)),D({onValuesChange:v,onFieldsChange:function(B){if(x.triggerFormChange(r,B),g){for(var q=arguments.length,Y=new Array(q>1?q-1:0),ie=1;ie<q;ie++)Y[ie-1]=arguments[ie];g.apply(void 0,[B].concat(Y))}},onFinish:function(B){x.triggerFormFinish(r,B),m&&m(B)},onFinishFailed:p}),O(s);var L=E.useRef(null);H(i,!L.current),L.current||(L.current=!0),E.useEffect(function(){return T},[]);var N,F=typeof l=="function";if(F){var V=k.getFieldsValue(!0);N=l(V,k)}else N=l;P(!F);var I=E.useRef();E.useEffect(function(){C$(I.current||[],o||[])||k.setFields(o||[]),I.current=o},[o,k]);var K=E.useMemo(function(){return $($({},k),{},{validateTrigger:w})},[k,w]),G=E.createElement(ao.Provider,{value:K},N);return c===!1?G:E.createElement(c,nn({},h,{onSubmit:function(B){B.preventDefault(),B.stopPropagation(),k.submit()},onReset:function(B){var q;B.preventDefault(),k.resetFields(),(q=h.onReset)===null||q===void 0||q.call(h,B)}}),G)};function sv(e){try{return JSON.stringify(e)}catch{return Math.random()}}function D$(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],i=r===void 0?[]:r,o=t[1],a=o===void 0?{}:o,s=BP(a)?{form:a}:a,l=s.form,u=E.useState(),c=We(u,2),d=c[0],f=c[1],w=E.useMemo(function(){return sv(d)},[d]),v=E.useRef(w);v.current=w;var g=E.useContext(ao),m=l||g,p=m&&m._init,h=Xe(i),x=E.useRef(h);return x.current=h,E.useEffect(function(){if(p){var b=m.getFieldsValue,C=m.getInternalHooks,k=C(qr),R=k.registerWatch,P=R(function(D,Q){var O=zn(s.preserve?Q:D,x.current),T=sv(O);v.current!==T&&(v.current=T,f(O))}),H=zn(s.preserve?b(!0):b(),x.current);return f(H),P}},[p]),d}var _$=E.forwardRef(I$),Ua=_$;Ua.FormProvider=Sx;Ua.Field=yx;Ua.List=$$;Ua.useForm=wx;Ua.useWatch=D$;const z$={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};var j$={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};const U$={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},bx=U$,B$={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},j$),timePickerLocale:Object.assign({},bx)},lv=B$,Ft="${label} is not a valid ${type}",H$={locale:"en",Pagination:z$,DatePicker:lv,TimePicker:bx,Calendar:lv,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Ft,method:Ft,array:Ft,object:Ft,number:Ft,date:Ft,boolean:Ft,integer:Ft,float:Ft,regexp:Ft,email:Ft,url:Ft,hex:Ft},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}},ah=H$;let Mc=Object.assign({},ah.Modal);function uv(e){e?Mc=Object.assign(Object.assign({},Mc),e):Mc=Object.assign({},ah.Modal)}const V$=E.createContext(void 0),Ex=V$,W$="internalMark",G$=e=>{const{locale:t={},children:n,_ANT_MARK__:r}=e;E.useEffect(()=>(uv(t&&t.Modal),()=>{uv()}),[t]);const i=E.useMemo(()=>Object.assign(Object.assign({},t),{exist:!0}),[t]);return E.createElement(Ex.Provider,{value:i},n)},q$=G$,J$="5.5.0";function mt(e,t){Q$(e)&&(e="100%");var n=X$(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function ys(e){return Math.min(1,Math.max(0,e))}function Q$(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function X$(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Cx(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function xs(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Qr(e){return e.length===1?"0"+e:String(e)}function K$(e,t,n){return{r:mt(e,255)*255,g:mt(t,255)*255,b:mt(n,255)*255}}function cv(e,t,n){e=mt(e,255),t=mt(t,255),n=mt(n,255);var r=Math.max(e,t,n),i=Math.min(e,t,n),o=0,a=0,s=(r+i)/2;if(r===i)a=0,o=0;else{var l=r-i;switch(a=s>.5?l/(2-r-i):l/(r+i),r){case e:o=(t-n)/l+(t<n?6:0);break;case t:o=(n-e)/l+2;break;case n:o=(e-t)/l+4;break}o/=6}return{h:o,s:a,l:s}}function Nc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Y$(e,t,n){var r,i,o;if(e=mt(e,360),t=mt(t,100),n=mt(n,100),t===0)i=n,o=n,r=n;else{var a=n<.5?n*(1+t):n+t-n*t,s=2*n-a;r=Nc(s,a,e+1/3),i=Nc(s,a,e),o=Nc(s,a,e-1/3)}return{r:r*255,g:i*255,b:o*255}}function Tf(e,t,n){e=mt(e,255),t=mt(t,255),n=mt(n,255);var r=Math.max(e,t,n),i=Math.min(e,t,n),o=0,a=r,s=r-i,l=r===0?0:s/r;if(r===i)o=0;else{switch(r){case e:o=(t-n)/s+(t<n?6:0);break;case t:o=(n-e)/s+2;break;case n:o=(e-t)/s+4;break}o/=6}return{h:o,s:l,v:a}}function Z$(e,t,n){e=mt(e,360)*6,t=mt(t,100),n=mt(n,100);var r=Math.floor(e),i=e-r,o=n*(1-t),a=n*(1-i*t),s=n*(1-(1-i)*t),l=r%6,u=[n,a,o,o,s,n][l],c=[s,n,n,a,o,o][l],d=[o,o,s,n,n,a][l];return{r:u*255,g:c*255,b:d*255}}function Pf(e,t,n,r){var i=[Qr(Math.round(e).toString(16)),Qr(Math.round(t).toString(16)),Qr(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function eL(e,t,n,r,i){var o=[Qr(Math.round(e).toString(16)),Qr(Math.round(t).toString(16)),Qr(Math.round(n).toString(16)),Qr(tL(r))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function tL(e){return Math.round(parseFloat(e)*255).toString(16)}function dv(e){return It(e)/255}function It(e){return parseInt(e,16)}function nL(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var $f={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function xi(e){var t={r:0,g:0,b:0},n=1,r=null,i=null,o=null,a=!1,s=!1;return typeof e=="string"&&(e=oL(e)),typeof e=="object"&&(Ln(e.r)&&Ln(e.g)&&Ln(e.b)?(t=K$(e.r,e.g,e.b),a=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Ln(e.h)&&Ln(e.s)&&Ln(e.v)?(r=xs(e.s),i=xs(e.v),t=Z$(e.h,r,i),a=!0,s="hsv"):Ln(e.h)&&Ln(e.s)&&Ln(e.l)&&(r=xs(e.s),o=xs(e.l),t=Y$(e.h,r,o),a=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=Cx(n),{ok:a,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var rL="[-\\+]?\\d+%?",iL="[-\\+]?\\d*\\.\\d+%?",xr="(?:".concat(iL,")|(?:").concat(rL,")"),Fc="[\\s|\\(]+(".concat(xr,")[,|\\s]+(").concat(xr,")[,|\\s]+(").concat(xr,")\\s*\\)?"),Ic="[\\s|\\(]+(".concat(xr,")[,|\\s]+(").concat(xr,")[,|\\s]+(").concat(xr,")[,|\\s]+(").concat(xr,")\\s*\\)?"),fn={CSS_UNIT:new RegExp(xr),rgb:new RegExp("rgb"+Fc),rgba:new RegExp("rgba"+Ic),hsl:new RegExp("hsl"+Fc),hsla:new RegExp("hsla"+Ic),hsv:new RegExp("hsv"+Fc),hsva:new RegExp("hsva"+Ic),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function oL(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if($f[e])e=$f[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=fn.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=fn.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=fn.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=fn.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=fn.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=fn.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=fn.hex8.exec(e),n?{r:It(n[1]),g:It(n[2]),b:It(n[3]),a:dv(n[4]),format:t?"name":"hex8"}:(n=fn.hex6.exec(e),n?{r:It(n[1]),g:It(n[2]),b:It(n[3]),format:t?"name":"hex"}:(n=fn.hex4.exec(e),n?{r:It(n[1]+n[1]),g:It(n[2]+n[2]),b:It(n[3]+n[3]),a:dv(n[4]+n[4]),format:t?"name":"hex8"}:(n=fn.hex3.exec(e),n?{r:It(n[1]+n[1]),g:It(n[2]+n[2]),b:It(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function Ln(e){return!!fn.CSS_UNIT.exec(String(e))}var jt=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var r;if(t instanceof e)return t;typeof t=="number"&&(t=nL(t)),this.originalInput=t;var i=xi(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,r,i,o=t.r/255,a=t.g/255,s=t.b/255;return o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),.2126*n+.7152*r+.0722*i},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=Cx(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=Tf(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=Tf(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=cv(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=cv(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Pf(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),eL(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(mt(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(mt(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Pf(this.r,this.g,this.b,!1),n=0,r=Object.entries($f);n<r.length;n++){var i=r[n],o=i[0],a=i[1];if(t===a)return o}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var r=!1,i=this.a<1&&this.a>=0,o=!n&&i&&(t.startsWith("hex")||t==="name");return o?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=ys(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=ys(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=ys(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=ys(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var r=this.toRgb(),i=new e(t).toRgb(),o=n/100,a={r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a};return new e(a)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var r=this.toHsl(),i=360/n,o=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,o.push(new e(r));return o},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),r=n.h,i=n.s,o=n.v,a=[],s=1/t;t--;)a.push(new e({h:r,s:i,v:o})),o=(o+s)%1;return a},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,i=[this],o=360/t,a=1;a<t;a++)i.push(new e({h:(r+a*o)%360,s:n.s,l:n.l}));return i},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),ws=2,fv=.16,aL=.05,sL=.05,lL=.15,kx=5,Ax=4,uL=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function pv(e){var t=e.r,n=e.g,r=e.b,i=Tf(t,n,r);return{h:i.h*360,s:i.s,v:i.v}}function Ss(e){var t=e.r,n=e.g,r=e.b;return"#".concat(Pf(t,n,r,!1))}function cL(e,t,n){var r=n/100,i={r:(t.r-e.r)*r+e.r,g:(t.g-e.g)*r+e.g,b:(t.b-e.b)*r+e.b};return i}function hv(e,t,n){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=n?Math.round(e.h)-ws*t:Math.round(e.h)+ws*t:r=n?Math.round(e.h)+ws*t:Math.round(e.h)-ws*t,r<0?r+=360:r>=360&&(r-=360),r}function mv(e,t,n){if(e.h===0&&e.s===0)return e.s;var r;return n?r=e.s-fv*t:t===Ax?r=e.s+fv:r=e.s+aL*t,r>1&&(r=1),n&&t===kx&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function gv(e,t,n){var r;return n?r=e.v+sL*t:r=e.v-lL*t,r>1&&(r=1),Number(r.toFixed(2))}function so(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=xi(e),i=kx;i>0;i-=1){var o=pv(r),a=Ss(xi({h:hv(o,i,!0),s:mv(o,i,!0),v:gv(o,i,!0)}));n.push(a)}n.push(Ss(r));for(var s=1;s<=Ax;s+=1){var l=pv(r),u=Ss(xi({h:hv(l,s),s:mv(l,s),v:gv(l,s)}));n.push(u)}return t.theme==="dark"?uL.map(function(c){var d=c.index,f=c.opacity,w=Ss(cL(xi(t.backgroundColor||"#141414"),xi(n[d]),f*100));return w}):n}var Dc={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},_c={},zc={};Object.keys(Dc).forEach(function(e){_c[e]=so(Dc[e]),_c[e].primary=_c[e][5],zc[e]=so(Dc[e],{theme:"dark",backgroundColor:"#141414"}),zc[e].primary=zc[e][5]});const dL=e=>{const{controlHeight:t}=e;return{controlHeightSM:t*.75,controlHeightXS:t*.5,controlHeightLG:t*1.25}},fL=dL;function pL(e){const{sizeUnit:t,sizeStep:n}=e;return{sizeXXL:t*(n+8),sizeXL:t*(n+4),sizeLG:t*(n+2),sizeMD:t*(n+1),sizeMS:t*n,size:t*n,sizeSM:t*(n-1),sizeXS:t*(n-2),sizeXXS:t*(n-3)}}const Rx={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},hL=Object.assign(Object.assign({},Rx),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0}),ku=hL;function mL(e,t){let{generateColorPalettes:n,generateNeutralColorPalettes:r}=t;const{colorSuccess:i,colorWarning:o,colorError:a,colorInfo:s,colorPrimary:l,colorBgBase:u,colorTextBase:c}=e,d=n(l),f=n(i),w=n(o),v=n(a),g=n(s),m=r(u,c);return Object.assign(Object.assign({},m),{colorPrimaryBg:d[1],colorPrimaryBgHover:d[2],colorPrimaryBorder:d[3],colorPrimaryBorderHover:d[4],colorPrimaryHover:d[5],colorPrimary:d[6],colorPrimaryActive:d[7],colorPrimaryTextHover:d[8],colorPrimaryText:d[9],colorPrimaryTextActive:d[10],colorSuccessBg:f[1],colorSuccessBgHover:f[2],colorSuccessBorder:f[3],colorSuccessBorderHover:f[4],colorSuccessHover:f[4],colorSuccess:f[6],colorSuccessActive:f[7],colorSuccessTextHover:f[8],colorSuccessText:f[9],colorSuccessTextActive:f[10],colorErrorBg:v[1],colorErrorBgHover:v[2],colorErrorBorder:v[3],colorErrorBorderHover:v[4],colorErrorHover:v[5],colorError:v[6],colorErrorActive:v[7],colorErrorTextHover:v[8],colorErrorText:v[9],colorErrorTextActive:v[10],colorWarningBg:w[1],colorWarningBgHover:w[2],colorWarningBorder:w[3],colorWarningBorderHover:w[4],colorWarningHover:w[4],colorWarning:w[6],colorWarningActive:w[7],colorWarningTextHover:w[8],colorWarningText:w[9],colorWarningTextActive:w[10],colorInfoBg:g[1],colorInfoBgHover:g[2],colorInfoBorder:g[3],colorInfoBorderHover:g[4],colorInfoHover:g[4],colorInfo:g[6],colorInfoActive:g[7],colorInfoTextHover:g[8],colorInfoText:g[9],colorInfoTextActive:g[10],colorBgMask:new jt("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}const gL=e=>{let t=e,n=e,r=e,i=e;return e<6&&e>=5?t=e+1:e<16&&e>=6?t=e+2:e>=16&&(t=16),e<7&&e>=5?n=4:e<8&&e>=7?n=5:e<14&&e>=8?n=6:e<16&&e>=14?n=7:e>=16&&(n=8),e<6&&e>=2?r=1:e>=6&&(r=2),e>4&&e<8?i=4:e>=8&&(i=6),{borderRadius:e>16?16:e,borderRadiusXS:r,borderRadiusSM:n,borderRadiusLG:t,borderRadiusOuter:i}},vL=gL;function yL(e){const{motionUnit:t,motionBase:n,borderRadius:r,lineWidth:i}=e;return Object.assign({motionDurationFast:`${(n+t).toFixed(1)}s`,motionDurationMid:`${(n+t*2).toFixed(1)}s`,motionDurationSlow:`${(n+t*3).toFixed(1)}s`,lineWidthBold:i+1},vL(r))}const Mn=(e,t)=>new jt(e).setAlpha(t).toRgbString(),Mo=(e,t)=>new jt(e).darken(t).toHexString(),xL=e=>{const t=so(e);return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[4],6:t[5],7:t[6],8:t[4],9:t[5],10:t[6]}},wL=(e,t)=>{const n=e||"#fff",r=t||"#000";return{colorBgBase:n,colorTextBase:r,colorText:Mn(r,.88),colorTextSecondary:Mn(r,.65),colorTextTertiary:Mn(r,.45),colorTextQuaternary:Mn(r,.25),colorFill:Mn(r,.15),colorFillSecondary:Mn(r,.06),colorFillTertiary:Mn(r,.04),colorFillQuaternary:Mn(r,.02),colorBgLayout:Mo(n,4),colorBgContainer:Mo(n,0),colorBgElevated:Mo(n,0),colorBgSpotlight:Mn(r,.85),colorBorder:Mo(n,15),colorBorderSecondary:Mo(n,6)}};function SL(e){const t=new Array(10).fill(null).map((n,r)=>{const i=r-1,o=e*Math.pow(2.71828,i/5),a=r>1?Math.floor(o):Math.ceil(o);return Math.floor(a/2)*2});return t[1]=e,t.map(n=>{const r=n+8;return{size:n,lineHeight:r/n}})}const bL=e=>{const t=SL(e),n=t.map(i=>i.size),r=t.map(i=>i.lineHeight);return{fontSizeSM:n[0],fontSize:n[1],fontSizeLG:n[2],fontSizeXL:n[3],fontSizeHeading1:n[6],fontSizeHeading2:n[5],fontSizeHeading3:n[4],fontSizeHeading4:n[3],fontSizeHeading5:n[2],lineHeight:r[1],lineHeightLG:r[2],lineHeightSM:r[0],lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}},EL=bL;function CL(e){const t=Object.keys(Rx).map(n=>{const r=so(e[n]);return new Array(10).fill(1).reduce((i,o,a)=>(i[`${n}-${a+1}`]=r[a],i[`${n}${a+1}`]=r[a],i),{})}).reduce((n,r)=>(n=Object.assign(Object.assign({},n),r),n),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),t),mL(e,{generateColorPalettes:xL,generateNeutralColorPalettes:wL})),EL(e.fontSize)),pL(e)),fL(e)),yL(e))}function jc(e){return e>=0&&e<=255}function bs(e,t){const{r:n,g:r,b:i,a:o}=new jt(e).toRgb();if(o<1)return e;const{r:a,g:s,b:l}=new jt(t).toRgb();for(let u=.01;u<=1;u+=.01){const c=Math.round((n-a*(1-u))/u),d=Math.round((r-s*(1-u))/u),f=Math.round((i-l*(1-u))/u);if(jc(c)&&jc(d)&&jc(f))return new jt({r:c,g:d,b:f,a:Math.round(u*100)/100}).toRgbString()}return new jt({r:n,g:r,b:i,a:1}).toRgbString()}var kL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function AL(e){const{override:t}=e,n=kL(e,["override"]),r=Object.assign({},t);Object.keys(ku).forEach(f=>{delete r[f]});const i=Object.assign(Object.assign({},n),r),o=480,a=576,s=768,l=992,u=1200,c=1600;if(i.motion===!1){const f="0s";i.motionDurationFast=f,i.motionDurationMid=f,i.motionDurationSlow=f}return Object.assign(Object.assign(Object.assign({},i),{colorLink:i.colorInfoText,colorLinkHover:i.colorInfoHover,colorLinkActive:i.colorInfoActive,colorFillContent:i.colorFillSecondary,colorFillContentHover:i.colorFill,colorFillAlter:i.colorFillQuaternary,colorBgContainerDisabled:i.colorFillTertiary,colorBorderBg:i.colorBgContainer,colorSplit:bs(i.colorBorderSecondary,i.colorBgContainer),colorTextPlaceholder:i.colorTextQuaternary,colorTextDisabled:i.colorTextQuaternary,colorTextHeading:i.colorText,colorTextLabel:i.colorTextSecondary,colorTextDescription:i.colorTextTertiary,colorTextLightSolid:i.colorWhite,colorHighlight:i.colorError,colorBgTextHover:i.colorFillSecondary,colorBgTextActive:i.colorFill,colorIcon:i.colorTextTertiary,colorIconHover:i.colorText,colorErrorOutline:bs(i.colorErrorBg,i.colorBgContainer),colorWarningOutline:bs(i.colorWarningBg,i.colorBgContainer),fontSizeIcon:i.fontSizeSM,lineWidthFocus:i.lineWidth*4,lineWidth:i.lineWidth,controlOutlineWidth:i.lineWidth*2,controlInteractiveSize:i.controlHeight/2,controlItemBgHover:i.colorFillTertiary,controlItemBgActive:i.colorPrimaryBg,controlItemBgActiveHover:i.colorPrimaryBgHover,controlItemBgActiveDisabled:i.colorFill,controlTmpOutline:i.colorFillQuaternary,controlOutline:bs(i.colorPrimaryBg,i.colorBgContainer),lineType:i.lineType,borderRadius:i.borderRadius,borderRadiusXS:i.borderRadiusXS,borderRadiusSM:i.borderRadiusSM,borderRadiusLG:i.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:i.sizeXXS,paddingXS:i.sizeXS,paddingSM:i.sizeSM,padding:i.size,paddingMD:i.sizeMD,paddingLG:i.sizeLG,paddingXL:i.sizeXL,paddingContentHorizontalLG:i.sizeLG,paddingContentVerticalLG:i.sizeMS,paddingContentHorizontal:i.sizeMS,paddingContentVertical:i.sizeSM,paddingContentHorizontalSM:i.size,paddingContentVerticalSM:i.sizeXS,marginXXS:i.sizeXXS,marginXS:i.sizeXS,marginSM:i.sizeSM,margin:i.size,marginMD:i.sizeMD,marginLG:i.sizeLG,marginXL:i.sizeXL,marginXXL:i.sizeXXL,boxShadow:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:o,screenXSMin:o,screenXSMax:a-1,screenSM:a,screenSMMin:a,screenSMMax:s-1,screenMD:s,screenMDMin:s,screenMDMax:l-1,screenLG:l,screenLGMin:l,screenLGMax:u-1,screenXL:u,screenXLMin:u,screenXLMax:c-1,screenXXL:c,screenXXLMin:c,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new jt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new jt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new jt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),r)}const Ox="anticon",RL=(e,t)=>t||(e?`ant-${e}`:"ant"),Ba=E.createContext({getPrefixCls:RL,iconPrefixCls:Ox}),OL=e=>({boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:e.fontFamily}),TL=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),PL=e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},[`&:active,
  &:hover`]:{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}),$L=(e,t)=>{const{fontFamily:n,fontSize:r}=e,i=`[class^="${t}"], [class*=" ${t}"]`;return{[i]:{fontFamily:n,fontSize:r,boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"},[i]:{boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}}}}};function LL(e,t,n,r){return i=>{const[o,a,s]=sh(),{getPrefixCls:l,iconPrefixCls:u,csp:c}=E.useContext(Ba),d=l(),f={theme:o,token:a,hashId:s,nonce:()=>c==null?void 0:c.nonce};return gf(Object.assign(Object.assign({},f),{path:["Shared",d]}),()=>[{"&":PL(a)}]),[gf(Object.assign(Object.assign({},f),{path:[e,i,u]}),()=>{const{token:w,flush:v}=NL(a),g=typeof n=="function"?n(w):n,m=Object.assign(Object.assign({},g),a[e]),p=`.${i}`,h=Px(w,{componentCls:p,prefixCls:i,iconCls:`.${u}`,antCls:`.${d}`},m),x=t(h,{hashId:s,prefixCls:i,rootPrefixCls:d,iconPrefixCls:u,overrideComponentToken:a[e]});return v(e,m),[(r==null?void 0:r.resetStyle)===!1?null:$L(a,i),x]}),s]}}const Tx=typeof CSSINJS_STATISTIC<"u";let Lf=!0;function Px(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!Tx)return Object.assign.apply(Object,[{}].concat(t));Lf=!1;const r={};return t.forEach(i=>{Object.keys(i).forEach(a=>{Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get:()=>i[a]})})}),Lf=!0,r}function ML(){}function NL(e){let t,n=e,r=ML;return Tx&&(t=new Set,n=new Proxy(e,{get(i,o){return Lf&&t.add(o),i[o]}}),r=(i,o)=>{Array.from(t)}),{token:n,keys:t,flush:r}}const FL=fx(CL),$x={token:ku,hashed:!0},Lx=X.createContext($x);function sh(){const{token:e,hashed:t,theme:n,components:r}=X.useContext(Lx),i=`${J$}-${t||""}`,o=n||FL,[a,s]=mP(o,[ku,e],{salt:i,override:Object.assign({override:e},r),formatToken:AL});return[o,a,t?s:""]}const IL=`-ant-${Date.now()}-${Math.random()}`;function DL(e,t){const n={},r=(a,s)=>{let l=a.clone();return l=(s==null?void 0:s(l))||l,l.toRgbString()},i=(a,s)=>{const l=new jt(a),u=so(l.toRgbString());n[`${s}-color`]=r(l),n[`${s}-color-disabled`]=u[1],n[`${s}-color-hover`]=u[4],n[`${s}-color-active`]=u[6],n[`${s}-color-outline`]=l.clone().setAlpha(.2).toRgbString(),n[`${s}-color-deprecated-bg`]=u[0],n[`${s}-color-deprecated-border`]=u[2]};if(t.primaryColor){i(t.primaryColor,"primary");const a=new jt(t.primaryColor),s=so(a.toRgbString());s.forEach((u,c)=>{n[`primary-${c+1}`]=u}),n["primary-color-deprecated-l-35"]=r(a,u=>u.lighten(35)),n["primary-color-deprecated-l-20"]=r(a,u=>u.lighten(20)),n["primary-color-deprecated-t-20"]=r(a,u=>u.tint(20)),n["primary-color-deprecated-t-50"]=r(a,u=>u.tint(50)),n["primary-color-deprecated-f-12"]=r(a,u=>u.setAlpha(u.getAlpha()*.12));const l=new jt(s[0]);n["primary-color-active-deprecated-f-30"]=r(l,u=>u.setAlpha(u.getAlpha()*.3)),n["primary-color-active-deprecated-d-02"]=r(l,u=>u.darken(2))}return t.successColor&&i(t.successColor,"success"),t.warningColor&&i(t.warningColor,"warning"),t.errorColor&&i(t.errorColor,"error"),t.infoColor&&i(t.infoColor,"info"),`
  :root {
    ${Object.keys(n).map(a=>`--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()}function _L(e,t){const n=DL(e,t);di()&&Ll(n,`${IL}-dynamic-theme`)}const Mf=E.createContext(!1),zL=e=>{let{children:t,disabled:n}=e;const r=E.useContext(Mf);return E.createElement(Mf.Provider,{value:n??r},t)},jL=Mf,UL=e=>{const t=X.useContext(Au);return X.useMemo(()=>e?typeof e=="string"?e??t:e instanceof Function?e(t):t:t,[e,t])},BL=UL,Mx=E.createContext(void 0),HL=e=>{let{children:t,size:n}=e;const r=BL(n);return E.createElement(Mx.Provider,{value:r},t)},Au=Mx;function VL(){const e=E.useContext(jL),t=E.useContext(Au);return{componentDisabled:e,componentSize:t}}function WL(e,t){const n=e||{},r=n.inherit===!1||!t?$x:t;return H1(()=>{if(!e)return t;const o=Object.assign({},r.components);return Object.keys(e.components||{}).forEach(a=>{o[a]=Object.assign(Object.assign({},o[a]),e.components[a])}),Object.assign(Object.assign(Object.assign({},r),n),{token:Object.assign(Object.assign({},r.token),n.token),components:o})},[n,r],(o,a)=>o.some((s,l)=>{const u=a[l];return!YT(s,u,!0)}))}var GL=["children"],Nx=E.createContext({});function qL(e){var t=e.children,n=li(e,GL);return E.createElement(Nx.Provider,{value:n},t)}var JL=function(e){Zn(n,e);var t=er(n);function n(){return Lt(this,n),t.apply(this,arguments)}return Mt(n,[{key:"render",value:function(){return this.props.children}}]),n}(E.Component);function Qs(e){var t=E.useRef(!1),n=E.useState(e),r=We(n,2),i=r[0],o=r[1];E.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function a(s,l){l&&t.current||o(s)}return[i,a]}var Ur="none",Es="appear",Cs="enter",ks="leave",vv="none",mn="prepare",Ii="start",Di="active",lh="end",Fx="prepared";function yv(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit".concat(e)]="webkit".concat(t),n["Moz".concat(e)]="moz".concat(t),n["ms".concat(e)]="MS".concat(t),n["O".concat(e)]="o".concat(t.toLowerCase()),n}function QL(e,t){var n={animationend:yv("Animation","AnimationEnd"),transitionend:yv("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}var XL=QL(di(),typeof window<"u"?window:{}),Ix={};if(di()){var KL=document.createElement("div");Ix=KL.style}var As={};function Dx(e){if(As[e])return As[e];var t=XL[e];if(t)for(var n=Object.keys(t),r=n.length,i=0;i<r;i+=1){var o=n[i];if(Object.prototype.hasOwnProperty.call(t,o)&&o in Ix)return As[e]=t[o],As[e]}return""}var _x=Dx("animationend"),zx=Dx("transitionend"),jx=!!(_x&&zx),xv=_x||"animationend",wv=zx||"transitionend";function Sv(e,t){if(!e)return null;if(ze(e)==="object"){var n=t.replace(/-\w/g,function(r){return r[1].toUpperCase()});return e[n]}return"".concat(e,"-").concat(t)}const YL=function(e){var t=E.useRef(),n=E.useRef(e);n.current=e;var r=E.useCallback(function(a){n.current(a)},[]);function i(a){a&&(a.removeEventListener(wv,r),a.removeEventListener(xv,r))}function o(a){t.current&&t.current!==a&&i(t.current),a&&a!==t.current&&(a.addEventListener(wv,r),a.addEventListener(xv,r),t.current=a)}return E.useEffect(function(){return function(){i(t.current)}},[]),[o,i]};var Ux=di()?E.useLayoutEffect:E.useEffect,Bx=function(t){return+setTimeout(t,16)},Hx=function(t){return clearTimeout(t)};typeof window<"u"&&"requestAnimationFrame"in window&&(Bx=function(t){return window.requestAnimationFrame(t)},Hx=function(t){return window.cancelAnimationFrame(t)});var bv=0,uh=new Map;function Vx(e){uh.delete(e)}var Nf=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;bv+=1;var r=bv;function i(o){if(o===0)Vx(r),t();else{var a=Bx(function(){i(o-1)});uh.set(r,a)}}return i(n),r};Nf.cancel=function(e){var t=uh.get(e);return Vx(t),Hx(t)};const ZL=function(){var e=E.useRef(null);function t(){Nf.cancel(e.current)}function n(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;t();var o=Nf(function(){i<=1?r({isCanceled:function(){return o!==e.current}}):n(r,i-1)});e.current=o}return E.useEffect(function(){return function(){t()}},[]),[n,t]};var eM=[mn,Ii,Di,lh],tM=[mn,Fx],Wx=!1,nM=!0;function Gx(e){return e===Di||e===lh}const rM=function(e,t,n){var r=Qs(vv),i=We(r,2),o=i[0],a=i[1],s=ZL(),l=We(s,2),u=l[0],c=l[1];function d(){a(mn,!0)}var f=t?tM:eM;return Ux(function(){if(o!==vv&&o!==lh){var w=f.indexOf(o),v=f[w+1],g=n(o);g===Wx?a(v,!0):v&&u(function(m){function p(){m.isCanceled()||a(v,!0)}g===!0?p():Promise.resolve(g).then(p)})}},[e,o]),E.useEffect(function(){return function(){c()}},[]),[d,o]};function iM(e,t,n,r){var i=r.motionEnter,o=i===void 0?!0:i,a=r.motionAppear,s=a===void 0?!0:a,l=r.motionLeave,u=l===void 0?!0:l,c=r.motionDeadline,d=r.motionLeaveImmediately,f=r.onAppearPrepare,w=r.onEnterPrepare,v=r.onLeavePrepare,g=r.onAppearStart,m=r.onEnterStart,p=r.onLeaveStart,h=r.onAppearActive,x=r.onEnterActive,b=r.onLeaveActive,C=r.onAppearEnd,k=r.onEnterEnd,R=r.onLeaveEnd,P=r.onVisibleChanged,H=Qs(),D=We(H,2),Q=D[0],O=D[1],T=Qs(Ur),L=We(T,2),N=L[0],F=L[1],V=Qs(null),I=We(V,2),K=I[0],G=I[1],oe=E.useRef(!1),B=E.useRef(null);function q(){return n()}var Y=E.useRef(!1);function ie(){F(Ur,!0),G(null,!0)}function M(Be){var xe=q();if(!(Be&&!Be.deadline&&Be.target!==xe)){var $e=Y.current,Qe;N===Es&&$e?Qe=C==null?void 0:C(xe,Be):N===Cs&&$e?Qe=k==null?void 0:k(xe,Be):N===ks&&$e&&(Qe=R==null?void 0:R(xe,Be)),N!==Ur&&$e&&Qe!==!1&&ie()}}var me=YL(M),Z=We(me,1),Le=Z[0],be=function(xe){var $e,Qe,Ze;switch(xe){case Es:return $e={},ee($e,mn,f),ee($e,Ii,g),ee($e,Di,h),$e;case Cs:return Qe={},ee(Qe,mn,w),ee(Qe,Ii,m),ee(Qe,Di,x),Qe;case ks:return Ze={},ee(Ze,mn,v),ee(Ze,Ii,p),ee(Ze,Di,b),Ze;default:return{}}},he=E.useMemo(function(){return be(N)},[N]),ue=rM(N,!e,function(Be){if(Be===mn){var xe=he[mn];return xe?xe(q()):Wx}if(fe in he){var $e;G((($e=he[fe])===null||$e===void 0?void 0:$e.call(he,q(),null))||null)}return fe===Di&&(Le(q()),c>0&&(clearTimeout(B.current),B.current=setTimeout(function(){M({deadline:!0})},c))),fe===Fx&&ie(),nM}),De=We(ue,2),Ye=De[0],fe=De[1],je=Gx(fe);Y.current=je,Ux(function(){O(t);var Be=oe.current;oe.current=!0;var xe;!Be&&t&&s&&(xe=Es),Be&&t&&o&&(xe=Cs),(Be&&!t&&u||!Be&&d&&!t&&u)&&(xe=ks);var $e=be(xe);xe&&(e||$e[mn])?(F(xe),Ye()):F(Ur)},[t]),E.useEffect(function(){(N===Es&&!s||N===Cs&&!o||N===ks&&!u)&&F(Ur)},[s,o,u]),E.useEffect(function(){return function(){oe.current=!1,clearTimeout(B.current)}},[]);var ye=E.useRef(!1);E.useEffect(function(){Q&&(ye.current=!0),Q!==void 0&&N===Ur&&((ye.current||Q)&&(P==null||P(Q)),ye.current=!0)},[Q,N]);var Ue=K;return he[mn]&&fe===Ii&&(Ue=$({transition:"none"},Ue)),[N,fe,Ue,Q??t]}function oM(e){var t=e;ze(e)==="object"&&(t=e.transitionSupport);function n(i,o){return!!(i.motionName&&t&&o!==!1)}var r=E.forwardRef(function(i,o){var a=i.visible,s=a===void 0?!0:a,l=i.removeOnLeave,u=l===void 0?!0:l,c=i.forceRender,d=i.children,f=i.motionName,w=i.leavedClassName,v=i.eventProps,g=E.useContext(Nx),m=g.motion,p=n(i,m),h=E.useRef(),x=E.useRef();function b(){try{return h.current instanceof HTMLElement?h.current:PT(x.current)}catch{return null}}var C=iM(p,s,b,i),k=We(C,4),R=k[0],P=k[1],H=k[2],D=k[3],Q=E.useRef(D);D&&(Q.current=!0);var O=E.useCallback(function(G){h.current=G,RT(o,G)},[o]),T,L=$($({},v),{},{visible:s});if(!d)T=null;else if(R===Ur)D?T=d($({},L),O):!u&&Q.current&&w?T=d($($({},L),{},{className:w}),O):c||!u&&!w?T=d($($({},L),{},{style:{display:"none"}}),O):T=null;else{var N,F;P===mn?F="prepare":Gx(P)?F="active":P===Ii&&(F="start");var V=Sv(f,"".concat(R,"-").concat(F));T=d($($({},L),{},{className:Pn(Sv(f,R),(N={},ee(N,V,V&&F),ee(N,f,typeof f=="string"),N)),style:H}),O)}if(E.isValidElement(T)&&OT(T)){var I=T,K=I.ref;K||(T=E.cloneElement(T,{ref:O}))}return E.createElement(JL,{ref:x},T)});return r.displayName="CSSMotion",r}const aM=oM(jx);var Ff="add",If="keep",Df="remove",Uc="removed";function sM(e){var t;return e&&ze(e)==="object"&&"key"in e?t=e:t={key:e},$($({},t),{},{key:String(t.key)})}function _f(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(sM)}function lM(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=[],r=0,i=t.length,o=_f(e),a=_f(t);o.forEach(function(u){for(var c=!1,d=r;d<i;d+=1){var f=a[d];if(f.key===u.key){r<d&&(n=n.concat(a.slice(r,d).map(function(w){return $($({},w),{},{status:Ff})})),r=d),n.push($($({},f),{},{status:If})),r+=1,c=!0;break}}c||n.push($($({},u),{},{status:Df}))}),r<i&&(n=n.concat(a.slice(r).map(function(u){return $($({},u),{},{status:Ff})})));var s={};n.forEach(function(u){var c=u.key;s[c]=(s[c]||0)+1});var l=Object.keys(s).filter(function(u){return s[u]>1});return l.forEach(function(u){n=n.filter(function(c){var d=c.key,f=c.status;return d!==u||f!==Df}),n.forEach(function(c){c.key===u&&(c.status=If)})}),n}var uM=["component","children","onVisibleChanged","onAllRemoved"],cM=["status"],dM=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function fM(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:aM,n=function(r){Zn(o,r);var i=er(o);function o(){var a;Lt(this,o);for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];return a=i.call.apply(i,[this].concat(l)),ee(le(a),"state",{keyEntities:[]}),ee(le(a),"removeKey",function(c){var d=a.state.keyEntities,f=d.map(function(w){return w.key!==c?w:$($({},w),{},{status:Uc})});return a.setState({keyEntities:f}),f.filter(function(w){var v=w.status;return v!==Uc}).length}),a}return Mt(o,[{key:"render",value:function(){var s=this,l=this.state.keyEntities,u=this.props,c=u.component,d=u.children,f=u.onVisibleChanged,w=u.onAllRemoved,v=li(u,uM),g=c||E.Fragment,m={};return dM.forEach(function(p){m[p]=v[p],delete v[p]}),delete v.keys,E.createElement(g,v,l.map(function(p){var h=p.status,x=li(p,cM),b=h===Ff||h===If;return E.createElement(t,nn({},m,{key:x.key,visible:b,eventProps:x,onVisibleChanged:function(k){if(f==null||f(k,{key:x.key}),!k){var R=s.removeKey(x.key);R===0&&w&&w()}}}),d)}))}}],[{key:"getDerivedStateFromProps",value:function(s,l){var u=s.keys,c=l.keyEntities,d=_f(u),f=lM(c,d);return{keyEntities:f.filter(function(w){var v=c.find(function(g){var m=g.key;return w.key===m});return!(v&&v.status===Uc&&w.status===Df)})}}}]),o}(E.Component);return ee(n,"defaultProps",{component:"div"}),n}fM(jx);function pM(e){const{children:t}=e,[,n]=sh(),{motion:r}=n,i=E.useRef(!1);return i.current=i.current||r===!1,i.current?E.createElement(qL,{motion:r},t):t}const hM=(e,t)=>{const[n,r]=sh();return gf({theme:n,token:r,hashId:"",path:["ant-design-icons",e],nonce:()=>t==null?void 0:t.nonce},()=>[{[`.${e}`]:Object.assign(Object.assign({},TL()),{[`.${e} .${e}-icon`]:{display:"block"}})}])},mM=hM;var gM=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const vM=["getTargetContainer","getPopupContainer","renderEmpty","pageHeader","input","pagination","form","select"],yM="ant";let qx;function xM(){return qx||yM}const wM=e=>{let{prefixCls:t,iconPrefixCls:n,theme:r}=e;t!==void 0&&(qx=t),r&&_L(xM(),r)},SM=e=>{const{children:t,csp:n,autoInsertSpaceInButton:r,form:i,locale:o,componentSize:a,direction:s,space:l,virtual:u,dropdownMatchSelectWidth:c,popupMatchSelectWidth:d,popupOverflow:f,legacyLocale:w,parentContext:v,iconPrefixCls:g,theme:m,componentDisabled:p}=e,h=E.useCallback((N,F)=>{const{prefixCls:V}=e;if(F)return F;const I=V||v.getPrefixCls("");return N?`${I}-${N}`:I},[v.getPrefixCls,e.prefixCls]),x=g||v.iconPrefixCls||Ox,b=x!==v.iconPrefixCls,C=n||v.csp,k=mM(x,C),R=WL(m,v.theme),P={csp:C,autoInsertSpaceInButton:r,locale:o||w,direction:s,space:l,virtual:u,popupMatchSelectWidth:d??c,popupOverflow:f,getPrefixCls:h,iconPrefixCls:x,theme:R},H=Object.assign({},v);Object.keys(P).forEach(N=>{P[N]!==void 0&&(H[N]=P[N])}),vM.forEach(N=>{const F=e[N];F&&(H[N]=F)});const D=H1(()=>H,H,(N,F)=>{const V=Object.keys(N),I=Object.keys(F);return V.length!==I.length||V.some(K=>N[K]!==F[K])}),Q=E.useMemo(()=>({prefixCls:x,csp:C}),[x,C]);let O=b?k(t):t;const T=E.useMemo(()=>{var N,F,V;return ra({},((N=ah.Form)===null||N===void 0?void 0:N.defaultValidateMessages)||{},((V=(F=D.locale)===null||F===void 0?void 0:F.Form)===null||V===void 0?void 0:V.defaultValidateMessages)||{},(i==null?void 0:i.validateMessages)||{})},[D,i==null?void 0:i.validateMessages]);Object.keys(T).length>0&&(O=E.createElement(Sx,{validateMessages:T},t)),o&&(O=E.createElement(q$,{locale:o,_ANT_MARK__:W$},O)),(x||C)&&(O=E.createElement(UP.Provider,{value:Q},O)),a&&(O=E.createElement(HL,{size:a},O)),O=E.createElement(pM,null,O);const L=E.useMemo(()=>{const N=R||{},{algorithm:F,token:V}=N,I=gM(N,["algorithm","token"]),K=F&&(!Array.isArray(F)||F.length>0)?fx(F):void 0;return Object.assign(Object.assign({},I),{theme:K,token:Object.assign(Object.assign({},ku),V)})},[R]);return m&&(O=E.createElement(Lx.Provider,{value:L},O)),p!==void 0&&(O=E.createElement(zL,{disabled:p},O)),E.createElement(Ba.Provider,{value:D},O)},Ha=e=>{const t=E.useContext(Ba),n=E.useContext(Ex);return E.createElement(SM,Object.assign({parentContext:t,legacyLocale:n},e))};Ha.ConfigContext=Ba;Ha.SizeContext=Au;Ha.config=wM;Ha.useConfig=VL;Object.defineProperty(Ha,"SizeContext",{get:()=>Au});var bM={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};function EM(e,t,n){var r=n||{},i=r.noTrailing,o=i===void 0?!1:i,a=r.noLeading,s=a===void 0?!1:a,l=r.debounceMode,u=l===void 0?void 0:l,c,d=!1,f=0;function w(){c&&clearTimeout(c)}function v(m){var p=m||{},h=p.upcomingOnly,x=h===void 0?!1:h;w(),d=!x}function g(){for(var m=arguments.length,p=new Array(m),h=0;h<m;h++)p[h]=arguments[h];var x=this,b=Date.now()-f;if(d)return;function C(){f=Date.now(),t.apply(x,p)}function k(){c=void 0}!s&&u&&!c&&C(),w(),u===void 0&&b>e?s?(f=Date.now(),o||(c=setTimeout(u?k:C,e))):C():o!==!0&&(c=setTimeout(u?k:C,u===void 0?e-b:e))}return g.cancel=v,g}function CM(e,t,n){var r=n||{},i=r.atBegin,o=i===void 0?!1:i;return EM(e,t,{debounceMode:o!==!1})}function zf(e,t,n){return Math.max(t,Math.min(e,n))}var Gi=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},Nl=function(t){for(var n=[],r=Jx(t),i=Qx(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n},Jx=function(t){return t.currentSlide-kM(t)},Qx=function(t){return t.currentSlide+AM(t)},kM=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},AM=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},jf=function(t){return t&&t.offsetWidth||0},ch=function(t){return t&&t.offsetHeight||0},Xx=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,a;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"},Ru=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n},Bc=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r},RM=function(t){var n=X.Children.count(t.children),r=t.listRef,i=Math.ceil(jf(r)),o=t.trackRef&&t.trackRef.node,a=Math.ceil(jf(o)),s;if(t.vertical)s=i;else{var l=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(l*=i/100),s=Math.ceil((i-l)/t.slidesToShow)}var u=r&&ch(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var f=t.lazyLoadedList||[],w=Nl($($({},t),{},{currentSlide:d,lazyLoadedList:f}));f=f.concat(w);var v={slideCount:n,slideWidth:s,listWidth:i,trackWidth:a,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v},OM=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,a=t.index,s=t.slideCount,l=t.lazyLoad,u=t.currentSlide,c=t.centerMode,d=t.slidesToScroll,f=t.slidesToShow,w=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var g=a,m,p,h,x={},b={},C=o?a:zf(a,0,s-1);if(i){if(!o&&(a<0||a>=s))return{};a<0?g=a+s:a>=s&&(g=a-s),l&&v.indexOf(g)<0&&(v=v.concat(g)),x={animating:!0,currentSlide:g,lazyLoadedList:v,targetSlide:g},b={animating:!1,targetSlide:g}}else m=g,g<0?(m=g+s,o?s%d!==0&&(m=s-s%d):m=0):!Ru(t)&&g>u?g=m=u:c&&g>=s?(g=o?s:s-1,m=o?0:s-1):g>=s&&(m=g-s,o?s%d!==0&&(m=0):m=s-f),!o&&g+f>=s&&(m=s-f),p=Ta($($({},t),{},{slideIndex:g})),h=Ta($($({},t),{},{slideIndex:m})),o||(p===h&&(g=m),p=h),l&&(v=v.concat(Nl($($({},t),{},{currentSlide:g})))),w?(x={animating:!0,currentSlide:m,trackStyle:Kx($($({},t),{},{left:p})),lazyLoadedList:v,targetSlide:C},b={animating:!1,currentSlide:m,trackStyle:Oa($($({},t),{},{left:h})),swipeLeft:null,targetSlide:C}):x={currentSlide:m,trackStyle:Oa($($({},t),{},{left:h})),lazyLoadedList:v,targetSlide:C};return{state:x,nextState:b}},TM=function(t,n){var r,i,o,a,s,l=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,d=t.currentSlide,f=t.targetSlide,w=t.lazyLoad,v=t.infinite;if(a=c%l!==0,r=a?0:(c-d)%l,n.message==="previous")o=r===0?l:u-r,s=d-o,w&&!v&&(i=d-o,s=i===-1?c-1:i),v||(s=f-l);else if(n.message==="next")o=r===0?l:r,s=d+o,w&&!v&&(s=(d+l)%c+r),v||(s=f+l);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,v){var g=IM($($({},t),{},{targetSlide:s}));s>n.currentSlide&&g==="left"?s=s-c:s<n.currentSlide&&g==="right"&&(s=s+c)}}else n.message==="index"&&(s=Number(n.index));return s},PM=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""},$M=function(t,n,r){return t.target.tagName==="IMG"&&Gi(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}},LM=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,a=n.swipeToSlide,s=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,f=n.onEdge,w=n.swiped,v=n.swiping,g=n.slideCount,m=n.slidesToScroll,p=n.infinite,h=n.touchObject,x=n.swipeEvent,b=n.listHeight,C=n.listWidth;if(!r){if(i)return Gi(t);o&&a&&s&&Gi(t);var k,R={},P=Ta(n);h.curX=t.touches?t.touches[0].pageX:t.clientX,h.curY=t.touches?t.touches[0].pageY:t.clientY,h.swipeLength=Math.round(Math.sqrt(Math.pow(h.curX-h.startX,2)));var H=Math.round(Math.sqrt(Math.pow(h.curY-h.startY,2)));if(!s&&!v&&H>10)return{scrolling:!0};s&&(h.swipeLength=H);var D=(l?-1:1)*(h.curX>h.startX?1:-1);s&&(D=h.curY>h.startY?1:-1);var Q=Math.ceil(g/m),O=Xx(n.touchObject,s),T=h.swipeLength;return p||(u===0&&(O==="right"||O==="down")||u+1>=Q&&(O==="left"||O==="up")||!Ru(n)&&(O==="left"||O==="up"))&&(T=h.swipeLength*c,d===!1&&f&&(f(O),R.edgeDragged=!0)),!w&&x&&(x(O),R.swiped=!0),o?k=P+T*(b/C)*D:l?k=P-T*D:k=P+T*D,s&&(k=P+T*D),R=$($({},R),{},{touchObject:h,swipeLeft:k,trackStyle:Oa($($({},n),{},{left:k}))}),Math.abs(h.curX-h.startX)<Math.abs(h.curY-h.startY)*.8||h.swipeLength>10&&(R.swiping=!0,Gi(t)),R}},MM=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,a=n.listWidth,s=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,f=n.onSwipe,w=n.targetSlide,v=n.currentSlide,g=n.infinite;if(!r)return i&&Gi(t),{};var m=l?u/s:a/s,p=Xx(o,l),h={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return h;if(o.swipeLength>m){Gi(t),f&&f(p);var x,b,C=g?v:w;switch(p){case"left":case"up":b=C+Cv(n),x=c?Ev(n,b):b,h.currentDirection=0;break;case"right":case"down":b=C-Cv(n),x=c?Ev(n,b):b,h.currentDirection=1;break;default:x=C}h.triggerSlideHandler=x}else{var k=Ta(n);h.trackStyle=Kx($($({},n),{},{left:k}))}return h},NM=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o},Ev=function(t,n){var r=NM(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n},Cv=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(t.vertical){if(l.offsetTop+ch(l)/2>t.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+jf(l)/2>t.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var a=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-a)||1;return s}else return t.slidesToScroll},dh=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)},Oa=function(t){dh(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=FM(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=$($({},o),{},{WebkitTransform:a,transform:s,msTransform:l})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o},Kx=function(t){dh(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Oa(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},Ta=function(t){if(t.unslick)return 0;dh(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,a=t.slideCount,s=t.slidesToShow,l=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,d=t.variableWidth,f=t.slideHeight,w=t.fade,v=t.vertical,g=0,m,p,h=0;if(w||t.slideCount===1)return 0;var x=0;if(i?(x=-jn(t),a%l!==0&&n+l>a&&(x=-(n>a?s-(n-a):a%l)),o&&(x+=parseInt(s/2))):(a%l!==0&&n+l>a&&(x=s-a%l),o&&(x=parseInt(s/2))),g=x*u,h=x*f,v?m=n*f*-1+h:m=n*u*-1+g,d===!0){var b,C=r&&r.node;if(b=n+jn(t),p=C&&C.childNodes[b],m=p?p.offsetLeft*-1:0,o===!0){b=i?n+jn(t):n,p=C&&C.children[b],m=0;for(var k=0;k<b;k++)m-=C&&C.children[k]&&C.children[k].offsetWidth;m-=parseInt(t.centerPadding),m+=p&&(c-p.offsetWidth)/2}}return m},jn=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},Xs=function(t){return t.unslick||!t.infinite?0:t.slideCount},FM=function(t){return t.slideCount===1?1:jn(t)+t.slideCount+Xs(t)},IM=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+DM(t)?"left":"right":t.targetSlide<t.currentSlide-_M(t)?"right":"left"},DM=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),i&&n%2===0&&(a+=1),a}return i?0:n-1},_M=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!i&&n%2===0&&(a+=1),a}return i?n-1:0},kv=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},Hc=function(t){var n,r,i,o,a;t.rtl?a=t.slideCount-1-t.index:a=t.index,i=a<0||a>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(a-t.currentSlide)%t.slideCount===0,a>t.currentSlide-o-1&&a<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=a&&a<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var l=a===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},zM=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical&&t.slideHeight?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Vc=function(t,n){return t.key+"-"+n},jM=function(t){var n,r=[],i=[],o=[],a=X.Children.count(t.children),s=Jx(t),l=Qx(t);return X.Children.forEach(t.children,function(u,c){var d,f={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?d=u:d=X.createElement("div",null);var w=zM($($({},t),{},{index:c})),v=d.props.className||"",g=Hc($($({},t),{},{index:c}));if(r.push(X.cloneElement(d,{key:"original"+Vc(d,c),"data-index":c,className:Pn(g,v),tabIndex:"-1","aria-hidden":!g["slick-active"],style:$($({outline:"none"},d.props.style||{}),w),onClick:function(h){d.props&&d.props.onClick&&d.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var m=a-c;m<=jn(t)&&a!==t.slidesToShow&&(n=-m,n>=s&&(d=u),g=Hc($($({},t),{},{index:n})),i.push(X.cloneElement(d,{key:"precloned"+Vc(d,n),"data-index":n,tabIndex:"-1",className:Pn(g,v),"aria-hidden":!g["slick-active"],style:$($({},d.props.style||{}),w),onClick:function(h){d.props&&d.props.onClick&&d.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(f)}}))),a!==t.slidesToShow&&(n=a+c,n<l&&(d=u),g=Hc($($({},t),{},{index:n})),o.push(X.cloneElement(d,{key:"postcloned"+Vc(d,n),"data-index":n,tabIndex:"-1",className:Pn(g,v),"aria-hidden":!g["slick-active"],style:$($({},d.props.style||{}),w),onClick:function(h){d.props&&d.props.onClick&&d.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},UM=function(e){Zn(n,e);var t=er(n);function n(){var r;Lt(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),ee(le(r),"node",null),ee(le(r),"handleRef",function(s){r.node=s}),r}return Mt(n,[{key:"render",value:function(){var i=jM(this.props),o=this.props,a=o.onMouseEnter,s=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:a,onMouseOver:s,onMouseLeave:l};return X.createElement("div",nn({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(X.PureComponent),BM=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},HM=function(e){Zn(n,e);var t=er(n);function n(){return Lt(this,n),t.apply(this,arguments)}return Mt(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,a=i.onMouseOver,s=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,f=i.currentSlide,w=BM({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:l}),v={onMouseEnter:o,onMouseOver:a,onMouseLeave:s},g=[],m=0;m<w;m++){var p=(m+1)*u-1,h=l?p:zf(p,0,d-1),x=h-(u-1),b=l?x:zf(x,0,d-1),C=Pn({"slick-active":l?f>=b&&f<=h:f===b}),k={message:"dots",index:m,slidesToScroll:u,currentSlide:f},R=this.clickHandler.bind(this,k);g=g.concat(X.createElement("li",{key:m,className:C},X.cloneElement(this.props.customPaging(m),{onClick:R})))}return X.cloneElement(this.props.appendDots(g),$({className:this.props.dotsClass},v))}}]),n}(X.PureComponent),VM=function(e){Zn(n,e);var t=er(n);function n(){return Lt(this,n),t.apply(this,arguments)}return Mt(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:Pn(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=X.cloneElement(this.props.prevArrow,$($({},a),s)):l=X.createElement("button",nn({key:"0",type:"button"},a)," ","Previous"),l}}]),n}(X.PureComponent),WM=function(e){Zn(n,e);var t=er(n);function n(){return Lt(this,n),t.apply(this,arguments)}return Mt(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});Ru(this.props)||(i["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:Pn(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=X.cloneElement(this.props.nextArrow,$($({},a),s)):l=X.createElement("button",nn({key:"1",type:"button"},a)," ","Next"),l}}]),n}(X.PureComponent),GM=["animating"],qM=function(e){Zn(n,e);var t=er(n);function n(r){var i;Lt(this,n),i=t.call(this,r),ee(le(i),"listRefHandler",function(a){return i.list=a}),ee(le(i),"trackRefHandler",function(a){return i.track=a}),ee(le(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var a=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=ch(a)+"px"}}),ee(le(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var a=Nl($($({},i.props),i.state));a.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}var s=$({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("playing")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new JT(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),ee(le(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(a){return clearTimeout(a)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),ee(le(i),"componentDidUpdate",function(a){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=Nl($($({},i.props),i.state));s.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var l=$($({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(a);u&&i.updateState(l,u,function(){i.state.currentSlide>=X.Children.count(i.props.children)&&i.changeSlide({message:"index",index:X.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),(a.autoplay!==i.props.autoplay||a.autoplaySpeed!==i.props.autoplaySpeed)&&(!a.autoplay&&i.props.autoplay?i.autoPlay("playing"):i.props.autoplay?i.autoPlay("update"):i.pause("paused"))})}),ee(le(i),"onWindowResized",function(a){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=CM(50,function(){return i.resizeWindow(a)}),i.debouncedResize()}),ee(le(i),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var l=$($({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,a,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),ee(le(i),"updateState",function(a,s,l){var u=RM(a);a=$($($({},a),u),{},{slideIndex:u.currentSlide});var c=Ta(a);a=$($({},a),{},{left:c});var d=Oa(a);(s||X.Children.count(i.props.children)!==X.Children.count(a.children))&&(u.trackStyle=d),i.setState(u,l)}),ee(le(i),"ssrInit",function(){if(i.props.variableWidth){var a=0,s=0,l=[],u=jn($($($({},i.props),i.state),{},{slideCount:i.props.children.length})),c=Xs($($($({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(R){l.push(R.props.style.width),a+=R.props.style.width});for(var d=0;d<u;d++)s+=l[l.length-1-d],a+=l[l.length-1-d];for(var f=0;f<c;f++)a+=l[f];for(var w=0;w<i.state.currentSlide;w++)s+=l[w];var v={width:a+"px",left:-s+"px"};if(i.props.centerMode){var g="".concat(l[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(g,") / 2 ) ")}return{trackStyle:v}}var m=X.Children.count(i.props.children),p=$($($({},i.props),i.state),{},{slideCount:m}),h=jn(p)+Xs(p)+m,x=100/i.props.slidesToShow*h,b=100/h,C=-b*(jn(p)+i.state.currentSlide)*x/100;i.props.centerMode&&(C+=(100-b*x/100)/2);var k={width:x+"%",left:C+"%"};return{slideWidth:b+"%",trackStyle:k}}),ee(le(i),"checkImagesLoad",function(){var a=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=a.length,l=0;Array.prototype.forEach.call(a,function(u){var c=function(){return++l&&l>=s&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(f){d(f),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),ee(le(i),"progressiveLazyLoad",function(){for(var a=[],s=$($({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+Xs(s);l++)if(i.state.lazyLoadedList.indexOf(l)<0){a.push(l);break}for(var u=i.state.currentSlide-1;u>=-jn(s);u--)if(i.state.lazyLoadedList.indexOf(u)<0){a.push(u);break}a.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),ee(le(i),"slideHandler",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,c=l.beforeChange,d=l.onLazyLoad,f=l.speed,w=l.afterChange,v=i.state.currentSlide,g=OM($($($({index:a},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),m=g.state,p=g.nextState;if(m){c&&c(v,m.currentSlide);var h=m.lazyLoadedList.filter(function(x){return i.state.lazyLoadedList.indexOf(x)<0});d&&h.length>0&&d(h),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),w&&w(v),delete i.animationEndCallback),i.setState(m,function(){u&&i.asNavForIndex!==a&&(i.asNavForIndex=a,u.innerSlider.slideHandler(a)),p&&(i.animationEndCallback=setTimeout(function(){var x=p.animating,b=li(p,GM);i.setState(b,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:x})},10)),w&&w(m.currentSlide),delete i.animationEndCallback})},f))})}}),ee(le(i),"changeSlide",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=$($({},i.props),i.state),u=TM(l,a);if(!(u!==0&&!u)&&(s===!0?i.slideHandler(u,s):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),ee(le(i),"clickHandler",function(a){i.clickable===!1&&(a.stopPropagation(),a.preventDefault()),i.clickable=!0}),ee(le(i),"keyHandler",function(a){var s=PM(a,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),ee(le(i),"selectHandler",function(a){i.changeSlide(a)}),ee(le(i),"disableBodyScroll",function(){var a=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=a}),ee(le(i),"enableBodyScroll",function(){window.ontouchmove=null}),ee(le(i),"swipeStart",function(a){i.props.verticalSwiping&&i.disableBodyScroll();var s=$M(a,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),ee(le(i),"swipeMove",function(a){var s=LM(a,$($($({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),ee(le(i),"swipeEnd",function(a){var s=MM(a,$($($({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),ee(le(i),"touchEnd",function(a){i.swipeEnd(a),i.clickable=!0}),ee(le(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),ee(le(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),ee(le(i),"slickGoTo",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:a,currentSlide:i.state.currentSlide},s)},0))}),ee(le(i),"play",function(){var a;if(i.props.rtl)a=i.state.currentSlide-i.props.slidesToScroll;else if(Ru($($({},i.props),i.state)))a=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(a)}),ee(le(i),"autoPlay",function(a){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(a==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(a==="leave"){if(s==="paused"||s==="focused")return}else if(a==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),ee(le(i),"pause",function(a){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;a==="paused"?i.setState({autoplaying:"paused"}):a==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),ee(le(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(le(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(le(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(le(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(le(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),ee(le(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),ee(le(i),"render",function(){var a=Pn("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=$($({},i.props),i.state),l=Bc(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=$($({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=Bc(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;d=$($({},d),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),c=X.createElement(HM,d)}var w,v,g=Bc(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);g.clickHandler=i.changeSlide,i.props.arrows&&(w=X.createElement(VM,g),v=X.createElement(WM,g));var m=null;i.props.vertical&&(m={height:i.state.listHeight});var p=null;i.props.vertical===!1?i.props.centerMode===!0&&(p={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(p={padding:i.props.centerPadding+" 0px"});var h=$($({},m),p),x=i.props.touchMove,b={className:"slick-list",style:h,onClick:i.clickHandler,onMouseDown:x?i.swipeStart:null,onMouseMove:i.state.dragging&&x?i.swipeMove:null,onMouseUp:x?i.swipeEnd:null,onMouseLeave:i.state.dragging&&x?i.swipeEnd:null,onTouchStart:x?i.swipeStart:null,onTouchMove:i.state.dragging&&x?i.swipeMove:null,onTouchEnd:x?i.touchEnd:null,onTouchCancel:i.state.dragging&&x?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},C={className:a,dir:"ltr",style:i.props.style};return i.props.unslick&&(b={className:"slick-list"},C={className:a}),X.createElement("div",C,i.props.unslick?"":w,X.createElement("div",nn({ref:i.listRefHandler},b),X.createElement(UM,nn({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=$($({},bM),{},{currentSlide:i.props.initialSlide,slideCount:X.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=$($({},i.state),o),i}return Mt(n,[{key:"didPropsChange",value:function(i){for(var o=!1,a=0,s=Object.keys(this.props);a<s.length;a++){var l=s[a];if(!i.hasOwnProperty(l)){o=!0;break}if(!(ze(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){o=!0;break}}return o||X.Children.count(this.props.children)!==X.Children.count(i.children)}}]),n}(X.Component),JM=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},QM=JM,XM=QM,KM=function(e){var t=/[height|width]$/;return t.test(e)},Av=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=XM(r),KM(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},YM=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Av(n),r<e.length-1&&(t+=", ")}),t):Av(e)},Wc=YM,Rv={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(t){return X.createElement("ul",{style:{display:"block"}},t)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(t){return X.createElement("button",null,t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},ZM=function(e){Zn(n,e);var t=er(n);function n(r){var i;return Lt(this,n),i=t.call(this,r),ee(le(i),"innerSliderRefHandler",function(o){return i.innerSlider=o}),ee(le(i),"slickPrev",function(){return i.innerSlider.slickPrev()}),ee(le(i),"slickNext",function(){return i.innerSlider.slickNext()}),ee(le(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return i.innerSlider.slickGoTo(o,a)}),ee(le(i),"slickPause",function(){return i.innerSlider.pause("paused")}),ee(le(i),"slickPlay",function(){return i.innerSlider.autoPlay("play")}),i.state={breakpoint:null},i._responsiveMediaHandlers=[],i}return Mt(n,[{key:"media",value:function(i,o){var a=window.matchMedia(i),s=function(u){var c=u.matches;c&&o()};a.addListener(s),s(a),this._responsiveMediaHandlers.push({mql:a,query:i,listener:s})}},{key:"componentDidMount",value:function(){var i=this;if(this.props.responsive){var o=this.props.responsive.map(function(s){return s.breakpoint});o.sort(function(s,l){return s-l}),o.forEach(function(s,l){var u;l===0?u=Wc({minWidth:0,maxWidth:s}):u=Wc({minWidth:o[l-1]+1,maxWidth:s}),kv()&&i.media(u,function(){i.setState({breakpoint:s})})});var a=Wc({minWidth:o.slice(-1)[0]});kv()&&this.media(a,function(){i.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(i){i.mql.removeListener(i.listener)})}},{key:"render",value:function(){var i=this,o,a;this.state.breakpoint?(a=this.props.responsive.filter(function(m){return m.breakpoint===i.state.breakpoint}),o=a[0].settings==="unslick"?"unslick":$($($({},Rv),this.props),a[0].settings)):o=$($({},Rv),this.props),o.centerMode&&(o.slidesToScroll>1,o.slidesToScroll=1),o.fade&&(o.slidesToShow>1,o.slidesToScroll>1,o.slidesToShow=1,o.slidesToScroll=1);var s=X.Children.toArray(this.props.children);s=s.filter(function(m){return typeof m=="string"?!!m.trim():!!m}),o.variableWidth&&(o.rows>1||o.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),o.variableWidth=!1);for(var l=[],u=null,c=0;c<s.length;c+=o.rows*o.slidesPerRow){for(var d=[],f=c;f<c+o.rows*o.slidesPerRow;f+=o.slidesPerRow){for(var w=[],v=f;v<f+o.slidesPerRow&&(o.variableWidth&&s[v].props.style&&(u=s[v].props.style.width),!(v>=s.length));v+=1)w.push(X.cloneElement(s[v],{key:100*c+10*f+v,tabIndex:-1,style:{width:"".concat(100/o.slidesPerRow,"%"),display:"inline-block"}}));d.push(X.createElement("div",{key:10*c+f},w))}o.variableWidth?l.push(X.createElement("div",{key:c,style:{width:u}},d)):l.push(X.createElement("div",{key:c},d))}if(o==="unslick"){var g="regular slider "+(this.props.className||"");return X.createElement("div",{className:g},s)}else l.length<=o.slidesToShow&&(o.unslick=!0);return X.createElement(qM,nn({style:this.props.style,ref:this.innerSliderRefHandler},o),l)}}]),n}(X.Component);const e5=e=>{const{componentCls:t,antCls:n,carouselArrowSize:r,carouselDotOffset:i,marginXXS:o}=e,a=-r*1.25,s=o;return{[t]:Object.assign(Object.assign({},OL(e)),{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":{pointerEvents:"none",[`input${n}-radio-input, input${n}-checkbox-input`]:{visibility:"hidden"},"&.slick-active":{pointerEvents:"auto",[`input${n}-radio-input, input${n}-checkbox-input`]:{visibility:"visible"}},"> div > div":{verticalAlign:"bottom"}}},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"},".slick-arrow.slick-hidden":{display:"none"},".slick-prev, .slick-next":{position:"absolute",top:"50%",display:"block",width:r,height:r,marginTop:-r/2,padding:0,color:"transparent",fontSize:0,lineHeight:0,background:"transparent",border:0,outline:"none",cursor:"pointer","&:hover, &:focus":{color:"transparent",background:"transparent",outline:"none","&::before":{opacity:1}},"&.slick-disabled::before":{opacity:.25}},".slick-prev":{insetInlineStart:a,"&::before":{content:'"←"'}},".slick-next":{insetInlineEnd:a,"&::before":{content:'"→"'}},".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,listStyle:"none","&-bottom":{bottom:i},"&-top":{top:i,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:e.dotWidth,height:e.dotHeight,marginInline:s,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:`all ${e.motionDurationSlow}`,button:{position:"relative",display:"block",width:"100%",height:e.dotHeight,padding:0,color:"transparent",fontSize:0,background:e.colorBgContainer,border:0,borderRadius:1,outline:"none",cursor:"pointer",opacity:.3,transition:`all ${e.motionDurationSlow}`,"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:-s,content:'""'}},"&.slick-active":{width:e.dotWidthActive,"& button":{background:e.colorBgContainer,opacity:1},"&: hover, &:focus":{opacity:1}}}}})}},t5=e=>{const{componentCls:t,carouselDotOffset:n,marginXXS:r}=e,i={width:e.dotHeight,height:e.dotWidth};return{[`${t}-vertical`]:{".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:e.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:n},"&-right":{insetInlineEnd:n,insetInlineStart:"auto"},li:Object.assign(Object.assign({},i),{margin:`${r}px 0`,verticalAlign:"baseline",button:i,"&.slick-active":Object.assign(Object.assign({},i),{button:i})})}}}},n5=e=>{const{componentCls:t}=e;return[{[`${t}-rtl`]:{direction:"rtl",".slick-dots":{[`${t}-rtl&`]:{flexDirection:"row-reverse"}}}},{[`${t}-vertical`]:{".slick-dots":{[`${t}-rtl&`]:{flexDirection:"column"}}}}]},r5=LL("Carousel",e=>{const{controlHeightLG:t,controlHeightSM:n}=e,r=Px(e,{carouselArrowSize:t/2,carouselDotOffset:n/2});return[e5(r),t5(r),n5(r)]},{dotWidth:16,dotHeight:3,dotWidthActive:24});var i5=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const o5=E.forwardRef((e,t)=>{var{dots:n=!0,arrows:r=!1,draggable:i=!1,waitForAnimate:o=!1,dotPosition:a="bottom",vertical:s=a==="left"||a==="right",rootClassName:l}=e,u=i5(e,["dots","arrows","draggable","waitForAnimate","dotPosition","vertical","rootClassName"]);const{getPrefixCls:c,direction:d}=E.useContext(Ba),f=E.useRef(),w=function(R){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;f.current.slickGoTo(R,P)};E.useImperativeHandle(t,()=>({goTo:w,autoPlay:f.current.innerSlider.autoPlay,innerSlider:f.current.innerSlider,prev:f.current.slickPrev,next:f.current.slickNext}),[f.current]);const v=E.useRef(E.Children.count(u.children));E.useEffect(()=>{v.current!==E.Children.count(u.children)&&(w(u.initialSlide||0,!1),v.current=E.Children.count(u.children))},[u.children]);const g=Object.assign({vertical:s},u);g.effect==="fade"&&(g.fade=!0);const m=c("carousel",g.prefixCls),p="slick-dots",h=!!n,x=Pn(p,`${p}-${a}`,typeof n=="boolean"?!1:n==null?void 0:n.className),[b,C]=r5(m),k=Pn(m,{[`${m}-rtl`]:d==="rtl",[`${m}-vertical`]:g.vertical},C,l);return b(E.createElement("div",{className:k},E.createElement(ZM,Object.assign({ref:f},g,{dots:h,dotsClass:x,arrows:r,draggable:i,waitForAnimate:o}))))}),a5=o5,s5="/Nanofab-Project/assets/institutoMaua-5bbada10.png",l5=({})=>z(gT,{children:[S(on,{}),S(vT,{children:z(a5,{autoplay:!0,children:[S(hs,{children:S(ms,{src:s5})}),S(hs,{children:S(ms,{})}),S(hs,{children:S(ms,{})}),S(hs,{children:S(ms,{})})]})}),S(an,{})]}),u5="/Nanofab-Project/assets/background2-7f5efefe.svg",c5=A.div`
  background-image: url(${u5});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  @media screen and (max-width: ${y.mobile}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${y.largeMobile}) and (max-width: ${y.tablet}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${y.tablet}) and (max-width: 1919px) {    
    background-size: 100% 1800px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${y.largeDesktop}) and (max-width: ${y.extraLargeDesktop}) {    
    background-size: 100% 2800px;
    background-repeat: repeat;
  }
`,d5=qC([{path:"/",element:S(zA,{})},{path:"/equipe",element:S(rR,{})},{path:"/andamento",element:S(bR,{})},{path:"/submissao_projetos",element:S(ZR,{})},{path:"/publicacoes",element:S(wO,{})},{path:"/parcerias",element:S(zO,{})},{path:"/login",element:S(YO,{})},{path:"/criar_conta",element:S(oT,{})},{path:"/redefinir_senha",element:S(pT,{})},{path:"/equipamentos_infraestrutura",element:S(l5,{})},{path:"/programas_especiais",element:S(mT,{})},{path:"*",element:S(HO,{})}],{basename:"/Nanofab-Project"}),f5=({})=>S(c5,{children:S(Q2,{children:S(_C,{router:d5})})});const p5=kE`
  body {
    *:focus {
        outline: none;
    }

    margin: 0;
    padding: 0;

    h1, h2, h3, h4, span, option, select, input, label, button, a{
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
`;function h5(){return z(OE,{children:[S(p5,{}),S(Zd,{autoClose:2e3}),S(f5,{})]})}qc.createRoot(document.getElementById("root")).render(S(X.StrictMode,{children:S(h5,{})}));
