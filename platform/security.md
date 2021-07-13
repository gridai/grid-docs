# Security

## Access to Grid Platform

Access to grid platform is through your registered Google email address or Github user name. Grid uses two factor authentication with phone validation to ensure secure access.

Interactive sessions are accessible via ssh, vscode and Jupyterlab. Using ssh requires generation of keys. Refer to the CLI reference on [grid ssh keys](https://docs.grid.ai/products/global-cli-configs/cli-api/grid-ssh-keys) for more details. 

If you have logged into Grid platform with Github username, when you start and access Interactive session, you will be already logged in to your Github account; to learn more about this feature see [here](https://docs.grid.ai/products/sessions/github-login)

Grid credentials and API key are unique to every user. The API key and credentials can be found on the Settings page in the web application, see [here](https://docs.grid.ai/platform/supporting-workflows-1/your-login-credentials) for more information.

If you are interested to learn about custom integrations with third party secure access providers, please contact us at [support@grid.ai](mailto:support@grid.ai)

## Permissions 

If you are using Grid to orchestrate infrastructure on your own AWS account using custom cloud credentials, permissions need to be granted for secure access. Refer to the section [setting up AWS credentials](https://docs.grid.ai/platform/upgrades/adding-custom-cloud-credentials#step-1-get-aws-credentials) for more details.

Datastores are accessible for individual users only unless using [Teams collaboration](https://docs.grid.ai/platform/about-these-features/teams-features) where team members can share each other's Datastores when executing scripts or starting sessions

Runs and Experiment logs and artifacts are accessible via the web application or Command Line Interface for individual users only unless using [Teams collaboration](https://docs.grid.ai/platform/about-these-features/teams-features).

## Granting authorization to private Github repositories

By default you can only access and run scripts from public Github repositories on Grid. To grant access to your private code navigate to Settings > Integrations > Grant access. Make sure to grant access to any private repositories you intend to use before using Sessions. Learn how to enable this [here](https://docs.grid.ai/products/sessions/github-login). It is user responsibility to ensure they have permissions to grant access to private repos.

If you are using Grid to orchestrate infrastructure on your own AWS account using [custom cloud credentials](https://docs.grid.ai/platform/upgrades/adding-custom-cloud-credentials), you will be able to use own docker images and run from local directories not connected to Github. More information is available upon request.


## Other information
Grid does not see your code or compromise its privacy in any way. When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code. 
Only your account can access your data in Datastores, Sessions and Runs. Grid and its service providers only access your data for operational purposes when providing services and support to you.




