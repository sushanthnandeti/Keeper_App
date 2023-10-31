import React, { useState } from "react";

function Area(props) {
  const [note, setmyNote] = useState({
    headerText: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setmyNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setmyNote({
      headerText: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="headerText"
          onChange={handleChange}
          value={note.headerText}
          placeholder="Header Text"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Start Writing Here!"
          rows="10"
        />
        <button onClick={submitNote}>Click to Add</button>
      </form>
    </div>
  );
}

export default Area;
