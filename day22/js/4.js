/*
 * 规定时间内的多方向匀速运动
 *    TIME 当前运动时间
 *    DURATION 总时间
 *
 *    [记录每一个方向的起始位置、目标值、总距离]
 *      BEGIN 起始位置
 *      TARGET 目标位置
 *      CHANGE 总距离
 */
// let box = document.getElementById('box'),
//     time = 0,
//     duration = 1000

// let target = {
//     left: document.documentElement.clientWidth - box.offsetWidth,
//     top: document.documentElement.clientHeight - box.offsetHeight,    
// }

// let change = {},
//     begin = {}

// for (const attr in target) {
//     if (target.hasOwnProperty(attr)) {
//         begin[attr] = parseFloat(window.getComputedStyle(box)[attr])
//         change[attr] = target[attr] - begin[attr]        
//     }
// }

// let animateTimer = setInterval(() => {
//     time += 17
//     if (time >= duration) {
//         clearInterval(animateTimer)
//         for (const key in target) {
//             if (target.hasOwnProperty(key)) {
//                 box.style[key] = target[key] + 'px'
//             }
//         }
//         return
//     }
//     //=>根据目标值中的方向，基于公式计算出每一个方向的当前位置
//     let cur = {}
//     for (const attr in target) {
//         if (target.hasOwnProperty(attr)) {
//             cur[attr] = time / duration * change[attr] + begin[attr]
//         }
//     }
//     for (const key in cur) {
//         if (cur.hasOwnProperty(key)) {
//             box.style[key] = cur[key] + 'px'
//         }
//     }
// }, 17)

animate(box, {
    width: 300,
    height:300,
})
