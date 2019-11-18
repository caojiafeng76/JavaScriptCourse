function Fn(name, age) {
    var n = 5;
    this.name = name;
    this.age = age - n;
}

var p1 = new Fn('aaa', 20);
var p2 = new Fn('bbb', 23);
console.log(p1);
console.log(p2);
console.log('age' in p1);