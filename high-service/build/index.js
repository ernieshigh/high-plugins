!function(){"use strict";var e,t={906:function(){var e=window.wp.blocks;function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}var n=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor),o=window.wp.components;const l=[{color:"#ffffff",name:"White"},{color:"#000000",name:"Black"},{color:"#58A445",name:"Green"},{color:"#1d2a53",name:"Blue"}];(0,e.registerBlockType)("high/high-service",{attributes:{title:{type:"string",selector:" h3",default:"A High Service"},mediaID:{type:"number"},mediaURL:{type:"string",selector:"img",attribute:"src"},description:{type:"array",source:"children",selector:".high-service-description"},backgroundColor:{type:"string"},textColor:{type:"string"},alignment:{type:"string"}},edit:function({attributes:e,isSelected:a,setAttributes:c}){const{title:i,alignment:s,backgroundColor:u,textColor:g}=e;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.InspectorControls,null,(0,n.createElement)(o.Panel,null,(0,n.createElement)(o.PanelRow,null,(0,n.createElement)("label",null,"Background"),(0,n.createElement)(o.ColorPalette,{colors:[...l],value:u,onChange:e=>{c({backgroundColor:e})}})),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)("label",null,"Text Color"),(0,n.createElement)(o.ColorPalette,{value:g,colors:[...l],onChange:e=>{c({textColor:e})}})))),",",(0,n.createElement)("div",t({},(0,r.useBlockProps)(),{style:{textAlign:s,backgroundColor:u,color:g}}),(0,n.createElement)(r.BlockControls,null,(0,n.createElement)(r.AlignmentToolbar,{value:s,onChange:e=>c({alignment:e})})),(0,n.createElement)(r.InnerBlocks,{template:[["core/heading",{content:"High Service Title",className:"service-heading"}],["core/image",{}],["core/paragraph",{content:"Summary"}]],templateLock:"all"})))},save:function({attributes:e}){r.useBlockProps.save();const{title:o,alignment:l,backgroundColor:a,textColor:c}=e;return(0,n.createElement)("div",t({},r.useBlockProps.save(),{style:{textAlign:l,backgroundColor:a,color:c}}),(0,n.createElement)(r.InnerBlocks.Content,null))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,o,l){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],l=e[u][2];for(var c=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(c=!1,l<a&&(a=l));if(c){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,o,l]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,a=n[0],c=n[1],i=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(i)var u=i(r)}for(t&&t(n);s<a.length;s++)l=a[s],r.o(e,l)&&e[l]&&e[l][0](),e[a[s]]=0;return r.O(u)},n=self.webpackChunkhigh_service=self.webpackChunkhigh_service||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[46],(function(){return r(906)}));o=r.O(o)}();