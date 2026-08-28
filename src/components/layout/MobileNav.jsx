import { navItems } from '../../data/navigation.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import './mobile-nav.css';

/** @param {{ activeId: string }} props */
export const MobileNav = ({ activeId }) => {
  const { t } = useI18n();

  return (
    <nav className="mobile-nav" aria-label={t('a11y.mainNavigation')}>
      {navItems.map(({ id, labelKey, icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={activeId === id ? 'is-active' : ''}
          aria-label={t(labelKey)}
          aria-current={activeId === id ? 'true' : undefined}
        >
          <Icon name={/** @type {never} */ (icon)} />
        </a>
      ))}
    </nav>
  );
};
