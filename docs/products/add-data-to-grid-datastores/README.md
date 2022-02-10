---
description: 'Datastores are low-latency, high-performance, auto-versioned datasets.'
---

# ⚡Datastores

## Datastores (scalable datasets)

In Grid, we've introduced _Datastores_, high-performance, low-latency, versioned datasets.

Datastores can be attached to Runs or Sessions and preserve the file format and directory structure of the data used to create them.

![](/images/datastores/jobs.jpg)


:::note
We don't charge for data storage!
:::

## Datastores with Private S3 Buckets

At this time we are only supporting usage of private S3 buckets as datastores for BYOC users. You can grant Grid access to your desired buckets by following the official aws [documentation](https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/).

As a convenience, below we provided a bucket policy that grants Grid access to all the contents of your specified bucket. It assumes that you modified the tfvars role_arn field. If you have not then you can use <aws-account-id-associated-with-byoc>:root instead. You can follow this official aws [documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html) to get your account id.
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
## Product Tour

Upload data to Grid using Datastores. Datastores are low-latency, auto-versioned datasets.

[Click here for the 1-minute product tour](https://platform.grid.ai/#/dashboard?product_tour_id=221979)

![](/images/datastores/datastores-product-tour.png)

## Data inside the model script

Perhaps the simplest way is when your model script downloads the data.

Let's illustrate with PyTorch:

```python
from torchvision.datasets import MNIST
from torchvision import transforms

# this line automatically downloads data
dataset = MNIST(os.getcwd(), download=True, transform=transforms.ToTensor())
```

Pros:

* Simplest approach
* Enables the fastest iteration

Cons:

* Downloads every time a job starts
* Spends compute money on data downloading

## Datastore paths

Once you have created a datastore, simply pass in its name to your script and Grid will auto-resolve the path. Assume you have a datastore named _cats_ and you want to use version 1:

```bash
grid run main.py --data_dir grid:cats:1
```
