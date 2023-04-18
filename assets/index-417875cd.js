function hh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function mh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ro={},gh={get exports(){return Ro},set exports(e){Ro=e}},ra={},T={},vh={get exports(){return T},set exports(e){T=e}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),yh=Symbol.for("react.portal"),xh=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),Sh=Symbol.for("react.profiler"),Eh=Symbol.for("react.provider"),kh=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Ah=Symbol.for("react.suspense"),Rh=Symbol.for("react.memo"),Ph=Symbol.for("react.lazy"),Lu=Symbol.iterator;function $h(e){return e===null||typeof e!="object"?null:(e=Lu&&e[Lu]||e["@@iterator"],typeof e=="function"?e:null)}var Sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ed=Object.assign,kd={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=kd,this.updater=n||Sd}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cd(){}Cd.prototype=Dr.prototype;function Cs(e,t,n){this.props=e,this.context=t,this.refs=kd,this.updater=n||Sd}var As=Cs.prototype=new Cd;As.constructor=Cs;Ed(As,Dr.prototype);As.isPureReactComponent=!0;var Nu=Array.isArray,Ad=Object.prototype.hasOwnProperty,Rs={current:null},Rd={key:!0,ref:!0,__self:!0,__source:!0};function Pd(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ad.call(t,r)&&!Rd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ni,type:e,key:o,ref:a,props:i,_owner:Rs.current}}function Oh(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ps(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function Lh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Du=/\/+/g;function Fa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lh(""+e.key):t.toString(36)}function uo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ni:case yh:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Fa(a,0):r,Nu(i)?(n="",e!=null&&(n=e.replace(Du,"$&/")+"/"),uo(i,t,n,"",function(c){return c})):i!=null&&(Ps(i)&&(i=Oh(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Du,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Nu(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Fa(o,l);a+=uo(o,t,n,s,i)}else if(s=$h(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Fa(o,l++),a+=uo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _i(e,t,n){if(e==null)return e;var r=[],i=0;return uo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Nh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},co={transition:null},Dh={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:co,ReactCurrentOwner:Rs};re.Children={map:_i,forEach:function(e,t,n){_i(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _i(e,function(){t++}),t},toArray:function(e){return _i(e,function(t){return t})||[]},only:function(e){if(!Ps(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Dr;re.Fragment=xh;re.Profiler=Sh;re.PureComponent=Cs;re.StrictMode=wh;re.Suspense=Ah;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ed({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Rs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ad.call(t,s)&&!Rd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ni,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:kh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Eh,_context:e},e.Consumer=e};re.createElement=Pd;re.createFactory=function(e){var t=Pd.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:Ch,render:e}};re.isValidElement=Ps;re.lazy=function(e){return{$$typeof:Ph,_payload:{_status:-1,_result:e},_init:Nh}};re.memo=function(e,t){return{$$typeof:Rh,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=co.transition;co.transition={};try{e()}finally{co.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return rt.current.useCallback(e,t)};re.useContext=function(e){return rt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};re.useEffect=function(e,t){return rt.current.useEffect(e,t)};re.useId=function(){return rt.current.useId()};re.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return rt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};re.useRef=function(e){return rt.current.useRef(e)};re.useState=function(e){return rt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return rt.current.useTransition()};re.version="18.2.0";(function(e){e.exports=re})(vh);const tt=mh(T),wl=hh({__proto__:null,default:tt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh=T,Th=Symbol.for("react.element"),Ih=Symbol.for("react.fragment"),bh=Object.prototype.hasOwnProperty,Fh=Mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zh={key:!0,ref:!0,__self:!0,__source:!0};function $d(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)bh.call(t,r)&&!zh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Th,type:e,key:o,ref:a,props:i,_owner:Fh.current}}ra.Fragment=Ih;ra.jsx=$d;ra.jsxs=$d;(function(e){e.exports=ra})(gh);const S=Ro.jsx,X=Ro.jsxs;var Sl={},El={},_h={get exports(){return El},set exports(e){El=e}},gt={},kl={},Uh={get exports(){return kl},set exports(e){kl=e}},Od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,V){var U=M.length;M.push(V);e:for(;0<U;){var ae=U-1>>>1,I=M[ae];if(0<i(I,V))M[ae]=V,M[U]=I,U=ae;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var V=M[0],U=M.pop();if(U!==V){M[0]=U;e:for(var ae=0,I=M.length,z=I>>>1;ae<z;){var F=2*(ae+1)-1,W=M[F],w=F+1,te=M[w];if(0>i(W,U))w<I&&0>i(te,W)?(M[ae]=te,M[w]=U,ae=w):(M[ae]=W,M[F]=U,ae=F);else if(w<I&&0>i(te,U))M[ae]=te,M[w]=U,ae=w;else break e}}return V}function i(M,V){var U=M.sortIndex-V.sortIndex;return U!==0?U:M.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],p=1,m=null,v=3,k=!1,E=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(M){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=M)r(c),V.sortIndex=V.expirationTime,t(s,V);else break;V=n(c)}}function x(M){if(y=!1,h(M),!E)if(n(s)!==null)E=!0,dt(R);else{var V=n(c);V!==null&&Ve(x,V.startTime-M)}}function R(M,V){E=!1,y&&(y=!1,f(L),L=-1),k=!0;var U=v;try{for(h(V),m=n(s);m!==null&&(!(m.expirationTime>V)||M&&!ye());){var ae=m.callback;if(typeof ae=="function"){m.callback=null,v=m.priorityLevel;var I=ae(m.expirationTime<=V);V=e.unstable_now(),typeof I=="function"?m.callback=I:m===n(s)&&r(s),h(V)}else r(s);m=n(s)}if(m!==null)var z=!0;else{var F=n(c);F!==null&&Ve(x,F.startTime-V),z=!1}return z}finally{m=null,v=U,k=!1}}var N=!1,D=null,L=-1,ee=5,H=-1;function ye(){return!(e.unstable_now()-H<ee)}function xe(){if(D!==null){var M=e.unstable_now();H=M;var V=!0;try{V=D(!0,M)}finally{V?we():(N=!1,D=null)}}else N=!1}var we;if(typeof d=="function")we=function(){d(xe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,me=$e.port2;$e.port1.onmessage=xe,we=function(){me.postMessage(null)}}else we=function(){g(xe,0)};function dt(M){D=M,N||(N=!0,we())}function Ve(M,V){L=g(function(){M(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){E||k||(E=!0,dt(R))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(M){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var U=v;v=V;try{return M()}finally{v=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=v;v=M;try{return V()}finally{v=U}},e.unstable_scheduleCallback=function(M,V,U){var ae=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ae+U:ae):U=ae,M){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=U+I,M={id:p++,callback:V,priorityLevel:M,startTime:U,expirationTime:I,sortIndex:-1},U>ae?(M.sortIndex=U,t(c,M),n(s)===null&&M===n(c)&&(y?(f(L),L=-1):y=!0,Ve(x,U-ae))):(M.sortIndex=I,t(s,M),E||k||(E=!0,dt(R))),M},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(M){var V=v;return function(){var U=v;v=V;try{return M.apply(this,arguments)}finally{v=U}}}})(Od);(function(e){e.exports=Od})(Uh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=T,mt=kl;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nd=new Set,di={};function Gn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(di[e]=t,e=0;e<t.length;e++)Nd.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,jh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mu={},Tu={};function Bh(e){return Cl.call(Tu,e)?!0:Cl.call(Mu,e)?!1:jh.test(e)?Tu[e]=!0:(Mu[e]=!0,!1)}function Hh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vh(e,t,n,r){if(t===null||typeof t>"u"||Hh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var $s=/[\-:]([a-z])/g;function Os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($s,Os);Qe[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($s,Os);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($s,Os);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ls(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vh(t,n,i,r)&&(n=null),r||i===null?Bh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Ns=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),Md=Symbol.for("react.context"),Ds=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),Ms=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Td=Symbol.for("react.offscreen"),Iu=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=Iu&&e[Iu]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,za;function Kr(e){if(za===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);za=t&&t[1]||""}return`
`+za+e}var _a=!1;function Ua(e,t){if(!e||_a)return"";_a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{_a=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Kr(e):""}function Jh(e){switch(e.tag){case 5:return Kr(e.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 2:case 15:return e=Ua(e.type,!1),e;case 11:return e=Ua(e.type.render,!1),e;case 1:return e=Ua(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case Al:return"Profiler";case Ns:return"StrictMode";case Rl:return"Suspense";case Pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Md:return(e.displayName||"Context")+".Consumer";case Dd:return(e._context.displayName||"Context")+".Provider";case Ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ms:return t=e.displayName||null,t!==null?t:$l(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return $l(e(t))}catch{}}return null}function Gh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(t);case 8:return t===Ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Id(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wh(e){var t=Id(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ji(e){e._valueTracker||(e._valueTracker=Wh(e))}function bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Id(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fd(e,t){t=t.checked,t!=null&&Ls(e,"checked",t,!1)}function Ll(e,t){Fd(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nl(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nl(e,t,n){(t!=="number"||Po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Zr(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function zd(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _d(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_d(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Ud=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qh=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){Qh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function jd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function Bd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Yh=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(Yh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function Ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,gr=null,vr=null;function Uu(e){if(e=Ti(e)){if(typeof Fl!="function")throw Error(O(280));var t=e.stateNode;t&&(t=sa(t),Fl(e.stateNode,e.type,t))}}function Hd(e){gr?vr?vr.push(e):vr=[e]:gr=e}function Vd(){if(gr){var e=gr,t=vr;if(vr=gr=null,Uu(e),t)for(e=0;e<t.length;e++)Uu(t[e])}}function Jd(e,t){return e(t)}function Gd(){}var ja=!1;function Wd(e,t,n){if(ja)return e(t,n);ja=!0;try{return Jd(e,t,n)}finally{ja=!1,(gr!==null||vr!==null)&&(Gd(),Vd())}}function pi(e,t){var n=e.stateNode;if(n===null)return null;var r=sa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var zl=!1;if(qt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){zl=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{zl=!1}function Kh(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var ti=!1,$o=null,Oo=!1,_l=null,Zh={onError:function(e){ti=!0,$o=e}};function Xh(e,t,n,r,i,o,a,l,s){ti=!1,$o=null,Kh.apply(Zh,arguments)}function qh(e,t,n,r,i,o,a,l,s){if(Xh.apply(this,arguments),ti){if(ti){var c=$o;ti=!1,$o=null}else throw Error(O(198));Oo||(Oo=!0,_l=c)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ju(e){if(Wn(e)!==e)throw Error(O(188))}function em(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ju(i),e;if(o===r)return ju(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Yd(e){return e=em(e),e!==null?Kd(e):null}function Kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kd(e);if(t!==null)return t;e=e.sibling}return null}var Zd=mt.unstable_scheduleCallback,Bu=mt.unstable_cancelCallback,tm=mt.unstable_shouldYield,nm=mt.unstable_requestPaint,Ne=mt.unstable_now,rm=mt.unstable_getCurrentPriorityLevel,Is=mt.unstable_ImmediatePriority,Xd=mt.unstable_UserBlockingPriority,Lo=mt.unstable_NormalPriority,im=mt.unstable_LowPriority,qd=mt.unstable_IdlePriority,ia=null,Ht=null;function om(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(ia,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:sm,am=Math.log,lm=Math.LN2;function sm(e){return e>>>=0,e===0?32:31-(am(e)/lm|0)|0}var Hi=64,Vi=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function No(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Xr(l):(o&=a,o!==0&&(r=Xr(o)))}else a=n&~i,a!==0?r=Xr(a):o!==0&&(r=Xr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function um(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Mt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=um(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ef(){var e=Hi;return Hi<<=1,!(Hi&4194240)&&(Hi=64),e}function Ba(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function dm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nf,Fs,rf,of,af,jl=!1,Ji=[],mn=null,gn=null,vn=null,hi=new Map,mi=new Map,dn=[],fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hu(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function Br(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ti(t),t!==null&&Fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pm(e,t,n,r,i){switch(t){case"focusin":return mn=Br(mn,e,t,n,r,i),!0;case"dragenter":return gn=Br(gn,e,t,n,r,i),!0;case"mouseover":return vn=Br(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return hi.set(o,Br(hi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,mi.set(o,Br(mi.get(o)||null,e,t,n,r,i)),!0}return!1}function lf(e){var t=Mn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Qd(n),t!==null){e.blockedOn=t,af(e.priority,function(){rf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return t=Ti(n),t!==null&&Fs(t),e.blockedOn=n,!1;t.shift()}return!0}function Vu(e,t,n){fo(e)&&n.delete(t)}function hm(){jl=!1,mn!==null&&fo(mn)&&(mn=null),gn!==null&&fo(gn)&&(gn=null),vn!==null&&fo(vn)&&(vn=null),hi.forEach(Vu),mi.forEach(Vu)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,hm)))}function gi(e){function t(i){return Hr(i,e)}if(0<Ji.length){Hr(Ji[0],e);for(var n=1;n<Ji.length;n++){var r=Ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Hr(mn,e),gn!==null&&Hr(gn,e),vn!==null&&Hr(vn,e),hi.forEach(t),mi.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)lf(n),n.blockedOn===null&&dn.shift()}var yr=on.ReactCurrentBatchConfig,Do=!0;function mm(e,t,n,r){var i=de,o=yr.transition;yr.transition=null;try{de=1,zs(e,t,n,r)}finally{de=i,yr.transition=o}}function gm(e,t,n,r){var i=de,o=yr.transition;yr.transition=null;try{de=4,zs(e,t,n,r)}finally{de=i,yr.transition=o}}function zs(e,t,n,r){if(Do){var i=Bl(e,t,n,r);if(i===null)Xa(e,t,r,Mo,n),Hu(e,r);else if(pm(i,e,t,n,r))r.stopPropagation();else if(Hu(e,r),t&4&&-1<fm.indexOf(e)){for(;i!==null;){var o=Ti(i);if(o!==null&&nf(o),o=Bl(e,t,n,r),o===null&&Xa(e,t,r,Mo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xa(e,t,r,null,n)}}var Mo=null;function Bl(e,t,n,r){if(Mo=null,e=Ts(r),e=Mn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mo=e,null}function sf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rm()){case Is:return 1;case Xd:return 4;case Lo:case im:return 16;case qd:return 536870912;default:return 16}default:return 16}}var pn=null,_s=null,po=null;function uf(){if(po)return po;var e,t=_s,n=t.length,r,i="value"in pn?pn.value:pn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return po=i.slice(e,1<r?1-r:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function Ju(){return!1}function vt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gi:Ju,this.isPropagationStopped=Ju,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=vt(Mr),Mi=Re({},Mr,{view:0,detail:0}),vm=vt(Mi),Ha,Va,Vr,oa=Re({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Ha=e.screenX-Vr.screenX,Va=e.screenY-Vr.screenY):Va=Ha=0,Vr=e),Ha)},movementY:function(e){return"movementY"in e?e.movementY:Va}}),Gu=vt(oa),ym=Re({},oa,{dataTransfer:0}),xm=vt(ym),wm=Re({},Mi,{relatedTarget:0}),Ja=vt(wm),Sm=Re({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=vt(Sm),km=Re({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cm=vt(km),Am=Re({},Mr,{data:0}),Wu=vt(Am),Rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$m={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Om(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$m[e])?!!t[e]:!1}function js(){return Om}var Lm=Re({},Mi,{key:function(e){if(e.key){var t=Rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=vt(Lm),Dm=Re({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qu=vt(Dm),Mm=Re({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),Tm=vt(Mm),Im=Re({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bm=vt(Im),Fm=Re({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=vt(Fm),_m=[9,13,27,32],Bs=qt&&"CompositionEvent"in window,ni=null;qt&&"documentMode"in document&&(ni=document.documentMode);var Um=qt&&"TextEvent"in window&&!ni,cf=qt&&(!Bs||ni&&8<ni&&11>=ni),Yu=String.fromCharCode(32),Ku=!1;function df(e,t){switch(e){case"keyup":return _m.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function jm(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(Ku=!0,Yu);case"textInput":return e=t.data,e===Yu&&Ku?null:e;default:return null}}function Bm(e,t){if(nr)return e==="compositionend"||!Bs&&df(e,t)?(e=uf(),po=_s=pn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cf&&t.locale!=="ko"?null:t.data;default:return null}}var Hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hm[e.type]:t==="textarea"}function pf(e,t,n,r){Hd(r),t=To(t,"onChange"),0<t.length&&(n=new Us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ri=null,vi=null;function Vm(e){Cf(e,0)}function aa(e){var t=or(e);if(bd(t))return e}function Jm(e,t){if(e==="change")return t}var hf=!1;if(qt){var Ga;if(qt){var Wa="oninput"in document;if(!Wa){var Xu=document.createElement("div");Xu.setAttribute("oninput","return;"),Wa=typeof Xu.oninput=="function"}Ga=Wa}else Ga=!1;hf=Ga&&(!document.documentMode||9<document.documentMode)}function qu(){ri&&(ri.detachEvent("onpropertychange",mf),vi=ri=null)}function mf(e){if(e.propertyName==="value"&&aa(vi)){var t=[];pf(t,vi,e,Ts(e)),Wd(Vm,t)}}function Gm(e,t,n){e==="focusin"?(qu(),ri=t,vi=n,ri.attachEvent("onpropertychange",mf)):e==="focusout"&&qu()}function Wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(vi)}function Qm(e,t){if(e==="click")return aa(t)}function Ym(e,t){if(e==="input"||e==="change")return aa(t)}function Km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:Km;function yi(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cl.call(t,i)||!It(e[i],t[i]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,t){var n=ec(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ec(n)}}function gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vf(){for(var e=window,t=Po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Po(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zm(e){var t=vf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gf(n.ownerDocument.documentElement,n)){if(r!==null&&Hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=tc(n,o);var a=tc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xm=qt&&"documentMode"in document&&11>=document.documentMode,rr=null,Hl=null,ii=null,Vl=!1;function nc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vl||rr==null||rr!==Po(r)||(r=rr,"selectionStart"in r&&Hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ii&&yi(ii,r)||(ii=r,r=To(Hl,"onSelect"),0<r.length&&(t=new Us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionend:Wi("Transition","TransitionEnd")},Qa={},yf={};qt&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function la(e){if(Qa[e])return Qa[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return Qa[e]=t[n];return e}var xf=la("animationend"),wf=la("animationiteration"),Sf=la("animationstart"),Ef=la("transitionend"),kf=new Map,rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){kf.set(e,t),Gn(t,[e])}for(var Ya=0;Ya<rc.length;Ya++){var Ka=rc[Ya],qm=Ka.toLowerCase(),eg=Ka[0].toUpperCase()+Ka.slice(1);Pn(qm,"on"+eg)}Pn(xf,"onAnimationEnd");Pn(wf,"onAnimationIteration");Pn(Sf,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Ef,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function ic(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qh(r,t,void 0,e),e.currentTarget=null}function Cf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;ic(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;ic(i,l,c),o=s}}}if(Oo)throw e=_l,Oo=!1,_l=null,e}function ge(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(Af(t,e,2,!1),n.add(r))}function Za(e,t,n){var r=0;t&&(r|=4),Af(n,e,r,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function xi(e){if(!e[Qi]){e[Qi]=!0,Nd.forEach(function(n){n!=="selectionchange"&&(tg.has(n)||Za(n,!1,e),Za(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,Za("selectionchange",!1,t))}}function Af(e,t,n,r){switch(sf(t)){case 1:var i=mm;break;case 4:i=gm;break;default:i=zs}n=i.bind(null,t,n,e),i=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Mn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Wd(function(){var c=o,p=Ts(n),m=[];e:{var v=kf.get(e);if(v!==void 0){var k=Us,E=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":k=Nm;break;case"focusin":E="focus",k=Ja;break;case"focusout":E="blur",k=Ja;break;case"beforeblur":case"afterblur":k=Ja;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Tm;break;case xf:case wf:case Sf:k=Em;break;case Ef:k=bm;break;case"scroll":k=vm;break;case"wheel":k=zm;break;case"copy":case"cut":case"paste":k=Cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Qu}var y=(t&4)!==0,g=!y&&e==="scroll",f=y?v!==null?v+"Capture":null:v;y=[];for(var d=c,h;d!==null;){h=d;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,f!==null&&(x=pi(d,f),x!=null&&y.push(wi(d,x,h)))),g)break;d=d.return}0<y.length&&(v=new k(v,E,null,n,p),m.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",v&&n!==bl&&(E=n.relatedTarget||n.fromElement)&&(Mn(E)||E[en]))break e;if((k||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,k?(E=n.relatedTarget||n.toElement,k=c,E=E?Mn(E):null,E!==null&&(g=Wn(E),E!==g||E.tag!==5&&E.tag!==6)&&(E=null)):(k=null,E=c),k!==E)){if(y=Gu,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Qu,x="onPointerLeave",f="onPointerEnter",d="pointer"),g=k==null?v:or(k),h=E==null?v:or(E),v=new y(x,d+"leave",k,n,p),v.target=g,v.relatedTarget=h,x=null,Mn(p)===c&&(y=new y(f,d+"enter",E,n,p),y.target=h,y.relatedTarget=g,x=y),g=x,k&&E)t:{for(y=k,f=E,d=0,h=y;h;h=Xn(h))d++;for(h=0,x=f;x;x=Xn(x))h++;for(;0<d-h;)y=Xn(y),d--;for(;0<h-d;)f=Xn(f),h--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=Xn(y),f=Xn(f)}y=null}else y=null;k!==null&&oc(m,v,k,y,!1),E!==null&&g!==null&&oc(m,g,E,y,!0)}}e:{if(v=c?or(c):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var R=Jm;else if(Zu(v))if(hf)R=Ym;else{R=Wm;var N=Gm}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(R=Qm);if(R&&(R=R(e,c))){pf(m,R,n,p);break e}N&&N(e,v,c),e==="focusout"&&(N=v._wrapperState)&&N.controlled&&v.type==="number"&&Nl(v,"number",v.value)}switch(N=c?or(c):window,e){case"focusin":(Zu(N)||N.contentEditable==="true")&&(rr=N,Hl=c,ii=null);break;case"focusout":ii=Hl=rr=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,nc(m,n,p);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":nc(m,n,p)}var D;if(Bs)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else nr?df(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(cf&&n.locale!=="ko"&&(nr||L!=="onCompositionStart"?L==="onCompositionEnd"&&nr&&(D=uf()):(pn=p,_s="value"in pn?pn.value:pn.textContent,nr=!0)),N=To(c,L),0<N.length&&(L=new Wu(L,e,null,n,p),m.push({event:L,listeners:N}),D?L.data=D:(D=ff(n),D!==null&&(L.data=D)))),(D=Um?jm(e,n):Bm(e,n))&&(c=To(c,"onBeforeInput"),0<c.length&&(p=new Wu("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=D))}Cf(m,t)})}function wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function To(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=pi(e,n),o!=null&&r.unshift(wi(e,o,i)),o=pi(e,t),o!=null&&r.push(wi(e,o,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=pi(n,o),s!=null&&a.unshift(wi(n,s,l))):i||(s=pi(n,o),s!=null&&a.push(wi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ng=/\r\n?/g,rg=/\u0000|\uFFFD/g;function ac(e){return(typeof e=="string"?e:""+e).replace(ng,`
`).replace(rg,"")}function Yi(e,t,n){if(t=ac(t),ac(e)!==t&&n)throw Error(O(425))}function Io(){}var Jl=null,Gl=null;function Wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ql=typeof setTimeout=="function"?setTimeout:void 0,ig=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,og=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(ag)}:Ql;function ag(e){setTimeout(function(){throw e})}function qa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),gi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Tr,Si="__reactProps$"+Tr,en="__reactContainer$"+Tr,Yl="__reactEvents$"+Tr,lg="__reactListeners$"+Tr,sg="__reactHandles$"+Tr;function Mn(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sc(e);e!==null;){if(n=e[Bt])return n;e=sc(e)}return t}e=n,n=e.parentNode}return null}function Ti(e){return e=e[Bt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function sa(e){return e[Si]||null}var Kl=[],ar=-1;function $n(e){return{current:e}}function ve(e){0>ar||(e.current=Kl[ar],Kl[ar]=null,ar--)}function he(e,t){ar++,Kl[ar]=e.current,e.current=t}var Rn={},qe=$n(Rn),st=$n(!1),_n=Rn;function kr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function bo(){ve(st),ve(qe)}function uc(e,t,n){if(qe.current!==Rn)throw Error(O(168));he(qe,t),he(st,n)}function Rf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,Gh(e)||"Unknown",i));return Re({},n,r)}function Fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,_n=qe.current,he(qe,e),he(st,st.current),!0}function cc(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Rf(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,ve(st),ve(qe),he(qe,e)):ve(st),he(st,n)}var Qt=null,ua=!1,el=!1;function Pf(e){Qt===null?Qt=[e]:Qt.push(e)}function ug(e){ua=!0,Pf(e)}function On(){if(!el&&Qt!==null){el=!0;var e=0,t=de;try{var n=Qt;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,ua=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),Zd(Is,On),i}finally{de=t,el=!1}}return null}var lr=[],sr=0,zo=null,_o=0,xt=[],wt=0,Un=null,Yt=1,Kt="";function Nn(e,t){lr[sr++]=_o,lr[sr++]=zo,zo=e,_o=t}function $f(e,t,n){xt[wt++]=Yt,xt[wt++]=Kt,xt[wt++]=Un,Un=e;var r=Yt;e=Kt;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var o=32-Mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Yt=1<<32-Mt(t)+i|n<<i|r,Kt=o+e}else Yt=1<<o|n<<i|r,Kt=e}function Vs(e){e.return!==null&&(Nn(e,1),$f(e,1,0))}function Js(e){for(;e===zo;)zo=lr[--sr],lr[sr]=null,_o=lr[--sr],lr[sr]=null;for(;e===Un;)Un=xt[--wt],xt[wt]=null,Kt=xt[--wt],xt[wt]=null,Yt=xt[--wt],xt[wt]=null}var ht=null,pt=null,Ee=!1,Nt=null;function Of(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:Yt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xl(e){if(Ee){var t=pt;if(t){var n=t;if(!dc(e,t)){if(Zl(e))throw Error(O(418));t=yn(n.nextSibling);var r=ht;t&&dc(e,t)?Of(r,n):(e.flags=e.flags&-4097|2,Ee=!1,ht=e)}}else{if(Zl(e))throw Error(O(418));e.flags=e.flags&-4097|2,Ee=!1,ht=e}}}function fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Ki(e){if(e!==ht)return!1;if(!Ee)return fc(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wl(e.type,e.memoizedProps)),t&&(t=pt)){if(Zl(e))throw Lf(),Error(O(418));for(;t;)Of(e,t),t=yn(t.nextSibling)}if(fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?yn(e.stateNode.nextSibling):null;return!0}function Lf(){for(var e=pt;e;)e=yn(e.nextSibling)}function Cr(){pt=ht=null,Ee=!1}function Gs(e){Nt===null?Nt=[e]:Nt.push(e)}var cg=on.ReactCurrentBatchConfig;function Ot(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Uo=$n(null),jo=null,ur=null,Ws=null;function Qs(){Ws=ur=jo=null}function Ys(e){var t=Uo.current;ve(Uo),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){jo=e,Ws=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Ws!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(jo===null)throw Error(O(308));ur=e,jo.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Tn=null;function Ks(e){Tn===null?Tn=[e]:Tn.push(e)}function Nf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ks(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ks(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}function pc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var i=e.updateQueue;cn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;a=0,p=c=s=null,l=o;do{var v=l.lane,k=l.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=e,y=l;switch(v=t,k=n,y.tag){case 1:if(E=y.payload,typeof E=="function"){m=E.call(k,m,v);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=y.payload,v=typeof E=="function"?E.call(k,m,v):E,v==null)break e;m=Re({},m,v);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=k,s=m):p=p.next=k,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(p===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Bn|=a,e.lanes=a,e.memoizedState=m}}function hc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var Mf=new Ld.Component().refs;function es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ca={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Sn(e),o=Zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Tt(t,e,i,r),mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Sn(e),o=Zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Tt(t,e,i,r),mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Sn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Tt(t,e,r,n),mo(t,e,r))}};function mc(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!yi(n,r)||!yi(i,o):!0}function Tf(e,t,n){var r=!1,i=Rn,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=ut(t)?_n:qe.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):Rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ca,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ca.enqueueReplaceState(t,t.state,null)}function ts(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Mf,Zs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=ut(t)?_n:qe.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(es(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ca.enqueueReplaceState(i,i.state,null),Bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Mf&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vc(e){var t=e._init;return t(e._payload)}function If(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=En(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,h,x){return d===null||d.tag!==6?(d=ll(h,f.mode,x),d.return=f,d):(d=i(d,h),d.return=f,d)}function s(f,d,h,x){var R=h.type;return R===tr?p(f,d,h.props.children,x,h.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===un&&vc(R)===d.type)?(x=i(d,h.props),x.ref=Jr(f,d,h),x.return=f,x):(x=So(h.type,h.key,h.props,null,f.mode,x),x.ref=Jr(f,d,h),x.return=f,x)}function c(f,d,h,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=sl(h,f.mode,x),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function p(f,d,h,x,R){return d===null||d.tag!==7?(d=zn(h,f.mode,x,R),d.return=f,d):(d=i(d,h),d.return=f,d)}function m(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ll(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ui:return h=So(d.type,d.key,d.props,null,f.mode,h),h.ref=Jr(f,null,d),h.return=f,h;case er:return d=sl(d,f.mode,h),d.return=f,d;case un:var x=d._init;return m(f,x(d._payload),h)}if(Zr(d)||Ur(d))return d=zn(d,f.mode,h,null),d.return=f,d;Zi(f,d)}return null}function v(f,d,h,x){var R=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return R!==null?null:l(f,d,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:return h.key===R?s(f,d,h,x):null;case er:return h.key===R?c(f,d,h,x):null;case un:return R=h._init,v(f,d,R(h._payload),x)}if(Zr(h)||Ur(h))return R!==null?null:p(f,d,h,x,null);Zi(f,h)}return null}function k(f,d,h,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(h)||null,l(d,f,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ui:return f=f.get(x.key===null?h:x.key)||null,s(d,f,x,R);case er:return f=f.get(x.key===null?h:x.key)||null,c(d,f,x,R);case un:var N=x._init;return k(f,d,h,N(x._payload),R)}if(Zr(x)||Ur(x))return f=f.get(h)||null,p(d,f,x,R,null);Zi(d,x)}return null}function E(f,d,h,x){for(var R=null,N=null,D=d,L=d=0,ee=null;D!==null&&L<h.length;L++){D.index>L?(ee=D,D=null):ee=D.sibling;var H=v(f,D,h[L],x);if(H===null){D===null&&(D=ee);break}e&&D&&H.alternate===null&&t(f,D),d=o(H,d,L),N===null?R=H:N.sibling=H,N=H,D=ee}if(L===h.length)return n(f,D),Ee&&Nn(f,L),R;if(D===null){for(;L<h.length;L++)D=m(f,h[L],x),D!==null&&(d=o(D,d,L),N===null?R=D:N.sibling=D,N=D);return Ee&&Nn(f,L),R}for(D=r(f,D);L<h.length;L++)ee=k(D,f,L,h[L],x),ee!==null&&(e&&ee.alternate!==null&&D.delete(ee.key===null?L:ee.key),d=o(ee,d,L),N===null?R=ee:N.sibling=ee,N=ee);return e&&D.forEach(function(ye){return t(f,ye)}),Ee&&Nn(f,L),R}function y(f,d,h,x){var R=Ur(h);if(typeof R!="function")throw Error(O(150));if(h=R.call(h),h==null)throw Error(O(151));for(var N=R=null,D=d,L=d=0,ee=null,H=h.next();D!==null&&!H.done;L++,H=h.next()){D.index>L?(ee=D,D=null):ee=D.sibling;var ye=v(f,D,H.value,x);if(ye===null){D===null&&(D=ee);break}e&&D&&ye.alternate===null&&t(f,D),d=o(ye,d,L),N===null?R=ye:N.sibling=ye,N=ye,D=ee}if(H.done)return n(f,D),Ee&&Nn(f,L),R;if(D===null){for(;!H.done;L++,H=h.next())H=m(f,H.value,x),H!==null&&(d=o(H,d,L),N===null?R=H:N.sibling=H,N=H);return Ee&&Nn(f,L),R}for(D=r(f,D);!H.done;L++,H=h.next())H=k(D,f,L,H.value,x),H!==null&&(e&&H.alternate!==null&&D.delete(H.key===null?L:H.key),d=o(H,d,L),N===null?R=H:N.sibling=H,N=H);return e&&D.forEach(function(xe){return t(f,xe)}),Ee&&Nn(f,L),R}function g(f,d,h,x){if(typeof h=="object"&&h!==null&&h.type===tr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:e:{for(var R=h.key,N=d;N!==null;){if(N.key===R){if(R=h.type,R===tr){if(N.tag===7){n(f,N.sibling),d=i(N,h.props.children),d.return=f,f=d;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===un&&vc(R)===N.type){n(f,N.sibling),d=i(N,h.props),d.ref=Jr(f,N,h),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}h.type===tr?(d=zn(h.props.children,f.mode,x,h.key),d.return=f,f=d):(x=So(h.type,h.key,h.props,null,f.mode,x),x.ref=Jr(f,d,h),x.return=f,f=x)}return a(f);case er:e:{for(N=h.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=sl(h,f.mode,x),d.return=f,f=d}return a(f);case un:return N=h._init,g(f,d,N(h._payload),x)}if(Zr(h))return E(f,d,h,x);if(Ur(h))return y(f,d,h,x);Zi(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,h),d.return=f,f=d):(n(f,d),d=ll(h,f.mode,x),d.return=f,f=d),a(f)):n(f,d)}return g}var Ar=If(!0),bf=If(!1),Ii={},Vt=$n(Ii),Ei=$n(Ii),ki=$n(Ii);function In(e){if(e===Ii)throw Error(O(174));return e}function Xs(e,t){switch(he(ki,t),he(Ei,e),he(Vt,Ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}ve(Vt),he(Vt,t)}function Rr(){ve(Vt),ve(Ei),ve(ki)}function Ff(e){In(ki.current);var t=In(Vt.current),n=Ml(t,e.type);t!==n&&(he(Ei,e),he(Vt,n))}function qs(e){Ei.current===e&&(ve(Vt),ve(Ei))}var Ce=$n(0);function Ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function eu(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var go=on.ReactCurrentDispatcher,nl=on.ReactCurrentBatchConfig,jn=0,Ae=null,Fe=null,je=null,Vo=!1,oi=!1,Ci=0,dg=0;function Ke(){throw Error(O(321))}function tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function nu(e,t,n,r,i,o){if(jn=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?mg:gg,e=n(r,i),oi){o=0;do{if(oi=!1,Ci=0,25<=o)throw Error(O(301));o+=1,je=Fe=null,t.updateQueue=null,go.current=vg,e=n(r,i)}while(oi)}if(go.current=Jo,t=Fe!==null&&Fe.next!==null,jn=0,je=Fe=Ae=null,Vo=!1,t)throw Error(O(300));return e}function ru(){var e=Ci!==0;return Ci=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ae.memoizedState=je=e:je=je.next=e,je}function Ct(){if(Fe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=je===null?Ae.memoizedState:je.next;if(t!==null)je=t,Fe=e;else{if(e===null)throw Error(O(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},je===null?Ae.memoizedState=je=e:je=je.next=e}return je}function Ai(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var p=c.lane;if((jn&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=m,a=r):s=s.next=m,Ae.lanes|=p,Bn|=p}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,It(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,Bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);It(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zf(){}function _f(e,t){var n=Ae,r=Ct(),i=t(),o=!It(r.memoizedState,i);if(o&&(r.memoizedState=i,lt=!0),r=r.queue,iu(Bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Ri(9,jf.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(O(349));jn&30||Uf(n,t,i)}return i}function Uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jf(e,t,n,r){t.value=n,t.getSnapshot=r,Hf(t)&&Vf(e)}function Bf(e,t,n){return n(function(){Hf(t)&&Vf(e)})}function Hf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Vf(e){var t=tn(e,1);t!==null&&Tt(t,e,1,-1)}function yc(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:e},t.queue=e,e=e.dispatch=hg.bind(null,Ae,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jf(){return Ct().memoizedState}function vo(e,t,n,r){var i=Ut();Ae.flags|=e,i.memoizedState=Ri(1|t,n,void 0,r===void 0?null:r)}function da(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&tu(r,a.deps)){i.memoizedState=Ri(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Ri(1|t,n,o,r)}function xc(e,t){return vo(8390656,8,e,t)}function iu(e,t){return da(2048,8,e,t)}function Gf(e,t){return da(4,2,e,t)}function Wf(e,t){return da(4,4,e,t)}function Qf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yf(e,t,n){return n=n!=null?n.concat([e]):null,da(4,4,Qf.bind(null,t,e),n)}function ou(){}function Kf(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zf(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xf(e,t,n){return jn&21?(It(n,t)||(n=ef(),Ae.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function fg(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),t()}finally{de=n,nl.transition=r}}function qf(){return Ct().memoizedState}function pg(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ep(e))tp(t,n);else if(n=Nf(e,t,n,r),n!==null){var i=nt();Tt(n,e,r,i),np(n,t,r)}}function hg(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ep(e))tp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,a)){var s=t.interleaved;s===null?(i.next=i,Ks(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Nf(e,t,i,r),n!==null&&(i=nt(),Tt(n,e,r,i),np(n,t,r))}}function ep(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function tp(e,t){oi=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function np(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}var Jo={readContext:kt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},mg={readContext:kt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:xc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vo(4194308,4,Qf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return vo(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pg.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:yc,useDebugValue:ou,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=yc(!1),t=e[0];return e=fg.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Ut();if(Ee){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Be===null)throw Error(O(349));jn&30||Uf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xc(Bf.bind(null,r,o,e),[e]),r.flags|=2048,Ri(9,jf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Be.identifierPrefix;if(Ee){var n=Kt,r=Yt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gg={readContext:kt,useCallback:Kf,useContext:kt,useEffect:iu,useImperativeHandle:Yf,useInsertionEffect:Gf,useLayoutEffect:Wf,useMemo:Zf,useReducer:rl,useRef:Jf,useState:function(){return rl(Ai)},useDebugValue:ou,useDeferredValue:function(e){var t=Ct();return Xf(t,Fe.memoizedState,e)},useTransition:function(){var e=rl(Ai)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:_f,useId:qf,unstable_isNewReconciler:!1},vg={readContext:kt,useCallback:Kf,useContext:kt,useEffect:iu,useImperativeHandle:Yf,useInsertionEffect:Gf,useLayoutEffect:Wf,useMemo:Zf,useReducer:il,useRef:Jf,useState:function(){return il(Ai)},useDebugValue:ou,useDeferredValue:function(e){var t=Ct();return Fe===null?t.memoizedState=e:Xf(t,Fe.memoizedState,e)},useTransition:function(){var e=il(Ai)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:_f,useId:qf,unstable_isNewReconciler:!1};function Pr(e,t){try{var n="",r=t;do n+=Jh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yg=typeof WeakMap=="function"?WeakMap:Map;function rp(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wo||(Wo=!0,fs=r),ns(e,t)},n}function ip(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ns(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ns(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function wc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dg.bind(null,e,t,n),t.then(e,e))}function Sc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ec(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var xg=on.ReactCurrentOwner,lt=!1;function et(e,t,n,r){t.child=e===null?bf(t,null,n,r):Ar(t,e.child,n,r)}function kc(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=nu(e,t,n,r,o,i),n=ru(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&n&&Vs(t),t.flags|=1,et(e,t,r,i),t.child)}function Cc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!pu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,op(e,t,o,r,i)):(e=So(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:yi,n(a,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=En(o,r),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(yi(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,nn(e,t,i)}return rs(e,t,n,r,i)}function ap(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(dr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(dr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(dr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(dr,ft),ft|=r;return et(e,t,i,n),t.child}function lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,n,r,i){var o=ut(n)?_n:qe.current;return o=kr(t,o),xr(t,i),n=nu(e,t,n,r,o,i),r=ru(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&r&&Vs(t),t.flags|=1,et(e,t,n,i),t.child)}function Ac(e,t,n,r,i){if(ut(n)){var o=!0;Fo(t)}else o=!1;if(xr(t,i),t.stateNode===null)yo(e,t),Tf(t,n,r),ts(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=kt(c):(c=ut(n)?_n:qe.current,c=kr(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&gc(t,a,r,c),cn=!1;var v=t.memoizedState;a.state=v,Bo(t,r,a,i),s=t.memoizedState,l!==r||v!==s||st.current||cn?(typeof p=="function"&&(es(t,n,p,r),s=t.memoizedState),(l=cn||mc(t,n,l,r,v,s,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Df(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ot(t.type,l),a.props=c,m=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=kt(s):(s=ut(n)?_n:qe.current,s=kr(t,s));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||v!==s)&&gc(t,a,r,s),cn=!1,v=t.memoizedState,a.state=v,Bo(t,r,a,i);var E=t.memoizedState;l!==m||v!==E||st.current||cn?(typeof k=="function"&&(es(t,n,k,r),E=t.memoizedState),(c=cn||mc(t,n,c,r,v,E,s)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,E,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,E,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),a.props=r,a.state=E,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return is(e,t,n,r,o,i)}function is(e,t,n,r,i,o){lp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&cc(t,n,!1),nn(e,t,o);r=t.stateNode,xg.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ar(t,e.child,null,o),t.child=Ar(t,null,l,o)):et(e,t,l,o),t.memoizedState=r.state,i&&cc(t,n,!0),t.child}function sp(e){var t=e.stateNode;t.pendingContext?uc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uc(e,t.context,!1),Xs(e,t.containerInfo)}function Rc(e,t,n,r,i){return Cr(),Gs(i),t.flags|=256,et(e,t,n,r),t.child}var os={dehydrated:null,treeContext:null,retryLane:0};function as(e){return{baseLanes:e,cachePool:null,transitions:null}}function up(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Ce,i&1),e===null)return Xl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ha(a,r,0,null),e=zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=as(n),t.memoizedState=os,e):au(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return wg(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=En(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=En(l,o):(o=zn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?as(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=os,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function au(e,t){return t=ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xi(e,t,n,r){return r!==null&&Gs(r),Ar(t,e.child,null,n),e=au(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wg(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(O(422))),Xi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ha({mode:"visible",children:r.children},i,0,null),o=zn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ar(t,e.child,null,a),t.child.memoizedState=as(a),t.memoizedState=os,o);if(!(t.mode&1))return Xi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(O(419)),r=ol(o,r,void 0),Xi(e,t,a,r)}if(l=(a&e.childLanes)!==0,lt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),Tt(r,e,i,-1))}return fu(),r=ol(Error(O(421))),Xi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=yn(i.nextSibling),ht=t,Ee=!0,Nt=null,e!==null&&(xt[wt++]=Yt,xt[wt++]=Kt,xt[wt++]=Un,Yt=e.id,Kt=e.overflow,Un=t),t=au(t,r.children),t.flags|=4096,t)}function Pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function al(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,n,t);else if(e.tag===19)Pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,o);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sg(e,t,n){switch(t.tag){case 3:sp(t),Cr();break;case 5:Ff(t);break;case 1:ut(t.type)&&Fo(t);break;case 4:Xs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Uo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?up(e,t,n):(he(Ce,Ce.current&1),e=nn(e,t,n),e!==null?e.sibling:null);he(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,ap(e,t,n)}return nn(e,t,n)}var dp,ls,fp,pp;dp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ls=function(){};fp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(Vt.current);var o=null;switch(n){case"input":i=Ol(e,i),r=Ol(e,r),o=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":i=Dl(e,i),r=Dl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Io)}Tl(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(di.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(di.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ge("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};pp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Eg(e,t,n){var r=t.pendingProps;switch(Js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ut(t.type)&&bo(),Ze(t),null;case 3:return r=t.stateNode,Rr(),ve(st),ve(qe),eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(ms(Nt),Nt=null))),ls(e,t),Ze(t),null;case 5:qs(t);var i=In(ki.current);if(n=t.type,e!==null&&t.stateNode!=null)fp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ze(t),null}if(e=In(Vt.current),Ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Bt]=t,r[Si]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<qr.length;i++)ge(qr[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":bu(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":zu(r,o),ge("invalid",r)}Tl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,l,e),i=["children",""+l]):di.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":ji(r),Fu(r,o,!0);break;case"textarea":ji(r),_u(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Io)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_d(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Bt]=t,e[Si]=r,dp(e,t,!1,!1),t.stateNode=e;e:{switch(a=Il(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<qr.length;i++)ge(qr[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":bu(e,r),i=Ol(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ge("invalid",e);break;case"textarea":zu(e,r),i=Dl(e,r),ge("invalid",e);break;default:i=r}Tl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Bd(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ud(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&fi(e,s):typeof s=="number"&&fi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(di.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&Ls(e,o,s,a))}switch(n){case"input":ji(e),Fu(e,r,!1);break;case"textarea":ji(e),_u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)pp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=In(ki.current),In(Vt.current),Ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&pt!==null&&t.mode&1&&!(t.flags&128))Lf(),Cr(),t.flags|=98560,o=!1;else if(o=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[Bt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else Nt!==null&&(ms(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?ze===0&&(ze=3):fu())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Rr(),ls(e,t),e===null&&xi(t.stateNode.containerInfo),Ze(t),null;case 10:return Ys(t.type._context),Ze(t),null;case 17:return ut(t.type)&&bo(),Ze(t),null;case 19:if(ve(Ce),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Gr(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ho(e),a!==null){for(t.flags|=128,Gr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ne()>$r&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ho(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ee)return Ze(t),null}else 2*Ne()-o.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ne(),t.sibling=null,n=Ce.current,he(Ce,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function kg(e,t){switch(Js(t),t.tag){case 1:return ut(t.type)&&bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),ve(st),ve(qe),eu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qs(t),null;case 13:if(ve(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ce),null;case 4:return Rr(),null;case 10:return Ys(t.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var qi=!1,Xe=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,_=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function ss(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var $c=!1;function Ag(e,t){if(Jl=Do,e=vf(),Hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,p=0,m=e,v=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==o||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(k=m.firstChild)!==null;)v=m,m=k;for(;;){if(m===e)break t;if(v===n&&++c===i&&(l=a),v===o&&++p===r&&(s=a),(k=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=k}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},Do=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var y=E.memoizedProps,g=E.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ot(t.type,y),g);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(x){Pe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return E=$c,$c=!1,E}function ai(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ss(t,n,o)}i=i.next}while(i!==r)}}function fa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hp(e){var t=e.alternate;t!==null&&(e.alternate=null,hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[Si],delete t[Yl],delete t[lg],delete t[sg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mp(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Io));else if(r!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}var Ge=null,Lt=!1;function sn(e,t,n){for(n=n.child;n!==null;)gp(e,t,n),n=n.sibling}function gp(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(ia,n)}catch{}switch(n.tag){case 5:Xe||cr(n,t);case 6:var r=Ge,i=Lt;Ge=null,sn(e,t,n),Ge=r,Lt=i,Ge!==null&&(Lt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Lt?(e=Ge,n=n.stateNode,e.nodeType===8?qa(e.parentNode,n):e.nodeType===1&&qa(e,n),gi(e)):qa(Ge,n.stateNode));break;case 4:r=Ge,i=Lt,Ge=n.stateNode.containerInfo,Lt=!0,sn(e,t,n),Ge=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ss(n,t,a),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!Xe&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,t,l)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,sn(e,t,n),Xe=r):sn(e,t,n);break;default:sn(e,t,n)}}function Lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cg),t.forEach(function(r){var i=Tg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Lt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Lt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(Ge===null)throw Error(O(160));gp(o,a,i),Ge=null,Lt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Pe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vp(t,e),t=t.sibling}function vp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),_t(e),r&4){try{ai(3,e,e.return),fa(3,e)}catch(y){Pe(e,e.return,y)}try{ai(5,e,e.return)}catch(y){Pe(e,e.return,y)}}break;case 1:$t(t,e),_t(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if($t(t,e),_t(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{fi(i,"")}catch(y){Pe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Fd(i,o),Il(l,a);var c=Il(l,o);for(a=0;a<s.length;a+=2){var p=s[a],m=s[a+1];p==="style"?Bd(i,m):p==="dangerouslySetInnerHTML"?Ud(i,m):p==="children"?fi(i,m):Ls(i,p,m,c)}switch(l){case"input":Ll(i,o);break;case"textarea":zd(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?mr(i,!!o.multiple,k,!1):v!==!!o.multiple&&(o.defaultValue!=null?mr(i,!!o.multiple,o.defaultValue,!0):mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Si]=o}catch(y){Pe(e,e.return,y)}}break;case 6:if($t(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Pe(e,e.return,y)}}break;case 3:if($t(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(y){Pe(e,e.return,y)}break;case 4:$t(t,e),_t(e);break;case 13:$t(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(uu=Ne())),r&4&&Lc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(c=Xe)||p,$t(t,e),Xe=c):$t(t,e),_t(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(m=_=p;_!==null;){switch(v=_,k=v.child,v.tag){case 0:case 11:case 14:case 15:ai(4,v,v.return);break;case 1:cr(v,v.return);var E=v.stateNode;if(typeof E.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(y){Pe(r,n,y)}}break;case 5:cr(v,v.return);break;case 22:if(v.memoizedState!==null){Dc(m);continue}}k!==null?(k.return=v,_=k):Dc(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=jd("display",a))}catch(y){Pe(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){Pe(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:$t(t,e),_t(e),r&4&&Lc(e);break;case 21:break;default:$t(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mp(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fi(i,""),r.flags&=-33);var o=Oc(e);ds(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Oc(e);cs(e,l,a);break;default:throw Error(O(161))}}catch(s){Pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rg(e,t,n){_=e,yp(e)}function yp(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||qi;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Xe;l=qi;var c=Xe;if(qi=a,(Xe=s)&&!c)for(_=i;_!==null;)a=_,s=a.child,a.tag===22&&a.memoizedState!==null?Mc(i):s!==null?(s.return=a,_=s):Mc(i);for(;o!==null;)_=o,yp(o),o=o.sibling;_=i,qi=l,Xe=c}Nc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Nc(e)}}function Nc(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||fa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&gi(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Xe||t.flags&512&&us(t)}catch(v){Pe(t,t.return,v)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Dc(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Mc(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fa(4,t)}catch(s){Pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Pe(t,i,s)}}var o=t.return;try{us(t)}catch(s){Pe(t,o,s)}break;case 5:var a=t.return;try{us(t)}catch(s){Pe(t,a,s)}}}catch(s){Pe(t,t.return,s)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var Pg=Math.ceil,Go=on.ReactCurrentDispatcher,lu=on.ReactCurrentOwner,Et=on.ReactCurrentBatchConfig,se=0,Be=null,Me=null,We=0,ft=0,dr=$n(0),ze=0,Pi=null,Bn=0,pa=0,su=0,li=null,at=null,uu=0,$r=1/0,Gt=null,Wo=!1,fs=null,wn=null,eo=!1,hn=null,Qo=0,si=0,ps=null,xo=-1,wo=0;function nt(){return se&6?Ne():xo!==-1?xo:xo=Ne()}function Sn(e){return e.mode&1?se&2&&We!==0?We&-We:cg.transition!==null?(wo===0&&(wo=ef()),wo):(e=de,e!==0||(e=window.event,e=e===void 0?16:sf(e.type)),e):1}function Tt(e,t,n,r){if(50<si)throw si=0,ps=null,Error(O(185));Di(e,n,r),(!(se&2)||e!==Be)&&(e===Be&&(!(se&2)&&(pa|=n),ze===4&&fn(e,We)),ct(e,r),n===1&&se===0&&!(t.mode&1)&&($r=Ne()+500,ua&&On()))}function ct(e,t){var n=e.callbackNode;cm(e,t);var r=No(e,e===Be?We:0);if(r===0)n!==null&&Bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bu(n),t===1)e.tag===0?ug(Tc.bind(null,e)):Pf(Tc.bind(null,e)),og(function(){!(se&6)&&On()}),n=null;else{switch(tf(r)){case 1:n=Is;break;case 4:n=Xd;break;case 16:n=Lo;break;case 536870912:n=qd;break;default:n=Lo}n=Rp(n,xp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xp(e,t){if(xo=-1,wo=0,se&6)throw Error(O(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=No(e,e===Be?We:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yo(e,r);else{t=r;var i=se;se|=2;var o=Sp();(Be!==e||We!==t)&&(Gt=null,$r=Ne()+500,Fn(e,t));do try{Lg();break}catch(l){wp(e,l)}while(1);Qs(),Go.current=o,se=i,Me!==null?t=0:(Be=null,We=0,t=ze)}if(t!==0){if(t===2&&(i=Ul(e),i!==0&&(r=i,t=hs(e,i))),t===1)throw n=Pi,Fn(e,0),fn(e,r),ct(e,Ne()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!$g(i)&&(t=Yo(e,r),t===2&&(o=Ul(e),o!==0&&(r=o,t=hs(e,o))),t===1))throw n=Pi,Fn(e,0),fn(e,r),ct(e,Ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Dn(e,at,Gt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=uu+500-Ne(),10<t)){if(No(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ql(Dn.bind(null,e,at,Gt),t);break}Dn(e,at,Gt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pg(r/1960))-r,10<r){e.timeoutHandle=Ql(Dn.bind(null,e,at,Gt),r);break}Dn(e,at,Gt);break;case 5:Dn(e,at,Gt);break;default:throw Error(O(329))}}}return ct(e,Ne()),e.callbackNode===n?xp.bind(null,e):null}function hs(e,t){var n=li;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=at,at=n,t!==null&&ms(t)),e}function ms(e){at===null?at=e:at.push.apply(at,e)}function $g(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~su,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function Tc(e){if(se&6)throw Error(O(327));wr();var t=No(e,0);if(!(t&1))return ct(e,Ne()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=hs(e,r))}if(n===1)throw n=Pi,Fn(e,0),fn(e,t),ct(e,Ne()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,at,Gt),ct(e,Ne()),null}function cu(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&($r=Ne()+500,ua&&On())}}function Hn(e){hn!==null&&hn.tag===0&&!(se&6)&&wr();var t=se;se|=1;var n=Et.transition,r=de;try{if(Et.transition=null,de=1,e)return e()}finally{de=r,Et.transition=n,se=t,!(se&6)&&On()}}function du(){ft=dr.current,ve(dr)}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ig(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Js(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:Rr(),ve(st),ve(qe),eu();break;case 5:qs(r);break;case 4:Rr();break;case 13:ve(Ce);break;case 19:ve(Ce);break;case 10:Ys(r.type._context);break;case 22:case 23:du()}n=n.return}if(Be=e,Me=e=En(e.current,null),We=ft=t,ze=0,Pi=null,su=pa=Bn=0,at=li=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Tn=null}return e}function wp(e,t){do{var n=Me;try{if(Qs(),go.current=Jo,Vo){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vo=!1}if(jn=0,je=Fe=Ae=null,oi=!1,Ci=0,lu.current=null,n===null||n.return===null){ze=1,Pi=t,Me=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=We,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=Sc(a);if(k!==null){k.flags&=-257,Ec(k,a,l,o,t),k.mode&1&&wc(o,c,t),t=k,s=c;var E=t.updateQueue;if(E===null){var y=new Set;y.add(s),t.updateQueue=y}else E.add(s);break e}else{if(!(t&1)){wc(o,c,t),fu();break e}s=Error(O(426))}}else if(Ee&&l.mode&1){var g=Sc(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ec(g,a,l,o,t),Gs(Pr(s,l));break e}}o=s=Pr(s,l),ze!==4&&(ze=2),li===null?li=[o]:li.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=rp(o,s,t);pc(o,f);break e;case 1:l=s;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wn===null||!wn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ip(o,l,t);pc(o,x);break e}}o=o.return}while(o!==null)}kp(n)}catch(R){t=R,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function Sp(){var e=Go.current;return Go.current=Jo,e===null?Jo:e}function fu(){(ze===0||ze===3||ze===2)&&(ze=4),Be===null||!(Bn&268435455)&&!(pa&268435455)||fn(Be,We)}function Yo(e,t){var n=se;se|=2;var r=Sp();(Be!==e||We!==t)&&(Gt=null,Fn(e,t));do try{Og();break}catch(i){wp(e,i)}while(1);if(Qs(),se=n,Go.current=r,Me!==null)throw Error(O(261));return Be=null,We=0,ze}function Og(){for(;Me!==null;)Ep(Me)}function Lg(){for(;Me!==null&&!tm();)Ep(Me)}function Ep(e){var t=Ap(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?kp(e):Me=t,lu.current=null}function kp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kg(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Me=null;return}}else if(n=Eg(n,t,ft),n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);ze===0&&(ze=5)}function Dn(e,t,n){var r=de,i=Et.transition;try{Et.transition=null,de=1,Ng(e,t,n,r)}finally{Et.transition=i,de=r}return null}function Ng(e,t,n,r){do wr();while(hn!==null);if(se&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(dm(e,o),e===Be&&(Me=Be=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,Rp(Lo,function(){return wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Et.transition,Et.transition=null;var a=de;de=1;var l=se;se|=4,lu.current=null,Ag(e,n),vp(n,e),Zm(Gl),Do=!!Jl,Gl=Jl=null,e.current=n,Rg(n),nm(),se=l,de=a,Et.transition=o}else e.current=n;if(eo&&(eo=!1,hn=e,Qo=i),o=e.pendingLanes,o===0&&(wn=null),om(n.stateNode),ct(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,e=fs,fs=null,e;return Qo&1&&e.tag!==0&&wr(),o=e.pendingLanes,o&1?e===ps?si++:(si=0,ps=e):si=0,On(),null}function wr(){if(hn!==null){var e=tf(Qo),t=Et.transition,n=de;try{if(Et.transition=null,de=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,Qo=0,se&6)throw Error(O(331));var i=se;for(se|=4,_=e.current;_!==null;){var o=_,a=o.child;if(_.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(_=c;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:ai(8,p,o)}var m=p.child;if(m!==null)m.return=p,_=m;else for(;_!==null;){p=_;var v=p.sibling,k=p.return;if(hp(p),p===c){_=null;break}if(v!==null){v.return=k,_=v;break}_=k}}}var E=o.alternate;if(E!==null){var y=E.child;if(y!==null){E.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}_=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,_=a;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ai(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){a=_;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,_=h;else e:for(a=d;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fa(9,l)}}catch(R){Pe(l,l.return,R)}if(l===a){_=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,_=x;break e}_=l.return}}if(se=i,On(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(ia,e)}catch{}r=!0}return r}finally{de=n,Et.transition=t}}return!1}function Ic(e,t,n){t=Pr(n,t),t=rp(e,t,1),e=xn(e,t,1),t=nt(),e!==null&&(Di(e,1,t),ct(e,t))}function Pe(e,t,n){if(e.tag===3)Ic(e,e,n);else for(;t!==null;){if(t.tag===3){Ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Pr(n,e),e=ip(t,e,1),t=xn(t,e,1),e=nt(),t!==null&&(Di(t,1,e),ct(t,e));break}}t=t.return}}function Dg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(We&n)===n&&(ze===4||ze===3&&(We&130023424)===We&&500>Ne()-uu?Fn(e,0):su|=n),ct(e,t)}function Cp(e,t){t===0&&(e.mode&1?(t=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):t=1);var n=nt();e=tn(e,t),e!==null&&(Di(e,t,n),ct(e,n))}function Mg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cp(e,n)}function Tg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),Cp(e,n)}var Ap;Ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,Sg(e,t,n);lt=!!(e.flags&131072)}else lt=!1,Ee&&t.flags&1048576&&$f(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yo(e,t),e=t.pendingProps;var i=kr(t,qe.current);xr(t,n),i=nu(null,t,r,e,i,n);var o=ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,Fo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zs(t),i.updater=ca,t.stateNode=i,i._reactInternals=t,ts(t,r,e,n),t=is(null,t,r,!0,o,n)):(t.tag=0,Ee&&o&&Vs(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bg(r),e=Ot(r,e),i){case 0:t=rs(null,t,r,e,n);break e;case 1:t=Ac(null,t,r,e,n);break e;case 11:t=kc(null,t,r,e,n);break e;case 14:t=Cc(null,t,r,Ot(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),rs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Ac(e,t,r,i,n);case 3:e:{if(sp(t),e===null)throw Error(O(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Df(e,t),Bo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Pr(Error(O(423)),t),t=Rc(e,t,r,n,i);break e}else if(r!==i){i=Pr(Error(O(424)),t),t=Rc(e,t,r,n,i);break e}else for(pt=yn(t.stateNode.containerInfo.firstChild),ht=t,Ee=!0,Nt=null,n=bf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===i){t=nn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Ff(t),e===null&&Xl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Wl(r,i)?a=null:o!==null&&Wl(r,o)&&(t.flags|=32),lp(e,t),et(e,t,a,n),t.child;case 6:return e===null&&Xl(t),null;case 13:return up(e,t,n);case 4:return Xs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),kc(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(Uo,r._currentValue),r._currentValue=a,o!==null)if(It(o.value,a)){if(o.children===i.children&&!st.current){t=nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Zt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ql(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(O(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ql(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=kt(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),Cc(e,t,r,i,n);case 15:return op(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),yo(e,t),t.tag=1,ut(r)?(e=!0,Fo(t)):e=!1,xr(t,n),Tf(t,r,i),ts(t,r,i,n),is(null,t,r,!0,e,n);case 19:return cp(e,t,n);case 22:return ap(e,t,n)}throw Error(O(156,t.tag))};function Rp(e,t){return Zd(e,t)}function Ig(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Ig(e,t,n,r)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bg(e){if(typeof e=="function")return pu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ds)return 11;if(e===Ms)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")pu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case tr:return zn(n.children,i,o,t);case Ns:a=8,i|=8;break;case Al:return e=St(12,n,t,i|2),e.elementType=Al,e.lanes=o,e;case Rl:return e=St(13,n,t,i),e.elementType=Rl,e.lanes=o,e;case Pl:return e=St(19,n,t,i),e.elementType=Pl,e.lanes=o,e;case Td:return ha(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dd:a=10;break e;case Md:a=9;break e;case Ds:a=11;break e;case Ms:a=14;break e;case un:a=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=St(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zn(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function ha(e,t,n,r){return e=St(22,e,r,t),e.elementType=Td,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ba(0),this.expirationTimes=Ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ba(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hu(e,t,n,r,i,o,a,l,s){return e=new Fg(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zs(o),e}function zg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pp(e){if(!e)return Rn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(ut(n))return Rf(e,n,t)}return t}function $p(e,t,n,r,i,o,a,l,s){return e=hu(n,r,!0,e,i,o,a,l,s),e.context=Pp(null),n=e.current,r=nt(),i=Sn(n),o=Zt(r,i),o.callback=t??null,xn(n,o,i),e.current.lanes=i,Di(e,i,r),ct(e,r),e}function ma(e,t,n,r){var i=t.current,o=nt(),a=Sn(i);return n=Pp(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,a),e!==null&&(Tt(e,i,a,o),mo(e,i,a)),a}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mu(e,t){bc(e,t),(e=e.alternate)&&bc(e,t)}function _g(){return null}var Op=typeof reportError=="function"?reportError:function(e){console.error(e)};function gu(e){this._internalRoot=e}ga.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));ma(e,t,null,null)};ga.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){ma(null,e,null,null)}),t[en]=null}};function ga(e){this._internalRoot=e}ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=of();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&lf(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fc(){}function Ug(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ko(a);o.call(c)}}var a=$p(t,r,e,0,null,!1,!1,"",Fc);return e._reactRootContainer=a,e[en]=a.current,xi(e.nodeType===8?e.parentNode:e),Hn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ko(s);l.call(c)}}var s=hu(e,0,!1,null,null,!1,!1,"",Fc);return e._reactRootContainer=s,e[en]=s.current,xi(e.nodeType===8?e.parentNode:e),Hn(function(){ma(t,s,n,r)}),s}function ya(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ko(a);l.call(s)}}ma(t,a,e,i)}else a=Ug(n,t,e,i,r);return Ko(a)}nf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(bs(t,n|1),ct(t,Ne()),!(se&6)&&($r=Ne()+500,On()))}break;case 13:Hn(function(){var r=tn(e,1);if(r!==null){var i=nt();Tt(r,e,1,i)}}),mu(e,1)}};Fs=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=nt();Tt(t,e,134217728,n)}mu(e,134217728)}};rf=function(e){if(e.tag===13){var t=Sn(e),n=tn(e,t);if(n!==null){var r=nt();Tt(n,e,t,r)}mu(e,t)}};of=function(){return de};af=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};Fl=function(e,t,n){switch(t){case"input":if(Ll(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=sa(r);if(!i)throw Error(O(90));bd(r),Ll(r,i)}}}break;case"textarea":zd(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};Jd=cu;Gd=Hn;var jg={usingClientEntryPoint:!1,Events:[Ti,or,sa,Hd,Vd,cu]},Wr={findFiberByHostInstance:Mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Bg={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yd(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||_g,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{ia=to.inject(Bg),Ht=to}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jg;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(O(200));return zg(e,t,null,n)};gt.createRoot=function(e,t){if(!vu(e))throw Error(O(299));var n=!1,r="",i=Op;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hu(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,xi(e.nodeType===8?e.parentNode:e),new gu(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Yd(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Hn(e)};gt.hydrate=function(e,t,n){if(!va(t))throw Error(O(200));return ya(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Op;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=$p(t,null,e,1,n??null,i,!1,o,a),e[en]=t.current,xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ga(t)};gt.render=function(e,t,n){if(!va(t))throw Error(O(200));return ya(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!va(e))throw Error(O(40));return e._reactRootContainer?(Hn(function(){ya(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};gt.unstable_batchedUpdates=cu;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!va(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return ya(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=gt})(_h);var zc=El;Sl.createRoot=zc.createRoot,Sl.hydrateRoot=zc.hydrateRoot;var $i={},Hg={get exports(){return $i},set exports(e){$i=e}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,yu=He?Symbol.for("react.element"):60103,xu=He?Symbol.for("react.portal"):60106,xa=He?Symbol.for("react.fragment"):60107,wa=He?Symbol.for("react.strict_mode"):60108,Sa=He?Symbol.for("react.profiler"):60114,Ea=He?Symbol.for("react.provider"):60109,ka=He?Symbol.for("react.context"):60110,wu=He?Symbol.for("react.async_mode"):60111,Ca=He?Symbol.for("react.concurrent_mode"):60111,Aa=He?Symbol.for("react.forward_ref"):60112,Ra=He?Symbol.for("react.suspense"):60113,Vg=He?Symbol.for("react.suspense_list"):60120,Pa=He?Symbol.for("react.memo"):60115,$a=He?Symbol.for("react.lazy"):60116,Jg=He?Symbol.for("react.block"):60121,Gg=He?Symbol.for("react.fundamental"):60117,Wg=He?Symbol.for("react.responder"):60118,Qg=He?Symbol.for("react.scope"):60119;function yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yu:switch(e=e.type,e){case wu:case Ca:case xa:case Sa:case wa:case Ra:return e;default:switch(e=e&&e.$$typeof,e){case ka:case Aa:case $a:case Pa:case Ea:return e;default:return t}}case xu:return t}}}function Lp(e){return yt(e)===Ca}fe.AsyncMode=wu;fe.ConcurrentMode=Ca;fe.ContextConsumer=ka;fe.ContextProvider=Ea;fe.Element=yu;fe.ForwardRef=Aa;fe.Fragment=xa;fe.Lazy=$a;fe.Memo=Pa;fe.Portal=xu;fe.Profiler=Sa;fe.StrictMode=wa;fe.Suspense=Ra;fe.isAsyncMode=function(e){return Lp(e)||yt(e)===wu};fe.isConcurrentMode=Lp;fe.isContextConsumer=function(e){return yt(e)===ka};fe.isContextProvider=function(e){return yt(e)===Ea};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yu};fe.isForwardRef=function(e){return yt(e)===Aa};fe.isFragment=function(e){return yt(e)===xa};fe.isLazy=function(e){return yt(e)===$a};fe.isMemo=function(e){return yt(e)===Pa};fe.isPortal=function(e){return yt(e)===xu};fe.isProfiler=function(e){return yt(e)===Sa};fe.isStrictMode=function(e){return yt(e)===wa};fe.isSuspense=function(e){return yt(e)===Ra};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xa||e===Ca||e===Sa||e===wa||e===Ra||e===Vg||typeof e=="object"&&e!==null&&(e.$$typeof===$a||e.$$typeof===Pa||e.$$typeof===Ea||e.$$typeof===ka||e.$$typeof===Aa||e.$$typeof===Gg||e.$$typeof===Wg||e.$$typeof===Qg||e.$$typeof===Jg)};fe.typeOf=yt;(function(e){e.exports=fe})(Hg);function Yg(e){function t(I,z,F,W,w){for(var te=0,b=0,Se=0,ue=0,ie,K,Oe=0,_e=0,ne,Le=ne=ie=0,le=0,Te=0,ln=0,Ie=0,bt=F.length,Ft=bt-1,ot,G="",ke="",br="",Kn="",zt;le<bt;){if(K=F.charCodeAt(le),le===Ft&&b+ue+Se+te!==0&&(b!==0&&(K=b===47?10:47),ue=Se=te=0,bt++,Ft++),b+ue+Se+te===0){if(le===Ft&&(0<Te&&(G=G.replace(v,"")),0<G.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:G+=F.charAt(le)}K=59}switch(K){case 123:for(G=G.trim(),ie=G.charCodeAt(0),ne=1,Ie=++le;le<bt;){switch(K=F.charCodeAt(le)){case 123:ne++;break;case 125:ne--;break;case 47:switch(K=F.charCodeAt(le+1)){case 42:case 47:e:{for(Le=le+1;Le<Ft;++Le)switch(F.charCodeAt(Le)){case 47:if(K===42&&F.charCodeAt(Le-1)===42&&le+2!==Le){le=Le+1;break e}break;case 10:if(K===47){le=Le+1;break e}}le=Le}}break;case 91:K++;case 40:K++;case 34:case 39:for(;le++<Ft&&F.charCodeAt(le)!==K;);}if(ne===0)break;le++}switch(ne=F.substring(Ie,le),ie===0&&(ie=(G=G.replace(m,"").trim()).charCodeAt(0)),ie){case 64:switch(0<Te&&(G=G.replace(v,"")),K=G.charCodeAt(1),K){case 100:case 109:case 115:case 45:Te=z;break;default:Te=dt}if(ne=t(z,Te,ne,K,w+1),Ie=ne.length,0<M&&(Te=n(dt,G,ln),zt=l(3,ne,Te,z,we,xe,Ie,K,w,W),G=Te.join(""),zt!==void 0&&(Ie=(ne=zt.trim()).length)===0&&(K=0,ne="")),0<Ie)switch(K){case 115:G=G.replace(N,a);case 100:case 109:case 45:ne=G+"{"+ne+"}";break;case 107:G=G.replace(d,"$1 $2"),ne=G+"{"+ne+"}",ne=me===1||me===2&&o("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=G+ne,W===112&&(ne=(ke+=ne,""))}else ne="";break;default:ne=t(z,n(z,G,ln),ne,W,w+1)}br+=ne,ne=ln=Te=Le=ie=0,G="",K=F.charCodeAt(++le);break;case 125:case 59:if(G=(0<Te?G.replace(v,""):G).trim(),1<(Ie=G.length))switch(Le===0&&(ie=G.charCodeAt(0),ie===45||96<ie&&123>ie)&&(Ie=(G=G.replace(" ",":")).length),0<M&&(zt=l(1,G,z,I,we,xe,ke.length,W,w,W))!==void 0&&(Ie=(G=zt.trim()).length)===0&&(G="\0\0"),ie=G.charCodeAt(0),K=G.charCodeAt(1),ie){case 0:break;case 64:if(K===105||K===99){Kn+=G+F.charAt(le);break}default:G.charCodeAt(Ie-1)!==58&&(ke+=i(G,ie,K,G.charCodeAt(2)))}ln=Te=Le=ie=0,G="",K=F.charCodeAt(++le)}}switch(K){case 13:case 10:b===47?b=0:1+ie===0&&W!==107&&0<G.length&&(Te=1,G+="\0"),0<M*U&&l(0,G,z,I,we,xe,ke.length,W,w,W),xe=1,we++;break;case 59:case 125:if(b+ue+Se+te===0){xe++;break}default:switch(xe++,ot=F.charAt(le),K){case 9:case 32:if(ue+te+b===0)switch(Oe){case 44:case 58:case 9:case 32:ot="";break;default:K!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ue+b+te===0&&(Te=ln=1,ot="\f"+ot);break;case 108:if(ue+b+te+$e===0&&0<Le)switch(le-Le){case 2:Oe===112&&F.charCodeAt(le-3)===58&&($e=Oe);case 8:_e===111&&($e=_e)}break;case 58:ue+b+te===0&&(Le=le);break;case 44:b+Se+ue+te===0&&(Te=1,ot+="\r");break;case 34:case 39:b===0&&(ue=ue===K?0:ue===0?K:ue);break;case 91:ue+b+Se===0&&te++;break;case 93:ue+b+Se===0&&te--;break;case 41:ue+b+te===0&&Se--;break;case 40:if(ue+b+te===0){if(ie===0)switch(2*Oe+3*_e){case 533:break;default:ie=1}Se++}break;case 64:b+Se+ue+te+Le+ne===0&&(ne=1);break;case 42:case 47:if(!(0<ue+te+Se))switch(b){case 0:switch(2*K+3*F.charCodeAt(le+1)){case 235:b=47;break;case 220:Ie=le,b=42}break;case 42:K===47&&Oe===42&&Ie+2!==le&&(F.charCodeAt(Ie+2)===33&&(ke+=F.substring(Ie,le+1)),ot="",b=0)}}b===0&&(G+=ot)}_e=Oe,Oe=K,le++}if(Ie=ke.length,0<Ie){if(Te=z,0<M&&(zt=l(2,ke,Te,I,we,xe,Ie,W,w,W),zt!==void 0&&(ke=zt).length===0))return Kn+ke+br;if(ke=Te.join(",")+"{"+ke+"}",me*$e!==0){switch(me!==2||o(ke,2)||($e=0),$e){case 111:ke=ke.replace(x,":-moz-$1")+ke;break;case 112:ke=ke.replace(h,"::-webkit-input-$1")+ke.replace(h,"::-moz-$1")+ke.replace(h,":-ms-input-$1")+ke}$e=0}}return Kn+ke+br}function n(I,z,F){var W=z.trim().split(g);z=W;var w=W.length,te=I.length;switch(te){case 0:case 1:var b=0;for(I=te===0?"":I[0]+" ";b<w;++b)z[b]=r(I,z[b],F).trim();break;default:var Se=b=0;for(z=[];b<w;++b)for(var ue=0;ue<te;++ue)z[Se++]=r(I[ue]+" ",W[b],F).trim()}return z}function r(I,z,F){var W=z.charCodeAt(0);switch(33>W&&(W=(z=z.trim()).charCodeAt(0)),W){case 38:return z.replace(f,"$1"+I.trim());case 58:return I.trim()+z.replace(f,"$1"+I.trim());default:if(0<1*F&&0<z.indexOf("\f"))return z.replace(f,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+z}function i(I,z,F,W){var w=I+";",te=2*z+3*F+4*W;if(te===944){I=w.indexOf(":",9)+1;var b=w.substring(I,w.length-1).trim();return b=w.substring(0,I).trim()+b+";",me===1||me===2&&o(b,1)?"-webkit-"+b+b:b}if(me===0||me===2&&!o(w,1))return w;switch(te){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(ye,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return b=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+w+"-ms-flex-pack"+b+w;case 1005:return E.test(w)?w.replace(k,":-webkit-")+w.replace(k,":-moz-")+w:w;case 1e3:switch(b=w.substring(13).trim(),z=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(z)){case 226:b=w.replace(R,"tb");break;case 232:b=w.replace(R,"tb-rl");break;case 220:b=w.replace(R,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+b+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(z=(w=I).length-10,b=(w.charCodeAt(z)===33?w.substring(0,z):w).substring(I.indexOf(":",7)+1).trim(),te=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:w=w.replace(b,"-webkit-"+b)+";"+w;break;case 207:case 102:w=w.replace(b,"-webkit-"+(102<te?"inline-":"")+"box")+";"+w.replace(b,"-webkit-"+b)+";"+w.replace(b,"-ms-"+b+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return b=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+b+"-ms-flex-"+b+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(L,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(L,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(H.test(I)===!0)return(b=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?i(I.replace("stretch","fill-available"),z,F,W).replace(":fill-available",":stretch"):w.replace(b,"-webkit-"+b)+w.replace(b,"-moz-"+b.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,F+W===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+w}return w}function o(I,z){var F=I.indexOf(z===1?":":"{"),W=I.substring(0,z!==3?F:10);return F=I.substring(F+1,I.length-1),V(z!==2?W:W.replace(ee,"$1"),F,z)}function a(I,z){var F=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return F!==z+";"?F.replace(D," or ($1)").substring(4):"("+z+")"}function l(I,z,F,W,w,te,b,Se,ue,ie){for(var K=0,Oe=z,_e;K<M;++K)switch(_e=Ve[K].call(p,I,Oe,F,W,w,te,b,Se,ue,ie)){case void 0:case!1:case!0:case null:break;default:Oe=_e}if(Oe!==z)return Oe}function s(I){switch(I){case void 0:case null:M=Ve.length=0;break;default:if(typeof I=="function")Ve[M++]=I;else if(typeof I=="object")for(var z=0,F=I.length;z<F;++z)s(I[z]);else U=!!I|0}return s}function c(I){return I=I.prefix,I!==void 0&&(V=null,I?typeof I!="function"?me=1:(me=2,V=I):me=0),c}function p(I,z){var F=I;if(33>F.charCodeAt(0)&&(F=F.trim()),ae=F,F=[ae],0<M){var W=l(-1,z,F,F,we,xe,0,0,0,0);W!==void 0&&typeof W=="string"&&(z=W)}var w=t(dt,F,z,0,0);return 0<M&&(W=l(-2,w,F,F,we,xe,w.length,0,0,0),W!==void 0&&(w=W)),ae="",$e=0,xe=we=1,w}var m=/^\0+/g,v=/[\0\r\f]/g,k=/: */g,E=/zoo|gra/,y=/([,: ])(transform)/g,g=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,x=/:(read-only)/g,R=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,L=/-self|flex-/g,ee=/[^]*?(:[rp][el]a[\w-]+)[^]*/,H=/stretch|:\s*\w+\-(?:conte|avail)/,ye=/([^-])(image-set\()/,xe=1,we=1,$e=0,me=1,dt=[],Ve=[],M=0,V=null,U=0,ae="";return p.use=s,p.set=c,e!==void 0&&c(e),p}var Kg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Zg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Xg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_c=Zg(function(e){return Xg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Su=$i,qg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Np={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Eu={};Eu[Su.ForwardRef]=t0;Eu[Su.Memo]=Np;function Uc(e){return Su.isMemo(e)?Np:Eu[e.$$typeof]||qg}var n0=Object.defineProperty,r0=Object.getOwnPropertyNames,jc=Object.getOwnPropertySymbols,i0=Object.getOwnPropertyDescriptor,o0=Object.getPrototypeOf,Bc=Object.prototype;function Dp(e,t,n){if(typeof t!="string"){if(Bc){var r=o0(t);r&&r!==Bc&&Dp(e,r,n)}var i=r0(t);jc&&(i=i.concat(jc(t)));for(var o=Uc(e),a=Uc(t),l=0;l<i.length;++l){var s=i[l];if(!e0[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var c=i0(t,s);try{n0(e,s,c)}catch{}}}}return e}var a0=Dp;function Dt(){return(Dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Hc=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},gs=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!$i.typeOf(e)},Zo=Object.freeze([]),kn=Object.freeze({});function Or(e){return typeof e=="function"}function Vc(e){return e.displayName||e.name||"Component"}function ku(e){return e&&typeof e.styledComponentId=="string"}var Lr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Cu=typeof window<"u"&&"HTMLElement"in window,l0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),s0={};function Vn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var u0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Vn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),c=0,p=r.length;c<p;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Eo=new Map,Xo=new Map,ui=1,no=function(e){if(Eo.has(e))return Eo.get(e);for(;Xo.has(ui);)ui++;var t=ui++;return Eo.set(e,t),Xo.set(t,e),t},c0=function(e){return Xo.get(e)},d0=function(e,t){t>=ui&&(ui=t+1),Eo.set(e,t),Xo.set(t,e)},f0="style["+Lr+'][data-styled-version="5.3.9"]',p0=new RegExp("^"+Lr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),h0=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},m0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(p0);if(l){var s=0|parseInt(l[1],10),c=l[2];s!==0&&(d0(c,s),h0(e,c,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},g0=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Mp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,c=s.length;c>=0;c--){var p=s[c];if(p&&p.nodeType===1&&p.hasAttribute(Lr))return p}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Lr,"active"),r.setAttribute("data-styled-version","5.3.9");var a=g0();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},v0=function(){function e(n){var r=this.element=Mp(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}Vn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),y0=function(){function e(n){var r=this.element=Mp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),x0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Jc=Cu,w0={isServer:!Cu,useCSSOMInjection:!l0},qo=function(){function e(n,r,i){n===void 0&&(n=kn),r===void 0&&(r={}),this.options=Dt({},w0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Cu&&Jc&&(Jc=!1,function(o){for(var a=document.querySelectorAll(f0),l=0,s=a.length;l<s;l++){var c=a[l];c&&c.getAttribute(Lr)!=="active"&&(m0(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return no(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Dt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new x0(a):o?new v0(a):new y0(a),new u0(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(no(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(no(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(no(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=c0(a);if(l!==void 0){var s=n.names.get(l),c=r.getGroup(a);if(s&&c&&s.size){var p=Lr+".g"+a+'[id="'+l+'"]',m="";s!==void 0&&s.forEach(function(v){v.length>0&&(m+=v+",")}),o+=""+c+p+'{content:"'+m+`"}/*!sc*/
`}}}return o}(this)},e}(),S0=/(a)(d)/gi,Gc=function(e){return String.fromCharCode(e+(e>25?39:97))};function vs(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Gc(t%52)+n;return(Gc(t%52)+n).replace(S0,"$1-$2")}var fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Tp=function(e){return fr(5381,e)};function Ip(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Or(n)&&!ku(n))return!1}return!0}var E0=Tp("5.3.9"),k0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ip(t),this.componentId=n,this.baseHash=fr(E0,n),this.baseStyle=r,qo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Jn(this.rules,t,n,r).join(""),l=vs(fr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,p=fr(this.baseHash,r.hash),m="",v=0;v<c;v++){var k=this.rules[v];if(typeof k=="string")m+=k;else if(k){var E=Jn(k,t,n,r),y=Array.isArray(E)?E.join(""):E;p=fr(p,y+v),m+=y}}if(m){var g=vs(p>>>0);if(!n.hasNameForId(i,g)){var f=r(m,"."+g,void 0,i);n.insertRules(i,g,f)}o.push(g)}}return o.join(" ")},e}(),C0=/^\s*\/\/.*$/gm,A0=[":","[",".","#"];function R0(e){var t,n,r,i,o=e===void 0?kn:e,a=o.options,l=a===void 0?kn:a,s=o.plugins,c=s===void 0?Zo:s,p=new Yg(l),m=[],v=function(y){function g(f){if(f)try{y(f+"}")}catch{}}return function(f,d,h,x,R,N,D,L,ee,H){switch(f){case 1:if(ee===0&&d.charCodeAt(0)===64)return y(d+";"),"";break;case 2:if(L===0)return d+"/*|*/";break;case 3:switch(L){case 102:case 112:return y(h[0]+d),"";default:return d+(H===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(g)}}}(function(y){m.push(y)}),k=function(y,g,f){return g===0&&A0.indexOf(f[n.length])!==-1||f.match(i)?y:"."+t};function E(y,g,f,d){d===void 0&&(d="&");var h=y.replace(C0,""),x=g&&f?f+" "+g+" { "+h+" }":h;return t=d,n=g,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),p(f||!g?"":g,x)}return p.use([].concat(c,[function(y,g,f){y===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,k))},v,function(y){if(y===-2){var g=m;return m=[],g}}])),E.hash=c.length?c.reduce(function(y,g){return g.name||Vn(15),fr(y,g.name)},5381).toString():"",E}var bp=tt.createContext();bp.Consumer;var Fp=tt.createContext(),P0=(Fp.Consumer,new qo),ys=R0();function zp(){return T.useContext(bp)||P0}function _p(){return T.useContext(Fp)||ys}var $0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ys);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Vn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ys),this.name+t.hash},e}(),O0=/([A-Z])/,L0=/([A-Z])/g,N0=/^ms-/,D0=function(e){return"-"+e.toLowerCase()};function Wc(e){return O0.test(e)?e.replace(L0,D0).replace(N0,"-ms-"):e}var Qc=function(e){return e==null||e===!1||e===""};function Jn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Jn(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Qc(e))return"";if(ku(e))return"."+e.styledComponentId;if(Or(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return Jn(s,t,n,r)}var c;return e instanceof $0?n?(e.inject(n,r),e.getName(r)):e:gs(e)?function p(m,v){var k,E,y=[];for(var g in m)m.hasOwnProperty(g)&&!Qc(m[g])&&(Array.isArray(m[g])&&m[g].isCss||Or(m[g])?y.push(Wc(g)+":",m[g],";"):gs(m[g])?y.push.apply(y,p(m[g],g)):y.push(Wc(g)+": "+(k=g,(E=m[g])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||k in Kg?String(E).trim():E+"px")+";"));return v?[v+" {"].concat(y,["}"]):y}(e):e.toString()}var Yc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ea(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Or(e)||gs(e)?Yc(Jn(Hc(Zo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Yc(Jn(Hc(e,n)))}var Up=function(e,t,n){return n===void 0&&(n=kn),e.theme!==n.theme&&e.theme||t||n.theme},M0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,T0=/(^-|-$)/g;function ul(e){return e.replace(M0,"-").replace(T0,"")}var jp=function(e){return vs(Tp(e)>>>0)};function ro(e){return typeof e=="string"&&!0}var xs=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},I0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function b0(e,t,n){var r=e[n];xs(t)&&xs(r)?Bp(r,t):e[n]=t}function Bp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(xs(a))for(var l in a)I0(l)&&b0(e,a[l],l)}return e}var Oi=tt.createContext();Oi.Consumer;function F0(e){var t=T.useContext(Oi),n=T.useMemo(function(){return function(r,i){if(!r)return Vn(14);if(Or(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Vn(8):i?Dt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?tt.createElement(Oi.Provider,{value:n},e.children):null}var cl={};function Hp(e,t,n){var r=ku(e),i=!ro(e),o=t.attrs,a=o===void 0?Zo:o,l=t.componentId,s=l===void 0?function(d,h){var x=typeof d!="string"?"sc":ul(d);cl[x]=(cl[x]||0)+1;var R=x+"-"+jp("5.3.9"+x+cl[x]);return h?h+"-"+R:R}(t.displayName,t.parentComponentId):l,c=t.displayName,p=c===void 0?function(d){return ro(d)?"styled."+d:"Styled("+Vc(d)+")"}(e):c,m=t.displayName&&t.componentId?ul(t.displayName)+"-"+t.componentId:t.componentId||s,v=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(d,h,x){return e.shouldForwardProp(d,h,x)&&t.shouldForwardProp(d,h,x)}:e.shouldForwardProp);var E,y=new k0(n,m,r?e.componentStyle:void 0),g=y.isStatic&&a.length===0,f=function(d,h){return function(x,R,N,D){var L=x.attrs,ee=x.componentStyle,H=x.defaultProps,ye=x.foldedComponentIds,xe=x.shouldForwardProp,we=x.styledComponentId,$e=x.target,me=function(W,w,te){W===void 0&&(W=kn);var b=Dt({},w,{theme:W}),Se={};return te.forEach(function(ue){var ie,K,Oe,_e=ue;for(ie in Or(_e)&&(_e=_e(b)),_e)b[ie]=Se[ie]=ie==="className"?(K=Se[ie],Oe=_e[ie],K&&Oe?K+" "+Oe:K||Oe):_e[ie]}),[b,Se]}(Up(R,T.useContext(Oi),H)||kn,R,L),dt=me[0],Ve=me[1],M=function(W,w,te,b){var Se=zp(),ue=_p(),ie=w?W.generateAndInjectStyles(kn,Se,ue):W.generateAndInjectStyles(te,Se,ue);return ie}(ee,D,dt),V=N,U=Ve.$as||R.$as||Ve.as||R.as||$e,ae=ro(U),I=Ve!==R?Dt({},R,{},Ve):R,z={};for(var F in I)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?z.as=I[F]:(xe?xe(F,_c,U):!ae||_c(F))&&(z[F]=I[F]));return R.style&&Ve.style!==R.style&&(z.style=Dt({},R.style,{},Ve.style)),z.className=Array.prototype.concat(ye,we,M!==we?M:null,R.className,Ve.className).filter(Boolean).join(" "),z.ref=V,T.createElement(U,z)}(E,d,h,g)};return f.displayName=p,(E=tt.forwardRef(f)).attrs=v,E.componentStyle=y,E.displayName=p,E.shouldForwardProp=k,E.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Zo,E.styledComponentId=m,E.target=r?e.target:e,E.withComponent=function(d){var h=t.componentId,x=function(N,D){if(N==null)return{};var L,ee,H={},ye=Object.keys(N);for(ee=0;ee<ye.length;ee++)L=ye[ee],D.indexOf(L)>=0||(H[L]=N[L]);return H}(t,["componentId"]),R=h&&h+"-"+(ro(d)?d:ul(Vc(d)));return Hp(d,Dt({},x,{attrs:v,componentId:R}),n)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Bp({},e.defaultProps,d):d}}),Object.defineProperty(E,"toString",{value:function(){return"."+E.styledComponentId}}),i&&a0(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var ws=function(e){return function t(n,r,i){if(i===void 0&&(i=kn),!$i.isValidElementType(r))return Vn(1,String(r));var o=function(){return n(r,i,ea.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Dt({},i,{},a))},o.attrs=function(a){return t(n,r,Dt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Hp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ws[e]=ws(e)});var z0=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Ip(n),qo.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(Jn(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&qo.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function _0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ea.apply(void 0,[e].concat(n)),o="sc-global-"+jp(JSON.stringify(i)),a=new z0(i,o);function l(c){var p=zp(),m=_p(),v=T.useContext(Oi),k=T.useRef(p.allocateGSInstance(o)).current;return p.server&&s(k,c,p,v,m),T.useLayoutEffect(function(){if(!p.server)return s(k,c,p,v,m),function(){return a.removeStyles(k,p)}},[k,c,p,v,m]),null}function s(c,p,m,v,k){if(a.isStatic)a.renderStyles(c,s0,m,k);else{var E=Dt({},p,{theme:Up(p,v,l.defaultProps)});a.renderStyles(c,E,m,k)}}return tt.memo(l)}const P=ws,U0={title:"main",fonts:{extrasmall:16,small:18,medium:20,large:26,extralarge:36},colors:{primary:{light:"#f08",normal:"#2EB2B7",dark:"#01fe87"},secondary:{light:"#E08952",normal:"#FF8233",dark:"#AD561F"},auxiliary:{success:{normal:"#34C759",dark:"#45B661"},attention:{normal:"#FFEB3B",dark:"#CCB700"},error:{normal:"#D92626",dark:"#981B1B"}},foreground:"#D9D9D9",middleground:"#f5f5f5",background:"#292E2E",text:{title:"#000",content:"#626262",highlight:"#FFF",TitleSubArticles:"#114676"}}},j0=T.createContext({}),B0=({children:e})=>{const[t,n]=T.useState(U0);return S(j0.Provider,{value:{theme:t},children:S(F0,{theme:t,children:e})})};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}var De;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(De||(De={}));const Kc="popstate";function H0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Li("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rn(i)}return J0(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function V0(){return Math.random().toString(36).substr(2,8)}function Zc(e,t){return{usr:e.state,key:e.key,idx:t}}function Li(e,t,n,r){return n===void 0&&(n=null),oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?an(t):t,{state:n,key:t&&t.key||r||V0()})}function rn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function an(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function J0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=De.Pop,s=null,c=p();c==null&&(c=0,a.replaceState(oe({},a.state,{idx:c}),""));function p(){return(a.state||{idx:null}).idx}function m(){l=De.Pop;let g=p(),f=g==null?null:g-c;c=g,s&&s({action:l,location:y.location,delta:f})}function v(g,f){l=De.Push;let d=Li(y.location,g,f);n&&n(d,g),c=p()+1;let h=Zc(d,c),x=y.createHref(d);try{a.pushState(h,"",x)}catch{i.location.assign(x)}o&&s&&s({action:l,location:y.location,delta:1})}function k(g,f){l=De.Replace;let d=Li(y.location,g,f);n&&n(d,g),c=p();let h=Zc(d,c),x=y.createHref(d);a.replaceState(h,"",x),o&&s&&s({action:l,location:y.location,delta:0})}function E(g){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof g=="string"?g:rn(g);return q(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let y={get action(){return l},get location(){return e(i,a)},listen(g){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Kc,m),s=g,()=>{i.removeEventListener(Kc,m),s=null}},createHref(g){return t(i,g)},createURL:E,encodeLocation(g){let f=E(g);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:v,replace:k,go(g){return a.go(g)}};return y}var be;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(be||(be={}));const G0=new Set(["lazy","caseSensitive","path","id","index","children"]);function W0(e){return e.index===!0}function Vp(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(q(i.index!==!0||!i.children,"Cannot specify children on an index route"),q(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),W0(i)){let s=oe({},i,{hasErrorBoundary:t(i),id:l});return r[l]=s,s}else{let s=oe({},i,{id:l,hasErrorBoundary:t(i),children:void 0});return r[l]=s,i.children&&(s.children=Vp(i.children,t,a,r)),s}})}function pr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?an(t):t,i=bi(r.pathname||"/",n);if(i==null)return null;let o=Jp(e);Q0(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=rv(o[l],av(i));return a}function Jp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Xt([r,s.relativePath]),p=n.concat(s);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Jp(o.children,t,p,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:tv(c,o.index),routesMeta:p})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Gp(o.path))i(o,a,s)}),t}function Gp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Gp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Q0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Y0=/^:\w+$/,K0=3,Z0=2,X0=1,q0=10,ev=-2,Xc=e=>e==="*";function tv(e,t){let n=e.split("/"),r=n.length;return n.some(Xc)&&(r+=ev),t&&(r+=Z0),n.filter(i=>!Xc(i)).reduce((i,o)=>i+(Y0.test(o)?K0:o===""?X0:q0),r)}function nv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function rv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",p=iv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!p)return null;Object.assign(r,p.params);let m=l.route;o.push({params:r,pathname:Xt([i,p.pathname]),pathnameBase:cv(Xt([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Xt([i,p.pathnameBase]))}return o}function iv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ov(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,p,m)=>{if(p==="*"){let v=l[m]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[p]=lv(l[m]||"",p),c},{}),pathname:o,pathnameBase:a,pattern:e}}function ov(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Nr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function av(e){try{return decodeURI(e)}catch(t){return Nr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lv(e,t){try{return decodeURIComponent(e)}catch(n){return Nr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function bi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function sv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?an(e):e;return{pathname:n?n.startsWith("/")?n:uv(n,t):t,search:dv(r),hash:fv(i)}}function uv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Oa(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Au(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=an(e):(i=oe({},e),q(!i.pathname||!i.pathname.includes("?"),dl("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),dl("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),dl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let m=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),m-=1;i.pathname=v.join("/")}l=m>=0?t[m]:"/"}let s=sv(i,l),c=a&&a!=="/"&&a.endsWith("/"),p=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||p)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),cv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ru{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Wp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qp=["post","put","patch","delete"],pv=new Set(Qp),hv=["get",...Qp],mv=new Set(hv),gv=new Set([301,302,303,307,308]),vv=new Set([307,308]),fl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},yv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},qc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Yp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xv=!Kp,wv=e=>!!e.hasErrorBoundary;function Sv(e){q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||wv,n={},r=Vp(e.routes,t,void 0,n),i,o=oe({v7_normalizeFormMethod:!1},e.future),a=null,l=new Set,s=null,c=null,p=null,m=e.hydrationData!=null,v=pr(r,e.history.location,e.basename),k=null;if(v==null){let C=jt(404,{pathname:e.history.location.pathname}),{matches:A,route:$}=ad(r);v=A,k={[$.id]:C}}let E=!v.some(C=>C.route.lazy)&&(!v.some(C=>C.route.loader)||e.hydrationData!=null),y,g={historyAction:e.history.action,location:e.history.location,matches:v,initialized:E,navigation:fl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||k,fetchers:new Map,blockers:new Map},f=De.Pop,d=!1,h,x=!1,R=!1,N=[],D=[],L=new Map,ee=0,H=-1,ye=new Map,xe=new Set,we=new Map,$e=new Map,me=new Map,dt=!1;function Ve(){return a=e.history.listen(C=>{let{action:A,location:$,delta:j}=C;if(dt){dt=!1;return}Nr(me.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=ot({currentLocation:g.location,nextLocation:$,historyAction:A});if(B&&j!=null){dt=!0,e.history.go(j*-1),Ft(B,{state:"blocked",location:$,proceed(){Ft(B,{state:"proceeding",proceed:void 0,reset:void 0,location:$}),e.history.go(j)},reset(){bt(B),U({blockers:new Map(y.state.blockers)})}});return}return F(A,$)}),g.initialized||F(De.Pop,g.location),y}function M(){a&&a(),l.clear(),h&&h.abort(),g.fetchers.forEach((C,A)=>ne(A)),g.blockers.forEach((C,A)=>bt(A))}function V(C){return l.add(C),()=>l.delete(C)}function U(C){g=oe({},g,C),l.forEach(A=>A(g))}function ae(C,A){var $,j;let B=g.actionData!=null&&g.navigation.formMethod!=null&&Wt(g.navigation.formMethod)&&g.navigation.state==="loading"&&(($=C.state)==null?void 0:$._isRedirect)!==!0,Q;A.actionData?Object.keys(A.actionData).length>0?Q=A.actionData:Q=null:B?Q=g.actionData:Q=null;let Y=A.loaderData?od(g.loaderData,A.loaderData,A.matches||[],A.errors):g.loaderData;for(let[J]of me)bt(J);let Z=d===!0||g.navigation.formMethod!=null&&Wt(g.navigation.formMethod)&&((j=C.state)==null?void 0:j._isRedirect)!==!0;i&&(r=i,i=void 0),U(oe({},A,{actionData:Q,loaderData:Y,historyAction:f,location:C,initialized:!0,navigation:fl,revalidation:"idle",restoreScrollPosition:Kn(C,A.matches||g.matches),preventScrollReset:Z,blockers:new Map(g.blockers)})),x||f===De.Pop||(f===De.Push?e.history.push(C,C.state):f===De.Replace&&e.history.replace(C,C.state)),f=De.Pop,d=!1,x=!1,R=!1,N=[],D=[]}async function I(C,A){if(typeof C=="number"){e.history.go(C);return}let{path:$,submission:j,error:B}=ed(C,o,A),Q=g.location,Y=Li(g.location,$,A&&A.state);Y=oe({},Y,e.history.encodeLocation(Y));let Z=A&&A.replace!=null?A.replace:void 0,J=De.Push;Z===!0?J=De.Replace:Z===!1||j!=null&&Wt(j.formMethod)&&j.formAction===g.location.pathname+g.location.search&&(J=De.Replace);let pe=A&&"preventScrollReset"in A?A.preventScrollReset===!0:void 0,ce=ot({currentLocation:Q,nextLocation:Y,historyAction:J});if(ce){Ft(ce,{state:"blocked",location:Y,proceed(){Ft(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),I(C,A)},reset(){bt(ce),U({blockers:new Map(g.blockers)})}});return}return await F(J,Y,{submission:j,pendingError:B,preventScrollReset:pe,replace:A&&A.replace})}function z(){if(Oe(),U({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){F(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}F(f||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function F(C,A,$){h&&h.abort(),h=null,f=C,x=($&&$.startUninterruptedRevalidation)===!0,br(g.location,g.matches),d=($&&$.preventScrollReset)===!0;let j=i||r,B=$&&$.overrideNavigation,Q=pr(j,A,e.basename);if(!Q){let Ue=jt(404,{pathname:A.pathname}),{matches:Je,route:Rt}=ad(j);G(),ae(A,{matches:Je,loaderData:{},errors:{[Rt.id]:Ue}});return}if(Rv(g.location,A)&&!($&&$.submission&&Wt($.submission.formMethod))){ae(A,{matches:Q});return}h=new AbortController;let Y=Yr(e.history,A,h.signal,$&&$.submission),Z,J;if($&&$.pendingError)J={[hr(Q).route.id]:$.pendingError};else if($&&$.submission&&Wt($.submission.formMethod)){let Ue=await W(Y,A,$.submission,Q,{replace:$.replace});if(Ue.shortCircuited)return;Z=Ue.pendingActionData,J=Ue.pendingActionError,B=oe({state:"loading",location:A},$.submission),Y=new Request(Y.url,{signal:Y.signal})}let{shortCircuited:pe,loaderData:ce,errors:At}=await w(Y,A,Q,B,$&&$.submission,$&&$.fetcherSubmission,$&&$.replace,Z,J);pe||(h=null,ae(A,oe({matches:Q},Z?{actionData:Z}:{},{loaderData:ce,errors:At})))}async function W(C,A,$,j,B){Oe();let Q=oe({state:"submitting",location:A},$);U({navigation:Q});let Y,Z=Ss(j,A);if(!Z.route.action&&!Z.route.lazy)Y={type:be.error,error:jt(405,{method:C.method,pathname:A.pathname,routeId:Z.route.id})};else if(Y=await Qr("action",C,Z,j,n,t,y.basename),C.signal.aborted)return{shortCircuited:!0};if(Sr(Y)){let J;return B&&B.replace!=null?J=B.replace:J=Y.location===g.location.pathname+g.location.search,await ie(g,Y,{submission:$,replace:J}),{shortCircuited:!0}}if(ci(Y)){let J=hr(j,Z.route.id);return(B&&B.replace)!==!0&&(f=De.Push),{pendingActionData:{},pendingActionError:{[J.route.id]:Y.error}}}if(bn(Y))throw jt(400,{type:"defer-action"});return{pendingActionData:{[Z.route.id]:Y.data}}}async function w(C,A,$,j,B,Q,Y,Z,J){let pe=j;pe||(pe=oe({state:"loading",location:A,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},B));let ce=B||Q?B||Q:pe.formMethod&&pe.formAction&&pe.formData&&pe.formEncType?{formMethod:pe.formMethod,formAction:pe.formAction,formData:pe.formData,formEncType:pe.formEncType}:void 0,At=i||r,[Ue,Je]=td(e.history,g,$,ce,A,R,N,D,we,At,e.basename,Z,J);if(G(Ye=>!($&&$.some(Pt=>Pt.route.id===Ye))||Ue&&Ue.some(Pt=>Pt.route.id===Ye)),Ue.length===0&&Je.length===0)return ae(A,oe({matches:$,loaderData:{},errors:J||null},Z?{actionData:Z}:{})),{shortCircuited:!0};if(!x){Je.forEach(Pt=>{let Ln=g.fetchers.get(Pt.key),_r={state:"loading",data:Ln&&Ln.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Pt.key,_r)});let Ye=Z||g.actionData;U(oe({navigation:pe},Ye?Object.keys(Ye).length===0?{actionData:null}:{actionData:Ye}:{},Je.length>0?{fetchers:new Map(g.fetchers)}:{}))}H=++ee,Je.forEach(Ye=>L.set(Ye.key,h));let{results:Rt,loaderResults:Fr,fetcherResults:Ma}=await K(g.matches,$,Ue,Je,C);if(C.signal.aborted)return{shortCircuited:!0};Je.forEach(Ye=>L.delete(Ye.key));let zr=ld(Rt);if(zr)return await ie(g,zr,{replace:Y}),{shortCircuited:!0};let{loaderData:Zn,errors:Ta}=id(g,$,Ue,Fr,J,Je,Ma,$e);$e.forEach((Ye,Pt)=>{Ye.subscribe(Ln=>{(Ln||Ye.done)&&$e.delete(Pt)})}),Te();let Ia=ln(H);return oe({loaderData:Zn,errors:Ta},Ia||Je.length>0?{fetchers:new Map(g.fetchers)}:{})}function te(C){return g.fetchers.get(C)||yv}function b(C,A,$,j){if(xv)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");L.has(C)&&Le(C);let Q=pr(i||r,$,e.basename);if(!Q){_e(C,A,jt(404,{pathname:$}));return}let{path:Y,submission:Z}=ed($,o,j,!0),J=Ss(Q,Y);if(d=(j&&j.preventScrollReset)===!0,Z&&Wt(Z.formMethod)){Se(C,A,Y,J,Q,Z);return}we.set(C,{routeId:A,path:Y}),ue(C,A,Y,J,Q,Z)}async function Se(C,A,$,j,B,Q){if(Oe(),we.delete(C),!j.route.action&&!j.route.lazy){let Jt=jt(405,{method:Q.formMethod,pathname:$,routeId:A});_e(C,A,Jt);return}let Y=g.fetchers.get(C),Z=oe({state:"submitting"},Q,{data:Y&&Y.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(C,Z),U({fetchers:new Map(g.fetchers)});let J=new AbortController,pe=Yr(e.history,$,J.signal,Q);L.set(C,J);let ce=await Qr("action",pe,j,B,n,t,y.basename);if(pe.signal.aborted){L.get(C)===J&&L.delete(C);return}if(Sr(ce)){L.delete(C),xe.add(C);let Jt=oe({state:"loading"},Q,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(C,Jt),U({fetchers:new Map(g.fetchers)}),ie(g,ce,{submission:Q,isFetchActionRedirect:!0})}if(ci(ce)){_e(C,A,ce.error);return}if(bn(ce))throw jt(400,{type:"defer-action"});let At=g.navigation.location||g.location,Ue=Yr(e.history,At,J.signal),Je=i||r,Rt=g.navigation.state!=="idle"?pr(Je,g.navigation.location,e.basename):g.matches;q(Rt,"Didn't find any matches after fetcher action");let Fr=++ee;ye.set(C,Fr);let Ma=oe({state:"loading",data:ce.data},Q,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(C,Ma);let[zr,Zn]=td(e.history,g,Rt,Q,At,R,N,D,we,Je,e.basename,{[j.route.id]:ce.data},void 0);Zn.filter(Jt=>Jt.key!==C).forEach(Jt=>{let ba=Jt.key,Ou=g.fetchers.get(ba),ph={state:"loading",data:Ou&&Ou.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(ba,ph),L.set(ba,J)}),U({fetchers:new Map(g.fetchers)});let{results:Ta,loaderResults:Ia,fetcherResults:Ye}=await K(g.matches,Rt,zr,Zn,Ue);if(J.signal.aborted)return;ye.delete(C),L.delete(C),Zn.forEach(Jt=>L.delete(Jt.key));let Pt=ld(Ta);if(Pt)return ie(g,Pt);let{loaderData:Ln,errors:_r}=id(g,g.matches,zr,Ia,void 0,Zn,Ye,$e),dh={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(C,dh);let fh=ln(Fr);g.navigation.state==="loading"&&Fr>H?(q(f,"Expected pending action"),h&&h.abort(),ae(g.navigation.location,{matches:Rt,loaderData:Ln,errors:_r,fetchers:new Map(g.fetchers)})):(U(oe({errors:_r,loaderData:od(g.loaderData,Ln,Rt,_r)},fh?{fetchers:new Map(g.fetchers)}:{})),R=!1)}async function ue(C,A,$,j,B,Q){let Y=g.fetchers.get(C),Z=oe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Q,{data:Y&&Y.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(C,Z),U({fetchers:new Map(g.fetchers)});let J=new AbortController,pe=Yr(e.history,$,J.signal);L.set(C,J);let ce=await Qr("loader",pe,j,B,n,t,y.basename);if(bn(ce)&&(ce=await eh(ce,pe.signal,!0)||ce),L.get(C)===J&&L.delete(C),pe.signal.aborted)return;if(Sr(ce)){await ie(g,ce);return}if(ci(ce)){let Ue=hr(g.matches,A);g.fetchers.delete(C),U({fetchers:new Map(g.fetchers),errors:{[Ue.route.id]:ce.error}});return}q(!bn(ce),"Unhandled fetcher deferred data");let At={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(C,At),U({fetchers:new Map(g.fetchers)})}async function ie(C,A,$){var j;let{submission:B,replace:Q,isFetchActionRedirect:Y}=$===void 0?{}:$;A.revalidate&&(R=!0);let Z=Li(C.location,A.location,oe({_isRedirect:!0},Y?{_isFetchActionRedirect:!0}:{}));if(q(Z,"Expected a location on the redirect navigation"),Yp.test(A.location)&&Kp&&typeof((j=window)==null?void 0:j.location)<"u"){let Je=e.history.createURL(A.location),Rt=bi(Je.pathname,e.basename||"/")==null;if(window.location.origin!==Je.origin||Rt){Q?window.location.replace(A.location):window.location.assign(A.location);return}}h=null;let J=Q===!0?De.Replace:De.Push,{formMethod:pe,formAction:ce,formEncType:At,formData:Ue}=C.navigation;!B&&pe&&ce&&Ue&&At&&(B={formMethod:pe,formAction:ce,formEncType:At,formData:Ue}),vv.has(A.status)&&B&&Wt(B.formMethod)?await F(J,Z,{submission:oe({},B,{formAction:A.location}),preventScrollReset:d}):Y?await F(J,Z,{overrideNavigation:{state:"loading",location:Z,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:B,preventScrollReset:d}):await F(J,Z,{overrideNavigation:{state:"loading",location:Z,formMethod:B?B.formMethod:void 0,formAction:B?B.formAction:void 0,formEncType:B?B.formEncType:void 0,formData:B?B.formData:void 0},preventScrollReset:d})}async function K(C,A,$,j,B){let Q=await Promise.all([...$.map(J=>Qr("loader",B,J,A,n,t,y.basename)),...j.map(J=>J.matches&&J.match?Qr("loader",Yr(e.history,J.path,B.signal),J.match,J.matches,n,t,y.basename):{type:be.error,error:jt(404,{pathname:J.path})})]),Y=Q.slice(0,$.length),Z=Q.slice($.length);return await Promise.all([sd(C,$,Y,B.signal,!1,g.loaderData),sd(C,j.map(J=>J.match),Z,B.signal,!0)]),{results:Q,loaderResults:Y,fetcherResults:Z}}function Oe(){R=!0,N.push(...G()),we.forEach((C,A)=>{L.has(A)&&(D.push(A),Le(A))})}function _e(C,A,$){let j=hr(g.matches,A);ne(C),U({errors:{[j.route.id]:$},fetchers:new Map(g.fetchers)})}function ne(C){L.has(C)&&Le(C),we.delete(C),ye.delete(C),xe.delete(C),g.fetchers.delete(C)}function Le(C){let A=L.get(C);q(A,"Expected fetch controller: "+C),A.abort(),L.delete(C)}function le(C){for(let A of C){let j={state:"idle",data:te(A).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(A,j)}}function Te(){let C=[];for(let A of xe){let $=g.fetchers.get(A);q($,"Expected fetcher: "+A),$.state==="loading"&&(xe.delete(A),C.push(A))}le(C)}function ln(C){let A=[];for(let[$,j]of ye)if(j<C){let B=g.fetchers.get($);q(B,"Expected fetcher: "+$),B.state==="loading"&&(Le($),ye.delete($),A.push($))}return le(A),A.length>0}function Ie(C,A){let $=g.blockers.get(C)||qc;return me.get(C)!==A&&me.set(C,A),$}function bt(C){g.blockers.delete(C),me.delete(C)}function Ft(C,A){let $=g.blockers.get(C)||qc;q($.state==="unblocked"&&A.state==="blocked"||$.state==="blocked"&&A.state==="blocked"||$.state==="blocked"&&A.state==="proceeding"||$.state==="blocked"&&A.state==="unblocked"||$.state==="proceeding"&&A.state==="unblocked","Invalid blocker state transition: "+$.state+" -> "+A.state),g.blockers.set(C,A),U({blockers:new Map(g.blockers)})}function ot(C){let{currentLocation:A,nextLocation:$,historyAction:j}=C;if(me.size===0)return;me.size>1&&Nr(!1,"A router only supports one blocker at a time");let B=Array.from(me.entries()),[Q,Y]=B[B.length-1],Z=g.blockers.get(Q);if(!(Z&&Z.state==="proceeding")&&Y({currentLocation:A,nextLocation:$,historyAction:j}))return Q}function G(C){let A=[];return $e.forEach(($,j)=>{(!C||C(j))&&($.cancel(),A.push(j),$e.delete(j))}),A}function ke(C,A,$){if(s=C,p=A,c=$||(j=>j.key),!m&&g.navigation===fl){m=!0;let j=Kn(g.location,g.matches);j!=null&&U({restoreScrollPosition:j})}return()=>{s=null,p=null,c=null}}function br(C,A){if(s&&c&&p){let $=A.map(B=>ud(B,g.loaderData)),j=c(C,$)||C.key;s[j]=p()}}function Kn(C,A){if(s&&c&&p){let $=A.map(Q=>ud(Q,g.loaderData)),j=c(C,$)||C.key,B=s[j];if(typeof B=="number")return B}return null}function zt(C){i=C}return y={get basename(){return e.basename},get state(){return g},get routes(){return r},initialize:Ve,subscribe:V,enableScrollRestoration:ke,navigate:I,fetch:b,revalidate:z,createHref:C=>e.history.createHref(C),encodeLocation:C=>e.history.encodeLocation(C),getFetcher:te,deleteFetcher:ne,dispose:M,getBlocker:Ie,deleteBlocker:bt,_internalFetchControllers:L,_internalActiveDeferreds:$e,_internalSetRoutes:zt},y}function Ev(e){return e!=null&&"formData"in e}function ed(e,t,n,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:rn(e);if(!n||!Ev(n))return{path:i};if(n.formMethod&&!Ov(n.formMethod))return{path:i,error:jt(405,{method:n.formMethod})};let o;if(n.formData){let s=n.formMethod||"get";if(o={formMethod:t.v7_normalizeFormMethod?s.toUpperCase():s.toLowerCase(),formAction:qp(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Wt(o.formMethod))return{path:i,submission:o}}let a=an(i),l=Xp(n.formData);return r&&a.search&&th(a.search)&&l.append("index",""),a.search="?"+l,{path:rn(a),submission:o}}function kv(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function td(e,t,n,r,i,o,a,l,s,c,p,m,v){let k=v?Object.values(v)[0]:m?Object.values(m)[0]:void 0,E=e.createURL(t.location),y=e.createURL(i),g=o||E.toString()===y.toString()||E.search!==y.search,f=v?Object.keys(v)[0]:void 0,h=kv(n,f).filter((R,N)=>{if(R.route.lazy)return!0;if(R.route.loader==null)return!1;if(Cv(t.loaderData,t.matches[N],R)||a.some(ee=>ee===R.route.id))return!0;let D=t.matches[N],L=R;return nd(R,oe({currentUrl:E,currentParams:D.params,nextUrl:y,nextParams:L.params},r,{actionResult:k,defaultShouldRevalidate:g||Zp(D,L)}))}),x=[];return s.forEach((R,N)=>{if(!n.some(H=>H.route.id===R.routeId))return;let D=pr(c,R.path,p);if(!D){x.push(oe({key:N},R,{matches:null,match:null}));return}let L=Ss(D,R.path);if(l.includes(N)){x.push(oe({key:N,matches:D,match:L},R));return}nd(L,oe({currentUrl:E,currentParams:t.matches[t.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:k,defaultShouldRevalidate:g}))&&x.push(oe({key:N,matches:D,match:L},R))}),[h,x]}function Cv(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Zp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function nd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function rd(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];q(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";Nr(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!G0.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(oe({},i)),lazy:void 0})}async function Qr(e,t,n,r,i,o,a,l,s,c){a===void 0&&(a="/"),l===void 0&&(l=!1),s===void 0&&(s=!1);let p,m,v,k=g=>{let f,d=new Promise((h,x)=>f=x);return v=()=>f(),t.signal.addEventListener("abort",v),Promise.race([g({request:t,params:n.params,context:c}),d])};try{let g=n.route[e];if(n.route.lazy)if(g)m=(await Promise.all([k(g),rd(n.route,o,i)]))[0];else if(await rd(n.route,o,i),g=n.route[e],g)m=await k(g);else{if(e==="action")throw jt(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:be.data,data:void 0}}else q(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),m=await k(g);q(m!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){p=be.error,m=g}finally{v&&t.signal.removeEventListener("abort",v)}if($v(m)){let g=m.status;if(gv.has(g)){let h=m.headers.get("Location");if(q(h,"Redirects returned/thrown from loaders/actions must have a Location header"),Yp.test(h)){if(!l){let x=new URL(t.url),R=h.startsWith("//")?new URL(x.protocol+h):new URL(h),N=bi(R.pathname,a)!=null;R.origin===x.origin&&N&&(h=R.pathname+R.search+R.hash)}}else{let x=r.slice(0,r.indexOf(n)+1),R=Oa(x).map(D=>D.pathnameBase),N=Au(h,R,new URL(t.url).pathname);if(q(rn(N),"Unable to resolve redirect location: "+h),a){let D=N.pathname;N.pathname=D==="/"?a:Xt([a,D])}h=rn(N)}if(l)throw m.headers.set("Location",h),m;return{type:be.redirect,status:g,location:h,revalidate:m.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:p||be.data,response:m};let f,d=m.headers.get("Content-Type");return d&&/\bapplication\/json\b/.test(d)?f=await m.json():f=await m.text(),p===be.error?{type:p,error:new Ru(g,m.statusText,f),headers:m.headers}:{type:be.data,data:f,statusCode:m.status,headers:m.headers}}if(p===be.error)return{type:p,error:m};if(Pv(m)){var E,y;return{type:be.deferred,deferredData:m,statusCode:(E=m.init)==null?void 0:E.status,headers:((y=m.init)==null?void 0:y.headers)&&new Headers(m.init.headers)}}return{type:be.data,data:m}}function Yr(e,t,n,r){let i=e.createURL(qp(t)).toString(),o={signal:n};if(r&&Wt(r.formMethod)){let{formMethod:a,formEncType:l,formData:s}=r;o.method=a.toUpperCase(),o.body=l==="application/x-www-form-urlencoded"?Xp(s):s}return new Request(i,o)}function Xp(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function Av(e,t,n,r,i){let o={},a=null,l,s=!1,c={};return n.forEach((p,m)=>{let v=t[m].route.id;if(q(!Sr(p),"Cannot handle redirect results in processLoaderData"),ci(p)){let k=hr(e,v),E=p.error;r&&(E=Object.values(r)[0],r=void 0),a=a||{},a[k.route.id]==null&&(a[k.route.id]=E),o[v]=void 0,s||(s=!0,l=Wp(p.error)?p.error.status:500),p.headers&&(c[v]=p.headers)}else bn(p)?(i.set(v,p.deferredData),o[v]=p.deferredData.data):o[v]=p.data,p.statusCode!=null&&p.statusCode!==200&&!s&&(l=p.statusCode),p.headers&&(c[v]=p.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:c}}function id(e,t,n,r,i,o,a,l){let{loaderData:s,errors:c}=Av(t,n,r,i,l);for(let p=0;p<o.length;p++){let{key:m,match:v}=o[p];q(a!==void 0&&a[p]!==void 0,"Did not find corresponding fetcher result");let k=a[p];if(ci(k)){let E=hr(e.matches,v==null?void 0:v.route.id);c&&c[E.route.id]||(c=oe({},c,{[E.route.id]:k.error})),e.fetchers.delete(m)}else if(Sr(k))q(!1,"Unhandled fetcher revalidation redirect");else if(bn(k))q(!1,"Unhandled fetcher deferred data");else{let E={state:"idle",data:k.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(m,E)}}return{loaderData:s,errors:c}}function od(e,t,n,r){let i=oe({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function hr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function ad(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function jt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Ru(e||500,a,new Error(l),!0)}function ld(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Sr(n))return n}}function qp(e){let t=typeof e=="string"?an(e):e;return rn(oe({},t,{hash:""}))}function Rv(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function bn(e){return e.type===be.deferred}function ci(e){return e.type===be.error}function Sr(e){return(e&&e.type)===be.redirect}function Pv(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function $v(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ov(e){return mv.has(e.toLowerCase())}function Wt(e){return pv.has(e.toLowerCase())}async function sd(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let c=e.find(m=>m.route.id===s.route.id),p=c!=null&&!Zp(c,s)&&(o&&o[s.route.id])!==void 0;bn(l)&&(i||p)&&await eh(l,r,i).then(m=>{m&&(n[a]=m||n[a])})}}async function eh(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:be.data,data:e.deferredData.unwrappedData}}catch(i){return{type:be.error,error:i}}return{type:be.data,data:e.deferredData.data}}}function th(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ud(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Ss(e,t){let n=typeof t=="string"?an(t).search:t.search;if(e[e.length-1].route.index&&th(n||""))return e[e.length-1];let r=Oa(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Nv=typeof Object.is=="function"?Object.is:Lv,{useState:Dv,useEffect:Mv,useLayoutEffect:Tv,useDebugValue:Iv}=wl;function bv(e,t,n){const r=t(),[{inst:i},o]=Dv({inst:{value:r,getSnapshot:t}});return Tv(()=>{i.value=r,i.getSnapshot=t,pl(i)&&o({inst:i})},[e,r,t]),Mv(()=>(pl(i)&&o({inst:i}),e(()=>{pl(i)&&o({inst:i})})),[e]),Iv(r),r}function pl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Nv(n,r)}catch{return!0}}function Fv(e,t,n){return t()}const zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_v=!zv,Uv=_v?Fv:bv,jv="useSyncExternalStore"in wl?(e=>e.useSyncExternalStore)(wl):Uv,Pu=T.createContext(null),$u=T.createContext(null),Fi=T.createContext(null),La=T.createContext(null),Ir=T.createContext({outlet:null,matches:[]}),nh=T.createContext(null);function Es(){return Es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Es.apply(this,arguments)}function Bv(e,t){let{relative:n}=t===void 0?{}:t;zi()||q(!1);let{basename:r,navigator:i}=T.useContext(Fi),{hash:o,pathname:a,search:l}=rh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Xt([r,a])),i.createHref({pathname:s,search:l,hash:o})}function zi(){return T.useContext(La)!=null}function Na(){return zi()||q(!1),T.useContext(La).location}function Hv(){zi()||q(!1);let{basename:e,navigator:t}=T.useContext(Fi),{matches:n}=T.useContext(Ir),{pathname:r}=Na(),i=JSON.stringify(Oa(n).map(l=>l.pathnameBase)),o=T.useRef(!1);return T.useEffect(()=>{o.current=!0}),T.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let c=Au(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Xt([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,i,r])}function rh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Ir),{pathname:i}=Na(),o=JSON.stringify(Oa(r).map(a=>a.pathnameBase));return T.useMemo(()=>Au(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Vv(e,t){zi()||q(!1);let{navigator:n}=T.useContext(Fi),r=T.useContext($u),{matches:i}=T.useContext(Ir),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Na(),c;if(t){var p;let y=typeof t=="string"?an(t):t;l==="/"||(p=y.pathname)!=null&&p.startsWith(l)||q(!1),c=y}else c=s;let m=c.pathname||"/",v=l==="/"?m:m.slice(l.length)||"/",k=pr(e,{pathname:v}),E=Qv(k&&k.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:Xt([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Xt([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&E?T.createElement(La.Provider,{value:{location:Es({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:De.Pop}},E):E}function Jv(){let e=Xv(),t=Wp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,o)}class Gv extends T.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Ir.Provider,{value:this.props.routeContext},T.createElement(nh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wv(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Pu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Ir.Provider,{value:t},r)}function Qv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||q(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,c=null;n&&(a.route.ErrorBoundary?c=T.createElement(a.route.ErrorBoundary,null):a.route.errorElement?c=a.route.errorElement:c=T.createElement(Jv,null));let p=t.concat(r.slice(0,l+1)),m=()=>{let v=o;return s?v=c:a.route.Component?v=T.createElement(a.route.Component,null):a.route.element&&(v=a.route.element),T.createElement(Wv,{match:a,routeContext:{outlet:o,matches:p},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?T.createElement(Gv,{location:n.location,component:c,error:s,children:m(),routeContext:{outlet:null,matches:p}}):m()},null)}var cd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(cd||(cd={}));var ta;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ta||(ta={}));function Yv(e){let t=T.useContext($u);return t||q(!1),t}function Kv(e){let t=T.useContext(Ir);return t||q(!1),t}function Zv(e){let t=Kv(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function Xv(){var e;let t=T.useContext(nh),n=Yv(ta.UseRouteError),r=Zv(ta.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function qv(e){let{fallbackElement:t,router:n}=e,r=T.useCallback(()=>n.state,[n]),i=jv(n.subscribe,r,r),o=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,c,p)=>n.navigate(s,{state:c,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(s,c,p)=>n.navigate(s,{replace:!0,state:c,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),a=n.basename||"/",l=T.useMemo(()=>({router:n,navigator:o,static:!1,basename:a}),[n,o,a]);return T.createElement(T.Fragment,null,T.createElement(Pu.Provider,{value:l},T.createElement($u.Provider,{value:i},T.createElement(ty,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?T.createElement(ny,null):t))),null)}function ey(e){q(!1)}function ty(e){let{basename:t="/",children:n=null,location:r,navigationType:i=De.Pop,navigator:o,static:a=!1}=e;zi()&&q(!1);let l=t.replace(/^\/*/,"/"),s=T.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=an(r));let{pathname:c="/",search:p="",hash:m="",state:v=null,key:k="default"}=r,E=T.useMemo(()=>{let y=bi(c,l);return y==null?null:{location:{pathname:y,search:p,hash:m,state:v,key:k},navigationType:i}},[l,c,p,m,v,k,i]);return E==null?null:T.createElement(Fi.Provider,{value:s},T.createElement(La.Provider,{children:n,value:E}))}function ny(e){let{children:t,location:n}=e,r=T.useContext(Pu),i=r&&!t?r.router.routes:ks(t);return Vv(i,n)}var dd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(dd||(dd={}));new Promise(()=>{});function ks(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,ks(r.props.children,o));return}r.type!==ey&&q(!1),!r.props.index||!r.props.children||q(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ks(r.props.children,o)),n.push(a)}),n}function ry(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},na.apply(this,arguments)}function iy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function oy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ay(e,t){return e.button===0&&(!t||t==="_self")&&!oy(e)}const ly=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function sy(e,t){return Sv({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:H0({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||uy(),routes:e,detectErrorBoundary:ry}).initialize()}function uy(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=na({},t,{errors:cy(t.errors)})),t}function cy(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Ru(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ih=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:p}=t,m=iy(t,ly),{basename:v}=T.useContext(Fi),k,E=!1;if(typeof c=="string"&&fy.test(c)&&(k=c,dy)){let d=new URL(window.location.href),h=c.startsWith("//")?new URL(d.protocol+c):new URL(c),x=bi(h.pathname,v);h.origin===d.origin&&x!=null?c=x+h.search+h.hash:E=!0}let y=Bv(c,{relative:i}),g=py(c,{replace:a,state:l,target:s,preventScrollReset:p,relative:i});function f(d){r&&r(d),d.defaultPrevented||g(d)}return T.createElement("a",na({},m,{href:k||y,onClick:E||o?r:f,ref:n,target:s}))});var fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(fd||(fd={}));var pd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pd||(pd={}));function py(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Hv(),s=Na(),c=rh(e,{relative:a});return T.useCallback(p=>{if(ay(p,n)){p.preventDefault();let m=r!==void 0?r:rn(s)===rn(c);l(e,{replace:m,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}const hy=P.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,my="/Nanofab-Project/assets/microscopio-02614e2c.svg",gy="/Nanofab-Project/assets/mol-3565b3ed.svg",u={mobile:"390px",largeMobile:"391px",tablet:"819px",notebook:"1023px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},vy=P.div`
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
  
`,yy=P.div`
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
`,xy=P.img`
  padding-left: 15px;
  width: 200px;

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {     
    width: 400px;
  }
`,wy="/Nanofab-Project/assets/nanofab-c5546f6e.png",Sy="/Nanofab-Project/assets/background-1f899db0.svg",Ey=P.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${Sy});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`,ky=P.div`
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
`,hd=P.img`
  width: 20%;

  @media screen and (max-width: ${u.mobile}) {
    width: 50%;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: ${u.notebook}) {
    width: 35%;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {
    width: 35%;
  }
  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {
    width: 30%;
  }
  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 40%;
  }

  border-radius: 10px;
`,Cy="/Nanofab-Project/assets/nanofab-lab-8dc5e917.png",Ay="/Nanofab-Project/assets/LogoPPGEM-white-fd88f51e.png",Ry=({})=>S(Ey,{children:X(ky,{children:[S(hd,{src:Ay}),S(hd,{src:Cy})]})}),Py=P.div`
  width: 60%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1299px) {    
    display: none;
  }
`,$y=P.a`
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
`,Oy=P(ih)`
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
`,Ly=({name:e,url:t})=>S($y,{children:S(Oy,{to:t,children:e})}),Ny=({urls:e})=>S(Py,{children:e.map(t=>S(Ly,{name:t.name,url:t.url},e.indexOf(t)))}),Dy=P.nav`
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 1300px) {    
        display: none;
    }
`,qn=P(ih)`
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
`,My=P.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,Ty=P.nav`
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
`;var oh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},md=tt.createContext&&tt.createContext(oh),Cn=globalThis&&globalThis.__assign||function(){return Cn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cn.apply(this,arguments)},Iy=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function ah(e){return e&&e.map(function(t,n){return tt.createElement(t.tag,Cn({key:n},t.attr),ah(t.child))})}function Da(e){return function(t){return tt.createElement(by,Cn({attr:Cn({},e.attr)},t),ah(e.child))}}function by(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=Iy(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),tt.createElement("svg",Cn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:Cn(Cn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&tt.createElement("title",null,o),e.children)};return md!==void 0?tt.createElement(md.Consumer,null,function(n){return t(n)}):t(oh)}function Fy(e){return Da({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(e)}function zy(e){return Da({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(e)}const _y=()=>{const[e,t]=T.useState(!1);return X(Dy,{children:[S(My,{onClick:()=>t(!e),children:e?S(Fy,{size:40}):S(zy,{size:40})}),e?X(Ty,{children:[S(qn,{to:"/",onClick:()=>t(!1),children:"Home"}),S(qn,{to:"/equipe",onClick:()=>t(!1),children:"Equipe"}),S(qn,{to:"/andamento",onClick:()=>t(!1),children:"Andamento"}),S(qn,{to:"/submissao_projetos",onClick:()=>t(!1),children:"Submissão de Projetos"}),S(qn,{to:"/publicacoes",onClick:()=>t(!1),children:"Publicações"}),S(qn,{to:"/parcerias",onClick:()=>t(!1),children:"Parcerias"})]}):null]})},Qn=({})=>X(vy,{children:[X(yy,{children:[S(xy,{src:wy}),S(Ny,{urls:[{name:"Home",url:"/"},{name:"Equipe",url:"/equipe"},{name:"Andamento",url:"/andamento"},{name:"Submissão de Projetos",url:"/submissao_projetos"},{name:"Publicações",url:"/publicacoes"},{name:"Parcerias",url:"/parcerias"}]}),S(_y,{})]}),S(Ry,{})]}),Uy=P.div`
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
`,jy=P.div`
  width: 85%;
  height: 2px;
  background: ${({theme:e})=>e.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${u.mobile}) {    
    width: 50%;
  }
`,By=P.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${u.mobile}) {    
    flex-direction: column;
  }
`,gd=P.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.content};

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,vd=P.h3`

`,yd=P.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6%;
  
`,xd=P.span`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.content};
  width: 70%;

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,Hy=P.div`
  width: 83%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
  margin-top: 1%;

  @media screen and (max-width: ${u.mobile}) {    
    width: 100%;
    margin-bottom: 3%;
    justify-content: flex-end;
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
    margin-bottom: 1%;
    margin-top: 1%;
  }
`,Vy=P.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${u.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {      
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } 

  @media screen and (min-width: 700px) and (max-width: 900px) {      
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,Jy=P.img`
  width: 80px;
  height: 80px;
  filter: grayscale(1);

  @media screen and (max-width: ${u.mobile}) {
    margin-right: 3%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    margin-right: 5%;
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {
    width: 130px;
    height: 130px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    width: 200px;
    height: 200px;
  }
`,Gy="/Nanofab-Project/assets/uerj-b2e3dfd0.png",Yn=({})=>X(Uy,{children:[X(Hy,{children:[S(Jy,{src:Gy}),X(Vy,{children:[X(yd,{children:[S(vd,{children:"Email"}),S(xd,{children:"adsad@gmail.com"})]}),X(yd,{children:[S(vd,{children:"Funcionamento"}),S(xd,{children:"Segunda a sexta Xhrs às Yhrs"})]})]})]}),S(jy,{}),X(By,{children:[S(gd,{children:"Ⓒ Serra Jr. Engenharia 2022"}),S(gd,{children:"Todos os direitos reservados"})]})]}),Wy=P.div`
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

`,Qy=P.div`
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
`,Yy=P.span`
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
`,Ky=P.div`
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
`,Zy=P.img`
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
`,Xy="/Nanofab-Project/assets/chemistry-7542d245.png",qy=({})=>S(Ky,{children:S(Zy,{src:Xy})}),e1=P.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6%;

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    padding-top: 0px;
  }
`,t1=P.span`
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
`,n1=({title:e})=>S(e1,{children:S(t1,{children:e})}),r1=({descriptions:e})=>X(Wy,{children:[S(qy,{}),S(n1,{title:"Sobre o NANOFAB"}),S(Qy,{children:e.map(t=>S(Yy,{children:t.text},e.indexOf(t)))})]}),i1=P.div`
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
`,o1=P.div`
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
`,a1=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;
  margin-top: 5%;
`,l1=P.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`,s1=P.span`
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
`,u1=P.span`
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
`,c1=({image:e,title:t,text:n})=>X(o1,{children:[S(a1,{children:S(l1,{src:e,alt:t})}),S(u1,{children:t}),S(s1,{children:n})]}),d1=({cards:e})=>S(i1,{children:e.map(t=>S(c1,{image:t.image,title:t.title,text:t.text},e.indexOf(t)))}),f1=({})=>X(hy,{children:[S(Qn,{}),S(r1,{descriptions:[{text:"O Laboratório Multiusuário de Nanofabricação e Caracterização de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduação em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisição de um microscópio eletrônico de alta resolução do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existência de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperação. Nesse contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. Além disso, o NANOFAB atenderá demandas na área de nanofabricação com a aquisição de um microscópio FIB (Focused Ion Beam), a partir de recursos aprovados no Edital FAPERJ 2015, Grandes Equipamentos."},{text:"O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. O microscópio FIB também permitirá a preparação de amostras para microscopia eletrônica de transmissão."},{text:"O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geração de hidrogênio, revestimentos de aços e compósitos."}]}),S(d1,{cards:[{image:gy,title:"Coordenação e Comitê Gestor",text:"O NANOFAB é coordenado pelo prof. Norberto Mangiavacchi (UERJ) e tem como vice-coordenador o prof. Eduardo de Albuquerque Brocchi (PUC-Rio). O Comitê Gestor do NANOFAB é composto por três membros, eleitos a cada dois anos. Para o Biênio 2016-2018, o Comitê Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET) e Rogério Navarro Correia de Siqueira (PUC-Rio)."},{image:my,title:"Unidades e Programas Envolvidos / Projetos de Pesquisa",text:"Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química da UERJ) e Instituto de Física da UERJ."}]}),S(Yn,{})]}),p1=P.div`
  width: 100%;
`,h1=P.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
  margin: 50px 0px;

  @media screen and (max-width: 1022px) {
    display: none;
  }

`,m1=P.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    width: 95%;
    }
  @media screen and (min-width: ${u.largeNotebook}) and (max-width: ${u.desktop}) {    
    width: 90%;
  }

  @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
    width: 70%;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    width: 70%;
  }
`,g1=P.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d5d4d4;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  @media screen and (min-width: ${u.extraLargeDesktop}){    
    height: 8vh;
  }
`,v1=P.div`
  position: absolute;
  top: -70px;
  left: 10px;
  @media screen and (max-width: ${u.mobile}) {
    top: -20px;
    left: -15px;
  }
  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    top: -50px;
    left: -10px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    top: -50px;
    left: -10px;
  }

`,y1=P.img`
  height: 140px;
  @media screen and (max-width: ${u.mobile}) {
    height: 80px;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    height: 100px;
  }

  @media screen and (min-width: 700px) and (max-width: 821px) {
    height: 120px;
  }
  
  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    height: 200px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    height: 230px;
  }
`,x1=P.span`
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


`,w1=P.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${u.mobile}) {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 20px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #114676;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #114676;
    }
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 20px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #114676;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #114676;
    }
  }

`,lh="/Nanofab-Project/assets/team-2f83bf5a.png",S1=P.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({theme:e})=>e.colors.text.highlight};

  @media screen and (max-width: ${u.mobile}) {
    width: 900px;  
  } 

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 1000px;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    padding-top: 8px;
    padding-bottom: 8px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    padding-top: 20px;
    padding-bottom: 20px;
  }
`,E1=P.span`
  width: 40%;
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.auxiliary.error.dark};
  padding-left: 20px;

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 25%;
  }
  
  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  
`,io=P.span`
  width: 15%;
  text-align: center;
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.auxiliary.error.dark};

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 18.75%;
  }

  @media screen and (min-width: ${u.notebook}) and (max-width: ${u.largeNotebook}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
`,k1=({name:e,unit:t,bond:n,titration:r,personFunction:i})=>X(S1,{children:[S(E1,{children:e}),S(io,{children:t}),S(io,{children:n}),S(io,{children:r}),S(io,{children:i})]}),C1=P.div`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;

  ${({styleActive:e})=>e?ea`
          background-color: ${({theme:t})=>t.colors.foreground}55;
        `:ea`
          background-color: ${({theme:t})=>t.colors.middleground}55;
        `}

  @media screen and (max-width: ${u.mobile}) {
    width: 900px;  
  } 

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 1000px;

  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
`,A1=P.span`
  width: 40%;
  font-size: ${({theme:e})=>e.fonts.small}px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.text.title};
  padding-left: 10px;

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 25%;
  }
  @media screen and (min-width: ${u.tablet}) and (max-width: 1025px) {
    font-size: ${({theme:e})=>e.fonts.extrasmall}px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
    padding-left: 20px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }


`,oo=P.span`
  width: 15%;
  text-align: center;
  font-size: ${({theme:e})=>e.fonts.small}px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.text.title};

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    width: 18.75%; // Enough to tell the user to scroll to the side, shows the second tab slightly
  }

  @media screen and (min-width: ${u.tablet}) and (max-width: 1025px) {
    font-size: ${({theme:e})=>e.fonts.extrasmall}px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${u.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,R1=({name:e,unit:t,bond:n,titration:r,personFunction:i,styleActive:o})=>X(C1,{styleActive:o,children:[S(A1,{children:e}),S(oo,{children:t}),S(oo,{children:n}),S(oo,{children:r}),S(oo,{children:i})]}),P1=({list:e})=>S(h1,{children:X(m1,{children:[X(g1,{children:[S(v1,{children:S(y1,{src:lh})}),S(x1,{children:"Equipe NANOFAB"})]}),X(w1,{children:[S(k1,{name:"Nome",unit:"PPG/IES",bond:"Vínculo",titration:"Titulação",personFunction:"Função"}),e.map(t=>S(R1,{name:t.name,unit:t.unit,bond:t.bond,titration:t.titration,personFunction:t.personFunction,styleActive:e.indexOf(t)%2===0},e.indexOf(t)))]})]})}),$1=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: ${u.notebook}) {
    display: none;
  }
`,O1=P.div`

`,L1=P.img`
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
`,N1=P.span`
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
`,D1=P.div`
    width: 40%;
    margin: 10px;

    @media screen and (max-width: ${u.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${u.largeMobile}) {    
        width: 70%;
    }
`,M1=P.button`    
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
`,T1=P.div`
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


    ${({isVisible:e})=>e?`
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
    
`,wd=P.div`
    width: 50%;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`,ao=P.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${u.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
        min-height: 70px;
    }
`,lo=P.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`,I1=P.span`
    font-size: ${({theme:e})=>e.fonts.small}px;
    color: ${({theme:e})=>e.colors.text.title};
    text-align: left;
`,so=P.span`

`;function sh(e){return Da({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 14l-4-4h8z"}}]}]})(e)}function uh(e){return Da({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10l4 4H8z"}}]}]})(e)}const b1=({name:e,unit:t,bond:n,personFunction:r,titration:i})=>{const[o,a]=T.useState(!1);return X(D1,{children:[X(M1,{onClick:()=>a(!o),isVisible:o,children:[S(I1,{children:e}),o?S(uh,{size:20}):S(sh,{size:20})]}),o?X(T1,{isVisible:o,children:[X(wd,{children:[X(ao,{children:[S(lo,{children:"PPG/IES"}),S(so,{children:t})]}),X(ao,{children:[S(lo,{children:"Vínculo"}),S(so,{children:n})]})]}),X(wd,{children:[X(ao,{children:[S(lo,{children:"Titulação"}),S(so,{children:i})]}),X(ao,{children:[S(lo,{children:"Função"}),S(so,{children:r})]})]})]}):null]})},F1=({list:e})=>X($1,{children:[S(O1,{children:S(L1,{src:lh})}),S(N1,{children:"Equipe NANOFAB"}),e.map(t=>S(b1,{name:t.name,bond:t.bond,personFunction:t.personFunction,titration:t.titration,unit:t.unit},e.indexOf(t)))]}),z1=({})=>{const e=[{name:"José Brant de Campos",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE ",personFunction:"Coordenador e Comitê Gestor"},{name:"Noberto Mangiavacchi",unit:"UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Vice-Coodenador"},{name:"Hector Reynaldo Meneses",unit:"CEFET-RJ",bond:"Permanente",titration:"Doutor, PQ 2",personFunction:"Comitê Gestor"},{name:"Rogério Navarro Correia de Siqueira",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor",personFunction:"Comitê Gestor"},{name:"Suzana Bottega Peripolli",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Comitê Gestor"},{name:"Lilian Pantoja Sosman",unit:"IF - PPGF/UERJ",bond:"Permanente",titration:"Doutor, PQ 2",personFunction:"Comitê de Usuários"},{name:"Ivana Lourenço de Mello Ferreira",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Comitê de Usuários"},{name:"Marilia Garcia Diniz",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Comitê de Usuários"},{name:"José Ricardo Muniz Ferreira",unit:"Empresa R-CRio",bond:"Sócio",titration:"Doutor",personFunction:"Comitê de Usuários"},{name:"Eduardo de Albuquerque Brocchi",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 1C, CNE",personFunction:"Pesquisador"},{name:"José Guilherme Santos Silva",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1B, CNE",personFunction:"Pesquisador"},{name:"Luciano Rodrigues Ornelas de Lima",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1D, CNE",personFunction:"Pesquisador"},{name:"Marcos Antonio da Silva Costa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Nakédia Maysa Freitas Carvalho",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE",personFunction:"Pesquisador"},{name:"Francisco José Moura",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 2",personFunction:"Pesquisador"},{name:"Rodrigo Fernandes Magalhães de Souza",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ2",personFunction:"Pesquisador"},{name:"Eric Cardona Romani",unit:"SENAI",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Jorge Luis do Amaral",unit:"PPG-EL/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Marilza Sampaio Aguilar",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Daniel José Naid Mansur Chalhub",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"José da Rocha Miranda Pontes",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Ana Maria Furtado de Sousa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ2",personFunction:"Pesquisador"},{name:"Jaqueline Dias Senra",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Juliana Fonseca de Lima",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Herman Lima Pessoa",unit:"CBPF",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Letícia Aguilera dos Santos",unit:"IPRJ/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Cecilia Vilani",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Celio Albano da Costa",unit:"UFRJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"José Luis Lopes da Silveira",unit:"UFRJ",bond:"Permanente",titration:"Doutor, PQ2",personFunction:"Pesquisador"},{name:"Eduardo Sousa Lima",unit:"IME",bond:"Permanente",titration:"Doutor, PQ2",personFunction:"Pesquisador"},{name:"Eustáquio de Souza Baêta Junior",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor",personFunction:"Pesquisador"},{name:"Maybi Fálker Sampaio",unit:"NANOFAB/UERJ",bond:"Bolsista QUALITEC/UERJ",titration:"Doutor",personFunction:"Equipe NANOFAB"},{name:"Kellen Venâncio dos Santos",unit:"NANOFAB/UERJ",bond:"Bolsista TCT/FAPERJ",titration:"Engenheira",personFunction:"Equipe NANOFAB"},{name:"Camila Alves Pelicarto Silva",unit:"NANOFAB/UERJ",bond:"Bolsista PROATEC/UERJ",titration:"Engenheira",personFunction:"Equipe NANOFAB"}];return X(p1,{children:[S(Qn,{}),S(P1,{list:e}),S(F1,{list:e}),S(Yn,{})]})},_1=P.div`
  width: 100%;
`,U1=({})=>X(_1,{children:[S(Qn,{}),S(Yn,{})]}),j1=P.div`
  width: 100%;
`,B1=({})=>X(j1,{children:[S(Qn,{}),S(Yn,{})]}),H1=P.div`
  width: 100%;
`,V1=P.div`
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
`,J1="/Nanofab-Project/assets/publications2-b4db6c33.svg",G1=P.div`
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
`,W1=P.div`
  /* width: 30%; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 70px; */
`,Q1=P.div`
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
`,Y1=P.img`
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
`,K1=({url:e})=>S(Q1,{children:S(Y1,{src:e})}),Z1=P.div``,X1=P.span`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  @media screen and (min-width: 2560px) and (max-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }

  @media screen and (min-width: ${u.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,q1=({title:e})=>S(Z1,{children:S(X1,{children:e})}),ch=({title:e,image:t})=>S(G1,{children:X(W1,{children:[S(K1,{url:t}),S(q1,{title:e})]})}),ex=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 50px;
`,tx=P.div`
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
`,nx=P.button`    
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
`,rx=P.div`
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
`;P.div`
    width: 50%;
    text-align: justify;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`;const ix=P.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${u.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {    
        min-height: 70px;
    }

`;P.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`;const ox=P.span`
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
`,ax=P.span`
    text-align: justify;

    @media screen and (min-width: ${u.largeDesktop}) and (max-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
    }
    @media screen and (min-width: ${u.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
    }
`,lx=({year:e,descriptions:t})=>{const[n,r]=T.useState(!1);return X(tx,{children:[X(nx,{onClick:()=>r(!n),isVisible:n,children:[S(ox,{children:e}),n?S(uh,{size:20}):S(sh,{size:20})]}),n?S(rx,{isVisible:n,children:t.map(i=>S(ix,{children:S(ax,{children:i.description})}))}):null]})},sx=({list:e})=>S(ex,{children:e.map(t=>S(lx,{year:t.year,descriptions:t.descriptions},e.indexOf(t)))}),ux=({})=>X(H1,{children:[S(Qn,{}),S(ch,{title:"Publicações",image:J1}),S(V1,{children:S(sx,{list:[{year:"2022",descriptions:[{description:"SILVA, ADRIEL M.; SOUZA, RODRIGO F.M.; AGUILERA, LETÍCIA S.; de Campos, José B.; BROCCHI, EDUARDO A. Upgrade of titanium content in a vanadiferous titanomagnetite waste: Design of a roast-leach route based on thermodynamics simulations. MINERALS ENGINEERING. , v.179, p.107460 - , 2022."},{description:"LIMA, EDUARDO DE SOUSA; GALL, CAMILA CATALANO; ALVES, MANUEL FELLIPE R.P.; DE CAMPOS, JOSÉ BRANT; CAMPOS, TIAGO MOREIRA BASTOS; SANTOS, CLAUDINEI DOS Development and characterization of alumina-toughened zirconia (ATZ) ceramic composites doped with a beneficiated rare-earth oxide extracted from natural ore. Journal of Materials Research and Technology-JMR&T. , v.16, p.451 - 460, 2022."}]},{year:"2021",descriptions:[{description:"MARÍN CASTAÑO, ELIANA PAOLA; CAMPOS, JOSÉ BRANT DE; SOLÓRZANO-NARANJO, IVAN GUILLERMO; BROCCHI, EDUARDO DE ALBUQUERQUE Characterization of Ternary CuNiCo Metallic Nanoparticles Produced by Hydrogen Reduction.Materials. , v.14, p.6006 - , 2021."},{description:"SAMPAIO, M.F.; MARINHO, P.R.B.; CABRUJA, E.; LOZANO, M.; LIMA JÚNIOR, H.P.; de Campos, J.B. SU- 8 processing improvement and simulating studies for a Micromegas detector fabrication.Journal of Instrumentation. , v.16, p.P08022 - P02038, 2021."},{description:"HORTA, MARLA KAROLYNE DOS SANTOS; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; WESTIN, CECÍLIA BUZATTO; NAVARRO DA ROCHA, DANIEL; CAMPOS, JOSÉ BRANT < i > In vitro</> evaluation of natural hydroxyapatite from Osteoglossum bicirrhosum fish scales for biomedical application.International Journal of Applied Ceramic Technology. , v.18, p.1930 - 1937, 2021."},{description:"MOTA, RAFAEL OLIVEIRA DA; DÓREA, MÁRCIA DE MELO; AGUILERA, LETÍCIA DOS SANTOS; ROMANI, ERIC CARDONA; COSTA, HECTOR REYNALDO MENESES; CAMPOS, JOSÉ BRANT DE AVANÇOS RECENTES NA UTILIZAÇÃO DO GRAFENO COMO ADITIVO EM POLÍMEROS / RECENT ADVANCES IN THE USE OF GRAPHENE AS AN ADDITIVE IN POLYMERS. Brazilian Journal of Development. , v.7, p.32743 - 32752, 2021."},{description:"RIBEIRO, SUZANA BARRETO NORONHA; DA VEIGA JUNIOR, VALDIR FLORÊNCIO; DE CAMPOS, JOSÉ BRANT; DOS SANTOS, JHEISON LOPES; LOPES, IAGO JOSÉ VITRAL REZENDE; DA ROCHA, DANIEL NAVARRO; DA SILVA, MARCELO HENRIQUE PRADO Influences of biosilica content from Amazonian freshwater sponge on calcium phosphates.Journal of the Australian Ceramic Society. , v.57, p.55 - 65, 2021"},{description:"Machado, Marcelo Vitor Ferreira; DE CAMPOS, JOSÉ BRANT; AGUILAR, MARILZA SAMPAIO; Ramos, Vitor Santos Mechanical and Microstructural Characterizations on Commercial and Synthesized by the Sol- Gel Method Using Chicken Egg Shells as Precursor Hydroxyapatite.South Florida Journal of Development. , v.2, p.1365 - 1374, 2021."}]},{year:"2020",descriptions:[{description:"BARROS, S. D.; DUARTE, J. P. P.; ROCHA, L. D. S.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S.; MEDEIOS, M. E.; de Campos, José B.; COSTA, M. E. H. M.; LACHTER, E. R.; SENRA, J. D.; MALTA, L. F. B. Cyclodextrin-Stabilized Palladium Nanoparticles on Ceria: Invertigation of Support Interactions and Pivotal Promotion in the Suzuki-Miyaura Reaction. ChemistrySelect. , v.5, p.7227 - 7235, 2020."},{description:"MELLO, NATHALLI M.; REGO, ARTUR S. C.; BROCCHI, EDUARDO A.; CAMPOS, JOSÉ B. DE; MOURA, FRANCISCO J.; SOUZA, RODRIGO F. M. Effect of an Alumina Supported Palladium Catalyst on the Magnesium Sulfate Decomposition Kinetics. MATERIALS RESEARCH. , v.23, p.1 - 9, 2020."},{description:"CARNEIRO, MATEUS R. D.; FREITAS, BRUNO C.; DE BARROS, IURI B.; de Campos, José B.; BASTOS, IVAN N.; COSTA, HECTOR R. M. Evaluation of adhesion of epoxy resin sealant to improve the corrosion resistance of thermal sprayed coatings. APPLIED ADHESION SCIENCE. , v.8, p.7 - 21, 2020."},{description:"HORTA, M. K. S.; Moura F.J.; AGUILAR, M. S.; WESTIN, C. B.; de Campos, J.B.; PERIPOLLI, S. B.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S. Nanostructured Hydroxyapatite from Hen's Eggshells Using Sucrose as a Template. Materials Research-Ibero-american Journal of Materials. , v.23, p.1 - 9, 2020."}]},{year:"2019",descriptions:[{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; SANTOS, JHEISON LOPES DOS; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; BARBOSA, RAFAEL MAZA; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Bioactivity of strontium-monetite coatings for biomedical applications. CERAMICS INTERNATIONAL. , v.45, p.7568 - 7579, 2019."},{description:"SILVA, LORENNA; NEVES, VINÍCIUS; RAMOS, VITOR; SILVA, RAPHAEL; CAMPOS, JOSÉ; SILVA, ALEXSANDRO; MALTA, LUIZ; SENRA, JAQUELINE Layered Double Hydroxides as Bifunctional Catalysts for the Aryl Borylation under Ligand-Free Conditions. Catalysts. , v.9, p.302 - 314, 2019."},{description:"GALVÃO, RHAUANE ALMEIDA; SANTA-CRUZ, LARISSA AGOSTINHO DE; BARRETO, PALOMA BANTIM; HORTA, MARLA KAROLYNE DOS SANTOS; ANDRADE, ANTONIO MARCOS HELGUEIRA DE; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; PERIPOLLI, SUZANA BOTTEGA; CAMPOS, JOSÉ BRANT DE; ARRUDA, ISABEL RENATA DE SOUZA; MACHADO, GIOVANNA Electrochemical single-step obtention and characterization of a biomimetic TiO <sub>2</sub> -HA NTs covered by chitosan. JOURNAL OF MATERIALS RESEARCH. , v.34, p.1 - 11, 2019."},{description:"SOUZA, RODRIGO; QUEIROZ, CARLOS; BRANT, JOSÉ; BROCCHI, EDUARDO Pyrometallurgical processing of a low copper content concentrate based on a thermodynamic assessment. MINERALS ENGINEERING. , v.130, p.156 - 164, 2019."},{description:"HORTA, MARLA; AGUILAR, MARILZA; MOURA, FRANCISCO; CAMPOS, JOSÉ; RAMOS, VITOR; QUIZUNDA, ADILSON Synthesis and characterization of green nanohydroxyapatite from hen eggshell by precipitation method. MATERIALS TODAY: PROCEEDINGS. , v.14, p.716 - 721, 2019"}]},{year:"2018",descriptions:[{description:"FERREIRA, J. R. M.; Louro, Luis Henrique Leme; COSTA, A. M.; MARCAL, R. L. S. B.; ROCHA, D. N.; BARBOSA, R. M.; de Campos, José B.; PRADO, M. H. Zinc-doped Calcium Phosphate Coating on Titanium Surface Using Ostrich Eggshell as a Ca2+ Ions Source. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."},{description:"AGUILERA, L. S.; de Campos, J.B.; de Biasi, R.S.; Figueiredo, A.B.H.S. Use of the Drag Method to Study the Magnetic Behavior of Mn-Zn Ferrite Nanoparticles. The International Journal of Engineering and Science. , v.7, p.57 - 61, 2018."},{description:"BIASI, RONALDO SERGIO DE; MELO, GABRIEL BURLANDY MOTA DE; FIGUEIREDO, ANDRÉ BEN-HUR DA SILVA; CAMARENA, MARIELLA ALZAMORA; CAMPOS, JOSÉ BRANT DE Properties of manganese ferrite-paraffin composites. Journal of Materials Research and Technology-JMR&T. , v.8, p.309 - 313, 2018."},{description:"AGUILERA, L. S.; MARCAL, R. L. S. B.; de Campos, J.B.; PRADO, M. H.; Figueiredo, A.B.H.S.MAGNETIC FILTER PRODUCED BY ZnFe2O4 NANOPARTICLES USING FREEZE CASTING. Journal of Materials Research and Technology-JMR&T. , v.7, p.350 - 355, 2018. "},{description:"ROCHA, DANIEL NAVARRO DA; SILVA, MARCELO H. PRADO DA; CAMPOS, JOSÉ BRANT DE; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; CRUZ, LEILA ROSA Kinetics of conversion of brushite coatings to hydroxyapatite in alkaline solution. Journal of Materials Research and Technology-JMR&T. , v.7, p.479 - 486, 2018."},{description:"Cabral, R.F.; de Campos, J.B.; SILVA, C. E. V.; FONSECA, G. M.; LIMA, W. N.; LIMA, E. Formação da fase YNbO4 na sinterização do compósito Alumina-YAG com Nb2O5. CADERNOS UNIFOA (IMPRESSO). , v.36, p.29 - 35, 2018."},{description:"Cabral, R.F.; PRADO DA SILVA, M.H.; Lima, E.S.; de Campos, J.B.; MAGNAGO, ROBERTO DE OLIVEIRA Evaluation of Hardness and the Fracture Toughness of Composite Biphasic Alumina-YAG. MATERIALS SCIENCE FORUM (ONLINE). , v.912, p.82 - 86, 2018."},{description:"SALEIRO, GISELE TEIXEIRA; GONÇALVES, DANILO CORREA; COSTA, CÉLIO ALBANO DA; CAMPOS, JOSÉ BRANT DE; LIMA, EDUARDO DE SOUSA COMPORTAMENTO MECÂNICO DO SIC ADITIVADO COM Al2O3 E Y2O3 PRODUZIDOS PELA SÍNTESE POR COMBUSTÃO AUTOSSUSTENTÁVEL À ALTA TEMPERATURA. TECNOLOGIA EM METALURGIA, MATERIAIS E MINERAÇÃO. , v.15, p.96 - 102, 2018."},{description:"MENDONCA, F.; COSTA, A. M.; de Campos, J.B.; MARCAL, R. L. S. B.; ROCHA, D. N.; PRADO, M. H. Bioactivity Assessment of Ag-HA. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."}]},{year:"2017",descriptions:[{description:"GONÇALVES, DANILO CORRÊA; SALEIRO, GISELE TEIXEIRA; MATIAS, PHILIPE CARDOSO; GOMES, ALAELSON VIEIRA; RAMOS, VITOR; CAMPOS, JOSÉ BRANT BRANT DE; MELO, FRANCISCO CRISTOVÃO LOURENÇO DE; LIMA, EDUARDO SOUSA Microstructural Characterization and Influence of Ceramography Method on the Microhardness of Sintering Agents Added Silicon Carbide. Materials Research-Ibero-american Journal of Materials"},{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Mg substituted apatite coating from alkali conversion of acidic calcium phosphate. Materials Science & Engineering C-Materials for Biological Applications. , v.70, p.408 - 417, 2017."},{description:"ROMANI, E. C.; LARRUDE, D. G.; NACHEZ, L.; VILANI, C.; de CAMPOS, J. B.; PERIPOLLI, S. B.; FREIRE, F. L.Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS. , v.65, p.1 - 9, 2017."},{description:"SANTOS, J. L.; MARÇAL, R. L. S. B.; JESUS, P. R. R.; GOMES, A. V.; LIMA, E. P.; MONTEIRO, S. N.; de CAMPOS, J. B.; LOURO, L. H. L.Effect of LiF as Sintering Agent on the Densification and Phase Formation in Al2O3-4 Wt Pct Nb2O5 Ceramic Compound. METALLURGICAL AND MATERIALS TRANSACTIONS A-PHYSICAL METALLURGY AND MATERIALS SCIENCE. , v.48, p.4432 - 4440, 2017."}]}]})}),S(Yn,{})]}),cx=P.div`
  width: 100%;

`,dx=P.div`
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
`,fx=P.div`
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



`,px=P.span`
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
`,hx=P.div`
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
`,mx=P.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,gx=P.img`
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
`,vx=({image:e,altText:t})=>S(mx,{children:S(gx,{src:e,alt:t})}),ko="/Nanofab-Project/assets/cbpf-812298b6.jpg",Co="/Nanofab-Project/assets/faperj-aefe040c.svg",Ao="/Nanofab-Project/assets/finep-072bfec0.svg",hl="/Nanofab-Project/assets/logoUFF-bce55271.png",ml="/Nanofab-Project/assets/ime-85233a07.jpg",gl="/Nanofab-Project/assets/pucrj-7995f7c6.jpg",vl="/Nanofab-Project/assets/UFRJ-ae0dd01b.jpg",yl="/Nanofab-Project/assets/cefet-fb822b95.png",xl="/Nanofab-Project/assets/SerraJr-fd37bf50.svg",yx=({})=>{const e=[{image:ko,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Co,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Ao,altText:"FINEP - Agência Brasileira de Inovação"},{image:hl,altText:"UFF - Universidade Federal Fluminense"},{image:ml,altText:"IME - Instituto Militar de Engenharia"},{image:vl,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:gl,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:yl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:xl,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:ko,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Co,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Ao,altText:"FINEP - Agência Brasileira de Inovação"},{image:hl,altText:"UFF - Universidade Federal Fluminense"},{image:ml,altText:"IME - Instituto Militar de Engenharia"},{image:vl,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:gl,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:yl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:xl,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:ko,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Co,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Ao,altText:"FINEP - Agência Brasileira de Inovação"},{image:hl,altText:"UFF - Universidade Federal Fluminense"},{image:ml,altText:"IME - Instituto Militar de Engenharia"},{image:vl,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:gl,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:yl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:xl,altText:"Serra Jr. - Serra Júnior Engenharia"}];return X(fx,{children:[S(px,{children:"Parceiros"}),S(hx,{children:e.map(t=>S(vx,{image:t.image,altText:t.altText},e.indexOf(t)))})]})},xx=P.div`
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
`,wx=P.div`
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
`,Sx=P.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${u.mobile}) {
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${u.largeMobile}) and (max-width: ${u.tablet}) {
    margin-bottom: 5%;
  }
`,Ex=P.div`
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
`,kx=P.span`
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
`,Cx=P.span`
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
`,Ax=P.img`
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
`;P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px;
    width: 200px; */
`;const Rx=({image:e,title:t,paragraph:n})=>S(xx,{children:X(wx,{children:[S(Sx,{children:S(Ax,{src:e,alt:t})}),X(Ex,{children:[S(kx,{children:t}),S(Cx,{children:n})]})]})}),Px="/Nanofab-Project/assets/handshake-903e6074.png",$x=({})=>{const e=[{image:ko,title:"Centro Brasileiro de Pesquisas Físicas - CBPF",paragraph:"O NANOFAB desenvolve parceria científica e tecnológica com o CBPF na área de Instrumentação Científica, com o desenvolvimento de dispositivos multiplicadores e elétrons (GEM-Gas Electron Multiplier) e detectores bidimensionais de raios-x a gás."},{image:Co,title:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro",paragraph:"O NANOFAB recebe apoio da FAPERJ em projetos de infraestrutura e pesquisa como o PENSA-RIO e através de projetos em colaboração com os pesquisadores"},{image:Ao,title:"FINEP - Agência Brasileira de Inovação",paragraph:"O NANOFAB participa de editais da FINEP em projetos estruturantes como o Grande Laboratórios Multiusuários e Ações Transversais."}];return X(cx,{children:[S(Qn,{}),S(ch,{title:"Parcerias",image:Px}),S(dx,{children:e.map(t=>S(Rx,{image:t.image,title:t.title,paragraph:t.paragraph},e.indexOf(t)))}),S(yx,{}),S(Yn,{})]})},Ox=P.div`
  width: 100%;
`,Lx=P.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,Nx=P.span`
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.highlight};
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.auxiliary.error.dark};
  border-radius: 20px;
`,Dx=({})=>X(Ox,{children:[S(Qn,{}),S(Lx,{children:S(Nx,{children:"Aconteceu um problema, tente novamente mais tarde"})}),S(Yn,{})]}),Mx="/Nanofab-Project/assets/background2-7f5efefe.svg",Tx=P.div`
  background-image: url(${Mx});
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
`,Ix=sy([{path:"/",element:S(f1,{})},{path:"/equipe",element:S(z1,{})},{path:"/andamento",element:S(U1,{})},{path:"/submissao_projetos",element:S(B1,{})},{path:"/publicacoes",element:S(ux,{})},{path:"/parcerias",element:S($x,{})},{path:"*",element:S(Dx,{})}],{basename:"/Nanofab-Project"}),bx=({})=>S(Tx,{children:S(qv,{router:Ix})}),Fx=_0`
  body {
    *:focus {
        outline: none;
    }

    margin: 0;
    padding: 0;

    h1, h2, h3, h4, span{
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
`;function zx(){return X(B0,{children:[S(Fx,{}),S(bx,{})]})}Sl.createRoot(document.getElementById("root")).render(S(tt.StrictMode,{children:S(zx,{})}));
