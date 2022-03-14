---
description: Sets the cluster context for the user.
---

# Setting Cluster Contexts

With multi-cluster availability, if you are working against a particular cluster, it's easier to set the
cluster context so all your CLI actions (including creation of a resource such as Run or Session) are going
against that cluster. Apart from the easiness this command brings, it also help you avoid mistakes such
as scheduling to a wrong cluster. 
*Please Note: This feature will evolve to include more elaborate cluster management in the near-term future.
```text
$ grid user set-cluster-context <cluster-name>
```

Note that  By default, the cluster context is set to the global cluster. You can find what's the currently
set cluster context by the `grid user`command which should print the user information along with the current
context into the terminal. Also, For finding the cluster name, you  can use `grid cluster` to list all the
available clusters

If you want to schedule resources on a cluster which is not your cluster context, you can use the `--cluster` argument
into all the creation commands.

```
grid run --cluster <cluster name>
grid session create --cluster <cluster name>
```

Or if you're using config file set the `.compute.provider.cluster` field to the cluster name you've just provisioned. Note 
that, only cluster context will enable you to view the resources in a desired cluster. Other approaches are only for helping
in creation.
