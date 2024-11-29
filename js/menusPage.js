function renderMenusPage() {
  const app = document.getElementById('app');
  const currentPage = window.location.hash;
  
  app.innerHTML = `
    <div class="navbar">
      <div class="logo">Logo</div>
      <div class="placeholders">
        <a href="#/allmenus" class="menu-button">MENU</a>
        <a href="#/offers" class="menu-button">OFFERS</a>
        <a href="#/reviews" class="menu-button">REVIEWS</a>
        <button id="cartIcon" class="cart-icon">
          <span class="material-icons">shopping_cart</span>
          <span id="cartCount">0</span>
        </button>
      </div>
    </div>
  
    <div class="landing-page menu-page-container">
      <div class="content">
        <nav class="breadcrumb">
          <a href="#/" class="breadcrumb-item ${currentPage === '#' ? 'current-page' : ''}">Home</a>
          <span class="breadcrumb-separator">&gt;</span>
          <a href="#/menus" class="breadcrumb-item ${currentPage === '#/menus' ? 'current-page' : 'inactive-page'}">Menu</a>
        </nav>
      </div>
  
      <div class="menu-slider">
        <button id="leftArrow" class="slider-arrow left-arrow">&lt;</button>
        <div id="menusList" class="menus-list">
          <!-- Menu items will be inserted here dynamically -->
        </div>
        <button id="rightArrow" class="slider-arrow right-arrow">&gt;</button>
      </div>
    </div>
  
    <div id="overlay" class="overlay hidden"></div>
    
    <div id="cartDrawer" class="cart-drawer hidden">
      <div class="cart-close-button-container">
        <button class="cart-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M19.707 4.293a1 1 0 0 0-1.414 0L12 10.586 5.707 4.293a1 1 0 0 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 0 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0 0-1.414z"/>
          </svg>
        </button>
        <button id="clearCartButton" class="clear-cart-button">Clear Cart</button>
      </div>
      
      <div id="cartItems"></div>
      
      <div class="subtotal">
        <strong id="cartSubtotalLabel">Subtotal:</strong>
        <span id="cartSubtotal">0.00</span>
      </div>
      
      <a href="#/checkout" class="button checkoutButton">CHECKOUT</a>
    </div>
  `;
  

  const menus = [
    { name: "Hamburger Street ", description: "$8.53", image: "https://via.placeholder.com/150", rating: 4.5, price: 8.53 },
    { name: "Poke bowl", description: "$8.53", image: "https://via.placeholder.com/150", rating: 4.5, price: 8.53 },
    { name: "Bowl", description: "$8.53", image: "https://via.placeholder.com/150", rating: 4.5, price: 8.53 },
    { name: "Indian", description: "$8.53", image: "https://via.placeholder.com/150", rating: 4.5, price: 8.53 },
    { name: "Chinese", description: "$8.53", image: "https://via.placeholder.com/150", rating: 4.5, price: 8.53 },
    { name: "Ham Fast Food ", description: "$8.53", image: "https://via.placeholder.com/150", rating: 4.5, price: 8.53 },
  ];

  const menusList = document.getElementById('menusList');
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const cartCountElement = document.getElementById('cartCount');
  const cartSubtotalElement = document.getElementById('cartSubtotal');
  const cartDrawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('overlay');
  const clearCartButton = document.getElementById('clearCartButton');
  const cartSubtotalLabel = document.getElementById('cartSubtotalLabel');
  
  let currentIndex = 0;
  const itemsToShow = 3;

  // Render menu items
  menus.forEach(menu => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
      <div class="menu-card">
        <div class="menu-header">
          <div class="menu-image">
            <img src="${menu.image}" alt="${menu.name}">
          </div>
          <div class="menu-rating">
            <span class="star">⭐</span>
            <span>${menu.rating}</span>
          </div>
        </div>
        <div class="menu-info">
          <h3>${menu.name}</h3>
          <p>${menu.description}</p>
          <button class="add-to-cart">Add To Cart</button>
        </div>
      </div>
    `;
    menusList.appendChild(menuItem);

    const addToCartButton = menuItem.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
      const itemInCart = cartItems.find(item => item.name === menu.name);

      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        cartItems.push({ ...menu, quantity: 1 });
      }

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      updateCart();
    });
  });

  const checkOutButton = document.querySelector('.checkoutButton');
  checkOutButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '#/checkout';
  });

  const updateSlider = () => {
    const newTransformValue = -(currentIndex * 33.33);
    menusList.style.transform = `translateX(${newTransformValue}%)`;
  };
  
  document.getElementById('leftArrow').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlider();
    }
  });
  

  document.getElementById('rightArrow').addEventListener('click', () => {
    if (currentIndex < menus.length - itemsToShow) { 
      currentIndex += 1;
      updateSlider();
    }
  });
  
  // Initial update
  updateSlider();

  document.getElementById('leftArrow').style.left = '-10px';
  document.getElementById('rightArrow').style.right = '-10px';

  // Cart interactions
  document.getElementById('cartIcon').addEventListener('click', () => {
    cartDrawer.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });

  overlay.addEventListener('click', () => {
    cartDrawer.classList.add('hidden');
    overlay.classList.add('hidden');
  });

  document.querySelector('.cart-close-button').addEventListener('click', () => {
    cartDrawer.classList.add('hidden');
    overlay.classList.add('hidden');
  });

  clearCartButton.addEventListener('click', () => {
    cartItems = [];
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
  });

  // Update cart and subtotal
  function updateCart() {
    let subtotal = 0;
    cartCountElement.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    cartItems.forEach(item => {
      subtotal += item.price * item.quantity;
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <div class="cart-item-info">
          <span>${item.name}</span>
          <div class="quantity-controls">
            <button class="decrease-quantity">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase-quantity">+</button>
          </div>
        </div>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      `;
      cartItemsElement.appendChild(cartItem);

      // Add event listeners for quantity buttons
      const decreaseButton = cartItem.querySelector('.decrease-quantity');
      const increaseButton = cartItem.querySelector('.increase-quantity');
      const quantitySpan = cartItem.querySelector('.quantity');

      decreaseButton.addEventListener('click', () => {
        if (item.quantity > 1) {
          item.quantity--;
          quantitySpan.textContent = item.quantity;
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          updateCart();
        }
      });

      increaseButton.addEventListener('click', () => {
        item.quantity++;
        quantitySpan.textContent = item.quantity;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCart();
      });
    });

    if (cartItems.length === 0) {
      cartSubtotalLabel.innerHTML = '<strong>Add items to start a cart<br>Once you add items from a restaurant or store, your cart will appear here.</strong>';
      cartSubtotalElement.textContent = '';
      clearCartButton.style.display = 'none';
      checkOutButton.style.display = 'none';
    } else {
      cartSubtotalLabel.innerHTML = '<strong>Subtotal:</strong>';
      cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
      clearCartButton.style.display = 'inline-block';
      checkOutButton.style.display = 'block';
    }
  }

  updateCart();
}
