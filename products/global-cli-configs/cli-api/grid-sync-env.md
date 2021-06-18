# grid sync-env

## synchronize your environment

Synchronize the requirements file with packages and versions from the currently active environment. 

```bash
grid sync-env
```

`grid run` will inform missing requirements.txt or environment.yml and suggest a recommendation.

```bash
WARNING
No requirements.txt or environment.yml found but we identified below
dependencies from your source. Your build could crash or not
start.

pytorchvideo
kornia
lightning_flash
```
## Steps to create `requirements.txt`

Create `requirements.txt` as suggested.
Note `touch requirements.txt` is required if the file does not already exist. 

```bash
touch requirements.txt
grid sync-env
```

- Add `requirements.txt` into the repo

```bash 
git add requirements.txt
git commit -m "requirements.txt synced with current environment"
```