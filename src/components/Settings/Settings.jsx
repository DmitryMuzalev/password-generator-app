import { useContextApp } from "../../hook/useContextApp";
import styles from "./Settings.module.scss";

function Settings() {
  const {
    isUppercase,
    setIsUppercase,
    isLowercase,
    setIsLowercase,
    isNumbers,
    setIsNumbers,
    isSymbols,
    setIsSymbols,
  } = useContextApp();

  return (
    <ul className={styles.settings}>
      <SettingsItem value={isUppercase} setValue={setIsUppercase}>
        include uppercase letters
      </SettingsItem>
      <SettingsItem value={isLowercase} setValue={setIsLowercase}>
        include lowercase letters
      </SettingsItem>
      <SettingsItem value={isNumbers} setValue={setIsNumbers}>
        include numbers
      </SettingsItem>
      <SettingsItem value={isSymbols} setValue={setIsSymbols}>
        include symbols
      </SettingsItem>
    </ul>
  );
}

function SettingsItem({ value, setValue, children }) {
  return (
    <li>
      <label className={styles.settingsItem}>
        <input
          type="checkbox"
          value={value}
          onChange={() => setValue((prev) => !prev)}
        />
        <span>{children}</span>
      </label>
    </li>
  );
}

export { Settings };

//include uppercase letters
