import { lazy, Suspense } from 'react';
import SectionLabel from '../components/SectionLabel';
import Tag from '../components/Tag';
import { work, type WorkItem } from '../data/work';
import { useInView } from '../hooks/useInView';
import styles from './Work.module.css';

const StoreSearchModal = lazy(() => import('../demos/StoreSearchModal'));
const MicroFrontendShell = lazy(() => import('../demos/MicroFrontendShell'));

function DemoFor({ id }: { id: NonNullable<WorkItem['demoId']> }) {
  if (id === 'storeSearch') return <StoreSearchModal />;
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

function MobileVideo({ video }: { video: NonNullable<WorkItem['video']> }) {
  return (
    <div className={styles.videoWrap}>
      <div className={styles.phone} aria-hidden="false">
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

function LiveLinks({ links }: { links: NonNullable<WorkItem['liveLinks']> }) {
  return (
    <div className={styles.liveLinksBlock}>
      <div className={styles.liveLinksHead}>
        <span className={styles.liveLinksDot} aria-hidden="true" />
        See it live
      </div>
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

export default function Work() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="work">
      <div
        ref={ref}
        className={`container fadeIn ${inView ? 'isVisible' : ''}`}
      >
        <SectionLabel label="work" />
        <h2 className={styles.heading}>
          Live demos of things I&apos;ve shipped.
        </h2>
        <p className={styles.subhead}>
          Real systems are behind logins, paywalls, or VPNs — so the cards below include
          small interactive mocks I built that mirror what I led, plus deep links to the
          live property where applicable.
        </p>

        <div className={styles.cards}>
          {work.map((w) => (
            <article key={w.id} className={styles.card}>
              <header className={styles.cardHead}>
                <div>
                  <div className={styles.cardCompany}>{w.company}</div>
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
              <p className={styles.cardBlurb}>{w.blurb}</p>
              <div className={styles.tags}>
                {w.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {w.screenshot && <Screenshot shot={w.screenshot} />}
              {w.video && <MobileVideo video={w.video} />}
              {w.liveLinks && <LiveLinks links={w.liveLinks} />}
              {w.demoId && (
                <div className={styles.demo}>
                  <Suspense fallback={<DemoFallback />}>
                    <DemoFor id={w.demoId} />
                  </Suspense>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
