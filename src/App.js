import { useState } from "react";
import CreateArea from "./components/createArea/CreateArea";
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";
function App() {
  const [notes, setNotes] = useState([]);

  const takeNotes = (note) => {
    setNotes((prevValue) => [...prevValue, note]);
  };

  const removeItem = (id) => {
    setNotes((prevValue) => prevValue.filter((item, index) => index !== id));
  };

  return (
    <div>
      <Header />
      <CreateArea takeNotes={takeNotes} />
      <TodoList notes={notes} removeItem={removeItem} />
    </div>
  );
}

export default App;
