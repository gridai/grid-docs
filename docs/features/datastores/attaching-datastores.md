
# Attaching Datastores
Datastores can be attached to both Runs and Sessions. Below are examples on how to do that.

## Runs

<!-- ![](/images/data.gif) -->

You can mount a datastore to a run to make your experiments run faster! By default, the datastore is mounted at /datastores. When attaching datastores to a run, take note of the path your script uses. For example if your script takes an argument _my_data_path_ and you want to mount the _cats_ datastore:

```bash
grid run main.py --my_data_path /datastores/cats/1
```


### Datastore paths

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
to Run + Sessions (perhaps this can be used as a link for the subsequent Run + Session redesigned pages)

## Sessions
This video shows how we attach an ImageNet Datastore to a Session.

![](/images/datastores/attach_datastore_to_session.gif)

In Sessions datastores are mounted to /datastores. However, since juypyter notebooks use /home/joyvan as the default working directory we provide a symlink from /home/jovyan/datastores to /datastore so you can access your datastore easily upon opening up a Session.


Once in the Session, view the data with:

```bash
cd /datastores
ls
```
