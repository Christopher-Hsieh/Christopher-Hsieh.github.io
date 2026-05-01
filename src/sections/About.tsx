import { Fragment } from 'react';
import SectionLabel from '../components/SectionLabel';
import Stat from '../components/Stat';
import { profile } from '../data/profile';
import { useInView } from '../hooks/useInView';
import styles from './About.module.css';

/**
 * Render copy with a lightweight `**accent**` marker convention. Even-indexed
 * splits are plain text; odd-indexed splits captured between `**` are wrapped
 * in an accent span. Lets the data file stay as plain strings while still
 * letting authors highlight kicker phrases.
 */
function renderWithAccents(text: string) {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 0 ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <span key={i} className={styles.accent}>
        {part}
      </span>
    ),
  );
}

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about">
      <div
        ref={ref}
        className={`container fadeIn ${inView ? 'isVisible' : ''}`}
      >
        <SectionLabel label="about" />
        <h2 className={styles.heading}>
          Building great software.
          <span className={styles.accent}> With great teams.</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.copy}>
            {profile.summary.map((p, i) => (
              <p key={i}>{renderWithAccents(p)}</p>
            ))}
          </div>
          <div className={styles.stats}>
            {profile.stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
