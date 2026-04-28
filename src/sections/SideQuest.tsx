import { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import Tag from '../components/Tag';
import { useInView } from '../hooks/useInView';
import styles from './SideQuest.module.css';

const GAME_URL = 'https://chrishsieh.com/rose-remake/';
const REPO_URL = 'https://github.com/Christopher-Hsieh/rose-remake';

const TAGS = ['Phaser3', 'TypeScript', 'Vite', 'GitHub Actions', 'PWA', 'Teaching'];

export default function SideQuest() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="side-quest">
      <div
        ref={ref}
        className={`container fadeIn ${inView ? 'isVisible' : ''}`}
      >
        <SectionLabel label="side quest" />
        <h2 className={styles.heading}>
          Built to learn.
          <span className={styles.accent}> Used to teach.</span>
        </h2>
        <p className={styles.subhead}>
          A music-driven Phaser3 game I built as a PWA to learn Vite + GitHub
          Actions. Now I use it to teach high schoolers how to ship.
        </p>

        <div className={styles.gameWrap}>
          {playing ? (
            <iframe
              src={GAME_URL}
              title="Rose — a Phaser3 music game"
              className={styles.gameFrame}
              allow="autoplay; fullscreen; pointer-lock"
              loading="eager"
            />
          ) : (
            <button
              type="button"
              className={styles.poster}
              onClick={() => setPlaying(true)}
              aria-label="Play Rose — loads the game in this card"
            >
              <div className={styles.posterWaves} aria-hidden="true">
                <span className={styles.wave} />
                <span className={styles.wave} />
                <span className={styles.wave} />
                <span className={styles.wave} />
                <span className={styles.wave} />
                <span className={styles.wave} />
                <span className={styles.wave} />
                <span className={styles.wave} />
                <span className={styles.wave} />
                <span className={styles.wave} />
              </div>
              <div className={styles.posterContent}>
                <div className={styles.posterTitle}>{'{ Rose }'}</div>
                <div className={styles.posterPlay}>
                  <span className={styles.posterPlayIcon} aria-hidden="true">
                    ▶
                  </span>
                  Click to play
                </div>
                <div className={styles.posterMeta}>
                  music game · phaser3 · loads when you tap
                </div>
              </div>
            </button>
          )}
        </div>

        <div className={styles.tags}>
          {TAGS.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className={styles.linksGrid}>
          <a
            href={GAME_URL}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.linkCard}
          >
            <div className={styles.linkLabel}>chrishsieh.com/rose-remake</div>
            <div className={styles.linkSub}>Play in a new tab · install as a PWA</div>
            <span className={styles.linkArrow} aria-hidden="true">
              ↗
            </span>
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.linkCard}
          >
            <div className={styles.linkLabel}>github.com/Christopher-Hsieh/rose-remake</div>
            <div className={styles.linkSub}>View source · TypeScript + Phaser3 + Vite</div>
            <span className={styles.linkArrow} aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
