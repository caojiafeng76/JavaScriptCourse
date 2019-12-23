// //获取当前元素的属性值
// let getCss = function (curEle, attr) {
//     if (typeof window.getComputedStyle === 'undefined') {
//         return;
//     }
//     let val = window.getComputedStyle(curEle, null)[attr],
//         reg = /^-?\d+(\.\d+)?(px|rem|em|pt)?$/i;
//     val = reg.test(val) ? parseFloat(val) : val;
//     return val;
// };
//
// //设置css样式(一个)
// let setCss = function (curEle, attr, val) {
//     if (attr === 'opacity') {
//         curEle.style.opacity = val;
//         curEle.style.filter = `alpha(opacity=${val * 100})`;
//         return;
//     }
//     if (!isNaN(val)) {
//         let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
//         val = reg.test(attr) ? val + 'px' : val;
//     }
//     curEle['style'][attr] = val;
// };
//
// //批量设置css的值
// let setGroupCss = function (curEle, options = {}) {
//     for (let attr in options) {
//         if (!options.hasOwnProperty(attr)) {
//             break;
//         }
//         setCss(curEle, attr, options[attr]);
//     }
// };
// //三个方法何为一个
// // let css = function (...arg) {
// //     let len = arg.length;
// //     if (len >= 3) {
// //         setCss(...arg);
// //     }
// //     if (len === 2 && arg[1] instanceof Object) {
// //         setGroupCss(...arg);
// //     }
// //     return getCss(...arg);
// // };
//
// let css = (...arg) => {
//     let len = arg.length,
//         fn = getCss;
//     fn = len >= 3 ? setCss : getCss;
//     fn = len === 2 && arg[1] instanceof Object ? setGroupCss : getCss;
//     return fn(...arg);
// };