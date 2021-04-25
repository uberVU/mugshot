(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),n=(a(0),a(128));const b={id:"_mugshot_playwright.playwrightadapter",title:"Class: PlaywrightAdapter",sidebar_label:"PlaywrightAdapter",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/_mugshot_playwright.playwrightadapter",id:"api/classes/_mugshot_playwright.playwrightadapter",isDocsHomePage:!1,title:"Class: PlaywrightAdapter",description:"@mugshot/playwright.PlaywrightAdapter",source:"@site/docs/api/classes/_mugshot_playwright.playwrightadapter.md",sourceDirName:"api/classes",slug:"/api/classes/_mugshot_playwright.playwrightadapter",permalink:"/mugshot/api/classes/_mugshot_playwright.playwrightadapter",editUrl:null,version:"current",sidebar_label:"PlaywrightAdapter",frontMatter:{id:"_mugshot_playwright.playwrightadapter",title:"Class: PlaywrightAdapter",sidebar_label:"PlaywrightAdapter",custom_edit_url:null,hide_title:!0},sidebar:"api",previous:{title:"Enumeration: Fixture",permalink:"/mugshot/api/enums/_mugshot_contracts.fixture"},next:{title:"Class: PuppeteerAdapter",permalink:"/mugshot/api/classes/_mugshot_puppeteer.puppeteeradapter"}},i=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"execute",id:"execute",children:[]},{value:"getElementRect",id:"getelementrect",children:[]},{value:"setViewportSize",id:"setviewportsize",children:[]},{value:"takeViewportScreenshot",id:"takeviewportscreenshot",children:[]}]}],c={toc:i};function l({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/mugshot/api/modules/_mugshot_playwright"},"@mugshot/playwright"),".PlaywrightAdapter"),Object(n.b)("p",null,"Adapter over ",Object(n.b)("a",{parentName:"p",href:"https://github.com/microsoft/playwright"},"Playwright")," to be\nused with ",Object(n.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.webdriverscreenshotter"},"WebdriverScreenshotter"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-ts"},"import { Mugshot } from 'mugshot';\nimport { PlaywrightAdapter } from '@mugshot/playwright';\nimport playwright from 'playwright';\n\nconst browser = await playwright.chromium.launch();\nconst context = await browser.newContext();\nconst page = await context.newPage();\n\nconst mugshot = new Mugshot(\n  new PlaywrightAdapter(page),\n  './screenshots'\n);\n")),Object(n.b)("h2",{id:"implements"},"Implements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/mugshot/api/interfaces/mugshot.webdriver"},Object(n.b)("em",{parentName:"a"},"Webdriver")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new PlaywrightAdapter"),"(",Object(n.b)("inlineCode",{parentName:"p"},"page"),": ",Object(n.b)("em",{parentName:"p"},"Page"),"): ",Object(n.b)("a",{parentName:"p",href:"/mugshot/api/classes/_mugshot_playwright.playwrightadapter"},Object(n.b)("em",{parentName:"a"},"PlaywrightAdapter"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"page")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"Page")),Object(n.b)("td",{parentName:"tr",align:"left"},"The return value of ",Object(n.b)("inlineCode",{parentName:"td"},"newPage()"),".")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/mugshot/api/classes/_mugshot_playwright.playwrightadapter"},Object(n.b)("em",{parentName:"a"},"PlaywrightAdapter"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/playwright/src/index.ts#L27"},"packages/playwright/src/index.ts:27")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"execute"},"execute"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"execute"),"<R, A",">","(",Object(n.b)("inlineCode",{parentName:"p"},"func"),": (...",Object(n.b)("inlineCode",{parentName:"p"},"args"),": A) => R, ...",Object(n.b)("inlineCode",{parentName:"p"},"args"),": A): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<R",">"),Object(n.b)("p",null,"Execute a function in the current page context."),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"R")),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"A")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"any"),"[]")))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"func")),Object(n.b)("td",{parentName:"tr",align:"left"},"(...",Object(n.b)("inlineCode",{parentName:"td"},"args"),": A) => R")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"...args")),Object(n.b)("td",{parentName:"tr",align:"left"},"A")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<R",">"),Object(n.b)("p",null,"Implementation of: Webdriver.execute"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/playwright/src/index.ts#L36"},"packages/playwright/src/index.ts:36")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getelementrect"},"getElementRect"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getElementRect"),"(",Object(n.b)("inlineCode",{parentName:"p"},"selector"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("inlineCode",{parentName:"p"},"null")," ","|"," { ",Object(n.b)("inlineCode",{parentName:"p"},"height"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"width"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"x"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"y"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0 } ","|"," { ",Object(n.b)("inlineCode",{parentName:"p"},"height"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"width"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"x"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"y"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0 }[]",">"),Object(n.b)("p",null,"Get the dimensions and coordinates of an element."),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"selector")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("inlineCode",{parentName:"p"},"null")," ","|"," { ",Object(n.b)("inlineCode",{parentName:"p"},"height"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"width"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"x"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"y"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0 } ","|"," { ",Object(n.b)("inlineCode",{parentName:"p"},"height"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"width"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"x"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0; ",Object(n.b)("inlineCode",{parentName:"p"},"y"),": ",Object(n.b)("em",{parentName:"p"},"number")," = 0 }[]",">"),Object(n.b)("p",null,"Implementation of: Webdriver.getElementRect"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/playwright/src/index.ts#L46"},"packages/playwright/src/index.ts:46")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"setviewportsize"},"setViewportSize"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"setViewportSize"),"(",Object(n.b)("inlineCode",{parentName:"p"},"width"),": ",Object(n.b)("em",{parentName:"p"},"number"),", ",Object(n.b)("inlineCode",{parentName:"p"},"height"),": ",Object(n.b)("em",{parentName:"p"},"number"),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(n.b)("p",null,"Set the size of the ",Object(n.b)("strong",{parentName:"p"},"viewport")," (meaning window minus chrome)."),Object(n.b)("p",null,"This is unlike setWindowRect which doesn't take the chrome into account."),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"width")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"height")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"number"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(n.b)("p",null,"Implementation of: Webdriver.setViewportSize"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/playwright/src/index.ts#L60"},"packages/playwright/src/index.ts:60")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"takeviewportscreenshot"},"takeViewportScreenshot"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"takeViewportScreenshot"),"(): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<string",">"),Object(n.b)("p",null,"Take a viewport screenshot and return a base64 string."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<string",">"),Object(n.b)("p",null,"Implementation of: Webdriver.takeViewportScreenshot"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/cab11d5/packages/playwright/src/index.ts#L33"},"packages/playwright/src/index.ts:33")))}l.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),m=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),o=m(a),d=r,O=o["".concat(p,".").concat(d)]||o[d]||s[d]||b;return a?n.a.createElement(O,i(i({ref:t},l),{},{components:a})):n.a.createElement(O,i({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,p=new Array(b);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<b;l++)p[l]=a[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);