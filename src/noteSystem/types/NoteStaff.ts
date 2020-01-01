import { PitchedNote } from ".";

export interface NoteStaff {
  getPosition: (note: PitchedNote) => number;
}
