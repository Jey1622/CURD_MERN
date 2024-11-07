import React, { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Todolist from "./components/Todolist";
import Updatetask from "./components/Updatetask";
import axiosInstance from "./axiosInstancs";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NavigateBar from "./components/NavigateBar";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [tasktoUpdate, setTasktoUpdate] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("http://localhost:4000/api/tasks")
      .then((res) => {
        setTodolist(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addTask = (newTask) => {
    setTodolist([...todolist, newTask]);
  };

  

  const removeTask = (task) => {
    const newList = todolist.filter((item) => !(item.id === task.id));
    setTodolist(newList);
  };

  const updatetask = (task) => {
    const newList = todolist.map((item) =>
      item._id === task._id ? { ...item, todo: task.todo } : item
    );
    setTodolist(newList);
  };
    
   
  return (
    <Router>
      <NavigateBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/tasks"
          element={
            <div>
              <AddTask addTask={addTask} />
              <Todolist
        todolist={todolist}
        removeTask={removeTask}
        tasktoUpdate={(task) => setTasktoUpdate(task)}
        showPopup={() => setShowPopup(!showPopup)}
      />
              {showPopup && (
                <Updatetask
                  task={tasktoUpdate}
                  updatetask={updatetask}
                  removePopup={() => setShowPopup(false)}
                />
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
