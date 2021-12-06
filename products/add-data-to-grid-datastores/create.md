---
description: How to create datastores.
---

# Create

## Small datasets

You can use the UI to create datastores for datasets smaller than 1GB (files or folder).

Select the file or folder and click upload.

![](<../../.gitbook/assets/ds\_upload (3) (1) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (1) (3).gif>)

{% hint style="info" %}
You can still use the CLI for these datastores!
{% endhint %}

## Large datasets (1 GB+)

For datasets larger than 1 GB, use the CLI.

{% hint style="info" %}
If you have a datastore that is 1Gb+, we suggest creating an Interactive Session and uploading the datastore from there. Internet speed is much faster in Interactive Sessions, so upload times will be shorter.
{% endhint %}

First, install the grid CLI and login

```bash
pip install lightning-grid --upgrade
grid login
```

Next, use the datastores command to upload any folder:

```bash
grid datastore create --source imagenet_folder --name imagenet
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

![](<../../.gitbook/assets/zip\_ds (1).gif>)

{% hint style="info" %}
You can still use the CLI for these datastores!
{% endhint %}

Datastores go through a number of statuses such as optimizing, processing uploading. These are internal and a status of "succeeded" indicates that datastore is ready to be used.

On the CLI, grid datastore command shows which Datastores are available to be used.
