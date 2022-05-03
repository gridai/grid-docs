"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[870],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,b=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(b,l(l({ref:t},m),{},{components:n})):r.createElement(b,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1.3,title:"Environment Variables",sidebar_label:"Environment Variables"},s="Environment Variables",p={unversionedId:"features/sessions/environment-variables",id:"features/sessions/environment-variables",title:"Environment Variables",description:"Sessions come with a couple environment variables available for community use. These variables can be accessed in:",source:"@site/docs/features/sessions/3_environment-variables.md",sourceDirName:"features/sessions",slug:"/features/sessions/environment-variables",permalink:"/features/sessions/environment-variables",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/sessions/3_environment-variables.md",tags:[],version:"current",lastUpdatedAt:1651594387,formattedLastUpdatedAt:"5/3/2022",sidebarPosition:1.3,frontMatter:{sidebar_position:1.3,title:"Environment Variables",sidebar_label:"Environment Variables"},sidebar:"tutorialSidebar",previous:{title:"GitHub Login",permalink:"/features/sessions/github-login"},next:{title:"Pause Sessions",permalink:"/features/sessions/pause"}},m=[{value:"Environment Variables List",id:"environment-variables-list",children:[],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"Sessions come with a couple environment variables available for community use. These variables can be accessed in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jupyter Notebook via ",(0,i.kt)("a",{parentName:"li",href:"https://ipython.readthedocs.io/en/stable/interactive/magics.html#magic-env"},(0,i.kt)("inlineCode",{parentName:"a"},"%ENV VAR")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%ENV GRID_SESSION_NAME\n"))),(0,i.kt)("li",{parentName:"ul"},"Python via ",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/os.html#os.getenv"},(0,i.kt)("inlineCode",{parentName:"a"},"os.getenv"))," ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import os\nos.getenv('GRID_SESSION_NAME')\n"))),(0,i.kt)("li",{parentName:"ul"},"Terminal",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo $GRID_SESSION_NAME\n")))),(0,i.kt)("h2",{id:"environment-variables-list"},"Environment Variables List"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_URL"),(0,i.kt)("td",{parentName:"tr",align:null},"The Grid url.  Default is ",(0,i.kt)("inlineCode",{parentName:"td"},"https://platform.grid.ai:443"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_SESSION_ID"),(0,i.kt)("td",{parentName:"tr",align:null},"The Session's ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_SESSION_NAME"),(0,i.kt)("td",{parentName:"tr",align:null},"The Session's name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_API_KEY"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"grid login --key")," value")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_USER_ID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"grid login --username")," value")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_CONTEXT_CLUSTER_ID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"grid user set-cluster-context")," value")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_GIT_DOMAIN"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain. Default is ",(0,i.kt)("inlineCode",{parentName:"td"},"github.com"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_GIT_EMAIL"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/platform/github-integration"},"GITHUB")," email")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_GIT_PASSWORD"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/platform/github-integration"},"GITHUB")," Password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GRID_GIT_USERNAME"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/platform/github-integration"},"GITHUB")," Username")))))}d.isMDXComponent=!0}}]);