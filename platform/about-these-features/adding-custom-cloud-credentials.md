# Add custom cloud credential

## Add custom cloud credential

### Custom cloud credentials

Grid can orchestrate infrastructure on your own AWS account by simply adding your own AWS credentials.

![](../../.gitbook/assets/own_creds.gif)

### Early access

{% hint style="danger" %}
Using your own AWS credentials with Grid is currently in closed early access.
{% endhint %}

[REQUEST early access to this feature](https://forms.gle/CDk9yajbA5MWSRKM8)

### Step 1: Get AWS credentials

#### A: Login to AWS and search for IAM

Login into your AWS account. You will then use the search bar to find "IAM" \(user management\).

![](../../.gitbook/assets/image%20%28156%29.png)

#### B: Click on "Users"

Click on the "Users" panel. You will be able to see a list of users. If you already have a user, click on your user name. If you don't, move to the next step to create a new user.

![](../../.gitbook/assets/image%20%2859%29.png)

#### C: Create New User \(optional\)

If you don't have a user available and would like to create one, on the "Users" page click on "Add user". Fill in the user name of your preference and make sure to check "Programmatic access" \(this allows you to use AWS keys\).

![](../../.gitbook/assets/image%20%2858%29.png)

Click on "Next: Permissions" &gt;

The user should have IAMFullAccess privileges.

Click on "Next: Tags" &gt; "Next: Review" &gt; "Create user".

#### D: Create New AWS Keys

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

#### A: Add Policies to Your Account

The final step is to add all the Grid policies to your account. That means that your AWS keys will now be able to perform the operations required by Grid.

1. First, log in to AWS and navigate to IAM
2. Click on "Users"
3. On the user's page, find your user name and click on it
4. Click on "Add permissions"
5. Click on "Attach existing policies directly"

![Granting permissions to an user.](../../.gitbook/assets/image%20%2813%29.png)

1. Search for the policy IAMFullAccess:  
2. Click the Check Box to the left of `IAMFullAccess`
3. Click on "Next:Review"
4. Click on "Add permissions"

Now that you have added the right permissions to your user name, you can use the user's AWS API keys with Grid.

### Step 3: Create Role & Policy grid requires

For the next step you're going to create role we're going to assume into. For this you'll be using terraform. Make sure you have `git`, `terraform`, `jq` and `AWS CLI` installed on your machine. If you're familiar with terraform we recommend you check the terraform module we'll be using to create necessary roles & policies. [https://github.com/gridai/terraform-aws-gridbyoc](https://github.com/gridai/terraform-aws-gridbyoc) This module is published on official terraform registry for your convenience [https://registry.terraform.io/modules/gridai/gridbyoc/aws/latest](https://registry.terraform.io/modules/gridai/gridbyoc/aws/latest)

For quick start

* Clone the repo

```bash
git clone https://github.com/gridai/terraform-aws-gridbyoc.git
cd terraform-aws-gridbyoc
```

* Make sure your AWS CLI is properly configured with [id & secret you created](adding-custom-cloud-credentials.md#d-create-new-aws-keys).  This are not shared with Grid.

```bash
aws configure

# prompt and example entries below

AWS Access Key ID [None]: xxxxxxxxx
AWS Secret Access Key [None]: xxxxxxxxx
Default region name [None]:
Default output format [None]:
```

* Run the Terraform script and enter the AWS Region when prompted

  \`\`\`bash

  terraform init

  terraform apply

## prompt and example entry  below

provider.aws.region The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.

Enter a value:

```text
- Get the output from terraform. By default terraform hides the sensitive secret output

``` bash
terraform output -o json | jq
```

From the last command you'll get the following output:

```text
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

### Step 4: Register your role in grid

```text
grid cluster aws --role-arn <arn:aws:iam::000000000000:role/example-role> --external-id <example-id> <cluster name>
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
grid session --cluster <cluster name>  create
```

Or if you're using config file set the `.compute.provider.cluster` field to the cluster name you've just provisioned

### Step 7: Enjoy

