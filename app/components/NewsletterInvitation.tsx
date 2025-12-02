"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import styles from "./NewsletterInvitation.module.css";

export function NewsletterInvitation() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      return;
    }
    // Simulate delivery to marketing automation; we only confirm visually here.
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className={styles.wrapper}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.copyBlock}>
          <span className={styles.kicker}>Insider List</span>
          <h2>Receive the Private Screening Link</h2>
          <p>
            Register for a same-day screening invitation, press-ready stills, and behind-the-scenes
            notes from our creative studio.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrap}>
            <label htmlFor="email">Work email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@maison.com"
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Request Access
          </button>
        </form>

        <motion.div
          className={styles.confirmation}
          initial={false}
          animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : 10 }}
          transition={{ duration: 0.4 }}
        >
          {submitted && (
            <span>
              Merci—our curators will share the premiere link and press dossier with you shortly.
            </span>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
