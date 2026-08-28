import { Reveal } from './Reveal.jsx';

/**
 * @param {{
 *   id: string,
 *   eyebrow?: string,
 *   title: string,
 *   children: import('react').ReactNode,
 *   className?: string
 * }} props
 */
export const Section = ({ id, eyebrow, title, children, className = '' }) => (
  <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}>
    <div className="container">
      <Reveal className="section__header">
        {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
        <h2 id={`${id}-title`} className="section__title">
          {title}
        </h2>
      </Reveal>
      {children}
    </div>
  </section>
);
