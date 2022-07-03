import React, { useState } from "react";

const AddTask = () => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);
    return (
        <form className="add-form">
            <div className="form-control ">
                <label>Task</label>
                <input type="text" placeholder="Add a new Task" value={text} />
            </div>
            <div className="form-control ">
                <label>Day and Time</label>
                <input type="text" placeholder="Add day and Time" value={day} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
};

export default AddTask;
