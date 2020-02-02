import { PitchedNote } from "../noteSystem";

export interface NoteValue {
  pitch: PitchedNote;
  value: number;
}

export interface NoteValueNew {
  duration: number;
  modifier: number;
}
