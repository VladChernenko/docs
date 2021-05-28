(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[6277],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6663:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={title:"Overview",slug:"/util-crypto/examples"},l={unversionedId:"util-crypto/examples/intro",id:"util-crypto/examples/intro",isDocsHomePage:!1,title:"Overview",description:"Here you will find a list of examples that takes you through the basics of encrypting and decrypting messages using NaCl, signing a message with a seed and verifying it using NaCl, and generating and validating mnemonics for account seeds.",source:"@site/docs/util-crypto/examples/intro.md",sourceDirName:"util-crypto/examples",slug:"/util-crypto/examples",permalink:"/docs/util-crypto/examples",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/util-crypto/examples/intro.md",version:"current",frontMatter:{title:"Overview",slug:"/util-crypto/examples"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/util-crypto"},next:{title:"Create Mnemonic",permalink:"/docs/util-crypto/examples/create-mnemonic"}},c=[{value:"Running the examples",id:"running-the-examples",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here you will find a list of examples that takes you through the basics of encrypting and decrypting messages using NaCl, signing a message with a seed and verifying it using NaCl, and generating and validating mnemonics for account seeds."),(0,o.kt)("h2",{id:"running-the-examples"},"Running the examples"),(0,o.kt)("p",null,"From within each folder run the following to install required dependencies and to execute the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn;\nyarn start\n")))}u.isMDXComponent=!0}}]);