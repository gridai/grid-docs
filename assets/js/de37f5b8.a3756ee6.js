"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[907],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3634:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={description:"Tutorial shows how to train a sentiment analysis model using Grid and Lightning Flash"},l="Text Classification",c={unversionedId:"examples/nlp/text-classification",id:"examples/nlp/text-classification",title:"Text Classification",description:"Tutorial shows how to train a sentiment analysis model using Grid and Lightning Flash",source:"@site/docs/examples/nlp/text-classification.md",sourceDirName:"examples/nlp",slug:"/examples/nlp/text-classification",permalink:"/examples/nlp/text-classification",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/examples/nlp/text-classification.md",tags:[],version:"current",lastUpdatedAt:1644927410,formattedLastUpdatedAt:"2/15/2022",frontMatter:{description:"Tutorial shows how to train a sentiment analysis model using Grid and Lightning Flash"}},p=[{value:"Goal",id:"goal",children:[],level:2},{value:"Overview",id:"overview",children:[{value:"<strong>IMDB Dataset</strong>",id:"imdb-dataset",children:[],level:3},{value:"<strong>Model (BERT)</strong>",id:"model-bert",children:[],level:3}],level:2},{value:"Step 1: Create Datastore",id:"step-1-create-datastore",children:[],level:2},{value:"Step 2: Start a new Run",id:"step-2-start-a-new-run",children:[],level:2},{value:"Step 3: Visualize Metrics",id:"step-3-visualize-metrics",children:[],level:2},{value:"Step 4: Download Artifacts",id:"step-4-download-artifacts",children:[],level:2},{value:"Bonus: Run in CLI",id:"bonus-run-in-cli",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-classification"},"Text Classification"),(0,r.kt)("h2",{id:"goal"},"Goal"),(0,r.kt)("p",null,"This example covers a text classification deep learning task"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Datastore"),(0,r.kt)("li",{parentName:"ol"},"Start new Run"),(0,r.kt)("li",{parentName:"ol"},"Visualize Metrics"),(0,r.kt)("li",{parentName:"ol"},"Download Artifacts")),(0,r.kt)("p",null,"Tutorial time: 5 minutes"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Classifying text is a deep learning task that represents a class of problems such as sentiment analysis: predicting the sentiment of tweets and movie reviews or customer sentiment regarding a product as well as classifying email as spam or not."),(0,r.kt)("p",null,"This example uses the Transformers model ","(","bert-base-uncased",")"," from ",(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/bert-base-uncased"},"huggingface repository"),", it is adapted to use PyTorch Lightning, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gridai/grid-text-classification"},"https://github.com/gridai/grid-text-classification")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PyTorchLightning/lightning-flash"},"Lightning Flash")),(0,r.kt)("h3",{id:"imdb-dataset"},(0,r.kt)("strong",{parentName:"h3"},"IMDB Dataset")),(0,r.kt)("p",null,"IMDB dataset contains movie reviews, it is used for natural language processing, text analytics or sentiment classification such as positive or negative sentiment based on the text in the review. This dataset was originally created for ",(0,r.kt)("a",{parentName:"p",href:"https://www.aclweb.org/anthology/P11-1015.pdf"},"this paper")),(0,r.kt)("h3",{id:"model-bert"},(0,r.kt)("strong",{parentName:"h3"},"Model ","(","BERT",")")),(0,r.kt)("p",null,"BERT","(",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1810.04805"},"Bidirectional Encoder Representations from Transformers"),")"," is a popular architecture used in NLP tasks. It works by applying bidirectional training of Transformer, a popular attention model, to language modeling."),(0,r.kt)("h2",{id:"step-1-create-datastore"},"Step 1: Create Datastore"),(0,r.kt)("p",null,"It is fastest to upload zipped datasets from the Web UI. Grid supports uploading files in formats s/.zip, .tar or tar.gz/.zip, .tar and tar.gz/"),(0,r.kt)("p",null,"The content of the archive is unzipped and unarchived when the datastore is created and presented for use in Session and Runs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"https://pl-flash-data.s3.amazonaws.com/imdb.zip\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13732925/121347438-319f5380-c8f5-11eb-9b61-be571f8aab1f.png",alt:"new-datastore"})),(0,r.kt)("h2",{id:"step-2-start-a-new-run"},"Step 2: Start a new Run"),(0,r.kt)("p",null,"Take a look at this file if you are curious about the model. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gridai/grid-text-classification/blob/main/train.py"},"https://github.com/gridai/grid-text-classification/blob/main/train.py")),(0,r.kt)("p",null,"Paste the link to file in the New Run page."),(0,r.kt)("p",null,"Make sure to select the datastore created above. Note the mount directory. Make sure to add flags to your script."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13732925/121349841-f81c1780-c8f7-11eb-9dd6-3fe54d77c32a.png",alt:"new run full 1"})),(0,r.kt)("p",null,"Add the following flags to the script, then Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"--gpus 1 \\\n--train_file /datastores/imdb-ds/imdb/train.csv \\\n--valid_file /datastores/imdb-ds/imdb/valid.csv \\\n--test_file /datastores/imdb-ds/imdb/test.csv \\\n--max_epochs 1\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13732925/121355055-7dee9180-c8fd-11eb-80bd-8e6f7add679a.png",alt:"new run full 3"})),(0,r.kt)("h2",{id:"step-3-visualize-metrics"},"Step 3: Visualize Metrics"),(0,r.kt)("p",null,"As the model starts to train, metrics appear in the metrics section, make sure to select the Experiments to see metrics."),(0,r.kt)("p",null,"Tensorboard is also accessible"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13732925/121350065-33b6e180-c8f8-11eb-9aba-bc836748c663.png",alt:"train loss"})),(0,r.kt)("h2",{id:"step-4-download-artifacts"},"Step 4: Download Artifacts"),(0,r.kt)("p",null,"Artifacts are available to download as well. You can choose to train for many epochs, create multiple checkpoints."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13732925/121350135-48937500-c8f8-11eb-8703-999161076d09.gif",alt:"artifacts"})),(0,r.kt)("h2",{id:"bonus-run-in-cli"},"Bonus: Run in CLI"),(0,r.kt)("p",null,"If you prefer to use CLI, use this command below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/gridai/grid-text-classification.git\ncd grid-text-classification\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grid run \\\n    --gpus 1 \\\n    --instance_type 1_v100_16gb \\\n    --datastore_name imdb-ds \\\n      train.py \\\n    --gpus 1  \\\n    --train_file /datastores/imdb-ds/imdb/train.csv \\\n    --valid_file /datastores/imdb-ds/imdb/valid.csv  \\\n    --test_file /datastores/imdb-ds/imdb/test.csv \\\n    --max_epochs 1\n")))}u.isMDXComponent=!0}}]);