function currying(fn, length) {
    length = length || fn.length;
    return function (...args) {
        if (args.length >= length) {
            return fn(...args);
        }
        return currying(fn.bind(null, ...args), length - args.length);
    }
}

let add = currying((...args) => eval(args.join('+')), 4);

console.log(add(1, 2)(3, 4));