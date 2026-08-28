import { useContext } from 'react';
import { I18nContext } from './i18n-context.js';

/** @returns {import('./i18n-context.js').I18nContextValue} */
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n doit être utilisé à l’intérieur de <I18nProvider>');
  return context;
};
