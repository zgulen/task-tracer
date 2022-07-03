import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "July 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Fed the Dog",
      day: "July 5th at 7:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "July 5th at 1:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Study Project",
      day: "July 5th at 11:30pm",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  const toogleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, reminder: !task.reminder }
        : task))
      }
      return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0
        ? <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToogle={toogleReminder} />
        : "Nothing to Show"}
    </div>
  );
}

export default App;
