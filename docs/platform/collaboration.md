import Note from "@site/src/components/Note";

# Collaboration

The collaboration features within the Grid platform allow you to share work seamlessly with team members, aiding in reproducibility and creating opportunities for knowledge exchange.

These features are part of our [Teams plan](https://www.grid.ai/upgrade/) – if you're interested in enabling Collaboration for your team or in learning more, please email us at sales@grid.ai.

Current features include:

| Activity | Yes/No |
| :--- | :--- |
| Using your own cloud credentials | Yes |
| View team information | Yes |
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

#### Check status of Runs in your team
`grid status --global`

#### List Sessions in your team:
`grid session --global`

#### List Datastores in your team
`grid datastore --global`

#### Use a team member's Datastore for a run
`grid run --datastore_name <username>:/datastores/[name]/[version] script.py`

#### Use a team member's Datastore to attach to a Session
`grid session create --datastore_name <username>:<datastorename>`

<note>At this time downloading artifacts and viewing logs from a teammate's experiments is not supported from the CLI. Please use the UI as a workaround.</note>
