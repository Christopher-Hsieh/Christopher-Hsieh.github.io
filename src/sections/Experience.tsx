import SectionLabel from '../components/SectionLabel';
import TimelineItem from '../components/TimelineItem';
import { experience } from '../data/experience';
import { useInView } from '../hooks/useInView';
import styles from './Experience.module.css';

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="experience">
      <div
        ref={ref}
        className={`container fadeIn ${inView ? 'isVisible' : ''}`}
      >
        <SectionLabel label="experience" />
        <h2 className={styles.heading}>Where I&apos;ve worked.</h2>
        <p className={styles.subhead}>
          From internships in Fortran to global cross-team initiatives at Nike
          and Liberty Mutual.
        </p>

        <div className={styles.timeline}>
          {experience.map((item) => (
            <TimelineItem
              key={item.company}
              company={item.company}
              location={item.location}
              roles={item.roles}
              bullets={item.bullets}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
