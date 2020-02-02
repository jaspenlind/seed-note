import React from "react";
import { pianoLayout, naturals } from "../../noteSystem/noteLayouts";
import { middleC } from "../../noteSystem/pitchedNotes";
import { PitchedNote } from "../../noteSystem/types";
import { Measure } from "../Measure";
import { Dimensions, NoteValue, Position } from "../../types";

const layout = pianoLayout();
const { treble } = layout;
const naturalNotes = naturals(treble);
const middleCIndex = naturalNotes.indexOf(middleC);

export interface Props {
  notes: string;
}

export const GrandStaff = (props: Props) => {
  const notes = props.notes
    .trim()
    .split(" ")
    .filter(x => x !== "")
    .map(x => layout.findNote(x))
    .filter(x => x !== null)
    .map(x => x as PitchedNote);

  const values = notes.map(x => {
    const value: NoteValue = {
      pitch: x,
      value: 4
    };

    return value;
  });

  const width = 674;
  return (
    <svg width={1800} height={600} style={{ marginTop: "60px;", marginLeft: "7px" }}>
      <g transform="translate(0, 50) scale(0.5)">
        <Measure type={"start"} values={values} />
      </g>
    </svg>
  );
};

export const getNotePosition = (value: PitchedNote, dimensions: Dimensions): Position => {
  const { height, width } = dimensions;
  const noteIndex = findNaturalIndex(value);
  const oddY = noteIndex % 2 !== 0;
  const oddWidth = width % 2 !== 0;

  const yOffset = height - (oddWidth && oddY ? 0 : 1);

  const position: Position = {
    x: oddY ? width - 1 : width - 2,
    y: Math.floor(yOffset - middleCIndex - noteIndex * 0.5)
  };

  return position;
};

const findNaturalIndex = (value: PitchedNote) =>
  naturalNotes.findIndex(n => n.symbol === value.symbol && n.pitch === value.pitch);
