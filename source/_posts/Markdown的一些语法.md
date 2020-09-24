---
title: Markdown的一些语法
date: 2020-09-21 17:27:31
cover: ./img/markdown.jpg
tags: markdown
toc: true
---

* __字体加粗__
```markdown
__内容__
```
<!--more-->
* __插入入图片__
```markdown
![图片的描述](图片的地址)
```
这样插入的图片，无法控制大小，和位置（默认都是靠左）


* __插入控制大小和位置的图片__
```html
<div align="center"><img src = "图片地址" width = 50%></div>
```
markdown里面居然还可以写HTML，惊了...

* __给文字加入超链接__
```markdown
[文字]( url )
```
* __表格__
```markdown
|标题1|标题2|标题3|标题4|
|----|----|----|----|
|内容1|内容2|内容3|内容4|
```
* __文字字体颜色大小__
```markdown
<font color="red" face="微软雅黑" size=7>我是字体</font>
```

