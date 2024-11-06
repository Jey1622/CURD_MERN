import "./Updatetask.css";
import React, { useState } from "react";
import axiosInstance from "../axiosInstancs";
function Updatetask(props) {
  const [task, setTask] = useState(props.task.todo);

  const updateTask =async () => {
    if (task.trim() === "" || props.task.todo === task) {
      props.removePopup();
    } else {
      await axiosInstance
        .put(`http://localhost:4000/api/tasks/${props.task.id}`, {
          id: props.task.id,
          todo: task
        })
        .then((res) => {
          props.removePopup();
          props.updatetask(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <input
          type="text"
          placeholder="Update Task . . ."
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button onClick={() => updateTask()}>Update</button>
      </div>
    </div>
  );
}

export default Updatetask;
