import { useEffect, useRef, useState } from 'react';

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  /**
   * `threshold: 0` is intentional and important.
   *
   * The maximum intersection ratio for an element is `viewport_height /
   * element_height`. On a mobile viewport (~600px) a tall section like Work
   * (~5000px) can never exceed ~12% intersection, so any threshold above
   * that would silently never fire — the section would stay at opacity 0
   * forever. Threshold 0 + a negative bottom rootMargin gives us "fire as
   * soon as the section enters the top 90% of the viewport", which works
   * regardless of element height.
   */
  const { threshold = 0, rootMargin = '0px 0px -10% 0px', once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
