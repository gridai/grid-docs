:::note
The examples assume you have already installed and setup Grid. If you haven't already please visit the [Getting Started](https://docs.grid.ai/getting-started) page
:::

# How to Create Runs
Runs are highly customizable "serverless" compute. Here we will cover all the methods made available to customize Runs for your usecases. The examples cover the following:
1. [Creating vanilla Runs](https://docs.grid.ai/features/runs#creating-vanilla-runs)
2. [Attaching Datastores to Runs](https://docs.grid.ai/features/runs#attaching-datastores-to-runs)
3. [Creating Runs with script dependencies](https://docs.grid.ai/features/runs#creating-runs-with-script-dependencies)  
  3.1 Handeling requirements
  3.2 Runs with specified requirements.txt  
  3.3 Runs with specified environment.yml

The examples assume you have already installed and setup Grid. If you haven't already please visit the [Getting Started](https://docs.grid.ai/getting-started) page
## Creating Vanilla Runs
A "vanilla" Run is simply a Run that only runs a script. This hello_world [repo](https://github.com/oojo12/hello_world/tree/main) will be used in the following example.

```text
git clone https://github.com/oojo12/hello_world.git
cd hello_world
grid run --name hello hello.py
```

The above code is passing a script named hello.py to the Run. The script will print out 'hello_world'. For instructions on how to view the logs check out the
next section [Viewing logs produced by Runs]().

## Attaching Datastores to Runs
There are many times when attaching a Datastore to a Run will be desireable. For instance, if you have large scale data it may be easier to house that in a datastore than on your local machine. 
In such situations Datastores may resolve blockers to your workflow. Now let's dive right in we will be using a different repository called grid-tutorials for this and the 
remaining examples. 

If you haven't already followed the Getting Started page you will need to create a Datastore with the below commands first.
```text
# download
curl https://pl-flash-data.s3.amazonaws.com/cifar5.zip -o cifar5.zip
# unzip
unzip cifar5.zip
grid datastore create cifar5/ --name cifar5
```

Now that is done we can test attaching a Datastore to a Run
```text
git clone https://github.com/oojo12/grid-tutorials.git
cd grid-tutorials
grid run --name attaching-datastore --datastore_name cifar5 --datastore_version 1 datastore.py --data_dir /datastore/cifar5/1
```

The above code is passing a script named datastore.py to the Run. The script will print the datastore directory contents. It should print the directory structure of the Datastore.

## Creating Runs with Script Dependencies
If you peaked at the grid-tutorials repo you may have noticed three things:
1. It has a requirements.txt in the root directory
2. There is a pip folder
3. There is a conda folder

We will touch on why those three are the case in this section of the tutorial. But first let's speak about how Runs handle requirements.

### Handling Requirements
Anytime you run a project with Grid, we attempt to resolve as many dependencies as we can automatically for you. At this time nested requirements are not supported.

However, we recommend that your projects have a `requirements.txt` file in the root.

![](/images/runs/requirements.png)

### Runs with Specified requirements.txt
Runs allow you to specify the requirements.txt you want to use for package installation. This especially useful when your directory isn't ordered in such a way that the
requirements.txt resides at the root project level. In such cases you can use the below example as a template for specifying which requirements.txt file should be used
for package installation.

```text
git clone https://github.com/oojo12/grid-tutorials.git
cd grid-tutorials
grid run --name specified-requirements --dependency_file ./pip/requirements.txt hello.py
```

You will notice we did something different here than in prior examples. We used the `--dependency_file` flag. This flag tells Grid what file
should be used for package installation in the Run. See the build logs to see the difference between this and the Creating vanilla Runs example above.
For instructions on how to view the logs check out [viewing logs produced by Runs](https://docs.grid.ai/features/runs/analyzing-runs#viewing-logs).

### Runs with Specified environment.yml
Runs allow you to specify the environment.yml you want to use for package installation. This is the only way to get Runs to use the Conda package manager without using a config file.
Because `conda export` will output dependencies specfiically for your operating system, this can cause issues when run on a non-Linux machine. In such cases we recommend using
`conda env export --from-history` as mentioned in the [official docoumentation](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#exporting-an-environment-file-across-platforms).
In such cases you can use the below example as a template for specifying which requirements.txt file should be used
for package installation.

```text
git clone https://github.com/oojo12/grid-tutorials.git
cd grid-tutorials
grid run --name specified-requirements --dependency_file ./conda/environemnt.yml hello.py
```

See the build logs to see the difference between this and the Creating vanilla Runs example above.
For instructions on how to view the logs check out the next section [viewing logs produced by Runs](https://docs.grid.ai/features/runs/analyzing-runs#viewing-logs).

# Next Steps
Please checkout the following tutorials:
1. [Primer on Grid Sweep Syntax](https://docs.grid.ai/features/runs/sweep-syntax)
2. [Analyzing Runs](https://docs.grid.ai/features/runs/analyzing-runs)
3. [Advanced Run Creation](https://docs.grid.ai/features/runs/adv-creating-runs)
