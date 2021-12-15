---
description: Frequently asked questions about Runs
---

# FAQ

## How doz I retain my run data?
The downloadable artifacts are how you get data out of the runs.  For IxNodes, there are a few options:
1. You can download straight from JupyterHub
2. You can mount the data locally with `grid interactive mount`
3. You can `scp`
4. You can simply 'pause' the node and restart it any time you need it (if you don't require downloading the data locally)

## How long are artifacts stored?
Artifacts are downloadable for 24 hours after creation.

## Why isn't Grid locating my requirements.txt file?
Grid by default will look for a requirements.txt file in the root directory of your project. To customize this behavior try using the `--dependency_file` flag

## How can I resolve Windows pathing issues when using grid?
There are two options users can try:
1. default to the Windows Subsystem for Linux
2. Try running your commands with by replacing '\' characters with '\\' in your path. 

## The cost changed during a run?

Grid provides estimates of ongoing costs. Once a run terminates we compute the final cost.

## How do I find out what packages are pre-installed in the cloud machine?

Cloud machines are configured in a simple way with only what is needed to run the scripts in the framework of choice.

## What machine learning frameworks does Grid support?

Grid is optimized for PyTorch Lightning. It also supports Tensorflow, Keras any framework built on top of PyTorch.

Try this repository for running Keras example: [https://github.com/gridai/hello\_mnists/blob/443d9522/keras.py](https://github.com/gridai/hello_mnists/blob/443d9522/keras.py)

Grid can also run non-deep learning focused workloads such as plain numpy, sklearn, etc..

## I'm using an in-house ML library. Can I use it with Grid?

Grid can run arbitrary python scripts. You're free to run whatever you want inside a script. However, Grid is optimized for Pytorch, Pytorch Lightning, Tensorflow, Keras, numpy and sklearn.

## I am getting lot of errors using CLI

Grid supports Linux based operating systems. We recommend using virtual environment when using CLI. Please see the guidance [here](../global-cli-configs/virtual-environments.md)

## Experiments are queued for a long time

If experiments are queued for a long time it could be a sign that instance type requested is not available; reach out on slack or open a github issue if you see this: [https://github.com/gridai/gridai/issues](https://github.com/gridai/gridai/issues). Choosing another instance type may help in some cases.
