import { useState } from 'react';
import { certifications } from '../../data/certifications.js';
import { social } from '../../data/site.config.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { Section } from '../ui/Section.jsx';
import './certifications.css';

const PER_PAGE = 6;
const totalPages = Math.ceil(certifications.length / PER_PAGE);

export const Certifications = () => {
  const { t } = useI18n();
  const [page, setPage] = useState(1);

  const visible = certifications.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <Section
      id="certifications"
      eyebrow={t('certifications.eyebrow')}
      title={t('certifications.title')}
    >
      <ul className="grid grid--auto certifications__grid">
        {visible.map((cert, index) => (
          <Reveal
            key={cert.link}
            as="li"
            delay={Math.min(index, 5) * 60}
            className="card card--interactive certification"
          >
            <img
              src={cert.image}
              alt=""
              width="120"
              height="120"
              loading="lazy"
              decoding="async"
              className="certification__badge"
            />
            <h3 className="certification__title">{cert.title}</h3>
            <p className="certification__issuer">
              {t('certifications.issuedBy')} {cert.issuer}
            </p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn--sm">
              <Icon name="external" />
              {t('certifications.view')}
            </a>
          </Reveal>
        ))}
      </ul>

      {totalPages > 1 && (
        <nav className="certifications__pagination" aria-label={t('certifications.title')}>
          <button
            type="button"
            className="btn btn--sm btn--ghost"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            aria-label={t('certifications.previous')}
          >
            <Icon name="chevronLeft" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              className={`certifications__page ${page === pageNumber ? 'is-active' : ''}`.trim()}
              onClick={() => setPage(pageNumber)}
              aria-label={t('certifications.page', { page: pageNumber })}
              aria-current={page === pageNumber ? 'true' : undefined}
            >
              {pageNumber}
            </button>
          ))}

          <button
            type="button"
            className="btn btn--sm btn--ghost"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={page === totalPages}
            aria-label={t('certifications.next')}
          >
            <Icon name="chevronRight" />
          </button>
        </nav>
      )}

      <Reveal className="certifications__footer">
        <a href={social.credly} target="_blank" rel="noopener noreferrer" className="btn">
          <Icon name="credly" />
          {t('certifications.viewAll')}
        </a>
      </Reveal>
    </Section>
  );
};
