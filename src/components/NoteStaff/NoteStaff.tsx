import React from "react";
import { LedgerLine, StaffLine } from "../Line";
import { GClef, FClef } from "../Clef";
import { KeySignatureType } from "../../noteSystem/types";
import { range } from "../../utils/generators";
import { WholeNote } from "../Note";
import { noteTransform } from "./transforms";
import { G4 } from "../../noteSystem/pitchedNotes";

export const styles = {
  lineWidth: "1.5px"
};

const lineSpacing = 25;
const firstLinePosition = -2;
const lastLinePosition = 3;

const yPosition = (index: number, additionalSpacing?: number) => (index + 2 + (additionalSpacing || 0)) * lineSpacing;

export interface NoteStaffProps {
  clef?: "F" | "G";
  ledger?: string;
  grandStaffPosition?: "Above" | "Below";
  transform?: string;
  keySignature?: { type: KeySignatureType; keys: number };
}

const Note = (props: { position: number }) => {
  return <WholeNote note={G4} transform={noteTransform(props.position)} />;
};

export const NoteStaff = (props: NoteStaffProps) => {
  const lines = [...range(-2, 3)].map(x => <StaffLine key={x} position={yPosition(x)} />);

  return (
    <g transform={props.transform}>
      <g className="notes" transform="translate(130,38)">
        <Note position={0} />
      </g>
      <g className="clef" transform="translate(0,0)">
        {props.clef === "G" && <GClef />}
        {props.clef === "F" && <FClef />}
      </g>
      <g className="lines ledger" transform="translate(163,0)">
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
      <g className="lines" transform="translate(0,0)">
        {lines}
      </g>
    </g>
  );
};
