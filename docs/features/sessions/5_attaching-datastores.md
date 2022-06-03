---
sidebar_position: 1.5
title: Attaching Data to a Session
sidebar_label: Attaching Data to a Session
---

:::note Datastore can only be mounted to a Session at Session creation time

# Attaching Datastores

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

To create a session with a datastore in the CLI, you can run the following to attach the latest version of the named datastore:

```bash
grid session create --datastore_name DATASTORE_NAME
```

## Attach a team datastore to a Session

You can attach a datastore uploaded by a team member to your session.

Check datastores available to your team in the [UI](https://platform.grid.ai/#/datastores). Or in the CLI with:

```bash
grid datastore --global
```

# Mount Data Without Using a Datastore

If you'd like to mount data to a Session without using a datastore, you can use the the `grid session mount [session name]` command. As a prerequisite you will need to have set up SSH keys for your session,
ssh'd into the session, and don't forget to exit the session. SSH'ing into and exiting the session is a one time operation. Please see this documentation 
[SSH into Session](./8_how-to-ssh-into-a-session.md) for help creating your SSH keys.