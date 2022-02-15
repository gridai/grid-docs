# Troubleshooting

## Kubernetes API Authentication Errors
AWS STS regional endpoints have to be enabled in the target region. Go to https://console.aws.amazon.com/iam/home#/account_settings and verify the regional endpoint is activated. In most cases your region already has AWS STS regional endpoint enabled -> https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html

!!! note
    Skipping this step will cause difficult to debug issues. The kubelet will be unable to authenticate against the kubernetes API server, and nothing will work.
