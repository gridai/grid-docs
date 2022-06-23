---
title: High-Performance Datastores
sidebar_label: High-Performance Datastores
---

# Introduction

High Performance Datastores (HPDS) allow Grid BYOC customers who have requirements for scaling large datasets to optimize latency and significantly speed up data access. Currently, HPDS are backed by the FSx for Lustre service and offer more scalability and higher throughput than conventional Grid datastores that are backed by AWS S3.

# Advantages & Limitations

There's a multitude of advantages to utilizing the HPDS datastore class when scaling processing to very large datasets. 

1. **Higher data scalability:** HPDSs can scale up to 64 terabytes of data while maintaining high performance regardless of the file distribution in the datastore. This is especially relevant when a dataset contains many smaller files, as while conventional Grid datastores have nearly unlimited scale in regards to data volume, their performance is reduced when accessing datasets with millions or tens of millions of files.
2. **Improved performance for single-user sessions:** Up to 6x performance against conventional datastores when used by a single client. The performance improvement may vary depending on the workload and instance type chosen, as HPDSs are still accessed through the network.
3. **Higher multi-consumer scalability:** HPDSs can be used by a larger number of experiments or sessions at the same time.
4. **Automatic updating:** An HPDS will automatically update its contents to track the underlying S3 bucket data.

At the same time however, the HPDS comes with its own share of disadvantages, especially when it comes to cost and flexibility when compared with conventional Grid datastores. Regarding cost, the FSx file systems are provisioned in your AWS account similarly to the machines running your compute workloads and highly specced HPDSs can cost up to several thousand dollars per month. For reference, a baseline HPDS datastore in the `us-east` AWS region
that has a maximum capacity of 1.2TiB will cost 174\\$ per month, while a 12TiB datastore with the high throughput setting will cost a staggering 7200\\$ per month. For detailed pricing please check the AWS pricing page for this service at: https://aws.amazon.com/fsx/lustre/pricing/

In addition to the monetary cost, HPDSs can only be provision by utilizing a pre-existing S3 bucket that is owned by the same AWS account in which your BYOC cluster is located and require some more involved configuration by your cluster administrator to enable access to specific S3 buckets.

# Creating High-Performance Datastores

After configuring access you can create a high performance datastore by passing the `--hpds` flag to the CLI when executing the `grid datastore create` command. 

For example: `grid datastore create s3://my-s3-bucket/ --cluster my-byoc-cluster --hpds`

This will create the datastore using the default capacity of 1200GiB and the default throughput of 125MB/s/TiB and after some time (Between 15 minutes and 2 hours depending on the number of files in your S3 bucket) the datastore will be available to use. You can monitor the datastore state normally by using the grid datastore command.

If your dataset is larger than 1200GiB you can use the `--hpds-capacity` flag to specify a higher capacity up to 64,800GiB. Note that capacity must be 1200, 2400 or a multiple of 2400.

If you’re going to be using your datastore with a high number (>20) of experiments or sessions at the same time you can also specify a higher throughput parameter by using the `--hpds-throughput` flag. You may choose between the low (125MB/s/TiB), medium (500MB/s/TiB) or high (1000MB/s/TiB) options.

Do note that on single-instance usage (For example for a single experiment or session) the higher throughput options have heavily diminishing returns (Especially as these datastores can burst to speeds higher than their nominal throughput for sustained periods) and we advise using the low option in this use case in order to reduce costs. 

Finally it's worth noting that there is a period of time after the datastore becomes available to attach and use in sessions during which you will observe reduced performance - this is because the files are being preloaded to the filesystem to ensure consistent performance. This process may take a few hours for particularly high volume datastores.



