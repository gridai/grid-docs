"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[8998],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3891:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={description:"Grid supports running Julia scripts"},s="Running Julia programs",u={unversionedId:"examples/frameworks/running-julia-programs",id:"examples/frameworks/running-julia-programs",title:"Running Julia programs",description:"Grid supports running Julia scripts",source:"@site/docs/examples/frameworks/running-julia-programs.md",sourceDirName:"examples/frameworks",slug:"/examples/frameworks/running-julia-programs",permalink:"/examples/frameworks/running-julia-programs",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/examples/frameworks/running-julia-programs.md",tags:[],version:"current",lastUpdatedAt:1644927410,formattedLastUpdatedAt:"2/15/2022",frontMatter:{description:"Grid supports running Julia scripts"},sidebar:"tutorialSidebar",previous:{title:"Running Tensorflow or Keras",permalink:"/examples/frameworks/running-tensorflow-or-keras"},next:{title:"GRID CLI REFERENCE",permalink:"/cli/api"}},p=[{value:"<strong>Step 0 Prepare script</strong>",id:"step-0-prepare-script",children:[],level:2},{value:"<strong>Step 1 Run on Grid</strong>",id:"step-1-run-on-grid",children:[],level:2},{value:"<strong>Step 2 See results</strong>",id:"step-2-see-results",children:[],level:2},{value:"<strong>Step 3: Bonus CLI Examples</strong>",id:"step-3-bonus-cli-examples",children:[{value:"Notes and limitations:",id:"notes-and-limitations",children:[],level:3}],level:2}],m={toc:p};function c(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-julia-programs"},"Running Julia programs"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://julialang.org"},"Julia")," scripts and hyper parameter sweeps can be run in Grid easily using CLI or the web UI. Both CPU and GPU instances are supported with all necessary system drivers pre-installed and set up, so you can take advantage of multiprocessing and compute acceleration hardware with no additional configuration."),(0,i.kt)("h2",{id:"step-0-prepare-script"},(0,i.kt)("strong",{parentName:"h2"},"Step 0 Prepare script")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Have the Julia script available on Github"),(0,i.kt)("li",{parentName:"ul"},"Make sure the Julia script is invocable via the command line. No changes to your code are required when running on Grid"),(0,i.kt)("li",{parentName:"ul"},"Julia scripts must be named with the suffix .jl"),(0,i.kt)("li",{parentName:"ul"},"If any dependencies are required, the git repo must contain a valid Project.toml file which has been generated by the Julia standard library pkg manager utility."),(0,i.kt)("li",{parentName:"ul"},"Optionally, you can test by creating an Interactive Session in Grid and running your script there")),(0,i.kt)("h2",{id:"step-1-run-on-grid"},(0,i.kt)("strong",{parentName:"h2"},"Step 1 Run on Grid")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start the Grid platform at platform.grid.ai"),(0,i.kt)("li",{parentName:"ul"},"In the Web UI, choose \u201cNew Run\u201d"),(0,i.kt)("li",{parentName:"ul"},"Copy and paste the Github script or select the entry file in the dropdown menu"),(0,i.kt)("li",{parentName:"ul"},"Select Julia from the \u201cframework\u201d drop down option"),(0,i.kt)("li",{parentName:"ul"},"Add any script arguments",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the script accepts command line arguments, you can submit a hyperparameter sweep in the same way you do for a python based run")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8482).Z})),(0,i.kt)("h2",{id:"step-2-see-results"},(0,i.kt)("strong",{parentName:"h2"},"Step 2 See results")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any text sent to stdout from the Julia program will be available in the Stdout log"),(0,i.kt)("li",{parentName:"ul"},"Any artifacts written in the main program directory are automatically preserved"),(0,i.kt)("li",{parentName:"ul"},"If you are able to view Tensorboard logs then metrics are available in the Web UI as well as any artifacts")),(0,i.kt)("p",null,"Note: The first time you run a Julia file, it will take a bit longer; you can track progress in Build logs"),(0,i.kt)("h2",{id:"step-3-bonus-cli-examples"},(0,i.kt)("strong",{parentName:"h2"},"Step 3: Bonus CLI Examples")),(0,i.kt)("p",null,"Script1: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rlizzo/julia_binder_test/blob/master/demo.jl"},"https://github.com/rlizzo/julia_binder_test/blob/master/demo.jl")),(0,i.kt)("p",null,'Script arguments: --num "',"[","10,100,1000,10000","]",'"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/rlizzo/julia_binder_test\ncd julia_binder_test\ngrid run --instance_type t2.medium \\\n--framework julia \\\n--use_spot \\\n--cpus 1 \\\ndemo.jl \\\n--num "[10,100,1000,10000]"\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://platform.grid.ai/#/runs?script=https://github.com/rlizzo/TuringCLIExample/blob/67323c2/fit.jl&cloud=grid&use_spot&instance=t2.medium&accelerators=1&disk_size=200&framework=julia&script_args=--num_samples%20100"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rid_AI-run-78FF96.svg?labelColor=black&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMTR2MjBhMTQgMTQgMCAwMDE0IDE0aDlWMzYuOEgxMi42VjExaDIyLjV2N2gxMS4yVjE0QTE0IDE0IDAgMDAzMi40IDBIMTVBMTQgMTQgMCAwMDEgMTR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTM1LjIgNDhoMTEuMlYyNS41SDIzLjl2MTEuM2gxMS4zVjQ4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",alt:"Single Run"}))),(0,i.kt)("p",null,"Script2: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rlizzo/TuringCLIExample/blob/main/fit.jl"},"https://github.com/rlizzo/TuringCLIExample/blob/main/fit.jl")),(0,i.kt)("p",null,'Script arguments: --num_samples "',"[","10,100,1000,10000","]",'"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/rlizzo/TuringCLIExample\ncd TuringCLIExample\ngrid run --instance_type t2.medium \\\n--framework julia \\\n--use_spot \\\n--cpus 1 \\\nfit.jl \\\n--num_samples 100\n")),(0,i.kt)("h3",{id:"notes-and-limitations"},"Notes and limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please be aware that following environment variables pertinent to the julia runtime configuration are set automatically before the script is invoked.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'JULIA_PROJECT="@." where the current working directory is the root of your cloned repository.'),(0,i.kt)("li",{parentName:"ul"},"JULIA_NUM_THREADS where the value is set to the number of CPUs you dedicate to each experiment.")))),(0,i.kt)("p",null,"The two environment variables above are equivalent to invoking a julia script with the following configuration options:"),(0,i.kt)("p",null,"julia --project=@. --threads auto ","<","YOUR JULIA SCRIPT NAME",">",".jl"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"At this time, we only support the latest release of the Julia language (v1.6.1) please ensure that 1.6.1 is compatible with the Julia version specified in the ","[","compat","]"," section of the repository's Project.toml.")))}c.isMDXComponent=!0},8482:function(e,t,r){t.Z=r.p+"assets/images/julia-135dc402822d6f13e0b91da36d8241ec.gif"}}]);