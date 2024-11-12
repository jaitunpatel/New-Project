document.addEventListener('DOMContentLoaded', function() {
    function router() {
      const hash = window.location.hash;
      if (hash === '#/menus') {
        renderMenusPage();
      } else {
        renderLandingPage();
      }
    }
  
    window.addEventListener('hashchange', router);
    router();  // Initial call
  });
  