---
sidebar_position: 1.3
title: Environment Variables
sidebar_label: Environment Variables
---

# Environment Variables
Sessions come with a couple environment variables available for community use. These variables can be accessed in:

- Jupyter Notebook via [`%ENV VAR`](https://ipython.readthedocs.io/en/stable/interactive/magics.html#magic-env)
  ```python
  %ENV GRID_SESSION_NAME
  ```
- Python via [`os.getenv`](https://docs.python.org/3/library/os.html#os.getenv) 
  ```python
  import os
  os.getenv('GRID_SESSION_NAME')
  ```
- Terminal
  ```bash
  echo $GRID_SESSION_NAME
  ```

## Environment Variables List

| Environment Variable | Description|
| -------------------- | -----------|
| GRID_URL| The Grid url.  Default is `https://platform.grid.ai:443`|
| GRID_SESSION_ID | The Session's ID|
| GRID_SESSION_NAME | The Session's name|
| GRID_API_KEY | The `grid login --key` value|
| GRID_USER_ID | The `grid login --username` value|
| GRID_CONTEXT_CLUSTER_ID | The `grid user set-cluster-context` value|
| GRID_GIT_DOMAIN | The domain. Default is `github.com` |
| GRID_GIT_EMAIL | The [GITHUB](../../platform/2_github-integration.md) email |
| GRID_GIT_PASSWORD | The [GITHUB](../../platform/2_github-integration.md) Password |
| GRID_GIT_USERNAME | The [GITHUB](../../platform/2_github-integration.md) Username |
