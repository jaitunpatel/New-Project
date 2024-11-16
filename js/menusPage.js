function renderMenusPage() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="navbar">
      <div class="logo">Logo</div>
      <div class="placeholders">
        <span>Placeholder 1</span>
        <span>Placeholder 2</span>
        <span>Placeholder 3</span>
      </div>
    </div>
    <div class="landing-page menu-page">
      <div class="content">
        <h2>Our Popular Menu</h2>
      </div>
      <div id="menusList" class="menus-list">
        <!-- Menu items will be inserted here dynamically -->
      </div>
    </div>
  `;

  const menus = [
    {
      "name": "Hamburger Street Food Seafood Fast Food",
      "description": "$8.53",
      "image": "https://via.placeholder.com/150",
      "rating": 4.5
    },
    {
      "name": "Poke bowl",
      "description": "$8.53",
      "image": "https://via.placeholder.com/150",
      "rating": 4.5
    },
    {
      "name": "Ham Fast Food Sausage European Cuisine",
      "description": "$8.53",
      "image": "https://via.placeholder.com/150",
      "rating": 4.5
    },
    {
      "name": "Ham Fast Food Sausage European Cuisine",
      "description": "$8.53",
      "image": "https://via.placeholder.com/150",
      "rating": 4.5
    }
  ];

  const menusList = document.getElementById('menusList');
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
          <div class="quantity-selector">
            <button class="decrease-quantity">-</button>
            <span class="quantity">1</span>
            <button class="increase-quantity">+</button>
          </div>
          <button class="add-to-cart">Add To Cart</button>
        </div>
      </div>
    `;
    menusList.appendChild(menuItem);
  });

  document.querySelectorAll('.increase-quantity').forEach(button => {
    button.addEventListener('click', event => {
      const quantityElement = event.target.previousElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = ++quantity;
    });
  });

  document.querySelectorAll('.decrease-quantity').forEach(button => {
    button.addEventListener('click', event => {
      const quantityElement = event.target.nextElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantityElement.textContent = --quantity;
      }
    });
  });
}
