import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles.jss";
import { Component } from "./Component";

export * from "./Props";
export * from "./styles.jss";

export const Hexagon = withStyles(styles)(Component);
