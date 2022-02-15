# Creating a New Cluster
!!! note

    To request access to this feature send an email to [support@grid.ai](mailto:support@grid.ai) with the subject "Request Access to BYOC Feature".
    
## Amazon Web Services \(AWS\)

### Requirements

Grid will create clusters designed for large AI workloads. In order to do so, your AWS account needs to have the **right permissions** and **quotas**. We'll cover both optional and required configurations as follows.

| Configuration | Recommendation |
| :--- | :--- |
| Auto Scaling groups per region | 800 |
| Launch configurations per region | 600 |
| EC2 Spot \(instance family you are interested in\) | 1000+ |
| EC2 On-demand \(instance family you are interested in\) | 1000+ |

#### Requesting Quotas

All AWS accounts have "service quotas". These are limits for the utilization of service provided by AWS. In order to increase your quotas, you have to request a quota increase to a specific service. That will open a ticket with AWS support. You may need to follow-up on the ticket in order for the quota to be granted.

You can request a quota by doing

1. Login into your AWS console
2. Search for "[Service Quotas](https://console.aws.amazon.com/servicequotas/home)" and click on the result
3. Click on the area of the service \(e.g. "Amazon Elastic Compute Cloud \(Amazon EC2\)"\)
4. Use the search filter to find the quota that you are looking for
5. Make a quota request

### Step 1: Get AWS credentials

**A: Login to AWS and search for IAM**

Login into your AWS account. You will then use the search bar to find "IAM" \(user management\).

![](../../images/platform/IAM.png)

**B: Click on "Users"**

Click on the "Users" panel. You will be able to see a list of users. If you already have a user, click on your user name. If you don't, move to the next step to create a new user.

![](../../images/byoc/aws-list-users.png)

**C: Create New User \(optional\)**

If you don't have a user available and would like to create one, on the "Users" page click on "Add user". Fill in the user name of your preference and make sure to check "Programmatic access" \(this allows you to use AWS keys\).

![](../../images/byoc/aws-create-user.png)

Click on "Next: Permissions" &gt;

The user can be given AdministratorAccess priveleges as the user is only used to provision the AWS infrastructure needed by Grid. Grid itself will use a limited permission set.

Click on "Next: Tags" &gt; "Next: Review" &gt; "Create user".

**D: Create New AWS Keys**

1. Navigate to the "Users" page
2. Click on your user name
3. Click on the tab "Security Credentials"
4. Click on "Create access key"
5. Copy both the "Access key ID" and the "Secret access key" values

!!! note

    The "Secret access key" value will only be shown once. Make sure you copy that value and store it in a safe location.

Make sure that your user name has the right policies attached in order to user Grid correctly. Refer to the section [Adding Grid AWS Policies & Roles](https://docs.grid.ai/platform/about-these-features/adding-custom-cloud-credentials#step-2-add-iam-permissions-to-your-account) for more details.

### Step 2: Add IAM permissions to your account

The user you just created, and fetched credentials for should have AdministratorAccess privileges.

!!! note

    Reach out to us via [Slack](slack:gridai-community.slack.com) or [email](mailto:support@grid.ai) if you have any issues creating the following AWS roles and policies. We're happy to help!

**Add Policies to Your Account**

The final step is to add all the necessary permissions to your account to provision the necessary infrastructure. Customer-managed BYOC infrastructure Mode you own your infrastructure provisioning.

1. First, log in to AWS and navigate to IAM
2. Click on "Users"
3. On the user's page, find your user name and click on it
4. Click on "Add permissions"
5. Click on "Attach existing policies directly"

![Granting permissions to an user.](../../images/byoc/aws-add-permissions.png)

### Step 3: Create Role & Policy grid requires

For the next step you're going to create role we're going to assume into. For this you'll be using terraform. Make sure you have `git`, `terraform`, `jq` and `AWS CLI` installed on your machine. Installation instruction of these tools are [available](adding-custom-cloud-credentials.md#prerequisites).

!!! note

    Customer-managed BYOC Infrastructure Mode only gives Grid the following permissions:

!!!
  * "eks:\*", # only for the cluster it creates
  * "s3:\*", # only for the buckets it creates


#### Set Up
This version allows you to customize our terraform module to create your own BYOC infrastructure and set appropriate configurations for it via exposed variables **Make sure your AWS CLI is properly configured with [id & secret you created](adding-custom-cloud-credentials.md#d-create-new-aws-keys).  These are not shared with Grid.**

```bash
Clone the repo
git clone https://github.com/gridai/terraform-aws-grid-byoc-full.git
cd terraform-aws-grid-byoc-full
```

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

We advise performing the following steps before continuing deployment
1. Copy nmiculinic.tfvars from terraform-aws-grid-byoc-full/example
2. Update the cluster and hostname cluster_name. For example:
	  - cluster_name = "foo-01"
	  - hostname    = "foo-01.doom.gridai.dev"
*It is recommended to run "grid clusters" and make sure that the cluster_name in the .tfvars file you are using does not match an existing name cluster name. Else you will receive an error.*
3. Set:
	  - role_arn = ""
	  - testing_cluster = false
	  - guard_duty_integration = false
	  - builder_ami_name_override = ""
	  - bastion_ami_override = ""
  
Run the Terraform script and enter the AWS Region when prompted. The region where the VPC is located is entered during the in the [later step.](adding-custom-cloud-credentials.md#step-4-register-your-role-in-grid)

```bash
terraform init
terraform apply -var-file <your modified version of nmiculinic.tfvars>
```

Copy the output from the last command. The following code snippets may help you copy the output to your clipboard:

Linux
```bash
terraform output -json | jq -r '.gridv1_cluster.value' | tee /dev/stderr |xsel -ib
```

Mac:
```bash
terraform output -json | jq -r '.gridv1_cluster.value' | tee /dev/stderr | pbcopy
```

Alternatively, if those commands do not work you can manually copy the output by running the below command. By default terraform hides the sensitive secret output.
```bash
terraform output -json | jq -r '.gridv1_cluster.value'
```

### Step 4: Register your role in grid

By default, Grid Sessions and Runs are spun up in Availability Zone `a` currently. Only specify the AWS region and not the AZ in the `--region` argument.

* Login to Grid.  Please reference the detailed [steps](https://github.com/gridai/grid-docs/blob/master/docs/start-here/getting-started.md#login-steps) as required.

```bash
pip install lightning_grid --upgrade
grid login --username <Grid user name> --key <Grid API Key>
```

* Create cluster in default region with default instance types.
* Cluster name must be lower case alphanumeric characters, '-' or '.' is allowed but not '\_', and must start and end with an alphanumeric character

```
grid clusters aws <name> --role-arn <doesn't matter> --external-id <doesn't matter> --edit-before-creation
```
In edit paste the terraform output field you've just copied.

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

At this point you can update your cluster context so Grid runs commands against your new BYOC cluster by default. To do so run the following command:

```bash
grid user set-cluster-context <cluster-name>
```

Now you can run workloads against your cluster as you normally would against grid-cloud-prod.

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

!!! note

    Grid attempts to delete all cluster resources when a delete operation is initiated. However, sometimes there are dangling resources left behind. Make sure to inspect your account for dangling resources and delete them manually if that is the case. Reach out to support if you have any issues -- we are happy to help!

```bash
grid delete cluster <cluster name>
```
