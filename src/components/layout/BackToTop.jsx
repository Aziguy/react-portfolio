import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import './back-to-top.css';

/** @param {{ visible: boolean }} props */
export const BackToTop = ({ visible }) => {
  const { t } = useI18n();

  return (
    <a
      href="#hero"
      className={`back-to-top ${visible ? 'is-visible' : ''}`.trim()}
      aria-label={t('footer.backToTop')}
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : 'true'}
    >
      <Icon name="arrowUp" />
    </a>
  );
};
