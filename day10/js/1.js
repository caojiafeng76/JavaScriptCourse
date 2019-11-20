/*
* 1.每一个函数类型的对象默认都会有一个prototype（原型）的属性，它的值是对象类型，浏览器会默认给它开辟一个堆内存
* 2.浏览器给property开辟的堆内存中默认会有一个constructor，指向函数本身
* 3.每一个对象都有一个__proto__的属性，指向当前实例所属类的prototype（如果不能确定是谁的实例，那都是Object）
* */

var arr = new Array();
console.log(arr);
console.log(Array.prototype);
// console.log(arr.prototype);