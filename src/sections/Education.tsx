import SectionLabel from '../components/SectionLabel';
import { useInView } from '../hooks/useInView';
import styles from './Education.module.css';

const items = [
  {
    school: 'Indiana University — Kelley School of Business',
    location: 'Indianapolis, IN',
    degree: 'Master of Business Administration, Major in Finance',
    year: '2021',
  },
  {
    school: 'Purdue University',
    location: 'West Lafayette, IN',
    degree: 'Bachelor of Science, Computer Science',
    year: '2016',
  },
];

export default function Education() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="education">
      <div
        ref={ref}
        className={`container fadeIn ${inView ? 'isVisible' : ''}`}
      >
        <SectionLabel label="education" />
        <h2 className={styles.heading}>Education.</h2>

        <div className={styles.grid}>
          {items.map((it) => (
            <div key={it.school} className={styles.card}>
              <div className={styles.year}>{it.year}</div>
              <h3 className={styles.school}>{it.school}</h3>
              <div className={styles.location}>{it.location}</div>
              <p className={styles.degree}>{it.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
