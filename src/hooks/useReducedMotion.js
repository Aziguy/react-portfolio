import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export const useReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(
    () => globalThis.matchMedia?.(QUERY).matches ?? false,
  );

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia?.(QUERY);
    if (!mediaQuery) return;

    const onChange = (/** @type {MediaQueryListEvent} */ event) => setPrefersReduced(event.matches);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  return prefersReduced;
};
