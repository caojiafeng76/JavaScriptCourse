// var i = 10;11
//
// function fn() {
//     return function (n) {
//         console.log(n + (++i));
//     }
// }
//
// var f = fn();
// f(20);31
// fn()(20);32
// fn()(30);43
// f(30);44

// function fn(i) {
//     //i=10 11
//     return function (n) {
//         //n=20
//         console.log(n + (i++));
//     }
// }
//
// var f = fn(10);
// f(20);//30
// fn(20)(40);//60
// fn(30)(50);//80
// f(30);//41


// function Fn() {
//     this.x = 100;
//     this.y = 200;
//     this.getX = function () {
//         console.log(this.x);
//     }
// }
//
// Fn.prototype.getX = function () {
//
//     console.log(this.x);
//
// };
//
// Fn.prototype.getY = function () {
//
//     console.log(this.y);
//
// };
// var f1 = new Fn;
// var f2 = new Fn;
// console.log(f1.getX === f2.getX);//false
// console.log(f1.getY === f2.getY);//false
// console.log(f1.__proto__.getY === Fn.prototype.getY);//true
// console.log(f1.__proto__.getX === f2.getX);//false
// console.log(f1.getX === Fn.prototype.getX);//false
// console.log(f1.constructor);
// console.log(Fn.prototype.__proto__.constructor);
// f1.getX();//100
// f1.__proto__.getX();//undefind
// f2.getY();//200
// Fn.prototype.getY();


// var inputs = document.getElementsByTagName("input");
// for (var i = 0; i < inputs.length; i++) {
//     // (function (i) {
//     //     inputs[i].onclick = function () {
//     //         alert(i);
//     //     }
//     // })(i);
//
//     inputs[i].onclick = (function (i) {
//         return function () {
//             alert(i);
//         }
//     })(i);
// }

// function Fn() {
//     var n = 10;
//     this.m = 20;
//     this.aa = function () {
//         console.log(this.m);
//     }
// }
//
// Fn.prototype.bb = function () {
//     console.log(this.n);//不是this和对象没关系
// };
// var f1 = new Fn;
// Fn.prototype = {
//     aa: function () {
//         console.log(this.m + 10);
//     }
// };
// var f2 = new Fn;
// console.log(f1.constructor);//f1
// console.log(f2.constructor);//obj
// f1.bb();//undefined
// f1.aa();//20
// // f2.bb();报错
// f2.aa();//20
// f2.__proto__.aa();//nan=undefined+10 this:f2.__proto__

var ary = [1, 2, 3, 12, 3, 3, 1, 43];

// function unique(ary) {
//     var obj = {};
//     for (var i = 0; i < ary.length;) {
//         var item = ary[i];
//         if (item in obj) {
//             // ary.splice(i, 1);
//             ary[i] = ary[ary.length - 1];
//             ary.length--;
//             continue;
//         }
//         obj[item] = item;
//         i++;
//     }
//     obj = null;
// }
//
// unique(ary);
// console.log(ary);

Array.prototype.myUnique = function myUnique() {
    var obj = {};
    for (var i = 0; i < this.length;) {
        var item = this[i];
        obj.hasOwnProperty(item) ? (this[i] = this[this.length - 1], this.pop()) : (obj[item] = item, i++);

    }
    obj = null;
    return this;//不写return返回的是undefined,原数组改变,=>JS中的链式写法：保证每一个方法执行返回的结果依然是当前类的实例，这样就可以继续调取方法使用了
};
console.log(ary.myUnique().sort(function (a, b) {
    return a - b;
}));

