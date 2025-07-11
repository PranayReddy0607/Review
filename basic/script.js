// script.js
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Added to cart!');
    });
});