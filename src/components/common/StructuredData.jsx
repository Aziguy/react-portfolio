import { useEffect } from 'react';
import { buildPersonSchema, buildProjectsSchema, buildWebSiteSchema } from '../../lib/seo.js';
import { useI18n } from '../../i18n/useI18n.js';

const SCRIPT_ID = 'structured-data';

export const StructuredData = () => {
  const { locale } = useI18n();

  useEffect(() => {
    const graph = [
      buildWebSiteSchema(locale),
      buildPersonSchema(locale),
      buildProjectsSchema(locale),
    ];

    const existing = document.getElementById(SCRIPT_ID);
    const script = existing ?? document.createElement('script');

    if (!existing) {
      script.id = SCRIPT_ID;
      script.setAttribute('type', 'application/ld+json');
      document.head.append(script);
    }

    script.textContent = JSON.stringify(graph);
  }, [locale]);

  return null;
};
