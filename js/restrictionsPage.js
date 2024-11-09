function renderRestrictionsPage() {
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
      <div class="restrictions-page">
        <div class="content">
          <h1>Restrictions page</h1>
          <a href="#/filters" class="nextButton">NEXT</a>
        </div>
      </div>
    `;
  }
  