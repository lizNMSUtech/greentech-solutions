/* ============================================================
   GreenTech Solutions — products.js

   Powers the Products page filter + search.
   - Category filter buttons toggle which products show
   - Live search box filters by name and description
   - Both filters combine (AND logic)
   - Updates a screen-reader-friendly results count
   - Shows an empty state when nothing matches

   No frameworks. Vanilla ES6.
   ============================================================ */

(function () {
  'use strict';

  // ---- DOM references ----
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput   = document.getElementById('product-search');
  const productCards  = document.querySelectorAll('.product-card');
  const resultsCount  = document.getElementById('results-count');
  const totalCount    = document.getElementById('total-count');
  const visibleCount  = document.getElementById('visible-count');
  const emptyState    = document.getElementById('empty-state');
  const resetButton   = document.getElementById('reset-filters');

  // Bail out gracefully if this script loaded on a page without products.
  if (!productCards.length) return;

  // ---- State ----
  let activeCategory = 'all';
  let searchTerm = '';

  // ---- Initialize the visible total count on first load ----
  if (totalCount) totalCount.textContent = productCards.length;

  /**
   * Apply both filters and update the DOM.
   * Each card is shown only if it matches BOTH the active category
   * AND the current search term.
   */
  function applyFilters() {
    let visible = 0;

    productCards.forEach(function (card) {
      const cardCategory = card.dataset.category;
      const cardText = (card.dataset.searchText || '').toLowerCase();

      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch   = (searchTerm === '' || cardText.includes(searchTerm));

      const shouldShow = matchesCategory && matchesSearch;

      if (shouldShow) {
        card.removeAttribute('hidden');
        visible++;
      } else {
        card.setAttribute('hidden', '');
      }
    });

    updateResultsCount(visible);
    toggleEmptyState(visible);
  }

  /**
   * Update the "Showing X of Y products" indicator.
   * The element has aria-live="polite" so screen readers
   * announce the count change without interrupting the user.
   */
  function updateResultsCount(visible) {
    if (visibleCount) visibleCount.textContent = visible;
  }

  /**
   * Show or hide the "no matches" message and the product grid.
   */
  function toggleEmptyState(visible) {
    if (!emptyState) return;

    if (visible === 0) {
      emptyState.classList.add('visible');
      emptyState.setAttribute('role', 'status');
    } else {
      emptyState.classList.remove('visible');
    }
  }

  /**
   * Handle a filter-button click: update active state, then re-filter.
   */
  function handleCategoryClick(event) {
    const clicked = event.currentTarget;
    const category = clicked.dataset.category;

    // Update visual + aria state
    filterButtons.forEach(function (btn) {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    clicked.classList.add('active');
    clicked.setAttribute('aria-pressed', 'true');

    activeCategory = category;
    applyFilters();
  }

  /**
   * Handle search-input typing.
   * Trimmed and lower-cased so the comparison in applyFilters is simple.
   */
  function handleSearchInput(event) {
    searchTerm = event.target.value.trim().toLowerCase();
    applyFilters();
  }

  /**
   * "Reset filters" button inside the empty state — restores defaults.
   */
  function handleReset() {
    activeCategory = 'all';
    searchTerm = '';

    // Reset UI
    filterButtons.forEach(function (btn) {
      const isAll = (btn.dataset.category === 'all');
      btn.classList.toggle('active', isAll);
      btn.setAttribute('aria-pressed', isAll ? 'true' : 'false');
    });
    if (searchInput) searchInput.value = '';

    applyFilters();
    if (searchInput) searchInput.focus();
  }

  // ---- Wire up event listeners ----
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', handleCategoryClick);
  });

  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
  }

  if (resetButton) {
    resetButton.addEventListener('click', handleReset);
  }

  // ---- Initial run ----
  applyFilters();
})();
