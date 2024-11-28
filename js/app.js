document.addEventListener('DOMContentLoaded', function() {
  function router() {
    const hash = window.location.hash;
    if (hash === '#/menus') {
      renderMenusPage();
    }
    else if(hash === '#/checkout'){
      renderCheckoutPage();
    }
    else {
      renderLandingPage();
    }
  }

  window.addEventListener('hashchange', router);
  router();  // Initial call
});
