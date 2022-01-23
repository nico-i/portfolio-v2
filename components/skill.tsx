import React from "react";
import { IconType } from "react-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface Props {
  percentage: number;
  icon: IconType;
}

export default function Skill(props: Props) {
  return (
       <CircularProgressbar
        value={props.percentage}
        text={`${props.percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
  );
}
