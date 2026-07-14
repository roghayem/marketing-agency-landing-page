// ========== MOBILE MENU ==========
  (function() {
    const menuToggle = document.getElementById('menuToggle');
    const navRight = document.getElementById('navRight');
    let isOpen = false;

    function closeMenu() {
      if (navRight.classList.contains('open')) {
        navRight.classList.remove('open');
        isOpen = false;
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
          const icon = menuToggle.querySelector('i');
          if (icon) icon.className = 'fas fa-bars';
        }
      }
    }
    function toggleMenu() {
      if (navRight.classList.contains('open')) {
        closeMenu();
      } else {
        navRight.classList.add('open');
        isOpen = true;
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'true');
          const icon = menuToggle.querySelector('i');
          if (icon) icon.className = 'fas fa-times';
        }
      }
    }
    if (menuToggle) {
      menuToggle.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => { if (window.innerWidth <= 860) closeMenu(); });
    });
    document.addEventListener('click', (e) => {
      if (isOpen && window.innerWidth <= 860 && !navRight.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isOpen) closeMenu(); });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && navRight.classList.contains('open')) closeMenu();
    });

    document.getElementById('signupBtn')?.addEventListener('click', () => {
      alert('🚀 Sign-up feature coming soon!');
      if (window.innerWidth <= 860) closeMenu();
    });
  })();

  // ========== FAQ ACCORDION ==========
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
