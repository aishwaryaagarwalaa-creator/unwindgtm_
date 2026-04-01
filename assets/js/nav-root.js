/* Nav for index.html (root level) */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const NAV_HTML = `
<nav class="nav" id="mainNav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      Unwind GTM
      <span>Revenue Operations</span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" data-page="index.html">Home</a></li>
      <li><a href="pages/about.html" data-page="about.html">About</a></li>
      <li><a href="pages/services.html" data-page="services.html">Services</a></li>
      <li><a href="pages/resources.html" data-page="resources.html">Resources</a></li>
      <li><a href="pages/consultation.html" data-page="consultation.html" class="nav-cta">Book a Call</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-logo">Unwind GTM</div>
    <p class="footer-tagline">Untangle your go-to-market. Build systems that scale.</p>
    <ul class="footer-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="pages/about.html">About</a></li>
      <li><a href="pages/services.html">Services</a></li>
      <li><a href="pages/resources.html">Resources</a></li>
      <li><a href="pages/consultation.html">Consultation</a></li>
    </ul>
    <p class="footer-copy">© ${new Date().getFullYear()} Unwind GTM. All rights reserved.</p>
  </div>
</footer>`;

const BG_HTML = `<div class="bg-grid"></div><div class="bg-glow"></div>`;

function initPage() {
  document.body.insertAdjacentHTML('afterbegin', BG_HTML);
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active');
  });

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    nav.style.background = window.scrollY > 20
      ? 'rgba(10, 10, 15, 0.97)'
      : 'rgba(10, 10, 15, 0.85)';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
