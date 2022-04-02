import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import styles from "./SkillCircle.module.css";
interface Props {
  size: number;
  percentage: number;
  duration: number;
  bgColor: string;
  pathColor: string;
  inView: boolean;
  Icon: IconType;
}
/**
 * Skillcircle component which represents a skill in a circle with
 * a circulare progression bar. The skill is represented
 * through an Icon in the middle of the circle.
 * @param {Props} props
 * @return {React.ReactNode}
 */

const SkillCircle = ({
  percentage,
  duration,
  size,
  bgColor,
  pathColor,
  inView,
  Icon,
}: Props) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(inView ? percentage : 0);
  }, [inView, percentage]);
  const relSize = 0.8;
  const strokeWidth = size * 0.075;
  const viewBox = "0 0 ${size} ${size}";
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * relSize * Math.PI * 2;
  const dash = (progress * circumference) / 100;
  const iconSize = size * 0.35;
  return (
    <div className={styles.skillWrapper}>
      <svg width={size} height={size} viewBox={viewBox}>
        <circle
          r={radius}
          fill={bgColor}
          cy={size / 2}
          cx={size / 2}
          strokeWidth={"${strokeWidth}px"}
        ></circle>
        <circle
          fill="none"
          stroke={pathColor}
          cy={size / 2}
          cx={size / 2}
          r={radius * relSize}
          strokeWidth={strokeWidth}
          transform={"rotate(-90 " + size / 2 + " " + size / 2 + ")"}
          strokeDasharray={dash + "," + (circumference - dash)}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray " + duration + "s" }}
        ></circle>
      </svg>
      <Icon
        size={iconSize}
        transform={"translate(-" + iconSize / 2 + " -" + iconSize / 2 + ")"}
        fill={pathColor}
        className={styles.skillIcon}
      />
    </div>
  );
};

export default SkillCircle;
