import "./Addtask.css";
import React, { useState } from "react";
import axiosInstance from "../axiosInstancs";
function AddTask(props) {
  const [task, Settask] = useState("");
  const addtask = () => {
    if (task.trim() === "") {
      return;
    } else {
      axiosInstance
        .post("http://localhost:4000/api/tasks", {
          todo: task
        })
        .then((res) => {
          Settask("");
          props.addTask(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="addtask">
      <input
        type="text"
        placeholder="Add Task . . ."
        value={task}
        onChange={(event) => Settask(event.target.value)}
      />
      <button onClick={() => addtask()}>Add Task</button>
    </div>
  );
}

export default AddTask;
