(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4409],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6135:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={title:"Contract Tx"},s={unversionedId:"api-contract/start/contract.tx",id:"api-contract/start/contract.tx",isDocsHomePage:!1,title:"Contract Tx",description:"In addition to using the .query. on a contract, the .tx. method is provides to send an actual encoded transaction to the contract, allow for execution and have this applied in a block. Expanding on our previous examples, we can now execute and then retrieve the subsequent value -",source:"@site/docs/api-contract/start/contract.tx.md",sourceDirName:"api-contract/start",slug:"/api-contract/start/contract.tx",permalink:"/docs/api-contract/start/contract.tx",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/contract.tx.md",version:"current",frontMatter:{title:"Contract Tx"},sidebar:"reference",previous:{title:"Contract",permalink:"/docs/api-contract/start/contract.read"},next:{title:"FAQ",permalink:"/docs/api-contract/FAQ"}},c=[{value:"Weight estimation",id:"weight-estimation",children:[]},{value:"Events",id:"events",children:[]},{value:"That is it... for now",id:"that-is-it-for-now",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In addition to using the ",(0,i.kt)("inlineCode",{parentName:"p"},".query.<messageName>")," on a contract, the ",(0,i.kt)("inlineCode",{parentName:"p"},".tx.<messageName>")," method is provides to send an actual encoded transaction to the contract, allow for execution and have this applied in a block. Expanding on our previous examples, we can now execute and then retrieve the subsequent value -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// We will use these values for the execution\nconst value = 0; // only useful on isPayable messages\nconst gasLimit = 3000n * 1000000n;\nconst incValue = 1;\n\n// Send the transaction, like elsewhere this is a normal extrinsic\n// with the same rules as applied in the API (As with the read example,\n// additional params, if required can follow - here only one is needed)\nawait contract.tx\n  .inc({ value, gasLimit }, incValue)\n  .signAndSend(alicePair, (result) => {\n    if (result.status.isInBlock) {\n      console.log('in a block');\n    } else if (result.status.isFinalized) {\n      console.log('finalized');\n    }\n  });\n")),(0,i.kt)("p",null,"If we perform the same ",(0,i.kt)("inlineCode",{parentName:"p"},"query.get")," read on the value now, it would be ",(0,i.kt)("inlineCode",{parentName:"p"},"124"),". For lower-level access, like we have in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blueprint")," via ",(0,i.kt)("inlineCode",{parentName:"p"},".createContract")," you can also perform the execution via the ",(0,i.kt)("inlineCode",{parentName:"p"},".exec")," function, which would yield equivalent results -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Send the transaction, like elsewhere this is a normal submittable\n// extrinsic with the same rules as applied in the API\nawait contract\n  .exec('inc', { value, gasLimit }, incValue)\n  .signAndSend(alicePair, (result) => {\n    ...\n  });\n")),(0,i.kt)("p",null,"For the above interface we can specify the message as the string name, the index of the actual message as retrieved via the Abi."),(0,i.kt)("h2",{id:"weight-estimation"},"Weight estimation"),(0,i.kt)("p",null,"To estimate the gasLimit (which in the Substrate context refers to the weight used), we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},".query")," (read) interfaces with a sufficiently large value to retrieve the actual gas consumed. The API makes this easy - with a ",(0,i.kt)("inlineCode",{parentName:"p"},"gasLimit")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," passed to the query it will use the maximum gas limit available to transactions and the return value will have the actual gas used."),(0,i.kt)("p",null,"To see this in practice -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// We will use these values for the execution\nconst value = 0;\nconst incValue = 1;\n\n// Instead of sending we use the `call` interface via `.query` that will return\n// the gas consumed (the API aut-fill the max block tx weight when -1 is the gasLimit)\nconst { gasConsumed, result } = await contract.query.inc(slicePair, { value, gasLimit: -1 }, incValue)\n\nconsole.log(`outcome: ${result.isOk ? 'Ok' : 'Error'}`);\nconsole.log(`gasConsumed ${gasConsumed.toString()}`);\n")),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"gasConsumed")," input (potentially with a buffer for various execution paths) in any calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"contract.tx.inc(...)")," with the same input parameters specified on the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," where the estimation was done."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"On current versions of the API, any events raised by the contract will be transparently decoded with the relevant ABI and will be made available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," (from ",(0,i.kt)("inlineCode",{parentName:"p"},".signAndSend(alicePair, (result) => {...}"),") as ",(0,i.kt)("inlineCode",{parentName:"p"},"contractEvents"),"."),(0,i.kt)("p",null,"Where no events were emitted this value would be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", however should events be emitted, the array will contain all the decoded values."),(0,i.kt)("h2",{id:"that-is-it-for-now"},"That is it... for now"),(0,i.kt)("p",null,"This was a whirl-wind tour of what the API provides in terms of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," interface. It is not perfect yet, we would like to expand it to allow for greater type-checking on the contracts (instead of read/exec wit messages), but hopefully in the current state it already enhances the way you can interact with contracts."))}u.isMDXComponent=!0}}]);