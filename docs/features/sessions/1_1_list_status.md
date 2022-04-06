---
sidebar_position: 1.1
title: List Sessions
sidebar_label: List Sessions
---

# List Sessions 

## List Sessions 

From the Grid UI, you can see all your sessions on the [Sessions](https://platform.grid.ai/#/sessions) page. This view shows you both running and paused sessions. 

![](/images/sessions/sessions-list.png)

In the CLI you can list sessions with:

```bash
grid session
```


## Team Sessions

If you've been added to a team, you can see sessions created by everyone on your team in the Grid UI. 

![](/images/sessions/team-member-sessions.gif)

Using the CLI, you can list all sessions created by your team with: 

```bash
grid session --global
```

## Session Details

From the Grid UI, you can quickly check a Session's details by clicking on the option menu associated with the Session. 
The session details page shows instance information and status history
of the session, where you can see when it was created, paused and resumed.

![](/images/sessions/session-details-history.gif)

In the CLI you can check the session details but unfortunately the history is 
not available.

To get the details for all session:

```bash
grid session 
```