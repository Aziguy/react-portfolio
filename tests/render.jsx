import { render } from '@testing-library/react';
import { I18nProvider } from '../src/i18n/I18nProvider.jsx';

/**
 * Rend un composant dans le contexte i18n de l'application.
 * @param {import('react').ReactElement} ui
 */
export const renderWithProviders = (ui) => render(<I18nProvider>{ui}</I18nProvider>);

export * from '@testing-library/react';
