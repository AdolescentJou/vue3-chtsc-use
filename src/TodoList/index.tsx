import React from "react";
import TaskCreateBox from "./taskCreateBox";
import TaskList from "./taskList";
import "antd/dist/antd.css";
function ToDoListDemo() {
  return (
    <>
      <TaskCreateBox />
      <TaskList />
    </>
  );
}

export default ToDoListDemo;
