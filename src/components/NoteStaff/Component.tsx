import React from "react";
import { Props } from ".";
import { LedgerLine, StaffLine } from "../Lines";
import { GClef, FClef } from "../Clefs";

import { range } from "../../utils/generators";
import { WholeNote } from "../Note";
import { StaffPosition } from "./StaffPosition";
import { G4 } from "../../noteSystem/pitchedNotes";

const lineSpacing = 25;
const firstLinePosition = -2;
const lastLinePosition = 3;

const yPosition = (index: number, additionalSpacing?: number) => (index + 2 + (additionalSpacing || 0)) * lineSpacing;

export const Component = (props: Props) => {
  const { classes } = props;
  const lines = [...range(-2, 3)].map(x => <StaffLine key={x} position={yPosition(x)} />);

  return (
    <g className={classes.root}>
      <g className={classes.notes}>
        <StaffPosition pos={0}>
          <WholeNote note={G4} />
        </StaffPosition>
      </g>
      <g className={classes.clef}>
        {props.clef === "G" && <GClef />}
        {props.clef === "F" && <FClef />}
      </g>
      <g className={classes.ledger}>
        {props.ledger && props.clef === "G" && (
          <>
            <LedgerLine position={yPosition(-9 + firstLinePosition)} />
            <LedgerLine position={yPosition(-8 + firstLinePosition)} />
            <LedgerLine position={yPosition(-7 + firstLinePosition)} />
            <LedgerLine position={yPosition(-6 + firstLinePosition)} />
            <LedgerLine position={yPosition(-5 + firstLinePosition)} />
            <LedgerLine position={yPosition(-4 + firstLinePosition)} />
            <LedgerLine position={yPosition(-3 + firstLinePosition)} />
            <LedgerLine position={yPosition(-2 + firstLinePosition)} />
            <LedgerLine position={yPosition(-1 + firstLinePosition)} />
            <LedgerLine position={yPosition(lastLinePosition)} />
          </>
        )}
        {props.ledger && props.clef === "F" && (
          <>
            <LedgerLine position={yPosition(-1 + firstLinePosition)} />
            <LedgerLine position={yPosition(lastLinePosition)} />
            <LedgerLine position={yPosition(lastLinePosition + 1)} />
            <LedgerLine position={yPosition(lastLinePosition + 2)} />
            <LedgerLine position={yPosition(lastLinePosition + 3)} />
            <LedgerLine position={yPosition(lastLinePosition + 4)} />
            <LedgerLine position={yPosition(lastLinePosition + 5)} />
          </>
        )}
      </g>
      <g className={classes.lines}>{lines}</g>
    </g>
  );
};
