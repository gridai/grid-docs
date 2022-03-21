import Note from "@site/src/components/Note";

<note> Note: Datastore can only be mounted to a Run at Run creation time </note>

# Attaching Datastores

## Attach to a RUN

<!-- ![](/images/data.gif) -->

You can mount a datastore to a run to make your experiments run faster! By default, the datastore is mounted at /datastores. When attaching datastores to a run, take note of the path your script uses. For example if your script takes an argument _my_data_path_ and you want to mount the _cats_ datastore:

```bash
grid run main.py --my_data_path /datastores/cats/1
```

:::note
  When using datastores the data are requested from S3 and loaded on demand. These data results are then cached to local disk. Because of this you will see slower data
  retrieval times during the first epoch of a run.
:::note

## Datastore paths

Say you have a dataset with this structure:

```bash
my_dataset /
  train/
    ...
  val/
    ...
```

on your local machine, you call the script like so,

```bash
python main.py --root my_dataset/
```

your script uses the dataset like this,

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

it is available under this structure:

```bash
train/
  ...
val/
  ...
```

To run on this datastore, select the datastore from the dropdown

![](/images/runs/runs-select-datastore.png)

Now pass the name of the datastore to your command

![](/images/runs/script-arguments.png)

which is equivalent to calling your script like so:

```bash
# python
python pl_mnist.py --root /datastores

# with grid
python pl_mnist.py --root /datastores/my-dataset/1
```

The datastore path has 3 parts:

```bash
/datastores/[name]/[version]
```

Example, datastore named elephant (version 3)

```bash
/datastores/elephant/3
```
