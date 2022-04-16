import React from "react";
import Timeline from "../../components/Timeline/Timeline";
import xpItems from "../../data/xpItems.json";
import styles from "./Experience.module.css";

/** React functional component containing the experience section's content
 *
 * @return {React.ReactNode}
 */
function Experience() {
  const itemHeight = 400;
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper} style={{ height: itemHeight }}>
        <Timeline
          items={xpItems}
          itemRelSize={0.55}
          itemRadius={20}
          lineWidth={7}
          lineHeight={itemHeight / 2}
          itemPadding={15}
        />
      </div>
    </div>
  );
}

export default Experience;
