import { LineType } from ".";
import { Transformable } from "../shared";

export interface TypedLineProps extends LineProps {
  type: LineType;
}

export interface LineProps extends Transformable {
  position?: number;
}
