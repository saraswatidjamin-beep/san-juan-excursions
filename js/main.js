document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function() {
    const links = document.querySelector('.nav-links');
    if (!links) return;
    const expanded = links.classList.toggle('open');
    this.setAttribute('aria-expanded', expanded);
  });
});
