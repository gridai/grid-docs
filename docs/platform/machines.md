# Machines
## Available Machines
These are the options of available machines. These can be specified by using the `--instance_type` flag. Later we will cover examples utilitizing this for both
Runs and Sessions.

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

## Accepted Conventions
There are two accepted conventions for specifying the machine types:
1. numberOfAccelerators_acceleratorType_availableMemory
2. instance.size as taken from the official aws documentation. An example of this can be found in the table [here](https://aws.amazon.com/ec2/instance-types/g4/).

### Sessions
Below are examples utilizing the numberOfAccelerators_acceleratorType_availableMemory syntax to create a run on a machine with 8 v100 gpus and 32 GB memory.

numberOfAccelerators_acceleratorType_availableMemory syntax
```bash
grid session create --instance_type 8_v100_32gb hello.py --gpus 8
```

Instance.size synax
```bash
grid session create --instance_type p3.16xlarge hello.py --gpus 8
```

### Runs
Below are examples utilizing the numberOfAccelerators_acceleratorType_availableMemory syntax to create a run on a machine with 8 v100 gpus and 32 GB memory.

numberOfAccelerators_acceleratorType_availableMemory syntax
```bash
grid run --instance_type 8_v100_32gb hello.py --gpus 8
```

Instance.size synax
```bash
grid run --instance_type p3.16xlarge hello.py --gpus 8
```
