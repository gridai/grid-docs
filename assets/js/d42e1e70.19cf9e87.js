"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[9829],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5668:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],l={description:"Start a live machine"},o="grid session",c={unversionedId:"products/global-cli-configs/cli-api/grid-interactive",id:"products/global-cli-configs/cli-api/grid-interactive",title:"grid session",description:"Start a live machine",source:"@site/docs/products/global-cli-configs/cli-api/grid-interactive.md",sourceDirName:"products/global-cli-configs/cli-api",slug:"/products/global-cli-configs/cli-api/grid-interactive",permalink:"/products/global-cli-configs/cli-api/grid-interactive",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/products/global-cli-configs/cli-api/grid-interactive.md",tags:[],version:"current",lastUpdatedAt:1644927410,formattedLastUpdatedAt:"2/15/2022",frontMatter:{description:"Start a live machine"}},d=[{value:"create",id:"create",children:[],level:2},{value:"delete",id:"delete",children:[],level:2},{value:"mount",id:"mount",children:[],level:2},{value:"pause",id:"pause",children:[],level:2},{value:"resume",id:"resume",children:[],level:2},{value:"ssh",id:"ssh",children:[],level:2},{value:"sync-ssh-config",id:"sync-ssh-config",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grid-session"},"grid session"),(0,i.kt)("p",null,"Launch an interactive Session with the hardware and data of your choice."),(0,i.kt)("h2",{id:"create"},"create"),(0,i.kt)("p",null,"Creates an interactive Session."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid session create\n")),(0,i.kt)("p",null,"Allowed parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"flag"),(0,i.kt)("th",{parentName:"tr",align:"left"},"description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"optional"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"--credential"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The cloud credential to use with the session"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"--disk_size"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Disk size of the session"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"--instance_type"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cloud machine type"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"--name"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the Session"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"--config"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Points to a YAML config file"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"--description"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Description of the interactive session"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"--datastore_name"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of datastore to be mounted in interactive session"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"--datastore_version"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Version of datastore to be mounted in interactive session"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"--datastore_mount_dir"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Absolute path to mount Datastore in interactive session"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid session create --instance_type 2_cpu_4gb\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sessions are no longer recoverable after being deleted."))),(0,i.kt)("h2",{id:"delete"},"delete"),(0,i.kt)("p",null,"Deletes an interactive session."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid session delete the-session-name\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Deleting a session deletes all files on that machine. To keep the files consider pausing instead."))),(0,i.kt)("h2",{id:"mount"},"mount"),(0,i.kt)("p",null,"Mount interactive session directory to local.\nTo mount a filesystem use: ",(0,i.kt)("inlineCode",{parentName:"p"},"ixSession:[dir] mountpoint")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")," Mounts the home directory on the interactive session in dir ",(0,i.kt)("inlineCode",{parentName:"p"},"data")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid session mount bluberry-122 ./data\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")," Mounts ",(0,i.kt)("inlineCode",{parentName:"p"},"~/data")," directory on the interactive session to ",(0,i.kt)("inlineCode",{parentName:"p"},"./data")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid session mount bluberry-122:~/data ./data\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To unmount the session:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"fusermount3 -u mountpoint # Linux\numount mountpoint # OS X, FreeBSD\n")),(0,i.kt)("h2",{id:"pause"},"pause"),(0,i.kt)("p",null,"Pauses an interactive session."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid session pause bluberry-122\n")),(0,i.kt)("h2",{id:"resume"},"resume"),(0,i.kt)("p",null,"Resumes an interactive session."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid session resume bluberry-122\n")),(0,i.kt)("h2",{id:"ssh"},"ssh"),(0,i.kt)("p",null,"SSH to interactive session."),(0,i.kt)("p",null,"First, create an ssh key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t ed25519 -C "your_email@example.com"\n')),(0,i.kt)("p",null,"Now add it to grid"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid ssh-keys add lit_key ~/.ssh/ed25519.pub\n")),(0,i.kt)("p",null,"then ssh into the Session"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid session ssh happy-owl-123\n")),(0,i.kt)("h2",{id:"sync-ssh-config"},"sync-ssh-config"),(0,i.kt)("p",null,"Sync interactive session's ssh config to the local ssh config."),(0,i.kt)("p",null,"It manages a section within the ssh config file for all interactive sessions ssh config details."),(0,i.kt)("p",null,"Afterwards you can use the system's ssh & related utilities (sshfs, rsync, ansible, etc) with interactive sessions directly."),(0,i.kt)("p",null,"The default file is ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," and can be changed via envvar ",(0,i.kt)("inlineCode",{parentName:"p"},"GRID_SSH_CONFIG")))}m.isMDXComponent=!0}}]);