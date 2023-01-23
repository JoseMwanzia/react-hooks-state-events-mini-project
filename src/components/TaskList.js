import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={() => handleDelete(index)}
        />
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
