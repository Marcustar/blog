---
title: nodejs+webpack-开发实战
press-date: 2020-06
press: 清华大学出版社
author: 厦磊
---


## nodejs 异步编程

### 回调函数

由于调用接口存在成功或失败的情况，而基于回调函数的编程无法使用标准JS中的抛出错误和捕获错误的方法。因此只能将错误对象作为回调参数来调用回调函数。



### Promise

pending , fulfilled, rejected 

Promise构造函数接收一个执行函数，该函数接收resolve和reject两个回调函数，当执行函数运行成功时需调用resolve，执行错误时需调用reject。

一旦Promise发生状态变化，就会触发then方法，then方法签名如下：



 
