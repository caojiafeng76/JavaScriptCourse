//多放向运动
let box = document.getElementById('box'),
    time = 0,//当前运动时间
    duration = 1000;//运动总时间
//最终的运动位置
let target = {
    left: document.documentElement.clientWidth - box.offsetWidth,
    top: document.documentElement.clientHeight - box.offsetHeight
};
//根据目标的位置计算起始位置和运动总距离
let change = [],
    begin = {};
for (const attr in target) {
    if (target.hasOwnProperty(attr)) {
        begin[attr] = parseFloat(window.getComputedStyle(box)[attr]);
        change[attr] = target[attr] - begin[attr];
    }
}
let animateTimer = setInterval(() => {
    time += 17;
    if (time >= duration) {
        clearInterval(animateTimer);
        for (const key in target) {
            if (target.hasOwnProperty(key)) {
                box.style[key] = target[key] + 'px';
            }
        }
    }
    let cur = {};
    for (const attr in target) {
        if (target.hasOwnProperty(attr)) {
            cur[attr] = time / duration * change[attr] + begin;
        }
    }
    for (const key in cur) {
        if (cur.hasOwnProperty(key)) {
            box.style[key] = cur[key] + 'px';
        }
    }
}, 17);