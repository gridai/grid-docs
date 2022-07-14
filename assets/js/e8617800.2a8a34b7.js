"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[7423],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,f=g["".concat(c,".").concat(d)]||g[d]||u[d]||s;return t?a.createElement(f,o(o({ref:n},l),{},{components:t})):a.createElement(f,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2108:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return g}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),o=["components"],i={sidebar_position:2.1,title:"Changing Session Instance Type",sidebar_label:"Change Instance Type"},c="Change Instance Type of a Session [BETA]",p={unversionedId:"features/sessions/changing-instance-type",id:"features/sessions/changing-instance-type",title:"Changing Session Instance Type",description:"Changing Sesssion instance type allows you to upgrade or downgrade the compute capacity of the Session while keeping all of your work in progress untouched.",source:"@site/docs/features/sessions/changing-instance-type.md",sourceDirName:"features/sessions",slug:"/features/sessions/changing-instance-type",permalink:"/features/sessions/changing-instance-type",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/sessions/changing-instance-type.md",tags:[],version:"current",lastUpdatedAt:1657808501,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:2.1,frontMatter:{sidebar_position:2.1,title:"Changing Session Instance Type",sidebar_label:"Change Instance Type"},sidebar:"tutorialSidebar",previous:{title:"Julia and R Languages in Sessions",permalink:"/features/sessions/a_using-julia-and-r-languages-in-sessions"},next:{title:"FAQ",permalink:"/features/sessions/faq"}},l=[{value:"Change to spot instance",id:"change-to-spot-instance",children:[],level:3}],u={toc:l};function g(e){var n=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"change-instance-type-of-a-session-beta"},"Change Instance Type of a Session ","[BETA]"),(0,s.kt)("p",null,"Changing Sesssion instance type allows you to upgrade or downgrade the compute capacity of the Session while keeping all of your work in progress untouched."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"You should PAUSE the session to change the instance type. RESUME the session for the changes to take effect.")),(0,s.kt)("p",null,"Currently the following scenarios are supported: "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Changing from a CPU instance to another CPU instance"),(0,s.kt)("li",{parentName:"ol"},"Changing an On-Demand instance to a ",(0,s.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/runs/interruptible-machines#interruptible-machines"},"Spot Instance")),(0,s.kt)("li",{parentName:"ol"},"Changing from a Spot Instance to an On-Demand Instance")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(4942).Z})),(0,s.kt)("p",null,"The equivalent via the CLI command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"grid session change-instance-type [--spot , --on_demand] SESSION_NAME g4dn.xlarge\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(5440).Z})),(0,s.kt)("h3",{id:"change-to-spot-instance"},"Change to spot instance"),(0,s.kt)("p",null,"In the UI you can set the Spot checkbox or in the CLI add ",(0,s.kt)("inlineCode",{parentName:"p"},"--spot")," flag.\nYou still need to provide the instance type even if just changing from on demand to spot."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"grid session change-instance-type sassy-crane-892 --spot g4dn.xlarge\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"PAUSE")," the session before changing the instance type. Then RESUME the session for the changes to take effect."))))}g.isMDXComponent=!0},4942:function(e,n,t){n.Z=t.p+"assets/images/change-instance-type-ddacf2ba506f8fd3bc8f396f3f83048e.gif"},5440:function(e,n,t){n.Z=t.p+"assets/images/change-instance-type-37a5e3a72caa415da79ba1097970cb7e.png"}}]);