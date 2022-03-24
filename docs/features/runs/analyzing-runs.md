:::note
If you encounter issues please check the [FAQ](https://docs.grid.ai/features/runs/troubleshooting.md). We periodically update this with user questions.
:::
# How to analyze Runs
There are many ways to analyze Runs in Grid. Below we provide some examples to get you started with working with this core feature. The examples cover the following:
1. [Viewing Logs](https://docs.grid.ai/features/runs/analyzing-runs#viewing-logs)
2. [Accessing Artifacts](https://docs.grid.ai/features/runs/analyzing-runs#artifacts)
3. [Viewing Metric Charts](https://docs.grid.ai/features/runs/analyzing-runs#metrics-charts)
4. [Failure Root Cause Analysis](https://docs.grid.ai/features/runs/analyzing-runs#failed-jobs)

## Viewing logs

### Stdout logs <a id="stdout-logs"></a>

When you run a script through a terminal, it usually generates logs like so:

```bash
GPU available: False, used: False
TPU available: None, using: 0 TPU cores

  | Name    | Type   | Params
-----------------------------------
0 | layer_1 | Linear | 100 K
1 | layer_2 | Linear | 1.3 K
-----------------------------------
101 K     Trainable params
0         Non-trainable params
101 K     Total params
0.407     Total estimated model params size (MB)

Epoch 3:  46%|██████████▌            | 864/1875 [00:03<00:03, 255.58it/s, loss=0.063, v_num=1]
```

These logs can be viewed on Grid via the UI or CLI.‌

### View logs on the UI <a id="view-logs-on-the-ui"></a>

View the logs output of each script by looking at each experiment's details menu:‌

![](/images/runs/experiment-logs.gif)

### View logs on the CLI <a id="view-logs-on-the-cli"></a>

To view both build logs and stdout logs on the CLI simply find the experiment name and type:

```bash
grid logs enlightened-bullfinch-868-exp0 --use_pager
```

See the CLI [command](../../cli/api.md#logs) for more information


### New Streaming Logs on UI

The Web UI now shows streaming logs as you execute runs, just click on experiment details and check out the Build logs and Stdout logs

## Artifacts

### Saving artifacts

Anytime your script saves artifacts, Grid captures those for you. It does not matter which folder you save artifacts to... Grid will automatically detect those.

Try [hello.py](https://github.com/williamFalcon/hello/blob/main/hello.py) for an example

![](/images/runs/runs-artifacts.png)

### Access artifacts via the UI

Artifacts are the output produced by the training process.

To access artifacts:

* Select the experiments
* Click artifacts

![](/images/runs/art.gif)

### Share artifacts

Click the link to the right of the artifact to copy the link.

![](/images/runs/sharing-artifacts.png)

:::note
Artifact links have an expiration of 24 hours, new link is generated every 24 hours.
:::

If you delete runs and experiments, then artifacts are deleted, Grid will never delete artifacts unless you want them to be deleted

### Access artifacts via the CLI

To get artifacts via the CLI, find the run name (via the UI or CLI)

```bash
# if it's still running
grid status

# if it's completed
grid history
```

#### Artifacts for a run

Get the artifacts for a run

```bash
grid artifacts run-name
```

#### Artifacts for an experiment

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

## Metrics (charts)

### Web Interface view

View the metrics of experiments by choosing Run then experiments

![](/images/runs/experiment-metrics.gif)

### Tensorboard

Tensorboard can be launched in a new tab in the browser by selecting Tensorboard -&gt;refresh

![](/images/runs/tensorboard.gif)

In the Experiments table view, select hyper parameters used to run experiments

![](/images/runs/hyperparameter-explorer.gif)


## Failed jobs

When your jobs fail it could be for 2 reasons, something failed during build or something failed while running

### Build failures

To see build failures, visit the build logs tab on the UI.

![](/images/runs/build_logs.gif)

Failures at this stage can happen because:

* Dependencies fail to install
* An action can fail
* Something goes wrong when executing your script

### Script failures

If the build completes but your script has a failure (ie: bug that causes exception) view the Stdout logs here

![](/images/runs/stdout_logs.gif)

Failures here can happen with:

* Passing the wrong script arguments
* Out of memory
* Issue accessing the data
* A bug in your script that throws an exception

### Using the CLI to get logs

To view logs for an experiment use:

```text
grid logs the-experiment-name
```
