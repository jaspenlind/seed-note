import React, { SVGAttributes } from "react";
import { pianoLayout } from "../noteSystem/noteLayouts";
import { grandStaff } from "../noteSystem/noteStaffs";
import { NoteStaff } from "./NoteStaff";
import { BarLine } from "./Line";

export const Brace = () => {
  return (
    <g transform="translate(0,192) scale(2.85)">
      <path
        style={{
          fill: "black",
          fillRule: "evenodd",
          stroke: "black",
          strokeWidth: 0,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 10
        }}
        d="m 6.3563222,17.757682 c -1.1997912,1.588481 -2.9186349,5.304994 -3.6062759,7.244894 -1.0312026,4.069706 -1.3749369,9.019732 -1.0312026,13.797599 0.1684159,1.586706 0.5123227,5.122185 1.0312026,7.951279 0.856057,6.724865 1.0313753,9.553959 1.0313753,12.383052 C 3.6061033,63.73134 2.4063121,67.438979 0.5123227,69.914879 0.1684165,70.268072 5e-7,70.621265 5e-7,70.802299 c 0,0.181033 0.168416,0.534226 0.5123222,0.887419 1.8939894,2.475901 3.0937806,6.18354 3.2690989,10.608213 0,3.001253 -0.1753183,5.830347 -1.0313753,12.374179 -0.5188799,3.010127 -0.8627867,6.54561 -1.0312026,7.96015 -0.3437343,4.95003 0,9.90006 1.0312026,13.78873 0.856057,3.18228 3.9500101,8.66654 4.8127968,8.66654 0.3437342,0 0.6874684,-0.3532 0.6874684,-0.70816 0,-0.17926 -0.3437342,-0.70639 -0.6874684,-1.24062 -2.0625779,-3.00125 -2.9253646,-6.0096 -3.2690988,-10.60643 0,-2.8291 0.1751457,-5.48426 1.0312027,-12.20202 C 5.6686812,97.682237 6.012588,94.49995 6.1877337,93.257563 6.8753747,84.772057 5.5002652,77.520065 2.0625779,72.216845 1.5435254,71.508685 1.1997912,70.802299 1.1997912,70.802299 c 0,0 0.3437342,-0.706386 0.8627867,-1.414547 C 5.5002652,64.084533 6.8753747,56.83254 6.1877337,48.166001 6.012588,47.104647 5.6686812,43.92236 5.324947,41.095042 4.46889,34.556534 4.2937443,31.901375 4.2937443,29.072282 4.6374785,24.475448 5.5002652,21.467096 7.5628431,18.465843 8.2503115,17.404489 8.4256298,17.051296 8.0818956,16.698103 7.5628431,16.343136 7.2191089,16.51707 6.3563222,17.757682 Z"
      />
    </g>
  );
};

export interface GrandStaffProps extends SVGAttributes<SVGElement> {
  notes: string;
}

export const GrandStaff = (props: GrandStaffProps) => {
  const staff = grandStaff(pianoLayout());

  return (
    <svg {...props} width={140} viewBox="0 0 280 715" style={{ outline: "1px solid #630" }}>
      <Brace />
      <g transform="translate(30,200)">
        <BarLine />
        {/* <BarLine /> */}
        <NoteStaff grandStaffPosition={"Above"} clef="G" transform="translate(0, 40)" ledger="true" />
        <NoteStaff grandStaffPosition={"Below"} clef="F" transform="translate(0, 250)" ledger="true" />
        <BarLine position={250} />
        {/* <BarLine x={250} /> */}
      </g>
    </svg>
  );
  // const upperPos = staff.treble.map((pos, index) => (
  //   <li key={index}>
  //     {pos.note.toString()}: {pos.position}{" "}
  //   </li>
  // ));

  // const lowerPos = staff.bass.map((pos, index) => (
  //   <li key={index}>
  //     {pos.note.toString()}: {pos.position}{" "}
  //   </li>
  // ));
  // return (
  //   <div>
  //     <p>Upper:</p>
  //     <ul>{upperPos}</ul>
  //     <p>Lower</p>
  //     <ul>{lowerPos}</ul>
  //   </div>
  // );
};
