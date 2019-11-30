let listBox = document.getElementById('list'),
    headerBox = document.getElementById('header'),
    linkList = headerBox.getElementsByTagName('a'),
    productList = listBox.getElementsByTagName('li');

~ function () {
    let productData = null; //用于绑定后台数据
    //创建Ajax
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/product.json', false);
    xhr.onreadystatechange = () => {
        productData = xhr.readyState === 4 && xhr.status === 200 ? JSON.parse(xhr.responseText) : null;
    };
    xhr.send(null);

    let str = ``;
    for (let i = 0; i < productData.length; i++) {
        let {
            title,
            img = 'img/1.jpg', //设置默认值
            price,
            time,
            hot
        } = productData[i];
        str += `<li data-price="${price}" 
                    data-time="${time}" 
                    data-hot="${hot}">
        <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span>
        </a></li>`;
    }
    listBox.innerHTML = str;
}();

//点击价格按升序排序
~ function () {
    let sortList = function () {
        let {
            index: _index,
            flag: _flag
        } = this;
        let productAry = [].slice.call(productList);
        productAry.sort((a, b) => {
            let ary = ['data-time', 'data-price', 'data-hot'];
            let aInn = a.getAttribute(ary[_index]);
            let bInn = b.getAttribute(ary[_index]);
            if (_index === 0) {
                aInn = aInn.replace(/-/g, '');
                bInn = bInn.replace(/-/g, '');
            }
            return (aInn - bInn) * _flag;
        });
        for (let i = 0; i < productAry.length; i++) {
            let curLi = productAry[i];
            listBox.appendChild(curLi);
        }
    };
    for (let i = 0; i < linkList.length; i++) {
        let curLink = linkList[i];
        curLink.index = i;
        curLink.flag = -1;
        curLink.onclick = function () {
            for (let j = 0; j < linkList.length; j++) {
                let item = linkList[j];
                if (item !== this) {
                    item.flag = -1;
                }
            }
            this.flag *= -1;
            sortList.call(this);
        };
    }
}();