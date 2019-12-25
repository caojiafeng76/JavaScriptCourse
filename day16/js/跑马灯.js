let wrapper = document.querySelector('.wrapper');
//将原有内容克隆一份
wrapper.innerHTML += wrapper.innerHTML;
//改变容器的宽度为原有的2倍
utils.css(wrapper, {
    width: utils.css(wrapper, 'width') * 2,
});
setInterval(() => {
    //滚动
    let curL = utils.css(wrapper, 'left');
    curL -= 2;
    utils.css(wrapper, {
        left: curL
    });
    if (Math.abs(wrapper.offsetLeft) >= utils.css(wrapper, 'width') / 2) {
        utils.css(wrapper, 'left', 0);
    }
}, 1000 / 60);