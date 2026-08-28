import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen } from '../../../tests/render.jsx';
import { Topbar } from './Topbar.jsx';

const setup = (props = {}) =>
  renderWithProviders(
    <Topbar activeId="about" onToggleTheme={vi.fn()} scrolled={false} {...props} />,
  );

describe('<Topbar />', () => {
  it('marque la section active', () => {
    setup();
    expect(screen.getByRole('link', { name: 'À propos' })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('link', { name: 'Projets' })).not.toHaveAttribute('aria-current');
  });

  it('bascule la langue de l’interface', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: 'Switch to English' }));

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
  });

  it('déclenche le changement de thème', async () => {
    const user = userEvent.setup();
    const onToggleTheme = vi.fn();
    setup({ onToggleTheme });

    await user.click(screen.getByRole('button', { name: 'Changer de thème' }));

    expect(onToggleTheme).toHaveBeenCalledOnce();
  });
});
