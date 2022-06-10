--- 
title: Credentials
sidebar_label: Credentials
---

# About

Credentials are secret values which you can use to inject sensitive information into the
Grid platform in a secure manner. Credentials are encrypted in the Grid-backend storage
systems, and are only decrypted immediately before use. 

## Access to Secrets (Teams Users)

Credentials can be created by any user of the Grid platform (there is a limit of 50
Credentials per user account). Only the user who created a credential (the owner) can
delete the Credential. Any team-members of the User are able to utilize the credential in
their own workflow (for example, while creating a datastore from a private s3 bucket)

Sensitive credential type values can never be retrieved from Grid via the CLI. However,
the values of non-private credential types (such as `--type s3`) can be viewed by the user
who created the credential and any member of the User's team (for our `teams` tier users.)

# Credential Types

At the moment the following credential types are supported:

- `s3` (access for datastore creation from a private bucket)

## Creating an `s3` Credential to Create Datastores from private AWS S3 Buckets 

Grid now supports the ability to create datastores from private AWS s3 buckets when using
the [`--no-copy` mode via the CLI](../features/datastores/2_Using%20Datastores/2_creating-datastores.md). In order to allow Grid to access your private buckets
you should create an authorized AWS Role using the `grid credential create --type s3`
command (explained in detail below), after which you can run the `grid datastore create
S3://<private-bucket-name-here> --no-copy` command as usual (no modifications needed). If
any of your registered `s3` credentials can access the s3 bucket path specified, then Grid
will automatically use them when creating the datastore (and when using that datastore in
a `run` or `session`)

In order to provide Grid access to a private S3 bucket, you must configure an AWS IAM Role
which is configured with an appropriate role trust policy and an attached permission
policy which allows appropriate access. The trust and permission policy required are the
minimal permission sets which Grid requires in order to list files in some s3 bucket
prefix which you define and to "get" the objects from cloud storage. The `grid credential
create` command will dynamically generate the IAM Role Trust Policy based on the cluster
you are creating the datastore on. While all users will need to authorize the AWS account
ID which the Grid Platform controlplane runs on, [bring-your-own-cloud (`BYOC`)
users](./2_Custom%20Cloud%20Credentials/1_byoc.md) will also need to include the AWS
account ID which the `BYOC` cluster runs on. 

:::info

Please refer to the AWS documentation on [IAM Role Trust
Policies](https://aws.amazon.com/blogs/security/how-to-use-trust-policies-with-iam-roles/)
and [IAM Role Permission
Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) for more
detailed information.

:::

We will illustrate the process of registering an IAM Role with Grid with the following
example:

> I have an S3 bucket in an AWS account which contains private (sensitive) data of some
> kind which I would like to use from a Grid Datastore. The bucket's name
> `gridai-demo-bucket` and I would like to be able to create a datastore from any file
> prefix (folder) in the bucket. 

![](../../static/images/credentials/demo_bucket_contents.png)

First: run the `grid credentials create --type s3` command in order to find the trust and
permission policy which is needed.

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

As you can see the command outputs the required trust and permission policies. 

I will leave this prompt open while I go to the [AWS IAM Role
Console](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/roles) and
click "Create Role"

![](../../static/images/credentials/role-console.png)

I will select the "custom trust policy" setting, and copy/paste the trust policy output
from the CLI into the `json` editor:

![](../../static/images/credentials/select_trusted_entity.png)

When prompted with the "add permissions to role" tab, I elect to create a new permission
policy by clicking on the "Create Policy" button

![](../../static/images/credentials/add_permissions_to_role.png)

A new tab will open (keep the old tab open as well), and I select the `json` tab, and
copy/paste the permission policy into the editor. I also replace the text
`<replace-with-bucket-name>` with by private bucket name I want to provide access to
(i.e. `gridai-demo-bucket`). 

![](../../static/images/credentials/aws_permission_policy.png)

I click next until I hit the "permission policy naming" tab, and I enter an appropriate
name; in this case I use: `my-permission-policy-for-grid`. 

![](../../static/images/credentials/permission_policy_naming.png)

I click "create policy" and am presented with a message saying the operation was
successful.

![](../../static/images/credentials/permission_policy_created.png)

At this point I go back to the old tab for attaching a permission policy to the Role which
I had been at before. I "refresh" the list of policies by clicking the refresh symbol, and
then select the `my-permission-policy-for-grid` policy name and hit next.

![](../../static/images/credentials/attach_permission_policy.png)

I then navigate through the prompts until I am presented with the "role naming" screen. At
this point I create a role name **keeping in mind that the role must begin with the
prefix: `grid-s3-access-`**. In this case I name the role
`grid-s3-access-for-my-demo-bucket` and click create.

![](../../static/images/credentials/role_naming.png)

I am then presented with a success screen! The role has been created. 

![](../../static/images/credentials/role_created.png)

At this point I select the role, and click on the icon next to the "role ARN" in order to
copy the value to my clipboard:

![](../../static/images/credentials/arn_copy.png)

At this point I go back to the terminal and paste my clipboard value into the input field
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

At this point I can run the regular commands to create a datastore and it will
automatically pick the correct credential and create the datastore!

```
$ grid datastore create s3://gridai-demo-bucket/ --no-copy
Success!
```