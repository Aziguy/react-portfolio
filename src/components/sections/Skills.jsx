import { skillGroups } from '../../data/skills.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { Section } from '../ui/Section.jsx';
import './skills.css';

export const Skills = () => {
  const { t, l } = useI18n();

  return (
    <Section id="skills" eyebrow={t('skills.eyebrow')} title={t('skills.title')}>
      <div className="grid grid--auto">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 60} className="card card--interactive skill-group">
            <h3 className="skill-group__title">
              <Icon name={/** @type {never} */ (group.icon)} className="skill-group__icon" />
              {l(group.title)}
            </h3>

            <ul className="skill-group__list">
              {group.skills.map((skill) => (
                <li key={skill.name} className="skill">
                  <Icon name="check" className="skill__check" />
                  <div>
                    <p className="skill__name">{skill.name}</p>
                    <p className="skill__detail">{l(skill.detail)}</p>
                  </div>
                  <span className={`badge skill__level skill__level--${skill.level}`}>
                    {t(`skills.level.${skill.level}`)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
