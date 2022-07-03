import React from "react";
import Task from "./Task";

const Tasks = ({ tasks,onDelete, onToogle }) => {
    return (
        <>
            {tasks?.map((task, index) => {
                return <Task 
                key={index} 
                task={task} 
                onDelete={onDelete}
                onToogle={onToogle}
                />;
            })}
        </>
    );
};

export default Tasks;
