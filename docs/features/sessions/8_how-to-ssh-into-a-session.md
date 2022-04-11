---
sidebar_position: 1.8
title: SSH into Sessions
sidebar_label: SSH into Sessions
---

# SSH into a Session

## Step 0: Create an SSH key

Create an SSH key from the computer you'd like to connect from (skip this step if you already have a key)

```yaml
# make the ssh key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"
or
ssh-keygen -b 2048 -t rsa -q -N ""
```

## Step 1: Add the SSH key

Here we assume to have SSH keys named _ed25519.pub_, which are the default used by the command above.

We're going to add the key and name it _lit_key_

```yaml
# add the keys to grid
grid ssh-keys add lit_key ~/.ssh/id_ed25519.pub
or
grid ssh-keys add key_1 ~/.ssh/id_rsa.pub
```

If you go to [Grid settings](https://platform.grid.ai/#/settings?tabId=ssh), you'll see SSH keys you've added to Grid

![](/images/platform/ssh-keys.png)

## Step 2: Launch the session

Use the CLI or UI to create and launch a session

```bash
grid session create --instance_type 2_m60_8gb --name happy-owl-123
```

## Step 3: Login to the interactive session

```bash
grid session ssh happy-owl-123
```

![](/images/sessions/how-to-ssh-into-session.gif)

You can also use direct `ssh` commands, for example to port forward remote or local ports, 
as well as `sftp` if needed to transfer any files.

:::note
If prompted for a password while attempting to connect to a Session:
- [Create an SSH Key](https://github.com/gridai/grid-docs/blob/doc-118-docs-add-troubleshooting-tip-to-ssh-docs/docs/features/sessions/how-to-ssh-into-a-session.md#step-0-create-an-ssh-key)
- [Add the SSH key to Grid](https://github.com/gridai/grid-docs/blob/doc-118-docs-add-troubleshooting-tip-to-ssh-docs/docs/features/sessions/how-to-ssh-into-a-session.md#step-1-add-the-ssh-key).
- Make sure that ~/.ssh/config file doesn't have a rule that conflicts with Gridai settings
- Make sure that the below line is at the top of the ~/.ssh/config file.
:::

:::note
You can clone any Github repositories into a Session using the [HTTPS cloning method](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-using-the-command-line) (SSH method of cloning will not work).
:::
