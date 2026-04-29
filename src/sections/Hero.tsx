import { Fragment } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { profile } from '../data/profile';
import { useDecodeReveal } from '../hooks/useDecodeReveal';
import styles from './Hero.module.css';

/**
 * Render a status string and break it onto a second line at the first
 * parenthetical. The parenthesized clause sits on its own line and reads as
 * an intentional aside.
 */
function renderStatus(text: string) {
  const idx = text.indexOf('(');
  if (idx === -1) return text;
  const first = text.slice(0, idx).trimEnd();
  const second = text.slice(idx);
  return (
    <Fragment>
      {first}
      <span className={styles.statusSecondLine}>{second}</span>
    </Fragment>
  );
}

/**
 * Stagger orchestration for the initial hero entrance.
 * Each child animates from `hidden` -> `visible` with a spring,
 * delayed in sequence so the page "boots up" instead of slamming in.
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 110, damping: 18, mass: 0.9 },
  },
};

/** The pitch + CTAs come in after the name has finished decoding (~1.2s). */
const lateItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      delay: 1.0,
    },
  },
};

const ctaHover = { scale: 1.03, y: -1 };
const ctaTap = { scale: 0.97 };

export default function Hero() {
  const reducedMotion = useReducedMotion();
  // Decode-scramble the name on mount; runs in parallel with Motion's
  // stagger so by the time pitch + CTAs animate in, the name is locked.
  const decodedName = useDecodeReveal(profile.name, {
    duration: reducedMotion ? 0 : 900,
    delay: reducedMotion ? 0 : 350,
  });

  return (
    <section id="top" className={styles.hero}>
      <motion.div
        className={`container ${styles.inner}`}
        variants={containerVariants}
        initial={reducedMotion ? false : 'hidden'}
        animate="visible"
      >
        <motion.div className={styles.statusRow} variants={itemVariants}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.statusText}>{renderStatus(profile.status)}</span>
        </motion.div>

        <motion.h1 className={styles.title} variants={itemVariants}>
          <motion.a
            className={styles.handle}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${profile.handle} on LinkedIn — opens in a new tab`}
            whileHover={reducedMotion ? undefined : { x: 2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            {profile.handle}
            <span className={styles.handleArrow} aria-hidden="true">
              ↗
            </span>
          </motion.a>
        </motion.h1>

        <motion.h2
          className={styles.name}
          variants={itemVariants}
          aria-label={profile.name}
        >
          {decodedName}
        </motion.h2>

        <motion.p
          className={styles.pitch}
          variants={lateItemVariants}
          initial="hidden"
          animate="visible"
        >
          {profile.pitch}
        </motion.p>

        <motion.div
          className={styles.ctas}
          variants={lateItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#work"
            className={styles.ctaPrimary}
            whileHover={reducedMotion ? undefined : ctaHover}
            whileTap={reducedMotion ? undefined : ctaTap}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            View work
            <span aria-hidden="true">→</span>
          </motion.a>
          <motion.a
            href="#contact"
            className={styles.ctaGhost}
            whileHover={reducedMotion ? undefined : ctaHover}
            whileTap={reducedMotion ? undefined : ctaTap}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            Get in touch
          </motion.a>
        </motion.div>

        <motion.div
          className={styles.scroll}
          aria-hidden="true"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <span className={styles.scrollLine} />
          <span>scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
