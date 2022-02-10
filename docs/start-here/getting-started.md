---
sidebar_position: 1
---

# Grid Installation

## Prerequisites

1. Python

## Installation steps

The following steps will install the Grid cli tool. Grid commands can then be invoked by calling `grid <grid command> <grid command parameters>`.

1. `pip install lightning-grid --upgrade`
2. sshfs

### Install sshfs Linux (Debian/Ubuntu)
```
sudo apt-get install sshfs
```

### Install sshfs MacOs
This is dependent on MacFuse and will yield an error with a vanilla brew install. See [here](https://github.com/telepresenceio/telepresence/issues/1654#issuecomment-873538291) for resolution. 


## Login steps

1. Visit [grid.ai](https://grid.ai)
2. Sign in/create an account
3. Click your user profile icon
4. Click 'Settings'
5. Click 'API Keys' tab

You will now see the exact command you can use to login to grid and will be authenticated to run all CLI commands :).

# Setting Up Grid

To get the full power of Grid, it is important to integrate your Github account with your Grid account. This will enable Grid to then utilize your public repositories for training. You will also have the option to give Grid access to your private repositories; by default Grid will not have read/write access to your private repositories.

## Github Integration

By default, if you've logged in with Github, you can only access public Github repositories on Grid.&#x20;

To grant read access to your private code navigate to **Settings** > **Integrations** > **Grant access**.

:::note
If you've logged in for the first time with Google, you will need to link a Github account and grant access to repos.
:::
![](/images/platform/grant_github_access.gif)

![Make sure the Integrations tab in settings shows private repos are connected](/images/runs/ui-integrations.png)

## About private code

Grid does not save your code, look at it or compromise its privacy in any way.

When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code.

# Tutorials

See the [typical workflows](./typical-workflow-web-user.md) pages for some tutorial walkthroughs with the product!
