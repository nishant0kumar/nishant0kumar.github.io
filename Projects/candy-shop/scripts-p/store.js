import {products} from '../data/product.js'
import {cart, addTocart} from '../data/cart.js';

let productsHtml = '';

products.forEach((product) => {
    productsHtml += `
    <div class="product-container">
    <div class="img-container">
      <img src="../product-images/${product.image}" alt="product-image">
    </div>

    <div class="product-details">
      <p>${product.name}</p>
      <span>MRP $${((product.priceCents)/100).toFixed(2)}/-</span>
      <i class="fa-solid fa-shopping-bag js-add-to-cart" data-product-id="${product.productId}"></i>
    </div>
  </div> `;

})

document.querySelector('.container').innerHTML = productsHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addTocart(productId);
      let cartQuantity = 0;

      cart.forEach((item) => {
          cartQuantity += item.quantity;
      })

      document.querySelector('.js-cart').innerHTML = cartQuantity;
  });
});