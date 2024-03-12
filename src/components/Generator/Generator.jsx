import { useContextApp } from "../../hook/useContextApp";
import styles from "./Generator.module.scss";

function Generator({ children }) {
  const { handlerSubmit } = useContextApp();
  return (
    <form className={styles.generator + " box"} onSubmit={handlerSubmit}>
      {children}
    </form>
  );
}
export { Generator };
