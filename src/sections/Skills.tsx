import SectionLabel from '../components/SectionLabel';
import Tag from '../components/Tag';
import { skills } from '../data/skills';
import { useInView } from '../hooks/useInView';
import styles from './Skills.module.css';

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills">
      <div
        ref={ref}
        className={`container fadeIn ${inView ? 'isVisible' : ''}`}
      >
        <SectionLabel label="skills" />
        <h2 className={styles.heading}>Technical skills.</h2>

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.name} className={styles.group}>
              <header className={styles.groupHead}>
                <span className={styles.groupName}>{group.name}</span>
              </header>
              <div className={styles.tags}>
                {group.items.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {group.note && <p className={styles.note}>{group.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
