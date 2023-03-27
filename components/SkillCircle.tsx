import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import classNames from "classnames";
interface Props {
  size: number;
  percentage: number;
  duration: number;
  inView: boolean;
  Icon: IconType;
  onClick?: () => void;
  active?: boolean;
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
  inView,
  Icon,
  onClick,
  active,
}: Props) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(inView ? percentage : 0);
  }, [inView, percentage]);
  const relSize = 0.8;
  const strokeWidth = size * 0.075;
  const viewBox = `0 0 ${size * 1.1} ${size * 1.1}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * relSize * Math.PI * 2;
  const dash = (progress * circumference) / 100;
  const iconSize = size * 0.35;
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox={viewBox}
      className="md:pointer-events-none"
    >
      <circle
        className={classNames(
          "cursor-pointer fill-white dark:fill-primary pointer-events-auto transition-[fill] duration-300 will-change-[fill] drop-shadow-skill-circle",
          { "md:fill-primary md:dark:fill-light": active },
          { "md:fill-white md:dark:fill-primary": !active }
        )}
        r={radius}
        cy={size / 2}
        cx={size / 2}
        strokeWidth={strokeWidth + "px"}
      />
      <circle
        className={classNames(
          "transition-[stroke] duration-300 stroke-primary dark:stroke-light will-change-[stroke]",
          { "md:stroke-primary md:dark:stroke-light": !active },
          { "md:stroke-white md:dark:stroke-primary": active }
        )}
        fill="none"
        cy={size / 2}
        cx={size / 2}
        r={radius * relSize}
        strokeWidth={strokeWidth}
        transform={"rotate(-90 " + size / 2 + " " + size / 2 + ")"}
        strokeDasharray={dash + "," + (circumference - dash)}
        strokeLinecap="round"
        style={
          inView
            ? {
                transition: "stroke-dasharray " + duration + "s",
                transitionDelay: "0.1s",
              }
            : { transition: "none" }
        }
      />{" "}
      <Icon
        size={iconSize}
        className={classNames(
          "transition-[fill] duration-300 will-change-[fill] fill-primary dark:fill-light stroke-primary dark:stroke-light",
          {
            "md:fill-primary md:dark:fill-light md:stroke-primary md:dark:stroke-light":
              !active,
          },
          {
            "md:fill-white md:dark:fill-primary md:stroke-white md:dark:stroke-primary":
              active,
          }
        )}
        x={size / 2 - iconSize / 2}
        y={size / 2 - iconSize / 2}
      />
    </svg>
  );
};

export default SkillCircle;
