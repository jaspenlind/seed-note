import React from "react";
import { Props } from ".";
// import { pianoLayout } from "../noteSystem/noteLayouts";
// import { grandStaff } from "../noteSystem/noteStaffs";
import { Brace } from "../../Brace";
import { NoteStaff } from "../NoteStaff";
import { BarLine } from "../../Lines";

export const Component = (props: Props) => {
  const { classes } = props;
  // const staff = grandStaff(pianoLayout());

  return (
    <svg className={classes.root} width={140} viewBox="0 0 280 715">
      <Brace classes={{ root: classes.brace }} />
      <g className={classes.staffs}>
        <BarLine />
        <NoteStaff classes={{ root: classes.treble }} grandStaffPosition={"Above"} clef="G" ledger="true" />
        <NoteStaff classes={{ root: classes.bass }} grandStaffPosition={"Below"} clef="F" ledger="true" />
        <BarLine position={250} />
      </g>
    </svg>
  );
  // const upperPos = staff.treble.map((pos, index) => (
  //   <li key={index}>
  //     {pos.note.toString()}: {pos.position}{" "}
  //   </li>
  // ));

  // const lowerPos = staff.bass.map((pos, index) => (
  //   <li key={index}>
  //     {pos.note.toString()}: {pos.position}{" "}
  //   </li>
  // ));
  // return (
  //   <div>
  //     <p>Upper:</p>
  //     <ul>{upperPos}</ul>
  //     <p>Lower</p>
  //     <ul>{lowerPos}</ul>
  //   </div>
  // );
};
