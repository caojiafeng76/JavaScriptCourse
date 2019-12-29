$(function () {
    //分页
    let page = 0,
        imgData = null;
    //获取数据
    let queryData = () => {
        page++;
        $.ajax({
            url: `json/data.json?page=${page}`,
            method: 'get',
            async: false,
            dataType: 'JSON',
            success: result => {
                imgData = result;
            }
        });
    };
    queryData();
    //绑定数据
    let queryHtml = ({id, pic, link, title} = {}) => {
        return `<a href="${link}">
            <div><img src="${pic}" alt=""></div>
            <span>${title}</span>
        </a>`;
    };
    let $boxList = $('.flowBox > li'),
        boxList = [].slice.call($boxList);
    for (let i = 0; i < imgData.length; i += 3) {
        let item1 = imgData[i],
            item2 = imgData[i + 1],
            item3 = imgData[i + 2];
        //排序
        boxList.sort((a, b) => a.offsetHeight - b.offsetHeight);
        if (item1) {
            boxList[0].innerHTML += queryHtml(item1);
        }
        if (item2) {
            boxList[1].innerHTML += queryHtml(item2);
        }
        if (item3) {
            boxList[2].innerHTML += queryHtml(item3);
        }
    }
});