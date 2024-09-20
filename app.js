
// 获取指定类名为sliderWrapper的DOM节点
const wrapper = document.querySelector(".sliderWrapper");

// 获取所有指定类名为menuItem的DOM节点，返回NodeList对象
const menuItems = document.querySelectorAll(".menuItem");



// 定义商品列表，包含多个商品对象
const products = [
  {
    // 商品1
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      // 商品1可选颜色
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air1bule.webp",
      },
    ],
  },
  {
    // 商品2
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      // 商品2可选颜色
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/aj1green.webp",
      },
    ],
  },
  {
    // 商品3
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      // 商品3可选颜色
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    // 商品4
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      // 商品4可选颜色
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    // 商品5
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      // 商品5可选颜色
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];
// 创建 choosenProduct 变量
let choosenProduct = products[0];  // <---
// 获取页面中展示商品信息的元素节点
const currentProductImg = document.querySelector(".productImg");  // <---
const currentProductTitle = document.querySelector(".productTitle");  // <---
const currentProductPrice = document.querySelector(".productPrice");  // <---
const currentProductColors = document.querySelectorAll(".color");  // <---
const currentProductSizes = document.querySelectorAll(".size");  // <---

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide  改变当前幻灯片页面
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

//  这行代码是通过修改 `wrapper` 元素的 CSS 样式来实现水平平移的效果。具体来说，它会将 `wrapper` 元素（通常是一个包裹着其他元素的容器）
//  向左移动 `-100 * index` 个视口宽度的距离。这里使用了字符串模板来动态生成 `transform` 属性值，其中 `${-100 * index}vw` 
//  表示当前视口宽度的负数乘以 `index`，从而计算出需要平移的距离。
//  在这里，`transform` 属性的值设置为 `translateX` 函数，表示将元素沿着 x 轴平移。因为正常方向是从左到右，所以如果想使元素向左平移，
//  就需要将距离设为负数。视口宽度单位 `vw` 表示当前视口宽度的一个百分比，因此 `-100 * index` 表示移动元素的宽度倍数。
//  例如，如果当前视口宽度为 1000 像素，`index` 为 2，则实际平移的距离为 `-200vw`，即占据屏幕宽度的两倍。




    //change the choosen product  更改所选商品
    choosenProduct = products[index];

    //change texts of currentProduct  更改当前产品的文本
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors   传递新的颜色
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
// 给商品可选颜色绑定点击事件
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    // 当前选择的商品图片随着颜色更改而更新
    currentProductImg.src = choosenProduct.colors[index].img;  // <---
  });
});

// 给商品可选尺码绑定点击事件
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    // 遍历所有尺码元素，重置样式
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    // 设置当前选中尺码的样式
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
// 获取页面中的元素节点
const productButton = document.querySelector(".productButton");  // <---
const payment = document.querySelector(".payment");  // <---
const close = document.querySelector(".close");  // <---

// 给“立即购买”按钮绑定点击事件
productButton.addEventListener("click", () => {
  // 展示付款窗口
  payment.style.display = "flex";  // <---
});

// 给付款窗口的关闭按钮绑定点击事件
close.addEventListener("click", () => {
  // 隐藏付款窗口
  payment.style.display = "none";  // <---
});