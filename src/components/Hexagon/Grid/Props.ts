import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";

export interface Props extends WithStyles<typeof styles> {
  type?: "flat-topped" | "pointy-topped";
  width: number;
  height: number;
}
