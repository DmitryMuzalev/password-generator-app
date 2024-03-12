import { useContextApp } from "../../hook/useContextApp";
import styles from "./Button.module.scss";

function Button() {
  const { isUppercase, isLowercase, isNumbers, isSymbols } = useContextApp();

  const settings = [isUppercase, isLowercase, isNumbers, isSymbols];
  const settingsStatus = settings.every((s) => !s);

  return (
    <button
      className={styles.button}
      disabled={settingsStatus}
      title={
        settingsStatus
          ? "To generate a password, you must select options"
          : "Generate password"
      }
    >
      <span>generate</span>
      <i className="icon-arrow-right"></i>
    </button>
  );
}
export { Button };
