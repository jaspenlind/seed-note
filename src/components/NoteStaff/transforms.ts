import { scale, transform, translate } from "../../utils/transformation";

const lineSpacing = 25;

// transform="translate(-55,0) scale(2.9)"

export const yPosition = (index: number) => (index + 2) * lineSpacing + 5;
export const noteTransform = (index: number) => transform(translate(0, yPosition(index)));
export const noteInnerTransform = () => ""; // transform(translate(-55, 0), scale(2.9));
