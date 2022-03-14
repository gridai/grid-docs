---
description: What's new and improved in Grid.
---
import Note from "@site/src/components/Note";

# :partying_face: Releases
Upgrade your CLI with `pip install lightning-grid --upgrade`

:heart: Find us in our [Slack Community](http://gridai-community.slack.com) to say hi and/or to express your thoughts/questions.

---
## :wrench: March 10, 2022

**CLI version: 0.8.4**

:heavy_check_mark: Resolves an issue where using a relative path for the `dependency_file_info` property in a Run config was breaking. For example, this now works if you were operating from a subdirectory of a git repo: 
    ```# Dependency file specification
        dependency_file_info:
        package_manager: conda
        path: ./env/env-deepcdl-pytorch.yml ```

:heavy_check_mark: Support for specifying version of Julia image to use in Runs. We will support every patch release of julia from 1.6.1 up.

`grid run --framework julia` will use the latest Julia version available (currently 1.7.1)

`grid run --framework julia:X.Y.Z` will use Julia with the version X.Y.Z 

<note>At this time, this feature is available for CLI users only</note>

:heavy_check_mark: Runs will fail more quickly if there is an issue with image building.

:heavy_check_mark: Resolves issue with `--num_trials` parameter being ignored.

:heavy_check_mark: Logging improvements to silence noisy stacktraces.

:heavy_check_mark: 'pytorch' and 'torch' are now both equal and acceptable inputs to the framework option for `grid run` 

ex: `--framework pytorch` == `--framework torch`

---

## :wrench: March 1, 2022

**CLI version: 0.8.1**

Spring cleaning came early. This release features a lot of backend magic that improves overall stability and UX with Grid. We’re also excited to announce a dazzling set of enhancements to Datastores! **You’ll notice uploading to Datastores is now at least 5x faster!** 
More details and information on how to use the feature are below.  

### Datastore Enhancements
<note>Starting with this release, you **must** update your CLI to `v0.8.1` or later to use Datastores</note>

- Datastore upload speeds increased by 5x
- Improved stability during Datastore uploads (reduced chance of failure during upload)
- Disk space usage will no longer increase during Datastore upload
- If a Datastore gets interrupted during upload, the next time you create a Datastore, you will be prompted to resume the upload
- The `--source` parameter has been deprecated. It will no longer be supported in future releases. You can just use `grid datastore create [filename]` and the datastore will inherit the filename as its name
- Additional magical backend improvements that you can't see, but certainly will feel 

### Notable Fixes and Enhancements

- `grid run` help menu includes additional information about the  `--localdir` option
- The following actions have been added to the YAML config:
    - on_build_start
    - on_build_end
    - on_experiment_start
    - on_experiment_end
    (See the docs on [Actions](https://docs.grid.ai/features/runs/actions#available-actions) for more information)
- Newly created datastores with total size <1 MiB will report as 1 MiB total size
- Improvements to costs reporting for runs and experiments

---
## :warning: February 3, 2022

### **Artifacts don't sync for fast experiments**

We've detected a race condition with short-running experiments which may cause artifacts not to be properly synced. We're working on a long-term solution for this, and will be fixed in the coming days. As a workaround, we recommend ensuring your experiments last at least a minute (to be safe), and sleep if needed. **We are working on resolving this issue to be addressed in the next release.**

---
## :wrench:January 12, 2022

**CLI version: 0.7.3**
A maintenance release has been issued with the following :

* resolves an issue that was causing experiments to remain queued for 1 hour+
* fixes issue where Datastores and Runs couldn’t be viewed from the UI
* addresses an issue with Multinode Runs that were not running

### Cluster Contexts &#x20;

For users **B**ringing **Y**our **O**wn **C**loud, we've introduced the concept of cluster contexts. You can set the cluster context so that all your CLI actions (including creation of a resource such as Run or Session) are made against that cluster.

By default, the cluster context is set to the global cluster. You can change the context at anytime  by using the command: `grid user set-cluster-context` or by specifying the cluster name in `~/.grid/settings.json.`

Find out which cluster context is currently set by using the `grid user`command.

More information in the documentation on how to '[Run Workloads in Your New Cluster](https://docs.grid.ai/platform/custom-cloud-credentials/adding-custom-cloud-credentials#step-6-run-your-workloads-in-your-new-cluster)'.

---

## :partying_face: January 5, 2022

**CLI version: 0.7.1**

Hi! Welcome to 2022 :) Today we bring you a new Grid release with exciting new features, continued performance and stability improvements, and the beginnings of a very productive new year. As always use `pip install lightning-grid --upgrade` to update the CLI to the new version and hit us up in our Slack Community with any thoughts or questions.

### Auto-resume Experiments

Surprise! You can now enable the auto-resume of experiments that are running on spot instances. Should your experiment be interrupted, Grid can automatically resume your experiment from the last saved checkpoint when a new instance becomes available.

And more good things:

* Grid will recover all artifacts, including the last saved checkpoints.
* The local filesystem will be preserved between experiment interruption and experiment resumption.

<Note>Auto-resume is only available for Runs.</Note>

#### :magic_wand: Enable Auto-resume in the UI

Select the “Auto-resume” option after enabling the `Use Spot Instance` option in a new Run.

#### :magic_wand: Enable Auto-resume in the CLI

Use `-auto_resume` flag to indicate this experiment is safe to resume.

Example: `grid run --use_spot --auto_resume --instance_type p3.2xlarge [mnist.py](<http://mnist.py/>)`

### Datastore Enhancements

#### :star: Full S3 Datastore Support

You can now connect Grid to any publicly available S3 dataset, making it way faster to get your S3 data into Grid.

Specify a public S3 bucket, file, or path when creating a new Datastore.

<!-- ![](<../.gitbook/assets/Screen Shot 2022-01-04 at 4.03.48 PM.png>) -->

:magic_wand: **Supported URL formats:**

`s3://ryft-public-sample-data/`

`https://public_url.zip`

<Note>Private S3 buckets are coming soon!</Note>

#### **:star: **Datastore Mount Path

And the award for top FAQ goes to...

**How do I access my data in a datastore?**

With this release, accessing your data in a Session or Run is way more straightforward.

After you’ve created a datastore, you can access it at `/datastores` in a Session or Run.

More details on how to mount datastores:

[Attaching Datastores to a Session](https://docs.grid.ai/features/sessions/attaching-datastores)

[Attaching Datastores to a Run](https://docs.grid.ai/features/run-run-and-sweep-github-files/attaching-datastores)

### Fixes and Enhancements

* Performance improvements to Sessions, making your data on a Session faster to access once the Session is active from resuming.
* Increased observability into Session statuses and reasons for a potential Session failure.
* Hover over the status of a Datastore, Session, or Experiment for more details on the status.

<!-- ![](<../.gitbook/assets/Untitled (1).png>) -->

