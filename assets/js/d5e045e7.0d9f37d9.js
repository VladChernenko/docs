(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[2873],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6126:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={title:"React"},c={unversionedId:"ui-identicon/react",id:"ui-identicon/react",isDocsHomePage:!1,title:"React",description:"A generic identity icon that can render icons based on the theme, be it Substrate or Polkadot",source:"@site/docs/ui-identicon/react.md",sourceDirName:"ui-identicon",slug:"/ui-identicon/react",permalink:"/docs/ui-identicon/react",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-identicon/react.md",version:"current",frontMatter:{title:"React"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/ui-identicon"},next:{title:"React Native",permalink:"/docs/ui-identicon/react-native"}},s=[{value:"Usage Examples",id:"usage-examples",children:[]}],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A generic identity icon that can render icons based on the theme, be it Substrate or Polkadot"),(0,i.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,i.kt)("p",null,"To install the component, do ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/react-identicon")),(0,i.kt)("p",null,"Inside a React component, you can now render any account with the associated icon -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import Identicon from '@polkadot/react-identicon';\n\n...\nrender () {\n  // address is an ss58-encoded address or publicKey (hex string or Uint8Array)\n  const { address } = this.props;\n  // size (optional) is a number, indicating the size (in pixels, 64 as default)\n  const size = 32;\n  // theme (optional), depicts the type of icon, one of\n  // 'polkadot', 'substrate' (default), 'beachball' or 'jdenticon'\n  const theme = 'polkadot';\n\n  // standard className & style props are also available\n  return (\n    <Identicon\n      value={address}\n      size={size}\n      theme={theme}\n    />\n  );\n}\n...\n")))}u.isMDXComponent=!0}}]);