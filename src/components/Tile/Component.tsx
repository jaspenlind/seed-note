import React from "react";
import { translate } from "../../utils/transform";
import { Props } from ".";

export const Component = (props: Props) => {
  const { classes, children, coordinate, position } = props;
  const { x, y } = coordinate;

  const selectable = props.selectable ? " selectable" : "";

  return (
    <g className={`${classes.root}${selectable}`} transform={translate(position)}>
      <path
        className={classes.chrome}
        d="M19.8979592,-6.27471275 L8.43598329,2.87708347 L8.43598329,21.4979165 L19.8979592,30.6497127 L31.3599351,21.4979165 L31.3599351,2.87708347 L19.8979592,-6.27471275 Z"
        transform="translate(19.897959, 12.187500) rotate(90.000000) translate(-19.897959, -12.187500) "
      >
        <title>
          x: {x}, y: {y}
        </title>
      </path>
      <g className={classes.content}>{children}</g>
    </g>
  );
};
