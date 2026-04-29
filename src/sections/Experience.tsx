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
        <h2 className={styles.heading}>
          Resume format <span className={styles.headingDash}>—</span> Where
          I&apos;ve worked.
        </h2>
        <p className={styles.subhead}>
          The standard resume view if you&apos;d rather scan it that way — full
          role history at Nike, Liberty Mutual, and earlier.
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

        <p className={styles.referencesNote}>
          <span className={styles.referencesSlash}>//</span> references available
          upon request for any of the above
        </p>
      </div>
    </section>
  );
}
