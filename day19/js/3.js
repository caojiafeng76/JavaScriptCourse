//=>思考题
//1. 获取一个字符串中最多出现字符的次数和对应的字符
// let str = 'zhufengpeixunzhouxiaotianzuishuai';

//2. 获取URL问号后面的参数值
// let str = 'http://www.zhufengpeixun.cn/stu/?name=AA&age=25&sex=0#teacher';
//=>{name:'AA',age:25,sex:0,HASH:'teacher'}

let str = 'zhufengpeixunzhouxiaotianzuishuai';
let ary = str.match(/\w/g);
obj = {};
for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (typeof obj[item] !== 'undefined') {
        obj[item]++;
    } else {
        obj[item] = 1;
    }
}
let maxObj = {},
    max = 0;
for (let key in obj) {
    if (max < obj[key]) {
        max = obj[key];
        maxObj[key] = obj[key];
    }
}
console.log(maxObj);
// console.log(obj);

