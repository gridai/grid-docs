---
title: Failed Runs
sidebar_label: Failed Runs
---
:::note
If you encounter issues please check the [FAQ](https://docs.grid.ai/features/runs/faq.md). We periodically update this with user questions.
:::
# Failed Runs

When your jobs fail it could be for 2 reasons, something failed during build or something failed while running

## Build failures

To see build failures, visit the build logs tab on the UI.

![](/images/runs/build_logs.gif)

Failures at this stage can happen because:

* Dependencies fail to install
* An action can fail
* Something goes wrong when executing your script

## Script Failures

If the build completes but your script has a failure (ie: bug that causes exception) view the Stdout logs here

![](/images/runs/stdout_logs.gif)

Failures here can happen with:

* Passing the wrong script arguments
* Out of memory
* Issue accessing the data
* A bug in your script that throws an exception

## Using the CLI to get logs

To view logs for an experiment use:

```text
grid logs the-experiment-name
```
