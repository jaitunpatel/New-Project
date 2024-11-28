document.addEventListener('DOMContentLoaded', function() {
  function updateBreadcrumb(currentPage) {
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
    breadcrumbItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === currentPage) {
        item.classList.add('active');
      }
    });
  }

  function router() {
    const hash = window.location.hash;
    if (hash === '#/menus') {
      renderMenusPage();
      updateBreadcrumb('#/menus');
    }
    else if(hash === '#/checkout'){
      renderCheckoutPage();
      updateBreadcrumb('#/checkout');
    }
    else {
      renderLandingPage();
      updateBreadcrumb('#/');
    }
  }

  window.addEventListener('hashchange', router);
  router();  // Initial call
});