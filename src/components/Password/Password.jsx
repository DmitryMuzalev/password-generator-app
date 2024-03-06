import styles from "./Password.module.scss";

function Password() {
  return (
    <div className={styles.password + " box"}>
      <div className={styles.passwordValue}>XXXXXXXXXXXXXXXXXXXX</div>
      <div className={styles.passwordCopy}>
        <span className={styles.passwordCopyMessage}>copied</span>
        <button className={styles.passwordCopyBtn} title="Copy">
          <i className="icon-copy"></i>
        </button>
      </div>
    </div>
  );
}
export { Password };
