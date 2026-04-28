import styles from './Terminal.module.css';

export type TerminalLine =
  | { type: 'cmd'; text: string }
  | { type: 'out'; text: string }
  | { type: 'comment'; text: string };

type Props = {
  title?: string;
  lines: TerminalLine[];
  className?: string;
};

export default function Terminal({ title = 'terminal', lines, className }: Props) {
  return (
    <div className={`${styles.term} ${className ?? ''}`}>
      <div className={styles.bar}>
        <span className={styles.dot} data-color="r" />
        <span className={styles.dot} data-color="y" />
        <span className={styles.dot} data-color="g" />
        <span className={styles.title}>{title}</span>
      </div>
      <pre className={styles.body}>
        {lines.map((line, i) => {
          if (line.type === 'cmd') {
            return (
              <div key={i} className={styles.lineCmd}>
                <span className={styles.prompt}>$</span> {line.text}
              </div>
            );
          }
          if (line.type === 'comment') {
            return (
              <div key={i} className={styles.lineComment}>
                # {line.text}
              </div>
            );
          }
          return (
            <div key={i} className={styles.lineOut}>
              <span className={styles.arrow}>{'>'}</span> {line.text}
            </div>
          );
        })}
      </pre>
    </div>
  );
}
