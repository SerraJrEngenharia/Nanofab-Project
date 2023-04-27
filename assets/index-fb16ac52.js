function Sh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Eh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ao={},kh={get exports(){return Ao},set exports(e){Ao=e}},ta={},M={},Ch={get exports(){return M},set exports(e){M=e}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),Ah=Symbol.for("react.portal"),Rh=Symbol.for("react.fragment"),Ph=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),Oh=Symbol.for("react.provider"),Dh=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Mh=Symbol.for("react.memo"),Th=Symbol.for("react.lazy"),bu=Symbol.iterator;function Ih(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var Rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pd=Object.assign,$d={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=$d,this.updater=n||Rd}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Od(){}Od.prototype=Nr.prototype;function Ds(e,t,n){this.props=e,this.context=t,this.refs=$d,this.updater=n||Rd}var Ls=Ds.prototype=new Od;Ls.constructor=Ds;Pd(Ls,Nr.prototype);Ls.isPureReactComponent=!0;var zu=Array.isArray,Dd=Object.prototype.hasOwnProperty,Ns={current:null},Ld={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Dd.call(t,r)&&!Ld.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ni,type:e,key:o,ref:a,props:i,_owner:Ns.current}}function bh(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function zh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _u=/\/+/g;function Ia(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zh(""+e.key):t.toString(36)}function so(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ni:case Ah:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ia(a,0):r,zu(i)?(n="",e!=null&&(n=e.replace(_u,"$&/")+"/"),so(i,t,n,"",function(c){return c})):i!=null&&(Ms(i)&&(i=bh(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(_u,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",zu(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Ia(o,l);a+=so(o,t,n,s,i)}else if(s=Ih(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Ia(o,l++),a+=so(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ui(e,t,n){if(e==null)return e;var r=[],i=0;return so(e,r,"","",function(o){return t.call(n,o,i++)}),r}function _h(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},uo={transition:null},Fh={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:uo,ReactCurrentOwner:Ns};re.Children={map:Ui,forEach:function(e,t,n){Ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ui(e,function(){t++}),t},toArray:function(e){return Ui(e,function(t){return t})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Nr;re.Fragment=Rh;re.Profiler=$h;re.PureComponent=Ds;re.StrictMode=Ph;re.Suspense=Nh;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fh;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pd({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ns.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Dd.call(t,s)&&!Ld.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ni,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:Dh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Oh,_context:e},e.Consumer=e};re.createElement=Nd;re.createFactory=function(e){var t=Nd.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:Lh,render:e}};re.isValidElement=Ms;re.lazy=function(e){return{$$typeof:Th,_payload:{_status:-1,_result:e},_init:_h}};re.memo=function(e,t){return{$$typeof:Mh,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=uo.transition;uo.transition={};try{e()}finally{uo.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return rt.current.useCallback(e,t)};re.useContext=function(e){return rt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};re.useEffect=function(e,t){return rt.current.useEffect(e,t)};re.useId=function(){return rt.current.useId()};re.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return rt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};re.useRef=function(e){return rt.current.useRef(e)};re.useState=function(e){return rt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return rt.current.useTransition()};re.version="18.2.0";(function(e){e.exports=re})(Ch);const tt=Eh(M),Rl=Sh({__proto__:null,default:tt},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh=M,jh=Symbol.for("react.element"),Bh=Symbol.for("react.fragment"),Hh=Object.prototype.hasOwnProperty,Vh=Uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jh={key:!0,ref:!0,__self:!0,__source:!0};function Md(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Hh.call(t,r)&&!Jh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jh,type:e,key:o,ref:a,props:i,_owner:Vh.current}}ta.Fragment=Bh;ta.jsx=Md;ta.jsxs=Md;(function(e){e.exports=ta})(kh);const y=Ao.jsx,B=Ao.jsxs;var Pl={},$l={},Gh={get exports(){return $l},set exports(e){$l=e}},gt={},Ol={},Wh={get exports(){return Ol},set exports(e){Ol=e}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,J){var U=T.length;T.push(J);e:for(;0<U;){var ae=U-1>>>1,I=T[ae];if(0<i(I,J))T[ae]=J,T[U]=I,U=ae;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var J=T[0],U=T.pop();if(U!==J){T[0]=U;e:for(var ae=0,I=T.length,_=I>>>1;ae<_;){var z=2*(ae+1)-1,Q=T[z],S=z+1,te=T[S];if(0>i(Q,U))S<I&&0>i(te,Q)?(T[ae]=te,T[S]=U,ae=S):(T[ae]=Q,T[z]=U,ae=z);else if(S<I&&0>i(te,U))T[ae]=te,T[S]=U,ae=S;else break e}}return J}function i(T,J){var U=T.sortIndex-J.sortIndex;return U!==0?U:T.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],f=1,m=null,v=3,k=!1,E=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=T)r(c),J.sortIndex=J.expirationTime,t(s,J);else break;J=n(c)}}function w(T){if(x=!1,h(T),!E)if(n(s)!==null)E=!0,dt(P);else{var J=n(c);J!==null&&Ve(w,J.startTime-T)}}function P(T,J){E=!1,x&&(x=!1,p(D),D=-1),k=!0;var U=v;try{for(h(J),m=n(s);m!==null&&(!(m.expirationTime>J)||T&&!ye());){var ae=m.callback;if(typeof ae=="function"){m.callback=null,v=m.priorityLevel;var I=ae(m.expirationTime<=J);J=e.unstable_now(),typeof I=="function"?m.callback=I:m===n(s)&&r(s),h(J)}else r(s);m=n(s)}if(m!==null)var _=!0;else{var z=n(c);z!==null&&Ve(w,z.startTime-J),_=!1}return _}finally{m=null,v=U,k=!1}}var L=!1,N=null,D=-1,ee=5,V=-1;function ye(){return!(e.unstable_now()-V<ee)}function xe(){if(N!==null){var T=e.unstable_now();V=T;var J=!0;try{J=N(!0,T)}finally{J?we():(L=!1,N=null)}}else L=!1}var we;if(typeof d=="function")we=function(){d(xe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,me=$e.port2;$e.port1.onmessage=xe,we=function(){me.postMessage(null)}}else we=function(){g(xe,0)};function dt(T){N=T,L||(L=!0,we())}function Ve(T,J){D=g(function(){T(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){E||k||(E=!0,dt(P))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var U=v;v=J;try{return T()}finally{v=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,J){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=v;v=T;try{return J()}finally{v=U}},e.unstable_scheduleCallback=function(T,J,U){var ae=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ae+U:ae):U=ae,T){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=U+I,T={id:f++,callback:J,priorityLevel:T,startTime:U,expirationTime:I,sortIndex:-1},U>ae?(T.sortIndex=U,t(c,T),n(s)===null&&T===n(c)&&(x?(p(D),D=-1):x=!0,Ve(w,U-ae))):(T.sortIndex=I,t(s,T),E||k||(E=!0,dt(P))),T},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(T){var J=v;return function(){var U=v;v=J;try{return T.apply(this,arguments)}finally{v=U}}}})(Td);(function(e){e.exports=Td})(Wh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=M,mt=Ol;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bd=new Set,fi={};function Gn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(fi[e]=t,e=0;e<t.length;e++)bd.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,Qh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fu={},Uu={};function Yh(e){return Dl.call(Uu,e)?!0:Dl.call(Fu,e)?!1:Qh.test(e)?Uu[e]=!0:(Fu[e]=!0,!1)}function Kh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zh(e,t,n,r){if(t===null||typeof t>"u"||Kh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ts=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ts,Is);Qe[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ts,Is);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ts,Is);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function bs(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zh(t,n,i,r)&&(n=null),r||i===null?Yh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ji=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),zs=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),zd=Symbol.for("react.provider"),_d=Symbol.for("react.context"),_s=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Fd=Symbol.for("react.offscreen"),ju=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,ba;function Zr(e){if(ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ba=t&&t[1]||""}return`
`+ba+e}var za=!1;function _a(e,t){if(!e||za)return"";za=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{za=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function Xh(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=_a(e.type,!1),e;case 11:return e=_a(e.type.render,!1),e;case 1:return e=_a(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case Ll:return"Profiler";case zs:return"StrictMode";case Nl:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _d:return(e.displayName||"Context")+".Consumer";case zd:return(e._context.displayName||"Context")+".Provider";case _s:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function qh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function em(e){var t=Ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bi(e){e._valueTracker||(e._valueTracker=em(e))}function jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bd(e,t){t=t.checked,t!=null&&bs(e,"checked",t,!1)}function bl(e,t){Bd(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zl(e,t.type,n):t.hasOwnProperty("defaultValue")&&zl(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zl(e,t,n){(t!=="number"||Ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Xr(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function Hd(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hi,Jd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tm=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){tm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ti[t]=ti[e]})});function Gd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ti.hasOwnProperty(e)&&ti[e]?(""+t).trim():t+"px"}function Wd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var nm=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ul(e,t){if(t){if(nm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,gr=null,vr=null;function Gu(e){if(e=Ii(e)){if(typeof Hl!="function")throw Error(O(280));var t=e.stateNode;t&&(t=aa(t),Hl(e.stateNode,e.type,t))}}function Qd(e){gr?vr?vr.push(e):vr=[e]:gr=e}function Yd(){if(gr){var e=gr,t=vr;if(vr=gr=null,Gu(e),t)for(e=0;e<t.length;e++)Gu(t[e])}}function Kd(e,t){return e(t)}function Zd(){}var Fa=!1;function Xd(e,t,n){if(Fa)return e(t,n);Fa=!0;try{return Kd(e,t,n)}finally{Fa=!1,(gr!==null||vr!==null)&&(Zd(),Yd())}}function hi(e,t){var n=e.stateNode;if(n===null)return null;var r=aa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Vl=!1;if(qt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Vl=!1}function rm(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var ni=!1,Po=null,$o=!1,Jl=null,im={onError:function(e){ni=!0,Po=e}};function om(e,t,n,r,i,o,a,l,s){ni=!1,Po=null,rm.apply(im,arguments)}function am(e,t,n,r,i,o,a,l,s){if(om.apply(this,arguments),ni){if(ni){var c=Po;ni=!1,Po=null}else throw Error(O(198));$o||($o=!0,Jl=c)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wu(e){if(Wn(e)!==e)throw Error(O(188))}function lm(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Wu(i),e;if(o===r)return Wu(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function ef(e){return e=lm(e),e!==null?tf(e):null}function tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tf(e);if(t!==null)return t;e=e.sibling}return null}var nf=mt.unstable_scheduleCallback,Qu=mt.unstable_cancelCallback,sm=mt.unstable_shouldYield,um=mt.unstable_requestPaint,Le=mt.unstable_now,cm=mt.unstable_getCurrentPriorityLevel,js=mt.unstable_ImmediatePriority,rf=mt.unstable_UserBlockingPriority,Oo=mt.unstable_NormalPriority,dm=mt.unstable_LowPriority,of=mt.unstable_IdlePriority,na=null,Ht=null;function fm(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:mm,pm=Math.log,hm=Math.LN2;function mm(e){return e>>>=0,e===0?32:31-(pm(e)/hm|0)|0}var Vi=64,Ji=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=qr(l):(o&=a,o!==0&&(r=qr(o)))}else a=n&~i,a!==0?r=qr(a):o!==0&&(r=qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function gm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Mt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=gm(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function af(){var e=Vi;return Vi<<=1,!(Vi&4194240)&&(Vi=64),e}function Ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function ym(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sf,Hs,uf,cf,df,Wl=!1,Gi=[],mn=null,gn=null,vn=null,mi=new Map,gi=new Map,dn=[],xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yu(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function Br(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ii(t),t!==null&&Hs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wm(e,t,n,r,i){switch(t){case"focusin":return mn=Br(mn,e,t,n,r,i),!0;case"dragenter":return gn=Br(gn,e,t,n,r,i),!0;case"mouseover":return vn=Br(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return mi.set(o,Br(mi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,gi.set(o,Br(gi.get(o)||null,e,t,n,r,i)),!0}return!1}function ff(e){var t=Mn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=qd(n),t!==null){e.blockedOn=t,df(e.priority,function(){uf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=Ii(n),t!==null&&Hs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ku(e,t,n){co(e)&&n.delete(t)}function Sm(){Wl=!1,mn!==null&&co(mn)&&(mn=null),gn!==null&&co(gn)&&(gn=null),vn!==null&&co(vn)&&(vn=null),mi.forEach(Ku),gi.forEach(Ku)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wl||(Wl=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Sm)))}function vi(e){function t(i){return Hr(i,e)}if(0<Gi.length){Hr(Gi[0],e);for(var n=1;n<Gi.length;n++){var r=Gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Hr(mn,e),gn!==null&&Hr(gn,e),vn!==null&&Hr(vn,e),mi.forEach(t),gi.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)ff(n),n.blockedOn===null&&dn.shift()}var yr=on.ReactCurrentBatchConfig,Lo=!0;function Em(e,t,n,r){var i=de,o=yr.transition;yr.transition=null;try{de=1,Vs(e,t,n,r)}finally{de=i,yr.transition=o}}function km(e,t,n,r){var i=de,o=yr.transition;yr.transition=null;try{de=4,Vs(e,t,n,r)}finally{de=i,yr.transition=o}}function Vs(e,t,n,r){if(Lo){var i=Ql(e,t,n,r);if(i===null)Ka(e,t,r,No,n),Yu(e,r);else if(wm(i,e,t,n,r))r.stopPropagation();else if(Yu(e,r),t&4&&-1<xm.indexOf(e)){for(;i!==null;){var o=Ii(i);if(o!==null&&sf(o),o=Ql(e,t,n,r),o===null&&Ka(e,t,r,No,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ka(e,t,r,null,n)}}var No=null;function Ql(e,t,n,r){if(No=null,e=Us(r),e=Mn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return No=e,null}function pf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cm()){case js:return 1;case rf:return 4;case Oo:case dm:return 16;case of:return 536870912;default:return 16}default:return 16}}var pn=null,Js=null,fo=null;function hf(){if(fo)return fo;var e,t=Js,n=t.length,r,i="value"in pn?pn.value:pn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return fo=i.slice(e,1<r?1-r:void 0)}function po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function Zu(){return!1}function vt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wi:Zu,this.isPropagationStopped=Zu,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=vt(Mr),Ti=Re({},Mr,{view:0,detail:0}),Cm=vt(Ti),ja,Ba,Vr,ra=Re({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(ja=e.screenX-Vr.screenX,Ba=e.screenY-Vr.screenY):Ba=ja=0,Vr=e),ja)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),Xu=vt(ra),Am=Re({},ra,{dataTransfer:0}),Rm=vt(Am),Pm=Re({},Ti,{relatedTarget:0}),Ha=vt(Pm),$m=Re({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Om=vt($m),Dm=Re({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lm=vt(Dm),Nm=Re({},Mr,{data:0}),qu=vt(Nm),Mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Im[e])?!!t[e]:!1}function Ws(){return bm}var zm=Re({},Ti,{key:function(e){if(e.key){var t=Mm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_m=vt(zm),Fm=Re({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=vt(Fm),Um=Re({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),jm=vt(Um),Bm=Re({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hm=vt(Bm),Vm=Re({},ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=vt(Vm),Gm=[9,13,27,32],Qs=qt&&"CompositionEvent"in window,ri=null;qt&&"documentMode"in document&&(ri=document.documentMode);var Wm=qt&&"TextEvent"in window&&!ri,mf=qt&&(!Qs||ri&&8<ri&&11>=ri),tc=String.fromCharCode(32),nc=!1;function gf(e,t){switch(e){case"keyup":return Gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function Qm(e,t){switch(e){case"compositionend":return vf(t);case"keypress":return t.which!==32?null:(nc=!0,tc);case"textInput":return e=t.data,e===tc&&nc?null:e;default:return null}}function Ym(e,t){if(nr)return e==="compositionend"||!Qs&&gf(e,t)?(e=hf(),fo=Js=pn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mf&&t.locale!=="ko"?null:t.data;default:return null}}var Km={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Km[e.type]:t==="textarea"}function yf(e,t,n,r){Qd(r),t=Mo(t,"onChange"),0<t.length&&(n=new Gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,yi=null;function Zm(e){Of(e,0)}function ia(e){var t=or(e);if(jd(t))return e}function Xm(e,t){if(e==="change")return t}var xf=!1;if(qt){var Va;if(qt){var Ja="oninput"in document;if(!Ja){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),Ja=typeof ic.oninput=="function"}Va=Ja}else Va=!1;xf=Va&&(!document.documentMode||9<document.documentMode)}function oc(){ii&&(ii.detachEvent("onpropertychange",wf),yi=ii=null)}function wf(e){if(e.propertyName==="value"&&ia(yi)){var t=[];yf(t,yi,e,Us(e)),Xd(Zm,t)}}function qm(e,t,n){e==="focusin"?(oc(),ii=t,yi=n,ii.attachEvent("onpropertychange",wf)):e==="focusout"&&oc()}function eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ia(yi)}function tg(e,t){if(e==="click")return ia(t)}function ng(e,t){if(e==="input"||e==="change")return ia(t)}function rg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:rg;function xi(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dl.call(t,i)||!It(e[i],t[i]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var n=ac(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ac(n)}}function Sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ef(){for(var e=window,t=Ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ro(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ig(e){var t=Ef(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sf(n.ownerDocument.documentElement,n)){if(r!==null&&Ys(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=lc(n,o);var a=lc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var og=qt&&"documentMode"in document&&11>=document.documentMode,rr=null,Yl=null,oi=null,Kl=!1;function sc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||rr==null||rr!==Ro(r)||(r=rr,"selectionStart"in r&&Ys(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&xi(oi,r)||(oi=r,r=Mo(Yl,"onSelect"),0<r.length&&(t=new Gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},Ga={},kf={};qt&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function oa(e){if(Ga[e])return Ga[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kf)return Ga[e]=t[n];return e}var Cf=oa("animationend"),Af=oa("animationiteration"),Rf=oa("animationstart"),Pf=oa("transitionend"),$f=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){$f.set(e,t),Gn(t,[e])}for(var Wa=0;Wa<uc.length;Wa++){var Qa=uc[Wa],ag=Qa.toLowerCase(),lg=Qa[0].toUpperCase()+Qa.slice(1);Pn(ag,"on"+lg)}Pn(Cf,"onAnimationEnd");Pn(Af,"onAnimationIteration");Pn(Rf,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Pf,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,am(r,t,void 0,e),e.currentTarget=null}function Of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;cc(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;cc(i,l,c),o=s}}}if($o)throw e=Jl,$o=!1,Jl=null,e}function ge(e,t){var n=t[ts];n===void 0&&(n=t[ts]=new Set);var r=e+"__bubble";n.has(r)||(Df(t,e,2,!1),n.add(r))}function Ya(e,t,n){var r=0;t&&(r|=4),Df(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[Yi]){e[Yi]=!0,bd.forEach(function(n){n!=="selectionchange"&&(sg.has(n)||Ya(n,!1,e),Ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,Ya("selectionchange",!1,t))}}function Df(e,t,n,r){switch(pf(t)){case 1:var i=Em;break;case 4:i=km;break;default:i=Vs}n=i.bind(null,t,n,e),i=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ka(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Mn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Xd(function(){var c=o,f=Us(n),m=[];e:{var v=$f.get(e);if(v!==void 0){var k=Gs,E=e;switch(e){case"keypress":if(po(n)===0)break e;case"keydown":case"keyup":k=_m;break;case"focusin":E="focus",k=Ha;break;case"focusout":E="blur",k=Ha;break;case"beforeblur":case"afterblur":k=Ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Rm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=jm;break;case Cf:case Af:case Rf:k=Om;break;case Pf:k=Hm;break;case"scroll":k=Cm;break;case"wheel":k=Jm;break;case"copy":case"cut":case"paste":k=Lm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ec}var x=(t&4)!==0,g=!x&&e==="scroll",p=x?v!==null?v+"Capture":null:v;x=[];for(var d=c,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=hi(d,p),w!=null&&x.push(Si(d,w,h)))),g)break;d=d.return}0<x.length&&(v=new k(v,E,null,n,f),m.push({event:v,listeners:x}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",v&&n!==Bl&&(E=n.relatedTarget||n.fromElement)&&(Mn(E)||E[en]))break e;if((k||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,k?(E=n.relatedTarget||n.toElement,k=c,E=E?Mn(E):null,E!==null&&(g=Wn(E),E!==g||E.tag!==5&&E.tag!==6)&&(E=null)):(k=null,E=c),k!==E)){if(x=Xu,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=ec,w="onPointerLeave",p="onPointerEnter",d="pointer"),g=k==null?v:or(k),h=E==null?v:or(E),v=new x(w,d+"leave",k,n,f),v.target=g,v.relatedTarget=h,w=null,Mn(f)===c&&(x=new x(p,d+"enter",E,n,f),x.target=h,x.relatedTarget=g,w=x),g=w,k&&E)t:{for(x=k,p=E,d=0,h=x;h;h=Xn(h))d++;for(h=0,w=p;w;w=Xn(w))h++;for(;0<d-h;)x=Xn(x),d--;for(;0<h-d;)p=Xn(p),h--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=Xn(x),p=Xn(p)}x=null}else x=null;k!==null&&dc(m,v,k,x,!1),E!==null&&g!==null&&dc(m,g,E,x,!0)}}e:{if(v=c?or(c):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var P=Xm;else if(rc(v))if(xf)P=ng;else{P=eg;var L=qm}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(P=tg);if(P&&(P=P(e,c))){yf(m,P,n,f);break e}L&&L(e,v,c),e==="focusout"&&(L=v._wrapperState)&&L.controlled&&v.type==="number"&&zl(v,"number",v.value)}switch(L=c?or(c):window,e){case"focusin":(rc(L)||L.contentEditable==="true")&&(rr=L,Yl=c,oi=null);break;case"focusout":oi=Yl=rr=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,sc(m,n,f);break;case"selectionchange":if(og)break;case"keydown":case"keyup":sc(m,n,f)}var N;if(Qs)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else nr?gf(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(mf&&n.locale!=="ko"&&(nr||D!=="onCompositionStart"?D==="onCompositionEnd"&&nr&&(N=hf()):(pn=f,Js="value"in pn?pn.value:pn.textContent,nr=!0)),L=Mo(c,D),0<L.length&&(D=new qu(D,e,null,n,f),m.push({event:D,listeners:L}),N?D.data=N:(N=vf(n),N!==null&&(D.data=N)))),(N=Wm?Qm(e,n):Ym(e,n))&&(c=Mo(c,"onBeforeInput"),0<c.length&&(f=new qu("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=N))}Of(m,t)})}function Si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=hi(e,n),o!=null&&r.unshift(Si(e,o,i)),o=hi(e,t),o!=null&&r.push(Si(e,o,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=hi(n,o),s!=null&&a.unshift(Si(n,s,l))):i||(s=hi(n,o),s!=null&&a.push(Si(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ug=/\r\n?/g,cg=/\u0000|\uFFFD/g;function fc(e){return(typeof e=="string"?e:""+e).replace(ug,`
`).replace(cg,"")}function Ki(e,t,n){if(t=fc(t),fc(e)!==t&&n)throw Error(O(425))}function To(){}var Zl=null,Xl=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,dg=typeof clearTimeout=="function"?clearTimeout:void 0,pc=typeof Promise=="function"?Promise:void 0,fg=typeof queueMicrotask=="function"?queueMicrotask:typeof pc<"u"?function(e){return pc.resolve(null).then(e).catch(pg)}:es;function pg(e){setTimeout(function(){throw e})}function Za(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Tr,Ei="__reactProps$"+Tr,en="__reactContainer$"+Tr,ts="__reactEvents$"+Tr,hg="__reactListeners$"+Tr,mg="__reactHandles$"+Tr;function Mn(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hc(e);e!==null;){if(n=e[Bt])return n;e=hc(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[Bt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function aa(e){return e[Ei]||null}var ns=[],ar=-1;function $n(e){return{current:e}}function ve(e){0>ar||(e.current=ns[ar],ns[ar]=null,ar--)}function he(e,t){ar++,ns[ar]=e.current,e.current=t}var Rn={},qe=$n(Rn),st=$n(!1),Fn=Rn;function kr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function Io(){ve(st),ve(qe)}function mc(e,t,n){if(qe.current!==Rn)throw Error(O(168));he(qe,t),he(st,n)}function Lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,qh(e)||"Unknown",i));return Re({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Fn=qe.current,he(qe,e),he(st,st.current),!0}function gc(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Lf(e,t,Fn),r.__reactInternalMemoizedMergedChildContext=e,ve(st),ve(qe),he(qe,e)):ve(st),he(st,n)}var Qt=null,la=!1,Xa=!1;function Nf(e){Qt===null?Qt=[e]:Qt.push(e)}function gg(e){la=!0,Nf(e)}function On(){if(!Xa&&Qt!==null){Xa=!0;var e=0,t=de;try{var n=Qt;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,la=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),nf(js,On),i}finally{de=t,Xa=!1}}return null}var lr=[],sr=0,zo=null,_o=0,xt=[],wt=0,Un=null,Yt=1,Kt="";function Ln(e,t){lr[sr++]=_o,lr[sr++]=zo,zo=e,_o=t}function Mf(e,t,n){xt[wt++]=Yt,xt[wt++]=Kt,xt[wt++]=Un,Un=e;var r=Yt;e=Kt;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var o=32-Mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Yt=1<<32-Mt(t)+i|n<<i|r,Kt=o+e}else Yt=1<<o|n<<i|r,Kt=e}function Ks(e){e.return!==null&&(Ln(e,1),Mf(e,1,0))}function Zs(e){for(;e===zo;)zo=lr[--sr],lr[sr]=null,_o=lr[--sr],lr[sr]=null;for(;e===Un;)Un=xt[--wt],xt[wt]=null,Kt=xt[--wt],xt[wt]=null,Yt=xt[--wt],xt[wt]=null}var ht=null,pt=null,Ee=!1,Lt=null;function Tf(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:Yt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function is(e){if(Ee){var t=pt;if(t){var n=t;if(!vc(e,t)){if(rs(e))throw Error(O(418));t=yn(n.nextSibling);var r=ht;t&&vc(e,t)?Tf(r,n):(e.flags=e.flags&-4097|2,Ee=!1,ht=e)}}else{if(rs(e))throw Error(O(418));e.flags=e.flags&-4097|2,Ee=!1,ht=e}}}function yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Zi(e){if(e!==ht)return!1;if(!Ee)return yc(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=pt)){if(rs(e))throw If(),Error(O(418));for(;t;)Tf(e,t),t=yn(t.nextSibling)}if(yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?yn(e.stateNode.nextSibling):null;return!0}function If(){for(var e=pt;e;)e=yn(e.nextSibling)}function Cr(){pt=ht=null,Ee=!1}function Xs(e){Lt===null?Lt=[e]:Lt.push(e)}var vg=on.ReactCurrentBatchConfig;function Ot(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Fo=$n(null),Uo=null,ur=null,qs=null;function eu(){qs=ur=Uo=null}function tu(e){var t=Fo.current;ve(Fo),e._currentValue=t}function os(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Uo=e,qs=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(qs!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Uo===null)throw Error(O(308));ur=e,Uo.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Tn=null;function nu(e){Tn===null?Tn=[e]:Tn.push(e)}function bf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,nu(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,nu(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}function xc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var i=e.updateQueue;cn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;a=0,f=c=s=null,l=o;do{var v=l.lane,k=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=e,x=l;switch(v=t,k=n,x.tag){case 1:if(E=x.payload,typeof E=="function"){m=E.call(k,m,v);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=x.payload,v=typeof E=="function"?E.call(k,m,v):E,v==null)break e;m=Re({},m,v);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=k,s=m):f=f.next=k,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(f===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Bn|=a,e.lanes=a,e.memoizedState=m}}function wc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var _f=new Id.Component().refs;function as(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sa={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Sn(e),o=Zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Tt(t,e,i,r),ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Sn(e),o=Zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Tt(t,e,i,r),ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Sn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Tt(t,e,r,n),ho(t,e,r))}};function Sc(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!xi(n,r)||!xi(i,o):!0}function Ff(e,t,n){var r=!1,i=Rn,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=ut(t)?Fn:qe.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):Rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ec(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sa.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=_f,ru(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=ut(t)?Fn:qe.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(as(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&sa.enqueueReplaceState(i,i.state,null),jo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===_f&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kc(e){var t=e._init;return t(e._payload)}function Uf(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=En(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,h,w){return d===null||d.tag!==6?(d=ol(h,p.mode,w),d.return=p,d):(d=i(d,h),d.return=p,d)}function s(p,d,h,w){var P=h.type;return P===tr?f(p,d,h.props.children,w,h.key):d!==null&&(d.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===un&&kc(P)===d.type)?(w=i(d,h.props),w.ref=Jr(p,d,h),w.return=p,w):(w=wo(h.type,h.key,h.props,null,p.mode,w),w.ref=Jr(p,d,h),w.return=p,w)}function c(p,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=al(h,p.mode,w),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function f(p,d,h,w,P){return d===null||d.tag!==7?(d=_n(h,p.mode,w,P),d.return=p,d):(d=i(d,h),d.return=p,d)}function m(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ol(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ji:return h=wo(d.type,d.key,d.props,null,p.mode,h),h.ref=Jr(p,null,d),h.return=p,h;case er:return d=al(d,p.mode,h),d.return=p,d;case un:var w=d._init;return m(p,w(d._payload),h)}if(Xr(d)||Ur(d))return d=_n(d,p.mode,h,null),d.return=p,d;Xi(p,d)}return null}function v(p,d,h,w){var P=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:l(p,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ji:return h.key===P?s(p,d,h,w):null;case er:return h.key===P?c(p,d,h,w):null;case un:return P=h._init,v(p,d,P(h._payload),w)}if(Xr(h)||Ur(h))return P!==null?null:f(p,d,h,w,null);Xi(p,h)}return null}function k(p,d,h,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,l(d,p,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ji:return p=p.get(w.key===null?h:w.key)||null,s(d,p,w,P);case er:return p=p.get(w.key===null?h:w.key)||null,c(d,p,w,P);case un:var L=w._init;return k(p,d,h,L(w._payload),P)}if(Xr(w)||Ur(w))return p=p.get(h)||null,f(d,p,w,P,null);Xi(d,w)}return null}function E(p,d,h,w){for(var P=null,L=null,N=d,D=d=0,ee=null;N!==null&&D<h.length;D++){N.index>D?(ee=N,N=null):ee=N.sibling;var V=v(p,N,h[D],w);if(V===null){N===null&&(N=ee);break}e&&N&&V.alternate===null&&t(p,N),d=o(V,d,D),L===null?P=V:L.sibling=V,L=V,N=ee}if(D===h.length)return n(p,N),Ee&&Ln(p,D),P;if(N===null){for(;D<h.length;D++)N=m(p,h[D],w),N!==null&&(d=o(N,d,D),L===null?P=N:L.sibling=N,L=N);return Ee&&Ln(p,D),P}for(N=r(p,N);D<h.length;D++)ee=k(N,p,D,h[D],w),ee!==null&&(e&&ee.alternate!==null&&N.delete(ee.key===null?D:ee.key),d=o(ee,d,D),L===null?P=ee:L.sibling=ee,L=ee);return e&&N.forEach(function(ye){return t(p,ye)}),Ee&&Ln(p,D),P}function x(p,d,h,w){var P=Ur(h);if(typeof P!="function")throw Error(O(150));if(h=P.call(h),h==null)throw Error(O(151));for(var L=P=null,N=d,D=d=0,ee=null,V=h.next();N!==null&&!V.done;D++,V=h.next()){N.index>D?(ee=N,N=null):ee=N.sibling;var ye=v(p,N,V.value,w);if(ye===null){N===null&&(N=ee);break}e&&N&&ye.alternate===null&&t(p,N),d=o(ye,d,D),L===null?P=ye:L.sibling=ye,L=ye,N=ee}if(V.done)return n(p,N),Ee&&Ln(p,D),P;if(N===null){for(;!V.done;D++,V=h.next())V=m(p,V.value,w),V!==null&&(d=o(V,d,D),L===null?P=V:L.sibling=V,L=V);return Ee&&Ln(p,D),P}for(N=r(p,N);!V.done;D++,V=h.next())V=k(N,p,D,V.value,w),V!==null&&(e&&V.alternate!==null&&N.delete(V.key===null?D:V.key),d=o(V,d,D),L===null?P=V:L.sibling=V,L=V);return e&&N.forEach(function(xe){return t(p,xe)}),Ee&&Ln(p,D),P}function g(p,d,h,w){if(typeof h=="object"&&h!==null&&h.type===tr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ji:e:{for(var P=h.key,L=d;L!==null;){if(L.key===P){if(P=h.type,P===tr){if(L.tag===7){n(p,L.sibling),d=i(L,h.props.children),d.return=p,p=d;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===un&&kc(P)===L.type){n(p,L.sibling),d=i(L,h.props),d.ref=Jr(p,L,h),d.return=p,p=d;break e}n(p,L);break}else t(p,L);L=L.sibling}h.type===tr?(d=_n(h.props.children,p.mode,w,h.key),d.return=p,p=d):(w=wo(h.type,h.key,h.props,null,p.mode,w),w.ref=Jr(p,d,h),w.return=p,p=w)}return a(p);case er:e:{for(L=h.key;d!==null;){if(d.key===L)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=al(h,p.mode,w),d.return=p,p=d}return a(p);case un:return L=h._init,g(p,d,L(h._payload),w)}if(Xr(h))return E(p,d,h,w);if(Ur(h))return x(p,d,h,w);Xi(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,h),d.return=p,p=d):(n(p,d),d=ol(h,p.mode,w),d.return=p,p=d),a(p)):n(p,d)}return g}var Ar=Uf(!0),jf=Uf(!1),bi={},Vt=$n(bi),ki=$n(bi),Ci=$n(bi);function In(e){if(e===bi)throw Error(O(174));return e}function iu(e,t){switch(he(Ci,t),he(ki,e),he(Vt,bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fl(t,e)}ve(Vt),he(Vt,t)}function Rr(){ve(Vt),ve(ki),ve(Ci)}function Bf(e){In(Ci.current);var t=In(Vt.current),n=Fl(t,e.type);t!==n&&(he(ki,e),he(Vt,n))}function ou(e){ki.current===e&&(ve(Vt),ve(ki))}var Ce=$n(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qa=[];function au(){for(var e=0;e<qa.length;e++)qa[e]._workInProgressVersionPrimary=null;qa.length=0}var mo=on.ReactCurrentDispatcher,el=on.ReactCurrentBatchConfig,jn=0,Ae=null,ze=null,je=null,Ho=!1,ai=!1,Ai=0,yg=0;function Ke(){throw Error(O(321))}function lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function su(e,t,n,r,i,o){if(jn=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mo.current=e===null||e.memoizedState===null?Eg:kg,e=n(r,i),ai){o=0;do{if(ai=!1,Ai=0,25<=o)throw Error(O(301));o+=1,je=ze=null,t.updateQueue=null,mo.current=Cg,e=n(r,i)}while(ai)}if(mo.current=Vo,t=ze!==null&&ze.next!==null,jn=0,je=ze=Ae=null,Ho=!1,t)throw Error(O(300));return e}function uu(){var e=Ai!==0;return Ai=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ae.memoizedState=je=e:je=je.next=e,je}function Ct(){if(ze===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=je===null?Ae.memoizedState:je.next;if(t!==null)je=t,ze=e;else{if(e===null)throw Error(O(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},je===null?Ae.memoizedState=je=e:je=je.next=e}return je}function Ri(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var f=c.lane;if((jn&f)===f)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=m,a=r):s=s.next=m,Ae.lanes|=f,Bn|=f}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,It(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,Bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);It(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hf(){}function Vf(e,t){var n=Ae,r=Ct(),i=t(),o=!It(r.memoizedState,i);if(o&&(r.memoizedState=i,lt=!0),r=r.queue,cu(Wf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Pi(9,Gf.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(O(349));jn&30||Jf(n,t,i)}return i}function Jf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gf(e,t,n,r){t.value=n,t.getSnapshot=r,Qf(t)&&Yf(e)}function Wf(e,t,n){return n(function(){Qf(t)&&Yf(e)})}function Qf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Yf(e){var t=tn(e,1);t!==null&&Tt(t,e,1,-1)}function Cc(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},t.queue=e,e=e.dispatch=Sg.bind(null,Ae,e),[t.memoizedState,e]}function Pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kf(){return Ct().memoizedState}function go(e,t,n,r){var i=Ut();Ae.flags|=e,i.memoizedState=Pi(1|t,n,void 0,r===void 0?null:r)}function ua(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(ze!==null){var a=ze.memoizedState;if(o=a.destroy,r!==null&&lu(r,a.deps)){i.memoizedState=Pi(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Pi(1|t,n,o,r)}function Ac(e,t){return go(8390656,8,e,t)}function cu(e,t){return ua(2048,8,e,t)}function Zf(e,t){return ua(4,2,e,t)}function Xf(e,t){return ua(4,4,e,t)}function qf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ep(e,t,n){return n=n!=null?n.concat([e]):null,ua(4,4,qf.bind(null,t,e),n)}function du(){}function tp(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function np(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rp(e,t,n){return jn&21?(It(n,t)||(n=af(),Ae.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function xg(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{de=n,el.transition=r}}function ip(){return Ct().memoizedState}function wg(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},op(e))ap(t,n);else if(n=bf(e,t,n,r),n!==null){var i=nt();Tt(n,e,r,i),lp(n,t,r)}}function Sg(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(op(e))ap(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,a)){var s=t.interleaved;s===null?(i.next=i,nu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=bf(e,t,i,r),n!==null&&(i=nt(),Tt(n,e,r,i),lp(n,t,r))}}function op(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function ap(e,t){ai=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}var Vo={readContext:kt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Eg={readContext:kt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,go(4194308,4,qf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){return go(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wg.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Cc,useDebugValue:du,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Cc(!1),t=e[0];return e=xg.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Ut();if(Ee){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Be===null)throw Error(O(349));jn&30||Jf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ac(Wf.bind(null,r,o,e),[e]),r.flags|=2048,Pi(9,Gf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Be.identifierPrefix;if(Ee){var n=Kt,r=Yt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kg={readContext:kt,useCallback:tp,useContext:kt,useEffect:cu,useImperativeHandle:ep,useInsertionEffect:Zf,useLayoutEffect:Xf,useMemo:np,useReducer:tl,useRef:Kf,useState:function(){return tl(Ri)},useDebugValue:du,useDeferredValue:function(e){var t=Ct();return rp(t,ze.memoizedState,e)},useTransition:function(){var e=tl(Ri)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Vf,useId:ip,unstable_isNewReconciler:!1},Cg={readContext:kt,useCallback:tp,useContext:kt,useEffect:cu,useImperativeHandle:ep,useInsertionEffect:Zf,useLayoutEffect:Xf,useMemo:np,useReducer:nl,useRef:Kf,useState:function(){return nl(Ri)},useDebugValue:du,useDeferredValue:function(e){var t=Ct();return ze===null?t.memoizedState=e:rp(t,ze.memoizedState,e)},useTransition:function(){var e=nl(Ri)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Vf,useId:ip,unstable_isNewReconciler:!1};function Pr(e,t){try{var n="",r=t;do n+=Xh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ss(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ag=typeof WeakMap=="function"?WeakMap:Map;function sp(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,ys=r),ss(e,t)},n}function up(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ss(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ss(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Rc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ag;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fg.bind(null,e,t,n),t.then(e,e))}function Pc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $c(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var Rg=on.ReactCurrentOwner,lt=!1;function et(e,t,n,r){t.child=e===null?jf(t,null,n,r):Ar(t,e.child,n,r)}function Oc(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=su(e,t,n,r,o,i),n=uu(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&n&&Ks(t),t.flags|=1,et(e,t,r,i),t.child)}function Dc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,cp(e,t,o,r,i)):(e=wo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(a,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=En(o,r),e.ref=t.ref,e.return=t,t.child=e}function cp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xi(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,nn(e,t,i)}return us(e,t,n,r,i)}function dp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(dr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(dr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(dr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(dr,ft),ft|=r;return et(e,t,i,n),t.child}function fp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function us(e,t,n,r,i){var o=ut(n)?Fn:qe.current;return o=kr(t,o),xr(t,i),n=su(e,t,n,r,o,i),r=uu(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&r&&Ks(t),t.flags|=1,et(e,t,n,i),t.child)}function Lc(e,t,n,r,i){if(ut(n)){var o=!0;bo(t)}else o=!1;if(xr(t,i),t.stateNode===null)vo(e,t),Ff(t,n,r),ls(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=kt(c):(c=ut(n)?Fn:qe.current,c=kr(t,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Ec(t,a,r,c),cn=!1;var v=t.memoizedState;a.state=v,jo(t,r,a,i),s=t.memoizedState,l!==r||v!==s||st.current||cn?(typeof f=="function"&&(as(t,n,f,r),s=t.memoizedState),(l=cn||Sc(t,n,l,r,v,s,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,zf(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ot(t.type,l),a.props=c,m=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=kt(s):(s=ut(n)?Fn:qe.current,s=kr(t,s));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||v!==s)&&Ec(t,a,r,s),cn=!1,v=t.memoizedState,a.state=v,jo(t,r,a,i);var E=t.memoizedState;l!==m||v!==E||st.current||cn?(typeof k=="function"&&(as(t,n,k,r),E=t.memoizedState),(c=cn||Sc(t,n,c,r,v,E,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,E,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,E,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),a.props=r,a.state=E,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return cs(e,t,n,r,o,i)}function cs(e,t,n,r,i,o){fp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&gc(t,n,!1),nn(e,t,o);r=t.stateNode,Rg.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ar(t,e.child,null,o),t.child=Ar(t,null,l,o)):et(e,t,l,o),t.memoizedState=r.state,i&&gc(t,n,!0),t.child}function pp(e){var t=e.stateNode;t.pendingContext?mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mc(e,t.context,!1),iu(e,t.containerInfo)}function Nc(e,t,n,r,i){return Cr(),Xs(i),t.flags|=256,et(e,t,n,r),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function hp(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Ce,i&1),e===null)return is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=fa(a,r,0,null),e=_n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fs(n),t.memoizedState=ds,e):fu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Pg(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=En(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=En(l,o):(o=_n(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?fs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ds,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fu(e,t){return t=fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qi(e,t,n,r){return r!==null&&Xs(r),Ar(t,e.child,null,n),e=fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pg(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(O(422))),qi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fa({mode:"visible",children:r.children},i,0,null),o=_n(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ar(t,e.child,null,a),t.child.memoizedState=fs(a),t.memoizedState=ds,o);if(!(t.mode&1))return qi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(O(419)),r=rl(o,r,void 0),qi(e,t,a,r)}if(l=(a&e.childLanes)!==0,lt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),Tt(r,e,i,-1))}return yu(),r=rl(Error(O(421))),qi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ug.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=yn(i.nextSibling),ht=t,Ee=!0,Lt=null,e!==null&&(xt[wt++]=Yt,xt[wt++]=Kt,xt[wt++]=Un,Yt=e.id,Kt=e.overflow,Un=t),t=fu(t,r.children),t.flags|=4096,t)}function Mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),os(e.return,t,n)}function il(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function mp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mc(e,n,t);else if(e.tag===19)Mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),il(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}il(t,!0,n,null,o);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $g(e,t,n){switch(t.tag){case 3:pp(t),Cr();break;case 5:Bf(t);break;case 1:ut(t.type)&&bo(t);break;case 4:iu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?hp(e,t,n):(he(Ce,Ce.current&1),e=nn(e,t,n),e!==null?e.sibling:null);he(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,dp(e,t,n)}return nn(e,t,n)}var gp,ps,vp,yp;gp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ps=function(){};vp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(Vt.current);var o=null;switch(n){case"input":i=Il(e,i),r=Il(e,r),o=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":i=_l(e,i),r=_l(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=To)}Ul(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ge("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};yp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Og(e,t,n){var r=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ut(t.type)&&Io(),Ze(t),null;case 3:return r=t.stateNode,Rr(),ve(st),ve(qe),au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(Ss(Lt),Lt=null))),ps(e,t),Ze(t),null;case 5:ou(t);var i=In(Ci.current);if(n=t.type,e!==null&&t.stateNode!=null)vp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ze(t),null}if(e=In(Vt.current),Zi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Bt]=t,r[Ei]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)ge(ei[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Bu(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Vu(r,o),ge("invalid",r)}Ul(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ki(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ki(r.textContent,l,e),i=["children",""+l]):fi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":Bi(r),Hu(r,o,!0);break;case"textarea":Bi(r),Ju(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=To)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Bt]=t,e[Ei]=r,gp(e,t,!1,!1),t.stateNode=e;e:{switch(a=jl(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)ge(ei[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Bu(e,r),i=Il(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Vu(e,r),i=_l(e,r),ge("invalid",e);break;default:i=r}Ul(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Wd(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Jd(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&pi(e,s):typeof s=="number"&&pi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&bs(e,o,s,a))}switch(n){case"input":Bi(e),Hu(e,r,!1);break;case"textarea":Bi(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=To)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)yp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=In(Ci.current),In(Vt.current),Zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&pt!==null&&t.mode&1&&!(t.flags&128))If(),Cr(),t.flags|=98560,o=!1;else if(o=Zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[Bt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else Lt!==null&&(Ss(Lt),Lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?_e===0&&(_e=3):yu())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Rr(),ps(e,t),e===null&&wi(t.stateNode.containerInfo),Ze(t),null;case 10:return tu(t.type._context),Ze(t),null;case 17:return ut(t.type)&&Io(),Ze(t),null;case 19:if(ve(Ce),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Gr(o,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bo(e),a!==null){for(t.flags|=128,Gr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Le()>$r&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ee)return Ze(t),null}else 2*Le()-o.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Le(),t.sibling=null,n=Ce.current,he(Ce,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return vu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function Dg(e,t){switch(Zs(t),t.tag){case 1:return ut(t.type)&&Io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),ve(st),ve(qe),au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ou(t),null;case 13:if(ve(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ce),null;case 4:return Rr(),null;case 10:return tu(t.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var eo=!1,Xe=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,F=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function hs(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var Tc=!1;function Ng(e,t){if(Zl=Lo,e=Ef(),Ys(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,f=0,m=e,v=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==o||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(k=m.firstChild)!==null;)v=m,m=k;for(;;){if(m===e)break t;if(v===n&&++c===i&&(l=a),v===o&&++f===r&&(s=a),(k=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=k}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xl={focusedElem:e,selectionRange:n},Lo=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var x=E.memoizedProps,g=E.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ot(t.type,x),g);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(w){Pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return E=Tc,Tc=!1,E}function li(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hs(t,n,o)}i=i.next}while(i!==r)}}function ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ms(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xp(e){var t=e.alternate;t!==null&&(e.alternate=null,xp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[Ei],delete t[ts],delete t[hg],delete t[mg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wp(e){return e.tag===5||e.tag===3||e.tag===4}function Ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=To));else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}var Ge=null,Dt=!1;function sn(e,t,n){for(n=n.child;n!==null;)Sp(e,t,n),n=n.sibling}function Sp(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:Xe||cr(n,t);case 6:var r=Ge,i=Dt;Ge=null,sn(e,t,n),Ge=r,Dt=i,Ge!==null&&(Dt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Dt?(e=Ge,n=n.stateNode,e.nodeType===8?Za(e.parentNode,n):e.nodeType===1&&Za(e,n),vi(e)):Za(Ge,n.stateNode));break;case 4:r=Ge,i=Dt,Ge=n.stateNode.containerInfo,Dt=!0,sn(e,t,n),Ge=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&hs(n,t,a),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!Xe&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,t,l)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,sn(e,t,n),Xe=r):sn(e,t,n);break;default:sn(e,t,n)}}function bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lg),t.forEach(function(r){var i=jg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Dt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Dt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Dt=!0;break e}l=l.return}if(Ge===null)throw Error(O(160));Sp(o,a,i),Ge=null,Dt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Pe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ep(t,e),t=t.sibling}function Ep(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),Ft(e),r&4){try{li(3,e,e.return),ca(3,e)}catch(x){Pe(e,e.return,x)}try{li(5,e,e.return)}catch(x){Pe(e,e.return,x)}}break;case 1:$t(t,e),Ft(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if($t(t,e),Ft(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(x){Pe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Bd(i,o),jl(l,a);var c=jl(l,o);for(a=0;a<s.length;a+=2){var f=s[a],m=s[a+1];f==="style"?Wd(i,m):f==="dangerouslySetInnerHTML"?Jd(i,m):f==="children"?pi(i,m):bs(i,f,m,c)}switch(l){case"input":bl(i,o);break;case"textarea":Hd(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?mr(i,!!o.multiple,k,!1):v!==!!o.multiple&&(o.defaultValue!=null?mr(i,!!o.multiple,o.defaultValue,!0):mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ei]=o}catch(x){Pe(e,e.return,x)}}break;case 6:if($t(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Pe(e,e.return,x)}}break;case 3:if($t(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(x){Pe(e,e.return,x)}break;case 4:$t(t,e),Ft(e);break;case 13:$t(t,e),Ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(mu=Le())),r&4&&bc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(c=Xe)||f,$t(t,e),Xe=c):$t(t,e),Ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(F=e,f=e.child;f!==null;){for(m=F=f;F!==null;){switch(v=F,k=v.child,v.tag){case 0:case 11:case 14:case 15:li(4,v,v.return);break;case 1:cr(v,v.return);var E=v.stateNode;if(typeof E.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(x){Pe(r,n,x)}}break;case 5:cr(v,v.return);break;case 22:if(v.memoizedState!==null){_c(m);continue}}k!==null?(k.return=v,F=k):_c(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Gd("display",a))}catch(x){Pe(e,e.return,x)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){Pe(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:$t(t,e),Ft(e),r&4&&bc(e);break;case 21:break;default:$t(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wp(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pi(i,""),r.flags&=-33);var o=Ic(e);vs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ic(e);gs(e,l,a);break;default:throw Error(O(161))}}catch(s){Pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mg(e,t,n){F=e,kp(e)}function kp(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||eo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Xe;l=eo;var c=Xe;if(eo=a,(Xe=s)&&!c)for(F=i;F!==null;)a=F,s=a.child,a.tag===22&&a.memoizedState!==null?Fc(i):s!==null?(s.return=a,F=s):Fc(i);for(;o!==null;)F=o,kp(o),o=o.sibling;F=i,eo=l,Xe=c}zc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):zc(e)}}function zc(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||ca(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&vi(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Xe||t.flags&512&&ms(t)}catch(v){Pe(t,t.return,v)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function _c(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Fc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ca(4,t)}catch(s){Pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Pe(t,i,s)}}var o=t.return;try{ms(t)}catch(s){Pe(t,o,s)}break;case 5:var a=t.return;try{ms(t)}catch(s){Pe(t,a,s)}}}catch(s){Pe(t,t.return,s)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var Tg=Math.ceil,Jo=on.ReactCurrentDispatcher,pu=on.ReactCurrentOwner,Et=on.ReactCurrentBatchConfig,se=0,Be=null,Me=null,We=0,ft=0,dr=$n(0),_e=0,$i=null,Bn=0,da=0,hu=0,si=null,at=null,mu=0,$r=1/0,Gt=null,Go=!1,ys=null,wn=null,to=!1,hn=null,Wo=0,ui=0,xs=null,yo=-1,xo=0;function nt(){return se&6?Le():yo!==-1?yo:yo=Le()}function Sn(e){return e.mode&1?se&2&&We!==0?We&-We:vg.transition!==null?(xo===0&&(xo=af()),xo):(e=de,e!==0||(e=window.event,e=e===void 0?16:pf(e.type)),e):1}function Tt(e,t,n,r){if(50<ui)throw ui=0,xs=null,Error(O(185));Mi(e,n,r),(!(se&2)||e!==Be)&&(e===Be&&(!(se&2)&&(da|=n),_e===4&&fn(e,We)),ct(e,r),n===1&&se===0&&!(t.mode&1)&&($r=Le()+500,la&&On()))}function ct(e,t){var n=e.callbackNode;vm(e,t);var r=Do(e,e===Be?We:0);if(r===0)n!==null&&Qu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qu(n),t===1)e.tag===0?gg(Uc.bind(null,e)):Nf(Uc.bind(null,e)),fg(function(){!(se&6)&&On()}),n=null;else{switch(lf(r)){case 1:n=js;break;case 4:n=rf;break;case 16:n=Oo;break;case 536870912:n=of;break;default:n=Oo}n=Lp(n,Cp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cp(e,t){if(yo=-1,xo=0,se&6)throw Error(O(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Do(e,e===Be?We:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qo(e,r);else{t=r;var i=se;se|=2;var o=Rp();(Be!==e||We!==t)&&(Gt=null,$r=Le()+500,zn(e,t));do try{zg();break}catch(l){Ap(e,l)}while(1);eu(),Jo.current=o,se=i,Me!==null?t=0:(Be=null,We=0,t=_e)}if(t!==0){if(t===2&&(i=Gl(e),i!==0&&(r=i,t=ws(e,i))),t===1)throw n=$i,zn(e,0),fn(e,r),ct(e,Le()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ig(i)&&(t=Qo(e,r),t===2&&(o=Gl(e),o!==0&&(r=o,t=ws(e,o))),t===1))throw n=$i,zn(e,0),fn(e,r),ct(e,Le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Nn(e,at,Gt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=mu+500-Le(),10<t)){if(Do(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=es(Nn.bind(null,e,at,Gt),t);break}Nn(e,at,Gt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tg(r/1960))-r,10<r){e.timeoutHandle=es(Nn.bind(null,e,at,Gt),r);break}Nn(e,at,Gt);break;case 5:Nn(e,at,Gt);break;default:throw Error(O(329))}}}return ct(e,Le()),e.callbackNode===n?Cp.bind(null,e):null}function ws(e,t){var n=si;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=at,at=n,t!==null&&Ss(t)),e}function Ss(e){at===null?at=e:at.push.apply(at,e)}function Ig(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~hu,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function Uc(e){if(se&6)throw Error(O(327));wr();var t=Do(e,0);if(!(t&1))return ct(e,Le()),null;var n=Qo(e,t);if(e.tag!==0&&n===2){var r=Gl(e);r!==0&&(t=r,n=ws(e,r))}if(n===1)throw n=$i,zn(e,0),fn(e,t),ct(e,Le()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,at,Gt),ct(e,Le()),null}function gu(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&($r=Le()+500,la&&On())}}function Hn(e){hn!==null&&hn.tag===0&&!(se&6)&&wr();var t=se;se|=1;var n=Et.transition,r=de;try{if(Et.transition=null,de=1,e)return e()}finally{de=r,Et.transition=n,se=t,!(se&6)&&On()}}function vu(){ft=dr.current,ve(dr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dg(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Io();break;case 3:Rr(),ve(st),ve(qe),au();break;case 5:ou(r);break;case 4:Rr();break;case 13:ve(Ce);break;case 19:ve(Ce);break;case 10:tu(r.type._context);break;case 22:case 23:vu()}n=n.return}if(Be=e,Me=e=En(e.current,null),We=ft=t,_e=0,$i=null,hu=da=Bn=0,at=si=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Tn=null}return e}function Ap(e,t){do{var n=Me;try{if(eu(),mo.current=Vo,Ho){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(jn=0,je=ze=Ae=null,ai=!1,Ai=0,pu.current=null,n===null||n.return===null){_e=1,$i=t,Me=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=We,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Pc(a);if(k!==null){k.flags&=-257,$c(k,a,l,o,t),k.mode&1&&Rc(o,c,t),t=k,s=c;var E=t.updateQueue;if(E===null){var x=new Set;x.add(s),t.updateQueue=x}else E.add(s);break e}else{if(!(t&1)){Rc(o,c,t),yu();break e}s=Error(O(426))}}else if(Ee&&l.mode&1){var g=Pc(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),$c(g,a,l,o,t),Xs(Pr(s,l));break e}}o=s=Pr(s,l),_e!==4&&(_e=2),si===null?si=[o]:si.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=sp(o,s,t);xc(o,p);break e;case 1:l=s;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wn===null||!wn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=up(o,l,t);xc(o,w);break e}}o=o.return}while(o!==null)}$p(n)}catch(P){t=P,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function Rp(){var e=Jo.current;return Jo.current=Vo,e===null?Vo:e}function yu(){(_e===0||_e===3||_e===2)&&(_e=4),Be===null||!(Bn&268435455)&&!(da&268435455)||fn(Be,We)}function Qo(e,t){var n=se;se|=2;var r=Rp();(Be!==e||We!==t)&&(Gt=null,zn(e,t));do try{bg();break}catch(i){Ap(e,i)}while(1);if(eu(),se=n,Jo.current=r,Me!==null)throw Error(O(261));return Be=null,We=0,_e}function bg(){for(;Me!==null;)Pp(Me)}function zg(){for(;Me!==null&&!sm();)Pp(Me)}function Pp(e){var t=Dp(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?$p(e):Me=t,pu.current=null}function $p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dg(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Me=null;return}}else if(n=Og(n,t,ft),n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);_e===0&&(_e=5)}function Nn(e,t,n){var r=de,i=Et.transition;try{Et.transition=null,de=1,_g(e,t,n,r)}finally{Et.transition=i,de=r}return null}function _g(e,t,n,r){do wr();while(hn!==null);if(se&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ym(e,o),e===Be&&(Me=Be=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,Lp(Oo,function(){return wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Et.transition,Et.transition=null;var a=de;de=1;var l=se;se|=4,pu.current=null,Ng(e,n),Ep(n,e),ig(Xl),Lo=!!Zl,Xl=Zl=null,e.current=n,Mg(n),um(),se=l,de=a,Et.transition=o}else e.current=n;if(to&&(to=!1,hn=e,Wo=i),o=e.pendingLanes,o===0&&(wn=null),fm(n.stateNode),ct(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Go)throw Go=!1,e=ys,ys=null,e;return Wo&1&&e.tag!==0&&wr(),o=e.pendingLanes,o&1?e===xs?ui++:(ui=0,xs=e):ui=0,On(),null}function wr(){if(hn!==null){var e=lf(Wo),t=Et.transition,n=de;try{if(Et.transition=null,de=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,Wo=0,se&6)throw Error(O(331));var i=se;for(se|=4,F=e.current;F!==null;){var o=F,a=o.child;if(F.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(F=c;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:li(8,f,o)}var m=f.child;if(m!==null)m.return=f,F=m;else for(;F!==null;){f=F;var v=f.sibling,k=f.return;if(xp(f),f===c){F=null;break}if(v!==null){v.return=k,F=v;break}F=k}}}var E=o.alternate;if(E!==null){var x=E.child;if(x!==null){E.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}F=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,F=a;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:li(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,F=p;break e}F=o.return}}var d=e.current;for(F=d;F!==null;){a=F;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,F=h;else e:for(a=d;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ca(9,l)}}catch(P){Pe(l,l.return,P)}if(l===a){F=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,F=w;break e}F=l.return}}if(se=i,On(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(na,e)}catch{}r=!0}return r}finally{de=n,Et.transition=t}}return!1}function jc(e,t,n){t=Pr(n,t),t=sp(e,t,1),e=xn(e,t,1),t=nt(),e!==null&&(Mi(e,1,t),ct(e,t))}function Pe(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Pr(n,e),e=up(t,e,1),t=xn(t,e,1),e=nt(),t!==null&&(Mi(t,1,e),ct(t,e));break}}t=t.return}}function Fg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(We&n)===n&&(_e===4||_e===3&&(We&130023424)===We&&500>Le()-mu?zn(e,0):hu|=n),ct(e,t)}function Op(e,t){t===0&&(e.mode&1?(t=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):t=1);var n=nt();e=tn(e,t),e!==null&&(Mi(e,t,n),ct(e,n))}function Ug(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Op(e,n)}function jg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),Op(e,n)}var Dp;Dp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,$g(e,t,n);lt=!!(e.flags&131072)}else lt=!1,Ee&&t.flags&1048576&&Mf(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vo(e,t),e=t.pendingProps;var i=kr(t,qe.current);xr(t,n),i=su(null,t,r,e,i,n);var o=uu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,bo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ru(t),i.updater=sa,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=cs(null,t,r,!0,o,n)):(t.tag=0,Ee&&o&&Ks(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hg(r),e=Ot(r,e),i){case 0:t=us(null,t,r,e,n);break e;case 1:t=Lc(null,t,r,e,n);break e;case 11:t=Oc(null,t,r,e,n);break e;case 14:t=Dc(null,t,r,Ot(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),us(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Lc(e,t,r,i,n);case 3:e:{if(pp(t),e===null)throw Error(O(387));r=t.pendingProps,o=t.memoizedState,i=o.element,zf(e,t),jo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Pr(Error(O(423)),t),t=Nc(e,t,r,n,i);break e}else if(r!==i){i=Pr(Error(O(424)),t),t=Nc(e,t,r,n,i);break e}else for(pt=yn(t.stateNode.containerInfo.firstChild),ht=t,Ee=!0,Lt=null,n=jf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===i){t=nn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Bf(t),e===null&&is(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ql(r,i)?a=null:o!==null&&ql(r,o)&&(t.flags|=32),fp(e,t),et(e,t,a,n),t.child;case 6:return e===null&&is(t),null;case 13:return hp(e,t,n);case 4:return iu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Oc(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(Fo,r._currentValue),r._currentValue=a,o!==null)if(It(o.value,a)){if(o.children===i.children&&!st.current){t=nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Zt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),os(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(O(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),os(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=kt(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),Dc(e,t,r,i,n);case 15:return cp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),vo(e,t),t.tag=1,ut(r)?(e=!0,bo(t)):e=!1,xr(t,n),Ff(t,r,i),ls(t,r,i,n),cs(null,t,r,!0,e,n);case 19:return mp(e,t,n);case 22:return dp(e,t,n)}throw Error(O(156,t.tag))};function Lp(e,t){return nf(e,t)}function Bg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Bg(e,t,n,r)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hg(e){if(typeof e=="function")return xu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_s)return 11;if(e===Fs)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")xu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case tr:return _n(n.children,i,o,t);case zs:a=8,i|=8;break;case Ll:return e=St(12,n,t,i|2),e.elementType=Ll,e.lanes=o,e;case Nl:return e=St(13,n,t,i),e.elementType=Nl,e.lanes=o,e;case Ml:return e=St(19,n,t,i),e.elementType=Ml,e.lanes=o,e;case Fd:return fa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zd:a=10;break e;case _d:a=9;break e;case _s:a=11;break e;case Fs:a=14;break e;case un:a=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=St(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function _n(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function fa(e,t,n,r){return e=St(22,e,r,t),e.elementType=Fd,e.lanes=n,e.stateNode={isHidden:!1},e}function ol(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ua(0),this.expirationTimes=Ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wu(e,t,n,r,i,o,a,l,s){return e=new Vg(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(o),e}function Jg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Np(e){if(!e)return Rn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(ut(n))return Lf(e,n,t)}return t}function Mp(e,t,n,r,i,o,a,l,s){return e=wu(n,r,!0,e,i,o,a,l,s),e.context=Np(null),n=e.current,r=nt(),i=Sn(n),o=Zt(r,i),o.callback=t??null,xn(n,o,i),e.current.lanes=i,Mi(e,i,r),ct(e,r),e}function pa(e,t,n,r){var i=t.current,o=nt(),a=Sn(i);return n=Np(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,a),e!==null&&(Tt(e,i,a,o),ho(e,i,a)),a}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Su(e,t){Bc(e,t),(e=e.alternate)&&Bc(e,t)}function Gg(){return null}var Tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Eu(e){this._internalRoot=e}ha.prototype.render=Eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));pa(e,t,null,null)};ha.prototype.unmount=Eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){pa(null,e,null,null)}),t[en]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=cf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&ff(e)}};function ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hc(){}function Wg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Yo(a);o.call(c)}}var a=Mp(t,r,e,0,null,!1,!1,"",Hc);return e._reactRootContainer=a,e[en]=a.current,wi(e.nodeType===8?e.parentNode:e),Hn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Yo(s);l.call(c)}}var s=wu(e,0,!1,null,null,!1,!1,"",Hc);return e._reactRootContainer=s,e[en]=s.current,wi(e.nodeType===8?e.parentNode:e),Hn(function(){pa(t,s,n,r)}),s}function ga(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Yo(a);l.call(s)}}pa(t,a,e,i)}else a=Wg(n,t,e,i,r);return Yo(a)}sf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(Bs(t,n|1),ct(t,Le()),!(se&6)&&($r=Le()+500,On()))}break;case 13:Hn(function(){var r=tn(e,1);if(r!==null){var i=nt();Tt(r,e,1,i)}}),Su(e,1)}};Hs=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=nt();Tt(t,e,134217728,n)}Su(e,134217728)}};uf=function(e){if(e.tag===13){var t=Sn(e),n=tn(e,t);if(n!==null){var r=nt();Tt(n,e,t,r)}Su(e,t)}};cf=function(){return de};df=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};Hl=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=aa(r);if(!i)throw Error(O(90));jd(r),bl(r,i)}}}break;case"textarea":Hd(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};Kd=gu;Zd=Hn;var Qg={usingClientEntryPoint:!1,Events:[Ii,or,aa,Qd,Yd,gu]},Wr={findFiberByHostInstance:Mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yg={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ef(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{na=no.inject(Yg),Ht=no}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qg;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(t))throw Error(O(200));return Jg(e,t,null,n)};gt.createRoot=function(e,t){if(!ku(e))throw Error(O(299));var n=!1,r="",i=Tp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wu(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,wi(e.nodeType===8?e.parentNode:e),new Eu(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=ef(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Hn(e)};gt.hydrate=function(e,t,n){if(!ma(t))throw Error(O(200));return ga(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!ku(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Tp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Mp(t,null,e,1,n??null,i,!1,o,a),e[en]=t.current,wi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ha(t)};gt.render=function(e,t,n){if(!ma(t))throw Error(O(200));return ga(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!ma(e))throw Error(O(40));return e._reactRootContainer?(Hn(function(){ga(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};gt.unstable_batchedUpdates=gu;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ma(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return ga(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=gt})(Gh);var Vc=$l;Pl.createRoot=Vc.createRoot,Pl.hydrateRoot=Vc.hydrateRoot;var Oi={},Kg={get exports(){return Oi},set exports(e){Oi=e}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,Cu=He?Symbol.for("react.element"):60103,Au=He?Symbol.for("react.portal"):60106,va=He?Symbol.for("react.fragment"):60107,ya=He?Symbol.for("react.strict_mode"):60108,xa=He?Symbol.for("react.profiler"):60114,wa=He?Symbol.for("react.provider"):60109,Sa=He?Symbol.for("react.context"):60110,Ru=He?Symbol.for("react.async_mode"):60111,Ea=He?Symbol.for("react.concurrent_mode"):60111,ka=He?Symbol.for("react.forward_ref"):60112,Ca=He?Symbol.for("react.suspense"):60113,Zg=He?Symbol.for("react.suspense_list"):60120,Aa=He?Symbol.for("react.memo"):60115,Ra=He?Symbol.for("react.lazy"):60116,Xg=He?Symbol.for("react.block"):60121,qg=He?Symbol.for("react.fundamental"):60117,e0=He?Symbol.for("react.responder"):60118,t0=He?Symbol.for("react.scope"):60119;function yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Cu:switch(e=e.type,e){case Ru:case Ea:case va:case xa:case ya:case Ca:return e;default:switch(e=e&&e.$$typeof,e){case Sa:case ka:case Ra:case Aa:case wa:return e;default:return t}}case Au:return t}}}function Ip(e){return yt(e)===Ea}fe.AsyncMode=Ru;fe.ConcurrentMode=Ea;fe.ContextConsumer=Sa;fe.ContextProvider=wa;fe.Element=Cu;fe.ForwardRef=ka;fe.Fragment=va;fe.Lazy=Ra;fe.Memo=Aa;fe.Portal=Au;fe.Profiler=xa;fe.StrictMode=ya;fe.Suspense=Ca;fe.isAsyncMode=function(e){return Ip(e)||yt(e)===Ru};fe.isConcurrentMode=Ip;fe.isContextConsumer=function(e){return yt(e)===Sa};fe.isContextProvider=function(e){return yt(e)===wa};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cu};fe.isForwardRef=function(e){return yt(e)===ka};fe.isFragment=function(e){return yt(e)===va};fe.isLazy=function(e){return yt(e)===Ra};fe.isMemo=function(e){return yt(e)===Aa};fe.isPortal=function(e){return yt(e)===Au};fe.isProfiler=function(e){return yt(e)===xa};fe.isStrictMode=function(e){return yt(e)===ya};fe.isSuspense=function(e){return yt(e)===Ca};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===va||e===Ea||e===xa||e===ya||e===Ca||e===Zg||typeof e=="object"&&e!==null&&(e.$$typeof===Ra||e.$$typeof===Aa||e.$$typeof===wa||e.$$typeof===Sa||e.$$typeof===ka||e.$$typeof===qg||e.$$typeof===e0||e.$$typeof===t0||e.$$typeof===Xg)};fe.typeOf=yt;(function(e){e.exports=fe})(Kg);function n0(e){function t(I,_,z,Q,S){for(var te=0,b=0,Se=0,ue=0,ie,Z,Oe=0,Fe=0,ne,De=ne=ie=0,le=0,Te=0,ln=0,Ie=0,bt=z.length,zt=bt-1,ot,W="",ke="",br="",Kn="",_t;le<bt;){if(Z=z.charCodeAt(le),le===zt&&b+ue+Se+te!==0&&(b!==0&&(Z=b===47?10:47),ue=Se=te=0,bt++,zt++),b+ue+Se+te===0){if(le===zt&&(0<Te&&(W=W.replace(v,"")),0<W.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:W+=z.charAt(le)}Z=59}switch(Z){case 123:for(W=W.trim(),ie=W.charCodeAt(0),ne=1,Ie=++le;le<bt;){switch(Z=z.charCodeAt(le)){case 123:ne++;break;case 125:ne--;break;case 47:switch(Z=z.charCodeAt(le+1)){case 42:case 47:e:{for(De=le+1;De<zt;++De)switch(z.charCodeAt(De)){case 47:if(Z===42&&z.charCodeAt(De-1)===42&&le+2!==De){le=De+1;break e}break;case 10:if(Z===47){le=De+1;break e}}le=De}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;le++<zt&&z.charCodeAt(le)!==Z;);}if(ne===0)break;le++}switch(ne=z.substring(Ie,le),ie===0&&(ie=(W=W.replace(m,"").trim()).charCodeAt(0)),ie){case 64:switch(0<Te&&(W=W.replace(v,"")),Z=W.charCodeAt(1),Z){case 100:case 109:case 115:case 45:Te=_;break;default:Te=dt}if(ne=t(_,Te,ne,Z,S+1),Ie=ne.length,0<T&&(Te=n(dt,W,ln),_t=l(3,ne,Te,_,we,xe,Ie,Z,S,Q),W=Te.join(""),_t!==void 0&&(Ie=(ne=_t.trim()).length)===0&&(Z=0,ne="")),0<Ie)switch(Z){case 115:W=W.replace(L,a);case 100:case 109:case 45:ne=W+"{"+ne+"}";break;case 107:W=W.replace(d,"$1 $2"),ne=W+"{"+ne+"}",ne=me===1||me===2&&o("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=W+ne,Q===112&&(ne=(ke+=ne,""))}else ne="";break;default:ne=t(_,n(_,W,ln),ne,Q,S+1)}br+=ne,ne=ln=Te=De=ie=0,W="",Z=z.charCodeAt(++le);break;case 125:case 59:if(W=(0<Te?W.replace(v,""):W).trim(),1<(Ie=W.length))switch(De===0&&(ie=W.charCodeAt(0),ie===45||96<ie&&123>ie)&&(Ie=(W=W.replace(" ",":")).length),0<T&&(_t=l(1,W,_,I,we,xe,ke.length,Q,S,Q))!==void 0&&(Ie=(W=_t.trim()).length)===0&&(W="\0\0"),ie=W.charCodeAt(0),Z=W.charCodeAt(1),ie){case 0:break;case 64:if(Z===105||Z===99){Kn+=W+z.charAt(le);break}default:W.charCodeAt(Ie-1)!==58&&(ke+=i(W,ie,Z,W.charCodeAt(2)))}ln=Te=De=ie=0,W="",Z=z.charCodeAt(++le)}}switch(Z){case 13:case 10:b===47?b=0:1+ie===0&&Q!==107&&0<W.length&&(Te=1,W+="\0"),0<T*U&&l(0,W,_,I,we,xe,ke.length,Q,S,Q),xe=1,we++;break;case 59:case 125:if(b+ue+Se+te===0){xe++;break}default:switch(xe++,ot=z.charAt(le),Z){case 9:case 32:if(ue+te+b===0)switch(Oe){case 44:case 58:case 9:case 32:ot="";break;default:Z!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ue+b+te===0&&(Te=ln=1,ot="\f"+ot);break;case 108:if(ue+b+te+$e===0&&0<De)switch(le-De){case 2:Oe===112&&z.charCodeAt(le-3)===58&&($e=Oe);case 8:Fe===111&&($e=Fe)}break;case 58:ue+b+te===0&&(De=le);break;case 44:b+Se+ue+te===0&&(Te=1,ot+="\r");break;case 34:case 39:b===0&&(ue=ue===Z?0:ue===0?Z:ue);break;case 91:ue+b+Se===0&&te++;break;case 93:ue+b+Se===0&&te--;break;case 41:ue+b+te===0&&Se--;break;case 40:if(ue+b+te===0){if(ie===0)switch(2*Oe+3*Fe){case 533:break;default:ie=1}Se++}break;case 64:b+Se+ue+te+De+ne===0&&(ne=1);break;case 42:case 47:if(!(0<ue+te+Se))switch(b){case 0:switch(2*Z+3*z.charCodeAt(le+1)){case 235:b=47;break;case 220:Ie=le,b=42}break;case 42:Z===47&&Oe===42&&Ie+2!==le&&(z.charCodeAt(Ie+2)===33&&(ke+=z.substring(Ie,le+1)),ot="",b=0)}}b===0&&(W+=ot)}Fe=Oe,Oe=Z,le++}if(Ie=ke.length,0<Ie){if(Te=_,0<T&&(_t=l(2,ke,Te,I,we,xe,Ie,Q,S,Q),_t!==void 0&&(ke=_t).length===0))return Kn+ke+br;if(ke=Te.join(",")+"{"+ke+"}",me*$e!==0){switch(me!==2||o(ke,2)||($e=0),$e){case 111:ke=ke.replace(w,":-moz-$1")+ke;break;case 112:ke=ke.replace(h,"::-webkit-input-$1")+ke.replace(h,"::-moz-$1")+ke.replace(h,":-ms-input-$1")+ke}$e=0}}return Kn+ke+br}function n(I,_,z){var Q=_.trim().split(g);_=Q;var S=Q.length,te=I.length;switch(te){case 0:case 1:var b=0;for(I=te===0?"":I[0]+" ";b<S;++b)_[b]=r(I,_[b],z).trim();break;default:var Se=b=0;for(_=[];b<S;++b)for(var ue=0;ue<te;++ue)_[Se++]=r(I[ue]+" ",Q[b],z).trim()}return _}function r(I,_,z){var Q=_.charCodeAt(0);switch(33>Q&&(Q=(_=_.trim()).charCodeAt(0)),Q){case 38:return _.replace(p,"$1"+I.trim());case 58:return I.trim()+_.replace(p,"$1"+I.trim());default:if(0<1*z&&0<_.indexOf("\f"))return _.replace(p,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+_}function i(I,_,z,Q){var S=I+";",te=2*_+3*z+4*Q;if(te===944){I=S.indexOf(":",9)+1;var b=S.substring(I,S.length-1).trim();return b=S.substring(0,I).trim()+b+";",me===1||me===2&&o(b,1)?"-webkit-"+b+b:b}if(me===0||me===2&&!o(S,1))return S;switch(te){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(ye,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return b=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+S+"-ms-flex-pack"+b+S;case 1005:return E.test(S)?S.replace(k,":-webkit-")+S.replace(k,":-moz-")+S:S;case 1e3:switch(b=S.substring(13).trim(),_=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(_)){case 226:b=S.replace(P,"tb");break;case 232:b=S.replace(P,"tb-rl");break;case 220:b=S.replace(P,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+b+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(_=(S=I).length-10,b=(S.charCodeAt(_)===33?S.substring(0,_):S).substring(I.indexOf(":",7)+1).trim(),te=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:S=S.replace(b,"-webkit-"+b)+";"+S;break;case 207:case 102:S=S.replace(b,"-webkit-"+(102<te?"inline-":"")+"box")+";"+S.replace(b,"-webkit-"+b)+";"+S.replace(b,"-ms-"+b+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return b=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+b+"-ms-flex-"+b+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(D,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(D,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(V.test(I)===!0)return(b=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?i(I.replace("stretch","fill-available"),_,z,Q).replace(":fill-available",":stretch"):S.replace(b,"-webkit-"+b)+S.replace(b,"-moz-"+b.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,z+Q===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+S}return S}function o(I,_){var z=I.indexOf(_===1?":":"{"),Q=I.substring(0,_!==3?z:10);return z=I.substring(z+1,I.length-1),J(_!==2?Q:Q.replace(ee,"$1"),z,_)}function a(I,_){var z=i(_,_.charCodeAt(0),_.charCodeAt(1),_.charCodeAt(2));return z!==_+";"?z.replace(N," or ($1)").substring(4):"("+_+")"}function l(I,_,z,Q,S,te,b,Se,ue,ie){for(var Z=0,Oe=_,Fe;Z<T;++Z)switch(Fe=Ve[Z].call(f,I,Oe,z,Q,S,te,b,Se,ue,ie)){case void 0:case!1:case!0:case null:break;default:Oe=Fe}if(Oe!==_)return Oe}function s(I){switch(I){case void 0:case null:T=Ve.length=0;break;default:if(typeof I=="function")Ve[T++]=I;else if(typeof I=="object")for(var _=0,z=I.length;_<z;++_)s(I[_]);else U=!!I|0}return s}function c(I){return I=I.prefix,I!==void 0&&(J=null,I?typeof I!="function"?me=1:(me=2,J=I):me=0),c}function f(I,_){var z=I;if(33>z.charCodeAt(0)&&(z=z.trim()),ae=z,z=[ae],0<T){var Q=l(-1,_,z,z,we,xe,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(_=Q)}var S=t(dt,z,_,0,0);return 0<T&&(Q=l(-2,S,z,z,we,xe,S.length,0,0,0),Q!==void 0&&(S=Q)),ae="",$e=0,xe=we=1,S}var m=/^\0+/g,v=/[\0\r\f]/g,k=/: */g,E=/zoo|gra/,x=/([,: ])(transform)/g,g=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,w=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,L=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,D=/-self|flex-/g,ee=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,ye=/([^-])(image-set\()/,xe=1,we=1,$e=0,me=1,dt=[],Ve=[],T=0,J=null,U=0,ae="";return f.use=s,f.set=c,e!==void 0&&c(e),f}var r0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function i0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var o0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Jc=i0(function(e){return o0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Pu=Oi,a0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$u={};$u[Pu.ForwardRef]=s0;$u[Pu.Memo]=bp;function Gc(e){return Pu.isMemo(e)?bp:$u[e.$$typeof]||a0}var u0=Object.defineProperty,c0=Object.getOwnPropertyNames,Wc=Object.getOwnPropertySymbols,d0=Object.getOwnPropertyDescriptor,f0=Object.getPrototypeOf,Qc=Object.prototype;function zp(e,t,n){if(typeof t!="string"){if(Qc){var r=f0(t);r&&r!==Qc&&zp(e,r,n)}var i=c0(t);Wc&&(i=i.concat(Wc(t)));for(var o=Gc(e),a=Gc(t),l=0;l<i.length;++l){var s=i[l];if(!l0[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var c=d0(t,s);try{u0(e,s,c)}catch{}}}}return e}var p0=zp;function Nt(){return(Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Yc=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Es=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Oi.typeOf(e)},Ko=Object.freeze([]),kn=Object.freeze({});function Or(e){return typeof e=="function"}function Kc(e){return e.displayName||e.name||"Component"}function Ou(e){return e&&typeof e.styledComponentId=="string"}var Dr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Du=typeof window<"u"&&"HTMLElement"in window,h0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),m0={};function Vn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var g0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Vn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),c=0,f=r.length;c<f;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),So=new Map,Zo=new Map,ci=1,ro=function(e){if(So.has(e))return So.get(e);for(;Zo.has(ci);)ci++;var t=ci++;return So.set(e,t),Zo.set(t,e),t},v0=function(e){return Zo.get(e)},y0=function(e,t){t>=ci&&(ci=t+1),So.set(e,t),Zo.set(t,e)},x0="style["+Dr+'][data-styled-version="5.3.9"]',w0=new RegExp("^"+Dr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),S0=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},E0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(w0);if(l){var s=0|parseInt(l[1],10),c=l[2];s!==0&&(y0(c,s),S0(e,c,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},k0=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},_p=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,c=s.length;c>=0;c--){var f=s[c];if(f&&f.nodeType===1&&f.hasAttribute(Dr))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Dr,"active"),r.setAttribute("data-styled-version","5.3.9");var a=k0();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},C0=function(){function e(n){var r=this.element=_p(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}Vn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),A0=function(){function e(n){var r=this.element=_p(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),R0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Zc=Du,P0={isServer:!Du,useCSSOMInjection:!h0},Xo=function(){function e(n,r,i){n===void 0&&(n=kn),r===void 0&&(r={}),this.options=Nt({},P0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Du&&Zc&&(Zc=!1,function(o){for(var a=document.querySelectorAll(x0),l=0,s=a.length;l<s;l++){var c=a[l];c&&c.getAttribute(Dr)!=="active"&&(E0(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return ro(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Nt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new R0(a):o?new C0(a):new A0(a),new g0(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ro(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ro(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ro(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=v0(a);if(l!==void 0){var s=n.names.get(l),c=r.getGroup(a);if(s&&c&&s.size){var f=Dr+".g"+a+'[id="'+l+'"]',m="";s!==void 0&&s.forEach(function(v){v.length>0&&(m+=v+",")}),o+=""+c+f+'{content:"'+m+`"}/*!sc*/
`}}}return o}(this)},e}(),$0=/(a)(d)/gi,Xc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ks(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Xc(t%52)+n;return(Xc(t%52)+n).replace($0,"$1-$2")}var fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Fp=function(e){return fr(5381,e)};function Up(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Or(n)&&!Ou(n))return!1}return!0}var O0=Fp("5.3.9"),D0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Up(t),this.componentId=n,this.baseHash=fr(O0,n),this.baseStyle=r,Xo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Jn(this.rules,t,n,r).join(""),l=ks(fr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,f=fr(this.baseHash,r.hash),m="",v=0;v<c;v++){var k=this.rules[v];if(typeof k=="string")m+=k;else if(k){var E=Jn(k,t,n,r),x=Array.isArray(E)?E.join(""):E;f=fr(f,x+v),m+=x}}if(m){var g=ks(f>>>0);if(!n.hasNameForId(i,g)){var p=r(m,"."+g,void 0,i);n.insertRules(i,g,p)}o.push(g)}}return o.join(" ")},e}(),L0=/^\s*\/\/.*$/gm,N0=[":","[",".","#"];function M0(e){var t,n,r,i,o=e===void 0?kn:e,a=o.options,l=a===void 0?kn:a,s=o.plugins,c=s===void 0?Ko:s,f=new n0(l),m=[],v=function(x){function g(p){if(p)try{x(p+"}")}catch{}}return function(p,d,h,w,P,L,N,D,ee,V){switch(p){case 1:if(ee===0&&d.charCodeAt(0)===64)return x(d+";"),"";break;case 2:if(D===0)return d+"/*|*/";break;case 3:switch(D){case 102:case 112:return x(h[0]+d),"";default:return d+(V===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(g)}}}(function(x){m.push(x)}),k=function(x,g,p){return g===0&&N0.indexOf(p[n.length])!==-1||p.match(i)?x:"."+t};function E(x,g,p,d){d===void 0&&(d="&");var h=x.replace(L0,""),w=g&&p?p+" "+g+" { "+h+" }":h;return t=d,n=g,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(p||!g?"":g,w)}return f.use([].concat(c,[function(x,g,p){x===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,k))},v,function(x){if(x===-2){var g=m;return m=[],g}}])),E.hash=c.length?c.reduce(function(x,g){return g.name||Vn(15),fr(x,g.name)},5381).toString():"",E}var jp=tt.createContext();jp.Consumer;var Bp=tt.createContext(),T0=(Bp.Consumer,new Xo),Cs=M0();function Hp(){return M.useContext(jp)||T0}function Vp(){return M.useContext(Bp)||Cs}var I0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Cs);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Vn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Cs),this.name+t.hash},e}(),b0=/([A-Z])/,z0=/([A-Z])/g,_0=/^ms-/,F0=function(e){return"-"+e.toLowerCase()};function qc(e){return b0.test(e)?e.replace(z0,F0).replace(_0,"-ms-"):e}var ed=function(e){return e==null||e===!1||e===""};function Jn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Jn(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(ed(e))return"";if(Ou(e))return"."+e.styledComponentId;if(Or(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return Jn(s,t,n,r)}var c;return e instanceof I0?n?(e.inject(n,r),e.getName(r)):e:Es(e)?function f(m,v){var k,E,x=[];for(var g in m)m.hasOwnProperty(g)&&!ed(m[g])&&(Array.isArray(m[g])&&m[g].isCss||Or(m[g])?x.push(qc(g)+":",m[g],";"):Es(m[g])?x.push.apply(x,f(m[g],g)):x.push(qc(g)+": "+(k=g,(E=m[g])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||k in r0?String(E).trim():E+"px")+";"));return v?[v+" {"].concat(x,["}"]):x}(e):e.toString()}var td=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Jp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Or(e)||Es(e)?td(Jn(Yc(Ko,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:td(Jn(Yc(e,n)))}var Gp=function(e,t,n){return n===void 0&&(n=kn),e.theme!==n.theme&&e.theme||t||n.theme},U0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,j0=/(^-|-$)/g;function ll(e){return e.replace(U0,"-").replace(j0,"")}var Wp=function(e){return ks(Fp(e)>>>0)};function io(e){return typeof e=="string"&&!0}var As=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},B0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function H0(e,t,n){var r=e[n];As(t)&&As(r)?Qp(r,t):e[n]=t}function Qp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(As(a))for(var l in a)B0(l)&&H0(e,a[l],l)}return e}var Di=tt.createContext();Di.Consumer;function V0(e){var t=M.useContext(Di),n=M.useMemo(function(){return function(r,i){if(!r)return Vn(14);if(Or(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Vn(8):i?Nt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?tt.createElement(Di.Provider,{value:n},e.children):null}var sl={};function Yp(e,t,n){var r=Ou(e),i=!io(e),o=t.attrs,a=o===void 0?Ko:o,l=t.componentId,s=l===void 0?function(d,h){var w=typeof d!="string"?"sc":ll(d);sl[w]=(sl[w]||0)+1;var P=w+"-"+Wp("5.3.9"+w+sl[w]);return h?h+"-"+P:P}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(d){return io(d)?"styled."+d:"Styled("+Kc(d)+")"}(e):c,m=t.displayName&&t.componentId?ll(t.displayName)+"-"+t.componentId:t.componentId||s,v=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(d,h,w){return e.shouldForwardProp(d,h,w)&&t.shouldForwardProp(d,h,w)}:e.shouldForwardProp);var E,x=new D0(n,m,r?e.componentStyle:void 0),g=x.isStatic&&a.length===0,p=function(d,h){return function(w,P,L,N){var D=w.attrs,ee=w.componentStyle,V=w.defaultProps,ye=w.foldedComponentIds,xe=w.shouldForwardProp,we=w.styledComponentId,$e=w.target,me=function(Q,S,te){Q===void 0&&(Q=kn);var b=Nt({},S,{theme:Q}),Se={};return te.forEach(function(ue){var ie,Z,Oe,Fe=ue;for(ie in Or(Fe)&&(Fe=Fe(b)),Fe)b[ie]=Se[ie]=ie==="className"?(Z=Se[ie],Oe=Fe[ie],Z&&Oe?Z+" "+Oe:Z||Oe):Fe[ie]}),[b,Se]}(Gp(P,M.useContext(Di),V)||kn,P,D),dt=me[0],Ve=me[1],T=function(Q,S,te,b){var Se=Hp(),ue=Vp(),ie=S?Q.generateAndInjectStyles(kn,Se,ue):Q.generateAndInjectStyles(te,Se,ue);return ie}(ee,N,dt),J=L,U=Ve.$as||P.$as||Ve.as||P.as||$e,ae=io(U),I=Ve!==P?Nt({},P,{},Ve):P,_={};for(var z in I)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?_.as=I[z]:(xe?xe(z,Jc,U):!ae||Jc(z))&&(_[z]=I[z]));return P.style&&Ve.style!==P.style&&(_.style=Nt({},P.style,{},Ve.style)),_.className=Array.prototype.concat(ye,we,T!==we?T:null,P.className,Ve.className).filter(Boolean).join(" "),_.ref=J,M.createElement(U,_)}(E,d,h,g)};return p.displayName=f,(E=tt.forwardRef(p)).attrs=v,E.componentStyle=x,E.displayName=f,E.shouldForwardProp=k,E.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ko,E.styledComponentId=m,E.target=r?e.target:e,E.withComponent=function(d){var h=t.componentId,w=function(L,N){if(L==null)return{};var D,ee,V={},ye=Object.keys(L);for(ee=0;ee<ye.length;ee++)D=ye[ee],N.indexOf(D)>=0||(V[D]=L[D]);return V}(t,["componentId"]),P=h&&h+"-"+(io(d)?d:ll(Kc(d)));return Yp(d,Nt({},w,{attrs:v,componentId:P}),n)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Qp({},e.defaultProps,d):d}}),Object.defineProperty(E,"toString",{value:function(){return"."+E.styledComponentId}}),i&&p0(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var Rs=function(e){return function t(n,r,i){if(i===void 0&&(i=kn),!Oi.isValidElementType(r))return Vn(1,String(r));var o=function(){return n(r,i,Jp.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Nt({},i,{},a))},o.attrs=function(a){return t(n,r,Nt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Yp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Rs[e]=Rs(e)});var J0=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Up(n),Xo.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(Jn(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Xo.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function G0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Jp.apply(void 0,[e].concat(n)),o="sc-global-"+Wp(JSON.stringify(i)),a=new J0(i,o);function l(c){var f=Hp(),m=Vp(),v=M.useContext(Di),k=M.useRef(f.allocateGSInstance(o)).current;return f.server&&s(k,c,f,v,m),M.useLayoutEffect(function(){if(!f.server)return s(k,c,f,v,m),function(){return a.removeStyles(k,f)}},[k,c,f,v,m]),null}function s(c,f,m,v,k){if(a.isStatic)a.renderStyles(c,m0,m,k);else{var E=Nt({},f,{theme:Gp(f,v,l.defaultProps)});a.renderStyles(c,E,m,k)}}return tt.memo(l)}const A=Rs,W0={title:"main",fonts:{extrasmall:16,small:18,medium:20,large:26,extralarge:36},colors:{primary:{light:"#f08",normal:"#2EB2B7",dark:"#01fe87"},secondary:{light:"#E08952",normal:"#FF8233",dark:"#AD561F"},auxiliary:{success:{normal:"#34C759",dark:"#45B661"},attention:{normal:"#FFEB3B",dark:"#CCB700"},error:{normal:"#D92626",dark:"#981B1B"}},foreground:"#D9D9D9",middleground:"#f5f5f5",background:"#292E2E",text:{title:"#000",content:"#626262",highlight:"#FFF",TitleSubArticles:"#114676"}}},Q0=M.createContext({}),Y0=({children:e})=>{const[t,n]=M.useState(W0);return y(Q0.Provider,{value:{theme:t},children:y(V0,{theme:t,children:e})})};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}var Ne;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ne||(Ne={}));const nd="popstate";function K0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Li("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rn(i)}return X0(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Z0(){return Math.random().toString(36).substr(2,8)}function rd(e,t){return{usr:e.state,key:e.key,idx:t}}function Li(e,t,n,r){return n===void 0&&(n=null),oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?an(t):t,{state:n,key:t&&t.key||r||Z0()})}function rn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function an(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function X0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Ne.Pop,s=null,c=f();c==null&&(c=0,a.replaceState(oe({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function m(){l=Ne.Pop;let g=f(),p=g==null?null:g-c;c=g,s&&s({action:l,location:x.location,delta:p})}function v(g,p){l=Ne.Push;let d=Li(x.location,g,p);n&&n(d,g),c=f()+1;let h=rd(d,c),w=x.createHref(d);try{a.pushState(h,"",w)}catch{i.location.assign(w)}o&&s&&s({action:l,location:x.location,delta:1})}function k(g,p){l=Ne.Replace;let d=Li(x.location,g,p);n&&n(d,g),c=f();let h=rd(d,c),w=x.createHref(d);a.replaceState(h,"",w),o&&s&&s({action:l,location:x.location,delta:0})}function E(g){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof g=="string"?g:rn(g);return q(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return l},get location(){return e(i,a)},listen(g){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(nd,m),s=g,()=>{i.removeEventListener(nd,m),s=null}},createHref(g){return t(i,g)},createURL:E,encodeLocation(g){let p=E(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:v,replace:k,go(g){return a.go(g)}};return x}var be;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(be||(be={}));const q0=new Set(["lazy","caseSensitive","path","id","index","children"]);function ev(e){return e.index===!0}function Kp(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(q(i.index!==!0||!i.children,"Cannot specify children on an index route"),q(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),ev(i)){let s=oe({},i,{hasErrorBoundary:t(i),id:l});return r[l]=s,s}else{let s=oe({},i,{id:l,hasErrorBoundary:t(i),children:void 0});return r[l]=s,i.children&&(s.children=Kp(i.children,t,a,r)),s}})}function pr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?an(t):t,i=zi(r.pathname||"/",n);if(i==null)return null;let o=Zp(e);tv(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=cv(o[l],pv(i));return a}function Zp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Xt([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Zp(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:sv(c,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Xp(o.path))i(o,a,s)}),t}function Xp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Xp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function tv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nv=/^:\w+$/,rv=3,iv=2,ov=1,av=10,lv=-2,id=e=>e==="*";function sv(e,t){let n=e.split("/"),r=n.length;return n.some(id)&&(r+=lv),t&&(r+=iv),n.filter(i=>!id(i)).reduce((i,o)=>i+(nv.test(o)?rv:o===""?ov:av),r)}function uv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function cv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",f=dv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!f)return null;Object.assign(r,f.params);let m=l.route;o.push({params:r,pathname:Xt([i,f.pathname]),pathnameBase:vv(Xt([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=Xt([i,f.pathnameBase]))}return o}function dv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,m)=>{if(f==="*"){let v=l[m]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[f]=hv(l[m]||"",f),c},{}),pathname:o,pathnameBase:a,pattern:e}}function fv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function pv(e){try{return decodeURI(e)}catch(t){return Lr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hv(e,t){try{return decodeURIComponent(e)}catch(n){return Lr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function zi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?an(e):e;return{pathname:n?n.startsWith("/")?n:gv(n,t):t,search:yv(r),hash:xv(i)}}function gv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ul(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pa(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=an(e):(i=oe({},e),q(!i.pathname||!i.pathname.includes("?"),ul("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),ul("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),ul("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let m=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),m-=1;i.pathname=v.join("/")}l=m>=0?t[m]:"/"}let s=mv(i,l),c=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||f)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),vv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Nu{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function qp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const eh=["post","put","patch","delete"],wv=new Set(eh),Sv=["get",...eh],Ev=new Set(Sv),kv=new Set([301,302,303,307,308]),Cv=new Set([307,308]),cl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Av={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},od={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rv=!nh,Pv=e=>!!e.hasErrorBoundary;function $v(e){q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||Pv,n={},r=Kp(e.routes,t,void 0,n),i,o=oe({v7_normalizeFormMethod:!1},e.future),a=null,l=new Set,s=null,c=null,f=null,m=e.hydrationData!=null,v=pr(r,e.history.location,e.basename),k=null;if(v==null){let C=jt(404,{pathname:e.history.location.pathname}),{matches:R,route:$}=fd(r);v=R,k={[$.id]:C}}let E=!v.some(C=>C.route.lazy)&&(!v.some(C=>C.route.loader)||e.hydrationData!=null),x,g={historyAction:e.history.action,location:e.history.location,matches:v,initialized:E,navigation:cl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||k,fetchers:new Map,blockers:new Map},p=Ne.Pop,d=!1,h,w=!1,P=!1,L=[],N=[],D=new Map,ee=0,V=-1,ye=new Map,xe=new Set,we=new Map,$e=new Map,me=new Map,dt=!1;function Ve(){return a=e.history.listen(C=>{let{action:R,location:$,delta:j}=C;if(dt){dt=!1;return}Lr(me.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=ot({currentLocation:g.location,nextLocation:$,historyAction:R});if(H&&j!=null){dt=!0,e.history.go(j*-1),zt(H,{state:"blocked",location:$,proceed(){zt(H,{state:"proceeding",proceed:void 0,reset:void 0,location:$}),e.history.go(j)},reset(){bt(H),U({blockers:new Map(x.state.blockers)})}});return}return z(R,$)}),g.initialized||z(Ne.Pop,g.location),x}function T(){a&&a(),l.clear(),h&&h.abort(),g.fetchers.forEach((C,R)=>ne(R)),g.blockers.forEach((C,R)=>bt(R))}function J(C){return l.add(C),()=>l.delete(C)}function U(C){g=oe({},g,C),l.forEach(R=>R(g))}function ae(C,R){var $,j;let H=g.actionData!=null&&g.navigation.formMethod!=null&&Wt(g.navigation.formMethod)&&g.navigation.state==="loading"&&(($=C.state)==null?void 0:$._isRedirect)!==!0,Y;R.actionData?Object.keys(R.actionData).length>0?Y=R.actionData:Y=null:H?Y=g.actionData:Y=null;let K=R.loaderData?dd(g.loaderData,R.loaderData,R.matches||[],R.errors):g.loaderData;for(let[G]of me)bt(G);let X=d===!0||g.navigation.formMethod!=null&&Wt(g.navigation.formMethod)&&((j=C.state)==null?void 0:j._isRedirect)!==!0;i&&(r=i,i=void 0),U(oe({},R,{actionData:Y,loaderData:K,historyAction:p,location:C,initialized:!0,navigation:cl,revalidation:"idle",restoreScrollPosition:Kn(C,R.matches||g.matches),preventScrollReset:X,blockers:new Map(g.blockers)})),w||p===Ne.Pop||(p===Ne.Push?e.history.push(C,C.state):p===Ne.Replace&&e.history.replace(C,C.state)),p=Ne.Pop,d=!1,w=!1,P=!1,L=[],N=[]}async function I(C,R){if(typeof C=="number"){e.history.go(C);return}let{path:$,submission:j,error:H}=ad(C,o,R),Y=g.location,K=Li(g.location,$,R&&R.state);K=oe({},K,e.history.encodeLocation(K));let X=R&&R.replace!=null?R.replace:void 0,G=Ne.Push;X===!0?G=Ne.Replace:X===!1||j!=null&&Wt(j.formMethod)&&j.formAction===g.location.pathname+g.location.search&&(G=Ne.Replace);let pe=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,ce=ot({currentLocation:Y,nextLocation:K,historyAction:G});if(ce){zt(ce,{state:"blocked",location:K,proceed(){zt(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),I(C,R)},reset(){bt(ce),U({blockers:new Map(g.blockers)})}});return}return await z(G,K,{submission:j,pendingError:H,preventScrollReset:pe,replace:R&&R.replace})}function _(){if(Oe(),U({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){z(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}z(p||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function z(C,R,$){h&&h.abort(),h=null,p=C,w=($&&$.startUninterruptedRevalidation)===!0,br(g.location,g.matches),d=($&&$.preventScrollReset)===!0;let j=i||r,H=$&&$.overrideNavigation,Y=pr(j,R,e.basename);if(!Y){let Ue=jt(404,{pathname:R.pathname}),{matches:Je,route:Rt}=fd(j);W(),ae(R,{matches:Je,loaderData:{},errors:{[Rt.id]:Ue}});return}if(Mv(g.location,R)&&!($&&$.submission&&Wt($.submission.formMethod))){ae(R,{matches:Y});return}h=new AbortController;let K=Yr(e.history,R,h.signal,$&&$.submission),X,G;if($&&$.pendingError)G={[hr(Y).route.id]:$.pendingError};else if($&&$.submission&&Wt($.submission.formMethod)){let Ue=await Q(K,R,$.submission,Y,{replace:$.replace});if(Ue.shortCircuited)return;X=Ue.pendingActionData,G=Ue.pendingActionError,H=oe({state:"loading",location:R},$.submission),K=new Request(K.url,{signal:K.signal})}let{shortCircuited:pe,loaderData:ce,errors:At}=await S(K,R,Y,H,$&&$.submission,$&&$.fetcherSubmission,$&&$.replace,X,G);pe||(h=null,ae(R,oe({matches:Y},X?{actionData:X}:{},{loaderData:ce,errors:At})))}async function Q(C,R,$,j,H){Oe();let Y=oe({state:"submitting",location:R},$);U({navigation:Y});let K,X=Ps(j,R);if(!X.route.action&&!X.route.lazy)K={type:be.error,error:jt(405,{method:C.method,pathname:R.pathname,routeId:X.route.id})};else if(K=await Qr("action",C,X,j,n,t,x.basename),C.signal.aborted)return{shortCircuited:!0};if(Sr(K)){let G;return H&&H.replace!=null?G=H.replace:G=K.location===g.location.pathname+g.location.search,await ie(g,K,{submission:$,replace:G}),{shortCircuited:!0}}if(di(K)){let G=hr(j,X.route.id);return(H&&H.replace)!==!0&&(p=Ne.Push),{pendingActionData:{},pendingActionError:{[G.route.id]:K.error}}}if(bn(K))throw jt(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:K.data}}}async function S(C,R,$,j,H,Y,K,X,G){let pe=j;pe||(pe=oe({state:"loading",location:R,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},H));let ce=H||Y?H||Y:pe.formMethod&&pe.formAction&&pe.formData&&pe.formEncType?{formMethod:pe.formMethod,formAction:pe.formAction,formData:pe.formData,formEncType:pe.formEncType}:void 0,At=i||r,[Ue,Je]=ld(e.history,g,$,ce,R,P,L,N,we,At,e.basename,X,G);if(W(Ye=>!($&&$.some(Pt=>Pt.route.id===Ye))||Ue&&Ue.some(Pt=>Pt.route.id===Ye)),Ue.length===0&&Je.length===0)return ae(R,oe({matches:$,loaderData:{},errors:G||null},X?{actionData:X}:{})),{shortCircuited:!0};if(!w){Je.forEach(Pt=>{let Dn=g.fetchers.get(Pt.key),Fr={state:"loading",data:Dn&&Dn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Pt.key,Fr)});let Ye=X||g.actionData;U(oe({navigation:pe},Ye?Object.keys(Ye).length===0?{actionData:null}:{actionData:Ye}:{},Je.length>0?{fetchers:new Map(g.fetchers)}:{}))}V=++ee,Je.forEach(Ye=>D.set(Ye.key,h));let{results:Rt,loaderResults:zr,fetcherResults:La}=await Z(g.matches,$,Ue,Je,C);if(C.signal.aborted)return{shortCircuited:!0};Je.forEach(Ye=>D.delete(Ye.key));let _r=pd(Rt);if(_r)return await ie(g,_r,{replace:K}),{shortCircuited:!0};let{loaderData:Zn,errors:Na}=cd(g,$,Ue,zr,G,Je,La,$e);$e.forEach((Ye,Pt)=>{Ye.subscribe(Dn=>{(Dn||Ye.done)&&$e.delete(Pt)})}),Te();let Ma=ln(V);return oe({loaderData:Zn,errors:Na},Ma||Je.length>0?{fetchers:new Map(g.fetchers)}:{})}function te(C){return g.fetchers.get(C)||Av}function b(C,R,$,j){if(Rv)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");D.has(C)&&De(C);let Y=pr(i||r,$,e.basename);if(!Y){Fe(C,R,jt(404,{pathname:$}));return}let{path:K,submission:X}=ad($,o,j,!0),G=Ps(Y,K);if(d=(j&&j.preventScrollReset)===!0,X&&Wt(X.formMethod)){Se(C,R,K,G,Y,X);return}we.set(C,{routeId:R,path:K}),ue(C,R,K,G,Y,X)}async function Se(C,R,$,j,H,Y){if(Oe(),we.delete(C),!j.route.action&&!j.route.lazy){let Jt=jt(405,{method:Y.formMethod,pathname:$,routeId:R});Fe(C,R,Jt);return}let K=g.fetchers.get(C),X=oe({state:"submitting"},Y,{data:K&&K.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(C,X),U({fetchers:new Map(g.fetchers)});let G=new AbortController,pe=Yr(e.history,$,G.signal,Y);D.set(C,G);let ce=await Qr("action",pe,j,H,n,t,x.basename);if(pe.signal.aborted){D.get(C)===G&&D.delete(C);return}if(Sr(ce)){D.delete(C),xe.add(C);let Jt=oe({state:"loading"},Y,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(C,Jt),U({fetchers:new Map(g.fetchers)}),ie(g,ce,{submission:Y,isFetchActionRedirect:!0})}if(di(ce)){Fe(C,R,ce.error);return}if(bn(ce))throw jt(400,{type:"defer-action"});let At=g.navigation.location||g.location,Ue=Yr(e.history,At,G.signal),Je=i||r,Rt=g.navigation.state!=="idle"?pr(Je,g.navigation.location,e.basename):g.matches;q(Rt,"Didn't find any matches after fetcher action");let zr=++ee;ye.set(C,zr);let La=oe({state:"loading",data:ce.data},Y,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(C,La);let[_r,Zn]=ld(e.history,g,Rt,Y,At,P,L,N,we,Je,e.basename,{[j.route.id]:ce.data},void 0);Zn.filter(Jt=>Jt.key!==C).forEach(Jt=>{let Ta=Jt.key,Iu=g.fetchers.get(Ta),wh={state:"loading",data:Iu&&Iu.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Ta,wh),D.set(Ta,G)}),U({fetchers:new Map(g.fetchers)});let{results:Na,loaderResults:Ma,fetcherResults:Ye}=await Z(g.matches,Rt,_r,Zn,Ue);if(G.signal.aborted)return;ye.delete(C),D.delete(C),Zn.forEach(Jt=>D.delete(Jt.key));let Pt=pd(Na);if(Pt)return ie(g,Pt);let{loaderData:Dn,errors:Fr}=cd(g,g.matches,_r,Ma,void 0,Zn,Ye,$e),yh={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(C,yh);let xh=ln(zr);g.navigation.state==="loading"&&zr>V?(q(p,"Expected pending action"),h&&h.abort(),ae(g.navigation.location,{matches:Rt,loaderData:Dn,errors:Fr,fetchers:new Map(g.fetchers)})):(U(oe({errors:Fr,loaderData:dd(g.loaderData,Dn,Rt,Fr)},xh?{fetchers:new Map(g.fetchers)}:{})),P=!1)}async function ue(C,R,$,j,H,Y){let K=g.fetchers.get(C),X=oe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Y,{data:K&&K.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(C,X),U({fetchers:new Map(g.fetchers)});let G=new AbortController,pe=Yr(e.history,$,G.signal);D.set(C,G);let ce=await Qr("loader",pe,j,H,n,t,x.basename);if(bn(ce)&&(ce=await ah(ce,pe.signal,!0)||ce),D.get(C)===G&&D.delete(C),pe.signal.aborted)return;if(Sr(ce)){await ie(g,ce);return}if(di(ce)){let Ue=hr(g.matches,R);g.fetchers.delete(C),U({fetchers:new Map(g.fetchers),errors:{[Ue.route.id]:ce.error}});return}q(!bn(ce),"Unhandled fetcher deferred data");let At={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(C,At),U({fetchers:new Map(g.fetchers)})}async function ie(C,R,$){var j;let{submission:H,replace:Y,isFetchActionRedirect:K}=$===void 0?{}:$;R.revalidate&&(P=!0);let X=Li(C.location,R.location,oe({_isRedirect:!0},K?{_isFetchActionRedirect:!0}:{}));if(q(X,"Expected a location on the redirect navigation"),th.test(R.location)&&nh&&typeof((j=window)==null?void 0:j.location)<"u"){let Je=e.history.createURL(R.location),Rt=zi(Je.pathname,e.basename||"/")==null;if(window.location.origin!==Je.origin||Rt){Y?window.location.replace(R.location):window.location.assign(R.location);return}}h=null;let G=Y===!0?Ne.Replace:Ne.Push,{formMethod:pe,formAction:ce,formEncType:At,formData:Ue}=C.navigation;!H&&pe&&ce&&Ue&&At&&(H={formMethod:pe,formAction:ce,formEncType:At,formData:Ue}),Cv.has(R.status)&&H&&Wt(H.formMethod)?await z(G,X,{submission:oe({},H,{formAction:R.location}),preventScrollReset:d}):K?await z(G,X,{overrideNavigation:{state:"loading",location:X,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:H,preventScrollReset:d}):await z(G,X,{overrideNavigation:{state:"loading",location:X,formMethod:H?H.formMethod:void 0,formAction:H?H.formAction:void 0,formEncType:H?H.formEncType:void 0,formData:H?H.formData:void 0},preventScrollReset:d})}async function Z(C,R,$,j,H){let Y=await Promise.all([...$.map(G=>Qr("loader",H,G,R,n,t,x.basename)),...j.map(G=>G.matches&&G.match?Qr("loader",Yr(e.history,G.path,H.signal),G.match,G.matches,n,t,x.basename):{type:be.error,error:jt(404,{pathname:G.path})})]),K=Y.slice(0,$.length),X=Y.slice($.length);return await Promise.all([hd(C,$,K,H.signal,!1,g.loaderData),hd(C,j.map(G=>G.match),X,H.signal,!0)]),{results:Y,loaderResults:K,fetcherResults:X}}function Oe(){P=!0,L.push(...W()),we.forEach((C,R)=>{D.has(R)&&(N.push(R),De(R))})}function Fe(C,R,$){let j=hr(g.matches,R);ne(C),U({errors:{[j.route.id]:$},fetchers:new Map(g.fetchers)})}function ne(C){D.has(C)&&De(C),we.delete(C),ye.delete(C),xe.delete(C),g.fetchers.delete(C)}function De(C){let R=D.get(C);q(R,"Expected fetch controller: "+C),R.abort(),D.delete(C)}function le(C){for(let R of C){let j={state:"idle",data:te(R).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(R,j)}}function Te(){let C=[];for(let R of xe){let $=g.fetchers.get(R);q($,"Expected fetcher: "+R),$.state==="loading"&&(xe.delete(R),C.push(R))}le(C)}function ln(C){let R=[];for(let[$,j]of ye)if(j<C){let H=g.fetchers.get($);q(H,"Expected fetcher: "+$),H.state==="loading"&&(De($),ye.delete($),R.push($))}return le(R),R.length>0}function Ie(C,R){let $=g.blockers.get(C)||od;return me.get(C)!==R&&me.set(C,R),$}function bt(C){g.blockers.delete(C),me.delete(C)}function zt(C,R){let $=g.blockers.get(C)||od;q($.state==="unblocked"&&R.state==="blocked"||$.state==="blocked"&&R.state==="blocked"||$.state==="blocked"&&R.state==="proceeding"||$.state==="blocked"&&R.state==="unblocked"||$.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+$.state+" -> "+R.state),g.blockers.set(C,R),U({blockers:new Map(g.blockers)})}function ot(C){let{currentLocation:R,nextLocation:$,historyAction:j}=C;if(me.size===0)return;me.size>1&&Lr(!1,"A router only supports one blocker at a time");let H=Array.from(me.entries()),[Y,K]=H[H.length-1],X=g.blockers.get(Y);if(!(X&&X.state==="proceeding")&&K({currentLocation:R,nextLocation:$,historyAction:j}))return Y}function W(C){let R=[];return $e.forEach(($,j)=>{(!C||C(j))&&($.cancel(),R.push(j),$e.delete(j))}),R}function ke(C,R,$){if(s=C,f=R,c=$||(j=>j.key),!m&&g.navigation===cl){m=!0;let j=Kn(g.location,g.matches);j!=null&&U({restoreScrollPosition:j})}return()=>{s=null,f=null,c=null}}function br(C,R){if(s&&c&&f){let $=R.map(H=>md(H,g.loaderData)),j=c(C,$)||C.key;s[j]=f()}}function Kn(C,R){if(s&&c&&f){let $=R.map(Y=>md(Y,g.loaderData)),j=c(C,$)||C.key,H=s[j];if(typeof H=="number")return H}return null}function _t(C){i=C}return x={get basename(){return e.basename},get state(){return g},get routes(){return r},initialize:Ve,subscribe:J,enableScrollRestoration:ke,navigate:I,fetch:b,revalidate:_,createHref:C=>e.history.createHref(C),encodeLocation:C=>e.history.encodeLocation(C),getFetcher:te,deleteFetcher:ne,dispose:T,getBlocker:Ie,deleteBlocker:bt,_internalFetchControllers:D,_internalActiveDeferreds:$e,_internalSetRoutes:_t},x}function Ov(e){return e!=null&&"formData"in e}function ad(e,t,n,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:rn(e);if(!n||!Ov(n))return{path:i};if(n.formMethod&&!bv(n.formMethod))return{path:i,error:jt(405,{method:n.formMethod})};let o;if(n.formData){let s=n.formMethod||"get";if(o={formMethod:t.v7_normalizeFormMethod?s.toUpperCase():s.toLowerCase(),formAction:oh(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Wt(o.formMethod))return{path:i,submission:o}}let a=an(i),l=ih(n.formData);return r&&a.search&&lh(a.search)&&l.append("index",""),a.search="?"+l,{path:rn(a),submission:o}}function Dv(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function ld(e,t,n,r,i,o,a,l,s,c,f,m,v){let k=v?Object.values(v)[0]:m?Object.values(m)[0]:void 0,E=e.createURL(t.location),x=e.createURL(i),g=o||E.toString()===x.toString()||E.search!==x.search,p=v?Object.keys(v)[0]:void 0,h=Dv(n,p).filter((P,L)=>{if(P.route.lazy)return!0;if(P.route.loader==null)return!1;if(Lv(t.loaderData,t.matches[L],P)||a.some(ee=>ee===P.route.id))return!0;let N=t.matches[L],D=P;return sd(P,oe({currentUrl:E,currentParams:N.params,nextUrl:x,nextParams:D.params},r,{actionResult:k,defaultShouldRevalidate:g||rh(N,D)}))}),w=[];return s.forEach((P,L)=>{if(!n.some(V=>V.route.id===P.routeId))return;let N=pr(c,P.path,f);if(!N){w.push(oe({key:L},P,{matches:null,match:null}));return}let D=Ps(N,P.path);if(l.includes(L)){w.push(oe({key:L,matches:N,match:D},P));return}sd(D,oe({currentUrl:E,currentParams:t.matches[t.matches.length-1].params,nextUrl:x,nextParams:n[n.length-1].params},r,{actionResult:k,defaultShouldRevalidate:g}))&&w.push(oe({key:L,matches:N,match:D},P))}),[h,w]}function Lv(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function rh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function sd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ud(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];q(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";Lr(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!q0.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(oe({},i)),lazy:void 0})}async function Qr(e,t,n,r,i,o,a,l,s,c){a===void 0&&(a="/"),l===void 0&&(l=!1),s===void 0&&(s=!1);let f,m,v,k=g=>{let p,d=new Promise((h,w)=>p=w);return v=()=>p(),t.signal.addEventListener("abort",v),Promise.race([g({request:t,params:n.params,context:c}),d])};try{let g=n.route[e];if(n.route.lazy)if(g)m=(await Promise.all([k(g),ud(n.route,o,i)]))[0];else if(await ud(n.route,o,i),g=n.route[e],g)m=await k(g);else{if(e==="action")throw jt(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:be.data,data:void 0}}else q(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),m=await k(g);q(m!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){f=be.error,m=g}finally{v&&t.signal.removeEventListener("abort",v)}if(Iv(m)){let g=m.status;if(kv.has(g)){let h=m.headers.get("Location");if(q(h,"Redirects returned/thrown from loaders/actions must have a Location header"),th.test(h)){if(!l){let w=new URL(t.url),P=h.startsWith("//")?new URL(w.protocol+h):new URL(h),L=zi(P.pathname,a)!=null;P.origin===w.origin&&L&&(h=P.pathname+P.search+P.hash)}}else{let w=r.slice(0,r.indexOf(n)+1),P=Pa(w).map(N=>N.pathnameBase),L=Lu(h,P,new URL(t.url).pathname);if(q(rn(L),"Unable to resolve redirect location: "+h),a){let N=L.pathname;L.pathname=N==="/"?a:Xt([a,N])}h=rn(L)}if(l)throw m.headers.set("Location",h),m;return{type:be.redirect,status:g,location:h,revalidate:m.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:f||be.data,response:m};let p,d=m.headers.get("Content-Type");return d&&/\bapplication\/json\b/.test(d)?p=await m.json():p=await m.text(),f===be.error?{type:f,error:new Nu(g,m.statusText,p),headers:m.headers}:{type:be.data,data:p,statusCode:m.status,headers:m.headers}}if(f===be.error)return{type:f,error:m};if(Tv(m)){var E,x;return{type:be.deferred,deferredData:m,statusCode:(E=m.init)==null?void 0:E.status,headers:((x=m.init)==null?void 0:x.headers)&&new Headers(m.init.headers)}}return{type:be.data,data:m}}function Yr(e,t,n,r){let i=e.createURL(oh(t)).toString(),o={signal:n};if(r&&Wt(r.formMethod)){let{formMethod:a,formEncType:l,formData:s}=r;o.method=a.toUpperCase(),o.body=l==="application/x-www-form-urlencoded"?ih(s):s}return new Request(i,o)}function ih(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function Nv(e,t,n,r,i){let o={},a=null,l,s=!1,c={};return n.forEach((f,m)=>{let v=t[m].route.id;if(q(!Sr(f),"Cannot handle redirect results in processLoaderData"),di(f)){let k=hr(e,v),E=f.error;r&&(E=Object.values(r)[0],r=void 0),a=a||{},a[k.route.id]==null&&(a[k.route.id]=E),o[v]=void 0,s||(s=!0,l=qp(f.error)?f.error.status:500),f.headers&&(c[v]=f.headers)}else bn(f)?(i.set(v,f.deferredData),o[v]=f.deferredData.data):o[v]=f.data,f.statusCode!=null&&f.statusCode!==200&&!s&&(l=f.statusCode),f.headers&&(c[v]=f.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:c}}function cd(e,t,n,r,i,o,a,l){let{loaderData:s,errors:c}=Nv(t,n,r,i,l);for(let f=0;f<o.length;f++){let{key:m,match:v}=o[f];q(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let k=a[f];if(di(k)){let E=hr(e.matches,v==null?void 0:v.route.id);c&&c[E.route.id]||(c=oe({},c,{[E.route.id]:k.error})),e.fetchers.delete(m)}else if(Sr(k))q(!1,"Unhandled fetcher revalidation redirect");else if(bn(k))q(!1,"Unhandled fetcher deferred data");else{let E={state:"idle",data:k.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(m,E)}}return{loaderData:s,errors:c}}function dd(e,t,n,r){let i=oe({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function hr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function fd(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function jt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Nu(e||500,a,new Error(l),!0)}function pd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Sr(n))return n}}function oh(e){let t=typeof e=="string"?an(e):e;return rn(oe({},t,{hash:""}))}function Mv(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function bn(e){return e.type===be.deferred}function di(e){return e.type===be.error}function Sr(e){return(e&&e.type)===be.redirect}function Tv(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Iv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function bv(e){return Ev.has(e.toLowerCase())}function Wt(e){return wv.has(e.toLowerCase())}async function hd(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let c=e.find(m=>m.route.id===s.route.id),f=c!=null&&!rh(c,s)&&(o&&o[s.route.id])!==void 0;bn(l)&&(i||f)&&await ah(l,r,i).then(m=>{m&&(n[a]=m||n[a])})}}async function ah(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:be.data,data:e.deferredData.unwrappedData}}catch(i){return{type:be.error,error:i}}return{type:be.data,data:e.deferredData.data}}}function lh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function md(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Ps(e,t){let n=typeof t=="string"?an(t).search:t.search;if(e[e.length-1].route.index&&lh(n||""))return e[e.length-1];let r=Pa(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const _v=typeof Object.is=="function"?Object.is:zv,{useState:Fv,useEffect:Uv,useLayoutEffect:jv,useDebugValue:Bv}=Rl;function Hv(e,t,n){const r=t(),[{inst:i},o]=Fv({inst:{value:r,getSnapshot:t}});return jv(()=>{i.value=r,i.getSnapshot=t,dl(i)&&o({inst:i})},[e,r,t]),Uv(()=>(dl(i)&&o({inst:i}),e(()=>{dl(i)&&o({inst:i})})),[e]),Bv(r),r}function dl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!_v(n,r)}catch{return!0}}function Vv(e,t,n){return t()}const Jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gv=!Jv,Wv=Gv?Vv:Hv,Qv="useSyncExternalStore"in Rl?(e=>e.useSyncExternalStore)(Rl):Wv,Mu=M.createContext(null),Tu=M.createContext(null),_i=M.createContext(null),$a=M.createContext(null),Ir=M.createContext({outlet:null,matches:[]}),sh=M.createContext(null);function $s(){return $s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$s.apply(this,arguments)}function Yv(e,t){let{relative:n}=t===void 0?{}:t;Fi()||q(!1);let{basename:r,navigator:i}=M.useContext(_i),{hash:o,pathname:a,search:l}=uh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Xt([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Fi(){return M.useContext($a)!=null}function Oa(){return Fi()||q(!1),M.useContext($a).location}function Kv(){Fi()||q(!1);let{basename:e,navigator:t}=M.useContext(_i),{matches:n}=M.useContext(Ir),{pathname:r}=Oa(),i=JSON.stringify(Pa(n).map(l=>l.pathnameBase)),o=M.useRef(!1);return M.useEffect(()=>{o.current=!0}),M.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let c=Lu(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Xt([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,i,r])}function uh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=M.useContext(Ir),{pathname:i}=Oa(),o=JSON.stringify(Pa(r).map(a=>a.pathnameBase));return M.useMemo(()=>Lu(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Zv(e,t){Fi()||q(!1);let{navigator:n}=M.useContext(_i),r=M.useContext(Tu),{matches:i}=M.useContext(Ir),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Oa(),c;if(t){var f;let x=typeof t=="string"?an(t):t;l==="/"||(f=x.pathname)!=null&&f.startsWith(l)||q(!1),c=x}else c=s;let m=c.pathname||"/",v=l==="/"?m:m.slice(l.length)||"/",k=pr(e,{pathname:v}),E=ty(k&&k.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Xt([l,n.encodeLocation?n.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Xt([l,n.encodeLocation?n.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,r||void 0);return t&&E?M.createElement($a.Provider,{value:{location:$s({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ne.Pop}},E):E}function Xv(){let e=oy(),t=qp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},t),n?M.createElement("pre",{style:i},n):null,o)}class qv extends M.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?M.createElement(Ir.Provider,{value:this.props.routeContext},M.createElement(sh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ey(e){let{routeContext:t,match:n,children:r}=e,i=M.useContext(Mu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Ir.Provider,{value:t},r)}function ty(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||q(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,c=null;n&&(a.route.ErrorBoundary?c=M.createElement(a.route.ErrorBoundary,null):a.route.errorElement?c=a.route.errorElement:c=M.createElement(Xv,null));let f=t.concat(r.slice(0,l+1)),m=()=>{let v=o;return s?v=c:a.route.Component?v=M.createElement(a.route.Component,null):a.route.element&&(v=a.route.element),M.createElement(ey,{match:a,routeContext:{outlet:o,matches:f},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?M.createElement(qv,{location:n.location,component:c,error:s,children:m(),routeContext:{outlet:null,matches:f}}):m()},null)}var gd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(gd||(gd={}));var qo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(qo||(qo={}));function ny(e){let t=M.useContext(Tu);return t||q(!1),t}function ry(e){let t=M.useContext(Ir);return t||q(!1),t}function iy(e){let t=ry(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function oy(){var e;let t=M.useContext(sh),n=ny(qo.UseRouteError),r=iy(qo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function ay(e){let{fallbackElement:t,router:n}=e,r=M.useCallback(()=>n.state,[n]),i=Qv(n.subscribe,r,r),o=M.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,c,f)=>n.navigate(s,{state:c,preventScrollReset:f==null?void 0:f.preventScrollReset}),replace:(s,c,f)=>n.navigate(s,{replace:!0,state:c,preventScrollReset:f==null?void 0:f.preventScrollReset})}),[n]),a=n.basename||"/",l=M.useMemo(()=>({router:n,navigator:o,static:!1,basename:a}),[n,o,a]);return M.createElement(M.Fragment,null,M.createElement(Mu.Provider,{value:l},M.createElement(Tu.Provider,{value:i},M.createElement(sy,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?M.createElement(uy,null):t))),null)}function ly(e){q(!1)}function sy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ne.Pop,navigator:o,static:a=!1}=e;Fi()&&q(!1);let l=t.replace(/^\/*/,"/"),s=M.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=an(r));let{pathname:c="/",search:f="",hash:m="",state:v=null,key:k="default"}=r,E=M.useMemo(()=>{let x=zi(c,l);return x==null?null:{location:{pathname:x,search:f,hash:m,state:v,key:k},navigationType:i}},[l,c,f,m,v,k,i]);return E==null?null:M.createElement(_i.Provider,{value:s},M.createElement($a.Provider,{children:n,value:E}))}function uy(e){let{children:t,location:n}=e,r=M.useContext(Mu),i=r&&!t?r.router.routes:Os(t);return Zv(i,n)}var vd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(vd||(vd={}));new Promise(()=>{});function Os(e,t){t===void 0&&(t=[]);let n=[];return M.Children.forEach(e,(r,i)=>{if(!M.isValidElement(r))return;let o=[...t,i];if(r.type===M.Fragment){n.push.apply(n,Os(r.props.children,o));return}r.type!==ly&&q(!1),!r.props.index||!r.props.children||q(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Os(r.props.children,o)),n.push(a)}),n}function cy(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ea.apply(this,arguments)}function dy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function py(e,t){return e.button===0&&(!t||t==="_self")&&!fy(e)}const hy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function my(e,t){return $v({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:K0({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||gy(),routes:e,detectErrorBoundary:cy}).initialize()}function gy(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ea({},t,{errors:vy(t.errors)})),t}function vy(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Nu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const yy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ch=M.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:f}=t,m=dy(t,hy),{basename:v}=M.useContext(_i),k,E=!1;if(typeof c=="string"&&xy.test(c)&&(k=c,yy)){let d=new URL(window.location.href),h=c.startsWith("//")?new URL(d.protocol+c):new URL(c),w=zi(h.pathname,v);h.origin===d.origin&&w!=null?c=w+h.search+h.hash:E=!0}let x=Yv(c,{relative:i}),g=wy(c,{replace:a,state:l,target:s,preventScrollReset:f,relative:i});function p(d){r&&r(d),d.defaultPrevented||g(d)}return M.createElement("a",ea({},m,{href:k||x,onClick:E||o?r:p,ref:n,target:s}))});var yd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(yd||(yd={}));var xd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xd||(xd={}));function wy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Kv(),s=Oa(),c=uh(e,{relative:a});return M.useCallback(f=>{if(py(f,n)){f.preventDefault();let m=r!==void 0?r:rn(s)===rn(c);l(e,{replace:m,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}const Sy=A.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Ey="/Nanofab-Project/assets/microscopio-02614e2c.svg",ky="/Nanofab-Project/assets/mol-3565b3ed.svg",u={mobile:"390px",largeMobile:"391px",tablet:"819px",notebook:"1023px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Cy=A.div`
  width: 100%;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  background-color: #F8F8F8;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
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
  
`,Ay=A.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
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
    height: 8vh;
  }
`,Ry=A.img`
  padding-left: 15px;
  width: 200px;

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 400px;
  }
`,Py="/Nanofab-Project/assets/nanofab-c5546f6e.png",$y="/Nanofab-Project/assets/background-1f899db0.svg",Oy=A.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${$y});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`,Dy=A.div`
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
`,wd=A.img`
  width: 20%;

  @media screen and (max-width: ${u.mobile}) {
    width: 60%;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 50%;
    margin-top: 15px;
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
    width: 40%;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    width: 35%;
  }
  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {
    width: 25%;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 40%;
  }

  border-radius: 10px;
`,Ly=A.img`
  width: 10%;
  border-radius: 10px;
  margin-left: 150px;

  @media screen and (max-width: ${u.mobile}) {
    width: 30%;
    margin-left: 0px;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 30%;
    margin-left: 0px;
  }

  @media screen and (min-width: 768px) and (max-width: 769px) {
    width: 22%;
    margin-left: 0px;
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
    width: 22%;
    margin-left: 0px;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    width: 12%;
    margin-left: 190px;
  }
  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {
    width: 10%;
  }
  @media screen and (min-width: 2560px) and (max-width: ${u.largeDesktop}) {
    width: 8%;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 20%;
  }
`,Ny="/Nanofab-Project/assets/uerj-b2e3dfd0.png",My="/Nanofab-Project/assets/nanofab-lab-8dc5e917.png",Ty="/Nanofab-Project/assets/LogoPPGEM-white-fd88f51e.png",Iy=({})=>y(Oy,{children:B(Dy,{children:[y(Ly,{src:Ny}),y(wd,{src:My}),y(wd,{src:Ty})]})}),by=A.div`
  width: 60%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1299px) {    
    display: none;
  }
`,zy=A.a`
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
    border-radius: 15px;
  }
`,_y=A(ch)`
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
`,Fy=({name:e,url:t})=>y(zy,{children:y(_y,{to:t,children:e})}),Uy=({urls:e})=>y(by,{children:e.map(t=>y(Fy,{name:t.name,url:t.url},e.indexOf(t)))}),jy=A.nav`
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 1300px) {    
        display: none;
    }
`,qn=A(ch)`
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
`,By=A.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,Hy=A.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 80px;
    transition: 0.2s;
    z-index: 10;
    padding: 15px;
    
    border: 1px solid #c2c2c2;
    background: #f2f2f2;
    border-radius: 15px 0px 0px 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(0px);
`;var dh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sd=tt.createContext&&tt.createContext(dh),Cn=globalThis&&globalThis.__assign||function(){return Cn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cn.apply(this,arguments)},Vy=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function fh(e){return e&&e.map(function(t,n){return tt.createElement(t.tag,Cn({key:n},t.attr),fh(t.child))})}function Da(e){return function(t){return tt.createElement(Jy,Cn({attr:Cn({},e.attr)},t),fh(e.child))}}function Jy(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=Vy(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),tt.createElement("svg",Cn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:Cn(Cn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&tt.createElement("title",null,o),e.children)};return Sd!==void 0?tt.createElement(Sd.Consumer,null,function(n){return t(n)}):t(dh)}function Gy(e){return Da({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(e)}function Wy(e){return Da({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(e)}const Qy=()=>{const[e,t]=M.useState(!1);return B(jy,{children:[y(By,{onClick:()=>t(!e),children:e?y(Gy,{size:40}):y(Wy,{size:40})}),e?B(Hy,{children:[y(qn,{to:"/",onClick:()=>t(!1),children:"Home"}),y(qn,{to:"/equipe",onClick:()=>t(!1),children:"Equipe"}),y(qn,{to:"/andamento",onClick:()=>t(!1),children:"Andamento"}),y(qn,{to:"/submissao_projetos",onClick:()=>t(!1),children:"Submissão de Projetos"}),y(qn,{to:"/publicacoes",onClick:()=>t(!1),children:"Publicações"}),y(qn,{to:"/parcerias",onClick:()=>t(!1),children:"Parcerias"})]}):null]})},Qn=({})=>B(Cy,{children:[B(Ay,{children:[y(Ry,{src:Py}),y(Uy,{urls:[{name:"Home",url:"/"},{name:"Equipe",url:"/equipe"},{name:"Andamento",url:"/andamento"},{name:"Submissão de Projetos",url:"/submissao_projetos"},{name:"Publicações",url:"/publicacoes"},{name:"Parcerias",url:"/parcerias"}]}),y(Qy,{})]}),y(Iy,{})]}),Yy=A.div`
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
`,Ky=A.div`
  width: 85%;
  height: 2px;
  background: ${({theme:e})=>e.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${u.mobile}) {    
    width: 50%;
  }
`,Zy=A.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${u.mobile}) {    
    flex-direction: column;
  }
`,Ed=A.span`
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
`,fl=A.h3`
  text-align: center;
`,pl=A.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6%;
  text-align: center;
`,hl=A.span`
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
`,Xy=A.div`
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
`,qy=A.div`
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
`,Yn=({})=>B(Yy,{children:[y(Xy,{children:B(qy,{children:[B(pl,{children:[y(fl,{children:"Endereço"}),y(hl,{children:"Rua São Franscisco Xavier - 3107f - Maracanã, Rio de Janeiro"})]}),B(pl,{children:[y(fl,{children:"Email"}),y(hl,{children:"adsad@gmail.com"})]}),B(pl,{children:[y(fl,{children:"Funcionamento"}),y(hl,{children:"Segunda a sexta Xhrs às Yhrs"})]})]})}),y(Ky,{}),B(Zy,{children:[y(Ed,{children:"Ⓒ Serra Jr. Engenharia 2022"}),y(Ed,{children:"Todos os direitos reservados"})]})]}),e1=A.div`
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

`,t1=A.div`
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
`,n1=A.span`
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
`,r1=A.div`
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
`,i1=A.img`
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
`,o1="/Nanofab-Project/assets/chemistry-7542d245.png",a1=({})=>y(r1,{children:y(i1,{src:o1})}),l1=A.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6%;

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    padding-top: 0px;
  }
`,s1=A.span`
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
`,u1=({title:e})=>y(l1,{children:y(s1,{children:e})}),c1=({descriptions:e})=>B(e1,{children:[y(a1,{}),y(u1,{title:"Sobre o NANOFAB"}),y(t1,{children:e.map(t=>y(n1,{children:t.text},e.indexOf(t)))})]}),d1=A.div`
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
`,f1=A.div`
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
`,p1=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;
  margin-top: 5%;
`,h1=A.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`,m1=A.span`
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
`,g1=A.span`
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
`,v1=({image:e,title:t,text:n})=>B(f1,{children:[y(p1,{children:y(h1,{src:e,alt:t})}),y(g1,{children:t}),y(m1,{children:n})]}),y1=({cards:e})=>y(d1,{children:e.map(t=>y(v1,{image:t.image,title:t.title,text:t.text},e.indexOf(t)))}),x1=({})=>B(Sy,{children:[y(Qn,{}),y(c1,{descriptions:[{text:"O Laboratório Multiusuário de Nanofabricação e Caracterização de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduação em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisição de um microscópio eletrônico de alta resolução do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existência de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperação. Nesse contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. Além disso, o NANOFAB atenderá demandas na área de nanofabricação com a aquisição de um microscópio FIB (Focused Ion Beam), a partir de recursos aprovados no Edital FAPERJ 2015, Grandes Equipamentos."},{text:"O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. O microscópio FIB também permitirá a preparação de amostras para microscopia eletrônica de transmissão."},{text:"O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geração de hidrogênio, revestimentos de aços e compósitos."}]}),y(y1,{cards:[{image:ky,title:"Coordenação e Comitê Gestor",text:"O NANOFAB é coordenado pelo prof. Norberto Mangiavacchi (UERJ) e tem como vice-coordenador o prof. Eduardo de Albuquerque Brocchi (PUC-Rio). O Comitê Gestor do NANOFAB é composto por três membros, eleitos a cada dois anos. Para o Biênio 2016-2018, o Comitê Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET) e Rogério Navarro Correia de Siqueira (PUC-Rio)."},{image:Ey,title:"Unidades e Programas Envolvidos / Projetos de Pesquisa",text:"Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química da UERJ) e Instituto de Física da UERJ."}]}),y(Yn,{})]}),w1=A.div`
  width: 100%;
`,S1=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`,E1=A.div`

`,k1=A.img`
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
`,C1=A.span`
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
`,A1=A.div`
    width: 80%;
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
`,R1=A.span`
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
`,P1=A.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #d5d4d4;
`,$1=A.div`
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
`,O1=A.div`
    width: 40%;
    margin: 10px;

    @media screen and (max-width: ${u.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${u.largeMobile}) {    
        width: 70%;
    }
`,D1=A.button`    
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
`,L1=A.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;

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
    
`,kd=A.div`
    width: 50%;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`,ml=A.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${u.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
        min-height: 70px;
    }
`,gl=A.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`,N1=A.span`
    font-size: ${({theme:e})=>e.fonts.small}px;
    color: ${({theme:e})=>e.colors.text.title};
    text-align: left;
`,vl=A.span`

`;function ph(e){return Da({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 14l-4-4h8z"}}]}]})(e)}function hh(e){return Da({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10l4 4H8z"}}]}]})(e)}const M1=({name:e,unit:t,bond:n,titration:r})=>{const[i,o]=M.useState(!1);return B(O1,{children:[B(D1,{onClick:()=>o(!i),isVisible:i,children:[y(N1,{children:e}),i?y(hh,{size:20}):y(ph,{size:20})]}),i?B(L1,{isVisible:i,children:[B(kd,{children:[B(ml,{children:[y(gl,{children:"PPG/IES"}),y(vl,{children:t})]}),B(ml,{children:[y(gl,{children:"Vínculo"}),y(vl,{children:n})]})]}),y(kd,{children:B(ml,{children:[y(gl,{children:"Titulação"}),y(vl,{children:r})]})})]}):null]})},T1=({title:e,persons:t})=>B(A1,{children:[y(P1,{children:y(R1,{children:e})}),y($1,{children:t.map(n=>y(M1,{name:n.name,bond:n.bond,titration:n.titration,unit:n.unit},t.indexOf(n)))})]}),I1="/Nanofab-Project/assets/team-2f83bf5a.png",b1=({list:e})=>B(S1,{children:[y(E1,{children:y(k1,{src:I1})}),y(C1,{children:"Equipe NANOFAB"}),e.map(t=>y(T1,{title:t.personFunction,persons:t.persons},e.indexOf(t)))]}),z1=({})=>B(w1,{children:[y(Qn,{}),y(b1,{list:[{personFunction:"Comitê Gestor",persons:[{name:"José Brant de Campos",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE "},{name:"Noberto Mangiavacchi",unit:"UERJ",bond:"Permanente",titration:"Doutor"},{name:"Hector Reynaldo Meneses",unit:"CEFET-RJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rogério Navarro Correia de Siqueira",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Suzana Bottega Peripolli",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]},{personFunction:"Comitê de Usuários",persons:[{name:"Lilian Pantoja Sosman",unit:"IF - PPGF/UERJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Ivana Lourenço de Mello Ferreira",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilia Garcia Diniz",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José Ricardo Muniz Ferreira",unit:"Empresa R-CRio",bond:"Sócio",titration:"Doutor"}]},{personFunction:"Pesquisador",persons:[{name:"Eduardo de Albuquerque Brocchi",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 1C, CNE"},{name:"José Guilherme Santos Silva",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1B, CNE"},{name:"Luciano Rodrigues Ornelas de Lima",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1D, CNE"},{name:"Marcos Antonio da Silva Costa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Nakédia Maysa Freitas Carvalho",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE"},{name:"Francisco José Moura",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rodrigo Fernandes Magalhães de Souza",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eric Cardona Romani",unit:"SENAI",bond:"Permanente",titration:"Doutor"},{name:"Jorge Luis do Amaral",unit:"PPG-EL/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilza Sampaio Aguilar",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Daniel José Naid Mansur Chalhub",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José da Rocha Miranda Pontes",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Ana Maria Furtado de Sousa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Jaqueline Dias Senra",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Juliana Fonseca de Lima",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Herman Lima Pessoa",unit:"CBPF",bond:"Permanente",titration:"Doutor"},{name:"Letícia Aguilera dos Santos",unit:"IPRJ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Cecilia Vilani",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Celio Albano da Costa",unit:"UFRJ",bond:"Permanente",titration:"Doutor"},{name:"José Luis Lopes da Silveira",unit:"UFRJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eduardo Sousa Lima",unit:"IME",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eustáquio de Souza Baêta Junior",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]},{personFunction:"Equipe NANOFAB",persons:[{name:"Maybi Fálker Sampaio",unit:"NANOFAB/UERJ",bond:"Bolsista QUALITEC/UERJ",titration:"Doutor"},{name:"Kellen Venâncio dos Santos",unit:"NANOFAB/UERJ",bond:"Bolsista TCT/FAPERJ",titration:"Engenheira"},{name:"Camila Alves Pelicarto Silva",unit:"NANOFAB/UERJ",bond:"Bolsista PROATEC/UERJ",titration:"Engenheira"}]}]}),y(Yn,{})]}),_1=A.div`
  width: 100%;
`,F1=A.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,U1=A.h1`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;
`,j1=A.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;

`,B1=A.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`,H1=A.div`
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
    width: 95%;
    margin-top: 20px;
  }
`,Cd=A.button`
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

  @media screen and (max-width: ${u.mobile}) {
    width: 40%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 40%;
  }
`,V1=A.div`
    width: 90%;
    margin-bottom: 3%;
`,J1=A.h2`
  font-size: ${({theme:e})=>e.fonts.large}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
}

@media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
 }
`,G1=A.select`
    width: 25%;
    border-radius: 10px;
    margin-right: 20px;
    padding: 0.5%;
    cursor: pointer;

    font-size: ${({theme:e})=>e.fonts.small}px;

    @media screen and (max-width: ${u.mobile}) {
        width: 50%;
      }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
        width: 50%;
    }

    @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
      width: 50%;
     }

     @media screen and (min-width: ${u.extraLargeDesktop}) {
      width: 50%;

    }
`;A.option`
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
`;const Kr=A.button`
    width: 10%;
    padding: 0.5%;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    font-size: ${({theme:e})=>e.fonts.small}px;
    cursor: pointer;

    &:hover{
        background-color: #D5D4D4;
        transition: 0.5s;
    }

    @media screen and (max-width: ${u.mobile}) {
        width: 50%;
        justify-content: center;
        align-items: center;
      }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
        width: 50%;
    }

    @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
       width: 50%;
       
      }
`,W1=A.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: row;
    width: 100%;
`,Q1=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  flex-direction: column;
  margin: 10px;
  width: 300px;
  border-radius: 10px;
`,Y1=A.div`
    width: 100%;
    display: flex;
    background-color: #D5D4D4;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`,K1=A.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin: 5px;
    font-weight: bold;

    margin-left: 10px;
`,Z1=A.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
`,X1=A.span`
    text-align: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    ${({status:e})=>{if(e==="Aprovado")return"background-color: rgba(48, 212, 111, 0.7);";if(e==="Solicitado")return"background-color: rgba(255, 204, 92, 0.7);";if(e==="Cancelado")return"background-color: rgba(255, 111, 105, 0.7);"}}
`,yl=A.span`
    margin: 10px;
`,q1=({name:e,institution:t,startDate:n,endDate:r,samples:i,situation:o})=>B(Q1,{children:[y(Y1,{children:B(K1,{children:[e," - ",t]})}),B(Z1,{children:[B(yl,{children:["Data de Solicitação: ",n]}),B(yl,{children:["Data Final: ",r||"Não informado"]}),B(yl,{children:["Quantidade de Amostras: ",i]})]}),y(X1,{status:o,children:o})]}),ex=({list:e})=>{const[t,n]=M.useState(0),[r,i]=M.useState(9),[o,a]=M.useState(""),l=()=>{n(t+9),i(r+9)},s=()=>{t===0?(n(0),i(9)):(n(t-9),i(r-9))},c=f=>{f==="Todos"?a("Todos"):f==="Aprovado"?a("Aprovado"):f==="Agendado"?a("Agendado"):f==="Solicitado"&&a("Solicitado")};return B(j1,{children:[B(V1,{children:[y(J1,{children:"Filtro"}),B(W1,{children:[B(G1,{children:[y("option",{value:"Todos",children:y(Kr,{onClick:()=>{c("Todos")},children:"Todos"})}),y("option",{value:"Aprovado",children:y(Kr,{onClick:()=>{c("Aprovado")},children:"Aprovado"})}),y("option",{value:"Agendado",children:y(Kr,{onClick:()=>{c("Agendado")},children:"Agendado"})}),y("option",{value:"Solicitado",children:y(Kr,{onClick:()=>{c("Solicitado")},children:"Solicitado"})})]}),y(Kr,{children:"Filtrar"})]})]}),y(B1,{children:e.slice(t,r).map(f=>y(q1,{name:f.name,institution:f.institution,startDate:f.startDate,endDate:f.endDate,samples:f.samples,situation:f.situation},e.indexOf(f)))}),B(H1,{children:[y(Cd,{onClick:s,children:"Anterior"}),y(Cd,{onClick:l,children:"Próxima"})]})]})},tx=({})=>B(F1,{children:[y(U1,{children:"Lista de Solitações"}),y(ex,{list:[{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Cancelado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"}]})]}),nx=({})=>B(_1,{children:[y(Qn,{}),y(tx,{}),y(Yn,{})]}),rx=A.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ix=A.div`
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
`,ox=A.div`
  position: absolute;
  top: -50px;
  right: -50px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;
/* 
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
  } */
`,ax=A.img`
  width: 150px;
  height: 150px;

  /* @media screen and (max-width: ${u.mobile}) {    
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
    height: 200px; */
  }
`,lx=A.div`
  width: 100%;
  min-height: 1000px; // PLACEHOLDER - REMOVE LATER

`,xl=A.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
`,mh=A.input`
    width: 90%;
    height: 30px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 5px;
    padding-left: 20px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #5086B699;
    opacity: 1; /* Firefox */
    }
`,gh=A.div`
    margin-bottom: 3%;
`,sx=A.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
`,oo=A.input`
    height: 15px;
    width: 15px;
`,ao=A.label`
  margin-left: 5px;
  font-family: "Maven Pro";
`,lo=A.div`
  display: flex;
  
  flex-direction: row;
    margin: 5px;
`,ux=A(mh)`

`,cx=A(gh)`

`,dx=({})=>B(lx,{children:[B(gh,{children:[y(xl,{children:"Orientador:"}),y(mh,{placeholder:"(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"})]}),y(xl,{children:"Tipos:"}),B(sx,{children:[B(lo,{children:[y(oo,{type:"checkbox",value:"1"}),y(ao,{children:"Microscopia de Varredura de Alta Resolução (MEV-FEG)"})]}),B(lo,{children:[y(oo,{type:"checkbox",value:"1"}),y(ao,{children:"Microscopia por Feixe de Íons Focalizado"})]}),B(lo,{children:[y(oo,{type:"checkbox",value:"1"}),y(ao,{children:"Textura"})]}),B(lo,{children:[y(oo,{type:"checkbox",value:"1"}),y(ao,{children:"Difração de Raios-x"})]})]}),B(cx,{children:[y(xl,{children:"Outros:"}),y(ux,{placeholder:"Informar nome."})]})]}),fx=A.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,px=A.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;

    `,Ad=A.button`
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
    `,hx=({})=>y(fx,{children:B(px,{children:[y(Ad,{children:"Apagar"}),y(Ad,{children:"Enviar"})]})}),mx="/Nanofab-Project/assets/search-1143e4ec.png",gx=({})=>B(ix,{children:[y(ox,{children:y(ax,{src:mx})}),y(dx,{}),y(hx,{})]}),vx=({})=>B(rx,{children:[y(Qn,{}),y(gx,{}),y(Yn,{})]}),yx=A.div`
  width: 100%;
`,xx=A.div`
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
`,wx="/Nanofab-Project/assets/publications2-b4db6c33.svg",Sx=A.div`
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
`,Ex=A.div`
  /* width: 30%; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 70px; */
`,kx=A.div`
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
`,Cx=A.img`
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
`,Ax=({url:e})=>y(kx,{children:y(Cx,{src:e})}),Rx=A.div``,Px=A.span`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,$x=({title:e})=>y(Rx,{children:y(Px,{children:e})}),vh=({title:e,image:t})=>y(Sx,{children:B(Ex,{children:[y(Ax,{url:t}),y($x,{title:e})]})}),Ox=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 50px;
`,Dx=A.div`
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
`,Lx=A.button`    
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
`,Nx=A.div`
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
`;A.div`
    width: 50%;
    text-align: justify;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`;const Mx=A.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${u.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
        min-height: 70px;
    }

`;A.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`;const Tx=A.span`
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
`,Ix=A.span`
    text-align: justify;

    @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
    }
    @media screen and (min-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
    }
`,bx=({year:e,descriptions:t})=>{const[n,r]=M.useState(!1);return B(Dx,{children:[B(Lx,{onClick:()=>r(!n),isVisible:n,children:[y(Tx,{children:e}),n?y(hh,{size:20}):y(ph,{size:20})]}),n?y(Nx,{isVisible:n,children:t.map(i=>y(Mx,{children:y(Ix,{children:i.description})}))}):null]})},zx=({list:e})=>y(Ox,{children:e.map(t=>y(bx,{year:t.year,descriptions:t.descriptions},e.indexOf(t)))}),_x=({})=>B(yx,{children:[y(Qn,{}),y(vh,{title:"Publicações",image:wx}),y(xx,{children:y(zx,{list:[{year:"2022",descriptions:[{description:"SILVA, ADRIEL M.; SOUZA, RODRIGO F.M.; AGUILERA, LETÍCIA S.; de Campos, José B.; BROCCHI, EDUARDO A. Upgrade of titanium content in a vanadiferous titanomagnetite waste: Design of a roast-leach route based on thermodynamics simulations. MINERALS ENGINEERING. , v.179, p.107460 - , 2022."},{description:"LIMA, EDUARDO DE SOUSA; GALL, CAMILA CATALANO; ALVES, MANUEL FELLIPE R.P.; DE CAMPOS, JOSÉ BRANT; CAMPOS, TIAGO MOREIRA BASTOS; SANTOS, CLAUDINEI DOS Development and characterization of alumina-toughened zirconia (ATZ) ceramic composites doped with a beneficiated rare-earth oxide extracted from natural ore. Journal of Materials Research and Technology-JMR&T. , v.16, p.451 - 460, 2022."}]},{year:"2021",descriptions:[{description:"MARÍN CASTAÑO, ELIANA PAOLA; CAMPOS, JOSÉ BRANT DE; SOLÓRZANO-NARANJO, IVAN GUILLERMO; BROCCHI, EDUARDO DE ALBUQUERQUE Characterization of Ternary CuNiCo Metallic Nanoparticles Produced by Hydrogen Reduction.Materials. , v.14, p.6006 - , 2021."},{description:"SAMPAIO, M.F.; MARINHO, P.R.B.; CABRUJA, E.; LOZANO, M.; LIMA JÚNIOR, H.P.; de Campos, J.B. SU- 8 processing improvement and simulating studies for a Micromegas detector fabrication.Journal of Instrumentation. , v.16, p.P08022 - P02038, 2021."},{description:"HORTA, MARLA KAROLYNE DOS SANTOS; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; WESTIN, CECÍLIA BUZATTO; NAVARRO DA ROCHA, DANIEL; CAMPOS, JOSÉ BRANT < i > In vitro</> evaluation of natural hydroxyapatite from Osteoglossum bicirrhosum fish scales for biomedical application.International Journal of Applied Ceramic Technology. , v.18, p.1930 - 1937, 2021."},{description:"MOTA, RAFAEL OLIVEIRA DA; DÓREA, MÁRCIA DE MELO; AGUILERA, LETÍCIA DOS SANTOS; ROMANI, ERIC CARDONA; COSTA, HECTOR REYNALDO MENESES; CAMPOS, JOSÉ BRANT DE AVANÇOS RECENTES NA UTILIZAÇÃO DO GRAFENO COMO ADITIVO EM POLÍMEROS / RECENT ADVANCES IN THE USE OF GRAPHENE AS AN ADDITIVE IN POLYMERS. Brazilian Journal of Development. , v.7, p.32743 - 32752, 2021."},{description:"RIBEIRO, SUZANA BARRETO NORONHA; DA VEIGA JUNIOR, VALDIR FLORÊNCIO; DE CAMPOS, JOSÉ BRANT; DOS SANTOS, JHEISON LOPES; LOPES, IAGO JOSÉ VITRAL REZENDE; DA ROCHA, DANIEL NAVARRO; DA SILVA, MARCELO HENRIQUE PRADO Influences of biosilica content from Amazonian freshwater sponge on calcium phosphates.Journal of the Australian Ceramic Society. , v.57, p.55 - 65, 2021"},{description:"Machado, Marcelo Vitor Ferreira; DE CAMPOS, JOSÉ BRANT; AGUILAR, MARILZA SAMPAIO; Ramos, Vitor Santos Mechanical and Microstructural Characterizations on Commercial and Synthesized by the Sol- Gel Method Using Chicken Egg Shells as Precursor Hydroxyapatite.South Florida Journal of Development. , v.2, p.1365 - 1374, 2021."}]},{year:"2020",descriptions:[{description:"BARROS, S. D.; DUARTE, J. P. P.; ROCHA, L. D. S.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S.; MEDEIOS, M. E.; de Campos, José B.; COSTA, M. E. H. M.; LACHTER, E. R.; SENRA, J. D.; MALTA, L. F. B. Cyclodextrin-Stabilized Palladium Nanoparticles on Ceria: Invertigation of Support Interactions and Pivotal Promotion in the Suzuki-Miyaura Reaction. ChemistrySelect. , v.5, p.7227 - 7235, 2020."},{description:"MELLO, NATHALLI M.; REGO, ARTUR S. C.; BROCCHI, EDUARDO A.; CAMPOS, JOSÉ B. DE; MOURA, FRANCISCO J.; SOUZA, RODRIGO F. M. Effect of an Alumina Supported Palladium Catalyst on the Magnesium Sulfate Decomposition Kinetics. MATERIALS RESEARCH. , v.23, p.1 - 9, 2020."},{description:"CARNEIRO, MATEUS R. D.; FREITAS, BRUNO C.; DE BARROS, IURI B.; de Campos, José B.; BASTOS, IVAN N.; COSTA, HECTOR R. M. Evaluation of adhesion of epoxy resin sealant to improve the corrosion resistance of thermal sprayed coatings. APPLIED ADHESION SCIENCE. , v.8, p.7 - 21, 2020."},{description:"HORTA, M. K. S.; Moura F.J.; AGUILAR, M. S.; WESTIN, C. B.; de Campos, J.B.; PERIPOLLI, S. B.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S. Nanostructured Hydroxyapatite from Hen's Eggshells Using Sucrose as a Template. Materials Research-Ibero-american Journal of Materials. , v.23, p.1 - 9, 2020."}]},{year:"2019",descriptions:[{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; SANTOS, JHEISON LOPES DOS; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; BARBOSA, RAFAEL MAZA; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Bioactivity of strontium-monetite coatings for biomedical applications. CERAMICS INTERNATIONAL. , v.45, p.7568 - 7579, 2019."},{description:"SILVA, LORENNA; NEVES, VINÍCIUS; RAMOS, VITOR; SILVA, RAPHAEL; CAMPOS, JOSÉ; SILVA, ALEXSANDRO; MALTA, LUIZ; SENRA, JAQUELINE Layered Double Hydroxides as Bifunctional Catalysts for the Aryl Borylation under Ligand-Free Conditions. Catalysts. , v.9, p.302 - 314, 2019."},{description:"GALVÃO, RHAUANE ALMEIDA; SANTA-CRUZ, LARISSA AGOSTINHO DE; BARRETO, PALOMA BANTIM; HORTA, MARLA KAROLYNE DOS SANTOS; ANDRADE, ANTONIO MARCOS HELGUEIRA DE; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; PERIPOLLI, SUZANA BOTTEGA; CAMPOS, JOSÉ BRANT DE; ARRUDA, ISABEL RENATA DE SOUZA; MACHADO, GIOVANNA Electrochemical single-step obtention and characterization of a biomimetic TiO <sub>2</sub> -HA NTs covered by chitosan. JOURNAL OF MATERIALS RESEARCH. , v.34, p.1 - 11, 2019."},{description:"SOUZA, RODRIGO; QUEIROZ, CARLOS; BRANT, JOSÉ; BROCCHI, EDUARDO Pyrometallurgical processing of a low copper content concentrate based on a thermodynamic assessment. MINERALS ENGINEERING. , v.130, p.156 - 164, 2019."},{description:"HORTA, MARLA; AGUILAR, MARILZA; MOURA, FRANCISCO; CAMPOS, JOSÉ; RAMOS, VITOR; QUIZUNDA, ADILSON Synthesis and characterization of green nanohydroxyapatite from hen eggshell by precipitation method. MATERIALS TODAY: PROCEEDINGS. , v.14, p.716 - 721, 2019"}]},{year:"2018",descriptions:[{description:"FERREIRA, J. R. M.; Louro, Luis Henrique Leme; COSTA, A. M.; MARCAL, R. L. S. B.; ROCHA, D. N.; BARBOSA, R. M.; de Campos, José B.; PRADO, M. H. Zinc-doped Calcium Phosphate Coating on Titanium Surface Using Ostrich Eggshell as a Ca2+ Ions Source. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."},{description:"AGUILERA, L. S.; de Campos, J.B.; de Biasi, R.S.; Figueiredo, A.B.H.S. Use of the Drag Method to Study the Magnetic Behavior of Mn-Zn Ferrite Nanoparticles. The International Journal of Engineering and Science. , v.7, p.57 - 61, 2018."},{description:"BIASI, RONALDO SERGIO DE; MELO, GABRIEL BURLANDY MOTA DE; FIGUEIREDO, ANDRÉ BEN-HUR DA SILVA; CAMARENA, MARIELLA ALZAMORA; CAMPOS, JOSÉ BRANT DE Properties of manganese ferrite-paraffin composites. Journal of Materials Research and Technology-JMR&T. , v.8, p.309 - 313, 2018."},{description:"AGUILERA, L. S.; MARCAL, R. L. S. B.; de Campos, J.B.; PRADO, M. H.; Figueiredo, A.B.H.S.MAGNETIC FILTER PRODUCED BY ZnFe2O4 NANOPARTICLES USING FREEZE CASTING. Journal of Materials Research and Technology-JMR&T. , v.7, p.350 - 355, 2018. "},{description:"ROCHA, DANIEL NAVARRO DA; SILVA, MARCELO H. PRADO DA; CAMPOS, JOSÉ BRANT DE; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; CRUZ, LEILA ROSA Kinetics of conversion of brushite coatings to hydroxyapatite in alkaline solution. Journal of Materials Research and Technology-JMR&T. , v.7, p.479 - 486, 2018."},{description:"Cabral, R.F.; de Campos, J.B.; SILVA, C. E. V.; FONSECA, G. M.; LIMA, W. N.; LIMA, E. Formação da fase YNbO4 na sinterização do compósito Alumina-YAG com Nb2O5. CADERNOS UNIFOA (IMPRESSO). , v.36, p.29 - 35, 2018."},{description:"Cabral, R.F.; PRADO DA SILVA, M.H.; Lima, E.S.; de Campos, J.B.; MAGNAGO, ROBERTO DE OLIVEIRA Evaluation of Hardness and the Fracture Toughness of Composite Biphasic Alumina-YAG. MATERIALS SCIENCE FORUM (ONLINE). , v.912, p.82 - 86, 2018."},{description:"SALEIRO, GISELE TEIXEIRA; GONÇALVES, DANILO CORREA; COSTA, CÉLIO ALBANO DA; CAMPOS, JOSÉ BRANT DE; LIMA, EDUARDO DE SOUSA COMPORTAMENTO MECÂNICO DO SIC ADITIVADO COM Al2O3 E Y2O3 PRODUZIDOS PELA SÍNTESE POR COMBUSTÃO AUTOSSUSTENTÁVEL À ALTA TEMPERATURA. TECNOLOGIA EM METALURGIA, MATERIAIS E MINERAÇÃO. , v.15, p.96 - 102, 2018."},{description:"MENDONCA, F.; COSTA, A. M.; de Campos, J.B.; MARCAL, R. L. S. B.; ROCHA, D. N.; PRADO, M. H. Bioactivity Assessment of Ag-HA. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."}]},{year:"2017",descriptions:[{description:"GONÇALVES, DANILO CORRÊA; SALEIRO, GISELE TEIXEIRA; MATIAS, PHILIPE CARDOSO; GOMES, ALAELSON VIEIRA; RAMOS, VITOR; CAMPOS, JOSÉ BRANT BRANT DE; MELO, FRANCISCO CRISTOVÃO LOURENÇO DE; LIMA, EDUARDO SOUSA Microstructural Characterization and Influence of Ceramography Method on the Microhardness of Sintering Agents Added Silicon Carbide. Materials Research-Ibero-american Journal of Materials"},{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Mg substituted apatite coating from alkali conversion of acidic calcium phosphate. Materials Science & Engineering C-Materials for Biological Applications. , v.70, p.408 - 417, 2017."},{description:"ROMANI, E. C.; LARRUDE, D. G.; NACHEZ, L.; VILANI, C.; de CAMPOS, J. B.; PERIPOLLI, S. B.; FREIRE, F. L.Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS. , v.65, p.1 - 9, 2017."},{description:"SANTOS, J. L.; MARÇAL, R. L. S. B.; JESUS, P. R. R.; GOMES, A. V.; LIMA, E. P.; MONTEIRO, S. N.; de CAMPOS, J. B.; LOURO, L. H. L.Effect of LiF as Sintering Agent on the Densification and Phase Formation in Al2O3-4 Wt Pct Nb2O5 Ceramic Compound. METALLURGICAL AND MATERIALS TRANSACTIONS A-PHYSICAL METALLURGY AND MATERIALS SCIENCE. , v.48, p.4432 - 4440, 2017."}]}]})}),y(Yn,{})]}),Fx=A.div`
  width: 100%;

`,Ux=A.div`
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
`,jx=A.div`
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



`,Bx=A.span`
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
`,Hx=A.div`
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
`,Vx=A.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,Jx=A.img`
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
`,Gx=({image:e,altText:t})=>y(Vx,{children:y(Jx,{src:e,alt:t})}),Eo="/Nanofab-Project/assets/cbpf-812298b6.jpg",ko="/Nanofab-Project/assets/faperj-aefe040c.svg",Co="/Nanofab-Project/assets/finep-072bfec0.svg",wl="/Nanofab-Project/assets/logoUFF-bce55271.png",Sl="/Nanofab-Project/assets/ime-85233a07.jpg",El="/Nanofab-Project/assets/pucrj-7995f7c6.jpg",kl="/Nanofab-Project/assets/UFRJ-ae0dd01b.jpg",Cl="/Nanofab-Project/assets/cefet-fb822b95.png",Al="/Nanofab-Project/assets/SerraJr-fd37bf50.svg",Wx=({})=>{const e=[{image:Eo,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:ko,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Co,altText:"FINEP - Agência Brasileira de Inovação"},{image:wl,altText:"UFF - Universidade Federal Fluminense"},{image:Sl,altText:"IME - Instituto Militar de Engenharia"},{image:kl,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:El,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Cl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:Al,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Eo,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:ko,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Co,altText:"FINEP - Agência Brasileira de Inovação"},{image:wl,altText:"UFF - Universidade Federal Fluminense"},{image:Sl,altText:"IME - Instituto Militar de Engenharia"},{image:kl,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:El,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Cl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:Al,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Eo,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:ko,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Co,altText:"FINEP - Agência Brasileira de Inovação"},{image:wl,altText:"UFF - Universidade Federal Fluminense"},{image:Sl,altText:"IME - Instituto Militar de Engenharia"},{image:kl,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:El,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Cl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:Al,altText:"Serra Jr. - Serra Júnior Engenharia"}];return B(jx,{children:[y(Bx,{children:"Parceiros"}),y(Hx,{children:e.map(t=>y(Gx,{image:t.image,altText:t.altText},e.indexOf(t)))})]})},Qx=A.div`
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
`,Yx=A.div`
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
`,Kx=A.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${u.mobile}) {
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    margin-bottom: 5%;
  }
`,Zx=A.div`
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
`,Xx=A.span`
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
`,qx=A.span`
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
`,ew=A.img`
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
`;A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px;
    width: 200px; */
`;const tw=({image:e,title:t,paragraph:n})=>y(Qx,{children:B(Yx,{children:[y(Kx,{children:y(ew,{src:e,alt:t})}),B(Zx,{children:[y(Xx,{children:t}),y(qx,{children:n})]})]})}),nw="/Nanofab-Project/assets/handshake-903e6074.png",rw=({})=>{const e=[{image:Eo,title:"Centro Brasileiro de Pesquisas Físicas - CBPF",paragraph:"O NANOFAB desenvolve parceria científica e tecnológica com o CBPF na área de Instrumentação Científica, com o desenvolvimento de dispositivos multiplicadores e elétrons (GEM-Gas Electron Multiplier) e detectores bidimensionais de raios-x a gás."},{image:ko,title:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro",paragraph:"O NANOFAB recebe apoio da FAPERJ em projetos de infraestrutura e pesquisa como o PENSA-RIO e através de projetos em colaboração com os pesquisadores"},{image:Co,title:"FINEP - Agência Brasileira de Inovação",paragraph:"O NANOFAB participa de editais da FINEP em projetos estruturantes como o Grande Laboratórios Multiusuários e Ações Transversais."}];return B(Fx,{children:[y(Qn,{}),y(vh,{title:"Parcerias",image:nw}),y(Ux,{children:e.map(t=>y(tw,{image:t.image,title:t.title,paragraph:t.paragraph},e.indexOf(t)))}),y(Wx,{}),y(Yn,{})]})},iw=A.div`
  width: 100%;
`,ow=A.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,aw=A.span`
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.highlight};
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.auxiliary.error.dark};
  border-radius: 20px;
`,lw=({})=>B(iw,{children:[y(Qn,{}),y(ow,{children:y(aw,{children:"Aconteceu um problema, tente novamente mais tarde"})}),y(Yn,{})]}),sw="/Nanofab-Project/assets/background2-7f5efefe.svg",uw=A.div`
  background-image: url(${sw});
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
`,cw=my([{path:"/",element:y(x1,{})},{path:"/equipe",element:y(z1,{})},{path:"/andamento",element:y(nx,{})},{path:"/submissao_projetos",element:y(vx,{})},{path:"/publicacoes",element:y(_x,{})},{path:"/parcerias",element:y(rw,{})},{path:"*",element:y(lw,{})}],{basename:"/Nanofab-Project"}),dw=({})=>y(uw,{children:y(ay,{router:cw})}),fw=G0`
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
`;function pw(){return B(Y0,{children:[y(fw,{}),y(dw,{})]})}Pl.createRoot(document.getElementById("root")).render(y(tt.StrictMode,{children:y(pw,{})}));
