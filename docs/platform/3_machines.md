---
sidebar_position: 
title: Machines
sidebar_label: Machines
---

# Machines
Here are the machines (also known as instance types) you can use to create sessions and runs. The syntax for specifying an instance type is `numberOfAccelerators_acceleratorType_availableMemory`. Below is an example utilizing this syntax to create a session on a machine with 8 v100 gpus and 32 GB memory.

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
1. `numberOfAccelerators_acceleratorType_availableMemory`
2. instance.size as taken from the official aws documentation. An example of this can be found in the table [here](https://aws.amazon.com/ec2/instance-types/g4/).


Below are examples utilizing both the `numberOfAccelerators_acceleratorType_availableMemory` syntax and `instance.size` syntax to create a session on a machine with 8 v100 gpus and 32 GB memory.

`numberOfAccelerators_acceleratorType_availableMemory` syntax
```bash
grid session create --instance_type 8_v100_32gb
```

`instance.size` syntax
```bash
grid run --instance_type p3.16xlarge hello.py --gpus 8
```

### Show Instance Types available in Cluster

To show all the available instance types in your cluster from the CLI you can submit:

```bash
grid instance-types
```

This will provide the instance size names from the AWS convention that you
have available for use by your cluster.

### Recommended Instance Types

Some instances show a label `Recommended` in the UI (this is not shown in the CLI yet).These instances have higher availability than instances without this label and can allow for faster session start up times.

![](/images/sessions/recommended-type.gif)

### Spot Instances

Spot instances give you access to cheaper compute instances, but they can 
take longer to start, depending on how popular they are at the moment requested.

You can also try using spot instances with Sessions [BETA], if you don't mind waiting for the instance to be available or if you don't mind your Session being interrupted when the instance becomes unavailable. 

To select a spot instance in the Grid UI, select the "spot instance" checkbox in the Session configuration page:

![](/images/sessions/spot-create.gif)

In the CLI, add the option `--use_spot` to your `session create` command:

```bash
grid session create --use_spot
```

```bash
grid run --use_spot
```
