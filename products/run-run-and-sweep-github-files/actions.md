# Actions

Grid Actions give you the flexibility of adding steps to your training workflow without having to change your training script.

Example uses of actions:

* Installing libraries like Apex
* Downloading data
* Processing something prior to running a training script

## Available Actions

### on\_image\_build

These are executed as your project image is built. We cache these commands on every git SHA. This is useful for installing dependencies and other system setup tasks.

```yaml
compute:
  train:

    actions:
      on_image_build:
        - apt-get install wget -y
        - pip install tqdm
```

{% hint style="info" %}
Commands automatically run as `sudo`
{% endhint %}

### on\_before\_training\_start

Arbitrary commands that run just before your training process starts. This is useful for downloading and preparing data, etc.

```yaml
compute:
  train:

    actions:
      on_before_training_start:
        - bash download_dataset.sh
```

### on\_after\_training\_end

Runs after your script stops. This is useful for post-processing data, sending alerts and notifications to your systems, etc.

```yaml
compute:
  train:

    actions:
      on_after_training_end:
        - apt-get install curl -y
        - curl -X GET http://webhook.com?success=true
```

## Configuring Actions

You can configure Grid Actions by using a Grid config file (see details on [Grid YML)](https://app.gitbook.com/s/-M7yAKKHGMbxFDJpu-nX/products/run-run-and-sweep-github-files/yaml-configs/).

The Grid YAML spec supports three actions:

* `on_image_build` commands passed to the image builder which are interpreted as `RUN` commands in a [Dockerfile](https://docs.docker.com/engine/reference/builder/).
* `on_before_training_start` which allows users to specify commands that need to be executed sequentially before the main experiment process starts.
* `on_after_training_end` same as above, but executed after the main process ends.&#x20;

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
      on_image_build:
        - apt-get install wget -y
        - pip install tqdm

      on_before_training_start:
        - bash download_dataset.sh

      on_after_training_end:
        - apt-get install curl -y
        - curl -X GET http://webhook.com?success=true
```

As you can see, you can pass one command per line. You can pass as many commands as you'd like.

### Environment variable substitution

Grid allows environment variable substitution for `on_before_training_start` and `on_before_training_start` actions. All declared environment variables for the run are available in the substitution (as well as some Grid predefined variables). Example config:

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
      on_image_build:
        - apt-get update
        - apt-get install curl -y
      on_before_training_start:
        - bash before.sh

      on_after_training_end:        
        - |
            curl -X POST -d '{"name": "${GRID_EXPERIMENT_ID}", "instance_type": "${GRID_INSTANCE_TYPE}", "status": "status", "step": "after"}' ${WEBHOOK_URL}
```

## Default environment variables

Grid sets several environment variables by default for all experiments:

* **GRID\_EXPERIMENT\_ID** - experiment's ID
* **GRID\_EXPERIMENT\_NAME** - experiment name
* **GRID\_USER\_ID** - ID of the user who created the experiment
* **GRID\_CLUSTER\_ID** - ID of the cluster where experiment is running
* **GRID\_INSTANCE\_TYPE** - machine type (_t2.medium,_ _g4dn.xlarge,_ etc.)

## String operations

Grid provides partial emulation for bash string operations. This can be used to manipulate string values prior to substitution.

* Example variable substitution with substring:

```yaml
on_after_training_end:        
- |
    echo ${GRID_EXPERIMENT_ID:0:4} # Getting first 4 symbols
```

Grid emulates the below string operations:

```
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

