// theme toggle
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('nuvue-theme');
  if(stored){ root.setAttribute('data-theme', stored); toggle.setAttribute('aria-pressed', stored==='light'); }
  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('nuvue-theme', next);
    toggle.setAttribute('aria-pressed', next==='light');
  });

  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold:0.15 });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
