import React from "react";
import { PitchedNote } from "../../noteSystem/types";
import { sharpTransform, Transformable } from ".";
import { Flat, Sharp } from "../Accidential";

export interface NoteProps extends Transformable {
  note: PitchedNote;
  innerTransform: string;
}

export const WholeNote = (props: NoteProps) => {
  const style = { fill: "black", strokeWidth: 0.336731 };
  return (
    <g transform={props.transform}>
      <path
        className="note"
        transform={props.innerTransform}
        style={style}
        d="m 61.246483,2 c -1.850972,-0.569701 -3.311428,-2.117849 -3.311428,-3.510288 0,-3.941179 8.465264,-5.500808 11.961215,-2.203714 3.78043,3.565405 -2.389057,7.640942 -8.649787,5.714002 z m 5.646374,-0.99009 c 1.029905,-1.571834 0.04522,-4.686089 -1.738647,-5.498879 -2.619695,-1.193612 -4.225475,0.84043 -3.134392,3.97033 0.754678,2.164882 3.825048,3.127982 4.873039,1.528549 z"
      />
      <Sharp transform={sharpTransform()} />
      {/* <Flat transform={flatTransform()} /> */}
    </g>
  );
};
