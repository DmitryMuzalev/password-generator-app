import { useEffect, useState } from "react";
import { useContextApp } from "../../hook/useContextApp";
import styles from "./Password.module.scss";

function Password() {
  const { password } = useContextApp();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [isCopied]);

  const handlerCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setIsCopied(true);
    }
  };

  return (
    <div className={styles.password + " box"}>
      <div
        className={styles.passwordValue}
        style={{ color: password ? "inherit" : "var(--grayish-400)" }}
      >
        {password ? password : "P4$5W0rD!"}
      </div>
      <div className={styles.passwordCopy}>
        <span className={styles.passwordCopyMessage}>
          {isCopied && "copied"}
        </span>
        <button
          className={styles.passwordCopyBtn}
          title={password ? "Copy" : "Nothing to copy"}
          onClick={handlerCopy}
        >
          <i className="icon-copy"></i>
        </button>
      </div>
    </div>
  );
}
export { Password };
