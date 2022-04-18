import classNames from "classnames";
import React from "react";
import styles from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";

interface Props {
  items: Array<{
    title: string;
    description: string;
    start: number;
    end: number;
  }>;
  lineWidth: number;
  lineHeight: number | string;
  strokeColor?: string;
  itemHeight: number | string;
  itemColor?: string;
  itemInterval: number;
  loop: boolean;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function Timeline({
  items,
  lineWidth,
  lineHeight,
  strokeColor,
  itemHeight,
  itemColor,
  itemInterval,
  loop,
}: Props) {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        {items.map((item, i) => {
          return (
            <div
              key={item.title}
              className={styles.slide}
              style={{
                animationIterationCount: loop ? "infinite" : 1,
                animationDelay: `${i * itemInterval}s`,
                animationDuration: `${items.length * itemInterval}s`,
              }}
            >
              <div
                className={styles.line}
                style={{
                  height: lineHeight,
                  borderWidth: lineWidth,
                  borderColor: strokeColor,
                }}
              ></div>
              <TimelineItem
                itemHeight={itemHeight}
                itemTitle={item.title}
                itemDescription={item.description}
                itemColor={itemColor}
                strokeWidth={lineWidth}
              />
              <div
                className={classNames(styles.line, "-mt-2")}
                style={{
                  height: `calc(${lineHeight}*1.4)`,
                  borderWidth: lineWidth,
                  borderColor: strokeColor,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
