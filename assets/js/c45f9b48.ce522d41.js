"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[9132],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9652:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={description:"When running experiments on interruptible spot instances, Grid can automatically resume your experiment from the last saved checkpoint when a new instance becomes available."},l="\ud83c\udd95 Auto Resume Experiments",u={unversionedId:"features/runs/auto-resume-experiments",id:"features/runs/auto-resume-experiments",title:"\ud83c\udd95 Auto Resume Experiments",description:"When running experiments on interruptible spot instances, Grid can automatically resume your experiment from the last saved checkpoint when a new instance becomes available.",source:"@site/docs/features/runs/auto-resume-experiments.md",sourceDirName:"features/runs",slug:"/features/runs/auto-resume-experiments",permalink:"/features/runs/auto-resume-experiments",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/auto-resume-experiments.md",tags:[],version:"current",lastUpdatedAt:1647618927,formattedLastUpdatedAt:"3/18/2022",frontMatter:{description:"When running experiments on interruptible spot instances, Grid can automatically resume your experiment from the last saved checkpoint when a new instance becomes available."},sidebar:"tutorialSidebar",previous:{title:"Lowering costs (BETA)",permalink:"/features/runs/interruptible-machines"},next:{title:"localdir",permalink:"/features/runs/localdir"}},c=[{value:"What are resumable experiments?",id:"what-are-resumable-experiments",children:[],level:3},{value:"Gotchas",id:"gotchas",children:[],level:3},{value:"How to use it?",id:"how-to-use-it",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:4},{value:"UI",id:"ui",children:[],level:4},{value:"CLI",id:"cli",children:[],level:4}],level:3},{value:"PyTorch Lightning Fault Tolerance",id:"pytorch-lightning-fault-tolerance",children:[],level:3}],p={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-auto-resume-experiments"},"\ud83c\udd95 Auto Resume Experiments"),(0,a.kt)("h3",{id:"what-are-resumable-experiments"},"What are resumable experiments?"),(0,a.kt)("p",null,"When running experiments on interruptible spot instances, Grid can automatically resume your experiment from the last saved checkpoint when a new instance becomes available. Grid will also recover all artifacts, including the last saved checkpoints. The local filesystem will be preserved between experiment interruption and experiment resumption."),(0,a.kt)("p",null,"PyTorch Lightning offers out-of-the-box fault-tolerant training, which will automatically preserve any mid-epoch progress. When not using PyTorch Lightning, you will need to make sure your script is resumable."),(0,a.kt)("p",null,"The lifecycle of a resumable experiment is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Experiment starts running"),(0,a.kt)("li",{parentName:"ul"},"Experiment trains happily :). But, alas, it is getting terminated soon. Danger on the horizon!"),(0,a.kt)("li",{parentName:"ul"},"Grid receives a notification of pending interruption. It will send your experiment process Linux signal SIGTERM"),(0,a.kt)("li",{parentName:"ul"},"Your process is expected to terminate orderly, that is dump checkpoints/any state to disk, and exit with status code 0"),(0,a.kt)("li",{parentName:"ul"},"Grid will automatically reschedule your experiment on a different instance, albeit it may take a while until a new preemptible/spot instance is available"),(0,a.kt)("li",{parentName:"ul"},"New preemptible/spot instance is booted, and we schedule your experiment on it"),(0,a.kt)("li",{parentName:"ul"},"Before your experiment begins Grid resumes any artifacts (including your last checkpoint)"),(0,a.kt)("li",{parentName:"ul"},"We resume your experiment with the same run command")),(0,a.kt)("h3",{id:"gotchas"},"Gotchas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Multi-node experiments currently are not supported"),(0,a.kt)("li",{parentName:"ul"},"Filesystem is partially preserved, only the experiment execution directory is preserved; similarly as artifacts")),(0,a.kt)("h3",{id:"how-to-use-it"},"How to use it?"),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In order for experiments to resume from last checkpoint, the following prerequisites must be met:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On interruption the process shall receive signal SIGTERM"),(0,a.kt)("li",{parentName:"ul"},"The process needs to save checkpoint and exit with status code 0"),(0,a.kt)("li",{parentName:"ul"},"On resuming we'll restore all artifacts and code is responsible for resuming from last checkpoint in the file system")),(0,a.kt)("h4",{id:"ui"},"UI"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13732925/148102089-f540356a-a2e6-4e9d-ac1f-51de26691086.png",alt:"image"})),(0,a.kt)("h4",{id:"cli"},"CLI"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"--auto_resume")," flag to indicate this experiment is safe to resume."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grid run --use_spot --auto_resume --instance_type p3.2xlarge mnist.py\n")),(0,a.kt)("h3",{id:"pytorch-lightning-fault-tolerance"},"PyTorch Lightning Fault Tolerance"),(0,a.kt)("p",null,"PyTorch Lightning provides a built-in auto-resume mechanism. This would enable you to run your experiments at the cheapest cost without worrying about your experiments being terminated before they should be.  "),(0,a.kt)("p",null,"You can learn more about the PyTorch Lightning Fault Tolerance mechanism ",(0,a.kt)("a",{parentName:"p",href:"https://pytorch-lightning.readthedocs.io/en/latest/advanced/fault_tolerant_training.html#:~:text=Fault%2Dtolerant%20Training%20is%20an,a%20hardware%20or%20software%20failure.&text=fit()%20fails%20in%20the,and%20everything%20will%20be%20restored."},"here"),"."),(0,a.kt)("p",null,"Furthermore, PyTorch Lightning provides a reproducible script that you can find ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PyTorchLightning/pytorch-lightning/blob/master/pl_examples/fault_tolerant/automatic.py"},"here")," which is tested end-to-end on Grid with the Auto-Resume feature and can be used as a reference for you to get started."))}m.isMDXComponent=!0}}]);