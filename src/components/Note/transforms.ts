import { scale, transform, translate } from "../../utils/transformation";

export const sharpTransform = () => transform(translate(-130, -346), scale(3));
export const flatTransform = () => transform(translate(-93, -270), scale(2.5));
