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
Check status of Runs in your team
`grid status --global`

List Sessions in your team:
`grid session --global`

List Datastores in your team
`grid datastore --global`

Use a team member's Datastore for a run
`grid run --datastore_name <username>:/datastores/[name]/[version] script.py`

Use a team member's Datastore to attach to a Session
`grid session create --datastore_name <username>:<datastorename>`

<note>At this time downloading artifacts and viewing logs from a teammate's experiments is not supported from the CLI. Please use the UI as a workaround.</note>