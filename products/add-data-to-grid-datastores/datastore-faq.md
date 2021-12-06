---
description: Frequently asked questions regarding Datastores
---

# FAQ

## Data is private

Any datastore you upload to Grid can only be accessed **by you**. Grid does not look at or manipulate your data in anyway.

## Data retention

If you delete your account, data will be deleted immediately.

## Public vs private data

When you create a datastore, you certify that you have the rights to that data. Only you have access to your datastore. It's up to you to make sure you have the rights to access that data.

## Does Grid charge for Data Storage?

Grid does not charge for storing data. However, there is a limit of 25 datastores.

## Does Grid have a limit on DataStore size?

Yes Grid DataStore max size is 1.5 TB. For security reasons, we only allow you to upload data for 12 hours continuously. If your data is too big to upload in a 12 hour period, it will stop uploading. Initiating `grid datastore create <args...>` again will resume the upload.

## Is there a way to see what files are in a datastore?

Create an interactive session with the datastore mounted, then you will be able to browse the data including folders and files using Jupyter lab or SSH

## How does Grid store/access my data?

Grid will have access to your account data for operational purposes. If we do need access to your account for debugging purposes, we will notify you.

| Data type | Grid Access                                                                                                                                                                              | Storage  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Datasets  | <p>Only your account can access your data.</p><p>Grid and its service providers only access your data for operational purposes, including providing the services and support to you.</p> | S3       |
| Artifacts | Grid only reads metadata.                                                                                                                                                                | S3       |
| Metadata  | Information about your jobs (no code, no data).                                                                                                                                          | Database |
