---
description: Run (and sweep) any private or public Github repository.
---
import Note from "@site/src/components/Note";

# Change Instance Type of a Session

```text
grid session change-instance-type [--spot , --on_demand] SESSION_NAME g4dn.xlarge
```

Changing Sessison instance type allows you to upgrade or downgrade the compute capacity of the Session while keeping all of your work in progress untouched.

![](/images/sessions/change-instance-type.gif)

You can change the instance type of the session when it is PAUSED

The following scenarios are supported: 
1. Changing from a CPU instance to another CPU instance
2. Changing from a GPU instance to another GPU instance
3. Changing from a GPU instance to a CPU instance
4. Changing an On-Demand instance to a Spot Instance
5. Changing from a Spot Instance to an On-Demand Instance

<note>Changing from a CPU to GPU is not currently supported</note>