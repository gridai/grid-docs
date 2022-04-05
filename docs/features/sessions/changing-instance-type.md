---
sidebar_position: 2.1
title: Changing Session Instance Type
sidebar_label: Change Instance Type
---

# Change Session Instance Type

```text
grid session change-instance-type [--spot , --on_demand] SESSION_NAME g4dn.xlarge
```

Changing Sesssion instance type allows you to upgrade or downgrade the compute capacity of the Session while keeping all of your work in progress untouched.

![](/images/sessions/change-instance-type.gif)


The equivalent via the CLI command:

![](/images/sessions/change-instance-type.png)

__You should PAUSE__ the session before changing the instance type. RESUME the session for the changes to take effect.
