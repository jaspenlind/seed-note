import React from "react";
import { WholeNote } from "./Notes";
import { pianoLayout } from "../rules/PianoLayout";
import { PitchedNote } from "../rules/Note";
import { noteStaff } from "../rules/NoteStaff";

export interface GrandStaffProps {
  notes: string;
}

export interface Staff {
  name: string;
  offsetY: number;
  lineCount: number;
  lineSpacing: number;
}

const createStaff = (props?: Partial<Staff>): Staff => {
  return { ...{ name: "empty", offsetY: 0, lineCount: 5, lineSpacing: 9 }, ...props };
};

const StaffLines = (props: Partial<Staff>) => {
  const staff = createStaff(props);
  const ys: number[] = [];
  for (let i = 0; i < staff.lineCount; i += 1) {
    ys.push(staff.offsetY + i * staff.lineSpacing);
  }
  return (
    <>
      {ys.map((x, i) => (
        <use key={`${staff.name}${i}`} href="#line" y={x} />
      ))}
      ;
    </>
  );
};

export const GrandStaff = (props: GrandStaffProps) => {
  const layout = pianoLayout();
  const staff = noteStaff(layout);
  const middlePositionsOnBassStaff = true;

  const yPos = (note: PitchedNote) => {
    const distance = 4.4;
    const gap = distance * 2;
    const index = staff.getPosition(note);

    if (index === 0) {
      return middlePositionsOnBassStaff ? gap : -gap;
    }

    const down = index > 0;
    return down ? index * distance + gap : index * distance - gap;
  };

  const notes = props.notes
    .trim()
    .split(" ")
    .filter(x => x !== "")
    .map(x => layout.findNote(x))
    .filter(x => x !== null)
    .map(x => x as PitchedNote);

  return (
    <svg id="svg2" height={325} width={97} {...props}>
      <defs id="staffdefs">
        <line id="line" x1="11.5" x2="435" stroke="black" strokeWidth="1" />
        <line id="barline" x1="11.25" x2="11.25" y1="17" y2="124" stroke="black" strokeWidth="1.5px" />
      </defs>
      <g transform="translate(0,64)" height="300">
        <g
          transform="matrix(0.20410436,0,0,1,8.1525373,-1.0024697)"
          id="lines"
          style={{ fill: "none", stroke: "black", strokeWidth: 1 }}
        >
          <StaffLines name="treble" offsetY={18.5} />
          <line transform="translate(230, 63)" x1={0} x2={90} y={0} stroke="black" strokeWidth="1" />
          {/* <line transform="translate(230, 72)" x1={0} x2={90} y={0} stroke="black" strokeWidth="1" /> */}
          <line transform="translate(230, 81)" x1={0} x2={90} y={0} stroke="black" strokeWidth="1" />
          <StaffLines name="bass" offsetY={90.5} />
        </g>
        <g transform="translate(0,72.5)">
          {notes.map((note, index) => (
            <WholeNote key={index} y={yPos(note)} accidential={note.accidential} />
          ))}
        </g>
        <use href="#barline" />
        <path
          id="paren"
          style={{
            fill: "#000000",
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 0,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeMiterlimit: 10
          }}
          d="m 6.3563222,17.757682 c -1.1997912,1.588481 -2.9186349,5.304994 -3.6062759,7.244894 -1.0312026,4.069706 -1.3749369,9.019732 -1.0312026,13.797599 0.1684159,1.586706 0.5123227,5.122185 1.0312026,7.951279 0.856057,6.724865 1.0313753,9.553959 1.0313753,12.383052 C 3.6061033,63.73134 2.4063121,67.438979 0.5123227,69.914879 0.1684165,70.268072 5e-7,70.621265 5e-7,70.802299 c 0,0.181033 0.168416,0.534226 0.5123222,0.887419 1.8939894,2.475901 3.0937806,6.18354 3.2690989,10.608213 0,3.001253 -0.1753183,5.830347 -1.0313753,12.374179 -0.5188799,3.010127 -0.8627867,6.54561 -1.0312026,7.96015 -0.3437343,4.95003 0,9.90006 1.0312026,13.78873 0.856057,3.18228 3.9500101,8.66654 4.8127968,8.66654 0.3437342,0 0.6874684,-0.3532 0.6874684,-0.70816 0,-0.17926 -0.3437342,-0.70639 -0.6874684,-1.24062 -2.0625779,-3.00125 -2.9253646,-6.0096 -3.2690988,-10.60643 0,-2.8291 0.1751457,-5.48426 1.0312027,-12.20202 C 5.6686812,97.682237 6.012588,94.49995 6.1877337,93.257563 6.8753747,84.772057 5.5002652,77.520065 2.0625779,72.216845 1.5435254,71.508685 1.1997912,70.802299 1.1997912,70.802299 c 0,0 0.3437342,-0.706386 0.8627867,-1.414547 C 5.5002652,64.084533 6.8753747,56.83254 6.1877337,48.166001 6.012588,47.104647 5.6686812,43.92236 5.324947,41.095042 4.46889,34.556534 4.2937443,31.901375 4.2937443,29.072282 4.6374785,24.475448 5.5002652,21.467096 7.5628431,18.465843 8.2503115,17.404489 8.4256298,17.051296 8.0818956,16.698103 7.5628431,16.343136 7.2191089,16.51707 6.3563222,17.757682 Z"
        />
        <path
          id="gclef"
          style={{
            fill: "#000000",
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 0,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeMiterlimit: 10
          }}
          d="m 28.782046,0.07851033 c -0.06747,0.0355 -0.310085,0.283974 -0.552701,0.534227 -2.473782,2.50962197 -3.983659,5.69190897 -4.367944,9.22738797 -0.0673,0.6034447 -0.0673,2.0534887 -0.03365,3.0101267 0.141497,3.569202 0.687469,6.252758 2.102957,10.814095 l 0.168588,0.638942 -0.997554,1.309831 c -3.22872,4.208144 -4.469062,6.080599 -5.534086,8.347069 -1.065024,2.261145 -1.583904,4.312859 -1.651374,6.579328 -0.101119,4.131826 1.685195,8.029372 4.880094,10.462677 2.615452,2.016217 5.776702,2.834418 9.180568,2.335688 0.276438,-0.03372 0.519054,-0.06922 0.519054,-0.03372 v 1.732243 c 0,3.959666 -0.242617,5.62269 -1.065025,7.356708 -0.51888,1.095076 -1.139051,1.906177 -1.893989,2.474126 -0.856057,0.672664 -1.718844,0.956638 -2.783868,0.956638 -1.206521,0 -2.271545,-0.353193 -3.23545,-1.095076 -0.303356,-0.214755 -0.822408,-0.748982 -1.031375,-1.061354 l -0.168416,-0.214755 0.134767,0.06922 c 1.172872,0.424186 2.682749,-0.102941 3.478066,-1.198017 0.64709,-0.887419 0.822408,-1.98427 0.478674,-3.148564 -0.411204,-1.483766 -1.550428,-2.474126 -2.959186,-2.543345 -1.341288,-0.0426 -2.716398,0.630068 -3.437687,1.801462 -0.545972,0.88032 -0.687469,1.941674 -0.377383,3.320724 0.377383,1.836958 1.550255,3.466261 3.195071,4.458396 1.071754,0.672664 2.338843,1.061353 3.612833,1.130572 2.271545,0.06922 4.266826,-1.025857 5.709233,-3.217783 0.963905,-1.483766 1.509876,-3.182287 1.651373,-5.267723 0.13494,-1.380824 0.13494,-1.98427 0.168589,-3.959666 v -2.017992 l 0.343734,-0.145536 c 1.408758,-0.56085 2.615279,-1.483766 3.646654,-2.793597 1.752493,-2.225648 2.339015,-5.157683 1.617725,-8.020498 -0.653819,-2.656934 -2.372663,-4.916304 -4.677857,-6.087698 -1.098845,-0.562624 -2.170598,-0.846598 -3.437687,-0.915817 l -0.586522,-0.04082 -0.134768,-0.596346 c -0.417933,-1.526362 -1.20652,-4.138925 -1.99528,-6.648548 l -0.175146,-0.498729 0.58635,-0.812877 c 2.440133,-3.216008 3.781422,-5.587193 4.644208,-7.958378 0.78876,-2.225649 1.065024,-4.561337 0.78876,-6.684044 -0.478673,-3.8531797 -2.581629,-8.6239477 -4.913914,-11.20988767 -0.417934,-0.457909 -0.620172,-0.560849 -0.896436,-0.38869 z m 2.130048,5.13105997 c 0.0673,0.104715 0.619998,1.233513 0.788587,1.622203 0.175146,0.4987297 0.343734,1.2068905 0.451583,1.774839 0.06747,0.596346 0.06747,2.5788407 0,3.1822867 -0.377383,3.320723 -1.584077,6.219036 -4.199356,9.969271 -0.235886,0.353193 -0.478501,0.708161 -0.57962,0.846598 l -0.175318,0.214756 -0.101119,-0.38869 c -0.620171,-1.982496 -1.240169,-4.492118 -1.442407,-5.942162 -0.107848,-0.706386 -0.107848,-2.051714 -0.03382,-2.7581 0.310086,-2.337463 1.098845,-4.2773617 2.507603,-6.080598 0.343735,-0.4650078 1.166143,-1.3098307 1.617725,-1.6647987 0.343735,-0.283975 1.065024,-0.811102 1.098673,-0.811102 0,0 0.03365,0.0355 0.06747,0.0355 z M 27.85179,29.718323 c 0.788587,2.509623 1.550427,5.234001 1.516606,5.267723 0,0 -0.175146,0.06922 -0.310086,0.06922 -0.451582,0.104716 -1.20652,0.354968 -1.617725,0.569724 -0.754938,0.386915 -1.341288,0.775604 -1.92781,1.37905 -1.786141,1.872455 -2.439961,4.666052 -1.651374,7.175674 0.310086,1.061354 0.896435,2.017992 1.685195,2.829094 0.620171,0.637167 1.24017,1.095075 2.102956,1.517487 0.411204,0.214756 0.478674,0.214756 0.687641,0.214756 0.202238,0 0.235886,0 0.377383,-0.102941 0.202237,-0.145537 0.343734,-0.429511 0.343734,-0.672664 -0.03365,-0.319471 -0.141497,-0.422412 -0.586349,-0.708161 -2.130048,-1.240612 -3.161251,-3.292326 -2.581631,-5.336941 0.417934,-1.526362 1.685195,-2.656934 3.437688,-3.043849 0.350464,-0.104716 0.997554,-0.181034 1.037932,-0.145537 0,0 0.13494,0.49873 0.343908,1.490865 0.647089,2.7581 1.098672,5.336941 1.374936,7.812842 0.202237,1.552984 0.377556,3.640195 0.303355,3.716513 -0.03365,0.03372 -0.721117,0.138437 -1.375108,0.172159 -2.129876,0.138438 -3.949838,-0.214755 -5.77653,-1.164294 -1.031376,-0.534227 -1.85361,-1.171394 -2.64237,-1.948774 -1.273818,-1.343553 -1.995109,-2.827318 -2.170426,-4.492117 -0.0673,-0.457909 -0.03365,-1.517488 0.03382,-2.190152 0.384112,-3.148564 1.617725,-6.080599 4.199355,-9.761615 0.721117,-1.061354 2.750046,-3.778632 2.817516,-3.778632 z m 4.644208,9.191892 c 2.6491,0.603445 4.60383,2.793597 5.089061,5.62269 0.03382,0.250252 0.03382,0.534227 0.03382,1.061354 0,0.637167 0,0.775605 -0.06747,1.164294 -0.0742,0.283975 -0.141497,0.637168 -0.208967,0.784479 -0.411204,1.233513 -1.307639,2.474126 -2.339015,3.180512 -0.377382,0.27865 -1.098672,0.631843 -1.132321,0.596346 0,-0.03372 -0.03365,-0.241378 -0.03365,-0.456134 -0.107849,-1.380825 -0.411205,-4.028885 -0.72129,-5.908439 -0.276437,-1.76774 -0.862787,-4.768993 -1.172872,-6.009605 l -0.06747,-0.173935 0.101118,0.0355 c 0.06747,0 0.276437,0.03372 0.519053,0.102941 z"
        />
        <path
          id="fclef"
          style={{
            fill: "#000000",
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 0,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeMiterlimit: 10
          }}
          d="m 25.268237,89.32352 c -2.53683,0.265141 -4.841162,1.959663 -6.022494,4.436011 -0.529277,1.114951 -0.793833,2.229902 -0.858444,3.45193 0,0.57787 0.03222,0.916095 0.167888,1.320605 0.458223,1.594244 2.071999,2.709194 3.717997,2.608924 1.581388,-0.10538 2.83361,-1.42089 3.059499,-3.152802 0.103277,-0.605065 -0.03222,-1.354598 -0.296944,-1.891678 -0.690556,-1.493967 -2.401166,-2.270694 -3.814831,-1.760808 l -0.264555,0.100278 0.06461,-0.205655 c 0.755167,-2.031046 2.175276,-3.518215 3.821274,-3.963515 1.581388,-0.40451 3.156332,0.03229 4.376331,1.188035 2.143053,2.099031 2.96283,6.334486 1.910554,10.058355 -0.232333,0.74444 -0.426,1.32061 -0.819777,2.09734 -0.793833,1.66053 -1.781499,3.01512 -3.298276,4.60767 -2.007553,2.03274 -4.608829,3.99751 -8.294603,6.22741 -0.690556,0.44529 -0.755167,0.51158 -0.755167,0.67815 0,0.23964 0.193666,0.4453 0.426,0.4453 0.03222,0 0.129056,-0.034 0.200111,-0.0663 0.06461,-0.0408 0.393777,-0.20735 0.722944,-0.33992 7.081048,-3.1528 11.52199,-6.3005 14.058655,-9.99207 1.516944,-2.23671 2.304332,-4.77254 2.304332,-7.381459 0,-4.607671 -2.768999,-7.655092 -7.539272,-8.333241 -0.9875,-0.171661 -2.142887,-0.205653 -2.865832,-0.13257 z m 12.741823,2.974337 c -0.593887,0.139369 -1.084333,0.644156 -1.219999,1.256019 -0.225889,0.948389 0.329168,1.898477 1.219999,2.097333 1.252222,0.305932 2.33672,-0.810719 2.039776,-2.097333 -0.193666,-0.917795 -1.116721,-1.487168 -2.039776,-1.256019 z m 0,8.438613 c -0.593887,0.13257 -1.084333,0.63736 -1.219999,1.24753 -0.225889,0.95008 0.329168,1.90018 1.219999,2.10582 1.252222,0.29914 2.33672,-0.81752 2.039776,-2.10582 -0.193666,-0.9093 -1.116721,-1.48717 -2.039776,-1.24753 z"
        />
      </g>
    </svg>
  );
};
