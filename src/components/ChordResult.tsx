import React from "react";
import { Result } from "tonal-index";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { MusicNote } from "@material-ui/icons";

export interface ChordResultProps {
  result: Result[];
}

export const ChordResult = (props: ChordResultProps) => {
  const { result } = props;
  return (
    <List>
      {result.map((value, index) => (
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
