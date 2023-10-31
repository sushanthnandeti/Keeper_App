import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Area from "./Area";

function App() {
  const [myNotes, setmyNotes] = useState([]);

  function addingNote(newNote) {
    setmyNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deletingNote(id) {
    setmyNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Area onAdd={addingNote} />
      {myNotes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            headerText={noteItem.headerText}
            content={noteItem.content}
            onDelete={deletingNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
