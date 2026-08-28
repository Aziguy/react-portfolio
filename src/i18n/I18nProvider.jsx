import { useCallback, useEffect, useMemo, useState } from 'react';
import { I18nContext } from './i18n-context.js';
import { isSupportedLocale, translate, translateList } from './translate.js';
import { siteConfig } from '../data/site.config.js';
import { readStored, writeStored } from '../lib/storage.js';

const STORAGE_KEY = 'portfolio:locale';

/** @returns {import('./i18n-context.js').Locale} */
const detectInitialLocale = () => {
  const stored = readStored(STORAGE_KEY);
  if (isSupportedLocale(stored)) return stored;

  const browserLocale = globalThis.navigator?.language?.slice(0, 2).toLowerCase();
  return isSupportedLocale(browserLocale) ? browserLocale : 'fr';
};

/** @param {{ children: import('react').ReactNode }} props */
export const I18nProvider = ({ children }) => {
  // Le rendu initial utilise toujours la locale par défaut : le HTML pré-rendu
  // et la première passe d'hydratation doivent être identiques.
  const [locale, setLocaleState] = useState(
    /** @type {import('./i18n-context.js').Locale} */ (siteConfig.defaultLocale),
  );

  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = translate(locale, 'meta.title');
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', translate(locale, 'meta.description'));
  }, [locale]);

  const setLocale = useCallback(/** @param {import('./i18n-context.js').Locale} next */ (next) => {
    setLocaleState(next);
    writeStored(STORAGE_KEY, next);
  }, []);

  const value = useMemo(() => {
    /**
     * @param {string} key
     * @param {Record<string, string | number>} [vars]
     */
    const t = (key, vars) => translate(locale, key, vars);

    /** @param {string} key */
    const tList = (key) => translateList(locale, key);

    /** @param {import('./i18n-context.js').Localized} localized */
    const l = (localized) => localized?.[locale] ?? localized?.fr ?? '';

    return {
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === 'fr' ? 'en' : 'fr'),
      t,
      tList,
      l,
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
