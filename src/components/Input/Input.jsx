import React from "react";
import styling from "./input.module.css";
import { useState } from "react";
import Tasks from "../Tasks/Tasks";

const Input = () => {
  const [task, setTask] = useState("");
  const [daytime, setdaytime] = useState("");
  const [btnClicked, setBtnClicked] = useState(false)
  const handleTask = () => {
    setBtnClicked(true)
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
            setdaytime(e.target.value);
          }}
          className={styling.form}
          id="day-time"
          name="day"
        />
      </div>
      <button className={styling.btn} onClick={handleTask}>
        Save Task
      </button>
      {btnClicked === true ? <Tasks task={task} daytime={daytime}/> : null}
    </div>
  );
};

export default Input;
