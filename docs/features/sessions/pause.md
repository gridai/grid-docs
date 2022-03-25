---
description: Pause a live session
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

## Pause a session using a cron job

You can use Github Action cron to pause a session 

To pause a session in cron fashion. Below is scheduled-SessionPause.yml.

```
jobs:
  gridai-actions:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: gridai-actions/gridai-login@v0
        with:
          gridai-username: ${{ secrets.GRIDAI_USERNAME }} 
          gridai-key: ${{ secrets.GRIDAI_KEY }}
      - run: |
          grid session pause ${{ secrets.SESSION_NAME }} 
  ```

For example look at the [Github repository](https://github.com/sunitaprakash/grid-session-env).
