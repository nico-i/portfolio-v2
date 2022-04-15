import React from "react";
import styles from "./Timeline.module.css";

interface Props {
  items: Array<{
    title: string;
    description: string;
    start: number;
    end: number;
  }>;
  lineWidth: number;
  lineHeight: number;
  lineColor?: string;
  itemRadius: number;
  itemRelSize: number;
  itemColor?: string;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function Timeline({
  items,
  lineWidth,
  lineHeight,
  lineColor,
  itemRadius,
  itemRelSize,
  itemColor,
}: Props) {
  const totalItemHeight = lineHeight * 2;
  // + 30 is padding because of the box shadow
  const boxWidth = itemRadius * 2 + lineWidth + 30;
  const boxHeight = items.length * totalItemHeight;
  const xCenter = boxWidth / 2;
  return (
    <svg width={boxWidth} height={boxHeight}>
      {items.map((item, index) => {
        const yZero = totalItemHeight * index;
        return (
          <g key={item.title}>
            <line
              x1={xCenter}
              y1={yZero}
              x2={xCenter}
              y2={yZero + lineHeight - itemRadius}
              stroke={lineColor}
              strokeWidth={lineWidth}
              className={styles.line}
            ></line>
            <line
              x1={xCenter}
              y1={lineHeight + itemRadius + yZero}
              x2={xCenter}
              y2={lineHeight * 2 + yZero}
              stroke={lineColor}
              strokeWidth={lineWidth}
              className={styles.line}
            ></line>
            <circle
              cx={xCenter}
              cy={lineHeight + yZero}
              r={itemRadius}
              stroke={lineColor}
              fill="none"
              strokeWidth={lineWidth}
              className={styles.itemFrame}
            />
            <circle
              cx={xCenter}
              cy={lineHeight + yZero}
              r={itemRadius * itemRelSize}
              fill={itemColor}
              className={styles.item}
            />
          </g>
        );
      })}
    </svg>
  );
}
