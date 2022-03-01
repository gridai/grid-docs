We’re also excited to announce a dazzling new enhancement to Sessions. You can now change the instance type of an active Session! That means there’s no need for you to destroy and recreate your Session on a new instance! More details and information on how to use the feature are below.

### Change Instance Type in Sessions

This allows you to upgrade or downgrade the compute capability of the session nodes while keeping all of your work in progress untouched. The following operations are supported:

- Change to a spot instance from an on-demand instance and vice versa
- Change to a CPU instance from a GPU instance and vice versa
    
    <aside>
    💡 Switching between CPUs and GPUs might require some additional package installation and may increase Session resume time
    
    </aside>
    

#### Change instance type in the UI

Navigate to Session details to edit the instance type. Save changes to proceed.

![](/images/sessions/change-instance-type.gif)

#### Change instance type in the CLI

`grid session change-instance-type [OPTIONS] SESSION_NAME INSTANCE_TYPE`

- The session must be PAUSED in order for this command to succeed
- Specifying `--spot` allows you to change the instance to an interruptible spot instance
- specifying `--on_demand` changes the instance to an on-demand type, which cannot be interrupted but is more expensive.

(Extracted from [Grid CLI Reference](https://docs.grid.ai/cli/api#change-instance-type))