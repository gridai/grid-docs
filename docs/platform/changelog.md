---
description: What's new and improved in Grid.
---
import Note from "@site/src/components/Note";

# :partying_face: Releases

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

[Attaching Datastores to a Session](https://docs.grid.ai/products/sessions/attaching-datastores)

[Attaching Datastores to a Run](https://docs.grid.ai/products/run-run-and-sweep-github-files/attaching-datastores)

### Fixes and Enhancements

* Performance improvements to Sessions, making your data on a Session faster to access once the Session is active from resuming.
* Increased observability into Session statuses and reasons for a potential Session failure.
* Hover over the status of a Datastore, Session, or Experiment for more details on the status.

<!-- ![](<../.gitbook/assets/Untitled (1).png>) -->

