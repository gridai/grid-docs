# grid metrics

Use grid metrics to see metric values after running experiments

```bash
grid metrics [experiment-name] [experiment metric] --n_lines [integer]
```

For example the following code block shows values for a metric for that experiment

```bash
grid metrics cuddly-partridge-729-exp0 fake_metric
✔ Getting experiment info...
✔ Fetching metrics ...
            9990  5.0801434517
            9991  4.9870018959
            9992  4.9555387497
            9993  5.0147724152
            9994  5.1103363037
            9995  5.1544613838
            9996  5.1066708565
            9997  5.0109953880
            9998  4.9554905891
            9999  4.9912791252
```

