import styles from "./Settings.module.scss";

function Settings() {
  return (
    <ul className={styles.settings}>
      <li>
        <label className={styles.settingsItem}>
          <input type="checkbox" />
          <span>include uppercase letters</span>
        </label>
      </li>
      <li>
        <label className={styles.settingsItem}>
          <input type="checkbox" />
          <span>include Lowercase letters</span>
        </label>
      </li>
      <li>
        <label className={styles.settingsItem}>
          <input type="checkbox" />
          <span>include numbers</span>
        </label>
      </li>
      <li>
        <label className={styles.settingsItem}>
          <input type="checkbox" />
          <span>include symbols</span>
        </label>
      </li>
    </ul>
  );
}
export { Settings };
