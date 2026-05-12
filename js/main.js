/* ============================================================
   GreenTech Solutions — main.js
   Site-wide enhancements. Page-specific JS (filter/search,
   form validation) lives in separate files.
   ============================================================ */

(function () {
  'use strict';

  /**
   * Highlight the current page in the navbar based on the URL.
   * Avoids hard-coding `.active` in each HTML file.
   */
  function setActiveNavLink() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.navbar-nav .nav-link');

    links.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === path) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /**
   * Close the mobile navbar after clicking a link (Bootstrap
   * doesn't do this by default, and it's a small UX win).
   */
  function collapseNavOnLinkClick() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const collapseEl = document.getElementById('mainNav');
    if (!collapseEl || typeof bootstrap === 'undefined') return;

    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl, {
      toggle: false
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (collapseEl.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setActiveNavLink();
      collapseNavOnLinkClick();
    });
  } else {
    setActiveNavLink();
    collapseNavOnLinkClick();
  }
})();
