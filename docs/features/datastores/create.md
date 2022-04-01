---
sidebar_position: 1.1
title: Creating Datastores
sidebar_label: Creating Datastores
---
# Create

## Small datasets

You can use the UI to create datastores for datasets smaller than 1GB (files or folder).

Select the file or folder and click upload.

![](/images/datastores/ds_upload.gif)

:::note
You can still use the CLI for these datastores!
:::

## Large datasets (1 GB+)

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

## Datastores from .zip

For any datasets from a .zip, .tar or tar.gz that DO NOT require any post-processing, feel free to use the Web UI.

The link will be downloaded, extracted and automatically mounted for you. You can use an interactive Session to verify for yourself.

![](/images/datastores/zip_ds.gif)

:::note
You can still use the CLI for these datastores!
:::

Datastores go through a number of statuses such as optimizing, processing uploading. These are internal and a status of "succeeded" indicates that datastore is ready to be used.

On the CLI, grid datastore command shows which Datastores are available to be used.
