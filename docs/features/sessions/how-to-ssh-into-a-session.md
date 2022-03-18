---
description: 'ssh to an interactive session to carry out prototyping, debugging workflows'
---

# SSH into a Session

## Step 0: Create an SSH Key

Create an ssh key from the computer you'd like to connect from (skip this step if you already have a key)

```yaml
# make the ssh key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"
or
ssh-keygen -b 2048 -t rsa -q -N ""
```

## Step 1: Add the SSH key

Here we assume to have SSH keys named _ed25519.pub,_ which are the default used by the command above.

We're going to add the key and name it _lit_key_

```yaml
# add the keys to grid
grid ssh-keys add lit_key ~/.ssh/id_ed25519.pub
or
grid ssh-keys add key_1 ~/.ssh/id_rsa.pub
```

If you go to [settings](https://platform.grid.ai/#/settings?tabId=ssh), you'll see the key

![](/images/platform/ssh-keys.png)

## Step 2: Launch the session

Use the CLI or Web interface to create and launch session

```bash
grid session create --instance_type 2_m60_8gb --name happy-owl-123
```

## Step 3: Login to the interactive session

```bash
grid session ssh happy-owl-123
```

![](/images/sessions/how-to-ssh-into-session.gif)

:::note
If trying to use session with ssh and asked for a password: 
- make sure to Step 0: Create an SSH Key and Step 1: Add the SSH key to Grid
- make sure that ~/.ssh/config file doesn't have a rule that conflicts with Grid settings
:::

:::note
You can clone any Github repositories into a Session using the [HTTPS cloning method](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-using-the-command-line) (SSH method of cloning will not work).
:::
