import React from "react";
import styling from "./input.module.css";
import { useState } from "react";

const Input = () => {
  const [task, setTask] = useState("");
  const [task1, setTask1] = useState("");
  console.log(task);
  console.log(task1);
  const handleTask = () => {
    
  };
  return (
    <div>
      <div className={styling.firstinput}>
        <label htmlFor="task">Task</label>
        <br />
        <input
          type="text"
          onKeyUp={(e) => {
            setTask(e.target.value);
          }}
          className={styling.form}
          name="task"
          id="task"
        />
      </div>
      <div className={styling.secondinput}>
        <label htmlFor="day-time">Day & Time</label>
        <br />
        <input
          type="text"
          onKeyUp={(e) => {
            setTask1(e.target.value);
          }}
          className={styling.form}
          id="day-time"
          name="day"
        />
      </div>
      <button className={styling.btn} onClick={handleTask}>
        Save Task
      </button>
    </div>
  );
};

export default Input;
