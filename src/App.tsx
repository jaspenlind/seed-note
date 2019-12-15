import React, { useState } from "react";
import ReactDOM from "react-dom";
import { chords } from "tonal-index";
import { orderBy } from "lodash";
import { AppBar, Toolbar, Typography, InputBase, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { createStyles, fade, Theme, makeStyles } from "@material-ui/core/styles";
import { Search, MusicNote } from "@material-ui/icons";
import { GrandStaff } from "./components/GrandStaff";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary,
      border: 0
    },
    staff: {
      width: "calc(100% - 97px)",
      height: "125px"
    },
    staffStart: {
      width: "97px",
      height: "125px"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
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

type ChordProps = {
  notes: string;
};

const Chord = ({ notes }: ChordProps) => {
  const split = notes.split(" ");
  const result = chords.all().filter(x => x.notes.every(z => split.includes(z)));

  const ranked = orderBy(result, x => x.notes.length, "desc");

  return (
    <List>
      {ranked.map((value, index) => (
        <ListItem key={index} button>
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText>
            {value.root}
            {value.type} ({value.notes})
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

const App = () => {
  const [notes, setNotes] = useState("");
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton> */}
            <Typography className={classes.title} variant="h6" noWrap>
              seed-note
            </Typography>
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
                onChange={e => setNotes(e.target.value)}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Chord notes={notes}></Chord>
      <GrandStaff notes={notes}></GrandStaff>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
