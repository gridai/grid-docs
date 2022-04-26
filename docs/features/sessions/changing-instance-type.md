---
description: Run (and sweep) any private or public Github repository.
---

# Change Instance Type of a Session [BETA]

Changing Sesssion instance type allows you to upgrade or downgrade the compute capacity of the Session while keeping all of your work in progress untouched.

![](/images/sessions/change-instance-type.gif)

You should PAUSE the session to change the instance type. RESUME the session for the changes to take effect.

Currently the following scenarios are supported: 
1. Changing from a CPU instance to another CPU instance
2. Changing an On-Demand instance to a [Spot Instance](https://docs.grid.ai/features/runs/interruptible-machines#interruptible-machines)
3. Changing from a Spot Instance to an On-Demand Instance


The equivalent via the CLI command:

```text
grid session change-instance-type [--spot , --on_demand] SESSION_NAME g4dn.xlarge
```

![](/images/sessions/change-instance-type.png)
