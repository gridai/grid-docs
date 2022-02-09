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

We only recommend using private S3 buckets for BYOC users. This can be accomplished with the following steps:

1. follow the official aws [documentation](https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/).
2. Use the following policy to give access to all the contents within your bucket:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::aws-account-id-associated-with-byoc:root"
            },
            "Action": [
                "s3:ListBucket",
                "s3:GetObject",
                "s3:GetBucketLocation"
            ],
            "Resource": [
               "arn:aws:s3:::your-bucket/*",
               "arn:aws:s3:::your-bucket"
           ]               
        }
    ]
}
```
### Known limitations:

Currently, we cannot guarantee the privacy of datastores connected to a public grid cloud account. It is on the roadmap and will be implemented in a future release. However, if you would like to test this feature out you can replace the principal id with 302180240179.

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
