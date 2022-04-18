---
title: Accessing Artifacts
sidebar_label: Accessing Artifacts
---

# Artifacts
Artifacts are the output produced by the training process.

## Saving artifacts

Anytime your script saves artifacts, Grid captures those for you. It does not matter which folder you save artifacts to... Grid will automatically detect them.

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
If you have additional questions about Runs, visit the [FAQ](https://docs.grid.ai/features/runs/faq.md). The section is periodically updated this with common questions from the Grid community.
:::