import { Note, KeySignature, KeySignatureType, Scale, ScaleType } from "./types";
import notes, { empty as emptyNote, flats, sharps } from "./notes";

const { A, As, Bb, B, C, Cs, Db, D, Ds, Eb, E, F, Fs, Gb, G, Gs, Ab } = notes;

export const empty: Scale = Object.freeze({
  name: "empty",
  baseNote: emptyNote,
  type: "Major",
  notes: [],
  toString: () => ""
});

const create = (meta: Partial<Scale>): Scale => {
  const scale = { ...empty, ...meta };
  const name = `${scale.baseNote.toString()} ${scale.type}`;

  scale.name = name;
  scale.toString = () => name;
  return scale;
};

// enharmonically equivalent
const getEnharmonicEquivalent = (scale: Scale): Scale => {
  // TODO
  return scale;
};

const getRelative = (scale: Scale): Scale => {
  // TODO
  return scale;
};

const getParallell = (scale: Scale): Scale => {
  // TODO
  return scale;
};
//   relativeMajor: MajorScale;
//   parallelMajor: MajorScale;

const CMajor = create({ baseNote: notes.C, notes: [C, D, E, F, G, A, B] });
const DMajor = create({ baseNote: notes.D, notes: [D, E, F, G, A, B, Cs] });
const EMajor = create({ baseNote: notes.E, notes: [E, Fs, Gs, A, B, Cs, Ds] });
const FMajor = create({ baseNote: notes.E, notes: [F, G, A, Bb, C, D, E] });
const GMajor = create({ baseNote: notes.G, notes: [G, A, B, C, D, E, Fs] });
const AMajor = create({ baseNote: notes.A, notes: [A, B, Cs, D, E, Fs, Gs] });
const BMajor = create({ baseNote: notes.B, notes: [B, Cs, Ds, E, Fs, Gs, As] });
const FsMajor = create({ baseNote: Fs, notes: [Fs, Gs, As, B, Cs, Ds, sharps.E] });
const CsMajor = create({
  baseNote: notes.Cs,
  notes: [Cs, Ds, sharps.E, Fs, Gs, As, sharps.B]
});
const AbMajor = create({
  baseNote: Ab,
  notes: [Ab, Bb, C, Db, Eb, F, G]
});
const BbMajor = create({ baseNote: Bb, notes: [Bb, C, D, Eb, F, G, A] });
const CbMajor = create({ baseNote: flats.C, notes: [flats.C, Db, Eb, flats.F, Gb, Ab, Bb] });
const DbMajor = create({ baseNote: Db, notes: [Db, Eb, F, Gb, Ab, Bb, C] });
const EbMajor = create({ baseNote: Eb, notes: [Eb, F, G, Ab, Bb, C, D] });
const GbMajor = create({ baseNote: Gb, notes: [Gb, Ab, Bb, flats.C, Db, Eb, F] });

// TODO: Minor scales & key signatures
