// function sum(m, n) {
//     let sum = null;
//     for (let i = 0; i < arguments.length; i++) {
//         let item = Number(arguments[i]);
//         if (isNaN(item)) {
//             continue;
//         }
//         sum += item;
//     }
//     return sum;
// }

let sum = (...arg) => eval(arg.filter(item => !isNaN(item)).join('+'))

console.log(sum(1, 2, 3, 4, 5, '20', 'qq'));