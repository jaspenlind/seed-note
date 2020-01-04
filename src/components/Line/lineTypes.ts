import { Dimensions, Direction, LineType } from ".";

export const lineTypes = new Map<LineType, [Dimensions, Direction]>([
  ["Bar", [{ y1: 39, y2: 350 }, "Vertical"]],
  ["Staff", [{ x1: 1, x2: 250 }, "Horizontal"]],
  ["Ledger", [{ x2: 30 }, "Horizontal"]]
]);
