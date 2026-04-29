import { Fragment } from 'react';
import SectionLabel from '../components/SectionLabel';
import Tag from '../components/Tag';
import { skills } from '../data/skills';
import { timeline } from '../data/timeline';
import { useInView } from '../hooks/useInView';
import styles from './Skills.module.css';

const TL_VIEWBOX_W = 1100;
const TL_VIEWBOX_H = 240;
const TL_PAD_X = 50;
const TL_MASTER_Y = 90;

function TechTimelineHorizontal() {
  /**
   * Equal-spaced positioning: each entry gets its own slot regardless of the
   * year delta, so a 4-year gap (e.g. 2018 -> 2022) reads the same width as
   * a 1-year gap (2014 -> 2015). The year labels under each dot still tell
   * the recruiter when it actually happened. Trade-off: loses the "linear
   * time" sense in exchange for a much tighter visual with no dead air.
   */
  const usableW = TL_VIEWBOX_W - 2 * TL_PAD_X;
  const lastIdx = timeline.length - 1;
  const indexToX = (idx: number) =>
    lastIdx === 0
      ? TL_VIEWBOX_W / 2
      : TL_PAD_X + (idx / lastIdx) * usableW;
  const xToPercent = (x: number) => `${(x / TL_VIEWBOX_W) * 100}%`;
  const yToPercent = (y: number) => `${(y / TL_VIEWBOX_H) * 100}%`;

  return (
    <div className={styles.tlHorizontal}>
      <svg
        className={styles.tlSvg}
        viewBox={`0 0 ${TL_VIEWBOX_W} ${TL_VIEWBOX_H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Tech stacks I have picked up over time"
      >
        {/* Master line */}
        <line
          x1={TL_PAD_X}
          y1={TL_MASTER_Y}
          x2={TL_VIEWBOX_W - TL_PAD_X}
          y2={TL_MASTER_Y}
          className={styles.tlMaster}
        />

        {/* Tick + dot per entry */}
        {timeline.map((e, i) => {
          const x = indexToX(i);
          return (
            <g key={`entry-${e.year}`}>
              <line
                x1={x}
                y1={TL_MASTER_Y - 4}
                x2={x}
                y2={TL_MASTER_Y + 4}
                className={styles.tlTick}
              />
              <circle
                cx={x}
                cy={TL_MASTER_Y}
                r={7}
                className={styles.tlDot}
              />
            </g>
          );
        })}

        {/* Hollow secondary dot under each "also using" column */}
        {timeline.map((e, i) => {
          if (!e.alsoUsing || e.alsoUsing.length === 0 || i === lastIdx) {
            return null;
          }
          const xMid = indexToX(i + 0.5);
          return (
            <circle
              key={`alsoDot-${e.year}`}
              cx={xMid}
              cy={TL_MASTER_Y}
              r={5}
              className={styles.tlAlsoDot}
            />
          );
        })}
      </svg>

      {/* Year + tech tags positioned below each dot */}
      {timeline.map((e, i) => {
        const x = indexToX(i);
        return (
          <Fragment key={`labels-${e.year}`}>
            <span
              className={styles.tlYearLabel}
              style={{
                left: xToPercent(x),
                top: yToPercent(TL_MASTER_Y + 12),
              }}
            >
              {e.year}
            </span>
            <div
              className={styles.tlTagsCol}
              style={{
                left: xToPercent(x),
                top: yToPercent(TL_MASTER_Y + 36),
              }}
            >
              {e.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Fragment>
        );
      })}

      {/* "Also using" pills positioned ABOVE the line, in the gap between this
          entry and the next. Skipped on the last entry (no next to be between). */}
      {timeline.map((e, i) => {
        if (!e.alsoUsing || e.alsoUsing.length === 0 || i === lastIdx) {
          return null;
        }
        const xMid = indexToX(i + 0.5);
        return (
          <div
            key={`above-${e.year}`}
            className={styles.tlAboveCol}
            style={{
              left: xToPercent(xMid),
              top: yToPercent(TL_MASTER_Y - 14),
            }}
          >
            {e.alsoUsing.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function TechTimelineVertical() {
  return (
    <ol className={styles.tlVertical}>
      {timeline.map((e) => (
        <li key={`v-${e.year}`} className={styles.tlVRow}>
          <div className={styles.tlVRail} aria-hidden="true">
            <span className={styles.tlVDot} />
          </div>
          <div className={styles.tlVBody}>
            <div className={styles.tlVYear}>{e.year}</div>
            <div className={styles.tlVTags}>
              {e.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
              {e.alsoUsing?.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function TechTimeline() {
  return (
    <div className={styles.tlBlock}>
      <div className={styles.tlDesktop}>
        <TechTimelineHorizontal />
      </div>
      <div className={styles.tlMobile}>
        <TechTimelineVertical />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills">
      <div
        ref={ref}
        className={`container fadeIn ${inView ? 'isVisible' : ''}`}
      >
        <SectionLabel label="skills" />
        <h2 className={styles.heading}>Tools I&apos;ve worked with.</h2>
        <p className={styles.subhead}>
          Proven to learn new technologies fast and deliver with them — experience with what is needed to pick the right
          tool for the job, then bring the teams along.
        </p>

        <p className={styles.timelineNote}>
          Timeline is not exact- it shows the trend. e.g. In recent years, I&apos;ve worked
          on defining the full tech-stack for cross-team and cross-org delivery.
        </p>

        <TechTimeline />

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
