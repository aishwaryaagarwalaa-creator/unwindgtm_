const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const LOGO = '<span style="color:#0D1B3E;font-family:\'Sora\',sans-serif;font-weight:600">unwind</span><span style="color:#F97316;font-family:\'Sora\',sans-serif;font-weight:800">GTM</span>';

const NAV_HTML = `
<nav class="nav" id="mainNav">
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo">${LOGO}</a>
    <ul class="nav-links" id="navLinks">
      <li><a href="../index.html" data-page="index.html">Home</a></li>
      <li><a href="../pages/about.html" data-page="about.html">About</a></li>
      <li><a href="../pages/services.html" data-page="services.html">GTM Offerings</a></li>
      <li><a href="../pages/ai-offerings.html" data-page="ai-offerings.html">AI Offerings</a></li>
      <li><a href="../pages/resources.html" data-page="resources.html">Resources</a></li>
      <li><a href="../pages/work-with-us.html" data-page="work-with-us.html" class="nav-cta">Work With Us</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-divider"></div>
  <div class="footer-logo">${LOGO}</div>
  <p class="footer-tagline">The Revenue Operations partner for mid-market B2B SaaS companies.</p>
  <ul class="footer-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../pages/about.html">About</a></li>
    <li><a href="../pages/services.html">GTM Offerings</a></li>
    <li><a href="../pages/ai-offerings.html">AI Offerings</a></li>
    <li><a href="../pages/resources.html">Resources</a></li>
    <li><a href="../pages/work-with-us.html">Work With Us</a></li>
  </ul>
  <p class="footer-copy">© ${new Date().getFullYear()} unwindGTM. All rights reserved.</p>
</footer>`;

function initPage() {
  document.body.insertAdjacentHTML('afterbegin', '<div class="bg-grid"></div>');
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  document.querySelectorAll('.nav-links a[data-page]').forEach(l => { if(l.dataset.page===currentPage) l.classList.add('active'); });
  document.getElementById('hamburger').addEventListener('click', () => document.getElementById('navLinks').classList.toggle('open'));
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').style.background = window.scrollY > 20 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
  });
}
document.readyState==='loading' ? document.addEventListener('DOMContentLoaded',initPage) : initPage();
