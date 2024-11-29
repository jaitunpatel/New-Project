function renderLandingPage() {
  const app = document.getElementById('app');

  function updateMenuButton() {
    const currentPage = window.location.hash;
    const isAllMenusPage = currentPage === '#/allmenus';
  
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
      if (isAllMenusPage) {
        menuButton.classList.add('active');
      } else {
        menuButton.classList.remove('active');
      }
    }
  }
  
  updateMenuButton();
  
  window.addEventListener('hashchange', updateMenuButton);
  
  // Update the inner HTML
  app.innerHTML = `
    <div class="navbar">
      <div class="logo">FILTER FEAST</div>
      <div class="placeholders">
        <a href="#/allmenus" class="menu-button">MENU</a>
        <a href="#/offers" class="menu-button">OFFERS</a>
        <div id="reviewButton" class="menu-button">REVIEWS</div>
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


    <div class="reviewContainer" id="reviewCon" style="display: none;">
      <div class="reviewContent">
        <button id="closeReview" class="browser-style-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <div class="card">
          <div class="rating-container">
            <div class="rating-text">
              <p>How's your overall experience?</p>
            </div>
            <div class="rating">
              <form class="rating-form">

                <label for="super-happy">
                  <input type="radio" name="rating" class="super-happy" id="super-happy" value="super-happy" />
                  <svg viewBox="0 0 24 24"><path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </label>

                <label for="happy">
                  <input type="radio" name="rating" class="happy" id="happy" value="happy" checked />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" /></svg>
                </label>

                <label for="neutral">
                  <input type="radio" name="rating" class="neutral" id="neutral" value="neutral" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z" /></svg>
                </label>

                <label for="sad">
                  <input type="radio" name="rating" class="sad" id="sad" value="sad" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>
                </label>

                <label for="super-sad">
                  <input type="radio" name="rating" class="super-sad" id="super-sad" value="super-sad" />
                  <svg viewBox="0 0 24 24"><path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z" /></svg>
                </label>

              </form>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="rating-container">
            <div class="rating-text">
              <p>Did you get your food on time?</p>
            </div>
            <div class="rating">
              <form class="rating-form-1">

                <label for="super-happy1">
                  <input type="radio" name="rating" class="super-happy" id="super-happy1" value="super-happy1" />
                  <svg viewBox="0 0 24 24"><path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </label>

                <label for="happy1">
                  <input type="radio" name="rating" class="happy" id="happy1" value="happy1" checked />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" /></svg>
                </label>

                <label for="neutral1">
                  <input type="radio" name="rating" class="neutral" id="neutral1" value="neutral1" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z" /></svg>
                </label>

                <label for="sad1">
                  <input type="radio" name="rating" class="sad" id="sad1" value="sad1" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>
                </label>

                <label for="super-sad1">
                  <input type="radio" name="rating" class="super-sad" id="super-sad1" value="super-sad1" />
                  <svg viewBox="0 0 24 24"><path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z" /></svg>
                </label>

              </form>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="rating-container">
            <div class="rating-text">
              <p>How do you like our menu?</p>
            </div>
            <div class="rating">
              <form class="rating-form-2">

                <label for="super-happy2">
                  <input type="radio" name="rating" class="super-happy" id="super-happy2" value="super-happy2" />
                  <svg viewBox="0 0 24 24"><path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </label>

                <label for="happy2">
                  <input type="radio" name="rating" class="happy" id="happy2" value="happy2" checked />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" /></svg>
                </label>

                <label for="neutral2">
                  <input type="radio" name="rating" class="neutral" id="neutral2" value="neutral2" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z" /></svg>
                </label>

                <label for="sad2">
                  <input type="radio" name="rating" class="sad" id="sad2" value="sad22" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>
                </label>

                <label for="super-sad2">
                  <input type="radio" name="rating" class="super-sad" id="super-sad2" value="super-sad2" />
                  <svg viewBox="0 0 24 24"><path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z" /></svg>
                </label>

              </form>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="rating-container">
            <div class="rating-text">
              <p>Did your food match expectations?</p>
            </div>
            <div class="rating">
              <form class="rating-form-3">

                <label for="super-happy3">
                  <input type="radio" name="rating" class="super-happy" id="super-happy3" value="super-happy3" />
                  <svg viewBox="0 0 24 24"><path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </label>

                <label for="happy3">
                  <input type="radio" name="rating" class="happy" id="happy3" value="happy3" checked />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" /></svg>
                </label>

                <label for="neutral3">
                  <input type="radio" name="rating" class="neutral" id="neutral3" value="neutral3" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z" /></svg>
                </label>

                <label for="sad3">
                  <input type="radio" name="rating" class="sad" id="sad3" value="sad3" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>
                </label>

                <label for="super-sad3">
                  <input type="radio" name="rating" class="super-sad" id="super-sad3" value="super-sad3" />
                  <svg viewBox="0 0 24 24"><path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z" /></svg>
                </label>

              </form>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="rating-container">
            <div class="rating-text">
              <p>Was ordering smooth and enjoyable?</p>
            </div>
            <div class="rating">
              <form class="rating-form-4">

                <label for="super-happy4">
                  <input type="radio" name="rating" class="super-happy" id="super-happy4" value="super-happy4" />
                  <svg viewBox="0 0 24 24"><path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </label>

                <label for="happy4">
                  <input type="radio" name="rating" class="happy" id="happy4" value="happy4" checked />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" /></svg>
                </label>

                <label for="neutral4">
                  <input type="radio" name="rating" class="neutral" id="neutral4" value="neutral4" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z" /></svg>
                </label>

                <label for="sad4">
                  <input type="radio" name="rating" class="sad" id="sad4" value="sad4" />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>
                </label>

                <label for="super-sad4">
                  <input type="radio" name="rating" class="super-sad" id="super-sad4" value="super-sad4" />
                  <svg viewBox="0 0 24 24"><path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z" /></svg>
                </label>

              </form>
            </div>
          </div>
        </div>

        <div class="submitButton" id="submitButton">Submit</div>
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



  const reviewButton = document.getElementById('reviewButton');
  reviewButton.addEventListener('click', function(event) {
    event.preventDefault();

    const review = document.getElementById('reviewCon');
    review.style.display = 'flex';

  });

  const closeReview = document.getElementById('closeReview');
  closeReview.addEventListener('click', function() {
    const modal = document.getElementById('reviewCon');
    modal.style.display = 'none';
  });

  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function() {
    const review = document.getElementById('reviewCon');
    review.innerHTML=`
    <div class="reviewContent">
        <button id="closeReview" class="browser-style-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      <h2>Thank you very much for your review!</h2>
    </div>
  `;

    const closeReview = document.getElementById('closeReview');
    closeReview.addEventListener('click', function() {
      const modal = document.getElementById('reviewCon');
      modal.style.display = 'none';
    });
  });
}

function loadRestrictionsPageContent() {
  const modalContent = document.getElementById('modalContent');

  const restrictions = {
    dietary: [
      { id: 'vegetarian', label: 'Vegetarian', icon: '🥗', disables: ['noPork', 'noBeef', 'noChicken', 'noSeafood'], impliesNo: ['noPork', 'noBeef', 'noChicken', 'noSeafood'] },
      { id: 'vegan', label: 'Vegan', icon: '🌱', disables: ['noPork', 'noBeef', 'noChicken', 'noSeafood'], impliesNo: ['noPork', 'noBeef', 'noChicken', 'noSeafood'] },
      { id: 'glutenFree', label: 'Gluten-Free', icon: '🌾' },
      { id: 'dairyFree', label: 'Dairy-Free', icon: '🥛' },
      { id: 'nutFree', label: 'Nut-Free', icon: '🥜' }
    ],
    religious: [
      { id: 'halal', label: 'Halal', icon: '☪️', impliesNo: ['noPork'] },
      { id: 'kosher', label: 'Kosher', icon: '✡️', impliesNo: ['noPork'] }
    ],
    meats: [
      { id: 'noPork', label: 'No Pork', icon: '🐷' },
      { id: 'noBeef', label: 'No Beef', icon: '🐮' },
      { id: 'noChicken', label: 'No Chicken', icon: '🐔' },
      { id: 'noSeafood', label: 'No Seafood', icon: '🐟' }
    ]
  };

  function createCheckboxes(category) {
    return category.map(item => {
      const disables = item.disables ? item.disables.join(',') : '';
      const impliesNo = item.impliesNo ? item.impliesNo.join(',') : '';
      return `
        <div class="restriction-item">
          <input type="checkbox" id="${item.id}" name="${item.id}" class="restriction-checkbox" data-disables="${disables}" data-implies-no="${impliesNo}">
          <label for="${item.id}">${item.icon} ${item.label}</label>
        </div>
      `;
    }).join('');
  }

  modalContent.innerHTML = `
    <div class="restrictions-page">
      <h3>Dietary Preferences</h3>
      <div class="restriction-items">
        ${createCheckboxes(restrictions.dietary)}
      </div>

      <h3>Religious Preferences</h3>
      <div class="restriction-items">
        ${createCheckboxes(restrictions.religious)}
      </div>

      <h3>Meat Preferences</h3>
      <div class="restriction-items">
        ${createCheckboxes(restrictions.meats)}
      </div>

      <div class="content">
        <a href="javascript:void(0);" id="nextButton" class="nextButton">NEXT</a>
      </div>
    </div>
  `;

  const nextButton = document.getElementById('nextButton');
  nextButton.addEventListener('click', function() {
    loadFiltersPageContent();
  });

  function loadSelectedCheckboxes() {
    Object.keys(localStorage).forEach(key => {
      const checkbox = document.getElementById(key);
      if (checkbox) {
        checkbox.checked = JSON.parse(localStorage.getItem(key));
      }
    });
  }

  function saveCheckboxState(event) {
    const checkboxId = event.target.id;
    const checked = event.target.checked;
    localStorage.setItem(checkboxId, JSON.stringify(checked));
  }

  document.querySelectorAll('.restriction-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', saveCheckboxState);
  });

  loadSelectedCheckboxes();

  document.querySelectorAll('.restriction-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function(event) {
      const checkboxId = event.target.id;
      const disables = event.target.dataset.disables ? event.target.dataset.disables.split(',') : [];
      const impliesNo = event.target.dataset.impliesNo ? event.target.dataset.impliesNo.split(',') : [];

      if (event.target.checked) {
        disables.forEach(disabledId => {
          const disabledCheckbox = document.getElementById(disabledId);
          if (disabledCheckbox) disabledCheckbox.disabled = true;
        });

        impliesNo.forEach(impliedId => {
          const impliedCheckbox = document.getElementById(impliedId);
          if (impliedCheckbox && impliedCheckbox.checked) {
            impliedCheckbox.checked = false;
            localStorage.setItem(impliedId, JSON.stringify(false));
          }
        });
      } else {
        disables.forEach(disabledId => {
          const disabledCheckbox = document.getElementById(disabledId);
          if (disabledCheckbox) disabledCheckbox.disabled = false;
        });
      }
    });
  });
}


function renderRestrictionItems(items) {
  return items.map(item => {
    return `
      <label class="restriction-item">
        <input type="checkbox" id="${item.id}" class="restriction-checkbox" 
          data-disables="${item.disables ? item.disables.join(',') : ''}" 
          data-implies-no="${item.impliesNo ? item.impliesNo.join(',') : ''}">
        ${item.icon} ${item.label}
      </label>
    `;
  }).join('');
}

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
