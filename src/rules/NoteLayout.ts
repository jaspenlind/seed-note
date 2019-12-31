import { Note, PitchedNote } from "./Note";
import { Octave } from "./Octave";

export interface NoteLayout {
  octaves: Octave[];
  notes: PitchedNote[];
  findNote: (note: string) => PitchedNote | Note | null;
}
