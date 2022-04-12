---
title: Machines
sidebar_label: Machines
---

# Machines

These are the options of available machines. The syntax for this is numberOfAccelerators_acceleratorType_availableMemory. Below is an example utilizing this syntax to create a run on a machine with 8 v100 gpus and 32 GB memory.

```bash
grid run --instance_type 8_v100_32gb hello.py --gpus 8
```

|	Name	|	CPU	|	GPU	|	Memory	|	Accelerator	|	numberOfAccelerators acceleratorType availableMemory 	|	Exception Instance Type Used	|
|	:---	|	:---	|	:---	|	:---	|	:---	|	:---	|	:---	|
|	t2.medium	|	2	|	0	|	4	|	CPU	|	2_CPU_4GB	|		|
|	t3.medium	|	2	|	0	|	4	|	CPU	|	2_CPU_4GB	|	t2.medium	|
|	t2.large	|	2	|	0	|	8	|	CPU	|	2_CPU_8GB	|		|
|	t3.large	|	2	|	0	|	8	|	CPU	|	2_CPU_8GB	|	t2.large	|
|	m5a.large	|	2	|	0	|	8	|	CPU	|	2_CPU_8GB	|	t2.large	|
|	t2.xlarge	|	4	|	0	|	16	|	CPU	|	4_CPU_16GB	|		|
|	t3.xlarge	|	4	|	0	|	16	|	CPU	|	4_CPU_16GB	|	t2.xlarge	|
|	m5a.xlarge	|	4	|	0	|	16	|	CPU	|	4_CPU_16GB	|	t2.xlarge	|
|	t2.2xlarge	|	8	|	0	|	32	|	CPU	|	8_CPU_32GB	|		|
|	t3.2xlarge	|	8	|	0	|	32	|	CPU	|	8_CPU_32GB	|	t2.2xlarge	|
|	m5a.2xlarge	|	8	|	0	|	32	|	CPU	|	8_CPU_32GB	|	t2.2xlarge	|
|	m5a.4xlarge	|	16	|	0	|	64	|	CPU	|	16_CPU_64GB	|		|
|	m5a.8xlarge	|	32	|	0	|	128	|	CPU	|	32_CPU_128GB	|		|
|	m5a.12xlarge	|	48	|	0	|	192	|	CPU	|	48_CPU_192GB	|		|
|	m5a.16xlarge	|	64	|	0	|	256	|	CPU	|	64_CPU_256GB	|		|
|	m5a.24xlarge	|	96	|	0	|	384	|	CPU	|	96_CPU_384GB	|		|
|	g2.8xlarge	|	32	|	4	|	60	|	K520	|	4_K520_60GB	|		|
|	p2.xlarge	|	4	|	1	|	61	|	K80	|	1_K80_61GB	|		|
|	p2.8xlarge	|	32	|	8	|	488	|	K80	|	8_K80_488GB	|		|
|	p2.16xlarge	|	64	|	16	|	732	|	K80	|	16_K80_732GB	|		|
|	g3s.xlarge	|	4	|	1	|	30.5	|	M60	|	1_M60_30.5GB	|		|
|	g3.4xlarge	|	16	|	1	|	122	|	M60	|	1_M60_122GB	|		|
|	g3.8xlarge	|	32	|	2	|	244	|	M60	|	2_M60_244GB	|		|
|	g3.16xlarge	|	64	|	4	|	488	|	M60	|	4_M60_488GB	|		|
|	g4dn.xlarge	|	4	|	1	|	16	|	T4	|	1_T4_16GB	|		|
|	g4dn.2xlarge	|	8	|	1	|	32	|	T4	|	1_T4_32GB	|		|
|	g4dn.4xlarge	|	16	|	1	|	64	|	T4	|	1_T4_64GB	|		|
|	g4dn.8xlarge	|	32	|	1	|	128	|	T4	|	1_T4_128GB	|		|
|	g4dn.16xlarge	|	64	|	1	|	256	|	T4	|	1_T4_256GB	|		|
|	g4dn.12xlarge	|	48	|	4	|	192	|	T4	|	4_T4_192GB	|		|
|	g4dn.metal	|	96	|	8	|	384	|	T4	|	8_T4_384GB	|		|
|	p3.2xlarge	|	8	|	1	|	61	|	V100	|	1_V100_61GB	|		|
|	p3.8xlarge	|	32	|	4	|	244	|	V100	|	4_V100_244GB	|		|
|	p3.16xlarge	|	64	|	8	|	488	|	V100	|	8_V100_488GB	|		|
|	p3dn.24xlarge	|	96	|	8	|	768	|	V100	|	8_V100_768GB	|		|

:::note
- A credit card needs to be added to use GPU machines
- Cases where `numberOfAccelerators_acceleratorType_availableMemory` results in duplicate instance type, the actual `instance_type` used is specifeid in **Exception Instance Type Used** column.
:::
