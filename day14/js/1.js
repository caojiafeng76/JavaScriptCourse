//分组捕获
let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d{1})(?:\d|X)$/g;
let res = reg.exec('330501199406151636');
let log = console.log.bind(console.log);
log(res);
log(res[2]);