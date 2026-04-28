import { profile } from '../data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.statusRow}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.statusText}>{profile.status}</span>
        </div>
        <h1 className={styles.title}>
          <span className={styles.handle}>{profile.handle}</span>
        </h1>
        <h2 className={styles.name}>{profile.name}</h2>
        <p className={styles.pitch}>{profile.pitch}</p>
        <div className={styles.ctas}>
          <a href="#work" className={styles.ctaPrimary}>
            View work
            <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className={styles.ctaGhost}>
            Get in touch
          </a>
        </div>
        <div className={styles.scroll} aria-hidden="true">
          <span className={styles.scrollLine} />
          <span>scroll</span>
        </div>
      </div>
    </section>
  );
}
