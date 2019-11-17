var oTabBox = document.getElementById("tabBox"),
    oLis = oTabBox.getElementsByTagName("li"),
    oDivs = oTabBox.getElementsByTagName("div");
// for (var i = 0; i < oLis.length; i++) {
//     oLis[i].myIndex = i;
//     oLis[i].onmouseover = function () {
//         for (var j = 0; j < oLis.length; j++) {
//             oLis[j].className = oDivs[j].className = "";
//             this.className = "active";
//             oDivs[this.myIndex].className = "active";
//         }
//     }
// }

// function changeTab(index) {
//     for (var i = 0; i < oLis.length; i++) {
//         oLis[i].className = "";
//         oDivs[i].className = "";
//     }
//     oLis[index].className = "active";
//     oDivs[index].className = "active";
// }

// var lastIndex = 0;
// for (var i = 0; i < oLis.length; i++) {
//     oLis[i]._index = i;
//     oLis[i].onmouseover = function () {
//         if (this._index === lastIndex) {
//             return;
//         }
//         oLis[lastIndex].className = "";
//         oDivs[lastIndex].className = "";
//         this.className = "active";
//         oDivs[this._index].className = "active";
//         lastIndex = this._index;
//     }
// }

for (var i = 0; i < oLis.length; i++) {
    oLis[i].onmouseover = function () {
        changeTabByElement(this);
    }
}

function changeTabByElement(objEle) {
    for (var i = 0; i < oLis.length; i++) {
        if (objEle === oLis[i]) {
            oLis[i].className = "active";
            oDivs[i].className = "active";
            continue;
        }
        oLis[i].className = "";
        oDivs[i].className = "";
    }
}