import React, { SVGAttributes } from "react";
import { GClef, FClef } from "./Clef";

export const styles = {
  lineWidth: "1.5px"
};

export const LedgerLine = (props: { y?: number }) => {
  return <line x1={120} x2={150} y1={props.y} y2={props.y} stroke="black" strokeWidth={styles.lineWidth} />;
};

const lineSpacing = 25;
const firstLinePosition = -2;
const lastLinePosition = 3;

const yPosition = (index: number) => (index + 2) * lineSpacing;

export interface NoteStaffProps extends SVGAttributes<SVGElement> {
  clef?: "F" | "G";
  ledger?: string;
  grandStaffPosition?: "Above" | "Below";
}

function* range(begin: number, end: number, interval = 1) {
  for (let i = begin; i < end; i += interval) {
    yield i;
  }
}

export const NoteStaff = (props: NoteStaffProps) => {
  const lines = [...range(-2, 3)].map(x => (
    <line key={x} y1={yPosition(x)} y2={yPosition(x)} x1={1} x2={250} stroke="black" strokeWidth={styles.lineWidth} />
  ));

  return (
    <g {...props}>
      {props.clef === "G" && <GClef />}
      {props.clef === "F" && <FClef />}
      {props.ledger && props.clef === "G" && (
        <>
          <LedgerLine y={yPosition(-9 + firstLinePosition)} />
          <LedgerLine y={yPosition(-8 + firstLinePosition)} />
          <LedgerLine y={yPosition(-7 + firstLinePosition)} />
          <LedgerLine y={yPosition(-6 + firstLinePosition)} />
          <LedgerLine y={yPosition(-5 + firstLinePosition)} />
          <LedgerLine y={yPosition(-4 + firstLinePosition)} />
          <LedgerLine y={yPosition(-3 + firstLinePosition)} />
          <LedgerLine y={yPosition(-2 + firstLinePosition)} />
          <LedgerLine y={yPosition(-1 + firstLinePosition)} />
          <LedgerLine y={yPosition(lastLinePosition)} />
        </>
      )}
      {props.ledger && props.clef === "F" && (
        <>
          <LedgerLine y={yPosition(-1 + firstLinePosition)} />
          <LedgerLine y={yPosition(lastLinePosition)} />
          <LedgerLine y={yPosition(lastLinePosition + 1)} />
          <LedgerLine y={yPosition(lastLinePosition + 2)} />
          <LedgerLine y={yPosition(lastLinePosition + 3)} />
          <LedgerLine y={yPosition(lastLinePosition + 4)} />
          <LedgerLine y={yPosition(lastLinePosition + 5)} />
        </>
      )}
      {lines}
    </g>
  );
};
