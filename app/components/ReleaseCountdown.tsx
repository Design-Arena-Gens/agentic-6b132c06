"use client";

import { useEffect, useState } from "react";
import styles from "./ReleaseCountdown.module.css";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const RELEASE_DATE = new Date("2025-01-27T19:00:00Z").getTime();

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(RELEASE_DATE - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function ReleaseCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>Premiere Countdown</span>
          <h2>New Articles Reveal</h2>
        </div>
        <div className={styles.timer}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className={styles.unit}>
              <span className={styles.value}>{value.toString().padStart(2, "0")}</span>
              <span className={styles.label}>{unit}</span>
            </div>
          ))}
        </div>
        <p className={styles.copy}>
          The teaser film debuts first for Maison Aura insiders before cascading across our
          editorial channels and boutique vitrines.
        </p>
      </div>
    </section>
  );
}
