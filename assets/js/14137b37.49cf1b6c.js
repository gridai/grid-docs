"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[9575],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4072:function(e,t,n){var r=n(7294);t.Z=function(e){return r.createElement("video",{width:"100%",height:"320",controls:!0},r.createElement("source",{src:e.src,type:"video/mp4"}))}},2317:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=(n(4072),["components"]),s={title:"Runs Overview",sidebar_label:"Runs Overview"},l="Demystifying Runs",u={unversionedId:"features/runs/README",id:"features/runs/README",title:"Runs Overview",description:"What are Runs",source:"@site/docs/features/runs/1_README.md",sourceDirName:"features/runs",slug:"/features/runs/README",permalink:"/features/runs/README",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/1_README.md",tags:[],version:"current",lastUpdatedAt:1659650559,formattedLastUpdatedAt:"8/4/2022",sidebarPosition:1,frontMatter:{title:"Runs Overview",sidebar_label:"Runs Overview"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/features/sessions/faq"},next:{title:"Grid Runs Overview",permalink:"/features/runs/Creating Runs/README"}},d=[{value:"What are Runs",id:"what-are-runs",children:[],level:2},{value:"Why use Runs",id:"why-use-runs",children:[{value:"Capabilities Highlights",id:"capabilities-highlights",children:[],level:3},{value:"Local directory upload and .gridignore file",id:"local-directory-upload-and-gridignore-file",children:[],level:3}],level:2},{value:"\u26a1\ufe0f\u26a1 \ufe0fForget about infrastructure \u26a1\ufe0f\u26a1\ufe0f",id:"\ufe0f-\ufe0fforget-about-infrastructure-\ufe0f\ufe0f",children:[{value:"Run via the CLI",id:"run-via-the-cli",children:[],level:3},{value:"Run via the web UI",id:"run-via-the-web-ui",children:[],level:3}],level:2}],c={toc:d};function p(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"demystifying-runs"},"Demystifying Runs"),(0,i.kt)("h2",{id:"what-are-runs"},"What are Runs"),(0,i.kt)("p",null,'Runs are "serverless" compute optimized for training ML models.'),(0,i.kt)("h2",{id:"why-use-runs"},"Why use Runs"),(0,i.kt)("p",null,'Because Runs are "serverless", you only pay for the time your script is running. This amounts to massive cost savings whether you use Runs in Grid Cloud or in ',(0,i.kt)("a",{parentName:"p",href:"/platform/Custom%20Cloud%20Credentials/byoc"},"a custom cluster"),"."),(0,i.kt)("p",null,"Also, Runs help you train your models faster by enabling ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs/sweep-syntax"},"parallelized hyperparameter sweeps"),". In other words, you can run multiple experiments at the same time in the cloud!"),(0,i.kt)("h3",{id:"capabilities-highlights"},"Capabilities Highlights"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/platform/machines"},"Utilize a Variety of AWS Machines")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/platform/github-integration"},"GitHub Integration")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/runs/Creating%20Runs/Basic%20Runs/basic-runs#attaching-datastores-to-runs"},"Attach Datastores")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/runs/Creating%20Runs/Adv%20Runs/auto-resume-experiments"},"Auto-resume Experiments")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/runs/Creating%20Runs/Basic%20Runs/sweep-syntax"},"Hyperparameter Search Optimizations")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/runs/private-repos#the---localdir-option"},"Run Experiments from a Local Directory"),"  "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/runs/Creating%20Runs/Adv%20Runs/interruptible-machines"},"Run Experiments using Spot Instances"))),(0,i.kt)("h3",{id:"local-directory-upload-and-gridignore-file"},"Local directory upload and .gridignore file"),(0,i.kt)("p",null,"Currently, Grid has only a native Github integration to allow running code from public or private repositories. We provide ",(0,i.kt)("inlineCode",{parentName:"p"},"--localdir")," option to allow users to run scripts from arbitrary local directory. When using local directory option CLI will upload all files from current directory with exclusion of those defined by rules of .gridignore file."),(0,i.kt)("p",null,"Here is an example .gridignore file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"# Ignore all *.pyc files and __pycache__ directories in all directories (nested)\n*.pyc\n__pycache__/\n\n\n# Exclude files only in given directory\n/*.md\n/nested/*.md\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".gridignore")," uses glob expressions to exclude any file that matches. Lines starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," are comments and will be ignored. All directories with name ",(0,i.kt)("inlineCode",{parentName:"p"},"__pycache__")," will not get uploaded as well as any file (even inside nested directories) with ",(0,i.kt)("inlineCode",{parentName:"p"},".pyc")," extension. To exclude files only on particular directory level use ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," separator - also on the Windows platform. "),(0,i.kt)("p",null,"If there's no ",(0,i.kt)("inlineCode",{parentName:"p"},".gridignore")," in project root directory then CLI combines all existing ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".dockerignore")," files from all nested directories and excludes files based on rules defined in them. It's important to note that currently we do not support explicit inclusion patterns ie. ",(0,i.kt)("inlineCode",{parentName:"p"},"!")," sign at the beginning of the pattern to directly include file that might have been exluded by other pattern."),(0,i.kt)("h2",{id:"\ufe0f-\ufe0fforget-about-infrastructure-\ufe0f\ufe0f"},"\u26a1\ufe0f\u26a1 \ufe0fForget about infrastructure \u26a1\ufe0f\u26a1\ufe0f"),(0,i.kt)("p",null,'Runs are "serverless" which means you only pay for the time your scripts are actually running. When running on your own infrastructure this amounts to massive cost savings as well.'),(0,i.kt)("p",null,"In this example, we're going to run an arbitrary model (from the Pytorch Examples Github repo) across 4 GPUs (4 experiments each on 2 GPUs)"),(0,i.kt)("h3",{id:"run-via-the-cli"},"Run via the CLI"),(0,i.kt)("p",null,"RUN ",(0,i.kt)("strong",{parentName:"p"},"any")," GitHub file with Grid in 4 steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. clone the repo\ngit clone https://github.com/pytorch/examples\n\n# 2. find the file to run\ncd examples/dcgan\n\n# 3. verify it works locally (optional)\npython   main.py --dataset cifar10 --lr 0.0002 --dataroot .\n\n# 4. run on a cloud instance via grid\ngrid run main.py --dataset cifar10 --lr 0.0002 --dataroot .\n")),(0,i.kt)("p",null,"Grid offers ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs/sweep-syntax"},"advanced syntax")," for launching a Run and sweep:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run hello.py --number \"[1, 2]\" --food_item \"['pizza', 'hotdog']\"\n")),(0,i.kt)("p",null,"The above is equivalent to running each of the following lines on a separate machine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python hello.py --number 1 --food_item 'pizza'  # will run on machine 1\npython hello.py --number 2 --food_item 'pizza'  # will run on machine 2\npython hello.py --number 1 --food_item 'hotdog' # will run on machine 3\npython hello.py --number 2 --food_item 'hotdog' # will run on machine 4\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A RUN is a collection of EXPERIMENTS (the run has 4 experiments in this example)."),(0,i.kt)("p",{parentName:"div"},"Each experiment will execute on it's own machine!"))),(0,i.kt)("p",null,"To see the status of your Run and all associated experiments, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"grid status <my-run-name>")," command. (More details can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/cli#grid-status"},"here"),")."),(0,i.kt)("p",null,"Extra details about your run can be found in the UI. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your script should not use the same parameters of the grid CLI. (e.g. don't use ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," in your script, as grid will use it to label your run). The complete list of parameters used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"grid run")," command can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/cli#grid-run"},"here")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Grid Run respects the use of .ignore files; these files are used to tell a program which files it should ignore during execution. Grid gives preference to the .gridignore file. In the absence of a .gridignore file Grid will concatenate the .gitignore and .dockerignore files to determine which files should be ignored. These files do not have to be provided to the CLI or UI and are expected to reside in the project root directory."))),(0,i.kt)("h3",{id:"run-via-the-web-ui"},"Run via the web UI"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4788).Z})),(0,i.kt)("h1",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Check out our documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs/Creating%20Runs/Basic%20Runs/basic-runs"},"using runs")))}p.isMDXComponent=!0},4788:function(e,t,n){t.Z=n.p+"assets/images/run_start-cd5ce398f6509d85396a5f8e77c9ecf5.gif"}}]);