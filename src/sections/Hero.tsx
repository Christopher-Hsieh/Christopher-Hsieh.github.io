import { Fragment } from 'react';
import { profile } from '../data/profile';
import styles from './Hero.module.css';

/**
 * Render a status string and break it onto a second line at the first
 * parenthetical. The parenthesized clause sits on its own line and reads as
 * an intentional aside.
 */
function renderStatus(text: string) {
  const idx = text.indexOf('(');
  if (idx === -1) return text;
  const first = text.slice(0, idx).trimEnd();
  const second = text.slice(idx);
  return (
    <Fragment>
      {first}
      <span className={styles.statusSecondLine}>{second}</span>
    </Fragment>
  );
}

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.statusRow}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.statusText}>{renderStatus(profile.status)}</span>
        </div>
        <h1 className={styles.title}>
          <a
            className={styles.handle}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${profile.handle} on LinkedIn — opens in a new tab`}
          >
            {profile.handle}
            <span className={styles.handleArrow} aria-hidden="true">
              ↗
            </span>
          </a>
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
