---
description: >-
  Sessions are interactive machines (with multiple GPUs) optimized for
  development.
---

# ⚡Sessions

## Sessions

For prototyping/debugging/analyzing, sometimes you need a LIVE machine. We call these _Sessions_.

Session features:

* Mount multiple GPUs
* Auto-mount datastores
* Pre-installed JupyterLab
* SSH access
* Visual Studio Code access
* Pause the session to save work and pause expenses
* Resume where you left off

## Product Tour

[Click here for the 1-minute tour of Sessions](https://platform.grid.ai/#/dashboard?product_tour_id=221973)

![](/images/sessions/sessions-product-tour.png)

## **Start a Session**

![](/images/sessions/session.jpg)

![](/images/sessions/new-session.gif)

The equivalent via the CLI command:

```bash
# session with 2 M60 GPUs
grid session create --instance_type 2_m60_8gb
```

## Delete a Session

![](/images/sessions/delete-session.gif)

The equivalent CLI command:

```text
grid session delete $INTERACTIVE_NODE_ID
```

## Share Data Between Sessions
At this time the only supported way to share data between sessions is to mount the sessions locally and copy files to the local mounts. Establishing SSH connection to your sessions is a prerequisite to this. See these [steps](https://github.com/gridai/grid-docs/blob/doc-182-share-data-between-sessions/docs/products/sessions/how-to-ssh-into-a-session.md) to set up SSH connection with your sessions. **Be sure to logout of the interactive session before attempting the next step**. After that you can do the following to create your session mounts:

```
# Do for each session you wish to share data between
mkdir <dir for each session mount>
grid session mount <your session> <created session mount dir>
mkdir <created session mount dir>/shared_data

# to share data from a session to another session
cp -R <dir of interest in created session mount dir> ./shared_data
```
