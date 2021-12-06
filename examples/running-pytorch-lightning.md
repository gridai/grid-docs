---
description: Run PyTorch Lightning scripts in Grid
---

# Running PyTorch Lightning

Running [PyTorch Lightning](https://github.com/PyTorchLightning/pytorch-lightning) scripts and  [hyper parameter sweeps](https://www.grid.ai/what-are-hyperparameter-sweeps-and-why-are-they-important-to-production-machine-learning/) in Grid is easy using CLI or the Web UI. Grid and Lightning are optimized to work together!

Both CPU and GPU instances are supported with all necessary system drivers pre-installed and set up, so you can take advantage of multiprocessing and compute acceleration hardware with no additional configuration.&#x20;

## Example

In the Web UI Dashboard view, click on Hello CIFAR-10 demo, this invokes the New Run dialog pre-populated with this script: [https://github.com/gridai/hello\_mnists/blob/master/pl\_cifar10.py](https://github.com/gridai/hello\_mnists/blob/master/pl\_cifar10.py)

![](<../.gitbook/assets/Screen Shot 2021-06-22 at 8.45.34 PM.png>)

Choose the machines you want to run the program on, the hyper parameter strategy, optionally any script arguments such as learning rate specified as numpy distribution: --learning\_rate "uniform(1e-5, 1e-3, 8)" and Start Run

As the experiments start running, view the metrics and artifacts as well as invoke Tensorboard in the Runs view

![](<../.gitbook/assets/Screen Shot 2021-06-22 at 9.39.53 PM.png>)

If using CLI is your preference, you can follow the CLI [tutorial ](../start-here/typical-workflow-cli-user.md)
