import Note from "@site/src/components/Note";

---
sidebar_position: 2.6
title: FAQ
sidebar_label: FAQ
---

# Troubleshooting Bring Your Own Cluster (BYOC)

## Deploying BYOC

### Kubernetes API Authentication Errors
To ensure proper authentication of the Kubernetes API it is necessary to have AWS STS regional endpoints enabled in the target region. See the official aws [documentation](https://console.aws.amazon.com/iam/home#/account_settings) to verify that the regional endpoint is activated. In most cases your region already has AWS STS regional endpoint enabled. See the official [Managing AWS STS in an AWS Region documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) for more details.

<note>
    Skipping this step will cause issues which are difficult to debug. The kubelet will be unable to authenticate against the Kubernetes API server, breaking core functionality.
</note>

## Deploying Workloads

### Stuck in Pending State
There are usually three scenarios in which a Session or Run will be stuck in a pending state:
1. Awaiting AWS provisioning
2. One time start-up process **(Sessions only)**
3. The instance type is not available in the availability zones your BYOC cluster has access to.

We will cover each of the three scenarios in detail below.

#### Awaiting AWS Provisioning

BYOC will request instances from AWS. Once the instances have been requested you will have to wait for AWS to provison the resources. In Customer-managed BYOC mode you can easily affecct the provisioning time by overprovisioning the instance types of interest. This will effectiviley put the instances on standby, thus increasing costs. However, by overprovisioning instances you will not have to wait for AWS to provision the instances for you as they are requested during BYOC creation.

#### Sessions One Time Startup Process

When ever a BYOC is deployed there is a one time startup process it must go through before it can deploy sessions. Regardless of the instance type selected this process can take up to 30 minutes. Once completed your BYOC will never have to undergo the startup process again before deploying sessions.

#### Requested Instances not Within Your Availability Zones

The instances requested are AWS instances and thus you will be limited to all AWS instance provisioning limitations. One such limitation is that you will not be able to get instances that are not within your availability zones. There are two ways around this assuming the instances are available within the deployed region:

1. Run `grid edit cluster [cluster name]` and update the "xMultiAzCount" field
2. If using **Customer-managed BYOC mode** increase the "multi_az_count" variable in `your.tfvars`
