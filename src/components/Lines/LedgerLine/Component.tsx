import { PositionalProps } from "..";
import { Component as Line } from "../Line";

export const Component = (props: PositionalProps) =>
  Line({ ...props, ...{ y1: props.position, y2: props.position, x2: 30 } });
