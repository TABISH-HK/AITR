(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function lS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u0={exports:{}},Ac={},d0={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),cS=Symbol.for("react.portal"),uS=Symbol.for("react.fragment"),dS=Symbol.for("react.strict_mode"),fS=Symbol.for("react.profiler"),hS=Symbol.for("react.provider"),pS=Symbol.for("react.context"),mS=Symbol.for("react.forward_ref"),gS=Symbol.for("react.suspense"),vS=Symbol.for("react.memo"),xS=Symbol.for("react.lazy"),Ap=Symbol.iterator;function _S(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var f0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h0=Object.assign,p0={};function ra(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||f0}ra.prototype.isReactComponent={};ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m0(){}m0.prototype=ra.prototype;function Zf(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||f0}var Jf=Zf.prototype=new m0;Jf.constructor=Zf;h0(Jf,ra.prototype);Jf.isPureReactComponent=!0;var Cp=Array.isArray,g0=Object.prototype.hasOwnProperty,Qf={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)g0.call(e,i)&&!v0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:xo,type:t,key:s,ref:a,props:r,_owner:Qf.current}}function SS(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function yS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pp=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yS(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case xo:case cS:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Jc(a,0):i,Cp(r)?(n="",t!=null&&(n=t.replace(Pp,"$&/")+"/"),Ml(r,e,n,"",function(c){return c})):r!=null&&(eh(r)&&(r=SS(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Pp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Cp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Jc(s,o);a+=Ml(s,e,n,l,r)}else if(l=_S(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Jc(s,o++),a+=Ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Io(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ES(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tn={current:null},wl={transition:null},MS={ReactCurrentDispatcher:Tn,ReactCurrentBatchConfig:wl,ReactCurrentOwner:Qf};function _0(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Io,forEach:function(t,e,n){Io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Io(t,function(){e++}),e},toArray:function(t){return Io(t,function(e){return e})||[]},only:function(t){if(!eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=ra;Ze.Fragment=uS;Ze.Profiler=fS;Ze.PureComponent=Zf;Ze.StrictMode=dS;Ze.Suspense=gS;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS;Ze.act=_0;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=h0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)g0.call(e,l)&&!v0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:xo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(t){return t={$$typeof:pS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hS,_context:t},t.Consumer=t};Ze.createElement=x0;Ze.createFactory=function(t){var e=x0.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:mS,render:t}};Ze.isValidElement=eh;Ze.lazy=function(t){return{$$typeof:xS,_payload:{_status:-1,_result:t},_init:ES}};Ze.memo=function(t,e){return{$$typeof:vS,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};Ze.unstable_act=_0;Ze.useCallback=function(t,e){return Tn.current.useCallback(t,e)};Ze.useContext=function(t){return Tn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return Tn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return Tn.current.useEffect(t,e)};Ze.useId=function(){return Tn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return Tn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return Tn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return Tn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return Tn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return Tn.current.useReducer(t,e,n)};Ze.useRef=function(t){return Tn.current.useRef(t)};Ze.useState=function(t){return Tn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return Tn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return Tn.current.useTransition()};Ze.version="18.3.1";d0.exports=Ze;var Oe=d0.exports;const wS=lS(Oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TS=Oe,bS=Symbol.for("react.element"),RS=Symbol.for("react.fragment"),AS=Object.prototype.hasOwnProperty,CS=TS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PS={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)AS.call(e,i)&&!PS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bS,type:t,key:s,ref:a,props:r,_owner:CS.current}}Ac.Fragment=RS;Ac.jsx=S0;Ac.jsxs=S0;u0.exports=Ac;var M=u0.exports,od={},y0={exports:{}},Gn={},E0={exports:{}},M0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,F){var V=z.length;z.push(F);e:for(;0<V;){var J=V-1>>>1,ue=z[J];if(0<r(ue,F))z[J]=F,z[V]=ue,V=J;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var F=z[0],V=z.pop();if(V!==F){z[0]=V;e:for(var J=0,ue=z.length,Pe=ue>>>1;J<Pe;){var X=2*(J+1)-1,ae=z[X],ge=X+1,we=z[ge];if(0>r(ae,V))ge<ue&&0>r(we,ae)?(z[J]=we,z[ge]=V,J=ge):(z[J]=ae,z[X]=V,J=X);else if(ge<ue&&0>r(we,V))z[J]=we,z[ge]=V,J=ge;else break e}}return F}function r(z,F){var V=z.sortIndex-F.sortIndex;return V!==0?V:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=z)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function S(z){if(y=!1,v(z),!_)if(n(l)!==null)_=!0,K(R);else{var F=n(c);F!==null&&k(S,F.startTime-z)}}function R(z,F){_=!1,y&&(y=!1,f(w),w=-1),p=!0;var V=d;try{for(v(F),h=n(l);h!==null&&(!(h.expirationTime>F)||z&&!L());){var J=h.callback;if(typeof J=="function"){h.callback=null,d=h.priorityLevel;var ue=J(h.expirationTime<=F);F=t.unstable_now(),typeof ue=="function"?h.callback=ue:h===n(l)&&i(l),v(F)}else i(l);h=n(l)}if(h!==null)var Pe=!0;else{var X=n(c);X!==null&&k(S,X.startTime-F),Pe=!1}return Pe}finally{h=null,d=V,p=!1}}var b=!1,x=null,w=-1,O=5,P=-1;function L(){return!(t.unstable_now()-P<O)}function B(){if(x!==null){var z=t.unstable_now();P=z;var F=!0;try{F=x(!0,z)}finally{F?q():(b=!1,x=null)}}else b=!1}var q;if(typeof m=="function")q=function(){m(B)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,j=I.port2;I.port1.onmessage=B,q=function(){j.postMessage(null)}}else q=function(){g(B,0)};function K(z){x=z,b||(b=!0,q())}function k(z,F){w=g(function(){z(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,K(R))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var V=d;d=F;try{return z()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=d;d=z;try{return F()}finally{d=V}},t.unstable_scheduleCallback=function(z,F,V){var J=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?J+V:J):V=J,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=V+ue,z={id:u++,callback:F,priorityLevel:z,startTime:V,expirationTime:ue,sortIndex:-1},V>J?(z.sortIndex=V,e(c,z),n(l)===null&&z===n(c)&&(y?(f(w),w=-1):y=!0,k(S,V-J))):(z.sortIndex=ue,e(l,z),_||p||(_=!0,K(R))),z},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(z){var F=d;return function(){var V=d;d=F;try{return z.apply(this,arguments)}finally{d=V}}}})(M0);E0.exports=M0;var NS=E0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DS=Oe,Hn=NS;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w0=new Set,Ka={};function fs(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(Ka[t]=e,t=0;t<e.length;t++)w0.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,LS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Np={},Dp={};function US(t){return ld.call(Dp,t)?!0:ld.call(Np,t)?!1:LS.test(t)?Dp[t]=!0:(Np[t]=!0,!1)}function IS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OS(t,e,n,i){if(e===null||typeof e>"u"||IS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var dn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dn[t]=new bn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dn[e]=new bn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dn[t]=new bn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dn[t]=new bn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dn[t]=new bn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dn[t]=new bn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dn[t]=new bn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dn[t]=new bn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dn[t]=new bn(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);dn[e]=new bn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);dn[e]=new bn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);dn[e]=new bn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dn[t]=new bn(t,1,!1,t.toLowerCase(),null,!1,!1)});dn.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dn[t]=new bn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ih(t,e,n,i){var r=dn.hasOwnProperty(e)?dn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OS(e,n,r,i)&&(n=null),i||r===null?US(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var tr=DS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),R0=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function ma(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,Qc;function Da(t){if(Qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qc=e&&e[1]||""}return`
`+Qc+t}var eu=!1;function tu(t,e){if(!t||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function FS(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=tu(t.type,!1),t;case 11:return t=tu(t.type.render,!1),t;case 1:return t=tu(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case Cs:return"Portal";case cd:return"Profiler";case rh:return"StrictMode";case ud:return"Suspense";case dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b0:return(t.displayName||"Context")+".Consumer";case T0:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ah:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function BS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kS(t){var e=A0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fo(t){t._valueTracker||(t._valueTracker=kS(t))}function C0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=A0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hd(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P0(t,e){e=e.checked,e!=null&&ih(t,"checked",e,!1)}function pd(t,e){P0(t,e);var n=Cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?md(t,e.type,n):e.hasOwnProperty("defaultValue")&&md(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function md(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var La=Array.isArray;function Hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(La(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function N0(t,e){var n=Cr(e.value),i=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bo,L0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zS=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){zS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function U0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function I0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=U0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var HS=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xd(t,e){if(e){if(HS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function _d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=null;function oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,Gs=null,Vs=null;function Bp(t){if(t=yo(t)){if(typeof yd!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Lc(e),yd(t.stateNode,t.type,e))}}function O0(t){Gs?Vs?Vs.push(t):Vs=[t]:Gs=t}function F0(){if(Gs){var t=Gs,e=Vs;if(Vs=Gs=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function B0(t,e){return t(e)}function k0(){}var nu=!1;function z0(t,e,n){if(nu)return t(e,n);nu=!0;try{return B0(t,e,n)}finally{nu=!1,(Gs!==null||Vs!==null)&&(k0(),F0())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var i=Lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Ed=!1;if(Yi)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{Ed=!1}function GS(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ka=!1,Yl=null,$l=!1,Md=null,VS={onError:function(t){ka=!0,Yl=t}};function WS(t,e,n,i,r,s,a,o,l){ka=!1,Yl=null,GS.apply(VS,arguments)}function XS(t,e,n,i,r,s,a,o,l){if(WS.apply(this,arguments),ka){if(ka){var c=Yl;ka=!1,Yl=null}else throw Error(re(198));$l||($l=!0,Md=c)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kp(t){if(hs(t)!==t)throw Error(re(188))}function jS(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return kp(r),t;if(s===i)return kp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function G0(t){return t=jS(t),t!==null?V0(t):null}function V0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V0(t);if(e!==null)return e;t=t.sibling}return null}var W0=Hn.unstable_scheduleCallback,zp=Hn.unstable_cancelCallback,qS=Hn.unstable_shouldYield,YS=Hn.unstable_requestPaint,Ft=Hn.unstable_now,$S=Hn.unstable_getCurrentPriorityLevel,lh=Hn.unstable_ImmediatePriority,X0=Hn.unstable_UserBlockingPriority,Kl=Hn.unstable_NormalPriority,KS=Hn.unstable_LowPriority,j0=Hn.unstable_IdlePriority,Cc=null,wi=null;function ZS(t){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:ey,JS=Math.log,QS=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(JS(t)/QS|0)|0}var ko=64,zo=4194304;function Ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ua(o):(s&=a,s!==0&&(i=Ua(s)))}else a=n&~r,a!==0?i=Ua(a):s!==0&&(i=Ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ny(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-di(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=ty(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q0(){var t=ko;return ko<<=1,!(ko&4194240)&&(ko=64),t}function iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var _t=0;function Y0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $0,uh,K0,Z0,J0,Td=!1,Ho=[],Sr=null,yr=null,Er=null,Qa=new Map,eo=new Map,mr=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function va(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=yo(e),e!==null&&uh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sy(t,e,n,i,r){switch(e){case"focusin":return Sr=va(Sr,t,e,n,i,r),!0;case"dragenter":return yr=va(yr,t,e,n,i,r),!0;case"mouseover":return Er=va(Er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Qa.set(s,va(Qa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,eo.set(s,va(eo.get(s)||null,t,e,n,i,r)),!0}return!1}function Q0(t){var e=Yr(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=H0(n),e!==null){t.blockedOn=e,J0(t.priority,function(){K0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Sd=i,n.target.dispatchEvent(i),Sd=null}else return e=yo(n),e!==null&&uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){Tl(t)&&n.delete(e)}function ay(){Td=!1,Sr!==null&&Tl(Sr)&&(Sr=null),yr!==null&&Tl(yr)&&(yr=null),Er!==null&&Tl(Er)&&(Er=null),Qa.forEach(Gp),eo.forEach(Gp)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,Td||(Td=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,ay)))}function to(t){function e(r){return xa(r,t)}if(0<Ho.length){xa(Ho[0],t);for(var n=1;n<Ho.length;n++){var i=Ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Sr!==null&&xa(Sr,t),yr!==null&&xa(yr,t),Er!==null&&xa(Er,t),Qa.forEach(e),eo.forEach(e),n=0;n<mr.length;n++)i=mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)Q0(n),n.blockedOn===null&&mr.shift()}var Ws=tr.ReactCurrentBatchConfig,Jl=!0;function oy(t,e,n,i){var r=_t,s=Ws.transition;Ws.transition=null;try{_t=1,dh(t,e,n,i)}finally{_t=r,Ws.transition=s}}function ly(t,e,n,i){var r=_t,s=Ws.transition;Ws.transition=null;try{_t=4,dh(t,e,n,i)}finally{_t=r,Ws.transition=s}}function dh(t,e,n,i){if(Jl){var r=bd(t,e,n,i);if(r===null)hu(t,e,i,Ql,n),Hp(t,i);else if(sy(r,t,e,n,i))i.stopPropagation();else if(Hp(t,i),e&4&&-1<ry.indexOf(t)){for(;r!==null;){var s=yo(r);if(s!==null&&$0(s),s=bd(t,e,n,i),s===null&&hu(t,e,i,Ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hu(t,e,i,null,n)}}var Ql=null;function bd(t,e,n,i){if(Ql=null,t=oh(i),t=Yr(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($S()){case lh:return 1;case X0:return 4;case Kl:case KS:return 16;case j0:return 536870912;default:return 16}default:return 16}}var vr=null,fh=null,bl=null;function tv(){if(bl)return bl;var t,e=fh,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function Vp(){return!1}function Vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:Vp,this.isPropagationStopped=Vp,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=Vn(sa),So=Lt({},sa,{view:0,detail:0}),cy=Vn(So),ru,su,_a,Pc=Lt({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(ru=t.screenX-_a.screenX,su=t.screenY-_a.screenY):su=ru=0,_a=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Wp=Vn(Pc),uy=Lt({},Pc,{dataTransfer:0}),dy=Vn(uy),fy=Lt({},So,{relatedTarget:0}),au=Vn(fy),hy=Lt({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),py=Vn(hy),my=Lt({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gy=Vn(my),vy=Lt({},sa,{data:0}),Xp=Vn(vy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sy[t])?!!e[t]:!1}function ph(){return yy}var Ey=Lt({},So,{key:function(t){if(t.key){var e=xy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_y[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),My=Vn(Ey),wy=Lt({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=Vn(wy),Ty=Lt({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),by=Vn(Ty),Ry=Lt({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=Vn(Ry),Cy=Lt({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=Vn(Cy),Ny=[9,13,27,32],mh=Yi&&"CompositionEvent"in window,za=null;Yi&&"documentMode"in document&&(za=document.documentMode);var Dy=Yi&&"TextEvent"in window&&!za,nv=Yi&&(!mh||za&&8<za&&11>=za),qp=" ",Yp=!1;function iv(t,e){switch(t){case"keyup":return Ny.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function Ly(t,e){switch(t){case"compositionend":return rv(e);case"keypress":return e.which!==32?null:(Yp=!0,qp);case"textInput":return t=e.data,t===qp&&Yp?null:t;default:return null}}function Uy(t,e){if(Ns)return t==="compositionend"||!mh&&iv(t,e)?(t=tv(),bl=fh=vr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nv&&e.locale!=="ko"?null:e.data;default:return null}}var Iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Iy[t.type]:e==="textarea"}function sv(t,e,n,i){O0(i),e=ec(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ha=null,no=null;function Oy(t){gv(t,0)}function Nc(t){var e=Us(t);if(C0(e))return t}function Fy(t,e){if(t==="change")return e}var av=!1;if(Yi){var ou;if(Yi){var lu="oninput"in document;if(!lu){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),lu=typeof Kp.oninput=="function"}ou=lu}else ou=!1;av=ou&&(!document.documentMode||9<document.documentMode)}function Zp(){Ha&&(Ha.detachEvent("onpropertychange",ov),no=Ha=null)}function ov(t){if(t.propertyName==="value"&&Nc(no)){var e=[];sv(e,no,t,oh(t)),z0(Oy,e)}}function By(t,e,n){t==="focusin"?(Zp(),Ha=e,no=n,Ha.attachEvent("onpropertychange",ov)):t==="focusout"&&Zp()}function ky(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(no)}function zy(t,e){if(t==="click")return Nc(e)}function Hy(t,e){if(t==="input"||t==="change")return Nc(e)}function Gy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:Gy;function io(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ld.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function Jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,e){var n=Jp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jp(n)}}function lv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Vy(t){var e=cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lv(n.ownerDocument.documentElement,n)){if(i!==null&&gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Qp(n,s);var a=Qp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wy=Yi&&"documentMode"in document&&11>=document.documentMode,Ds=null,Rd=null,Ga=null,Ad=!1;function em(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||Ds==null||Ds!==ql(i)||(i=Ds,"selectionStart"in i&&gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ga&&io(Ga,i)||(Ga=i,i=ec(Rd,"onSelect"),0<i.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ds)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},cu={},uv={};Yi&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Dc(t){if(cu[t])return cu[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uv)return cu[t]=e[n];return t}var dv=Dc("animationend"),fv=Dc("animationiteration"),hv=Dc("animationstart"),pv=Dc("transitionend"),mv=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){mv.set(t,e),fs(e,[t])}for(var uu=0;uu<tm.length;uu++){var du=tm[uu],Xy=du.toLowerCase(),jy=du[0].toUpperCase()+du.slice(1);Ur(Xy,"on"+jy)}Ur(dv,"onAnimationEnd");Ur(fv,"onAnimationIteration");Ur(hv,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(pv,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function nm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,XS(i,e,void 0,t),t.currentTarget=null}function gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;nm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;nm(r,o,c),s=l}}}if($l)throw t=Md,$l=!1,Md=null,t}function bt(t,e){var n=e[Ld];n===void 0&&(n=e[Ld]=new Set);var i=t+"__bubble";n.has(i)||(vv(e,t,2,!1),n.add(i))}function fu(t,e,n){var i=0;e&&(i|=4),vv(n,t,i,e)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[Wo]){t[Wo]=!0,w0.forEach(function(n){n!=="selectionchange"&&(qy.has(n)||fu(n,!1,t),fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wo]||(e[Wo]=!0,fu("selectionchange",!1,e))}}function vv(t,e,n,i){switch(ev(e)){case 1:var r=oy;break;case 4:r=ly;break;default:r=dh}n=r.bind(null,e,n,t),r=void 0,!Ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Yr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}z0(function(){var c=s,u=oh(n),h=[];e:{var d=mv.get(t);if(d!==void 0){var p=hh,_=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":p=My;break;case"focusin":_="focus",p=au;break;case"focusout":_="blur",p=au;break;case"beforeblur":case"afterblur":p=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=by;break;case dv:case fv:case hv:p=py;break;case pv:p=Ay;break;case"scroll":p=cy;break;case"wheel":p=Py;break;case"copy":case"cut":case"paste":p=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jp}var y=(e&4)!==0,g=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var m=c,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=Ja(m,f),S!=null&&y.push(so(m,S,v)))),g)break;m=m.return}0<y.length&&(d=new p(d,_,null,n,u),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Sd&&(_=n.relatedTarget||n.fromElement)&&(Yr(_)||_[$i]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Yr(_):null,_!==null&&(g=hs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Wp,S="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=jp,S="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?d:Us(p),v=_==null?d:Us(_),d=new y(S,m+"leave",p,n,u),d.target=g,d.relatedTarget=v,S=null,Yr(u)===c&&(y=new y(f,m+"enter",_,n,u),y.target=v,y.relatedTarget=g,S=y),g=S,p&&_)t:{for(y=p,f=_,m=0,v=y;v;v=ps(v))m++;for(v=0,S=f;S;S=ps(S))v++;for(;0<m-v;)y=ps(y),m--;for(;0<v-m;)f=ps(f),v--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break t;y=ps(y),f=ps(f)}y=null}else y=null;p!==null&&im(h,d,p,y,!1),_!==null&&g!==null&&im(h,g,_,y,!0)}}e:{if(d=c?Us(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=Fy;else if($p(d))if(av)R=Hy;else{R=ky;var b=By}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=zy);if(R&&(R=R(t,c))){sv(h,R,n,u);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&md(d,"number",d.value)}switch(b=c?Us(c):window,t){case"focusin":($p(b)||b.contentEditable==="true")&&(Ds=b,Rd=c,Ga=null);break;case"focusout":Ga=Rd=Ds=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,em(h,n,u);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":em(h,n,u)}var x;if(mh)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ns?iv(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(nv&&n.locale!=="ko"&&(Ns||w!=="onCompositionStart"?w==="onCompositionEnd"&&Ns&&(x=tv()):(vr=u,fh="value"in vr?vr.value:vr.textContent,Ns=!0)),b=ec(c,w),0<b.length&&(w=new Xp(w,t,null,n,u),h.push({event:w,listeners:b}),x?w.data=x:(x=rv(n),x!==null&&(w.data=x)))),(x=Dy?Ly(t,n):Uy(t,n))&&(c=ec(c,"onBeforeInput"),0<c.length&&(u=new Xp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=x))}gv(h,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ja(t,n),s!=null&&i.unshift(so(t,s,r)),s=Ja(t,e),s!=null&&i.push(so(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ja(n,s),l!=null&&a.unshift(so(n,l,o))):r||(l=Ja(n,s),l!=null&&a.push(so(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Yy=/\r\n?/g,$y=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(Yy,`
`).replace($y,"")}function Xo(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(re(425))}function tc(){}var Cd=null,Pd=null;function Nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,Ky=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(t){return sm.resolve(null).then(t).catch(Jy)}:Dd;function Jy(t){setTimeout(function(){throw t})}function pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),to(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);to(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),Si="__reactFiber$"+aa,ao="__reactProps$"+aa,$i="__reactContainer$"+aa,Ld="__reactEvents$"+aa,Qy="__reactListeners$"+aa,eE="__reactHandles$"+aa;function Yr(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[Si])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[Si]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Lc(t){return t[ao]||null}var Ud=[],Is=-1;function Ir(t){return{current:t}}function Rt(t){0>Is||(t.current=Ud[Is],Ud[Is]=null,Is--)}function Mt(t,e){Is++,Ud[Is]=t.current,t.current=e}var Pr={},_n=Ir(Pr),Pn=Ir(!1),ts=Pr;function $s(t,e){var n=t.type.contextTypes;if(!n)return Pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Nn(t){return t=t.childContextTypes,t!=null}function nc(){Rt(Pn),Rt(_n)}function om(t,e,n){if(_n.current!==Pr)throw Error(re(168));Mt(_n,e),Mt(Pn,n)}function xv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,BS(t)||"Unknown",r));return Lt({},n,i)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ts=_n.current,Mt(_n,t),Mt(Pn,Pn.current),!0}function lm(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=xv(t,e,ts),i.__reactInternalMemoizedMergedChildContext=t,Rt(Pn),Rt(_n),Mt(_n,t)):Rt(Pn),Mt(Pn,n)}var Bi=null,Uc=!1,mu=!1;function _v(t){Bi===null?Bi=[t]:Bi.push(t)}function tE(t){Uc=!0,_v(t)}function Or(){if(!mu&&Bi!==null){mu=!0;var t=0,e=_t;try{var n=Bi;for(_t=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Bi=null,Uc=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(t+1)),W0(lh,Or),r}finally{_t=e,mu=!1}}return null}var Os=[],Fs=0,rc=null,sc=0,Xn=[],jn=0,ns=null,ki=1,zi="";function jr(t,e){Os[Fs++]=sc,Os[Fs++]=rc,rc=t,sc=e}function Sv(t,e,n){Xn[jn++]=ki,Xn[jn++]=zi,Xn[jn++]=ns,ns=t;var i=ki;t=zi;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ki=1<<32-di(e)+r|n<<r|i,zi=s+t}else ki=1<<s|n<<r|i,zi=t}function vh(t){t.return!==null&&(jr(t,1),Sv(t,1,0))}function xh(t){for(;t===rc;)rc=Os[--Fs],Os[Fs]=null,sc=Os[--Fs],Os[Fs]=null;for(;t===ns;)ns=Xn[--jn],Xn[jn]=null,zi=Xn[--jn],Xn[jn]=null,ki=Xn[--jn],Xn[jn]=null}var kn=null,Bn=null,At=!1,ai=null;function yv(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,Bn=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:ki,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,Bn=null,!0):!1;default:return!1}}function Id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Od(t){if(At){var e=Bn;if(e){var n=e;if(!cm(t,e)){if(Id(t))throw Error(re(418));e=Mr(n.nextSibling);var i=kn;e&&cm(t,e)?yv(i,n):(t.flags=t.flags&-4097|2,At=!1,kn=t)}}else{if(Id(t))throw Error(re(418));t.flags=t.flags&-4097|2,At=!1,kn=t}}}function um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function jo(t){if(t!==kn)return!1;if(!At)return um(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nd(t.type,t.memoizedProps)),e&&(e=Bn)){if(Id(t))throw Ev(),Error(re(418));for(;e;)yv(t,e),e=Mr(e.nextSibling)}if(um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=kn?Mr(t.stateNode.nextSibling):null;return!0}function Ev(){for(var t=Bn;t;)t=Mr(t.nextSibling)}function Ks(){Bn=kn=null,At=!1}function _h(t){ai===null?ai=[t]:ai.push(t)}var nE=tr.ReactCurrentBatchConfig;function Sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dm(t){var e=t._init;return e(t._payload)}function Mv(t){function e(f,m){if(t){var v=f.deletions;v===null?(f.deletions=[m],f.flags|=16):v.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Rr(f,m),f.index=0,f.sibling=null,f}function s(f,m,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<m?(f.flags|=2,m):v):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,m,v,S){return m===null||m.tag!==6?(m=Eu(v,f.mode,S),m.return=f,m):(m=r(m,v),m.return=f,m)}function l(f,m,v,S){var R=v.type;return R===Ps?u(f,m,v.props.children,S,v.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fr&&dm(R)===m.type)?(S=r(m,v.props),S.ref=Sa(f,m,v),S.return=f,S):(S=Ul(v.type,v.key,v.props,null,f.mode,S),S.ref=Sa(f,m,v),S.return=f,S)}function c(f,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Mu(v,f.mode,S),m.return=f,m):(m=r(m,v.children||[]),m.return=f,m)}function u(f,m,v,S,R){return m===null||m.tag!==7?(m=Qr(v,f.mode,S,R),m.return=f,m):(m=r(m,v),m.return=f,m)}function h(f,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Eu(""+m,f.mode,v),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:return v=Ul(m.type,m.key,m.props,null,f.mode,v),v.ref=Sa(f,null,m),v.return=f,v;case Cs:return m=Mu(m,f.mode,v),m.return=f,m;case fr:var S=m._init;return h(f,S(m._payload),v)}if(La(m)||ma(m))return m=Qr(m,f.mode,v,null),m.return=f,m;qo(f,m)}return null}function d(f,m,v,S){var R=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:o(f,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oo:return v.key===R?l(f,m,v,S):null;case Cs:return v.key===R?c(f,m,v,S):null;case fr:return R=v._init,d(f,m,R(v._payload),S)}if(La(v)||ma(v))return R!==null?null:u(f,m,v,S,null);qo(f,v)}return null}function p(f,m,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,o(m,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Oo:return f=f.get(S.key===null?v:S.key)||null,l(m,f,S,R);case Cs:return f=f.get(S.key===null?v:S.key)||null,c(m,f,S,R);case fr:var b=S._init;return p(f,m,v,b(S._payload),R)}if(La(S)||ma(S))return f=f.get(v)||null,u(m,f,S,R,null);qo(m,S)}return null}function _(f,m,v,S){for(var R=null,b=null,x=m,w=m=0,O=null;x!==null&&w<v.length;w++){x.index>w?(O=x,x=null):O=x.sibling;var P=d(f,x,v[w],S);if(P===null){x===null&&(x=O);break}t&&x&&P.alternate===null&&e(f,x),m=s(P,m,w),b===null?R=P:b.sibling=P,b=P,x=O}if(w===v.length)return n(f,x),At&&jr(f,w),R;if(x===null){for(;w<v.length;w++)x=h(f,v[w],S),x!==null&&(m=s(x,m,w),b===null?R=x:b.sibling=x,b=x);return At&&jr(f,w),R}for(x=i(f,x);w<v.length;w++)O=p(x,f,w,v[w],S),O!==null&&(t&&O.alternate!==null&&x.delete(O.key===null?w:O.key),m=s(O,m,w),b===null?R=O:b.sibling=O,b=O);return t&&x.forEach(function(L){return e(f,L)}),At&&jr(f,w),R}function y(f,m,v,S){var R=ma(v);if(typeof R!="function")throw Error(re(150));if(v=R.call(v),v==null)throw Error(re(151));for(var b=R=null,x=m,w=m=0,O=null,P=v.next();x!==null&&!P.done;w++,P=v.next()){x.index>w?(O=x,x=null):O=x.sibling;var L=d(f,x,P.value,S);if(L===null){x===null&&(x=O);break}t&&x&&L.alternate===null&&e(f,x),m=s(L,m,w),b===null?R=L:b.sibling=L,b=L,x=O}if(P.done)return n(f,x),At&&jr(f,w),R;if(x===null){for(;!P.done;w++,P=v.next())P=h(f,P.value,S),P!==null&&(m=s(P,m,w),b===null?R=P:b.sibling=P,b=P);return At&&jr(f,w),R}for(x=i(f,x);!P.done;w++,P=v.next())P=p(x,f,w,P.value,S),P!==null&&(t&&P.alternate!==null&&x.delete(P.key===null?w:P.key),m=s(P,m,w),b===null?R=P:b.sibling=P,b=P);return t&&x.forEach(function(B){return e(f,B)}),At&&jr(f,w),R}function g(f,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Ps&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Oo:e:{for(var R=v.key,b=m;b!==null;){if(b.key===R){if(R=v.type,R===Ps){if(b.tag===7){n(f,b.sibling),m=r(b,v.props.children),m.return=f,f=m;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fr&&dm(R)===b.type){n(f,b.sibling),m=r(b,v.props),m.ref=Sa(f,b,v),m.return=f,f=m;break e}n(f,b);break}else e(f,b);b=b.sibling}v.type===Ps?(m=Qr(v.props.children,f.mode,S,v.key),m.return=f,f=m):(S=Ul(v.type,v.key,v.props,null,f.mode,S),S.ref=Sa(f,m,v),S.return=f,f=S)}return a(f);case Cs:e:{for(b=v.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(f,m.sibling),m=r(m,v.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=Mu(v,f.mode,S),m.return=f,f=m}return a(f);case fr:return b=v._init,g(f,m,b(v._payload),S)}if(La(v))return _(f,m,v,S);if(ma(v))return y(f,m,v,S);qo(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,v),m.return=f,f=m):(n(f,m),m=Eu(v,f.mode,S),m.return=f,f=m),a(f)):n(f,m)}return g}var Zs=Mv(!0),wv=Mv(!1),ac=Ir(null),oc=null,Bs=null,Sh=null;function yh(){Sh=Bs=oc=null}function Eh(t){var e=ac.current;Rt(ac),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Xs(t,e){oc=t,Sh=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(oc===null)throw Error(re(308));Bs=t,oc.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var $r=null;function Mh(t){$r===null?$r=[t]:$r.push(t)}function Tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ot&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,Mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}function fm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,i){var r=t.updateQueue;hr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=Lt({},h,d);break e;case 2:hr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);rs|=a,t.lanes=a,t.memoizedState=h}}function hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Eo={},Ti=Ir(Eo),oo=Ir(Eo),lo=Ir(Eo);function Kr(t){if(t===Eo)throw Error(re(174));return t}function Th(t,e){switch(Mt(lo,e),Mt(oo,t),Mt(Ti,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vd(e,t)}Rt(Ti),Mt(Ti,e)}function Js(){Rt(Ti),Rt(oo),Rt(lo)}function Rv(t){Kr(lo.current);var e=Kr(Ti.current),n=vd(e,t.type);e!==n&&(Mt(oo,t),Mt(Ti,n))}function bh(t){oo.current===t&&(Rt(Ti),Rt(oo))}var Nt=Ir(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gu=[];function Rh(){for(var t=0;t<gu.length;t++)gu[t]._workInProgressVersionPrimary=null;gu.length=0}var Cl=tr.ReactCurrentDispatcher,vu=tr.ReactCurrentBatchConfig,is=0,Dt=null,Xt=null,tn=null,uc=!1,Va=!1,co=0,iE=0;function pn(){throw Error(re(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Ch(t,e,n,i,r,s){if(is=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?oE:lE,t=n(i,r),Va){s=0;do{if(Va=!1,co=0,25<=s)throw Error(re(301));s+=1,tn=Xt=null,e.updateQueue=null,Cl.current=cE,t=n(i,r)}while(Va)}if(Cl.current=dc,e=Xt!==null&&Xt.next!==null,is=0,tn=Xt=Dt=null,uc=!1,e)throw Error(re(300));return t}function Ph(){var t=co!==0;return co=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Dt.memoizedState=tn=t:tn=tn.next=t,tn}function Zn(){if(Xt===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=tn===null?Dt.memoizedState:tn.next;if(e!==null)tn=e,Xt=t;else{if(t===null)throw Error(re(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},tn===null?Dt.memoizedState=tn=t:tn=tn.next=t}return tn}function uo(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((is&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Dt.lanes|=u,rs|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,hi(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Dt.lanes|=s,rs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _u(t){var e=Zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);hi(s,e.memoizedState)||(Cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Av(){}function Cv(t,e){var n=Dt,i=Zn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,Cn=!0),i=i.queue,Nh(Dv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||tn!==null&&tn.memoizedState.tag&1){if(n.flags|=2048,fo(9,Nv.bind(null,n,i,r,e),void 0,null),sn===null)throw Error(re(349));is&30||Pv(n,e,r)}return r}function Pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nv(t,e,n,i){e.value=n,e.getSnapshot=i,Lv(e)&&Uv(t)}function Dv(t,e,n){return n(function(){Lv(e)&&Uv(t)})}function Lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function Uv(t){var e=Ki(t,1);e!==null&&fi(e,t,1,-1)}function pm(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=aE.bind(null,Dt,t),[e.memoizedState,t]}function fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Iv(){return Zn().memoizedState}function Pl(t,e,n,i){var r=xi();Dt.flags|=t,r.memoizedState=fo(1|e,n,void 0,i===void 0?null:i)}function Ic(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Xt!==null){var a=Xt.memoizedState;if(s=a.destroy,i!==null&&Ah(i,a.deps)){r.memoizedState=fo(e,n,s,i);return}}Dt.flags|=t,r.memoizedState=fo(1|e,n,s,i)}function mm(t,e){return Pl(8390656,8,t,e)}function Nh(t,e){return Ic(2048,8,t,e)}function Ov(t,e){return Ic(4,2,t,e)}function Fv(t,e){return Ic(4,4,t,e)}function Bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kv(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,4,Bv.bind(null,e,t),n)}function Dh(){}function zv(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hv(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Gv(t,e,n){return is&21?(hi(n,e)||(n=q0(),Dt.lanes|=n,rs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=n)}function rE(t,e){var n=_t;_t=n!==0&&4>n?n:4,t(!0);var i=vu.transition;vu.transition={};try{t(!1),e()}finally{_t=n,vu.transition=i}}function Vv(){return Zn().memoizedState}function sE(t,e,n){var i=br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wv(t))Xv(e,n);else if(n=Tv(t,e,n,i),n!==null){var r=Mn();fi(n,t,i,r),jv(n,e,i)}}function aE(t,e,n){var i=br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wv(t))Xv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,hi(o,a)){var l=e.interleaved;l===null?(r.next=r,Mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Tv(t,e,r,i),n!==null&&(r=Mn(),fi(n,t,i,r),jv(n,e,i))}}function Wv(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function Xv(t,e){Va=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}var dc={readContext:Kn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},oE={readContext:Kn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:mm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,Bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sE.bind(null,Dt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:pm,useDebugValue:Dh,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=pm(!1),e=t[0];return t=rE.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Dt,r=xi();if(At){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),sn===null)throw Error(re(349));is&30||Pv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mm(Dv.bind(null,i,s,t),[t]),i.flags|=2048,fo(9,Nv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=sn.identifierPrefix;if(At){var n=zi,i=ki;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lE={readContext:Kn,useCallback:zv,useContext:Kn,useEffect:Nh,useImperativeHandle:kv,useInsertionEffect:Ov,useLayoutEffect:Fv,useMemo:Hv,useReducer:xu,useRef:Iv,useState:function(){return xu(uo)},useDebugValue:Dh,useDeferredValue:function(t){var e=Zn();return Gv(e,Xt.memoizedState,t)},useTransition:function(){var t=xu(uo)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:Cv,useId:Vv,unstable_isNewReconciler:!1},cE={readContext:Kn,useCallback:zv,useContext:Kn,useEffect:Nh,useImperativeHandle:kv,useInsertionEffect:Ov,useLayoutEffect:Fv,useMemo:Hv,useReducer:_u,useRef:Iv,useState:function(){return _u(uo)},useDebugValue:Dh,useDeferredValue:function(t){var e=Zn();return Xt===null?e.memoizedState=t:Gv(e,Xt.memoizedState,t)},useTransition:function(){var t=_u(uo)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:Cv,useId:Vv,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oc={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Mn(),r=br(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(fi(e,t,r,i),Al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Mn(),r=br(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(fi(e,t,r,i),Al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mn(),i=br(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=wr(t,r,i),e!==null&&(fi(e,t,i,n),Al(e,t,i))}};function gm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!io(n,i)||!io(r,s):!0}function qv(t,e,n){var i=!1,r=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=Nn(e)?ts:_n.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Oc.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=Nn(e)?ts:_n.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Oc.enqueueReplaceState(r,r.state,null),lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",i=e;do n+=FS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uE=typeof WeakMap=="function"?WeakMap:Map;function Yv(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hc||(hc=!0,Kd=i),zd(t,e)},n}function $v(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zd(t,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function xm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new uE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wE.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var dE=tr.ReactCurrentOwner,Cn=!1;function En(t,e,n,i){e.child=t===null?wv(e,null,n,i):Zs(e,t.child,n,i)}function ym(t,e,n,i,r){n=n.render;var s=e.ref;return Xs(e,r),i=Ch(t,e,n,i,s,r),n=Ph(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(At&&n&&vh(e),e.flags|=1,En(t,e,i,r),e.child)}function Em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kv(t,e,s,i,r)):(t=Ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(a,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Kv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(io(s,i)&&t.ref===e.ref)if(Cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Cn=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return Hd(t,e,n,i,r)}function Zv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(zs,On),On|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt(zs,On),On|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Mt(zs,On),On|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Mt(zs,On),On|=i;return En(t,e,r,n),e.child}function Jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hd(t,e,n,i,r){var s=Nn(n)?ts:_n.current;return s=$s(e,s),Xs(e,r),n=Ch(t,e,n,i,s,r),i=Ph(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(At&&i&&vh(e),e.flags|=1,En(t,e,n,r),e.child)}function Mm(t,e,n,i,r){if(Nn(n)){var s=!0;ic(e)}else s=!1;if(Xs(e,r),e.stateNode===null)Nl(t,e),qv(e,n,i),kd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=Nn(n)?ts:_n.current,c=$s(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&vm(e,a,i,c),hr=!1;var d=e.memoizedState;a.state=d,lc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Pn.current||hr?(typeof u=="function"&&(Bd(e,n,u,i),l=e.memoizedState),(o=hr||gm(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,bv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ri(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=Nn(n)?ts:_n.current,l=$s(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&vm(e,a,i,l),hr=!1,d=e.memoizedState,a.state=d,lc(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||Pn.current||hr?(typeof p=="function"&&(Bd(e,n,p,i),_=e.memoizedState),(c=hr||gm(e,n,c,i,d,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Gd(t,e,n,i,s,r)}function Gd(t,e,n,i,r,s){Jv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&lm(e,n,!1),Zi(t,e,s);i=e.stateNode,dE.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,o,s)):En(t,e,o,s),e.memoizedState=i.state,r&&lm(e,n,!0),e.child}function Qv(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Th(t,e.containerInfo)}function wm(t,e,n,i,r){return Ks(),_h(r),e.flags|=256,En(t,e,n,i),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ex(t,e,n){var i=e.pendingProps,r=Nt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Mt(Nt,r&1),t===null)return Od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=kc(a,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wd(n),e.memoizedState=Vd,t):Lh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return fE(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Rr(o,s):(s=Qr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Wd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,i}return s=t.child,t=s.sibling,i=Rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lh(t,e){return e=kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yo(t,e,n,i){return i!==null&&_h(i),Zs(e,t.child,null,n),t=Lh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fE(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Su(Error(re(422))),Yo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,t.child,null,a),e.child.memoizedState=Wd(a),e.memoizedState=Vd,s);if(!(e.mode&1))return Yo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=Su(s,i,void 0),Yo(t,e,a,i)}if(o=(a&t.childLanes)!==0,Cn||o){if(i=sn,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(t,r),fi(i,t,r,-1))}return kh(),i=Su(Error(re(421))),Yo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=TE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Bn=Mr(r.nextSibling),kn=e,At=!0,ai=null,t!==null&&(Xn[jn++]=ki,Xn[jn++]=zi,Xn[jn++]=ns,ki=t.id,zi=t.overflow,ns=e),e=Lh(e,i.children),e.flags|=4096,e)}function Tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fd(t.return,e,n)}function yu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(En(t,e,i.children,n),i=Nt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,n,e);else if(t.tag===19)Tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Mt(Nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yu(e,!0,n,null,s);break;case"together":yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hE(t,e,n){switch(e.tag){case 3:Qv(e),Ks();break;case 5:Rv(e);break;case 1:Nn(e.type)&&ic(e);break;case 4:Th(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Nt,Nt.current&1),e.flags|=128,null):n&e.child.childLanes?ex(t,e,n):(Mt(Nt,Nt.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);Mt(Nt,Nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Nt,Nt.current),i)break;return null;case 22:case 23:return e.lanes=0,Zv(t,e,n)}return Zi(t,e,n)}var nx,Xd,ix,rx;nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xd=function(){};ix=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Kr(Ti.current);var s=null;switch(n){case"input":r=hd(t,r),i=hd(t,i),s=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),s=[];break;case"textarea":r=gd(t,r),i=gd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tc)}xd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ka.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&bt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ya(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function mn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function pE(t,e,n){var i=e.pendingProps;switch(xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(e),null;case 1:return Nn(e.type)&&nc(),mn(e),null;case 3:return i=e.stateNode,Js(),Rt(Pn),Rt(_n),Rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(Qd(ai),ai=null))),Xd(t,e),mn(e),null;case 5:bh(e);var r=Kr(lo.current);if(n=e.type,t!==null&&e.stateNode!=null)ix(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return mn(e),null}if(t=Kr(Ti.current),jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[ao]=s,t=(e.mode&1)!==0,n){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(r=0;r<Ia.length;r++)bt(Ia[r],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":Up(i,s),bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},bt("invalid",i);break;case"textarea":Op(i,s),bt("invalid",i)}xd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,o,t),r=["children",""+o]):Ka.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&bt("scroll",i)}switch(n){case"input":Fo(i),Ip(i,s,!0);break;case"textarea":Fo(i),Fp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Si]=e,t[ao]=i,nx(t,e,!1,!1),e.stateNode=t;e:{switch(a=_d(n,i),n){case"dialog":bt("cancel",t),bt("close",t),r=i;break;case"iframe":case"object":case"embed":bt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ia.length;r++)bt(Ia[r],t);r=i;break;case"source":bt("error",t),r=i;break;case"img":case"image":case"link":bt("error",t),bt("load",t),r=i;break;case"details":bt("toggle",t),r=i;break;case"input":Up(t,i),r=hd(t,i),bt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),bt("invalid",t);break;case"textarea":Op(t,i),r=gd(t,i),bt("invalid",t);break;default:r=i}xd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?I0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&L0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Za(t,l):typeof l=="number"&&Za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ka.hasOwnProperty(s)?l!=null&&s==="onScroll"&&bt("scroll",t):l!=null&&ih(t,s,l,a))}switch(n){case"input":Fo(t),Ip(t,i,!1);break;case"textarea":Fo(t),Fp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mn(e),null;case 6:if(t&&e.stateNode!=null)rx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Kr(lo.current),Kr(Ti.current),jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:Xo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return mn(e),null;case 13:if(Rt(Nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Bn!==null&&e.mode&1&&!(e.flags&128))Ev(),Ks(),e.flags|=98560,s=!1;else if(s=jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Si]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mn(e),s=!1}else ai!==null&&(Qd(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Nt.current&1?jt===0&&(jt=3):kh())),e.updateQueue!==null&&(e.flags|=4),mn(e),null);case 4:return Js(),Xd(t,e),t===null&&ro(e.stateNode.containerInfo),mn(e),null;case 10:return Eh(e.type._context),mn(e),null;case 17:return Nn(e.type)&&nc(),mn(e),null;case 19:if(Rt(Nt),s=e.memoizedState,s===null)return mn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ya(s,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=cc(t),a!==null){for(e.flags|=128,ya(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Mt(Nt,Nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>ea&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304)}else{if(!i)if(t=cc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ya(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!At)return mn(e),null}else 2*Ft()-s.renderingStartTime>ea&&n!==1073741824&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=Nt.current,Mt(Nt,i?n&1|2:n&1),e):(mn(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(mn(e),e.subtreeFlags&6&&(e.flags|=8192)):mn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function mE(t,e){switch(xh(e),e.tag){case 1:return Nn(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),Rt(Pn),Rt(_n),Rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bh(e),null;case 13:if(Rt(Nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Rt(Nt),null;case 4:return Js(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var $o=!1,xn=!1,gE=typeof WeakSet=="function"?WeakSet:Set,be=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function jd(t,e,n){try{n()}catch(i){It(t,e,i)}}var bm=!1;function vE(t,e){if(Cd=Jl,t=cv(),gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:t,selectionRange:n},Jl=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:ri(e.type,y),g);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){It(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return _=bm,bm=!1,_}function Wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jd(e,n,s)}r=r.next}while(r!==i)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sx(t){var e=t.alternate;e!==null&&(t.alternate=null,sx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[ao],delete e[Ld],delete e[Qy],delete e[eE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ax(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ax(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(i!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function $d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}var on=null,si=!1;function rr(t,e,n){for(n=n.child;n!==null;)ox(t,e,n),n=n.sibling}function ox(t,e,n){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:xn||ks(n,e);case 6:var i=on,r=si;on=null,rr(t,e,n),on=i,si=r,on!==null&&(si?(t=on,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):on.removeChild(n.stateNode));break;case 18:on!==null&&(si?(t=on,n=n.stateNode,t.nodeType===8?pu(t.parentNode,n):t.nodeType===1&&pu(t,n),to(t)):pu(on,n.stateNode));break;case 4:i=on,r=si,on=n.stateNode.containerInfo,si=!0,rr(t,e,n),on=i,si=r;break;case 0:case 11:case 14:case 15:if(!xn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&jd(n,e,a),r=r.next}while(r!==i)}rr(t,e,n);break;case 1:if(!xn&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){It(n,e,o)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(xn=(i=xn)||n.memoizedState!==null,rr(t,e,n),xn=i):rr(t,e,n);break;default:rr(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gE),e.forEach(function(i){var r=bE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ei(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:on=o.stateNode,si=!1;break e;case 3:on=o.stateNode.containerInfo,si=!0;break e;case 4:on=o.stateNode.containerInfo,si=!0;break e}o=o.return}if(on===null)throw Error(re(160));ox(s,a,r),on=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lx(e,t),e=e.sibling}function lx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(e,t),mi(t),i&4){try{Wa(3,t,t.return),Fc(3,t)}catch(y){It(t,t.return,y)}try{Wa(5,t,t.return)}catch(y){It(t,t.return,y)}}break;case 1:ei(e,t),mi(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(ei(e,t),mi(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{Za(r,"")}catch(y){It(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&P0(r,s),_d(o,a);var c=_d(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?I0(r,h):u==="dangerouslySetInnerHTML"?L0(r,h):u==="children"?Za(r,h):ih(r,u,h,c)}switch(o){case"input":pd(r,s);break;case"textarea":N0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Hs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Hs(r,!!s.multiple,s.defaultValue,!0):Hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ao]=s}catch(y){It(t,t.return,y)}}break;case 6:if(ei(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){It(t,t.return,y)}}break;case 3:if(ei(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(y){It(t,t.return,y)}break;case 4:ei(e,t),mi(t);break;case 13:ei(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Oh=Ft())),i&4&&Am(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(xn=(c=xn)||u,ei(e,t),xn=c):ei(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(be=t,u=t.child;u!==null;){for(h=be=u;be!==null;){switch(d=be,p=d.child,d.tag){case 0:case 11:case 14:case 15:Wa(4,d,d.return);break;case 1:ks(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){It(i,n,y)}}break;case 5:ks(d,d.return);break;case 22:if(d.memoizedState!==null){Pm(h);continue}}p!==null?(p.return=d,be=p):Pm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=U0("display",a))}catch(y){It(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){It(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ei(e,t),mi(t),i&4&&Am(t);break;case 21:break;default:ei(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ax(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Za(r,""),i.flags&=-33);var s=Rm(t);$d(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Rm(t);Yd(t,o,a);break;default:throw Error(re(161))}}catch(l){It(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xE(t,e,n){be=t,cx(t)}function cx(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||$o;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||xn;o=$o;var c=xn;if($o=a,(xn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?Nm(r):l!==null?(l.return=a,be=l):Nm(r);for(;s!==null;)be=s,cx(s),s=s.sibling;be=r,$o=o,xn=c}Cm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Cm(t)}}function Cm(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xn||Fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!xn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&to(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}xn||e.flags&512&&qd(e)}catch(d){It(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Pm(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Nm(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(l){It(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{qd(e)}catch(l){It(e,s,l)}break;case 5:var a=e.return;try{qd(e)}catch(l){It(e,a,l)}}}catch(l){It(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var _E=Math.ceil,fc=tr.ReactCurrentDispatcher,Uh=tr.ReactCurrentOwner,Yn=tr.ReactCurrentBatchConfig,ot=0,sn=null,Gt=null,cn=0,On=0,zs=Ir(0),jt=0,ho=null,rs=0,Bc=0,Ih=0,Xa=null,An=null,Oh=0,ea=1/0,Fi=null,hc=!1,Kd=null,Tr=null,Ko=!1,xr=null,pc=0,ja=0,Zd=null,Dl=-1,Ll=0;function Mn(){return ot&6?Ft():Dl!==-1?Dl:Dl=Ft()}function br(t){return t.mode&1?ot&2&&cn!==0?cn&-cn:nE.transition!==null?(Ll===0&&(Ll=q0()),Ll):(t=_t,t!==0||(t=window.event,t=t===void 0?16:ev(t.type)),t):1}function fi(t,e,n,i){if(50<ja)throw ja=0,Zd=null,Error(re(185));_o(t,n,i),(!(ot&2)||t!==sn)&&(t===sn&&(!(ot&2)&&(Bc|=n),jt===4&&gr(t,cn)),Dn(t,i),n===1&&ot===0&&!(e.mode&1)&&(ea=Ft()+500,Uc&&Or()))}function Dn(t,e){var n=t.callbackNode;ny(t,e);var i=Zl(t,t===sn?cn:0);if(i===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?tE(Dm.bind(null,t)):_v(Dm.bind(null,t)),Zy(function(){!(ot&6)&&Or()}),n=null;else{switch(Y0(i)){case 1:n=lh;break;case 4:n=X0;break;case 16:n=Kl;break;case 536870912:n=j0;break;default:n=Kl}n=vx(n,ux.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ux(t,e){if(Dl=-1,Ll=0,ot&6)throw Error(re(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var i=Zl(t,t===sn?cn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mc(t,i);else{e=i;var r=ot;ot|=2;var s=fx();(sn!==t||cn!==e)&&(Fi=null,ea=Ft()+500,Jr(t,e));do try{EE();break}catch(o){dx(t,o)}while(!0);yh(),fc.current=s,ot=r,Gt!==null?e=0:(sn=null,cn=0,e=jt)}if(e!==0){if(e===2&&(r=wd(t),r!==0&&(i=r,e=Jd(t,r))),e===1)throw n=ho,Jr(t,0),gr(t,i),Dn(t,Ft()),n;if(e===6)gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!SE(r)&&(e=mc(t,i),e===2&&(s=wd(t),s!==0&&(i=s,e=Jd(t,s))),e===1))throw n=ho,Jr(t,0),gr(t,i),Dn(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:qr(t,An,Fi);break;case 3:if(gr(t,i),(i&130023424)===i&&(e=Oh+500-Ft(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Dd(qr.bind(null,t,An,Fi),e);break}qr(t,An,Fi);break;case 4:if(gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-di(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_E(i/1960))-i,10<i){t.timeoutHandle=Dd(qr.bind(null,t,An,Fi),i);break}qr(t,An,Fi);break;case 5:qr(t,An,Fi);break;default:throw Error(re(329))}}}return Dn(t,Ft()),t.callbackNode===n?ux.bind(null,t):null}function Jd(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=mc(t,e),t!==2&&(e=An,An=n,e!==null&&Qd(e)),t}function Qd(t){An===null?An=t:An.push.apply(An,t)}function SE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~Ih,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function Dm(t){if(ot&6)throw Error(re(327));js();var e=Zl(t,0);if(!(e&1))return Dn(t,Ft()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var i=wd(t);i!==0&&(e=i,n=Jd(t,i))}if(n===1)throw n=ho,Jr(t,0),gr(t,e),Dn(t,Ft()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,An,Fi),Dn(t,Ft()),null}function Fh(t,e){var n=ot;ot|=1;try{return t(e)}finally{ot=n,ot===0&&(ea=Ft()+500,Uc&&Or())}}function ss(t){xr!==null&&xr.tag===0&&!(ot&6)&&js();var e=ot;ot|=1;var n=Yn.transition,i=_t;try{if(Yn.transition=null,_t=1,t)return t()}finally{_t=i,Yn.transition=n,ot=e,!(ot&6)&&Or()}}function Bh(){On=zs.current,Rt(zs)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ky(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nc();break;case 3:Js(),Rt(Pn),Rt(_n),Rh();break;case 5:bh(i);break;case 4:Js();break;case 13:Rt(Nt);break;case 19:Rt(Nt);break;case 10:Eh(i.type._context);break;case 22:case 23:Bh()}n=n.return}if(sn=t,Gt=t=Rr(t.current,null),cn=On=e,jt=0,ho=null,Ih=Bc=rs=0,An=Xa=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}$r=null}return t}function dx(t,e){do{var n=Gt;try{if(yh(),Cl.current=dc,uc){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uc=!1}if(is=0,tn=Xt=Dt=null,Va=!1,co=0,Uh.current=null,n===null||n.return===null){jt=1,ho=e,Gt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=cn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=_m(a);if(p!==null){p.flags&=-257,Sm(p,a,o,s,e),p.mode&1&&xm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){xm(s,c,e),kh();break e}l=Error(re(426))}}else if(At&&o.mode&1){var g=_m(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Sm(g,a,o,s,e),_h(Qs(l,o));break e}}s=l=Qs(l,o),jt!==4&&(jt=2),Xa===null?Xa=[s]:Xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Yv(s,l,e);fm(s,f);break e;case 1:o=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Tr===null||!Tr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=$v(s,o,e);fm(s,S);break e}}s=s.return}while(s!==null)}px(n)}catch(R){e=R,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function fx(){var t=fc.current;return fc.current=dc,t===null?dc:t}function kh(){(jt===0||jt===3||jt===2)&&(jt=4),sn===null||!(rs&268435455)&&!(Bc&268435455)||gr(sn,cn)}function mc(t,e){var n=ot;ot|=2;var i=fx();(sn!==t||cn!==e)&&(Fi=null,Jr(t,e));do try{yE();break}catch(r){dx(t,r)}while(!0);if(yh(),ot=n,fc.current=i,Gt!==null)throw Error(re(261));return sn=null,cn=0,jt}function yE(){for(;Gt!==null;)hx(Gt)}function EE(){for(;Gt!==null&&!qS();)hx(Gt)}function hx(t){var e=gx(t.alternate,t,On);t.memoizedProps=t.pendingProps,e===null?px(t):Gt=e,Uh.current=null}function px(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mE(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Gt=null;return}}else if(n=pE(n,e,On),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);jt===0&&(jt=5)}function qr(t,e,n){var i=_t,r=Yn.transition;try{Yn.transition=null,_t=1,ME(t,e,n,i)}finally{Yn.transition=r,_t=i}return null}function ME(t,e,n,i){do js();while(xr!==null);if(ot&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iy(t,s),t===sn&&(Gt=sn=null,cn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,vx(Kl,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var a=_t;_t=1;var o=ot;ot|=4,Uh.current=null,vE(t,n),lx(n,t),Vy(Pd),Jl=!!Cd,Pd=Cd=null,t.current=n,xE(n),YS(),ot=o,_t=a,Yn.transition=s}else t.current=n;if(Ko&&(Ko=!1,xr=t,pc=r),s=t.pendingLanes,s===0&&(Tr=null),ZS(n.stateNode),Dn(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hc)throw hc=!1,t=Kd,Kd=null,t;return pc&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===Zd?ja++:(ja=0,Zd=t):ja=0,Or(),null}function js(){if(xr!==null){var t=Y0(pc),e=Yn.transition,n=_t;try{if(Yn.transition=null,_t=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,pc=0,ot&6)throw Error(re(331));var r=ot;for(ot|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var u=be;switch(u.tag){case 0:case 11:case 15:Wa(8,u,s)}var h=u.child;if(h!==null)h.return=u,be=h;else for(;be!==null;){u=be;var d=u.sibling,p=u.return;if(sx(u),u===c){be=null;break}if(d!==null){d.return=p,be=d;break}be=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,be=f;break e}be=s.return}}var m=t.current;for(be=m;be!==null;){a=be;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,be=v;else e:for(a=m;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Fc(9,o)}}catch(R){It(o,o.return,R)}if(o===a){be=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,be=S;break e}be=o.return}}if(ot=r,Or(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(Cc,t)}catch{}i=!0}return i}finally{_t=n,Yn.transition=e}}return!1}function Lm(t,e,n){e=Qs(n,e),e=Yv(t,e,1),t=wr(t,e,1),e=Mn(),t!==null&&(_o(t,1,e),Dn(t,e))}function It(t,e,n){if(t.tag===3)Lm(t,t,n);else for(;e!==null;){if(e.tag===3){Lm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){t=Qs(n,t),t=$v(e,t,1),e=wr(e,t,1),t=Mn(),e!==null&&(_o(e,1,t),Dn(e,t));break}}e=e.return}}function wE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Mn(),t.pingedLanes|=t.suspendedLanes&n,sn===t&&(cn&n)===n&&(jt===4||jt===3&&(cn&130023424)===cn&&500>Ft()-Oh?Jr(t,0):Ih|=n),Dn(t,e)}function mx(t,e){e===0&&(t.mode&1?(e=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):e=1);var n=Mn();t=Ki(t,e),t!==null&&(_o(t,e,n),Dn(t,n))}function TE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mx(t,n)}function bE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),mx(t,n)}var gx;gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)Cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cn=!1,hE(t,e,n);Cn=!!(t.flags&131072)}else Cn=!1,At&&e.flags&1048576&&Sv(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(t,e),t=e.pendingProps;var r=$s(e,_n.current);Xs(e,n),r=Ch(null,e,i,t,r,n);var s=Ph();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nn(i)?(s=!0,ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wh(e),r.updater=Oc,e.stateNode=r,r._reactInternals=e,kd(e,i,t,n),e=Gd(null,e,i,!0,s,n)):(e.tag=0,At&&s&&vh(e),En(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=AE(i),t=ri(i,t),r){case 0:e=Hd(null,e,i,t,n);break e;case 1:e=Mm(null,e,i,t,n);break e;case 11:e=ym(null,e,i,t,n);break e;case 14:e=Em(null,e,i,ri(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Hd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Mm(t,e,i,r,n);case 3:e:{if(Qv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,bv(t,e),lc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qs(Error(re(423)),e),e=wm(t,e,i,n,r);break e}else if(i!==r){r=Qs(Error(re(424)),e),e=wm(t,e,i,n,r);break e}else for(Bn=Mr(e.stateNode.containerInfo.firstChild),kn=e,At=!0,ai=null,n=wv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=Zi(t,e,n);break e}En(t,e,i,n)}e=e.child}return e;case 5:return Rv(e),t===null&&Od(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Nd(i,r)?a=null:s!==null&&Nd(i,s)&&(e.flags|=32),Jv(t,e),En(t,e,a,n),e.child;case 6:return t===null&&Od(e),null;case 13:return ex(t,e,n);case 4:return Th(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zs(e,null,i,n):En(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),ym(t,e,i,r,n);case 7:return En(t,e,e.pendingProps,n),e.child;case 8:return En(t,e,e.pendingProps.children,n),e.child;case 12:return En(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Mt(ac,i._currentValue),i._currentValue=a,s!==null)if(hi(s.value,a)){if(s.children===r.children&&!Pn.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Fd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}En(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xs(e,n),r=Kn(r),i=i(r),e.flags|=1,En(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),Em(t,e,i,r,n);case 15:return Kv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Nl(t,e),e.tag=1,Nn(i)?(t=!0,ic(e)):t=!1,Xs(e,n),qv(e,i,r),kd(e,i,r,n),Gd(null,e,i,!0,t,n);case 19:return tx(t,e,n);case 22:return Zv(t,e,n)}throw Error(re(156,e.tag))};function vx(t,e){return W0(t,e)}function RE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new RE(t,e,n,i)}function zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AE(t){if(typeof t=="function")return zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===ah)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")zh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ps:return Qr(n.children,r,s,e);case rh:a=8,r|=8;break;case cd:return t=qn(12,n,e,r|2),t.elementType=cd,t.lanes=s,t;case ud:return t=qn(13,n,e,r),t.elementType=ud,t.lanes=s,t;case dd:return t=qn(19,n,e,r),t.elementType=dd,t.lanes=s,t;case R0:return kc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T0:a=10;break e;case b0:a=9;break e;case sh:a=11;break e;case ah:a=14;break e;case fr:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=qn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function kc(t,e,n,i){return t=qn(22,t,i,e),t.elementType=R0,t.lanes=n,t.stateNode={isHidden:!1},t}function Eu(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function Mu(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iu(0),this.expirationTimes=iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hh(t,e,n,i,r,s,a,o,l){return t=new CE(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(s),t}function PE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function xx(t){if(!t)return Pr;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Nn(n))return xv(t,n,e)}return e}function _x(t,e,n,i,r,s,a,o,l){return t=Hh(n,i,!0,t,r,s,a,o,l),t.context=xx(null),n=t.current,i=Mn(),r=br(n),s=Vi(i,r),s.callback=e??null,wr(n,s,r),t.current.lanes=r,_o(t,r,i),Dn(t,i),t}function zc(t,e,n,i){var r=e.current,s=Mn(),a=br(r);return n=xx(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=wr(r,e,a),t!==null&&(fi(t,r,a,s),Al(t,r,a)),a}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){Um(t,e),(t=t.alternate)&&Um(t,e)}function NE(){return null}var Sx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vh(t){this._internalRoot=t}Hc.prototype.render=Vh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));zc(t,e,null,null)};Hc.prototype.unmount=Vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ss(function(){zc(null,t,null,null)}),e[$i]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&Q0(t)}};function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Im(){}function DE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=gc(a);s.call(c)}}var a=_x(e,i,t,0,null,!1,!1,"",Im);return t._reactRootContainer=a,t[$i]=a.current,ro(t.nodeType===8?t.parentNode:t),ss(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=gc(l);o.call(c)}}var l=Hh(t,0,!1,null,null,!1,!1,"",Im);return t._reactRootContainer=l,t[$i]=l.current,ro(t.nodeType===8?t.parentNode:t),ss(function(){zc(e,l,n,i)}),l}function Vc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=gc(a);o.call(l)}}zc(e,a,t,r)}else a=DE(n,e,t,r,i);return gc(a)}$0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ua(e.pendingLanes);n!==0&&(ch(e,n|1),Dn(e,Ft()),!(ot&6)&&(ea=Ft()+500,Or()))}break;case 13:ss(function(){var i=Ki(t,1);if(i!==null){var r=Mn();fi(i,t,1,r)}}),Gh(t,1)}};uh=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=Mn();fi(e,t,134217728,n)}Gh(t,134217728)}};K0=function(t){if(t.tag===13){var e=br(t),n=Ki(t,e);if(n!==null){var i=Mn();fi(n,t,e,i)}Gh(t,e)}};Z0=function(){return _t};J0=function(t,e){var n=_t;try{return _t=t,e()}finally{_t=n}};yd=function(t,e,n){switch(e){case"input":if(pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lc(i);if(!r)throw Error(re(90));C0(i),pd(i,r)}}}break;case"textarea":N0(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};B0=Fh;k0=ss;var LE={usingClientEntryPoint:!1,Events:[yo,Us,Lc,O0,F0,Fh]},Ea={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},UE={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||NE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Cc=Zo.inject(UE),wi=Zo}catch{}}Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LE;Gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(re(200));return PE(t,e,null,n)};Gn.createRoot=function(t,e){if(!Wh(t))throw Error(re(299));var n=!1,i="",r=Sx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hh(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,ro(t.nodeType===8?t.parentNode:t),new Vh(e)};Gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=G0(e),t=t===null?null:t.stateNode,t};Gn.flushSync=function(t){return ss(t)};Gn.hydrate=function(t,e,n){if(!Gc(e))throw Error(re(200));return Vc(null,t,e,!0,n)};Gn.hydrateRoot=function(t,e,n){if(!Wh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Sx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=_x(e,null,t,1,n??null,r,!1,s,a),t[$i]=e.current,ro(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hc(e)};Gn.render=function(t,e,n){if(!Gc(e))throw Error(re(200));return Vc(null,t,e,!1,n)};Gn.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(re(40));return t._reactRootContainer?(ss(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Gn.unstable_batchedUpdates=Fh;Gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Vc(t,e,n,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426";function yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yx)}catch(t){console.error(t)}}yx(),y0.exports=Gn;var IE=y0.exports,Om=IE;od.createRoot=Om.createRoot,od.hydrateRoot=Om.hydrateRoot;/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ex=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var FE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=Oe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Oe.createElement("svg",{ref:l,...FE,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Ex("lucide",r),...o},[...a.map(([c,u])=>Oe.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=(t,e)=>{const n=Oe.forwardRef(({className:i,...r},s)=>Oe.createElement(BE,{ref:s,iconNode:e,className:Ex(`lucide-${OE(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=Rn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Rn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=Rn("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=Rn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=Rn("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=Rn("CloudUpload",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=Rn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=Rn("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=Rn("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=Rn("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=Rn("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=Rn("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=Rn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=Rn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=Rn("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function bx(t,e){return function(){return t.apply(e,arguments)}}const{toString:$E}=Object.prototype,{getPrototypeOf:Ji}=Object,{iterator:Mo,toStringTag:Rx}=Symbol,Qi=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ax=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),Wc=(t,e,n)=>t===Object.prototype||!n&&e===null,KE=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if(Ax(n))return!1;const i=Object.getOwnPropertyDescriptor(t,n);return!!i&&i.configurable&&i.writable===!0})},Xh=(t,e)=>{let n=t;const i=[];for(;n!=null;){if(i.indexOf(n)!==-1)return!1;i.push(n);const r=Ji(n);if(Wc(n,r,n===t))return!1;if(Qi(n,e))return!0;n=r}return!1},ZE=(t,e)=>t!=null&&Xh(t,e)?t[e]:void 0,JE=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=Ji(t);if(e===null&&KE(t))return t;const n=Object.create(null),i=Object.create(null),r=[];let s=t;for(;s!=null&&r.indexOf(s)===-1;){r.push(s);const a=s===t?e:Ji(s);if(Wc(s,a,s===t))break;const o=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&o.push(...Object.getOwnPropertySymbols(s));for(const l of o)Ax(l)||Qi(i,l)||(n[l]=t[l],i[l]=!0);s=a}return n},jh=(t=>e=>{const n=$E.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Jn=t=>(t=t.toLowerCase(),e=>jh(e)===t),Xc=t=>e=>typeof e===t,{isArray:as}=Array,os=Xc("undefined");function oa(t){return t!==null&&!os(t)&&t.constructor!==null&&!os(t.constructor)&&Ln(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Cx=Jn("ArrayBuffer");function QE(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Cx(t.buffer),e}const eM=Xc("string"),Ln=Xc("function"),tM=Xc("number"),la=t=>t!==null&&typeof t=="object",nM=t=>t===!0||t===!1,Il=t=>{if(!la(t))return!1;const e=Ji(t);return(e===null||e===Object.prototype||Ji(e)===null)&&(Wc(t,e,!0)||!Qi(t,Rx)&&!Qi(t,Mo))},iM=t=>{if(!la(t)||oa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},rM=Jn("Date"),sM=Jn("File"),aM=t=>!!(t&&typeof t.uri<"u"),oM=t=>t&&typeof t.getParts<"u",lM=Jn("Blob"),cM=Jn("FileList"),uM=Jn("Set"),dM=t=>la(t)&&Ln(t.pipe);function fM(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Fm=fM(),Bm=typeof Fm.FormData<"u"?Fm.FormData:void 0,hM=t=>{if(!t)return!1;if(Bm&&t instanceof Bm)return!0;const e=Ji(t);if(!e||e===Object.prototype||!Ln(t.append))return!1;const n=jh(t);return n==="formdata"||n==="object"&&Ln(t.toString)&&t.toString()==="[object FormData]"},pM=Jn("URLSearchParams"),[mM,gM,vM,xM]=["ReadableStream","Request","Response","Headers"].map(Jn),_M=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function wo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),as(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(oa(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,t[o],o,t)}}function SM(t,e){if(oa(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Zr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Px=t=>!os(t)&&t!==Zr;function nf(...t){const{caseless:e,skipUndefined:n}=Px(this)&&this||{},i={},r=e?Object.create(null):null,s=(a,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;let l=o;if(r&&typeof o=="string"){const u=o.toLowerCase(),h=r[u];h!==void 0&&Qi(i,h)?l=h:r[u]=o}const c=Qi(i,l)?i[l]:void 0;Il(c)&&Il(a)?i[l]=nf(c,a):Il(a)?i[l]=nf({},a):as(a)?i[l]=a.slice():(!n||!os(a))&&(i[l]=a)};for(let a=0,o=t.length;a<o;a++){const l=t[a];if(!l||oa(l)||(wo(l,s),typeof l!="object"||as(l)||!Object.getOwnPropertySymbols))continue;const c=Object.getOwnPropertySymbols(l);for(let u=0;u<c.length;u++){const h=c[u];DM.call(l,h)&&s(l[h],h)}}return i}const yM=(t,e,n,{allOwnKeys:i}={})=>(wo(e,(r,s)=>{n&&Ln(r)?Object.defineProperty(t,s,{__proto__:null,value:bx(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),EM=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),MM=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},wM=(t,e,n,i)=>{let r,s,a;const o={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)a=r[s],(!i||i(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&Ji(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},TM=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},bM=t=>{if(!t)return null;if(as(t))return t;let e=t.length;if(!Number.isSafeInteger(e)||e<0||e>4294967295)return null;const n=new Set,i=new Set;let r=t;for(;r!=null&&n.size<e;){if(i.has(r))return null;i.add(r);const a=Ji(r);if(Wc(r,a,r===t))break;Object.getOwnPropertyNames(r).forEach(o=>{const l=+o;Number.isInteger(l)&&l>=0&&l<e&&String(l)===o&&Qi(r,o)&&n.add(l)}),r=a}if(n.size!==e)return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},RM=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ji(Uint8Array)),AM=(t,e)=>{const i=(t&&t[Mo]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},CM=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},PM=Jn("HTMLFormElement"),NM=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:DM}=Object.prototype,LM=Jn("RegExp"),Nx=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};wo(n,(r,s)=>{let a;(a=e(r,s,t))!==!1&&(i[s]=a||r)}),Object.defineProperties(t,i)},UM=t=>{Nx(t,(e,n)=>{if(Ln(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Ln(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},IM=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return as(t)?i(t):i(String(t).split(e)),n},OM=()=>{},FM=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function BM(t){return!!(t&&Ln(t.append)&&t[Rx]==="FormData"&&t[Mo])}const kM=t=>{const e=new WeakSet,n=i=>{if(la(i)){if(e.has(i))return;if(oa(i))return i;if(!("toJSON"in i)){e.add(i);let r;if(uM(i)){r=[];for(const s of i){const a=n(s);!os(a)&&r.push(a)}}else r=as(i)?[]:{},wo(i,(s,a)=>{const o=n(s);!os(o)&&(r[a]=o)});return e.delete(i),r}}return i};return n(t)},zM=Jn("AsyncFunction"),HM=t=>t&&(la(t)||Ln(t))&&Ln(t.then)&&Ln(t.catch),Dx=((t,e)=>t?setImmediate:e?((n,i)=>(Zr.addEventListener("message",({source:r,data:s})=>{r===Zr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Zr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ln(Zr.postMessage)),GM=typeof queueMicrotask<"u"?queueMicrotask.bind(Zr):typeof process<"u"&&process.nextTick||Dx,Lx=t=>t!=null&&Ln(t[Mo]),VM=t=>t!=null&&Xh(t,Mo)&&Lx(t),C={isArray:as,isArrayBuffer:Cx,isBuffer:oa,isFormData:hM,isArrayBufferView:QE,isString:eM,isNumber:tM,isBoolean:nM,isObject:la,isPlainObject:Il,isEmptyObject:iM,isReadableStream:mM,isRequest:gM,isResponse:vM,isHeaders:xM,isUndefined:os,isDate:rM,isFile:sM,isReactNativeBlob:aM,isReactNative:oM,isBlob:lM,isRegExp:LM,isFunction:Ln,isStream:dM,isURLSearchParams:pM,isTypedArray:RM,isFileList:cM,forEach:wo,merge:nf,extend:yM,trim:_M,stripBOM:EM,inherits:MM,toFlatObject:wM,kindOf:jh,kindOfTest:Jn,endsWith:TM,toArray:bM,forEachEntry:AM,matchAll:CM,isHTMLForm:PM,hasOwnProperty:Qi,hasOwnProp:Qi,hasOwnInPrototypeChain:Xh,getSafeProp:ZE,toSafeFlatObject:JE,reduceDescriptors:Nx,freezeMethods:UM,toObjectSet:IM,toCamelCase:NM,noop:OM,toFiniteNumber:FM,findKey:SM,global:Zr,isContextDefined:Px,isSpecCompliantForm:BM,toJSONObject:kM,isAsyncFn:zM,isThenable:HM,setImmediate:Dx,asap:GM,isIterable:Lx,isSafeIterable:VM},WM=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),XM=t=>{const e=Object.create(null);let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim();const o=C.hasOwnProp(e,n);!n||o&&C.hasOwnProp(WM,n)||(n==="set-cookie"?o?e[n].push(i):e[n]=[i]:e[n]=o?e[n]+", "+i:i)}),e};function jM(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const qM=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),YM=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function qh(t,e){return C.isArray(t)?t.map(n=>qh(n,e)):jM(String(t).replace(e,""))}const $M=t=>qh(t,qM),KM=t=>qh(t,YM);function Ux(t){const e=Object.create(null);return C.forEach(t.toJSON(),(n,i)=>{e[i]=KM(n)}),e}const km=Symbol("internals");function Ma(t){return t&&String(t).trim().toLowerCase()}function Ol(t){return t===!1||t==null?t:C.isArray(t)?t.map(Ol):$M(String(t))}function ZM(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const JM=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function wu(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function QM(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let i=1;i<e;i++){const r=t.charCodeAt(i);if(r===34||r===92&&(i+=1,i>=e))return t;n+=t[i]}return n}function ew(t){const e=Object.create(null),n=String(t);let i=0,r=!1,s=!1;function a(o){const l=wu(n.slice(i,o)),c=l.indexOf("=");if(c<1)return;const u=wu(l.slice(0,c));if(!JM.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const d=wu(l.slice(c+1));e[h]=QM(d)}for(let o=0;o<n.length;o++){const l=n.charCodeAt(o);r?s?s=!1:l===92?s=!0:l===34&&(r=!1):l===34?r=!0:(l===44||l===59)&&(a(o),i=o+1)}return a(n.length),e}const tw=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()),nw="__Proto__",zm=t=>t==="__proto__"?nw:t;function Tu(t,e,n,i,r){if(C.isFunction(i))return i.call(t,e,n);if(r&&(e=n),!!C.isString(e)){if(C.isString(i))return e.indexOf(i)!==-1;if(C.isRegExp(i))return i.test(e)}}function iw(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function rw(t,e){const n=C.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let qt=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(o,l,c){const u=Ma(l);if(!u)return;const h=C.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[zm(h||l)]=Ol(o))}const a=(o,l)=>C.forEach(o,(c,u)=>s(c,u,l));if(C.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(C.isString(e)&&(e=e.trim())&&!tw(e))a(XM(e),n);else if(C.isObject(e)&&C.isSafeIterable(e)){let o=Object.create(null),l,c;for(const u of e){if(!C.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],C.hasOwnProp(o,c)?(l=o[c],o[c]=C.isArray(l)?[...l,u[1]]:[l,u[1]]):o[c]=u[1]}a(o,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=Ma(e),e){const i=C.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return ZM(r);if(C.isFunction(n))return n.call(this,r,i);if(C.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ma(e),e){const i=C.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Tu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(a){if(a=Ma(a),a){const o=C.findKey(i,a);o&&(!n||Tu(i,i[o],o,n))&&(delete i[o],r=!0)}}return C.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Tu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i=Object.create(null);return C.forEach(this,(r,s)=>{const a=C.findKey(i,s);if(a){n[a]=Ol(r),delete n[s];return}const o=zm(e?iw(s):String(s).trim());o!==s&&delete n[s],n[o]=Ol(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return C.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&C.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return C.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return ew(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[km]=this[km]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=Ma(a);i[o]||(rw(r,a),i[o]=!0)}return C.isArray(e)?e.forEach(s):s(e),this}};qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(qt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});C.freezeMethods(qt);const vc="[REDACTED ****]";function sw(t){if(C.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(C.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function aw(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||C.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof qt&&(s=s.toJSON()),i.push(s);let a;if(C.isArray(s))a=[],s.forEach((o,l)=>{const c=r(o);C.isUndefined(c)||(a[l]=c)});else{if(!C.isPlainObject(s)&&sw(s))return i.pop(),s;a=Object.create(null);for(const[o,l]of Object.entries(s)){const c=n.has(o.toLowerCase())?vc:r(l);C.isUndefined(c)||(a[o]=c)}}return i.pop(),a};return r(t)}function Hm(t){try{return String(t)}catch{return""}}function ow(t){return t.errors.map(n=>{try{return n&&n.message?Hm(n.message):Hm(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}const lw=`
Caused by: `,rf=Symbol("causeStack");function cw(t,e){const n=C.hasOwnProp(t,rf)&&t[rf];return n&&e.endsWith(n)?e.length-n.length:-1}function uw(t,e){try{const n=e&&e.stack;if(typeof n!="string"||!n)return;const i=t.stack;if(typeof i!="string"||!i)return;const r=lw+n;t.stack=i+r,Object.defineProperty(t,rf,{__proto__:null,value:r})}catch{}}let ce=class Ix extends Error{static from(e,n,i,r,s,a){let o=e.message;!o&&C.isArray(e.errors)&&e.errors.length&&(o=ow(e));const l=new Ix(o,n||e.code,i,r,s);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,uw(l,e),e.status!=null&&l.status==null&&(l.status=e.status),a&&Object.assign(l,a),l}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&C.hasOwnProp(e,"redact")?e.redact:void 0,i=C.isArray(n)&&n.length>0?aw(e,n):C.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};ce.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ce.ERR_BAD_OPTION="ERR_BAD_OPTION";ce.ECONNABORTED="ECONNABORTED";ce.ETIMEDOUT="ETIMEDOUT";ce.ECONNREFUSED="ECONNREFUSED";ce.ERR_NETWORK="ERR_NETWORK";ce.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ce.ERR_DEPRECATED="ERR_DEPRECATED";ce.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ce.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ce.ERR_CANCELED="ERR_CANCELED";ce.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ce.ERR_INVALID_URL="ERR_INVALID_URL";ce.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const dw=null,Ox=100;function sf(t){return C.isPlainObject(t)||C.isArray(t)}function Fx(t){return C.endsWith(t,"[]")?t.slice(0,-2):t}function bu(t,e,n){return t?t.concat(e).map(function(r,s){return r=Fx(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function fw(t){return C.isArray(t)&&!t.some(sf)}const hw=C.toFlatObject(C,{},null,function(e){return/^is[A-Z]/.test(e)});function jc(t,e,n){if(!C.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(m,v)=>{const S=C.getSafeProp(n,m);return C.isUndefined(S)?v:S},r=i("metaTokens",!0),s=i("visitor")||y,a=i("dots",!1),o=i("indexes",!1),l=i("Blob")||typeof Blob<"u"&&Blob,c=i("maxDepth",Ox),u=l&&C.isSpecCompliantForm(e),h=[];if(!C.isFunction(s))throw new TypeError("visitor must be a function");function d(m){if(m===null)return"";if(C.isDate(m))return m.toISOString();if(C.isBoolean(m))return m.toString();if(!u&&C.isBlob(m))throw new ce("Blob is not supported. Use a Buffer instead.");if(C.isArrayBuffer(m)||C.isTypedArray(m)){if(u&&typeof l=="function")return new l([m]);throw new ce("Blob is not supported. Use a Buffer instead.",ce.ERR_NOT_SUPPORT)}return m}function p(m){if(m>c)throw new ce("Object is too deeply nested ("+m+" levels). Max depth: "+c,ce.ERR_FORM_DATA_DEPTH_EXCEEDED)}function _(m,v){if(c===1/0)return JSON.stringify(m);const S=[];return JSON.stringify(m,function(b,x){if(!C.isObject(x))return x;for(;S.length&&S[S.length-1]!==this;)S.pop();return S.push(x),p(v+S.length-1),x})}function y(m,v,S){let R=m;if(C.isReactNative(e)&&C.isReactNativeBlob(m))return e.append(bu(S,v,a),d(m)),!1;if(m&&!S&&typeof m=="object"){if(C.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=_(m,1);else if(C.isArray(m)&&fw(m)||(C.isFileList(m)||C.endsWith(v,"[]"))&&(R=C.toArray(m)))return v=Fx(v),R.forEach(function(x,w){!(C.isUndefined(x)||x===null)&&e.append(o===!0?bu([v],w,a):o===null?v:v+"[]",d(x))}),!1}return sf(m)?!0:(e.append(bu(S,v,a),d(m)),!1)}const g=Object.assign(hw,{defaultVisitor:y,convertValue:d,isVisitable:sf});function f(m,v,S=0){if(!C.isUndefined(m)){if(p(S),h.indexOf(m)!==-1)throw new Error("Circular reference detected in "+v.join("."));h.push(m),C.forEach(m,function(b,x){(!(C.isUndefined(b)||b===null)&&s.call(e,b,C.isString(x)?x.trim():x,v,g))===!0&&f(b,v?v.concat(x):[x],S+1)}),h.pop()}}if(!C.isObject(t))throw new TypeError("data must be an object");return f(t),e}function Gm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Yh(t,e){this._pairs=[],t&&jc(t,this,e)}const Bx=Yh.prototype;Bx.append=function(e,n){this._pairs.push([e,n])};Bx.toString=function(e){const n=e?i=>e.call(this,i,Gm):Gm;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function pw(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function kx(t,e,n){if(!e)return t;t=t||"";const i=C.isFunction(n)?{serialize:n}:n,r=C.getSafeProp(i,"encode")||pw,s=C.getSafeProp(i,"serialize");let a;if(s?a=s(e,i):a=C.isURLSearchParams(e)?e.toString():new Yh(e,i).toString(r),a){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}const wa=Symbol("internals");function zx(t){return t?t.length:0}function Vm(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function mw(t){return typeof t=="string"&&t!==""&&String(Number(t))===t?Number(t):t}function Ta(t,e){const n=t.handlers,i=zx(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):i!==e.handlersLength&&(i?e.handlerEntries.forEach(function(s,a){n[s.index]!==s.handler&&e.handlerEntries.delete(a)}):e.handlerEntries.clear()),e.handlersLength=i}class Wm{constructor(){this.handlers=[],this[wa]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,i){const r={fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},s=this[wa];this.handlers==null&&(this.handlers=[]),Ta(this,s);const a=s.nextId++;return this.handlers.push(r),s.handlerEntries.set(a,{handler:r,index:this.handlers.length-1}),s.handlersLength=this.handlers.length,a}eject(e){const n=this[wa];Ta(this,n);const i=mw(e),r=n.handlerEntries.get(i);if(r){if(n.handlerEntries.delete(i),this.handlers[r.index]!==r.handler)return;this.handlers[r.index]=null,n.iterationDepth||(Vm(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Ta(this,this[wa]))}forEach(e){const n=this[wa];Ta(this,n),n.iterationDepth++;try{C.forEach(this.handlers,function(r){r!==null&&e(r)})}finally{--n.iterationDepth||(Ta(this,n),Vm(this.handlers),n.handlersLength=zx(this.handlers))}}}const $h={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},gw=typeof URLSearchParams<"u"?URLSearchParams:Yh,vw=typeof FormData<"u"?FormData:null,xw=typeof Blob<"u"?Blob:null,_w={isBrowser:!0,classes:{URLSearchParams:gw,FormData:vw,Blob:xw},protocols:["http","https","file","blob","url","data"]},Kh=typeof window<"u"&&typeof document<"u",af=typeof navigator=="object"&&navigator||void 0,Sw=Kh&&(!af||["ReactNative","NativeScript","NS"].indexOf(af.product)<0),yw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ew=Kh&&window.location.href||"http://localhost",Mw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Kh,hasStandardBrowserEnv:Sw,hasStandardBrowserWebWorkerEnv:yw,navigator:af,origin:Ew},Symbol.toStringTag,{value:"Module"})),Wt={...Mw,..._w};function ww(t,e){return jc(t,new Wt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Wt.isNode&&C.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const Xm=Ox;function Hx(t){if(t>Xm)throw new ce("FormData field is too deeply nested ("+t+" levels). Max depth: "+Xm,ce.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Tw(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=n.exec(t))!==null;)Hx(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function Gx(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Vx(t){if(!C.isArray(t))return t;const e=Object.keys(t);return e.length!==t.length||e.some((n,i)=>n!==String(i))?Gx(t):t}function bw(t){const e=[t];for(;e.length;){const n=e.pop();Object.keys(n).forEach(i=>{const r=n[i]=Vx(n[i]);(C.isArray(r)||C.isPlainObject(r))&&e.push(r)})}return t}function Wx(t){function e(n,i,r,s){Hx(s);let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=n.length;return a=!a&&C.isArray(r)?r.length:a,l?(C.hasOwnProp(r,a)?(r[a]=Vx(r[a]),r[a]=C.isArray(r[a])?r[a].concat(i):[r[a],i]):r[a]=i,!o):((!C.hasOwnProp(r,a)||!C.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],s)&&C.isArray(r[a])&&(r[a]=Gx(r[a])),!o)}if(C.isFormData(t)&&C.isFunction(t.entries)){const n={};return C.forEachEntry(t,(i,r)=>{e(Tw(i),r,n,0)}),bw(n)}return null}const Xx=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),ms=(t,e)=>t!=null&&C.hasOwnProp(t,e)?t[e]:void 0;function Rw(t,e,n){if(C.isString(t))try{return(e||JSON.parse)(t),C.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const To={transitional:$h,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=C.isObject(e);if(s&&C.isHTMLForm(e)&&(e=new FormData(e)),C.isFormData(e))return r?JSON.stringify(Wx(e)):e;if(C.isArrayBuffer(e)||C.isBuffer(e)||C.isStream(e)||C.isFile(e)||C.isBlob(e)||C.isReadableStream(e))return e;if(C.isArrayBufferView(e))return e.buffer;if(C.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){const l=ms(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return ww(e,l).toString();if((o=C.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=ms(this,"env"),u=c&&c.FormData;return jc(o?{"files[]":e}:e,u&&new u,l)}}return s||r?(n.setContentType("application/json",!1),Rw(e)):e}],transformResponse:[function(e){const n=ms(this,"transitional")||To.transitional,i=n&&n.forcedJSONParsing,r=ms(this,"responseType"),s=r==="json";if(C.isResponse(e)||C.isReadableStream(e))return e;if(e&&C.isString(e)&&(i&&!r||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,ms(this,"parseReviver"))}catch(l){if(o)throw l.name==="SyntaxError"?ce.from(l,ce.ERR_BAD_RESPONSE,this,null,ms(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wt.classes.FormData,Blob:Wt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(Xx,t=>{To.headers[t]={}});function Ru(t,e){const n=this||To,i=e||n,r=qt.from(i.headers);let s=i.data;return C.forEach(t,function(o){s=o.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function jx(t){return!!(t&&t.__CANCEL__)}let bo=class extends ce{constructor(e,n,i){super(e??"canceled",ce.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function qx(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new ce("Request failed with status code "+n.status,n.status>=400&&n.status<500?ce.ERR_BAD_REQUEST:ce.ERR_BAD_RESPONSE,n.config,n.request,n))}const Aw=/[\t\n\r]/g;function Yx(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(Aw,"")}function Au(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1].toLowerCase()||""}const jm=t=>{try{return decodeURIComponent(t)}catch{return t}},$x=Wt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,a){if(typeof document>"u")return;const o=[`${t}=${encodeURIComponent(e)}`];C.isNumber(n)&&o.push(`expires=${new Date(n).toUTCString()}`),C.isString(i)&&o.push(`path=${i}`),C.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),C.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie;if(!e)return null;const n=e.split(";");for(let i=0;i<n.length;i++){const r=n[i].replace(/^\s+/,""),s=r.indexOf("=");if(s!==-1&&r.slice(0,s)===t)return jm(r.slice(s+1))}return null},async readAsync(t){try{const e=typeof window<"u"&&window.cookieStore;if(e&&C.isFunction(e.get)){const n=await e.get(t);return n?jm(n.value):null}}catch{}return this.read(t)},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function Cw(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];a||(a=c),n[r]=l,i[r]=c;let h=s,d=0;for(;h!==r;)d+=n[h++],h=h%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-a<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function Pw(t,e){let n=0,i=1e3/e,r,s;const a=(u,h=Date.now())=>{n=h,r=null,s&&(clearTimeout(s),s=null),t(...u)};return[(...u)=>{const h=Date.now(),d=h-n;d>=i?a(u,h):(r=u,s||(s=setTimeout(()=>{s=null,a(r)},i-d)))},()=>r&&a(r),(...u)=>a(u)]}const xc=(t,e,n=3)=>{let i=0;const r=Cw(50,250);return Pw(s=>{if(!s||!C.isNumber(s.loaded))return;const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=Math.max(0,o!=null?Math.min(a,o):a),c=Math.max(0,l-i),u=r(c);i=Math.max(i,l);const h={loaded:l,total:o,progress:o?l/o:void 0,bytes:c,rate:u||void 0,estimated:u&&o?(o-l)/u:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};t(h)},n)},qm=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Ym=(t,e=C.asap)=>(...n)=>e(()=>t(...n)),Nw=Wt.hasStandardBrowserEnv?(t=>e=>(e=new URL(e,document.baseURI||Wt.origin),t.protocol===e.protocol&&t.host===e.host&&t.port===e.port))(new URL(Wt.origin)):()=>!0;function Dw(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Lw(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const Uw=/^https?:(?!\/\/)/i;function Iw(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,i="")=>`${n}${i}${vc}`)}function Ow(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${vc}@`),n=e.indexOf("#"),r=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${vc}`);return n===-1?r:`${r}#${Iw(e.slice(n+1))}`}function $m(t,e){if(typeof t=="string"){const n=Yx(t);if(Uw.test(n))throw new ce(`Invalid URL ${JSON.stringify(Ow(n))}: missing "//" after protocol`,ce.ERR_INVALID_URL,e)}}function Kx(t,e,n,i){$m(e,i);let r=!Dw(e);return t&&(r||n===!1)?($m(t,i),Lw(t,e)):e}function Fw(t){const e=[{value:t}],n=new WeakSet,i=new WeakSet;for(;e.length;){const{value:r,done:s}=e.pop();if(!C.isPlainObject(r)&&!C.isArray(r))continue;if(s){n.delete(r);continue}if(n.has(r))throw new ce("Circular reference detected in params",ce.ERR_BAD_OPTION_VALUE);if(i.has(r))continue;i.add(r),n.add(r),e.push({value:r,done:!0});const a=Object.keys(r);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(r).forEach(o=>{const l=Object.getOwnPropertyDescriptor(r,o);l&&l.enumerable&&a.push(o)}),a.forEach(o=>{if(o==="__proto__"||o==="constructor"||o==="prototype"){const l=Object.getOwnPropertyDescriptor(r,o);l&&C.hasOwnProp(l,"value")&&e.push({value:l.value})}else e.push({value:r[o]})})}}const Km=t=>t instanceof qt?{...t}:t,of=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>{const n=Object.getOwnPropertyDescriptor(t,e);return n&&n.enumerable})):Object.keys(t);function Bw(t,e){const n=[],i=new WeakMap,r={};function s(o,l){if(!C.isPlainObject(l))return C.isArray(l)?l.slice():l;const c=C.isPlainObject(o)?o:r;let u=i.get(l);if(u||(u=new WeakMap,i.set(l,u)),u.has(c))return u.get(c);const h={};return u.set(c,h),n.push({base:c,source:l,result:h}),h}const a=C.isUndefined(e)?s(void 0,t):s(t,e);for(;n.length;){const{base:o,source:l,result:c}=n.pop(),u=new Set(of(o)),h=new Set(of(l));new Set([...u,...h]).forEach(p=>{if(p==="__proto__"||p==="constructor"||p==="prototype")return;const _=h.has(p),y=_?l[p]:void 0,g=(!_||C.isPlainObject(y))&&u.has(p)?o[p]:void 0;c[p]=_?s(g,y):s(void 0,g)})}return Fw(a),a}function Nr(t,e,n,i){return C.isPlainObject(t)&&C.isPlainObject(e)?C.merge.call({caseless:i},t,e):C.isPlainObject(e)?C.merge({},e):C.isArray(e)?e.slice():e}function Zx(t,e,n,i){if(C.isUndefined(e)){if(!C.isUndefined(t))return Nr(void 0,t,n,i)}else return Nr(t,e,n,i)}function Cu(t,e){if(!C.isUndefined(e))return Nr(void 0,e)}function Tt(t,e){if(C.isUndefined(e)){if(!C.isUndefined(t))return Nr(void 0,t)}else return Nr(void 0,e)}function kw(t,e,n){const i=C.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!C.isUndefined(i))if(C.isPlainObject(i)){if(C.hasOwnProp(i,n))return i[n]}else return;const r=C.hasOwnProp(t,"transitional")?t.transitional:void 0;if(C.isPlainObject(r)&&C.hasOwnProp(r,n))return r[n]}function lf(t,e,n,i,r){if(C.hasOwnProp(r,n))return Nr(t,e);if(C.hasOwnProp(i,n))return Nr(void 0,t)}function zw(t,e,n){return Zx(Km(t),Km(e),n,!0)}const Hw=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),Zm={url:Cu,method:Cu,data:Cu,baseURL:Tt,transformRequest:Tt,transformResponse:Tt,params:Bw,paramsSerializer:Tt,timeout:Tt,timeoutErrorMessage:Tt,withCredentials:Tt,withXSRFToken:Tt,adapter:Tt,responseType:Tt,xsrfCookieName:Tt,xsrfHeaderName:Tt,onUploadProgress:Tt,onDownloadProgress:Tt,decompress:Tt,maxContentLength:Tt,maxBodyLength:Tt,beforeRedirect:Tt,transport:Tt,httpAgent:Tt,httpsAgent:Tt,cancelToken:Tt,socketPath:Tt,allowedSocketPaths:Tt,responseEncoding:Tt,validateStatus:lf,headers:zw};function ls(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",Hw);const i=of({...t,...e});for(let r=0,s=i.length;r<s;r++){const a=i[r];if(a==="__proto__"||a==="constructor"||a==="prototype")continue;const o=C.hasOwnProp(Zm,a)?Zm[a]:Zx,l=C.hasOwnProp(t,a)?t[a]:void 0,c=C.hasOwnProp(e,a)?e[a]:void 0,u=o===lf?o(l,c,a,t,e):o(l,c,a);C.isUndefined(u)&&o!==lf||(n[a]=u)}return C.hasOwnProp(e,"validateStatus")&&C.isUndefined(e.validateStatus)&&kw(t,e,"validateStatusUndefinedResolves")===!1&&(C.hasOwnProp(t,"validateStatus")?n.validateStatus=Nr(void 0,t.validateStatus):delete n.validateStatus),n}const Gw=["content-type","content-length"];function Vw(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{Gw.includes(i.toLowerCase())&&t.set(i,r)})}const Jm=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Ww=t=>$x.read(t);function Jx(t,e=Ww){const n=ls({},t),i=p=>C.hasOwnProp(n,p)?n[p]:void 0,r=i("data");let s=i("withXSRFToken");const a=i("xsrfHeaderName"),o=i("xsrfCookieName");let l=i("headers");const c=i("auth"),u=i("baseURL"),h=i("allowAbsoluteUrls"),d=i("url");if(n.headers=l=qt.from(l),n.url=kx(Kx(u,d,h,n),i("params"),i("paramsSerializer")),c){const p=C.getSafeProp(c,"username")||"",_=C.getSafeProp(c,"password")||"",y=i("transitional"),g=y&&C.hasOwnProp(y,"encodeBasicAuthUsername")&&y.encodeBasicAuthUsername===!0;try{l.set("Authorization","Basic "+btoa((g?Jm(p):p)+":"+(_?Jm(_):"")))}catch(f){throw ce.from(f,ce.ERR_BAD_OPTION_VALUE,t)}}if(C.isFormData(r)){const p=C.getSafeProp(r,"getHeaders");Wt.hasStandardBrowserEnv||Wt.hasStandardBrowserWebWorkerEnv||C.isReactNative(r)?l.setContentType(void 0):C.isFunction(p)&&Vw(l,p.call(r),i("formDataHeaderPolicy"))}if(Wt.hasStandardBrowserEnv&&(C.isFunction(s)&&(s=s(n)),s===!0||s==null&&Nw(n.url))){const _=a&&o&&e(o);_&&l.set(a,_)}return n}const Xw=typeof XMLHttpRequest<"u",jw=Xw&&function(t){return new Promise(function(n,i){let r;try{const w=Wt.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;r=w&&C.isFunction(w.get)}catch{}let s;const a=Jx(t,r?w=>(s=w,null):void 0);let o=a.data;const l=qt.from(a.headers).normalize();let{responseType:c,onUploadProgress:u,onDownloadProgress:h}=a,d,p,_,y,g,f,m;function v(){clearTimeout(p);try{g&&g()}catch(w){setTimeout(()=>{throw w})}try{f&&f()}catch(w){setTimeout(()=>{throw w})}S&&(y&&S.removeEventListener("progress",y),S.upload&&(_&&S.upload.removeEventListener("progress",_),g&&S.upload.removeEventListener("loadend",g))),a.cancelToken&&a.cancelToken.unsubscribe(d),a.signal&&a.signal.removeEventListener("abort",d)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function R(w){if(!S)return;if(S.status===0&&(Au(Yx(a.url))||Au(Wt.origin))!=="file"&&!(S.responseURL&&S.responseURL.startsWith("file:"))){i(new ce("Request aborted",ce.ECONNABORTED,t,S)),v(),S=null;return}try{w?m&&m(w):f&&f()}catch(B){setTimeout(()=>{throw B})}if(!S)return;const O=qt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),L={data:!c||c==="text"||c==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:O,config:t,request:S};qx(function(q){n(q),v()},function(q){i(q),v()},L),S=null}if("onloadend"in S?S.onloadend=R:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(R)},S.onabort=function(){S&&(i(new ce("Request aborted",ce.ECONNABORTED,t,S)),v(),S=null)},S.onerror=function(O){const P=O&&O.message?O.message:"Network Error",L=new ce(P,ce.ERR_NETWORK,t,S);L.event=O||null,i(L),v(),S=null},S.ontimeout=function(){if(!S)return;let O=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const P=a.transitional||$h;a.timeoutErrorMessage&&(O=a.timeoutErrorMessage),i(new ce(O,P.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,t,S)),v(),S=null},o===void 0&&l.setContentType(null),C.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),c&&c!=="json"&&(S.responseType=a.responseType),h&&([y,f,m]=xc(h,!0),S.addEventListener("progress",y)),u&&S.upload&&([_,g]=xc(u),S.upload.addEventListener("progress",_),S.upload.addEventListener("loadend",g)),a.cancelToken||a.signal){if(d=w=>{if(!S)return;i(!w||w.type?new bo(null,t,S):w);const O=S;v(),S=null,O.abort()},a.cancelToken&&a.cancelToken.subscribe(d),!S)return;a.signal&&(a.signal.aborted?d():a.signal.addEventListener("abort",d))}if(!S)return;const b=Au(a.url);if(b&&!Wt.protocols.includes(b)){i(new ce("Unsupported protocol "+b+":",ce.ERR_BAD_REQUEST,t)),v();return}const x=()=>{S&&("setRequestHeader"in S&&C.forEach(Ux(l),function(O,P){S.setRequestHeader(P,O)}),S.send(o||null))};if(s){const w=typeof performance<"u"&&C.isFunction(performance.now)?()=>performance.now():Date.now,O=S.timeout>0?w()+Number(S.timeout):void 0,P=()=>{if(!S)return;const L=S;L.ontimeout(),L.abort()};if(O!==void 0){const L=()=>{const B=O-w();B>0?p=setTimeout(L,Math.min(B,2147483647)):P()};L()}$x.readAsync(s).then(L=>{if(S){if(O!==void 0&&w()>=O){P();return}if(L){const B=C.hasOwnProp(a,"xsrfHeaderName")&&a.xsrfHeaderName;l.set(B,L)}x()}}).catch(L=>{S&&(i(ce.from(L,null,t,S)),v(),S=null)})}else x()})},qw=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,a();const c=l instanceof Error?l:this.reason;n.abort(c instanceof ce?c:new bo(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new ce(`timeout of ${e}ms exceeded`,ce.ETIMEDOUT))},e);const a=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{const c=C.getSafeProp(l,"unsubscribe");C.isFunction(c)?c.call(l,r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>{if(!i){if(l.aborted){r.call(l);return}l.addEventListener("abort",r,{once:!0})}});const{signal:o}=n;return o.unsubscribe=()=>C.asap(a),o},Yw=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},$w=async function*(t,e){for await(const n of Kw(t))yield*Yw(n,e)},Kw=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Qm=(t,e,n,i)=>{const r=$w(t,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){o(),l.close();return}let h=u.byteLength;if(n){let d=s+=h;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},dr=`\r
`,eg=t=>String(t).replace(/\r\n|\r|\n/g,dr),tg=t=>String(t).replace(/[\r\n"]/g,e=>e==="\r"?"%0D":e===`
`?"%0A":"%22"),ba=(t,e)=>{let n=0;for(let i=0;i<t.length;i++){const r=t.charCodeAt(i);e&&(r===13||r===10)?(r===13&&t.charCodeAt(i+1)===10&&i++,n+=2):r<128?n++:r<2048?n+=2:r>=55296&&r<=56319&&t.charCodeAt(i+1)>=56320&&t.charCodeAt(i+1)<=57343?(n+=4,i++):n+=3}return n};class Fl extends TypeError{constructor(e,n){super(e),this.name="FormDataError",this.reason=n}}function Zw(t,e,n,i,r){if(!C.isFunction(e))throw new Fl("Blob is not supported","blob");if(!C.isString(r)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(r)||/ $/.test(r))throw new Fl("Invalid multipart boundary","boundary");const s="--"+r+"--"+dr;let a=s.length;const o=[],l=u=>{if(a+u>n)throw i()};l(0);for(const[u,h]of t){const d=C.isString(h),p=d?ba(h,!0):h.size;if(!Number.isFinite(p)||p<0)throw new Fl("Unsupported FormData part size","part");l(p+ba(u,!0)+(!d&&h.name?ba(h.name,!1):0)+(!d&&h.type?ba(h.type,!1):0));let _="--"+r+dr+'Content-Disposition: form-data; name="'+tg(eg(u))+'"';d||(_+='; filename="'+tg(C.isString(h.name)?h.name:"blob")+'"'+dr+"Content-Type: "+String(h.type||"application/octet-stream").replace(/[\r\n]/g,"")),_+=dr+dr;const y=ba(_,!1)+p+dr.length;l(y),a+=y,o.push({header:_,value:h,isString:d})}const c=[];for(const u of o)c.push(u.header,u.isString?eg(u.value):u.value,dr);return c.push(s),new e(c,{type:"multipart/form-data; boundary="+r})}function Jw(t,e,n,i,r){if(!C.isFunction(e))throw new ce("Blob is not supported",ce.ERR_NOT_SUPPORT);if(r===void 0)if(C.isFunction(Wt.generateString))r="axios-"+Wt.generateString(36,"0123456789abcdef");else{const s=C.global.crypto;if(!s||!C.isFunction(s.getRandomValues))throw new ce("Random byte generation is not supported",ce.ERR_NOT_SUPPORT);const a=new Uint8Array(18);s.getRandomValues(a),r="axios-"+Array.from(a,o=>("0"+o.toString(16)).slice(-2)).join("")}try{return Zw(t,e,n,i,r)}catch(s){if(s instanceof Fl){const a=s.reason==="boundary"?ce.ERR_BAD_OPTION_VALUE:ce.ERR_BAD_REQUEST;throw new ce(s.message,a)}throw s}}const ng=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,Qx=(t,e,n)=>e+2<n&&ng(t.charCodeAt(e+1))&&ng(t.charCodeAt(e+2)),ig=t=>t<=57?t-48:(t&223)-55,Qw=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,eT=t=>t===9||t===10||t===12||t===13||t===32,tT=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},nT=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},iT=t=>{const e=t.length;let n=0,i=0,r=!1;for(let s=0;s<e;s++){let a=t.charCodeAt(s);if(a===37&&Qx(t,s,e)&&(a=ig(t.charCodeAt(s+1))*16+ig(t.charCodeAt(s+2)),s+=2),!eT(a)){if(a===61){i++;continue}if(!Qw(a)||i>0){r=!0;continue}n++}}return r||i>2||i>0&&(n+i)%4!==0||n%4===1?nT(t):tT(n)},rT=(t,e,n)=>{if(!t||typeof t!="string"||!/^data:/i.test(t))return 0;const i=t.indexOf(",");if(i<0)return 0;const r=t.slice(5,i),s=t.slice(i+1);if(n.test(r))return e(s);let o=0;for(let l=0,c=s.length;l<c;l++){const u=s.charCodeAt(l);if(u===37&&Qx(s,l,c))o+=1,l+=2;else if(u<128)o+=1;else if(u<2048)o+=2;else if(u>=55296&&u<=56319&&l+1<c){const h=s.charCodeAt(l+1);h>=56320&&h<=57343?(o+=4,l++):o+=3}else o+=3}return o};function sT(t){const e=typeof t=="string"?t.indexOf("#"):-1;return rT(e===-1?t:t.slice(0,e),iT,/; *base64[\t\n\f\r ]*$/i)}const Zh="1.21.1",rg=64*1024,sg={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Jo}=C,aT=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),ag=t=>{if(!C.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Qo=(t,...e)=>{try{return!!t(...e)}catch{return!1}},oT=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},lT=t=>{const e=C.global!==void 0&&C.global!==null?C.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=C.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response,Blob:e.Blob},t);const r=C.hasOwnProp(t,"fetch")?t.fetch:void 0,{Request:s,Response:a,Blob:o}=t,l=r?Jo(r):typeof fetch=="function",c=Jo(s),u=Jo(a);if(!l)return!1;const h=l&&Jo(n),d=l&&(typeof i=="function"?(v=>S=>v.encode(S))(new i):async v=>new Uint8Array(await new s(v).arrayBuffer())),p=c&&h&&Qo(()=>{let v=!1;const S=new s(Wt.origin,{body:new n,method:"POST",get duplex(){return v=!0,"half"}}),R=S.headers.has("Content-Type");return S.body!=null&&S.body.cancel(),v&&!R}),_=u&&h&&Qo(()=>C.isReadableStream(new a("").body)),y=Object.assign(Object.create(null),sg);c&&!Qo(()=>new s(Wt.origin,y))&&(delete y.cache,Qo(()=>new s(Wt.origin,y))||(y.cache=sg.cache));const g={stream:_&&(v=>v.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(v=>{!g[v]&&(g[v]=(S,R)=>{let b=S&&S[v];if(b)return b.call(S);throw new ce(`Response type '${v}' is not supported`,ce.ERR_NOT_SUPPORT,R)})});const f=async v=>{if(v==null)return 0;if(C.isBlob(v))return v.size;if(C.isArrayBufferView(v)||C.isArrayBuffer(v))return v.byteLength;if(C.isURLSearchParams(v)&&(v=v+""),C.isString(v))return(await d(v)).byteLength},m=async(v,S)=>{const R=C.toFiniteNumber(v.getContentLength());return R??f(S)};return async v=>{let{url:S,method:R,data:b,signal:x,cancelToken:w,timeout:O,onDownloadProgress:P,onUploadProgress:L,responseType:B,headers:q,withCredentials:I="same-origin",fetchOptions:j,maxContentLength:K,maxBodyLength:k,maxRedirects:z}=Jx(v);const F=C.isNumber(K)&&K>-1,V=C.isNumber(k)&&k>-1,J=Be=>C.hasOwnProp(v,Be)?v[Be]:void 0;let ue=r||fetch;B=B?(B+"").toLowerCase():"text";let Pe=qw([x,w&&w.toAbortSignal()],O),X=null;const ae=Pe&&Pe.unsubscribe&&(()=>{Pe.unsubscribe()});let ge,we=null,_e=null;const ke=()=>new ce("Request body larger than maxBodyLength limit",ce.ERR_BAD_REQUEST,v,X);try{let Be;const Te=J("auth");if(Te){const N=C.getSafeProp(Te,"username")||"",lt=C.getSafeProp(Te,"password")||"";Be={username:N,password:lt}}let He;if(oT(S)){if(He=new URL(S,Wt.origin),!Be&&(He.username||He.password)){const N=ag(He.username),lt=ag(He.password);Be={username:N,password:lt}}(He.username||He.password)&&(He.username="",He.password="",S=He.href)}if(Be&&(q.delete("authorization"),q.set("Authorization","Basic "+btoa(aT((Be.username||"")+":"+(Be.password||""))))),F&&He&&He.protocol==="data:"&&sT(He.href)>K)throw new ce("maxContentLength size of "+K+" exceeded",ce.ERR_BAD_RESPONSE,v,X);const rt=C.isSpecCompliantForm(b)&&qt.from(J("headers")).getContentType();let Me;if(C.isString(rt)&&/^multipart\/form-data(?:\s*;|$)/i.test(rt.trim())){const N=qt.parseParameters(rt);C.hasOwnProp(N,"boundary")&&(Me=N.boundary)}if(C.isSpecCompliantForm(b)&&R!=="get"&&R!=="head"&&(V||L&&p||Me!==void 0)&&(b=Jw(b,o,V?k:1/0,ke,Me),q.setContentType(Me===void 0?b.type:rt),ge=b.size),V&&R!=="get"&&R!=="head"){const N=await f(b);if(typeof N=="number"&&isFinite(N)&&(ge=N,N>k))throw ke()}const Le=V&&(C.isReadableStream(b)||C.isStream(b)),pt=(N,lt,Ke)=>Qm(N,rg,je=>{if(V&&je>k)throw we=ke();lt&&lt(je)},Ke);if(p&&R!=="get"&&R!=="head"&&(L||Le)){if(ge=ge??await m(q,b),ge!==0||Le){let N=new s(S,{method:"POST",body:b,duplex:"half"}),lt;if(C.isFormData(b)&&(lt=N.headers.get("content-type"))&&q.setContentType(lt),N.body){const[Ke,je]=L&&qm(ge,xc(Ym(L)))||[];b=pt(N.body,Ke,je)}}}else if(Le&&!c&&h&&R!=="get"&&R!=="head")b=pt(b);else if(Le&&c&&!p&&R!=="get"&&R!=="head")throw new ce("Stream request bodies are not supported by the current fetch implementation",ce.ERR_NOT_SUPPORT,v,X);C.isString(I)||(I=I?"include":"omit");const dt=c&&"credentials"in s.prototype;if(C.isFormData(b)){const N=q.getContentType();N&&/^multipart\/form-data/i.test(N)&&!/boundary=/i.test(N)&&q.delete("content-type")}q.set("User-Agent","axios/"+Zh,!1);const ze=j==null?j:Object.assign(Object.create(null),j);ze&&(delete ze.body,delete ze.headers,delete ze.method,delete ze.signal,delete ze.duplex,delete ze.credentials);const mt=Object.assign(Object.create(null),ze,{signal:Pe,method:R.toUpperCase(),headers:Ux(q.normalize()),body:b,duplex:"half",credentials:dt?I:void 0});c&&(C.forEach(y,(N,lt)=>{mt[lt]===void 0&&(mt[lt]=N)}),mt.signal===void 0&&(mt.signal=null),mt.body===void 0&&(mt.body=null)),z===0&&(mt.redirect="manual",ze&&(ze.redirect="manual")),X=c&&new s(S,mt);let Je=await(c?ue(X,ze):ue(S,mt));const Ut=qt.from(Je.headers);if(F){const N=C.toFiniteNumber(Ut.getContentLength());if(N!=null&&N>K)throw new ce("maxContentLength size of "+K+" exceeded",ce.ERR_BAD_RESPONSE,v,X)}const Ot=_&&(B==="stream"||B==="response");if(_&&Je.body&&(P||F||Ot&&ae)){const N={};["status","statusText","headers"].forEach(Ne=>{N[Ne]=Je[Ne]});const lt=C.toFiniteNumber(Ut.getContentLength()),[Ke,je]=P&&qm(lt,xc(Ym(P),!0))||[];let le=0;const St=Ne=>{if(F&&(le=Ne,le>K))throw _e=new ce("maxContentLength size of "+K+" exceeded",ce.ERR_BAD_RESPONSE,v,X);Ke&&Ke(Ne)};Je=new a(Qm(Je.body,rg,St,()=>{je&&je(),ae&&ae()}),N)}B=B||"text";let wt=await g[C.findKey(g,B)||"text"](Je,v);if(F&&!_&&!Ot){let N;if(wt!=null&&(typeof wt.byteLength=="number"?N=wt.byteLength:typeof wt.size=="number"?N=wt.size:typeof wt=="string"&&(N=typeof i=="function"?new i().encode(wt).byteLength:wt.length)),typeof N=="number"&&N>K)throw new ce("maxContentLength size of "+K+" exceeded",ce.ERR_BAD_RESPONSE,v,X)}return!Ot&&ae&&ae(),await new Promise((N,lt)=>{qx(N,lt,{data:wt,headers:qt.from(Je.headers),status:Je.status,statusText:Je.statusText,config:v,request:X})})}catch(Be){if(ae&&ae(),Pe&&Pe.aborted&&Pe.reason instanceof ce){const Te=Pe.reason;throw Te.config=v,X&&(Te.request=X),Be!==Te&&Object.defineProperty(Te,"cause",{__proto__:null,value:Be,writable:!0,enumerable:!1,configurable:!0}),Te}if(we)throw X&&!we.request&&(we.request=X),we;if(_e)throw _e;if(Be instanceof ce)throw X&&!Be.request&&(Be.request=X),Be;if(Be&&Be.name==="TypeError"&&/Load failed|fetch/i.test(Be.message)){const Te=new ce("Network Error",ce.ERR_NETWORK,v,X,Be&&Be.response);throw Object.defineProperty(Te,"cause",{__proto__:null,value:Be.cause||Be,writable:!0,enumerable:!1,configurable:!0}),Te}throw ce.from(Be,Be&&Be.code,v,X,Be&&Be.response)}}},cT=new Map,e_=t=>{const e=Object.create(null),n=t&&C.hasOwnProp(t,"env")&&t.env;["fetch","Request","Response","Blob"].forEach(p=>{n&&C.hasOwnProp(n,p)&&(e[p]=n[p])});const{fetch:i,Request:r,Response:s,Blob:a}=e,o=[r,s,i,a];let l=o.length,c=l,u,h,d=cT;for(;c--;)u=o[c],h=d.get(u),h===void 0&&d.set(u,h=c?new Map:lT(e)),d=h;return h};e_();const Jh={http:dw,xhr:jw,fetch:{get:e_}};C.forEach(Jh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const og=t=>`- ${t}`,uT=t=>C.isFunction(t)||t===null||t===!1;function dT(t,e){t=C.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let a=0;a<n;a++){i=t[a];let o;if(r=i,!uT(i)&&(r=Jh[(o=String(i)).toLowerCase()],r===void 0))throw new ce(`Unknown adapter '${o}'`);if(r&&(C.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=n?a.length>1?`since :
`+a.map(og).join(`
`):" "+og(a[0]):"as no adapter specified";throw new ce("There is no suitable adapter to dispatch the request "+o,ce.ERR_NOT_SUPPORT)}return r}const t_={getAdapter:dT,adapters:Jh};function Pu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new bo(null,t)}function fT(){return typeof performance<"u"&&C.isFunction(performance.now)?()=>performance.now():Date.now}function lg(t,e){return Math.max(0,Math.round(t()-e))}function Nu(t){const e=C.toSafeFlatObject(t);Pu(e),e.headers=qt.from(C.getSafeProp(e,"headers")),e.data=Ru.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const n=t_.getAdapter(e.adapter||To.adapter,e),i=fT(),r=i();return n(e).then(function(a){Pu(e),a.duration=lg(i,r),e.response=a;try{a.data=Ru.call(e,e.transformResponse,a)}finally{delete e.response}return a.headers=qt.from(a.headers),a},function(a){if(!jx(a)&&(Pu(e),a&&a.response)){a.response.duration=lg(i,r),e.response=a.response;try{a.response.data=Ru.call(e,e.transformResponse,a.response)}finally{delete e.response}a.response.headers=qt.from(a.response.headers)}return Promise.reject(a)})}const qc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{qc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const cg={};qc.transitional=function(e,n,i){function r(s,a){return"[Axios v"+Zh+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new ce(r(a," has been removed"+(n?" in "+n:"")),ce.ERR_DEPRECATED);return n&&!cg[a]&&(cg[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};qc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function hT(t,e,n){if(typeof t!="object"||t===null)throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const o=t[s],l=o===void 0||a(o,s,t);if(l!==!0)throw new ce("option "+s+" must be "+l,ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ce("Unknown option "+s,ce.ERR_BAD_OPTION)}}const Bl={assertOptions:hT,validators:qc},Qt=Bl.validators,Du=t=>{if(t==null||C.isPlainObject(t)||t instanceof qt)return!0;try{return C.isObject(t)&&C.getSafeProp(t,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(e=>C.isFunction(C.getSafeProp(t,e)))}catch{return!1}};let es=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Wm,response:new Wm}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error)try{let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack;let a="";if(typeof s=="string"){const o=s.indexOf(`
`);a=o===-1?"":s.slice(o+1)}if(!i.stack)i.stack=a;else if(a){const o=a.indexOf(`
`),l=o===-1?-1:a.indexOf(`
`,o+1),c=l===-1?a:a.slice(l+1),u=String(i.stack),h=cw(i,u),d=h===-1?u:u.slice(0,h),p=h===-1?"":u.slice(h);d.endsWith(c)||(i.stack=d+`
`+a+p)}}catch{}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ls(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Bl.assertOptions(i,{silentJSONParsing:Qt.transitional(Qt.boolean),forcedJSONParsing:Qt.transitional(Qt.boolean),clarifyTimeoutError:Qt.transitional(Qt.boolean),legacyInterceptorReqResOrdering:Qt.transitional(Qt.boolean),advertiseZstdAcceptEncoding:Qt.transitional(Qt.boolean),validateStatusUndefinedResolves:Qt.transitional(Qt.boolean),encodeBasicAuthUsername:Qt.transitional(Qt.boolean)},!1),r!=null&&(C.isFunction(r)?n.paramsSerializer={serialize:r}:Bl.assertOptions(r,{encode:Qt.function,serialize:Qt.function},!0)),n.allowAbsoluteUrls!==void 0||(C.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Bl.assertOptions(n,{baseUrl:Qt.spelling("baseURL"),withXsrfToken:Qt.spelling("withXSRFToken")},!0),n.method=(C.getSafeProp(n,"method")||C.getSafeProp(this.defaults,"method")||"get").toLowerCase();const a=C.getSafeProp(s,"common"),o=C.getSafeProp(s,n.method),l=s&&C.merge(Du(a)?a:void 0,Du(o)?o:void 0);s&&C.forEach(Xx.concat("common"),g=>{Du(C.getSafeProp(s,g))&&delete s[g]}),n.headers=qt.concat(l,s);const c=[];let u=!0;this.interceptors.request.forEach(function(f){if(typeof f.runWhen=="function"&&f.runWhen(n)===!1)return;u=u&&f.synchronous;const m=n.transitional||$h;m&&m.legacyInterceptorReqResOrdering?c.unshift(f.fulfilled,f.rejected):c.push(f.fulfilled,f.rejected)});const h=[];this.interceptors.response.forEach(function(f){h.push(f.fulfilled,f.rejected)});let d,p=0,_;if(!u){const g=[Nu.bind(this),void 0];for(g.unshift(...c),g.push(...h),_=g.length,d=Promise.resolve(n);p<_;)d=d.then(g[p++],g[p++]);return d}_=c.length;let y=n;for(;p<_;){const g=c[p++],f=c[p++];try{y=g?g(y):y}catch(m){if(!f){d=Promise.reject(m);break}try{const v=f.call(this,m);C.isThenable(v)&&(d=Promise.resolve(v).then(()=>Nu.call(this,y)))}catch(v){d=Promise.reject(v)}break}}if(!d)try{d=Nu.call(this,y)}catch(g){d=Promise.reject(g)}for(p=0,_=h.length;p<_;)d=d.then(h[p++],h[p++]);return d}getUri(e){e=ls(this.defaults,e);const n=Kx(e.baseURL,e.url,e.allowAbsoluteUrls,e);return kx(n,e.params,e.paramsSerializer)}};C.forEach(["delete","get","head","options"],function(e){es.prototype[e]=async function(n,i){return this.request(ls(i||{},{method:e,url:n,data:i&&C.hasOwnProp(i,"data")?i.data:void 0}))}});C.forEach(["post","put","patch","query"],function(e){function n(i){return async function(s,a,o){return this.request(ls(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}es.prototype[e]=n(),e!=="query"&&(es.prototype[e+"Form"]=n(!0))});let pT=class n_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new bo(s,a,o),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new n_(function(r){e=r}),cancel:e}}};function mT(t){return function(n){return t.apply(null,n)}}function gT(t){return C.isObject(t)&&t.isAxiosError===!0}const kl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(kl).forEach(([t,e])=>{kl[e]===void 0&&(kl[e]=t)});function i_(t){const e=new es(t),n=bx(es.prototype.request,e);return C.extend(n,es.prototype,e,{allOwnKeys:!0}),C.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return i_(ls(t,r))},n}const kt=i_(To);kt.Axios=es;kt.CanceledError=bo;kt.CancelToken=pT;kt.isCancel=jx;kt.VERSION=Zh;kt.toFormData=jc;kt.AxiosError=ce;kt.Cancel=kt.CanceledError;kt.all=function(e){return Promise.all(e)};kt.spread=mT;kt.isAxiosError=gT;kt.mergeConfig=ls;kt.AxiosHeaders=qt;kt.formToJSON=t=>Wx(C.isHTMLForm(t)?new FormData(t):t);kt.getAdapter=t_.getAdapter;kt.HttpStatusCode=kl;kt.default=kt;const{Axios:wN,AxiosError:TN,CanceledError:bN,isCancel:RN,CancelToken:AN,VERSION:CN,all:PN,Cancel:NN,isAxiosError:DN,spread:LN,toFormData:UN,AxiosHeaders:IN,HttpStatusCode:ON,formToJSON:FN,getAdapter:BN,mergeConfig:kN,create:zN}=kt;let bi=localStorage.getItem("itr_session_id");bi||(bi="sess_"+Math.random().toString(36).substring(2,11)+Date.now().toString(36),localStorage.setItem("itr_session_id",bi));const r_=()=>bi,s_=()=>(bi="sess_"+Math.random().toString(36).substring(2,11)+Date.now().toString(36),localStorage.setItem("itr_session_id",bi),localStorage.removeItem("itr_session_user"),bi),vT=(t,e)=>(bi=`sess_${e?e.toLowerCase():"user"}_`+Math.random().toString(36).substring(2,8),localStorage.setItem("itr_session_id",bi),bi),a_=()=>{try{const t=localStorage.getItem("itr_session_user");return t?JSON.parse(t):null}catch{return null}},xT=t=>{localStorage.setItem("itr_session_user",JSON.stringify(t))},ca=kt.create({baseURL:"/api"}),_T=async t=>{const e=new FormData;return e.append("file",t),e.append("session_id",r_()),(await ca.post("/upload",e,{headers:{"Content-Type":"multipart/form-data"}})).data},ST=async t=>(await ca.post(`/extract/${t}`)).data,yT=async(t,e)=>(await ca.put(`/review/${t}`,{reviewed_json:e})).data,ET=async t=>(await ca.post(`/compute/${t}`)).data,MT=async(t,e)=>(await ca.post(`/reports/generate/${t}/${e}`)).data,wT=async()=>(await ca.get(`/history/${r_()}`)).data;function TT({activeTab:t,setActiveTab:e,onOpenLogin:n,sessionUser:i,onLogout:r}){const s=()=>{confirm("Start a new session? Current session documents will remain in history.")&&(s_(),window.location.reload())},a=i||a_();return M.jsx("header",{className:"bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm",children:M.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:M.jsxs("div",{className:"flex justify-between items-center h-16",children:[M.jsxs("div",{className:"flex items-center space-x-3",children:[M.jsx("div",{className:"w-10 h-10 rounded-lg bg-indigo-700 flex items-center justify-center text-white shadow-md",children:M.jsx(ef,{className:"w-6 h-6"})}),M.jsxs("div",{children:[M.jsx("div",{className:"flex items-center space-x-2",children:M.jsx("span",{className:"font-bold text-lg text-slate-900 tracking-tight",children:"AITR"})}),M.jsx("div",{className:"text-xs text-slate-500 hidden sm:block",children:"AI-Driven Income Tax Return Computation"})]})]}),M.jsxs("nav",{className:"flex space-x-1 sm:space-x-2",children:[M.jsxs("button",{onClick:()=>e("upload"),className:`flex items-center space-x-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${t==="upload"?"bg-indigo-50 text-indigo-700":"text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`,children:[M.jsx(XE,{className:"w-4 h-4"}),M.jsx("span",{children:"Upload"})]}),M.jsxs("button",{onClick:()=>e("history"),className:`flex items-center space-x-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${t==="history"?"bg-indigo-50 text-indigo-700":"text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`,children:[M.jsx(Mx,{className:"w-4 h-4"}),M.jsx("span",{children:"History"})]})]}),M.jsxs("div",{className:"flex items-center space-x-3 text-xs",children:[a?M.jsxs("div",{className:"flex items-center space-x-2 bg-indigo-50/80 border border-indigo-100 px-3 py-1.5 rounded-lg",children:[M.jsx("div",{className:"w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[11px]",children:a.name.charAt(0).toUpperCase()}),M.jsxs("div",{className:"text-left",children:[M.jsx("p",{className:"font-bold text-slate-800 leading-none",children:a.name}),M.jsx("p",{className:"text-[10px] text-slate-500 font-mono leading-none mt-0.5",children:a.pan||"Active Session"})]}),M.jsx("button",{onClick:r,title:"Sign out / Switch user",className:"ml-2 text-slate-400 hover:text-red-600 transition-colors p-1",children:M.jsx(jE,{className:"w-3.5 h-3.5"})})]}):M.jsxs("button",{onClick:n,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-lg border border-slate-200 transition-all font-medium",children:[M.jsx(Tx,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Sign In / Session"})]}),M.jsx("button",{onClick:s,title:"Reset session ID",className:"hidden lg:inline text-xs text-slate-400 hover:text-slate-600 underline",children:"Reset"})]})]})})})}function bT({isOpen:t,onClose:e,onLoginSuccess:n}){const[i,r]=Oe.useState(""),[s,a]=Oe.useState(""),[o,l]=Oe.useState(!1),[c,u]=Oe.useState(null);if(!t)return null;const h=d=>{if(d.preventDefault(),!i.trim()){u("Please enter your name or identifier.");return}l(!0);try{const p=s.trim().toUpperCase(),_=vT(i.trim(),p);xT({name:i.trim(),pan:p,sessionId:_,loggedInAt:new Date().toISOString()}),n({name:i.trim(),pan:p,sessionId:_}),e()}catch{u("Failed to create session. Please try again.")}finally{l(!1)}};return M.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in",children:M.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative",children:[M.jsxs("div",{className:"text-center mb-6",children:[M.jsx("div",{className:"w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto shadow-md mb-3",children:M.jsx(Tx,{className:"w-6 h-6"})}),M.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Taxpayer Session Portal"}),M.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Sign in or create a dedicated computation session for your return."})]}),c&&M.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg",children:c}),M.jsxs("form",{onSubmit:h,className:"space-y-4",children:[M.jsxs("div",{children:[M.jsxs("label",{className:"block text-xs font-semibold text-slate-700 mb-1",children:["Taxpayer Name / Username ",M.jsx("span",{className:"text-red-500",children:"*"})]}),M.jsx("input",{type:"text",required:!0,placeholder:"e.g. Tabish Hasan / Rizwan Khan",value:i,onChange:d=>r(d.target.value),className:"w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-semibold text-slate-700 mb-1",children:"PAN (Optional)"}),M.jsx("input",{type:"text",maxLength:10,placeholder:"e.g. ABCDE1234F",value:s,onChange:d=>a(d.target.value.toUpperCase()),className:"w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white font-mono uppercase border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"}),M.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Used to associate your computation history and download reports."})]}),M.jsxs("div",{className:"pt-2 flex items-center justify-end space-x-3",children:[M.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg",children:"Continue as Guest"}),M.jsxs("button",{type:"submit",disabled:o,className:"flex items-center space-x-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-md transition-all",children:[M.jsx("span",{children:"Start Session"}),M.jsx(zE,{className:"w-4 h-4"})]})]})]}),M.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-100 flex items-center justify-center space-x-2 text-[11px] text-slate-400",children:[M.jsx(YE,{className:"w-4 h-4 text-emerald-600"}),M.jsx("span",{children:"Session-isolated computations • Data strictly stored in local session"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="187",RT=0,ug=1,AT=2,zl=1,CT=2,Oa=3,Dr=0,nn=1,Fn=2,$n=0,qa=1,dg=2,fg=3,hg=4,PT=5,As=100,NT=101,DT=102,LT=103,UT=104,IT=200,OT=201,FT=202,BT=203,o_=204,l_=205,kT=206,zT=207,HT=208,GT=209,VT=210,WT=211,XT=212,jT=213,qT=214,cf=0,_c=1,uf=2,po=3,df=4,ff=5,hf=6,pf=7,c_=0,YT=1,$T=2,Ri=0,u_=1,d_=2,f_=3,h_=4,p_=5,m_=6,g_=7,v_=300,ta=301,mo=302,Lu=303,Uu=304,mf=1e3,Hi=1001,gf=1002,ln=1003,KT=1004,el=1005,rn=1006,Iu=1007,_r=1008,Vt=1009,x_=1010,__=1011,go=1012,Qh=1013,Ai=1014,ci=1015,Ci=1016,ep=1017,tp=1018,cs=1020,S_=35902,y_=35899,E_=1021,M_=1022,Ei=1023,Lr=1026,Gi=1027,w_=1028,np=1029,us=1030,ip=1031,rp=1033,Hl=33776,Gl=33777,Vl=33778,Wl=33779,vf=35840,xf=35841,_f=35842,Sf=35843,yf=36196,Ef=37492,Mf=37496,wf=37488,Tf=37489,Sc=37490,bf=37491,Rf=37808,Af=37809,Cf=37810,Pf=37811,Nf=37812,Df=37813,Lf=37814,Uf=37815,If=37816,Of=37817,Ff=37818,Bf=37819,kf=37820,zf=37821,Hf=36492,Gf=36494,Vf=36495,Wf=36283,Xf=36284,yc=36285,jf=36286,Ao=3200,pg=0,ZT=1,yi="",xt="srgb",na="srgb-linear",Ec="linear",vt="srgb",Ou=7680,JT=519,QT=512,e1=513,t1=514,T_=515,n1=516,i1=517,b_=518,R_=519,r1=35044,mg="300 es",ui=2e3,Mc=2001;function s1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function a1(){const t=wc("canvas");return t.style.display="block",t}const gg={};function vg(...t){const e="THREE."+t.shift();console.log(e,...t)}function A_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=A_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ht(...t){t=A_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Xl(...t){const e=t.join(" ");e in gg||(gg[e]=!0,Ge(...t))}function o1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const l1={[cf]:cf,[uf]:hf,[df]:df,[po]:ff,[_c]:_c,[hf]:uf,[pf]:pf,[ff]:po};class Pi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xg=1234567;const Ya=Math.PI/180,vo=180/Math.PI;function ua(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function sp(t,e){return(t%e+e)%e}function c1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function u1(t,e,n){return t!==e?(n-t)/(e-t):0}function $a(t,e,n){return(1-n)*t+n*e}function d1(t,e,n,i){return $a(t,e,1-Math.exp(-n*i))}function f1(t,e=1){return e-Math.abs(sp(t,e*2)-e)}function h1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function p1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function m1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function g1(t,e){return t+Math.random()*(e-t)}function v1(t){return t*(.5-Math.random())}function x1(t){t!==void 0&&(xg=t);let e=xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _1(t){return t*Ya}function S1(t){return t*vo}function y1(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function E1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function C_(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function M1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*h,l*d,o*c);break;case"YZY":t.set(l*d,o*u,l*h,o*c);break;case"ZXZ":t.set(l*h,l*d,o*u,o*c);break;case"XZX":t.set(o*u,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*u,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ap(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function P_(t,e){if(e.constructor===Float32Array)return t;const n=ap(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function N_(t,e){if(e.constructor===Float32Array)return t;const n=ap(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Hr={DEG2RAD:Ya,RAD2DEG:vo,generateUUID:ua,clamp:nt,euclideanModulo:sp,mapLinear:c1,inverseLerp:u1,lerp:$a,damp:d1,pingpong:f1,smoothstep:h1,smootherstep:p1,randInt:m1,randFloat:g1,randFloatSpread:v1,seededRandom:x1,degToRad:_1,radToDeg:S1,isPowerOfTwo:y1,ceilPowerOfTwo:E1,floorPowerOfTwo:C_,setQuaternionFromProperEuler:M1,normalize:N_,denormalize:P_},hp=class hp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hp.prototype.isVector2=!0;let Fe=hp;class da{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],y=s[a+3];if(h!==y||l!==d||c!==p||u!==_){let g=l*d+c*p+u*_+h*y;g<0&&(d=-d,p=-p,_=-_,y=-y,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),v=Math.sin(m);f=Math.sin(f*m)/v,o=Math.sin(o*m)/v,l=l*f+d*o,c=c*f+p*o,u=u*f+_*o,h=h*f+y*o}else{l=l*f+d*o,c=c*f+p*o,u=u*f+_*o,h=h*f+y*o;const m=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=m,c*=m,u*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*h+l*p-c*d,e[n+1]=l*_+u*d+c*h-o*p,e[n+2]=c*_+u*p+o*d-l*h,e[n+3]=u*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pp=class pp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_g.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_g.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pp.prototype.isVector3=!0;let $=pp;const Fu=new $,_g=new da,mp=class mp{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],y=r[0],g=r[3],f=r[6],m=r[1],v=r[4],S=r[7],R=r[2],b=r[5],x=r[8];return s[0]=a*y+o*m+l*R,s[3]=a*g+o*v+l*b,s[6]=a*f+o*S+l*x,s[1]=c*y+u*m+h*R,s[4]=c*g+u*v+h*b,s[7]=c*f+u*S+h*x,s[2]=d*y+p*m+_*R,s[5]=d*g+p*v+_*b,s[8]=d*f+p*S+_*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Xl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return Xl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return Xl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mp.prototype.isMatrix3=!0;let We=mp;const Bu=new We,Sg=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yg=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w1(){const t={enabled:!0,workingColorSpace:na,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(r.r=qs(r.r),r.g=qs(r.g),r.b=qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yi?Ec:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[na]:{primaries:e,whitePoint:i,transfer:Ec,toXYZ:Sg,fromXYZ:yg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Sg,fromXYZ:yg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),t}const it=w1();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class T1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=wc("canvas")),gs.width=e.width,gs.height=e.height;const r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b1=0;class op{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ku(r[a].image)):s.push(ku(r[a]))}else s=ku(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?T1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let R1=0;const zu=new $;class un extends Pi{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Hi,r=Hi,s=rn,a=_r,o=Ei,l=Vt,c=un.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=ua(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=v_;un.DEFAULT_ANISOTROPY=1;const gp=class gp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,R=(f+1)/2,b=(u+d)/4,x=(h+y)/4,w=(_+g)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=x/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=w/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=x/s,r=w/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(h-y)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gp.prototype.isVector4=!0;let Ct=gp;class A1 extends Pi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new un({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new op(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yt extends A1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class D_ extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C1 extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Rc=class Rc{constructor(e,n,i,r,s,a,o,l,c,u,h,d,p,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,d,p,_,y,g)}set(e,n,i,r,s,a,o,l,c,u,h,d,p,_,y,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,y=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=d-y*c,n[9]=-o*l,n[2]=y-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,y=c*h;n[0]=d+y*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=y+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,y=c*h;n[0]=d-y*o,n[4]=-a*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=y-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,y=o*h;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,y=o*c;n[0]=l*u,n[4]=y-d*h,n[8]=_*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+_,n[10]=d-y*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,y=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+y,n[5]=a*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P1,e,N1)}lookAt(e,n,i){const r=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),sr.crossVectors(i,Un),sr.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),sr.crossVectors(i,Un)),sr.normalize(),tl.crossVectors(Un,sr),r[0]=sr.x,r[4]=tl.x,r[8]=Un.x,r[1]=sr.y,r[5]=tl.y,r[9]=Un.y,r[2]=sr.z,r[6]=tl.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],y=i[6],g=i[10],f=i[14],m=i[3],v=i[7],S=i[11],R=i[15],b=r[0],x=r[4],w=r[8],O=r[12],P=r[1],L=r[5],B=r[9],q=r[13],I=r[2],j=r[6],K=r[10],k=r[14],z=r[3],F=r[7],V=r[11],J=r[15];return s[0]=a*b+o*P+l*I+c*z,s[4]=a*x+o*L+l*j+c*F,s[8]=a*w+o*B+l*K+c*V,s[12]=a*O+o*q+l*k+c*J,s[1]=u*b+h*P+d*I+p*z,s[5]=u*x+h*L+d*j+p*F,s[9]=u*w+h*B+d*K+p*V,s[13]=u*O+h*q+d*k+p*J,s[2]=_*b+y*P+g*I+f*z,s[6]=_*x+y*L+g*j+f*F,s[10]=_*w+y*B+g*K+f*V,s[14]=_*O+y*q+g*k+f*J,s[3]=m*b+v*P+S*I+R*z,s[7]=m*x+v*L+S*j+R*F,s[11]=m*w+v*B+S*K+R*V,s[15]=m*O+v*q+S*k+R*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],y=e[7],g=e[11],f=e[15],m=l*p-c*d,v=o*p-c*h,S=o*d-l*h,R=a*p-c*u,b=a*d-l*u,x=a*h-o*u;return n*(y*m-g*v+f*S)-i*(_*m-g*R+f*b)+r*(_*v-y*R+f*x)-s*(_*S-y*b+g*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],y=e[13],g=e[14],f=e[15],m=n*o-i*a,v=n*l-r*a,S=n*c-s*a,R=i*l-r*o,b=i*c-s*o,x=r*c-s*l,w=u*y-h*_,O=u*g-d*_,P=u*f-p*_,L=h*g-d*y,B=h*f-p*y,q=d*f-p*g,I=m*q-v*B+S*L+R*P-b*O+x*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/I;return e[0]=(o*q-l*B+c*L)*j,e[1]=(r*B-i*q-s*L)*j,e[2]=(y*x-g*b+f*R)*j,e[3]=(d*b-h*x-p*R)*j,e[4]=(l*P-a*q-c*O)*j,e[5]=(n*q-r*P+s*O)*j,e[6]=(g*S-_*x-f*v)*j,e[7]=(u*x-d*S+p*v)*j,e[8]=(a*B-o*P+c*w)*j,e[9]=(i*P-n*B-s*w)*j,e[10]=(_*b-y*S+f*m)*j,e[11]=(h*S-u*b-p*m)*j,e[12]=(o*O-a*L-l*w)*j,e[13]=(n*L-i*O+r*w)*j,e[14]=(y*v-_*R-g*m)*j,e[15]=(u*R-h*v+d*m)*j,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,_=s*h,y=a*u,g=a*h,f=o*h,m=l*c,v=l*u,S=l*h,R=i.x,b=i.y,x=i.z;return r[0]=(1-(y+f))*R,r[1]=(p+S)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(d+f))*b,r[6]=(g+m)*b,r[7]=0,r[8]=(_+v)*x,r[9]=(g-m)*x,r[10]=(1-(d+y))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),l=vs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ti.copy(this);const c=1/a,u=1/o,h=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,n.setFromRotationMatrix(ti),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ui,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,y;if(l)_=s/(a-s),y=a*s/(a-s);else if(o===ui)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Mc)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,y;if(l)_=1/(a-s),y=a/(a-s);else if(o===ui)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===Mc)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Rc.prototype.isMatrix4=!0;let Bt=Rc;const vs=new $,ti=new Bt,P1=new $(0,0,0),N1=new $(1,1,1),sr=new $,tl=new $,Un=new $,Eg=new Bt,Mg=new da;class ds{constructor(e=0,n=0,i=0,r=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class L_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D1=0;const wg=new $,xs=new da,Di=new Bt,nl=new $,Ra=new $,L1=new $,U1=new da,Tg=new $(1,0,0),bg=new $(0,1,0),Rg=new $(0,0,1),Ag={type:"added"},I1={type:"removed"},_s={type:"childadded",child:null},Hu={type:"childremoved",child:null};class zn extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new $,n=new ds,i=new da,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new We}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Rg,e)}translateOnAxis(e,n){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?nl.copy(e):nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Ra,nl,this.up):Di.lookAt(nl,Ra,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(Di),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),_s.child=e,this.dispatchEvent(_s),_s.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(I1),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,L1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,U1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zn.DEFAULT_UP=new $(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class il extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O1={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new il;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Vu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ut{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=sp(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Vu(a,s,e+1/3),this.g=Vu(a,s,e),this.b=Vu(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=xt){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xt){const i=U_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return it.workingToColorSpace(vn.copy(this),e),Math.round(nt(vn.r*255,0,255))*65536+Math.round(nt(vn.g*255,0,255))*256+Math.round(nt(vn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(vn.copy(this),n);const i=vn.r,r=vn.g,s=vn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=xt){it.workingToColorSpace(vn.copy(this),e);const n=vn.r,i=vn.g,r=vn.b;return e!==xt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(rl);const i=$a(ar.h,rl.h,n),r=$a(ar.s,rl.s,n),s=$a(ar.l,rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ut;ut.NAMES=U_;class qf extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ds,this.environmentIntensity=1,this.environmentRotation=new ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ni=new $,Li=new $,Wu=new $,Ui=new $,Ss=new $,ys=new $,Cg=new $,Xu=new $,ju=new $,qu=new $,Yu=new Ct,$u=new Ct,Ku=new Ct;class li{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Li.subVectors(i,n),Wu.subVectors(e,n);const a=ni.dot(ni),o=ni.dot(Li),l=ni.dot(Wu),c=Li.dot(Li),u=Li.dot(Wu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Yu.setScalar(0),$u.setScalar(0),Ku.setScalar(0),Yu.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,i),Ku.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yu,s.x),a.addScaledVector($u,s.y),a.addScaledVector(Ku,s.z),a}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Li.subVectors(e,n),ni.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ni.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ss.subVectors(r,i),ys.subVectors(s,i),Xu.subVectors(e,i);const l=Ss.dot(Xu),c=ys.dot(Xu);if(l<=0&&c<=0)return n.copy(i);ju.subVectors(e,r);const u=Ss.dot(ju),h=ys.dot(ju);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),n.copy(i).addScaledVector(Ss,a);qu.subVectors(e,s);const p=Ss.dot(qu),_=ys.dot(qu);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(ys,o);const g=u*_-p*h;if(g<=0&&h-u>=0&&p-_>=0)return Cg.subVectors(s,r),o=(h-u)/(h-u+(p-_)),n.copy(r).addScaledVector(Cg,o);const f=1/(g+y+d);return a=y*f,o=d*f,n.copy(i).addScaledVector(Ss,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(s,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),al.subVectors(this.max,Aa),Es.subVectors(e.a,Aa),Ms.subVectors(e.b,Aa),ws.subVectors(e.c,Aa),or.subVectors(Ms,Es),lr.subVectors(ws,Ms),Gr.subVectors(Es,ws);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Gr.z,Gr.y,or.z,0,-or.x,lr.z,0,-lr.x,Gr.z,0,-Gr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Gr.y,Gr.x,0];return!Zu(n,Es,Ms,ws,al)||(n=[1,0,0,0,1,0,0,0,1],!Zu(n,Es,Ms,ws,al))?!1:(ol.crossVectors(or,lr),n=[ol.x,ol.y,ol.z],Zu(n,Es,Ms,ws,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new $,new $,new $,new $,new $,new $,new $,new $],ii=new $,sl=new Co,Es=new $,Ms=new $,ws=new $,or=new $,lr=new $,Gr=new $,Aa=new $,al=new $,ol=new $,Vr=new $;function Zu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Vr.fromArray(t,s);const o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=n.dot(Vr),u=i.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ht=new $,ll=new Fe;let F1=0;class Xi extends Pi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=r1,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?ap(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):P_(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):N_(e,this.array)}}class I_ extends Xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class O_ extends Xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ji extends Xi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const B1=new Co,Ca=new $,Ju=new $;class lp{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):B1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const n=Ca.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(Ju)),this.expandByPoint(Ca.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let k1=0;const Wn=new Bt,Qu=new zn,Ts=new $,In=new Co,Pa=new Co,en=new $;class Fr extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s1(e)?O_:I_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,i){return Wn.makeTranslation(e,n,i),this.applyMatrix4(Wn),this}scale(e,n,i){return Wn.makeScale(e,n,i),this.applyMatrix4(Wn),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ji(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(In.min,Pa.min),In.expandByPoint(en),en.addVectors(In.max,Pa.max),In.expandByPoint(en)):(In.expandByPoint(Pa.min),In.expandByPoint(Pa.max))}In.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),en.add(Ts)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new $,l[O]=new $;const u=new $,h=new $,d=new $,p=new Fe,_=new Fe,y=new Fe,g=new $,f=new $;function m(O,P,L){c[O]=c[P]=c[L]=1,u.fromBufferAttribute(i,O),h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,L),p.fromBufferAttribute(s,O),_.fromBufferAttribute(s,P),y.fromBufferAttribute(s,L),h.sub(u),d.sub(u),_.sub(p),y.sub(p);const B=1/(_.x*y.y-y.x*_.y);isFinite(B)&&(g.copy(h).multiplyScalar(y.y).addScaledVector(d,-_.y).multiplyScalar(B),f.copy(d).multiplyScalar(_.x).addScaledVector(h,-y.x).multiplyScalar(B),o[O].add(g),o[P].add(g),o[L].add(g),l[O].add(f),l[P].add(f),l[L].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let O=0,P=v.length;O<P;++O){const L=v[O],B=L.start,q=L.count;for(let I=B,j=B+q;I<j;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new $,R=new $,b=new $,x=new $;function w(O){b.fromBufferAttribute(r,O),x.copy(b);const P=o[O];S.copy(P),S.sub(b.multiplyScalar(b.dot(P))).normalize(),R.crossVectors(x,P);const B=R.dot(l[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,B)}for(let O=0,P=i.count;O<P;++O)c[O]&&w(O);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,h=new $;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new Xi(d,u,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ed=new $,z1=new $,H1=new We;class pr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ed.subVectors(i,n).cross(z1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(ed),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||H1.getNormalMatrix(e),r=this.coplanarPoint(ed).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let G1=0;class fa extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=qa,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=o_,this.blendDst=l_,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=JT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ou,this.stencilZFail=Ou,this.stencilZPass=Ou,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new pr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new $,td=new $,cl=new $,ul=new $;class V1{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){td.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),ul.copy(this.origin).sub(td);const s=e.distanceTo(n)*.5,a=-this.direction.dot(cl),o=ul.dot(this.direction),l=-ul.dot(cl),c=ul.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const y=1/u;h*=y,d*=y,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(td).addScaledVector(cl,d),p}intersectSphere(e,n){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,_=n.x-a.x,y=n.y-a.y,g=n.z-a.z,f=i.x-a.x,m=i.y-a.y,v=i.z-a.z,S=Math.abs(l),R=Math.abs(c),b=Math.abs(u);let x,w,O,P,L,B,q,I,j,K,k,z;if(S>=R&&S>=b?(O=l,B=h,j=_,z=f,l>=0?(x=c,w=u,P=d,L=p,q=y,I=g,K=m,k=v):(x=u,w=c,P=p,L=d,q=g,I=y,K=v,k=m)):R>=b?(O=c,B=d,j=y,z=m,c>=0?(x=u,w=l,P=p,L=h,q=g,I=_,K=v,k=f):(x=l,w=u,P=h,L=p,q=_,I=g,K=f,k=v)):(O=u,B=p,j=g,z=v,u>=0?(x=l,w=c,P=h,L=d,q=_,I=y,K=f,k=m):(x=c,w=l,P=d,L=h,q=y,I=_,K=m,k=f)),O===0)return null;const F=x/O,V=w/O,J=1/O,ue=P-F*B,Pe=L-V*B,X=q-F*j,ae=I-V*j,ge=K-F*z,we=k-V*z,_e=ge*ae-we*X,ke=ue*we-Pe*ge,Be=X*Pe-ae*ue;if(r){if(_e<0||ke<0||Be<0)return null}else if((_e<0||ke<0||Be<0)&&(_e>0||ke>0||Be>0))return null;const Te=_e+ke+Be;if(Te===0)return null;const He=J*(_e*B+ke*j+Be*z);return(Te>0?He<0:He>0)?null:this.at(He/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class W1 extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ds,this.combine=c_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pg=new Bt,Wr=new V1,dl=new lp,Ng=new $,fl=new $,hl=new $,pl=new $,nd=new $,ml=new $,Dg=new $,gl=new $;class er extends zn{constructor(e=new Fr,n=new W1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(nd.fromBufferAttribute(h,e),a?ml.addScaledVector(nd,u):ml.addScaledVector(nd.sub(n),u))}n.add(ml)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(dl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(dl,Ng)===null||Wr.origin.distanceToSquared(Ng)>(e.far-e.near)**2))&&(Pg.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(Pg),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const g=d[_],f=a[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,R=v;S<R;S+=3){const b=o.getX(S),x=o.getX(S+1),w=o.getX(S+2);r=vl(this,f,e,i,c,u,h,b,x,w),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=_,f=y;g<f;g+=3){const m=o.getX(g),v=o.getX(g+1),S=o.getX(g+2);r=vl(this,a,e,i,c,u,h,m,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const g=d[_],f=a[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,R=v;S<R;S+=3){const b=S,x=S+1,w=S+2;r=vl(this,f,e,i,c,u,h,b,x,w),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,f=y;g<f;g+=3){const m=g,v=g+1,S=g+2;r=vl(this,a,e,i,c,u,h,m,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function X1(t,e,n,i,r,s,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Dr,o),l===null)return null;gl.copy(o),gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(gl);return c<n.near||c>n.far?null:{distance:c,point:gl.clone(),object:t}}function vl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,fl),t.getVertexPosition(l,hl),t.getVertexPosition(c,pl);const u=X1(t,e,n,i,fl,hl,pl,Dg);if(u){const h=new $;li.getBarycoord(Dg,fl,hl,pl,h),r&&(u.uv=li.getInterpolatedAttribute(r,o,l,c,h,new Fe)),s&&(u.uv1=li.getInterpolatedAttribute(s,o,l,c,h,new Fe)),a&&(u.normal=li.getInterpolatedAttribute(a,o,l,c,h,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new $,materialIndex:0};li.getNormal(fl,hl,pl,d.normal),u.face=d,u.barycoord=h}return u}class j1 extends un{constructor(e=null,n=1,i=1,r,s,a,o,l,c=ln,u=ln,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xr=new lp,q1=new Fe(.5,.5),xl=new $;class Tc{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,a=new pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],_=s[8],y=s[9],g=s[10],f=s[11],m=s[12],v=s[13],S=s[14],R=s[15];if(r[0].setComponents(c-a,p-u,f-_,R-m).normalize(),r[1].setComponents(c+a,p+u,f+_,R+m).normalize(),r[2].setComponents(c+o,p+h,f+y,R+v).normalize(),r[3].setComponents(c-o,p-h,f-y,R-v).normalize(),i)r[4].setComponents(l,d,g,S).normalize(),r[5].setComponents(c-l,p-d,f-g,R-S).normalize();else if(r[4].setComponents(c-l,p-d,f-g,R-S).normalize(),n===ui)r[5].setComponents(c+l,p+d,f+g,R+S).normalize();else if(n===Mc)r[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const n=q1.distanceTo(e.center);return Xr.radius=.7071067811865476+n,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Lg=new Bt;class cp{constructor(){this.coordinateSystem=ui,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Lg.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Tc),i[r].setFromProjectionMatrix(Lg,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Tc),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new cp().copy(this)}}class F_ extends un{constructor(e=[],n=ta,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qi extends un{constructor(e,n,i=Ai,r,s,a,o=ln,l=ln,c,u=Lr,h=1){if(u!==Lr&&u!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class B_ extends qi{constructor(e,n=Ai,i=ta,r,s,a=ln,o=ln,l,c=Lr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class k_ extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Po extends Fr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ji(c,3)),this.setAttribute("normal",new ji(u,3)),this.setAttribute("uv",new ji(h,2));function _(y,g,f,m,v,S,R,b,x,w,O){const P=S/x,L=R/w,B=S/2,q=R/2,I=b/2,j=x+1,K=w+1;let k=0,z=0;const F=new $;for(let V=0;V<K;V++){const J=V*L-q;for(let ue=0;ue<j;ue++){const Pe=ue*P-B;F[y]=Pe*m,F[g]=J*v,F[f]=I,c.push(F.x,F.y,F.z),F[y]=0,F[g]=0,F[f]=b>0?1:-1,u.push(F.x,F.y,F.z),h.push(ue/x),h.push(1-V/w),k+=1}}for(let V=0;V<w;V++)for(let J=0;J<x;J++){const ue=d+J+j*V,Pe=d+J+j*(V+1),X=d+(J+1)+j*(V+1),ae=d+(J+1)+j*V;l.push(ue,Pe,ae),l.push(Pe,X,ae),z+=6}o.addGroup(p,z,O),p+=z,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class No extends Fr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=n/l,p=[],_=[],y=[],g=[];for(let f=0;f<u;f++){const m=f*d-a;for(let v=0;v<c;v++){const S=v*h-s;_.push(S,-m,0),y.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const v=m+c*f,S=m+c*(f+1),R=m+1+c*(f+1),b=m+1+c*f;p.push(v,S,b),p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new ji(_,3)),this.setAttribute("normal",new ji(y,3)),this.setAttribute("uv",new ji(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.widthSegments,e.heightSegments)}}function ia(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Ug(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Ug(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function yn(t){const e={};for(let n=0;n<t.length;n++){const i=ia(t[n]);for(const r in i)e[r]=i[r]}return e}function Ug(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Y1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function z_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const $1={clone:ia,merge:yn};var K1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=Y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(r.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new We().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class J1 extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Q1 extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ao,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eb extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _l=new $,Sl=new da,gi=new $;class H_ extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_l,Sl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,Sl,gi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(_l,Sl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,Sl,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new $,Ig=new Fe,Og=new Fe;class oi extends H_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,Ig,Og),n.subVectors(Og,Ig)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class up extends H_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=-90,Rs=1;class Yf extends zn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(bs,Rs,e,n);r.layers=this.layers,this.add(r);const s=new oi(bs,Rs,e,n);s.layers=this.layers,this.add(s);const a=new oi(bs,Rs,e,n);a.layers=this.layers,this.add(a);const o=new oi(bs,Rs,e,n);o.layers=this.layers,this.add(o);const l=new oi(bs,Rs,e,n);l.layers=this.layers,this.add(l);const c=new oi(bs,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class tb extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class at{constructor(e){this.value=e}clone(){return new at(this.value.clone===void 0?this.value:this.value.clone())}}function Fg(t,e,n,i){const r=nb(i);switch(n){case E_:return t*e;case w_:return t*e/r.components*r.byteLength;case np:return t*e/r.components*r.byteLength;case us:return t*e*2/r.components*r.byteLength;case ip:return t*e*2/r.components*r.byteLength;case M_:return t*e*3/r.components*r.byteLength;case Ei:return t*e*4/r.components*r.byteLength;case rp:return t*e*4/r.components*r.byteLength;case Hl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xf:case Sf:return Math.max(t,16)*Math.max(e,8)/4;case vf:case _f:return Math.max(t,8)*Math.max(e,8)/2;case yf:case Ef:case wf:case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mf:case Sc:case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Gf:case Vf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Wf:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yc:case jf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nb(t){switch(t){case Vt:case x_:return{byteLength:1,components:1};case go:case __:case Ci:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case Ai:case Qh:case ci:return{byteLength:4,components:1};case S_:case y_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G_(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ib(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ab=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ob=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ub=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ab=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ub=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$b=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sR=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,aR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vR=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_R=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ER=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,LR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$R=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:rb,alphahash_pars_fragment:sb,alphamap_fragment:ab,alphamap_pars_fragment:ob,alphatest_fragment:lb,alphatest_pars_fragment:cb,aomap_fragment:ub,aomap_pars_fragment:db,batching_pars_vertex:fb,batching_vertex:hb,begin_vertex:pb,beginnormal_vertex:mb,bsdfs:gb,iridescence_fragment:vb,bumpmap_pars_fragment:xb,clipping_planes_fragment:_b,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:yb,clipping_planes_vertex:Eb,color_fragment:Mb,color_pars_fragment:wb,color_pars_vertex:Tb,color_vertex:bb,common:Rb,defaultnormal_vertex:Ab,displacementmap_pars_vertex:Cb,displacementmap_vertex:Pb,emissivemap_fragment:Nb,emissivemap_pars_fragment:Db,colorspace_fragment:Lb,colorspace_pars_fragment:Ub,envmap_fragment:Ib,envmap_common_pars_fragment:Ob,envmap_pars_fragment:Fb,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:$b,envmap_vertex:kb,fog_vertex:zb,fog_pars_vertex:Hb,fog_fragment:Gb,fog_pars_fragment:Vb,gradientmap_pars_fragment:Wb,lightmap_pars_fragment:Xb,lights_lambert_fragment:jb,lights_lambert_pars_fragment:qb,lights_pars_begin:Yb,lights_toon_fragment:Kb,lights_toon_pars_fragment:Zb,lights_phong_fragment:Jb,lights_phong_pars_fragment:Qb,lights_physical_fragment:eR,lights_physical_pars_fragment:tR,lights_fragment_begin:nR,lights_fragment_maps:iR,lights_fragment_end:rR,lightprobes_pars_fragment:sR,logdepthbuf_fragment:aR,logdepthbuf_pars_fragment:oR,logdepthbuf_pars_vertex:lR,logdepthbuf_vertex:cR,map_fragment:uR,map_pars_fragment:dR,map_particle_fragment:fR,map_particle_pars_fragment:hR,metalnessmap_fragment:pR,metalnessmap_pars_fragment:mR,morphinstance_vertex:gR,morphcolor_vertex:vR,morphnormal_vertex:xR,morphtarget_pars_vertex:_R,morphtarget_vertex:SR,normal_fragment_begin:yR,normal_fragment_maps:ER,normal_pars_fragment:MR,normal_pars_vertex:wR,normal_vertex:TR,normalmap_pars_fragment:bR,clearcoat_normal_fragment_begin:RR,clearcoat_normal_fragment_maps:AR,clearcoat_pars_fragment:CR,iridescence_pars_fragment:PR,opaque_fragment:NR,packing:DR,premultiplied_alpha_fragment:LR,project_vertex:UR,dithering_fragment:IR,dithering_pars_fragment:OR,roughnessmap_fragment:FR,roughnessmap_pars_fragment:BR,shadowmap_pars_fragment:kR,shadowmap_pars_vertex:zR,shadowmap_vertex:HR,shadowmask_pars_fragment:GR,skinbase_vertex:VR,skinning_pars_vertex:WR,skinning_vertex:XR,skinnormal_vertex:jR,specularmap_fragment:qR,specularmap_pars_fragment:YR,tonemapping_fragment:$R,tonemapping_pars_fragment:KR,transmission_fragment:ZR,transmission_pars_fragment:JR,uv_pars_fragment:QR,uv_pars_vertex:eA,uv_vertex:tA,worldpos_vertex:nA,background_vert:iA,background_frag:rA,backgroundCube_vert:sA,backgroundCube_frag:aA,cube_vert:oA,cube_frag:lA,depth_vert:cA,depth_frag:uA,distance_vert:dA,distance_frag:fA,equirect_vert:hA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:gA,meshbasic_vert:vA,meshbasic_frag:xA,meshlambert_vert:_A,meshlambert_frag:SA,meshmatcap_vert:yA,meshmatcap_frag:EA,meshnormal_vert:MA,meshnormal_frag:wA,meshphong_vert:TA,meshphong_frag:bA,meshphysical_vert:RA,meshphysical_frag:AA,meshtoon_vert:CA,meshtoon_frag:PA,points_vert:NA,points_frag:DA,shadow_vert:LA,shadow_frag:UA,sprite_vert:IA,sprite_frag:OA},ye={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},_i={basic:{uniforms:yn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:yn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:yn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:yn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:yn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:yn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:yn([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:yn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:yn([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:yn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:yn([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:yn([ye.common,ye.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:yn([ye.lights,ye.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};_i.physical={uniforms:yn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const yl={r:0,b:0,g:0},FA=new Bt,V_=new We;V_.set(-1,0,0,0,1,0,0,0,1);function BA(t,e,n,i,r,s){const a=new ut(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function p(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){const S=m.backgroundBlurriness>0;v=e.get(v,S)}return v}function _(m){let v=!1;const S=p(m);S===null?g(a,o):S&&S.isColor&&(g(S,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,v){const S=p(v);S&&S.isCubeTexture?(c===void 0&&(c=new er(new Po(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ia(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(FA.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(V_),c.material.toneMapped=it.getTransfer(S.colorSpace)!==vt,(u!==S||h!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new er(new No(2,2),new wn({name:"BackgroundMaterial",uniforms:ia(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=it.getTransfer(S.colorSpace)!==vt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,v){m.getRGB(yl,z_(t)),n.buffers.color.setClear(yl.r,yl.g,yl.b,v,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),o=v,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:_,addToRenderList:y,dispose:f}}function kA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(L,B,q,I,j){let K=!1;const k=h(L,I,q,B);s!==k&&(s=k,c(s.object)),K=p(L,I,q,j),K&&_(L,I,q,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(L,B,q,I),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function u(L){return t.deleteVertexArray(L)}function h(L,B,q,I){const j=I.wireframe===!0;let K=i[B.id];K===void 0&&(K={},i[B.id]=K);const k=L.isInstancedMesh===!0?L.id:0;let z=K[k];z===void 0&&(z={},K[k]=z);let F=z[q.id];F===void 0&&(F={},z[q.id]=F);let V=F[j];return V===void 0&&(V=d(l()),F[j]=V),V}function d(L){const B=[],q=[],I=[];for(let j=0;j<n;j++)B[j]=0,q[j]=0,I[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,B,q,I){const j=s.attributes,K=B.attributes;let k=0;const z=q.getAttributes();for(const F in z)if(z[F].location>=0){const J=j[F];let ue=K[F];if(ue===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),J===void 0||J.attribute!==ue||ue&&J.data!==ue.data)return!0;k++}return s.attributesNum!==k||s.index!==I}function _(L,B,q,I){const j={},K=B.attributes;let k=0;const z=q.getAttributes();for(const F in z)if(z[F].location>=0){let J=K[F];J===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));const ue={};ue.attribute=J,J&&J.data&&(ue.data=J.data),j[F]=ue,k++}s.attributes=j,s.attributesNum=k,s.index=I}function y(){const L=s.newAttributes;for(let B=0,q=L.length;B<q;B++)L[B]=0}function g(L){f(L,0)}function f(L,B){const q=s.newAttributes,I=s.enabledAttributes,j=s.attributeDivisors;q[L]=1,I[L]===0&&(t.enableVertexAttribArray(L),I[L]=1),j[L]!==B&&(t.vertexAttribDivisor(L,B),j[L]=B)}function m(){const L=s.newAttributes,B=s.enabledAttributes;for(let q=0,I=B.length;q<I;q++)B[q]!==L[q]&&(t.disableVertexAttribArray(q),B[q]=0)}function v(L,B,q,I,j,K,k){k===!0?t.vertexAttribIPointer(L,B,q,j,K):t.vertexAttribPointer(L,B,q,I,j,K)}function S(L,B,q,I){y();const j=I.attributes,K=q.getAttributes(),k=B.defaultAttributeValues;for(const z in K){const F=K[z];if(F.location>=0){let V=j[z];if(V===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const J=V.normalized,ue=V.itemSize,Pe=e.get(V);if(Pe===void 0)continue;const X=Pe.buffer,ae=Pe.type,ge=Pe.bytesPerElement,we=ae===t.INT||ae===t.UNSIGNED_INT||V.gpuType===Qh;if(V.isInterleavedBufferAttribute){const _e=V.data,ke=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,Be=V.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Te=0;Te<F.locationSize;Te++)f(F.location+Te,_e.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Te=0;Te<F.locationSize;Te++)g(F.location+Te);t.bindBuffer(t.ARRAY_BUFFER,X);for(let Te=0;Te<F.locationSize;Te++)v(F.location+Te,ue/F.locationSize,ae,J,ke*ge,(Be+ue/F.locationSize*Te)*ge,we)}else{if(V.isInstancedBufferAttribute){for(let _e=0;_e<F.locationSize;_e++)f(F.location+_e,V.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let _e=0;_e<F.locationSize;_e++)g(F.location+_e);t.bindBuffer(t.ARRAY_BUFFER,X);for(let _e=0;_e<F.locationSize;_e++)v(F.location+_e,ue/F.locationSize,ae,J,ue*ge,ue/F.locationSize*_e*ge,we)}}else if(k!==void 0){const J=k[z];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(F.location,J);break;case 3:t.vertexAttrib3fv(F.location,J);break;case 4:t.vertexAttrib4fv(F.location,J);break;default:t.vertexAttrib1fv(F.location,J)}}}}m()}function R(){O();for(const L in i){const B=i[L];for(const q in B){const I=B[q];for(const j in I){const K=I[j];for(const k in K)u(K[k].object),delete K[k];delete I[j]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;const B=i[L.id];for(const q in B){const I=B[q];for(const j in I){const K=I[j];for(const k in K)u(K[k].object),delete K[k];delete I[j]}}delete i[L.id]}function x(L){for(const B in i){const q=i[B];for(const I in q){const j=q[I];if(j[L.id]===void 0)continue;const K=j[L.id];for(const k in K)u(K[k].object),delete K[k];delete j[L.id]}}}function w(L){for(const B in i){const q=i[B],I=L.isInstancedMesh===!0?L.id:0,j=q[I];if(j!==void 0){for(const K in j){const k=j[K];for(const z in k)u(k[z].object),delete k[z];delete j[K]}delete q[I],Object.keys(q).length===0&&delete i[B]}}}function O(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function zA(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function HA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==Ei&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const w=x===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Vt&&x!==ci&&!w&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&h===!1;n.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&h===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:S,maxSamples:R,samples:b}}function GA(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new pr,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,v=m*4;let S=f.clippingState||null;l.value=S,S=u(_,d,v,p);for(let R=0;R!==v;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const f=p+y*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,S=p;v!==y;++v,S+=4)a.copy(h[v]).applyMatrix4(m,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}class dp extends Yt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new F_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Po(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:$n});s.uniforms.tEquirect.value=n;const a=new er(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=rn),new Yf(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Bg=256,VA=3,WA=20,W_=256,X_=16,XA=3,jA=new $,qA=new ut;class bc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yf(1,10,null),this._boxMesh=new er(new Po(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=jA}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(qA));const g=new Yf(i,r,u);return g.position.copy(o),g.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=_,e.background=y,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Bg,C_(e))}_fromTexture(e,n){e.mapping===ta||e.mapping===mo?this._setSize(e.image.length===0?Bg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=kg(e,!1,!1),i=Math.log2(e)-VA;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=kg(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===ta||e.mapping===mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zg()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=YA(),this._integrationMaterial=$A());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/X_);for(let a=0;a<=i;a++){const o=bc.lodToRoughness(a,i);if(a>i-XA)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(W_*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=KA());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function kg(t,e,n){return new dp(t,{minFilter:_r,generateMipmaps:e,type:Ci,colorSpace:na,depthBuffer:n})}function Do(t,e,n){return new wn({name:t,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:n,side:nn,blending:$n,depthTest:!1,depthWrite:!1})}function YA(){return Do("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${W_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $A(){return Do("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:X_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function KA(){return Do("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${WA}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function zg(){return Do("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Hg(){return Do("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ZA(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Lu||p===Uu)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const y=new dp(_.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,_=p===Lu||p===Uu,y=p===ta||p===mo;if(_||y){let g=n.get(d);const f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new bc(t)),g=_?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const m=d.image;return _&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new bc(t)),g=_?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,p){return p===Lu?d.mapping=ta:p===Uu&&(d.mapping=mo),d}function l(d){let p=0;const _=6;for(let y=0;y<_;y++)d[y]!==void 0&&p++;return p===_}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function JA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xl("WebGLRenderer: "+i+" extension not supported."),r}}}function QA(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);const y=s.get(_);y&&(e.remove(y),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(_,y){return r[y.id]!==void 0||(y.addEventListener("dispose",o),r[y.id]=new WeakRef(y),a.register(y,y.id,y),n.memory.geometries++),y}function u(_){const y=_.attributes;for(const g in y)e.update(y[g],t.ARRAY_BUFFER)}function h(_){const y=_.index,g=_.attributes.position;let f=0;if(g===void 0)return;const m=y!==null?y.array.length:g.array.length/3-1,v=g.count>=65535?O_:I_,S=new v(Math.ceil(m/3)*6,1),R=S.array;if(y!==null){const x=y.array;f=y.version;for(let w=0,O=0;w<m;w+=3){const P=x[w+0],L=x[w+1],B=x[w+2];R[O++]=P,R[O++]=L,R[O++]=L,R[O++]=B,R[O++]=B,R[O++]=P}}else{f=g.version;for(let x=0,w=0;x<m;x+=3){const O=x+0,P=x+1,L=x+2;R[w++]=O,R[w++]=P,R[w++]=P,R[w++]=L,R[w++]=L,R[w++]=O}}S.version=f;const b=s.get(_);b&&e.remove(b),s.set(_,S)}function d(_){const y=s.get(_);if(y){const g=_.index;g!==null&&y.version<g.version&&h(_)}else h(_);return s.get(_)}function p(){for(const _ in r){const y=r[_].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function eC(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*a,p),n.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let y=0;for(let g=0;g<p;g++)y+=d[g];n.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function tC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nC(t,e,n){const i=new WeakMap,r=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let P=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let R=o.attributes.position.count*S,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const x=new Float32Array(R*b*4*h),w=new D_(x,R,b,h);w.type=ci,w.needsUpdate=!0;const O=S*4;for(let L=0;L<h;L++){const B=f[L],q=m[L],I=v[L],j=R*b*4*L;for(let K=0;K<B.count;K++){const k=K*O;_===!0&&(r.fromBufferAttribute(B,K),x[j+k+0]=r.x,x[j+k+1]=r.y,x[j+k+2]=r.z,x[j+k+3]=0),y===!0&&(r.fromBufferAttribute(q,K),x[j+k+4]=r.x,x[j+k+5]=r.y,x[j+k+6]=r.z,x[j+k+7]=0),g===!0&&(r.fromBufferAttribute(I,K),x[j+k+8]=r.x,x[j+k+9]=r.y,x[j+k+10]=r.z,x[j+k+11]=I.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new Fe(R,b)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function iC(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const rC={[u_]:"LINEAR_TONE_MAPPING",[d_]:"REINHARD_TONE_MAPPING",[f_]:"CINEON_TONE_MAPPING",[h_]:"ACES_FILMIC_TONE_MAPPING",[m_]:"AGX_TONE_MAPPING",[g_]:"NEUTRAL_TONE_MAPPING",[p_]:"CUSTOM_TONE_MAPPING"};function sC(t,e,n,i,r,s){const a=new Yt(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Fr;u.setAttribute("position",new ji([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ji([0,2,0,0,2,0],2));const h=new J1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new er(u,h),p=new up(-1,1,1,-1,0,1);let _=null,y=null,g=!1,f,m=null,v=[],S=!1;this.setSize=function(R,b){a.setSize(R,b),o!==null&&o.setSize(R,b),l!==null&&l.setSize(R,b);for(let x=0;x<v.length;x++){const w=v[x];w.setSize&&w.setSize(R,b)}},this.setEffects=function(R){v=R,S=v.length>0&&v[0].isRenderPass===!0;const b=a.width,x=a.height;v.length>0&&o===null&&(o=new Yt(b,x,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new Yt(b,x,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));const w=r===!0&&v.some(O=>O.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new qi(b,x),s===!0&&(c.format=Gi,c.type=cs)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let O=0;O<v.length;O++){const P=v[O];P.setSize&&P.setSize(b,x),w&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,b){if(g||R.toneMapping===Ri&&v.length===0)return!1;if(m=b,b!==null){const x=b.width,w=b.height;(a.width!==x||a.height!==w)&&this.setSize(x,w)}return S===!1&&R.setRenderTarget(a),f=R.toneMapping,R.toneMapping=Ri,!0},this.hasRenderPass=function(){return S},this.end=function(R,b){R.toneMapping=f,g=!0;let x=a,w=o;for(let O=0;O<v.length;O++){const P=v[O];P.enabled!==!1&&(P.render(R,w,x,b),P.needsSwap!==!1&&(x=w,w=w===o?l:o))}if(_!==R.outputColorSpace||y!==R.toneMapping){_=R.outputColorSpace,y=R.toneMapping,h.defines={},it.getTransfer(_)===vt&&(h.defines.SRGB_TRANSFER="");const O=rC[y];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(m),R.render(d,p),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const j_=new un,q_=new qi(1,1),Y_=new B_(1),$_=new D_,K_=new C1,Z_=new F_,Gg=[],Vg=[],Wg=new Float32Array(16),Xg=new Float32Array(9),jg=new Float32Array(4);function ha(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Gg[r];if(s===void 0&&(s=new Float32Array(r),Gg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yc(t,e){let n=Vg[e];n===void 0&&(n=new Int32Array(e),Vg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function lC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function cC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function uC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;jg.set(i),t.uniformMatrix2fv(this.addr,!1,jg),Kt(n,i)}}function dC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;Xg.set(i),t.uniformMatrix3fv(this.addr,!1,Xg),Kt(n,i)}}function fC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;Wg.set(i),t.uniformMatrix4fv(this.addr,!1,Wg),Kt(n,i)}}function hC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function mC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function gC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function vC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function _C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function $c(t){return t.version===0&&(t.compareFunction=R_,t.needsUpdate=!0),t}function yC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=$c(q_):s=j_,n.setTexture2D(e||s,r)}function EC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||K_,r)}function MC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=$c(Y_):s=Z_,n.setTextureCube(e||s,r)}function wC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$_,r)}function TC(t){switch(t){case 5126:return aC;case 35664:return oC;case 35665:return lC;case 35666:return cC;case 35674:return uC;case 35675:return dC;case 35676:return fC;case 5124:case 35670:return hC;case 35667:case 35671:return pC;case 35668:case 35672:return mC;case 35669:case 35673:return gC;case 5125:return vC;case 36294:return xC;case 36295:return _C;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return EC;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return wC}}function bC(t,e){t.uniform1fv(this.addr,e)}function RC(t,e){const n=ha(e,this.size,2);t.uniform2fv(this.addr,n)}function AC(t,e){const n=ha(e,this.size,3);t.uniform3fv(this.addr,n)}function CC(t,e){const n=ha(e,this.size,4);t.uniform4fv(this.addr,n)}function PC(t,e){const n=ha(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function NC(t,e){const n=ha(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DC(t,e){const n=ha(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function LC(t,e){t.uniform1iv(this.addr,e)}function UC(t,e){t.uniform2iv(this.addr,e)}function IC(t,e){t.uniform3iv(this.addr,e)}function OC(t,e){t.uniform4iv(this.addr,e)}function FC(t,e){t.uniform1uiv(this.addr,e)}function BC(t,e){t.uniform2uiv(this.addr,e)}function kC(t,e){t.uniform3uiv(this.addr,e)}function zC(t,e){t.uniform4uiv(this.addr,e)}function HC(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=$c(q_):a=j_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function GC(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||K_,s[a])}function VC(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=$c(Y_):a=Z_;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function WC(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||$_,s[a])}function XC(t){switch(t){case 5126:return bC;case 35664:return RC;case 35665:return AC;case 35666:return CC;case 35674:return PC;case 35675:return NC;case 35676:return DC;case 5124:case 35670:return LC;case 35667:case 35671:return UC;case 35668:case 35672:return IC;case 35669:case 35673:return OC;case 5125:return FC;case 36294:return BC;case 36295:return kC;case 36296:return zC;case 35678:case 36198:case 36298:case 36306:case 35682:return HC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return VC;case 36289:case 36303:case 36311:case 36292:return WC}}class jC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TC(n.type)}}class qC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XC(n.type)}}class YC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const id=/(\w+)(\])?(\[|\.)?/g;function qg(t,e){t.seq.push(e),t.map[e.id]=e}function $C(t,e,n){const i=t.name,r=i.length;for(id.lastIndex=0;;){const s=id.exec(i),a=id.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){qg(n,c===void 0?new jC(o,t,e):new qC(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new YC(o),qg(n,h)),n=h}}}class jl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);$C(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Yg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KC=37297;let ZC=0;function JC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const $g=new We;function QC(t){it._getMatrix($g,it.workingColorSpace,t);const e=`mat3( ${$g.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Ec:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+JC(t.getShaderSource(e),o)}else return s}function e2(t,e){const n=QC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const t2={[u_]:"Linear",[d_]:"Reinhard",[f_]:"Cineon",[h_]:"ACESFilmic",[m_]:"AgX",[g_]:"Neutral",[p_]:"Custom"};function n2(t,e){const n=t2[e];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new $;function i2(){it.getLuminanceCoefficients(El);const t=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function s2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function a2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Fa(t){return t!==""}function Zg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o2=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(t){return t.replace(o2,l2)}function l2(t,e){const n=$e[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $f(n)}const c2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(t){return t.replace(c2,u2)}function u2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function e0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const d2={[zl]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function f2(t){return d2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const h2={[mo]:"ENVMAP_MODE_REFRACTION"};function p2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":h2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m2={[c_]:"ENVMAP_BLENDING_MULTIPLY",[YT]:"ENVMAP_BLENDING_MIX",[$T]:"ENVMAP_BLENDING_ADD"};function g2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":m2[t.combine]||"ENVMAP_BLENDING_NONE"}function v2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=f2(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=p2(n),h=g2(n),d=r2(n),p=s2(s),_=r.createProgram();let y,g,f=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Fa).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Fa).join(`
`),g.length>0&&(g+=`
`)):(y=[e0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),g=[e0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?$e.tonemapping_pars_fragment:"",n.toneMapping!==Ri?n2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,e2("linearToOutputTexel",n.outputColorSpace),i2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fa).join(`
`)),a=$f(a),a=Zg(a,n),a=Jg(a,n),o=$f(o),o=Zg(o,n),o=Jg(o,n),a=Qg(a),o=Qg(o),n.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const m=f+y+a,v=f+g+o,S=Yg(r,r.VERTEX_SHADER,m),R=Yg(r,r.FRAGMENT_SHADER,v);r.attachShader(_,S),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(P){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",B=r.getShaderInfoLog(S)||"",q=r.getShaderInfoLog(R)||"",I=L.trim(),j=B.trim(),K=q.trim();let k=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,S,R);else{const F=Kg(r,S,"vertex"),V=Kg(r,R,"fragment");ht("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+F+`
`+V)}else I!==""?Ge("WebGLProgram: Program Info Log:",I):(j===""||K==="")&&(z=!1);z&&(P.diagnostics={runnable:k,programLog:I,vertexShader:{log:j,prefix:y},fragmentShader:{log:K,prefix:g}})}r.deleteShader(S),r.deleteShader(R),x=new jl(r,_),w=a2(r,_)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(_,KC)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=R,this}let x2=0;class _2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new S2(e),n.set(e,i)),i}}class S2{constructor(e){this.id=x2++,this.code=e,this.usedTimes=0}}function y2(t){return t===us||t===Sc||t===yc}function E2(t,e,n,i,r,s){const a=new L_,o=new _2,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,O,P,L,B){const q=P.fog,I=L.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||j,K),z=d[x.type];let F=i.precision;x.precision!==null&&(F=i.getMaxPrecision(x.precision),F!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",F,"instead."));const V=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=V!==void 0?V.length:0;let ue=0;I.morphAttributes.position!==void 0&&(ue=1),I.morphAttributes.normal!==void 0&&(ue=2),I.morphAttributes.color!==void 0&&(ue=3);let Pe,X,ae,ge;if(z){const Se=_i[z];Pe=Se.vertexShader,X=Se.fragmentShader}else{Pe=x.vertexShader,X=x.fragmentShader;const Se=o.getVertexShaderStage(x),gt=o.getFragmentShaderStage(x);o.update(x,Se,gt),ae=Se.id,ge=gt.id}const we=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,Be=L.isBatchedMesh===!0,Te=!!x.map,He=!!x.matcap,rt=!!k,Me=rt&&k.isPMREMTexture===!0,Le=!!x.aoMap,pt=!!x.lightMap,dt=!!x.bumpMap&&x.wireframe===!1,ze=!!x.normalMap,mt=!!x.displacementMap,Je=!!x.emissiveMap,Ut=!!x.metalnessMap,Ot=!!x.roughnessMap,wt=x.anisotropy>0,N=x.clearcoat>0,lt=x.diffuseRoughness>0,Ke=x.dispersion>0,je=x.retroreflectivity>0,le=x.iridescence>0,St=x.sheen>0,Ne=x.transmission>0,Ve=wt&&!!x.anisotropyMap,A=N&&!!x.clearcoatMap,E=N&&!!x.clearcoatNormalMap,G=N&&!!x.clearcoatRoughnessMap,ie=lt&&!!x.diffuseRoughnessMap,ne=le&&!!x.iridescenceMap,de=le&&!!x.iridescenceThicknessMap,ve=St&&!!x.sheenColorMap,Q=St&&!!x.sheenRoughnessMap,ee=!!x.specularMap,he=!!x.specularColorMap,D=!!x.specularIntensityMap,te=Ne&&!!x.transmissionMap,Z=Ne&&!!x.thicknessMap,pe=!!x.gradientMap,oe=!!x.alphaMap,fe=x.alphaTest>0,Ue=!!x.alphaHash,Ye=!!x.extensions;let se=Ri;x.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(se=t.toneMapping);const Ie=Me?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,qe={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:Pe,fragmentShader:X,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:F,batching:Be,batchingColor:Be&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:He,envMap:rt,envMapMode:rt&&k.mapping,envMapPMREM:Me,envMapMaxLod:Me?Ie.length-1:null,envMapSize:Me?Ie[0].width:null,aoMap:Le,lightMap:pt,bumpMap:dt,normalMap:ze,displacementMap:mt,emissiveMap:Je,normalMapObjectSpace:ze&&x.normalMapType===ZT,normalMapTangentSpace:ze&&x.normalMapType===pg,packedNormalMap:ze&&x.normalMapType===pg&&y2(x.normalMap.format),metalnessMap:Ut,roughnessMap:Ot,anisotropy:wt,anisotropyMap:Ve,clearcoat:N,clearcoatMap:A,clearcoatNormalMap:E,clearcoatRoughnessMap:G,diffuseRoughness:lt,diffuseRoughnessMap:ie,dispersion:Ke,retroreflection:je,iridescence:le,iridescenceMap:ne,iridescenceThicknessMap:de,sheen:St,sheenColorMap:ve,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:he,specularIntensityMap:D,transmission:Ne,transmissionMap:te,thicknessMap:Z,gradientMap:pe,opaque:x.transparent===!1&&x.blending===qa&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:fe,alphaHash:Ue,combine:x.combine,mapUv:Te&&p(x.map.channel),aoMapUv:Le&&p(x.aoMap.channel),lightMapUv:pt&&p(x.lightMap.channel),bumpMapUv:dt&&p(x.bumpMap.channel),normalMapUv:ze&&p(x.normalMap.channel),displacementMapUv:mt&&p(x.displacementMap.channel),emissiveMapUv:Je&&p(x.emissiveMap.channel),metalnessMapUv:Ut&&p(x.metalnessMap.channel),roughnessMapUv:Ot&&p(x.roughnessMap.channel),anisotropyMapUv:Ve&&p(x.anisotropyMap.channel),clearcoatMapUv:A&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(x.sheenRoughnessMap.channel),specularMapUv:ee&&p(x.specularMap.channel),specularColorMapUv:he&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:te&&p(x.transmissionMap.channel),thicknessMapUv:Z&&p(x.thicknessMap.channel),alphaMapUv:oe&&p(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ze||wt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Te||oe),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ze===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ue,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:Je&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ye&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&x.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function y(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)w.push(O),w.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(g(w,x),f(w,x),w.push(t.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function f(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function m(x){const w=d[x.type];let O;if(w){const P=_i[w];O=$1.clone(P.uniforms)}else O=x.uniforms;return O}function v(x,w){let O=u.get(w);return O!==void 0?++O.usedTimes:(O=new v2(t,w,x,r),c.push(O),u.set(w,O)),O}function S(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function b(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:m,acquireProgram:v,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:b}}function M2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function w2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function t0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function n0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,_,y,g,f){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:_,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:f},t[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=_,m.materialVariant=a(d),m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=g,m.group=f),e++,m}function l(d,p,_,y,g,f,m){m.reversedDepth===!0&&(g=-g);const v=o(d,p,_,y,g,f);_.transmission>0?i.push(v):_.transparent===!0?r.push(v):n.push(v)}function c(d,p,_,y,g,f){const m=o(d,p,_,y,g,f);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,p){n.length>1&&n.sort(d||w2),i.length>1&&i.sort(p||t0),r.length>1&&r.sort(p||t0)}function h(){for(let d=e,p=t.length;d<p;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function T2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new n0,t.set(i,[a])):r>=s.length?(a=new n0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function b2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new $,color:new ut};break;case"SpotLight":n={position:new $,direction:new $,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":n={color:new ut,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function R2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let A2=0;function C2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function P2(t){const e=new b2,n=R2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Bt,a=new Bt;function o(c){let u=0,h=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,_=0,y=0,g=0,f=0,m=0,v=0,S=0,R=0,b=0,x=0,w=0,O=0,P=0;c.sort(C2);for(let B=0,q=c.length;B<q;B++){const I=c[B],j=I.color,K=I.intensity,k=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===us?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=j.r*K,h+=j.g*K,d+=j.b*K;else if(I.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(I.sh.coefficients[F],K);P++}else if(I.isSunLight){const F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,J=n.get(I);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[_]=J,i.sunShadowMap[_]=z;const ue=V.getViewportCount();for(let Pe=0;Pe<ue;Pe++)i.sunShadowMatrix[y+Pe]=V.getMatrix(Pe),i.sunShadowCascade[y+Pe]=V._cascadeData[Pe];y+=ue,_++}i.sun[p]=F,p++}else if(I.isDirectionalLight){const F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,J=n.get(I);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=I.shadow.matrix,R++}i.directional[g]=F,g++}else if(I.isSpotLight){const F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(j).multiplyScalar(K),F.distance=k,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,i.spot[m]=F;const V=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,V.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[m]=V.matrix,I.castShadow){const J=n.get(I);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.spotShadow[m]=J,i.spotShadowMap[m]=z,x++}m++}else if(I.isRectAreaLight){const F=e.get(I);F.color.copy(j).multiplyScalar(K),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=F,v++}else if(I.isPointLight){const F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){const V=I.shadow,J=n.get(I);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=z,i.pointShadowMatrix[f]=I.shadow.matrix,b++}i.point[f]=F,f++}else if(I.isHemisphereLight){const F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(K),F.groundColor.copy(I.groundColor).multiplyScalar(K),i.hemi[S]=F,S++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.sunLength!==p||L.directionalLength!==g||L.pointLength!==f||L.spotLength!==m||L.rectAreaLength!==v||L.hemiLength!==S||L.numSunShadows!==_||L.numDirectionalShadows!==R||L.numPointShadows!==b||L.numSpotShadows!==x||L.numSpotMaps!==w||L.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=g,i.spot.length=m,i.rectArea.length=v,i.point.length=f,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+w-O,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=P,L.sunLength=p,L.directionalLength=g,L.pointLength=f,L.spotLength=m,L.rectAreaLength=v,L.hemiLength=S,L.numSunShadows=_,L.numDirectionalShadows=R,L.numPointShadows=b,L.numSpotShadows=x,L.numSpotMaps=w,L.numLightProbes=P,i.version=A2++)}function l(c,u){let h=0,d=0,p=0,_=0,y=0,g=0;const f=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const S=c[m];if(S.isSunLight){const R=i.sun[h];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),h++}else if(S.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(S.isSpotLight){const R=i.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),_++}else if(S.isRectAreaLight){const R=i.rectArea[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),a.identity(),s.copy(S.matrixWorld),s.premultiply(f),a.extractRotation(s),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const R=i.hemi[g];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function i0(t){const e=new P2(t),n=[],i=[],r=[];function s(h){u.camera=h,n.length=0,i.length=0,r.length=0}function a(h){h.isLightProbeGrid?r.push(h):n.push(h)}function o(h){i.push(h)}function l(){e.setup(n),r.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function N2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new i0(t),e.set(r,[o])):s>=a.length?(o=new i0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const D2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U2=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],I2=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],r0=new Bt,Na=new $,rd=new $;function O2(t,e,n){let i=new Tc;const r=new Fe,s=new Fe,a=new Ct,o=new Q1,l=new eb,c={},u=n.maxTextureSize,h={[Dr]:nn,[nn]:Dr,[Fn]:Fn},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:D2,fragmentShader:L2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Fr;_.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new er(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let f=this.type;this.render=function(b,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===CT&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zl);const O=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),B=t.state;B.setBlending($n),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=f!==this.type;q&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(j=>j.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,j=b.length;I<j;I++){const K=b[I],k=K.shadow;if(k===void 0){Ge("WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const z=k.getFrameExtents();r.multiply(z),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,k.mapSize.y=s.y));const F=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=F,k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Oa){if(K.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Yt(r.x,r.y,{format:us,type:Ci,minFilter:rn,magFilter:rn,generateMipmaps:!1}),k.map.texture.name=K.name+".shadowMap",k.map.depthTexture=new qi(r.x,r.y,ci),k.map.depthTexture.name=K.name+".shadowMapDepth",k.map.depthTexture.format=Lr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln}else K.isPointLight?(k.map=new dp(r.x),k.map.depthTexture=new B_(r.x,Ai)):(k.map=new Yt(r.x,r.y),k.map.depthTexture=new qi(r.x,r.y,Ai)),k.map.depthTexture.name=K.name+".shadowMap",k.map.depthTexture.format=Lr,this.type===zl?(k.map.depthTexture.compareFunction=F?b_:T_,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);const V=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();K.isPointLight!==!0&&k.updateMatrices(K,w);const J=k.camera.layers.mask&4294967294?k.camera.layers:w.layers;for(let ue=0;ue<V;ue++){const Pe=k.getCamera(ue);if(K.isPointLight){const X=k.camera,ae=k.matrix,ge=K.distance||X.far;ge!==X.far&&(X.far=ge,X.updateProjectionMatrix()),Na.setFromMatrixPosition(K.matrixWorld),X.position.copy(Na),rd.copy(X.position),rd.add(U2[ue]),X.up.copy(I2[ue]),X.lookAt(rd),X.updateMatrixWorld(),ae.makeTranslation(-Na.x,-Na.y,-Na.z),r0.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),k._frustum.setFromProjectionMatrix(r0,X.coordinateSystem,X.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,ue),t.clear();else{ue===0&&(t.setRenderTarget(k.map),t.clear());const X=k.getViewport(ue);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),B.viewport(a)}i=k.getFrustum(ue),S(x,w,Pe,K,J,this.type)}k.isPointLightShadow!==!0&&this.type===Oa&&m(k,w),k.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(O,P,L)};function m(b,x){const w=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Yt(r.x,r.y,{format:us,type:Ci}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(x,null,w,d,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(x,null,w,p,y,null)}function v(b,x,w,O){let P=null;const L=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)P=L;else if(P=w.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const B=P.uuid,q=x.uuid;let I=c[B];I===void 0&&(I={},c[B]=I);let j=I[q];j===void 0&&(j=P.clone(),I[q]=j,x.addEventListener("dispose",R)),P=j}if(P.visible=x.visible,P.wireframe=x.wireframe,O===Oa?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:h[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=t.properties.get(P);B.light=w}return P}function S(b,x,w,O,P,L){if(b.visible===!1)return;if(b.layers.test(P)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Oa)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);const I=e.update(b),j=b.material;if(Array.isArray(j)){const K=I.groups;for(let k=0,z=K.length;k<z;k++){const F=K[k],V=j[F.materialIndex];if(V&&V.visible){const J=v(b,V,O,L);b.onBeforeShadow(t,b,x,w,I,J,F),t.renderBufferDirect(w,null,I,J,b,F),b.onAfterShadow(t,b,x,w,I,J,F)}}}else if(j.visible){const K=v(b,j,O,L);b.onBeforeShadow(t,b,x,w,I,K,null),t.renderBufferDirect(w,null,I,K,b,null),b.onAfterShadow(t,b,x,w,I,K,null)}}const q=b.children;for(let I=0,j=q.length;I<j;I++)S(q[I],x,w,O,P,L)}function R(b){b.target.removeEventListener("dispose",R);for(const w in c){const O=c[w],P=b.target.uuid;P in O&&(O[P].dispose(),delete O[P])}}}function F2(t,e){function n(){let D=!1;const te=new Ct;let Z=null;const pe=new Ct(0,0,0,0);return{setMask:function(oe){Z!==oe&&!D&&(t.colorMask(oe,oe,oe,oe),Z=oe)},setLocked:function(oe){D=oe},setClear:function(oe,fe,Ue,Ye,se){se===!0&&(oe*=Ye,fe*=Ye,Ue*=Ye),te.set(oe,fe,Ue,Ye),pe.equals(te)===!1&&(t.clearColor(oe,fe,Ue,Ye),pe.copy(te))},reset:function(){D=!1,Z=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,te=!1,Z=null,pe=null,oe=null;return{setReversed:function(fe){if(te!==fe){const Ue=e.get("EXT_clip_control");fe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),te=fe;const Ye=oe;oe=null,this.setClear(Ye)}},getReversed:function(){return te},setTest:function(fe){fe?_e(t.DEPTH_TEST):ke(t.DEPTH_TEST)},setMask:function(fe){Z!==fe&&!D&&(t.depthMask(fe),Z=fe)},setFunc:function(fe){if(te&&(fe=l1[fe]),pe!==fe){switch(fe){case cf:t.depthFunc(t.NEVER);break;case _c:t.depthFunc(t.ALWAYS);break;case uf:t.depthFunc(t.LESS);break;case po:t.depthFunc(t.LEQUAL);break;case df:t.depthFunc(t.EQUAL);break;case ff:t.depthFunc(t.GEQUAL);break;case hf:t.depthFunc(t.GREATER);break;case pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=fe}},setLocked:function(fe){D=fe},setClear:function(fe){oe!==fe&&(oe=fe,te&&(fe=1-fe),t.clearDepth(fe))},reset:function(){D=!1,Z=null,pe=null,oe=null,te=!1}}}function r(){let D=!1,te=null,Z=null,pe=null,oe=null,fe=null,Ue=null,Ye=null,se=null;return{setTest:function(Ie){D||(Ie?_e(t.STENCIL_TEST):ke(t.STENCIL_TEST))},setMask:function(Ie){te!==Ie&&!D&&(t.stencilMask(Ie),te=Ie)},setFunc:function(Ie,qe,Se){(Z!==Ie||pe!==qe||oe!==Se)&&(t.stencilFunc(Ie,qe,Se),Z=Ie,pe=qe,oe=Se)},setOp:function(Ie,qe,Se){(fe!==Ie||Ue!==qe||Ye!==Se)&&(t.stencilOp(Ie,qe,Se),fe=Ie,Ue=qe,Ye=Se)},setLocked:function(Ie){D=Ie},setClear:function(Ie){se!==Ie&&(t.clearStencil(Ie),se=Ie)},reset:function(){D=!1,te=null,Z=null,pe=null,oe=null,fe=null,Ue=null,Ye=null,se=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let u={},h={},d={},p=new WeakMap,_=[],y=null,g=!1,f=null,m=null,v=null,S=null,R=null,b=null,x=null,w=new ut(0,0,0),O=0,P=!1,L=null,B=null,q=null,I=null,j=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,z=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),k=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),k=z>=2);let V=null,J={};const ue=t.getParameter(t.SCISSOR_BOX),Pe=t.getParameter(t.VIEWPORT),X=new Ct().fromArray(ue),ae=new Ct().fromArray(Pe);function ge(D,te,Z,pe){const oe=new Uint8Array(4),fe=t.createTexture();t.bindTexture(D,fe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<Z;Ue++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(te+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return fe}const we={};we[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(t.DEPTH_TEST),a.setFunc(po),dt(!1),ze(ug),_e(t.CULL_FACE),Le($n);function _e(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ke(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Be(D,te){return d[D]!==te?(t.bindFramebuffer(D,te),d[D]=te,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=te),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(D,te){let Z=_,pe=!1;if(D){Z=p.get(te),Z===void 0&&(Z=[],p.set(te,Z));const oe=D.textures;if(Z.length!==oe.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Ue=oe.length;fe<Ue;fe++)Z[fe]=t.COLOR_ATTACHMENT0+fe;Z.length=oe.length,pe=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,pe=!0);pe&&t.drawBuffers(Z)}function He(D){return y!==D?(t.useProgram(D),y=D,!0):!1}const rt={[As]:t.FUNC_ADD,[NT]:t.FUNC_SUBTRACT,[DT]:t.FUNC_REVERSE_SUBTRACT};rt[LT]=t.MIN,rt[UT]=t.MAX;const Me={[IT]:t.ZERO,[OT]:t.ONE,[FT]:t.SRC_COLOR,[o_]:t.SRC_ALPHA,[VT]:t.SRC_ALPHA_SATURATE,[HT]:t.DST_COLOR,[kT]:t.DST_ALPHA,[BT]:t.ONE_MINUS_SRC_COLOR,[l_]:t.ONE_MINUS_SRC_ALPHA,[GT]:t.ONE_MINUS_DST_COLOR,[zT]:t.ONE_MINUS_DST_ALPHA,[WT]:t.CONSTANT_COLOR,[XT]:t.ONE_MINUS_CONSTANT_COLOR,[jT]:t.CONSTANT_ALPHA,[qT]:t.ONE_MINUS_CONSTANT_ALPHA};function Le(D,te,Z,pe,oe,fe,Ue,Ye,se,Ie){if(D===$n){g===!0&&(ke(t.BLEND),g=!1);return}if(g===!1&&(_e(t.BLEND),g=!0),D!==PT){if(D!==f||Ie!==P){if((m!==As||R!==As)&&(t.blendEquation(t.FUNC_ADD),m=As,R=As),Ie)switch(D){case qa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dg:t.blendFunc(t.ONE,t.ONE);break;case fg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ht("WebGLState: Invalid blending: ",D);break}else switch(D){case qa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case fg:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hg:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",D);break}v=null,S=null,b=null,x=null,w.set(0,0,0),O=0,f=D,P=Ie}return}oe=oe||te,fe=fe||Z,Ue=Ue||pe,(te!==m||oe!==R)&&(t.blendEquationSeparate(rt[te],rt[oe]),m=te,R=oe),(Z!==v||pe!==S||fe!==b||Ue!==x)&&(t.blendFuncSeparate(Me[Z],Me[pe],Me[fe],Me[Ue]),v=Z,S=pe,b=fe,x=Ue),(Ye.equals(w)===!1||se!==O)&&(t.blendColor(Ye.r,Ye.g,Ye.b,se),w.copy(Ye),O=se),f=D,P=!1}function pt(D,te){D.side===Fn?ke(t.CULL_FACE):_e(t.CULL_FACE);let Z=D.side===nn;te&&(Z=!Z),dt(Z),D.blending===qa&&D.transparent===!1?Le($n):Le(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Je(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):ke(t.SAMPLE_ALPHA_TO_COVERAGE)}function dt(D){L!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),L=D)}function ze(D){D!==RT?(_e(t.CULL_FACE),D!==B&&(D===ug?t.cullFace(t.BACK):D===AT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ke(t.CULL_FACE),B=D}function mt(D){D!==q&&(k&&t.lineWidth(D),q=D)}function Je(D,te,Z){D?(_e(t.POLYGON_OFFSET_FILL),(I!==te||j!==Z)&&(I=te,j=Z,a.getReversed()&&(te=-te,Z=-Z),t.polygonOffset(te,Z))):ke(t.POLYGON_OFFSET_FILL)}function Ut(D){D?_e(t.SCISSOR_TEST):ke(t.SCISSOR_TEST)}function Ot(D){D===void 0&&(D=t.TEXTURE0+K-1),V!==D&&(t.activeTexture(D),V=D)}function wt(D,te,Z){Z===void 0&&(V===null?Z=t.TEXTURE0+K-1:Z=V);let pe=J[Z];pe===void 0&&(pe={type:void 0,texture:void 0},J[Z]=pe),(pe.type!==D||pe.texture!==te)&&(V!==Z&&(t.activeTexture(Z),V=Z),t.bindTexture(D,te||we[D]),pe.type=D,pe.texture=te)}function N(){const D=J[V];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function lt(){try{t.compressedTexImage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function Ke(){try{t.compressedTexImage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function je(){try{t.texSubImage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function le(){try{t.texSubImage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function St(){try{t.compressedTexSubImage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function Ve(){try{t.texStorage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function A(){try{t.texStorage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function E(){try{t.texImage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function G(){try{t.texImage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function ie(D){return h[D]!==void 0?h[D]:t.getParameter(D)}function ne(D,te){h[D]!==te&&(t.pixelStorei(D,te),h[D]=te)}function de(D){X.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),X.copy(D))}function ve(D){ae.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ae.copy(D))}function Q(D,te){let Z=c.get(te);Z===void 0&&(Z=new WeakMap,c.set(te,Z));let pe=Z.get(D);pe===void 0&&(pe=t.getUniformBlockIndex(te,D.name),t.uniformBlockBinding(te,pe,pe),Z.set(D,pe))}function ee(D,te,Z){const oe=c.get(te).get(D);l[oe]!==Z&&(t.bindBufferBase(t.UNIFORM_BUFFER,oe,Z),l[oe]=Z)}function he(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},V=null,J={},d={},l={},p=new WeakMap,_=[],y=null,g=!1,f=null,m=null,v=null,S=null,R=null,b=null,x=null,w=new ut(0,0,0),O=0,P=!1,L=null,B=null,q=null,I=null,j=null,X.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:ke,bindFramebuffer:Be,drawBuffers:Te,useProgram:He,setBlending:Le,setMaterial:pt,setFlipSided:dt,setCullFace:ze,setLineWidth:mt,setPolygonOffset:Je,setScissorTest:Ut,activeTexture:Ot,bindTexture:wt,unbindTexture:N,compressedTexImage2D:lt,compressedTexImage3D:Ke,texImage2D:E,texImage3D:G,pixelStorei:ne,getParameter:ie,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Ve,texStorage3D:A,texSubImage2D:je,texSubImage3D:le,compressedTexSubImage2D:St,compressedTexSubImage3D:Ne,scissor:de,viewport:ve,reset:he}}function B2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap,h=new Set;let d;const p=new WeakMap,_=new Set,y=new FinalizationRegistry(A=>_.delete(A));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,E){return g?new OffscreenCanvas(A,E):wc("canvas")}function m(A,E,G){let ie=1;const ne=Ve(A);if((ne.width>G||ne.height>G)&&(ie=G/Math.max(ne.width,ne.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const de=Math.floor(ie*ne.width),ve=Math.floor(ie*ne.height);d===void 0&&(d=f(de,ve));const Q=E?f(de,ve):d;return Q.width=de,Q.height=ve,Q.getContext("2d").drawImage(A,0,0,de,ve),Ge("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+de+"x"+ve+")."),Q}else return"data"in A&&Ge("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function v(A){return A.generateMipmaps}function S(A){t.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(A,E,G,ie,ne,de=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ve;ie&&(ve=e.get("EXT_texture_norm16"),ve||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8),G===t.UNSIGNED_SHORT&&ve&&(Q=ve.R16_EXT),G===t.SHORT&&ve&&(Q=ve.R16_SNORM_EXT)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),E===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8),G===t.UNSIGNED_SHORT&&ve&&(Q=ve.RG16_EXT),G===t.SHORT&&ve&&(Q=ve.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),G===t.UNSIGNED_INT&&(Q=t.RGB32UI),G===t.BYTE&&(Q=t.RGB8I),G===t.SHORT&&(Q=t.RGB16I),G===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),G===t.UNSIGNED_INT&&(Q=t.RGBA32UI),G===t.BYTE&&(Q=t.RGBA8I),G===t.SHORT&&(Q=t.RGBA16I),G===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&(G===t.UNSIGNED_SHORT&&ve&&(Q=ve.RGB16_EXT),G===t.SHORT&&ve&&(Q=ve.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),E===t.RGBA){const ee=de?Ec:it.getTransfer(ne);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=ee===vt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&ve&&(Q=ve.RGBA16_EXT),G===t.SHORT&&ve&&(Q=ve.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(A,E){let G;return A?E===null||E===Ai||E===cs?G=t.DEPTH24_STENCIL8:E===ci?G=t.DEPTH32F_STENCIL8:E===go&&(G=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ai||E===cs?G=t.DEPTH_COMPONENT24:E===ci?G=t.DEPTH_COMPONENT32F:E===go&&(G=t.DEPTH_COMPONENT16),G}function w(A,E){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==rn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function O(A){const E=new WeakRef(A);i.get(A).__ref=E,_.add(E),y.register(A,E,E)}function P(A){const E=i.get(A).__ref;E!==void 0&&(_.delete(E),y.unregister(E))}function L(A){q(A.target)}function B(A){I(A.target)}function q(A){A.removeEventListener("dispose",L),P(A),K(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function I(A){A.removeEventListener("dispose",B),P(A),z(A)}function j(){for(const A of _){const E=A.deref();E!==void 0&&(E.isRenderTarget===!0?I(E):q(E))}_.clear(),h.clear()}function K(A){const E=i.get(A);if(E.__webglInit===void 0)return;const G=A.source,ie=p.get(G);if(ie){const ne=ie[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(A),Object.keys(ie).length===0&&p.delete(G)}i.remove(A)}function k(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const G=A.source,ie=p.get(G);delete ie[E.__cacheKey],a.memory.textures--}function z(A){const E=i.get(A);E.__depthDisposeCallback&&E.__depthDisposeCallback();const G=A.depthTexture;if(G&&G.renderTarget===A&&q(G),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let de=0;de<E.__webglFramebuffer[ne].length;de++)t.deleteFramebuffer(E.__webglFramebuffer[ne][de]);else t.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[ne]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ie=A.textures;for(let ne=0,de=ie.length;ne<de;ne++){const ve=i.get(ie[ne]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(ie[ne])}i.remove(A)}let F=0;function V(){F=0}function J(){return F}function ue(A){F=A}function Pe(){const A=F;return A>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function X(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.mipmapsAutoUpdate),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function ae(A,E){const G=i.get(A);if(A.isVideoTexture&&St(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const ie=A.image;if(ie===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(G,A,E);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function ge(A,E){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){pt(G,A,E);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function we(A,E){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){pt(G,A,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function _e(A,E){const G=i.get(A);if(A.version>0&&G.__version!==A.version){dt(G,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const ke={[mf]:t.REPEAT,[Hi]:t.CLAMP_TO_EDGE,[gf]:t.MIRRORED_REPEAT},Be={[ln]:t.NEAREST,[KT]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Iu]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},Te={[QT]:t.NEVER,[R_]:t.ALWAYS,[e1]:t.LESS,[T_]:t.LEQUAL,[t1]:t.EQUAL,[b_]:t.GEQUAL,[n1]:t.GREATER,[i1]:t.NOTEQUAL};function He(A,E){if(E.type===ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===rn||E.magFilter===Iu||E.magFilter===el||E.magFilter===_r||E.minFilter===rn||E.minFilter===Iu||E.minFilter===el||E.minFilter===_r)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ke[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ke[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ke[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Be[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Be[E.minFilter]),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ln||E.minFilter!==el&&E.minFilter!==_r||E.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function rt(A,E){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",L),O(E));const ie=E.source;let ne=p.get(ie);ne===void 0&&(ne={},p.set(ie,ne));const de=X(E);if(de!==A.__cacheKey){ne[de]===void 0&&(ne[de]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[de].usedTimes++;const ve=ne[A.__cacheKey];ve!==void 0&&(ne[A.__cacheKey].usedTimes--,ve.usedTimes===0&&k(E)),A.__cacheKey=de,A.__webglTexture=ne[de].texture}return G}function Me(A,E,G){return Math.floor(Math.floor(A/G)/E)}function Le(A,E,G,ie){const de=A.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,G,ie,E.data);else{de.sort((D,te)=>D.start-te.start);let ve=0;for(let D=1;D<de.length;D++){const te=de[ve],Z=de[D],pe=te.start+te.count,oe=Me(Z.start,E.width,4),fe=Me(te.start,E.width,4);Z.start<=pe+1&&oe===fe&&Me(Z.start+Z.count-1,E.width,4)===oe?te.count=Math.max(te.count,Z.start+Z.count-te.start):(++ve,de[ve]=Z)}de.length=ve+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let D=0,te=de.length;D<te;D++){const Z=de[D],pe=Math.floor(Z.start/4),oe=Math.ceil(Z.count/4),fe=pe%E.width,Ue=Math.floor(pe/E.width),Ye=oe,se=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ue),n.texSubImage2D(t.TEXTURE_2D,0,fe,Ue,Ye,se,G,ie,E.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function pt(A,E,G){let ie=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=t.TEXTURE_3D);const ne=rt(A,E),de=E.source;n.bindTexture(ie,A.__webglTexture,t.TEXTURE0+G);const ve=i.get(de);if(de.version!==ve.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const se=it.getPrimaries(it.workingColorSpace),Ie=E.colorSpace===yi?null:it.getPrimaries(E.colorSpace),qe=E.colorSpace===yi||se===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=m(E.image,!1,r.maxTextureSize);ee=Ne(E,ee);const he=s.convert(E.format,E.colorSpace),D=s.convert(E.type);let te=b(E.internalFormat,he,D,E.normalized,E.colorSpace,E.isVideoTexture);He(ie,E);let Z;const pe=E.mipmaps,oe=E.isVideoTexture!==!0,fe=ve.__version===void 0||ne===!0,Ue=de.dataReady,Ye=w(E,ee);if(E.isDepthTexture)te=x(E.format===Gi,E.type),fe&&(oe?n.texStorage2D(t.TEXTURE_2D,1,te,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,te,ee.width,ee.height,0,he,D,null));else if(E.isDataTexture)if(pe.length>0){oe&&fe&&n.texStorage2D(t.TEXTURE_2D,Ye,te,pe[0].width,pe[0].height);for(let se=0,Ie=pe.length;se<Ie;se++)Z=pe[se],oe?Ue&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Z.width,Z.height,he,D,Z.data):n.texImage2D(t.TEXTURE_2D,se,te,Z.width,Z.height,0,he,D,Z.data);E.generateMipmaps=!1}else oe?(fe&&n.texStorage2D(t.TEXTURE_2D,Ye,te,ee.width,ee.height),Ue&&Le(E,ee,he,D)):n.texImage2D(t.TEXTURE_2D,0,te,ee.width,ee.height,0,he,D,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ye,te,pe[0].width,pe[0].height,ee.depth);for(let se=0,Ie=pe.length;se<Ie;se++)if(Z=pe[se],E.format!==Ei)if(he!==null)if(oe){if(Ue)if(E.layerUpdates.size>0){const qe=Fg(Z.width,Z.height,E.format,E.type);for(const Se of E.layerUpdates){const gt=Z.data.subarray(Se*qe/Z.data.BYTES_PER_ELEMENT,(Se+1)*qe/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Se,Z.width,Z.height,1,he,gt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Z.width,Z.height,ee.depth,he,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,te,Z.width,Z.height,ee.depth,0,Z.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Z.width,Z.height,ee.depth,he,D,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,te,Z.width,Z.height,ee.depth,0,he,D,Z.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{oe&&fe&&n.texStorage2D(t.TEXTURE_2D,Ye,te,pe[0].width,pe[0].height);for(let se=0,Ie=pe.length;se<Ie;se++)Z=pe[se],E.format!==Ei?he!==null?oe?Ue&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Z.width,Z.height,he,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,se,te,Z.width,Z.height,0,Z.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ue&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Z.width,Z.height,he,D,Z.data):n.texImage2D(t.TEXTURE_2D,se,te,Z.width,Z.height,0,he,D,Z.data)}else if(E.isDataArrayTexture)if(oe){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ye,te,ee.width,ee.height,ee.depth),Ue)if(E.layerUpdates.size>0){const se=Fg(ee.width,ee.height,E.format,E.type);for(const Ie of E.layerUpdates){const qe=ee.data.subarray(Ie*se/ee.data.BYTES_PER_ELEMENT,(Ie+1)*se/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ie,ee.width,ee.height,1,he,D,qe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,D,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,he,D,ee.data);else if(E.isData3DTexture)oe?(fe&&n.texStorage3D(t.TEXTURE_3D,Ye,te,ee.width,ee.height,ee.depth),Ue&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,D,ee.data)):n.texImage3D(t.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,he,D,ee.data);else if(E.isFramebufferTexture){if(fe)if(oe)n.texStorage2D(t.TEXTURE_2D,Ye,te,ee.width,ee.height);else{let se=ee.width,Ie=ee.height;for(let qe=0;qe<Ye;qe++)n.texImage2D(t.TEXTURE_2D,qe,te,se,Ie,0,he,D,null),se>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const se=t.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ee.parentNode!==se){se.appendChild(ee),h.add(E),se.onpaint=Ie=>{const qe=Ie.changedElements;for(const Se of h)qe.includes(Se.image)&&(Se.needsUpdate=!0)},se.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const qe=t.RGBA,Se=t.RGBA,gt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,qe,Se,gt,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(pe.length>0){if(oe&&fe){const se=Ve(pe[0]);n.texStorage2D(t.TEXTURE_2D,Ye,te,se.width,se.height)}for(let se=0,Ie=pe.length;se<Ie;se++)Z=pe[se],oe?Ue&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,he,D,Z):n.texImage2D(t.TEXTURE_2D,se,te,he,D,Z);E.generateMipmaps=!1}else if(oe){if(fe){const se=Ve(ee);n.texStorage2D(t.TEXTURE_2D,Ye,te,se.width,se.height)}Ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,D,ee)}else n.texImage2D(t.TEXTURE_2D,0,te,he,D,ee);v(E)&&E.mipmapsAutoUpdate===!0&&S(ie),ve.__version=de.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function dt(A,E,G){if(E.image.length!==6)return;const ie=rt(A,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+G);const de=i.get(ne);if(ne.version!==de.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const ve=it.getPrimaries(it.workingColorSpace),Q=E.colorSpace===yi?null:it.getPrimaries(E.colorSpace),ee=E.colorSpace===yi||ve===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const he=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,te=[];for(let Se=0;Se<6;Se++)!he&&!D?te[Se]=m(E.image[Se],!0,r.maxCubemapSize):te[Se]=D?E.image[Se].image:E.image[Se],te[Se]=Ne(E,te[Se]);const Z=te[0],pe=s.convert(E.format,E.colorSpace),oe=s.convert(E.type);let fe=b(E.internalFormat,pe,oe,E.normalized,E.colorSpace);const Ue=E.isVideoTexture!==!0,Ye=de.__version===void 0||ie===!0,se=ne.dataReady;let Ie=w(E,Z);He(t.TEXTURE_CUBE_MAP,E);let qe;if(E.isDepthTexture){if(fe=x(E.format===Gi,E.type),Ye)if(Ue)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,fe,Z.width,Z.height);else for(let Se=0;Se<6;Se++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,fe,Z.width,Z.height,0,pe,oe,null)}else if(he){Ue&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,fe,Z.width,Z.height);for(let Se=0;Se<6;Se++){qe=te[Se].mipmaps;for(let gt=0;gt<qe.length;gt++){const Zt=qe[gt];E.format!==Ei?pe!==null?Ue?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt,0,0,Zt.width,Zt.height,pe,Zt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt,fe,Zt.width,Zt.height,0,Zt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt,0,0,Zt.width,Zt.height,pe,oe,Zt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt,fe,Zt.width,Zt.height,0,pe,oe,Zt.data)}}}else{if(qe=E.mipmaps,Ue&&Ye){qe.length>0&&Ie++;const Se=Ve(te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,fe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(D){Ue?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,te[Se].width,te[Se].height,pe,oe,te[Se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,fe,te[Se].width,te[Se].height,0,pe,oe,te[Se].data);for(let gt=0;gt<qe.length;gt++){const nr=qe[gt].image[Se].image;Ue?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt+1,0,0,nr.width,nr.height,pe,oe,nr.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt+1,fe,nr.width,nr.height,0,pe,oe,nr.data)}}else{Ue?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,pe,oe,te[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,fe,pe,oe,te[Se]);for(let gt=0;gt<qe.length;gt++){const Zt=qe[gt];Ue?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt+1,0,0,pe,oe,Zt.image[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt+1,fe,pe,oe,Zt.image[Se])}}}v(E)&&E.mipmapsAutoUpdate===!0&&S(t.TEXTURE_CUBE_MAP),de.__version=ne.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ze(A,E,G,ie,ne,de){const ve=s.convert(G.format,G.colorSpace),Q=s.convert(G.type),ee=b(G.internalFormat,ve,Q,G.normalized,G.colorSpace),he=i.get(E),D=i.get(G);if(D.__renderTarget=E,!he.__hasExternalTextures){const te=Math.max(1,E.width>>de),Z=Math.max(1,E.height>>de);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,de,ee,te,Z,E.depth,0,ve,Q,null):n.texImage2D(ne,de,ee,te,Z,0,ve,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),le(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ne,D.__webglTexture,0,je(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ne,D.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(A,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer){const ie=E.depthTexture,ne=ie&&ie.isDepthTexture?ie.type:null,de=x(E.stencilBuffer,ne),ve=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;le(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je(E),de,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,je(E),de,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,de,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,A)}else{const ie=E.textures;for(let ne=0;ne<ie.length;ne++){const de=ie[ne],ve=s.convert(de.format,de.colorSpace),Q=s.convert(de.type),ee=b(de.internalFormat,ve,Q,de.normalized,de.colorSpace);le(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je(E),ee,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,je(E),ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Je(A,E,G){const ie=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=i.get(E.depthTexture);ne.__renderTarget=E;const de=ie?E.depthTexture.image[0]:E.depthTexture.image;(!ne.__webglTexture||de.width!==E.width||de.height!==E.height)&&(de.width=E.width,de.height=E.height,E.depthTexture.needsUpdate=!0),ie?_e(E.depthTexture,0):ae(E.depthTexture,0);const ve=ne.__webglTexture,Q=je(E),ee=ie?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,he=E.depthTexture.format===Gi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===Lr)le(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,ee,ve,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,he,ee,ve,0);else if(E.depthTexture.format===Gi)le(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,ee,ve,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,he,ee,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(A){const E=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const ie=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",ne)};ie.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=ie}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ie=0;ie<6;ie++)Je(E.__webglFramebuffer[ie],A,ie);else A.texture.mipmaps.length>0?Je(E.__webglFramebuffer[0],A,0):Je(E.__webglFramebuffer,A,0);else if(G){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=t.createRenderbuffer(),mt(E.__webglDepthbuffer[ie],A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,de)}}else if(A.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),mt(E.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,de)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ot(A,E,G){const ie=i.get(A);E!==void 0&&ze(ie.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ut(A)}function wt(A){const E=A.texture,G=i.get(A),ie=i.get(E);A.addEventListener("dispose",B),O(A);const ne=A.textures,de=A.isWebGLCubeRenderTarget===!0,ve=ne.length>1;if(ve||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=E.version,a.memory.textures++),de){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let ee=0;ee<E.mipmaps.length;ee++)G.__webglFramebuffer[Q][ee]=t.createFramebuffer()}else G.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)G.__webglFramebuffer[Q]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ve)for(let Q=0,ee=ne.length;Q<ee;Q++){const he=i.get(ne[Q]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&le(A)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<ne.length;Q++){const ee=ne[Q];G.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);const he=s.convert(ee.format,ee.colorSpace),D=s.convert(ee.type),te=b(ee.internalFormat,he,D,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),Z=je(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,te,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),mt(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),He(t.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)ze(G.__webglFramebuffer[Q][ee],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else ze(G.__webglFramebuffer[Q],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);v(E)?S(t.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}else if(ve){for(let Q=0,ee=ne.length;Q<ee;Q++){const he=ne[Q],D=i.get(he);let te=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,D.__webglTexture),He(te,he),ze(G.__webglFramebuffer,A,he,t.COLOR_ATTACHMENT0+Q,te,0),v(he)&&S(te)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,ie.__webglTexture),He(Q,E),E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)ze(G.__webglFramebuffer[ee],A,E,t.COLOR_ATTACHMENT0,Q,ee);else ze(G.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,Q,0);v(E)?S(Q):E.mipmaps.length>0&&t.texParameteri(Q,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}A.depthBuffer&&Ut(A)}function N(A){const E=A.textures;for(let G=0,ie=E.length;G<ie;G++){const ne=E[G];if(v(ne)&&ne.mipmapsAutoUpdate===!0){const de=R(A),ve=i.get(ne).__webglTexture;n.bindTexture(de,ve),S(de),n.unbindTexture()}}}const lt=[];function Ke(A){if(A.samples>0){if(le(A)===!1){const E=A.textures,G=A.width,ie=A.height;let ne=t.COLOR_BUFFER_BIT;const de=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(A),Q=E.length>1;if(Q)for(let he=0;he<E.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<E.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const D=i.get(E[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,D,0)}t.blitFramebuffer(0,0,G,ie,0,0,G,ie,ne,t.NEAREST),l===!0&&(lt.length=0,lt.push(t.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&lt.push(de),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let he=0;he<E.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const D=i.get(E[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,D,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const E=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function je(A){return Math.min(r.maxSamples,A.samples)}function le(A){const E=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function St(A){const E=a.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function Ne(A,E){const G=A.colorSpace,ie=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==na&&G!==yi&&(it.getTransfer(G)===vt?(ie!==Ei||ne!==Vt)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",G)),E}function Ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Pe,this.resetTextureUnits=V,this.getTextureUnits=J,this.setTextureUnits=ue,this.setTexture2D=ae,this.setTexture2DArray=ge,this.setTexture3D=we,this.setTextureCube=_e,this.rebindTextures=Ot,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=le,this.dispose=j}function k2(t,e){function n(i,r=yi){let s;const a=it.getTransfer(r);if(i===Vt)return t.UNSIGNED_BYTE;if(i===ep)return t.UNSIGNED_SHORT_4_4_4_4;if(i===tp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===S_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===y_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===x_)return t.BYTE;if(i===__)return t.SHORT;if(i===go)return t.UNSIGNED_SHORT;if(i===Qh)return t.INT;if(i===Ai)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Ci)return t.HALF_FLOAT;if(i===E_)return t.ALPHA;if(i===M_)return t.RGB;if(i===Ei)return t.RGBA;if(i===Lr)return t.DEPTH_COMPONENT;if(i===Gi)return t.DEPTH_STENCIL;if(i===w_)return t.RED;if(i===np)return t.RED_INTEGER;if(i===us)return t.RG;if(i===ip)return t.RG_INTEGER;if(i===rp)return t.RGBA_INTEGER;if(i===Hl||i===Gl||i===Vl||i===Wl)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vf||i===xf||i===_f||i===Sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yf||i===Ef||i===Mf||i===wf||i===Tf||i===Sc||i===bf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yf||i===Ef)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===wf)return s.COMPRESSED_R11_EAC;if(i===Tf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Sc)return s.COMPRESSED_RG11_EAC;if(i===bf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rf||i===Af||i===Cf||i===Pf||i===Nf||i===Df||i===Lf||i===Uf||i===If||i===Of||i===Ff||i===Bf||i===kf||i===zf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Df)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===If)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Of)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ff)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hf||i===Gf||i===Vf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hf)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wf||i===Xf||i===yc||i===jf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new k_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new wn({vertexShader:z2,fragmentShader:H2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new er(new No(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V2 extends Pi{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",g=new G2,f={},m=n.getContextAttributes();let v=null,S=null;const R=[],b=[],x=new Fe;let w=null,O=null;const P=new oi;P.viewport=new Ct;const L=new oi;L.viewport=new Ct;const B=[P,L],q=new tb;let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ae=R[X];return ae===void 0&&(ae=new Gu,R[X]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(X){let ae=R[X];return ae===void 0&&(ae=new Gu,R[X]=ae),ae.getGripSpace()},this.getHand=function(X){let ae=R[X];return ae===void 0&&(ae=new Gu,R[X]=ae),ae.getHandSpace()};function K(X){const ae=b.indexOf(X.inputSource);if(ae===-1)return;const ge=R[ae];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||a),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",z);for(let X=0;X<R.length;X++){const ae=b[X];ae!==null&&(b[X]=null,R[X].disconnect(ae))}I=null,j=null,g.reset();for(const X in f)delete f[X];if(e.setRenderTarget(v),p=null,d=null,h=null,r=null,S=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),O!==null){const X=O.camera;X.fov=O.fov,X.zoom=O.zoom,X.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",k),r.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,we=null,_e=null;m.depth&&(_e=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=m.stencil?Gi:Lr,we=m.stencil?cs:Ai);const ke={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Yt(d.textureWidth,d.textureHeight,{format:Ei,type:Vt,depthTexture:new qi(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Yt(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(X){for(let ae=0;ae<X.removed.length;ae++){const ge=X.removed[ae],we=b.indexOf(ge);we>=0&&(b[we]=null,R[we].disconnect(ge))}for(let ae=0;ae<X.added.length;ae++){const ge=X.added[ae];let we=b.indexOf(ge);if(we===-1){for(let ke=0;ke<R.length;ke++)if(ke>=b.length){b.push(ge),we=ke;break}else if(b[ke]===null){b[ke]=ge,we=ke;break}if(we===-1)break}const _e=R[we];_e&&_e.connect(ge)}}function F(X,ae){ae===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ae.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ae=X.near,ge=X.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),q.near=L.near=P.near=ae,q.far=L.far=P.far=ge,(I!==q.near||j!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),I=q.near,j=q.far),q.layers.mask=X.layers.mask|6,P.layers.mask=q.layers.mask&-5,L.layers.mask=q.layers.mask&-3;const we=X.parent,_e=q.cameras;F(q,we);for(let ke=0;ke<_e.length;ke++)F(_e[ke],we);q.projectionMatrix.copy(P.projectionMatrix),q.projectionMatrixInverse.copy(P.projectionMatrixInverse),O===null&&X.isPerspectiveCamera&&(O={camera:X,fov:X.fov,zoom:X.zoom}),V(X,q,we)};function V(X,ae,ge){ge===null?X.matrix.copy(ae.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(ae.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ae.projectionMatrix),X.projectionMatrixInverse.copy(ae.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=vo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(X){return f[X]};let J=null;function ue(X,ae){if(u=ae.getViewerPose(c||a),_=ae,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let we=!1;ge.length!==q.cameras.length&&(q.cameras.length=0,we=!0);for(let Te=0;Te<ge.length;Te++){const He=ge[Te];let rt=null;if(p!==null)rt=p.getViewport(He);else{const Le=h.getViewSubImage(d,He);rt=Le.viewport,Te===0&&(e.setRenderTargetTextures(S,Le.colorTexture,Le.depthStencilTexture),e.setRenderTarget(S))}let Me=B[Te];Me===void 0&&(Me=new oi,Me.layers.enable(Te),Me.viewport=new Ct,B[Te]=Me),Me.matrix.fromArray(He.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(He.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(rt.x,rt.y,rt.width,rt.height),Te===0&&(q.matrix.copy(Me.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),we===!0&&q.cameras.push(Me)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const Te=h.getDepthInformation(ge[0]);Te&&Te.isValid&&Te.texture&&g.init(Te,r.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Te=0;Te<ge.length;Te++){const He=ge[Te].camera;if(He){let rt=f[He];rt||(rt=new k_,f[He]=rt);const Me=h.getCameraImage(He);rt.sourceTexture=Me}}}}for(let ge=0;ge<R.length;ge++){const we=b[ge],_e=R[ge];we!==null&&_e!==void 0&&_e.update(we,ae,c||a)}J&&J(X,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Pe=new G_;Pe.setAnimationLoop(ue),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}const W2=new Bt,J_=new We;J_.set(-1,0,0,0,1,0,0,0,1);function X2(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,z_(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,m,v,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),_(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),y(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===nn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===nn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=e.get(f),v=m.envMap,S=m.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(W2.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(J_),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=v*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,n(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function j2(t,e,n,i){let r={},s={};function a(m,v){const S=v.program;i.uniformBlockBinding(m,S,r[m.id])}function o(m,v){let S=r[m.id];S===void 0&&(_(m),S=l(m),r[m.id]=S,m.addEventListener("dispose",g));const R=v.program;i.updateUBOMapping(m,R);const b=e.render.frame;s[m.id]!==b&&(c(m),s[m.id]=b)}function l(m){const v=t.createBuffer(),S=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,S,R),t.bindBuffer(t.UNIFORM_BUFFER,null),v}function c(m){const v=r[m.id],S=m.uniforms,R=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,x=S.length;b<x;b++){const w=S[b];if(Array.isArray(w))for(let O=0,P=w.length;O<P;O++)u(w[O],b,O,R);else u(w,b,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(m,v,S,R){if(d(m,v,S,R)===!0){const b=m.__offset,x=m.value;if(Array.isArray(x)){let w=0;for(let O=0;O<x.length;O++){const P=x[O],L=y(P,!0);h(P,m.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,b,m.__data)}}function h(m,v,S){typeof m=="number"||typeof m=="boolean"?v[S]=m:m.isMatrix3?(v[S]=m.elements[0],v[S+1]=m.elements[1],v[S+2]=m.elements[2],v[S+3]=0,v[S+4]=m.elements[3],v[S+5]=m.elements[4],v[S+6]=m.elements[5],v[S+7]=0,v[S+8]=m.elements[6],v[S+9]=m.elements[7],v[S+10]=m.elements[8],v[S+11]=0):ArrayBuffer.isView(m)?v.set(m.subarray(0,v.length-S),S):m.toArray(v,S)}function d(m,v,S,R){const b=m.value,x=v+"_"+S;if(Array.isArray(b)){R[x]===void 0&&(R[x]=[]);const w=R[x];let O=!1;for(let P=0;P<b.length;P++)p(b[P],w,P)===!0&&(O=!0);return O}return p(b,R,x)}function p(m,v,S){if(v[S]===void 0)return typeof m=="number"||typeof m=="boolean"?v[S]=m:ArrayBuffer.isView(m)?v[S]=m.slice():v[S]=m.clone(),!0;{const R=v[S];if(typeof m=="number"||typeof m=="boolean"){if(R!==m)return v[S]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(R.equals(m)===!1)return R.copy(m),!0}}return!1}function _(m){const v=m.uniforms;let S=0;const R=16;for(let x=0,w=v.length;x<w;x++){const O=Array.isArray(v[x])?v[x]:[v[x]];for(let P=0,L=O.length;P<L;P++){const B=O[P],q=Array.isArray(B.value)?B.value:[B.value],I=Array.isArray(v[x])||Array.isArray(B.value);let j=S;for(let k=0,z=q.length;k<z;k++){const F=q[k],V=y(F,I),J=S%R,ue=J%V.boundary,Pe=J+ue;S+=ue,Pe!==0&&R-Pe<V.storage&&(S+=R-Pe),k===0&&(j=S),S+=V.storage}const K=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new K((S-j)/Float32Array.BYTES_PER_ELEMENT),B.__offset=j}}const b=S%R;return b>0&&(S+=R-b),m.__size=S,m.__cache={},this}function y(m,v){const S={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(S.boundary=4,S.storage=4):m.isVector2?(S.boundary=8,S.storage=8):m.isVector3||m.isColor?(S.boundary=16,S.storage=12):m.isVector4?(S.boundary=16,S.storage=16):m.isMatrix3?(S.boundary=16,S.storage=48):m.isMatrix4?(S.boundary=16,S.storage=64):m.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(S.boundary=16,S.storage=m.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",m),v===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(m){const v=m.target;v.removeEventListener("dispose",g),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);r={},s={}}return{bind:a,update:o,dispose:f}}const q2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function Y2(){return vi===null&&(vi=new j1(q2,16,16,us,Ci),vi.name="DFG_LUT",vi.minFilter=rn,vi.magFilter=rn,vi.wrapS=Hi,vi.wrapT=Hi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class $2{constructor(e={}){const{canvas:n=a1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Vt}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=p,g=new Set([rp,ip,np]),f=new Set([Vt,Ai,go,cs,ep,tp]),m=new Uint32Array(4),v=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let R=null,b=null;const x=[],w=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,B=null,q=null,I=null,j=null;this._outputColorSpace=xt;let K=0,k=0,z=null,F=-1,V=null;const J=new Ct,ue=new Ct;let Pe=null;const X=new ut(0);let ae=0,ge=n.width,we=n.height,_e=1,ke=null,Be=null;const Te=new Ct(0,0,ge,we),He=new Ct(0,0,ge,we);let rt=!1;const Me=new Tc,Le=new cp;let pt=!1,dt=!1;const ze=new Bt,mt=new $,Je=new Ct,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function wt(){return z===null?_e:1}let N=i;function lt(T,U){return n.getContext(T,U)}let Ke,je,le,St,Ne,Ve,A,E,G,ie,ne,de,ve,Q,ee,he,D,te,Z,pe,oe,fe,Ue;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ro}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",qe,!1),n.addEventListener("webglcontextcreationerror",Se,!1),N===null){const U="webgl2";if(N=lt(U,T),N===null)throw lt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(T){throw n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),ht("WebGLRenderer: "+T.message),T}function Ye(){Ke=new JA(N),Ke.init(),oe=new k2(N,Ke),je=new HA(N,Ke,e,oe),le=new F2(N,Ke),je.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),q=N.createFramebuffer(),I=N.createFramebuffer(),j=N.createFramebuffer(),St=new tC(N),Ne=new M2,Ve=new B2(N,Ke,le,Ne,je,oe,St),A=new ZA(P),E=new ib(N),fe=new kA(N,E),G=new QA(N,E,St,fe),ie=new iC(N,G,E,fe,St),te=new nC(N,je,Ve),ee=new GA(Ne),ne=new E2(P,A,Ke,je,fe,ee),de=new X2(P,Ne),ve=new T2,Q=new N2(Ke),D=new BA(P,A,le,ie,_,l),he=new O2(P,ie,je),Ue=new j2(N,St,je,le),Z=new zA(N,Ke,St),pe=new eC(N,Ke,St),St.programs=ne.programs,P.capabilities=je,P.extensions=Ke,P.properties=Ne,P.renderLists=ve,P.shadowMap=he,P.state=le,P.info=St}y!==Vt&&(O=new sC(y,n.width,n.height,o,r,s));const se=new V2(P,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(ge,we,!1))},this.getSize=function(T){return T.set(ge,we)},this.setSize=function(T,U,Y=!0){if(se.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=T,we=U,n.width=Math.floor(T*_e),n.height=Math.floor(U*_e),Y===!0&&(n.style.width=T+"px",n.style.height=U+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(ge*_e,we*_e).floor()},this.setDrawingBufferSize=function(T,U,Y){ge=T,we=U,_e=Y,n.width=Math.floor(T*Y),n.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(y===Vt){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(Te)},this.setViewport=function(T,U,Y,H){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,U,Y,H),le.viewport(J.copy(Te).multiplyScalar(wt()).round())},this.getScissor=function(T){return T.copy(He)},this.setScissor=function(T,U,Y,H){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,U,Y,H),le.scissor(ue.copy(He).multiplyScalar(wt()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){le.setScissorTest(rt=T)},this.setOpaqueSort=function(T){ke=T},this.setTransparentSort=function(T){Be=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Y=!0){let H=0;if(T){let W=!1;if(z!==null){const xe=z.texture.format;W=g.has(xe)}if(W){const xe=z.texture.type,Re=f.has(xe),me=D.getClearColor(),Ee=D.getClearAlpha(),De=me.r,Xe=me.g,Qe=me.b;Re?(m[0]=De,m[1]=Xe,m[2]=Qe,m[3]=Ee,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=De,v[1]=Xe,v[2]=Qe,v[3]=Ee,N.clearBufferiv(N.COLOR,0,v))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),B=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),D.dispose(),ve.dispose(),Q.dispose(),Ve.dispose(),Ne.dispose(),A.dispose(),ie.dispose(),G.dispose(),fe.dispose(),Ue.dispose(),ne.dispose(),se.dispose(),se.removeEventListener("sessionstart",xp),se.removeEventListener("sessionend",_p),Br.stop()};function Ie(T){T.preventDefault(),vg("WebGLRenderer: Context Lost."),L=!0}function qe(){vg("WebGLRenderer: Context Restored."),L=!1;const T=St.autoReset,U=he.enabled,Y=he.autoUpdate,H=he.needsUpdate,W=he.type;Ye(),St.autoReset=T,he.enabled=U,he.autoUpdate=Y,he.needsUpdate=H,he.type=W}function Se(T){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){const U=T.target;U.removeEventListener("dispose",gt),Zt(U)}function Zt(T){nr(T),Ne.remove(T)}function nr(T){const U=Ne.get(T).programs;U!==void 0&&(U.forEach(function(Y){ne.releaseProgram(Y)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,H,W,xe){U===null&&(U=Ut);const Re=W.isMesh&&W.matrixWorld.determinantAffine()<0,me=sS(T,U,Y,H,W);le.setMaterial(H,Re);let Ee=Y.index,De=1;if(H.wireframe===!0){if(Ee=G.getWireframeAttribute(Y),Ee===void 0)return;De=2}const Xe=Y.drawRange,Qe=Y.attributes.position;let Ae=Xe.start*De,et=(Xe.start+Xe.count)*De;xe!==null&&(Ae=Math.max(Ae,xe.start*De),et=Math.min(et,(xe.start+xe.count)*De)),Ee!==null?(Ae=Math.max(Ae,0),et=Math.min(et,Ee.count)):Qe!=null&&(Ae=Math.max(Ae,0),et=Math.min(et,Qe.count));const zt=et-Ae;if(zt<0||zt===1/0)return;fe.setup(W,H,me,Y,Ee);let Et,yt=Z;if(Ee!==null&&(Et=E.get(Ee),yt=pe,yt.setIndex(Et)),W.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*wt()),yt.setMode(N.LINES)):yt.setMode(N.TRIANGLES);else if(W.isLine){let fn=H.linewidth;fn===void 0&&(fn=1),le.setLineWidth(fn*wt()),W.isLineSegments?yt.setMode(N.LINES):W.isLineLoop?yt.setMode(N.LINE_LOOP):yt.setMode(N.LINE_STRIP)}else W.isPoints?yt.setMode(N.POINTS):W.isSprite&&yt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))yt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const fn=W._multiDrawStarts,Ce=W._multiDrawCounts,Sn=W._multiDrawCount,ft=Ee?E.get(Ee).bytesPerElement:1,kr=Ne.get(H).currentProgram.getUniforms();for(let hn=0;hn<Sn;hn++)kr.setValue(N,"_gl_DrawID",hn),yt.render(fn[hn]/ft,Ce[hn])}else if(W.isInstancedMesh)yt.renderInstances(Ae,zt,W.count);else if(Y.isInstancedBufferGeometry){const fn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,fn);yt.renderInstances(Ae,zt,Ce)}else yt.render(Ae,zt)};function vp(T,U,Y,H){B!==null&&T.isNodeMaterial&&B.setObject(H,T),pt===!0&&ee.setState(T,Y,!1),T.transparent===!0&&T.side===Fn&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,pa(T,U,H),T.side=Dr,T.needsUpdate=!0,pa(T,U,H),T.side=Fn):pa(T,U,H)}this.compile=function(T,U,Y=null){Y===null&&(Y=T),B!==null&&B.renderStart(T,U,Y),b=Q.get(Y),b.init(U),w.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),dt=this.localClippingEnabled,pt=ee.init(this.clippingPlanes,dt),pt===!0&&ee.setGlobalState(this.clippingPlanes,U),B!==null&&he.render(b.state.shadowsArray,Y,U);const H=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const me=xe[Re];vp(me,Y,U,W),H.add(me)}else vp(xe,Y,U,W),H.add(xe)}),b=w.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(T,U,Y=null){const H=this.compile(T,U,Y);return new Promise(W=>{function xe(){if(H.forEach(function(Re){const Ee=Ne.get(Re).currentProgram;(Ee===void 0||Ee.isReady())&&H.delete(Re)}),H.size===0){W(T);return}setTimeout(xe,10)}Ke.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Kc=null;function iS(T){Kc&&Kc(T)}function xp(){Br.stop()}function _p(){Br.start()}const Br=new G_;Br.setAnimationLoop(iS),typeof self<"u"&&Br.setContext(self),this.setAnimationLoop=function(T){Kc=T,se.setAnimationLoop(T),T===null?Br.stop():Br.start()},se.addEventListener("sessionstart",xp),se.addEventListener("sessionend",_p),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(T,U);const Y=se.enabled===!0&&se.isPresenting===!0,H=O!==null&&(z===null||Y)&&O.begin(P,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,U,z),b=Q.get(T,w.length),b.init(U),b.state.textureUnits=Ve.getTextureUnits(),w.push(b),ze.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Le.setFromArrayCamera(U):Me.setFromProjectionMatrix(ze,ui,U.reversedDepth),dt=this.localClippingEnabled,pt=ee.init(this.clippingPlanes,dt),R=ve.get(T,x.length),R.init(),x.push(R),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Re=P.xr.getDepthSensingMesh();Re!==null&&Zc(Re,U,-1/0,P.sortObjects)}Zc(T,U,0,P.sortObjects),R.finish(),B!==null&&B.updateLights(b.state.lightsArray),P.sortObjects===!0&&R.sort(ke,Be),Ot=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ot&&D.addToRenderList(R,T),this.info.autoReset===!0&&this.info.reset(),pt===!0&&ee.beginShadows();const W=b.state.shadowsArray;if(he.render(W,T,U),pt===!0&&ee.endShadows(),(H&&O.hasRenderPass())===!1){const Re=R.opaque,me=R.transmissive;if(b.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(me.length>0)for(let De=0,Xe=Ee.length;De<Xe;De++){const Qe=Ee[De];yp(Re,me,T,Qe)}Ot&&D.render(T);for(let De=0,Xe=Ee.length;De<Xe;De++){const Qe=Ee[De];Sp(R,T,Qe,Qe.viewport)}}else me.length>0&&yp(Re,me,T,U),Ot&&D.render(T),Sp(R,T,U)}z!==null&&k===0&&(Ve.updateMultisampleRenderTarget(z),Ve.updateRenderTargetMipmap(z)),H&&O.end(P),T.isScene===!0&&T.onAfterRender(P,T,U),fe.resetDefaultState(),F=-1,V=null,w.pop(),w.length>0?(b=w[w.length-1],Ve.setTextureUnits(b.state.textureUnits),pt===!0&&ee.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,B!==null&&B.renderEnd()};function Zc(T,U,Y,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){const Re=U.isArrayCamera?Le:Me;if(!T.frustumCulled||T.intersectsFrustum(Re)){H&&Je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ze);const me=ie.update(T),Ee=T.material;Ee.visible&&R.push(T,me,Ee,Y,Je.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){const Re=U.isArrayCamera?Le:Me;if(!T.frustumCulled||T.intersectsFrustum(Re)){const me=ie.update(T),Ee=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Je.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Je.copy(me.boundingSphere.center)),Je.applyMatrix4(T.matrixWorld).applyMatrix4(ze)),Array.isArray(Ee)){const De=me.groups;for(let Xe=0,Qe=De.length;Xe<Qe;Xe++){const Ae=De[Xe],et=Ee[Ae.materialIndex];et&&et.visible&&R.push(T,me,et,Y,Je.z,Ae,U)}}else Ee.visible&&R.push(T,me,Ee,Y,Je.z,null,U)}}}const xe=T.children;for(let Re=0,me=xe.length;Re<me;Re++)Zc(xe[Re],U,Y,H)}function Sp(T,U,Y,H){const{opaque:W,transmissive:xe,transparent:Re}=T;b.setupLightsView(Y),pt===!0&&ee.setGlobalState(P.clippingPlanes,Y),H&&le.viewport(J.copy(H)),W.length>0&&Lo(W,U,Y),xe.length>0&&Lo(xe,U,Y),Re.length>0&&Lo(Re,U,Y),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function yp(T,U,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Ae=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Yt(1,1,{generateMipmaps:!0,type:Ae?Ci:Vt,minFilter:_r,samples:Math.max(4,je.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const xe=b.state.transmissionRenderTarget[H.id],Re=H.viewport||J;xe.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),Ee=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(X),ae=P.getClearAlpha(),ae<1&&P.setClearColor(16777215,.5),P.clear(),Ot&&D.render(Y);const Xe=P.toneMapping;P.toneMapping=Ri;const Qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),pt===!0&&ee.setGlobalState(P.clippingPlanes,H),Lo(T,Y,H),Ve.updateMultisampleRenderTarget(xe),Ve.updateRenderTargetMipmap(xe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let et=0,zt=U.length;et<zt;et++){const Et=U[et],{object:yt,geometry:fn,material:Ce,group:Sn}=Et;if(Ce.side===Fn&&yt.layers.test(H.layers)){const ft=Ce.side;Ce.side=nn,Ce.needsUpdate=!0,Ep(yt,Y,H,fn,Ce,Sn),Ce.side=ft,Ce.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ve.updateMultisampleRenderTarget(xe),Ve.updateRenderTargetMipmap(xe))}P.setRenderTarget(me,Ee,De),P.setClearColor(X,ae),Qe!==void 0&&(H.viewport=Qe),P.toneMapping=Xe}function Lo(T,U,Y){const H=U.isScene===!0?U.overrideMaterial:null;for(let W=0,xe=T.length;W<xe;W++){const Re=T[W],{object:me,geometry:Ee,group:De}=Re;let Xe=Re.material;Xe.allowOverride===!0&&H!==null&&(Xe=H),me.layers.test(Y.layers)&&Ep(me,U,Y,Ee,Xe,De)}}function Ep(T,U,Y,H,W,xe){B!==null&&W.isNodeMaterial&&B.setObject(T,W),T.onBeforeRender(P,U,Y,H,W,xe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(P,U,Y,H,T,xe),W.transparent===!0&&W.side===Fn&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,P.renderBufferDirect(Y,U,H,W,T,xe),W.side=Dr,W.needsUpdate=!0,P.renderBufferDirect(Y,U,H,W,T,xe),W.side=Fn):P.renderBufferDirect(Y,U,H,W,T,xe),T.onAfterRender(P,U,Y,H,W,xe)}function Mp(T){let U=0;for(const Y of T)Y.texture!==null&&U++;return U}function pa(T,U,Y){U.isScene!==!0&&(U=Ut);const H=Ne.get(T),W=b.state.lights,xe=b.state.shadowsArray,Re=W.state.version,me=ne.getParameters(T,W.state,xe,U,Y,b.state.lightProbeGridArray),Ee=ne.getProgramCacheKey(me);let De=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const Xe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=A.get(T.envMap||H.environment,Xe),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",gt),De=new Map,H.programs=De,H.programVariants=new Map);let Qe=De.get(Ee);if(Qe!==void 0){if(H.currentProgram===Qe&&H.lightsStateVersion===Re)return Tp(T,me),Qe}else me.uniforms=ne.getUniforms(T),B!==null&&T.isNodeMaterial&&B.build(T,Y,me),T.onBeforeCompile(me,P),Qe=ne.acquireProgram(me,Ee),De.set(Ee,Qe),H.uniforms=me.uniforms;const Ae=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=ee.uniform),Tp(T,me),H.needsLights=oS(T),H.lightsStateVersion=Re,H.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),H.numLightProbeGrids=Mp(b.state.lightProbeGridArray),H.currentProgram=Qe,H.uniformsList=null,Qe}function rS(T,U,Y,H,W){const xe=Ne.get(T),Re=xe.currentProgram.id+","+H+","+W;let me=xe.programVariants.get(Re);return me===void 0?(me=pa(T,U,Y),xe.programVariants.set(Re,me)):(xe.currentProgram=me,xe.uniformsList=null,xe.outputColorSpace=H,xe.toneMapping=W),me}function wp(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=jl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Tp(T,U){const Y=Ne.get(T);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function sS(T,U,Y,H,W){U.isScene!==!0&&(U=Ut),Ve.resetTextureUnits();const xe=U.fog,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,me=z===null?P.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:it.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,De=A.get(H.envMap||Re,Ee),Xe=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qe=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,zt=!!Y.morphAttributes.color;let Et=Ri;H.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Et=P.toneMapping);const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fn=yt!==void 0?yt.length:0,Ce=Ne.get(H),Sn=b.state.lights;if(pt===!0&&(dt===!0||T!==V)){const Pt=T===V&&H.id===F;ee.setState(H,T,Pt)}let ft=!1,kr=!1;H.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==Sn.state.version||W.isBatchedMesh&&Ce.batching===!1||!W.isBatchedMesh&&Ce.batching===!0||W.isBatchedMesh&&Ce.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ce.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||W.isInstancedMesh&&Ce.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ce.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ce.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ce.instancingMorph===!1&&W.morphTexture!==null||Ce.envMap!==De||H.fog===!0&&Ce.fog!==xe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ee.numPlanes||Ce.numIntersection!==ee.numIntersection)||Ce.vertexAlphas!==Xe||Ce.vertexTangents!==Qe||Ce.morphTargets!==Ae||Ce.morphNormals!==et||Ce.morphColors!==zt||Ce.morphTargetsCount!==fn||Ce.numLightProbeGrids!==Mp(b.state.lightProbeGridArray)?ft=!0:(Ce.outputColorSpace!==me||Ce.toneMapping!==Et)&&(kr=!0):(ft=!0,Ce.__version=H.version);let hn=Ce.currentProgram;(ft===!0||kr===!0)&&(hn=kr===!0?rS(H,U,W,me,Et):pa(H,U,W),B&&H.isNodeMaterial&&B.onUpdateProgram(H,hn,Ce));let Uo=!1,ir=!1,zr=!1;const st=hn.getUniforms(),an=Ce.uniforms;if(le.useProgram(hn.program)&&(Uo=!0,ir=!0,zr=!0),H.id!==F&&(F=H.id,ir=!0),Uo||V!==T){le.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),st.setValue(N,"projectionMatrix",T.projectionMatrix),st.setValue(N,"viewMatrix",T.matrixWorldInverse);const Jt=st.map.cameraPosition;Jt!==void 0&&Jt.setValue(N,mt.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,ir=!0,zr=!0)}if(Ce.needsLights&&(Sn.state.sunShadowMap.length>0&&st.setValue(N,"sunShadowMap",Sn.state.sunShadowMap,Ve),Sn.state.directionalShadowMap.length>0&&st.setValue(N,"directionalShadowMap",Sn.state.directionalShadowMap,Ve),Sn.state.spotShadowMap.length>0&&st.setValue(N,"spotShadowMap",Sn.state.spotShadowMap,Ve),Sn.state.pointShadowMap.length>0&&st.setValue(N,"pointShadowMap",Sn.state.pointShadowMap,Ve)),W.isSkinnedMesh){st.setOptional(N,W,"bindMatrix"),st.setOptional(N,W,"bindMatrixInverse");const Pt=W.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),st.setValue(N,"boneTexture",Pt.boneTexture,Ve))}W.isBatchedMesh&&(st.setOptional(N,W,"batchingTexture"),st.setValue(N,"batchingTexture",W._matricesTexture,Ve),st.setOptional(N,W,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",W._indirectTexture,Ve),st.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",W._colorsTexture,Ve));const Qn=Y.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&te.update(W,Y,hn),(ir||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,st.setValue(N,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(an.envMapIntensity.value=U.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=Y2()),ir){if(st.setValue(N,"toneMappingExposure",P.toneMappingExposure),Ce.needsLights&&aS(an,zr),xe&&H.fog===!0&&de.refreshFogUniforms(an,xe),de.refreshMaterialUniforms(an,H,_e,we,b.state.transmissionRenderTarget[T.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){const Pt=S;let Jt=0;for(const Ni of b.state.lightProbeGridArray)Ni.texture!==null&&(Pt.textures[Jt]=Ni.texture,Pt.min[Jt]=Ni.boundingBox.min,Pt.max[Jt]=Ni.boundingBox.max,Pt.resolution[Jt]=Ni.resolution,Jt++);for(const Ni in Pt)Pt[Ni].length=Jt;an.probesSH.value=Pt.textures,an.probesMin.value=Pt.min,an.probesMax.value=Pt.max,an.probesResolution.value=Pt.resolution}jl.upload(N,wp(Ce),an,Ve)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(jl.upload(N,wp(Ce),an,Ve),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(N,"center",W.center),st.setValue(N,"modelViewMatrix",W.modelViewMatrix),st.setValue(N,"normalMatrix",W.normalMatrix),st.setValue(N,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const Pt=H.uniformsGroups;for(let Jt=0,Ni=Pt.length;Jt<Ni;Jt++){const Rp=Pt[Jt];Ue.update(Rp,hn),Ue.bind(Rp,hn)}}return hn}function aS(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function oS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,U,Y){const H=Ne.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ne.get(T.texture).__webglTexture=U,Ne.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const Y=Ne.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Y=0){z=T,K=U,k=Y;let H=null,W=!1,xe=!1;if(T){const me=Ne.get(T);if(me.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),J.copy(T.viewport),ue.copy(T.scissor),Pe=T.scissorTest,le.viewport(J),le.scissor(ue),le.setScissorTest(Pe),F=-1;return}else if(me.__webglFramebuffer===void 0)Ve.setupRenderTarget(T);else if(me.__hasExternalTextures)Ve.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xe=T.depthTexture;if(me.__boundDepthTexture!==Xe){if(Xe!==null&&Ne.has(Xe)&&(T.width!==Xe.image.width||T.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(T)}}const Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(xe=!0);const De=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[U])?H=De[U][Y]:H=De[U],W=!0):T.samples>0&&Ve.useMultisampledRTT(T)===!1?H=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[Y]:H=De,J.copy(T.viewport),ue.copy(T.scissor),Pe=T.scissorTest}else J.copy(Te).multiplyScalar(_e).floor(),ue.copy(He).multiplyScalar(_e).floor(),Pe=rt;if(Y!==0&&(H=q),le.bindFramebuffer(N.FRAMEBUFFER,H)&&le.drawBuffers(T,H),le.viewport(J),le.scissor(ue),le.setScissorTest(Pe),W){const me=Ne.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,Y)}else if(xe){const me=U;for(let Ee=0;Ee<T.textures.length;Ee++){const De=Ne.get(T.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,De.__webglTexture,Y,me)}}else if(T!==null&&Y!==0){const me=Ne.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,Y)}F=-1};function bp(T){const U=Ne.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=je.textureFormatReadable(T.format),U.__typeReadable=je.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Y,H,W,xe,Re,me=0){if(!(T&&T.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ee=Ee[Re],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){le.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const De=T.textures[me],Xe=De.format,Qe=De.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Ae=bp(De);if(Ae.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&Y>=0&&Y<=T.height-W&&N.readPixels(U,Y,H,W,oe.convert(Xe),oe.convert(Qe),xe)}finally{const De=z!==null?Ne.get(z).__webglFramebuffer:null;le.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,U,Y,H,W,xe,Re,me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ee=Ee[Re],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(U>=0&&U<=T.width-H&&Y>=0&&Y<=T.height-W){le.bindFramebuffer(N.FRAMEBUFFER,Ee);const De=T.textures[me],Xe=De.format,Qe=De.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Ae=bp(De);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,xe.byteLength,N.STREAM_READ),N.readPixels(U,Y,H,W,oe.convert(Xe),oe.convert(Qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const zt=z!==null?Ne.get(z).__webglFramebuffer:null;le.bindFramebuffer(N.FRAMEBUFFER,zt);const Et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await o1(N,Et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(et),N.deleteSync(Et),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Y=0){const H=Math.pow(2,-Y),W=Math.floor(T.image.width*H),xe=Math.floor(T.image.height*H),Re=U!==null?U.x:0,me=U!==null?U.y:0;Ve.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Re,me,W,xe),le.unbindTexture()},this.copyTextureToTexture=function(T,U,Y=null,H=null,W=0,xe=0){let Re,me,Ee,De,Xe,Qe,Ae,et,zt;const Et=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(Y!==null)Re=Y.max.x-Y.min.x,me=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,Xe=Y.min.y,Qe=Y.isBox3?Y.min.z:0;else{const st=Math.pow(2,-W);Re=Math.floor(Et.width*st),me=Math.floor(Et.height*st),T.isDataArrayTexture?Ee=Et.depth:T.isData3DTexture?Ee=Math.floor(Et.depth*st):Ee=1,De=0,Xe=0,Qe=0}H!==null?(Ae=H.x,et=H.y,zt=H.z):(Ae=0,et=0,zt=0);const yt=oe.convert(U.format),fn=oe.convert(U.type);let Ce;U.isData3DTexture?(Ve.setTexture3D(U,0),Ce=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ve.setTexture2DArray(U,0),Ce=N.TEXTURE_2D_ARRAY):(Ve.setTexture2D(U,0),Ce=N.TEXTURE_2D),le.activeTexture(N.TEXTURE0),le.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),le.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),le.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Sn=le.getParameter(N.UNPACK_ROW_LENGTH),ft=le.getParameter(N.UNPACK_IMAGE_HEIGHT),kr=le.getParameter(N.UNPACK_SKIP_PIXELS),hn=le.getParameter(N.UNPACK_SKIP_ROWS),Uo=le.getParameter(N.UNPACK_SKIP_IMAGES);le.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),le.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),le.pixelStorei(N.UNPACK_SKIP_PIXELS,De),le.pixelStorei(N.UNPACK_SKIP_ROWS,Xe),le.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe);const ir=T.isDataArrayTexture||T.isData3DTexture,zr=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const st=Ne.get(T),an=Ne.get(U),Qn=Ne.get(st.__renderTarget),Pt=Ne.get(an.__renderTarget);le.bindFramebuffer(N.READ_FRAMEBUFFER,Qn.__webglFramebuffer),le.bindFramebuffer(N.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Jt=0;Jt<Ee;Jt++)ir&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.get(T).__webglTexture,W,Qe+Jt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.get(U).__webglTexture,xe,zt+Jt)),N.blitFramebuffer(De,Xe,De+Re,Xe+me,Ae,et,Ae+Re,et+me,N.DEPTH_BUFFER_BIT,N.NEAREST);le.bindFramebuffer(N.READ_FRAMEBUFFER,null),le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Ne.has(T)){const st=Ne.get(T),an=Ne.get(U);le.bindFramebuffer(N.READ_FRAMEBUFFER,I),le.bindFramebuffer(N.DRAW_FRAMEBUFFER,j);for(let Qn=0;Qn<Ee;Qn++)ir?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,st.__webglTexture,W,Qe+Qn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,st.__webglTexture,W),zr?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,an.__webglTexture,xe,zt+Qn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,an.__webglTexture,xe),W!==0?N.blitFramebuffer(De,Xe,De+Re,Xe+me,Ae,et,Ae+Re,et+me,N.COLOR_BUFFER_BIT,N.NEAREST):zr?N.copyTexSubImage3D(Ce,xe,Ae,et,zt+Qn,De,Xe,Re,me):N.copyTexSubImage2D(Ce,xe,Ae,et,De,Xe,Re,me);le.bindFramebuffer(N.READ_FRAMEBUFFER,null),le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else zr?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ce,xe,Ae,et,zt,Re,me,Ee,yt,fn,Et.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,xe,Ae,et,zt,Re,me,Ee,yt,Et.data):N.texSubImage3D(Ce,xe,Ae,et,zt,Re,me,Ee,yt,fn,Et):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xe,Ae,et,Re,me,yt,fn,Et.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xe,Ae,et,Et.width,Et.height,yt,Et.data):N.texSubImage2D(N.TEXTURE_2D,xe,Ae,et,Re,me,yt,fn,Et);le.pixelStorei(N.UNPACK_ROW_LENGTH,Sn),le.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),le.pixelStorei(N.UNPACK_SKIP_PIXELS,kr),le.pixelStorei(N.UNPACK_SKIP_ROWS,hn),le.pixelStorei(N.UNPACK_SKIP_IMAGES,Uo),xe===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&N.generateMipmap(Ce),le.unbindTexture()},this.initRenderTarget=function(T){Ne.get(T).__webglFramebuffer===void 0&&Ve.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ve.setTextureCube(T,0):T.isData3DTexture?Ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ve.setTexture2DArray(T,0):Ve.setTexture2D(T,0),le.unbindTexture()},this.resetState=function(){K=0,k=0,z=null,le.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}/**
 * postprocessing v6.39.6 build Sun Nov 01 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var K2=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Fr;return n.setAttribute("position",new Xi(t,3)),n.setAttribute("uv",new Xi(e,2)),n})(),pi=class Kf{static get fullscreenGeometry(){return K2}constructor(e="Pass",n=new qf,i=new up){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new er(Kf.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new qf),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Ao){}render(e,n,i,r,s){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof Yt||n instanceof fa||n instanceof un||n instanceof Kf)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Z2=class extends pi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,r){const s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},J2=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Q_="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",eS=class extends wn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new at(null),depthBuffer:new at(null),channelWeights:new at(null),opacity:new at(1)},blending:$n,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:J2,vertexShader:Q_}),this.depthFunc=_c}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){const e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){const e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(t){this.colorSpaceConversion!==t&&(t?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},Q2=class extends pi{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new eS,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new Yt(1,1,{minFilter:rn,magFilter:rn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,r){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Vt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===xt&&(this.renderTarget.texture.colorSpace=xt))}},s0=new ut,tS=class extends pi{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=s!==null,c=a>=0;l?(t.getClearColor(s0),t.setClearColor(s,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(s0,o):c&&t.setClearAlpha(o)}},eP=class extends pi{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new tS(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,r){const s=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}};function tP(t,e){const n=t.getContext();if(e<=0||typeof n.renderbufferStorageMultisample!="function")return 0;const i=n.getParameter(n.MAX_SAMPLES),r=Math.min(e,i);if(r<=0)return 0;const s=n.getParameter(n.RENDERBUFFER_BINDING),a=n.createRenderbuffer();try{return n.bindRenderbuffer(n.RENDERBUFFER,a),n.renderbufferStorageMultisample(n.RENDERBUFFER,r,n.RGBA8,1,1),r}catch{return 0}finally{n.bindRenderbuffer(n.RENDERBUFFER,s),n.deleteRenderbuffer(a)}}var sd=1/1e3,nP=1e3,iP=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*sd}get fixedDelta(){return this._fixedDelta*sd}set fixedDelta(t){this._fixedDelta=t*nP}get elapsed(){return this._elapsed*sd}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},rP=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:r=Vt}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Q2,this.depthRenderTarget=null,this.passes=[],this.timer=new iP,this.autoRenderToScreen=!0,this.setRenderer(t)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(t){const e=this.renderer===null?t:tP(this.renderer,t);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new Fe),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Vt&&t.outputColorSpace===xt&&(this.inputBuffer.texture.colorSpace=xt,this.outputBuffer.texture.colorSpace=xt,this.inputBuffer.dispose(),this.outputBuffer.dispose());const r=this.multisampling;this.multisampling=r,t.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(t,n,i)}}replaceRenderer(t,e=!0){const n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){const t=new qi;t.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(t.format=Gi,t.type=cs):t.type=ci;const e=new qi;e.format=t.format,e.type=t.type,e.name="EffectComposer.OutputDepth";const n=new qi;n.format=t.format,n.type=t.type,n.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=t,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:i,height:r}=this.inputBuffer;this.depthRenderTarget=new Yt(i,r,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:n})}blitDepthBuffer(t){const e=this.renderer,n=this.depthRenderTarget,i=e.properties,r=e.getContext();e.setRenderTarget(n);const s=i.get(t).__webglFramebuffer,a=i.get(n).__webglFramebuffer,o=t.stencilBuffer?r.DEPTH_BUFFER_BIT|r.STENCIL_BUFFER_BIT:r.DEPTH_BUFFER_BIT;r.bindFramebuffer(r.READ_FRAMEBUFFER,s),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,a),r.blitFramebuffer(0,0,t.width,t.height,0,0,n.width,n.height,o,r.NEAREST),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){const t=this.stableDepthTexture;for(const e of this.passes)e.getDepthTexture()===t&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(t,e,n,i){const r=this.renderer,s=r===null?new Fe:r.getDrawingBufferSize(new Fe),a=new Yt(s.width,s.height,{minFilter:rn,magFilter:rn,samples:i,stencilBuffer:e,depthBuffer:t,type:n});return n===Vt&&r!==null&&r.outputColorSpace===xt&&(a.texture.colorSpace=xt),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const n=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new Fe),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.renderer=i,t.setSize(r.width,r.height),t.initialize(i,s,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const o of n)o.setDepthTexture(this.stableDepthTexture)}else t.setDepthTexture(this.stableDepthTexture)}removePass(t){const e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){const s=this.stableDepthTexture;if(s!==null){const a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(t.getDepthTexture()===s&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,n=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s,a=!1;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(o.render(e,i,r,t,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){n.renderToScreen=o.renderToScreen;const l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),n.render(e,i,r,t,a),c.setFunc(l.EQUAL,1,4294967295)}s=i,i=r,r=s}o instanceof eP?a=!0:o instanceof Z2&&(a=!1)}}setSize(t,e,n){const i=this.renderer,r=i.getSize(new Fe);(t===void 0||e===void 0)&&(t=r.width,e=r.height),(r.width!==t||r.height!==e)&&i.setSize(t,e,n);const s=i.getDrawingBufferSize(new Fe);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const t of this.passes)t.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],pi.fullscreenGeometry.dispose()}},Ar={NONE:0,DEPTH:1,CONVOLUTION:2},ct={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},sP=class{constructor(){this.shaderParts=new Map([[ct.FRAGMENT_HEAD,null],[ct.FRAGMENT_MAIN_UV,null],[ct.FRAGMENT_MAIN_IMAGE,null],[ct.VERTEX_HEAD,null],[ct.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ar.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=na}},ad=!1,a0=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Fn:n=this.materialsFlatShadedDoubleSide;break;case nn:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Fn:n=this.materialsDoubleSide;break;case nn:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof wn))return t.clone();const e=t.uniforms,n=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,n.set(r,s))}const i=t.clone();for(const r of n)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=Dr;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=nn,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Fn,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=nn,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Fn,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,ad){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=r}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return ad}static set workaroundEnabled(t){ad=t}},ur=-1,Mi=class extends Pi{constructor(t=null,e=ur,n=ur,i=1){super(),t!==null&&this.addEventListener("change",()=>t.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Fe(1,1),this.preferredSize=new Fe(e,n),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Fe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const t=this.baseSize,e=this.preferredSize,n=this.effectiveSize,i=this.scale;e.width!==ur?n.width=e.width:e.height!==ur?n.width=Math.round(e.height*(t.width/Math.max(t.height,1))):n.width=Math.round(t.width*i),e.height!==ur?n.height=e.height:e.width!==ur?n.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):n.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(ur),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return ur}},tt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},aP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",lP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_P="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",CP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",OP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BP=new Map([[tt.ADD,aP],[tt.ALPHA,oP],[tt.AVERAGE,lP],[tt.COLOR,cP],[tt.COLOR_BURN,uP],[tt.COLOR_DODGE,dP],[tt.DARKEN,fP],[tt.DIFFERENCE,hP],[tt.DIVIDE,pP],[tt.DST,null],[tt.EXCLUSION,mP],[tt.HARD_LIGHT,gP],[tt.HARD_MIX,vP],[tt.HUE,xP],[tt.INVERT,_P],[tt.INVERT_RGB,SP],[tt.LIGHTEN,yP],[tt.LINEAR_BURN,EP],[tt.LINEAR_DODGE,MP],[tt.LINEAR_LIGHT,wP],[tt.LUMINOSITY,TP],[tt.MULTIPLY,bP],[tt.NEGATION,RP],[tt.NORMAL,AP],[tt.OVERLAY,CP],[tt.PIN_LIGHT,PP],[tt.REFLECT,NP],[tt.SATURATION,DP],[tt.SCREEN,LP],[tt.SOFT_LIGHT,UP],[tt.SRC,IP],[tt.SUBTRACT,OP],[tt.VIVID_LIGHT,FP]]),kP=class extends Pi{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new at(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return BP.get(this.blendFunction)}},nS=class extends Pi{constructor(t,e,{attributes:n=Ar.NONE,blendFunction:i=tt.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new kP(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=na,this._outputColorSpace=yi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Ao){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof Yt||e instanceof fa||e instanceof un||e instanceof pi)&&this[t].dispose()}}},fp={MEDIUM:2,LARGE:3},zP=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,HP="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",GP=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],VP=class extends wn{constructor(t=new Ct){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new at(null),texelSize:new at(new Ct),scale:new at(1),kernel:new at(0)},blending:$n,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:zP,vertexShader:HP}),this.setTexelSize(t.x,t.y),this.kernelSize=fp.MEDIUM}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.inputBuffer=t}get kernelSequence(){return GP[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(){return this.uniforms.scale.value}setScale(t){this.uniforms.scale.value=t}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(t){this.uniforms.kernel.value=t}setKernel(t){this.kernel=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e,t*.5,e*.5)}setSize(t,e){const n=1/t,i=1/e;this.uniforms.texelSize.value.set(n,i,n*.5,i*.5)}},WP=class extends pi{constructor({kernelSize:t=fp.MEDIUM,resolutionScale:e=.5,width:n=Mi.AUTO_SIZE,height:i=Mi.AUTO_SIZE,resolutionX:r=n,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new Yt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Mi(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new VP,this._blurMaterial.kernelSize=t,this.copyMaterial=new eS}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(t){this._blurMaterial=t}get dithering(){return this.copyMaterial.dithering}set dithering(t){this.copyMaterial.dithering=t}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(t){this.blurMaterial.kernelSize=t}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get scale(){return this.blurMaterial.scale}set scale(t){this.blurMaterial.scale=t}getScale(){return this.blurMaterial.scale}setScale(t){this.blurMaterial.scale=t}getKernelSize(){return this.kernelSize}setKernelSize(t){this.kernelSize=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let d=0,p=u.length;d<p;++d){const _=d&1?l:o;c.kernel=u[d],c.inputBuffer=h.texture,t.setRenderTarget(_),t.render(s,a),h=_}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,t.setRenderTarget(this.renderToScreen?null:n),t.render(s,a)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e);const i=n.width,r=n.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==Vt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):t!==null&&t.outputColorSpace===xt&&(this.renderTargetA.texture.colorSpace=xt,this.renderTargetB.texture.colorSpace=xt))}static get AUTO_SIZE(){return Mi.AUTO_SIZE}},XP=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,jP=class extends wn{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Ro.replace(/\D+/g,"")},uniforms:{inputBuffer:new at(null),threshold:new at(0),smoothing:new at(1),range:new at(null)},blending:$n,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:XP,vertexShader:Q_}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},qP=class extends pi{constructor({renderTarget:t,luminanceRange:e,colorOutput:n,resolutionScale:i=1,width:r=Mi.AUTO_SIZE,height:s=Mi.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new jP(n,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new Yt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new Mi(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,n,i,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height)}initialize(t,e,n){n!==void 0&&n!==Vt&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},YP=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,$P="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",KP=class extends wn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new at(null),texelSize:new at(new Fe)},blending:$n,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:YP,vertexShader:$P})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},ZP=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,JP="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",QP=class extends wn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new at(null),supportBuffer:new at(null),texelSize:new at(new Fe),radius:new at(.85)},blending:$n,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ZP,vertexShader:JP})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}set supportBuffer(t){this.uniforms.supportBuffer.value=t}get radius(){return this.uniforms.radius.value}set radius(t){this.uniforms.radius.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},eN=class extends pi{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Yt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new KP,this.upsamplingMaterial=new QP,this.resolution=new Fe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(t){if(this.levels!==t){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<t;++n){const i=e.clone();i.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let n=1,i=t-1;n<i;++n){const r=e.clone();r.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(t){this.upsamplingMaterial.radius=t}render(t,e,n,i,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=o;for(let d=0,p=c.length;d<p;++d){const _=c[d];o.setSize(h.width,h.height),o.inputBuffer=h.texture,t.setRenderTarget(_),t.render(s,a),h=_}this.fullscreenMaterial=l;for(let d=u.length-1;d>=0;--d){const p=u[d];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[d].texture,t.setRenderTarget(p),t.render(s,a),h=p}}setSize(t,e){const n=this.resolution;n.set(t,e);let i=n.width,r=n.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)i=Math.round(i*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(i,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,r)}initialize(t,e,n){if(n!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of i)r.texture.type=n;if(n!==Vt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(t!==null&&t.outputColorSpace===xt)for(const r of i)r.texture.colorSpace=xt}}dispose(){super.dispose();for(const t of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))t.dispose()}},tN=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,nN=class extends nS{constructor({blendFunction:t=tt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:n=.03,mipmapBlur:i=!0,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:o=fp.LARGE,resolutionScale:l=.5,width:c=Mi.AUTO_SIZE,height:u=Mi.AUTO_SIZE,resolutionX:h=c,resolutionY:d=u}={}){super("BloomEffect",tN,{blendFunction:t,uniforms:new Map([["map",new at(null)],["intensity",new at(r)]])}),this.renderTarget=new Yt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new WP({kernelSize:o}),this.luminancePass=new qP({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new eN,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new Mi(this,h,d,l);p.addEventListener("change",_=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get dithering(){return this.blurPass.dithering}set dithering(t){this.blurPass.dithering=t}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(t){this.blurPass.kernelSize=t}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(t){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}getIntensity(){return this.intensity}setIntensity(t){this.intensity=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}update(t,e,n){const i=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(t,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,r.renderTarget):this.blurPass.render(t,r.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,e):this.blurPass.render(t,e,i)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(t,e),this.mipmapBlurPass.setSize(t,e)}initialize(t,e,n){this.blurPass.initialize(t,e,n),this.luminancePass.initialize(t,e,n),this.mipmapBlurPass.initialize(t,e,n),n!==void 0&&(this.renderTarget.texture.type=n,t!==null&&t.outputColorSpace===xt&&(this.renderTarget.texture.colorSpace=xt))}},iN=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,rN="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",sN=class extends nS{constructor({offset:t=new Fe(.001,5e-4),radialModulation:e=!1,modulationOffset:n=.15}={}){super("ChromaticAberrationEffect",iN,{vertexShader:rN,attributes:Ar.CONVOLUTION,uniforms:new Map([["offset",new at(t)],["modulationOffset",new at(n)]])}),this.radialModulation=e}get offset(){return this.uniforms.get("offset").value}set offset(t){this.uniforms.get("offset").value=t}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(t){t?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(t){this.uniforms.get("modulationOffset").value=t}getOffset(){return this.offset}setOffset(t){this.offset=t}},aN=class extends pi{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new tS,this.overrideMaterialManager=n===null?null:new a0(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new a0(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,u=t.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,a):t.render(s,a),a.layers.mask=l,s.background=c,t.shadowMap.autoUpdate=u}},oN=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,lN="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",cN=class extends wn{constructor(t,e,n,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Ro.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new at(null),depthBuffer:new at(null),resolution:new at(new Fe),texelSize:new at(new Fe),cameraNear:new at(.3),cameraFar:new at(1e3),aspect:new at(1),time:new at(0)},blending:$n,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=Ao){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=oN.replace(ct.FRAGMENT_HEAD,t.get(ct.FRAGMENT_HEAD)||"").replace(ct.FRAGMENT_MAIN_UV,t.get(ct.FRAGMENT_MAIN_UV)||"").replace(ct.FRAGMENT_MAIN_IMAGE,t.get(ct.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=lN.replace(ct.VERTEX_HEAD,t.get(ct.VERTEX_HEAD)||"").replace(ct.VERTEX_MAIN_SUPPORT,t.get(ct.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof oi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return ct}};function o0(t,e,n){for(const i of e){const r="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(s,r))}}function uN(t,e,n){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&n.attributes&Ar.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts;let c=l.get(ct.FRAGMENT_HEAD)||"",u=l.get(ct.FRAGMENT_MAIN_UV)||"",h=l.get(ct.FRAGMENT_MAIN_IMAGE)||"",d=l.get(ct.VERTEX_HEAD)||"",p=l.get(ct.VERTEX_MAIN_SUPPORT)||"";const _=new Set,y=new Set;if(a&&(u+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const m=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);p+=`	${t}MainSupport(`,p+=m?`vUv);
`:`);
`;for(const v of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const S of v[1].split(/\s*,\s*/))n.varyings.add(S),_.add(S),y.add(S);for(const v of r.matchAll(o))y.add(v[1])}for(const m of i.matchAll(o))y.add(m[1]);for(const m of e.defines.keys())y.add(m.replace(/\([\w\s,]*\)/g,""));for(const m of e.uniforms.keys())y.add(m);y.delete("while"),y.delete("for"),y.delete("if"),e.uniforms.forEach((m,v)=>n.uniforms.set(t+v.charAt(0).toUpperCase()+v.slice(1),m)),e.defines.forEach((m,v)=>n.defines.set(t+v.charAt(0).toUpperCase()+v.slice(1),m));const g=new Map([["fragment",i],["vertex",r]]);o0(t,y,n.defines),o0(t,y,g),i=g.get("fragment"),r=g.get("vertex");const f=e.blendMode;if(n.blendModes.set(f.blendFunction,f),s){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(h+=e.inputColorSpace===xt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==yi?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const m=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${t}MainImage(color0, UV, `,n.attributes&Ar.DEPTH&&m.test(i)&&(h+="depth, ",n.readDepth=!0),h+=`color1);
	`;const v=t+"BlendOpacity";n.uniforms.set(v,f.opacity),h+=`color0 = blend${f.blendFunction}(color0, color1, ${v});

	`,c+=`uniform float ${v};

`}if(c+=i+`
`,r!==null&&(d+=r+`
`),l.set(ct.FRAGMENT_HEAD,c),l.set(ct.FRAGMENT_MAIN_UV,u),l.set(ct.FRAGMENT_MAIN_IMAGE,h),l.set(ct.VERTEX_HEAD,d),l.set(ct.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const m of e.extensions)n.extensions.add(m)}}var dN=class extends pi{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new cN(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new sP;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===tt.DST)t.attributes|=a.getAttributes()&Ar.DEPTH;else{if(t.attributes&a.getAttributes()&Ar.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);uN("e"+e++,a,t)}let n=t.shaderParts.get(ct.FRAGMENT_HEAD),i=t.shaderParts.get(ct.FRAGMENT_MAIN_IMAGE),r=t.shaderParts.get(ct.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of t.blendModes.values())n+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;t.attributes&Ar.DEPTH?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===xt&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(ct.FRAGMENT_HEAD,n),t.shaderParts.set(ct.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(ct.FRAGMENT_MAIN_UV,r);for(const[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=Ao){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,r){for(const s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==Vt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}};const fN=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,hN=`
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec2 uSkew;
uniform float uTilt;
uniform float uYaw;
uniform float uLineThickness;
uniform vec3 uLinesColor;
uniform vec3 uScanColor;
uniform float uGridScale;
uniform float uLineStyle;
uniform float uLineJitter;
uniform float uScanOpacity;
uniform float uScanDirection;
uniform float uNoise;
uniform float uBloomOpacity;
uniform float uScanGlow;
uniform float uScanSoftness;
uniform float uPhaseTaper;
uniform float uScanDuration;
uniform float uScanDelay;
varying vec2 vUv;

uniform float uScanStarts[8];
uniform float uScanCount;

const int MAX_SCANS = 8;

float smoother01(float a, float b, float x){
  float t = clamp((x - a) / max(1e-5, (b - a)), 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;

    vec3 ro = vec3(0.0);
    vec3 rd = normalize(vec3(p, 2.0));

    float cR = cos(uTilt), sR = sin(uTilt);
    rd.xy = mat2(cR, -sR, sR, cR) * rd.xy;

    float cY = cos(uYaw), sY = sin(uYaw);
    rd.xz = mat2(cY, -sY, sY, cY) * rd.xz;

    vec2 skew = clamp(uSkew, vec2(-0.7), vec2(0.7));
    rd.xy += skew * rd.z;

    vec3 color = vec3(0.0);
    float minT = 1e20;
    float gridScale = max(1e-5, uGridScale);
    float fadeStrength = 2.0;
    vec2 gridUV = vec2(0.0);

    float hitIsY = 1.0;
    for (int i = 0; i < 4; i++)
    {
        float isY = float(i < 2);
        float pos = mix(-0.2, 0.2, float(i)) * isY + mix(-0.5, 0.5, float(i - 2)) * (1.0 - isY);
        float num = pos - (isY * ro.y + (1.0 - isY) * ro.x);
        float den = isY * rd.y + (1.0 - isY) * rd.x;
        float t = num / den;
        vec3 h = ro + rd * t;

        float depthBoost = smoothstep(0.0, 3.0, h.z);
        h.xy += skew * 0.15 * depthBoost;

        bool use = t > 0.0 && t < minT;
        gridUV = use ? mix(h.zy, h.xz, isY) / gridScale : gridUV;
        minT = use ? t : minT;
        hitIsY = use ? isY : hitIsY;
    }

    vec3 hit = ro + rd * minT;
    float dist = length(hit - ro);

    float jitterAmt = clamp(uLineJitter, 0.0, 1.0);
    if (jitterAmt > 0.0) {
      vec2 j = vec2(
        sin(gridUV.y * 2.7 + iTime * 1.8),
        cos(gridUV.x * 2.3 - iTime * 1.6)
      ) * (0.15 * jitterAmt);
      gridUV += j;
    }
    float fx = fract(gridUV.x);
    float fy = fract(gridUV.y);
    float ax = min(fx, 1.0 - fx);
    float ay = min(fy, 1.0 - fy);
    float wx = fwidth(gridUV.x);
    float wy = fwidth(gridUV.y);
    float halfPx = max(0.0, uLineThickness) * 0.5;

    float tx = halfPx * wx;
    float ty = halfPx * wy;

    float aax = wx;
    float aay = wy;

    float lineX = 1.0 - smoothstep(tx, tx + aax, ax);
    float lineY = 1.0 - smoothstep(ty, ty + aay, ay);
    if (uLineStyle > 0.5) {
      float dashRepeat = 4.0;
      float dashDuty = 0.5;
      float vy = fract(gridUV.y * dashRepeat);
      float vx = fract(gridUV.x * dashRepeat);
      float dashMaskY = step(vy, dashDuty);
      float dashMaskX = step(vx, dashDuty);
      if (uLineStyle < 1.5) {
        lineX *= dashMaskY;
        lineY *= dashMaskX;
      } else {
        float dotRepeat = 6.0;
        float dotWidth = 0.18;
        float cy = abs(fract(gridUV.y * dotRepeat) - 0.5);
        float cx = abs(fract(gridUV.x * dotRepeat) - 0.5);
        float dotMaskY = 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.y * dotRepeat), cy);
        float dotMaskX = 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.x * dotRepeat), cx);
        lineX *= dotMaskY;
        lineY *= dotMaskX;
      }
    }
    float primaryMask = max(lineX, lineY);

    vec2 gridUV2 = (hitIsY > 0.5 ? hit.xz : hit.zy) / gridScale;
    if (jitterAmt > 0.0) {
      vec2 j2 = vec2(
        cos(gridUV2.y * 2.1 - iTime * 1.4),
        sin(gridUV2.x * 2.5 + iTime * 1.7)
      ) * (0.15 * jitterAmt);
      gridUV2 += j2;
    }
    float fx2 = fract(gridUV2.x);
    float fy2 = fract(gridUV2.y);
    float ax2 = min(fx2, 1.0 - fx2);
    float ay2 = min(fy2, 1.0 - fy2);
    float wx2 = fwidth(gridUV2.x);
    float wy2 = fwidth(gridUV2.y);
    float tx2 = halfPx * wx2;
    float ty2 = halfPx * wy2;
    float aax2 = wx2;
    float aay2 = wy2;
    float lineX2 = 1.0 - smoothstep(tx2, tx2 + aax2, ax2);
    float lineY2 = 1.0 - smoothstep(ty2, ty2 + aay2, ay2);
    if (uLineStyle > 0.5) {
      float dashRepeat2 = 4.0;
      float dashDuty2 = 0.5;
      float vy2m = fract(gridUV2.y * dashRepeat2);
      float vx2m = fract(gridUV2.x * dashRepeat2);
      float dashMaskY2 = step(vy2m, dashDuty2);
      float dashMaskX2 = step(vx2m, dashDuty2);
      if (uLineStyle < 1.5) {
        lineX2 *= dashMaskY2;
        lineY2 *= dashMaskX2;
      } else {
        float dotRepeat2 = 6.0;
        float dotWidth2 = 0.18;
        float cy2 = abs(fract(gridUV2.y * dotRepeat2) - 0.5);
        float cx2 = abs(fract(gridUV2.x * dotRepeat2) - 0.5);
        float dotMaskY2 = 1.0 - smoothstep(dotWidth2, dotWidth2 + fwidth(gridUV2.y * dotRepeat2), cy2);
        float dotMaskX2 = 1.0 - smoothstep(dotWidth2, dotWidth2 + fwidth(gridUV2.x * dotRepeat2), cx2);
        lineX2 *= dotMaskY2;
        lineY2 *= dotMaskX2;
      }
    }
    float altMask = max(lineX2, lineY2);

    float edgeDistX = min(abs(hit.x - (-0.5)), abs(hit.x - 0.5));
    float edgeDistY = min(abs(hit.y - (-0.2)), abs(hit.y - 0.2));
    float edgeDist = mix(edgeDistY, edgeDistX, hitIsY);
    float edgeGate = 1.0 - smoothstep(gridScale * 0.5, gridScale * 2.0, edgeDist);
    altMask *= edgeGate;

    float lineMask = max(primaryMask, altMask);
    float fade = exp(-dist * fadeStrength);

    float dur = max(0.05, uScanDuration);
    float del = max(0.0, uScanDelay);
    float scanZMax = 2.0;
    float widthScale = max(0.1, uScanGlow);
    float sigma = max(0.001, 0.18 * widthScale * uScanSoftness);
    float sigmaA = sigma * 2.0;

    float combinedPulse = 0.0;
    float combinedAura = 0.0;

    float cycle = dur + del;
    float tCycle = mod(iTime, cycle);
    float scanPhase = clamp((tCycle - del) / dur, 0.0, 1.0);
    float phase = scanPhase;
    if (uScanDirection > 0.5 && uScanDirection < 1.5) {
      phase = 1.0 - phase;
    } else if (uScanDirection > 1.5) {
      float t2 = mod(max(0.0, iTime - del), 2.0 * dur);
      phase = (t2 < dur) ? (t2 / dur) : (1.0 - (t2 - dur) / dur);
    }
    float scanZ = phase * scanZMax;
    float dz = abs(hit.z - scanZ);
    float lineBand = exp(-0.5 * (dz * dz) / (sigma * sigma));
    float taper = clamp(uPhaseTaper, 0.0, 0.49);
    float headW = taper;
    float tailW = taper;
    float headFade = smoother01(0.0, headW, phase);
    float tailFade = 1.0 - smoother01(1.0 - tailW, 1.0, phase);
    float phaseWindow = headFade * tailFade;
    float pulseBase = lineBand * phaseWindow;
    combinedPulse += pulseBase * clamp(uScanOpacity, 0.0, 1.0);
    float auraBand = exp(-0.5 * (dz * dz) / (sigmaA * sigmaA));
    combinedAura += (auraBand * 0.25) * phaseWindow * clamp(uScanOpacity, 0.0, 1.0);

    for (int i = 0; i < MAX_SCANS; i++) {
      if (float(i) >= uScanCount) break;
      float tActiveI = iTime - uScanStarts[i];
      float phaseI = clamp(tActiveI / dur, 0.0, 1.0);
      if (uScanDirection > 0.5 && uScanDirection < 1.5) {
        phaseI = 1.0 - phaseI;
      } else if (uScanDirection > 1.5) {
        phaseI = (phaseI < 0.5) ? (phaseI * 2.0) : (1.0 - (phaseI - 0.5) * 2.0);
      }
      float scanZI = phaseI * scanZMax;
      float dzI = abs(hit.z - scanZI);
      float lineBandI = exp(-0.5 * (dzI * dzI) / (sigma * sigma));
      float headFadeI = smoother01(0.0, headW, phaseI);
      float tailFadeI = 1.0 - smoother01(1.0 - tailW, 1.0, phaseI);
      float phaseWindowI = headFadeI * tailFadeI;
      combinedPulse += lineBandI * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);
      float auraBandI = exp(-0.5 * (dzI * dzI) / (sigmaA * sigmaA));
      combinedAura += (auraBandI * 0.25) * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);
    }

    float lineVis = lineMask;
    vec3 gridCol = uLinesColor * lineVis * fade;
    vec3 scanCol = uScanColor * combinedPulse;
    vec3 scanAura = uScanColor * combinedAura;

    color = gridCol + scanCol + scanAura;

    float n = fract(sin(dot(gl_FragCoord.xy + vec2(iTime * 123.4), vec2(12.9898,78.233))) * 43758.5453123);
    color += (n - 0.5) * uNoise;
    color = clamp(color, 0.0, 1.0);
    float alpha = clamp(max(lineVis, combinedPulse), 0.0, 1.0);
    float gx = 1.0 - smoothstep(tx * 2.0, tx * 2.0 + aax * 2.0, ax);
    float gy = 1.0 - smoothstep(ty * 2.0, ty * 2.0 + aay * 2.0, ay);
    float halo = max(gx, gy) * fade;
    alpha = max(alpha, halo * clamp(uBloomOpacity, 0.0, 1.0));
    fragColor = vec4(color, alpha);
}

void main(){
  vec4 c;
  mainImage(c, vUv * iResolution.xy);
  gl_FragColor = c;
}
`;function l0(t){return new ut(t).convertSRGBToLinear()}function pN(t,e,n,i,r,s){const a=t.clone();i=Math.max(1e-4,i);const o=2/i,l=o*s,c=1/(1+l+.48*l*l+.235*l*l*l);let u=t.clone().sub(e);const h=e.clone(),d=r*i;u.length()>d&&u.setLength(d),e=t.clone().sub(u);const p=n.clone().addScaledVector(u,o).multiplyScalar(s);n.sub(p.clone().multiplyScalar(o)),n.multiplyScalar(c),a.copy(e.clone().add(u.add(p).multiplyScalar(c)));const _=h.clone().sub(t),y=a.clone().sub(h);return _.dot(y)>0&&(a.copy(h),n.set(0,0)),a}function c0(t,e,n,i,r,s){i=Math.max(1e-4,i);const a=2/i,o=a*s,l=1/(1+o+.48*o*o+.235*o*o*o);let c=t-e;const u=e,h=r*i;c=Math.sign(c)*Math.min(Math.abs(c),h),e=t-c;const d=(n.v+a*c)*s;n.v=(n.v-a*d)*l;let p=e+(c+d)*l;const _=u-t,y=p-u;return _*y>0&&(p=u,n.v=0),{value:p,v:n.v}}function mN({sensitivity:t=.55,lineThickness:e=1,linesColor:n="#3b82f6",scanColor:i="#6366f1",scanOpacity:r=.5,gridScale:s=.1,lineStyle:a="solid",lineJitter:o=.1,scanDirection:l="pingpong",enablePost:c=!0,bloomIntensity:u=.3,bloomThreshold:h=0,bloomSmoothing:d=0,chromaticAberration:p=.002,noiseIntensity:_=.01,scanGlow:y=.5,scanSoftness:g=2,scanPhaseTaper:f=.9,scanDuration:m=2,scanDelay:v=2,scanOnClick:S=!0,snapBackDelay:R=250,className:b="",style:x={}}){const w=Oe.useRef(null),O=Oe.useRef(null),P=Oe.useRef(null),L=Oe.useRef(null),B=Oe.useRef(null),q=Oe.useRef(null),I=Oe.useRef(null),j=Oe.useRef(new Fe(0,0)),K=Oe.useRef(0),k=Oe.useRef(0),z=Oe.useRef(new Fe(0,0)),F=Oe.useRef(new Fe(0,0)),V=Oe.useRef(0),J=Oe.useRef(0),ue=Oe.useRef(0),Pe=Oe.useRef(0),X=8,ae=Oe.useRef([]),ge=Me=>{const Le=ae.current.slice();if(Le.length>=X&&Le.shift(),Le.push(Me),ae.current=Le,P.current){const pt=P.current.uniforms,dt=new Array(X).fill(0);for(let ze=0;ze<Le.length&&ze<X;ze++)dt[ze]=Le[ze];pt.uScanStarts.value=dt,pt.uScanCount.value=Le.length}},we=Hr.clamp(t,0,1),_e=Hr.lerp(.06,.2,we),ke=Hr.lerp(.12,.3,we),Be=Hr.lerp(.1,.28,we),Te=Hr.lerp(.45,.12,we),He=1/0,rt=Hr.lerp(1.2,1.6,we);return Oe.useEffect(()=>{const Me=w.current;if(!Me)return;let Le=null;const pt=mt=>{Le&&(clearTimeout(Le),Le=null);const Je=Me.getBoundingClientRect(),Ut=(mt.clientX-Je.left)/Je.width*2-1,Ot=-((mt.clientY-Je.top)/Je.height*2-1);j.current.set(Ut,Ot)},dt=()=>{const mt=performance.now()/1e3;S&&ge(mt)},ze=()=>{Le&&clearTimeout(Le),Le=window.setTimeout(()=>{j.current.set(0,0),K.current=0,k.current=0},Math.max(0,R||0))};return window.addEventListener("mousemove",pt),S&&Me.addEventListener("click",dt),Me.addEventListener("mouseleave",ze),()=>{window.removeEventListener("mousemove",pt),S&&Me.removeEventListener("click",dt),Me.removeEventListener("mouseleave",ze),Le&&clearTimeout(Le)}},[R,S]),Oe.useEffect(()=>{const Me=w.current;if(!Me)return;const Le=new $2({antialias:!0,alpha:!0});O.current=Le,Le.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Le.setSize(Me.clientWidth,Me.clientHeight),Le.outputColorSpace=xt,Le.toneMapping=Ri,Le.autoClear=!1,Le.setClearColor(0,0),Me.appendChild(Le.domElement);const pt={iResolution:{value:new $(Me.clientWidth,Me.clientHeight,Le.getPixelRatio())},iTime:{value:0},uSkew:{value:new Fe(0,0)},uTilt:{value:0},uYaw:{value:0},uLineThickness:{value:e},uLinesColor:{value:l0(n)},uScanColor:{value:l0(i)},uGridScale:{value:s},uLineStyle:{value:a==="dashed"?1:a==="dotted"?2:0},uLineJitter:{value:Math.max(0,Math.min(1,o||0))},uScanOpacity:{value:r},uNoise:{value:_},uBloomOpacity:{value:u},uScanGlow:{value:y},uScanSoftness:{value:g},uPhaseTaper:{value:f},uScanDuration:{value:m},uScanDelay:{value:v},uScanDirection:{value:l==="backward"?1:l==="pingpong"?2:0},uScanStarts:{value:new Array(X).fill(0)},uScanCount:{value:0}},dt=new wn({uniforms:pt,vertexShader:fN,fragmentShader:hN,transparent:!0,depthWrite:!1,depthTest:!1});P.current=dt;const ze=new qf,mt=new up(-1,1,1,-1,0,1),Je=new er(new No(2,2),dt);ze.add(Je);let Ut=null;if(c){Ut=new rP(Le),L.current=Ut;const Ke=new aN(ze,mt);Ut.addPass(Ke);const je=new nN({intensity:1,luminanceThreshold:h,luminanceSmoothing:d});je.blendMode.opacity.value=Math.max(0,u),B.current=je;const le=new sN({offset:new Fe(p,p),radialModulation:!0,modulationOffset:0});q.current=le;const St=new dN(mt,je,le);St.renderToScreen=!0,Ut.addPass(St)}const Ot=()=>{Me&&(Le.setSize(Me.clientWidth,Me.clientHeight),dt.uniforms.iResolution.value.set(Me.clientWidth,Me.clientHeight,Le.getPixelRatio()),L.current&&L.current.setSize(Me.clientWidth,Me.clientHeight))};window.addEventListener("resize",Ot);const wt=performance.now();let N=wt;const lt=()=>{const Ke=performance.now(),je=Math.max(0,Math.min(.1,(Ke-N)/1e3));N=Ke,z.current.copy(pN(z.current,j.current,F.current,Te,He,je));const le=c0(V.current,K.current,{v:J.current},Te,He,je);V.current=le.value,J.current=le.v;const St=c0(ue.current,k.current,{v:Pe.current},Te,He,je);ue.current=St.value,Pe.current=St.v;const Ne=new Fe(z.current.x*_e,-z.current.y*rt*_e);dt.uniforms.uSkew.value.set(Ne.x,Ne.y),dt.uniforms.uTilt.value=V.current*ke,dt.uniforms.uYaw.value=Hr.clamp(ue.current*Be,-.6,.6),dt.uniforms.iTime.value=(Ke-wt)/1e3,Le.clear(!0,!0,!0),L.current?L.current.render(je):Le.render(ze,mt),I.current=requestAnimationFrame(lt)};return I.current=requestAnimationFrame(lt),()=>{I.current&&cancelAnimationFrame(I.current),window.removeEventListener("resize",Ot),dt.dispose(),Je.geometry.dispose(),L.current&&(L.current.dispose(),L.current=null),Le.dispose(),Le.forceContextLoss(),Le.domElement&&Me.contains(Le.domElement)&&Me.removeChild(Le.domElement)}},[t,e,n,i,r,s,a,o,l,c]),Oe.useEffect(()=>{if(P.current){const Me=P.current.uniforms;Me.uScanDuration.value=Math.max(.05,m),Me.uScanDelay.value=Math.max(0,v),Me.uScanOpacity.value=Math.max(0,Math.min(1,r)),Me.uScanGlow.value=y}},[m,v,r,y]),M.jsx("div",{ref:w,className:`absolute inset-0 pointer-events-none z-0 overflow-hidden ${b}`,style:x})}function gN({onExtractionComplete:t,onExtractingChange:e}){const[n,i]=Oe.useState(!1),[r,s]=Oe.useState(null),[a,o]=Oe.useState(!1),[l,c]=Oe.useState(""),[u,h]=Oe.useState(null),d=f=>{f.preventDefault(),f.stopPropagation(),f.type==="dragenter"||f.type==="dragover"?i(!0):f.type==="dragleave"&&i(!1)},p=f=>{f.preventDefault(),f.stopPropagation(),i(!1),f.dataTransfer.files&&f.dataTransfer.files[0]&&y(f.dataTransfer.files[0])},_=f=>{f.preventDefault(),f.target.files&&f.target.files[0]&&y(f.target.files[0])},y=f=>{h(null);const m=f.name.split(".").pop().toLowerCase();if(m!=="pdf"&&m!=="docx"){h("Only PDF and DOCX documents with selectable text are supported.");return}if(f.size>10*1024*1024){h("File exceeds the 10 MB size limit.");return}s(f)},g=async()=>{var f,m;if(r){o(!0),h(null),e&&e(!0);try{c("Phase 1/3: Uploading & validating document text...");const v=await _T(r);c("Phase 2/3: Parsing financial schedules & tables..."),await new Promise(R=>setTimeout(R,600)),c("Phase 3/3: AI Extraction & ITR form classification...");const S=await ST(v.document_id);e&&e(!1),t({document:v,extraction:S})}catch(v){console.error(v),e&&e(!1),h(((m=(f=v.response)==null?void 0:f.data)==null?void 0:m.detail)||v.message||"Processing failed. Please check your document.")}finally{o(!1),c("")}}};return M.jsxs("div",{className:"max-w-4xl mx-auto py-10 px-4 sm:px-6",children:[M.jsxs("div",{className:"text-center mb-8",children:[M.jsx("h1",{className:"text-3xl font-extrabold text-white tracking-tight sm:text-4xl drop-shadow-sm",children:"Upload ITR Financial Document"}),M.jsx("p",{className:"mt-3 text-base text-slate-300 max-w-2xl mx-auto",children:"Upload your Form 16, salary slip, or computation draft in PDF or DOCX. The AI layer extracts your income, deductions, and capital gains, followed by deterministic tax computation."})]}),M.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8",children:[M.jsxs("div",{onDragEnter:d,onDragLeave:d,onDragOver:d,onDrop:p,className:`border-2 border-dashed rounded-lg p-8 sm:p-12 text-center transition-all ${n?"border-indigo-600 bg-indigo-50/50":"border-slate-300 hover:border-slate-400 bg-slate-50/50"}`,children:[M.jsx(VE,{className:"mx-auto h-12 w-12 text-indigo-600 mb-4"}),M.jsxs("p",{className:"text-sm font-medium text-slate-700",children:["Drag and drop your document here, or"," ",M.jsxs("label",{className:"text-indigo-600 hover:text-indigo-500 cursor-pointer font-semibold underline",children:["browse",M.jsx("input",{type:"file",className:"hidden",accept:".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document",onChange:_})]})]}),M.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"Supported formats: PDF, DOCX • Maximum file size: 10 MB"})]}),r&&M.jsxs("div",{className:"mt-6 flex items-center justify-between p-4 bg-indigo-50/60 border border-indigo-100 rounded-lg",children:[M.jsxs("div",{className:"flex items-center space-x-3",children:[M.jsx(WE,{className:"h-6 w-6 text-indigo-600"}),M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-slate-800",children:r.name}),M.jsxs("p",{className:"text-xs text-slate-500",children:[(r.size/1024).toFixed(1)," KB"]})]})]}),M.jsx("button",{onClick:()=>s(null),className:"text-xs text-slate-400 hover:text-slate-600",children:"Remove"})]}),u&&M.jsxs("div",{className:"mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3 text-red-800 text-sm",children:[M.jsx(GE,{className:"h-5 w-5 text-red-600 flex-shrink-0 mt-0.5"}),M.jsxs("div",{children:[M.jsx("p",{className:"font-semibold",children:"Upload or Extraction Failed"}),M.jsx("p",{className:"mt-0.5",children:u})]})]}),M.jsx("div",{className:"mt-6 flex justify-end",children:M.jsx("button",{onClick:g,disabled:!r||a,className:`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white shadow-sm transition-all ${!r||a?"bg-slate-400 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700"}`,children:a?M.jsxs(M.Fragment,{children:[M.jsx(wx,{className:"w-4 h-4 animate-spin"}),M.jsx("span",{children:l||"Processing..."})]}):M.jsx("span",{children:"Extract & Continue →"})})})]}),M.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-500",children:[M.jsxs("div",{className:"bg-white p-4 rounded-lg border border-slate-200",children:[M.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Supported Forms"}),M.jsx("p",{children:"ITR-1 (Salaried), ITR-2 (Capital Gains & Multiple HP), and ITR-4 (Presumptive u/s 44AD/ADA/AE)."})]}),M.jsxs("div",{className:"bg-white p-4 rounded-lg border border-slate-200",children:[M.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Dual-Regime Calculation"}),M.jsx("p",{children:"Computes tax under both Old and New regimes for AY 2025-26 with automated rebate and recommendation."})]}),M.jsxs("div",{className:"bg-white p-4 rounded-lg border border-slate-200",children:[M.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Auditable & Deterministic"}),M.jsx("p",{children:"AI is strictly used for extraction; all tax calculations are executed by a rule-based engine."})]})]})]})}function vN({extractionData:t,onComputeComplete:e,onBack:n}){const{extraction:i,document:r}=t,s=i.reviewed_json||i.extracted_json||{},[a,o]=Oe.useState({form_type:t.document.form_type||s.form_type||"ITR-1",assessment_year:s.assessment_year||"2026-27",name:s.name||"",pan:s.pan||"",gross_salary:s.gross_salary??0,exemptions_u10:s.exemptions_u10??0,professional_tax:s.professional_tax??0,house_property_income:s.house_property_income??0,other_income:s.other_income??0,deduction_80c:s.deduction_80c??0,deduction_80ccd1b:s.deduction_80ccd1b??0,deduction_80d:s.deduction_80d??0,deduction_80tta:s.deduction_80tta??0,other_deductions:s.other_deductions??0,stcg_111a:s.stcg_111a??0,ltcg_112a:s.ltcg_112a??0,vda_income:s.vda_income??0,turnover_44ad:s.turnover_44ad??0,presumptive_income_44ad:s.presumptive_income_44ad??s.business_income??0,receipts_44ada:s.receipts_44ada??0,vehicles_44ae:s.vehicles_44ae??0,is_digital_receipts_44ad:s.is_digital_receipts_44ad??!1,tds_total:s.tds_total??0}),[l,c]=Oe.useState(!1),[u,h]=Oe.useState(null),d=_=>{const{name:y,value:g,type:f,checked:m}=_.target;o(v=>({...v,[y]:f==="checkbox"?m:f==="number"?g===""?"":Number(g):g}))},p=async()=>{var _,y;c(!0),h(null);try{await yT(i.extraction_id,a);const g=await ET(i.extraction_id);e({...t,computation:g,reviewed_data:a})}catch(g){console.error(g),h(((y=(_=g.response)==null?void 0:_.data)==null?void 0:y.detail)||g.message||"Computation failed.")}finally{c(!1)}};return M.jsxs("div",{className:"max-w-4xl mx-auto py-8 px-4 sm:px-6",children:[M.jsxs("div",{className:"mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[M.jsxs("div",{children:[M.jsx("h1",{className:"text-3xl font-extrabold text-white tracking-tight drop-shadow-sm",children:"Review & Correct Extracted Data"}),M.jsxs("p",{className:"text-sm text-slate-300",children:["Source: ",M.jsx("span",{className:"font-medium text-white",children:r.file_name})," • Detected Form: ",M.jsx("span",{className:"font-bold text-indigo-400",children:a.form_type})]})]}),M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx("button",{onClick:n,className:"px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-slate-50",children:"← Re-upload"}),M.jsxs("button",{onClick:p,disabled:l,className:"flex items-center space-x-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm shadow-sm transition-all",children:[M.jsx(ef,{className:"w-4 h-4"}),M.jsx("span",{children:l?"Computing...":"Calculate Tax Liability"})]})]})]}),u&&M.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm",children:u}),M.jsxs("div",{className:"space-y-6",children:[M.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[M.jsx("h2",{className:"text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100",children:"Document & Taxpayer Details"}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"ITR Form Type"}),M.jsxs("select",{name:"form_type",value:a.form_type,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white",children:[M.jsx("option",{value:"ITR-1",children:"ITR-1 (Sahaj - Salaried)"}),M.jsx("option",{value:"ITR-2",children:"ITR-2 (Capital Gains & Multiple HP)"}),M.jsx("option",{value:"ITR-4",children:"ITR-4 (Sugam - Presumptive)"})]})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Assessment Year"}),M.jsxs("select",{name:"assessment_year",value:a.assessment_year,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white",children:[M.jsx("option",{value:"2026-27",children:"AY 2026-27 (FY 2025-26)"}),M.jsx("option",{value:"2025-26",children:"AY 2025-26 (FY 2024-25)"})]})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Taxpayer Name"}),M.jsx("input",{type:"text",name:"name",value:a.name,onChange:d,placeholder:"e.g. Tabish Hasan",className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"PAN Number"}),M.jsx("input",{type:"text",name:"pan",value:a.pan,onChange:d,placeholder:"e.g. ABCDE1234F",className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]})]})]}),M.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[M.jsx("h2",{className:"text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100",children:"Income Heads (₹)"}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Gross Salary"}),M.jsx("input",{type:"number",name:"gross_salary",value:a.gross_salary,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Exemptions u/s 10 (HRA, etc.)"}),M.jsx("input",{type:"number",name:"exemptions_u10",value:a.exemptions_u10,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"House Property (+ / - Loss)"}),M.jsx("input",{type:"number",name:"house_property_income",value:a.house_property_income,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Other Income (Interest, etc.)"}),M.jsx("input",{type:"number",name:"other_income",value:a.other_income,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]})]})]}),M.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[M.jsxs("div",{className:"flex justify-between items-center mb-4 pb-2 border-b border-slate-100",children:[M.jsx("h2",{className:"text-base font-semibold text-slate-800",children:"Chapter VI-A Deductions (Old Regime)"}),M.jsx("span",{className:"text-xs text-slate-400",children:"Limits apply automatically"})]}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Section 80C (PPF, ELSS, EPF)"}),M.jsx("input",{type:"number",name:"deduction_80c",value:a.deduction_80c,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Section 80D (Health Insurance)"}),M.jsx("input",{type:"number",name:"deduction_80d",value:a.deduction_80d,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Section 80TTA (Savings Interest)"}),M.jsx("input",{type:"number",name:"deduction_80tta",value:a.deduction_80tta,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Other Deductions (80CCD, etc.)"}),M.jsx("input",{type:"number",name:"other_deductions",value:a.other_deductions,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]})]})]}),a.form_type==="ITR-2"&&M.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[M.jsx("h2",{className:"text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100",children:"Capital Gains (ITR-2 Special Rates)"}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"STCG u/s 111A (Listed Equity @ 20%)"}),M.jsx("input",{type:"number",name:"stcg_111a",value:a.stcg_111a,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"LTCG u/s 112A (Listed Equity @ 12.5%)"}),M.jsx("input",{type:"number",name:"ltcg_112a",value:a.ltcg_112a,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"VDA / Crypto Income u/s 115BBH (@ 30%)"}),M.jsx("input",{type:"number",name:"vda_income",value:a.vda_income,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]})]})]}),a.form_type==="ITR-4"&&M.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[M.jsx("h2",{className:"text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100",children:"Presumptive Business / Profession Income (ITR-4)"}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Section 44AD Gross Turnover"}),M.jsx("input",{type:"number",name:"turnover_44ad",value:a.turnover_44ad,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"}),M.jsxs("label",{className:"mt-2 flex items-center space-x-2 text-xs text-slate-600",children:[M.jsx("input",{type:"checkbox",name:"is_digital_receipts_44ad",checked:a.is_digital_receipts_44ad,onChange:d,className:"rounded text-indigo-600 focus:ring-indigo-500"}),M.jsx("span",{children:"Digital receipts (6% rate)"})]})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Presumptive Income u/s 44AD (Declared)"}),M.jsx("input",{type:"number",name:"presumptive_income_44ad",value:a.presumptive_income_44ad,onChange:d,placeholder:"Leave 0 to auto-calculate rate",className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"}),M.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"If > 0, uses actual declared profit"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Section 44ADA Receipts (Profession)"}),M.jsx("input",{type:"number",name:"receipts_44ada",value:a.receipts_44ada,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Section 44AE Goods Vehicles"}),M.jsx("input",{type:"number",name:"vehicles_44ae",value:a.vehicles_44ae,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]})]})]}),M.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[M.jsx("h2",{className:"text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100",children:"TDS / Advance Tax Already Paid (₹)"}),M.jsxs("div",{className:"max-w-xs",children:[M.jsx("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:"Total TDS / Advance Tax Paid"}),M.jsx("input",{type:"number",name:"tds_total",value:a.tds_total,onChange:d,className:"w-full px-3 py-2 text-sm text-black font-medium bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none !text-black !bg-white"})]})]}),M.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[M.jsx("button",{onClick:n,className:"px-5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-slate-50",children:"Cancel"}),M.jsxs("button",{onClick:p,disabled:l,className:"flex items-center space-x-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm shadow-md transition-all",children:[M.jsx(ef,{className:"w-4 h-4"}),M.jsx("span",{children:l?"Computing...":"Calculate Tax Liability &rarr;"})]})]})]})]})}function xN({data:t,onEditAgain:e,onNewUpload:n}){const{computation:i,reviewed_data:r,document:s}=t,{old_regime:a,new_regime:o,recommended_regime:l}=i,[c,u]=Oe.useState(!1),[h,d]=Oe.useState(!1),[p,_]=Oe.useState(null),y=m=>"₹"+Number(m||0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}),g=async m=>{var v,S;_(null),m==="PDF"&&u(!0),m==="DOCX"&&d(!0);try{const R=await MT(i.computation_id,m);window.open(R.download_url,"_blank")}catch(R){console.error(R),_(((S=(v=R.response)==null?void 0:v.data)==null?void 0:S.detail)||R.message||`Failed to generate ${m} report.`)}finally{m==="PDF"&&u(!1),m==="DOCX"&&d(!1)}},f=Math.abs(a.total_tax-o.total_tax);return M.jsxs("div",{className:"max-w-5xl mx-auto py-8 px-4 sm:px-6",children:[M.jsxs("div",{className:"mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[M.jsxs("div",{children:[M.jsxs("button",{onClick:e,className:"flex items-center text-sm text-indigo-400 hover:text-indigo-300 font-medium mb-1",children:[M.jsx(kE,{className:"w-4 h-4 mr-1"})," Back to Edit Fields"]}),M.jsx("h1",{className:"text-2xl font-bold text-white drop-shadow-sm",children:"Tax Computation Results"}),M.jsxs("p",{className:"text-sm text-slate-300",children:["Assessment Year: ",M.jsx("span",{className:"font-semibold text-white",children:i.assessment_year})," • Taxpayer: ",M.jsx("span",{className:"font-semibold text-white",children:(r==null?void 0:r.name)||"Taxpayer"})]})]}),M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsxs("button",{onClick:()=>g("PDF"),disabled:c,className:"flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all",children:[M.jsx(tf,{className:"w-4 h-4"}),M.jsx("span",{children:c?"Building PDF...":"Download PDF"})]}),M.jsxs("button",{onClick:()=>g("DOCX"),disabled:h,className:"flex items-center space-x-1.5 px-4 py-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 rounded-lg text-sm font-medium transition-all",children:[M.jsx(tf,{className:"w-4 h-4"}),M.jsx("span",{children:h?"Building DOCX...":"Download Word"})]})]})]}),p&&M.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm",children:p}),M.jsxs("div",{className:"mb-8 p-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-md flex items-center justify-between",children:[M.jsxs("div",{className:"flex items-center space-x-3",children:[M.jsx("div",{className:"p-2 bg-white/20 rounded-lg",children:M.jsx(HE,{className:"w-6 h-6 text-white"})}),M.jsxs("div",{children:[M.jsxs("h2",{className:"text-lg font-bold",children:["Recommended: ",l," REGIME"]}),M.jsx("p",{className:"text-sm text-emerald-50",children:f>0?`You save approximately ${y(f)} by opting for the ${l} Tax Regime.`:"Both regimes yield an identical tax liability."})]})]}),M.jsxs("div",{className:"text-right hidden sm:block",children:[M.jsx("div",{className:"text-xs uppercase tracking-wider text-emerald-100 font-semibold",children:"Lower Liability"}),M.jsx("div",{className:"text-2xl font-black",children:y(l==="OLD"?a.total_tax:o.total_tax)})]})]}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[M.jsxs("div",{className:`rounded-xl border p-6 transition-all ${l==="OLD"?"bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20":"bg-white border-slate-200 opacity-90"}`,children:[M.jsxs("div",{className:"flex justify-between items-center mb-4",children:[M.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"Old Tax Regime"}),l==="OLD"&&M.jsx("span",{className:"text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full",children:"BEST CHOICE"})]}),M.jsxs("div",{className:"space-y-3 text-sm",children:[M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Gross Total Income"}),M.jsx("span",{className:"font-medium text-slate-800",children:y(a.gross_total_income)})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Total Deductions (VI-A)"}),M.jsxs("span",{className:"font-medium text-emerald-600",children:["- ",y(a.deductions)]})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100 font-semibold",children:[M.jsx("span",{className:"text-slate-700",children:"Taxable Income"}),M.jsx("span",{className:"text-slate-900",children:y(a.taxable_income)})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Base Slab Tax"}),M.jsx("span",{className:"text-slate-800",children:y(a.base_tax)})]}),a.special_rate_tax>0&&M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Special-Rate Tax (Capital Gains)"}),M.jsx("span",{className:"text-slate-800",children:y(a.special_rate_tax)})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Section 87A Rebate"}),M.jsxs("span",{className:"text-emerald-600",children:["- ",y(a.rebate_87a)]})]}),a.surcharge>0&&M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Surcharge"}),M.jsx("span",{className:"text-slate-800",children:y(a.surcharge)})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Cess (4%)"}),M.jsx("span",{className:"text-slate-800",children:y(a.cess)})]}),M.jsxs("div",{className:"flex justify-between py-2 border-b-2 border-slate-200 text-base font-bold",children:[M.jsx("span",{className:"text-slate-900",children:"Total Tax Liability"}),M.jsx("span",{className:"text-slate-900",children:y(a.total_tax)})]}),M.jsxs("div",{className:"flex justify-between py-1 text-slate-500",children:[M.jsx("span",{children:"Less: TDS Paid"}),M.jsxs("span",{children:["- ",y(a.tds)]})]}),M.jsxs("div",{className:"flex justify-between py-2 font-bold text-base bg-slate-50 px-3 rounded-lg",children:[M.jsx("span",{className:"text-slate-800",children:"Net Tax Payable"}),M.jsx("span",{className:"text-indigo-600",children:y(a.tax_payable)})]})]})]}),M.jsxs("div",{className:`rounded-xl border p-6 transition-all ${l==="NEW"?"bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20":"bg-white border-slate-200 opacity-90"}`,children:[M.jsxs("div",{className:"flex justify-between items-center mb-4",children:[M.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"New Tax Regime (Default)"}),l==="NEW"&&M.jsx("span",{className:"text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full",children:"BEST CHOICE"})]}),M.jsxs("div",{className:"space-y-3 text-sm",children:[M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Gross Total Income"}),M.jsx("span",{className:"font-medium text-slate-800",children:y(o.gross_total_income)})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Deductions (Standard ₹75K only)"}),M.jsx("span",{className:"font-medium text-slate-400",children:"Nil in VI-A"})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100 font-semibold",children:[M.jsx("span",{className:"text-slate-700",children:"Taxable Income"}),M.jsx("span",{className:"text-slate-900",children:y(o.taxable_income)})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Base Slab Tax"}),M.jsx("span",{className:"text-slate-800",children:y(o.base_tax)})]}),o.special_rate_tax>0&&M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Special-Rate Tax (Capital Gains)"}),M.jsx("span",{className:"text-slate-800",children:y(o.special_rate_tax)})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Section 87A Rebate (≤ ₹12L)"}),M.jsxs("span",{className:"text-emerald-600",children:["- ",y(o.rebate_87a)]})]}),o.marginal_relief>0&&M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Marginal Relief u/s 87A"}),M.jsxs("span",{className:"text-emerald-600",children:["- ",y(o.marginal_relief)]})]}),o.surcharge>0&&M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Surcharge"}),M.jsx("span",{className:"text-slate-800",children:y(o.surcharge)})]}),M.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-100",children:[M.jsx("span",{className:"text-slate-500",children:"Cess (4%)"}),M.jsx("span",{className:"text-slate-800",children:y(o.cess)})]}),M.jsxs("div",{className:"flex justify-between py-2 border-b-2 border-slate-200 text-base font-bold",children:[M.jsx("span",{className:"text-slate-900",children:"Total Tax Liability"}),M.jsx("span",{className:"text-slate-900",children:y(o.total_tax)})]}),M.jsxs("div",{className:"flex justify-between py-1 text-slate-500",children:[M.jsx("span",{children:"Less: TDS Paid"}),M.jsxs("span",{children:["- ",y(o.tds)]})]}),M.jsxs("div",{className:"flex justify-between py-2 font-bold text-base bg-slate-50 px-3 rounded-lg",children:[M.jsx("span",{className:"text-slate-800",children:"Net Tax Payable"}),M.jsx("span",{className:"text-indigo-600",children:y(o.tax_payable)})]})]})]})]}),M.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-8",children:[M.jsx("h3",{className:"text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100",children:"Step-wise Workings (Auditable Engine Breakdown)"}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[M.jsxs("div",{children:[M.jsx("h4",{className:"text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",children:"Old Regime Steps"}),M.jsx("div",{className:"bg-slate-50 rounded-lg p-3 text-xs space-y-1.5 font-mono",children:a.breakdown.map((m,v)=>M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-slate-600",children:m.label}),M.jsx("span",{className:m.amount<0?"text-red-600 font-semibold":"text-slate-900 font-semibold",children:y(m.amount)})]},v))})]}),M.jsxs("div",{children:[M.jsx("h4",{className:"text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",children:"New Regime Steps"}),M.jsx("div",{className:"bg-slate-50 rounded-lg p-3 text-xs space-y-1.5 font-mono",children:o.breakdown.map((m,v)=>M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-slate-600",children:m.label}),M.jsx("span",{className:m.amount<0?"text-red-600 font-semibold":"text-slate-900 font-semibold",children:y(m.amount)})]},v))})]})]})]}),M.jsxs("div",{className:"p-4 bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-500 leading-relaxed",children:[M.jsx("strong",{children:"Statutory Non-Advisory Disclaimer:"})," This computation sheet is generated automatically by the AI-Based ITR Computation System for informational and academic demonstration purposes only. It does not constitute formal chartered accountancy, legal, or financial tax advice. Tax liabilities should be verified against official Income Tax Department rules before electronic filing."]})]})}function _N({onSelectComputation:t}){const[e,n]=Oe.useState([]),[i,r]=Oe.useState(!0),[s,a]=Oe.useState(null),o=async()=>{r(!0),a(null);try{const l=await wT();n(l)}catch(l){console.error(l),a("Failed to load session history.")}finally{r(!1)}};return Oe.useEffect(()=>{o()},[]),M.jsxs("div",{className:"max-w-5xl mx-auto py-8 px-4 sm:px-6",children:[M.jsxs("div",{className:"flex justify-between items-center mb-6",children:[M.jsxs("div",{children:[M.jsx("h1",{className:"text-2xl font-bold text-slate-900",children:"Computation History"}),M.jsx("p",{className:"text-sm text-slate-500",children:"Documents and computations performed during your current browser session."})]}),M.jsxs("button",{onClick:o,className:"flex items-center space-x-1.5 px-3 py-1.5 border border-slate-300 rounded-lg text-xs text-slate-600 hover:bg-slate-50",children:[M.jsx(qE,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Refresh"})]})]}),i&&M.jsx("div",{className:"flex justify-center py-16",children:M.jsx(wx,{className:"w-8 h-8 text-indigo-600 animate-spin"})}),s&&M.jsx("div",{className:"p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm",children:s}),!i&&e.length===0&&M.jsxs("div",{className:"text-center py-16 bg-white rounded-xl border border-slate-200",children:[M.jsx(Mx,{className:"w-12 h-12 text-slate-300 mx-auto mb-3"}),M.jsx("h3",{className:"text-base font-semibold text-slate-700",children:"No Computations Yet"}),M.jsx("p",{className:"text-xs text-slate-400 mt-1 max-w-sm mx-auto",children:"Upload your first ITR document to see its extraction, computation, and report downloads recorded here."})]}),!i&&e.length>0&&M.jsx("div",{className:"space-y-4",children:e.map((l,c)=>{const{document:u,computation:h,reports:d}=l;return M.jsx("div",{className:"bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:border-slate-300 transition-all",children:M.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx("span",{className:"font-semibold text-slate-900",children:u.file_name}),M.jsx("span",{className:"text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200",children:u.form_type||"ITR-1"}),M.jsx("span",{className:"text-xs text-slate-400",children:new Date(u.uploaded_at).toLocaleDateString()})]}),h&&M.jsxs("div",{className:"mt-2 text-xs text-slate-600 space-x-4",children:[M.jsxs("span",{children:["Recommended: ",M.jsxs("strong",{className:"text-emerald-700",children:[h.recommended_regime," Regime"]})]}),M.jsxs("span",{children:["Old Tax: ",M.jsxs("strong",{children:["₹",h.old_regime.total_tax.toLocaleString("en-IN")]})]}),M.jsxs("span",{children:["New Tax: ",M.jsxs("strong",{children:["₹",h.new_regime.total_tax.toLocaleString("en-IN")]})]})]})]}),M.jsx("div",{className:"flex items-center space-x-2",children:d&&d.length>0&&M.jsx("div",{className:"flex items-center space-x-1",children:d.map(p=>M.jsxs("a",{href:p.download_url,target:"_blank",rel:"noreferrer",className:"flex items-center space-x-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50",children:[M.jsx(tf,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:p.format})]},p.report_id))})})]})},c)})})]})}function SN(){const[t,e]=Oe.useState("upload"),[n,i]=Oe.useState(null),[r,s]=Oe.useState(null),[a,o]=Oe.useState(!1),[l,c]=Oe.useState(null),[u,h]=Oe.useState(!1);Oe.useEffect(()=>{const y=a_();y&&c(y)},[]);const d=y=>{i(y),e("review")},p=y=>{s(y),e("results")},_=()=>{confirm("Sign out of this session?")&&(s_(),c(null),i(null),s(null),e("upload"))};return M.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-100 flex flex-col relative overflow-hidden",children:[M.jsx("div",{className:"fixed inset-0 pointer-events-none z-0",children:M.jsx(mN,{lineThickness:1,gridScale:.12,lineJitter:.08,linesColor:"#1e293b",scanColor:u?"#a855f7":"#6366f1",scanOpacity:u?.85:.45,scanDuration:u?.6:3.8,scanDelay:u?0:1.2,enablePost:!0,bloomIntensity:u?.6:.2,chromaticAberration:u?.005:.002,noiseIntensity:.012,scanGlow:u?.9:.5,scanSoftness:2,scanOnClick:!0})}),M.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen",children:[M.jsx(TT,{activeTab:t,setActiveTab:e,onOpenLogin:()=>o(!0),sessionUser:l,onLogout:_}),M.jsx(bT,{isOpen:a,onClose:()=>o(!1),onLoginSuccess:y=>{c(y),e("upload")}}),M.jsxs("main",{className:"flex-1 backdrop-blur-[2px]",children:[t==="upload"&&M.jsx(gN,{onExtractionComplete:d,onExtractingChange:h}),t==="review"&&n&&M.jsx(vN,{extractionData:n,onComputeComplete:p,onBack:()=>e("upload")}),t==="results"&&r&&M.jsx(xN,{data:r,onEditAgain:()=>e("review"),onNewUpload:()=>e("upload")}),t==="history"&&M.jsx(_N,{onSelectComputation:y=>{s(y),e("results")}})]}),M.jsx("footer",{className:"bg-slate-900/80 backdrop-blur border-t border-slate-800 py-4 text-center text-xs text-slate-400",children:"AI-Based ITR Computation System • AMU MCA Mini Project • Academic Year 2026-27 • Tabish Hasan (25CAMSA156)"})]})]})}od.createRoot(document.getElementById("root")).render(M.jsx(wS.StrictMode,{children:M.jsx(SN,{})}));
