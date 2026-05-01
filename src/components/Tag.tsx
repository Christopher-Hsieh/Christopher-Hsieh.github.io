import styles from './Tag.module.css';

type Props = {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  /** When provided, the tag renders as an `<a>` and behaves as a link. */
  href?: string;
};

export default function Tag({ children, variant = 'default', href }: Props) {
  const className = `${styles.tag} ${variant === 'accent' ? styles.accent : ''}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return <span className={className}>{children}</span>;
}
