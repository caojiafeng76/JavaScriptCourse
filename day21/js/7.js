~function () { 
    function rotate(k) {
        if (k <= 0 || k === this.length) return this;
        if (k > this.length) k = k % this.length;
        // new Array(k).fill(null).forEach(() => this.unshift(this.pop()));
        // return this;
        // return [...this.splice(this.length - k), ...this];
        return this.slice(-k).concat(this.slice(0, this.length - k));
    }
    Array.prototype.rotate = rotate;
}();
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.rotate(3));
