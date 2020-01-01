import { Note, PitchedNote } from "./types";

export const middleC: PitchedNote = Object.freeze({ symbol: "C", pitch: 4 });

export const create = (pitch: number, ...notes: Note[]): PitchedNote[] => {
  return notes.map(x => {
    if (x.symbol === middleC.symbol && x.accidential === undefined && pitch === middleC.pitch) {
      return middleC;
    }

    const pitchedNote = { ...{ pitch }, ...x };

    pitchedNote.toString = () => `${x.toString()}${pitch}`;

    return Object.freeze(pitchedNote);
  });
};
