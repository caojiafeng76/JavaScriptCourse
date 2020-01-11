let str = 'zhufeng{val:2018}zhufeng{val:2019}',
    reg = /\{val:(\d+)\}/g;
str = str.replace(reg, (...arg) => {
    // console.log(arg);
    return 'aa'
});
console.log(str);
