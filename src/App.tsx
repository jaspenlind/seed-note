import React, { useState } from "react";
import ReactDOM from "react-dom";
import { chords } from "tonal-index";
import { orderBy } from "lodash";

type ChordProps = {
  notes: string;
};

const Chord = ({ notes }: ChordProps) => {
  const split = notes.split(" ");
  const result = chords.all().filter(x => x.notes.every(z => split.includes(z)));

  const ranked = orderBy(result, x => x.notes.length, "desc");

  return ranked.length > 0 ? (
    <div>
      <p>Chords</p>
      {ranked.map((value, index) => (
        <div key={index}>
          {value.root}
          {value.type}({value.notes})
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  );
};

const App = () => {
  const [notes, setNotes] = useState("");

  return (
    <div>
      <h1>seed-note</h1>
      <label>
        <input type="text" placeholder="Find chord" onChange={e => setNotes(e.target.value)} />
      </label>
      <Chord notes={notes}></Chord>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
