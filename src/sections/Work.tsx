import { lazy, Suspense } from 'react';
import SectionLabel from '../components/SectionLabel';
import Tag from '../components/Tag';
import {
  work,
  platformsLed,
  type WorkItem,
  type VideoRef,
} from '../data/work';
import { useInView } from '../hooks/useInView';
import styles from './Work.module.css';

const MicroFrontendShell = lazy(() => import('../demos/MicroFrontendShell'));

function DemoFor({ id }: { id: NonNullable<WorkItem['demoId']> }) {
  if (id === 'mfeShell') return <MicroFrontendShell />;
  return null;
}

function DemoFallback() {
  return (
    <div className={styles.fallback}>
      <span className={styles.fallbackSpinner} aria-hidden="true" />
      loading demo…
    </div>
  );
}

function Screenshot({ shot }: { shot: NonNullable<WorkItem['screenshot']> }) {
  const inner = (
    <>
      <img
        src={shot.src}
        alt={shot.alt}
        loading="lazy"
        decoding="async"
        className={styles.shotImg}
      />
      {shot.caption && (
        <span className={styles.shotCaption}>
          {shot.caption}
          {shot.href && <span aria-hidden="true"> ↗</span>}
        </span>
      )}
    </>
  );

  return shot.href ? (
    <a
      className={styles.shot}
      href={shot.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${shot.caption ?? 'Open live page'} — opens in a new tab`}
    >
      {inner}
    </a>
  ) : (
    <div className={styles.shot}>{inner}</div>
  );
}

function MobilePhone({ video }: { video: VideoRef }) {
  return (
    <div className={styles.videoWrap}>
      <div className={styles.phone}>
        <div className={styles.phoneNotch} aria-hidden="true" />
        <video
          className={styles.phoneVideo}
          src={video.src}
          poster={video.poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>
      {video.caption && <div className={styles.videoCaption}>{video.caption}</div>}
    </div>
  );
}

function VideoRow({ videos }: { videos: VideoRef[] }) {
  return (
    <div className={styles.videoRow}>
      {videos.map((v) => (
        <MobilePhone key={v.src} video={v} />
      ))}
    </div>
  );
}

function LiveLinks({ links }: { links: NonNullable<WorkItem['liveLinks']> }) {
  return (
    <div className={styles.liveLinksBlock}>
      <div className={styles.liveLinksHead}>See it live</div>
      <div className={styles.liveLinksGrid}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.liveLink}
          >
            <div className={styles.liveLinkLabel}>{l.label}</div>
            {l.sublabel && (
              <div className={styles.liveLinkSub}>{l.sublabel}</div>
            )}
            <span className={styles.liveLinkArrow} aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

/**
 * Render a single bullet, splitting on the first em-dash so the text
 * before it reads as the headline (WHAT) and the text after as a smaller
 * indented sub-line (WHY). Bullets without an em-dash render as a flat
 * single line, unchanged.
 */
function CardBulletItem({ text }: { text: string }) {
  const idx = text.indexOf('\u2014');
  if (idx === -1) {
    return <li className={styles.cardBullet}>{text}</li>;
  }
  const what = text.slice(0, idx).trimEnd();
  const why = text.slice(idx + 1).trimStart();
  return (
    <li className={styles.cardBullet}>
      {what}
      <span className={styles.cardBulletWhy}>{why}</span>
    </li>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className={styles.cardBullets}>
      {items.map((b, i) => (
        <CardBulletItem key={i} text={b} />
      ))}
    </ul>
  );
}

function TrailingBullets({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className={styles.cardBulletsTrailing}>
      <div className={styles.cardBulletsTrailingLabel}>{label}</div>
      <ul className={styles.cardBullets}>
        {items.map((b, i) => (
          <CardBulletItem key={i} text={b} />
        ))}
      </ul>
    </div>
  );
}

function Tags({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className={styles.tags}>
      {items.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}

function CardBody({ w }: { w: WorkItem }) {
  const videos = w.videos ?? [];
  const sideBySide = videos.length === 1;

  // 1 video → side-by-side (text left, single phone right)
  if (sideBySide) {
    return (
      <div className={styles.split}>
        <div className={styles.splitLeft}>
          <p className={styles.cardBlurb}>{w.blurb}</p>
          {w.bullets && <Bullets items={w.bullets} />}
          {w.trailingBullets && (
            <TrailingBullets
              label={w.trailingBullets.label}
              items={w.trailingBullets.items}
            />
          )}
          <Tags items={w.tags} />
          {w.screenshot && <Screenshot shot={w.screenshot} />}
          {w.liveLinks && <LiveLinks links={w.liveLinks} />}
        </div>
        <div className={styles.splitRight}>
          <MobilePhone video={videos[0]!} />
        </div>
      </div>
    );
  }

  // 0 or 2+ videos → vertical flow with optional video row at the bottom
  return (
    <>
      <p className={styles.cardBlurb}>{w.blurb}</p>
      {w.bullets && <Bullets items={w.bullets} />}
      {w.trailingBullets && (
        <TrailingBullets
          label={w.trailingBullets.label}
          items={w.trailingBullets.items}
        />
      )}
      <Tags items={w.tags} />
      {w.screenshot && <Screenshot shot={w.screenshot} />}
      {w.liveLinks && <LiveLinks links={w.liveLinks} />}
      {videos.length >= 2 && <VideoRow videos={videos} />}
    </>
  );
}

function WorkCard({ w }: { w: WorkItem }) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <div>
          <div className={styles.cardCompany}>
            {w.company}
            {w.year && (
              <>
                <span className={styles.cardCompanyDot} aria-hidden="true">
                  {' · '}
                </span>
                <span className={styles.cardYear}>{w.year}</span>
              </>
            )}
          </div>
          <h3 className={styles.cardTitle}>{w.title}</h3>
        </div>
        {w.link && (
          <a
            className={styles.cardLink}
            href={w.link.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {w.link.label}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </header>
      <CardBody w={w} />
      {w.demoId && (
        <div className={styles.demo}>
          <Suspense fallback={<DemoFallback />}>
            <DemoFor id={w.demoId} />
          </Suspense>
        </div>
      )}
    </article>
  );
}

export default function Work() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="work">
      <div
        ref={ref}
        className={`container fadeIn ${inView ? 'isVisible' : ''}`}
      >
        <SectionLabel label="work" />
        <h2 className={styles.heading}>Platforms I&apos;ve led.</h2>
        <p className={styles.subhead}>
          Cross-team platform work — architectural direction, internal systems, 
          and the standards teams ship against.
        </p>

        <div className={styles.cards}>
          {platformsLed.map((w) => (
            <WorkCard key={w.id} w={w} />
          ))}
        </div>

        <div className={styles.subBlock}>
          <h2 className={styles.heading}>
            Live demos of things I&apos;ve shipped.
          </h2>
          <p className={styles.subhead}>
            Real systems are behind logins — so the cards below include recordings, and links to see it live where properly applicable.
          </p>

          <div className={styles.cards}>
            {work.map((w) => (
              <WorkCard key={w.id} w={w} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
