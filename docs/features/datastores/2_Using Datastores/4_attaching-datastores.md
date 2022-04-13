---
title: Attaching Datastores
sidebar_label: Attaching Datastores
---
# Attaching Datastores
Datastores can be mounted to both Runs and Sessions. Below are examples on how to do
that.

## Runs

You can mount a datastore to a run to make your experiments run faster! By default, the
datastore is mounted at /datastores in a Session or Run. When attaching datastores to a run, take note of the
path your script uses. For example if your script takes an argument _my_data_path_ and you
want to mount the _cats_ datastore:

```bash
grid run --datastore_name cats --datastore_version 1 -- main.py --my_data_path /datastores/cats/1
```

:::note
We provide a working example showcasing this functionality on the [Basic Runs Creation](./../../runs/1_Creating%20Runs/1_Basic%20Runs/2_basic-runs.md#attaching-datastores-to-runs) page.
:::

## Sessions

This video shows how we attach an ImageNet Datastore to a Session.

![](/images/datastores/attach_datastore_to_session.gif)

In Sessions, datastores are mounted to `/datastores`. However, since Juypyter notebooks use
`/home/jovyan` as the default working directory, we provide a symlink from
`/home/jovyan/datastores` to `/datastores/` so you can access your datastore easily upon
opening up a Session.


Once in the Session, view the data with:

```bash
cd /datastores
ls
```

## Datastore paths

Say you have a dataset with this structure:

```bash
my_dataset /
  train/
    ...
  val/
    ...
```

On your local machine, you call the script like this:

```bash
python main.py --root my_dataset/
```

Your script uses the dataset like this:

```python
args.add_argument('-root')
root = args.parse_args()

train = load(root + 'train')
val = load(root + 'val')
```

When you upload a datastore to Grid:

```bash
grid datastore create my_dataset
```

It is available under this structure:

```bash
train/
  ...
val/
  ...
```

To run on this datastore, select the datastore from the dropdown.

![](/images/runs/runs-select-datastore.png)

Now pass the name of the datastore to your command.

![](/images/runs/script-arguments.png)
