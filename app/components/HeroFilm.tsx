"use client";

import { motion } from "framer-motion";
import styles from "./HeroFilm.module.css";

const layers = [
  {
    id: "nebula",
    className: styles.nebula,
    animate: { rotate: 360 },
    duration: 28,
  },
  {
    id: "flare",
    className: styles.flare,
    animate: { rotate: -360 },
    duration: 36,
  },
  {
    id: "halo",
    className: styles.halo,
    animate: { scale: [1, 1.2, 1.05, 1.25, 1] },
    duration: 24,
  },
];

const floatingWords = ["Lustre", "Aurora", "Enigma", "Velvet", "Celestia"];

export function HeroFilm() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.canvas}>
        {layers.map((layer) => (
          <motion.div
            key={layer.id}
            className={`${styles.layer} ${layer.className}`}
            animate={layer.animate}
            transition={{
              duration: layer.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <div className={styles.grain} />
        <motion.div
          className={styles.lightSweep}
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: [0.8, 0, 0.2, 1],
          }}
        />
        <div className={styles.flotations}>
          {floatingWords.map((word, index) => (
            <motion.span
              key={word}
              className={styles.floatWord}
              style={{ top: `${15 + index * 14}%`, left: `${10 + index * 18}%` }}
              animate={{
                y: ["0%", "-12%", "8%", "0%"],
                opacity: [0.2, 0.55, 0.45, 0.6],
              }}
              transition={{
                duration: 12 + index * 2,
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 1.2,
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Maison Aura presents
        </motion.p>

        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          The Prelude{" "}
          <span className={styles.highlight}>to New Jewellery Articles</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.88, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
        >
          An atmospheric teaser weaving light and shadow around the forthcoming
          Maison Aura collection. Created for cinematic display and in-store
          projection to build anticipation ahead of the official release.
        </motion.p>

        <motion.div
          className={styles.metaBlock}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <span>Premiere</span>
          <strong>January 27 · 8PM CET</strong>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.85 }}
        >
          <a className={styles.primaryCta} href="#preview">
            Watch the Motion Preview
          </a>
          <a className={styles.secondaryCta} href="#inspiration">
            Storyboard & Mood
          </a>
        </motion.div>
      </div>
    </section>
  );
}
