import React from "react";
import { Dimensions, Props } from "..";

export const Component = (props: Props & Partial<Dimensions>) => {
  const { classes, x1, x2, y1, y2 } = props;

  return <line className={classes.root} x1={x1} x2={x2} y1={y1} y2={y2} />;
};
