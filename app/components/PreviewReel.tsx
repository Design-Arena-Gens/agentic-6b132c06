"use client";

import { motion } from "framer-motion";
import styles from "./PreviewReel.module.css";

const frames = [
  {
    id: "seraphic",
    title: "Seraphic Halo",
    caption: "Iridescent diamonds orbiting a hand-cut moonstone core.",
    tones: ["#E9D2FF", "#8EC8FF", "#1B1B3C"],
  },
  {
    id: "nocturne",
    title: "Nocturne Spine",
    caption: "Obsidian segments articulated by flexible platinum vertebrae.",
    tones: ["#120D16", "#4C3B2E", "#B2885F"],
  },
  {
    id: "solstice",
    title: "Solstice Bloom",
    caption: "Rose gold petals unfurling beneath a dew of champagne sapphires.",
    tones: ["#332129", "#FFB995", "#F8EAD3"],
  },
];

export function PreviewReel() {
  return (
    <section id="preview" className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.kicker}>Motion Preview</span>
        <h2 className={styles.title}>Cinematic Frames</h2>
        <p className={styles.copy}>
          A looping motion sequence designed for boutique screens introduces the
          new Maison Aura signatures through glacial camera moves and magnetic
          lighting transitions.
        </p>
      </div>

      <div className={styles.reel}>
        <motion.div
          className={styles.tracker}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 2.8, ease: [0.6, 0, 0.16, 1] }}
        />

        {frames.map((frame, index) => (
          <motion.article
            key={frame.id}
            className={styles.frame}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.75,
              delay: index * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className={styles.visual}
              style={{
                background: `linear-gradient(140deg, ${frame.tones[0]}, ${frame.tones[1]})`,
                boxShadow: `0 35px 70px rgba(12, 10, 30, 0.55), inset 0 0 0 1px rgba(255,255,255,0.12)`,
              }}
            >
              <motion.div
                className={styles.glow}
                animate={{
                  background: [
                    `radial-gradient(circle at 20% 25%, ${frame.tones[1]}, transparent 55%)`,
                    `radial-gradient(circle at 65% 35%, ${frame.tones[2]}, transparent 60%)`,
                    `radial-gradient(circle at 45% 70%, ${frame.tones[0]}, transparent 58%)`,
                  ],
                }}
                transition={{ duration: 8 + index * 2, repeat: Infinity }}
              />
              <motion.div
                className={styles.lightSweep}
                animate={{ x: ["-130%", "130%"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
              <div className={styles.frameMeta}>
                <span>Scene {index + 1}</span>
                <strong>{frame.title}</strong>
              </div>
            </div>

            <p className={styles.frameCopy}>{frame.caption}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
