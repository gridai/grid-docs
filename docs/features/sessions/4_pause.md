---
sidebar_position: 1.4
title: Pause Sessions
sidebar_label: Pause Sessions
---
# Pause Sessions

## Pause a Session

You've spent hours configuring a Session with all your code, dependencies etc, and now you want to pause so you don't get charged without losing your state.

Use the **pause** feature for this.

You will NOT be charged for paused Sessions.

![](/images/sessions/pause.gif)

The equivalent via the CLI

```bash
grid session pause GRID_SESSION_NAME
```

## Resume a Session

When you're ready to rebuild your session environment, press resume.

![](/images/sessions/unpause.gif)

The equivalent via the CLI

```bash
grid session resume GRID_SESSION_NAME
```

## Automatic Pausing on Zero Balance

We pause your session automatically if tha balance available drops to zero.

Your work will not be lost.

When you have added credits, just resume the session and carry on with your work. The left navigation bar always shows credits remaining.

![](/images/sessions/autopausing.gif)

---

:::note
Even though pausing is immediate, a final snapshot of your session is started after you click pause. 
One consequence of this process is that resuming the session immediately after pausing it will incur a delay of a few minutes for your session to be resumed until this process is done.  This ensures your data is properly saved and avoids any corruption.  

The time required to take the snapshot for the pause and restore the snapshot for resume is dependent on:
- The number of objects and size of the snapshot.  More object and bigger snapshot will take longer
- The machine instance type.  Fewer and slower CPU and smaller RAM machine will take longer
:::
