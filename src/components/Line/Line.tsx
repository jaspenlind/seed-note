import React from "react";
import { Dimensions, Direction, lineTypes, styles, TypedLineProps } from ".";

export const Line = (props: TypedLineProps) => {
  const { position, transform, type } = props;

  const line = lineTypes.get(type) as [Dimensions, Direction];
  const [dimension, direction] = line;
  const positionalDimensions = { x1: position, x2: position, y1: position, y2: position };

  const { x1, x2 } = direction === "Vertical" ? positionalDimensions : dimension;
  const { y1, y2 } = direction === "Horizontal" ? positionalDimensions : dimension;
  const className = `line ${type.toLowerCase()}`;

  return (
    <line
      className={className}
      transform={transform}
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
      stroke={styles.stroke}
      strokeWidth={styles.strokeWidth}
    />
  );
};

// const style = { fill: "black", strokeWidth: 0.336731 };
// const lineWidth = "1.5px";
// BarLine: return <line x1={props.x} x2={props.x} y1="39" y2="350" stroke="black" strokeWidth={lineWidth} />;
// StaffLine: <line key={x} y1={yPosition(x)} y2={yPosition(x)} x1={1} x2={250} stroke="black" strokeWidth={styles.lineWidth} />
// LedgerLine: return <line x1={0} x2={30} y1={props.y} y2={props.y} stroke="black" strokeWidth={styles.lineWidth} />;
