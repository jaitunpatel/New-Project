function renderLandingPage() {
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
        <h1>Delight in Every Bite – Your Perfect Meal, Just Moments Away!</h1>
        <p>Customize your order with our unique sliders!</p>
        <a href="#/restrictions" class="beginButton">BEGIN</a>
      </div>
      <div class="image-container">
        <img src="images/landing.png" alt="Landing Page Image" class="landing-image">
      </div>
    </div>
  `;
}
