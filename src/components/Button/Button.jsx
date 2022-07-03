import styling from "./button.module.css";
import { useState, useEffect } from "react";
import Input from "../Input/Input";

const Button = () => {
  const [addTask, SetAddTask] = useState(true);
  console.log(addTask);
  const handleButton = (e) => {
    if (e.target.innerText === "Show Add Task Bar") {
      e.target.style.backgroundColor = "red";
    } else {
      e.target.style.backgroundColor = "blueviolet";
    }
    SetAddTask(!addTask);
  };

  return (
    <div className={styling.container}>
      {
        <button className={styling.btn} onClick={handleButton}>
          {addTask === true ? "Show Add Task Bar" : "Close Add Task Bar"}
        </button>
      }
      {addTask === false ? <Input /> : null}
    </div>
  );
};

export default Button;
