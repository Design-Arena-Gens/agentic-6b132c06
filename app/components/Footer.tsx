import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <span className={styles.masthead}>Maison Aura</span>
          <p className={styles.copy}>
            A couture jewellery house crafting luminous narratives in light and shadow.
          </p>
        </div>

        <ul className={styles.meta}>
          <li>
            <span>Premiere</span>27 Jan 2025
          </li>
          <li>
            <span>Location</span>Paris · Milan · Dubai
          </li>
          <li>
            <span>Contact</span>press@maisonaura.com
          </li>
        </ul>
      </div>
      <div className={styles.legal}>
        <span>© {new Date().getFullYear()} Maison Aura Creative Studio. All rights reserved.</span>
      </div>
    </footer>
  );
}
