import React from "react";
import ReactDOM from "react-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import { pianoLayout } from "./noteSystem/noteLayouts";
import { useChordFinder } from "./components/ChordFinder";
import { ChordResult } from "./components/ChordResult";
import { GrandStaff } from "./components/Staff";

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
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    }
  })
);

const App = () => {
  const classes = useStyles();

  const layout = pianoLayout();
  const { result, ChordFinder } = useChordFinder({ layout });

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
            {ChordFinder}
          </Toolbar>
        </AppBar>
      </div>
      <ChordResult result={result.hits} />
      <GrandStaff notes={result.notes} />
      {/* <GrandStaff notes={result.notes} /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
