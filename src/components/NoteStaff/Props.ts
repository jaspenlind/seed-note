import { KeySignatureType } from "../../noteSystem/types";

export interface Props {
  clef?: "F" | "G";
  ledger?: string;
  grandStaffPosition?: "Above" | "Below";
  transform?: string;
  keySignature?: { type: KeySignatureType; keys: number };
  classes: {
    root: string;
    notes: string;
    clef: string;
    lines: string;
    ledger: string;
  };
}
