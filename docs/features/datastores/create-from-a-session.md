---
sidebar_position: 1.2
title: Creating Datastores from Session
sidebar_label: Creating Datastores from Session
---

---
description: Upload datasets from within a session into Datastore
---

# Create from a Session

## Upload via Interactive Session

For huge datasets that need processing or a lot of manual work, we recommend this flow:

* launch an Interactive Session
* download the data
* process it
* upload

![](/images/datastores/upload_datastore_from_session.gif)

## Screen

When you are in the interactive Session, use Screen to make sure you don't lose your progress.

```bash
# start screen (lets you close the tab without killing the process)
screen -S some_name
```

now do whatever processing you need:

```bash
# download, etc...
curl http://a_dataset
unzip a_dataset

# process
do_something
something_else
bash process.sh
...
```

when you're done, upload to Grid via the CLI (on the Interactive Session):

```bash
grid datastore create --source imagenet_folder --name imagenet
```

:::note
Grid CLI is auto-installed on sessions and logged in under your credentials.
:::
