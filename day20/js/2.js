//(5).add(3).minus(2)=6
~function () {
    function check(n) {
        n = Number(n);
        return isNaN(n) ? 0 : n;
    }

    function add(n) {
        n = check(n);
        return this + n;
    }

    function minus(n) {
        n = check(n);
        return this - n;
    }

    ['add', 'minus'].forEach(item => {
        Number.prototype[item] = eval(item);
    });
}();
console.log((5).add(3).minus(2));