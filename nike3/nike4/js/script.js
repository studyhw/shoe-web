let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');




// 定义了一个Swiper对象，并将其赋给名为“swiper”的变量。
var swiper = new Swiper(".featured-slider", {
  // 布尔值，为true时鼠标变为手型状，可以拖动轮播。
  grabCursor: true,
  // 布尔值，为true时始终将当前轮播项居中。
  centeredSlides: true,  
  // 数字，定义相邻项之间的间距。
  spaceBetween: 20,
  // 布尔值，为true时轮播无限循环。
  loop:true,
  // 对象，用于自动轮播功能的设置。
  autoplay: {
    delay: 2000,//间隔时间ms
    disableOnInteraction: false,//一直轮播
  },
  // 用于定义轮播图的分页器。
  pagination: {
    el: ".swiper-pagination",
    clickable:true,//可以点击分页器切换轮播项圆点
  },
  // 定义不同屏幕宽度下的轮播项展示数量。
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// 这段JS代码声明了一个Swiper对象，用于创建一个图片轮播特效。下面是对每个选项的解释：

// - grabCursor: 当用户hover到Swiper时，鼠标会变成手型，表明可以抓取
// - centeredSlides: 居中显示每一个slide，第一个slide默认放在视图中心
// - spaceBetween: slide之间的距离，单位是px
// - loop: 是否开启无缝轮播，即从最后一张图跳到第一张继续播放。
// - autoplay: 自动轮播设置，delay表示每张轮播图的停留时间，单位是ms。
// - disableOnInteraction: 用户手动操作之后是否禁止自动轮播。
// - pagination: 分页器配置，el表示分页器html渲染节点的选择器，clickable表示分页器是否能否点击切换。
// - breakpoints: 响应式布局设置。当屏幕宽度达到对应值时，Swiper会根据 breakpoints 中对应的 slidesPerView 的值来显示几个 slide。如果不设 breakpoints，则默认只显示一个 slide。