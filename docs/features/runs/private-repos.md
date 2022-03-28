# Private Repos

Grid Runs offers two solutions for using private repos:
1. Grant Grid access to your private GitHub repos
2. Utilize the grid run --localdir option

## Integrating with GitHub
See [here](https://docs.grid.ai/platform/github-integration) for detailed steps for integrating GitHub with Grid.

## Grid Run localdir Option
Currently, Grid has a native Github integration to allow running code from public or private repositories. There is currently no support for integration with other code repository providers like BitBucket, Gitlab, etc. We provide the --localdir feature within Grid run to allow users to run scripts from an arbitrary local directory, regardless of where that code is hosted. The main benefit of this feature is for users that do not need to grant Grid access to their code repository accounts. Below is an example usage of the grid run --local dir option.

```
grid run --localdir run.py
```
