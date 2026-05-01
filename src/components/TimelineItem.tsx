import styles from './TimelineItem.module.css';

export type Role = {
  title: string;
  dates: string;
};

type Props = {
  company: string;
  location: string;
  roles: Role[];
  bullets: string[];
};

export default function TimelineItem({
  company,
  location,
  roles,
  bullets,
}: Props) {
  return (
    <article className={styles.item}>
      <div className={styles.rail}>
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.line} aria-hidden="true" />
      </div>
      <div className={styles.body}>
        <header className={styles.head}>
          <div>
            <h3 className={styles.company}>{company}</h3>
            <div className={styles.location}>{location}</div>
          </div>
          <ul className={styles.roles}>
            {roles.map((r) => (
              <li key={r.title} className={styles.role}>
                <span className={styles.roleTitle}>{r.title}</span>
                <span className={styles.roleDates}>{r.dates}</span>
              </li>
            ))}
          </ul>
        </header>
        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i} className={styles.bullet}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
