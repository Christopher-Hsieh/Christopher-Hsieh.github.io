import styles from './SectionLabel.module.css';

type Props = {
  label: string;
  id?: string;
};

export default function SectionLabel({ label, id }: Props) {
  return (
    <div className={styles.label} id={id}>
      <span className={styles.slash}>//</span> {label}
    </div>
  );
}
