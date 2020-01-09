import { PitchedNote } from "../../noteSystem/types";

export interface Props {
  note: PitchedNote;
  classes: {
    root: string;
    note: string;
    accidential: string;
    sharp: string;
    flat: string;
  };
}
