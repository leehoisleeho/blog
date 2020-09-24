---
title: HTML标签
date: 2020-09-22 17:12:59
tags: HTML
toc : true
---
## __英语小课堂__

|英文|翻译|英文|翻译|
|----|----|----|----|
|heading|标题|body|身体，正文|
|paragraph|段落|section|章节|
|article|一篇文章|main|主要|
|aside|旁边的|anchor|锚点，定点|
|strong|强壮，重要|emphasis|强调|
|order|顺序|ordered|有顺序的|
|unordered|无顺序的|description|描述|
|term|术语|data|数据|
|quote|引用|block|块|
|inline|行内，内联|break|打断|
<!--more-->

推荐书籍《[网道HTML教程](https://wangdoc.com/html/)》阮一峰的网络文档。
推荐工具 [JSbin](https://jsbin.com/?html,output) [代码沙盒](https://codesandbox.io/) 测速代码的时候可以用。

## __HTML起手式__
```HTML
<!DOCTYPE html>  //文档类型
<html lang="zh-CN"> //html标签
<head>
    <meta charset="UTF-8"> 》//文件的字符编码
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">  //防止页面缩放
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>  //告诉IE用最新的内核渲染页面
    <title>Document</title>  //网页的标题
</head>
<body>
    <div class=""></div>
</body>
</html>
```

## __章节标签__

标题 `h1~h6`
章节 `section`
文章 `article`
段落 `p`
头部 `header`
脚部 `footer`
主要内容 `main`
划分 `div`
其实我觉得html标签就是根据标签的语义，在网页合理使用。让网页看上去是有结构的。

## __全局属性(所有标签都有的属性)__
`class` 类
`contenteditable` 可以让该标签内的内容可以被编辑
`hidden` 让一个东西看不到
`id` 
`style` 样式
`tabindex` 用「Tab」键可以在页面里面切换
`title`鼠标浮动到元素上，可以显示title的内容

## __内容标签__
`ol + li` 有序列表
`ul + li` 无序列表
`dl + dt + dd ` 描述列表
dl = description list 描述列
dt = description term 描述的术语
dd = description data 描述的数据

`pre`  在pre里面的段落，可以保留标签内的格式
`code` 里面可以写代码
`hr` 分割线
`a` 超链接标签
`em` 强调 语气
`strong` 强调 本质
`quote` 引用标签 属于内联标签
`blockquote` 引用标签 属于块级标签


资料参考：饥人谷























