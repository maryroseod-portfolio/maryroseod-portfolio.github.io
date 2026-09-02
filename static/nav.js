// Sidebar: expand/collapse the Social Media submenu
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-nav-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-nav-toggle');
      var sublinks = document.getElementById(targetId);
      var caret = btn.querySelector('.nav-caret');
      if (!sublinks) return;
      sublinks.classList.toggle('collapsed');
      if (caret) caret.classList.toggle('open');
    });
  });

  // Mobile menu open/close
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      var expanded = mobileNav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', expanded);
      menuToggle.textContent = expanded ? 'Close' : 'Menu';
    });
  }
});
