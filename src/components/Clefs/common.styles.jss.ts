import { CSSProperties } from "react";

export const commonStyles = {
  path: {
    fill: "black",
    fillRule: "evenodd" as CSSProperties["fillRule"],
    stroke: "black",
    strokeWidth: 0,
    strokeLinecap: "butt" as CSSProperties["strokeLinecap"],
    strokeLinejoin: "round" as CSSProperties["strokeLinejoin"],
    strokeMiterlimit: 10
  }
};
