---
title: "Useful git commands"
description: "A collection of some useful yet often forgotten git commands."
language: "javascript"
---

## To remove untracked files and folders.

```js
git clean -fd
```

## To see how contents of a file looked at a specific commit.

```js
git show <commit-hash>:<path_of_file>
```

## To see commit history with commit hash and commit message.

```js
git log --oneline
```

## To apply a single commit from another branch onto your current branch.

```js
git cherry-pick <commit-hash>
```

## To see who changed some specific lines of a file.

```js
git blame -L 10,20 <path_of_file>
```

## To move the HEAD of current branch to a specified commit.

**Description**: Due to use of --soft flag all the changes after this commit are not gone, they are staged. To unstage them but keep them in files use --mixed flag. To permanently remove all the changes from everywhere use --hard flag.

```js
git reset --soft <commit-hash>
```
