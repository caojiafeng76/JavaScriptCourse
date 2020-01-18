let log = console.log.bind(console.log);

//图片延迟加载
// let $imgBox = $('.imgBox'),
//     $img = $imgBox.children('img'),
//     $window = $(window);
// $window.on('load scroll', function () {
//     if ($img.attr('isLoad')) return;
//     let $A = $imgBox.outerHeight() + $imgBox.offset().top,
//         $B = $window.scrollTop() + $window.outerHeight();
//     if ($A <= $B) {
//         $img.attr('src', $img.attr('img-data'));
//         $img.on('load', function () {
//             // $img.css('display', 'block');
//             $img.stop().fadeIn();
//         });
//         $img.attr('isLoad', 'True');
//     }
// });

let $container = $('.container'),
    $imgBoxs = null,
    $window = $(window);
//造点假数据
let str = ``;
new Array(20).fill(null).forEach(item => {
    str += `<div class="imgBox">
        <img src="" alt="" img-data="http://www.zhufengpeixun.cn/main/img/banner10.png">
    </div>`;
});
$container.html(str);
$imgBoxs = $container.children('.imgBox');

//多张图片延迟加载
$window.on('load scroll', () => {
    let $B = $window.scrollTop() + $window.outerHeight();
    $imgBoxs.each((index, item) => {
        let $item = $(item),
            $itemA = $item.outerHeight() + $item.offset().top,
            $img = $item.children('img');
        if ($itemA <= $B) {
            $img.attr('isLoad', true);
            $img.attr('src', $img.attr('img-data'));
            $img.on('load', () => $img.stop().fadeIn());
        }
    });
});