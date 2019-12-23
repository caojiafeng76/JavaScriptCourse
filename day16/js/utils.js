let utils = (function () {
    //获取当前元素的属性值
    let getCss = function (curEle, attr) {
        if (typeof window.getComputedStyle === 'undefined') {
            return;
        }
        let val = window.getComputedStyle(curEle, null)[attr],
            reg = /^-?\d+(\.\d+)?(px|rem|em|pt)?$/i;
        val = reg.test(val) ? parseFloat(val) : val;
        return val;
    };
    //设置css样式(一个)
    let setCss = function (curEle, attr, val) {
        if (attr === 'opacity') {
            curEle.style.opacity = val;
            curEle.style.filter = `alpha(opacity=${val * 100})`;
            return;
        }
        if (!isNaN(val)) {
            let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
            val = reg.test(attr) ? val + 'px' : val;
        }
        curEle['style'][attr] = val;
    };
    //批量设置css的值
    let setGroupCss = function (curEle, options = {}) {
        for (let attr in options) {
            if (!options.hasOwnProperty(attr)) {
                break;
            }
            setCss(curEle, attr, options[attr]);
        }
    };
    //获取和设置合二为一的方法
    let css = (...arg) => {
        let len = arg.length,
            fn = getCss;
        fn = len >= 3 ? setCss : (len === 2 && arg[1] instanceof Object ? setGroupCss : getCss);
        return fn(...arg);
    };
    //获取当前元素距离BODY的偏移(左偏移和上偏移)
    let offSet = function (curEle) {
        //1.先获取当前元素本身的左/上偏移
        let curLeft = curEle.offsetLeft,
            curTop = curEle.offsetTop,
            p = curEle.offsetParent;

        //2.累加父参照物的边框和偏移(一直向上找,找到BODY为止,每当找到一个父参照物都把它的边框和偏移累加起来,根据元素不一样,具体找几次也不知道)
        //TAG-NAME获取当前元素的标签名(大写的)
        while (p.tagName !== 'BODY') {//=>当父级元素的标签名不是BODY时一直查找
            curLeft += p.clientLeft;
            curLeft += p.offsetLeft;
            curTop += p.clientTop;
            curTop += p.offsetTop;
            p = p.offsetParent;
        }
        return {
            left: curLeft,
            top: curTop
        };
    };
    return {
        css,
        offSet,
    };
})();