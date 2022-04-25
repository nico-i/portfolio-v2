import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React from "react";
import styles from "./TimelineItem.module.css";

interface Props {
  itemTitle: string;
  itemDescription: string;
  itemHeight: number | string;
  itemColor?: string;
  strokeWidth: number;
  strokeColor?: string;
}

/**
 *
 * @return {React.ReactNode}
 */
function TimelineItem({
  itemHeight,
  itemColor,
  itemTitle,
  itemDescription,
  strokeColor,
  strokeWidth,
}: Props) {
  const { t } = useTranslation("xp");
  return (
    <div className={styles.itemFlexBox}>
      <div
        className={classNames(
          styles.text,
          "justify-end text-right text-primary dark:text-primary_dark font-extrabold"
        )}
      >
        <span
          dangerouslySetInnerHTML={{ __html: t(itemTitle) }}
          style={{ height: itemHeight }}
        />
      </div>
      <div className={styles.itemBg}>
        <div
          className={styles.itemFrame}
          style={{
            borderWidth: strokeWidth * 1.5,
            borderColor: strokeColor,
            height: itemHeight,
            width: itemHeight,
          }}
        >
          <div className={styles.item} style={{ backgroundColor: itemColor }} />
        </div>
      </div>
      <div className={styles.text}>
        <span
          dangerouslySetInnerHTML={{ __html: t(itemDescription) }}
          style={{ height: itemHeight }}
        />
      </div>
    </div>
  );
}

export default TimelineItem;
