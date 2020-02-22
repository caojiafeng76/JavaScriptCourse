// //=>OBJ:我们需要迭代的数组、类数组、对象
//  let each = function (obj, callback) {
//      //=>验证是数组(类数组)还是对象
//      let flag = 'length' in obj //=>我们先简单验证：有LENGTH是数组或者类数组，没有是对象
//      if (flag) {
//          for (let i = 0; i < obj.length; i++) {
//              const item = obj[i];
//              let res = callback && callback.call(item, i, item)
//              if (res === false) { //=>接收回调函数的返回值，如果返回的是FALSE，我们结束循环即可
//                  break
//              }
//          }
//      } else {
//          for (const key in obj) {
//              if (obj.hasOwnProperty(key)) {
//                  const value = obj[key]
//                  let res = callback && callback.call(value, key, value)
//                  if (res === false) {
//                      break
//                  }
//              }
//          }
//      }
// }
 
// each([12, 23, 34], function (index, item) {
//     console.log(index, item, this)
//     if (index >= 1) {
//         return false
//     }
// })

// each({ name: 'zhufengpeixun', age: 10, gender: 0 }, function (key, value) {
//     console.log(key, value, this)
//     if (key === 'age') {
//         return false
//     }
// })



String.prototype.myReplace = function myReplace(reg, callback) {
    //=>this:str
    //=>默认REG肯定加G了,CALLBACK肯定传递函数了
    let res = reg.exec(this),
        _this = this
    while (res) {
        //=>res:每一次EXEC捕获的结果（数组）
        let returnV = callback(...res) //=>捕获一次执行一次回调函数，并且把通过EXEC捕获的数组展开，每一项都依次传递给回调函数（returnV：当前回调函数执行的返回结果，我们要拿这个结果替换字符串中当前大正则匹配的内容）
        let v = res[0],
            i = _this.indexOf(v)
        _this = _this.substring(0, i) + returnV + _this.substring(v.length + i)
        res = reg.exec(this)        
    }
    return _this
}

let str = 'my name is {0}，i am {1} years old!',
    ary = ['周啸天哈哈', '28'];
str = str.myReplace(/\{(\d+)\}/g, function (...arg) {
    let index = arg[1];
    return ary[index];
});
console.log(str);