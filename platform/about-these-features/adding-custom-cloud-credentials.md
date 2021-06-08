# Add custom cloud credentials

## Custom cloud credentials

Grid can orchestrate infrastructure on your own AWS account by simply adding your own AWS credentials.

![](../../.gitbook/assets/own_creds.gif)

## Early access

{% hint style="danger" %}
Using your own AWS credentials with Grid is currently in closed early access. 
{% endhint %}

[REQUEST early access to this feature](https://forms.gle/CDk9yajbA5MWSRKM8)

## Step 1: Get AWS credentials

### A: Login to AWS and search for IAM

Login into your AWS account. You will then use the search bar to find "IAM" \(user management\).

![](../../.gitbook/assets/image%20%28156%29.png)

### B: Click on "Users"

Click on the "Users" panel. You will be able to see a list of users. If you already have a user, click on your user name. If you don't, move to the next step to create a new user.

![](../../.gitbook/assets/image%20%2859%29.png)

### C: Create New User \(optional\)

If you don't have a user available and would like to create one, on the "Users" page click on "Add user". Fill in the user name of your preference and make sure to check "Programmatic access" \(this allows you to use AWS keys\). 

![](../../.gitbook/assets/image%20%2858%29.png)

Click on "Next: tags" &gt; "Next: review" &gt; "Create user".

### D: Create New AWS Keys

1. Navigate to the "Users" page
2. Click on your user name
3. Click on the tab "Security Credentials"
4. Click on "Create access key"
5. Copy both the "Access key ID" and the "Secret access key" values

{% hint style="danger" %}
The "Secret access key" value will only be shown once. Make sure you copy that value and store it in a safe location. 
{% endhint %}

Make sure that your user name has the right policies attached in order to user Grid correctly. Refer to the section [Adding Grid AWS Policies & Roles]() for more details. 

## Step 2: Create AWS Policies & Roles

Grid requires 3 IAM policies and 3 IAM roles in order to orchestrate resources in your AWS account. This section walks you through a step-by-step on how to create those in AWS.

{% hint style="info" %}
Reach out to us via Slack or email if you have any issues creating the following AWS roles and policies. We're happy to help!
{% endhint %}

### A: Create Policies

We will be creating the following 3 policies in AWS:

* grid-policy
* RKE-controlplane
* RKE-worker

Use the following steps to create those:

1. First, log in to AWS and navigate to IAM.
2. Click on "Policies" &gt; "Create policy"
3. Click on the "JSON" tab

![JSON tab in the &quot;Create policy&quot; section.](../../.gitbook/assets/image%20%2822%29.png)

    4. Now, copy and paste the JSON from the next sections \(_**replace variables as indicated**_\). You will need to repeat the process for each of the three policies.

#### Overall Grid Policy

This policy allows Grid to control certain aspects of AWS. Namely, to manage EC2 instances, manage S3 buckets, and manage shared EC2 instance keys \(KMS\).

This policy has to be named: **`grid-policy`**

Use the JSON below to create a new IAM Policy. Replace the following variables in the JSON:

* **REGION**: the AWS region where you want policies implemented. This value can be any of the AWS regions \(e.g. `us-east-1`\).
* **AWS\_ACCOUNT\_ID:** your AWS account ID. Please refer to the [AWS Account Identifiers page](https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html) to identify where you can find those.

```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:Describe*",
                "ec2:ImportKeyPair",
                "ec2:CreateKeyPair",
                "ec2:CreateSecurityGroup",
                "ec2:CreateTags",
                "ec2:DeleteKeyPair",
                "kms:*",
                "s3:*"
            ],
            "Resource": "*"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": [
                "iam:PassRole",
                "ec2:RunInstances"
            ],
            "Resource": [
                "arn:aws:ec2:REGION::image/ami-*",
                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",
                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:placement-group/*",
                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",
                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:subnet/*",
                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:key-pair/*",
                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:network-interface/*",
                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:security-group/*",
                "arn:aws:iam::AWS_ACCOUNT_ID:role/*"
            ]
        },
        {
            "Sid": "VisualEditor2",
            "Effect": "Allow",
            "Action": [
                "ec2:RebootInstances",
                "ec2:TerminateInstances",
                "ec2:StartInstances",
                "ec2:StopInstances"
            ],
            "Resource": "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*"
        }
    ]
}
```

#### Kubernetes Control Plane Policy

We create Kubernetes clusters in your infrastructure. The Kubernetes control plane needs policies to create a number of AWS resources including creating & managing EC2 nodes and controlling AWS load balancers.

This policy needs to be named **`RKE-controlplane`**. 

```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "autoscaling:DescribeAutoScalingGroups",
                "autoscaling:DescribeLaunchConfigurations",
                "autoscaling:DescribeTags",
                "ec2:DescribeInstances",
                "ec2:DescribeRegions",
                "ec2:DescribeRouteTables",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSubnets",
                "ec2:DescribeVolumes",
                "ec2:CreateSecurityGroup",
                "ec2:CreateTags",
                "ec2:CreateVolume",
                "ec2:ModifyInstanceAttribute",
                "ec2:ModifyVolume",
                "ec2:AttachVolume",
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:CreateRoute",
                "ec2:DeleteRoute",
                "ec2:DeleteSecurityGroup",
                "ec2:DeleteVolume",
                "ec2:DetachVolume",
                "ec2:RevokeSecurityGroupIngress",
                "ec2:DescribeVpcs",
                "elasticloadbalancing:AddTags",
                "elasticloadbalancing:AttachLoadBalancerToSubnets",
                "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
                "elasticloadbalancing:CreateLoadBalancer",
                "elasticloadbalancing:CreateLoadBalancerPolicy",
                "elasticloadbalancing:CreateLoadBalancerListeners",
                "elasticloadbalancing:ConfigureHealthCheck",
                "elasticloadbalancing:DeleteLoadBalancer",
                "elasticloadbalancing:DeleteLoadBalancerListeners",
                "elasticloadbalancing:DescribeLoadBalancers",
                "elasticloadbalancing:DescribeLoadBalancerAttributes",
                "elasticloadbalancing:DetachLoadBalancerFromSubnets",
                "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
                "elasticloadbalancing:ModifyLoadBalancerAttributes",
                "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
                "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",
                "elasticloadbalancing:AddTags",
                "elasticloadbalancing:CreateListener",
                "elasticloadbalancing:CreateTargetGroup",
                "elasticloadbalancing:DeleteListener",
                "elasticloadbalancing:DeleteTargetGroup",
                "elasticloadbalancing:DescribeListeners",
                "elasticloadbalancing:DescribeLoadBalancerPolicies",
                "elasticloadbalancing:DescribeTargetGroups",
                "elasticloadbalancing:DescribeTargetHealth",
                "elasticloadbalancing:ModifyListener",
                "elasticloadbalancing:ModifyTargetGroup",
                "elasticloadbalancing:RegisterTargets",
                "elasticloadbalancing:SetLoadBalancerPoliciesOfListener",
                "iam:CreateServiceLinkedRole",
                "kms:DescribeKey"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

#### Kubernetes Worked Node Policy

The Kubernetes worker nodes also need specific policies, this time with the ability to perform operations against EC2 and ECR.

This policy needs to be named **`RKE-worker`**.

```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeInstances",
                "ec2:DescribeRegions",
                "ecr:GetAuthorizationToken",
                "ecr:BatchCheckLayerAvailability",
                "ecr:GetDownloadUrlForLayer",
                "ecr:GetRepositoryPolicy",
                "ecr:DescribeRepositories",
                "ecr:ListImages",
                "ecr:BatchGetImage"
            ],
            "Resource": "*"
        }
    ]
}
```

### B: Create Roles

You now need to create the following roles:

* RKE-controlplane-role
* RKE-worker-role
* GridInteractiveNode

#### Kubernetes Control Plane Role \(**`RKE-controlplane-role`**\)

1. First, log in to AWS and navigate to IAM.
2. Click on "**Roles**" &gt; "Create role"
3. Click on "**AWS service**"
4. Under "**Choose a use case**", click on "**EC2**" then "**Next: Permissions**"
5. Search for "**RKE-controlplane**" and select the corresponding policy, then click on "**Next: Tags**" &gt; "**Next: Review**"
6. Name the role `RKE-controlplane-role` and click on "**Create role**"

#### Kubernetes Worker Role \(`RKE-worker-role`\)

1. First, log in to AWS and navigate to IAM
2. Click on "**Roles**" &gt; "**Create role**"
3. Click on "**AWS service**"
4. Under "**Choose a use case**", click on "**EC2**" then "**Next: Permissions**"
5. Search for "**RKE-worker**" and select the corresponding policy, then click on "**Next: Tags**" &gt; "**Next: Review**"
6. Name the role `RKE-worker-role` and click on "**Create role**"

#### Grid Interactive Session \(**`GridInteractiveSession`**\)

1. First, log in to AWS and navigate to IAM
2. Click on "**Roles**" &gt; "**Create role**"
3. Click on "**AWS service**"
4. Under "**Choose a use case**", click on "**EC2**" then "**Next: Permissions**"
5. Search for "**RKE-worker**" and select the corresponding policy and also search for "**AmazonS3FullAccess**" and select the policy, then click on "**Next: Tags**" &gt; "**Next: Review**"
6. Name the role `GridInteractiveSession` and click on "**Create role**"

### C: Add Policies to Your Account

The final step is to add all the Grid policies to your account. That means that your AWS keys will now be able to perform the operations required by Grid.

1. First, log in to AWS and navigate to IAM
2. Click on "Users"
3. On the user's page, find your user name and click on it
4. Click on "Attach existing policies directly"

![Granting permissions to an user.](../../.gitbook/assets/image%20%2813%29.png)

    5. Search for the 3 policies that we created above: `grid-policy` , `RKE-controlplane`, and `RKE-worker`. Select those 3 policies and click on "Next: Review".

    6. Click on "Add permissions"

Now that you have added the right permissions to your user name, you can use the user's AWS API keys with Grid.

