// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)
// new Promise(function (resolve) {
//   console.log('promise1')
//   for (let i = 0; i < 1000; i++) {
//     i === 999 && resolve()
//   }
//   console.log('promise2')
// }).then(function () {
//   console.log('promise3')
// })
// console.log('script')

// promise1
// promise2
// script
// promise3
// setTimeout


async function fun() {
  console.log(1)
  let a = await 2
  console.log(a)
  console.log(3)
}

console.log(4)
fun()
console.log(5)

// 4
// 1
// 2
// 3
// 5
