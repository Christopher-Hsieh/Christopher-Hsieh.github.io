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
 * single line. When `hideSubBullets` is true the WHY half is skipped
 * even if an em-dash is present, leaving only the headline.
 */
function CardBulletItem({
  text,
  hideSubBullets,
}: {
  text: string;
  hideSubBullets?: boolean;
}) {
  const idx = text.indexOf('\u2014');
  if (idx === -1) {
    return <li className={styles.cardBullet}>{text}</li>;
  }
  const what = text.slice(0, idx).trimEnd();
  if (hideSubBullets) {
    return <li className={styles.cardBullet}>{what}</li>;
  }
  const why = text.slice(idx + 1).trimStart();
  return (
    <li className={styles.cardBullet}>
      {what}
      <span className={styles.cardBulletWhy}>{why}</span>
    </li>
  );
}

function Bullets({
  items,
  hideSubBullets,
}: {
  items: string[];
  hideSubBullets?: boolean;
}) {
  return (
    <ul className={styles.cardBullets}>
      {items.map((b, i) => (
        <CardBulletItem key={i} text={b} hideSubBullets={hideSubBullets} />
      ))}
    </ul>
  );
}

function TrailingBullets({
  label,
  items,
  hideSubBullets,
}: {
  label: string;
  items: string[];
  hideSubBullets?: boolean;
}) {
  return (
    <div className={styles.cardBulletsTrailing}>
      <div className={styles.cardBulletsTrailingLabel}>{label}</div>
      <ul className={styles.cardBullets}>
        {items.map((b, i) => (
          <CardBulletItem key={i} text={b} hideSubBullets={hideSubBullets} />
        ))}
      </ul>
    </div>
  );
}

/**
 * Collapses the bullet block (and any trailing bullets) behind a small
 * click-to-expand affordance. Default state is closed so the card stays
 * slim — recruiters skimming see the blurb + tags + live links above the
 * fold, and can opt in to read the highlights only if they want depth.
 *
 * Uses native <details>/<summary> so it works without JS state,
 * supports keyboard + screen readers out of the box, and degrades
 * gracefully if styles fail to load.
 */
function CollapsibleBullets({
  bullets,
  trailingBullets,
  hideSubBullets,
}: {
  bullets?: string[];
  trailingBullets?: WorkItem['trailingBullets'];
  hideSubBullets?: boolean;
}) {
  const count = bullets?.length ?? 0;
  if (count === 0 && !trailingBullets) return null;
  return (
    <details className={styles.bulletsDetails}>
      <summary className={styles.bulletsSummary}>
        <span className={styles.bulletsSummaryChevron} aria-hidden="true">
          ▸
        </span>
        <span className={styles.bulletsSummaryLabel}>
          Read the {count} highlights
        </span>
        <span className={styles.bulletsSummaryHint} aria-hidden="true">
          click to expand
        </span>
      </summary>
      <div className={styles.bulletsDetailsBody}>
        {bullets && <Bullets items={bullets} hideSubBullets={hideSubBullets} />}
        {trailingBullets && (
          <TrailingBullets
            label={trailingBullets.label}
            items={trailingBullets.items}
            hideSubBullets={hideSubBullets}
          />
        )}
      </div>
    </details>
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

function CardBody({
  w,
  collapsibleBullets,
}: {
  w: WorkItem;
  collapsibleBullets?: boolean;
}) {
  const videos = w.videos ?? [];
  const sideBySide = videos.length === 1;

  const bulletBlock = collapsibleBullets ? (
    <CollapsibleBullets
      bullets={w.bullets}
      trailingBullets={w.trailingBullets}
      hideSubBullets={w.hideSubBullets}
    />
  ) : (
    <>
      {w.bullets && (
        <Bullets items={w.bullets} hideSubBullets={w.hideSubBullets} />
      )}
      {w.trailingBullets && (
        <TrailingBullets
          label={w.trailingBullets.label}
          items={w.trailingBullets.items}
          hideSubBullets={w.hideSubBullets}
        />
      )}
    </>
  );

  // 1 video → side-by-side (text left, single phone right)
  if (sideBySide) {
    return (
      <div className={styles.split}>
        <div className={styles.splitLeft}>
          <p className={styles.cardBlurb}>{w.blurb}</p>
          {bulletBlock}
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
      {bulletBlock}
      <Tags items={w.tags} />
      {w.screenshot && <Screenshot shot={w.screenshot} />}
      {w.liveLinks && <LiveLinks links={w.liveLinks} />}
      {videos.length >= 2 && <VideoRow videos={videos} />}
    </>
  );
}

function WorkCard({
  w,
  collapsibleBullets,
}: {
  w: WorkItem;
  collapsibleBullets?: boolean;
}) {
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
          {w.blurbNote && <p className={styles.cardBlurbNote}>{w.blurbNote}</p>}
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
      <CardBody w={w} collapsibleBullets={collapsibleBullets} />
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
            <WorkCard key={w.id} w={w} collapsibleBullets />
          ))}
        </div>

        <div id="live-demos" className={styles.subBlock}>
          <h2 className={styles.heading}>
            Live demos of things I&apos;ve shipped.
          </h2>
          <p className={styles.subhead}>
            Real systems are behind logins — so the cards below include recordings and links to see it live where properly applicable.
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
