---
title: High-Performance Datastores
sidebar_label: High-Performance Datastores
---

# Introduction

High Performance Datastores (HPDs) allow Grid BYOC customers who are looking to scale large datasets to optimize latency and significantly speed up data access. Currently, HPDs are backed by the FSx for Lustre service and offer more scalability and higher throughput than conventional Grid Datastores backed by AWS S3.

# Advantages & Limitations

Using High Performance Datastores when processing very large datasets provides several significant benefits:

1. **Higher data scalability:** HPDs can scale up to 64 terabytes of data while maintaining high performance regardless of the file distribution within the datastore. This is especially relevant when a dataset contains many smaller files: while conventional Grid Datastores have nearly unlimited scale with regards to data volume, their performance is reduced when accessing datasets with millions or tens of millions of files.
2. **Improved performance for single-user sessions:** Up to 6x performance against conventional Datastores when used by a single client. This performance improvement may vary depending on the workload and instance type chosen, as HPDs are still accessed through the network.
3. **Higher multi-consumer scalability:** HPDs can be used by a larger number of concurrent experiments or sessions.
4. **Automatic updating:** An HPD will automatically update its contents to track the underlying S3 bucket data.

Given their immense benefit to performance, HPDs with high performance specs can cost up to several thousand dollars per month. For reference, a baseline HPDS datastore in the `us-east` AWS region
with a maximum capacity of 1.2TiB will cost 174\\$ per month, while a 12TiB datastore with the high throughput setting will cost 7200\\$ per month. For detailed pricing, please refer to the AWS pricing page: https://aws.amazon.com/fsx/lustre/pricing/

**Additionally, HPDs can only be provisioned by utilizing a pre-existing S3 bucket that is owned by the same AWS account in which your BYOC cluster is located. This requires additional configuration by your cluster administrator to enable access to specific S3 buckets.**

# Configuring Access

Once this feature has been enabled for your BYOC cluster, you will need to provide access to the corresponding S3 buckets for which you'd like to create a High Performance Datastore. This process requires that you add a bucket policy for each bucket you wish to access.

You can do this via the AWS webui or the CLI:

1. If you’re using the AWS webui head to the S3 service at https://s3.console.aws.amazon.com/s3/buckets, select the desired bucket, click on the permissions tab and select "Edit" on the bucket policy field to add the new policy.

2. If you’re using the AWS CLI, simply create a file containing this policy and then use the following command: 

`aws s3api put-bucket-policy --bucket <YOUR_BUCKET_NAME> --policy file://policy.json`

The policy to add should be the following:
```
{
  "Statement": [{
    "Sid": "localdev-access-permissions",
    "Effect": "Allow",
    "Principal": {
      "AWS": "arn:aws:iam::<YOUR_AWS_ACCOUNT_ID>:role/grid-s3-access-<YOUR_CLUSTER_NAME>-fsx-global-role"
    },
    "Action": [
      "s3:AbortMultipartUpload",
      "s3:DeleteObject",
      "s3:PutObject",
      "s3:Get*",
      "s3:List*",
      "s3:PutBucketNotification",
      "s3:PutBucketPolicy",
      "s3:DeleteBucketPolicy"
    ],
    "Resource": [
      "arn:aws:s3:::<YOUR_BUCKET_NAME>",
      "arn:aws:s3:::<YOUR_BUCKET_NAME>/*"
    ]
  }]
}
```

# Creating High-Performance Datastores

After configuring access, you can create a High Performance Datastore by passing the `--hpd` flag to the CLI when executing the `grid datastore create` command. 

For example: `grid datastore create s3://my-s3-bucket/ --cluster my-byoc-cluster --hpd`

This will create the Datastore using the default capacity of 1200GiB and the default throughput of 125MB/s/TiB. After a brief wait (between 15 minutes and 2 hours depending on the number of files in your S3 bucket), the Datastore will be available to use. You can monitor the Datastore state normally by using the grid datastore command.

### Setting HPD Capacity

If your dataset is larger than 1200GiB you can use the `--hpd-capacity` flag to specify a higher capacity up to 64,800GiB. Note that capacity must be 1200, 2400 or a multiple of 2400.

### Setting HPD Throughput

If you’re going to be using your Datastore with a high number (>20) of experiments or sessions at the same time, you can also specify a higher throughput parameter by using the `--hpd-throughput` flag. You may choose between the low (125MB/s/TiB), medium (500MB/s/TiB) or high (1000MB/s/TiB) options.

Do note that on single-instance usage (e.g., for a single experiment or session), the higher throughput options have heavily diminishing returns (especially as these Datastores can burst to speeds higher than their nominal throughput for sustained periods). In these cases, we advise using the low option in order to reduce costs. 

Finally, after the Datastore becomes available to attach and use in sessions, you may observe a period of reduced performance. This is because the files are being preloaded to the filesystem to ensure consistent performance. This process may take a few hours for particularly high volume datastores.

# Using High-Performance Datastores
To use an HPD, simply attach it to an experiment or session in the same way as any other kind of datastore. As conventional datastores, HPDs can be attached to multiple experiments or sessions at the same time.

### Updating HPDs
Currently, updating an HPD to use a different capacity or throughput is not possible. You can create multiple versions of HPDs, but because each Datastore is automatically updated to track the underlying S3 bucket, this means that all versions will have the same content. They will, however, use different FSx file systems, and thus incur higher costs. For this reason, maintaining multiple versions of HPDs is not advised unless you specifically need each Datastore to be completely performance independent from the others.

Deleting an HPD can be done with grid datastore delete as with any conventional Datastore. You do not incur any charges for failed or deleted HPDs.
