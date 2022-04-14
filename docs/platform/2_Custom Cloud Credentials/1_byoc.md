---
title: Bring Your Own Cloud (BYOC) Overview
sidebar_label: Bring Your Own Cloud (BYOC) Overview
---

# Bring Your Own Cloud (BYOC) Overview

**BYOC = Bring Your Own Cloud**

:::note
This feature is part of our Teams plan. If you're interested in learning more, please fill out this [form](https://www.grid.ai/upgrade/).
:::

Grid can create clusters inside of your own cloud account, allowing you to keep complete control over the resources that you need. We offer two modes for cluster creation: Grid-Managed Infrastructure mode and Self-Managed Infrastructure mode.
1. Grid-managed Infrastructure Mode - Grid manages and provisions AWS infrastructure on your behalf in a fully automated fashion. To achieve this, Grid requires more permissions (including `iam:FullAccess`) than the Self-Managed infrastructure mode.
2. Self-Managed Infrastructure Mode - You manage and provision your AWS infrastructure using our terraform module, which you can audit and run on your infrastructure. This version requires Grid to have minimal permissions to your AWS account (only access to created EKS cluster & S3 bucket).

# Next Steps
1. [Prerequisite installation](./prereq-installation)
2. [Grid-Managed BYOC](./adding-custom-cloud-credentials)
3. [Self-Managed BYOC](./self-managed-byoc)
4. [Setting Cluster Context](./grid-cluster-context)
5. [Troubleshooting BYOC](./faq)
