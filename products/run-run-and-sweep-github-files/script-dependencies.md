# Script dependencies

## Handling Requirements

Anytime you run a project with Grid, we attempt to resolve as many dependencies as we can automatically for you.

However, we recommend that your projects have a `requirements.txt` file in the root.&#x20;

![](<../../.gitbook/assets/image (114).png>)

### Specifying a Dependency Location

Sometimes you may want to keep different dependency in your project. For instance, you may want to place `requirements.txt` in a nested directory and have Grid use that to setup your environment.

You can specify which dependency file you want to use to setup your environment using the `--dependency_file` flag. Example:

```
grid run --dependency_file ./path/to/requirements.txt model.py
```

You can also use a [YAML config](yaml-configs/) file.
