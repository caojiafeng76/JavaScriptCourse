/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//我的思路
// let twoSum = function (nums, target) {
//     let arr = [];
//     let obj = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 obj = {
//                     first: i,
//                     second: j,
//                 };
//                 arr.push(obj);
//             }
//         }
//     }
//     return arr;
// };

// let twoSum = function (nums, target) {
//     let arr = [];
//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         let x = nums[i];
//         let y = target - x;
//         if (nums.indexOf(y) > -1) {
//             obj = {
//                 0: i,
//                 1: nums.indexOf(y),
//             };
//             arr.push(obj);
//         }
//     }
//     return arr;
// };

var twoSum = function (nums, target) {
    var arr = [];
    var obj = {};
    var temp = [];
    for (var i = 0; i < nums.length; i++) {
        var dif = target - nums[i];
        if (typeof temp[dif] !== 'undefined') {
            obj = {
                arr: [temp[dif], i]
            };
            arr.push(obj);
        }
        temp[nums[i]] = i;
    }
    return arr;
};



let arr = [1, 2, 3, 4, 5];
console.log(twoSum(arr, 7));