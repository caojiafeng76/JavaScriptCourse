$(function () {
    //分页
    let page = 0,
        imgData = null,
        isRun = false;
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
    let bindHtml = () => {
        let $boxList = $('.flowBox > li');
        for (let i = 0; i < imgData.length; i += 3) {
            $boxList.sort((a, b) => $(a).outerHeight() - $(b).outerHeight()).each((index, curLi) => {
                let item = imgData[i + index];
                if (!item) {
                    return;
                }
                let {id, pic, link, title} = item;
                $(`<a href="${link}">
            <div><img src="${pic}" alt=""></div>
            <span>${title}</span>
        </a>`).appendTo($(curLi));
            });
        }
        isRun = false;
    };
    bindHtml();

    //3.当滚动到页面底部的时候，加载下一页的更多数据
    $(window).on('scroll', () => {
        let winH = $(window).outerHeight(),
            pageH = $(document).outerHeight(),
            scrollT = $(window).scrollTop();

        if (scrollT + 100 >= pageH - winH) {
            if (isRun) {
                return;
            }
            isRun = true;
            if (page > 5) {
                alert('没有更多数据了');
                return;
            }
            queryData();
            bindHtml();
        }
    });


    // let queryHtml = ({id, pic, link, title} = {}) => {
    //     return `<a href="${link}">
    //         <div><img src="${pic}" alt=""></div>
    //         <span>${title}</span>
    //     </a>`;
    // };
    // let $boxList = $('.flowBox > li'),
    //     boxList = [].slice.call($boxList);
    // for (let i = 0; i < imgData.length; i += 3) {
    //     let item1 = imgData[i],
    //         item2 = imgData[i + 1],
    //         item3 = imgData[i + 2];
    //     //排序
    //     boxList.sort((a, b) => a.offsetHeight - b.offsetHeight);
    //     if (item1) {
    //         boxList[0].innerHTML += queryHtml(item1);
    //     }
    //     if (item2) {
    //         boxList[1].innerHTML += queryHtml(item2);
    //     }
    //     if (item3) {
    //         boxList[2].innerHTML += queryHtml(item3);
    //     }
    // }
});