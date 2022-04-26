---
sidebar_position: 2.2
title: FAQ
sidebar_label: FAQ
---

# FAQ
## Why can't I push to my remote repository?
If you're having trouble pushing to the repo the recommended solution is to clone the repo via https and try pushing again.

## "I can't access my private Github repository"
If you're having trouble with access to private Github repos, try the following:&#x20;

*   If you're logged into Grid with Google and have not linked a Github account already, **then link your Github account to Grid in the Grid UI in Settings** > **Integrations.**

    ****
* If you've already linked your Github account to Grid, but have not granted private repo access to Grid, then [grant private repo access to Github in your Grid Settings.](https://docs.grid.ai/features/sessions/github-login#access-private-github-repos)
  *   Make sure to **log out and log back in after granting access.**

      ****
*   If you're having trouble accessing an organization repo, then make sure to also **grant organization access when granting private repo access in the Grid settings.**

    ![](/images/sessions/org_access.png)

In some cases, you may need to approve the application in Github. Follow [these instructions](https://docs.github.com/en/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization) on how to do that, if necessary.&#x20;

## How to use Tensorboard in Session
You can use port forwarding to use tensorboard in a Session. This can be accomplished with the following code

`ssh -N -f -L localhost:8009:localhost:8009 GRID_SESSION_NAME`  
We also recommend checking out the official [tensorboard documentation](https://www.tensorflow.org/tensorboard/tensorboard_in_notebooks).


## Why am I asked for a password when trying to SSH into a Session?

:::note
If prompted for a password while attempting to connect to a Session:
- [Create an SSH Key](https://github.com/gridai/grid-docs/blob/doc-118-docs-add-troubleshooting-tip-to-ssh-docs/docs/features/sessions/how-to-ssh-into-a-session.md#step-0-create-an-ssh-key)
- [Add the SSH key to Grid](https://github.com/gridai/grid-docs/blob/doc-118-docs-add-troubleshooting-tip-to-ssh-docs/docs/features/sessions/how-to-ssh-into-a-session.md#step-1-add-the-ssh-key).
- Make sure that ~/.ssh/config file doesn't have a rule that conflicts with Gridai settings
- Make sure that the below line is at the top of the ~/.ssh/config file.
  
  ###grid.ai managed BEGIN do not edit manually### is at the top of the config file.
:::
