// ข้อมูลสินค้า (mock data)
const products = [
  { id: 1, name: "โน้ตบุ๊ก", price: 15000, img: "https://via.placeholder.com/200" },
  { id: 2, name: "หูฟัง", price: 8000, img: "https://via.placeholder.com/200" },
  { id: 3, name: "พาวเวอร์แบงค์", price: 1200, img: "https://via.placeholder.com/200" },
];

let cart = [];
let orders = [];

// แสดงสินค้า
function loadProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} บาท</p>
      <button class="add-btn" onclick="addToCart(${p.id})">เพิ่มลงตะกร้า</button>
    `;
    productList.appendChild(div);
  });
}

//เพิ่มลงตะกร้า
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

// แสดงตะกร้า
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} บาท`;
    cartList.appendChild(li);
  });
  document.getElementById("cart-total").textContent = total;
}

// สั่งซื้อ
function checkout() {
  if (cart.length === 0) {
    alert("ตะกร้าว่าง!");
    return;
  }
  orders.push([...cart]);
  cart = [];
  renderCart();
  renderOrders();
  alert("คำสั่งซื้อสำเร็จ!");
}

// แสดงคำสั่งซื้อ
function renderOrders() {
  const orderList = document.getElementById("order-list");
  orderList.innerHTML = "";
  orders.forEach((order, idx) => {
    const li = document.createElement("li");
    li.textContent = `คำสั่งซื้อ #${idx + 1} - ${order.length} รายการ`;
    orderList.appendChild(li);
  });
}

// การแสดงผล Section
function showSection(sectionId) {
  document.querySelectorAll("main section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

// โหลดสินค้า
window.onload = () => {
  loadProducts();
};

