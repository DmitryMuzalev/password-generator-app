import styles from "./Length.module.scss";
import { useContextApp } from "../../hook/useContextApp";

function Length() {
  const { length, setLength } = useContextApp();
  return (
    <div className={styles.length}>
      <div className={styles.lengthInfo}>
        <p>character length</p>
        <span className={styles.lengthInfoValue}>{length}</span>
      </div>
      <input
        type="range"
        min={1}
        max={20}
        step={1}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className={styles.lengthRange}
        style={{
          background: `linear-gradient(to right, var(--green) ${
            length * 5
          }%, var(--grayish-700) ${length * 5}%)`,
        }}
      />
    </div>
  );
}
export { Length };
