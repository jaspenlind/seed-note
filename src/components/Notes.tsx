import React from "react";

export interface NoteProps {
  x: number;
  y: number;
}

const translate = (definition: Partial<NoteProps>) =>
  `translate(${(definition && definition.x) || 0}, ${(definition && definition.y) || 0})`;

export const WholeNote = (props: Partial<NoteProps>) => {
  return (
    <path
      transform={translate(props)}
      style={{ fill: "#000000", strokeWidth: 0.336731 }}
      d="m 61.246483,73.033116 c -1.850972,-0.569701 -3.311428,-2.117849 -3.311428,-3.510288 0,-3.941179 8.465264,-5.500808 11.961215,-2.203714 3.78043,3.565405 -2.389057,7.640942 -8.649787,5.714002 z m 5.646374,-0.99009 c 1.029905,-1.571834 0.04522,-4.686089 -1.738647,-5.498879 -2.619695,-1.193612 -4.225475,0.84043 -3.134392,3.97033 0.754678,2.164882 3.825048,3.127982 4.873039,1.528549 z"
    />
  );
};
