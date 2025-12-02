"use client";

import { motion } from "framer-motion";
import styles from "./StoryboardMood.module.css";

const cards = [
  {
    id: "art-direction",
    title: "Art Direction",
    description:
      "Velvet-black voids sculpted by moody top-lighting and diffused prisms to capture the tactile shimmer of each cut.",
    tags: ["Prismatic haze", "Couture minimalism", "Obsidian mirror"],
  },
  {
    id: "soundscape",
    title: "Soundscape",
    description:
      "Glacial synth pads with a heartbeat sub-bass pulse and ASMR jewellery textures recorded in 4K Foley.",
    tags: ["Low frequency pulse", "Analog warmth", "ASMR detail"],
  },
  {
    id: "release",
    title: "Release Strategy",
    description:
      "60s hero cut for Vercel-hosted microsite, social shorts derived from the primary timeline, in-boutique silent loop.",
    tags: ["Cinematic 60s", "Vertical moments", "Loop ready"],
  },
];

const moodImages = [
  { id: "glow", label: "Diffused Glow", hue: "#a389ff" },
  { id: "facet", label: "Facet Study", hue: "#f8d09a" },
  { id: "silhouette", label: "Silhouette Noir", hue: "#1a1a28" },
  { id: "cascade", label: "Cascade Light", hue: "#89b7ff" },
];

export function StoryboardMood() {
  return (
    <section id="inspiration" className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <span className={styles.kicker}>Storyboard</span>
          <h2 className={styles.title}>Atmosphere & Mood</h2>
          <p className={styles.copy}>
            The teaser unfolds in three acts—awakening, levitation, radiance—each underscored by
            evolving tonal palettes and energy signatures.
          </p>
          <div className={styles.gallery}>
            {moodImages.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.moodCard}
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.14 }}
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${item.hue}, rgba(0,0,0,0.2))`,
                  boxShadow: "0 18px 40px rgba(10, 8, 25, 0.6)",
                }}
              >
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          {cards.map((card, index) => (
            <motion.article
              key={card.id}
              className={styles.card}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.65, delay: index * 0.16 }}
            >
              <header>
                <span>0{index + 1}</span>
                <h3>{card.title}</h3>
              </header>
              <p>{card.description}</p>
              <ul>
                {card.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
