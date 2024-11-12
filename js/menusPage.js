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
    <div class="landing-page">
      <div class="content">
        <h2>Our Popular Menu</h2>
      </div>
    </div>
  `;
  
    const menusList = document.getElementById('menusList');
    menusList.innerHTML = `
      <div class="menu-item">Menu Item 1</div>
      <div class="menu-item">Menu Item 2</div>
      <div class="menu-item">Menu Item 3</div>
    `;
  }