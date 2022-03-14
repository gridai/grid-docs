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
grid session delete $SESSION_NAME
```
## Change Instance Type of a Session

Change instance type allows you to upgrade or downgrade the compute capability of the session node while keeping all of your work in progress untouched. It is particularly useful if you want to increase/decrease the resource capacity of an existing session.

![](/images/sessions/change-instance-type.gif)

You can change the instance type of the session when it is PAUSED
1. CPU to CPU
2. CPU to GPU (This does not work currently)
3. GPU to CPU
4. GPU to GPU
5. Spot to On Demand
6. On Demand to Spot

```text
grid session change-instance-type [--spot , --on_demand] SESSION_NAME g4dn.xlarge
```

