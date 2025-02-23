import React, { useState } from "react";
import styles from "../components/TaskCard.module.css";

const TaskCard = (props) => {
  const [toDo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  function createTask(event) {
    setTask(event.target.value);
  }

  const createToDo = () => {
    setTodo([
      ...toDo,
      {
        id: String(toDo.length),
        todo: task,
        status: "Not Done",
      },
    ]);
    setTask("")
  };

  const filterTodo = (id) => {
    const filteredRay = toDo.filter((t) => t.id != id);
    setTodo(filteredRay);
  };

  function handleProgress(event, id) {
    const statusUpdate = toDo.filter((t) => {
      if (t.id == id) {
        return (t.status = event.target.value);
      } else {
        return t;
      }
    });
    setTodo(statusUpdate);
  }

   const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createToDo();
    }

  }

  return (
    <>
   
      <div className={styles.ToDoApp}>
        <h1>To Do:</h1>
        <input
          name="Task"
          type="text"
          value={task}
          placeholder="What you gotta do?"
          onChange={createTask}
          onKeyDown={handleKeyPress}
        ></input>
        <button value={task} onClick={createToDo}>
          Create Task
        </button>{" "}
      </div>
      <h1 className={styles.listHeader}>This is {props.name}'s to do list</h1>
      <div className={styles.TodoArea}>
        {toDo &&
          toDo.map((x) => (
            <div key={x.id} className={styles.todoCard}>
              <button
                onClick={() => {
                  filterTodo(x.id);
                }}
              >
                X
              </button>{" "}
              <h3>To Do:</h3>
              <p>{x.todo}</p>
              <div className={styles.statusCss}>
                <label>
                  <b>Status: </b>
                  <select
                    name="Status"
                    onChange={(event) => handleProgress(event, x.id)}
                  >
                    <option value="Not Done">No</option>
                    <option value="In Process">In Process</option>
                    <option value="Completed">Yes</option>
                  </select>
                </label>
                {x.status == "Not Done" ? (
                  <h2>🚫</h2>
                ) : x.status == "In Process" ? (
                  <h2>👨‍💻</h2>
                ) : (
                  <h2>✅</h2>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TaskCard;
