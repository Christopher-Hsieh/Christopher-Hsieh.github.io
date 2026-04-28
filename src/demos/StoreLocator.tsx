import { useState } from 'react';
import styles from './StoreLocator.module.css';

type Vendor = 'mapbox' | 'apple';

type Pin = {
  id: string;
  name: string;
  city: string;
  state: string;
  x: number;
  y: number;
};

const PINS: Pin[] = [
  { id: 'sf', name: 'Nike SF', city: 'San Francisco', state: 'CA', x: 9, y: 44 },
  { id: 'la', name: 'Nike LA', city: 'Los Angeles', state: 'CA', x: 13, y: 60 },
  { id: 'sea', name: 'Nike Seattle', city: 'Seattle', state: 'WA', x: 14, y: 18 },
  { id: 'pdx', name: 'Nike Beaverton', city: 'Beaverton', state: 'OR', x: 13, y: 26 },
  { id: 'phx', name: 'Nike Phoenix', city: 'Phoenix', state: 'AZ', x: 22, y: 64 },
  { id: 'den', name: 'Nike Denver', city: 'Denver', state: 'CO', x: 36, y: 46 },
  { id: 'aus', name: 'Nike Austin', city: 'Austin', state: 'TX', x: 50, y: 75 },
  { id: 'chi', name: 'Nike Chicago', city: 'Chicago', state: 'IL', x: 60, y: 36 },
  { id: 'ind', name: 'Nike Indianapolis', city: 'Indianapolis', state: 'IN', x: 64, y: 44 },
  { id: 'mia', name: 'Nike Miami', city: 'Miami', state: 'FL', x: 79, y: 82 },
  { id: 'bos', name: 'Nike Boston', city: 'Boston', state: 'MA', x: 86, y: 28 },
  { id: 'nyc', name: 'Nike NYC', city: 'New York', state: 'NY', x: 84, y: 34 },
];

export default function StoreLocator() {
  const [vendor, setVendor] = useState<Vendor>('apple');
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar}>
        <span className={styles.tag}>// vendor</span>
        <div className={styles.toggle} role="tablist">
          <button
            role="tab"
            aria-selected={vendor === 'mapbox'}
            className={`${styles.toggleBtn} ${vendor === 'mapbox' ? styles.toggleBtnActive : ''}`}
            onClick={() => setVendor('mapbox')}
          >
            Mapbox
            <span className={styles.legacy}>legacy</span>
          </button>
          <button
            role="tab"
            aria-selected={vendor === 'apple'}
            className={`${styles.toggleBtn} ${vendor === 'apple' ? styles.toggleBtnActive : ''}`}
            onClick={() => setVendor('apple')}
          >
            Apple Maps
            <span className={styles.current}>current</span>
          </button>
        </div>
      </div>

      <div className={styles.split}>
        <div className={`${styles.map} ${styles[vendor]}`} aria-label={`${vendor} map`}>
          <div className={styles.gridOverlay} aria-hidden="true" />
          <svg
            className={styles.usOutline}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M5 30 Q 20 18 40 22 T 80 26 Q 92 28 95 36 Q 96 50 90 60 Q 80 75 70 82 Q 50 88 30 82 Q 12 76 6 60 Q 2 45 5 30 Z"
              className={styles.usPath}
            />
          </svg>
          {PINS.map((p) => (
            <button
              key={p.id}
              className={`${styles.pin} ${hoverId === p.id ? styles.pinActive : ''}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              onMouseEnter={() => setHoverId(p.id)}
              onMouseLeave={() => setHoverId(null)}
              onFocus={() => setHoverId(p.id)}
              onBlur={() => setHoverId(null)}
              aria-label={`${p.name}, ${p.city}, ${p.state}`}
            >
              <span className={styles.pinDot} />
              <span className={styles.pinPulse} aria-hidden="true" />
              {hoverId === p.id && (
                <span className={styles.tooltip}>
                  <strong>{p.name}</strong>
                  <span>
                    {p.city}, {p.state}
                  </span>
                </span>
              )}
            </button>
          ))}
          <div className={styles.attrib}>
            {vendor === 'mapbox' ? '© Mapbox · OpenStreetMap' : '© Apple Maps'}
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideHead}>
            <span className={styles.sideTitle}>Nearby stores</span>
            <span className={styles.sideCount}>{PINS.length}</span>
          </div>
          <ul className={styles.results}>
            {PINS.map((p) => (
              <li
                key={p.id}
                className={`${styles.result} ${hoverId === p.id ? styles.resultActive : ''}`}
                onMouseEnter={() => setHoverId(p.id)}
                onMouseLeave={() => setHoverId(null)}
              >
                <span className={styles.resultDot} />
                <div className={styles.resultBody}>
                  <span className={styles.resultName}>{p.name}</span>
                  <span className={styles.resultMeta}>
                    {p.city}, {p.state}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
