---
description: >-
  Visual studio code is a source-code editor made by Microsoft for Windows,
  Linux and macOS. Features include support for debugging, syntax highlighting
  etc.
---

# VSCode with Sessions

## Step 0: Create and add the SSH Key

Create an ssh key from the computer you'd like to connect from (skip this step if you already have a key)

```yaml
# make the ssh key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"

# add the keys to grid
grid ssh-keys add lit_key ~/.ssh/id_ed25519.pub
```

## Step 1: launch the session

```bash
grid session create --name fun-bear-259
```

## Step 2: login to the interactive session

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
