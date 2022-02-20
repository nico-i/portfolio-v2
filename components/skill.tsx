import { easeQuadInOut } from "d3-ease";
import React, { Component } from "react";
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
}

interface State {
  isAnimated: boolean;
}

export default class Skill extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isAnimated: false };
  }

  componentDidMount() {
    const duration = this.props.duration ? this.props.duration : 1.4;
    const repeat = this.props.repeat ? this.props.repeat : false;
    if (repeat) {
      window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated,
        });
      }, duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated,
      });
    }
  }
  render() {
    const { skill, width, endPercentage, backgroundColor, pathColor, icon } =
      this.props;
    const startPercentage = this.props.startPercentage
      ? this.props.startPercentage
      : 0;
    const duration = this.props.duration ? this.props.duration : 1.4;
    return (
      <>
        <div style={{ width: width }}>
          <Animate
            start={() => ({
              value: startPercentage,
            })}
            update={() => ({
              value: [this.state.isAnimated ? endPercentage : startPercentage],
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
}
