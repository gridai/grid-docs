---
title: BYOC Prereqs
sidebar_label: BYOC Prereqs
---

[Grid Managed BYOC](./adding-custom-cloud-credentials.md)  
[Customer Managed BYOC](./customer-managed-byoc.md)

# Prerequisites

To install either the Grid-managed BYOC or Customer-managed BYOC modes the following tools are required:

* [git](https://git-scm.com/)
* [jq](https://stedolan.github.io/jq/)
* [terraform](https://www.terraform.io/)
* [AWS CLI](https://aws.amazon.com/cli/)

## Installation Steps

### M1 OSX

[brew](https://brew.sh/), [pip3](https://packaging.python.org/guides/tool-recommendations/), and [go](https://go.dev/doc/install) are used in this example.

```bash
brew install git
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
brew update
brew upgrade hashicorp/tap/terraform
brew install jq
pip3 install awscli --upgrade --user
export GOPATH=$(go env GOPATH)
mkdir -p $GOPATH/src/github.com/terraform-providers
cd $GOPATH/src/github.com/terraform-providers
git clone git@github.com:hashicorp/terraform-provider-null.git
cd terraform-providers-null
go vet
make fmt
make build
mkdir -p $HOME/.terraform.d/plugins/registry.terraform.io/hashicorp/null/2.1.2/darwin_arm64
cp $HOME/go/bin/terraform-provider-null $HOME/.terraform.d/plugins/registry.terraform.io/hashicorp/null/2.1.2/darwin_arm64/terraform-provider-null_2.1.2
```

### Non-M1 OSX

[brew](https://brew.sh/), [pip3](https://packaging.python.org/guides/tool-recommendations/), and [go](https://go.dev/doc/install) are used in this example.

```bash
brew install git
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
brew update
brew upgrade hashicorp/tap/terraform
brew install jq
pip3 install awscli --upgrade --user
```

### Linux \(Debian/Ubuntu\)

```bash
sudo apt-get update
# install the tools
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install terraform
sudo apt-get install git
sudo apt-get install jq
sudo apt-get install awscli
```

# Next Steps
See:
1. [Grid Managed BYOC](./adding-custom-cloud-credentials.md) - for Grid Managed BYOC mode deployment instructions
2. [Customer Managed BYOC](./customer-managed-byoc.md) - for Customer Managed BYOC mode deployment instructions
