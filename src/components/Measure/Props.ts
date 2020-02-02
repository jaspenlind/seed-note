import { ReactNode } from "react";
import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { NoteValue, Position } from "../../types";

export type Type = "start" | "regular";
export interface Props extends WithStyles<typeof styles> {
  children?: ReactNode;
  position?: Partial<Position>;
  type?: Type;
  values?: NoteValue[];
}
