import React from 'react'
import ReactDOM, { render } from 'react-dom'

/**
 * 4.6 更新元素渲染
 *  React元素是不可变的 [可以创建一个新的元素，重新渲染]
 * 4.7 React只会更新必要的部分 
 */

//  function tick () {
//    const element = (
//      <div>
//        {new Date().toLocaleTimeString()}
//      </div>
//    )
//    ReactDOM.render(element, document.getElementById('root'))
//  }

//  setInterval(tick, 1000)
 
function tick () {
  const element = (
    <div>
      <div>当前时间</div>
      {new Date().toLocaleTimeString()}
      <div>中国</div>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'))
}

setInterval(tick, 1000)