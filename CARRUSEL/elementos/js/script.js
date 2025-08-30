const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    const slideRect = slide.getBoundingClientRect();
    const slideCenter = slideRect.left + slideRect.width / 2;

    const bodyCenter = window.innerWidth / 2;
    const offset = slideCenter - bodyCenter;

    const currentTransform = getComputedStyle(carousel).transform;

    let currentTranslateX = 0;
    if (currentTransform !== 'none') {
      const matrix = new DOMMatrix(currentTransform);
      currentTranslateX = matrix.m41; // X value
    }

    const newTranslateX = currentTranslateX - offset;

    carousel.style.transform = `translateX(${newTranslateX}px)`;
  });
});

window.addEventListener('load', () => {
  slides[0].click(); // centra el primero automáticamente
});




// SLIDER DE TESTIMONIOS FUNCIONAL
document.querySelectorAll('.blockquote-slider').forEach(slider => {
  const slides = slider.querySelectorAll('.blockquote-slide');
  const prevBtn = slider.querySelector('.prev-quote');
  const nextBtn = slider.querySelector('.next-quote');
  let current = 0;

  const updateSlides = () => {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === current);
    });
  };

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateSlides();
  });

  updateSlides();
});
