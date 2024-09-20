// 获取需要操作的DOM元素
const productNodes = document.querySelectorAll(".product"); // 获取每个商品节点
const totalNode = document.querySelector("#total");// 获取显示总价的节点

// 定义商品类
class Product {
  constructor(name, price, quantity) {
    this.name = name;// 商品名称
    this.price = price;// 商品单价
    this.quantity = quantity;// 商品数量
    this.totalPrice = price * quantity;// 商品总价
  }
}

const cartItems = []; // 存储购物车中的商品

// 初始化购物车
productNodes.forEach((product) => {
  // 获取每个商品的名称、单价和数量
  const name = product.querySelector("h2").textContent;
  const price = parseInt(product.querySelector(".price").textContent.slice(1));
  const quantity = parseInt(product.querySelector(".quantity-value").textContent);
  const cartItem = new Product(name, price, quantity);// 创建商品对象并将其添加到购物车中
  
  // 添加监听器
  // 获取数量加/减按钮和删除按钮节点
  const addButtonNode = product.querySelector(".positive");
  const minusButtonNode = product.querySelector(".negative");
  const removeButtonNode = product.querySelector(".remove");
  // 监听数量加/减和删除按钮的点击事件
  addButtonNode.addEventListener("click", () => {
    const currentAmount = parseInt(product.querySelector(".quantity-value").textContent);
    product.querySelector(".quantity-value").textContent = currentAmount + 1;// 更新数量
    const currentPrice = parseInt(product.querySelector(".price").textContent.slice(1));
    product.querySelector(".price").textContent = `¥${currentPrice + cartItem.price}`;// 更新单价
    cartItem.quantity++;// 更新商品对象的数量
    cartItem.totalPrice += cartItem.price;// 更新商品对象的总价
    updateTotal();// 更新购物车的总价
  });
  
  minusButtonNode.addEventListener("click", () => {
    // 获取当前商品的数量和单价
    const currentAmount = parseInt(product.querySelector(".quantity-value").textContent);
    if (currentAmount > 1) {// 检查是否达到最小数量，没有则执行
      product.querySelector(".quantity-value").textContent = currentAmount - 1;// 更新数量
      const currentPrice = parseInt(product.querySelector(".price").textContent.slice(1));
      product.querySelector(".price").textContent = `¥${currentPrice - cartItem.price}`;// 更新单价
      cartItem.quantity--; // 更新商品对象的数量
      cartItem.totalPrice -= cartItem.price;// 更新商品对象的总价
      updateTotal();// 更新购物车的总价
    }
  });
  
  removeButtonNode.addEventListener("click", () => {
    const productIndex = cartItems.findIndex(item => item.name === cartItem.name);// 获取要删除商品在购物车数组中的索引
    cartItems.splice(productIndex, 1);// 在数组中移除要删除的商品
    product.remove(); // 从 DOM 中移除商品节点
    updateTotal();// 更新购物车的总价
  });
  
  // 添加商品到购物车
  cartItems.push(cartItem);
  
});

// 更新购物车的总价
function updateTotal() {
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.totalPrice; // 计算购物车中所有商品的总价
  });
  totalNode.textContent = `¥${totalPrice}`;// 更新显示总价的节点的文本内容
}