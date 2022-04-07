---
sidebar_position: 1.5
title: Attaching Datastores to a Session
sidebar_label: Attaching Datastores to a Session
---

:::note: Datastore can only be mounted to a Session at Session creation time:::

---
description: Mount a datastore before starting the Session
---

# Attaching Datastores to a Session

## Attach to a Session

This video shows how we mount an ImageNet Datastore to a Session.

![](/images/datastores/attach_datastore_to_session.gif)

In Sessions datastores are mounted to `/datastores`. 
However, since juypyter notebooks use `/home/joyvan` as the default working directory, 
we provide a symlink from `/home/jovyan/datastores` to `/datastore` so you can access your datastore easily upon opening up a Session.


Once in the Session, view the data with:

```bash
cd /datastores
ls
```

To create a session with a datastore in the CLI, you can do the following to get the latest version of the datastore name `DATASTORE_NAME`:

```bash
grid session create --datastore_name DATASTORE_NAME
```

## Attach a team datastore to a Session

This is completely transparent, and you can attach a datastore uploaded by a team member to your session.

Check datastores available to you in the [UI](https://platform.grid.ai/#/datastores). Or in the CLI: 

```bash
grid datastore --global
```
