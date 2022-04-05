---
sidebar_position: 1.5
title: Attaching Datastores
sidebar_label: Attaching Datastores
---

:::note: Datastore can only be mounted to a Session at Session creation time:::

---
description: Mount a datastore before starting the Session
---

# Attaching Datastores

## Attach to a Session

This video shows how we attach an ImageNet Datastore to a Session.

![](/images/datastores/attach_datastore_to_session.gif)

In Sessions datastores are mounted to /datastores. However, since juypyter notebooks use /home/joyvan as the default working directory we provide a symlink from /home/jovyan/datastores to /datastore so you can access your datastore easily upon opening up a Session.


Once in the Session, view the data with:

```bash
cd /datastores
ls
```
