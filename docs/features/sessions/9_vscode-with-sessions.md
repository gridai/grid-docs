---
sidebar_position: 1.9
title: VSCode with Sessions
sidebar_label: VSCode with Sessions
---

# VSCode with Sessions

## Step 0: Create and add the SSH Key

Create an ssh key from the computer you'd like to connect from (skip this step if you already have a key)

```yaml
# make the ssh key (if you don't have one)
ssh-keygen -b 2048 -t rsa -f ~/.ssh/grid_ssh_creds -q -N ""

# add the key to the ssh-agent (to avoid having to explicitly state key on each connection)
# to start the agent, run the following
eval $(ssh-agent)
# then add the key
ssh-add  ~/.ssh/grid_ssh_creds

# add the keys to grid
grid ssh-keys add key_1 ~/.ssh/grid_ssh_creds.pub
```

## Step 1: Launch a session

```bash
grid session create --name fun-bear-259
```

## Step 2: Login to the interactive session

```bash
grid session ssh fun-bear-259
```

## Step 3: Install remote ssh extension

![](/images/sessions/remote-ssh.png)

## Step 4: Click the remote tab and find your session

![](/images/sessions/vscode-remote.gif)

## Step 5: Ready

Clicking on it will open VSCode in the remote IxNode. You can use VSCode with any of its features.

![](/images/sessions/vscode-open-session.gif)


:::note
You can clone any Github repositories into a Session using the [HTTPS cloning method](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-using-the-command-line) (SSH will not work).
:::
