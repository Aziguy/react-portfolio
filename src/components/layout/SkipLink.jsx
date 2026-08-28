import { useI18n } from '../../i18n/useI18n.js';
import './skip-link.css';

export const SkipLink = () => {
  const { t } = useI18n();
  return (
    <a href="#main" className="skip-link">
      {t('a11y.skipToContent')}
    </a>
  );
};
