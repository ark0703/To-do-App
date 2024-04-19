import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Wake Up", "Brushing", "Washing"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAdd = (e) => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  function handleDelete(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  const handleUp = (i) => {
    if (i > 0) {
      const taskList = [...tasks];
      [taskList[i], taskList[i - 1]] = [taskList[i - 1], taskList[i]];
      setTasks(taskList);
    }
  };
  function handleDelete(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  const handleDown = (i) => {
    if (i > 0) {
      const taskList = [...tasks];
      [taskList[i], taskList[i + 1]] = [taskList[i + 1], taskList[i]];
      setTasks(taskList);
    }
  };

  return (
    <div className="to-do-container">
      <h1 className="heading">TO DO LIST</h1>
      <div className="input-section">
        <input
          type="text"
          id="task"
          placeholder="Enter Your Task "
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="btn " onClick={handleAdd}>
          {" "}
          Add Task
        </button>
      </div>
      <div className="tasks-section">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="btn btn-red"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button
                className="btn btn-yellow"
                onClick={() => handleUp(index)}
              >
                Up
              </button>
              <button
                className="btn btn-orange"
                onClick={() => handleDown(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
