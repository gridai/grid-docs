---
title: Viewing Logs
sidebar_label: Viewing Logs
---

# Viewing logs

## Stdout logs <a id="stdout-logs"></a>

When you run a script through a terminal, it usually generates logs like this:

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

## View logs on the UI <a id="view-logs-on-the-ui"></a>

The Web UI now shows streaming logs as you execute runs, just click on experiment details and check out the Build logs and Stdout logs.

![](/images/runs/experiment-logs.gif)

## View logs on the CLI <a id="view-logs-on-the-cli"></a>

To view both build logs and stdout logs on the CLI simply find the experiment name and type:

```bash
grid logs enlightened-bullfinch-868-exp0 --use_pager
```

See the CLI [command](https://docs.grid.ai/cli#grid-logs) for more information



:::note
If you have additional questions about Runs, visit the [FAQ](https://docs.grid.ai/features/runs/faq.md). The section is periodically updated this with common questions from the Grid community.
:::