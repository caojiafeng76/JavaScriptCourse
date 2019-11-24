// Array.prototype.myslice = function () {
//     // let ary = [];
//     // for (let i = 0; i < this.length; i++) {
//     //     ary.push(this[i]);
//     // }
//     // return ary;
//
//    return [].sort.call(arguments, function (a, b) {
//         return b - a;
//     });
// };
// let ary = [1, 2, 3];
// let ary1 = ary.myslice();
// console.log(ary1);
//
// function argSort() {
//     // return [].sort.call(arguments, function (a, b) {
//     //     return b - a;
//     // });
//
//     return [].slice.call(arguments).sort((a, b) => b - a);
// }
//
// console.log(argSort(1, 2, 3));

function fn1() {
}

function fn2() {
}
fn1.call.call(fn2);

/*
    fn1.call this->fn2
    fn1.call 执行

* */



