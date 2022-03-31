---
title: Script Dependencies
sidebar_label: Script Dependencies
---

# Script dependencies

## Handling Requirements

Anytime you run a project with Grid, we attempt to resolve as many dependencies as we can automatically for you. At this time nested requirements are not supported.

However, we recommend that your projects have a `requirements.txt` file in the root.

![](/images/runs/requirements.png)

### Specifying a Dependency Location

Sometimes you may want to keep different dependency in your project. For instance, you may want to place `requirements.txt` in a nested directory and have Grid use that to setup your environment.

You can specify which dependency file you want to use to setup your environment using the `--dependency_file` flag. Example:

```text
grid run --dependency_file ./path/to/requirements.txt model.py
```

If you create an environment.yml file from running conda export it is important to do this on a Linux machine. The dependencies outputted by this command will be compatible with your operating system. This will be problematic if done on a Windows or Mac, as we use Linux machines for runs. In these cases we recommend using
`conda env export --from-history` as mentioned in the [official docoumentation](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#exporting-an-environment-file-across-platforms)

You can also use a [YAML config](yaml-configs) file.
