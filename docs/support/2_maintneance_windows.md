---
title: Maintenance Windows
sidebar_label: Maintenance Windows
---

New features, enhancements, and fixes are released during scheduled maintenance windows.

## During the Maintenance

In-progress Experiments and Sessions will continue to run and complete during the maintenance.
New and in-progress CLI, SSH, and WebUI connectivity could be degraded, intermittent, or unavailable.
Grid.ai is committed to continually minimizing the customer impact during the maintenance windows.

The current maintenance window are:

- 9 AM - 10 AM Eastern Mon - Fri

:::note
The maintenance windows can be shorter than the published maintenance window without notice.
A maintenance window that is longer than published will be reported in the [Incident History](3_service_levels.md).
:::

## After the maintenance
The upgrade components may require additional actions:
  
- Grid.ai CLI command will prompt for the suggested CLI upgrade below.  Please upgrade the CLI to continue. 
  ```
  Warning:
    A newer version of lightning-grid is available. To upgrade, please run: pip install lightning-grid --upgrade
  ```
- Grid WebUI may show a spinning Grid logo.  Please reload the page to continue.

- Grid Session SSH may have been lost.  Please re-establish the SSH connection.  If maintaining connection is critical, please use inside Grid Session `tmux`, `screen`, or other similar tools.


