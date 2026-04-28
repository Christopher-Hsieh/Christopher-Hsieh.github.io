import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './StoreSearchModal.module.css';

type Store = {
  id: string;
  name: string;
  city: string;
  state: string;
  type: 'Flagship' | 'Factory' | 'Outlet' | 'Community';
  miles: number;
};

const STORES: Store[] = [
  { id: 'pdx', name: 'Nike Beaverton', city: 'Beaverton', state: 'OR', type: 'Flagship', miles: 0.4 },
  { id: 'nyc', name: 'Nike NYC', city: 'New York', state: 'NY', type: 'Flagship', miles: 12.1 },
  { id: 'sea', name: 'Nike Seattle', city: 'Seattle', state: 'WA', type: 'Community', miles: 8.2 },
  { id: 'la', name: 'Nike Los Angeles', city: 'Los Angeles', state: 'CA', type: 'Flagship', miles: 16.4 },
  { id: 'sf', name: 'Nike San Francisco', city: 'San Francisco', state: 'CA', type: 'Community', miles: 14.0 },
  { id: 'chi', name: 'Nike Chicago', city: 'Chicago', state: 'IL', type: 'Flagship', miles: 7.7 },
  { id: 'aus', name: 'Nike Factory Austin', city: 'Austin', state: 'TX', type: 'Factory', miles: 3.5 },
  { id: 'mia', name: 'Nike Miami', city: 'Miami', state: 'FL', type: 'Outlet', miles: 9.1 },
  { id: 'bos', name: 'Nike Boston', city: 'Boston', state: 'MA', type: 'Community', miles: 5.8 },
  { id: 'den', name: 'Nike Denver', city: 'Denver', state: 'CO', type: 'Outlet', miles: 11.3 },
  { id: 'ind', name: 'Nike Factory Indianapolis', city: 'Indianapolis', state: 'IN', type: 'Factory', miles: 2.1 },
  { id: 'phx', name: 'Nike Phoenix', city: 'Phoenix', state: 'AZ', type: 'Outlet', miles: 18.6 },
];

function useDebounced<T>(value: T, delay = 160) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function StoreSearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const [picked, setPicked] = useState<Store | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounced = useDebounced(query, 140);

  const results = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    const list = q
      ? STORES.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.city.toLowerCase().includes(q) ||
            s.state.toLowerCase().includes(q) ||
            s.type.toLowerCase().includes(q),
        )
      : STORES.slice(0, 6);
    return list.slice(0, 8);
  }, [debounced]);

  useEffect(() => {
    setActiveIdx(0);
  }, [debounced]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const choice = results[activeIdx];
      if (choice) {
        setPicked(choice);
        setOpen(false);
      }
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <button
          type="button"
          className={styles.trigger}
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
        >
          <span className={styles.kbdGroup}>
            <span className={styles.search}>Search stores</span>
            <span className={styles.kbd}>⌘K</span>
          </span>
        </button>
        {picked && (
          <div className={styles.picked}>
            <span className={styles.pickedDot} />
            <span className={styles.pickedLabel}>Last selected:</span>
            <strong>{picked.name}</strong>
            <span className={styles.pickedMeta}>
              · {picked.city}, {picked.state} · {picked.miles} mi
            </span>
          </div>
        )}
      </div>

      {open && (
        <div className={styles.overlay} role="presentation" onClick={() => setOpen(false)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label="Store search"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.searchRow}>
              <span className={styles.icon} aria-hidden="true">
                ⌕
              </span>
              <input
                ref={inputRef}
                type="search"
                className={styles.input}
                placeholder="City, ZIP, or store name…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                aria-controls="store-results"
                aria-activedescendant={
                  results[activeIdx] ? `store-${results[activeIdx].id}` : undefined
                }
              />
              <button
                type="button"
                className={styles.close}
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                ESC
              </button>
            </div>

            <ul id="store-results" className={styles.list} role="listbox">
              {results.length === 0 && (
                <li className={styles.empty}>No stores match "{query}".</li>
              )}
              {results.map((s, i) => (
                <li
                  key={s.id}
                  id={`store-${s.id}`}
                  className={`${styles.item} ${i === activeIdx ? styles.active : ''}`}
                  role="option"
                  aria-selected={i === activeIdx}
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => {
                    setPicked(s);
                    setOpen(false);
                  }}
                >
                  <div className={styles.itemMain}>
                    <span className={styles.itemName}>{s.name}</span>
                    <span className={styles.itemMeta}>
                      {s.city}, {s.state}
                    </span>
                  </div>
                  <div className={styles.itemSide}>
                    <span className={styles.type} data-type={s.type}>
                      {s.type}
                    </span>
                    <span className={styles.miles}>{s.miles} mi</span>
                  </div>
                </li>
              ))}
            </ul>

            <footer className={styles.footer}>
              <span className={styles.footHint}>
                <kbd>↑</kbd> <kbd>↓</kbd> navigate · <kbd>↵</kbd> select · <kbd>esc</kbd> close
              </span>
              <span className={styles.footPower}>powered by mfe shell</span>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
