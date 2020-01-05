import React from "react";
import { withStyles, createStyles, makeStyles, WithStyles, Theme } from "@material-ui/core/styles";
import { AccidentialProps } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    sharp: {
      fill: "black",
      strokeWidth: 0.336731
    }
  })
);

export const Sharp = (props: AccidentialProps) => {
  const classes = useStyles();

  return (
    <g transform={props.transform}>
      <path
        className={classes.sharp}
        // style={style}
        d="M 7.1752214,46.926408 V 28.757992 l 7.5290916,-2.13199 V 44.701706 Z M 22,42.53106 16.823752,44.0528 V 25.977128 L 22,24.493982 v -7.508347 l -5.176248,1.483113 V 0 H 14.704313 V 19.028806 L 7.1752214,21.249642 V 3.2906972 H 5.176248 V 21.933278 L 0,23.420258 v 7.52381 L 5.176248,29.460922 V 47.501866 L 0,48.981146 v 7.492916 l 5.176248,-1.483114 v 18.36447 H 7.1752214 V 54.334312 l 7.5290916,-2.124258 v 17.866232 h 2.119439 V 51.538018 L 22,50.051006 Z"
      />
    </g>
  );
};
