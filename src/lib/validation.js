const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const MIN_MESSAGE_LENGTH = 20;

/**
 * @param {{ email: string, message: string }} values
 * @returns {'invalidEmail' | 'tooShort' | null} clé d'erreur i18n, ou null si valide
 */
export const validateContactForm = ({ email, message }) => {
  if (!EMAIL_PATTERN.test(email.trim())) return 'invalidEmail';
  if (message.trim().length < MIN_MESSAGE_LENGTH) return 'tooShort';
  return null;
};
