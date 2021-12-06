# Viewing logs

## Stdout logs <a href="#stdout-logs" id="stdout-logs"></a>

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

## View logs on the UI <a href="#view-logs-on-the-ui" id="view-logs-on-the-ui"></a>

View the logs output of each script by looking at each experiment's details menu:‌

![](<../../.gitbook/assets/Logs (1).gif>)

## View logs on the CLI <a href="#view-logs-on-the-cli" id="view-logs-on-the-cli"></a>

To view both build logs and stdout logs on the CLI simply find the experiment name and type:

```bash
grid logs enlightened-bullfinch-868-exp0 --use_pager
```

See the CLI command for more information

{% content-ref url="../global-cli-configs/cli-api/grid-logs.md" %}
[grid-logs.md](../global-cli-configs/cli-api/grid-logs.md)
{% endcontent-ref %}

## New Streaming Logs on UI

The Web UI now shows streaming logs as you execute runs, just click on experiment details and check out the Build logs and Stdout logs
