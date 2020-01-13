import React from "react";
import { Props } from ".";
import { Hexagon } from "../Hexagon";
import { range } from "../../../utils/generators";
import { translate } from "../../../utils/transformation";
import { WholeNote } from "../../Notes";
import { G4 } from "../../../noteSystem/pitchedNotes";

const size = { x: 10, y: 12.124 };

export const Component = (props: Props) => {
  const { classes, height, width, type } = props;
  const hexes = [...range(0, height)].map(h =>
    [...range(0, width)].map(w => {
      //
      const x = size.x * w;
      let y = size.y * h;

      if (w % 2 !== 0) {
        y += size.y * 0.5;
      }

      const pos = translate(x, y);
      let note: any;
      if (h === 1 && w === 1) {
        note = <WholeNote note={G4} />;
      }
      return (
        <Hexagon key={`hex${w}${h}`} type={type} transform={pos}>
          {note}
        </Hexagon>
      );
    })
  );
  return <g className={classes.root}>{hexes}</g>;
};
