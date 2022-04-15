---
sidebar_position: 1.3
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

## New Automatic Pausing!

We pause your session automatically if balance available goes to zero.

This is so that you don't lose your work!

When you have added credits, just resume the session and carry on with your work. The left navigation bar always shows credits remaining.

![](/images/sessions/autopausing.gif)

## Pause a Session Using a Github Action

As a convenience, we provide a [GitHub Action](https://github.com/sunitaprakash/grid-session-env) for pausing Sessions.
