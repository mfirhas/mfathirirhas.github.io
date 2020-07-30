---
title: "Git Branching Model"
date: 2017-09-30T11:30:00+07:00
tags: ["git", "version-control"]
---
>Branch is what made Git flexible and reliable in writing code. The branches are independent which you can use to maintain your code efficiently without breaking things. Here is one of many ways you'll branch your git repo.
<!--more-->

# Branching Model
*Read this before continue:* [How to Git](https://mfathirirhas.github.io/blog/programming/2017/09/30/how-to-git/)


How to branch local workspace and remote server.


## For each individual Local Workspace
- Main Local Branches: 
  - `*master*` **: **created as default branch. Used as **Production Branch** to control *production versioning and release.* Each commit in *master* branch will mostly consist version commit with tag(e.g v1.0.2)
  - `*dev*` **: main branch for development process. Used as **Development Branch** to control *development progress and product features.* Each commit in *dev* will mostly consist features and fixes. (e.g f-userlogin(feature user login) , fix-buttonredirect(fix button redirect anomaly), etc) **


- Additional Local Branches:
  - `*f-<featurename>*` **: for the sake of naming convention, we use prefix `f-` to denote this branch as working branch for features(e.g login, registration, oauth, bank transfer, etc). Each progress to this branch will be added to minor changes in versioning → v1.x.0. `x` will increment for each feature added.
  - `fix-<what-to-fix>` : naming convention use prefix `fix-` for each fixes after sprint preview by mbak putri. Each progress to this branch will be added to patches in versioning → v1.0.x. `x` will increment for each fix fixed.



## Remote Server(PDC)
- Main Remote Branches:
  - `*master*` **: **contains all commits ready for production releases. Pushed from master in local branch.
  - `*dev*` **: contains all commits for development process. Pushed from dev branch in local branch.


- Additional branches
  Additional branches will be created if one/more developers push their special branch to remote server to be previewed by head/senior developer before merging. 
  Naming convention: `b-<developer-name>` 

