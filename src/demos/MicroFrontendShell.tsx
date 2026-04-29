import { useRef, useState } from 'react';
import styles from './MicroFrontendShell.module.css';

type Target = 'web' | 'ios';

type SlotStatus = 'idle' | 'fetching' | 'mounting' | 'ready';

type Feature = {
  id: string;
  label: string;
  team: string;
  remote: string;
  version: string;
  loadMs: number;
};

type Slot = { status: SlotStatus; featureId: string | null };
type Log = { t: number; line: string };

const TARGET_LABEL: Record<Target, string> = {
  web: 'Browser',
  ios: 'iOS PWA',
};

const FEATURES: Feature[] = [
  { id: 'a', label: 'Module A', team: 'team 1', remote: '@platform/module-a', version: '1.4.0', loadMs: 360 },
  { id: 'b', label: 'Module B', team: 'team 2', remote: '@platform/module-b', version: '2.1.3', loadMs: 520 },
  { id: 'c', label: 'Module C', team: 'team 1', remote: '@platform/module-c', version: '0.9.1', loadMs: 460 },
  { id: 'd', label: 'Module D', team: 'team 3', remote: '@platform/module-d', version: '3.0.2', loadMs: 410 },
  { id: 'e', label: 'Module E', team: 'team 2', remote: '@platform/module-e', version: '1.6.0', loadMs: 440 },
];

export default function MicroFrontendShell() {
  const [target, setTarget] = useState<Target>('web');
  const [slot, setSlot] = useState<Slot>({ status: 'idle', featureId: null });
  const [logs, setLogs] = useState<Log[]>([
    { t: 0, line: 'shell ready · @platform/host mounted · waiting for feature route…' },
  ]);
  const startRef = useRef<number>(performance.now());

  const log = (line: string) => {
    const elapsed = Math.round(performance.now() - startRef.current);
    setLogs((prev) => [...prev.slice(-30), { t: elapsed, line }]);
  };

  const route = (f: Feature) => {
    if (slot.status === 'fetching' || slot.status === 'mounting') return;
    setSlot({ status: 'fetching', featureId: f.id });
    log(`route → /${f.id} · resolving ${f.remote}@${f.version}`);
    window.setTimeout(() => {
      setSlot({ status: 'mounting', featureId: f.id });
      log(`bundle loaded (${(f.loadMs / 1000).toFixed(2)}s) · hydrating module`);
      window.setTimeout(() => {
        setSlot({ status: 'ready', featureId: f.id });
        log(`✓ ${f.label} mounted · owned by ${f.team}-team`);
      }, 240);
    }, f.loadMs);
  };

  const switchTarget = (t: Target) => {
    if (t === target) return;
    setTarget(t);
    log(`shell rehosted in ${TARGET_LABEL[t]} container · same code path`);
  };

  const activeFeature = FEATURES.find((f) => f.id === slot.featureId) ?? null;

  return (
    <div className={styles.wrap}>
      <div className={styles.targets}>
        <span className={styles.targetsLabel}>// shipping target</span>
        <div className={styles.targetsRow}>
          {(Object.keys(TARGET_LABEL) as Target[]).map((t) => (
            <button
              type="button"
              key={t}
              className={`${styles.targetBtn} ${target === t ? styles.targetActive : ''}`}
              onClick={() => switchTarget(t)}
            >
              {TARGET_LABEL[t]}
            </button>
          ))}
        </div>
        <span className={styles.targetsHint}>same shell · same code · two surfaces</span>
      </div>

      <div className={`${styles.frame} ${styles[`frame_${target}`]}`}>
        <FrameChrome target={target} />
        <div className={styles.shell}>
          <div className={styles.topNav}>
            <span className={styles.brand}>store.ops</span>
            <span className={styles.topNavSpacer} />
            <span className={styles.topNavItem}>Search</span>
            <span className={styles.topNavItem}>Notifications</span>
            <span className={styles.topNavItem}>Location</span>
            <span className={styles.ownerTag} data-owner="host">
              host
            </span>
          </div>
          <div className={styles.body}>
            <nav className={styles.sideNav} aria-label="feature routes">
              <span className={styles.sideNavLabel}>routes</span>
              {FEATURES.map((f) => (
                <button
                  type="button"
                  key={f.id}
                  className={`${styles.navItem} ${slot.featureId === f.id ? styles.navItemActive : ''}`}
                  onClick={() => route(f)}
                >
                  <span className={styles.navItemDot} />
                  <span className={styles.navItemLabel}>{f.label}</span>
                  <span className={styles.navTeam}>{f.team}</span>
                </button>
              ))}
              <span className={styles.ownerTag} data-owner="host">
                host
              </span>
            </nav>
            <div className={styles.appSlot}>
              <SlotContent slot={slot} feature={activeFeature} />
              <span className={styles.ownerTag} data-owner="feature">
                feature
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.split}>
        <div className={styles.respCard}>
          <header className={styles.respHead}>
            <span className={styles.respDot} data-owner="host" />
            Host / platform team
          </header>
          <ul className={styles.respList}>
            <li>nav, routing manifest</li>
            <li>auth handshake · token refresh · session</li>
            <li>shared design system, theming, a11y baseline</li>
            <li>build + deploy pipeline for web, iOS, desktop</li>
            <li>observability, error reporting strategy</li>
          </ul>
        </div>
        <div className={styles.respCard}>
          <header className={styles.respHead}>
            <span className={styles.respDot} data-owner="feature" />
            Feature teams
          </header>
          <ul className={styles.respList}>
            <li>own one or more route slots end-to-end</li>
            <li>declare routes via manifest · ship independently</li>
            <li>consume and conribute to common components</li>
            <li>release on their own cadence</li>
          </ul>
        </div>
      </div>

      <div className={styles.logs}>
        <div className={styles.logsBar}>
          <span className={styles.dot} data-color="r" />
          <span className={styles.dot} data-color="y" />
          <span className={styles.dot} data-color="g" />
          <span className={styles.logsTitle}>shell.console · @platform/design-system in sync</span>
        </div>
        <pre className={styles.logsBody}>
          {logs.map((l, i) => (
            <div key={i} className={styles.logLine}>
              <span className={styles.logTime}>+{l.t}ms</span>
              <span className={styles.logArrow}>{'>'}</span>
              <span className={styles.logText}>{l.line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

function FrameChrome({ target }: { target: Target }) {
  if (target === 'ios') {
    return (
      <div className={styles.chromeIos}>
        <span className={styles.iosTime}>9:41</span>
        <span className={styles.iosLabel}>Store Ops</span>
        <span className={styles.iosBattery}>100%</span>
      </div>
    );
  }
  return (
    <div className={styles.chromeWeb}>
      <span className={styles.dot} data-color="r" />
      <span className={styles.dot} data-color="y" />
      <span className={styles.dot} data-color="g" />
      <span className={styles.chromeAddr}>ops.example.com</span>
    </div>
  );
}

function SlotContent({ slot, feature }: { slot: Slot; feature: Feature | null }) {
  if (slot.status === 'idle' || !feature) {
    return (
      <div className={styles.slotIdle}>
        <span className={styles.slotIdleHint}>← pick a route to mount a feature MFE</span>
      </div>
    );
  }
  if (slot.status === 'fetching') {
    return (
      <div className={styles.slotLoading}>
        <span className={styles.spinner}>
          fetching {feature.remote}@{feature.version}
        </span>
      </div>
    );
  }
  if (slot.status === 'mounting') {
    return (
      <div className={styles.slotLoading}>
        <span className={styles.spinner}>hydrating {feature.label} module…</span>
      </div>
    );
  }
  return (
    <div className={styles.slotReady}>
      <header className={styles.slotHead}>
        <div>
          <div className={styles.slotTitle}>{feature.label}</div>
          <div className={styles.slotSub}>
            route /{feature.id} · owned by {feature.team}-team
          </div>
        </div>
        <span className={styles.slotVersion}>
          {feature.remote}@{feature.version}
        </span>
      </header>
      <FeatureMock id={feature.id} />
    </div>
  );
}

function FeatureMock({ id }: { id: string }) {
  return (
    <div className={styles.mock} aria-hidden="true">
      <div className={styles.mockStats}>
        <div className={styles.mockStat}>
          <span className={styles.mockStatLabel}>—</span>
          <span className={styles.mockStatBar} />
        </div>
        <div className={styles.mockStat}>
          <span className={styles.mockStatLabel}>—</span>
          <span className={styles.mockStatBar} />
        </div>
        <div className={styles.mockStat}>
          <span className={styles.mockStatLabel}>—</span>
          <span className={styles.mockStatBar} />
        </div>
      </div>
      <div className={styles.mockBlock}>
        <span className={styles.mockLine} style={{ width: '70%' }} />
        <span className={styles.mockLine} style={{ width: '92%' }} />
        <span className={styles.mockLine} style={{ width: '58%' }} />
        <span className={styles.mockLine} style={{ width: '80%' }} />
      </div>
      <span className={styles.mockTag}>module-{id} content</span>
    </div>
  );
}
