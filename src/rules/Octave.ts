import note, { Note, PitchedNote, pitched } from "./Note";

export interface Octave {
  notes: PitchedNote[];
  pitch: number;
}

const { Ab, A, As, Bb, B, C, Cs, Db, D, Ds, Eb, E, F, Gb, G, Gs } = note;

export const create = (pitch: number, notes?: Note[]): Readonly<Octave> => {
  const notesInOctave = notes || [Ab, A, As, Bb, B, C, Cs, Db, D, Ds, Eb, E, F, Gb, G, Gs];
  const octave: Octave = {
    notes: pitched(pitch, ...notesInOctave),
    pitch
  };

  return Object.freeze(octave);
};

export const zero: Octave = create(0);
export const one: Octave = create(1);
export const two: Octave = create(2);
export const three: Octave = create(3);
export const four: Octave = create(4);
export const five: Octave = create(5);
export const six: Octave = create(6);
export const seven: Octave = create(7);
export const eight: Octave = create(8);

export const all = [zero, one, two, three, four, five, six, seven, eight];

export default {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight
};
