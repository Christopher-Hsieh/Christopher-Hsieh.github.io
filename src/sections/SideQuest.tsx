import { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import Tag from '../components/Tag';
import { useInView } from '../hooks/useInView';
import styles from './SideQuest.module.css';

const GAME_URL = 'https://chrishsieh.com/rose-remake/';
const REPO_URL = 'https://github.com/Christopher-Hsieh/rose-remake';

/**
 * Optional preview clip shown inside the mobile poster (the game itself
 * needs a mouse/keyboard, so we don't iframe it on touch devices). Drop
 * an MP4 at the path below and it'll start showing automatically.
 * Recommended: ~5-10s, muted, looping, encoded the same way as the work
 * card mobile clips (540px wide, baseline H.264, faststart, audio stripped).
 */
const PREVIEW_VIDEO_SRC = '';

const TAGS = ['Phaser3', 'TypeScript', 'Vite', 'GitHub Actions', 'PWA', 'Teaching'];

const PosterWaves = () => (
  <div className={styles.posterWaves} aria-hidden="true">
    {Array.from({ length: 10 }).map((_, i) => (
      <span key={i} className={styles.wave} />
    ))}
  </div>
);

function GameCardDesktop() {
  const [playing, setPlaying] = useState(false);

  return (
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
          <PosterWaves />
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
  );
}

function GameCardMobile() {
  return (
    <div className={styles.gameWrap}>
      <a
        className={`${styles.poster} ${styles.posterLink}`}
        href={GAME_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Open Rose in a new tab — game is best on desktop"
      >
        {PREVIEW_VIDEO_SRC ? (
          <video
            className={styles.posterVideo}
            src={PREVIEW_VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <PosterWaves />
        )}
        <div className={styles.posterContent}>
          <div className={styles.posterTitle}>{'{ Rose }'}</div>
          <div className={styles.posterPlay}>
            Open game in new tab
            <span className={styles.posterPlayIcon} aria-hidden="true">
              ↗
            </span>
          </div>
          <div className={styles.posterMeta}>
            music game · phaser3 · best on desktop
          </div>
        </div>
      </a>
    </div>
  );
}

export default function SideQuest() {
  const { ref, inView } = useInView<HTMLDivElement>();

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
          Actions. Now I volunteer and use it to teach high schoolers how to program.
        </p>

        <div className={styles.gameDesktop}>
          <GameCardDesktop />
        </div>
        <div className={styles.gameMobile}>
          <GameCardMobile />
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
