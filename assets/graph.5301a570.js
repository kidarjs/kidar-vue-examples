import{d as a}from"./network.20aa3f79.js";import{setTitle as e}from"./common.d2e9833c.js";import{SERIES_TYPE as t}from"./constant.9d141aba.js";import"./index.c2103e5d.js";import"./echarts.cd8c9dcc.js";const o=["#00f8fb","#00fe65","#fbd161","#fc5051","#f87d5a","#7b2cff","#92e1ff","#2ca1ff","#ea7ccc"],n=["#009db2","#00f8fb","#b8860b","#ff00ff","#ff6347","#4705b5","#00fe65","#0780cf","#f5616f"];var r=a({name:"graph",resetOption(a,r,f){const c=e(f),{theme:i}=f,s="dark"===i?o:n,d=[];let m=0,l=0,h=0;return r.forEach((a=>{const{name:e,value:t}=a;m=Math.max(m,t),l=Math.min(l,t),h>=s.length&&(h=0);const o={name:e,value:t,draggable:!0,itemStyle:{shadowBlur:100,shadowColor:s[h],color:s[h++]}};d.push(o)})),{title:c,legend:{show:!1},tooltip:{show:!0},series:[{id:f.chartId,animationDurationUpdate:1e3,universalTransition:!0,type:t.graph,layout:"force",colorBy:"data",force:{repulsion:200,edgeLength:10},roam:!0,label:{show:!0},symbolSize:a=>Math.ceil(a/(2*m-l)*150),data:d}],animationDurationUpdate:function(a){return 100*a},animationEasingUpdate:"bounceIn"}}});export{r as default};
