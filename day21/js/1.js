let url = 'https://www.zhufengpeixun.cn/index.html?lx=1&from=wx#video';
let reg = /^(?:(http|https|ftp|):\/\/)((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
console.log(reg.exec(url));