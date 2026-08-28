import { useMemo, useState } from 'react';
import { filterProjects, projectCategories } from '../../data/projects.js';
import { social } from '../../data/site.config.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Icon } from '../ui/Icon.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { Section } from '../ui/Section.jsx';
import './projects.css';

const filters = /** @type {const} */ (['all', ...projectCategories]);

export const Projects = () => {
  const { t, l } = useI18n();
  const [activeFilter, setActiveFilter] = useState(/** @type {typeof filters[number]} */ ('all'));

  const visibleProjects = useMemo(() => filterProjects(activeFilter), [activeFilter]);

  return (
    <Section id="projects" eyebrow={t('projects.eyebrow')} title={t('projects.title')}>
      <Reveal
        className="projects__filters"
        role="tablist"
        aria-label={t('projects.title')}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            className={`btn btn--sm projects__filter ${activeFilter === filter ? 'is-active' : ''}`.trim()}
            onClick={() => setActiveFilter(filter)}
          >
            {t(`projects.filters.${filter}`)}
          </button>
        ))}
      </Reveal>

      <p className="visually-hidden" role="status">
        {t('projects.countLabel', { count: visibleProjects.length })}
      </p>

      {visibleProjects.length === 0 ? (
        <p className="projects__empty text-muted">{t('projects.empty')}</p>
      ) : (
        <ul className="grid grid--auto projects__grid">
          {visibleProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              as="li"
              delay={Math.min(index, 5) * 60}
              className="card card--interactive project"
            >
              <div className="project__head">
                <span className="badge badge--accent">{t(`projects.filters.${project.category}`)}</span>
                {project.featured && (
                  <span className="badge badge--primary">{t('projects.featured')}</span>
                )}
                <span className="project__year">{project.year}</span>
              </div>

              <h3 className="project__title">{l(project.title)}</h3>
              <p className="project__summary">{l(project.summary)}</p>

              <ul className="project__stack">
                {project.stack.map((tech) => (
                  <li key={tech} className="badge">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="project__actions">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--sm btn--primary"
                  >
                    <Icon name="external" />
                    {t('projects.demo')}
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--sm"
                  >
                    <Icon name="github" />
                    {t('projects.code')}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      )}

      <Reveal className="projects__footer">
        <a href={social.github} target="_blank" rel="noopener noreferrer" className="btn">
          <Icon name="github" />
          {t('projects.viewAll')}
        </a>
      </Reveal>
    </Section>
  );
};
