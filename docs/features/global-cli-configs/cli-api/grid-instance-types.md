---
description: Shows configured instances for a given cluster.
---

# grid instance-types

When using different clusters we want to know which instance types are available or user in a given cluster. 

```text
$ grid instance-types --cluster prod-2
┏━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━┳━━━━━┳━━━━━━━━━━┓
┃ Name          ┃ On-demand Cost ┃ Spot Cost ┃ CPU ┃ GPU ┃   Memory ┃
┡━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━╇━━━━━╇━━━━━━━━━━┩
│ g2.8xlarge    │            2.6 │      0.78 │  32 │   4 │   60 GiB │
│ g3.16xlarge   │           4.56 │    1.4068 │  64 │   4 │  488 GiB │
│ g3.4xlarge    │           1.14 │     0.342 │  16 │   1 │  122 GiB │
│ g3.8xlarge    │           2.28 │    0.7387 │  32 │   2 │  244 GiB │
│ g3s.xlarge    │           0.75 │     0.225 │   4 │   1 │ 30.5 GiB │
│ g4dn.12xlarge │          3.912 │    1.9206 │  48 │   4 │  192 GiB │
│ g4dn.16xlarge │          4.352 │    1.3056 │  64 │   1 │  256 GiB │
│ g4dn.2xlarge  │          0.752 │    0.2256 │   8 │   1 │   32 GiB │
│ g4dn.4xlarge  │          1.204 │    0.3612 │  16 │   1 │   64 GiB │
│ g4dn.8xlarge  │          2.176 │    0.8152 │  32 │   1 │  128 GiB │
│ g4dn.metal    │          7.824 │     2.415 │  96 │   8 │  384 GiB │
│ g4dn.xlarge   │          0.526 │    0.1578 │   4 │   1 │   16 GiB │
│ p2.16xlarge   │           14.4 │      4.32 │  64 │  16 │  732 GiB │
│ p2.8xlarge    │            7.2 │      2.16 │  32 │   8 │  488 GiB │
│ p2.xlarge     │            0.9 │      0.27 │   4 │   1 │   61 GiB │
│ p3.16xlarge   │          24.48 │   17.4947 │  64 │   8 │  488 GiB │
│ p3.2xlarge    │           3.06 │     0.918 │   8 │   1 │   61 GiB │
│ p3.8xlarge    │          12.24 │     3.672 │  32 │   4 │  244 GiB │
│ p3dn.24xlarge │         31.212 │   10.2222 │  96 │   8 │  768 GiB │
│ t2.large      │         0.0928 │    0.0322 │   2 │   0 │    8 GiB │
│ t2.medium     │         0.0464 │    0.0139 │   2 │   0 │    4 GiB │
│ t2.xlarge     │         0.1856 │    0.0557 │   4 │   0 │   16 GiB │
│ t2.2xlarge    │         0.3712 │    0.1114 │   8 │   0 │   32 GiB │
│ t3.large      │         0.0832 │    0.0265 │   2 │   0 │    8 GiB │
│ t3.medium     │         0.0416 │    0.0125 │   2 │   0 │    4 GiB │
│ t3.xlarge     │         0.1664 │    0.0569 │   4 │   0 │   16 GiB │
│ t3.2xlarge    │         0.3328 │    0.1059 │   8 │   0 │   32 GiB │
└───────────────┴────────────────┴───────────┴─────┴─────┴──────────┘
```

## Command Reference

### `--cluster`

Cluster ID for the cluster you want to see instance types for. You can find the cluster ID with `grid clusters` . 

