---
title: Bring Your Own Cloud (BYOC) Overview
sidebar_label: Bring Your Own Cloud (BYOC) Overview
---

# Bring Your Own Cloud (BYOC) Overview

:::note
This feature is part of our Teams plan. If you're interested in learning more, please fill out this [form](https://www.grid.ai/upgrade/).
:::

Grid creates clusters inside your own cloud account allowing you to keep complete control of the resources that you need. We offer two options for BYOC: Grid-managed BYOC Infrastructure mode and Customer-managed-Infrastructure mode.
1. Grid-managed BYOC Infrastructure Mode - Grid manages and provisions AWS infrastructure on your behalf in a fully automated fashion. To achieve this we require more permission (including `iam:FullAccess`) over customer-managed BYOC infrastructure mode.
2. Customer-managed BYOC Infrastructure Mode - You manage and provision your AWS infrastructure using our terraform module, which you can audit and run on your infrastructure. This version requires Grid to have minimal permissions to your AWS account (only access to created EKS cluster & S3 bucket).

# Next Steps
1. [Prerequisite installation](https://docs.grid.ai/platform/custom-cloud-credentials/prereq-installation)
2. [Grid managed byoc](https://docs.grid.ai/platform/custom-cloud-credentials/adding-custom-cloud-credentials)
3. [Customer managed byoc](https://docs.grid.ai/platform/custom-cloud-credentials/customer-managed-byoc)
4. [Setting cluster context](https://docs.grid.ai/platform/custom-cloud-credentials/grid-cluster-context)
5. [Troubleshooting](https://docs.grid.ai/platform/custom-cloud-credentials/troubleshooting)
