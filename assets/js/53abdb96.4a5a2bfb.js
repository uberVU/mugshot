(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,g=l["".concat(o,".").concat(m)]||l[m]||b[m]||a;return n?i.a.createElement(g,s(s({ref:t},p),{},{components:n})):i.a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(132)),o={id:"mugshot.mugshotoptions",title:"Interface: MugshotOptions",sidebar_label:"MugshotOptions",custom_edit_url:null},s={unversionedId:"api/interfaces/mugshot.mugshotoptions",id:"api/interfaces/mugshot.mugshotoptions",isDocsHomePage:!1,title:"Interface: MugshotOptions",description:"mugshot.MugshotOptions",source:"@site/docs/api/interfaces/mugshot.mugshotoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mugshot.mugshotoptions",permalink:"/mugshot/api/interfaces/mugshot.mugshotoptions",editUrl:null,version:"current",sidebar_label:"MugshotOptions",frontMatter:{id:"mugshot.mugshotoptions",title:"Interface: MugshotOptions",sidebar_label:"MugshotOptions",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: MugshotIdenticalResult",permalink:"/mugshot/api/interfaces/mugshot.mugshotidenticalresult"},next:{title:"Interface: PNGDiffer",permalink:"/mugshot/api/interfaces/mugshot.pngdiffer"}},c=[{value:"Properties",id:"properties",children:[{value:"createMissingBaselines",id:"createmissingbaselines",children:[]},{value:"pngDiffer",id:"pngdiffer",children:[]},{value:"updateBaselines",id:"updatebaselines",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/mugshot/api/modules/mugshot"},"mugshot"),".MugshotOptions"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"createmissingbaselines"},"createMissingBaselines"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"createMissingBaselines"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"If set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," then ",Object(a.b)("inlineCode",{parentName:"p"},"Mugshot.check")," will pass if a baseline is not\nfound and it will create the baseline from the screenshot it\ntakes."),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/5419683/packages/mugshot/src/lib/mugshot.ts#L92"},"packages/mugshot/src/lib/mugshot.ts:92")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"pngdiffer"},"pngDiffer"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"pngDiffer"),": ",Object(a.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.pngdiffer"},Object(a.b)("em",{parentName:"a"},"PNGDiffer"))),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/5419683/packages/mugshot/src/lib/mugshot.ts#L85"},"packages/mugshot/src/lib/mugshot.ts:85")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"updatebaselines"},"updateBaselines"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"updateBaselines"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"When set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," then ",Object(a.b)("inlineCode",{parentName:"p"},"Mugshot.check")," will overwrite any existing baselines\nand will create missing ones (implies setting\n",Object(a.b)("inlineCode",{parentName:"p"},"createMissingBaselines: true"),")."),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/5419683/packages/mugshot/src/lib/mugshot.ts#L99"},"packages/mugshot/src/lib/mugshot.ts:99")))}u.isMDXComponent=!0}}]);