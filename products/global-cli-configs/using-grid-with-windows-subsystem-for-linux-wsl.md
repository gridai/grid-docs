---
description: Grid CLI support for Windows operating system
---

# Windows support

## Official support

Support for Windows is coming! In the meantime use WSL as a work-around

## WSL (Windows subsystem for Linux)

WSL allows Windows users to run Linux shells.&#x20;

## Step 1: Install WSL&#x20;

Click here to install it: [Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

Enable the Windows Subsystem for Linux PowerShell

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem- Linux /all /norestart
```

Enable the PowerShell VM

```bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

## Step 2 - Update the package&#x20;

### Download the [WSL2 package](https://wslstorestorage.blob.core.windows.net/wslblob/wsl\_update\_x64.msi)&#x20;

### Configure the system

Once you run the WSL Ubuntu will be able to access directory on your C drive. Access windows local drive:\


```bash
/mnt/c/dev/myproj 
```

Configure system with python and java:&#x20;

```bash
sudo apt update && upgrade 
sudo apt install python3 python3-pip ipython3 
sudo apt-get install openjdk-8-jdk
```

### Download Grid CLI

```bash
pip install lightning-grid --upgrade
```

### Login

```bash
grid login
```
