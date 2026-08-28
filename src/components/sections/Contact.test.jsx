import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import { renderWithProviders, screen } from '../../../tests/render.jsx';
import { Contact } from './Contact.jsx';

vi.mock('@emailjs/browser', () => ({ default: { sendForm: vi.fn() } }));

/**
 * @param {ReturnType<typeof userEvent.setup>} user
 * @param {{ email: string, message: string }} values
 */
const fill = async (user, { email, message }) => {
  await user.type(screen.getByLabelText('Votre nom'), 'Camille Durand');
  await user.type(screen.getByLabelText('Votre adresse email'), email);
  await user.type(screen.getByLabelText('Votre message'), message);
  await user.click(screen.getByRole('button', { name: 'Envoyer le message' }));
};

describe('<Contact />', () => {
  it('refuse une adresse email invalide sans appeler le service d’envoi', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Contact />);

    await fill(user, { email: 'pas-une-adresse', message: 'Un message suffisamment long pour passer.' });

    expect(screen.getByText('Adresse email invalide.')).toBeInTheDocument();
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  it('refuse un message trop court', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Contact />);

    await fill(user, { email: 'camille@exemple.fr', message: 'Trop court' });

    expect(screen.getByText(/20 caractères minimum/)).toBeInTheDocument();
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  it('signale l’indisponibilité quand EmailJS n’est pas configuré', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Contact />);

    await fill(user, {
      email: 'camille@exemple.fr',
      message: 'Bonjour, je souhaite échanger sur une mission QA automation.',
    });

    expect(screen.getByText(/momentanément indisponible/)).toBeInTheDocument();
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  it('propose les canaux de contact directs', () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText('kengnihippolyte@gmail.com')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Écrire un email' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ouvrir WhatsApp' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Voir le profil' })).toBeInTheDocument();
  });
});
