"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[9685],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),y=o,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||n;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3126:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),i=["components"],c={title:"Security and Privacy",sidebar_label:"Security and Privacy"},s="Security & Privacy",l={unversionedId:"platform/security-and-privacy",id:"platform/security-and-privacy",title:"Security and Privacy",description:"Data Privacy",source:"@site/docs/platform/8_security-and-privacy.md",sourceDirName:"platform",slug:"/platform/security-and-privacy",permalink:"/platform/security-and-privacy",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/8_security-and-privacy.md",tags:[],version:"current",lastUpdatedAt:1657808501,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:8,frontMatter:{title:"Security and Privacy",sidebar_label:"Security and Privacy"},sidebar:"tutorialSidebar",previous:{title:"Report Feedback",permalink:"/platform/report-feedback"},next:{title:"SSO",permalink:"/platform/sso"}},u=[{value:"Data Privacy",id:"data-privacy",children:[],level:3},{value:"Cloud hosted service Access",id:"cloud-hosted-service-access",children:[],level:3},{value:"Self hosted and Private cloud",id:"self-hosted-and-private-cloud",children:[],level:3},{value:"Teams Collaboration",id:"teams-collaboration",children:[],level:3},{value:"Authorization",id:"authorization",children:[],level:3}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"security--privacy"},"Security & Privacy"),(0,n.kt)("h3",{id:"data-privacy"},"Data Privacy"),(0,n.kt)("p",null,"Any data you upload to Grid, or generate while using the platform, such as logs, model checkpoints, configuration files, metrics is private to you. You can choose to save, export or delete your data at any time. Grid does not see your code or compromise its privacy in any way. When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code. We treat your data as private and confidential in accordance with our ",(0,n.kt)("a",{parentName:"p",href:"https://www.grid.ai/terms-of-service/"},"Terms of Service")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.grid.ai/privacy-policy/"},"Privacy policy"),"."),(0,n.kt)("h3",{id:"cloud-hosted-service-access"},"Cloud hosted service Access"),(0,n.kt)("p",null,"Access to the Grid platform is through your registered email address or Github user name. Grid uses two factor authentication with phone validation to ensure secure access. Grid credentials and API key are unique to every user. The API key and credentials can be found on the Settings page in the web application, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.grid.ai/getting-started/your-login-credentials"},"here")," for more information."),(0,n.kt)("h3",{id:"self-hosted-and-private-cloud"},"Self hosted and Private cloud"),(0,n.kt)("p",null,"We follow best practices for security and encryption in our cloud hosted service. Grid also offers private cloud and self hosted installations. You can use Grid to orchestrate infrastructure on your own private cloud. To learn more about options for your business, you can ",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@grid.ai"},"connect with our Sales Team"),"."),(0,n.kt)("h3",{id:"teams-collaboration"},"Teams Collaboration"),(0,n.kt)("p",null,"You can choose to share your work with a team of collaborators working in a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.grid.ai/platform/collaboration"},"collaborative environment"),". Collaboration is a paid feature, to learn more about Collaboration, ",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@grid.ai"},"contact us"),"."),(0,n.kt)("h3",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,"By default you can only access and run scripts from public Github repositories on Grid. To grant access to your private repositories, you will need to enable it in Grid ",(0,n.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/sessions/github-login"},"see here for more details on how to do that"),". It is user responsibility to ensure they have permissions to grant access to private repos."))}p.isMDXComponent=!0}}]);