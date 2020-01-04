import React from "react";
import { AccidentialProps, AccidenitialType, Flat, Sharp, Typed } from ".";

export const Accidential = (props: Typed<AccidentialProps, AccidenitialType>) => {
  const accidential = props.type === "flat" ? <Flat {...props} /> : <Sharp {...props} />;

  return accidential;
};
