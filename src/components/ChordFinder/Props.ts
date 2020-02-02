import { Result } from "tonal-index";
import { NoteLayout } from "../../noteSystem/types";

export interface Props {
  layout: NoteLayout;
}

export interface ChordFinderResult {
  notes: string;
  hits: Result[];
}
