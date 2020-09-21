---
title: git的基本操作和Github
date: 2020-09-21 07:20:43
tags: 'git'
---
# git的基本操作
__配置本地的git__
```git
git config --global user.name你的英文名
git config --global user.emai1你的邮箱
git config --globa1 push default simple
git config --global core. quotepath false
git config --global coreeditor code --wait
git config --globa1 core. autocrif input
```
<!--more-->
__1.初始化本地仓库__
```git
git init
```
操作完以后，本地会多出一个.git的目录，里面会记录各个版本的变化，如下图所示。
![](./img/1.png)
__2.把需要变动的内容提交到暂存区__
```git
git add 路径  //提交某个路径下的文件
git add .     //把当前目录的所有文件提交到暂存区
```
__3.描述哪些文件不提交__
```git
touch .gitignore
vi .gitignore 
```
.gitignore文件是描述哪些文件不会被提交到暂存区。把不需要提交的文件名写到.gitignore里面，就不会被提交。

__4.把暂存区的文件提交到.git目录__
```git
git commit -m 字符串 //提交并说明理由，字符串里面如果有空格，就要用引号包起来
git commit -v //会弹出对话框，告诉你这次提交变更了什么
```
__5.查看git的版本号__
```git
git log 查看当前版本号之前历史版本
git reflog 查看所有git的历史版本
```
__6.回到之前的版本__
```git
git reset --head xxxxxx
```
以上的xxxxxx代表版本号，可以通过git log 和 git reflog 来查看，需要回退的版本。

__7.创建分支__
```git
git branch xxx
```
创建一个分支，并命名为xxx

__8.删除分支__
```git
git branch -d xxx
```
删除分支xxx

__9.切换分支__
```git
git checkout xxx
```
切换分支到xxx ，默认的分支名是master

__10.将一个分支合并到当前分支__
```git
git merge xxx
```
将xxx分支合并到当前分支

-------

# git远程仓库GitHub
> GItHub就是用来备份本地 `.git` 而已，没有什么高科技原理。

__1.生成ssh key__
```git
ssh-keygen -t rsa -b 4096 -C 'your Email'
```
连续点3个回车，就可以下载到本地目录了

```git
cat ~/.ssh/id_rsa.pub
```
得到公钥内容，复制到Github个人设置里面就可以了

__2.Github上创建一个远程仓库__
![](./img/2.png)
github个人主页创建仓库
![](./img/3.png)
描述仓库的名称，并且生成仓库

__3.把本地目录上传到远程仓库__
```git
git remote add origin git@xxxxxxx
```
`origin` 是远程仓库的默认名字，可以换，但是建议不要换
`git@xxxxxx` 是远程仓库的地址

```git
git push -u origin master
```
第一次推送需要写全，以后写`git push`就可以了，这段代码的意思是推送本地master分支到远程仓库origin的master分支。
如果提示`git pull` 就`git pull`。提示`git pull`是因为本地代码与远程仓库有不同，所以`git pull`就是让本地和远程仓库保持一致。

__4.上传其他分支到github__
```git
git push origin x:x
```
提交分支x到远程仓库origin的x分支

```git
git checkout x
git push -u origin x
```
先切换到x分支，然后在x分支推送到远程仓库

__5.下载远程仓库的代码__

```git
git clone git@?/xxx.git  //会在当前目录创建一个xxx目录
git clone git@?/xxx.git yyy  ///会在本地新建yyy目录
git clone git@?/xxx.git . //不会新建目录，会在当前目录来装代码和.git
```
第三种方法最后当前目录是一个空目录，不然容易覆盖之前的.git，很危险。

__6.git通灵术__
```git
git stash 文件  //把某个文件临时藏起来
git stash pop 文件  //把某个文件释放出来
```

资料参考:饥人谷
 
