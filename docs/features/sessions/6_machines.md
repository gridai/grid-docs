---
sidebar_position: 1.6
title: Machines
sidebar_label: Machines
---

# Machines

The ways of specifying the machine types are:

- Use cloud specific instance type name.  For AWS, [`g4dn.xlarge`](https://aws.amazon.com/ec2/instance-types/g4/) is an example of 1 GPU with T4 Nvidia GPU with the machine having 8GB of RAM.
- Use cloud neutral `#GPU_GPUTYPE_RAM` name.  `1_T4_8GB` would automatically be translated to `g4dn.xlarge` on AWS.  

See our [machines page](../../platform/3_machines.md) for more information regarding available machines and the accepted syntax.
