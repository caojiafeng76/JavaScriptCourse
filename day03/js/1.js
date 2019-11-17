// console.log(changeNumber(10));;
// function changeNumber(x) {
//     x += 10;
//     x /= 2;
//     return x.toFixed(2);
// }

var oBox = document.getElementById("box");
// oBox.style.backgroundColor = "#ccc";
var oLis = oBox.getElementsByTagName("li");
for (var i = 0; i < oLis.length; i++) {
    oLis[i].className = "bg" + (i % 3);
    oLis[i].onmouseover = function () {
        this.className += "hover";
    }
    oLis[i].onmouseout = function () {
        this.className = this.className.replace("hover", "");
    }

    // switch (i % 3) {
    //     case 0:
    //         oLis[i].style.backgroundColor = "#888888";
    //         oLis[i].onmouseout = function () {
    //             this.style.backgroundColor = "#888888";
    //         }
    //         break;
    //     case 1:
    //         oLis[i].style.backgroundColor = "#456456";
    //         oLis[i].onmouseout = function () {
    //             this.style.backgroundColor = "#456456";
    //         }
    //         break;
    //     case 2:
    //         oLis[i].style.backgroundColor = "#789789";
    //         oLis[i].onmouseout = function () {
    //             this.style.backgroundColor = "#789789";
    //         }
    //         break;
    //     default:
    //         break;
    // }
}

