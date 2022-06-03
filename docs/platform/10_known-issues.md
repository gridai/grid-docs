---
title: Known Issues
sidebar_label: Known Issues
---


# Known Issues
#### Last Updated: April 1, 2022

### [BYOC](https://docs.grid.ai/platform/custom-cloud-credentials/byoc)
* Creating runs with the same name across two cluster is currenly supported, but prohibits certain operations against runs/experiments.

### [Collaboration](https://docs.grid.ai/platform/collaboration)
* Downloading artifacts from a teammate's experiments is not supported from the CLI. Please use the UI as a workaround.

### [Datastore](https://docs.grid.ai/features/datastores)
* When creating a Datastore, data directories that contain soft symlinks files will cause the Datastore upload to fail. To prevent this failure, update soft symlinks to hard links.


### [Runs](https://docs.grid.ai/features/runs)
* For runs with CPU specify --cpu flag: When you run an experiment on CPU instance type, you need to specify the no of --cpu flag in the run command or the run will use only 1 cpu. The cpu no should be 1 less cpu than maximum CPUs on the instance, since Grid uses 1 cpu for its processing.

* Folder size for [--localdir](https://docs.grid.ai/features/runs/localdir): When using the `--localdir` option the folder sizes are recommended to stay under 50MB

### [Session](https://docs.grid.ai/features/sessions)
* Cloning a Github repo with SSH is currenlty not supported. Insead, use Github's HTTPS clone method.
