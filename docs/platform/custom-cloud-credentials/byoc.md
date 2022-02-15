# Bring Your Own Cloud (BYOC) Options

!!! note

    To request access to this feature send an email to [support@grid.ai](mailto:support@grid.ai) with the subject "Request Access to BYOC Feature".
    
Grid creates clusters inside your own cloud account allowing you to keep complete control of the resources that you need. We offer two options for BYOC: Grid-managed BYOC Infrastructure mode and Customer-managed-Infrastructure mode.
1. Grid-managed BYOC Infrastructure Mode - Grid manages and provisions AWS infrastructure on your behalf in a fully automated fashion. To achieve this we require more permission (including `iam:FullAccess`) over customer-managed BYOC infrastructure mode
2. Customer-managed BYOC Infrastructure Mode - You manage and provision your AWS infrastructure using our terraform module, which you can audit and run on your infrastructure. This version requires Grid to have minimal permissions to your AWS account (only access to created EKS cluster & S3 bucket) 
