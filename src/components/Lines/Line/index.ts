import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles.jss";
import { Component } from "./Component";

export * from "../Props";
export * from "./Component";

export const Line = withStyles(styles)(Component);
