(()=>{"use strict";var e={999:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,".main{display:flex;justify-content:center;align-items:center;gap:20px}.main .hit{background-color:green}.main .miss{background-color:red}.main .playerContainer{display:flex;flex-direction:column}.main .playerContainer #grid{display:grid;grid-template-columns:repeat(10, 30px);grid-auto-rows:30px}.main .playerContainer #grid div{width:100%;height:100%;border:2px solid #000}.main .playerContainer #grid div.hovered{background-color:#000}.main .playerContainer #grid div.miss{background-color:red}.main .playerContainer #grid div.ship{background-color:blue}.main .playerContainer #grid div.hit{background-color:green}.main .opponentContainer #aiGrid{display:grid;grid-template-columns:repeat(10, 30px);grid-auto-rows:30px}.main .opponentContainer #aiGrid div{width:100%;height:100%;border:2px solid #000}.main .opponentContainer #aiGrid.invisible{display:none}.invisible{display:none}",""]);const s=i},496:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(){const e=Math.ceil(0),t=Math.floor(100);return Math.floor(Math.random()*(t-e+1))+e}function t(e,t,n){let o=!1;return 0===e?t%10<=10-n&&(o=!0):Math.floor(t/10)<=10-n&&(o=!0),o}const o=()=>{const e={};let t=0;return{placeShip:(t,n)=>{if(!n.some((t=>Object.keys(e).includes(String(t)))))for(const o of n)e[o]=t},getBoard:()=>e,getSunkenShips:()=>t,recieveAttack:n=>{const o=e[n];return o?o.getHitPositions().includes(n)?void 0:(o.hit(n),o.isSunk()&&t++,!0):(e[n]=null,!1)},gameOver:()=>5===t}},r=e=>{const t=e;let n=[];return{hit:e=>{n.push(e)},isSunk:()=>n.length==t,getHitPositions:()=>n.slice()}},a=n=>{const a=(()=>{const e=[];return{setVisited:t=>{e.push(t)},getVisited:()=>e.slice()}})(),i=(()=>{const n=function(e){let t,n=e.length;for(;0!=n;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e}(new Array(100).fill().map(((e,t)=>t))),o=function(){const n=new Array(5).fill().map((()=>Math.round(Math.random()))),o=[2,3,3,4,5];let r=o.pop();const a=[];for(const i of n){let n=!0;for(;n;){const s=e();if(t(i,s,r)){const e=[];for(let t=0;t<=r-1;t++)e.push(s+(0===i?t:10*t));e.every((e=>!a.flat().includes(e)))&&(a.push(e),n=!1,r=o.pop())}}}return a}();return{getMoves:()=>n.slice(),getMove:()=>n.pop(),getPositions:()=>o}})();a.gameboard=o(),i.gameboard=o();for(const e of n)a.gameboard.placeShip(r(e.length),e);for(const e of i.getPositions())i.gameboard.placeShip(r(e.length),e);return console.table(i.getPositions()),{playRound:e=>{const t=[];t.push(i.gameboard.recieveAttack(e));const n=i.getMove();return a.gameboard.recieveAttack(n),t.push(n),(a.gameboard.gameOver()||i.gameboard.gameOver())&&t.push(!0),t}}};var i=n(379),s=n.n(i),c=n(795),d=n.n(c),l=n(569),u=n.n(l),p=n(565),m=n.n(p),f=n(216),v=n.n(f),h=n(589),g=n.n(h),b=n(999),y={};y.styleTagTransform=g(),y.setAttributes=m(),y.insert=u().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=v(),s()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;var x=n(496),E={};E.styleTagTransform=g(),E.setAttributes=m(),E.insert=u().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=v(),s()(x.Z,E),x.Z&&x.Z.locals&&x.Z.locals;const{body:k,getPositions:L}=(()=>{const e=[2,3,3,4,5],t=[];let n=e.pop();const o=document.querySelector("body"),r=document.createElement("div"),a=document.createElement("div");a.classList.add("playerContainer");const i=document.createElement("div");i.classList.add("opponentContainer"),o.append(r),r.append(a,i),r.classList.add("main");let s="x";const c=document.createElement("button");c.textContent=s,a.append(c),c.addEventListener("click",(()=>{s="x"===s?"y":"x",c.textContent=s}));const d=document.createElement("button");d.textContent="Submit",d.id="submitButton";const l=document.createElement("div");l.id="grid",a.append(l),a.append(d);for(let o=0;o<100;o++){const r=document.createElement("div");l.append(r),r.dataset.index=o,r.addEventListener("mouseover",u),r.addEventListener("mouseout",(()=>{document.querySelectorAll(".hovered").forEach((e=>e.classList.remove("hovered")))})),r.addEventListener("click",(()=>{if(r.classList.contains("hovered")){const o=document.querySelectorAll(".hovered"),r=[];o.forEach((e=>{e.classList.add("ship"),r.push(e.dataset.index),e.removeEventListener("mouseover",u)})),t.push(r),n=e.pop()}}))}function u(e){const t=e.target.dataset.index;if("x"==s&&t%10<=10-n||"y"==s&&Math.floor(t/10)<=10-n)for(let e=0;e<n;e++){const n=document.querySelector(`[data-index="${parseInt(t)+("x"==s?e:10*e)}"]`);if(n.classList.contains("ship")){document.querySelectorAll(".hovered").forEach((e=>e.classList.remove("hovered")));break}n.classList.add("hovered")}}const p=document.createElement("div");p.id="aiGrid",p.classList.add("invisible"),i.append(p);for(let e=0;e<100;e++){const t=document.createElement("div");t.dataset.index=e,p.append(t)}return{main:r,getPositions:()=>t}})();let S;document.querySelector("#submitButton").addEventListener("click",(()=>{5===L().length&&(S=a(L()),document.querySelectorAll("button").forEach((e=>e.classList.add("invisible"))),document.querySelector("#aiGrid").classList.remove("invisible"))}));const C=document.querySelectorAll("#aiGrid>div");function M(e){const t=S.playRound(e.target.dataset.index);t[0]?e.target.classList.add("hit"):e.target.classList.add("miss");const n=document.querySelector(`#grid>div[data-index="${t[1]}"]`);n.classList.contains("ship")?n.classList.add("hit"):n.classList.add("miss"),t[2]&&(console.log("GAMEOVER"),C.forEach((e=>e.removeEventListener("click",M)))),e.target.removeEventListener("click",M)}C.forEach((e=>e.addEventListener("click",M)))})()})();