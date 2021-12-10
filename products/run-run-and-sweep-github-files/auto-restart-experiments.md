---
description: >-
  Resumable experiments can be configured to automatically restart if a spot
  instance becomes unavailable.
---

# 🆕 Auto-Restart Experiments

## Auto-restart Experiments

### What are resumable experiments?

When running experiments on interruptible spot instances, Grid can automatically resume your experiment from the last saved checkpoint when a new instance becomes available. Grid will also recover all artifacts, including the last saved checkpoints. The local filesystem will be preserved between experiment interruption and experiment resumption.

PyTorch Lightning offers out-of-the-box fault-tolerant training, which will automatically preserve any mid-epoch progress. When not using PyTorch Lightning, you will need to make sure your script is resumable.

The lifecycle of a resumable experiment is as follows:

* Experiment starts running
* Experiment trains happily :). But, alas, it is getting terminated soon. Danger on the horizon!
* Grid receives a notification of pending interruption. It will send your experiment process Linux signal SIGTERM
* Your process is expected to terminate orderly, that is dump checkpoints/any state to disk, and exit with status code 0
* Grid will automatically reschedule your experiment on a different instance, albeit it may take a while until a new preemptible/spot instance is available
  * During this time, the experiment is in the `pending` status &#x20;
* New preemptible/spot instance is booted, and we schedule your experiment on it
* Before your experiment begins Grid resumes any artifacts (including your last checkpoint)
* We resume your experiment with the same run command

P.S.

Pytorch Lightning has full support for resumable experiments.

### Gotchas

* Multi-node experiments currently are not supported
* Filesystem is partially preserved, only the experiment execution directory is preserved; similarly as artifacts

### How to use it?

#### CLI

Use `--resumable` flag to indicate this experiment is safe to resume.

```bash
grid run --use_spot --resumable --instance_type p3.2xlarge mnist.py
```

#### SDK

```python
Experiment(resumable=True)
```

#### UI

TODO: Add screenshot; staging is broken at the time of the writing
