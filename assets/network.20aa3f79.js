import{b as e,d as t,a as r,t as o,c as n,o as i,e as a,f as s,w as c,g as l}from"./index.c2103e5d.js";import{N as u,O as f}from"./echarts.cd8c9dcc.js";var d=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var r=-1;return e.some((function(e,o){return e[0]===t&&(r=o,!0)})),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var r=e(this.__entries__,t),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(t,r){var o=e(this.__entries__,t);~o?this.__entries__[o][1]=r:this.__entries__.push([t,r])},t.prototype.delete=function(t){var r=this.__entries__,o=e(r,t);~o&&r.splice(o,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var r=0,o=this.__entries__;r<o.length;r++){var n=o[r];e.call(t,n[1],n[0])}},t}()}(),w="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,S="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),E="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(S):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)},x=["top","right","bottom","left","width","height","size","weight"],_="undefined"!=typeof MutationObserver,O=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var r=!1,o=!1,n=0;function i(){r&&(r=!1,e()),o&&s()}function a(){E(i)}function s(){var e=Date.now();if(r){if(e-n<2)return;o=!0}else r=!0,o=!1,setTimeout(a,20);n=e}return s}(this.refresh.bind(this))}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,r=t.indexOf(e);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){w&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){w&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,r=void 0===t?"":t;x.some((function(e){return!!~r.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),C=function(e,t){for(var r=0,o=Object.keys(t);r<o.length;r++){var n=o[r];Object.defineProperty(e,n,{value:t[n],enumerable:!1,writable:!1,configurable:!0})}return e},j=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||S},T=N(0,0,0,0);function k(e){return parseFloat(e)||0}function A(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce((function(t,r){return t+k(e["border-"+r+"-width"])}),0)}var R="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof j(e).SVGGraphicsElement}:function(e){return e instanceof j(e).SVGElement&&"function"==typeof e.getBBox};function L(e){return w?R(e)?N(0,0,(t=e.getBBox()).width,t.height):function(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return T;var o,n=j(e).getComputedStyle(e),i=function(e){for(var t={},r=0,o=["top","right","bottom","left"];r<o.length;r++){var n=o[r],i=e["padding-"+n];t[n]=k(i)}return t}(n),a=i.left+i.right,s=i.top+i.bottom,c=k(n.width),l=k(n.height);if("border-box"===n.boxSizing&&(Math.round(c+a)!==t&&(c-=A(n,"left","right")+a),Math.round(l+s)!==r&&(l-=A(n,"top","bottom")+s)),(o=e)!==j(o).document.documentElement){var u=Math.round(c+a)-t,f=Math.round(l+s)-r;1!==Math.abs(u)&&(c-=u),1!==Math.abs(f)&&(l-=f)}return N(i.left,i.top,c,l)}(e):T;var t}function N(e,t,r,o){return{x:e,y:t,width:r,height:o}}var W=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=N(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=L(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),P=function(e,t){var r,o,n,i,a,s,c,l=(o=(r=t).x,n=r.y,i=r.width,a=r.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(s.prototype),C(c,{x:o,y:n,width:i,height:a,top:n,right:o+i,bottom:a+n,left:o}),c);C(this,{target:e,contentRect:l})},M=function(){function e(e,t,r){if(this.activeObservations_=[],this.observations_=new v,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof j(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new W(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof j(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new P(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),B="undefined"!=typeof WeakMap?new WeakMap:new v,U=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=O.getInstance(),o=new M(t,r,this);B.set(this,o)};["observe","unobserve","disconnect"].forEach((function(e){U.prototype[e]=function(){var t;return(t=B.get(this))[e].apply(t,arguments)}}));var D=void 0!==S.ResizeObserver?S.ResizeObserver:U,q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},F="object"==typeof q&&q&&q.Object===Object&&q,I="object"==typeof self&&self&&self.Object===Object&&self,H=F||I||Function("return this")(),J=H,$=/\s/,V=/^\s+/,X=H.Symbol,K=X,G=Object.prototype,Z=G.hasOwnProperty,Q=G.toString,Y=K?K.toStringTag:void 0,ee=Object.prototype.toString,te=function(e){var t=Z.call(e,Y),r=e[Y];try{e[Y]=void 0;var o=!0}catch(i){}var n=Q.call(e);return o&&(t?e[Y]=r:delete e[Y]),n},re=X?X.toStringTag:void 0,oe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?te(e):function(e){return ee.call(e)}(e)},ne=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&$.test(e.charAt(t)););return t}(e)+1).replace(V,""):e},ie=z,ae=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,ce=/^0o[0-7]+$/i,le=parseInt,ue=z,fe=function(){return J.Date.now()},de=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==oe(e)}(e))return NaN;if(ie(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ie(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ne(e);var r=se.test(e);return r||ce.test(e)?le(e.slice(2),r?2:8):ae.test(e)?NaN:+e},he=Math.max,pe=Math.min,be=z,me=function(e,t,r){var o=!0,n=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return be(r)&&(o="leading"in r?!!r.leading:o,n="trailing"in r?!!r.trailing:n),function(e,t,r){var o,n,i,a,s,c,l=0,u=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=o,i=n;return o=n=void 0,l=t,a=e.apply(i,r)}function p(e){return l=e,s=setTimeout(m,t),u?h(e):a}function b(e){var r=e-c;return void 0===c||r>=t||r<0||f&&e-l>=i}function m(){var e,r,o=fe();if(b(o))return y(o);s=setTimeout(m,(r=t-((e=o)-c),f?pe(r,i-(e-l)):r))}function y(e){return s=void 0,d&&o?h(e):(o=n=void 0,a)}function g(){var e=fe(),r=b(e);if(o=arguments,n=this,c=e,r){if(void 0===s)return p(c);if(f)return clearTimeout(s),s=setTimeout(m,t),h(c)}return void 0===s&&(s=setTimeout(m,t)),a}return t=de(t)||0,ue(r)&&(u=!!r.leading,i=(f="maxWait"in r)?he(de(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),g.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=c=n=s=void 0},g.flush=function(){return void 0===s?a:y(fe())},g}(e,t,{leading:o,maxWait:t,trailing:n})};const ye=(()=>{const e=new Map,t=new D((t=>{for(const r of t)e.get(r.target)(r)}));return(r,o)=>{o instanceof Function?(e.set(r,me(o,100)),t.observe(r)):(e.delete(r),t.unobserve(r))}})();document.createElement("canvas");e();const ge={"./plugins/arealine.ts":()=>import("./arealine.4b24fccc.js"),"./plugins/common.ts":()=>import("./common.d2e9833c.js"),"./plugins/constant.ts":()=>import("./constant.9d141aba.js"),"./plugins/dybar.ts":()=>import("./dybar.456e0541.js"),"./plugins/earth.ts":()=>import("./earth.ea6659c6.js"),"./plugins/graph.ts":()=>import("./graph.5301a570.js"),"./plugins/line-bar-x.ts":()=>import("./line-bar-x.17d7d09d.js"),"./plugins/line.ts":()=>import("./line.96dbf46d.js"),"./plugins/map.ts":()=>import("./map.bdd3b748.js"),"./plugins/map3d.ts":()=>import("./map3d.77c8b81a.js"),"./plugins/pie.ts":()=>import("./pie.c20f355b.js"),"./plugins/ring.ts":()=>import("./ring.20d53dfd.js"),"./plugins/treemap.ts":()=>import("./treemap.fcf86a0b.js")},ve=new Map;u("light",{color:["#5ab1ef","#2ec7c9","#ffb980","#d87a80","#dc69aa","#b6a2de","#8d98b3","#e5cf0d","#97b552","#95706d","#07a2a4","#9a7fd1","#588dd5","#c05050","#f5994e","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],backgroundColor:"#ffffff",textStyle:{},title:{textStyle:{color:"#008acd"},subtextStyle:{color:"#aaaaaa"}},lines:{lineStyle:{width:1,opacity:.1,curveness:.3}},line:{itemStyle:{borderWidth:3,borderColor:"#ffffff"},lineStyle:{width:2},symbolSize:10,symbol:"circle",smooth:!0},radar:{itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:3,symbol:"emptyCircle",smooth:!0},bar:{itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},pie:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},scatter:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},boxplot:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},parallel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},sankey:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},funnel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},gauge:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9",borderColor:"#d87a80",borderColor0:"#2ec7c9",borderWidth:1}},graph:{itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:1,color:"#aaaaaa"},symbolSize:3,symbol:"circle",smooth:!0,color:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],label:{}},map:{itemStyle:{areaColor:"#dddddd",borderColor:"#eeeeee",borderWidth:.5},label:{color:"#d87a80"},emphasis:{itemStyle:{areaColor:"rgba(254,153,78,1)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},geo:{itemStyle:{areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"#cfcfcf"},{offset:1,color:"#eeeeee"}],globalCoord:!0},borderColor:"#999999",borderWidth:1},label:{color:"#d87a80"},emphasis:{itemStyle:{areaColor:"rgba(254,153,78,1)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!1,lineStyle:{color:["#eee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!1,lineStyle:{color:["#eee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#eee"]}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#eee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},toolbox:{iconStyle:{borderColor:"#2ec7c9"},emphasis:{iconStyle:{borderColor:"#18a4a6"}}},legend:{textStyle:{color:"#333333"}},tooltip:{axisPointer:{lineStyle:{color:"#008acd",width:"1"},crossStyle:{color:"#008acd",width:"1"}}},timeline:{lineStyle:{color:"#008acd",width:1},itemStyle:{color:"#008acd",borderWidth:1},controlStyle:{color:"#008acd",borderColor:"#008acd",borderWidth:.5},checkpointStyle:{color:"#2ec7c9",borderColor:"#2ec7c9"},label:{color:"#008acd"},emphasis:{itemStyle:{color:"#a9334c"},controlStyle:{color:"#008acd",borderColor:"#008acd",borderWidth:.5},label:{color:"#008acd"}}},visualMap:{color:["#5ab1ef","#e0ffff"]},dataZoom:{backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd",handleSize:"100%",textStyle:{color:"#333333"}},markPoint:{label:{color:"#eeeeee"},emphasis:{label:{color:"#eeeeee"}}}}),u("dark",{color:["#00f8fb","#00fe65","#fbd161","#fc5051","#f87d5a","#7b2cff","#92e1ff","#2ca1ff","#ff7ccc","#09fdb2","#00da01","#ff964b","#ff00ff","#ff6347","#4705b5","#1890ff","#f5616f","#ea60ff"],backgroundColor:"#09234c",textStyle:{},title:{textStyle:{color:"#ffffff"},subtextStyle:{color:"#baacac"}},lines:{lineStyle:{width:1,opacity:.1,curveness:.3}},line:{itemStyle:{borderWidth:"4",borderColor:"#0a2f5e"},lineStyle:{width:1},symbolSize:12,symbol:"circle",smooth:!0},radar:{itemStyle:{borderWidth:"3"},lineStyle:{width:2},symbolSize:4,symbol:"emptyCircle",smooth:!0},bar:{itemStyle:{barBorderWidth:"0",barBorderColor:"rgba(255,255,255,0.83)"}},pie:{itemStyle:{borderWidth:"1",borderColor:"rgba(255,255,255,0.8)"}},scatter:{itemStyle:{borderWidth:"0",borderColor:"rgba(255,255,255,0.83)"}},boxplot:{itemStyle:{borderWidth:"0",borderColor:"rgba(255,255,255,0.83)"}},parallel:{itemStyle:{borderWidth:"0",borderColor:"rgba(255,255,255,0.83)"}},sankey:{itemStyle:{borderWidth:"0",borderColor:"rgba(255,255,255,0.83)"}},funnel:{itemStyle:{borderWidth:"0",borderColor:"rgba(255,255,255,0.83)"}},gauge:{itemStyle:{borderWidth:"0",borderColor:"rgba(255,255,255,0.83)"}},candlestick:{itemStyle:{color:"#eb5454",color0:"#47b262",borderColor:"#eb5454",borderColor0:"#47b262",borderWidth:1}},graph:{itemStyle:{shadowBlur:100},lineStyle:{width:1},symbolSize:4,smooth:!0,color:["#00f8fb","#00fe65","#fbd161","#fc5051","#f87d5a","#7b2cff","#92e1ff","#2ca1ff","#ea7ccc","#09fdb2","#00da01","#b8860b","#ff00ff","#ff6347","#4705b5","#0780cf","#f5616f","#765005"],label:{}},map:{itemStyle:{areaColor:"#eee",borderColor:"#444",borderWidth:.5},label:{color:"#000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},geo:{itemStyle:{areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"#09234c"},{offset:1,color:"#274d68"}],globalCoord:!0},borderColor:"#00f8fb",borderWidth:1},label:{color:"#000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#6E7079"}},axisTick:{show:!1,lineStyle:{color:"#6E7079"}},axisLabel:{show:!0,color:"#c7c7c7"},splitLine:{show:!1,lineStyle:{color:["#E0E6F1"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(210,219,238,0.2)"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#6E7079"}},axisTick:{show:!1,lineStyle:{color:"#6E7079"}},axisLabel:{show:!0,color:"#c7c7c7"},splitLine:{show:!1,lineStyle:{color:["#E0E6F1"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(210,219,238,0.2)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#6E7079"}},axisTick:{show:!1,lineStyle:{color:"#6E7079"}},axisLabel:{show:!0,color:"#c7c7c7"},splitLine:{show:!1,lineStyle:{color:["#E0E6F1"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(210,219,238,0.2)"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#6E7079"}},axisTick:{show:!0,lineStyle:{color:"#6E7079"}},axisLabel:{show:!0,color:"#c7c7c7"},splitLine:{show:!1,lineStyle:{color:["#E0E6F1"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(210,219,238,0.2)"]}}},toolbox:{iconStyle:{borderColor:"#6e6d6d"},emphasis:{iconStyle:{borderColor:"#c7c7c7"}}},legend:{textStyle:{color:"#c7c7c7"},pageIconInactiveColor:"#666666",pageIconColor:"#ffffff"},tooltip:{show:!0,axisPointer:{lineStyle:{color:"#ccc",width:1},crossStyle:{color:"#ccc",width:1}}},timeline:{lineStyle:{color:"#96ebf0",width:"2"},itemStyle:{color:"#bbdee0",borderWidth:1},controlStyle:{color:"#f7f7f7",borderColor:"#85ebf7",borderWidth:"1"},checkpointStyle:{color:"#30f2f2",borderColor:"fff"},label:{color:"#c7c7c7"},emphasis:{itemStyle:{color:"#FFF"},controlStyle:{color:"#f7f7f7",borderColor:"#85ebf7",borderWidth:"1"},label:{color:"#c7c7c7"}}},visualMap:{color:["#166d8a","#11a7d6","#a6f1f6"]},dataZoom:{handleSize:"undefined%",textStyle:{}},markPoint:{label:{color:"#ffffff"},emphasis:{label:{color:"#ffffff"}}}});const we=t({template:'<div ref="KidarEchartsEl"></div>',props:{omit:{type:Number,default:0},rotate:{type:Number,default:0},zoomNum:{type:Number,default:7},title:{type:String,default:""},type:{type:String,default:"pie"},cols:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},theme:{type:[String,Object],default:"dark"},locale:{type:String,default:"zh-cn"},renderer:{type:String,default:"canvas"},useDirtyRect:{type:Boolean,default:!1},devicePixelRatio:{type:Number,default:window.devicePixelRatio}},setup(e,{emit:t,attrs:l}){const u=r(),{theme:d,type:v,cols:w,data:S}=o(e);let E=null;const x=n((()=>({locale:e.locale,renderer:e.renderer,devicePixelRatio:e.devicePixelRatio,useDirtyRect:e.useDirtyRect}))),_=()=>{let e="light";var r;d&&d.value&&(e=d.value),E=f(u.value,e,x.value),E.on("click","series",(e=>{t("click",e)})),r=u.value,ye(r,(()=>{O(),E&&E.resize()})),O()};i((()=>{var e;e=u.value,ye(e),null==E||E.dispose()})),a((()=>{u.value?_():s((()=>_()))}));const O=async()=>{var t;if(!E||!v.value)return;if(!ve.has(v.value))try{let e=await ge[`./plugins/${v.value}.ts`]();ve.set(v.value,e.default.default||e.default||e)}catch(n){throw new Error(`未找到【${v.value}】类型, 目前KidarEcharts仅支持pie,line,bar,dybar,multi-line-bar-x\n          若没有满意的类型，可自定义类型plugin，并使用KidarEcharts.use(plugin)添加自定义类型。\n          自定义类型可参考技术文档：https://github.com/kidarjs/kidar-echarts\n          ：${n}`)}E.setOption({},!1);const r=null==(t=ve.get(v.value))?void 0:t.resetOption(w.value,S.value,(o=((e,t)=>{for(var r in t||(t={}))m.call(t,r)&&g(e,r,t[r]);if(b)for(var r of b(t))y.call(t,r)&&g(e,r,t[r]);return e})({},e),h(o,p({chart:E,init:_}))));var o;try{r&&E.setOption(r,!0)}catch(n){if(!(n.message&&n.message.indexOf("not be called during main process")>0))throw new Error(n);E.dispose(),r&&E.setOption(r,!0)}};return c([v,w,S],O,{deep:!0}),c([d],(()=>{null==E||E.dispose(),_()})),{KidarEchartsEl:u}},render:()=>l("div",{style:"overflow:hidden !important;"},[l("div",{ref:"KidarEchartsEl",style:"height: 100%; width: 100%;"})])}),Se=e=>e;var Ee={exports:{}},xe=function(e,t){return function(){for(var r=new Array(arguments.length),o=0;o<r.length;o++)r[o]=arguments[o];return e.apply(t,r)}},_e=xe,Oe=Object.prototype.toString;function Ce(e){return"[object Array]"===Oe.call(e)}function je(e){return void 0===e}function Te(e){return null!==e&&"object"==typeof e}function ke(e){if("[object Object]"!==Oe.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function Ae(e){return"[object Function]"===Oe.call(e)}function Re(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),Ce(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(null,e[n],n,e)}var Le={isArray:Ce,isArrayBuffer:function(e){return"[object ArrayBuffer]"===Oe.call(e)},isBuffer:function(e){return null!==e&&!je(e)&&null!==e.constructor&&!je(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:Te,isPlainObject:ke,isUndefined:je,isDate:function(e){return"[object Date]"===Oe.call(e)},isFile:function(e){return"[object File]"===Oe.call(e)},isBlob:function(e){return"[object Blob]"===Oe.call(e)},isFunction:Ae,isStream:function(e){return Te(e)&&Ae(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:Re,merge:function e(){var t={};function r(r,o){ke(t[o])&&ke(r)?t[o]=e(t[o],r):ke(r)?t[o]=e({},r):Ce(r)?t[o]=r.slice():t[o]=r}for(var o=0,n=arguments.length;o<n;o++)Re(arguments[o],r);return t},extend:function(e,t,r){return Re(t,(function(t,o){e[o]=r&&"function"==typeof t?_e(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},Ne=Le;function We(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Pe=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(Ne.isURLSearchParams(t))o=t.toString();else{var n=[];Ne.forEach(t,(function(e,t){null!=e&&(Ne.isArray(e)?t+="[]":e=[e],Ne.forEach(e,(function(e){Ne.isDate(e)?e=e.toISOString():Ne.isObject(e)&&(e=JSON.stringify(e)),n.push(We(t)+"="+We(e))})))})),o=n.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e},Me=Le;function Be(){this.handlers=[]}Be.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},Be.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},Be.prototype.forEach=function(e){Me.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var Ue=Be,De=Le,qe=function(e,t,r,o,n){return e.config=t,r&&(e.code=r),e.request=o,e.response=n,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},ze=qe,Fe=function(e,t,r,o,n){var i=new Error(e);return ze(i,t,r,o,n)},Ie=Fe,He=Le,Je=He.isStandardBrowserEnv()?{write:function(e,t,r,o,n,i){var a=[];a.push(e+"="+encodeURIComponent(t)),He.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),He.isString(o)&&a.push("path="+o),He.isString(n)&&a.push("domain="+n),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},$e=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Ve=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Xe=Le,Ke=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ge=Le,Ze=Ge.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var o=e;return t&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=Ge.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0};function Qe(e){this.message=e}Qe.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Qe.prototype.__CANCEL__=!0;var Ye=Qe,et=Le,tt=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(Ie("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},rt=Je,ot=Pe,nt=function(e,t){return e&&!$e(t)?Ve(e,t):t},it=function(e){var t,r,o,n={};return e?(Xe.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=Xe.trim(e.substr(0,o)).toLowerCase(),r=Xe.trim(e.substr(o+1)),t){if(n[t]&&Ke.indexOf(t)>=0)return;n[t]="set-cookie"===t?(n[t]?n[t]:[]).concat([r]):n[t]?n[t]+", "+r:r}})),n):n},at=Ze,st=Fe,ct=gt,lt=Ye,ut=function(e){return new Promise((function(t,r){var o,n=e.data,i=e.headers,a=e.responseType;function s(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}et.isFormData(n)&&delete i["Content-Type"];var c=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(l+":"+u)}var f=nt(e.baseURL,e.url);function d(){if(c){var o="getAllResponseHeaders"in c?it(c.getAllResponseHeaders()):null,n={data:a&&"text"!==a&&"json"!==a?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:o,config:e,request:c};tt((function(e){t(e),s()}),(function(e){r(e),s()}),n),c=null}}if(c.open(e.method.toUpperCase(),ot(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(d)},c.onabort=function(){c&&(r(st("Request aborted",e,"ECONNABORTED",c)),c=null)},c.onerror=function(){r(st("Network Error",e,null,c)),c=null},c.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded",o=e.transitional||ct.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(st(t,e,o.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",c)),c=null},et.isStandardBrowserEnv()){var h=(e.withCredentials||at(f))&&e.xsrfCookieName?rt.read(e.xsrfCookieName):void 0;h&&(i[e.xsrfHeaderName]=h)}"setRequestHeader"in c&&et.forEach(i,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete i[t]:c.setRequestHeader(t,e)})),et.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&"json"!==a&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(o=function(e){c&&(r(!e||e&&e.type?new lt("canceled"):e),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o))),n||(n=null),c.send(n)}))},ft=Le,dt=function(e,t){De.forEach(e,(function(r,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[o])}))},ht=qe,pt={"Content-Type":"application/x-www-form-urlencoded"};function bt(e,t){!ft.isUndefined(e)&&ft.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var mt,yt={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(mt=ut),mt),transformRequest:[function(e,t){return dt(t,"Accept"),dt(t,"Content-Type"),ft.isFormData(e)||ft.isArrayBuffer(e)||ft.isBuffer(e)||ft.isStream(e)||ft.isFile(e)||ft.isBlob(e)?e:ft.isArrayBufferView(e)?e.buffer:ft.isURLSearchParams(e)?(bt(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ft.isObject(e)||t&&"application/json"===t["Content-Type"]?(bt(t,"application/json"),function(e,t,r){if(ft.isString(e))try{return(t||JSON.parse)(e),ft.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||yt.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,n=!r&&"json"===this.responseType;if(n||o&&ft.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(n){if("SyntaxError"===i.name)throw ht(i,this,"E_JSON_PARSE");throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ft.forEach(["delete","get","head"],(function(e){yt.headers[e]={}})),ft.forEach(["post","put","patch"],(function(e){yt.headers[e]=ft.merge(pt)}));var gt=yt,vt=Le,wt=gt,St=function(e){return!(!e||!e.__CANCEL__)},Et=Le,xt=function(e,t,r){var o=this||wt;return vt.forEach(r,(function(r){e=r.call(o,e,t)})),e},_t=St,Ot=gt,Ct=Ye;function jt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ct("canceled")}var Tt=Le,kt=function(e,t){t=t||{};var r={};function o(e,t){return Tt.isPlainObject(e)&&Tt.isPlainObject(t)?Tt.merge(e,t):Tt.isPlainObject(t)?Tt.merge({},t):Tt.isArray(t)?t.slice():t}function n(r){return Tt.isUndefined(t[r])?Tt.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function i(e){if(!Tt.isUndefined(t[e]))return o(void 0,t[e])}function a(r){return Tt.isUndefined(t[r])?Tt.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function s(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return Tt.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||n,o=t(e);Tt.isUndefined(o)&&t!==s||(r[e]=o)})),r},At="0.22.0",Rt=At,Lt={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Lt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var Nt={};Lt.transitional=function(e,t,r){function o(e,t){return"[Axios v"+Rt+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,i){if(!1===e)throw new Error(o(n," has been removed"+(t?" in "+t:"")));return t&&!Nt[n]&&(Nt[n]=!0,console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,i)}};var Wt=Le,Pt=Pe,Mt=Ue,Bt=function(e){return jt(e),e.headers=e.headers||{},e.data=xt.call(e,e.data,e.headers,e.transformRequest),e.headers=Et.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Et.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Ot.adapter)(e).then((function(t){return jt(e),t.data=xt.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return _t(t)||(jt(e),t&&t.response&&(t.response.data=xt.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Ut=kt,Dt={assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var o=Object.keys(e),n=o.length;n-- >0;){var i=o[n],a=t[i];if(a){var s=e[i],c=void 0===s||a(s,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:Lt},qt=Dt.validators;function zt(e){this.defaults=e,this.interceptors={request:new Mt,response:new Mt}}zt.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Ut(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&Dt.assertOptions(t,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var n,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!o){var a=[Bt,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),n=Promise.resolve(e);a.length;)n=n.then(a.shift(),a.shift());return n}for(var s=e;r.length;){var c=r.shift(),l=r.shift();try{s=c(s)}catch(u){l(u);break}}try{n=Bt(s)}catch(u){return Promise.reject(u)}for(;i.length;)n=n.then(i.shift(),i.shift());return n},zt.prototype.getUri=function(e){return e=Ut(this.defaults,e),Pt(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Wt.forEach(["delete","get","head","options"],(function(e){zt.prototype[e]=function(t,r){return this.request(Ut(r||{},{method:e,url:t,data:(r||{}).data}))}})),Wt.forEach(["post","put","patch"],(function(e){zt.prototype[e]=function(t,r,o){return this.request(Ut(o||{},{method:e,url:t,data:r}))}}));var Ft=zt,It=Ye;function Ht(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,o=r._listeners.length;for(t=0;t<o;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,o=new Promise((function(e){r.subscribe(e),t=e})).then(e);return o.cancel=function(){r.unsubscribe(t)},o},e((function(e){r.reason||(r.reason=new It(e),t(r.reason))}))}Ht.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Ht.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Ht.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Ht.source=function(){var e;return{token:new Ht((function(t){e=t})),cancel:e}};var Jt=Ht,$t=Le,Vt=xe,Xt=Ft,Kt=kt;var Gt=function e(t){var r=new Xt(t),o=Vt(Xt.prototype.request,r);return $t.extend(o,Xt.prototype,r),$t.extend(o,r),o.create=function(r){return e(Kt(t,r))},o}(gt);Gt.Axios=Xt,Gt.Cancel=Ye,Gt.CancelToken=Jt,Gt.isCancel=St,Gt.VERSION=At,Gt.all=function(e){return Promise.all(e)},Gt.spread=function(e){return function(t){return e.apply(null,t)}},Gt.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},Ee.exports=Gt,Ee.exports.default=Gt;var Zt=Ee.exports;const Qt={},Yt=Zt.CancelToken;function er(e,t){return Zt.post("/kidar-vue-examples/"+e,t,{headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"}}).then((e=>e))}Zt.interceptors.request.use((e=>{const t=Yt.source();return Qt[e.url]&&Qt[e.url].cancel(),Qt[e.url]=t,e.cancelToken=t.token,e}),(e=>Promise.reject(e))),Zt.interceptors.response.use((e=>e&&e.data?e.data:Promise.reject(e)),(e=>{if(e&&e.response)switch(console.warn(e.response.status,e),e.response.status){case 400:e.message="错误请求";break;case 401:e.message="未授权，请重新登录";break;case 403:e.message="拒绝访问";break;case 404:e.message="请求错误,未找到该资源";break;case 405:e.message="请求方法未允许";break;case 408:e.message="请求超时";break;case 500:e.message="服务器端出错";break;case 501:e.message="网络未实现";break;case 502:e.message="网络错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网络超时";break;case 505:e.message="http版本不支持该请求";break;default:e.message=`连接错误${e.response.status}`}return Promise.reject(e)})),Zt.defaults.headers={"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded"},Zt.defaults.timeout=1e4;export{we as K,Se as d,er as p};
