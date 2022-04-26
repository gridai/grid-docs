---
title: Auto-Resume Experiments
sidebar_label: Auto-Resume Experiments
---
# Auto Resume Experiments

### What are resumable experiments?

When running experiments on interruptible spot instances, Grid can automatically resume your experiment from the last saved checkpoint when a new instance becomes available. Grid will also recover all artifacts, including the last saved checkpoints. The local filesystem will be preserved between experiment interruption and experiment resumption.

PyTorch Lightning offers out-of-the-box fault-tolerant training, which will automatically preserve any mid-epoch progress. **When not using PyTorch Lightning, you will need to make sure your script is resumable.**

The lifecycle of a resumable experiment is as follows:

* Experiment starts running
* Experiment trains happily :). But, alas, it is getting terminated soon. Danger on the horizon!
* Grid receives a notification of pending interruption. It will send your experiment process Linux signal SIGTERM
* Your process is expected to terminate orderly, that is dump checkpoints/any state to disk, and exit with status code 0
* Grid will automatically reschedule your experiment on a different instance, albeit it may take a while until a new preemptible/spot instance is available
* New preemptible/spot instance is booted, and we schedule your experiment on it
* Before your experiment begins Grid resumes any artifacts (including your last checkpoint)
* We resume your experiment with the same run command

### Gotchas

* Multi-node experiments currently are not supported
* Filesystem is partially preserved, only the experiment execution directory is preserved; similarly as artifacts

### How to use it?

#### Prerequisites
In order for experiments to resume from last checkpoint, the following prerequisites must be met:

- On interruption the process shall receive signal SIGTERM
- The process needs to save checkpoint and exit with status code 0
- On resuming we'll restore all artifacts and code is responsible for resuming from last checkpoint in the file system

#### UI

![image](https://user-images.githubusercontent.com/13732925/148102089-f540356a-a2e6-4e9d-ac1f-51de26691086.png)

#### CLI

Use `--auto_resume` flag to indicate this experiment is safe to resume.

```bash
grid run --use_spot --auto_resume --instance_type p3.2xlarge mnist.py
```


### PyTorch Lightning Fault Tolerance

PyTorch Lightning provides a built-in auto-resume mechanism. This would enable you to run your experiments at the cheapest cost without worrying about your experiments being terminated before they should be.  

You can learn more about the PyTorch Lightning Fault Tolerance mechanism [here](https://pytorch-lightning.readthedocs.io/en/latest/advanced/fault_tolerant_training.html#:~:text=Fault%2Dtolerant%20Training%20is%20an,a%20hardware%20or%20software%20failure.&text=fit()%20fails%20in%20the,and%20everything%20will%20be%20restored.).

Furthermore, PyTorch Lightning provides a reproducible script that you can find [here](https://github.com/PyTorchLightning/pytorch-lightning/blob/master/pl_examples/fault_tolerant/automatic.py) which is tested end-to-end on Grid with the Auto-Resume feature and can be used as a reference for you to get started.

:::note
If you have additional questions about Runs, visit the [FAQ](https://docs.grid.ai/features/runs/faq). The section is periodically updated this with common questions from the Grid community.
:::
