---
title: Overview
sidebar_label: Overview
---
# Demystifying Datastores

Datastores are high-performance, low-latency, versioned, and scalable datasets which can
be instantly mounted into any [Session](../../features/sessions/README.md) or
[Run](../../features/runs/1_README.md).

## What file types are supported

Datastores can be created from any file type. Grid treats each file as a collection of
bytes which exist with a particular name within a directory structure (e.g.
`./dir/some-image.jpg`). 

:::info

In order to ensure complete data privacy & flexibility of use, Grid never attempts to
process the contents of the files or infer/optimize for any particular usage behaviors based
on file contents. 

:::

## Why use Datastores

Datastores are backed by cloud storage. They are made available to
compute jobs as part of a read-only filesystem. If you have a compute script which reads
files in a directory structure on your local computer, then the only thing you need to
change when running on Grid is the location of the `data` directory! 

Datastores are *a necessity when dealing with data at scale* (e.g. data which cannot be
reasonably downloaded from some HTTP URL when a compute job starts up) by providing a
**singular & immutable dataset resource of near unlimited scale.** 

:::tip

A single datastore can be mounted into tens or hundreds of concurrently running compute
jobs in seconds, ensuring that no expensive compute time is wasted waiting for data to
download, extract, or otherwise "process" before you can move on to the real work. 

:::

We know how important a role your data plays in everything you run on Grid. We've put an
incredible amount of time and effort into creating a truly unique *optimization pipeline*
which removes every bit of latency possible from the point your program calls `with
open(filename, 'r') as f:` to the instant that data is provided to you. You'll find
traversing the data directory structure in a [session](../../features/sessions/README.md)
indistinguishable from the experience of `cd`-ing around your local workstation.

Grid Datastores are an easy way to deal with data in the cloud. Our
capabilities and performances are constantly evolving.  We believe you'll love the
simplicity and experience of using them! 


### Capabilities

Datastores today have 3 main capabilities:

1. Can be created from S3 buckets in both Grid Cloud and Bring Your Own Cloud
   environments
2. Attachable to [Runs](../../features/runs/1_README.md) and 
   [Sessions](../../features/sessions/README.md)
3. Create-able from your local machine, Sessions, or Cluster!

### High-Performance Datastores (BYOC users only)

High Performance Datastores (HPDs) allow Bring Your Own Cloud customers who are looking to scale large datasets to optimize latency and significantly speed up data access. Currently, HPDs are backed by the FSx for Lustre service and offer more scalability and higher throughput than conventional Grid datastores backed by AWS S3. 

HPDs are most useful for very large datasets (>1TB) or when a dataset is going to be using by a large number of concurrent experiments or sessions.

### How do I access the data in a datastore? 

By default, datastores are mounted at `/datastores/<datastore-name>/` on both 
[Runs](../../features/runs/1_README.md) and [Sessions](../../features/sessions/README.md).
If for some reason you need the mount path at a different location, you are able to
manually specify the Datastore mount path when using the CLI. Please refer to 
[CLI commands reference](../../cli.md) for assistance specifying the desired configuration. 

## Next Steps

For more information on using Datastores, start with the first section of the 
[Using Datastores](./2_Using%20Datastores/1_How-to-use-datastores.md) tutorial. 

More advanced users can feel free to skip to any of the other tutorials which may be of
interest. These are linked in the [Sidebar](./2_Using%20Datastores/1_How-to-use-datastores.md)

1. [Using Datastores](./2_Using%20Datastores/1_How-to-use-datastores.md)

  1.1. [Creating Datastores](./2_Using%20Datastores/2_creating-datastores.md)  

  1.2. [Inspecting Status](./2_Using%20Datastores/3_inspecting_status.md)

  1.3. [Attaching Datastores](./2_Using%20Datastores/4_attaching-datastores.md)  

  1.4. [Periodically Uploading Datastores](./2_Using%20Datastores/5_periodically-uploading-datastores.md)
  
  1.5. [Deleting Datastores](./2_Using%20Datastores/6_deleting-datastores.md)

2. [Troubleshooting Datastores](./3_faq.md)
