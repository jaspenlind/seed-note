import React from "react";
import { Props } from ".";
import { LedgerLine, StaffLine } from "../../Lines";
import { GClef, FClef } from "../../Clefs";
import { Grid, Hexagon } from "../../Hexagon";
import { range } from "../../../utils/generators";
import { WholeNote } from "../../Notes";
import { StaffPosition } from "../StaffPosition";
import { G4 } from "../../../noteSystem/pitchedNotes";

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
        <g transform="translate(-7, -12) scale(2.06)">
          <Grid width={4} height={8} />
        </g>
        {/* <g transform="scale(0.8)">
          <StaffPosition position={1}>
            <WholeNote note={G4} />
          </StaffPosition>
        </g> */}
      </g>
      <g className={classes.clef}>
        {props.clef === "G" && <GClef classes={{ root: classes.clef }} />}
        {props.clef === "F" && <FClef classes={{ root: classes.clef }} />}
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
