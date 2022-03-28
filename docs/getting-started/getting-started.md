---
sidebar_position: 1
---

# Grid Installation

## Prerequisites

1. [Python 3.8+](https://www.python.org/downloads/)

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

See [here](https://docs.grid.ai/platformgithub-integration) for detailed steps on how to integrate Grid with GitHub.

# Tutorials

See the [typical workflows](./typical-workflow-web-user.md) pages for some tutorial walkthroughs with the product!
