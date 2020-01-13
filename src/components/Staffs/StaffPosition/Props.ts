import { ReactNode } from "react";
import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";

// export type Props  = PropsWithChildren<Props>;
export interface Props extends WithStyles<typeof styles> {
  children?: ReactNode;
  position: number;
}
