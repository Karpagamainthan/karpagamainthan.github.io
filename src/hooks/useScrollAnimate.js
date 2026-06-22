import { useEffect } from 'react';

const useScrollAnimate = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const attrs = ['[data-animate]', '[data-animate-left]', '[data-animate-right]'];
    const elements = document.querySelectorAll(attrs.join(', '));

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('animated'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || 0;
            setTimeout(() => el.classList.add('animated'), Number(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimate;
