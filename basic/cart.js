// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartList = document.getElementById('cart-list');
const totalElement = document.getElementById('total');
let total = 0;

cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(itemDiv);
    total += item.price;
});

totalElement.textContent = `Total: $${total.toFixed(2)}`;