import styles from './Stat.module.css';

type Props = {
  value: string;
  label: string;
};

export default function Stat({ value, label }: Props) {
  return (
    <div className={styles.stat}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
