---
title: CSS布局
date: 2020-09-29 18:29:46
tags: CSS
toc: true
cover: ./img/csslayout.jpg
---
## __布局是什么__
* 把页面分成一块一块的，按左中右，上中下排列

## __布局分类__
1. 固定宽度布局，一般宽度为960px/1000px/1024px
2. 不固定宽度布局，主要靠文档流的原理来布局
3. 响应式布局，意思就是pc上固定宽度，手机上不固定宽度。是一种混合型的布局。
<!--more-->

## __布局思路__
<div align="center"><img src="./img/1.png"></div>

## __float布局__
* float布局会让元素脱离文档流。
* 在子元素上加上`float:left/right` 
* 因为float让元素脱离了文档流，父元素就“包不住”子元素，为了避免异常发生，所以父元素上需要清除浮动。
```css
.clear{
 content:"";
 display:block;
 both:clear;
}
```
把`clear`这个类名加到父元素的类上，就可以清除浮动。

## __负margin__
在做平均布局的时候，最后一个元素的margin-right生效，因为空间不够，会把最后一个元素挤到下一排，现在我们可以用一个容器把元素包起来，然后在设置负margin，就可以让最后一个元素不被挤到下一排。因为正数的margin会让元素移动，但是如果margin的值是负数的话，就会让元素让css读取的空间增加。

## __:nth-child()选择器__
平均布局除了可以用负margin来解决，也可以用`:nth-child()`选择器，来解决，可以选择到最后一个元素的margin-right为0，来解决被到下一排的问题
```html
.parent div:nth-child(5){
   margin-right:0px;
}
<div class='paretn'>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```
## __flex布局__
Flex是`Flexble Box`的缩写，意为'弹性盒子'，用来为盒模型提供最大的灵活性。
任何一个容器都可以指定为flex布局
```css
.box{
  display:flex;
}
```
行内元素也可以使用flex布局
```css
.box{
  display:inline-flex;
}
```
设置为flex的元素，子元素`float`、`clear`、`vertical-align`属性就会失效。

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

### __容器的属性__
```css
flex-direction  //决定项目的排列方向
flex-wrap  // 怎么样换行,默认情况下，元素都会在一行，不会换行
flex-flow  // flex-direction和flex-wrap的缩写
justify-content // 主轴的对齐方式
align-items // 定义项目在交叉轴(垂直)上如何对齐
align-content // 多行内容，如何排列
```
### __flex-direction__
决定主轴的方向，即项目的排列方向
<div align="center"><img src="./img/2.png"></div>
```css
.box{
 flex-direction:row | row-reverse | column | column-reverse
}
```

* `row`(默认值)：主轴为水平方向，起点在左端
* `row-reverse`: 主轴为水平方向，起点在右端
* `column`:主轴垂直方向，起点在上沿
* `column-reverse`：主轴为垂直方向，起点在下沿


### __flex-wrap__
默认情况下，项目都会排在一条线上，`flex-wrap`定义，如果一条线上排不下，是否换行。
 	<div align='center'><img src='./img/3.png'></div>
```css
.box{
	 flex-wrap: nowrap | wrap | wrap-reverse;
}
```
* `nowrap` 默认属性，默认情况不管多少元素都是排在一行
* `wrap` 换行，空间不够就换行
* `wrap-reverse` 也是换行，不过是反过来的

### __flex-flow__
`flex-flow`属性是`flex-direction`和`flex-wrap`属性的缩写形式，默认值为`row  nowrap`。
```css
.box{
flex-flow: <flex-direction> || <flex-wrap>;
}
```

### __justify-content__
`justify-content`定义项目在主轴上的对齐方式。
```css
.box{
justify-content: flex-start | flex-end | center | space-between | space-around|
}
```
<div align='center'><img src='./img/4.png'></div>

`flex-start` 默认值，左对齐
`flex-end` 右对齐
`center` 居中
`space-between` 两端对齐，项目之间的空间都相等
`space-around` 每个项目两侧间隔都相等。
`space-evenly` 每个项目之间的距离都是相等的.
### __align-items__
`align-items`属性定义项目在垂直方向上如何对齐。
```css
.box{
align-items: flex-start | flex-end | ceneten | baseline | stretch；
}
```
<div align='center'><img src='./img/5.png'></div>

`flex-start` 垂直的起点对齐
`flex-end`垂直方向的重点对齐
`center`垂直方向的中点对齐
`baseline`项目的第一行文字的基线对齐
`stretch`默认值，如果项目没有设置高度，将占满容器的高度

### __align-content__
`align-content`属性定义多跟轴线对齐方式，如果只有一跟轴线改属性不起作用。
```css
.box{
align-content: flex-start | flex-end | center | space-between | space-around | stretch |
}
```

<div align='center'><img src='./img/6.png'></div>

`flex-start`与交叉轴的起点对齐
`flex-end`与交叉轴的终点对齐
`center`与交叉的中点对齐
`space-between`	与交叉轴两端对齐，轴线之间的间隔平均分布
`space-around` 每跟轴线两侧间隔都相等
`stretch`轴线占满整个交叉轴，默认值

### __项目属性__
### __order__
定义项目的排列顺序，数值越大，排列越靠前，默认为0
```css
.item{
order:<整数>
}
```
<div align='center'><img src='./img/7.png'></div>

### __flex-grow__
定义项目的放大比例，默认为0，就是如果存在剩余空间，也不放大。
```css
.item{
flex-grow:<数字>
}
```
<div align='center'><img src='./img/8.png'></div>

如果所有项目的`flex-grow`属性都为1，则他们将等分剩余空间。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项目多一倍

### __flex-shrink__
`flex-shrink`定义了项目缩小的比例，默认是1即如果空间不足，项目将怎么缩小。
```css
.item{
flex-shrink:<数字>
}
```
<div align='center'><img src='./img/9.png'></div>

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小，如果一个项目的`flex-shrink`属性为0，其他项目为1，则空间缩小的时候，前者不缩小。

### __flex-basis__
定义了在分配多余空间之前，项目占据主轴空间，浏览器根据这个属性，计算主轴是否有多余空间，它的默认值为0，即项目的本来大小。

### __flex__
`flex`属性是`flex-grow`,`flex-shrink`和`flex-basis`的缩写

### __align-self__
`align-self`属性允许单个项目与其他项目不一样的对齐方式，可以覆盖`align-items`属性
<div align='center'><img src='./img/10.png'></div>


资料参考：
阮一峰flex布局教程：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
饥人谷


