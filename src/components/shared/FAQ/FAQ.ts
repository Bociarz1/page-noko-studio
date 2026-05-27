function initAccordion() {
  const items = document.querySelectorAll('[data-accordion-item]');

  items.forEach(item => {
    const trigger = item.querySelector('.faq__trigger');

    if (trigger) {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        items.forEach(otherItem => {
          if (otherItem !== item) {
            const otherTrigger = otherItem.querySelector('.faq__trigger');
            if (otherTrigger) {
              otherTrigger.setAttribute('aria-expanded', 'false');
              otherItem.classList.remove('is-open');
            }
          }
        });

        trigger.setAttribute('aria-expanded', (!isExpanded).toString());
        if (!isExpanded) {
          item.classList.add('is-open');
        } else {
          item.classList.remove('is-open');
        }
      });
    }
  });
}

initAccordion();

document.addEventListener('astro:page-load', initAccordion);
