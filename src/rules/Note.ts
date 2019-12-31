import { flat, sharp, Accidential } from "./Accidential";

export interface Note {
  symbol: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  accidential?: Accidential;
}

export interface PitchedNote extends Note {
  pitch: number;
}

const create = (meta: Partial<Note>): Readonly<Note> => {
  const note: Note = {
    ...{ symbol: "C" },
    ...meta
  };

  return Object.freeze(note);
};

export const middleC: PitchedNote = Object.freeze({ symbol: "C", pitch: 4 });

export const pitched = (pitch: number, ...notes: Note[]): PitchedNote[] => {
  return notes.map(x => {
    if (x.symbol === middleC.symbol && x.accidential === undefined && pitch === middleC.pitch) {
      return middleC;
    }
    return Object.freeze({ ...{ pitch }, ...x });
  });
};

export const A = create({ symbol: "A" });
export const As = create({ symbol: "A", accidential: sharp });
export const Bb = create({ symbol: "B", accidential: flat });
export const B = create({ symbol: "B" });
export const C = create({ symbol: "C" });
export const Cs = create({ symbol: "C", accidential: sharp });
export const Db = create({ symbol: "D", accidential: flat });
export const D = create({ symbol: "D" });
export const Ds = create({ symbol: "D", accidential: sharp });
export const Eb = create({ symbol: "E", accidential: flat });
export const E = create({ symbol: "E" });
export const F = create({ symbol: "F" });
export const Fs = create({ symbol: "F", accidential: sharp });
export const Gb = create({ symbol: "G", accidential: flat });
export const G = create({ symbol: "G" });
export const Gs = create({ symbol: "G", accidential: sharp });
export const Ab = create({ symbol: "A", accidential: flat });

export default {
  A,
  As,
  Bb,
  B,
  C,
  Cs,
  Db,
  D,
  Ds,
  Eb,
  E,
  F,
  Gb,
  G,
  Gs,
  Ab
};
