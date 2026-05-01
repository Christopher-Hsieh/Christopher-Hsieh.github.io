import { Fragment } from 'react';
import SectionLabel from '../components/SectionLabel';
import Stat from '../components/Stat';
import Tag from '../components/Tag';
import { profile } from '../data/profile';
import { phases, constants } from '../data/timeline';
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

/**
 * Build a CSS `grid-template-columns` string where each column is sized in
 * proportion to the number of years its phase spans. A 4-year phase gets
 * `4fr`, a 2-year phase gets `2fr`. The visual width of each band then
 * literally encodes how long the user spent in that discipline.
 */
function buildGridTemplate() {
  return phases.map((p) => `${p.yearEnd - p.yearStart}fr`).join(' ');
}

function DisciplineArcHorizontal() {
  const gridTemplate = buildGridTemplate();

  return (
    <div
      className={styles.arcGrid}
      style={{ gridTemplateColumns: gridTemplate }}
      role="list"
      aria-label="Career discipline arc"
    >
      {phases.map((p, i) => {
        const isCurrent = i === phases.length - 1;
        return (
          <div
            key={p.id}
            className={`${styles.phase} ${isCurrent ? styles.phaseCurrent : ''}`}
            role="listitem"
          >
            <div className={styles.phaseHeader}>
              <span className={styles.phaseRange}>
                {p.yearRange}
                {isCurrent && <span className={styles.phaseNow}> (now)</span>}
              </span>
              <span className={styles.phaseYears}>
                {p.yearStart} → {isCurrent ? 'now' : p.yearEnd}
              </span>
            </div>
            <div className={styles.phaseLabel}>{p.label}</div>
            <p className={styles.phaseFocus}>{p.focus}</p>
            <div className={styles.phaseTags}>
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DisciplineArcVertical() {
  return (
    <ol className={styles.tlVertical}>
      {phases.map((p, i) => {
        const isCurrent = i === phases.length - 1;
        return (
          <li key={p.id} className={styles.tlVRow}>
            <div className={styles.tlVRail} aria-hidden="true">
              <span className={styles.tlVDot} />
            </div>
            <div className={styles.tlVBody}>
              <div className={styles.tlVYear}>
                {p.yearRange}
                {isCurrent && ' (now)'} · {p.yearStart} →{' '}
                {isCurrent ? 'now' : p.yearEnd}
              </div>
              <div className={styles.phaseLabel}>{p.label}</div>
              <p className={styles.phaseFocus}>{p.focus}</p>
              <div className={styles.tlVTags}>
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function ConstantsFooter() {
  return (
    <div className={styles.constantsFooter}>
      <span className={styles.constantsLabel}>{constants.label}</span>
      <div className={styles.constantsTags}>
        {constants.items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  );
}

function DisciplineArc() {
  return (
    <div className={styles.tlBlock}>
      <div className={styles.tlDesktop}>
        <DisciplineArcHorizontal />
      </div>
      <div className={styles.tlMobile}>
        <DisciplineArcVertical />
      </div>
      <ConstantsFooter />
    </div>
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

        <h2 className={styles.heading}>10+ years across the stack.</h2>
        <p className={styles.subhead}>
          Frontend in React, TypeScript, and Next.js. Backend in Java, Spring
          Boot, and Node.js. AWS, CI/CD, automated testing, and observability
          across every role — now leading web platform architecture and
          standards across teams.
        </p>

        <DisciplineArc />
      </div>
    </section>
  );
}
