import { certifications } from '../../data/certifications.js';
import { author, highlights } from '../../data/site.config.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { Section } from '../ui/Section.jsx';
import portrait from '../../assets/me-about.jpg';
import './about.css';

export const About = () => {
  const { t, tList } = useI18n();

  const stats = [
    { icon: 'trending', value: `${author.yearsOfExperience}+`, label: t('about.stats.experience') },
    { icon: 'projects', value: `${highlights.projectsDelivered}+`, label: t('about.stats.projects') },
    {
      icon: 'certifications',
      value: `${certifications.length}`,
      label: t('about.stats.certifications'),
    },
  ];

  return (
    <Section id="about" eyebrow={t('about.eyebrow')} title={t('about.title')}>
      <div className="about">
        <Reveal className="about__portrait">
          <img
            src={portrait}
            alt={author.name}
            width="440"
            height="440"
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <Reveal className="about__content" delay={80}>
          <ul className="about__stats">
            {stats.map(({ icon, value, label }) => (
              <li key={label} className="card about__stat">
                <Icon name={/** @type {never} */ (icon)} className="about__stat-icon" />
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="about__bio">
            {tList('about.bio').map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <a href="#contact" className="btn btn--primary">
            {t('about.cta')}
          </a>
        </Reveal>
      </div>
    </Section>
  );
};
