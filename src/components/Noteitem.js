import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  let [color, setColor] = useState(null);
  const arr = [
    "#FEF08A",
    "#FECACA",
    "#E9D5FF",
    "#BBF7D0",
    "#E1EFF8",
    "#FAE9E9",
  ];

  let index = 0;

  function getRandomColor() {
    let currentIndex = index;
    let randomIndex = Math.floor(Math.random() * arr.length);

    // ensure the same value is not selected twice in a row
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * arr.length);
    }

    index = randomIndex;
    return arr[index];
  }

  useEffect(() => {
    color = getRandomColor();
    console.log(color);
    setColor(color);
  }, []);

  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ backgroundColor: color }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-solid fa-trash-can mx-2"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted successfully", "success");
            }}
          />
          <i
            className="fa-solid fa-pen-to-square mx-2"
            onClick={() => {
              updateNote(note);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
