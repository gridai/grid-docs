"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[6971],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4072:function(e,t,n){var a=n(7294);t.Z=function(e){return a.createElement("video",{width:"100%",height:"320",controls:!0},a.createElement("source",{src:e.src,type:"video/mp4"}))}},1269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=n(4072),o=["components"],l={sidebar_position:1,sidebar_label:"Grid in 3 minutes"},p="Grid in 3 minutes",u={unversionedId:"index",id:"index",title:"Grid in 3 minutes",description:"Introduction",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/index.md",tags:[],version:"current",lastUpdatedAt:1659650559,formattedLastUpdatedAt:"8/4/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Grid in 3 minutes"},sidebar:"tutorialSidebar",next:{title:"Getting Started with Grid",permalink:"/getting-started/getting-started-with-grid"}},c=[{value:"<strong>Introduction</strong>",id:"introduction",children:[],level:2},{value:"<strong>Infrastructure is gone</strong>",id:"infrastructure-is-gone",children:[],level:2},{value:"Artifacts, logs, etc...",id:"artifacts-logs-etc",children:[],level:2},{value:"Experiment Managers",id:"experiment-managers",children:[],level:2},{value:"Datastores: (Scalable datasets)",id:"datastores-scalable-datasets",children:[],level:2},{value:"Sessions (Interactive machines)",id:"sessions-interactive-machines",children:[],level:2},{value:"<strong>RUN (Sweep and train anything)</strong>",id:"run-sweep-and-train-anything",children:[],level:2},{value:"That&#39;s it!",id:"thats-it",children:[],level:2},{value:"Next!",id:"next",children:[],level:2}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grid-in-3-minutes"},"Grid in 3 minutes"),(0,i.kt)("h2",{id:"introduction"},(0,i.kt)("strong",{parentName:"h2"},"Introduction")),(0,i.kt)("p",null,"Grid is designed for developing and training deep learning models at scale."),(0,i.kt)("p",null,"The TL;DR of using Grid is this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("strong",{parentName:"li"},"DATASTORE")," with your dataset."),(0,i.kt)("li",{parentName:"ul"},"Spin up an interactive ",(0,i.kt)("strong",{parentName:"li"},"SESSION")," to develop, analyze and prototype models/ideas."),(0,i.kt)("li",{parentName:"ul"},"When you have something that works, train it at scale via ",(0,i.kt)("strong",{parentName:"li"},"RUN."))),(0,i.kt)("p",null,"This 3-minute video shows you how to execute code on cloud instances with zero code changes and how to debug/prototype and develop models with multi-GPU cloud instances."),(0,i.kt)(s.Z,{src:"https://grid-docs.s3.us-east-2.amazonaws.com/intro_video_mp42.mp4",type:"video/mp4",mdxType:"Video"}),(0,i.kt)("p",null,"Here is a quick overview of:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"features/datastores#datastores-scalable-datasets"},(0,i.kt)("strong",{parentName:"a"},"Datastores"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"features/sessions#sessions"},(0,i.kt)("strong",{parentName:"a"},"Sessions"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/features/runs/README#runs"},(0,i.kt)("strong",{parentName:"a"},"Runs"))),(0,i.kt)("h2",{id:"infrastructure-is-gone"},(0,i.kt)("strong",{parentName:"h2"},"Infrastructure is gone")),(0,i.kt)("p",null,"Grid allocates all the machines and GPUs you need on demand, so you only pay for what you need when you need it."),(0,i.kt)("p",null,"Grid lets you focus on your work, NOT on the infrastructure. Create an account ",(0,i.kt)("a",{href:"https://platform.grid.ai"},"here")," to get free credits and get started!"),(0,i.kt)("h2",{id:"artifacts-logs-etc"},"Artifacts, logs, etc..."),(0,i.kt)("p",null,"Grid handles all the other parts of developing and training at scale:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Artifacts"),(0,i.kt)("li",{parentName:"ul"},"Logs"),(0,i.kt)("li",{parentName:"ul"},"Metrics"),(0,i.kt)("li",{parentName:"ul"},"etc...")),(0,i.kt)("p",null,"Just run your files and watch the magic happen"),(0,i.kt)("h2",{id:"experiment-managers"},"Experiment Managers"),(0,i.kt)("p",null,"Grid works with the experiment manager of your choice!!\ud83d\udd25\ud83d\udd25"),(0,i.kt)("p",null,"No need to change your code!"),(0,i.kt)("h2",{id:"datastores-scalable-datasets"},"Datastores: (Scalable datasets)"),(0,i.kt)("p",null,"In Grid, we've introduced ",(0,i.kt)("em",{parentName:"p"},"Datastores"),", high-performance, low-latency, versioned datasets."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(665).Z})),(0,i.kt)("p",null,"The UI supports creating Datastores of ","<"," 1 GB"),(0,i.kt)(s.Z,{src:"https://grid-docs.s3.us-east-2.amazonaws.com/datastore.mp4",type:"video/mp4",mdxType:"Video"}),(0,i.kt)("p",null,"Use the CLI for larger datastores"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create imagenet_folder --name imagenet\n")),(0,i.kt)("h2",{id:"sessions-interactive-machines"},"Sessions (Interactive machines)"),(0,i.kt)("p",null,"For prototyping/debugging/analyzing, sometimes you need a LIVE machine. We call these ",(0,i.kt)("em",{parentName:"p"},"Sessions"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Web UI: Starting a new session")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2790).Z})),(0,i.kt)(s.Z,{src:"https://grid-docs.s3.us-east-2.amazonaws.com/session_3.mp4",type:"video/mp4",mdxType:"Video"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLI: Starting a new session")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# session with 2 M60 GPUs\ngrid session create --instance_type 2_m60_8gb\n")),(0,i.kt)("h2",{id:"run-sweep-and-train-anything"},(0,i.kt)("strong",{parentName:"h2"},"RUN (Sweep and train anything)")),(0,i.kt)("p",null,"RUN ",(0,i.kt)("strong",{parentName:"p"},"any")," public or private repository with Grid in 5 steps:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4545).Z})),(0,i.kt)("p",null,"This 1-minute video shows how to RUN from the web app:"),(0,i.kt)(s.Z,{src:"https://grid-docs.s3.us-east-2.amazonaws.com/run.mp4",type:"video/mp4",mdxType:"Video"}),(0,i.kt)("p",null,"If you prefer to use the CLI simply replace python with grid run."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5342).Z})),(0,i.kt)("p",null,"First, install Grid and login"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install lightning-grid --upgrade\ngrid login\n")),(0,i.kt)("p",null,"Now clone the repo and hit run!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# clone repo\ngit clone https://github.com/williamFalcon/hello\ncd hello\n\n# start the sweep\ngrid run hello.py --number \"[1, 2]\" --food_item \"['pizza', 'pear']\"\n")),(0,i.kt)("p",null,"This command produces these equivalent calls automatically"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python hello.py --number 1 --food_item 'pizza'\npython hello.py --number 2 --food_item 'pizza'\n\npython hello.py --number 1 --food_item 'pear'\npython hello.py --number 2 --food_item 'pear'\n")),(0,i.kt)("h2",{id:"thats-it"},"That's it!"),(0,i.kt)("p",null,"We learned that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RUN")," executes scripts on cloud machines (and runs hyperparameter sweeps)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SESSION")," starts an interactive machine with the CPU/GPUs of your choice"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DATASTORE")," is an optimized, low-latency auto-versioned dataset."),(0,i.kt)("li",{parentName:"ul"},"Grid has a ",(0,i.kt)("strong",{parentName:"li"},"Web app")," and a ",(0,i.kt)("strong",{parentName:"li"},"CLI")," with similar functionality.")),(0,i.kt)("p",null,"That's all you need to know about Grid!"),(0,i.kt)("h2",{id:"next"},"Next!"),(0,i.kt)("p",null,"Now try our ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/typical-workflow-web-user"},"first tutorial")))}m.isMDXComponent=!0},665:function(e,t,n){t.Z=n.p+"assets/images/jobs-5027569ba03744a6c182cb23df43378f.jpg"},5342:function(e,t,n){t.Z=n.p+"assets/images/hello-cifar-command-fc6f9028c828d9c22f8519ea1cbf6d22.png"},4545:function(e,t,n){t.Z=n.p+"assets/images/how-to-launch-experiments-4592cbba75831ba01ffd7de648806dc8.jpg"},2790:function(e,t,n){t.Z=n.p+"assets/images/session-a78499e0318341ae7e9e732e9644a983.jpg"}}]);