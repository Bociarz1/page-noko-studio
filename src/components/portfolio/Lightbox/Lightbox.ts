const lightbox = document.getElementById('lightbox')!;
const track = document.getElementById('lightbox-track')!;
const counter = document.getElementById('lightbox-counter')!;
const closeBtn = document.getElementById('lightbox-close')!;
const backdrop = document.getElementById('lightbox-backdrop')!;
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');
const dots = document.querySelectorAll<HTMLButtonElement>('.lightbox__dot');

const total = track.children.length;
let current = 0;

function goTo(index: number) {
  current = (index + total) % total;
  track.style.transform = `translateX(-${current * 100}%)`;
  counter.textContent = `${current + 1} / ${total}`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('lightbox__dot--active', i === current);
  });
}

function open(index: number) {
  goTo(index);
  lightbox.classList.add('lightbox--open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function close() {
  lightbox.classList.remove('lightbox--open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Open on gallery item click
document.querySelectorAll<HTMLElement>('.project-gallery__item').forEach((item, i) => {
  item.style.cursor = 'zoom-in';
  item.addEventListener('click', () => open(i));
});

// Close handlers
closeBtn.addEventListener('click', close);
backdrop.addEventListener('click', close);

// Navigation
prevBtn?.addEventListener('click', () => goTo(current - 1));
nextBtn?.addEventListener('click', () => goTo(current + 1));

// Dots
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = Number(dot.dataset.index);
    goTo(index);
  });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('lightbox--open')) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});

// Touch / swipe support
let touchStartX = 0;
track.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
track.addEventListener('touchend', (e) => {
  const delta = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(delta) > 50) goTo(delta > 0 ? current + 1 : current - 1);
}, { passive: true });
