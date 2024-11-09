function renderFiltersPage() {
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
    <div class="filters-page">
      
      <h1>Set Your Preferences</h1>

      <div class="slider-container">
        <div class="slider-wrapper">

          <h4>Price Range</h4>
          <input type="range" min="0" max="100" value="50" class="slider" id="priceRange">
          <p class="slider-value" id="priceValue">$50</p>

          <h4>Calorie Range</h4>
          <input type="range" min="0" max="1000" value="500" class="slider" id="calorieRange">
          <p class="slider-value" id="calorieValue">500 cal</p>

          <h4>Portion Size</h4>
          <input type="range" min="0" max="20" value="10" class="slider" id="portionSize">
          <p class="slider-value" id="portionValue">10 oz</p>

        </div>
      </div>




      
      <div class="content">
        <a href="#/menus" class="showAvailableButton">SHOW AVAILABLE MENUS</a>
      </div>
    </div>
  `;
}