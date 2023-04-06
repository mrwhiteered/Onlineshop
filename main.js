// вещаю событие клика на кнопку покупки 
const addToCartButtons = document.querySelectorAll('.buuy');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

let cartCounter = 0;

// собираем товар 
function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item__card');
  const itemId = item.dataset.id;
  const itemName = item.querySelector('.item__name').textContent;
  const itemPrice = item.querySelector('.price').textContent;
  
  addToCart(itemId, itemName, itemPrice);
}


function addToCart(itemId, itemName, itemPrice) {
  const cartItemsContainer = document.querySelector('.cart__items-container');
  const existingCartItem = cartItemsContainer.querySelector(`[data-id="${itemId}"]`);

  if (existingCartItem) {
    const quantity = existingCartItem.querySelector('.cart__item-quantity');
    const newQuantity = Number(quantity.textContent) + 1;
    quantity.textContent = newQuantity;
    updateCartTotal();
    
  } else {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__item');
    cartItem.dataset.id = itemId;
    cartItem.innerHTML = `
      <div class="cart__item-name">${itemName}</div>
      <div class="cart__item-price">${itemPrice}</div>
      <div class="cart__item-quantity">1</div>
     
      <button class="remove__one__element">-</button>
      <button class="add__one__fromCard">+</button>
      <button class="remove-from-cart-button">Удалить</button>
    `;

  

    cartItemsContainer.appendChild(cartItem);
    const btnPlus = cartItem.querySelector('.add__one__fromCard');
    const btnMinus = cartItem.querySelector('.remove__one__element');
    btnPlus.addEventListener('click', () => {
      const quantity = cartItem.querySelector('.cart__item-quantity');
      const newQuantity = Number(quantity.textContent) + 1;
      quantity.textContent = newQuantity;
      
      updateCartTotal(); // вызываем updateCartTotal() при добавлении товара
    });
    
    btnMinus.addEventListener('click', () => {
      const quantity = cartItem.querySelector('.cart__item-quantity');
      const newQuantity = Number(quantity.textContent) - 1;
      if (newQuantity < 1) {
        cartItem.remove();
      } else {
        quantity.textContent = newQuantity;
      }
      updateCartTotal(); // вызываем updateCartTotal() при удалении товара
    });
    updateCartTotal(); // вызываем updateCartTotal после добавления первого элемента
  }

  const deleteButtons = document.querySelectorAll('.remove-from-cart-button');
  deleteButtons.forEach(buttonDel => {
    buttonDel.addEventListener('click', () => {
      const listItemDel = buttonDel.parentNode;
      const itemPriceNumber = Number(listItemDel.querySelector('.cart__item-price').textContent.replace('$', ''));
      const itemQuantity = Number(listItemDel.querySelector('.cart__item-quantity').textContent);
      listItemDel.remove();
      updateCartTotal();
    });
  });
}




function updateCartTotal() {
  const cartItems = document.querySelectorAll('.cart__item');
  let total = 0;
  let itemCount = 0;

  cartItems.forEach(cartItem => {
    const itemId = cartItem.dataset.id;
    const itemPrice = Number(cartItem.querySelector('.cart__item-price').textContent.replace('$', ''));
    const itemQuantity = Number(cartItem.querySelector('.cart__item-quantity').textContent);
    total += itemPrice * itemQuantity;
    itemCount += itemQuantity;
  });

  if (cartItems.length === 0) {
    total = 0;
  }

  document.querySelector('.total__price').textContent = `$${total.toFixed(2)}`;
  document.querySelector('.counter__card').textContent = itemCount;
}


