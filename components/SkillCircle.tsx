import classNames from "classnames";
import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
interface Props {
  size: number;
  percentage: number;
  duration: number;
  inView: boolean;
  svgStr: string;
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
  svgStr,
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
          "pointer-events-auto cursor-pointer fill-white drop-shadow-skill-circle transition-[fill] duration-300 ease-in will-change-[fill] dark:fill-primary",
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
          "stroke-primary transition-[stroke] duration-300 ease-in will-change-[stroke] dark:stroke-light",
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
      />
      <SVG
        src={`${svgStr}`}
        className={classNames(
          "fill-primary transition-[fill] duration-300 ease-in will-change-[fill] dark:fill-light",
          {
            "md:fill-primary md:dark:fill-light": !active,
          },
          {
            "md:fill-white md:dark:fill-primary": active,
          }
        )}
        height={iconSize}
        width={iconSize}
        x={size / 2 - iconSize / 2}
        y={size / 2 - iconSize / 2}
      />
    </svg>
  );
};

export default SkillCircle;
