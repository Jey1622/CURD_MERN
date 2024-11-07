import "./Todolist.css";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axiosInstance from "../axiosInstancs";

function Todolist(props) {
  const Todolist = ({ todolist, taskComplete, removeTask, tasktoUpdate, showPopup }) => {

    // Moved the functions outside of the map for efficiency
    const updateTask = async (task) => {
      try {
        const res = await axiosInstance.put(`http://localhost:4000/api/tasks/${task.id}`, {
          id: task.id,
          todo: task.todo
        });
        taskComplete(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    const deleteTask = async (id) => {
      try {
        const res = await axiosInstance.delete(`http://localhost:4000/api/tasks/${id}`);
        removeTask(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <ul>
        {todolist.map((task) => (
          <li key={task._id}> 
            <div style={{ display: "flex" }}>
              <p>{task.todo}</p>
            </div>
            <div>
              <EditIcon
                className="edit"
                onClick={() => {
                  tasktoUpdate(task);
                  showPopup();
                }}
              />
              <CloseIcon
                className="close"
                onClick={() => deleteTask(task.id)} 
              />
            </div>
          </li>
        ))}
      </ul>
    );
  };
}
export default Todolist
