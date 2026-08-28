import { services } from '../../data/services.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { Section } from '../ui/Section.jsx';
import './services.css';

export const Services = () => {
  const { t, l } = useI18n();

  return (
    <Section id="services" eyebrow={t('services.eyebrow')} title={t('services.title')}>
      <div className="grid grid--auto">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 80} className="card card--interactive service">
            <div className="service__head">
              <Icon name={/** @type {never} */ (service.icon)} className="service__icon" />
              <div>
                <h3>{l(service.title)}</h3>
                <p className="service__pitch">{l(service.pitch)}</p>
              </div>
            </div>

            <ul className="service__list">
              {service.items.map((item) => (
                <li key={l(item).slice(0, 24)}>
                  <Icon name="check" className="service__check" />
                  <span>{l(item)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="services__footer">
        <a href="#contact" className="btn btn--primary">
          {t('services.cta')}
        </a>
      </Reveal>
    </Section>
  );
};
