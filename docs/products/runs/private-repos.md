# Private Repos

Grid Runs offers to solutions for using private repos:
1. Utilize the grid run --localdir option
2. Grant Grid access to your private GitHub repos

## Grid Run localdir Option
Currently, Grid has a good Github integration to allow running code from public or private repositories. We do not currently have integration support with other code repo providers like BitBucket, Gitlab, etc. We provide the --localdir feature within Grid run to allow users to run scripts from an arbitrary local directory, regardless of where that code is hosted. The main benefit of this feature is for users that do not need to grant Grid access to their code repository accounts. Below is an example usage of the grid run --local dir option.

```
grid run --localdir run.py
```

## Access Private GitHub Repos

By default you can only access public Github repositories on Grid. To grant read access to your private code navigate to Settings &gt; Integrations &gt; Grant access.

![](/images/platform/grant_github_access.gif)

## About private code

Grid does not save your code, look at it or compromise its privacy in any way.

When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code.

