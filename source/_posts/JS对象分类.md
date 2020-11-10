---
title: JS对象分类
date: 2020-11-06 04:09:19
tags: javascript
toc: true 
cover: ./img/JS3.jpg
---
### __构建函数__
```javascript
function Person(name,age){
this.name = name
this.age = age
}
Person.prototype.shcool = "第二小学"
let person = new Person("leeho",10)
```
<!--more-->
现在我们要把第二小学里的每个学生都定义成一个对象，每个学生对象要包含`name` `age` `shcool` ,一个学校里面有很多个学生，每个学生对象的私有属性是`name`和`age`,共有属性是`school`都来自第二小学，我们就可以通过构建函数的方式，来创建每个学生的对象。
我们先定义一个构建函数`Person`，它接受两个参数`name`和`age`。`Person`的原型`prototype`里面包含着，要创建的每个对象的共有属性`shcool=第二小学`
然后通过`new`关键字，就可以创建出一个新对象，新对象的`name` `age`是我们Person传入的的参数，新对象的`__proto__`里面有就有了`Person`的`prototype`里的`shcool = "第二小学"`这个共有属性

### __new关键字__
`new`关键字,做了什么：
1. 创建了一个空对象。
2. 为空对象关联原型，原型地址指定为构建函数的`protoytpe`
3. 将空对象赋值给`this`关键字

`new`作用是执行构造函数，并且返回一个实例对象

### __this关键字__
```javascript
let obj = {
name:"leeho",
sayHi:funcition{console.log("大家好，我叫"+this.name)}
}
```
作为对象属性的函数，叫做这个对象的`方法`。对象里面的`方法`，需要调用这个对象的里面属性的时候，就会使用的到`this`,以上代码，sayHi被调用的时候，里面的`this`就是obj
#### __this的值到底值什么__
要理解`this`必须记住以下两点
1. `this`永远指向一个对象。
2. `this`的值是什么，完全取决于函数调用的位置。

```javascript
funcition sayHi(){
console.log(this.name)
}
var obj ={
	name:"leeho",
	sayHi:sayHi
}
var name = "frank"

obj.sayHi() // "leeho"
sayHi() // "frank"
```
要理解以上代码，必须知道`var`声明的变量会自己动绑定到`window`上，会变成`window`的一个属性。
当我们`obj.sayHi()`这样调用`sayHi()`的时候，`sayHi()`运行的环境是在`obj`这里对象里面，所以里面的`this`是指向`obj`的，自然就会`obj`里面的属性`name`，打印出来就是`leeho`
当我们`sayHi()`这样调用的时候，`sayHi`的运行环境是在`window`上，因为我们用`var`声明了`name`,`name`变成了`window`上面的属性，所以打印出来就是`frank`,其实当我们`sayHi()`这样调用函数的时候，其实是这样的`window.sayHi()`
通过以上代码，我们就可以知道，`this`到底是什么值，取决于是谁在调用`this`。

```javascript
var obj = {
	name:"leeho",
	sayHi:funcition(){
		console.log(this.name)
	}
}

var obj1 = obj.sayHi

obj.sayHi()  // "leeho"
obj1() // undefined
```
以上代码，`obj.sayHi()`打印出`leeho`，很好理解，但是`obj1()`为什么会打印出`undefined`呢？那是因为`obj1 =obj.sayHi` ，这个操作只是把函数`sayHi`的内存地址传给`obj1`，当我们`obj1()`的时候，其实`sayHi()`的运行环境还是在`window`上，所以打印出了`undefined`

#### __call()和apple()__
函数作为对象提供了`call()` `apply()`方法，他们也可以用来调用函数，这两个方法都接受一个对象作为参数，用来指定本次调用时函数中this的指向；
__call()__
> call()的语法规则
函数名.call(对象,参数1,参数2...)
接受一个对象，和函数的参数

```javascript
obj1 = {name:"leeho"}
obj2 = {name:"frank"}
funcition sayHi(age){
console.log("大家好，我叫"+this.name+"我今年"+age+"岁")
}
sayHi.call(obj2,33)  //大家好，我叫leeho，我今年33岁
sayHi.call(obj2,18)  //大家好，我叫frank，我今年18岁
```
以上代码可以看出，call可以指定一个函数在被调用时，函数中的this指向。

__apple()__
> apple()的语法规则
函数名.call(对象,[参数1,参数2,参数3...])
其实apple跟call的功能是一样的,只是他接受参数，是以数组方式的。

### __类型和类__
* 类型指的是JS的7种数据类型，`数字` `字符串` `undefined` `null` `布尔值` `Symbol` `对象`
* 类指的是JS里对象的分类，有无数种，常见的有`数组` `函数` `Date` `RegExp`等等

### __class语法__
ES6引入了class语法，可以定义一个类，我的理解，class是构造函数的语法糖，原理基本一样，只是更方便理解。
重写定义学生的类
```javascript
class Person{
	constructor(name,age){
		this.name = name,
		this.age = age
	}
	sayHi(){console.log("大家好，我的名字叫"+this.name)}
}
Person.prototype.shcool = "第二小学"

let person = new Person("leeho",19)
```
跟构造函数很类似，我们把`私有属性`写到`constructor`里面，把要加到原型`prototype`上的方法，写到`contructor`外面,这里要注意`class`的语法，`constructor`外面只能写方法，才会被加到原型里面，如果写`键值对`就会被加到`私有属性`里面,如果我们想要在原型里面加键值对的话,还是要写成`Person.prototype.schoole = "第二小学"`，从以上看class语法只是更直观的声明了类，但是原理还是构造函数那一套。

（完）
参考资料：
1.饥人谷
2.[彻底搞懂JavaScript中的this指向问题](https://zhuanlan.zhihu.com/p/42145138)

















