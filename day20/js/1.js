function A() {
    this.x = 100;
}

A.prototype = {
    constructor: A,
    getX: function () {
        console.log(this.x);
    }
};

function B() {
    A.call(this);//把A私有的变成Ｂ私有的
    this.y = 200;
}

//原型继承：子类的原型指向父类的实例
// B.prototype = new A();
//原型混合继承
B.prototype = Object.create(A.prototype);

let f = new B();
f.getX();