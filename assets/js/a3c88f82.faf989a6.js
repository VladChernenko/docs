(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4548],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7355:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i={},c={unversionedId:"api/examples/rxjs/upgrade_chain/README",id:"api/examples/rxjs/upgrade_chain/README",isDocsHomePage:!1,title:"Chain upgrade",description:"Performs a chain upgrade using the sudo module. This may brick your chain, so us it as an educational sample. (use substrate --dev purge-chain to remove DB and recover).",source:"@site/docs/api/examples/rxjs/10_upgrade_chain/README.md",sourceDirName:"api/examples/rxjs/10_upgrade_chain",slug:"/api/examples/rxjs/upgrade_chain/README",permalink:"/docs/api/examples/rxjs/upgrade_chain/README",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/rxjs/10_upgrade_chain/README.md",version:"current",frontMatter:{}},u=[],p={toc:u};function s(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Performs a chain upgrade using the ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," module. This may brick your chain, so us it as an educational sample. (use ",(0,o.kt)("inlineCode",{parentName:"p"},"substrate --dev purge-chain")," to remove DB and recover)."),(0,o.kt)("p",null,"<<< @/docs/examples/rx/10_upgrade_chain/index.js"))}s.isMDXComponent=!0}}]);