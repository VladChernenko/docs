(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[1722],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8502:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),c={title:"Listen to balance changes"},i={unversionedId:"api/examples/promise/listen-to-multiple-balances-change",id:"api/examples/promise/listen-to-multiple-balances-change",isDocsHomePage:!1,title:"Listen to balance changes",description:"This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates.",source:"@site/docs/api/examples/promise/listen-to-multiple-balances-change.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/listen-to-multiple-balances-change",permalink:"/docs/api/examples/promise/listen-to-multiple-balances-change",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/listen-to-multiple-balances-change.md",version:"current",frontMatter:{title:"Listen to balance changes"}},s=[],l={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\n// Known account we want to use (available on dev chain, with funds)\nconst ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\nconst BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';\n\nasync function main () {\n  // Create an await for the API\n  const api = await ApiPromise.create();\n\n  console.log('Tracking balances for:', [ALICE, BOB]);\n\n  // Subscribe and listen to several balance changes\n  api.query.system.account.multi([ALICE, BOB], (balances) => {\n    console.log('Change detected, new balances: ', balances.map(({ data: { free } }) => free));\n  });\n}\n\nmain().catch(console.error);\n")))}p.isMDXComponent=!0}}]);