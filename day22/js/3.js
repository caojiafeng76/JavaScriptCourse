let box = document.getElementById('box');
let minL = 0,
    maxL = document.documentElement.clientWidth - box.offsetWidth; //最大运动距离
//固定步长
// let step = 5,
//     autoTimer = setInterval(() => {
//         let curL = box.offsetLeft;
//         curL += step;
//         if (curL >= maxL) {
//             box.style.left = maxL + 'px';
//             clearInterval(autoTimer);
//             return;
//         }
//         box.style.left = curL + 'px';
//     }, 17);

//固定时间
let duration = 1000, //总时间
    interval = 17, //走的时间频率，多长时间迈一步
    begin = 0, //起始位置
    target = maxL, //目标位置
    change = target - begin, //总距离
    time = 0; //已经运动的时间
let autoTimer = setInterval(() => {
    //根据公式计算现在的位置
    time += interval;
    if (time >= duration) { //到达边界
        box.style.left = target + 'px';
        clearInterval(autoTimer);
        return;
    }
    let curL = time / duration * change + begin;
    box.style.left = curL + 'px';
}, interval);