import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])


  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks")
    const data = await res.json()
    console.log(data);
    return data
  }


  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`)
    const data = await res.json()
    console.log(data);
    return data
  }


  console.log(tasks);
  const addTask = async (task) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])


    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" })

    console.log(id);
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  const toogleReminder = async (id) => {
    const taskToToogle = await fetchTask(id)
    const updTask = {
      ...taskToToogle,
      reminder: !taskToToogle.reminder
    }
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(updTask)
    })

    const data = await res.json()
    setTasks(tasks?.map((task) =>
      task.id === id
        ? { ...task, reminder: !task.reminder }
        : task))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0
        ? <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToogle={toogleReminder} />
        : "Nothing to Show"}
    </div>
  );
}

export default App;
