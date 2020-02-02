import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { MusicNote } from "@material-ui/icons";
import { Props } from ".";

export const Component = (props: Props) => {
  const { classes, result } = props;
  return (
    <List className={classes.root}>
      {result.map((value, index) => (
        <ListItem className={classes.item} key={index} button>
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
