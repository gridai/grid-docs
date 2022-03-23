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

## Does Grid have a limit on Datastore size?

Yes Grid DataStore max size is 1.5 TB. For security reasons, we only allow you to upload data for 12 hours continuously. If your data is too big to upload in a 12 hour period, it will stop uploading. Initiating `grid datastore create <args...>` again will resume the upload.

## Where does Grid mount my Datastore in a Session or Run?
By default Grid mounts datastores to `/datastores`. This can be customized via cli with the  `--datastore_mount_dir` arugment.

## Is there a way to see what files are in a datastore?

Create an interactive session with the datastore mounted, then you will be able to browse the data including folders and files using JupyterLab or SSH

## How does Grid store/access my data?

Grid will have access to your account data for operational purposes. If we do need access to your account for debugging purposes, we will notify you.

<table>
  <thead>
    <tr>
      <th className="text-align-left">Data type</th>
      <th className="text-align-left">Grid Access</th>
      <th className="text-align-left">Storage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text-align-left">Datasets</td>
      <td className="text-align-left">
        <p>Only your account can access your data.</p>
        <p>Grid and its service providers only access your data for operational purposes,
          including providing the services and support to you.</p>
      </td>
      <td className="text-align-left">S3</td>
    </tr>
    <tr>
      <td className="text-align-left">Artifacts</td>
      <td className="text-align-left">Grid only reads metadata.</td>
      <td className="text-align-left">S3</td>
    </tr>
    <tr>
      <td className="text-align-left">Metadata</td>
      <td className="text-align-left">Information about your jobs (no code, no data).</td>
      <td className="text-align-left">Database</td>
    </tr>
  </tbody>
</table>


If the following FAQ didn't help resolve your issue please file a support ticket at [support@grid.ai](mailto:support@grid.ai) or reach out to the community at [community Slack](https://gridai-community.slack.com).
