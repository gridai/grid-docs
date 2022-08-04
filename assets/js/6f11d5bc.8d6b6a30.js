"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[7220],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),l=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},c=function(t){var e=l(t.components);return r.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=l(a),m=n,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(f,s(s({ref:e},c),{},{components:a})):r.createElement(f,s({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8577:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],i={description:"Datastores are low-latency, high-performance, auto-versioned datasets."},d="\u26a1Datastores",l={unversionedId:"features/datastores/README",id:"features/datastores/README",title:"\u26a1Datastores",description:"Datastores are low-latency, high-performance, auto-versioned datasets.",source:"@site/docs/features/datastores/README.md",sourceDirName:"features/datastores",slug:"/features/datastores/",permalink:"/features/datastores/",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/datastores/README.md",tags:[],version:"current",lastUpdatedAt:1659650559,formattedLastUpdatedAt:"8/4/2022",frontMatter:{description:"Datastores are low-latency, high-performance, auto-versioned datasets."},sidebar:"tutorialSidebar",previous:{title:"Viewing Login Credentials",permalink:"/getting-started/your-login-credentials"},next:{title:"Overview",permalink:"/features/datastores/datastore-overview"}},c=[{value:"Datastores (scalable datasets)",id:"datastores-scalable-datasets",children:[],level:2},{value:"Product Tour",id:"product-tour",children:[],level:2},{value:"Data inside the model script",id:"data-inside-the-model-script",children:[],level:2},{value:"Datastore paths",id:"datastore-paths",children:[],level:2}],u={toc:c};function p(t){var e=t.components,i=(0,n.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datastores"},"\u26a1Datastores"),(0,o.kt)("h2",{id:"datastores-scalable-datasets"},"Datastores (scalable datasets)"),(0,o.kt)("p",null,"In Grid, we've introduced ",(0,o.kt)("em",{parentName:"p"},"Datastores"),", high-performance, low-latency, versioned datasets."),(0,o.kt)("p",null,"Datastores can be attached to Runs or Sessions and preserve the file format and directory structure of the data used to create them."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(665).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We don't charge for data storage!"))),(0,o.kt)("h2",{id:"product-tour"},"Product Tour"),(0,o.kt)("p",null,"Upload data to Grid using Datastores. Datastores are low-latency, auto-versioned datasets."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://platform.grid.ai/#/dashboard?product_tour_id=221979"},"Click here for the 1-minute product tour")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(684).Z})),(0,o.kt)("h2",{id:"data-inside-the-model-script"},"Data inside the model script"),(0,o.kt)("p",null,"Perhaps the simplest way is when your model script downloads the data."),(0,o.kt)("p",null,"Let's illustrate with PyTorch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from torchvision.datasets import MNIST\nfrom torchvision import transforms\n\n# this line automatically downloads data\ndataset = MNIST(os.getcwd(), download=True, transform=transforms.ToTensor())\n")),(0,o.kt)("p",null,"Pros:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simplest approach"),(0,o.kt)("li",{parentName:"ul"},"Enables the fastest iteration")),(0,o.kt)("p",null,"Cons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Downloads every time a job starts"),(0,o.kt)("li",{parentName:"ul"},"Spends compute money on data downloading")),(0,o.kt)("h2",{id:"datastore-paths"},"Datastore paths"),(0,o.kt)("p",null,"Once you have created a datastore, simply pass in its name to your script and Grid will auto-resolve the path. Assume you have a datastore named ",(0,o.kt)("em",{parentName:"p"},"cats")," and you want to use version 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid run main.py --data_dir /datastores/cats/1\n")))}p.isMDXComponent=!0},684:function(t,e,a){e.Z=a.p+"assets/images/datastores-product-tour-11c3a6392f49070318df6e61de14881e.png"},665:function(t,e,a){e.Z=a.p+"assets/images/jobs-5027569ba03744a6c182cb23df43378f.jpg"}}]);