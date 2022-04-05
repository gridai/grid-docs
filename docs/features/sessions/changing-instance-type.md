---
sidebar_position: 2.1
title: Changing Session Instance Type
sidebar_label: Change Instance Type
---

# Change Session Instance Type

```text
# change instance type
grid session change-instance-type SESSION_NAME g4dn.xlarge
```

Changing Sesssion instance type allows you to upgrade or downgrade the compute capacity of the Session while keeping all of your work in progress untouched.

![](/images/sessions/change-instance-type.gif)


The equivalent via the CLI command:

![](/images/sessions/change-instance-type.png)

### Change to spot instance

In the UI you can set the Spot checkbox or in the CLI add `--spot` flag.
You still need to provide the instance type even if just changing from on demand to spot.

```bash
grid session change-instance-type sassy-crane-892 --spot g4dn.xlarge
```

:::note 
__PAUSE__ the session before changing the instance type. Then RESUME the session for the changes to take effect.
:::