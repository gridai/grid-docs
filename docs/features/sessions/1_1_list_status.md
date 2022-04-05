---
sidebar_position: 1.1
title: List Sessions
sidebar_label: List Sessions
---

# List Sessions 

## List Sessions 

On the [Sessions](https://platform.grid.ai/#/sessions) page you can see all your sessions, the ones that are running and the ones
that are paused.

![](/images/sessions/sessions-list.png)

In the CLI you can see them with:

```bash
grid session
```


## Team Members Sessions

You can also see your team member's sessions if you are part of a team.

![](/images/sessions/team-member-sessions.gif)

In the CLI you can see them with: 

```bash
grid session --global
```

## Session Details

You can quickly check any session detail by clicking on the three dots on the right.
It will show a page with the Instance information and there is also a tab with a history
of the session, where you can see when it was created, paused and resumed.

![](/images/sessions/session-details-history.gif)

In the CLI you can check the session details but unfortunately the history is 
not available.

To get the details for all session:

```bash
grid session 
```