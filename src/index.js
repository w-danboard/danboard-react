import React from 'react'
import ReactDOM from 'react-dom'

/** 1
 * 元素是React虚拟DOM元素
 * 它其实是一个普通的JS对象，它描述了界面上你想看到的内容
 */

 /** 2
  * JSX属性和表达式
  * html backgroundColor: 'red'
  * class => className
  * for => htmlFor
  * style => 对象
  * 如果想在JSX中读取JS变量的话， 可以用{}包起来
  */

let style = {color: 'red', backgroundColor: 'green'}
let element1 = <h1 id="title"
  htmlFor="inputTitle"
  className="titel"
  style={style}>hello</h1>
// jsx编译成createElement是在webpack编译的时候，也就是打包的时候执行的
// 打包后的代码在浏览器里执行的时候，会执行函数，返回一个JS对象
let element2 = React.createElement('h1', {
  id: 'title'
}, 'hello', 'world')

// console.log(element1)
/**
 * {
 *    type: 'h1',
 *    props: {
 *      id: 'title',
 *      children: 'hello' 如果只有一个儿子的话，children就是那个独生子，如果有多个儿子的话，children就是一个儿子的数组
 *    }
 * }
 */

 /** 3
  * JSX其实也是一个对象, 可以在if和for语句中使用JSX
  * 可以把JSX赋值给变量，还可以作为方法的参数，作为方法的返回值
  */

// function greeting (name) {
//   if (name) {
//     return <h1>hello, {name}</h1>
//   }
//   return <h1>hello, Stranger</h1>
// }

// let element = greeting('wanglin')

let users = [{id: 1, name: '张三'}, {id: 2, name: '李四'}, {id: 3, name: '王五'}]
let elements = users.map((item, index) => (<li key={item.id}>{item.name}</li>))

 // render方法会负责把虚拟DOM变成真实DOM插入到容器里
ReactDOM.render(
  <ul>{elements}</ul>, 
  document.getElementById('root')
)

setTimeout(() => {
  let users = [{id: 3, name: '张三三'}, {id: 1, name: '李四四'}, {id: 2, name: '王五五'}]
  let elements = users.map((item, index) => (<li key={item.id}>{item.name}</li>))

  // render方法会负责把虚拟DOM变成真实DOM插入到容器里
  ReactDOM.render(
    <ul>{elements}</ul>, 
    document.getElementById('root')
  )
}, 3000)

/**
 * React更新的时候会如何更新？
 * 1. 简单粗暴，把删除的，再插入全部的新元素 [性能差，react不是这样做的]
 * 2. React会把老的虚拟DOM和新的虚拟DOM进行比较，这个也就是所谓dom-diff
 *    找到它们之间的差异，然后通过打补丁的方式更新差异
 */


