"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[3024],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7748:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Spot Instances",sidebar_label:"Spot Instances"},u="Lowering costs with Spot Instances (BETA)",c={unversionedId:"features/runs/Creating Runs/Adv Runs/interruptible-machines",id:"features/runs/Creating Runs/Adv Runs/interruptible-machines",title:"Spot Instances",description:"Interruptible machines",source:"@site/docs/features/runs/1_Creating Runs/2_Adv Runs/4_interruptible-machines.md",sourceDirName:"features/runs/1_Creating Runs/2_Adv Runs",slug:"/features/runs/Creating Runs/Adv Runs/interruptible-machines",permalink:"/features/runs/Creating Runs/Adv Runs/interruptible-machines",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/1_Creating Runs/2_Adv Runs/4_interruptible-machines.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Spot Instances",sidebar_label:"Spot Instances"},sidebar:"tutorialSidebar",previous:{title:"Creating Runs from Config File",permalink:"/features/runs/Creating Runs/Adv Runs/creating-runs-from-config"},next:{title:"Auto-Resume Experiments",permalink:"/features/runs/Creating Runs/Adv Runs/auto-resume-experiments"}},l=[{value:"Interruptible machines",id:"interruptible-machines",children:[{value:"Enable Spot Instances via the UI",id:"enable-spot-instances-via-the-ui",children:[],level:3},{value:"Enable Spot Instances via the CLI",id:"enable-spot-instances-via-the-cli",children:[],level:3}],level:2},{value:"Prepare code for interruption",id:"prepare-code-for-interruption",children:[],level:2},{value:"Restarting interrupted jobs",id:"restarting-interrupted-jobs",children:[],level:2}],p={toc:l};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lowering-costs-with-spot-instances-beta"},"Lowering costs with Spot Instances (BETA)"),(0,i.kt)("h2",{id:"interruptible-machines"},"Interruptible machines"),(0,i.kt)("p",null,"Cloud machines are normally expensive. However, if your job can support being interrupted at any time (ie: fine tuning, model that can be restarted) then you could use ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"spot instances"))," in Grid to lower training and development costs."),(0,i.kt)("h3",{id:"enable-spot-instances-via-the-ui"},"Enable Spot Instances via the UI"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1684).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2847).Z})),(0,i.kt)("h3",{id:"enable-spot-instances-via-the-cli"},"Enable Spot Instances via the CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run --use_spot pl_mnist.py\n")),(0,i.kt)("h2",{id:"prepare-code-for-interruption"},"Prepare code for interruption"),(0,i.kt)("p",null,"To take advantage of interruptible machines, make sure of a few things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You are saving checkpoints or any state you need. Grid automatically picks these up into your artifacts."),(0,i.kt)("li",{parentName:"ol"},"Make sure your code can be restarted from a checkpoint or state file.")),(0,i.kt)("h2",{id:"restarting-interrupted-jobs"},"Restarting interrupted jobs"),(0,i.kt)("p",null,"Once the machine is interrupted, your job on Grid will stop. If you want to continue running your code do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to your experiment artifacts."),(0,i.kt)("li",{parentName:"ol"},"Copy the link to the state files (or checkpoint) that you need."),(0,i.kt)("li",{parentName:"ol"},"Resubmit the job with the path to that file.")),(0,i.kt)("p",null,"For example, assume your script has an argument called ",(0,i.kt)("inlineCode",{parentName:"p"},"--ck_path")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run --use_spot main.py --ck_path https://grid.ai/url/to/checkpoint.ckpt\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have additional questions about Runs, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs/faq"},"FAQ"),". The section is periodically updated this with common questions from the Grid community."))))}d.isMDXComponent=!0},1684:function(e,t,n){t.Z=n.p+"assets/images/spot-2b35f4c22b8f4756c30b37a6107e53da.gif"},2847:function(e,t,n){t.Z=n.p+"assets/images/usespot-27ab84c4438fc5420f159306f72c4866.png"}}]);