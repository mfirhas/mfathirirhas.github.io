---
title: "Semantic Versioning"
date: 2017-10-07T01:35:00+07:00
tags: ["software", "web"]
---
>One of important thing in Software Engineering process is versioning. Keep every things in record and track every progress and state of development.  
<!--more-->

# Semantic Versioning
How to version Software Development
src: 

- https://www.sitepoint.com/semantic-versioning-why-you-should-using/
- http://semver.org/


## Format
    vX.Y.Z


- X = Major Version
  When you do make big changes to the software or APIs. Also when you break existing APIs or doing some refactoring.
- Y = Minor Version
  When you do add some features/functionalities that’s ready for release in dev testing(e.g each sprint). For example every sprint done with the features will increment the Y.
- Z = Patches/Bugs Fixes/Issues Fixes
  When you do some bugs fixing, issues fixing or adding some patch.


## Workflow

Use Git feature called `tag` which will tag commit that is ready for incrementing the version number.
**Tag Current Commit**
*unannotated:*

    git tag vX.Y.Z

*annotated:*

    git tag -a vX.Y.Z -m "tag message"

**Tag Previous Commit**
*unannotated:*

    git tag vX.Y.Z <commit_id>

*annotated:*

    git tag -a vX.Y.Z <commit_id> -m "tag message"

