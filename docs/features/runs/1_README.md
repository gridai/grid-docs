---
title: Overview
sidebar_label: Overview
---

import Video from "@site/src/components/Video";

# Demystifying Runs

## What are Runs
Runs are "serverless" compute dedicated to executing the scripts you provide them.  

## Why use Runs
Because Runs are "serverless" compute you only pay for the time your script is running. This amounts to massive cost savings whether you use Runs in Grid Cloud or in Bring Your Own Cloud.

### Capabilities Highlights
1. [Utilize a Variety of AWS Machines](https://docs.grid.ai/platform/machines)
2. [GitHub Integration](https://docs.grid.ai/platform/github-integration)
3. [Attach Datastores](https://docs.grid.ai/features/runs#attaching-datastores-to-runs)
4. [Auto-resume experiments](https://docs.grid.ai/features/runs/auto-resume-experiments)
5. [Hyperparameter Search Optimizations](https://docs.grid.ai/features/runs/sweep-syntax)
6. [Localdir](https://docs.grid.ai/features/runs/localdir)  
7. [Utilize Interruptable Machines](https://docs.grid.ai/features/runs/interruptible-machines)


## Runs Primer

### Runs and sweeps

Run (**and sweep**) any private or public Github repository on the cloud.

```bash
# clone repo
git clone https://github.com/williamFalcon/hello

# start the sweep
cd hello
grid run hello.py --number "[1, 2]" --food_item "['pizza', 'hotdog']"
```

The Grid CLI accepts "--" as a separator between grid arguments and script arguments. This is useful under situations where the Grid CLI arguments have the same name as your script arguments, preventing name clashing. As an example:

```
grid run --grid_param argument --grid_param argument -- train.py --script_param argument --script_param argument
```

:::note
Grid Run respects the use of .ignore files; these files are used to tell a program which files it should ignore during execution. Grid gives preference to the .gridignore file. In the absence of a .gridignore file Grid will concatenate the .gitignore and .dockerignore files to determine which files should be ignored. These files do not have to be provided to the CLI or UI and are expected to reside in the project root directory.
:::

**⚡️⚡️Forget about infrastructure ⚡️⚡️**

Runs are "serverless" which means you only pay for the time your scripts are actually running. When running on your own infrastructure this amounts to massive cost savings as well.

### 1 minute overview

In this video we're going to run an arbitrary model (from the pytorch examples github repo) across 4 GPUs (4 experiments each on 2 GPUs)

<!-- This is out of date -->
<!-- 1. the CLI args are incorrect: we don't use the `g_` prefix anymore -->
<!-- 2. the UI is out of date: we don't have a badge for reproducable runs anymore -->
<Video src="https://grid-docs.s3.us-east-2.amazonaws.com/intro_video_docs_run.mp4"/>

### Product Tour

[Click here for a 2-minute tour of RUN](https://platform.grid.ai/#/dashboard?product_tour_id=226810)

![](/images/runs/runs-product-tour.png)

### Option 1: Run via the CLI

RUN **any** GitHub file with Grid in 4 steps:

```bash
# 1. clone the repo
git clone https://github.com/pytorch/examples

# 2. find the file to run
cd examples/dcgan

# 3. verify it works locally (optional)
python   main.py --dataset cifar10 --lr 0.0002 --dataroot .

# 4. run on a cloud instance via grid
grid run main.py --dataset cifar10 --lr 0.0002 --dataroot .
```

Grid offers advanced syntax for starting a run. With this code:

```bash
grid run hello.py --number "[1, 2]" --food_item "['pizza', 'hotdog']"
```

Grid will run the script 4 times... these are the 4 equivalent script calls (we call each script call an experiment)

```bash
python hello.py --number 1 --food_item 'pizza'
python hello.py --number 2 --food_item 'pizza'

python hello.py --number 1 --food_item 'hotdog'
python hello.py --number 2 --food_item 'hotdog'
```

:::note
A RUN is a collection of experiments (the run has 4 experiments in this example).
:::

### **Option 2: Start via the web UI**

![](/images/runs/run_start.gif)

# Next Steps
Checkout our documentation on [using runs](https://docs.grid.ai/features/runs/creating-basic-runs)
