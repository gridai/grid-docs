---
description: Delete a run or experiment
---

# grid delete

## delete a run

Delete a run with:

```bash
grid delete run the-run-name
```

```bash
WARNING!

    Your are about to delete the Run (honored-panther-221).
    This will delete all the associated artifacts, logs, and metadata.

    Are you sure you want to do this?

    [y/N]: y
    ✔ Deleting honored-panther-221
Run honored-panther-221 has been deleted successfully
```

## delete an experiment

```bash
grid delete experiment experiment_name
```

{% hint style="info" %}
grid delete and grid edit commands for cluster configuration are available if using [custom credential ](../../../platform/upgrades/adding-custom-cloud-credentials.md)
{% endhint %}

