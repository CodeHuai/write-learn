/**
 * 经常考虑传参是否正确的问题，还要考虑如果绑定的对象是一个0或者空字符串也会绑定到window，所以需要增加类型判断或者排除
 * @param thisArg this绑定的对象
 * @param arr 参数
 * @returns {*}
 */
Function.prototype.myApply = function (thisArg, arr = []) {
  let fn = this
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
  thisArg.fn = fn
  const result = thisArg.fn(arr)
  delete thisArg.fn
  return result
}

function test(arr) {
  console.log("myApply调用了", arr, this)
  return arr
}

const obj = {
  name: 'obj'
}

const result = test.myApply(null, [123, 213123123123])
const result2 = test.myApply(obj, [123, 213123123123])

console.log(result, result2)
