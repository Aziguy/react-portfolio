import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { buildPersonSchema, buildProjectsSchema, buildWebSiteSchema } from './lib/seo.js';
import { siteConfig } from './data/site.config.js';

const locale = /** @type {import('./i18n/i18n-context.js').Locale} */ (siteConfig.defaultLocale);

export const render = () => ({
  html: renderToString(<App />),
  structuredData: JSON.stringify([
    buildWebSiteSchema(locale),
    buildPersonSchema(locale),
    buildProjectsSchema(locale),
  ]),
});
