import { lazy, Suspense } from 'react';
import SectionLabel from '../components/SectionLabel';
import Tag from '../components/Tag';
import { work, type WorkItem } from '../data/work';
import { useInView } from '../hooks/useInView';
import styles from './Work.module.css';

const StoreSearchModal = lazy(() => import('../demos/StoreSearchModal'));
const StoreLocator = lazy(() => import('../demos/StoreLocator'));
const MicroFrontendShell = lazy(() => import('../demos/MicroFrontendShell'));

function DemoFor({ id }: { id: WorkItem['demoId'] }) {
  if (id === 'storeSearch') return <StoreSearchModal />;
  if (id === 'storeLocator') return <StoreLocator />;
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
              <div className={styles.demo}>
                <Suspense fallback={<DemoFallback />}>
                  <DemoFor id={w.demoId} />
                </Suspense>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
