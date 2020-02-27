(function() {
  class Banner {
    constructor(options = {}) {
      //=>OPTIONS传递的配置项(解构赋值并且给更多的配置项设置默认值)
      let {
        ele,
        url,
        isArrow = true,
        isFocus = true,
        isAuto = true,
        defaultIndex = 0,
        interval = 3000,
        speed = 200,
        moveEnd
      } = options;
      //=>把所有的配置项信息都挂载到实例上(这样以后在原型的任何方法中都可以调取这些属性获取值了)
      [
        "ele",
        "url",
        "isArrow",
        "isFocus",
        "isAuto",
        "defaultIndex",
        "interval",
        "speed",
        "moveEnd"
      ].forEach(item => {
        this[item] = eval(item);
      });
      let _conn = (this.container = document.querySelector(ele));
      this.wrapper = _conn.querySelector(".wrapper");
      this.focus = _con.querySelector(".focus");
      this.arrowLeft = _con.querySelector(".arrowLeft");
      this.arrowRight = _con.querySelector(".arrowRight");
      this.slideList = null;
      this.focusList = null;
      this.stepIndex = defaultIndex;
      this.autoTimer = null;

      //=>调取INIT开启轮播图
      this.init();
    }
    init() {
      let { isAuto, interval } = this;
      let promise = this.queryData();
      promise.then(this.bindHTML).then(() => {
        if (isAuto) {
          this.autoTimer = setInterval(() => {
            this.autoMove();
          }, interval);
        }
      });
    }
    //=>获取数据(PROMISE)
    queryData() {
      let { url } = this;
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            //=>把获取的数据也挂载到实例上了
            this.data = JSON.parse(xhr.responseText);
            resolve();
          }
        };
        xhr.send(null);
      });
    }

    //=>数据绑定
    bindHTML() {
      let { data, wrapper, focus, slideList, focusList } = this;
      let strSlide = ``,
        strFocus = ``;
      data.forEach((item, index) => {
        let { img = "img/banner1.jpg", desc = "珠峰培训" } = item;
        strSlide += `<div class="slide">
                    <img src="${img}" alt="${desc}">
                </div>`;
        strFocus += `<li class="${index === 0 ? "active" : ""}"></li>`;
      });
      wrapper.innerHTML = strSlide;
      focus.innerHTML = strFocus;

      //->获取所有的SLIDE和LI
      this.slideList = wrapper.querySelectorAll(".slide");
      this.focusList = focus.querySelectorAll("li");
      wrapper.appendChild(this.slideList[0].cloneNode(true));
      this.slideList = wrapper.querySelectorAll(".slide");
      utils.css(wrapper, "width", this.slideList.length * 1000);
    }

    //=>自动轮播
    autoMove() {
      this.stepIndex++;
      if (this.stepIndex >= this.slideList.length) {
        utils.css(this.wrapper, "left", 0);
        this.stepIndex = 1;
      }
      //->基于自主封装的ANIMATE实现切换动画
      animate(
        this.wrapper,
        {
          left: -this.stepIndex * 1000
        },
        this.speed
      );
      this.changeFocus();
    }

    changeFocus() {
      let tempIndex = this.stepIndex;
      tempIndex === this.slideList.length - 1 ? (tempIndex = 0) : null;
      [].forEach.call(this.focusList, (item, index) => {
        item.className = index === tempIndex ? "active" : "";
      });
    }
  }
  window.Banner = Banner;
})();
