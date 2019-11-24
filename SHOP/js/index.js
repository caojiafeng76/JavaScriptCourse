let listBox = document.getElementById('list');

~function () {
    let productData = null;//用于绑定后台数据
//创建Ajax
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/product.json', false);
    xhr.onreadystatechange = () => {
        productData = xhr.readyState === 4 && xhr.status === 200 ? xhr.responseText : null;
        productData = productData ? JSON.parse(productData) : null;
    };
    xhr.send(null);

    let str = ``;
    for (let i = 0; i < productData.length; i++) {
        let {
            title,
            img = 'img/1.jpg',//设置默认值
            price
        } = productData[i];
        str += `<li><a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span>
        </a></li>`;
    }
    listBox.innerHTML = str;
}();
