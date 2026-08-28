import { describe, expect, it } from 'vitest';
import { validateContactForm } from './validation.js';

const validMessage = 'Bonjour, je souhaite discuter d’une mission QA.';

describe('validateContactForm', () => {
  it('accepte un formulaire complet et valide', () => {
    expect(validateContactForm({ email: 'a.b@exemple.fr', message: validMessage })).toBeNull();
  });

  it.each(['', 'sans-arobase', 'a@b', 'a@b.c', 'espace @exemple.fr'])(
    'rejette l’adresse invalide « %s »',
    (email) => {
      expect(validateContactForm({ email, message: validMessage })).toBe('invalidEmail');
    },
  );

  it('rejette un message trop court', () => {
    expect(validateContactForm({ email: 'a.b@exemple.fr', message: 'Trop court' })).toBe('tooShort');
  });

  it('ignore les espaces autour des valeurs', () => {
    expect(validateContactForm({ email: '  a.b@exemple.fr  ', message: `  ${validMessage}  ` })).toBeNull();
    expect(validateContactForm({ email: 'a.b@exemple.fr', message: '                     ' })).toBe(
      'tooShort',
    );
  });
});
