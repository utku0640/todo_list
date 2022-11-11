import React from "react";
import TodoItem from "../todoItem/TodoItem";
import "./todoList.css";

function TodoList({ notes, removeItem }) {
  return (
    <div className="todoListContainer">
      {notes.map((note, index) => {
        return (
          <TodoItem
            note={note}
            key={index}
            id={index}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
