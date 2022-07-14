"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[8903],{3905:function(e,s,t){t.d(s,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function i(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function r(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?r(Object(t),!0).forEach((function(s){i(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function o(e,s){if(null==e)return{};var t,n,i=function(e,s){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||(i[t]=e[t]);return i}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var s=n.useContext(l),t=s;return e&&(t="function"==typeof e?e(s):a(a({},s),e)),t},u=function(e){var s=c(e.components);return n.createElement(l.Provider,{value:s},e.children)},d={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},p=n.forwardRef((function(e,s){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return t?n.createElement(m,a(a({ref:s},u),{},{components:t})):n.createElement(m,a({ref:s},u))}));function f(e,s){var t=arguments,i=s&&s.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var o={};for(var l in s)hasOwnProperty.call(s,l)&&(o[l]=s[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9577:function(e,s,t){t.r(s),t.d(s,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],o={sidebar_position:1.1,title:"Create and List Sessions",sidebar_label:"Create and List Sessions"},l="Create and List Sessions",c={unversionedId:"features/sessions/1_1_list_create_sessions",id:"features/sessions/1_1_list_create_sessions",title:"Create and List Sessions",description:"Create Sessions",source:"@site/docs/features/sessions/1_1_list_create_sessions.md",sourceDirName:"features/sessions",slug:"/features/sessions/1_1_list_create_sessions",permalink:"/features/sessions/1_1_list_create_sessions",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/sessions/1_1_list_create_sessions.md",tags:[],version:"current",lastUpdatedAt:1657808501,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1,title:"Create and List Sessions",sidebar_label:"Create and List Sessions"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/features/sessions/"},next:{title:"GitHub Login",permalink:"/features/sessions/github-login"}},u=[{value:"Create Sessions",id:"create-sessions",children:[],level:2},{value:"List Sessions",id:"list-sessions",children:[],level:2},{value:"Team Sessions",id:"team-sessions",children:[],level:2},{value:"Session Details",id:"session-details",children:[],level:2}],d={toc:u};function p(e){var s=e.components,o=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-and-list-sessions"},"Create and List Sessions"),(0,r.kt)("h2",{id:"create-sessions"},"Create Sessions"),(0,r.kt)("p",null,"From the Grid UI, you can create a Session by navigating to New --\x3e Session.\n",(0,r.kt)("img",{src:t(7341).Z})),(0,r.kt)("p",null,"You can also create a Session using the CLI with the command: "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"grid session create")," "),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," option to see all of the arguments available to ",(0,r.kt)("inlineCode",{parentName:"p"},"grid session")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"grid session create"),". You can also check out the ",(0,r.kt)("inlineCode",{parentName:"p"},"grid session")," ",(0,r.kt)("a",{parentName:"p",href:"/cli#grid-session"},"CLI docs"),". "),(0,r.kt)("h2",{id:"list-sessions"},"List Sessions"),(0,r.kt)("p",null,"From the Grid UI, you can see all your sessions on the ",(0,r.kt)("a",{parentName:"p",href:"https://platform.grid.ai/#/sessions"},"Sessions")," page. This view shows you both running and paused sessions. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8208).Z})),(0,r.kt)("p",null,"In the CLI you can list sessions with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grid session\n")),(0,r.kt)("h2",{id:"team-sessions"},"Team Sessions"),(0,r.kt)("p",null,"If you've been added to a team, you can see sessions created by everyone on your team in the Grid UI. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8114).Z})),(0,r.kt)("p",null,"Using the CLI, you can list all sessions created by your team with: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grid session --global\n")),(0,r.kt)("h2",{id:"session-details"},"Session Details"),(0,r.kt)("p",null,"From the Grid UI, you can quickly check a Session's details by clicking on the option menu associated with the Session.\nThe session details page shows instance information and status history\nof the session, where you can see when it was created, paused and resumed."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(1857).Z})),(0,r.kt)("p",null,"In the CLI you can check the session details but unfortunately the history is\nnot available."),(0,r.kt)("p",null,"To get the details for all session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grid session \n")))}p.isMDXComponent=!0},7341:function(e,s,t){s.Z=t.p+"assets/images/new-session-3c58be3fd64ffabcdeb7b52516e0782e.gif"},1857:function(e,s,t){s.Z=t.p+"assets/images/session-details-history-7498b21ffacdbbaa8e3ca500a0d682b3.gif"},8208:function(e,s,t){s.Z=t.p+"assets/images/sessions-list-190064e8cd9dbf72c5bd8f787b6647e2.png"},8114:function(e,s,t){s.Z=t.p+"assets/images/team-member-sessions-786e3e53395c70a3e60b1c65592e1876.gif"}}]);