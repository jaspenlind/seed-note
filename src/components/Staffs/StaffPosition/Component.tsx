import React, { ReactChildren } from "react";
import { Props } from ".";

import { translate } from "../../../utils/transformation";

const lineSpacing = 25;
const yPosition = (index: number) => index * lineSpacing; // + 5;

export const Component = (props: Props) => {
  return <g transform={translate(0, yPosition(props.position))}>{props.children}</g>;
};
