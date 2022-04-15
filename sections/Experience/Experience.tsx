import React from "react";
import Timeline from "../../components/Timeline/Timeline";
import xpItems from "../../data/xpItems.json";
import styles from "./Experience.module.css";

/** React functional component containing the experience section's content
 *
 * @return {React.ReactNode}
 */
function Experience() {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Timeline
          items={xpItems}
          itemRelSize={0.55}
          itemRadius={25}
          lineWidth={7}
          lineHeight={100}
        />
      </div>
    </div>
  );
}

export default Experience;
