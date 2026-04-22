  // Nav scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 20);
  });

  // VIN input formatting
  document.getElementById('vin-input').addEventListener('input', function() {
    this.value = this.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
  });

  // Handle audit button
  function handleAudit() {
    const vin = document.getElementById('vin-input').value;
    if (vin.length < 17) {
      document.querySelector('.vin-search-wrapper').style.borderColor = '#ef4444';
      document.querySelector('.vin-search-wrapper').style.boxShadow = '0 0 0 4px rgba(239,68,68,0.1)';
      document.getElementById('vin-input').placeholder = 'Please enter a full 17-character VIN';
      setTimeout(() => {
        document.querySelector('.vin-search-wrapper').style.borderColor = '';
        document.querySelector('.vin-search-wrapper').style.boxShadow = '';
        document.getElementById('vin-input').placeholder = 'Enter 17-character VIN (e.g. 1HGCM82633A004352)';
      }, 2500);
      return;
    }
    alert(`Auditing VIN: ${vin}\n\nIn a live build, this would generate your full Drive Audit Pro report instantly.`);
  }

  // FAQ accordion
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Testimonial scroll
  function scrollTesti(dir) {
    const track = document.getElementById('testi-track');
    track.scrollBy({ left: dir * 360, behavior: 'smooth' });
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));