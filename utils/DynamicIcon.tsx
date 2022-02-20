import React from "react";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";

interface Props {
  name: string;
  fill?: string;
}

function DynamicIcon(props: Props) {
  const { name } = props;
  const fill = props.fill ? props.fill : "#fff";
  const IconComponent = DiIcons[name] ? DiIcons[name] : SiIcons[name];

  if (!IconComponent) {
    return (
      <SiIcons.SiSquare
        size="40%"
        fill={fill}
        stroke={fill}
      />
    );
  }
  return (
    <IconComponent
      size="40%"
      fill={fill}
      stroke={fill}
    />
  );
}

export default DynamicIcon;
