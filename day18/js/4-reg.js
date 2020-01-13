let str = 'zhufeng2018peixun2019yangfan2020qihang2021';
RegExp.prototype.myExecAll = function (str) {
    //str=>当前操作字符串
    //this=>正则表达式
    //如果没有加G，捕获一次
    if (!this.global && this.group.length < 2) {
        return this.exec(str);
    }
    let result = [],
        valAry = this.exec(str);//当前捕获到的数组
    while (valAry) {//加了G，当valAry不是null时，将捕获到内容的第一项添加到数组中，并且继续捕获
        result.push(valAry[0]);
        valAry = this.exec(str);
    }
    return result;
};
let result = /\d+/g.myExecAll(str);
// let result = str.match(/\d+/g);
console.log(result);