"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[1198],{3905:function(t,e,a){a.d(e,{Zo:function(){return g},kt:function(){return o}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),f=d(a),o=r,N=f["".concat(m,".").concat(o)]||f[o]||k[o]||l;return a?n.createElement(N,i(i({ref:e},g),{},{components:a})):n.createElement(N,i({ref:e},g))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2342:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return g},default:function(){return f}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={title:"Machines",sidebar_label:"Machines"},m="Machines",d={unversionedId:"platform/machines",id:"platform/machines",title:"Machines",description:"Here are the machines (also known as instance types) you can use to create sessions and runs. The syntax for specifying an instance type is numberOfAcceleratorsacceleratorTypeavailableMemory. Below is an example utilizing this syntax to create a session on a machine with 8 v100 gpus and 32 GB memory.",source:"@site/docs/platform/4_machines.md",sourceDirName:"platform",slug:"/platform/machines",permalink:"/platform/machines",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/4_machines.md",tags:[],version:"current",lastUpdatedAt:1657808501,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:4,frontMatter:{title:"Machines",sidebar_label:"Machines"},sidebar:"tutorialSidebar",previous:{title:"Credentials",permalink:"/platform/credentials"},next:{title:"Collaboration",permalink:"/platform/collaboration"}},g=[{value:"Show Instance Types available in Cluster",id:"show-instance-types-available-in-cluster",children:[],level:3},{value:"Recommended Instance Types",id:"recommended-instance-types",children:[],level:3},{value:"Spot Instances",id:"spot-instances",children:[],level:3}],k={toc:g};function f(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"machines"},"Machines"),(0,l.kt)("p",null,"Here are the machines (also known as instance types) you can use to create sessions and runs. The syntax for specifying an instance type is ",(0,l.kt)("inlineCode",{parentName:"p"},"numberOfAccelerators_acceleratorType_availableMemory"),". Below is an example utilizing this syntax to create a session on a machine with 8 v100 gpus and 32 GB memory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"grid session create --instance_type 8_v100_32gb\n")),(0,l.kt)("p",null,"The below table provides AWS instance types to ",(0,l.kt)("inlineCode",{parentName:"p"},"numberOfAccelerators_acceleratorType_availableMemory")," mapping."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GPU"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Memory"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Accelerator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"numberOfAccelerators acceleratorType availableMemory"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Exception Instance Type Used"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.medium"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2_CPU_4GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"t3.medium"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2_CPU_4GB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.medium")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.large"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2_CPU_8GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"t3.large"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2_CPU_8GB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.large")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"m5a.large"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2_CPU_8GB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.large")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4_CPU_16GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"t3.xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4_CPU_16GB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.xlarge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"m5a.xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4_CPU_16GB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.xlarge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.2xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8_CPU_32GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"t3.2xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8_CPU_32GB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.2xlarge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"m5a.2xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8_CPU_32GB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"t2.2xlarge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"m5a.4xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16_CPU_64GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"m5a.8xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32_CPU_128GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"m5a.12xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"48"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"192"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"48_CPU_192GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"m5a.16xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"64_CPU_256GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"m5a.24xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"96"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"384"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"left"},"96_CPU_384GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g2.8xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"60"),(0,l.kt)("td",{parentName:"tr",align:"left"},"K520"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4_K520_60GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"p2.xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"61"),(0,l.kt)("td",{parentName:"tr",align:"left"},"K80"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1_K80_61GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"p2.8xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"488"),(0,l.kt)("td",{parentName:"tr",align:"left"},"K80"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8_K80_488GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"p2.16xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16"),(0,l.kt)("td",{parentName:"tr",align:"left"},"732"),(0,l.kt)("td",{parentName:"tr",align:"left"},"K80"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16_K80_732GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g3s.xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"30.5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"M60"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1_M60_30.5GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g3.4xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"122"),(0,l.kt)("td",{parentName:"tr",align:"left"},"M60"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1_M60_122GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g3.8xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"244"),(0,l.kt)("td",{parentName:"tr",align:"left"},"M60"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2_M60_244GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g3.16xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"488"),(0,l.kt)("td",{parentName:"tr",align:"left"},"M60"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4_M60_488GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g4dn.xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1_T4_16GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g4dn.2xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1_T4_32GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g4dn.4xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1_T4_64GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g4dn.8xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1_T4_128GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g4dn.16xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1_T4_256GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g4dn.12xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"48"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"192"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4_T4_192GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"g4dn.metal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"96"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"384"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8_T4_384GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"p3.2xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"61"),(0,l.kt)("td",{parentName:"tr",align:"left"},"V100"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1_V100_61GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"p3.8xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"244"),(0,l.kt)("td",{parentName:"tr",align:"left"},"V100"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4_V100_244GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"p3.16xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"488"),(0,l.kt)("td",{parentName:"tr",align:"left"},"V100"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8_V100_488GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"p3dn.24xlarge"),(0,l.kt)("td",{parentName:"tr",align:"left"},"96"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"768"),(0,l.kt)("td",{parentName:"tr",align:"left"},"V100"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8_V100_768GB"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h1",{id:"accepted-conventions"},"Accepted Conventions"),(0,l.kt)("p",null,"There are two accepted conventions for specifying the machine types:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"numberOfAccelerators_acceleratorType_availableMemory")),(0,l.kt)("li",{parentName:"ol"},"instance.size as taken from the official aws documentation. An example of this can be found in the table ",(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ec2/instance-types/g4/"},"here"),".\n\u200b\u200b3. when ",(0,l.kt)("inlineCode",{parentName:"li"},"numberOfAccelerators_acceleratorType_availableMemory")," results in duplicate, the  ",(0,l.kt)("strong",{parentName:"li"},"Exception Instance Type Used")," column contains the actual ",(0,l.kt)("inlineCode",{parentName:"li"},"instance_type")," used.")),(0,l.kt)("p",null,"Below are examples utilizing both the ",(0,l.kt)("inlineCode",{parentName:"p"},"numberOfAccelerators_acceleratorType_availableMemory")," syntax and ",(0,l.kt)("inlineCode",{parentName:"p"},"instance.size")," syntax to create a session on a machine with 8 v100 gpus and 32 GB memory."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"numberOfAccelerators_acceleratorType_availableMemory")," syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grid session create --instance_type 8_v100_32gb\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"instance.size")," syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grid run --instance_type p3.16xlarge hello.py --gpus 8\n")),(0,l.kt)("h3",{id:"show-instance-types-available-in-cluster"},"Show Instance Types available in Cluster"),(0,l.kt)("p",null,"To show all the available instance types in your cluster from the CLI you can submit:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grid instance-types\n")),(0,l.kt)("p",null,"This will provide the instance size names from the AWS convention that you\nhave available for use by your cluster."),(0,l.kt)("h3",{id:"recommended-instance-types"},"Recommended Instance Types"),(0,l.kt)("p",null,"Some instances show a label ",(0,l.kt)("inlineCode",{parentName:"p"},"Recommended")," in the UI (this is not shown in the CLI yet).These instances have higher availability than instances without this label and can allow for faster session start up times."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(5039).Z})),(0,l.kt)("h3",{id:"spot-instances"},"Spot Instances"),(0,l.kt)("p",null,"Spot instances give you access to cheaper compute instances, but they can\ntake longer to start, depending on how popular they are at the moment requested."),(0,l.kt)("p",null,"You can also try using spot instances with Sessions ","[BETA]",", if you don't mind waiting for the instance to be available or if you don't mind your Session being interrupted when the instance becomes unavailable. "),(0,l.kt)("p",null,'To select a spot instance in the Grid UI, select the "spot instance" checkbox in the Session configuration page:'),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(3212).Z})),(0,l.kt)("p",null,"In the CLI, add the option ",(0,l.kt)("inlineCode",{parentName:"p"},"--use_spot")," to your ",(0,l.kt)("inlineCode",{parentName:"p"},"session create")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grid session create --use_spot\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grid run --use_spot\n")))}f.isMDXComponent=!0},5039:function(t,e,a){e.Z=a.p+"assets/images/recommended-type-ee21465c84e693497bec9ab00ef4a419.gif"},3212:function(t,e,a){e.Z=a.p+"assets/images/spot-create-6094236c747f76c973d178a1224a970c.gif"}}]);