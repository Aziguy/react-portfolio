import { describe, expect, it } from 'vitest';
import { dictionaries, isSupportedLocale, supportedLocales, translate, translateList } from './translate.js';

/**
 * @param {Record<string, unknown>} node
 * @param {string} [prefix]
 * @returns {string[]}
 */
const flatten = (node, prefix = '') =>
  Object.entries(node).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(value)) return [`${path}[]`];
    return value && typeof value === 'object'
      ? flatten(/** @type {Record<string, unknown>} */ (value), path)
      : [path];
  });

describe('translate', () => {
  it('résout une clé pointée', () => {
    expect(translate('fr', 'nav.home')).toBe('Accueil');
    expect(translate('en', 'nav.home')).toBe('Home');
  });

  it('interpole les variables', () => {
    expect(translate('fr', 'projects.countLabel', { count: 4 })).toContain('4');
  });

  it('retourne la clé quand la traduction est absente', () => {
    expect(translate('fr', 'clef.inexistante')).toBe('clef.inexistante');
  });

  it('retourne une liste de chaînes', () => {
    expect(translateList('fr', 'about.bio').length).toBeGreaterThan(0);
    expect(translateList('fr', 'nav.home')).toEqual([]);
  });
});

describe('dictionnaires', () => {
  it('expose exactement les mêmes clés en français et en anglais', () => {
    expect(flatten(dictionaries.en).sort()).toEqual(flatten(dictionaries.fr).sort());
  });

  it('ne contient aucune valeur vide', () => {
    for (const locale of supportedLocales) {
      for (const key of flatten(dictionaries[locale])) {
        if (key.endsWith('[]')) continue;
        expect(translate(locale, key), `${locale}:${key}`).not.toBe('');
      }
    }
  });
});

describe('isSupportedLocale', () => {
  it.each([['fr', true], ['en', true], ['de', false], [null, false]])('%s → %s', (value, expected) => {
    expect(isSupportedLocale(value)).toBe(expected);
  });
});
