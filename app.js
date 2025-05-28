// app.js
let cart = [];

function addToCart(item) {
  cart.push(item);
  document.getElementById('cart-count').innerText = cart.length;
  alert(item + ' added to cart!');
}
