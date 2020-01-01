import { NoteLayout, NoteStaff, PitchedNote } from "./types";
import { middleC } from "./pitchedNotes";

// TODO
// import clefs from "./clefs";

// export type LedgerType = "Above" | "Below";

// export interface Ledger {
//   type: LedgerType;
//   lines: number;
// }

// export interface StaffPosition {
//   number: number;
//   note: PitchedNote;
//   ledger?: Ledger;
// }

// export interface StaffRule {
//   clef: Clef;
//   // positions: StaffPosition[];
//   notes: PitchedNote[];
//   positions: StaffPosition[];
//   getPosition: (note: PitchedNote) => StaffPosition;
//   getNote: (position: number | StaffPosition) => PitchedNote;
//   // [index: string]: StaffPosition;
// }

// export const wipStaff = (clef: Clef, notes: PitchedNote): WipStaff => {
//   const positions = (note: [PitchedNote]): StaffPosition => ({ position: 2, note: middleC });
//   return {
//     clef,
//     notes,
//     positions
//   };
// };

export const noteStaff = (layout: NoteLayout): NoteStaff => {
  const notesWithoutAccidentials = layout.notes.filter(x => x.accidential === undefined);
  const middleCIndex = notesWithoutAccidentials.indexOf(middleC);

  const getPosition = (note: PitchedNote): number => {
    const noteIndex = notesWithoutAccidentials.findIndex(x => x.symbol === note.symbol && x.pitch === note.pitch);

    return middleCIndex - noteIndex;
  };

  return {
    getPosition
  };
};
