---
title: Failed Runs
sidebar_label: Failed Runs
---

# Failed Runs

Grid Run failures can happen during build or during experiment runtime. 

## Build failures

To see build failures, view the build logs tab on the UI.

![](/images/runs/build_logs.gif)

Failures at this stage can happen because:

* Dependencies fail to install
* An action can fail
* Something goes wrong when executing your script

## Script Failures

If the build completes but your script has a failure (i.e.: a bug in the code that causes exception), you can view the Stdout logs for more information. 

![](/images/runs/stdout_logs.gif)

Failures here can happen because:

* Passing the wrong script arguments
* Out of memory
* Issue accessing the data
* A bug in your script that throws an exception

## Using the CLI to get logs

To view logs for an experiment use:

```text
grid logs the-experiment-name
```
:::note
If you have additional questions about Runs, visit the [FAQ](https://docs.grid.ai/features/runs/faq). The section is periodically updated this with common questions from the Grid community.
:::
