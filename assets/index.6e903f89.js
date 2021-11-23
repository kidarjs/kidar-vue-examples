import{n as t}from"./index.c2103e5d.js";let e=(t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let n=63&i[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e};var i="object"==typeof global&&global&&global.Object===Object&&global,n="object"==typeof self&&self&&self.Object===Object&&self,r=i||n||Function("return this")(),o=r.Symbol,s=Object.prototype,a=s.hasOwnProperty,l=s.toString,c=o?o.toStringTag:void 0;var f=Object.prototype.toString;var d=o?o.toStringTag:void 0;function u(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=a.call(t,c),i=t[c];try{t[c]=void 0;var n=!0}catch(o){}var r=l.call(t);return n&&(e?t[c]=i:delete t[c]),r}(t):function(t){return f.call(t)}(t)}var h=/\s/;var m=/^\s+/;function p(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&h.test(t.charAt(e)););return e}(t)+1).replace(m,""):t}function v(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var g=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,y=/^0o[0-7]+$/i,_=parseInt;function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==u(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=p(t);var i=b.test(t);return i||y.test(t)?_(t.slice(2),i?2:8):g.test(t)?NaN:+t}var w=function(){return r.Date.now()},C=Math.max,E=Math.min;function S(t,e,i){var n,r,o,s,a,l,c=0,f=!1,d=!1,u=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var i=n,o=r;return n=r=void 0,c=e,s=t.apply(o,i)}function m(t){return c=t,a=setTimeout(g,e),f?h(t):s}function p(t){var i=t-l;return void 0===l||i>=e||i<0||d&&t-c>=o}function g(){var t=w();if(p(t))return b(t);a=setTimeout(g,function(t){var i=e-(t-l);return d?E(i,o-(t-c)):i}(t))}function b(t){return a=void 0,u&&n?h(t):(n=r=void 0,s)}function y(){var t=w(),i=p(t);if(n=arguments,r=this,l=t,i){if(void 0===a)return m(l);if(d)return clearTimeout(a),a=setTimeout(g,e),h(l)}return void 0===a&&(a=setTimeout(g,e)),s}return e=x(e)||0,v(i)&&(f=!!i.leading,o=(d="maxWait"in i)?C(x(i.maxWait)||0,e):o,u="trailing"in i?!!i.trailing:u),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=l=r=a=void 0},y.flush=function(){return void 0===a?s:b(w())},y}let T,N,k,$,j;const O=t=>{t.style.position="absolute",t.style.width="8px",t.style.height="8px",t.style.backgroundColor="#ffffff",t.style.border="1px solid #333"},L=(()=>{let t;return()=>{if(t)return t;const e=document.createElement("div");e.className="__border_line",e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.border="1px dashed #666";const i=document.createElement("div");i.className="__dot_lt",O(i),i.style.cursor="nw-resize",i.style.left="-4px",i.style.top="-4px";const n=document.createElement("div");n.className="__dot_lb",O(n),n.style.cursor="ne-resize",n.style.left="-4px",n.style.bottom="-4px";const r=document.createElement("div");r.className="__dot_rt",O(r),r.style.cursor="ne-resize",r.style.right="-4px",r.style.top="-4px";const o=document.createElement("div");return o.className="__dot_rb",O(o),o.style.cursor="nw-resize",o.style.right="-4px",o.style.bottom="-4px",t=[e,i,n,r,o],t}})(),I=function(t,e,i){var n=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(i)&&(n="leading"in i?!!i.leading:n,r="trailing"in i?!!i.trailing:r),S(t,e,{leading:n,maxWait:e,trailing:r})}((function(t,e,i,n){T.style.width=Number(i)/Number(N.clientWidth)*100+"%",T.style.height=Number(n)/Number(N.clientHeight)*100+"%",((t,e)=>{let{offsetHeight:i,offsetWidth:n}=T;e<0&&(e=0),t<0&&(t=0),t+n>N.offsetWidth&&(t=N.offsetWidth-n),e+i>N.offsetHeight&&(e=N.offsetHeight-i),T.style.left=Number(t)/Number(N.clientWidth)*100+"%",T.style.top=Number(e)/Number(N.clientHeight)*100+"%"})(t,e)}),100),M=t=>{t&&t.innerHTML.indexOf("__border_line")>-1&&L().forEach((e=>{t.removeChild(e)}))},W=(t,e)=>t.parentElement===e?((t=>{T!==t&&T&&M(T),-1===t.innerHTML.indexOf("__border_line")&&t.append(...L())})(t),T=t,!0):!!t.parentElement&&W(t.parentElement,e),D=t=>{let{target:e,currentTarget:i,pageX:n,pageY:r}=t;e instanceof HTMLElement&&i instanceof HTMLElement&&(e.className.startsWith("__dot")?(k=e.className.substring(6,8),i.style.cursor="lt"===k||"rb"===k?"nw-resize":"ne-resize"):W(e,i)?(k="move",i.style.cursor="move",$=n-T.offsetLeft,j=r-T.offsetTop):M(T),N=i)};let H;const z=t=>{if(!k)return;let{pageY:e,pageX:i}=t,{offsetLeft:n,offsetTop:r,offsetHeight:o,offsetWidth:s}=T,a=i-N.offsetLeft,l=e-N.offsetTop;switch(k){case"rb":I(n,r,a-n,l-r);break;case"rt":l>r+o&&(l=r+o),I(n,l,a-n,o-l+r);break;case"lt":l>r+o&&(l=r+o),a>n+s&&(a=n+s),I(a,l,s-a+n,o-l+r);break;case"lb":a>n+s&&(a=n+s),I(a,r,s-a+n,l-r);break;case"move":N.style.cursor="move",I(i-$,e-j,s,o)}};var R=(t,e)=>{H=(t=>e=>{k="",N&&(N.style.cursor="auto"),T&&t&&t(T)})(e),t.style.userSelect="none",t.addEventListener("mousedown",D),t.addEventListener("mouseup",H),t.addEventListener("mousemove",z)},A=t=>{t.style.userSelect="inherit",t.removeEventListener("mousedown",D),t.removeEventListener("mouseup",H),t.removeEventListener("mousemove",z),T&&M(T)};function V(t,e,i,n,r,o,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var f=c.render;c.render=function(t,e){return l.call(e),f(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}const U={name:"KiDragContainer",props:{editable:{type:Boolean,default:!0},items:{type:Array,default:()=>[]}},watch:{items:{handler:function(t,e){this.$emit("changed",t)},deep:!0},editable:function(t){t?this.active():this.disable()}},data:()=>({isCanDel:!0}),mounted(){this.$nextTick((()=>{this.editable&&this.active()}))},beforeDestroy(){this.disable()},methods:{deleteItem(t,e){this.$emit("delete",t,e)},updateItem(t){let{width:e,height:i,left:n,top:r}=t.style,o=t.getAttribute("dataset-drag-index");this.items[o].width===e&&this.items[o].height===i&&this.items[o].left===n&&this.items[o].top===r||(this.items[o].width=e,this.items[o].height=i,this.items[o].left=n,this.items[o].top=r,this.$emit("changed",this.items))},active(){R(this.$refs.dragContainer,this.updateItem),this.isCanDel=!0},disable(){A(this.$refs.dragContainer),this.isCanDel=!1}}},X={};var B=V(U,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"dragContainer",staticStyle:{position:"relative",height:"100%",width:"100%","background-color":"#f1f1f1"}},t._l(t.items,(function(e,n){return i("div",{key:e.id,style:"position: absolute;width:"+e.width+";height:"+e.height+";left:"+e.left+";top:"+e.top+";min-width:"+e.minWidth+";",attrs:{"dataset-drag-index":n}},[i("div",{staticClass:"__drag-item",staticStyle:{height:"100%",width:"100%",position:"absolute",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[t._t("item",null,{item:e})],2),t.isCanDel?i("button",{staticStyle:{position:"absolute",right:"4px"},on:{click:function(i){return t.deleteItem(n,e)}}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 24 24",width:"1em",fill:"currentColor"}},[i("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),i("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}})])]):t._e()])})),0)}),[],!1,K,null,null,null);function K(t){for(let e in X)this[e]=X[e]}var Y=function(){return B.exports}();Y.install=t=>{t.component(Y.name,Y)},"undefined"!=typeof window&&window.Vue&&Y.install(window.Vue);const F=["#199999","#1890ff","#1456aa","#aa90ff","#ff90ff","#cd7777","#ffee27","#23e0ff","#ff7700"],G={};var J=t({components:{KiDragContainer:Y},data:()=>({editable:!0,items:[]}),created(){this.items=JSON.parse(localStorage.getItem("KI_DRAG_ITEMS")||"[]")},methods:{dragChange(){localStorage.setItem("KI_DRAG_ITEMS",JSON.stringify(this.items))},add(){let t={id:e(),width:"50px",minWidth:"200px",height:"50px",color:F[Math.ceil(8*Math.random())]};this.items.push(t)},deleteCard(t,e){this.items.splice(t,1)},active(){this.editable=!0},disable(){this.editable=!1},testBtn(){console.log("vue自定义事件测试")}}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-full"},[i("div",{staticClass:"drag-tools dark:text-white"},[i("button",{on:{click:t.add}},[t._v("新增")]),i("button",{on:{click:t.active}},[t._v("启动编辑")]),i("button",{on:{click:t.disable}},[t._v("禁止编辑")])]),t._m(0),i("ki-drag-container",{staticStyle:{height:"600px"},attrs:{editable:t.editable,items:t.items},on:{changed:t.dragChange,delete:t.deleteCard},scopedSlots:t._u([{key:"item",fn:function(e){return[i("div",{staticClass:"card-item",style:"background-color: "+e.item.color+";color:#ffffff;"},[i("h5",[t._v("盒子ID: "+t._s(e.item.id))]),i("a",{staticClass:"text-blue-400",attrs:{href:"https://www.baidu.com",target:"_blank"}},[t._v("标签默认事件测试")]),i("br"),i("button",{staticClass:"px-3 bg-gray-200 text-black",on:{click:t.testBtn}},[t._v("vue自定义事件测试")])])]}}])})],1)}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-4 mb-4 px-4 dark:text-white"},[i("p",[t._v(" 注意：事件机制，盒子在启动编辑的状态下，内部的点击事件会被屏蔽，只有禁止编辑后，用户在盒子内部定义的事件才会被触发 ")])])}],!1,P,"3f863b7a",null,null);function P(t){for(let e in G)this[e]=G[e]}var q=function(){return J.exports}();export{q as default};
