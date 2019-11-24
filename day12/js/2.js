// let fn = function (...arg) {//剩余运算符，把实参赋值给fn
//     console.log(...arg);
// };
// let ary = [2, 4, 6];
// fn(...ary);//把数组展开并赋值给形参abc
//
// console.log(Math.max(...ary));
//
// let obj = {a: 1, b: 2};
// let newObj = {...obj, c: 3};//拓展运算符，把原有的值克隆一份赋值给变量
// console.log(newObj);

//求任意数的平均数，去除最大最小值,保留两位小数
// let fnAvg = (...arg) => {
//     arg.sort((a, b) => a - b).pop();
//     arg.shift();
//     return (eval(arg.join("+")) / arg.length).toFixed(2);
// };
// console.log(fnAvg(1, 2, 4, 5, 6, 9));

function f() {
    let ary = [].slice.call(arguments, 0);
    console.log(ary);
}

f(1, 2, 4, 5, 6, 9);

