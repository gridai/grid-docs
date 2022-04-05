---
title: Creating Runs from Config File
sidebar_label: Creating Runs from Config File
---

:::note
The examples assume you have already installed and setup Grid. If you haven't already please visit the [Getting Started](https://docs.grid.ai/getting-started) page.
Also, if you encounter issues please check the [FAQ](https://docs.grid.ai/features/runs/faq.md). We periodically update this with user questions.
:::
# Using YAML

In addition to CLI parameters, Grid supports the use of YML files so you don't have to pass in many parameters in all occasions. If you don't change compute parameters often, we suggest you create a Grid config file and use that instead.

## Grid Spec Overview

The following YML file contains a commented version of every YML key. You need to provide these keys when writing a config file and change the properties to what you need.

:::note
Use either [cluster context](../../../platform/custom-cloud-credentials/grid-cluster-context.md) or make sure to place your cluster ID in the `cluster` field, replacing the **XXXXXX** placeholder.
:::

```text
# Main compute configuration.
compute:

  # Add cloud configuration here.
  provider:

    cluster: XXXXXX           # Cluster ID

  # Training configuration.
  train:

    cpus: 1                       # Number of CPUs
    gpus: 0                       # Number of GPUs
    instance: t2.xlarge           # AWS instance type
    datastore_name: null          # Datastore name to use
    datastore_version: null       # Datastore version number
    datastore_mount_dir: null     # Where to mount the datastore
    use_spot: false               # If we should use spot instances
    framework: "lightning"        # Which framework to use

    # Pass in environment variables
    environment:                
      MY_ENVIRONMENT_VARIABLE: "example"
```

<!-- As an aside: We need to add e2e tests around the config file experience -->
:::note
Flags in grid YML files have a 1-to-1 mapping with `grid run` flags
:::

In addition to the parameters above, you can also run arbitrary commands on different stages of you training operation.

## Creating Runs With a Config File

You can create a Run with a config file instead of passing CLI arguments. For example:

```text
grid run --config my_config.yml script.py
```

## Config Files with Actions
Config files also allow the use of a special feature called Actions. Grid Actions give you the flexibility of adding steps to your training workflow without having to change your training script.

Example uses of actions:

* Installing libraries like Apex
* Downloading data
* Processing something
* ...

## Available Actions

### on\_build\_start

These are executed as your Run's image is built. We cache these commands on every git SHA. This is useful for installing dependencies and other system setup tasks.

```yaml
compute:
  train:

    actions:
      on_build_start:
        - apt-get install wget -y
        - pip install tqdm
```

### on\_build\_end

These are executed as at the end of building Run's image.

```yaml
compute:
  train:

    actions:
      on_build_end:
        - apt update
```

<Note> Commands automatically run as sudo </Note>

### on\_exeperiment\_start

Arbitrary commands that run just before your training process starts. This is useful for downloading and preparing data, etc.

```yaml
compute:
  train:

    actions:
      on_experiment_start:
        - bash download_dataset.sh
```

### on\_experiment\_end

Runs after your script stops. This is useful for post-processing data, sending alerts and notifications to your systems, etc.

```yaml
compute:
  train:

    actions:
      on_experiment_end:
        - apt-get install curl -y
        - curl -X GET http://webhook.com?success=true
```

## Configuring Actions

You can configure Grid Actions by using a Grid config file \(see details on [Grid YML\)](./17_yaml-configs/2_yaml-api.md).

Here's a full example of a Grid configuration using actions:

```yaml
compute:
  provider:
    credentials: cc-wv4l9
    region: us-east-1
    vendor: aws

  train:
    cpus: 1
    gpus: 0
    instance: t2.xlarge

    # Actions need to be passed as one command
    # per line.
    actions:
      on_build_start:
        - apt-get install wget -y
        - pip install tqdm

      on_experiment_start:
        - bash download_dataset.sh

      on_experiment_end:
        - apt-get install curl -y
        - curl -X GET http://webhook.com?success=true
```

As you can see, you can pass one command per line. You can pass as many commands as you'd like.

### Environment variable substitution

Grid allows environment variable substitution for `on_experiment_start` and `on_experiment_end` actions. All declared environment variables for the run are available in the substitution \(as well as some Grid predefined variables\). Example config:

```yaml
compute:

  train:
    cpus: 1
    gpus: 0
    instance: t2.medium
    framework: lightning

    environment:
      WEBHOOK_URL: https://hooks.example.com/grid

    # Actions need to be passed as one command
    # per line.
    actions:
      on_build_start:
        - apt-get update
        - apt-get install curl -y
      on_experiment_start:
        - bash before.sh

      on_experiment_end:
        - |
            curl -X POST -d '{"name": "${GRID_EXPERIMENT_ID}", "instance_type": "${GRID_INSTANCE_TYPE}", "status": "status", "step": "after"}' ${WEBHOOK_URL}

```

### Default environment variables

Grid sets several environment variables by default for all experiments:

* **GRID\_EXPERIMENT\_ID** - experiment's ID
* **GRID\_EXPERIMENT\_NAME** - experiment name
* **GRID\_USER\_ID** - ID of the user who created the experiment
* **GRID\_CLUSTER\_ID** - ID of the cluster where experiment is running
* **GRID\_INSTANCE\_TYPE** - machine type \(_t2.medium,_ _g4dn.xlarge,_ etc.\)

### String operations

Grid provides partial emulation for bash string operations. This can be used to manipulate string values prior to substitution.

* Example variable substitution with substring:

```yaml
on_experiment_end:
- |
    echo ${GRID_EXPERIMENT_ID:0:4} # Getting first 4 symbols

```

Grid emulates the below string operations:

```text
${parameter^}
${parameter^^}
${parameter,}
${parameter,,}
${parameter:position}
${parameter:position:length}
${parameter#substring}
${parameter##substring}
${parameter%substring}
${parameter%%substring}
${parameter/substring/replacement}
${parameter//substring/replacement}
${parameter/#substring/replacement}
${parameter/%substring/replacement}
${#parameter}
${parameter=default}
${parameter:=default}
${parameter:-default}
```
