---
title: CSS定位
date: 2020-10-02 03:11:02
tags: CSS
toc: true
cover: ./img/cssposition.jpg
---

## __position的五个取值__
`position`属性用来指定一个元素在网页上的位置。有以下五个属性值。
* `static`
* `relative`
* `absolute`
* `fixed`
* `sticky`
<!--more-->

<font class="ff6666">测速</font>

### __static属性值__
`static`静态的意思，是`position`的默认取值，如果省略`position`属性，浏览器就认为该元素是`static`定位。

### __relative,absolute,fixed属性值__
`relative` 、`absolute`、` fixed`这三个属性值有一个共同点，都是相对于某个<font color=#FF3333><b>基点</b></font>定位。不同之处仅仅在于<font color=#FF3333><b>基点</b></font>的不同。

*  `relative`相对的意思，表示相对于默认的位置,即<font color=#FF6666><b>定位基点</b></font>就是元素默认的位置。不会脱离文档流。只是浮起来，原先的位置所占的空间还在文档流中。用于做位移和给`absolute`元素做父元素。


* `absolute`绝对的意思，表示相对于离它最近的定位元素定位（必须是非static属性),即<font color=#FF6666><b>定位基点</b></font>是离它做最近的非定位元素。会脱离文档流，另起一层。`absolute`定位<font color=#FF3333><b>必须</b></font>就搭配`top`、`bottom`、`left`、`right`这四个属性里面的两个使用，不然有些浏览器会出现异常，用于做对话框的关闭按钮和鼠标提示。


* `fixed`固定的意思,表达相对于视口(viewport，浏览器窗口)进行偏移，<font color=#FF6666><b>定位基点</b></font>是浏览器窗口，这会导致元素的位置不会随着页面滚动而变化，好像是固定在网页上某个位置一样。他如果搭配`top`、`bottom`、`left`、`right`这四个属性一起使用，表示元素的初始位置是基于视口计算的，否则初始位置就是元素的默认位置。

### __sticky属性值__
* `sticky`粘滞的意思。可以理解成`relative`和`fixed`的结合。正常时候是relative的属性，待在自己该在的位置。当页面滚动到设置了`sticky`的元素的时候，他就会根据设置top、bottom、left、right来进行定位，属性有点像`flex`。

资料参考：
阮一峰CSS详解：http://www.ruanyifeng.com/blog/2019/11/css-position.html
饥人谷


(完)
