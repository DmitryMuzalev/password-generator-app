import { useEffect, useState } from "react";
import { useContextApp } from "../../hook/useContextApp";
import styles from "./Strength.module.scss";

function Strength() {
  const { strength } = useContextApp();
  const [levelStrength, setLevelStrength] = useState(0);

  useEffect(() => {
    switch (strength) {
      case "too weak!":
        setLevelStrength(1);
        break;
      case "weak":
        setLevelStrength(2);
        break;
      case "medium":
        setLevelStrength(3);
        break;
      case "strong":
        setLevelStrength(4);
        break;
      default:
        setLevelStrength(0);
    }
  }, [strength]);

  return (
    <div className={styles.strength}>
      <p className={styles.strengthTitle}>strength</p>
      <div className={styles.strengthStatus}>
        <span className={styles.strengthMessage}>
          {strength ? strength : ""}
        </span>
        <div className={styles.strengthIndicators}>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <Indicator
                key={index}
                classes={index + 1 <= levelStrength ? strength : ""}
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
