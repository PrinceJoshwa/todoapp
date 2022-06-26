import React, { useState } from "react";

const AddToDo = ({ toDos, setToDos }) => {
  const [newToDo, setNewToDo] = useState("");

  const addToDo = () => {
    setToDos([...toDos, newToDo]);
    setNewToDo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button onClick={addToDo}>Add</button>
    </div>
  );
};

export default AddToDo;
