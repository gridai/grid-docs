# How to operationalize Datastores

There are many ways to operationalize a Datastore in Grid. Below we provide some examples to get you started with working with this core feature. The examples cover the following:
1. Create Datastores from your machine
2. Create from private S3 Bucket
3. Create from a Session
4. Create from a Run
5. Create from a Cluster
6. Attaching Datastores
7. Periodically upload datastores

## Examples

### Create Datastores from your machine
#### Small datasets

You can use the UI to create datastores for datasets smaller than 1GB (files or folder).

Select the file or folder and click upload.

![](/images/datastores/ds_upload.gif)

:::note
You can still use the CLI for these datastores!
:::

#### Large datasets (1 GB+)

For datasets larger than 1 GB, use the CLI.


:::note
If you have a datastore that is 1Gb+, we suggest creating an Interactive Session and uploading the datastore from there. Internet speed is much faster in Interactive Sessions, so upload times will be shorter.
:::

First, install the grid CLI and login

```bash
pip install lightning-grid --upgrade
grid login
```

Next, use the datastores command to upload any folder:

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

#### Datastores from .zip

For any datasets from a .zip, .tar or tar.gz that DO NOT require any post-processing, feel free to use the Web UI.

The link will be downloaded, extracted and automatically mounted for you. You can use an interactive Session to verify for yourself.

![](/images/datastores/zip_ds.gif)

:::note
You can still use the CLI for these datastores!
:::

Datastores go through a number of statuses such as optimizing, processing uploading. These are internal and a status of "succeeded" indicates that datastore is ready to be used.

On the CLI, grid datastore command shows which Datastores are available to be used.

### Create from a Private S3 Bucket

At this time we are only supporting usage of private S3 buckets as datastores for BYOC users, who have connected Grid to a custom AWS cluster. You can grant Grid access to your desired buckets by following the official aws [documentation](https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/).

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

### Create from a Session
#### Upload via Interactive Session

For huge datasets that need processing or a lot of manual work, we recommend this flow:

* launch an Interactive Session
* download the data
* process it
* upload

![](/images/datastores/upload_datastore_from_session.gif)

#### Screen

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

### Create from a Cluster
#### Upload from a cluster

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

### Attaching Datastores
Datastores can be attached to both Runs and Sessions. Below are examples on how to do that.

#### Runs

<!-- ![](/images/data.gif) -->

You can mount a datastore to a run to make your experiments run faster! By default, the datastore is mounted at /datastores. When attaching datastores to a run, take note of the path your script uses. For example if your script takes an argument _my_data_path_ and you want to mount the _cats_ datastore:

```bash
grid run main.py --my_data_path /datastores/cats/1
```


##### Datastore paths

Say you have a dataset with this structure:

```bash
my_dataset /
  train/
    ...
  val/
    ...
```

on your local machine, you call the script like so,

```bash
python main.py --root my_dataset/
```

your script uses the dataset like this,

```python
args.add_argument('-root')
root = args.parse_args()

train = load(root + 'train')
val = load(root + 'val')
```

When you upload a datastore to Grid:

```bash
grid datastore create my_dataset
```

it is available under this structure:

```bash
train/
  ...
val/
  ...
```

To run on this datastore, select the datastore from the dropdown

![](/images/runs/runs-select-datastore.png)

Now pass the name of the datastore to your command

![](/images/runs/script-arguments.png)
to Run + Sessions (perhaps this can be used as a link for the subsequent Run + Session redesigned pages)

#### Sessions
This video shows how we attach an ImageNet Datastore to a Session.

![](/images/datastores/attach_datastore_to_session.gif)

In Sessions datastores are mounted to /datastores. However, since juypyter notebooks use /home/joyvan as the default working directory we provide a symlink from /home/jovyan/datastores to /datastore so you can access your datastore easily upon opening up a Session.


Once in the Session, view the data with:

```bash
cd /datastores
ls
```

### Periodic Upload
#### Upload on a timer

In certain cases, your data might change hourly and you might want to update your datastore. You can configure your crontab to do this automatically.

Here's an example that uploads a new version of a datastore every hour:

```bash
#write out current crontab
crontab -l > mycron

#run datastore upload every hour every day
echo "0 * * * * grid datastore create data/path --name dataset" >> mycron    

#install new cron file
crontab mycron
rm mycron
```
