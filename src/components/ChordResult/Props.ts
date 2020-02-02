import { Result } from "tonal-index";
import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";

export interface Props extends WithStyles<typeof styles> {
  result: Result[];
}
