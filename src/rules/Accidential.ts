export interface Accidential {
  symbol: "b" | "#";
  type: "flat" | "sharp";
}

export const flat: Accidential = Object.freeze({ symbol: "b", type: "flat" });
export const sharp: Accidential = Object.freeze({ symbol: "#", type: "sharp" });
