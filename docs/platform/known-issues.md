---
description: known issue in the Grid Platform
---

# Known Issues
#### Last Updated: April 1, 2022

### [BYOC](https://docs.grid.ai/platform/custom-cloud-credentials/byoc)
* Creating runs with the same name across two cluster is currenly supported, but prohibits certain operations against runs/experiments. 

### [Artifacts](https://docs.grid.ai/features/runs/artifacts)
* Artifacts don't sync for fast experiments: We have detected a race condition with short-running experiments, which may cause artifacts not to be properly synced. We recommend ensuring your experiments last at least a minute (to be safe). You can add sleep if needed as a workaround. 

* Canceling download of Artifacts: When downloading the artifacts, Ctrl-C does not cancel the download. As a workaround, use Ctrl-Z followed by `kill -9 $(jobs -p)`.

* Artifacts are not saved in a subdirectory: Grid artifacts are not saved in a subdirectory for run name and experiment name. This will overwrite files if two experiments have artifacts with the same file name. Workaround would be to put the artifacts in separate folders before downloading artifacts again.

### [Collaboration](https://docs.grid.ai/platform/collaboration)
* Downloading artifacts and/or viewing logs from a teammate's experiments is not supported from the CLI. Please use the UI as a workaround.

### [Datastore](https://docs.grid.ai/features/datastores)
* grid datastore [create](https://docs.grid.ai/features/datastores/create) ./cifar10
When you are creating the datastore and if some of file in the datastore directory are symlink it will not work. You can create hardlink to those file and create a datastore. 

### [Runs](https://docs.grid.ai/features/runs)
* For runs with CPU specify --cpu flag: When you run an experiment on CPU instance type, you need to specify the no --cpu flag in the run command or the run will use only 1 cpu. The cpu no should be 1 less cpu than maximum CPUs on the instance. 

* Folder size for [--localdir](https://docs.grid.ai/features/runs/localdir): When using the `--localdir` option the folder sizes are recommended to stay under 50MB

### [Session](https://docs.grid.ai/features/sessions)
* Cloning a Github repo with SSH is currenlty not supported. Insead, use Github's HTTPS clone method. 

### [Grid Ignore](https://docs.grid.ai/features/runs)
* Gridignore currently fails when there are two entries that map to the same directory.
```
For example:
Helloworld
Helloworld/src
```
