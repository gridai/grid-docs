---
title: Cluster Context
sidebar_label: Cluster Context
---

import Note from "@site/src/components/Note";

# Setting Cluster Context

With multi-cluster availability, if you are working against a particular cluster, it's easier to set the
cluster context so all your CLI actions (including creation of a resource such as Datastore, Run or Session) are going
against that cluster. Apart from the easiness this command brings, it also help you avoid mistakes such
as scheduling to a wrong cluster.


:::note**Please Note:**
This feature will evolve to include more elaborate cluster management in the near-term future.
:::

To set cluster context, you shuld use:
```text
$ grid user set-cluster-context [cluster-name]
```

Note that by default, the cluster context is set to the global cluster. The global cluster name is `Grid Cloud`. The global cluster id is `prod-2`.
You can find what's the currently
set cluster context by the `grid user` command which should print the user information along with the current
context into the terminal. Also, For finding the cluster name, you  can use `grid clusters` to list all the
available clusters

If you want to schedule resources on a cluster which is not your cluster context, you can use the `--cluster` argument
into all the creation commands.

```
grid run --cluster <cluster name>
grid session create --cluster <cluster name>
```

Or if you're using config file set the `.compute.provider.cluster` field to the cluster name you've just provisioned. Note that only cluster context will enable you to view the resources in a desired cluster. Other approaches are only for helping in creation.

# Examples

- Run `grid clusters` show a Grid [BYOC](./self-managed-byoc) cluster named `c220309-165349` whose cluster id is `c220309-165349`.
Also shown is the the global cluster named `Grid Cloud` whose cluster id is `prod-2`.

```bash
% grid clusters
┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┓
┃ id              ┃ name            ┃ type       ┃ status      ┃ created      ┃
┡━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━┩
│ c220309-165349  │ c220309-165349  │ byoc       │ running     │ 2 days ago   │
│ prod-2          │ Grid Cloud      │ grid-cloud │ running     │ 7 months ago │
└─────────────────┴─────────────────┴────────────┴─────────────┴──────────────┘
```

- Run `grid user set-cluster-context "c220309-165349"` to switch the context so that the Grid CLI commands do not require `--cluster` each time.
```bash
% grid user set-cluster-context "c220309-165349"
✔ Successfully set the cluster context to c220309-165349
% grid user
Display name    : xxxxxxxx
UserID          : xxxxxxxx
Username        : xxxxxxxx
Email           : xxxxxxxx
Cluster context : c220309-165349
```

- Run `grid user set-cluster-context "Grid Cloud"` to switch the context back to the global cluster.  

**Please Note:** `Grid Cloud` is case senstive and will fail if the case is not preserved as shown below.
```bash
% grid user set-cluster-context "grid cloud"
Error: Cluster with name grid cloud not found
```

**Please Note:** `Cluster context` below shows the corresponding cluster id `prod-2` and **NOT** the cluster name `Grid Cloud`.
```bash
% grid user set-cluster-context "Grid Cloud"
✔ Successfully set the cluster context to Grid Cloud
% grid user
Display name    : xxxxxxxx
UserID          : xxxxxxxx
Username        : xxxxxxxx
Email           : xxxxxxxx
Cluster context : prod-2
```  
