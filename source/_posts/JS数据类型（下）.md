---
title: JS数据类型（下）
date: 2020-10-31 14:23:02
tags: javascript
toc: true
cover: ./img/javascript.png
---
## __对象__
对象就是椅子“键值对”的集合，是一种无序的符合数据集合。是JS里唯一一种复杂类型
<!--more-->
## __写法__
```javascript
第一种写法
let obj = {"name":"frank","age":18}
第二种写法
let obj = new Object({"name":"frank","age":18})
```
上面的代码，大括号就定义了一个对象，它被赋值给变量`obj`,该对象内部包含了两个键值对，第一个键值对是`"name":"frank"`,第二个键值对是`"age":18`,两个键值对用`,`隔开。`name`叫键名，也叫属性，`frank`叫键值。键名都是是字符串。键值可以是任何数据类型
```javascript
{foo:123}
// 123
```
上面的代码，出现了歧义，它即像一个对象里面包含了属性名为`foo`,键值为`123`。又像一个代码块里面包含了标签`foo`指向一个值为`123`,当JS解析到这样的代码时候，一律认为是代码块。以上代码输出为`123`
如果要让上面的代码，被认为是一个对象，要用()括起来
```javascript
({foo:123})
// Object{foo:123}
```
如果一个属性的值为函数，通常把这个属性成为方法，它可以像函数一样被调用。
```javascript
let obj = {
"p":funciton(){
return 2
}
}
//obj.p 2
```
<div class = "ff6666">细节:</div>

1. 键名都是字符串，不是标识符，可以包含任意字符。
2. 引号可以省略，省略之后就必须写标识符。
3. 就算省略了引号，键名也还是字符串。

### __变量作属性名__
```javascript
let p1 = "name"
let obj = {p1:"frank"} 
let obj = {[p1]:"frank"}
```
以上代码，`p1`什么都不加的时候，自动转成字符串，键名就是`p1`,如果加了`[]`变成了`[p1]`就变成了一个变量，属性名就变成了`"name"`
总结:不加`[]`的属性名会自动转变成字符串，加了`[]`就会被当做变量求值。

## __对象的隐藏属性__
1. JS中每一个对象都有一个隐藏属性
2. 这个隐藏属性存储着其共有属性组成的对象地址
3. 这个共有属性组成的对象叫做原型
4. 也就是说，隐藏属性储存着原型的地址

<div align="center"><img src = ./img/img1.png></div>

如上图，`obj`包含了两个自身的属性`age` `name`,也有一个对象的隐藏属性`__proto__`,这个隐藏属性里面存着对象的共有属性，这些共有属性组成的对象叫原型。

## __对象的增删改查__
### __读取属性__
读取对象的属性，有两种方法，一种是使用`点运算符`，还有一种是使用`方括号运算符`
```javascript
let obj = {name:"frank",age=18}
obj.name //"frank"
obj["age"] // 18
```
<div class="ff6666">注意</div>

1. 使用`方括号运算符`读取对象属性，键名必须放在引号里面，否则会被当做变量处理。
2. 方括号内可以使用表达式
```javascript
obj["na"+"me"]
// "frank"
```
3. 数字键名在方括号里面可以不用加引号，因为会自动转成字符串。数字键名不能使用`点运算符`因为会被当做是小数点处理。

__Object.keys(obj)__
```javascript
let obj = {name:"frank",age=18}
Object.keys(obj)
// [name,age]
```
`Object.keys(obj)`可以读出，对象里面的所有键名。

__Object.values(obj)__
```javascript
let obj ={name:"frank",age:18}
Object.values(obj)
// ["frank",18]
```
`Object.values(obj)`可以读出对象的所有键值

__console.dir(obj)__
可以打印出obj自身属性+隐藏属性

### __删除属性__
__delete命令__
用于删除对象的属性，删除成功后返回`true`，delete命令删除没有的属性，返回值也是`true`，所以不能根据delete命令的返回值来判断，对象里面是否有该属性。
删除属性有两种写法
```javascript
let obj={name:"frank",age:18}
delete obj.name 
delete obj["name"]
```
`delete`即删除了对象的属性名也删除了属性值
```javascript
obj.name = undefined
```
以上代码只是把对象的属性值改成了`undefined`而属性名还在。所以我不能通过`obj.name === undefined`来判断`name`是不是obj的属性。

### __修改和增加属性__
__直接赋值__
如果对象里面有该属性，就修改了属性，如果没有就新增了该属性
__批量赋值__
```javascript
let obj = {}
Object.assign(obj,{age:18,gender:"man"})
```
__修改隐藏属性__
```javascript
let obj = {}
obj.__proto__ = null
```
以上代码会把obj的隐藏属性，删除了，但是不推荐这样的写法。
```javascript
let xyz ={name:"小明"，age:20}
let obj = Object.creat(xyz)
```
以上代码意思是，在创建obj这个对象的时候，就把xyz当做它的原型传给obj。

### __属性是否存在:in运算符__
`in`运算符用于检查对象是否包含某个属性，包含就返回`true`,不包含就返回`flase`.他的坐标是一个字符串，表示属性名，右边是一个对象
```javascript
let obj = {name:"frank",age:18}
"name" in obj // true
"toString" in obj // true
```
`in`运算符的问题是，它是不能识别哪些属性是自身的，哪些属性是从原型那边继承过来的。
如果要判自身是否包含某个属性，可以使用`hasOwnproterty`
```javascript
let obj = {name:"frank",age:18}
obj.hasOwnproperty("toString")
// false
```
`in`和`hasOwnproperty`的区别就是，`in`无法识别某个属性是自身的还是从原型那里继承的，而`hasOwnproterty`可以识别属性是否是自身的。

### __属性的遍历：for...in循环__
用来遍历对象里面的所有属性。
```javascript
obj = {name:"frank",age:18}
for(let key in obj){
console.log(i+":"+obj[i])
}
//name:frank
  age:18
```

__(完)__

资料参考：
饥人谷
阮一峰网道javascript教程

