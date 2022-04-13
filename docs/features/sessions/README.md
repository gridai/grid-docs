---
sidebar_position: 1.0
title: Overview
sidebar_label: Overview
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

Listing sessions in the CLI:
```bash
grid session
```

## Delete a Session

![](/images/sessions/delete-session.gif)

The equivalent CLI command:

```text
grid session delete $SESSION_NAME
```

## Pausing/Resuming a Session

As we will not be working 24/7 on our sessions it is important to pause them to not consume 
our credits.  Resuming will bring back your session with all packages you have installed previously.

### Pausing

```bash
grid session pause SESSIONNAME
```

### Resuming

```bash
grid session resume SESSIONNAME
```

## Change Session Instance Type

```text
# Note: at the moment it is required that you first pause the session
grid session pause SESSION_NAME

grid session change-instance-type SESSION_NAME g4dn.xlarge
```

More details on how to change Session instance type can be found [here](./changing-instance-type.md)
