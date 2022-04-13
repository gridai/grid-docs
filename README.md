# Grid in 3 minutes

## **Introduction**

Grid is designed for developing and training deep learning models at scale.

The TL;DR of using Grid is this:

- Create a **DATASTORE** with your dataset.
- Spin up a **SESSION** to develop, analyze and prototype models/ideas.
- When you have something that works, train it at scale via **RUN.**

This 3-minute video shows you how to execute code on cloud instances with zero code changes and how to debug/prototype and develop models with multi-GPU cloud instances.

https://user-images.githubusercontent.com/23050213/153156339-0f803a2b-ce13-4ef1-abaa-a9a827843b14.mp4


Here is a quick overview of:

[**Datastores**](docs/features/add-data-to-grid-datastores/README.md#datastores-scalable-datasets)

[**Sessions**](docs/features/sessions/README.md#sessions)

[**Runs**](docs/features/runs/README.md#runs)

## **Infrastructure is gone**

Grid allocates all the machines and GPUs you need on demand, so you only pay for what you need when you need it.

Grid lets you focus on your work, NOT on the infrastructure. Create an account <a href="https://platform.grid.ai">here</a> to get free credits and get started!

## Artifacts, logs, etc...

Grid handles all the other parts of developing and training at scale:

- Artifacts
- Logs
- Metrics

Just run your files and watch the magic happen

## Experiment Managers

Grid works with the experiment manager of your choice!!🔥🔥

No need to change your code!

## Datastores: (Scalable datasets)

In Grid, we've introduced _Datastores_, high-performance, low-latency, versioned datasets.

![image](./static/images/datastores/jobs.jpg)

The UI supports creating Datastores of &lt; 1 GB

https://user-images.githubusercontent.com/23050213/153156559-2ef0a745-4367-4df8-b64b-23e78869ae6c.mp4

Use the CLI for larger datastores

```bash
grid datastore create imagenet_folder --name imagenet
```

## Sessions (Interactive machines)

For prototyping/debugging/analyzing, sometimes you need a LIVE machine. We call these _Sessions_.

**Web UI: Starting a new session**

![](./static/images/sessions/session.jpg)


https://user-images.githubusercontent.com/23050213/153156641-6ffd9c0c-8a23-4ec6-8e83-dc3c6054e5c6.mp4


**CLI: Starting a new session**

```bash
# session with 2 M60 GPUs
grid session create --instance_type 2_m60_8gb
```

## **RUN (Sweep and train anything)**

RUN **any** public or private repository with Grid in 5 steps:

![](./static/images/runs/how-to-launch-experiments.jpg)

This 1-minute video shows how to RUN from the web app:


https://user-images.githubusercontent.com/23050213/153156700-2a7a30a7-8d5f-4e73-aa65-5aa4e3ef9d4e.mp4



If you prefer to use the CLI simply replace python with grid run.

![](/images/runs/hello-cifar-command.png)

First, install Grid and login

```bash
pip install lightning-grid --upgrade
grid login
```

Now clone the repo and hit run!

```bash
# clone repo
git clone https://github.com/williamFalcon/hello
cd hello

# start the sweep
grid run hello.py --number "[1, 2]" --food_item "['pizza', 'pear']"
```

This command produces these equivalent calls automatically

```bash
python hello.py --number 1 --food_item 'pizza'
python hello.py --number 2 --food_item 'pizza'

python hello.py --number 1 --food_item 'pear'
python hello.py --number 2 --food_item 'pear'
```

## That's it!

We learned that:

- **RUN** executes scripts on cloud machines (and runs hyperparameter sweeps)
- **SESSION** starts an interactive machine with the CPU/GPUs of your choice
- **DATASTORE** is an optimized, low-latency auto-versioned dataset.
- Grid has a **Web app** and a **CLI** with similar functionality.

That's all you need to know about Grid!

## Next!

Now try our [first tutorial](/docs/getting-started/typical-workflow-web-user.md)
