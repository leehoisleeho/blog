---
title: JS函数
date: 2020-11-11 12:25:05
tags: javascript
toc: true
cover: ./img/JS1.jpg
---
> 函数也是一种对象，虽然看着很不像，但函数真的是一个对象，请接受这个结论，因为解释起来太抽象了。

<!--more-->

### __定义一个函数__
```javascript
// 具名函数
function 函数名(参数1,参数2,...){
	语句
	return 返回值
}

//匿名函数
let fn = function(参数1,参数2..){
	语句
	return 返回值
}

//箭头函数
let fn = (参数1,参数2..)=>{
	语句
	return 返回值
}
```
箭头函数如果只有一个参数可以省略`()`,函数内只有一个一个语句的话，也可以省略`{}`和`retrurn`

```javascript
let fn = (x,y) => {name:x,age:y}
// 会报错，因为JS不知道这是对象还是代码块。如果想要返回一个对象，要写成下面这样的代码
let fn = (x,y) => ({name:x,age:y})
// 用圆括号包起来，JS就知道要返回的是一个对象
```
```javascript
let fn1 = function fn2(){
	console.log("fn2")
} 
```
以上代码，是把一个具名函数内存的地址，传给`fn1`。这里要注意`fn2`在全局环境是找不到的，`fn2`的作用域只在`=`右边这个表达式。

### __函数调用__
```javascript
let fn = function(){
	console.log("Hello World")
}
```
`fn`表示函数本身，`fn()`表示调用这个函数

### __函数作用域__
JS采用的是词法作用域，也叫静态作用域。是指在词法分析阶段就已经确定了，不会随着函数的调用或是程序运行而改变。
以下是个例子
```javascript
let value = 1
function foo(){
	console.log(value)
}
function bar(){
	let value = 2
	foo()
}
bar() //1
```
函数`foo()` `bar()`和变量`value`是一级链，函数`bar()`调用进入了二级链，二级链里面又个`foo()`,此时进入`foo()`的作用域，`foo()`在最外层，所有就找到了`value=1`

```javascript
let a = 1
let fn1 = function(){
	let a = 2
	function fn2(){
		console.log(a)
	}
}
fn1() // 2
```
从以上两个例子可以得出结论：
1. 先确定函数所在的层级
2. 就近原则

### __函数的形式参数__
> 顾名思义，形式参数并不是实际参入的参数，只是表示这个函数接受这几个参数。

```javascript
let fn = function(x,y){
	return x*y
}
fn(1,2)
```
上面代码的`x`和`y`，并不是实际要传入函数的参数，只是我们在声明的时候，说明这个函数接受两个参数，在我们调用的时候`fn(1,2)`，这时`1`和`2`才是实际传入的参数。调用的时候`1`和`2`，会被赋值给`x`和`y`
```javascript
let fn = function(){
	var x = arguments[0]
	var y = arguments[2]
	return x*y
}
```
这个代码和上面的代码是等价的。

### __函数返回值__
只有函数有返回值，函数的返回值是`return`后面的东西。如果没有写`return`，函数的返回值就是`undefined`

<div align="center"><img src="./img/img1.jpg"></div>

上图所示，没有写`return`的时候，当我们调用`fn()`的时候，返回值就是`undefined`，需要注意的是，这里的`3`并不是函数`fn()`的返回值，而是`console.log()`打印出来的东西。

<div align="center"><img src="./img/img2.jpg"></div>

上图所示，写了`return`的时候，在调用`fn()`的时候，就没有了`undefined`

### __调用栈__
简单的说：JS引擎里面，在调用一个函数的时候，需要把函数的环境push到一个数组里面，这个数组就叫调用栈，调用栈有一个特点`先进后出`。等执行完又把环境pop出来。层层递进。
[什么是调用栈](https://blog.poetries.top/browser-working-principle/guide/part2/lesson08.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8)

利用递归的方法，可以查看出每个浏览器调用栈的大小。
```javascript
function fn(n){
	return n !== 1 ? n+f(n-1) : 1
}
```
以上代码，会不断的调用`fn()`直到`n=1`的时候。你停的调用，就会实现，调用栈一直处于压栈的状态，这样就可以测试出不同浏览器，调用栈的大小。

### __函数提升__
在申明具名函数的时候，不管写在那里，函数都会跑到第一行，跟`var`有点像。这里要注意只有具名函数会提升，匿名函数是不会被提升的。
```javascript
let fn1 = function(){
	console.log("hi")
}
```
以上代码只是把一个匿名函数，赋值给了`fn1`。`fn1`不会被提升。

### __箭头函数__
箭头函数里面没有`this`和`arguments`。

### __立即执行函数__
```javascript
! function fn(){
	console.log("立即执行")
}()
```
以上代码，不需要我们`fn()`了，他会立即被调用。

完
资料来源：
饥人谷
[浏览器工作原理和实践](https://blog.poetries.top/browser-working-principle/)
