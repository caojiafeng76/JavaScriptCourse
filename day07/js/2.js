(function () {
    function jquery() {
        console.log(1);
    }

    window.jquery = window.$ = jquery;
})();
jquery();

// let zepto = (function () {
//     return {
//         print: function (x) {
//             console.log(x);
//         }
//     };
// })();
// zepto.print(5);
