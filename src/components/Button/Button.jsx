import styles from "./Button.module.scss";

function Button() {
  return (
    <button className={styles.button}>
      <span>generate</span> <i className="icon-arrow-right"></i>
    </button>
  );
}
export { Button };
