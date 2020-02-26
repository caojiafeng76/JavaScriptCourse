let bannerRender = (function() {
  //->获取后续需要操作的元素对象或者元素集合
  let container = document.querySelector("#container"),
    wrapper = container.querySelector(".wrapper"),
    focus = container.querySelector(".focus"),
    arrowLeft = container.querySelector(".arrowLeft"),
    arrowRight = container.querySelector(".arrowRight"),
    slideList = null,
    focusList = null;
  //获取数据
  let queryData = () => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "json/banner.json"); //第三个参数不传默认是异步的
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          resolve(data);
        }
      };
      xhr.send(null);
    });
  };

  //绑定数据
  let bindHTML = data => {
    let sildeStr = ``,
      focusStr = ``;
    data.forEach(({ img = "", desc = "" }, index) => {
      //->解构的时候如果当前返回的数据中没有IMG,我们可以让其等于默认图片
      sildeStr += `<div class="slide">
                <img src="${img}" alt="${desc}">
            </div>`;
      focusStr += `<li class="${index === 0 ? "active" : ""}"></li>`;

      wrapper.innerHTML = sildeStr;
      focus.innerHTML = focusStr;

      //->获取所有的SLIDE和LI
      slideList = document.querySelectorAll(".slide");
      focusList = document.querySelectorAll("li");

      //->把现有的第一张克隆一份放到容器的末尾（由于querySelectorAll不存在DOM映射，新增加一个原有集合中还是之前的SLIDE，所以我们需要重新获取一遍）
      wrapper.appendChild(slideList[0].cloneNode(true));
      slideList = document.querySelectorAll(".slide");

      //根据轮播图的个数wrapper计算宽度
      utils.css(wrapper, "width", slideList.length * container.offsetWidth);
    });
  };

  //自动轮播基础数据
  let stepIndex = 0, //当前展示块的索引
    autoTimer = null, //定时器
    interval = 3000; //默认间隔时间
  //自动切换
  let autoMove = () => {
    stepIndex++;
    //边界判断
    if (stepIndex >= slideList.length) {
      utils.css(wrapper, "left", 0);
      stepIndex = 1;
    }
    animate(
      wrapper,
      {
        left: -stepIndex * container.offsetWidth
      },
      300
    );
    changeFocus();
  };

  //=>CHANGE-FOCUS：让焦点跟着轮播图的切换而切换
  //（运动到克隆这一张的时候，也需要让第一个LI有选中的样式）
  let changeFocus = () => {
    //=>当轮播图运动到最后一张(克隆的第一张,我们需要让第一个LI[索引0]有选中的样式)（之所以使用TEMP-INDEX是因为STEP-INDEX对轮播图的切换有很大作用，不能轻易修改）
    let tempIndex = stepIndex;
    if (tempIndex === slideList.length - 1) {
      tempIndex = 0;
    }
    focusList.forEach((item, index) => {
      item.className = index === tempIndex ? "active" : "";
    });
  };

  //=>HANDLE-CONTAINER：鼠标进入和离开控制自动的轮播的停止和开启
  let handleContainer = () => {
    container.onmouseenter = function() {
      clearInterval(autoTimer);
      arrowLeft.style.display = arrowRight.style.display = "block";
    };
    container.onmouseleave = function() {
      autoTimer = setInterval(autoMove, interval);
      arrowLeft.style.display = arrowRight.style.display = "none";
    };
  };

  //=>HANDLE-FOCUS：点击焦点实现切换
  let handleFoucs = () => {
    focusList.forEach((item, index) => {
      item.onclick = () => {
        stepIndex = index; //=>点击的是谁，就让STEP-INDEX运动到哪（STEP-INDEX和点击LI的索引一致即可）
        animate(
          wrapper,
          {
            left: -stepIndex * container.offsetWidth
          },
          300
        );
        changeFocus();
      };
    });
  };

  //=>HANDLE-ARROW：给两个按钮绑定点击事件
  let handleArrow = () => {
    arrowRight.onclick = autoMove;

    arrowLeft.onclick = () => {
      stepIndex--;
      //=>如果索引减减小于零，说明当前已经是第一张，不能在向右运动了，此时我们让WRAPPER瞬间移动到最后一张（最后一张和第一张一模一样），在让其运动到倒数第二张即可
      if (stepIndex < 0) {
        utils.css(
          wrapper,
          "left",
          -(slideList.length - 1) * container.offsetWidth
        );
        stepIndex = slideList.length - 2;
      }

      animate(wrapper, { left: -stepIndex * container.offsetWidth }, 300);
      changeFocus();
    };
  };

  return {
    init: function init() {
      let promise = queryData();
      promise
        .then(bindHTML)
        .then(() => {
          autoTimer = setInterval(autoMove, interval);
        })
        .then(() => {
          //其他细节
          handleContainer();
          handleFoucs();
          handleArrow();
        });
    }
  };
})();
bannerRender.init();



