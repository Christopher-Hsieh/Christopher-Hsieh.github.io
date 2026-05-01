import SectionLabel from '../components/SectionLabel';
import { profile } from '../data/profile';
import { useInView } from '../hooks/useInView';
import styles from './Contact.module.css';

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact">
      <div
        ref={ref}
        className={`container fadeIn ${inView ? 'isVisible' : ''}`}
      >
        <SectionLabel label="contact" />
        <h2 className={styles.heading}>
          Let&apos;s build
          <span className={styles.accent}> something good.</span>
        </h2>
        <p className={styles.subhead}>
          {profile.status}. The fastest way to reach me is email — or LinkedIn if you
          prefer. My number&apos;s on the resume; feel free to text or call.
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href={`mailto:${profile.email}`}>
            <div className={styles.cardLabel}>// email</div>
            <div className={styles.cardValue}>{profile.email}</div>
            <div className={styles.cardArrow} aria-hidden="true">
              ↗
            </div>
          </a>
          <a
            className={styles.card}
            href={`${profile.resume.href}?v=${profile.resume.updated}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Download resume (PDF, updated ${profile.resume.updated}, opens in a new tab)`}
          >
            <div className={styles.cardLabel}>// resume</div>
            <div className={styles.cardValue}>christopher-hsieh-resume.pdf</div>
            <div className={styles.cardArrow} aria-hidden="true">
              ↗
            </div>
          </a>
          <a
            className={styles.card}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={styles.cardLabel}>// linkedin</div>
            <div className={styles.cardValue}>linkedin.com/in/christopher-j-hsieh</div>
            <div className={styles.cardArrow} aria-hidden="true">
              ↗
            </div>
          </a>
          <a
            className={styles.card}
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={styles.cardLabel}>// github</div>
            <div className={styles.cardValue}>github.com/Christopher-Hsieh</div>
            <div className={styles.cardArrow} aria-hidden="true">
              ↗
            </div>
          </a>
          <div className={styles.card} aria-label="Location">
            <div className={styles.cardLabel}>// location</div>
            <div className={styles.cardValue}>{profile.location}</div>
            <div className={styles.cardArrow} aria-hidden="true">
              ●
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
