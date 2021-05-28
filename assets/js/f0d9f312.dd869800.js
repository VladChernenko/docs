(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4028],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3740:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i={title:"Hash Data"},l={unversionedId:"util-crypto/examples/hash-data",id:"util-crypto/examples/hash-data",isDocsHomePage:!1,title:"Hash Data",description:"There are many different hashing algorithms exposed in the util-crypto package.",source:"@site/docs/util-crypto/examples/hash-data.md",sourceDirName:"util-crypto/examples",slug:"/util-crypto/examples/hash-data",permalink:"/docs/util-crypto/examples/hash-data",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/util-crypto/examples/hash-data.md",version:"current",frontMatter:{title:"Hash Data"},sidebar:"reference",previous:{title:"Verify Signature",permalink:"/docs/util-crypto/examples/verify-signature"},next:{title:"FAQ",permalink:"/docs/util-crypto/FAQ"}},c=[],p={toc:c};function s(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are many different hashing algorithms exposed in the util-crypto package."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Blake2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Keccak")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"sha512")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"for all of them see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src"},"here")),(0,o.kt)("p",{parentName:"li"}," Example of Blake2 hashing"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { blake2AsHex } = require('@polkadot/util-crypto');\nconst hash = blake2AsHex(\"data goes here\")\nconsole.log(hash)\n//result: { hash: '0xce73267ed8316b4350672f32ba49af86a7ae7af1267beb868a27f3fda03c044a' }\n")))))}s.isMDXComponent=!0}}]);