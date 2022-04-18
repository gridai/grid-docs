---
title: Basic Run Creation
sidebar_label: Basic Run Creation
---
:::note
The following examples assume you have already installed and setup Grid. If you haven't already please visit the [Getting Started](../../../../getting-started/getting-started-with-grid.md) page.
Also, if you encounter issues please check the [FAQ](../../3_faq.md). We periodically update this page with user questions.
:::

# How to Create Runs
Runs are highly customizable "serverless" compute instances. Here we will cover all the methods made available to customize Runs for common use cases. The examples below cover the following:
1. [Creating "vanilla" Runs](https://docs.grid.ai/features/runs/Creating%20Runs/Basic%20Runs/basic-runs#creating-vanilla-runs)
2. [Creating Runs with script dependencies](https://docs.grid.ai/features/runs/Creating%20Runs/Basic%20Runs/basic-runs#creating-runs-with-script-dependencies)  
  3.1 Handling requirements  
  3.2 Runs with specified requirements.txt  
  3.3 Runs with specified environment.yml
3. [Attaching Datastores to Runs](https://docs.grid.ai/features/runs/Creating%20Runs/Basic%20Runs/basic-runs#attaching-datastores-to-runs)


## Creating Vanilla Runs
A "vanilla" Run is a Run that runs a simple script, such as the classic "hello world" example. The vanialla run in the example below is taken from the [grid-tutorials repo](https://github.com/PyTorchLightning/grid-tutorials/tree/main/features-intro/runs).

First, clone the repo, navigate to the `features-intro/runs` directory, and create a simple run using the `hello.py` script.

```text
git clone https://github.com/PyTorchLightning/grid-tutorials.git
cd features-intro/runs
grid run --name hello hello.py
```

The above code is passing a script named `hello.py` to the run. The script will print out 'hello_world'. 

For instructions on how to view run and experiment logs, check out the
next section [Viewing logs produced by Runs](https://docs.grid.ai/features/runs/Analyzing%20Runs/viewing-logs).

## Creating Runs with Script Dependencies
If you've taken a peak at the grid-tutorials repo, you may have noticed three things:
1. It has a requirements.txt in the root directory
2. There is a directory called `pip` 
3. There is a directory called `conda`

In sections below, you'll see why these three points are important, but first let's explore how runs handle requirements.

### Handling Requirements
Anytime you submit a Grid run, we attempt to resolve as many dependencies as we can automatically for you. However, we recommend that your projects have a `requirements.txt` file in the root.

:::note
At this time, nested requirements are not supported.
:::

![](/images/runs/requirements.png)

When creating a run, you can explicitly specify a requirements file using the `--dependency_file` property. This flag tells Grid which file should be used for package installation in the Run. Supported requirements files are `requirements.txt` and `environment.yml`. This is especially useful when your directory isn't structured in such a way that the requirements file resides at the root of the project. In such cases, you can use the below examples for specifying which requirements.txt or environment.yml file should be used by your run. 

### Runs with Specified requirements.txt

```text
git clone https://github.com/PyTorchLightning/grid-tutorials.git
cd features-intro/runs
grid run --name specified-requirements-pip --dependency_file ./pip/requirements.txt hello.py
```

### Runs with Specified environment.yml

Specifying an environment.yml file is the only way to get Runs to use the Conda package manager without using a config file. Because `conda export` will output dependencies specfiically for your operating system, this can cause issues when running on a non-Linux machine. In such cases we recommend using
`conda env export --from-history` as mentioned in the [official docoumentation](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#exporting-an-environment-file-across-platforms).

```text
git clone https://github.com/PyTorchLightning/grid-tutorials.git
cd features-intro/runs
grid run --name specified-requirements-conda --dependency_file ./conda/environemnt.yml hello.py
```
### Viewing Logs
Explore the build logs to compare the logs of this Run to that of the vanilla Run we created in the example above. 
For instructions on how to view the logs check out [viewing logs produced by Runs](https://docs.grid.ai/features/runs/Analyzing%20Runs/viewing-logs).

## Attaching Datastores to Runs
When working with large datasets, it may be faster and easier to store your data in a [Datastore](../../../datastores/1_README.md). Datastores are high-performance, low-latency, versioned, and scalable datasets which can be instantly mounted to any Session or Run.

:::note
By default, Datastores are mounted at /datastores on a Session or Run.
A Satastore path has 3 parts:

```bash
/datastores/[name]/[version]
```

If you've never created a Datastore before, you can follow this example from the [Getting Started with Grid](../../../../getting-started/getting-started-with-grid.md) tutorial to create a Datastore from the popular [cifar dataset](https://www.cs.toronto.edu/~kriz/cifar.html). 

```text
# download
curl https://pl-flash-data.s3.amazonaws.com/cifar5.zip -o cifar5.zip
# unzip
unzip cifar5.zip
grid datastore create cifar5/ --name cifar5
```

Once the datastore has been successfully created, you can mount it to a Run using the `--datastore_name` and `--datastore_version` properties. 
```text
git clone https://github.com/PyTorchLightning/grid-tutorials.git
cd features-intro/runs
grid run --name attaching-datastore --datastore_name cifar5 --datastore_version 1 datastore.py --data_dir /datastores/cifar5/1
```

The above code passes a script named `datastore.py` to the Run. This script prints the contents of the Datastores root directory. You should see the following output in your stdout logs.

```text
['test', 'train']
```


# Next Steps
To learn more about Runs, please check out the following tutorials:
1. [Primer on Grid Sweep Syntax](https://docs.grid.ai/features/runs/Creating%20Runs/Basic%20Runs/sweep-syntax)
2. [Analyzing Runs](https://docs.grid.ai/features/runs/Analyzing%20Runs/README)
3. [Advanced Run Creation](https://docs.grid.ai/features/runs/Creating%20Runs/Adv%20Runs/README)
