const header = document.querySelector('.site-header');
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => link.addEventListener('click', (event) => {
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;
  event.preventDefault();
  const offset = header.offsetHeight + 8;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
}));
