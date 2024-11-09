document.addEventListener('DOMContentLoaded', function() {
    function router() {
      const hash = window.location.hash;
      if (hash === '#/restrictions') {
        renderRestrictionsPage();
      } else if (hash === '#/filters') {
        renderFiltersPage();
      } else {
        renderLandingPage();
      }
    }
  
    window.addEventListener('hashchange', router);
    router();  // Initial call
  });
  