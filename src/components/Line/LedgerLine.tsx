import React from "react";
import { Line, LineProps, TypedLineProps } from ".";

export const LedgerLine = (props: LineProps) => {
  const lineProps: TypedLineProps = { ...{ type: "Ledger" }, ...props };
  return <Line {...lineProps} />;
};
