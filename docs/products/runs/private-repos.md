# Private Repos

Grid Runs offers to solutions for using private repos:
1. Utilize the grid run --localdir option
2. Grant Grid access to your private GitHub repos

## Grid Run localdir Option
Grid has a good Github integration to allow running code from public or private repositories. This feature enables users to run scripts from an arbitrary local directory, even if the code is not hosted on Github. The main benefit of this feature is for users that do not need to grant Grid access to their GitHub accounts. Below is an example usage of the grid run --local dir option.

```
grid run --localdir run.py
```

## Access Private GitHub Repos

By default you can only access public Github repositories on Grid. To grant read access to your private code navigate to Settings &gt; Integrations &gt; Grant access.

![](/images/platform/grant_github_access.gif)

## About private code

Grid does not save your code, look at it or compromise its privacy in any way.

When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code.

