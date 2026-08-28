import { useEffect, useState } from 'react';

/**
 * Indique si la page a défilé au-delà du seuil donné.
 * @param {number} [threshold]
 */
export const useScrolled = (threshold = 24) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
};
