---
title: HTML重点标签
date: 2020-09-24 08:36:25
tags: HTML
toc: true
---
## __英语小课堂__

|英文|翻译|英文|翻译|英文|翻译|
|----|----|----|----|----|----|
|hyper|超级|target|目标|refer+ence|引用|
|frame|边框|erroe|错误|blank|空白|
|parent|父母之一|self|自己|load|加载|
|canvas|画布|
<!--more-->

## __前端开发打开HTML文件的正确姿势__

1 http-server -c-1 //-c缓存 缓存等于-1 就是不要缓存
2 parcel xxxx.html

## __a标签__

* 作用：跳转到一个页面，跳转内部锚点，发邮件打电话
* 常用属性

1 __herf__
  * 网址
  * 路径
  * 文件名 
    配合download使用，这样a标签就变成了一个下载按钮，可以下载该文件。
  * 伪协议: javascript:; mailto:邮箱 tel:电话号码 
    javasctipt:; 里面如果写js代码，就可以执行js命令，如果什么都不写，就会变成一个点击以后没有任何动作的a标签。
  * id
    href="#xxx" 可以跳转到本页面，id为xxx的元素上。

2 __target__

  * `_blank` 在空白的页面上打开。
  * `_self` 在当前页面打开，是默认值
  * `_top` 配合`ifram`e理解,当一个页面里面，有一个iframe，iframe里面的a标签，target是`_top`的话，就在<font color=red>最上层</font>页面打开。 
  * `_parent` 配合iframe理解，当一个页面里面，有一个iframe，iframe里面的a标签，target是`_paren`t的话，就在<font color=red>上一层</font>的页面打开
  * xxx 在一个新的窗口打开并且把该页面命名为xxx，以后再新打开的窗口都会在xxx打开。利用一个窗口打开新的页面。例子：youku防止用户不看广告，所有新开的视频都在一个页面上打开。
  * iframe 便签的name ，可以在不同的iframe打开。

3 __download__ 
  * 只写`download`，就会把整个网页都下载下来。
  * `download='xxxx'` 就是下载的文件命名为xxx

## __iframe标签__
   作用：在网页内内嵌一个窗口。（已经很少使用，只有很多古老的网站还在使用）

## __table标签__
   table里面要包含 thead tbody tfoot
   ```html
   <table>
     <thead>
       <tr>  //table raw 表格里的一行
       	 <th>英文</th> //table head 表头
         <th>翻译</th>
       </tr>
     </thead>
     <tbody>
	<tr>
	 <td>table</td> //table data 表格里的数据
         <td>表格</td>
	</tr>
     </tbody>
     <tfoot></tfoot>
   </table>
   ```
## __img标签__
   * src="图片的地址也可以是相对路径"
   * alt="xxxx" 图片下载失败的时候，提示用户alt里面的内容
   * width，height 单独写一个，图片会自适应
   * max-width:100% 图片会根据屏幕大小自适应

## __form标签__
  __作用__ :表示文档中的一个区域，此区域包含交互控件，用于向 Web 服务器提交信息。
  __属性__
  * action:xxx 请求一个页面
  * method:get/post 控制请求是get还是post
  * autocomplete:on/off 可以自动建议之前输入过的用户名
  * target:xxxx 提交到那个页面，该页面更新
form标签里面必须有一个type=submit的东西，不然form就不会提交。

## __input标签__
  * __作用__ :包含在form标签里面，以便接受来自用户的数据; 可以使用各种类型的输入数据和控件小部件
  属性太多，具体参考[MDN input](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input)

参考资料:饥人谷




