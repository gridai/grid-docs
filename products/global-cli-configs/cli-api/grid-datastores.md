---
description: 'Create a low-latency, highly-scalable auto-versioned dataset.'
---

# grid datastores

To create a low-latency, auto-versioned dataset, create a datastore

```bash
grid datastores create --source ./my_dataset --name my_datastore_name
```

Attach a datastore into a Run or Session with:

```bash
grid train --grid_datastore_name my_datastore_name \
           --grid_datastore_version 1 \
           my_script.py
           --my_data /opt/datastore
```

## create

Creates a datastore. Datastores are directories that are compressed into and mounted into your experiment environment.

```bash
grid datastores create --source path/to/data --name datastore_name
```

### --source

Source directory you want to create a datastore from. This directory can contain multiple files and multiple directories. 

### **--name**

Name of the dataset. It's name work as a unique ID.

### **--grid\_credential**

Cloud credential ID to use.

### **--compression**

Compresses datastores with GZIP when flag is passed.

```bash
grid datastores create \ 
    --source path/to/data \
    --name datastore_name \
    --compression
```

## delete

Deletes an existing datastore.

```bash
grid datastore delete --name my_datastore --version x
```

### --name

Name of datastore to delete. You will also need to supply a `--version`.

### **--version**

Version of the datastore to delete. You will also need to supply a `--name`.

## list

Lists all available datastores.

```bash
grid datastore list
```

## resume

Resumes uploading a datastore



