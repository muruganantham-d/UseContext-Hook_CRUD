import React, { useContext } from "react";
import { TasksContext } from "../context/TaskContext";

const Navbar = () => {
  
  const {state} = useContext(TasksContext);
   
  return (
    <>
      <h1 className="text-center my-4 text-primary">UseContext-API</h1>
      <p className="text-center lead">{`Currently ${state.tasksList.length} task(s) pending`}</p>
    </>
  );
};

export default Navbar;
