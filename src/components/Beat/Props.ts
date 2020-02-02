import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { NoteValue, Position } from "../../types";

export interface Props extends WithStyles<typeof styles> {
  values?: NoteValue[];
  position?: Partial<Position>;
}
