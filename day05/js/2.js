// let nameList = 'Tom,Bob,Lisa,Marry,John,Mike';
// let nameArray = nameList.split(',');
// console.log(nameArray);

let timeStr = '2019-11-10 14:39:40'
let timeArray = timeStr.split(' ');
let date = timeArray[0];
let time = timeArray[1];
let dateArray = date.split('-');
let times = time.split(':');
timeStr = dateArray[1]+'月'+dateArray[2]+'日'+times[0]+'时'+times[1]+'分';
console.log(timeStr);

// console.log(timeArray);