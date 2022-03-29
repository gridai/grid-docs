# Create Datastores

Datastores can be created from any file type and also accept HTTP URL's and S3 URLS. 

## Small datasets

You can use the UI to create Datastores for datasets smaller than 1GB (files or folder). We have noticed that when the Datastore sizes are 1GB+ you start to hit the browser limit for uploading data. In such situations we advise using the CLI to upload Datastores.

Select the file or folder and click upload.

![](/images/datastores/ds_upload.gif)

:::note
You can still use the CLI for these datastores!
:::

## Large datasets (1 GB+)

For datasets larger than 1 GB, use the CLI.


:::note
If you have a dataset that is 1Gb+, we suggest creating an Interactive Session and creating the Datastore from there. Internet speed is much faster in Interactive Sessions, so upload times will be shorter.
:::

First, install the grid CLI and login

```bash
pip install lightning-grid --upgrade
grid login
```

Next, use the Datastores command to upload any folder:

```bash
grid datastore create imagenet_folder --name imagenet
```

Note that you will need at least as much free space as the size of your dataset on the disk hosting your home folder, for the internal preparation of the upload.

This method can work from:

* A laptop.
* An interactive session.
* Any machine with an internet connection and Grid installed.
* A Corporate cluster.
* An Academic cluster.

# Create from a Private S3 Bucket

At this time we are only supporting usage of private S3 buckets as Datastores for BYOC users, who have connected Grid to a custom AWS cluster. You can grant Grid access to your desired buckets by following the official aws [documentation](https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/).

As a convenience, below we provided a bucket policy that grants Grid access to all the contents of your specified bucket. It assumes that you modified the tfvars role_arn field. If you have not then you can use `<aws-account-id-associated-with-byoc>:root` instead. You can follow this official aws [documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html) to get your account id.
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<aws-account-id-associated-with-byoc>:role/role-name"
            },
            "Action": [
                "s3:ListBucket",
                "s3:GetObject",
                "s3:GetBucketLocation"
            ],
            "Resource": [
               "arn:aws:s3:::<your-bucket>/*",
               "arn:aws:s3:::<your-bucket>"
           ]               
        }
    ]
}
```

# Create from a Session
## Upload via Interactive Session

For huge datasets that need processing or a lot of manual work, we recommend this flow:

* launch an Interactive Session
* download the data
* process it
* upload

![](/images/datastores/upload_datastore_from_session.gif)

## Screen

When you are in the interactive Session, use Screen to make sure you don't lose your progress.

```bash
# start screen (lets you close the tab without killing the process)
screen -S some_name
```

now do whatever processing you need:

```bash
# download, etc...
curl http://a_dataset
unzip a_dataset

# process
do_something
something_else
bash process.sh
...
```

when you're done, upload to Grid via the CLI (on the Interactive Session):

```bash
grid datastore create imagenet_folder --name imagenet
```

:::note
Grid CLI is auto-installed on sessions and logged in under your credentials.
:::

# Create from a Cluster
## Upload from a cluster

Use these instructions to upload from:

* Corporate cluster.
* Academic cluster.

First, start screen on the jump node (to run jobs in the background).

```bash
screen -S upload
```

If your jump node allows a memory-intensive process, then skip this step. Otherwise, request an interactive machine. Here's an example using SLURM.

```bash
srun --qos=batch --mem-per-cpu=10000 --ntasks=4 --time=12:00:00 --pty bash
```

Once the job starts, install and log into Grid (get your username and ssh keys from the [settings page](https://platform.grid.ai/#/settings)).

```bash
# install
pip install lightning-grid --upgrade

# login
grid login --username YOUR_USERNAME --key YOUR_KEY
```

Next, use the Datastores command to upload any folder:

```bash
grid datastore create imagenet_folder --name imagenet
```

You can safely close your ssh connection to the cluster (the screen will keep things running in the background).
