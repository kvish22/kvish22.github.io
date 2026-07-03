document.getElementById('year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll('.hero, .section');

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
} else {
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
