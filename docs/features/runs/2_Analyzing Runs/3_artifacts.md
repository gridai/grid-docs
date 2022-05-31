---
title: Accessing Artifacts
sidebar_label: Accessing Artifacts
---

:::note
Please avoid using special characters in your artifact names. Grid may not be able to sync artifacts to long-term storage if the name contains percent signs, ampersands, or other special characters. The safest characters to use in your artifact names are alphanumerics, the hyphen, the underscore, and the period.
:::

# Artifacts
Artifacts are the output produced by the training process.

## Saving artifacts

Anytime your script saves artifacts, Grid captures those for you. It does not matter which folder you save artifacts to... Grid will automatically detect them.

Grid uploads your artifacts to long-term storage while your experiment is running *and* at the end of your experiment. This is to ensure that even if your experiment crashes, your artifacts will be saved.

:::note
This may have two side effects, depending on how large and how many artifacts your code generates:

1. Extra Memory Usage

Grid may need to use extra memory while your experiment is running to sync your artifacts to long term storage.
  - Grid will only use extra memory to sync artifacts larger than 1 Gib
  - Grid will use 50 Mi of extra memory to sync artifacts larger than 1 Gib
  - Grid will not use more than 200 Mi of extra memory
  - If you are running memory intensive experiments *and* are generating artifacts over 1 Gib, it is recommended to use a larger instance type

2. Increased run time

Your experiment will not be marked `done` until Grid has finished syncing your artifacts to long-term storage. If you are generating lots of artifacts per experiment, this may increase your experiment run times.
:::

Try [hello.py](https://github.com/williamFalcon/hello/blob/main/hello.py) as an example, to see how artifacts are generated and saved. 

![](/images/runs/runs-artifacts.png)

## Access artifacts via the UI

To access artifacts:

* Select the experiments
* Click artifacts

![](/images/runs/art.gif)

## Share artifacts

Click the link to the right of the artifact to copy the link.

![](/images/runs/sharing-artifacts.png)

:::note
Artifact links have an expiration of 24 hours, new link is generated every 24 hours.
:::

If you delete runs and experiments, then artifacts are deleted, Grid will never delete artifacts unless you want them to be deleted

## Access artifacts via the CLI

To get artifacts via the CLI, find the run name (via the UI or CLI)

```bash
# if it's still running
grid status

# if it's completed
grid history
```

### Artifacts for a run

Get the artifacts for a run

```bash
grid artifacts run-name
```

### Artifacts for an experiment

```bash
# view the experiments in the run
grid status run-name
```

get the artifacts

```bash
# get the artifacts (downloads by default to /grid_artifacts)
# N in expN means the ith experiment (ie: exp0, exp1, exp3, ..., expN)
grid artifacts runname-expN
```
:::note
If you have additional questions about Runs, please visit the [FAQ](https://docs.grid.ai/features/runs/faq). This section is periodically updated with common questions from the Grid community.
:::


### See where your artifacts are stored in the cloud (BYOC clusters only)

If you launched a run on a [BYOC cluster](../../../platform/2_Custom%20Cloud%20Credentials/1_byoc.md)
and would like to get the cloud storage location for the artifacts instead of downloading them,
use the `grid artifacts --bucket_path <run or experiment>`.

It will display a table showing where each experiment stored its artifacts:
```bash
➜ grid artifacts --bucket_path my-run-000
┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ experiment name ┃                                                         bucket path to artifacts ┃
┡━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ my-run-000-exp0 │ s3://my-cluster-storage-bucket/experiments/01g40mbzw89j19p20000000000/artifacts/ │
│ my-run-000-exp1 │ s3://my-cluster-storage-bucket/experiments/01g40mbzw8arz3ds0000000001/artifacts/ │
│ my-run-000-exp2 │ s3://my-cluster-storage-bucket/experiments/01g40mbzw8g8xdtz0000000002/artifacts/ │
└─────────────────┴──────────────────────────────────────────────────────────────────────────────────┘
```

Then, to list the artifacts for an experiment (`my-run-000-exp0` as an example):
```bash
aws s3 ls s3://my-cluster-storage-bucket/experiments/01g40mbzw89j19p20000000000/artifacts/
```
