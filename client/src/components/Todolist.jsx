import "./Todolist.css";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axiosInstance from "../axiosInstancs";

function Todolist(props) {
  const todolist = props.todolist.map((task, index) => {
    const taskComplete =async (task) => {
     await axiosInstance
        .put(`http://localhost:4000/api/tasks/${task.id}`, {
          id: task.id,
          todo: task.todo
        })
        .then((res) => props.taskComplete(res.data))
        .catch((err) => console.log(err));
    };
    const removeTask = async (id) => {
     await axiosInstance
        .delete(`http://localhost:4000/api/tasks/${id}`)
        .then((res) => props.removeTask(res.data))
        .catch((err) => console.log(err));
    };
    return (
      <li key={index}>
        <div style={{ display: "flex" }}>
          <p>
            {task.todo}
          </p>
        </div>
        <div>
          <EditIcon
            className="edit"
            onClick={() => {
              props.tasktoUpdate(task);
              props.showPopup();
            }}
          />
          <CloseIcon
            className="close"
            onClick={() => {
              removeTask(task.id);
            }}
          />
        </div>
      </li>
    );
  });
  return (
    <div className="tasklist">
      <ul>{todolist}</ul>
    </div>
  );
}

export default Todolist;
