---
title: Localdir
sidebar_label: Localdir
---
## Running Experiments from a Local Directory
Currently, Grid has a native Github integration to allow running code from public or private repositories. There is currently no support for integration with other code repository providers like BitBucket, Gitlab, etc. We provide the --localdir feature within Grid run to allow users to run scripts from an arbitrary local directory, regardless of where that code is hosted. The main benefit of this feature is for users that do not need to grant Grid access to their code repository accounts. Below is an example usage of the grid run --local dir option.

```
grid run --localdir run.py
```
