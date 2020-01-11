//时间字符串格式化
String.prototype.myFormatTime = function myFormatTime(template = '{0}年{1}月{2}日{3}时{4}分{5}秒') {
    let ary = this.match(/\d+/g).map(item => (item < 10 ? '0' + item : item));
    return template.replace(/\{(\d)\}/g, ([, index]) => ary[index] || '00');
};
// let str = "2018-4-30";
// console.log(str.myFormatTime('{1}-{2} {3}:{4}'));

// String.prototype.myFormatTime = function myFormatTime(template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
//     let ary = this.match(/\d+/g).map(item => (item < 10 ? '0' + item : item));
//     return template.replace(/\{(\d)\}/g, (...[, index]) => ary[index] || '00');
// };

let str = "2018-4-30";
console.log(str.myFormatTime('{1}-{2} {3}:{4}'));
