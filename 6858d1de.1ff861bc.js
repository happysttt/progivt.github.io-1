(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{108:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,d=s["".concat(i,".").concat(f)]||s[f]||b[f]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},109:function(e,t,r){"use strict";var n=r(0),o=r(21);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},110:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(109),o=r(114);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},114:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(108)),i=r(110),c={slug:"deadline-updates",title:"\u041d\u043e\u0432\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",author:"ThePetrovich",author_url:"https://github.com/thepetrovich",author_image_url:"https://avatars3.githubusercontent.com/u/7692391?v=4",tags:["coder","react","labs"]},u={permalink:"/blog/deadline-updates",editUrl:"https://github.com/progivt/progivt.github.io/edit/main/blog/2020-11-13-deadline-updates.md",source:"@site/blog/2020-11-13-deadline-updates.md",description:"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e GitHub \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u0432\u0430\u0441 \u043c\u043e\u0436\u0435\u0442 \u0434\u043e\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b. \u042f \u0440\u0435\u0448\u0438\u043b \u043f\u0440\u0438\u043a\u0440\u0443\u0442\u0438\u0442\u044c \u043d\u0430 \u0441\u0430\u0439\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0435 \u043e\u0442\u0441\u0447\u0435\u0442\u044b \u043a \u043b\u0430\u0431\u0430\u043c.",date:"2020-11-13T00:00:00.000Z",tags:[{label:"coder",permalink:"/blog/tags/coder"},{label:"react",permalink:"/blog/tags/react"},{label:"labs",permalink:"/blog/tags/labs"}],title:"\u041d\u043e\u0432\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",readingTime:.25,truncated:!1,prevItem:{title:"\u041f\u0440\u0438\u0432\u0435\u0442 \u043e\u0442 \u0421\u0435\u0440\u0433\u0435\u044f",permalink:"/blog/\u0440i"},nextItem:{title:"\u0414\u043e\u043c \u0441 \u0434\u0443\u0448\u043e\u0439",permalink:"/blog/cool-house"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e GitHub \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u0432\u0430\u0441 \u043c\u043e\u0436\u0435\u0442 \u0434\u043e\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b. \u042f \u0440\u0435\u0448\u0438\u043b \u043f\u0440\u0438\u043a\u0440\u0443\u0442\u0438\u0442\u044c \u043d\u0430 \u0441\u0430\u0439\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0435 \u043e\u0442\u0441\u0447\u0435\u0442\u044b \u043a \u043b\u0430\u0431\u0430\u043c."),Object(a.b)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u044c \u0437\u0430 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0435\u043d\u0438\u0435\u043c ",Object(a.b)("strong",{parentName:"p"},"\u0434\u0435\u0434\u043b\u0430\u0439\u043d\u043e\u0432"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"\u0421\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043b\u0430\u0431\u044b, \u0433\u043b\u0443\u043f\u0446\u044b!")),Object(a.b)("img",{alt:"\u0412\u0440\u0435\u043c\u0435\u043d\u0438 \u043c\u043d\u043e\u0433\u043e, \u043f\u043e\u0439\u0434\u0443 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u044e \u043c\u0435\u043c\u0447\u0438\u043a\u0438",src:Object(i.a)("img/deadline-demo1.png")}),"  ",Object(a.b)("img",{alt:"This is fine.",src:Object(i.a)("img/deadline-demo2.png")}))}s.isMDXComponent=!0}}]);