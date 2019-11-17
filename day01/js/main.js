var num = '12qqq';
var n = Number(num);
console.log(n);
var flag = isNaN(num);
console.log(flag);//false代表是一个有效数字,true代表不是一个有效数字

console.log(parseInt('13px'));
console.log(parseFloat('13.54.13'));
console.log(parseInt('width:13.5px'));
console.log(NaN == NaN);//nan和谁都不想等（包括自己）
