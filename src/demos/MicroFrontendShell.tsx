import { useEffect, useRef, useState } from 'react';
import styles from './MicroFrontendShell.module.css';

type Status = 'idle' | 'fetching' | 'mounting' | 'ready' | 'error';

type Module = {
  id: string;
  name: string;
  remote: string;
  version: string;
  loadMs: number;
};

const MODULES: Module[] = [
  {
    id: 'header',
    name: 'Header MFE',
    remote: 'https://cdn.example.com/header/remote-entry.js',
    version: '2.4.1',
    loadMs: 420,
  },
  {
    id: 'promo',
    name: 'Promo MFE',
    remote: 'https://cdn.example.com/promo/remote-entry.js',
    version: '1.9.0',
    loadMs: 720,
  },
];

type Log = { t: number; line: string };

export default function MicroFrontendShell() {
  const [statuses, setStatuses] = useState<Record<string, Status>>(() =>
    MODULES.reduce<Record<string, Status>>((acc, m) => {
      acc[m.id] = 'idle';
      return acc;
    }, {}),
  );
  const [logs, setLogs] = useState<Log[]>([
    { t: 0, line: 'shell ready · waiting for modules…' },
  ]);
  const startRef = useRef<number>(0);

  const log = (line: string) => {
    const elapsed = Math.round(performance.now() - startRef.current);
    setLogs((prev) => [...prev, { t: elapsed, line }]);
  };

  useEffect(() => {
    return () => {
      // No-op cleanup; included for clarity.
    };
  }, []);

  const mountAll = () => {
    startRef.current = performance.now();
    setLogs([{ t: 0, line: 'shell ready · resolving remotes…' }]);
    setStatuses(
      MODULES.reduce<Record<string, Status>>((acc, m) => {
        acc[m.id] = 'fetching';
        return acc;
      }, {}),
    );

    MODULES.forEach((m) => {
      log(`fetch ${m.remote}`);
      window.setTimeout(() => {
        setStatuses((s) => ({ ...s, [m.id]: 'mounting' }));
        log(`${m.name} bundle loaded (v${m.version}) · mounting…`);
        window.setTimeout(() => {
          setStatuses((s) => ({ ...s, [m.id]: 'ready' }));
          log(`${m.name} ready ✓`);
        }, 220);
      }, m.loadMs);
    });
  };

  const reset = () => {
    setStatuses(
      MODULES.reduce<Record<string, Status>>((acc, m) => {
        acc[m.id] = 'idle';
        return acc;
      }, {}),
    );
    setLogs([{ t: 0, line: 'shell reset · waiting for modules…' }]);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <button type="button" className={styles.cta} onClick={mountAll}>
          Mount remotes
        </button>
        <button type="button" className={styles.ctaGhost} onClick={reset}>
          Reset
        </button>
        <span className={styles.shellTag}>// shell host</span>
      </div>

      <div className={styles.canvas}>
        {MODULES.map((m) => {
          const status = statuses[m.id] ?? 'idle';
          return (
            <div key={m.id} className={`${styles.module} ${styles[`s_${status}`]}`}>
              <header className={styles.modHead}>
                <span className={styles.modName}>{m.name}</span>
                <span className={styles.modVersion}>v{m.version}</span>
              </header>
              <div className={styles.modBody}>
                {status === 'idle' && <span className={styles.modIdle}>not mounted</span>}
                {status === 'fetching' && (
                  <span className={styles.spinner}>fetching remote…</span>
                )}
                {status === 'mounting' && (
                  <span className={styles.spinner}>hydrating module…</span>
                )}
                {status === 'ready' && (
                  <div className={styles.modReady}>
                    <span className={styles.check}>✓</span> {m.name} mounted into shell
                  </div>
                )}
                {status === 'error' && <span className={styles.modError}>load failed</span>}
              </div>
              <footer className={styles.modFoot}>
                <span className={styles.modRemote}>{m.remote}</span>
              </footer>
            </div>
          );
        })}
      </div>

      <div className={styles.logs}>
        <div className={styles.logsBar}>
          <span className={styles.dot} data-color="r" />
          <span className={styles.dot} data-color="y" />
          <span className={styles.dot} data-color="g" />
          <span className={styles.logsTitle}>shell.console</span>
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
