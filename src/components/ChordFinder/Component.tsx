import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { orderBy } from "lodash";
import { chords } from "tonal-index";
import { ChordFinderResult, Props, useStyles } from ".";

export const Component = (props: Props) => {
  const classes = useStyles();
  const emptyState: ChordFinderResult = {
    notes: "",
    hits: []
  };

  const [result, setState] = useState(emptyState);

  const { layout } = props;

  const getNextState = (
    prev: ChordFinderResult,
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): ChordFinderResult => {
    if (!e.target) return prev;
    const notes = e.target.value;
    const split = notes.split(" ");

    const chordNotes = split
      .map(x => layout.findNote(x))
      .filter(x => x !== null)
      .map(x => `${x && x.symbol.toUpperCase()}${(x && x.accidential && x.accidential.symbol) || ""}`);

    if (chordNotes.length < 2) return emptyState;

    const root = chordNotes.length > 0 ? chordNotes[0] : "";

    const matches = chords.all().filter(x => x.notes.some(z => chordNotes.includes(z)));

    const ranked = orderBy(
      matches,
      [
        x => x.notes.length === chordNotes.length && x.notes.every((z, index) => chordNotes[index] === z),
        x => x.root === root,
        x => x.notes[0] === root,
        x => x.notes.length === chordNotes.length
      ],
      ["desc", "desc", "desc", "desc"]
    );

    if (ranked.length > 20) ranked.length = 20;

    return {
      notes,
      hits: ranked
    };
  };

  const ChordFinder = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Search />
      </div>
      <InputBase
        placeholder="Find chord…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={e => setState(prev => getNextState(prev, e))}
      />
    </div>
  );

  return { result, ChordFinder };
};
