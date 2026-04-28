import SectionLabel from '../components/SectionLabel';
import Terminal from '../components/Terminal';
import Stat from '../components/Stat';
import { profile } from '../data/profile';
import { useInView } from '../hooks/useInView';
import styles from './About.module.css';

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
          Building consumer-facing web that
          <span className={styles.accent}> actually ships.</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.copy}>
            {profile.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Terminal
            lines={[
              { type: 'cmd', text: 'whoami' },
              { type: 'out', text: 'christopher_hsieh' },
              { type: 'cmd', text: 'cat skills.txt' },
              { type: 'out', text: 'react, typescript, vite, next.js,' },
              { type: 'out', text: 'micro frontends, java, python, aws' },
              { type: 'cmd', text: 'echo $STATUS' },
              { type: 'out', text: 'shipping at scale + leveling teams up' },
            ]}
          />
        </div>

        <div className={styles.stats}>
          {profile.stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
