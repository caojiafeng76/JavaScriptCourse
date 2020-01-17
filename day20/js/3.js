~function () {
    //检测是否是有效数字
    function check(n) {
        return !isNaN(n);
    }
    //自己写的each方法，如果是非有效数字，结束遍历，默认this指向undefined
    function each(callback, obj = undefined) {
        for (let i = 0; i < this.length; i++) {
            if (!check(this[i])) {
                break;
            }
            callback.call(obj, this[i], i);
        }
    }

    Array.prototype.myEach = each;
}();
[1, 2, 3, 'q', 1, 2].myEach(item => {
    console.log(item);
});

