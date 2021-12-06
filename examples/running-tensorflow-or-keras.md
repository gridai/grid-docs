---
description: Run TensorFlow or Keras scripts in Grid
---

# Running Tensorflow or Keras

Running [TensorFlow](https://www.tensorflow.org) or [Keras](https://keras.io) scripts and  [hyper parameter sweeps](https://www.grid.ai/what-are-hyperparameter-sweeps-and-why-are-they-important-to-production-machine-learning/) in Grid is easy using CLI or the Web UI. Both CPU and GPU instances are supported with all necessary system drivers pre-installed and set up, so you can take advantage of multiprocessing and compute acceleration hardware with no additional configuration.&#x20;

## Example

In Web UI,  simply paste this script in the New Run dialog: [https://github.com/gridai/hello\_mnists/blob/master/keras.py](https://github.com/gridai/hello\_mnists/blob/master/keras.py)

Select the Machines you want to run on and the search strategy for hyper parameter sweep

In the ML Framework dropdown choose the tensorflow framework then click on Start to run the simple hello program

![](<../.gitbook/assets/Screen Shot 2021-06-22 at 8.48.23 PM.png>)
