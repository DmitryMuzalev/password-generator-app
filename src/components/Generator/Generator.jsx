import styles from "./Generator.module.scss";

function Generator({ children }) {
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.generator + " box"} onSubmit={handlerSubmit}>
      {children}
    </form>
  );
}
export { Generator };
