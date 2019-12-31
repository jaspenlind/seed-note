import { flat, sharp, Accidential } from "./Accidential";
import { NoteLayout } from "./NoteLayout";
import { Note, PitchedNote } from "./Note";
import octave, { create, Octave } from "./Octave";

const { zero, one, two, three, four, five, six, seven, eight } = octave;

export const pianoLayout = (): NoteLayout => {
  const [A0, As0, Bb0, B0] = zero.notes;
  const [A8, As8, Bb8, B8, C8] = eight.notes;
  const splitZero = create(0, [A0, As0, Bb0, B0]);
  const splitEight = create(8, [A8, As8, Bb8, B8, C8]);
  const octaves: Octave[] = [splitZero, one, two, three, four, five, six, seven, splitEight];
  const notes: PitchedNote[] = octaves.flatMap(x => x.notes);
  const defaultPitch = 5;

  const findPitch = (note: string): number | null => {
    const pitch = parseInt(note.substring(note.length - 1), 10);

    return Number.isNaN(pitch) ? null : pitch;
  };

  const findAccidential = (note: string): Accidential | null => {
    if (note.length < 2) return null;

    const sign = note[1];

    switch (sign) {
      case "b":
        return flat;
      case "#":
        return sharp;
      default:
        return null;
    }
  };

  const findNote = (note: string): PitchedNote | Note | null => {
    if (note === "") return null;
    const noteSymbol = note[0].toUpperCase();

    let filter = notes.filter(x => x.symbol === noteSymbol);

    if (filter.length === 0) return null;

    const pitch = findPitch(note) || defaultPitch;
    filter = filter.filter(x => x.pitch === pitch);

    const accidential = findAccidential(note);

    if (accidential !== null) {
      filter = filter.filter(x => x.accidential === accidential);

      return filter.length > 0 ? filter[0] : null;
    }

    filter = filter.filter(x => x.accidential === undefined);

    return filter.length > 0 ? filter[0] : null;
  };

  return {
    octaves,
    notes,
    findNote
  };
};
