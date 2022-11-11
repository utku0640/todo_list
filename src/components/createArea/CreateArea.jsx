import React, { useState } from "react";
import "./createArea.css";

function CreateArea({ takeNotes }) {
  const [note, setNote] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    takeNotes(note);
  };

  return (
    <div className="createAreaContainer">
      <form>
        <input
          type="text"
          placeholder=" you will do what today..."
          name="todo"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
