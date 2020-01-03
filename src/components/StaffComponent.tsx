import React from "react";
import { pianoLayout } from "../noteSystem/noteLayouts";
import { grandStaff } from "../noteSystem/noteStaffs";

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
