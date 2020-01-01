import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { createStyles, fade, Theme, makeStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";
import { orderBy } from "lodash";
import { chords, Result } from "tonal-index";
import { NoteLayout } from "../noteSystem/types";

export interface ChordFinderProps {
  layout: NoteLayout;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    }
  })
);

export interface ChordFinderResult {
  notes: string;
  hits: Result[];
}

export const useChordFinder = (props: ChordFinderProps) => {
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
