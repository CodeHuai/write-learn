/**
 * 自己的call方法
 */
Function.prototype.myCall = function (thisArg, ...reset) {
  // 此时这里的函数this,其实指向的是test这个函数
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  thisArg.fn = this
  // 处理this指向传值的问题
  const result = thisArg.fn(...reset)
  // 处理参数传值问题
  if(reset.every(el => !el)){
    thisArg.fn()
  } else {
    thisArg.fn(...reset)
  }

  delete thisArg.fn

  return result
}

function test(a, b) {
  console.log('test执行了', a, b, this)
  return a + b
}

const obj = {
  name: 'obj对象'
}

const result = test.myCall(obj, null)
console.log(result)
