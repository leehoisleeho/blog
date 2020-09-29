---
title: CSS基础概念
date: 2020-09-29 17:03:22
tags: CSS
toc: true
cover: ./img/csslogo.jpg
---
## __CSS的历史__
* CSS全称_Cascading Style Sheets_ ，又称层叠样式表。
* 于1994年，哈肯·维姆·莱和伯特·波斯合作设计CSS。他们在1994年首次在芝加哥的一次会议上第一次展示了CSS的建议。
<!--more-->

## __层叠指的是什么__
* 样式层叠
可以多次对同一选择器进行样式声明
* 选择器层叠
可以用不同选择器对同一元素进行样式声明
* 文件层叠
可以用多个文件进行层叠

## __CSS的历史版本__
<div align="center" ><img src="./img/2.png"></div>

## __CSS语法__
* 样式语法
```css
选择器{
 属性名：属性值;
 /*注释*/
}
```
* @语法
```css
@charset "UTF-8"; //告诉浏览器用UTF-8的编码方式解析；必须放在第一行；
@import url(style.css); //从外部引入CSS样式；
@media (min-width:100px) and (max-width:200px){
   样式语法
} //当设备的最小宽度为100px,最大宽度为200px时，才会执行。
```

## __如何调试__
* Border调试法
```CSS
border:1px solid red;
```
怀疑某个元素有问题，就给这个元素加个border，border没有出现，说明选择器错了或者语法错了，border出现了，看看边界是否符合预期。

## __在哪查资料__
* Google搜索关键词时加MDN
* CSS tricks https://css-tricks.com/
* 张鑫旭的博客

## __CSS文档流__
<div align="center" ><img src="./img/1.png"></div>

* 流动方向
`inline`元素从左到右，达到最右才会换行
`block`元素从上到下，每一个都另起一行
`inline-block`元素从左到右，但是都是以块的形式存在，不会分离

## __元素的高度和宽度__
<div align="center" ><img src="./img/3.png"></div>

元素不分是内联还是块级元素，可以通过`display`来设置元素是块级元素还是内联元素。

* 宽度
`inline`元素的宽度为内部`inline`元素的和，不能用宽度来指定，可以由`padding`来把宽度撑开。
`block`元素默认自动计算宽度，默认是占满一行，但不是100%,但是不建议写宽度100%，可以由`width`来指定。
`inline-block`元素，默认宽度是有里面的内容来决定，但是也可以由`width`来指定。

* 高度
`inline`元素高度由`line-height`间接决定的，跟`height`无关。虽然可以通过padding来把inline元素撑开，但那不是它的高度，而是他的可视高地。
`block`元素高度由内部文档流元素觉得，可以通过`height`来设定
`inline-block`跟block类似，可以通过`height`来设定

## __overflow溢出__
* 当内容的宽度和高度大于容器的时候，会溢出容器。可以通过overflow来设置是否显示滚动条。
```CSS
overfow{
auto // 只有当文字溢出的时候，才会显示，不溢出就不会显示。
scroll // 不管是否溢出，都显示滚动条。
hidden // 直接隐藏溢出部分 
visible //默认设置，会显示溢出部分
}
```

## __盒模型__
<div align="center" ><img src="./img/4.png"></div>
* 盒模型有两种，一种是content盒模型/内容盒模型 ； 一种是border盒模型/边框盒模型。
content盒模型-内容就是盒子的边界。
border盒模型-边框才是盒子的边界。

* 公式
content-box width/height = 内容的宽度
border-box width/height = 内容宽度 + padding + border

## __margin合并__
* 哪些情况会发送`margin`合并
 父子`margin`合并
 兄弟元素`margin`合并


* 如何组织`margin`合并
 父子合并用`padding`/`border`挡住
 父子合并用`overflow:hidden`挡住
 父子合并用`display:flex`
 兄弟合并用`inline-block`消除

## __基本单位__
* 长度单位
px  像素
em  相对于自身font-size的倍数
%
整数

* 颜色
十六进制#FF6600 或者 #F60
RGBA颜色rgb(0,0.0)或者rgba(0,0,0,1) rgba最后的1，表示透明度，1代表不透明，0代表完全透明

资源来源:饥人谷
