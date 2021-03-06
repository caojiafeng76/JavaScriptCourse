$(function() {
  let bannerRender = (function anonymous() {
    let $container = $("#container"),
      $wrapper = $container.children(".wrapper"),
      $focus = $container.children(".focus"),
      $arrowLeft = $container.children(".arrowLeft"),
      $arrowRight = $container.children(".arrowRight"),
      $slideList = null,
      $focusList = null;

    let queryData = function queryData() {
      return new Promise((reslove, reject) => {
        $.ajax({
          url: "json/banner.json",
          method: "get",
          dataType: "json",
          async: true,
          success: reslove,
          error: reject
        });
      });
    };
    let bindHTML = function bindHTML(data) {
      let strSlide = ``,
        strFocus = ``;
      $.each(data, function(index, item) {
        let { img, desc } = item;
        strSlide += `<div class="slide">
                    <img src="${img}" alt="${desc}">
                </div>`;
        strFocus += `<li class="${index === 0 ? "active" : ""}"></li>`;
      });
      $wrapper.html(strSlide);
      $focus.html(strFocus);

      $slideList = $wrapper.find(".slide");
      $focusList = $focus.find("li");
    };

    let _index = 0, //=>当前展示SLIDE的索引
      _lastIndex = 0, //=>上一次展示SLIDE的索引
      _timer = null, //=>存储自动轮播的定时器
      _interval = 3000, //=>多久切换一次
      _speed = 200; //=>每一次切换动画的时间

    let autoMove = function autoMove() {
      _index++;
      //=>边界判断：如果累加的结果大于最大索引，我们展示第一个SLIDE即可
      if (_index >= $slideList.length) {
        _index = 0;
      }
      changeSlide();
    };
    //=>SLIDE切换的公共方法
    let changeSlide = function changeSlide() {
      /*
       * 切换思路：
       *   1.让当前的Z-INDEX=1，并且让上一个的Z-INDEX=0（这样是为了保证不管结构是靠前还是靠后，始终当前这个都是层级最高的，也是优先展示的）
       *   2.让当前的实现出渐现的效果（OPACITY从0~1）
       *   3.当前这个已经渐现出来（动画结束），我们再让上一个透明度为零（为了下一次展示它的时候，透明度是从零开始渐现的）
       *   4.让当前的索引变为下一次对应的上一次索引
       */
      let $cur = $slideList.eq(_index),
        $last = $slideList.eq(_lastIndex);
      $cur.css("zIndex", 1);
      $last.css("zIndex", 0);
      $cur.stop().animate(
        {
          opacity: 1
        },
        _speed,
        function() {
          $last.css("opacity", 0);
          _lastIndex = _index;
        }
      );
      changeFocus();
    };
    //实现焦点自动切换
    let changeFocus = function changeFocus() {
      $focusList.eq(_index).addClass("active");
      $focusList.eq(_lastIndex).removeClass("active");
    };
    //=>HANDLE-MOUSE:鼠标控制暂停和开启
    let handleMouse = function handleMouse() {
      $container
        .on("mouseenter", function() {
          clearInterval(_timer);
          $arrowLeft.add($arrowRight).css("display", "block");
        })
        .on("mouseleave", () => {
          _timer = setInterval(autoMove, _interval);
          $arrowLeft.add($arrowRight).css("display", "none");
        });
    };
    //=>HANDLE-ARROW:箭头左右切换
    let handleArrow = function handleArrow() {
      $arrowRight.on("click", autoMove);
      $arrowLeft.on("click", () => {
        _index--;
        if (_index < 0) {
          _index = $slideList.length - 1;
        }
        changeSlide();
      });
    };

    //=>HANDLE-FOCUS:点击焦点切换
    let handleFocus = function handleFocus() {
      $focusList.on("click", function anonymous() {
        let curIndex = $(this).index();
        if (_index === curIndex) {
          //=>当前展示的和点击的是同一个，不做任何的处理
          return;
        }
        _index = curIndex;
        changeSlide();
      });
    };
    return {
      init: function init() {
        let promise = queryData();
        0;
        promise.then(data => {
          bindHTML(data);
          _timer = setInterval(autoMove, _interval);
          handleMouse();
          handleArrow();
          handleFocus();
        });
      }
    };
  })();
  bannerRender.init();
});
