# Bring Your Own Cluster (BYOC) Troubleshooting

## Deploying BYOC

### Kubernetes API Authentication Errors
AWS STS regional endpoints have to be enabled in the target region. Go to https://console.aws.amazon.com/iam/home#/account_settings and verify the regional endpoint is activated. In most cases your region already has AWS STS regional endpoint enabled -> https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html

!!! note
    Skipping this step will cause difficult to debug issues. The kubelet will be unable to authenticate against the kubernetes API server, and nothing will work.

## Deploying Workloads 

### Stuck in Pending State
There are usually three scenarios for why a session or run will be stuck in a pending state: awaiting AWS provisioning, one time start-up process **(sessions only)**, or the instance type is not available in the availability zones your BYOC cluster has access to. We will cover each of the three scenarios in detail here.

#### Sessions One Time Startup Process

When ever a BYOC is deployed there is a one time startup process it must go through before it can deploy sessions. Regardless of the instance type selected this process can take up to 30 minutes. Once completed your BYOC will never have to undergo the startup process again before deploying sessions

#### Awaiting AWS Provisioning

BYOC will request instances from AWS. Once the isntances have been requested you will have to wait for AWS to grant access to the resources. In Customer-managed BYOC mode you can easily affecct the provisioning time by overprovisioning the instance types of interest. This will effectiviley put the instances on standby, thus increasing costs. However, by overprovisioning instances you will not have to wait for AWS to provision the instances for you as they are requested during BYOC creation.

#### Requested Instances not Wihtin Your Availability Zones

The instances requested are AWS instances and thus you will be limited to all AWS instance provisioning limitations. One such limitation is that you will not be able to get instances that are not within your availability zones. There are two ways around this assuming the instances are available within the deployed region:

1. Run `grid edit cluster <cluster name>` and update the "xMultiAzCount" field
2. If using **Customer-managed BYOC mode** increase the "multi_az_count" variable in <your.tfvars>

