import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen, within } from '../../../tests/render.jsx';
import { projects } from '../../data/projects.js';
import { Projects } from './Projects.jsx';

const projectCards = () =>
  within(screen.getByRole('region', { name: 'Projets' })).getAllByRole('heading', { level: 3 });

describe('<Projects />', () => {
  it('affiche tous les projets par défaut', () => {
    renderWithProviders(<Projects />);
    projects.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.title.fr })).toBeInTheDocument();
    });
  });

  it('expose un onglet par catégorie', () => {
    renderWithProviders(<Projects />);
    expect(screen.getAllByRole('tab')).toHaveLength(5);
    expect(screen.getByRole('tab', { name: 'Tout' })).toHaveAttribute('aria-selected', 'true');
  });

  it('restreint la liste à la catégorie sélectionnée', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Projects />);
    const before = projectCards().length;

    await user.click(screen.getByRole('tab', { name: 'WordPress' }));

    const after = projectCards().length;
    expect(after).toBe(projects.filter((p) => p.category === 'wordpress').length);
    expect(after).toBeLessThan(before);
    expect(screen.getByRole('tab', { name: 'WordPress' })).toHaveAttribute('aria-selected', 'true');
  });

  it('ouvre les liens externes en toute sécurité', () => {
    renderWithProviders(<Projects />);
    screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('target') === '_blank')
      .forEach((link) => expect(link).toHaveAttribute('rel', expect.stringContaining('noopener')));
  });
});
