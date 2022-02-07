---
sidebar_position: 1
sidebar_label: Getting started
---

# Getting Started with the Grid SDK

The Grid SDK is a set of tools you can use to orchestrate and inspect resources hosted on Grid AI.

### Importing API Methods

> Every interpreter session needs to call the `login()` method before any utilities can successfully proceed.

API methods can be imported like:

```python
from grid import foo
```

## Common Use Cases

The following are examples of some common use cases of the SDK.

### Login

> Logging in first is required for any utilities to execute successfully.

```python
>>> from grid import login
>>> login()
```

### Setting up a `Run`

A `Run` is first defined and then started to trigger it's execution.

```python
>>> from pathlib import Path
>>> from grid import login, Run
>>>
>>> login()
>>> r = Run(
...     entrypoint='./Demo_Project/run.py',
...     script_args='--max_epochs "[10, 20]" --learning_rate "uniform(1e-3, 1e-5, 1)"',
...     instance_type='t2.xlarge',
...     cpus=3,
... )
>>> r
Run(
    name=,
    description="None",
    script_command=,
    num_experiments=0,
    status={},
    user=rlizzo,
    created_at=None,
    cluster=,
)
```

### Hourly Cost Estimation

Estimate the hourly cost of the `Run` before starting it.

```python
>>> r.estimated_hourly_cost
0.38
Start the Computations
>>> r.start()
>>> r
Run(
    name=peculiar-shockley-4136,
    description="None",
    script_command=./Demo_Project/run.py --script_args '"'"'--max_epochs "[10, 20]" --learning_rate "uniform(1e-3, 1e-5, 1)"'"'"' --instance_type t2.xlarge --cpus 3 ./Demo_Project/run.py --max_epochs '"'"'[10, 20]'"'"' --learning_rate '"'"'uniform(1e-3, 1e-5, 1)'"'"'',
    num_experiments=2,
    status={'QUEUED': 2},
    user=rlizzo,
    created_at=2021-08-10 16:59:58.044624+00:00,
    cluster=grid-cloud-prod,
)
```

### Status Inspection

Inspect the status of the `Run` and `Experiment`s which were generated.

```python
>>> r.status()
defaultdict(list,
            {'QUEUED': ['peculiar-shockley-4136-exp0',
                        'peculiar-shockley-4136-exp1']})
>>> r.created_at
datetime.datetime(2021, 8, 10, 16, 59, 58, 44624, tzinfo=datetime.timezone.utc)
>>>
>>> r.name
'peculiar-shockley-4136'
The Run.experiments attribute is a mapping view of all experiments which are part of Run which has been submitted for computation (or which has finished in some terminal state).
>>> r.experiments
{
    'peculiar-shockley-4136-exp0': Experiment(,
        name=peculiar-shockley-4136-exp0,
        status=QUEUED,
        project=gridai/Demo_Project @ 570cd62aa05579e599609f3178344d5d208799dd,
        parameters={'Script': 'run.py', 'max_epochs': '10', 'learning_rate': '0.0007056001691752508'},
        invocation_command=python run.py --max_epochs 10 --learning_rate 0.0007056001691752508,
        user=rlizzo,
        created_at=2021-08-10 16:59:58.058882,
        started_running_at=1970-01-01 00:00:00,
        finished_at=1970-01-01 00:00:00,
    ),
    'peculiar-shockley-4136-exp1': Experiment(,
        name=peculiar-shockley-4136-exp1,
        status=QUEUED,
        project=gridai/Demo_Project @ 570cd62aa05579e599609f3178344d5d208799dd,
        parameters={'Script': 'run.py', 'max_epochs': '20', 'learning_rate': '0.0007056001691752508'},
        invocation_command=python run.py --max_epochs 20 --learning_rate 0.0007056001691752508,
        user=rlizzo,
        created_at=2021-08-10 16:59:58.063336,
        started_running_at=1970-01-01 00:00:00,
        finished_at=1970-01-01 00:00:00,
    )
}
```

### Accessing Experiments

Access the `Experiment`'s of the `Run`.

```python
>>> r.experiments['peculiar-shockley-4136-exp0']
Experiment(,
    name=peculiar-shockley-4136-exp0,
    status=PENDING,
    project=gridai/Demo_Project @ 570cd62aa05579e599609f3178344d5d208799dd,
    parameters={'Script': 'run.py', 'max_epochs': '10', 'learning_rate': '0.0007056001691752508'},
    invocation_command=python run.py --max_epochs 10 --learning_rate 0.0007056001691752508,
    user=rlizzo,
    created_at=2021-08-10 16:59:58.058882,
    started_running_at=1970-01-01 00:00:00,
    finished_at=1970-01-01 00:00:00,
)
>>> r.experiments['peculiar-shockley-4136-exp0'].cancel()
'peculiar-shockley-4136-exp0'
>>>
>>> r.status()
defaultdict(list,
            {'CANCELLED': ['peculiar-shockley-4136-exp0'],
             'PENDING': ['peculiar-shockley-4136-exp1']})
```

## Other Utilities

There are other top level functions available. Play around with what's imported by grid!

### List Runs

List all the `Run`s belonging to the logged in user.

```python
>>> from grid import list_runs
>>>
>>> list_runs()
['peculiar-shockley-4136',
    'nice-nightingale-152-cl8102124654',
    'nice-nightingale-152',
    'clever-bouman-4749',
    'striped-hamilton-1458',
    'classy-mandrill-288',
    'tactful-burnell-7171',
    'brainy-gopher-730-cl7921101940']
```

### Retrieving a Run

Access a `Run` which has already been started by just passing the "name" to the `Run` constructor.

```python
>>> rr = Run('striped-hamilton-1458')
>>> rr
Run(
    name=striped-hamilton-1458,
    description="None",
    script_command=Demo_Project/run.py --script_args '"'"'--max_epochs "[10, 20]" --learning_rate "uniform(1e-3, 1e-5, 1)"'"'"' --instance_type t2.xlarge --cpus 3 Demo_Project/run.py --max_epochs '"'"'[10, 20]'"'"' --learning_rate '"'"'uniform(1e-3, 1e-5, 1)'"'"'',
    num_experiments=2,
    status={'SUCCEEDED': 2},
    user=rlizzo,
    created_at=2021-08-10 04:20:27.619203+00:00,
    cluster=,
)
```
