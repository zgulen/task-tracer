import styling from "./button.module.css";
import { useState, useEffect } from "react";
import Input from "../Input/Input"

const Button = () => {
  const [addTask, SetAddTask] = useState(true);
  console.log(addTask);
  const handleButton =() =>{
    SetAddTask(!addTask)
  }
  const inputComp = () =>{
    if (addTask=== false){
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae voluptates rerum.</p>
    }
  }
    return (
    <div>
      {
        <button onClick={handleButton}>{addTask === true ?"Show Add Task Bar" : "Close Add Task Bar"}</button>
      }
      { addTask === false ? <Input /> : null }
    </div>
  );
};

export default Button;
