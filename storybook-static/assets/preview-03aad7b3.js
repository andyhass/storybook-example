import{c as G}from"./_commonjsHelpers-de833af9.js";import{c as fr}from"./_commonjs-dynamic-modules-302442b1.js";import{r as hr,a as mr,b as vr,c as se,l as Oe,d as Le,e as yr,f as Q,g as gr,h as de,i as Z,j as br,k as wr,m as _r,n as Rr,o as Er}from"./index-86005177.js";import{r as kr}from"./index-da07a199.js";var pe={},N={},ee={exports:{}};ee.exports;var Ue;function Sr(){return Ue||(Ue=1,function(S){const g=(u,a)=>(...R)=>`\x1B[${u(...R)+a}m`,i=(u,a)=>(...R)=>{const y=u(...R);return`\x1B[${38+a};5;${y}m`},m=(u,a)=>(...R)=>{const y=u(...R);return`\x1B[${38+a};2;${y[0]};${y[1]};${y[2]}m`},h=u=>u,s=(u,a,R)=>[u,a,R],v=(u,a,R)=>{Object.defineProperty(u,a,{get:()=>{const y=R();return Object.defineProperty(u,a,{value:y,enumerable:!0,configurable:!0}),y},enumerable:!0,configurable:!0})};let E;const k=(u,a,R,y)=>{E===void 0&&(E=kr());const P=y?10:0,T={};for(const[B,j]of Object.entries(E)){const O=B==="ansi16"?"ansi":B;B===a?T[O]=u(R,P):typeof j=="object"&&(T[O]=u(j[a],P))}return T};function l(){const u=new Map,a={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};a.color.gray=a.color.blackBright,a.bgColor.bgGray=a.bgColor.bgBlackBright,a.color.grey=a.color.blackBright,a.bgColor.bgGrey=a.bgColor.bgBlackBright;for(const[R,y]of Object.entries(a)){for(const[P,T]of Object.entries(y))a[P]={open:`\x1B[${T[0]}m`,close:`\x1B[${T[1]}m`},y[P]=a[P],u.set(T[0],T[1]);Object.defineProperty(a,R,{value:y,enumerable:!1})}return Object.defineProperty(a,"codes",{value:u,enumerable:!1}),a.color.close="\x1B[39m",a.bgColor.close="\x1B[49m",v(a.color,"ansi",()=>k(g,"ansi16",h,!1)),v(a.color,"ansi256",()=>k(i,"ansi256",h,!1)),v(a.color,"ansi16m",()=>k(m,"rgb",s,!1)),v(a.bgColor,"ansi",()=>k(g,"ansi16",h,!0)),v(a.bgColor,"ansi256",()=>k(i,"ansi256",h,!0)),v(a.bgColor,"ansi16m",()=>k(m,"rgb",s,!0)),a}Object.defineProperty(S,"exports",{enumerable:!0,get:l})}(ee)),ee.exports}var ae,Ie;function Pr(){return Ie||(Ie=1,ae={stdout:!1,stderr:!1}),ae}var ie,Fe;function xr(){return Fe||(Fe=1,ie={stringReplaceAll:(i,m,h)=>{let s=i.indexOf(m);if(s===-1)return i;const v=m.length;let E=0,k="";do k+=i.substr(E,s-E)+m+h,E=s+v,s=i.indexOf(m,E);while(s!==-1);return k+=i.substr(E),k},stringEncaseCRLFWithFirstIndex:(i,m,h,s)=>{let v=0,E="";do{const k=i[s-1]==="\r";E+=i.substr(v,(k?s-1:s)-v)+m+(k?`\r
`:`
`)+h,v=s+1,s=i.indexOf(`
`,v)}while(s!==-1);return E+=i.substr(v),E}}),ie}var le,He;function Tr(){if(He)return le;He=1;const S=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,g=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,i=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,m=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,h=new Map([["n",`
`],["r","\r"],["t","	"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e","\x1B"],["a","\x07"]]);function s(l){const u=l[0]==="u",a=l[1]==="{";return u&&!a&&l.length===5||l[0]==="x"&&l.length===3?String.fromCharCode(parseInt(l.slice(1),16)):u&&a?String.fromCodePoint(parseInt(l.slice(2,-1),16)):h.get(l)||l}function v(l,u){const a=[],R=u.trim().split(/\s*,\s*/g);let y;for(const P of R){const T=Number(P);if(!Number.isNaN(T))a.push(T);else if(y=P.match(i))a.push(y[2].replace(m,(B,j,O)=>j?s(j):O));else throw new Error(`Invalid Chalk template style argument: ${P} (in style '${l}')`)}return a}function E(l){g.lastIndex=0;const u=[];let a;for(;(a=g.exec(l))!==null;){const R=a[1];if(a[2]){const y=v(R,a[2]);u.push([R].concat(y))}else u.push([R])}return u}function k(l,u){const a={};for(const y of u)for(const P of y.styles)a[P[0]]=y.inverse?null:P.slice(1);let R=l;for(const[y,P]of Object.entries(a))if(Array.isArray(P)){if(!(y in R))throw new Error(`Unknown Chalk style: ${y}`);R=P.length>0?R[y](...P):R[y]}return R}return le=(l,u)=>{const a=[],R=[];let y=[];if(u.replace(S,(P,T,B,j,O,I)=>{if(T)y.push(s(T));else if(j){const b=y.join("");y=[],R.push(a.length===0?b:k(l,a)(b)),a.push({inverse:B,styles:E(j)})}else if(O){if(a.length===0)throw new Error("Found extraneous } in Chalk template literal");R.push(k(l,a)(y.join(""))),y=[],a.pop()}else y.push(I)}),R.push(y.join("")),a.length>0){const P=`Chalk template literal is missing ${a.length} closing bracket${a.length===1?"":"s"} (\`}\`)`;throw new Error(P)}return R.join("")},le}var ce,Ge;function $r(){if(Ge)return ce;Ge=1;const S=Sr(),{stdout:g,stderr:i}=Pr(),{stringReplaceAll:m,stringEncaseCRLFWithFirstIndex:h}=xr(),{isArray:s}=Array,v=["ansi","ansi","ansi256","ansi16m"],E=Object.create(null),k=(b,p={})=>{if(p.level&&!(Number.isInteger(p.level)&&p.level>=0&&p.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const f=g?g.level:0;b.level=p.level===void 0?f:p.level};class l{constructor(p){return u(p)}}const u=b=>{const p={};return k(p,b),p.template=(...f)=>O(p.template,...f),Object.setPrototypeOf(p,a.prototype),Object.setPrototypeOf(p.template,p),p.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},p.template.Instance=l,p.template};function a(b){return u(b)}for(const[b,p]of Object.entries(S))E[b]={get(){const f=T(this,P(p.open,p.close,this._styler),this._isEmpty);return Object.defineProperty(this,b,{value:f}),f}};E.visible={get(){const b=T(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:b}),b}};const R=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(const b of R)E[b]={get(){const{level:p}=this;return function(...f){const x=P(S.color[v[p]][b](...f),S.color.close,this._styler);return T(this,x,this._isEmpty)}}};for(const b of R){const p="bg"+b[0].toUpperCase()+b.slice(1);E[p]={get(){const{level:f}=this;return function(...x){const $=P(S.bgColor[v[f]][b](...x),S.bgColor.close,this._styler);return T(this,$,this._isEmpty)}}}}const y=Object.defineProperties(()=>{},{...E,level:{enumerable:!0,get(){return this._generator.level},set(b){this._generator.level=b}}}),P=(b,p,f)=>{let x,$;return f===void 0?(x=b,$=p):(x=f.openAll+b,$=p+f.closeAll),{open:b,close:p,openAll:x,closeAll:$,parent:f}},T=(b,p,f)=>{const x=(...$)=>s($[0])&&s($[0].raw)?B(x,O(x,...$)):B(x,$.length===1?""+$[0]:$.join(" "));return Object.setPrototypeOf(x,y),x._generator=b,x._styler=p,x._isEmpty=f,x},B=(b,p)=>{if(b.level<=0||!p)return b._isEmpty?"":p;let f=b._styler;if(f===void 0)return p;const{openAll:x,closeAll:$}=f;if(p.indexOf("\x1B")!==-1)for(;f!==void 0;)p=m(p,f.close,f.open),f=f.parent;const F=p.indexOf(`
`);return F!==-1&&(p=h(p,$,x,F)),x+p+$};let j;const O=(b,...p)=>{const[f]=p;if(!s(f)||!s(f.raw))return p.join(" ");const x=p.slice(1),$=[f.raw[0]];for(let F=1;F<f.length;F++)$.push(String(x[F-1]).replace(/[{}\\]/g,"\\$&"),String(f.raw[F]));return j===void 0&&(j=Tr()),j(b,$.join(""))};Object.defineProperties(a.prototype,E);const I=a();return I.supportsColor=g,I.stderr=a({level:i?i.level:0}),I.stderr.supportsColor=i,ce=I,ce}var ue,qe;function Cr(){if(qe)return ue;qe=1;var S=Object.create,g=Object.defineProperty,i=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,h=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,v=(e,t)=>{for(var r in t)g(e,r,{get:t[r],enumerable:!0})},E=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of m(t))!s.call(e,o)&&o!==r&&g(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},k=(e,t,r)=>(r=e!=null?S(h(e)):{},E(t||!e||!e.__esModule?g(r,"default",{value:e,enumerable:!0}):r,e)),l=e=>E(g({},"__esModule",{value:!0}),e),u={};v(u,{setupServer:()=>pr}),ue=l(u);var a=hr(),R=k($r()),y=Z,P=Le,T=Z,B=mr(),j=Z,O="[MSW]";function I(e,...t){const r=(0,j.format)(e,...t);return`${O} ${r}`}function b(e,...t){console.warn(I(e,...t))}function p(e,...t){console.error(I(e,...t))}var f={formatMessage:I,warn:b,error:p};function x(e,t){const r=e.emit;r._isPiped||(e.emit=function(n,...o){return t.emit(n,...o),r.call(this,n,...o)},e.emit._isPiped=!0)}function $(e){const t=[...e];return Object.freeze(t),t}var F=class{constructor(...e){this.validateHandlers(...e),this.initialHandlers=$(e),this.currentHandlers=[...e],this.emitter=new B.Emitter,this.publicEmitter=new B.Emitter,x(this.emitter,this.publicEmitter),this.events=this.createLifeCycleEvents()}validateHandlers(...e){for(const t of e)(0,T.invariant)(!Array.isArray(t),f.formatMessage('Failed to construct "%s" given an Array of request handlers. Make sure you spread the request handlers when calling the respective setup function.'),this.constructor.name)}dispose(){this.emitter.removeAllListeners(),this.publicEmitter.removeAllListeners()}use(...e){this.currentHandlers.unshift(...e)}restoreHandlers(){this.currentHandlers.forEach(e=>{e.markAsSkipped(!1)})}resetHandlers(...e){this.currentHandlers=e.length>0?[...e]:[...this.initialHandlers]}listHandlers(){return $(this.currentHandlers)}createLifeCycleEvents(){return{on:(...e)=>this.publicEmitter.on(...e),removeListener:(...e)=>this.publicEmitter.removeListener(...e),removeAllListeners:(...e)=>this.publicEmitter.removeAllListeners(...e)}}};function fe(e){return e!=null&&typeof e=="object"&&!Array.isArray(e)}function D(e,t){return Object.entries(t).reduce((r,[n,o])=>{const c=r[n];return Array.isArray(c)&&Array.isArray(o)?(r[n]=c.concat(o),r):fe(c)&&fe(o)?(r[n]=D(c,o),r):(r[n]=o,r)},Object.assign({},e))}var We=k(se),he=Oe,ze=Le,Qe=yr,Xe=Q,Je=k(se);function me(){return Je.parse(document.cookie)}function Ve(e){if(typeof document>"u"||typeof location>"u")return{};switch(e.credentials){case"same-origin":return location.origin===e.url.origin?me():{};case"include":return me();default:return{}}}function H(e){try{return JSON.parse(e)}catch{return}}var Ye=Q;function Ke(e){var t,r;const n=(0,Ye.stringToHeaders)(e),o=n.get("content-type")||"text/plain",c=n.get("content-disposition");if(!c)throw new Error('"Content-Disposition" header is required.');const d=c.split(";").reduce((A,M)=>{const[L,...W]=M.trim().split("=");return A[L]=W.join("="),A},{}),w=(t=d.name)==null?void 0:t.slice(1,-1),_=(r=d.filename)==null?void 0:r.slice(1,-1);return{name:w,filename:_,contentType:o}}function Ze(e,t){const r=t==null?void 0:t.get("content-type");if(!r)return;const[,...n]=r.split(/; */),o=n.filter(_=>_.startsWith("boundary=")).map(_=>_.replace(/^boundary=/,""))[0];if(!o)return;const c=new RegExp(`--+${o}`),d=e.split(c).filter(_=>_.startsWith(`\r
`)&&_.endsWith(`\r
`)).map(_=>_.trimStart().replace(/\r\n$/,""));if(!d.length)return;const w={};try{for(const _ of d){const[A,...M]=_.split(`\r
\r
`),L=M.join(`\r
\r
`),{contentType:W,filename:z,name:U}=Ke(A),V=z===void 0?L:new File([L],z,{type:W}),q=w[U];q===void 0?w[U]=V:Array.isArray(q)?w[U]=[...q,V]:w[U]=[q,V]}return w}catch{return}}function ve(e,t){var r;if(!e)return e;const n=((r=t==null?void 0:t.get("content-type"))==null?void 0:r.toLowerCase())||"";return n.startsWith("multipart/form-data")&&typeof e!="object"?Ze(e.toString(),t)||e:n.includes("json")&&typeof e!="object"&&H(e.toString())||e}function te(e,t){return e.toLowerCase()===t.toLowerCase()}var re=class extends ze.IsomorphicRequest{constructor(e,t={}){super(e,t),t.id&&(this.id=t.id),this.cache=t.cache||"default",this.destination=t.destination||"",this.integrity=t.integrity||"",this.keepalive=t.keepalive||!1,this.mode=t.mode||"cors",this.priority=t.priority||"auto",this.redirect=t.redirect||"follow",this.referrer=t.referrer||"",this.referrerPolicy=t.referrerPolicy||"no-referrer",this.cookies=t.cookies||this.getCookies()}get body(){const e=(0,Qe.decodeBuffer)(this._body),t=ve(e,this.headers);if(!(te(this.method,"GET")&&t===""))return t}passthrough(){return{status:101,statusText:"Continue",headers:new Xe.Headers,body:null,passthrough:!0,once:!1}}getCookies(){var e;const t=this.headers.get("cookie"),r=t?We.parse(t):{};he.store.hydrate();const n=Array.from((e=he.store.get({...this,url:this.url.href}))==null?void 0:e.entries()).reduce((d,[w,{value:_}])=>Object.assign(d,{[w.trim()]:_}),{}),c={...Ve(this),...n};for(const[d,w]of Object.entries(c))this.headers.append("cookie",`${d}=${w}`);return{...c,...r}}},et=br,tt=async(e,t,r)=>{const n=t.filter(c=>c.test(e,r));if(n.length===0)return{handler:void 0,response:void 0};const o=await n.reduce(async(c,d)=>{const w=await c;if(w!=null&&w.response)return c;const _=await d.run(e,r);return _===null||_.handler.shouldSkip?null:_.response?(_.response.once&&d.markAsSkipped(!0),_):{request:_.request,handler:_.handler,response:void 0,parsedResult:_.parsedResult}},Promise.resolve(null));return o?{handler:o.handler,publicRequest:o.request,parsedRequest:o.parsedResult,response:o.response}:{handler:void 0,response:void 0}},ye=k(gr()),rt=wr,X=e=>e.referrer.startsWith(e.url.origin)?e.url.pathname:new URL(e.url.pathname,`${e.url.protocol}//${e.url.host}`).href;function ge(e){var t;const r=e.definitions.find(n=>n.kind==="OperationDefinition");return{operationType:r==null?void 0:r.operation,operationName:(t=r==null?void 0:r.name)==null?void 0:t.value}}function nt(e){try{const t=(0,rt.parse)(e);return ge(t)}catch(t){return t}}function ot(e,t,r){const n={variables:e};for(const[o,c]of Object.entries(t)){if(!(o in r))throw new Error(`Given files do not have a key '${o}' .`);for(const d of c){const[w,..._]=d.split(".").reverse(),A=_.reverse();let M=n;for(const L of A){if(!(L in M))throw new Error(`Property '${A}' is not in operations.`);M=M[L]}M[w]=r[o]}}return n.variables}function st(e){var t,r;switch(e.method){case"GET":{const n=e.url.searchParams.get("query"),o=e.url.searchParams.get("variables")||"";return{query:n,variables:H(o)}}case"POST":{if((t=e.body)!=null&&t.query){const{query:n,variables:o}=e.body;return{query:n,variables:o}}if((r=e.body)!=null&&r.operations){const{operations:n,map:o,...c}=e.body,d=H(n)||{};if(!d.query)return null;const w=H(o||"")||{},_=d.variables?ot(d.variables,w,c):{};return{query:d.query,variables:_}}}default:return null}}function be(e){const t=st(e);if(!t||!t.query)return;const{query:r,variables:n}=t,o=nt(r);if(o instanceof Error){const c=X(e);throw new Error(f.formatMessage(`Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.

%s`,e.method,c,o.message))}return{operationType:o.operationType,operationName:o.operationName,variables:n}}var at={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"},it=(e,t)=>r=>(r.status=e,r.statusText=t||at[String(e)],r),lt=Q;function ct(...e){return t=>{const[r,n]=e;return typeof r=="string"?t.headers.append(r,n):(0,lt.objectToHeaders)(r).forEach((c,d)=>{t.headers.append(d,c)}),t}}var ut=k(se),we=(e,t,r)=>n=>{const o=ut.serialize(e,t,r);return n.headers.append("Set-Cookie",o),typeof document<"u"&&(document.cookie=o),n},dt=e=>t=>(t.body=e,t),J=e=>t=>(t.headers.set("Content-Type","application/json"),t.body=JSON.stringify(e),t),pt=e=>t=>{const r=H(t.body)||{},n=D(r,{data:e});return J(n)(t)},ft=e=>t=>{const r=H(t.body)||{},n=D(r,{extensions:e});return J(n)(t)},ht=de,ne=2147483647,_e=100,mt=400,vt=5,Re=()=>(0,ht.isNodeProcess)()?vt:Math.floor(Math.random()*(mt-_e)+_e),yt=e=>t=>{let r;if(typeof e=="string")switch(e){case"infinite":{r=ne;break}case"real":{r=Re();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`)}else if(typeof e>"u")r=Re();else{if(e>ne)throw new Error(`Failed to delay a response: provided delay duration (${e}) exceeds the maximum allowed duration for "setTimeout" (${ne}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);r=e}return t.delay=r,t},gt=e=>t=>{if(e==null)return t;const r=H(t.body)||{},n=D(r,{errors:e});return J(n)(t)},bt=de,wt=Q,Ee=(0,bt.isNodeProcess)()?(e,t)=>Promise.resolve().then(()=>k(vr())).then(({default:r})=>r(e,t)):globalThis.fetch,ke=e=>{const t=new wt.Headers(e.headers);return t.set("x-msw-bypass","true"),{...e,headers:t.all()}},_t=e=>{const{body:t,method:r}=e,n={...e,body:void 0};return["GET","HEAD"].includes(r)||(typeof t=="object"||typeof t=="number"||typeof t=="boolean"?n.body=JSON.stringify(t):n.body=t),n},Rt=(e,t={})=>{if(typeof e=="string")return Ee(e,ke(t));const r=_t(e),n=ke(r);return Ee(e.url.href,n)},Et=e=>t=>(t.headers.set("Content-Type","text/plain"),t.body=e,t),kt=e=>t=>(t.headers.set("Content-Type","text/xml"),t.body=e,t);function Se(e){return e<300?"#69AB32":e<400?"#F0BB4B":"#E95F5D"}function Pe(){const e=new Date;return[e.getHours(),e.getMinutes(),e.getSeconds()].map(String).map(t=>t.slice(0,2)).map(t=>t.padStart(2,"0")).join(":")}function xe(e){return{...e,body:e.body,headers:e.headers.all()}}var St=Q;function Te(e){const t=(0,St.objectToHeaders)(e.headers),r=ve(e.body,t);return{...e,body:r}}var Pt=_r,xt=Rr,Tt=/[\?|#].*$/g;function $t(e){return new URL(`/${e}`,"http://localhost").searchParams}function $e(e){return e.replace(Tt,"")}function Ct(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}function At(e,t){if(Ct(e)||e.startsWith("*"))return e;const r=t||typeof document<"u"&&document.baseURI;return r?decodeURI(new URL(encodeURI(e),r).href):e}function jt(e,t){if(e instanceof RegExp)return e;const r=At(e,t);return $e(r)}function Bt(e){return e.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(t,r,n)=>{const o="(.*)";return r?r.startsWith(":")?`${r}${n}`:`${r}${o}`:o}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function Ce(e,t,r){const n=jt(t,r),o=typeof n=="string"?Bt(n):n,c=(0,xt.getCleanUrl)(e),d=(0,Pt.match)(o,{decode:decodeURIComponent})(c),w=d&&d.params||{};return{matches:d!==!1,params:w}}var Mt=Q;function Nt(...e){return(...t)=>e.reduceRight((r,n)=>r instanceof Promise?Promise.resolve(r).then(n):n(r),t[0])}var Ot=class extends Error{constructor(e){super(e),this.name="NetworkError"}},Lt={status:200,statusText:"OK",body:null,delay:0,once:!1,passthrough:!1},Ut=[];function Ae(e,t=Ut){return async(...r)=>{const n=Object.assign({},Lt,{headers:new Mt.Headers({"x-powered-by":"msw"})},e),o=[...t,...r].filter(Boolean);return o.length>0?Nt(...o)(n):n}}var It=Object.assign(Ae(),{once:Ae({once:!0}),networkError(e){throw new Ot(e)}}),Ft=/[\/\\]msw[\/\\]src[\/\\](.+)/,Ht=/(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;function Gt(e){const t=e.stack;if(!t)return;const n=t.split(`
`).slice(1).find(c=>!(Ft.test(c)||Ht.test(c)));return n?n.replace(/\s*at [^()]*\(([^)]+)\)/,"$1").replace(/^@/,""):void 0}function qt(e){return e?typeof e[Symbol.iterator]=="function":!1}var oe={status:it,set:ct,delay:yt,fetch:Rt},je=class{constructor(e){this.shouldSkip=!1,this.ctx=e.ctx||oe,this.resolver=e.resolver;const t=Gt(new Error);this.info={...e.info,callFrame:t}}parse(e,t){return null}test(e,t){return this.predicate(e,this.parse(e,t),t)}getPublicRequest(e,t){return e}markAsSkipped(e=!0){this.shouldSkip=e}async run(e,t){if(this.shouldSkip)return null;const r=this.parse(e,t);if(!this.predicate(e,r,t))return null;const o=this.getPublicRequest(e,r),d=await this.wrapResolver(this.resolver)(o,It,this.ctx);return this.createExecutionResult(r,o,d)}wrapResolver(e){return async(t,r,n)=>{const o=this.resolverGenerator||await e(t,r,n);if(qt(o)){const{value:c,done:d}=o[Symbol.iterator]().next(),w=await c;return!w&&d?this.resolverGeneratorResult:(this.resolverGenerator||(this.resolverGenerator=o),this.resolverGeneratorResult=w,w)}return o}}createExecutionResult(e,t,r){return{handler:this,parsedResult:e||null,request:t,response:r||null}}},Dt={...oe,cookie:we,body:dt,text:Et,json:J,xml:kt},Wt=class extends re{constructor(e,t){super(e.url,{...e,body:e._body}),this.params=t,this.id=e.id}},zt=class extends je{constructor(e,t,r){super({info:{header:`${e} ${t}`,path:t,method:e},ctx:Dt,resolver:r}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:e,path:t}=this.info;if(t instanceof RegExp||$e(t)===t)return;$t(t).forEach((o,c)=>{}),f.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${t}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`)}parse(e,t){return Ce(e.url,this.info.path,t==null?void 0:t.baseUrl)}getPublicRequest(e,t){return new Wt(e,t.params||{})}predicate(e,t){return(this.info.method instanceof RegExp?this.info.method.test(e.method):te(this.info.method,e.method))&&t.matches}log(e,t){const r=X(e),n=xe(e),o=Te(t),c=Se(t.status);console.groupCollapsed(f.formatMessage("%s %s %s (%c%s%c)"),Pe(),e.method,r,`color:${c}`,`${t.status} ${t.statusText}`,"color:inherit"),console.log("Request",n),console.log("Handler:",this),console.log("Response",o),console.groupEnd()}},K=Z,Qt=(e,t)=>r=>{Xt(e);const n=H(r.body)||{},o=D(n,{[e]:t});return J(o)(r)};function Xt(e){(0,K.invariant)(e.trim()!=="",f.formatMessage("Failed to set a custom field on a GraphQL response: field name cannot be empty.")),(0,K.invariant)(e!=="data",f.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?',e)),(0,K.invariant)(e!=="errors",f.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?',e)),(0,K.invariant)(e!=="extensions",f.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?',e))}function Be(e,t){try{return e()}catch(r){t==null||t(r)}}var Jt={...oe,data:pt,extensions:ft,errors:gt,cookie:we,field:Qt};function Vt(e){return e==null?!1:typeof e=="object"&&"kind"in e&&"definitions"in e}var Yt=class extends re{constructor(e,t,r){super(e.url,{...e,body:e._body}),this.variables=t,this.operationName=r}},Kt=class extends je{constructor(e,t,r,n){let o=t;if(Vt(t)){const d=ge(t);if(d.operationType!==e)throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${e}", but got "${d.operationType}").`);if(!d.operationName)throw new Error("Failed to create a GraphQL handler: provided a DocumentNode with no operation name.");o=d.operationName}const c=e==="all"?`${e} (origin: ${r.toString()})`:`${e} ${o} (origin: ${r.toString()})`;super({info:{header:c,operationType:e,operationName:o},ctx:Jt,resolver:n}),this.endpoint=r}parse(e){return Be(()=>be(e),t=>console.error(t.message))}getPublicRequest(e,t){var r,n;return new Yt(e,(r=t==null?void 0:t.variables)!=null?r:{},(n=t==null?void 0:t.operationName)!=null?n:"")}predicate(e,t){if(!t)return!1;if(!t.operationName&&this.info.operationType!=="all"){const c=X(e);return f.warn(`Failed to intercept a GraphQL request at "${e.method} ${c}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation()" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `),!1}const r=Ce(e.url,this.endpoint),n=this.info.operationType==="all"||t.operationType===this.info.operationType,o=this.info.operationName instanceof RegExp?this.info.operationName.test(t.operationName||""):t.operationName===this.info.operationName;return r.matches&&n&&o}log(e,t,r){const n=xe(e),o=Te(t),c=Se(t.status),d=r!=null&&r.operationName?`${r==null?void 0:r.operationType} ${r==null?void 0:r.operationName}`:`anonymous ${r==null?void 0:r.operationType}`;console.groupCollapsed(f.formatMessage("%s %s (%c%s%c)"),Pe(),`${d}`,`color:${c}`,`${t.status} ${t.statusText}`,"color:inherit"),console.log("Request:",n),console.log("Handler:",this),console.log("Response:",o),console.groupEnd()}},Zt=3,er=4,Me=.5;function tr(e){return e.reduce((t,r)=>(r instanceof zt&&t.rest.push(r),r instanceof Kt&&t.graphql.push(r),t),{rest:[],graphql:[]})}function rr(){return(e,t)=>{const{path:r,method:n}=t.info;if(r instanceof RegExp||n instanceof RegExp)return 1/0;const c=te(e.method,n)?Me:0,d=X(e);return(0,ye.default)(d,r)-c}}function nr(e){return(t,r)=>{if(typeof e.operationName>"u")return 1/0;const{operationType:n,operationName:o}=r.info;if(typeof o!="string")return 1/0;const d=e.operationType===n?Me:0;return(0,ye.default)(e.operationName,o)-d}}function or(e,t,r){return t.reduce((o,c)=>{const d=r(e,c);return o.concat([[d,c]])},[]).sort(([o],[c])=>o-c).filter(([o])=>o<=Zt).slice(0,er).map(([,o])=>o)}function sr(e){return e.length>1?`Did you mean to request one of the following resources instead?

${e.map(t=>`  • ${t.info.header}`).join(`
`)}`:`Did you mean to request "${e[0].info.header}" instead?`}function ar(e,t,r="warn"){const n=Be(()=>be(e));function o(){const w=tr(t),_=n?w.graphql:w.rest,A=or(e,_,n?nr(n):rr());return A.length>0?sr(A):""}function c(){const w=X(e),_=n?`${n.operationType} ${n.operationName} (${e.method} ${w})`:`${e.method} ${w}`,A=o();return["captured a request without a matching request handler:",`  • ${_}`,A,`If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`].filter(Boolean).join(`

`)}function d(w){const _=c();switch(w){case"error":throw f.error("Error: %s",_),new Error(f.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'));case"warn":{f.warn("Warning: %s",_);break}case"bypass":break;default:throw new Error(f.formatMessage('Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',w))}}if(typeof r=="function"){r(e,{warning:d.bind(null,"warn"),error:d.bind(null,"error")});return}d(r)}var Ne=Oe;function ir(e,t){Ne.store.add({...e,url:e.url.toString()},t),Ne.store.persist()}async function lr(e,t,r,n,o){var c,d,w,_,A,M;if(n.emit("request:start",e),e.headers.get("x-msw-bypass")==="true"){n.emit("request:end",e),(c=o==null?void 0:o.onPassthroughResponse)==null||c.call(o,e);return}const[L,W]=await(0,et.until)(()=>tt(e,t,o==null?void 0:o.resolutionContext));if(L)throw n.emit("unhandledException",L,e),L;const{handler:z,response:U}=W;if(!z){ar(e,t,r.onUnhandledRequest),n.emit("request:unhandled",e),n.emit("request:end",e),(d=o==null?void 0:o.onPassthroughResponse)==null||d.call(o,e);return}if(!U){f.warn(`Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.

  • %s
    %s`,U,z.info.header,z.info.callFrame),n.emit("request:end",e),(w=o==null?void 0:o.onPassthroughResponse)==null||w.call(o,e);return}if(U.passthrough){n.emit("request:end",e),(_=o==null?void 0:o.onPassthroughResponse)==null||_.call(o,e);return}ir(e,U),n.emit("request:match",e);const V=W,q=((A=o==null?void 0:o.transformResponse)==null?void 0:A.call(o,U))||U;return(M=o==null?void 0:o.onMockedResponse)==null||M.call(o,q,V),n.emit("request:end",e),q}var{bold:cr}=R.default,ur={onUnhandledRequest:"warn"},dr=class extends F{constructor(e,...t){super(...t),this.interceptor=new P.BatchInterceptor({name:"setup-server",interceptors:e.map(r=>new r)}),this.resolvedOptions={},this.init()}init(){this.interceptor.on("request",async e=>{const t=new re(e.url,{...e,body:await e.arrayBuffer()}),r=await lr(t,this.currentHandlers,this.resolvedOptions,this.emitter,{transformResponse(n){return{status:n.status,statusText:n.statusText,headers:n.headers.all(),body:n.body,delay:n.delay}}});r&&(r.delay&&await new Promise(n=>{setTimeout(n,r.delay)}),e.respondWith(r))}),this.interceptor.on("response",(e,t)=>{e.id&&(t.headers.get("x-powered-by")==="msw"?this.emitter.emit("response:mocked",t,e.id):this.emitter.emit("response:bypass",t,e.id))})}listen(e={}){this.resolvedOptions=D(ur,e),this.interceptor.apply(),(0,y.invariant)([P.InterceptorReadyState.APPLYING,P.InterceptorReadyState.APPLIED].includes(this.interceptor.readyState),f.formatMessage('Failed to start "setupServer": the interceptor failed to apply. This is likely an issue with the library and you should report it at "%s".'),"https://github.com/mswjs/msw/issues/new/choose")}printHandlers(){this.listHandlers().forEach(t=>{const{header:r,callFrame:n}=t.info,o=t.info.hasOwnProperty("operationType")?"[graphql]":"[rest]";console.log(`${cr(`${o} ${r}`)}
  Declaration: ${n}
`)})}close(){super.dispose(),this.interceptor.dispose()}};function pr(...e){return new dr([a.XMLHttpRequestInterceptor],...e)}return ue}var Ar=G&&G.__awaiter||function(S,g,i,m){function h(s){return s instanceof i?s:new i(function(v){v(s)})}return new(i||(i=Promise))(function(s,v){function E(u){try{l(m.next(u))}catch(a){v(a)}}function k(u){try{l(m.throw(u))}catch(a){v(a)}}function l(u){u.done?s(u.value):h(u.value).then(E,k)}l((m=m.apply(S,g||[])).next())})},jr=G&&G.__generator||function(S,g){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},m,h,s,v;return v={next:E(0),throw:E(1),return:E(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function E(l){return function(u){return k([l,u])}}function k(l){if(m)throw new TypeError("Generator is already executing.");for(;i;)try{if(m=1,h&&(s=l[0]&2?h.return:l[0]?h.throw||((s=h.return)&&s.call(h),0):h.next)&&!(s=s.call(h,l[1])).done)return s;switch(h=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,h=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(s=i.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){i.label=l[1];break}if(l[0]===6&&i.label<s[1]){i.label=s[1],s=l;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(l);break}s[2]&&i.ops.pop(),i.trys.pop();continue}l=g.call(S,i)}catch(u){l=[6,u],h=0}finally{m=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}};Object.defineProperty(N,"__esModule",{value:!0});N.mswLoader=N.mswDecorator=N.getWorker=N.initializeWorker=N.initialize=void 0;var Br=de,Mr=!(0,Br.isNodeProcess)(),Nr=typeof navigator<"u"&&navigator.product==="ReactNative",C,Y;function De(S,g){var i;if(g===void 0&&(g=[]),Nr){var m=Cr().setupServer,h=m.apply(void 0,g);Y=h.listen(S),C=h}else if(Mr){var s=Er.setupWorker,v=s.apply(void 0,g);Y=v.start(S),C=v}else{var E=typeof process<"u"&&((i=process.versions)===null||i===void 0?void 0:i.node),k=E?typeof __webpack_require__=="function"?__non_webpack_require__:fr:void 0,m=k("msw/node").setupServer,h=m.apply(void 0,g);Y=h.listen(S),C=h}return C}N.initialize=De;function Or(S){return console.warn('[MSW] "initializeWorker" is now deprecated, please use "initialize" instead. This method will be removed in future releases.'),De(S)}N.initializeWorker=Or;function Lr(){if(C===void 0)throw new Error('[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?');return C}N.getWorker=Lr;var Ur=function(S,g){var i=g.parameters.msw;if(C&&(C.resetHandlers(),i)){if(Array.isArray(i)&&i.length>0)C.use.apply(C,i);else if("handlers"in i&&i.handlers){var m=Object.values(i.handlers).filter(Boolean).reduce(function(h,s){return h.concat(s)},[]);m.length>0&&C.use.apply(C,m)}}return S()};N.mswDecorator=Ur;var Ir=function(S){return Ar(void 0,void 0,void 0,function(){var g,i;return jr(this,function(m){switch(m.label){case 0:return g=S.parameters.msw,C&&(C.resetHandlers(),g&&(Array.isArray(g)&&g.length>0?C.use.apply(C,g):"handlers"in g&&g.handlers&&(i=Object.values(g.handlers).filter(Boolean).reduce(function(h,s){return h.concat(s)},[]),i.length>0&&C.use.apply(C,i)))),Y?[4,Y]:[3,2];case 1:m.sent(),m.label=2;case 2:return[2,{}]}})})};N.mswLoader=Ir;(function(S){var g=G&&G.__createBinding||(Object.create?function(m,h,s,v){v===void 0&&(v=s),Object.defineProperty(m,v,{enumerable:!0,get:function(){return h[s]}})}:function(m,h,s,v){v===void 0&&(v=s),m[v]=h[s]}),i=G&&G.__exportStar||function(m,h){for(var s in m)s!=="default"&&!Object.prototype.hasOwnProperty.call(h,s)&&g(h,m,s)};Object.defineProperty(S,"__esModule",{value:!0}),i(N,S)})(pe);pe.initialize();const Dr={decorators:[pe.mswDecorator],parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{Dr as default};
//# sourceMappingURL=preview-03aad7b3.js.map
