import { StringConvertible } from "string-converter";
import { Note, ScaleType, KeySignature } from ".";

export interface Scale extends StringConvertible {
  name: string;
  baseNote: Note;
  keySignature?: KeySignature;
  type: ScaleType;
  notes: Note[];
}

// export interface MajorScale extends Scale {
//   type: "Major";
//   relativeMinor: MinorScale;
//   parallellMinor: MinorScale;
// }

// export interface MinorScale extends Scale {
//   type: "Minor";
//   relativeMajor: MajorScale;
//   parallelMajor: MajorScale;
// }
