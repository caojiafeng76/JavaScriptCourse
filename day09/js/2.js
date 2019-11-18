function Fn(name, age) {
    var n = 5;
    this.name = name;
    this.age = age - n;
}

var p1 = new Fn('aaa', 20);
var p2 = new Fn('bbb', 23);
console.log(p1);
console.log(p2);
console.log('age' in p1);//检测当前对象是否存在某个属性（不管公有私有的，存在就是true）

console.log(p1 instanceof Fn);//检测一个实例是否隶属于某个类（所有实例都隶属于 Object）

console.log(p2.hasOwnProperty('name'));//检测当前实例是否存在私有属性

console.log(p2.hasOwnProperty('toString'));//=>false 因为不是私有属性，如果这个属性不存在也会返回false

//写一个方法检测是否是一个实例的公有属性
function hasPubProperty(obj, attr) {
    if (!(attr in obj)) {
        return false;
    }
    return !obj.hasOwnProperty(attr);
}
var result = hasPubProperty(p1,'toString');
console.log(result);


