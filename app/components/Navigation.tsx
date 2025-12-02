import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <header className={styles.nav}>
      <div className={styles.branding}>
        <span className={styles.logo}>Maison Aura</span>
        <span className={styles.status}>New Articles · Coming Soon</span>
      </div>

      <nav className={styles.links}>
        <a href="#preview">Preview</a>
        <a href="#inspiration">Storyboard</a>
        <a href="#insider">Insider List</a>
      </nav>
    </header>
  );
}
