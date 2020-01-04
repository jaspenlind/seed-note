import React from "react";
import { Line, LineProps, TypedLineProps } from ".";

export const StaffLine = (props: LineProps) => {
  const lineProps: TypedLineProps = { ...{ type: "Staff" }, ...props };
  return <Line {...lineProps} />;
};
