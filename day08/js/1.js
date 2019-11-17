var oTab = document.getElementById('tabBox'),
    tabList = oTab.getElementsByTagName('li'),
    divList = oTab.getElementsByTagName('div');
// for (var i = 0; i < tabList.length; i++) {
//     tabList[i]._index  = i;
//     tabList[i].onclick = function () {
//         changeTab(this._index);
//     }
// }

// for (var i = 0; i < tabList.length; i++) {
//     tabList[i].onclick = (function (n) {
//         var i = n;
//         return function () {
//             changeTab(i);
//         }
//     })(i);
// }


//原理：自执行函数执行形成不销毁的私有作用域
for (var i = 0; i < tabList.length; i++) {
    (function (n) {
        tabList[i].onclick = function () {
            changeTab(n);
        }
    })(i);
}

//切换选项卡
function changeTab(currentIndex) {
    for (var i = 0; i < tabList.length; i++) {
        tabList[i].className = divList[i].className = '';
    }
    tabList[currentIndex].className = divList[currentIndex].className = 'active';
}