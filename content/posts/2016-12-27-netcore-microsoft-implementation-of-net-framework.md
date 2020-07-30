---
title: ".Net Core: Microsoft Open Source and Cross-platform Implementation of .Net Framework"
date: 2016-12-27T10:00:00+07:00
tags: [".Net", "windows", "microsoft", "open-source", "cross-palform"]
---

>Microsoft now get to open source world by implementing cross-platform ability for its .Net Framework. This new cross-palform and open source framework is called .Net Core.
<!--more-->

# What is .Net Core
.Net Core is a free, cross-platform and open source of the similar .Net framework. .Net Core has the CoreCLR which is the complete cross platform implementation of CLR.
To make it compatible each other, there are shared libraries and APIs that will make .Net apps work in many platform and OS. Also the .Net Core CLI which is an execution entry point for operating systems
and provides developers many services like compilation, package managers, etc.

# Why?
I think that Microsoft admit its deficiency in open source and cross platform world and realize that many developers love open source. Other reason is that some survey said that some programmers/developers hate standarization and establishment toward certain tools for 
certain platform because it will curb them toward it. Microsoft actually has some open-source and cross-platform implementation in some fields like mobile development using xamarin which is very promising 
but it still cannot defeat the popularity of Android Studio and other JS hardcore cross-platform framework. Some other thing telling the reason why Microsoft jump into open-source world is because the myth
telling us that people still hate how Microsoft cage everything in them, patent them, standarize them, controll them, and make developers pay in the end. However, Microsoft in the end make every tools it has free,
including free Visual Studio Community(IDE) with its xamarin framework in it, visual studio code(cross-platform editor), and now make their .Net Framework open for community and it will be a great jump into open-source world till its RTM version.

# Features?
.Net Core provide some features:

- CoreFX: .Net Core Foundational libraries
- CoreCLR: Runtime for CLR languages(for future development ofc).
- CLI: .Net Command Line tools
- Roslyn: .Net Compiler platform
- ASP.Net Core: Web dev framework
- Console Apps: Command Line Apps.
- UWP: Universal Windows Platform Development.

# How?
The current version is 1.0.0-preview2-1-003177 and still in preview. So please keep in mind that there will be many changes in the future for its RTM/released version.
For current version do the following to get things work:

- In order to do .Net mainly using C# and ASP.Net PL in cross-paltform download .Net Core in [.NetCore](https://www.microsoft.com/net/core/platform) and install.
- If you use visual studio, you can download it directly from nuget.
- Because the purpose of this .Net Core is its cross-platform, hence we implement it using code editor and command line. For this purpose you can use any code editor(because ofcourse).
- To create new Console Apps, type `dotnet new` to initialize new C# Console Apps Project.
- Then type `dotnet restore` to create json config file which is needed for executing the file.
- type `dotnet run` to run the console apps.

Other option to create ASP.Net Core is to install [Yeoman](http://yeoman.io/) ASP.Net generator by typing:

- `npm install -g generator-aspnet` (make sure you have installed nodejs)     
- then type `yo aspnet`     
- There are many options available from this menu including Console Apps, so you can create console apps using Yeaoman.
- Pick the option "Web Application", then every folders and files will be set up for you.
- type `dotnet restore` and `dotnet run` to run it in local server.

Side note is to install [Omnisharp](http://www.omnisharp.net/) for the ease of .Net Cross Platform development which provides many tools including local server to run ASP.Net although .net core provide [Kestrel](https://github.com/aspnet/KestrelHttpServer) a web server for ASP.Net Core.


<i>PS: Once again this is still in preview, not RTM yet, so careful when deciding .Net Core/ASP.Net core for your future business apps if you set it up now, because there will be many changes and updates until the RTM version.</i>     

