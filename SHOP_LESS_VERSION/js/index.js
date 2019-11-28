let productRender = (function () {
    let productData = null,
        productBox = document.querySelector('.productBox'),
        headerBox = document.querySelector('.headerBox'),
        linkList = document.querySelectorAll('a'),
        productList = null;
    //从服务器获取数据
    let getData = function () {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'json/product.json', false);//异步获取
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                productData = JSON.parse(xhr.responseText);//把从服务器获取的json格式字符串转换为对象，方便后继操作
            }
        };
        xhr.send(null);
    };
    //绑定html数据
    let bindHTML = function () {
        let str = ``;
        productData.forEach(({title, price, hot, time, img}, index) => {
            str += `<li data-time="${time}" data-hot="${hot}" data-price="${price}"><a href="#">
                <img src="${img}" alt="">
                <p title="${title}">${title}</p>
                <span>￥${price}</span>
                <span>时间：${time}</span>
                <span>热度：${hot}</span>
            </a></li>`;
            productBox.innerHTML = str;
            productList = productBox.querySelectorAll('li');
        });
    };
    //绑定点击事件
    let bindClick = function () {
        [].forEach.call(linkList, (curLink, index) => {
            curLink.flag = -1;
            curLink.onclick = function () {
                linkList.forEach(item => {
                    if (item !== this) {
                        item.flag = -1;
                    }
                });
                this.flag *= -1;
                let ary = ['data-time', 'data-price', 'data-hot'];
                productList = [].slice.call(productList);
                productList.sort((a, b) => {
                    let aInn = a.getAttribute(ary[index]),
                        bInn = b.getAttribute(ary[index]);
                    if (index === 0) {
                        aInn = aInn.replace(/-/g, '');
                        bInn = bInn.replace(/-/g, '');
                    }
                    return (aInn - bInn) * this.flag;
                });
                //将排好序的li重新添加到容器中
                productList.forEach(curLi => {
                    productBox.appendChild(curLi);
                });
            };
        });
    };

    return {
        init: function () {
            getData();
            bindHTML();
            bindClick();
        }
    }
})();
productRender.init();