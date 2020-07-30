---
title: "Git Workflow"
date: 2017-09-30T11:50:00+07:00
tags: ["git", "version-control"]
---
>Git will change the way you develop program/code. With Git, every code, progresses, features, you wrote will be recorded in something called commit. Working in team will require some workflow for you to optimize the use of this version control. Here's one many ways you can use git.
<!--more-->

# Git Workflow
How to work with Git for versioning and team works.


*Read this before continue:* [How to Git](https://mfathirirhas.github.io/blog/programming/2017/09/30/how-to-git/) , [Branching Model](https://mfathirirhas.github.io/blog/programming/2017/09/30/git-branching-model/)


Article recommended to read for insights:

- [Successful Git Branching Model](http://nvie.com/posts/a-successful-git-branching-model/) 
- [Git Workflow Comparison](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Git Best Practice for Small Team](http://moveelo.com/blog/git-best-practices-for-teams)
- [Git Cheat Sheet](https://www.git-tower.com/blog/git-cheat-sheet/)



## Sync Up 

All developers must sync their local with remote. Make sure our local working directory synced up with remote server. This is for equalize the version for each developer. **So, all developers have same codebase and same git history**. There are 2 main branch in remote: *master* and *dev.* 

- First, clone remote repo using:
    git clone <remote_url>


- Change directory to that cloned folder:
    cd <path>


- Continue working in *dev* branch by checking it out from cloned remote branch:
    git checkout dev 

Now you’ve been set up and synced up with remote server.



## Working on Dev Branch

Best practice git workflow suggest that you have to work on separate branch from your master branch. As our master branch is set up as **Production Branch(branch for production release),** so we will be working on *dev* branch. So checkout to your *dev* branch:

    git checkout dev



## Adding Features/Functionalities

Best practice git workflow suggest that everytime you want to add new feature(e.g login), or new functionalities, you have to work it on separate branch that branched off from *dev* branch. 

Create new branch from *dev* everytime you want to work on new features using:

    git checkout -b f-<featurename> dev

*naming convention: for every feature add prefix* `*f-*` 


## Merge Feature into Dev

After finishing working on feature in feature branch, add all files, commit and merge it back to dev by using:

- Add all files we edit:
    git add -A


- Commit them:
    git commit -m "commit message"


- Checkout to *dev* branch:
    git checkout dev


- Merge feature branch:
    git merge --no-ff f-<featurename>


- After finished merging the features to *dev* branch. That feature branch is no longer needed, so we remove that unnecessary branch from our local branch list by:
    git branch -d f-<featurename>



## Bug Fixing

Same with adding new features, everytime we found issues/bugs, fix them in new branch. Using the same way as creating feature branch, we create fixes branch using:

    git checkout -b fix-<fixname(e.g UDI-33_gabisaregistrasi)> dev

Add, commit and merge back the fixes into *dev* branch using the same way as merging feature branch.

    git add -A
    git commit -m "commit message"
    git checkout dev
    git merge --no-ff fix-<fixname>
    git branch -d fix-<fixname>


## Push to Dev Remote Server

After you’ve made sure your local dev works succeed with no bugs, push to remote server *dev* branch. While still in *dev* branch:

    git push origin dev:dev

we push our local *dev* branch to remote *dev* branch.



## Pull Remote Dev Branch

After other developers finishing their works on dev and pushing it to remote dev. Update your local dev by pulling updates from them by using:

    git checkout dev
    git pull origin dev


## Merge Dev to Master

After finishing some features and ready for production release, merge dev into *Master* branch and tag it with version iteration(e.g v1.0.2). Commit all edits in *dev* branch and do:

    git checkout master
    git merge --no-ff dev

After merge finished, push our updated master(production release) to remote server by using:

    git push origin master:master



## Deploying to Server

**Deploy to Dev Server**

- Checkout *dev* branch:
    git checkout dev


- Make sure no changes uncommitted:
    git status

make sure the status is clean:

    On branch dev
    nothing to commit, working tree clean


- If all is clean. Use codebase from *dev* branch for development server.

**Deploy to Prod Server**

- Merge all changes from *dev* branch. While still in *dev* branch:
    git checkout master
    git merge --no-ff dev


- Tag that merge commit with version number
    git tag -a v0.1 -m "tag message" master


- Push to remote master along with the tag.
    git push --follow-tags origin master:master



## Sync Local Master Branch

After one developer/release manager push to master as production release. Every other developers must update their local master branch by pulling it from remote master:

    git checkout master
    git pull origin master
