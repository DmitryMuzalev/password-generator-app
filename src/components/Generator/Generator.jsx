import styles from "./Generator.module.scss";

function Generator({ children }) {
  return <form className={styles.generator + " box"}>{children}</form>;
}
export { Generator };
