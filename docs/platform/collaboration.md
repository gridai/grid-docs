# Collaboration

Team Collaboration allows you to work on Grid projects with your team members. When using Collaboraton, individual team members have the advantages of:

* Sharing Runs, Sessions, Datastores
* Shared billing

This is a premium feature; refer to our plans page [here](https://www.grid.ai/pricing/). REQUEST early access by messaging us on community slack channel: gridai-community.slack.com or contact us at [support@grid.ai](mailto:support@grid.ai)

Available features include and not limited to:

| Activity | Yes/No |
| :--- | :--- |
| Using your own cloud credentials | Yes |
| View the team information | Yes |
| Download team member’s artifacts  | Yes |
| Visualize metrics of team member’s Run | Yes |
| View logs of team member’s Runs | Yes |
| View Tensorboard outputs of team member's Run | Yes |
| View team member's Sessions | Yes |
| Pause a session created by another team member | No |
| Delete a run created by another team member | No |
| Access session created by team member using ssh  | No |
| Access session created by team member using vscode | No |
| View team member's Datastores | Yes |
| Stop a run created by another team member | Yes |
| Delete a run created by another team member | Yes |
| Access JupyterLab session created by a team member | Yes |
| Run with a Datastore created by you or any team member | Yes |
| Mount a Datastore created by team member when creating session | Yes |
| Add Credit for the team Payments | No |

## Team Collaboration CLI commands
Use the following command for checking out runs and experiments in the team
grid status --global

Use the following command for checking out other sessions in the team:
grid session --global

Use the following command for checking out datastores in the team
grid datastore --global

Use the following command to get information on users in the team
grid teams <team-name>

Use the following command to use team members datastore for a run
grid run --datastore_name <username>:/datastores/[name]/[version] script.py

Use the following command to use team members datastore to attach to a session
grid session create --datastore_name <username>:<datastorename>

At this time downnloading artifacts and view logs for the team mates is not supported from the CLI, please use the UI as a workaround.