import { useEffect, useState } from 'react';

/**
 * Renvoie l'identifiant de la section actuellement la plus visible.
 * @param {string[]} sectionIds
 * @param {{ rootMargin?: string }} [options]
 */
export const useScrollSpy = (sectionIds, { rootMargin = '-45% 0px -50% 0px' } = {}) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const closest = visible.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best,
        );
        setActiveId(closest.target.id);
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 1] },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(/** @returns {element is HTMLElement} */ (element) => element !== null);

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
};
