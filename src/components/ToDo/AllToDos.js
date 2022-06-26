import React from "react";
import ToDo from "./ToDo";

const AllToDos = ({ toDos, setToDos }) => {
  return (
    <div>
      <h2 style={{color: "blue"}}>All ToDos</h2>
      {toDos.map((toDo) => (
        <ToDo toDo={toDo} toDos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
};

export default AllToDos;
