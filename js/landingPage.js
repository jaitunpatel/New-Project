function renderLandingPage() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="navbar">
      <div class="logo">Logo</div>
      <div class="placeholders">
        <a href="#/allmenus" class="menu-button">MENU</a>
        <span>Placeholder 2</span>
        <span>Placeholder 3</span>
      </div>
    </div>
    <div class="landing-page">
      <div class="content">
        <h1>Delight in Every Bite – Your Perfect Meal, Just Moments Away!</h1>
        <p>Customize your order with our unique sliders!</p>
        <a href="#/restrictions" class="beginButton" id="beginButton">BEGIN</a>
      </div>
      <div class="image-container">
        <img src="images/landing.png" alt="Landing Page Image" class="landing-image">
      </div>
    </div>

    <!-- ModalStructure -->
    <div class="modal" id="modal" style="display: none;">
      <div class="modal-content">
        <button id="closeModal" class="browser-style-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <div id="modalContent"></div>
      </div>
    </div>
  `;

  const beginButton = document.getElementById('beginButton');
  beginButton.addEventListener('click', function(event) {
    event.preventDefault();

    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    loadRestrictionsPageContent();
  });

  const closeModal = document.getElementById('closeModal');
  closeModal.addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  });
}


function loadRestrictionsPageContent() {
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <h2>Set Your Restrictions</h2>
    <p>Here you can choose your preferences...</p>
    <div class="restrictions-page">
      <div class="content">
        <a href="javascript:void(0);" id="nextButton" class="nextButton">NEXT</a>
      </div>
    </div>
  `;

  const nextButton = document.getElementById('nextButton');
  nextButton.addEventListener('click', function() {
    loadFiltersPageContent();
  });

  function loadFiltersPageContent() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
      <div class="filters-page">
        <button id="backButton" class="browser-style-back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <h1>Set Your Preferences</h1>
        <div class="slider-container">
          <div class="slider-wrapper">
            <h4>Price Range</h4>
            <div id="priceRange" class="slider"></div>
            <p class="slider-value" id="priceValue">$0 - $100</p>

            <h4>Calorie Range</h4>
            <div id="calorieRange" class="slider"></div>
            <p class="slider-value" id="calorieValue">0 - 1000 cal</p>

            <h4>Portion Size</h4>
            <div id="portionSize" class="slider"></div>
            <p class="slider-value" id="portionValue">0 - 20 oz</p>
          </div>
        </div>
        <div class="buttons-container">
          <button id="resetButton" class="button reset-button">RESET FILTERS</button>
          <a href="#/menus" class="button showAvailableButton">SHOW AVAILABLE MENUS</a>
        </div>
      </div>
    `;
  
    // Add event listener to the back button
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', loadRestrictionsPageContent);
  
    // Add event listener to the reset button
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetFilters);
  
    // Initialize noUiSliders with localStorage values
    initializeRangeSlider('priceRange', 0, 100, [0, 100], 'priceValue', '$', 'priceRangeValues');
    initializeRangeSlider('calorieRange', 0, 1000, [0, 1000], 'calorieValue', ' cal', 'calorieRangeValues');
    initializeRangeSlider('portionSize', 0, 20, [0, 20], 'portionValue', ' oz', 'portionSizeValues');
  
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', function() {
      renderLandingPage();
    });
    
    const showAvailableMenusButton = document.querySelector('.showAvailableButton');
    showAvailableMenusButton.addEventListener('click', function(event) {
      event.preventDefault();
      setFiltersCompleted(true);
      window.location.hash = '#/menus';
    });
  }
  
  function initializeRangeSlider(id, min, max, start, valueElementId, unit, storageKey) {
    const slider = document.getElementById(id);
    const valueElement = document.getElementById(valueElementId);
  
    // Load saved values from localStorage if available
    const savedValues = localStorage.getItem(storageKey);
    const initialValues = savedValues ? JSON.parse(savedValues) : start;
  
    noUiSlider.create(slider, {
      start: initialValues,
      connect: true,
      range: {
        min: min,
        max: max
      },
      format: {
        to: function (value) {
          return value.toFixed(0) + unit;
        },
        from: function (value) {
          return Number(value.replace(unit, ''));
        }
      }
    });
  
    slider.noUiSlider.on('update', function (values, handle) {
      valueElement.innerHTML = values.join(' - ');
      localStorage.setItem(storageKey, JSON.stringify(values));
    });
  }
  
  function resetFilters() {
    localStorage.removeItem('priceRangeValues');
    localStorage.removeItem('calorieRangeValues');
    localStorage.removeItem('portionSizeValues');
  
    loadFiltersPageContent();
  }
  
}
