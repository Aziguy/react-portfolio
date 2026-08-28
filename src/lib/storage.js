/**
 * Accès à localStorage tolérant aux navigateurs en navigation privée
 * ou aux contextes où le stockage est bloqué.
 * @param {string} key
 * @returns {string | null}
 */
export const readStored = (key) => {
  try {
    return globalThis.localStorage?.getItem(key) ?? null;
  } catch {
    return null;
  }
};

/**
 * @param {string} key
 * @param {string} value
 */
export const writeStored = (key, value) => {
  try {
    globalThis.localStorage?.setItem(key, value);
  } catch {
    /* stockage indisponible : la préférence reste en mémoire */
  }
};
