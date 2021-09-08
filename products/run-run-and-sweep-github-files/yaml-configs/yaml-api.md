# Using YAML

In addition to CLI parameters, Grid supports the use of YML files so you don't have to pass in many parameters in all occasions. If you don't change Run parameters often, we suggest you create a Grid config file and use that instead.

## Grid Spec Overview

The following YML file contains a commented version of every YML key. You need to provide these keys when writing a config file and change the properties to what you need.

{% hint style="danger" %}
Make sure to place your cloud credential ID in the `credentials` field, replacing the **XXXXXX** placeholder.
{% endhint %}

```text
# Main compute configuration.
compute:

  # Add cloud configuration here.
  provider:

    credentials: XXXXXX           # Cloud key ID
    region: us-east-1             # Cloud region
    vendor: aws                   # Vendor, only aws

  # Training configuration.
  train:

    cpus: 1                       # Number of CPUs
    gpus: 0                       # Number of GPUs
    instance: t2.xlarge           # AWS instance type
    memory: null                  # RAM memory
    nodes: 0                      # Nodes to start with
    scale_down_seconds: 1800      # Second in between every scaling down evaluation
    datastore_name: null          # Datastore name to use 
    datastore_version: null       # Datastore version number
    datastore_mount_dir: null     # Where to mount the datastore
    use_spot: false               # If we should use spot instances
    framework: "lightning"        # Which framework to use 

    # Pass in environment variables
    environment:                
      MY_ENVIRONMENT_VARIABLE: "example"

# Add your script settings here 
hyper_params:
  settings:
    strategy: random_search     # either random_search or grid_search
    trials: 2                   # only used in random_search
  params:
    learning_rate: uniform(0.001, 0.008, 20)
    gamma: 0.234
```

{% hint style="info" %}
Flags in grid YML files have a 1-to-1 mapping with `grid run` flags
{% endhint %}

In addition to the parameters above, you can also run arbitrary commands on different stages of you training operation.

## Creating Runs With a Config File

You can create a Run with a config file instead of passing CLI arguments. For example:

```text
grid run --config my_config.yml script.py
```

