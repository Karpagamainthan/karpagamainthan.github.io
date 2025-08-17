import { useEffect } from 'react';

const useScrollAnimate = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const elements = document.querySelectorAll('[data-animate]');

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('animated'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimate;