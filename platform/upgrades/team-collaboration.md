---
description: Collaboration Feature in Grid
---

# Team Collaboration

When running machine learning workflows, it is beneficial to share and collaborate with fellow

team members. The collaboration feature in Grid platform enables multiple people to view each

other’s runs, sessions and datastores, download artifacts and logs and leverage work done by

others in their team.

{% hint style="info" %}
Please note: Adding users and credits is not a self-service functionality at this time
{% endhint %}

**Grid.ai needs the following from you to enable collaboration features:**

1. Name of the team: What should the team be called
2. &#x20;Roles: Soon we will have an admin and owner designation, indicate person that would be admin and owner; currently everyone is a user
3. User names (email address or Github username )that will use the collaboration feature as part of a team
   1. Please make sure they are registered to use the Grid platform
   2. They will need to register the same way as an individual user; using the grid.ai website and perform credit card verification when using GPUs

### How to enable the collaboration features?

Once you have provided above information to us, we will notify that the team is created and

collaboration features are now enabled

You don't have to do anything special to enable it.

### Using the CLI for collaboration

Start a session or run or create datastore as you would normally in the Grid platform, per docs:

https://docs.grid.ai/start-here/typical-workflow-cli-user&#x20;

or

https://docs.grid.ai/start-here/typical-workflow-web-user

* Create/Update/Stop/Pause/Resume/Delete just as you would normally.
* Datastores are shared globally, so you can use a datastore that is created by someone else in the team
* Sessions are global: You can access a session via Jupyterlab created by someone else in the team, please be mindful as Github logins are integrated with sessions and github credential of the person that created the session is automatic.
* Runs are individual: You can see the runs and experiments from everyone in the team.

You can download logs and artifacts from other runs

Use the following command for checking out other sessions in the team:

`grid session --global`

Your own sessions can be listed with simply

`grid session`

Use the following command for checking out runs and experiments in the team

`grid status --global`

Your own status can be listed with simply

`grid status`

Use the following format to fetch artifacts of an experiment or run created by somebody else in your team

`grid artifacts <username>:<experiment_name>`

`grid artifacts <username>:<run_name>`

Use the following format to fetch logs of an experiment created by somebody else in your team

`grid logs <username>:<experiment_name>`

Use the following command for checking out datastores in the team

`grid datastore --global`

Use the following command to get information on users in the team

`grid teams <team-name>`

In Summary, following new CLI commands are available

`grid session --global`

`grid status --global`

`grid session --global <username>`

`grid artifacts <username>:<experiment_name>`

`grid artifacts <username>:<run_name>`

`grid logs <username>:<experiment_name>`

`grid datastore --global`

`grid teams <team-name>`

### How to use Web application

Web application shows team member's Runs, experiments, sessions, datastores

As part of a collaborative team; following are some things users can do:

* share, clone each other's runs, experiments
* download artifacts from any run created by someone
* access Jupyterlab session created by any member of the team
* use datastores created by any member of the team to attach to a new session or run

Users cannot stop or delete someone else's runs, interactive sessions or datastores

### How do I report a problem

Please contact your business partner in Grid; our support team is available to help as well support@grid.ai

![](<../../.gitbook/assets/Screen Shot 2021-10-25 at 3.13.48 PM.png>)

![](<../../.gitbook/assets/Screen Shot 2021-10-25 at 3.14.46 PM.png>)

### FAQ

1. Can I delete a session or run or datastore created by someone else?
   1. No, you will get a warning message
2. Can I use the Jupyterlab link from my friend's session?
   1. Yes
3. Can I attach a datastore created by someone else to my run or session
   1. Yes
4. How do I know what is my remaining balance?
   1. As individual user part of team, you can use Web UI to see remaining balance
