// let log = console.log.bind(console.log);

/*编写一个正则，一个6到16位的字符串，必须同时包含大小写字母和数字*/
// let reg = /(?!^[a-zA-Z]+$)(?!^[0-9]+$)(?!^[a-z0-9]+$)(?!^[A-Z0-9]+$)^[a-zA-Z0-9]{6,16}$/;
// log(reg.test('dsfsdafddsAA'));
//$attr(property,value)
// function $attr(property, value) {
//     let elements = Array.from(document.getElementsByTagName('*')),
//         arr = [];
//     elements.forEach(item => {
//         let itemVal = item.getAttribute(property);
//         if (property === 'class') {
//             let reg = new RegExp('\\b' + value + '\\b');
//             if (reg.test(itemVal)) {
//                  arr.push(item);
//             }
//             return;
//         }
//         if (itemVal === value) {
//             arr.push(item);
//         }
//     });
//     return arr;
// }
// log($attr('class', 'box'));



//中英结合字符串，给英文两边加字符串

// let str = 'no做no带why你try,你can你up.';
// let reg = /\b[a-z]+\b/ig;
// str = str.replace(reg, item => ' ' + item + ' ').trim();
// log(str);

//展开运算符
// let arr1 = [1, 2, 3],
//     arr2 = [[4, [5]], 6];
// let arr = arr1.concat(...arr2);
// console.log(...arr2);

//数组扁平化
// let arr = [1, [2, [
//     [3, 4], 5
// ], 6], 1, [2, [
//     [3, 4], 5
// ], 6], 1, [2, [
//     [3, 4], 5
// ], 6]];

//Method1:
// arr = arr.flat(Infinity);
// arr = new Set(arr);
// arr = Array.from(arr);
// arr.sort((a, b) => a - b);
// console.log(arr);
//Method2:
// while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr);
// }
// console.log(arr);

//Method3:
// arr = arr.toString().split(',').map(item => parseInt(item));
// console.log(arr);


//Method4:Recursive(递归)

// ~function () { 
//     function flat() {
//         let res = [],
//             _this = this;
//         let fn = arr => {
//             for (let i = 0; i < arr.length; i++) {
//                 const item = arr[i];
//                 Array.isArray(item) ? fn(item) : res.push(item);
//             }
//         }
//         fn(_this);
//         return res;
//     }
//     Array.prototype.myFlat = flat;
// }();

// arr = arr.myFlat();

// console.log(arr);

//自己写一个_new

/*
    对象创建步骤：
    1. 像普通函数一样执行，形成一个私有的作用域
    2. 默认创建一个对象， 让函数中的this指向该对象（ fn.call(obj,...arg)）， 让对象做为该类的一个实例（let obj = Object.create(fn.prototype);）
    3. 函数代码执行
    4. 默认把创建的对象返回

*/

// function Dog(name) {
//     this.name = name;
// }
// Dog.prototype.braking = function () {
//     console.log('wangwang');

// };
// Dog.prototype.sayHi = function () {
//     console.log("I'm" + this.name + "");

// };

// function _new(fn, ...arg) {
//     let obj = Object.create(fn.prototype);
//     fn.call(obj, ...arg);
//     return obj;
// }
// let sanmao = _new(Dog, '三毛');
// sanmao.braking();
// sanmao.sayHi();
// console.log(sanmao instanceof Dog);



//合并两个数组，并按指定顺序排序
let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'],
    arr2 = ['A', 'B', 'C', 'D'];
// arr2 = arr2.map(item => item + '3');
// let arr = arr1.concat(arr2).sort((a, b) => a.localeCompare(b));
// arr = arr.map(item => item.replace('3', ''));
// console.log(arr);

// let n = 0;
// for (let i = 0; i < arr2.length; i++) {
//     const item2 = arr2[i];
//     for (let j = 0; j < arr1.length; j++) {
//         const item1 = arr1[j];
//         if (item1.includes(item2)) {
//             n = j;
//         }
//     }
//     arr1.splice(n + 1, 0, item2);
// }
// console.log(arr1);
