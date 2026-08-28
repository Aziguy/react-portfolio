import { useCallback, useEffect, useState } from 'react';
import { readStored, writeStored } from '../lib/storage.js';

const STORAGE_KEY = 'portfolio:theme';

/** @typedef {'light' | 'dark'} Theme */

/** @returns {Theme} */
const detectInitialTheme = () => {
  const stored = readStored(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return globalThis.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(detectInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f5f7fc' : '#0e0e1c');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      writeStored(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
};
