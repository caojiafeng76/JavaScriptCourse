let url = 'http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man#teacher';
let urlParameter = url.indexOf('#') !== -1 ? url.substring(url.indexOf('?') + 1, url.indexOf('#')) : url.substring(url.indexOf('?') + 1);
// if (url.indexOf('#') !== -1) {
//     urlParameter = url.substring(url.indexOf('?') + 1, url.indexOf('#'));
// } else {
//     urlParameter = url.substring(url.indexOf('?') + 1);
// }
let array = urlParameter.split('&');
let obj = {};
for (let i = 0; i < array.length; i++) {
    let itemArray = array[i].split('=');
    obj[itemArray[0]] = itemArray[1];
}
console.log(obj);

