# Billing rates

Grid charges based on consumption of compute.

:::note
Costs are **estimates** until Runs have completed or Sessions are paused, then Grid reports the final costs.
:::

A temporary hold of $1 will be placed on your credit card for 5-7 business days when using GPU machines.

This page describes community edition pricing; refer to plans [here](https://www.grid.ai/pricing/).

## List pricing

If you need to run jobs for a long time and they cannot be interrupted, then use on-demand runs (this is the default option). This will use the list pricing.

```text
grid run main.py
```

## Interruptible pricing


If your jobs (Sessions or Runs) can be interrupted and you want to save money, enable [Spot Instances](https://docs.grid.ai/features/runs/interruptible-machines#interruptible-machines). There is no uptime guarantee when using spot instances, so a job is terminated when the cloud provider needs the machine.


To start a run using spot instances:
```text
grid run --use_spot main.py
```

To start a session using spot instances use:
```shell
grid session create --use_spot
```

## Individual Tier hourly rates

Below you will find prices by machine type _per hour_ when running on Grid cloud \(Built on top of AWS\).

\_\*\_Prices will vary slightly.

| Accelerators | Machine specs | List  price \(p/h\) | Interruptible  price \(p/h\) |
| :--- | :--- | :--- | :--- |
| 2xCPU \(2 GB\) | [t2.medium](https://aws.amazon.com/blogs/aws/new-t2-xlarge-and-t2-2xlarge-instances/) | ~ $0.05 | ~ $0.02 |
| 2xCPU \(4 GB\) | [t2.large](https://aws.amazon.com/blogs/aws/new-t2-xlarge-and-t2-2xlarge-instances/) | ~ $0.10 | ~ $0.04 |
| 4xCPU \(4 GB\) | [t2.xlarge](https://aws.amazon.com/blogs/aws/new-t2-xlarge-and-t2-2xlarge-instances/) | ~ $0.19 | ~ $0.06 |
| 8xCPU \(4 GB\) | [t2.2xlarge](https://aws.amazon.com/blogs/aws/new-t2-xlarge-and-t2-2xlarge-instances/) | ~ $0.39 | ~ $0.12 |
| 1xT4 \(16 GB\) | [g4dn.xlarge](https://aws.amazon.com/ec2/instance-types/g4/) | ~ $0.55 | ~ $0.17 |
| 1xM60 \(8 GB\) | [g3s.xlarge](https://aws.amazon.com/ec2/instance-types/g3/) | ~ $0.79 | ~ $0.24 |
| 1xT4 \(16 GB\) | [g4dn.2xlarge](https://aws.amazon.com/ec2/instance-types/g4/) | ~ $0.79 | ~ $0.24 |
| 1xK80 \(12 GB\) | [p2.xlarge](https://aws.amazon.com/ec2/instance-types/p2/) | ~ $0.94 | ~ $0.28 |
| 1xM60 \(8 GB\) | [g3.4xlarge](https://aws.amazon.com/ec2/instance-types/g3/) | ~ $1.20 | ~ $0.36 |
| 1xT4 \(16 GB\) | [g4dn.4xlarge](https://aws.amazon.com/ec2/instance-types/g4/) | ~ $1.26 | ~ $0.38 |
| 1xT4 \(16 GB\) | [g4dn.8xlarge](https://aws.amazon.com/ec2/instance-types/g4/) | ~ $2.28 | ~ $0.69 |
| 2xM60 \(8 GB\) | [g3.8xlarge](https://aws.amazon.com/ec2/instance-types/g3/) | ~ $2.39 | ~ $0.72 |
| 1xV100 \(16 GB\) | [p3.2xlarge](https://aws.amazon.com/ec2/instance-types/p3/) | ~ $3.21 | ~ $0.96 |
| 4xT4 \(16 GB\) | [g4dn.12xlarge](https://aws.amazon.com/ec2/instance-types/g4/) | ~ $4.11 | ~ $2.03 |
| 1xT4 \(16 GB\) | [g4dn.16xlarge](https://aws.amazon.com/ec2/instance-types/g4/) | ~ $4.57 | ~ $1.37 |
| 4xM60 \(8 GB\) | [g3.16xlarge](https://aws.amazon.com/ec2/instance-types/g3/) | ~ $4.79 | ~ $1.44 |
| 8xK80 \(12 GB\) | [p2.8xlarge](https://aws.amazon.com/ec2/instance-types/p2/) | ~ $7.56 | ~ $2.27 |
| 8xT4 \(16 GB\) | [g4dn.metal](https://aws.amazon.com/ec2/instance-types/g4/) | ~ $8.22 | ~ $2.46 |
| 4xV100 \(16 GB\) | [p3.8xlarge](https://aws.amazon.com/ec2/instance-types/p3/) | ~ $12.85 | ~ $3.86 |
| 16xK80 \(12 GB\) | [p2.16xlarge](https://aws.amazon.com/ec2/instance-types/p2/) | ~ $15.12 | ~ $4.54 |
| 8xV100 \(16 GB\) | [p3.16xlarge](https://aws.amazon.com/ec2/instance-types/p3/) | ~ $25.70 | ~ $7.71 |
| 8xV100 \(32 GB\) | [p3dn.24xlarge](https://aws.amazon.com/ec2/instance-types/p3/) | ~ $32.77 | ~ $11.11 |

## Machine specs

If you're curious about the machine specs, see below.

### P2 instance types

![](/images/platform/p2-instance-types.png)

### P3 instance types

![](/images/platform/p3-instance-types.png)

### G4 instance types

![](/images/platform/g4-instance-types.png)

### G3 instance types

![](/images/platform/g3-instance-types.png)

### T2 instance types

![](/images/platform/t2-instance-types.png)

Please note: Costs seen in the various screens in product are an estimation
