import { createContext } from 'react';

/**
 * @typedef {'fr' | 'en'} Locale
 * @typedef {{ fr: string, en: string }} Localized
 * @typedef {{
 *   locale: Locale,
 *   setLocale: (locale: Locale) => void,
 *   toggleLocale: () => void,
 *   t: (key: string, vars?: Record<string, string | number>) => string,
 *   tList: (key: string) => string[],
 *   l: (value: Localized) => string
 * }} I18nContextValue
 */

export const I18nContext = createContext(
  /** @type {I18nContextValue | null} */ (null),
);
