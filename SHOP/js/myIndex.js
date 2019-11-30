let productRender = (function () {
    //获取页面中的元素
    let listBox = document.querySelector('#list'),
        headerBox = document.querySelector('#header'),
        linkList = headerBox.querySelectorAll('a'), //链接集合
        productList = null; //产品列表集合
    let productData = null; //后台数据
    //绑定后台数据
    let getData = function () {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'json/product.json', false);
        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                productData = JSON.parse(xhr.responseText);
            }
        }
        xhr.send(null);
    };
    let bindHTML = function () {
        let str = ``;
        //直接解构获取到的数据，以模板字符串的方式添加到页面中
        productData.forEach(({
            title,
            price,
            time,
            hot,
            img
        }) => {
            str += `<li data-time = ${time} data-price = ${price} data-hot = ${hot}><a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span>
        </a></li>`
        });
        listBox.innerHTML = str;
        productList = listBox.querySelectorAll('li');
    };
    let bindClick = function () {
        //将类数组productList转化为数组，目的：使用sort方法进行排序
        productList = [].slice.call(productList);
        linkList.forEach((curLink, index) => {
            curLink.flag = -1; //定义一个flag用于正逆序排列
            curLink.onclick = function () {
                linkList.forEach(curLink => {
                    //如果不是当前点击的这一项，flag设为初始值，目的：为了不受上一次点击的影响
                    if (curLink !== this) {
                        curLink.flag = -1;
                    }
                });
                //定义一个数组存放排序条件
                let ary = ['data-time', 'data-price', 'data-hot'];
                this.flag *= -1;
                //排序规则：a:当前项，b:下一项，两值相减>0交换位置，<=0则不变
                productList.sort((a, b) => {
                    let aInn = a.getAttribute(ary[index]),
                        bInn = b.getAttribute(ary[index]);
                    if (index === 0) {
                        aInn = aInn.replace(/-/g, '');
                        bInn = bInn.replace(/-/g, '');
                    }
                    return (aInn - bInn) * this.flag;
                });
                //将排好序的内容重新添加到容器中，因为存在映射关系，所以该操作不会新添加元素，而是排序
                productList.forEach(curLi => {
                    listBox.appendChild(curLi);
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