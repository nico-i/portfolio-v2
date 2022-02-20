import { easeQuadInOut } from "d3-ease";
import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Animate } from "react-move";
import DynamicIcon from "../utils/DynamicIcon";
interface Props {
  startPercentage?: number;
  endPercentage: number;
  duration?: number;
  width?: number;
  skill: string;
  backgroundColor: string;
  pathColor: string;
  repeat?: boolean;
  icon: string;
  isInView: boolean;
}

export default function Skill(props: Props) {
  const {
    skill,
    width,
    endPercentage,
    backgroundColor,
    pathColor,
    icon,
    isInView,
  } = props;
  const startPercentage = props.startPercentage
    ? props.startPercentage
    : 0;
  const duration = props.duration ? props.duration : 1.4;
  return (
    <>
      <div style={{ width: width }}>
        <Animate
          start={() => ({
            value: startPercentage,
          })}
          update={() => ({
            value: [isInView ? endPercentage : startPercentage],
            timing: {
              duration: (duration ? duration : 1.4) * 1000,
              ease: easeQuadInOut,
            },
          })}
        >
          {({ value }) => {
            return (
              <CircularProgressbarWithChildren
                key={skill}
                background
                backgroundPadding={6}
                value={value}
                styles={buildStyles({
                  pathTransition: "none",
                  backgroundColor: backgroundColor,
                  pathColor: pathColor,
                  trailColor: "transparent",
                })}
              >
                <DynamicIcon name={icon} fill={pathColor} />
              </CircularProgressbarWithChildren>
            );
          }}
        </Animate>
      </div>
    </>
  );
}
