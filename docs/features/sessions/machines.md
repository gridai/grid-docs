---
sidebar_position: 1.5
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
