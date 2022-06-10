--- 
title: Credentials
sidebar_label: Credentials
---

# About

Credentials are secret values that you can use to securely inject sensitive information into the
Grid platform. Credentials are encrypted in the Grid-backend storage
systems, and are only decrypted immediately prior to use.

## Access to Secrets (Teams Users)

Credentials can be created by any Grid user, with a limit of 50
Credentials per account. Only the user who created a credential (the owner) can
delete that Credential. All of the User's team members are able to utilize the credential in
their own workflow (for example, while creating a Datastore from a private s3 bucket)

Sensitive credential type values can never be retrieved from Grid via the CLI. However,
the values of non-private credential types (such as `--type s3`) can be viewed by the user
who created the credential and any member of the User's team (for our `teams` tier users.)

# Credential Types

At the moment, the following credential types are supported:

- `s3` (access for datastore creation from a private bucket)

## Creating an `s3` Credential to Create Datastores from private AWS S3 Buckets 

Grid now supports the ability to create Datastores from private AWS s3 buckets by using
the `--no-copy` mode via the CLI. In order to allow Grid to access your private buckets,
you'll need to create an authorized AWS Role using the `grid credential create --type s3`
command (explained in detail below). After, you can run the
`grid datastore create S3://<private-bucket-name-here> --no-copy` command as usual - no
modifications needed. If any of your registered `s3` credentials can access the s3 bucket
path specified, then Grid will automatically use them when creating the Datastore (and
when using that Datastore in a `run` or `session`)

In order to provide Grid access to a private S3 bucket, you must first set up an AWS IAM Role configured with the appropriate permission policy. This is the absolute minimum permission Grid requires in order to list and retrieve files from an s3 bucket of your choice. The `grid credential create` command will dynamically generate the IAM Role Trust Policy based on the cluster on which you are creating the Datastore. While all users will need to authorize the AWS account ID on which the Grid Platform controlplane runs, [bring-your-own-cloud (`BYOC`) users](./2_Custom%20Cloud%20Credentials/1_byoc.md) will also need to include the AWS account ID on which the `BYOC` cluster runs. 

:::info

Please refer to the AWS documentation on [IAM Role Trust
Policies](https://aws.amazon.com/blogs/security/how-to-use-trust-policies-with-iam-roles/)
and [IAM Role Permission
Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) for more
detailed information.

:::

We will illustrate the process of registering an IAM Role with Grid using the following
example:

> I want to run an experiment or session using sensitive data contained in a private s3 bucket. The bucket's name is
> `gridai-demo-bucket` and I would like to create a Datastore from any file
> prefix (folder) in the bucket. 

![](../../static/images/credentials/demo_bucket_contents.png)

First: run the `grid credentials create --type s3` command in order to find the required trust and
permission policy.

```
$ grid credentials create --type s3
Please refer the the the documentation for how to create an AWS role and 
permission policy.

The trust policy for the role should be:
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Principal": {
        "AWS": "302180240179"
      },
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "6aa0ae3592534df8936b03f4b73294c4"
        }
      }
    }
  ]
}

The permission policy attached to the role should be:
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketLocation",
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::<replace-with-bucket-name>",
        "arn:aws:s3:::<replace-with-bucket-name>/*"
      ]
    }
  ]
}

Please be sure to change the <replace-with-bucket-name> field with the bucket 
name you wish to grant access to. More information can be found on the docs.

Please Note: when creating the role name in the AWS console, the role name MUST 
begin with the prefix: grid-s3-access- any valid characters can follow the 
prefix.

When complete, please enter the role ARN:
```

The command will output the required trust and permission policies. 

I will leave this prompt open while I go to the [AWS IAM Role
Console](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/roles) and
click "Create Role"

![](../../static/images/credentials/role-console.png)

I will select the "custom trust policy" setting, and copy/paste the trust policy output
from the CLI into the `json` editor:

![](../../static/images/credentials/select_trusted_entity.png)

When prompted with the "add permissions to role" tab, I create a new permission
policy by clicking on the "Create Policy" button

![](../../static/images/credentials/add_permissions_to_role.png)

A new tab will open (keep the old tab open as well), and I select the `json` tab, and
copy/paste the permission policy into the editor. I also replace the text
`<replace-with-bucket-name>` with the name of the private bucket I want to provide access to
(i.e. `gridai-demo-bucket`). 

![](../../static/images/credentials/aws_permission_policy.png)

I click next until I reach the "permission policy naming" tab, and I enter an appropriate
name; in this case I use: `my-permission-policy-for-grid`. 

![](../../static/images/credentials/permission_policy_naming.png)

I click "create policy" and am presented with a message saying the operation was
successful.

![](../../static/images/credentials/permission_policy_created.png)

At this point, I go back to the previous tab for attaching a permission policy to the Role which
I had been at before. I "refresh" the list of policies by clicking the refresh symbol, and
then select the `my-permission-policy-for-grid` policy name and click next.

![](../../static/images/credentials/attach_permission_policy.png)

I then navigate through the prompts until I am presented with the "role naming" screen. At
this point, I create a role name **keeping in mind that the role must begin with the
prefix: `grid-s3-access-`**. In this case I name the role
`grid-s3-access-for-my-demo-bucket` and click create.

![](../../static/images/credentials/role_naming.png)

I am then presented with a success screen! The role has been created. 

![](../../static/images/credentials/role_created.png)

I select the role and click on the icon next to the "role ARN" in order to
copy the value to my clipboard:

![](../../static/images/credentials/arn_copy.png)

I now go back to the terminal and paste my clipboard value into the input field
I am being presented with:

```
...
...
...
When complete, please enter the role ARN: arn:aws:iam::880213070634:role/grid-s3-access-for-my-demo-bucket

Success!
```

The role has been successfully added, and I can see it in the list when I run `grid
credentials` or `grid credentials list`. 

I can now run the regular command to create a Datastore and it will
automatically pick the correct credential and create the Datastore from my private s3 bucket!

```
$ grid datastore create s3://gridai-demo-bucket/ --no-copy
Success!
```