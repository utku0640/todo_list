import React from "react";
import "./todoItem.css";
import { BsTrashFill } from "react-icons/bs";
function TodoItem({ note, id, removeItem }) {
  return (
    <div className="todoItemContainer">
      <p>{note.todo}</p>
      <button onClick={() => removeItem(id)}>
        <BsTrashFill />
      </button>
    </div>
  );
}

export default TodoItem;
