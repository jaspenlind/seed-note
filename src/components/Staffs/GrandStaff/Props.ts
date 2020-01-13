import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";

export interface Props extends WithStyles<typeof styles> {
  notes: string;
}
