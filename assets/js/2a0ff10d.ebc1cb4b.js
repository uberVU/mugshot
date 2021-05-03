(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{132:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(b,".").concat(u)]||m[u]||l[u]||s;return a?r.a.createElement(h,o(o({ref:t},i),{},{components:a})):r.a.createElement(h,o({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,b=new Array(s);b[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var i=2;i<s;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),s=(a(0),a(132)),b={id:"mugshot.mugshot-1",title:"Class: Mugshot",sidebar_label:"Mugshot",custom_edit_url:null},o={unversionedId:"api/classes/mugshot.mugshot-1",id:"api/classes/mugshot.mugshot-1",isDocsHomePage:!1,title:"Class: Mugshot",description:"mugshot.Mugshot",source:"@site/docs/api/classes/mugshot.mugshot-1.md",sourceDirName:"api/classes",slug:"/api/classes/mugshot.mugshot-1",permalink:"/mugshot/api/classes/mugshot.mugshot-1",editUrl:null,version:"current",sidebar_label:"Mugshot",frontMatter:{id:"mugshot.mugshot-1",title:"Class: Mugshot",sidebar_label:"Mugshot",custom_edit_url:null},sidebar:"api",previous:{title:"Class: JimpProcessor",permalink:"/mugshot/api/classes/mugshot.jimpprocessor"},next:{title:"Class: MugshotMissingBaselineError",permalink:"/mugshot/api/classes/mugshot.mugshotmissingbaselineerror"}},c=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"check",id:"check",children:[]}]}],i={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/mugshot/api/modules/mugshot"},"mugshot"),".Mugshot"),Object(s.b)("h2",{id:"constructors"},"Constructors"),Object(s.b)("h3",{id:"constructor"},"constructor"),Object(s.b)("p",null,"+"," ",Object(s.b)("strong",{parentName:"p"},"new Mugshot"),"(",Object(s.b)("inlineCode",{parentName:"p"},"adapter"),": ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.webdriver"},Object(s.b)("em",{parentName:"a"},"Webdriver")),", ",Object(s.b)("inlineCode",{parentName:"p"},"resultsPath"),": ",Object(s.b)("em",{parentName:"p"},"string"),", ",Object(s.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.mugshotoptions"},Object(s.b)("em",{parentName:"a"},"MugshotOptions")),"): ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.mugshot-1"},Object(s.b)("em",{parentName:"a"},"Mugshot"))),Object(s.b)("p",null,"Set up Mugshot using sane defaults."),Object(s.b)("p",null,'If you need more complex options use the "advanced" form of the constructor.'),Object(s.b)("h4",{id:"parameters"},"Parameters:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:"left"},"Name"),Object(s.b)("th",{parentName:"tr",align:"left"},"Type"),Object(s.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"adapter")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.webdriver"},Object(s.b)("em",{parentName:"a"},"Webdriver"))),Object(s.b)("td",{parentName:"tr",align:"left"},"A ",Object(s.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.webdriver"},"Webdriver")," implementation to be passed to   ",Object(s.b)("a",{parentName:"td",href:"/mugshot/api/classes/mugshot.webdriverscreenshotter"},"WebdriverScreenshotter"),". If you need to pass in options to   ",Object(s.b)("inlineCode",{parentName:"td"},"WebdriverScreenshotter"),' then use the "advanced" Mugshot constructor.')),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"resultsPath")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("em",{parentName:"td"},"string")),Object(s.b)("td",{parentName:"tr",align:"left"},"A filesystem path where screenshots will be stored   using ",Object(s.b)("a",{parentName:"td",href:"/mugshot/api/classes/mugshot.fsstorage"},"FsStorage"),". If you need to pass in options to ",Object(s.b)("inlineCode",{parentName:"td"},"FsStorage"),'   then use the "advanced" Mugshot constructor.')),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"options?")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.mugshotoptions"},Object(s.b)("em",{parentName:"a"},"MugshotOptions"))),Object(s.b)("td",{parentName:"tr",align:"left"})))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.mugshot-1"},Object(s.b)("em",{parentName:"a"},"Mugshot"))),Object(s.b)("p",null,"Defined in: ",Object(s.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/5419683/packages/mugshot/src/lib/mugshot.ts#L117"},"packages/mugshot/src/lib/mugshot.ts:117")),Object(s.b)("p",null,"+"," ",Object(s.b)("strong",{parentName:"p"},"new Mugshot"),"(",Object(s.b)("inlineCode",{parentName:"p"},"screenshotter"),": ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.screenshotter"},Object(s.b)("em",{parentName:"a"},"Screenshotter")),", ",Object(s.b)("inlineCode",{parentName:"p"},"storage"),": ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.screenshotstorage"},Object(s.b)("em",{parentName:"a"},"ScreenshotStorage")),", ",Object(s.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.mugshotoptions"},Object(s.b)("em",{parentName:"a"},"MugshotOptions")),"): ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.mugshot-1"},Object(s.b)("em",{parentName:"a"},"Mugshot"))),Object(s.b)("p",null,'Set up Mugshot in "advanced" mode where you can pass in options to the\nvarious subsystems or plug in your own.'),Object(s.b)("h4",{id:"parameters-1"},"Parameters:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:"left"},"Name"),Object(s.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"screenshotter")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.screenshotter"},Object(s.b)("em",{parentName:"a"},"Screenshotter")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"storage")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.screenshotstorage"},Object(s.b)("em",{parentName:"a"},"ScreenshotStorage")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"options?")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.mugshotoptions"},Object(s.b)("em",{parentName:"a"},"MugshotOptions")))))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.mugshot-1"},Object(s.b)("em",{parentName:"a"},"Mugshot"))),Object(s.b)("p",null,"Defined in: ",Object(s.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/5419683/packages/mugshot/src/lib/mugshot.ts#L136"},"packages/mugshot/src/lib/mugshot.ts:136")),Object(s.b)("h2",{id:"methods"},"Methods"),Object(s.b)("h3",{id:"check"},"check"),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"check"),"(",Object(s.b)("inlineCode",{parentName:"p"},"name"),": ",Object(s.b)("em",{parentName:"p"},"string"),", ",Object(s.b)("inlineCode",{parentName:"p"},"selector"),": ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/types/mugshot.mugshotselector"},Object(s.b)("em",{parentName:"a"},"MugshotSelector")),", ",Object(s.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.screenshotoptions"},Object(s.b)("em",{parentName:"a"},"ScreenshotOptions")),"): ",Object(s.b)("em",{parentName:"p"},"Promise"),"<",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/types/mugshot.mugshotresult"},Object(s.b)("em",{parentName:"a"},"MugshotResult")),">"),Object(s.b)("p",null,"Check for visual regressions."),Object(s.b)("h4",{id:"parameters-2"},"Parameters:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:"left"},"Name"),Object(s.b)("th",{parentName:"tr",align:"left"},"Type"),Object(s.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"name")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("em",{parentName:"td"},"string")),Object(s.b)("td",{parentName:"tr",align:"left"},"Mugshot will ask the storage implementation for a baseline   with this name. If one is not found and ",Object(s.b)("inlineCode",{parentName:"td"},"createMissingBaselines"),"   is true then Mugshot will create a new baseline and return a passing   result. Any leftover diffs from last time will be cleaned up.    If a baseline is found then it will be compared with the screenshot   taken from ",Object(s.b)("inlineCode",{parentName:"td"},"screenshotter"),". If differences are found this will return a   failing result and a ",Object(s.b)("inlineCode",{parentName:"td"},"${name}.diff")," and a ",Object(s.b)("inlineCode",{parentName:"td"},"${name}.actual")," will be   created using ",Object(s.b)("inlineCode",{parentName:"td"},"storage"),". If no differences are found then a passing   result will be returned and any leftover diffs from last time will be   cleaned up.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"selector")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("a",{parentName:"td",href:"/mugshot/api/types/mugshot.mugshotselector"},Object(s.b)("em",{parentName:"a"},"MugshotSelector"))),Object(s.b)("td",{parentName:"tr",align:"left"},"See ",Object(s.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.screenshotter#takescreenshot"},"Screenshotter.takeScreenshot")," for more details.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"options?")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.screenshotoptions"},Object(s.b)("em",{parentName:"a"},"ScreenshotOptions"))),Object(s.b)("td",{parentName:"tr",align:"left"})))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},"Promise"),"<",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/types/mugshot.mugshotresult"},Object(s.b)("em",{parentName:"a"},"MugshotResult")),">"),Object(s.b)("p",null,"Defined in: ",Object(s.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/5419683/packages/mugshot/src/lib/mugshot.ts#L204"},"packages/mugshot/src/lib/mugshot.ts:204")),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"check"),"(",Object(s.b)("inlineCode",{parentName:"p"},"name"),": ",Object(s.b)("em",{parentName:"p"},"string"),", ",Object(s.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.screenshotoptions"},Object(s.b)("em",{parentName:"a"},"ScreenshotOptions")),"): ",Object(s.b)("em",{parentName:"p"},"Promise"),"<",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/types/mugshot.mugshotresult"},Object(s.b)("em",{parentName:"a"},"MugshotResult")),">"),Object(s.b)("p",null,"Check for visual regressions."),Object(s.b)("h4",{id:"parameters-3"},"Parameters:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:"left"},"Name"),Object(s.b)("th",{parentName:"tr",align:"left"},"Type"),Object(s.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"name")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("em",{parentName:"td"},"string")),Object(s.b)("td",{parentName:"tr",align:"left"},"Mugshot will ask the storage implementation for a baseline   with this name. If one is not found and ",Object(s.b)("inlineCode",{parentName:"td"},"createMissingBaselines"),"   is true then Mugshot will create a new baseline and return a passing   result. Any leftover diffs from last time will be cleaned up.    If a baseline is found then it will be compared with the screenshot   taken from ",Object(s.b)("inlineCode",{parentName:"td"},"screenshotter"),". If differences are found this will return a   failing result and a ",Object(s.b)("inlineCode",{parentName:"td"},"${name}.diff")," and a ",Object(s.b)("inlineCode",{parentName:"td"},"${name}.actual")," will be   created using ",Object(s.b)("inlineCode",{parentName:"td"},"storage"),". If no differences are found then a passing   result will be returned and any leftover diffs from last time will be   cleaned up.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"options?")),Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.screenshotoptions"},Object(s.b)("em",{parentName:"a"},"ScreenshotOptions"))),Object(s.b)("td",{parentName:"tr",align:"left"})))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},"Promise"),"<",Object(s.b)("a",{parentName:"p",href:"/mugshot/api/types/mugshot.mugshotresult"},Object(s.b)("em",{parentName:"a"},"MugshotResult")),">"),Object(s.b)("p",null,"Defined in: ",Object(s.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/5419683/packages/mugshot/src/lib/mugshot.ts#L228"},"packages/mugshot/src/lib/mugshot.ts:228")))}p.isMDXComponent=!0}}]);