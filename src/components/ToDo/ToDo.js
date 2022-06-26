import React from "react";

const ToDo = ({ toDo, toDos, setToDos }) => {
  const handleDelete = () => {
    setToDos(toDos.filter((t) => t !== toDo));
  };

  return (
    
    <div className="to-do">
      <p>{toDo}</p>
      <button onClick={handleDelete} >Delete</button>
      {/* <button class="btn"><i class="fa fa-trash"></i> Delete</button> */}
    </div>
  );
};

export default ToDo;
