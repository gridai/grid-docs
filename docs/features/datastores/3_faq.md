---
title: DatastoreFAQ
sidebar_label: FAQ
---

# Datastore FAQ

## How to Improve Datastore Upload Times
In some circumstances Datastore uploads will be slower than network bandwidth allows. The known instance
of this occuring is when you have files < .5MB in size. One way to get around this is to upload your 
Datastore as an compressed file and use a Grid Action to decompress it. One such example with Runs is below:

```
# Get Data
curl https://pl-flash-data.s3.amazonaws.com/cifar5.zip -o cifar5.zip

# Create Datastore
grid datastore create /cifar5.zip --name cifar5

# Create Run and unzip that Datastore
git clone git@github.com:PyTorchLightning/grid-tutorials.git
cd grid-tutorials\\getting-started
grid run --config config.yml --dependency_file requirements.txt -- flash-image-classifier.py --data_dir /tmp/scratch/cifar5
```

## Data is private

Any datastore you upload to Grid can only be accessed **by you**. Grid does not look at or
manipulate your data in anyway.

## Data retention

If you delete your account, all datastores you have created will be deleted immediately
and permanently.

## Public vs private data

When you create a datastore, you certify that you have the rights to that data. Only you
have access to your datastore. It's up to you to make sure you have the rights to access
that data. 

For additional information, please refer to our [Terms of Service](https://www.grid.ai/terms-of-service/).

## Does Grid charge for Data Storage? {#datastore-charging-and-limits}

Grid does not charge for storing data. However, there is a limit of 50 datastores
(including any/all version of the same datastore name). If you attempt to exceed this
limit, you will have to delete other datastores / versions before your `create` operation
will succeed. 

Please reach out to use at [support@grid.ai](mailto:support@grid.ai) or on the [community
Slack](https://gridai-community.slack.com) if this limit poses challenges for your
workflow; we're happy to assist with alternatives or discuss what a more appropriate usage
tier would look like for your usage.

## Where does Grid mount my Datastore in a Session or Run?

By default Grid mounts datastores to `/datastores/<datastore-name>`. This can be
customized via cli with the  `--datastore_mount_dir` argument.

## Is there a way to see what files are in a datastore?

Create an interactive session with the datastore mounted, then you will be able to browse
the data including folders and files using JupyterLab or SSH.

## How does Grid store/access my data?

Grid will have access to your account data for operational purposes. If we do need access
to your account for debugging purposes, we will notify you.

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


If the following FAQ didn't help resolve your issue please contact our support team at 
[support@grid.ai](mailto:support@grid.ai) or reach out to the community in our [Community Slack](https://gridai-community.slack.com).
