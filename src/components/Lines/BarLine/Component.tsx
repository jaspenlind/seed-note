import { PositionalProps } from "..";
import { Component as Line } from "../Line";

export const Component = (props: PositionalProps) =>
  Line({ ...props, ...{ x1: props.position, x2: props.position, y1: 39, y2: 350 } });
