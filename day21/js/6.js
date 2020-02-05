let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [9, 8, 7, 6, 5, 4];
let arr = [];
//交集
// for (let i = 0; i < arr1.length; i++) {
//     const item = arr1[i];
//     const n = arr2.indexOf(item);
//     if (n !== -1) {
//         arr.push(item);
//         arr1.splice(i, 1);
//         i--;
//         arr2.splice(n, 1);
//     }
// }

//并集
arr = arr1.concat(arr2);
let obj = {};
for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof obj[item] !== 'undefined') {
        continue;
    }
    obj[item] = true;
}
arr = Object.keys(obj).map(item => Number(item));
let arr3 = [],
    arr4 = [];
//补集
arr.forEach(item => {
    arr1.indexOf(item) === -1 ? arr3.push(item) : null;
    arr2.indexOf(item) === -1 ? arr4.push(item) : null;
});
console.log(arr3, arr4);

// console.log(arr);