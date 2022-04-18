---
title: GitHub Integration
sidebar_label: GitHub Integration
---

# Private Repos

Grid Runs offers two solutions for using private repos:
1. Grant Grid access to your private GitHub repos
2. Utilize the `--localdir` CLI option when creating a Run

## Integrating with GitHub
See [here](https://docs.grid.ai/platform/github-integration) for detailed steps for integrating GitHub with Grid.

## The --localdir Option
Currently, Grid has a native Github integration to allow running code from public or private repositories. There is currently no support for integration with other code repository providers like BitBucket, Gitlab, etc. We provide the `--localdir` feature within Grid run to allow users to run scripts from an arbitrary local directory, regardless of where that code is hosted. The main benefit of this feature is for users that do not need to grant Grid access to their code repository accounts. Below is an example usage of the grid run `--localdir` option.

:::note
Grid will upload the entire contents of your directory to our system. Make a `.gridignore` file to limit what we upload!
:::

```
grid run --localdir run.py
```

:::note
If you have additional questions about Runs, visit the [FAQ](https://docs.grid.ai/features/runs/faq.md). The section is periodically updated this with common questions from the Grid community.
:::