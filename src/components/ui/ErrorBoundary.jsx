import { Component } from 'react';

/**
 * Isole les erreurs de rendu d'une section pour que le reste de la page
 * reste utilisable.
 * @extends {Component<{ children: import('react').ReactNode, fallback?: import('react').ReactNode }, { hasError: boolean }>}
 */
export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /** @param {Error} error */
  componentDidCatch(error) {
    console.error('[ErrorBoundary]', error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
