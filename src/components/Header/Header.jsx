import styles from "./Header.module.scss";

function Header({ children }) {
  return (
    <header className={styles.header}>
      <h1>{children}</h1>
    </header>
  );
}
export { Header };
