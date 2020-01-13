let ary = [];
for (let i = 0; i < 100; i++) {
    let num = randomNum(1, 100);
    ary.push(num);
}
//求数组最大值
let max = Math.max(...ary);
console.log(max);

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
    default:
        return 0;
        break;
    }
}


//递归
let fn = n => {
    if (n === 101) {
        return 0;
    }
    if (n % 15 === 0) {
        return n + fn(n + 1);
    }
    return fn(n + 1);
};
console.log(fn(1));


//数组扁平化
let array = [1, [2, [3, [4, 5]]], [6, 7, [8, 9, [11, 12]], 10]];
let result = [],
    myFlat = ary => {
        if (ary.length === 0) {
            return;
        }
        for (let i = 0; i < ary.length; i++) {
            let item = ary[i];
            if (item instanceof Object) {
                myFlat(item);
            } else {
                result.push(item);
            }
        }
    };
myFlat(array);
console.log(result);