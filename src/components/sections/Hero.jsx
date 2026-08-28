import { author, social } from '../../data/site.config.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import portrait from '../../assets/me.png';
import cv from '../../assets/KENGNI_Hippolyte_CV_FR_082025_dev.pdf';
import './hero.css';

const socialLinks = /** @type {const} */ ([
  { key: 'LinkedIn', href: social.linkedin, icon: 'linkedin' },
  { key: 'GitHub', href: social.github, icon: 'github' },
  { key: 'Credly', href: social.credly, icon: 'credly' },
]);

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__availability">
            <span className="hero__pulse" aria-hidden="true" />
            {t('hero.available')}
          </p>

          <p className="hero__greeting">{t('hero.greeting')}</p>
          <h1 id="hero-title" className="hero__name">
            {author.name}
          </h1>
          <p className="hero__role">{t('hero.role')}</p>
          <p className="hero__tagline">{t('hero.tagline')}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              {t('hero.contactMe')}
            </a>
            <a href={cv} download className="btn">
              <Icon name="download" />
              {t('hero.downloadCv')}
            </a>
          </div>

          <ul className="hero__socials">
            {socialLinks.map(({ key, href, icon }) => (
              <li key={key}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={key}>
                  <Icon name={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__portrait">
          <img
            src={portrait}
            alt={`${author.name} — ${t('hero.role')}`}
            width="480"
            height="600"
            fetchPriority="high"
          />
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label={t('hero.scroll')}>
        <span>{t('hero.scroll')}</span>
      </a>
    </section>
  );
};
