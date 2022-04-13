---
title: Periodic Upload
sidebar_label: Periodic Upload
---
# Periodic Upload
## Upload on a timer

In certain cases, your data might change periodically and you might want to update your
datastore on a predictable schedule (e.g. every hour or every day), You can configure
[`crontab`](https://man7.org/linux/man-pages/man5/crontab.5.html) to do this automatically
for you. 

Here's an example program that uploads a new version of a datastore every hour:

```bash
#write out current crontab
crontab -l > mycron

#run datastore upload every hour every day
echo "0 * * * * grid datastore create data/path --name dataset" >> mycron    

#install new cron file
crontab mycron
rm mycron
```