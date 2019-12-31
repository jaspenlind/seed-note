import { middleC, PitchedNote } from "./Note";
import { NoteLayout } from "./NoteLayout";

export interface NoteStaff {
  getPosition: (note: PitchedNote) => number;
}

export const noteStaff = (layout: NoteLayout): NoteStaff => {
  const notesWithoutAccidentials = layout.notes.filter(x => x.accidential === undefined);
  const middleCIndex = notesWithoutAccidentials.indexOf(middleC);

  const getPosition = (note: PitchedNote): number => {
    const noteIndex = notesWithoutAccidentials.findIndex(x => x.symbol === note.symbol && x.pitch === note.pitch);

    console.log(middleCIndex);
    console.log(noteIndex);
    return middleCIndex - noteIndex;
  };

  return {
    getPosition
  };
};
