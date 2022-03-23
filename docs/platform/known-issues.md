---
description: known issue in the Grid Platform
---

# Known Issues

## Known Issues

### BYOC
Currently users on Grid Cloud and BYOC are able to create runs that resolve to the same name. This prohibits certain operations against runs/experiments. 

### Artifacts
#### Artifacts don't sync for fast experiments​
We've detected a race condition with short-running experiments, which may cause artifacts not to be properly synced. We're working on a long-term solution for this and will fix it in the coming days. We recommend ensuring your experiments last at least a minute (to be safe), and sleep if needed as a workaround. 

#### Canceling download of Artifacts
grid artifacts runname

When downloading the artifacts, Ctrl-C does not cancel the download. You can use Ctrl-Z followed  by kill -9 $(jobs -p) as a workaround ??

### Artifacts are not saved in a subdirectory
Grid artifacts are not saved in a subdirectory for run name and experiment name for the recent prod. This will overwrite files if two experiments have artifacts with the same file name. Workaround would be to put the artifacts in the folder before downloading artifacts again.

### Collaboration
Downloading artifacts and viewing logs from a teammate's experiments is not supported from the CLI. Please use the UI as a workaround.

### Datastore
grid datastore create ./cifar10
Datastore upload for hard link work, but not symlink in datastore - DOC-212

### Run

For runs with CPU/GPU specify - -cpu/- -gpu flag
When you run an experiment on CPU instance type. Use --cpu flag with 1 less cpu then maximum cpu’s on the instance otherwise, the run uses only 1 cpu for the experiment. SUP15
Folder size for --localdir 
When using the --localdir option the folder sizes are recommended to stay under 50MB DOC-311

### Session
You can clone any Github repositories into a Session using HTTPS cloning method (SSH method of cloning will not work).

### Grid Ignore
Gridignore currently fails when there are two entries that map to the same directory.

For example:
Helloworld
Helloworld/src

