//单例设计模式
//高级单例模式
// var utils = (function () {
//     var fn = function (x) {
//         console.log(x);
//     };
//     return {
//         fn: fn
//     }
// })();
// utils.fn(90);
//工厂模式
var creatPerson = function (name, age) {
    var obj = {
        name: name,
        age: age
    };
    return obj;
};
var person1 = creatPerson('xiaoming', 20);
console.log(person1);