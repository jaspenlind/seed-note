import { withStyles } from "@material-ui/core/styles";
import { Component } from "./Component";
import { styles } from "./styles.jss";

export * from "./Props";
export * from "../StaffPosition";

export const NoteStaff = withStyles(styles)(Component);
