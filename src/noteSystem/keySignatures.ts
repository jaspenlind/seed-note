import { KeySignature, KeySignatureKey, KeySignatureType, KeySignatureName } from "./types";
import scales from "./scales";
import { flats, sharps } from "./notes";
// import notes, { create as createNote, flats, sharps, empty as emptyNote } from "./notes";

const emptyKey: KeySignatureKey = { key: scales.empty };
const createKey = (meta: Partial<KeySignatureKey>): KeySignatureKey => {
  return { ...emptyKey, ...meta };
};

export const empty: KeySignature = {
  name: "Zero",
  type: "SharpKeys",
  majorKey: emptyKey,
  minorKey: emptyKey,
  flats: [],
  sharps: []
};

export const create = (meta: Partial<KeySignature>): Readonly<KeySignature> => {
  const signature = { ...empty, ...meta };

  return Object.freeze(signature);
};

export const SharpKeys = [
  create({ name: "Zero", type: "SharpKeys", majorKey: createKey({ key: scales.CMajor }) }),
  create({
    name: "One",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.GMajor }),
    minorKey: createKey({ key: scales.AMinor }),
    sharps: [sharps.F]
  }),
  create({
    name: "Two",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.DMajor }),
    minorKey: createKey({ key: scales.EMinor }),
    sharps: [sharps.F, sharps.C]
  }),
  create({
    name: "Three",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.AMajor }),
    minorKey: createKey({ key: scales.BMinor }),
    sharps: [sharps.F, sharps.C, sharps.G]
  }),
  create({
    name: "Four",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.EMajor }),
    minorKey: createKey({ key: scales.CsMinor }),
    sharps: [sharps.F, sharps.C, sharps.G, sharps.D]
  }),
  create({
    name: "Five",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.BMajor, enharmonicEquivalentKey: scales.CbMajor }),
    minorKey: createKey({ key: scales.GsMinor, enharmonicEquivalentKey: scales.AbMinor }),
    sharps: [sharps.F, sharps.C, sharps.G, sharps.D, sharps.A]
  }),
  create({
    name: "Six",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.FsMajor, enharmonicEquivalentKey: scales.GbMajor }),
    minorKey: createKey({ key: scales.DsMinor, enharmonicEquivalentKey: scales.EbMinor }),
    sharps: [sharps.F, sharps.C, sharps.G, sharps.D, sharps.A, sharps.E]
  }),
  create({
    name: "Seven",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.CsMajor, enharmonicEquivalentKey: scales.DbMajor }),
    minorKey: createKey({ key: scales.AsMinor, enharmonicEquivalentKey: scales.BbMinor }),
    sharps: [sharps.F, sharps.C, sharps.G, sharps.D, sharps.A, sharps.E, sharps.B]
  })
];
