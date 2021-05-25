---
description: What's new and improved in Grid.
---

# Changelog

## April 13, 2021

We are now live! Grid platform is accessible via our new website: [https://www.grid.ai/](https://www.grid.ai/)

Sign in via Github or gmail and get started!

## April 9, 2021

### UI Enhancements

When you log in to Grid, you will be asked for phone verification. This is for security reasons. You will  be doing this only once.

New Run workflow is simplified with less steps, three frameworks to choose from.

Hyper parameter values have better visualization with rounding of precision

### Support for Mobile 

Web Interface now has minimal functionality on a mobile device

### CLI Bug fixes

New version v0.3.60. And many other fixes





## April 7, 2021

### **Clone your runs in the UI** 

We've added lots of new features to the UI including cloning a run! Lot of times, you may want to re-run with minor modifications or maybe run on a different GPU. You can do that now by simply going to the run and click Clone Run, then populate with your choice of parameters etc and done!

![](../.gitbook/assets/clone%20%281%29.gif)

Downloading artifacts all together just got easier in the CLI 

Download all artifacts to a directory using --download\_dir

```text
grid artifacts --download_dir  DIRECTORY  Download directory that will host all artifact files
```

### CSV table

You can now download a CSV showing the contents of the experiments table

![](../.gitbook/assets/image%20%28141%29.png)



### Charts

The charts are much more robust, with:

* zoom
* smoothing
* tooltips
* resizing of charts

![](../.gitbook/assets/image%20%28108%29.png)

### Many bug fixes

And otherwise, a TON of bug fixes, updated docs, and more information is available about runs and experiments.

## March 26, 2021

**New and Improved UI Experience**  
We've added lots of new features to the UI including a new view for experiment metrics, a full-screen artifacts explorer, and a really cool hyperparameter view.

![](https://canny.io/images/99321daf89f09751248359b4fb47129b.gif)

**Experiment Metrics** Now you can view and compare experiment metrics right from the Runs page in the Grid UI. Click the icons next to each chart to:

* change the log scale
* zoom in on the chart
* refresh the chart

**Artifacts Explorer** View the artifacts of a specific experiment by clicking on that experiment's details. View and compare artifacts of multiple experiments by using the new artifacts explorer which you can also browse in full screen.

**Hyperparameter View** We've added support for toggling on/off hyperparameters while viewing your experiments.

![](https://canny.io/images/20dd20aef9a7514afea21122fa94dc63.gif)

## March 19, 2021

**Dashboard UI now shows a list of Active runs and sessions.** 

The “Runs” page is improved for usability, showing the Runs panel on a column instead of a whole page table. The experiments section has many enhancements including scalars charts, hyperparameter columns. Tensorboard invocation and refresh are located just above the Experiments table area.

**Scalars can now be visualized on the Runs page in the Experiment Metrics area.**

![](../.gitbook/assets/metrics%20%281%29.gif)

**Hyperparameters are visible in the Experiments table to easily filter or compare.**

![](../.gitbook/assets/hyperparams.gif)

**Datastores upload user interactions are improved;** you can now see a progress bar showing datastore upload percentage and ability to cancel.

**Datastore uploads from the CLI are more reliant to network interruptions.** The web UI now remembers preferences for instance type used for each project and script

  
  




