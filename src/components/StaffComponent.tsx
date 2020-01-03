import React from "react";
import { gPosition, fPosition } from "../noteSystem/staffPositions";
import { pianoLayout } from "../noteSystem/noteLayouts";
import { grandStaff } from "../noteSystem/staffs";
import { G4 } from "../noteSystem/pitchedNotes";
// import { tempSignature } from "../noteSystem/keySignatures";
// import { staff, timeSignature } from "../noteSystem/staffs";
// import clefs from "../noteSystem/clefs";

export const StaffComponent = () => {
  const staff = grandStaff(pianoLayout());

  const upperPos = staff.treble.map((pos, index) => (
    <li key={index}>
      {pos.note.toString()}: {pos.position}{" "}
    </li>
  ));

  const lowerPos = staff.bass.map((pos, index) => (
    <li key={index}>
      {pos.note.toString()}: {pos.position}{" "}
    </li>
  ));
  return (
    <div>
      <p>Upper:</p>
      <ul>{upperPos}</ul>
      <p>Lower</p>
      <ul>{lowerPos}</ul>
    </div>
  );
};
