import { PositionalProps } from "..";
import { Component as Line } from "../Line";

export const Component = (props: PositionalProps) =>
  Line({ ...props, ...{ x1: 1, x2: 250, y1: props.position, y2: props.position } });
