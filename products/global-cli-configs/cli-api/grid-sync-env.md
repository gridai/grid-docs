# grid sync-env

## synchronize your environment

Synchronize the requirements file with packages and versions from the currently active environment. 

```bash
grid sync-env
```

```bash
WARNING

We found below packages being used in the source code but it is neither
in your requirement listing (requirements.txt or environment.yml) nor
installed in your current active environment. Your build could crash
or not start.

pytorchvideo
kornia
lightning_flash

Add them to your requirements file!
```