# Using YAML

In addition to CLI parameters, Grid supports the use of YML files so you don't have to pass in many parameters in all occasions. If you don't change compute parameters often, we suggest you create a Grid config file and use that instead.

## Grid Spec Overview

The following YML file contains a commented version of every YML key. You need to provide these keys when writing a config file and change the properties to what you need.

:::note
Use either [cluster context](../../../platform/2_Custom%20Cloud%20Credentials/5_grid-cluster-context.md) or make sure to place your cluster ID in the `cluster` field, replacing the **XXXXXX** placeholder.
:::

<!-- ```text
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
    dependency_file_info:         
      package_manager: pip        # Either conda or pip
      path: null                  # Path to the reqs or conda env

    # Pass in environment variables
    environment:
      MY_ENVIRONMENT_VARIABLE: "example"
  
hyper_params:
  # your hyper params here
  params:
    # your params here
    --foo: 1
    -bar: 2
``` -->


Config can be used to specify arguments that will be used to run experiments. 
Apart from parametrization config allows to define custom `actions` executed in given moments of the experitment lifecycle, and pass environment variables.
You don't have to define more parameters than you actually want to override, missing ones from config we have the default CLI values.
To check the defaults please refer to the CLI docs [here](../../cli.md).


```text
# Main compute configuration. Defines parameters for `grid run` command. 
compute:

  # For BYOC users, we can specify directly which cluster to run experiments on.
  provider:
    cluster: prod-2                         # [str] --cluster

  # Train section defines the training environment each experiement eg. instance type, datastore access, custom actions.
  train:
    framework: lightning                    # [enum] --framework
    environment:
      MY_ENVIRONMENT_VARIABLE: "example"    # Pass in environment variables
    dependency_file_info:
      path: null                            # [str] --dependency_file
    instance: m5a.large                     # [enum] --instance_type
    use_spot: False                         # [str] --use_spot

# We should ideally remove those are we hope to depricate gpus/cpus
#    cpus: int 1                            # --cpus - cannot be more than available in the `instance`
#    gpus: int 0                            # --gpus - cannot be more than available in the `instance`
    storage_gb: 100                         # [int] --memory [should be greater than 100Gb]
    localdir: False                         # [bool] --localdir
    dockerfile: null                        # [str] --dockerfile
    auto_resume: bool                       # [bool] --auto_resume (flag)
    datastore_name: null                    # [str] --datastore_name
    datastore_version: null                 # [int] --datastore_version
    datastore_mount_dir: null               # [str] by default mounts to /datastores/{datastore_name}  --datastore_mount_dir
    actions:                                # Pass list of commands to be executed at given moment.
      on_build: null                        # List[str]
      on_build_start: null
      on_build_end: null
      on_experiment_end: null
      on_experiment_start: null
    scratch:
      size_gb: 100                          # [int] --scratch_size default 100 int
      mount_path: /tmp/scratch              # [str] --scratch_mount_path default

# This section defines the hyperparameters settings. 
# We currently have 3 strategies: grid_search, random_search and none.
# strategy_options are only for the random_search strategy.
hyper_params:
  settings:
    strategy: grid_search                   # [enum] One of `['grid_search', 'random_search', 'none']`
    strategy_options:                       # For 'random_search' we must at least define num_trials 
      num_trials: 1                         # [int] we must specify the num_trials (via CLI or config) if we use random_search strategy (--num_trials)
      seed: 0                               # [int] --seed
  
  # Additional script parameters appended as "{key} {value}"
  params: [dict[str, str]]                  # Dict of key: value entries appended to as script parameters
    --foo: 1                                # [str: str]
    -bar: something
```


## Creating Runs With a Config File

You can create a Run with a config file instead of passing CLI arguments. For example:

```text
grid run --config my_config.yml script.py
```
