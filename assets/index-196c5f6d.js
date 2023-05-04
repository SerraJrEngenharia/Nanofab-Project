function Xh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function qh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zo={},em={get exports(){return zo},set exports(e){zo=e}},pa={},P={},tm={get exports(){return P},set exports(e){P=e}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=Symbol.for("react.element"),nm=Symbol.for("react.portal"),rm=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),lm=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),um=Symbol.for("react.suspense"),dm=Symbol.for("react.memo"),cm=Symbol.for("react.lazy"),Xu=Symbol.iterator;function fm(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var of={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},af=Object.assign,lf={};function jr(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||of}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sf(){}sf.prototype=jr.prototype;function Gs(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||of}var Ws=Gs.prototype=new sf;Ws.constructor=Gs;af(Ws,jr.prototype);Ws.isPureReactComponent=!0;var qu=Array.isArray,uf=Object.prototype.hasOwnProperty,Qs={current:null},df={key:!0,ref:!0,__self:!0,__source:!0};function cf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)uf.call(t,r)&&!df.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ji,type:e,key:o,ref:a,props:i,_owner:Qs.current}}function pm(e,t){return{$$typeof:ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ys(e){return typeof e=="object"&&e!==null&&e.$$typeof===ji}function hm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ed=/\/+/g;function Qa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hm(""+e.key):t.toString(36)}function So(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ji:case nm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Qa(a,0):r,qu(i)?(n="",e!=null&&(n=e.replace(ed,"$&/")+"/"),So(i,t,n,"",function(d){return d})):i!=null&&(Ys(i)&&(i=pm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ed,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",qu(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Qa(o,l);a+=So(o,t,n,u,i)}else if(u=fm(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Qa(o,l++),a+=So(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Yi(e,t,n){if(e==null)return e;var r=[],i=0;return So(e,r,"","",function(o){return t.call(n,o,i++)}),r}function mm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},ko={transition:null},gm={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:ko,ReactCurrentOwner:Qs};re.Children={map:Yi,forEach:function(e,t,n){Yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yi(e,function(){t++}),t},toArray:function(e){return Yi(e,function(t){return t})||[]},only:function(e){if(!Ys(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=jr;re.Fragment=rm;re.Profiler=om;re.PureComponent=Gs;re.StrictMode=im;re.Suspense=um;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=af({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Qs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)uf.call(t,u)&&!df.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ji,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:lm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:am,_context:e},e.Consumer=e};re.createElement=cf;re.createFactory=function(e){var t=cf.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:sm,render:e}};re.isValidElement=Ys;re.lazy=function(e){return{$$typeof:cm,_payload:{_status:-1,_result:e},_init:mm}};re.memo=function(e,t){return{$$typeof:dm,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return rt.current.useCallback(e,t)};re.useContext=function(e){return rt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};re.useEffect=function(e,t){return rt.current.useEffect(e,t)};re.useId=function(){return rt.current.useId()};re.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return rt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};re.useRef=function(e){return rt.current.useRef(e)};re.useState=function(e){return rt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return rt.current.useTransition()};re.version="18.2.0";(function(e){e.exports=re})(tm);const tt=qh(P),Bl=Xh({__proto__:null,default:tt},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=P,xm=Symbol.for("react.element"),ym=Symbol.for("react.fragment"),wm=Object.prototype.hasOwnProperty,Sm=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function ff(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)wm.call(t,r)&&!km.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xm,type:e,key:o,ref:a,props:i,_owner:Sm.current}}pa.Fragment=ym;pa.jsx=ff;pa.jsxs=ff;(function(e){e.exports=pa})(em);const c=zo.jsx,b=zo.jsxs;var Hl={},Vl={},Em={get exports(){return Vl},set exports(e){Vl=e}},gt={},Jl={},Cm={get exports(){return Jl},set exports(e){Jl=e}},pf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,G){var B=M.length;M.push(G);e:for(;0<B;){var ae=B-1>>>1,I=M[ae];if(0<i(I,G))M[ae]=G,M[B]=I,B=ae;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var G=M[0],B=M.pop();if(B!==G){M[0]=B;e:for(var ae=0,I=M.length,F=I>>>1;ae<F;){var _=2*(ae+1)-1,Y=M[_],C=_+1,te=M[C];if(0>i(Y,B))C<I&&0>i(te,Y)?(M[ae]=te,M[C]=B,ae=C):(M[ae]=Y,M[_]=B,ae=_);else if(C<I&&0>i(te,B))M[ae]=te,M[C]=B,ae=C;else break e}}return G}function i(M,G){var B=M.sortIndex-G.sortIndex;return B!==0?B:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],h=1,g=null,y=3,w=!1,E=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=M)r(d),G.sortIndex=G.expirationTime,t(u,G);else break;G=n(d)}}function k(M){if(S=!1,m(M),!E)if(n(u)!==null)E=!0,ct($);else{var G=n(d);G!==null&&Ve(k,G.startTime-M)}}function $(M,G){E=!1,S&&(S=!1,p(O),O=-1),w=!0;var B=y;try{for(m(G),g=n(u);g!==null&&(!(g.expirationTime>G)||M&&!xe());){var ae=g.callback;if(typeof ae=="function"){g.callback=null,y=g.priorityLevel;var I=ae(g.expirationTime<=G);G=e.unstable_now(),typeof I=="function"?g.callback=I:g===n(u)&&r(u),m(G)}else r(u);g=n(u)}if(g!==null)var F=!0;else{var _=n(d);_!==null&&Ve(k,_.startTime-G),F=!1}return F}finally{g=null,y=B,w=!1}}var N=!1,T=null,O=-1,U=5,J=-1;function xe(){return!(e.unstable_now()-J<U)}function ye(){if(T!==null){var M=e.unstable_now();J=M;var G=!0;try{G=T(!0,M)}finally{G?we():(N=!1,T=null)}}else N=!1}var we;if(typeof f=="function")we=function(){f(ye)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,me=be.port2;be.port1.onmessage=ye,we=function(){me.postMessage(null)}}else we=function(){v(ye,0)};function ct(M){T=M,N||(N=!0,we())}function Ve(M,G){O=v(function(){M(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){E||w||(E=!0,ct($))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(M){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var B=y;y=G;try{return M()}finally{y=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var B=y;y=M;try{return G()}finally{y=B}},e.unstable_scheduleCallback=function(M,G,B){var ae=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ae+B:ae):B=ae,M){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=B+I,M={id:h++,callback:G,priorityLevel:M,startTime:B,expirationTime:I,sortIndex:-1},B>ae?(M.sortIndex=B,t(d,M),n(u)===null&&M===n(d)&&(S?(p(O),O=-1):S=!0,Ve(k,B-ae))):(M.sortIndex=I,t(u,M),E||w||(E=!0,ct($))),M},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(M){var G=y;return function(){var B=y;y=G;try{return M.apply(this,arguments)}finally{y=B}}}})(pf);(function(e){e.exports=pf})(Cm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=P,mt=Jl;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mf=new Set,wi={};function er(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(wi[e]=t,e=0;e<t.length;e++)mf.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Am=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,td={},nd={};function $m(e){return Gl.call(nd,e)?!0:Gl.call(td,e)?!1:Am.test(e)?nd[e]=!0:(td[e]=!0,!1)}function Rm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bm(e,t,n,r){if(t===null||typeof t>"u"||Rm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ks=/[\-:]([a-z])/g;function Zs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ks,Zs);Qe[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ks,Zs);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ks,Zs);Qe[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bm(t,n,i,r)&&(n=null),r||i===null?$m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ki=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),qs=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),gf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),eu=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),tu=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),xf=Symbol.for("react.offscreen"),rd=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=rd&&e[rd]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,Ya;function oi(e){if(Ya===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ya=t&&t[1]||""}return`
`+Ya+e}var Ka=!1;function Za(e,t){if(!e||Ka)return"";Ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Ka=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oi(e):""}function Pm(e){switch(e.tag){case 5:return oi(e.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return e=Za(e.type,!1),e;case 11:return e=Za(e.type.render,!1),e;case 1:return e=Za(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case sr:return"Portal";case Wl:return"Profiler";case qs:return"StrictMode";case Ql:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vf:return(e.displayName||"Context")+".Consumer";case gf:return(e._context.displayName||"Context")+".Provider";case eu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tu:return t=e.displayName||null,t!==null?t:Kl(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Kl(e(t))}catch{}}return null}function Dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(t);case 8:return t===qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Om(e){var t=yf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zi(e){e._valueTracker||(e._valueTracker=Om(e))}function wf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function id(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sf(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function Xl(e,t){Sf(e,t);var n=Dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,Dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function od(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||_o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function es(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ad(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(ai(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dn(n)}}function kf(e,t){var n=Dn(t.value),r=Dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ld(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ef(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ts(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ef(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,Cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lm=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(e){Lm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ui[t]=ui[e]})});function Af(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ui.hasOwnProperty(e)&&ui[e]?(""+t).trim():t+"px"}function $f(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Af(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Nm=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ns(e,t){if(t){if(Nm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function rs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var is=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,Cr=null,Ar=null;function sd(e){if(e=Hi(e)){if(typeof os!="function")throw Error(L(280));var t=e.stateNode;t&&(t=xa(t),os(e.stateNode,e.type,t))}}function Rf(e){Cr?Ar?Ar.push(e):Ar=[e]:Cr=e}function bf(){if(Cr){var e=Cr,t=Ar;if(Ar=Cr=null,sd(e),t)for(e=0;e<t.length;e++)sd(t[e])}}function Pf(e,t){return e(t)}function Df(){}var Xa=!1;function Of(e,t,n){if(Xa)return e(t,n);Xa=!0;try{return Pf(e,t,n)}finally{Xa=!1,(Cr!==null||Ar!==null)&&(Df(),bf())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=xa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var as=!1;if(rn)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){as=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{as=!1}function Tm(e,t,n,r,i,o,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var di=!1,Fo=null,jo=!1,ls=null,Mm={onError:function(e){di=!0,Fo=e}};function Im(e,t,n,r,i,o,a,l,u){di=!1,Fo=null,Tm.apply(Mm,arguments)}function zm(e,t,n,r,i,o,a,l,u){if(Im.apply(this,arguments),di){if(di){var d=Fo;di=!1,Fo=null}else throw Error(L(198));jo||(jo=!0,ls=d)}}function tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ud(e){if(tr(e)!==e)throw Error(L(188))}function _m(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ud(i),e;if(o===r)return ud(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Nf(e){return e=_m(e),e!==null?Tf(e):null}function Tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tf(e);if(t!==null)return t;e=e.sibling}return null}var Mf=mt.unstable_scheduleCallback,dd=mt.unstable_cancelCallback,Fm=mt.unstable_shouldYield,jm=mt.unstable_requestPaint,Oe=mt.unstable_now,Um=mt.unstable_getCurrentPriorityLevel,ru=mt.unstable_ImmediatePriority,If=mt.unstable_UserBlockingPriority,Uo=mt.unstable_NormalPriority,Bm=mt.unstable_LowPriority,zf=mt.unstable_IdlePriority,ha=null,Jt=null;function Hm(e){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(ha,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Gm,Vm=Math.log,Jm=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(Vm(e)/Jm|0)|0}var qi=64,eo=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=li(l):(o&=a,o!==0&&(r=li(o)))}else a=n&~i,a!==0?r=li(a):o!==0&&(r=li(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Wm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Tt(o),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=Wm(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _f(){var e=qi;return qi<<=1,!(qi&4194240)&&(qi=64),e}function qa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Ym(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function iu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function Ff(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jf,ou,Uf,Bf,Hf,us=!1,to=[],wn=null,Sn=null,kn=null,Ei=new Map,Ci=new Map,gn=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(t.pointerId)}}function Kr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hi(t),t!==null&&ou(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zm(e,t,n,r,i){switch(t){case"focusin":return wn=Kr(wn,e,t,n,r,i),!0;case"dragenter":return Sn=Kr(Sn,e,t,n,r,i),!0;case"mouseover":return kn=Kr(kn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ei.set(o,Kr(Ei.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ci.set(o,Kr(Ci.get(o)||null,e,t,n,r,i)),!0}return!1}function Vf(e){var t=Un(e.target);if(t!==null){var n=tr(t);if(n!==null){if(t=n.tag,t===13){if(t=Lf(n),t!==null){e.blockedOn=t,Hf(e.priority,function(){Uf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);is=r,n.target.dispatchEvent(r),is=null}else return t=Hi(n),t!==null&&ou(t),e.blockedOn=n,!1;t.shift()}return!0}function fd(e,t,n){Eo(e)&&n.delete(t)}function Xm(){us=!1,wn!==null&&Eo(wn)&&(wn=null),Sn!==null&&Eo(Sn)&&(Sn=null),kn!==null&&Eo(kn)&&(kn=null),Ei.forEach(fd),Ci.forEach(fd)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,us||(us=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Xm)))}function Ai(e){function t(i){return Zr(i,e)}if(0<to.length){Zr(to[0],e);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&Zr(wn,e),Sn!==null&&Zr(Sn,e),kn!==null&&Zr(kn,e),Ei.forEach(t),Ci.forEach(t),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)Vf(n),n.blockedOn===null&&gn.shift()}var $r=un.ReactCurrentBatchConfig,Ho=!0;function qm(e,t,n,r){var i=ce,o=$r.transition;$r.transition=null;try{ce=1,au(e,t,n,r)}finally{ce=i,$r.transition=o}}function eg(e,t,n,r){var i=ce,o=$r.transition;$r.transition=null;try{ce=4,au(e,t,n,r)}finally{ce=i,$r.transition=o}}function au(e,t,n,r){if(Ho){var i=ds(e,t,n,r);if(i===null)ul(e,t,r,Vo,n),cd(e,r);else if(Zm(i,e,t,n,r))r.stopPropagation();else if(cd(e,r),t&4&&-1<Km.indexOf(e)){for(;i!==null;){var o=Hi(i);if(o!==null&&jf(o),o=ds(e,t,n,r),o===null&&ul(e,t,r,Vo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ul(e,t,r,null,n)}}var Vo=null;function ds(e,t,n,r){if(Vo=null,e=nu(r),e=Un(e),e!==null)if(t=tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function Jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case ru:return 1;case If:return 4;case Uo:case Bm:return 16;case zf:return 536870912;default:return 16}default:return 16}}var xn=null,lu=null,Co=null;function Gf(){if(Co)return Co;var e,t=lu,n=t.length,r,i="value"in xn?xn.value:xn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Co=i.slice(e,1<r?1-r:void 0)}function Ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function pd(){return!1}function vt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?no:pd,this.isPropagationStopped=pd,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=vt(Ur),Bi=$e({},Ur,{view:0,detail:0}),tg=vt(Bi),el,tl,Xr,ma=$e({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(el=e.screenX-Xr.screenX,tl=e.screenY-Xr.screenY):tl=el=0,Xr=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),hd=vt(ma),ng=$e({},ma,{dataTransfer:0}),rg=vt(ng),ig=$e({},Bi,{relatedTarget:0}),nl=vt(ig),og=$e({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=vt(og),lg=$e({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=vt(lg),ug=$e({},Ur,{data:0}),md=vt(ug),dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function uu(){return pg}var hg=$e({},Bi,{key:function(e){if(e.key){var t=dg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?Ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=vt(hg),gg=$e({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=vt(gg),vg=$e({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),xg=vt(vg),yg=$e({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),wg=vt(yg),Sg=$e({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=vt(Sg),Eg=[9,13,27,32],du=rn&&"CompositionEvent"in window,ci=null;rn&&"documentMode"in document&&(ci=document.documentMode);var Cg=rn&&"TextEvent"in window&&!ci,Wf=rn&&(!du||ci&&8<ci&&11>=ci),vd=String.fromCharCode(32),xd=!1;function Qf(e,t){switch(e){case"keyup":return Eg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function Ag(e,t){switch(e){case"compositionend":return Yf(t);case"keypress":return t.which!==32?null:(xd=!0,vd);case"textInput":return e=t.data,e===vd&&xd?null:e;default:return null}}function $g(e,t){if(dr)return e==="compositionend"||!du&&Qf(e,t)?(e=Gf(),Co=lu=xn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wf&&t.locale!=="ko"?null:t.data;default:return null}}var Rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rg[e.type]:t==="textarea"}function Kf(e,t,n,r){Rf(r),t=Jo(t,"onChange"),0<t.length&&(n=new su("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fi=null,$i=null;function bg(e){lp(e,0)}function ga(e){var t=pr(e);if(wf(t))return e}function Pg(e,t){if(e==="change")return t}var Zf=!1;if(rn){var rl;if(rn){var il="oninput"in document;if(!il){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),il=typeof wd.oninput=="function"}rl=il}else rl=!1;Zf=rl&&(!document.documentMode||9<document.documentMode)}function Sd(){fi&&(fi.detachEvent("onpropertychange",Xf),$i=fi=null)}function Xf(e){if(e.propertyName==="value"&&ga($i)){var t=[];Kf(t,$i,e,nu(e)),Of(bg,t)}}function Dg(e,t,n){e==="focusin"?(Sd(),fi=t,$i=n,fi.attachEvent("onpropertychange",Xf)):e==="focusout"&&Sd()}function Og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga($i)}function Lg(e,t){if(e==="click")return ga(t)}function Ng(e,t){if(e==="input"||e==="change")return ga(t)}function Tg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:Tg;function Ri(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gl.call(t,i)||!It(e[i],t[i]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ep(){for(var e=window,t=_o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_o(e.document)}return t}function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mg(e){var t=ep(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qf(n.ownerDocument.documentElement,n)){if(r!==null&&cu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ed(n,o);var a=Ed(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ig=rn&&"documentMode"in document&&11>=document.documentMode,cr=null,cs=null,pi=null,fs=!1;function Cd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fs||cr==null||cr!==_o(r)||(r=cr,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&Ri(pi,r)||(pi=r,r=Jo(cs,"onSelect"),0<r.length&&(t=new su("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},ol={},tp={};rn&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function va(e){if(ol[e])return ol[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tp)return ol[e]=t[n];return e}var np=va("animationend"),rp=va("animationiteration"),ip=va("animationstart"),op=va("transitionend"),ap=new Map,Ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){ap.set(e,t),er(t,[e])}for(var al=0;al<Ad.length;al++){var ll=Ad[al],zg=ll.toLowerCase(),_g=ll[0].toUpperCase()+ll.slice(1);Ln(zg,"on"+_g)}Ln(np,"onAnimationEnd");Ln(rp,"onAnimationIteration");Ln(ip,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(op,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function $d(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zm(r,t,void 0,e),e.currentTarget=null}function lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;$d(i,l,d),o=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;$d(i,l,d),o=u}}}if(jo)throw e=ls,jo=!1,ls=null,e}function ge(e,t){var n=t[vs];n===void 0&&(n=t[vs]=new Set);var r=e+"__bubble";n.has(r)||(sp(t,e,2,!1),n.add(r))}function sl(e,t,n){var r=0;t&&(r|=4),sp(n,e,r,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function bi(e){if(!e[io]){e[io]=!0,mf.forEach(function(n){n!=="selectionchange"&&(Fg.has(n)||sl(n,!1,e),sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,sl("selectionchange",!1,t))}}function sp(e,t,n,r){switch(Jf(t)){case 1:var i=qm;break;case 4:i=eg;break;default:i=au}n=i.bind(null,t,n,e),i=void 0,!as||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ul(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Un(l),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Of(function(){var d=o,h=nu(n),g=[];e:{var y=ap.get(e);if(y!==void 0){var w=su,E=e;switch(e){case"keypress":if(Ao(n)===0)break e;case"keydown":case"keyup":w=mg;break;case"focusin":E="focus",w=nl;break;case"focusout":E="blur",w=nl;break;case"beforeblur":case"afterblur":w=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=xg;break;case np:case rp:case ip:w=ag;break;case op:w=wg;break;case"scroll":w=tg;break;case"wheel":w=kg;break;case"copy":case"cut":case"paste":w=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=gd}var S=(t&4)!==0,v=!S&&e==="scroll",p=S?y!==null?y+"Capture":null:y;S=[];for(var f=d,m;f!==null;){m=f;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=ki(f,p),k!=null&&S.push(Pi(f,k,m)))),v)break;f=f.return}0<S.length&&(y=new w(y,E,null,n,h),g.push({event:y,listeners:S}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==is&&(E=n.relatedTarget||n.fromElement)&&(Un(E)||E[on]))break e;if((w||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,w?(E=n.relatedTarget||n.toElement,w=d,E=E?Un(E):null,E!==null&&(v=tr(E),E!==v||E.tag!==5&&E.tag!==6)&&(E=null)):(w=null,E=d),w!==E)){if(S=hd,k="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=gd,k="onPointerLeave",p="onPointerEnter",f="pointer"),v=w==null?y:pr(w),m=E==null?y:pr(E),y=new S(k,f+"leave",w,n,h),y.target=v,y.relatedTarget=m,k=null,Un(h)===d&&(S=new S(p,f+"enter",E,n,h),S.target=m,S.relatedTarget=v,k=S),v=k,w&&E)t:{for(S=w,p=E,f=0,m=S;m;m=ir(m))f++;for(m=0,k=p;k;k=ir(k))m++;for(;0<f-m;)S=ir(S),f--;for(;0<m-f;)p=ir(p),m--;for(;f--;){if(S===p||p!==null&&S===p.alternate)break t;S=ir(S),p=ir(p)}S=null}else S=null;w!==null&&Rd(g,y,w,S,!1),E!==null&&v!==null&&Rd(g,v,E,S,!0)}}e:{if(y=d?pr(d):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var $=Pg;else if(yd(y))if(Zf)$=Ng;else{$=Og;var N=Dg}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&($=Lg);if($&&($=$(e,d))){Kf(g,$,n,h);break e}N&&N(e,y,d),e==="focusout"&&(N=y._wrapperState)&&N.controlled&&y.type==="number"&&ql(y,"number",y.value)}switch(N=d?pr(d):window,e){case"focusin":(yd(N)||N.contentEditable==="true")&&(cr=N,cs=d,pi=null);break;case"focusout":pi=cs=cr=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":fs=!1,Cd(g,n,h);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":Cd(g,n,h)}var T;if(du)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else dr?Qf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Wf&&n.locale!=="ko"&&(dr||O!=="onCompositionStart"?O==="onCompositionEnd"&&dr&&(T=Gf()):(xn=h,lu="value"in xn?xn.value:xn.textContent,dr=!0)),N=Jo(d,O),0<N.length&&(O=new md(O,e,null,n,h),g.push({event:O,listeners:N}),T?O.data=T:(T=Yf(n),T!==null&&(O.data=T)))),(T=Cg?Ag(e,n):$g(e,n))&&(d=Jo(d,"onBeforeInput"),0<d.length&&(h=new md("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=T))}lp(g,t)})}function Pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ki(e,n),o!=null&&r.unshift(Pi(e,o,i)),o=ki(e,t),o!=null&&r.push(Pi(e,o,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=ki(n,o),u!=null&&a.unshift(Pi(n,u,l))):i||(u=ki(n,o),u!=null&&a.push(Pi(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var jg=/\r\n?/g,Ug=/\u0000|\uFFFD/g;function bd(e){return(typeof e=="string"?e:""+e).replace(jg,`
`).replace(Ug,"")}function oo(e,t,n){if(t=bd(t),bd(e)!==t&&n)throw Error(L(425))}function Go(){}var ps=null,hs=null;function ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(e){return Pd.resolve(null).then(e).catch(Vg)}:gs;function Vg(e){setTimeout(function(){throw e})}function dl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ai(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ai(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Br,Di="__reactProps$"+Br,on="__reactContainer$"+Br,vs="__reactEvents$"+Br,Jg="__reactListeners$"+Br,Gg="__reactHandles$"+Br;function Un(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[on]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dd(e);e!==null;){if(n=e[Vt])return n;e=Dd(e)}return t}e=n,n=e.parentNode}return null}function Hi(e){return e=e[Vt]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function xa(e){return e[Di]||null}var xs=[],hr=-1;function Nn(e){return{current:e}}function ve(e){0>hr||(e.current=xs[hr],xs[hr]=null,hr--)}function he(e,t){hr++,xs[hr]=e.current,e.current=t}var On={},qe=Nn(On),st=Nn(!1),Wn=On;function Or(e,t){var n=e.type.contextTypes;if(!n)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function Wo(){ve(st),ve(qe)}function Od(e,t,n){if(qe.current!==On)throw Error(L(168));he(qe,t),he(st,n)}function up(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,Dm(e)||"Unknown",i));return $e({},n,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,Wn=qe.current,he(qe,e),he(st,st.current),!0}function Ld(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=up(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,ve(st),ve(qe),he(qe,e)):ve(st),he(st,n)}var Xt=null,ya=!1,cl=!1;function dp(e){Xt===null?Xt=[e]:Xt.push(e)}function Wg(e){ya=!0,dp(e)}function Tn(){if(!cl&&Xt!==null){cl=!0;var e=0,t=ce;try{var n=Xt;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xt=null,ya=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(e+1)),Mf(ru,Tn),i}finally{ce=t,cl=!1}}return null}var mr=[],gr=0,Yo=null,Ko=0,yt=[],wt=0,Qn=null,qt=1,en="";function Fn(e,t){mr[gr++]=Ko,mr[gr++]=Yo,Yo=e,Ko=t}function cp(e,t,n){yt[wt++]=qt,yt[wt++]=en,yt[wt++]=Qn,Qn=e;var r=qt;e=en;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var o=32-Tt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,qt=1<<32-Tt(t)+i|n<<i|r,en=o+e}else qt=1<<o|n<<i|r,en=e}function fu(e){e.return!==null&&(Fn(e,1),cp(e,1,0))}function pu(e){for(;e===Yo;)Yo=mr[--gr],mr[gr]=null,Ko=mr[--gr],mr[gr]=null;for(;e===Qn;)Qn=yt[--wt],yt[wt]=null,en=yt[--wt],yt[wt]=null,qt=yt[--wt],yt[wt]=null}var ht=null,pt=null,ke=!1,Lt=null;function fp(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:qt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ws(e){if(ke){var t=pt;if(t){var n=t;if(!Nd(e,t)){if(ys(e))throw Error(L(418));t=En(n.nextSibling);var r=ht;t&&Nd(e,t)?fp(r,n):(e.flags=e.flags&-4097|2,ke=!1,ht=e)}}else{if(ys(e))throw Error(L(418));e.flags=e.flags&-4097|2,ke=!1,ht=e}}}function Td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function ao(e){if(e!==ht)return!1;if(!ke)return Td(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ms(e.type,e.memoizedProps)),t&&(t=pt)){if(ys(e))throw pp(),Error(L(418));for(;t;)fp(e,t),t=En(t.nextSibling)}if(Td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?En(e.stateNode.nextSibling):null;return!0}function pp(){for(var e=pt;e;)e=En(e.nextSibling)}function Lr(){pt=ht=null,ke=!1}function hu(e){Lt===null?Lt=[e]:Lt.push(e)}var Qg=un.ReactCurrentBatchConfig;function Dt(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zo=Nn(null),Xo=null,vr=null,mu=null;function gu(){mu=vr=Xo=null}function vu(e){var t=Zo.current;ve(Zo),e._currentValue=t}function Ss(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){Xo=e,mu=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(mu!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(Xo===null)throw Error(L(308));vr=e,Xo.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Bn=null;function xu(e){Bn===null?Bn=[e]:Bn.push(e)}function hp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xu(t)):(n.next=i.next,i.next=n),t.interleaved=n,an(e,r)}function an(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,an(e,n)}return i=r.interleaved,i===null?(t.next=t,xu(r)):(t.next=i.next,i.next=t),r.interleaved=t,an(e,n)}function $o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,iu(e,n)}}function Md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qo(e,t,n,r){var i=e.updateQueue;mn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;a=0,h=d=u=null,l=o;do{var y=l.lane,w=l.eventTime;if((r&y)===y){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=e,S=l;switch(y=t,w=n,S.tag){case 1:if(E=S.payload,typeof E=="function"){g=E.call(w,g,y);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=S.payload,y=typeof E=="function"?E.call(w,g,y):E,y==null)break e;g=$e({},g,y);break e;case 2:mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else w={eventTime:w,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=w,u=g):h=h.next=w,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(h===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Kn|=a,e.lanes=a,e.memoizedState=g}}function Id(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var gp=new hf.Component().refs;function ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wa={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=$n(e),o=tn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(Mt(t,e,i,r),$o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=$n(e),o=tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(Mt(t,e,i,r),$o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=$n(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(Mt(t,e,r,n),$o(t,e,r))}};function zd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ri(n,r)||!Ri(i,o):!0}function vp(e,t,n){var r=!1,i=On,o=t.contextType;return typeof o=="object"&&o!==null?o=Et(o):(i=ut(t)?Wn:qe.current,r=t.contextTypes,o=(r=r!=null)?Or(e,i):On),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function _d(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wa.enqueueReplaceState(t,t.state,null)}function Es(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gp,yu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Et(o):(o=ut(t)?Wn:qe.current,i.context=Or(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ks(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wa.enqueueReplaceState(i,i.state,null),qo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===gp&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fd(e){var t=e._init;return t(e._payload)}function xp(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Rn(p,f),p.index=0,p.sibling=null,p}function o(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,k){return f===null||f.tag!==6?(f=xl(m,p.mode,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function u(p,f,m,k){var $=m.type;return $===ur?h(p,f,m.props.children,k,m.key):f!==null&&(f.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===hn&&Fd($)===f.type)?(k=i(f,m.props),k.ref=qr(p,f,m),k.return=p,k):(k=Lo(m.type,m.key,m.props,null,p.mode,k),k.ref=qr(p,f,m),k.return=p,k)}function d(p,f,m,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=yl(m,p.mode,k),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function h(p,f,m,k,$){return f===null||f.tag!==7?(f=Gn(m,p.mode,k,$),f.return=p,f):(f=i(f,m),f.return=p,f)}function g(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=xl(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ki:return m=Lo(f.type,f.key,f.props,null,p.mode,m),m.ref=qr(p,null,f),m.return=p,m;case sr:return f=yl(f,p.mode,m),f.return=p,f;case hn:var k=f._init;return g(p,k(f._payload),m)}if(ai(f)||Qr(f))return f=Gn(f,p.mode,m,null),f.return=p,f;lo(p,f)}return null}function y(p,f,m,k){var $=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return $!==null?null:l(p,f,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ki:return m.key===$?u(p,f,m,k):null;case sr:return m.key===$?d(p,f,m,k):null;case hn:return $=m._init,y(p,f,$(m._payload),k)}if(ai(m)||Qr(m))return $!==null?null:h(p,f,m,k,null);lo(p,m)}return null}function w(p,f,m,k,$){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,l(f,p,""+k,$);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ki:return p=p.get(k.key===null?m:k.key)||null,u(f,p,k,$);case sr:return p=p.get(k.key===null?m:k.key)||null,d(f,p,k,$);case hn:var N=k._init;return w(p,f,m,N(k._payload),$)}if(ai(k)||Qr(k))return p=p.get(m)||null,h(f,p,k,$,null);lo(f,k)}return null}function E(p,f,m,k){for(var $=null,N=null,T=f,O=f=0,U=null;T!==null&&O<m.length;O++){T.index>O?(U=T,T=null):U=T.sibling;var J=y(p,T,m[O],k);if(J===null){T===null&&(T=U);break}e&&T&&J.alternate===null&&t(p,T),f=o(J,f,O),N===null?$=J:N.sibling=J,N=J,T=U}if(O===m.length)return n(p,T),ke&&Fn(p,O),$;if(T===null){for(;O<m.length;O++)T=g(p,m[O],k),T!==null&&(f=o(T,f,O),N===null?$=T:N.sibling=T,N=T);return ke&&Fn(p,O),$}for(T=r(p,T);O<m.length;O++)U=w(T,p,O,m[O],k),U!==null&&(e&&U.alternate!==null&&T.delete(U.key===null?O:U.key),f=o(U,f,O),N===null?$=U:N.sibling=U,N=U);return e&&T.forEach(function(xe){return t(p,xe)}),ke&&Fn(p,O),$}function S(p,f,m,k){var $=Qr(m);if(typeof $!="function")throw Error(L(150));if(m=$.call(m),m==null)throw Error(L(151));for(var N=$=null,T=f,O=f=0,U=null,J=m.next();T!==null&&!J.done;O++,J=m.next()){T.index>O?(U=T,T=null):U=T.sibling;var xe=y(p,T,J.value,k);if(xe===null){T===null&&(T=U);break}e&&T&&xe.alternate===null&&t(p,T),f=o(xe,f,O),N===null?$=xe:N.sibling=xe,N=xe,T=U}if(J.done)return n(p,T),ke&&Fn(p,O),$;if(T===null){for(;!J.done;O++,J=m.next())J=g(p,J.value,k),J!==null&&(f=o(J,f,O),N===null?$=J:N.sibling=J,N=J);return ke&&Fn(p,O),$}for(T=r(p,T);!J.done;O++,J=m.next())J=w(T,p,O,J.value,k),J!==null&&(e&&J.alternate!==null&&T.delete(J.key===null?O:J.key),f=o(J,f,O),N===null?$=J:N.sibling=J,N=J);return e&&T.forEach(function(ye){return t(p,ye)}),ke&&Fn(p,O),$}function v(p,f,m,k){if(typeof m=="object"&&m!==null&&m.type===ur&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ki:e:{for(var $=m.key,N=f;N!==null;){if(N.key===$){if($=m.type,$===ur){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===hn&&Fd($)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=qr(p,N,m),f.return=p,p=f;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===ur?(f=Gn(m.props.children,p.mode,k,m.key),f.return=p,p=f):(k=Lo(m.type,m.key,m.props,null,p.mode,k),k.ref=qr(p,f,m),k.return=p,p=k)}return a(p);case sr:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=yl(m,p.mode,k),f.return=p,p=f}return a(p);case hn:return N=m._init,v(p,f,N(m._payload),k)}if(ai(m))return E(p,f,m,k);if(Qr(m))return S(p,f,m,k);lo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=xl(m,p.mode,k),f.return=p,p=f),a(p)):n(p,f)}return v}var Nr=xp(!0),yp=xp(!1),Vi={},Gt=Nn(Vi),Oi=Nn(Vi),Li=Nn(Vi);function Hn(e){if(e===Vi)throw Error(L(174));return e}function wu(e,t){switch(he(Li,t),he(Oi,e),he(Gt,Vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ts(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ts(t,e)}ve(Gt),he(Gt,t)}function Tr(){ve(Gt),ve(Oi),ve(Li)}function wp(e){Hn(Li.current);var t=Hn(Gt.current),n=ts(t,e.type);t!==n&&(he(Oi,e),he(Gt,n))}function Su(e){Oi.current===e&&(ve(Gt),ve(Oi))}var Ce=Nn(0);function ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fl=[];function ku(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var Ro=un.ReactCurrentDispatcher,pl=un.ReactCurrentBatchConfig,Yn=0,Ae=null,ze=null,Ue=null,ta=!1,hi=!1,Ni=0,Yg=0;function Ke(){throw Error(L(321))}function Eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function Cu(e,t,n,r,i,o){if(Yn=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?qg:e0,e=n(r,i),hi){o=0;do{if(hi=!1,Ni=0,25<=o)throw Error(L(301));o+=1,Ue=ze=null,t.updateQueue=null,Ro.current=t0,e=n(r,i)}while(hi)}if(Ro.current=na,t=ze!==null&&ze.next!==null,Yn=0,Ue=ze=Ae=null,ta=!1,t)throw Error(L(300));return e}function Au(){var e=Ni!==0;return Ni=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ae.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Ct(){if(ze===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ue===null?Ae.memoizedState:Ue.next;if(t!==null)Ue=t,ze=e;else{if(e===null)throw Error(L(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ue===null?Ae.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ti(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,u=null,d=o;do{var h=d.lane;if((Yn&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,Ae.lanes|=h,Kn|=h}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=l,It(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,Kn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ml(e){var t=Ct(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);It(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Sp(){}function kp(e,t){var n=Ae,r=Ct(),i=t(),o=!It(r.memoizedState,i);if(o&&(r.memoizedState=i,lt=!0),r=r.queue,$u(Ap.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Mi(9,Cp.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(L(349));Yn&30||Ep(n,t,i)}return i}function Ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cp(e,t,n,r){t.value=n,t.getSnapshot=r,$p(t)&&Rp(e)}function Ap(e,t,n){return n(function(){$p(t)&&Rp(e)})}function $p(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Rp(e){var t=an(e,1);t!==null&&Mt(t,e,1,-1)}function jd(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Xg.bind(null,Ae,e),[t.memoizedState,e]}function Mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bp(){return Ct().memoizedState}function bo(e,t,n,r){var i=Bt();Ae.flags|=e,i.memoizedState=Mi(1|t,n,void 0,r===void 0?null:r)}function Sa(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(ze!==null){var a=ze.memoizedState;if(o=a.destroy,r!==null&&Eu(r,a.deps)){i.memoizedState=Mi(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Mi(1|t,n,o,r)}function Ud(e,t){return bo(8390656,8,e,t)}function $u(e,t){return Sa(2048,8,e,t)}function Pp(e,t){return Sa(4,2,e,t)}function Dp(e,t){return Sa(4,4,e,t)}function Op(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lp(e,t,n){return n=n!=null?n.concat([e]):null,Sa(4,4,Op.bind(null,t,e),n)}function Ru(){}function Np(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tp(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mp(e,t,n){return Yn&21?(It(n,t)||(n=_f(),Ae.lanes|=n,Kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function Kg(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{ce=n,pl.transition=r}}function Ip(){return Ct().memoizedState}function Zg(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zp(e))_p(t,n);else if(n=hp(e,t,n,r),n!==null){var i=nt();Mt(n,e,r,i),Fp(n,t,r)}}function Xg(e,t,n){var r=$n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zp(e))_p(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,a)){var u=t.interleaved;u===null?(i.next=i,xu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=hp(e,t,i,r),n!==null&&(i=nt(),Mt(n,e,r,i),Fp(n,t,r))}}function zp(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function _p(e,t){hi=ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,iu(e,n)}}var na={readContext:Et,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},qg={readContext:Et,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Ud,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bo(4194308,4,Op.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return bo(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zg.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:jd,useDebugValue:Ru,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=jd(!1),t=e[0];return e=Kg.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Bt();if(ke){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Be===null)throw Error(L(349));Yn&30||Ep(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ud(Ap.bind(null,r,o,e),[e]),r.flags|=2048,Mi(9,Cp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Bt(),t=Be.identifierPrefix;if(ke){var n=en,r=qt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e0={readContext:Et,useCallback:Np,useContext:Et,useEffect:$u,useImperativeHandle:Lp,useInsertionEffect:Pp,useLayoutEffect:Dp,useMemo:Tp,useReducer:hl,useRef:bp,useState:function(){return hl(Ti)},useDebugValue:Ru,useDeferredValue:function(e){var t=Ct();return Mp(t,ze.memoizedState,e)},useTransition:function(){var e=hl(Ti)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:kp,useId:Ip,unstable_isNewReconciler:!1},t0={readContext:Et,useCallback:Np,useContext:Et,useEffect:$u,useImperativeHandle:Lp,useInsertionEffect:Pp,useLayoutEffect:Dp,useMemo:Tp,useReducer:ml,useRef:bp,useState:function(){return ml(Ti)},useDebugValue:Ru,useDeferredValue:function(e){var t=Ct();return ze===null?t.memoizedState=e:Mp(t,ze.memoizedState,e)},useTransition:function(){var e=ml(Ti)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:kp,useId:Ip,unstable_isNewReconciler:!1};function Mr(e,t){try{var n="",r=t;do n+=Pm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function jp(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ia||(ia=!0,Ts=r),Cs(e,t)},n}function Up(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Cs(e,t),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Bd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=g0.bind(null,e,t,n),t.then(e,e))}function Hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var r0=un.ReactCurrentOwner,lt=!1;function et(e,t,n,r){t.child=e===null?yp(t,null,n,r):Nr(t,e.child,n,r)}function Jd(e,t,n,r,i){n=n.render;var o=t.ref;return Rr(t,i),r=Cu(e,t,n,r,o,i),n=Au(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(ke&&n&&fu(t),t.flags|=1,et(e,t,r,i),t.child)}function Gd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Mu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Bp(e,t,o,r,i)):(e=Lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ri,n(a,r)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Bp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ri(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,ln(e,t,i)}return As(e,t,n,r,i)}function Hp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(yr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(yr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(yr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(yr,ft),ft|=r;return et(e,t,i,n),t.child}function Vp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function As(e,t,n,r,i){var o=ut(n)?Wn:qe.current;return o=Or(t,o),Rr(t,i),n=Cu(e,t,n,r,o,i),r=Au(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(ke&&r&&fu(t),t.flags|=1,et(e,t,n,i),t.child)}function Wd(e,t,n,r,i){if(ut(n)){var o=!0;Qo(t)}else o=!1;if(Rr(t,i),t.stateNode===null)Po(e,t),vp(t,n,r),Es(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Et(d):(d=ut(n)?Wn:qe.current,d=Or(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&_d(t,a,r,d),mn=!1;var y=t.memoizedState;a.state=y,qo(t,r,a,i),u=t.memoizedState,l!==r||y!==u||st.current||mn?(typeof h=="function"&&(ks(t,n,h,r),u=t.memoizedState),(l=mn||zd(t,n,l,r,y,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,mp(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Dt(t.type,l),a.props=d,g=t.pendingProps,y=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Et(u):(u=ut(n)?Wn:qe.current,u=Or(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||y!==u)&&_d(t,a,r,u),mn=!1,y=t.memoizedState,a.state=y,qo(t,r,a,i);var E=t.memoizedState;l!==g||y!==E||st.current||mn?(typeof w=="function"&&(ks(t,n,w,r),E=t.memoizedState),(d=mn||zd(t,n,d,r,y,E,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,E,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,E,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),a.props=r,a.state=E,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return $s(e,t,n,r,o,i)}function $s(e,t,n,r,i,o){Vp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ld(t,n,!1),ln(e,t,o);r=t.stateNode,r0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Nr(t,e.child,null,o),t.child=Nr(t,null,l,o)):et(e,t,l,o),t.memoizedState=r.state,i&&Ld(t,n,!0),t.child}function Jp(e){var t=e.stateNode;t.pendingContext?Od(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Od(e,t.context,!1),wu(e,t.containerInfo)}function Qd(e,t,n,r,i){return Lr(),hu(i),t.flags|=256,et(e,t,n,r),t.child}var Rs={dehydrated:null,treeContext:null,retryLane:0};function bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gp(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Ce,i&1),e===null)return ws(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ca(a,r,0,null),e=Gn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bs(n),t.memoizedState=Rs,e):bu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return i0(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Rn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rn(l,o):(o=Gn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?bs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Rs,r}return o=e.child,e=o.sibling,r=Rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bu(e,t){return t=Ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function so(e,t,n,r){return r!==null&&hu(r),Nr(t,e.child,null,n),e=bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(L(422))),so(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ca({mode:"visible",children:r.children},i,0,null),o=Gn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Nr(t,e.child,null,a),t.child.memoizedState=bs(a),t.memoizedState=Rs,o);if(!(t.mode&1))return so(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(L(419)),r=gl(o,r,void 0),so(e,t,a,r)}if(l=(a&e.childLanes)!==0,lt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,an(e,i),Mt(r,e,i,-1))}return Tu(),r=gl(Error(L(421))),so(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=v0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=En(i.nextSibling),ht=t,ke=!0,Lt=null,e!==null&&(yt[wt++]=qt,yt[wt++]=en,yt[wt++]=Qn,qt=e.id,en=e.overflow,Qn=t),t=bu(t,r.children),t.flags|=4096,t)}function Yd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ss(e.return,t,n)}function vl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Wp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yd(e,n,t);else if(e.tag===19)Yd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ea(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ea(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vl(t,!0,n,null,o);break;case"together":vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o0(e,t,n){switch(t.tag){case 3:Jp(t),Lr();break;case 5:wp(t);break;case 1:ut(t.type)&&Qo(t);break;case 4:wu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Gp(e,t,n):(he(Ce,Ce.current&1),e=ln(e,t,n),e!==null?e.sibling:null);he(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Hp(e,t,n)}return ln(e,t,n)}var Qp,Ps,Yp,Kp;Qp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ps=function(){};Yp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hn(Gt.current);var o=null;switch(n){case"input":i=Zl(e,i),r=Zl(e,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=es(e,i),r=es(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}ns(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(wi.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(wi.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ge("scroll",e),o||l===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Kp=function(e,t,n,r){n!==r&&(t.flags|=4)};function ei(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function a0(e,t,n){var r=t.pendingProps;switch(pu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ut(t.type)&&Wo(),Ze(t),null;case 3:return r=t.stateNode,Tr(),ve(st),ve(qe),ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(zs(Lt),Lt=null))),Ps(e,t),Ze(t),null;case 5:Su(t);var i=Hn(Li.current);if(n=t.type,e!==null&&t.stateNode!=null)Yp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Ze(t),null}if(e=Hn(Gt.current),ao(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Vt]=t,r[Di]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)ge(si[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":id(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":ad(r,o),ge("invalid",r)}ns(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&oo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&oo(r.textContent,l,e),i=["children",""+l]):wi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":Zi(r),od(r,o,!0);break;case"textarea":Zi(r),ld(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ef(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vt]=t,e[Di]=r,Qp(e,t,!1,!1),t.stateNode=e;e:{switch(a=rs(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)ge(si[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":id(e,r),i=Zl(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),ge("invalid",e);break;case"textarea":ad(e,r),i=es(e,r),ge("invalid",e);break;default:i=r}ns(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?$f(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Cf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Si(e,u):typeof u=="number"&&Si(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wi.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ge("scroll",e):u!=null&&Xs(e,o,u,a))}switch(n){case"input":Zi(e),od(e,r,!1);break;case"textarea":Zi(e),ld(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Er(e,!!r.multiple,o,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Kp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Hn(Li.current),Hn(Gt.current),ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&pt!==null&&t.mode&1&&!(t.flags&128))pp(),Lr(),t.flags|=98560,o=!1;else if(o=ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[Vt]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else Lt!==null&&(zs(Lt),Lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?_e===0&&(_e=3):Tu())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Tr(),Ps(e,t),e===null&&bi(t.stateNode.containerInfo),Ze(t),null;case 10:return vu(t.type._context),Ze(t),null;case 17:return ut(t.type)&&Wo(),Ze(t),null;case 19:if(ve(Ce),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ei(o,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ea(e),a!==null){for(t.flags|=128,ei(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>Ir&&(t.flags|=128,r=!0,ei(o,!1),t.lanes=4194304)}else{if(!r)if(e=ea(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ei(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ke)return Ze(t),null}else 2*Oe()-o.renderingStartTime>Ir&&n!==1073741824&&(t.flags|=128,r=!0,ei(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Ce.current,he(Ce,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Nu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function l0(e,t){switch(pu(t),t.tag){case 1:return ut(t.type)&&Wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),ve(st),ve(qe),ku(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Su(t),null;case 13:if(ve(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ce),null;case 4:return Tr(),null;case 10:return vu(t.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var uo=!1,Xe=!1,s0=typeof WeakSet=="function"?WeakSet:Set,j=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function Ds(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Kd=!1;function u0(e,t){if(ps=Ho,e=ep(),cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,h=0,g=e,y=null;t:for(;;){for(var w;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==o||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(w=g.firstChild)!==null;)y=g,g=w;for(;;){if(g===e)break t;if(y===n&&++d===i&&(l=a),y===o&&++h===r&&(u=a),(w=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hs={focusedElem:e,selectionRange:n},Ho=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var S=E.memoizedProps,v=E.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?S:Dt(t.type,S),v);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(k){Re(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return E=Kd,Kd=!1,E}function mi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ds(t,n,o)}i=i.next}while(i!==r)}}function ka(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Os(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zp(e){var t=e.alternate;t!==null&&(e.alternate=null,Zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[Di],delete t[vs],delete t[Jg],delete t[Gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xp(e){return e.tag===5||e.tag===3||e.tag===4}function Zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}function Ns(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ns(e,t,n),e=e.sibling;e!==null;)Ns(e,t,n),e=e.sibling}var Ge=null,Ot=!1;function fn(e,t,n){for(n=n.child;n!==null;)qp(e,t,n),n=n.sibling}function qp(e,t,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(ha,n)}catch{}switch(n.tag){case 5:Xe||xr(n,t);case 6:var r=Ge,i=Ot;Ge=null,fn(e,t,n),Ge=r,Ot=i,Ge!==null&&(Ot?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Ot?(e=Ge,n=n.stateNode,e.nodeType===8?dl(e.parentNode,n):e.nodeType===1&&dl(e,n),Ai(e)):dl(Ge,n.stateNode));break;case 4:r=Ge,i=Ot,Ge=n.stateNode.containerInfo,Ot=!0,fn(e,t,n),Ge=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ds(n,t,a),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Xe&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,t,l)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,fn(e,t,n),Xe=r):fn(e,t,n);break;default:fn(e,t,n)}}function Xd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s0),t.forEach(function(r){var i=x0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Ot=!1;break e;case 3:Ge=l.stateNode.containerInfo,Ot=!0;break e;case 4:Ge=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(Ge===null)throw Error(L(160));qp(o,a,i),Ge=null,Ot=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Re(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eh(t,e),t=t.sibling}function eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),jt(e),r&4){try{mi(3,e,e.return),ka(3,e)}catch(S){Re(e,e.return,S)}try{mi(5,e,e.return)}catch(S){Re(e,e.return,S)}}break;case 1:bt(t,e),jt(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(bt(t,e),jt(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(S){Re(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Sf(i,o),rs(l,a);var d=rs(l,o);for(a=0;a<u.length;a+=2){var h=u[a],g=u[a+1];h==="style"?$f(i,g):h==="dangerouslySetInnerHTML"?Cf(i,g):h==="children"?Si(i,g):Xs(i,h,g,d)}switch(l){case"input":Xl(i,o);break;case"textarea":kf(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Er(i,!!o.multiple,w,!1):y!==!!o.multiple&&(o.defaultValue!=null?Er(i,!!o.multiple,o.defaultValue,!0):Er(i,!!o.multiple,o.multiple?[]:"",!1))}i[Di]=o}catch(S){Re(e,e.return,S)}}break;case 6:if(bt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){Re(e,e.return,S)}}break;case 3:if(bt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ai(t.containerInfo)}catch(S){Re(e,e.return,S)}break;case 4:bt(t,e),jt(e);break;case 13:bt(t,e),jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ou=Oe())),r&4&&Xd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(d=Xe)||h,bt(t,e),Xe=d):bt(t,e),jt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(j=e,h=e.child;h!==null;){for(g=j=h;j!==null;){switch(y=j,w=y.child,y.tag){case 0:case 11:case 14:case 15:mi(4,y,y.return);break;case 1:xr(y,y.return);var E=y.stateNode;if(typeof E.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(S){Re(r,n,S)}}break;case 5:xr(y,y.return);break;case 22:if(y.memoizedState!==null){ec(g);continue}}w!==null?(w.return=y,j=w):ec(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{i=g.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Af("display",a))}catch(S){Re(e,e.return,S)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(S){Re(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:bt(t,e),jt(e),r&4&&Xd(e);break;case 21:break;default:bt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xp(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var o=Zd(e);Ns(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Zd(e);Ls(e,l,a);break;default:throw Error(L(161))}}catch(u){Re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d0(e,t,n){j=e,th(e)}function th(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||uo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=uo;var d=Xe;if(uo=a,(Xe=u)&&!d)for(j=i;j!==null;)a=j,u=a.child,a.tag===22&&a.memoizedState!==null?tc(i):u!==null?(u.return=a,j=u):tc(i);for(;o!==null;)j=o,th(o),o=o.sibling;j=i,uo=l,Xe=d}qd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):qd(e)}}function qd(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||ka(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Id(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Id(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Ai(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Xe||t.flags&512&&Os(t)}catch(y){Re(t,t.return,y)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function ec(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function tc(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ka(4,t)}catch(u){Re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Re(t,i,u)}}var o=t.return;try{Os(t)}catch(u){Re(t,o,u)}break;case 5:var a=t.return;try{Os(t)}catch(u){Re(t,a,u)}}}catch(u){Re(t,t.return,u)}if(t===e){j=null;break}var l=t.sibling;if(l!==null){l.return=t.return,j=l;break}j=t.return}}var c0=Math.ceil,ra=un.ReactCurrentDispatcher,Pu=un.ReactCurrentOwner,kt=un.ReactCurrentBatchConfig,se=0,Be=null,Ne=null,We=0,ft=0,yr=Nn(0),_e=0,Ii=null,Kn=0,Ea=0,Du=0,gi=null,at=null,Ou=0,Ir=1/0,Kt=null,ia=!1,Ts=null,An=null,co=!1,yn=null,oa=0,vi=0,Ms=null,Do=-1,Oo=0;function nt(){return se&6?Oe():Do!==-1?Do:Do=Oe()}function $n(e){return e.mode&1?se&2&&We!==0?We&-We:Qg.transition!==null?(Oo===0&&(Oo=_f()),Oo):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Jf(e.type)),e):1}function Mt(e,t,n,r){if(50<vi)throw vi=0,Ms=null,Error(L(185));Ui(e,n,r),(!(se&2)||e!==Be)&&(e===Be&&(!(se&2)&&(Ea|=n),_e===4&&vn(e,We)),dt(e,r),n===1&&se===0&&!(t.mode&1)&&(Ir=Oe()+500,ya&&Tn()))}function dt(e,t){var n=e.callbackNode;Qm(e,t);var r=Bo(e,e===Be?We:0);if(r===0)n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dd(n),t===1)e.tag===0?Wg(nc.bind(null,e)):dp(nc.bind(null,e)),Hg(function(){!(se&6)&&Tn()}),n=null;else{switch(Ff(r)){case 1:n=ru;break;case 4:n=If;break;case 16:n=Uo;break;case 536870912:n=zf;break;default:n=Uo}n=uh(n,nh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nh(e,t){if(Do=-1,Oo=0,se&6)throw Error(L(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=Bo(e,e===Be?We:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=aa(e,r);else{t=r;var i=se;se|=2;var o=ih();(Be!==e||We!==t)&&(Kt=null,Ir=Oe()+500,Jn(e,t));do try{h0();break}catch(l){rh(e,l)}while(1);gu(),ra.current=o,se=i,Ne!==null?t=0:(Be=null,We=0,t=_e)}if(t!==0){if(t===2&&(i=ss(e),i!==0&&(r=i,t=Is(e,i))),t===1)throw n=Ii,Jn(e,0),vn(e,r),dt(e,Oe()),n;if(t===6)vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!f0(i)&&(t=aa(e,r),t===2&&(o=ss(e),o!==0&&(r=o,t=Is(e,o))),t===1))throw n=Ii,Jn(e,0),vn(e,r),dt(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:jn(e,at,Kt);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=Ou+500-Oe(),10<t)){if(Bo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gs(jn.bind(null,e,at,Kt),t);break}jn(e,at,Kt);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Tt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c0(r/1960))-r,10<r){e.timeoutHandle=gs(jn.bind(null,e,at,Kt),r);break}jn(e,at,Kt);break;case 5:jn(e,at,Kt);break;default:throw Error(L(329))}}}return dt(e,Oe()),e.callbackNode===n?nh.bind(null,e):null}function Is(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=aa(e,t),e!==2&&(t=at,at=n,t!==null&&zs(t)),e}function zs(e){at===null?at=e:at.push.apply(at,e)}function f0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Du,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function nc(e){if(se&6)throw Error(L(327));br();var t=Bo(e,0);if(!(t&1))return dt(e,Oe()),null;var n=aa(e,t);if(e.tag!==0&&n===2){var r=ss(e);r!==0&&(t=r,n=Is(e,r))}if(n===1)throw n=Ii,Jn(e,0),vn(e,t),dt(e,Oe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,at,Kt),dt(e,Oe()),null}function Lu(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Ir=Oe()+500,ya&&Tn())}}function Zn(e){yn!==null&&yn.tag===0&&!(se&6)&&br();var t=se;se|=1;var n=kt.transition,r=ce;try{if(kt.transition=null,ce=1,e)return e()}finally{ce=r,kt.transition=n,se=t,!(se&6)&&Tn()}}function Nu(){ft=yr.current,ve(yr)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bg(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(pu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wo();break;case 3:Tr(),ve(st),ve(qe),ku();break;case 5:Su(r);break;case 4:Tr();break;case 13:ve(Ce);break;case 19:ve(Ce);break;case 10:vu(r.type._context);break;case 22:case 23:Nu()}n=n.return}if(Be=e,Ne=e=Rn(e.current,null),We=ft=t,_e=0,Ii=null,Du=Ea=Kn=0,at=gi=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Bn=null}return e}function rh(e,t){do{var n=Ne;try{if(gu(),Ro.current=na,ta){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ta=!1}if(Yn=0,Ue=ze=Ae=null,hi=!1,Ni=0,Pu.current=null,n===null||n.return===null){_e=1,Ii=t,Ne=null;break}e:{var o=e,a=n.return,l=n,u=t;if(t=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=l,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Hd(a);if(w!==null){w.flags&=-257,Vd(w,a,l,o,t),w.mode&1&&Bd(o,d,t),t=w,u=d;var E=t.updateQueue;if(E===null){var S=new Set;S.add(u),t.updateQueue=S}else E.add(u);break e}else{if(!(t&1)){Bd(o,d,t),Tu();break e}u=Error(L(426))}}else if(ke&&l.mode&1){var v=Hd(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Vd(v,a,l,o,t),hu(Mr(u,l));break e}}o=u=Mr(u,l),_e!==4&&(_e=2),gi===null?gi=[o]:gi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=jp(o,u,t);Md(o,p);break e;case 1:l=u;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(An===null||!An.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Up(o,l,t);Md(o,k);break e}}o=o.return}while(o!==null)}ah(n)}catch($){t=$,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function ih(){var e=ra.current;return ra.current=na,e===null?na:e}function Tu(){(_e===0||_e===3||_e===2)&&(_e=4),Be===null||!(Kn&268435455)&&!(Ea&268435455)||vn(Be,We)}function aa(e,t){var n=se;se|=2;var r=ih();(Be!==e||We!==t)&&(Kt=null,Jn(e,t));do try{p0();break}catch(i){rh(e,i)}while(1);if(gu(),se=n,ra.current=r,Ne!==null)throw Error(L(261));return Be=null,We=0,_e}function p0(){for(;Ne!==null;)oh(Ne)}function h0(){for(;Ne!==null&&!Fm();)oh(Ne)}function oh(e){var t=sh(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?ah(e):Ne=t,Pu.current=null}function ah(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=l0(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Ne=null;return}}else if(n=a0(n,t,ft),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);_e===0&&(_e=5)}function jn(e,t,n){var r=ce,i=kt.transition;try{kt.transition=null,ce=1,m0(e,t,n,r)}finally{kt.transition=i,ce=r}return null}function m0(e,t,n,r){do br();while(yn!==null);if(se&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ym(e,o),e===Be&&(Ne=Be=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,uh(Uo,function(){return br(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kt.transition,kt.transition=null;var a=ce;ce=1;var l=se;se|=4,Pu.current=null,u0(e,n),eh(n,e),Mg(hs),Ho=!!ps,hs=ps=null,e.current=n,d0(n),jm(),se=l,ce=a,kt.transition=o}else e.current=n;if(co&&(co=!1,yn=e,oa=i),o=e.pendingLanes,o===0&&(An=null),Hm(n.stateNode),dt(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ia)throw ia=!1,e=Ts,Ts=null,e;return oa&1&&e.tag!==0&&br(),o=e.pendingLanes,o&1?e===Ms?vi++:(vi=0,Ms=e):vi=0,Tn(),null}function br(){if(yn!==null){var e=Ff(oa),t=kt.transition,n=ce;try{if(kt.transition=null,ce=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,oa=0,se&6)throw Error(L(331));var i=se;for(se|=4,j=e.current;j!==null;){var o=j,a=o.child;if(j.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(j=d;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:mi(8,h,o)}var g=h.child;if(g!==null)g.return=h,j=g;else for(;j!==null;){h=j;var y=h.sibling,w=h.return;if(Zp(h),h===d){j=null;break}if(y!==null){y.return=w,j=y;break}j=w}}}var E=o.alternate;if(E!==null){var S=E.child;if(S!==null){E.child=null;do{var v=S.sibling;S.sibling=null,S=v}while(S!==null)}}j=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,j=a;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,j=p;break e}j=o.return}}var f=e.current;for(j=f;j!==null;){a=j;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,j=m;else e:for(a=f;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ka(9,l)}}catch($){Re(l,l.return,$)}if(l===a){j=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,j=k;break e}j=l.return}}if(se=i,Tn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(ha,e)}catch{}r=!0}return r}finally{ce=n,kt.transition=t}}return!1}function rc(e,t,n){t=Mr(n,t),t=jp(e,t,1),e=Cn(e,t,1),t=nt(),e!==null&&(Ui(e,1,t),dt(e,t))}function Re(e,t,n){if(e.tag===3)rc(e,e,n);else for(;t!==null;){if(t.tag===3){rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=Mr(n,e),e=Up(t,e,1),t=Cn(t,e,1),e=nt(),t!==null&&(Ui(t,1,e),dt(t,e));break}}t=t.return}}function g0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(We&n)===n&&(_e===4||_e===3&&(We&130023424)===We&&500>Oe()-Ou?Jn(e,0):Du|=n),dt(e,t)}function lh(e,t){t===0&&(e.mode&1?(t=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):t=1);var n=nt();e=an(e,t),e!==null&&(Ui(e,t,n),dt(e,n))}function v0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function x0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),lh(e,n)}var sh;sh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,o0(e,t,n);lt=!!(e.flags&131072)}else lt=!1,ke&&t.flags&1048576&&cp(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Po(e,t),e=t.pendingProps;var i=Or(t,qe.current);Rr(t,n),i=Cu(null,t,r,e,i,n);var o=Au();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,Qo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yu(t),i.updater=wa,t.stateNode=i,i._reactInternals=t,Es(t,r,e,n),t=$s(null,t,r,!0,o,n)):(t.tag=0,ke&&o&&fu(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=w0(r),e=Dt(r,e),i){case 0:t=As(null,t,r,e,n);break e;case 1:t=Wd(null,t,r,e,n);break e;case 11:t=Jd(null,t,r,e,n);break e;case 14:t=Gd(null,t,r,Dt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),As(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Wd(e,t,r,i,n);case 3:e:{if(Jp(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,mp(e,t),qo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Mr(Error(L(423)),t),t=Qd(e,t,r,n,i);break e}else if(r!==i){i=Mr(Error(L(424)),t),t=Qd(e,t,r,n,i);break e}else for(pt=En(t.stateNode.containerInfo.firstChild),ht=t,ke=!0,Lt=null,n=yp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),r===i){t=ln(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return wp(t),e===null&&ws(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ms(r,i)?a=null:o!==null&&ms(r,o)&&(t.flags|=32),Vp(e,t),et(e,t,a,n),t.child;case 6:return e===null&&ws(t),null;case 13:return Gp(e,t,n);case 4:return wu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Jd(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(Zo,r._currentValue),r._currentValue=a,o!==null)if(It(o.value,a)){if(o.children===i.children&&!st.current){t=ln(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=tn(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ss(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ss(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=Et(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Dt(r,t.pendingProps),i=Dt(r.type,i),Gd(e,t,r,i,n);case 15:return Bp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Po(e,t),t.tag=1,ut(r)?(e=!0,Qo(t)):e=!1,Rr(t,n),vp(t,r,i),Es(t,r,i,n),$s(null,t,r,!0,e,n);case 19:return Wp(e,t,n);case 22:return Hp(e,t,n)}throw Error(L(156,t.tag))};function uh(e,t){return Mf(e,t)}function y0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new y0(e,t,n,r)}function Mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function w0(e){if(typeof e=="function")return Mu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===eu)return 11;if(e===tu)return 14}return 2}function Rn(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Mu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ur:return Gn(n.children,i,o,t);case qs:a=8,i|=8;break;case Wl:return e=St(12,n,t,i|2),e.elementType=Wl,e.lanes=o,e;case Ql:return e=St(13,n,t,i),e.elementType=Ql,e.lanes=o,e;case Yl:return e=St(19,n,t,i),e.elementType=Yl,e.lanes=o,e;case xf:return Ca(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gf:a=10;break e;case vf:a=9;break e;case eu:a=11;break e;case tu:a=14;break e;case hn:a=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=St(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Gn(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function Ca(e,t,n,r){return e=St(22,e,r,t),e.elementType=xf,e.lanes=n,e.stateNode={isHidden:!1},e}function xl(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function yl(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function S0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qa(0),this.expirationTimes=qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Iu(e,t,n,r,i,o,a,l,u){return e=new S0(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(o),e}function k0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dh(e){if(!e)return On;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(ut(n))return up(e,n,t)}return t}function ch(e,t,n,r,i,o,a,l,u){return e=Iu(n,r,!0,e,i,o,a,l,u),e.context=dh(null),n=e.current,r=nt(),i=$n(n),o=tn(r,i),o.callback=t??null,Cn(n,o,i),e.current.lanes=i,Ui(e,i,r),dt(e,r),e}function Aa(e,t,n,r){var i=t.current,o=nt(),a=$n(i);return n=dh(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,a),e!==null&&(Mt(e,i,a,o),$o(e,i,a)),a}function la(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ic(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zu(e,t){ic(e,t),(e=e.alternate)&&ic(e,t)}function E0(){return null}var fh=typeof reportError=="function"?reportError:function(e){console.error(e)};function _u(e){this._internalRoot=e}$a.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Aa(e,t,null,null)};$a.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){Aa(null,e,null,null)}),t[on]=null}};function $a(e){this._internalRoot=e}$a.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gn.length&&t!==0&&t<gn[n].priority;n++);gn.splice(n,0,e),n===0&&Vf(e)}};function Fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oc(){}function C0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=la(a);o.call(d)}}var a=ch(t,r,e,0,null,!1,!1,"",oc);return e._reactRootContainer=a,e[on]=a.current,bi(e.nodeType===8?e.parentNode:e),Zn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=la(u);l.call(d)}}var u=Iu(e,0,!1,null,null,!1,!1,"",oc);return e._reactRootContainer=u,e[on]=u.current,bi(e.nodeType===8?e.parentNode:e),Zn(function(){Aa(t,u,n,r)}),u}function ba(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=la(a);l.call(u)}}Aa(t,a,e,i)}else a=C0(n,t,e,i,r);return la(a)}jf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(iu(t,n|1),dt(t,Oe()),!(se&6)&&(Ir=Oe()+500,Tn()))}break;case 13:Zn(function(){var r=an(e,1);if(r!==null){var i=nt();Mt(r,e,1,i)}}),zu(e,1)}};ou=function(e){if(e.tag===13){var t=an(e,134217728);if(t!==null){var n=nt();Mt(t,e,134217728,n)}zu(e,134217728)}};Uf=function(e){if(e.tag===13){var t=$n(e),n=an(e,t);if(n!==null){var r=nt();Mt(n,e,t,r)}zu(e,t)}};Bf=function(){return ce};Hf=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};os=function(e,t,n){switch(t){case"input":if(Xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xa(r);if(!i)throw Error(L(90));wf(r),Xl(r,i)}}}break;case"textarea":kf(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};Pf=Lu;Df=Zn;var A0={usingClientEntryPoint:!1,Events:[Hi,pr,xa,Rf,bf,Lu]},ti={findFiberByHostInstance:Un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$0={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nf(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||E0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{ha=fo.inject($0),Jt=fo}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(t))throw Error(L(200));return k0(e,t,null,n)};gt.createRoot=function(e,t){if(!Fu(e))throw Error(L(299));var n=!1,r="",i=fh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Iu(e,1,!1,null,null,n,!1,r,i),e[on]=t.current,bi(e.nodeType===8?e.parentNode:e),new _u(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Nf(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Zn(e)};gt.hydrate=function(e,t,n){if(!Ra(t))throw Error(L(200));return ba(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!Fu(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=fh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ch(t,null,e,1,n??null,i,!1,o,a),e[on]=t.current,bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $a(t)};gt.render=function(e,t,n){if(!Ra(t))throw Error(L(200));return ba(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!Ra(e))throw Error(L(40));return e._reactRootContainer?(Zn(function(){ba(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};gt.unstable_batchedUpdates=Lu;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ra(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return ba(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=gt})(Em);var ac=Vl;Hl.createRoot=ac.createRoot,Hl.hydrateRoot=ac.hydrateRoot;var zi={},R0={get exports(){return zi},set exports(e){zi=e}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,ju=He?Symbol.for("react.element"):60103,Uu=He?Symbol.for("react.portal"):60106,Pa=He?Symbol.for("react.fragment"):60107,Da=He?Symbol.for("react.strict_mode"):60108,Oa=He?Symbol.for("react.profiler"):60114,La=He?Symbol.for("react.provider"):60109,Na=He?Symbol.for("react.context"):60110,Bu=He?Symbol.for("react.async_mode"):60111,Ta=He?Symbol.for("react.concurrent_mode"):60111,Ma=He?Symbol.for("react.forward_ref"):60112,Ia=He?Symbol.for("react.suspense"):60113,b0=He?Symbol.for("react.suspense_list"):60120,za=He?Symbol.for("react.memo"):60115,_a=He?Symbol.for("react.lazy"):60116,P0=He?Symbol.for("react.block"):60121,D0=He?Symbol.for("react.fundamental"):60117,O0=He?Symbol.for("react.responder"):60118,L0=He?Symbol.for("react.scope"):60119;function xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ju:switch(e=e.type,e){case Bu:case Ta:case Pa:case Oa:case Da:case Ia:return e;default:switch(e=e&&e.$$typeof,e){case Na:case Ma:case _a:case za:case La:return e;default:return t}}case Uu:return t}}}function ph(e){return xt(e)===Ta}fe.AsyncMode=Bu;fe.ConcurrentMode=Ta;fe.ContextConsumer=Na;fe.ContextProvider=La;fe.Element=ju;fe.ForwardRef=Ma;fe.Fragment=Pa;fe.Lazy=_a;fe.Memo=za;fe.Portal=Uu;fe.Profiler=Oa;fe.StrictMode=Da;fe.Suspense=Ia;fe.isAsyncMode=function(e){return ph(e)||xt(e)===Bu};fe.isConcurrentMode=ph;fe.isContextConsumer=function(e){return xt(e)===Na};fe.isContextProvider=function(e){return xt(e)===La};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ju};fe.isForwardRef=function(e){return xt(e)===Ma};fe.isFragment=function(e){return xt(e)===Pa};fe.isLazy=function(e){return xt(e)===_a};fe.isMemo=function(e){return xt(e)===za};fe.isPortal=function(e){return xt(e)===Uu};fe.isProfiler=function(e){return xt(e)===Oa};fe.isStrictMode=function(e){return xt(e)===Da};fe.isSuspense=function(e){return xt(e)===Ia};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pa||e===Ta||e===Oa||e===Da||e===Ia||e===b0||typeof e=="object"&&e!==null&&(e.$$typeof===_a||e.$$typeof===za||e.$$typeof===La||e.$$typeof===Na||e.$$typeof===Ma||e.$$typeof===D0||e.$$typeof===O0||e.$$typeof===L0||e.$$typeof===P0)};fe.typeOf=xt;(function(e){e.exports=fe})(R0);function N0(e){function t(I,F,_,Y,C){for(var te=0,z=0,Se=0,ue=0,ie,X,Pe=0,Fe=0,ne,De=ne=ie=0,le=0,Te=0,cn=0,Me=0,zt=_.length,_t=zt-1,ot,Q="",Ee="",Vr="",nr="",Ft;le<zt;){if(X=_.charCodeAt(le),le===_t&&z+ue+Se+te!==0&&(z!==0&&(X=z===47?10:47),ue=Se=te=0,zt++,_t++),z+ue+Se+te===0){if(le===_t&&(0<Te&&(Q=Q.replace(y,"")),0<Q.trim().length)){switch(X){case 32:case 9:case 59:case 13:case 10:break;default:Q+=_.charAt(le)}X=59}switch(X){case 123:for(Q=Q.trim(),ie=Q.charCodeAt(0),ne=1,Me=++le;le<zt;){switch(X=_.charCodeAt(le)){case 123:ne++;break;case 125:ne--;break;case 47:switch(X=_.charCodeAt(le+1)){case 42:case 47:e:{for(De=le+1;De<_t;++De)switch(_.charCodeAt(De)){case 47:if(X===42&&_.charCodeAt(De-1)===42&&le+2!==De){le=De+1;break e}break;case 10:if(X===47){le=De+1;break e}}le=De}}break;case 91:X++;case 40:X++;case 34:case 39:for(;le++<_t&&_.charCodeAt(le)!==X;);}if(ne===0)break;le++}switch(ne=_.substring(Me,le),ie===0&&(ie=(Q=Q.replace(g,"").trim()).charCodeAt(0)),ie){case 64:switch(0<Te&&(Q=Q.replace(y,"")),X=Q.charCodeAt(1),X){case 100:case 109:case 115:case 45:Te=F;break;default:Te=ct}if(ne=t(F,Te,ne,X,C+1),Me=ne.length,0<M&&(Te=n(ct,Q,cn),Ft=l(3,ne,Te,F,we,ye,Me,X,C,Y),Q=Te.join(""),Ft!==void 0&&(Me=(ne=Ft.trim()).length)===0&&(X=0,ne="")),0<Me)switch(X){case 115:Q=Q.replace(N,a);case 100:case 109:case 45:ne=Q+"{"+ne+"}";break;case 107:Q=Q.replace(f,"$1 $2"),ne=Q+"{"+ne+"}",ne=me===1||me===2&&o("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=Q+ne,Y===112&&(ne=(Ee+=ne,""))}else ne="";break;default:ne=t(F,n(F,Q,cn),ne,Y,C+1)}Vr+=ne,ne=cn=Te=De=ie=0,Q="",X=_.charCodeAt(++le);break;case 125:case 59:if(Q=(0<Te?Q.replace(y,""):Q).trim(),1<(Me=Q.length))switch(De===0&&(ie=Q.charCodeAt(0),ie===45||96<ie&&123>ie)&&(Me=(Q=Q.replace(" ",":")).length),0<M&&(Ft=l(1,Q,F,I,we,ye,Ee.length,Y,C,Y))!==void 0&&(Me=(Q=Ft.trim()).length)===0&&(Q="\0\0"),ie=Q.charCodeAt(0),X=Q.charCodeAt(1),ie){case 0:break;case 64:if(X===105||X===99){nr+=Q+_.charAt(le);break}default:Q.charCodeAt(Me-1)!==58&&(Ee+=i(Q,ie,X,Q.charCodeAt(2)))}cn=Te=De=ie=0,Q="",X=_.charCodeAt(++le)}}switch(X){case 13:case 10:z===47?z=0:1+ie===0&&Y!==107&&0<Q.length&&(Te=1,Q+="\0"),0<M*B&&l(0,Q,F,I,we,ye,Ee.length,Y,C,Y),ye=1,we++;break;case 59:case 125:if(z+ue+Se+te===0){ye++;break}default:switch(ye++,ot=_.charAt(le),X){case 9:case 32:if(ue+te+z===0)switch(Pe){case 44:case 58:case 9:case 32:ot="";break;default:X!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ue+z+te===0&&(Te=cn=1,ot="\f"+ot);break;case 108:if(ue+z+te+be===0&&0<De)switch(le-De){case 2:Pe===112&&_.charCodeAt(le-3)===58&&(be=Pe);case 8:Fe===111&&(be=Fe)}break;case 58:ue+z+te===0&&(De=le);break;case 44:z+Se+ue+te===0&&(Te=1,ot+="\r");break;case 34:case 39:z===0&&(ue=ue===X?0:ue===0?X:ue);break;case 91:ue+z+Se===0&&te++;break;case 93:ue+z+Se===0&&te--;break;case 41:ue+z+te===0&&Se--;break;case 40:if(ue+z+te===0){if(ie===0)switch(2*Pe+3*Fe){case 533:break;default:ie=1}Se++}break;case 64:z+Se+ue+te+De+ne===0&&(ne=1);break;case 42:case 47:if(!(0<ue+te+Se))switch(z){case 0:switch(2*X+3*_.charCodeAt(le+1)){case 235:z=47;break;case 220:Me=le,z=42}break;case 42:X===47&&Pe===42&&Me+2!==le&&(_.charCodeAt(Me+2)===33&&(Ee+=_.substring(Me,le+1)),ot="",z=0)}}z===0&&(Q+=ot)}Fe=Pe,Pe=X,le++}if(Me=Ee.length,0<Me){if(Te=F,0<M&&(Ft=l(2,Ee,Te,I,we,ye,Me,Y,C,Y),Ft!==void 0&&(Ee=Ft).length===0))return nr+Ee+Vr;if(Ee=Te.join(",")+"{"+Ee+"}",me*be!==0){switch(me!==2||o(Ee,2)||(be=0),be){case 111:Ee=Ee.replace(k,":-moz-$1")+Ee;break;case 112:Ee=Ee.replace(m,"::-webkit-input-$1")+Ee.replace(m,"::-moz-$1")+Ee.replace(m,":-ms-input-$1")+Ee}be=0}}return nr+Ee+Vr}function n(I,F,_){var Y=F.trim().split(v);F=Y;var C=Y.length,te=I.length;switch(te){case 0:case 1:var z=0;for(I=te===0?"":I[0]+" ";z<C;++z)F[z]=r(I,F[z],_).trim();break;default:var Se=z=0;for(F=[];z<C;++z)for(var ue=0;ue<te;++ue)F[Se++]=r(I[ue]+" ",Y[z],_).trim()}return F}function r(I,F,_){var Y=F.charCodeAt(0);switch(33>Y&&(Y=(F=F.trim()).charCodeAt(0)),Y){case 38:return F.replace(p,"$1"+I.trim());case 58:return I.trim()+F.replace(p,"$1"+I.trim());default:if(0<1*_&&0<F.indexOf("\f"))return F.replace(p,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+F}function i(I,F,_,Y){var C=I+";",te=2*F+3*_+4*Y;if(te===944){I=C.indexOf(":",9)+1;var z=C.substring(I,C.length-1).trim();return z=C.substring(0,I).trim()+z+";",me===1||me===2&&o(z,1)?"-webkit-"+z+z:z}if(me===0||me===2&&!o(C,1))return C;switch(te){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(xe,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return z=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+z+"-webkit-"+C+"-ms-flex-pack"+z+C;case 1005:return E.test(C)?C.replace(w,":-webkit-")+C.replace(w,":-moz-")+C:C;case 1e3:switch(z=C.substring(13).trim(),F=z.indexOf("-")+1,z.charCodeAt(0)+z.charCodeAt(F)){case 226:z=C.replace($,"tb");break;case 232:z=C.replace($,"tb-rl");break;case 220:z=C.replace($,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+z+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(F=(C=I).length-10,z=(C.charCodeAt(F)===33?C.substring(0,F):C).substring(I.indexOf(":",7)+1).trim(),te=z.charCodeAt(0)+(z.charCodeAt(7)|0)){case 203:if(111>z.charCodeAt(8))break;case 115:C=C.replace(z,"-webkit-"+z)+";"+C;break;case 207:case 102:C=C.replace(z,"-webkit-"+(102<te?"inline-":"")+"box")+";"+C.replace(z,"-webkit-"+z)+";"+C.replace(z,"-ms-"+z+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return z=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+z+"-ms-flex-"+z+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(O,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(O,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(J.test(I)===!0)return(z=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?i(I.replace("stretch","fill-available"),F,_,Y).replace(":fill-available",":stretch"):C.replace(z,"-webkit-"+z)+C.replace(z,"-moz-"+z.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,_+Y===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+C}return C}function o(I,F){var _=I.indexOf(F===1?":":"{"),Y=I.substring(0,F!==3?_:10);return _=I.substring(_+1,I.length-1),G(F!==2?Y:Y.replace(U,"$1"),_,F)}function a(I,F){var _=i(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return _!==F+";"?_.replace(T," or ($1)").substring(4):"("+F+")"}function l(I,F,_,Y,C,te,z,Se,ue,ie){for(var X=0,Pe=F,Fe;X<M;++X)switch(Fe=Ve[X].call(h,I,Pe,_,Y,C,te,z,Se,ue,ie)){case void 0:case!1:case!0:case null:break;default:Pe=Fe}if(Pe!==F)return Pe}function u(I){switch(I){case void 0:case null:M=Ve.length=0;break;default:if(typeof I=="function")Ve[M++]=I;else if(typeof I=="object")for(var F=0,_=I.length;F<_;++F)u(I[F]);else B=!!I|0}return u}function d(I){return I=I.prefix,I!==void 0&&(G=null,I?typeof I!="function"?me=1:(me=2,G=I):me=0),d}function h(I,F){var _=I;if(33>_.charCodeAt(0)&&(_=_.trim()),ae=_,_=[ae],0<M){var Y=l(-1,F,_,_,we,ye,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(F=Y)}var C=t(ct,_,F,0,0);return 0<M&&(Y=l(-2,C,_,_,we,ye,C.length,0,0,0),Y!==void 0&&(C=Y)),ae="",be=0,ye=we=1,C}var g=/^\0+/g,y=/[\0\r\f]/g,w=/: */g,E=/zoo|gra/,S=/([,: ])(transform)/g,v=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,k=/:(read-only)/g,$=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,O=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,J=/stretch|:\s*\w+\-(?:conte|avail)/,xe=/([^-])(image-set\()/,ye=1,we=1,be=0,me=1,ct=[],Ve=[],M=0,G=null,B=0,ae="";return h.use=u,h.set=d,e!==void 0&&d(e),h}var T0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function M0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var I0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lc=M0(function(e){return I0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Hu=zi,z0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vu={};Vu[Hu.ForwardRef]=F0;Vu[Hu.Memo]=hh;function sc(e){return Hu.isMemo(e)?hh:Vu[e.$$typeof]||z0}var j0=Object.defineProperty,U0=Object.getOwnPropertyNames,uc=Object.getOwnPropertySymbols,B0=Object.getOwnPropertyDescriptor,H0=Object.getPrototypeOf,dc=Object.prototype;function mh(e,t,n){if(typeof t!="string"){if(dc){var r=H0(t);r&&r!==dc&&mh(e,r,n)}var i=U0(t);uc&&(i=i.concat(uc(t)));for(var o=sc(e),a=sc(t),l=0;l<i.length;++l){var u=i[l];if(!_0[u]&&!(n&&n[u])&&!(a&&a[u])&&!(o&&o[u])){var d=B0(t,u);try{j0(e,u,d)}catch{}}}}return e}var V0=mh;function Nt(){return(Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var cc=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},_s=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!zi.typeOf(e)},sa=Object.freeze([]),bn=Object.freeze({});function zr(e){return typeof e=="function"}function fc(e){return e.displayName||e.name||"Component"}function Ju(e){return e&&typeof e.styledComponentId=="string"}var _r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Gu=typeof window<"u"&&"HTMLElement"in window,J0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),G0={};function Xn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var W0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Xn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),d=0,h=r.length;d<h;d++)this.tag.insertRule(u,r[d])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),No=new Map,ua=new Map,xi=1,po=function(e){if(No.has(e))return No.get(e);for(;ua.has(xi);)xi++;var t=xi++;return No.set(e,t),ua.set(t,e),t},Q0=function(e){return ua.get(e)},Y0=function(e,t){t>=xi&&(xi=t+1),No.set(e,t),ua.set(t,e)},K0="style["+_r+'][data-styled-version="5.3.9"]',Z0=new RegExp("^"+_r+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),X0=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},q0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(Z0);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(Y0(d,u),X0(e,d,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},e1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},gh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var u=l.childNodes,d=u.length;d>=0;d--){var h=u[d];if(h&&h.nodeType===1&&h.hasAttribute(_r))return h}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(_r,"active"),r.setAttribute("data-styled-version","5.3.9");var a=e1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},t1=function(){function e(n){var r=this.element=gh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var u=o[a];if(u.ownerNode===i)return u}Xn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),n1=function(){function e(n){var r=this.element=gh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),r1=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),pc=Gu,i1={isServer:!Gu,useCSSOMInjection:!J0},da=function(){function e(n,r,i){n===void 0&&(n=bn),r===void 0&&(r={}),this.options=Nt({},i1,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Gu&&pc&&(pc=!1,function(o){for(var a=document.querySelectorAll(K0),l=0,u=a.length;l<u;l++){var d=a[l];d&&d.getAttribute(_r)!=="active"&&(q0(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return po(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Nt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new r1(a):o?new t1(a):new n1(a),new W0(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(po(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(po(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(po(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=Q0(a);if(l!==void 0){var u=n.names.get(l),d=r.getGroup(a);if(u&&d&&u.size){var h=_r+".g"+a+'[id="'+l+'"]',g="";u!==void 0&&u.forEach(function(y){y.length>0&&(g+=y+",")}),o+=""+d+h+'{content:"'+g+`"}/*!sc*/
`}}}return o}(this)},e}(),o1=/(a)(d)/gi,hc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fs(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=hc(t%52)+n;return(hc(t%52)+n).replace(o1,"$1-$2")}var wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vh=function(e){return wr(5381,e)};function xh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zr(n)&&!Ju(n))return!1}return!0}var a1=vh("5.3.9"),l1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xh(t),this.componentId=n,this.baseHash=wr(a1,n),this.baseStyle=r,da.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=qn(this.rules,t,n,r).join(""),l=Fs(wr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var u=r(a,"."+l,void 0,i);n.insertRules(i,l,u)}o.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,h=wr(this.baseHash,r.hash),g="",y=0;y<d;y++){var w=this.rules[y];if(typeof w=="string")g+=w;else if(w){var E=qn(w,t,n,r),S=Array.isArray(E)?E.join(""):E;h=wr(h,S+y),g+=S}}if(g){var v=Fs(h>>>0);if(!n.hasNameForId(i,v)){var p=r(g,"."+v,void 0,i);n.insertRules(i,v,p)}o.push(v)}}return o.join(" ")},e}(),s1=/^\s*\/\/.*$/gm,u1=[":","[",".","#"];function d1(e){var t,n,r,i,o=e===void 0?bn:e,a=o.options,l=a===void 0?bn:a,u=o.plugins,d=u===void 0?sa:u,h=new N0(l),g=[],y=function(S){function v(p){if(p)try{S(p+"}")}catch{}}return function(p,f,m,k,$,N,T,O,U,J){switch(p){case 1:if(U===0&&f.charCodeAt(0)===64)return S(f+";"),"";break;case 2:if(O===0)return f+"/*|*/";break;case 3:switch(O){case 102:case 112:return S(m[0]+f),"";default:return f+(J===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(v)}}}(function(S){g.push(S)}),w=function(S,v,p){return v===0&&u1.indexOf(p[n.length])!==-1||p.match(i)?S:"."+t};function E(S,v,p,f){f===void 0&&(f="&");var m=S.replace(s1,""),k=v&&p?p+" "+v+" { "+m+" }":m;return t=f,n=v,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(p||!v?"":v,k)}return h.use([].concat(d,[function(S,v,p){S===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,w))},y,function(S){if(S===-2){var v=g;return g=[],v}}])),E.hash=d.length?d.reduce(function(S,v){return v.name||Xn(15),wr(S,v.name)},5381).toString():"",E}var yh=tt.createContext();yh.Consumer;var wh=tt.createContext(),c1=(wh.Consumer,new da),js=d1();function Sh(){return P.useContext(yh)||c1}function kh(){return P.useContext(wh)||js}var f1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=js);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Xn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=js),this.name+t.hash},e}(),p1=/([A-Z])/,h1=/([A-Z])/g,m1=/^ms-/,g1=function(e){return"-"+e.toLowerCase()};function mc(e){return p1.test(e)?e.replace(h1,g1).replace(m1,"-ms-"):e}var gc=function(e){return e==null||e===!1||e===""};function qn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=qn(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(gc(e))return"";if(Ju(e))return"."+e.styledComponentId;if(zr(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var u=e(t);return qn(u,t,n,r)}var d;return e instanceof f1?n?(e.inject(n,r),e.getName(r)):e:_s(e)?function h(g,y){var w,E,S=[];for(var v in g)g.hasOwnProperty(v)&&!gc(g[v])&&(Array.isArray(g[v])&&g[v].isCss||zr(g[v])?S.push(mc(v)+":",g[v],";"):_s(g[v])?S.push.apply(S,h(g[v],v)):S.push(mc(v)+": "+(w=v,(E=g[v])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||w in T0?String(E).trim():E+"px")+";"));return y?[y+" {"].concat(S,["}"]):S}(e):e.toString()}var vc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Eh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return zr(e)||_s(e)?vc(qn(cc(sa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:vc(qn(cc(e,n)))}var Ch=function(e,t,n){return n===void 0&&(n=bn),e.theme!==n.theme&&e.theme||t||n.theme},v1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,x1=/(^-|-$)/g;function wl(e){return e.replace(v1,"-").replace(x1,"")}var Ah=function(e){return Fs(vh(e)>>>0)};function ho(e){return typeof e=="string"&&!0}var Us=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},y1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function w1(e,t,n){var r=e[n];Us(t)&&Us(r)?$h(r,t):e[n]=t}function $h(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Us(a))for(var l in a)y1(l)&&w1(e,a[l],l)}return e}var _i=tt.createContext();_i.Consumer;function S1(e){var t=P.useContext(_i),n=P.useMemo(function(){return function(r,i){if(!r)return Xn(14);if(zr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Xn(8):i?Nt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?tt.createElement(_i.Provider,{value:n},e.children):null}var Sl={};function Rh(e,t,n){var r=Ju(e),i=!ho(e),o=t.attrs,a=o===void 0?sa:o,l=t.componentId,u=l===void 0?function(f,m){var k=typeof f!="string"?"sc":wl(f);Sl[k]=(Sl[k]||0)+1;var $=k+"-"+Ah("5.3.9"+k+Sl[k]);return m?m+"-"+$:$}(t.displayName,t.parentComponentId):l,d=t.displayName,h=d===void 0?function(f){return ho(f)?"styled."+f:"Styled("+fc(f)+")"}(e):d,g=t.displayName&&t.componentId?wl(t.displayName)+"-"+t.componentId:t.componentId||u,y=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(f,m,k){return e.shouldForwardProp(f,m,k)&&t.shouldForwardProp(f,m,k)}:e.shouldForwardProp);var E,S=new l1(n,g,r?e.componentStyle:void 0),v=S.isStatic&&a.length===0,p=function(f,m){return function(k,$,N,T){var O=k.attrs,U=k.componentStyle,J=k.defaultProps,xe=k.foldedComponentIds,ye=k.shouldForwardProp,we=k.styledComponentId,be=k.target,me=function(Y,C,te){Y===void 0&&(Y=bn);var z=Nt({},C,{theme:Y}),Se={};return te.forEach(function(ue){var ie,X,Pe,Fe=ue;for(ie in zr(Fe)&&(Fe=Fe(z)),Fe)z[ie]=Se[ie]=ie==="className"?(X=Se[ie],Pe=Fe[ie],X&&Pe?X+" "+Pe:X||Pe):Fe[ie]}),[z,Se]}(Ch($,P.useContext(_i),J)||bn,$,O),ct=me[0],Ve=me[1],M=function(Y,C,te,z){var Se=Sh(),ue=kh(),ie=C?Y.generateAndInjectStyles(bn,Se,ue):Y.generateAndInjectStyles(te,Se,ue);return ie}(U,T,ct),G=N,B=Ve.$as||$.$as||Ve.as||$.as||be,ae=ho(B),I=Ve!==$?Nt({},$,{},Ve):$,F={};for(var _ in I)_[0]!=="$"&&_!=="as"&&(_==="forwardedAs"?F.as=I[_]:(ye?ye(_,lc,B):!ae||lc(_))&&(F[_]=I[_]));return $.style&&Ve.style!==$.style&&(F.style=Nt({},$.style,{},Ve.style)),F.className=Array.prototype.concat(xe,we,M!==we?M:null,$.className,Ve.className).filter(Boolean).join(" "),F.ref=G,P.createElement(B,F)}(E,f,m,v)};return p.displayName=h,(E=tt.forwardRef(p)).attrs=y,E.componentStyle=S,E.displayName=h,E.shouldForwardProp=w,E.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):sa,E.styledComponentId=g,E.target=r?e.target:e,E.withComponent=function(f){var m=t.componentId,k=function(N,T){if(N==null)return{};var O,U,J={},xe=Object.keys(N);for(U=0;U<xe.length;U++)O=xe[U],T.indexOf(O)>=0||(J[O]=N[O]);return J}(t,["componentId"]),$=m&&m+"-"+(ho(f)?f:wl(fc(f)));return Rh(f,Nt({},k,{attrs:y,componentId:$}),n)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?$h({},e.defaultProps,f):f}}),Object.defineProperty(E,"toString",{value:function(){return"."+E.styledComponentId}}),i&&V0(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var Bs=function(e){return function t(n,r,i){if(i===void 0&&(i=bn),!zi.isValidElementType(r))return Xn(1,String(r));var o=function(){return n(r,i,Eh.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Nt({},i,{},a))},o.attrs=function(a){return t(n,r,Nt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Rh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Bs[e]=Bs(e)});var k1=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=xh(n),da.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(qn(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&da.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function E1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Eh.apply(void 0,[e].concat(n)),o="sc-global-"+Ah(JSON.stringify(i)),a=new k1(i,o);function l(d){var h=Sh(),g=kh(),y=P.useContext(_i),w=P.useRef(h.allocateGSInstance(o)).current;return h.server&&u(w,d,h,y,g),P.useLayoutEffect(function(){if(!h.server)return u(w,d,h,y,g),function(){return a.removeStyles(w,h)}},[w,d,h,y,g]),null}function u(d,h,g,y,w){if(a.isStatic)a.renderStyles(d,G0,g,w);else{var E=Nt({},h,{theme:Ch(h,y,l.defaultProps)});a.renderStyles(d,E,g,w)}}return tt.memo(l)}const x=Bs,C1={title:"main",fonts:{extrasmall:16,small:18,medium:20,large:26,extralarge:36},colors:{primary:{light:"#f08",normal:"#2EB2B7",dark:"#01fe87"},secondary:{light:"#E08952",normal:"#FF8233",dark:"#AD561F"},auxiliary:{success:{normal:"#34C759",dark:"#45B661"},attention:{normal:"#FFEB3B",dark:"#CCB700"},error:{normal:"#D92626",dark:"#981B1B"}},foreground:"#D9D9D9",middleground:"#f5f5f5",background:"#292E2E",text:{title:"#000",content:"#626262",highlight:"#FFF",TitleSubArticles:"#114676"}}},A1=P.createContext({}),$1=({children:e})=>{const[t,n]=P.useState(C1);return c(A1.Provider,{value:{theme:t},children:c(S1,{theme:t,children:e})})};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}var Le;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Le||(Le={}));const xc="popstate";function R1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Fi("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sn(i)}return P1(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function b1(){return Math.random().toString(36).substr(2,8)}function yc(e,t){return{usr:e.state,key:e.key,idx:t}}function Fi(e,t,n,r){return n===void 0&&(n=null),oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dn(t):t,{state:n,key:t&&t.key||r||b1()})}function sn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function P1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Le.Pop,u=null,d=h();d==null&&(d=0,a.replaceState(oe({},a.state,{idx:d}),""));function h(){return(a.state||{idx:null}).idx}function g(){l=Le.Pop;let v=h(),p=v==null?null:v-d;d=v,u&&u({action:l,location:S.location,delta:p})}function y(v,p){l=Le.Push;let f=Fi(S.location,v,p);n&&n(f,v),d=h()+1;let m=yc(f,d),k=S.createHref(f);try{a.pushState(m,"",k)}catch{i.location.assign(k)}o&&u&&u({action:l,location:S.location,delta:1})}function w(v,p){l=Le.Replace;let f=Fi(S.location,v,p);n&&n(f,v),d=h();let m=yc(f,d),k=S.createHref(f);a.replaceState(m,"",k),o&&u&&u({action:l,location:S.location,delta:0})}function E(v){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof v=="string"?v:sn(v);return ee(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let S={get action(){return l},get location(){return e(i,a)},listen(v){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(xc,g),u=v,()=>{i.removeEventListener(xc,g),u=null}},createHref(v){return t(i,v)},createURL:E,encodeLocation(v){let p=E(v);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:w,go(v){return a.go(v)}};return S}var Ie;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ie||(Ie={}));const D1=new Set(["lazy","caseSensitive","path","id","index","children"]);function O1(e){return e.index===!0}function bh(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(ee(i.index!==!0||!i.children,"Cannot specify children on an index route"),ee(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),O1(i)){let u=oe({},i,{hasErrorBoundary:t(i),id:l});return r[l]=u,u}else{let u=oe({},i,{id:l,hasErrorBoundary:t(i),children:void 0});return r[l]=u,i.children&&(u.children=bh(i.children,t,a,r)),u}})}function Sr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?dn(t):t,i=Ji(r.pathname||"/",n);if(i==null)return null;let o=Ph(e);L1(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=U1(o[l],V1(i));return a}function Ph(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(ee(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=nn([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Ph(o.children,t,h,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:F1(d,o.index),routesMeta:h})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let u of Dh(o.path))i(o,a,u)}),t}function Dh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Dh(r.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...a),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function L1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:j1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N1=/^:\w+$/,T1=3,M1=2,I1=1,z1=10,_1=-2,wc=e=>e==="*";function F1(e,t){let n=e.split("/"),r=n.length;return n.some(wc)&&(r+=_1),t&&(r+=M1),n.filter(i=>!wc(i)).reduce((i,o)=>i+(N1.test(o)?T1:o===""?I1:z1),r)}function j1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function U1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",h=B1({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d);if(!h)return null;Object.assign(r,h.params);let g=l.route;o.push({params:r,pathname:nn([i,h.pathname]),pathnameBase:Q1(nn([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=nn([i,h.pathnameBase]))}return o}function B1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=H1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,h,g)=>{if(h==="*"){let y=l[g]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return d[h]=J1(l[g]||"",h),d},{}),pathname:o,pathnameBase:a,pattern:e}}function H1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function V1(e){try{return decodeURI(e)}catch(t){return Fr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function J1(e,t){try{return decodeURIComponent(e)}catch(n){return Fr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ji(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function G1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?dn(e):e;return{pathname:n?n.startsWith("/")?n:W1(n,t):t,search:Y1(r),hash:K1(i)}}function W1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fa(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=dn(e):(i=oe({},e),ee(!i.pathname||!i.pathname.includes("?"),kl("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),kl("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),kl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let g=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),g-=1;i.pathname=y.join("/")}l=g>=0?t[g]:"/"}let u=G1(i,l),d=a&&a!=="/"&&a.endsWith("/"),h=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||h)&&(u.pathname+="/"),u}const nn=e=>e.join("/").replace(/\/\/+/g,"/"),Q1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Y1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,K1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Qu{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Oh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Lh=["post","put","patch","delete"],Z1=new Set(Lh),X1=["get",...Lh],q1=new Set(X1),ev=new Set([301,302,303,307,308]),tv=new Set([307,308]),El={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},nv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Sc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Nh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Th=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rv=!Th,iv=e=>!!e.hasErrorBoundary;function ov(e){ee(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||iv,n={},r=bh(e.routes,t,void 0,n),i,o=oe({v7_normalizeFormMethod:!1},e.future),a=null,l=new Set,u=null,d=null,h=null,g=e.hydrationData!=null,y=Sr(r,e.history.location,e.basename),w=null;if(y==null){let A=Ht(404,{pathname:e.history.location.pathname}),{matches:R,route:D}=bc(r);y=R,w={[D.id]:A}}let E=!y.some(A=>A.route.lazy)&&(!y.some(A=>A.route.loader)||e.hydrationData!=null),S,v={historyAction:e.history.action,location:e.history.location,matches:y,initialized:E,navigation:El,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},p=Le.Pop,f=!1,m,k=!1,$=!1,N=[],T=[],O=new Map,U=0,J=-1,xe=new Map,ye=new Set,we=new Map,be=new Map,me=new Map,ct=!1;function Ve(){return a=e.history.listen(A=>{let{action:R,location:D,delta:H}=A;if(ct){ct=!1;return}Fr(me.size===0||H!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=ot({currentLocation:v.location,nextLocation:D,historyAction:R});if(V&&H!=null){ct=!0,e.history.go(H*-1),_t(V,{state:"blocked",location:D,proceed(){_t(V,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),e.history.go(H)},reset(){zt(V),B({blockers:new Map(S.state.blockers)})}});return}return _(R,D)}),v.initialized||_(Le.Pop,v.location),S}function M(){a&&a(),l.clear(),m&&m.abort(),v.fetchers.forEach((A,R)=>ne(R)),v.blockers.forEach((A,R)=>zt(R))}function G(A){return l.add(A),()=>l.delete(A)}function B(A){v=oe({},v,A),l.forEach(R=>R(v))}function ae(A,R){var D,H;let V=v.actionData!=null&&v.navigation.formMethod!=null&&Zt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((D=A.state)==null?void 0:D._isRedirect)!==!0,K;R.actionData?Object.keys(R.actionData).length>0?K=R.actionData:K=null:V?K=v.actionData:K=null;let Z=R.loaderData?Rc(v.loaderData,R.loaderData,R.matches||[],R.errors):v.loaderData;for(let[W]of me)zt(W);let q=f===!0||v.navigation.formMethod!=null&&Zt(v.navigation.formMethod)&&((H=A.state)==null?void 0:H._isRedirect)!==!0;i&&(r=i,i=void 0),B(oe({},R,{actionData:K,loaderData:Z,historyAction:p,location:A,initialized:!0,navigation:El,revalidation:"idle",restoreScrollPosition:nr(A,R.matches||v.matches),preventScrollReset:q,blockers:new Map(v.blockers)})),k||p===Le.Pop||(p===Le.Push?e.history.push(A,A.state):p===Le.Replace&&e.history.replace(A,A.state)),p=Le.Pop,f=!1,k=!1,$=!1,N=[],T=[]}async function I(A,R){if(typeof A=="number"){e.history.go(A);return}let{path:D,submission:H,error:V}=kc(A,o,R),K=v.location,Z=Fi(v.location,D,R&&R.state);Z=oe({},Z,e.history.encodeLocation(Z));let q=R&&R.replace!=null?R.replace:void 0,W=Le.Push;q===!0?W=Le.Replace:q===!1||H!=null&&Zt(H.formMethod)&&H.formAction===v.location.pathname+v.location.search&&(W=Le.Replace);let pe=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,de=ot({currentLocation:K,nextLocation:Z,historyAction:W});if(de){_t(de,{state:"blocked",location:Z,proceed(){_t(de,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),I(A,R)},reset(){zt(de),B({blockers:new Map(v.blockers)})}});return}return await _(W,Z,{submission:H,pendingError:V,preventScrollReset:pe,replace:R&&R.replace})}function F(){if(Pe(),B({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){_(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}_(p||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function _(A,R,D){m&&m.abort(),m=null,p=A,k=(D&&D.startUninterruptedRevalidation)===!0,Vr(v.location,v.matches),f=(D&&D.preventScrollReset)===!0;let H=i||r,V=D&&D.overrideNavigation,K=Sr(H,R,e.basename);if(!K){let je=Ht(404,{pathname:R.pathname}),{matches:Je,route:$t}=bc(H);Q(),ae(R,{matches:Je,loaderData:{},errors:{[$t.id]:je}});return}if(dv(v.location,R)&&!(D&&D.submission&&Zt(D.submission.formMethod))){ae(R,{matches:K});return}m=new AbortController;let Z=ri(e.history,R,m.signal,D&&D.submission),q,W;if(D&&D.pendingError)W={[kr(K).route.id]:D.pendingError};else if(D&&D.submission&&Zt(D.submission.formMethod)){let je=await Y(Z,R,D.submission,K,{replace:D.replace});if(je.shortCircuited)return;q=je.pendingActionData,W=je.pendingActionError,V=oe({state:"loading",location:R},D.submission),Z=new Request(Z.url,{signal:Z.signal})}let{shortCircuited:pe,loaderData:de,errors:At}=await C(Z,R,K,V,D&&D.submission,D&&D.fetcherSubmission,D&&D.replace,q,W);pe||(m=null,ae(R,oe({matches:K},q?{actionData:q}:{},{loaderData:de,errors:At})))}async function Y(A,R,D,H,V){Pe();let K=oe({state:"submitting",location:R},D);B({navigation:K});let Z,q=Hs(H,R);if(!q.route.action&&!q.route.lazy)Z={type:Ie.error,error:Ht(405,{method:A.method,pathname:R.pathname,routeId:q.route.id})};else if(Z=await ni("action",A,q,H,n,t,S.basename),A.signal.aborted)return{shortCircuited:!0};if(Pr(Z)){let W;return V&&V.replace!=null?W=V.replace:W=Z.location===v.location.pathname+v.location.search,await ie(v,Z,{submission:D,replace:W}),{shortCircuited:!0}}if(yi(Z)){let W=kr(H,q.route.id);return(V&&V.replace)!==!0&&(p=Le.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:Z.error}}}if(Vn(Z))throw Ht(400,{type:"defer-action"});return{pendingActionData:{[q.route.id]:Z.data}}}async function C(A,R,D,H,V,K,Z,q,W){let pe=H;pe||(pe=oe({state:"loading",location:R,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},V));let de=V||K?V||K:pe.formMethod&&pe.formAction&&pe.formData&&pe.formEncType?{formMethod:pe.formMethod,formAction:pe.formAction,formData:pe.formData,formEncType:pe.formEncType}:void 0,At=i||r,[je,Je]=Ec(e.history,v,D,de,R,$,N,T,we,At,e.basename,q,W);if(Q(Ye=>!(D&&D.some(Rt=>Rt.route.id===Ye))||je&&je.some(Rt=>Rt.route.id===Ye)),je.length===0&&Je.length===0)return ae(R,oe({matches:D,loaderData:{},errors:W||null},q?{actionData:q}:{})),{shortCircuited:!0};if(!k){Je.forEach(Rt=>{let Mn=v.fetchers.get(Rt.key),Wr={state:"loading",data:Mn&&Mn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Rt.key,Wr)});let Ye=q||v.actionData;B(oe({navigation:pe},Ye?Object.keys(Ye).length===0?{actionData:null}:{actionData:Ye}:{},Je.length>0?{fetchers:new Map(v.fetchers)}:{}))}J=++U,Je.forEach(Ye=>O.set(Ye.key,m));let{results:$t,loaderResults:Jr,fetcherResults:Va}=await X(v.matches,D,je,Je,A);if(A.signal.aborted)return{shortCircuited:!0};Je.forEach(Ye=>O.delete(Ye.key));let Gr=Pc($t);if(Gr)return await ie(v,Gr,{replace:Z}),{shortCircuited:!0};let{loaderData:rr,errors:Ja}=$c(v,D,je,Jr,W,Je,Va,be);be.forEach((Ye,Rt)=>{Ye.subscribe(Mn=>{(Mn||Ye.done)&&be.delete(Rt)})}),Te();let Ga=cn(J);return oe({loaderData:rr,errors:Ja},Ga||Je.length>0?{fetchers:new Map(v.fetchers)}:{})}function te(A){return v.fetchers.get(A)||nv}function z(A,R,D,H){if(rv)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");O.has(A)&&De(A);let K=Sr(i||r,D,e.basename);if(!K){Fe(A,R,Ht(404,{pathname:D}));return}let{path:Z,submission:q}=kc(D,o,H,!0),W=Hs(K,Z);if(f=(H&&H.preventScrollReset)===!0,q&&Zt(q.formMethod)){Se(A,R,Z,W,K,q);return}we.set(A,{routeId:R,path:Z}),ue(A,R,Z,W,K,q)}async function Se(A,R,D,H,V,K){if(Pe(),we.delete(A),!H.route.action&&!H.route.lazy){let Yt=Ht(405,{method:K.formMethod,pathname:D,routeId:R});Fe(A,R,Yt);return}let Z=v.fetchers.get(A),q=oe({state:"submitting"},K,{data:Z&&Z.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(A,q),B({fetchers:new Map(v.fetchers)});let W=new AbortController,pe=ri(e.history,D,W.signal,K);O.set(A,W);let de=await ni("action",pe,H,V,n,t,S.basename);if(pe.signal.aborted){O.get(A)===W&&O.delete(A);return}if(Pr(de)){O.delete(A),ye.add(A);let Yt=oe({state:"loading"},K,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(A,Yt),B({fetchers:new Map(v.fetchers)}),ie(v,de,{submission:K,isFetchActionRedirect:!0})}if(yi(de)){Fe(A,R,de.error);return}if(Vn(de))throw Ht(400,{type:"defer-action"});let At=v.navigation.location||v.location,je=ri(e.history,At,W.signal),Je=i||r,$t=v.navigation.state!=="idle"?Sr(Je,v.navigation.location,e.basename):v.matches;ee($t,"Didn't find any matches after fetcher action");let Jr=++U;xe.set(A,Jr);let Va=oe({state:"loading",data:de.data},K,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(A,Va);let[Gr,rr]=Ec(e.history,v,$t,K,At,$,N,T,we,Je,e.basename,{[H.route.id]:de.data},void 0);rr.filter(Yt=>Yt.key!==A).forEach(Yt=>{let Wa=Yt.key,Zu=v.fetchers.get(Wa),Zh={state:"loading",data:Zu&&Zu.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Wa,Zh),O.set(Wa,W)}),B({fetchers:new Map(v.fetchers)});let{results:Ja,loaderResults:Ga,fetcherResults:Ye}=await X(v.matches,$t,Gr,rr,je);if(W.signal.aborted)return;xe.delete(A),O.delete(A),rr.forEach(Yt=>O.delete(Yt.key));let Rt=Pc(Ja);if(Rt)return ie(v,Rt);let{loaderData:Mn,errors:Wr}=$c(v,v.matches,Gr,Ga,void 0,rr,Ye,be),Yh={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(A,Yh);let Kh=cn(Jr);v.navigation.state==="loading"&&Jr>J?(ee(p,"Expected pending action"),m&&m.abort(),ae(v.navigation.location,{matches:$t,loaderData:Mn,errors:Wr,fetchers:new Map(v.fetchers)})):(B(oe({errors:Wr,loaderData:Rc(v.loaderData,Mn,$t,Wr)},Kh?{fetchers:new Map(v.fetchers)}:{})),$=!1)}async function ue(A,R,D,H,V,K){let Z=v.fetchers.get(A),q=oe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},K,{data:Z&&Z.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(A,q),B({fetchers:new Map(v.fetchers)});let W=new AbortController,pe=ri(e.history,D,W.signal);O.set(A,W);let de=await ni("loader",pe,H,V,n,t,S.basename);if(Vn(de)&&(de=await _h(de,pe.signal,!0)||de),O.get(A)===W&&O.delete(A),pe.signal.aborted)return;if(Pr(de)){await ie(v,de);return}if(yi(de)){let je=kr(v.matches,R);v.fetchers.delete(A),B({fetchers:new Map(v.fetchers),errors:{[je.route.id]:de.error}});return}ee(!Vn(de),"Unhandled fetcher deferred data");let At={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(A,At),B({fetchers:new Map(v.fetchers)})}async function ie(A,R,D){var H;let{submission:V,replace:K,isFetchActionRedirect:Z}=D===void 0?{}:D;R.revalidate&&($=!0);let q=Fi(A.location,R.location,oe({_isRedirect:!0},Z?{_isFetchActionRedirect:!0}:{}));if(ee(q,"Expected a location on the redirect navigation"),Nh.test(R.location)&&Th&&typeof((H=window)==null?void 0:H.location)<"u"){let Je=e.history.createURL(R.location),$t=Ji(Je.pathname,e.basename||"/")==null;if(window.location.origin!==Je.origin||$t){K?window.location.replace(R.location):window.location.assign(R.location);return}}m=null;let W=K===!0?Le.Replace:Le.Push,{formMethod:pe,formAction:de,formEncType:At,formData:je}=A.navigation;!V&&pe&&de&&je&&At&&(V={formMethod:pe,formAction:de,formEncType:At,formData:je}),tv.has(R.status)&&V&&Zt(V.formMethod)?await _(W,q,{submission:oe({},V,{formAction:R.location}),preventScrollReset:f}):Z?await _(W,q,{overrideNavigation:{state:"loading",location:q,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:V,preventScrollReset:f}):await _(W,q,{overrideNavigation:{state:"loading",location:q,formMethod:V?V.formMethod:void 0,formAction:V?V.formAction:void 0,formEncType:V?V.formEncType:void 0,formData:V?V.formData:void 0},preventScrollReset:f})}async function X(A,R,D,H,V){let K=await Promise.all([...D.map(W=>ni("loader",V,W,R,n,t,S.basename)),...H.map(W=>W.matches&&W.match?ni("loader",ri(e.history,W.path,V.signal),W.match,W.matches,n,t,S.basename):{type:Ie.error,error:Ht(404,{pathname:W.path})})]),Z=K.slice(0,D.length),q=K.slice(D.length);return await Promise.all([Dc(A,D,Z,V.signal,!1,v.loaderData),Dc(A,H.map(W=>W.match),q,V.signal,!0)]),{results:K,loaderResults:Z,fetcherResults:q}}function Pe(){$=!0,N.push(...Q()),we.forEach((A,R)=>{O.has(R)&&(T.push(R),De(R))})}function Fe(A,R,D){let H=kr(v.matches,R);ne(A),B({errors:{[H.route.id]:D},fetchers:new Map(v.fetchers)})}function ne(A){O.has(A)&&De(A),we.delete(A),xe.delete(A),ye.delete(A),v.fetchers.delete(A)}function De(A){let R=O.get(A);ee(R,"Expected fetch controller: "+A),R.abort(),O.delete(A)}function le(A){for(let R of A){let H={state:"idle",data:te(R).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(R,H)}}function Te(){let A=[];for(let R of ye){let D=v.fetchers.get(R);ee(D,"Expected fetcher: "+R),D.state==="loading"&&(ye.delete(R),A.push(R))}le(A)}function cn(A){let R=[];for(let[D,H]of xe)if(H<A){let V=v.fetchers.get(D);ee(V,"Expected fetcher: "+D),V.state==="loading"&&(De(D),xe.delete(D),R.push(D))}return le(R),R.length>0}function Me(A,R){let D=v.blockers.get(A)||Sc;return me.get(A)!==R&&me.set(A,R),D}function zt(A){v.blockers.delete(A),me.delete(A)}function _t(A,R){let D=v.blockers.get(A)||Sc;ee(D.state==="unblocked"&&R.state==="blocked"||D.state==="blocked"&&R.state==="blocked"||D.state==="blocked"&&R.state==="proceeding"||D.state==="blocked"&&R.state==="unblocked"||D.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+D.state+" -> "+R.state),v.blockers.set(A,R),B({blockers:new Map(v.blockers)})}function ot(A){let{currentLocation:R,nextLocation:D,historyAction:H}=A;if(me.size===0)return;me.size>1&&Fr(!1,"A router only supports one blocker at a time");let V=Array.from(me.entries()),[K,Z]=V[V.length-1],q=v.blockers.get(K);if(!(q&&q.state==="proceeding")&&Z({currentLocation:R,nextLocation:D,historyAction:H}))return K}function Q(A){let R=[];return be.forEach((D,H)=>{(!A||A(H))&&(D.cancel(),R.push(H),be.delete(H))}),R}function Ee(A,R,D){if(u=A,h=R,d=D||(H=>H.key),!g&&v.navigation===El){g=!0;let H=nr(v.location,v.matches);H!=null&&B({restoreScrollPosition:H})}return()=>{u=null,h=null,d=null}}function Vr(A,R){if(u&&d&&h){let D=R.map(V=>Oc(V,v.loaderData)),H=d(A,D)||A.key;u[H]=h()}}function nr(A,R){if(u&&d&&h){let D=R.map(K=>Oc(K,v.loaderData)),H=d(A,D)||A.key,V=u[H];if(typeof V=="number")return V}return null}function Ft(A){i=A}return S={get basename(){return e.basename},get state(){return v},get routes(){return r},initialize:Ve,subscribe:G,enableScrollRestoration:Ee,navigate:I,fetch:z,revalidate:F,createHref:A=>e.history.createHref(A),encodeLocation:A=>e.history.encodeLocation(A),getFetcher:te,deleteFetcher:ne,dispose:M,getBlocker:Me,deleteBlocker:zt,_internalFetchControllers:O,_internalActiveDeferreds:be,_internalSetRoutes:Ft},S}function av(e){return e!=null&&"formData"in e}function kc(e,t,n,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:sn(e);if(!n||!av(n))return{path:i};if(n.formMethod&&!pv(n.formMethod))return{path:i,error:Ht(405,{method:n.formMethod})};let o;if(n.formData){let u=n.formMethod||"get";if(o={formMethod:t.v7_normalizeFormMethod?u.toUpperCase():u.toLowerCase(),formAction:zh(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Zt(o.formMethod))return{path:i,submission:o}}let a=dn(i),l=Ih(n.formData);return r&&a.search&&Fh(a.search)&&l.append("index",""),a.search="?"+l,{path:sn(a),submission:o}}function lv(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Ec(e,t,n,r,i,o,a,l,u,d,h,g,y){let w=y?Object.values(y)[0]:g?Object.values(g)[0]:void 0,E=e.createURL(t.location),S=e.createURL(i),v=o||E.toString()===S.toString()||E.search!==S.search,p=y?Object.keys(y)[0]:void 0,m=lv(n,p).filter(($,N)=>{if($.route.lazy)return!0;if($.route.loader==null)return!1;if(sv(t.loaderData,t.matches[N],$)||a.some(U=>U===$.route.id))return!0;let T=t.matches[N],O=$;return Cc($,oe({currentUrl:E,currentParams:T.params,nextUrl:S,nextParams:O.params},r,{actionResult:w,defaultShouldRevalidate:v||Mh(T,O)}))}),k=[];return u.forEach(($,N)=>{if(!n.some(J=>J.route.id===$.routeId))return;let T=Sr(d,$.path,h);if(!T){k.push(oe({key:N},$,{matches:null,match:null}));return}let O=Hs(T,$.path);if(l.includes(N)){k.push(oe({key:N,matches:T,match:O},$));return}Cc(O,oe({currentUrl:E,currentParams:t.matches[t.matches.length-1].params,nextUrl:S,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:v}))&&k.push(oe({key:N,matches:T,match:O},$))}),[m,k]}function sv(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Mh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Cc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Ac(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];ee(i,"No route found in manifest");let o={};for(let a in r){let u=i[a]!==void 0&&a!=="hasErrorBoundary";Fr(!u,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!u&&!D1.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(oe({},i)),lazy:void 0})}async function ni(e,t,n,r,i,o,a,l,u,d){a===void 0&&(a="/"),l===void 0&&(l=!1),u===void 0&&(u=!1);let h,g,y,w=v=>{let p,f=new Promise((m,k)=>p=k);return y=()=>p(),t.signal.addEventListener("abort",y),Promise.race([v({request:t,params:n.params,context:d}),f])};try{let v=n.route[e];if(n.route.lazy)if(v)g=(await Promise.all([w(v),Ac(n.route,o,i)]))[0];else if(await Ac(n.route,o,i),v=n.route[e],v)g=await w(v);else{if(e==="action")throw Ht(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:Ie.data,data:void 0}}else ee(v,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),g=await w(v);ee(g!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(v){h=Ie.error,g=v}finally{y&&t.signal.removeEventListener("abort",y)}if(fv(g)){let v=g.status;if(ev.has(v)){let m=g.headers.get("Location");if(ee(m,"Redirects returned/thrown from loaders/actions must have a Location header"),Nh.test(m)){if(!l){let k=new URL(t.url),$=m.startsWith("//")?new URL(k.protocol+m):new URL(m),N=Ji($.pathname,a)!=null;$.origin===k.origin&&N&&(m=$.pathname+$.search+$.hash)}}else{let k=r.slice(0,r.indexOf(n)+1),$=Fa(k).map(T=>T.pathnameBase),N=Wu(m,$,new URL(t.url).pathname);if(ee(sn(N),"Unable to resolve redirect location: "+m),a){let T=N.pathname;N.pathname=T==="/"?a:nn([a,T])}m=sn(N)}if(l)throw g.headers.set("Location",m),g;return{type:Ie.redirect,status:v,location:m,revalidate:g.headers.get("X-Remix-Revalidate")!==null}}if(u)throw{type:h||Ie.data,response:g};let p,f=g.headers.get("Content-Type");return f&&/\bapplication\/json\b/.test(f)?p=await g.json():p=await g.text(),h===Ie.error?{type:h,error:new Qu(v,g.statusText,p),headers:g.headers}:{type:Ie.data,data:p,statusCode:g.status,headers:g.headers}}if(h===Ie.error)return{type:h,error:g};if(cv(g)){var E,S;return{type:Ie.deferred,deferredData:g,statusCode:(E=g.init)==null?void 0:E.status,headers:((S=g.init)==null?void 0:S.headers)&&new Headers(g.init.headers)}}return{type:Ie.data,data:g}}function ri(e,t,n,r){let i=e.createURL(zh(t)).toString(),o={signal:n};if(r&&Zt(r.formMethod)){let{formMethod:a,formEncType:l,formData:u}=r;o.method=a.toUpperCase(),o.body=l==="application/x-www-form-urlencoded"?Ih(u):u}return new Request(i,o)}function Ih(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function uv(e,t,n,r,i){let o={},a=null,l,u=!1,d={};return n.forEach((h,g)=>{let y=t[g].route.id;if(ee(!Pr(h),"Cannot handle redirect results in processLoaderData"),yi(h)){let w=kr(e,y),E=h.error;r&&(E=Object.values(r)[0],r=void 0),a=a||{},a[w.route.id]==null&&(a[w.route.id]=E),o[y]=void 0,u||(u=!0,l=Oh(h.error)?h.error.status:500),h.headers&&(d[y]=h.headers)}else Vn(h)?(i.set(y,h.deferredData),o[y]=h.deferredData.data):o[y]=h.data,h.statusCode!=null&&h.statusCode!==200&&!u&&(l=h.statusCode),h.headers&&(d[y]=h.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:d}}function $c(e,t,n,r,i,o,a,l){let{loaderData:u,errors:d}=uv(t,n,r,i,l);for(let h=0;h<o.length;h++){let{key:g,match:y}=o[h];ee(a!==void 0&&a[h]!==void 0,"Did not find corresponding fetcher result");let w=a[h];if(yi(w)){let E=kr(e.matches,y==null?void 0:y.route.id);d&&d[E.route.id]||(d=oe({},d,{[E.route.id]:w.error})),e.fetchers.delete(g)}else if(Pr(w))ee(!1,"Unhandled fetcher revalidation redirect");else if(Vn(w))ee(!1,"Unhandled fetcher deferred data");else{let E={state:"idle",data:w.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(g,E)}}return{loaderData:u,errors:d}}function Rc(e,t,n,r){let i=oe({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function kr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function bc(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ht(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Qu(e||500,a,new Error(l),!0)}function Pc(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Pr(n))return n}}function zh(e){let t=typeof e=="string"?dn(e):e;return sn(oe({},t,{hash:""}))}function dv(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Vn(e){return e.type===Ie.deferred}function yi(e){return e.type===Ie.error}function Pr(e){return(e&&e.type)===Ie.redirect}function cv(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function fv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function pv(e){return q1.has(e.toLowerCase())}function Zt(e){return Z1.has(e.toLowerCase())}async function Dc(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],u=t[a];if(!u)continue;let d=e.find(g=>g.route.id===u.route.id),h=d!=null&&!Mh(d,u)&&(o&&o[u.route.id])!==void 0;Vn(l)&&(i||h)&&await _h(l,r,i).then(g=>{g&&(n[a]=g||n[a])})}}async function _h(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ie.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Ie.error,error:i}}return{type:Ie.data,data:e.deferredData.data}}}function Fh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Oc(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Hs(e,t){let n=typeof t=="string"?dn(t).search:t.search;if(e[e.length-1].route.index&&Fh(n||""))return e[e.length-1];let r=Fa(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const mv=typeof Object.is=="function"?Object.is:hv,{useState:gv,useEffect:vv,useLayoutEffect:xv,useDebugValue:yv}=Bl;function wv(e,t,n){const r=t(),[{inst:i},o]=gv({inst:{value:r,getSnapshot:t}});return xv(()=>{i.value=r,i.getSnapshot=t,Cl(i)&&o({inst:i})},[e,r,t]),vv(()=>(Cl(i)&&o({inst:i}),e(()=>{Cl(i)&&o({inst:i})})),[e]),yv(r),r}function Cl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!mv(n,r)}catch{return!0}}function Sv(e,t,n){return t()}const kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ev=!kv,Cv=Ev?Sv:wv,Av="useSyncExternalStore"in Bl?(e=>e.useSyncExternalStore)(Bl):Cv,Yu=P.createContext(null),Ku=P.createContext(null),Gi=P.createContext(null),ja=P.createContext(null),Hr=P.createContext({outlet:null,matches:[]}),jh=P.createContext(null);function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vs.apply(this,arguments)}function $v(e,t){let{relative:n}=t===void 0?{}:t;Wi()||ee(!1);let{basename:r,navigator:i}=P.useContext(Gi),{hash:o,pathname:a,search:l}=Bh(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:nn([r,a])),i.createHref({pathname:u,search:l,hash:o})}function Wi(){return P.useContext(ja)!=null}function Ua(){return Wi()||ee(!1),P.useContext(ja).location}function Uh(){Wi()||ee(!1);let{basename:e,navigator:t}=P.useContext(Gi),{matches:n}=P.useContext(Hr),{pathname:r}=Ua(),i=JSON.stringify(Fa(n).map(l=>l.pathnameBase)),o=P.useRef(!1);return P.useEffect(()=>{o.current=!0}),P.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=Wu(l,JSON.parse(i),r,u.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:nn([e,d.pathname])),(u.replace?t.replace:t.push)(d,u.state,u)},[e,t,i,r])}function Bh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=P.useContext(Hr),{pathname:i}=Ua(),o=JSON.stringify(Fa(r).map(a=>a.pathnameBase));return P.useMemo(()=>Wu(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Rv(e,t){Wi()||ee(!1);let{navigator:n}=P.useContext(Gi),r=P.useContext(Ku),{matches:i}=P.useContext(Hr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ua(),d;if(t){var h;let S=typeof t=="string"?dn(t):t;l==="/"||(h=S.pathname)!=null&&h.startsWith(l)||ee(!1),d=S}else d=u;let g=d.pathname||"/",y=l==="/"?g:g.slice(l.length)||"/",w=Sr(e,{pathname:y}),E=Ov(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:nn([l,n.encodeLocation?n.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:nn([l,n.encodeLocation?n.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,r||void 0);return t&&E?P.createElement(ja.Provider,{value:{location:Vs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Le.Pop}},E):E}function bv(){let e=Mv(),t=Oh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,o)}class Pv extends P.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(Hr.Provider,{value:this.props.routeContext},P.createElement(jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dv(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(Yu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Hr.Provider,{value:t},r)}function Ov(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||ee(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let u=a.route.id?i==null?void 0:i[a.route.id]:null,d=null;n&&(a.route.ErrorBoundary?d=P.createElement(a.route.ErrorBoundary,null):a.route.errorElement?d=a.route.errorElement:d=P.createElement(bv,null));let h=t.concat(r.slice(0,l+1)),g=()=>{let y=o;return u?y=d:a.route.Component?y=P.createElement(a.route.Component,null):a.route.element&&(y=a.route.element),P.createElement(Dv,{match:a,routeContext:{outlet:o,matches:h},children:y})};return n&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?P.createElement(Pv,{location:n.location,component:d,error:u,children:g(),routeContext:{outlet:null,matches:h}}):g()},null)}var Lc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Lc||(Lc={}));var ca;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ca||(ca={}));function Lv(e){let t=P.useContext(Ku);return t||ee(!1),t}function Nv(e){let t=P.useContext(Hr);return t||ee(!1),t}function Tv(e){let t=Nv(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function Mv(){var e;let t=P.useContext(jh),n=Lv(ca.UseRouteError),r=Tv(ca.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Iv(e){let{fallbackElement:t,router:n}=e,r=P.useCallback(()=>n.state,[n]),i=Av(n.subscribe,r,r),o=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:u=>n.navigate(u),push:(u,d,h)=>n.navigate(u,{state:d,preventScrollReset:h==null?void 0:h.preventScrollReset}),replace:(u,d,h)=>n.navigate(u,{replace:!0,state:d,preventScrollReset:h==null?void 0:h.preventScrollReset})}),[n]),a=n.basename||"/",l=P.useMemo(()=>({router:n,navigator:o,static:!1,basename:a}),[n,o,a]);return P.createElement(P.Fragment,null,P.createElement(Yu.Provider,{value:l},P.createElement(Ku.Provider,{value:i},P.createElement(_v,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?P.createElement(Fv,null):t))),null)}function zv(e){ee(!1)}function _v(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Le.Pop,navigator:o,static:a=!1}=e;Wi()&&ee(!1);let l=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=dn(r));let{pathname:d="/",search:h="",hash:g="",state:y=null,key:w="default"}=r,E=P.useMemo(()=>{let S=Ji(d,l);return S==null?null:{location:{pathname:S,search:h,hash:g,state:y,key:w},navigationType:i}},[l,d,h,g,y,w,i]);return E==null?null:P.createElement(Gi.Provider,{value:u},P.createElement(ja.Provider,{children:n,value:E}))}function Fv(e){let{children:t,location:n}=e,r=P.useContext(Yu),i=r&&!t?r.router.routes:Js(t);return Rv(i,n)}var Nc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Nc||(Nc={}));new Promise(()=>{});function Js(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let o=[...t,i];if(r.type===P.Fragment){n.push.apply(n,Js(r.props.children,o));return}r.type!==zv&&ee(!1),!r.props.index||!r.props.children||ee(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Js(r.props.children,o)),n.push(a)}),n}function jv(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}function Uv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Bv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Hv(e,t){return e.button===0&&(!t||t==="_self")&&!Bv(e)}const Vv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Jv(e,t){return ov({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:R1({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Gv(),routes:e,detectErrorBoundary:jv}).initialize()}function Gv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=fa({},t,{errors:Wv(t.errors)})),t}function Wv(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Qu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const Qv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hh=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:u,to:d,preventScrollReset:h}=t,g=Uv(t,Vv),{basename:y}=P.useContext(Gi),w,E=!1;if(typeof d=="string"&&Yv.test(d)&&(w=d,Qv)){let f=new URL(window.location.href),m=d.startsWith("//")?new URL(f.protocol+d):new URL(d),k=Ji(m.pathname,y);m.origin===f.origin&&k!=null?d=k+m.search+m.hash:E=!0}let S=$v(d,{relative:i}),v=Kv(d,{replace:a,state:l,target:u,preventScrollReset:h,relative:i});function p(f){r&&r(f),f.defaultPrevented||v(f)}return P.createElement("a",fa({},g,{href:w||S,onClick:E||o?r:p,ref:n,target:u}))});var Tc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Tc||(Tc={}));var Mc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mc||(Mc={}));function Kv(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Uh(),u=Ua(),d=Bh(e,{relative:a});return P.useCallback(h=>{if(Hv(h,n)){h.preventDefault();let g=r!==void 0?r:sn(u)===sn(d);l(e,{replace:g,state:i,preventScrollReset:o,relative:a})}},[u,l,d,r,i,n,e,o,a])}const Zv=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Xv="/Nanofab-Project/assets/microscopio-02614e2c.svg",qv="/Nanofab-Project/assets/mol-3565b3ed.svg",s={mobile:"390px",largeMobile:"391px",tablet:"819px",notebook:"1023px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},ex=x.div`
  width: 100%;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  background-color: #F8F8F8;
  
  overflow: hidden;

  @media screen and (max-width: ${s.mobile}) {    
    width: 100%;
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    /* width: 80%; */
  }

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {     
    /* 4k */
  }
  
`,tx=x.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    height: 10vh;
  }
  @media screen and (min-width: ${s.largeNotebook}) and (max-width: ${s.desktop}) {    
    height: 10vh;
  }
  @media screen and (min-width: ${s.desktop}) and (max-width: ${s.largeDesktop}) {  
    height: 10vh;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {  
    height: 10vh;
  }

`,nx=x.div`
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
`;const rx=x.img`
  padding-left: 15px;
  width: 150px;

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    width: 400px;
  }
`,ix="/Nanofab-Project/assets/nanofab-c5546f6e.png",ox="/Nanofab-Project/assets/background-1f899db0.svg",ax=x.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${ox});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`,lx=x.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${s.mobile}) {
    flex-direction: column;
  }

  @media screen and (min-width: 390px) and (max-width: ${s.largeMobile}) {
    flex-direction: column;
  }
  
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px ) {
    flex-direction: row;
  }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    width: 60%;
  }
`,sx=x.img`
  width: 20%;

  @media screen and (max-width: ${s.mobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 390px) and (max-width: ${s.largeMobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${s.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${s.largeNotebook}) and (max-width: ${s.desktop}) {
    width: 400px;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${s.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,ux=x.img`
  width: 20%;

  @media screen and (max-width: ${s.mobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 390px) and (max-width: ${s.largeMobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${s.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${s.largeNotebook}) and (max-width: ${s.desktop}) {
    width: 500px;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${s.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,dx=x.img`
  width: 30%;
  margin-left: 17%;

  @media screen and (max-width: ${s.mobile}) {
    width: 80%;
  }

  @media screen and (min-width: 390px) and (max-width: ${s.largeMobile}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: ${s.tablet}) {
    width: 35%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
    width: 40%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    width: 30%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${s.largeNotebook}) and (max-width: ${s.desktop}) {
    width: 25%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    width: 35%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${s.extraLargeDesktop}) {
    width: 35%;
  }

  border-radius: 10px;
`,cx=x.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,fx=x.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,px=x.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,hx="/Nanofab-Project/assets/logo-uerj-a13c7853.png",mx="/Nanofab-Project/assets/nanofab-lab-8dc5e917.png",gx="/Nanofab-Project/assets/LogoPPGEM-white-fd88f51e.png",vx=({})=>c(ax,{children:b(lx,{children:[c(cx,{children:c(dx,{src:hx})}),c(fx,{children:c(ux,{src:mx})}),c(px,{children:c(sx,{src:gx})})]})}),xx=x.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 1299px) {    
    display: none;
  }
`,yx=x.a`
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
`,wx=x(Hh)`
  font-family: "Maven Pro";
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.title};
  
    // @media screen and (min-width: ${s.largeNotebook}) and (max-width: ${s.desktop}) {    
    // 
    // }

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,Sx=({name:e,url:t})=>c(yx,{children:c(wx,{to:t,children:e})}),kx=({urls:e})=>c(xx,{children:e.map(t=>c(Sx,{name:t.name,url:t.url},e.indexOf(t)))}),Ex=x.nav`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 1300px) {    
        display: none;
    }
`,or=x(Hh)`
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
`,Cx=x.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,Ax=x.nav`
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
`;var Vh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ic=tt.createContext&&tt.createContext(Vh),Pn=globalThis&&globalThis.__assign||function(){return Pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pn.apply(this,arguments)},$x=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Jh(e){return e&&e.map(function(t,n){return tt.createElement(t.tag,Pn({key:n},t.attr),Jh(t.child))})}function Qi(e){return function(t){return tt.createElement(Rx,Pn({attr:Pn({},e.attr)},t),Jh(e.child))}}function Rx(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=$x(e,["attr","size","title"]),l=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),tt.createElement("svg",Pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:Pn(Pn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&tt.createElement("title",null,o),e.children)};return Ic!==void 0?tt.createElement(Ic.Consumer,null,function(n){return t(n)}):t(Vh)}function bx(e){return Qi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(e)}function Px(e){return Qi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(e)}function Dx(e){return Qi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"}},{tag:"path",attr:{d:"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"}}]})(e)}const Ox=()=>{const[e,t]=P.useState(!1);return b(Ex,{children:[c(Cx,{onClick:()=>t(!e),children:e?c(bx,{size:40}):c(Px,{size:40})}),e?b(Ax,{children:[c(or,{to:"/",onClick:()=>t(!1),children:"Home"}),c(or,{to:"/equipe",onClick:()=>t(!1),children:"Equipe"}),c(or,{to:"/andamento",onClick:()=>t(!1),children:"Andamento"}),c(or,{to:"/submissao_projetos",onClick:()=>t(!1),children:"Submissão de Projetos"}),c(or,{to:"/publicacoes",onClick:()=>t(!1),children:"Publicações"}),c(or,{to:"/parcerias",onClick:()=>t(!1),children:"Parcerias"})]}):null]})},Lx=x.div`
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
`,Nx=x.span`
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-right: 10px;

  @media screen and (max-width: 1300px) {    
    display: none;
  }

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,Tx=x(Dx)`
  font-size: 38px;

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {     
   font-size: 48px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}){    
    font-size: 60px;   
  }
`,Mx=({})=>{const e=Uh();return b(Lx,{onClick:()=>e("/Login"),children:[c(Nx,{children:"Entrar"}),c(Tx,{})]})},Wt=({})=>b(ex,{children:[b(tx,{children:[c(Ox,{}),c(rx,{src:ix}),b(nx,{children:[c(kx,{urls:[{name:"Home",url:"/"},{name:"Equipe",url:"/equipe"},{name:"Andamento",url:"/andamento"},{name:"Submissão de Projetos",url:"/submissao_projetos"},{name:"Publicações",url:"/publicacoes"},{name:"Parcerias",url:"/parcerias"}]}),c(Mx,{})]})]}),c(vx,{})]}),Ix=x.div`
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

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,zx=x.div`
  width: 85%;
  height: 2px;
  background: ${({theme:e})=>e.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${s.mobile}) {    
    width: 50%;
  }
`,_x=x.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${s.mobile}) {    
    flex-direction: column;
  }
`,zc=x.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  text-align: center;
  color: ${({theme:e})=>e.colors.text.content};

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,Al=x.h3`
  text-align: center;
`,$l=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6%;
  text-align: center;
`,Rl=x.span`
  /* display: flex;
  flex-direction: row; */
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.content};
  width: 100%;
  text-align: center;
  
  @media screen and (max-width: ${s.mobile}){
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
  
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,Fx=x.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1%;
  margin-top: 1%;

  @media screen and (max-width: ${s.mobile}) {    
    width: 100%;
    margin-bottom: 3%;
    justify-content: center;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {      
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
`,jx=x.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;

  @media screen and (max-width: ${s.mobile}) {
    flex-direction: column;
    align-items: center;
  }
  
  @media screen and (min-width: 390px) and (max-width: ${s.largeMobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {      
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  } 

  @media screen and (min-width: 700px) and (max-width: 900px) {      
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,Qt=({})=>b(Ix,{children:[c(Fx,{children:b(jx,{children:[b($l,{children:[c(Al,{children:"Endereço"}),c(Rl,{children:"Rua São Franscisco Xavier - 3107f - Maracanã, Rio de Janeiro"})]}),b($l,{children:[c(Al,{children:"Email"}),c(Rl,{children:"adsad@gmail.com"})]}),b($l,{children:[c(Al,{children:"Funcionamento"}),c(Rl,{children:"Segunda a sexta Xhrs às Yhrs"})]})]})}),c(zx,{}),b(_x,{children:[c(zc,{children:"Ⓒ Serra Jr. Engenharia 2022"}),c(zc,{children:"Todos os direitos reservados"})]})]}),Ux=x.div`
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

  @media screen and (max-width: ${s.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%;
    }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {    
      display: flex;
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;
      padding: 10px;
      margin-top: 15%;
  }
  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {    
      display: flex;
      width: 85%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 12%;
      margin-bottom: 5%;
      padding: 10px;
  }
  @media screen and (min-width: ${s.extraLargeDesktop}) {    
      padding: 60px;
  }

`,Bx=x.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${s.mobile}) {    
      width: 100%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {    
      width: 90%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {    
      width: 90%;
      padding: 10px 10px;
  }
`,Hx=x.span`
  margin: 10px 20px 5px 20px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  text-align: justify;

  /* @media screen and (max-width: ${s.mobile}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {    
    text-align: justify;
  } */

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
    
  }
`,Vx=x.div`
  position: absolute;
  top: -70px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${s.mobile}) {
    top: -5px;
    left: -5px;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  }
`,Jx=x.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${s.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
`,Gx="/Nanofab-Project/assets/chemistry-7542d245.png",Wx=({})=>c(Vx,{children:c(Jx,{src:Gx})}),Qx=x.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6%;

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {    
    padding-top: 0px;
  }
`,Yx=x.span`
  font-weight: bold;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${s.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,Kx=({title:e})=>c(Qx,{children:c(Yx,{children:e})}),Zx=({descriptions:e})=>b(Ux,{children:[c(Wx,{}),c(Kx,{title:"Sobre o NANOFAB"}),c(Bx,{children:e.map(t=>c(Hx,{children:t.text},e.indexOf(t)))})]}),Xx=x.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    @media screen and (max-width: ${s.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 10%;
    }
    @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {    
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
    @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {   
        display: flex;
        width: 85%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
        margin-top: 2%;
  }

    @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
        width: 90%;
    }
`,qx=x.div`
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

  @media screen and (max-width: ${s.mobile}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {   
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    text-align: left;
  }

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {   
    padding: 1%;
  }
`,ey=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;
  margin-top: 5%;
`,ty=x.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`,ny=x.span`
  margin: 10px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  padding: 20px;
  text-align: justify;

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${s.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,ry=x.span`
  margin: 20px;
  font-weight: bold;
  line-height: 30px;
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;
  margin-top: 90px;

  @media screen and (max-width: ${s.mobile}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {   
    margin-bottom: 0px;
    margin: 10px;
    margin-top: 100px;
  }
  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
  }
`,iy=({image:e,title:t,text:n})=>b(qx,{children:[c(ey,{children:c(ty,{src:e,alt:t})}),c(ry,{children:t}),c(ny,{children:n})]}),oy=({cards:e})=>c(Xx,{children:e.map(t=>c(iy,{image:t.image,title:t.title,text:t.text},e.indexOf(t)))}),ay=({})=>b(Zv,{children:[c(Wt,{}),c(Zx,{descriptions:[{text:"O Laboratório Multiusuário de Nanofabricação e Caracterização de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduação em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisição de um microscópio eletrônico de alta resolução do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existência de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperação. Nesse contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. Além disso, o NANOFAB atenderá demandas na área de nanofabricação com a aquisição de um microscópio FIB (Focused Ion Beam), a partir de recursos aprovados no Edital FAPERJ 2015, Grandes Equipamentos."},{text:"O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. O microscópio FIB também permitirá a preparação de amostras para microscopia eletrônica de transmissão."},{text:"O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geração de hidrogênio, revestimentos de aços e compósitos."}]}),c(oy,{cards:[{image:qv,title:"Coordenação e Comitê Gestor",text:"O NANOFAB é coordenado pelo prof. Norberto Mangiavacchi (UERJ) e tem como vice-coordenador o prof. Eduardo de Albuquerque Brocchi (PUC-Rio). O Comitê Gestor do NANOFAB é composto por três membros, eleitos a cada dois anos. Para o Biênio 2016-2018, o Comitê Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET) e Rogério Navarro Correia de Siqueira (PUC-Rio)."},{image:Xv,title:"Unidades e Programas Envolvidos / Projetos de Pesquisa",text:"Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química da UERJ) e Instituto de Física da UERJ."}]}),c(Qt,{})]}),ly=x.div`
  width: 100%;
`,sy=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`,uy=x.div`

`,dy=x.img`
  height: 120px;
  @media screen and (max-width: ${s.mobile}) {
    height: 80px;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    height: 100px;
  }

  @media screen and (min-width: 700px) and (max-width: 821px) {
    height: 100px;
  }
`,cy=x.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  margin-bottom: 20px;

  @media screen and (max-width: ${s.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
`,fy=x.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    border-radius: 40px;
    
    @media screen and (max-width: ${s.mobile}) {
        width: 90%;
    }  
    
    @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
        width: 90%;
    }
`,py=x.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (max-width: ${s.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${s.tablet}) and (max-width: 1025px) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${s.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,hy=x.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #d5d4d4;
`,my=x.div`
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
`,gy=x.div`
    width: 40%;
    margin: 10px;

    @media screen and (max-width: ${s.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${s.largeMobile}) {    
        width: 70%;
    }
`,vy=x.button`    
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
`,xy=x.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;
    flex-wrap: wrap;

    @media screen and (max-width: ${s.mobile}) {   
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
    
`,bl=x.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    flex: 1
`,Pl=x.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`,yy=x.span`
    font-size: ${({theme:e})=>e.fonts.small}px;
    color: ${({theme:e})=>e.colors.text.title};
    text-align: left;
`,Dl=x.span`

`;function Gh(e){return Qi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 14l-4-4h8z"}}]}]})(e)}function Wh(e){return Qi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10l4 4H8z"}}]}]})(e)}const wy=({name:e,unit:t,bond:n,titration:r})=>{const[i,o]=P.useState(!1);return b(gy,{children:[b(vy,{onClick:()=>o(!i),isVisible:i,children:[c(yy,{children:e}),i?c(Wh,{size:20}):c(Gh,{size:20})]}),i?b(xy,{isVisible:i,children:[b(bl,{children:[c(Pl,{children:"PPG/IES"}),c(Dl,{children:t})]}),b(bl,{children:[c(Pl,{children:"Vínculo"}),c(Dl,{children:n})]}),b(bl,{children:[c(Pl,{children:"Titulação"}),c(Dl,{children:r})]})]}):null]})},Sy=({title:e,persons:t})=>b(fy,{children:[c(hy,{children:c(py,{children:e})}),c(my,{children:t.map(n=>c(wy,{name:n.name,bond:n.bond,titration:n.titration,unit:n.unit},t.indexOf(n)))})]}),ky="/Nanofab-Project/assets/team-2f83bf5a.png",Ey=({list:e})=>b(sy,{children:[c(uy,{children:c(dy,{src:ky})}),c(cy,{children:"Equipe"}),e.map(t=>c(Sy,{title:t.personFunction,persons:t.persons},e.indexOf(t)))]}),Cy=({})=>b(ly,{children:[c(Wt,{}),c(Ey,{list:[{personFunction:"Comitê Gestor",persons:[{name:"José Brant de Campos",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE "},{name:"Noberto Mangiavacchi",unit:"UERJ",bond:"Permanente",titration:"Doutor"},{name:"Hector Reynaldo Meneses",unit:"CEFET-RJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rogério Navarro Correia de Siqueira",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Suzana Bottega Peripolli",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]},{personFunction:"Equipe NANOFAB",persons:[{name:"Maybi Fálker Sampaio",unit:"NANOFAB/UERJ",bond:"Bolsista QUALITEC/UERJ",titration:"Doutor"},{name:"Kellen Venâncio dos Santos",unit:"NANOFAB/UERJ",bond:"Bolsista TCT/FAPERJ",titration:"Engenheira"},{name:"Camila Alves Pelicarto Silva",unit:"NANOFAB/UERJ",bond:"Bolsista PROATEC/UERJ",titration:"Engenheira"}]},{personFunction:"Comitê de Usuários",persons:[{name:"Lilian Pantoja Sosman",unit:"IF - PPGF/UERJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Ivana Lourenço de Mello Ferreira",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilia Garcia Diniz",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José Ricardo Muniz Ferreira",unit:"Empresa R-CRio",bond:"Sócio",titration:"Doutor"}]},{personFunction:"Pesquisador",persons:[{name:"Eduardo de Albuquerque Brocchi",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 1C, CNE"},{name:"José Guilherme Santos Silva",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1B, CNE"},{name:"Luciano Rodrigues Ornelas de Lima",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1D, CNE"},{name:"Marcos Antonio da Silva Costa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Nakédia Maysa Freitas Carvalho",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE"},{name:"Francisco José Moura",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rodrigo Fernandes Magalhães de Souza",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eric Cardona Romani",unit:"SENAI",bond:"Permanente",titration:"Doutor"},{name:"Jorge Luis do Amaral",unit:"PPG-EL/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilza Sampaio Aguilar",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Daniel José Naid Mansur Chalhub",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José da Rocha Miranda Pontes",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Ana Maria Furtado de Sousa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Jaqueline Dias Senra",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Juliana Fonseca de Lima",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Herman Lima Pessoa",unit:"CBPF",bond:"Permanente",titration:"Doutor"},{name:"Letícia Aguilera dos Santos",unit:"IPRJ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Cecilia Vilani",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Celio Albano da Costa",unit:"UFRJ",bond:"Permanente",titration:"Doutor"},{name:"José Luis Lopes da Silveira",unit:"UFRJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eduardo Sousa Lima",unit:"IME",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eustáquio de Souza Baêta Junior",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]}]}),c(Qt,{})]}),Ay=x.div`
  width: 100%;
`,$y=x.div`
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
`,Ry=x.h1`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;


  @media screen and (min-width: ${s.desktop}) and (max-width: ${s.largeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*3.5}px;
  }
`,by=x.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
`,Py=x.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`,Dy=x.div`
  margin-top: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;

  @media screen and (max-width: ${s.mobile}) {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    width: 100%;
    margin-top: 20px;
  }
`,_c=x.button`
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

   @media screen and (max-width: ${s.mobile}) {
     width: 50%;
   }

   @media screen and (min-width: 390px) and (max-width: ${s.largeMobile}) {
     width: 50%;
   }

   @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
     width: 50%;
   }

   @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
     width: 50%;
   }

   @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
     width: 60%;
   }

   @media screen and (min-width: ${s.extraLargeDesktop}) {
     width: 30%;
     font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
   }
   @media screen and (min-width: ${s.desktop}) and (max-width: ${s.largeDesktop}) {
     width: 30%;
     font-size: ${({theme:e})=>e.fonts.extralarge}px;
   }
`,Oy=x.div`
  width: 50%;
  margin-bottom: 3%;
  margin-right: 50%;
`,Ly=x.h2`
  font-size: ${({theme:e})=>e.fonts.large}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

   @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
     font-size: ${({theme:e})=>e.fonts.large}px;
   }

   @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
     font-size: ${({theme:e})=>e.fonts.extralarge}px;
   }

   @media screen and (min-width: ${s.desktop}) and (max-width: ${s.largeDesktop}) {
     font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
   }

   @media screen and (min-width: ${s.extraLargeDesktop}) {
     font-size: ${({theme:e})=>e.fonts.extralarge*2.5}px;
   }
`,Ny=x.select`
  width: 25%;
  border-radius: 10px;
  margin-right: 20px;
  padding: 0.5%;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fonts.small}px;

  @media screen and (max-width: ${s.mobile}) {
    width: 100%;
    margin-right: 6px;
  }

  @media screen and (min-width: 390px) and (max-width: ${s.largeMobile}) {
    width: 100%;
    margin-right: 5px;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    width: 100%;
    margin-right: 6px;
  }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
    width: 100%;
    margin-right: 10px;
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    width: 100%;
    margin-right: 10px;
  }

  @media screen and (min-width: ${s.desktop}) and (max-width: ${s.largeDesktop}) {
    width: 30%;
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    width: 35%;
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
`;x.option`
  font-size: ${({theme:e})=>e.fonts.large}px;
`;const Ty=x.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  width: 100%;
`,My=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
`,Iy=x.div`
    width: 100%;
    display: flex;
    background-color: #D5D4D4;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`,zy=x.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin: 5px;
    font-weight: bold;

    margin-left: 10px;
`,_y=x.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
`,Fy=x.span`
    text-align: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ${({status:e})=>{if(e==="Aprovado")return"background-color: rgba(48, 212, 111, 0.7);";if(e==="Solicitado")return"background-color: rgba(255, 204, 92, 0.7);";if(e==="Cancelado")return"background-color: rgba(255, 111, 105, 0.7);"}}
`,Ol=x.span`
    margin: 10px;
`,jy=({name:e,institution:t,startDate:n,endDate:r,samples:i,situation:o})=>b(My,{children:[c(Iy,{children:b(zy,{children:[e," - ",t]})}),b(_y,{children:[b(Ol,{children:["Data de Solicitação: ",n]}),b(Ol,{children:["Data Final: ",r||"Não informado"]}),b(Ol,{children:["Quantidade de Amostras: ",i]})]}),c(Fy,{status:o,children:o})]}),Uy=({list:e})=>{const[t,n]=P.useState(0),[r,i]=P.useState(9),[o,a]=P.useState("Todos");P.useState([]);const[l,u]=P.useState([]);P.useEffect(()=>{const w=[];e.forEach(E=>{(o==="Todos"||E.situation===o)&&w.push(E)}),u(w)},[e,o]);const d=()=>{t===9?(n(t),i(r)):(n(t+9),i(r+9))},h=()=>{t===0?(n(0),i(9)):(n(t-9),i(r-9))},g=l.slice(t,r).map(w=>c(jy,{name:w.name,institution:w.institution,startDate:w.startDate,endDate:w.endDate,samples:w.samples,situation:w.situation},e.indexOf(w)));function y(w){w.target.value==="Todos"?a("Todos"):w.target.value==="Aprovado"?a("Aprovado"):w.target.value==="Agendado"?a("Agendado"):w.target.value==="Solicitado"?a("Solicitado"):w.target.value==="Antigos"&&a("Antigos")}return b(by,{children:[b(Oy,{children:[c(Ly,{children:"Filtro"}),c(Ty,{children:b(Ny,{onChange:w=>y(w),children:[c("option",{value:"Todos",children:"Todos"}),c("option",{value:"Aprovado",children:"Aprovado"}),c("option",{value:"Agendado",children:"Agendado"}),c("option",{value:"Solicitado",children:"Solicitado"}),c("option",{value:"Antigos",children:"Antigos"})]})})]}),c(Py,{children:g}),b(Dy,{children:[c(_c,{onClick:h,children:"Anterior"}),c(_c,{onClick:d,children:"Próxima"})]})]})},By=({})=>b($y,{children:[c(Ry,{children:"Lista de Solitações"}),c(Uy,{list:[{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Cancelado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Antigos"}]})]}),Hy=({})=>b(Ay,{children:[c(Wt,{}),c(By,{}),c(Qt,{})]}),Vy=x.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`,Jy=x.div`
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

  @media screen and (max-width: ${s.mobile}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }
`,Gy=x.div`
  position: absolute;
  top: -50px;
  right: -50px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${s.mobile}) {
    right: calc(100vw / 3);
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    right: calc(100vw / 3);
  }
  /*
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  } */
`,Wy=x.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${s.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
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

  @media screen and (max-width: ${s.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }
`;const Qy=x.div`
  width: 100%;
  padding: 5%;
  padding-left: 3.5%;
  padding-bottom: 0;

`,ii=x.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${s.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,Ba=x.input`
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
    
    @media screen and (max-width: ${s.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`;x.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
    `;const mo=x.input`
    height: 15px;
    width: 15px;
`,go=x.label`
  margin-left: 5px;
  font-family: "Maven Pro";
  `,vo=x.div`
  display: flex;
  
  flex-direction: row;
  margin: 5px;
  `,Ll=x.div`
  margin-bottom: 3%;
  margin-top: 3%;
  `,Yy=x(Ba)`

`,Ky=x(Ba)`

`,Zy=x(Ba)`

`,Ha=x.div`
    margin-bottom: 3%;
`;x(Ha)`

`;x(Ha)`

`;x(Ha)`

`;const Xy=({formData:e,setFormData:t})=>b(Qy,{children:[b(Ha,{children:[c(ii,{children:"Orientador:"}),c(Ba,{type:"text",name:"orientador",value:e.orientador,onChange:n=>t({...e,orientador:n.target.value}),placeholder:"(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"})]}),c(ii,{children:"Tipos:"}),b(vo,{children:[c(mo,{type:"checkbox",value:"1"}),c(go,{children:"Microscopia de Varredura de Alta Resolução (MEV-FEG)"})]}),b(vo,{children:[c(mo,{type:"checkbox",value:"1"}),c(go,{children:"Microscopia por Feixe de Íons Focalizado"})]}),b(vo,{children:[c(mo,{type:"checkbox",value:"1"}),c(go,{children:"Textura"})]}),b(vo,{children:[c(mo,{type:"checkbox",value:"1"}),c(go,{children:"Difração de Raios-x"})]}),b(Ll,{children:[c(ii,{children:"Outros:"}),c(Yy,{type:"text",name:"outros",value:e.outros,onChange:n=>t({...e,outros:n.target.value}),placeholder:"Informar nome."})]}),b(Ll,{children:[c(ii,{children:"Detectores:"}),c(Ky,{type:"text",name:"outros",value:e.detectores,onChange:n=>t({...e,detectores:n.target.value}),placeholder:"[TEMP] Informar detectores."})]}),b(Ll,{children:[c(ii,{children:"Projeto Científico e Descrição das Amostras:"}),c(Zy,{type:"text",name:"outros",value:e.projeto_descricao_amostras,onChange:n=>t({...e,projeto_descricao_amostras:n.target.value}),placeholder:"[TEMP] Informar Projeto Científico e Descrição das Amostras:."})]})]}),qy=x.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,ew=x.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
    
    @media screen and (max-width: ${s.mobile}) {    
        width: 80%;
        margin-bottom: 5%;
    }
    @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {   
        width: 80%;
        margin-bottom: 5%;
    }
    `,Fc=x.button`
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

    @media screen and (max-width: ${s.mobile}) {    
        width: 40%;
        height: 5vh;
    }

    @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {   
        width: 40%;
    }

    `,tw=({})=>c(qy,{children:b(ew,{children:[c(Fc,{children:"Apagar"}),c(Fc,{type:"submit",children:"Enviar"})]})}),nw=x.div`
    width: 100%;
    margin-bottom: 3%;

`,Nl=x.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${s.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,rw=x.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
`,jc=x.section`
    width: 30%;
`,Uc=x.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    margin: 3%;
    margin-left: 0px;
`,Bc=x.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,Hc=x.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,iw=x.input`
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
    
    @media screen and (max-width: ${s.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,ow=x.div`
  margin-bottom: 3%;
`,aw=x.input`
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
    
    @media screen and (max-width: ${s.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,lw=({formData:e,setFormData:t})=>b(nw,{children:[b(rw,{children:[b(jc,{children:[c(Nl,{children:"Tipo de Análise"}),b(Uc,{children:[c(Bc,{type:"radio",id:"quantitativa",name:"analysisType",color:"red",value:"quantitativa",checked:e.analise_quantitativa,onChange:()=>t({...e,analise_quantitativa:!e.analise_quantitativa,analise_qualitativa:!e.analise_qualitativa})}),c(Hc,{htmlFor:"quantitativa",children:"Quantitativa"})]}),b(Uc,{children:[c(Bc,{type:"radio",id:"qualitativa",name:"analysisType",value:"Qualitativa",onChange:()=>t({...e,analise_qualitativa:!e.analise_qualitativa})}),c(Hc,{htmlFor:"qualitativa",children:"Qualitativa"})]})]}),b(jc,{children:[c(Nl,{children:"Qntd. de Amostras"}),c(iw,{type:"number",min:"1",value:e.quantidade_amostras,onChange:n=>t({...e,quantidade_amostras:parseInt(n.target.value)})})]})]}),b(ow,{children:[c(Nl,{children:"Técnicas de Medida e Condições de Varredura:"}),c(aw,{placeholder:"Se souber, descreva as técnicas de medida e as condições de carredura."})]})]}),sw=x.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5%;
    padding-left: 0.9%;
    padding-top: 0;
`,Vc=x.div`
    width: 45%;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    
`,Jc=x.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
`,Ut=x.input`
    width: 90%;
    height: 40px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 5px;
    margin-bottom: 10px;
    padding-left: 5%;
    
    `,uw=({formData:e,setFormData:t})=>b(sw,{children:[b(Vc,{children:[c(Jc,{children:"Identificação da(s) Amostra(s):"}),c(Ut,{type:"text",name:"sample_01"}),c(Ut,{type:"text",name:"sample_02"}),c(Ut,{type:"text",name:"sample_03"}),c(Ut,{type:"text",name:"sample_04"}),c(Ut,{type:"text",name:"sample_05"})]}),b(Vc,{children:[c(Jc,{children:"Composição Química:"}),c(Ut,{type:"text",name:"composition_01"}),c(Ut,{type:"text",name:"composition_02"}),c(Ut,{type:"text",name:"composition_03"}),c(Ut,{type:"text",name:"composition_04"}),c(Ut,{type:"text",name:"composition_05"})]})]}),dw=x.div`
  width: 100%;
  padding: 5%;
  padding-left: 3.5%;
  padding-top: 0;

`,Tl=x.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${s.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,cw=x.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
`,fw=x.h4`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;  
`,pw=x.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
`,Gc=x.section`
    width: 45%;
`,In=x.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    margin: 3%;
    margin-left: 0px;
`,zn=x.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,_n=x.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,hw=x.select`
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
    
    @media screen and (max-width: ${s.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,mw=x.option`

`,gw=x.div`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,vw=x.p`
  color: #5086B6;
`,xw=({formData:e,setFormData:t})=>{const n=["Urgente","Alta","Média","Baixa"];return b(dw,{children:[b(pw,{children:[b(Gc,{children:[c(Tl,{children:"Retornar a(s) amostra(s) analisada(s)?"}),b(In,{children:[c(zn,{type:"radio",id:"retorna_sim",name:"analysisType",value:"retorna_sim",color:"red",checked:e.retornar_amostra||!1,onChange:r=>t({...e,retornar_amostra:!0})}),c(_n,{htmlFor:"retorna_sim",children:"Sim"})]}),b(In,{children:[c(zn,{type:"radio",id:"retorna_nao",name:"analysisType",value:"retorna_nao",color:"red",checked:!e.retornar_amostra||!1,onChange:r=>t({...e,retornar_amostra:!1})}),c(_n,{htmlFor:"retorna_nao",children:"Não"})]})]}),b(Gc,{children:[c(Tl,{children:"Nível de prioridade desejada:"}),c(hw,{children:n.map(r=>c(mw,{value:r,children:r}))})]})]}),b(gw,{children:[c(Tl,{children:"Informe as condições de segurança quanto ao manuseio do material."}),c(fw,{children:"Caso a quantidade de amostras passe o número proposto, avisar antes de envia-las"}),b(cw,{children:[b(In,{children:[c(zn,{type:"radio",id:"inflamavel",name:"securityConditions",value:"inflamavel"}),c(_n,{htmlFor:"inflamavel",children:"Inflamável"})]}),b(In,{children:[c(zn,{type:"radio",id:"toxico",name:"securityConditions",value:"toxico"}),c(_n,{htmlFor:"toxico",children:"Tóxico"})]}),b(In,{children:[c(zn,{type:"radio",id:"hidroscopico",name:"securityConditions",value:"hidroscopico"}),c(_n,{htmlFor:"hidroscopico",children:"Hidroscópico"})]}),b(In,{children:[c(zn,{type:"radio",id:"radioativo",name:"securityConditions",value:"radioativo"}),c(_n,{htmlFor:"radioativo",children:"Radioativo"})]}),b(In,{children:[c(zn,{type:"radio",id:"corrosivo",name:"securityConditions",value:"corrosivo"}),c(_n,{htmlFor:"corrosivo",children:"Corrosivo"})]})]}),c(vw,{children:"(*) Caso não saiba as condições de segurança quanto ao manuseio, não é necessário selecionar os campos."})]})]})},yw="/Nanofab-Project/assets/search-1143e4ec.png",ww=({})=>{P.useState(1);const[e,t]=P.useState({orientador:"",outros:"",analise_qualitativa:!1,analise_quantitativa:!1,quantidade_amostras:1,tecnicas_condicoes:"",detectores:"",projeto_descricao_amostras:"",amostras:[{identificacao_amostra:"1",composicao_quimica:"1"},{identificacao_amostra:"2",composicao_quimica:"2"},{identificacao_amostra:"3",composicao_quimica:"3"}],retornar_amostra:!1,nivel_prioridade:"urgente",inflamavel:!1,toxico:!1,hidroscopico:!1,radioativo:!1,corrosivo:!1}),n=r=>{r.preventDefault(),console.log(e)};return P.useEffect(()=>{},[]),b(Jy,{children:[c(Gy,{children:c(Wy,{src:yw})}),b("form",{onSubmit:n,children:[c(lw,{formData:e,setFormData:t}),c(Xy,{formData:e,setFormData:t}),c(uw,{formData:e,setFormData:t}),c(xw,{formData:e,setFormData:t}),c(tw,{formData:e,setFormData:t})]})]})},Sw=({})=>b(Vy,{children:[c(Wt,{}),c(ww,{}),c(Qt,{})]}),kw=x.div`
  width: 100%;
`,Ew=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${s.mobile}) {
    margin-top: 7%;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    margin-top: 6%;
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    margin-top: 5%;
  }

  @media screen and (min-width: ${s.desktop}) and (max-width: ${s.largeDesktop}) {
    margin-top: 2%;
  }
`,Cw="/Nanofab-Project/assets/publications2-b4db6c33.svg",Aw=x.div`
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    margin-bottom: 2%;
  }
`,$w=x.div`
  /* width: 30%; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 70px; */
`,Rw=x.div`
  height: 10vh;
  padding: 35px;

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    margin-bottom: 5%;
  }
  
  @media screen and (min-width: ${s.desktop}) and (max-width: ${s.largeDesktop}) {
    margin-bottom: 10%;
    padding: 0;
  }

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {    
    padding: 0;
    margin: 0;
  }
`,bw=x.img`
  height: 150px;
  width: 150px;

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {
    height: 180px;
    width: 180px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    height: 250px;
    width: 250px;
  }
`,Pw=({url:e})=>c(Rw,{children:c(bw,{src:e})}),Dw=x.div``,Ow=x.span`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,Lw=({title:e})=>c(Dw,{children:c(Ow,{children:e})}),Qh=({title:e,image:t})=>c(Aw,{children:b($w,{children:[c(Pw,{url:t}),c(Lw,{title:e})]})}),Nw=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 50px;
`,Tw=x.div`
    width: 40%;
    margin-bottom: 10px;

    @media screen and (max-width: ${s.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${s.largeMobile}) {    
        width: 70%;
    }

    @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
        margin-bottom: 20px;
    }
`,Mw=x.button`    
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
`,Iw=x.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;

    @media screen and (max-width: ${s.mobile}) {   
        justify-content: space-between;
    }
    @media screen and (min-width: ${s.extraLargeDesktop}) {    
        padding: 30px;
    }
`;x.div`
    width: 50%;
    text-align: justify;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`;const zw=x.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${s.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {    
        min-height: 70px;
    }

`;x.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`;const _w=x.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    text-align: left;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #AE0806;

    @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge}px;
    }
    @media screen and (min-width: ${s.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.7}px;
    }
`,Fw=x.span`
    text-align: justify;

    @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
    }
    @media screen and (min-width: ${s.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
    }
`,jw=({year:e,descriptions:t})=>{const[n,r]=P.useState(!1);return b(Tw,{children:[b(Mw,{onClick:()=>r(!n),isVisible:n,children:[c(_w,{children:e}),n?c(Wh,{size:20}):c(Gh,{size:20})]}),n?c(Iw,{isVisible:n,children:t.map(i=>c(zw,{children:c(Fw,{children:i.description})}))}):null]})},Uw=({list:e})=>c(Nw,{children:e.map(t=>c(jw,{year:t.year,descriptions:t.descriptions},e.indexOf(t)))}),Bw=({})=>b(kw,{children:[c(Wt,{}),c(Qh,{title:"Publicações",image:Cw}),c(Ew,{children:c(Uw,{list:[{year:"2022",descriptions:[{description:"SILVA, ADRIEL M.; SOUZA, RODRIGO F.M.; AGUILERA, LETÍCIA S.; de Campos, José B.; BROCCHI, EDUARDO A. Upgrade of titanium content in a vanadiferous titanomagnetite waste: Design of a roast-leach route based on thermodynamics simulations. MINERALS ENGINEERING. , v.179, p.107460 - , 2022."},{description:"LIMA, EDUARDO DE SOUSA; GALL, CAMILA CATALANO; ALVES, MANUEL FELLIPE R.P.; DE CAMPOS, JOSÉ BRANT; CAMPOS, TIAGO MOREIRA BASTOS; SANTOS, CLAUDINEI DOS Development and characterization of alumina-toughened zirconia (ATZ) ceramic composites doped with a beneficiated rare-earth oxide extracted from natural ore. Journal of Materials Research and Technology-JMR&T. , v.16, p.451 - 460, 2022."}]},{year:"2021",descriptions:[{description:"MARÍN CASTAÑO, ELIANA PAOLA; CAMPOS, JOSÉ BRANT DE; SOLÓRZANO-NARANJO, IVAN GUILLERMO; BROCCHI, EDUARDO DE ALBUQUERQUE Characterization of Ternary CuNiCo Metallic Nanoparticles Produced by Hydrogen Reduction.Materials. , v.14, p.6006 - , 2021."},{description:"SAMPAIO, M.F.; MARINHO, P.R.B.; CABRUJA, E.; LOZANO, M.; LIMA JÚNIOR, H.P.; de Campos, J.B. SU- 8 processing improvement and simulating studies for a Micromegas detector fabrication.Journal of Instrumentation. , v.16, p.P08022 - P02038, 2021."},{description:"HORTA, MARLA KAROLYNE DOS SANTOS; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; WESTIN, CECÍLIA BUZATTO; NAVARRO DA ROCHA, DANIEL; CAMPOS, JOSÉ BRANT < i > In vitro</> evaluation of natural hydroxyapatite from Osteoglossum bicirrhosum fish scales for biomedical application.International Journal of Applied Ceramic Technology. , v.18, p.1930 - 1937, 2021."},{description:"MOTA, RAFAEL OLIVEIRA DA; DÓREA, MÁRCIA DE MELO; AGUILERA, LETÍCIA DOS SANTOS; ROMANI, ERIC CARDONA; COSTA, HECTOR REYNALDO MENESES; CAMPOS, JOSÉ BRANT DE AVANÇOS RECENTES NA UTILIZAÇÃO DO GRAFENO COMO ADITIVO EM POLÍMEROS / RECENT ADVANCES IN THE USE OF GRAPHENE AS AN ADDITIVE IN POLYMERS. Brazilian Journal of Development. , v.7, p.32743 - 32752, 2021."},{description:"RIBEIRO, SUZANA BARRETO NORONHA; DA VEIGA JUNIOR, VALDIR FLORÊNCIO; DE CAMPOS, JOSÉ BRANT; DOS SANTOS, JHEISON LOPES; LOPES, IAGO JOSÉ VITRAL REZENDE; DA ROCHA, DANIEL NAVARRO; DA SILVA, MARCELO HENRIQUE PRADO Influences of biosilica content from Amazonian freshwater sponge on calcium phosphates.Journal of the Australian Ceramic Society. , v.57, p.55 - 65, 2021"},{description:"Machado, Marcelo Vitor Ferreira; DE CAMPOS, JOSÉ BRANT; AGUILAR, MARILZA SAMPAIO; Ramos, Vitor Santos Mechanical and Microstructural Characterizations on Commercial and Synthesized by the Sol- Gel Method Using Chicken Egg Shells as Precursor Hydroxyapatite.South Florida Journal of Development. , v.2, p.1365 - 1374, 2021."}]},{year:"2020",descriptions:[{description:"BARROS, S. D.; DUARTE, J. P. P.; ROCHA, L. D. S.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S.; MEDEIOS, M. E.; de Campos, José B.; COSTA, M. E. H. M.; LACHTER, E. R.; SENRA, J. D.; MALTA, L. F. B. Cyclodextrin-Stabilized Palladium Nanoparticles on Ceria: Invertigation of Support Interactions and Pivotal Promotion in the Suzuki-Miyaura Reaction. ChemistrySelect. , v.5, p.7227 - 7235, 2020."},{description:"MELLO, NATHALLI M.; REGO, ARTUR S. C.; BROCCHI, EDUARDO A.; CAMPOS, JOSÉ B. DE; MOURA, FRANCISCO J.; SOUZA, RODRIGO F. M. Effect of an Alumina Supported Palladium Catalyst on the Magnesium Sulfate Decomposition Kinetics. MATERIALS RESEARCH. , v.23, p.1 - 9, 2020."},{description:"CARNEIRO, MATEUS R. D.; FREITAS, BRUNO C.; DE BARROS, IURI B.; de Campos, José B.; BASTOS, IVAN N.; COSTA, HECTOR R. M. Evaluation of adhesion of epoxy resin sealant to improve the corrosion resistance of thermal sprayed coatings. APPLIED ADHESION SCIENCE. , v.8, p.7 - 21, 2020."},{description:"HORTA, M. K. S.; Moura F.J.; AGUILAR, M. S.; WESTIN, C. B.; de Campos, J.B.; PERIPOLLI, S. B.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S. Nanostructured Hydroxyapatite from Hen's Eggshells Using Sucrose as a Template. Materials Research-Ibero-american Journal of Materials. , v.23, p.1 - 9, 2020."}]},{year:"2019",descriptions:[{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; SANTOS, JHEISON LOPES DOS; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; BARBOSA, RAFAEL MAZA; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Bioactivity of strontium-monetite coatings for biomedical applications. CERAMICS INTERNATIONAL. , v.45, p.7568 - 7579, 2019."},{description:"SILVA, LORENNA; NEVES, VINÍCIUS; RAMOS, VITOR; SILVA, RAPHAEL; CAMPOS, JOSÉ; SILVA, ALEXSANDRO; MALTA, LUIZ; SENRA, JAQUELINE Layered Double Hydroxides as Bifunctional Catalysts for the Aryl Borylation under Ligand-Free Conditions. Catalysts. , v.9, p.302 - 314, 2019."},{description:"GALVÃO, RHAUANE ALMEIDA; SANTA-CRUZ, LARISSA AGOSTINHO DE; BARRETO, PALOMA BANTIM; HORTA, MARLA KAROLYNE DOS SANTOS; ANDRADE, ANTONIO MARCOS HELGUEIRA DE; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; PERIPOLLI, SUZANA BOTTEGA; CAMPOS, JOSÉ BRANT DE; ARRUDA, ISABEL RENATA DE SOUZA; MACHADO, GIOVANNA Electrochemical single-step obtention and characterization of a biomimetic TiO <sub>2</sub> -HA NTs covered by chitosan. JOURNAL OF MATERIALS RESEARCH. , v.34, p.1 - 11, 2019."},{description:"SOUZA, RODRIGO; QUEIROZ, CARLOS; BRANT, JOSÉ; BROCCHI, EDUARDO Pyrometallurgical processing of a low copper content concentrate based on a thermodynamic assessment. MINERALS ENGINEERING. , v.130, p.156 - 164, 2019."},{description:"HORTA, MARLA; AGUILAR, MARILZA; MOURA, FRANCISCO; CAMPOS, JOSÉ; RAMOS, VITOR; QUIZUNDA, ADILSON Synthesis and characterization of green nanohydroxyapatite from hen eggshell by precipitation method. MATERIALS TODAY: PROCEEDINGS. , v.14, p.716 - 721, 2019"}]},{year:"2018",descriptions:[{description:"FERREIRA, J. R. M.; Louro, Luis Henrique Leme; COSTA, A. M.; MARCAL, R. L. S. B.; ROCHA, D. N.; BARBOSA, R. M.; de Campos, José B.; PRADO, M. H. Zinc-doped Calcium Phosphate Coating on Titanium Surface Using Ostrich Eggshell as a Ca2+ Ions Source. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."},{description:"AGUILERA, L. S.; de Campos, J.B.; de Biasi, R.S.; Figueiredo, A.B.H.S. Use of the Drag Method to Study the Magnetic Behavior of Mn-Zn Ferrite Nanoparticles. The International Journal of Engineering and Science. , v.7, p.57 - 61, 2018."},{description:"BIASI, RONALDO SERGIO DE; MELO, GABRIEL BURLANDY MOTA DE; FIGUEIREDO, ANDRÉ BEN-HUR DA SILVA; CAMARENA, MARIELLA ALZAMORA; CAMPOS, JOSÉ BRANT DE Properties of manganese ferrite-paraffin composites. Journal of Materials Research and Technology-JMR&T. , v.8, p.309 - 313, 2018."},{description:"AGUILERA, L. S.; MARCAL, R. L. S. B.; de Campos, J.B.; PRADO, M. H.; Figueiredo, A.B.H.S.MAGNETIC FILTER PRODUCED BY ZnFe2O4 NANOPARTICLES USING FREEZE CASTING. Journal of Materials Research and Technology-JMR&T. , v.7, p.350 - 355, 2018. "},{description:"ROCHA, DANIEL NAVARRO DA; SILVA, MARCELO H. PRADO DA; CAMPOS, JOSÉ BRANT DE; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; CRUZ, LEILA ROSA Kinetics of conversion of brushite coatings to hydroxyapatite in alkaline solution. Journal of Materials Research and Technology-JMR&T. , v.7, p.479 - 486, 2018."},{description:"Cabral, R.F.; de Campos, J.B.; SILVA, C. E. V.; FONSECA, G. M.; LIMA, W. N.; LIMA, E. Formação da fase YNbO4 na sinterização do compósito Alumina-YAG com Nb2O5. CADERNOS UNIFOA (IMPRESSO). , v.36, p.29 - 35, 2018."},{description:"Cabral, R.F.; PRADO DA SILVA, M.H.; Lima, E.S.; de Campos, J.B.; MAGNAGO, ROBERTO DE OLIVEIRA Evaluation of Hardness and the Fracture Toughness of Composite Biphasic Alumina-YAG. MATERIALS SCIENCE FORUM (ONLINE). , v.912, p.82 - 86, 2018."},{description:"SALEIRO, GISELE TEIXEIRA; GONÇALVES, DANILO CORREA; COSTA, CÉLIO ALBANO DA; CAMPOS, JOSÉ BRANT DE; LIMA, EDUARDO DE SOUSA COMPORTAMENTO MECÂNICO DO SIC ADITIVADO COM Al2O3 E Y2O3 PRODUZIDOS PELA SÍNTESE POR COMBUSTÃO AUTOSSUSTENTÁVEL À ALTA TEMPERATURA. TECNOLOGIA EM METALURGIA, MATERIAIS E MINERAÇÃO. , v.15, p.96 - 102, 2018."},{description:"MENDONCA, F.; COSTA, A. M.; de Campos, J.B.; MARCAL, R. L. S. B.; ROCHA, D. N.; PRADO, M. H. Bioactivity Assessment of Ag-HA. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."}]},{year:"2017",descriptions:[{description:"GONÇALVES, DANILO CORRÊA; SALEIRO, GISELE TEIXEIRA; MATIAS, PHILIPE CARDOSO; GOMES, ALAELSON VIEIRA; RAMOS, VITOR; CAMPOS, JOSÉ BRANT BRANT DE; MELO, FRANCISCO CRISTOVÃO LOURENÇO DE; LIMA, EDUARDO SOUSA Microstructural Characterization and Influence of Ceramography Method on the Microhardness of Sintering Agents Added Silicon Carbide. Materials Research-Ibero-american Journal of Materials"},{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Mg substituted apatite coating from alkali conversion of acidic calcium phosphate. Materials Science & Engineering C-Materials for Biological Applications. , v.70, p.408 - 417, 2017."},{description:"ROMANI, E. C.; LARRUDE, D. G.; NACHEZ, L.; VILANI, C.; de CAMPOS, J. B.; PERIPOLLI, S. B.; FREIRE, F. L.Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS. , v.65, p.1 - 9, 2017."},{description:"SANTOS, J. L.; MARÇAL, R. L. S. B.; JESUS, P. R. R.; GOMES, A. V.; LIMA, E. P.; MONTEIRO, S. N.; de CAMPOS, J. B.; LOURO, L. H. L.Effect of LiF as Sintering Agent on the Densification and Phase Formation in Al2O3-4 Wt Pct Nb2O5 Ceramic Compound. METALLURGICAL AND MATERIALS TRANSACTIONS A-PHYSICAL METALLURGY AND MATERIALS SCIENCE. , v.48, p.4432 - 4440, 2017."}]}]})}),c(Qt,{})]}),Hw=x.div`
  width: 100%;

`,Vw=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: ${s.mobile}) {    
    margin-top: 10%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    margin-top: 8%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {    
    margin-top: 7%;   
  }


  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
    margin-top: 7%;
    margin-bottom: 5%;
  }

  @media screen and (min-width: ${s.largeNotebook}) and (max-width: ${s.desktop}) {    
    margin-top: 4%;
    margin-bottom: 5%;
  }
`,Jw=x.div`
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
    @media screen and (max-width: ${s.largeDesktop}){
        height: 16%;
    }
    @media screen and (max-width: ${s.tablet}){
        height: 17%;
    }
    @media screen and (min-width: ${s.extraLargeDesktop}) {
	    height: 17%;
    }

    @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${s.largeNotebook}) and (max-width: ${s.desktop}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
        margin-top: 5%; 
    }



`,Gw=x.span`
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.content};
  text-align: center;
  margin: 10px;

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,Ww=x.div`
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
`,Qw=x.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,Yw=x.img`
    width: 120px;
    /* height: 150px; */
	margin: 0 40px;
	transition: 0.5s;
	overflow: hidden;
    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }

    @media screen and (max-width: ${s.largeMobile}) {
	    width: 150px;
        /* height: 120px; */
    }
    @media screen and (max-width: ${s.mobile}){
        width: 120px;
        /* height: 120px; */
    }
    @media screen and (min-width: ${s.desktop}) {
	    width: 180px;
    }
    @media screen and (min-width: ${s.largeDesktop}) {
	    width: 240px;
        /* height: 210px; */
    }
    @media screen and (min-width: ${s.extraLargeDesktop}) {
	    width: 300px;
        /* height: 300px; */
    }
    @media screen and (max-width: ${s.notebook}){
        width: 120px;
    }
`,Kw=({image:e,altText:t})=>c(Qw,{children:c(Yw,{src:e,alt:t})}),To="/Nanofab-Project/assets/cbpf-812298b6.jpg",Mo="/Nanofab-Project/assets/faperj-aefe040c.svg",Io="/Nanofab-Project/assets/finep-072bfec0.svg",Ml="/Nanofab-Project/assets/logoUFF-bce55271.png",Il="/Nanofab-Project/assets/ime-85233a07.jpg",zl="/Nanofab-Project/assets/pucrj-7995f7c6.jpg",_l="/Nanofab-Project/assets/UFRJ-ae0dd01b.jpg",Fl="/Nanofab-Project/assets/cefet-fb822b95.png",jl="/Nanofab-Project/assets/SerraJr-fd37bf50.svg",Zw=({})=>{const e=[{image:To,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Mo,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Io,altText:"FINEP - Agência Brasileira de Inovação"},{image:Ml,altText:"UFF - Universidade Federal Fluminense"},{image:Il,altText:"IME - Instituto Militar de Engenharia"},{image:_l,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:zl,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Fl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:jl,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:To,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Mo,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Io,altText:"FINEP - Agência Brasileira de Inovação"},{image:Ml,altText:"UFF - Universidade Federal Fluminense"},{image:Il,altText:"IME - Instituto Militar de Engenharia"},{image:_l,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:zl,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Fl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:jl,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:To,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Mo,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Io,altText:"FINEP - Agência Brasileira de Inovação"},{image:Ml,altText:"UFF - Universidade Federal Fluminense"},{image:Il,altText:"IME - Instituto Militar de Engenharia"},{image:_l,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:zl,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Fl,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:jl,altText:"Serra Jr. - Serra Júnior Engenharia"}];return b(Jw,{children:[c(Gw,{children:"Parceiros"}),c(Ww,{children:e.map(t=>c(Kw,{image:t.image,altText:t.altText},e.indexOf(t)))})]})},Xw=x.div`
  width: 100%;
  /*height: 300px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  margin-top: 5%;
  margin-bottom: 5%;
  align-self: center;

  /* @media screen and (max-width: ${s.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%; */
  @media screen and (max-width: ${s.mobile}) {
    margin-top: 10%;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media screen and (min-width: 720px) and (max-width: 770px) {
  }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${s.largeNotebook}) and (max-width: ${s.desktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${s.desktop}) and (max-width: ${s.largeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    max-width: 2500px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    max-width: 3000px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`,qw=x.div`
  width: 70%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(217, 217, 217, 0.9);
  border-radius: 150px;
  justify-content: space-around;

  @media screen and (max-width: ${s.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 20%; */
    padding-top: 5%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4%;
    padding-bottom: 15%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    border-radius: 60px;
    padding: 5%;
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    border-radius: 70px;
  }

  @media screen and (min-width: ${s.largeNotebook}) and (max-width: ${s.desktop}) {
  }

  @media screen and (min-width: ${s.desktop}) and (max-width: ${s.largeDesktop}) {
  }

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    border-radius: 100px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {
    border-radius: 200px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    border-radius: 300px;
    width: 80%;
  }
`,eS=x.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${s.mobile}) {
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    margin-bottom: 5%;
  }
`,tS=x.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${s.mobile}) {
    width: 95%;
    padding-bottom: 20%;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    width: 95%;
  }

  @media screen and (min-width: ${s.tablet}) and (max-width: ${s.notebook}) {
    width: 100%;
  }

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    width: 80%;
  }
`,nS=x.span`
  font-weight: bold;
  color: #ae0806;
  text-align: center;
  font-size: 30px;
  margin-bottom: 3%;

  @media screen and (max-width: ${s.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    font-size: 23px;
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${s.notebook}) and (max-width: ${s.largeNotebook}) {
    font-size: 23px;
  }

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    font-size: 40px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
`,rS=x.span`
  color: black;
  text-align: center;
  font-size: 18px;
  width: 80%;

  @media screen and (max-width: ${s.mobile}) {
    font-size: 16px;
    width: 100%;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {
    width: 100%;
    font-size: 20px;
  }

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    font-size: 24px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,iS=x.img`
  width: 150px;
  height: 150px;
  border: 1px solid #ae0806;
  border-radius: 150px;
  padding: 20%;
  object-fit: scale-down;
  overflow: visible;
  background-color: white;

  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  @media screen and (min-width: ${s.extraLargeDesktop}) {
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
`;const oS=({image:e,title:t,paragraph:n})=>c(Xw,{children:b(qw,{children:[c(eS,{children:c(iS,{src:e,alt:t})}),b(tS,{children:[c(nS,{children:t}),c(rS,{children:n})]})]})}),aS="/Nanofab-Project/assets/handshake-903e6074.png",lS=({})=>{const e=[{image:To,title:"Centro Brasileiro de Pesquisas Físicas - CBPF",paragraph:"O NANOFAB desenvolve parceria científica e tecnológica com o CBPF na área de Instrumentação Científica, com o desenvolvimento de dispositivos multiplicadores e elétrons (GEM-Gas Electron Multiplier) e detectores bidimensionais de raios-x a gás."},{image:Mo,title:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro",paragraph:"O NANOFAB recebe apoio da FAPERJ em projetos de infraestrutura e pesquisa como o PENSA-RIO e através de projetos em colaboração com os pesquisadores"},{image:Io,title:"FINEP - Agência Brasileira de Inovação",paragraph:"O NANOFAB participa de editais da FINEP em projetos estruturantes como o Grande Laboratórios Multiusuários e Ações Transversais."}];return b(Hw,{children:[c(Wt,{}),c(Qh,{title:"Parcerias",image:aS}),c(Vw,{children:e.map(t=>c(oS,{image:t.image,title:t.title,paragraph:t.paragraph},e.indexOf(t)))}),c(Zw,{}),c(Qt,{})]})},sS=x.div`
  width: 100%;
`,uS=x.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,dS=x.span`
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.highlight};
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.auxiliary.error.dark};
  border-radius: 20px;
`,cS=({})=>b(sS,{children:[c(Wt,{}),c(uS,{children:c(dS,{children:"Aconteceu um problema, tente novamente mais tarde"})}),c(Qt,{})]}),fS=x.div`
`,pS=x.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;x.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const hS=x.div`
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

  @media screen and (max-width: ${s.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {    
    width: 100%;
  }
`,mS=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,gS=x.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,Wc=x.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,Qc=x.input`
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
`,Yc=x.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,vS=x.button`
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
`,xS=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-beetween;
  margin-bottom: 20px;
  padding-left: 20px;
  width: 60%;
`,Kc=x.a`
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
`,yS=({})=>b(hS,{children:[c(gS,{children:"Entrar"}),b(mS,{children:[b(Yc,{children:[c(Wc,{children:"Email ou Nome de Usuário:"}),c(Qc,{placeholder:"Digite seu Email"})]}),b(Yc,{children:[c(Wc,{children:"Senha:"}),c(Qc,{type:"password",placeholder:"Digite sua senha"})]}),b(xS,{children:[c(Kc,{href:"/Nanofab-Project/login/createAccount",children:"Não tem conta? Crie uma!"}),c(Kc,{href:"/Nanofab-Project/login/RedefinePassword",children:"Esqueci minha senha"})]})]}),c(vS,{children:"Entrar"})]}),wS=({})=>b(fS,{children:[c(Wt,{}),c(pS,{children:c(yS,{})}),c(Qt,{})]}),SS=x.div`
`,kS=x.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;x.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const ES=x.div`
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
`,CS=x.h1`
color: ${({theme:e})=>e.colors.text.title};
`,Pt=x.span`
    text-align: left;
    width: 50%;
    margin-bottom: 1%;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};
    font-weight: bolder;
`,pn=x.input`
    
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
    
`,ar=x.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,Zc=x.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,lr=x.div`
  width: 45%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Ul=x.div`
  width: 30%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,AS=x.button`
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
`,Xc=x.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
`,qc=x.select`
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
`,ef=x.div`
  width: 100%;
`,tf=x.div`
  display: flex;
  justify-content: start;
  align-items: center;
`,nf=x.input`
  border: 1px solid #e8e8e8;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`,rf=x.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,$S=({})=>{const[e,t]=P.useState("");P.useState("");const[n,r]=P.useState(""),[i,o]=P.useState(""),[a,l]=P.useState(""),[u,d]=P.useState("");P.useState("");const[h,g]=P.useState(""),[y,w]=P.useState(""),[E,S]=P.useState(""),[v,p]=P.useState(""),[f,m]=P.useState(Array),[k,$]=P.useState(!1);P.useEffect(()=>{console.log(f),console.log(k)},[f,k]);const N=()=>{T()},T=()=>y!==E?(alert("Suas senhas são diferentes. Tente novamente."),w(""),S(""),!1):($(!0),!0);function O(U){(U.target.value===""||U.target.value===""||U.target.value===""||U.target.value===""||U.target.value==="")&&p("")}return b(ES,{children:[c(CS,{children:"Registrar-se"}),b(ar,{children:[b(lr,{children:[c(Pt,{children:"Instituição:"}),c(ef,{children:c(Xc,{children:b(qc,{onChange:U=>O(U),children:[c("option",{value:""}),c("option",{value:""}),c("option",{value:""})]})})})]}),b(lr,{children:[c(Pt,{children:"Tipo:"}),b(tf,{children:[c(nf,{type:"radio",id:"publica",name:"institutionType",value:"Publica"}),c(rf,{children:"Pública"})]}),b(tf,{children:[c(nf,{type:"radio",id:"privada",name:"institutionType",value:"Privada"}),c(rf,{children:"Privada"})]})]})]}),b(ar,{children:[b(lr,{children:[c(Pt,{children:"Departamento:"}),c(pn,{placeholder:"Entre com a departamento",onChange:U=>{r(U.target.value)}})]}),b(lr,{children:[c(Pt,{children:"Outros:"}),c(pn,{placeholder:"Outros",onChange:U=>{o(U.target.value)}})]})]}),c(ar,{children:b(Zc,{children:[c(Pt,{children:"Nome:"}),c(pn,{placeholder:"Digite seu nome",onChange:U=>{t(U.target.value)}})]})}),b(ar,{children:[b(Ul,{children:[c(Pt,{children:"Telefone:"}),c(pn,{placeholder:"Digite seu telefone",onChange:U=>{l(U.target.value)}})]}),b(Ul,{children:[c(Pt,{children:"Ramal:"}),c(pn,{placeholder:"Digite seu ramal",onChange:U=>{d(U.target.value)}})]}),b(Ul,{children:[c(Pt,{children:"Função:"}),c(ef,{children:c(Xc,{children:b(qc,{onChange:U=>O(U),children:[c("option",{value:""}),c("option",{value:""}),c("option",{value:""})]})})})]})]}),c(ar,{children:b(Zc,{children:[c(Pt,{children:"Usuário:"}),c(pn,{placeholder:"Digite seu usuário",onChange:U=>{g(U.target.value)}})]})}),b(ar,{children:[b(lr,{children:[c(Pt,{children:"Senha:"}),c(pn,{type:"password",placeholder:"Entre com sua senha aqui",onChange:U=>{w(U.target.value)}})]}),b(lr,{children:[c(Pt,{children:"Confirme sua senha:"}),c(pn,{type:"password",placeholder:"Confirme sua senha aqui",onChange:U=>{S(U.target.value)}})]})]}),c(AS,{onClick:N,children:"Registrar"})]})},RS=({})=>b(SS,{children:[c(Wt,{}),c(kS,{children:c($S,{})}),c(Qt,{})]}),bS=x.div`
`,PS=x.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;x.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const DS=x.div`
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
`,OS=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,LS=x.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,xo=x.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,yo=x.input`
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
`,wo=x.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,NS=x.button`
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
`;x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-beetween;
`;x.a`
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
`;const TS=({})=>b(DS,{children:[c(LS,{children:"Redefinição de Senha"}),b(OS,{children:[b(wo,{children:[c(xo,{children:"Usuário:"}),c(yo,{placeholder:"Digite seu usuário"})]}),b(wo,{children:[c(xo,{children:"Email:"}),c(yo,{placeholder:"Digite seu email"})]}),b(wo,{children:[c(xo,{children:"Nova Senha:"}),c(yo,{type:"password",placeholder:"Digite sua senha"})]}),b(wo,{children:[c(xo,{children:"Confime a Nova Senha:"}),c(yo,{type:"password",placeholder:"Digite sua senha"})]})]}),c(NS,{children:"Redefinir"})]}),MS=({})=>b(bS,{children:[c(Wt,{}),c(PS,{children:c(TS,{})}),c(Qt,{})]}),IS="/Nanofab-Project/assets/background2-7f5efefe.svg",zS=x.div`
  background-image: url(${IS});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  @media screen and (max-width: ${s.mobile}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${s.largeMobile}) and (max-width: ${s.tablet}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${s.tablet}) and (max-width: 1919px) {    
    background-size: 100% 1800px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${s.largeDesktop}) and (max-width: ${s.extraLargeDesktop}) {    
    background-size: 100% 2800px;
    background-repeat: repeat;
  }
`,_S=Jv([{path:"/",element:c(ay,{})},{path:"/equipe",element:c(Cy,{})},{path:"/andamento",element:c(Hy,{})},{path:"/submissao_projetos",element:c(Sw,{})},{path:"/publicacoes",element:c(Bw,{})},{path:"/parcerias",element:c(lS,{})},{path:"/login",element:c(wS,{})},{path:"/login/createAccount",element:c(RS,{})},{path:"/login/RedefinePassword",element:c(MS,{})},{path:"*",element:c(cS,{})}],{basename:"/Nanofab-Project"}),FS=({})=>c(zS,{children:c(Iv,{router:_S})}),jS=E1`
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
`;function US(){return b($1,{children:[c(jS,{}),c(FS,{})]})}Hl.createRoot(document.getElementById("root")).render(c(tt.StrictMode,{children:c(US,{})}));
