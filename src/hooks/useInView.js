import { useEffect, useRef, useState } from 'react';

/**
 * Passe à `true` la première fois que l'élément entre dans le viewport.
 * @param {{ threshold?: number, rootMargin?: string }} [options]
 */
export const useInView = ({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) => {
  const ref = useRef(/** @type {HTMLElement | null} */ (null));
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
};
