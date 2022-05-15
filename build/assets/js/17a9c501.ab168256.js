"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3216],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2313:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var n=r(7462),a=r(3366),o=r(7294),c=r(3905),i=r(6010),l=r(9960),s=r(4996),u="card_hPMa";var p=function(e){var t,r=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),a="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,p=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||c)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&o.createElement("img",{src:(0,s.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,r){return o.createElement("img",{src:(0,s.Z)(t),className:"Card-icon "+(r===e.activeIndex?"Card-icon-active":""),"data-index":r,key:r})}))),e.header&&a,o.createElement("div",{className:"Card-content"},e.children))),d=(0,i.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return r?o.createElement("docs-card",{class:d},o.createElement("div",{className:(0,i.Z)(u,"docs-card")},p)):n?o.createElement("docs-card",{class:d},o.createElement("a",{className:(0,i.Z)(u,"docs-card"),href:e.href,target:"_blank"},p)):o.createElement("docs-card",{class:d},o.createElement(l.Z,{to:e.href,className:(0,i.Z)(u,"docs-card")},p))};var d=function(e){return o.createElement("docs-cards",{class:e.className},e.children)},m=["components"],f={title:"Next Steps"},h=void 0,g={type:"mdx",permalink:"/next",source:"@site/src/pages/next.md",title:"Next Steps",description:"Next Steps for Starting an App: Choose Your JavaScript Framework",frontMatter:{title:"Next Steps"}},y=[{value:"Build Your First App",id:"build-your-first-app",level:2},{value:"Build Your Second App",id:"build-your-second-app",level:2}],v={toc:y};function b(e){var t=e.components,r=(0,a.Z)(e,m);return(0,c.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("head",null,(0,c.kt)("title",null,"Next Steps for Starting an App: Choose Your JavaScript Framework"),(0,c.kt)("meta",{name:"description",content:"In order to build an Ionic app, you first need to choose the JavaScript framework you plan to use. Learn more about next steps for starting an app with Ionic."})),(0,c.kt)("h2",{id:"build-your-first-app"},"Build Your First App"),(0,c.kt)("p",null,"Pick the JavaScript framework you plan to use while building your Ionic app:"),(0,c.kt)(d,{mdxType:"DocsCards"},(0,c.kt)(p,{header:"Start with Angular",href:"/",icon:"/icons/logo-angular-icon.png",mdxType:"DocsCard"},(0,c.kt)("p",null,"A complete guide to get you up to speed with the basics of building Ionic apps with Angular.")),(0,c.kt)(p,{header:"Start with React",href:"/",icon:"/icons/logo-react-icon.png",mdxType:"DocsCard"},(0,c.kt)("p",null,"A complete guide to get you up to speed with the basics of building Ionic apps with React.")),(0,c.kt)(p,{header:"Start with Vue",href:"/",icon:"/icons/logo-vue-icon.png",mdxType:"DocsCard"},(0,c.kt)("p",null,"A complete guide to get you up to speed with the basics of building Ionic apps with Vue."))),(0,c.kt)("h2",{id:"build-your-second-app"},"Build Your Second App"))}b.isMDXComponent=!0}}]);