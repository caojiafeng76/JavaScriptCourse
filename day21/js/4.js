// var b = 10;
// (function b() {
//     b = 20;
//     console.log(b);

// })();
// console.log(b);
/*
    1. 本应匿名的函数，在外面还是无法调用，但是在函数内部还是可以使用的
    2. 类似于创建常量一样，这个名字储存的值不能被修改（非严格模式下，不会报错，但是修改不会有任何效果，严格模式下会报错["use strict"]，我们可以理解为是const创建出来的）
*/

//实现
// var a = {};

//"=="比较时：对象->toString()->数字->比较
//Method1:
// a.n = 0;
// a.toString = function () {
//     return ++this.n;
// }
//Method2:
// let a = [1, 2, 3];
// a.toString = a.shift;

//Method3:
// Object.defineProperty(window, 'a', {
//     get() {
//         return this.value ? this.value += 1 : 1;
//     }
// });

// if (a == 1 && a == 2 && a == 3) {
//     console.log('ok');

// }


let arr = [12, 11, 13, 9, 10, 87, 67, 53];

//冒泡排序
// function bubble(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             arr[j] > arr[j + 1] ? [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] : null;
//         }
//     }
//     return arr;
// }
// console.log(bubble(arr));



//插入排序
// function insert(arr) {
//     let handle = [];
//     handle.push(arr[0]);
//     for (let i = 1; i < arr.length; i++) {
//         let A = arr[i];
//         for (let j = handle.length - 1; j >= 0; j--) {
//             let B = handle[j];
//             if (A > B) {
//                 handle.splice(j + 1, 0, A);
//                 break;
//             }
//             if (j===0) {
//                 handle.unshift(A);
//             }
//         }
//     }
//     return handle;
// }
// console.log(insert(arr));



//快速排序
function quick(ary) {
    //循环结束条件
    if (ary.length <= 0) return ary;
    //找到中间项，并在原有数组中把他移除
    let middleIndex = Math.floor(ary.length / 2),//获取中间项的索引
        middleValue = ary.splice(middleIndex, 1)[0]; //把中间项删除并储存在middleValue中
    //准备左右两个数组，左边存放比当前项小的，右边存放比当前项大的
    let aryLeft = [],
        aryRight = [];
    for (let i = 0; i < ary.length; i++) {
        const item = ary[i];
        item < middleValue ? aryLeft.push(item) : aryRight.push(item);
    }
    //左右两边再次排序直到不用排序为止
    return quick(aryLeft).concat(middleValue, quick(aryRight));
}
console.log(quick(arr));


//递归
// function sum(n) {
//     if (n === 11) return 0;
//     return n + sum(n + 1);
// }
// console.log(sum(1));
