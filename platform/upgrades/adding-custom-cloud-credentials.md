---
description: >-
  Grid allows you to create a cluster inside your own infrastructure. Using this
  approach allows you to control where your data sits and keeping that data
  secure.
---

# Creating a New Cluster

{% hint style="info" %}
Request access to this feature! Send us a message to our [community Slack](https://gridai-community.slack.com) or send email to [support@grid.ai](mailto:support@grid.ai)
{% endhint %}

Grid creates clusters inside your own cloud account allowing you to keep complete control of the resources that you need. We'll guide you through the setup process for each of the supported cloud providers.

## Amazon Web Services (AWS)

### Requirements

Grid will create clusters designed for large AI workloads. In order to do so, your AWS account needs to have the **right permissions** and **quotas**. We'll cover both optional and required configurations as follows. If your cluster is small, or you require only a few instance types default quotas should work for you. Still, we recommend asking AWS for extra quotas as your needs expand in the future.

| Configuration                                         | Recommendation |
| ----------------------------------------------------- | -------------- |
| Auto Scaling groups per region                        | 800            |
| Launch configurations per region                      | 800            |
| EC2 Spot (instance family you are interested in)      | 1000+          |
| EC2 On-demand (instance family you are interested in) | 1000+          |

#### Requesting Quotas

All AWS accounts have "service quotas". These are limits for the utilization of service provided by AWS. In order to increase your quotas, you have to request a quota increase to a specific service. That will open a ticket with AWS support. You may need to follow-up on the ticket in order for the quota to be granted.

You can request a quota by doing

1. Login into your AWS console
2. Search for "[Service Quotas](https://console.aws.amazon.com/servicequotas/home)" and click on the result
3. Click on the area of the service (e.g. "Amazon Elastic Compute Cloud (Amazon EC2)")
4. Use the search filter to find the quota that you are looking for
5. Make a quota request

### Step 1: Get AWS Credentials

**A: Login to AWS and search for IAM**

Login into your AWS account. You will then use the search bar to find "IAM" (user management).

![](<../../.gitbook/assets/image (9).png>)

**B: Click on "Users"**

Click on the "Users" panel. You will be able to see a list of users. If you already have a user, click on your user name. If you don't, move to the next step to create a new user.

![](<../../.gitbook/assets/image (10).png>)

**C: Create New User (optional)**

If you don't have a user available and would like to create one, on the "Users" page click on "Add user". Fill in the user name of your preference and make sure to check "Programmatic access" (this allows you to use AWS keys).

![](<../../.gitbook/assets/image (26).png>)

Click on "Next: Permissions".

The user should have IAMFullAccess privileges.

Click on "Next: Tags" > "Next: Review" > "Create user".

**D: Create New AWS Keys**

1. Navigate to the "Users" page
2. Click on your user name
3. Click on the tab "Security Credentials"
4. Click on "Create access key"
5. Copy both the "Access key ID" and the "Secret access key" values

{% hint style="danger" %}
The "Secret access key" value will only be shown once. Make sure you copy that value and store it in a safe location.
{% endhint %}

Make sure that your user name has the right policies attached in order to user Grid correctly. Refer to the section [Adding Grid AWS Policies & Roles](https://docs.grid.ai/platform/about-these-features/adding-custom-cloud-credentials#step-2-add-iam-permissions-to-your-account) for more details.

### Step 2: Add IAM permissions to your account

The user you just created, and fetched credentials for should have IAMFullAccess privileges.

{% hint style="info" %}
Reach out to us via Slack or email if you have any issues creating the following AWS roles and policies. We're happy to help!
{% endhint %}

**A: Add Policies to Your Account**

The final step is to add all the Grid policies to your account. That means that your AWS keys will now be able to perform the operations required by Grid.

1. First, log in to AWS and navigate to IAM
2. Click on "Users"
3. On the user's page, find your user name and click on it
4. Click on "Add permissions"
5. Click on "Attach existing policies directly"

![Granting permissions to an user.](<../../.gitbook/assets/image (25).png>)

1. Search for the policy IAMFullAccess:
2. Click the Check Box to the left of `IAMFullAccess`
3. Click on "Next:Review"
4. Click on "Add permissions"

Now that you have added the right permissions to your user name, you can use the user's AWS API keys with Grid.

### Step 3: Create Role & Policy grid requires

For the next step you're going to create role we're going to assume into. For this you'll be using terraform. Make sure you have `git`, `terraform`, `jq` and `AWS CLI` installed on your machine. Installation instruction of these tools are [available](adding-custom-cloud-credentials.md#installing-3rd-party-tools). If you're familiar with terraform we recommend you check the terraform module we'll be using to create necessary roles & policies. [https://github.com/gridai/terraform-aws-gridbyoc](https://github.com/gridai/terraform-aws-gridbyoc) This module is published on official terraform registry for your convenience [https://registry.terraform.io/modules/gridai/gridbyoc/aws/latest](https://registry.terraform.io/modules/gridai/gridbyoc/aws/latest)

{% hint style="info" %}
The script needs following list of permissions:
{% endhint %}

{% hint style="info" %}
* "eks:\*",
* "ecr:\*",
* **"events:\*",**
* "arn:aws:iam::aws:policy/AmazonEC2FullAccess",
* "arn:aws:iam::aws:policy/AmazonGuardDutyFullAccess",
* "arn:aws:iam::aws:policy/AmazonRoute53ResolverFullAccess",
* "arn:aws:iam::aws:policy/AmazonS3FullAccess",
* "arn:aws:iam::aws:policy/AmazonSNSFullAccess",
* "arn:aws:iam::aws:policy/AmazonSQSFullAccess",
* "arn:aws:iam::aws:policy/AmazonVPCFullAccess",
* "arn:aws:iam::aws:policy/CloudWatchLogsFullAccess",
* "arn:aws:iam::aws:policy/IAMFullAccess",
{% endhint %}

For quick start

* Clone the repo

```bash
git clone https://github.com/gridai/terraform-aws-gridbyoc.git
cd terraform-aws-gridbyoc/quick-start
```

* Make sure your AWS CLI is properly configured with [id & secret you created](adding-custom-cloud-credentials.md#d-create-new-aws-keys). These are not shared with Grid.

```bash
unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
unset AWS_SESSION_TOKEN

aws configure

# prompt and example entries below

AWS Access Key ID [None]: xxxxxxxxx
AWS Secret Access Key [None]: xxxxxxxxx
Default region name [None]:
Default output format [None]:
```

* Verify AWS Access Key

```bash
aws sts get-caller-identity

# example entries below should match the above steps
{
    "UserId": "xxxxxxxxx",
    "Account": "xxxxxxxxx",
    "Arn": "arn:aws:iam::xxxxxxxxx:user/xxxxxxxxx"
}
```

* Run the Terraform script and enter the AWS Region when prompted. The region where the VPC is located is entered during the in the [later step.](adding-custom-cloud-credentials.md#step-4-register-your-role-in-grid)

```bash
terraform init
terraform apply

# enter provider.aws.region
provider.aws.region
  The region where AWS operations will take place. Examples
  are us-east-1, us-west-2, etc.

  Enter a value: <us-east-1>

# long list of actions truncated and the final prompt

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes
```

* Get the output from terraform. By default terraform hides the sensitive secret output

```bash
terraform output -json | jq
```

From the last command you'll get the following output:

```javascript
{
  "external_id": {
    "sensitive": true,
    "type": "string",
    "value": "<example-id>"
  },
  "role_arn": {
    "sensitive": false,
    "type": "string",
    "value": "<arn:aws:iam::000000000000:role/example-role>"
  },
  "role_name": {
    "sensitive": false,
    "type": "string",
    "value": "example-role"
  }
}
```

* Save `EXTERNAL_ID` and `ROLE_ARN` for use in [later steps](adding-custom-cloud-credentials.md#step-4-register-your-role-in-grid).

```bash
export EXTERNAL_ID=$(terraform output -json | jq -r '.external_id.value')
export ROLE_ARN=$(terraform output -json | jq -r '.role_arn.value')
```

### Step 4: Register Your Role in Grid

By default, Grid Sessions and Runs are spun up in Availability Zone `a` currently. Only specify the AWS region and not the AZ in the `--region` argument.

* Login to Grid. Please reference the detailed [steps](https://docs.grid.ai/products/global-cli-configs#install-the-cli) as required.

```bash
pip install lightning_grid --upgrade 
grid login --username <Grid user name> --key <Grid API Key>
```

* Create cluster in default region with default instance types.
* Cluster name must be lower case alphanumeric characters, '-' or '.' is allowed but not '\_', and must start and end with an alphanumeric character

```bash
grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID <cluster name>
```

* Create cluster in `us-west-2` region with default instance types. These will give you broad selection of commonly used instance type, but if you know better which one you'll be using specify it.

```bash
grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID --region us-west-2 <cluster name>
```

* Create cluster in `eu-west-2` region with `t2.medium` and `t2.xlarge` instance types

```bash
grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID --region us-west-2 --instance-types t2.medium,t2.large <cluster name>
```

* Launch cluster in cost-savings mode, using the `--cost-savings` flag. See the later chapter what cost-savings actually implies.

```bash
grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID --region us-west-2 --cost-savings --instance-types t2.medium,t2.large <cluster name>
```

* Launch cluster and edit advance option before submitting it for creation.

```bash
grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID --region us-west-2 --edit-before-creation --instance-types t2.medium,t2.large <cluster name>
```

### Step 5: Wait for cluster to be provisioned

```
grid clusters
```

And wait for your cluster status be `running`:

```
┏━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┓
┃ id                 ┃ name               ┃ status  ┃
┡━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━┩
│ grid-cloud-prod    │ grid-cloud-prod    │ running │
│ <cluster name>     │ <cluster name>     │ running │
└────────────────────┴────────────────────┴─────────┘
```

It can take some time to provision a new cluster, \~20-30 minutes

### Step 6: Run your workloads in your new cluster

Recommended way of running workloads in any cluster is by setting the cluster context. Cluster context can be set by 
every user using the below command. This will make the CLI only see resources in this cluster context. Every actions from
the CLI from that point onwards will be against this cluster context. More information is availble [here](../../products/global-cli-configs/cli-api/grid-cluster-context.md)

```
grid user set-cluster-context <cluster-name>
```

### Step 7: Enjoy!

Your cluster will be available for use on Grid, so use it (or any other cluster) as you wish.

## Editing and Deleting Clusters

Use `grid edit` to see instance types available and update as necessary. You can also switch between cost-savings and default mode of operation.

```bash
grid edit cluster <cluster name>
```

Use `grid delete` to delete cluster. Deleting a cluster will delete its resources, including runing resources. Use with care!

{% hint style="warning" %}
Grid attempts to delete all cluster resources when a delete operation is initiated. However, sometimes there are dangling resources left behind. Make sure to inspect your account for dangling resources and delete them manually if that is the case. Reach out to support if you have any issues -- we are happy to help!
{% endhint %}

```bash
grid delete cluster <cluster name>
```

## Cost saving mode

There are two cluster management modes you can pick, depending on your expected cluster size and latency/cost preferences. They are easily switched using the `--cost-savings` flag when creating the cluster.

* default(performance)

```
  "performance_profile": "CLUSTER_PERFORMANCE_PROFILE_DEFAULT",
```

* cost saving:

```
  "performance_profile": "CLUSTER_PERFORMANCE_PROFILE_COST_SAVING",
```

In the cost savings mode you're trading startup latency for lower cost. Grid has some background processes:

* VPC/EKS cluster/ELBs/CloudWatch Logs

which are the same in both modes. Some are variable:

* EC2 instances types & count for the management/skeleton crew purposes.

In the cost-savings mode we're running management workloads on a single server, while some components are scaled down to 0 replicas, and only booted when needed. In a performance (default) we run management nodes in HA (highly available) configuration, and certain components are persistently running to improve start-up latency. Depending on the region these costs are around \~$10/day, compared to \~$50/day for the default mode.

### Trade-offs

#### Equivalent

* In both modes the session start time is equivalent
* Experiment runtime speed is equivalent
* Tensorboard runtime speed is equivalent
* In both cases Kubernetes API control plane is being managed by AWS in an HA manner, thus unaffected

#### Degraded performance

* Experiments may start slower.
* Tensorboard may start slower.
* Datastores may take longer to be optimized.
* Experiment logs are optimized for smaller query volumes compared to default mode.

#### Operational risks

* There's a higher, small but non-negligible risk of cluster malfunction. This is due to a single point of failure concerning the single management node. This node runs gridlet agent & cluster-autoscaler responsible for dynamic scale up and down.
* Maximum concurrent experiment/session count is smaller. This means the cluster could experience issues with bigger node counts; especially with workload scheduling and scaling up & down the nodes. Mostly due to resource constraints imposed on gridlet & cluster-autoscaler.

By the way, you can also overprovision certain instance types that experiments & sessions start even faster for those instances:

```
"instance_types": [
    {
        "name": "t2.medium",

        # Number of extra warm instances that should be available to speed things up
        "overprovisioned_ondemand_count": 3
    }
],
```

Be warned you're paying for those spare capacities despite being unused most of the time. Use `grid edit cluster <cluster name>` or `grid clusters aws --edit-before-creation <cluster name>` to access these advance options.

## Installing 3rd Party Tools

Cluster setup requires the following tools, so make sure you have them installed.

* [git](https://git-scm.com)
* [jq](https://stedolan.github.io/jq/)
* [terraform](https://www.terraform.io)
* [AWS CLI](https://aws.amazon.com/cli/)

### MacOS

[brew](https://brew.sh) and [pip3](https://packaging.python.org/guides/tool-recommendations/) are used in this example.

```bash
brew install git
brew install terraform 
brew install jq
pip3 install awscli --upgrade --user
```

### Linux (Debian/Ubuntu)

[Grid Session SSH](https://docs.grid.ai/products/sessions/how-to-ssh-into-a-session) can be used to run the below example. [apt-get](http://manpages.ubuntu.com/manpages/cosmic/man8/apt-get.8.html) and [repository configuration](https://www.terraform.io/docs/cli/install/apt.html#repository-configuration) are used in this example.

```bash
# add hashicorp repo
sudo apt-get install gpg
sudo apt-get install software-properties-common
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

# install the tools
sudo apt-get install git
sudo apt-get install terraform 
sudo apt-get install jq
sudo apt-get install awscli
```
