~function () {
    function replace(reg, callbackFn) {
        if (!reg instanceof RegExp) {
            return;
        }
        let res = reg.exec(this);
        if (res) {
            let arg = [...res][0],
                begin = this.substr(0, res.index),
                end = this.substr(res.index + arg.length);
            arg = callbackFn(arg, ...res);
            return arg ? begin + arg + end : undefined;
        }
    }

    String.prototype.myReplace = replace;
}();
console.log('zhufengpeixun2020'.myReplace(/\d+/, (...args) => {
    console.log(args);}));
