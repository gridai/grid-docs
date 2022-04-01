---
title: Grid Managed BYOC
sidebar_label: Grid Managed BYOC
---
import Note from "@site/src/components/Note";

This documentation assumes you have followed our [prereq installation steps](./prereq-installation.md).


# Deploying Grid Managed Bring Your Own Cluster (BYOC) Mode

:::note
Request access to this feature! Send us a message to our [community Slack](https://gridai-community.slack.com) or send email to [support@grid.ai](mailto:support@grid.ai)
:::

Grid creates clusters inside your own cloud account allowing you to keep complete control of the resources that you need. We'll guide you through the setup process for each of the supported cloud providers.

## Amazon Web Services \(AWS\)

### Requirements

Grid will create clusters designed for large AI workloads. In order to do so, your AWS account needs to have the **right permissions** and **quotas**. We'll cover both optional and required configurations as follows.

| Configuration | Recommendation |
| :--- | :--- |
| Auto Scaling groups per region | 800 |
| Launch configurations per region | 600 |
| EC2 Spot \(instance family you are interested in\) | 1000+ |
| EC2 On-demand \(instance family you are interested in\) | 1000+ |

AWS STS regional endpoints have to be enabled in the target region. Go to https://console.aws.amazon.com/iam/home#/account_settings and verify the regional endpoint is activated. In most cases your region already has AWS STS regional endpoint enabled -> https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html

<note>
    Skipping this step will cause difficult to debug issues. The kubelet will be unable to authenticate against the kubernetes API server, and nothing will work.
</note>
#### Requesting Quotas

All AWS accounts have "service quotas". These are limits for the utilization of service provided by AWS. In order to increase your quotas, you have to request a quota increase to a specific service. That will open a ticket with AWS support. You may need to follow-up on the ticket in order for the quota to be granted.

You can request a quota by doing

1. Login into your AWS console
2. Search for "[Service Quotas](https://console.aws.amazon.com/servicequotas/home)" and click on the result
3. Click on the area of the service \(e.g. "Amazon Elastic Compute Cloud \(Amazon EC2\)"\)
4. Use the search filter to find the quota that you are looking for
5. Make a quota request

### Step 1: Get AWS Credentials

**A: Login to AWS and search for IAM**

Login into your AWS account. You will then use the search bar to find "IAM" \(user management\).

![](/images/platform/IAM.png)

**B: Click on "Users"**

Click on the "Users" panel. You will be able to see a list of users. If you already have a user, click on your user name. If you don't, move to the next step to create a new user.

![](/images/byoc/aws-list-users.png)

**C: Create New User \(optional\)**

If you don't have a user available and would like to create one, on the "Users" page click on "Add user". Fill in the user name of your preference and make sure to check "Programmatic access" \(this allows you to use AWS keys\).

![](/images/byoc/aws-create-user.png)

Click on "Next: Permissions".

The user should have IAMFullAccess privileges.

Click on "Next: Tags" &gt; "Next: Review" &gt; "Create user".

**D: Create New AWS Keys**

1. Navigate to the "Users" page
2. Click on your user name
3. Click on the tab "Security Credentials"
4. Click on "Create access key"
5. Copy both the "Access key ID" and the "Secret access key" values

:::note
The "Secret access key" value will only be shown once. Make sure you copy that value and store it in a safe location.
:::

Make sure that your user name has the right policies attached in order to user Grid correctly. Refer to the section [Adding Grid AWS Policies & Roles](#step-2-add-iam-permissions-to-your-account) for more details.

### Step 2: Add IAM permissions to your account

The user you just created, and fetched credentials for should have IAMFullAccess privileges.

:::note
Reach out to us via Slack or email if you have any issues creating the following AWS roles and policies. We're happy to help!
:::

**A: Add Policies to Your Account**

The final step is to add all the Grid policies to your account. That means that your AWS keys will now be able to perform the operations required by Grid.

1. First, log in to AWS and navigate to IAM
2. Click on "Users"
3. On the user's page, find your user name and click on it
4. Click on "Add permissions"
5. Click on "Attach existing policies directly"

![Granting permissions to an user.](/images/byoc/aws-add-permissions.png)

1. Search for the policy IAMFullAccess:
2. Click the Check Box to the left of `IAMFullAccess`
3. Click on "Next:Review"
4. Click on "Add permissions"

Now that you have added the right permissions to your user name, you can use the user's AWS API keys with Grid.

### Step 3: Create Role & Policy grid requires

For the next step you're going to create role we're going to assume into. For this you'll be using terraform. Make sure you have `git`, `terraform`, `jq` and `AWS CLI` installed on your machine. Installation instruction of these tools are [available](adding-custom-cloud-credentials.md#installing-3rd-party-tools). If you're familiar with terraform we recommend you check the terraform module we'll be using to create necessary roles & policies. [https://github.com/gridai/terraform-aws-gridbyoc](https://github.com/gridai/terraform-aws-gridbyoc) This module is published on official terraform registry for your convenience [https://registry.terraform.io/modules/gridai/gridbyoc/aws/latest](https://registry.terraform.io/modules/gridai/gridbyoc/aws/latest)

:::note
The script needs following list of permissions:
:::

:::
  * "eks:\*",
  * "ecr:\*",
  * **"**events**:\*",**
  * "arn:aws:iam::aws:policy/AmazonEC2FullAccess",
  * "arn:aws:iam::aws:policy/AmazonGuardDutyFullAccess",
  * "arn:aws:iam::aws:policy/AmazonRoute53ResolverFullAccess",
  * "arn:aws:iam::aws:policy/AmazonS3FullAccess",
  * "arn:aws:iam::aws:policy/AmazonSNSFullAccess",
  * "arn:aws:iam::aws:policy/AmazonSQSFullAccess",
  * "arn:aws:iam::aws:policy/AmazonVPCFullAccess",
  * "arn:aws:iam::aws:policy/CloudWatchLogsFullAccess",
  * "arn:aws:iam::aws:policy/IAMFullAccess",
:::

For quick start

* Clone the repo

```bash
git clone https://github.com/gridai/terraform-aws-gridbyoc.git
cd terraform-aws-gridbyoc/quick-start
```

* Make sure your AWS CLI is properly configured with [id & secret you created](adding-custom-cloud-credentials.md#d-create-new-aws-keys).  These are not shared with Grid.

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

* Login to Grid.  Please reference the detailed [steps](../../getting-started/typical-workflow-cli-user.md#step-0-install-the-grid-cli) as required.

```bash
pip install lightning_grid --upgrade
grid login --username <Grid user name> --key <Grid API Key>
```

* Create cluster in default region with default instance types.
* Cluster name must be lower case alphanumeric characters, '-' or '.' is allowed but not '\_', and must start and end with an alphanumeric character

```bash
grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID <cluster name>
```

* Create cluster in `us-west-2` region with default instance types

```bash
grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID --region us-west-2 <cluster name>
```

* Create cluster in `eu-west-2` region with `t2.medium` and `t2.xlarge` instance types

```bash
grid clusters aws --role-arn $ROLE_ARN --external-id $EXTERNAL_ID --region us-west-2 --instance-types t2.medium,t2.large <cluster name>
```

### Step 5: Wait for cluster to be provisioned

```text
grid clusters
```

And wait for your cluster status be `running`:

```text
┏━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┓
┃ id                 ┃ name               ┃ status  ┃
┡━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━┩
│ grid-cloud-prod    │ grid-cloud-prod    │ running │
│ <cluster name>     │ <cluster name>     │ running │
└────────────────────┴────────────────────┴─────────┘
```

It can take some time to provision a new cluster, ~20-30 minutes

### Step 6: Run your workloads in your new cluster

```text
grid run --cluster <cluster name>
grid session create --cluster <cluster name>
```

Or if you're using config file set the `.compute.provider.cluster` field to the cluster name you've just provisioned

### Step 7: Enjoy!

Your cluster will be available for use on Grid, so use it \(or any other cluster\) as you wish.

## Editing and Deleting Clusters

Use `grid edit` to see instance types available and update as necessary.

```bash
grid edit cluster <cluster name>
```

Use `grid delete` to delete cluster. Deleting a cluster will delete its resources, including runing resources. Use with care!

:::note
Grid attempts to delete all cluster resources when a delete operation is initiated. However, sometimes there are dangling resources left behind. Make sure to inspect your account for dangling resources and delete them manually if that is the case. Reach out to support if you have any issues -- we are happy to help!
:::

The below example will be a blocking call that freezes your CLI until the cluster has been successfully deleted. To do regular cluster deletion simply remove the `--wait` flag from the call.

```bash
grid delete cluster <cluster name> --wait
```

Next use terraform to delete the AWS resources you created as part of the install process.

```bash
terraform destroy
```

# Next Steps
Now that you have gotten a feel for deploying Grid Managed BYOC Mode, we would like to show you our enterprise ready mode called [Customer Managed BYOC Mode](./customer-managed-byoc.md).
