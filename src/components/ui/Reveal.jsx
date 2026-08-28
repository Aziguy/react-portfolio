import { useInView } from '../../hooks/useInView.js';

/**
 * @param {{
 *   children: import('react').ReactNode,
 *   as?: import('react').ElementType,
 *   delay?: number,
 *   className?: string
 * } & Record<string, unknown>} props
 */
export const Reveal = ({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) => {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};
