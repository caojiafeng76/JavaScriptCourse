// // 3、阿里超经典面试题（有难度）
//
// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
//     Foo.getName = function () {
//         console.log(2);
//     };
//     Foo.prototype.getName = function () {
//         console.log(3);
//     };
//     var getName = function () {
//         console.log(4);
//     };
//
//     function getName() {
//         console.log(5);
//     }
//
//     Foo.getName();
//     getName();
//     Foo().getName();
//     getName();
//     new Foo.getName();
//     new Foo().getName();
//     new new Foo().getName()



let n = 10,
    obj = {n: 20};
let fn = obj.fn = (function () {
    this.n++;
    n++;
    return function (m) {
        n += 10 + (++m);
        this.n += n;
        console.log(n);
    }
})(obj.n);
/*let 定义的全局变量不会在window上生成全局属性
* 这里的this 指向window，但是window上没有n这个属性，所以是undefined，this的n和全局的n没有关系
* */
fn(10);
obj.fn(10);
console.log (n, obj.n);