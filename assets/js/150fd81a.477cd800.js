"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[2242],{3905:function(t,e,a){a.d(e,{Zo:function(){return f},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),o=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},f=function(t){var e=o(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,f=c(t,["components","mdxType","originalType","parentName"]),p=o(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return a?r.createElement(m,s(s({ref:e},f),{},{components:a})):r.createElement(m,s({ref:e},f))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,s=new Array(i);s[0]=p;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:n,s[1]=c;for(var o=2;o<i;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2354:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return f},default:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],c={title:"Accessing Artifacts",sidebar_label:"Accessing Artifacts"},l="Artifacts",o={unversionedId:"features/runs/artifacts",id:"features/runs/artifacts",title:"Accessing Artifacts",description:"Saving artifacts",source:"@site/docs/features/runs/8_artifacts.md",sourceDirName:"features/runs",slug:"/features/runs/artifacts",permalink:"/features/runs/artifacts",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/8_artifacts.md",tags:[],version:"current",lastUpdatedAt:1649678492,formattedLastUpdatedAt:"4/11/2022",sidebarPosition:8,frontMatter:{title:"Accessing Artifacts",sidebar_label:"Accessing Artifacts"},sidebar:"tutorialSidebar",previous:{title:"Attaching Datastores",permalink:"/features/runs/attaching-datastores"},next:{title:"Viewing Logs",permalink:"/features/runs/viewing-logs"}},f=[{value:"Saving artifacts",id:"saving-artifacts",children:[],level:2},{value:"Access artifacts via the UI",id:"access-artifacts-via-the-ui",children:[],level:2},{value:"Share artifacts",id:"share-artifacts",children:[],level:2},{value:"Access artifacts via the CLI",id:"access-artifacts-via-the-cli",children:[{value:"Artifacts for a run",id:"artifacts-for-a-run",children:[],level:3},{value:"Artifacts for an experiment",id:"artifacts-for-an-experiment",children:[],level:3}],level:2}],u={toc:f};function p(t){var e=t.components,c=(0,n.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"artifacts"},"Artifacts"),(0,i.kt)("h2",{id:"saving-artifacts"},"Saving artifacts"),(0,i.kt)("p",null,"Anytime your script saves artifacts, Grid captures those for you. It does not matter which folder you save artifacts to... Grid will automatically detect those."),(0,i.kt)("p",null,"Try ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/williamFalcon/hello/blob/main/hello.py"},"hello.py")," for an example"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8005).Z})),(0,i.kt)("h2",{id:"access-artifacts-via-the-ui"},"Access artifacts via the UI"),(0,i.kt)("p",null,"Artifacts are the output produced by the training process."),(0,i.kt)("p",null,"To access artifacts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the experiments"),(0,i.kt)("li",{parentName:"ul"},"Click artifacts")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9449).Z})),(0,i.kt)("h2",{id:"share-artifacts"},"Share artifacts"),(0,i.kt)("p",null,"Click the link to the right of the artifact to copy the link."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8448).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Artifact links have an expiration of 24 hours, new link is generated every 24 hours."))),(0,i.kt)("p",null,"If you delete runs and experiments, then artifacts are deleted, Grid will never delete artifacts unless you want them to be deleted"),(0,i.kt)("h2",{id:"access-artifacts-via-the-cli"},"Access artifacts via the CLI"),(0,i.kt)("p",null,"To get artifacts via the CLI, find the run name (via the UI or CLI)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# if it's still running\ngrid status\n\n# if it's completed\ngrid history\n")),(0,i.kt)("h3",{id:"artifacts-for-a-run"},"Artifacts for a run"),(0,i.kt)("p",null,"Get the artifacts for a run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid artifacts run-name\n")),(0,i.kt)("h3",{id:"artifacts-for-an-experiment"},"Artifacts for an experiment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# view the experiments in the run\ngrid status run-name\n")),(0,i.kt)("p",null,"get the artifacts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# get the artifacts (downloads by default to /grid_artifacts)\n# N in expN means the ith experiment (ie: exp0, exp1, exp3, ..., expN)\ngrid artifacts runname-expN\n")))}p.isMDXComponent=!0},9449:function(t,e,a){e.Z=a.p+"assets/images/art-8b95f3f077c18afeb6d53a826635f1ad.gif"},8005:function(t,e,a){e.Z=a.p+"assets/images/runs-artifacts-04129351b1e3a4c1a034ef9e1a3fbcd8.png"},8448:function(t,e,a){e.Z=a.p+"assets/images/sharing-artifacts-6f3df459f719b5f88149cd0fd5e0663c.png"}}]);