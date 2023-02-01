import {beggar} from './deepClone'


// 测试数据
const target1 = {
  field1: 1,
  field2: undefined,
  field3: 'ConradLi',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2'
    }
  }
};

const target2 = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};

// 这种数据存在自身引用自身，这种一般拷贝会爆栈
const target3 = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};
target3.target3 = target3;
// console.log(target3)

// 测试第三种深拷贝
const tamplate1 = beggar.DeepCloneFun3(target1)
console.log(tamplate1)

// 测试第四种深拷贝-考虑了数组版本
const tamplate2 = beggar.DeepCloneFun4(target2)
console.log(tamplate2)

// OK，没有问题，你的代码又向合格迈进了一小步。 https://juejin.cn/post/6844903929705136141
// 解决target3问题
const tamplate3 = beggar.DeepCloneFun5(target3)
console.log(tamplate3)
