import React from "react";
import { Line, LineProps, TypedLineProps } from ".";

export const BarLine = (props: LineProps) => {
  const lineProps: TypedLineProps = { ...{ type: "Bar" }, ...props };
  return <Line {...lineProps} />;
};
