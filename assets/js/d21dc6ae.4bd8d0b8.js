"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[985],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9262:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={description:"Frequently asked questions about Runs"},l="FAQ",u={unversionedId:"products/runs/faq",id:"products/runs/faq",title:"FAQ",description:"Frequently asked questions about Runs",source:"@site/docs/products/runs/faq.md",sourceDirName:"products/runs",slug:"/products/runs/faq",permalink:"/products/runs/faq",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/products/runs/faq.md",tags:[],version:"current",lastUpdatedAt:1644927410,formattedLastUpdatedAt:"2/15/2022",frontMatter:{description:"Frequently asked questions about Runs"},sidebar:"tutorialSidebar",previous:{title:"Multi-node training (Beta)",permalink:"/products/runs/multi-node"},next:{title:"\u26a1\ufe0fMobile",permalink:"/products/mobile/"}},d=[{value:"Why does my code work locally but fail with Grid Run?",id:"why-does-my-code-work-locally-but-fail-with-grid-run",children:[],level:2},{value:"How do I download my run/experiment artifacts?",id:"how-do-i-download-my-runexperiment-artifacts",children:[],level:2},{value:"How long are artifacts stored?",id:"how-long-are-artifacts-stored",children:[],level:2},{value:"Why isn&#39;t Grid locating my requirements.txt file?",id:"why-isnt-grid-locating-my-requirementstxt-file",children:[],level:2},{value:"How can I resolve Windows pathing issues when using grid?",id:"how-can-i-resolve-windows-pathing-issues-when-using-grid",children:[],level:2},{value:"The cost changed during a run?",id:"the-cost-changed-during-a-run",children:[],level:2},{value:"How do I find out what packages are pre-installed in the cloud machine?",id:"how-do-i-find-out-what-packages-are-pre-installed-in-the-cloud-machine",children:[],level:2},{value:"What machine learning frameworks does Grid support?",id:"what-machine-learning-frameworks-does-grid-support",children:[],level:2},{value:"I&#39;m using an in-house ML library. Can I use it with Grid?",id:"im-using-an-in-house-ml-library-can-i-use-it-with-grid",children:[],level:2},{value:"I am getting lot of errors using CLI",id:"i-am-getting-lot-of-errors-using-cli",children:[],level:2},{value:"Experiments are queued for a long time",id:"experiments-are-queued-for-a-long-time",children:[],level:2}],c={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"why-does-my-code-work-locally-but-fail-with-grid-run"},"Why does my code work locally but fail with Grid Run?"),(0,o.kt)("p",null,"This is likely an environment mismatch. For Python users we recommend testing your code in a virtual environment with Python or Conda and then running a pip freeze to get all the necessary packages. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Create conda environment\nconda create --name test-environment\npip install -r requirments.txt\n\n# ensure code works\n\n# copy dependencies to requirements.txt\npip freeze > requirements.txt\n")),(0,o.kt)("h2",{id:"how-do-i-download-my-runexperiment-artifacts"},"How do I download my run/experiment artifacts?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/47154698/146597173-30a6f5af-4ecc-4958-866a-95ddb1ba70e0.mp4"},"https://user-images.githubusercontent.com/47154698/146597173-30a6f5af-4ecc-4958-866a-95ddb1ba70e0.mp4")),(0,o.kt)("h2",{id:"how-long-are-artifacts-stored"},"How long are artifacts stored?"),(0,o.kt)("p",null,"Artifacts are downloadable for 24 hours after creation."),(0,o.kt)("h2",{id:"why-isnt-grid-locating-my-requirementstxt-file"},"Why isn't Grid locating my requirements.txt file?"),(0,o.kt)("p",null,"Grid by default will look for a requirements.txt file in the root directory of your project. To customize this behavior try using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--dependency_file")," flag. An example is below:\n",(0,o.kt)("inlineCode",{parentName:"p"},"grid run --dependency_file ./path/to/requirements.txt model.py")),(0,o.kt)("h2",{id:"how-can-i-resolve-windows-pathing-issues-when-using-grid"},"How can I resolve Windows pathing issues when using grid?"),(0,o.kt)("p",null,"There are two options users can try:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"default to the Windows Subsystem for Linux"),(0,o.kt)("li",{parentName:"ol"},"Try running your commands with by replacing '\\' characters with '","\\","' in your path.")),(0,o.kt)("h2",{id:"the-cost-changed-during-a-run"},"The cost changed during a run?"),(0,o.kt)("p",null,"Grid provides estimates of ongoing costs. Once a run terminates we compute the final cost."),(0,o.kt)("h2",{id:"how-do-i-find-out-what-packages-are-pre-installed-in-the-cloud-machine"},"How do I find out what packages are pre-installed in the cloud machine?"),(0,o.kt)("p",null,"Cloud machines are configured in a simple way with only what is needed to run the scripts in the framework of choice."),(0,o.kt)("h2",{id:"what-machine-learning-frameworks-does-grid-support"},"What machine learning frameworks does Grid support?"),(0,o.kt)("p",null,"Grid is optimized for PyTorch Lightning. It also supports Tensorflow, Keras, or any framework built on top of PyTorch."),(0,o.kt)("p",null,"Try this repository for running Keras example: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gridai/hello_mnists/blob/443d9522/keras.py"},"https://github.com/gridai/hello","_","mnists/blob/443d9522/keras.py")),(0,o.kt)("p",null,"Grid can also run non-deep learning focused workloads such as plain numpy, sklearn, etc.."),(0,o.kt)("h2",{id:"im-using-an-in-house-ml-library-can-i-use-it-with-grid"},"I'm using an in-house ML library. Can I use it with Grid?"),(0,o.kt)("p",null,"Grid can run arbitrary python scripts. You're free to run whatever you want inside a script. However, Grid is optimized for Pytorch, Pytorch Lightning, Tensorflow, Keras, numpy and sklearn."),(0,o.kt)("h2",{id:"i-am-getting-lot-of-errors-using-cli"},"I am getting lot of errors using CLI"),(0,o.kt)("p",null,"Grid supports Linux based operating systems. We recommend using virtual environment when using CLI. Please see the guidance ",(0,o.kt)("a",{parentName:"p",href:"/products/global-cli-configs/virtual-environments"},"here")),(0,o.kt)("h2",{id:"experiments-are-queued-for-a-long-time"},"Experiments are queued for a long time"),(0,o.kt)("p",null,"If experiments are queued for a long time it could be a sign that instance type requested is not available; reach out on slack or open a github issue if you see this: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gridai/gridai/issues"},"https://github.com/gridai/gridai/issues"),". Choosing another instance type may help in some cases."))}p.isMDXComponent=!0}}]);