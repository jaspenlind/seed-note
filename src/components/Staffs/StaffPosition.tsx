import React from "react";

import { translate } from "../../utils/transformation";

const lineSpacing = 25;
const yPosition = (index: number) => index * lineSpacing; // + 5;

export const StaffPosition = (props: { pos: number; children?: any }) => {
  return <g transform={translate(0, yPosition(props.pos))}>{props.children}</g>;
};
