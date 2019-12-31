import { Note } from "./Note";
import { Tonic } from "./Tonic";

export interface HepatonicNote {
  tonic: Tonic;
  note: Note;
  isLeading: boolean;
}

export interface HepatonicScale {
  tonic: HepatonicNote;
  supertonic: HepatonicNote;
  mediant: HepatonicNote;
  subdominant: HepatonicNote;
  dominant: HepatonicNote;
  submediant: HepatonicNote;
  subtonic: HepatonicNote;
}
