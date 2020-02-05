//柯里化函数思想：闭包，保存一些数据，用于内部小函数使用
let obj = {
    name: 'zhufeng',
    age: 10,
};

(function () {
    function myBind(context, ...outerArg) {
        let _this = this;
        return function (...innerArg) {
            _this.call(context, ...outerArg.concat(innerArg));
        }
    }
    Function.prototype.myBind = myBind;
})();

function fn(...arg) {
    console.log(this, ...arg);
}
document.body.onclick = fn.myBind(obj, 100, 200);