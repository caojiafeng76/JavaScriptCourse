//数组的去重
let ary = [1, 2, 3, 4, 1, 2, 3, 4, 5, 2, 5, 4, 3, 5];
Array.prototype.myUnique = function () {
    let _this = [...this],
        obj = {};
    for (let i = 0; i < _this.length; i++) {
        let item = _this[i];
        if (obj.hasOwnProperty(item)) {
            _this[i] = _this[_this.length - 1];
            _this.length--;
            i--;
            continue;
        }
        obj[item] = true;
    }
    obj = null;
    return _this;
};
ary = ary.myUnique();
console.log(ary);