import { useEffect, useState } from 'react';

/** Characters cycled through during the scramble phase before each slot locks. */
const DEFAULT_CHARSET =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/.<>{}#$%&*';

type Options = {
  /** Total time (ms) for every character to lock in. */
  duration?: number;
  /** How often the scrambled characters refresh (ms). 60ms ≈ 16 fps — feels alive without thrashing. */
  tickRate?: number;
  /** Delay (ms) before the animation starts. Useful for staggering after other elements appear. */
  delay?: number;
};

/**
 * Animated "decode" effect — the returned string starts as random characters,
 * then the original `text` characters lock in left-to-right over `duration` ms.
 *
 * Skips the animation entirely (returns `text` immediately) when the user
 * has `prefers-reduced-motion: reduce` set, or when `duration` is 0.
 */
export function useDecodeReveal(text: string, options: Options = {}) {
  const { duration = 900, tickRate = 60, delay = 0 } = options;
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (
      duration <= 0 ||
      typeof window === 'undefined' ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplay(text);
      return;
    }

    // Reset to a fully scrambled frame so the effect feels intentional even
    // when StrictMode re-mounts in dev.
    setDisplay(scramble(text, ''));

    let elapsed = 0;
    let tickId: number | undefined;
    let startId: number | undefined;

    const tick = () => {
      elapsed += tickRate;
      const progress = Math.min(elapsed / duration, 1);
      setDisplay(scramble(text, text.slice(0, Math.floor(progress * text.length))));
      if (progress >= 1) {
        if (tickId !== undefined) window.clearInterval(tickId);
        setDisplay(text);
      }
    };

    startId = window.setTimeout(() => {
      tickId = window.setInterval(tick, tickRate);
    }, delay);

    return () => {
      if (startId !== undefined) window.clearTimeout(startId);
      if (tickId !== undefined) window.clearInterval(tickId);
    };
  }, [text, duration, tickRate, delay]);

  return display;
}

/**
 * Build a single frame: keep `locked` as-is for its leading characters, then
 * replace each remaining slot in `text` with either the same punctuation/space
 * (so structure is preserved) or a random charset character.
 */
function scramble(text: string, locked: string) {
  let out = locked;
  for (let i = locked.length; i < text.length; i++) {
    const c = text[i];
    if (c === ' ' || c === '.' || c === ',' || c === '\n' || c === '-') {
      out += c;
    } else {
      out += DEFAULT_CHARSET[Math.floor(Math.random() * DEFAULT_CHARSET.length)];
    }
  }
  return out;
}
