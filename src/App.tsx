import React from "react";
import ReactDOM from "react-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import { GrandStaffOld } from "./components/GrandStaffOld";
import { pianoLayout } from "./noteSystem/noteLayouts";
import { useChordFinder } from "./components/ChordFinder";
import { ChordResult } from "./components/ChordResult";
import { GrandStaff } from "./components/Staffs";

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
      <GrandStaff notes={result.notes} />
      <ChordResult result={result.hits} />
      <GrandStaffOld notes={result.notes}></GrandStaffOld>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
