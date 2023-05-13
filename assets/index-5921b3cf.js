function Fy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ny(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oo={},Iy={get exports(){return Oo},set exports(e){Oo=e}},Hl={},E={},Dy={get exports(){return E},set exports(e){E=e}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),_y=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),jy=Symbol.for("react.strict_mode"),Uy=Symbol.for("react.profiler"),By=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),Vy=Symbol.for("react.forward_ref"),Wy=Symbol.for("react.suspense"),Gy=Symbol.for("react.memo"),Jy=Symbol.for("react.lazy"),Hf=Symbol.iterator;function qy(e){return e===null||typeof e!="object"?null:(e=Hf&&e[Hf]||e["@@iterator"],typeof e=="function"?e:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vm=Object.assign,Wm={};function Ui(e,t,n){this.props=e,this.context=t,this.refs=Wm,this.updater=n||Hm}Ui.prototype.isReactComponent={};Ui.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ui.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gm(){}Gm.prototype=Ui.prototype;function Ed(e,t,n){this.props=e,this.context=t,this.refs=Wm,this.updater=n||Hm}var Ad=Ed.prototype=new Gm;Ad.constructor=Ed;Vm(Ad,Ui.prototype);Ad.isPureReactComponent=!0;var Vf=Array.isArray,Jm=Object.prototype.hasOwnProperty,Pd={current:null},qm={key:!0,ref:!0,__self:!0,__source:!0};function Qm(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Jm.call(t,r)&&!qm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ea,type:e,key:o,ref:a,props:i,_owner:Pd.current}}function Qy(e,t){return{$$typeof:ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ea}function Xy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wf=/\/+/g;function Fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xy(""+e.key):t.toString(36)}function Va(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ea:case _y:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Fs(a,0):r,Vf(i)?(n="",e!=null&&(n=e.replace(Wf,"$&/")+"/"),Va(i,t,n,"",function(u){return u})):i!=null&&(Rd(i)&&(i=Qy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Wf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Vf(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Fs(o,l);a+=Va(o,t,n,s,i)}else if(s=qy(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Fs(o,l++),a+=Va(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function pa(e,t,n){if(e==null)return e;var r=[],i=0;return Va(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Yy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Wa={transition:null},Ky={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Pd};ve.Children={map:pa,forEach:function(e,t,n){pa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pa(e,function(){t++}),t},toArray:function(e){return pa(e,function(t){return t})||[]},only:function(e){if(!Rd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ve.Component=Ui;ve.Fragment=zy;ve.Profiler=Uy;ve.PureComponent=Ed;ve.StrictMode=jy;ve.Suspense=Wy;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky;ve.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Pd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Jm.call(t,s)&&!qm.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ea,type:e.type,key:i,ref:o,props:r,_owner:a}};ve.createContext=function(e){return e={$$typeof:Hy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:By,_context:e},e.Consumer=e};ve.createElement=Qm;ve.createFactory=function(e){var t=Qm.bind(null,e);return t.type=e,t};ve.createRef=function(){return{current:null}};ve.forwardRef=function(e){return{$$typeof:Vy,render:e}};ve.isValidElement=Rd;ve.lazy=function(e){return{$$typeof:Jy,_payload:{_status:-1,_result:e},_init:Yy}};ve.memo=function(e,t){return{$$typeof:Gy,type:e,compare:t===void 0?null:t}};ve.startTransition=function(e){var t=Wa.transition;Wa.transition={};try{e()}finally{Wa.transition=t}};ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ve.useCallback=function(e,t){return mt.current.useCallback(e,t)};ve.useContext=function(e){return mt.current.useContext(e)};ve.useDebugValue=function(){};ve.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};ve.useEffect=function(e,t){return mt.current.useEffect(e,t)};ve.useId=function(){return mt.current.useId()};ve.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};ve.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};ve.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};ve.useMemo=function(e,t){return mt.current.useMemo(e,t)};ve.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};ve.useRef=function(e){return mt.current.useRef(e)};ve.useState=function(e){return mt.current.useState(e)};ve.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};ve.useTransition=function(){return mt.current.useTransition()};ve.version="18.2.0";(function(e){e.exports=ve})(Dy);const Z=Ny(E),zu=Fy({__proto__:null,default:Z},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=E,e1=Symbol.for("react.element"),t1=Symbol.for("react.fragment"),n1=Object.prototype.hasOwnProperty,r1=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i1={key:!0,ref:!0,__self:!0,__source:!0};function Xm(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)n1.call(t,r)&&!i1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:e1,type:e,key:o,ref:a,props:i,_owner:r1.current}}Hl.Fragment=t1;Hl.jsx=Xm;Hl.jsxs=Xm;(function(e){e.exports=Hl})(Iy);const Gf=Oo.Fragment,x=Oo.jsx,N=Oo.jsxs;var ju={},Uu={},o1={get exports(){return Uu},set exports(e){Uu=e}},Lt={},Bu={},a1={get exports(){return Bu},set exports(e){Bu=e}},Ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,X){var W=_.length;_.push(X);e:for(;0<W;){var ae=W-1>>>1,j=_[ae];if(0<i(j,X))_[ae]=X,_[W]=j,W=ae;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var X=_[0],W=_.pop();if(W!==X){_[0]=W;e:for(var ae=0,j=_.length,V=j>>>1;ae<V;){var G=2*(ae+1)-1,re=_[G],M=G+1,pe=_[M];if(0>i(re,W))M<j&&0>i(pe,re)?(_[ae]=pe,_[M]=W,ae=M):(_[ae]=re,_[G]=W,ae=G);else if(M<j&&0>i(pe,W))_[ae]=pe,_[M]=W,ae=M;else break e}}return X}function i(_,X){var W=_.sortIndex-X.sortIndex;return W!==0?W:_.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,p=3,S=!1,w=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(_){for(var X=n(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=_)r(u),X.sortIndex=X.expirationTime,t(s,X);else break;X=n(u)}}function b(_){if(y=!1,v(_),!w)if(n(s)!==null)w=!0,Q(k);else{var X=n(u);X!==null&&q(b,X.startTime-_)}}function k(_,X){w=!1,y&&(y=!1,h($),$=-1),S=!0;var W=p;try{for(v(X),d=n(s);d!==null&&(!(d.expirationTime>X)||_&&!Y());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,p=d.priorityLevel;var j=ae(d.expirationTime<=X);X=e.unstable_now(),typeof j=="function"?d.callback=j:d===n(s)&&r(s),v(X)}else r(s);d=n(s)}if(d!==null)var V=!0;else{var G=n(u);G!==null&&q(b,G.startTime-X),V=!1}return V}finally{d=null,p=W,S=!1}}var A=!1,P=null,$=-1,z=5,I=-1;function Y(){return!(e.unstable_now()-I<z)}function O(){if(P!==null){var _=e.unstable_now();I=_;var X=!0;try{X=P(!0,_)}finally{X?R():(A=!1,P=null)}}else A=!1}var R;if(typeof f=="function")R=function(){f(O)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,U=T.port2;T.port1.onmessage=O,R=function(){U.postMessage(null)}}else R=function(){g(O,0)};function Q(_){P=_,A||(A=!0,R())}function q(_,X){$=g(function(){_(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,Q(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var X=3;break;default:X=p}var W=p;p=X;try{return _()}finally{p=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,X){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var W=p;p=_;try{return X()}finally{p=W}},e.unstable_scheduleCallback=function(_,X,W){var ae=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ae+W:ae):W=ae,_){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=W+j,_={id:c++,callback:X,priorityLevel:_,startTime:W,expirationTime:j,sortIndex:-1},W>ae?(_.sortIndex=W,t(u,_),n(s)===null&&_===n(u)&&(y?(h($),$=-1):y=!0,q(b,W-ae))):(_.sortIndex=j,t(s,_),w||S||(w=!0,Q(k))),_},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(_){var X=p;return function(){var W=p;p=X;try{return _.apply(this,arguments)}finally{p=W}}}})(Ym);(function(e){e.exports=Ym})(a1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=E,Mt=Bu;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zm=new Set,$o={};function Br(e,t){Ai(e,t),Ai(e+"Capture",t)}function Ai(e,t){for($o[e]=t,e=0;e<t.length;e++)Zm.add(t[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=Object.prototype.hasOwnProperty,l1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},qf={};function s1(e){return Hu.call(qf,e)?!0:Hu.call(Jf,e)?!1:l1.test(e)?qf[e]=!0:(Jf[e]=!0,!1)}function u1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function c1(e,t,n,r){if(t===null||typeof t>"u"||u1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function $d(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Od,$d);lt[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Od,$d);lt[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Od,$d);lt[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Td(e,t,n,r){var i=lt.hasOwnProperty(t)?lt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(c1(t,n,i,r)&&(n=null),r||i===null?s1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zn=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),Qf=Symbol.iterator;function Xi(e){return e===null||typeof e!="object"?null:(e=Qf&&e[Qf]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,Ns;function so(e){if(Ns===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ns=t&&t[1]||""}return`
`+Ns+e}var Is=!1;function Ds(e,t){if(!e||Is)return"";Is=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Is=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?so(e):""}function d1(e){switch(e.tag){case 5:return so(e.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return e=Ds(e.type,!1),e;case 11:return e=Ds(e.type.render,!1),e;case 1:return e=Ds(e.type,!0),e;default:return""}}function Ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ni:return"Fragment";case ti:return"Portal";case Vu:return"Profiler";case Md:return"StrictMode";case Wu:return"Suspense";case Gu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tg:return(e.displayName||"Context")+".Consumer";case eg:return(e._context.displayName||"Context")+".Provider";case Ld:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fd:return t=e.displayName||null,t!==null?t:Ju(e.type)||"Memo";case Kn:t=e._payload,e=e._init;try{return Ju(e(t))}catch{}}return null}function f1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(t);case 8:return t===Md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p1(e){var t=rg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ma(e){e._valueTracker||(e._valueTracker=p1(e))}function ig(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qu(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function og(e,t){t=t.checked,t!=null&&Td(e,"checked",t,!1)}function Qu(e,t){og(e,t);var n=gr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xu(e,t.type,gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xu(e,t,n){(t!=="number"||sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var uo=Array.isArray;function vi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(uo(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gr(n)}}function ag(e,t){var n=gr(t.value),r=gr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ga,sg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function To(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h1=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(e){h1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ho[t]=ho[e]})});function ug(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ho.hasOwnProperty(e)&&ho[e]?(""+t).trim():t+"px"}function cg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ug(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var m1=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(e,t){if(t){if(m1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function ec(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tc=null;function Nd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nc=null,yi=null,xi=null;function ep(e){if(e=ra(e)){if(typeof nc!="function")throw Error(H(280));var t=e.stateNode;t&&(t=ql(t),nc(e.stateNode,e.type,t))}}function dg(e){yi?xi?xi.push(e):xi=[e]:yi=e}function fg(){if(yi){var e=yi,t=xi;if(xi=yi=null,ep(e),t)for(e=0;e<t.length;e++)ep(t[e])}}function pg(e,t){return e(t)}function hg(){}var _s=!1;function mg(e,t,n){if(_s)return e(t,n);_s=!0;try{return pg(e,t,n)}finally{_s=!1,(yi!==null||xi!==null)&&(hg(),fg())}}function Mo(e,t){var n=e.stateNode;if(n===null)return null;var r=ql(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var rc=!1;if(Ln)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){rc=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{rc=!1}function g1(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var mo=!1,ul=null,cl=!1,ic=null,v1={onError:function(e){mo=!0,ul=e}};function y1(e,t,n,r,i,o,a,l,s){mo=!1,ul=null,g1.apply(v1,arguments)}function x1(e,t,n,r,i,o,a,l,s){if(y1.apply(this,arguments),mo){if(mo){var u=ul;mo=!1,ul=null}else throw Error(H(198));cl||(cl=!0,ic=u)}}function Hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tp(e){if(Hr(e)!==e)throw Error(H(188))}function w1(e){var t=e.alternate;if(!t){if(t=Hr(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return tp(i),e;if(o===r)return tp(i),t;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function vg(e){return e=w1(e),e!==null?yg(e):null}function yg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yg(e);if(t!==null)return t;e=e.sibling}return null}var xg=Mt.unstable_scheduleCallback,np=Mt.unstable_cancelCallback,S1=Mt.unstable_shouldYield,b1=Mt.unstable_requestPaint,Ue=Mt.unstable_now,k1=Mt.unstable_getCurrentPriorityLevel,Id=Mt.unstable_ImmediatePriority,wg=Mt.unstable_UserBlockingPriority,dl=Mt.unstable_NormalPriority,C1=Mt.unstable_LowPriority,Sg=Mt.unstable_IdlePriority,Vl=null,yn=null;function E1(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Vl,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:R1,A1=Math.log,P1=Math.LN2;function R1(e){return e>>>=0,e===0?32:31-(A1(e)/P1|0)|0}var va=64,ya=4194304;function co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=co(l):(o&=a,o!==0&&(r=co(o)))}else a=n&~i,a!==0?r=co(a):o!==0&&(r=co(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function O1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-an(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=O1(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function oc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bg(){var e=va;return va<<=1,!(va&4194240)&&(va=64),e}function zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function T1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ce=0;function kg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cg,_d,Eg,Ag,Pg,ac=!1,xa=[],ar=null,lr=null,sr=null,Lo=new Map,Fo=new Map,tr=[],M1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rp(e,t){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function Ki(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ra(t),t!==null&&_d(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function L1(e,t,n,r,i){switch(t){case"focusin":return ar=Ki(ar,e,t,n,r,i),!0;case"dragenter":return lr=Ki(lr,e,t,n,r,i),!0;case"mouseover":return sr=Ki(sr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Lo.set(o,Ki(Lo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fo.set(o,Ki(Fo.get(o)||null,e,t,n,r,i)),!0}return!1}function Rg(e){var t=Er(e.target);if(t!==null){var n=Hr(t);if(n!==null){if(t=n.tag,t===13){if(t=gg(n),t!==null){e.blockedOn=t,Pg(e.priority,function(){Eg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tc=r,n.target.dispatchEvent(r),tc=null}else return t=ra(n),t!==null&&_d(t),e.blockedOn=n,!1;t.shift()}return!0}function ip(e,t,n){Ga(e)&&n.delete(t)}function F1(){ac=!1,ar!==null&&Ga(ar)&&(ar=null),lr!==null&&Ga(lr)&&(lr=null),sr!==null&&Ga(sr)&&(sr=null),Lo.forEach(ip),Fo.forEach(ip)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,ac||(ac=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,F1)))}function No(e){function t(i){return Zi(i,e)}if(0<xa.length){Zi(xa[0],e);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ar!==null&&Zi(ar,e),lr!==null&&Zi(lr,e),sr!==null&&Zi(sr,e),Lo.forEach(t),Fo.forEach(t),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&tr.shift()}var wi=zn.ReactCurrentBatchConfig,pl=!0;function N1(e,t,n,r){var i=Ce,o=wi.transition;wi.transition=null;try{Ce=1,zd(e,t,n,r)}finally{Ce=i,wi.transition=o}}function I1(e,t,n,r){var i=Ce,o=wi.transition;wi.transition=null;try{Ce=4,zd(e,t,n,r)}finally{Ce=i,wi.transition=o}}function zd(e,t,n,r){if(pl){var i=lc(e,t,n,r);if(i===null)Qs(e,t,r,hl,n),rp(e,r);else if(L1(i,e,t,n,r))r.stopPropagation();else if(rp(e,r),t&4&&-1<M1.indexOf(e)){for(;i!==null;){var o=ra(i);if(o!==null&&Cg(o),o=lc(e,t,n,r),o===null&&Qs(e,t,r,hl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qs(e,t,r,null,n)}}var hl=null;function lc(e,t,n,r){if(hl=null,e=Nd(r),e=Er(e),e!==null)if(t=Hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hl=e,null}function Og(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k1()){case Id:return 1;case wg:return 4;case dl:case C1:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var rr=null,jd=null,Ja=null;function $g(){if(Ja)return Ja;var e,t=jd,n=t.length,r,i="value"in rr?rr.value:rr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ja=i.slice(e,1<r?1-r:void 0)}function qa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wa(){return!0}function op(){return!1}function Ft(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wa:op,this.isPropagationStopped=op,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),t}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ud=Ft(Bi),na=Ie({},Bi,{view:0,detail:0}),D1=Ft(na),js,Us,eo,Wl=Ie({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(js=e.screenX-eo.screenX,Us=e.screenY-eo.screenY):Us=js=0,eo=e),js)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),ap=Ft(Wl),_1=Ie({},Wl,{dataTransfer:0}),z1=Ft(_1),j1=Ie({},na,{relatedTarget:0}),Bs=Ft(j1),U1=Ie({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),B1=Ft(U1),H1=Ie({},Bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V1=Ft(H1),W1=Ie({},Bi,{data:0}),lp=Ft(W1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=q1[e])?!!t[e]:!1}function Bd(){return Q1}var X1=Ie({},na,{key:function(e){if(e.key){var t=G1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(e){return e.type==="keypress"?qa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y1=Ft(X1),K1=Ie({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=Ft(K1),Z1=Ie({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),ex=Ft(Z1),tx=Ie({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=Ft(tx),rx=Ie({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=Ft(rx),ox=[9,13,27,32],Hd=Ln&&"CompositionEvent"in window,go=null;Ln&&"documentMode"in document&&(go=document.documentMode);var ax=Ln&&"TextEvent"in window&&!go,Tg=Ln&&(!Hd||go&&8<go&&11>=go),up=String.fromCharCode(32),cp=!1;function Mg(e,t){switch(e){case"keyup":return ox.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function lx(e,t){switch(e){case"compositionend":return Lg(t);case"keypress":return t.which!==32?null:(cp=!0,up);case"textInput":return e=t.data,e===up&&cp?null:e;default:return null}}function sx(e,t){if(ri)return e==="compositionend"||!Hd&&Mg(e,t)?(e=$g(),Ja=jd=rr=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tg&&t.locale!=="ko"?null:t.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ux[e.type]:t==="textarea"}function Fg(e,t,n,r){dg(r),t=ml(t,"onChange"),0<t.length&&(n=new Ud("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vo=null,Io=null;function cx(e){Wg(e,0)}function Gl(e){var t=ai(e);if(ig(t))return e}function dx(e,t){if(e==="change")return t}var Ng=!1;if(Ln){var Hs;if(Ln){var Vs="oninput"in document;if(!Vs){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Vs=typeof fp.oninput=="function"}Hs=Vs}else Hs=!1;Ng=Hs&&(!document.documentMode||9<document.documentMode)}function pp(){vo&&(vo.detachEvent("onpropertychange",Ig),Io=vo=null)}function Ig(e){if(e.propertyName==="value"&&Gl(Io)){var t=[];Fg(t,Io,e,Nd(e)),mg(cx,t)}}function fx(e,t,n){e==="focusin"?(pp(),vo=t,Io=n,vo.attachEvent("onpropertychange",Ig)):e==="focusout"&&pp()}function px(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gl(Io)}function hx(e,t){if(e==="click")return Gl(t)}function mx(e,t){if(e==="input"||e==="change")return Gl(t)}function gx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:gx;function Do(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hu.call(t,i)||!un(e[i],t[i]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,t){var n=hp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function Dg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _g(){for(var e=window,t=sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function Vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vx(e){var t=_g(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dg(n.ownerDocument.documentElement,n)){if(r!==null&&Vd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=mp(n,o);var a=mp(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yx=Ln&&"documentMode"in document&&11>=document.documentMode,ii=null,sc=null,yo=null,uc=!1;function gp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uc||ii==null||ii!==sl(r)||(r=ii,"selectionStart"in r&&Vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Do(yo,r)||(yo=r,r=ml(sc,"onSelect"),0<r.length&&(t=new Ud("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ii)))}function Sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var oi={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ws={},zg={};Ln&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Jl(e){if(Ws[e])return Ws[e];if(!oi[e])return e;var t=oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zg)return Ws[e]=t[n];return e}var jg=Jl("animationend"),Ug=Jl("animationiteration"),Bg=Jl("animationstart"),Hg=Jl("transitionend"),Vg=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){Vg.set(e,t),Br(t,[e])}for(var Gs=0;Gs<vp.length;Gs++){var Js=vp[Gs],xx=Js.toLowerCase(),wx=Js[0].toUpperCase()+Js.slice(1);yr(xx,"on"+wx)}yr(jg,"onAnimationEnd");yr(Ug,"onAnimationIteration");yr(Bg,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(Hg,"onTransitionEnd");Ai("onMouseEnter",["mouseout","mouseover"]);Ai("onMouseLeave",["mouseout","mouseover"]);Ai("onPointerEnter",["pointerout","pointerover"]);Ai("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function yp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,x1(r,t,void 0,e),e.currentTarget=null}function Wg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;yp(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;yp(i,l,u),o=s}}}if(cl)throw e=ic,cl=!1,ic=null,e}function Oe(e,t){var n=t[hc];n===void 0&&(n=t[hc]=new Set);var r=e+"__bubble";n.has(r)||(Gg(t,e,2,!1),n.add(r))}function qs(e,t,n){var r=0;t&&(r|=4),Gg(n,e,r,t)}var ba="_reactListening"+Math.random().toString(36).slice(2);function _o(e){if(!e[ba]){e[ba]=!0,Zm.forEach(function(n){n!=="selectionchange"&&(Sx.has(n)||qs(n,!1,e),qs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ba]||(t[ba]=!0,qs("selectionchange",!1,t))}}function Gg(e,t,n,r){switch(Og(t)){case 1:var i=N1;break;case 4:i=I1;break;default:i=zd}n=i.bind(null,t,n,e),i=void 0,!rc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Er(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}mg(function(){var u=o,c=Nd(n),d=[];e:{var p=Vg.get(e);if(p!==void 0){var S=Ud,w=e;switch(e){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":S=Y1;break;case"focusin":w="focus",S=Bs;break;case"focusout":w="blur",S=Bs;break;case"beforeblur":case"afterblur":S=Bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=ex;break;case jg:case Ug:case Bg:S=B1;break;case Hg:S=nx;break;case"scroll":S=D1;break;case"wheel":S=ix;break;case"copy":case"cut":case"paste":S=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=sp}var y=(t&4)!==0,g=!y&&e==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var f=u,v;f!==null;){v=f;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,h!==null&&(b=Mo(f,h),b!=null&&y.push(zo(f,b,v)))),g)break;f=f.return}0<y.length&&(p=new S(p,w,null,n,c),d.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",p&&n!==tc&&(w=n.relatedTarget||n.fromElement)&&(Er(w)||w[Fn]))break e;if((S||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=u,w=w?Er(w):null,w!==null&&(g=Hr(w),w!==g||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=u),S!==w)){if(y=ap,b="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=sp,b="onPointerLeave",h="onPointerEnter",f="pointer"),g=S==null?p:ai(S),v=w==null?p:ai(w),p=new y(b,f+"leave",S,n,c),p.target=g,p.relatedTarget=v,b=null,Er(c)===u&&(y=new y(h,f+"enter",w,n,c),y.target=v,y.relatedTarget=g,b=y),g=b,S&&w)t:{for(y=S,h=w,f=0,v=y;v;v=qr(v))f++;for(v=0,b=h;b;b=qr(b))v++;for(;0<f-v;)y=qr(y),f--;for(;0<v-f;)h=qr(h),v--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=qr(y),h=qr(h)}y=null}else y=null;S!==null&&xp(d,p,S,y,!1),w!==null&&g!==null&&xp(d,g,w,y,!0)}}e:{if(p=u?ai(u):window,S=p.nodeName&&p.nodeName.toLowerCase(),S==="select"||S==="input"&&p.type==="file")var k=dx;else if(dp(p))if(Ng)k=mx;else{k=px;var A=fx}else(S=p.nodeName)&&S.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=hx);if(k&&(k=k(e,u))){Fg(d,k,n,c);break e}A&&A(e,p,u),e==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&Xu(p,"number",p.value)}switch(A=u?ai(u):window,e){case"focusin":(dp(A)||A.contentEditable==="true")&&(ii=A,sc=u,yo=null);break;case"focusout":yo=sc=ii=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,gp(d,n,c);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":gp(d,n,c)}var P;if(Hd)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else ri?Mg(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Tg&&n.locale!=="ko"&&(ri||$!=="onCompositionStart"?$==="onCompositionEnd"&&ri&&(P=$g()):(rr=c,jd="value"in rr?rr.value:rr.textContent,ri=!0)),A=ml(u,$),0<A.length&&($=new lp($,e,null,n,c),d.push({event:$,listeners:A}),P?$.data=P:(P=Lg(n),P!==null&&($.data=P)))),(P=ax?lx(e,n):sx(e,n))&&(u=ml(u,"onBeforeInput"),0<u.length&&(c=new lp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Wg(d,t)})}function zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ml(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mo(e,n),o!=null&&r.unshift(zo(e,o,i)),o=Mo(e,t),o!=null&&r.push(zo(e,o,i))),e=e.return}return r}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xp(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Mo(n,o),s!=null&&a.unshift(zo(n,s,l))):i||(s=Mo(n,o),s!=null&&a.push(zo(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var bx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function wp(e){return(typeof e=="string"?e:""+e).replace(bx,`
`).replace(kx,"")}function ka(e,t,n){if(t=wp(t),wp(e)!==t&&n)throw Error(H(425))}function gl(){}var cc=null,dc=null;function fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,Cx=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,Ex=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(e){return Sp.resolve(null).then(e).catch(Ax)}:pc;function Ax(e){setTimeout(function(){throw e})}function Xs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),No(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);No(t)}function ur(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hi=Math.random().toString(36).slice(2),vn="__reactFiber$"+Hi,jo="__reactProps$"+Hi,Fn="__reactContainer$"+Hi,hc="__reactEvents$"+Hi,Px="__reactListeners$"+Hi,Rx="__reactHandles$"+Hi;function Er(e){var t=e[vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fn]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bp(e);e!==null;){if(n=e[vn])return n;e=bp(e)}return t}e=n,n=e.parentNode}return null}function ra(e){return e=e[vn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ai(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function ql(e){return e[jo]||null}var mc=[],li=-1;function xr(e){return{current:e}}function $e(e){0>li||(e.current=mc[li],mc[li]=null,li--)}function Re(e,t){li++,mc[li]=e.current,e.current=t}var vr={},ft=xr(vr),wt=xr(!1),Nr=vr;function Pi(e,t){var n=e.type.contextTypes;if(!n)return vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function St(e){return e=e.childContextTypes,e!=null}function vl(){$e(wt),$e(ft)}function kp(e,t,n){if(ft.current!==vr)throw Error(H(168));Re(ft,t),Re(wt,n)}function Jg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(H(108,f1(e)||"Unknown",i));return Ie({},n,r)}function yl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vr,Nr=ft.current,Re(ft,e),Re(wt,wt.current),!0}function Cp(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=Jg(e,t,Nr),r.__reactInternalMemoizedMergedChildContext=e,$e(wt),$e(ft),Re(ft,e)):$e(wt),Re(wt,n)}var En=null,Ql=!1,Ys=!1;function qg(e){En===null?En=[e]:En.push(e)}function Ox(e){Ql=!0,qg(e)}function wr(){if(!Ys&&En!==null){Ys=!0;var e=0,t=Ce;try{var n=En;for(Ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}En=null,Ql=!1}catch(i){throw En!==null&&(En=En.slice(e+1)),xg(Id,wr),i}finally{Ce=t,Ys=!1}}return null}var si=[],ui=0,xl=null,wl=0,Dt=[],_t=0,Ir=null,An=1,Pn="";function br(e,t){si[ui++]=wl,si[ui++]=xl,xl=e,wl=t}function Qg(e,t,n){Dt[_t++]=An,Dt[_t++]=Pn,Dt[_t++]=Ir,Ir=e;var r=An;e=Pn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var o=32-an(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,An=1<<32-an(t)+i|n<<i|r,Pn=o+e}else An=1<<o|n<<i|r,Pn=e}function Wd(e){e.return!==null&&(br(e,1),Qg(e,1,0))}function Gd(e){for(;e===xl;)xl=si[--ui],si[ui]=null,wl=si[--ui],si[ui]=null;for(;e===Ir;)Ir=Dt[--_t],Dt[_t]=null,Pn=Dt[--_t],Dt[_t]=null,An=Dt[--_t],Dt[_t]=null}var Tt=null,Rt=null,Me=!1,rn=null;function Xg(e,t){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ep(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Rt=ur(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ir!==null?{id:An,overflow:Pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Rt=null,!0):!1;default:return!1}}function gc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vc(e){if(Me){var t=Rt;if(t){var n=t;if(!Ep(e,t)){if(gc(e))throw Error(H(418));t=ur(n.nextSibling);var r=Tt;t&&Ep(e,t)?Xg(r,n):(e.flags=e.flags&-4097|2,Me=!1,Tt=e)}}else{if(gc(e))throw Error(H(418));e.flags=e.flags&-4097|2,Me=!1,Tt=e}}}function Ap(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function Ca(e){if(e!==Tt)return!1;if(!Me)return Ap(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fc(e.type,e.memoizedProps)),t&&(t=Rt)){if(gc(e))throw Yg(),Error(H(418));for(;t;)Xg(e,t),t=ur(t.nextSibling)}if(Ap(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=ur(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Tt?ur(e.stateNode.nextSibling):null;return!0}function Yg(){for(var e=Rt;e;)e=ur(e.nextSibling)}function Ri(){Rt=Tt=null,Me=!1}function Jd(e){rn===null?rn=[e]:rn.push(e)}var $x=zn.ReactCurrentBatchConfig;function tn(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Sl=xr(null),bl=null,ci=null,qd=null;function Qd(){qd=ci=bl=null}function Xd(e){var t=Sl.current;$e(Sl),e._currentValue=t}function yc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Si(e,t){bl=e,qd=ci=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Bt(e){var t=e._currentValue;if(qd!==e)if(e={context:e,memoizedValue:t,next:null},ci===null){if(bl===null)throw Error(H(308));ci=e,bl.dependencies={lanes:0,firstContext:e}}else ci=ci.next=e;return t}var Ar=null;function Yd(e){Ar===null?Ar=[e]:Ar.push(e)}function Kg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Yd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nn(e,r)}function Nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zn=!1;function Kd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $n(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nn(e,n)}return i=r.interleaved,i===null?(t.next=t,Yd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nn(e,n)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dd(e,n)}}function Pp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kl(e,t,n,r){var i=e.updateQueue;Zn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var p=l.lane,S=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,y=l;switch(p=t,S=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){d=w.call(S,d,p);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,p=typeof w=="function"?w.call(S,d,p):w,p==null)break e;d=Ie({},d,p);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else S={eventTime:S,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=S,s=d):c=c.next=S,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_r|=a,e.lanes=a,e.memoizedState=d}}function Rp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var ev=new Km.Component().refs;function xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xl={isMounted:function(e){return(e=e._reactInternals)?Hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ht(),i=fr(e),o=$n(r,i);o.payload=t,n!=null&&(o.callback=n),t=cr(e,o,i),t!==null&&(ln(t,e,i,r),Qa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ht(),i=fr(e),o=$n(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=cr(e,o,i),t!==null&&(ln(t,e,i,r),Qa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ht(),r=fr(e),i=$n(n,r);i.tag=2,t!=null&&(i.callback=t),t=cr(e,i,r),t!==null&&(ln(t,e,r,n),Qa(t,e,r))}};function Op(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Do(n,r)||!Do(i,o):!0}function tv(e,t,n){var r=!1,i=vr,o=t.contextType;return typeof o=="object"&&o!==null?o=Bt(o):(i=St(t)?Nr:ft.current,r=t.contextTypes,o=(r=r!=null)?Pi(e,i):vr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $p(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xl.enqueueReplaceState(t,t.state,null)}function wc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ev,Kd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Bt(o):(o=St(t)?Nr:ft.current,i.context=Pi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(xc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xl.enqueueReplaceState(i,i.state,null),kl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function to(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===ev&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function Ea(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tp(e){var t=e._init;return t(e._payload)}function nv(e){function t(h,f){if(e){var v=h.deletions;v===null?(h.deletions=[f],h.flags|=16):v.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=pr(h,f),h.index=0,h.sibling=null,h}function o(h,f,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<f?(h.flags|=2,f):v):(h.flags|=2,f)):(h.flags|=1048576,f)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,v,b){return f===null||f.tag!==6?(f=iu(v,h.mode,b),f.return=h,f):(f=i(f,v),f.return=h,f)}function s(h,f,v,b){var k=v.type;return k===ni?c(h,f,v.props.children,b,v.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Kn&&Tp(k)===f.type)?(b=i(f,v.props),b.ref=to(h,f,v),b.return=h,b):(b=tl(v.type,v.key,v.props,null,h.mode,b),b.ref=to(h,f,v),b.return=h,b)}function u(h,f,v,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=ou(v,h.mode,b),f.return=h,f):(f=i(f,v.children||[]),f.return=h,f)}function c(h,f,v,b,k){return f===null||f.tag!==7?(f=Lr(v,h.mode,b,k),f.return=h,f):(f=i(f,v),f.return=h,f)}function d(h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=iu(""+f,h.mode,v),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ha:return v=tl(f.type,f.key,f.props,null,h.mode,v),v.ref=to(h,null,f),v.return=h,v;case ti:return f=ou(f,h.mode,v),f.return=h,f;case Kn:var b=f._init;return d(h,b(f._payload),v)}if(uo(f)||Xi(f))return f=Lr(f,h.mode,v,null),f.return=h,f;Ea(h,f)}return null}function p(h,f,v,b){var k=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:l(h,f,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:return v.key===k?s(h,f,v,b):null;case ti:return v.key===k?u(h,f,v,b):null;case Kn:return k=v._init,p(h,f,k(v._payload),b)}if(uo(v)||Xi(v))return k!==null?null:c(h,f,v,b,null);Ea(h,v)}return null}function S(h,f,v,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(v)||null,l(f,h,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ha:return h=h.get(b.key===null?v:b.key)||null,s(f,h,b,k);case ti:return h=h.get(b.key===null?v:b.key)||null,u(f,h,b,k);case Kn:var A=b._init;return S(h,f,v,A(b._payload),k)}if(uo(b)||Xi(b))return h=h.get(v)||null,c(f,h,b,k,null);Ea(f,b)}return null}function w(h,f,v,b){for(var k=null,A=null,P=f,$=f=0,z=null;P!==null&&$<v.length;$++){P.index>$?(z=P,P=null):z=P.sibling;var I=p(h,P,v[$],b);if(I===null){P===null&&(P=z);break}e&&P&&I.alternate===null&&t(h,P),f=o(I,f,$),A===null?k=I:A.sibling=I,A=I,P=z}if($===v.length)return n(h,P),Me&&br(h,$),k;if(P===null){for(;$<v.length;$++)P=d(h,v[$],b),P!==null&&(f=o(P,f,$),A===null?k=P:A.sibling=P,A=P);return Me&&br(h,$),k}for(P=r(h,P);$<v.length;$++)z=S(P,h,$,v[$],b),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?$:z.key),f=o(z,f,$),A===null?k=z:A.sibling=z,A=z);return e&&P.forEach(function(Y){return t(h,Y)}),Me&&br(h,$),k}function y(h,f,v,b){var k=Xi(v);if(typeof k!="function")throw Error(H(150));if(v=k.call(v),v==null)throw Error(H(151));for(var A=k=null,P=f,$=f=0,z=null,I=v.next();P!==null&&!I.done;$++,I=v.next()){P.index>$?(z=P,P=null):z=P.sibling;var Y=p(h,P,I.value,b);if(Y===null){P===null&&(P=z);break}e&&P&&Y.alternate===null&&t(h,P),f=o(Y,f,$),A===null?k=Y:A.sibling=Y,A=Y,P=z}if(I.done)return n(h,P),Me&&br(h,$),k;if(P===null){for(;!I.done;$++,I=v.next())I=d(h,I.value,b),I!==null&&(f=o(I,f,$),A===null?k=I:A.sibling=I,A=I);return Me&&br(h,$),k}for(P=r(h,P);!I.done;$++,I=v.next())I=S(P,h,$,I.value,b),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?$:I.key),f=o(I,f,$),A===null?k=I:A.sibling=I,A=I);return e&&P.forEach(function(O){return t(h,O)}),Me&&br(h,$),k}function g(h,f,v,b){if(typeof v=="object"&&v!==null&&v.type===ni&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:e:{for(var k=v.key,A=f;A!==null;){if(A.key===k){if(k=v.type,k===ni){if(A.tag===7){n(h,A.sibling),f=i(A,v.props.children),f.return=h,h=f;break e}}else if(A.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Kn&&Tp(k)===A.type){n(h,A.sibling),f=i(A,v.props),f.ref=to(h,A,v),f.return=h,h=f;break e}n(h,A);break}else t(h,A);A=A.sibling}v.type===ni?(f=Lr(v.props.children,h.mode,b,v.key),f.return=h,h=f):(b=tl(v.type,v.key,v.props,null,h.mode,b),b.ref=to(h,f,v),b.return=h,h=b)}return a(h);case ti:e:{for(A=v.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(h,f.sibling),f=i(f,v.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=ou(v,h.mode,b),f.return=h,h=f}return a(h);case Kn:return A=v._init,g(h,f,A(v._payload),b)}if(uo(v))return w(h,f,v,b);if(Xi(v))return y(h,f,v,b);Ea(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,v),f.return=h,h=f):(n(h,f),f=iu(v,h.mode,b),f.return=h,h=f),a(h)):n(h,f)}return g}var Oi=nv(!0),rv=nv(!1),ia={},xn=xr(ia),Uo=xr(ia),Bo=xr(ia);function Pr(e){if(e===ia)throw Error(H(174));return e}function Zd(e,t){switch(Re(Bo,t),Re(Uo,e),Re(xn,ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ku(t,e)}$e(xn),Re(xn,t)}function $i(){$e(xn),$e(Uo),$e(Bo)}function iv(e){Pr(Bo.current);var t=Pr(xn.current),n=Ku(t,e.type);t!==n&&(Re(Uo,e),Re(xn,n))}function ef(e){Uo.current===e&&($e(xn),$e(Uo))}var Fe=xr(0);function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ks=[];function tf(){for(var e=0;e<Ks.length;e++)Ks[e]._workInProgressVersionPrimary=null;Ks.length=0}var Xa=zn.ReactCurrentDispatcher,Zs=zn.ReactCurrentBatchConfig,Dr=0,Ne=null,Qe=null,et=null,El=!1,xo=!1,Ho=0,Tx=0;function ut(){throw Error(H(321))}function nf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function rf(e,t,n,r,i,o){if(Dr=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=e===null||e.memoizedState===null?Nx:Ix,e=n(r,i),xo){o=0;do{if(xo=!1,Ho=0,25<=o)throw Error(H(301));o+=1,et=Qe=null,t.updateQueue=null,Xa.current=Dx,e=n(r,i)}while(xo)}if(Xa.current=Al,t=Qe!==null&&Qe.next!==null,Dr=0,et=Qe=Ne=null,El=!1,t)throw Error(H(300));return e}function of(){var e=Ho!==0;return Ho=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ne.memoizedState=et=e:et=et.next=e,et}function Ht(){if(Qe===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=et===null?Ne.memoizedState:et.next;if(t!==null)et=t,Qe=e;else{if(e===null)throw Error(H(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?Ne.memoizedState=et=e:et=et.next=e}return et}function Vo(e,t){return typeof t=="function"?t(e):t}function eu(e){var t=Ht(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=Qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Dr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Ne.lanes|=c,_r|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,un(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ne.lanes|=o,_r|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function tu(e){var t=Ht(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);un(o,t.memoizedState)||(xt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ov(){}function av(e,t){var n=Ne,r=Ht(),i=t(),o=!un(r.memoizedState,i);if(o&&(r.memoizedState=i,xt=!0),r=r.queue,af(uv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Wo(9,sv.bind(null,n,r,i,t),void 0,null),tt===null)throw Error(H(349));Dr&30||lv(n,t,i)}return i}function lv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sv(e,t,n,r){t.value=n,t.getSnapshot=r,cv(t)&&dv(e)}function uv(e,t,n){return n(function(){cv(t)&&dv(e)})}function cv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function dv(e){var t=Nn(e,1);t!==null&&ln(t,e,1,-1)}function Mp(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Fx.bind(null,Ne,e),[t.memoizedState,e]}function Wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fv(){return Ht().memoizedState}function Ya(e,t,n,r){var i=mn();Ne.flags|=e,i.memoizedState=Wo(1|t,n,void 0,r===void 0?null:r)}function Yl(e,t,n,r){var i=Ht();r=r===void 0?null:r;var o=void 0;if(Qe!==null){var a=Qe.memoizedState;if(o=a.destroy,r!==null&&nf(r,a.deps)){i.memoizedState=Wo(t,n,o,r);return}}Ne.flags|=e,i.memoizedState=Wo(1|t,n,o,r)}function Lp(e,t){return Ya(8390656,8,e,t)}function af(e,t){return Yl(2048,8,e,t)}function pv(e,t){return Yl(4,2,e,t)}function hv(e,t){return Yl(4,4,e,t)}function mv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gv(e,t,n){return n=n!=null?n.concat([e]):null,Yl(4,4,mv.bind(null,t,e),n)}function lf(){}function vv(e,t){var n=Ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yv(e,t){var n=Ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xv(e,t,n){return Dr&21?(un(n,t)||(n=bg(),Ne.lanes|=n,_r|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function Mx(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var r=Zs.transition;Zs.transition={};try{e(!1),t()}finally{Ce=n,Zs.transition=r}}function wv(){return Ht().memoizedState}function Lx(e,t,n){var r=fr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sv(e))bv(t,n);else if(n=Kg(e,t,n,r),n!==null){var i=ht();ln(n,e,r,i),kv(n,t,r)}}function Fx(e,t,n){var r=fr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sv(e))bv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,a)){var s=t.interleaved;s===null?(i.next=i,Yd(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Kg(e,t,i,r),n!==null&&(i=ht(),ln(n,e,r,i),kv(n,t,r))}}function Sv(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function bv(e,t){xo=El=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dd(e,n)}}var Al={readContext:Bt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},Nx={readContext:Bt,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:Lp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ya(4194308,4,mv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ya(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lx.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:Mp,useDebugValue:lf,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Mp(!1),t=e[0];return e=Mx.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=mn();if(Me){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),tt===null)throw Error(H(349));Dr&30||lv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Lp(uv.bind(null,r,o,e),[e]),r.flags|=2048,Wo(9,sv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mn(),t=tt.identifierPrefix;if(Me){var n=Pn,r=An;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ix={readContext:Bt,useCallback:vv,useContext:Bt,useEffect:af,useImperativeHandle:gv,useInsertionEffect:pv,useLayoutEffect:hv,useMemo:yv,useReducer:eu,useRef:fv,useState:function(){return eu(Vo)},useDebugValue:lf,useDeferredValue:function(e){var t=Ht();return xv(t,Qe.memoizedState,e)},useTransition:function(){var e=eu(Vo)[0],t=Ht().memoizedState;return[e,t]},useMutableSource:ov,useSyncExternalStore:av,useId:wv,unstable_isNewReconciler:!1},Dx={readContext:Bt,useCallback:vv,useContext:Bt,useEffect:af,useImperativeHandle:gv,useInsertionEffect:pv,useLayoutEffect:hv,useMemo:yv,useReducer:tu,useRef:fv,useState:function(){return tu(Vo)},useDebugValue:lf,useDeferredValue:function(e){var t=Ht();return Qe===null?t.memoizedState=e:xv(t,Qe.memoizedState,e)},useTransition:function(){var e=tu(Vo)[0],t=Ht().memoizedState;return[e,t]},useMutableSource:ov,useSyncExternalStore:av,useId:wv,unstable_isNewReconciler:!1};function Ti(e,t){try{var n="",r=t;do n+=d1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function nu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function Cv(e,t,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rl||(Rl=!0,Tc=r),Sc(e,t)},n}function Ev(e,t,n){n=$n(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Sc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Sc(e,t),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Fp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _x;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Kx.bind(null,e,t,n),t.then(e,e))}function Np(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ip(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$n(-1,1),t.tag=2,cr(n,t,1))),n.lanes|=1),e)}var zx=zn.ReactCurrentOwner,xt=!1;function pt(e,t,n,r){t.child=e===null?rv(t,null,n,r):Oi(t,e.child,n,r)}function Dp(e,t,n,r,i){n=n.render;var o=t.ref;return Si(t,i),r=rf(e,t,n,r,o,i),n=of(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,In(e,t,i)):(Me&&n&&Wd(t),t.flags|=1,pt(e,t,r,i),t.child)}function _p(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!mf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Av(e,t,o,r,i)):(e=tl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(a,r)&&e.ref===t.ref)return In(e,t,i)}return t.flags|=1,e=pr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Av(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Do(o,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,In(e,t,i)}return bc(e,t,n,r,i)}function Pv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(fi,Pt),Pt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(fi,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Re(fi,Pt),Pt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Re(fi,Pt),Pt|=r;return pt(e,t,i,n),t.child}function Rv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bc(e,t,n,r,i){var o=St(n)?Nr:ft.current;return o=Pi(t,o),Si(t,i),n=rf(e,t,n,r,o,i),r=of(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,In(e,t,i)):(Me&&r&&Wd(t),t.flags|=1,pt(e,t,n,i),t.child)}function zp(e,t,n,r,i){if(St(n)){var o=!0;yl(t)}else o=!1;if(Si(t,i),t.stateNode===null)Ka(e,t),tv(t,n,r),wc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=St(n)?Nr:ft.current,u=Pi(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&$p(t,a,r,u),Zn=!1;var p=t.memoizedState;a.state=p,kl(t,r,a,i),s=t.memoizedState,l!==r||p!==s||wt.current||Zn?(typeof c=="function"&&(xc(t,n,c,r),s=t.memoizedState),(l=Zn||Op(t,n,l,r,p,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Zg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tn(t.type,l),a.props=u,d=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Bt(s):(s=St(n)?Nr:ft.current,s=Pi(t,s));var S=n.getDerivedStateFromProps;(c=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||p!==s)&&$p(t,a,r,s),Zn=!1,p=t.memoizedState,a.state=p,kl(t,r,a,i);var w=t.memoizedState;l!==d||p!==w||wt.current||Zn?(typeof S=="function"&&(xc(t,n,S,r),w=t.memoizedState),(u=Zn||Op(t,n,u,r,p,w,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return kc(e,t,n,r,o,i)}function kc(e,t,n,r,i,o){Rv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Cp(t,n,!1),In(e,t,o);r=t.stateNode,zx.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Oi(t,e.child,null,o),t.child=Oi(t,null,l,o)):pt(e,t,l,o),t.memoizedState=r.state,i&&Cp(t,n,!0),t.child}function Ov(e){var t=e.stateNode;t.pendingContext?kp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kp(e,t.context,!1),Zd(e,t.containerInfo)}function jp(e,t,n,r,i){return Ri(),Jd(i),t.flags|=256,pt(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function Ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function $v(e,t,n){var r=t.pendingProps,i=Fe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Re(Fe,i&1),e===null)return vc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=es(a,r,0,null),e=Lr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ec(n),t.memoizedState=Cc,e):sf(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jx(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=pr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=pr(l,o):(o=Lr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ec(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Cc,r}return o=e.child,e=o.sibling,r=pr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sf(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Aa(e,t,n,r){return r!==null&&Jd(r),Oi(t,e.child,null,n),e=sf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jx(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=nu(Error(H(422))),Aa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),o=Lr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Oi(t,e.child,null,a),t.child.memoizedState=Ec(a),t.memoizedState=Cc,o);if(!(t.mode&1))return Aa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(H(419)),r=nu(o,r,void 0),Aa(e,t,a,r)}if(l=(a&e.childLanes)!==0,xt||l){if(r=tt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nn(e,i),ln(r,e,i,-1))}return hf(),r=nu(Error(H(421))),Aa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Zx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Rt=ur(i.nextSibling),Tt=t,Me=!0,rn=null,e!==null&&(Dt[_t++]=An,Dt[_t++]=Pn,Dt[_t++]=Ir,An=e.id,Pn=e.overflow,Ir=t),t=sf(t,r.children),t.flags|=4096,t)}function Up(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yc(e.return,t,n)}function ru(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Tv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pt(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Up(e,n,t);else if(e.tag===19)Up(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Re(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Cl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ru(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Cl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ru(t,!0,n,null,o);break;case"together":ru(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ka(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_r|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=pr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ux(e,t,n){switch(t.tag){case 3:Ov(t),Ri();break;case 5:iv(t);break;case 1:St(t.type)&&yl(t);break;case 4:Zd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Re(Sl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Re(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?$v(e,t,n):(Re(Fe,Fe.current&1),e=In(e,t,n),e!==null?e.sibling:null);Re(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Pv(e,t,n)}return In(e,t,n)}var Mv,Ac,Lv,Fv;Mv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ac=function(){};Lv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pr(xn.current);var o=null;switch(n){case"input":i=qu(e,i),r=qu(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=Yu(e,i),r=Yu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gl)}Zu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($o.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($o.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Oe("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Fv=function(e,t,n,r){n!==r&&(t.flags|=4)};function no(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bx(e,t,n){var r=t.pendingProps;switch(Gd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return St(t.type)&&vl(),ct(t),null;case 3:return r=t.stateNode,$i(),$e(wt),$e(ft),tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(Fc(rn),rn=null))),Ac(e,t),ct(t),null;case 5:ef(t);var i=Pr(Bo.current);if(n=t.type,e!==null&&t.stateNode!=null)Lv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return ct(t),null}if(e=Pr(xn.current),Ca(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vn]=t,r[jo]=o,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)Oe(fo[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Xf(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":Kf(r,o),Oe("invalid",r)}Zu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",""+l]):$o.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Oe("scroll",r)}switch(n){case"input":ma(r),Yf(r,o,!0);break;case"textarea":ma(r),Zf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=gl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[vn]=t,e[jo]=r,Mv(e,t,!1,!1),t.stateNode=e;e:{switch(a=ec(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)Oe(fo[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":Xf(e,r),i=qu(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":Kf(e,r),i=Yu(e,r),Oe("invalid",e);break;default:i=r}Zu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?cg(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&sg(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&To(e,s):typeof s=="number"&&To(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($o.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Oe("scroll",e):s!=null&&Td(e,o,s,a))}switch(n){case"input":ma(e),Yf(e,r,!1);break;case"textarea":ma(e),Zf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vi(e,!!r.multiple,o,!1):r.defaultValue!=null&&vi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)Fv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(n=Pr(Bo.current),Pr(xn.current),Ca(t)){if(r=t.stateNode,n=t.memoizedProps,r[vn]=t,(o=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:ka(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=t,t.stateNode=r}return ct(t),null;case 13:if($e(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&Rt!==null&&t.mode&1&&!(t.flags&128))Yg(),Ri(),t.flags|=98560,o=!1;else if(o=Ca(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(H(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[vn]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ct(t),o=!1}else rn!==null&&(Fc(rn),rn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?Xe===0&&(Xe=3):hf())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return $i(),Ac(e,t),e===null&&_o(t.stateNode.containerInfo),ct(t),null;case 10:return Xd(t.type._context),ct(t),null;case 17:return St(t.type)&&vl(),ct(t),null;case 19:if($e(Fe),o=t.memoizedState,o===null)return ct(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)no(o,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Cl(e),a!==null){for(t.flags|=128,no(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Re(Fe,Fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ue()>Mi&&(t.flags|=128,r=!0,no(o,!1),t.lanes=4194304)}else{if(!r)if(e=Cl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),no(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Me)return ct(t),null}else 2*Ue()-o.renderingStartTime>Mi&&n!==1073741824&&(t.flags|=128,r=!0,no(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ue(),t.sibling=null,n=Fe.current,Re(Fe,r?n&1|2:n&1),t):(ct(t),null);case 22:case 23:return pf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pt&1073741824&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function Hx(e,t){switch(Gd(t),t.tag){case 1:return St(t.type)&&vl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(),$e(wt),$e(ft),tf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ef(t),null;case 13:if($e(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Fe),null;case 4:return $i(),null;case 10:return Xd(t.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Pa=!1,dt=!1,Vx=typeof WeakSet=="function"?WeakSet:Set,K=null;function di(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function Pc(e,t,n){try{n()}catch(r){De(e,t,r)}}var Bp=!1;function Wx(e,t){if(cc=pl,e=_g(),Vd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var S;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(S=d.firstChild)!==null;)p=d,d=S;for(;;){if(d===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++c===r&&(s=a),(S=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=S}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(dc={focusedElem:e,selectionRange:n},pl=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,g=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:tn(t.type,y),g);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(b){De(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return w=Bp,Bp=!1,w}function wo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pc(t,n,o)}i=i.next}while(i!==r)}}function Kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nv(e){var t=e.alternate;t!==null&&(e.alternate=null,Nv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vn],delete t[jo],delete t[hc],delete t[Px],delete t[Rx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iv(e){return e.tag===5||e.tag===3||e.tag===4}function Hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gl));else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}var it=null,nn=!1;function Bn(e,t,n){for(n=n.child;n!==null;)Dv(e,t,n),n=n.sibling}function Dv(e,t,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:dt||di(n,t);case 6:var r=it,i=nn;it=null,Bn(e,t,n),it=r,nn=i,it!==null&&(nn?(e=it,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(nn?(e=it,n=n.stateNode,e.nodeType===8?Xs(e.parentNode,n):e.nodeType===1&&Xs(e,n),No(e)):Xs(it,n.stateNode));break;case 4:r=it,i=nn,it=n.stateNode.containerInfo,nn=!0,Bn(e,t,n),it=r,nn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Pc(n,t,a),i=i.next}while(i!==r)}Bn(e,t,n);break;case 1:if(!dt&&(di(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,t,l)}Bn(e,t,n);break;case 21:Bn(e,t,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Bn(e,t,n),dt=r):Bn(e,t,n);break;default:Bn(e,t,n)}}function Vp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vx),t.forEach(function(r){var i=ew.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,nn=!1;break e;case 3:it=l.stateNode.containerInfo,nn=!0;break e;case 4:it=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(it===null)throw Error(H(160));Dv(o,a,i),it=null,nn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_v(t,e),t=t.sibling}function _v(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),hn(e),r&4){try{wo(3,e,e.return),Kl(3,e)}catch(y){De(e,e.return,y)}try{wo(5,e,e.return)}catch(y){De(e,e.return,y)}}break;case 1:Kt(t,e),hn(e),r&512&&n!==null&&di(n,n.return);break;case 5:if(Kt(t,e),hn(e),r&512&&n!==null&&di(n,n.return),e.flags&32){var i=e.stateNode;try{To(i,"")}catch(y){De(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&og(i,o),ec(l,a);var u=ec(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?cg(i,d):c==="dangerouslySetInnerHTML"?sg(i,d):c==="children"?To(i,d):Td(i,c,d,u)}switch(l){case"input":Qu(i,o);break;case"textarea":ag(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?vi(i,!!o.multiple,S,!1):p!==!!o.multiple&&(o.defaultValue!=null?vi(i,!!o.multiple,o.defaultValue,!0):vi(i,!!o.multiple,o.multiple?[]:"",!1))}i[jo]=o}catch(y){De(e,e.return,y)}}break;case 6:if(Kt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(H(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){De(e,e.return,y)}}break;case 3:if(Kt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(t.containerInfo)}catch(y){De(e,e.return,y)}break;case 4:Kt(t,e),hn(e);break;case 13:Kt(t,e),hn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(df=Ue())),r&4&&Vp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(u=dt)||c,Kt(t,e),dt=u):Kt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(K=e,c=e.child;c!==null;){for(d=K=c;K!==null;){switch(p=K,S=p.child,p.tag){case 0:case 11:case 14:case 15:wo(4,p,p.return);break;case 1:di(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){De(r,n,y)}}break;case 5:di(p,p.return);break;case 22:if(p.memoizedState!==null){Gp(d);continue}}S!==null?(S.return=p,K=S):Gp(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ug("display",a))}catch(y){De(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){De(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(t,e),hn(e),r&4&&Vp(e);break;case 21:break;default:Kt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Iv(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(To(i,""),r.flags&=-33);var o=Hp(e);$c(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Hp(e);Oc(e,l,a);break;default:throw Error(H(161))}}catch(s){De(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gx(e,t,n){K=e,zv(e)}function zv(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Pa;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||dt;l=Pa;var u=dt;if(Pa=a,(dt=s)&&!u)for(K=i;K!==null;)a=K,s=a.child,a.tag===22&&a.memoizedState!==null?Jp(i):s!==null?(s.return=a,K=s):Jp(i);for(;o!==null;)K=o,zv(o),o=o.sibling;K=i,Pa=l,dt=u}Wp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):Wp(e)}}function Wp(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||Kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Rp(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rp(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&No(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}dt||t.flags&512&&Rc(t)}catch(p){De(t,t.return,p)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Gp(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Jp(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Kl(4,t)}catch(s){De(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){De(t,i,s)}}var o=t.return;try{Rc(t)}catch(s){De(t,o,s)}break;case 5:var a=t.return;try{Rc(t)}catch(s){De(t,a,s)}}}catch(s){De(t,t.return,s)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var Jx=Math.ceil,Pl=zn.ReactCurrentDispatcher,uf=zn.ReactCurrentOwner,jt=zn.ReactCurrentBatchConfig,Se=0,tt=null,Ve=null,ot=0,Pt=0,fi=xr(0),Xe=0,Go=null,_r=0,Zl=0,cf=0,So=null,yt=null,df=0,Mi=1/0,kn=null,Rl=!1,Tc=null,dr=null,Ra=!1,ir=null,Ol=0,bo=0,Mc=null,Za=-1,el=0;function ht(){return Se&6?Ue():Za!==-1?Za:Za=Ue()}function fr(e){return e.mode&1?Se&2&&ot!==0?ot&-ot:$x.transition!==null?(el===0&&(el=bg()),el):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:Og(e.type)),e):1}function ln(e,t,n,r){if(50<bo)throw bo=0,Mc=null,Error(H(185));ta(e,n,r),(!(Se&2)||e!==tt)&&(e===tt&&(!(Se&2)&&(Zl|=n),Xe===4&&nr(e,ot)),bt(e,r),n===1&&Se===0&&!(t.mode&1)&&(Mi=Ue()+500,Ql&&wr()))}function bt(e,t){var n=e.callbackNode;$1(e,t);var r=fl(e,e===tt?ot:0);if(r===0)n!==null&&np(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&np(n),t===1)e.tag===0?Ox(qp.bind(null,e)):qg(qp.bind(null,e)),Ex(function(){!(Se&6)&&wr()}),n=null;else{switch(kg(r)){case 1:n=Id;break;case 4:n=wg;break;case 16:n=dl;break;case 536870912:n=Sg;break;default:n=dl}n=Jv(n,jv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jv(e,t){if(Za=-1,el=0,Se&6)throw Error(H(327));var n=e.callbackNode;if(bi()&&e.callbackNode!==n)return null;var r=fl(e,e===tt?ot:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$l(e,r);else{t=r;var i=Se;Se|=2;var o=Bv();(tt!==e||ot!==t)&&(kn=null,Mi=Ue()+500,Mr(e,t));do try{Xx();break}catch(l){Uv(e,l)}while(1);Qd(),Pl.current=o,Se=i,Ve!==null?t=0:(tt=null,ot=0,t=Xe)}if(t!==0){if(t===2&&(i=oc(e),i!==0&&(r=i,t=Lc(e,i))),t===1)throw n=Go,Mr(e,0),nr(e,r),bt(e,Ue()),n;if(t===6)nr(e,r);else{if(i=e.current.alternate,!(r&30)&&!qx(i)&&(t=$l(e,r),t===2&&(o=oc(e),o!==0&&(r=o,t=Lc(e,o))),t===1))throw n=Go,Mr(e,0),nr(e,r),bt(e,Ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:kr(e,yt,kn);break;case 3:if(nr(e,r),(r&130023424)===r&&(t=df+500-Ue(),10<t)){if(fl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ht(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pc(kr.bind(null,e,yt,kn),t);break}kr(e,yt,kn);break;case 4:if(nr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-an(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jx(r/1960))-r,10<r){e.timeoutHandle=pc(kr.bind(null,e,yt,kn),r);break}kr(e,yt,kn);break;case 5:kr(e,yt,kn);break;default:throw Error(H(329))}}}return bt(e,Ue()),e.callbackNode===n?jv.bind(null,e):null}function Lc(e,t){var n=So;return e.current.memoizedState.isDehydrated&&(Mr(e,t).flags|=256),e=$l(e,t),e!==2&&(t=yt,yt=n,t!==null&&Fc(t)),e}function Fc(e){yt===null?yt=e:yt.push.apply(yt,e)}function qx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!un(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~cf,t&=~Zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function qp(e){if(Se&6)throw Error(H(327));bi();var t=fl(e,0);if(!(t&1))return bt(e,Ue()),null;var n=$l(e,t);if(e.tag!==0&&n===2){var r=oc(e);r!==0&&(t=r,n=Lc(e,r))}if(n===1)throw n=Go,Mr(e,0),nr(e,t),bt(e,Ue()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kr(e,yt,kn),bt(e,Ue()),null}function ff(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(Mi=Ue()+500,Ql&&wr())}}function zr(e){ir!==null&&ir.tag===0&&!(Se&6)&&bi();var t=Se;Se|=1;var n=jt.transition,r=Ce;try{if(jt.transition=null,Ce=1,e)return e()}finally{Ce=r,jt.transition=n,Se=t,!(Se&6)&&wr()}}function pf(){Pt=fi.current,$e(fi)}function Mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cx(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vl();break;case 3:$i(),$e(wt),$e(ft),tf();break;case 5:ef(r);break;case 4:$i();break;case 13:$e(Fe);break;case 19:$e(Fe);break;case 10:Xd(r.type._context);break;case 22:case 23:pf()}n=n.return}if(tt=e,Ve=e=pr(e.current,null),ot=Pt=t,Xe=0,Go=null,cf=Zl=_r=0,yt=So=null,Ar!==null){for(t=0;t<Ar.length;t++)if(n=Ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Ar=null}return e}function Uv(e,t){do{var n=Ve;try{if(Qd(),Xa.current=Al,El){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}El=!1}if(Dr=0,et=Qe=Ne=null,xo=!1,Ho=0,uf.current=null,n===null||n.return===null){Xe=1,Go=t,Ve=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=ot,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var S=Np(a);if(S!==null){S.flags&=-257,Ip(S,a,l,o,t),S.mode&1&&Fp(o,u,t),t=S,s=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(s),t.updateQueue=y}else w.add(s);break e}else{if(!(t&1)){Fp(o,u,t),hf();break e}s=Error(H(426))}}else if(Me&&l.mode&1){var g=Np(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ip(g,a,l,o,t),Jd(Ti(s,l));break e}}o=s=Ti(s,l),Xe!==4&&(Xe=2),So===null?So=[o]:So.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Cv(o,s,t);Pp(o,h);break e;case 1:l=s;var f=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dr===null||!dr.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Ev(o,l,t);Pp(o,b);break e}}o=o.return}while(o!==null)}Vv(n)}catch(k){t=k,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function Bv(){var e=Pl.current;return Pl.current=Al,e===null?Al:e}function hf(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(_r&268435455)&&!(Zl&268435455)||nr(tt,ot)}function $l(e,t){var n=Se;Se|=2;var r=Bv();(tt!==e||ot!==t)&&(kn=null,Mr(e,t));do try{Qx();break}catch(i){Uv(e,i)}while(1);if(Qd(),Se=n,Pl.current=r,Ve!==null)throw Error(H(261));return tt=null,ot=0,Xe}function Qx(){for(;Ve!==null;)Hv(Ve)}function Xx(){for(;Ve!==null&&!S1();)Hv(Ve)}function Hv(e){var t=Gv(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?Vv(e):Ve=t,uf.current=null}function Vv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hx(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ve=null;return}}else if(n=Bx(n,t,Pt),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Xe===0&&(Xe=5)}function kr(e,t,n){var r=Ce,i=jt.transition;try{jt.transition=null,Ce=1,Yx(e,t,n,r)}finally{jt.transition=i,Ce=r}return null}function Yx(e,t,n,r){do bi();while(ir!==null);if(Se&6)throw Error(H(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(T1(e,o),e===tt&&(Ve=tt=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,Jv(dl,function(){return bi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=jt.transition,jt.transition=null;var a=Ce;Ce=1;var l=Se;Se|=4,uf.current=null,Wx(e,n),_v(n,e),vx(dc),pl=!!cc,dc=cc=null,e.current=n,Gx(n),b1(),Se=l,Ce=a,jt.transition=o}else e.current=n;if(Ra&&(Ra=!1,ir=e,Ol=i),o=e.pendingLanes,o===0&&(dr=null),E1(n.stateNode),bt(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rl)throw Rl=!1,e=Tc,Tc=null,e;return Ol&1&&e.tag!==0&&bi(),o=e.pendingLanes,o&1?e===Mc?bo++:(bo=0,Mc=e):bo=0,wr(),null}function bi(){if(ir!==null){var e=kg(Ol),t=jt.transition,n=Ce;try{if(jt.transition=null,Ce=16>e?16:e,ir===null)var r=!1;else{if(e=ir,ir=null,Ol=0,Se&6)throw Error(H(331));var i=Se;for(Se|=4,K=e.current;K!==null;){var o=K,a=o.child;if(K.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(K=u;K!==null;){var c=K;switch(c.tag){case 0:case 11:case 15:wo(8,c,o)}var d=c.child;if(d!==null)d.return=c,K=d;else for(;K!==null;){c=K;var p=c.sibling,S=c.return;if(Nv(c),c===u){K=null;break}if(p!==null){p.return=S,K=p;break}K=S}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}K=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,K=a;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wo(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,K=h;break e}K=o.return}}var f=e.current;for(K=f;K!==null;){a=K;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,K=v;else e:for(a=f;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Kl(9,l)}}catch(k){De(l,l.return,k)}if(l===a){K=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,K=b;break e}K=l.return}}if(Se=i,wr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Vl,e)}catch{}r=!0}return r}finally{Ce=n,jt.transition=t}}return!1}function Qp(e,t,n){t=Ti(n,t),t=Cv(e,t,1),e=cr(e,t,1),t=ht(),e!==null&&(ta(e,1,t),bt(e,t))}function De(e,t,n){if(e.tag===3)Qp(e,e,n);else for(;t!==null;){if(t.tag===3){Qp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){e=Ti(n,e),e=Ev(t,e,1),t=cr(t,e,1),e=ht(),t!==null&&(ta(t,1,e),bt(t,e));break}}t=t.return}}function Kx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(ot&n)===n&&(Xe===4||Xe===3&&(ot&130023424)===ot&&500>Ue()-df?Mr(e,0):cf|=n),bt(e,t)}function Wv(e,t){t===0&&(e.mode&1?(t=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):t=1);var n=ht();e=Nn(e,t),e!==null&&(ta(e,t,n),bt(e,n))}function Zx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wv(e,n)}function ew(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),Wv(e,n)}var Gv;Gv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,Ux(e,t,n);xt=!!(e.flags&131072)}else xt=!1,Me&&t.flags&1048576&&Qg(t,wl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ka(e,t),e=t.pendingProps;var i=Pi(t,ft.current);Si(t,n),i=rf(null,t,r,e,i,n);var o=of();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(o=!0,yl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kd(t),i.updater=Xl,t.stateNode=i,i._reactInternals=t,wc(t,r,e,n),t=kc(null,t,r,!0,o,n)):(t.tag=0,Me&&o&&Wd(t),pt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ka(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=nw(r),e=tn(r,e),i){case 0:t=bc(null,t,r,e,n);break e;case 1:t=zp(null,t,r,e,n);break e;case 11:t=Dp(null,t,r,e,n);break e;case 14:t=_p(null,t,r,tn(r.type,e),n);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),bc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),zp(e,t,r,i,n);case 3:e:{if(Ov(t),e===null)throw Error(H(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Zg(e,t),kl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ti(Error(H(423)),t),t=jp(e,t,r,n,i);break e}else if(r!==i){i=Ti(Error(H(424)),t),t=jp(e,t,r,n,i);break e}else for(Rt=ur(t.stateNode.containerInfo.firstChild),Tt=t,Me=!0,rn=null,n=rv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ri(),r===i){t=In(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return iv(t),e===null&&vc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,fc(r,i)?a=null:o!==null&&fc(r,o)&&(t.flags|=32),Rv(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&vc(t),null;case 13:return $v(e,t,n);case 4:return Zd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oi(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Dp(e,t,r,i,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Re(Sl,r._currentValue),r._currentValue=a,o!==null)if(un(o.value,a)){if(o.children===i.children&&!wt.current){t=In(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=$n(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),yc(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(H(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Si(t,n),i=Bt(i),r=r(i),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,i=tn(r,t.pendingProps),i=tn(r.type,i),_p(e,t,r,i,n);case 15:return Av(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Ka(e,t),t.tag=1,St(r)?(e=!0,yl(t)):e=!1,Si(t,n),tv(t,r,i),wc(t,r,i,n),kc(null,t,r,!0,e,n);case 19:return Tv(e,t,n);case 22:return Pv(e,t,n)}throw Error(H(156,t.tag))};function Jv(e,t){return xg(e,t)}function tw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,r){return new tw(e,t,n,r)}function mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nw(e){if(typeof e=="function")return mf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ld)return 11;if(e===Fd)return 14}return 2}function pr(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function tl(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")mf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ni:return Lr(n.children,i,o,t);case Md:a=8,i|=8;break;case Vu:return e=zt(12,n,t,i|2),e.elementType=Vu,e.lanes=o,e;case Wu:return e=zt(13,n,t,i),e.elementType=Wu,e.lanes=o,e;case Gu:return e=zt(19,n,t,i),e.elementType=Gu,e.lanes=o,e;case ng:return es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eg:a=10;break e;case tg:a=9;break e;case Ld:a=11;break e;case Fd:a=14;break e;case Kn:a=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=zt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Lr(e,t,n,r){return e=zt(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=zt(22,e,r,t),e.elementType=ng,e.lanes=n,e.stateNode={isHidden:!1},e}function iu(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function ou(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zs(0),this.expirationTimes=zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gf(e,t,n,r,i,o,a,l,s){return e=new rw(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=zt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(o),e}function iw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qv(e){if(!e)return vr;e=e._reactInternals;e:{if(Hr(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(St(n))return Jg(e,n,t)}return t}function Qv(e,t,n,r,i,o,a,l,s){return e=gf(n,r,!0,e,i,o,a,l,s),e.context=qv(null),n=e.current,r=ht(),i=fr(n),o=$n(r,i),o.callback=t??null,cr(n,o,i),e.current.lanes=i,ta(e,i,r),bt(e,r),e}function ts(e,t,n,r){var i=t.current,o=ht(),a=fr(i);return n=qv(n),t.context===null?t.context=n:t.pendingContext=n,t=$n(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cr(i,t,a),e!==null&&(ln(e,i,a,o),Qa(e,i,a)),a}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vf(e,t){Xp(e,t),(e=e.alternate)&&Xp(e,t)}function ow(){return null}var Xv=typeof reportError=="function"?reportError:function(e){console.error(e)};function yf(e){this._internalRoot=e}ns.prototype.render=yf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));ts(e,t,null,null)};ns.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zr(function(){ts(null,e,null,null)}),t[Fn]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ag();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tr.length&&t!==0&&t<tr[n].priority;n++);tr.splice(n,0,e),n===0&&Rg(e)}};function xf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function aw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Tl(a);o.call(u)}}var a=Qv(t,r,e,0,null,!1,!1,"",Yp);return e._reactRootContainer=a,e[Fn]=a.current,_o(e.nodeType===8?e.parentNode:e),zr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Tl(s);l.call(u)}}var s=gf(e,0,!1,null,null,!1,!1,"",Yp);return e._reactRootContainer=s,e[Fn]=s.current,_o(e.nodeType===8?e.parentNode:e),zr(function(){ts(t,s,n,r)}),s}function is(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Tl(a);l.call(s)}}ts(t,a,e,i)}else a=aw(n,t,e,i,r);return Tl(a)}Cg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=co(t.pendingLanes);n!==0&&(Dd(t,n|1),bt(t,Ue()),!(Se&6)&&(Mi=Ue()+500,wr()))}break;case 13:zr(function(){var r=Nn(e,1);if(r!==null){var i=ht();ln(r,e,1,i)}}),vf(e,1)}};_d=function(e){if(e.tag===13){var t=Nn(e,134217728);if(t!==null){var n=ht();ln(t,e,134217728,n)}vf(e,134217728)}};Eg=function(e){if(e.tag===13){var t=fr(e),n=Nn(e,t);if(n!==null){var r=ht();ln(n,e,t,r)}vf(e,t)}};Ag=function(){return Ce};Pg=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}};nc=function(e,t,n){switch(t){case"input":if(Qu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ql(r);if(!i)throw Error(H(90));ig(r),Qu(r,i)}}}break;case"textarea":ag(e,n);break;case"select":t=n.value,t!=null&&vi(e,!!n.multiple,t,!1)}};pg=ff;hg=zr;var lw={usingClientEntryPoint:!1,Events:[ra,ai,ql,dg,fg,ff]},ro={findFiberByHostInstance:Er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sw={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vg(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Vl=Oa.inject(sw),yn=Oa}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lw;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(t))throw Error(H(200));return iw(e,t,null,n)};Lt.createRoot=function(e,t){if(!xf(e))throw Error(H(299));var n=!1,r="",i=Xv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gf(e,1,!1,null,null,n,!1,r,i),e[Fn]=t.current,_o(e.nodeType===8?e.parentNode:e),new yf(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=vg(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return zr(e)};Lt.hydrate=function(e,t,n){if(!rs(t))throw Error(H(200));return is(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!xf(e))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Qv(t,null,e,1,n??null,i,!1,o,a),e[Fn]=t.current,_o(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};Lt.render=function(e,t,n){if(!rs(t))throw Error(H(200));return is(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!rs(e))throw Error(H(40));return e._reactRootContainer?(zr(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};Lt.unstable_batchedUpdates=ff;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return is(e,t,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Lt})(o1);var Kp=Uu;ju.createRoot=Kp.createRoot,ju.hydrateRoot=Kp.hydrateRoot;var Li={},uw={get exports(){return Li},set exports(e){Li=e}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,wf=nt?Symbol.for("react.element"):60103,Sf=nt?Symbol.for("react.portal"):60106,os=nt?Symbol.for("react.fragment"):60107,as=nt?Symbol.for("react.strict_mode"):60108,ls=nt?Symbol.for("react.profiler"):60114,ss=nt?Symbol.for("react.provider"):60109,us=nt?Symbol.for("react.context"):60110,bf=nt?Symbol.for("react.async_mode"):60111,cs=nt?Symbol.for("react.concurrent_mode"):60111,ds=nt?Symbol.for("react.forward_ref"):60112,fs=nt?Symbol.for("react.suspense"):60113,cw=nt?Symbol.for("react.suspense_list"):60120,ps=nt?Symbol.for("react.memo"):60115,hs=nt?Symbol.for("react.lazy"):60116,dw=nt?Symbol.for("react.block"):60121,fw=nt?Symbol.for("react.fundamental"):60117,pw=nt?Symbol.for("react.responder"):60118,hw=nt?Symbol.for("react.scope"):60119;function Nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case wf:switch(e=e.type,e){case bf:case cs:case os:case ls:case as:case fs:return e;default:switch(e=e&&e.$$typeof,e){case us:case ds:case hs:case ps:case ss:return e;default:return t}}case Sf:return t}}}function Yv(e){return Nt(e)===cs}Ee.AsyncMode=bf;Ee.ConcurrentMode=cs;Ee.ContextConsumer=us;Ee.ContextProvider=ss;Ee.Element=wf;Ee.ForwardRef=ds;Ee.Fragment=os;Ee.Lazy=hs;Ee.Memo=ps;Ee.Portal=Sf;Ee.Profiler=ls;Ee.StrictMode=as;Ee.Suspense=fs;Ee.isAsyncMode=function(e){return Yv(e)||Nt(e)===bf};Ee.isConcurrentMode=Yv;Ee.isContextConsumer=function(e){return Nt(e)===us};Ee.isContextProvider=function(e){return Nt(e)===ss};Ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===wf};Ee.isForwardRef=function(e){return Nt(e)===ds};Ee.isFragment=function(e){return Nt(e)===os};Ee.isLazy=function(e){return Nt(e)===hs};Ee.isMemo=function(e){return Nt(e)===ps};Ee.isPortal=function(e){return Nt(e)===Sf};Ee.isProfiler=function(e){return Nt(e)===ls};Ee.isStrictMode=function(e){return Nt(e)===as};Ee.isSuspense=function(e){return Nt(e)===fs};Ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===os||e===cs||e===ls||e===as||e===fs||e===cw||typeof e=="object"&&e!==null&&(e.$$typeof===hs||e.$$typeof===ps||e.$$typeof===ss||e.$$typeof===us||e.$$typeof===ds||e.$$typeof===fw||e.$$typeof===pw||e.$$typeof===hw||e.$$typeof===dw)};Ee.typeOf=Nt;(function(e){e.exports=Ee})(uw);function mw(e){function t(j,V,G,re,M){for(var pe=0,J=0,Te=0,be=0,ye,ce,_e=0,Ke=0,me,ze=me=ye=0,we=0,Ge=0,Un=0,Je=0,dn=G.length,fn=dn-1,vt,oe="",Le="",Gi="",Gr="",pn;we<dn;){if(ce=G.charCodeAt(we),we===fn&&J+be+Te+pe!==0&&(J!==0&&(ce=J===47?10:47),be=Te=pe=0,dn++,fn++),J+be+Te+pe===0){if(we===fn&&(0<Ge&&(oe=oe.replace(p,"")),0<oe.trim().length)){switch(ce){case 32:case 9:case 59:case 13:case 10:break;default:oe+=G.charAt(we)}ce=59}switch(ce){case 123:for(oe=oe.trim(),ye=oe.charCodeAt(0),me=1,Je=++we;we<dn;){switch(ce=G.charCodeAt(we)){case 123:me++;break;case 125:me--;break;case 47:switch(ce=G.charCodeAt(we+1)){case 42:case 47:e:{for(ze=we+1;ze<fn;++ze)switch(G.charCodeAt(ze)){case 47:if(ce===42&&G.charCodeAt(ze-1)===42&&we+2!==ze){we=ze+1;break e}break;case 10:if(ce===47){we=ze+1;break e}}we=ze}}break;case 91:ce++;case 40:ce++;case 34:case 39:for(;we++<fn&&G.charCodeAt(we)!==ce;);}if(me===0)break;we++}switch(me=G.substring(Je,we),ye===0&&(ye=(oe=oe.replace(d,"").trim()).charCodeAt(0)),ye){case 64:switch(0<Ge&&(oe=oe.replace(p,"")),ce=oe.charCodeAt(1),ce){case 100:case 109:case 115:case 45:Ge=V;break;default:Ge=Q}if(me=t(V,Ge,me,ce,M+1),Je=me.length,0<_&&(Ge=n(Q,oe,Un),pn=l(3,me,Ge,V,R,O,Je,ce,M,re),oe=Ge.join(""),pn!==void 0&&(Je=(me=pn.trim()).length)===0&&(ce=0,me="")),0<Je)switch(ce){case 115:oe=oe.replace(A,a);case 100:case 109:case 45:me=oe+"{"+me+"}";break;case 107:oe=oe.replace(f,"$1 $2"),me=oe+"{"+me+"}",me=U===1||U===2&&o("@"+me,3)?"@-webkit-"+me+"@"+me:"@"+me;break;default:me=oe+me,re===112&&(me=(Le+=me,""))}else me="";break;default:me=t(V,n(V,oe,Un),me,re,M+1)}Gi+=me,me=Un=Ge=ze=ye=0,oe="",ce=G.charCodeAt(++we);break;case 125:case 59:if(oe=(0<Ge?oe.replace(p,""):oe).trim(),1<(Je=oe.length))switch(ze===0&&(ye=oe.charCodeAt(0),ye===45||96<ye&&123>ye)&&(Je=(oe=oe.replace(" ",":")).length),0<_&&(pn=l(1,oe,V,j,R,O,Le.length,re,M,re))!==void 0&&(Je=(oe=pn.trim()).length)===0&&(oe="\0\0"),ye=oe.charCodeAt(0),ce=oe.charCodeAt(1),ye){case 0:break;case 64:if(ce===105||ce===99){Gr+=oe+G.charAt(we);break}default:oe.charCodeAt(Je-1)!==58&&(Le+=i(oe,ye,ce,oe.charCodeAt(2)))}Un=Ge=ze=ye=0,oe="",ce=G.charCodeAt(++we)}}switch(ce){case 13:case 10:J===47?J=0:1+ye===0&&re!==107&&0<oe.length&&(Ge=1,oe+="\0"),0<_*W&&l(0,oe,V,j,R,O,Le.length,re,M,re),O=1,R++;break;case 59:case 125:if(J+be+Te+pe===0){O++;break}default:switch(O++,vt=G.charAt(we),ce){case 9:case 32:if(be+pe+J===0)switch(_e){case 44:case 58:case 9:case 32:vt="";break;default:ce!==32&&(vt=" ")}break;case 0:vt="\\0";break;case 12:vt="\\f";break;case 11:vt="\\v";break;case 38:be+J+pe===0&&(Ge=Un=1,vt="\f"+vt);break;case 108:if(be+J+pe+T===0&&0<ze)switch(we-ze){case 2:_e===112&&G.charCodeAt(we-3)===58&&(T=_e);case 8:Ke===111&&(T=Ke)}break;case 58:be+J+pe===0&&(ze=we);break;case 44:J+Te+be+pe===0&&(Ge=1,vt+="\r");break;case 34:case 39:J===0&&(be=be===ce?0:be===0?ce:be);break;case 91:be+J+Te===0&&pe++;break;case 93:be+J+Te===0&&pe--;break;case 41:be+J+pe===0&&Te--;break;case 40:if(be+J+pe===0){if(ye===0)switch(2*_e+3*Ke){case 533:break;default:ye=1}Te++}break;case 64:J+Te+be+pe+ze+me===0&&(me=1);break;case 42:case 47:if(!(0<be+pe+Te))switch(J){case 0:switch(2*ce+3*G.charCodeAt(we+1)){case 235:J=47;break;case 220:Je=we,J=42}break;case 42:ce===47&&_e===42&&Je+2!==we&&(G.charCodeAt(Je+2)===33&&(Le+=G.substring(Je,we+1)),vt="",J=0)}}J===0&&(oe+=vt)}Ke=_e,_e=ce,we++}if(Je=Le.length,0<Je){if(Ge=V,0<_&&(pn=l(2,Le,Ge,j,R,O,Je,re,M,re),pn!==void 0&&(Le=pn).length===0))return Gr+Le+Gi;if(Le=Ge.join(",")+"{"+Le+"}",U*T!==0){switch(U!==2||o(Le,2)||(T=0),T){case 111:Le=Le.replace(b,":-moz-$1")+Le;break;case 112:Le=Le.replace(v,"::-webkit-input-$1")+Le.replace(v,"::-moz-$1")+Le.replace(v,":-ms-input-$1")+Le}T=0}}return Gr+Le+Gi}function n(j,V,G){var re=V.trim().split(g);V=re;var M=re.length,pe=j.length;switch(pe){case 0:case 1:var J=0;for(j=pe===0?"":j[0]+" ";J<M;++J)V[J]=r(j,V[J],G).trim();break;default:var Te=J=0;for(V=[];J<M;++J)for(var be=0;be<pe;++be)V[Te++]=r(j[be]+" ",re[J],G).trim()}return V}function r(j,V,G){var re=V.charCodeAt(0);switch(33>re&&(re=(V=V.trim()).charCodeAt(0)),re){case 38:return V.replace(h,"$1"+j.trim());case 58:return j.trim()+V.replace(h,"$1"+j.trim());default:if(0<1*G&&0<V.indexOf("\f"))return V.replace(h,(j.charCodeAt(0)===58?"":"$1")+j.trim())}return j+V}function i(j,V,G,re){var M=j+";",pe=2*V+3*G+4*re;if(pe===944){j=M.indexOf(":",9)+1;var J=M.substring(j,M.length-1).trim();return J=M.substring(0,j).trim()+J+";",U===1||U===2&&o(J,1)?"-webkit-"+J+J:J}if(U===0||U===2&&!o(M,1))return M;switch(pe){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(Y,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return J=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+J+"-webkit-"+M+"-ms-flex-pack"+J+M;case 1005:return w.test(M)?M.replace(S,":-webkit-")+M.replace(S,":-moz-")+M:M;case 1e3:switch(J=M.substring(13).trim(),V=J.indexOf("-")+1,J.charCodeAt(0)+J.charCodeAt(V)){case 226:J=M.replace(k,"tb");break;case 232:J=M.replace(k,"tb-rl");break;case 220:J=M.replace(k,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+J+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(V=(M=j).length-10,J=(M.charCodeAt(V)===33?M.substring(0,V):M).substring(j.indexOf(":",7)+1).trim(),pe=J.charCodeAt(0)+(J.charCodeAt(7)|0)){case 203:if(111>J.charCodeAt(8))break;case 115:M=M.replace(J,"-webkit-"+J)+";"+M;break;case 207:case 102:M=M.replace(J,"-webkit-"+(102<pe?"inline-":"")+"box")+";"+M.replace(J,"-webkit-"+J)+";"+M.replace(J,"-ms-"+J+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return J=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+J+"-ms-flex-"+J+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace($,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace($,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(I.test(j)===!0)return(J=j.substring(j.indexOf(":")+1)).charCodeAt(0)===115?i(j.replace("stretch","fill-available"),V,G,re).replace(":fill-available",":stretch"):M.replace(J,"-webkit-"+J)+M.replace(J,"-moz-"+J.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,G+re===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+M}return M}function o(j,V){var G=j.indexOf(V===1?":":"{"),re=j.substring(0,V!==3?G:10);return G=j.substring(G+1,j.length-1),X(V!==2?re:re.replace(z,"$1"),G,V)}function a(j,V){var G=i(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return G!==V+";"?G.replace(P," or ($1)").substring(4):"("+V+")"}function l(j,V,G,re,M,pe,J,Te,be,ye){for(var ce=0,_e=V,Ke;ce<_;++ce)switch(Ke=q[ce].call(c,j,_e,G,re,M,pe,J,Te,be,ye)){case void 0:case!1:case!0:case null:break;default:_e=Ke}if(_e!==V)return _e}function s(j){switch(j){case void 0:case null:_=q.length=0;break;default:if(typeof j=="function")q[_++]=j;else if(typeof j=="object")for(var V=0,G=j.length;V<G;++V)s(j[V]);else W=!!j|0}return s}function u(j){return j=j.prefix,j!==void 0&&(X=null,j?typeof j!="function"?U=1:(U=2,X=j):U=0),u}function c(j,V){var G=j;if(33>G.charCodeAt(0)&&(G=G.trim()),ae=G,G=[ae],0<_){var re=l(-1,V,G,G,R,O,0,0,0,0);re!==void 0&&typeof re=="string"&&(V=re)}var M=t(Q,G,V,0,0);return 0<_&&(re=l(-2,M,G,G,R,O,M.length,0,0,0),re!==void 0&&(M=re)),ae="",T=0,O=R=1,M}var d=/^\0+/g,p=/[\0\r\f]/g,S=/: */g,w=/zoo|gra/,y=/([,: ])(transform)/g,g=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,$=/-self|flex-/g,z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,Y=/([^-])(image-set\()/,O=1,R=1,T=0,U=1,Q=[],q=[],_=0,X=null,W=0,ae="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var Kv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function gw(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var vw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Zp=gw(function(e){return vw.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),kf=Li,yw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ww={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cf={};Cf[kf.ForwardRef]=ww;Cf[kf.Memo]=Zv;function eh(e){return kf.isMemo(e)?Zv:Cf[e.$$typeof]||yw}var Sw=Object.defineProperty,bw=Object.getOwnPropertyNames,th=Object.getOwnPropertySymbols,kw=Object.getOwnPropertyDescriptor,Cw=Object.getPrototypeOf,nh=Object.prototype;function e0(e,t,n){if(typeof t!="string"){if(nh){var r=Cw(t);r&&r!==nh&&e0(e,r,n)}var i=bw(t);th&&(i=i.concat(th(t)));for(var o=eh(e),a=eh(t),l=0;l<i.length;++l){var s=i[l];if(!xw[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var u=kw(t,s);try{Sw(e,s,u)}catch{}}}}return e}var Ew=e0;function on(){return(on=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var rh=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Nc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Li.typeOf(e)},Ml=Object.freeze([]),hr=Object.freeze({});function Fi(e){return typeof e=="function"}function ih(e){return e.displayName||e.name||"Component"}function Ef(e){return e&&typeof e.styledComponentId=="string"}var Ni=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Af=typeof window<"u"&&"HTMLElement"in window,Aw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Pw={};function jr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Rw=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&jr(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),nl=new Map,Ll=new Map,ko=1,$a=function(e){if(nl.has(e))return nl.get(e);for(;Ll.has(ko);)ko++;var t=ko++;return nl.set(e,t),Ll.set(t,e),t},Ow=function(e){return Ll.get(e)},$w=function(e,t){t>=ko&&(ko=t+1),nl.set(e,t),Ll.set(t,e)},Tw="style["+Ni+'][data-styled-version="5.3.9"]',Mw=new RegExp("^"+Ni+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Lw=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Fw=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(Mw);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&($w(u,s),Lw(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},Nw=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},t0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(Ni))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ni,"active"),r.setAttribute("data-styled-version","5.3.9");var a=Nw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Iw=function(){function e(n){var r=this.element=t0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}jr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Dw=function(){function e(n){var r=this.element=t0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),_w=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),oh=Af,zw={isServer:!Af,useCSSOMInjection:!Aw},Fl=function(){function e(n,r,i){n===void 0&&(n=hr),r===void 0&&(r={}),this.options=on({},zw,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Af&&oh&&(oh=!1,function(o){for(var a=document.querySelectorAll(Tw),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Ni)!=="active"&&(Fw(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return $a(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(on({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new _w(a):o?new Iw(a):new Dw(a),new Rw(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if($a(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules($a(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup($a(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=Ow(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var c=Ni+".g"+a+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(p){p.length>0&&(d+=p+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),jw=/(a)(d)/gi,ah=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ic(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ah(t%52)+n;return(ah(t%52)+n).replace(jw,"$1-$2")}var pi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},n0=function(e){return pi(5381,e)};function r0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Fi(n)&&!Ef(n))return!1}return!0}var Uw=n0("5.3.9"),Bw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&r0(t),this.componentId=n,this.baseHash=pi(Uw,n),this.baseStyle=r,Fl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Ur(this.rules,t,n,r).join(""),l=Ic(pi(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=pi(this.baseHash,r.hash),d="",p=0;p<u;p++){var S=this.rules[p];if(typeof S=="string")d+=S;else if(S){var w=Ur(S,t,n,r),y=Array.isArray(w)?w.join(""):w;c=pi(c,y+p),d+=y}}if(d){var g=Ic(c>>>0);if(!n.hasNameForId(i,g)){var h=r(d,"."+g,void 0,i);n.insertRules(i,g,h)}o.push(g)}}return o.join(" ")},e}(),Hw=/^\s*\/\/.*$/gm,Vw=[":","[",".","#"];function Ww(e){var t,n,r,i,o=e===void 0?hr:e,a=o.options,l=a===void 0?hr:a,s=o.plugins,u=s===void 0?Ml:s,c=new mw(l),d=[],p=function(y){function g(h){if(h)try{y(h+"}")}catch{}}return function(h,f,v,b,k,A,P,$,z,I){switch(h){case 1:if(z===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if($===0)return f+"/*|*/";break;case 3:switch($){case 102:case 112:return y(v[0]+f),"";default:return f+(I===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(g)}}}(function(y){d.push(y)}),S=function(y,g,h){return g===0&&Vw.indexOf(h[n.length])!==-1||h.match(i)?y:"."+t};function w(y,g,h,f){f===void 0&&(f="&");var v=y.replace(Hw,""),b=g&&h?h+" "+g+" { "+v+" }":v;return t=f,n=g,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(h||!g?"":g,b)}return c.use([].concat(u,[function(y,g,h){y===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,S))},p,function(y){if(y===-2){var g=d;return d=[],g}}])),w.hash=u.length?u.reduce(function(y,g){return g.name||jr(15),pi(y,g.name)},5381).toString():"",w}var i0=Z.createContext();i0.Consumer;var o0=Z.createContext(),Gw=(o0.Consumer,new Fl),Dc=Ww();function a0(){return E.useContext(i0)||Gw}function l0(){return E.useContext(o0)||Dc}var Jw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Dc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return jr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Dc),this.name+t.hash},e}(),qw=/([A-Z])/,Qw=/([A-Z])/g,Xw=/^ms-/,Yw=function(e){return"-"+e.toLowerCase()};function lh(e){return qw.test(e)?e.replace(Qw,Yw).replace(Xw,"-ms-"):e}var sh=function(e){return e==null||e===!1||e===""};function Ur(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Ur(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(sh(e))return"";if(Ef(e))return"."+e.styledComponentId;if(Fi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Ur(s,t,n,r)}var u;return e instanceof Jw?n?(e.inject(n,r),e.getName(r)):e:Nc(e)?function c(d,p){var S,w,y=[];for(var g in d)d.hasOwnProperty(g)&&!sh(d[g])&&(Array.isArray(d[g])&&d[g].isCss||Fi(d[g])?y.push(lh(g)+":",d[g],";"):Nc(d[g])?y.push.apply(y,c(d[g],g)):y.push(lh(g)+": "+(S=g,(w=d[g])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||S in Kv?String(w).trim():w+"px")+";"));return p?[p+" {"].concat(y,["}"]):y}(e):e.toString()}var uh=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function s0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Fi(e)||Nc(e)?uh(Ur(rh(Ml,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:uh(Ur(rh(e,n)))}var u0=function(e,t,n){return n===void 0&&(n=hr),e.theme!==n.theme&&e.theme||t||n.theme},Kw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zw=/(^-|-$)/g;function au(e){return e.replace(Kw,"-").replace(Zw,"")}var c0=function(e){return Ic(n0(e)>>>0)};function Ta(e){return typeof e=="string"&&!0}var _c=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},eS=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function tS(e,t,n){var r=e[n];_c(t)&&_c(r)?d0(r,t):e[n]=t}function d0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(_c(a))for(var l in a)eS(l)&&tS(e,a[l],l)}return e}var Jo=Z.createContext();Jo.Consumer;function nS(e){var t=E.useContext(Jo),n=E.useMemo(function(){return function(r,i){if(!r)return jr(14);if(Fi(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?jr(8):i?on({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Z.createElement(Jo.Provider,{value:n},e.children):null}var lu={};function f0(e,t,n){var r=Ef(e),i=!Ta(e),o=t.attrs,a=o===void 0?Ml:o,l=t.componentId,s=l===void 0?function(f,v){var b=typeof f!="string"?"sc":au(f);lu[b]=(lu[b]||0)+1;var k=b+"-"+c0("5.3.9"+b+lu[b]);return v?v+"-"+k:k}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(f){return Ta(f)?"styled."+f:"Styled("+ih(f)+")"}(e):u,d=t.displayName&&t.componentId?au(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(f,v,b){return e.shouldForwardProp(f,v,b)&&t.shouldForwardProp(f,v,b)}:e.shouldForwardProp);var w,y=new Bw(n,d,r?e.componentStyle:void 0),g=y.isStatic&&a.length===0,h=function(f,v){return function(b,k,A,P){var $=b.attrs,z=b.componentStyle,I=b.defaultProps,Y=b.foldedComponentIds,O=b.shouldForwardProp,R=b.styledComponentId,T=b.target,U=function(re,M,pe){re===void 0&&(re=hr);var J=on({},M,{theme:re}),Te={};return pe.forEach(function(be){var ye,ce,_e,Ke=be;for(ye in Fi(Ke)&&(Ke=Ke(J)),Ke)J[ye]=Te[ye]=ye==="className"?(ce=Te[ye],_e=Ke[ye],ce&&_e?ce+" "+_e:ce||_e):Ke[ye]}),[J,Te]}(u0(k,E.useContext(Jo),I)||hr,k,$),Q=U[0],q=U[1],_=function(re,M,pe,J){var Te=a0(),be=l0(),ye=M?re.generateAndInjectStyles(hr,Te,be):re.generateAndInjectStyles(pe,Te,be);return ye}(z,P,Q),X=A,W=q.$as||k.$as||q.as||k.as||T,ae=Ta(W),j=q!==k?on({},k,{},q):k,V={};for(var G in j)G[0]!=="$"&&G!=="as"&&(G==="forwardedAs"?V.as=j[G]:(O?O(G,Zp,W):!ae||Zp(G))&&(V[G]=j[G]));return k.style&&q.style!==k.style&&(V.style=on({},k.style,{},q.style)),V.className=Array.prototype.concat(Y,R,_!==R?_:null,k.className,q.className).filter(Boolean).join(" "),V.ref=X,E.createElement(W,V)}(w,f,v,g)};return h.displayName=c,(w=Z.forwardRef(h)).attrs=p,w.componentStyle=y,w.displayName=c,w.shouldForwardProp=S,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ml,w.styledComponentId=d,w.target=r?e.target:e,w.withComponent=function(f){var v=t.componentId,b=function(A,P){if(A==null)return{};var $,z,I={},Y=Object.keys(A);for(z=0;z<Y.length;z++)$=Y[z],P.indexOf($)>=0||(I[$]=A[$]);return I}(t,["componentId"]),k=v&&v+"-"+(Ta(f)?f:au(ih(f)));return f0(f,on({},b,{attrs:p,componentId:k}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?d0({},e.defaultProps,f):f}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&Ew(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var zc=function(e){return function t(n,r,i){if(i===void 0&&(i=hr),!Li.isValidElementType(r))return jr(1,String(r));var o=function(){return n(r,i,s0.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,on({},i,{},a))},o.attrs=function(a){return t(n,r,on({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(f0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){zc[e]=zc(e)});var rS=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=r0(n),Fl.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(Ur(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Fl.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function iS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=s0.apply(void 0,[e].concat(n)),o="sc-global-"+c0(JSON.stringify(i)),a=new rS(i,o);function l(u){var c=a0(),d=l0(),p=E.useContext(Jo),S=E.useRef(c.allocateGSInstance(o)).current;return c.server&&s(S,u,c,p,d),E.useLayoutEffect(function(){if(!c.server)return s(S,u,c,p,d),function(){return a.removeStyles(S,c)}},[S,u,c,p,d]),null}function s(u,c,d,p,S){if(a.isStatic)a.renderStyles(u,Pw,d,S);else{var w=on({},c,{theme:u0(c,p,l.defaultProps)});a.renderStyles(u,w,d,S)}}return Z.memo(l)}const C=zc,oS={title:"main",fonts:{extrasmall:16,small:18,medium:20,large:26,extralarge:36},colors:{primary:{light:"#f08",normal:"#2EB2B7",dark:"#01fe87"},secondary:{light:"#E08952",normal:"#FF8233",dark:"#AD561F"},auxiliary:{success:{normal:"#34C759",dark:"#45B661"},attention:{normal:"#FFEB3B",dark:"#CCB700"},error:{normal:"#D92626",dark:"#981B1B"}},foreground:"#D9D9D9",middleground:"#f5f5f5",background:"#292E2E",text:{title:"#000",content:"#626262",highlight:"#FFF",TitleSubArticles:"#114676"}}},aS=E.createContext({}),lS=({children:e})=>{const[t,n]=E.useState(oS);return x(aS.Provider,{value:{theme:t},children:x(nS,{theme:t,children:e})})};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}var Be;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Be||(Be={}));const ch="popstate";function sS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return qo("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Dn(i)}return cS(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ii(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function uS(){return Math.random().toString(36).substr(2,8)}function dh(e,t){return{usr:e.state,key:e.key,idx:t}}function qo(e,t,n,r){return n===void 0&&(n=null),xe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jn(t):t,{state:n,key:t&&t.key||r||uS()})}function Dn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function cS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Be.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(xe({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=Be.Pop;let g=c(),h=g==null?null:g-u;u=g,s&&s({action:l,location:y.location,delta:h})}function p(g,h){l=Be.Push;let f=qo(y.location,g,h);n&&n(f,g),u=c()+1;let v=dh(f,u),b=y.createHref(f);try{a.pushState(v,"",b)}catch{i.location.assign(b)}o&&s&&s({action:l,location:y.location,delta:1})}function S(g,h){l=Be.Replace;let f=qo(y.location,g,h);n&&n(f,g),u=c();let v=dh(f,u),b=y.createHref(f);a.replaceState(v,"",b),o&&s&&s({action:l,location:y.location,delta:0})}function w(g){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof g=="string"?g:Dn(g);return fe(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let y={get action(){return l},get location(){return e(i,a)},listen(g){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(ch,d),s=g,()=>{i.removeEventListener(ch,d),s=null}},createHref(g){return t(i,g)},createURL:w,encodeLocation(g){let h=w(g);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:S,go(g){return a.go(g)}};return y}var qe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qe||(qe={}));const dS=new Set(["lazy","caseSensitive","path","id","index","children"]);function fS(e){return e.index===!0}function p0(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(fe(i.index!==!0||!i.children,"Cannot specify children on an index route"),fe(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),fS(i)){let s=xe({},i,{hasErrorBoundary:t(i),id:l});return r[l]=s,s}else{let s=xe({},i,{id:l,hasErrorBoundary:t(i),children:void 0});return r[l]=s,i.children&&(s.children=p0(i.children,t,a,r)),s}})}function hi(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?jn(t):t,i=oa(r.pathname||"/",n);if(i==null)return null;let o=h0(e);pS(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=bS(o[l],ES(i));return a}function h0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(fe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Tn([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),h0(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:wS(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of m0(o.path))i(o,a,s)}),t}function m0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=m0(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function pS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:SS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hS=/^:\w+$/,mS=3,gS=2,vS=1,yS=10,xS=-2,fh=e=>e==="*";function wS(e,t){let n=e.split("/"),r=n.length;return n.some(fh)&&(r+=xS),t&&(r+=gS),n.filter(i=>!fh(i)).reduce((i,o)=>i+(hS.test(o)?mS:o===""?vS:yS),r)}function SS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function bS(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=kS({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:Tn([i,c.pathname]),pathnameBase:OS(Tn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Tn([i,c.pathnameBase]))}return o}function kS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=CS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=l[d]||"";a=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=AS(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function CS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ii(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ES(e){try{return decodeURI(e)}catch(t){return Ii(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function AS(e,t){try{return decodeURIComponent(e)}catch(n){return Ii(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function oa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function PS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?jn(e):e;return{pathname:n?n.startsWith("/")?n:RS(n,t):t,search:$S(r),hash:TS(i)}}function RS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function su(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ms(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=jn(e):(i=xe({},e),fe(!i.pathname||!i.pathname.includes("?"),su("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),su("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),su("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}l=d>=0?t[d]:"/"}let s=PS(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const Tn=e=>e.join("/").replace(/\/\/+/g,"/"),OS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$S=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,TS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Rf{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function g0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const v0=["post","put","patch","delete"],MS=new Set(v0),LS=["get",...v0],FS=new Set(LS),NS=new Set([301,302,303,307,308]),IS=new Set([307,308]),uu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},DS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ph={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,x0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_S=!x0,zS=e=>!!e.hasErrorBoundary;function jS(e){fe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||zS,n={},r=p0(e.routes,t,void 0,n),i,o=xe({v7_normalizeFormMethod:!1},e.future),a=null,l=new Set,s=null,u=null,c=null,d=e.hydrationData!=null,p=hi(r,e.history.location,e.basename),S=null;if(p==null){let F=gn(404,{pathname:e.history.location.pathname}),{matches:D,route:B}=wh(r);p=D,S={[B.id]:F}}let w=!p.some(F=>F.route.lazy)&&(!p.some(F=>F.route.loader)||e.hydrationData!=null),y,g={historyAction:e.history.action,location:e.history.location,matches:p,initialized:w,navigation:uu,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},h=Be.Pop,f=!1,v,b=!1,k=!1,A=[],P=[],$=new Map,z=0,I=-1,Y=new Map,O=new Set,R=new Map,T=new Map,U=new Map,Q=!1;function q(){return a=e.history.listen(F=>{let{action:D,location:B,delta:te}=F;if(Q){Q=!1;return}Ii(U.size===0||te!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=vt({currentLocation:g.location,nextLocation:B,historyAction:D});if(ne&&te!=null){Q=!0,e.history.go(te*-1),fn(ne,{state:"blocked",location:B,proceed(){fn(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),e.history.go(te)},reset(){dn(ne),W({blockers:new Map(y.state.blockers)})}});return}return G(D,B)}),g.initialized||G(Be.Pop,g.location),y}function _(){a&&a(),l.clear(),v&&v.abort(),g.fetchers.forEach((F,D)=>me(D)),g.blockers.forEach((F,D)=>dn(D))}function X(F){return l.add(F),()=>l.delete(F)}function W(F){g=xe({},g,F),l.forEach(D=>D(g))}function ae(F,D){var B,te;let ne=g.actionData!=null&&g.navigation.formMethod!=null&&Cn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((B=F.state)==null?void 0:B._isRedirect)!==!0,le;D.actionData?Object.keys(D.actionData).length>0?le=D.actionData:le=null:ne?le=g.actionData:le=null;let se=D.loaderData?xh(g.loaderData,D.loaderData,D.matches||[],D.errors):g.loaderData;for(let[ie]of U)dn(ie);let de=f===!0||g.navigation.formMethod!=null&&Cn(g.navigation.formMethod)&&((te=F.state)==null?void 0:te._isRedirect)!==!0;i&&(r=i,i=void 0),W(xe({},D,{actionData:le,loaderData:se,historyAction:h,location:F,initialized:!0,navigation:uu,revalidation:"idle",restoreScrollPosition:Gr(F,D.matches||g.matches),preventScrollReset:de,blockers:new Map(g.blockers)})),b||h===Be.Pop||(h===Be.Push?e.history.push(F,F.state):h===Be.Replace&&e.history.replace(F,F.state)),h=Be.Pop,f=!1,b=!1,k=!1,A=[],P=[]}async function j(F,D){if(typeof F=="number"){e.history.go(F);return}let{path:B,submission:te,error:ne}=hh(F,o,D),le=g.location,se=qo(g.location,B,D&&D.state);se=xe({},se,e.history.encodeLocation(se));let de=D&&D.replace!=null?D.replace:void 0,ie=Be.Push;de===!0?ie=Be.Replace:de===!1||te!=null&&Cn(te.formMethod)&&te.formAction===g.location.pathname+g.location.search&&(ie=Be.Replace);let Pe=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,ke=vt({currentLocation:le,nextLocation:se,historyAction:ie});if(ke){fn(ke,{state:"blocked",location:se,proceed(){fn(ke,{state:"proceeding",proceed:void 0,reset:void 0,location:se}),j(F,D)},reset(){dn(ke),W({blockers:new Map(g.blockers)})}});return}return await G(ie,se,{submission:te,pendingError:ne,preventScrollReset:Pe,replace:D&&D.replace})}function V(){if(_e(),W({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){G(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}G(h||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function G(F,D,B){v&&v.abort(),v=null,h=F,b=(B&&B.startUninterruptedRevalidation)===!0,Gi(g.location,g.matches),f=(B&&B.preventScrollReset)===!0;let te=i||r,ne=B&&B.overrideNavigation,le=hi(te,D,e.basename);if(!le){let Ze=gn(404,{pathname:D.pathname}),{matches:rt,route:Xt}=wh(te);oe(),ae(D,{matches:rt,loaderData:{},errors:{[Xt.id]:Ze}});return}if(WS(g.location,D)&&!(B&&B.submission&&Cn(B.submission.formMethod))){ae(D,{matches:le});return}v=new AbortController;let se=oo(e.history,D,v.signal,B&&B.submission),de,ie;if(B&&B.pendingError)ie={[mi(le).route.id]:B.pendingError};else if(B&&B.submission&&Cn(B.submission.formMethod)){let Ze=await re(se,D,B.submission,le,{replace:B.replace});if(Ze.shortCircuited)return;de=Ze.pendingActionData,ie=Ze.pendingActionError,ne=xe({state:"loading",location:D},B.submission),se=new Request(se.url,{signal:se.signal})}let{shortCircuited:Pe,loaderData:ke,errors:Qt}=await M(se,D,le,ne,B&&B.submission,B&&B.fetcherSubmission,B&&B.replace,de,ie);Pe||(v=null,ae(D,xe({matches:le},de?{actionData:de}:{},{loaderData:ke,errors:Qt})))}async function re(F,D,B,te,ne){_e();let le=xe({state:"submitting",location:D},B);W({navigation:le});let se,de=jc(te,D);if(!de.route.action&&!de.route.lazy)se={type:qe.error,error:gn(405,{method:F.method,pathname:D.pathname,routeId:de.route.id})};else if(se=await io("action",F,de,te,n,t,y.basename),F.signal.aborted)return{shortCircuited:!0};if(ki(se)){let ie;return ne&&ne.replace!=null?ie=ne.replace:ie=se.location===g.location.pathname+g.location.search,await ye(g,se,{submission:B,replace:ie}),{shortCircuited:!0}}if(Co(se)){let ie=mi(te,de.route.id);return(ne&&ne.replace)!==!0&&(h=Be.Push),{pendingActionData:{},pendingActionError:{[ie.route.id]:se.error}}}if(Rr(se))throw gn(400,{type:"defer-action"});return{pendingActionData:{[de.route.id]:se.data}}}async function M(F,D,B,te,ne,le,se,de,ie){let Pe=te;Pe||(Pe=xe({state:"loading",location:D,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ne));let ke=ne||le?ne||le:Pe.formMethod&&Pe.formAction&&Pe.formData&&Pe.formEncType?{formMethod:Pe.formMethod,formAction:Pe.formAction,formData:Pe.formData,formEncType:Pe.formEncType}:void 0,Qt=i||r,[Ze,rt]=mh(e.history,g,B,ke,D,k,A,P,R,Qt,e.basename,de,ie);if(oe(st=>!(B&&B.some(Yt=>Yt.route.id===st))||Ze&&Ze.some(Yt=>Yt.route.id===st)),Ze.length===0&&rt.length===0)return ae(D,xe({matches:B,loaderData:{},errors:ie||null},de?{actionData:de}:{})),{shortCircuited:!0};if(!b){rt.forEach(Yt=>{let Sr=g.fetchers.get(Yt.key),Qi={state:"loading",data:Sr&&Sr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Yt.key,Qi)});let st=de||g.actionData;W(xe({navigation:Pe},st?Object.keys(st).length===0?{actionData:null}:{actionData:st}:{},rt.length>0?{fetchers:new Map(g.fetchers)}:{}))}I=++z,rt.forEach(st=>$.set(st.key,v));let{results:Xt,loaderResults:Ji,fetcherResults:$s}=await ce(g.matches,B,Ze,rt,F);if(F.signal.aborted)return{shortCircuited:!0};rt.forEach(st=>$.delete(st.key));let qi=Sh(Xt);if(qi)return await ye(g,qi,{replace:se}),{shortCircuited:!0};let{loaderData:Jr,errors:Ts}=yh(g,B,Ze,Ji,ie,rt,$s,T);T.forEach((st,Yt)=>{st.subscribe(Sr=>{(Sr||st.done)&&T.delete(Yt)})}),Ge();let Ms=Un(I);return xe({loaderData:Jr,errors:Ts},Ms||rt.length>0?{fetchers:new Map(g.fetchers)}:{})}function pe(F){return g.fetchers.get(F)||DS}function J(F,D,B,te){if(_S)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");$.has(F)&&ze(F);let le=hi(i||r,B,e.basename);if(!le){Ke(F,D,gn(404,{pathname:B}));return}let{path:se,submission:de}=hh(B,o,te,!0),ie=jc(le,se);if(f=(te&&te.preventScrollReset)===!0,de&&Cn(de.formMethod)){Te(F,D,se,ie,le,de);return}R.set(F,{routeId:D,path:se}),be(F,D,se,ie,le,de)}async function Te(F,D,B,te,ne,le){if(_e(),R.delete(F),!te.route.action&&!te.route.lazy){let wn=gn(405,{method:le.formMethod,pathname:B,routeId:D});Ke(F,D,wn);return}let se=g.fetchers.get(F),de=xe({state:"submitting"},le,{data:se&&se.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(F,de),W({fetchers:new Map(g.fetchers)});let ie=new AbortController,Pe=oo(e.history,B,ie.signal,le);$.set(F,ie);let ke=await io("action",Pe,te,ne,n,t,y.basename);if(Pe.signal.aborted){$.get(F)===ie&&$.delete(F);return}if(ki(ke)){$.delete(F),O.add(F);let wn=xe({state:"loading"},le,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(F,wn),W({fetchers:new Map(g.fetchers)}),ye(g,ke,{submission:le,isFetchActionRedirect:!0})}if(Co(ke)){Ke(F,D,ke.error);return}if(Rr(ke))throw gn(400,{type:"defer-action"});let Qt=g.navigation.location||g.location,Ze=oo(e.history,Qt,ie.signal),rt=i||r,Xt=g.navigation.state!=="idle"?hi(rt,g.navigation.location,e.basename):g.matches;fe(Xt,"Didn't find any matches after fetcher action");let Ji=++z;Y.set(F,Ji);let $s=xe({state:"loading",data:ke.data},le,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(F,$s);let[qi,Jr]=mh(e.history,g,Xt,le,Qt,k,A,P,R,rt,e.basename,{[te.route.id]:ke.data},void 0);Jr.filter(wn=>wn.key!==F).forEach(wn=>{let Ls=wn.key,Bf=g.fetchers.get(Ls),Ly={state:"loading",data:Bf&&Bf.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Ls,Ly),$.set(Ls,ie)}),W({fetchers:new Map(g.fetchers)});let{results:Ts,loaderResults:Ms,fetcherResults:st}=await ce(g.matches,Xt,qi,Jr,Ze);if(ie.signal.aborted)return;Y.delete(F),$.delete(F),Jr.forEach(wn=>$.delete(wn.key));let Yt=Sh(Ts);if(Yt)return ye(g,Yt);let{loaderData:Sr,errors:Qi}=yh(g,g.matches,qi,Ms,void 0,Jr,st,T),Ty={state:"idle",data:ke.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(F,Ty);let My=Un(Ji);g.navigation.state==="loading"&&Ji>I?(fe(h,"Expected pending action"),v&&v.abort(),ae(g.navigation.location,{matches:Xt,loaderData:Sr,errors:Qi,fetchers:new Map(g.fetchers)})):(W(xe({errors:Qi,loaderData:xh(g.loaderData,Sr,Xt,Qi)},My?{fetchers:new Map(g.fetchers)}:{})),k=!1)}async function be(F,D,B,te,ne,le){let se=g.fetchers.get(F),de=xe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},le,{data:se&&se.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(F,de),W({fetchers:new Map(g.fetchers)});let ie=new AbortController,Pe=oo(e.history,B,ie.signal);$.set(F,ie);let ke=await io("loader",Pe,te,ne,n,t,y.basename);if(Rr(ke)&&(ke=await k0(ke,Pe.signal,!0)||ke),$.get(F)===ie&&$.delete(F),Pe.signal.aborted)return;if(ki(ke)){await ye(g,ke);return}if(Co(ke)){let Ze=mi(g.matches,D);g.fetchers.delete(F),W({fetchers:new Map(g.fetchers),errors:{[Ze.route.id]:ke.error}});return}fe(!Rr(ke),"Unhandled fetcher deferred data");let Qt={state:"idle",data:ke.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(F,Qt),W({fetchers:new Map(g.fetchers)})}async function ye(F,D,B){var te;let{submission:ne,replace:le,isFetchActionRedirect:se}=B===void 0?{}:B;D.revalidate&&(k=!0);let de=qo(F.location,D.location,xe({_isRedirect:!0},se?{_isFetchActionRedirect:!0}:{}));if(fe(de,"Expected a location on the redirect navigation"),y0.test(D.location)&&x0&&typeof((te=window)==null?void 0:te.location)<"u"){let rt=e.history.createURL(D.location),Xt=oa(rt.pathname,e.basename||"/")==null;if(window.location.origin!==rt.origin||Xt){le?window.location.replace(D.location):window.location.assign(D.location);return}}v=null;let ie=le===!0?Be.Replace:Be.Push,{formMethod:Pe,formAction:ke,formEncType:Qt,formData:Ze}=F.navigation;!ne&&Pe&&ke&&Ze&&Qt&&(ne={formMethod:Pe,formAction:ke,formEncType:Qt,formData:Ze}),IS.has(D.status)&&ne&&Cn(ne.formMethod)?await G(ie,de,{submission:xe({},ne,{formAction:D.location}),preventScrollReset:f}):se?await G(ie,de,{overrideNavigation:{state:"loading",location:de,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:ne,preventScrollReset:f}):await G(ie,de,{overrideNavigation:{state:"loading",location:de,formMethod:ne?ne.formMethod:void 0,formAction:ne?ne.formAction:void 0,formEncType:ne?ne.formEncType:void 0,formData:ne?ne.formData:void 0},preventScrollReset:f})}async function ce(F,D,B,te,ne){let le=await Promise.all([...B.map(ie=>io("loader",ne,ie,D,n,t,y.basename)),...te.map(ie=>ie.matches&&ie.match?io("loader",oo(e.history,ie.path,ne.signal),ie.match,ie.matches,n,t,y.basename):{type:qe.error,error:gn(404,{pathname:ie.path})})]),se=le.slice(0,B.length),de=le.slice(B.length);return await Promise.all([bh(F,B,se,ne.signal,!1,g.loaderData),bh(F,te.map(ie=>ie.match),de,ne.signal,!0)]),{results:le,loaderResults:se,fetcherResults:de}}function _e(){k=!0,A.push(...oe()),R.forEach((F,D)=>{$.has(D)&&(P.push(D),ze(D))})}function Ke(F,D,B){let te=mi(g.matches,D);me(F),W({errors:{[te.route.id]:B},fetchers:new Map(g.fetchers)})}function me(F){$.has(F)&&ze(F),R.delete(F),Y.delete(F),O.delete(F),g.fetchers.delete(F)}function ze(F){let D=$.get(F);fe(D,"Expected fetch controller: "+F),D.abort(),$.delete(F)}function we(F){for(let D of F){let te={state:"idle",data:pe(D).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(D,te)}}function Ge(){let F=[];for(let D of O){let B=g.fetchers.get(D);fe(B,"Expected fetcher: "+D),B.state==="loading"&&(O.delete(D),F.push(D))}we(F)}function Un(F){let D=[];for(let[B,te]of Y)if(te<F){let ne=g.fetchers.get(B);fe(ne,"Expected fetcher: "+B),ne.state==="loading"&&(ze(B),Y.delete(B),D.push(B))}return we(D),D.length>0}function Je(F,D){let B=g.blockers.get(F)||ph;return U.get(F)!==D&&U.set(F,D),B}function dn(F){g.blockers.delete(F),U.delete(F)}function fn(F,D){let B=g.blockers.get(F)||ph;fe(B.state==="unblocked"&&D.state==="blocked"||B.state==="blocked"&&D.state==="blocked"||B.state==="blocked"&&D.state==="proceeding"||B.state==="blocked"&&D.state==="unblocked"||B.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+B.state+" -> "+D.state),g.blockers.set(F,D),W({blockers:new Map(g.blockers)})}function vt(F){let{currentLocation:D,nextLocation:B,historyAction:te}=F;if(U.size===0)return;U.size>1&&Ii(!1,"A router only supports one blocker at a time");let ne=Array.from(U.entries()),[le,se]=ne[ne.length-1],de=g.blockers.get(le);if(!(de&&de.state==="proceeding")&&se({currentLocation:D,nextLocation:B,historyAction:te}))return le}function oe(F){let D=[];return T.forEach((B,te)=>{(!F||F(te))&&(B.cancel(),D.push(te),T.delete(te))}),D}function Le(F,D,B){if(s=F,c=D,u=B||(te=>te.key),!d&&g.navigation===uu){d=!0;let te=Gr(g.location,g.matches);te!=null&&W({restoreScrollPosition:te})}return()=>{s=null,c=null,u=null}}function Gi(F,D){if(s&&u&&c){let B=D.map(ne=>kh(ne,g.loaderData)),te=u(F,B)||F.key;s[te]=c()}}function Gr(F,D){if(s&&u&&c){let B=D.map(le=>kh(le,g.loaderData)),te=u(F,B)||F.key,ne=s[te];if(typeof ne=="number")return ne}return null}function pn(F){i=F}return y={get basename(){return e.basename},get state(){return g},get routes(){return r},initialize:q,subscribe:X,enableScrollRestoration:Le,navigate:j,fetch:J,revalidate:V,createHref:F=>e.history.createHref(F),encodeLocation:F=>e.history.encodeLocation(F),getFetcher:pe,deleteFetcher:me,dispose:_,getBlocker:Je,deleteBlocker:dn,_internalFetchControllers:$,_internalActiveDeferreds:T,_internalSetRoutes:pn},y}function US(e){return e!=null&&"formData"in e}function hh(e,t,n,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:Dn(e);if(!n||!US(n))return{path:i};if(n.formMethod&&!qS(n.formMethod))return{path:i,error:gn(405,{method:n.formMethod})};let o;if(n.formData){let s=n.formMethod||"get";if(o={formMethod:t.v7_normalizeFormMethod?s.toUpperCase():s.toLowerCase(),formAction:b0(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Cn(o.formMethod))return{path:i,submission:o}}let a=jn(i),l=S0(n.formData);return r&&a.search&&C0(a.search)&&l.append("index",""),a.search="?"+l,{path:Dn(a),submission:o}}function BS(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function mh(e,t,n,r,i,o,a,l,s,u,c,d,p){let S=p?Object.values(p)[0]:d?Object.values(d)[0]:void 0,w=e.createURL(t.location),y=e.createURL(i),g=o||w.toString()===y.toString()||w.search!==y.search,h=p?Object.keys(p)[0]:void 0,v=BS(n,h).filter((k,A)=>{if(k.route.lazy)return!0;if(k.route.loader==null)return!1;if(HS(t.loaderData,t.matches[A],k)||a.some(z=>z===k.route.id))return!0;let P=t.matches[A],$=k;return gh(k,xe({currentUrl:w,currentParams:P.params,nextUrl:y,nextParams:$.params},r,{actionResult:S,defaultShouldRevalidate:g||w0(P,$)}))}),b=[];return s.forEach((k,A)=>{if(!n.some(I=>I.route.id===k.routeId))return;let P=hi(u,k.path,c);if(!P){b.push(xe({key:A},k,{matches:null,match:null}));return}let $=jc(P,k.path);if(l.includes(A)){b.push(xe({key:A,matches:P,match:$},k));return}gh($,xe({currentUrl:w,currentParams:t.matches[t.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:S,defaultShouldRevalidate:g}))&&b.push(xe({key:A,matches:P,match:$},k))}),[v,b]}function HS(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function w0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function gh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function vh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];fe(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";Ii(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!dS.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(xe({},i)),lazy:void 0})}async function io(e,t,n,r,i,o,a,l,s,u){a===void 0&&(a="/"),l===void 0&&(l=!1),s===void 0&&(s=!1);let c,d,p,S=g=>{let h,f=new Promise((v,b)=>h=b);return p=()=>h(),t.signal.addEventListener("abort",p),Promise.race([g({request:t,params:n.params,context:u}),f])};try{let g=n.route[e];if(n.route.lazy)if(g)d=(await Promise.all([S(g),vh(n.route,o,i)]))[0];else if(await vh(n.route,o,i),g=n.route[e],g)d=await S(g);else{if(e==="action")throw gn(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:qe.data,data:void 0}}else fe(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),d=await S(g);fe(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){c=qe.error,d=g}finally{p&&t.signal.removeEventListener("abort",p)}if(JS(d)){let g=d.status;if(NS.has(g)){let v=d.headers.get("Location");if(fe(v,"Redirects returned/thrown from loaders/actions must have a Location header"),y0.test(v)){if(!l){let b=new URL(t.url),k=v.startsWith("//")?new URL(b.protocol+v):new URL(v),A=oa(k.pathname,a)!=null;k.origin===b.origin&&A&&(v=k.pathname+k.search+k.hash)}}else{let b=r.slice(0,r.indexOf(n)+1),k=ms(b).map(P=>P.pathnameBase),A=Pf(v,k,new URL(t.url).pathname);if(fe(Dn(A),"Unable to resolve redirect location: "+v),a){let P=A.pathname;A.pathname=P==="/"?a:Tn([a,P])}v=Dn(A)}if(l)throw d.headers.set("Location",v),d;return{type:qe.redirect,status:g,location:v,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:c||qe.data,response:d};let h,f=d.headers.get("Content-Type");return f&&/\bapplication\/json\b/.test(f)?h=await d.json():h=await d.text(),c===qe.error?{type:c,error:new Rf(g,d.statusText,h),headers:d.headers}:{type:qe.data,data:h,statusCode:d.status,headers:d.headers}}if(c===qe.error)return{type:c,error:d};if(GS(d)){var w,y;return{type:qe.deferred,deferredData:d,statusCode:(w=d.init)==null?void 0:w.status,headers:((y=d.init)==null?void 0:y.headers)&&new Headers(d.init.headers)}}return{type:qe.data,data:d}}function oo(e,t,n,r){let i=e.createURL(b0(t)).toString(),o={signal:n};if(r&&Cn(r.formMethod)){let{formMethod:a,formEncType:l,formData:s}=r;o.method=a.toUpperCase(),o.body=l==="application/x-www-form-urlencoded"?S0(s):s}return new Request(i,o)}function S0(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function VS(e,t,n,r,i){let o={},a=null,l,s=!1,u={};return n.forEach((c,d)=>{let p=t[d].route.id;if(fe(!ki(c),"Cannot handle redirect results in processLoaderData"),Co(c)){let S=mi(e,p),w=c.error;r&&(w=Object.values(r)[0],r=void 0),a=a||{},a[S.route.id]==null&&(a[S.route.id]=w),o[p]=void 0,s||(s=!0,l=g0(c.error)?c.error.status:500),c.headers&&(u[p]=c.headers)}else Rr(c)?(i.set(p,c.deferredData),o[p]=c.deferredData.data):o[p]=c.data,c.statusCode!=null&&c.statusCode!==200&&!s&&(l=c.statusCode),c.headers&&(u[p]=c.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:u}}function yh(e,t,n,r,i,o,a,l){let{loaderData:s,errors:u}=VS(t,n,r,i,l);for(let c=0;c<o.length;c++){let{key:d,match:p}=o[c];fe(a!==void 0&&a[c]!==void 0,"Did not find corresponding fetcher result");let S=a[c];if(Co(S)){let w=mi(e.matches,p==null?void 0:p.route.id);u&&u[w.route.id]||(u=xe({},u,{[w.route.id]:S.error})),e.fetchers.delete(d)}else if(ki(S))fe(!1,"Unhandled fetcher revalidation redirect");else if(Rr(S))fe(!1,"Unhandled fetcher deferred data");else{let w={state:"idle",data:S.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(d,w)}}return{loaderData:s,errors:u}}function xh(e,t,n,r){let i=xe({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function mi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function wh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function gn(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Rf(e||500,a,new Error(l),!0)}function Sh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ki(n))return n}}function b0(e){let t=typeof e=="string"?jn(e):e;return Dn(xe({},t,{hash:""}))}function WS(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Rr(e){return e.type===qe.deferred}function Co(e){return e.type===qe.error}function ki(e){return(e&&e.type)===qe.redirect}function GS(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function JS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function qS(e){return FS.has(e.toLowerCase())}function Cn(e){return MS.has(e.toLowerCase())}async function bh(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let u=e.find(d=>d.route.id===s.route.id),c=u!=null&&!w0(u,s)&&(o&&o[s.route.id])!==void 0;Rr(l)&&(i||c)&&await k0(l,r,i).then(d=>{d&&(n[a]=d||n[a])})}}async function k0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:qe.data,data:e.deferredData.unwrappedData}}catch(i){return{type:qe.error,error:i}}return{type:qe.data,data:e.deferredData.data}}}function C0(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function kh(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function jc(e,t){let n=typeof t=="string"?jn(t).search:t.search;if(e[e.length-1].route.index&&C0(n||""))return e[e.length-1];let r=ms(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function QS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const XS=typeof Object.is=="function"?Object.is:QS,{useState:YS,useEffect:KS,useLayoutEffect:ZS,useDebugValue:eb}=zu;function tb(e,t,n){const r=t(),[{inst:i},o]=YS({inst:{value:r,getSnapshot:t}});return ZS(()=>{i.value=r,i.getSnapshot=t,cu(i)&&o({inst:i})},[e,r,t]),KS(()=>(cu(i)&&o({inst:i}),e(()=>{cu(i)&&o({inst:i})})),[e]),eb(r),r}function cu(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!XS(n,r)}catch{return!0}}function nb(e,t,n){return t()}const rb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ib=!rb,ob=ib?nb:tb,ab="useSyncExternalStore"in zu?(e=>e.useSyncExternalStore)(zu):ob,Of=E.createContext(null),$f=E.createContext(null),aa=E.createContext(null),gs=E.createContext(null),Vi=E.createContext({outlet:null,matches:[]}),E0=E.createContext(null);function Uc(){return Uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uc.apply(this,arguments)}function lb(e,t){let{relative:n}=t===void 0?{}:t;la()||fe(!1);let{basename:r,navigator:i}=E.useContext(aa),{hash:o,pathname:a,search:l}=P0(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Tn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function la(){return E.useContext(gs)!=null}function vs(){return la()||fe(!1),E.useContext(gs).location}function A0(){la()||fe(!1);let{basename:e,navigator:t}=E.useContext(aa),{matches:n}=E.useContext(Vi),{pathname:r}=vs(),i=JSON.stringify(ms(n).map(l=>l.pathnameBase)),o=E.useRef(!1);return E.useEffect(()=>{o.current=!0}),E.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let u=Pf(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Tn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function P0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(Vi),{pathname:i}=vs(),o=JSON.stringify(ms(r).map(a=>a.pathnameBase));return E.useMemo(()=>Pf(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function sb(e,t){la()||fe(!1);let{navigator:n}=E.useContext(aa),r=E.useContext($f),{matches:i}=E.useContext(Vi),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=vs(),u;if(t){var c;let y=typeof t=="string"?jn(t):t;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||fe(!1),u=y}else u=s;let d=u.pathname||"/",p=l==="/"?d:d.slice(l.length)||"/",S=hi(e,{pathname:p}),w=fb(S&&S.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:Tn([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Tn([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&w?E.createElement(gs.Provider,{value:{location:Uc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Be.Pop}},w):w}function ub(){let e=gb(),t=g0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}class cb extends E.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(Vi.Provider,{value:this.props.routeContext},E.createElement(E0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function db(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Of);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Vi.Provider,{value:t},r)}function fb(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||fe(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,u=null;n&&(a.route.ErrorBoundary?u=E.createElement(a.route.ErrorBoundary,null):a.route.errorElement?u=a.route.errorElement:u=E.createElement(ub,null));let c=t.concat(r.slice(0,l+1)),d=()=>{let p=o;return s?p=u:a.route.Component?p=E.createElement(a.route.Component,null):a.route.element&&(p=a.route.element),E.createElement(db,{match:a,routeContext:{outlet:o,matches:c},children:p})};return n&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?E.createElement(cb,{location:n.location,component:u,error:s,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Ch;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Ch||(Ch={}));var Nl;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Nl||(Nl={}));function pb(e){let t=E.useContext($f);return t||fe(!1),t}function hb(e){let t=E.useContext(Vi);return t||fe(!1),t}function mb(e){let t=hb(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function gb(){var e;let t=E.useContext(E0),n=pb(Nl.UseRouteError),r=mb(Nl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function vb(e){let{fallbackElement:t,router:n}=e,r=E.useCallback(()=>n.state,[n]),i=ab(n.subscribe,r,r),o=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,u,c)=>n.navigate(s,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(s,u,c)=>n.navigate(s,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),a=n.basename||"/",l=E.useMemo(()=>({router:n,navigator:o,static:!1,basename:a}),[n,o,a]);return E.createElement(E.Fragment,null,E.createElement(Of.Provider,{value:l},E.createElement($f.Provider,{value:i},E.createElement(xb,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?E.createElement(wb,null):t))),null)}function yb(e){fe(!1)}function xb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Be.Pop,navigator:o,static:a=!1}=e;la()&&fe(!1);let l=t.replace(/^\/*/,"/"),s=E.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=jn(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:S="default"}=r,w=E.useMemo(()=>{let y=oa(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:p,key:S},navigationType:i}},[l,u,c,d,p,S,i]);return w==null?null:E.createElement(aa.Provider,{value:s},E.createElement(gs.Provider,{children:n,value:w}))}function wb(e){let{children:t,location:n}=e,r=E.useContext(Of),i=r&&!t?r.router.routes:Bc(t);return sb(i,n)}var Eh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Eh||(Eh={}));new Promise(()=>{});function Bc(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Bc(r.props.children,o));return}r.type!==yb&&fe(!1),!r.props.index||!r.props.children||fe(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Bc(r.props.children,o)),n.push(a)}),n}function Sb(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Il.apply(this,arguments)}function bb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function kb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cb(e,t){return e.button===0&&(!t||t==="_self")&&!kb(e)}const Eb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Ab(e,t){return jS({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:sS({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Pb(),routes:e,detectErrorBoundary:Sb}).initialize()}function Pb(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Il({},t,{errors:Rb(t.errors)})),t}function Rb(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Rf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const Ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$b=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tb=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=bb(t,Eb),{basename:p}=E.useContext(aa),S,w=!1;if(typeof u=="string"&&$b.test(u)&&(S=u,Ob)){let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),b=oa(v.pathname,p);v.origin===f.origin&&b!=null?u=b+v.search+v.hash:w=!0}let y=lb(u,{relative:i}),g=Mb(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function h(f){r&&r(f),f.defaultPrevented||g(f)}return E.createElement("a",Il({},d,{href:S||y,onClick:w||o?r:h,ref:n,target:s}))});var Ah;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ah||(Ah={}));var Ph;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ph||(Ph={}));function Mb(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=A0(),s=vs(),u=P0(e,{relative:a});return E.useCallback(c=>{if(Cb(c,n)){c.preventDefault();let d=r!==void 0?r:Dn(s)===Dn(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}const Lb=C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Fb="/Nanofab-Project/assets/microscopio-02614e2c.svg",Nb="/Nanofab-Project/assets/mol-3565b3ed.svg",m={mobile:"390px",largeMobile:"391px",tablet:"819px",notebook:"1023px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Ib=C.div`
  width: 100%;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  background-color: #F8F8F8;
  
  overflow: hidden;

  @media screen and (max-width: ${m.mobile}) {    
    width: 100%;
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    /* width: 80%; */
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {     
    /* 4k */
  }
  
`,Db=C.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  height: 10vh;

`;C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;C.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({theme:e})=>e.colors.foreground};
  padding-right: 25px;
`;const _b=C.img`
  width: 150px;

  @media screen and (max-width: ${m.mobile}) {    
    width: 110px;
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    width: 400px;
  }
`,zb="/Nanofab-Project/assets/nanofab-c5546f6e.png",jb="/Nanofab-Project/assets/background-1f899db0.svg",Ub=C.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${jb});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`,Bb=C.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${m.mobile}) {
    flex-direction: column;
  }

  @media screen and (min-width: 390px) and (max-width: ${m.largeMobile}) {
    flex-direction: column;
  }
  
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px ) {
    flex-direction: row;
  }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    width: 60%;
  }
`,Hb=C.img`
  width: 20%;

  @media screen and (max-width: ${m.mobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 390px) and (max-width: ${m.largeMobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${m.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${m.largeNotebook}) and (max-width: ${m.desktop}) {
    width: 400px;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${m.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,Vb=C.img`
  width: 20%;

  @media screen and (max-width: ${m.mobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 390px) and (max-width: ${m.largeMobile}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${m.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${m.largeNotebook}) and (max-width: ${m.desktop}) {
    width: 500px;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${m.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`,Wb=C.img`
  width: 30%;
  margin-left: 17%;

  @media screen and (max-width: ${m.mobile}) {
    width: 80%;
  }

  @media screen and (min-width: 390px) and (max-width: ${m.largeMobile}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: ${m.tablet}) {
    width: 35%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
    width: 40%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    width: 30%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${m.largeNotebook}) and (max-width: ${m.desktop}) {
    width: 25%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    width: 35%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${m.extraLargeDesktop}) {
    width: 35%;
  }

  border-radius: 10px;
`,Gb=C.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Jb=C.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,qb=C.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Qb="/Nanofab-Project/assets/logo-uerj-a13c7853.png",Xb="/Nanofab-Project/assets/nanofab-lab-8dc5e917.png",Yb="/Nanofab-Project/assets/LogoPPGEM-white-fd88f51e.png",Kb=({})=>x(Ub,{children:N(Bb,{children:[x(Gb,{children:x(Wb,{src:Qb})}),x(Jb,{children:x(Vb,{src:Xb})}),x(qb,{children:x(Hb,{src:Yb})})]})});var R0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rh=Z.createContext&&Z.createContext(R0),mr=globalThis&&globalThis.__assign||function(){return mr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mr.apply(this,arguments)},Zb=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function O0(e){return e&&e.map(function(t,n){return Z.createElement(t.tag,mr({key:n},t.attr),O0(t.child))})}function sa(e){return function(t){return Z.createElement(ek,mr({attr:mr({},e.attr)},t),O0(e.child))}}function ek(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=Zb(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Z.createElement("svg",mr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:mr(mr({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Z.createElement("title",null,o),e.children)};return Rh!==void 0?Z.createElement(Rh.Consumer,null,function(n){return t(n)}):t(R0)}function tk(e){return sa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(e)}function nk(e){return sa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(e)}function rk(e){return sa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"}},{tag:"path",attr:{d:"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"}}]})(e)}const ik=C.nav`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    /* @media screen and (min-width: 1300px) {    
        display: none;
    } */
`,Hn=C(Tb)`
    font-weight: 300;
    font-size: var(--medium);
    margin: 20px 15px;
    cursor: pointer;
    text-decoration: none;
    color: var(--white);
    font-family: 'Maven Pro';

    @media screen and (max-width: ${m.tablet}) {
        margin: 15px 7px;   
        font-size: var(--small);
    }

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,ok=C.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`,ak=C.nav`
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
`,lk=C(nk)`
    font-size: 40px;

    @media screen and (max-width: ${m.tablet}) {    
        font-size: 30px;
    }

`,sk=C(tk)`
    font-size: 40px;

    @media screen and (max-width: ${m.tablet}) {    
        font-size: 30px;
    }
`,uk=()=>{const[e,t]=E.useState(!1);return N(ik,{children:[x(ok,{onClick:()=>t(!e),children:e?x(sk,{}):x(lk,{})}),e?N(ak,{children:[x(Hn,{to:"/",onClick:()=>t(!1),children:"Home"}),x(Hn,{to:"/equipamentos_infraestrutura",onClick:()=>t(!1),children:"Equipamentos e Infraestrutura"}),x(Hn,{to:"/programas_especiais",onClick:()=>t(!1),children:"Programas Especiais"}),x(Hn,{to:"/equipe",onClick:()=>t(!1),children:"Equipe"}),x(Hn,{to:"/andamento",onClick:()=>t(!1),children:"Andamento"}),x(Hn,{to:"/submissao_projetos",onClick:()=>t(!1),children:"Submissão de Projetos"}),x(Hn,{to:"/publicacoes",onClick:()=>t(!1),children:"Publicações"}),x(Hn,{to:"/parcerias",onClick:()=>t(!1),children:"Parcerias"})]}):null]})},ck=C.div`
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
`,dk=C.span`
  font-size: ${({theme:e})=>e.fonts.small}px;
  margin-right: 10px;

  @media screen and (max-width: ${m.largeDesktop}) {     
   font-size: 16px;
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;   
  }
`,fk=C(rk)`
  font-size: 38px;

  @media screen and (max-width: ${m.largeDesktop}) {     
   font-size: 28px;
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {     
   font-size: 48px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}){    
    font-size: 60px;   
  }
`,pk=({})=>{const e=A0();return N(ck,{onClick:()=>e("/Login"),children:[x(dk,{children:"Entrar"}),x(fk,{})]})},Wt=({})=>N(Ib,{children:[N(Db,{children:[x(uk,{}),x(_b,{src:zb}),x(pk,{})]}),x(Kb,{})]}),hk=C.div`
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

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,mk=C.div`
  width: 85%;
  height: 2px;
  background: ${({theme:e})=>e.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${m.mobile}) {    
    width: 50%;
  }
`,gk=C.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${m.mobile}) {    
    flex-direction: column;
  }
`,Oh=C.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  text-align: center;
  color: ${({theme:e})=>e.colors.text.content};

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,du=C.h3`
  text-align: center;
`,fu=C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6%;
  text-align: center;
`,pu=C.span`
  /* display: flex;
  flex-direction: row; */
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.content};
  width: 100%;
  text-align: center;
  
  @media screen and (max-width: ${m.mobile}){
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
  
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,vk=C.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1%;
  margin-top: 1%;

  @media screen and (max-width: ${m.mobile}) {    
    width: 100%;
    margin-bottom: 3%;
    justify-content: center;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {      
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
`,yk=C.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;

  @media screen and (max-width: ${m.mobile}) {
    flex-direction: column;
    align-items: center;
  }
  
  @media screen and (min-width: 390px) and (max-width: ${m.largeMobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {      
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  } 

  @media screen and (min-width: 700px) and (max-width: 900px) {      
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,Gt=({})=>N(hk,{children:[x(vk,{children:N(yk,{children:[N(fu,{children:[x(du,{children:"Endereço"}),x(pu,{children:"Rua Fonseca Teles 121, São Cristóvão, Rio de Janeiro, CEP: 20.940-903"})]}),N(fu,{children:[x(du,{children:"Email"}),x(pu,{children:"nanofabuerj@gmail.com"})]}),N(fu,{children:[x(du,{children:"Funcionamento"}),x(pu,{children:"Segunda a sexta Xhrs às Yhrs"})]})]})}),x(mk,{}),N(gk,{children:[x(Oh,{children:"Ⓒ Serra Jr. Engenharia 2022"}),x(Oh,{children:"Todos os direitos reservados"})]})]}),xk=C.div`
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

  @media screen and (max-width: ${m.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%;
    }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {    
      display: flex;
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;
      padding: 10px;
      margin-top: 15%;
  }
  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {    
      display: flex;
      width: 85%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 12%;
      margin-bottom: 5%;
      padding: 10px;
  }
  @media screen and (min-width: ${m.extraLargeDesktop}) {    
      padding: 60px;
  }

`,wk=C.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${m.mobile}) {    
      width: 100%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {    
      width: 90%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {    
      width: 90%;
      padding: 10px 10px;
  }
`,Sk=C.span`
  margin: 10px 20px 5px 20px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  text-align: justify;

  /* @media screen and (max-width: ${m.mobile}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {    
    text-align: justify;
  } */

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
    
  }
`,bk=C.div`
  position: absolute;
  top: -70px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${m.mobile}) {
    top: -5px;
    left: -5px;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  }
`,kk=C.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${m.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
`,Ck="/Nanofab-Project/assets/chemistry-7542d245.png",Ek=({})=>x(bk,{children:x(kk,{src:Ck})}),Ak=C.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6%;

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {    
    padding-top: 0px;
  }
`,Pk=C.span`
  font-weight: bold;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${m.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,Rk=({title:e})=>x(Ak,{children:x(Pk,{children:e})}),Ok=({descriptions:e})=>N(xk,{children:[x(Ek,{}),x(Rk,{title:"Sobre o NANOFAB"}),x(wk,{children:e.map(t=>x(Sk,{children:t.text},e.indexOf(t)))})]}),$k=C.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    @media screen and (max-width: ${m.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 10%;
    }
    @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {    
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
    @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {   
        display: flex;
        width: 85%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
        margin-top: 2%;
  }

    @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
        width: 90%;
    }
`,Tk=C.div`
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

  @media screen and (max-width: ${m.mobile}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {   
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    text-align: left;
  }

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {   
    padding: 1%;
  }
`,Mk=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;
  margin-top: 5%;
`,Lk=C.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`,Fk=C.span`
  margin: 10px;
  font-size: ${({theme:e})=>e.fonts.small}px;
  padding: 20px;
  text-align: justify;

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${m.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,Nk=C.span`
  margin: 20px;
  font-weight: bold;
  line-height: 30px;
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;
  margin-top: 90px;

  @media screen and (max-width: ${m.mobile}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {   
    margin-bottom: 0px;
    margin: 10px;
    margin-top: 100px;
  }
  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {   
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}){     
    font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
  }
`,Ik=({image:e,title:t,text:n})=>N(Tk,{children:[x(Mk,{children:x(Lk,{src:e,alt:t})}),x(Nk,{children:t}),x(Fk,{children:n})]}),Dk=({cards:e})=>x($k,{children:e.map(t=>x(Ik,{image:t.image,title:t.title,text:t.text},e.indexOf(t)))}),_k=({})=>N(Lb,{children:[x(Wt,{}),x(Ok,{descriptions:[{text:"O Laboratório Multiusuário de Nanofabricaçao e Caracterizaçao de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduaçao em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisiçao de um microscópio eletrônico de alta resoluçao do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existencia de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperaçao. Neste contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. "},{text:"Além disso, o NANOFAB atende demandas na área de micro e nanofabricaçao com o oferecimento de uma infraestrutura de sala limpa para fabricação de microdispositivos e deposição de Grafeno por deposição de vapor químico (Chemical Vapor Deposition). Esta sala limpa possui uma área especial para a manipulação e preparação de nanomateriais."},{text:"O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. Além disso, possui equipamentos para preparação de amostras para microscopia eletrônica de transmissão (MET)."},{text:"O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geraçăo de hidrogęnio, revestimentos de aços e compósitos."}]}),x(Dk,{cards:[{image:Nb,title:"Coordenação e Comitê Gestor",text:"O NANOFAB é coordenado pelo prof. José Brant de Campos (UERJ) e tem como vice-coordenador o prof. Norberto Mangiavacchi (UERJ). O Comitę Gestor do NANOFAB, é composto por quatro membros eleitos a cada dois anos. Para o Bienio 2023-2025, o Comite Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET), Rogério Navarro Correia de Siqueira (PUC-Rio) e pela profa. Suzana Bottega Peripolli (UERJ)."},{image:Fb,title:"Unidades e Programas Envolvidos / Projetos de Pesquisa",text:"Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química  e Engenharia Química) e o Instituto de Física da UERJ. O NANOFAB é um laboratório pertencente ao PROGEMULTI/UERJ (Programa de Gestão de Laboratórios e Equipamentos Multiusuários) da UERJ. Dentro das parcerias externas de pesquisa e institucionais, o NANOFAB desenvolve trabalhos com o sistema SENAI, CBPF, PUC-Rio, CEFET, UFRJ e UFF e coopera com universidades e centros de pesquisa no exterior, como o Centro de Microeletrônica de Barcelona (CNM), na Espanha e a Universidade de Louvain (UCLouvain), na Bélgica."}]}),x(Gt,{})]}),zk=C.div`
  width: 100%;
`,jk=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`,Uk=C.div`

`,Bk=C.img`
  height: 120px;
  @media screen and (max-width: ${m.mobile}) {
    height: 80px;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    height: 100px;
  }

  @media screen and (min-width: 700px) and (max-width: 821px) {
    height: 100px;
  }
`,Hk=C.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  margin-bottom: 20px;

  @media screen and (max-width: ${m.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
`,Vk=C.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    border-radius: 40px;
    
    @media screen and (max-width: ${m.mobile}) {
        width: 90%;
    }  
    
    @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
        width: 90%;
    }
`,Wk=C.span`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (max-width: ${m.mobile}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
  }
  
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  @media screen and (min-width: ${m.tablet}) and (max-width: 1025px) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
  
  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {    
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
  @media screen and (min-width: ${m.extraLargeDesktop}){    
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,Gk=C.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #d5d4d4;
`,Jk=C.div`
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
`,qk=C.div`
    width: 40%;
    margin: 10px;

    @media screen and (max-width: ${m.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${m.largeMobile}) {    
        width: 70%;
    }
`,Qk=C.button`    
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
`,Xk=C.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;
    flex-wrap: wrap;

    @media screen and (max-width: ${m.mobile}) {   
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
    
`,hu=C.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    flex: 1
`,mu=C.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`,Yk=C.span`
    font-size: ${({theme:e})=>e.fonts.small}px;
    color: ${({theme:e})=>e.colors.text.title};
    text-align: left;
`,gu=C.span`

`;function $0(e){return sa({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 14l-4-4h8z"}}]}]})(e)}function T0(e){return sa({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10l4 4H8z"}}]}]})(e)}const Kk=({name:e,unit:t,bond:n,titration:r})=>{const[i,o]=E.useState(!1);return N(qk,{children:[N(Qk,{onClick:()=>o(!i),isVisible:i,children:[x(Yk,{children:e}),i?x(T0,{size:20}):x($0,{size:20})]}),i?N(Xk,{isVisible:i,children:[N(hu,{children:[x(mu,{children:"PPG/IES"}),x(gu,{children:t})]}),N(hu,{children:[x(mu,{children:"Vínculo"}),x(gu,{children:n})]}),N(hu,{children:[x(mu,{children:"Titulação"}),x(gu,{children:r})]})]}):null]})},Zk=({title:e,persons:t})=>N(Vk,{children:[x(Gk,{children:x(Wk,{children:e})}),x(Jk,{children:t.map(n=>x(Kk,{name:n.name,bond:n.bond,titration:n.titration,unit:n.unit},t.indexOf(n)))})]}),eC="/Nanofab-Project/assets/team-2f83bf5a.png",tC=({list:e})=>N(jk,{children:[x(Uk,{children:x(Bk,{src:eC})}),x(Hk,{children:"Equipe"}),e.map(t=>x(Zk,{title:t.personFunction,persons:t.persons},e.indexOf(t)))]}),nC=({})=>N(zk,{children:[x(Wt,{}),x(tC,{list:[{personFunction:"Comitê Gestor",persons:[{name:"José Brant de Campos",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE "},{name:"Noberto Mangiavacchi",unit:"UERJ",bond:"Permanente",titration:"Doutor"},{name:"Hector Reynaldo Meneses",unit:"CEFET-RJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rogério Navarro Correia de Siqueira",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Suzana Bottega Peripolli",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]},{personFunction:"Equipe NANOFAB",persons:[{name:"Maybi Fálker Sampaio",unit:"NANOFAB/UERJ",bond:"Bolsista QUALITEC/UERJ",titration:"Doutor"},{name:"Kellen Venâncio dos Santos",unit:"NANOFAB/UERJ",bond:"Bolsista TCT/FAPERJ",titration:"Engenheira"},{name:"Camila Alves Pelicarto Silva",unit:"NANOFAB/UERJ",bond:"Bolsista PROATEC/UERJ",titration:"Engenheira"}]},{personFunction:"Comitê de Usuários",persons:[{name:"Lilian Pantoja Sosman",unit:"IF - PPGF/UERJ",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Ivana Lourenço de Mello Ferreira",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilia Garcia Diniz",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José Ricardo Muniz Ferreira",unit:"Empresa R-CRio",bond:"Sócio",titration:"Doutor"}]},{personFunction:"Pesquisador",persons:[{name:"Eduardo de Albuquerque Brocchi",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 1C, CNE"},{name:"José Guilherme Santos Silva",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1B, CNE"},{name:"Luciano Rodrigues Ornelas de Lima",unit:"PPG-EF/UERJ",bond:"Permanente",titration:"Doutor, PQ 1D, CNE"},{name:"Marcos Antonio da Silva Costa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Nakédia Maysa Freitas Carvalho",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ 2, CNE"},{name:"Francisco José Moura",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ 2"},{name:"Rodrigo Fernandes Magalhães de Souza",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eric Cardona Romani",unit:"SENAI",bond:"Permanente",titration:"Doutor"},{name:"Jorge Luis do Amaral",unit:"PPG-EL/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Marilza Sampaio Aguilar",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Daniel José Naid Mansur Chalhub",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"},{name:"José da Rocha Miranda Pontes",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Ana Maria Furtado de Sousa",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Jaqueline Dias Senra",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Juliana Fonseca de Lima",unit:"PPGQ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Herman Lima Pessoa",unit:"CBPF",bond:"Permanente",titration:"Doutor"},{name:"Letícia Aguilera dos Santos",unit:"IPRJ/UERJ",bond:"Permanente",titration:"Doutor"},{name:"Cecilia Vilani",unit:"PUC-Rio",bond:"Permanente",titration:"Doutor"},{name:"Celio Albano da Costa",unit:"UFRJ",bond:"Permanente",titration:"Doutor"},{name:"José Luis Lopes da Silveira",unit:"UFRJ",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eduardo Sousa Lima",unit:"IME",bond:"Permanente",titration:"Doutor, PQ2"},{name:"Eustáquio de Souza Baêta Junior",unit:"PPG-EM/UERJ",bond:"Permanente",titration:"Doutor"}]}]}),x(Gt,{})]}),rC=C.div`
  width: 100%;
`,iC=C.div`
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
`,oC=C.h1`
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;


  @media screen and (min-width: ${m.desktop}) and (max-width: ${m.largeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*3.5}px;
  }
`,aC=C.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
`,lC=C.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`,sC=C.div`
  margin-top: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;

  @media screen and (max-width: ${m.mobile}) {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    width: 100%;
    margin-top: 20px;
  }
`,$h=C.button`
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

   @media screen and (max-width: ${m.mobile}) {
     width: 50%;
   }

   @media screen and (min-width: 390px) and (max-width: ${m.largeMobile}) {
     width: 50%;
   }

   @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
     width: 50%;
   }

   @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
     width: 50%;
   }

   @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
     width: 60%;
   }

   @media screen and (min-width: ${m.extraLargeDesktop}) {
     width: 30%;
     font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
   }
   @media screen and (min-width: ${m.desktop}) and (max-width: ${m.largeDesktop}) {
     width: 30%;
     font-size: ${({theme:e})=>e.fonts.extralarge}px;
   }
`,uC=C.div`
  width: 50%;
  margin-bottom: 3%;
  margin-right: 50%;
`,cC=C.h2`
  font-size: ${({theme:e})=>e.fonts.large}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

   @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
     font-size: ${({theme:e})=>e.fonts.large}px;
   }

   @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
     font-size: ${({theme:e})=>e.fonts.extralarge}px;
   }

   @media screen and (min-width: ${m.desktop}) and (max-width: ${m.largeDesktop}) {
     font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
   }

   @media screen and (min-width: ${m.extraLargeDesktop}) {
     font-size: ${({theme:e})=>e.fonts.extralarge*2.5}px;
   }
`,dC=C.select`
  width: 25%;
  border-radius: 10px;
  margin-right: 20px;
  padding: 0.5%;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fonts.small}px;

  @media screen and (max-width: ${m.mobile}) {
    width: 100%;
    margin-right: 6px;
  }

  @media screen and (min-width: 390px) and (max-width: ${m.largeMobile}) {
    width: 100%;
    margin-right: 5px;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    width: 100%;
    margin-right: 6px;
  }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
    width: 100%;
    margin-right: 10px;
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    width: 100%;
    margin-right: 10px;
  }

  @media screen and (min-width: ${m.desktop}) and (max-width: ${m.largeDesktop}) {
    width: 30%;
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    width: 35%;
    font-size: ${({theme:e})=>e.fonts.large}px;
  }
`;C.option`
  font-size: ${({theme:e})=>e.fonts.large}px;
`;const fC=C.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  width: 100%;
`,pC=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  
  
`,hC=C.div`
    width: 100%;
    display: flex;
    background-color: #D5D4D4;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


`,mC=C.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin: 5px;
    font-weight: bold;
    margin-left: 10px;

    @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
      }
      @media screen and (min-width: ${m.extraLargeDesktop}){    
        
      }
      
`,gC=C.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    
`,vC=C.span`
    text-align: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ${({status:e})=>{if(e==="Aprovado")return"background-color: rgba(48, 212, 111, 0.7);";if(e==="Solicitado")return"background-color: rgba(255, 204, 92, 0.7);";if(e==="Cancelado")return"background-color: rgba(255, 111, 105, 0.7);"}}
`,vu=C.span`
    margin: 10px;
`,yC=({name:e,institution:t,startDate:n,endDate:r,samples:i,situation:o})=>N(pC,{children:[x(hC,{children:N(mC,{children:[e," - ",t]})}),N(gC,{children:[N(vu,{children:["Data de Solicitação: ",n]}),N(vu,{children:["Data Final: ",r||"Não informado"]}),N(vu,{children:["Quantidade de Amostras: ",i]})]}),x(vC,{status:o,children:o})]}),xC=({list:e})=>{const[t,n]=E.useState(0),[r,i]=E.useState(9),[o,a]=E.useState("Todos");E.useState([]);const[l,s]=E.useState([]);E.useEffect(()=>{const S=[];e.forEach(w=>{(o==="Todos"||w.situation===o)&&S.push(w)}),s(S)},[e,o]);const u=()=>{t===9?(n(t),i(r)):(n(t+9),i(r+9))},c=()=>{t===0?(n(0),i(9)):(n(t-9),i(r-9))},d=l.slice(t,r).map(S=>x(yC,{name:S.name,institution:S.institution,startDate:S.startDate,endDate:S.endDate,samples:S.samples,situation:S.situation},e.indexOf(S)));function p(S){S.target.value==="Todos"?a("Todos"):S.target.value==="Solicitado"?a("Solicitado"):S.target.value==="Agendado"?a("Agendado"):S.target.value==="Finalizado"?a("Finalizado"):S.target.value==="Antigos"&&a("Antigos")}return N(aC,{children:[N(uC,{children:[x(cC,{children:"Filtro"}),x(fC,{children:N(dC,{onChange:S=>p(S),children:[x("option",{value:"Todos",children:"Todos"}),x("option",{value:"Solicitado",children:"Solicitado"}),x("option",{value:"Agendado",children:"Agendado"}),x("option",{value:"Finalizado",children:"Finalizado"}),x("option",{value:"Antigos",children:"Antigos"})]})})]}),x(lC,{children:d}),N(sC,{children:[x($h,{onClick:c,children:"Anterior"}),x($h,{onClick:u,children:"Próxima"})]})]})},wC=({})=>N(iC,{children:[x(oC,{children:"Lista de Solitações"}),x(xC,{list:[{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Pedro Carlos",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Roberto Lima",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Aprovado"},{name:"Victor Costa",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Maria Paula",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Finalizado"},{name:"Sandra Barros",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Victoria Maria",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Solicitado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Agendado"},{name:"Joana Saraiva",institution:"UFRJ",startDate:"07 de dezembro",endDate:null,samples:1,situation:"Antigos"}]})]}),SC=({})=>N(rC,{children:[x(Wt,{}),x(wC,{}),x(Gt,{})]}),bC=C.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`,kC=C.div`
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

  @media screen and (max-width: ${m.mobile}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    margin-top: 20%;
    margin-bottom: 15%;
  }
`,CC=C.div`
  position: absolute;
  top: -50px;
  right: -50px;
  background-color: ${({theme:e})=>e.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${m.mobile}) {
    right: calc(100vw / 3);
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    right: calc(100vw / 3);
  }
  /*
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  } */
`,EC=C.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${m.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
 
`;C.h1` // Submissão de Projeto
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;

  @media screen and (max-width: ${m.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -8%; // Removes the space between this title and the 'Orientador' label
  }
`;const AC=C.div`
  width: 100%;
  padding: 2%;
  padding-left: 0%;
  padding-right: 0%;
  padding-bottom: 0;

`,ao=C.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${m.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,ys=C.input`
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
    
    @media screen and (max-width: ${m.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`;C.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
    `;const Vn=C.input`
    height: 15px;
    width: 15px;
`,Wn=C.label`
  margin-left: 5px;
  font-family: "Maven Pro";
  `,Gn=C.div`
  display: flex;
  
  flex-direction: row;
  margin: 5px;
  `,yu=C.div`
  margin-bottom: 3%;
  margin-top: 3%;
  `,PC=C(ys)`

`,RC=C(ys)`

`,OC=C(ys)`

`,xs=C.div`
    margin-bottom: 3%;
`;C(xs)`

`;C(xs)`

`;C(xs)`

`;const $C=({formData:e,setFormData:t})=>{const n=r=>{switch(console.log(r),r){case"microscopia_eletronica":t({...e,microscopia_eletronica:!e.microscopia_eletronica});break;case"amostras_met":t({...e,amostras_met:!e.amostras_met});break;case"grafeno_cvd":t({...e,grafeno_cvd:!e.grafeno_cvd});break;case"microsoldadora":t({...e,microsoldadora:!e.microsoldadora});break;case"microdurometro":t({...e,microdurometro:!e.microdurometro});break;case"estereoscopio":t({...e,estereoscopio:!e.estereoscopio});break;case"nanomat":t({...e,nanomat:!e.nanomat});break;case"microfab":t({...e,microfab:!e.microfab});break;default:console.log("Caso fora do switch-case")}};return N(AC,{children:[N(xs,{children:[x(ao,{children:"Orientador:"}),x(ys,{type:"text",name:"orientador",value:e.orientador,onChange:r=>t({...e,orientador:r.target.value}),placeholder:"(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"})]}),x(ao,{children:"Tipos:"}),N(Gn,{children:[x(Vn,{type:"checkbox",value:"1",checked:e.microscopia_eletronica,onChange:()=>n("microscopia_eletronica")}),x(Wn,{children:"Microscopia Eletrônica de Varredura"})]}),N(Gn,{children:[x(Vn,{type:"checkbox",value:"amostras_met",checked:e.amostras_met,onChange:()=>n("amostras_met")}),x(Wn,{children:"Preparação de Amostras para MET"})]}),N(Gn,{children:[x(Vn,{type:"checkbox",value:"nanomat",checked:e.nanomat,onChange:()=>n("nanomat")}),x(Wn,{children:"Sala Limpa: preparação de Nanomateriais"})]}),N(Gn,{children:[x(Vn,{type:"checkbox",value:"microfab",checked:e.microfab,onChange:()=>n("microfab")}),x(Wn,{children:"Sala Limpa: microfabricação"})]}),N(Gn,{children:[x(Vn,{type:"checkbox",value:"grafeno_cvd",checked:e.grafeno_cvd,onChange:()=>n("grafeno_cvd")}),x(Wn,{children:"Sala Limpa: Deposição de Grafeno por CVD"})]}),N(Gn,{children:[x(Vn,{type:"checkbox",value:"microsoldadora",checked:e.microsoldadora,onChange:()=>n("microsoldadora")}),x(Wn,{children:"Microsoldadora"})]}),N(Gn,{children:[x(Vn,{type:"checkbox",value:"microdurometro",checked:e.microdurometro,onChange:()=>n("microdurometro")}),x(Wn,{children:"Microdurômetro"})]}),N(Gn,{children:[x(Vn,{type:"checkbox",value:"estereoscopio",checked:e.estereoscopio,onChange:()=>n("estereoscopio")}),x(Wn,{children:"Estereoscópio"})]}),N(yu,{children:[x(ao,{children:"Outros:"}),x(PC,{type:"text",name:"outros",value:e.outros,onChange:r=>t({...e,outros:r.target.value}),placeholder:"Informar nome."})]}),N(yu,{children:[x(ao,{children:"Detectores:"}),x(RC,{type:"text",name:"outros",value:e.detectores,onChange:r=>t({...e,detectores:r.target.value}),placeholder:"[TEMP] Informar detectores."})]}),N(yu,{children:[x(ao,{children:"Projeto Científico e Descrição das Amostras:"}),x(OC,{type:"text",name:"outros",value:e.projeto_descricao_amostras,onChange:r=>t({...e,projeto_descricao_amostras:r.target.value}),placeholder:"[TEMP] Informar Projeto Científico e Descrição das Amostras:."})]})]})},TC=C.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,MC=C.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
    
    @media screen and (max-width: ${m.mobile}) {    
        width: 80%;
        margin-bottom: 5%;
    }
    @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {   
        width: 80%;
        margin-bottom: 5%;
    }
    `,Th=C.button`
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

    @media screen and (max-width: ${m.mobile}) {    
        width: 40%;
        height: 5vh;
    }

    @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {   
        width: 40%;
    }

    `,LC=({})=>x(TC,{children:N(MC,{children:[x(Th,{children:"Apagar"}),x(Th,{type:"submit",children:"Enviar"})]})}),FC=C.div`
    width: 100%;
    margin-bottom: 3%;

`,xu=C.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${m.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,NC=C.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
`,Mh=C.section`
    width: 30%;
`,Lh=C.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    margin: 3%;
    margin-left: 0px;
`,Fh=C.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,Nh=C.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,IC=C.input`
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
    
    @media screen and (max-width: ${m.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,DC=C.div`
  margin-bottom: 3%;
`,_C=C.input`
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
    
    @media screen and (max-width: ${m.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,zC=({formData:e,setFormData:t})=>N(FC,{children:[N(NC,{children:[N(Mh,{children:[x(xu,{children:"Tipo de Análise"}),N(Lh,{children:[x(Fh,{type:"radio",id:"quantitativa",name:"analysisType",color:"red",value:"quantitativa",checked:e.analise_quantitativa,onChange:()=>{e.analise_quantitativa!==e.analise_qualitativa&&t({...e,analise_quantitativa:!e.analise_quantitativa,analise_qualitativa:!e.analise_qualitativa}),e.analise_quantitativa===e.analise_qualitativa&&t({...e,analise_quantitativa:!0,analise_qualitativa:!1})}}),x(Nh,{htmlFor:"quantitativa",children:"Quantitativa"})]}),N(Lh,{children:[x(Fh,{type:"radio",id:"qualitativa",name:"analysisType",value:"Qualitativa",onChange:()=>{e.analise_quantitativa!==e.analise_qualitativa&&t({...e,analise_quantitativa:!e.analise_quantitativa,analise_qualitativa:!e.analise_qualitativa}),e.analise_quantitativa===e.analise_qualitativa&&t({...e,analise_quantitativa:!1,analise_qualitativa:!0})}}),x(Nh,{htmlFor:"qualitativa",children:"Qualitativa"})]})]}),N(Mh,{children:[N(xu,{children:["Qntd. de Amostras - Máximo ",Hc]}),x(IC,{type:"number",min:"1",max:Hc,value:e.quantidade_amostras,onChange:n=>t({...e,quantidade_amostras:parseInt(n.target.value)})})]})]}),N(DC,{children:[x(xu,{children:"Técnicas de Medida e Condições de Varredura:"}),x(_C,{type:"text",name:"tecnicas_condicoes",value:e.tecnicas_condicoes,onChange:n=>t({...e,tecnicas_condicoes:n.target.value}),placeholder:"Se souber, descreva as técnicas de medida e as condições de carredura."})]})]}),jC=C.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
    margin-bottom: 3%;
`,Ih=C.div`
    width: 45%;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    
`,Dh=C.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
`,_h=C.input`
    width: 90%;
    height: 40px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    margin-bottom: 10px;
    
    `,UC=({formData:e,setFormData:t})=>{const n=(r,i,o)=>{const a=e.amostras;o==="composicaoAmostra"?a[r]={identificacao_amostra:a[r].identificacao_amostra,composicao_quimica:i}:a[r]={identificacao_amostra:i,composicao_quimica:a[r].composicao_quimica},t({...e,amostras:a})};return N(jC,{children:[N(Ih,{children:[x(Dh,{children:"Identificação da(s) Amostra(s):"}),x(Gf,{children:Array.from({length:e.quantidade_amostras},(r,i)=>x(_h,{type:"text",onChange:o=>n(i,o.target.value,"identificacaoAmostra"),name:"chemicalIdentification"},i))})]}),N(Ih,{children:[x(Dh,{children:"Composição Química:"}),x(Gf,{children:Array.from({length:e.quantidade_amostras},(r,i)=>x(_h,{type:"text",onChange:o=>n(i,o.target.value,"composicaoAmostra"),name:"chemicalComposition"},i))})]})]})},BC=C.div`
  width: 100%;
  padding: 5%;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0;

`,wu=C.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${m.mobile}) {    
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    font-size: ${({theme:e})=>e.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`,HC=C.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
`,VC=C.h4`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  margin-bottom: 10px;  
`,WC=C.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3%;
`,zh=C.section`
    width: 45%;
`,Jn=C.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    margin: 3%;
    margin-left: 0px;
`,qn=C.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`,Qn=C.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,GC=C.select`
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
    
    @media screen and (max-width: ${m.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`,jh=C.option`

`,JC=C.div`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,qC=C.p`
  color: #5086B6;
`;C.select`
  
`;const QC=({formData:e,setFormData:t})=>{const n=["Urgente","Alta","Média","Baixa"],r=E.useRef(null),i=()=>r.current.value;return N(BC,{children:[N(WC,{children:[N(zh,{children:[x(wu,{children:"Retornar a(s) amostra(s) analisada(s)?"}),N(Jn,{children:[x(qn,{type:"radio",id:"retorna_sim",name:"analysisType",value:"retorna_sim",color:"red",checked:e.retornar_amostra!=null?e.retornar_amostra:!1,onChange:()=>t({...e,retornar_amostra:!0})}),x(Qn,{htmlFor:"retorna_sim",children:"Sim"})]}),N(Jn,{children:[x(qn,{type:"radio",id:"retorna_nao",name:"analysisType",value:"retorna_nao",color:"red",checked:e.retornar_amostra!=null?!e.retornar_amostra:!1,onChange:()=>t({...e,retornar_amostra:!1})}),x(Qn,{htmlFor:"retorna_nao",children:"Não"})]})]}),N(zh,{children:[x(wu,{children:"Nível de prioridade desejada:"}),N(GC,{id:"priority_selector",name:"priority_selector",ref:r,onChange:()=>{t({...e,nivel_prioridade:i()})},children:[x(jh,{value:" ",selected:!0,disabled:!0,children:"Selecione uma prioridade"}),n.map(o=>x(jh,{value:o,children:o}))]})]})]}),N(JC,{children:[x(wu,{children:"Informe as condições de segurança quanto ao manuseio do material."}),x(VC,{children:"Caso a quantidade de amostras passe o número proposto, avisar antes de envia-las"}),N(HC,{children:[N(Jn,{children:[x(qn,{type:"radio",id:"inflamavel",name:"securityConditions",value:"inflamavel",onClick:()=>t({...e,condicao_seguranca:"inflamavel"})}),x(Qn,{htmlFor:"inflamavel",children:"Inflamável"})]}),N(Jn,{children:[x(qn,{type:"radio",id:"toxico",name:"securityConditions",value:"toxico",onClick:()=>t({...e,condicao_seguranca:"toxico"})}),x(Qn,{htmlFor:"toxico",children:"Tóxico"})]}),N(Jn,{children:[x(qn,{type:"radio",id:"hidroscopico",name:"securityConditions",value:"hidroscopico",onClick:()=>t({...e,condicao_seguranca:"hidroscopico"})}),x(Qn,{htmlFor:"hidroscopico",children:"Hidroscópico"})]}),N(Jn,{children:[x(qn,{type:"radio",id:"radioativo",name:"securityConditions",value:"radioativo",onClick:()=>t({...e,condicao_seguranca:"radioativo"})}),x(Qn,{htmlFor:"radioativo",children:"Radioativo"})]}),N(Jn,{children:[x(qn,{type:"radio",id:"corrosivo",name:"securityConditions",value:"corrosivo",onClick:()=>t({...e,condicao_seguranca:"corrosivo"})}),x(Qn,{htmlFor:"corrosivo",children:"Corrosivo"})]}),N(Jn,{children:[x(qn,{type:"radio",id:"corrosivo",name:"securityConditions",value:"corrosivo",onClick:()=>t({...e,condicao_seguranca:"outros"})}),x(Qn,{htmlFor:"corrosivo",children:"Outros"})]})]}),x(qC,{children:"(*) Caso não saiba as condições de segurança quanto ao manuseio, não é necessário selecionar os campos."})]})]})},XC="/Nanofab-Project/assets/search-1143e4ec.png",Hc=200,YC=({})=>{E.useState(1);const[e,t]=E.useState({analise_qualitativa:!1,analise_quantitativa:!1,quantidade_amostras:1,tecnicas_condicoes:"",orientador:"",microscopia_eletronica:!1,amostras_met:!1,nanomat:!1,microfab:!1,grafeno_cvd:!1,microsoldadora:!1,microdurometro:!1,estereoscopio:!1,outros:"",detectores:"",projeto_descricao_amostras:"",amostras:Array(Hc).fill({}),nivel_prioridade:"",condicao_seguranca:""}),n=r=>{r.preventDefault(),console.log(e)};return E.useEffect(()=>{},[]),N(kC,{children:[x(CC,{children:x(EC,{src:XC})}),N("form",{onSubmit:n,children:[x(zC,{formData:e,setFormData:t}),x($C,{formData:e,setFormData:t}),x(UC,{formData:e,setFormData:t}),x(QC,{formData:e,setFormData:t}),x(LC,{formData:e,setFormData:t})]})]})},KC=({})=>N(bC,{children:[x(Wt,{}),x(YC,{}),x(Gt,{})]}),ZC=C.div`
  width: 100%;
`,eE=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${m.mobile}) {
    margin-top: 7%;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    margin-top: 6%;
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    margin-top: 5%;
  }

  @media screen and (min-width: ${m.desktop}) and (max-width: ${m.largeDesktop}) {
    margin-top: 2%;
  }
`,tE="/Nanofab-Project/assets/publications2-b4db6c33.svg",nE=C.div`
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    margin-bottom: 2%;
  }
`,rE=C.div`
  /* width: 30%; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 70px; */
`,iE=C.div`
  height: 10vh;
  padding: 35px;

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    margin-bottom: 5%;
  }
  
  @media screen and (min-width: ${m.desktop}) and (max-width: ${m.largeDesktop}) {
    margin-bottom: 10%;
    padding: 0;
  }

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {    
    padding: 0;
    margin: 0;
  }
`,oE=C.img`
  height: 150px;
  width: 150px;

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {
    height: 180px;
    width: 180px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    height: 250px;
    width: 250px;
  }
`,aE=({url:e})=>x(iE,{children:x(oE,{src:e})}),lE=C.div``,sE=C.span`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fonts.extralarge}px;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*2}px;
  }
`,uE=({title:e})=>x(lE,{children:x(sE,{children:e})}),M0=({title:e,image:t})=>x(nE,{children:N(rE,{children:[x(aE,{url:t}),x(uE,{title:e})]})}),cE=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 50px;
`,dE=C.div`
    width: 40%;
    margin-bottom: 10px;

    @media screen and (max-width: ${m.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${m.largeMobile}) {    
        width: 70%;
    }

    @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
        margin-bottom: 20px;
    }
`,fE=C.button`    
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
`,pE=C.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;

    @media screen and (max-width: ${m.mobile}) {   
        justify-content: space-between;
    }
    @media screen and (min-width: ${m.extraLargeDesktop}) {    
        padding: 30px;
    }
`;C.div`
    width: 50%;
    text-align: justify;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`;const hE=C.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${m.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {    
        min-height: 70px;
    }

`;C.span`
    margin-bottom: 10px;
    font-size: ${({theme:e})=>e.fonts.medium}px;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.auxiliary.error.dark};
`;const mE=C.span`
    font-size: ${({theme:e})=>e.fonts.medium}px;
    text-align: left;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #AE0806;

    @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge}px;
    }
    @media screen and (min-width: ${m.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.7}px;
    }
`,gE=C.span`
    text-align: justify;

    @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.large}px;
    }
    @media screen and (min-width: ${m.extraLargeDesktop}) {    
        font-size: ${({theme:e})=>e.fonts.extralarge*1.1}px;
    }
`,vE=({year:e,descriptions:t})=>{const[n,r]=E.useState(!1);return N(dE,{children:[N(fE,{onClick:()=>r(!n),isVisible:n,children:[x(mE,{children:e}),n?x(T0,{size:20}):x($0,{size:20})]}),n?x(pE,{isVisible:n,children:t.map(i=>x(hE,{children:x(gE,{children:i.description})}))}):null]})},yE=({list:e})=>x(cE,{children:e.map(t=>x(vE,{year:t.year,descriptions:t.descriptions},e.indexOf(t)))}),xE=({})=>N(ZC,{children:[x(Wt,{}),x(M0,{title:"Publicações",image:tE}),x(eE,{children:x(yE,{list:[{year:"2022",descriptions:[{description:"SILVA, ADRIEL M.; SOUZA, RODRIGO F.M.; AGUILERA, LETÍCIA S.; de Campos, José B.; BROCCHI, EDUARDO A. Upgrade of titanium content in a vanadiferous titanomagnetite waste: Design of a roast-leach route based on thermodynamics simulations. MINERALS ENGINEERING. , v.179, p.107460 - , 2022."},{description:"LIMA, EDUARDO DE SOUSA; GALL, CAMILA CATALANO; ALVES, MANUEL FELLIPE R.P.; DE CAMPOS, JOSÉ BRANT; CAMPOS, TIAGO MOREIRA BASTOS; SANTOS, CLAUDINEI DOS Development and characterization of alumina-toughened zirconia (ATZ) ceramic composites doped with a beneficiated rare-earth oxide extracted from natural ore. Journal of Materials Research and Technology-JMR&T. , v.16, p.451 - 460, 2022."}]},{year:"2021",descriptions:[{description:"MARÍN CASTAÑO, ELIANA PAOLA; CAMPOS, JOSÉ BRANT DE; SOLÓRZANO-NARANJO, IVAN GUILLERMO; BROCCHI, EDUARDO DE ALBUQUERQUE Characterization of Ternary CuNiCo Metallic Nanoparticles Produced by Hydrogen Reduction.Materials. , v.14, p.6006 - , 2021."},{description:"SAMPAIO, M.F.; MARINHO, P.R.B.; CABRUJA, E.; LOZANO, M.; LIMA JÚNIOR, H.P.; de Campos, J.B. SU- 8 processing improvement and simulating studies for a Micromegas detector fabrication.Journal of Instrumentation. , v.16, p.P08022 - P02038, 2021."},{description:"HORTA, MARLA KAROLYNE DOS SANTOS; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; WESTIN, CECÍLIA BUZATTO; NAVARRO DA ROCHA, DANIEL; CAMPOS, JOSÉ BRANT < i > In vitro</> evaluation of natural hydroxyapatite from Osteoglossum bicirrhosum fish scales for biomedical application.International Journal of Applied Ceramic Technology. , v.18, p.1930 - 1937, 2021."},{description:"MOTA, RAFAEL OLIVEIRA DA; DÓREA, MÁRCIA DE MELO; AGUILERA, LETÍCIA DOS SANTOS; ROMANI, ERIC CARDONA; COSTA, HECTOR REYNALDO MENESES; CAMPOS, JOSÉ BRANT DE AVANÇOS RECENTES NA UTILIZAÇÃO DO GRAFENO COMO ADITIVO EM POLÍMEROS / RECENT ADVANCES IN THE USE OF GRAPHENE AS AN ADDITIVE IN POLYMERS. Brazilian Journal of Development. , v.7, p.32743 - 32752, 2021."},{description:"RIBEIRO, SUZANA BARRETO NORONHA; DA VEIGA JUNIOR, VALDIR FLORÊNCIO; DE CAMPOS, JOSÉ BRANT; DOS SANTOS, JHEISON LOPES; LOPES, IAGO JOSÉ VITRAL REZENDE; DA ROCHA, DANIEL NAVARRO; DA SILVA, MARCELO HENRIQUE PRADO Influences of biosilica content from Amazonian freshwater sponge on calcium phosphates.Journal of the Australian Ceramic Society. , v.57, p.55 - 65, 2021"},{description:"Machado, Marcelo Vitor Ferreira; DE CAMPOS, JOSÉ BRANT; AGUILAR, MARILZA SAMPAIO; Ramos, Vitor Santos Mechanical and Microstructural Characterizations on Commercial and Synthesized by the Sol- Gel Method Using Chicken Egg Shells as Precursor Hydroxyapatite.South Florida Journal of Development. , v.2, p.1365 - 1374, 2021."}]},{year:"2020",descriptions:[{description:"BARROS, S. D.; DUARTE, J. P. P.; ROCHA, L. D. S.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S.; MEDEIOS, M. E.; de Campos, José B.; COSTA, M. E. H. M.; LACHTER, E. R.; SENRA, J. D.; MALTA, L. F. B. Cyclodextrin-Stabilized Palladium Nanoparticles on Ceria: Invertigation of Support Interactions and Pivotal Promotion in the Suzuki-Miyaura Reaction. ChemistrySelect. , v.5, p.7227 - 7235, 2020."},{description:"MELLO, NATHALLI M.; REGO, ARTUR S. C.; BROCCHI, EDUARDO A.; CAMPOS, JOSÉ B. DE; MOURA, FRANCISCO J.; SOUZA, RODRIGO F. M. Effect of an Alumina Supported Palladium Catalyst on the Magnesium Sulfate Decomposition Kinetics. MATERIALS RESEARCH. , v.23, p.1 - 9, 2020."},{description:"CARNEIRO, MATEUS R. D.; FREITAS, BRUNO C.; DE BARROS, IURI B.; de Campos, José B.; BASTOS, IVAN N.; COSTA, HECTOR R. M. Evaluation of adhesion of epoxy resin sealant to improve the corrosion resistance of thermal sprayed coatings. APPLIED ADHESION SCIENCE. , v.8, p.7 - 21, 2020."},{description:"HORTA, M. K. S.; Moura F.J.; AGUILAR, M. S.; WESTIN, C. B.; de Campos, J.B.; PERIPOLLI, S. B.; RAMOS, V. S.; NAVARRO, M. I.; ARCANJO, B. S. Nanostructured Hydroxyapatite from Hen's Eggshells Using Sucrose as a Template. Materials Research-Ibero-american Journal of Materials. , v.23, p.1 - 9, 2020."}]},{year:"2019",descriptions:[{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; SANTOS, JHEISON LOPES DOS; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; BARBOSA, RAFAEL MAZA; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Bioactivity of strontium-monetite coatings for biomedical applications. CERAMICS INTERNATIONAL. , v.45, p.7568 - 7579, 2019."},{description:"SILVA, LORENNA; NEVES, VINÍCIUS; RAMOS, VITOR; SILVA, RAPHAEL; CAMPOS, JOSÉ; SILVA, ALEXSANDRO; MALTA, LUIZ; SENRA, JAQUELINE Layered Double Hydroxides as Bifunctional Catalysts for the Aryl Borylation under Ligand-Free Conditions. Catalysts. , v.9, p.302 - 314, 2019."},{description:"GALVÃO, RHAUANE ALMEIDA; SANTA-CRUZ, LARISSA AGOSTINHO DE; BARRETO, PALOMA BANTIM; HORTA, MARLA KAROLYNE DOS SANTOS; ANDRADE, ANTONIO MARCOS HELGUEIRA DE; MOURA, FRANCISCO JOSÉ; AGUILAR, MARILZA SAMPAIO; PERIPOLLI, SUZANA BOTTEGA; CAMPOS, JOSÉ BRANT DE; ARRUDA, ISABEL RENATA DE SOUZA; MACHADO, GIOVANNA Electrochemical single-step obtention and characterization of a biomimetic TiO <sub>2</sub> -HA NTs covered by chitosan. JOURNAL OF MATERIALS RESEARCH. , v.34, p.1 - 11, 2019."},{description:"SOUZA, RODRIGO; QUEIROZ, CARLOS; BRANT, JOSÉ; BROCCHI, EDUARDO Pyrometallurgical processing of a low copper content concentrate based on a thermodynamic assessment. MINERALS ENGINEERING. , v.130, p.156 - 164, 2019."},{description:"HORTA, MARLA; AGUILAR, MARILZA; MOURA, FRANCISCO; CAMPOS, JOSÉ; RAMOS, VITOR; QUIZUNDA, ADILSON Synthesis and characterization of green nanohydroxyapatite from hen eggshell by precipitation method. MATERIALS TODAY: PROCEEDINGS. , v.14, p.716 - 721, 2019"}]},{year:"2018",descriptions:[{description:"FERREIRA, J. R. M.; Louro, Luis Henrique Leme; COSTA, A. M.; MARCAL, R. L. S. B.; ROCHA, D. N.; BARBOSA, R. M.; de Campos, José B.; PRADO, M. H. Zinc-doped Calcium Phosphate Coating on Titanium Surface Using Ostrich Eggshell as a Ca2+ Ions Source. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."},{description:"AGUILERA, L. S.; de Campos, J.B.; de Biasi, R.S.; Figueiredo, A.B.H.S. Use of the Drag Method to Study the Magnetic Behavior of Mn-Zn Ferrite Nanoparticles. The International Journal of Engineering and Science. , v.7, p.57 - 61, 2018."},{description:"BIASI, RONALDO SERGIO DE; MELO, GABRIEL BURLANDY MOTA DE; FIGUEIREDO, ANDRÉ BEN-HUR DA SILVA; CAMARENA, MARIELLA ALZAMORA; CAMPOS, JOSÉ BRANT DE Properties of manganese ferrite-paraffin composites. Journal of Materials Research and Technology-JMR&T. , v.8, p.309 - 313, 2018."},{description:"AGUILERA, L. S.; MARCAL, R. L. S. B.; de Campos, J.B.; PRADO, M. H.; Figueiredo, A.B.H.S.MAGNETIC FILTER PRODUCED BY ZnFe2O4 NANOPARTICLES USING FREEZE CASTING. Journal of Materials Research and Technology-JMR&T. , v.7, p.350 - 355, 2018. "},{description:"ROCHA, DANIEL NAVARRO DA; SILVA, MARCELO H. PRADO DA; CAMPOS, JOSÉ BRANT DE; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; CRUZ, LEILA ROSA Kinetics of conversion of brushite coatings to hydroxyapatite in alkaline solution. Journal of Materials Research and Technology-JMR&T. , v.7, p.479 - 486, 2018."},{description:"Cabral, R.F.; de Campos, J.B.; SILVA, C. E. V.; FONSECA, G. M.; LIMA, W. N.; LIMA, E. Formação da fase YNbO4 na sinterização do compósito Alumina-YAG com Nb2O5. CADERNOS UNIFOA (IMPRESSO). , v.36, p.29 - 35, 2018."},{description:"Cabral, R.F.; PRADO DA SILVA, M.H.; Lima, E.S.; de Campos, J.B.; MAGNAGO, ROBERTO DE OLIVEIRA Evaluation of Hardness and the Fracture Toughness of Composite Biphasic Alumina-YAG. MATERIALS SCIENCE FORUM (ONLINE). , v.912, p.82 - 86, 2018."},{description:"SALEIRO, GISELE TEIXEIRA; GONÇALVES, DANILO CORREA; COSTA, CÉLIO ALBANO DA; CAMPOS, JOSÉ BRANT DE; LIMA, EDUARDO DE SOUSA COMPORTAMENTO MECÂNICO DO SIC ADITIVADO COM Al2O3 E Y2O3 PRODUZIDOS PELA SÍNTESE POR COMBUSTÃO AUTOSSUSTENTÁVEL À ALTA TEMPERATURA. TECNOLOGIA EM METALURGIA, MATERIAIS E MINERAÇÃO. , v.15, p.96 - 102, 2018."},{description:"MENDONCA, F.; COSTA, A. M.; de Campos, J.B.; MARCAL, R. L. S. B.; ROCHA, D. N.; PRADO, M. H. Bioactivity Assessment of Ag-HA. Biomaterials and Medical Applications. , v.01, p.1 - , 2018."}]},{year:"2017",descriptions:[{description:"GONÇALVES, DANILO CORRÊA; SALEIRO, GISELE TEIXEIRA; MATIAS, PHILIPE CARDOSO; GOMES, ALAELSON VIEIRA; RAMOS, VITOR; CAMPOS, JOSÉ BRANT BRANT DE; MELO, FRANCISCO CRISTOVÃO LOURENÇO DE; LIMA, EDUARDO SOUSA Microstructural Characterization and Influence of Ceramography Method on the Microhardness of Sintering Agents Added Silicon Carbide. Materials Research-Ibero-american Journal of Materials"},{description:"NAVARRO DA ROCHA, DANIEL; CRUZ, LEILA ROSA DE OLIVEIRA; DE CAMPOS, JOSÉ BRANT; MARÇAL, RUBENS L. SANTANA BLAZUTTI; MIJARES, DINDO Q.; COELHO, PAULO G.; PRADO DA SILVA, MARCELO H. Mg substituted apatite coating from alkali conversion of acidic calcium phosphate. Materials Science & Engineering C-Materials for Biological Applications. , v.70, p.408 - 417, 2017."},{description:"ROMANI, E. C.; LARRUDE, D. G.; NACHEZ, L.; VILANI, C.; de CAMPOS, J. B.; PERIPOLLI, S. B.; FREIRE, F. L.Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS. , v.65, p.1 - 9, 2017."},{description:"SANTOS, J. L.; MARÇAL, R. L. S. B.; JESUS, P. R. R.; GOMES, A. V.; LIMA, E. P.; MONTEIRO, S. N.; de CAMPOS, J. B.; LOURO, L. H. L.Effect of LiF as Sintering Agent on the Densification and Phase Formation in Al2O3-4 Wt Pct Nb2O5 Ceramic Compound. METALLURGICAL AND MATERIALS TRANSACTIONS A-PHYSICAL METALLURGY AND MATERIALS SCIENCE. , v.48, p.4432 - 4440, 2017."}]}]})}),x(Gt,{})]}),wE=C.div`
  width: 100%;

`,SE=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: ${m.mobile}) {    
    margin-top: 10%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    margin-top: 8%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {    
    margin-top: 7%;   
  }


  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
    margin-top: 7%;
    margin-bottom: 5%;
  }

  @media screen and (min-width: ${m.largeNotebook}) and (max-width: ${m.desktop}) {    
    margin-top: 4%;
    margin-bottom: 5%;
  }
`,bE=C.div`
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
    @media screen and (max-width: ${m.largeDesktop}){
        height: 16%;
    }
    @media screen and (max-width: ${m.tablet}){
        height: 17%;
    }
    @media screen and (min-width: ${m.extraLargeDesktop}) {
	    height: 17%;
    }

    @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${m.largeNotebook}) and (max-width: ${m.desktop}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
        margin-top: 5%; 
    }



`,kE=C.span`
  font-size: ${({theme:e})=>e.fonts.medium}px;
  color: ${({theme:e})=>e.colors.text.content};
  text-align: center;
  margin: 10px;

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,CE=C.div`
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
`,EE=C.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,AE=C.img`
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

  @media screen and (max-width: ${m.largeMobile}) {
    width: 150px;
    /* height: 120px; */
  }
  @media screen and (max-width: ${m.mobile}) {
    width: 120px;
    /* height: 120px; */
  }
  @media screen and (min-width: ${m.desktop}) {
    width: 180px;
  }
  @media screen and (min-width: ${m.largeDesktop}) {
    width: 240px;
    /* height: 210px; */
  }
  @media screen and (min-width: ${m.extraLargeDesktop}) {
    width: 300px;
    /* height: 300px; */
  }
  @media screen and (max-width: ${m.notebook}) {
    width: 120px;
  }
`,PE=({image:e,altText:t})=>x(EE,{children:x(AE,{src:e,alt:t})}),Vc="/Nanofab-Project/assets/cbpf-812298b6.jpg",Wc="/Nanofab-Project/assets/faperj-aefe040c.svg",Gc="/Nanofab-Project/assets/finep-072bfec0.svg",Uh="/Nanofab-Project/assets/logoUFF-bce55271.png",Bh="/Nanofab-Project/assets/ime-85233a07.jpg",Hh="/Nanofab-Project/assets/pucrj-1b28efc4.png",Vh="/Nanofab-Project/assets/UFRJ-ae0dd01b.jpg",Wh="/Nanofab-Project/assets/cefet-fb822b95.png",Gh="/Nanofab-Project/assets/cnpq-866ab360.png",Jh="/Nanofab-Project/assets/capes-eb011932.png",qh="/Nanofab-Project/assets/SerraJr-fd37bf50.svg",Qh="/Nanofab-Project/assets/senai-dbac4d57.png",RE=({})=>{const e=[{image:Jh,altText:"CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior"},{image:Vc,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Qh,altText:"SENAI - Serviço Nacional de Aprendizagem Industrial"},{image:Wc,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Gc,altText:"FINEP - Agência Brasileira de Inovação"},{image:Uh,altText:"UFF - Universidade Federal Fluminense"},{image:Bh,altText:"IME - Instituto Militar de Engenharia"},{image:Vh,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:Hh,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Wh,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:qh,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Gh,altText:"CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico"},{image:Jh,altText:"CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior"},{image:Vc,altText:"Centro Brasileiro de Pesquisas Físicas - CBPF"},{image:Qh,altText:"SENAI - Serviço Nacional de Aprendizagem Industrial"},{image:Wc,altText:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro"},{image:Gc,altText:"FINEP - Agência Brasileira de Inovação"},{image:Uh,altText:"UFF - Universidade Federal Fluminense"},{image:Bh,altText:"IME - Instituto Militar de Engenharia"},{image:Vh,altText:"UFRJ - Universidade Federal do Rio de Janeiro"},{image:Hh,altText:"PUC - Pontifícia Universidade Católica do Rio de Janeiro "},{image:Wh,altText:"CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca"},{image:qh,altText:"Serra Jr. - Serra Júnior Engenharia"},{image:Gh,altText:"CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico"}];return N(bE,{children:[x(kE,{children:"Parceiros"}),x(CE,{children:e.map(t=>x(PE,{image:t.image,altText:t.altText},e.indexOf(t)))})]})},OE=C.div`
  width: 100%;
  /*height: 300px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  margin-top: 5%;
  margin-bottom: 5%;
  align-self: center;

  /* @media screen and (max-width: ${m.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 19%; */
  @media screen and (max-width: ${m.mobile}) {
    margin-top: 10%;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media screen and (min-width: 720px) and (max-width: 770px) {
  }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${m.largeNotebook}) and (max-width: ${m.desktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${m.desktop}) and (max-width: ${m.largeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    max-width: 2500px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    max-width: 3000px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`,$E=C.div`
  width: 70%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(217, 217, 217, 0.9);
  border-radius: 150px;
  justify-content: space-around;

  @media screen and (max-width: ${m.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 20%; */
    padding-top: 5%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4%;
    padding-bottom: 15%;
    border-radius: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    border-radius: 60px;
    padding: 5%;
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    border-radius: 70px;
  }

  @media screen and (min-width: ${m.largeNotebook}) and (max-width: ${m.desktop}) {
  }

  @media screen and (min-width: ${m.desktop}) and (max-width: ${m.largeDesktop}) {
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    border-radius: 100px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {
    border-radius: 200px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    border-radius: 300px;
    width: 80%;
  }
`,TE=C.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${m.mobile}) {
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    margin-bottom: 5%;
  }
`,ME=C.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${m.mobile}) {
    width: 95%;
    padding-bottom: 20%;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    width: 95%;
  }

  @media screen and (min-width: ${m.tablet}) and (max-width: ${m.notebook}) {
    width: 100%;
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    width: 80%;
  }
`,LE=C.span`
  font-weight: bold;
  color: #ae0806;
  text-align: center;
  font-size: 30px;
  margin-bottom: 3%;

  @media screen and (max-width: ${m.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    font-size: 23px;
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${m.notebook}) and (max-width: ${m.largeNotebook}) {
    font-size: 23px;
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    font-size: 40px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge*1.5}px;
  }
`,FE=C.span`
  color: black;
  text-align: center;
  font-size: 18px;
  width: 80%;

  @media screen and (max-width: ${m.mobile}) {
    font-size: 16px;
    width: 100%;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {
    width: 100%;
    font-size: 20px;
  }

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    font-size: 24px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.large}px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    font-size: ${({theme:e})=>e.fonts.extralarge}px;
  }
`,NE=C.img`
  width: 150px;
  height: 150px;
  border: 1px solid #ae0806;
  border-radius: 150px;
  padding: 20%;
  object-fit: scale-down;
  overflow: visible;
  background-color: white;

  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  @media screen and (min-width: ${m.extraLargeDesktop}) {
    width: 250px;
    height: 250px;
    border-radius: 200px;
  }
`;C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px;
    width: 200px; */
`;const IE=({image:e,title:t,paragraph:n})=>x(OE,{children:N($E,{children:[x(TE,{children:x(NE,{src:e,alt:t})}),N(ME,{children:[x(LE,{children:t}),x(FE,{children:n})]})]})}),DE="/Nanofab-Project/assets/handshake-903e6074.png",_E=({})=>{const e=[{image:Vc,title:"Centro Brasileiro de Pesquisas Físicas - CBPF",paragraph:"O NANOFAB desenvolve parceria científica e tecnológica com o CBPF na área de Instrumentação Científica, com o desenvolvimento de dispositivos multiplicadores e elétrons (GEM-Gas Electron Multiplier) e detectores bidimensionais de raios-x a gás."},{image:Wc,title:"Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro",paragraph:"O NANOFAB recebe apoio da FAPERJ em projetos de infraestrutura e pesquisa como o PENSA-RIO e através de projetos em colaboração com os pesquisadores"},{image:Gc,title:"FINEP - Agência Brasileira de Inovação",paragraph:"O NANOFAB participa de editais da FINEP em projetos estruturantes como o Grande Laboratórios Multiusuários e Ações Transversais."}];return N(wE,{children:[x(Wt,{}),x(M0,{title:"Parcerias",image:DE}),x(SE,{children:e.map(t=>x(IE,{image:t.image,title:t.title,paragraph:t.paragraph},e.indexOf(t)))}),x(RE,{}),x(Gt,{})]})},zE=C.div`
  width: 100%;
`,jE=C.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,UE=C.span`
  font-size: ${({theme:e})=>e.fonts.large}px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.highlight};
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.auxiliary.error.dark};
  border-radius: 20px;
`,BE=({})=>N(zE,{children:[x(Wt,{}),x(jE,{children:x(UE,{children:"Aconteceu um problema, tente novamente mais tarde"})}),x(Gt,{})]}),HE=C.div`
`,VE=C.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;C.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const WE=C.div`
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

  @media screen and (max-width: ${m.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {    
    width: 100%;
  }
`,GE=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,JE=C.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,Xh=C.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,Yh=C.input`
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
`,Kh=C.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,qE=C.button`
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
`,QE=C.div`
  display: flex;
  flex-direction: column;
  justify-content: space-beetween;
  margin-bottom: 20px;
  padding-left: 20px;
  width: 60%;
`,Zh=C.a`
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
`,XE=({formLogin:e,setFormLogin:t})=>N(WE,{children:[x(JE,{children:"Entrar"}),N(GE,{children:[N(Kh,{children:[x(Xh,{children:"Email ou Nome de Usuário:"}),x(Yh,{placeholder:"Digite seu Email",onChange:n=>t({...e,email:n.target.value})})]}),N(Kh,{children:[x(Xh,{children:"Senha:"}),x(Yh,{type:"password",placeholder:"Digite sua senha",onChange:n=>t({...e,senha:n.target.value})})]}),N(QE,{children:[x(Zh,{href:"/Nanofab-Project/login/create_Account",children:"Não tem conta? Crie uma!"}),x(Zh,{href:"/Nanofab-Project/login/Redefine_Password",children:"Esqueci minha senha"})]})]}),x(qE,{onClick:()=>console.log(e),children:"Entrar"})]}),YE=({})=>{const[e,t]=E.useState({email:"",senha:""});return N(HE,{children:[x(Wt,{}),x(VE,{children:x(XE,{formLogin:e,setFormLogin:t})}),x(Gt,{})]})},KE=C.div`
`,ZE=C.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;C.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const e2=C.div`
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
`,t2=C.h1`
color: ${({theme:e})=>e.colors.text.title};
`,Zt=C.span`
    text-align: left;
    width: 50%;
    margin-bottom: 1%;
    color: ${({theme:e})=>e.colors.text.TitleSubArticles};
    font-weight: bolder;
`,Xn=C.input`
    
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
    
`,Qr=C.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,em=C.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Xr=C.div`
  width: 45%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Su=C.div`
  width: 30%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,n2=C.button`
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
`,tm=C.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
`,nm=C.select`
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
`,rm=C.div`
  width: 100%;
`,im=C.div`
  display: flex;
  justify-content: start;
  align-items: center;
`,om=C.input`
  border: 1px solid #e8e8e8;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`,am=C.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`,r2=({})=>{const[e,t]=E.useState("");E.useState("");const[n,r]=E.useState(""),[i,o]=E.useState(""),[a,l]=E.useState(""),[s,u]=E.useState("");E.useState("");const[c,d]=E.useState(""),[p,S]=E.useState(""),[w,y]=E.useState(""),[g,h]=E.useState(""),[f,v]=E.useState(Array),[b,k]=E.useState(!1);E.useEffect(()=>{console.log(f),console.log(b)},[f,b]);const A=()=>{P()},P=()=>p!==w?(alert("Suas senhas são diferentes. Tente novamente."),S(""),y(""),!1):(k(!0),!0);function $(z){(z.target.value===""||z.target.value===""||z.target.value===""||z.target.value===""||z.target.value==="")&&h("")}return N(e2,{children:[x(t2,{children:"Registrar-se"}),N(Qr,{children:[N(Xr,{children:[x(Zt,{children:"Instituição:"}),x(rm,{children:x(tm,{children:N(nm,{onChange:z=>$(z),children:[x("option",{value:""}),x("option",{value:""}),x("option",{value:""})]})})})]}),N(Xr,{children:[x(Zt,{children:"Tipo:"}),N(im,{children:[x(om,{type:"radio",id:"publica",name:"institutionType",value:"Publica"}),x(am,{children:"Pública"})]}),N(im,{children:[x(om,{type:"radio",id:"privada",name:"institutionType",value:"Privada"}),x(am,{children:"Privada"})]})]})]}),N(Qr,{children:[N(Xr,{children:[x(Zt,{children:"Departamento:"}),x(Xn,{placeholder:"Entre com a departamento",onChange:z=>{r(z.target.value)}})]}),N(Xr,{children:[x(Zt,{children:"Outros:"}),x(Xn,{placeholder:"Outros",onChange:z=>{o(z.target.value)}})]})]}),x(Qr,{children:N(em,{children:[x(Zt,{children:"Nome:"}),x(Xn,{placeholder:"Digite seu nome",onChange:z=>{t(z.target.value)}})]})}),N(Qr,{children:[N(Su,{children:[x(Zt,{children:"Telefone:"}),x(Xn,{placeholder:"Digite seu telefone",onChange:z=>{l(z.target.value)}})]}),N(Su,{children:[x(Zt,{children:"Ramal:"}),x(Xn,{placeholder:"Digite seu ramal",onChange:z=>{u(z.target.value)}})]}),N(Su,{children:[x(Zt,{children:"Função:"}),x(rm,{children:x(tm,{children:N(nm,{onChange:z=>$(z),children:[x("option",{value:""}),x("option",{value:""}),x("option",{value:""})]})})})]})]}),x(Qr,{children:N(em,{children:[x(Zt,{children:"Usuário:"}),x(Xn,{placeholder:"Digite seu usuário",onChange:z=>{d(z.target.value)}})]})}),N(Qr,{children:[N(Xr,{children:[x(Zt,{children:"Senha:"}),x(Xn,{type:"password",placeholder:"Entre com sua senha aqui",onChange:z=>{S(z.target.value)}})]}),N(Xr,{children:[x(Zt,{children:"Confirme sua senha:"}),x(Xn,{type:"password",placeholder:"Confirme sua senha aqui",onChange:z=>{y(z.target.value)}})]})]}),x(n2,{onClick:A,children:"Registrar"})]})},i2=({})=>N(KE,{children:[x(Wt,{}),x(ZE,{children:x(r2,{})}),x(Gt,{})]}),o2=C.div`
`,a2=C.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
`;C.div`
    background-color: grey;
    border: 1px solid #D9D9D9;
    width: 1px;
    height: 50vh;
    border-radius: 50px;
`;const l2=C.div`
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
`,s2=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`,u2=C.h1`
  color: ${({theme:e})=>e.colors.text.title};
`,Ma=C.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({theme:e})=>e.colors.text.TitleSubArticles};
  font-weight: bolder;
`,La=C.input`
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
`,Fa=C.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`,c2=C.button`
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
`;C.div`
  display: flex;
  flex-direction: row;
  justify-content: space-beetween;
`;C.a`
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
`;const d2=({})=>N(l2,{children:[x(u2,{children:"Redefinição de Senha"}),N(s2,{children:[N(Fa,{children:[x(Ma,{children:"Usuário:"}),x(La,{placeholder:"Digite seu usuário"})]}),N(Fa,{children:[x(Ma,{children:"Email:"}),x(La,{placeholder:"Digite seu email"})]}),N(Fa,{children:[x(Ma,{children:"Nova Senha:"}),x(La,{type:"password",placeholder:"Digite sua senha"})]}),N(Fa,{children:[x(Ma,{children:"Confime a Nova Senha:"}),x(La,{type:"password",placeholder:"Digite sua senha"})]})]}),x(c2,{children:"Redefinir"})]}),f2=({})=>N(o2,{children:[x(Wt,{}),x(a2,{children:x(d2,{})}),x(Gt,{})]}),p2=C.div`
  
`,h2=({})=>N(p2,{children:[x(Wt,{}),x(Gt,{})]}),m2=C.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,g2=C.div`
    width: 70%;
    margin-top: 3%;
    border-radius: 70px;
    min-height: 50vh;
    margin-bottom: 3%;

    background-color: rgb(217, 217, 217, 0.9);
`,Na=C.section`
    /* min-height: 50vh; */
    width: 100%;
`,Ia=C.img`
    width: 100%;
    border-radius: 70px;
`;function Jt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function We(e){return We=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},We(e)}function v2(e,t){if(We(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(We(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function L0(e){var t=v2(e,"string");return We(t)==="symbol"?t:String(t)}function lm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L0(r.key),r)}}function qt(e,t,n){return t&&lm(e.prototype,t),n&&lm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jc(e,t){return Jc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Jc(e,t)}function Vr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Jc(e,t)}function Dl(e){return Dl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Dl(e)}function y2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ue(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x2(e,t){if(t&&(We(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ue(e)}function Wr(e){var t=y2();return function(){var r=Dl(e),i;if(t){var o=Dl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return x2(this,i)}}var qc={},w2={get exports(){return qc},set exports(e){qc=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&r.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(w2);const Mn=qc;function cn(){return cn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cn.apply(this,arguments)}function Qc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[];return Z.Children.forEach(e,function(r){r==null&&!t.keepEmpty||(Array.isArray(r)?n=n.concat(Qc(r)):Li.isFragment(r)&&r.props?n=n.concat(Qc(r.props.children,t)):n.push(r))}),n}var Xc={},S2=function(t){};function b2(e,t){}function k2(e,t){}function C2(){Xc={}}function F0(e,t,n){!t&&!Xc[n]&&(e(!1,n),Xc[n]=!0)}function Ut(e,t){F0(b2,e,t)}function E2(e,t){F0(k2,e,t)}Ut.preMessage=S2;Ut.resetWarned=C2;Ut.noteOnce=E2;function ee(e,t,n){return t=L0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sm(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function N0(e,t,n){var r=E.useRef({});return(!("value"in r.current)||n(r.current.condition,t))&&(r.current.value=e(),r.current.condition=t),r.current.value}var I0=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),Yc=typeof window<"u"&&typeof document<"u"&&window.document===document,_l=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),A2=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(_l):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),P2=2;function R2(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&l()}function a(){A2(o)}function l(){var s=Date.now();if(n){if(s-i<P2)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=s}return l}var O2=20,$2=["top","right","bottom","left","width","height","size","weight"],T2=typeof MutationObserver<"u",M2=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=R2(this.refresh.bind(this),O2)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Yc||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),T2?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Yc||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=$2.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),D0=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Di=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||_l},_0=ws(0,0,0,0);function zl(e){return parseFloat(e)||0}function um(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+zl(o)},0)}function L2(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=zl(a)}return n}function F2(e){var t=e.getBBox();return ws(0,0,t.width,t.height)}function N2(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return _0;var r=Di(e).getComputedStyle(e),i=L2(r),o=i.left+i.right,a=i.top+i.bottom,l=zl(r.width),s=zl(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+o)!==t&&(l-=um(r,"left","right")+o),Math.round(s+a)!==n&&(s-=um(r,"top","bottom")+a)),!D2(e)){var u=Math.round(l+o)-t,c=Math.round(s+a)-n;Math.abs(u)!==1&&(l-=u),Math.abs(c)!==1&&(s-=c)}return ws(i.left,i.top,l,s)}var I2=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Di(e).SVGGraphicsElement}:function(e){return e instanceof Di(e).SVGElement&&typeof e.getBBox=="function"}}();function D2(e){return e===Di(e).document.documentElement}function _2(e){return Yc?I2(e)?F2(e):N2(e):_0}function z2(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return D0(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function ws(e,t,n,r){return{x:e,y:t,width:n,height:r}}var j2=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ws(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=_2(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),U2=function(){function e(t,n){var r=z2(n);D0(this,{target:t,contentRect:r})}return e}(),B2=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new I0,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Di(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new j2(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Di(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new U2(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),z0=typeof WeakMap<"u"?new WeakMap:new I0,j0=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=M2.getInstance(),r=new B2(t,n,this);z0.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){j0.prototype[e]=function(){var t;return(t=z0.get(this))[e].apply(t,arguments)}});var H2=function(){return typeof _l.ResizeObserver<"u"?_l.ResizeObserver:j0}();function Kc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V2(e){if(Array.isArray(e))return Kc(e)}function U0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tf(e,t){if(e){if(typeof e=="string")return Kc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kc(e,t)}}function W2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(e){return V2(e)||U0(e)||Tf(e)||W2()}function Mf(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}function G2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ss(e,t){if(e==null)return{};var n=G2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function J2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function i(o,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=r.has(o);if(Ut(!s,"Warning: There may be circular references"),s)return!1;if(o===a)return!0;if(n&&l>1)return!1;r.add(o);var u=l+1;if(Array.isArray(o)){if(!Array.isArray(a)||o.length!==a.length)return!1;for(var c=0;c<o.length;c++)if(!i(o[c],a[c],u))return!1;return!0}if(o&&a&&We(o)==="object"&&We(a)==="object"){var d=Object.keys(o);return d.length!==Object.keys(a).length?!1:d.every(function(p){return i(o[p],a[p],u)})}return!1}return i(e,t)}var q2=function(){function e(t){Jt(this,e),ee(this,"instanceId",void 0),ee(this,"cache",new Map),this.instanceId=t}return qt(e,[{key:"get",value:function(n){return this.cache.get(n.join("%"))||null}},{key:"update",value:function(n,r){var i=n.join("%"),o=this.cache.get(i),a=r(o);a===null?this.cache.delete(i):this.cache.set(i,a)}}]),e}(),Zc="data-token-hash",Ci="data-css-hash",gi="__cssinjs_instance__";function Q2(){var e=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){var t=document.body.querySelectorAll("style[".concat(Ci,"]"))||[],n=document.head.firstChild;Array.from(t).forEach(function(i){i[gi]=i[gi]||e,i[gi]===e&&document.head.insertBefore(i,n)});var r={};Array.from(document.querySelectorAll("style[".concat(Ci,"]"))).forEach(function(i){var o=i.getAttribute(Ci);if(r[o]){if(i[gi]===e){var a;(a=i.parentNode)===null||a===void 0||a.removeChild(i)}}else r[o]=!0})}return new q2(e)}var X2=E.createContext({hashPriority:"low",cache:Q2(),defaultCache:!0});const Lf=X2;function bs(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Y2(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var cm="data-rc-order",K2="rc-util-key",ed=new Map;function B0(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mark;return t?t.startsWith("data-")?t:"data-".concat(t):K2}function ks(e){if(e.attachTo)return e.attachTo;var t=document.querySelector("head");return t||document.body}function Z2(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function H0(e){return Array.from((ed.get(e)||e).children).filter(function(t){return t.tagName==="STYLE"})}function V0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!bs())return null;var n=t.csp,r=t.prepend,i=document.createElement("style");i.setAttribute(cm,Z2(r)),n!=null&&n.nonce&&(i.nonce=n==null?void 0:n.nonce),i.innerHTML=e;var o=ks(t),a=o.firstChild;if(r){if(r==="queue"){var l=H0(o).filter(function(s){return["prepend","prependQueue"].includes(s.getAttribute(cm))});if(l.length)return o.insertBefore(i,l[l.length-1].nextSibling),i}o.insertBefore(i,a)}else o.appendChild(i);return i}function W0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=ks(t);return H0(n).find(function(r){return r.getAttribute(B0(t))===e})}function G0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=W0(e,t);if(n){var r=ks(t);r.removeChild(n)}}function eA(e,t){var n=ed.get(e);if(!n||!Y2(document,n)){var r=V0("",t),i=r.parentNode;ed.set(e,i),e.removeChild(r)}}function jl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=ks(n);eA(r,n);var i=W0(t,n);if(i){var o,a;if((o=n.csp)!==null&&o!==void 0&&o.nonce&&i.nonce!==((a=n.csp)===null||a===void 0?void 0:a.nonce)){var l;i.nonce=(l=n.csp)===null||l===void 0?void 0:l.nonce}return i.innerHTML!==e&&(i.innerHTML=e),i}var s=V0(e,n);return s.setAttribute(B0(n),t),s}function Ul(e){var t="";return Object.keys(e).forEach(function(n){var r=e[n];t+=n,r&&We(r)==="object"?t+=Ul(r):t+=r}),t}function tA(e,t){return Mf("".concat(t,"_").concat(Ul(e)))}var Eo="layer-".concat(Date.now(),"-").concat(Math.random()).replace(/\./g,""),J0="903px";function nA(e,t){if(bs()){var n;jl(e,Eo);var r=document.createElement("div");r.style.position="fixed",r.style.left="0",r.style.top="0",t==null||t(r),document.body.appendChild(r);var i=getComputedStyle(r).width===J0;return(n=r.parentNode)===null||n===void 0||n.removeChild(r),G0(Eo),i}return!1}var bu=void 0;function rA(){return bu===void 0&&(bu=nA("@layer ".concat(Eo," { .").concat(Eo," { width: ").concat(J0,"!important; } }"),function(e){e.className=Eo})),bu}function q0(e){if(Array.isArray(e))return e}function iA(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Q0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kt(e,t){return q0(e)||iA(e,t)||Tf(e,t)||Q0()}function X0(e,t,n,r){var i=E.useContext(Lf),o=i.cache,a=[e].concat(he(t));return E.useMemo(function(){o.update(a,function(l){var s=l||[],u=kt(s,2),c=u[0],d=c===void 0?0:c,p=u[1],S=p,w=S||n();return[d+1,w]})},[a.join("_")]),E.useEffect(function(){return function(){o.update(a,function(l){var s=l||[],u=kt(s,2),c=u[0],d=c===void 0?0:c,p=u[1],S=d-1;return S===0?(r==null||r(p,!1),null):[d-1,p]})}},a),o.get(a)[1]}var oA={},aA="css",Cr=new Map;function lA(e){Cr.set(e,(Cr.get(e)||0)+1)}function sA(e,t){if(typeof document<"u"){var n=document.querySelectorAll("style[".concat(Zc,'="').concat(e,'"]'));n.forEach(function(r){if(r[gi]===t){var i;(i=r.parentNode)===null||i===void 0||i.removeChild(r)}})}}function uA(e,t){Cr.set(e,(Cr.get(e)||0)-1);var n=Array.from(Cr.keys()),r=n.filter(function(i){var o=Cr.get(i)||0;return o<=0});r.length<n.length&&r.forEach(function(i){sA(i,t),Cr.delete(i)})}function cA(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=E.useContext(Lf),i=r.cache.instanceId,o=n.salt,a=o===void 0?"":o,l=n.override,s=l===void 0?oA:l,u=n.formatToken,c=E.useMemo(function(){return Object.assign.apply(Object,[{}].concat(he(t)))},[t]),d=E.useMemo(function(){return Ul(c)},[c]),p=E.useMemo(function(){return Ul(s)},[s]),S=X0("token",[a,e.id,d,p],function(){var w=e.getDerivativeToken(c),y=L(L({},w),s);u&&(y=u(y));var g=tA(y,a);y._tokenKey=g,lA(g);var h="".concat(aA,"-").concat(Mf(g));return y._hashId=h,[y,h]},function(w){uA(w[0]._tokenKey,i)});return S}var Y0="comm",K0="rule",Z0="decl",dA="@import",fA="@keyframes",pA="@layer",hA=Math.abs,Ff=String.fromCharCode;function ey(e){return e.trim()}function rl(e,t,n){return e.replace(t,n)}function mA(e,t){return e.indexOf(t)}function Qo(e,t){return e.charCodeAt(t)|0}function Xo(e,t,n){return e.slice(t,n)}function er(e){return e.length}function ty(e){return e.length}function Da(e,t){return t.push(e),e}var Cs=1,_i=1,ny=0,Vt=0,He=0,Wi="";function Nf(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cs,column:_i,length:a,return:""}}function gA(){return He}function vA(){return He=Vt>0?Qo(Wi,--Vt):0,_i--,He===10&&(_i=1,Cs--),He}function sn(){return He=Vt<ny?Qo(Wi,Vt++):0,_i++,He===10&&(_i=1,Cs++),He}function Fr(){return Qo(Wi,Vt)}function il(){return Vt}function Es(e,t){return Xo(Wi,e,t)}function td(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yA(e){return Cs=_i=1,ny=er(Wi=e),Vt=0,[]}function xA(e){return Wi="",e}function ku(e){return ey(Es(Vt-1,nd(e===91?e+2:e===40?e+1:e)))}function wA(e){for(;(He=Fr())&&He<33;)sn();return td(e)>2||td(He)>3?"":" "}function SA(e,t){for(;--t&&sn()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Es(e,il()+(t<6&&Fr()==32&&sn()==32))}function nd(e){for(;sn();)switch(He){case e:return Vt;case 34:case 39:e!==34&&e!==39&&nd(He);break;case 40:e===41&&nd(e);break;case 92:sn();break}return Vt}function bA(e,t){for(;sn()&&e+He!==47+10;)if(e+He===42+42&&Fr()===47)break;return"/*"+Es(t,Vt-1)+"*"+Ff(e===47?e:sn())}function kA(e){for(;!td(Fr());)sn();return Es(e,Vt)}function CA(e){return xA(ol("",null,null,null,[""],e=yA(e),0,[0],e))}function ol(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,p=0,S=0,w=0,y=1,g=1,h=1,f=0,v="",b=i,k=o,A=r,P=v;g;)switch(w=f,f=sn()){case 40:if(w!=108&&Qo(P,d-1)==58){mA(P+=rl(ku(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:P+=ku(f);break;case 9:case 10:case 13:case 32:P+=wA(w);break;case 92:P+=SA(il()-1,7);continue;case 47:switch(Fr()){case 42:case 47:Da(EA(bA(sn(),il()),t,n),s);break;default:P+="/"}break;case 123*y:l[u++]=er(P)*h;case 125*y:case 59:case 0:switch(f){case 0:case 125:g=0;case 59+c:h==-1&&(P=rl(P,/\f/g,"")),S>0&&er(P)-d&&Da(S>32?fm(P+";",r,n,d-1):fm(rl(P," ","")+";",r,n,d-2),s);break;case 59:P+=";";default:if(Da(A=dm(P,t,n,u,c,i,l,v,b=[],k=[],d),o),f===123)if(c===0)ol(P,t,A,A,b,o,d,l,k);else switch(p===99&&Qo(P,3)===110?100:p){case 100:case 108:case 109:case 115:ol(e,A,A,r&&Da(dm(e,A,A,0,0,i,l,v,i,b=[],d),k),i,k,d,l,r?b:k);break;default:ol(P,A,A,A,[""],k,0,l,k)}}u=c=S=0,y=h=1,v=P="",d=a;break;case 58:d=1+er(P),S=w;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&vA()==125)continue}switch(P+=Ff(f),f*y){case 38:h=c>0?1:(P+="\f",-1);break;case 44:l[u++]=(er(P)-1)*h,h=1;break;case 64:Fr()===45&&(P+=ku(sn())),p=Fr(),c=d=er(v=P+=kA(il())),f++;break;case 45:w===45&&er(P)==2&&(y=0)}}return o}function dm(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,p=i===0?o:[""],S=ty(p),w=0,y=0,g=0;w<r;++w)for(var h=0,f=Xo(e,d+1,d=hA(y=a[w])),v=e;h<S;++h)(v=ey(y>0?p[h]+" "+f:rl(f,/&\f/g,p[h])))&&(s[g++]=v);return Nf(e,t,n,i===0?K0:l,s,u,c)}function EA(e,t,n){return Nf(e,t,n,Y0,Ff(gA()),Xo(e,2,-2),0)}function fm(e,t,n,r){return Nf(e,t,n,Z0,Xo(e,0,r),Xo(e,r+1,-1),r)}function rd(e,t){for(var n="",r=ty(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function AA(e,t,n,r){switch(e.type){case pA:if(e.children.length)break;case dA:case Z0:return e.return=e.return||e.value;case Y0:return"";case fA:return e.return=e.value+"{"+rd(e.children,r)+"}";case K0:e.value=e.props.join(",")}return er(n=rd(e.children,r))?e.return=e.value+"{"+n+"}":""}var pm=bs(),PA="_skip_check_",ry="_multi_value_";function hm(e){var t=rd(CA(e),AA);return t.replace(/\{%%%\:[^;];}/g,";")}function RA(e){return We(e)==="object"&&e&&(PA in e||ry in e)}function OA(e,t,n){if(!t)return e;var r=".".concat(t),i=n==="low"?":where(".concat(r,")"):r,o=e.split(",").map(function(a){var l,s=a.trim().split(/\s+/),u=s[0]||"",c=((l=u.match(/^\w+/))===null||l===void 0?void 0:l[0])||"";return u="".concat(c).concat(i).concat(u.slice(c.length)),[u].concat(he(s.slice(1))).join(" ")});return o.join(",")}var $A=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},i=r.root,o=r.injectHash,a=r.parentSelectors,l=n.hashId,s=n.layer;n.path;var u=n.hashPriority,c=n.transformers,d=c===void 0?[]:c;n.linters;var p="",S={};function w(v){var b=v.getName(l);if(!S[b]){var k=e(v.style,n,{root:!1,parentSelectors:a}),A=kt(k,1),P=A[0];S[b]="@keyframes ".concat(v.getName(l)).concat(P)}}function y(v){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return v.forEach(function(k){Array.isArray(k)?y(k,b):k&&b.push(k)}),b}var g=y(Array.isArray(t)?t:[t]);if(g.forEach(function(v){var b=typeof v=="string"&&!i?{}:v;if(typeof b=="string")p+="".concat(b,`
`);else if(b._keyframe)w(b);else{var k=d.reduce(function(A,P){var $;return(P==null||($=P.visit)===null||$===void 0?void 0:$.call(P,A))||A},b);Object.keys(k).forEach(function(A){var P=k[A];if(We(P)==="object"&&P&&(A!=="animationName"||!P._keyframe)&&!RA(P)){var $=!1,z=A.trim(),I=!1;(i||o)&&l?z.startsWith("@")?$=!0:z=OA(A,l,u):i&&!l&&(z==="&"||z==="")&&(z="",I=!0);var Y=e(P,n,{root:I,injectHash:$,parentSelectors:[].concat(he(a),[z])}),O=kt(Y,2),R=O[0],T=O[1];S=L(L({},S),T),p+="".concat(z).concat(R)}else{let _=function(X,W){var ae=X.replace(/[A-Z]/g,function(V){return"-".concat(V.toLowerCase())}),j=W;!Kv[X]&&typeof j=="number"&&j!==0&&(j="".concat(j,"px")),X==="animationName"&&W!==null&&W!==void 0&&W._keyframe&&(w(W),j=W.getName(l)),p+="".concat(ae,":").concat(j,";")};var q=_,U,Q=(U=P==null?void 0:P.value)!==null&&U!==void 0?U:P;We(P)==="object"&&P!==null&&P!==void 0&&P[ry]&&Array.isArray(Q)?Q.forEach(function(X){_(A,X)}):_(A,Q)}})}}),!i)p="{".concat(p,"}");else if(s&&rA()){var h=s.split(","),f=h[h.length-1].trim();p="@layer ".concat(f," {").concat(p,"}"),h.length>1&&(p="@layer ".concat(s,"{%%%:%}").concat(p))}return[p,S]};function TA(e,t){return Mf("".concat(e.join("%")).concat(t))}function MA(){return null}function id(e,t){var n=e.token,r=e.path,i=e.hashId,o=e.layer,a=e.nonce,l=E.useContext(Lf),s=l.autoClear;l.mock;var u=l.defaultCache,c=l.hashPriority,d=l.container,p=l.ssrInline,S=l.transformers,w=l.linters,y=l.cache,g=n._tokenKey,h=[g].concat(he(r)),f=pm,v=X0("style",h,function(){var $=t(),z=$A($,{hashId:i,hashPriority:c,layer:o,path:r.join("-"),transformers:S,linters:w}),I=kt(z,2),Y=I[0],O=I[1],R=hm(Y),T=TA(h,R);if(f){var U={mark:Ci,prepend:"queue",attachTo:d},Q=typeof a=="function"?a():a;Q&&(U.csp={nonce:Q});var q=jl(R,T,U);q[gi]=y.instanceId,q.setAttribute(Zc,g),Object.keys(O).forEach(function(_){jl(hm(O[_]),"_effect-".concat(_),U)})}return[R,g,T]},function($,z){var I=kt($,3),Y=I[2];(z||s)&&pm&&G0(Y,{mark:Ci})}),b=kt(v,3),k=b[0],A=b[1],P=b[2];return function($){var z;if(!p||f||!u)z=E.createElement(MA,null);else{var I;z=E.createElement("style",cn({},(I={},ee(I,Zc,A),ee(I,Ci,P),I),{dangerouslySetInnerHTML:{__html:k}}))}return E.createElement(E.Fragment,null,z,$)}}function LA(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var If=function(){function e(){Jt(this,e),ee(this,"cache",void 0),ee(this,"keys",void 0),ee(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return qt(e,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(n){var r,i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a={map:this.cache};return n.forEach(function(l){if(!a)a=void 0;else{var s,u;a=(s=a)===null||s===void 0||(u=s.map)===null||u===void 0?void 0:u.get(l)}}),(r=a)!==null&&r!==void 0&&r.value&&o&&(a.value[1]=this.cacheCallTimes++),(i=a)===null||i===void 0?void 0:i.value}},{key:"get",value:function(n){var r;return(r=this.internalGet(n,!0))===null||r===void 0?void 0:r[0]}},{key:"has",value:function(n){return!!this.internalGet(n)}},{key:"set",value:function(n,r){var i=this;if(!this.has(n)){if(this.size()+1>e.MAX_CACHE_SIZE+e.MAX_CACHE_OFFSET){var o=this.keys.reduce(function(u,c){var d=kt(u,2),p=d[1];return i.internalGet(c)[1]<p?[c,i.internalGet(c)[1]]:u},[this.keys[0],this.cacheCallTimes]),a=kt(o,1),l=a[0];this.delete(l)}this.keys.push(n)}var s=this.cache;n.forEach(function(u,c){if(c===n.length-1)s.set(u,{value:[r,i.cacheCallTimes++]});else{var d=s.get(u);d?d.map||(d.map=new Map):s.set(u,{map:new Map}),s=s.get(u).map}})}},{key:"deleteByPath",value:function(n,r){var i=n.get(r[0]);if(r.length===1){var o;return i.map?n.set(r[0],{map:i.map}):n.delete(r[0]),(o=i.value)===null||o===void 0?void 0:o[0]}var a=this.deleteByPath(i.map,r.slice(1));return(!i.map||i.map.size===0)&&!i.value&&n.delete(r[0]),a}},{key:"delete",value:function(n){if(this.has(n))return this.keys=this.keys.filter(function(r){return!LA(r,n)}),this.deleteByPath(this.cache,n)}}]),e}();ee(If,"MAX_CACHE_SIZE",20);ee(If,"MAX_CACHE_OFFSET",5);var mm=0,FA=function(){function e(t){Jt(this,e),ee(this,"derivatives",void 0),ee(this,"id",void 0),this.derivatives=Array.isArray(t)?t:[t],this.id=mm,t.length===0&&(t.length>0,void 0),mm+=1}return qt(e,[{key:"getDerivativeToken",value:function(n){return this.derivatives.reduce(function(r,i){return i(n,r)},void 0)}}]),e}(),Cu=new If;function iy(e){var t=Array.isArray(e)?e:[e];return Cu.has(t)||Cu.set(t,new FA(t)),Cu.get(t)}function Yr(e){return e.notSplit=!0,e}Yr(["borderTop","borderBottom"]),Yr(["borderTop"]),Yr(["borderBottom"]),Yr(["borderLeft","borderRight"]),Yr(["borderLeft"]),Yr(["borderRight"]);var NA=E.createContext({});const IA=NA;var Or="RC_FORM_INTERNAL_HOOKS",Ae=function(){Ut(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},zi=E.createContext({getFieldValue:Ae,getFieldsValue:Ae,getFieldError:Ae,getFieldWarning:Ae,getFieldsError:Ae,isFieldsTouched:Ae,isFieldTouched:Ae,isFieldValidating:Ae,isFieldsValidating:Ae,resetFields:Ae,setFields:Ae,setFieldValue:Ae,setFieldsValue:Ae,validateFields:Ae,submit:Ae,getInternalHooks:function(){return Ae(),{dispatch:Ae,initEntityValue:Ae,registerField:Ae,useSubscribe:Ae,setInitialValues:Ae,destroyForm:Ae,setCallbacks:Ae,registerWatch:Ae,getFields:Ae,setValidateMessages:Ae,setPreserve:Ae,getInitialValue:Ae}}}),od=E.createContext(null);function ad(e){return e==null?[]:Array.isArray(e)?e:[e]}function DA(e){return e&&!!e._init}function _n(){_n=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(O,R,T){O[R]=T.value},i=typeof Symbol=="function"?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(O,R,T){return Object.defineProperty(O,R,{value:T,enumerable:!0,configurable:!0,writable:!0}),O[R]}try{s({},"")}catch{s=function(T,U,Q){return T[U]=Q}}function u(O,R,T,U){var Q=R&&R.prototype instanceof p?R:p,q=Object.create(Q.prototype),_=new z(U||[]);return r(q,"_invoke",{value:k(O,T,_)}),q}function c(O,R,T){try{return{type:"normal",arg:O.call(R,T)}}catch(U){return{type:"throw",arg:U}}}e.wrap=u;var d={};function p(){}function S(){}function w(){}var y={};s(y,o,function(){return this});var g=Object.getPrototypeOf,h=g&&g(g(I([])));h&&h!==t&&n.call(h,o)&&(y=h);var f=w.prototype=p.prototype=Object.create(y);function v(O){["next","throw","return"].forEach(function(R){s(O,R,function(T){return this._invoke(R,T)})})}function b(O,R){function T(Q,q,_,X){var W=c(O[Q],O,q);if(W.type!=="throw"){var ae=W.arg,j=ae.value;return j&&We(j)=="object"&&n.call(j,"__await")?R.resolve(j.__await).then(function(V){T("next",V,_,X)},function(V){T("throw",V,_,X)}):R.resolve(j).then(function(V){ae.value=V,_(ae)},function(V){return T("throw",V,_,X)})}X(W.arg)}var U;r(this,"_invoke",{value:function(q,_){function X(){return new R(function(W,ae){T(q,_,W,ae)})}return U=U?U.then(X,X):X()}})}function k(O,R,T){var U="suspendedStart";return function(Q,q){if(U==="executing")throw new Error("Generator is already running");if(U==="completed"){if(Q==="throw")throw q;return Y()}for(T.method=Q,T.arg=q;;){var _=T.delegate;if(_){var X=A(_,T);if(X){if(X===d)continue;return X}}if(T.method==="next")T.sent=T._sent=T.arg;else if(T.method==="throw"){if(U==="suspendedStart")throw U="completed",T.arg;T.dispatchException(T.arg)}else T.method==="return"&&T.abrupt("return",T.arg);U="executing";var W=c(O,R,T);if(W.type==="normal"){if(U=T.done?"completed":"suspendedYield",W.arg===d)continue;return{value:W.arg,done:T.done}}W.type==="throw"&&(U="completed",T.method="throw",T.arg=W.arg)}}}function A(O,R){var T=R.method,U=O.iterator[T];if(U===void 0)return R.delegate=null,T==="throw"&&O.iterator.return&&(R.method="return",R.arg=void 0,A(O,R),R.method==="throw")||T!=="return"&&(R.method="throw",R.arg=new TypeError("The iterator does not provide a '"+T+"' method")),d;var Q=c(U,O.iterator,R.arg);if(Q.type==="throw")return R.method="throw",R.arg=Q.arg,R.delegate=null,d;var q=Q.arg;return q?q.done?(R[O.resultName]=q.value,R.next=O.nextLoc,R.method!=="return"&&(R.method="next",R.arg=void 0),R.delegate=null,d):q:(R.method="throw",R.arg=new TypeError("iterator result is not an object"),R.delegate=null,d)}function P(O){var R={tryLoc:O[0]};1 in O&&(R.catchLoc=O[1]),2 in O&&(R.finallyLoc=O[2],R.afterLoc=O[3]),this.tryEntries.push(R)}function $(O){var R=O.completion||{};R.type="normal",delete R.arg,O.completion=R}function z(O){this.tryEntries=[{tryLoc:"root"}],O.forEach(P,this),this.reset(!0)}function I(O){if(O){var R=O[o];if(R)return R.call(O);if(typeof O.next=="function")return O;if(!isNaN(O.length)){var T=-1,U=function Q(){for(;++T<O.length;)if(n.call(O,T))return Q.value=O[T],Q.done=!1,Q;return Q.value=void 0,Q.done=!0,Q};return U.next=U}}return{next:Y}}function Y(){return{value:void 0,done:!0}}return S.prototype=w,r(f,"constructor",{value:w,configurable:!0}),r(w,"constructor",{value:S,configurable:!0}),S.displayName=s(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(O){var R=typeof O=="function"&&O.constructor;return!!R&&(R===S||(R.displayName||R.name)==="GeneratorFunction")},e.mark=function(O){return Object.setPrototypeOf?Object.setPrototypeOf(O,w):(O.__proto__=w,s(O,l,"GeneratorFunction")),O.prototype=Object.create(f),O},e.awrap=function(O){return{__await:O}},v(b.prototype),s(b.prototype,a,function(){return this}),e.AsyncIterator=b,e.async=function(O,R,T,U,Q){Q===void 0&&(Q=Promise);var q=new b(u(O,R,T,U),Q);return e.isGeneratorFunction(R)?q:q.next().then(function(_){return _.done?_.value:q.next()})},v(f),s(f,l,"Generator"),s(f,o,function(){return this}),s(f,"toString",function(){return"[object Generator]"}),e.keys=function(O){var R=Object(O),T=[];for(var U in R)T.push(U);return T.reverse(),function Q(){for(;T.length;){var q=T.pop();if(q in R)return Q.value=q,Q.done=!1,Q}return Q.done=!0,Q}},e.values=I,z.prototype={constructor:z,reset:function(R){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!R)for(var T in this)T.charAt(0)==="t"&&n.call(this,T)&&!isNaN(+T.slice(1))&&(this[T]=void 0)},stop:function(){this.done=!0;var R=this.tryEntries[0].completion;if(R.type==="throw")throw R.arg;return this.rval},dispatchException:function(R){if(this.done)throw R;var T=this;function U(ae,j){return _.type="throw",_.arg=R,T.next=ae,j&&(T.method="next",T.arg=void 0),!!j}for(var Q=this.tryEntries.length-1;Q>=0;--Q){var q=this.tryEntries[Q],_=q.completion;if(q.tryLoc==="root")return U("end");if(q.tryLoc<=this.prev){var X=n.call(q,"catchLoc"),W=n.call(q,"finallyLoc");if(X&&W){if(this.prev<q.catchLoc)return U(q.catchLoc,!0);if(this.prev<q.finallyLoc)return U(q.finallyLoc)}else if(X){if(this.prev<q.catchLoc)return U(q.catchLoc,!0)}else{if(!W)throw new Error("try statement without catch or finally");if(this.prev<q.finallyLoc)return U(q.finallyLoc)}}}},abrupt:function(R,T){for(var U=this.tryEntries.length-1;U>=0;--U){var Q=this.tryEntries[U];if(Q.tryLoc<=this.prev&&n.call(Q,"finallyLoc")&&this.prev<Q.finallyLoc){var q=Q;break}}q&&(R==="break"||R==="continue")&&q.tryLoc<=T&&T<=q.finallyLoc&&(q=null);var _=q?q.completion:{};return _.type=R,_.arg=T,q?(this.method="next",this.next=q.finallyLoc,d):this.complete(_)},complete:function(R,T){if(R.type==="throw")throw R.arg;return R.type==="break"||R.type==="continue"?this.next=R.arg:R.type==="return"?(this.rval=this.arg=R.arg,this.method="return",this.next="end"):R.type==="normal"&&T&&(this.next=T),d},finish:function(R){for(var T=this.tryEntries.length-1;T>=0;--T){var U=this.tryEntries[T];if(U.finallyLoc===R)return this.complete(U.completion,U.afterLoc),$(U),d}},catch:function(R){for(var T=this.tryEntries.length-1;T>=0;--T){var U=this.tryEntries[T];if(U.tryLoc===R){var Q=U.completion;if(Q.type==="throw"){var q=Q.arg;$(U)}return q}}throw new Error("illegal catch attempt")},delegateYield:function(R,T,U){return this.delegate={iterator:I(R),resultName:T,nextLoc:U},this.method==="next"&&(this.arg=void 0),d}},e}function gm(e,t,n,r,i,o,a){try{var l=e[o](a),s=l.value}catch(u){n(u);return}l.done?t(s):Promise.resolve(s).then(r,i)}function As(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(s){gm(o,r,i,a,l,"next",s)}function l(s){gm(o,r,i,a,l,"throw",s)}a(void 0)})}}function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$r.apply(this,arguments)}function _A(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Yo(e,t)}function ld(e){return ld=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ld(e)}function Yo(e,t){return Yo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Yo(e,t)}function zA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function al(e,t,n){return zA()?al=Reflect.construct.bind():al=function(i,o,a){var l=[null];l.push.apply(l,o);var s=Function.bind.apply(i,l),u=new s;return a&&Yo(u,a.prototype),u},al.apply(null,arguments)}function jA(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function sd(e){var t=typeof Map=="function"?new Map:void 0;return sd=function(r){if(r===null||!jA(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return al(r,arguments,ld(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Yo(i,r)},sd(e)}var UA=/%[sdj%]/g,BA=function(){};typeof process<"u"&&process.env;function ud(e){if(!e||!e.length)return null;var t={};return e.forEach(function(n){var r=n.field;t[r]=t[r]||[],t[r].push(n)}),t}function Ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=0,o=n.length;if(typeof e=="function")return e.apply(null,n);if(typeof e=="string"){var a=e.replace(UA,function(l){if(l==="%%")return"%";if(i>=o)return l;switch(l){case"%s":return String(n[i++]);case"%d":return Number(n[i++]);case"%j":try{return JSON.stringify(n[i++])}catch{return"[Circular]"}break;default:return l}});return a}return e}function HA(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function Ye(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||HA(t)&&typeof e=="string"&&!e)}function VA(e,t,n){var r=[],i=0,o=e.length;function a(l){r.push.apply(r,l||[]),i++,i===o&&n(r)}e.forEach(function(l){t(l,a)})}function vm(e,t,n){var r=0,i=e.length;function o(a){if(a&&a.length){n(a);return}var l=r;r=r+1,l<i?t(e[l],o):n([])}o([])}function WA(e){var t=[];return Object.keys(e).forEach(function(n){t.push.apply(t,e[n]||[])}),t}var ym=function(e){_A(t,e);function t(n,r){var i;return i=e.call(this,"Async Validation Error")||this,i.errors=n,i.fields=r,i}return t}(sd(Error));function GA(e,t,n,r,i){if(t.first){var o=new Promise(function(p,S){var w=function(h){return r(h),h.length?S(new ym(h,ud(h))):p(i)},y=WA(e);vm(y,n,w)});return o.catch(function(p){return p}),o}var a=t.firstFields===!0?Object.keys(e):t.firstFields||[],l=Object.keys(e),s=l.length,u=0,c=[],d=new Promise(function(p,S){var w=function(g){if(c.push.apply(c,g),u++,u===s)return r(c),c.length?S(new ym(c,ud(c))):p(i)};l.length||(r(c),p(i)),l.forEach(function(y){var g=e[y];a.indexOf(y)!==-1?vm(g,n,w):VA(g,n,w)})});return d.catch(function(p){return p}),d}function JA(e){return!!(e&&e.message!==void 0)}function qA(e,t){for(var n=e,r=0;r<t.length;r++){if(n==null)return n;n=n[t[r]]}return n}function xm(e,t){return function(n){var r;return e.fullFields?r=qA(t,e.fullFields):r=t[n.field||e.fullField],JA(n)?(n.field=n.field||e.fullField,n.fieldValue=r,n):{message:typeof n=="function"?n():n,fieldValue:r,field:n.field||e.fullField}}}function wm(e,t){if(t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];typeof r=="object"&&typeof e[n]=="object"?e[n]=$r({},e[n],r):e[n]=r}}return e}var oy=function(t,n,r,i,o,a){t.required&&(!r.hasOwnProperty(t.field)||Ye(n,a||t.type))&&i.push(Ot(o.messages.required,t.fullField))},QA=function(t,n,r,i,o){(/^\s+$/.test(n)||n==="")&&i.push(Ot(o.messages.whitespace,t.fullField))},_a,XA=function(){if(_a)return _a;var e="[a-fA-F\\d:]",t=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=(`
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
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+n+"$)|(?:^"+i+"$)"),a=new RegExp("^"+n+"$"),l=new RegExp("^"+i+"$"),s=function(b){return b&&b.exact?o:new RegExp("(?:"+t(b)+n+t(b)+")|(?:"+t(b)+i+t(b)+")","g")};s.v4=function(v){return v&&v.exact?a:new RegExp(""+t(v)+n+t(v),"g")},s.v6=function(v){return v&&v.exact?l:new RegExp(""+t(v)+i+t(v),"g")};var u="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",d=s.v4().source,p=s.v6().source,S="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",w="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",y="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",g="(?::\\d{2,5})?",h='(?:[/?#][^\\s"]*)?',f="(?:"+u+"|www\\.)"+c+"(?:localhost|"+d+"|"+p+"|"+S+w+y+")"+g+h;return _a=new RegExp("(?:^"+f+"$)","i"),_a},Sm={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},po={integer:function(t){return po.number(t)&&parseInt(t,10)===t},float:function(t){return po.number(t)&&!po.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return typeof t=="object"&&!po.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(Sm.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(XA())},hex:function(t){return typeof t=="string"&&!!t.match(Sm.hex)}},YA=function(t,n,r,i,o){if(t.required&&n===void 0){oy(t,n,r,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],l=t.type;a.indexOf(l)>-1?po[l](n)||i.push(Ot(o.messages.types[l],t.fullField,t.type)):l&&typeof n!==t.type&&i.push(Ot(o.messages.types[l],t.fullField,t.type))},KA=function(t,n,r,i,o){var a=typeof t.len=="number",l=typeof t.min=="number",s=typeof t.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=n,d=null,p=typeof n=="number",S=typeof n=="string",w=Array.isArray(n);if(p?d="number":S?d="string":w&&(d="array"),!d)return!1;w&&(c=n.length),S&&(c=n.replace(u,"_").length),a?c!==t.len&&i.push(Ot(o.messages[d].len,t.fullField,t.len)):l&&!s&&c<t.min?i.push(Ot(o.messages[d].min,t.fullField,t.min)):s&&!l&&c>t.max?i.push(Ot(o.messages[d].max,t.fullField,t.max)):l&&s&&(c<t.min||c>t.max)&&i.push(Ot(o.messages[d].range,t.fullField,t.min,t.max))},Kr="enum",ZA=function(t,n,r,i,o){t[Kr]=Array.isArray(t[Kr])?t[Kr]:[],t[Kr].indexOf(n)===-1&&i.push(Ot(o.messages[Kr],t.fullField,t[Kr].join(", ")))},eP=function(t,n,r,i,o){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(n)||i.push(Ot(o.messages.pattern.mismatch,t.fullField,n,t.pattern));else if(typeof t.pattern=="string"){var a=new RegExp(t.pattern);a.test(n)||i.push(Ot(o.messages.pattern.mismatch,t.fullField,n,t.pattern))}}},ge={required:oy,whitespace:QA,type:YA,range:KA,enum:ZA,pattern:eP},tP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n,"string")&&!t.required)return r();ge.required(t,n,i,a,o,"string"),Ye(n,"string")||(ge.type(t,n,i,a,o),ge.range(t,n,i,a,o),ge.pattern(t,n,i,a,o),t.whitespace===!0&&ge.whitespace(t,n,i,a,o))}r(a)},nP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();ge.required(t,n,i,a,o),n!==void 0&&ge.type(t,n,i,a,o)}r(a)},rP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(n===""&&(n=void 0),Ye(n)&&!t.required)return r();ge.required(t,n,i,a,o),n!==void 0&&(ge.type(t,n,i,a,o),ge.range(t,n,i,a,o))}r(a)},iP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();ge.required(t,n,i,a,o),n!==void 0&&ge.type(t,n,i,a,o)}r(a)},oP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();ge.required(t,n,i,a,o),Ye(n)||ge.type(t,n,i,a,o)}r(a)},aP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();ge.required(t,n,i,a,o),n!==void 0&&(ge.type(t,n,i,a,o),ge.range(t,n,i,a,o))}r(a)},lP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();ge.required(t,n,i,a,o),n!==void 0&&(ge.type(t,n,i,a,o),ge.range(t,n,i,a,o))}r(a)},sP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(n==null&&!t.required)return r();ge.required(t,n,i,a,o,"array"),n!=null&&(ge.type(t,n,i,a,o),ge.range(t,n,i,a,o))}r(a)},uP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();ge.required(t,n,i,a,o),n!==void 0&&ge.type(t,n,i,a,o)}r(a)},cP="enum",dP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();ge.required(t,n,i,a,o),n!==void 0&&ge[cP](t,n,i,a,o)}r(a)},fP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n,"string")&&!t.required)return r();ge.required(t,n,i,a,o),Ye(n,"string")||ge.pattern(t,n,i,a,o)}r(a)},pP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n,"date")&&!t.required)return r();if(ge.required(t,n,i,a,o),!Ye(n,"date")){var s;n instanceof Date?s=n:s=new Date(n),ge.type(t,s,i,a,o),s&&ge.range(t,s.getTime(),i,a,o)}}r(a)},hP=function(t,n,r,i,o){var a=[],l=Array.isArray(n)?"array":typeof n;ge.required(t,n,i,a,o,l),r(a)},Eu=function(t,n,r,i,o){var a=t.type,l=[],s=t.required||!t.required&&i.hasOwnProperty(t.field);if(s){if(Ye(n,a)&&!t.required)return r();ge.required(t,n,i,l,o,a),Ye(n,a)||ge.type(t,n,i,l,o)}r(l)},mP=function(t,n,r,i,o){var a=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();ge.required(t,n,i,a,o)}r(a)},Ao={string:tP,method:nP,number:rP,boolean:iP,regexp:oP,integer:aP,float:lP,array:sP,object:uP,enum:dP,pattern:fP,date:pP,url:Eu,hex:Eu,email:Eu,required:hP,any:mP};function cd(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var dd=cd(),ua=function(){function e(n){this.rules=null,this._messages=dd,this.define(n)}var t=e.prototype;return t.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(o){var a=r[o];i.rules[o]=Array.isArray(a)?a:[a]})},t.messages=function(r){return r&&(this._messages=wm(cd(),r)),this._messages},t.validate=function(r,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var l=r,s=i,u=o;if(typeof s=="function"&&(u=s,s={}),!this.rules||Object.keys(this.rules).length===0)return u&&u(null,l),Promise.resolve(l);function c(y){var g=[],h={};function f(b){if(Array.isArray(b)){var k;g=(k=g).concat.apply(k,b)}else g.push(b)}for(var v=0;v<y.length;v++)f(y[v]);g.length?(h=ud(g),u(g,h)):u(null,l)}if(s.messages){var d=this.messages();d===dd&&(d=cd()),wm(d,s.messages),s.messages=d}else s.messages=this.messages();var p={},S=s.keys||Object.keys(this.rules);S.forEach(function(y){var g=a.rules[y],h=l[y];g.forEach(function(f){var v=f;typeof v.transform=="function"&&(l===r&&(l=$r({},l)),h=l[y]=v.transform(h)),typeof v=="function"?v={validator:v}:v=$r({},v),v.validator=a.getValidationMethod(v),v.validator&&(v.field=y,v.fullField=v.fullField||y,v.type=a.getType(v),p[y]=p[y]||[],p[y].push({rule:v,value:h,source:l,field:y}))})});var w={};return GA(p,s,function(y,g){var h=y.rule,f=(h.type==="object"||h.type==="array")&&(typeof h.fields=="object"||typeof h.defaultField=="object");f=f&&(h.required||!h.required&&y.value),h.field=y.field;function v(A,P){return $r({},P,{fullField:h.fullField+"."+A,fullFields:h.fullFields?[].concat(h.fullFields,[A]):[A]})}function b(A){A===void 0&&(A=[]);var P=Array.isArray(A)?A:[A];!s.suppressWarning&&P.length&&e.warning("async-validator:",P),P.length&&h.message!==void 0&&(P=[].concat(h.message));var $=P.map(xm(h,l));if(s.first&&$.length)return w[h.field]=1,g($);if(!f)g($);else{if(h.required&&!y.value)return h.message!==void 0?$=[].concat(h.message).map(xm(h,l)):s.error&&($=[s.error(h,Ot(s.messages.required,h.field))]),g($);var z={};h.defaultField&&Object.keys(y.value).map(function(O){z[O]=h.defaultField}),z=$r({},z,y.rule.fields);var I={};Object.keys(z).forEach(function(O){var R=z[O],T=Array.isArray(R)?R:[R];I[O]=T.map(v.bind(null,O))});var Y=new e(I);Y.messages(s.messages),y.rule.options&&(y.rule.options.messages=s.messages,y.rule.options.error=s.error),Y.validate(y.value,y.rule.options||s,function(O){var R=[];$&&$.length&&R.push.apply(R,$),O&&O.length&&R.push.apply(R,O),g(R.length?R:null)})}}var k;if(h.asyncValidator)k=h.asyncValidator(h,y.value,b,y.source,s);else if(h.validator){try{k=h.validator(h,y.value,b,y.source,s)}catch(A){console.error==null||console.error(A),s.suppressValidatorError||setTimeout(function(){throw A},0),b(A.message)}k===!0?b():k===!1?b(typeof h.message=="function"?h.message(h.fullField||h.field):h.message||(h.fullField||h.field)+" fails"):k instanceof Array?b(k):k instanceof Error&&b(k.message)}k&&k.then&&k.then(function(){return b()},function(A){return b(A)})},function(y){c(y)},l)},t.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!Ao.hasOwnProperty(r.type))throw new Error(Ot("Unknown rule type %s",r.type));return r.type||"string"},t.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?Ao.required:Ao[this.getType(r)]||void 0},e}();ua.register=function(t,n){if(typeof n!="function")throw new Error("Cannot register a validator by type, validator is not a function");Ao[t]=n};ua.warning=BA;ua.messages=dd;ua.validators=Ao;var Ct="'${name}' is not a valid ${type}",ay={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:Ct,method:Ct,array:Ct,object:Ct,number:Ct,date:Ct,boolean:Ct,integer:Ct,float:Ct,regexp:Ct,email:Ct,url:Ct,hex:Ct},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}};function Rn(e,t){for(var n=e,r=0;r<t.length;r+=1){if(n==null)return;n=n[t[r]]}return n}function gP(e){return q0(e)||U0(e)||Tf(e)||Q0()}function ly(e,t,n,r){if(!t.length)return n;var i=gP(t),o=i[0],a=i.slice(1),l;return!e&&typeof o=="number"?l=[]:Array.isArray(e)?l=he(e):l=L({},e),r&&n===void 0&&a.length===1?delete l[o][a[0]]:l[o]=ly(l[o],a,n,r),l}function Yn(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.length&&r&&n===void 0&&!Rn(e,t.slice(0,-1))?e:ly(e,t,n,r)}function Ps(e){return Array.isArray(e)?yP(e):We(e)==="object"&&e!==null?vP(e):e}function vP(e){if(Object.getPrototypeOf(e)===Object.prototype){var t={};for(var n in e)t[n]=Ps(e[n]);return t}return e}function yP(e){return e.map(function(t){return Ps(t)})}function je(e){return ad(e)}function bm(e,t){var n={};return t.forEach(function(r){var i=Rn(e,r);n=Yn(n,r,i)}),n}function Po(e,t){return e&&e.some(function(n){return uy(n,t)})}function km(e){return We(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function sy(e,t){var n=Array.isArray(e)?he(e):L({},e);return t&&Object.keys(t).forEach(function(r){var i=n[r],o=t[r],a=km(i)&&km(o);n[r]=a?sy(i,o||{}):Ps(o)}),n}function Ro(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce(function(i,o){return sy(i,o)},e)}function uy(e,t){return!e||!t||e.length!==t.length?!1:e.every(function(n,r){return t[r]===n})}function xP(e,t){if(e===t)return!0;if(!e&&t||e&&!t||!e||!t||We(e)!=="object"||We(t)!=="object")return!1;var n=Object.keys(e),r=Object.keys(t),i=new Set([].concat(n,r));return he(i).every(function(o){var a=e[o],l=t[o];return typeof a=="function"&&typeof l=="function"?!0:a===l})}function wP(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&We(t.target)==="object"&&e in t.target?t.target[e]:t}function Cm(e,t,n){var r=e.length;if(t<0||t>=r||n<0||n>=r)return e;var i=e[t],o=t-n;return o>0?[].concat(he(e.slice(0,n)),[i],he(e.slice(n,t)),he(e.slice(t+1,r))):o<0?[].concat(he(e.slice(0,t)),he(e.slice(t+1,n+1)),[i],he(e.slice(n+1,r))):e}var Em=ua;function SP(e,t){return e.replace(/\$\{\w+\}/g,function(n){var r=n.slice(2,-1);return t[r]})}var Am="CODE_LOGIC_ERROR";function fd(e,t,n,r,i){return pd.apply(this,arguments)}function pd(){return pd=As(_n().mark(function e(t,n,r,i,o){var a,l,s,u,c,d,p,S,w;return _n().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return a=L({},r),delete a.ruleIndex,Em.warning=function(){},a.validator&&(l=a.validator,a.validator=function(){try{return l.apply(void 0,arguments)}catch(h){return console.error(h),Promise.reject(Am)}}),s=null,a&&a.type==="array"&&a.defaultField&&(s=a.defaultField,delete a.defaultField),u=new Em(ee({},t,[a])),c=Ro({},ay,i.validateMessages),u.messages(c),d=[],g.prev=10,g.next=13,Promise.resolve(u.validate(ee({},t,n),L({},i)));case 13:g.next=18;break;case 15:g.prev=15,g.t0=g.catch(10),g.t0.errors&&(d=g.t0.errors.map(function(h,f){var v=h.message,b=v===Am?c.default:v;return E.isValidElement(b)?E.cloneElement(b,{key:"error_".concat(f)}):b}));case 18:if(!(!d.length&&s)){g.next=23;break}return g.next=21,Promise.all(n.map(function(h,f){return fd("".concat(t,".").concat(f),h,s,i,o)}));case 21:return p=g.sent,g.abrupt("return",p.reduce(function(h,f){return[].concat(he(h),he(f))},[]));case 23:return S=L(L({},r),{},{name:t,enum:(r.enum||[]).join(", ")},o),w=d.map(function(h){return typeof h=="string"?SP(h,S):h}),g.abrupt("return",w);case 26:case"end":return g.stop()}},e,null,[[10,15]])})),pd.apply(this,arguments)}function bP(e,t,n,r,i,o){var a=e.join("."),l=n.map(function(c,d){var p=c.validator,S=L(L({},c),{},{ruleIndex:d});return p&&(S.validator=function(w,y,g){var h=!1,f=function(){for(var k=arguments.length,A=new Array(k),P=0;P<k;P++)A[P]=arguments[P];Promise.resolve().then(function(){Ut(!h,"Your validator function has already return a promise. `callback` will be ignored."),h||g.apply(void 0,A)})},v=p(w,y,f);h=v&&typeof v.then=="function"&&typeof v.catch=="function",Ut(h,"`callback` is deprecated. Please return a promise instead."),h&&v.then(function(){g()}).catch(function(b){g(b||" ")})}),S}).sort(function(c,d){var p=c.warningOnly,S=c.ruleIndex,w=d.warningOnly,y=d.ruleIndex;return!!p==!!w?S-y:p?1:-1}),s;if(i===!0)s=new Promise(function(){var c=As(_n().mark(function d(p,S){var w,y,g;return _n().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:w=0;case 1:if(!(w<l.length)){f.next=12;break}return y=l[w],f.next=5,fd(a,t,y,r,o);case 5:if(g=f.sent,!g.length){f.next=9;break}return S([{errors:g,rule:y}]),f.abrupt("return");case 9:w+=1,f.next=1;break;case 12:p([]);case 13:case"end":return f.stop()}},d)}));return function(d,p){return c.apply(this,arguments)}}());else{var u=l.map(function(c){return fd(a,t,c,r,o).then(function(d){return{errors:d,rule:c}})});s=(i?CP(u):kP(u)).then(function(c){return Promise.reject(c)})}return s.catch(function(c){return c}),s}function kP(e){return hd.apply(this,arguments)}function hd(){return hd=As(_n().mark(function e(t){return _n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.all(t).then(function(i){var o,a=(o=[]).concat.apply(o,he(i));return a}));case 1:case"end":return r.stop()}},e)})),hd.apply(this,arguments)}function CP(e){return md.apply(this,arguments)}function md(){return md=As(_n().mark(function e(t){var n;return _n().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=0,i.abrupt("return",new Promise(function(o){t.forEach(function(a){a.then(function(l){l.errors.length&&o([l]),n+=1,n===t.length&&o([])})})}));case 2:case"end":return i.stop()}},e)})),md.apply(this,arguments)}var EP=["name"],It=[];function Pm(e,t,n,r,i,o){return typeof e=="function"?e(t,n,"source"in o?{source:o.source}:{}):r!==i}var Df=function(e){Vr(n,e);var t=Wr(n);function n(r){var i;if(Jt(this,n),i=t.call(this,r),i.state={resetCount:0},i.cancelRegisterFunc=null,i.mounted=!1,i.touched=!1,i.dirty=!1,i.validatePromise=void 0,i.prevValidating=void 0,i.errors=It,i.warnings=It,i.cancelRegister=function(){var s=i.props,u=s.preserve,c=s.isListField,d=s.name;i.cancelRegisterFunc&&i.cancelRegisterFunc(c,u,je(d)),i.cancelRegisterFunc=null},i.getNamePath=function(){var s=i.props,u=s.name,c=s.fieldContext,d=c.prefixName,p=d===void 0?[]:d;return u!==void 0?[].concat(he(p),he(u)):[]},i.getRules=function(){var s=i.props,u=s.rules,c=u===void 0?[]:u,d=s.fieldContext;return c.map(function(p){return typeof p=="function"?p(d):p})},i.refresh=function(){i.mounted&&i.setState(function(s){var u=s.resetCount;return{resetCount:u+1}})},i.triggerMetaEvent=function(s){var u=i.props.onMetaChange;u==null||u(L(L({},i.getMeta()),{},{destroy:s}))},i.onStoreChange=function(s,u,c){var d=i.props,p=d.shouldUpdate,S=d.dependencies,w=S===void 0?[]:S,y=d.onReset,g=c.store,h=i.getNamePath(),f=i.getValue(s),v=i.getValue(g),b=u&&Po(u,h);switch(c.type==="valueUpdate"&&c.source==="external"&&f!==v&&(i.touched=!0,i.dirty=!0,i.validatePromise=null,i.errors=It,i.warnings=It,i.triggerMetaEvent()),c.type){case"reset":if(!u||b){i.touched=!1,i.dirty=!1,i.validatePromise=void 0,i.errors=It,i.warnings=It,i.triggerMetaEvent(),y==null||y(),i.refresh();return}break;case"remove":{if(p){i.reRender();return}break}case"setField":{if(b){var k=c.data;"touched"in k&&(i.touched=k.touched),"validating"in k&&!("originRCField"in k)&&(i.validatePromise=k.validating?Promise.resolve([]):null),"errors"in k&&(i.errors=k.errors||It),"warnings"in k&&(i.warnings=k.warnings||It),i.dirty=!0,i.triggerMetaEvent(),i.reRender();return}if(p&&!h.length&&Pm(p,s,g,f,v,c)){i.reRender();return}break}case"dependenciesUpdate":{var A=w.map(je);if(A.some(function(P){return Po(c.relatedFields,P)})){i.reRender();return}break}default:if(b||(!w.length||h.length||p)&&Pm(p,s,g,f,v,c)){i.reRender();return}break}p===!0&&i.reRender()},i.validateRules=function(s){var u=i.getNamePath(),c=i.getValue(),d=Promise.resolve().then(function(){if(!i.mounted)return[];var p=i.props,S=p.validateFirst,w=S===void 0?!1:S,y=p.messageVariables,g=s||{},h=g.triggerName,f=i.getRules();h&&(f=f.filter(function(b){return b}).filter(function(b){var k=b.validateTrigger;if(!k)return!0;var A=ad(k);return A.includes(h)}));var v=bP(u,c,f,s,w,y);return v.catch(function(b){return b}).then(function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:It;if(i.validatePromise===d){var k;i.validatePromise=null;var A=[],P=[];(k=b.forEach)===null||k===void 0||k.call(b,function($){var z=$.rule.warningOnly,I=$.errors,Y=I===void 0?It:I;z?P.push.apply(P,he(Y)):A.push.apply(A,he(Y))}),i.errors=A,i.warnings=P,i.triggerMetaEvent(),i.reRender()}}),v});return i.validatePromise=d,i.dirty=!0,i.errors=It,i.warnings=It,i.triggerMetaEvent(),i.reRender(),d},i.isFieldValidating=function(){return!!i.validatePromise},i.isFieldTouched=function(){return i.touched},i.isFieldDirty=function(){if(i.dirty||i.props.initialValue!==void 0)return!0;var s=i.props.fieldContext,u=s.getInternalHooks(Or),c=u.getInitialValue;return c(i.getNamePath())!==void 0},i.getErrors=function(){return i.errors},i.getWarnings=function(){return i.warnings},i.isListField=function(){return i.props.isListField},i.isList=function(){return i.props.isList},i.isPreserve=function(){return i.props.preserve},i.getMeta=function(){i.prevValidating=i.isFieldValidating();var s={touched:i.isFieldTouched(),validating:i.prevValidating,errors:i.errors,warnings:i.warnings,name:i.getNamePath(),validated:i.validatePromise===null};return s},i.getOnlyChild=function(s){if(typeof s=="function"){var u=i.getMeta();return L(L({},i.getOnlyChild(s(i.getControlled(),u,i.props.fieldContext))),{},{isFunction:!0})}var c=Qc(s);return c.length!==1||!E.isValidElement(c[0])?{child:c,isFunction:!1}:{child:c[0],isFunction:!1}},i.getValue=function(s){var u=i.props.fieldContext.getFieldsValue,c=i.getNamePath();return Rn(s||u(!0),c)},i.getControlled=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=i.props,c=u.trigger,d=u.validateTrigger,p=u.getValueFromEvent,S=u.normalize,w=u.valuePropName,y=u.getValueProps,g=u.fieldContext,h=d!==void 0?d:g.validateTrigger,f=i.getNamePath(),v=g.getInternalHooks,b=g.getFieldsValue,k=v(Or),A=k.dispatch,P=i.getValue(),$=y||function(O){return ee({},w,O)},z=s[c],I=L(L({},s),$(P));I[c]=function(){i.touched=!0,i.dirty=!0,i.triggerMetaEvent();for(var O,R=arguments.length,T=new Array(R),U=0;U<R;U++)T[U]=arguments[U];p?O=p.apply(void 0,T):O=wP.apply(void 0,[w].concat(T)),S&&(O=S(O,P,b(!0))),A({type:"updateValue",namePath:f,value:O}),z&&z.apply(void 0,T)};var Y=ad(h||[]);return Y.forEach(function(O){var R=I[O];I[O]=function(){R&&R.apply(void 0,arguments);var T=i.props.rules;T&&T.length&&A({type:"validateField",namePath:f,triggerName:O})}}),I},r.fieldContext){var o=r.fieldContext.getInternalHooks,a=o(Or),l=a.initEntityValue;l(ue(i))}return i}return qt(n,[{key:"componentDidMount",value:function(){var i=this.props,o=i.shouldUpdate,a=i.fieldContext;if(this.mounted=!0,a){var l=a.getInternalHooks,s=l(Or),u=s.registerField;this.cancelRegisterFunc=u(this)}o===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var i=this.state.resetCount,o=this.props.children,a=this.getOnlyChild(o),l=a.child,s=a.isFunction,u;return s?u=l:E.isValidElement(l)?u=E.cloneElement(l,this.getControlled(l.props)):(Ut(!l,"`children` of Field is not validate ReactElement."),u=l),E.createElement(E.Fragment,{key:i},u)}}]),n}(E.Component);Df.contextType=zi;Df.defaultProps={trigger:"onChange",valuePropName:"value"};function cy(e){var t=e.name,n=Ss(e,EP),r=E.useContext(zi),i=E.useContext(od),o=t!==void 0?je(t):void 0,a="keep";return n.isListField||(a="_".concat((o||[]).join("_"))),E.createElement(Df,cn({key:a,name:o,isListField:!!i},n,{fieldContext:r}))}var AP=function(t){var n=t.name,r=t.initialValue,i=t.children,o=t.rules,a=t.validateTrigger,l=t.isListField,s=E.useContext(zi),u=E.useContext(od),c=E.useRef({keys:[],id:0}),d=c.current,p=E.useMemo(function(){var g=je(s.prefixName)||[];return[].concat(he(g),he(je(n)))},[s.prefixName,n]),S=E.useMemo(function(){return L(L({},s),{},{prefixName:p})},[s,p]),w=E.useMemo(function(){return{getKey:function(h){var f=p.length,v=h[f];return[d.keys[v],h.slice(f+1)]}}},[p]);if(typeof i!="function")return Ut(!1,"Form.List only accepts function as children."),null;var y=function(h,f,v){var b=v.source;return b==="internal"?!1:h!==f};return E.createElement(od.Provider,{value:w},E.createElement(zi.Provider,{value:S},E.createElement(cy,{name:[],shouldUpdate:y,rules:o,validateTrigger:a,initialValue:r,isList:!0,isListField:l??!!u},function(g,h){var f=g.value,v=f===void 0?[]:f,b=g.onChange,k=s.getFieldValue,A=function(){var I=k(p||[]);return I||[]},P={add:function(I,Y){var O=A();Y>=0&&Y<=O.length?(d.keys=[].concat(he(d.keys.slice(0,Y)),[d.id],he(d.keys.slice(Y))),b([].concat(he(O.slice(0,Y)),[I],he(O.slice(Y))))):(d.keys=[].concat(he(d.keys),[d.id]),b([].concat(he(O),[I]))),d.id+=1},remove:function(I){var Y=A(),O=new Set(Array.isArray(I)?I:[I]);O.size<=0||(d.keys=d.keys.filter(function(R,T){return!O.has(T)}),b(Y.filter(function(R,T){return!O.has(T)})))},move:function(I,Y){if(I!==Y){var O=A();I<0||I>=O.length||Y<0||Y>=O.length||(d.keys=Cm(d.keys,I,Y),b(Cm(O,I,Y)))}}},$=v||[];return Array.isArray($)||($=[]),i($.map(function(z,I){var Y=d.keys[I];return Y===void 0&&(d.keys[I]=d.id,Y=d.keys[I],d.id+=1),{name:I,key:Y,isListField:!0}}),P,h)})))};function PP(e){var t=!1,n=e.length,r=[];return e.length?new Promise(function(i,o){e.forEach(function(a,l){a.catch(function(s){return t=!0,s}).then(function(s){n-=1,r[l]=s,!(n>0)&&(t&&o(r),i(r))})})}):Promise.resolve([])}var dy="__@field_split__";function Au(e){return e.map(function(t){return"".concat(We(t),":").concat(t)}).join(dy)}var Zr=function(){function e(){Jt(this,e),this.kvs=new Map}return qt(e,[{key:"set",value:function(n,r){this.kvs.set(Au(n),r)}},{key:"get",value:function(n){return this.kvs.get(Au(n))}},{key:"update",value:function(n,r){var i=this.get(n),o=r(i);o?this.set(n,o):this.delete(n)}},{key:"delete",value:function(n){this.kvs.delete(Au(n))}},{key:"map",value:function(n){return he(this.kvs.entries()).map(function(r){var i=kt(r,2),o=i[0],a=i[1],l=o.split(dy);return n({key:l.map(function(s){var u=s.match(/^([^:]*):(.*)$/),c=kt(u,3),d=c[1],p=c[2];return d==="number"?Number(p):p}),value:a})})}},{key:"toJSON",value:function(){var n={};return this.map(function(r){var i=r.key,o=r.value;return n[i.join(".")]=o,null}),n}}]),e}(),RP=["name"],OP=qt(function e(t){var n=this;Jt(this,e),this.formHooked=!1,this.forceRootUpdate=void 0,this.subscribable=!0,this.store={},this.fieldEntities=[],this.initialValues={},this.callbacks={},this.validateMessages=null,this.preserve=null,this.lastValidatePromise=null,this.getForm=function(){return{getFieldValue:n.getFieldValue,getFieldsValue:n.getFieldsValue,getFieldError:n.getFieldError,getFieldWarning:n.getFieldWarning,getFieldsError:n.getFieldsError,isFieldsTouched:n.isFieldsTouched,isFieldTouched:n.isFieldTouched,isFieldValidating:n.isFieldValidating,isFieldsValidating:n.isFieldsValidating,resetFields:n.resetFields,setFields:n.setFields,setFieldValue:n.setFieldValue,setFieldsValue:n.setFieldsValue,validateFields:n.validateFields,submit:n.submit,_init:!0,getInternalHooks:n.getInternalHooks}},this.getInternalHooks=function(r){return r===Or?(n.formHooked=!0,{dispatch:n.dispatch,initEntityValue:n.initEntityValue,registerField:n.registerField,useSubscribe:n.useSubscribe,setInitialValues:n.setInitialValues,destroyForm:n.destroyForm,setCallbacks:n.setCallbacks,setValidateMessages:n.setValidateMessages,getFields:n.getFields,setPreserve:n.setPreserve,getInitialValue:n.getInitialValue,registerWatch:n.registerWatch}):(Ut(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)},this.useSubscribe=function(r){n.subscribable=r},this.prevWithoutPreserves=null,this.setInitialValues=function(r,i){if(n.initialValues=r||{},i){var o,a=Ro({},r,n.store);(o=n.prevWithoutPreserves)===null||o===void 0||o.map(function(l){var s=l.key;a=Yn(a,s,Rn(r,s))}),n.prevWithoutPreserves=null,n.updateStore(a)}},this.destroyForm=function(){var r=new Zr;n.getFieldEntities(!0).forEach(function(i){n.isMergedPreserve(i.isPreserve())||r.set(i.getNamePath(),!0)}),n.prevWithoutPreserves=r},this.getInitialValue=function(r){var i=Rn(n.initialValues,r);return r.length?Ps(i):i},this.setCallbacks=function(r){n.callbacks=r},this.setValidateMessages=function(r){n.validateMessages=r},this.setPreserve=function(r){n.preserve=r},this.watchList=[],this.registerWatch=function(r){return n.watchList.push(r),function(){n.watchList=n.watchList.filter(function(i){return i!==r})}},this.notifyWatch=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(n.watchList.length){var i=n.getFieldsValue(),o=n.getFieldsValue(!0);n.watchList.forEach(function(a){a(i,o,r)})}},this.timeoutId=null,this.warningUnhooked=function(){},this.updateStore=function(r){n.store=r},this.getFieldEntities=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return r?n.fieldEntities.filter(function(i){return i.getNamePath().length}):n.fieldEntities},this.getFieldsMap=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=new Zr;return n.getFieldEntities(r).forEach(function(o){var a=o.getNamePath();i.set(a,o)}),i},this.getFieldEntitiesForNamePathList=function(r){if(!r)return n.getFieldEntities(!0);var i=n.getFieldsMap(!0);return r.map(function(o){var a=je(o);return i.get(a)||{INVALIDATE_NAME_PATH:je(o)}})},this.getFieldsValue=function(r,i){if(n.warningUnhooked(),r===!0&&!i)return n.store;var o=n.getFieldEntitiesForNamePathList(Array.isArray(r)?r:null),a=[];return o.forEach(function(l){var s,u="INVALIDATE_NAME_PATH"in l?l.INVALIDATE_NAME_PATH:l.getNamePath();if(!(!r&&(!((s=l.isListField)===null||s===void 0)&&s.call(l))))if(!i)a.push(u);else{var c="getMeta"in l?l.getMeta():null;i(c)&&a.push(u)}}),bm(n.store,a.map(je))},this.getFieldValue=function(r){n.warningUnhooked();var i=je(r);return Rn(n.store,i)},this.getFieldsError=function(r){n.warningUnhooked();var i=n.getFieldEntitiesForNamePathList(r);return i.map(function(o,a){return o&&!("INVALIDATE_NAME_PATH"in o)?{name:o.getNamePath(),errors:o.getErrors(),warnings:o.getWarnings()}:{name:je(r[a]),errors:[],warnings:[]}})},this.getFieldError=function(r){n.warningUnhooked();var i=je(r),o=n.getFieldsError([i])[0];return o.errors},this.getFieldWarning=function(r){n.warningUnhooked();var i=je(r),o=n.getFieldsError([i])[0];return o.warnings},this.isFieldsTouched=function(){n.warningUnhooked();for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i[0],l=i[1],s,u=!1;i.length===0?s=null:i.length===1?Array.isArray(a)?(s=a.map(je),u=!1):(s=null,u=a):(s=a.map(je),u=l);var c=n.getFieldEntities(!0),d=function(g){return g.isFieldTouched()};if(!s)return u?c.every(d):c.some(d);var p=new Zr;s.forEach(function(y){p.set(y,[])}),c.forEach(function(y){var g=y.getNamePath();s.forEach(function(h){h.every(function(f,v){return g[v]===f})&&p.update(h,function(f){return[].concat(he(f),[y])})})});var S=function(g){return g.some(d)},w=p.map(function(y){var g=y.value;return g});return u?w.every(S):w.some(S)},this.isFieldTouched=function(r){return n.warningUnhooked(),n.isFieldsTouched([r])},this.isFieldsValidating=function(r){n.warningUnhooked();var i=n.getFieldEntities();if(!r)return i.some(function(a){return a.isFieldValidating()});var o=r.map(je);return i.some(function(a){var l=a.getNamePath();return Po(o,l)&&a.isFieldValidating()})},this.isFieldValidating=function(r){return n.warningUnhooked(),n.isFieldsValidating([r])},this.resetWithFieldInitialValue=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=new Zr,o=n.getFieldEntities(!0);o.forEach(function(s){var u=s.props.initialValue,c=s.getNamePath();if(u!==void 0){var d=i.get(c)||new Set;d.add({entity:s,value:u}),i.set(c,d)}});var a=function(u){u.forEach(function(c){var d=c.props.initialValue;if(d!==void 0){var p=c.getNamePath(),S=n.getInitialValue(p);if(S!==void 0)Ut(!1,"Form already set 'initialValues' with path '".concat(p.join("."),"'. Field can not overwrite it."));else{var w=i.get(p);if(w&&w.size>1)Ut(!1,"Multiple Field with path '".concat(p.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(w){var y=n.getFieldValue(p);(!r.skipExist||y===void 0)&&n.updateStore(Yn(n.store,p,he(w)[0].value))}}}})},l;r.entities?l=r.entities:r.namePathList?(l=[],r.namePathList.forEach(function(s){var u=i.get(s);if(u){var c;(c=l).push.apply(c,he(he(u).map(function(d){return d.entity})))}})):l=o,a(l)},this.resetFields=function(r){n.warningUnhooked();var i=n.store;if(!r){n.updateStore(Ro({},n.initialValues)),n.resetWithFieldInitialValue(),n.notifyObservers(i,null,{type:"reset"}),n.notifyWatch();return}var o=r.map(je);o.forEach(function(a){var l=n.getInitialValue(a);n.updateStore(Yn(n.store,a,l))}),n.resetWithFieldInitialValue({namePathList:o}),n.notifyObservers(i,o,{type:"reset"}),n.notifyWatch(o)},this.setFields=function(r){n.warningUnhooked();var i=n.store,o=[];r.forEach(function(a){var l=a.name,s=Ss(a,RP),u=je(l);o.push(u),"value"in s&&n.updateStore(Yn(n.store,u,s.value)),n.notifyObservers(i,[u],{type:"setField",data:a})}),n.notifyWatch(o)},this.getFields=function(){var r=n.getFieldEntities(!0),i=r.map(function(o){var a=o.getNamePath(),l=o.getMeta(),s=L(L({},l),{},{name:a,value:n.getFieldValue(a)});return Object.defineProperty(s,"originRCField",{value:!0}),s});return i},this.initEntityValue=function(r){var i=r.props.initialValue;if(i!==void 0){var o=r.getNamePath(),a=Rn(n.store,o);a===void 0&&n.updateStore(Yn(n.store,o,i))}},this.isMergedPreserve=function(r){var i=r!==void 0?r:n.preserve;return i??!0},this.registerField=function(r){n.fieldEntities.push(r);var i=r.getNamePath();if(n.notifyWatch([i]),r.props.initialValue!==void 0){var o=n.store;n.resetWithFieldInitialValue({entities:[r],skipExist:!0}),n.notifyObservers(o,[r.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(a,l){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(n.fieldEntities=n.fieldEntities.filter(function(d){return d!==r}),!n.isMergedPreserve(l)&&(!a||s.length>1)){var u=a?void 0:n.getInitialValue(i);if(i.length&&n.getFieldValue(i)!==u&&n.fieldEntities.every(function(d){return!uy(d.getNamePath(),i)})){var c=n.store;n.updateStore(Yn(c,i,u,!0)),n.notifyObservers(c,[i],{type:"remove"}),n.triggerDependenciesUpdate(c,i)}}n.notifyWatch([i])}},this.dispatch=function(r){switch(r.type){case"updateValue":{var i=r.namePath,o=r.value;n.updateValue(i,o);break}case"validateField":{var a=r.namePath,l=r.triggerName;n.validateFields([a],{triggerName:l});break}}},this.notifyObservers=function(r,i,o){if(n.subscribable){var a=L(L({},o),{},{store:n.getFieldsValue(!0)});n.getFieldEntities().forEach(function(l){var s=l.onStoreChange;s(r,i,a)})}else n.forceRootUpdate()},this.triggerDependenciesUpdate=function(r,i){var o=n.getDependencyChildrenFields(i);return o.length&&n.validateFields(o),n.notifyObservers(r,o,{type:"dependenciesUpdate",relatedFields:[i].concat(he(o))}),o},this.updateValue=function(r,i){var o=je(r),a=n.store;n.updateStore(Yn(n.store,o,i)),n.notifyObservers(a,[o],{type:"valueUpdate",source:"internal"}),n.notifyWatch([o]);var l=n.triggerDependenciesUpdate(a,o),s=n.callbacks.onValuesChange;if(s){var u=bm(n.store,[o]);s(u,n.getFieldsValue())}n.triggerOnFieldsChange([o].concat(he(l)))},this.setFieldsValue=function(r){n.warningUnhooked();var i=n.store;if(r){var o=Ro(n.store,r);n.updateStore(o)}n.notifyObservers(i,null,{type:"valueUpdate",source:"external"}),n.notifyWatch()},this.setFieldValue=function(r,i){n.setFields([{name:r,value:i}])},this.getDependencyChildrenFields=function(r){var i=new Set,o=[],a=new Zr;n.getFieldEntities().forEach(function(s){var u=s.props.dependencies;(u||[]).forEach(function(c){var d=je(c);a.update(d,function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return p.add(s),p})})});var l=function s(u){var c=a.get(u)||new Set;c.forEach(function(d){if(!i.has(d)){i.add(d);var p=d.getNamePath();d.isFieldDirty()&&p.length&&(o.push(p),s(p))}})};return l(r),o},this.triggerOnFieldsChange=function(r,i){var o=n.callbacks.onFieldsChange;if(o){var a=n.getFields();if(i){var l=new Zr;i.forEach(function(u){var c=u.name,d=u.errors;l.set(c,d)}),a.forEach(function(u){u.errors=l.get(u.name)||u.errors})}var s=a.filter(function(u){var c=u.name;return Po(r,c)});o(s,a)}},this.validateFields=function(r,i){n.warningUnhooked();var o=!!r,a=o?r.map(je):[],l=[];n.getFieldEntities(!0).forEach(function(c){if(o||a.push(c.getNamePath()),i!=null&&i.recursive&&o){var d=c.getNamePath();d.every(function(w,y){return r[y]===w||r[y]===void 0})&&a.push(d)}if(!(!c.props.rules||!c.props.rules.length)){var p=c.getNamePath();if(!o||Po(a,p)){var S=c.validateRules(L({validateMessages:L(L({},ay),n.validateMessages)},i));l.push(S.then(function(){return{name:p,errors:[],warnings:[]}}).catch(function(w){var y,g=[],h=[];return(y=w.forEach)===null||y===void 0||y.call(w,function(f){var v=f.rule.warningOnly,b=f.errors;v?h.push.apply(h,he(b)):g.push.apply(g,he(b))}),g.length?Promise.reject({name:p,errors:g,warnings:h}):{name:p,errors:g,warnings:h}}))}}});var s=PP(l);n.lastValidatePromise=s,s.catch(function(c){return c}).then(function(c){var d=c.map(function(p){var S=p.name;return S});n.notifyObservers(n.store,d,{type:"validateFinish"}),n.triggerOnFieldsChange(d,c)});var u=s.then(function(){return n.lastValidatePromise===s?Promise.resolve(n.getFieldsValue(a)):Promise.reject([])}).catch(function(c){var d=c.filter(function(p){return p&&p.errors.length});return Promise.reject({values:n.getFieldsValue(a),errorFields:d,outOfDate:n.lastValidatePromise!==s})});return u.catch(function(c){return c}),n.triggerOnFieldsChange(a),u},this.submit=function(){n.warningUnhooked(),n.validateFields().then(function(r){var i=n.callbacks.onFinish;if(i)try{i(r)}catch(o){console.error(o)}}).catch(function(r){var i=n.callbacks.onFinishFailed;i&&i(r)})},this.forceRootUpdate=t});function fy(e){var t=E.useRef(),n=E.useState({}),r=kt(n,2),i=r[1];if(!t.current)if(e)t.current=e;else{var o=function(){i({})},a=new OP(o);t.current=a.getForm()}return[t.current]}var gd=E.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),py=function(t){var n=t.validateMessages,r=t.onFormChange,i=t.onFormFinish,o=t.children,a=E.useContext(gd),l=E.useRef({});return E.createElement(gd.Provider,{value:L(L({},a),{},{validateMessages:L(L({},a.validateMessages),n),triggerFormChange:function(u,c){r&&r(u,{changedFields:c,forms:l.current}),a.triggerFormChange(u,c)},triggerFormFinish:function(u,c){i&&i(u,{values:c,forms:l.current}),a.triggerFormFinish(u,c)},registerForm:function(u,c){u&&(l.current=L(L({},l.current),{},ee({},u,c))),a.registerForm(u,c)},unregisterForm:function(u){var c=L({},l.current);delete c[u],l.current=c,a.unregisterForm(u)}})},o)},$P=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],TP=function(t,n){var r=t.name,i=t.initialValues,o=t.fields,a=t.form,l=t.preserve,s=t.children,u=t.component,c=u===void 0?"form":u,d=t.validateMessages,p=t.validateTrigger,S=p===void 0?"onChange":p,w=t.onValuesChange,y=t.onFieldsChange,g=t.onFinish,h=t.onFinishFailed,f=Ss(t,$P),v=E.useContext(gd),b=fy(a),k=kt(b,1),A=k[0],P=A.getInternalHooks(Or),$=P.useSubscribe,z=P.setInitialValues,I=P.setCallbacks,Y=P.setValidateMessages,O=P.setPreserve,R=P.destroyForm;E.useImperativeHandle(n,function(){return A}),E.useEffect(function(){return v.registerForm(r,A),function(){v.unregisterForm(r)}},[v,A,r]),Y(L(L({},v.validateMessages),d)),I({onValuesChange:w,onFieldsChange:function(j){if(v.triggerFormChange(r,j),y){for(var V=arguments.length,G=new Array(V>1?V-1:0),re=1;re<V;re++)G[re-1]=arguments[re];y.apply(void 0,[j].concat(G))}},onFinish:function(j){v.triggerFormFinish(r,j),g&&g(j)},onFinishFailed:h}),O(l);var T=E.useRef(null);z(i,!T.current),T.current||(T.current=!0),E.useEffect(function(){return R},[]);var U,Q=typeof s=="function";if(Q){var q=A.getFieldsValue(!0);U=s(q,A)}else U=s;$(!Q);var _=E.useRef();E.useEffect(function(){xP(_.current||[],o||[])||A.setFields(o||[]),_.current=o},[o,A]);var X=E.useMemo(function(){return L(L({},A),{},{validateTrigger:S})},[A,S]),W=E.createElement(zi.Provider,{value:X},U);return c===!1?W:E.createElement(c,cn({},f,{onSubmit:function(j){j.preventDefault(),j.stopPropagation(),A.submit()},onReset:function(j){var V;j.preventDefault(),A.resetFields(),(V=f.onReset)===null||V===void 0||V.call(f,j)}}),W)};function Rm(e){try{return JSON.stringify(e)}catch{return Math.random()}}function MP(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],i=r===void 0?[]:r,o=t[1],a=o===void 0?{}:o,l=DA(a)?{form:a}:a,s=l.form,u=E.useState(),c=kt(u,2),d=c[0],p=c[1],S=E.useMemo(function(){return Rm(d)},[d]),w=E.useRef(S);w.current=S;var y=E.useContext(zi),g=s||y,h=g&&g._init,f=je(i),v=E.useRef(f);return v.current=f,E.useEffect(function(){if(h){var b=g.getFieldsValue,k=g.getInternalHooks,A=k(Or),P=A.registerWatch,$=P(function(I,Y){var O=Rn(l.preserve?Y:I,v.current),R=Rm(O);w.current!==R&&(w.current=R,p(O))}),z=Rn(l.preserve?b(!0):b(),v.current);return p(z),$}},[h]),d}var LP=E.forwardRef(TP),ca=LP;ca.FormProvider=py;ca.Field=cy;ca.List=AP;ca.useForm=fy;ca.useWatch=MP;const FP={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};var NP={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};const IP={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},hy=IP,DP={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},NP),timePickerLocale:Object.assign({},hy)},Om=DP,Et="${label} is not a valid ${type}",_P={locale:"en",Pagination:FP,DatePicker:Om,TimePicker:hy,Calendar:Om,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Et,method:Et,array:Et,object:Et,number:Et,date:Et,boolean:Et,integer:Et,float:Et,regexp:Et,email:Et,url:Et,hex:Et},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"}},_f=_P;let Pu=Object.assign({},_f.Modal);function $m(e){e?Pu=Object.assign(Object.assign({},Pu),e):Pu=Object.assign({},_f.Modal)}const zP=E.createContext(void 0),my=zP,jP="internalMark",UP=e=>{const{locale:t={},children:n,_ANT_MARK__:r}=e;E.useEffect(()=>($m(t&&t.Modal),()=>{$m()}),[t]);const i=E.useMemo(()=>Object.assign(Object.assign({},t),{exist:!0}),[t]);return E.createElement(my.Provider,{value:i},n)},BP=UP,HP="5.4.7";function at(e,t){VP(e)&&(e="100%");var n=WP(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function za(e){return Math.min(1,Math.max(0,e))}function VP(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function WP(e){return typeof e=="string"&&e.indexOf("%")!==-1}function gy(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ja(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Tr(e){return e.length===1?"0"+e:String(e)}function GP(e,t,n){return{r:at(e,255)*255,g:at(t,255)*255,b:at(n,255)*255}}function Tm(e,t,n){e=at(e,255),t=at(t,255),n=at(n,255);var r=Math.max(e,t,n),i=Math.min(e,t,n),o=0,a=0,l=(r+i)/2;if(r===i)a=0,o=0;else{var s=r-i;switch(a=l>.5?s/(2-r-i):s/(r+i),r){case e:o=(t-n)/s+(t<n?6:0);break;case t:o=(n-e)/s+2;break;case n:o=(e-t)/s+4;break}o/=6}return{h:o,s:a,l}}function Ru(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function JP(e,t,n){var r,i,o;if(e=at(e,360),t=at(t,100),n=at(n,100),t===0)i=n,o=n,r=n;else{var a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;r=Ru(l,a,e+1/3),i=Ru(l,a,e),o=Ru(l,a,e-1/3)}return{r:r*255,g:i*255,b:o*255}}function vd(e,t,n){e=at(e,255),t=at(t,255),n=at(n,255);var r=Math.max(e,t,n),i=Math.min(e,t,n),o=0,a=r,l=r-i,s=r===0?0:l/r;if(r===i)o=0;else{switch(r){case e:o=(t-n)/l+(t<n?6:0);break;case t:o=(n-e)/l+2;break;case n:o=(e-t)/l+4;break}o/=6}return{h:o,s,v:a}}function qP(e,t,n){e=at(e,360)*6,t=at(t,100),n=at(n,100);var r=Math.floor(e),i=e-r,o=n*(1-t),a=n*(1-i*t),l=n*(1-(1-i)*t),s=r%6,u=[n,a,o,o,l,n][s],c=[l,n,n,a,o,o][s],d=[o,o,l,n,n,a][s];return{r:u*255,g:c*255,b:d*255}}function yd(e,t,n,r){var i=[Tr(Math.round(e).toString(16)),Tr(Math.round(t).toString(16)),Tr(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function QP(e,t,n,r,i){var o=[Tr(Math.round(e).toString(16)),Tr(Math.round(t).toString(16)),Tr(Math.round(n).toString(16)),Tr(XP(r))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function XP(e){return Math.round(parseFloat(e)*255).toString(16)}function Mm(e){return At(e)/255}function At(e){return parseInt(e,16)}function YP(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var xd={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ei(e){var t={r:0,g:0,b:0},n=1,r=null,i=null,o=null,a=!1,l=!1;return typeof e=="string"&&(e=eR(e)),typeof e=="object"&&(Sn(e.r)&&Sn(e.g)&&Sn(e.b)?(t=GP(e.r,e.g,e.b),a=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Sn(e.h)&&Sn(e.s)&&Sn(e.v)?(r=ja(e.s),i=ja(e.v),t=qP(e.h,r,i),a=!0,l="hsv"):Sn(e.h)&&Sn(e.s)&&Sn(e.l)&&(r=ja(e.s),o=ja(e.l),t=JP(e.h,r,o),a=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=gy(n),{ok:a,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var KP="[-\\+]?\\d+%?",ZP="[-\\+]?\\d*\\.\\d+%?",or="(?:".concat(ZP,")|(?:").concat(KP,")"),Ou="[\\s|\\(]+(".concat(or,")[,|\\s]+(").concat(or,")[,|\\s]+(").concat(or,")\\s*\\)?"),$u="[\\s|\\(]+(".concat(or,")[,|\\s]+(").concat(or,")[,|\\s]+(").concat(or,")[,|\\s]+(").concat(or,")\\s*\\)?"),en={CSS_UNIT:new RegExp(or),rgb:new RegExp("rgb"+Ou),rgba:new RegExp("rgba"+$u),hsl:new RegExp("hsl"+Ou),hsla:new RegExp("hsla"+$u),hsv:new RegExp("hsv"+Ou),hsva:new RegExp("hsva"+$u),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function eR(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(xd[e])e=xd[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=en.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=en.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=en.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=en.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=en.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=en.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=en.hex8.exec(e),n?{r:At(n[1]),g:At(n[2]),b:At(n[3]),a:Mm(n[4]),format:t?"name":"hex8"}:(n=en.hex6.exec(e),n?{r:At(n[1]),g:At(n[2]),b:At(n[3]),format:t?"name":"hex"}:(n=en.hex4.exec(e),n?{r:At(n[1]+n[1]),g:At(n[2]+n[2]),b:At(n[3]+n[3]),a:Mm(n[4]+n[4]),format:t?"name":"hex8"}:(n=en.hex3.exec(e),n?{r:At(n[1]+n[1]),g:At(n[2]+n[2]),b:At(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function Sn(e){return!!en.CSS_UNIT.exec(String(e))}var $t=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var r;if(t instanceof e)return t;typeof t=="number"&&(t=YP(t)),this.originalInput=t;var i=ei(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,r,i,o=t.r/255,a=t.g/255,l=t.b/255;return o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),l<=.03928?i=l/12.92:i=Math.pow((l+.055)/1.055,2.4),.2126*n+.7152*r+.0722*i},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=gy(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=vd(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=vd(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Tm(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Tm(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),yd(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),QP(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(at(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(at(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+yd(this.r,this.g,this.b,!1),n=0,r=Object.entries(xd);n<r.length;n++){var i=r[n],o=i[0],a=i[1];if(t===a)return o}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var r=!1,i=this.a<1&&this.a>=0,o=!n&&i&&(t.startsWith("hex")||t==="name");return o?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=za(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=za(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=za(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=za(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var r=this.toRgb(),i=new e(t).toRgb(),o=n/100,a={r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a};return new e(a)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var r=this.toHsl(),i=360/n,o=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,o.push(new e(r));return o},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),r=n.h,i=n.s,o=n.v,a=[],l=1/t;t--;)a.push(new e({h:r,s:i,v:o})),o=(o+l)%1;return a},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,i=[this],o=360/t,a=1;a<t;a++)i.push(new e({h:(r+a*o)%360,s:n.s,l:n.l}));return i},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),Ua=2,Lm=.16,tR=.05,nR=.05,rR=.15,vy=5,yy=4,iR=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function Fm(e){var t=e.r,n=e.g,r=e.b,i=vd(t,n,r);return{h:i.h*360,s:i.s,v:i.v}}function Ba(e){var t=e.r,n=e.g,r=e.b;return"#".concat(yd(t,n,r,!1))}function oR(e,t,n){var r=n/100,i={r:(t.r-e.r)*r+e.r,g:(t.g-e.g)*r+e.g,b:(t.b-e.b)*r+e.b};return i}function Nm(e,t,n){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=n?Math.round(e.h)-Ua*t:Math.round(e.h)+Ua*t:r=n?Math.round(e.h)+Ua*t:Math.round(e.h)-Ua*t,r<0?r+=360:r>=360&&(r-=360),r}function Im(e,t,n){if(e.h===0&&e.s===0)return e.s;var r;return n?r=e.s-Lm*t:t===yy?r=e.s+Lm:r=e.s+tR*t,r>1&&(r=1),n&&t===vy&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function Dm(e,t,n){var r;return n?r=e.v+nR*t:r=e.v-rR*t,r>1&&(r=1),Number(r.toFixed(2))}function ji(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=ei(e),i=vy;i>0;i-=1){var o=Fm(r),a=Ba(ei({h:Nm(o,i,!0),s:Im(o,i,!0),v:Dm(o,i,!0)}));n.push(a)}n.push(Ba(r));for(var l=1;l<=yy;l+=1){var s=Fm(r),u=Ba(ei({h:Nm(s,l),s:Im(s,l),v:Dm(s,l)}));n.push(u)}return t.theme==="dark"?iR.map(function(c){var d=c.index,p=c.opacity,S=Ba(oR(ei(t.backgroundColor||"#141414"),ei(n[d]),p*100));return S}):n}var Tu={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Mu={},Lu={};Object.keys(Tu).forEach(function(e){Mu[e]=ji(Tu[e]),Mu[e].primary=Mu[e][5],Lu[e]=ji(Tu[e],{theme:"dark",backgroundColor:"#141414"}),Lu[e].primary=Lu[e][5]});const aR=e=>{const{controlHeight:t}=e;return{controlHeightSM:t*.75,controlHeightXS:t*.5,controlHeightLG:t*1.25}},lR=aR;function sR(e){const{sizeUnit:t,sizeStep:n}=e;return{sizeXXL:t*(n+8),sizeXL:t*(n+4),sizeLG:t*(n+2),sizeMD:t*(n+1),sizeMS:t*n,size:t*n,sizeSM:t*(n-1),sizeXS:t*(n-2),sizeXXS:t*(n-3)}}const xy={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},uR=Object.assign(Object.assign({},xy),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1}),Rs=uR;function cR(e,t){let{generateColorPalettes:n,generateNeutralColorPalettes:r}=t;const{colorSuccess:i,colorWarning:o,colorError:a,colorInfo:l,colorPrimary:s,colorBgBase:u,colorTextBase:c}=e,d=n(s),p=n(i),S=n(o),w=n(a),y=n(l),g=r(u,c);return Object.assign(Object.assign({},g),{colorPrimaryBg:d[1],colorPrimaryBgHover:d[2],colorPrimaryBorder:d[3],colorPrimaryBorderHover:d[4],colorPrimaryHover:d[5],colorPrimary:d[6],colorPrimaryActive:d[7],colorPrimaryTextHover:d[8],colorPrimaryText:d[9],colorPrimaryTextActive:d[10],colorSuccessBg:p[1],colorSuccessBgHover:p[2],colorSuccessBorder:p[3],colorSuccessBorderHover:p[4],colorSuccessHover:p[4],colorSuccess:p[6],colorSuccessActive:p[7],colorSuccessTextHover:p[8],colorSuccessText:p[9],colorSuccessTextActive:p[10],colorErrorBg:w[1],colorErrorBgHover:w[2],colorErrorBorder:w[3],colorErrorBorderHover:w[4],colorErrorHover:w[5],colorError:w[6],colorErrorActive:w[7],colorErrorTextHover:w[8],colorErrorText:w[9],colorErrorTextActive:w[10],colorWarningBg:S[1],colorWarningBgHover:S[2],colorWarningBorder:S[3],colorWarningBorderHover:S[4],colorWarningHover:S[4],colorWarning:S[6],colorWarningActive:S[7],colorWarningTextHover:S[8],colorWarningText:S[9],colorWarningTextActive:S[10],colorInfoBg:y[1],colorInfoBgHover:y[2],colorInfoBorder:y[3],colorInfoBorderHover:y[4],colorInfoHover:y[4],colorInfo:y[6],colorInfoActive:y[7],colorInfoTextHover:y[8],colorInfoText:y[9],colorInfoTextActive:y[10],colorBgMask:new $t("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}const dR=e=>{let t=e,n=e,r=e,i=e;return e<6&&e>=5?t=e+1:e<16&&e>=6?t=e+2:e>=16&&(t=16),e<7&&e>=5?n=4:e<8&&e>=7?n=5:e<14&&e>=8?n=6:e<16&&e>=14?n=7:e>=16&&(n=8),e<6&&e>=2?r=1:e>=6&&(r=2),e>4&&e<8?i=4:e>=8&&(i=6),{borderRadius:e>16?16:e,borderRadiusXS:r,borderRadiusSM:n,borderRadiusLG:t,borderRadiusOuter:i}},fR=dR;function pR(e){const{motionUnit:t,motionBase:n,borderRadius:r,lineWidth:i}=e;return Object.assign({motionDurationFast:`${(n+t).toFixed(1)}s`,motionDurationMid:`${(n+t*2).toFixed(1)}s`,motionDurationSlow:`${(n+t*3).toFixed(1)}s`,lineWidthBold:i+1},fR(r))}const bn=(e,t)=>new $t(e).setAlpha(t).toRgbString(),lo=(e,t)=>new $t(e).darken(t).toHexString(),hR=e=>{const t=ji(e);return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[4],6:t[5],7:t[6],8:t[4],9:t[5],10:t[6]}},mR=(e,t)=>{const n=e||"#fff",r=t||"#000";return{colorBgBase:n,colorTextBase:r,colorText:bn(r,.88),colorTextSecondary:bn(r,.65),colorTextTertiary:bn(r,.45),colorTextQuaternary:bn(r,.25),colorFill:bn(r,.15),colorFillSecondary:bn(r,.06),colorFillTertiary:bn(r,.04),colorFillQuaternary:bn(r,.02),colorBgLayout:lo(n,4),colorBgContainer:lo(n,0),colorBgElevated:lo(n,0),colorBgSpotlight:bn(r,.85),colorBorder:lo(n,15),colorBorderSecondary:lo(n,6)}};function gR(e){const t=new Array(10).fill(null).map((n,r)=>{const i=r-1,o=e*Math.pow(2.71828,i/5),a=r>1?Math.floor(o):Math.ceil(o);return Math.floor(a/2)*2});return t[1]=e,t.map(n=>{const r=n+8;return{size:n,lineHeight:r/n}})}const vR=e=>{const t=gR(e),n=t.map(i=>i.size),r=t.map(i=>i.lineHeight);return{fontSizeSM:n[0],fontSize:n[1],fontSizeLG:n[2],fontSizeXL:n[3],fontSizeHeading1:n[6],fontSizeHeading2:n[5],fontSizeHeading3:n[4],fontSizeHeading4:n[3],fontSizeHeading5:n[2],lineHeight:r[1],lineHeightLG:r[2],lineHeightSM:r[0],lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}},yR=vR;function xR(e){const t=Object.keys(xy).map(n=>{const r=ji(e[n]);return new Array(10).fill(1).reduce((i,o,a)=>(i[`${n}-${a+1}`]=r[a],i[`${n}${a+1}`]=r[a],i),{})}).reduce((n,r)=>(n=Object.assign(Object.assign({},n),r),n),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),t),cR(e,{generateColorPalettes:hR,generateNeutralColorPalettes:mR})),yR(e.fontSize)),sR(e)),lR(e)),pR(e))}function Fu(e){return e>=0&&e<=255}function Ha(e,t){const{r:n,g:r,b:i,a:o}=new $t(e).toRgb();if(o<1)return e;const{r:a,g:l,b:s}=new $t(t).toRgb();for(let u=.01;u<=1;u+=.01){const c=Math.round((n-a*(1-u))/u),d=Math.round((r-l*(1-u))/u),p=Math.round((i-s*(1-u))/u);if(Fu(c)&&Fu(d)&&Fu(p))return new $t({r:c,g:d,b:p,a:Math.round(u*100)/100}).toRgbString()}return new $t({r:n,g:r,b:i,a:1}).toRgbString()}var wR=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function SR(e){const{override:t}=e,n=wR(e,["override"]),r=Object.assign({},t);Object.keys(Rs).forEach(p=>{delete r[p]});const i=Object.assign(Object.assign({},n),r),o=480,a=576,l=768,s=992,u=1200,c=1600;return Object.assign(Object.assign(Object.assign({},i),{colorLink:i.colorInfoText,colorLinkHover:i.colorInfoHover,colorLinkActive:i.colorInfoActive,colorFillContent:i.colorFillSecondary,colorFillContentHover:i.colorFill,colorFillAlter:i.colorFillQuaternary,colorBgContainerDisabled:i.colorFillTertiary,colorBorderBg:i.colorBgContainer,colorSplit:Ha(i.colorBorderSecondary,i.colorBgContainer),colorTextPlaceholder:i.colorTextQuaternary,colorTextDisabled:i.colorTextQuaternary,colorTextHeading:i.colorText,colorTextLabel:i.colorTextSecondary,colorTextDescription:i.colorTextTertiary,colorTextLightSolid:i.colorWhite,colorHighlight:i.colorError,colorBgTextHover:i.colorFillSecondary,colorBgTextActive:i.colorFill,colorIcon:i.colorTextTertiary,colorIconHover:i.colorText,colorErrorOutline:Ha(i.colorErrorBg,i.colorBgContainer),colorWarningOutline:Ha(i.colorWarningBg,i.colorBgContainer),fontSizeIcon:i.fontSizeSM,lineWidthFocus:i.lineWidth*4,lineWidth:i.lineWidth,controlOutlineWidth:i.lineWidth*2,controlInteractiveSize:i.controlHeight/2,controlItemBgHover:i.colorFillTertiary,controlItemBgActive:i.colorPrimaryBg,controlItemBgActiveHover:i.colorPrimaryBgHover,controlItemBgActiveDisabled:i.colorFill,controlTmpOutline:i.colorFillQuaternary,controlOutline:Ha(i.colorPrimaryBg,i.colorBgContainer),lineType:i.lineType,borderRadius:i.borderRadius,borderRadiusXS:i.borderRadiusXS,borderRadiusSM:i.borderRadiusSM,borderRadiusLG:i.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:i.sizeXXS,paddingXS:i.sizeXS,paddingSM:i.sizeSM,padding:i.size,paddingMD:i.sizeMD,paddingLG:i.sizeLG,paddingXL:i.sizeXL,paddingContentHorizontalLG:i.sizeLG,paddingContentVerticalLG:i.sizeMS,paddingContentHorizontal:i.sizeMS,paddingContentVertical:i.sizeSM,paddingContentHorizontalSM:i.size,paddingContentVerticalSM:i.sizeXS,marginXXS:i.sizeXXS,marginXS:i.sizeXS,marginSM:i.sizeSM,margin:i.size,marginMD:i.sizeMD,marginLG:i.sizeLG,marginXL:i.sizeXL,marginXXL:i.sizeXXL,boxShadow:`
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
    `,screenXS:o,screenXSMin:o,screenXSMax:a-1,screenSM:a,screenSMMin:a,screenSMMax:l-1,screenMD:l,screenMDMin:l,screenMDMax:s-1,screenLG:s,screenLGMin:s,screenLGMax:u-1,screenXL:u,screenXLMin:u,screenXLMax:c-1,screenXXL:c,screenXXLMin:c,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new $t("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new $t("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new $t("rgba(0, 0, 0, 0.09)").toRgbString()}
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
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),r)}const wy="anticon",bR=(e,t)=>t||(e?`ant-${e}`:"ant"),da=E.createContext({getPrefixCls:bR,iconPrefixCls:wy}),kR=e=>({boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:e.fontFamily}),CR=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),ER=e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},[`&:active,
  &:hover`]:{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}),AR=(e,t)=>{const{fontFamily:n,fontSize:r}=e,i=`[class^="${t}"], [class*=" ${t}"]`;return{[i]:{fontFamily:n,fontSize:r,boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"},[i]:{boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}}}}};function PR(e,t,n,r){return i=>{const[o,a,l]=Ey(),{getPrefixCls:s,iconPrefixCls:u,csp:c}=E.useContext(da),d=s(),p={theme:o,token:a,hashId:l,nonce:()=>c==null?void 0:c.nonce};return id(Object.assign(Object.assign({},p),{path:["Shared",d]}),()=>[{"&":ER(a)}]),[id(Object.assign(Object.assign({},p),{path:[e,i,u]}),()=>{const{token:S,flush:w}=OR(a),y=typeof n=="function"?n(S):n,g=Object.assign(Object.assign({},y),a[e]),h=`.${i}`,f=by(S,{componentCls:h,prefixCls:i,iconCls:`.${u}`,antCls:`.${d}`},g),v=t(f,{hashId:l,prefixCls:i,rootPrefixCls:d,iconPrefixCls:u,overrideComponentToken:a[e]});return w(e,g),[(r==null?void 0:r.resetStyle)===!1?null:AR(a,i),v]}),l]}}const Sy=typeof CSSINJS_STATISTIC<"u";let wd=!0;function by(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!Sy)return Object.assign.apply(Object,[{}].concat(t));wd=!1;const r={};return t.forEach(i=>{Object.keys(i).forEach(a=>{Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get:()=>i[a]})})}),wd=!0,r}function RR(){}function OR(e){let t,n=e,r=RR;return Sy&&(t=new Set,n=new Proxy(e,{get(i,o){return wd&&t.add(o),i[o]}}),r=(i,o)=>{Array.from(t)}),{token:n,keys:t,flush:r}}const $R=iy(xR),ky={token:Rs,hashed:!0},Cy=Z.createContext(ky);function Ey(){const{token:e,hashed:t,theme:n,components:r}=Z.useContext(Cy),i=`${HP}-${t||""}`,o=n||$R,[a,l]=cA(o,[Rs,e],{salt:i,override:Object.assign({override:e},r),formatToken:SR});return[o,a,t?l:""]}const TR=`-ant-${Date.now()}-${Math.random()}`;function MR(e,t){const n={},r=(a,l)=>{let s=a.clone();return s=(l==null?void 0:l(s))||s,s.toRgbString()},i=(a,l)=>{const s=new $t(a),u=ji(s.toRgbString());n[`${l}-color`]=r(s),n[`${l}-color-disabled`]=u[1],n[`${l}-color-hover`]=u[4],n[`${l}-color-active`]=u[6],n[`${l}-color-outline`]=s.clone().setAlpha(.2).toRgbString(),n[`${l}-color-deprecated-bg`]=u[0],n[`${l}-color-deprecated-border`]=u[2]};if(t.primaryColor){i(t.primaryColor,"primary");const a=new $t(t.primaryColor),l=ji(a.toRgbString());l.forEach((u,c)=>{n[`primary-${c+1}`]=u}),n["primary-color-deprecated-l-35"]=r(a,u=>u.lighten(35)),n["primary-color-deprecated-l-20"]=r(a,u=>u.lighten(20)),n["primary-color-deprecated-t-20"]=r(a,u=>u.tint(20)),n["primary-color-deprecated-t-50"]=r(a,u=>u.tint(50)),n["primary-color-deprecated-f-12"]=r(a,u=>u.setAlpha(u.getAlpha()*.12));const s=new $t(l[0]);n["primary-color-active-deprecated-f-30"]=r(s,u=>u.setAlpha(u.getAlpha()*.3)),n["primary-color-active-deprecated-d-02"]=r(s,u=>u.darken(2))}return t.successColor&&i(t.successColor,"success"),t.warningColor&&i(t.warningColor,"warning"),t.errorColor&&i(t.errorColor,"error"),t.infoColor&&i(t.infoColor,"info"),`
  :root {
    ${Object.keys(n).map(a=>`--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()}function LR(e,t){const n=MR(e,t);bs()&&jl(n,`${TR}-dynamic-theme`)}const Sd=E.createContext(!1),FR=e=>{let{children:t,disabled:n}=e;const r=E.useContext(Sd);return E.createElement(Sd.Provider,{value:n??r},t)},NR=Sd,bd=E.createContext(void 0),IR=e=>{let{children:t,size:n}=e;const r=E.useContext(bd);return E.createElement(bd.Provider,{value:n||r},t)},zf=bd;function DR(){const e=E.useContext(NR),t=E.useContext(zf);return{componentDisabled:e,componentSize:t}}function _R(e,t){const n=e||{},r=n.inherit===!1||!t?ky:t;return N0(()=>{if(!e)return t;const o=Object.assign({},r.components);return Object.keys(e.components||{}).forEach(a=>{o[a]=Object.assign(Object.assign({},o[a]),e.components[a])}),Object.assign(Object.assign(Object.assign({},r),n),{token:Object.assign(Object.assign({},r.token),n.token),components:o})},[n,r],(o,a)=>o.some((l,s)=>{const u=a[s];return!J2(l,u,!0)}))}const zR=(e,t)=>{const[n,r]=Ey();return id({theme:n,token:r,hashId:"",path:["ant-design-icons",e],nonce:()=>t==null?void 0:t.nonce},()=>[{[`.${e}`]:Object.assign(Object.assign({},CR()),{[`.${e} .${e}-icon`]:{display:"block"}})}])},jR=zR;var UR=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const BR=["getTargetContainer","getPopupContainer","renderEmpty","pageHeader","input","pagination","form","select"],HR="ant";let Ay;function VR(){return Ay||HR}const WR=e=>{let{prefixCls:t,iconPrefixCls:n,theme:r}=e;t!==void 0&&(Ay=t),r&&LR(VR(),r)},GR=e=>{const{children:t,csp:n,autoInsertSpaceInButton:r,form:i,locale:o,componentSize:a,direction:l,space:s,virtual:u,dropdownMatchSelectWidth:c,legacyLocale:d,parentContext:p,iconPrefixCls:S,theme:w,componentDisabled:y}=e,g=E.useCallback((R,T)=>{const{prefixCls:U}=e;if(T)return T;const Q=U||p.getPrefixCls("");return R?`${Q}-${R}`:Q},[p.getPrefixCls,e.prefixCls]),h=S||p.iconPrefixCls||wy,f=h!==p.iconPrefixCls,v=n||p.csp,b=jR(h,v),k=_R(w,p.theme),A={csp:v,autoInsertSpaceInButton:r,locale:o||d,direction:l,space:s,virtual:u,dropdownMatchSelectWidth:c,getPrefixCls:g,iconPrefixCls:h,theme:k},P=Object.assign({},p);Object.keys(A).forEach(R=>{A[R]!==void 0&&(P[R]=A[R])}),BR.forEach(R=>{const T=e[R];T&&(P[R]=T)});const $=N0(()=>P,P,(R,T)=>{const U=Object.keys(R),Q=Object.keys(T);return U.length!==Q.length||U.some(q=>R[q]!==T[q])}),z=E.useMemo(()=>({prefixCls:h,csp:v}),[h,v]);let I=f?b(t):t;const Y=E.useMemo(()=>{var R,T,U;return Ro({},((R=_f.Form)===null||R===void 0?void 0:R.defaultValidateMessages)||{},((U=(T=$.locale)===null||T===void 0?void 0:T.Form)===null||U===void 0?void 0:U.defaultValidateMessages)||{},(i==null?void 0:i.validateMessages)||{})},[$,i==null?void 0:i.validateMessages]);Object.keys(Y).length>0&&(I=E.createElement(py,{validateMessages:Y},t)),o&&(I=E.createElement(BP,{locale:o,_ANT_MARK__:jP},I)),(h||v)&&(I=E.createElement(IA.Provider,{value:z},I)),a&&(I=E.createElement(IR,{size:a},I));const O=E.useMemo(()=>{const R=k||{},{algorithm:T,token:U}=R,Q=UR(R,["algorithm","token"]),q=T&&(!Array.isArray(T)||T.length>0)?iy(T):void 0;return Object.assign(Object.assign({},Q),{theme:q,token:Object.assign(Object.assign({},Rs),U)})},[k]);return w&&(I=E.createElement(Cy.Provider,{value:O},I)),y!==void 0&&(I=E.createElement(FR,{disabled:y},I)),E.createElement(da.Provider,{value:$},I)},fa=e=>{const t=E.useContext(da),n=E.useContext(my);return E.createElement(GR,Object.assign({parentContext:t,legacyLocale:n},e))};fa.ConfigContext=da;fa.SizeContext=zf;fa.config=WR;fa.useConfig=DR;Object.defineProperty(fa,"SizeContext",{get:()=>zf});var JR={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};function qR(e,t,n){var r=n||{},i=r.noTrailing,o=i===void 0?!1:i,a=r.noLeading,l=a===void 0?!1:a,s=r.debounceMode,u=s===void 0?void 0:s,c,d=!1,p=0;function S(){c&&clearTimeout(c)}function w(g){var h=g||{},f=h.upcomingOnly,v=f===void 0?!1:f;S(),d=!v}function y(){for(var g=arguments.length,h=new Array(g),f=0;f<g;f++)h[f]=arguments[f];var v=this,b=Date.now()-p;if(d)return;function k(){p=Date.now(),t.apply(v,h)}function A(){c=void 0}!l&&u&&!c&&k(),S(),u===void 0&&b>e?l?(p=Date.now(),o||(c=setTimeout(u?A:k,e))):k():o!==!0&&(c=setTimeout(u?A:k,u===void 0?e-b:e))}return y.cancel=w,y}function QR(e,t,n){var r=n||{},i=r.atBegin,o=i===void 0?!1:i;return qR(e,t,{debounceMode:o!==!1})}function kd(e,t,n){return Math.max(t,Math.min(e,n))}var Ei=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},Bl=function(t){for(var n=[],r=Py(t),i=Ry(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n},Py=function(t){return t.currentSlide-XR(t)},Ry=function(t){return t.currentSlide+YR(t)},XR=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},YR=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},Cd=function(t){return t&&t.offsetWidth||0},jf=function(t){return t&&t.offsetHeight||0},Oy=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,a;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"},Os=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n},Nu=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r},KR=function(t){var n=Z.Children.count(t.children),r=t.listRef,i=Math.ceil(Cd(r)),o=t.trackRef&&t.trackRef.node,a=Math.ceil(Cd(o)),l;if(t.vertical)l=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),l=Math.ceil((i-s)/t.slidesToShow)}var u=r&&jf(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var p=t.lazyLoadedList||[],S=Bl(L(L({},t),{},{currentSlide:d,lazyLoadedList:p}));p=p.concat(S);var w={slideCount:n,slideWidth:l,listWidth:i,trackWidth:a,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:p};return t.autoplaying===null&&t.autoplay&&(w.autoplaying="playing"),w},ZR=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,a=t.index,l=t.slideCount,s=t.lazyLoad,u=t.currentSlide,c=t.centerMode,d=t.slidesToScroll,p=t.slidesToShow,S=t.useCSS,w=t.lazyLoadedList;if(n&&r)return{};var y=a,g,h,f,v={},b={},k=o?a:kd(a,0,l-1);if(i){if(!o&&(a<0||a>=l))return{};a<0?y=a+l:a>=l&&(y=a-l),s&&w.indexOf(y)<0&&(w=w.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:w,targetSlide:y},b={animating:!1,targetSlide:y}}else g=y,y<0?(g=y+l,o?l%d!==0&&(g=l-l%d):g=0):!Os(t)&&y>u?y=g=u:c&&y>=l?(y=o?l:l-1,g=o?0:l-1):y>=l&&(g=y-l,o?l%d!==0&&(g=0):g=l-p),!o&&y+p>=l&&(g=l-p),h=Zo(L(L({},t),{},{slideIndex:y})),f=Zo(L(L({},t),{},{slideIndex:g})),o||(h===f&&(y=g),h=f),s&&(w=w.concat(Bl(L(L({},t),{},{currentSlide:y})))),S?(v={animating:!0,currentSlide:g,trackStyle:$y(L(L({},t),{},{left:h})),lazyLoadedList:w,targetSlide:k},b={animating:!1,currentSlide:g,trackStyle:Ko(L(L({},t),{},{left:f})),swipeLeft:null,targetSlide:k}):v={currentSlide:g,trackStyle:Ko(L(L({},t),{},{left:f})),lazyLoadedList:w,targetSlide:k};return{state:v,nextState:b}},eO=function(t,n){var r,i,o,a,l,s=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,d=t.currentSlide,p=t.targetSlide,S=t.lazyLoad,w=t.infinite;if(a=c%s!==0,r=a?0:(c-d)%s,n.message==="previous")o=r===0?s:u-r,l=d-o,S&&!w&&(i=d-o,l=i===-1?c-1:i),w||(l=p-s);else if(n.message==="next")o=r===0?s:r,l=d+o,S&&!w&&(l=(d+s)%c+r),w||(l=p+s);else if(n.message==="dots")l=n.index*n.slidesToScroll;else if(n.message==="children"){if(l=n.index,w){var y=lO(L(L({},t),{},{targetSlide:l}));l>n.currentSlide&&y==="left"?l=l-c:l<n.currentSlide&&y==="right"&&(l=l+c)}}else n.message==="index"&&(l=Number(n.index));return l},tO=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""},nO=function(t,n,r){return t.target.tagName==="IMG"&&Ei(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}},rO=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,a=n.swipeToSlide,l=n.verticalSwiping,s=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,p=n.onEdge,S=n.swiped,w=n.swiping,y=n.slideCount,g=n.slidesToScroll,h=n.infinite,f=n.touchObject,v=n.swipeEvent,b=n.listHeight,k=n.listWidth;if(!r){if(i)return Ei(t);o&&a&&l&&Ei(t);var A,P={},$=Zo(n);f.curX=t.touches?t.touches[0].pageX:t.clientX,f.curY=t.touches?t.touches[0].pageY:t.clientY,f.swipeLength=Math.round(Math.sqrt(Math.pow(f.curX-f.startX,2)));var z=Math.round(Math.sqrt(Math.pow(f.curY-f.startY,2)));if(!l&&!w&&z>10)return{scrolling:!0};l&&(f.swipeLength=z);var I=(s?-1:1)*(f.curX>f.startX?1:-1);l&&(I=f.curY>f.startY?1:-1);var Y=Math.ceil(y/g),O=Oy(n.touchObject,l),R=f.swipeLength;return h||(u===0&&(O==="right"||O==="down")||u+1>=Y&&(O==="left"||O==="up")||!Os(n)&&(O==="left"||O==="up"))&&(R=f.swipeLength*c,d===!1&&p&&(p(O),P.edgeDragged=!0)),!S&&v&&(v(O),P.swiped=!0),o?A=$+R*(b/k)*I:s?A=$-R*I:A=$+R*I,l&&(A=$+R*I),P=L(L({},P),{},{touchObject:f,swipeLeft:A,trackStyle:Ko(L(L({},n),{},{left:A}))}),Math.abs(f.curX-f.startX)<Math.abs(f.curY-f.startY)*.8||f.swipeLength>10&&(P.swiping=!0,Ei(t)),P}},iO=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,a=n.listWidth,l=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,p=n.onSwipe,S=n.targetSlide,w=n.currentSlide,y=n.infinite;if(!r)return i&&Ei(t),{};var g=s?u/l:a/l,h=Oy(o,s),f={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return f;if(o.swipeLength>g){Ei(t),p&&p(h);var v,b,k=y?w:S;switch(h){case"left":case"up":b=k+zm(n),v=c?_m(n,b):b,f.currentDirection=0;break;case"right":case"down":b=k-zm(n),v=c?_m(n,b):b,f.currentDirection=1;break;default:v=k}f.triggerSlideHandler=v}else{var A=Zo(n);f.trackStyle=$y(L(L({},n),{},{left:A}))}return f},oO=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o},_m=function(t,n){var r=oO(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n},zm=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+jf(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+Cd(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var a=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,l=Math.abs(r.dataset.index-a)||1;return l}else return t.slidesToScroll},Uf=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)},Ko=function(t){Uf(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=aO(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=L(L({},o),{},{WebkitTransform:a,transform:l,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o},$y=function(t){Uf(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Ko(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},Zo=function(t){if(t.unslick)return 0;Uf(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,a=t.slideCount,l=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,d=t.variableWidth,p=t.slideHeight,S=t.fade,w=t.vertical,y=0,g,h,f=0;if(S||t.slideCount===1)return 0;var v=0;if(i?(v=-On(t),a%s!==0&&n+s>a&&(v=-(n>a?l-(n-a):a%s)),o&&(v+=parseInt(l/2))):(a%s!==0&&n+s>a&&(v=l-a%s),o&&(v=parseInt(l/2))),y=v*u,f=v*p,w?g=n*p*-1+f:g=n*u*-1+y,d===!0){var b,k=r&&r.node;if(b=n+On(t),h=k&&k.childNodes[b],g=h?h.offsetLeft*-1:0,o===!0){b=i?n+On(t):n,h=k&&k.children[b],g=0;for(var A=0;A<b;A++)g-=k&&k.children[A]&&k.children[A].offsetWidth;g-=parseInt(t.centerPadding),g+=h&&(c-h.offsetWidth)/2}}return g},On=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},ll=function(t){return t.unslick||!t.infinite?0:t.slideCount},aO=function(t){return t.slideCount===1?1:On(t)+t.slideCount+ll(t)},lO=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+sO(t)?"left":"right":t.targetSlide<t.currentSlide-uO(t)?"right":"left"},sO=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),i&&n%2===0&&(a+=1),a}return i?0:n-1},uO=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!i&&n%2===0&&(a+=1),a}return i?n-1:0},jm=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},Iu=function(t){var n,r,i,o,a;t.rtl?a=t.slideCount-1-t.index:a=t.index,i=a<0||a>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(a-t.currentSlide)%t.slideCount===0,a>t.currentSlide-o-1&&a<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=a&&a<t.currentSlide+t.slidesToShow;var l;t.targetSlide<0?l=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?l=t.targetSlide-t.slideCount:l=t.targetSlide;var s=a===l;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},cO=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Du=function(t,n){return t.key+"-"+n},dO=function(t){var n,r=[],i=[],o=[],a=Z.Children.count(t.children),l=Py(t),s=Ry(t);return Z.Children.forEach(t.children,function(u,c){var d,p={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?d=u:d=Z.createElement("div",null);var S=cO(L(L({},t),{},{index:c})),w=d.props.className||"",y=Iu(L(L({},t),{},{index:c}));if(r.push(Z.cloneElement(d,{key:"original"+Du(d,c),"data-index":c,className:Mn(y,w),tabIndex:"-1","aria-hidden":!y["slick-active"],style:L(L({outline:"none"},d.props.style||{}),S),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(p)}})),t.infinite&&t.fade===!1){var g=a-c;g<=On(t)&&a!==t.slidesToShow&&(n=-g,n>=l&&(d=u),y=Iu(L(L({},t),{},{index:n})),i.push(Z.cloneElement(d,{key:"precloned"+Du(d,n),"data-index":n,tabIndex:"-1",className:Mn(y,w),"aria-hidden":!y["slick-active"],style:L(L({},d.props.style||{}),S),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(p)}}))),a!==t.slidesToShow&&(n=a+c,n<s&&(d=u),y=Iu(L(L({},t),{},{index:n})),o.push(Z.cloneElement(d,{key:"postcloned"+Du(d,n),"data-index":n,tabIndex:"-1",className:Mn(y,w),"aria-hidden":!y["slick-active"],style:L(L({},d.props.style||{}),S),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(p)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},fO=function(e){Vr(n,e);var t=Wr(n);function n(){var r;Jt(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),ee(ue(r),"node",null),ee(ue(r),"handleRef",function(l){r.node=l}),r}return qt(n,[{key:"render",value:function(){var i=dO(this.props),o=this.props,a=o.onMouseEnter,l=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:a,onMouseOver:l,onMouseLeave:s};return Z.createElement("div",cn({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Z.PureComponent),pO=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},hO=function(e){Vr(n,e);var t=Wr(n);function n(){return Jt(this,n),t.apply(this,arguments)}return qt(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,a=i.onMouseOver,l=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,p=i.currentSlide,S=pO({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:s}),w={onMouseEnter:o,onMouseOver:a,onMouseLeave:l},y=[],g=0;g<S;g++){var h=(g+1)*u-1,f=s?h:kd(h,0,d-1),v=f-(u-1),b=s?v:kd(v,0,d-1),k=Mn({"slick-active":s?p>=b&&p<=f:p===b}),A={message:"dots",index:g,slidesToScroll:u,currentSlide:p},P=this.clickHandler.bind(this,A);y=y.concat(Z.createElement("li",{key:g,className:k},Z.cloneElement(this.props.customPaging(g),{onClick:P})))}return Z.cloneElement(this.props.appendDots(y),L({className:this.props.dotsClass},w))}}]),n}(Z.PureComponent),mO=function(e){Vr(n,e);var t=Wr(n);function n(){return Jt(this,n),t.apply(this,arguments)}return qt(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:Mn(i),style:{display:"block"},onClick:o},l={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=Z.cloneElement(this.props.prevArrow,L(L({},a),l)):s=Z.createElement("button",cn({key:"0",type:"button"},a)," ","Previous"),s}}]),n}(Z.PureComponent),gO=function(e){Vr(n,e);var t=Wr(n);function n(){return Jt(this,n),t.apply(this,arguments)}return qt(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});Os(this.props)||(i["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:Mn(i),style:{display:"block"},onClick:o},l={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=Z.cloneElement(this.props.nextArrow,L(L({},a),l)):s=Z.createElement("button",cn({key:"1",type:"button"},a)," ","Next"),s}}]),n}(Z.PureComponent),vO=["animating"],yO=function(e){Vr(n,e);var t=Wr(n);function n(r){var i;Jt(this,n),i=t.call(this,r),ee(ue(i),"listRefHandler",function(a){return i.list=a}),ee(ue(i),"trackRefHandler",function(a){return i.track=a}),ee(ue(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var a=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=jf(a)+"px"}}),ee(ue(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var a=Bl(L(L({},i.props),i.state));a.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}var l=L({listRef:i.list,trackRef:i.track},i.props);i.updateState(l,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("playing")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new H2(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),ee(ue(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(a){return clearTimeout(a)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),ee(ue(i),"componentDidUpdate",function(a){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var l=Bl(L(L({},i.props),i.state));l.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}i.adaptHeight();var s=L(L({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(a);u&&i.updateState(s,u,function(){i.state.currentSlide>=Z.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Z.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),(a.autoplay!==i.props.autoplay||a.autoplaySpeed!==i.props.autoplaySpeed)&&(!a.autoplay&&i.props.autoplay?i.autoPlay("playing"):i.props.autoplay?i.autoPlay("update"):i.pause("paused"))})}),ee(ue(i),"onWindowResized",function(a){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=QR(50,function(){return i.resizeWindow(a)}),i.debouncedResize()}),ee(ue(i),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,l=!!(i.track&&i.track.node);if(l){var s=L(L({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,a,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),ee(ue(i),"updateState",function(a,l,s){var u=KR(a);a=L(L(L({},a),u),{},{slideIndex:u.currentSlide});var c=Zo(a);a=L(L({},a),{},{left:c});var d=Ko(a);(l||Z.Children.count(i.props.children)!==Z.Children.count(a.children))&&(u.trackStyle=d),i.setState(u,s)}),ee(ue(i),"ssrInit",function(){if(i.props.variableWidth){var a=0,l=0,s=[],u=On(L(L(L({},i.props),i.state),{},{slideCount:i.props.children.length})),c=ll(L(L(L({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(P){s.push(P.props.style.width),a+=P.props.style.width});for(var d=0;d<u;d++)l+=s[s.length-1-d],a+=s[s.length-1-d];for(var p=0;p<c;p++)a+=s[p];for(var S=0;S<i.state.currentSlide;S++)l+=s[S];var w={width:a+"px",left:-l+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");w.left="calc(".concat(w.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:w}}var g=Z.Children.count(i.props.children),h=L(L(L({},i.props),i.state),{},{slideCount:g}),f=On(h)+ll(h)+g,v=100/i.props.slidesToShow*f,b=100/f,k=-b*(On(h)+i.state.currentSlide)*v/100;i.props.centerMode&&(k+=(100-b*v/100)/2);var A={width:v+"%",left:k+"%"};return{slideWidth:b+"%",trackStyle:A}}),ee(ue(i),"checkImagesLoad",function(){var a=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],l=a.length,s=0;Array.prototype.forEach.call(a,function(u){var c=function(){return++s&&s>=l&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(p){d(p),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),ee(ue(i),"progressiveLazyLoad",function(){for(var a=[],l=L(L({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+ll(l);s++)if(i.state.lazyLoadedList.indexOf(s)<0){a.push(s);break}for(var u=i.state.currentSlide-1;u>=-On(l);u--)if(i.state.lazyLoadedList.indexOf(u)<0){a.push(u);break}a.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),ee(ue(i),"slideHandler",function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,c=s.beforeChange,d=s.onLazyLoad,p=s.speed,S=s.afterChange,w=i.state.currentSlide,y=ZR(L(L(L({index:a},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!l})),g=y.state,h=y.nextState;if(g){c&&c(w,g.currentSlide);var f=g.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});d&&f.length>0&&d(f),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),S&&S(w),delete i.animationEndCallback),i.setState(g,function(){u&&i.asNavForIndex!==a&&(i.asNavForIndex=a,u.innerSlider.slideHandler(a)),h&&(i.animationEndCallback=setTimeout(function(){var v=h.animating,b=Ss(h,vO);i.setState(b,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),S&&S(g.currentSlide),delete i.animationEndCallback})},p))})}}),ee(ue(i),"changeSlide",function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=L(L({},i.props),i.state),u=eO(s,a);if(!(u!==0&&!u)&&(l===!0?i.slideHandler(u,l):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),ee(ue(i),"clickHandler",function(a){i.clickable===!1&&(a.stopPropagation(),a.preventDefault()),i.clickable=!0}),ee(ue(i),"keyHandler",function(a){var l=tO(a,i.props.accessibility,i.props.rtl);l!==""&&i.changeSlide({message:l})}),ee(ue(i),"selectHandler",function(a){i.changeSlide(a)}),ee(ue(i),"disableBodyScroll",function(){var a=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=a}),ee(ue(i),"enableBodyScroll",function(){window.ontouchmove=null}),ee(ue(i),"swipeStart",function(a){i.props.verticalSwiping&&i.disableBodyScroll();var l=nO(a,i.props.swipe,i.props.draggable);l!==""&&i.setState(l)}),ee(ue(i),"swipeMove",function(a){var l=rO(a,L(L(L({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));l&&(l.swiping&&(i.clickable=!1),i.setState(l))}),ee(ue(i),"swipeEnd",function(a){var l=iO(a,L(L(L({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(l){var s=l.triggerSlideHandler;delete l.triggerSlideHandler,i.setState(l),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),ee(ue(i),"touchEnd",function(a){i.swipeEnd(a),i.clickable=!0}),ee(ue(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),ee(ue(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),ee(ue(i),"slickGoTo",function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:a,currentSlide:i.state.currentSlide},l)},0))}),ee(ue(i),"play",function(){var a;if(i.props.rtl)a=i.state.currentSlide-i.props.slidesToScroll;else if(Os(L(L({},i.props),i.state)))a=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(a)}),ee(ue(i),"autoPlay",function(a){i.autoplayTimer&&clearInterval(i.autoplayTimer);var l=i.state.autoplaying;if(a==="update"){if(l==="hovered"||l==="focused"||l==="paused")return}else if(a==="leave"){if(l==="paused"||l==="focused")return}else if(a==="blur"&&(l==="paused"||l==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),ee(ue(i),"pause",function(a){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var l=i.state.autoplaying;a==="paused"?i.setState({autoplaying:"paused"}):a==="focused"?(l==="hovered"||l==="playing")&&i.setState({autoplaying:"focused"}):l==="playing"&&i.setState({autoplaying:"hovered"})}),ee(ue(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(ue(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(ue(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(ue(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(ue(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),ee(ue(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),ee(ue(i),"render",function(){var a=Mn("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),l=L(L({},i.props),i.state),s=Nu(l,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=L(L({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=Nu(l,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),p=i.props.pauseOnDotsHover;d=L(L({},d),{},{clickHandler:i.changeSlide,onMouseEnter:p?i.onDotsLeave:null,onMouseOver:p?i.onDotsOver:null,onMouseLeave:p?i.onDotsLeave:null}),c=Z.createElement(hO,d)}var S,w,y=Nu(l,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(S=Z.createElement(mO,y),w=Z.createElement(gO,y));var g=null;i.props.vertical&&(g={height:i.state.listHeight});var h=null;i.props.vertical===!1?i.props.centerMode===!0&&(h={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(h={padding:i.props.centerPadding+" 0px"});var f=L(L({},g),h),v=i.props.touchMove,b={className:"slick-list",style:f,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:a,dir:"ltr",style:i.props.style};return i.props.unslick&&(b={className:"slick-list"},k={className:a}),Z.createElement("div",k,i.props.unslick?"":S,Z.createElement("div",cn({ref:i.listRefHandler},b),Z.createElement(fO,cn({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":w,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=L(L({},JR),{},{currentSlide:i.props.initialSlide,slideCount:Z.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=L(L({},i.state),o),i}return qt(n,[{key:"didPropsChange",value:function(i){for(var o=!1,a=0,l=Object.keys(this.props);a<l.length;a++){var s=l[a];if(!i.hasOwnProperty(s)){o=!0;break}if(!(We(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Z.Children.count(this.props.children)!==Z.Children.count(i.children)}}]),n}(Z.Component),xO=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},wO=xO,SO=wO,bO=function(e){var t=/[height|width]$/;return t.test(e)},Um=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=SO(r),bO(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},kO=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Um(n),r<e.length-1&&(t+=", ")}),t):Um(e)},_u=kO,Bm={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(t){return Z.createElement("ul",{style:{display:"block"}},t)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(t){return Z.createElement("button",null,t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},CO=function(e){Vr(n,e);var t=Wr(n);function n(r){var i;return Jt(this,n),i=t.call(this,r),ee(ue(i),"innerSliderRefHandler",function(o){return i.innerSlider=o}),ee(ue(i),"slickPrev",function(){return i.innerSlider.slickPrev()}),ee(ue(i),"slickNext",function(){return i.innerSlider.slickNext()}),ee(ue(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return i.innerSlider.slickGoTo(o,a)}),ee(ue(i),"slickPause",function(){return i.innerSlider.pause("paused")}),ee(ue(i),"slickPlay",function(){return i.innerSlider.autoPlay("play")}),i.state={breakpoint:null},i._responsiveMediaHandlers=[],i}return qt(n,[{key:"media",value:function(i,o){var a=window.matchMedia(i),l=function(u){var c=u.matches;c&&o()};a.addListener(l),l(a),this._responsiveMediaHandlers.push({mql:a,query:i,listener:l})}},{key:"componentDidMount",value:function(){var i=this;if(this.props.responsive){var o=this.props.responsive.map(function(l){return l.breakpoint});o.sort(function(l,s){return l-s}),o.forEach(function(l,s){var u;s===0?u=_u({minWidth:0,maxWidth:l}):u=_u({minWidth:o[s-1]+1,maxWidth:l}),jm()&&i.media(u,function(){i.setState({breakpoint:l})})});var a=_u({minWidth:o.slice(-1)[0]});jm()&&this.media(a,function(){i.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(i){i.mql.removeListener(i.listener)})}},{key:"render",value:function(){var i=this,o,a;this.state.breakpoint?(a=this.props.responsive.filter(function(g){return g.breakpoint===i.state.breakpoint}),o=a[0].settings==="unslick"?"unslick":L(L(L({},Bm),this.props),a[0].settings)):o=L(L({},Bm),this.props),o.centerMode&&(o.slidesToScroll>1,o.slidesToScroll=1),o.fade&&(o.slidesToShow>1,o.slidesToScroll>1,o.slidesToShow=1,o.slidesToScroll=1);var l=Z.Children.toArray(this.props.children);l=l.filter(function(g){return typeof g=="string"?!!g.trim():!!g}),o.variableWidth&&(o.rows>1||o.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),o.variableWidth=!1);for(var s=[],u=null,c=0;c<l.length;c+=o.rows*o.slidesPerRow){for(var d=[],p=c;p<c+o.rows*o.slidesPerRow;p+=o.slidesPerRow){for(var S=[],w=p;w<p+o.slidesPerRow&&(o.variableWidth&&l[w].props.style&&(u=l[w].props.style.width),!(w>=l.length));w+=1)S.push(Z.cloneElement(l[w],{key:100*c+10*p+w,tabIndex:-1,style:{width:"".concat(100/o.slidesPerRow,"%"),display:"inline-block"}}));d.push(Z.createElement("div",{key:10*c+p},S))}o.variableWidth?s.push(Z.createElement("div",{key:c,style:{width:u}},d)):s.push(Z.createElement("div",{key:c},d))}if(o==="unslick"){var y="regular slider "+(this.props.className||"");return Z.createElement("div",{className:y},l)}else s.length<=o.slidesToShow&&(o.unslick=!0);return Z.createElement(yO,cn({style:this.props.style,ref:this.innerSliderRefHandler},o),s)}}]),n}(Z.Component);const EO=e=>{const{componentCls:t,antCls:n,carouselArrowSize:r,carouselDotOffset:i,marginXXS:o}=e,a=-r*1.25,l=o;return{[t]:Object.assign(Object.assign({},kR(e)),{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":{pointerEvents:"none",[`input${n}-radio-input, input${n}-checkbox-input`]:{visibility:"hidden"},"&.slick-active":{pointerEvents:"auto",[`input${n}-radio-input, input${n}-checkbox-input`]:{visibility:"visible"}},"> div > div":{verticalAlign:"bottom"}}},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"},".slick-arrow.slick-hidden":{display:"none"},".slick-prev, .slick-next":{position:"absolute",top:"50%",display:"block",width:r,height:r,marginTop:-r/2,padding:0,color:"transparent",fontSize:0,lineHeight:0,background:"transparent",border:0,outline:"none",cursor:"pointer","&:hover, &:focus":{color:"transparent",background:"transparent",outline:"none","&::before":{opacity:1}},"&.slick-disabled::before":{opacity:.25}},".slick-prev":{insetInlineStart:a,"&::before":{content:'"←"'}},".slick-next":{insetInlineEnd:a,"&::before":{content:'"→"'}},".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,listStyle:"none","&-bottom":{bottom:i},"&-top":{top:i,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:e.dotWidth,height:e.dotHeight,marginInline:l,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:`all ${e.motionDurationSlow}`,button:{position:"relative",display:"block",width:"100%",height:e.dotHeight,padding:0,color:"transparent",fontSize:0,background:e.colorBgContainer,border:0,borderRadius:1,outline:"none",cursor:"pointer",opacity:.3,transition:`all ${e.motionDurationSlow}`,"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:-l,content:'""'}},"&.slick-active":{width:e.dotWidthActive,"& button":{background:e.colorBgContainer,opacity:1},"&: hover, &:focus":{opacity:1}}}}})}},AO=e=>{const{componentCls:t,carouselDotOffset:n,marginXXS:r}=e,i={width:e.dotHeight,height:e.dotWidth};return{[`${t}-vertical`]:{".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:e.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:n},"&-right":{insetInlineEnd:n,insetInlineStart:"auto"},li:Object.assign(Object.assign({},i),{margin:`${r}px 0`,verticalAlign:"baseline",button:i,"&.slick-active":Object.assign(Object.assign({},i),{button:i})})}}}},PO=e=>{const{componentCls:t}=e;return[{[`${t}-rtl`]:{direction:"rtl",".slick-dots":{[`${t}-rtl&`]:{flexDirection:"row-reverse"}}}},{[`${t}-vertical`]:{".slick-dots":{[`${t}-rtl&`]:{flexDirection:"column"}}}}]},RO=PR("Carousel",e=>{const{controlHeightLG:t,controlHeightSM:n}=e,r=by(e,{carouselArrowSize:t/2,carouselDotOffset:n/2});return[EO(r),AO(r),PO(r)]},{dotWidth:16,dotHeight:3,dotWidthActive:24});var OO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const $O=E.forwardRef((e,t)=>{var{dots:n=!0,arrows:r=!1,draggable:i=!1,waitForAnimate:o=!1,dotPosition:a="bottom",vertical:l=a==="left"||a==="right",rootClassName:s}=e,u=OO(e,["dots","arrows","draggable","waitForAnimate","dotPosition","vertical","rootClassName"]);const{getPrefixCls:c,direction:d}=E.useContext(da),p=E.useRef(),S=function(P){let $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;p.current.slickGoTo(P,$)};E.useImperativeHandle(t,()=>({goTo:S,autoPlay:p.current.innerSlider.autoPlay,innerSlider:p.current.innerSlider,prev:p.current.slickPrev,next:p.current.slickNext}),[p.current]);const w=E.useRef(E.Children.count(u.children));E.useEffect(()=>{w.current!==E.Children.count(u.children)&&(S(u.initialSlide||0,!1),w.current=E.Children.count(u.children))},[u.children]);const y=Object.assign({vertical:l},u);y.effect==="fade"&&(y.fade=!0);const g=c("carousel",y.prefixCls),h="slick-dots",f=!!n,v=Mn(h,`${h}-${a}`,typeof n=="boolean"?!1:n==null?void 0:n.className),[b,k]=RO(g),A=Mn(g,{[`${g}-rtl`]:d==="rtl",[`${g}-vertical`]:y.vertical},k,s);return b(E.createElement("div",{className:A},E.createElement(CO,Object.assign({ref:p},y,{dots:f,dotsClass:v,arrows:r,draggable:i,waitForAnimate:o}))))}),TO=$O,MO="/Nanofab-Project/assets/institutoMaua-5bbada10.png",LO=({})=>N(m2,{children:[x(Wt,{}),x(g2,{children:N(TO,{autoplay:!0,children:[x(Na,{children:x(Ia,{src:MO})}),x(Na,{children:x(Ia,{})}),x(Na,{children:x(Ia,{})}),x(Na,{children:x(Ia,{})})]})}),x(Gt,{})]}),FO="/Nanofab-Project/assets/background2-7f5efefe.svg",NO=C.div`
  background-image: url(${FO});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  @media screen and (max-width: ${m.mobile}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${m.largeMobile}) and (max-width: ${m.tablet}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${m.tablet}) and (max-width: 1919px) {    
    background-size: 100% 1800px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${m.largeDesktop}) and (max-width: ${m.extraLargeDesktop}) {    
    background-size: 100% 2800px;
    background-repeat: repeat;
  }
`,IO=Ab([{path:"/",element:x(_k,{})},{path:"/equipe",element:x(nC,{})},{path:"/andamento",element:x(SC,{})},{path:"/submissao_projetos",element:x(KC,{})},{path:"/publicacoes",element:x(xE,{})},{path:"/parcerias",element:x(_E,{})},{path:"/login",element:x(YE,{})},{path:"/login/create_Account",element:x(i2,{})},{path:"/login/Redefine_Password",element:x(f2,{})},{path:"/equipamentos_infraestrutura",element:x(LO,{})},{path:"/programas_especiais",element:x(h2,{})},{path:"*",element:x(BE,{})}],{basename:"/Nanofab-Project"}),DO=({})=>x(NO,{children:x(vb,{router:IO})}),_O=iS`
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
`;function zO(){return N(lS,{children:[x(_O,{}),x(DO,{})]})}ju.createRoot(document.getElementById("root")).render(x(Z.StrictMode,{children:x(zO,{})}));
