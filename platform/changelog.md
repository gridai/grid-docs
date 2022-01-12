---
description: What's new and improved in Grid.
---

# 🥳 Releases

{% hint style="info" %}
**Archived release notes can be found on** [**this page**](https://github.com/gridai/gridai/discussions) **in Github.**&#x20;
{% endhint %}

## :wrench:January 12, 2022

**CLI version: 0.7.3**\
\
A maintenance release has been issued with the following :

* resolves an issue that was causing experiments to remain queued for 1 hour+
* fixes issue where Datastores and Runs couldn’t be viewed from the UI
* addresses an issue with Multinode Runs that were not running

### Cluster Contexts &#x20;

For users **B**ringing **Y**our **O**wn **C**loud, we've introduced the concept of cluster contexts. You can set the cluster context so that all your CLI actions (including creation of a resource such as Run or Session) are made against that cluster.

By default, the cluster context is set to the global cluster. You can change the context at anytime `~/.grid/settings.json` to the cluster you'd like to us.

Find out which cluster context is currently set by using the `grid user`command.

More information in the documentation on how to 'Run Workloads in Your New Cluster'.





## :partying\_face:January 5, 2022

**CLI version: 0.7.1**

Hi! Welcome to 2022 :) Today we bring you a new Grid release with exciting new features, continued performance and stability improvements, and the beginnings of a very productive new year. As always use `pip install lightning-grid --upgrade` to update the CLI to the new version and hit us up in our Slack Community with any thoughts or questions.

### Auto-resume Experiments

Surprise! You can now enable the auto-resume of experiments that are running on spot instances. Should your experiment be interrupted, Grid can automatically resume your experiment from the last saved checkpoint when a new instance becomes available.

And more good things:

* Grid will recover all artifacts, including the last saved checkpoints.
* The local filesystem will be preserved between experiment interruption and experiment resumption.

{% hint style="info" %}
**Note: Auto-resume is only available for Runs.**
{% endhint %}

#### :magic\_wand: Enable Auto-resume in the UI

Select the “Auto-resume” option after enabling the `Use Spot Instance` option in a new Run.

#### :magic\_wand: Enable Auto-resume in the CLI

Use `-auto_resume` flag to indicate this experiment is safe to resume.

Example: `grid run --use_spot --auto_resume --instance_type p3.2xlarge [mnist.py](<http://mnist.py/>)`

### Datastore Enhancements

#### :star: Full S3 Datastore Support

You can now connect Grid to any publicly available S3 dataset, making it way faster to get your S3 data into Grid.

Specify a public S3 bucket, file, or path when creating a new Datastore.

![](<../.gitbook/assets/Screen Shot 2022-01-04 at 4.03.48 PM.png>)

:magic\_wand: **Supported URL formats:**

`s3://ryft-public-sample-data/`

`https://public_url.zip`

{% hint style="info" %}
_Note:_ **Private S3 buckets are coming soon!**
{% endhint %}

#### ****:star: **Datastore Mount Path**

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

![](<../.gitbook/assets/Untitled (1).png>)

``

##
