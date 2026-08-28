import { navItems } from '../../data/navigation.js';
import { author, siteConfig, social } from '../../data/site.config.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import './footer.css';

const socialLinks = /** @type {const} */ ([
  { key: 'linkedin', href: social.linkedin, icon: 'linkedin' },
  { key: 'github', href: social.github, icon: 'github' },
  { key: 'credly', href: social.credly, icon: 'credly' },
  { key: 'whatsapp', href: social.whatsapp, icon: 'whatsapp' },
]);

export const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#hero" className="footer__logo">
          {author.shortName}
        </a>

        <nav aria-label={t('a11y.mainNavigation')}>
          <ul className="footer__links">
            {navItems.map(({ id, labelKey }) => (
              <li key={id}>
                <a href={`#${id}`}>{t(labelKey)}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer__socials">
          {socialLinks.map(({ key, href, icon }) => (
            <li key={key}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={key}>
                <Icon name={icon} />
              </a>
            </li>
          ))}
        </ul>

        <p className="footer__legal">
          <span>
            &copy; {new Date().getFullYear()} {author.name}. {t('footer.rights')}
          </span>
          <a
            href={`${social.github}/react-portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__source"
          >
            {t('footer.sourceCode')} <Icon name="external" />
          </a>
          <span className="footer__domain">{siteConfig.domain}</span>
        </p>
      </div>
    </footer>
  );
};
