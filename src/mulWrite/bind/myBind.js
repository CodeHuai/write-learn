Function.prototype.myBind = function (thisArg) {
  let fn = this
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) :window
  thisArg.fn = fn
  // delete thisArg.fn
  return thisArg.fn
}

const obj = {
  name: 'obj'
}

function testBind(){
  console.log(this)
}

const result = testBind.myBind(obj)
result()
