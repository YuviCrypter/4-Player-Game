(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function $r(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Br(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Z(r)?fo(r):Br(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Z(e))return e;if(V(e))return e}}const so=/;(?![^(]*\))/g,oo=/:([^]+)/,lo=/\/\*.*?\*\//gs;function fo(e){const t={};return e.replace(lo,"").split(so).forEach(n=>{if(n){const r=n.split(oo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function jn(e){let t="";if(Z(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=jn(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const co="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uo=$r(co);function Ri(e){return!!e||e===""}const Li=e=>Z(e)?e:e==null?"":R(e)||V(e)&&(e.toString===$i||!L(e.toString))?JSON.stringify(e,ji,2):String(e),ji=(e,t)=>t&&t.__v_isRef?ji(e,t.value):gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:zi(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!R(t)&&!Bi(t)?String(t):t,q={},vt=[],Ae=()=>{},mo=()=>!1,po=/^on[^a-z]/,zn=e=>po.test(e),Ur=e=>e.startsWith("onUpdate:"),oe=Object.assign,Hr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ho=Object.prototype.hasOwnProperty,D=(e,t)=>ho.call(e,t),R=Array.isArray,gt=e=>Dn(e)==="[object Map]",zi=e=>Dn(e)==="[object Set]",L=e=>typeof e=="function",Z=e=>typeof e=="string",Wr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Di=e=>V(e)&&L(e.then)&&L(e.catch),$i=Object.prototype.toString,Dn=e=>$i.call(e),vo=e=>Dn(e).slice(8,-1),Bi=e=>Dn(e)==="[object Object]",Yr=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xn=$r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$n=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},go=/-(\w)/g,Me=$n(e=>e.replace(go,(t,n)=>n?n.toUpperCase():"")),bo=/\B([A-Z])/g,At=$n(e=>e.replace(bo,"-$1").toLowerCase()),Bn=$n(e=>e.charAt(0).toUpperCase()+e.slice(1)),rr=$n(e=>e?`on${Bn(e)}`:""),In=(e,t)=>!Object.is(e,t),ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Sn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ui=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Na;const yo=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class xo{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function wo(e,t=Ie){t&&t.active&&t.effects.push(e)}const Kr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Hi=e=>(e.w&qe)>0,Wi=e=>(e.n&qe)>0,_o=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},ko=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Hi(a)&&!Wi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},mr=new WeakMap;let Tt=0,qe=1;const pr=30;let we;const ot=Symbol(""),hr=Symbol("");class Xr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wo(this,r)}run(){if(!this.active)return this.fn();let t=we,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,Ke=!0,qe=1<<++Tt,Tt<=pr?_o(this):Ma(this),this.fn()}finally{Tt<=pr&&ko(this),qe=1<<--Tt,we=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const Yi=[];function Et(){Yi.push(Ke),Ke=!1}function Ot(){const e=Yi.pop();Ke=e===void 0?!0:e}function me(e,t,n){if(Ke&&we){let r=mr.get(e);r||mr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Kr()),Ki(a)}}function Ki(e,t){let n=!1;Tt<=pr?Wi(e)||(e.n|=qe,n=!Hi(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function je(e,t,n,r,a,i){const s=mr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&R(e)){const l=Ui(r);s.forEach((c,d)=>{(d==="length"||d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":R(e)?Yr(n)&&o.push(s.get("length")):(o.push(s.get(ot)),gt(e)&&o.push(s.get(hr)));break;case"delete":R(e)||(o.push(s.get(ot)),gt(e)&&o.push(s.get(hr)));break;case"set":gt(e)&&o.push(s.get(ot));break}if(o.length===1)o[0]&&vr(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);vr(Kr(l))}}function vr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Fa(r);for(const r of n)r.computed||Fa(r)}function Fa(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ao=$r("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wr)),Eo=qr(),Oo=qr(!1,!0),Co=qr(!0),Ra=Po();function Po(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,s=this.length;i<s;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et();const r=H(this)[t].apply(this,n);return Ot(),r}}),e}function qr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Wo:Qi:t?Gi:Ji).get(r))return r;const s=R(r);if(!e&&s&&D(Ra,a))return Reflect.get(Ra,a,i);const o=Reflect.get(r,a,i);return(Wr(a)?Xi.has(a):Ao(a))||(e||me(r,"get",a),t)?o:se(o)?s&&Yr(a)?o:o.value:V(o)?e?Zi(o):Gr(o):o}}const Io=qi(),So=qi(!0);function qi(e=!1){return function(n,r,a,i){let s=n[r];if($t(s)&&se(s)&&!se(a))return!1;if(!e&&(!gr(a)&&!$t(a)&&(s=H(s),a=H(a)),!R(n)&&se(s)&&!se(a)))return s.value=a,!0;const o=R(n)&&Yr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(o?In(a,s)&&je(n,"set",r,a):je(n,"add",r,a)),l}}function To(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&je(e,"delete",t,void 0),r}function No(e,t){const n=Reflect.has(e,t);return(!Wr(t)||!Xi.has(t))&&me(e,"has",t),n}function Mo(e){return me(e,"iterate",R(e)?"length":ot),Reflect.ownKeys(e)}const Vi={get:Eo,set:Io,deleteProperty:To,has:No,ownKeys:Mo},Fo={get:Co,set(e,t){return!0},deleteProperty(e,t){return!0}},Ro=oe({},Vi,{get:Oo,set:So}),Vr=e=>e,Un=e=>Reflect.getPrototypeOf(e);function an(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:s}=Un(a),o=r?Vr:n?ea:Zr;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function sn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function on(e,t=!1){return e=e.__v_raw,!t&&me(H(e),"iterate",ot),Reflect.get(e,"size",e)}function La(e){e=H(e);const t=H(this);return Un(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function ja(e,t){t=H(t);const n=H(this),{has:r,get:a}=Un(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?In(t,s)&&je(n,"set",e,t):je(n,"add",e,t),this}function za(e){const t=H(this),{has:n,get:r}=Un(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&je(t,"delete",e,void 0),i}function Da(){const e=H(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function ln(e,t){return function(r,a){const i=this,s=i.__v_raw,o=H(s),l=t?Vr:e?ea:Zr;return!e&&me(o,"iterate",ot),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function fn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),s=gt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),d=n?Vr:t?ea:Zr;return!t&&me(i,"iterate",l?hr:ot),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:o?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function Lo(){const e={get(i){return an(this,i)},get size(){return on(this)},has:sn,add:La,set:ja,delete:za,clear:Da,forEach:ln(!1,!1)},t={get(i){return an(this,i,!1,!0)},get size(){return on(this)},has:sn,add:La,set:ja,delete:za,clear:Da,forEach:ln(!1,!0)},n={get(i){return an(this,i,!0)},get size(){return on(this,!0)},has(i){return sn.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:ln(!0,!1)},r={get(i){return an(this,i,!0,!0)},get size(){return on(this,!0)},has(i){return sn.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=fn(i,!1,!1),n[i]=fn(i,!0,!1),t[i]=fn(i,!1,!0),r[i]=fn(i,!0,!0)}),[e,n,t,r]}const[jo,zo,Do,$o]=Lo();function Jr(e,t){const n=t?e?$o:Do:e?zo:jo;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Bo={get:Jr(!1,!1)},Uo={get:Jr(!1,!0)},Ho={get:Jr(!0,!1)},Ji=new WeakMap,Gi=new WeakMap,Qi=new WeakMap,Wo=new WeakMap;function Yo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ko(e){return e.__v_skip||!Object.isExtensible(e)?0:Yo(vo(e))}function Gr(e){return $t(e)?e:Qr(e,!1,Vi,Bo,Ji)}function Xo(e){return Qr(e,!1,Ro,Uo,Gi)}function Zi(e){return Qr(e,!0,Fo,Ho,Qi)}function Qr(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Ko(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function bt(e){return $t(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function $t(e){return!!(e&&e.__v_isReadonly)}function gr(e){return!!(e&&e.__v_isShallow)}function es(e){return bt(e)||$t(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function ts(e){return Sn(e,"__v_skip",!0),e}const Zr=e=>V(e)?Gr(e):e,ea=e=>V(e)?Zi(e):e;function qo(e){Ke&&we&&(e=H(e),Ki(e.dep||(e.dep=Kr())))}function Vo(e,t){e=H(e),e.dep&&vr(e.dep)}function se(e){return!!(e&&e.__v_isRef===!0)}function Jo(e){return se(e)?e.value:e}const Go={get:(e,t,n)=>Jo(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ns(e){return bt(e)?e:new Proxy(e,Go)}var rs;class Qo{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[rs]=!1,this._dirty=!0,this.effect=new Xr(t,()=>{this._dirty||(this._dirty=!0,Vo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}rs="__v_isReadonly";function Zo(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Qo(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Hn(i,t,n)}return a}function Ee(e,t,n,r){if(L(e)){const i=Xe(e,t,n,r);return i&&Di(i)&&i.catch(s=>{Hn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Hn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,s,o]);return}}el(e,n,a,r)}function el(e,t,n,r=!0){console.error(e)}let Bt=!1,br=!1;const re=[];let Te=0;const yt=[];let Le=null,rt=0;const as=Promise.resolve();let ta=null;function tl(e){const t=ta||as;return e?t.then(this?e.bind(this):e):t}function nl(e){let t=Te+1,n=re.length;for(;t<n;){const r=t+n>>>1;Ut(re[r])<e?t=r+1:n=r}return t}function na(e){(!re.length||!re.includes(e,Bt&&e.allowRecurse?Te+1:Te))&&(e.id==null?re.push(e):re.splice(nl(e.id),0,e),is())}function is(){!Bt&&!br&&(br=!0,ta=as.then(os))}function rl(e){const t=re.indexOf(e);t>Te&&re.splice(t,1)}function al(e){R(e)?yt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?rt+1:rt))&&yt.push(e),is()}function $a(e,t=Bt?Te+1:0){for(;t<re.length;t++){const n=re[t];n&&n.pre&&(re.splice(t,1),t--,n())}}function ss(e){if(yt.length){const t=[...new Set(yt)];if(yt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Ut(n)-Ut(r)),rt=0;rt<Le.length;rt++)Le[rt]();Le=null,rt=0}}const Ut=e=>e.id==null?1/0:e.id,il=(e,t)=>{const n=Ut(e)-Ut(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function os(e){br=!1,Bt=!0,re.sort(il);const t=Ae;try{for(Te=0;Te<re.length;Te++){const n=re[Te];n&&n.active!==!1&&Xe(n,null,14)}}finally{Te=0,re.length=0,ss(),Bt=!1,ta=null,(re.length||yt.length)&&os()}}function sl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:g}=r[d]||q;g&&(a=n.map(k=>Z(k)?k.trim():k)),m&&(a=n.map(Ui))}let o,l=r[o=rr(t)]||r[o=rr(Me(t))];!l&&i&&(l=r[o=rr(At(t))]),l&&Ee(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ee(c,e,6,a)}}function ls(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!L(e)){const l=c=>{const d=ls(c,t,!0);d&&(o=!0,oe(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(V(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>s[l]=null):oe(s,i),V(e)&&r.set(e,s),s)}function Wn(e,t){return!e||!zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,At(t))||D(e,t))}let be=null,Yn=null;function Tn(e){const t=be;return be=e,Yn=e&&e.type.__scopeId||null,t}function ol(e){Yn=e}function ll(){Yn=null}function fl(e,t=be,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Va(-1);const i=Tn(t);let s;try{s=e(...a)}finally{Tn(i),r._d&&Va(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:m,data:g,setupState:k,ctx:F,inheritAttrs:N}=e;let $,w;const C=Tn(e);try{if(n.shapeFlag&4){const j=a||r;$=Se(d.call(j,j,m,i,k,g,F)),w=l}else{const j=t;$=Se(j.length>1?j(i,{attrs:l,slots:o,emit:c}):j(i,null)),w=t.props?l:cl(l)}}catch(j){Lt.length=0,Hn(j,e,1),$=de(Ht)}let O=$;if(w&&N!==!1){const j=Object.keys(w),{shapeFlag:B}=O;j.length&&B&7&&(s&&j.some(Ur)&&(w=ul(w,s)),O=wt(O,w))}return n.dirs&&(O=wt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),$=O,Tn(C),$}const cl=e=>{let t;for(const n in e)(n==="class"||n==="style"||zn(n))&&((t||(t={}))[n]=e[n]);return t},ul=(e,t)=>{const n={};for(const r in e)(!Ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dl(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ba(r,s,c):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(s[g]!==r[g]&&!Wn(c,g))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ba(r,s,c):!0:!!s;return!1}function Ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Wn(n,i))return!0}return!1}function ml({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pl=e=>e.__isSuspense;function hl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):al(e)}function vl(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function wn(e,t,n=!1){const r=te||be;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}function gl(e,t){return ra(e,null,{flush:"post"})}const cn={};function _n(e,t,n){return ra(e,t,n)}function ra(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=q){const o=te;let l,c=!1,d=!1;if(se(e)?(l=()=>e.value,c=gr(e)):bt(e)?(l=()=>e,r=!0):R(e)?(d=!0,c=e.some(O=>bt(O)||gr(O)),l=()=>e.map(O=>{if(se(O))return O.value;if(bt(O))return mt(O);if(L(O))return Xe(O,o,2)})):L(e)?t?l=()=>Xe(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return m&&m(),Ee(e,o,3,[g])}:l=Ae,t&&r){const O=l;l=()=>mt(O())}let m,g=O=>{m=w.onStop=()=>{Xe(O,o,4)}},k;if(Yt)if(g=Ae,t?n&&Ee(t,o,3,[l(),d?[]:void 0,g]):l(),a==="sync"){const O=vf();k=O.__watcherHandles||(O.__watcherHandles=[])}else return Ae;let F=d?new Array(e.length).fill(cn):cn;const N=()=>{if(!!w.active)if(t){const O=w.run();(r||c||(d?O.some((j,B)=>In(j,F[B])):In(O,F)))&&(m&&m(),Ee(t,o,3,[O,F===cn?void 0:d&&F[0]===cn?[]:F,g]),F=O)}else w.run()};N.allowRecurse=!!t;let $;a==="sync"?$=N:a==="post"?$=()=>fe(N,o&&o.suspense):(N.pre=!0,o&&(N.id=o.uid),$=()=>na(N));const w=new Xr(l,$);t?n?N():F=w.run():a==="post"?fe(w.run.bind(w),o&&o.suspense):w.run();const C=()=>{w.stop(),o&&o.scope&&Hr(o.scope.effects,w)};return k&&k.push(C),C}function bl(e,t,n){const r=this.proxy,a=Z(e)?e.includes(".")?fs(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const s=te;_t(this);const o=ra(a,i.bind(r),n);return s?_t(s):lt(),o}function fs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function mt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))mt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)mt(e[n],t);else if(zi(e)||gt(e))e.forEach(n=>{mt(n,t)});else if(Bi(e))for(const n in e)mt(e[n],t);return e}function aa(e){return L(e)?{setup:e,name:e.name}:e}const kn=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function yl(e,t){us(e,"a",t)}function xl(e,t){us(e,"da",t)}function us(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Kn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)cs(a.parent.vnode)&&wl(r,t,n,a),a=a.parent}}function wl(e,t,n,r){const a=Kn(t,e,r,!0);ia(()=>{Hr(r[t],a)},n)}function Kn(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Et(),_t(n);const o=Ee(t,n,e,s);return lt(),Ot(),o});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=te)=>(!Yt||e==="sp")&&Kn(e,(...r)=>t(...r),n),_l=Be("bm"),ds=Be("m"),kl=Be("bu"),Al=Be("u"),El=Be("bum"),ia=Be("um"),Ol=Be("sp"),Cl=Be("rtg"),Pl=Be("rtc");function Il(e,t=te){Kn("ec",e,t)}function et(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Et(),Ee(l,n,8,[e.el,o,e,t]),Ot())}}const ms="components";function Sl(e,t){return Nl(ms,e,!0,t)||e}const Tl=Symbol();function Nl(e,t,n=!0,r=!1){const a=be||te;if(a){const i=a.type;if(e===ms){const o=mf(i,!1);if(o&&(o===t||o===Me(t)||o===Bn(Me(t))))return i}const s=Ua(a[e]||i[e],t)||Ua(a.appContext[e],t);return!s&&r?i:s}}function Ua(e,t){return e&&(e[t]||e[Me(t)]||e[Bn(Me(t))])}function Ml(e,t,n,r){let a;const i=n&&n[r];if(R(e)||Z(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const yr=e=>e?ks(e)?fa(e)||e.proxy:yr(e.parent):null,Ft=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>sa(e),$forceUpdate:e=>e.f||(e.f=()=>na(e.update)),$nextTick:e=>e.n||(e.n=tl.bind(e.proxy)),$watch:e=>bl.bind(e)}),sr=(e,t)=>e!==q&&!e.__isScriptSetup&&D(e,t),Fl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const k=s[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(sr(r,t))return s[t]=1,r[t];if(a!==q&&D(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&D(c,t))return s[t]=3,i[t];if(n!==q&&D(n,t))return s[t]=4,n[t];xr&&(s[t]=0)}}const d=Ft[t];let m,g;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==q&&D(n,t))return s[t]=4,n[t];if(g=l.config.globalProperties,D(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return sr(a,t)?(a[t]=n,!0):r!==q&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==q&&D(e,s)||sr(t,s)||(o=i[0])&&D(o,s)||D(r,s)||D(Ft,s)||D(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xr=!0;function Rl(e){const t=sa(e),n=e.proxy,r=e.ctx;xr=!1,t.beforeCreate&&Ha(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:m,mounted:g,beforeUpdate:k,updated:F,activated:N,deactivated:$,beforeDestroy:w,beforeUnmount:C,destroyed:O,unmounted:j,render:B,renderTracked:le,renderTriggered:ne,errorCaptured:ye,serverPrefetch:he,expose:Fe,inheritAttrs:Pt,components:en,directives:tn,filters:er}=t;if(c&&Ll(c,r,null,e.appContext.config.unwrapInjectedRef),s)for(const J in s){const W=s[J];L(W)&&(r[J]=W.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=Gr(J))}if(xr=!0,i)for(const J in i){const W=i[J],Qe=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Ae,nn=!L(W)&&L(W.set)?W.set.bind(n):Ae,Ze=ge({get:Qe,set:nn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Oe=>Ze.value=Oe})}if(o)for(const J in o)ps(o[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(W=>{vl(W,J[W])})}d&&Ha(d,e,"c");function ae(J,W){R(W)?W.forEach(Qe=>J(Qe.bind(n))):W&&J(W.bind(n))}if(ae(_l,m),ae(ds,g),ae(kl,k),ae(Al,F),ae(yl,N),ae(xl,$),ae(Il,ye),ae(Pl,le),ae(Cl,ne),ae(El,C),ae(ia,j),ae(Ol,he),R(Fe))if(Fe.length){const J=e.exposed||(e.exposed={});Fe.forEach(W=>{Object.defineProperty(J,W,{get:()=>n[W],set:Qe=>n[W]=Qe})})}else e.exposed||(e.exposed={});B&&e.render===Ae&&(e.render=B),Pt!=null&&(e.inheritAttrs=Pt),en&&(e.components=en),tn&&(e.directives=tn)}function Ll(e,t,n=Ae,r=!1){R(e)&&(e=wr(e));for(const a in e){const i=e[a];let s;V(i)?"default"in i?s=wn(i.from||a,i.default,!0):s=wn(i.from||a):s=wn(i),se(s)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[a]=s}}function Ha(e,t,n){Ee(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ps(e,t,n,r){const a=r.includes(".")?fs(n,r):()=>n[r];if(Z(e)){const i=t[e];L(i)&&_n(a,i)}else if(L(e))_n(a,e.bind(n));else if(V(e))if(R(e))e.forEach(i=>ps(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&_n(a,i,e)}}function sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Nn(l,c,s,!0)),Nn(l,t,s)),V(t)&&i.set(t,l),l}function Nn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Nn(e,i,n,!0),a&&a.forEach(s=>Nn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=jl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const jl={data:Wa,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:nt,directives:nt,watch:Dl,provide:Wa,inject:zl};function Wa(e,t){return t?e?function(){return oe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function zl(e,t){return nt(wr(e),wr(t))}function wr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?oe(oe(Object.create(null),e),t):t}function Dl(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=ie(e[r],t[r]);return n}function $l(e,t,n,r=!1){const a={},i={};Sn(i,qn,1),e.propsDefaults=Object.create(null),hs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Xo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Bl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=H(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Wn(e.emitsOptions,g))continue;const k=t[g];if(l)if(D(i,g))k!==i[g]&&(i[g]=k,c=!0);else{const F=Me(g);a[F]=_r(l,o,F,k,e,!1)}else k!==i[g]&&(i[g]=k,c=!0)}}}else{hs(e,t,a,i)&&(c=!0);let d;for(const m in o)(!t||!D(t,m)&&((d=At(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=_r(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],c=!0)}c&&je(e,"set","$attrs")}function hs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(xn(l))continue;const c=t[l];let d;a&&D(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:Wn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=H(n),c=o||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=_r(a,l,m,c[m],e,!D(c,m))}}return s}function _r(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=D(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(_t(a),r=c[n]=l.call(null,t),lt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===At(n))&&(r=!0))}return r}function vs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[g,k]=vs(m,t,!0);oe(s,g),k&&o.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,vt),vt;if(R(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Ya(m)&&(s[m]=q)}else if(i)for(const d in i){const m=Me(d);if(Ya(m)){const g=i[d],k=s[m]=R(g)||L(g)?{type:g}:Object.assign({},g);if(k){const F=qa(Boolean,k.type),N=qa(String,k.type);k[0]=F>-1,k[1]=N<0||F<N,(F>-1||D(k,"default"))&&o.push(m)}}}const c=[s,o];return V(e)&&r.set(e,c),c}function Ya(e){return e[0]!=="$"}function Ka(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Xa(e,t){return Ka(e)===Ka(t)}function qa(e,t){return R(t)?t.findIndex(n=>Xa(n,e)):L(t)&&Xa(t,e)?0:-1}const gs=e=>e[0]==="_"||e==="$stable",oa=e=>R(e)?e.map(Se):[Se(e)],Ul=(e,t,n)=>{if(t._n)return t;const r=fl((...a)=>oa(t(...a)),n);return r._c=!1,r},bs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(gs(a))continue;const i=e[a];if(L(i))t[a]=Ul(a,i,r);else if(i!=null){const s=oa(i);t[a]=()=>s}}},ys=(e,t)=>{const n=oa(t);e.slots.default=()=>n},Hl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Sn(t,"_",n)):bs(t,e.slots={})}else e.slots={},t&&ys(e,t);Sn(e.slots,qn,1)},Wl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=q;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(oe(a,t),!n&&o===1&&delete a._):(i=!t.$stable,bs(t,a)),s=t}else t&&(ys(e,t),s={default:1});if(i)for(const o in a)!gs(o)&&!(o in s)&&delete a[o]};function xs(){return{app:null,config:{isNativeTag:mo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yl=0;function Kl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!V(a)&&(a=null);const i=xs(),s=new Set;let o=!1;const l=i.app={_uid:Yl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:gf,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&L(c.install)?(s.add(c),c.install(l,...d)):L(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!o){const g=de(r,a);return g.appContext=i,d&&t?t(g,c):e(g,c,m),o=!0,l._container=c,c.__vue_app__=l,fa(g.component)||g.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function kr(e,t,n,r,a=!1){if(R(e)){e.forEach((g,k)=>kr(g,t&&(R(t)?t[k]:t),n,r,a));return}if(kn(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,d=o.refs===q?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(Z(c)?(d[c]=null,D(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),L(l))Xe(l,o,12,[s,d]);else{const g=Z(l),k=se(l);if(g||k){const F=()=>{if(e.f){const N=g?D(m,l)?m[l]:d[l]:l.value;a?R(N)&&Hr(N,i):R(N)?N.includes(i)||N.push(i):g?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=s,D(m,l)&&(m[l]=s)):k&&(l.value=s,e.k&&(d[e.k]=s))};s?(F.id=-1,fe(F,n)):F()}}}const fe=hl;function Xl(e){return ql(e)}function ql(e,t){const n=yo();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:g,setScopeId:k=Ae,insertStaticContent:F}=e,N=(f,u,p,v=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!St(f,u)&&(v=rn(f),Oe(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=u;switch(b){case Xn:$(f,u,p,v);break;case Ht:w(f,u,p,v);break;case Rt:f==null&&C(u,p,v,A);break;case ve:en(f,u,p,v,h,x,A,y,_);break;default:P&1?B(f,u,p,v,h,x,A,y,_):P&6?tn(f,u,p,v,h,x,A,y,_):(P&64||P&128)&&b.process(f,u,p,v,h,x,A,y,_,ut)}S!=null&&h&&kr(S,f&&f.ref,x,u||f,!u)},$=(f,u,p,v)=>{if(f==null)r(u.el=o(u.children),p,v);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},w=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},C=(f,u,p,v)=>{[f.el,f.anchor]=F(f.children,u,p,v,f.el,f.anchor)},O=({el:f,anchor:u},p,v)=>{let h;for(;f&&f!==u;)h=g(f),r(f,p,v),f=h;r(u,p,v)},j=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=g(f),a(f),f=p;a(u)},B=(f,u,p,v,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?le(u,p,v,h,x,A,y,_):he(f,u,h,x,A,y,_)},le=(f,u,p,v,h,x,A,y)=>{let _,b;const{type:S,props:P,shapeFlag:T,transition:M,dirs:z}=f;if(_=f.el=s(f.type,x,P&&P.is,P),T&8?d(_,f.children):T&16&&ye(f.children,_,null,v,h,x&&S!=="foreignObject",A,y),z&&et(f,null,v,"created"),P){for(const U in P)U!=="value"&&!xn(U)&&i(_,U,null,P[U],x,f.children,v,h,Re);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Pe(b,v,f)}ne(_,f,f.scopeId,A,v),z&&et(f,null,v,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;Y&&M.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||Y||z)&&fe(()=>{b&&Pe(b,v,f),Y&&M.enter(_),z&&et(f,null,v,"mounted")},h)},ne=(f,u,p,v,h)=>{if(p&&k(f,p),v)for(let x=0;x<v.length;x++)k(f,v[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ne(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ye=(f,u,p,v,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Ye(f[b]):Se(f[b]);N(null,S,u,p,v,h,x,A,y)}},he=(f,u,p,v,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const P=f.props||q,T=u.props||q;let M;p&&tt(p,!1),(M=T.onVnodeBeforeUpdate)&&Pe(M,p,u,f),S&&et(u,f,p,"beforeUpdate"),p&&tt(p,!0);const z=h&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,v,z,x):A||W(f,u,y,null,p,v,z,x,!1),_>0){if(_&16)Pt(y,u,P,T,p,v,h);else if(_&2&&P.class!==T.class&&i(y,"class",null,T.class,h),_&4&&i(y,"style",P.style,T.style,h),_&8){const Y=u.dynamicProps;for(let U=0;U<Y.length;U++){const Q=Y[U],xe=P[Q],dt=T[Q];(dt!==xe||Q==="value")&&i(y,Q,xe,dt,h,f.children,p,v,Re)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Pt(y,u,P,T,p,v,h);((M=T.onVnodeUpdated)||S)&&fe(()=>{M&&Pe(M,p,u,f),S&&et(u,f,p,"updated")},v)},Fe=(f,u,p,v,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===ve||!St(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,S,null,v,h,x,A,!0)}},Pt=(f,u,p,v,h,x,A)=>{if(p!==v){if(p!==q)for(const y in p)!xn(y)&&!(y in v)&&i(f,y,p[y],null,A,u.children,h,x,Re);for(const y in v){if(xn(y))continue;const _=v[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,Re)}"value"in v&&i(f,"value",p.value,v.value)}},en=(f,u,p,v,h,x,A,y,_)=>{const b=u.el=f?f.el:o(""),S=u.anchor=f?f.anchor:o("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:M}=u;M&&(y=y?y.concat(M):M),f==null?(r(b,p,v),r(S,p,v),ye(u.children,p,S,h,x,A,y,_)):P>0&&P&64&&T&&f.dynamicChildren?(Fe(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&ws(f,u,!0)):W(f,u,p,S,h,x,A,y,_)},tn=(f,u,p,v,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,v,A,_):er(u,p,v,h,x,A,_):Oa(f,u,_)},er=(f,u,p,v,h,x,A)=>{const y=f.component=of(f,v,h);if(cs(f)&&(y.ctx.renderer=ut),ff(y),y.asyncDep){if(h&&h.registerDep(y,ae),!f.el){const _=y.subTree=de(Ht);w(null,_,u,p)}return}ae(y,f,u,p,h,x,A)},Oa=(f,u,p)=>{const v=u.component=f.component;if(dl(f,u,p))if(v.asyncDep&&!v.asyncResolved){J(v,u,p);return}else v.next=u,rl(v.update),v.update();else u.el=f.el,v.vnode=u},ae=(f,u,p,v,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:P,u:T,parent:M,vnode:z}=f,Y=S,U;tt(f,!1),S?(S.el=z.el,J(f,S,A)):S=z,P&&ar(P),(U=S.props&&S.props.onVnodeBeforeUpdate)&&Pe(U,M,S,z),tt(f,!0);const Q=ir(f),xe=f.subTree;f.subTree=Q,N(xe,Q,m(xe.el),rn(xe),f,h,x),S.el=Q.el,Y===null&&ml(f,Q.el),T&&fe(T,h),(U=S.props&&S.props.onVnodeUpdated)&&fe(()=>Pe(U,M,S,z),h)}else{let S;const{el:P,props:T}=u,{bm:M,m:z,parent:Y}=f,U=kn(u);if(tt(f,!1),M&&ar(M),!U&&(S=T&&T.onVnodeBeforeMount)&&Pe(S,Y,u),tt(f,!0),P&&nr){const Q=()=>{f.subTree=ir(f),nr(P,f.subTree,f,h,null)};U?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=ir(f);N(null,Q,p,v,f,h,x),u.el=Q.el}if(z&&fe(z,h),!U&&(S=T&&T.onVnodeMounted)){const Q=u;fe(()=>Pe(S,Y,Q),h)}(u.shapeFlag&256||Y&&kn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&fe(f.a,h),f.isMounted=!0,u=p=v=null}},_=f.effect=new Xr(y,()=>na(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,tt(f,!0),b()},J=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,Bl(f,u.props,v,p),Wl(f,u.children,p),Et(),$a(),Ot()},W=(f,u,p,v,h,x,A,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:M}=u;if(T>0){if(T&128){nn(b,P,p,v,h,x,A,y,_);return}else if(T&256){Qe(b,P,p,v,h,x,A,y,_);return}}M&8?(S&16&&Re(b,h,x),P!==b&&d(p,P)):S&16?M&16?nn(b,P,p,v,h,x,A,y,_):Re(b,h,x,!0):(S&8&&d(p,""),M&16&&ye(P,p,v,h,x,A,y,_))},Qe=(f,u,p,v,h,x,A,y,_)=>{f=f||vt,u=u||vt;const b=f.length,S=u.length,P=Math.min(b,S);let T;for(T=0;T<P;T++){const M=u[T]=_?Ye(u[T]):Se(u[T]);N(f[T],M,p,null,h,x,A,y,_)}b>S?Re(f,h,x,!0,!1,P):ye(u,p,v,h,x,A,y,_,P)},nn=(f,u,p,v,h,x,A,y,_)=>{let b=0;const S=u.length;let P=f.length-1,T=S-1;for(;b<=P&&b<=T;){const M=f[b],z=u[b]=_?Ye(u[b]):Se(u[b]);if(St(M,z))N(M,z,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=T;){const M=f[P],z=u[T]=_?Ye(u[T]):Se(u[T]);if(St(M,z))N(M,z,p,null,h,x,A,y,_);else break;P--,T--}if(b>P){if(b<=T){const M=T+1,z=M<S?u[M].el:v;for(;b<=T;)N(null,u[b]=_?Ye(u[b]):Se(u[b]),p,z,h,x,A,y,_),b++}}else if(b>T)for(;b<=P;)Oe(f[b],h,x,!0),b++;else{const M=b,z=b,Y=new Map;for(b=z;b<=T;b++){const ue=u[b]=_?Ye(u[b]):Se(u[b]);ue.key!=null&&Y.set(ue.key,b)}let U,Q=0;const xe=T-z+1;let dt=!1,Ia=0;const It=new Array(xe);for(b=0;b<xe;b++)It[b]=0;for(b=M;b<=P;b++){const ue=f[b];if(Q>=xe){Oe(ue,h,x,!0);continue}let Ce;if(ue.key!=null)Ce=Y.get(ue.key);else for(U=z;U<=T;U++)if(It[U-z]===0&&St(ue,u[U])){Ce=U;break}Ce===void 0?Oe(ue,h,x,!0):(It[Ce-z]=b+1,Ce>=Ia?Ia=Ce:dt=!0,N(ue,u[Ce],p,null,h,x,A,y,_),Q++)}const Sa=dt?Vl(It):vt;for(U=Sa.length-1,b=xe-1;b>=0;b--){const ue=z+b,Ce=u[ue],Ta=ue+1<S?u[ue+1].el:v;It[b]===0?N(null,Ce,p,Ta,h,x,A,y,_):dt&&(U<0||b!==Sa[U]?Ze(Ce,p,Ta,2):U--)}}},Ze=(f,u,p,v,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){Ze(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){A.move(f,u,p,ut);return}if(A===ve){r(x,u,p);for(let P=0;P<_.length;P++)Ze(_[P],u,p,v);r(f.anchor,u,p);return}if(A===Rt){O(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,u,p),fe(()=>y.enter(x),h);else{const{leave:P,delayLeave:T,afterLeave:M}=y,z=()=>r(x,u,p),Y=()=>{P(x,()=>{z(),M&&M()})};T?T(x,z,Y):Y()}else r(x,u,p)},Oe=(f,u,p,v=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:T}=f;if(y!=null&&kr(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const M=S&1&&T,z=!kn(f);let Y;if(z&&(Y=A&&A.onVnodeBeforeUnmount)&&Pe(Y,u,f),S&6)io(f.component,p,v);else{if(S&128){f.suspense.unmount(p,v);return}M&&et(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,ut,v):b&&(x!==ve||P>0&&P&64)?Re(b,u,p,!1,!0):(x===ve&&P&384||!h&&S&16)&&Re(_,u,p),v&&Ca(f)}(z&&(Y=A&&A.onVnodeUnmounted)||M)&&fe(()=>{Y&&Pe(Y,u,f),M&&et(f,null,u,"unmounted")},p)},Ca=f=>{const{type:u,el:p,anchor:v,transition:h}=f;if(u===ve){ao(p,v);return}if(u===Rt){j(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},ao=(f,u)=>{let p;for(;f!==u;)p=g(f),a(f),f=p;a(u)},io=(f,u,p)=>{const{bum:v,scope:h,update:x,subTree:A,um:y}=f;v&&ar(v),h.stop(),x&&(x.active=!1,Oe(A,f,u,p)),y&&fe(y,u),fe(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,v=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Oe(f[A],u,p,v,h)},rn=f=>f.shapeFlag&6?rn(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),Pa=(f,u,p)=>{f==null?u._vnode&&Oe(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),$a(),ss(),u._vnode=f},ut={p:N,um:Oe,m:Ze,r:Ca,mt:er,mc:ye,pc:W,pbc:Fe,n:rn,o:e};let tr,nr;return t&&([tr,nr]=t(ut)),{render:Pa,hydrate:tr,createApp:Kl(Pa,tr)}}function tt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ws(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Ye(a[i]),o.el=s.el),n||ws(s,o)),o.type===Xn&&(o.el=s.el)}}function Vl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Jl=e=>e.__isTeleport,ve=Symbol(void 0),Xn=Symbol(void 0),Ht=Symbol(void 0),Rt=Symbol(void 0),Lt=[];let _e=null;function An(e=!1){Lt.push(_e=e?null:[])}function Gl(){Lt.pop(),_e=Lt[Lt.length-1]||null}let Wt=1;function Va(e){Wt+=e}function Ql(e){return e.dynamicChildren=Wt>0?_e||vt:null,Gl(),Wt>0&&_e&&_e.push(e),e}function En(e,t,n,r,a,i){return Ql(ce(e,t,n,r,a,i,!0))}function Ar(e){return e?e.__v_isVNode===!0:!1}function St(e,t){return e.type===t.type&&e.key===t.key}const qn="__vInternal",_s=({key:e})=>e!=null?e:null,On=({ref:e,ref_key:t,ref_for:n})=>e!=null?Z(e)||se(e)||L(e)?{i:be,r:e,k:t,f:!!n}:e:null;function ce(e,t=null,n=null,r=0,a=null,i=e===ve?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_s(t),ref:t&&On(t),scopeId:Yn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:be};return o?(la(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Z(n)?8:16),Wt>0&&!s&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const de=Zl;function Zl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tl)&&(e=Ht),Ar(e)){const o=wt(e,t,!0);return n&&la(o,n),Wt>0&&!i&&_e&&(o.shapeFlag&6?_e[_e.indexOf(e)]=o:_e.push(o)),o.patchFlag|=-2,o}if(pf(e)&&(e=e.__vccOpts),t){t=ef(t);let{class:o,style:l}=t;o&&!Z(o)&&(t.class=jn(o)),V(l)&&(es(l)&&!R(l)&&(l=oe({},l)),t.style=Br(l))}const s=Z(e)?1:pl(e)?128:Jl(e)?64:V(e)?4:L(e)?2:0;return ce(e,t,n,r,a,s,i,!0)}function ef(e){return e?es(e)||qn in e?oe({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?rf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&_s(o),ref:t&&t.ref?n&&a?R(a)?a.concat(On(t)):[a,On(t)]:On(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function tf(e=" ",t=0){return de(Xn,null,e,t)}function nf(e,t){const n=de(Rt,null,e);return n.staticCount=t,n}function Se(e){return e==null||typeof e=="boolean"?de(Ht):R(e)?de(ve,null,e.slice()):typeof e=="object"?Ye(e):de(Xn,null,String(e))}function Ye(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function la(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),la(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(qn in t)?t._ctx=be:a===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[tf(t)]):n=8);e.children=t,e.shapeFlag|=n}function rf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=jn([t.class,r.class]));else if(a==="style")t.style=Br([t.style,r.style]);else if(zn(a)){const i=t[a],s=r[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Pe(e,t,n,r=null){Ee(e,t,7,[n,r])}const af=xs();let sf=0;function of(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||af,i={uid:sf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new xo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vs(r,a),emitsOptions:ls(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=sl.bind(null,i),e.ce&&e.ce(i),i}let te=null;const lf=()=>te||be,_t=e=>{te=e,e.scope.on()},lt=()=>{te&&te.scope.off(),te=null};function ks(e){return e.vnode.shapeFlag&4}let Yt=!1;function ff(e,t=!1){Yt=t;const{props:n,children:r}=e.vnode,a=ks(e);$l(e,n,a,t),Hl(e,r);const i=a?cf(e,t):void 0;return Yt=!1,i}function cf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ts(new Proxy(e.ctx,Fl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?df(e):null;_t(e),Et();const i=Xe(r,e,0,[e.props,a]);if(Ot(),lt(),Di(i)){if(i.then(lt,lt),t)return i.then(s=>{Ja(e,s,t)}).catch(s=>{Hn(s,e,0)});e.asyncDep=i}else Ja(e,i,t)}else As(e,t)}function Ja(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=ns(t)),As(e,n)}let Ga;function As(e,t,n){const r=e.type;if(!e.render){if(!t&&Ga&&!r.render){const a=r.template||sa(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=oe(oe({isCustomElement:i,delimiters:o},s),l);r.render=Ga(a,c)}}e.render=r.render||Ae}_t(e),Et(),Rl(e),Ot(),lt()}function uf(e){return new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}})}function df(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=uf(e))},slots:e.slots,emit:e.emit,expose:t}}function fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ns(ts(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ft)return Ft[n](e)},has(t,n){return n in t||n in Ft}}))}function mf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function pf(e){return L(e)&&"__vccOpts"in e}const ge=(e,t)=>Zo(e,t,Yt);function Es(e,t,n){const r=arguments.length;return r===2?V(t)&&!R(t)?Ar(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ar(n)&&(n=[n]),de(e,t,n))}const hf=Symbol(""),vf=()=>wn(hf),gf="3.2.45",bf="http://www.w3.org/2000/svg",at=typeof document<"u"?document:null,Qa=at&&at.createElement("template"),yf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?at.createElementNS(bf,e):at.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const o=Qa.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function wf(e,t,n){const r=e.style,a=Z(n);if(n&&!a){for(const i in n)Er(r,i,n[i]);if(t&&!Z(t))for(const i in t)n[i]==null&&Er(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Za=/\s*!important$/;function Er(e,t,n){if(R(n))n.forEach(r=>Er(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_f(e,t);Za.test(n)?e.setProperty(At(r),n.replace(Za,""),"important"):e[r]=n}}const ei=["Webkit","Moz","ms"],or={};function _f(e,t){const n=or[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return or[t]=r;r=Bn(r);for(let a=0;a<ei.length;a++){const i=ei[a]+r;if(i in e)return or[t]=i}return t}const ti="http://www.w3.org/1999/xlink";function kf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ti,t.slice(6,t.length)):e.setAttributeNS(ti,t,n);else{const i=uo(t);n==null||i&&!Ri(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Af(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ri(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function Ef(e,t,n,r){e.addEventListener(t,n,r)}function Of(e,t,n,r){e.removeEventListener(t,n,r)}function Cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Pf(t);if(r){const c=i[t]=Tf(r,a);Ef(e,o,c,l)}else s&&(Of(e,o,s,l),i[t]=void 0)}}const ni=/(?:Once|Passive|Capture)$/;function Pf(e){let t;if(ni.test(e)){t={};let r;for(;r=e.match(ni);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):At(e.slice(2)),t]}let lr=0;const If=Promise.resolve(),Sf=()=>lr||(If.then(()=>lr=0),lr=Date.now());function Tf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Nf(r,n.value),t,5,[r])};return n.value=e,n.attached=Sf(),n}function Nf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ri=/^on[a-z]/,Mf=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?xf(e,r,a):t==="style"?wf(e,n,r):zn(t)?Ur(t)||Cf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ff(e,t,r,a))?Af(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),kf(e,t,r,a))};function Ff(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ri.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ri.test(t)&&Z(n)?!1:t in e}function Os(e){const t=lf();if(!t)return;const n=t.ut=(a=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i=>Cr(i,a))},r=()=>{const a=e(t.proxy);Or(t.subTree,a),n(a)};gl(r),ds(()=>{const a=new MutationObserver(r);a.observe(t.subTree.el.parentNode,{childList:!0}),ia(()=>a.disconnect())})}function Or(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Or(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Cr(e.el,t);else if(e.type===ve)e.children.forEach(n=>Or(n,t));else if(e.type===Rt){let{el:n,anchor:r}=e;for(;n&&(Cr(n,t),n!==r);)n=n.nextSibling}}function Cr(e,t){if(e.nodeType===1){const n=e.style;for(const r in t)n.setProperty(`--${r}`,t[r])}}const Rf=oe({patchProp:Mf},yf);let ai;function Lf(){return ai||(ai=Xl(Rf))}const jf=(...e)=>{const t=Lf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=zf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function zf(e){return Z(e)?document.querySelector(e):e}const Cs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},ca={name:"playerButton",props:{player:String,disable:Boolean,playerColor:String},data(){return{diceNum:1}},methods:{Clicked(e){var t=Math.floor(Math.random()*6+1);this.diceNum=t,t==6&&this.$emit("go-forward"),this.$emit("next-turn")}}},ii=()=>{Os(e=>({"48912dfa":e.playerColor}))},si=ca.setup;ca.setup=si?(e,t)=>(ii(),si(e,t)):ii;const Df=ca,$f=nf('<div id="dice-one-side-one" class="side one" data-v-30900592><div class="dot one-1" data-v-30900592></div></div><div id="dice-one-side-two" class="side two" data-v-30900592><div class="dot two-1" data-v-30900592></div><div class="dot two-2" data-v-30900592></div></div><div id="dice-one-side-three" class="side three" data-v-30900592><div class="dot three-1" data-v-30900592></div><div class="dot three-2" data-v-30900592></div><div class="dot three-3" data-v-30900592></div></div><div id="dice-one-side-four" class="side four" data-v-30900592><div class="dot four-1" data-v-30900592></div><div class="dot four-2" data-v-30900592></div><div class="dot four-3" data-v-30900592></div><div class="dot four-4" data-v-30900592></div></div><div id="dice-one-side-five" class="side five" data-v-30900592><div class="dot five-1" data-v-30900592></div><div class="dot five-2" data-v-30900592></div><div class="dot five-3" data-v-30900592></div><div class="dot five-4" data-v-30900592></div><div class="dot five-5" data-v-30900592></div></div><div id="dice-one-side-six" class="side six" data-v-30900592><div class="dot six-1" data-v-30900592></div><div class="dot six-2" data-v-30900592></div><div class="dot six-3" data-v-30900592></div><div class="dot six-4" data-v-30900592></div><div class="dot six-5" data-v-30900592></div><div class="dot six-6" data-v-30900592></div></div>',6),Bf=[$f],Uf=["disabled"];function Hf(e,t,n,r,a,i){return An(),En("div",null,[ce("div",{id:"dice1",class:jn("dice dice-one show-"+a.diceNum)},Bf,2),ce("button",{onClick:t[0]||(t[0]=s=>i.Clicked(n.player)),disabled:n.disable},"Roll "+Li(n.player),9,Uf)])}const Wf=Cs(Df,[["render",Hf],["__scopeId","data-v-30900592"]]);const ua={name:"App",components:{Player:Wf},data(){return{currentPlayer:0,up:0,down:0,left:0,right:0,players:[{id:0,name:"Player1",disabled:!1,color:"#00EBE5"},{id:1,name:"Player2",disabled:!0,color:"#EB2800"},{id:2,name:"Player3",disabled:!0,color:"#1EEB00"},{id:3,name:"Player4",disabled:!0,color:"#EBE101"}],color:"white",gameover:"hidden",winner:""}},methods:{NextTurn(){var e=this.currentPlayer%4;this.players[e].disabled=!0,this.currentPlayer++,e=this.currentPlayer%4,console.log(this.currentPlayer),this.players[e].disabled=!1},Move(e){e==0?(this.up+=22,this.color="#00EBE5"):e==1?(this.right+=22,this.color="#EB2800"):e==2?(this.down+=22,this.color="#1EEB00"):e==3&&(this.left+=22,this.color="#EBE101"),console.log("up"+this.up+"down "+this.down+"left "+this.left+"right "+this.right),this.up-this.down==176?(console.log(this.players[0].name+" Wins!"),this.winner=this.players[0].name,this.gameover="visible"):this.up-this.down==-176?(console.log(this.players[2].name+" Wins!"),this.winner=this.players[2].name,this.gameover="visible"):this.left-this.right==176?(console.log(this.players[3].name+" Wins!"),this.winner=this.players[3].name,this.gameover="visible"):this.left-this.right==-176&&(console.log(this.players[1].name+" Wins!"),this.winner=this.players[1].name,this.gameover="visible")}}},oi=()=>{Os(e=>({"392764c7":e.color,"583382dd":e.right-e.left+"px "+(e.down-e.up)+"px","6943403c":e.gameover}))},li=ua.setup;ua.setup=li?(e,t)=>(oi(),li(e,t)):oi;const Yf=ua,Vn=e=>(ol("data-v-5d72d0a1"),e=e(),ll(),e),Kf=Vn(()=>ce("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"},null,-1)),Xf={class:"main"},qf={class:"inputs"},Vf=Vn(()=>ce("div",{class:"board"},null,-1)),Jf=Vn(()=>ce("div",{class:"object"},[ce("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",height:"100%"},[ce("path",{d:"M256 48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"})])],-1)),Gf={class:"fade"},Qf=Vn(()=>ce("p",null,"Reload the page to Restart",-1));function Zf(e,t,n,r,a,i){const s=Sl("Player");return An(),En(ve,null,[Kf,ce("div",Xf,[ce("div",qf,[(An(!0),En(ve,null,Ml(a.players,o=>(An(),En("div",{key:o.id},[de(s,{onNextTurn:i.NextTurn,onGoForward:l=>i.Move(o.id),player:o.name,disable:o.disabled,playerColor:o.color},null,8,["onNextTurn","onGoForward","player","disable","playerColor"])]))),128))]),Vf,Jf]),ce("div",Gf,[ce("h1",null,"The Winner is "+Li(this.winner)+" !",1),Qf])],64)}const ec=Cs(Yf,[["render",Zf],["__scopeId","data-v-5d72d0a1"]]);function fi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fi(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mn(e){return Mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mn(e)}function tc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ci(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nc(e,t,n){return t&&ci(e.prototype,t),n&&ci(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function da(e,t){return ac(e)||sc(e,t)||Ps(e,t)||lc()}function Gt(e){return rc(e)||ic(e)||Ps(e)||oc()}function rc(e){if(Array.isArray(e))return Pr(e)}function ac(e){if(Array.isArray(e))return e}function ic(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Ps(e,t){if(!!e){if(typeof e=="string")return Pr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pr(e,t)}}function Pr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ui=function(){},ma={},Is={},Ss=null,Ts={mark:ui,measure:ui};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(Is=document),typeof MutationObserver<"u"&&(Ss=MutationObserver),typeof performance<"u"&&(Ts=performance)}catch{}var fc=ma.navigator||{},di=fc.userAgent,mi=di===void 0?"":di,Ve=ma,X=Is,pi=Ss,un=Ts;Ve.document;var Ue=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Ns=~mi.indexOf("MSIE")||~mi.indexOf("Trident/"),dn,mn,pn,hn,vn,ze="___FONT_AWESOME___",Ir=16,Ms="fa",Fs="svg-inline--fa",ft="data-fa-i2svg",Sr="data-fa-pseudo-element",cc="data-fa-pseudo-element-pending",pa="data-prefix",ha="data-icon",hi="fontawesome-i2svg",uc="async",dc=["HTML","HEAD","STYLE","SCRIPT"],Rs=function(){try{return!0}catch{return!1}}(),K="classic",G="sharp",va=[K,G];function Qt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Kt=Qt((dn={},ee(dn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(dn,G,{fa:"solid",fass:"solid","fa-solid":"solid"}),dn)),Xt=Qt((mn={},ee(mn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(mn,G,{solid:"fass"}),mn)),qt=Qt((pn={},ee(pn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(pn,G,{fass:"fa-solid"}),pn)),mc=Qt((hn={},ee(hn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(hn,G,{"fa-solid":"fass"}),hn)),pc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ls="fa-layers-text",hc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vc=Qt((vn={},ee(vn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(vn,G,{900:"fass"}),vn)),js=[1,2,3,4,5,6,7,8,9,10],gc=js.concat([11,12,13,14,15,16,17,18,19,20]),bc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vt=new Set;Object.keys(Xt[K]).map(Vt.add.bind(Vt));Object.keys(Xt[G]).map(Vt.add.bind(Vt));var yc=[].concat(va,Gt(Vt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY]).concat(js.map(function(e){return"".concat(e,"x")})).concat(gc.map(function(e){return"w-".concat(e)})),jt=Ve.FontAwesomeConfig||{};function xc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function wc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var _c=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_c.forEach(function(e){var t=da(e,2),n=t[0],r=t[1],a=wc(xc(n));a!=null&&(jt[r]=a)})}var zs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ms,replacementClass:Fs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};jt.familyPrefix&&(jt.cssPrefix=jt.familyPrefix);var kt=E(E({},zs),jt);kt.autoReplaceSvg||(kt.observeMutations=!1);var I={};Object.keys(zs).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){kt[e]=n,zt.forEach(function(r){return r(I)})},get:function(){return kt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){kt.cssPrefix=t,zt.forEach(function(n){return n(I)})},get:function(){return kt.cssPrefix}});Ve.FontAwesomeConfig=I;var zt=[];function kc(e){return zt.push(e),function(){zt.splice(zt.indexOf(e),1)}}var We=Ir,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ac(e){if(!(!e||!Ue)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Ec="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jt(){for(var e=12,t="";e-- >0;)t+=Ec[Math.random()*62|0];return t}function Ct(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Ct(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ds(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ds(e[n]),'" ')},"").trim()}function Jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ba(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function Cc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Pc(e){var t=e.transform,n=e.width,r=n===void 0?Ir:n,a=e.height,i=a===void 0?Ir:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Ns?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ic=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $s(){var e=Ms,t=Fs,n=I.cssPrefix,r=I.replacementClass,a=Ic;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var vi=!1;function fr(){I.autoAddCss&&!vi&&(Ac($s()),vi=!0)}var Sc={mixout:function(){return{dom:{css:$s,insertCss:fr}}},hooks:function(){return{beforeDOMElementCreation:function(){fr()},beforeI2svg:function(){fr()}}}},De=Ve||{};De[ze]||(De[ze]={});De[ze].styles||(De[ze].styles={});De[ze].hooks||(De[ze].hooks={});De[ze].shims||(De[ze].shims=[]);var ke=De[ze],Bs=[],Tc=function e(){X.removeEventListener("DOMContentLoaded",e),Fn=1,Bs.map(function(t){return t()})},Fn=!1;Ue&&(Fn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Fn||X.addEventListener("DOMContentLoaded",Tc));function Nc(e){!Ue||(Fn?setTimeout(e,0):Bs.push(e))}function Zt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ds(e):"<".concat(t," ").concat(Oc(r),">").concat(i.map(Zt).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Mc=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},cr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?Mc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,t[c],c,t);return d};function Fc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Tr(e){var t=Fc(e);return t.length===1?t[0].toString(16):null}function Rc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function bi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Nr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=bi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,bi(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&Nr("fa",t)}var gn,bn,yn,pt=ke.styles,Lc=ke.shims,jc=(gn={},ee(gn,K,Object.values(qt[K])),ee(gn,G,Object.values(qt[G])),gn),ya=null,Us={},Hs={},Ws={},Ys={},Ks={},zc=(bn={},ee(bn,K,Object.keys(Kt[K])),ee(bn,G,Object.keys(Kt[G])),bn);function Dc(e){return~yc.indexOf(e)}function $c(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Dc(a)?a:null}var Xs=function(){var t=function(i){return cr(pt,function(s,o,l){return s[l]=cr(o,i,{}),s},{})};Us=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Hs=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Ks=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in pt||I.autoFetchSvg,r=cr(Lc,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Ws=r.names,Ys=r.unicodes,ya=Gn(I.styleDefault,{family:I.familyDefault})};kc(function(e){ya=Gn(e.styleDefault,{family:I.familyDefault})});Xs();function xa(e,t){return(Us[e]||{})[t]}function Bc(e,t){return(Hs[e]||{})[t]}function st(e,t){return(Ks[e]||{})[t]}function qs(e){return Ws[e]||{prefix:null,iconName:null}}function Uc(e){var t=Ys[e],n=xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return ya}var wa=function(){return{prefix:null,iconName:null,rest:[]}};function Gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Kt[r][e],i=Xt[r][e]||Xt[r][a],s=e in ke.styles?e:null;return i||s||null}var yi=(yn={},ee(yn,K,Object.keys(qt[K])),ee(yn,G,Object.keys(qt[G])),yn);function Qn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,K,"".concat(I.cssPrefix,"-").concat(K)),ee(t,G,"".concat(I.cssPrefix,"-").concat(G)),t),s=null,o=K;(e.includes(i[K])||e.some(function(c){return yi[K].includes(c)}))&&(o=K),(e.includes(i[G])||e.some(function(c){return yi[G].includes(c)}))&&(o=G);var l=e.reduce(function(c,d){var m=$c(I.cssPrefix,d);if(pt[d]?(d=jc[o].includes(d)?mc[o][d]:d,s=d,c.prefix=d):zc[o].indexOf(d)>-1?(s=d,c.prefix=Gn(d,{family:o})):m?c.iconName=m:d!==I.replacementClass&&d!==i[K]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var g=s==="fa"?qs(c.iconName):{},k=st(c.prefix,c.iconName);g.prefix&&(s=null),c.iconName=g.iconName||k||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!pt.far&&pt.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},wa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===G&&(pt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Je()||"fas"),l}var Hc=function(){function e(){tc(this,e),this.definitions={}}return nc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=E(E({},n.definitions[o]||{}),s[o]),Nr(o,s[o]);var l=qt[K][o];l&&Nr(l,s[o]),Xs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),xi=[],ht={},xt={},Wc=Object.keys(xt);function Yc(e,t){var n=t.mixoutsTo;return xi=e,ht={},Object.keys(xt).forEach(function(r){Wc.indexOf(r)===-1&&delete xt[r]}),xi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Mn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){ht[s]||(ht[s]=[]),ht[s].push(i[s])})}r.provides&&r.provides(xt)}),n}function Mr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ht[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xt[e]?xt[e].apply(null,t):void 0}function Fr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=st(n,t)||t,gi(Vs.definitions,n,t)||gi(ke.styles,n,t)}var Vs=new Hc,Kc=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ct("noAuto")},Xc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ue?(ct("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Nc(function(){Vc({autoReplaceSvgRoot:n}),ct("watch",t)})}},qc={icon:function(t){if(t===null)return null;if(Mn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Gn(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(pc))){var a=Qn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:st(i,t)||t}}}},pe={noAuto:Kc,config:I,dom:Xc,parse:qc,library:Vs,findIconDefinition:Fr,toHtml:Zt},Vc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ke.styles).length>0||I.autoFetchSvg)&&Ue&&I.autoReplaceSvg&&pe.dom.i2svg({node:r})};function Zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Zt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ue){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Jc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(ba(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=Jn(E(E({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Gc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:s}),children:r}]}]}function _a(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,g=e.watchable,k=g===void 0?!1:g,F=r.found?r:n,N=F.width,$=F.height,w=a==="fak",C=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(he){return m.classes.indexOf(he)===-1}).filter(function(he){return he!==""||!!he}).concat(m.classes).join(" "),O={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat($)})},j=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/$*16*.0625,"em")}:{};k&&(O.attributes[ft]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(d||Jt())},children:[l]}),delete O.attributes.title);var B=E(E({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:E(E({},j),m.styles)}),le=r.found&&n.found?$e("generateAbstractMask",B)||{children:[],attributes:{}}:$e("generateAbstractIcon",B)||{children:[],attributes:{}},ne=le.children,ye=le.attributes;return B.children=ne,B.attributes=ye,o?Gc(B):Jc(B)}function wi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=E(E(E({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[ft]="");var d=E({},s.styles);ba(a)&&(d.transform=Pc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Jn(d);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Qc(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Jn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ur=ke.styles;function Rr(e){var t=e[0],n=e[1],r=e.slice(4),a=da(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(it.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(it.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(it.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Zc={found:!1,width:512,height:512};function eu(e,t){!Rs&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Lr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=qs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ur[t]&&ur[t][e]){var s=ur[t][e];return r(Rr(s))}eu(e,t),r(E(E({},Zc),{},{icon:I.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var _i=function(){},jr=I.measurePerformance&&un&&un.mark&&un.measure?un:{mark:_i,measure:_i},Nt='FA "6.2.1"',tu=function(t){return jr.mark("".concat(Nt," ").concat(t," begins")),function(){return Js(t)}},Js=function(t){jr.mark("".concat(Nt," ").concat(t," ends")),jr.measure("".concat(Nt," ").concat(t),"".concat(Nt," ").concat(t," begins"),"".concat(Nt," ").concat(t," ends"))},ka={begin:tu,end:Js},Cn=function(){};function ki(e){var t=e.getAttribute?e.getAttribute(ft):null;return typeof t=="string"}function nu(e){var t=e.getAttribute?e.getAttribute(pa):null,n=e.getAttribute?e.getAttribute(ha):null;return t&&n}function ru(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function au(){if(I.autoReplaceSvg===!0)return Pn.replace;var e=Pn[I.autoReplaceSvg];return e||Pn.replace}function iu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function su(e){return X.createElement(e)}function Gs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?iu:su:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(Gs(s,{ceFn:r}))}),a}function ou(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Gs(a),n)}),n.getAttribute(ft)===null&&I.keepOriginalSource){var r=X.createComment(ou(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(I.replacementClass))return Pn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===I.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return Zt(o)}).join(`
`);n.setAttribute(ft,""),n.innerHTML=s}};function Ai(e){e()}function Qs(e,t){var n=typeof t=="function"?t:Cn;if(e.length===0)n();else{var r=Ai;I.mutateApproach===uc&&(r=Ve.requestAnimationFrame||Ai),r(function(){var a=au(),i=ka.begin("mutate");e.map(a),i(),n()})}}var Aa=!1;function Zs(){Aa=!0}function zr(){Aa=!1}var Rn=null;function Ei(e){if(!!pi&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?Cn:t,r=e.nodeCallback,a=r===void 0?Cn:r,i=e.pseudoElementsCallback,s=i===void 0?Cn:i,o=e.observeMutationsRoot,l=o===void 0?X:o;Rn=new pi(function(c){if(!Aa){var d=Je();Ct(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ki(m.addedNodes[0])&&(I.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&ki(m.target)&&~bc.indexOf(m.attributeName))if(m.attributeName==="class"&&nu(m.target)){var g=Qn(ga(m.target)),k=g.prefix,F=g.iconName;m.target.setAttribute(pa,k||d),F&&m.target.setAttribute(ha,F)}else ru(m.target)&&a(m.target)})}}),Ue&&Rn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lu(){!Rn||Rn.disconnect()}function fu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function cu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Qn(ga(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Bc(a.prefix,e.innerText)||xa(a.prefix,Tr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function uu(e){var t=Ct(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Jt()):(t["aria-hidden"]="true",t.focusable="false")),t}function du(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=cu(e),r=n.iconName,a=n.prefix,i=n.rest,s=uu(e),o=Mr("parseNodeAttributes",{},e),l=t.styleParser?fu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var mu=ke.styles;function eo(e){var t=I.autoReplaceSvg==="nest"?Oi(e,{styleParser:!1}):Oi(e);return~t.extra.classes.indexOf(Ls)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}var Ge=new Set;va.map(function(e){Ge.add("fa-".concat(e))});Object.keys(Kt[K]).map(Ge.add.bind(Ge));Object.keys(Kt[G]).map(Ge.add.bind(Ge));Ge=Gt(Ge);function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ue)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(hi,"-").concat(m))},a=function(m){return n.remove("".concat(hi,"-").concat(m))},i=I.autoFetchSvg?Ge:va.map(function(d){return"fa-".concat(d)}).concat(Object.keys(mu));i.includes("fa")||i.push("fa");var s=[".".concat(Ls,":not([").concat(ft,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ft,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ct(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=o.reduce(function(d,m){try{var g=eo(m);g&&d.push(g)}catch(k){Rs||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(g){Qs(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),m(g)})})}function pu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eo(e).then(function(n){n&&Qs([n],t)})}function hu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Fr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var vu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,m=n.title,g=m===void 0?null:m,k=n.titleId,F=k===void 0?null:k,N=n.classes,$=N===void 0?[]:N,w=n.attributes,C=w===void 0?{}:w,O=n.styles,j=O===void 0?{}:O;if(!!t){var B=t.prefix,le=t.iconName,ne=t.icon;return Zn(E({type:"icon"},t),function(){return ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(g?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(F||Jt()):(C["aria-hidden"]="true",C.focusable="false")),_a({icons:{main:Rr(ne),mask:l?Rr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:le,transform:E(E({},Ne),a),symbol:s,title:g,maskId:d,titleId:F,extra:{attributes:C,styles:j,classes:$}})})}},gu={mixout:function(){return{icon:hu(vu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ci,n.nodeCallback=pu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,s=i===void 0?function(){}:i;return Ci(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(k,F){Promise.all([Lr(a,o),d.iconName?Lr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var $=da(N,2),w=$[0],C=$[1];k([n,_a({icons:{main:w,mask:C},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:g,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Jn(o);l.length>0&&(a.style=l);var c;return ba(s)&&(c=$e("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},bu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Zn({type:"layer"},function(){ct("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(Gt(i)).join(" ")},children:s}]})}}}},yu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Zn({type:"counter",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),Qc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(Gt(o))}})})}}}},xu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,k=g===void 0?{}:g;return Zn({type:"text",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),wi({content:n,transform:E(E({},Ne),i),title:o,extra:{attributes:m,styles:k,classes:["".concat(I.cssPrefix,"-layers-text")].concat(Gt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Ns){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,wi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},wu=new RegExp('"',"ug"),Pi=[1105920,1112319];function _u(e){var t=e.replace(wu,""),n=Rc(t,0),r=n>=Pi[0]&&n<=Pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Tr(a?t[0]:t),isSecondary:r||a}}function Ii(e,t){var n="".concat(cc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ct(e.children),s=i.filter(function(ne){return ne.getAttribute(Sr)===t})[0],o=Ve.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(hc),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?G:K,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xt[g][l[2].toLowerCase()]:vc[g][c],F=_u(m),N=F.value,$=F.isSecondary,w=l[0].startsWith("FontAwesome"),C=xa(k,N),O=C;if(w){var j=Uc(N);j.iconName&&j.prefix&&(C=j.iconName,k=j.prefix)}if(C&&!$&&(!s||s.getAttribute(pa)!==k||s.getAttribute(ha)!==O)){e.setAttribute(n,O),s&&e.removeChild(s);var B=du(),le=B.extra;le.attributes[Sr]=t,Lr(C,k).then(function(ne){var ye=_a(E(E({},B),{},{icons:{main:ne,mask:wa()},prefix:k,iconName:O,extra:le,watchable:!0})),he=X.createElement("svg");t==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=ye.map(function(Fe){return Zt(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ku(e){return Promise.all([Ii(e,"::before"),Ii(e,"::after")])}function Au(e){return e.parentNode!==document.head&&!~dc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Sr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Si(e){if(!!Ue)return new Promise(function(t,n){var r=Ct(e.querySelectorAll("*")).filter(Au).map(ku),a=ka.begin("searchPseudoElements");Zs(),Promise.all(r).then(function(){a(),zr(),t()}).catch(function(){a(),zr(),n()})})}var Eu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Si,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;I.searchPseudoElements&&Si(a)}}},Ti=!1,Ou={mixout:function(){return{dom:{unwatch:function(){Zs(),Ti=!0}}}},hooks:function(){return{bootstrap:function(){Ei(Mr("mutationObserverCallbacks",{}))},noAuto:function(){lu()},watch:function(n){var r=n.observeMutationsRoot;Ti?zr():Ei(Mr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ni=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Cu={mixout:function(){return{parse:{transform:function(n){return Ni(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ni(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:m,path:g};return{tag:"g",attributes:E({},k.outer),children:[{tag:"g",attributes:E({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),k.path)}]}]}}}},dr={x:0,y:0,width:"100%",height:"100%"};function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Pu(e){return e.tag==="g"?e.children:[e]}var Iu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qn(a.split(" ").map(function(s){return s.trim()})):wa();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,m=s.width,g=s.icon,k=Cc({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:E(E({},dr),{},{fill:"white"})},N=d.children?{children:d.children.map(Mi)}:{},$={tag:"g",attributes:E({},k.inner),children:[Mi(E({tag:d.tag,attributes:E(E({},d.attributes),k.path)},N))]},w={tag:"g",attributes:E({},k.outer),children:[$]},C="mask-".concat(o||Jt()),O="clip-".concat(o||Jt()),j={tag:"mask",attributes:E(E({},dr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,w]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Pu(g)},j]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(C,")")},dr)}),{children:r,attributes:a}}}},Su={provides:function(t){var n=!1;Ve.matchMedia&&(n=Ve.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=E(E({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Tu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Nu=[Sc,gu,bu,yu,xu,Eu,Ou,Cu,Iu,Su,Tu];Yc(Nu,{mixoutsTo:pe});pe.noAuto;var to=pe.config;pe.library;pe.dom;var no=pe.parse;pe.findIconDefinition;pe.toHtml;var Mu=pe.icon;pe.layer;var Fu=pe.text;pe.counter;var Ru=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lu(e,t){return t={exports:{}},e(t,t.exports),t.exports}var ju=Lu(function(e){(function(t){var n=function(w,C,O){if(!c(C)||m(C)||g(C)||k(C)||l(C))return C;var j,B=0,le=0;if(d(C))for(j=[],le=C.length;B<le;B++)j.push(n(w,C[B],O));else{j={};for(var ne in C)Object.prototype.hasOwnProperty.call(C,ne)&&(j[w(ne,O)]=n(w,C[ne],O))}return j},r=function(w,C){C=C||{};var O=C.separator||"_",j=C.split||/(?=[A-Z])/;return w.split(j).join(O)},a=function(w){return F(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(C,O){return O?O.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var C=a(w);return C.substr(0,1).toUpperCase()+C.substr(1)},s=function(w,C){return r(w,C).toLowerCase()},o=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return o.call(w)=="[object Array]"},m=function(w){return o.call(w)=="[object Date]"},g=function(w){return o.call(w)=="[object RegExp]"},k=function(w){return o.call(w)=="[object Boolean]"},F=function(w){return w=w-0,w===w},N=function(w,C){var O=C&&"process"in C?C.process:C;return typeof O!="function"?w:function(j,B){return O(j,w,B)}},$={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(w,C){return n(N(a,C),w)},decamelizeKeys:function(w,C){return n(N(s,C),w,C)},pascalizeKeys:function(w,C){return n(N(i,C),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Ru)}),zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Du=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Dr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function $u(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ju.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Bu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ea(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Bu(d);break;case"style":l.style=$u(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Du(n,["class","style"]);return Es(e.tag,Ln({},t,{class:a.class,style:Ln({},a.style,s)},a.attrs,o),r)}var ro=!1;try{ro=!0}catch{}function Uu(){if(!ro&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mt({},e,t):{}}function Hu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Mt(t,"fa-"+e.size,e.size!==null),Mt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Mt(t,"fa-pull-"+e.pull,e.pull!==null),Mt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(e){if(e===null)return null;if((typeof e>"u"?"undefined":zu(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}aa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ge(function(){return Fi(t.icon)}),i=ge(function(){return Dt("classes",Hu(t))}),s=ge(function(){return Dt("transform",typeof t.transform=="string"?no.transform(t.transform):t.transform)}),o=ge(function(){return Dt("mask",Fi(t.mask))}),l=ge(function(){return Mu(a.value,Ln({},i.value,s.value,o.value,{symbol:t.symbol,title:t.title}))});_n(l,function(d){if(!d)return Uu("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=ge(function(){return l.value?Ea(l.value.abstract[0],{},r):null});return function(){return c.value}}});aa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=to.familyPrefix,i=ge(function(){return[a+"-layers"].concat(Dr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return Es("div",{class:i.value},r.default?r.default():[])}}});aa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=to.familyPrefix,i=ge(function(){return Dt("classes",[].concat(Dr(t.counter?[a+"-layers-counter"]:[]),Dr(t.position?[a+"-layers-"+t.position]:[])))}),s=ge(function(){return Dt("transform",typeof t.transform=="string"?no.transform(t.transform):t.transform)}),o=ge(function(){var c=Fu(t.value.toString(),Ln({},s.value,i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ge(function(){return Ea(o.value,{},r)});return function(){return l.value}}});jf(ec).mount("#app");
