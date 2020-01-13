import React from "react";
import { Props } from ".";

const flatTopped = "-3.5,6.0621778 -7,8.5725276e-16 -3.5,-6.0621778 3.5,-6.0621778 7,0 3.5,6.0621778 ";
const pointy = "6.9282032,-4 6.9282032,4 4.8985872e-16,8 -6.9282032,4 -6.9282032,-4 -1.4695762e-15,-8 ";

export const Component = (props: Props) => {
  const { children, classes, transform } = props;
  const points = props.type && props.type === "pointy-topped" ? pointy : flatTopped;
  return (
    <g className={classes.root}>
      <g className={classes.container}>
        <polygon className={classes.hex} points={points} transform={transform} />
        <g transform="scale(0.47)">{children}</g>
      </g>
    </g>
  );
};
