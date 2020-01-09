import React from "react";
import { Props } from "..";
import { Flat, Sharp } from "../../Accidentials";

export const Component = (props: Props) => {
  const { classes } = props;
  return (
    <g className={classes.root}>
      <path
        d="M 10.097404,22.884176 C 4.4533096,21.14701 0,16.426305 0,12.180397 0,0.16271999 25.812788,-4.5929938 36.47285,5.460702 48.000364,16.332546 29.187996,28.759916 10.097404,22.884176 Z m 17.21726,-3.019041 C 30.455112,15.072205 27.452552,5.5760342 22.013078,3.0976264 14.024948,-0.54200661 9.1285078,5.6603158 12.455503,15.204192 c 2.301209,6.601288 11.663565,9.53803 14.859161,4.660943 z"
        className={classes.note}
      />
      <g className={`${classes.accidential} ${classes.flat}`}>
        <Flat />
      </g>
    </g>
  );
};
