import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup();
  localStorage.clear();
});

class IntersectionObserverStub {
  /** @param {(entries: unknown[], observer: unknown) => void} callback */
  constructor(callback) {
    this.callback = callback;
  }
  /** @param {Element} target */
  observe(target) {
    this.callback([{ target, isIntersecting: true, intersectionRatio: 1 }], this);
  }
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverStub);

vi.stubGlobal(
  'matchMedia',
  vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
);

Object.defineProperty(window, 'matchMedia', { writable: true, value: globalThis.matchMedia });

// Locale déterministe : les assertions portent sur les libellés français.
Object.defineProperty(window.navigator, 'language', { value: 'fr-FR', configurable: true });
