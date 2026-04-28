import styles from './Tag.module.css';

type Props = {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
};

export default function Tag({ children, variant = 'default' }: Props) {
  return (
    <span className={`${styles.tag} ${variant === 'accent' ? styles.accent : ''}`}>
      {children}
    </span>
  );
}
