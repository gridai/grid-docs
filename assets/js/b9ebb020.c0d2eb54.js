"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[4109],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4154:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"Grid-Managed BYOC",sidebar_label:"Grid-Managed BYOC"},s="Overview",u={unversionedId:"platform/Custom Cloud Credentials/adding-custom-cloud-credentials",id:"platform/Custom Cloud Credentials/adding-custom-cloud-credentials",title:"Grid-Managed BYOC",description:"This page describes BYOC cluster creation in Grid-Managed infrastructure mode. In this mode, Grid manages and provisions AWS infrastructure on your behalf in a fully automated fashion. To achieve this, Grid requires more permissions (including iam:FullAccess) than the self-managed BYOC mode requires.",source:"@site/docs/platform/2_Custom Cloud Credentials/3_adding-custom-cloud-credentials.md",sourceDirName:"platform/2_Custom Cloud Credentials",slug:"/platform/Custom Cloud Credentials/adding-custom-cloud-credentials",permalink:"/platform/Custom Cloud Credentials/adding-custom-cloud-credentials",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/2_Custom Cloud Credentials/3_adding-custom-cloud-credentials.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Grid-Managed BYOC",sidebar_label:"Grid-Managed BYOC"},sidebar:"tutorialSidebar",previous:{title:"BYOC Prerequisites",permalink:"/platform/Custom Cloud Credentials/prereq-installation"},next:{title:"Self-Managed BYOC",permalink:"/platform/Custom Cloud Credentials/self-managed-byoc"}},c=[{value:"Amazon Web Services (AWS)",id:"amazon-web-services-aws",children:[{value:"Requirements",id:"requirements",children:[{value:"Requesting Quotas",id:"requesting-quotas",children:[],level:4}],level:3},{value:"Step 1: Get AWS Credentials",id:"step-1-get-aws-credentials",children:[{value:"A: Login to AWS and search for IAM",id:"a-login-to-aws-and-search-for-iam",children:[],level:4},{value:"B: Click on &quot;Users&quot;",id:"b-click-on-users",children:[],level:4},{value:"C: Create New User (optional)",id:"c-create-new-user-optional",children:[],level:4},{value:"D: Create New AWS Keys",id:"d-create-new-aws-keys",children:[],level:4}],level:3},{value:"Step 2: Add IAM permissions to your account",id:"step-2-add-iam-permissions-to-your-account",children:[{value:"A: Add Policies to Your Account",id:"a-add-policies-to-your-account",children:[],level:4}],level:3},{value:"Step 3: Create Role &amp; Policy grid requires",id:"step-3-create-role--policy-grid-requires",children:[],level:3},{value:"Step 4: Register Your Role in Grid",id:"step-4-register-your-role-in-grid",children:[],level:3},{value:"Step 5: Wait for cluster to be provisioned",id:"step-5-wait-for-cluster-to-be-provisioned",children:[],level:3},{value:"Step 6: Run your workloads in your new cluster",id:"step-6-run-your-workloads-in-your-new-cluster",children:[],level:3},{value:"Step 7: Enjoy!",id:"step-7-enjoy",children:[],level:3}],level:2},{value:"Editing Clusters",id:"editing-clusters",children:[],level:2},{value:"Deleting Clusters",id:"deleting-clusters",children:[],level:2}],d={toc:c};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This page describes BYOC cluster creation in Grid-Managed infrastructure mode. In this mode, Grid manages and provisions AWS infrastructure on your behalf in a fully automated fashion. To achieve this, Grid requires more permissions (including iam:FullAccess) than the self-managed BYOC mode requires."),(0,i.kt)("p",null,"This documentation assumes you have followed our ",(0,i.kt)("a",{parentName:"p",href:"./prereq-installation"},"pre-requisites installation steps"),"."),(0,i.kt)("h1",{id:"deploying-grid-managed-bring-your-own-cluster-byoc-mode"},"Deploying Grid-Managed Bring Your Own Cluster (BYOC) Mode"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Request access to this feature! Send us a message to our ",(0,i.kt)("a",{parentName:"p",href:"https://gridai-community.slack.com"},"community Slack")," or send email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@grid.ai"},"support@grid.ai")))),(0,i.kt)("p",null,"Grid creates clusters inside your own cloud account, allowing you to maintain complete control over the resources that you need. We'll guide you through the setup process for each of the supported cloud providers."),(0,i.kt)("h2",{id:"amazon-web-services-aws"},"Amazon Web Services ","(","AWS",")"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"Grid creates clusters designed for large AI workloads. In order to do so, your AWS account needs to have the ",(0,i.kt)("strong",{parentName:"p"},"right permissions")," and ",(0,i.kt)("strong",{parentName:"p"},"quotas"),". We'll cover both optional and required configurations as follows."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Configuration"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Recommendation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Auto Scaling groups per region"),(0,i.kt)("td",{parentName:"tr",align:"left"},"800")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Launch configurations per region"),(0,i.kt)("td",{parentName:"tr",align:"left"},"600")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"EC2 Spot ","(","instance family you are interested in",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1000+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"EC2 On-demand ","(","instance family you are interested in",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1000+")))),(0,i.kt)("p",null,"Grid will create a number of AWS resources in order to provision your BYOC cluster as seen in the table below. If creating these resources would exceed your quota then the BYOC cluster creation process will fail. In order to address this issue you should either delete existing unused resources or increase your AWS quotas."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Resource"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required Quota"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"AWS IAM roles"),(0,i.kt)("td",{parentName:"tr",align:"left"},"15")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"AWS IAM policies"),(0,i.kt)("td",{parentName:"tr",align:"left"},"15")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"VPC"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"S3 Buckets"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5")))),(0,i.kt)("p",null,"AWS STS regional endpoints have to be enabled in the target region. Go to ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/account_settings"},"AWS account settings")," and verify the regional endpoint is activated. In most cases your region already has AWS STS regional endpoint enabled, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html"},"IAM User Guide"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Skipping this step will cause issues that are difficult to debug. The kubelet will be unable to authenticate against the kubernetes API server and nothing will work."))),(0,i.kt)("h4",{id:"requesting-quotas"},"Requesting Quotas"),(0,i.kt)("p",null,'All AWS accounts have "service quotas". These are limits for the utilization of service provided by AWS. In order to increase your quotas, you have to request a quota increase to a specific service. That will open a ticket with AWS support. You may need to follow-up on the ticket in order for the quota to be granted.'),(0,i.kt)("p",null,"You can request a quota by doing the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login into your AWS console"),(0,i.kt)("li",{parentName:"ol"},'Search for "',(0,i.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/servicequotas/home"},"Service Quotas"),'" and click on the result'),(0,i.kt)("li",{parentName:"ol"},"Click on the area of the service ","(",'e.g. "Amazon Elastic Compute Cloud ',"(","Amazon EC2",")",'"',")"),(0,i.kt)("li",{parentName:"ol"},"Use the search filter to find the quota that you are looking for"),(0,i.kt)("li",{parentName:"ol"},"Make a quota request")),(0,i.kt)("h3",{id:"step-1-get-aws-credentials"},"Step 1: Get AWS Credentials"),(0,i.kt)("h4",{id:"a-login-to-aws-and-search-for-iam"},"A: Login to AWS and search for IAM"),(0,i.kt)("p",null,'Login to your AWS account. You will then use the search bar to find "IAM" ',"(","user management",")","."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3462).Z})),(0,i.kt)("h4",{id:"b-click-on-users"},'B: Click on "Users"'),(0,i.kt)("p",null,'Click on the "Users" panel. You will be able to see a list of users. If you already have a user, click on your user name. If you don\'t, move to the next step to create a new user.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9744).Z})),(0,i.kt)("h4",{id:"c-create-new-user-optional"},"C: Create New User ","(","optional",")"),(0,i.kt)("p",null,'If you don\'t have a user available and would like to create one, on the "Users" page click on "Add user". Fill in the username of your preference and make sure to check "Programmatic access" ',"(","this allows you to use AWS keys",")","."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6073).Z})),(0,i.kt)("p",null,'Click on "Next: Permissions".'),(0,i.kt)("p",null,"The user should have IAMFullAccess privileges."),(0,i.kt)("p",null,'Click on "Next: Tags" ',">",' "Next: Review" ',">",' "Create user".'),(0,i.kt)("h4",{id:"d-create-new-aws-keys"},"D: Create New AWS Keys"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Navigate to the "Users" page'),(0,i.kt)("li",{parentName:"ol"},"Click on your user name"),(0,i.kt)("li",{parentName:"ol"},'Click on the tab "Security Credentials"'),(0,i.kt)("li",{parentName:"ol"},'Click on "Create access key"'),(0,i.kt)("li",{parentName:"ol"},'Copy both the "Access key ID" and the "Secret access key" values')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'The "Secret access key" value will only be shown once. Make sure you copy that value and store it in a safe location.'))),(0,i.kt)("p",null,"Make sure that your username has the right policies attached in order to user Grid correctly. Refer to the section ",(0,i.kt)("a",{parentName:"p",href:"#step-2-add-iam-permissions-to-your-account"},"Adding Grid AWS Policies & Roles")," for more details."),(0,i.kt)("h3",{id:"step-2-add-iam-permissions-to-your-account"},"Step 2: Add IAM permissions to your account"),(0,i.kt)("p",null,"The created user and fetched credentials for should have IAMFullAccess privileges."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Reach out to us via ",(0,i.kt)("a",{parentName:"p",href:"http://gridai-community.slack.com"},"Slack")," or ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@grid.ai"},"email")," if you have any issues creating the following AWS roles and policies. We're happy to help!"))),(0,i.kt)("h4",{id:"a-add-policies-to-your-account"},"A: Add Policies to Your Account"),(0,i.kt)("p",null,"The final step is to add all the Grid policies to your account. That means that your AWS keys will now be able to perform the operations required by Grid."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, log in to AWS and navigate to IAM"),(0,i.kt)("li",{parentName:"ol"},'Click on "Users"'),(0,i.kt)("li",{parentName:"ol"},"On the user's page, find your user name and click on it"),(0,i.kt)("li",{parentName:"ol"},'Click on "Add permissions"'),(0,i.kt)("li",{parentName:"ol"},'Click on "Attach existing policies directly"')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Granting permissions to a user.",src:a(4377).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Search for the policy IAMFullAccess:"),(0,i.kt)("li",{parentName:"ol"},"Click the Check Box to the left of ",(0,i.kt)("inlineCode",{parentName:"li"},"IAMFullAccess")),(0,i.kt)("li",{parentName:"ol"},'Click on "Next:Review"'),(0,i.kt)("li",{parentName:"ol"},'Click on "Add permissions"')),(0,i.kt)("p",null,"Now that you have added the right permissions to your username, you can use the user's AWS API keys with Grid."),(0,i.kt)("h3",{id:"step-3-create-role--policy-grid-requires"},"Step 3: Create Role & Policy grid requires"),(0,i.kt)("p",null,"For the next step you're going to create role we're going to assume into. For this you'll be using terraform. Make sure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jq")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS CLI")," installed on your machine. Installation instruction of these tools are ",(0,i.kt)("a",{parentName:"p",href:"./prereq-installation#installation-steps"},"available here"),". If you're familiar with terraform we recommend you check the terraform module we'll be using to create necessary roles & policies, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gridai/terraform-aws-gridbyoc"},"https://github.com/gridai/terraform-aws-gridbyoc"),". This module is published on the official terraform registry for your convenience ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/gridai/gridbyoc/aws/latest"},"https://registry.terraform.io/modules/gridai/gridbyoc/aws/latest"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The script needs following list of permissions:"))),(0,i.kt)("p",null,":::"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"eks:',"*",'",'),(0,i.kt)("li",{parentName:"ul"},'"ecr:',"*",'",'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},'"'),"events",(0,i.kt)("strong",{parentName:"li"},":","*",'",')),(0,i.kt)("li",{parentName:"ul"},'"arn:aws:iam::aws:policy/AmazonEC2FullAccess",'),(0,i.kt)("li",{parentName:"ul"},'"arn:aws:iam::aws:policy/AmazonGuardDutyFullAccess",'),(0,i.kt)("li",{parentName:"ul"},'"arn:aws:iam::aws:policy/AmazonRoute53ResolverFullAccess",'),(0,i.kt)("li",{parentName:"ul"},'"arn:aws:iam::aws:policy/AmazonS3FullAccess",'),(0,i.kt)("li",{parentName:"ul"},'"arn:aws:iam::aws:policy/AmazonSNSFullAccess",'),(0,i.kt)("li",{parentName:"ul"},'"arn:aws:iam::aws:policy/AmazonSQSFullAccess",'),(0,i.kt)("li",{parentName:"ul"},'"arn:aws:iam::aws:policy/AmazonVPCFullAccess",'),(0,i.kt)("li",{parentName:"ul"},'"arn:aws:iam::aws:policy/CloudWatchLogsFullAccess",'),(0,i.kt)("li",{parentName:"ul"},'"arn:aws:iam::aws:policy/IAMFullAccess",\n:::')),(0,i.kt)("p",null,"For quick start:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone the repo")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/gridai/terraform-aws-gridbyoc.git\ncd terraform-aws-gridbyoc/quick-start\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure your AWS CLI is properly configured with ",(0,i.kt)("a",{parentName:"li",href:"#d-create-new-aws-keys"},"id & secret you created"),". These are not shared with Grid.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"unset AWS_ACCESS_KEY_ID\nunset AWS_SECRET_ACCESS_KEY\nunset AWS_SESSION_TOKEN\n\naws configure\n\n# prompt and example entries below\n\nAWS Access Key ID [None]: xxxxxxxxx\nAWS Secret Access Key [None]: xxxxxxxxx\nDefault region name [None]:\nDefault output format [None]:\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify AWS Access Key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'aws sts get-caller-identity\n\n# example entries below should match the above steps\n{\n    "UserId": "xxxxxxxxx",\n    "Account": "xxxxxxxxx",\n    "Arn": "arn:aws:iam::xxxxxxxxx:user/xxxxxxxxx"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the Terraform script and enter the AWS Region when prompted. The region where the VPC is located is entered in the ",(0,i.kt)("a",{parentName:"li",href:"./adding-custom-cloud-credentials#step-4-register-your-role-in-grid"},"later step"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform init\nterraform apply\n\n# enter provider.aws.region\nprovider.aws.region\n  The region where AWS operations will take place. Examples\n  are us-east-1, us-west-2, etc.\n\n  Enter a value: <us-east-1>\n\n# long list of actions truncated and the final prompt\n\nDo you want to perform these actions?\n  Terraform will perform the actions described above.\n  Only 'yes' will be accepted to approve.\n\n  Enter a value: yes\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get the output from terraform. By default terraform hides the sensitive secret output.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform output -json | jq\n")),(0,i.kt)("p",null,"From the previous command, you should get the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "external_id": {\n    "sensitive": true,\n    "type": "string",\n    "value": "<example-id>"\n  },\n  "role_arn": {\n    "sensitive": false,\n    "type": "string",\n    "value": "<arn:aws:iam::000000000000:role/example-role>"\n  },\n  "role_name": {\n    "sensitive": false,\n    "type": "string",\n    "value": "example-role"\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Save ",(0,i.kt)("inlineCode",{parentName:"li"},"EXTERNAL_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ROLE_ARN")," for use in ",(0,i.kt)("a",{parentName:"li",href:"adding-custom-cloud-credentials#step-4-register-your-role-in-grid"},"later steps"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export EXTERNAL_ID=$(terraform output -json | jq -r '.external_id.value')\nexport ROLE_ARN=$(terraform output -json | jq -r '.role_arn.value')\n")),(0,i.kt)("h3",{id:"step-4-register-your-role-in-grid"},"Step 4: Register Your Role in Grid"),(0,i.kt)("p",null,"By default, Grid Sessions and Runs are spun up in Availability Zone ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),". Only specify the AWS region and not the AZ in the ",(0,i.kt)("inlineCode",{parentName:"p"},"--region")," argument."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to Grid.  Please reference the detailed ",(0,i.kt)("a",{parentName:"li",href:"../../getting-started/typical-workflow-cli-user#step-0-install-the-grid-cli"},"steps")," as required.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install lightning-grid --upgrade\ngrid login --username <Grid user name> --key <Grid API Key>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create cluster in default region with default instance types."),(0,i.kt)("li",{parentName:"ul"},"Cluster name must be lower case alphanumeric characters, '-' or '.' is allowed but not '","_","', and must start and end with an alphanumeric character")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID <cluster name>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create cluster in ",(0,i.kt)("inlineCode",{parentName:"li"},"us-west-2")," region with default instance types")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID --region us-west-2 <cluster name>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create cluster in ",(0,i.kt)("inlineCode",{parentName:"li"},"eu-west-2")," region with ",(0,i.kt)("inlineCode",{parentName:"li"},"t2.medium")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"t2.xlarge")," instance types")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID --region us-west-2 --instance-types t2.medium,t2.large <cluster name>\n")),(0,i.kt)("h3",{id:"step-5-wait-for-cluster-to-be-provisioned"},"Step 5: Wait for cluster to be provisioned"),(0,i.kt)("p",null,"After submitting the cluster creation request, you can check the cluster state by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid clusters\n")),(0,i.kt)("p",null,"And wait for your cluster status be ",(0,i.kt)("inlineCode",{parentName:"p"},"running"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 id                 \u2503 name               \u2503 type       \u2503 status  \u2503 created       \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 grid-cloud-prod    \u2502 grid-prod-cloud    \u2502 grid-cloud \u2502 running \u2502 2 days ago    \u2502\n\u2502 <cluster name>     \u2502 <cluster name>     \u2502 byoc       \u2502 running \u2502 a hour ago    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"It can take some time to provision a new cluster, ~30-50 minutes. Optionally, you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"--wait")," flag on the cluster creation step, and grid CLI will wait until the cluster is running."),(0,i.kt)("h3",{id:"step-6-run-your-workloads-in-your-new-cluster"},"Step 6: Run your workloads in your new cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run --cluster <cluster name>\ngrid session create --cluster <cluster name>\n")),(0,i.kt)("p",null,"Or if you're using config file set the ",(0,i.kt)("inlineCode",{parentName:"p"},".compute.provider.cluster")," field to the cluster name you've just provisioned."),(0,i.kt)("h3",{id:"step-7-enjoy"},"Step 7: Enjoy!"),(0,i.kt)("p",null,"Your cluster will be available for use on Grid, so use it ","(","or any other cluster",")"," as you wish."),(0,i.kt)("h2",{id:"editing-clusters"},"Editing Clusters"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"grid edit")," to see instance types available and update as necessary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid edit cluster <cluster name>\n")),(0,i.kt)("p",null,"An editor in your command line will show the json configuration for the Cluster like the one below (we have omitted with ellipsis ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," some attributes to make this section easier to understand)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "cluster_type": "CLUSTER_TYPE_BYOC",\n  "cost_factor": "",\n  "desired_state": "CLUSTER_STATE_RUNNING",\n  "driver": {\n    "external": null,\n    "kubernetes": {\n      "aws": {\n        ...\n        "instance_types": [\n          {\n            "name": "g4dn.xlarge",\n            "overprovisioned_ondemand_count": 0,\n          },\n          {\n            "name": "m5ad.xlarge",\n            "overprovisioned_ondemand_count": 0,\n          },\n        ],\n        ...\n      },\n      ...\n    },\n  },\n  ...\n  "performance_profile": "CLUSTER_PERFORMANCE_PROFILE_DEFAULT"\n}\n')),(0,i.kt)("p",null,"Some important attributes you can chagne:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"instance_types"),": Here you can add or remove Instance Type following AWS naming, but at the moment only instances that are amd64 compatible can be used.  You can also change the ",(0,i.kt)("inlineCode",{parentName:"li"},"overprovisioned_ondemand_count")," for the instance if you want to pre-allocate instances for faster start but that will also make you incur in extra costs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"performance_profile"),": You can change the profile for the cluster. It can either be",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLUSTER_PERFORMANCE_PROFILE_DEFAULT")," with extra nodes for larger clusters and metrics and monitoring capabilities "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLUSTER_PERFORMANCE_PROFILE_COST_SAVING")," for smaller clusters but also without metrics and monitoring capabilities but also less expensive to run.")))),(0,i.kt)("h2",{id:"deleting-clusters"},"Deleting Clusters"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"grid delete")," to delete cluster. Deleting a cluster will delete its resources, including runing resources. The deletion will take ~20-30 minutes. Use with care! The flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--wait")," is also available here, in the case of using, grid CLI will wait until the cluster is deleted."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Grid attempts to delete all cluster resources when a delete operation is initiated. However, sometimes there are dangling resources left behind. Make sure to inspect your account for dangling resources and delete them manually if that is the case. Reach out to support if you have any issues -- we are happy to help!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid delete cluster <cluster name>\n")),(0,i.kt)("p",null,"Next, use terraform to delete the AWS resources you created as part of the install process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform destroy\n")),(0,i.kt)("h1",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Now that you have gotten a feel for deploying Grid Managed BYOC Mode, we would like to show you the Enterprise-ready mode called ",(0,i.kt)("a",{parentName:"p",href:"./self-managed-byoc"},"Self Managed BYOC Mode"),"."))}p.isMDXComponent=!0},4377:function(e,t,a){t.Z=a.p+"assets/images/aws-add-permissions-736895ac3b3c7377dbf6435435ec3a28.png"},6073:function(e,t,a){t.Z=a.p+"assets/images/aws-create-user-8443fa7d57e7f7db050c9c869160e41d.png"},9744:function(e,t,a){t.Z=a.p+"assets/images/aws-list-users-a9501a83d1c8aa1e2d97c4c4d1fb944b.png"},3462:function(e,t,a){t.Z=a.p+"assets/images/IAM-6ec3d9828b3460cd568fb108bc4e293a.png"}}]);