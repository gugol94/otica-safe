// Óticas Safe - JS básico
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Close navbar on link click (mobile)
  const navLinks = document.querySelectorAll('#navbarContent .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const isShown = navbarCollapse.classList.contains('show');
      if (isShown) new bootstrap.Collapse(navbarCollapse).hide();
    });
  });

  // Highlight active section on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.navbar .nav-link');

  function onScroll() {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const top = rect.top + window.scrollY - 120; // offset for fixed nav
      const bottom = top + sec.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        navItems.forEach((a) => a.classList.remove('active'));
        const active = document.querySelector(`.navbar .nav-link[href="#${sec.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
