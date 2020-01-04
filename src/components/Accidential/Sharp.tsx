import React from "react";
import { AccidentialProps, styles } from ".";

export const Sharp = (props: AccidentialProps) => {
  const style = { fill: "black", strokeWidth: 0.336731 };

  return (
    <g transform={props.transform}>
      <path
        className="sharp"
        style={style}
        d="m 75.470977,116.92533 v -5.78086 l 2.39562,-0.67836 v 5.75136 z m 4.716975,-1.39852 -1.646988,0.48419 v -5.75135 l 1.646988,-0.47191 v -2.38902 l -1.646988,0.4719 v -5.87642 h -0.674367 v 6.05462 l -2.39562,0.70663 v -5.71421 H 74.83494 v 5.93173 l -1.646988,0.47313 v 2.39394 l 1.646988,-0.47191 v 5.7403 l -1.646988,0.47068 v 2.38411 l 1.646988,-0.4719 v 5.84324 h 0.636037 v -6.05217 l 2.39562,-0.6759 v 5.68471 h 0.674367 v -5.89854 l 1.646988,-0.47314 z"
      />
    </g>
  );
};
