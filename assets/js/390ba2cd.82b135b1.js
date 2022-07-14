"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[2592],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3877:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),o=["components"],i={title:"Overview",sidebar_label:"Overview"},l="Demystifying Datastores",d={unversionedId:"features/datastores/datastore-overview",id:"features/datastores/datastore-overview",title:"Overview",description:"Datastores are high-performance, low-latency, versioned, and scalable datasets which can",source:"@site/docs/features/datastores/1_datastore-overview.md",sourceDirName:"features/datastores",slug:"/features/datastores/datastore-overview",permalink:"/features/datastores/datastore-overview",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/datastores/1_datastore-overview.md",tags:[],version:"current",lastUpdatedAt:1657808501,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview"},sidebar:"tutorialSidebar",previous:{title:"\u26a1Datastores",permalink:"/features/datastores/"},next:{title:"How to use Datastores",permalink:"/features/datastores/Using Datastores/How-to-use-datastores"}},p=[{value:"What file types are supported",id:"what-file-types-are-supported",children:[],level:2},{value:"Why use Datastores",id:"why-use-datastores",children:[{value:"Capabilities",id:"capabilities",children:[],level:3},{value:"High-Performance Datastores (BYOC users only)",id:"high-performance-datastores-byoc-users-only",children:[],level:3},{value:"How do I access the data in a datastore?",id:"how-do-i-access-the-data-in-a-datastore",children:[],level:3}],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],c={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"demystifying-datastores"},"Demystifying Datastores"),(0,s.kt)("p",null,"Datastores are high-performance, low-latency, versioned, and scalable datasets which can\nbe instantly mounted into any ",(0,s.kt)("a",{parentName:"p",href:"/features/sessions/"},"Session")," or\n",(0,s.kt)("a",{parentName:"p",href:"/features/runs/README"},"Run"),"."),(0,s.kt)("h2",{id:"what-file-types-are-supported"},"What file types are supported"),(0,s.kt)("p",null,"Datastores can be created from any file type. Grid treats each file as a collection of\nbytes which exist with a particular name within a directory structure (e.g.\n",(0,s.kt)("inlineCode",{parentName:"p"},"./dir/some-image.jpg"),"). "),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In order to ensure complete data privacy & flexibility of use, Grid never attempts to\nprocess the contents of the files or infer/optimize for any particular usage behaviors based\non file contents. "))),(0,s.kt)("h2",{id:"why-use-datastores"},"Why use Datastores"),(0,s.kt)("p",null,"Datastores are backed by cloud storage. They are made available to\ncompute jobs as part of a read-only filesystem. If you have a compute script which reads\nfiles in a directory structure on your local computer, then the only thing you need to\nchange when running on Grid is the location of the ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," directory! "),(0,s.kt)("p",null,"Datastores are ",(0,s.kt)("em",{parentName:"p"},"a necessity when dealing with data at scale")," (e.g. data which cannot be\nreasonably downloaded from some HTTP URL when a compute job starts up) by providing a\n",(0,s.kt)("strong",{parentName:"p"},"singular & immutable dataset resource of near unlimited scale.")," "),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'A single datastore can be mounted into tens or hundreds of concurrently running compute\njobs in seconds, ensuring that no expensive compute time is wasted waiting for data to\ndownload, extract, or otherwise "process" before you can move on to the real work. '))),(0,s.kt)("p",null,"We know how important a role your data plays in everything you run on Grid. We've put an\nincredible amount of time and effort into creating a truly unique ",(0,s.kt)("em",{parentName:"p"},"optimization pipeline"),"\nwhich removes every bit of latency possible from the point your program calls ",(0,s.kt)("inlineCode",{parentName:"p"},"with\nopen(filename, 'r') as f:")," to the instant that data is provided to you. You'll find\ntraversing the data directory structure in a ",(0,s.kt)("a",{parentName:"p",href:"/features/sessions/"},"session"),"\nindistinguishable from the experience of ",(0,s.kt)("inlineCode",{parentName:"p"},"cd"),"-ing around your local workstation."),(0,s.kt)("p",null,"Grid Datastores are an easy way to deal with data in the cloud. Our\ncapabilities and performances are constantly evolving.  We believe you'll love the\nsimplicity and experience of using them! "),(0,s.kt)("h3",{id:"capabilities"},"Capabilities"),(0,s.kt)("p",null,"Datastores today have 3 main capabilities:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Can be created from S3 buckets in both Grid Cloud and Bring Your Own Cloud\nenvironments"),(0,s.kt)("li",{parentName:"ol"},"Attachable to ",(0,s.kt)("a",{parentName:"li",href:"/features/runs/README"},"Runs")," and\n",(0,s.kt)("a",{parentName:"li",href:"/features/sessions/"},"Sessions")),(0,s.kt)("li",{parentName:"ol"},"Create-able from your local machine, Sessions, or Cluster!")),(0,s.kt)("h3",{id:"high-performance-datastores-byoc-users-only"},"High-Performance Datastores (BYOC users only)"),(0,s.kt)("p",null,"High Performance Datastores (HPDs) allow Bring Your Own Cloud customers who are looking to scale large datasets to optimize latency and significantly speed up data access. Currently, HPDs are backed by the FSx for Lustre service and offer more scalability and higher throughput than conventional Grid datastores backed by AWS S3. "),(0,s.kt)("p",null,"HPDs are most useful for very large datasets (>1TB) or when a dataset is going to be using by a large number of concurrent experiments or sessions."),(0,s.kt)("h3",{id:"how-do-i-access-the-data-in-a-datastore"},"How do I access the data in a datastore?"),(0,s.kt)("p",null,"By default, datastores are mounted at ",(0,s.kt)("inlineCode",{parentName:"p"},"/datastores/<datastore-name>/")," on both\n",(0,s.kt)("a",{parentName:"p",href:"/features/runs/README"},"Runs")," and ",(0,s.kt)("a",{parentName:"p",href:"/features/sessions/"},"Sessions"),".\nIf for some reason you need the mount path at a different location, you are able to\nmanually specify the Datastore mount path when using the CLI. Please refer to\n",(0,s.kt)("a",{parentName:"p",href:"/cli"},"CLI commands reference")," for assistance specifying the desired configuration. "),(0,s.kt)("h2",{id:"next-steps"},"Next Steps"),(0,s.kt)("p",null,"For more information on using Datastores, start with the first section of the\n",(0,s.kt)("a",{parentName:"p",href:"/features/datastores/Using%20Datastores/How-to-use-datastores"},"Using Datastores")," tutorial. "),(0,s.kt)("p",null,"More advanced users can feel free to skip to any of the other tutorials which may be of\ninterest. These are linked in the ",(0,s.kt)("a",{parentName:"p",href:"/features/datastores/Using%20Datastores/How-to-use-datastores"},"Sidebar")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/features/datastores/Using%20Datastores/How-to-use-datastores"},"Using Datastores")),(0,s.kt)("p",{parentName:"li"},"1.1. ",(0,s.kt)("a",{parentName:"p",href:"/features/datastores/Using%20Datastores/creating-datastores"},"Creating Datastores"),"  "),(0,s.kt)("p",{parentName:"li"},"1.2. ",(0,s.kt)("a",{parentName:"p",href:"/features/datastores/Using%20Datastores/inspecting_status"},"Inspecting Status")),(0,s.kt)("p",{parentName:"li"},"1.3. ",(0,s.kt)("a",{parentName:"p",href:"/features/datastores/Using%20Datastores/attaching-datastores"},"Attaching Datastores"),"  "),(0,s.kt)("p",{parentName:"li"},"1.4. ",(0,s.kt)("a",{parentName:"p",href:"/features/datastores/Using%20Datastores/periodically-uploading-datastores"},"Periodically Uploading Datastores")),(0,s.kt)("p",{parentName:"li"},"1.5. ",(0,s.kt)("a",{parentName:"p",href:"/features/datastores/Using%20Datastores/deleting-datastores"},"Deleting Datastores"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/features/datastores/faq"},"Troubleshooting Datastores")))))}u.isMDXComponent=!0}}]);