//查找字符串中是否存在字符，存在返回索引，否则返回-1
~function () {
    function returnIndex(str) {
        if (str.length > this.length) {
            return -1;
        }
        let reg = new RegExp(str),
            res = reg.exec(this);
        return res ? res.index : -1;
    }

    String.prototype.returnIndex = returnIndex;

}();

console.log('zhufengpeixun2020'.returnIndex('peia'));