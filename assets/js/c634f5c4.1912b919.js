(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var r=a(3),n=(a(0),a(128));const b={id:"mugshot.fsstorage",title:"Class: FsStorage",sidebar_label:"FsStorage",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/classes/mugshot.fsstorage",id:"api/classes/mugshot.fsstorage",isDocsHomePage:!1,title:"Class: FsStorage",description:"mugshot.FsStorage",source:"@site/docs/api/classes/mugshot.fsstorage.md",sourceDirName:"api/classes",slug:"/api/classes/mugshot.fsstorage",permalink:"/mugshot/api/classes/mugshot.fsstorage",editUrl:null,version:"current",sidebar_label:"FsStorage",frontMatter:{id:"mugshot.fsstorage",title:"Class: FsStorage",sidebar_label:"FsStorage",custom_edit_url:null,hide_title:!0},sidebar:"api",previous:{title:"Class: ElementNotVisibleError",permalink:"/mugshot/api/classes/mugshot.elementnotvisibleerror"},next:{title:"Class: JimpProcessor",permalink:"/mugshot/api/classes/mugshot.jimpprocessor"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"delete",id:"delete",children:[]},{value:"exists",id:"exists",children:[]},{value:"read",id:"read",children:[]},{value:"write",id:"write",children:[]}]}],l={toc:c};function o({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/mugshot/api/modules/mugshot"},"mugshot"),".FsStorage"),Object(n.b)("p",null,"Write and read baselines to and from the local file system."),Object(n.b)("p",null,"Screenshots will be saved with a ",Object(n.b)("inlineCode",{parentName:"p"},".png")," extension."),Object(n.b)("h2",{id:"implements"},"Implements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/mugshot/api/interfaces/mugshot.screenshotstorage"},Object(n.b)("em",{parentName:"a"},"ScreenshotStorage")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new FsStorage"),"(",Object(n.b)("inlineCode",{parentName:"p"},"resultsPath"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.fsstorage"},Object(n.b)("em",{parentName:"a"},"FsStorage"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"resultsPath")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string")),Object(n.b)("td",{parentName:"tr",align:"left"},"An absolute path or a path relative to cwd. The entire   parent folder structure will be created if missing.")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.fsstorage"},Object(n.b)("em",{parentName:"a"},"FsStorage"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/mugshot/src/lib/fs-storage.ts#L10"},"packages/mugshot/src/lib/fs-storage.ts:10")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"delete"},"delete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"delete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"name"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(n.b)("p",null,"Delete the screenshot for ",Object(n.b)("inlineCode",{parentName:"p"},"name"),"."),Object(n.b)("p",null,"If the screenshot doesn't exist, this should be a no-op."),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"name")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(n.b)("p",null,"Implementation of: ScreenshotStorage.delete"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/mugshot/src/lib/fs-storage.ts#L24"},"packages/mugshot/src/lib/fs-storage.ts:24")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"exists"},"exists"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"exists"),"(",Object(n.b)("inlineCode",{parentName:"p"},"name"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<boolean",">"),Object(n.b)("p",null,"Check whether a screenshot exists for ",Object(n.b)("inlineCode",{parentName:"p"},"name"),"."),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"name")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<boolean",">"),Object(n.b)("p",null,"Implementation of: ScreenshotStorage.exists"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/mugshot/src/lib/fs-storage.ts#L20"},"packages/mugshot/src/lib/fs-storage.ts:20")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"read"},"read"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"read"),"(",Object(n.b)("inlineCode",{parentName:"p"},"name"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(n.b)("p",null,"Return the screenshot for ",Object(n.b)("inlineCode",{parentName:"p"},"name")," as a PNG encoded buffer."),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"name")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(n.b)("p",null,"Implementation of: ScreenshotStorage.read"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/mugshot/src/lib/fs-storage.ts#L22"},"packages/mugshot/src/lib/fs-storage.ts:22")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"write"},"write"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"write"),"(",Object(n.b)("inlineCode",{parentName:"p"},"name"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("em",{parentName:"p"},"Buffer"),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(n.b)("p",null,"Write a screenshot for ",Object(n.b)("inlineCode",{parentName:"p"},"name"),"."),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"name")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"Buffer"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(n.b)("p",null,"Implementation of: ScreenshotStorage.write"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/mugshot/src/lib/fs-storage.ts#L17"},"packages/mugshot/src/lib/fs-storage.ts:17")))}o.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),i=p(a),u=r,O=i["".concat(s,".").concat(u)]||i[u]||m[u]||b;return a?n.a.createElement(O,c(c({ref:t},o),{},{components:a})):n.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,s=new Array(b);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var o=2;o<b;o++)s[o]=a[o];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);