/**
 * 在React17之前，React规定React元素是不可变的
 * React17之前是可以添加属性的，React17以后是不能添加属性的，相当于添加了Object.seal()方法
 * 总结：17之前不可能改变属性，但是可以添加属性，现在即不可以改变也不可以添加
 */
// let element = { type: 'h1' }
// Object.freeze(element)
// element.type = 'h2'
// console.log(element)

Object.defineProperty(Object, 'myFreeze', {
  value: obj => {
    let i 
    ;for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        Object.defineProperty(obj, i, {
          // 把所有的属性改为不可修改 只读
          writable: false
        })
      }
    }
    // 让此对象不能添加额外的属性
    Object.seal(obj)
  }
})

let element = { type: 'h1' }
Object.myFreeze(element)
element.type = 'h2'
console.log(element)