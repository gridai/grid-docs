"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[9391],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5648:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={sidebar_position:2.6,title:"FAQ",sidebar_label:"FAQ"},l="Troubleshooting Bring Your Own Cluster (BYOC)",u={unversionedId:"platform/Custom Cloud Credentials/troubleshooting",id:"platform/Custom Cloud Credentials/troubleshooting",title:"FAQ",description:"Deploying BYOC",source:"@site/docs/platform/2_Custom Cloud Credentials/troubleshooting.md",sourceDirName:"platform/2_Custom Cloud Credentials",slug:"/platform/Custom Cloud Credentials/troubleshooting",permalink:"/platform/Custom Cloud Credentials/troubleshooting",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/2_Custom Cloud Credentials/troubleshooting.md",tags:[],version:"current",sidebarPosition:2.6,frontMatter:{sidebar_position:2.6,title:"FAQ",sidebar_label:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Cluster Context",permalink:"/platform/Custom Cloud Credentials/grid-cluster-context"},next:{title:"Feature Requests",permalink:"/platform/feature-requests"}},c=[{value:"Deploying BYOC",id:"deploying-byoc",children:[{value:"Kubernetes API Authentication Errors",id:"kubernetes-api-authentication-errors",children:[],level:3}],level:2},{value:"Deploying Workloads",id:"deploying-workloads",children:[{value:"Stuck in Pending State",id:"stuck-in-pending-state",children:[{value:"Awaiting AWS Provisioning",id:"awaiting-aws-provisioning",children:[],level:4},{value:"Sessions One Time Startup Process",id:"sessions-one-time-startup-process",children:[],level:4},{value:"Requested Instances not Within Your Availability Zones",id:"requested-instances-not-within-your-availability-zones",children:[],level:4}],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting-bring-your-own-cluster-byoc"},"Troubleshooting Bring Your Own Cluster (BYOC)"),(0,r.kt)("h2",{id:"deploying-byoc"},"Deploying BYOC"),(0,r.kt)("h3",{id:"kubernetes-api-authentication-errors"},"Kubernetes API Authentication Errors"),(0,r.kt)("p",null,"To ensure proper authentication of the Kubernetes API it is necessary to have AWS STS regional endpoints enabled in the target region. See the official aws ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/account_settings"},"documentation")," to verify that the regional endpoint is activated. In most cases your region already has AWS STS regional endpoint enabled. See the official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html"},"Managing AWS STS in an AWS Region documentation")," for more details."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"Skipping this step will cause issues which are difficult to debug. The kubelet will be unable to authenticate against the Kubernetes API server, breaking core functionality.\n")))),(0,r.kt)("h2",{id:"deploying-workloads"},"Deploying Workloads"),(0,r.kt)("h3",{id:"stuck-in-pending-state"},"Stuck in Pending State"),(0,r.kt)("p",null,"There are usually three scenarios in which a Session or Run will be stuck in a pending state:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Awaiting AWS provisioning"),(0,r.kt)("li",{parentName:"ol"},"One time start-up process ",(0,r.kt)("strong",{parentName:"li"},"(Sessions only)")),(0,r.kt)("li",{parentName:"ol"},"The instance type is not available in the availability zones your BYOC cluster has access to.")),(0,r.kt)("p",null,"We will cover each of the three scenarios in detail below."),(0,r.kt)("h4",{id:"awaiting-aws-provisioning"},"Awaiting AWS Provisioning"),(0,r.kt)("p",null,"BYOC will request instances from AWS. Once the instances have been requested you will have to wait for AWS to provison the resources. In Customer-managed BYOC mode you can easily affecct the provisioning time by overprovisioning the instance types of interest. This will effectiviley put the instances on standby, thus increasing costs. However, by overprovisioning instances you will not have to wait for AWS to provision the instances for you as they are requested during BYOC creation."),(0,r.kt)("h4",{id:"sessions-one-time-startup-process"},"Sessions One Time Startup Process"),(0,r.kt)("p",null,"When ever a BYOC is deployed there is a one time startup process it must go through before it can deploy sessions. Regardless of the instance type selected this process can take up to 30 minutes. Once completed your BYOC will never have to undergo the startup process again before deploying sessions."),(0,r.kt)("h4",{id:"requested-instances-not-within-your-availability-zones"},"Requested Instances not Within Your Availability Zones"),(0,r.kt)("p",null,"The instances requested are AWS instances and thus you will be limited to all AWS instance provisioning limitations. One such limitation is that you will not be able to get instances that are not within your availability zones. There are two ways around this assuming the instances are available within the deployed region:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"grid edit cluster [cluster name]"),' and update the "xMultiAzCount" field'),(0,r.kt)("li",{parentName:"ol"},"If using ",(0,r.kt)("strong",{parentName:"li"},"Customer-managed BYOC mode"),' increase the "multi_az_count" variable in ',(0,r.kt)("inlineCode",{parentName:"li"},"your.tfvars"))))}p.isMDXComponent=!0}}]);