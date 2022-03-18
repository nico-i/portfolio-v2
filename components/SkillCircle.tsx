import { easeQuadInOut } from "d3-ease";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  buildStyles,
  CircularProgressbarWithChildren
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IconType } from "react-icons";
import { Animate } from "react-move";

interface Props {
  startPercentage?: number;
  endPercentage: number;
  duration?: number;
  width?: number;
  skill: string;
  backgroundColor: string;
  pathColor: string;
  repeat?: boolean;
  icon: IconType;
  isInView: boolean;
}

export default function Skill(props: Props) {
  const { skill, width, endPercentage, backgroundColor, pathColor, isInView } =
    props;
  const startPercentage = props.startPercentage ? props.startPercentage : 0;
  const duration = props.duration ? props.duration : 1.4;
  return (
    <>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip id={skill.replace(/\s/g, "") + "-tooltip"}>
            <span style={{ fontSize: "0.6em" }}>{skill}</span>
          </Tooltip>
        }
      >
        <div style={{ width: width }}>
          <Animate
            start={() => ({
              value: startPercentage,
            })}
            update={() => ({
              value: [isInView ? endPercentage : startPercentage],
              timing: {
                duration: (duration ? duration : 2) * 1000,
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
                  <props.icon size={30} fill={pathColor} />
                </CircularProgressbarWithChildren>
              );
            }}
          </Animate>
        </div>
      </OverlayTrigger>
    </>
  );
}
