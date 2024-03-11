import styles from "./Strength.module.scss";

function Strength() {
  const strengthLevels = [
    { id: 0, message: "empty" },
    { id: 1, message: "too weak!" },
    { id: 2, message: "weak" },
    { id: 3, message: "medium" },
    { id: 4, message: "strong" },
  ];

  const currentStrengthLevels = strengthLevels[0];
  return (
    <div className={styles.strength}>
      <p className={styles.strengthTitle}>strength</p>
      <div className={styles.strengthStatus}>
        <span className={styles.strengthMessage}>
          {currentStrengthLevels.id ? currentStrengthLevels.message : ""}
        </span>
        <div className={styles.strengthIndicators}>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <Indicator
                key={index}
                classes={
                  index + 1 > currentStrengthLevels.id ||
                  currentStrengthLevels.id === 0
                    ? ""
                    : currentStrengthLevels.message
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Indicator({ classes }) {
  classes = classes === "too weak!" ? "too_weak" : classes;
  return <span className={classes}></span>;
}

export { Strength };
