---
sidebar_position: 1.6
title: Machines
sidebar_label: Machines
---

# Machines

Here are the machines you can use to start up sessions. The syntax for this is numberOfAccelerators_acceleratorType_availableMemory. Below is an example utilizing this syntax to create a session on a machine with 8 v100 gpus and 32 GB memory.

```text
grid session create --instance_type 8_v100_32gb
```

| Name | Accelerator type |
| :--- | :--- |
| 8_V100_32gb | V100 |
| 8_V100_16gb | V100 |
| 8_T4_16gb | T4 |
| 8_K80_12gb | K80 |
| 4_V100_16gb | V100 |
| 4_T4_16gb | T4 |
| 4_M60_8gb | M60 |
| 2_M60_8gb | M60 |
| 1_V100_16gb | V100 |
| 1_T4_16gb | T4 |
| 1_K80_12gb | K80 |
| 1_M60_8gb | M60 |
| 2_CPU_8gb | CPU |
| 2_CPU_4gb | CPU |

# Accepted Conventions
There are two accepted conventions for specifying the machine types:
1. numberOfAccelerators_acceleratorType_availableMemory
2. instance.size as taken from the official aws documentation. An example of this can be found in the table [here](https://aws.amazon.com/ec2/instance-types/g4/).

### Sessions
Below are examples utilizing the numberOfAccelerators_acceleratorType_availableMemory syntax to create a run on a machine with 8 v100 gpus and 32 GB memory.

numberOfAccelerators_acceleratorType_availableMemory syntax
```bash
grid session create --instance_type 8_v100_32gb hello.py --gpus 8
```

Instance.size syntax
```bash
grid session create --instance_type p3.16xlarge hello.py --gpus 8
```

### Show Instance Types available in Cluster

To show all the available instance types you can select from the CLI you can execute:

```bash
grid instance-types
```

This will provide the instance size names from AWS convention that you
have available for use in your sessions.

### Recommended Instance Types

Some instances show a label `Recommended` in the UI (this is not shown in the CLI yet).

These instances have higher availability than others without this label
and are usually instantiated faster for on demand sessions.

![](/images/sessions/recommended-type.gif)

### Spot Instances

Spot instances gives you the best bang for your credits, but they can 
get longer to obtain depending on how popular they are at the moment requested.

Even though they could make more sense for Runs where you don't mind letting it wait
to obtain an instance, you can try obtaining one for Sessions. Set the checkbox in the UI:

![](/images/sessions/spot-create.gif)

In the cli add the option `--use_spot` to your `session create` command:

```bash
grid session create --use_spot
```
