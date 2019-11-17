// console.log(Number(null));
// console.log(Number(undefined));

// var obj = {
//     name: 'zhufeng',
//     age: 9,
//     0:19
// };
// // console.log(obj.name);
// // console.log(obj['name']);
// // obj['name'] = '珠峰';
// // obj.age = 8;
// // obj.gender = 'Male';
// // console.log(obj.name);
// // console.log(obj.age);
// // console.log(obj.gender);
// // delete obj['gender'];//删除对象属性
// // console.log(obj);
// // var name = 'name';
// // console.log(obj[name]);
//
// console.log(obj['0']);

// var obj = {
//     n: 10,
//     m: obj.n * 10
// };
// console.log(obj.m);

// //
// var ary1 = [3, 4];
// var ary2 = ary1;//[3, 4];
// ary2[0] = 1;//[1,4]
// ary2 = [4, 5];//[4,5]
// ary2[1] = 2;//[4,2]
// ary1[1] = 0;//[1,0]
// console.log(ary1, ary2);

// var num = 12;
// if (num > 0) {
//     if (num < 10) {
//         num++;
//     } else {
//         num--;
//     }
// } else {
//     if (num == 0) {
//         num++;
//         num = num / 10;
//     }
// }

// var num = 12;
// num > 0 ? (num < 10 ? num++ : num--) : (num == 0 ? num++ : n /= 10);
// console.log(num);

// console.log(null == undefined);

var ary = [12, 23, 34, 45, 56, 67, 78, 89, 90];
// for (var i = 0; i < ary.length; i++) {
//     // console.log(ary[i]);
// }
// for (let i = 0; i < ary.length; i++) {
//     const aryElement = ary[i];
//     console.log(aryElement);
// }

for (var i = 0; i < ary.length; i++) {
    if (i % 2 === 0) {
        console.log(ary[i]);
    }
}
