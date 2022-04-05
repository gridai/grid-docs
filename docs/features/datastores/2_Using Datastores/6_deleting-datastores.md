---
title: Deleting Datastores
sidebar_label: Deleting Datastores
---

# Deleting Datastores

Once you are finished using a dataset (or if you have hit the [maximum datastore user
quota](../faq.md#datastore-charging-and-limits), you may wish to remove a particular
version of a datastore. 

:::danger 

Please be careful!

Datastore deletion is immediate and unrecoverable. If the operation succeeds reports that
the request was successful (e.g. the datastore is not in use by a Session or Run when the
delete request was issued), then the data has already begun a rapid removal routine and
there is nothing that can cancel, interrupt, or reverse the process!

:::

Deleting a datastore can be done via either the CLI or the UI, and requires that you
specify _both the Datastore name and desired version_ to delete. 

:::note

Remember: multiple datasets uploaded to the same named Datastore will have created
independent versions. Each dataset / Datastore instance was automatically assigned a
unique (and previously unused) version number starting at 1 and incrementing on each
subsequent upload. 

If you only need some specific version of a datastore name, it is SAFE to delete any/all
other versions of the Datastore. The data contained in each version is complete,
immutable, and independent of any other Datastore version. 

:::

:::note

Datastores cannot be deleted if they are in use by a [Session](../../sessions/README.md)
or [Run](../../runs/1_README.md); if you attempt to delete a datastore which is mounted
into a running resource, the delete request will fail and report the name of the
session/run which is using the datastore.

:::

## Using the CLI 

Say I had created a few different variations of the same Datastore named
`"my-training-data"` as I was experimenting with pre-processing algorithms for a model I was
in the process of training. I have versions `1`, `2`, `3`, and `4` available, and I really
only am happy with versions `2` and `4`. Because I'm a conciencious user who doesn't want
to abuse the free storage I'm using for this data, I'm going to delete versions `1` and
`3`. I look at the [`grid datastore delete` command reference](../../../cli.md#delete) and
am able to execute the following commands to clean up after myself!

```bash
grid datastore delete --name my-training-data --version 1
grid datastore delete --name my-training-data --version 3
```

## Using the UI

**PRODUCT TEAM: There is a BUG here!!!! You cannot delete single versions of a datastore
in the UI, if you try to delete a datastore with multiple versions, it will delete all
versions of that datastore. This is really bad!** 

**PRODUCT TEAM: There is no "datastore details" view in the UI. didn't we have this at one
point? how can a user see what the original source of a datastore is? We are likely going
to need this as s3 datastores get more fleshed out...**