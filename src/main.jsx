import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const container = /** @type {HTMLElement} */ (document.getElementById('root'));
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Le HTML est pré-rendu au build : on hydrate quand le marquage existe déjà.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
