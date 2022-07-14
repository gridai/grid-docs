"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[1829],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"Creating Runs from Dockerfile",sidebar_label:"Creating Runs from Dockerfile"},l=void 0,c={unversionedId:"features/runs/Creating Runs/Adv Runs/creating-runs-with-dockerfile",id:"features/runs/Creating Runs/Adv Runs/creating-runs-with-dockerfile",title:"Creating Runs from Dockerfile",description:"The following examples assume you have already installed and setup Grid. If you haven't, please visit the Getting Started page.",source:"@site/docs/features/runs/1_Creating Runs/2_Adv Runs/2_creating-runs-with-dockerfile.md",sourceDirName:"features/runs/1_Creating Runs/2_Adv Runs",slug:"/features/runs/Creating Runs/Adv Runs/creating-runs-with-dockerfile",permalink:"/features/runs/Creating Runs/Adv Runs/creating-runs-with-dockerfile",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/1_Creating Runs/2_Adv Runs/2_creating-runs-with-dockerfile.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Creating Runs from Dockerfile",sidebar_label:"Creating Runs from Dockerfile"},sidebar:"tutorialSidebar",previous:{title:"Advanced Run Creation",permalink:"/features/runs/Creating Runs/Adv Runs/README"},next:{title:"Creating Runs from Config File",permalink:"/features/runs/Creating Runs/Adv Runs/creating-runs-from-config"}},u=[{value:"Step 0: Create a Dockerfile",id:"step-0-create-a-dockerfile",children:[],level:3},{value:"Step 1: Create a Run",id:"step-1-create-a-run",children:[{value:"Step 2: View Build Logs",id:"step-2-view-build-logs",children:[],level:4}],level:3},{value:"Reuse Docker Images",id:"reuse-docker-images",children:[],level:2},{value:"Testing Your Dockerfile Locally",id:"testing-your-dockerfile-locally",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The following examples assume you have already installed and setup Grid. If you haven't, please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.grid.ai/getting-started"},"Getting Started")," page."))),(0,r.kt)("h1",{id:"creating-runs-from-a-dockerfile"},"Creating Runs from a Dockerfile"),(0,r.kt)("p",null,"Grid supports the creation of Runs using ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," files. Dockerfiles are a container specification that determines how images are to be built. You can find documentation about Dockerfiles ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder"},"from the official Docker documentation"),". "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When using the dockerfile option, the requirements.txt file in the root project directory is ignored by Grid unless explicity referenced in a ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN")," command within the Dockerfile."))),(0,r.kt)("h3",{id:"step-0-create-a-dockerfile"},"Step 0: Create a Dockerfile"),(0,r.kt)("p",null,"Here's an example repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"}," .\n\u251c\u2500\u2500 Dockerfile\n\u2514\u2500\u2500 run.py      # Script we want to run\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," must be valid in order for it to work. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"# base image you want to use\n# make sure to use a CUDA image if running on GPUs\n# FROM nvidia/cuda:XX.X-cudnnX-devel-ubuntuXX.XX\nFROM python:3.9.6-slim\n\n# these two lines are mandatory\nWORKDIR /gridai/project\nCOPY . .\n\n# Update package list\nRUN apt-get update\n\n# any RUN commands you'd like to run\n# use this to install dependencies\nRUN pip install pytorch-lightning && \\\n    apt install curl -y\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Two lines are mandatory:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"WORKDIR"))," : determines which working directory to use. Grid expects your executable to be found in this directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"COPY . .")," :")," copies all your repository files into the image.")))),(0,r.kt)("h3",{id:"step-1-create-a-run"},"Step 1: Create a Run"),(0,r.kt)("p",null,"First, create a run using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dockerfile")," flag to specify the location of your Dockerfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ grid run --dockerfile Dockerfile --localdir run.py\n")),(0,r.kt)("h4",{id:"step-2-view-build-logs"},"Step 2: View Build Logs"),(0,r.kt)("p",null,"You can view build logs while the images are built. Here is a preview of the build logs for a Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"# shows last 10 lines\n# experiment has run successfully\n$ grid logs divergent-piculet-508-exp0 -l 10 --show-build-logs\n\n\u280b Fetching logs ...GraphQL URL: https://staging.grid.ai/graphql\n[build] [2021-06-30T21:55:58.139136+00:00]   Stored in directory: /root/.cache/pip/wheels/2f/a0/d3/4030d9f80e6b3be787f19fc911b8e7aa462986a40ab1e4bb94\n[build] [2021-06-30T21:55:58.142745+00:00] Successfully built future\n[build] [2021-06-30T21:55:58.437950+00:00] Installing collected packages: urllib3, pyasn1, idna, chardet, certifi, six, rsa, requests, pyasn1-modules, oauthlib, multidict, cachetools, yarl, typing-extensions, requests-oauthlib, pyparsing, google-auth, attrs, async-timeout, werkzeug, torch, tensorboard-plugin-wit, protobuf, packaging, numpy, markdown, grpcio, google-auth-oauthlib, fsspec, aiohttp, absl-py, tqdm, torchmetrics, tensorboard, PyYAML, pyDeprecate, future, pytorch-lightning\n[build] [2021-06-30T21:56:17.643380+00:00] Successfully installed PyYAML-5.4.1 absl-py-0.13.0 aiohttp-3.7.4.post0 async-timeout-3.0.1 attrs-21.2.0 cachetools-4.2.2 certifi-2021.5.30 chardet-4.0.0 fsspec-2021.6.1 future-0.18.2 google-auth-1.32.1 google-auth-oauthlib-0.4.4 grpcio-1.38.1 idna-2.10 markdown-3.3.4 multidict-5.1.0 numpy-1.21.0 oauthlib-3.1.1 packaging-20.9 protobuf-3.17.3 pyDeprecate-0.3.0 pyasn1-0.4.8 pyasn1-modules-0.2.8 pyparsing-2.4.7 pytorch-lightning-1.3.7.post0 requests-2.25.1 requests-oauthlib-1.3.0 rsa-4.7.2 six-1.16.0 tensorboard-2.4.1 tensorboard-plugin-wit-1.8.0 torch-1.9.0 torchmetrics-0.4.0 tqdm-4.61.1 typing-extensions-3.10.0.0 urllib3-1.26.6 werkzeug-2.0.1 yarl-1.6.3\n[build] [2021-06-30T21:56:17.643396+00:00] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv\n[build] [2021-06-30T21:56:18.023729+00:00] INFO[0046] Taking snapshot of full filesystem...\n[build] [2021-06-30T21:57:08.467108+00:00] INFO[0096] Pushing layer 302180240179.dkr.ecr.us-east-1.amazonaws.com/grid-cloud-staging:e8a29581-0515-43c9-b675-4d69fd192f32:a0beb2d8d5c91e8e9c636fbf169c1b09e4e4814adab8b4ab36531c8ec69c0bd0 to cache now\n[build] [2021-06-30T21:57:08.467247+00:00] WARN[0096] error uploading layer to cache: getting tag for destination: repository can only contain the runes `abcdefghijklmnopqrstuvwxyz0123456789_-./`: grid-cloud-staging:e8a29581-0515-43c9-b675-4d69fd192f32\n[build] [2021-06-30T21:57:08.729481+00:00] INFO[0097] Pushing image to 302180240179.dkr.ecr.us-east-1.amazonaws.com/grid-cloud-staging:e8a29581-0515-43c9-b675-4d69fd192f32\n[build] [2021-06-30T21:58:40.454430+00:00] INFO[0188] Pushed image to 1 destinations\n[experiment] [2021-06-30T22:12:07.252114+00:00] Loop 90\n[experiment] [2021-06-30T22:12:07.252118+00:00] Loop 91\n[experiment] [2021-06-30T22:12:07.252121+00:00] Loop 92\n[experiment] [2021-06-30T22:12:07.252125+00:00] Loop 93\n[experiment] [2021-06-30T22:12:07.252129+00:00] Loop 94\n[experiment] [2021-06-30T22:12:07.252132+00:00] Loop 95\n[experiment] [2021-06-30T22:12:07.252136+00:00] Loop 96\n[experiment] [2021-06-30T22:12:07.252142+00:00] Loop 97\n[experiment] [2021-06-30T22:12:07.252146+00:00] Loop 98\n[experiment] [2021-06-30T22:12:07.252150+00:00] Loop 99\n")),(0,r.kt)("h2",{id:"reuse-docker-images"},"Reuse Docker Images"),(0,r.kt)("p",null,"After creating a Run, Grid stores the image for ",(0,r.kt)("strong",{parentName:"p"},"1 week"),", making subsequent runs faster to create. This is especially useful when your Run image has a lot of dependencies and takes a long time to build. You can take full advantage of this by taking the push ref and using it in the FROM statement within your Dockerfile. Be sure to include the mandatory lines as noted below in the example. You can find the push ref with the following syntax:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'grid logs --show-build-logs <run-name>-exp0 | grep "pushing manifest" | head -n 1')),(0,r.kt)("p",null,'For example with a run named "foo" you can extract the image reference with the following code:'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'grid logs --show-build-logs foo-exp0 | grep "pushing manifest" | head -n 1')),(0,r.kt)("p",null,"This will result in output similar to the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[build] [2022-03-21T18:21:12.800584+00:00] #8 pushing manifest for 302180240179.dkr.ecr.us-east-1.amazonaws.com/prod-2:01fyptkm18naj1mdye64eqws2p@sha256:e142c254d19c8c858bf52b938858d047d13a015998b9bf3f5d2baadce9a187ea")),(0,r.kt)("p",null,"Take the full ECR address as the FROM reference within your Dockerfile. In this example your Dockerfile would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM 302180240179.dkr.ecr.us-east-1.amazonaws.com/prod-2:01fyptkm18naj1mdye64eqws2p@sha256:e142c254d19c8c858bf52b938858d047d13a015998b9bf3f5d2baadce9a187ea\n\n# these two lines are mandatory\nWORKDIR /gridai/project\nCOPY . .\n")),(0,r.kt)("h2",{id:"testing-your-dockerfile-locally"},"Testing Your Dockerfile Locally"),(0,r.kt)("p",null,"It is a good idea to test that your ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," builds locally before sending it to Grid. This may allow you to iterate quickly over a set of configurations that work before submitting experiments."),(0,r.kt)("p",null,"You can do that by building your image with Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker build --tag test-image .\n")),(0,r.kt)("p",null,"If the image builds, your ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is correctly defined."),(0,r.kt)("p",null,"After building your image, make sure to also test that your script works as expected inside of it. For example, if your script is called ",(0,r.kt)("inlineCode",{parentName:"p"},"model.py")," then you would want to test your new image with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run test-image python model.py\n")),(0,r.kt)("p",null,"Grid runs a similar process in the backend, so if this works locally in our machine chances are that it will also run successfully on Grid."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have additional questions about Runs, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs/faq"},"FAQ"),". The section is periodically updated this with common questions from the Grid community."))))}p.isMDXComponent=!0}}]);