import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { author, emailjsConfig, isEmailjsConfigured, social } from '../../data/site.config.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { Section } from '../ui/Section.jsx';
import { validateContactForm } from '../../lib/validation.js';
import './contact.css';

const channels = /** @type {const} */ ([
  {
    id: 'email',
    icon: 'email',
    value: author.email,
    href: `mailto:${author.email}`,
    actionKey: 'contact.channels.email',
    copyable: true,
  },
  {
    id: 'whatsapp',
    icon: 'whatsapp',
    value: author.phoneDisplay,
    href: social.whatsapp,
    actionKey: 'contact.channels.whatsapp',
    copyable: false,
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    value: 'hippolyte-kengni',
    href: social.linkedin,
    actionKey: 'contact.channels.linkedin',
    copyable: false,
  },
]);

export const Contact = () => {
  const { t } = useI18n();
  const formRef = useRef(/** @type {HTMLFormElement | null} */ (null));
  const [status, setStatus] = useState(/** @type {'idle' | 'sending' | 'success' | 'error'} */ ('idle'));
  const [errorKey, setErrorKey] = useState('');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(author.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  /** @param {import('react').FormEvent<HTMLFormElement>} event */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get('company')) return; // pot de miel anti-spam

    const validationError = validateContactForm({
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    });

    if (validationError) {
      setStatus('error');
      setErrorKey(`contact.form.${validationError}`);
      return;
    }

    if (!isEmailjsConfigured) {
      setStatus('error');
      setErrorKey('contact.form.unavailable');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, form, {
        publicKey: emailjsConfig.publicKey,
      });
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('[Contact] envoi impossible', error);
      setStatus('error');
      setErrorKey('contact.form.error');
    }
  };

  return (
    <Section id="contact" eyebrow={t('contact.eyebrow')} title={t('contact.title')}>
      <p className="contact__intro text-muted">{t('contact.intro')}</p>

      <div className="contact">
        <Reveal className="contact__channels">
          {channels.map((channel) => (
            <article key={channel.id} className="card card--interactive contact__channel">
              <Icon name={channel.icon} className="contact__channel-icon" />
              <p className="contact__channel-value">{channel.value}</p>
              <div className="contact__channel-actions">
                <a
                  href={channel.href}
                  target={channel.id === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="btn btn--sm"
                >
                  {t(channel.actionKey)}
                </a>
                {channel.copyable && (
                  <button type="button" className="btn btn--sm btn--ghost" onClick={copyEmail}>
                    <Icon name={copied ? 'check' : 'copy'} />
                    {copied ? t('contact.copied') : t('contact.copy')}
                  </button>
                )}
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="contact__form-wrapper" delay={80}>
          <form ref={formRef} className="card contact__form" onSubmit={handleSubmit} noValidate>
            <p aria-live="polite" className="contact__status">
              {status === 'success' && (
                <span className="contact__status--success">
                  <Icon name="check" /> {t('contact.form.success')}
                </span>
              )}
              {status === 'error' && <span className="contact__status--error">{t(errorKey)}</span>}
            </p>

            <label className="contact__field">
              <span>{t('contact.form.name')}</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>

            <label className="contact__field">
              <span>{t('contact.form.email')}</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label className="contact__field">
              <span>{t('contact.form.subject')}</span>
              <input type="text" name="subject" />
            </label>

            <label className="contact__field">
              <span>{t('contact.form.message')}</span>
              <textarea name="message" rows={6} required minLength={20} />
            </label>

            <label className="contact__honeypot" aria-hidden="true">
              <span>Company</span>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </label>

            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};
