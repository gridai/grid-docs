---
sidebar_position: 1.4
title: Pause Sessions
sidebar_label: Pause Sessions
---
# Pause

## Pause a Session

You've spent hours configuring a Session with all your code, dependencies etc, but now you want to pause so you don't get charged without losing your state.

Use the **pause** feature for this.

You will NOT be charged for paused Sessions.

![](/images/sessions/pause.gif)

The equivalent via the CLI

```bash
grid session pause the-interactive-name
```

## Restart a Session

When you're ready to rebuild your session environment, press restart.

![](/images/sessions/unpause.gif)

The equivalent via the CLI

```bash
grid session resume the-interactive-name
```

## Automatic Pausing on zero balance

We pause your session automatically if balance available goes to zero.

Your work will not be lost.

When you have added credits, just resume the session and carry on with your work. The left navigation bar always shows credits remaining.

![](/images/sessions/autopausing.gif)

---

:::note
Even though pausing is immediate, a final snapshot of your session is started after you click pause. 
One consequence of this process is that resuming the session immediately after pausing it will incur into a 
delay of a few minutes for your session to be resumed until this process is done.  This ensures your data is properly
saved and avoids any corruption.
