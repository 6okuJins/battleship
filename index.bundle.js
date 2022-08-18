(()=>{"use strict";var e={298:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap);"]),i.push([e.id,'.footer{display:flex;justify-content:center;align-items:center;font-family:"Oswald",sans-serif;padding:20px;background-color:#46698f;color:silver}',""]);const s=i},55:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap);"]),i.push([e.id,'.header{display:flex;justify-content:center;background-color:#46698f;font-family:"Oswald",sans-serif;font-size:60px;-webkit-text-stroke:2px #000;color:silver;padding:20px}',""]);const s=i},389:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,".HeatMap{grid-template-columns:repeat(10, 40px);grid-template-rows:repeat(10, 40px);justify-content:center;align-items:center}",""]);const s=i},999:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap);"]),i.push([e.id,'body{height:100vh;display:flex;flex-direction:column}.main{display:flex;justify-content:center;align-items:center;height:100%;gap:20px;background-color:orange}.main .announce{display:flex;justify-content:center;align-items:center;position:absolute;top:10vh;padding-bottom:50px;font-size:50px;font-family:"Oswald",sans-serif}.main .hit{background-color:green}.main .miss{background-color:red}.main .playerContainer{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px}.main .playerContainer button{display:flex;justify-content:center;font-family:"Oswald",sans-serif;font-size:40px;background-color:#46698f}.main .playerContainer button.invisible{display:none}.main .playerContainer #grid{display:grid;grid-template-columns:repeat(10, 50px);grid-auto-rows:50px}.main .playerContainer #grid div{width:100%;height:100%;border:2px solid #000}.main .playerContainer #grid div.hovered{background-color:#000}.main .playerContainer #grid div.miss{background-color:red}.main .playerContainer #grid div.ship{background-color:#46698f}.main .playerContainer #grid div.hit{background-color:green}.main .opponentContainer #aiGrid{display:grid;grid-template-columns:repeat(10, 50px);grid-auto-rows:50px}.main .opponentContainer #aiGrid div{width:100%;height:100%;border:2px solid #000}.main .opponentContainer #aiGrid.invisible{display:none}.invisible{display:none}',""]);const s=i},496:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(){const e=Math.ceil(0),t=Math.floor(100);return Math.floor(Math.random()*(t-e+1))+e}function t(e,t,n){let o=!1;return 0===e?t%10<=10-n&&(o=!0):Math.floor(t/10)<=10-n&&(o=!0),o}function o(e,n,o,r,a){const i=[5,4,3,3,2];console.log(o),n.forEach((e=>{i.splice(i.indexOf(e.getShipLength()),1)}));let s=0;const c=new Array(100).fill(0);for(const n of i)for(let o=0;o<2;o++){let r=0;for(;r<100;){let a=t(o,r,n),i=0;for(;a&&i<n;)"Miss"===e[r+(0===o?i:10*i)]&&(a=!1),i+=1;if(a)for(s+=1,e[r]||(c[r]+=1),i=1;i<n;)c[r+(0===o?i:10*i)]+=1,i+=1;r+=1}}if(o){let t;if("left"===r){for(t=o-1;t%10>0&&"Hit"===e[t];)t-=1;e[t]&&(a(),r="right")}if("right"===r){for(t=o+1;t%10<9&&"Hit"===e[t];)t+=1;e[t]&&(a(),r="up")}if("up"===r){for(t=o+10;Math.floor(t/10)%10&&"Hit"===e[t];)t+=10;e[t]&&(a(),r="down")}if("down"===r)for(t=o-10;Math.floor(t/10)%10&&"Hit"===e[t];)t-=10;e[t]?a():c[t]+=100}return c}const r=()=>{const e={};let t=[];return{placeShip:(t,n)=>{if(!n.some((t=>Object.keys(e).includes(String(t)))))for(const o of n)e[o]=t},getBoard:()=>e,getSunkenShips:()=>t,recieveAttack:n=>{const o=[],r=e[n];return r?r.getHitPositions().includes(n)||(r.hit(n),o.push(!0),r.isSunk()?(t.push(r),o.push(!0)):o.push(!1)):(e[n]=null,o.push(!1,!1)),o},gameOver:()=>5===t.length}};var a,i=new Uint8Array(16);function s(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(i)}const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d=function(e){return"string"==typeof e&&c.test(e)};for(var l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));const p=function(e,t,n){var o=(e=e||{}).random||(e.rng||s)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=o[r];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!d(n))throw TypeError("Stringified UUID is invalid");return n}(o)},f=e=>{const t=e;let n=[];return{hit:e=>{n.push(e)},isSunk:()=>n.length==t,getHitPositions:()=>n.slice(),getShipLength:()=>t,id:p()}},m=n=>{const a=(()=>{const e=[];return{setVisited:t=>{e.push(t)},getVisited:()=>e.slice()}})();let i=(()=>{let n,r,a,i=new Array(100).fill(),s=["left","right","up","down"];const c=()=>{s&&s.shift()},d=function(){const n=new Array(5).fill().map((()=>Math.round(Math.random()))),o=[2,3,3,4,5];let r=o.pop();const a=[];for(const i of n){let n=!0;for(;n;){const s=e();if(t(i,s,r)){const e=[];for(let t=0;t<=r-1;t++)e.push(s+(0===i?t:10*t));e.every((e=>!a.flat().includes(e)))&&(a.push(e),n=!1,r=o.pop())}}}return a}();return{getMoves:()=>n.slice(),getMove:e=>{let t;if("easy"===r)t=n.pop();else{let n=o(i,e,a,s[0],c);n=n.map(((e,t)=>"Hit"===i[t]||"Miss"===i[t]?0:e));const r=Math.max(...n);t=n.indexOf(r)}return t},getPositions:()=>d,setVisited:(e,t)=>{i[e]=t},setTarget:e=>{a||(a=e,s=["left","right","up","down"])},shiftTargetStack:c,removeTarget:e=>{a=void 0,s=[]},getPDF:()=>o(i),easyAI:()=>{n=function(e){let t,n=e.length;for(;0!=n;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e}(new Array(100).fill().map(((e,t)=>t))),r="easy"},hardAI:()=>{r="hard"}}})();a.gameboard=r(),i.gameboard=r();for(const e of n)a.gameboard.placeShip(f(e.length),e);for(const e of i.getPositions())i.gameboard.placeShip(f(e.length),e);return{playRound:e=>{const t=[],[n,o]=[...i.gameboard.recieveAttack(e)];t.push(n);const r=i.getMove(a.gameboard.getSunkenShips()),[s,c]=[...a.gameboard.recieveAttack(r)];return i.setVisited(r,s?"Hit":"Miss"),s&&i.setTarget(r),s||i.shiftTargetStack(),c&&i.removeTarget(r),t.push(r),a.gameboard.gameOver()?t.push("You Lose!"):i.gameboard.gameOver()&&t.push("You Win!"),t},easyAI:()=>i.easyAI(),hardAI:()=>i.hardAI(),getPDF:()=>i.getPDF()}};var h=n(379),g=n.n(h),y=n(795),v=n.n(y),b=n(569),x=n.n(b),E=n(565),S=n.n(E),C=n(216),k=n.n(C),w=n(589),A=n.n(w),L=n(999),M={};M.styleTagTransform=A(),M.setAttributes=S(),M.insert=x().bind(null,"head"),M.domAPI=v(),M.insertStyleElement=k(),g()(L.Z,M),L.Z&&L.Z.locals&&L.Z.locals;var q=n(496),T={};T.styleTagTransform=A(),T.setAttributes=S(),T.insert=x().bind(null,"head"),T.domAPI=v(),T.insertStyleElement=k(),g()(q.Z,T),q.Z&&q.Z.locals&&q.Z.locals;var Z=n(55),I={};I.styleTagTransform=A(),I.setAttributes=S(),I.insert=x().bind(null,"head"),I.domAPI=v(),I.insertStyleElement=k(),g()(Z.Z,I),Z.Z&&Z.Z.locals&&Z.Z.locals;var P=n(298),O={};O.styleTagTransform=A(),O.setAttributes=S(),O.insert=x().bind(null,"head"),O.domAPI=v(),O.insertStyleElement=k(),g()(P.Z,O),P.Z&&P.Z.locals&&P.Z.locals;var j=n(389),H={};H.styleTagTransform=A(),H.setAttributes=S(),H.insert=x().bind(null,"head"),H.domAPI=v(),H.insertStyleElement=k(),g()(j.Z,H),j.Z&&j.Z.locals&&j.Z.locals;(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("header"),e.append(t),t.textContent="BATTLESHIP"})();const{body:R,getPositions:V}=(()=>{const e=[2,3,3,4,5],t=[];let n=e.pop();const o=document.querySelector("body"),r=document.createElement("div"),a=document.createElement("div");a.classList.add("announce"),r.append(a),a.textContent="Place your ships!";const i=document.createElement("div");i.classList.add("playerContainer");const s=document.createElement("div");s.classList.add("opponentContainer"),o.append(r),r.append(i,s),r.classList.add("main");let c="x";const d=document.createElement("button");d.textContent=`Axis: ${c}`,i.append(d),d.addEventListener("click",(()=>{c="x"===c?"y":"x",d.textContent=`Axis: ${c}`}));const l=document.createElement("button");l.textContent="Submit",l.id="submitButton";const u=document.createElement("button");u.id="diffButton",u.textContent="Easy";const p=document.createElement("div");p.id="grid",i.append(p),i.append(u),i.append(l);for(let o=0;o<100;o++){const r=document.createElement("div");p.append(r),r.dataset.index=o,r.addEventListener("mouseover",f),r.addEventListener("mouseout",(()=>{document.querySelectorAll(".hovered").forEach((e=>e.classList.remove("hovered")))})),r.addEventListener("click",(()=>{if(r.classList.contains("hovered")){const o=document.querySelectorAll(".hovered"),r=[];o.forEach((e=>{e.classList.add("ship"),r.push(e.dataset.index),e.removeEventListener("mouseover",f)})),t.push(r),n=e.pop()}}))}function f(e){const t=e.target.dataset.index;if("x"==c&&t%10<=10-n||"y"==c&&Math.floor(t/10)<=10-n)for(let e=0;e<n;e++){const n=document.querySelector(`[data-index="${parseInt(t)+("x"==c?e:10*e)}"]`);if(n.classList.contains("ship")){document.querySelectorAll(".hovered").forEach((e=>e.classList.remove("hovered")));break}n.classList.add("hovered")}}const m=document.createElement("div");m.id="aiGrid",m.classList.add("invisible"),s.append(m);for(let e=0;e<100;e++){const t=document.createElement("div");t.dataset.index=e,m.append(t)}return{main:r,getPositions:()=>t}})();(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("footer"),e.append(t),t.textContent="Made by Dom M. for The Odin Project"})();const $=document.querySelector(".footer");let B,G=0;const D=document.querySelector("#submitButton"),F=document.querySelector("#diffButton");F.addEventListener("click",(()=>{F.textContent="Easy"===F.textContent?"Hard":"Easy"})),D.addEventListener("click",(()=>{5===V().length&&(B=m(V()),"Easy"===F.textContent?B.easyAI():B.hardAI(),document.querySelectorAll("button").forEach((e=>e.classList.add("invisible"))),document.querySelector("#aiGrid").classList.remove("invisible"),document.querySelector(".announce").textContent="Battle!")}));const U=document.querySelectorAll("#aiGrid>div");function z(e){G+=1;const t=B.playRound(e.target.dataset.index),n=document.querySelector(".announce");t[0]?(e.target.classList.add("hit"),n.textContent=`Round ${G}: Hit!`):(e.target.classList.add("miss"),n.textContent=`Round ${G}: Miss!`);const o=document.querySelector(`#grid>div[data-index="${t[1]}"]`);o.classList.contains("ship")?o.classList.add("hit"):o.classList.add("miss"),t[2]&&(n.textContent=`GAME OVER: ${t[2]}`,U.forEach((e=>e.removeEventListener("click",z)))),e.target.removeEventListener("click",z);const r=document.querySelector(".HeatMap");r&&$.removeChild(r)}U.forEach((e=>e.addEventListener("click",z)))})()})();