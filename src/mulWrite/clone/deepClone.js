/**
 * 深拷贝
 */

// 乞丐版
export const beggar = {
  // 深拷贝
  DeepCloneFun1: value => {
    return JSON.parse(JSON.stringify(value))
  },
  // 深拷贝
  // 这种只是针对对象值存在没有复杂类型的情况下，如果有复杂的，这种是不合格的！
  DeepCloneFun2: target => {
    let template = {}
    for (const valueKey in target) {
      template[valueKey] = target[valueKey]
    }
    return template
  },
  // DeepCloneFun2 的升级版处理
  // 缺点：这种没有考虑数据这种情况
  DeepCloneFun3: target => {
    if (typeof target === 'object') {
      let template = {}
      for (const key in target) {
        template[key] = target[key]
      }
      return template
    } else {
      return target
    }
  },
  // 考虑数组之后的深拷贝写法
  DeepCloneFun4: target => {
    if (typeof target === 'object') {
      let template = Array.isArray(target) ? [] : {}
      for (const key in target) {
        template[key] = target[key]
      }
      return template
    } else {
      return target
    }
  },
  // 接下来解决这个问题：对象存在循环引用的情况，即对象的属性间接或直接的引用了自身的情况
  // 解决思路：
  //  解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。
  //
  //  这个存储空间，需要可以存储key-value形式的数据，且key可以是一个引用类型，我们可以选择Map这种数据结构：
  //
  //  检查map中有无克隆过的对象
  //  有 - 直接返回
  //  没有 - 将当前对象作为key，克隆对象作为value进行存储
  //  继续克隆
  DeepCloneFun5: (target, weakMap = new WeakMap()) => {
    if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      if (weakMap.get(target)) {
        return weakMap.get(target);
      }
      weakMap.set(target, cloneTarget);
      for (const key in target) {
        cloneTarget[key] = beggar.DeepCloneFun5(target[key], weakMap);
      }
      return cloneTarget;
    } else {
      return target;
    }
  },
  // 还需要考虑 Array 以及 null 的情况
  DeepCloneFun6: () => {

  }
}
