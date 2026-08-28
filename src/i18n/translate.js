import fr from './locales/fr.json';
import en from './locales/en.json';

export const dictionaries = { fr, en };

/** @type {import('./i18n-context.js').Locale[]} */
export const supportedLocales = ['fr', 'en'];

/** @param {unknown} value @returns {value is import('./i18n-context.js').Locale} */
export const isSupportedLocale = (value) =>
  typeof value === 'string' && supportedLocales.includes(/** @type {never} */ (value));

/**
 * Résout une clé pointée (`a.b.c`) dans le dictionnaire de la locale.
 * @param {import('./i18n-context.js').Locale} locale
 * @param {string} key
 * @returns {unknown}
 */
export const resolveKey = (locale, key) =>
  key.split('.').reduce(
    (node, segment) =>
      node && typeof node === 'object' ? /** @type {Record<string, unknown>} */ (node)[segment] : undefined,
    /** @type {unknown} */ (dictionaries[locale]),
  );

/**
 * @param {string} template
 * @param {Record<string, string | number>} vars
 */
const interpolate = (template, vars) =>
  Object.entries(vars).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    template,
  );

/**
 * @param {import('./i18n-context.js').Locale} locale
 * @param {string} key
 * @param {Record<string, string | number>} [vars]
 * @returns {string}
 */
export const translate = (locale, key, vars) => {
  const value = resolveKey(locale, key);
  if (typeof value !== 'string') return key;
  return vars ? interpolate(value, vars) : value;
};

/**
 * @param {import('./i18n-context.js').Locale} locale
 * @param {string} key
 * @returns {string[]}
 */
export const translateList = (locale, key) => {
  const value = resolveKey(locale, key);
  return Array.isArray(value) ? value.filter((item) => typeof item === 'string') : [];
};
