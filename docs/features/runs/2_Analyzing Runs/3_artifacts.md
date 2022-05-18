---
title: Accessing Artifacts
sidebar_label: Accessing Artifacts
---

:::note Artifacts name should be ascii code characters (special characters are not supported at this time).

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
If you have additional questions about Runs, visit the [FAQ](https://docs.grid.ai/features/runs/faq). The section is periodically updated this with common questions from the Grid community.
:::
