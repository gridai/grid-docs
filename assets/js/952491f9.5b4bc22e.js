"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[6787],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),d=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return s.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?s.createElement(f,r(r({ref:t},l),{},{components:n})):s.createElement(f,r({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var d=2;d<o;d++)r[d]=n[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8473:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var s=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],a={sidebar_position:1.9,title:"VSCode with Sessions",sidebar_label:"VSCode with Sessions"},c="VSCode with Sessions",d={unversionedId:"features/sessions/vscode-with-sessions",id:"features/sessions/vscode-with-sessions",title:"VSCode with Sessions",description:"Step 0: Create and add the SSH Key",source:"@site/docs/features/sessions/9_vscode-with-sessions.md",sourceDirName:"features/sessions",slug:"/features/sessions/vscode-with-sessions",permalink:"/features/sessions/vscode-with-sessions",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/sessions/9_vscode-with-sessions.md",tags:[],version:"current",lastUpdatedAt:1659650559,formattedLastUpdatedAt:"8/4/2022",sidebarPosition:1.9,frontMatter:{sidebar_position:1.9,title:"VSCode with Sessions",sidebar_label:"VSCode with Sessions"},sidebar:"tutorialSidebar",previous:{title:"SSH into Sessions",permalink:"/features/sessions/how-to-ssh-into-a-session"},next:{title:"Julia and R Languages in Sessions",permalink:"/features/sessions/a_using-julia-and-r-languages-in-sessions"}},l=[{value:"Step 0: Create and add the SSH Key",id:"step-0-create-and-add-the-ssh-key",children:[],level:2},{value:"Step 1: Launch a session",id:"step-1-launch-a-session",children:[],level:2},{value:"Step 2: Login to the interactive session",id:"step-2-login-to-the-interactive-session",children:[],level:2},{value:"Step 3: Install remote ssh extension",id:"step-3-install-remote-ssh-extension",children:[],level:2},{value:"Step 4: Click the remote tab and find your session",id:"step-4-click-the-remote-tab-and-find-your-session",children:[],level:2},{value:"Step 5: Ready",id:"step-5-ready",children:[],level:2}],p={toc:l};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vscode-with-sessions"},"VSCode with Sessions"),(0,o.kt)("h2",{id:"step-0-create-and-add-the-ssh-key"},"Step 0: Create and add the SSH Key"),(0,o.kt)("p",null,"Create an ssh key from the computer you'd like to connect from (skip this step if you already have a key)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# make the ssh key (if you don\'t have one)\nssh-keygen -b 2048 -t rsa -f ~/.ssh/grid_ssh_creds -q -N ""\n\n# add the key to the ssh-agent (to avoid having to explicitly state key on each connection)\n# to start the agent, run the following\neval $(ssh-agent)\n# then add the key\nssh-add  ~/.ssh/grid_ssh_creds\n\n# add the keys to grid\ngrid ssh-keys add key_1 ~/.ssh/grid_ssh_creds.pub\n')),(0,o.kt)("h2",{id:"step-1-launch-a-session"},"Step 1: Launch a session"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid session create --name fun-bear-259\n")),(0,o.kt)("h2",{id:"step-2-login-to-the-interactive-session"},"Step 2: Login to the interactive session"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid session ssh fun-bear-259\n")),(0,o.kt)("h2",{id:"step-3-install-remote-ssh-extension"},"Step 3: Install remote ssh extension"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5295).Z})),(0,o.kt)("h2",{id:"step-4-click-the-remote-tab-and-find-your-session"},"Step 4: Click the remote tab and find your session"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9025).Z})),(0,o.kt)("h2",{id:"step-5-ready"},"Step 5: Ready"),(0,o.kt)("p",null,"Clicking on it will open VSCode in the remote IxNode. You can use VSCode with any of its features."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(346).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can clone any Github repositories into a Session using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-using-the-command-line"},"HTTPS cloning method")," (SSH will not work)."))))}u.isMDXComponent=!0},5295:function(e,t,n){t.Z=n.p+"assets/images/remote-ssh-84dae9795d9ed541748ebd72dfc592f5.png"},346:function(e,t,n){t.Z=n.p+"assets/images/vscode-open-session-5581fce7f77caed2c268f88226c6b7a4.gif"},9025:function(e,t,n){t.Z=n.p+"assets/images/vscode-remote-82ab29e4bb6cd9ab1df18b97546725f2.gif"}}]);