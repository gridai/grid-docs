---
description: Some best practices for using Grid
---


1. Always specify all the necessary package versions in the requirements.txt. Most dependency issues can be resolved by running ```pip freeze > requirements.txt``` in a place Grid has access to.
2. Don't use sessions for long running computations, instead use Grid run for async computations. The following steps will convert your notebook into a useable Python script by Grid:
    1. Click "file"
    2. Click "download as"
    3. Select "Python (.py)"

https://user-images.githubusercontent.com/47154698/146114392-7864e073-f332-4512-9a02-bec98f5e48e0.mp4
