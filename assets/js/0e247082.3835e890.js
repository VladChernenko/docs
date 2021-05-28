(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[358],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8929:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={title:"ApiPromise Examples",slug:"/api/examples/promise"},l={unversionedId:"api/examples/promise/intro",id:"api/examples/promise/intro",isDocsHomePage:!1,title:"ApiPromise Examples",description:"Here you will find a list of examples that takes you through the basics of connecting to a local node, retrieving data from the Node and chain and execute transactions on the chain. It uses the [[ApiPromise]] interface.",source:"@site/docs/api/examples/promise/intro.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise",permalink:"/docs/api/examples/promise",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/intro.md",version:"current",frontMatter:{title:"ApiPromise Examples",slug:"/api/examples/promise"},sidebar:"reference",previous:{title:"Transactions",permalink:"/docs/api/cookbook/tx"},next:{title:"Simple Connect",permalink:"/docs/api/examples/promise/simple-connect"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Running the examples",id:"running-the-examples",children:[]},{value:"Development accounts",id:"development-accounts",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here you will find a list of examples that takes you through the basics of connecting to a local node, retrieving data from the Node and chain and execute transactions on the chain. It uses the [","[ApiPromise]","] interface."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"For the following examples, you need a local node. It is usually convenient testing with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"substrate --dev\n")),(0,i.kt)("h2",{id:"running-the-examples"},"Running the examples"),(0,i.kt)("p",null,"From each folder, run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," to install the required dependencies and then run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," to execute the example against the running node."),(0,i.kt)("h2",{id:"development-accounts"},"Development accounts"),(0,i.kt)("p",null,"Some of the examples use the following accounts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alice: ",(0,i.kt)("inlineCode",{parentName:"li"},"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY")),(0,i.kt)("li",{parentName:"ul"},"Bob: ",(0,i.kt)("inlineCode",{parentName:"li"},"5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"))),(0,i.kt)("p",null,"Those accounts are easy to add if you don't have/see them. The seed of Alice's account is ",(0,i.kt)("inlineCode",{parentName:"p"},"//Alice")," (via ",(0,i.kt)("inlineCode",{parentName:"p"},"keyring.addUri(...)"),", dev seed implied) and the seed of Bob is... well you guess..."))}c.isMDXComponent=!0}}]);