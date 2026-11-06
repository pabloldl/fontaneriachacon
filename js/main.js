'use strict';
const toggle = document.getElementById('trace-toggle');
toggle.addEventListener('click', () => {
  const active = toggle.getAttribute('aria-pressed') !== 'true';
  toggle.setAttribute('aria-pressed', String(active));
  document.querySelector('.diagram').classList.toggle('active', active);
  toggle.querySelector('span').textContent = active ? 'Ocultar recorrido' : 'Destacar recorrido';
  document.getElementById('trace-status').textContent = active
    ? 'Recorrido destacado de principio a fin.'
    : 'Recorrido sin destacar.';
});
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('pending');
    observer.observe(element);
  });
  motionPreference.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
      document.querySelectorAll('.pending').forEach((element) => element.classList.remove('pending'));
    }
  });
}
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const destination = document.getElementById(link.hash.slice(1));
    if (destination) {
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
    }
  });
});
