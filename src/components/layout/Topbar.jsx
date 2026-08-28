import { navItems } from '../../data/navigation.js';
import { author } from '../../data/site.config.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import './topbar.css';

/**
 * @param {{ activeId: string, onToggleTheme: () => void, scrolled: boolean }} props
 */
export const Topbar = ({ activeId, onToggleTheme, scrolled }) => {
  const { t, locale, toggleLocale } = useI18n();

  return (
    <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`.trim()}>
      <div className="container topbar__inner">
        <a href="#hero" className="topbar__logo" aria-label={author.name}>
          <span className="topbar__logo-mark">{author.initials}</span>
          <span className="topbar__logo-text">{author.shortName}</span>
        </a>

        <nav className="topbar__nav" aria-label={t('a11y.mainNavigation')}>
          <ul>
            {navItems.slice(1).map(({ id, labelKey }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? 'is-active' : ''}
                  aria-current={activeId === id ? 'true' : undefined}
                >
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="topbar__actions">
          <button
            type="button"
            className="topbar__action"
            onClick={toggleLocale}
            aria-label={t('a11y.switchLanguage')}
            title={t('a11y.switchLanguage')}
          >
            <Icon name="globe" />
            <span className="topbar__action-label">{locale === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          <button
            type="button"
            className="topbar__action"
            onClick={onToggleTheme}
            aria-label={t('a11y.toggleTheme')}
            title={t('a11y.toggleTheme')}
          >
            <span className="topbar__icon topbar__icon--dark">
              <Icon name="sun" />
            </span>
            <span className="topbar__icon topbar__icon--light">
              <Icon name="moon" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
