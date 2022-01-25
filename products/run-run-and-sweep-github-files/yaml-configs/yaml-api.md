# Using YAML

In addition to CLI parameters, Grid supports the use of YML files so you don't have to pass in many parameters in all occasions. If you don't change compute parameters often, we suggest you create a Grid config file and use that instead.

## Grid Spec Overview

The following YML file contains a commented version of every YML key. You need to provide these keys when writing a config file and change the properties to what you need.

{% hint style="danger" %}
Use either [cluster context](../../global-cli-configs/cli-api/grid-cluster-context.md) or make sure to place your cluster ID in the `cluster` field, replacing the **XXXXXX** placeholder.
{% endhint %}

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

{% hint style="info" %}
Flags in grid YML files have a 1-to-1 mapping with `grid run` flags
{% endhint %}

In addition to the parameters above, you can also run arbitrary commands on different stages of you training operation.

## Creating Runs With a Config File

You can create a Run with a config file instead of passing CLI arguments. For example:

```text
grid run --config my_config.yml script.py
```

