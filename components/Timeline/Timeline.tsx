import { useTranslation } from "next-i18next";
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
  itemPadding: number;
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
  itemPadding,
}: Props) {
  const { t } = useTranslation("xp");
  const totalItemHeight = lineHeight * 2;
  // *5 is for taking the width of a symbol into account
  const maxTitleWidth = Math.max(...items.map((e) => t(e.title).length * 5));
  const maxDescWidth = Math.max(
    ...items.map((e) => t(e.description).length * 5)
  );
  // +30 is padding because of the box shadow
  const boxWidth =
    maxTitleWidth + maxDescWidth + itemRadius * 2 + lineWidth + 30 + 200;
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
            <foreignObject
              x={xCenter - itemRadius - lineWidth - itemPadding - 150}
              y={lineHeight + yZero - 75}
              width={150}
              height={150}
            >
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: t(item.title) }}
              ></div>
            </foreignObject>
            <foreignObject
              x={xCenter + itemRadius + lineWidth + itemPadding}
              y={lineHeight + yZero - 75}
              width={180}
              height={150}
            >
              <div
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: t(item.description) }}
              ></div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}
