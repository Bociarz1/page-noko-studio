document.addEventListener('DOMContentLoaded', () => {
  const tocLinks = document.querySelectorAll<HTMLAnchorElement>('a[data-toc-link]');
  const headings = document.querySelectorAll('h2[id], h3[id]');

  // 1. Ustaw domyślnie pierwszy link jako aktywny na starcie
  if (tocLinks.length > 0) {
    tocLinks[0].classList.add('is-active');
  }

  // 2. Funkcja do scrollowania z offsetem navbara
  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarHeight = 100; // Zmień tę wartość jeśli Twój navbar ma inną wysokość
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 3. Podpięcie zdarzenia kliknięcia pod linki ze spisu treści
  tocLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Zablokuj domyślny skok z HTML
      const targetId = link.getAttribute('href')?.substring(1);
      if (targetId) {
        scrollToSection(targetId);
      }
    });
  });

  // 4. Intersection Observer (podświetlanie podczas scrollowania)
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80% 0px', // lub -50% wedle uznania
    threshold: 1.0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (!id) return;
      
      const link = document.querySelector(`a[data-toc-link][href="#${id}"]`);
      if (!link) return;

      if (entry.isIntersecting) {
        // Usuń active z innych
        document.querySelectorAll('a[data-toc-link]').forEach((el) => {
          el.classList.remove('is-active');
        });
        // Dodaj do aktualnego
        link.classList.add('is-active');
      }
    });
  }, observerOptions);

  // Dodaj nagłówki do obserwatora
  headings.forEach((section) => {
    observer.observe(section);
  });

  // 5. Przycisk "Do góry"
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
