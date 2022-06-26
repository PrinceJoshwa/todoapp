import React, { useState } from "react";
import AddToDo from "./AddToDo";
import AllToDos from "./AllToDos";
import "./ToDoApp.css";

const ToDoApp = () => {
  const [toDos, setToDos] = useState([]);

  return (
    <div>
      <h1 style={{color:"white"}}>ToDo List</h1>
      <AddToDo toDos={toDos} setToDos={setToDos} />
      <AllToDos toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default ToDoApp;
