---
title: "Linux Bash Shell on Windows 10"
date: 2016-10-04T11:53:00+07:00
tags: ["linux", "ubuntu", "windows"]
---

>Windows 10 with anniversary update now included Linux Subsystem that allow you to do scripting using Bash Shell. It's a full Ubuntu-based Based Shell that can run Linux Software on Windows.  

<!--more-->

Microsoft has successfull creating a Linux subsystem within Windows environment that allow us to do Linux's things using bash shell, including installing linux's software. This project was based on An Microsoft's Abandoned Project Astoria to run Android apps on Windows.

This Linux Subsystem is not a virtual machine, instead it's look and feel like native linux bash shell. It allows you to do things Linux terminal can do. Every linux bash shell command can be executed in this linux subsystem bash shell in Windows. 

Before getting this feature, first make sure you get the latest Anniversary Update from Windows 10. After you installed Anniversary update, enable Windows Developer Mode in `Settings > Update & Security > For Developers`.


<a href="/assets/contents/developermode.JPG" alt="Enabling Developer Mode">![Enabling Developer Mode](/assets/contents/developermode.JPG)</a>
<small><i>&raquo; Enabling Developer Mode</i></small>



Then go to control panel, on the left side panel click Turn Windows Features On and Off, then tick `Windows Subsystem for Linux (beta)`

<a href="/assets/contents/enablelinuxbash.JPG">![enabling Linux Subsystem](/assets/contents/enablelinuxbash.JPG)</a>
<small><i>&raquo; Enabling Linux Bash Feature</i></small>

This need you to restart and after restart search on cortana "bash", bash shell for linux subsystem will appear. Click it and it will automatically download and install depedencies for linux environment inside Windows Environment. This will take some times so make sure you internet connection is well connected because this action will be executed by downloading the depedencies from Windows Store. You won't find them on Windows Store by manually visiting the Store, so just wait this action will complete. after that, this will prompt you to insert UNIX username and password. Follow all instruction and after all done. Close the command line, and reopen it. Now once you search it on cortana, it will appears with Linux Ubuntu Icon,

<a href="/assets/contents/bashshellicon.JPG">![Linux Icon](/assets/contents/bashshellicon.JPG)</a>
<small><i>&raquo; Linux Bash Shell Icon</i></small>

Open it then you can do every Linux user did using their Bash in terminal. Keep in mind that there might be some limitations for further extension and configs for the features in linux that cannot be executed in this Linux Subsystem Bash Shell. But every basic scripting you did in linux command line like `sudo apt-get update, install, or remove` will work, including installing linux software using this bash shell will works fine. You don't need to install dual boot OS if you only to use bash shell to install some linux software that need linux to run with. 

This linux subsystem has its own folder inside `C:\Users\Fathir\AppData\Local\lxss`. You can access Windows folders and files from within this linux subsystem environment by accessing `cd /mnt/<your-windows-partition>`, for example you want to access `D:` from bash you can do `cd /mnt/d` and everything inside that path will look like the same with the ones inside your Windows folders and files. 

This is just a new way from Microsoft to avoid you to install dual-boot OS by installing the most you need to do in Linux environment that's bash shell including linux tools chain. This version is still in beta, which means there's might be some further development and updates, so keep updated. Have fun doing linux things inside Windows 10.